import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  TrendingUp,
  Code,
  Speed,
  Security,
  AutoAwesome,
} from '@mui/icons-material';
import CodeBlock from './CodeBlock';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '6rem 0',
  background: 'linear-gradient(135deg, rgba(7, 231, 112, 0.05) 0%, rgba(148, 242, 127, 0.02) 100%)',
}));

const LevelUpCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.95)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #07E770 0%, #06cb63 100%)',
  marginBottom: theme.spacing(2),
}));

const LevelUpSection = () => {
  const levelUpAreas = [
    {
      icon: <TrendingUp sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Enterprise Scalability',
      description: 'Transform your Node.js apps into enterprise-grade solutions with battle-tested patterns and practices.',
      benefits: ['Microservices architecture', 'Auto-scaling', 'Service mesh ready', 'Cloud deployment'],
      codeExample: `@NodeBootApplication()
@EnableAutoConfiguration()
export class ScalableApp {
  @Autowired
  private userService: UserService;
  
  @GetMapping('/users')
  async getUsers() {
    return this.userService.findAll();
  }
}`,
    },
    {
      icon: <Speed sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Developer Productivity',
      description: 'Stop writing boilerplate and focus on business logic. Node-Boot handles the heavy lifting.',
      benefits: ['Zero configuration', 'Auto-wiring', 'Hot reloading', 'Instant APIs'],
      codeExample: `// Before: 50+ lines of Express setup
// After: Just add decorators

@RestController('/api/products')
export class ProductController {
  @PostMapping()
  async createProduct(@RequestBody product: Product) {
    return await this.productService.save(product);
  }
}`,
    },
    {
      icon: <Security sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Security by Default',
      description: 'Built-in security features that protect your applications without complex configuration.',
      benefits: ['JWT authentication', 'RBAC authorization', 'Rate limiting', 'CORS protection'],
      codeExample: `@RestController('/admin')
@PreAuthorize('hasRole("ADMIN")')
export class AdminController {
  
  @GetMapping('/users')
  @RateLimit(100, '1h')
  async getAllUsers() {
    // Automatically secured endpoint
    return this.userService.findAll();
  }
}`,
    },
    {
      icon: <AutoAwesome sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Modern Development',
      description: 'Embrace the latest Node.js features and patterns with TypeScript-first development.',
      benefits: ['TypeScript native', 'Decorator support', 'Async/await', 'Modern ES modules'],
      codeExample: `@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}
  
  async findByEmail(email: string): Promise<User> {
    return this.userRepo.findOne({ email });
  }
}`,
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
            Level up your NodeJS code
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
            Take your Node.js development to the next level with enterprise patterns, 
            best practices, and production-ready features out of the box.
          </Typography>
        </Box>

        <Stack spacing={4} sx={{ mb: 8 }}>
          {levelUpAreas.map((area, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                width: '100%',
              }}
            >
              <LevelUpCard
                sx={{
                  width: { xs: '100%', md: '85%' },
                  maxWidth: '900px',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                    <IconWrapper>
                      {area.icon}
                    </IconWrapper>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: '#003720',
                          mb: 1,
                        }}
                      >
                        {area.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#637381',
                          lineHeight: 1.5,
                        }}
                      >
                        {area.description}
                      </Typography>
                    </Box>
                  </Stack>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Typography variant="h6" sx={{ color: '#003720', mb: 2, fontSize: '1rem' }}>
                        Key Benefits:
                      </Typography>
                      <Stack spacing={1}>
                        {area.benefits.map((benefit, benefitIndex) => (
                          <Typography
                            key={benefitIndex}
                            variant="body2"
                            sx={{
                              color: '#637381',
                              display: 'flex',
                              alignItems: 'center',
                              fontSize: '0.875rem',
                              '&:before': {
                                content: '"✓"',
                                color: '#07E770',
                                fontWeight: 'bold',
                                marginRight: '8px',
                              },
                            }}
                          >
                            {benefit}
                          </Typography>
                        ))}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <Typography variant="h6" sx={{ color: '#003720', mb: 2, fontSize: '1rem' }}>
                        Code Example:
                      </Typography>
                      <CodeBlock language="javascript">
                        {area.codeExample}
                      </CodeBlock>
                    </Grid>
                  </Grid>
                </CardContent>
              </LevelUpCard>
            </Box>
          ))}
        </Stack>

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
            Ready to level up?
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
            Join thousands of developers who have already upgraded their Node.js development 
            experience with Node-Boot.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Get Started Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                color: '#003720',
              }}
            >
              View Documentation
            </Button>
          </Stack>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default LevelUpSection;
