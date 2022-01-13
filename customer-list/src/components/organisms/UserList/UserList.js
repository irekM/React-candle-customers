import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { StyledList, Wrapper } from './UserList.styles';


const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve([...users]);
            } else {
                reject({message: 'Error'})
            }
        }, 2000)
    })
}


class UserList extends React.Component {
    state = {
       users: [],
    }

    componentDidMount() {
       this.setState({isLoading: true});
       mockAPI().then(date => {
           this.setState({isLoading: false});
           this.setState({users: data});
       })
    .catch(err =>console.log(err));
    }

    componentDidUpdate(prevState){
        if(prevState.isLoading !== this.state.isLoading){
            console.log('Wczytywany stan zostal zmieniony');
        }
    }

    deleteUser = (imie) => {
        const filteredUsers = this.state.users.filter(user => user.imie !== imie);
        this.setState({users:filteredUsers});
    }

    render(){
        return(
            
                <Wrapper>
                    <h1>{this.state.isLoading ? 'Loading...' : 'Users list'}</h1>
                    <StyledList>
                        {this.state.users.map((userData) => (
                            <UserListItem key={userData.imie} userData={userData}
                userData={userData}/>
                        ))}
                    </StyledList>
                </Wrapper>
                        
        );
    }
}

export default UserList;





