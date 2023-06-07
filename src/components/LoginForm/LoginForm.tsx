import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import graphql_logo from '../../assets/GraphQL_Logo.png';
import './loginForm.css';

interface FormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const loginForm = useForm<FormValues>();
  const { register, handleSubmit, formState, reset } = loginForm;
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState(false);
  const { t } = useTranslation();

  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event?.preventDefault();
  };

  const onSubmit = (data: FormValues) => {
    const { email, password } = data;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        if (user) {
          setAuthError(() => false);
          reset();
          toast.success(t('You have successfully logged in'), {
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
      })
      .catch((error) => {
        setAuthError(true);
        if (error) {
          reset({ password: '' });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <img className="graphql-logo" src={graphql_logo} alt="graphql-logo" />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        sx={{ mb: { xs: 2, sm: 3 } }}
      >
        <Typography variant="h5" marginRight="30px">
          {t('Sign In')}
        </Typography>

        <Typography
          component={Link}
          to="/signup"
          variant="body1"
          color="#2196f3"
        >
          {t(`Don't have an account?`)}
        </Typography>
      </Stack>
      {authError && (
        <Alert severity="error">{t('Email or password incorrect')}</Alert>
      )}
      <TextField
        type="email"
        margin="normal"
        id="outlined-basic-emal"
        label={t('Email')}
        variant="outlined"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email', {
          required: t('Email is required') || 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t('Email not valid') || 'Email not valid',
          },
        })}
      />
      <TextField
        type={showPassword ? 'text' : 'password'}
        id="outlined-basic-password"
        label={t('Password')}
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password', {
          required: t('Password is required') || 'Password is required',
        })}
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
        {t('Login')}
      </Button>
    </form>
  );
}

export default LoginForm;
