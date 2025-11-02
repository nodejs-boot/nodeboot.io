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
  TextField,
  InputAdornment,
  Grid,
  Tabs,
  Tab,
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
  Search,
  Star,
} from '@mui/icons-material';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '80px', // Account for fixed header
}));

const HeroSection = styled(Box)(({ theme }) => ({
  padding: '4rem 0',
  background: 'linear-gradient(135deg, rgba(7, 231, 112, 0.1) 0%, rgba(148, 242, 127, 0.05) 100%)',
  textAlign: 'center',
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

const StartersPage = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const categories = ['All', 'Web Frameworks', 'Database', 'Security', 'Microservices', 'DevOps'];

  const allStarters = [
    {
      name: 'Express Starter',
      description: 'Complete Express.js setup with Node-Boot annotations, perfect for traditional REST APIs.',
      features: ['Express Framework', 'Auto-Configuration', 'DI Container', 'OpenAPI Docs'],
      tags: ['Express', 'REST API', 'Traditional'],
      icon: <Code sx={{ color: '#07E770' }} />,
      githubUrl: 'https://github.com/nodejs-boot/node-boot/tree/main/samples/sample-express',
      downloads: '2.1k',
      category: 'Web Frameworks',
      stars: 245,
    },
    {
      name: 'Fastify Starter', 
      description: 'High-performance Fastify setup optimized for speed and low overhead applications.',
      features: ['Fastify Framework', 'High Performance', 'Schema Validation', 'Plugins'],
      tags: ['Fastify', 'Performance', 'Fast'],
      icon: <Speed sx={{ color: '#07E770' }} />,
      githubUrl: 'https://github.com/nodejs-boot/node-boot/tree/main/samples/sample-fastify',
      downloads: '1.8k',
      category: 'Web Frameworks',
      stars: 189,
    },
    {
      name: 'Koa Starter',
      description: 'Minimal Koa.js framework with async/await support and middleware composition.',
      features: ['Koa Framework', 'Async/Await', 'Middleware', 'Minimal'],
      tags: ['Koa', 'Minimal', 'Async'],
      icon: <Check sx={{ color: '#07E770' }} />,
      githubUrl: 'https://github.com/nodejs-boot/node-boot/tree/main/samples/sample-koa',
      downloads: '1.2k',
      category: 'Web Frameworks',
      stars: 156,
    },
    {
      name: 'MongoDB Integration',
      description: 'Express + MongoDB starter with repository pattern and data validation.',
      features: ['MongoDB', 'Repository Pattern', 'Data Validation', 'Aggregations'],
      tags: ['Database', 'MongoDB', 'NoSQL'],
      icon: <Storage sx={{ color: '#07E770' }} />,
      githubUrl: 'https://github.com/nodejs-boot/node-boot/tree/main/samples/sample-express-mongodb',
      downloads: '3.4k',
      category: 'Database',
      stars: 312,
    },
    {
      name: 'PostgreSQL Starter',
      description: 'TypeORM integration with PostgreSQL, including migrations and connection pooling.',
      features: ['PostgreSQL', 'TypeORM', 'Migrations', 'Connection Pool'],
      tags: ['Database', 'PostgreSQL', 'SQL'],
      icon: <Storage sx={{ color: '#07E770' }} />,
      githubUrl: '#',
      downloads: '2.7k',
      category: 'Database',
      stars: 278,
    },
    {
      name: 'OpenAPI + Swagger',
      description: 'Full OpenAPI specification with Swagger UI and automatic documentation generation.',
      features: ['OpenAPI 3.0', 'Swagger UI', 'Auto Docs', 'Type Safety'],
      tags: ['OpenAPI', 'Documentation', 'Swagger'],
      icon: <Api sx={{ color: '#07E770' }} />,
      githubUrl: '#',
      downloads: '1.9k',
      category: 'Web Frameworks',
      stars: 203,
    },
    {
      name: 'Security Starter',
      description: 'Complete security setup with authentication, authorization, and rate limiting.',
      features: ['JWT Auth', 'Rate Limiting', 'CORS', 'Security Headers'],
      tags: ['Security', 'Auth', 'JWT'],
      icon: <Security sx={{ color: '#07E770' }} />,
      githubUrl: '#',
      downloads: '2.7k',
      category: 'Security',
      stars: 234,
    },
    {
      name: 'Microservices Template',
      description: 'Complete microservices setup with service discovery, load balancing, and monitoring.',
      features: ['Service Discovery', 'Load Balancer', 'Health Checks', 'Monitoring'],
      tags: ['Microservices', 'Distributed', 'Scale'],
      icon: <Code sx={{ color: '#07E770' }} />,
      githubUrl: '#',
      downloads: '1.5k',
      category: 'Microservices',
      stars: 167,
    },
  ];

  const filteredStarters = allStarters.filter(starter => {
    const matchesSearch = starter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         starter.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === 0 || starter.category === categories[activeTab];
    return matchesSearch && matchesCategory;
  });

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#003720',
              mb: 2,
            }}
          >
            Node-Boot Starters
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: '#637381',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: 1.5,
            }}
          >
            Pre-configured project templates to jumpstart your Node.js development. 
            Choose your stack and get building in minutes, not hours.
          </Typography>

          {/* Search Bar */}
          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            <TextField
              fullWidth
              placeholder="Search starters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#637381' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '50px',
                  backgroundColor: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#07E770',
                  },
                },
              }}
            />
          </Box>
        </Container>
      </HeroSection>

      {/* Starters Grid */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Category Tabs */}
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                color: '#637381',
                '&.Mui-selected': {
                  color: '#07E770',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#07E770',
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Box>

        {/* Results Count */}
        <Typography
          variant="body1"
          sx={{
            color: '#637381',
            mb: 3,
            fontSize: '0.875rem',
          }}
        >
          {filteredStarters.length} starter{filteredStarters.length !== 1 ? 's' : ''} found
        </Typography>

        {/* Starters Grid */}
        <Grid container spacing={4}>
          {filteredStarters.map((starter, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <StarterCard>
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
                          mb: 0.5,
                        }}
                      >
                        {starter.name}
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center">
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
                          {starter.downloads}
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
                          <Star fontSize="small" />
                          {starter.stars}
                        </Typography>
                      </Stack>
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
            </Grid>
          ))}
        </Grid>

        {filteredStarters.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: '#637381', mb: 1 }}>
              No starters found
            </Typography>
            <Typography variant="body2" sx={{ color: '#637381' }}>
              Try adjusting your search or category filter
            </Typography>
          </Box>
        )}

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mt: 8, py: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: '#003720',
              mb: 2,
            }}
          >
            Can't find what you're looking for?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#637381',
              mb: 3,
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}
          >
            Create your own starter template or request a new one from the community.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Create Template
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: 'rgba(0, 0, 0, 0.2)',
                color: '#003720',
              }}
            >
              Request Starter
            </Button>
          </Stack>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default StartersPage;