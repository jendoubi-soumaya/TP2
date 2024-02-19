const express = require('express');

//create an instance express
const app = express();
app.get('/auth/login',(req, res)=>(
    res.send('<h1>welcome to the club</h1>')
))

app.get('/auth/register',(req, res)=>(
    res.sendFile(__dirname+'/index.html')
))

const posts = [
    { id: 1, title: 'Post1', content: 'the content of the post1.' },
    { id: 2, title: 'Post2', content: 'Content of post2.' },
    { id: 3, title: 'Post3', content: 'Content of post3.' },
    { id: 4, title: 'Post4', content: 'Content of post4.' },

  ]
  
  
  app.get('/post/all', (req, res) => {
    
    res.send(posts);
  })
  


app.get('/post/:id', (req, res) => {
  
  const postId = parseInt(req.params.id);

  const post = posts.find(post => post.id === postId);

  if (post) {
  
    res.send(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
})

  app.listen(7000, () => {
    console.log('listening on port 5000');
});