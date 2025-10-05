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
import { GitHub, Search, Menu, Close } from '@mui/icons-material';
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

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  color: '#07E770',
  textDecoration: 'none',
  '&:hover': {
    color: '#06cb63',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#637381',
  textTransform: 'none',
  fontWeight: 500,
  padding: '6px 12px',
  borderRadius: '9999px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#003720',
  },
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

  const menuItems = [
    { label: 'Docs', href: '/docs' },
    { label: 'Starters', href: '/starters' },
    { label: 'Scaffolder', href: '/scaffolder' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <StyledAppBar elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64, px: 3 }}>
          <Logo variant="h6" component="a" href="/">
            Node-Boot
          </Logo>

          {!isMobile ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <NavButton component="a" href="/docs">Docs</NavButton>
                <NavButton component="a" href="/starters">Starters</NavButton>
                <NavButton component="a" href="/scaffolder">Scaffolder</NavButton>
                <NavButton component="a" href="/blog">Blog</NavButton>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  sx={{ 
                    color: '#637381',
                    '&:hover': { color: '#003720' }
                  }}
                >
                  <Search />
                </IconButton>
                <IconButton
                  sx={{ 
                    color: '#637381',
                    '&:hover': { color: '#003720' }
                  }}
                  href="https://github.com/nodejs-boot/node-boot"
                  target="_blank"
                >
                  <GitHub />
                </IconButton>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ ml: 1 }}
                  href="/scaffolder"
                >
                  Get Started
                </Button>
              </Box>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                sx={{ 
                  color: '#637381',
                  '&:hover': { color: '#003720' }
                }}
              >
                <Search />
              </IconButton>
              <IconButton
                sx={{ 
                  color: '#637381',
                  '&:hover': { color: '#003720' }
                }}
                onClick={handleMobileMenuToggle}
              >
                <Menu />
              </IconButton>
            </Box>
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
          <Typography variant="h6" sx={{ color: '#003720', fontWeight: 600 }}>
            Node-Boot
          </Typography>
          <IconButton onClick={handleMobileMenuClose}>
            <Close />
          </IconButton>
        </Box>
        
        <Divider />
        
        <List>
          {menuItems.map((item, index) => (
            <ListItem 
              key={index} 
              component="a" 
              href={item.href}
              onClick={handleMobileMenuClose}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(7, 231, 112, 0.05)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
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
        
        <Divider sx={{ mt: 2 }} />
        
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            fullWidth
            href="/scaffolder"
            onClick={handleMobileMenuClose}
            sx={{
              background: 'linear-gradient(to bottom right, #07E770, #06cb63)',
              color: '#000000',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Get Started
          </Button>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              href="https://github.com/nodejs-boot/node-boot"
              target="_blank"
              sx={{ color: '#637381' }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;