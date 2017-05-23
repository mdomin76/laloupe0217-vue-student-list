

<script>
export default {
  data() {
    return {
      inputNewStudent: '',
    };
  },

  computed: {
    addNewStudent() {
      return {
        firstname: this.inputNewStudent,
      };
    },
  },

  methods: {
    addStudent() {
      this.$emit('addStudent', this.addNewStudent);
      this.inputNewStudent = '';
    },
  },
};
</script>

<template >
<div class="">

  <h1>Add New Student</h1>
  <input v-model='inputNewStudent'>
  <button type="button" v-on:click="addStudent()">Add Student</button>

</div>
</template>

<style>
</style>
