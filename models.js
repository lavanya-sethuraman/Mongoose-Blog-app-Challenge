const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {firstName: String,
            lastName: String},
  created: { type: String}
});


blogPostSchema.virtual('authorString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});

blogPostSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    title: this.title,
    content: this.content,
    created: this.created,
    author: this.authorString
  };
}


const Blogpost = mongoose.model('Blogpost', blogPostSchema);

module.exports = {Blogpost};
