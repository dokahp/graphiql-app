import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import graphql_logo from '../../assets/GraphQL_Logo.png';
import SwitchLang from '../SwitchLang/SwitchLang';
import theme from '../../theme';
import { useAppSelector } from '../../hooks/redux';
import './header.css';

interface HeaderProps {
  isAuthorized: boolean | undefined;
}

export default function Header({ isAuthorized }: HeaderProps) {
  const color = theme.palette;
  const { email } = useAppSelector((state) => state.authSlice);
  const { t } = useTranslation();
  const [position, setPosition] = useState<'static' | undefined | 'sticky'>(
    'static'
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  useEffect(() => {
    const getPosition = () =>
      setPosition(window.scrollY > 50 ? 'sticky' : 'static');
    window.addEventListener('scroll', getPosition);

    return () => {
      window.removeEventListener('scroll', getPosition);
    };
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
            {isAuthorized && (
              <>
                <Tooltip title={t('Open settings')}>
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, '&:hover': { backgroundColor: 'inherit' } }}
                  >
                    <Avatar />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px', zIndex: 1450 }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem disabled key="email">
                    <Typography>{email}</Typography>
                  </MenuItem>
                  <MenuItem
                    key="logout"
                    onClick={handleSignOut}
                    sx={{ justifyContent: 'flex-end' }}
                  >
                    <Typography>{t('Log Out')}</Typography>
                  </MenuItem>
                </Menu>
              </>
            )}

            <SwitchLang />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
