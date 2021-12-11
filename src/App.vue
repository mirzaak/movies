<template>
  <div class="nav">
    <div class="lijevo">
      <router-link to="/"><img src="./assets/logo.svg" alt="logo" class="logo"></router-link>
      <div class="dropdown">
        <router-link to="/" class="naslovi" id="movies">Movies</router-link>
          <ul class="moviesdropdown">
            <li><a href="">Popular</a></li>
            <li><a href="">Now playing</a></li>
            <li><a href="">Upcoming</a></li>
            <li><a href="">Top rated</a></li>
          </ul>
      </div>
        <router-link :to="{name:'TVShows'}" class="naslovi">TV Shows</router-link>
        <a href="#" class="naslovi">People</a>
    </div>
    <div class="desno">
        <a href="#" class="naslovi">Login</a>
        <router-link to="/Signup" class="naslovi">Sign Up</router-link>
        <a href="#" class="naslovi">Search</a>
    </div>
  </div>
  <router-view/>

</template>

<script>
import axios from 'axios'

export default{
  components:{},
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
  display: flex;
  flex-direction: column;
  width: 1400px;
  height: 389px;
  border: 1px solid black;
  margin: 112px auto;
  overflow:hidden;
  
}
</style>
