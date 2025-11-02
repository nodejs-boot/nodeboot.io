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
  VerifiedUser,
  Storage,
  Extension,
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
      benefits: ['Microservices architecture', 'Actuator Enabled', 'Optimized for Docker and Kubernetes', 'Pluggable into Process Managers', 'Built-in Validations Framework'],
      codeExample: `@EnableDI(Container)
@EnableOpenApi()
@EnableSwaggerUI()
@EnableActuator()
@EnableRepositories()
@EnableScheduling()
@EnableHttpClients()
@EnableValidations()
@EnableComponentScan()
@NodeBootApplication()
export class FactsServiceApp implements NodeBootApp {
    start(): Promise<NodeBootAppView> {
        return NodeBoot.run(HttpServer);
    }
}`,
    },
    {
      icon: <Speed sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Developer Productivity',
      description: 'Stop writing boilerplate and focus on business logic. Node-Boot handles the heavy lifting.',
      benefits: ['AOT Component Scanning', 'Dependency Injection', 'OpenAPI Documentation', 'API versioning', 'Authorization'],
      codeExample: `// Before: 50+ lines of Express setup
// After: Just add decorators

@Controller("/products", "v1")
export class ProductController {
  \n
  constructor(
    private readonly repository: ProductRepository, 
    private readonly logger: Logger
  ) {}
  
  @Post("/")
  @HttpCode(201)
  @Authorized()
  @OpenAPI({summary: "Create a new user"})
  @ResponseSchema(ProductModel)
  async createProduct(@RequestBody product: Product) {
    return this.repository.save(product);
  }
}
`,
    },
    {
      icon: <AutoAwesome sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Modern Development',
      description: 'Embrace the latest Node.js features and patterns with TypeScript-first development.',
      benefits: ['TypeScript native', 'Decorator support', 'Async/await', 'Modern ES modules', 'Katxupa Extension Library.'],
      codeExample: `@Service()
export class UserService {
  \n
  constructor(
    private readonly userRepository: UserRepository
  ) {}
  
  async getBySlug(slug: string): Promise<User> {
    this.logger.debug(\`Getting user by slug: getBySlug(slug=\${slug})\`);
    return (await this.userRepository.findOneBy(slug))
    .orElseThrow(() => new NotFoundError(\`No user found for slug \${slug}\`));
  }
 
  async getAll(filter: FindOptionsWhere<User>, paging: PagingRequest): Promise<Page<User>> {
    this.logger.info("Getting paginated users with filters");
    return this.userRepository.findPaginated(filter, paging);
  }
}`,
    },
    {
      icon: <Code sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Testability at Core',
      description: 'Node-Boot is shipped with Node-Boot Tests Framework that connects the test engine with the application runtime for full testability.',
      benefits: ['Native node:test', 'Access to DI container', 'Mock and spy real services', 'In-test timer control', 'Test Containers', 'Persistence layer testing', 'HTTP endpoints testing', 'Opinionated integrations'],
      codeExample: `    const { useRepository, useService } = useNodeBoot(
        AwesomeApp,
        ({ useConfig, usePactum, useMongoContainer }) => {
            useConfig({
                app: {port: 20000},
            });
    
            useMongoContainer({
                dbName: "test-db",
                image: "mongo:8",
            });
    
            usePactum();
        });
    
    it("should retrieve data from the service", async () => {
        const userService = useService(UserService);
        const users = await userService.findAllUser();
        assert.ok(users, "Expected repository to return users");
     });

        `,
    },
    {
      icon: <VerifiedUser sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Built-in Beans Validations',
      description: 'Enterprise-grade validation framework with class-validator integration, custom validators, and decorator-based validation patterns.',
      benefits: ['Class-validator integration', 'Custom validation decorators', 'Nested object validation', 'Conditional validation rules', 'Automatic error handling', 'Schema-based validation', 'Type-safe validations'],
      codeExample: `// Custom validator decorator
@ValidatorConstraint({name: "isValidQueryFilter", async: false})
export class IsValidQueryFilterConstraint implements ValidatorConstraintInterface {
    \n
    validate(value: any, _args: ValidationArguments) {
       // validation goes here
    }
    \n
    defaultMessage(args: ValidationArguments) {
       // validation message goes here
    }
}
            
export class CreateUserViewRequest {
    \n
    @IsNotEmpty()
    @Matches(SLUG_REGEXP, { message: "Validation message goes here" })
    slug: string;
    \n
    @IsValidQueryFilter({message: "Validation message goes here"})
    filters?: EnhancedFilter;
}
`,
    },
    {
      icon: <Storage sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Data Repositories Framework',
      description: 'Full-featured repository pattern for SQL and NoSQL databases with built-in pagination, sorting, filtering, and transaction management.',
      benefits: ['Repository pattern implementation', 'SQL & NoSQL support', 'Built-in pagination & sorting', 'Advanced filtering', 'Transaction decorators', 'Transaction hooks', 'Repository dependency injection', 'Type-safe queries'],
      codeExample: `@DataRepository(User)
export class UserRepository extends PagingAndSortingRepository<User> {}
     
@Service()
export class UserService {
     
    constructor(
        private readonly userRepository: UserRepository
    ) {}
           
    @Transactional()
    public async createUser(userData: CreateUserDto): Promise<User> {
    
        optionalOf(await this.userRepository.findOneBy({ email: userData.email}))
            .ifPresentThrow(() => new HttpError(409, \`User already exists\`));
          
        runOnTransactionCommit(() => {
            this.logger.info("Transaction was successfully committed");
        });
         
        return this.userRepository.save(userData);
    }
}`,
    },
    {
      icon: <Extension sx={{ color: '#ffffff', fontSize: 32 }} />,
      title: 'Auto-Configurations Framework',
      description: 'Plug-and-play extensibility through auto-configuration classes and starter packages.',
      benefits: ['Configuration classes', 'Bean factory decorators', 'Starter packages ecosystem', 'Auto-binding mechanisms', 'Conditional configurations', 'Modular architecture', 'Third-party extensions'],
      codeExample: `@Configuration()
export class OpenAIConfiguration {
          
    @Bean()
    public openAiConfig({logger, config, iocContainer}: BeansContext): void {
        logger.info("Configuring OpenAI Client");
               
        const openAiConfigs = config.getOptional<OpenAiConfigProperties>(
            "integrations.openai"
        );
          
        if (openAiConfigs) {
            const openAiClient = new OpenAI(openAiConfigs);

            iocContainer.set(OpenAI, openAiClient);
        }
    }
}
      
export const EnableOpenAI = (): ClassDecorator => {
    return () => {
        new OpenAIConfiguration();
    };
};
   
@EnableDI(Container)      
@EnableOpenAI() // Enable OpenAI feature which makes the OpenAI client available for injection
@NodeBootApplication()
export class FactsServiceApp implements NodeBootApp {
    start(): Promise<NodeBootAppView> {
        return NodeBoot.run(HttpServer);
    }
}
`,
    },
  ];

  return (
    <SectionContainer id="level-up-section">
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
            Experience the future of Node.js development with enterprise-grade patterns,
            modern architecture, and future-proof solutions built for tomorrow's challenges.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
                target="_blank"
                href="https://start.nodeboot.io"
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
                target="_blank"
                href="https://nodeboot.gitbook.io"
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
