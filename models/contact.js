import mongoose, { Schema, models } from "mongoose";

const contactSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      minLength: [2, "Name must be larger than two characters"],
      maxLength: [50, "Name must be lesser than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Please enter a valid email",
      ],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Contact = models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
