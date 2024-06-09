import React from 'react'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CircularProgress from '@mui/material/CircularProgress';
import PeopleIcon from '@mui/icons-material/People';
import { Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import GitHubLogo from '../../assets/images/github-logo.svg'

const InfoVertical = ({ user }) => {

    if (user === null) {
        return (
            <div className='h-[100%] w-[100%] flex items-center justify-center'>
                <CircularProgress />
            </div>
        )
    }

    console.log(user)
    const renderDados = () => {
        return (
            <div className='flex flex-col items-center w-[100%]'>
                <Grid item xs={12} className='flex items-center justify-center'>
                    <img src={user.avatar_url} alt='avatar' className='rounded-full w-[70%]' />
                </Grid>
                <Grid item xs={12} className='pt-2'>
                    <Typography variant='subtitle1'>
                        {user.name}
                    </Typography>
                    <Typography variant='subtitle1' className='text-center'>
                        {user.login}
                    </Typography>
                </Grid>
                <Grid container className='pl-2 pt-6'>
                    <Grid container spacing={1} className='pr-3'>
                        <Grid item xs={12} className='flex gap-1'>
                            <PeopleIcon />
                            <Typography variant="body2 mt-1 pl-1">
                                {user.followers} seguidores
                            </Typography >
                            <Typography variant="body2 mt-1">
                                / {user.following} seguindo
                            </Typography >
                        </Grid>
                        <Grid item xs={12} className='flex gap-2'>
                            <WorkIcon />
                            <Typography variant="body2 mt-1">
                                {user.company ? user.company : 'Sem empresa'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className='flex gap-2 mt-1'>
                            <LocationOnIcon />
                            <Typography variant="body2 mt-1">{user.location}</Typography >
                        </Grid>
                        <Grid item xs={12} className='flex gap-2 mt-1'>
                            <LinkIcon />
                            <Typography style={{whiteSpace: 'nowrap'}}variant="body2"><a href={user.blog}>{user.blog}</a></Typography >
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <>
            <Grid container className='pt-3 ' >
                <Grid item xs={12} className='text-white'>
                    <a href="/">
                        <ChevronLeftIcon />
                        Voltar
                    </a>
                </Grid>
                <Grid container className='text-white flex flex-row items-center justify-center mt-6'>
                    <Grid item>
                        {renderDados()}
                    </Grid>
                    <Grid container className='mt-12'>
                        <Grid item xs={12} className='h-[80%] flex items-center justify-center '>
                            <img src={GitHubLogo} className=' w-[70%]' />
                        </Grid>
                        <Grid container className='mt-12'>
                            <Grid item className='w-[100%]'>
                                <footer className='text-center'>
                                    This project is not affiliated with Github, it was created for practice purposes.
                                </footer>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default InfoVertical