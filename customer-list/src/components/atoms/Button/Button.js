import React from 'react';
import {ReactComponent as DeleteIcon} from 'assets/icons';
import { StyledButton } from './Button.style';



const Button = (props) => (
    <StyledButton {...props}>
        <DeleteIcon/>
    </StyledButton>
);

export default Button;