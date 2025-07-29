/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

interface UserCardProps {
  username: string;
  email: string;
  image: string;
  id: number;
  university: string;
}

const UserCard: React.FC<UserCardProps> = ({
  username,
  email,
  image,
  id,
  university,
}) => {
  return (
    <React.Fragment>
      <main>
        <a
          href={`/users-client/${id}`}
          className="group relative block bg-black"
        >
          <img
            alt="img"
            src={image}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              {username}
            </p>

            <p className="text-xl font-bold text-white sm:text-base">{email}</p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">{university}</p>
              </div>
            </div>
          </div>
        </a>
      </main>
    </React.Fragment>
  );
};

export default UserCard;
