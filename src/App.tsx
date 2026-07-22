import { ThemeProvider } from './context/ThemeContext';
import {
  Header,
  Hero,
  About,
  Experience,
  Education,
  Projects,
  Skills,
  DSA,
  Footer,
} from './components';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <DSA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
