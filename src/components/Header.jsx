import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/client";

const Header = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);

  return (
    <div className="grid grid-cols-2 mt-6 mx-10 items-center">
      <h1 className="font-bold">Blog</h1>

      <nav className="flex justify-end">
        {userLoggedIn ? (
          <Fragment>
            <Link to="/blog" className="mr-4">
              Blog
            </Link>
            <Link className="mr-4" to="/about">
              About
            </Link>
            <p className="mx-5 font-bold">{currentUser.email}</p>
            <button onClick={signOutUser}>Log out</button>
          </Fragment>
        ) : (
          <Link to="/login" className="ml-5">
            Log in
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
