// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, SUPPORTED_LANGUAGES } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import TourDetail from './pages/TourDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import DayExcursions from './components/DayExcursions';
import FloatingActionWidget from './components/FloatingActionWidget';
import ExperienceDetail from './pages/ExperienceDetail';
import BookingInquiry from './pages/BookingInquiry'; // 1. Import your BookingInquiry page

export default function App() {
  // Core pages of your application
  const appPages = [
    { path: '', element: <Home /> },
    { path: 'destinations', element: <Destinations /> },
    { path: 'tour/:id', element: <TourDetail /> },
    { path: 'experience/:slug', element: <ExperienceDetail /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Contact /> },
    { path: 'excursions', element: <DayExcursions /> },
    { path: 'booking', element: <BookingInquiry /> }, // 2. Add booking route here
  ];

  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          {/* Automatically generate routes for every language prefix (e.g., /es/destinations, /fr/booking, etc.) */}
          {SUPPORTED_LANGUAGES.map((lang) => 
            appPages.map((page) => {
              const routePath = lang.path === '' 
                ? `/${page.path}` 
                : `/${lang.path}/${page.path}`.replace(/\/$/, ''); // handles root cleanups
              
              return (
                <Route 
                  key={routePath} 
                  path={routePath} 
                  element={page.element} 
                />
              );
            })
          )}
        </Routes>
        
        <Footer />
        <FloatingActionWidget />
      </LanguageProvider>
    </Router>
  );
}