import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Label} from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    alighn-items: flex-start;

    ${label} {
        margin: 10px 0;
    }
`;

const FormField = ({onChange, value, label, name, id, type = 'text'}) => {
    return (
        <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input name={name} id={id} type={type} value={value} onChange={onChange} />
        </Wrapper>
    );
};


FormField.PropTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
}

export default FormField