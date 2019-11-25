import Node from "./Node"
import { checkTRet } from "../native/TRet"
import {isFunction, isEmpty} from "lodash"
import { setChildWidget } from "../util/parentWidget"

class Widget extends Node{

    constructor(nativeObj) {
        super();
        this.nativeObj = nativeObj;
        this.tk_name = "";
    };
    // 辅助 函数
    checkWidgetTRet(ret){
        checkTRet(ret, "type:" + this.type + " name:"+this.name);
    }

    static widgetSetProps(widget_child, widget_props){
        const {tk_style, parent, ...other} = widget_props;

        parent && setChildWidget(widget_child, parent);

        for(const item in other){
            if(other.hasOwnProperty(item)){
                if( isFunction(other[item]) ){

                }else {
                    widget_child[item] = other[item];
                }
            }
        }

        if(!isEmpty(tk_style)) {
            const {selfLayoutParams} = tk_style;
            if (!isEmpty(selfLayoutParams)) widget_child.setSelfLayoutParams(selfLayoutParams);
        }
    }

    // 属性
    get x(){
        return widget_t_get_prop_x(this.nativeObj);
    }

    get y () {
        return widget_t_get_prop_y(this.nativeObj);
    }

    get w () {
        return widget_t_get_prop_w(this.nativeObj);
    }

    get h() {
        return widget_t_get_prop_h(this.nativeObj);
    }

    get name() {
        return widget_t_get_prop_name(this.nativeObj);
    }

    set name  (name) {
        this.checkWidgetTRet( widget_set_name(this.nativeObj, name) );
    };

    get text  () {
        return widget_get_text(this.nativeObj);
    };

    set text  (text) {
        this.checkWidgetTRet( widget_set_text_utf8(this.nativeObj, text) );
    };

    get tr_text() {
        return widget_t_get_prop_tr_text(this.nativeObj);
    }

    set tr_text  (text) {
        this.checkWidgetTRet( widget_set_tr_text(this.nativeObj, text) )
    };

    get style() {
        return widget_t_get_prop_style(this.nativeObj);
    }

    set style  (style) {
        this.checkWidgetTRet( widget_use_style(this.nativeObj, style) );
    };

    get animation() {
        return widget_t_get_prop_animation(this.nativeObj);
    }

    get enable() {
        return widget_t_get_prop_enable(this.nativeObj);
    }

    get visible () {
        return widget_t_get_prop_visible(this.nativeObj);
    }
    set visible (value) {
        widget_t_set_prop_visible(this.nativeObj, value);
    }

    get floating () {
        return widget_t_get_prop_floating(this.nativeObj);
    }

    get sensitive () {
        return widget_t_get_prop_sensitive(this.nativeObj);
    }
    set sensitive (value) {
        widget_t_set_prop_sensitive(this.nativeObj, value);
    }

    get focusable () {
        return widget_t_get_prop_focusable(this.nativeObj);
    }
    set focusable (value) {
        widget_t_set_prop_focusable(this.nativeObj, value);
    }

    get with_focus_state () {
        return widget_t_get_prop_with_focus_state(this.nativeObj);
    }
    set with_focus_state (value) {
        widget_t_set_prop_with_focus_state(this.nativeObj, value);
    }

    get type  () {
        return widget_get_type(this.nativeObj);
    };

    // 函数
    setSelfLayoutParams  ({x, y, w, h}) {
        this.checkWidgetTRet( widget_set_self_layout_params(this.nativeObj, x, y, w, h) );
    };

    layout  () {
        return widget_layout(this.nativeObj);
    };

    // 用于添加子控间
    addWidgetChild(child_widget){
        this.checkWidgetTRet( widget_add_child(this.nativeObj, child_widget.nativeObj) );
    }

