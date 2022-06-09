import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
`;

const Thead = styled.thead`
  text-align: center;
  td {
    padding: 20px;
  }
`;
const Td = styled.td`
  padding: 20px;
`;

const Admin = () => {
  const [stData, setstData] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://kenassesment.herokuapp.com/student/allstudents`)
      .then((res) => res.json())
      .then((res) => {
        setstData(res.student);
        console.log(stData);
      });
  }, []);
  return (
    <Div>
      <div>
        <Thead>
          <td>Sl.no </td>
          <td>Student Name</td>
          <td>Student Email</td>
          <td>Student Roll</td>
          <td>Phone</td>
          <td>Term</td>
          <td>Year</td>
        </Thead>
        <tbody>
          {stData.length > 0
            ? stData.map((each, idx) => (
                // console.log(each.name);
                <tr>
                  <Td>{idx + 1}</Td>
                  <Td>{each.name}</Td>
                  <Td>{each.email}</Td>
                  <Td>{each.roll}</Td>
                  <Td>{each.number}</Td>
                  <Td>{each.term}</Td>
                  <Td>{each.year}</Td>
                  <Td></Td>
                </tr>
              ))
            : null}

          {/* <Td>{stData[0].name}</Td> */}
        </tbody>
      </div>
      {/* <div>
        <Link to="createStudents">create Students</Link>
      </div> */}
    </Div>
  );
};

export default Admin;
