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

function generateSessionName() {
	return window.crypto.getRandomValues(new Uint8Array(new ArrayBuffer(9))).join("");
}

export const generateSessionName = generateSessionName;
export const requestParams = requestParams;
