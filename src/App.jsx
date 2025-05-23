import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"; // Added Education

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-ds-primary-bg'>
        <div className='bg-cover bg-no-repeat bg-center'> {/* Removed bg-hero-pattern */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education /> {/* Added Education component */}
        <Tech />
        <Works />
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
