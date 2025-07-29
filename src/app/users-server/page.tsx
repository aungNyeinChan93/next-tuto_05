import UserCard from "@/components/client/UserCard";
import React from "react";
import { type User } from "@/types/types";

export const getUsers = async () => {
  const response = await fetch(`https://dummyjson.com/users`, {
    cache: "default",
  });
  const { users } = await response.json();
  return users;
};

const UserServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const users = await getUsers();
  return (
    <React.Fragment>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-10 my-10">
        {users &&
          Array.isArray(users) &&
          users?.map((user: User) => <UserCard key={user.id} {...user} />)}
      </main>
    </React.Fragment>
  );
};

export default UserServer;
