import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ivan:eridez76@cluster0.orgnn.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});