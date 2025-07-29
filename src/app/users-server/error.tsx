"use client";

import React from "react";

const UserError = ({ error }: { error: Error }) => {
  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center text-2xl ">
        {error?.message}
      </main>
    </React.Fragment>
  );
};

export default UserError;
