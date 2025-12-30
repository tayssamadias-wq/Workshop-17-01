
import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import About from './components/About';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <PainPoints />
      <WhatYouWillLearn />
      <About />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
