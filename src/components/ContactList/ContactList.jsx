import React from 'react';
import { useEffect } from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts, deleteContact } from 'redux/operations';

import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';

const ContactList = () => {
  const loading = useSelector(selectIsLoading);
  const filteredData = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ol>
      {filteredData?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div className={style.item}>
              {name}: {number}
              <button
                disabled={loading}
                className={style.button}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;
