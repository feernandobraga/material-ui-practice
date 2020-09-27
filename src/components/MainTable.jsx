import React, { useEffect, useState } from "react";
import api from "../services/api";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const MainTable = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      // console.log(response.data[0]["clientName"]);
      setClients(response.data);
    });
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Industry</TableCell>
            <TableCell align="left">Point of Contact</TableCell>
            <TableCell align="left">Website</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.clientId}>
              <TableCell component="th" scope="row">
                {client.clientName}
              </TableCell>
              <TableCell>{client.clientEmail}</TableCell>
              <TableCell align="left">{client.clientWorkPhone}</TableCell>
              <TableCell align="left">{client.clientIndustry}</TableCell>
              <TableCell align="left">{client.clientPocName}</TableCell>
              <TableCell align="left">{client.clientWebsite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default MainTable;
