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

    //lemmatizing later

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
            "tokens": sentenceTokens,
            "tokenWeight": sentenceTokenWeights
        };
        store.collection("sessions").doc("u88U5n4VEnsJmurTdpFG").update(obj);
        // store.collection("sessions").doc("u88U5n4VEnsJmurTdpFG").update(SIDvalue + 2, SIDvalue+2);
    } catch (e) { console.log("sadge" + SIDvalue + " || " + e); }
}

async function newUser(promptResponse, SIDvalue){
    resp(promptResponse).then(rs => tokenize(promptResponse, rs)).then(rs => fillEntry(promptResponse, SIDvalue, rs));
}

async function userRoomCode(userID){
    try {
        let ret;
        store.collection("sessions").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                user = doc.data()[userID];
                ret = (user.room != "" ? user.room : undefined);
                console.log(user);
                console.log("room code pog:: " + user.room);
            });
            return;
        });
        return ret;
    }
    catch (e) { console.log("Couldn't give userRoomCode " + e); }
    return undefined
}

// newUser("Religion and world issues", 1);
// newUser("My religion", 2);
// joinQueue(1);
// joinQueue(2);

setTimeout(() => {
    newUser("Religion and world issues", 1);
}, 1000);
setTimeout(() => {
    newUser("My religion", 2);
}, 1000);

setTimeout(() => {
   joinQueue(1);
}, 3000);
setTimeout(() => {
    joinQueue(2);
}, 3000);


setTimeout(() => {
    console.log("code pog " + userRoomCode(1));
}, 10000);

// export default newUser;
