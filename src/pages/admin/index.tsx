import React from "react";

import Paper from "@mui/material/Paper";

function index() {
  return (
    <div className="flex flex-col h-full gap-5 p-5 md:w-2/3 rounded-l-md lg:w-full">
      <Paper elevation={3}>
        <h1 className="text-3xl text-center py-5">管理員</h1>
      </Paper>
    </div>
  );
}

export default index;
