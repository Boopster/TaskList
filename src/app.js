// const [] = require('');
// module.exports = [];
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
      
      el: '#app',
      data: {
        tasks: [
          {step: "Take instructions", isComplete: false},
          {step: "Confirm identity", isComplete: false},
          {step: "Confirm instructions", isComplete: false},
          {step: "Issue Letter of Engagement", isComplete: false},
      ],
        newTask: ""
      },
      methods:{
        saveNewTask: function(){
          this.tasks.push({
            step: this.newTask,
            isComplete: false
          });
          this.newTask="";
        },
        completeTask: function(index){
          this.tasks[index].isComplete = true;
        }
      }

    });
});
