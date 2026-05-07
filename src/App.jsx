import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import LearningUseState from './pages/LearningUseState'
import SinglePage from './pages/Singlepage'
import Editpage from './pages/Editpage'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/single/:id' element={<SinglePage />} />
      <Route path='/edit' element={<Editpage />} />
      <Route path='/edit/:id' element={<Editpage />} />
      <Route path='/learning-usestate' element={<LearningUseState />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

// "/" - this is index page 
/*
Project - CRUD 
/ - Home page
/create - Create Page 
/edit - Edit Page 
/blog - Single Blog Page 
*/
export default App