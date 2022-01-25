import React from 'react';

function Navbar() {
    return (
        <nav className="diagnal_nav navbar navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand" href="#">
                    D I A G N A L
                </a>
                <div>
                    <button className='login_btn'>
                        LOG IN
                    </button>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;
