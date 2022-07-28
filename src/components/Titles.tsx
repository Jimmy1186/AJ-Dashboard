import React from "react";
import Paper from "@mui/material/Paper";

type titleWrapperType = {
  children: React.ReactNode;
  titleName: string;
};

function Titles({ children,titleName }: titleWrapperType ) {
  return (
    <div className="flex flex-col h-full gap-5 p-5 md:w-2/3 rounded-l-md lg:w-full">
      <Paper elevation={3}>
        <h1 className="text-3xl text-center py-5">{titleName}</h1>
      </Paper>

      {children}
    </div>
  );
}

export default Titles;
