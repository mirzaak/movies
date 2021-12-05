<template>
  <div class="nav">
    <div class="lijevo">
      <router-link to="/"><img src="./assets/logo.svg" alt="logo" class="logo"></router-link>
      <div class="dropdown">
        <a href="#" class="naslovi" id="movies">Movies</a>
          <ul class="moviesdropdown">
            <li>Popular</li>
            <li>Now playing</li>
            <li>Upcoming</li>
            <li>Top rated</li>
          </ul>
      </div>
        <a href="#" class="naslovi">TV Shows</a>
        <a href="#" class="naslovi">People</a>
    </div>
    <div class="desno">
        <a href="#" class="naslovi">Login</a>
        <a href="#" class="naslovi">Sign Up</a>
        <a href="#" class="naslovi">Search</a>
    </div>
  </div>
  <router-view/>
<Popular />
<Nowplaying />
<Toprated />
<Upcoming />
</template>

<script>
import Popular from './movie/Popular.vue'
import Nowplaying from './movie/Nowplaying.vue'
import Toprated from './movie/Toprated.vue'
import Upcoming from  './movie/Upcoming.vue'

export default{
  components:{ Popular, Nowplaying, Toprated, Upcoming},
data(){
  return{
    
  }
},
methods:{

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
.nav{
  background:#0d253f;
  height: 50px;
  width:100%;
  display: flex;
  
}
.lijevo{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 100px;
}
.desno{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-right: 100px;
  
}
.logo{
  height: 15px;
  margin-right: 20px;

}
.naslovi{
  color: white;
  text-decoration: none;
  font-size: 0.9em;
  margin: 0 20px;
  
}
.moviesdropdown{
  display: none;
  position: absolute;
  background: white;
  list-style-type: none;
  text-align: left;
  padding: 5px;
  margin:0;
  border-radius: 10px;
  cursor: pointer;
}
.dropdown:hover .moviesdropdown{
  display: block;
}
.kutija{
  background: gray;
  width: 1400px;
  height: 389px;
  margin: 60px auto;
  
}
</style>
