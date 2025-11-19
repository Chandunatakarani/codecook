import { symlink } from "fs";

class ApiResponse {
    success:boolean ;
    message:string ;
    data:any ;

    constructor(success=true , message="Success" , data:any = null){
        this.success = success
        this.data = data 
        this.message = message
    }
}

export default ApiResponse