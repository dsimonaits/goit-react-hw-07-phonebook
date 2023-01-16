import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import FilterByName from './Filter';
import ContactList from './ContactList';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook" border="false">
        <ContactForm />
      </Section>

      <Section title="Contacts" border="true">
        <FilterByName />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
