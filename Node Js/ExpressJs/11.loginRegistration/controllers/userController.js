const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../Models/User");

//it's used by use.js
const registrationController = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.json({
                error: err,
            });
        }

        // res.json({
        //     hash,
        //     Original: req.body.password
        // })

        const user = new User({
            email: req.body.email,
            password: hash,
        });

        user.save()
            .then((data) => {
                res.status(201).json({
                message: "user added",
                user: data,
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                message: "Error Occured",
                Error: err,
                });
            });

    });

};

const getAllUsers = (req, res, next) => {

    User.find()
        .then((data) => {
            res.status(201).json({
                user: data,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: "Error Occured",
                Error: err,
            });
        });
};

const loginController = (req, res, next)=> {
    //email and password ke body theke extract kore nilam
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email})
        .then(userLogin => {
            if(userLogin) {
                bcrypt.compare(password, userLogin.password, (err, result) => {
                    //userLogin.password that we store in the db previously.
                    if(err){
                        res.json({
                            message: 'Error Occured'
                        })
                    }

                    if(result) {
                        //aikhane amra jsonwebToken use korbo 
                        //rest api er jonno cookies er poriborte aita use hoi.
                        let token = jwt.sign({email: userLogin.email, _id: userLogin._id},
                             'SECRET', {expiresIn: '2h'});

                        res.json({
                            message: 'Login Successful',
                            token
                        })
                    }else {
                        res.json({
                            message: 'Login Failed. Password dosen\'t match'
                        })
                    }
                })
            }else{
                res.json({
                    message: 'user not found'
                })
            }

        })
}

module.exports = {
  registrationController,
  loginController,
  getAllUsers
};
