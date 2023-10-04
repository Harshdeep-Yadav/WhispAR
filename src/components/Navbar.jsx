import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Bounce from "react-reveal/Bounce";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <img src="public\favicon.ico" alt="" />

      <Bounce>
        <span className="logo">WhispAR</span>
      </Bounce>

      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}> Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
