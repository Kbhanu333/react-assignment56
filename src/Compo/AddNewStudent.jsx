import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Student from '../Data';

const AddNewStudent = () => {
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Course, setCourse] = useState('');
    const [Batch, setBatch] = useState('');

    const handleChange = (e) => {
        const field = e.target.getAttribute("name");
        const val = e.target.value;
        if(field==='Name'){setName(val)}
        else if(field==='Age'){setAge(val)}
        else if(field==='Course'){setCourse(val)}
        else{setBatch(val)}
    }

    const cancelAddStudent = () => {
        navigate('/Students');
    }

    const submitNewStudent = () => {
        const newStudent = {
            "id": `${Student.length}`,
            "Name": `${Name}`,
            "Age": `${Age}`,
            "Course": `${Course}`,
            "Batch": `${Batch}`,
            "Change": "Edit"
        }
        Student.push(newStudent);
        navigate('/Students');
    }
    return (
        <>
           <div className='box'>
                <div className='header'>
                    <input type="text" name="Name" className='editFields shadow-sm' placeholder='Name' value={Name} onChange={handleChange} />
                    <input type="text" name="Age" className='editFields shadow-sm' placeholder='Age' value={Age} onChange={handleChange} />
                    <input type="text" name="Course" className='editFields shadow-sm' placeholder='Course' value={Course} onChange={handleChange} />
                    <input type="text" name="Batch" className='editFields shadow-sm' placeholder='Batch' value={Batch} onChange={handleChange} />
                </div>
            </div>
            <div className='box2'>
                <button className='butn2' onClick={cancelAddStudent} style={{backgroundColor:'grey'}}>Cancel</button>
                <button className='butn2' onClick={submitNewStudent}>Submit</button>
            </div> 
        </>
    );
}

export default AddNewStudent;
