

import { BLOGS_QUERY } from "@/sanity/lib/queries";
import Hero from "../components/Hero";
import PostCard, { PostTypeCard } from "../components/PostCard";
import SearchForm from "../components/SearchForm";
import { client } from "@/sanity/lib/client";


export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string}>
}) {
  
  const query = (await searchParams).query;
  const params = {search: query || null};


  const posts = await client.fetch(BLOGS_QUERY, params);


console.log(posts)

  return (
   <>
     <Hero />
     <div className="m-auto w-full flex flex-col gap-8 items-center justify-center">
     <SearchForm query = {query}  />

     <section>
       <p className="text-4xl text-green-400">
         {query ? `Search results for "${query}"` : 'All Posts'} 
       </p>

       <ul className="mt-7 flex gap-12 ">
          {posts?.length > 0 ? (
            posts.map((post: PostTypeCard) => (
              <PostCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="text-white">No Posts found</p>
          )}
        </ul>
     </section>
     </div>
   </>
  );
}
