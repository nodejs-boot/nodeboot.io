import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedStepper from './AnimatedStepper';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '4rem 0',
  backgroundColor: '#f8f9fa',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const QuickStartSection = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.015em',
              color: '#003720',
              mb: 2,
            }}
          >
            Get Started in Minutes
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.5,
              color: '#637381',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            No CLI tyranny, no complex setup. Just clean, production-ready code that works out of the box.
          </Typography>
        </Box>

        <AnimatedStepper />
      </Container>
    </SectionContainer>
  );
};

export default QuickStartSection;