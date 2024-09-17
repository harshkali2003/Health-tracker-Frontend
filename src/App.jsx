import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import NewRecord from './Pages/NewRecord'
import AllRecord from './Pages/AllRecords'
import UpdateRecord from './Pages/UpdateRecord'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/new-Record' element={<NewRecord/>} />
      <Route path='/all-Record' element={<AllRecord/>} />
      <Route path='/update/:id' element={<UpdateRecord/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
