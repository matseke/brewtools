import mongoose from 'mongoose';

const fermentablesSchema = new mongoose.Schema({
    fermentable: String,
    country: String,
    category: String,
    type: String,
    color: String,
    ppg: Number
  })

var Fermentables = mongoose.model('Fermentables', fermentablesSchema);
export default Fermentables;
  