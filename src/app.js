// const [] = require('');
// module.exports = [];
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({

      el: '#app',
      data: {
        tasks: [
          {step: "Take instructions", isCompleted: false, priority: 'high'},
          {step: "Confirm identity", isCompleted: false, priority: 'high'},
          {step: "Confirm instructions", isCompleted: false, priority: 'high'},
          {step: "Issue Letter of Engagement", isCompleted: false, priority: 'high'},
      ],
        newTask: "",
        priority: ""
      },
      methods:{
        saveNewTask: function(){
          this.tasks.push({
            step: this.newTask,
            isCompleted: false,
            priority: this.priority
          });
          this.newTask="";
        },
        completeTask: function(index){
          this.tasks[index].isCompleted = true;
        }
      }

    });
});
