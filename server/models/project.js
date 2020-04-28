const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
          },
          employees: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
              },
          ],
    },
    { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
