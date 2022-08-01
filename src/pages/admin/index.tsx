import React from "react";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Titles from "../../components/Titles";

function index() {
  return (
    <Titles titleName="管理員">
      <Paper>
        <Link href="admin/signup">
          <a>新增使用者</a>
        </Link>
      </Paper>
      <Paper>
        
      </Paper>
    </Titles>
  );
}

export default index;
