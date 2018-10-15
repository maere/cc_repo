//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
function binaryAgent(str) {

	var stringByteArray = str.split(" ");
	var result = [];

	//var buffer = new ArrayBuffer(8);
		for(var i=0; i<stringByteArray.length; i++){
		    var strByte = stringByteArray[i];
		    let intRep = parseInt(strByte, 2);
		    result.push(intRep);
		}   
	let view = new Uint8Array(result);
	let utf8decoder = new TextDecoder('utf-8');
	
	return utf8decoder.decode(view);
}

//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//should return "Aren't bonfires fun!?"