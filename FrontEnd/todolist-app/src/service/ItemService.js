import axios from 'axios';

export class ItemService{
        baseUrl = "http://localhost:8080/api/item"
    
        getAll(){
            return axios.get(this.baseUrl + "/all").then(res => res.data);
        }

        save(item){
            return axios.post(this.baseUrl + "/save",item).then(res => res.data);
        }

        
}