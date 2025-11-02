import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  GitHub, 
  Download, 
  Storage, 
  Security, 
  Api, 
  Speed,
  Code,
  Check,
} from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '4rem 0',
  backgroundColor: 'rgba(0, 0, 0, 0.02)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const StarterCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
}));

const StartersSection = () => {
  const starters = [
    {
      name: 'Express Starter',
      description: 'Complete Express.js setup with Node-Boot annotations, perfect for traditional REST APIs.',
      features: ['Express Framework', 'Auto-Configuration', 'DI Container', 'OpenAPI Docs'],
      tags: ['Express', 'REST API', 'Traditional'],
      icon: <Code sx={{ color: '#07E770' }} />,
      githubUrl: 'https://github.com/nodejs-boot/node-boot/tree/main/samples/sample-express',
      downloads: '2.1k',
    },
    {
      name: 'Fastify Starter', 
      description: 'High-performance Fastify setup optimized for speed and low overhead applications.',
      features: ['Fastify Framework', 'High Performance', 'Schema Validation', 'Plugins'],
      tags: ['Fastify', 'Performance', 'Fast'],
      icon: <Speed sx={{ color: '#07E770' }} />,
      githubUrl: 'https://github.com/nodejs-boot/node-boot/tree/main/samples/sample-fastify',
      downloads: '1.8k',
    },
    {
      name: 'Koa Starter',
      description: 'Minimal Koa.js framework with async/await support and middleware composition.',
      features: ['Koa Framework', 'Async/Await', 'Middleware', 'Minimal'],
      tags: ['Koa', 'Minimal', 'Async'],
      icon: <Check sx={{ color: '#07E770' }} />,
      githubUrl: 'https://github.com/nodejs-boot/node-boot/tree/main/samples/sample-koa',
      downloads: '1.2k',
    },
    {
      name: 'MongoDB Integration',
      description: 'Express + MongoDB starter with repository pattern and data validation.',
      features: ['MongoDB', 'Repository Pattern', 'Data Validation', 'Aggregations'],
      tags: ['Database', 'MongoDB', 'NoSQL'],
      icon: <Storage sx={{ color: '#07E770' }} />,
      githubUrl: 'https://github.com/nodejs-boot/node-boot/tree/main/samples/sample-express-mongodb',
      downloads: '3.4k',
    },
    {
      name: 'OpenAPI + Swagger',
      description: 'Full OpenAPI specification with Swagger UI and automatic documentation generation.',
      features: ['OpenAPI 3.0', 'Swagger UI', 'Auto Docs', 'Type Safety'],
      tags: ['OpenAPI', 'Documentation', 'Swagger'],
      icon: <Api sx={{ color: '#07E770' }} />,
      githubUrl: '#',
      downloads: '1.9k',
    },
    {
      name: 'Security Starter',
      description: 'Complete security setup with authentication, authorization, and rate limiting.',
      features: ['JWT Auth', 'Rate Limiting', 'CORS', 'Security Headers'],
      tags: ['Security', 'Auth', 'JWT'],
      icon: <Security sx={{ color: '#07E770' }} />,
      githubUrl: '#',
      downloads: '2.7k',
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
            Starter Marketplace
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
            Pre-configured templates to jumpstart your Node.js projects. 
            Pick your stack and get building immediately.
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
          {starters.map((starter, index) => (
            <StarterCard key={index} sx={{ height: '100%', width: '100%' }}>
              <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '8px',
                      backgroundColor: 'rgba(148, 242, 127, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {starter.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#003720',
                        lineHeight: 1.2,
                      }}
                    >
                      {starter.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#637381',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <Download fontSize="small" />
                      {starter.downloads} downloads
                    </Typography>
                  </Box>
                </Stack>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: '#637381',
                    lineHeight: 1.5,
                    mb: 2,
                  }}
                >
                  {starter.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#003720',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    Features
                  </Typography>
                  <Stack spacing={0.5}>
                    {starter.features.map((feature, featureIndex) => (
                      <Typography
                        key={featureIndex}
                        variant="caption"
                        sx={{
                          color: '#637381',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        <Check fontSize="small" sx={{ color: '#07E770' }} />
                        {feature}
                      </Typography>
                    ))}
                  </Stack>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {starter.tags.map((tag, tagIndex) => (
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
                </Box>

                <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      flex: 1,
                      background: 'linear-gradient(to bottom right, #07E770, #06cb63)',
                      color: '#000000',
                      fontWeight: 600,
                    }}
                  >
                    Use Starter
                  </Button>
                  <IconButton
                    size="small"
                    sx={{
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      },
                    }}
                    href={starter.githubUrl}
                    target="_blank"
                  >
                    <GitHub fontSize="small" />
                  </IconButton>
                </Stack>
              </CardContent>
            </StarterCard>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHub />}
            sx={{
              borderColor: 'rgba(0, 0, 0, 0.2)',
              color: '#003720',
              px: 4,
              py: 1.5,
            }}
            href="https://github.com/nodejs-boot/node-boot"
            target="_blank"
          >
            View All Starters
          </Button>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default StartersSection;