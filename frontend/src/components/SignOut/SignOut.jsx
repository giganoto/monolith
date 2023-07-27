import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../state/authSlice";

const SignOut = (props) => {
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    console.log("LogOut called");
    dispatch(logout());
  };

  return (
    <button onClick={handleSignOut} className={props.mdClass}>
      Logout
    </button>
  );
};

export default SignOut;
