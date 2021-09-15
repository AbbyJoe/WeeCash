<template>
  <li>
    <div class="check">
      <!-- CUSTOM CHECKBOX -->
      <custom-check
        :id="item.description"
        :checked="item.checked"
      ></custom-check>
    </div>
    <div class="amount">
      US${{ item.amount }}
      <span class="status"
        >Succeeded <img src="@/assets/images/checkmark.svg" alt="checkmark"
      /></span>
    </div>
    <div class="description">
      {{ item.description }}
    </div>
    <div class="customer">{{ item.customer }}</div>
    <div class="date">{{ item.date }}</div>
    <div class="actions">
    <img src="@/assets/images/dots.svg" alt="dots" />
    </div>
  </li>
</template>

<script>
import CustomCheck from "../components/customCheck.vue";
export default {
  components: { CustomCheck },
  name: "tableItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* // TABLE ITEM */
li {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 14px 0 14px 4px;
    width: 100%;
    border-bottom: 1px solid #a6adb4;
}
li .check {
    width: 20px;
    flex-shrink: 0;
}
li .amount {
    width: 195px;
    flex-shrink: 0;
}
li .description {
    flex: 0 0 40%;
    max-width: 40%;
    width: 100%;
    flex-shrink: 0;
}
li .customer {
    width: 170px;
    flex-shrink: 0;
}
li .date {
    width: 120px;
    flex-shrink: 0;
}
li .actions {
    margin-left: auto;
    flex-shrink: 0;
    text-align: right;
    padding-right: 8px;
}
li div {
    font-size: 16px;
    line-height: 17px;
    color: #3c4257;
}
li .amount {
    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-right: 16px;
    gap: 8px;
    text-align: right;
    color: #07074D;
}
li .description {
    font-size: 16px;
    line-height: 16px;
    color: #07074D;
}
 

/* // SUCCEEDED STATUS */
.status {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 1px 4px 1px 6px;
  background: #cbf4c9;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #0e6245;
}
</style>