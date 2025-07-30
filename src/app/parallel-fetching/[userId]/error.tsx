"use client";

import React from "react";

const ParallelError = ({ error }: { error: Error }) => {
  return (
    <React.Fragment>
      <main>{error && error.message}</main>
    </React.Fragment>
  );
};

export default ParallelError;
