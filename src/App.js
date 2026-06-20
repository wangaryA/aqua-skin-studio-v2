import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SiteLogo from './components/SiteLogo';
import Footer from './components/Footer';
import Home from './pages/Home';
import CookieConsent from './components/CookieConsent';

const Overview        = lazy(() => import('./pages/Overview'));
const Products        = lazy(() => import('./pages/Products'));
const TreatmentsPage  = lazy(() => import('./pages/TreatmentsPage'));
const Enhancements    = lazy(() => import('./pages/Enhancements'));
const Appointments    = lazy(() => import('./pages/Appointments'));
const Contact         = lazy(() => import('./pages/Contact'));
const GiftCertificate = lazy(() => import('./pages/GiftCertificate'));
const Providers       = lazy(() => import('./pages/Providers'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SiteLogo />
        <CookieConsent />
        <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/products" element={<Products />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/enhancements" element={<Enhancements />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gift-certificate" element={<GiftCertificate />} />
            <Route path="/providers" element={<Providers />} />
          </Routes>
        </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
