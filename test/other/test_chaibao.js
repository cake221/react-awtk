const a = {b:"b", c:"c",wenyufei:"wenyufei"}

function test({wenyufei, c, b}) {
    console.log(wenyufei)
    console.log(c)
}

test(a)

const b = {b:"b", c:"c",wenyufei:"wenyufei"}

function test1(wenyufei, c, b) {
    console.log(wenyufei)
    console.log(c)
}

test(b)
