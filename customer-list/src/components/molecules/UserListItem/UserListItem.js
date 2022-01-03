import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

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



const UserListItem = ({userData: {zamówienia, imie, ocena = '0'}}) => (
    <Wrapper>
    <div>{zamówienia}</div>
    <div>
        <p>{imie}</p>
        <p>{ocena}</p>
    </div>
   
   


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

