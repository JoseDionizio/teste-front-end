<template>
  <v-card :loading="loading" class="mx-auto my-5" max-width="300">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="200" :src="products.picture"></v-img>

    <v-card-title>{{ products.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="valueRanque"
          color="amber"
          dense
          half-increments
          length="5"
          hover
          readonly
          size="14"
        ></v-rating>
      </v-row>
    </v-card-text>
    <div>{{ products.description }}</div>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve"> Edit </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    valueRanque: 0,
    /*products: {
      id: 0,
      title: "Burger",
      description: "Pão tipo brioche, carne de res e queijo",
      price: 17.54,
      picture: "https://front-end-test-app.s3.amazonaws.com/burger/001.jpg",
      thumbnail: "https://front-end-test-app.s3.amazonaws.com/burger/t_001.jpg",
    },*/
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  props: {
    products: {
      type: [Object, Array],
      default: () => null,
      require: false,
    },
  },
};
</script>