const express = require('express');
const router  = express.Router();
const Post = require('../models/Post');


//GET ALL POSTS
router.get('/',async (req,res) => {

    try {
        const posts = await Post.find();
        res.json(posts);
        
    }
    catch(err) {
        res.json({message: err });
    }
});

// POST A PARTICULAR POST
router.post('/',(req,res)=> {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
     
    post.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        
        res.status(200).json({message:err});
    });
});

// GET SPECIFIC POST

router.get('/:postId',async (req,res)=> {
    try {

        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err) {
        res.json({message: err});
    }
    
});

// DELETE SPEFIC POST

router.delete('/:postId',async (req,res)=> {
         try {
          
          const removed = await Post.remove({_id: req.params.postId});
          res.json(removed);


         }
         catch(err){

             res.json({message: err});

         }
});

// Update a Post 

router.patch('/:postId',async (req,res)=> {
    try {

        const updated = await Post.updateOne({_id: req.params.postId}, { $set:{title: req.body.title}});
        res.json(updated)

    }
    catch(err) {

         res.json({message: err});

    }
    

});

module.exports = router;