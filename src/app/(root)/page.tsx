import { client } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function Home() {

  const posts = await client.fetch(BLOGS_QUERY);

  console.log(JSON.stringify(posts, null, 2))

  return (
   <>
    <div>
      {posts.map((value:any) => (
        <div key={value._id}>
           <h1>{value.title}</h1>
           <div>
            
           <h1> {value.author.name}</h1>
           <p>{value.category}</p>
           <p>{value.description}</p>


            </div>
          
           
          </div>
      ))}
    </div>
   </>
  );
}
