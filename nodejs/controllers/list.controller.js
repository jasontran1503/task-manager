const List = require('../models/List');
const Task = require('../models/Task');

module.exports = {
    /**
     * Get all list
     * @route GET /api/list
     */
    getAllList: async (req, res, next) => {
        try {
            const lists = await List.find({});
            if (lists.length > 0) {
                return res.status(200).json({
                    message: 'Thành công',
                    data: lists
                });
            } else {
                return res.status(200).json({
                    message: 'Không có dữ liệu!'
                });
            }
        } catch (error) {
            next(error);
        }
    },

    /**
     * Get all list
     * @route GET /api/list/detail
     * @queryParams listId
     */
    getListDetail: async (req, res, next) => {
        try {
            const list = await List.findById(req.query.listId);
            if (list) {
                List.aggregate([
                    {
                        $lookup: {
                            from: 'tasks',
                            localField: 'tasks',
                            foreignField: '_id',
                            as: 'tasks'
                        }
                    },
                    {
                        $match: { _id: list._id }
                    }
                ]).exec((err, data) => {
                    if (err) {
                        return res.status(200).json({
                            message: 'Có lỗi',
                            data: err
                        });
                    } else {
                        return res.status(200).json({
                            message: 'Thành công',
                            data
                        });
                    }
                });
            } else {
                return res.status(200).json({
                    message: 'Không tìm thấy list'
                });
            }
        } catch (error) {
            next(error);
        }
    },

    /**
     * Create list
     * @route POST /api/list
     * @body listName
     */
    createList: async (req, res, next) => {
        try {
            const { listName } = req.body;
            const list = await List.findOne({ listName });
            if (list) {
                return res.status(200).json({
                    message: 'Tên List đã tồn tại'
                });
            } else {
                const newList = await List.create({ listName });

                return res.status(200).json({
                    message: 'Thêm mới thành công',
                    data: newList
                });
            }
        } catch (error) {
            next(error);
        }
    },

    /**
     * Update list
     * @route PUT /api/list
     * @queryParams listId
     * @body listName
     */
    updateList: async (req, res, next) => {
        try {
            const list = await List.findOne(req.body);
            if (list) {
                return res.status(200).json({
                    message: 'Tên List đã tồn tại'
                });
            } else {
                const updatedList = await List.findByIdAndUpdate(req.query.listId, req.body, {
                    new: true,
                    runValidators: true
                });

                if (updatedList) {
                    return res.status(200).json({
                        message: 'Cập nhật thành công',
                        data: updatedList
                    });
                } else {
                    return res.status(200).json({
                        message: 'Có lỗi'
                    });
                }
            }
        } catch (error) {
            next(error);
        }
    },

    /**
     * Delete list
     * @route DELETE /api/list
     * @queryParams listId
     */
    deleteList: async (req, res, next) => {
        try {
            const list = await List.findByIdAndDelete(req.query.listId);
            await Task.deleteMany({ _id: { $in: list.tasks } }, (err) => {
                next(err);
            })
            if (list) {
                return res.status(200).json({
                    message: 'Xóa thành công',
                    data: list
                });
            } else {
                return res.status(200).json({
                    message: 'Không tìm thấy list'
                });
            }
        } catch (error) {
            next(error);
        }
    }
}