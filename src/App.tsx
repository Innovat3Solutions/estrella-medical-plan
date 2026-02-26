import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutPlan } from './components/AboutPlan';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Locations } from './components/Locations';
import { EnrollmentForm } from './components/EnrollmentForm';
import { Footer } from './components/Footer';
import { ThankYou } from './pages/ThankYou';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutPlan />
        <Services />
        <Locations />
        <EnrollmentForm />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
