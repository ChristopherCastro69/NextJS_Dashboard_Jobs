import {model, Schema} from "mongoose";

const BlogSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    // price: {type: Number, required: true},
});

export const Blogs = model('Blogs', BlogSchema);