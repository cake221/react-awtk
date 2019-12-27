import * as React from "react";
import {AwtkRender,setParentWidget} from "../.."


describe("button jsx", ()=>{

  beforeEach(()=>{
    __AwtkSnapshotArr = {}
    __AwtkSnapshotArrCount = 0
  })

  it("jsx test",()=>{

    AwtkRender(<t_window/>)
    expect(__AwtkSnapshotArr).toMatchSnapshot()
  })

  it("jsx test2", ()=>{
    AwtkRender(<t_window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      />)
    expect(__AwtkSnapshotArr).toMatchSnapshot()
  })
})
