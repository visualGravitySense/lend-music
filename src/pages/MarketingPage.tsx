import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../components/shared-theme/AppTheme.tsx';
import AppAppBar from '../components/marketing-page/components/AppAppBar.tsx';
import Hero from '../components/marketing-page/components/Hero.tsx';
import LogoCollection from '../components/marketing-page/components/LogoCollection.tsx';
import OurArtists from '../components/marketing-page/components/OurArtists.tsx';
import MusicCarriers from '../components/marketing-page/components/MusicCarriers.tsx';
import Testimonials from '../components/marketing-page/components/Testimonials.tsx';
import Contact from '../components/marketing-page/components/Contact.tsx';
import Footer from '../components/marketing-page/components/Footer.tsx';

interface MarketingPageProps {
  disableCustomTheme?: boolean;
  onNavigate?: (page: 'home' | 'about') => void;
}

export default function MarketingPage({ disableCustomTheme, onNavigate }: MarketingPageProps) {
  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />

      <AppAppBar onNavigate={onNavigate} currentPage="home" />
      <Hero />
      <div>
        <LogoCollection />
        <OurArtists />
        <MusicCarriers />
        {/* <Features /> */}
        <Divider />
        <Testimonials />
        <Divider />
        {/* <Highlights /> */}
        {/* <Divider /> */}
        {/* <Pricing /> */}
        {/* <Divider /> */}
        {/* <FAQ /> */}
        {/* <Divider /> */}
        <Contact />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}