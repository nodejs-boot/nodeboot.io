import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  Tabs,
  Tab,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, PlayArrow } from '@mui/icons-material';
import CodeBlock from './CodeBlock';

const HeroContainer = styled(Box)(({ theme }) => ({
  background: `
    radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), 
    radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%), 
    radial-gradient(at 31% 91%, hsla(30,100%,50%,0.17) 0px, transparent 50%)
  `,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  textAlign: 'center',
  padding: '4rem 1.5rem 3rem',
  paddingTop: '8rem',
}));

const HeroSection = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const codeExamples = [
    {
      label: 'Express',
      code: `@EnableDI(Container)
@EnableOpenApi()
@EnableSwaggerUI()
@EnableActuator()
@EnableRepositories()
@NodeBootApplication()
export class FactsServiceApp implements NodeBootApp {

    start(port?: number): Promise<NodeBootAppView> {
        return NodeBoot.run(ExpressServer, port);
    }
}`
    },
    {
      label: 'Fastify',
      code: `@EnableDI(Container)
@EnableOpenApi()
@EnableSwaggerUI()
@EnableActuator()
@EnableRepositories()
@NodeBootApplication()
export class FactsServiceApp implements NodeBootApp {

    start(port?: number): Promise<NodeBootAppView> {
        return NodeBoot.run(FastifyServer, port);
    }
}`
    },
    {
      label: 'Koa',
      code: `@EnableDI(Container)
@EnableOpenApi()
@EnableSwaggerUI()
@EnableActuator()
@EnableRepositories()
@NodeBootApplication()
export class FactsServiceApp implements NodeBootApp {

    start(port?: number): Promise<NodeBootAppView> {
        return NodeBoot.run(KoaServer, port);
    }
}`
    }
  ];

  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
          <Stack spacing={3} alignItems="center">
            <Chip 
              label="🚀 Production-Ready Framework" 
              color="primary" 
              variant="outlined"
              sx={{ 
                fontSize: '0.875rem',
                fontWeight: 500,
                backgroundColor: 'rgba(148, 242, 127, 0.1)',
                borderColor: '#07E770',
                color: '#0d7916'
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                color: '#003720',
                marginBottom: 2,
              }}
            >
              An Opinionated Node.js Framework
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                lineHeight: 1.5,
                color: '#637381',
                marginBottom: 3,
                maxWidth: '600px',
              }}
            >
              Bridges Gaps Across the Expansive Node.js Ecosystem and Abolish the CLI Tyranny.
              Say goodbye to tedious setup and hello to seamless, lightning-fast development.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ marginBottom: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  background: 'linear-gradient(to bottom right, #07E770, #06cb63)',
                  color: '#000000',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                }}
              >
                Get Started
              </Button>
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
              >
                View on GitHub
              </Button>
            </Stack>

            <Box sx={{ width: '100%', maxWidth: '600px' }}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                centered
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#07E770',
                  },
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 500,
                    color: '#637381',
                    '&.Mui-selected': {
                      color: '#07E770',
                    },
                  },
                }}
              >
                {codeExamples.map((example, index) => (
                  <Tab key={index} label={example.label} />
                ))}
              </Tabs>

              <Box sx={{ mt: 3, maxWidth: '600px', mx: 'auto' }}>
                <CodeBlock language="javascript">
                  {codeExamples[selectedTab].code}
                </CodeBlock>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;