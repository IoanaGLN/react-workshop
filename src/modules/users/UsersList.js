import React, { PropTypes } from 'react';

const defaultProps = {
  users: [],
}

function UsersList(props) {
  return (
    <div>
      <p>Users List</p>
      <ul>
        {props.users.map((user, index) => (
          <li onClick={props.onUserSelect} key={index}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

UsersList.defaultProps = defaultProps;

export default UsersList;
