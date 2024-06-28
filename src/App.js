import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Test, ChangeLog, Error } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/update-notes' element={<ChangeLog />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;