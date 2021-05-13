const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 13;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);


for (let data in users){
	let salt = bcrypt.genSaltSync(nRounds);
	let passHash = bcrypt.hashSync(users[data]["password"], salt);
	
	hashedUsers.push(users[data]);
	hashedUsers[data]["passHash"] = passHash;
	delete hashedUsers[data]["password"];
}


let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2)); 