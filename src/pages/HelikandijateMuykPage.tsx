import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../components/shared-theme/AppTheme.tsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AppAppBar from '../components/marketing-page/components/AppAppBar.tsx';
import Footer from '../components/marketing-page/components/Footer.tsx';
import SEO from '../components/SEO.tsx';
import { getImagePath } from '../utils/imagePath';

interface HelikandijateMuykPageProps {
  onNavigate?: (page: 'home' | 'about' | 'music-carriers' | 'artists') => void;
}

const musicProducts = [
  {
    id: 1,
    artist: 'Arvo Pärt / Alfred Schnittke',
    title: 'Choral Works',
    conductor: 'Tõnu Kaljuste',
    released: '2020',
    label: 'ECM',
    performers: 'Estonian Philharmonic Chamber Choir',
    code: 'ECM-1234',
    genre: 'Klassikaline',
    price: 10,
    image: 'album-part-schnittke.png',
    isNew: false,
    isPopular: true,
    hasDiscount: false,
  },
  {
    id: 2,
    artist: 'THE ESTONIAN CELLO',
    title: 'Estonian Cello Masterpieces',
    conductor: '-',
    released: '2019',
    label: 'ECM',
    performers: 'Various Artists',
    code: 'ECM-1235',
    genre: 'Klassikaline',
    price: 16,
    image: 'album-estonian-cello.png',
    isNew: false,
    isPopular: false,
    hasDiscount: false,
  },
  {
    id: 3,
    artist: 'Neeme Järvi',
    title: 'In Concert',
    conductor: 'Neeme Järvi',
    released: '2021',
    label: 'ECM',
    performers: 'Estonian National Symphony Orchestra',
    code: 'ECM-1236',
    genre: 'Klassikaline',
    price: 18,
    image: '/album-neeme-jarvi.png',
    isNew: true,
    isPopular: true,
    hasDiscount: false,
  },
  {
    id: 4,
    artist: 'Tchaikovsky',
    title: 'The Nutcracker (complete)',
    conductor: 'Neeme Järvi',
    released: '2014',
    label: 'CHANDOS',
    performers: 'Bergen Philharmonic Orchestra',
    code: 'CHSA5144',
    genre: 'Klassikaline',
    price: 17,
    image: 'cd-tchaikovsky-nutcracker.png',
    isNew: false,
    isPopular: true,
    hasDiscount: false,
  },
  {
    id: 5,
    artist: 'Anna-Liisa Eller',
    title: 'Strings attached, the voice of kannel',
    conductor: '-',
    released: '2021',
    label: 'Harmonia Mundi',
    performers: 'Anna-Liisa Eller',
    code: 'HMN91611 CD',
    genre: 'Eesti Muusika',
    price: 16,
    image: '/cd-anna-liisa-eller-strings-attached.png',
    isNew: true,
    isPopular: false,
    hasDiscount: false,
  },
  {
    id: 7,
    artist: 'Arvo Pärt',
    title: 'Essential Choral Works',
    conductor: 'Paul Hillier',
    released: '2023',
    label: 'Harmonia Mundi',
    performers: 'Theatre of Voices, EPCC, NYYD Quartet, Ars Nova Copenhagen, The Pro Arte Singers',
    code: 'HMX2904087.80',
    genre: 'Klassikaline',
    price: 18.5,
    image: 'cd-arvo-part-essential-choral.png',
    isNew: true,
    isPopular: true,
    hasDiscount: false,
  },
  // {
  //   id: 6,
  //   artist: 'Veljo Tormis',
  //   title: 'Estonian Folk Songs',
  //   conductor: 'Tõnu Kaljuste',
  //   released: '2020',
  //   label: 'ECM',
  //   performers: 'Estonian Philharmonic Chamber Choir',
  //   code: 'ECM-1239',
  //   genre: 'Eesti Muusika',
  //   price: 14,
  //   image: '/album-neeme-jarvi.png',
  // },
];

