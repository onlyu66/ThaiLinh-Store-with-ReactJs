import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  userAction,
  deleteUsers,
} from "../../../../redux/userSlice";
import Spin from "../../../others/Spin";
import styles from "../../../styles/UsersManagement.module.css";
import clsx from "clsx";
// import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import UserForm from "./UserForm";
// import Button from "react-bootstrap/Button";
// import { Switch } from "antd";
// import { Select } from "antd";
// import UserForm from "./UserForm";

// function AddUser({ selectUser }) {
//   const [modalShow, setModalShow] = useState(false);

//   return (
//     <>
//       <Button
//         variant="primary"
//         onClick={() => setModalShow(true)}
//         className={styles.button}
//       >
//         {selectUser ? "Update User" : "Add User"}
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         selectUser={selectUser}
//       />
//     </>
//   );
// }

function UsersManagement({ selectItem }) {
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  // console.log(users);
  const [selectUser, setSelectUser] = useState("");

  const [modalShow, setModalShow] = useState(false);

  console.log(modalShow);
  const usersPerPage = useSelector((state) => state.users.usersPerPage);
  const currentPage = useSelector((state) => state.users.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "Loading") {
    return (
      <div style={{ fontSize: "30px", textAlign: "center", marginTop: "50px" }}>
        <Spin />
      </div>
    );
  }

  // const handleEditForm = (user) => {
  //   setModalShow(!modalShow);
  //   setSelectUser(user);
  // };

  //   let quantity = 0;
  //   const countRes = result.headers["x-total-count"];
  // console.log(countRes);
  const totalPages = Math.ceil(users.length / usersPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;

  const visibleUsers = users.slice(indexOfFirstPage, indexOfLastPage);
  const handlePrev = () => {
    if (currentPage !== 1) {
      dispatch(userAction.onNavigatePrev());
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      dispatch(userAction.onNavigateNext());
    }
  };
  const handleCurrentPage = (_p) => {
    dispatch(userAction.onClickCurentPage(_p));
  };
  console.log(selectItem);
  return selectItem === "users" ? (
    <div>
      <div className={clsx(styles.sortAdd, "flex justify-between")}>
        <div className={styles.sort}>
          <select>
            <option value="">Sort</option>
            <option value="Name">Name</option>
            <option value="Price">Date</option>
          </select>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={() => setModalShow(!modalShow)}
            className={clsx(styles.button, "!bg-neutral-900 !text-white")}
          >
            {selectUser ? "Update User" : "Add User"}
          </Button>

          <UserForm
            show={modalShow}
            onHide={() => setModalShow(!modalShow)}
            modalShow={modalShow}
            setModalShow={setModalShow}
          />
        </div>
      </div>
      <table
        className={clsx(
          styles.table,
          "table table-striped table-hover text-center"
        )}
        style={{ width: "80%", margin: "20px auto" }}
      >
        <thead className="table-dark">
          <tr>
            <th className="bg-neutral-900 text-white">STT</th>
            <th className="bg-neutral-900 text-white">Image</th>
            <th className="bg-neutral-900 text-white">Username</th>
            <th className="bg-neutral-900 text-white">Role</th>
            <th className="bg-neutral-900 text-white">Date</th>
            <th className="bg-neutral-900 text-white" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map((element, index) => (
            <tr>
              <td>{element.id}</td>
              <td>
                <img src={element.image} className="w-5 h-5" alt="" />
              </td>
              {/* URL.revokeObjectURL(URL.createObjectURL(element.image[0])) */}
              <td>{element.userName}</td>
              <td>{element.role}</td>
              <td>0</td>
              <td>
                <button type="button" className="btn btn-outline-info">
                  View
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(deleteUsers(element.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8}>
              <Pagination style={{ display: "flex", justifyContent: "center" }}>
                <Pagination.Prev onClick={handlePrev} />
                {pages.map((_p) => (
                  <Pagination.Item
                    key={_p}
                    active={_p === currentPage}
                    onClick={() => handleCurrentPage(_p)}
                  >
                    {_p}
                  </Pagination.Item>
                ))}

                <Pagination.Next onClick={handleNext} />
              </Pagination>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  ) : (
    <></>
  );
}

export default UsersManagement;
