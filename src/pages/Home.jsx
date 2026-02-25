import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Collaborators from '../components/Collaborators';
import Solutions from '../components/SolutionsData';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonial';
import Collaborate from '../components/Collaborate';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import HomePortfolio from '../components/Homepage_projects';

const Home = () => {
    return (
        <main className="relative w-full">
            <Navbar />
            <Hero />
            <Stats />
            <Collaborators />
            <Solutions />
            <AboutSection />
            <HomePortfolio />
            <Testimonials />
            <Collaborate />
            <Footer />
        </main>
    );
};

export default Home;