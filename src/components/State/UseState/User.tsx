import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
//   const [user, setUser] = useState<null | AuthUser>(null);
const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Nitesh",
      email: "nitesh@gmail.com",
    });
  };
  const handleLogout = () => {
    // setUser(null);
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <div>user name is {user?.name}</div>
      <div>user email is {user?.email}</div> */}
        <div>user name is {user.name}</div>
      <div>user email is {user.email}</div>
    </>
  );
};
