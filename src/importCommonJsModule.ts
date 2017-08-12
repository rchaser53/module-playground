// module.exports.exportCommonJsVariable = 'exportCommonJsModuleVariable'
// module.exports = 'exportCommonJsModuleDirectly';
// module.exports.default = 'exportCommonJsModuleDefault';

// exports = 'exportCommonJsDirectly';
// exports.deault = 'exportCommonJsDefault';


import * as wholeTypeScriptModule from './exportCommonJsModule'
import exportCommonJsModule from './exportCommonJsModule'
import {
  // typeScriptVariable,      // 不可
  // exportCommonJsVariable,  // 不可
  // default,                 // 不可
} from './exportCommonJsModule'

// import * as wholeRequireModule = require('./exportCommonJsModule') // 不可
// export = xxというts独自の文法に対応するやつ。使わんといて
import requireTypeScriptModule = require('./exportCommonJsModule')

console.log(wholeTypeScriptModule)
// exportCommonJsModuleDirectly

console.log(exportCommonJsModule)
// undefined

console.log(requireTypeScriptModule)
// exportCommonJsModuleDirectly