import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import AvatarWrapper from '../AvatarWrapper/AvatarWrapper';
import graphql_logo from '../../assets/GraphQL_Logo.png';
import SwitchLang from '../SwitchLang/SwitchLang';
import theme from '../../theme';
import './header.css';

interface HeaderProps {
  isAuthorized: boolean | undefined;
}

export default function Header({ isAuthorized }: HeaderProps) {
  const color = theme.palette;
  const { t } = useTranslation();
  const [position, setPosition] = useState<'static' | undefined | 'sticky'>(
    'static'
  );

  useEffect(() => {
    const getPosition = () =>
      setPosition(window.scrollY > 50 ? 'sticky' : 'static');
    window.addEventListener('scroll', getPosition);

    return () => {
      window.removeEventListener('scroll', getPosition);
    };
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success(t('You have successfully logout'), {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      })
      .catch((error) => {
        if (error) {
          toast.error(t('Something went wrong'), {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      });
  };

  return (
    <AppBar
      position={position}
      sx={
        position === 'sticky'
          ? {
              background: 'transparent',
              backdropFilter: 'blur(5px)',
              color: color.primary.dark,
              animation: 'slideDown 0.35s ease-out',
              zIndex: 2500,
            }
          : {}
      }
    >
      <Container maxWidth="lg" sx={{ padding: { xs: '0 12px', md: '0 40px' } }}>
        <Toolbar
          disableGutters
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Link to="/">
            <img
              className="logo-go-home"
              src={graphql_logo}
              alt="go-to-main-apge"
            />
          </Link>
          <Box
            sx={{
              gap: { xs: '5px', md: '20px' },
              flexGrow: 0,
              display: 'flex',
            }}
          >
            {isAuthorized && <AvatarWrapper handleSignOut={handleSignOut} />}
            <SwitchLang />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
