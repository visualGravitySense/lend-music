import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AppTheme from '../components/shared-theme/AppTheme.tsx';
import AppAppBar from '../components/marketing-page/components/AppAppBar.tsx';
import Hero from '../components/marketing-page/components/Hero.tsx';
import LogoCollection from '../components/marketing-page/components/LogoCollection.tsx';
import OurArtists from '../components/marketing-page/components/OurArtists.tsx';
import MusicCarriers from '../components/marketing-page/components/MusicCarriers.tsx';
import Testimonials from '../components/marketing-page/components/Testimonials.tsx';
import Contact from '../components/marketing-page/components/Contact.tsx';
import Footer from '../components/marketing-page/components/Footer.tsx';
import SEO from '../components/SEO.tsx';

interface MarketingPageProps {
  disableCustomTheme?: boolean;
  onNavigate?: (page: 'home' | 'about' | 'music-carriers' | 'artists') => void;
}

export default function MarketingPage({ disableCustomTheme, onNavigate }: MarketingPageProps) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <SEO
        title="LendMuusik OÜ | Artistide Agentuur ja Helikandijate Müük Eestis"
        description="LendMuusik OÜ - professionaalne artistide agentuur Eestis. Pakume artiste üritustele, müüme klassikalist muusikat CD ja DVD kandjatel. 40+ aastat kogemust, üle 500 edukat üritust."
        keywords="artistide agentuur, muusikud üritustele, klassikaline muusika, CD müük, DVD müük, ürituste korraldamine, tantsumuusika, salongimuusika, Eesti artistid, LendMuusik"
        url="https://lendmusic.ee"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "LendMuusik OÜ",
          "url": "https://lendmusic.ee",
          "description": "Professionaalne artistide agentuur ja helikandijate müük Eestis",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://lendmusic.ee/?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <CssBaseline enableColorScheme />

      <AppAppBar onNavigate={onNavigate} currentPage="home" />
      
      {/* CUE - Visual Cue Enhancement */}
      {scrollPosition < 100 && (
        <Box
          sx={{
            position: 'fixed',
            top: 80,
            right: 24,
            zIndex: 1000,
            animation: 'slideInRight 0.5s ease-out',
            '@keyframes slideInRight': {
              from: {
                transform: 'translateX(200px)',
                opacity: 0,
              },
              to: {
                transform: 'translateX(0)',
                opacity: 1,
              },
            },
          }}
        >
          <Alert
            severity="info"
            icon={<NotificationsActiveIcon />}
            sx={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              borderRadius: 2,
              maxWidth: 300,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Uued artistid saabunud!
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Vaata meie uusimaid artiste
            </Typography>
          </Alert>
        </Box>
      )}

      <Hero onNavigate={onNavigate} />
      <div>
        <LogoCollection />
        
        {/* TIMING - Contextual Cue for Artists Section */}
        {scrollPosition > 200 && scrollPosition < 800 && (
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
              label="Vaata meie artiste"
              color="primary"
              onClick={() => {
                const artistsSection = document.getElementById('ourArtists');
                artistsSection?.scrollIntoView({ behavior: 'smooth' });
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
        
        <OurArtists />
        <MusicCarriers />
        
        {/* EVALUATION Section - Benefits & Value Proposition */}
        <Box
          sx={(theme) => ({
            py: { xs: 8, md: 12 },
            px: { xs: 3, sm: 4 },
            bgcolor: 'background.default',
            position: 'relative',
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, hsl(220, 30%, 7%) 0%, hsl(220, 30%, 8%) 50%, hsl(220, 30%, 7%) 100%)'
              : 'linear-gradient(180deg, hsl(0, 0%, 99%) 0%, hsl(220, 35%, 97%) 50%, hsl(0, 0%, 99%) 100%)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme.palette.mode === 'dark'
                ? 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(0, 229, 161, 0.06) 0%, transparent 60%)'
                : 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(0, 168, 107, 0.04) 0%, transparent 60%)',
              pointerEvents: 'none',
            },
          })}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={(theme) => ({
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800,
                textAlign: 'center',
                mb: 8,
                color: 'text.primary',
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  borderRadius: '2px',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, transparent, #FF6B6B, transparent)'
                    : 'linear-gradient(90deg, transparent, #FF6B6B, transparent)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 0 16px rgba(255, 107, 107, 0.6)'
                    : '0 0 16px rgba(255, 107, 107, 0.5)',
                },
              })}
            >
              Miks Valida Meid?
            </Typography>
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: { xs: 3, sm: 4, md: 5 },
                    height: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15) 0%, rgba(0, 209, 132, 0.1) 50%, rgba(0, 168, 107, 0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.15) 0%, rgba(0, 168, 107, 0.1) 50%, rgba(0, 168, 107, 0.08) 100%)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.25)' : 'rgba(0, 168, 107, 0.2)'}`,
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 4px 16px rgba(0, 229, 161, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)'
                      : '0 4px 16px rgba(0, 168, 107, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: theme.palette.mode === 'dark'
                        ? 'radial-gradient(circle at 50% 0%, rgba(0, 229, 161, 0.12) 0%, transparent 60%)'
                        : 'radial-gradient(circle at 50% 0%, rgba(0, 168, 107, 0.1) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(0, 229, 161, 0.25), 0 16px 48px rgba(0, 209, 132, 0.2), 0 24px 64px rgba(0, 0, 0, 0.3)'
                        : '0 8px 32px rgba(0, 168, 107, 0.2), 0 16px 48px rgba(0, 168, 107, 0.15), 0 24px 64px rgba(0, 0, 0, 0.08)',
                      '&::before': {
                        opacity: 1,
                      },
                      cursor: 'pointer',
                    },
                  })}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={(theme) => ({
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          background: theme.palette.mode === 'dark'
                            ? 'radial-gradient(circle, rgba(0, 229, 161, 0.3) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0, 168, 107, 0.25) 0%, transparent 70%)',
                          filter: 'blur(20px)',
                          opacity: 0.6,
                          animation: 'pulse 2s ease-in-out infinite',
                          '@keyframes pulse': {
                            '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                            '50%': { opacity: 0.8, transform: 'scale(1.1)' },
                          },
                        },
                      })}
                    >
                      <ThumbUpIcon 
                        sx={{ 
                          fontSize: { xs: '4rem', sm: '4.5rem', md: '5rem' },
                          position: 'relative',
                          zIndex: 1,
                          background: (theme) => theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #00E5A1, #00D184, #00C175)'
                            : 'linear-gradient(135deg, #00a86b, #00d184, #00b870)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: (theme) => theme.palette.mode === 'dark'
                            ? 'drop-shadow(0 0 12px rgba(0, 229, 161, 0.6)) drop-shadow(0 4px 8px rgba(0, 229, 161, 0.4))'
                            : 'drop-shadow(0 0 10px rgba(0, 168, 107, 0.5)) drop-shadow(0 4px 8px rgba(0, 168, 107, 0.3))',
                        }} 
                      />
                    </Box>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>
                    Professionaalne Teenus
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Üle 40 aasta kogemus artistide vahendamisel ja ürituste korraldamisel. Usaldusväärne partner teie sündmuste jaoks.
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: { xs: 3, sm: 4, md: 5 },
                    height: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15) 0%, rgba(0, 209, 132, 0.1) 50%, rgba(0, 168, 107, 0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.15) 0%, rgba(0, 168, 107, 0.1) 50%, rgba(0, 168, 107, 0.08) 100%)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.25)' : 'rgba(0, 168, 107, 0.2)'}`,
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 4px 16px rgba(0, 229, 161, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)'
                      : '0 4px 16px rgba(0, 168, 107, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: theme.palette.mode === 'dark'
                        ? 'radial-gradient(circle at 50% 0%, rgba(0, 229, 161, 0.12) 0%, transparent 60%)'
                        : 'radial-gradient(circle at 50% 0%, rgba(0, 168, 107, 0.1) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(0, 229, 161, 0.25), 0 16px 48px rgba(0, 209, 132, 0.2), 0 24px 64px rgba(0, 0, 0, 0.3)'
                        : '0 8px 32px rgba(0, 168, 107, 0.2), 0 16px 48px rgba(0, 168, 107, 0.15), 0 24px 64px rgba(0, 0, 0, 0.08)',
                      '&::before': {
                        opacity: 1,
                      },
                      cursor: 'pointer',
                    },
                  })}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={(theme) => ({
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          background: theme.palette.mode === 'dark'
                            ? 'radial-gradient(circle, rgba(0, 229, 161, 0.3) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0, 168, 107, 0.25) 0%, transparent 70%)',
                          filter: 'blur(20px)',
                          opacity: 0.6,
                          animation: 'pulse 2s ease-in-out infinite',
                          '@keyframes pulse': {
                            '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                            '50%': { opacity: 0.8, transform: 'scale(1.1)' },
                          },
                        },
                      })}
                    >
                      <CompareArrowsIcon 
                        sx={{ 
                          fontSize: { xs: '4rem', sm: '4.5rem', md: '5rem' },
                          position: 'relative',
                          zIndex: 1,
                          background: (theme) => theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #00E5A1, #00D184, #00C175)'
                            : 'linear-gradient(135deg, #00a86b, #00d184, #00b870)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: (theme) => theme.palette.mode === 'dark'
                            ? 'drop-shadow(0 0 12px rgba(0, 229, 161, 0.6)) drop-shadow(0 4px 8px rgba(0, 229, 161, 0.4))'
                            : 'drop-shadow(0 0 10px rgba(0, 168, 107, 0.5)) drop-shadow(0 4px 8px rgba(0, 168, 107, 0.3))',
                        }} 
                      />
                    </Box>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>
                    Lai Valik Artistid
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Laiaulatuslik portfell artiste erinevatest žanritest. Leiame täpselt õige lahenduse teie ürituse jaoks.
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: { xs: 3, sm: 4, md: 5 },
                    height: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15) 0%, rgba(0, 209, 132, 0.1) 50%, rgba(0, 168, 107, 0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.15) 0%, rgba(0, 168, 107, 0.1) 50%, rgba(0, 168, 107, 0.08) 100%)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.25)' : 'rgba(0, 168, 107, 0.2)'}`,
                    borderRadius: '12px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 4px 16px rgba(0, 229, 161, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)'
                      : '0 4px 16px rgba(0, 168, 107, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: theme.palette.mode === 'dark'
                        ? 'radial-gradient(circle at 50% 0%, rgba(0, 229, 161, 0.12) 0%, transparent 60%)'
                        : 'radial-gradient(circle at 50% 0%, rgba(0, 168, 107, 0.1) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(0, 229, 161, 0.25), 0 16px 48px rgba(0, 209, 132, 0.2), 0 24px 64px rgba(0, 0, 0, 0.3)'
                        : '0 8px 32px rgba(0, 168, 107, 0.2), 0 16px 48px rgba(0, 168, 107, 0.15), 0 24px 64px rgba(0, 0, 0, 0.08)',
                      '&::before': {
                        opacity: 1,
                      },
                      cursor: 'pointer',
                    },
                  })}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={(theme) => ({
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          background: theme.palette.mode === 'dark'
                            ? 'radial-gradient(circle, rgba(0, 229, 161, 0.3) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0, 168, 107, 0.25) 0%, transparent 70%)',
                          filter: 'blur(20px)',
                          opacity: 0.6,
                          animation: 'pulse 2s ease-in-out infinite',
                          '@keyframes pulse': {
                            '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                            '50%': { opacity: 0.8, transform: 'scale(1.1)' },
                          },
                        },
                      })}
                    >
                      <AccessTimeIcon 
                        sx={{ 
                          fontSize: { xs: '4rem', sm: '4.5rem', md: '5rem' },
                          position: 'relative',
                          zIndex: 1,
                          background: (theme) => theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #00E5A1, #00D184, #00C175)'
                            : 'linear-gradient(135deg, #00a86b, #00d184, #00b870)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: (theme) => theme.palette.mode === 'dark'
                            ? 'drop-shadow(0 0 12px rgba(0, 229, 161, 0.6)) drop-shadow(0 4px 8px rgba(0, 229, 161, 0.4))'
                            : 'drop-shadow(0 0 10px rgba(0, 168, 107, 0.5)) drop-shadow(0 4px 8px rgba(0, 168, 107, 0.3))',
                        }} 
                      />
                    </Box>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>
                    Kiire Reageerimine
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    Reageerime teie päringutele 24 tunni jooksul. Täielik toetus ürituse planeerimisel ja korraldamisel.
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            {/* ABILITY - Social Proof Enhancement */}
            <Box
              sx={{
                mt: 8,
                textAlign: 'center',
                p: 4,
                borderRadius: 3,
                bgcolor: 'background.paper',
                border: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                <StarRoundedIcon sx={{ color: 'warning.main', fontSize: '2rem' }} />
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  5.0
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  / 5.0
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                Üle 500 rahuloleva kliendi
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Chip label="40+ aastat kogemust" color="primary" />
                <Chip label="500+ edukat üritust" color="primary" />
                <Chip label="100+ artisti" color="primary" />
              </Box>
            </Box>
          </Container>
        </Box>

        <Divider />
        <Testimonials />
        <Divider />
        <Contact onFormSubmit={handleFormSubmit} />
        <Divider />
        <Footer onNavigate={onNavigate} />
      </div>

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
    </AppTheme>
  );
}