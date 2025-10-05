import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Alert,
  LinearProgress,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Code,
  Storage,
  Security,
  Cloud,
  Speed,
  Api,
  Build,
  CheckCircle,
  Download,
  GitHub,
  Refresh,
} from '@mui/icons-material';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '80px',
  backgroundColor: '#fafafa',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  padding: '4rem 0',
  background: 'linear-gradient(135deg, rgba(7, 231, 112, 0.1) 0%, rgba(148, 242, 127, 0.05) 100%)',
  textAlign: 'center',
}));

const ConfigCard = styled(Card)(({ theme }) => ({
  height: '100%',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  '&:hover': {
    borderColor: '#07E770',
    boxShadow: '0 4px 12px rgba(7, 231, 112, 0.15)',
  },
}));

const TemplateCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: '2px solid transparent',
  '&:hover': {
    borderColor: '#07E770',
    transform: 'translateY(-2px)',
  },
  '&.selected': {
    borderColor: '#07E770',
    backgroundColor: 'rgba(148, 242, 127, 0.05)',
  },
}));

const ScaffolderPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState('express-api');
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  
  const [projectConfig, setProjectConfig] = useState({
    projectName: '',
    description: '',
    packageName: '',
    version: '1.0.0',
    framework: 'express',
    database: 'none',
    authentication: false,
    testing: true,
    docker: true,
    cicd: false,
  });

  const steps = ['Choose Template', 'Configure Project', 'Generate'];

  const templates = [
    {
      id: 'express-api',
      name: 'Express REST API',
      description: 'Full-featured REST API with Express.js, middleware, and routing',
      icon: <Api sx={{ color: '#07E770', fontSize: 40 }} />,
      tags: ['Express', 'REST', 'Middleware'],
      features: ['Express.js framework', 'REST routing', 'Middleware support', 'Error handling'],
    },
    {
      id: 'fastify-microservice',
      name: 'Fastify Microservice',
      description: 'High-performance microservice template with Fastify',
      icon: <Speed sx={{ color: '#07E770', fontSize: 40 }} />,
      tags: ['Fastify', 'Microservice', 'Performance'],
      features: ['Fastify framework', 'Schema validation', 'Plugin system', 'Health checks'],
    },
    {
      id: 'graphql-server',
      name: 'GraphQL Server',
      description: 'Modern GraphQL server with Apollo and type generation',
      icon: <Code sx={{ color: '#07E770', fontSize: 40 }} />,
      tags: ['GraphQL', 'Apollo', 'TypeScript'],
      features: ['Apollo Server', 'Type definitions', 'Resolvers', 'Playground'],
    },
    {
      id: 'fullstack-app',
      name: 'Full-Stack Application',
      description: 'Complete web application with frontend and backend',
      icon: <Build sx={{ color: '#07E770', fontSize: 40 }} />,
      tags: ['Full-Stack', 'React', 'Database'],
      features: ['React frontend', 'API backend', 'Database integration', 'Authentication'],
    },
    {
      id: 'serverless-function',
      name: 'Serverless Functions',
      description: 'AWS Lambda functions with Node-Boot decorators',
      icon: <Cloud sx={{ color: '#07E770', fontSize: 40 }} />,
      tags: ['Serverless', 'AWS', 'Lambda'],
      features: ['Lambda functions', 'API Gateway', 'DynamoDB', 'CloudFormation'],
    },
    {
      id: 'cli-tool',
      name: 'CLI Application',
      description: 'Command-line tool with Node-Boot dependency injection',
      icon: <Code sx={{ color: '#07E770', fontSize: 40 }} />,
      tags: ['CLI', 'Tools', 'Commands'],
      features: ['Command parsing', 'Interactive prompts', 'File operations', 'Configuration'],
    },
  ];

  const handleNext = () => {
    if (activeStep === 2) {
      handleGenerate();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleGenerate = async () => {
    setGenerating(true);
    // Simulate project generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setGenerating(false);
    setGenerated(true);
  };

  const handleDownload = () => {
    // Simulate download
    const element = document.createElement('a');
    element.href = '#';
    element.download = `${projectConfig.projectName || 'node-boot-project'}.zip`;
    element.click();
  };

  const selectedTemplateData = templates.find(t => t.id === selectedTemplate);

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
            Node-Boot Scaffolder
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: '#637381',
              maxWidth: '800px',
              margin: '0 auto 2rem',
              lineHeight: 1.5,
            }}
          >
            Generate production-ready Node.js projects in seconds. Choose your stack, 
            configure your preferences, and download a fully-scaffolded application.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#637381',
              fontStyle: 'italic',
            }}
          >
            Powered by Backstage Software Templates
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Stepper */}
        <Box sx={{ mb: 6 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Step Content */}
        <Card sx={{ p: 4, mb: 4 }}>
          {activeStep === 0 && (
            <Box>
              <Typography variant="h4" sx={{ mb: 3, color: '#003720' }}>
                Choose a Project Template
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#637381' }}>
                Select the template that best fits your project needs. Each template comes with 
                pre-configured dependencies, folder structure, and best practices.
              </Typography>
              
              <Grid container spacing={3}>
                {templates.map((template) => (
                  <Grid item xs={12} md={6} lg={4} key={template.id}>
                    <TemplateCard
                      className={selectedTemplate === template.id ? 'selected' : ''}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {template.icon}
                          <Typography variant="h6" sx={{ ml: 2, fontWeight: 600, color: '#003720' }}>
                            {template.name}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 2, color: '#637381' }}>
                          {template.description}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                          {template.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(148, 242, 127, 0.1)',
                                color: '#0d7916',
                                fontSize: '0.75rem',
                              }}
                            />
                          ))}
                        </Stack>
                        <Box>
                          {template.features.map((feature) => (
                            <Typography
                              key={feature}
                              variant="caption"
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#637381',
                                mb: 0.5,
                              }}
                            >
                              <CheckCircle sx={{ fontSize: 16, color: '#07E770', mr: 1 }} />
                              {feature}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                    </TemplateCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <Typography variant="h4" sx={{ mb: 3, color: '#003720' }}>
                Configure Your Project
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#637381' }}>
                Customize your project settings. These will be used to generate your project structure 
                and configuration files.
              </Typography>

              <Grid container spacing={3}>
                {/* Basic Info */}
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mb: 2, color: '#003720' }}>
                    Project Information
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    value={projectConfig.projectName}
                    onChange={(e) => setProjectConfig({...projectConfig, projectName: e.target.value})}
                    placeholder="my-node-boot-app"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Package Name"
                    value={projectConfig.packageName}
                    onChange={(e) => setProjectConfig({...projectConfig, packageName: e.target.value})}
                    placeholder="com.example.myapp"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    value={projectConfig.description}
                    onChange={(e) => setProjectConfig({...projectConfig, description: e.target.value})}
                    placeholder="A brief description of your project"
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Version"
                    value={projectConfig.version}
                    onChange={(e) => setProjectConfig({...projectConfig, version: e.target.value})}
                    placeholder="1.0.0"
                  />
                </Grid>

                {/* Technical Configuration */}
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: '#003720' }}>
                    Technical Stack
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Database</InputLabel>
                    <Select
                      value={projectConfig.database}
                      label="Database"
                      onChange={(e) => setProjectConfig({...projectConfig, database: e.target.value})}
                    >
                      <MenuItem value="none">None</MenuItem>
                      <MenuItem value="mongodb">MongoDB</MenuItem>
                      <MenuItem value="postgresql">PostgreSQL</MenuItem>
                      <MenuItem value="mysql">MySQL</MenuItem>
                      <MenuItem value="redis">Redis</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Features */}
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: '#003720' }}>
                    Additional Features
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={projectConfig.authentication}
                        onChange={(e) => setProjectConfig({...projectConfig, authentication: e.target.checked})}
                      />
                    }
                    label="Authentication & Authorization"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={projectConfig.testing}
                        onChange={(e) => setProjectConfig({...projectConfig, testing: e.target.checked})}
                      />
                    }
                    label="Testing Framework (Jest)"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={projectConfig.docker}
                        onChange={(e) => setProjectConfig({...projectConfig, docker: e.target.checked})}
                      />
                    }
                    label="Docker Configuration"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={projectConfig.cicd}
                        onChange={(e) => setProjectConfig({...projectConfig, cicd: e.target.checked})}
                      />
                    }
                    label="CI/CD Pipeline (GitHub Actions)"
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {activeStep === 2 && (
            <Box sx={{ textAlign: 'center' }}>
              {!generated ? (
                <>
                  <Typography variant="h4" sx={{ mb: 3, color: '#003720' }}>
                    Ready to Generate
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, color: '#637381' }}>
                    Review your configuration and generate your Node-Boot project.
                  </Typography>

                  {/* Configuration Summary */}
                  <Card sx={{ p: 3, mb: 4, textAlign: 'left', backgroundColor: '#f5f5f5' }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#003720' }}>
                      Project Summary
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <strong>Template:</strong> {selectedTemplateData?.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <strong>Project Name:</strong> {projectConfig.projectName || 'Not specified'}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <strong>Database:</strong> {projectConfig.database === 'none' ? 'None' : projectConfig.database}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <strong>Authentication:</strong> {projectConfig.authentication ? 'Yes' : 'No'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>

                  {generating && (
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" sx={{ mb: 2, color: '#003720' }}>
                        Generating Your Project...
                      </Typography>
                      <LinearProgress sx={{ mb: 2, borderRadius: 1 }} />
                      <Typography variant="body2" sx={{ color: '#637381' }}>
                        Setting up project structure, installing dependencies, and configuring templates...
                      </Typography>
                    </Box>
                  )}
                </>
              ) : (
                <Box>
                  <CheckCircle sx={{ fontSize: 80, color: '#07E770', mb: 2 }} />
                  <Typography variant="h4" sx={{ mb: 2, color: '#003720' }}>
                    Project Generated Successfully!
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, color: '#637381' }}>
                    Your Node-Boot project has been generated and is ready for download.
                  </Typography>
                  
                  <Alert severity="success" sx={{ mb: 4, textAlign: 'left' }}>
                    <Typography variant="body2">
                      <strong>What's included:</strong> Complete project structure, package.json with dependencies, 
                      Docker configuration, testing setup, and sample code following Node-Boot best practices.
                    </Typography>
                  </Alert>

                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Download />}
                      onClick={handleDownload}
                      sx={{ px: 4, py: 1.5 }}
                    >
                      Download Project
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<GitHub />}
                      sx={{ px: 4, py: 1.5 }}
                    >
                      View on GitHub
                    </Button>
                  </Stack>
                </Box>
              )}
            </Box>
          )}
        </Card>

        {/* Navigation Buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ px: 4 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={generating || generated}
            sx={{ px: 4 }}
          >
            {activeStep === 2 ? (generating ? 'Generating...' : 'Generate Project') : 'Next'}
          </Button>
        </Stack>

        {/* Reset Button */}
        {generated && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              startIcon={<Refresh />}
              onClick={() => {
                setActiveStep(0);
                setGenerated(false);
                setGenerating(false);
                setProjectConfig({
                  projectName: '',
                  description: '',
                  packageName: '',
                  version: '1.0.0',
                  framework: 'express',
                  database: 'none',
                  authentication: false,
                  testing: true,
                  docker: true,
                  cicd: false,
                });
              }}
            >
              Create Another Project
            </Button>
          </Box>
        )}
      </Container>
    </PageContainer>
  );
};

export default ScaffolderPage;