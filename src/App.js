import './App.css';
import Aim from './pages/Aim'
import Theory from './pages/Theory'
import Procedure from './pages/Procedure'
import References from './pages/References'
import Feedback from './pages/Feedback'
import Pre_test from './pages/Pre_test'
import Simulation from './pages/Simulation'
import Post_test from './pages/Post_test'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{height:"100vh"}}>
      <Router>
        <Navbar />
        <Routes>
        <Route index element={<Aim />} />
        <Route path='/theory' element={<Theory/>} />
        <Route path='/procedure' element={<Procedure/>} />
        <Route path='/pre_test' element={<Pre_test/>} />
        <Route path='/simulation' element={<Simulation/> } />
        <Route path='/post_test' element={<Post_test/>} />
        <Route path='/references' element={<References/>} />
        <Route path='/feedback' element={<Feedback/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
