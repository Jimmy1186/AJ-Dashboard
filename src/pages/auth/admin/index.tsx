import React from "react";
import Link from "next/link";

function index() {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <Link href="admin/signup">
            <a>新增使用者</a>
          </Link>
        </div>
      </div>

    </>
    
    
  );
}

export default index;
