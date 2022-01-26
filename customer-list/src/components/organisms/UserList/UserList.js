import React, {useState} from 'react';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, StyledTitle, Wrapper } from './UserList.styles';


const UsersList = ({users, deleteUser}) => {
    return(
        <>
            <Wrapper>
            <StyledTitle>Customer List</StyledTitle>
            <StyledList>
                {users.map((userData) => (
                    <UserListItem deleteUser={deleteUser} key={userData.imie} userData={userData}/>
                ))}
            </StyledList>
        </Wrapper>
        </>  
);
};

export default UserList;
