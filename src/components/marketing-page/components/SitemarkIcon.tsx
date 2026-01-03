import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const LogoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textDecoration: 'none',
  gap: '0.75rem',
});

const LogoImage = styled('img')({
  height: '40px',
  width: 'auto',
  objectFit: 'contain',
});

export default function SitemarkIcon() {
  return (
    <LogoContainer 
      component="a" 
      href="#" 
      sx={{ 
        textDecoration: 'none', 
        mr: 2,
        justifyContent: 'flex-start',
      }}
    >
      <LogoImage src="/lend-logo.svg" alt="LendMusic Logo" />
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'text.primary',
          letterSpacing: '0.02em',
        }}
      >
        LendMusic
      </Typography>
    </LogoContainer>
  );
}
