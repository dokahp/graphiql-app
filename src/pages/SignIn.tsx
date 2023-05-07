import React, { SyntheticEvent, useState } from 'react';
import Box from '@mui/material/Box';
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event?.preventDefault();
  };
  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          bgcolor="#fff"
          maxWidth="420px"
          boxShadow="6"
          borderRadius="6px"
          margin="5px"
          sx={{ paddingX: { xs: '20px', sm: '30px', xl: '40px' } }}
          paddingY="40px"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: 2, sm: 3 } }}
          >
            <Typography variant="h5" marginRight="30px">
              Login
            </Typography>

            <Typography
              component={Link}
              to="/signup"
              variant="body1"
              color="#2196f3"
            >
              Don&apos;t have an account?
            </Typography>
          </Stack>
          <TextField
            type="email"
            margin="normal"
            id="outlined-basic-emal"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            type={showPassword ? 'text' : 'password'}
            id="outlined-basic-password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    size="large"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{ marginTop: '20px', textTransform: 'capitalize' }}
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            color="primary"
          >
            Login
          </Button>
        </Box>
      </Box>
    </main>
  );
}

export default SignIn;
