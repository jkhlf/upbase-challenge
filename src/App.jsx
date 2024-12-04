import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Property from './pages/Property';
import PropertyDetails from './pages/PropertyDetails';
import NotFound from './pages/not-found';

function App() {
  return (
    <Router>
      <main className="bg-white max-w-4xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Property />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;