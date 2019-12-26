import { nodeMixins } from "../nodeMixins";
import { TWidget } from "../../native/awtk"

describe("nodeMixins 测试",()=>{
  it("测试是否可以将 Node 混合到新对象中", ()=>{
    class NewClass extends TWidget{}
    const TNewClass = nodeMixins(NewClass);
    const t_new_obj = new TNewClass({});
    expect(t_new_obj.tk_children.length).toEqual(0);
    t_new_obj.appendNodeChild({wenyufei:"wen"});
    expect(t_new_obj.tk_children.length).toEqual(1);
  })
})
