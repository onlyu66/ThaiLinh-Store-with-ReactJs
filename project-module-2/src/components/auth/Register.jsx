import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../styles/Register.module.css";
import image from "../../assets/images/logos/Logo.png";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, fetchUsers, patchUsers } from "../../redux/userSlice";

function Register() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
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
            // dispatch(patchUsers({user,id: user.id}));
          } else {
            toast.success("Đăng ký thành công!");
          }
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Đăng ký thất bại!");
        });
    },
  });
  return (
    <div className={styles.body}>
      <div className={clsx("container", styles.container)}>
        <h2>Register</h2>
        <div className={styles.items}>
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
            <button
              type="submit"
              className={clsx("btn btn-primary", styles.btn)}
            >
              Create a account
            </button>
          </form>
          <div className={styles.rItem}>
            <img src={image} alt="This is a image" className={styles.image} />
            <p>
              <Link
                to="/login"
                className={clsx("text-sky-500 dark:text-sky-400", styles.p)}
              >
                Đã có tài khoản
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
