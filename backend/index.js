const express = require('express');
const fs = require('fs'); // require the file system module
const path = require('path'); // require the path module

const app = express();
const port = 3000;

// Define the path to the JSON file
const dataFilePath = path.join(__dirname, 'pincodes.json');

app.get('/api/pincode', (req,res)=>{
    res.sendFile(dataFilePath)
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
