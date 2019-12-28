import "../basic"

describe("test basic.tsx", ()=>{

  it("Snapshot Test", ()=>{
    expect(__AwtkSnapshot).toMatchSnapshot();
  })
})
