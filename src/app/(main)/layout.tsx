import Navbar from '@/components/Navbar.tsx/navbar';
import React from 'react';
import Footer from "@/components/footer/footer";
const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <main className="relative bg-dark-100 min-h-screen text-typo-title overflow-hidden">
        
        <header className="mx-[full]">
            {/* navbar here */}
        <Navbar/>
        </header>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

            <div
                className="relative min-h-[calc(100vh_-_(24px_+_40px_+_24px)_-_(50px_+_50px))]">
                {children}
            </div>

        </div>
        <footer className="mx-[full]">
            <Footer/>
            {/* <Footer/> */}
        </footer>
    </main>
    );
};

export default Layout;