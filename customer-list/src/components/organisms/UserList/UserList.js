import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wrapper } from './UserList.styles';


const UserList = () => {
    <Wrapper>
    
        <StyledList>
            {users.map((userData) => (
                <UserListItem key={userData.imie} userData={userData}
    userData={userData}/>
            ))}
        </StyledList>
    </Wrapper>
};


export default UserList;





