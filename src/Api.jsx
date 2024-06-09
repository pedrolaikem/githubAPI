import axios from 'axios'
import React, { useState } from 'react'



const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getUser = async (login) => {
  try {
    return await api.get(`/${login}`);
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const getRepos = async (login) => {
  try {
    return await api.get(`/${login}/repos`);
  } catch (error) {
    console.error('Error fetching repos:', error);
    throw error;
  }
}
export default api