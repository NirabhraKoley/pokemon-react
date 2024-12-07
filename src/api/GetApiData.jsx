import React from 'react'

export const getApiData = async() => {
    const API = "https://pokeapi.co/api/v2/pokemon?limit=200"
    try {
        const res = await fetch(API)
        const data = res.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
  return (
    <div>GetApiData</div>
  )
}
