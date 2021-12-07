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

</style>