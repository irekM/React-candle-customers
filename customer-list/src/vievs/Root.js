import React from 'react'
import UserList from 'components/organisms/UserList/UserList'
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%
  height: 100vh
`;

const Root = () => (

    <Wrapper>
      <UserList/>
    </Wrapper>
  )




export default Root;

