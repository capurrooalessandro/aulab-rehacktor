import { useLoaderData } from "react-router";
import DetailSection from "../components/DetailPageComponents/DetailSection";
import Navbar from "../components/LayoutComponents/Navbar";
import Footer from "../components/LayoutComponents/Footer";
import GoBackBtn from "../components/LayoutComponents/GoBackBtn";

export default function DetailPage() {
    const game = useLoaderData()
    return (
        <>
            <Navbar />
            <main>
            <GoBackBtn/>
                <DetailSection game={game} />
            </main>
            <Footer />
        </>
    )
}