import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Header at Top */}
            <Header />

            {/* Main Content Area */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer at Bottom */}
            <Footer />
        </div>
    );
};

export default MainLayout;
