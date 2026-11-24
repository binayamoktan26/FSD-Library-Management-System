import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
const initialState = {};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="sign-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome Back To The Library</Card.Title>

          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              onChange={handleOnChange}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              onChange={handleOnChange}
            />
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
          <div className="text-end my-3">
            forgen password ? <a href="/forget-password">Reset Password</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
