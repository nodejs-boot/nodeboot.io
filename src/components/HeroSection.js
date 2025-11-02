import React, {useEffect, useState} from 'react';
import {Box, Button, Chip, Container, Stack, Tab, Tabs, Typography,} from '@mui/material';
import {styled} from '@mui/material/styles';
import {GitHub, PlayArrow, Explore} from '@mui/icons-material';
import CodeBlock from './CodeBlock';

const HeroContainer = styled(Box)(({theme}) => ({
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

const TypingText = () => {
    const words = ['Simple', 'Productive', 'Modern', 'Opinionated'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing forward
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.substring(0, currentText.length + 1));
                    setTypingSpeed(150);
                } else {
                    // Word complete, wait before deleting
                    setTypingSpeed(2000);
                    setIsDeleting(true);
                }
            } else {
                // Deleting backward
                if (currentText.length > 0) {
                    setCurrentText(currentText.substring(0, currentText.length - 1));
                    setTypingSpeed(100);
                } else {
                    // Deletion complete, move to next word
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                    setTypingSpeed(500);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography
                variant="h1"
                sx={{
                    fontWeight: 700,
                    fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#003720',
                    marginBottom: 1,
                }}
            >
                Node-Boot makes NodeJs
            </Typography>
            <Typography
                variant="h1"
                sx={{
                    fontWeight: 700,
                    fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#22c55e',
                    position: 'relative',
                    display: 'inline-block',
                    minHeight: 'clamp(2.25rem, 5vw, 4.5rem)',
                    '&::after': {
                        content: '"|"',
                        position: 'absolute',
                        right: '-8px',
                        animation: 'blink 1s infinite',
                        '@keyframes blink': {
                            '0%, 50%': {opacity: 1},
                            '51%, 100%': {opacity: 0},
                        },
                    },
                }}
            >
                {currentText}
            </Typography>
        </Box>
    );
};

export const HeroSection = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleExploreFeatures = () => {
        const levelUpSection = document.getElementById('level-up-section');
        if (levelUpSection) {
            levelUpSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const codeExamples = [
        {
            label: 'node:http',
            code: `@EnableDI(Container)
@EnableOpenApi()
@EnableSwaggerUI()
@EnableActuator()
@EnableRepositories()
@EnableComponentScan()
@NodeBootApplication()
export class SampleApp implements NodeBootApp {
    \n
    start(): Promise<NodeBootAppView> {
        return NodeBoot.run(HttpServer);
    }
}`
        },
        {
            label: 'Express',
            code: `@EnableDI(Container)
@EnableOpenApi()
@EnableSwaggerUI()
@EnableActuator()
@EnableRepositories()
@EnableComponentScan()
@NodeBootApplication()
export class SampleApp implements NodeBootApp {
    \n
    start(): Promise<NodeBootAppView> {
        return NodeBoot.run(ExpressServer);
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
@EnableComponentScan()
@NodeBootApplication()
export class SampleApp implements NodeBootApp {
    \n
    start(): Promise<NodeBootAppView> {
        return NodeBoot.run(FastifyServer);
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
@EnableComponentScan()
@NodeBootApplication()
export class SampleApp implements NodeBootApp {
    \n
    start(): Promise<NodeBootAppView> {
        return NodeBoot.run(KoaServer);
    }
}`
        }
    ];

    return (
        <HeroContainer>
            <Container maxWidth="lg">
                <Box sx={{maxWidth: '800px', margin: '0 auto'}}>
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

                        <TypingText/>

                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                                fontStyle: " italic",
                                lineHeight: 1.5,
                                color: '#003720',
                                maxWidth: '600px',
                            }}
                        >
                            "Down with CLI Tyranny"
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                                lineHeight: 1.5,
                                color: '#637381',
                                marginBottom: "48px !important",
                                marginTop: "0 !important",
                                maxWidth: '600px',
                            }}
                        >
                            Code in freedom. Test in reality.
                        </Typography>

                        <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{marginBottom: 4}}>
                            <Button
                                onClick={handleExploreFeatures}
                                variant="contained"
                                size="large"
                                startIcon={<Explore/>}
                                sx={{
                                    background: 'linear-gradient(to bottom right, #07E770, #06cb63)',
                                    color: '#000000',
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1.5,
                                }}
                            >
                                Explore Features
                            </Button>
                            <Button
                                target="_blank"
                                href="https://github.com/nodejs-boot"
                                variant="outlined"
                                size="large"
                                startIcon={<GitHub/>}
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

                        <Box sx={{width: '100%', maxWidth: '600px'}}>
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
                                    <Tab key={index} label={example.label}/>
                                ))}
                            </Tabs>

                            <Box sx={{mt: 3, maxWidth: '600px', mx: 'auto'}}>
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
