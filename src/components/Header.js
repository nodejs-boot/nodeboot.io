import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { GitHub, Menu, Close, Terminal as TerminalIcon, MenuBook, Code } from '@mui/icons-material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  color: '#003720',
  margin: 0,
  width: '100%',
  borderRadius: 0,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9,
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '40px',
  width: 'auto',
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  color: '#07E770',
  textDecoration: 'none',
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const externalLinks = [
    { 
      label: 'Documentation',
      href: 'https://nodeboot.gitbook.io',
      icon: <MenuBook fontSize="small" />
    },
    {
      label: 'GitHub',
      href: 'https://github.com/nodejs-boot',
      icon: <GitHub fontSize="small" />
    },
    {
      label: 'Initializer',
      href: 'https://start.nodeboot.io',
      icon: <RocketLaunchIcon fontSize="small" />
    },
    { 
      label: 'Terminal', 
      href: 'https://terminal.nodeboot.io',
      icon: <TerminalIcon fontSize="small" />
    },
      {
          label: 'TypeScript Extensions',
          href: 'https://katxupa.gitbook.io',
          icon: <Code fontSize="small" />
      }
  ];

  return (
    <>
      <StyledAppBar elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64, px: 3 }}>
          <LogoContainer component="a" href="/">
            <LogoImage src="/nodeboot-logo.png" alt="Node-Boot Logo" />
            <LogoText variant="h6">
              Node-Boot
            </LogoText>
          </LogoContainer>

          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {externalLinks.map((link, index) => (
                <Button
                  key={index}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={link.icon}
                  sx={{
                    color: '#637381',
                    textTransform: 'none',
                    fontWeight: 500,
                    padding: '8px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(7, 231, 112, 0.1)',
                      color: '#07E770',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton
              sx={{ 
                color: '#637381',
                '&:hover': { color: '#003720' }
              }}
              onClick={handleMobileMenuToggle}
            >
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: '#ffffff',
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <LogoImage src="/nodeboot-logo.png" alt="Node-Boot Logo" style={{ height: '32px' }} />
            <Typography variant="h6" sx={{ color: '#07E770', fontWeight: 600 }}>
              Node-Boot
            </Typography>
          </Box>
          <IconButton onClick={handleMobileMenuClose}>
            <Close />
          </IconButton>
        </Box>
        
        <Divider />
        
        <List sx={{ pt: 2 }}>
          {externalLinks.map((link, index) => (
            <ListItem 
              key={index} 
              component="a" 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileMenuClose}
              sx={{
                gap: 2,
                '&:hover': {
                  backgroundColor: 'rgba(7, 231, 112, 0.05)',
                },
              }}
            >
              <Box sx={{ color: '#637381', display: 'flex', alignItems: 'center' }}>
                {link.icon}
              </Box>
              <ListItemText 
                primary={link.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: '#003720',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
