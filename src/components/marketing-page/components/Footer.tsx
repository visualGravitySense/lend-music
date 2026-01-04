import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from './SitemarkIcon';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'music-carriers' | 'artists') => void;
}

const scrollToSection = (id: string, onNavigate?: (page: 'home' | 'about' | 'music-carriers' | 'artists') => void) => {
  // First try to find on current page
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  
  // If not found, navigate to home page and then scroll
  if (onNavigate) {
    onNavigate('home');
    setTimeout(() => {
      const elementAfterNav = document.getElementById(id);
      if (elementAfterNav) {
        elementAfterNav.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © LendMuusik OÜ '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer({ onNavigate }: FooterProps = {}) {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to a server
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: 'left',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <SitemarkIcon />
            {/* Motivation Enhancement - Clear Value Proposition */}
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={(theme) => ({
                fontWeight: 700, 
                mt: 3,
                mb: 1,
                color: 'text.primary',
                ...theme.applyStyles('dark', {
                  color: '#00E5A1',
                }),
              })}
            >
              Liitu uudiskirjaga
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Telli uudiskiri ja saa värskeid uudiseid, eripakkumisi ja ürituste teavitusi. 
              {/* <Box component="span" sx={{ display: 'block', mt: 1, fontWeight: 600 }}>
                Spamme ei saadeta kunagi!
              </Box> */}
            </Typography>
            
            {/* Social Proof - Ability Enhancement */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 2,
                px: 2,
                py: 1,
                borderRadius: '12px',
                bgcolor: 'action.hover',
              }}
            >
              <CheckCircleRoundedIcon
                sx={{
                  fontSize: '1.1rem',
                  color: 'primary.main',
                }}
              />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Spamme ei saadeta kunagi!
              </Typography>
            </Box>

            {/* Ability Enhancement - Simplified Form */}
            <Box component="form" onSubmit={handleSubscribe}>
              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <TextField
                  type="email"
                  size="small"
                  variant="outlined"
                  fullWidth
                  placeholder="Teie e-posti aadress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'email',
                      'aria-label': 'Sisestage oma e-posti aadress',
                    },
                  }}
                  sx={{
                    flexGrow: 1,
                    minWidth: { xs: '100%', sm: '250px' },
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'background.paper',
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <EmailIcon
                        sx={{
                          color: 'text.secondary',
                          mr: 1,
                          fontSize: '1.25rem',
                        }}
                      />
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled={subscribed}
                  sx={(theme) => ({
                    flexShrink: 0,
                    px: 4,
                    fontWeight: 700,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #00E5A1, #00D184)'
                      : 'linear-gradient(135deg, #00a86b, #00d184)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 4px 12px rgba(0, 229, 161, 0.3)'
                      : '0 4px 12px rgba(0, 168, 107, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 6px 16px rgba(0, 229, 161, 0.4)'
                        : '0 6px 16px rgba(0, 168, 107, 0.4)',
                    },
                  })}
                >
                  {subscribed ? 'Täname!' : 'Telli'}
                </Button>
              </Stack>
              {subscribed && (
                <Typography
                  variant="caption"
                  sx={{
                    color: 'success.main',
                    mt: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <CheckCircleRoundedIcon sx={{ fontSize: '1rem' }} />
                  Edukalt tellitud!
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
            Teenused
          </Typography>
          <Link color="text.secondary" variant="body2" href="#ourArtists" sx={{ '&:hover': { color: 'primary.main' } }}>
            Artistid
          </Link>
          <Link color="text.secondary" variant="body2" href="#musicCarriers" sx={{ '&:hover': { color: 'primary.main' } }}>
            Helikandijad
          </Link>
          <Link color="text.secondary" variant="body2" href="#highlights" sx={{ '&:hover': { color: 'primary.main' } }}>
            Teenused
          </Link>
          <Link color="text.secondary" variant="body2" href="#pricing" sx={{ '&:hover': { color: 'primary.main' } }}>
            Hinnad
          </Link>
          <Link color="text.secondary" variant="body2" href="#testimonials" sx={{ '&:hover': { color: 'primary.main' } }}>
            Kliendid Räägivad
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
            Ettevõte
          </Typography>
          <Link 
            color="text.secondary" 
            variant="body2" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact', onNavigate);
            }}
            sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}
          >
            Kontakt
          </Link>
          <Link 
            color="text.secondary" 
            variant="body2" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('logoCollection', onNavigate);
            }}
            sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}
          >
            Partnerid
          </Link>
          <Link 
            color="text.secondary" 
            variant="body2" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('faq', onNavigate);
            }}
            sx={{ '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}
          >
            KKK
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
            Juriidiline
          </Typography>
          <Link color="text.secondary" variant="body2" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>
            Tingimused
          </Link>
          <Link color="text.secondary" variant="body2" href="#" sx={{ '&:hover': { color: 'primary.main' } }}>
            Privaatsus
          </Link>
          <Link color="text.secondary" variant="body2" href="#contact" sx={{ '&:hover': { color: 'primary.main' } }}>
            Kontakt
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box>
          <Link 
            color="text.secondary" 
            variant="body2" 
            href="#"
            sx={{ 
              '&:hover': { color: 'primary.main' },
              textDecoration: 'none',
            }}
          >
            Privaatsuspoliitika
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link 
            color="text.secondary" 
            variant="body2" 
            href="#"
            sx={{ 
              '&:hover': { color: 'primary.main' },
              textDecoration: 'none',
            }}
          >
            Kasutustingimused
          </Link>
          <Copyright />
        </Box>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://www.facebook.com/profile.php?id=100044109416927"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/in/toivo-lend-2b51632b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAZAd-kBxIH50S1GEBZozlKrVVdSXWTtZN8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BYqzL5yf3QjONtx8W60XAAg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
