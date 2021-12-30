import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon} from 'assets/icons/delete-icon.svg';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child)::after{
        content: '';
        position: absolute;
        botton: 0;
        width: 100%;
        height: 1px;
        background-color: lightgrey;
    }
`;

const StyledButton = styled.button`
width: 25px;
height: 25px;
background-color: '#c8c7d6';
border-radius: 50px;
border: none;
color: white;
display: flex;
align-items: center;

svg {
    width: 100%;
    height:100%;
}

`;

const UserListItem = ({userData: {zamówienia, imie, ocena = '0'}}) => (
    <Wrapper>
    <div>{zamówienia}</div>
    <div>
        <p>{imie}</p>
        <p>{ocena}</p>
    </div>
    <StyledButton>
    <DeleteIcon/>
    </StyledButton>
   


    </Wrapper>
    );

UserListItem.propTypes = {
    userData: PropTypes.shape({
        zamówienia: PropTypes.string.isRequired,
        imie: PropTypes.string.isRequired,
        ocena: PropTypes.string,
    })
}

export default UserListItem

