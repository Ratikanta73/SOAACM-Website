import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Faculty from './components/Faculty';
import Events from './components/Events';
import Impact from './components/Impact';
import Team from './components/Team';
import Benefits from './components/Benefits';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';

// Home page with all sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Faculty />
      <Events />
      <Impact />
      <Team />
      <Benefits />
      <JoinCTA />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
