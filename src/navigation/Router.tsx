import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Main } from '../screen/Main'


export const Router = () => {
//   const basename: string = `${process.env.REACT_APP_HOST_VER}` //BASE URL;

    
    
    return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} Component={Main} />
        </Routes>
      </BrowserRouter>
    )
}
