const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Healthcheck endpoint
app.get('/health', (req, res, next) => {
  res.status(200).send({ success: true });
});

// Palindrome endpoint
app.use('/palindrome', require('./routes/palindrome/palindrome.route'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// Start the server and listen on port
app.listen(3000, function () {
  console.log('\nListening on port 3000!\n');
});
