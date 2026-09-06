import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/customInput/CustomInput";

const SignUp = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      {" "}
      <Form style={{ width: "450px" }} className="card p-5 mt-5 shadow">
        <h3>Join Our Library Community</h3>
        <CustomInput />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
