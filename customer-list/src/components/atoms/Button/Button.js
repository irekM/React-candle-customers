import React from 'react';
import {ReactComponent as DeleteIcon} from 'assets/icons';
import { StyledButton } from './Button.style';



const Button = () => (
    <StyledButton>
        <DeleteIcon/>
    </StyledButton>
);

export default Button;