import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about-me.jsx';
import 'index.css';

function App() {

  return (
    <>
      <div>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-me' element={<About />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
