/* eslint-disable @typescript-eslint/no-explicit-any */
import PostCard from "@/components/client/PostCard";
import React from "react";

export const getPosts = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const posts = await response.json();
  return posts;
};

const getAlbums = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  const albums = await response.json();
  return albums;
};

const ParallelFetching = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  const postsData = getPosts(userId);
  const albumsData = getAlbums(userId);

  const [posts, albums] = await Promise.all([postsData, albumsData]);

  console.log({ posts, albums });

  return (
    <React.Fragment>
      <main className=" flex justify-between items-start p-5  space-x-4">
        <div className="flex-2 grid grid-cols-3 gap-2 ">
          {posts &&
            posts?.map((post: any) => <PostCard key={post.id} {...post} />)}
        </div>
        <div className=" flex-1 grid grid-cols-1 ">
          {albums &&
            Array.isArray(albums) &&
            albums?.map((a) => (
              <div
                className="p-4 rounded bg-red-400 text-white mb-2 "
                key={a.id}
              >
                {a.title}
              </div>
            ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default ParallelFetching;
