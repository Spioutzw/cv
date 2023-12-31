'use client'

import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Link from 'next/link';

const CardComponent = ({ title, description, image, name }) => {


    return (

        <Link href={`/projets/${name}`}>
            <Grid xs={8} md={8} lg={4} sx={{ height: '100%' }} >
                <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '100%', height: '100%', maxWidth: 450, maxHeight: 400 }}>
                    <CardMedia>
                        <Image src={image} alt="Image de Roquigny Matthieu" width={200} height={200} style={{ marginTop: '1rem', objectFit: 'contain' }} />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h5" component="h3" style={{ textTransform: 'uppercase', color: 'grey' }}>
                            {title}
                        </Typography>
                        <Typography sx={{ lineHeight: '1.6', margin: '3rem auto 3rem auto', color: 'grey' }} variant="body" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Link>
    )
}

export default CardComponent