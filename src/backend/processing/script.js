var CHECK = ["noun:noun", "verb:verb", "verb-part:verb-part", "wit$contact:contact", "wit$creative_work:creative_work"];

async function resp(promptResponse) {

    const q = encodeURIComponent(promptResponse);
    const uri = 'https://api.wit.ai/message?v=20200513&q=' + q;
    const auth = 'Bearer ' + 'BVDTBT7XM6C2RX4OP5NTJSG6TBIC7QCM';

    return fetch(uri, {headers: {Authorization: auth}}).then(res => res.json());
}

async function tokenize(promptResponse, res){
    let ret = [];

    // console.log(res);

    for(let toCheck in CHECK){
        for(let subject in res.entities[CHECK[toCheck]]){
        	ret.push(res.entities[CHECK[toCheck]][subject].body);
        }
    }
	console.log(ret);
	document.getElementById("initial").innerHTML = promptResponse;
	document.getElementById("display").innerHTML = ret;
    //lemmatize?
}

async function newUser(promptResponse, SIDvalue){
    //add into database
    let tokens = tokenize("science and technology");
}

function main() {
	const phrase1 = "The Last Jedi is a widely controversial movie, released by Disney as the second in the trilogy, directed by Rian Johnson";
	const phrase = "The red cat.";
	let res = resp(phrase);
	res.then(rs => tokenize(phrase, rs));
}

main();