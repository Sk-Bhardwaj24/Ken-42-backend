import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isAuthorized } from "../../Redux/isAuth/action.js";
import { Navigate, useNavigate } from "react-router-dom";

let Div = styled.div`
  text-align: center;
`;

const AdminLogin = () => {
  const [formData, setFormData] = React.useState({
    a_email: "",
    a_password: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [adminData, setAdminData] = React.useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    let addetails = formData;
    fetch(`https://kenassesment.herokuapp.com/admin/login`, {
      method: "Post",
      body: JSON.stringify(addetails),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAdminData(res);
        console.log(res);

        if (res.status) {
          console.log(res);
          dispatch(isAuthorized("admin"));
          navigate("/dashadmin");
        }
      });

    // console.log(formData);
  };
  const { a_email, a_password } = formData;
  return (
    <Div>
      <h3>Admin Dashboard</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Enter email:
          <input
            type="email"
            name="a_email"
            value={a_email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            name="a_password"
            value={a_password}
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

export default AdminLogin;
