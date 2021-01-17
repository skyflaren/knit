// import {db} from "../../firebase.js";
let q = {};

async function joinQueue(user){
    let q = {};

    for(let token in user.tokens){  //When adding user
        if(q.hasOwnProperty(token)]{
            db.collection("sessions").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let user2 = doc.data().sid.q[token];
                });
            });

            let roomid = generateSessionName();
            user.room = user2.room = roomid;
            user.state = user2.state = 3;

            console.log(user1);
            console.log(user2);
        }
        else{
            q.push([token, user.SID]);
            user.state = 2;
        }
    }
}

export const joinQueue = joinQueue;
