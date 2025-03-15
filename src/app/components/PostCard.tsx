import { Author, Blog } from "@/sanity/types";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type PostTypeCard = Omit<Blog, "author"> & {author?: Author};


const PostCard = ({ post }: { post: PostTypeCard }) => {
  const { _createdAt, views, author, title, category, _id, image, description } =
    post;

  return (
    <li className="w-[400px] bg-gray-900 border border-gray-700 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm text-gray-400">{_createdAt}</p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="size-5 text-primary" />
          <span className="text-sm font-medium">{views}</span>
        </div>
      </div>


      <div className="flex justify-between items-center gap-4 mb-4">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`} className="hover:underline">
            <p className="text-sm font-medium text-gray-300">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`} className="hover:underline">
            <h3 className="text-lg font-semibold mt-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`} className="shrink-0">
          <Image
            src={author?.image!}
            alt={author?.name!}
            width={48}
            height={48}
            className="rounded-full border border-gray-600"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`} className="block">
        <p className="text-sm text-gray-400 line-clamp-2 mb-4">{description}</p>
        <div className="w-full h-52 overflow-hidden rounded-lg">
          <img
            src={image}
            alt="Startup"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="flex justify-between items-center mt-4">
        <Link href={`/?query=${category?.toLowerCase()}`} className="text-sm text-green-400 hover:underline">
          {category}
        </Link>
        <Link href={`/startup/${_id}`} className="px-4 py-2 bg-green-400 rounded-lg text-sm font-medium hover:bg-blue-500 transition">
          Details
        </Link>
      </div>
    </li>
  );
};

export default PostCard;
