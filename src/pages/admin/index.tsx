import React from "react";
import Link from "next/link";
import Titles from "../../components/Titles";

function index() {
  return (
    <Titles titleName="管理員">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <Link href="admin/signup">
            <a>新增使用者</a>
          </Link>
        </div>
      </div>
    </Titles>
  );
}

export default index;
