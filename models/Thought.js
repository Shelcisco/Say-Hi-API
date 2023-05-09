const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    tagId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    tagBody: {
      type: String,
      required: true,
      maxlength: 25,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;

