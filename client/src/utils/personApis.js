import axiosInstance from "./axiosInstance";

export const getAllPeople=async ()=>{
    try {
        const response = await axiosInstance.get("/api/people")
        if (response.data.error) {
            console.log(response.data.message);
        } else {
            return response.data.people; 
        }

    } catch (error) {
        console.log(error.message); 
    }
}
export const deletingPerson = async (id)=>{
    try {
        const response= await axiosInstance.delete(`/api/people/${id}`);
        if(response.data.error) {
            console.log(response.data.message);
        }else{
            console.log(response.data);
            return response.data.person
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const  creatingPerson = async (person)=>{
    try {
        const response= await axiosInstance.post("/api/people",{...person})
        if(response.data.error) {
            console.log(response.data.message)
        }else {
            return response.data.person
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const editingPerson = async (id,formData)=>{
    try {
        const response= await axiosInstance.patch(`/api/people/${id}`,{...formData})
        if(response.data.error) {
            console.log(response.data.message)
        }else {
            return response.data.person
        }
    } catch (error) {
        console.log(error.message)
    }
}