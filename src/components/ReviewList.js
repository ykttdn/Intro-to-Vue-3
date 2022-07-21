app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
  /* html */
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <span v-if="review.recommend === 'yes'"> and recommended this</span>
        <span v-else> and did not recommend this</span>
        <br/>
        "{{ review.review }}"
        <br/>
      </li>
    </ul>
  </div>
  `,
});
