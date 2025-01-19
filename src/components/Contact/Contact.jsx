import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(contact.id))
        .unwrap()
        .then(() => toast.success("Contact deleted"))
        .catch(() => toast.error("Delete contact failed"));
    }
  };

  return (
    <div className={css.contact}>
      <ul className={css.info}>
        <li className={css.infoItem}>
          <FaUser />
          <p>{contact.name}</p>
        </li>

        <li className={css.infoItem}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </li>
      </ul>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
