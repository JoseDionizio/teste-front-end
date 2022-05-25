import Service from './../../services/menuService'
import * as types from "./mutations-types"

export default{
    ListFuncao:({state,commit,dispatch}) => {      
        return Service.listAll()
            .then(response => {   
                console.log(response)             
                commit(types.LIST_MENU, response.data);                      
            })
            .catch((erro) => {    
                console.log('erro==>',erro)     
                return commit(types.ERRO, erro);
            });
        },
}