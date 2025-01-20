import { useField } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import css from "./DatePicker.module.css";

export const DatePickerField = ({ name, placeholder, props }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      {...props}
      className={css.datePicker}
      selected={value}
      onChange={(date) => setValue(date)}
      startDate={new Date()}
      placeholderText={placeholder}
    />
  );
};

export default DatePickerField;