export default function HelikandijateMuykPage({ onNavigate }: HelikandijateMuykPageProps) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'new' | 'popular' | 'discount'>('all');
  const [activeCategory, setActiveCategory] = useState<'all' | 'classical' | 'estonian'>('all');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const filteredProducts = musicProducts.filter((product) => {
    const matchesSearch = 
      product.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === 'all' ? true :
      activeCategory === 'classical' ? product.genre === 'Klassikaline' : product.genre === 'Eesti Muusika';
    
    const matchesFilter = 
      activeFilter === 'all' ? true :
      activeFilter === 'new' ? product.isNew :
      activeFilter === 'popular' ? product.isPopular :
      activeFilter === 'discount' ? product.hasDiscount :
      true;
    
    return matchesSearch && matchesCategory && matchesFilter;
  });

  return (
    <AppTheme>
      <SEO
        title="Helikandijate Müük | Klassikaline Muusika CD ja DVD | LendMuusik OÜ"
        description="Ostke klassikalist muusikat CD ja DVD kandjatel. Lai valik Eesti ja rahvusvahelist klassikalist muusikat. Kiire kohaletoimetamine Eestis."
        keywords="klassikaline muusika CD, klassikaline muusika DVD, Eesti muusika, Arvo Pärt, Tšaikovski, muusika ostmine, CD müük, DVD müük"
        url="https://lendmusic.ee/music-carriers"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "LendMuusik OÜ - Helikandijate Müük",
          "description": "Klassikalise muusika CD ja DVD müük",
          "url": "https://lendmusic.ee/music-carriers",
          "priceRange": "€€"
        }}
      />
      <CssBaseline enableColorScheme />
      <AppAppBar onNavigate={onNavigate} currentPage="music-carriers" />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          ...theme.applyStyles('dark', {
            bgcolor: theme.palette.grey[900],
          }),
        }}
      >
        {/* Hero Section */}
        <Box
          sx={(theme) => ({
            position: 'relative',
            minHeight: '50vh',
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
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h1"
                sx={(theme) => ({
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 900,
                  mb: 2,
                  position: 'relative',
                  display: 'inline-block',
                  background: theme.palette.mode === 'dark'
                    ? `linear-gradient(135deg, ${theme.palette.grey[50]}, #00d184)`
                    : `linear-gradient(135deg, ${theme.palette.grey[900]}, #00a86b)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '4px',
                    borderRadius: '8px',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(90deg, transparent, #FF6B6B, transparent)'
                      : 'linear-gradient(90deg, transparent, #FF6B6B, transparent)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 0 20px rgba(255, 107, 107, 0.6)'
                      : '0 0 20px rgba(255, 107, 107, 0.5)',
                  },
                })}
              >
                Helikandijate Müük
              </Typography>
              {/* Value Proposition - Motivation Enhancement */}
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: theme.palette.mode === 'dark' ? alpha(theme.palette.grey[50], 0.95) : 'text.primary',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 600,
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 2,
                  lineHeight: 1.5,
                })}
              >
                Kvaliteetsed helikandijad otse Eestist!
              </Typography>
              <Typography
                variant="body1"
                sx={(theme) => ({
                  color: theme.palette.mode === 'dark' ? alpha(theme.palette.grey[50], 0.8) : 'text.secondary',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  fontWeight: 400,
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 3,
                  lineHeight: 1.8,
                })}
              >
                Klassikalise muusika CD- ja DVD-de tellimine ja hulgimüük. Avastage meie laia valikut kvaliteetseid helikandijaid.
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
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    bgcolor: (theme) => theme.palette.mode === 'dark'
                      ? 'rgba(0, 209, 132, 0.15)'
                      : 'rgba(0, 168, 107, 0.1)',
                    border: 'none',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 2px 12px rgba(0, 229, 161, 0.15), 0 4px 20px rgba(0, 0, 0, 0.2)'
                      : '0 2px 12px rgba(0, 168, 107, 0.12), 0 4px 20px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <LocalShippingIcon sx={{ color: 'primary.main', fontSize: '1.25rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Tasuta kohaletoimetamine
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    bgcolor: (theme) => theme.palette.mode === 'dark'
                      ? 'rgba(0, 209, 132, 0.15)'
                      : 'rgba(0, 168, 107, 0.1)',
                    border: 'none',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 2px 12px rgba(0, 229, 161, 0.15), 0 4px 20px rgba(0, 0, 0, 0.2)'
                      : '0 2px 12px rgba(0, 168, 107, 0.12), 0 4px 20px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <SecurityIcon sx={{ color: 'primary.main', fontSize: '1.25rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Turvaline ost
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    bgcolor: (theme) => theme.palette.mode === 'dark'
                      ? 'rgba(0, 209, 132, 0.15)'
                      : 'rgba(0, 168, 107, 0.1)',
                    border: 'none',
                    boxShadow: (theme) => theme.palette.mode === 'dark'
                      ? '0 2px 12px rgba(0, 229, 161, 0.15), 0 4px 20px rgba(0, 0, 0, 0.2)'
                      : '0 2px 12px rgba(0, 168, 107, 0.12), 0 4px 20px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <CheckCircleRoundedIcon sx={{ color: 'primary.main', fontSize: '1.25rem' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Originaaltooted
                  </Typography>
                </Box>
              </Box>

              {/* Category Buttons - Ability Enhancement */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ justifyContent: 'center', mb: 3 }}
              >
                <Button
                  variant={activeCategory === 'all' ? 'contained' : 'outlined'}
                  color="primary"
                  size="large"
                  onClick={() => setActiveCategory('all')}
                  startIcon={<MusicNoteIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ...(activeCategory === 'all' && {
                      background: 'linear-gradient(135deg, #00a86b, #00d184)',
                      boxShadow: '0 8px 20px rgba(0, 168, 107, 0.4)',
                    }),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: activeCategory === 'all'
                        ? '0 12px 30px rgba(0, 168, 107, 0.5)'
                        : '0 8px 20px rgba(0, 168, 107, 0.3)',
                    },
                  }}
                >
                  KÕIK
                </Button>
                <Button
                  variant={activeCategory === 'classical' ? 'contained' : 'outlined'}
                  color="primary"
                  size="large"
                  onClick={() => setActiveCategory('classical')}
                  startIcon={<MusicNoteIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ...(activeCategory === 'classical' && {
                      background: 'linear-gradient(135deg, #00a86b, #00d184)',
                      boxShadow: '0 8px 20px rgba(0, 168, 107, 0.4)',
                    }),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: activeCategory === 'classical'
                        ? '0 12px 30px rgba(0, 168, 107, 0.5)'
                        : '0 8px 20px rgba(0, 168, 107, 0.3)',
                    },
                  }}
                >
                  KLASSIKALINE MUUSIKA
                </Button>
                <Button
                  variant={activeCategory === 'estonian' ? 'contained' : 'outlined'}
                  color="primary"
                  size="large"
                  onClick={() => setActiveCategory('estonian')}
                  startIcon={<MusicNoteIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    ...(activeCategory === 'estonian' && {
                      background: 'linear-gradient(135deg, #00a86b, #00d184)',
                      boxShadow: '0 8px 20px rgba(0, 168, 107, 0.4)',
                    }),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: activeCategory === 'estonian'
                        ? '0 12px 30px rgba(0, 168, 107, 0.5)'
                        : '0 8px 20px rgba(0, 168, 107, 0.3)',
                    },
                  }}
                >
                  EE EESTI MUUSIKA
                </Button>
              </Stack>

              {/* Action Buttons - Enhanced Prompts */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ justifyContent: 'center' }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    const productsSection = document.getElementById('products-section');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  sx={{
                    px: 4,
                    py: 1.5,
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
                      background: (theme) => alpha(theme.palette.grey[50], 0.3),
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
                  Sirvi Kataloogi
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    borderWidth: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0, 168, 107, 0.3)',
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Hulgiostud
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Search and Filter Section - Enhanced with FBM */}
        <Box
          sx={{
            py: 4,
            px: { xs: 2, sm: 3 },
            bgcolor: 'background.default',
            ...theme.applyStyles('dark', {
              bgcolor: theme.palette.grey[900],
            }),
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              {/* Search Input - ABILITY Enhancement */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Box sx={{ position: 'relative' }}>
                  <TextField
                    fullWidth
                    placeholder="Otsi artisti, helilooja või albumit..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon 
                          sx={(theme) => ({ 
                            color: searchQuery 
                              ? 'primary.main' 
                              : 'text.secondary',
                            transition: 'color 0.3s ease',
                            ...theme.applyStyles('dark', {
                              color: searchQuery 
                                ? '#00d184' 
                                : (theme) => `${alpha(theme.palette.grey[50], 0.6)} !important`,
                            }),
                          })} 
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={(theme) => ({
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '50px',
                      bgcolor: '#f0f2f5',
                      border: 'none',
                      boxShadow: (theme) => `0 2px 8px ${alpha(theme.palette.grey[900], 0.08)}, 0 4px 16px ${alpha(theme.palette.grey[900], 0.04)}`,
                      transition: 'all 0.3s ease',
                      fontSize: '1rem',
                      color: 'text.primary',
                      '& fieldset': {
                        border: 'none',
                      },
                      '&:hover': {
                        borderColor: 'rgba(0, 168, 107, 0.3)',
                        bgcolor: theme.palette.grey[50],
                        boxShadow: '0 4px 12px rgba(0, 168, 107, 0.1)',
                      },
                      '&.Mui-focused': {
                        borderColor: 'primary.main',
                        bgcolor: theme.palette.grey[50],
                        boxShadow: '0 0 0 3px rgba(0, 168, 107, 0.2)',
                      },
                      ...theme.applyStyles('dark', {
                        bgcolor: (theme) => `${alpha(theme.palette.grey[50], 0.05)} !important`,
                        border: 'none !important',
                        boxShadow: (theme) => `0 2px 8px ${alpha(theme.palette.grey[50], 0.08)} !important, 0 4px 16px ${alpha(theme.palette.grey[50], 0.04)} !important`,
                        color: (theme) => `${alpha(theme.palette.grey[50], 0.9)} !important`,
                        '&:hover': {
                          borderColor: 'rgba(0, 209, 132, 0.4) !important',
                          bgcolor: (theme) => `${alpha(theme.palette.grey[50], 0.08)} !important`,
                          boxShadow: '0 4px 12px rgba(0, 209, 132, 0.15) !important',
                        },
                        '&.Mui-focused': {
                          borderColor: '#00d184 !important',
                          bgcolor: (theme) => `${alpha(theme.palette.grey[50], 0.1)} !important`,
                          boxShadow: '0 0 0 3px rgba(0, 209, 132, 0.25) !important',
                        },
                      }),
                    },
                    '& .MuiOutlinedInput-input': {
                      py: 1.5,
                      fontSize: '1rem',
                      color: 'text.primary',
                      '&::placeholder': {
                        color: (theme) => alpha(theme.palette.grey[900], 0.5),
                        opacity: 1,
                      },
                      ...theme.applyStyles('dark', {
                        color: (theme) => `${alpha(theme.palette.grey[50], 0.9)} !important`,
                        '&::placeholder': {
                          color: (theme) => `${alpha(theme.palette.grey[50], 0.5)} !important`,
                          opacity: 1,
                        },
                      }),
                    },
                  })}
                />
                  {/* ABILITY - Helper Text */}
                  {searchQuery && (
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        bottom: -20,
                        left: 0,
                        color: 'text.secondary',
                        fontSize: '0.75rem',
                        mt: 0.5,
                      }}
                    >
                      Leitud {filteredProducts.length} toodet
                    </Typography>
                  )}
                </Box>
              </Grid>
              
              {/* Filter Buttons - Enhanced Prompts */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack 
                  direction="row" 
                  spacing={1.5} 
                  flexWrap="wrap" 
                  useFlexGap
                  sx={{
                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                  }}
                >
                  {[
                    { key: 'all', label: 'Kõik' },
                    { key: 'new', label: 'Uued' },
                    { key: 'popular', label: 'Populaarsed' },
                    { key: 'discount', label: 'Soodustused' },
                  ].map((filter) => (
                    <Button
                      key={filter.key}
                      variant={activeFilter === filter.key ? 'contained' : 'outlined'}
                      color="primary"
                      size="small"
                      onClick={() => setActiveFilter(filter.key as any)}
                      sx={{
                        borderRadius: '12px',
                        fontWeight: 600,
                        minWidth: 'auto',
                        px: 2.5,
                        py: 0.75,
                        fontSize: '0.875rem',
                        transition: 'all 0.3s ease',
                        ...(activeFilter === filter.key && {
                          background: 'linear-gradient(135deg, #00a86b, #00d184)',
                          boxShadow: '0 4px 12px rgba(0, 168, 107, 0.4)',
                          border: 'none',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 16px rgba(0, 168, 107, 0.5)',
                            background: 'linear-gradient(135deg, #00b876, #00e194)',
                          },
                        }),
                        ...(activeFilter !== filter.key && {
                          borderWidth: 1.5,
                          borderColor: theme.palette.mode === 'dark'
                            ? (theme) => alpha(theme.palette.grey[50], 0.2)
                            : 'rgba(0, 168, 107, 0.3)',
                          color: theme.palette.mode === 'dark'
                            ? (theme) => alpha(theme.palette.grey[50], 0.9)
                            : 'primary.main',
                          '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: theme.palette.mode === 'dark'
                              ? 'rgba(0, 209, 132, 0.1)'
                              : 'rgba(0, 168, 107, 0.05)',
                            transform: 'translateY(-1px)',
                            boxShadow: '0 4px 8px rgba(0, 168, 107, 0.2)',
                          },
                        }),
                      }}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* EVALUATION Section - Benefits & Social Proof */}
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            bgcolor: 'background.default',
            ...theme.applyStyles('dark', {
              bgcolor: theme.palette.grey[900],
            }),
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} sx={{ mb: 8 }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: { xs: 3, sm: 3.5, md: 4 },
                    height: '100%',
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 209, 132, 0.1), rgba(0, 168, 107, 0.05))'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                    border: 'none',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 2px 12px rgba(0, 229, 161, 0.15), 0 4px 20px rgba(0, 0, 0, 0.2)'
                      : '0 2px 12px rgba(0, 168, 107, 0.12), 0 4px 20px rgba(0, 0, 0, 0.04)',
                    borderRadius: '10px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
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
                        ? 'radial-gradient(circle at 50% 0%, rgba(0, 229, 161, 0.1) 0%, transparent 60%)'
                        : 'radial-gradient(circle at 50% 0%, rgba(0, 168, 107, 0.08) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(0, 229, 161, 0.2), 0 16px 48px rgba(0, 209, 132, 0.15), 0 24px 64px rgba(0, 0, 0, 0.3)'
                        : '0 8px 32px rgba(0, 168, 107, 0.15), 0 16px 48px rgba(0, 168, 107, 0.1), 0 24px 64px rgba(0, 0, 0, 0.08)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  })}
                >
                  <ThumbUpIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2.5 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    Kõrge Kvaliteet
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    Originaaltooted otse tootjatelt. Garanteeritud kvaliteet ja autentsus.
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: { xs: 3, sm: 3.5, md: 4 },
                    height: '100%',
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 209, 132, 0.1), rgba(0, 168, 107, 0.05))'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                    border: 'none',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 2px 12px rgba(0, 229, 161, 0.15), 0 4px 20px rgba(0, 0, 0, 0.2)'
                      : '0 2px 12px rgba(0, 168, 107, 0.12), 0 4px 20px rgba(0, 0, 0, 0.04)',
                    borderRadius: '10px',
                  })}
                >
                  <CompareArrowsIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    Parim Hind
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    Konkurentsivõimelised hinnad. Hulgimüügile eripakkumised.
                  </Typography>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={(theme) => ({
                    p: { xs: 3, sm: 3.5, md: 4 },
                    height: '100%',
                    textAlign: 'center',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(0, 209, 132, 0.1), rgba(0, 168, 107, 0.05))'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                    border: 'none',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 2px 12px rgba(0, 229, 161, 0.15), 0 4px 20px rgba(0, 0, 0, 0.2)'
                      : '0 2px 12px rgba(0, 168, 107, 0.12), 0 4px 20px rgba(0, 0, 0, 0.04)',
                    borderRadius: '10px',
                  })}
                >
                  <AccessTimeIcon sx={{ fontSize: '3rem', color: 'primary.main', mb: 2.5 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    Kiire Kohaletoimetamine
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    Tellimused saadetakse 24 tunni jooksul. Eestis tasuta kohaletoimetamine.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Products Section */}
        <Box
          id="products-section"
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            bgcolor: 'background.default',
            ...theme.applyStyles('dark', {
              bgcolor: theme.palette.grey[900],
            }),
          }}
        >
          <Container maxWidth="lg">
            {/* TIMING - Contextual Cue */}
            {filteredProducts.length === 0 && (
              <Alert 
                severity="info" 
                icon={<SearchIcon />}
                sx={{ mb: 4 }}
              >
                Tooteid ei leitud. Proovige muuta otsingukriteeriume või filtreid.
              </Alert>
            )}
            
            {filteredProducts.length > 0 && (
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography
                  variant="h2"
                  sx={(theme) => ({
                    fontSize: { xs: '1.75rem', md: '2.5rem' },
                    fontWeight: 800,
                    color: theme.palette.mode === 'dark' ? '#00d184' : 'primary.main',
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
                  })}
                >
                  Uusimad Väljalasked
                </Typography>
                <Chip
                  label={`${filteredProducts.length} toodet`}
                  color="primary"
                  sx={{ fontWeight: 600 }}
                />
              </Box>
            )}

            <Grid container spacing={4}>
              {filteredProducts.map((product) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                  <Card
                    sx={(theme) => ({
                      p: 0,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                        background: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[50],
                      border: 'none',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 2px 8px rgba(0, 229, 161, 0.1), 0 4px 16px rgba(0, 0, 0, 0.15)'
                        : '0 2px 8px rgba(0, 168, 107, 0.08), 0 4px 16px rgba(0, 0, 0, 0.03)',
                      borderRadius: '10px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, transparent, rgba(0, 209, 132, 0.1))'
                          : 'linear-gradient(135deg, transparent, rgba(0, 168, 107, 0.05))',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        zIndex: 1,
                        pointerEvents: 'none',
                      },
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 25px 70px rgba(0, 209, 132, 0.35)'
                          : '0 25px 60px rgba(0, 168, 107, 0.25)',
                        borderColor: theme.palette.mode === 'dark'
                          ? 'rgba(0, 209, 132, 0.6)'
                          : 'rgba(0, 168, 107, 0.5)',
                        '&::before': {
                          opacity: 1,
                        },
                        '& .product-image': {
                          transform: 'scale(1.1)',
                        },
                        '& .product-badge': {
                          transform: 'scale(1.1)',
                          opacity: 1,
                        },
                      },
                    })}
                  >
                    {/* Image Container with Badges - Motivation Enhancement */}
                    <Box
                      sx={(theme) => ({
                        position: 'relative',
                        width: '100%',
                        height: 250,
                        overflow: 'hidden',
                        bgcolor: theme.palette.mode === 'dark' ? '#0a0a0a' : '#f5f5f5',
                      })}
                    >
                      <Box
                        component="img"
                        className="product-image"
                        src={getImagePath(product.image)}
                        alt={`${product.artist} - ${product.title} (${product.released}) | Klassikaline muusika CD/DVD`}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      
                      {/* Badges - Motivation Enhancement */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                          zIndex: 2,
                        }}
                      >
                        {product.isNew && (
                          <Box
                            className="product-badge"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              px: 1.5,
                              py: 0.5,
                              borderRadius: '12px',
                              bgcolor: 'primary.main',
                              color: theme.palette.grey[50],
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              boxShadow: '0 4px 12px rgba(0, 168, 107, 0.4)',
                              transition: 'all 0.3s ease',
                              opacity: 0.95,
                            }}
                          >
                            <NewReleasesIcon sx={{ fontSize: '1rem' }} />
                            UUS
                          </Box>
                        )}
                        {product.isPopular && (
                          <Box
                            className="product-badge"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              px: 1.5,
                              py: 0.5,
                              borderRadius: '12px',
                              bgcolor: 'warning.main',
                              color: theme.palette.grey[50],
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              boxShadow: '0 4px 12px rgba(255, 152, 0, 0.4)',
                              transition: 'all 0.3s ease',
                              opacity: 0.95,
                            }}
                          >
                            <TrendingUpIcon sx={{ fontSize: '1rem' }} />
                            POPULAARNE
                          </Box>
                        )}
                        {product.hasDiscount && (
                          <Box
                            className="product-badge"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              px: 1.5,
                              py: 0.5,
                              borderRadius: '12px',
                              bgcolor: 'error.main',
                              color: theme.palette.grey[50],
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              boxShadow: '0 4px 12px rgba(244, 67, 54, 0.4)',
                              transition: 'all 0.3s ease',
                              opacity: 0.95,
                            }}
                          >
                            <LocalOfferIcon sx={{ fontSize: '1rem' }} />
                            SOODUSTUS
                          </Box>
                        )}
                      </Box>
                    </Box>
                    
                    {/* Content Section */}
                    <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        mb: 0.5,
                        fontSize: '0.9rem',
                      }}
                    >
                      {product.artist}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={(theme) => ({
                        color: theme.palette.mode === 'dark' ? alpha(theme.palette.grey[50], 0.95) : 'text.primary',
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1.1rem',
                      })}
                    >
                      {product.title}
                    </Typography>
                      {/* Product Details - Ability Enhancement */}
                      <Box sx={{ mb: 2, flexGrow: 1 }}>
                        <Divider sx={{ mb: 1.5, borderColor: 'divider' }} />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary', 
                            mb: 1.5,
                            fontSize: '0.875rem',
                            lineHeight: 1.7,
                          }}
                        >
                          Avaldatud: {product.released}, {product.label}, {product.code}
                        </Typography>
                        <Divider sx={{ mb: 1.5, borderColor: 'divider' }} />
                        {product.conductor !== '-' && (
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'text.secondary', 
                              mb: 1.5,
                              fontSize: '0.875rem',
                            }}
                          >
                            Dirigent: {product.conductor}
                          </Typography>
                        )}
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary', 
                            mb: 1.5,
                            fontSize: '0.875rem',
                          }}
                        >
                          Esitajad: {product.performers}
                        </Typography>
                        <Divider sx={{ mb: 1.5, borderColor: 'divider' }} />
                        
                        {/* Price - Enhanced Expressiveness */}
                        <Box
                          sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1.5,
                            mb: 2.5,
                            p: 2.5,
                            borderRadius: '12px',
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 209, 132, 0.1))'
                              : 'linear-gradient(135deg, rgba(0, 168, 107, 0.12), rgba(0, 168, 107, 0.08))',
                            border: theme.palette.mode === 'dark'
                              ? '2px solid rgba(0, 229, 161, 0.3)'
                              : '2px solid rgba(0, 168, 107, 0.25)',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 4px 16px rgba(0, 229, 161, 0.2), 0 0 24px rgba(0, 229, 161, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                              : '0 4px 16px rgba(0, 168, 107, 0.15), 0 0 24px rgba(0, 168, 107, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
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
                                ? 'linear-gradient(90deg, transparent, rgba(0, 229, 161, 0.2), transparent)'
                                : 'linear-gradient(90deg, transparent, rgba(0, 168, 107, 0.2), transparent)',
                              transition: 'left 2s ease',
                            },
                            '&:hover::before': {
                              left: '100%',
                            },
                          })}
                        >
                          <Typography
                            component="span"
                            sx={(theme) => ({
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              color: 'text.secondary',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                            })}
                          >
                            Hind:
                          </Typography>
                          <Typography
                            variant="h4"
                            sx={(theme) => ({
                              background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(135deg, #00E5A1, #00D184, #00C175)'
                                : 'linear-gradient(135deg, #00a86b, #00d184, #00b870)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              fontWeight: 900,
                              fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
                              lineHeight: 1.2,
                              letterSpacing: '-0.5px',
                              textShadow: theme.palette.mode === 'dark'
                                ? '0 0 20px rgba(0, 229, 161, 0.3)'
                                : '0 0 20px rgba(0, 168, 107, 0.2)',
                              position: 'relative',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: theme.palette.mode === 'dark'
                                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.4), rgba(0, 209, 132, 0.3))'
                                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.3), rgba(0, 168, 107, 0.2))',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'blur(8px)',
                                opacity: 0.6,
                                zIndex: -1,
                              },
                            })}
                          >
                            {product.price % 1 === 0 ? product.price : product.price.toFixed(2).replace('.', ',')}
                          </Typography>
                          <Typography
                            component="span"
                            sx={(theme) => ({
                              fontSize: '1.25rem',
                              fontWeight: 700,
                              color: theme.palette.mode === 'dark' ? '#00E5A1' : '#00a86b',
                              letterSpacing: '0.5px',
                            })}
                          >
                            EUR
                          </Typography>
                        </Box>
                        <Divider sx={{ mb: 1.5, borderColor: 'divider' }} />
                      </Box>
                      
                      {/* CTA Button - Enhanced Expressiveness */}
                      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: 1 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          startIcon={<ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />}
                          sx={(theme) => ({
                            borderRadius: '16px',
                            fontWeight: 800,
                            px: 5,
                            py: 2,
                            fontSize: '1.125rem',
                            textTransform: 'none',
                            letterSpacing: '0.5px',
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(135deg, #00E5A1 0%, #00D184 50%, #00C175 100%)'
                              : 'linear-gradient(135deg, #00a86b 0%, #00d184 50%, #00b870 100%)',
                            color: theme.palette.mode === 'dark' ? '#0D131B' : '#ffffff',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 8px 24px rgba(0, 229, 161, 0.4), 0 4px 12px rgba(0, 229, 161, 0.3), 0 0 32px rgba(0, 229, 161, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                              : '0 8px 24px rgba(0, 168, 107, 0.4), 0 4px 12px rgba(0, 168, 107, 0.3), 0 0 32px rgba(0, 168, 107, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                            position: 'relative',
                            overflow: 'visible',
                            width: '100%',
                            minHeight: '56px',
                            border: theme.palette.mode === 'dark'
                              ? '2px solid rgba(0, 229, 161, 0.4)'
                              : '2px solid rgba(0, 168, 107, 0.3)',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              width: 0,
                              height: 0,
                              borderRadius: '50%',
                              background: theme.palette.mode === 'dark'
                                ? 'radial-gradient(circle, rgba(0, 229, 161, 0.4) 0%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                              transform: 'translate(-50%, -50%)',
                              transition: 'width 0.6s ease, height 0.6s ease, opacity 0.6s ease',
                              opacity: 0,
                            },
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: '-2px',
                              left: '-2px',
                              right: '-2px',
                              bottom: '-2px',
                              borderRadius: '16px',
                              background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(135deg, #00E5A1, #00D184, #00C175, #00E5A1)'
                                : 'linear-gradient(135deg, #00a86b, #00d184, #00b870, #00a86b)',
                              backgroundSize: '200% 200%',
                              zIndex: -1,
                              opacity: 0,
                              animation: 'pulse 2s ease-in-out infinite',
                              filter: 'blur(8px)',
                            },
                            '@keyframes pulse': {
                              '0%, 100%': {
                                opacity: 0.3,
                                transform: 'scale(1)',
                              },
                              '50%': {
                                opacity: 0.6,
                                transform: 'scale(1.05)',
                              },
                            },
                            '&:hover': {
                              transform: 'translateY(-4px) scale(1.02)',
                              background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(135deg, #00F5B1 0%, #00E194 50%, #00D184 100%)'
                                : 'linear-gradient(135deg, #00b876 0%, #00e194 50%, #00c985 100%)',
                              boxShadow: theme.palette.mode === 'dark'
                                ? '0 12px 40px rgba(0, 229, 161, 0.6), 0 8px 20px rgba(0, 229, 161, 0.5), 0 0 48px rgba(0, 229, 161, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                                : '0 12px 40px rgba(0, 168, 107, 0.6), 0 8px 20px rgba(0, 168, 107, 0.5), 0 0 48px rgba(0, 168, 107, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                              border: theme.palette.mode === 'dark'
                                ? '2px solid rgba(0, 229, 161, 0.6)'
                                : '2px solid rgba(0, 168, 107, 0.5)',
                              '&::before': {
                                width: '400px',
                                height: '400px',
                                opacity: 1,
                              },
                              '&::after': {
                                opacity: 1,
                                animation: 'pulse 1.5s ease-in-out infinite',
                              },
                            },
                            '&:active': {
                              transform: 'translateY(-2px) scale(0.98)',
                            },
                          })}
                        >
                          Osta Nüüd
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

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
              Toode edukalt ostukorvi lisatud!
            </Alert>
          </Box>
        )}

        <Footer onNavigate={onNavigate} />
      </Box>
    </AppTheme>
  );
}
