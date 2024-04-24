import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({ no, item, idx }) {
  console.log(item._id);
  return (
    <>
      <li key={idx}>
        <Link to={`/blog/${item._id}`}>
          {no}. {item.title}/{item.user.name}/{item.user.email}
        </Link>
      </li>
    </>
  );
}

export default ListItem;
