import axios from "axios";
import './Get.css'
import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
function Get()  {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:8082/api/v1/user/get')
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
    return (
        <div className="full">
        <center>  
        <h3></h3> 
      <table className="table-fill">
      <thead>
        <tr>
          <th className="text-left">UserId</th>
          <th className="text-left">Email</th>
          <th className="text-left">PhoneNo</th>
          <th className="text-left">Qone</th>
          <th className="text-left">Qtwo</th>
          <th className="text-left">Qthree</th>
          <th className="text-left">Qfour</th>
          <th className="text-left">Qfive</th>
          <th className="text-left">Qsix</th>
          <th className="text-left">Qseven</th>
          <th className="text-left">Qeight</th>
          <th className="text-left">Qnine</th>
          <th className="text-left">Qten</th>
          <th className="text-left">Qeleven</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((user, index) => (
                <tr key={index}>
            <td className="text-left">{user.userid}</td>
            <td className="text-left">{user.email}</td>
            <td className="text-left">{user.phoneno}</td>
            <td className="text-left">{user.qone}</td>
            <td className="text-left">{user.qtwo}</td>
            <td className="text-left">{user.qthree}</td>
            <td className="text-left">{user.qfour}</td>
            <td className="text-left">{user.qfive}</td>
            <td className="text-left">{user.qsix}</td>
            <td className="text-left">{user.qseven}</td>
            <td className="text-left">{user.qeight}</td>
            <td className="text-left">{user.qnine}</td>
            <td className="text-left">{user.qten}</td>
            <td className="text-left">{user.qeleven}</td>
          </tr>
        ))}
      </tbody>
    </table><br></br><br></br>
    <CSVLink data={tableData} filename={'table_data.csv'}>
            Download Table as CSV
          </CSVLink>
        </center>
    </div>
    );
        }
  
  
export default Get;