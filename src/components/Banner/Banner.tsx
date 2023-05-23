import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container } from '@mui/material/';
import gif from '../../assets/earth.gif';
import './banner.style.css';

interface WelcomeProps {
  isAuthorized: boolean | undefined;
}

export default function SimpleContainer({ isAuthorized }: WelcomeProps) {
  const { t } = useTranslation();
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toRotate = ['Students of RSS', 'Web Developers', 'Web Disigners'];
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
              GraphQL playground
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
            {`Hello, we are\n`}
            <span className="wrap">{text}</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            perferendis hic incidunt omnis eius. Porro eveniet dolores, quos,
            voluptatum minima fuga molestias obcaecati id enim pariatur error
            tempore quasi corporis!
          </p>
        </div>

        <div className="banner-img">
          <img className="earth" src={gif} alt="Earth" />
        </div>
      </div>
    </Container>
  );
}
