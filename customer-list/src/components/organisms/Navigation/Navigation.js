import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Siema
          <br />
          Stary
        </h1>
      </Logo>
      <StyledLink exact to="/group">Dashboard</StyledLink>
    </Wrapper>
  );
};

export default Navigation;