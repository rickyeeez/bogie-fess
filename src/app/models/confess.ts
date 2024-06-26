import { model, models, Schema } from "mongoose";

export interface Confess {
  from: string;
  to: string;
  text: string;
}
const ConfessScheme = new Schema<Confess>(
  {
    from: String,
    to: String,
    text: String,
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);
const Confess = models.Confess || model("Confess", ConfessScheme);
export default Confess;
