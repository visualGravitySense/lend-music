import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { getImagePath } from '../../../utils/imagePath';

const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
  objectFit: 'contain',
}));

interface HeroProps {
  onNavigate?: (page: 'home' | 'about' | 'music-carriers' | 'artists') => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        backgroundImage: theme.palette.mode === 'dark'
          ? 'radial-gradient(ellipse 120% 80% at 50% -10%, hsl(210, 100%, 16%), transparent), linear-gradient(180deg, rgba(0, 209, 132, 0.05) 0%, transparent 50%)'
          : 'radial-gradient(ellipse 120% 80% at 50% -10%, hsl(210, 100%, 90%), transparent), linear-gradient(180deg, rgba(0, 168, 107, 0.03) 0%, transparent 50%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 80% 20%, rgba(0, 229, 161, 0.08) 0%, transparent 50%)'
            : 'radial-gradient(circle at 80% 20%, rgba(0, 168, 107, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0,
        },
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'center' },
          gap: { xs: 5, md: 8 },
          pt: { xs: 16, sm: 24 },
          pb: { xs: 10, sm: 16 },
        }}
      >
        {/* Left side - Text content */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 50%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            width: { xs: '100%', md: '50%' },
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Stack
            spacing={3}
            useFlexGap
            sx={{ width: '100%', maxWidth: { md: '600px' } }}
          >
            <Typography
              variant="h1"
              sx={(theme) => ({
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                textShadow: theme.palette.mode === 'dark'
                  ? '0 2px 20px rgba(0, 229, 161, 0.3), 0 4px 40px rgba(0, 0, 0, 0.5)'
                  : '0 2px 20px rgba(0, 168, 107, 0.2), 0 4px 40px rgba(255, 255, 255, 0.8)',
              })}
            >
              Artistide&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                Agentuur
              </Typography>
            </Typography>
            <Typography
              sx={(theme) => ({
                color: 'text.secondary',
                fontSize: '1.125rem',
                lineHeight: 1.75,
                mb: 1,
                fontWeight: 500,
                textShadow: theme.palette.mode === 'dark'
                  ? '0 1px 10px rgba(0, 0, 0, 0.3)'
                  : '0 1px 10px rgba(255, 255, 255, 0.8)',
              })}
            >
              Artistide tellimine, ürituste korraldamine, helitehnika rent, valgustehnika rent.
            </Typography>

            {/* Social Proof - Motivation Enhancement */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1.5, sm: 2.5 },
                mb: 3,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              {[
                { number: '500+', label: 'Üritust' },
                { number: '200+', label: 'Artistid' },
                { number: '40+', label: 'Aastat Kogemust' },
              ].map((stat, index) => (
                <Box
                  key={index}
                  sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: 0.5,
                    px: { xs: 2, sm: 2.5 },
                    py: { xs: 1.5, sm: 2 },
                    borderRadius: '12px',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.1) 0%, rgba(0, 209, 132, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.08) 0%, rgba(0, 168, 107, 0.03) 100%)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(0, 229, 161, 0.2)'
                      : '1px solid rgba(0, 168, 107, 0.15)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: theme.palette.mode === 'dark'
                        ? 'radial-gradient(circle at 50% 0%, rgba(0, 229, 161, 0.1) 0%, transparent 70%)'
                        : 'radial-gradient(circle at 50% 0%, rgba(0, 168, 107, 0.08) 0%, transparent 70%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.02)',
                      borderColor: theme.palette.mode === 'dark'
                        ? 'rgba(0, 229, 161, 0.4)'
                        : 'rgba(0, 168, 107, 0.3)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 30px rgba(0, 229, 161, 0.2), 0 0 40px rgba(0, 209, 132, 0.1)'
                        : '0 12px 30px rgba(0, 168, 107, 0.15), 0 0 40px rgba(0, 168, 107, 0.08)',
                      '&::before': {
                        opacity: 1,
                      },
                      '& .stat-number': {
                        transform: 'scale(1.08)',
                        textShadow: theme.palette.mode === 'dark'
                          ? '0 0 25px rgba(0, 229, 161, 0.5)'
                          : '0 0 20px rgba(0, 168, 107, 0.4)',
                      },
                    },
                  })}
                >
                  <Typography
                    variant="h4"
                    className="stat-number"
                    sx={(theme) => ({
                      color: 'primary.main',
                      fontWeight: 800,
                      fontSize: { xs: '1.75rem', sm: '2rem' },
                      lineHeight: 1,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #00E5A1, #00FFB3)'
                        : 'linear-gradient(135deg, #00a86b, #00d184)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    })}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      fontWeight: 500,
                      textAlign: 'center',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            {/* Services Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 1.5,
                mt: 2,
                mb: 3,
              }}
            >
              {[
                'Teenused Artistidega',
                'Nõustamine Artistidega',
                'Peokavade Koostamine',
                'Artisti Esindamine',
              ].map((service, index) => (
                <Box
                  key={index}
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    padding: 1.5,
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(0, 229, 161, 0.08)'
                      : 'rgba(0, 168, 107, 0.1)',
                    borderRadius: '12px',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(0, 229, 161, 0.2)'
                      : '1px solid rgba(0, 168, 107, 0.2)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(90deg, transparent, rgba(0, 229, 161, 0.1), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(0, 168, 107, 0.1), transparent)',
                      transition: 'left 0.5s ease',
                    },
                    '&:hover': {
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(0, 229, 161, 0.15)'
                        : 'rgba(0, 168, 107, 0.2)',
                      borderColor: theme.palette.mode === 'dark'
                        ? 'rgba(0, 229, 161, 0.5)'
                        : 'rgba(0, 168, 107, 0.5)',
                      transform: 'translateX(8px) translateY(-2px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 20px rgba(0, 229, 161, 0.2)'
                        : '0 8px 20px rgba(0, 168, 107, 0.15)',
                      '&::before': {
                        left: '100%',
                      },
                      '& .service-icon': {
                        transform: 'scale(1.2) rotate(360deg)',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #00E5A1, #00FFB3)'
                          : 'linear-gradient(135deg, #00a86b, #00d184)',
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(0, 229, 161, 0.8)'
                          : 'rgba(0, 168, 107, 0.8)',
                        color: 'white',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 16px rgba(0, 229, 161, 0.4), 0 0 24px rgba(0, 209, 132, 0.2), 0 0 8px rgba(255, 107, 107, 0.3)'
                          : '0 4px 16px rgba(0, 168, 107, 0.3), 0 0 24px rgba(0, 168, 107, 0.15), 0 0 8px rgba(255, 107, 107, 0.25)',
                        '&::after': {
                          opacity: 1,
                        },
                      },
                      '& .service-text': {
                        transform: 'translateX(2px)',
                      },
                    },
                  })}
                >
                  <Box
                    className="service-icon"
                    sx={(theme) => ({
                      width: 28,
                      height: 28,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 209, 132, 0.1))'
                        : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: theme.palette.mode === 'dark'
                        ? '2px solid rgba(0, 229, 161, 0.3)'
                        : '2px solid rgba(0, 168, 107, 0.25)',
                      color: 'primary.main',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 2px 8px rgba(0, 229, 161, 0.15)'
                        : '0 2px 8px rgba(0, 168, 107, 0.1)',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: -3,
                        borderRadius: '50%',
                        background: theme.palette.mode === 'dark'
                          ? 'radial-gradient(circle, rgba(0, 229, 161, 0.2) 0%, transparent 70%)'
                          : 'radial-gradient(circle, rgba(0, 168, 107, 0.15) 0%, transparent 70%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                    })}
                  >
                    ✓
                  </Box>
                  <Typography 
                    className="service-text"
                    variant="body2" 
                    sx={{ 
                      color: 'text.primary',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {service}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* CTA Buttons - Enhanced Prompts */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 3 }}
            >
              {/* Primary CTA - Most Prominent */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={(theme) => ({
                  padding: '1.4rem 3.5rem',
                  borderRadius: '50px',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '0.5px',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #00E5A1 0%, #00d184 50%, #00FFB3 100%)'
                    : 'linear-gradient(135deg, #00a86b 0%, #00d184 50%, #00E5A1 100%)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #FF6B6B, #FF8E8E)'
                      : 'linear-gradient(135deg, #FF6B6B, #FF8787)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 0 12px rgba(255, 107, 107, 0.6), 0 0 24px rgba(255, 107, 107, 0.3)'
                      : '0 0 12px rgba(255, 107, 107, 0.5), 0 0 24px rgba(255, 107, 107, 0.2)',
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': {
                        transform: 'scale(1)',
                        opacity: 1,
                      },
                      '50%': {
                        transform: 'scale(1.2)',
                        opacity: 0.8,
                      },
                    },
                  },
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 12px 40px rgba(0, 229, 161, 0.6), 0 0 50px rgba(0, 209, 132, 0.4), 0 0 20px rgba(255, 107, 107, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    : '0 12px 40px rgba(0, 168, 107, 0.6), 0 0 50px rgba(0, 168, 107, 0.3), 0 0 20px rgba(255, 107, 107, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  color: '#ffffff',
                  border: theme.palette.mode === 'dark'
                    ? '2px solid rgba(0, 229, 161, 0.5)'
                    : '2px solid rgba(255, 255, 255, 0.3)',
                  textTransform: 'none',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #FF6B6B, #FF8E8E)'
                      : 'linear-gradient(135deg, #FF6B6B, #FF8787)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 0 12px rgba(255, 107, 107, 0.8), 0 0 24px rgba(255, 107, 107, 0.4)'
                      : '0 0 12px rgba(255, 107, 107, 0.7), 0 0 24px rgba(255, 107, 107, 0.3)',
                    animation: 'pulse-accent 2s ease-in-out infinite',
                    '@keyframes pulse-accent': {
                      '0%, 100%': {
                        transform: 'scale(1)',
                        opacity: 1,
                      },
                      '50%': {
                        transform: 'scale(1.15)',
                        opacity: 0.9,
                      },
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 0,
                    height: 0,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.5)',
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.6s, height 0.6s',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  },
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.04)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 25px 60px rgba(0, 229, 161, 0.8), 0 0 80px rgba(0, 209, 132, 0.6), 0 0 30px rgba(255, 107, 107, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                      : '0 25px 60px rgba(0, 168, 107, 0.8), 0 0 80px rgba(0, 168, 107, 0.5), 0 0 30px rgba(255, 107, 107, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #00FFB3 0%, #00E5A1 50%, #00FFC7 100%)'
                      : 'linear-gradient(135deg, #00d184 0%, #00E5A1 50%, #00FFB3 100%)',
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(0, 229, 161, 0.8)'
                      : 'rgba(255, 255, 255, 0.5)',
                    '&::before': {
                      width: '350px',
                      height: '350px',
                    },
                  },
                  '&:active': {
                    transform: 'translateY(-2px) scale(1.02)',
                  },
                })}
              >
                Saada Päring
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  →
                </Box>
              </Button>
              
              {/* Secondary CTA - Less Prominent */}
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('artists');
                    // Scroll to top after navigation
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }, 100);
                  } else {
                    // Fallback: scroll to section if onNavigate is not available
                    const artistsSection = document.getElementById('ourArtists');
                    if (artistsSection) {
                      artistsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                sx={(theme) => ({
                  padding: '1.4rem 3.5rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  letterSpacing: '0.5px',
                  border: theme.palette.mode === 'dark'
                    ? '2.5px solid rgba(0, 229, 161, 0.6)'
                    : '2.5px solid',
                  borderColor: 'primary.main',
                  color: theme.palette.mode === 'dark' ? '#00E5A1' : 'primary.main',
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(0, 229, 161, 0.08)'
                    : 'rgba(0, 168, 107, 0.05)',
                  textTransform: 'none',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 25px rgba(0, 229, 161, 0.2), inset 0 1px 0 rgba(0, 229, 161, 0.1)'
                    : '0 8px 25px rgba(0, 168, 107, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.1) 0%, transparent 50%)'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.08) 0%, transparent 50%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(0, 229, 161, 0.15)'
                      : 'rgba(0, 168, 107, 0.12)',
                    transform: 'translateY(-3px) scale(1.02)',
                    borderColor: theme.palette.mode === 'dark' ? '#00FFB3' : 'primary.light',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 15px 35px rgba(0, 229, 161, 0.35), 0 0 50px rgba(0, 229, 161, 0.2), inset 0 1px 0 rgba(0, 229, 161, 0.2)'
                      : '0 15px 35px rgba(0, 168, 107, 0.3), 0 0 50px rgba(0, 168, 107, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                    color: theme.palette.mode === 'dark' ? '#00FFB3' : 'primary.dark',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                  '&:active': {
                    transform: 'translateY(-1px) scale(1)',
                  },
                })}
              >
                Vaata Artistid
              </Button>
            </Stack>

            {/* Trust Indicators - Ability Enhancement */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 2, sm: 3 },
                mt: 4,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
                fontSize: '0.875rem',
                color: 'text.secondary',
              }}
            >
              {[
                'Tasuta Konsultatsioon',
                'Kiire Vastus',
                'Professionaalne Teenus',
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: { xs: 1.5, sm: 2 },
                    py: { xs: 0.75, sm: 1 },
                    borderRadius: '12px',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(0, 229, 161, 0.06)'
                      : 'rgba(0, 168, 107, 0.05)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(0, 229, 161, 0.15)'
                      : '1px solid rgba(0, 168, 107, 0.12)',
                    backdropFilter: 'blur(8px)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.1) 0%, transparent 100%)'
                        : 'linear-gradient(135deg, rgba(0, 168, 107, 0.08) 0%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(0, 229, 161, 0.12)'
                        : 'rgba(0, 168, 107, 0.1)',
                      borderColor: theme.palette.mode === 'dark'
                        ? 'rgba(0, 229, 161, 0.3)'
                        : 'rgba(0, 168, 107, 0.25)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 20px rgba(0, 229, 161, 0.15)'
                        : '0 8px 20px rgba(0, 168, 107, 0.12)',
                      '&::before': {
                        opacity: 1,
                      },
                      '& .trust-icon': {
                        transform: 'scale(1.25) rotate(360deg)',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #00E5A1, #00FFB3)'
                          : 'linear-gradient(135deg, #00a86b, #00d184)',
                        borderColor: theme.palette.mode === 'dark'
                          ? '#00FFB3'
                          : 'primary.light',
                        color: 'white',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 12px rgba(0, 229, 161, 0.4), 0 0 8px rgba(255, 107, 107, 0.3)'
                          : '0 4px 12px rgba(0, 168, 107, 0.3), 0 0 8px rgba(255, 107, 107, 0.25)',
                      },
                      '& .trust-text': {
                        color: 'primary.main',
                        fontWeight: 600,
                      },
                    },
                  })}
                >
                  <Box
                    className="trust-icon"
                    sx={(theme) => ({
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(0, 229, 161, 0.15)'
                        : 'rgba(0, 168, 107, 0.1)',
                      border: theme.palette.mode === 'dark'
                        ? '2px solid rgba(0, 229, 161, 0.3)'
                        : '2px solid rgba(0, 168, 107, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: -2,
                        borderRadius: '50%',
                        background: theme.palette.mode === 'dark'
                          ? 'radial-gradient(circle, rgba(0, 229, 161, 0.2) 0%, transparent 70%)'
                          : 'radial-gradient(circle, rgba(0, 168, 107, 0.15) 0%, transparent 70%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                    })}
                  >
                    ✓
                  </Box>
                  <Typography
                    className="trust-text"
                    variant="caption"
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Stack>
        </Box>

        {/* Right side - Image with Gradient Overlay */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 50%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '100%', md: '50%' },
            order: { xs: -1, md: 1 },
            position: 'relative',
          }}
        >
          {/* Gradient Overlay Container */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              borderRadius: theme => theme.shape.borderRadius * 2,
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: theme => theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 209, 132, 0.15) 0%, rgba(0, 168, 107, 0.25) 50%, rgba(10, 22, 40, 0.6) 100%)'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1) 0%, rgba(0, 168, 107, 0.2) 50%, rgba(255, 255, 255, 0.4) 100%)',
                zIndex: 1,
                pointerEvents: 'none',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: theme => theme.palette.mode === 'dark'
                  ? 'radial-gradient(circle at 30% 50%, rgba(0, 229, 161, 0.2) 0%, transparent 70%)'
                  : 'radial-gradient(circle at 30% 50%, rgba(0, 168, 107, 0.15) 0%, transparent 70%)',
                zIndex: 2,
                pointerEvents: 'none',
              },
            }}
          >
            <HeroImage
              src={getImagePath('hero-live-music.png')}
              alt="LendMuusik OÜ - professionaalsed artistid ja muusikud üritustele Eestis"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                position: 'relative',
                zIndex: 0,
                filter: theme => theme.palette.mode === 'dark' 
                  ? 'brightness(0.9) contrast(1.1)' 
                  : 'brightness(1.05) contrast(1.05)',
                transition: 'filter 0.3s ease',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
