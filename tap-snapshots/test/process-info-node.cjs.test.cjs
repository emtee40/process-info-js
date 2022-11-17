/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/process-info-node.cjs TAP basic instance stuff order=child,child2,parent,root > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,child2,parent,root > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,child2,root,parent > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,child2,root,parent > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,parent,child2,root > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,parent,child2,root > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,parent,root,child2 > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,parent,root,child2 > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,root,child2,parent > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,root,child2,parent > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,root,parent,child2 > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child,root,parent,child2 > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,child,parent,root > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,child,parent,root > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,child,root,parent > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,child,root,parent > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,parent,child,root > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,parent,child,root > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,parent,root,child > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,parent,root,child > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,root,child,parent > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,root,child,parent > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,root,parent,child > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=child2,root,parent,child > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,child,child2,root > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,child,child2,root > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,child,root,child2 > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,child,root,child2 > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,child2,child,root > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,child2,child,root > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,child2,root,child > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,child2,root,child > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,root,child,child2 > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,root,child,child2 > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,root,child2,child > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=parent,root,child2,child > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,child,child2,parent > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,child,child2,parent > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,child,parent,child2 > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,child,parent,child2 > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,child2,child,parent > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,child2,child,parent > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,child2,parent,child > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,child2,parent,child > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,parent,child,child2 > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child","child2"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,parent,child,child2 > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,parent,child2,child > after linking 1`] = `
{"root":{"parent":null,"children":["parent"],"files":["root.txt","shared.txt"],"uuid":"root","root":"root"},"parent":{"parent":"root","children":["child2","child"],"files":["parent.txt","shared.txt"],"uuid":"parent","root":"root"},"child":{"parent":"parent","children":null,"files":["child.txt","shared.txt"],"root":"root","uuid":"child"},"child2":{"parent":"parent","children":null,"files":["child2.txt","parent.txt"],"root":"root","uuid":"child2","externalID":"child2-eid"}}
`

exports[`test/process-info-node.cjs TAP basic instance stuff order=root,parent,child2,child > before linking 1`] = `
{"root":{"parent":null,"children":null,"files":["root.txt","shared.txt"],"uuid":"root"},"parent":{"children":null,"files":["parent.txt","shared.txt"],"uuid":"parent"},"child":{"children":null,"files":["child.txt","shared.txt"],"uuid":"child"},"child2":{"children":null,"files":["child2.txt","parent.txt"],"uuid":"child2","externalID":"child2-eid"}}
`