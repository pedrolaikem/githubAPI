import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import InfoVertical from './user/InfoVertical';
import getUser from '../Api'
import Repositories from './user/Repositories';

const User = () => {
    const { login } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadData = async () => {

            const [user] = await Promise.all([getUser('users/' + login)])
            setUser(user.data)
        }

        if (login) {
            loadData()
        }

    }, [login])

    return (
        <>
            <div className='h-screen flex flex-row bg-[#191919]'>
                <Grid container style={{ width: '20rem', height: '100%' }}>
                    <Grid item xs={12} >
                        <InfoVertical user={user} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container xs={12} className=' text-white bg-[#2d2d2d] h-[100%] flex items-center text-center '>
                        <Grid container xs={12}>
                            <Grid item xs={12} className='text-white bg-[#2d2d2d]'>
                                <Typography variant='h2' style={{ marginBottom: '20px' }}>
                                    Repositórios
                                </Typography>
                                <div>
                                    <Repositories login={login} style={{ padding: '20px' }} />
                                </div>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default User