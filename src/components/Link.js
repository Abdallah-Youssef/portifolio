import React from 'react'

export const Link = ({href, children}) => {
    return (
        <>
        <a href={href} target="_blank" rel="noreferrer">
            {children}
            <i className="fas fa-link fa-xs" style={{marginLeft: "0.6em"}}></i>
        </a>
        
        </>
    )
}
