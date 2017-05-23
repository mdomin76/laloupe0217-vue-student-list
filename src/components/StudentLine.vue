<script>
export default {
  data() {
    return {
      editInput: '',
    };
  },
  computed: {
    editStudentA() {
      return {
        firstname: this.editInput,
      };
    },
  },
  props: ['student', 'indexA'],
  methods: {
    removeStudent() {
      this.$emit('remove');
    },
    editStudent() {
      this.$emit('edit', this.editStudentA, this.indexA);
      this.editInput = '';
    },
  },
};
</script>

<template>
<div>
  {{student.firstname}}
  <button v-on:click='removeStudent()'>Delete</button>
  <button v-on:click='editStudent()'>Edit</button> <input v-model="editInput">
</div>
</template>

<style>
</style>
