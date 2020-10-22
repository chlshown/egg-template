module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    name: {
      type: String,
      unique: true,
      required: true,
    },
    _id: {
      type: Schema.ObjectId,
      ref: 'Tags',
      required: true,
    },
  })
  return mongoose.model('User', UserSchema)
}