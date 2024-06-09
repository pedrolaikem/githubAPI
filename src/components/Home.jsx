import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Input, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import GitHubLogo from '../assets/images/github-logo.svg'



const Home = () => {

    const [login, setLogin] = useState('')
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
                    <Grid item xs={12} textAlign="center">
                        <input placeholder="Your GitHub profile"
                            className='w-[21%] h-8 rounded  text-center text-black ml-8'
                            value={login}
                            onChange={(e) => {
                                setLogin(e.target.value);
                            }}
                            onKeyDown={handleSearch} />

                        <Link to={`users/${login}`}>
                            <IconButton >
                                <SearchIcon style={{ color: 'white' }} />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Home 