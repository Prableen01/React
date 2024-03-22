import React from 'react';

export default function Navbar() {
    return (
        <>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <ul class="nav nav-pills mt-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./">Contact Us</a>
                </li>
                
            </ul>
        </>

    )
}