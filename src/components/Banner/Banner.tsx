import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Typography } from '@mui/material/';
import gif from '../../assets/earth.gif';
import './banner.style.css';
import DevelopersInfo from '../DevelopersInfo/DevelopersInfo';

interface WelcomeProps {
  isAuthorized: boolean | undefined;
}

export default function SimpleContainer({ isAuthorized }: WelcomeProps) {
  const { t } = useTranslation();
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toRotate = [
    t('Students of RSS'),
    t('Web Developers'),
    t('Web Disigners'),
  ];
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  return (
    <Container className="wrapper">
      <div className="banner">
        <div className="banner-info">
          {isAuthorized ? (
            <Button
              color="secondary"
              variant="outlined"
              href="/graphql"
              className="tagline"
              size="small"
            >
              {t('GraphQL playground')}
            </Button>
          ) : (
            <>
              <Button sx={{ m: 2 }} variant="contained" href="/signup">
                {t('Sign Up')}
              </Button>
              <Button sx={{ m: 2 }} variant="contained" href="signin">
                {t('Sign In')}
              </Button>{' '}
            </>
          )}
          <h1>
            {t(`Hello, we are\n`)}
            <span className="wrap">{text}</span>
          </h1>
          <Typography textAlign="justify" variant="body1">
            {t('The project was developed as part of the best')}{' '}
            <span className="spanColor">React </span>
            {t('course offered by')}{' '}
            <span className="spanColor">RS School</span>.{' '}
            {t(
              'It showcases the practical application of React concepts and skills'
            )}{' '}
            {t('learned during the course.')}
          </Typography>
        </div>

        <div className="banner-img">
          <img className="earth" src={gif} alt="Earth" />
        </div>
      </div>
      <DevelopersInfo />
    </Container>
  );
}
