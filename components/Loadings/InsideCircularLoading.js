import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function InsideCircularLoading(){
    return (
        <div className="mt-2 p-0 max-w-full text-center relative t-0">
            <div className="block">
                <CircularProgress size={25} className="text-primary" />
            </div>
        </div>
    );
}