import mongoose from 'mongoose';
const { Schema } = mongoose;

const CVFormSchema = new mongoose.Schema(
  {
    imgCV: {
      type: String,
      required: true,
    },

    formCV: {
      type: String,
      required: true,
      unique: true,
    },

    typeCV: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model('CVForm', CVFormSchema);
