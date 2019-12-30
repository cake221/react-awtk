import { t_button, unpackButtonProps, ButtonProps } from ".."



describe("test t_button component", ()=>{

  it("检测 t_button 的reconciler适配方法", ()=>{
    const btn = new t_button({});
    expect(btn.isEmpty()).toEqual(true);
  })

  it("检测 unpackButtonProps ", ()=>{
    const props:ButtonProps = {
      repeat:10,
      enableLongPress:true,
      onClick:()=>{ return TRet.OK},
      onLongClick:()=>{ return TRet.OK}    
    }
    const button_props = unpackButtonProps(props);
    expect(button_props.repeat).toEqual(10)
    expect(button_props.enableLongPress).toEqual(true)

  })
  
})
