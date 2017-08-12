module.exports.exportCommonJsVariable = 'exportCommonJsModuleVariable'
module.exports.default = 'exportCommonJsModuleDefault'

// これが書かれると上2つがexportできなくなる。
module.exports = 'exportCommonJsModuleDirectly'

// module.exports = { key: value }の形で渡すのが妥当そう(下みたいな形)
// module.exports = {
//   exportCommonJsVariable: 'exportCommonJsModuleVariable',
//   default: 'exportCommonJsModuleDefault'
// }

// 以下は全て無視
exports = 'exportCommonJsDirectly'
exports.deault = 'exportCommonJsDefault'