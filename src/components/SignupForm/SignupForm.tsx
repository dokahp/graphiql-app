import React, { SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import graphql_logo from '../../assets/GraphQL_Logo.png';

interface FormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

function SignupForm() {
  const signupForm = useForm<FormValues>();
  const { register, handleSubmit, formState, reset, watch } = signupForm;
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState(false);
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        if (user) {
          setRegisterError(() => true);
          reset();
          toast.success(t('You have successfully registered'), {
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
        if (error) {
          setRegisterError(() => true);
          reset();
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
          {t('Sign Up')}
        </Typography>

        <Typography
          component={Link}
          to="/signin"
          variant="body1"
          color="#2196f3"
        >
          {t('Already have an account?')}
        </Typography>
      </Stack>
      {registerError && (
        <Alert severity="error">
          {t('User with such email already registered')}
        </Alert>
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
          pattern: {
            value:
              /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$%!%*#?&^.\-+=])[A-Za-z0-9$@$!%*#^?&.\-+=]{8,}$/,
            message:
              t(
                'Minimum 8 characters, at least one letter, one number, one special character'
              ) ||
              'Minimum 8 characters, at least one letter, one number, one special character',
          },
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
      <TextField
        type={showPassword ? 'text' : 'password'}
        id="outlined-basic-password-confirmation"
        label={t('Password Confirmation')}
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!errors.passwordConfirmation}
        helperText={errors.passwordConfirmation?.message}
        {...register('passwordConfirmation', {
          required:
            t('Password confirmation is required') ||
            'Password confirmation is required',
          validate: (val: string) => {
            if (watch('password') !== val) {
              return (
                t('Your passwords do no match') || 'Your passwords do no match'
              );
            }
            return true;
          },
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
        {t('Sign Up')}
      </Button>
    </form>
  );
}

export default SignupForm;
