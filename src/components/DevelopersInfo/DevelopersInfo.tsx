import React, { useState } from 'react';
import { Avatar, Typography, Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import ava1 from '../../assets/25996430.jpg';
import ava2 from '../../assets/25996483.jpg';
import ava3 from '../../assets/25996729.jpg';
import ava4 from '../../assets/13405257.jpeg';
import ava5 from '../../assets/105945642.jpeg';
import ava6 from '../../assets/1234.jpeg';

function DevelopersInfo() {
  const { t } = useTranslation();
  const developers = [
    {
      name: t('Vitaliy Dreko'),
      avatarSrc: ava2,
      avatarHoverSrc: ava4,
      bio: 'dokahp',
    },
    {
      name: t('Halyna Stepanenko'),
      avatarSrc: ava1,
      avatarHoverSrc: ava5,
      bio: 'galinavikst',
    },
    {
      name: t('Evgeny Ermakov'),
      avatarSrc: ava3,
      avatarHoverSrc: ava6,
      bio: 'ermakovEv',
    },
  ];

  const projectInfo = {
    name: 'GRAPHQL GEO API',
    description1: `
  ${t('Task Description:')}
  ${t(
    'The task involved creating a playground for making GraphQL query requests to the countries API provided by github.com/trevorblades/countries. The application allows users to explore and retrieve country data using GraphQL queries. Authentication and registration functionalities were implemented using Firebase for secure access to the playground.'
  )}
  `,
    description2: `
  ${t(
    'The application consists of authentication and registration pages, a welcome page, and a query editor page. Seamless navigation between pages, localization support, and the utilization of the latest React technologies and external libraries enhance usability and ensure a modern user experience.'
  )}

  ${t(
    'The development team prioritized delivering a high-quality application, focusing on user-friendliness, adherence to best practices, and meeting project requirements. Their work demonstrates their dedication and proficiency in React application development.'
  )}
  `,
    description3: `
  ${t('Sincerely,')}
  ${t('The Development Team')}`,
  };

  const [activeAvatar, setActiveAvatar] = useState<number | null>(null);

  const handleAvatarHover = (index: number) => {
    setActiveAvatar(index);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: '35%', marginBottom: '5%' }}>
        {developers.map((developer, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              onMouseEnter={() => handleAvatarHover(index)}
              onMouseLeave={() => setActiveAvatar(null)}
            >
              <Avatar
                src={
                  activeAvatar === index
                    ? developer.avatarHoverSrc
                    : developer.avatarSrc
                }
                alt={developer.name}
                sx={{
                  width: 200,
                  height: 200,
                  transition: '0.5s',
                  bgcolor: deepPurple[500],
                }}
              />
              <Typography variant="h6" align="center" mt={2}>
                {developer.name}
              </Typography>
              <Typography variant="body1" align="center" mt={1}>
                {developer.bio}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box mt={4} sx={{ paddingBottom: '15%', width: '70%', margin: '0 auto' }}>
        <Typography sx={{ color: 'rgb(242, 59, 128)' }} variant="h5">
          {projectInfo.name}
        </Typography>
        <Typography textAlign="justify" variant="body1">
          {projectInfo.description1}
        </Typography>
        <Typography textAlign="justify" variant="body1">
          {projectInfo.description2}
        </Typography>
        <Typography textAlign="end" variant="body1">
          {projectInfo.description3}
        </Typography>
      </Box>
    </>
  );
}

export default DevelopersInfo;
