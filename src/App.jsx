import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/Projectspage';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';

// Wrapper component to handle route-based loading
const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPath) {
      setTimeout(() => {
        setPrevPath(location.pathname);
        setLoading(true);
      }, 0);
    }
  }, [location.pathname, prevPath]);

  useEffect(() => {
    if (loading) {
      // Set a timeout to hide the loading screen
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <SmoothScroll>
      <div className="App">
        <LoadingScreen isLoading={loading} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </SmoothScroll>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
