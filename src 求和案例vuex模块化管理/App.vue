<template>
<div class="content">
  <count/>
  <person/>
</div>
</template>
<script>
import count from './components/count.vue'
import person from './components/person.vue'


export default{
  name:"App",
  components:{count,person},
  data(){
    return{ 
    }
  }
}
</script>

<style>

</style>
