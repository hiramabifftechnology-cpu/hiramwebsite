import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
  const { activeSection, scrollToSection } = useScrollSpy(sections);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header 
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main>
        <Hero onNavigate={scrollToSection} />
        <Services onNavigate={scrollToSection} />
        <About onNavigate={scrollToSection} />
        <Portfolio onNavigate={scrollToSection} />
        <Testimonials />
        <Contact onNavigate={scrollToSection} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;