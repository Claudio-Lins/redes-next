import Link from "next/link";
import React, { useState, useEffect } from "react";


export default function BtnQuem(props) {

    

    return (
        <div className="text-[10px] max-w-[80px] text-center text-blue-600 shadow  px-2 leading-tight py-2 rounded-md bg-white">
            <Link href={props.href}>
            <a>{props.label}</a>
            </Link>
        </div>
    )
}