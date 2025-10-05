import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Speed,
  Settings,
  Extension,
  Code,
  Security,
  AutoAwesome,
  Build,
  IntegrationInstructions,
} from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '4rem 0',
  backgroundColor: '#f8f9fa',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(148, 242, 127, 0.1)',
  marginBottom: theme.spacing(2),
}));

const FeaturesSection = () => {
  const features = [
    {
      icon: <AutoAwesome sx={{ color: '#07E770', fontSize: 28 }} />,
      title: 'No Boilerplate',
      description: 'Jump straight into building features without writing tedious setup code. Node-Boot handles all the configuration for you.',
      tags: ['Fast Setup', 'Ready-to-go']
    },
    {
      icon: <Settings sx={{ color: '#07E770', fontSize: 28 }} />,
      title: 'Auto-Configuration',
      description: 'Intelligent configuration that adapts to your project needs. Zero configuration files, maximum productivity.',
      tags: ['Smart Config', 'Zero Setup']
    },
    {
      icon: <Extension sx={{ color: '#07E770', fontSize: 28 }} />,
      title: 'Dependency Injection',
      description: 'Built-in DI container inspired by Spring Boot. Write testable, maintainable code with ease.',
      tags: ['DI Container', 'Testable']
    },
    {
      icon: <Build sx={{ color: '#07E770', fontSize: 28 }} />,
      title: 'Starter Packages',
      description: 'Pre-configured packages for common use cases. Database, validation, security - just add annotations.',
      tags: ['Quick Start', 'Batteries Included']
    },
    {
      icon: <Speed sx={{ color: '#07E770', fontSize: 28 }} />,
      title: 'Multiple Server Support',
      description: 'Switch between Express, Fastify, and Koa with zero code changes. Pick the best tool for your needs.',
      tags: ['Flexible', 'Performance']
    },
    {
      icon: <IntegrationInstructions sx={{ color: '#07E770', fontSize: 28 }} />,
      title: 'Unified Ecosystem',
      description: 'Connects the fragmented Node.js ecosystem into a cohesive, standardized development experience.',
      tags: ['Standardized', 'Unified']
    },
    {
      icon: <Security sx={{ color: '#07E770', fontSize: 28 }} />,
      title: 'Production Ready',
      description: 'Built-in monitoring, health checks, and security features. Deploy with confidence from day one.',
      tags: ['Secure', 'Monitored']
    },
    {
      icon: <Code sx={{ color: '#07E770', fontSize: 28 }} />,
      title: 'Spring Boot Parity',
      description: 'Familiar annotations and patterns for Java developers. Brings enterprise-grade features to Node.js.',
      tags: ['Enterprise', 'Familiar']
    },
  ];

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
            Why Choose Node-Boot?
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
            Revolutionary features that transform how you build Node.js applications.
            From prototype to production in minutes, not hours.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            },
            gap: 4,
            width: '100%',
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} sx={{ height: '100%', width: '100%' }}>
              <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <IconWrapper>
                  {feature.icon}
                </IconWrapper>
                
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#003720',
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: '#637381',
                    lineHeight: 1.5,
                    mb: 2,
                    flex: 1,
                  }}
                >
                  {feature.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {feature.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(148, 242, 127, 0.1)',
                        color: '#0d7916',
                        fontSize: '0.75rem',
                        height: 24,
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </FeatureCard>
          ))}
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default FeaturesSection;