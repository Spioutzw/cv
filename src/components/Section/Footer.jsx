'use client'

import React from 'react'
import { Box, Container, IconButton, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <Box component={"footer"} sx={{backgroundColor:'black', marginTop:'5rem'}}>
      <Container sx={{ display: 'flex', justifyContent:'space-between', borderBottom: '1px solid #444', padding :'4rem 1rem' }}>
        <Box>
          <Typography variant="h3" component="h3" style={{ textTransform: 'uppercase',fontSize:'1.5rem',fontWeight:"bold" }}>
            Roquigny Matthieu
          </Typography>
          <Typography sx={{ lineHeight: '1.6', margin: '1.5rem 0'  }} variant="body" component="p">
            Développeur Web
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ lineHeight: '1.6', fontWeight:'bold' }} variant="body" component="p">
            Social
          </Typography>
          <div>
            <IconButton href='https://github.com/Spioutzw' target='_blank'>
              <GitHubIcon sx={{color:'white'}}/>
            </IconButton>
            <IconButton href='https://www.linkedin.com/in/roquigny-matthieu-28478b1b3/' target='_blank' >
              <LinkedInIcon sx={{color:'white'}} />
            </IconButton>
          </div>
        </Box>
      </Container>
      <Container>
        <Typography sx={{ lineHeight: '1.2', padding: '3rem 0',textAlign:'center',fontSize:'12px' }} variant="body" component="p">
          © Copyright {date} Fait par <span style={{textDecoration:'underline'}}>Roquigny Matthieu</span>
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer