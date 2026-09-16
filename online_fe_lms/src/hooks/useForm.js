import { useState } from "react";
import { useEffect } from "react";
import { validatePassword } from "../utils/validatePassword.js";
const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [passwordErrors, setpasswordErrors] = useState([]);
  // only when password and confirm password changes

  useEffect(() => {
    const errorArg = validatePassword(form.password, form.confirmPassword);
    setpasswordErrors(errorArg);
  }, [form.password, form.confirmPassword]);
  return {
    form,
    setForm,
    passwordErrors,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};

export default useForm;
