import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const contactInfo = {
  company: {
    name: 'LendMuusik OÜ',
    address: 'Kõõmne 33, Haabersti linnaosa',
    city: '10617 Tallinn, Eesti',
    phone: '+372 50 10 820',
    email: 'info@lendmusic.ee',
  },
  contacts: [
    {
      name: 'TOIVO LEND',
      role: 'Juhataja | Meelelahutus',
      phone: '+372 50 10 820',
      email: 'toivo@lendmusic.ee',
    },
    {
      name: 'IMBI LEND',
      role: 'Helikandijate müük | Raamatupidaja',
      phone: '+372 56 66 7950',
      email: 'imbi@lendmusic.ee',
    },
  ],
};

interface ContactProps {
  onFormSubmit?: () => void;
}

export default function Contact({ onFormSubmit }: ContactProps = {}) {
  const [formData, setFormData] = React.useState({
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      phone: '',
      email: '',
      subject: '',
      message: '',
    });
    // Call the callback if provided
    if (onFormSubmit) {
      onFormSubmit();
    } else {
      alert('Täname! Teie päring on saadetud.');
    }
  };

  return (
    <Box
      id="contact"
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
            Võtke Ühendust
          </Typography>
          
          {/* Motivation Enhancement - Value Proposition */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              mb: 3,
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            Oleme siin, et aidata! Vastame teie küsimustele ja pakume personaalset nõustamist.
          </Typography>
          
          {/* Social Proof - Motivation Enhancement */}
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
                gap: 1.5,
                px: 3,
                py: 1.5,
                borderRadius: '16px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 4px 12px rgba(0, 229, 161, 0.2)'
                    : '0 4px 12px rgba(0, 168, 107, 0.15)',
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  p: 1,
                  borderRadius: '10px',
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}
              >
                <CheckCircleRoundedIcon
                  sx={{
                    fontSize: '1.25rem',
                    color: 'primary.main',
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                40+ aastat kogemust
              </Typography>
            </Box>
            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.5,
                borderRadius: '16px',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                  : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 4px 12px rgba(0, 229, 161, 0.2)'
                    : '0 4px 12px rgba(0, 168, 107, 0.15)',
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  p: 1,
                  borderRadius: '10px',
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}
              >
                <AccessTimeIcon
                  sx={{
                    fontSize: '1.25rem',
                    color: 'primary.main',
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                Kiire vastus
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {/* Company Information Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={(theme) => ({
                height: '100%',
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: 4,
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
                    ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.08) 0%, transparent 100%)'
                    : 'linear-gradient(135deg, rgba(0, 168, 107, 0.08) 0%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                },
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.02)',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.5)' : 'rgba(0, 168, 107, 0.5)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 20px 40px rgba(0, 229, 161, 0.25)'
                    : '0 20px 40px rgba(0, 168, 107, 0.2)',
                  '&::before': {
                    opacity: 1,
                  },
                },
              })}
            >
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Box
                    sx={(theme) => ({
                      p: 2,
                      borderRadius: '16px',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.2), rgba(0, 229, 161, 0.1))'
                        : 'linear-gradient(135deg, rgba(0, 168, 107, 0.15), rgba(0, 168, 107, 0.08))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.3)' : 'rgba(0, 168, 107, 0.3)'}`,
                    })}
                  >
                    <BusinessIcon
                      sx={(theme) => ({
                        color: 'primary.main',
                        fontSize: '2.5rem',
                        ...theme.applyStyles('dark', {
                          color: '#00E5A1',
                        }),
                      })}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    {contactInfo.company.name}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    p: 2,
                    borderRadius: '12px',
                    bgcolor: 'action.hover',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'action.selected',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      color: 'primary.main',
                      mt: 0.5,
                      fontSize: '1.5rem',
                    }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, mb: 0.5 }}>
                      {contactInfo.company.address}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {contactInfo.company.city}
                    </Typography>
                  </Box>
                </Box>

                {/* Ability Enhancement - Action Buttons */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                  <Button
                    component="a"
                    href={`tel:${contactInfo.company.phone.replace(/\s/g, '')}`}
                    variant="contained"
                    startIcon={<CallIcon />}
                    fullWidth
                    sx={(theme) => ({
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #00E5A1, #00D184)'
                        : 'linear-gradient(135deg, #00a86b, #00d184)',
                      color: theme.palette.mode === 'dark' ? '#0D131B' : 'white',
                      textTransform: 'none',
                      py: 1.5,
                      borderRadius: '12px',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 4px 12px rgba(0, 229, 161, 0.3)'
                        : '0 4px 12px rgba(0, 168, 107, 0.3)',
                      '&:hover': {
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #00D184, #00C175)'
                          : 'linear-gradient(135deg, #00d184, #00b870)',
                        transform: 'translateY(-3px)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 8px 20px rgba(0, 229, 161, 0.4)'
                          : '0 8px 20px rgba(0, 168, 107, 0.4)',
                      },
                    })}
                  >
                    {contactInfo.company.phone}
                  </Button>
                  
                  <Button
                    component="a"
                    href={`mailto:${contactInfo.company.email}`}
                    variant="outlined"
                    startIcon={<MailOutlineIcon />}
                    fullWidth
                    sx={(theme) => ({
                      borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.4)' : 'rgba(0, 168, 107, 0.4)',
                      borderWidth: 2,
                      color: 'text.primary',
                      textTransform: 'none',
                      py: 1.5,
                      borderRadius: '12px',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      '&:hover': {
                        borderColor: theme.palette.mode === 'dark' ? '#00E5A1' : 'primary.main',
                        borderWidth: 2,
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.1)' : 'rgba(0, 168, 107, 0.1)',
                        transform: 'translateY(-3px)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 12px rgba(0, 229, 161, 0.2)'
                          : '0 4px 12px rgba(0, 168, 107, 0.15)',
                      },
                    })}
                  >
                    Saada e-kiri
                  </Button>
                </Box>
              </Stack>
            </Card>
          </Grid>

          {/* Contact Persons Cards */}
          {contactInfo.contacts.map((contact, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={(theme) => ({
                  height: '100%',
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
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
                      ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.08) 0%, transparent 100%)'
                      : 'linear-gradient(135deg, rgba(0, 168, 107, 0.08) 0%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.5)' : 'rgba(0, 168, 107, 0.5)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 20px 40px rgba(0, 229, 161, 0.25)'
                      : '0 20px 40px rgba(0, 168, 107, 0.2)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                })}
              >
                <Stack spacing={3} sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1 }}>
                    <Box
                      sx={(theme) => ({
                        p: 2.5,
                        borderRadius: '20px',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.25), rgba(0, 229, 161, 0.15))'
                          : 'linear-gradient(135deg, rgba(0, 168, 107, 0.2), rgba(0, 168, 107, 0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.4)' : 'rgba(0, 168, 107, 0.4)'}`,
                        minWidth: '64px',
                        minHeight: '64px',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 12px rgba(0, 229, 161, 0.2)'
                          : '0 4px 12px rgba(0, 168, 107, 0.15)',
                      })}
                    >
                      <PersonIcon
                        sx={(theme) => ({
                          color: 'primary.main',
                          fontSize: '2.5rem',
                          ...theme.applyStyles('dark', {
                            color: '#00E5A1',
                          }),
                        })}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 700,
                          fontSize: { xs: '1.1rem', md: '1.25rem' },
                          mb: 0.5,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {contact.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                          lineHeight: 1.5,
                          fontWeight: 500,
                        }}
                      >
                        {contact.role}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Ability Enhancement - Action Buttons */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                    <Button
                      component="a"
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      variant="contained"
                      startIcon={<CallIcon />}
                      fullWidth
                      sx={(theme) => ({
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #00E5A1, #00D184)'
                          : 'linear-gradient(135deg, #00a86b, #00d184)',
                        color: theme.palette.mode === 'dark' ? '#0D131B' : 'white',
                        textTransform: 'none',
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 4px 12px rgba(0, 229, 161, 0.3)'
                          : '0 4px 12px rgba(0, 168, 107, 0.3)',
                        '&:hover': {
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #00D184, #00C175)'
                            : 'linear-gradient(135deg, #00d184, #00b870)',
                          transform: 'translateY(-3px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 8px 20px rgba(0, 229, 161, 0.4)'
                            : '0 8px 20px rgba(0, 168, 107, 0.4)',
                        },
                      })}
                    >
                      Helista
                    </Button>
                    
                    <Button
                      component="a"
                      href={`mailto:${contact.email}`}
                      variant="outlined"
                      startIcon={<MailOutlineIcon />}
                      fullWidth
                      sx={(theme) => ({
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.4)' : 'rgba(0, 168, 107, 0.4)',
                        borderWidth: 2,
                        color: 'text.primary',
                        textTransform: 'none',
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        '&:hover': {
                          borderColor: theme.palette.mode === 'dark' ? '#00E5A1' : 'primary.main',
                          borderWidth: 2,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.1)' : 'rgba(0, 168, 107, 0.1)',
                          transform: 'translateY(-3px)',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 4px 12px rgba(0, 229, 161, 0.2)'
                            : '0 4px 12px rgba(0, 168, 107, 0.15)',
                        },
                      })}
                    >
                      Saada e-kiri
                    </Button>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            component="h3"
            variant="h4"
            sx={(theme) => ({
              color: 'primary.main',
              mb: 4,
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              textAlign: 'center',
              ...theme.applyStyles('dark', {
                color: '#00E5A1',
              }),
            })}
          >
            Saatke Päring
          </Typography>

          <Grid container justifyContent="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Card
                component="form"
                onSubmit={handleSubmit}
                sx={(theme) => ({
                  p: { xs: 3, md: 4 },
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                  ...theme.applyStyles('dark', {
                    bgcolor: '#1C2630',
                  }),
                })}
              >
                <Stack spacing={3}>
                  <TextField
                    required
                    fullWidth
                    label="Telefoni Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={(theme) => ({
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.3)' : 'rgba(0, 168, 107, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.5)' : 'rgba(0, 168, 107, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? '#00E5A1' : 'primary.main',
                        },
                      },
                    })}
                  />

                  <TextField
                    required
                    fullWidth
                    type="email"
                    label="E-posti Aadress"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={(theme) => ({
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.3)' : 'rgba(0, 168, 107, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.5)' : 'rgba(0, 168, 107, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? '#00E5A1' : 'primary.main',
                        },
                      },
                    })}
                  />

                  <TextField
                    required
                    fullWidth
                    label="Pealkiri"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    sx={(theme) => ({
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.3)' : 'rgba(0, 168, 107, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.5)' : 'rgba(0, 168, 107, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? '#00E5A1' : 'primary.main',
                        },
                      },
                    })}
                  />

                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={6}
                    label="Kirja Sisu"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    sx={(theme) => ({
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.3)' : 'rgba(0, 168, 107, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.5)' : 'rgba(0, 168, 107, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: theme.palette.mode === 'dark' ? '#00E5A1' : 'primary.main',
                        },
                      },
                    })}
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={(theme) => ({
                        bgcolor: 'primary.main',
                        color: theme.palette.mode === 'dark' ? '#0D131B' : 'white',
                        px: 6,
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
                      Saada
                    </Button>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
