import { useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import ListElement from 'components/ListElement';
import { List, ListItem } from 'components/ContactList/ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const normalisedFilter = filter.toLowerCase();

  const searchedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalisedFilter)
  );

  return (
    <List>
      {searchedContacts
        .sort((elementA, elementB) =>
          elementA.name.localeCompare(elementB.name)
        )
        .map(element => (
          <ListItem key={element.id}>
            <ListElement element={element} />
          </ListItem>
        ))}
    </List>
  );
};

export default ContactList;
