import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, Twitter, Forum, Email } from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#003720',
  color: '#ffffff',
  padding: '3rem 0 2rem',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  fontSize: '0.875rem',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: '#07E770',
    textDecoration: 'none',
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    color: '#07E770',
    borderColor: '#07E770',
    backgroundColor: 'rgba(7, 231, 112, 0.1)',
  },
}));

const Footer = () => {
  const footerSections = [
    {
      title: 'Framework',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Getting Started', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Examples', href: '#' },
      ],
    },
    {
      title: 'Starters',
      links: [
        { label: 'Express Starter', href: '#' },
        { label: 'Fastify Starter', href: '#' },
        { label: 'Koa Starter', href: '#' },
        { label: 'MongoDB Integration', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'GitHub Discussions', href: '#' },
        { label: 'Discord Server', href: '#' },
        { label: 'Stack Overflow', href: '#' },
        { label: 'Contributing', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Changelog', href: '#' },
        { label: 'Migration Guide', href: '#' },
        { label: 'Best Practices', href: '#' },
      ],
    },
  ];

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#07E770',
                mb: 2,
              }}
            >
              Node-Boot
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                mb: 3,
                maxWidth: '300px',
              }}
            >
              An opinionated Node.js framework that bridges gaps across the expansive 
              Node.js ecosystem and abolishes the CLI tyranny.
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialButton size="small">
                <GitHub />
              </SocialButton>
              <SocialButton size="small">
                <Twitter />
              </SocialButton>
              <SocialButton size="small">
                <Forum />
              </SocialButton>
              <SocialButton size="small">
                <Email />
              </SocialButton>
            </Stack>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <Typography
                variant="h6"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link, linkIndex) => (
                  <FooterLink key={linkIndex} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            © 2024 Node-Boot Framework. Made with ❤️ for the Node.js community.
          </Typography>
          
          <Stack direction="row" spacing={3}>
            <FooterLink href="#" sx={{ fontSize: '0.75rem' }}>
              Privacy Policy
            </FooterLink>
            <FooterLink href="#" sx={{ fontSize: '0.75rem' }}>
              Terms of Service
            </FooterLink>
            <FooterLink href="#" sx={{ fontSize: '0.75rem' }}>
              MIT License
            </FooterLink>
          </Stack>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;