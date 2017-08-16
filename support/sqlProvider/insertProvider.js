'use strict';

/**
 * 生成spring mvc的controller方法
 * @param tableDesc
 */
module.exports = function controller(tableDesc) {
  debugger;
  var sets = tableDesc.rows.map(function (row) {
    return '\tVALUES("' + row.field + '","#{' + row.javaField + '}");';
  }).join('\n');
  var results = ['new SQL(){{\n',
    '\tINSERT_INTO("' + tableDesc.table + '");\n',
    sets,
    '\n}}.toString()'].join('');

  return new Promise(function (res) {
    res(results);
  });

};
