var Task = React.createClass({
  getInitialState: function(){
    return {edit: false};
  },

  handleToggle: function(e){
    e.preventDefault();
    this.setState({edit: !this.state.edit})
  },

  handleDelete: function(e){
    $.ajax({
      method: "DELETE",
      url: '/tasks/'+this.props.task.id,
      dataType: 'JSON',
      success: function(){
        this.props.handleDeleteTask(this.props.task);
      }.bind(this)
    });
  },

  handleEdit: function(e) {
    e.preventDefault();
    var data = { title: this.refs.title.value,
                 due_date: this.refs.due_date.value,
                 description: this.refs.description.value }
    $.ajax({
      method: 'PUT',
      url: '/tasks/' + this.props.task.id,
      dataType: 'JSON',
      data: { task: data },
      success: function(data) {
        this.setState({ edit: false });
        this.props.handleEditTask(this.props.task, data);
      }.bind(this)
    });
  },

  taskRow: function(){
    return(
      <tr className="table-row">
        <td>{this.props.task.title}</td>
        <td>{this.props.task.due_date}</td>
        <td>{this.props.task.description}</td>
        <td>
          <a className="btn btn-danger" onClick={this.handleDelete}>Delete</a>
          <a className="btn btn-primary" onClick={this.handleToggle}>Edit</a>
        </td>
      </tr>
    );
  },

  taskForm: function() {
  return(
    <tr>
      <td>
        <input className='form-control' type='text'
          defaultValue={this.props.task.title} ref='title'>
        </input>
      </td>
      <td>
        <input className='form-control' type='date'
               defaultValue={this.props.task.due_date} ref='due_date'>
        </input>
      </td>
      <td>
        <input className='form-control' type='text'
               defaultValue={this.props.task.description} ref='description'>
        </input>
      </td>
      <td className="abuttons">
        <a className='btn btn-default' onClick={this.handleEdit}>
          Update
        </a>
        <a className='btn btn-danger' onClick={this.handleToggle}>
          Cancel
        </a>
      </td>
    </tr>
  );
},



  render: function(){
    if (this.state.edit==true){
      return this.taskForm()
    }
    else {
      return this.taskRow()
    }
  }

})
