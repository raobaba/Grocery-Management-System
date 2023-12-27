const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date
  },
  supplier: {
    name: {
      type: String
    },
    contact: {
      type: String 
    },
    address: {
      type: String
    }
  },
  
  productDetails: {
    barcode: {
      type: String
    },
    brand: {
      type: String
    },
    weightVolume: {
      type: String 
    }
  },
  purchaseDetails: {
    purchaseDate: {
      type: Date
    },
    purchasePrice: {
      type: Number
    },
    purchaseOrderNumber: {
      type: String
    }
  },

});

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;
