// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import StudentTable from './components/StudentTable';


Vue.config.productionTip = false;

/* eslint-disable no-new */
/* eslint no-console: 2 */
new Vue({
  el: '#app',
  template: `
<div>
<student-table></student-table>
</div>`,
  components: { StudentTable },
});
