import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { postProducts, putProducts } from "../../../../redux/productSlice";
import styles from "../../../styles/UserForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import styles from "../styles/Register.module.css";
// import image from "../../assets/images/logos/Logo.png";
import clsx from "clsx";
import { deleteUsers, fetchUsers } from "../../../../redux/userSlice";

function UserForm(props) {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      image:
        "https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-12.jpg",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Tên người dùng không được để trống!"),
      email: Yup.string()
        .email("Email không hợp lệ!")
        .required("Email không được để trống!"),
      password: Yup.string()
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự!")
        .required("Password không được để trống!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null, "Mật khẩu không trùng khớp!"])
        .required("Xác nhận mật khẩu không được để trống!"),
    }),
    onSubmit: (values) => {
      axios
        .post("http://localhost:8000/users", values)
        .then((res) => {
          const user = users.find((user) => user.userName === values.userName);
          if (user) {
            toast.error("Tài khoản đã tồn tại!");
            // dispatch(deleteUsers(user.id));
          } else {
            toast.success("Thêm người dùng thành công!");
          }
          values.userName = "";
          values.email = "";
          values.password = "";
          values.confirmPassword = "";
          props.setModalShow(!props.modalShow);
        })
        .catch((err) => {
          toast.error("Thêm người dùng thất bại!");
        });
    },
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {/* <form onSubmit={handleSubmitForm} className={styles.form}>
          <div>
            <label>User Name: </label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="passwword"
              name=""
              value={type}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Image:</label>
            <input
              type="text"
              // type="file"
              name="image"
              // multiple
              // accept="image/*"
              value={image}
              onChange={handleChangeInput}
              // style={{ flex: 3 }}
            />
          </div>

          <div className="flex mt-2">
            <div className="mr-2">
              {image ? (
                <img
                  src={image}
                  height="100px"
                  width="100px"
                  className="w-20 h-20 flex"
                />
              ) : (
                <p></p>
              )}
            </div>
          </div>

          <br />
          <button type="submit">Add User</button>
        </form> */}
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.item}>
            <div className={clsx("mb-3", styles.mb3)}>
              <label
                htmlFor="username"
                className={clsx("form-label", styles.formLabel)}
              >
                User Name:
              </label>
              <input
                type="text"
                className={clsx("form-control", styles.formControl)}
                placeholder="thailinh66"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.userName && formik.errors.userName && (
              <div className={styles.alert} style={{ color: "red" }}>
                {formik.errors.userName}
              </div>
            )}
          </div>
          <div className={styles.item}>
            <div className={clsx("mb-3", styles.mb3)}>
              <label
                htmlFor="email"
                className={clsx("form-label", styles.formLabel)}
              >
                Email:
              </label>
              <input
                type="email"
                className={clsx("form-control", styles.formControl)}
                placeholder="ngoclinhthai8@gmail.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className={styles.alert} style={{ color: "red" }}>
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className={styles.item}>
            <div className={clsx("mb-3", styles.mb3)}>
              <label
                htmlFor="password"
                className={clsx("form-label", styles.formLabel)}
              >
                Password:
              </label>
              <input
                type="password"
                className={clsx("form-control", styles.formControl)}
                placeholder="linh662002"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className={styles.alert} style={{ color: "red" }}>
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className={styles.item}>
            <div className={clsx("mb-3", styles.mb3)}>
              <label
                htmlFor="confirmPassword"
                className={clsx("form-label", styles.formLabel)}
              >
                Confirm Password:
              </label>
              <input
                type="password"
                className={clsx("form-control", styles.formControl)}
                placeholder="linh662002"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className={styles.alert} style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
          <div>
            <label htmlFor="image" className={clsx("form-label")}>
              Image:
            </label>
            <input
              type="text"
              name="image"
              className={clsx("form-control", styles.formControl)}
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="flex mt-2">
            <div className="mr-2">
              {formik.values.image ? (
                <img
                  src={formik.values.image}
                  height="100px"
                  width="100px"
                  className="w-20 h-20 flex"
                />
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <br />
          <button type="submit">Add User</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default UserForm;
