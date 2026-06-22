import Footer from "../Footer";
import Navbar from "../Navbar";
import AwardsBanner from "./AwardBanner";
import BestSellers from "./BestSellers";
import FindFavorite from "./FindFavorite";
import Hero from "./Hero";
import NewReleases from "./NewReleases";

export default function HomeView (){
    return (
        <>
            <Navbar />
                <main className="">
                    <Hero />
                    <BestSellers />
                    <FindFavorite />
                    <AwardsBanner />
                    <NewReleases />
                </main>
            <Footer />
        </>
    )
}