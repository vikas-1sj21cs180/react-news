import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function App(props) {
  const [progress, setProgress] = useState(0);

  return (
    <div className='container'>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pagesize={10} category="science" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pagesize={10} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={10} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pagesize={10} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pagesize={10} category="health" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pagesize={10} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pagesize={10} category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}
