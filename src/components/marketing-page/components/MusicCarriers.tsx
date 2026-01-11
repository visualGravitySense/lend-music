import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import { getImagePath } from '../../../utils/imagePath';

const musicCarriers = [
  {
    title: 'Arvo Pärt / Alfred Schnittke',
    description: ['Choral Works', 'Estonian Philharmonic Chamber Choir'],
    price: '10 EUR',
    image: 'album-part-schnittke.png',
  },
  {
    title: 'THE ESTONIAN CELLO',
    description: ['Eller, Känd, Oja, Reimann, Tubina', 'Valle-Rasmus Roots - cello'],
    price: '16 EUR',
    image: 'album-estonian-cello.png',
  },
  {
    title: 'Neeme Järvi',
    description: ['In Concert', 'Mozart, Wagner, Brahms, Reger'],
    price: '18 EUR',
    image: 'album-neeme-jarvi.png',
  },
];

export default function MusicCarriers() {
  return (
    <Box
      id="musicCarriers"
      sx={(theme) => ({
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 4 },
        bgcolor: 'background.default',
        position: 'relative',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0D131B 0%, #0A0F17 50%, #0D131B 100%)'
          : 'linear-gradient(180deg, hsl(0, 0%, 99%) 0%, hsl(220, 35%, 98%) 50%, hsl(0, 0%, 99%) 100%)',
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
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 229, 161, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 209, 132, 0.06) 0%, transparent 50%)'
            : 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 168, 107, 0.05) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 168, 107, 0.03) 0%, transparent 50%)',
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
            mb: { xs: 6, md: 8 },
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
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                borderRadius: '8px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(90deg, transparent, #FF6B6B, transparent)'
                  : 'linear-gradient(90deg, transparent, #FF6B6B, transparent)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 0 12px rgba(255, 107, 107, 0.6)'
                  : '0 0 12px rgba(255, 107, 107, 0.5)',
              },
              ...theme.applyStyles('dark', {
                color: '#00E5A1',
              }),
            })}
          >
            Helikandijate Müük
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
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            Klassikalise muusika CD- ja DVD-de tellimine ja hulgimüük. 
            <Box component="span" sx={{ display: 'block', mt: 1, fontWeight: 600, color: 'text.primary' }}>
              Kvaliteetsed helikandijad otse Eestist!
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
                borderRadius: '12px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
              })}
            >
              <LocalShippingIcon
                sx={{
                  fontSize: '1.25rem',
                  color: 'primary.main',
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                Tasuta saatmine
              </Typography>
            </Box>
            
            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1.5,
                borderRadius: '12px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
              })}
            >
              <SecurityIcon
                sx={{
                  fontSize: '1.25rem',
                  color: 'primary.main',
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                Turvaline ost
              </Typography>
            </Box>
            
            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1.5,
                borderRadius: '12px',
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
                Originaal tooted
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Product Cards */}
        <Grid container spacing={4}>
          {musicCarriers.map((product, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={(theme) => ({
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #1C2630 0%, #1A2229 50%, #1C2630 100%)'
                    : 'linear-gradient(135deg, hsl(220, 35%, 97%) 0%, hsl(220, 35%, 99%) 50%, hsl(220, 35%, 97%) 100%)',
                  border: 'none',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 2px 12px rgba(0, 229, 161, 0.08), 0 4px 24px rgba(0, 0, 0, 0.2)'
                    : '0 2px 12px rgba(0, 168, 107, 0.06), 0 4px 24px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.08) 0%, rgba(0, 209, 132, 0.04) 50%, transparent 100%)'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.08) 0%, rgba(0, 168, 107, 0.04) 50%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: theme.palette.mode === 'dark'
                      ? 'radial-gradient(circle at 20% 20%, rgba(0, 229, 161, 0.06) 0%, transparent 50%)'
                      : 'radial-gradient(circle at 20% 20%, rgba(0, 168, 107, 0.05) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0, 229, 161, 0.2), 0 16px 48px rgba(0, 209, 132, 0.15), 0 24px 64px rgba(0, 0, 0, 0.3)'
                      : '0 8px 32px rgba(0, 168, 107, 0.15), 0 16px 48px rgba(0, 168, 107, 0.1), 0 24px 64px rgba(0, 0, 0, 0.08)',
                    '&::before': {
                      opacity: 1,
                    },
                    cursor: 'pointer',
                    '& .product-overlay': {
                      opacity: 1,
                    },
                    '& img': {
                      transform: 'scale(1.1)',
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
                      src={getImagePath(product.image)}
                      alt={`${product.title} | Klassikaline muusika CD/DVD müük`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : null}
                  
                  {/* Prompt Enhancement - Quick View Overlay */}
                  <Box
                    className="product-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        fontSize: '0.875rem',
                      }}
                    >
                      Vaata lähemalt
                    </Typography>
                  </Box>
                </Box>

                {/* Content Section */}
                <Stack
                  spacing={3.5}
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
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
                        mb: 2,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Stack spacing={2}>
                      {product.description.map((line, lineIndex) => (
                        <Typography
                          key={lineIndex}
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.9rem',
                            lineHeight: 1.7,
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
                      mt: 3,
                      pt: 3,
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
                      startIcon={<ShoppingCartIcon />}
                      sx={(theme) => ({
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #00E5A1, #00D184)'
                          : 'linear-gradient(135deg, #00a86b, #00d184)',
                        color: theme.palette.mode === 'dark' ? '#0D131B' : 'white',
                        px: 3.5,
                        py: 1,
                        borderRadius: '20px',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        textTransform: 'none',
                        minWidth: '100px',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 12px rgba(0, 229, 161, 0.3)'
                          : '0 4px 12px rgba(0, 168, 107, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #00D184, #00C175)'
                            : 'linear-gradient(135deg, #00d184, #00b870)',
                          transform: 'translateY(-3px) scale(1.05)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 6px 16px rgba(0, 229, 161, 0.4)'
                            : '0 6px 16px rgba(0, 168, 107, 0.4)',
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
