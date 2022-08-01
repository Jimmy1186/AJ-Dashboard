import React from "react";
import Titles from "../components/Titles";
import { useFormik } from "formik";
import { getProviders, signIn } from "next-auth/react";

function login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      picked: "",
    },
    onSubmit: (values) => {
      signIn("credentials", {
        username: values.username,
        password: values.password,
      });
    },
  });

  return (
    <Titles titleName="新增使用者">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
            <label htmlFor="username">使用者</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />

            <label htmlFor="password">密碼</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Titles>
  );
}

export default login;
