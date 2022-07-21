app.component('review-form', {
  template:
  /* html */
  `
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <p>Would you recommend this product?</p>
    <label for="recommend">Yes</label>
    <input type="radio" id="recommend" name="recommend" value="yes" v-model="recommend">
    <label for="do-not-recommend">No</label>
    <input type="radio" id="do-not-recommend" name="recommend" value="no" v-model="recommend">

    <input class="button" type="submit" value="Submit">
  </form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' ||
          this.rating === null || this.recommend === '') {
        alert('Review is incomplete. Please fill out every field.');
        return;
      }
      const productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };
      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommend = '';
    },
  },
});
