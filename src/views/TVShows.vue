<template>
<Populartv />
<NowPlayingtv />
<TopRatedtv />
<OnTheAirtv />
</template>

<script>
import Populartv from '../tv/Populartv.vue'
import NowPlayingtv from '../tv/NowPlayingtv.vue'
import TopRatedtv from '../tv/TopRatedtv.vue'
import OnTheAirtv from  '../tv/OnTheAirtv.vue'

export default{
  components:{ Populartv, NowPlayingtv, TopRatedtv, OnTheAirtv},
data(){
  return{
    
  }
},
methods:{

}
}
</script>

<style>
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