import * as wholeTypeScriptModule from './exportTypeScriptModule'
import exportTypeScriptModule from './exportTypeScriptModule'
import {
  // typeScriptVariable,  // 不可
  exportTypeScriptVariable,
  typeScriptPartialVariable1,
  typeScriptPartialVariable2
} from './exportTypeScriptModule'

// import * as wholeRequireModule = require('./exportTypeScriptModule') // 不可
// export = xxというts独自の文法に対応するやつ。使わんといて
import requireTypeScriptModule = require('./exportTypeScriptModule')


/** 結果 */
console.log(wholeTypeScriptModule)
// {  typeScriptPartialVariable1: 'typeScriptPartialVariable1',
//    typeScriptPartialVariable2: 'typeScriptPartialVariable2',
//    exportTypeScriptVariable: 'exportTypeScriptVariable',
//    default: 'exportDefaultVariable' }

console.log(exportTypeScriptModule)
// exportDefaultVariable

console.log(exportTypeScriptVariable)
// typeScriptVariable

console.log(requireTypeScriptModule)
// { typeScriptPartialVariable1: 'typeScriptPartialVariable1',
//   typeScriptPartialVariable2: 'typeScriptPartialVariable2',
//   exportTypeScriptVariable: 'exportTypeScriptVariable',
//   default: 'exportDefaultVariable' }