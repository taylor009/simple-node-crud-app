const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');;
const app = express();

app.use('/products', product);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
   console.log('Server is running on port ' + PORT)
});

