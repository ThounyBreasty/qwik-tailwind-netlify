import { component$, Slot } from "@builder.io/qwik";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default component$(() => {
    
    return (
        <div>
        <Navbar />
        <main>
            <Slot />
        </main>
        <Footer />
        </div >
    );
});
