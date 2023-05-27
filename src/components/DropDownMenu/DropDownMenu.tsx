import { Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface DropDownMenuProps {
  handleCloseUserMenu: () => void;
  handleSignOut: () => void;
  anchorElUser: null | HTMLElement;
  email: string;
}

function DropDownMenu({
  handleCloseUserMenu,
  handleSignOut,
  anchorElUser,
  email,
}: DropDownMenuProps) {
  const { t } = useTranslation();

  return (
    <Menu
      sx={{ mt: '45px', zIndex: 1450 }}
      id="menu-appbar"
      open={Boolean(anchorElUser)}
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
      onClose={handleCloseUserMenu}
    >
      <MenuItem disabled key="email">
        <Typography>{email || 'admin@gmail.com'}</Typography>
      </MenuItem>
      <MenuItem
        key="logout"
        onClick={handleSignOut}
        sx={{ justifyContent: 'flex-end' }}
      >
        <Typography>{t('Log Out')}</Typography>
      </MenuItem>
    </Menu>
  );
}

export default DropDownMenu;
