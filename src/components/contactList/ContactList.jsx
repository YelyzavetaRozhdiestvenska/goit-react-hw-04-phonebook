import React from 'react';
import { StyledList, ContactItem, DeletButton } from './contactList.styled';

export const ContactList = ({ getVisibleContact, handleDelete }) => {
  return (
    <StyledList>
      {getVisibleContact.map(contact => (
        <ContactItem key={contact.id}> 
          {contact.name}: {contact.number}{' '}
          <DeletButton onClick={() => handleDelete(contact.id)}>
            Delete
          </DeletButton>
        </ContactItem>
      ))}
    </StyledList>
  );
};
