import React from 'react';


export default function Form(props) {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <form>
                <div className="mb-3 mt-3">
                    <label for="exampleInputPassword1" className="form-label">Fullname</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 mt-3">
                    <label for="exampleInputEmail1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="form-floating mt-3 mb-3">
                    <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2" ></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>

                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
        </>
    );
}
