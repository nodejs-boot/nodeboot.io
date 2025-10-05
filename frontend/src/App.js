import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from './theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import QuickStartSection from './components/QuickStartSection';
import LevelUpSection from './components/LevelUpSection';
import ComparisonSection from './components/ComparisonSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import DocsPage from './pages/DocsPage';
import StartersPage from './pages/StartersPage';
import ScaffolderPage from './pages/ScaffolderPage';
import BlogPage from './pages/BlogPage';
import "./App.css";

const Home = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <QuickStartSection />
      <ComparisonSection />
      <FeaturesSection />
      <LevelUpSection />
      <Footer />
    </Box>
  );
};

const Docs = () => {
  return (
    <Box>
      <Header />
      <DocsPage />
    </Box>
  );
};

const Starters = () => {
  return (
    <Box>
      <Header />
      <StartersPage />
      <Footer />
    </Box>
  );
};

const Scaffolder = () => {
  return (
    <Box>
      <Header />
      <ScaffolderPage />
      <Footer />
    </Box>
  );
};

const Blog = () => {
  return (
    <Box>
      <Header />
      <BlogPage />
      <Footer />
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/starters" element={<Starters />} />
            <Route path="/scaffolder" element={<Scaffolder />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <BackToTopButton />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;