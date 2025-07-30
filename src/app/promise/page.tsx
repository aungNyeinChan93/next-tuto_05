import React from "react";

const Promise = async () => {
  const { comments } = await fetch("https://dummyjson.com/comments")
    .then((res) => res.json())
    .catch((err) => err);

  //   console.log(comments);

  return (
    <React.Fragment>
      <main>
        {comments &&
          Array.isArray(comments) &&
          comments?.map((comment) => (
            <div key={comment.id}>{comment.body}</div>
          ))}
      </main>
    </React.Fragment>
  );
};

export default Promise;
