import Layout from "@/components/Layout";
import Link from "next/link";


export default function Blogs(){
    return(
        <Layout> 
            <Link className="bg-blue-800 py-1 px-2 rounded-md" href={'/blogs/new'}>
                Add new blogs
            </Link>    

        </Layout>
    )
}