<template>
  <div class="kutija">
      <div class="top">
        <div class="okvir">
          <div class="crno">
            Movies
          </div>
          <div class="bijelo">
            TV Shows
          </div>
        </div>
      </div>

      <div class="main">
        <div class="kartica">
        <div v-for="podatak in podaci.results" :key="podatak">
          <img :src="slikaurl + podatak.poster_path" class="slika">
          <h1 class="naslovkartice">{{podatak.name}}</h1>
          <p class="datumkartice">{{podatak.first_air_date}}</p>
          </div>
        </div>
      </div>
      
      
  </div>
</template>

<script>
export default {
  data(){
    return{
      podaci:[],
      slikaurl: 'https://image.tmdb.org/t/p/original/',
    }
  },
mounted(){
  fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
  .then(res => res.json())
  .then(data=>this.podaci = data)
  .then(data=>this.podaci.results.length = 8)
  .then(data=>{console.log(this.podaci)})
  .then(data=>{console.log(data)})
  
}
}
</script>

<style scoped>
.top{
height: 20%;
display: flex;
flex-direction: row;
}
.main{
display: flex;
height: 80%;
flex-direction: row;
align-items: center;
justify-content: space-between;

}
.kartica{
  display: flex;
  flex-direction: row;
  margin: auto ;
  max-width: 150px;
  margin: 100px;
}
.slika{
width: 150px;
}
.naslovkartice{
font-size: 12px;
white-space: initial;

}
.datumkartice{
font-size: 15px;
}

h3{
  align-self: center;
  
}
</style>