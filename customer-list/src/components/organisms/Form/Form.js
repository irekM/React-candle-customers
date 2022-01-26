import react from "react";
import { StyledTitle, Wrapper} from '../UserList/UserList.styles';
import FormField from "components/molecules/FormField/FormField";
import { Button } from 'components/atoms/Button/Button';

const Form = ({ handleAddUser, formValues, handleInputChange}) => {
    return (
        <>
            <Wrapper as ="form" onSubmit={handleAddUser}>
                <StyledTitle>Add new client</StyledTitle>
                <FormField label="Name" id="name" value={formValues.name} onChange={handleInputChange}/>
                <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
                <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
                <Button type="submit">Add</Button>
            </Wrapper>
        </>
    )
}

export default Form;