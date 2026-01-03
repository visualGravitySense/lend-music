import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

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

export default function Contact() {
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
    alert('Täname! Teie päring on saadetud.');
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
        </Box>

        <Grid container spacing={3}>
          {/* Company Information Card */}
          <Grid size={{ xs: 12, md: 4 }}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <BusinessIcon
                    sx={(theme) => ({
                      color: 'primary.main',
                      fontSize: '2rem',
                      ...theme.applyStyles('dark', {
                        color: '#00E5A1',
                      }),
                    })}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 700,
                    }}
                  >
                    {contactInfo.company.name}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <LocationOnIcon
                    sx={{
                      color: 'text.secondary',
                      mt: 0.5,
                      fontSize: '1.25rem',
                    }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {contactInfo.company.address}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {contactInfo.company.city}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <PhoneIcon
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.25rem',
                    }}
                  />
                  <Typography
                    variant="body2"
                    component="a"
                    href={`tel:${contactInfo.company.phone.replace(/\s/g, '')}`}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {contactInfo.company.phone}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <EmailIcon
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.25rem',
                    }}
                  />
                  <Typography
                    variant="body2"
                    component="a"
                    href={`mailto:${contactInfo.company.email}`}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {contactInfo.company.email}
                  </Typography>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <PersonIcon
                      sx={(theme) => ({
                        color: 'primary.main',
                        fontSize: '2rem',
                        ...theme.applyStyles('dark', {
                          color: '#00E5A1',
                        }),
                      })}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 700,
                        }}
                      >
                        {contact.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                        }}
                      >
                        {contact.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <PhoneIcon
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.25rem',
                      }}
                    />
                    <Typography
                      variant="body2"
                      component="a"
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {contact.phone}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <EmailIcon
                      sx={{
                        color: 'text.secondary',
                        fontSize: '1.25rem',
                      }}
                    />
                    <Typography
                      variant="body2"
                      component="a"
                      href={`mailto:${contact.email}`}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {contact.email}
                    </Typography>
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
