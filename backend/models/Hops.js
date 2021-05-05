import mongoose from 'mongoose';

const hopsSchema = new mongoose.Schema({
  name: String,
  average_aa: Number
})

//module.exports = mongoose.model('Hops', hopsSchema)
//export default mongoose.model('Hops', hopsSchema);
var Hops = mongoose.model('Hops', hopsSchema);
export default Hops;