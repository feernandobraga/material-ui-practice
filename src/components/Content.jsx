import { Typography } from "@material-ui/core";

import React from "react";
import MainTable from "./MainTable";
import SuperTable from "./SuperTable";

const Content = () => {
  return (
    <>
      {/* <Typography>9 Records found. Page 1 of 1</Typography> */}
      <SuperTable />
    </>
  );
};

export default Content;
