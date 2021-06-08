<template>
  <div>
      <h1>All Products </h1>
      <div v-for="(product, index) in products" :key="index" >
        <span> {{ product.title }}</span>
        <span> {{ product.description }}</span>
        <span> {{ product.price }}</span>
        <span> {{ product.quantity }}</span>        
      </div>
  </div>
</template>

<script>
export default {
    name: "Products",
    mounted(){
      this.$store.dispatch('getAllProducts')

    },
    computed: {
      products(){
        return this.$store.getters.loadedProducts
      }

    }

}
</script>

<style>

</style>