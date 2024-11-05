import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import Home from "./pages/Home";

function App() {

  return (
    <>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </>
  )
}

export default App
