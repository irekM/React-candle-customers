import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList } from './UsersList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';


const UsersList = ({users, deleteUser}) => {
    return(
        <>
            <Title>Customer List</Title>
            <StyledList>
                {users.map((userData) => (
                    <UserListItem deleteUser={deleteUser} key={userData.imie} userData={userData}/>
                ))}
            </StyledList>
        </>  
);
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    deleteUser: PropTypes.func,
  };

export default UserList;
