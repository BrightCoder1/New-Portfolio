import React from 'react'
import Details from '../components/Details'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Project from '../components/Project'
import Education from '../components/Education.jsx'
import Contact from '../components/Contact.jsx'

const Home = () => {
    return (
        <>
            <Details />
            <About />
            <Skills />
            <Work />
            <Project />
            <Education />
            <Contact />
        </>
    )
}

export default Home
