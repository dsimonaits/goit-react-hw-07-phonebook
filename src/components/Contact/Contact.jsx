import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Btn } from './Contact.styled';
import { Number } from './Contact.styled';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [btnState, setBtnState] = useState(false);

  const handleDelete = id => {
    dispatch(deleteContact(id));
    setBtnState(true);
  };

  return (
    <>
      <p>
        {name}: <Number>{number}</Number>
      </p>
      <Btn type="button" disabled={btnState} onClick={() => handleDelete(id)}>
        {!btnState ? 'Delete' : 'Deleting...'}
      </Btn>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
