import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Speed,
  Security,
  Cloud,
  Api,
  Storage,
  Build,
  Devices,
  Analytics,
  ArrowForward,
} from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '6rem 0',
  backgroundColor: '#ffffff',
}));

const CapabilityCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
    borderColor: '#07E770',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, rgba(7, 231, 112, 0.1) 0%, rgba(148, 242, 127, 0.15) 100%)',
  marginBottom: theme.spacing(3),
}));

const WhatNodeBootCanDoSection = () => {
  const capabilities = [
    {
      icon: <Api sx={{ color: '#07E770', fontSize: 36 }} />,
      title: 'REST APIs & Microservices',
      description: 'Build scalable REST APIs and microservices with automatic OpenAPI documentation, validation, and service discovery.',
      features: ['Auto-generated docs', 'Request validation', 'Circuit breakers', 'Load balancing'],
      link: '/starters?category=microservices',
    },
    {
      icon: <Storage sx={{ color: '#07E770', fontSize: 36 }} />,
      title: 'Data Integration',
      description: 'Connect to any database with built-in repository patterns, migrations, and connection pooling.',
      features: ['Multi-database support', 'Auto migrations', 'Connection pools', 'Query builders'],
      link: '/starters?category=database',
    },
    {
      icon: <Security sx={{ color: '#07E770', fontSize: 36 }} />,
      title: 'Enterprise Security',
      description: 'Implement authentication, authorization, and security best practices with minimal configuration.',
      features: ['JWT & OAuth2', 'RBAC', 'Rate limiting', 'CORS & CSRF'],
      link: '/starters?category=security',
    },
    {
      icon: <Cloud sx={{ color: '#07E770', fontSize: 36 }} />,
      title: 'Cloud-Native Apps',
      description: 'Deploy to any cloud platform with built-in health checks, metrics, and containerization.',
      features: ['Health endpoints', 'Prometheus metrics', 'Docker ready', 'K8s manifests'],
      link: '/starters?category=cloud',
    },
    {
      icon: <Speed sx={{ color: '#07E770', fontSize: 36 }} />,
      title: 'High-Performance Systems',
      description: 'Build lightning-fast applications with multiple server engines and performance optimizations.',
      features: ['Fastify support', 'Async/await', 'Connection pooling', 'Caching layers'],
      link: '/starters?category=performance',
    },
    {
      icon: <Devices sx={{ color: '#07E770', fontSize: 36 }} />,
      title: 'Real-time Applications',
      description: 'Create real-time apps with WebSockets, SSE, and message queues using familiar annotations.',
      features: ['WebSocket support', 'Event streaming', 'Message brokers', 'Push notifications'],
      link: '/starters?category=realtime',
    },
    {
      icon: <Analytics sx={{ color: '#07E770', fontSize: 36 }} />,
      title: 'Data Processing',
      description: 'Process and analyze data with built-in streaming, batch processing, and ETL capabilities.',
      features: ['Stream processing', 'Batch jobs', 'ETL pipelines', 'Data validation'],
      link: '/starters?category=data',
    },
    {
      icon: <Build sx={{ color: '#07E770', fontSize: 36 }} />,
      title: 'Developer Tools',
      description: 'Build CLI tools, automation scripts, and developer utilities with dependency injection.',
      features: ['CLI scaffolding', 'Task runners', 'Build tools', 'Code generators'],
      link: '/starters?category=tools',
    },
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.015em',
              color: '#003720',
              mb: 3,
            }}
          >
            What Node-Boot can do
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#637381',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            From microservices to monoliths, APIs to CLIs, Node-Boot provides the 
            foundation for any Node.js application with enterprise-grade capabilities.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {capabilities.map((capability, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <CapabilityCard>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <IconWrapper>
                    {capability.icon}
                  </IconWrapper>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#003720',
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {capability.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#637381',
                      lineHeight: 1.5,
                      mb: 3,
                      flex: 1,
                    }}
                  >
                    {capability.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Stack spacing={1}>
                      {capability.features.map((feature, featureIndex) => (
                        <Typography
                          key={featureIndex}
                          variant="caption"
                          sx={{
                            color: '#637381',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            '&:before': {
                              content: '"•"',
                              color: '#07E770',
                              fontWeight: 'bold',
                              marginRight: '8px',
                            },
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>

                  <Button
                    endIcon={<ArrowForward fontSize="small" />}
                    sx={{
                      color: '#07E770',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.875rem',
                      padding: 0,
                      justifyContent: 'flex-start',
                      minWidth: 'auto',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '& .MuiSvgIcon-root': {
                          transform: 'translateX(4px)',
                        },
                      },
                      '& .MuiSvgIcon-root': {
                        transition: 'transform 0.2s ease',
                      },
                    }}
                  >
                    Explore starters
                  </Button>
                </CardContent>
              </CapabilityCard>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: '#003720',
              mb: 2,
            }}
          >
            Ready to build something amazing?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#637381',
              mb: 4,
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}
          >
            Choose from our growing collection of starter templates or scaffold a custom project 
            with our interactive generator.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              href="/starters"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Browse Starters
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/scaffolder"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                color: '#003720',
              }}
            >
              Generate Project
            </Button>
          </Stack>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default WhatNodeBootCanDoSection;