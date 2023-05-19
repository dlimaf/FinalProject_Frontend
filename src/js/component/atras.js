import React from "react";

export const Back = () => {
    return (
        <div className="d-flex justify-content-end">
            <button id="buttonvolver" className="btn btn-primary rounded-pill" onClick={() => window.history.back()}>VOLVER</button>
        </div>

    )
}

