import React from "react";
import withAuth from "../utils/withAuth";

export default function Profile({ name, role }) {
  return (
    <div>
      Profile Page
      <p>name : {name}</p>
      <p>role : {role}</p>
    </div>
  );
}

export const AuthProfile = withAuth(Profile);
