import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
import theme from '../theme';
import { useAppSelector } from '../hooks/redux';

const pages = ['Project', 'Course', 'Developers'];

interface HeaderProps {
  isAuthorized: boolean | undefined;
}

export default function Header({ isAuthorized }: HeaderProps) {
  const color = theme.palette;
  const { t } = useTranslation();
  const { email } = useAppSelector((state) => state.authSlice);

  const [position, setPosition] = useState<'static' | undefined | 'sticky'>(
    'static'
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
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

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success('You have successfully logout', {
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
          toast.error('Something wen wrong', {
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
            {isAuthorized && (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar />
                  </IconButton>
                </Tooltip>
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
                  <MenuItem disabled key="email">
                    <Typography>{email}</Typography>
                  </MenuItem>
                  <MenuItem
                    key="logout"
                    onClick={handleSignOut}
                    sx={{ justifyContent: 'flex-end' }}
                  >
                    <Typography>Log out</Typography>
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
