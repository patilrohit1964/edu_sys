import React from 'react'
import { Helmet } from 'react-helmet'
const TitleComp = ({ title }) => {
    return (

        <Helmet>
            <title>{title}</title>
            
        </Helmet>

    )
}

export default TitleComp