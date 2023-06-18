import React from 'react';
import Aim from './pages/Aim';
import Theory from './pages/Theory';
import Procedure from './pages/Procedure';
import References from './pages/References';
import Feedback from './pages/Feedback';
import Pre_test from './pages/Pre_test';
import Simulation from './pages/Simulation';
import Post_test from './pages/Post_test';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App" sx={{ flex: 1, alignContent: 'center' }}>
      <Navbar />
      <Routes>
        <Route index element={<Aim />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/pre_test" element={<Pre_test />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/post_test" element={<Post_test />} />
        <Route path="/references" element={<References />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Box>
  );
}

export default App;
