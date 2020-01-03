import { t_button } from ".."



describe("test t_button component", ()=>{

  it("检测 t_button 的reconciler适配方法", ()=>{
    const btn = new t_button({});
    expect(btn.isEmpty()).toEqual(true);
  })
  
})
