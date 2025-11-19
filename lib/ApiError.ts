class ApiError extends Error{
    status:number ;
    success:boolean ; 

    constructor(status:number , success=false , message:string){
        super(message)
        this.status = status
        this.success = success
    }
}

export default ApiError