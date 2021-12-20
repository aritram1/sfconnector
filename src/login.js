const TokenEndpoint = 'https://login.salesforce.com/services/oauth2/token'; 
const AuthEndpoint = 'https://login.salesforce.com/services/oauth2/authorize';
import Exception from './exception.js';
fetch = require('node-fetch');

export default class LoginManager{
    session = {};
    constructor(){
        console.log('From login Constructor');
    }
    async login({ client_id , client_secret, username, password, grant_type = 'password', tokenEndpoint = TokenEndpoint, authEndpoint = AuthEndpoint }){
        try{
            if(grant_type === 'password'){
                this.session = await this.handleLogin(client_id , client_secret, username, password, grant_type);
                return this.session;
            }
            else{
                throw new Exception(`${grant_type} : Unsupported grant type for now!`);
            }
        }
        catch(err){
            throw new Exception(err);
        }
    }

    async handleLogin(client_id , client_secret, username, password, grant_type){
        console.log('1');
        try{
            fetch(TokenEndpoint, {
                method: 'POST',
                header: {
                    //TBD
                },
                body: {
                    grant_type:'password',
                    username: username,
                    password : password,
                    client_id : client_id,
                    client_secret: client_secret
                }
            })
            .then(response => {
                console.log('2');
                console.log('response is' + response);
                return response.json();
            })
            .then(data=>{
                console.log('3');
                console.log('data is' + data);
                return data;
            })
            .catch(err => {
                console.log('4');
                throw new Exception(err);
            });
        }
        catch(e){
            console.log(e);
        }
    }


}

// export default function(){
//     return {
//         test : () => console.log('From login'),
//         login : async ()=>{
//             return new Promise((s,r)=>{
//                 if(true) return s('success from login');
//             });
//         }
//     }
// }