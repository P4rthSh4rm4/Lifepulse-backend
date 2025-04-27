const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Lifepulse backend is live!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample data (replace with your actual data source)
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

// Root route
app.get('/', (req, res) => {
  res.send('Lifepulse backend is live!');
});

// API route for posts
app.get('/api/posts', (req, res) => {
  res.json(posts);  // Responds with the posts array
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

