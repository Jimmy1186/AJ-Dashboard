import React from "react";
import Link from "next/link";
import MainSide from "./../../../components/layout/MainSide";
import { trpc } from "../../../utils/trpc";
import { useQuery } from "react-query";

function index() {
  const { data: users, refetch } = trpc.useQuery(["findAll"]);

  return (
    <>
      <MainSide>
        <div className="card w-28 h-28 bg-base-100 shadow-xl">
          <div className="card-body p-0">
            <Link href="admin/signup">
              <a className="flex flex-col h-full items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-3/4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>新增使用者</p>
              </a>
            </Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>role</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </MainSide>
    </>
  );
}

export default index;
