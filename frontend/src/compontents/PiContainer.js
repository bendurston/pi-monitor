import React from "react";

import PiData from "./PiData.js"

export default function PiContainer(){

    function PiItems(){
        // Get the data and put in items
        let items = ["Pi: 1", "Pi: 2", "Pi: 3"];
        return items.map((item) => (
            <div>
                <h2>{ item }</h2>
                <PiData />
            </div>
        ));
    }

    return(
        <div className="bg-blue-200">
            <h3>Hello from PiContainer</h3>
            { PiItems() }
        </div>
    )
};