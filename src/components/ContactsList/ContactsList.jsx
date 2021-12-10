import PropTypes from "prop-types";
import s from "./ContactsList.module.css";

const ContactList = ({ filterContact, deleteContact }) => {
  return (
    <ul>
      {filterContact.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              className={s.button}
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContact: PropTypes.array,
  deleteContact: PropTypes.func.isRequired,
};
