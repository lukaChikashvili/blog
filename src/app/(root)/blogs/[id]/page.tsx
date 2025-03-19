import { client } from '@/sanity/lib/client';
import { Blogs_BY_ID } from '@/sanity/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import markdownit from 'markdown-it';

const md = markdownit({ html: true, breaks: true, linkify: true });

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(Blogs_BY_ID, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
   
      <section className="w-full h-[17rem] back bg-green-400 flex flex-col gap-6 items-center justify-center px-4 text-center">
        <h1 className="w-full max-w-3xl text-3xl sm:text-4xl md:text-5xl uppercase text-white font-bold">
          {post.title}
        </h1>
        <p className="text-black font-bold text-lg sm:text-2xl">{post.description}</p>
      </section>

     
      <div className="flex items-center justify-center mt-8 px-4">
        <img
          src={post.image || "/fallback-thumbnail.jpg"}
          alt="thumbnail"
          className="w-full max-w-4xl h-[15rem] sm:h-[20rem] md:h-[25rem] rounded-xl object-cover"
        />
      </div>

      
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-80 mt-6 gap-6">
        <div className="flex items-center gap-6">
          <Image
            src={post.author?.image || "/fallback-avatar.png"}
            alt="avatar"
            width={64}
            height={64}
            className="rounded-full shadow-lg"
          />
          <div className="text-white text-center sm:text-left ">
            <p className="text-lg font-semibold">{post.author?.name}</p>
            <p className="text-gray-400">@{post.author?.username}</p>
          </div>
        </div>
        <p className="text-green-400 font-semibold">{post.category}</p>
      </div>

    
      <div className="flex justify-center mt-12 w-full px-4">
        {parsedContent ? (
          <article className="prose prose-lg prose-invert max-w-4xl break-words text-white">
            <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
          </article>
        ) : (
          <p className="text-white">No details provided</p>
        )}
      </div>
    </>
  );
};

export default page;
