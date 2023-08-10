import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { logout } from "../services/auth";
import { setUserDetail } from "../store/actions/auth";
import { toast } from "react-toastify";
export default function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navBar = useRef(null);
  const items = useSelector((state) => state.cart.items);
  const userDetail = useSelector((state) => state.auth.ud);
  const itemsCount = items.reduce((a, b) => {
    return a + b.quantity;
  }, 0);

  const handleNavigationBar = () => {
    if (navBar.current.className === "navbar") {
      navBar.current.className += " responsive";
    } else {
      navBar.current.className = "navbar";
    }
  };

  const handleLogout = () => {
    logout();
    const action = setUserDetail(null);
    dispatch(action);
    toast.success("Logout Successfully!");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar" ref={navBar}>
        <Link to="/">
          <i className="fa fa-fw fa-home"></i> Home
        </Link>
        <Link to="/about">
          <i className="fa fa-fw fa-info"></i> About
        </Link>
        <Link to="/contact">
          <i className="fa fa-fw fa-envelope"></i> Contact
        </Link>
        <Link to="/cart">
          <i className="fa fa-shopping-cart"></i> ({itemsCount})
        </Link>
        {userDetail ? (
          <a onClick={handleLogout} className="logout">
            <i className="fa fa-sign-out"></i> Logout
          </a>
        ) : (
          <Link to="/login">
            <i className="fa fa-sign-in"></i> Sign in
          </Link>
        )}

        <a className="icon" onClick={handleNavigationBar}>
          <i className="fa fa-bars"></i>
        </a>
      </nav>
      <Outlet />
      <footer className="footer">
        <a>© {(new Date()).getFullYear()} FruitWala.com</a>
      </footer>
    </>
  );
}
