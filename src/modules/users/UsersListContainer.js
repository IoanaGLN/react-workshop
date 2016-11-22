import React, { Component } from 'react';
import UsersList from './UsersList';

// TODO to be moved to a service
const usersList = ['Dan', 'Eliza', 'Calin', 'Mirabela', 'Ioana'];

class UsersListContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: usersList
    };
  }

  onUserSelect(event) {
    console.log(event.target);
  }

  render() {
    return (
      <div>
        <UsersList 
          users={this.state.users} 
          onUserSelect={this.onUserSelect} 
        />
      </div>
    );
  }
}

// UsersListContainer.defaultProps = defaultProps;

export default UsersListContainer;
