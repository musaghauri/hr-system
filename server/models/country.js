const mongoose = require('mongoose');

const { Schema } = mongoose;

const countrySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Country = mongoose.model('Country', countrySchema);

export default Country;
