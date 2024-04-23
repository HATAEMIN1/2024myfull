import React from 'react';

function ListItem({ no, item, idx }) {
  return (
    <>
      <li key={idx}>
        {no}. {item.title}/{item.user.name}
      </li>
    </>
  );
}

export default ListItem;
