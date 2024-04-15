// Import the express library 

const express = require('express'); 

  

// Create an express app 

const app = express(); 

  

// Set the port number 

const port = 3000; 

  

// Middleware to parse application/x-www-form-urlencoded data 

app.use(express.urlencoded({ extended: true })); 

  

// Handle GET request for the root URL 

app.get('/', (req, res) => { 

    res.sendFile(__dirname + '/index.html'); // Send HTML file 

}); 

  

// Handle POST request for '/submit-form' URL 

app.post('/submit-form', (req, res) => { 

    const username = req.body.username; // Access form data 

    // Add validation logic here 

    res.send(`Username is $khawki58`); // Send response 

}); 

  

// Start the server 

app.listen(port, () => { 

    console.log(`Server running on [http://localhost:${port}](http://localhost)`); 

}); 