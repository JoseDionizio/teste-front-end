import { ERRO,MENU,LIST_MENU, PESQUISA, DELETAR } from "./mutations-types";

export default {
    [ERRO]: (state, erro) => {
      state.erro = erro;
    },   
    [MENU]: (state, menu) => {
      state.menu = menu;
    },
    [LIST_MENU]:(state, list) => {
      state.listMenu =  list;
    },
    [PESQUISA]:(state,param) =>{
         state.listMenu.map(c => { 
            let title = c.products.filter(d => d.title.toLowerCase().indexOf(param.toLowerCase())>-1);
            let description = c.products.filter(d => d.description.toLowerCase().indexOf(param.toLowerCase())>-1);

            if(title.length>0)
                c.products = title;
            
                if(description.length>0)
                c.products = description;
            
            


        })
    },
    [DELETAR]:(state,id) =>{
        let i = state.listMenu.findIndex(t => t.products.id == id);
        state.listMenu.products.map(c => {
            c.splice(i, 1);
        })  
    }


   
  };