export default class Exception{
    message;
    constructor(msg){
        this.message = msg;
    }

    getMessage(){
        return this.message;
    }

}