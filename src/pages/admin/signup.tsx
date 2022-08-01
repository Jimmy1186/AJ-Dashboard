import React from "react";
import Titles from "../../components/Titles";
import { useFormik } from "formik";
import { getProviders, signIn } from "next-auth/react";
import { getCsrfToken } from "next-auth/react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

function signin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      picked: "",
    },
    onSubmit: (values) => {
      signIn("credentials", {
        email: values.email,
        username: values.username,
        password: values.password,
      });
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Titles titleName="新增使用者">
      <div className="card bg-base-100 shadow-xl">
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

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </Titles>
  );
}

export default signin;

// export const getServerSideProps: GetServerSideProps = async (context) =>{
//     return {
//       props: {
//         csrfToken: await getCsrfToken(context),
//       },
//     }
//   }
