import React from 'react';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const DocsContainer = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 64px)',
  paddingTop: '64px',
}));

const MainContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '100%',
}));

const GitBookEmbed = styled('iframe')(({ theme }) => ({
  width: '100%',
  height: '90vh',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
}));

const DocsPage = () => {
  return (
    <DocsContainer>
      <MainContent>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
          <Breadcrumbs sx={{ mb: 3 }}>
            <Link underline="hover" color="inherit" href="/">
              Node-Boot
            </Link>
            <Typography color="text.primary">Documentation</Typography>
          </Breadcrumbs>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: '#003720',
                mb: 2,
              }}
            >
              Documentation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#637381',
                maxWidth: '600px',
              }}
            >
              Complete guide to building applications with Node-Boot Framework. 
              Learn core concepts, explore examples, and master the framework.
            </Typography>
          </Box>

          <Box sx={{ 
            border: '1px solid rgba(0, 0, 0, 0.12)', 
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}>
            <GitBookEmbed
              src="https://nodeboot.gitbook.io/node-boot-framework/"
              title="Node-Boot Framework Documentation"
            />
          </Box>

          <Box sx={{ 
            mt: 3, 
            p: 2, 
            backgroundColor: 'rgba(7, 231, 112, 0.05)', 
            borderRadius: 2,
            border: '1px solid rgba(7, 231, 112, 0.2)',
          }}>
            <Typography variant="body2" sx={{ color: '#003720' }}>
              💡 <strong>Tip:</strong> For the best experience, you can also visit the{' '}
              <Link 
                href="https://nodeboot.gitbook.io/node-boot-framework/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ color: '#07E770', fontWeight: 600 }}
              >
                full documentation site
              </Link> in a new tab.
            </Typography>
          </Box>
        </Container>
      </MainContent>
    </DocsContainer>
  );
};

export default DocsPage;