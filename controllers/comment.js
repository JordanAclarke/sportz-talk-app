/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const commentApi = require('../models/comment.js')
const postApi = require('../models/post.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const commentRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

commentRouter.get('/', (req, res) => {
  commentApi.getAllComments()
  .then((comments) => {
    res.send(comments)
  })
})
 commentRouter.get('/new', (req, res) => {
  postApi.getPost(req.params.postId)
  .then((post) => {
    res.render('comments/newCommentForm', {post})
  })
  
})

commentRouter.post('/', (req, res) => {
  console.log("this is a check "+req.params.postId)
  //req.body.postId = req.params
  req.body.postId = req.params.postId
  commentApi.addComment(req.body) 
    .then((comment) => {
      console.log(req.body)
      res.send(comment)
    })
    .catch((err) => {
      res.send(err)
    })
})
// commentRouter.post('/:postId', (req, res) => {
//   commentApi.addComment(req.body)
//   .then(() => {
//     res.redirect('/posts')
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// })


// commentRouter.post('/', (req, res) => {
//   req.body.postId = req.params.postId
//   commentApi.addComment(req.body)
//   .then(() => {
//     res.render('Comment has been created')
//   })
// })


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  commentRouter
}
