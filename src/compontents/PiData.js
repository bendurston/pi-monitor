import React from "react";

export default function PiData(){
    
    function getCPUData(){
        return(
            <div>
                CPU Data
            </div>
        )
    };
    
    function getMemoryData(){
        return(
            <div>
                Memory Data
            </div>
        )
    };

    function getOtherData(){
        return(
            <div>
                Other Data
            </div>
        )
    };
    
    return(
        <div>
            <div>
                { getCPUData() }
            </div>
            <div>
                { getMemoryData() }
            </div>
            <div>
                { getOtherData() }
            </div>
        </div>
    )
};