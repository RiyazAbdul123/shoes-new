const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle updating the data
app.post('/update-product', (req, res) => {
  const updatedProduct = req.body;

  // Read the existing data from data.txt
  const filePath = path.join(__dirname, 'data.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data file');
    }

    let products = JSON.parse(data);
    products = products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    );

    // Write the updated data back to data.txt
    fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).send('Error writing to data file');
      }

      res.status(200).send('Product updated successfully');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
