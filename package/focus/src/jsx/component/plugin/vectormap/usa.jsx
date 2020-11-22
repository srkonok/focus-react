import React, { Component } from 'react';
import Usa from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

function UsaMap() {

    return (
        <>
            <SVGMap map={Usa} />
        </>
    )
}

export default UsaMap;