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
      type: String,
      default:'Fresh Dairy Co.'
    },
    contact: {
      type: String,
      default:'987-654-3210'
    },
    address: {
      type: String,
      default:'456 Dairy Ave, City, Country'
    }
  },
  productDetails: {
    barcode: {
      type: String,
      default:'7890123456'
    },
    brand: {
      type: String,
      default:"Farm's Best"
    },
    weightVolume: {
      type: String,
      default:'1 liter'
    }
  },
  purchaseDetails: {
    purchaseDate: {
      type: Date,
      default: Date.now  
    },
    purchasePrice: {
      type: Number,
      default:1.99
    },
    purchaseOrderNumber: {
      type: String,
      default:'PO54321'
    }
  }
});

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;
