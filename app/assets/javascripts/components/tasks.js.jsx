var Tasks = React.createClass({

  getInitialState: function() {
    return { tasks: this.props.data };
    console.log(this.props.data)
  },

  getDefaultProps: function() {
    return { tasks: [] };
  },

  addTask: function(task) {
    var tasks = React.addons.update(this.state.tasks, { $push: [task] })
    this.setState({ tasks: tasks });
  },

  deleteTask: function(task) {
    var index = this.state.tasks.indexOf(task);
    var tasks = React.addons.update(this.state.tasks,
                                  { $splice: [[index, 1]] });
    this.replaceState({ tasks: tasks});
  },

  updateTask: function(task, data){
    var index = this.state.tasks.indexOf(task);
    var tasks = React.addons.update(this.state.tasks,
                                      { $splice: [[index, 1, data]] });  this.replaceState({tasks:tasks});
  },


  render: function(){
    return (
      <div className="tasks">
          <h2>Tasks for today</h2>
        <TaskForm handleNewTask={this.addTask} />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Due Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(function(task){
              return <Task key={task.id} task={task} handleDeleteTask={this.deleteTask} handleEditTask={this.updateTask} />
            }.bind(this))}
          </tbody>
        </table>
      </div>

    );
  }
});
