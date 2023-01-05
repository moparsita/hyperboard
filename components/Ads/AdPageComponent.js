import React from "react";
import AdPagePreviewComponent from "./AdPagePreviewComponent";


export default function AdPageComponent({item}) {
    let ads = item.ads;

    return (
        <>
            {/* eslint-disable-next-line react/jsx-key */}
            {ads ? ads.map(e => <AdPagePreviewComponent ad={e}/>) : <></>}
        </>
    );
}
