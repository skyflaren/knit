var CHECK = ["noun:noun", "verb:verb", "verb-part:verb-part", "wit$contact:contact", "wit$creative_work:creative_work"];
// const phrase = "The Last Jedi is a widely controversial movie, released by Disney as the second in the trilogy, directed by Rian Johnson";

async function resp(promptResponse) {

    const q = encodeURIComponent(promptResponse);
    const uri = 'https://api.wit.ai/message?v=20200513&q=' + q;
    const auth = 'Bearer ' + 'BVDTBT7XM6C2RX4OP5NTJSG6TBIC7QCM';

    return fetch(uri, {headers: {Authorization: auth}}).then(res => res.json());
}

async function tokenize(promptResponse, res){
    let ret = [];
    
    for(let toCheck in CHECK){
        for(let subject in res.entities[CHECK[toCheck]]){
        	ret.push(res.entities[CHECK[toCheck]][subject].body);
        }
    }

    try {
    	document.getElementById("initial").innerHTML = promptResponse;
    	document.getElementById("display").innerHTML = ret;
    	console.log(ret);
    } catch (e) {}

    //lemmatize?

    return ret;
}

async function fillEntry(promptResponse, SIDvalue, sentenceTokens){
    let sentenceTokenWeights = [];
    for(let i = 0; i < sentenceTokens.length; i++) sentenceTokenWeights.push(1);
    let user = {
        SID: SIDvalue,
        rawResponse: promptResponse,
        tokens: sentenceTokens,
        tokenWeight: sentenceTokenWeights
    }

    console.log(user);

    return user;
}

async function newUser(promptResponse, SIDvalue){
    resp(promptResponse).then(rs => tokenize(promptResponse, rs)).then(rs => fillEntry(promptResponse, SIDvalue, rs));
}