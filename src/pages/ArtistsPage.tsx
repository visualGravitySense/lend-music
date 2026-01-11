import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../components/shared-theme/AppTheme.tsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import AppAppBar from '../components/marketing-page/components/AppAppBar.tsx';
import ArtistsHero from '../components/marketing-page/components/ArtistsHero.tsx';
import Footer from '../components/marketing-page/components/Footer.tsx';
import SEO from '../components/SEO.tsx';
import { getImagePath } from '../utils/imagePath';

interface ArtistsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'music-carriers' | 'artists') => void;
}

const artists = [
  {
    id: 1,
    name: 'Mait & Mikko Maltis',
    genre: 'Tantsumuusika',
    description: 'Energiline duo, mis toob teie üritusele kaasahaaravat tantsumuusikat ja suurepärast atmosfääri.',
    gradient: 'linear-gradient(135deg, #1a2942, #00a86b)',
    icon: '🎸',
    iconColor: '#00d184',
    isPopular: true,
    isNew: false,
    rating: 4.9,
    reviews: 24,
    image: '/maltis-1.jpg',
  },
  {
    id: 2,
    name: 'Ansambel KARAVAN',
    genre: 'Tantsumuusika',
    description: 'Dünaamiline ansambel, mis pakub meeldejäävat muusikalist kogemust.',
    gradient: 'linear-gradient(135deg, #ff6b6b, #1a2942)',
    icon: '🎤',
    iconColor: '#ffffff',
    isPopular: true,
    isNew: true,
    rating: 5.0,
    reviews: 31,
    image: 'karavan-live-2.jpg',
  },
  {
    id: 3,
    name: 'Ansambel The SkyLine',
    genre: 'Tantsumuusika',
    description: 'Kaasaegne ansambel, mis loob unustamatu õhkkonna.',
    gradient: 'linear-gradient(135deg, #e74c3c, #1a2942)',
    icon: '🎸',
    iconColor: '#ffffff',
    isPopular: false,
    isNew: true,
    rating: 4.7,
    reviews: 18,
    image: '/skyLine-1.jpg',
  },
  {
    id: 4,
    name: 'Trio Naturale',
    genre: 'Salongimuusika',
    description: 'Elegantne trio, mis pakub rafineeritud muusikalist kogemust.',
    gradient: 'linear-gradient(135deg, #00a86b, #1a2942)',
    icon: '🎺',
    iconColor: '#ffffff',
    isPopular: true,
    isNew: false,
    rating: 4.8,
    reviews: 22,
    image: 'naturale-1.jpg',
  },
  {
    id: 5,
    name: 'Ansambel Beati Mandolini',
    genre: 'Salongimuusika',
    description: 'Rahulik ja meeldiv ansambel salongimuusikaga.',
    gradient: 'linear-gradient(135deg, #9b59b6, #1a2942)',
    icon: '🎹',
    iconColor: '#ffffff',
    isPopular: false,
    isNew: false,
    rating: 4.6,
    reviews: 15,
    image: 'beati-1.jpg',
  },
  {
    id: 6,
    name: 'Helin-Mari Arderi Trio',
    genre: 'Salongimuusika',
    description: 'Peen ja elegantsne trio, mis loob erilise õhkkonna.',
    gradient: 'linear-gradient(135deg, #3498db, #1a2942)',
    icon: '🎻',
    iconColor: '#ffffff',
    isPopular: false,
    isNew: true,
    rating: 4.9,
    reviews: 19,
    image: '/helin-1.jpg',
  },
  {
    id: 7,
    name: 'Alen Veziko',
    genre: 'Klassikaline',
    description: 'Virtuoosne klassikalise muusika esitaja.',
    gradient: 'linear-gradient(135deg, #16a085, #1a2942)',
    icon: '🎼',
    iconColor: '#ffffff',
    isPopular: true,
    isNew: false,
    rating: 5.0,
    reviews: 28,
    image: 'alen-1.jpg',
  },
];

