import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Editpage from './pages/Editpage';
import Singlepage from './pages/Singlepage';
import LearningUseState from "./pages/LearningUseState"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Editpage />} />
        <Route path="/singlepage" element={<Singlepage/>} />
         <Route path="/learning-usestate" element={<LearningUseState/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
