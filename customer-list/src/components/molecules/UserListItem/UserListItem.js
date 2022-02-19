import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledAvarge, StyledInfo, Wrapper } from '../UserListItem.styles';
import { UserShape } from 'types';
import { UsersContext } from 'vievs/Root';


const UserListItem = ({userData: {avarge, name, attendence = '0'}}) => {
    const { deleteUser } = useContext(UsersContext);

   return (
    <Wrapper>
    <StyledAvarge value={avarge}>{avarge}</StyledAvarge>
    <StyledInfo>
         <p>
             {name}
             <DeleteButton onClick={() => deleteUser(name)}/>
         </p>
         <p>attendence: {attendence}</p> 
    
     </StyledInfo>
     </Wrapper>
   )
    
};
    
   

UserListItem.propTypes = {
    userData: PropTypes.shape(UserShape),
};

export default UserListItem;

