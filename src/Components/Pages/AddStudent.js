import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const AddStudentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.form`
    width: 75vw;
    display: flex;
    flex-direction: column;
    padding: 1em;
    align-items: center;
    border: 1px solid black;
`;

const Divider = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1em;
    justify-content: space-evenly;
    border: 1px solid black;
`;

const FormColumn = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin: 0.5em;
    width: 15vw;
`;


const AddStudent = () => {
    const [formValue, setformValue] = useState({
        lastName: '',
        firstName: '',
        address: '',
        email: '',
        phone: '',
        dateOfBirth: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValue);
    }
    return (
        <AddStudentContainer>
            <FormContainer>
                <Divider>
                    <FormColumn>
                        <Input
                            placeholder="Last Name"
                            value={formValue.lastName}
                        />
                        <Input
                            placeholder="First Name"
                            value={formValue.firstName}
                        />
                        <Input
                            placeholder="Address"
                            value={formValue.address}
                        />
                    </FormColumn>
                    <FormColumn>
                        <Input
                            type="date"
                            placeholder=""
                            value={formValue.dateOfBirth}
                        />
                        <Input
                            placeholder="Phone"
                            value={formValue.phone}
                        />
                        <Input
                            placeholder="E-mail"
                            value={formValue.email}
                        />
                    </FormColumn>
                </Divider>
                <button type="submit" onClick={event => handleSubmit(event)}>Submit</button>
            </FormContainer>
        </AddStudentContainer>
    )
}

export default AddStudent;