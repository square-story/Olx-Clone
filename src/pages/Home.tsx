import './Home.css'
import Navbar from "../components/Navbar";
import { FC } from "react";
import LoginModal from '../components/LoginModal';
import { useAuth } from '../contexts/AuthContext';



const Home: FC = () => {
    const { isLoginModalOpen } = useAuth();
    return (
        <div className="home-container">
            <Navbar />
            {isLoginModalOpen && <LoginModal />}
        </div>
    )
}


export default Home;