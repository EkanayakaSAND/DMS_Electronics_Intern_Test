import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import useAuthContext from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const toastId = useRef(null);

  const handleLogout = () => {
    if (!toast.isActive(toastId.current)) {
      //--------- Check if a notification is already active-------------

      toastId.current = toast.info(
        <div className="confirm-box">
          <p>Are you sure you want to logout?</p>
          <div className="btn-container">
            <button
              className="yes-btn"
              onClick={() => {
                logout();
                toast.dismiss(toastId.current); // ----------Dismiss the notification after logout-----------
              }}
            >
              Logout
            </button>
            <button
              className="cancel-btn"
              onClick={() => toast.dismiss(toastId.current)}
            >
              Cancel
            </button>
          </div>
        </div>,
        {
          position: "top-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          draggable: true,
          progress: undefined,
          closeButton: false,
          onClose: () => toast.dismiss(toastId.current), //----------- Dismiss the notification when closed-------------
        }
      );
    }
  };

  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <div className="logo-wrapper">
            <img alt="Logo" src={process.env.PUBLIC_URL + "/dms-logo.png"} />
          </div>
        </div>
        <div className="nav-right">
          {user ? (
            <>
              <div>
                <FaUser size={22} color="white" />
                <span className="firstName">{user.firstName}</span>
                <span className="lastName">{user.lastName}</span>
              </div>
              <div>
                <button onClick={handleLogout}>
                  <FaSignOutAlt size={22} color="white" />
                  Logout
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
      <ToastContainer />
    </>
  );
}

export default Navbar;
