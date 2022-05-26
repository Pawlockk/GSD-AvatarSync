const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');

const avatar = ""; //link or path


const moduleDir = fs.readdirSync('./modules').filter(moduleFile => moduleFile.endsWith('.js'));

async function login(){
  
  for (const moduleFile of moduleDir) {
    const module = require(`./modules/${moduleFile}`);
    await module.execute(readline, avatar);
  }
 
}
login();
