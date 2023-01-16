import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError } from 'redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from './Section';
import ContactForm from './ContactForm';
import FilterByName from './Filter';
import ContactList from './ContactList';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  error !== null && toast('Something went wrong! Try refresh the Page.');

  return (
    <>
      <Section title="Phonebook" border="false">
        <ContactForm />
      </Section>
      <Section title="Contacts" border="true">
        <FilterByName />
        <ContactList />
      </Section>
      <ToastContainer />
    </>
  );
};

export default App;
