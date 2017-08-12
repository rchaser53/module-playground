import * as wholeEcmaScriptModule from './exportEcmaScriptModule'
import exportEcmaScriptModule from './exportEcmaScriptModule'
import {
  // ecmaScriptVariable,  // 不可
  exportEcmaScriptVariable,
  ecmaScriptPartialVariable1,
  ecmaScriptPartialVariable2
} from './exportEcmaScriptModule'

// import * as wholeRequireModule = require('./exportEcmaScriptModule') // 不可
// export = xxというts独自の文法に対応するやつ。使わんといて
import requireEcmaScriptModule = require('./exportEcmaScriptModule')


/** 結果 */
console.log(wholeEcmaScriptModule)
// {  ecmaScriptPartialVariable1: 'ecmaScriptPartialVariable1',
//    ecmaScriptPartialVariable2: 'ecmaScriptPartialVariable2',
//    exportEcmaScriptVariable: 'exportEcmaScriptVariable',
//    default: 'exportDefaultVariable' }

console.log(exportEcmaScriptModule)
// exportDefaultVariable

console.log(exportEcmaScriptVariable)
// exportEcmaScriptVariable

console.log(requireEcmaScriptModule)
// { ecmaScriptPartialVariable1: 'ecmaScriptPartialVariable1',
//   ecmaScriptPartialVariable2: 'ecmaScriptPartialVariable2',
//   exportEcmaScriptVariable: 'exportEcmaScriptVariable',
//   default: 'exportDefaultVariable' }