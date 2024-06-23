import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Input, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import GitHubLogo from '../assets/images/github-logo.svg'
import Textfield from '@mui/material/TextField';


const Home = () => {

    const [login, setLogin] = useState()
    const navigate = useNavigate()

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            navigate(`/users/${login}`)
        }

    }

    return (
        <>
            <div className='h-screen grid items-center place-items-center bg-[#191919]'>
                <Grid container spacing={2} alignItems="center" justifyContent="center"
                    className='  text-white'>
                    <Grid item >
                        <img src={GitHubLogo} />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Typography variant='h4' >Search for your Github profile</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign="center" style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Textfield placeholder="Your GitHub profile"
                            className='w-[21%] rounded  text-center text-black '
                            style={{ backgroundColor: 'white' }}
                            value={login}
                            onChange={(e) => {
                                setLogin(e.target.value);
                            }}
                            onKeyDown={handleSearch}
                            required={true}
                        />

                        <Link to={login ? `users/${login}` : null}>
                            <IconButton >
                                <SearchIcon style={{ color: 'white' }} className='mt-2'/>
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs={12} className='text-center'>
                        {
                            !login && <Typography variant='body2' color="red">Please enter a valid GitHub username</Typography>
                        }
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Home 