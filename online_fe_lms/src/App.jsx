
import './App.css'
import Button from 'react-bootstrap/Button';
 import { ToastContainer, toast } from 'react-toastify';
import { FaHome } from "react-icons/fa";
function App() {
 
toast.success("Wow so easy!")
  return (
    <>
     <h2>comming soon   <FaHome /></h2>
  
      <Button variant="primary">Primary</Button>
      <ToastContainer />
    </>
  )
}

export default App
