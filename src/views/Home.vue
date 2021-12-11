<template>
<Popular />
<Nowplaying />
<Toprated />
<Upcoming />
</template>

<script>
import Popular from '../movie/Popular.vue'
import Nowplaying from '../movie/Nowplaying.vue'
import Toprated from '../movie/Toprated.vue'
import Upcoming from  '../movie/Upcoming.vue'

export default{
  components:{Popular, Nowplaying, Toprated, Upcoming},
data(){
  return{
    
  }
},
methods:{

}
}
</script>

<style >
.main{
  background: #01b4e4;
}
.top{
  background: #90cea1;
}
h3{
  color:white;
  
}
.okvir{
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  border-radius: 40px;
  padding: 0;
  margin: 0;
  background: white;
  overflow: hidden;
  height: 40px;
  align-self: center;
  margin-left: 30px;
}
.crno{
  background: black;
  
  
  
  
}
.bijelo{
  background: green;
  
 
}

</style>