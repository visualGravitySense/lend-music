import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: (
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        RL
      </Avatar>
    ),
    name: 'Rein Lepik',
    occupation: 'Klient',
    testimonial:
      'Meie sõprus sai alguse aastal 1987. Kestab tänaseni!',
  },
  {
    avatar: (
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        LS
      </Avatar>
    ),
    name: 'Linda Svetlakova',
    occupation: 'Klient',
    testimonial:
      'Tänan ,vastu võtmast.',
  },
  {
    avatar: (
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        RV
      </Avatar>
    ),
    name: 'Raul Vels',
    occupation: 'Ürituse korraldaja',
    testimonial:
      'Rakveres kino Ilo\'s korraldasin Karavani 1-ametliku kontserdi. Kino kõrval oli KIT-i klubi, kuhu ma õhtuks orgunnisin bändile keika. Lahe oli!',
  },
];

export default function Testimonials() {

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '70%' },
          textAlign: 'center',
          mb: 2,
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={(theme) => ({
            color: 'text.primary',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2,
            ...theme.applyStyles('dark', {
              color: '#00E5A1',
            }),
          })}
        >
          Kliendid Räägivad
        </Typography>
        
        {/* Motivation Enhancement - Value Proposition */}
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            mb: 3,
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.7,
          }}
        >
          Vaadake, mida meie kliendid meie teenustest ütlevad. Meie pikaajaline kogemus ja usaldusväärne teenus on meie suurim väärtus.
        </Typography>
        
        {/* Social Proof - Motivation Enhancement */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ mb: 4 }}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 1.5,
              borderRadius: '16px',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(0, 229, 161, 0.15), rgba(0, 229, 161, 0.05))'
                : 'linear-gradient(135deg, rgba(0, 168, 107, 0.1), rgba(0, 168, 107, 0.05))',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
            })}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 0.25,
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <StarRoundedIcon
                  key={star}
                  sx={{
                    fontSize: '1.25rem',
                    color: 'primary.main',
                  }}
                />
              ))}
            </Box>
            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
              5.0
            </Typography>
          </Box>
          
          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 1.5,
              borderRadius: '16px',
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
              500+ rahulolevat klienti
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Grid container spacing={3}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)'}`,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
                  transition: 'opacity 0.4s ease',
                },
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.4)' : 'rgba(0, 168, 107, 0.4)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 12px 32px rgba(0, 229, 161, 0.2)'
                    : '0 12px 32px rgba(0, 168, 107, 0.15)',
                  '&::before': {
                    opacity: 1,
                  },
                },
              })}
            >
              <CardContent sx={{ flex: 1, position: 'relative', pb: 2 }}>
                {/* Ability Enhancement - Visual Quote Icon */}
                <FormatQuoteRoundedIcon
                  sx={(theme) => ({
                    fontSize: '3rem',
                    color: theme.palette.mode === 'dark' ? 'rgba(0, 229, 161, 0.2)' : 'rgba(0, 168, 107, 0.2)',
                    position: 'absolute',
                    top: -10,
                    left: -5,
                    zIndex: 0,
                  })}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    position: 'relative',
                    zIndex: 1,
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    mb: 2,
                  }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  pt: 2,
                  borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Avatar
                  sx={(theme) => ({
                    bgcolor: 'primary.main',
                    width: 56,
                    height: 56,
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    ...theme.applyStyles('dark', {
                      bgcolor: '#00E5A1',
                      color: '#0D131B',
                    }),
                  })}
                >
                  {testimonial.avatar.props.children}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 700,
                      mb: 0.5,
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                    }}
                  >
                    {testimonial.occupation}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Prompt Enhancement - Call to Action */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography
          variant="h6"
          sx={{
            color: 'text.primary',
            mb: 2,
            fontWeight: 600,
          }}
        >
          Kas soovite ka meiega koostööd teha?
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#contact"
          sx={(theme) => ({
            bgcolor: 'primary.main',
            color: theme.palette.mode === 'dark' ? '#0D131B' : 'white',
            px: 5,
            py: 1.5,
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '1.125rem',
            textTransform: 'none',
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #00E5A1, #00D184)'
              : 'linear-gradient(135deg, #00a86b, #00d184)',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 24px rgba(0, 229, 161, 0.3)'
              : '0 8px 24px rgba(0, 168, 107, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 12px 32px rgba(0, 229, 161, 0.4)'
                : '0 12px 32px rgba(0, 168, 107, 0.4)',
            },
          })}
        >
          Võtke Ühendust
        </Button>
      </Box>
    </Container>
  );
}
