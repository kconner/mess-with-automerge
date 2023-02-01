import * as Automerge from '@automerge/automerge'

interface Content {
    foo: Automerge.Counter
}

let doc: Automerge.Doc<Content> = Automerge.init()
doc = Automerge.change(doc, "commit message", content => {
    content.foo = new Automerge.Counter
})
doc = Automerge.change(doc, "another", content => {
    (content.foo as any).increment()
})

console.log(doc.foo.value)

console.log(Automerge.getHistory(doc).map(c => c.change.message))
