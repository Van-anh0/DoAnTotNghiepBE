import mongoose from "mongoose";

const cvSchema = new mongoose.Schema({
    //required: true : không được để trống (not null)
  fullName: { type: String, required: true },
  gender:{type:String},
  birthday:{type: String},
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String },
  
  // summary: { type: String },
  applyFor: {type: String},
  target: {type: String},
  education: {type: String},
  // [
  //   {
  //     school: { type: String },
  //     degree: { type: String },
  //     fieldOfStudy: { type: String },
  //     startDate: { type: Date },
  //     endDate: { type: Date },
  //   },
  // ],
  experience: {type: String},
  //  [
  //   {
  //     company: { type: String },
  //     position: { type: String },
  //     startDate: { type: Date },
  //     endDate: { type: Date },
  //     description: { type: String },
  //   },
  // ],
  skills: {type: String},
  // [{ type: String }],
  interests: { type: String },
  language:{type: String},
  // references: {type: String},
  // [
  //   {
  //     name: { type: String },
  //     position: { type: String },
  //     company: { type: String },
  //     phone: { type: String },
  //     email: { type: String },
  //   },
  // ],
},
{timestamps: true}
);

export default mongoose.model("CV", cvSchema)
