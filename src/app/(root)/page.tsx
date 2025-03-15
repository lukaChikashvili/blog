

import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";


export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string}>
}) {
  
  const query = (await searchParams).query;



  return (
   <>
     <Hero />
     <div className="m-auto w-full flex items-center justify-center">
     <SearchForm query = {query}  />
     </div>
   </>
  );
}
