import Navbar from "../Navbar";
import BestSellers from "./BestSellers";
import Hero from "./Hero";

export default function HomeView (){
    return (
        <>
            <Navbar />
            <Hero />
            <BestSellers />
        </>
    )
}