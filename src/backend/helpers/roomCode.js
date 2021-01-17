import {store} from "../../firebase.js";

async function userRoomCode(userID) {
    return new Promise((resolve, reject) => {
        try {
            store.collection("sessions").doc("u88U5n4VEnsJmurTdpFG").get()
                        .then(doc => doc.data())
                        .then(data => data[userID])
                        .then(user => (user !== undefined && user.room !== "" ? user.room : undefined))
                        .then(code => resolve(code));
            // .then((doc) => {
                // querySnapshot.forEach((doc) => {
                    // let user = await doc.data()[userID];
                // console.log("rc", userID);
                    // let code = (user !== undefined && user.room !== "" ? user.room : undefined);
                    // console.log("Room code: " + user.room);
                    // console.log("rc", user);
                    // console.log("rci", code);
                    // return code;
                    // resolve(code);
            // }).catch(e => reject(e));
            // });//.then(c => {code = c; return c;});
                    // console.log("rc", code);
            // return code;
        }
        catch (e) { 
            console.error("Couldn't give user's room code " + e);
            reject(e);
        }
    });
}

export const getUserRoomCode = userRoomCode;
