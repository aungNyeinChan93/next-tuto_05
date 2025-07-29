import UserCard from "@/components/client/UserCard";
import React from "react";

export const getUsers = async () => {
  const response = await fetch(`https://dummyjson.com/users`, {
    cache: "default",
  });
  const { users } = await response.json();
  return users;
};

const UserServer = async () => {
  const users = await getUsers();
  return (
    <React.Fragment>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mx-10 my-10">
        {users &&
          Array.isArray(users) &&
          users?.map((user) => <UserCard key={user.id} {...user} />)}
      </main>
    </React.Fragment>
  );
};

export default UserServer;
