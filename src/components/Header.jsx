import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import App, { AppContext } from "../App";
export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <div className="navbar">
  <div className="navbar-logo">Cup & Code</div>
  <div className="navbar-links">
    <Link className="navbar-link" to="/">Home</Link>
    <Link className="navbar-link" to="/cart">MyCart</Link>
    <Link className="navbar-link" to="/order">MyOrder</Link>
    {user?.role === "admin" && (
      <Link className="navbar-link" to="/admin">Admin</Link>
    )}
    {user?.token ? (
      <Link className="navbar-link" to="/profile">Profile</Link>
    ) : (
      <Link className="navbar-link" to="/login">Login</Link>
    )}
  </div>
</div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// export default function Header() {
//   return (
//     <>
//       <h1 className="main-title">MERN Frontend</h1>
//       <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/cart">MyCart</Link>
//           <Link to="/order">MyOrder</Link>
//           <Link to="/login">Login</Link>
//           <Link to="/admin">Admin</Link>
//       </div>
//     </>
//   );
// }