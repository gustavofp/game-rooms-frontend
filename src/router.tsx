import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rooms from './pages/rooms'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
        </BrowserRouter>
    )
  }
  
  export default Router