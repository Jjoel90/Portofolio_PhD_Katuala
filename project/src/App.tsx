import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Publications } from './components/Publications';
import { Expertise } from './components/Expertise';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Publications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
  
  function Home() {
  return (
    <div>
      <Publications />
    </div>
  );
}
}

export default Home;