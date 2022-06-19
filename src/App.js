import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Friday from './components/Friday/Friday';
import Menu from './components/Menu/Menu';
import Monday from './components/Monday/Monday';
import Saturday from './components/Saturday/Saturday';
import Sunday from './components/Sunday/Sunday';
import Thursday from './components/Thursday/Thursday';
import Tuesday from './components/Tuesday/Tuesday';
import Wednesday from './components/Wednesday/Wednesday';

const App = () => {
  return (
    <>
      <Menu />
      <div className='page'>
        <Routes>
          <Route path={`/monday`} element={<Monday />} />
          <Route path={`/tuesday`} element={<Tuesday />} />
          <Route path={`/wednesday`} element={<Wednesday />} />
          <Route path={`/thursday`} element={<Thursday />} />
          <Route path={`/friday`} element={<Friday />} />
          <Route path={`/saturday`} element={<Saturday />} />
          <Route path={`/sunday`} element={<Sunday />} />
          <Route path='*' element={<Navigate to='/monday' replace />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
