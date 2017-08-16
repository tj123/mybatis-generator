'use strict';

/**
 * desc table
 */
module.exports = function descController(req, res, next) {
    var provider = require('../provider/' + this.provider + '/desc');
    provider(req.params.table, this.pool).then(function(result) {
        if (result.ok) {
            result.rows = result.rows.map(extract);
        }
        result.table = req.params.table;

        console.log('result --------------------');
        console.log('result --------------------');
        console.log('result --------------------');
        console.log(result);

        res.send(result);
    });
};

/**
 * 取出必要的字段
 * @param row
 * @returns {{field: *, type: *}}
 */
function extract(row) {
    return {
        field: row.Field,
        type: row.Type,
        comment: row.Comment
    }
}