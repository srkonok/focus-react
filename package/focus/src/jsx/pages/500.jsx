import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap'



function Eroor500() {

    return (
        <>
            <div class="row justify-content-center mt-5 align-items-center">
                <div class="col-md-6">
                    <div class="form-input-content text-center">
                        <div class="mb-5">
                            <Link class="btn btn-primary" to={'./'}>Back to Home</Link>
                        </div>
                        <h1 class="error-text font-weight-bold">500</h1>
                            <h4 class="mt-4"><i class="fa fa-times-circle text-danger"></i> Internal Server Error</h4>
                            <p>You do not have permission to view this resource</p>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eroor500;