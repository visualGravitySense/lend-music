import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PeopleIcon from '@mui/icons-material/People';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const artistCategories = [
  {
    title: 'TANTSUMUUSIKA',
    description: 'Energiline muusika, mis paneb kõik tantsima',
    artists: [
      'Airi & Party',
      'Alma',
      'Bad Orrange',
      'Karavan',
      'Mait ja Mikko Maltis',
      'Sade',
      'The SKYLINE',
    ],
  },
  {
    title: 'SALONGIMUUSIKA',
    description: 'Elegantne muusika eriliseks õhkkonnaks',
    artists: [
      'Alen Veziko',
      'Beati Mandolini',
      'Helin-Mari Arderi Trio',
      'I-Jam',
      'Noorkuu',
      'Trio Naturale',
    ],
  },
  {
    title: 'KLASSIKALINE MUUSIKA',
    description: 'Ajatu muusika kõrgeimale tasemele',
    artists: [
      'Eesti heliloojad',
      'Eesti muusika esitajad',
      'Klassikalised ansamblid',
      'Kammermuusika',
    ],
  },
];

export default function OurArtists() {
  return (
    <Box
      id="ourArtists"
      sx={(theme) => ({
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3 },
        bgcolor: 'background.default',
        position: 'relative',
        ...theme.applyStyles('dark', {
          bgcolor: '#0D131B',
        }),
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 1px 1px, rgba(0, 229, 161, 0.05) 1px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.03) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        },
      })}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={(theme) => ({
              color: 'primary.main',
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              ...theme.applyStyles('dark', {
                color: '#00E5A1',
              }),
            })}
          >
            Meelelahutust Igale Maitsele
          </Typography>
          
          {/* Motivation Enhancement - Value Proposition */}
          <Typography
            component="p"
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '800px',
              mx: 'auto',
              mb: 3,
              lineHeight: 1.7,
            }}
          >
            Professionaalsed artistid ja muusikud teie üritusele.
            <Box component="span" sx={{ display: 'block', mt: 1, fontWeight: 600, color: 'text.primary' }}>
              Loome unustamatu kogemuse teie sündmusele!
            </Box>
          </Typography>
          
          {/* Social Proof & Trust Indicators - Motivation Enhancement */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
              mb: 2,
            }}
          >
            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1.5,
                borderRadius: '16px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
              })}
            >
              <StarRoundedIcon
                sx={{
                  fontSize: '1.25rem',
                  color: 'primary.main',
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                5.0
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', ml: 0.5 }}>
                (500+ rahulolevat klienti)
              </Typography>
            </Box>
            
            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1.5,
                borderRadius: '16px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
              })}
            >
              <PeopleIcon
                sx={{
                  fontSize: '1.25rem',
                  color: 'primary.main',
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                40+ aastat kogemust
              </Typography>
            </Box>
            
            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1.5,
                borderRadius: '16px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
              })}
            >
              <CheckCircleRoundedIcon
                sx={{
                  fontSize: '1.25rem',
                  color: 'primary.main',
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                Professionaalsed artistid
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Artist Category Cards */}
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {artistCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={(theme) => ({
                  height: '100%',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  ...theme.applyStyles('dark', {
                    bgcolor: '#1C2630',
                  }),
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.05) 0%, transparent 100%)'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.05) 0%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.4)' : 'rgba(0, 168, 107, 0.4)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 10px 30px rgba(0, 229, 161, 0.2)'
                      : '0 10px 30px rgba(0, 168, 107, 0.15)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                })}
              >
                <Stack spacing={2}>
                  {/* Ability Enhancement - Visual Icon */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      className="category-icon"
                      sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.2), rgba(0, 229, 161, 0.1))'
                          : 'linear-gradient(135deg, rgba(0, 168, 107, 0.2), rgba(0, 168, 107, 0.1))',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.3)' : 'rgba(0, 168, 107, 0.3)'}`,
                        transition: 'transform 0.4s ease',
                      })}
                    >
                      <MusicNoteIcon
                        sx={{
                          fontSize: '1.75rem',
                          color: 'primary.main',
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={(theme) => ({
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        textTransform: 'uppercase',
                        flex: 1,
                        ...theme.applyStyles('dark', {
                          color: '#00E5A1',
                        }),
                      })}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {category.description}
                  </Typography>
                  <Divider
                    sx={(theme) => ({
                      borderColor: theme.palette.mode === 'dark' ? 'rgba(176, 184, 196, 0.2)' : 'divider',
                      my: 1,
                    })}
                  />
                  <Stack spacing={1.5}>
                    {category.artists.map((artist, artistIndex) => (
                      <Box key={artistIndex}>
                        {/* Ability Enhancement - Clickable Artist Links */}
                        <Link
                          href={`#artist-${artist.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={(e) => {
                            e.preventDefault();
                            // Future: Navigate to artist profile
                          }}
                          sx={(theme) => ({
                            color: 'text.secondary',
                            fontSize: '0.95rem',
                            py: 0.75,
                            px: 1,
                            borderRadius: '8px',
                            display: 'block',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            '&:hover': {
                              color: 'primary.main',
                              bgcolor: theme.palette.mode === 'dark'
                                ? 'rgba(0, 229, 161, 0.1)'
                                : 'rgba(0, 168, 107, 0.08)',
                              transform: 'translateX(4px)',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '3px',
                                height: '60%',
                                borderRadius: '0 2px 2px 0',
                                bgcolor: 'primary.main',
                              },
                            },
                            ...theme.applyStyles('dark', {
                              '&:hover': {
                                color: '#00E5A1',
                              },
                            }),
                          })}
                        >
                          {artist}
                        </Link>
                        {artistIndex < category.artists.length - 1 && (
                          <Divider
                            sx={(theme) => ({
                              borderColor: theme.palette.mode === 'dark' ? 'rgba(176, 184, 196, 0.1)' : 'divider',
                              mt: 1.5,
                            })}
                          />
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call-to-Action Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={(theme) => ({
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #00E5A1, #00D184)'
                : 'linear-gradient(135deg, #00a86b, #00d184)',
              color: theme.palette.mode === 'dark' ? '#0D131B' : 'white',
              px: 6,
              py: 1.75,
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '1.125rem' },
              textTransform: 'none',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 24px rgba(0, 229, 161, 0.3)'
                : '0 8px 24px rgba(0, 168, 107, 0.3)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transition: 'left 0.5s ease',
              },
              '&:hover': {
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #00D184, #00C175)'
                  : 'linear-gradient(135deg, #00d184, #00b870)',
                transform: 'translateY(-4px) scale(1.05)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 16px 40px rgba(0, 229, 161, 0.4)'
                  : '0 16px 40px rgba(0, 168, 107, 0.4)',
                '&::before': {
                  left: '100%',
                },
                '& .MuiButton-endIcon': {
                  transform: 'translateX(4px)',
                },
              },
              '& .MuiButton-endIcon': {
                transition: 'transform 0.3s ease',
              },
            })}
          >
            Tutvu Artistidega
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
