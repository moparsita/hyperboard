import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CircularLoading(){
    return (
        <div className="mt-72 p-0 max-w-full text-center relative t-0">
            <div className="block">
                <CircularProgress className="text-primary" />
            </div>
        </div>
    );
}