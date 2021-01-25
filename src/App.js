import React from 'react'
import { Hero } from './componets/Hero'
import { Navbar } from './componets/Navbar'
import { SliderData } from './data/SliderData'
import GlobalStyle from './globalStyles'

export const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Hero slides = { SliderData }/>
        </>
    )
}
