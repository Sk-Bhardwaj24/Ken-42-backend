import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isAuthorized } from "../../Redux/isAuth/action.js";
import { Navigate, useNavigate } from "react-router-dom";

let Div = styled.div`
  text-align: center;
`;

const StudentLogin = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [studentData, setStudentsData] = React.useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let stdetails = formData;
    fetch(`https://kenassesment.herokuapp.com/student/login`, {
      method: "POST",
      body: JSON.stringify(stdetails),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setStudentsData(res);

        if (res.status) {
          console.log(res);
          dispatch(isAuthorized("student"));
          navigate("/dashboard");
        }
      });

    // console.log(formData);
  };
  const { email, password } = formData;
  return (
    <Div>
      <h3>Student Dashboard</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Enter email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </Div>
  );
};

export default StudentLogin;
