import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { getImagePath } from '../../../utils/imagePath';

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

interface SitemarkIconProps {
  onNavigate?: (page: 'home' | 'about') => void;
}

export default function SitemarkIcon({ onNavigate }: SitemarkIconProps) {
  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'instant' });
        onNavigate?.('home');
      }}
      sx={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textDecoration: 'none', 
        mr: 2,
        justifyContent: 'flex-start',
        gap: '0.75rem',
        '&::before': {
          display: 'none', // Убираем подчеркивание для логотипа
        },
        '&:hover::before': {
          display: 'none', // Убираем подчеркивание при hover
        },
      }}
    >
      <LogoImage src={getImagePath('lend-logo.svg')} alt="LendMusic Logo" />
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
    </Link>
  );
}
