import propTypes from 'prop-types';
import { Contacts, ContactsItem, Button } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => (
  <>
    <Contacts>
      {contacts.map((contact, id) => (
        <ContactsItem  key={id}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </Button>
        </ContactsItem >
      ))}
    </Contacts>
  </>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};