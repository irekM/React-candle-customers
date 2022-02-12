import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { users as usersData } from 'data/users';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: ()=>{},
  deleteUser: () => {},
});

const Root = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersContext.Provider value={{
            users,
            handleAddUser,
            deleteUser,
          }}>
        <Wrapper>
          <Switch>
            <Route path="/add-user">
              <Form formValues={formValues} handleInputChange={handleInputChange} />
            </Route>
            <Route path="/">
              <UsersList deleteUser={deleteUser} users={users} />
            </Route>
          </Switch>
        </Wrapper>
        </UsersContext.Provider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
