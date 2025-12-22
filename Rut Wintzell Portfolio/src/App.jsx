import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home.jsx';
import About from './pages/about-me.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <h1>My portfolio</h1>
        <h2>Rut Wintzell</h2>
        <p>On this page, you can view some of my projects. 
          Use the search bar to find projects by specific methods or technologies. 
          If you want to learn more about me and my work, feel free to check out the 'About Me' page!</p>

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
