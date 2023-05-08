import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import { useTranslation } from 'react-i18next';
import SwitchLang from './SwitchLang';
import { theme } from '../theme';
import { useAppDispatch } from '../hooks/redux';
import { authSlice } from '../store/reducers/authSlice';

const pages = ['Project', 'Course', 'Developers'];
const settings = ['Profile', 'Account', 'Dashboard'];

export default function Header() {
  const color = theme.palette;
  const { t } = useTranslation();

  const [position, setPosition] = useState<'static' | undefined | 'sticky'>(
    'static'
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { setIsUserAuth } = authSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getPosition = () =>
      setPosition(window.scrollY > 50 ? 'sticky' : 'static');
    window.addEventListener('scroll', getPosition);

    return () => {
      window.removeEventListener('scroll', getPosition);
    };
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(setIsUserAuth(false));
      })
      .catch((error) => {
        console.log(error);
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
            }
          : {}
      }
    >
      <Container maxWidth="lg" sx={{ padding: { xs: '0 12px', md: '0 40px' } }}>
        <Toolbar disableGutters sx={{ alignItems: 'stretch' }}>
          <CodeRoundedIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              alignSelf: 'center',
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', alignItems: 'stretch' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: 'inherit', display: 'block' }}
              >
                {t(page)}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              gap: { xs: '5px', md: '20px' },
              flexGrow: 0,
              display: 'flex',
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Button
              variant="text"
              className="sing_out_btn"
              sx={{ padding: '0 15px', color: color.secondary.main }}
              onClick={handleSignOut}
            >
              {t('Sign Out')}
            </Button>
            <SwitchLang />
            <Menu
              sx={{ mt: '45px' }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
