import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../components/shared-theme/AppTheme.tsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MicIcon from '@mui/icons-material/Mic';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EventIcon from '@mui/icons-material/Event';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import DiamondIcon from '@mui/icons-material/Diamond';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import AppAppBar from '../components/marketing-page/components/AppAppBar.tsx';
import Footer from '../components/marketing-page/components/Footer.tsx';
import SEO from '../components/SEO.tsx';
import { getImagePath } from '../utils/imagePath';

const stats = [
  { number: 30, label: 'Aastat Kogemust', suffix: '+' },
  { number: 200, label: 'Artistid', suffix: '+' },
  { number: 1000, label: 'Üritust Aastas', suffix: '+' },
  { number: 100, label: 'Professionaalsus', suffix: '%' },
];

const services = [
  {
    icon: <MicIcon />,
    title: 'Teenused Artistidega',
    description: 'Pakume laia valikut professionaalseid artiste igat tüüpi üritustele - kontserdid, peod, ettevõtte üritused ja eraüritused.',
  },
  {
    icon: <LightbulbIcon />,
    title: 'Ürituste Korraldamine',
    description: 'Korraldame täielikke üritusi algusest lõpuni - planeerimisest kuni tehnilise toe ja koordineerimiseni.',
  },
  {
    icon: <MusicNoteIcon />,
    title: 'Ürituste Peokavade Koostamine',
    description: 'Koostame individuaalseid programmid, arvestades publiku taset ja tellija soove ning eelistusi.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Nõustamine Artistidega',
    description: 'Aitame valida sobivaimad artistid teie ürituse stiilile, eelarvele ja publiku eelistustele.',
  },
  {
    icon: <HeadphonesIcon />,
    title: 'Helitehnika Rent',
    description: 'Pakkume kvaliteetset helitehniliste seadmete renti professionaalse tehnilise toega.',
  },
  {
    icon: <DiamondIcon />,
    title: 'Artisti Esindamine',
    description: 'Esindame professionaalseid artiste ja garanteerime korrektseid esinemise tingimusi.',
  },
];

const values = [
  {
    icon: <AutoAwesomeIcon />,
    title: 'Võimalikult Kiire Meiepoolne Tellimine',
    description: 'Reageerime kiiresti ja efektiivselt teie päringutele',
  },
  {
    icon: <TheaterComedyIcon />,
    title: 'Mitmekesine Artistide Valik',
    description: 'Lai valik žanre ja stiile igale maitsele',
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Erinevate Zaanrite Esindajad',
    description: 'Klassikast kaasaegseni - kõik žanrid kaetud',
  },
  {
    icon: <StarIcon />,
    title: 'Professionaalid Tagavad Kvaliteedi',
    description: 'Ainult parimad ja kogenud artistid',
  },
  {
    icon: <GpsFixedIcon />,
    title: 'Vabastame Teid Lisatööst',
    description: 'Võtame kõik korralduslikud mured enda kanda',
  },
];

