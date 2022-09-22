import React, { useState } from 'react';

const District = ({ name, speciality }) => {
    // Power State
    const [power, setPower] = useState(1);

    const boostPower = () => {
        const newPower = power * 2;
        setPower(newPower);
    }

    const distStyle = {
        backgroundColor: 'green',
        margin: '20px',
        borderRadius: '20px',
        padding: '10px',
        textAlign: 'center'
    }

    return (
        <div style={distStyle}>
            <h2>Name: {name}</h2>
            <h4>Power: {power}</h4>
            <p>Speciality: {speciality}</p>
            <button onClick={boostPower}>Boost the Power</button>
        </div>
    )
};

export default District;