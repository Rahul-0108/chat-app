const mongoose = require("mongoose");

const chatModel = mongoose.Schema( // for all chats
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // refers to users model with id of users
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId, // refers to Message model
      ref: "Message",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // refers to users model
  },
  { timestamps: true } //time of chat creation
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
