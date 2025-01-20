import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addBooking } from "../../redux/details/operations";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import DatePickerField from "../DatePicker/DatePicker";

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  date: Yup.date().typeError("Invalid date").required("Required"),
  comment: Yup.string(),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const dateId = useId();
  const commentId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addBooking(values))
      .unwrap()
      .then(() => {
        actions.resetForm();
        toast.success("Booking submitted successfully");
      })
      .catch(() => toast.error("Submission failed"));
  };

  return (
    <div className={css.contactFormContainer}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="name"
            id={nameId}
            placeholder="Name*"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="name" component="span" />

          <Field
            type="email"
            name="email"
            id={emailId}
            placeholder="Email*"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="email" component="span" />

          <DatePickerField
            id={dateId}
            name="date"
            placeholder="Booking date*"
          />
          <ErrorMessage className={css.error} name="date" component="span" />

          <Field
            as="textarea"
            name="comment"
            id={commentId}
            placeholder="Comment"
            className={css.textarea}
          />
          <ErrorMessage className={css.error} name="comment" component="span" />

          <div>
            <PrimaryButton type="submit" className={css.submitButton}>
              Send
            </PrimaryButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
