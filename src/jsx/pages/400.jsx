import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap'



function Eroor400() {

    return (
        <>
            <div class="row justify-content-center mt-5 align-items-center">
                <div class="col-md-6">
                    <div class="form-input-content text-center">
                        <div class="mb-5">
                            <Link class="btn btn-primary" to={'./'}>Back to Home</Link>
                        </div>
                        <h1 class="error-text font-weight-bold">400</h1>
                        <h4 class="mt-4"><i class="fa fa-thumbs-down text-danger"></i> Bad Request</h4>
                        <p>Your Request resulted in an error</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eroor400;