import './Home.css'
import Navbar from "../components/Navbar";
import { FC } from "react";

const Home: FC = () => {
    return (
        <div className="home-container">
            <Navbar />
            <h1>Home Page</h1>
        </div>
    )
}


export default Home;