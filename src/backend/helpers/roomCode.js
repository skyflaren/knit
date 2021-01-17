import {store} from "../../firebase.js";

function userRoomCode(userID) {
    try {
        let code = undefined;
        store.collection("sessions").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let user = doc.data()[userID];
                code = (user !== undefined && user.room !== "" ? user.room : undefined);
                console.log("Room code: " + user.room);
                console.log(user);
            });
            return;
        });
        return code;
    }
    catch (e) { console.error("Couldn't give user's room code " + e); }
    return undefined;
}

export const getUserRoomCode = userRoomCode;
