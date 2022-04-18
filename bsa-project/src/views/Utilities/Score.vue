<template>
  <div>Rendimentos Score</div>
</template>

<script>
export default {
  data(){
    return{
      score: null,
    }
  },
  created(){
    let url = 'https://app.brazilianstaratlas.com/?app=2&u=2&auth=00000000&task=getScoreRewards';
    fetch(url, { method: 'GET'})
    .then(resp => resp.json())
    .then(x => {
      this.score = x;
      console.log(x)
    })
    .catch(erro => console.log(erro))
  }
}
</script>

<style>

</style>