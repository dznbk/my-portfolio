import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Talks } from './components/sections/Talks';
// import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Talks />
      {/* <Projects /> */}
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
