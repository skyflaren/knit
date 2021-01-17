function requestParams(href) {
	try {
		if (href === undefined) href = location.href;

		const index = href.indexOf("?");
		const params = {};
		if (index > 0) {
			href.substring(index+1).split("&").forEach(pair => {
				pair = pair.split("=");
				params[pair[0]] = pair[1];
			});
		}

		return params;
	} catch (e) {
		return {};
	}
}

export default requestParams;
