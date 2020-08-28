const Task = require('../models/Task');
const List = require('../models/List');

module.exports = {
    /**
     * Get tasks by list id
     * @route GET /api/task
     * @queryParams listId
     */
    getAllTasksByListId: async (req, res, next) => {
        const { listId } = req.query;
        try {
            const list = await List.findById(listId);
            if (list) {
                const tasks = await Task.find({ listId });
                return res.status(200).json({
                    success: true,
                    message: 'Thành công',
                    data: tasks
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Không tìm thấy list'
                });
            }
        } catch (error) {
            next(error);
        }
    },
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
                    success: true,
                    message: 'Thêm mới thành công',
                    data: newTask
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Không tìm thấy list'
                });
            }
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
                        success: true,
                        message: 'Xóa thành công',
                        data: task
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: 'Không tìm thấy task'
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Không tìm thấy list'
                });
            }
        } catch (error) {
            next(error);
        }
    },

    /**
     * Update task
     * @route PUT api/task
     * @queryParams taskId
     * @body taskName
     */
    updateTask: async (req, res, next) => {
        try {
            const updatedTask = await Task.findByIdAndUpdate(req.query.taskId, req.body, {
                new: true,
                runValidators: true
            });
            if (updatedTask) {
                return res.status(200).json({
                    success: true,
                    message: 'Cập nhật thành công',
                    data: updatedTask
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Không tìm thấy task'
                });
            }
        } catch (error) {
            next(error);
        }
    }
}