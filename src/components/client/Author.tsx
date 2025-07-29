import React from "react";

const getAuthor = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return user;
};

const Author = async ({ userId }: { userId: number }) => {
  const user = await getAuthor(userId);

  return (
    <React.Fragment>
      <main>
        <span className="text-lg text-slate-400 p-2 font-semibold ">
          {user.name}
        </span>
      </main>
    </React.Fragment>
  );
};

export default Author;
