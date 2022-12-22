import React from 'react';
import { Routes, Route } from "react-router-dom";
import AddNewStudent from '../Compo/AddNewStudent'
import Contact from '../Compo/Contact';
import EditDetails from '../Compo/EditDetails';
import Home from '../Compo/Home';
import Students from '../Compo/Students';

const Paths = () => {
    return (
        <div>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Students" element={<Students />} />
                <Route path="ContactUs" element={<Contact />} />
                <Route path="Students/AddNewStudent" element={<AddNewStudent />} />
                <Route path="Students/EditDetails" element={<EditDetails />} />
            </Routes>
        </div>
    );
}

export default Paths;
