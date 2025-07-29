import React, { ReactNode } from "react";

interface UserTemplateProps {
  children: ReactNode;
}

const UserTemplate: React.FC<UserTemplateProps> = async ({ children }) => {
  return (
    <React.Fragment>
      <main className="bg-green-600 p-4">{children}</main>
    </React.Fragment>
  );
};

export default UserTemplate;