    // todo 修饰
    // countChildren  () {
    //     return widget_count_children(this.nativeObj);
    // };
    // getChild  (index) {
    //     return new Widget(widget_get_child(this.nativeObj, index));
    // };
    // indexOf  () {
    //     return widget_index_of(this.nativeObj);
    // };
    // move  (x, y) {
    //     return widget_move(this.nativeObj, x, y);
    // };
    // resize  (w, h) {
    //     return widget_resize(this.nativeObj, w, h);
    // };
    // moveResize  (x, y, w, h) {
    //     return widget_move_resize(this.nativeObj, x, y, w, h);
    // };
    // setValue  (value) {
    //     return widget_set_value(this.nativeObj, value);
    // };
    // animateValueTo  (value, duration) {
    //     return widget_animate_value_to(this.nativeObj, value, duration);
    // };
    // addValue  (delta) {
    //     return widget_add_value(this.nativeObj, delta);
    // };
    //
    // getValue  () {
    //     return widget_get_value(this.nativeObj);
    // };
    //
    // setCursor  (cursor) {
    //     return widget_set_cursor(this.nativeObj, cursor);
    // };
    // setAnimation  (animation) {
    //     return widget_set_animation(this.nativeObj, animation);
    // };
    // createAnimator  (animation) {
    //     return widget_create_animator(this.nativeObj, animation);
    // };
    // startAnimator  (name) {
    //     return widget_start_animator(this.nativeObj, name);
    // };
    // setAnimatorTimeScale  (name, time_scale) {
    //     return widget_set_animator_time_scale(this.nativeObj, name, time_scale);
    // };
    // pauseAnimator  (name) {
    //     return widget_pause_animator(this.nativeObj, name);
    // };
    // findAnimator  (name) {
    //     return widget_find_animator(this.nativeObj, name);
    // };
    // stopAnimator  (name) {
    //     return widget_stop_animator(this.nativeObj, name);
    // };
    // destroyAnimator  (name) {
    //     return widget_destroy_animator(this.nativeObj, name);
    // };
    // setEnable  (enable) {
    //     return widget_set_enable(this.nativeObj, enable);
    // };
    // setFloating  (floating) {
    //     return widget_set_floating(this.nativeObj, floating);
    // };
    // setFocused  (focused) {
    //     return widget_set_focused(this.nativeObj, focused);
    // };
    // child  (name) {
    //     return new Widget(widget_child(this.nativeObj, name));
    // };
    // lookup  (name, recursive) {
    //     return new Widget(widget_lookup(this.nativeObj, name, recursive));
    // };
    // lookupByType  (type, recursive) {
    //     return new Widget(widget_lookup_by_type(this.nativeObj, type, recursive));
    // };
    // setVisible  (visible, recursive) {
    //     return widget_set_visible(this.nativeObj, visible, recursive);
    // };
    // setVisibleOnly  (visible) {
    //     return widget_set_visible_only(this.nativeObj, visible);
    // };
    // setSensitive  (sensitive) {
    //     return widget_set_sensitive(this.nativeObj, sensitive);
    // };
    // on  (type, on_event, ctx) {
    //     return widget_on(this.nativeObj, type, on_event, ctx);
    // };
    // off  (id) {
    //     return widget_off(this.nativeObj, id);
    // };
    // invalidateForce  (r) {
    //     return widget_invalidate_force(this.nativeObj, r ? r.nativeObj : null);
    // };
    // setPropStr  (name, v) {
    //     return widget_set_prop_str(this.nativeObj, name, v);
    // };
    // getPropStr  (name, defval) {
    //     return widget_get_prop_str(this.nativeObj, name, defval);
    // };
    // setPropInt  (name, v) {
    //     return widget_set_prop_int(this.nativeObj, name, v);
    // };
    // getPropInt  (name, defval) {
    //     return widget_get_prop_int(this.nativeObj, name, defval);
    // };
    // setPropBool  (name, v) {
    //     return widget_set_prop_bool(this.nativeObj, name, v);
    // };
    // getPropBool  (name, defval) {
    //     return widget_get_prop_bool(this.nativeObj, name, defval);
    // };
    // isWindowOpened  () {
    //     return widget_is_window_opened(this.nativeObj);
    // };
    // isWindow  () {
    //     return widget_is_window(this.nativeObj);
    // };
    // isDesigningWindow  () {
    //     return widget_is_designing_window(this.nativeObj);
    // };
    // isWindowManager  () {
    //     return widget_is_window_manager(this.nativeObj);
    // };
    // foreach  (visit, ctx) {
    //     return widget_foreach(this.nativeObj, visit, ctx);
    // };
    // getWindow  () {
    //     return new Widget(widget_get_window(this.nativeObj));
    // };
    // getWindowManager  () {
    //     return new Widget(widget_get_window_manager(this.nativeObj));
    // };
    // clone  (parent) {
    //     return new Widget(widget_clone(this.nativeObj, parent ? parent.nativeObj : null));
    // };
    // equal  (other) {
    //     return widget_equal(this.nativeObj, other ? other.nativeObj : null);
    // };
    // static cast  (widget) {
    //     return new Widget(widget_cast(widget ? (widget.nativeObj || widget) : null));
    // };
    // destroy  () {
    //     return widget_destroy(this.nativeObj);
    // };

    // setSelfLayout  (params) {
    //     return widget_set_self_layout(this.nativeObj, params);
    // };
    // setChildrenLayout  (params) {
    //     return widget_set_children_layout(this.nativeObj, params);
    // };
    // setStyleInt  (state_and_name, value) {
    //     return widget_set_style_int(this.nativeObj, state_and_name, value);
    // };
    // setStyleStr  (state_and_name, value) {
    //     return widget_set_style_str(this.nativeObj, state_and_name, value);
    // };
    // setStyleColor  (state_and_name, value) {
    //     return widget_set_style_color(this.nativeObj, state_and_name, value);
    // };
    //

}

export default Widget;
