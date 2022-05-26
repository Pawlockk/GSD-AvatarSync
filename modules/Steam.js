const SteamCommunity = require('steamcommunity');
const community = new SteamCommunity();

let Lname = "";
let Lpass = "";
let Lguard = "";

function Login(readline) {
  console.log(`Steam logging in:`);

  readline.question('login:', name => {
    Lname = name;

    readline.question('password:', password => {
      Lpass = password;

      readline.question('guard:', guard => {
        Lguard = guard;
        SteamLogin();
      });

    });

  });

}

function SteamLogin() {
  const details = {
    accountName: Lname,
    password: Lpass,
    twoFactorCode: Lguard
  };

  community.login(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Logged into Steam via steam-community to ${details.accountName} account`);
    }
  });
}

module.exports = {

  async execute(readline, avatar) {

    return new Promise((resolve ,reject)=>{
      Login(readline);
        setTimeout(
            ()=>{
                console.log("Inside the promise");
                if(resolvedFlag==true){
                    resolve("Resolved");
                }else{
                    reject("Rejected")
                }     
            } , 60000
        );
    });
    
  }

}