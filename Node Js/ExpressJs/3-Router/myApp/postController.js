exports.getAllposts =(req, res)=>{
    let {category,page,decoration} = req.query;
    res.send('Render all posts');
}

exports.getSingleposts = (req, res)=>{
    res.send('I am posts = '+ req.params.postId);
}

exports.createNewposts = (req, res)=>{
    res.send('create new post');
}

exports.updateNewposts = (req, res)=>{
    res.send('updating existing posts = '+req.params.postId);
}

exports.deleteNewposts = (req, res)=>{
    res.send('delete existing posts = '+req.params.postId);
}