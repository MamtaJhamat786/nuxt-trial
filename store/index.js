export const state = () => ({
    products: []
  })

  export const mutations =  {
    setProduct( state, payload){
      state.products.push(payload)
    },
    getProducts(state, payload){
      state.products = payload 
    }

  }
  export const actions =  {
     async saveProductPlan(context, payload){
      await this.$axios.$post("http://192.168.1.153:9000/product/new-product", payload)
      .then (response=> {
        console.log(response)
        context.commit('setProduct', response.data.response)
      })
      .catch(error=>{
        console.log(error.e)
      })
    },
    async getAllProducts(context, payload){
      await this.$axios.$get("http://192.168.1.153:9000/product/get-all")
      .then (response=> {
        console.log(response)
        context.commit('getProducts', response.products)
      })
      .catch(error=>{
        console.log(error.e)
      })
    }
   
  }
  export const getters =  {
    loadedProducts(state){
      return state.products

    }
  }

