import { useState } from "react";
import Joi from "joi-browser";
import useForm from "./common/useForm";

const LoginForm = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const rule = {
    data,
    setData,
    errors,
    setErrors,
    schema,
    doSubmit: () => {
      console.log("submitted");
    },
  };

  const { handleSubmit, renderButton, renderInput } = useForm(rule);

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      {renderInput({ name: "username", label: "Username" })}
      {renderInput({ name: "password", label: "Password", type: "password" })}
      {renderButton("Login")}
    </form>
  );
};

export default LoginForm;
