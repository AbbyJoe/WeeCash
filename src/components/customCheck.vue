<template>
  <label :for="id" class="checkbox" :class="{ flex: label }">
    <input
      @click.self="$emit('perform-action')"
      type="checkbox"
      class="input"
      :id="id"
      :checked="checked"
    />
    <div class="custom-check"></div>
    <!-- Stay signed in for a week -->
    <div class="label" v-if="label">
      {{ label }}
    </div>
  </label>
</template>

<script>
export default {
  name: "customCheck",
  props: ["id", "checked", "label"],
  emits: ["perform-action"],
};
</script>

<style scoped>
/* // Custom Checkbox */
.checkbox {
    cursor: pointer;
    margin-bottom: 15px;
    color: #07074D;
    font-size: 14px;
    font-weight: normal;
}
.checkbox .input {
    display: none;
}
.checkbox .custom-check {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
    flex-shrink: 0;
    transition: all 0.15s linear;
    background: #fff;
    box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
}
.checkbox .custom-check::after {
    content: "\2714";
    color: #fff;
    transition: all 0.15s;
    transform: scale(0);
    font-size: 12px;
}
 

.flex {
  display: inline-flex;
  align-items: center;
}

.input:checked + .custom-check {
  background: #07074D;
  border-color: #07074D;
}

.input:checked + .custom-check::after {
  transform: scale(1);
}
</style>