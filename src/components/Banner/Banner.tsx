import React, { useEffect, useState } from 'react';
import { Button, Container } from '@mui/material/';
import gif from '../../assets/earth.gif';
import './banner.style.css';

export default function SimpleContainer() {
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
  }, [text]);

  return (
    <Container
      sx={{ display: 'flex', flexWrap: 'wrap' }}
      maxWidth="lg"
      className="banner"
    >
      <div style={{ flex: 1 }}>
        <Button
          color="secondary"
          variant="outlined"
          href="/graphql"
          className="tagline"
          size="small"
        >
          GraphQL playground
        </Button>
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

      <div>
        <img src={gif} alt="Earth" style={{ maxWidth: '600px' }} />
      </div>
    </Container>
  );
}
