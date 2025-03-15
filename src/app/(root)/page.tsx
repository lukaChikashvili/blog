

import { BLOGS_QUERY } from "@/sanity/lib/queries";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import SearchForm from "../components/SearchForm";
import { client } from "@/sanity/lib/client";


export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string}>
}) {
  
  const query = (await searchParams).query;

  const posts = await client.fetch(BLOGS_QUERY);


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

       <ul className="mt-7 ">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <PostCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
     </section>
     </div>
   </>
  );
}
