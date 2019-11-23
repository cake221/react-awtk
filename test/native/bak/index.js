import Window from "./Window"
import Button from "./Button"
import Global from "./Global"


function applicationInit() {
    const win = Window.create(null, 0, 0, 0, 0);
    const ok = Button.create(win, 0, 0, 0, 0);

    ok.setText("ok");
    ok.setSelfLayoutParams("center", "middle", "50%", "30");

    /**
     * 暂时不考虑事件
     */

    // ok.on(TEventType.CLICK, function(evt) {
    //     const e = TPointerEvent.cast(evt);
    //     console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());
    //     console.log("on click: " + e.x + " " + e.y);
    //
    //     return TRet.OK;
    // });

    console.log("global: " + Global.getPointerX() + " " + Global.getPointerY() + " " + Global.isPointerPressed());

    win.layout();
}

applicationInit();
