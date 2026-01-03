import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
  objectFit: 'contain',
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'center' },
          gap: { xs: 4, md: 6 },
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
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
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: '100%', maxWidth: { md: '600px' } }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
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
              sx={{
                color: 'text.secondary',
                fontSize: '1.125rem',
                lineHeight: 1.6,
                mb: 1,
              }}
            >
              Artistide tellimine, ürituste korraldamine, helitehnika rent, valgustehnika rent.
            </Typography>

            {/* Social Proof - Motivation Enhancement */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 2,
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  500+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Üritust
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  200+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Artistid
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  30+
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Aastat Kogemust
                </Typography>
              </Box>
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
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    padding: 1.5,
                    background: 'rgba(0, 168, 107, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 168, 107, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(0, 168, 107, 0.2)',
                      borderColor: 'rgba(0, 168, 107, 0.5)',
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      background: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '2px solid black',
                      color: 'black',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
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
                sx={{
                  padding: '1.25rem 3rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '1.1rem',
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
                sx={{
                  padding: '1.25rem 3rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  color: 'text.primary',
                  background: 'transparent',
                  '&:hover': {
                    background: 'rgba(0, 168, 107, 0.1)',
                    transform: 'translateY(-2px)',
                    borderColor: 'primary.light',
                  },
                }}
              >
                Vaata Artistid
              </Button>
            </Stack>

            {/* Trust Indicators - Ability Enhancement */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                mt: 3,
                flexWrap: 'wrap',
                fontSize: '0.875rem',
                color: 'text.secondary',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'white',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  ✓
                </Box>
                <Typography variant="caption">Tasuta Konsultatsioon</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'white',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  ✓
                </Box>
                <Typography variant="caption">Kiire Vastus</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'white',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  ✓
                </Box>
                <Typography variant="caption">Professionaalne Teenus</Typography>
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* Right side - Image */}
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 50%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '100%', md: '50%' },
            order: { xs: -1, md: 1 },
          }}
        >
          <HeroImage
            src="/hero-live-music.png"
            alt="Live music performance"
            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
