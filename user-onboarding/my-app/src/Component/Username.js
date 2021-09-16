import React from 'react';

function Username({ details }) {
    if (!details) {
        return <h3>Working fetching your users details...</h3>
    }

    return (
        <div>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms: {details.terms}</p>
        </div>
    )
}

export default Username