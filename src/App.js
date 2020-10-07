import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import ResponsiveHeader from "./components/ResponsiveHeader";
import SuperTable from "./components/SuperTable";
import api from "./services/api";

function App() {
  const [clients, setClients] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setClients(response.data);
      setTableData(response.data);
    });
  }, []);

  const handleSearchByName = (name) => {
    if (name === "") {
      setTableData(clients);
    } else {
      const regexExpression = new RegExp(name, "gi");
      const filteredClients = clients.filter((client) => {
        return regexExpression.test(client.clientName);
      });
      setTableData(filteredClients);
    }
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid container item md={12} lg={8} justify="center">
        <ResponsiveHeader searchByName={handleSearchByName} />
      </Grid>

      <Grid container item md={12} lg={8} justify="center">
        <SuperTable data={tableData} />
      </Grid>
    </Grid>
  );
}

export default App;
