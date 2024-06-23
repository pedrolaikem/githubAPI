import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import getRepos from '../../Api';
import { Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

const Repositories = ({ repos }) => {

    if (repos == null) {
        return (
            <Grid container className='flex items-center justify-center w-screen h-[90%]'>
                <Grid item xs={12} className='text-center'>
                    <CircularProgress />
                </Grid>
            </Grid>
        );
    }

    if (repos && repos.length == 0) {
        return (
            <Grid container className='flex items-center justify-center text-center'>
                <Grid item xs={12}>
                    There are no public repositories to show.
                </Grid>
            </Grid>
        );
    }

    
    const getLanguageColor = (language) => {
        switch (language) {
            case 'JavaScript':
                return 'yellow';
            case 'Python':
                return '#3776ab';
            case 'CSS':
                return '#264de4';
            case 'C#':
                return '#68217a';
            default:
                return 'gray';
        }
    };
    console.log(repos)
    

    return (
        <Grid container spacing={1} className='flex flex-wrap'>
            {repos.map((repo) => (
                <Grid key={repo.id} item xs={12} sm={12} md={6} lg={4} className='p-8'>
                    <Box>
                        <Grid container className='bg-blackA rounded min-h-[210px] p-6 text-start flex flex-col justify-between ml-4'>
                            <Grid item xs={12}>
                                <Typography variant='h6'>
                                    {repo.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body2' style={{ marginTop: '8px', flexWrap: 'wrap' }} className='whitespace-wrap'>
                                    {repo.description ? repo.description : 'No description'}
                                </Typography>
                            </Grid>
                            <Grid container className='flex justify-between items-center mt-7'>
                                <Typography color={getLanguageColor(repo.language)}>
                                    {repo.language}
                                </Typography>
                                <Typography color={getLanguageColor(repo.language)}>
                                    <a href={repo.html_url} target='_blank' rel='noreferrer'>
                                        VER
                                        &nbsp;
                                        <SendIcon />
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default Repositories;
