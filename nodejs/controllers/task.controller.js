const Task = require('../models/Task');
const List = require('../models/List');

module.exports = {

    /**
     * Create task
     * @route POST /api/task
     * @body listId, taskName
     */
    createTask: async (req, res, next) => {
        const { listId, taskName } = req.body;

        try {
            const list = await List.findById(listId);
            if (list) {
                const newTask = await Task.create(req.body);
                list.tasks.push(newTask);
                list.save();

                return res.status(200).json({
                    message: 'Thêm mới thành công',
                    data: newTask
                });
            }
            return res.status(200).json({
                message: 'Không tìm thấy list'
            });
        } catch (error) {
            next(error);
        }
    },

    /**
     * Delete task
     * @route DELETE /api/task
     * @queryParams listId, taskId
     */
    deleteTask: async (req, res, next) => {
        const { listId, taskId } = req.query;

        try {
            const list = await List.findById(listId);
            if (list) {
                const task = await Task.findByIdAndDelete(taskId);
                if (task) {
                    const indexTaskDeletedInList = list.tasks.indexOf(task._id);
                    list.tasks.splice(indexTaskDeletedInList, 1);
                    list.save();

                    return res.status(200).json({
                        message: 'Xóa thành công',
                        data: task
                    });
                }
                return res.status(200).json({
                    message: 'Không tìm thấy task'
                });
            }
            return res.status(200).json({
                message: 'Không tìm thấy list'
            });
        } catch (error) {
            next(error);
        }
    },

    /**
     * Update task
     * @route PUT api/task
     * @queryParams taskId
     */
    updateTask: async (req, res, next) => {
        try {
            const updatedTask = await Task.findByIdAndUpdate(req.query.taskId, req.body, {
                new: true,
                runValidators: true
            });
            if (updatedTask) {
                return res.status(200).json({
                    message: 'Cập nhật thành công',
                    data: updatedTask
                });
            } else {
                return res.status(200).json({
                    message: 'Không tìm thấy task'
                });
            }
        } catch (error) {
            next(error);
        }
    }
}