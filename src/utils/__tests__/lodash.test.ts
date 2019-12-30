import { isFunction, isUndefined } from "lodash"

describe("lodash test", ()=>{
  it("isUndefined test", ()=>{

    const props:any = {};
    const wenyufei:{x?:string} = {};
    ( { x:wenyufei.x } = props )

    expect(isUndefined(wenyufei.x)).toEqual(true);
  })
})
