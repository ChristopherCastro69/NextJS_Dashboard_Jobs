import { useState } from "react";

import axios from "axios";
import Layout from "@/components/Layout";

export default function NewBlog() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [price, setPrice] = useState('');

    // for database axios
    async function createBlog(ev){
        ev.preventDefault();
        const data = {title, description};
        await axios.post('/api/blogs', data)
    }

    return (
        <Layout>
            <form onSubmit={createBlog}>
                <h1>New Blog</h1>
                <label>Blog Title</label>
                <input 
                type="text" 
                placeholder="title"
                value ={title}
                onChange = {ev => setTitle(ev.target.value)}/>


                <label>Description</label>
                <textarea 
                placeholder="description"
                value={description}
                onChange={ev => setDescription(ev.target.value)}
                />
                
                


                {/* <label>Price</label>
                <input 
                type="number" 
                placeholder="price"
                value={price}
                onChange={ev => setPrice(ev.target.value)}
                /> */}

                <button type="Submit"
                    className="btn-primary">Save
                </button>
            </form>
       
        </Layout>
    )
}