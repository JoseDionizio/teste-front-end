<template>
    <div >
        <div  v-for="(item,i) in getListMenu" :key="i">
            <h4>
            {{item.category_title}}
            </h4>
            <div v-for="(p,j) in item.products" :key="j">
                <menuComp :products="p"/>
            </div>
        
        </div>
        
    </div>
    
</template>
<script>
import menuComp from './menu.vue';
import { mapActions, mapGetters } from "vuex";
export default {
    components: { menuComp },
    data() {
    return {     
    };
  },
  created(){
     this.ListFuncao(); 
  },
  computed: {
    ...mapGetters("Menu", ["getListMenu"])
  }, 
  methods:{
      ...mapActions("Menu", ["ListFuncao"]),
  }

}
</script>