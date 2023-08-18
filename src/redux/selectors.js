import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    return filter
      ? items?.filter(contact =>
          contact.name?.toLowerCase().includes(filter.toLowerCase())
        )
      : items;
  }
);
