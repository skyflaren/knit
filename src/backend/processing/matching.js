import {store} from "../../firebase.js";
import {generateSessionName} from "../helpers/utils.js";

let q = {};

async function upd(object){
    store.collection("sessions").doc("u88U5n4VEnsJmurTdpFG").update(object);
}

async function joinQueue(userID){
    let user;

    try {
        store.collection("sessions").doc("u88U5n4VEnsJmurTdpFG").get().then((doc) => {
            // querySnapshot.forEach((doc) => {
                user = doc.data()[userID];
            // });
            return user;
        }).then(user => {
            let mx = -1, ind = -1;

            for(let tk in user.tokens){  //When adding user
                console.log(q);
                if(q.hasOwnProperty(user.tokens[tk])){    //Match Found
                    if(user.tokenWeight[tk] > mx){
                        mx = user.tokenWeight[tk];
                        ind = tk;
                        console.log("Match found for user: " + userID + ", keyword: " + user.tokens[tk]);
                    }
                }
                else{   //No Match
                    q[user.tokens[tk]] = userID;
                    console.log("No Match for user: " + userID +  ", keyword: " + user.tokens[tk]);
                }
            }
            if(mx != -1){
                console.log(ind);
                let userID2 = q[user.tokens[ind]]; let user2 = {};
                try {
                    store.collection("sessions").doc("u88U5n4VEnsJmurTdpFG").get().then((doc) => {
                    // store.collection("sessions").get().then((querySnapshot) => {
                            // querySnapshot.forEach((doc) => {
                                user2 = doc.data()[userID2];
                            // });
                            // console.log(user2);
                            return user2;
                        }).then(user2 => {
                            let roomid = generateSessionName();
                            // console.log("step five " + roomid);
                            // console.log(userID2);
                            user.room = roomid;
                            user2.room = roomid;
                            user.state = 3;
                            user2.state = 3;
                            console.log("step three");
                            user.topic = ind;
                            for(let i in user2.tokens){
                                if(user2.tokens[i] == user.tokens[ind]){ user2.topic = i; break; }
                            }

                            console.log(user);
                            console.log(user2);
                            console.log("Match Made! Room Code: " + roomid);

                            try{
                                let obj = {}; let obj2 = {};
                                obj[userID] = user;
                                obj2[userID2] = user2;

                                upd(obj);
                                upd(obj2);
                            } catch (e) { console.log("Depositing data failed" + e); }
                            for(let interest in user.tokens){
                                if(q.hasOwnProperty(interest)){
                                    delete q[interest];
                                }
                            }
                            for(let interest in user2.tokens){
                                if(q.hasOwnProperty(interest)){
                                    delete q[interest];
                                }
                            }
                            console.log(q);
                        });
                } catch (e) { console.log("Failed User2 + Generate Room ID " + user + " || " + e); }
            }
            else{
                user.state = 2;
            }
        });
    }
    catch (e) { console.error("Couldn't load User1 " + user + " || " + e); }
}

async function feedback(userID, rating, newState){
    try {
        store.collection("sessions").get().then((querySnapshot) => {
                let user;
                querySnapshot.forEach((doc) => {
                    user = doc.data()[userID];
                });
                return user;
            }).then(user => {
                user.tokenWeight[user.topic] += ((rating-5.0)/100.0);
                user.state = newState;
                user.room = "";
                console.log(user.tokenWeight[user.topic]);
                console.log(user.topic);
                user.topic = -1;
                try{
                    let obj = {};
                    obj[userID] = user;
                    upd(obj);
                } catch (e) { console.log("Depositing data failed for rating update" + e); }
            });
    } catch (e) { console.log("Failed User2 + Generate Room ID " + user + " || " + e); }
}

export const userJoinQueue = joinQueue;
export const feedback = feedback;
export default joinQueue;