interface AboutPageProps {
  onNavigate?: (page: 'home' | 'about' | 'music-carriers' | 'artists') => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const theme = useTheme();
  const [animatedStats, setAnimatedStats] = useState<Record<number, boolean>>({});
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = statsRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !animatedStats[index]) {
              setAnimatedStats((prev) => ({ ...prev, [index]: true }));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRefs = statsRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    // Initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppTheme>
      <SEO
        title="Firmast | LendMuusik OÜ - 40+ Aastat Kogemust Artistide Vahendamisel"
        description="LendMuusik OÜ on Eesti juhtiv artistide agentuur, mis on tegutsenud üle 40 aasta. Tutvuge meie ajalooga, meeskonna ja teenustega."
        keywords="LendMuusik ajalugu, artistide agentuur Eestis, ürituste korraldamine, meeskond, teenused, kontakt"
        url="https://lendmusic.ee/about"
      />
      <CssBaseline enableColorScheme />
      <AppAppBar onNavigate={onNavigate} currentPage="about" />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          ...theme.applyStyles('dark', {
            bgcolor: '#0a1628',
          }),
        }}
      >
        {/* Hero Section */}
        <Box
          sx={(theme) => ({
            position: 'relative',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            pt: { xs: 12, md: 16 },
            pb: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundImage:
              'radial-gradient(ellipse 120% 80% at 50% -10%, hsl(210, 100%, 90%), transparent)',
            ...theme.applyStyles('dark', {
              backgroundImage:
                'radial-gradient(ellipse 120% 80% at 50% -10%, hsl(210, 100%, 16%), transparent)',
            }),
          })}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
            <Grid container spacing={4} alignItems="center">
              {/* Left side - Text content */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={(theme) => ({
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      fontWeight: 900,
                      mb: 2,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #ffffff, #00d184)'
                        : 'linear-gradient(135deg, #0a1628, #00a86b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    })}
                  >
                    Firmast
                  </Typography>
                  
                  {/* CUE - Visual Cue Enhancement */}
                  {scrollPosition < 100 && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 2,
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        animation: 'pulse 2s ease-in-out infinite',
                        '@keyframes pulse': {
                          '0%, 100%': {
                            opacity: 1,
                          },
                          '50%': {
                            opacity: 0.7,
                          },
                        },
                      }}
                    >
                      <NotificationsActiveIcon 
                        sx={{ 
                          color: 'primary.main',
                          fontSize: '1.5rem',
                          animation: 'bounce 2s ease-in-out infinite',
                          '@keyframes bounce': {
                            '0%, 100%': {
                              transform: 'translateY(0)',
                            },
                            '50%': {
                              transform: 'translateY(-5px)',
                            },
                          },
                        }} 
                      />
                      <Chip
                        label="40+ aastat kogemust!"
                        color="primary"
                        icon={<StarRoundedIcon />}
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          animation: 'slideIn 0.5s ease-out',
                          '@keyframes slideIn': {
                            from: {
                              transform: 'translateX(-20px)',
                              opacity: 0,
                            },
                            to: {
                              transform: 'translateX(0)',
                              opacity: 1,
                            },
                          },
                        }}
                      />
                    </Box>
                  )}
                  
                  {/* Value Proposition - REACTION Enhancement */}
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.95)' : 'text.primary',
                      lineHeight: 1.6,
                      fontWeight: 600,
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    })}
                  >
                    Loome unustamatu kogemuse teie sündmusele!
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={(theme) => ({
                      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                      lineHeight: 1.8,
                      fontWeight: 400,
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                    })}
                  >
                    Lendmuusik OÜ põhitegevuseks on meelelahutuse ürituste korraldamine. Samaks vahendame Artiste erinevate ürituste programmide koostamisel.
                  </Typography>

                  {/* Social Proof - Motivation Enhancement */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1.5, md: 2.5 },
                      mb: 3,
                      flexWrap: 'wrap',
                      justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark' 
                          ? 'rgba(0, 209, 132, 0.15)' 
                          : 'rgba(0, 168, 107, 0.1)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark' 
                          ? 'rgba(0, 209, 132, 0.3)' 
                          : 'rgba(0, 168, 107, 0.2)'}`,
                      }}
                    >
                      <StarRoundedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        5.0
                      </Typography>
                    </Box>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark' 
                          ? 'rgba(0, 209, 132, 0.15)' 
                          : 'rgba(0, 168, 107, 0.1)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark' 
                          ? 'rgba(0, 209, 132, 0.3)' 
                          : 'rgba(0, 168, 107, 0.2)'}`,
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        40+
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Aastat
                      </Typography>
                    </Box>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark' 
                          ? 'rgba(0, 209, 132, 0.15)' 
                          : 'rgba(0, 168, 107, 0.1)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark' 
                          ? 'rgba(0, 209, 132, 0.3)' 
                          : 'rgba(0, 168, 107, 0.2)'}`,
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        Professionaalne
                      </Typography>
                    </Box>
                  </Box>

                  {/* Key Features - Ability Enhancement */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                      gap: 1.5,
                      mb: 3,
                    }}
                  >
                    {[
                      'Ürituste Korraldamine',
                      'Artistide Vahendamine',
                      'Programmide Koostamine',
                      'Professionaalne Nõustamine',
                    ].map((feature, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          padding: 1.5,
                          background: (theme) => theme.palette.mode === 'dark'
                            ? 'rgba(0, 209, 132, 0.1)'
                            : 'rgba(0, 168, 107, 0.1)',
                          borderRadius: '12px',
                          border: (theme) => `1px solid ${theme.palette.mode === 'dark'
                            ? 'rgba(0, 209, 132, 0.2)'
                            : 'rgba(0, 168, 107, 0.2)'}`,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: (theme) => theme.palette.mode === 'dark'
                              ? 'rgba(0, 209, 132, 0.2)'
                              : 'rgba(0, 168, 107, 0.2)',
                            borderColor: (theme) => theme.palette.mode === 'dark'
                              ? 'rgba(0, 209, 132, 0.5)'
                              : 'rgba(0, 168, 107, 0.5)',
                            transform: 'translateX(5px)',
                          },
                        }}
                      >
                        <CheckCircleRoundedIcon 
                          sx={{ 
                            color: 'primary.main', 
                            fontSize: '1.5rem',
                            flexShrink: 0,
                          }} 
                        />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.primary',
                            fontWeight: 500,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* CTA Buttons - Enhanced Prompts */}
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ mt: 2 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                      setShowSuccessMessage(false);
                    }, 5000);
                  }}
                      sx={{
                        padding: '1rem 2.5rem',
                        borderRadius: '50px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        background: 'linear-gradient(135deg, #00a86b, #00d184)',
                        boxShadow: '0 10px 30px rgba(0, 168, 107, 0.4)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: 0,
                          height: 0,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.3)',
                          transform: 'translate(-50%, -50%)',
                          transition: 'width 0.6s, height 0.6s',
                        },
                        '&:hover': {
                          transform: 'translateY(-3px) scale(1.02)',
                          boxShadow: '0 15px 40px rgba(0, 168, 107, 0.6)',
                          '&::before': {
                            width: '300px',
                            height: '300px',
                          },
                        },
                        '&:active': {
                          transform: 'translateY(-1px) scale(1)',
                        },
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Võta Ühendust
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('artists');
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          }, 100);
                        } else {
                          setTimeout(() => {
                            const artistsSection = document.getElementById('our-artists');
                            artistsSection?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }
                      }}
                      sx={{
                        padding: '1rem 2.5rem',
                        borderRadius: '50px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(0, 168, 107, 0.3)',
                        },
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Vaata Artistid
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              
              {/* Right side - Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: { xs: 300, md: 400 },
                  }}
                >
                  <Box
                    component="img"
                    src={getImagePath('karavan-live-2.jpg')}
                    alt="Live music performance"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 4,
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 20px 60px rgba(0, 168, 107, 0.3)'
                          : '0 20px 60px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Story Section */}
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            bgcolor: 'background.default',
            ...theme.applyStyles('dark', {
              bgcolor: '#0a1628',
            }),
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={(theme) => ({
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      mb: 2,
                      color: 'primary.main',
                      fontWeight: 800,
                      ...theme.applyStyles('dark', {
                        color: '#00d184',
                      }),
                    })}
                  >
                    Meie Lugu
                  </Typography>

                  {/* Social Proof - Motivation Enhancement */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1, md: 2 },
                      mb: 3,
                      flexWrap: 'wrap',
                      justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.15)'
                          : 'rgba(0, 168, 107, 0.1)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.3)'
                          : 'rgba(0, 168, 107, 0.2)'}`,
                      }}
                    >
                      <EventIcon sx={{ color: 'primary.main', fontSize: '1.25rem' }} />
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        Alates 1994
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.15)'
                          : 'rgba(0, 168, 107, 0.1)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.3)'
                          : 'rgba(0, 168, 107, 0.2)'}`,
                      }}
                    >
                      <StarRoundedIcon sx={{ color: 'primary.main', fontSize: '1.25rem' }} />
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        40+ Aastat
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.15)'
                          : 'rgba(0, 168, 107, 0.1)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.3)'
                          : 'rgba(0, 168, 107, 0.2)'}`,
                      }}
                    >
                      <HandshakeIcon sx={{ color: 'primary.main', fontSize: '1.25rem' }} />
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        Rahvusvaheline
                      </Typography>
                    </Box>
                  </Box>

                  {/* Value Proposition - Motivation Enhancement */}
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.95)' : 'text.primary',
                      lineHeight: 1.6,
                      fontWeight: 600,
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                    })}
                  >
                    Pikajaline kogemus ja usaldusväärne partner
                  </Typography>

                  {/* Story Content - Ability Enhancement */}
                  <Box sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.5,
                        mb: 2.5,
                        p: 2,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.05)'
                          : 'rgba(0, 168, 107, 0.05)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.1)'
                          : 'rgba(0, 168, 107, 0.1)'}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: (theme) => theme.palette.mode === 'dark'
                            ? 'rgba(0, 209, 132, 0.1)'
                            : 'rgba(0, 168, 107, 0.1)',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          color: 'primary.main',
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          mt: 0.25,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '1.1rem',
                          lineHeight: 1.8,
                        }}
                      >
                        Rahvusvahelise nimega Lend Music tegevusalaks on Euroopa liinidistusplaadistus firmade helikandijate müügi esindamine Eestis alates 1994.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.5,
                        mb: 2.5,
                        p: 2,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.05)'
                          : 'rgba(0, 168, 107, 0.05)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.1)'
                          : 'rgba(0, 168, 107, 0.1)'}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: (theme) => theme.palette.mode === 'dark'
                            ? 'rgba(0, 209, 132, 0.1)'
                            : 'rgba(0, 168, 107, 0.1)',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          color: 'primary.main',
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          mt: 0.25,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '1.1rem',
                          lineHeight: 1.8,
                        }}
                      >
                        Teeme koostööd Eesti kultuuriasutustega, erinevate firmade ja ettevõtetega ning ka paljude ürituste korraldajatega.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.5,
                        p: 2,
                        borderRadius: 2,
                        bgcolor: (theme) => theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.05)'
                          : 'rgba(0, 168, 107, 0.05)',
                        border: (theme) => `1px solid ${theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.1)'
                          : 'rgba(0, 168, 107, 0.1)'}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: (theme) => theme.palette.mode === 'dark'
                            ? 'rgba(0, 209, 132, 0.1)'
                            : 'rgba(0, 168, 107, 0.1)',
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          color: 'primary.main',
                          fontSize: '1.5rem',
                          flexShrink: 0,
                          mt: 0.25,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '1.1rem',
                          lineHeight: 1.8,
                        }}
                      >
                        Meie teenuste põhimõtteks on kliendile teenuse pakkumisel ka peothtu esinemiskava koostamine, nõustamine. Arvestame alati esinemiskava koostamisel publiku intellektuaalset taset ning Tellija soove.
                      </Typography>
                    </Box>
                  </Box>

                  {/* CTA Button - Enhanced Prompts */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                      setShowSuccessMessage(false);
                    }, 5000);
                  }}
                    sx={{
                      padding: '1rem 2.5rem',
                      borderRadius: '50px',
                      fontWeight: 700,
                      fontSize: '1rem',
                      background: 'linear-gradient(135deg, #00a86b, #00d184)',
                      boxShadow: '0 10px 30px rgba(0, 168, 107, 0.4)',
                      position: 'relative',
                      overflow: 'hidden',
                      width: { xs: '100%', sm: 'auto' },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 0,
                        height: 0,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.3)',
                        transform: 'translate(-50%, -50%)',
                        transition: 'width 0.6s, height 0.6s',
                      },
                      '&:hover': {
                        transform: 'translateY(-3px) scale(1.02)',
                        boxShadow: '0 15px 40px rgba(0, 168, 107, 0.6)',
                        '&::before': {
                          width: '300px',
                          height: '300px',
                        },
                      },
                      '&:active': {
                        transform: 'translateY(-1px) scale(1)',
                      },
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Võta Ühendust
                  </Button>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={getImagePath('about-story-image.png')}
                  alt="LendMuusik OÜ ajalugu ja meeskond - 40+ aastat kogemust artistide vahendamisel"
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, md: 400 },
                    objectFit: 'cover',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 20px 60px rgba(0, 168, 107, 0.3)'
                        : '0 20px 60px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Stats Section */}
        {/* <Box
          sx={(theme) => ({
            py: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #0a1628, #0d131b, #0a1628)'
              : 'linear-gradient(135deg, #f8f9fa, rgba(0, 168, 107, 0.05))',
            position: 'relative',
            '&::before': theme.palette.mode === 'dark' ? {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(ellipse at center, rgba(0, 209, 132, 0.03) 0%, transparent 70%)',
              pointerEvents: 'none',
            } : {},
          })}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                  <Card
                    ref={(el) => {
                      statsRefs.current[index] = el;
                    }}
                    sx={(theme) => ({
                      textAlign: 'center',
                      p: { xs: 2.5, md: 3.5 },
                      background: theme.palette.mode === 'dark'
                        ? '#1a1a1a'
                        : 'rgba(255, 255, 255, 0.9)',
                      border: theme.palette.mode === 'dark'
                        ? '1px solid rgba(0, 209, 132, 0.2)'
                        : '1px solid rgba(0, 168, 107, 0.2)',
                      borderRadius: 4,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 4px 20px rgba(0, 0, 0, 0.5)'
                        : '0 4px 20px rgba(0, 0, 0, 0.08)',
                      '&:hover': {
                        transform: 'translateY(-10px) scale(1.02)',
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.5)'
                          : 'rgba(0, 168, 107, 0.4)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 20px 60px rgba(0, 209, 132, 0.4), 0 0 40px rgba(0, 209, 132, 0.1)'
                          : '0 20px 40px rgba(0, 168, 107, 0.2)',
                        background: theme.palette.mode === 'dark'
                          ? '#1f1f1f'
                          : 'rgba(255, 255, 255, 1)',
                      },
                    })}
                  >
                    <Typography
                      variant="h2"
                      sx={(theme) => ({
                        fontSize: { xs: '2rem', md: '3.5rem' },
                        fontWeight: 900,
                        mb: 1,
                        color: theme.palette.mode === 'dark'
                          ? '#00ff80'
                          : 'primary.main',
                        textShadow: theme.palette.mode === 'dark'
                          ? '0 0 20px rgba(0, 255, 128, 0.3), 0 0 40px rgba(0, 255, 128, 0.1)'
                          : 'none',
                        transition: 'all 0.3s ease',
                        ...theme.applyStyles('dark', {
                          color: '#00ff80',
                        }),
                      })}
                    >
                      {animatedStats[index] ? `${stat.number}${stat.suffix}` : '0'}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={(theme) => ({
                        color: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'text.secondary',
                        fontSize: '1rem',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                      })}
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box> */}

        {/* Services Section */}
        <Box
          id="services"
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            bgcolor: 'background.default',
            ...theme.applyStyles('dark', {
              bgcolor: '#0a1628',
            }),
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={(theme) => ({
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 900,
                  mb: 2,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #ffffff, #00d184)'
                    : 'linear-gradient(135deg, #0a1628, #00a86b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                })}
              >
                Meelelahutus Jaguneb
              </Typography>
              
              {/* Value Proposition - Motivation Enhancement */}
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 400,
                  maxWidth: '700px',
                  mx: 'auto',
                  mb: 3,
                })}
              >
                Pakume laia valikut professionaalseid teenuseid, mis tagavad teie ürituse edu
              </Typography>

              {/* Social Proof - Motivation Enhancement */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 2, md: 4 },
                  mb: 4,
                  flexWrap: 'wrap',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CheckCircleRoundedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    40+ Aastat Kogemust
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CheckCircleRoundedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Professionaalne Meeskond
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CheckCircleRoundedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Individuaalne Lähenemine
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Card
                    sx={(theme) => ({
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: theme.palette.mode === 'dark'
                        ? '#1a1a1a'
                        : '#ffffff',
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 209, 132, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                      borderRadius: 4,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : '0 4px 20px rgba(0, 0, 0, 0.08)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(0, 209, 132, 0.05), rgba(0, 168, 107, 0.05))',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.5)'
                          : 'rgba(0, 168, 107, 0.4)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 20px 60px rgba(0, 209, 132, 0.3), 0 0 40px rgba(0, 209, 132, 0.1)'
                          : '0 20px 50px rgba(0, 168, 107, 0.2)',
                        '&::before': {
                          opacity: 1,
                        },
                      },
                    })}
                  >
                    <Box
                      sx={{
                        width: { xs: 60, md: 70 },
                        height: { xs: 60, md: 70 },
                        background: 'linear-gradient(135deg, #00a86b, #00d184)',
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        position: 'relative',
                        zIndex: 1,
                        color: 'white',
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 168, 107, 0.3)',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                          boxShadow: '0 8px 25px rgba(0, 168, 107, 0.5)',
                        },
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={(theme) => ({
                        mb: 1.5,
                        position: 'relative',
                        zIndex: 1,
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.95)' : 'text.primary',
                        fontWeight: 700,
                      })}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={(theme) => ({
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                        lineHeight: 1.8,
                        position: 'relative',
                        zIndex: 1,
                        mb: 3,
                        flexGrow: 1,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      })}
                    >
                      {service.description}
                    </Typography>
                    
                    {/* CTA Button - Enhanced Prompts */}
                    <Button
                      variant="outlined"
                      color="primary"
                      size="medium"
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                      setShowSuccessMessage(false);
                    }, 5000);
                  }}
                      sx={{
                        alignSelf: 'flex-start',
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '50px',
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        borderWidth: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderWidth: 2,
                          transform: 'translateX(5px)',
                          boxShadow: (theme) => theme.palette.mode === 'dark'
                            ? '0 8px 20px rgba(0, 209, 132, 0.3)'
                            : '0 8px 20px rgba(0, 168, 107, 0.2)',
                        },
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Rohkem Infot
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Values Section */}
        <Box
          sx={(theme) => ({
            py: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            ...theme.applyStyles('dark', {
              bgcolor: '#0a1628 !important',
              background: '#0a1628 !important',
            }),
            bgcolor: theme.palette.mode === 'dark' ? '#0a1628' : undefined,
            background: theme.palette.mode === 'dark'
              ? '#0a1628'
              : 'linear-gradient(135deg, #f8f9fa, rgba(0, 168, 107, 0.05))',
            position: 'relative',
          })}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={(theme) => ({
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 900,
                  mb: 2,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #ffffff, #00d184)'
                    : 'linear-gradient(135deg, #0a1628, #00a86b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                })}
              >
                Miks Kasutada Lend Muusik Teenuseid
              </Typography>
              
              {/* Value Proposition - Motivation Enhancement */}
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 400,
                  maxWidth: '700px',
                  mx: 'auto',
                  mb: 3,
                })}
              >
                Valige meid, kuna pakume professionaalseid lahendusi ja individuaalset lähenemist
              </Typography>

              {/* Social Proof - Motivation Enhancement */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 2, md: 4 },
                  mb: 4,
                  flexWrap: 'wrap',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CheckCircleRoundedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Tuhanded Rõõmsad Kliendid
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CheckCircleRoundedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Garanteeritud Kvaliteet
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CheckCircleRoundedIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    24/7 Toetus
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Grid container spacing={3}>
              {values.map((value, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card
                    sx={(theme) => ({
                      p: { xs: 2.5, md: 3.5 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: theme.palette.mode === 'dark'
                        ? '#1a1a1a'
                        : '#ffffff',
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 209, 132, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                      borderRadius: 4,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : '0 4px 20px rgba(0, 0, 0, 0.08)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(0, 209, 132, 0.05), rgba(0, 168, 107, 0.05))',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.5)'
                          : 'rgba(0, 168, 107, 0.4)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 20px 60px rgba(0, 209, 132, 0.3), 0 0 40px rgba(0, 209, 132, 0.1)'
                          : '0 20px 50px rgba(0, 168, 107, 0.2)',
                        '&::before': {
                          opacity: 1,
                        },
                      },
                    })}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 50, md: 60 },
                          height: { xs: 50, md: 60 },
                          background: 'linear-gradient(135deg, #00a86b, #00d184)',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: 'white',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(0, 168, 107, 0.3)',
                          position: 'relative',
                          zIndex: 1,
                          '&:hover': {
                            transform: 'scale(1.1) rotate(5deg)',
                            boxShadow: '0 8px 25px rgba(0, 168, 107, 0.5)',
                          },
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Box sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={(theme) => ({
                            color: theme.palette.mode === 'dark' ? '#00d184' : 'primary.main',
                            mb: 1,
                            fontSize: { xs: '1.1rem', md: '1.2rem' },
                            fontWeight: 700,
                            lineHeight: 1.3,
                          })}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={(theme) => ({
                            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                            fontSize: { xs: '0.9rem', md: '0.95rem' },
                            lineHeight: 1.6,
                          })}
                        >
                          {value.description}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* CTA Link - Enhanced Prompts */}
                    <Box
                      sx={{
                        mt: 'auto',
                        pt: 2,
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <Button
                        variant="text"
                        color="primary"
                        size="small"
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                      setShowSuccessMessage(false);
                    }, 5000);
                  }}
                        sx={{
                          px: 2,
                          py: 0.5,
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(5px)',
                            backgroundColor: 'transparent',
                          },
                        }}
                        endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem' }} />}
                      >
                        Rohkem Infot
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        {/* <Box
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            background: 'linear-gradient(135deg, #00a86b, #00d184)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '"🎵"',
              position: 'absolute',
              fontSize: '20rem',
              opacity: 0.05,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'rotate 20s linear infinite',
            },
            '@keyframes rotate': {
              from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
              to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
            },
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
                color: 'white',
              }}
            >
              Loome Koos Elamusi
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.3rem' },
                mb: 4,
                color: 'rgba(255, 255, 255, 0.95)',
                lineHeight: 1.8,
              }}
            >
              Esindame professionaalseid artiste ja garanteerime esimese või ürituse korraldamise. Koostöö ja esinemine saab teoks läbi rääkimiste kompromissilahendusel ja vormistatakse lepinguga.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                onNavigate?.('home');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 6,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1.1rem',
                textTransform: 'none',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              Võtke Ühendust
            </Button>
          </Container>
        </Box> */}

        {/* EVALUATION Section - Benefits Summary */}
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 3 },
            bgcolor: 'background.default',
            ...theme.applyStyles('dark', {
              bgcolor: '#0a1628',
            }),
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800,
                textAlign: 'center',
                mb: 6,
                color: 'text.primary',
              }}
            >
              Meie Eelised
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 209, 132, 0.1), rgba(0, 168, 107, 0.05))'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 209, 132, 0.3)' : 'rgba(0, 168, 107, 0.3)'}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 40px rgba(0, 209, 132, 0.2)'
                        : '0 12px 40px rgba(0, 168, 107, 0.2)',
                    },
                  })}
                >
                  <ThumbUpIcon sx={{ fontSize: '3.5rem', color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Usaldusväärsus
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    40+ aastat kogemust garanteerib professionaalse teenuse ja kvaliteetsed tulemused.
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 209, 132, 0.1), rgba(0, 168, 107, 0.05))'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 209, 132, 0.3)' : 'rgba(0, 168, 107, 0.3)'}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 40px rgba(0, 209, 132, 0.2)'
                        : '0 12px 40px rgba(0, 168, 107, 0.2)',
                    },
                  })}
                >
                  <CompareArrowsIcon sx={{ fontSize: '3.5rem', color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Lai Valik
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Üle 200 artisti erinevatest žanritest. Leiame täpselt õige lahenduse teie ürituse jaoks.
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 209, 132, 0.1), rgba(0, 168, 107, 0.05))'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 209, 132, 0.3)' : 'rgba(0, 168, 107, 0.3)'}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 12px 40px rgba(0, 209, 132, 0.2)'
                        : '0 12px 40px rgba(0, 168, 107, 0.2)',
                    },
                  })}
                >
                  <AccessTimeIcon sx={{ fontSize: '3.5rem', color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Kiire Reageerimine
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Reageerime teie päringutele 24 tunni jooksul. Täielik toetus ürituse planeerimisel.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* TIMING - Contextual Cue */}
        {scrollPosition > 400 && scrollPosition < 1200 && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 24,
              left: 24,
              zIndex: 1000,
              animation: 'fadeIn 0.3s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            <Chip
              label="Vaata meie teenuseid"
              color="primary"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 168, 107, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(0, 168, 107, 0.4)',
                },
              }}
            />
          </Box>
        )}

        <Footer onNavigate={onNavigate} />

        {/* EXECUTION - Success Message */}
        {showSuccessMessage && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 9999,
              animation: 'slideUp 0.3s ease-out',
              '@keyframes slideUp': {
                from: {
                  transform: 'translateY(100px)',
                  opacity: 0,
                },
                to: {
                  transform: 'translateY(0)',
                  opacity: 1,
                },
              },
            }}
          >
            <Alert
              severity="success"
              icon={<CheckCircleIcon />}
              onClose={() => setShowSuccessMessage(false)}
              sx={{
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                minWidth: 300,
              }}
            >
              Päring edukalt saadetud! Võtame teiega ühendust varsti.
            </Alert>
          </Box>
        )}
      </Box>
    </AppTheme>
  );
}
