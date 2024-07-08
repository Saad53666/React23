import './index.css'
import Navbar from './components/ui/Navbar'
import Mainpage from './components/ui/Mainpage'
import ResponsiveBoxes from './components/ui/Responsiveboxes'
import Login from './components/Login'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Mainpage></Mainpage>
      <ResponsiveBoxes></ResponsiveBoxes>
      <Login></Login>
    </>
  )
}

export default App
