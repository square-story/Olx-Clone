import './Home.css'
import Navbar from "../components/Navbar";
import { FC } from "react";
import LoginModal from '../components/LoginModal';
import { useAuth } from '../contexts/AuthContext';
import Footer from "../components/Footer";
import UseFetchAds from '../components/FetchData';
import loadingGif from '../assets/loading.gif';
import ProductCard from '../components/ProductCard';





const Home: FC = () => {
    const { isLoginModalOpen } = useAuth();
    const { ads, loading, error } = UseFetchAds();
    if (loading) return (
        <div className="loading w-screen h-screen flex items-center justify-center">
            <img src={loadingGif} alt="Loading" width="350px" />
        </div>
    );

    if (error) return <div>Error loading ads: {error.message}</div>;
    return (
        <div className="home-container">
            <Navbar />
            {isLoginModalOpen && <LoginModal />}
            <div className="main-container w-full px-4 sm:px-12 md:px-20 lg:px-44 py-12">
                <div className="products-container mt-[50px]">
                    <h2 className="py-5 text-start text-2xl">Fresh Recommendations</h2>
                    <div className="product-cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {ads.map((item) => (
                            <ProductCard
                                key={item.id}
                                category={item.category}
                                title={item.title}
                                price={item.price}
                                image={item.imageUrl}
                                id={item.id}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Home;