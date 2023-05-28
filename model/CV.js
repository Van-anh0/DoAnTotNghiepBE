import mongoose from 'mongoose';

const cvSchema = new mongoose.Schema(
  {
    //required: true : không được để trống (not null)
    fullName: { type: String, required: true },
    gender: { type: String },
    birthday: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    applyFor: { type: String },
    target: { type: String },
    education: { type: String },
    experience: { type: String },
    certificate: { type: String },
    skills: { type: String },
    interests: { type: String },
    language: { type: String },
    avatarCV: { type: String },
    statusCV: { type: String },
    authorMail: { type: String },
    type: { type: String },
    formCV: { type: String },
    colorCV: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('CV', cvSchema);
