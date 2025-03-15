import { client } from '@/sanity/lib/client';
import { Blogs_BY_ID } from '@/sanity/lib/queries';
import { author } from '@/sanity/schemaTypes/author';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
import markdownit from 'markdown-it'

 const md = markdownit({ breaks: true });;

const page = async ({ params }: { params: Promise<{id: string}>}) => {

    const id = (await params).id;

    const post = await client.fetch(Blogs_BY_ID, {id});

    if(!post) return notFound();

    const parsedContent = md.render(post?.pitch || "");


  return (
   <>

   <section className='w-full h-[17rem] bg-green-400 back  flex flex-col gap-12 items-center justify-center'>
   <h1 className='w-[40rem] text-center text-5xl uppercase text-white font-bold'>{post.title}</h1>
   <p className='text-black font-bold text-2xl'>{post.description}</p>

   
   </section>

   <div className='flex items-center justify-center mt-12 '>
   <img src = {post.image} width = {1} height = {1} alt = "thumbnail" 
      className="w-[70%]  h-[20rem] rounded-xl object-cover" />
    </div>



<div className='flex items-center justify-between px-[14rem] mt-6'>

<div className='flex items-center gap-12 mt-12'>
    <div>
      <Image src = {post.author?.image} alt = "avatar" width = {64} height = {64} className='rounded-full shadow-lg'/>

    </div>

    <div className='text-white'>
      <p>{post.author?.name}</p>
      <p>@{post.author?.username}</p>
    </div>


    </div>

<div>
  <p className='text-green-400 button-33'>{post.category}</p>
</div>
      

      
</div>

<div className='flex justify-center mt-12'>
        {parsedContent ? (
        <article
        className="prose max-w-4xl font-work-sans break-all text-white "
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      />
        ) : (
          <p>No details provided</p>
        )}
      </div>
   </>
  )
}

export default page
