'use strict';

function desc(table, pool) {
    return new Promise(function(resolve) {
        pool.query('show full columns from ' + table, function(err, rows) {
            console.log('mysql 数据');
            console.log(rows);
            if (err) {
                resolve({
                    ok: false,
                    err: err
                })
            } else {
                resolve({
                    ok: true,
                    rows: rows
                })
            }
        });
    })


}
module.exports = desc;