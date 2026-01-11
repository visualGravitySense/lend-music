import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { alpha } from '@mui/material/styles';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PeopleIcon from '@mui/icons-material/People';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PianoIcon from '@mui/icons-material/Piano';

const artistCategories = [
  {
    title: 'TANTSUMUUSIKA',
    description: 'Energiline muusika, mis paneb kõik tantsima',
    icon: MusicNoteIcon,
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
    icon: PianoIcon,
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
    icon: LibraryMusicIcon,
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
        background: theme.palette.mode === 'dark'
          ? `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 50%, ${theme.palette.grey[900]} 100%)`
          : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, ${theme.palette.grey[50]} 50%, ${theme.palette.grey[50]} 100%)`,
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
              mb: 3,
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
                borderRadius: '2px',
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
              mb: 4,
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
              mb: 3,
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
                border: 'none',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 2px 8px rgba(0, 229, 161, 0.1), 0 4px 16px rgba(0, 0, 0, 0.15)'
                  : '0 2px 8px rgba(0, 168, 107, 0.08), 0 4px 16px rgba(0, 0, 0, 0.03)',
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
                borderRadius: '12px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: 'none',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 2px 8px rgba(0, 229, 161, 0.1), 0 4px 16px rgba(0, 0, 0, 0.15)'
                  : '0 2px 8px rgba(0, 168, 107, 0.08), 0 4px 16px rgba(0, 0, 0, 0.03)',
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
                borderRadius: '12px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: 'none',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 2px 8px rgba(0, 229, 161, 0.1), 0 4px 16px rgba(0, 0, 0, 0.15)'
                  : '0 2px 8px rgba(0, 168, 107, 0.08), 0 4px 16px rgba(0, 0, 0, 0.03)',
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
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {artistCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={(theme) => ({
                  height: '100%',
                  p: { xs: 3, sm: 4, md: 5 },
                  bgcolor: 'background.paper',
                  borderRadius: '10px',
                  border: 'none',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 2px 8px rgba(0, 229, 161, 0.1), 0 4px 16px rgba(0, 0, 0, 0.15)'
                  : '0 2px 8px rgba(0, 168, 107, 0.08), 0 4px 16px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  ...theme.applyStyles('dark', {
                    bgcolor: theme.palette.grey[800],
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
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0, 229, 161, 0.2), 0 16px 48px rgba(0, 209, 132, 0.15), 0 24px 64px rgba(0, 0, 0, 0.3)'
                      : '0 8px 32px rgba(0, 168, 107, 0.15), 0 16px 48px rgba(0, 168, 107, 0.1), 0 24px 64px rgba(0, 0, 0, 0.08)',
                    '&::before': {
                      opacity: 1,
                    },
                    cursor: 'pointer',
                  },
                })}
              >
                <Stack spacing={3.5}>
                  {/* Enhanced Visual Icon with Category-Specific Icons */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2.5,
                      pb: 2,
                      borderBottom: (theme) => `2px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.15)'}`,
                    }}
                  >
                    <Box
                      className="category-icon"
                      sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.25), rgba(0, 229, 161, 0.15))'
                          : 'linear-gradient(135deg, rgba(0, 168, 107, 0.25), rgba(0, 168, 107, 0.15))',
                        border: theme.palette.mode === 'dark'
                          ? '2px solid rgba(0, 229, 161, 0.3)'
                          : '2px solid rgba(0, 168, 107, 0.25)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 16px rgba(0, 229, 161, 0.2), 0 2px 8px rgba(0, 229, 161, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                          : '0 4px 16px rgba(0, 168, 107, 0.15), 0 2px 8px rgba(0, 168, 107, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
                            ? 'radial-gradient(circle at 50% 50%, rgba(0, 229, 161, 0.3) 0%, transparent 70%)'
                            : 'radial-gradient(circle at 50% 50%, rgba(0, 168, 107, 0.25) 0%, transparent 70%)',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                        },
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 8px 24px rgba(0, 229, 161, 0.35), 0 4px 12px rgba(0, 229, 161, 0.25), 0 0 32px rgba(0, 229, 161, 0.2)'
                            : '0 8px 24px rgba(0, 168, 107, 0.3), 0 4px 12px rgba(0, 168, 107, 0.2), 0 0 32px rgba(0, 168, 107, 0.15)',
                          '&::before': {
                            opacity: 1,
                          },
                        },
                      })}
                    >
                      {(() => {
                        const IconComponent = category.icon;
                        return (
                          <IconComponent
                            sx={{
                              fontSize: '2rem',
                              color: 'primary.main',
                              transition: 'all 0.4s ease',
                            }}
                          />
                        );
                      })()}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={(theme) => ({
                        color: 'primary.main',
                        fontWeight: 800,
                        fontSize: { xs: '1.3rem', md: '1.6rem' },
                        textTransform: 'uppercase',
                        flex: 1,
                        letterSpacing: '0.5px',
                        lineHeight: 1.3,
                        ...theme.applyStyles('dark', {
                          color: '#00E5A1',
                        }),
                      })}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  
                  {/* Enhanced Description with Better Visual Separation */}
                  <Box
                    sx={(theme) => ({
                      p: 2,
                      borderRadius: '10px',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.08), rgba(0, 229, 161, 0.03))'
                        : 'linear-gradient(135deg, rgba(0, 168, 107, 0.08), rgba(0, 168, 107, 0.03))',
                      border: theme.palette.mode === 'dark'
                        ? '1px solid rgba(0, 229, 161, 0.15)'
                        : '1px solid rgba(0, 168, 107, 0.12)',
                      mb: 1,
                    })}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        fontWeight: 500,
                      }}
                    >
                      {category.description}
                    </Typography>
                  </Box>
                  
                  {/* Enhanced Divider with Visual Accent */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      my: 2,
                    }}
                  >
                    <Box
                      sx={(theme) => ({
                        flex: 1,
                        height: '2px',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(90deg, transparent, rgba(0, 229, 161, 0.3), transparent)'
                          : 'linear-gradient(90deg, transparent, rgba(0, 168, 107, 0.25), transparent)',
                        borderRadius: '2px',
                      })}
                    />
                    <Typography
                      variant="caption"
                      sx={(theme) => ({
                        color: 'text.secondary',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '8px',
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(0, 229, 161, 0.1)'
                          : 'rgba(0, 168, 107, 0.08)',
                      })}
                    >
                      Artistid
                    </Typography>
                    <Box
                      sx={(theme) => ({
                        flex: 1,
                        height: '2px',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(90deg, transparent, rgba(0, 229, 161, 0.3), transparent)'
                          : 'linear-gradient(90deg, transparent, rgba(0, 168, 107, 0.25), transparent)',
                        borderRadius: '2px',
                      })}
                    />
                  </Box>
                  
                  <Stack spacing={2}>
                    {category.artists.map((artist, artistIndex) => (
                      <Box 
                        key={artistIndex}
                        sx={{
                          position: 'relative',
                        }}
                      >
                        {/* Enhanced Clickable Artist Links with Better Visual Separation */}
                        <Link
                          href={`#artist-${artist.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={(e) => {
                            e.preventDefault();
                            // Future: Navigate to artist profile
                          }}
                          sx={(theme) => ({
                            color: 'text.secondary',
                            fontSize: '1rem',
                            py: 1.25,
                            px: 2,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            textDecoration: 'none',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            background: theme.palette.mode === 'dark'
                              ? 'rgba(0, 0, 0, 0.2)'
                              : 'rgba(0, 0, 0, 0.02)',
                            border: theme.palette.mode === 'dark'
                              ? '1px solid rgba(176, 184, 196, 0.1)'
                              : '1px solid rgba(0, 0, 0, 0.05)',
                            mb: artistIndex < category.artists.length - 1 ? 1.5 : 0,
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              left: 0,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '4px',
                              height: 0,
                              borderRadius: '0 4px 4px 0',
                              background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(180deg, #00E5A1, #00D184)'
                                : 'linear-gradient(180deg, #00a86b, #00d184)',
                              transition: 'height 0.3s ease',
                            },
                            '&:hover': {
                              color: 'primary.main',
                              bgcolor: theme.palette.mode === 'dark'
                                ? 'rgba(0, 229, 161, 0.15)'
                                : 'rgba(0, 168, 107, 0.1)',
                              transform: 'translateX(6px)',
                              borderColor: theme.palette.mode === 'dark'
                                ? 'rgba(0, 229, 161, 0.3)'
                                : 'rgba(0, 168, 107, 0.25)',
                              boxShadow: theme.palette.mode === 'dark'
                                ? '0 4px 12px rgba(0, 229, 161, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                                : '0 4px 12px rgba(0, 168, 107, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                              '&::before': {
                                height: '70%',
                              },
                            },
                            ...theme.applyStyles('dark', {
                              '&:hover': {
                                color: '#00E5A1',
                              },
                            }),
                          })}
                        >
                          <Box
                            sx={(theme) => ({
                              width: 6,
                              height: 6,
                              borderRadius: '1px',
                              background: theme.palette.mode === 'dark'
                                ? 'rgba(0, 229, 161, 0.4)'
                                : 'rgba(0, 168, 107, 0.4)',
                              flexShrink: 0,
                            })}
                          />
                          <Box component="span" sx={{ flex: 1, fontWeight: 500 }}>
                            {artist}
                          </Box>
                        </Link>
                        {artistIndex < category.artists.length - 1 && (
                          <Box
                            sx={(theme) => ({
                              mt: 1.5,
                              height: '1px',
                              background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(90deg, transparent, rgba(176, 184, 196, 0.15), transparent)'
                                : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)',
                              borderRadius: '1px',
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
                background: (theme) => `linear-gradient(90deg, transparent, ${alpha(theme.palette.grey[50], 0.2)}, transparent)`,
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
