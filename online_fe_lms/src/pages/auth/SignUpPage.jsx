import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/customInput/CustomInput";
import { signUpInputs } from "../../assets/custominputs/userSignUpInputs.js";
import useForm from "../../hooks/useForm.js";
import { signUpNewUserApi } from "../../services/authAPI.js";
const initialState = {};
const SignUp = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
    // differentiate confirm password from rest of the form data
    const { confirmPassword, ...rest } = form;
    //check password and confirm password match
    if (confirmPassword !== rest.password)
      return alert("Password do not match");

    const result = await signUpNewUserApi(rest);
    console.log(result);
  };

  return (
    <div className=" d-flex justify-content-center align-items-center">
      {" "}
      <Form
        onSubmit={handleOnSubmit}
        style={{ width: "450px" }}
        className="card p-5 m-5 shadow"
      >
        <h3>Join Our Library Community</h3>
        {signUpInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
