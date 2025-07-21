

import React from "react";
import {CircleLoader} from "react-spinners"

const Loader1: React.FC = () => {
    return (
        <>

            <div className="d-flex justify-content-center align-items-center" style={{height:"65vh"}}>
                <CircleLoader
                    color="#09270b"
                    cssOverride={{}}
                    loading
                    size={80}
                    speedMultiplier={1}
                />
            </div>

        </>
    );
};


export default Loader1;