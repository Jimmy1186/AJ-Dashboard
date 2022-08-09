import React from "react";
import { Formik, Form } from "formik";
import * as z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";

const projectSchema = z
  .object({
    name: z.string().max(50, "太長"),
    description: z.string().max(999, "太長"),
    price: z.number(),
    createrID: z.number(),
  })


export type projectsType = z.infer<typeof projectSchema>;








function addProject() {

  const { data: session, status } = useSession();

  const insertMutation = trpc.useMutation(["insertOne"], {
    onSuccess: () =>console.log("success"),
  });
 

 


 const initialValues = {
    name: "",
    description: "",
    price:0,
    createrID: 0,
  };


const submitHandler = async (values: projectsType) => {
  insertMutation.mutate({
    name:values?.name,
    description:values?.description,
    price:values?.price,
    createrID:session?.id
  })
};

  return (
   
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(projectSchema)}
      onSubmit={submitHandler}
    >
      {({ errors, values, handleChange, isValid }) => (
        <div className="card max-w-sm bg-base-100 shadow-xl overflow-y-auto">
          <div className="card-body">
            <Form className="flex flex-col gap-5">
              <label htmlFor="name" className="font-extrabold text-xl">
                專案名稱
              </label>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-red-500">{errors.name}</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="johnCena"
                  className="input input-bordered input-lg w-full max-w-xs"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>

              <label htmlFor="price" className="font-extrabold text-xl">
                價值
              </label>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-red-500">
                    {errors.price}
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="300000"
                  className="input input-bordered input-lg w-full max-w-xs"
                  onChange={handleChange}
                  value={values.price}
                />
              </div>

              <label htmlFor="description" className="font-extrabold text-xl">
                內容
              </label>
              <textarea
                className="textarea textarea-info"
                name="description"
                placeholder="..."
                onChange={handleChange}
                value={values.description}
              ></textarea>

            
              <button
                className={`btn ${!isValid ? "btn-disabled" : ""}`}
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

export default addProject;
