import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                Todo List
            </h1>
        </header>
    )
}

const headerStyle = {
    background: 'darkorange',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

export default Header;