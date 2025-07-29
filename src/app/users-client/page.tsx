/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { type User } from "@/types/types";
import UserCard from "@/components/client/UserCard";
const UserClient = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/users`);
        const { users } = await response.json();
        if (!response.ok) throw new Error("users data fetching fail!");
        setUsers(users);
      } catch (error: any) {
        console.log(error);
        if (error instanceof Error) {
          setError(error?.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) return <>Loading . . </>;

  if (error) return <>{error} </>;

  return (
    <React.Fragment>
      <main className=" min-h-screen bg-slate-900 text-white mx-10 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {users &&
            Array.isArray(users) &&
            users?.map((user) => {
              return <UserCard key={user.id} {...user} />;
            })}
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserClient;
