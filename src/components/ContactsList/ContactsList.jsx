import PropTypes from "prop-types";
import s from "./ContactsList.module.css";

const ContactList = ({ filterContact, removeContact }) => {
  return (
    <ul>
      {filterContact.map((contact) => {
        return (
          <li key={contact.id} className={s.item}>
            <p>{contact.name}: </p>
            <p>{contact.number}</p>
            <button
              className={s.button}
              type="button"
              onClick={() => removeContact(contact.id)}
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
  filterContacts: PropTypes.array,
  removeContact: PropTypes.func.isRequired,
};
