import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Container from "../Container/Container";

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Container alignment="center">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor={emailId}>Email</label>
          <Field type="email" name="email" id={emailId} />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label htmlFor={passwordId}>Password</label>
          <Field type="password" name="password" id={passwordId} />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </Container>
  );
};
