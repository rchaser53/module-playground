const ecmaScriptVariable = 'ecmaScriptVariable'
const ecmaScriptPartialVariable1 = 'ecmaScriptPartialVariable1'
const ecmaScriptPartialVariable2 = 'ecmaScriptPartialVariable2'
export const exportEcmaScriptVariable = 'exportEcmaScriptVariable'
export default 'exportDefaultVariable'

// export constと同義、複数個書くと書いた分だけexportされる
export { ecmaScriptPartialVariable1 }
export { ecmaScriptPartialVariable2 }