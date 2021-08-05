import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  orders: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("Order", orderSchema);