function requestParams(href) {
	try {
		if (href === undefined) href = location.href;

		const index = href.indexOf("?");
		const params = {};
		if (index > 0) {
			href.substring(index+1).split("&").forEach(pair => {
				pair = pair.split("=");
				params[pair[0]] = pair.length == 1 ? undefined : pair[1];
			});
		}

		return params;
	} catch (e) {
		return {};
	}
}

function genConcatNumbers() {
	// CSPRNG
	return window.crypto.getRandomValues(new Uint8Array(new ArrayBuffer(9))).join("");
}

// Get user's session id
function getUserSID() {
	return document.cookie.split('; ').find(key => key === "sid");
}

// Set user's session id
function setUserSID(sid) {
	return document.cookie = `sid=${sid}`;
}

// Generate user's session id 
function genUserSID() {
	const sid = genConcatNumbers();
	setUserSID(sid);
	return sid;
}

export const generateSessionName = genConcatNumbers;
export const getRequestParams = requestParams;
export const getSID = getUserSID;
export const setSID = setUserSID;
export const genSID = genSID;
