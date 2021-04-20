const User = require('../../models/User');
const UserSession = require('../../models/UserSession')
const router = require('express').Router();

// for test
//    router.post('/get', (req, res) => {
//        const name = req.body.name;
//        const password = req.body.password;
//        const newSession = new UserSession({
//            name,
//            password
//        });

//        newSession.save()
//         .then(() => res.json('Login successfully done'))
//         .catch(err => res.status(400).json(err))
//    });

/*
/sign up
*/
router.post('/api/account/signup', (req, res) => {
    const { body } = req;
    const {
        firstName,
        lastName,
        password
    } = body;
    let {
        email
    } = body;

    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const password = req.body.password;
    // let email = req.body.email;

    if (!firstName) {
        return res.send({
            success: false,
            message: 'Error: firstName can not be blank.'
        })
    }
    if (!lastName) {
        return res.send({
            success: false,
            message: 'Error: lastName can not be blank.'
        })
    }
    if (!email) {
        return res.send({
            success: false,
            message: 'Error: email can not be blank.'
        })
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: password can not be blank.'
        })
    }

    email = email.toLowerCase();

    //Steps:
    //Varify email doesn't exist
    //Save

    User.find({
        email: email
    }, (err, previousUsers) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server Error at first stage.'
            })
        } else if (previousUsers.length > 0) {
            return res.send({
                success: false,
                message: 'Error: Account already exist.'
            })
        }
        // Save the new user
        const newUser = new User();
        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);

        newUser.save((err, user) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error at last stage.'
                })
            }
            return res.send({
                success: true,
                message: 'Singed Up'
            });
        });
    });

});

// Signin
router.post('/api/account/signin', (req, res) => {
    const { body } = req;
    const {
        password
    } = body;
    let {
        email
    } = body;

    if (!email) {
        return res.send({
            success: false,
            message: 'Error: email can not be blank.'
        })
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: password can not be blank.'
        })
    }

    email = email.toLowerCase();
    User.find({
        email: email
    }, (err, users) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server Error.'
            })
        } else if (users.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid.'
            });
        }

        const user = users[0];
        if (!user.validPassword(password)) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }

        // Otherwise curect user
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server Error at last stage.'
                })
            }
            return res.send({
                success: true,
                message: 'Singed In',
                token: doc._id
            });
        });

    });

});

// Verify
router.get('/api/account/verify', (req, res) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // [?token = test]
    // verify the token is one of a kind and it's not deleted

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server is not working'
            });
        }
        console.log(sessions.length)
        if (sessions.length !== 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        } else {
            return res.send({
                success: true,
                message: 'Very good'
            });
        }
    });


});

// Logout
router.get('/api/account/logout', (req, res) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // [?token = test]
    // verify the token is one of a kind and it's not deleted

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set: {
            isDeleted: true
        }        
    }, null, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server is not working'
            });
        }

        return res.send({
            success: true,
            message: 'good'
        });

    });


});

module.exports = router;