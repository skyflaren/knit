// import {db} from "../../firebase.js";
let q = {};

async function upd(object){
    store.collection("sessions").doc("u88U5n4VEnsJmurTdpFG").update(object);
}

async function joinQueue(userID){
    let user;

    try {
        store.collection("sessions").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                user = doc.data()[userID];
            });
            return user;
        }).then(user => {
            for(let token in user.tokens){  //When adding user
                if(q.hasOwnProperty(token)){    //Match Found
                    let userID2 = q[token];
                    try {
                        store.collection("sessions").get().then((querySnapshot) => {
                                let user2;
                                querySnapshot.forEach((doc) => {
                                    user2 = doc.data()[userID2];
                                });
                                return user2;
                            }).then(user2 => {
                                let roomid = generateSessionName();
                                user.room = roomid;
                                user2.room = roomid;
                                user.state = 3;
                                user2.state = 3;

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
                                delete q[token];
                            });
                    } catch (e) { console.log("Failed User2 + Generate Room ID " + user + " || " + e); }
                }
                else{   //No Match
                    q[token] = userID;
                    user.state = 2;
                    console.log("No Match for user: " + userID +  ", keyword: " + user.tokens[token]);
                }
            }
        });
    }
    catch (e) { console.log("Couldn't load User1 " + user + " || " + e); }
}

// export const joinQueue = joinQueue;