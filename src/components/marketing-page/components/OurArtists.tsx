import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

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
          <Typography
            component="p"
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Professionaalsed artistid ja muusikud teie üritusele
          </Typography>
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
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      textTransform: 'uppercase',
                      ...theme.applyStyles('dark', {
                        color: '#00E5A1',
                      }),
                    })}
                  >
                    {category.title}
                  </Typography>
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
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.95rem',
                            py: 0.5,
                          }}
                        >
                          {artist}
                        </Typography>
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
            sx={(theme) => ({
              bgcolor: 'primary.main',
              color: theme.palette.mode === 'dark' ? '#0D131B' : 'white',
              px: 5,
              py: 1.5,
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '1.125rem' },
              textTransform: 'none',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 24px rgba(0, 229, 161, 0.3)'
                : '0 8px 24px rgba(0, 168, 107, 0.3)',
              transition: 'all 0.3s ease',
              ...theme.applyStyles('dark', {
                bgcolor: '#00E5A1',
              }),
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark' ? '#00D184' : 'primary.dark',
                transform: 'translateY(-3px)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 12px 32px rgba(0, 229, 161, 0.4)'
                  : '0 12px 32px rgba(0, 168, 107, 0.4)',
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
