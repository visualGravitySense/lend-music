import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown.tsx';
import Sitemark from './SitemarkIcon.tsx';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.vars?.palette?.divider ?? theme.palette.divider,
  backgroundColor: theme.vars?.palette?.background?.defaultChannel
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.vars?.shadows?.[1] ?? theme.shadows[1],
  padding: '8px 12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.vars?.palette?.background?.defaultChannel
      ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.6)`
      : alpha(theme.palette.background.default, 0.6),
    borderColor: 'rgba(0, 168, 107, 0.3)',
  },
}));

interface AppAppBarProps {
  onNavigate?: (page: 'home' | 'about') => void;
  currentPage?: 'home' | 'about';
}

export default function AppAppBar({ onNavigate, currentPage = 'home' }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark onNavigate={onNavigate} />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
              <Button
                variant="text"
                size="small"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'instant' })
                  onNavigate?.('home')
                }}
                sx={{
                  color: currentPage === 'home' ? 'primary.light' : 'text.secondary',
                  fontWeight: 500,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: currentPage === 'home' ? '80%' : 0,
                    height: 2,
                    background: 'primary.main',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    color: 'primary.light',
                    backgroundColor: 'rgba(0, 168, 107, 0.08)',
                    '&::after': {
                      width: '80%',
                    },
                  },
                }}
              >
                Avaleht
              </Button>
              <Button
                variant="text"
                size="small"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'instant' })
                  onNavigate?.('about')
                }}
                sx={{
                  color: currentPage === 'about' ? 'primary.light' : 'text.secondary',
                  fontWeight: 500,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: currentPage === 'about' ? '80%' : 0,
                    height: 2,
                    background: 'primary.main',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    color: 'primary.light',
                    backgroundColor: 'rgba(0, 168, 107, 0.08)',
                    '&::after': {
                      width: '80%',
                    },
                  },
                }}
              >
                Firmast
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1.5,
              alignItems: 'center',
            }}
          >
            <Button
              variant="text"
              size="small"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.light',
                  backgroundColor: 'rgba(0, 168, 107, 0.1)',
                },
              }}
            >
              Sign in
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #00a86b, #00d184)',
                boxShadow: '0 4px 12px rgba(0, 168, 107, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0, 168, 107, 0.4)',
                  background: 'linear-gradient(135deg, #00d184, #00a86b)',
                },
              }}
            >
              Sign up
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
