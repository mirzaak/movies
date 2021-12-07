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

</style>