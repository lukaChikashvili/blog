import { client } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Hero from "../components/Hero";

export default async function Home() {

  const posts = await client.fetch(BLOGS_QUERY);

  console.log(JSON.stringify(posts, null, 2))

  return (
   <>
     <Hero />

   </>
  );
}
