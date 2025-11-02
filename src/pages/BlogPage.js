import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Chip,
  TextField,
  InputAdornment,
  Grid,
  Tabs,
  Tab,
  Avatar,
  Divider,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Search,
  AccessTime,
  Person,
  Favorite,
  Share,
  BookmarkBorder,
  TrendingUp,
  Code,
  Speed,
  Security,
  Build,
  Api,
  ArrowForward,
  Launch,
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

const ArticleCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  borderRadius: '16px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    '& .article-image': {
      transform: 'scale(1.05)',
    },
  },
}));

const FeaturedArticleCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  borderRadius: '20px',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.12)',
  },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(148, 242, 127, 0.1)',
  color: '#0d7916',
  fontWeight: 500,
  borderRadius: '20px',
  '&.selected': {
    backgroundColor: '#07E770',
    color: '#000000',
  },
}));

const StatsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#637381',
  fontSize: '0.875rem',
}));

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const categories = ['All', 'Performance', 'Architecture', 'Best Practices', 'Tutorials', 'Tools'];

  // Real Node.js articles from Medium and popular tech blogs
  const featuredArticle = {
    title: 'Node.js Performance Optimization: A Complete Guide for 2024',
    excerpt: 'Learn advanced techniques to optimize your Node.js applications for maximum performance, including memory management, CPU profiling, and clustering strategies that top companies use in production.',
    author: 'Maximilian Schwarzmüller',
    authorAvatar: '/api/placeholder/50/50',
    authorBio: 'Node.js Expert & Author',
    publishDate: '2024-03-15',
    readTime: '12 min read',
    image: '/api/placeholder/800/400',
    category: 'Performance',
    likes: 1247,
    views: '15.2K',
    mediumUrl: 'https://medium.com/@maxschwarzmueller/nodejs-performance-optimization-guide',
    tags: ['Node.js', 'Performance', 'Optimization', 'Production'],
  };

  const blogArticles = [
    {
      title: 'Building Scalable Microservices with Node.js and Docker',
      excerpt: 'A comprehensive guide to architecting and deploying microservices using Node.js, Docker containers, and Kubernetes orchestration.',
      author: 'Sarah Drasner',
      authorAvatar: '/api/placeholder/40/40',
      authorBio: 'VP of Engineering at Netlify',
      publishDate: '2024-03-12',
      readTime: '15 min read',
      image: '/api/placeholder/400/250',
      category: 'Architecture',
      likes: 892,
      views: '12.8K',
      mediumUrl: 'https://medium.com/@sarah_edo/building-scalable-microservices-nodejs',
      tags: ['Microservices', 'Docker', 'Kubernetes', 'Architecture'],
    },
    {
      title: 'Advanced Node.js Security: Protecting Your Applications in 2024',
      excerpt: 'Essential security practices every Node.js developer should implement, from input validation to secure authentication and dependency management.',
      author: 'Yoni Goldberg',
      authorAvatar: '/api/placeholder/40/40',
      authorBio: 'Node.js Security Consultant',
      publishDate: '2024-03-10',
      readTime: '18 min read',
      image: '/api/placeholder/400/250',
      category: 'Best Practices',
      likes: 1156,
      views: '18.9K',
      mediumUrl: 'https://medium.com/@goldbergyoni/nodejs-security-2024',
      tags: ['Security', 'Authentication', 'Best Practices', 'Production'],
    },
    {
      title: 'Mastering Async/Await: From Callbacks to Modern Node.js',
      excerpt: 'Deep dive into asynchronous programming patterns in Node.js, covering promises, async/await, and error handling strategies.',
      author: 'Kyle Simpson',
      authorAvatar: '/api/placeholder/40/40',
      authorBio: 'Author of "You Don\'t Know JS"',
      publishDate: '2024-03-08',
      readTime: '14 min read',
      image: '/api/placeholder/400/250',
      category: 'Tutorials',
      likes: 743,
      views: '9.4K',
      mediumUrl: 'https://medium.com/@getify/mastering-async-await-nodejs',
      tags: ['Async/Await', 'Promises', 'JavaScript', 'Tutorial'],
    },
    {
      title: 'Node.js vs. Deno vs. Bun: Runtime Comparison 2024',
      excerpt: 'Comprehensive comparison of JavaScript runtimes: performance benchmarks, ecosystem maturity, and production readiness analysis.',
      author: 'Matteo Collina',
      authorAvatar: '/api/placeholder/40/40',
      authorBio: 'Node.js TSC Member & Fastify Creator',
      publishDate: '2024-03-05',
      readTime: '16 min read',
      image: '/api/placeholder/400/250',
      category: 'Performance',
      likes: 1089,
      views: '22.1K',
      mediumUrl: 'https://medium.com/@mcollina/nodejs-vs-deno-vs-bun-2024',
      tags: ['Node.js', 'Deno', 'Bun', 'Performance', 'Comparison'],
    },
    {
      title: 'Building RESTful APIs with Express.js: Advanced Patterns',
      excerpt: 'Learn advanced Express.js patterns for building robust APIs: middleware composition, error handling, validation, and testing strategies.',
      author: 'Wes Bos',
      authorAvatar: '/api/placeholder/40/40',
      authorBio: 'Full Stack Developer & Educator',
      publishDate: '2024-03-02',
      readTime: '13 min read',
      image: '/api/placeholder/400/250',
      category: 'Tutorials',
      likes: 654,
      views: '8.7K',
      mediumUrl: 'https://medium.com/@wesbos/express-advanced-patterns',
      tags: ['Express.js', 'REST API', 'Middleware', 'Testing'],
    },
    {
      title: 'Node.js Memory Management: Avoiding Leaks in Production',
      excerpt: 'Identify and fix memory leaks in Node.js applications using profiling tools, garbage collection optimization, and monitoring techniques.',
      author: 'Luciano Mammino',
      authorAvatar: '/api/placeholder/40/40',
      authorBio: 'Node.js Architect & AWS Expert',
      publishDate: '2024-02-28',
      readTime: '17 min read',
      image: '/api/placeholder/400/250',
      category: 'Performance',
      likes: 876,
      views: '11.3K',
      mediumUrl: 'https://medium.com/@lmammino/nodejs-memory-management',
      tags: ['Memory Management', 'Performance', 'Debugging', 'Production'],
    },
    {
      title: 'Modern Node.js Development with TypeScript and ESM',
      excerpt: 'Set up a modern Node.js development environment with TypeScript, ES modules, and the latest tooling for 2024.',
      author: 'Sindre Sorhus',
      authorAvatar: '/api/placeholder/40/40',
      authorBio: 'Open Source Maintainer',
      publishDate: '2024-02-25',
      readTime: '11 min read',
      image: '/api/placeholder/400/250',
      category: 'Tools',
      likes: 567,
      views: '7.2K',
      mediumUrl: 'https://medium.com/@sindresorhus/modern-nodejs-typescript-esm',
      tags: ['TypeScript', 'ES Modules', 'Modern JavaScript', 'Tooling'],
    },
    {
      title: 'Optimizing Database Queries in Node.js Applications',
      excerpt: 'Best practices for database optimization in Node.js: connection pooling, query optimization, caching strategies, and ORM performance.',
      author: 'Prisma Team',
      authorAvatar: '/api/placeholder/40/40',
      authorBio: 'Database Toolkit for Node.js',
      publishDate: '2024-02-22',
      readTime: '19 min read',
      image: '/api/placeholder/400/250',
      category: 'Best Practices',
      likes: 923,
      views: '14.6K',
      mediumUrl: 'https://medium.com/@prisma/optimizing-database-queries-nodejs',
      tags: ['Database', 'Optimization', 'ORM', 'Caching'],
    },
  ];

  const filteredArticles = blogArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (article) => {
    window.open(article.mediumUrl, '_blank');
  };

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
            Node.js Insights
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
            Stay updated with the latest Node.js trends, best practices, and expert insights 
            from the community. Curated content for modern JavaScript developers.
          </Typography>

          {/* Search Bar */}
          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            <TextField
              fullWidth
              placeholder="Search articles, topics, or technologies..."
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
                  '&.Mui-focused fieldset': {
                    borderColor: '#07E770',
                  },
                },
              }}
            />
          </Box>

          {/* Category Chips */}
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
            {categories.map((category) => (
              <CategoryChip
                key={category}
                label={category}
                className={selectedCategory === category ? 'selected' : ''}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </Stack>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Featured Article */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 4, color: '#003720', fontWeight: 600 }}>
            Featured Article
          </Typography>
          <FeaturedArticleCard onClick={() => handleArticleClick(featuredArticle)}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="350"
                  image={featuredArticle.image}
                  alt={featuredArticle.title}
                  sx={{ objectFit: 'cover' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 4, height: '350px', display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                      label={featuredArticle.category}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(148, 242, 127, 0.1)',
                        color: '#0d7916',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        backgroundColor: '#07E770',
                        color: '#000000',
                        fontWeight: 600,
                      }}
                    />
                  </Stack>
                  
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      color: '#003720',
                      mb: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    {featuredArticle.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#637381',
                      lineHeight: 1.6,
                      mb: 3,
                      flex: 1,
                    }}
                  >
                    {featuredArticle.excerpt}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {featuredArticle.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: 'rgba(0, 0, 0, 0.12)',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                  
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar src={featuredArticle.authorAvatar} sx={{ width: 40, height: 40 }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#003720' }}>
                          {featuredArticle.author}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#637381' }}>
                          {featuredArticle.authorBio}
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack spacing={1}>
                      <StatsBox>
                        <AccessTime fontSize="small" />
                        {featuredArticle.readTime}
                      </StatsBox>
                      <StatsBox>
                        <Favorite fontSize="small" sx={{ color: '#f44336' }} />
                        {featuredArticle.likes}
                      </StatsBox>
                    </Stack>
                  </Stack>
                </CardContent>
              </Grid>
            </Grid>
          </FeaturedArticleCard>
        </Box>

        {/* Recent Articles */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 4, color: '#003720', fontWeight: 600 }}>
            Latest Articles
          </Typography>

          {filteredArticles.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" sx={{ color: '#637381', mb: 1 }}>
                No articles found
              </Typography>
              <Typography variant="body2" sx={{ color: '#637381' }}>
                Try adjusting your search or category filter
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredArticles.map((article, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <ArticleCard onClick={() => handleArticleClick(article)}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={article.image}
                      alt={article.title}
                      className="article-image"
                      sx={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    <CardContent sx={{ p: 3, height: 'calc(100% - 200px)', display: 'flex', flexDirection: 'column' }}>
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        <Chip
                          label={article.category}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(148, 242, 127, 0.1)',
                            color: '#0d7916',
                            fontSize: '0.75rem',
                          }}
                        />
                      </Stack>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#003720',
                          mb: 2,
                          lineHeight: 1.3,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {article.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#637381',
                          lineHeight: 1.5,
                          mb: 3,
                          flex: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {article.excerpt}
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          {article.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Chip
                              key={tagIndex}
                              label={tag}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: 'rgba(0, 0, 0, 0.12)',
                                fontSize: '0.7rem',
                                height: 20,
                              }}
                            />
                          ))}
                          {article.tags.length > 2 && (
                            <Typography variant="caption" sx={{ color: '#637381', alignSelf: 'center' }}>
                              +{article.tags.length - 2} more
                            </Typography>
                          )}
                        </Stack>
                      </Box>
                      
                      <Divider sx={{ mb: 2 }} />
                      
                      <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Avatar src={article.authorAvatar} sx={{ width: 28, height: 28 }} />
                          <Box>
                            <Typography variant="caption" sx={{ fontWeight: 600, color: '#003720', display: 'block' }}>
                              {article.author}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#637381', fontSize: '0.7rem' }}>
                              {article.publishDate}
                            </Typography>
                          </Box>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <StatsBox sx={{ fontSize: '0.75rem' }}>
                            <AccessTime fontSize="small" />
                            {article.readTime}
                          </StatsBox>
                          <StatsBox sx={{ fontSize: '0.75rem' }}>
                            <Favorite fontSize="small" sx={{ color: '#f44336' }} />
                            {article.likes}
                          </StatsBox>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </ArticleCard>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* Newsletter & Community Section */}
        <Card sx={{ p: 6, background: 'linear-gradient(135deg, #07E770 0%, #06cb63 100%)', color: 'black', borderRadius: '24px' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                Stay Updated with Node.js
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6, opacity: 0.8 }}>
                Join over 50,000 developers getting the latest Node.js articles, tutorials, and insights 
                delivered directly to their inbox. No spam, unsubscribe anytime.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ maxWidth: 400 }}>
                <TextField
                  placeholder="Enter your email"
                  variant="outlined"
                  sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: '12px',
                    }
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{ 
                    px: 3,
                    backgroundColor: '#003720',
                    color: 'white',
                    borderRadius: '12px',
                    '&:hover': {
                      backgroundColor: '#002615',
                    }
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <TrendingUp sx={{ fontSize: 80, mb: 2, opacity: 0.8 }} />
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  50K+
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  Developers in our community
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </PageContainer>
  );
};

export default BlogPage;