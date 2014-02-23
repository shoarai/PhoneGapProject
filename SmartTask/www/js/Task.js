/**
 * © 2014 shoarai
 */

var  Task = Backbone.Model.extend({
  defaults: {
    name: '',
    checked: false,
  },
  
/*  validate: function (attr) {
    if (_.isEmpty(attr.name)) {
      alert("invalid!");
    }
  }
*/  
  
});

var checked = 2;

var  Tasks = Backbone.Collection.extend({
  initialize: function() {
    tasks = JSON.parse(localStorage.tasks);
    
//    alert(localStorage.tasks);
//    alert(tasks);
    var that = this;
    
    $.each(tasks, function(index, task) {
      that.add(task);
    });
    
  },
  
  renderTasks: function() {
    
  },
  
  changeModel: function(name) {
    
    
    
  }
  
});