
import { mongooseConnect } from "@/lib/mongoose";
import {Blogs} from "@/models/Blogs";

//Main product from Mongo DB
export default async function handle(req, res){    
    // res.json(req.method);
    const {method} = req;
    await mongooseConnect();
    if(method === 'POST'){
        const {title, description} = req.body;

        const BlogDoc = await Blogs.create({
            title, description,
        })
        res.json(BlogDoc);
    }
}