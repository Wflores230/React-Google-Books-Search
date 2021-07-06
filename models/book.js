const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, require: true},
    title: { type: String, require: true, default:"Titile!"},
    authors: [{ type: String, require: true, default:"Author!"}],
    description: { type: String, require: true, default:"Description!"},
    image: { type: String, unique: true, dropDups: true, default:"Image!"},
    link: { type: String, required: true, default:"Link!"}
})

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;