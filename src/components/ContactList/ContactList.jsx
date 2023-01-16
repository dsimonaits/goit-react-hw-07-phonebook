import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import Contact from 'components/Contact';
import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          {' '}
          <Contact name={name} number={number} id={id} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
