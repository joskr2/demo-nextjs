"use client";

import React from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
