describe("test unpack", ()=>{

  it("test", ()=>{
    const a = {b:1, c:2, d:3, e:4}
    const test:{b?:number, c?:number} = {};
    ({ b:test["b"] , c:test["c"] } = a);
    expect(test.b).toEqual(1)
    expect(test.c).toEqual(2)

  })
})