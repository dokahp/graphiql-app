import { Avatar, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { useAppSelector } from '../../hooks/redux';

interface AvatarWrapperProps {
  handleSignOut: () => void;
}

function AvatarWrapper({ handleSignOut }: AvatarWrapperProps) {
  const { t } = useTranslation();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { email } = useAppSelector((state) => state.authSlice);
  const handleCloseUserMenu = () => {
    setAnchorElUser(() => null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(() => event.currentTarget);
  };
  return (
    <>
      <Tooltip title={t('Open settings')}>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0, '&:hover': { backgroundColor: 'inherit' } }}
        >
          <Avatar />
        </IconButton>
      </Tooltip>
      <DropDownMenu
        handleCloseUserMenu={handleCloseUserMenu}
        handleSignOut={handleSignOut}
        anchorElUser={anchorElUser}
        email={email}
      />
    </>
  );
}

export default AvatarWrapper;
