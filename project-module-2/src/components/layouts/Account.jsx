import React, { useEffect, useState } from "react";
import "../styles/Account.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction, fetchUser } from "../../redux/authSlice";

function Account() {
  const [isUser, setIsUser] = useState(null);
  // console.log(isUser);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    setIsUser(JSON.parse(localStorage.getItem("user")));
    dispatch(fetchUser());
  }, [user]);

  return (
    <div className="lr lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 px-4">
      {isUser ? (
        <div className="flex mr-8">
          <i className="fa-regular fa-bell mr-3 mt-1.5"></i>
          <img
            src={isUser.image}
            alt=""
            className="w-8 h-8 rounded-full mr-2"
          />
          {/* {console.log(isUser)} */}
          <p>{isUser.userName}</p>
          <i class="fa-solid fa-caret-down mt-1 ml-1"></i>
          <button
            onClick={() => {
              dispatch(authAction.logout());
              // navigate("/login");
            }}
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className="lr lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 px-4">
          <Link
            to="/login"
            className="l text-sm font-medium text-gray-700 hover:text-gray-800 "
          >
            Sign in
          </Link>
          <span className="h-6 w-px bg-gray-200" />
          <Link
            to="/register"
            className="r text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Create account
          </Link>
        </div>
      )}
    </div>
  );
}

export default Account;
