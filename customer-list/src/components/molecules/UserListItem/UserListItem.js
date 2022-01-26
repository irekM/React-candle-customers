import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledOcena, StyledInfo, Wrapper } from '../UserListItem.styles';

const UserListItem = ({deleteUser, userData: {avarge, imie, zamówienia = '0'}}) => (
    <Wrapper>
   <StyledOcena value={ocena}>{ocena}</StyledOcena>
   <StyledInfo>
        <p>
            {imie}
            <DeleteButton onClick={() => deleteUser(imie)}/>
        </p>
        <p>zamówienia: {zamówienia}</p> 
   
    </StyledInfo>
    </Wrapper>
    );

UserListItem.propTypes = {
    userData: PropTypes.shape({
        zamówienia: PropTypes.string.isRequired,
        imie: PropTypes.string.isRequired,
        ocena: PropTypes.string,
    })
}

export default UserListItem;

