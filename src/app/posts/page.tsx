import PostCard from "@/components/client/PostCard";
import React from "react";

const getPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
  return posts;
};

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <React.Fragment>
      <main className="w-4/5 mx-auto min-h-screen p-3 bg-slate-900 ">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {posts &&
            Array.isArray(posts) &&
            posts?.map((post) => <PostCard key={post.id} {...post} />)}
        </div>
      </main>
    </React.Fragment>
  );
};

export default PostsPage;
