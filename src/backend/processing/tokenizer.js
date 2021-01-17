// import {db} from "../../firebase.js"
// import {generateSessionName} from "./src/utils.js"

async function resp(promptResponse) {
    const q = encodeURIComponent(promptResponse);
    const uri = 'https://api.wit.ai/message?v=20200513&q=' + q;
    const auth = 'Bearer ' + 'BVDTBT7XM6C2RX4OP5NTJSG6TBIC7QCM';

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

    try {
        document.getElementById("initial").innerHTML = promptResponse;
        document.getElementById("display").innerHTML = ret;
        console.log(ret);
    } catch (e) {}

    //lemmatize?

    return ret;
}

async function fillEntry(promptResponse, SIDvalue, sentenceTokens){
    let sentenceTokenWeights = [];
    for(let i = 0; i < sentenceTokens.length; i++) sentenceTokenWeights.push(1);
    
    try {
        store.collection("sessions").doc("SpQhTjlC7HTAJEbjPrXN").update({
            SIDvalue: {
                "rawResponse": promptResponse,
                "state": 1,
                "room": "",
                "tokens": sentenceTokens,
                "tokenWeight": sentenceTokenWeights
            }
        });
    } catch (e) { console.log("sadge" + SIDvalue); }
    
    
    // console.log(user);

    // return user;
}

async function newUser(promptResponse, SIDvalue){
    resp(promptResponse).then(rs => tokenize(promptResponse, rs)).then(rs => fillEntry(promptResponse, SIDvalue, rs));
}

console.log("test here");

setTimeout(() => {
    console.log("test 2");
    newUser("Religion and world issues", 1);
    joinQueue(1);
    newUser("My religion", 2);
    joinQueue(2);
}, 2000);

// export default newUser;
