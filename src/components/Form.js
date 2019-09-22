import React, {useState} from 'react'
const Form = ({addMember}) => {
    const [newMember, setNewMember] = useState({
        name: '',
        email: '',
        position: ''
    });
    const handleChange = e => {
        setNewMember({...newMember, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        addMember(newMember);
    }

    return (
        <form onSubmit = {e => handleSubmit(e)}>
            <label>Name</label>
            <input type = 'text'
                   name = 'name'
                   value = {newMember.name}
                   placeholder = 'Name'
                   onChange = {handleChange} />
            <label>Email</label>
            <input type = 'email'
                   name = 'email'
                   value = {newMember.email}
                   placeholder = 'Email Address'
                   onChange = {handleChange} />
            <label>Position</label>
            <input type = 'position'
                   name = 'position'
                   value = {newMember.position}
                   placeholder = 'position'
                   onChange = {handleChange} />
            <button type="submit" >Submit</button> 
        </form>
    )
}

export default Form;