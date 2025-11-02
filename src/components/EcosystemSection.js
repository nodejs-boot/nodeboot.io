import React, { useState } from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import ExtensionIcon from '@mui/icons-material/Extension';
import SpeedIcon from '@mui/icons-material/Speed';
import DatabaseIcon from '@mui/icons-material/ViewModule';

const EcosystemSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  // Integration categories with their technologies
  const integrationCategories = [
    {
      title: 'Application Servers',
      description: 'By implementing Node-Boot Server adapter',
      icon: <StorageIcon sx={{ fontSize: 20 }} />,
      color: '#10b981',
      technologies: [
        { name: 'Node', icon: '/icons/Node.js.svg' },
        { name: 'Express', icon: '/icons/Express.svg' },
        { name: 'Fastify', icon: '/icons/Fastify.svg' },
        { name: 'Koa', icon: '/icons/Koa.png' },
        { name: 'Encore', icon: '/icons/encore.svg' }
      ]
    },
    {
      title: 'Serverless',
      description: 'By implementing serverless routing into node-boot controllers',
      icon: <CloudIcon sx={{ fontSize: 20 }} />,
      color: '#3b82f6',
      technologies: [
        { name: 'AWS Lambda', icon: '/icons/Lambda.svg' },
        { name: 'Netlify', icon: '/icons/Netlify.svg' },
        { name: 'Vercel', icon: '/icons/Vercel.svg' },
        { name: 'Google Cloud Functions', icon: '/icons/Cloud Functions.svg' },
        { name: 'Cloudflare', icon: '/icons/Cloudflare.svg' }
      ]
    },
    {
      title: 'Starter Packages',
      description: 'By plugging auto-configuration modules',
      icon: <ExtensionIcon sx={{ fontSize: 20 }} />,
      color: '#8b5cf6',
      technologies: [
        { name: 'AWS', icon: '/icons/AWS.svg' },
        { name: 'Firebase', icon: '/icons/Firebase.svg' },
        { name: 'Redis', icon: '/icons/Redis.svg' },
        { name: 'OpenAI', icon: '/icons/OpenAI.svg' },
        { name: 'OpenAPI', icon: '/icons/OpenAPI.svg' },
        { name: 'Backstage', icon: '/icons/backstage.svg' },
      ]
    },
    {
      title: 'Process Managers',
      description: 'By wrapping Node-Boot app server',
      icon: <SpeedIcon sx={{ fontSize: 20 }} />,
      color: '#f59e0b',
      technologies: [
        { name: 'PM2', icon: '/icons/PM2.svg' },
        { name: 'Platformatic', icon: '/icons/platformatic.png' },
        { name: 'Docker', icon: '/icons/Docker.svg' },
        { name: 'Kubernetes', icon: '/icons/Kubernetes.svg' }
      ]
    },
    {
      title: 'Persistency',
      description: 'Supported through TypeORM integration',
      icon: <DatabaseIcon sx={{ fontSize: 20 }} />,
      color: '#ec4899',
      technologies: [
        { name: 'MongoDB', icon: '/icons/MongoDB.svg' },
        { name: 'MySQL', icon: '/icons/MySQL.svg' },
        { name: 'SQLite', icon: '/icons/SQLite.svg' },
        { name: 'PostgreSQL', icon: '/icons/PostgresSQL.svg' },
        { name: 'MariaDB', icon: '/icons/MariaDB.svg' },
        { name: 'Oracle', icon: '/icons/Oracle.svg' },
        { name: 'SQL Server', icon: '/icons/Microsoft SQL Server.svg' },
        { name: 'CockroachDB', icon: '/icons/CockroachDB.svg' }
      ]
    }
  ];

  const currentCategory = integrationCategories[activeCategory];

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #f8fffe 0%, #ffffff 100%)',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#2c5530',
              mb: 2
            }}
          >
            Ecosystem & Integrations
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}
          >
            Node-Boot seamlessly integrates with your favorite tools and platforms.
          </Typography>
        </Box>

        {/* Category Filter Chips */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 4
          }}
        >
          {integrationCategories.map((category, index) => (
            <Chip
              key={index}
              icon={category.icon}
              label={category.title}
              onClick={() => setActiveCategory(index)}
              sx={{
                px: 2,
                py: 2.5,
                height: 'auto',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '12px',
                border: '2px solid',
                borderColor: activeCategory === index ? category.color : '#e5e7eb',
                backgroundColor: activeCategory === index ? `${category.color}15` : '#ffffff',
                color: activeCategory === index ? category.color : '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '& .MuiChip-icon': {
                  color: activeCategory === index ? category.color : '#6b7280',
                  marginLeft: '8px'
                },
                '&:hover': {
                  borderColor: category.color,
                  backgroundColor: `${category.color}10`,
                  color: category.color,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 12px ${category.color}30`,
                  '& .MuiChip-icon': {
                    color: category.color
                  }
                }
              }}
            />
          ))}
        </Box>

        {/* Active Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: 4,
              py: 2,
              px: 3,
              borderRadius: '12px',
              backgroundColor: `${currentCategory.color}08`
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontStyle: 'italic',
                color: '#4b5563',
                fontSize: '16px'
              }}
            >
              {currentCategory.description}
            </Typography>
          </Box>

          {/* Technologies Grid */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
              mb: 6,
            }}
          >
            {currentCategory.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                whileHover={{ scale: 1.1, y: -8 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 2.5,
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    border: '2px solid #e5e7eb',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minWidth: { xs: '100px', sm: '120px' },
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      borderColor: currentCategory.color,
                      boxShadow: `0 8px 24px ${currentCategory.color}30`
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={tech.icon}
                    alt={tech.name}
                    sx={{
                      width: { xs: 48, sm: 56 },
                      height: { xs: 48, sm: 56 },
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1f2937',
                      textAlign: 'center',
                      lineHeight: 1.3
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default EcosystemSection;
