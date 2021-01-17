const SERVER_BASE_URL = "https://tester-127.herokuapp.com";

function getSessionData(room) {
  return fetch(`${SERVER_BASE_URL}/room/${room}`)
    .then(res => res.json())
    .catch(handleError);
}

function initializeSession(data) {
  const session = OT.initSession(data.apiKey, data.sessionId);

  // Subscribe to a newly created stream
  session.on("streamCreated", (event) => {
    session.subscribe(
      event.stream,
      "subscriber",
      {
        insertMode: "append",
        width: "100%",
        height: "100%",
      },
      handleError
    );
  });

  // Create a publisher
  const publisher = OT.initPublisher(
    "publisher",
    {
      insertMode: "append",
      width: "100%",
      height: "100%",
    },
    handleError
  );

  // Connect to the session
  session.connect(data.token, e => {
    // If the connection is successful, publish to the session
    if (e) {
      handleError(e, true);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

function createCall() {
  getSessionData(getParam("room","Invalid video session")).then(resp => initializeSession(resp)).catch(e => handleError(e,true));
}

// Error handling
function handleError(error,display=false) {
  if (error) {
    if (display) {
      // display error on the page
      document.getElementById("err").textContent = error.message;
      document.getElementById("err").style.display = "block";
    } else {
      console.log(error.message);
    }
  }
}

function getParam(key, msg="") {
  const href = location.search.substring(1);

  const params = href.split("&");
  for (let pair of params) {
    pair = pair.split("=");
    if (pair[0] === key && pair.length > 1) {
      return pair[1];
    }
  }
  throw new Error(msg);
}
