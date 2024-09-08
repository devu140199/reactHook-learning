import React, { useState } from "react";
import B from "./B";
import C from "./C";
import D from "./D";
import E from "./E"

function A(){

    //hook variables
    const [nh1, setNh1] = useState("North Korean hackers target developers in latest npm attack wave");
    const [np1, setNp1] = useState("A fresh offensive by suspected North Korean hacking groups has targeted the open-source software community with a series of malicious packages uploaded to the npm repository.");
    const [np2, setNp2] = useState("Identified by cybersecurity firm Phylum, the attacks leverage multiple techniques and appear designed to steal cryptocurrency and sensitive data from unsuspecting developers.");
    const [np3, setNp3] = useState("The campaign began on 12th August and involves several distinct publication patterns and attack types, suggesting the involvement of multiple groups or a coordinated effort with shared objectives.");
    const [np4, setNp4] = useState("“These attacks are characterised by multi-stage obfuscated JavaScript that downloads additional malware components from remote servers,” explains Phylum.");

    //function return somethings
    //react function return jsx syntax
    return (
        <>
        <h1>{nh1}</h1>
        <B np1 = {np1}/>
        <C np2 = {np2}/>
        <D np3 = {np3}/>
        <E np4 = {np4}/>
        </>
    )
}

export default A;

