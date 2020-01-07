const mongoose = require('mongoose');

const { Schema } = mongoose;

const permissionSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    description: {
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

const Permission = mongoose.model('Permission', permissionSchema);

export default Permission;
