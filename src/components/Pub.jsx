import React from 'react'

const Pub = () => {
    return (
        <div
            className='card w-full bg-primary p-0 m-3 rounded-3'
            style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            <img
                className='d-flex justify-content-center align-items-center'
                src='../../public/images/bakeli_pub.png'
                alt="Publicité"
                style={{ height: '100%', width: '100%' }}
            />
        </div>
    )
}

export default Pub
