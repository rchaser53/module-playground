const typeScriptVariable = 'typeScriptVariable'
const typeScriptPartialVariable1 = 'typeScriptPartialVariable1'
const typeScriptPartialVariable2 = 'typeScriptPartialVariable2'
export const exportTypeScriptVariable = 'exportTypeScriptVariable'
export default 'exportDefaultVariable'

// export constと同義、複数個書くと書いた分だけexportされる
export { typeScriptPartialVariable1 }
export { typeScriptPartialVariable2 }

/*
 * TypeScript独自の文法。import XXX = require('YYY')と対応している
 * これ以外にexportがない場合に使用できる
 * CommonJSやAMDに対応するために使われていたもので現在は使用は推奨されていない模様
 * 使わんといて
 * /
// export = typeScriptPartialVariable2