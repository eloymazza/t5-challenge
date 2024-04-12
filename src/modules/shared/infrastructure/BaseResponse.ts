export class BaseResponse<T> {
    constructor (private message?: string, private code?: string, private value?: T){}

    messageValue(){
        return this.message;
    }

    codeValue(){
        return this.code;
    }

    valueValue(){
        return this.value;
    }

    static create<T>({message, code, value}:{message?: string, code?: string, value?: T}){
        return new BaseResponse<T>(message, code, value)
    }
}