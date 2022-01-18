import React, {useState, useEffect} from 'react';
import { users  as usersData} from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wrapper } from './UserList.styles';


const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usersData) {
                resolve([...usersData]);
            } else {
                reject({message: 'Error'})
            }
        }, 2000)
    })
}

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState([]);


    useEffect( () => {
        setLoadingState(true);
        mockAPI().then(data => {
            setLoadingState(false);
            setUsers(data)
            })
            .catch(err =>console.log(err));
    },[])


   const deleteUser = (imie) => {
        const filteredUsers =users.filter(user => user.imie !== imie);
        setUsers(filteredUsers)
    };



    return(
            
        <Wrapper>
            <h1>{isLoading ? 'Loading...' : 'Users list'}</h1>
            <StyledList>
                {users.map((userData) => (
                    <UserListItem deleteUser={deleteUser}key={userData.imie} userData={userData}/>
                ))}
            </StyledList>
        </Wrapper>
                
);
}

export default UserList;





