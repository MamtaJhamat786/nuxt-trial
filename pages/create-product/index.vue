<template>
<div>

    <h1 class="m-2 text-center">Create Product here</h1>
  <div class="mt-5" >
    <div class="w-50 mx-auto">
      <div class="mb-3 d-flex flex-row">
        <label for="productTitle" class="form-label w-25">Product Title</label>
        <input
          type="text"
          class="form-control"
          id="productTitle"
          v-model="product.title"
          placeholder="zara pants"
        />
      </div>
      <div class="mb-3 d-flex flex-row">
        <label for="description" class="form-label w-25"
          >Product description</label
        >
        <textarea
          class="form-control"
          v-model="product.description"
          id="description"
        ></textarea>
      </div>
      <div class="mb-3 d-flex flex-row">
        <label for="price" class="form-label w-25">Price</label>
        <input
          class="form-control"
          v-model.number="product.price"
          type="text"
          id="price"
          placeholder="45.56"
        />
      </div>
      <div class="mb-3 d-flex flex-row">
        <label for="quantity" class="form-label w-25">Quantity</label>
        <div class="d-flex flex-row">
          <b-button @click="product.quantity <= 0 ? 0 : product.quantity--">-</b-button>
          <input
            type="number"
            name="quantity"
            id="quantity"
            v-model="product.quantity"
            class="form-control arrows"
          />
          <b-button @click="product.quantity++">+</b-button>
        </div>
      </div>
      <div>
        <b-button class="button btn-success" @click="saveProduct()" success
          >Save</b-button
        >
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CreateProduct",
  data() {
    return {
      product: {
        title: "",
        description: "",
        price: "",
        quantity: 0,
      },
    };
  },
  methods: {
    saveProduct() { 
      const product = this.product
      this.$store.dispatch('saveProductPlan', product)
    },
  },
};
</script>

<style>
.h {
  margin-top: 10px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
