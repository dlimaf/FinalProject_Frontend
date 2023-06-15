import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Pagar = () => {

    const { store, actions} = useContext(Context)


    return (
        <>
        {store.response1? (
        <div className="d-flex justify-content-center">
            <img id="modal_key" src={store.response1?.mach_data?.image_base_64} />
        </div>)
        : (
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <h1 className="mt-5 mb-5">.....</h1>
                </div>
        )
    }
    </>
    )
}