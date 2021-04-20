const router = require('express').Router();
const {
    getSingleposts,
    getAllposts,
    createNewposts,
    updateNewposts,
    deleteNewposts
} = require('./postController');

router.get('/',getAllposts)

router.get('/:postId',getSingleposts);

router.post('/',createNewposts)

router.put('/:postId',updateNewposts)

router.delete('/:postId',deleteNewposts)

module.exports = router;