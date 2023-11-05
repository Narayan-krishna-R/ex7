const express = require('express');
const app = express();
const port = 3000;

// Set the views directory to where your HTML files are located
app.set('views', './views');
app.set('view engine', 'html');

// Serve static files like CSS, JavaScript, and images
app.use(express.static('public'));

// Define routes for each page
app.get('/', (req, res) => {
  res.sendFile('home.html', { root: './views' });
});

app.get('/about', (req, res) => {
  res.sendFile('about.html', { root: './views' });
});

app.get('/contact', (req, res) => {
  res.sendFile('contact.html', { root: './views' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
