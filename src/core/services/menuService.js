import axios from 'axios';
import {URL} from './../url'

export default{
    listAll(){
        return axios.get(URL);
    }
}