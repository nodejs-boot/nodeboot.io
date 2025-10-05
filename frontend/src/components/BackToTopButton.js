import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { styled } from '@mui/material/styles';
import { KeyboardArrowUp } from '@mui/icons-material';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: '#07E770',
  color: '#000000',
  zIndex: 1000,
  boxShadow: '0 4px 12px rgba(7, 231, 112, 0.3)',
  '&:hover': {
    backgroundColor: '#06cb63',
    boxShadow: '0 6px 16px rgba(7, 231, 112, 0.4)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    width: 48,
    height: 48,
  },
}));

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Zoom in={isVisible} timeout={300}>
      <StyledFab
        onClick={scrollToTop}
        aria-label="back to top"
        size="medium"
      >
        <KeyboardArrowUp />
      </StyledFab>
    </Zoom>
  );
};

export default BackToTopButton;