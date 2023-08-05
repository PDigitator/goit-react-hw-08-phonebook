import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm';
import Loader from 'components/Loader';
import SearchFilter from 'components/SearchFilter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && !error && <Loader />}
        {contacts.length ? (
          <>
            <SearchFilter />
            <ContactList />
          </>
        ) : (
          <Notification message="There are no contacts in the phone book" />
        )}
      </Section>
    </>
  );
};

export default Contacts;
