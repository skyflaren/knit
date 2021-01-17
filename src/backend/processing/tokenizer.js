import {store} from "../../firebase.js";
import joinQueue from "./matching.js";

async function resp(promptResponse) {
    const q = encodeURIComponent(promptResponse);
    const uri = "https://api.wit.ai/message?v=20200513&q=" + q;
    const auth = "Bearer " + "BVDTBT7XM6C2RX4OP5NTJSG6TBIC7QCM";

    return fetch(uri, {headers: {Authorization: auth}}).then(res => res.json());
}

async function tokenize(promptResponse, res){
    let CHECK = ["noun:noun", "verb:verb", "verb-part:verb-part", "wit$contact:contact", "wit$creative_work:creative_work"];
    let ret = [];
    
    for(let toCheck in CHECK){
        for(let subject in res.entities[CHECK[toCheck]]){
            ret.push(res.entities[CHECK[toCheck]][subject].body.toLowerCase());
        }
    }

    // try {
    //     document.getElementById("initial").innerHTML = promptResponse;
    //     document.getElementById("display").innerHTML = ret;
    //     console.log(ret);
    // } catch (e) {}

    //lemmatizing one day

    return ret;
}

async function fillEntry(promptResponse, SIDvalue, sentenceTokens){
    let sentenceTokenWeights = [];
    for(let i = 0; i < sentenceTokens.length; i++) sentenceTokenWeights.push(1);
    
    try {
        let obj = {};
        obj[SIDvalue] = {
            "rawResponse": promptResponse,
            "state": 1,
            "room": "",
            "topic": -1,
            "tokens": sentenceTokens,
            "tokenWeight": sentenceTokenWeights
        };
        store.collection("sessions").doc("u88U5n4VEnsJmurTdpFG").update(obj);
        return SIDvalue;
        console.log(obj);
    } catch (e) { console.log("Couldn't deposit initial values into Firebase " + SIDvalue + " || " + e); }
}

async function newUser(promptResponse, SIDvalue){
    resp(promptResponse).then(rs => tokenize(promptResponse, rs)).then(rs => fillEntry(promptResponse, SIDvalue, rs)).then(sid => joinQueue(sid));
}


export default newUser;
