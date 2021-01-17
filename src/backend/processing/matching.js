// import {db} from "../../firebase.js";
let q = {};

async function joinQueue(userID){
    let q = {}, user;

    try {
        store.collection("sessions").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // user = doc.data()[userID];
                    console.log(doc.data());
                });
                return user;
            }).then(user => {

                // for(let token in user.tokens){  //When adding user
                //     console.log("herro");
                //     if(q.hasOwnProperty(token)){
                //         try {
                //             store.collection("sessions").get().then((querySnapshot) => {
                //                     querySnapshot.forEach((doc) => {
                //                         let user2 = doc.data().sid.q[token];
                //                     });
                //                 });
                //         } catch (e) { console.log("soodge" + user); }
                        

                //         let roomid = generateSessionName();
                //         user.room = user2.room = roomid;
                //         user.state = user2.state = 3;

                //         console.log(user);
                //         console.log(user2);
                //     }
                //     else{
                //         q.push([token, user.SID]);
                //         user.state = 2;
                //         console.log(user);
                //     }
                // }
            });
    }
    catch (e) { console.log("nuuu" + user); }

}

// export const joinQueue = joinQueue;