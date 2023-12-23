class ApiResponse {
    constructor(statuscode,Data,message = "Success"){
        this.statuscode=statuscode,
        this.success= statuscode < 400
        this.message=message
        this.data=Data
    }
}
export {ApiResponse}