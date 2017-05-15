class TasksController < ApplicationController
  before_action :current_task, only: [:update, :destroy]

  def index
    @tasks = Task.select {|task| task.user_id == current_user.id}
  end

  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    if @task.save
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
    head :no_content
  end

  private

  def task_params
    params.require(:task).permit(:title, :due_date, :description)
  end

  def current_task
    @task = Task.find(params[:id])
  end

end
