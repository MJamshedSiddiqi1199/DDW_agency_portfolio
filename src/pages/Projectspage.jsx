import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Allprojects from '../components/Allprojects';

const ProjectsPage = () => {
    return (
        <main className="relative w-full bg-bg-base text-text-main">
            {/* Top Navigation */}
            <Navbar />

            {/* Inner Page Header */}
            <PageHeader
                title="Verified Results"
                breadcrumb="Portfolio"
            />

            {/* Main Projects Grid */}
            <Allprojects />

            {/* Bottom Footer */}
            <Footer />
        </main>
    );
};

export default ProjectsPage;