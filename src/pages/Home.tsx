import './Home.css'
import Navbar from "../components/Navbar";
import { FC } from "react";
import LoginModal from '../components/LoginModal';
import { useAuth } from '../contexts/AuthContext';
import Footer from "../components/Footer";




const Home: FC = () => {
    const { isLoginModalOpen } = useAuth();
    return (
        <div className="home-container">
            <Navbar />
            {isLoginModalOpen && <LoginModal />}
            <div className="main-container w-full px-4 sm:px-12 md:px-20 lg:px-44 py-12">
                <div className="products-container mt-[50px]">
                    <h2 className="py-5 text-start text-2xl">Fresh Recommendations</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Home;