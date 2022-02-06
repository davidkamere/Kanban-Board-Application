import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";


function Logout(props){
    const history = useNavigate();

    function logoutUser(){
        localStorage.removeItem('token');
        history("/login")
    }

    return(
        <Button variant="dark" onClick={logoutUser}>
            Log out
        </Button>
    )
}

export default Logout