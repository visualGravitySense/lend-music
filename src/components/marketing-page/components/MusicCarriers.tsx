import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const musicCarriers = [
  {
    title: 'Arvo Pärt / Alfred Schnittke',
    description: ['Choral Works', 'Estonian Philharmonic Chamber Choir'],
    price: '10 EUR',
    image: '/album-part-schnittke.png',
  },
  {
    title: 'THE ESTONIAN CELLO',
    description: ['Eller, Känd, Oja, Reimann, Tubina', 'Valle-Rasmus Roots - cello'],
    price: '16 EUR',
    image: '/album-estonian-cello.png',
  },
  {
    title: 'Neeme Järvi',
    description: ['In Concert', 'Mozart, Wagner, Brahms, Reger'],
    price: '18 EUR',
    image: '/album-neeme-jarvi.png',
  },
];

export default function MusicCarriers() {
  return (
    <Box
      id="musicCarriers"
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
            Helikandijate Müük
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
            Klassikalise muusika CD- ja DVD-de tellimine ja hulgimüük
          </Typography>
        </Box>

        {/* Product Cards */}
        <Grid container spacing={3}>
          {musicCarriers.map((product, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={(theme) => ({
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
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
                {/* Image/Media Section */}
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: '200px', sm: '250px', md: '280px' },
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: 'background.default',
                  }}
                >
                  {product.image ? (
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : null}
                </Box>

                {/* Content Section */}
                <Stack
                  spacing={2}
                  sx={{
                    p: 3,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 700,
                        mb: 1.5,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Stack spacing={0.5}>
                      {product.description.map((line, lineIndex) => (
                        <Typography
                          key={lineIndex}
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.9rem',
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>

                  {/* Price and Button Row */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mt: 2,
                      pt: 2,
                      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={(theme) => ({
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        ...theme.applyStyles('dark', {
                          color: '#00E5A1',
                        }),
                      })}
                    >
                      {product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={(theme) => ({
                        bgcolor: 'primary.main',
                        color: theme.palette.mode === 'dark' ? '#0D131B' : 'white',
                        px: 3,
                        py: 0.75,
                        borderRadius: '20px',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        textTransform: 'none',
                        minWidth: '80px',
                        ...theme.applyStyles('dark', {
                          bgcolor: '#00E5A1',
                        }),
                        '&:hover': {
                          bgcolor: theme.palette.mode === 'dark' ? '#00D184' : 'primary.dark',
                          transform: 'translateY(-2px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 4px 12px rgba(0, 229, 161, 0.3)'
                            : '0 4px 12px rgba(0, 168, 107, 0.3)',
                        },
                      })}
                    >
                      Osta
                    </Button>
                  </Box>
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
            mt: 5,
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
            Kõik tooted
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
