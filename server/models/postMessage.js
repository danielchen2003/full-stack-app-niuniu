import mongoose from "mongoose"

const postSchema = mongoose.Schema(
  {
    title:  { type: "string", required: true },
    message: String,
    person: String,
    tags: [String],
    month:Number,
    location: String,
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
)

const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage
