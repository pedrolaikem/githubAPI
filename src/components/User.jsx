import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import InfoVertical from './user/InfoVertical';
import getUser from '../Api';
import getRepos from '../Api';
import Repositories from './user/Repositories';

const User = () => {
    const { login } = useParams();
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const [user] = await Promise.all([getUser('users/' + login)]);
            setUser(user.data);
        };

        if (login) {
            loadData();
        }
    }, [login]);

    useEffect(() => {
        const loadRepos = async () => {
            const [repos] = await Promise.all([getRepos('users/' + login + '/repos')]);
            setRepos(repos.data);
        };

        if (login) {
            loadRepos();
        }
    }, [login]);


    return (
        <div className='min-h-screen flex flex-row bg-[#191919]'>
            <Grid container style={{ width: '20rem' }} className='flex-grow-0 flex-shrink-0'>
                <Grid item xs={12}>
                    <InfoVertical user={user} />
                </Grid>
            </Grid>
            <Grid container className='flex-grow flex-shrink overflow-auto'>
                <Grid item xs={12} className='text-white bg-[#2d2d2d]'>
                    <Typography variant='h2' style={{ marginBottom: '20px', textAlign: 'center' }}>
                        Repositories
                    </Typography>
                    <Repositories repos={repos} />
                </Grid>
            </Grid>
        </div>
    );
};

export default User;
