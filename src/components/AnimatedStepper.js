import React, {useCallback, useEffect, useState} from 'react';
import {Box, Button, Step, StepContent, StepLabel, Stepper, Tab, Tabs, Typography,} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Pause, PlayArrow} from '@mui/icons-material';
import CodeBlock from './CodeBlock';

const StyledStepper = styled(Stepper)(({theme}) => ({
    '& .MuiStepLabel-root': {
        padding: 0,
    },
    '& .MuiStepLabel-iconContainer': {
        paddingRight: theme.spacing(2),
    },
    '& .MuiStepIcon-root': {
        color: 'rgba(0, 0, 0, 0.38)',
        '&.Mui-active': {
            color: '#07E770',
        },
        '&.Mui-completed': {
            color: '#07E770',
        },
    },
    '& .MuiStepConnector-line': {
        borderColor: 'rgba(0, 0, 0, 0.12)',
    },
    '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
        borderColor: '#07E770',
    },
    '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
        borderColor: '#07E770',
    },
}));

const ControlBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
}));

const AnimatedStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedFramework, setSelectedFramework] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const steps = [
        {
            label: 'Install Dependencies',
            description: 'Install Node-Boot core dependencies and your preferred server layer',
            content: {
                npm: `# Install Node-Boot core dependencies
npm install @node-boot/core @node-boot/config @node-boot/context reflect-metadata winston
        
# Install Server Layer: Fastify
npm install @node-boot/fastify-server fastify`,
                pnpm: `# Install Node-Boot core dependencies
pnpm add @node-boot/core @node-boot/config @node-boot/context reflect-metadata winston
        
# Install Server Layer: Fastify  
pnpm add @node-boot/fastify-server fastify`,
                yarn: `# Install Node-Boot core dependencies
yarn add @node-boot/core @node-boot/config @node-boot/context reflect-metadata winston
      
# Install Server Layer: Fastify
yarn add @node-boot/fastify-server fastify`,
            }
        },
        {
            label: 'Create Application',
            description: 'Setup your Node-Boot application with annotations and server configuration',
            hasFrameworkTabs: true,
            content: {
                fastify: `import "reflect-metadata";
import {NodeBoot, NodeBootApp, NodeBootApplication, NodeBootAppView} from "@node-boot/core";
import {FastifyServer} from "@node-boot/fastify-server";
     
@NodeBootApplication()
export class SampleApp implements NodeBootApp {
        
    start(port?: number): Promise<NodeBootAppView> {
        return NodeBoot.run(FastifyServer, port);
    }
}`,
                express: `import "reflect-metadata";
import {NodeBoot, NodeBootApp, NodeBootApplication, NodeBootAppView} from "@node-boot/core";
import {ExpressServer} from "@node-boot/express-server";
      
@NodeBootApplication()
export class SampleApp implements NodeBootApp {
       
    start(port?: number): Promise<NodeBootAppView> {
        return NodeBoot.run(ExpressServer, port);
    }
}`,
                koa: `import "reflect-metadata";
import {NodeBoot, NodeBootApp, NodeBootApplication, NodeBootAppView} from "@node-boot/core";
import {KoaServer} from "@node-boot/koa-server";
       
@NodeBootApplication()
export class SampleApp implements NodeBootApp {
       
    start(port?: number): Promise<NodeBootAppView> {
        return NodeBoot.run(KoaServer, port);
    }
}`,
                'node:http': `import "reflect-metadata";
import {NodeBoot, NodeBootApp, NodeBootApplication, NodeBootAppView} from "@node-boot/core";
import {HttpServer} from "@node-boot/http-server";
         
@NodeBootApplication()
export class SampleApp implements NodeBootApp {
                       
    start(port?: number): Promise<NodeBootAppView> {
        return NodeBoot.run(HttpServer, port);
    }
}`
            }
        },
        {
            label: 'Add App Configuration',
            description: 'Configure your application settings for auto-configuration and environment setup',
            content: `# App configurations
app:
    name: "sample-service"
    platform: "node-boot"
    environment: "development"
    defaultErrorHandler: false
    port: 30000

api:
    routePrefix: "/v1"
    nullResultCode: 200
    undefinedResultCode: 200`
        },
        {
            label: 'Start Server',
            description: 'Launch your application with a simple server start command',
            content: `import {SampleApp} from "./app";
     
// Starts the Node-Boot server with the application deployed
new SampleApp()
    .start()
    .then(app => {
        console.debug(\`SampleApp started at port \${app.appOptions.port}\`);
    })
    .catch(reason => {
        console.error(\`Error starting SampleApp: \${reason}\`);
    });`
        }
    ];

    const packageManagers = [
        {label: 'NPM', value: 'npm'},
        {label: 'PNPM', value: 'pnpm'},
        {label: 'Yarn', value: 'yarn'},
    ];

    const frameworks = [
        {label: 'Fastify', value: 'fastify'},
        {label: 'Express', value: 'express'},
        {label: 'Koa', value: 'koa'},
        {label: 'node:http', value: 'node:http'},
    ];

    const copyToClipboard = (text) => {
        const cleanText = text.replace(/<[^>]*>/g, '');
        navigator.clipboard.writeText(cleanText);
    };

    const nextStep = useCallback(() => {
        setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, [steps.length]);

    const handleStepClick = (step) => {
        setActiveStep(step);
        setIsPlaying(false);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(nextStep, 4000);
            return () => clearInterval(interval);
        }
    }, [isPlaying, nextStep]);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        setIsPlaying(false);
    };

    const handleFrameworkChange = (event, newValue) => {
        setSelectedFramework(newValue);
        setIsPlaying(false);
    };

    const getCurrentContent = () => {
        const step = steps[activeStep];
        if (activeStep === 0 && step.content[packageManagers[selectedTab].value]) {
            return step.content[packageManagers[selectedTab].value];
        } else if (activeStep === 1 && step.hasFrameworkTabs && step.content[frameworks[selectedFramework].value]) {
            return step.content[frameworks[selectedFramework].value];
        }
        return step.content;
    };

    return (
        <Box>
            <ControlBox>
                <Button
                    variant="outlined"
                    startIcon={isPlaying ? <Pause/> : <PlayArrow/>}
                    onClick={togglePlayPause}
                    sx={{
                        borderColor: '#07E770',
                        color: '#07E770',
                        '&:hover': {
                            borderColor: '#06cb63',
                            backgroundColor: 'rgba(7, 231, 112, 0.05)',
                        },
                    }}
                >
                    {isPlaying ? 'Pause Demo' : 'Play Demo'}
                </Button>
                <Typography variant="body2" sx={{color: '#637381'}}>
                    Step {activeStep + 1} of {steps.length}
                </Typography>
            </ControlBox>

            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: 4}}>
                {/* Mobile: Horizontal Stepper */}
                <Box sx={{display: {xs: 'block', md: 'none'}, width: '100%'}}>
                    <StyledStepper activeStep={activeStep} orientation="horizontal" sx={{mb: 3}}>
                        {steps.map((step, index) => (
                            <Step key={index} completed={activeStep > index}>
                                <StepLabel
                                    onClick={() => handleStepClick(index)}
                                    sx={{cursor: 'pointer'}}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontWeight: 600,
                                            color: '#003720',
                                            display: {xs: 'none', sm: 'block'}
                                        }}
                                    >
                                        {step.label}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </StyledStepper>

                    {/* Mobile: Current step description */}
                    <Box sx={{mb: 3, textAlign: 'center'}}>
                        <Typography variant="h6" sx={{fontWeight: 600, color: '#003720', mb: 1}}>
                            {steps[activeStep].label}
                        </Typography>
                        <Typography variant="body2" sx={{color: '#637381'}}>
                            {steps[activeStep].description}
                        </Typography>
                    </Box>
                </Box>

                {/* Desktop: Vertical Stepper */}
                <Box sx={{minWidth: 300, display: {xs: 'none', md: 'block'}}}>
                    <StyledStepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={index} completed={activeStep > index}>
                                <StepLabel
                                    onClick={() => handleStepClick(index)}
                                    sx={{cursor: 'pointer'}}
                                >
                                    <Typography variant="h6" sx={{fontWeight: 600, color: '#003720'}}>
                                        {step.label}
                                    </Typography>
                                </StepLabel>
                                <StepContent>
                                    <Typography variant="body2" sx={{color: '#637381', mt: 1}}>
                                        {step.description}
                                    </Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </StyledStepper>
                </Box>

                <Box sx={{flex: 1}}>
                    {activeStep === 0 && (
                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            sx={{
                                mb: 2,
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
                            {packageManagers.map((pm, index) => (
                                <Tab key={index} label={pm.label}/>
                            ))}
                        </Tabs>
                    )}

                    {activeStep === 1 && (
                        <Tabs
                            value={selectedFramework}
                            onChange={handleFrameworkChange}
                            sx={{
                                mb: 2,
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
                            {frameworks.map((framework, index) => (
                                <Tab key={index} label={framework.label}/>
                            ))}
                        </Tabs>
                    )}

                    <CodeBlock language={activeStep === 2 ? 'yaml' : 'javascript'}>
                        {getCurrentContent()}
                    </CodeBlock>

                    <Box sx={{display: 'flex', gap: 2, mt: 3, justifyContent: 'center'}}>
                        <Button
                            target="_blank"
                            href="https://codesandbox.io/p/github/nodejs-boot/codesandbox-nodeboot/main"
                            variant="contained"
                            startIcon={<PlayArrow/>}
                            sx={{
                                background: 'linear-gradient(to bottom right, #07E770, #06cb63)',
                                color: '#000000',
                                fontWeight: 600,
                                px: 3,
                                py: 1,
                            }}
                        >
                            Try It Now
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AnimatedStepper;
