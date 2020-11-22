import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap'



function Eroor404() {

    return (
        <>
            <div class="row justify-content-center mt-5 align-items-center">
                <div class="col-md-6">
                    <div class="form-input-content text-center">
                        <div class="mb-5">
                            <Link class="btn btn-primary" to={'./'}>Back to Home</Link>
                        </div>
                        <h1 class="error-text font-weight-bold">404</h1>
                        <h4 class="mt-4"><i class="fa fa-exclamation-triangle text-warning"></i> The page you were looking for is not found!</h4>
                        <p>You may have mistyped the address or the page may have moved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eroor404;