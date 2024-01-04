import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";
import image from "../../assets/images/logos/Logo.png";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import { fetchUser, loginUser, putUser } from "../../redux/authSlice";

function Login() {
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUser());
  }, [dispatch]);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Không để trống phần này!"),
      password: Yup.string().required("Không để trống phần này!"),
    }),
    onSubmit: async (values) => {
      try {
        const isUser = users.find(
          (user) =>
            (user.userName === values.userName ||
              user.email === values.userName) &&
            user.password === values.password
        );

        const existed = user.find((key) => key.userName === values.userName);

        const empty = user.filter((key) => key.userName === values.userName);
        console.log(existed, "existed");
        console.log(empty);

        if (isUser && values.userName !== "Admin") {
          toast.success("Đăng nhập thành công!");
          // if (empty.length < 0) {
          //   dispatch(loginUser(isUser));
          // }
          // console.log(location);

          if (empty.length <= 0 && existed === undefined) {
            dispatch(loginUser(isUser));
          }
          if (existed) {
            dispatch(putUser({ existed, id: existed.id }));
          }
          if (location?.state) {
            navigate(location?.state);
          } else {
            navigate("/");
          }
          // dispatch(loginUser(isUser));
        } else if (isUser && values.userName === "Admin") {
          toast.success("Đăng nhập thành công!");
          if (existed) {
            dispatch(putUser({ existed, id: existed.id }));
          }
          if (empty.length < 0) {
            dispatch(loginUser(isUser));
          }
          navigate("/admin");
          // dispatch(loginUser(isUser));
        } else {
          toast.error("Đăng nhập thất bại!");
        }
      } catch (err) {
        console.error("Lỗi khi đăng nhập!");
      }
    },
  });

  return (
    <div className={styles.body}>
      <div className={clsx("container", styles.container)}>
        <h2>Login</h2>
        <div className={styles.items}>
          <div className={styles.rItem}>
            <img src={image} alt="This is a image" className={styles.image} />
            <p>
              <Link
                to="/register"
                className={clsx("text-sky-500 dark:text-sky-400", styles.p)}
              >
                Chưa có tài khoản
              </Link>
            </p>
          </div>
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
                  htmlFor="password"
                  className={clsx("form-label", styles.formLabel)}
                >
                  Password:
                </label>
                <input
                  type="password"
                  className={clsx("form-control", styles.formControl)}
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

            <button
              type="submit"
              className={clsx("btn btn-primary", styles.btn)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
