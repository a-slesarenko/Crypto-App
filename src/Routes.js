import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
import Project from './pages/ProjectsStorage/Project';

const RoutesComponent = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<Project />} />
        <Route path='/contacts' element={<Contacts />} />
    </Routes>
);

export default RoutesComponent;