export default function ArtistsPage({ onNavigate }: ArtistsPageProps) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'tantsumuusika' | 'salongimuusika' | 'klassikaline'>('all');
  const [contactedArtist, setContactedArtist] = useState<number | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // TIMING: Track scroll position for contextual cues
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = 
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      activeFilter === 'all' ? true :
      activeFilter === 'tantsumuusika' ? artist.genre === 'Tantsumuusika' :
      activeFilter === 'salongimuusika' ? artist.genre === 'Salongimuusika' :
      activeFilter === 'klassikaline' ? artist.genre === 'Klassikaline' :
      true;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <AppTheme>
      <SEO
        title="Artistid | Tantsumuusika, Salongimuusika ja Klassikaline Muusika | LendMuusik OÜ"
        description="Vaadake meie artistide portfooliot - tantsumuusika, salongimuusika ja klassikaline muusika. Üle 20 professionaalse artisti teie üritusele. Tellige artist täna!"
        keywords="Eesti artistid, tantsumuusika, salongimuusika, klassikaline muusika, artistide tellimine, ürituste muusikud, ansamblid, muusikud"
        url="https://lendmusic.ee/artists"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "LendMuusik Artistid",
          "description": "Professionaalsed artistid erinevatest žanritest",
          "itemListElement": artists.map((artist, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Person",
              "name": artist.name,
              "description": artist.description,
              "jobTitle": artist.genre
            }
          }))
        }}
      />
      <CssBaseline enableColorScheme />
      <AppAppBar onNavigate={onNavigate} currentPage="artists" />
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
        <ArtistsHero onNavigate={onNavigate} />

        {/* CUE: Animated Notification */}
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

        {/* Motivation Section - Social Proof */}
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 3, sm: 4 },
            bgcolor: 'background.default',
            ...theme.applyStyles('dark', {
              bgcolor: '#0a1628',
            }),
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'primary.main',
                      ...theme.applyStyles('dark', {
                        color: '#00d184',
                      }),
                    }}
                  >
                    5.0
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarRoundedIcon
                        key={star}
                        sx={{
                          color: '#ffc107',
                          fontSize: '1.5rem',
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Üle 150 rahuloleva kliendi
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Chip
                    icon={<CheckCircleIcon />}
                    label="40+ aastat kogemust"
                    sx={{
                      bgcolor: 'rgba(0, 168, 107, 0.1)',
                      color: 'primary.main',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Chip
                    icon={<ThumbUpIcon />}
                    label="500+ edukat üritust"
                    sx={{
                      bgcolor: 'rgba(0, 168, 107, 0.1)',
                      color: 'primary.main',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Chip
                    icon={<StarRoundedIcon />}
                    label="20+ professionaalset artisti"
                    sx={{
                      bgcolor: 'rgba(0, 168, 107, 0.1)',
                      color: 'primary.main',
                      fontWeight: 600,
                      border: '1px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Search and Filter Section */}
        <Box
          sx={{
            py: 6,
            px: { xs: 3, sm: 4 },
            bgcolor: 'background.default',
            ...theme.applyStyles('dark', {
              bgcolor: '#0a1628',
            }),
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              {/* Search Input */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Box sx={{ position: 'relative' }}>
                  <TextField
                    fullWidth
                    placeholder="Otsi artisti, bändi või žanrit..."
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
                                  : 'rgba(255, 255, 255, 0.6) !important',
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
                        border: '2px solid rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        fontSize: '1rem',
                        color: 'text.primary',
                        '& fieldset': {
                          border: 'none',
                        },
                        '&:hover': {
                          borderColor: 'rgba(0, 168, 107, 0.3)',
                          bgcolor: '#ffffff',
                          boxShadow: '0 4px 12px rgba(0, 168, 107, 0.1)',
                        },
                        '&.Mui-focused': {
                          borderColor: 'primary.main',
                          bgcolor: '#ffffff',
                          boxShadow: '0 0 0 3px rgba(0, 168, 107, 0.2)',
                        },
                        ...theme.applyStyles('dark', {
                          bgcolor: 'rgba(255, 255, 255, 0.05) !important',
                          border: '2px solid rgba(255, 255, 255, 0.1) !important',
                          color: 'rgba(255, 255, 255, 0.9) !important',
                          '&:hover': {
                            borderColor: 'rgba(0, 209, 132, 0.4) !important',
                            bgcolor: 'rgba(255, 255, 255, 0.08) !important',
                            boxShadow: '0 4px 12px rgba(0, 209, 132, 0.15) !important',
                          },
                          '&.Mui-focused': {
                            borderColor: '#00d184 !important',
                            bgcolor: 'rgba(255, 255, 255, 0.1) !important',
                            boxShadow: '0 0 0 3px rgba(0, 209, 132, 0.25) !important',
                          },
                        }),
                      },
                      '& .MuiOutlinedInput-input': {
                        py: 1.5,
                        fontSize: '1rem',
                        color: 'text.primary',
                        '&::placeholder': {
                          color: 'rgba(0, 0, 0, 0.5)',
                          opacity: 1,
                        },
                        ...theme.applyStyles('dark', {
                          color: 'rgba(255, 255, 255, 0.9) !important',
                          '&::placeholder': {
                            color: 'rgba(255, 255, 255, 0.5) !important',
                            opacity: 1,
                          },
                        }),
                      },
                    })}
                  />
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
                    {searchQuery || activeFilter !== 'all'
                      ? `Leitud ${filteredArtists.length} artisti`
                      : `Kokku ${artists.length} artisti`}
                  </Typography>
                </Box>
              </Grid>
              
              {/* Filter Buttons */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                  {[
                    { key: 'all', label: 'Kõik' },
                    { key: 'tantsumuusika', label: 'Tantsumuusika' },
                    { key: 'salongimuusika', label: 'Salongimuusika' },
                    { key: 'klassikaline', label: 'Klassikaline' },
                  ].map((filter) => (
                    <Button
                      key={filter.key}
                      variant={activeFilter === filter.key ? 'contained' : 'outlined'}
                      color="primary"
                      size="small"
                      onClick={() => setActiveFilter(filter.key as any)}
                      sx={{
                        borderRadius: '20px',
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
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'rgba(0, 168, 107, 0.3)',
                          color: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.9)'
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
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Artists Grid Section */}
        <Box
          id="artists-grid"
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
            {/* TIMING: Contextual Chip */}
            {scrollPosition > 200 && scrollPosition < 800 && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Chip
                  icon={<CompareArrowsIcon />}
                  label="Vaata meie artiste"
                  onClick={() => {
                    const artistsGrid = document.getElementById('artists-grid');
                    artistsGrid?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    px: 2,
                    py: 2.5,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              </Box>
            )}

            {filteredArtists.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Alert severity="info" sx={{ mb: 2, maxWidth: 600, mx: 'auto' }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Artiste ei leitud
                  </Typography>
                  <Typography variant="body2">
                    Proovige muuta otsingukriteeriume või filtreid
                  </Typography>
                </Alert>
              </Box>
            ) : (
              <>
                {showSuccessMessage && (
                  <Alert
                    severity="success"
                    icon={<CheckCircleIcon />}
                    onClose={() => setShowSuccessMessage(false)}
                    sx={{ mb: 3 }}
                  >
                    Päring edukalt saadetud! Võtame teiega ühendust varsti.
                  </Alert>
                )}
              <Grid container spacing={4}>
                {filteredArtists.map((artist) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={artist.id}>
                    <Card
                      sx={(theme) => ({
                        position: 'relative',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        aspectRatio: '4/5',
                        background: artist.gradient,
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 209, 132, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)'
                            : 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.85) 100%)',
                          zIndex: 2,
                          transition: 'all 0.4s ease',
                        },
                        '&:hover': {
                          transform: 'translateY(-10px) scale(1.02)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 8px 32px rgba(0, 229, 161, 0.2), 0 16px 48px rgba(0, 209, 132, 0.15), 0 24px 64px rgba(0, 0, 0, 0.3)'
                            : '0 8px 32px rgba(0, 168, 107, 0.15), 0 16px 48px rgba(0, 168, 107, 0.1), 0 24px 64px rgba(0, 0, 0, 0.08)',
                          '&::before': {
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(180deg, rgba(0, 209, 132, 0.2) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.95) 100%)'
                              : 'linear-gradient(180deg, rgba(0, 168, 107, 0.15) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.9) 100%)',
                          },
                          '& .artist-image': {
                            transform: 'scale(1.1)',
                          },
                        },
                      })}
                    >
                      {/* Artist Image */}
                      {artist.image && (
                        <Box
                          component="img"
                          src={getImagePath(artist.image)}
                          alt={`${artist.name} - ${artist.genre} artist LendMuusik OÜ portfoolios`}
                          className="artist-image"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1,
                            transition: 'transform 0.4s ease',
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      )}
                      
                      {/* Background Icon (fallback when no image) */}
                      {!artist.image && (
                        <Box
                          className="artist-icon"
                          sx={{
                            position: 'absolute',
                            top: '10%',
                            right: '10%',
                            fontSize: '8rem',
                            opacity: 0.2,
                            zIndex: 1,
                            transition: 'all 0.4s ease',
                            color: artist.iconColor,
                          }}
                        >
                          {artist.icon}
                        </Box>
                      )}

                      {/* Badges - Motivation Enhancement */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          zIndex: 4,
                          display: 'flex',
                          gap: 1,
                          flexWrap: 'wrap',
                        }}
                      >
                        {artist.isPopular && (
                          <Chip
                            icon={<TrendingUpIcon sx={{ fontSize: '1rem !important' }} />}
                            label="POPULAARNE"
                            sx={{
                              bgcolor: 'rgba(255, 193, 7, 0.95)',
                              color: '#000000',
                              fontWeight: 700,
                              fontSize: '0.7rem',
                              height: 24,
                              backdropFilter: 'blur(10px)',
                              boxShadow: '0 2px 8px rgba(255, 193, 7, 0.4)',
                            }}
                          />
                        )}
                        {artist.isNew && (
                          <Chip
                            icon={<NewReleasesIcon sx={{ fontSize: '1rem !important' }} />}
                            label="UUUS"
                            sx={{
                              bgcolor: 'rgba(33, 150, 243, 0.95)',
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '0.7rem',
                              height: 24,
                              backdropFilter: 'blur(10px)',
                              boxShadow: '0 2px 8px rgba(33, 150, 243, 0.4)',
                            }}
                          />
                        )}
                      </Box>

                      {/* Artist Info */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: { xs: 2.5, sm: 3, md: 3.5 },
                          zIndex: 3,
                        }}
                      >
                        <Box sx={{ display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                          <Chip
                            label={artist.genre.toUpperCase()}
                            sx={{
                              bgcolor: 'rgba(0, 168, 107, 0.8)',
                              color: '#ffffff',
                              fontWeight: 600,
                              fontSize: '0.75rem',
                              height: 28,
                              backdropFilter: 'blur(10px)',
                            }}
                          />
                          {/* Rating - Evaluation Enhancement */}
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              bgcolor: 'rgba(0, 0, 0, 0.5)',
                              px: 1,
                              py: 0.5,
                              borderRadius: '12px',
                              backdropFilter: 'blur(10px)',
                            }}
                          >
                            <StarRoundedIcon
                              sx={{
                                color: '#ffc107',
                                fontSize: '1rem',
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{
                                color: '#ffffff',
                                fontWeight: 700,
                                fontSize: '0.75rem',
                              }}
                            >
                              {artist.rating}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '0.7rem',
                              }}
                            >
                              ({artist.reviews})
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 900,
                            mb: 1,
                            color: '#ffffff',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                            fontSize: { xs: '1.5rem', md: '1.8rem' },
                          }}
                        >
                          {artist.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)',
                            mb: 2,
                          }}
                        >
                          {artist.description}
                        </Typography>
                        {/* CTA Button - Prompt Enhancement */}
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          onClick={() => {
                            setContactedArtist(artist.id);
                            setShowSuccessMessage(true);
                            setTimeout(() => setShowSuccessMessage(false), 5000);
                          }}
                          sx={{
                            borderRadius: '20px',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            py: 1,
                            background: 'linear-gradient(135deg, #00a86b, #00d184)',
                            boxShadow: '0 4px 12px rgba(0, 168, 107, 0.4)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 16px rgba(0, 168, 107, 0.6)',
                              background: 'linear-gradient(135deg, #00b876, #00e194)',
                            },
                            '&:active': {
                              transform: 'translateY(0)',
                            },
                          }}
                          startIcon={<PhoneIcon />}
                        >
                          Võta Ühendust
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </>
            )}
          </Container>
        </Box>

        <Footer onNavigate={onNavigate} />
      </Box>
    </AppTheme>
  );
}
