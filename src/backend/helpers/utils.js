function requestParams() {
	try {
		const href = location.search.substring(1);

		const params = {};
		href.split("&").forEach(pair => {
			pair = pair.split("=");
			params[pair[0]] = pair.length == 1 ? undefined : pair[1];
		});

		return params;
	} catch (e) {
		return {};
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

function genConcatNumbers() {
	// CSPRNG
	return Math.floor(Math.random()*1000)+"";// window.crypto.getRandomValues(new Uint8Array(new ArrayBuffer(4))).join("");
}

// Get user's session id
function getUserSID() {
	return document.cookie.split("; ").filter(key => key.split("=")[0] === "sid")[0].split("=")[1];
}

// Set user's session id
function setUserSID(sid) {
	return document.cookie = `sid=${sid}`;
}

// Generate user's session id 
function genUserSID() {
	const sid = genConcatNumbers();
	return sid;
}

export const generateSessionName = genConcatNumbers;
export const getRequestParams = requestParams;
export const getRequestParam = getParam;
export const getSID = getUserSID;
export const setSID = setUserSID;
export const genSID = genUserSID;
