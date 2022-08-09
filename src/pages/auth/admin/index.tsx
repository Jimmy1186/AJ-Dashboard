import React from "react";
import Link from "next/link";
import MainSide from "./../../../components/layout/MainSide";
import { trpc } from "../../../utils/trpc";
import { useQuery } from "react-query";
import Addbtn from "../../../components/widget/Addbtn";

function index() {
  const { data: users, refetch } = trpc.useQuery(["findAllUser"]);

  return (
    <>

        <Addbtn addBtnLink="/auth/admin/signup" addBtnTitle="新增使用者"/>

        <div className="card bg-base-100 h-fit shadow-xl">
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
   
    </>
  );
}

export default index;
