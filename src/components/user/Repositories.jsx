import React from 'react'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CircularProgress from '@mui/material/CircularProgress';
import getRepos from '../../Api'
import { Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const Repositories = ({ login }) => {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        const loadRepos = async () => {
            const [repos] = await Promise.all([getRepos('users/' + login + '/repos')]);
            setRepos(repos.data);
        };

        if (login) {
            loadRepos();
        }
    }, [login]);

    const getLanguageColor = (language) => {
        switch (language) {
            case 'JavaScript':
                return 'yellow';
                break;
            case 'Python':
                return '#3776ab';
                break;
            case 'CSS':
                return '#264de4';
                break;
            default:
                return 'gray';
                break;
        }
        return language
    }

    if (!repos) {
        return (
            <Grid container className='flex items-center justify-center'>
                <Grid item xs={4} className='flex flex-col justify-between bg-blackA rounded'>
                    <CircularProgress />
                </Grid>
            </Grid>
        );
    }

    return (
        <Grid container spacing={1} className='flex flex-wrap '>
            {repos.map((repo) => (
                <Grid key={repo.id} item xs={12} sm={12} md={12} lg={4} className='p-8'>
                    <Grid container className='bg-blackA rounded h-[180px] p-6 text-start flex flex-col justify-between ml-4'>
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

                </Grid>
            ))}
        </Grid>
    );
};



export default Repositories