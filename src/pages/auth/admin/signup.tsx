import React, { useReducer, useState } from "react";
import { Formik,Form } from "formik";
import { getProviders, signIn } from "next-auth/react";
import { getCsrfToken } from "next-auth/react";
import * as z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

// type personType={
//  username: string;
// role: "R" | "W" | "X";
//  password: string;
// }

type errorType = {
  username: string;
  role: string;
  password: string;
};
const schema = z.object({
  username: z
    .string()
    .min(4, "Password must be at least 4 characters long")
    .max(12, { message: "less then 12 characters long" })
    .regex(new RegExp("^[A-Za-z0-9_.]+$"), "english and number only"),
  role: z.string().min(1, { message: "Required" }).max(1),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(12, "less then 12 characters long")
    .regex(new RegExp("^[A-Za-z0-9_.]+$"), "english and number only"),
});

type dataType = z.infer<typeof schema> 

const initialValues = {
  username: "",
  password: "",
  role: "",
};

function signin() {

const onsubmit = (values:dataType) =>{
  console.log( values );


}

  // const sumbitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   const userData = {
  //     username,
  //     password,
  //     role,
  //   };

  //   e.preventDefault();
  //   await fetch("http://localhost:3000/api/signup", {
  //     method: "POST",
  //     body: JSON.stringify(userData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => console.log(res.ok));
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(schema)}
      onSubmit={values=>console.log(values)}
    >
      {({ errors, values, handleChange,isValid }) => (
        <div className="card max-w-sm bg-base-100 shadow-xl overflow-y-auto">
          <div className="card-body">
            <Form className="flex flex-col gap-5">
              <label htmlFor="username" className="font-extrabold text-xl">
                使用者名稱
              </label>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-red-500">
                    {errors.username}
                  </span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="johnCena"
                  className="input input-bordered input-lg w-full max-w-xs"
                  onChange={handleChange}
                  value={values.username}
                />
              </div>

              <label htmlFor="password" className="font-extrabold text-xl">
                密碼
              </label>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-red-500">
                    {errors.password}
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="****"
                  className="input input-bordered input-lg w-full max-w-xs"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>

              <div className="form-control pt-5 font-extrabold text-xl">
                <label htmlFor="role">權限</label>
                <span className="label-text text-red-500 font-normal">
                  {errors.role}
                </span>

                <label className="label cursor-pointer">
                  <span className="label-text">訪客</span>
                  <input
                    type="radio"
                    name="role"
                    value={"R"}
                    className="radio checked:bg-blue-500"
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">使用者</span>
                  <input
                    type="radio"
                    name="role"
                    className="radio checked:bg-lime-500"
                    value={"W"}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">管理員</span>
                  <input
                    type="radio"
                    name="role"
                    className="radio checked:bg-red-500"
                    onChange={handleChange}
                    value={"X"}
                  />
                </label>
              </div>

              <button
                className={`btn ${
                  !isValid
                    ? "btn-disabled"
                    : ""
                }`}
                type="submit"
                aria-disabled="true"
              >
                新增
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
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
