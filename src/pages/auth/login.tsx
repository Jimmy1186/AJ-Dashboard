import React, { useState } from "react";
import Titles from "../../components/layout/MainSide";
import { Formik, Form } from "formik";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
import loginBg from "../../../public/img/loginBg.jpg";
import { useRouter } from "next/router";
import { toFormikValidationSchema } from "zod-formik-adapter";
import * as z from "zod";


const initialValues = {
  username: "",
  password: "",
};

const schema = z.object({
  username: z
    .string()
    .min(3, "Password must be at least 4 characters long")
    .max(12, { message: "less then 12 characters long" })
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp("^[A-Za-z0-9_.]+$"), "english and number only"),
  password: z
    .string()
    .min(3, "Password must be at least 6 characters long")
    .max(12, "less then 12 characters long")
    .regex(new RegExp("^[A-Za-z0-9_.]+$"), "english and number only"),
});
type dataType = z.infer<typeof schema>;


function login() {
  const router = useRouter();

  const onsubmit = async (values: dataType) => {
    const status = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
    });
    if (status?.ok === true) {
      router.push("/");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(schema)}
      onSubmit={onsubmit}
    >
      {({ errors, values, handleChange, isValid }) => (
        <div className="card bg-white shadow-xl md:card-side md:place-self-center md:w-full  max-w-4xl">
          <figure className="photoBox h-40 relative md:h-full md:w-1/2">
            <Image src={loginBg} layout="fill" />
          </figure>
          <div className="card-body p-5">
            <Form className="flex flex-col gap-3 max-w-screen-sm ">
              <h2 className="text-3xl font-bold">登入</h2>
              {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}

              <label htmlFor="username">使用者</label>
              <label className="label">
                <span className="label-text text-red-500">
                  {errors.username}
                </span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                value={values.username}
                className="input input-lg input-bordered border-2 p-2 w-full"
              />

              <label htmlFor="password">密碼 </label>
              <label className="label">
                <span className="label-text text-red-500">
                  {errors.password}
                </span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="on"
                onChange={handleChange}
                value={values.password}
                className="input input-lg  input-bordered border-2 p-2 w-full"
              />
              <button
                className={`btn  btn-outline btn-success p-2 border-2 mt-3 ${
                  !isValid ? "btn-disabled" : ""
                }`}
                type="submit"
              >
                登入
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default login;
