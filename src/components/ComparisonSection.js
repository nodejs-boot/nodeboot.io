import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Check, Close } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '4rem 0',
  backgroundColor: '#ffffff',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const ComparisonCard = styled(Card)(({ theme }) => ({
  height: '100%',
  border: '2px solid transparent',
  transition: 'all 0.2s ease',
  '&.highlighted': {
    border: '2px solid #07E770',
    backgroundColor: 'rgba(148, 242, 127, 0.05)',
  },
}));

const FeatureIcon = ({ supported }) => (
  supported ? 
    <Check sx={{ color: '#07E770', fontSize: 20 }} /> :
    <Close sx={{ color: '#f44336', fontSize: 20 }} />
);

const ComparisonSection = () => {
  const features = [
    { feature: 'Auto-Configuration', nodeboot: true, express: false, nestjs: true, nextjs: false },
    { feature: 'Dependency Injection', nodeboot: true, express: false, nestjs: true, nextjs: false },
    { feature: 'Multiple Server Support', nodeboot: true, express: false, nestjs: false, nextjs: false },
    { feature: 'Zero Boilerplate', nodeboot: true, express: false, nestjs: false, nextjs: true },
    { feature: 'Built-in OpenAPI', nodeboot: true, express: false, nestjs: true, nextjs: false },
    { feature: 'Production Ready', nodeboot: true, express: false, nestjs: true, nextjs: true },
    { feature: 'Starter Templates', nodeboot: true, express: false, nestjs: false, nextjs: true },
    { feature: 'No CLI Required', nodeboot: true, express: true, nestjs: false, nextjs: false },
    { feature: 'TypeScript First', nodeboot: true, express: false, nestjs: true, nextjs: true },
    { feature: 'Health Monitoring', nodeboot: true, express: false, nestjs: false, nextjs: false },
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
            Spring Boot Features, Node.js Power
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
            Node-Boot brings enterprise-grade features from the Java ecosystem to Node.js,
            providing the best of both worlds.
          </Typography>
        </Box>

        {/* Framework Comparison Cards */}
        <Grid container spacing={4} sx={{ mb: 6, justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} lg={3}>
            <ComparisonCard className="highlighted">
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(148, 242, 127, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                    <Box
                        component="img"
                        src="/nodeboot-logo.png"
                        alt="Express.js"
                        sx={{
                            width: { xs: 48, sm: 50 },
                            height: { xs: 48, sm: 50 },
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }}
                    />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#003720', mb: 1 }}>
                  Node-Boot
                </Typography>
                <Typography variant="body2" sx={{ color: '#637381', mb: 2 }}>
                  Opinionated, batteries-included framework with Spring Boot parity
                </Typography>
                <Chip label="Recommended" color="primary" size="small" />
              </CardContent>
            </ComparisonCard>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <ComparisonCard>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                    <Box
                        component="img"
                        src="/icons/Express.svg"
                        alt="Express.js"
                        sx={{
                            width: { xs: 48, sm: 50 },
                            height: { xs: 48, sm: 50 },
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }}
                    />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#003720', mb: 1 }}>
                  Express.js
                </Typography>
                <Typography variant="body2" sx={{ color: '#637381', mb: 2 }}>
                  Minimal framework, requires extensive setup and configuration
                </Typography>
                <Chip label="Manual Setup" variant="outlined" size="small" />
              </CardContent>
            </ComparisonCard>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <ComparisonCard>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                    <Box
                        component="img"
                        src="/icons/Nest.svg"
                        alt="NestJs"
                        sx={{
                            width: { xs: 48, sm: 50 },
                            height: { xs: 48, sm: 50 },
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }}
                    />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#003720', mb: 1 }}>
                  NestJS
                </Typography>
                <Typography variant="body2" sx={{ color: '#637381', mb: 2 }}>
                  Angular-inspired, powerful but complex with steep learning curve
                </Typography>
                <Chip label="Complex" variant="outlined" size="small" />
              </CardContent>
            </ComparisonCard>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <ComparisonCard>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                    <Box
                        component="img"
                        src="/icons/Next.svg"
                        alt="NextJs"
                        sx={{
                            width: { xs: 48, sm: 50 },
                            height: { xs: 48, sm: 50 },
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }}
                    />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#003720', mb: 1 }}>
                  Next.js
                </Typography>
                <Typography variant="body2" sx={{ color: '#637381', mb: 2 }}>
                  React-focused, great for frontend but limited backend capabilities
                </Typography>
                <Chip label="Frontend-First" variant="outlined" size="small" />
              </CardContent>
            </ComparisonCard>
          </Grid>
        </Grid>

        {/* Feature Comparison Table */}
        <TableContainer component={Paper} sx={{ borderRadius: '12px', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
                <TableCell sx={{ fontWeight: 600, color: '#003720' }}>Feature</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600, color: '#07E770' }}>Node-Boot</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600, color: '#637381' }}>Express.js</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600, color: '#637381' }}>NestJS</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600, color: '#637381' }}>Next.js</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((row, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(0, 0, 0, 0.01)' } }}>
                  <TableCell sx={{ fontWeight: 500, color: '#003720' }}>{row.feature}</TableCell>
                  <TableCell align="center">
                    <FeatureIcon supported={row.nodeboot} />
                  </TableCell>
                  <TableCell align="center">
                    <FeatureIcon supported={row.express} />
                  </TableCell>
                  <TableCell align="center">
                    <FeatureIcon supported={row.nestjs} />
                  </TableCell>
                  <TableCell align="center">
                    <FeatureIcon supported={row.nextjs} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography
            variant="body1"
            sx={{
              color: '#637381',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            "Node-Boot gives you the productivity of Spring Boot with the flexibility of Node.js. 
            It's the framework we wish existed when we started building enterprise applications with JavaScript."
          </Typography>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default ComparisonSection;
