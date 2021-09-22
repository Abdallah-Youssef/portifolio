import React from 'react'

export const Link = ({href, children}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}