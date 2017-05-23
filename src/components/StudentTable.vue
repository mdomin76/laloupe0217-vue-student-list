<script>
import axios from 'axios';
import StudentLine from './StudentLine';
import AddStudent from './AddStudent';

export default {
  components: {
    StudentLine,
    AddStudent,
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {
    getAll() {
      axios.get('http://localhost:3000/students')
        .then((response) => {
          this.students = response.data;
        });
    },

    remove(index) {
      axios.delete(`http://localhost:3000/students/${this.students[index].id}`)
        .then(() => {
          this.students.splice(index, 1);
          // console.log(index);
        });
    },
    addStudent(objectStudent) {
      axios.post('http://localhost:3000/students', objectStudent)
        .then((response) => {
          this.students.push(response.data);
        });
    },
    editStudent(editValue, index) {
      axios.put(`http://localhost:3000/students/${this.students[index].id}`, editValue)
        .then((response) => {
          // console.log(response.data);
          // console.log(this.students[index]);
          this.$set(this.students, index, response.data);
          // this.students.splice(index, 1 editValue);
          // this.students[index].firstname = response.data.firstname;
        });
    },
  },

  mounted() {
    this.getAll();
  },
};
</script>

<template>
<div>
  <add-student v-on:addStudent="addStudent"></add-student>
  <student-line v-for='(student, index) in students' :key="student.id" :indexA='index' :student="student" v-on:remove="remove(index)" v-on:edit='editStudent'></student-line>
</div>
</template>

<style>
</style>
