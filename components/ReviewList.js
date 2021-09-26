app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
      {{ review.name }} gave this {{ review.rating }} stars
      <br/>
      "{{ review.review }}"
      </li>
    </ul>
  </div>`,
});
