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
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, sm: 3 },
            bgcolor: 'background.default',
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
              Miks Valida Meid?
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