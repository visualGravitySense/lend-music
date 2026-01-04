import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { getImagePath } from '../../../utils/imagePath';

const partnerLogos = [
  {
    name: 'Alexela',
    src: 'Alexela_logo-1.png',
  },
  {
    name: 'EK',
    src: 'EK__logo 1.png',
  },
  {
    name: 'Vane-Muine',
    src: 'vane-muine-logo-1.png',
  },
];

export default function LogoCollection() {
  const [visibleLogos, setVisibleLogos] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    // Stagger animation for logos - Ability Enhancement
    const timers = partnerLogos.map((_, index) =>
      setTimeout(() => {
        setVisibleLogos((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 150)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <Box
      id="logoCollection"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3 },
        background: 'linear-gradient(135deg, rgba(0, 168, 107, 0.03), rgba(0, 168, 107, 0.01))',
      }}
    >
      {/* Motivation Enhancement - Social Proof */}
      <Typography
        component="h2"
        variant="h4"
        align="center"
        sx={{
          color: 'text.primary',
          mb: 1,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #ffffff, #00d184)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Koostööpartnerid
      </Typography>
      
      <Typography
        component="p"
        variant="body1"
        align="center"
        sx={{
          color: 'text.secondary',
          mb: 4,
          maxWidth: '800px',
          mx: 'auto',
          fontSize: { xs: '0.95rem', md: '1.1rem' },
          lineHeight: 1.7,
        }}
      >
        Teeme koostööd Eesti kultuuriasutustega, erinevate firmade ja ettevõtetega ning ka paljude ürituste korraldajatega.
      </Typography>

      {/* Prompts Enhancement - Visual Cues */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: { xs: 3, sm: 4, md: 6 },
          mt: 2,
          position: 'relative',
        }}
      >
        {partnerLogos.map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={getImagePath(logo.src)}
            alt={`${logo.name} - LendMuusik OÜ partner`}
            sx={{
              width: { xs: '80px', sm: '100px', md: '120px' },
              height: { xs: '60px', sm: '80px', md: '100px' },
              objectFit: 'contain',
              filter: 'grayscale(100%)',
              opacity: visibleLogos[index] ? 0.8 : 0,
              transform: visibleLogos[index]
                ? 'translateY(0) scale(1)'
                : 'translateY(20px) scale(0.9)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'calc(100% + 20px)',
                height: 'calc(100% + 20px)',
                borderRadius: '12px',
                background: 'rgba(0, 168, 107, 0.1)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: -1,
              },
              '&:hover': {
                filter: 'grayscale(0%)',
                opacity: 1,
                transform: 'translateY(-8px) scale(1.15)',
                '&::before': {
                  opacity: 1,
                },
              },
            }}
          />
        ))}
      </Box>

      {/* Trust Indicator - Motivation Enhancement */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          mt: 4,
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2.5,
            py: 1.25,
            borderRadius: '20px',
            background: 'rgba(0, 168, 107, 0.1)',
            border: '1px solid rgba(0, 168, 107, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'rgba(0, 168, 107, 0.15)',
              borderColor: 'rgba(0, 168, 107, 0.3)',
            },
          }}
        >
          <CheckCircleRoundedIcon
            sx={{
              fontSize: '1.1rem',
              color: 'primary.main',
            }}
          />
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            Usaldusväärsed Partnerid
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
