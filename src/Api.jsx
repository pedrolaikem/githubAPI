import axios from 'axios'
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  })

export const getUser = async (login) => api.get(`/users/${login}`)



export default api