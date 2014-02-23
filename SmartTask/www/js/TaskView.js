/**
 * © 2014 shoarai
 */

var  TasksMenuView = Backbone.View.extend({
  
  
  
});

var  TasksView = Backbone.View.extend({

  initialize: function() {
  
  }
});


/**
 * タスクビュー
 */
var AppView = Backbone.View.extend({
  collection: new Tasks(),
  initialize: function() {
    // Viewの描画
    $('#main-header ul').append(new TasksMenuView());
    $('#main-content ul').append(new TasksView());
    
    
  }
  
  
});