import { useState } from 'react';

import './Inputs.css';

function Inputs(){
    const [ showPassword, setShowPassword ] = useState(false);

    function showOrHide(){
        if(showPassword){
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    }

    return(
        <div className="input-container">
            <input
                placeholder="Email"
                className="inputs"
            ></input>
            <div>
                <input
                    placeholder="Password"
                    className="inputs"
                    type={showPassword ? 'text' : 'password'}
                ></input>
                <button
                    onClick={showOrHide}
                >{showPassword ? 'Hide' : 'Show'}</button>
            </div>
        </div>
    )
}

export default Inputs