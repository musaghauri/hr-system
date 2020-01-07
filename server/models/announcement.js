const mongoose = require('mongoose');

const { Schema } = mongoose;

const announcementSchema = new Schema(
  {
    title: {
      type: String,
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

const Announcement = mongoose.model('Announcement', announcementSchema);

export default Announcement;
