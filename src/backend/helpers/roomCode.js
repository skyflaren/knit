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

// export const userRoomCode = userRoomCode
