import AppRoutes from './routes'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Providers from './contexts';

function App() {

  return (
    <BrowserRouter>
      <Providers>
        <ToastContainer />
        <AppRoutes />
      </Providers>
    </BrowserRouter>
  )
}

export default App
