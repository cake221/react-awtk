
declare function print(str);
if (this['console'] === undefined) {
  this.console = {}
  this.console.log = function (str) {
    print(str);
  }
}
declare function event_cast(event: any): any;
declare function event_create(type: number): any;
declare function event_destroy(event: any): TRet;
declare function event_t_get_prop_type(nativeObj: any): number;
declare function event_t_get_prop_time(nativeObj: any): number;
declare function event_t_get_prop_target(nativeObj: any): any;
declare function rect_create(x: number, y: number, w: number, h: number): any;
declare function rect_set(rect: any, x: number, y: number, w: number, h: number): any;
declare function rect_cast(rect: any): any;
declare function rect_destroy(r: any): TRet;
declare function rect_t_get_prop_x(nativeObj: any): number;
declare function rect_t_get_prop_y(nativeObj: any): number;
declare function rect_t_get_prop_w(nativeObj: any): number;
declare function rect_t_get_prop_h(nativeObj: any): number;
declare function emitter_create(): any;
declare function emitter_dispatch(emitter: any, e: any): TRet;
declare function emitter_dispatch_simple_event(emitter: any, type: TEventType): TRet;
declare function emitter_on(emitter: any, type: TEventType, on_event: Function, ctx: any): number;
declare function emitter_off(emitter: any, id: number): TRet;
declare function emitter_enable(emitter: any): TRet;
declare function emitter_disable(emitter: any): TRet;
declare function emitter_size(emitter: any): number;
declare function emitter_destroy(emitter: any): TRet;
declare function emitter_cast(emitter: any): any;
declare function bitmap_create(): any;
declare function bitmap_create_ex(w: number, h: number, line_length: number, format: TBitmapFormat): any;
declare function bitmap_get_bpp(bitmap: any): number;
declare function bitmap_destroy(bitmap: any): TRet;
declare function bitmap_t_get_prop_w(nativeObj: any): number;
declare function bitmap_t_get_prop_h(nativeObj: any): number;
declare function bitmap_t_get_prop_line_length(nativeObj: any): number;
declare function bitmap_t_get_prop_flags(nativeObj: any): number;
declare function bitmap_t_get_prop_format(nativeObj: any): number;
declare function bitmap_t_get_prop_name(nativeObj: any): string;
declare function value_set_bool(v: any, value: any): any;
declare function value_bool(v: any): boolean;
declare function value_set_int8(v: any, value: any): any;
declare function value_int8(v: any): number;
declare function value_set_uint8(v: any, value: any): any;
declare function value_uint8(v: any): number;
declare function value_set_int16(v: any, value: any): any;
declare function value_int16(v: any): number;
declare function value_set_uint16(v: any, value: any): any;
declare function value_uint16(v: any): number;
declare function value_set_int32(v: any, value: any): any;
declare function value_int32(v: any): number;
declare function value_set_uint32(v: any, value: any): any;
declare function value_set_int64(v: any, value: any): any;
declare function value_int64(v: any): number;
declare function value_set_uint64(v: any, value: any): any;
declare function value_uint64(v: any): number;
declare function value_set_float(v: any, value: any): any;
declare function value_float32(v: any): number;
declare function value_set_double(v: any, value: any): any;
declare function value_double(v: any): number;
declare function value_dup_str(v: any, value: string): any;
declare function value_str(v: any): string;
declare function value_is_null(value: any): boolean;
declare function value_set_int(v: any, value: any): any;
declare function value_set_object(v: any, value: any): any;
declare function value_object(v: any): any;
declare function value_set_token(v: any, value: any): any;
declare function value_token(v: any): number;
declare function value_create(): any;
declare function value_destroy(v: any): TRet;
declare function value_reset(v: any): TRet;
declare function value_cast(value: any): any;
declare function object_unref(obj: any): TRet;
declare function object_ref(obj: any): any;
declare function object_get_type(obj: any): string;
declare function object_get_desc(obj: any): string;
declare function object_get_size(obj: any): number;
declare function object_is_collection(obj: any): boolean;
declare function object_set_name(obj: any, name: string): TRet;
declare function object_compare(obj: any, other: any): number;
declare function object_get_prop(obj: any, name: string, v: any): TRet;
declare function object_get_prop_str(obj: any, name: string): string;
declare function object_get_prop_pointer(obj: any, name: string): any;
declare function object_get_prop_object(obj: any, name: string): any;
declare function object_get_prop_int(obj: any, name: string, defval: number): number;
declare function object_get_prop_bool(obj: any, name: string, defval: boolean): boolean;
declare function object_get_prop_float(obj: any, name: string, defval: number): number;
declare function object_remove_prop(obj: any, name: string): TRet;
declare function object_set_prop(obj: any, name: string, value: any): TRet;
declare function object_set_prop_str(obj: any, name: string, value: string): TRet;
declare function object_set_prop_object(obj: any, name: string, value: any): TRet;
declare function object_set_prop_int(obj: any, name: string, value: any): TRet;
declare function object_set_prop_bool(obj: any, name: string, value: any): TRet;
declare function object_set_prop_float(obj: any, name: string, value: any): TRet;
declare function object_copy_prop(obj: any, src: any, name: string): TRet;
declare function object_has_prop(obj: any, name: string): boolean;
declare function object_eval(obj: any, expr: string, v: any): TRet;
declare function object_can_exec(obj: any, name: string, args: string): boolean;
declare function object_exec(obj: any, name: string, args: string): TRet;
declare function object_notify_changed(obj: any): TRet;
declare function object_get_prop_str_by_path(obj: any, path: string): string;
declare function object_get_prop_pointer_by_path(obj: any, path: string): any;
declare function object_get_prop_object_by_path(obj: any, path: string): any;
declare function object_get_prop_int_by_path(obj: any, path: string, defval: number): number;
declare function object_get_prop_bool_by_path(obj: any, path: string, defval: boolean): boolean;
declare function object_get_prop_float_by_path(obj: any, path: string, defval: number): number;
declare function object_t_get_prop_ref_count(nativeObj: any): number;
declare function object_t_get_prop_name(nativeObj: any): string;
declare function tk_init(w: number, h: number, app_type: TAppType, app_name: string, app_root: string): TRet;
declare function tk_run(): TRet;
declare function tk_quit(): TRet;
declare function tk_get_pointer_x(): number;
declare function tk_get_pointer_y(): number;
declare function tk_is_pointer_pressed(): boolean;
declare function DIALOG_QUIT_NONE();
declare function DIALOG_QUIT_OK();
declare function DIALOG_QUIT_YES();
declare function DIALOG_QUIT_CANCEL();
declare function DIALOG_QUIT_NO();
declare function DIALOG_QUIT_OTHER();
declare function EVT_POINTER_DOWN();
declare function EVT_POINTER_DOWN_BEFORE_CHILDREN();
declare function EVT_POINTER_MOVE();
declare function EVT_POINTER_MOVE_BEFORE_CHILDREN();
declare function EVT_POINTER_UP();
declare function EVT_POINTER_UP_BEFORE_CHILDREN();
declare function EVT_WHEEL();
declare function EVT_WHEEL_BEFORE_CHILDREN();
declare function EVT_POINTER_DOWN_ABORT();
declare function EVT_CONTEXT_MENU();
declare function EVT_POINTER_ENTER();
declare function EVT_POINTER_LEAVE();
declare function EVT_LONG_PRESS();
declare function EVT_CLICK();
declare function EVT_FOCUS();
declare function EVT_BLUR();
declare function EVT_KEY_DOWN();
declare function EVT_KEY_DOWN_BEFORE_CHILDREN();
declare function EVT_KEY_REPEAT();
declare function EVT_KEY_UP();
declare function EVT_KEY_UP_BEFORE_CHILDREN();
declare function EVT_WILL_MOVE();
declare function EVT_MOVE();
declare function EVT_WILL_RESIZE();
declare function EVT_RESIZE();
declare function EVT_WILL_MOVE_RESIZE();
declare function EVT_MOVE_RESIZE();
declare function EVT_VALUE_WILL_CHANGE();
declare function EVT_VALUE_CHANGED();
declare function EVT_VALUE_CHANGING();
declare function EVT_PAINT();
declare function EVT_BEFORE_PAINT();
declare function EVT_AFTER_PAINT();
declare function EVT_PAINT_DONE();
declare function EVT_LOCALE_CHANGED();
declare function EVT_ANIM_START();
declare function EVT_ANIM_STOP();
declare function EVT_ANIM_PAUSE();
declare function EVT_ANIM_ONCE();
declare function EVT_ANIM_END();
declare function EVT_WINDOW_LOAD();
declare function EVT_WIDGET_LOAD();
declare function EVT_WINDOW_WILL_OPEN();
declare function EVT_WINDOW_OPEN();
declare function EVT_WINDOW_TO_BACKGROUND();
declare function EVT_WINDOW_TO_FOREGROUND();
declare function EVT_WINDOW_CLOSE();
declare function EVT_REQUEST_CLOSE_WINDOW();
declare function EVT_TOP_WINDOW_CHANGED();
declare function EVT_IM_COMMIT();
declare function EVT_IM_SHOW_CANDIDATES();
declare function EVT_IM_ACTION();
declare function EVT_IM_ACTION_INFO();
declare function EVT_DRAG_START();
declare function EVT_DRAG();
declare function EVT_DRAG_END();
declare function EVT_SCREEN_SAVER();
declare function EVT_LOW_MEMORY();
declare function EVT_OUT_OF_MEMORY();
declare function EVT_ORIENTATION_WILL_CHANGED();
declare function EVT_ORIENTATION_CHANGED();
declare function EVT_WIDGET_CREATED();
declare function EVT_REQUEST_QUIT_APP();
declare function EVT_THEME_CHANGED();
declare function EVT_WIDGET_ADD_CHILD();
declare function EVT_WIDGET_REMOVE_CHILD();
declare function EVT_REQ_START();
declare function EVT_USER_START();
declare function EVT_NONE();
declare function EVT_PROP_WILL_CHANGE();
declare function EVT_PROP_CHANGED();
declare function EVT_ITEMS_WILL_CHANGE();
declare function EVT_ITEMS_CHANGED();
declare function EVT_PROPS_CHANGED();
declare function EVT_PROGRESS();
declare function EVT_DESTROY();
declare function font_manager_unload_font(fm: any, name: string, size: number): TRet;
declare function font_manager_unload_all(fm: any): TRet;
declare function GLYPH_FMT_ALPHA();
declare function GLYPH_FMT_MONO();
declare function GLYPH_FMT_RGBA();
declare function idle_add(on_idle: Function, ctx: any): number;
declare function idle_remove(idle_id: number): TRet;
declare function image_manager(): any;
declare function image_manager_get_bitmap(imm: any, name: string, image: any): TRet;
declare function INPUT_TEXT();
declare function INPUT_INT();
declare function INPUT_UINT();
declare function INPUT_HEX();
declare function INPUT_FLOAT();
declare function INPUT_UFLOAT();
declare function INPUT_EMAIL();
declare function INPUT_PASSWORD();
declare function INPUT_PHONE();
declare function INPUT_CUSTOM();
declare function INPUT_CUSTOM_PASSWORD();
declare function VALUE_TYPE_INVALID();
declare function VALUE_TYPE_BOOL();
declare function VALUE_TYPE_INT8();
declare function VALUE_TYPE_UINT8();
declare function VALUE_TYPE_INT16();
declare function VALUE_TYPE_UINT16();
declare function VALUE_TYPE_INT32();
declare function VALUE_TYPE_UINT32();
declare function VALUE_TYPE_INT64();
declare function VALUE_TYPE_UINT64();
declare function VALUE_TYPE_POINTER();
declare function VALUE_TYPE_FLOAT();
declare function VALUE_TYPE_FLOAT32();
declare function VALUE_TYPE_DOUBLE();
declare function VALUE_TYPE_STRING();
declare function VALUE_TYPE_WSTRING();
declare function VALUE_TYPE_OBJECT();
declare function VALUE_TYPE_SIZED_STRING();
declare function VALUE_TYPE_BINARY();
declare function VALUE_TYPE_UBJSON();
declare function VALUE_TYPE_TOKEN();
declare function input_method_commit_text(im: any, text: string): TRet;
declare function input_method_dispatch_key(im: any, key: number): TRet;
declare function input_method(): any;
declare function TK_KEY_RETURN();
declare function TK_KEY_ESCAPE();
declare function TK_KEY_BACKSPACE();
declare function TK_KEY_TAB();
declare function TK_KEY_SPACE();
declare function TK_KEY_EXCLAIM();
declare function TK_KEY_QUOTEDBL();
declare function TK_KEY_HASH();
declare function TK_KEY_PERCENT();
declare function TK_KEY_DOLLAR();
declare function TK_KEY_AMPERSAND();
declare function TK_KEY_QUOTE();
declare function TK_KEY_LEFTPAREN();
declare function TK_KEY_RIGHTPAREN();
declare function TK_KEY_ASTERISK();
declare function TK_KEY_PLUS();
declare function TK_KEY_COMMA();
declare function TK_KEY_MINUS();
declare function TK_KEY_PERIOD();
declare function TK_KEY_SLASH();
declare function TK_KEY_0();
declare function TK_KEY_1();
declare function TK_KEY_2();
declare function TK_KEY_3();
declare function TK_KEY_4();
declare function TK_KEY_5();
declare function TK_KEY_6();
declare function TK_KEY_7();
declare function TK_KEY_8();
declare function TK_KEY_9();
declare function TK_KEY_COLON();
declare function TK_KEY_SEMICOLON();
declare function TK_KEY_LESS();
declare function TK_KEY_EQUAL();
declare function TK_KEY_GREATER();
declare function TK_KEY_QUESTION();
declare function TK_KEY_AT();
declare function TK_KEY_LEFTBRACKET();
declare function TK_KEY_BACKSLASH();
declare function TK_KEY_RIGHTBRACKET();
declare function TK_KEY_CARET();
declare function TK_KEY_UNDERSCORE();
declare function TK_KEY_BACKQUOTE();
declare function TK_KEY_a();
declare function TK_KEY_b();
declare function TK_KEY_c();
declare function TK_KEY_d();
declare function TK_KEY_e();
declare function TK_KEY_f();
declare function TK_KEY_g();
declare function TK_KEY_h();
declare function TK_KEY_i();
declare function TK_KEY_j();
declare function TK_KEY_k();
declare function TK_KEY_l();
declare function TK_KEY_m();
declare function TK_KEY_n();
declare function TK_KEY_o();
declare function TK_KEY_p();
declare function TK_KEY_q();
declare function TK_KEY_r();
declare function TK_KEY_s();
declare function TK_KEY_t();
declare function TK_KEY_u();
declare function TK_KEY_v();
declare function TK_KEY_w();
declare function TK_KEY_x();
declare function TK_KEY_y();
declare function TK_KEY_z();
declare function TK_KEY_A();
declare function TK_KEY_B();
declare function TK_KEY_C();
declare function TK_KEY_D();
declare function TK_KEY_E();
declare function TK_KEY_F();
declare function TK_KEY_G();
declare function TK_KEY_H();
declare function TK_KEY_I();
declare function TK_KEY_J();
declare function TK_KEY_K();
declare function TK_KEY_L();
declare function TK_KEY_M();
declare function TK_KEY_N();
declare function TK_KEY_O();
declare function TK_KEY_P();
declare function TK_KEY_Q();
declare function TK_KEY_R();
declare function TK_KEY_S();
declare function TK_KEY_T();
declare function TK_KEY_U();
declare function TK_KEY_V();
declare function TK_KEY_W();
declare function TK_KEY_X();
declare function TK_KEY_Y();
declare function TK_KEY_Z();
declare function TK_KEY_DOT();
declare function TK_KEY_DELETE();
declare function TK_KEY_LEFTBRACE();
declare function TK_KEY_RIGHTBRACE();
declare function TK_KEY_LSHIFT();
declare function TK_KEY_RSHIFT();
declare function TK_KEY_LCTRL();
declare function TK_KEY_RCTRL();
declare function TK_KEY_LALT();
declare function TK_KEY_RALT();
declare function TK_KEY_CAPSLOCK();
declare function TK_KEY_HOME();
declare function TK_KEY_END();
declare function TK_KEY_INSERT();
declare function TK_KEY_UP();
declare function TK_KEY_DOWN();
declare function TK_KEY_LEFT();
declare function TK_KEY_RIGHT();
declare function TK_KEY_PAGEUP();
declare function TK_KEY_PAGEDOWN();
declare function TK_KEY_F1();
declare function TK_KEY_F2();
declare function TK_KEY_F3();
declare function TK_KEY_F4();
declare function TK_KEY_F5();
declare function TK_KEY_F6();
declare function TK_KEY_F7();
declare function TK_KEY_F8();
declare function TK_KEY_F9();
declare function TK_KEY_F10();
declare function TK_KEY_F11();
declare function TK_KEY_F12();
declare function TK_KEY_MENU();
declare function TK_KEY_COMMAND();
declare function TK_KEY_BACK();
declare function TK_KEY_CANCEL();
declare function locale_info(): any;
declare function locale_info_tr(locale_info: any, text: string): string;
declare function locale_info_change(locale_info: any, language: string, country: string): TRet;
declare function locale_info_off(locale_info: any, id: number): TRet;
declare function STYLE_ID_BG_COLOR();
declare function STYLE_ID_FG_COLOR();
declare function STYLE_ID_MASK_COLOR();
declare function STYLE_ID_FONT_NAME();
declare function STYLE_ID_FONT_SIZE();
declare function STYLE_ID_FONT_STYLE();
declare function STYLE_ID_TEXT_COLOR();
declare function STYLE_ID_TIPS_TEXT_COLOR();
declare function STYLE_ID_TEXT_ALIGN_H();
declare function STYLE_ID_TEXT_ALIGN_V();
declare function STYLE_ID_BORDER_COLOR();
declare function STYLE_ID_BORDER_WIDTH();
declare function STYLE_ID_BORDER();
declare function STYLE_ID_BG_IMAGE();
declare function STYLE_ID_BG_IMAGE_DRAW_TYPE();
declare function STYLE_ID_ICON();
declare function STYLE_ID_FG_IMAGE();
declare function STYLE_ID_FG_IMAGE_DRAW_TYPE();
declare function STYLE_ID_SPACER();
declare function STYLE_ID_MARGIN();
declare function STYLE_ID_MARGIN_LEFT();
declare function STYLE_ID_MARGIN_RIGHT();
declare function STYLE_ID_MARGIN_TOP();
declare function STYLE_ID_MARGIN_BOTTOM();
declare function STYLE_ID_ICON_AT();
declare function STYLE_ID_ACTIVE_ICON();
declare function STYLE_ID_X_OFFSET();
declare function STYLE_ID_Y_OFFSET();
declare function STYLE_ID_SELECTED_BG_COLOR();
declare function STYLE_ID_SELECTED_FG_COLOR();
declare function STYLE_ID_SELECTED_TEXT_COLOR();
declare function STYLE_ID_ROUND_RADIUS();
declare function STYLE_ID_CHILDREN_LAYOUT();
declare function STYLE_ID_SELF_LAYOUT();
declare function style_notify_widget_state_changed(s: any, widget: any): TRet;
declare function style_is_valid(s: any): boolean;
declare function style_get_int(s: any, name: string, defval: number): number;
declare function style_get_str(s: any, name: string, defval: string): string;
declare function style_set(s: any, state: string, name: string, value: any): TRet;
declare function style_is_mutable(s: any): boolean;
declare function theme(): any;
declare function timer_add(on_timer: Function, ctx: any, duration: number): number;
declare function timer_remove(timer_id: number): TRet;
declare function timer_reset(timer_id: number): TRet;
declare function timer_modify(timer_id: number, duration: number): TRet;
declare function ALIGN_V_NONE();
declare function ALIGN_V_MIDDLE();
declare function ALIGN_V_TOP();
declare function ALIGN_V_BOTTOM();
declare function ALIGN_H_NONE();
declare function ALIGN_H_CENTER();
declare function ALIGN_H_LEFT();
declare function ALIGN_H_RIGHT();
declare function APP_MOBILE();
declare function APP_SIMULATOR();
declare function APP_DESKTOP();
declare function BITMAP_FMT_NONE();
declare function BITMAP_FMT_RGBA8888();
declare function BITMAP_FMT_ABGR8888();
declare function BITMAP_FMT_BGRA8888();
declare function BITMAP_FMT_ARGB8888();
declare function BITMAP_FMT_RGB565();
declare function BITMAP_FMT_BGR565();
declare function BITMAP_FMT_RGB888();
declare function BITMAP_FMT_BGR888();
declare function BITMAP_FMT_GRAY();
declare function BITMAP_FMT_MONO();
declare function BITMAP_FLAG_NONE();
declare function BITMAP_FLAG_OPAQUE();
declare function BITMAP_FLAG_IMMUTABLE();
declare function BITMAP_FLAG_TEXTURE();
declare function BITMAP_FLAG_CHANGED();
declare function BITMAP_FLAG_PREMULTI_ALPHA();
declare function vgcanvas_cast(vg: any): any;
declare function vgcanvas_flush(vg: any): TRet;
declare function vgcanvas_begin_path(vg: any): TRet;
declare function vgcanvas_move_to(vg: any, x: number, y: number): TRet;
declare function vgcanvas_line_to(vg: any, x: number, y: number): TRet;
declare function vgcanvas_quad_to(vg: any, cpx: number, cpy: number, x: number, y: number): TRet;
declare function vgcanvas_bezier_to(vg: any, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): TRet;
declare function vgcanvas_arc_to(vg: any, x1: number, y1: number, x2: number, y2: number, r: number): TRet;
declare function vgcanvas_arc(vg: any, x: number, y: number, r: number, start_angle: number, end_angle: number, ccw: boolean): TRet;
declare function vgcanvas_is_point_in_path(vg: any, x: number, y: number): boolean;
declare function vgcanvas_rect(vg: any, x: number, y: number, w: number, h: number): TRet;
declare function vgcanvas_rounded_rect(vg: any, x: number, y: number, w: number, h: number, r: number): TRet;
declare function vgcanvas_ellipse(vg: any, x: number, y: number, rx: number, ry: number): TRet;
declare function vgcanvas_close_path(vg: any): TRet;
declare function vgcanvas_rotate(vg: any, rad: number): TRet;
declare function vgcanvas_scale(vg: any, x: number, y: number): TRet;
declare function vgcanvas_translate(vg: any, x: number, y: number): TRet;
declare function vgcanvas_transform(vg: any, a: number, b: number, c: number, d: number, e: number, f: number): TRet;
declare function vgcanvas_set_transform(vg: any, a: number, b: number, c: number, d: number, e: number, f: number): TRet;
declare function vgcanvas_clip_rect(vg: any, x: number, y: number, w: number, h: number): TRet;
declare function vgcanvas_fill(vg: any): TRet;
declare function vgcanvas_stroke(vg: any): TRet;
declare function vgcanvas_paint(vg: any, stroke: boolean, img: any): TRet;
declare function vgcanvas_set_font(vg: any, font: string): TRet;
declare function vgcanvas_set_font_size(vg: any, font: number): TRet;
declare function vgcanvas_set_text_align(vg: any, value: string): TRet;
declare function vgcanvas_set_text_baseline(vg: any, value: string): TRet;
declare function vgcanvas_fill_text(vg: any, text: string, x: number, y: number, max_width: number): TRet;
declare function vgcanvas_measure_text(vg: any, text: string): number;
declare function vgcanvas_draw_image(vg: any, img: any, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): TRet;
declare function vgcanvas_draw_icon(vg: any, img: any, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): TRet;
declare function vgcanvas_set_antialias(vg: any, value: any): TRet;
declare function vgcanvas_set_global_alpha(vg: any, alpha: number): TRet;
declare function vgcanvas_set_line_width(vg: any, value: any): TRet;
declare function vgcanvas_set_fill_color_str(vg: any, color: string): TRet;
declare function vgcanvas_set_stroke_color_str(vg: any, color: string): TRet;
declare function vgcanvas_set_line_cap(vg: any, value: string): TRet;
declare function vgcanvas_set_line_join(vg: any, value: string): TRet;
declare function vgcanvas_set_miter_limit(vg: any, value: any): TRet;
declare function vgcanvas_save(vg: any): TRet;
declare function vgcanvas_restore(vg: any): TRet;
declare function vgcanvas_t_get_prop_w(nativeObj: any): number;
declare function vgcanvas_t_get_prop_h(nativeObj: any): number;
declare function vgcanvas_t_get_prop_stride(nativeObj: any): number;
declare function vgcanvas_t_get_prop_ratio(nativeObj: any): number;
declare function vgcanvas_t_get_prop_anti_alias(nativeObj: any): boolean;
declare function vgcanvas_t_get_prop_line_width(nativeObj: any): number;
declare function vgcanvas_t_get_prop_global_alpha(nativeObj: any): number;
declare function vgcanvas_t_get_prop_miter_limit(nativeObj: any): number;
declare function vgcanvas_t_get_prop_line_cap(nativeObj: any): string;
declare function vgcanvas_t_get_prop_line_join(nativeObj: any): string;
declare function vgcanvas_t_get_prop_font(nativeObj: any): string;
declare function vgcanvas_t_get_prop_font_size(nativeObj: any): number;
declare function vgcanvas_t_get_prop_text_align(nativeObj: any): string;
declare function vgcanvas_t_get_prop_text_baseline(nativeObj: any): string;
declare function WIDGET_PROP_EXEC();
declare function WIDGET_PROP_X();
declare function WIDGET_PROP_Y();
declare function WIDGET_PROP_W();
declare function WIDGET_PROP_H();
declare function WIDGET_PROP_CANVAS();
declare function WIDGET_PROP_LOCALIZE_OPTIONS();
declare function WIDGET_PROP_NATIVE_WINDOW();
declare function WIDGET_PROP_HIGHLIGHT();
declare function WIDGET_PROP_BAR_SIZE();
declare function WIDGET_PROP_OPACITY();
declare function WIDGET_PROP_MIN_W();
declare function WIDGET_PROP_MAX_W();
declare function WIDGET_PROP_CHILDREN_LAYOUT();
declare function WIDGET_PROP_LAYOUT();
declare function WIDGET_PROP_SELF_LAYOUT();
declare function WIDGET_PROP_LAYOUT_W();
declare function WIDGET_PROP_LAYOUT_H();
declare function WIDGET_PROP_VIRTUAL_W();
declare function WIDGET_PROP_VIRTUAL_H();
declare function WIDGET_PROP_NAME();
declare function WIDGET_PROP_TYPE();
declare function WIDGET_PROP_CLOSABLE();
declare function WIDGET_PROP_CURSOR();
declare function WIDGET_PROP_VALUE();
declare function WIDGET_PROP_LENGTH();
declare function WIDGET_PROP_TEXT();
declare function WIDGET_PROP_TR_TEXT();
declare function WIDGET_PROP_STYLE();
declare function WIDGET_PROP_ENABLE();
declare function WIDGET_PROP_FEEDBACK();
declare function WIDGET_PROP_FLOATING();
declare function WIDGET_PROP_MARGIN();
declare function WIDGET_PROP_SPACING();
declare function WIDGET_PROP_LEFT_MARGIN();
declare function WIDGET_PROP_RIGHT_MARGIN();
declare function WIDGET_PROP_TOP_MARGIN();
declare function WIDGET_PROP_BOTTOM_MARGIN();
declare function WIDGET_PROP_STEP();
declare function WIDGET_PROP_VISIBLE();
declare function WIDGET_PROP_SENSITIVE();
declare function WIDGET_PROP_ANIMATION();
declare function WIDGET_PROP_ANIM_HINT();
declare function WIDGET_PROP_FULLSCREEN();
declare function WIDGET_PROP_OPEN_ANIM_HINT();
declare function WIDGET_PROP_CLOSE_ANIM_HINT();
declare function WIDGET_PROP_MIN();
declare function WIDGET_PROP_TIPS();
declare function WIDGET_PROP_INPUT_TYPE();
declare function WIDGET_PROP_READONLY();
declare function WIDGET_PROP_PASSWORD_VISIBLE();
declare function WIDGET_PROP_ACTIVE();
declare function WIDGET_PROP_VERTICAL();
declare function WIDGET_PROP_SHOW_TEXT();
declare function WIDGET_PROP_XOFFSET();
declare function WIDGET_PROP_YOFFSET();
declare function WIDGET_PROP_ALIGN_V();
declare function WIDGET_PROP_ALIGN_H();
declare function WIDGET_PROP_AUTO_PLAY();
declare function WIDGET_PROP_LOOP();
declare function WIDGET_PROP_AUTO_FIX();
declare function WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED();
declare function WIDGET_PROP_OPEN_IM_WHEN_FOCUSED();
declare function WIDGET_PROP_X_MIN();
declare function WIDGET_PROP_X_MAX();
declare function WIDGET_PROP_Y_MIN();
declare function WIDGET_PROP_Y_MAX();
declare function WIDGET_PROP_MAX();
declare function WIDGET_PROP_GRAB_KEYS();
declare function WIDGET_PROP_ROW();
declare function WIDGET_PROP_STATE_FOR_STYLE();
declare function WIDGET_PROP_THEME();
declare function WIDGET_PROP_STAGE();
declare function WIDGET_PROP_IMAGE_MANAGER();
declare function WIDGET_PROP_ASSETS_MANAGER();
declare function WIDGET_PROP_LOCALE_INFO();
declare function WIDGET_PROP_FONT_MANAGER();
declare function WIDGET_PROP_THEME_OBJ();
declare function WIDGET_PROP_DEFAULT_THEME_OBJ();
declare function WIDGET_PROP_ITEM_WIDTH();
declare function WIDGET_PROP_ITEM_HEIGHT();
declare function WIDGET_PROP_DEFAULT_ITEM_HEIGHT();
declare function WIDGET_PROP_XSLIDABLE();
declare function WIDGET_PROP_YSLIDABLE();
declare function WIDGET_PROP_REPEAT();
declare function WIDGET_PROP_ENABLE_LONG_PRESS();
declare function WIDGET_PROP_ANIMATABLE();
declare function WIDGET_PROP_AUTO_HIDE_SCROLL_BAR();
declare function WIDGET_PROP_IMAGE();
declare function WIDGET_PROP_FORMAT();
declare function WIDGET_PROP_DRAW_TYPE();
declare function WIDGET_PROP_SELECTABLE();
declare function WIDGET_PROP_CLICKABLE();
declare function WIDGET_PROP_SCALE_X();
declare function WIDGET_PROP_SCALE_Y();
declare function WIDGET_PROP_ANCHOR_X();
declare function WIDGET_PROP_ANCHOR_Y();
declare function WIDGET_PROP_ROTATION();
declare function WIDGET_PROP_COMPACT();
declare function WIDGET_PROP_SCROLLABLE();
declare function WIDGET_PROP_ICON();
declare function WIDGET_PROP_OPTIONS();
declare function WIDGET_PROP_SELECTED();
declare function WIDGET_PROP_CHECKED();
declare function WIDGET_PROP_ACTIVE_ICON();
declare function WIDGET_PROP_LOAD_UI();
declare function WIDGET_PROP_OPEN_WINDOW();
declare function WIDGET_PROP_SELECTED_INDEX();
declare function WIDGET_PROP_CLOSE_WHEN_CLICK();
declare function WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE();
declare function WIDGET_PROP_LINE_GAP();
declare function WIDGET_PROP_BG_COLOR();
declare function WIDGET_PROP_BORDER_COLOR();
declare function WIDGET_PROP_DELAY();
declare function WIDGET_PROP_IS_KEYBOARD();
declare function WIDGET_PROP_FOCUSED();
declare function WIDGET_PROP_FOCUS();
declare function WIDGET_PROP_FOCUSABLE();
declare function WIDGET_PROP_WITH_FOCUS_STATE();
declare function WIDGET_PROP_MOVE_FOCUS_PREV_KEY();
declare function WIDGET_PROP_MOVE_FOCUS_NEXT_KEY();
declare function WIDGET_PROP_MOVE_FOCUS_UP_KEY();
declare function WIDGET_PROP_MOVE_FOCUS_DOWN_KEY();
declare function WIDGET_PROP_MOVE_FOCUS_LEFT_KEY();
declare function WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY();
declare function WIDGET_TYPE_NONE();
declare function WIDGET_TYPE_WINDOW_MANAGER();
declare function WIDGET_TYPE_NORMAL_WINDOW();
declare function WIDGET_TYPE_OVERLAY();
declare function WIDGET_TYPE_TOOL_BAR();
declare function WIDGET_TYPE_DIALOG();
declare function WIDGET_TYPE_POPUP();
declare function WIDGET_TYPE_SYSTEM_BAR();
declare function WIDGET_TYPE_SYSTEM_BAR_BOTTOM();
declare function WIDGET_TYPE_SPRITE();
declare function WIDGET_TYPE_KEYBOARD();
declare function WIDGET_TYPE_DND();
declare function WIDGET_TYPE_LABEL();
declare function WIDGET_TYPE_BUTTON();
declare function WIDGET_TYPE_IMAGE();
declare function WIDGET_TYPE_EDIT();
declare function WIDGET_TYPE_PROGRESS_BAR();
declare function WIDGET_TYPE_GROUP_BOX();
declare function WIDGET_TYPE_CHECK_BUTTON();
declare function WIDGET_TYPE_RADIO_BUTTON();
declare function WIDGET_TYPE_DIALOG_TITLE();
declare function WIDGET_TYPE_DIALOG_CLIENT();
declare function WIDGET_TYPE_SLIDER();
declare function WIDGET_TYPE_VIEW();
declare function WIDGET_TYPE_COMBO_BOX();
declare function WIDGET_TYPE_COMBO_BOX_ITEM();
declare function WIDGET_TYPE_SLIDE_VIEW();
declare function WIDGET_TYPE_SLIDE_INDICATOR();
declare function WIDGET_TYPE_SLIDE_INDICATOR_ARC();
declare function WIDGET_TYPE_PAGES();
declare function WIDGET_TYPE_TAB_BUTTON();
declare function WIDGET_TYPE_TAB_CONTROL();
declare function WIDGET_TYPE_TAB_BUTTON_GROUP();
declare function WIDGET_TYPE_BUTTON_GROUP();
declare function WIDGET_TYPE_CANDIDATES();
declare function WIDGET_TYPE_SPIN_BOX();
declare function WIDGET_TYPE_DRAGGER();
declare function WIDGET_TYPE_SCROLL_BAR();
declare function WIDGET_TYPE_SCROLL_BAR_DESKTOP();
declare function WIDGET_TYPE_SCROLL_BAR_MOBILE();
declare function WIDGET_TYPE_SCROLL_VIEW();
declare function WIDGET_TYPE_LIST_VIEW();
declare function WIDGET_TYPE_LIST_VIEW_H();
declare function WIDGET_TYPE_LIST_ITEM();
declare function WIDGET_TYPE_COLOR_PICKER();
declare function WIDGET_TYPE_COLOR_COMPONENT();
declare function WIDGET_TYPE_COLOR_TILE();
declare function WIDGET_TYPE_CLIP_VIEW();
declare function WIDGET_TYPE_RICH_TEXT();
declare function WIDGET_TYPE_APP_BAR();
declare function WIDGET_TYPE_GRID();
declare function WIDGET_TYPE_GRID_ITEM();
declare function WIDGET_TYPE_ROW();
declare function WIDGET_TYPE_COLUMN();
declare function WIDGET_TYPE_CALIBRATION_WIN();
declare function WINDOW_STAGE_NONE();
declare function WINDOW_STAGE_CREATED();
declare function WINDOW_STAGE_OPENED();
declare function WINDOW_STAGE_CLOSED();
declare function WINDOW_CLOSABLE_YES();
declare function WINDOW_CLOSABLE_NO();
declare function WINDOW_CLOSABLE_CONFIRM();
declare function WIDGET_STATE_NONE();
declare function WIDGET_STATE_NORMAL();
declare function WIDGET_STATE_PRESSED();
declare function WIDGET_STATE_OVER();
declare function WIDGET_STATE_DISABLE();
declare function WIDGET_STATE_FOCUSED();
declare function WIDGET_STATE_CHECKED();
declare function WIDGET_STATE_UNCHECKED();
declare function WIDGET_STATE_EMPTY();
declare function WIDGET_STATE_EMPTY_FOCUS();
declare function WIDGET_STATE_ERROR();
declare function WIDGET_STATE_SELECTED();
declare function WIDGET_STATE_NORMAL_OF_CHECKED();
declare function WIDGET_STATE_PRESSED_OF_CHECKED();
declare function WIDGET_STATE_OVER_OF_CHECKED();
declare function WIDGET_STATE_FOCUSED_OF_CHECKED();
declare function WIDGET_STATE_NORMAL_OF_ACTIVE();
declare function WIDGET_STATE_PRESSED_OF_ACTIVE();
declare function WIDGET_STATE_OVER_OF_ACTIVE();
declare function WIDGET_STATE_FOCUSED_OF_ACTIVE();
declare function widget_count_children(widget: any): number;
declare function widget_get_child(widget: any, index: number): any;
declare function widget_index_of(widget: any): number;
declare function widget_move(widget: any, x: number, y: number): TRet;
declare function widget_resize(widget: any, w: number, h: number): TRet;
declare function widget_move_resize(widget: any, x: number, y: number, w: number, h: number): TRet;
declare function widget_set_value(widget: any, value: any): TRet;
declare function widget_animate_value_to(widget: any, value: any, duration: number): TRet;
declare function widget_add_value(widget: any, delta: number): TRet;
declare function widget_use_style(widget: any, style: string): TRet;
declare function widget_set_text_utf8(widget: any, text: string): TRet;
declare function widget_set_tr_text(widget: any, text: string): TRet;
declare function widget_get_value(widget: any): number;
declare function widget_get_text(widget: any): any;
declare function widget_set_name(widget: any, name: string): TRet;
declare function widget_set_theme(widget: any, name: string): TRet;
declare function widget_set_pointer_cursor(widget: any, cursor: string): TRet;
declare function widget_set_animation(widget: any, animation: string): TRet;
declare function widget_create_animator(widget: any, animation: string): TRet;
declare function widget_start_animator(widget: any, name: string): TRet;
declare function widget_set_animator_time_scale(widget: any, name: string, time_scale: number): TRet;
declare function widget_pause_animator(widget: any, name: string): TRet;
declare function widget_stop_animator(widget: any, name: string): TRet;
declare function widget_destroy_animator(widget: any, name: string): TRet;
declare function widget_set_enable(widget: any, enable: boolean): TRet;
declare function widget_set_feedback(widget: any, feedback: boolean): TRet;
declare function widget_set_floating(widget: any, floating: boolean): TRet;
declare function widget_set_focused(widget: any, focused: boolean): TRet;
declare function widget_set_focusable(widget: any, focusable: boolean): TRet;
declare function widget_set_state(widget: any, state: string): TRet;
declare function widget_set_opacity(widget: any, opacity: number): TRet;
declare function widget_destroy_children(widget: any): TRet;
declare function widget_add_child(widget: any, child: any): TRet;
declare function widget_remove_child(widget: any, child: any): TRet;
declare function widget_insert_child(widget: any, index: number, child: any): TRet;
declare function widget_restack(widget: any, index: number): TRet;
declare function widget_child(widget: any, name: string): any;
declare function widget_lookup(widget: any, name: string, recursive: boolean): any;
declare function widget_lookup_by_type(widget: any, type: string, recursive: boolean): any;
declare function widget_set_visible(widget: any, visible: boolean, recursive: boolean): TRet;
declare function widget_set_visible_only(widget: any, visible: boolean): TRet;
declare function widget_set_sensitive(widget: any, sensitive: boolean): TRet;
declare function widget_on(widget: any, type: TEventType, on_event: Function, ctx: any): number;
declare function widget_off(widget: any, id: number): TRet;
declare function widget_invalidate_force(widget: any, r: any): TRet;
declare function widget_set_prop_str(widget: any, name: string, v: string): TRet;
declare function widget_get_prop_str(widget: any, name: string, defval: string): string;
declare function widget_set_prop_int(widget: any, name: string, v: number): TRet;
declare function widget_get_prop_int(widget: any, name: string, defval: number): number;
declare function widget_set_prop_bool(widget: any, name: string, v: boolean): TRet;
declare function widget_get_prop_bool(widget: any, name: string, defval: boolean): boolean;
declare function widget_is_window_opened(widget: any): boolean;
declare function widget_is_window(widget: any): boolean;
declare function widget_is_designing_window(widget: any): boolean;
declare function widget_is_window_manager(widget: any): boolean;
declare function widget_foreach(widget: any, visit: Function, ctx: any): TRet;
declare function widget_get_window(widget: any): any;
declare function widget_get_window_manager(widget: any): any;
declare function widget_get_type(widget: any): string;
declare function widget_clone(widget: any, parent: any): any;
declare function widget_equal(widget: any, other: any): boolean;
declare function widget_cast(widget: any): any;
declare function widget_destroy(widget: any): TRet;
declare function widget_unref(widget: any): TRet;
declare function widget_is_system_bar(widget: any): boolean;
declare function widget_is_normal_window(widget: any): boolean;
declare function widget_is_dialog(widget: any): boolean;
declare function widget_is_popup(widget: any): boolean;
declare function widget_layout(widget: any): TRet;
declare function widget_set_self_layout(widget: any, params: string): TRet;
declare function widget_set_children_layout(widget: any, params: string): TRet;
declare function widget_set_self_layout_params(widget: any, x: string, y: string, w: string, h: string): TRet;
declare function widget_set_style_int(widget: any, state_and_name: string, value: any): TRet;
declare function widget_set_style_str(widget: any, state_and_name: string, value: string): TRet;
declare function widget_set_style_color(widget: any, state_and_name: string, value: any): TRet;
declare function widget_t_get_prop_x(nativeObj: any): number;
declare function widget_t_get_prop_y(nativeObj: any): number;
declare function widget_t_get_prop_w(nativeObj: any): number;
declare function widget_t_get_prop_h(nativeObj: any): number;
declare function widget_t_get_prop_name(nativeObj: any): string;
declare function widget_t_get_prop_tr_text(nativeObj: any): string;
declare function widget_t_get_prop_style(nativeObj: any): string;
declare function widget_t_get_prop_animation(nativeObj: any): string;
declare function widget_t_get_prop_enable(nativeObj: any): boolean;
declare function widget_t_get_prop_feedback(nativeObj: any): boolean;
declare function widget_t_get_prop_visible(nativeObj: any): boolean;
declare function widget_t_set_prop_visible(nativeObj: any, v: boolean)
declare function widget_t_get_prop_sensitive(nativeObj: any): boolean;
declare function widget_t_set_prop_sensitive(nativeObj: any, v: boolean)
declare function widget_t_get_prop_focusable(nativeObj: any): boolean;
declare function widget_t_set_prop_focusable(nativeObj: any, v: boolean)
declare function widget_t_get_prop_with_focus_state(nativeObj: any): boolean;
declare function widget_t_set_prop_with_focus_state(nativeObj: any, v: boolean)
declare function widget_t_get_prop_floating(nativeObj: any): boolean;
declare function widget_t_get_prop_parent(nativeObj: any): any;
declare function RET_OK();
declare function RET_OOM();
declare function RET_FAIL();
declare function RET_NOT_IMPL();
declare function RET_QUIT();
declare function RET_FOUND();
declare function RET_BUSY();
declare function RET_REMOVE();
declare function RET_REPEAT();
declare function RET_NOT_FOUND();
declare function RET_DONE();
declare function RET_STOP();
declare function RET_SKIP();
declare function RET_CONTINUE();
declare function RET_OBJECT_CHANGED();
declare function RET_ITEMS_CHANGED();
declare function RET_BAD_PARAMS();
declare function RET_TIMEOUT();
declare function RET_CRC();
declare function RET_IO();
declare function RET_EOS();
declare function time_now_s(): number;
declare function time_now_ms(): number;
declare function IMAGE_DRAW_DEFAULT();
declare function IMAGE_DRAW_CENTER();
declare function IMAGE_DRAW_ICON();
declare function IMAGE_DRAW_SCALE();
declare function IMAGE_DRAW_SCALE_AUTO();
declare function IMAGE_DRAW_SCALE_DOWN();
declare function IMAGE_DRAW_SCALE_W();
declare function IMAGE_DRAW_SCALE_H();
declare function IMAGE_DRAW_REPEAT();
declare function IMAGE_DRAW_REPEAT_X();
declare function IMAGE_DRAW_REPEAT_Y();
declare function IMAGE_DRAW_REPEAT_Y_INVERSE();
declare function IMAGE_DRAW_PATCH9();
declare function IMAGE_DRAW_PATCH3_X();
declare function IMAGE_DRAW_PATCH3_Y();
declare function IMAGE_DRAW_PATCH3_X_SCALE_Y();
declare function IMAGE_DRAW_PATCH3_Y_SCALE_X();
declare function canvas_get_width(c: any): number;
declare function canvas_get_height(c: any): number;
declare function canvas_get_clip_rect(c: any, r: any): TRet;
declare function canvas_set_clip_rect(c: any, r: any): TRet;
declare function canvas_set_clip_rect_ex(c: any, r: any, translate: boolean): TRet;
declare function canvas_set_fill_color_str(c: any, color: string): TRet;
declare function canvas_set_text_color_str(c: any, color: string): TRet;
declare function canvas_set_stroke_color_str(c: any, color: string): TRet;
declare function canvas_set_global_alpha(c: any, alpha: number): TRet;
declare function canvas_translate(c: any, dx: number, dy: number): TRet;
declare function canvas_untranslate(c: any, dx: number, dy: number): TRet;
declare function canvas_draw_vline(c: any, x: number, y: number, h: number): TRet;
declare function canvas_draw_hline(c: any, x: number, y: number, w: number): TRet;
declare function canvas_fill_rect(c: any, x: number, y: number, w: number, h: number): TRet;
declare function canvas_stroke_rect(c: any, x: number, y: number, w: number, h: number): TRet;
declare function canvas_set_font(c: any, name: string, size: number): TRet;
declare function canvas_measure_utf8(c: any, str: string): number;
declare function canvas_draw_utf8(c: any, str: string, x: number, y: number): TRet;
declare function canvas_draw_utf8_in_rect(c: any, str: string, r: any): TRet;
declare function canvas_draw_icon(c: any, img: any, cx: number, cy: number): TRet;
declare function canvas_draw_image(c: any, img: any, src: any, dst: any): TRet;
declare function canvas_draw_image_ex(c: any, img: any, draw_type: TImageDrawType, dst: any): TRet;
declare function canvas_get_vgcanvas(c: any): any;
declare function canvas_cast(c: any): any;
declare function canvas_reset(c: any): TRet;
declare function canvas_t_get_prop_ox(nativeObj: any): number;
declare function canvas_t_get_prop_oy(nativeObj: any): number;
declare function canvas_t_get_prop_font_name(nativeObj: any): string;
declare function canvas_t_get_prop_font_size(nativeObj: any): number;
declare function canvas_t_get_prop_global_alpha(nativeObj: any): number;
declare function named_value_create(): any;
declare function named_value_cast(nv: any): any;
declare function named_value_set_name(nv: any, name: string): TRet;
declare function named_value_set_value(nv: any, value: any): TRet;
declare function named_value_get_value(nv: any): any;
declare function named_value_destroy(nv: any): TRet;
declare function named_value_t_get_prop_name(nativeObj: any): string;
declare function MIME_TYPE_APPLICATION_ENVOY();
declare function MIME_TYPE_APPLICATION_FRACTALS();
declare function MIME_TYPE_APPLICATION_FUTURESPLASH();
declare function MIME_TYPE_APPLICATION_HTA();
declare function MIME_TYPE_APPLICATION_JSON();
declare function MIME_TYPE_APPLICATION_UBJSON();
declare function MIME_TYPE_APPLICATION_MAC_BINHEX40();
declare function MIME_TYPE_APPLICATION_MSWORD();
declare function MIME_TYPE_APPLICATION_OCTET_STREAM();
declare function MIME_TYPE_APPLICATION_ODA();
declare function MIME_TYPE_APPLICATION_OLESCRIPT();
declare function MIME_TYPE_APPLICATION_PDF();
declare function MIME_TYPE_APPLICATION_PICS_RULES();
declare function MIME_TYPE_APPLICATION_PKCS10();
declare function MIME_TYPE_APPLICATION_PKIX_CRL();
declare function MIME_TYPE_APPLICATION_POSTSCRIPT();
declare function MIME_TYPE_APPLICATION_RTF();
declare function MIME_TYPE_APPLICATION_VND_MS_EXCEL();
declare function MIME_TYPE_APPLICATION_VND_MS_OUTLOOK();
declare function MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE();
declare function MIME_TYPE_APPLICATION_VND_MS_PKISECCAT();
declare function MIME_TYPE_APPLICATION_VND_MS_PKISTL();
declare function MIME_TYPE_APPLICATION_VND_MS_POWERPOINT();
declare function MIME_TYPE_APPLICATION_VND_MS_PROJECT();
declare function MIME_TYPE_APPLICATION_VND_MS_WORKS();
declare function MIME_TYPE_APPLICATION_WINHLP();
declare function MIME_TYPE_APPLICATION_X_BCPIO();
declare function MIME_TYPE_APPLICATION_X_CDF();
declare function MIME_TYPE_APPLICATION_X_COMPRESS();
declare function MIME_TYPE_APPLICATION_X_COMPRESSED();
declare function MIME_TYPE_APPLICATION_X_CPIO();
declare function MIME_TYPE_APPLICATION_X_CSH();
declare function MIME_TYPE_APPLICATION_X_DIRECTOR();
declare function MIME_TYPE_APPLICATION_X_DVI();
declare function MIME_TYPE_APPLICATION_X_GTAR();
declare function MIME_TYPE_APPLICATION_X_GZIP();
declare function MIME_TYPE_APPLICATION_X_HDF();
declare function MIME_TYPE_APPLICATION_X_IPHONE();
declare function MIME_TYPE_APPLICATION_X_JAVASCRIPT();
declare function MIME_TYPE_APPLICATION_X_LATEX();
declare function MIME_TYPE_APPLICATION_X_MSACCESS();
declare function MIME_TYPE_APPLICATION_X_MSCARDFILE();
declare function MIME_TYPE_APPLICATION_X_MSCLIP();
declare function MIME_TYPE_APPLICATION_X_MSDOWNLOAD();
declare function MIME_TYPE_APPLICATION_X_MSMEDIAVIEW();
declare function MIME_TYPE_APPLICATION_X_MSMETAFILE();
declare function MIME_TYPE_APPLICATION_X_MSMONEY();
declare function MIME_TYPE_APPLICATION_X_MSPUBLISHER();
declare function MIME_TYPE_APPLICATION_X_MSSCHEDULE();
declare function MIME_TYPE_APPLICATION_X_MSTERMINAL();
declare function MIME_TYPE_APPLICATION_X_MSWRITE();
declare function MIME_TYPE_APPLICATION_X_NETCDF();
declare function MIME_TYPE_APPLICATION_X_PERFMON();
declare function MIME_TYPE_APPLICATION_X_PKCS12();
declare function MIME_TYPE_APPLICATION_X_SH();
declare function MIME_TYPE_APPLICATION_X_SHAR();
declare function MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH();
declare function MIME_TYPE_APPLICATION_X_STUFFIT();
declare function MIME_TYPE_APPLICATION_X_SV4CPIO();
declare function MIME_TYPE_APPLICATION_X_SV4CRC();
declare function MIME_TYPE_APPLICATION_X_TAR();
declare function MIME_TYPE_APPLICATION_X_TCL();
declare function MIME_TYPE_APPLICATION_X_TEX();
declare function MIME_TYPE_APPLICATION_X_TEXINFO();
declare function MIME_TYPE_APPLICATION_X_TROFF();
declare function MIME_TYPE_APPLICATION_X_USTAR();
declare function MIME_TYPE_APPLICATION_ZIP();
declare function MIME_TYPE_AUDIO_BASIC();
declare function MIME_TYPE_AUDIO_MID();
declare function MIME_TYPE_AUDIO_MPEG();
declare function MIME_TYPE_AUDIO_X_AIFF();
declare function MIME_TYPE_AUDIO_X_MPEGURL();
declare function MIME_TYPE_AUDIO_X_WAV();
declare function MIME_TYPE_IMAGE_BMP();
declare function MIME_TYPE_IMAGE_CIS_COD();
declare function MIME_TYPE_IMAGE_GIF();
declare function MIME_TYPE_IMAGE_IEF();
declare function MIME_TYPE_IMAGE_JPEG();
declare function MIME_TYPE_IMAGE_PIPEG();
declare function MIME_TYPE_IMAGE_SVG_XML();
declare function MIME_TYPE_IMAGE_TIFF();
declare function MIME_TYPE_IMAGE_X_CMX();
declare function MIME_TYPE_IMAGE_X_ICON();
declare function MIME_TYPE_IMAGE_X_RGB();
declare function MIME_TYPE_IMAGE_X_XBITMAP();
declare function MIME_TYPE_IMAGE_X_XPIXMAP();
declare function MIME_TYPE_IMAGE_X_XWINDOWDUMP();
declare function MIME_TYPE_MESSAGE_RFC822();
declare function MIME_TYPE_TEXT_CSS();
declare function MIME_TYPE_TEXT_H323();
declare function MIME_TYPE_TEXT_HTML();
declare function MIME_TYPE_TEXT_IULS();
declare function MIME_TYPE_TEXT_PLAIN();
declare function MIME_TYPE_TEXT_RICHTEXT();
declare function MIME_TYPE_TEXT_SCRIPTLET();
declare function MIME_TYPE_TEXT_WEBVIEWHTML();
declare function MIME_TYPE_TEXT_X_COMPONENT();
declare function MIME_TYPE_TEXT_X_SETEXT();
declare function MIME_TYPE_TEXT_X_VCARD();
declare function MIME_TYPE_VIDEO_MPEG();
declare function MIME_TYPE_VIDEO_QUICKTIME();
declare function MIME_TYPE_VIDEO_X_MSVIDEO();
declare function INDICATOR_DEFAULT_PAINT_AUTO();
declare function INDICATOR_DEFAULT_PAINT_FILL_DOT();
declare function INDICATOR_DEFAULT_PAINT_STROKE_DOT();
declare function INDICATOR_DEFAULT_PAINT_FILL_RECT();
declare function INDICATOR_DEFAULT_PAINT_STROKE_RECT();
declare function CLIP_BOARD_DATA_TYPE_NONE();
declare function CLIP_BOARD_DATA_TYPE_TEXT();
declare function clip_board_set_text(text: string): TRet;
declare function clip_board_get_text(): string;
declare function EASING_LINEAR();
declare function EASING_QUADRATIC_IN();
declare function EASING_QUADRATIC_OUT();
declare function EASING_QUADRATIC_INOUT();
declare function EASING_CUBIC_IN();
declare function EASING_CUBIC_OUT();
declare function EASING_SIN_IN();
declare function EASING_SIN_OUT();
declare function EASING_SIN_INOUT();
declare function EASING_POW_IN();
declare function EASING_POW_OUT();
declare function EASING_POW_INOUT();
declare function EASING_CIRCULAR_IN();
declare function EASING_CIRCULAR_OUT();
declare function EASING_CIRCULAR_INOUT();
declare function EASING_ELASTIC_IN();
declare function EASING_ELASTIC_OUT();
declare function EASING_ELASTIC_INOUT();
declare function EASING_BACK_IN();
declare function EASING_BACK_OUT();
declare function EASING_BACK_INOUT();
declare function EASING_BOUNCE_IN();
declare function EASING_BOUNCE_OUT();
declare function EASING_BOUNCE_INOUT();
declare function date_time_create(): any;
declare function date_time_set(dt: any): TRet;
declare function date_time_destroy(dt: any): TRet;
declare function date_time_t_get_prop_second(nativeObj: any): number;
declare function date_time_t_get_prop_minute(nativeObj: any): number;
declare function date_time_t_get_prop_hour(nativeObj: any): number;
declare function date_time_t_get_prop_day(nativeObj: any): number;
declare function date_time_t_get_prop_wday(nativeObj: any): number;
declare function date_time_t_get_prop_month(nativeObj: any): number;
declare function date_time_t_get_prop_year(nativeObj: any): number;
declare function color_create(r: number, b: number, g: number, a: number): any;
declare function color_from_str(c: any, str: string): any;
declare function color_r(c: any): number;
declare function color_g(c: any): number;
declare function color_b(c: any): number;
declare function color_a(c: any): number;
declare function color_cast(color: any): any;
declare function color_destroy(c: any): TRet;
declare function color_t_get_prop_color(nativeObj: any): number;
declare function color_t_set_prop_color(nativeObj: any, v: number)
declare function asset_info_t_get_prop_type(nativeObj: any): number;
declare function asset_info_t_get_prop_subtype(nativeObj: any): number;
declare function asset_info_t_get_prop_is_in_rom(nativeObj: any): number;
declare function asset_info_t_get_prop_size(nativeObj: any): number;
declare function asset_info_t_get_prop_refcount(nativeObj: any): number;
declare function asset_info_t_get_prop_name(nativeObj: any): string;
declare function ASSET_TYPE_NONE();
declare function ASSET_TYPE_FONT();
declare function ASSET_TYPE_IMAGE();
declare function ASSET_TYPE_STYLE();
declare function ASSET_TYPE_UI();
declare function ASSET_TYPE_XML();
declare function ASSET_TYPE_STRINGS();
declare function ASSET_TYPE_SCRIPT();
declare function ASSET_TYPE_DATA();
declare function assets_manager(): any;
declare function assets_manager_ref(am: any, type: TAssetType, name: string): any;
declare function assets_manager_unref(am: any, info: any): TRet;
declare function canvas_widget_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function canvas_widget_cast(widget: any): any;
declare function time_clock_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function time_clock_cast(widget: any): any;
declare function time_clock_set_hour(widget: any, hour: number): TRet;
declare function time_clock_set_minute(widget: any, minute: number): TRet;
declare function time_clock_set_second(widget: any, second: number): TRet;
declare function time_clock_set_hour_image(widget: any, hour: string): TRet;
declare function time_clock_set_minute_image(widget: any, minute_image: string): TRet;
declare function time_clock_set_second_image(widget: any, second_image: string): TRet;
declare function time_clock_set_bg_image(widget: any, bg_image: string): TRet;
declare function time_clock_set_image(widget: any, image: string): TRet;
declare function time_clock_set_hour_anchor(widget: any, anchor_x: string, anchor_y: string): TRet;
declare function time_clock_set_minute_anchor(widget: any, anchor_x: string, anchor_y: string): TRet;
declare function time_clock_set_second_anchor(widget: any, anchor_x: string, anchor_y: string): TRet;
declare function time_clock_t_get_prop_hour(nativeObj: any): number;
declare function time_clock_t_get_prop_minute(nativeObj: any): number;
declare function time_clock_t_get_prop_second(nativeObj: any): number;
declare function time_clock_t_get_prop_image(nativeObj: any): string;
declare function time_clock_t_get_prop_bg_image(nativeObj: any): string;
declare function time_clock_t_get_prop_hour_image(nativeObj: any): string;
declare function time_clock_t_get_prop_minute_image(nativeObj: any): string;
declare function time_clock_t_get_prop_second_image(nativeObj: any): string;
declare function time_clock_t_get_prop_hour_anchor_x(nativeObj: any): string;
declare function time_clock_t_get_prop_hour_anchor_y(nativeObj: any): string;
declare function time_clock_t_get_prop_minute_anchor_x(nativeObj: any): string;
declare function time_clock_t_get_prop_minute_anchor_y(nativeObj: any): string;
declare function time_clock_t_get_prop_second_anchor_x(nativeObj: any): string;
declare function time_clock_t_get_prop_second_anchor_y(nativeObj: any): string;
declare function text_selector_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function text_selector_cast(widget: any): any;
declare function text_selector_reset_options(widget: any): TRet;
declare function text_selector_count_options(widget: any): number;
declare function text_selector_append_option(widget: any, value: any, text: string): TRet;
declare function text_selector_set_options(widget: any, options: string): TRet;
declare function text_selector_set_range_options(widget: any, start: number, nr: number, step: number): TRet;
declare function text_selector_get_value(widget: any): number;
declare function text_selector_set_value(widget: any, value: any): TRet;
declare function text_selector_get_text(widget: any): string;
declare function text_selector_set_text(widget: any, text: string): TRet;
declare function text_selector_set_selected_index(widget: any, index: number): TRet;
declare function text_selector_set_visible_nr(widget: any, visible_nr: number): TRet;
declare function text_selector_t_get_prop_visible_nr(nativeObj: any): number;
declare function text_selector_t_get_prop_selected_index(nativeObj: any): number;
declare function text_selector_t_get_prop_options(nativeObj: any): string;
declare function prop_change_event_cast(event: any): any;
declare function prop_change_event_t_get_prop_name(nativeObj: any): string;
declare function prop_change_event_t_get_prop_value(nativeObj: any): any;
declare function progress_event_cast(event: any): any;
declare function progress_event_t_get_prop_percent(nativeObj: any): number;
declare function switch_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function switch_set_value(widget: any, value: any): TRet;
declare function switch_cast(widget: any): any;
declare function switch_t_get_prop_value(nativeObj: any): boolean;
declare function switch_t_get_prop_max_xoffset_ratio(nativeObj: any): number;
declare function slide_view_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function slide_view_cast(widget: any): any;
declare function slide_view_set_auto_play(widget: any, auto_play: number): TRet;
declare function slide_view_set_active(widget: any, index: number): TRet;
declare function slide_view_set_vertical(widget: any, vertical: boolean): TRet;
declare function slide_view_set_anim_hint(widget: any, anim_hint: string): TRet;
declare function slide_view_set_loop(widget: any, loop: boolean): TRet;
declare function slide_view_t_get_prop_vertical(nativeObj: any): boolean;
declare function slide_view_t_get_prop_auto_play(nativeObj: any): number;
declare function slide_view_t_get_prop_loop(nativeObj: any): boolean;
declare function slide_view_t_get_prop_anim_hint(nativeObj: any): string;
declare function slide_indicator_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function slide_indicator_create_linear(parent: any, x: number, y: number, w: number, h: number): any;
declare function slide_indicator_create_arc(parent: any, x: number, y: number, w: number, h: number): any;
declare function slide_indicator_cast(widget: any): any;
declare function slide_indicator_set_value(widget: any, value: any): TRet;
declare function slide_indicator_set_max(widget: any, max: number): TRet;
declare function slide_indicator_set_default_paint(widget: any, default_paint: TIndicatorDefaultPaint): TRet;
declare function slide_indicator_set_auto_hide(widget: any, auto_hide: number): TRet;
declare function slide_indicator_set_margin(widget: any, margin: number): TRet;
declare function slide_indicator_set_spacing(widget: any, spacing: number): TRet;
declare function slide_indicator_set_size(widget: any, size: number): TRet;
declare function slide_indicator_set_anchor(widget: any, anchor_x: string, anchor_y: string): TRet;
declare function slide_indicator_set_indicated_target(widget: any, indicated_target: string): TRet;
declare function slide_indicator_t_get_prop_value(nativeObj: any): number;
declare function slide_indicator_t_get_prop_max(nativeObj: any): number;
declare function slide_indicator_t_get_prop_default_paint(nativeObj: any): TIndicatorDefaultPaint;
declare function slide_indicator_t_get_prop_auto_hide(nativeObj: any): number;
declare function slide_indicator_t_get_prop_margin(nativeObj: any): number;
declare function slide_indicator_t_get_prop_spacing(nativeObj: any): number;
declare function slide_indicator_t_get_prop_size(nativeObj: any): number;
declare function slide_indicator_t_get_prop_anchor_x(nativeObj: any): number;
declare function slide_indicator_t_get_prop_anchor_y(nativeObj: any): number;
declare function slide_indicator_t_get_prop_indicated_target(nativeObj: any): string;
declare function slide_menu_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function slide_menu_cast(widget: any): any;
declare function slide_menu_set_value(widget: any, value: any): TRet;
declare function slide_menu_set_align_v(widget: any, align_v: TAlignV): TRet;
declare function slide_menu_set_min_scale(widget: any, min_scale: number): TRet;
declare function slide_menu_t_get_prop_value(nativeObj: any): number;
declare function slide_menu_t_get_prop_align_v(nativeObj: any): TAlignV;
declare function slide_menu_t_get_prop_min_scale(nativeObj: any): number;
declare function scroll_view_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function scroll_view_cast(widget: any): any;
declare function scroll_view_set_virtual_w(widget: any, w: number): TRet;
declare function scroll_view_set_virtual_h(widget: any, h: number): TRet;
declare function scroll_view_set_xslidable(widget: any, xslidable: boolean): TRet;
declare function scroll_view_set_yslidable(widget: any, yslidable: boolean): TRet;
declare function scroll_view_set_offset(widget: any, xoffset: number, yoffset: number): TRet;
declare function scroll_view_set_speed_scale(widget: any, xspeed_scale: number, yspeed_scale: number): TRet;
declare function scroll_view_scroll_to(widget: any, xoffset_end: number, yoffset_end: number, duration: number): TRet;
declare function scroll_view_scroll_delta_to(widget: any, xoffset_delta: number, yoffset_delta: number, duration: number): TRet;
declare function scroll_view_t_get_prop_virtual_w(nativeObj: any): number;
declare function scroll_view_t_get_prop_virtual_h(nativeObj: any): number;
declare function scroll_view_t_get_prop_xoffset(nativeObj: any): number;
declare function scroll_view_t_get_prop_yoffset(nativeObj: any): number;
declare function scroll_view_t_get_prop_xspeed_scale(nativeObj: any): number;
declare function scroll_view_t_get_prop_yspeed_scale(nativeObj: any): number;
declare function scroll_view_t_get_prop_xslidable(nativeObj: any): boolean;
declare function scroll_view_t_get_prop_yslidable(nativeObj: any): boolean;
declare function scroll_bar_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function scroll_bar_cast(widget: any): any;
declare function scroll_bar_create_mobile(parent: any, x: number, y: number, w: number, h: number): any;
declare function scroll_bar_create_desktop(parent: any, x: number, y: number, w: number, h: number): any;
declare function scroll_bar_set_params(widget: any, virtual_size: number, row: number): TRet;
declare function scroll_bar_scroll_to(widget: any, value: any, duration: number): TRet;
declare function scroll_bar_set_value(widget: any, value: any): TRet;
declare function scroll_bar_add_delta(widget: any, delta: number): TRet;
declare function scroll_bar_scroll_delta(widget: any, delta: number): TRet;
declare function scroll_bar_set_value_only(widget: any, value: any): TRet;
declare function scroll_bar_is_mobile(widget: any): boolean;
declare function scroll_bar_t_get_prop_virtual_size(nativeObj: any): number;
declare function scroll_bar_t_get_prop_value(nativeObj: any): number;
declare function scroll_bar_t_get_prop_row(nativeObj: any): number;
declare function scroll_bar_t_get_prop_animatable(nativeObj: any): boolean;
declare function list_view_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function list_view_set_item_height(widget: any, item_height: number): TRet;
declare function list_view_set_default_item_height(widget: any, default_item_height: number): TRet;
declare function list_view_set_auto_hide_scroll_bar(widget: any, auto_hide_scroll_bar: boolean): TRet;
declare function list_view_cast(widget: any): any;
declare function list_view_t_get_prop_item_height(nativeObj: any): number;
declare function list_view_t_get_prop_default_item_height(nativeObj: any): number;
declare function list_view_t_get_prop_auto_hide_scroll_bar(nativeObj: any): boolean;
declare function list_view_h_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function list_view_h_set_item_width(widget: any, item_width: number): TRet;
declare function list_view_h_set_spacing(widget: any, spacing: number): TRet;
declare function list_view_h_cast(widget: any): any;
declare function list_view_h_t_get_prop_item_width(nativeObj: any): number;
declare function list_view_h_t_get_prop_spacing(nativeObj: any): number;
declare function list_item_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function list_item_cast(widget: any): any;
declare function hscroll_label_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function hscroll_label_set_lull(widget: any, lull: number): TRet;
declare function hscroll_label_set_duration(widget: any, duration: number): TRet;
declare function hscroll_label_set_only_focus(widget: any, only_focus: boolean): TRet;
declare function hscroll_label_set_only_parent_focus(widget: any, only_parent_focus: boolean): TRet;
declare function hscroll_label_set_loop(widget: any, loop: boolean): TRet;
declare function hscroll_label_set_yoyo(widget: any, yoyo: boolean): TRet;
declare function hscroll_label_set_ellipses(widget: any, ellipses: boolean): TRet;
declare function hscroll_label_set_xoffset(widget: any, xoffset: number): TRet;
declare function hscroll_label_start(widget: any): TRet;
declare function hscroll_label_stop(widget: any): TRet;
declare function hscroll_label_cast(widget: any): any;
declare function hscroll_label_t_get_prop_only_focus(nativeObj: any): boolean;
declare function hscroll_label_t_get_prop_only_parent_focus(nativeObj: any): boolean;
declare function hscroll_label_t_get_prop_loop(nativeObj: any): boolean;
declare function hscroll_label_t_get_prop_yoyo(nativeObj: any): boolean;
declare function hscroll_label_t_get_prop_ellipses(nativeObj: any): boolean;
declare function hscroll_label_t_get_prop_lull(nativeObj: any): number;
declare function hscroll_label_t_get_prop_duration(nativeObj: any): number;
declare function hscroll_label_t_get_prop_xoffset(nativeObj: any): number;
declare function hscroll_label_t_get_prop_text_w(nativeObj: any): number;
declare function rich_text_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function rich_text_set_text(widget: any, text: string): TRet;
declare function rich_text_cast(widget: any): any;
declare function rich_text_t_get_prop_line_gap(nativeObj: any): number;
declare function rich_text_t_get_prop_margin(nativeObj: any): number;
declare function progress_circle_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function progress_circle_cast(widget: any): any;
declare function progress_circle_set_value(widget: any, value: any): TRet;
declare function progress_circle_set_max(widget: any, max: number): TRet;
declare function progress_circle_set_line_width(widget: any, line_width: number): TRet;
declare function progress_circle_set_start_angle(widget: any, start_angle: number): TRet;
declare function progress_circle_set_unit(widget: any, unit: string): TRet;
declare function progress_circle_set_show_text(widget: any, show_text: boolean): TRet;
declare function progress_circle_set_counter_clock_wise(widget: any, counter_clock_wise: boolean): TRet;
declare function progress_circle_t_get_prop_value(nativeObj: any): number;
declare function progress_circle_t_get_prop_max(nativeObj: any): number;
declare function progress_circle_t_get_prop_start_angle(nativeObj: any): number;
declare function progress_circle_t_get_prop_line_width(nativeObj: any): number;
declare function progress_circle_t_get_prop_unit(nativeObj: any): string;
declare function progress_circle_t_get_prop_counter_clock_wise(nativeObj: any): boolean;
declare function progress_circle_t_get_prop_show_text(nativeObj: any): boolean;
declare function mledit_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function mledit_set_readonly(widget: any, readonly: boolean): TRet;
declare function mledit_set_focus(widget: any, focus: boolean): TRet;
declare function mledit_set_wrap_word(widget: any, wrap_word: boolean): TRet;
declare function mledit_set_max_lines(widget: any, max_lines: number): TRet;
declare function mledit_set_input_tips(widget: any, tips: string): TRet;
declare function mledit_set_cursor(widget: any, cursor: number): TRet;
declare function mledit_set_scroll_line(widget: any, scroll_line: number): TRet;
declare function mledit_cast(widget: any): any;
declare function mledit_t_get_prop_readonly(nativeObj: any): boolean;
declare function mledit_t_get_prop_tips(nativeObj: any): string;
declare function mledit_t_get_prop_wrap_word(nativeObj: any): boolean;
declare function mledit_t_get_prop_max_lines(nativeObj: any): number;
declare function mledit_t_get_prop_scroll_line(nativeObj: any): number;
declare function line_number_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function line_number_set_top_margin(widget: any, top_margin: number): TRet;
declare function line_number_set_bottom_margin(widget: any, bottom_margin: number): TRet;
declare function line_number_set_line_height(widget: any, line_height: number): TRet;
declare function line_number_set_yoffset(widget: any, yoffset: number): TRet;
declare function line_number_cast(widget: any): any;
declare function image_value_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function image_value_set_image(widget: any, image: string): TRet;
declare function image_value_set_format(widget: any, format: string): TRet;
declare function image_value_set_value(widget: any, value: any): TRet;
declare function image_value_cast(widget: any): any;
declare function image_value_t_get_prop_image(nativeObj: any): string;
declare function image_value_t_get_prop_format(nativeObj: any): string;
declare function image_value_t_get_prop_value(nativeObj: any): number;
declare function image_animation_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function image_animation_set_loop(widget: any, loop: boolean): TRet;
declare function image_animation_set_image(widget: any, image: string): TRet;
declare function image_animation_set_interval(widget: any, interval: number): TRet;
declare function image_animation_set_delay(widget: any, delay: number): TRet;
declare function image_animation_set_auto_play(widget: any, auto_play: boolean): TRet;
declare function image_animation_set_sequence(widget: any, sequence: string): TRet;
declare function image_animation_set_range_sequence(widget: any, start_index: number, end_index: number): TRet;
declare function image_animation_play(widget: any): TRet;
declare function image_animation_stop(widget: any): TRet;
declare function image_animation_pause(widget: any): TRet;
declare function image_animation_next(widget: any): TRet;
declare function image_animation_set_format(widget: any, format: string): TRet;
declare function image_animation_set_unload_after_paint(widget: any, unload_after_paint: boolean): TRet;
declare function image_animation_cast(widget: any): any;
declare function image_animation_t_get_prop_image(nativeObj: any): string;
declare function image_animation_t_get_prop_sequence(nativeObj: any): string;
declare function image_animation_t_get_prop_start_index(nativeObj: any): number;
declare function image_animation_t_get_prop_end_index(nativeObj: any): number;
declare function image_animation_t_get_prop_loop(nativeObj: any): boolean;
declare function image_animation_t_get_prop_auto_play(nativeObj: any): boolean;
declare function image_animation_t_get_prop_unload_after_paint(nativeObj: any): boolean;
declare function image_animation_t_get_prop_format(nativeObj: any): string;
declare function image_animation_t_get_prop_interval(nativeObj: any): number;
declare function image_animation_t_get_prop_delay(nativeObj: any): number;
declare function guage_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function guage_cast(widget: any): any;
declare function guage_set_image(widget: any, name: string): TRet;
declare function guage_set_draw_type(widget: any, draw_type: TImageDrawType): TRet;
declare function guage_t_get_prop_image(nativeObj: any): string;
declare function guage_t_get_prop_draw_type(nativeObj: any): TImageDrawType;
declare function guage_pointer_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function guage_pointer_cast(widget: any): any;
declare function guage_pointer_set_angle(widget: any, angle: number): TRet;
declare function guage_pointer_set_image(widget: any, image: string): TRet;
declare function guage_pointer_set_anchor(widget: any, anchor_x: string, anchor_y: string): TRet;
declare function guage_pointer_t_get_prop_angle(nativeObj: any): number;
declare function guage_pointer_t_get_prop_image(nativeObj: any): string;
declare function guage_pointer_t_get_prop_anchor_x(nativeObj: any): number;
declare function guage_pointer_t_get_prop_anchor_y(nativeObj: any): number;
declare function draggable_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function draggable_cast(widget: any): any;
declare function draggable_set_top(widget: any, top: number): TRet;
declare function draggable_set_bottom(widget: any, bottom: number): TRet;
declare function draggable_set_left(widget: any, left: number): TRet;
declare function draggable_set_right(widget: any, right: number): TRet;
declare function draggable_set_vertical_only(widget: any, vertical_only: boolean): TRet;
declare function draggable_set_horizontal_only(widget: any, horizontal_only: boolean): TRet;
declare function draggable_set_drag_window(widget: any, drag_window: boolean): TRet;
declare function draggable_t_get_prop_top(nativeObj: any): number;
declare function draggable_t_get_prop_bottom(nativeObj: any): number;
declare function draggable_t_get_prop_left(nativeObj: any): number;
declare function draggable_t_get_prop_right(nativeObj: any): number;
declare function draggable_t_get_prop_vertical_only(nativeObj: any): boolean;
declare function draggable_t_get_prop_horizontal_only(nativeObj: any): boolean;
declare function draggable_t_get_prop_drag_window(nativeObj: any): boolean;
declare function color_picker_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function color_picker_set_color(widget: any, color: string): TRet;
declare function color_picker_cast(widget: any): any;
declare function color_picker_t_get_prop_value(nativeObj: any): string;
declare function color_component_cast(widget: any): any;
declare function window_manager(): any;
declare function window_manager_cast(widget: any): any;
declare function window_manager_get_top_main_window(widget: any): any;
declare function window_manager_get_top_window(widget: any): any;
declare function window_manager_get_prev_window(widget: any): any;
declare function window_manager_get_pointer_x(widget: any): number;
declare function window_manager_get_pointer_y(widget: any): number;
declare function window_manager_get_pointer_pressed(widget: any): boolean;
declare function window_manager_set_show_fps(widget: any, show_fps: boolean): TRet;
declare function window_manager_set_screen_saver_time(widget: any, screen_saver_time: number): TRet;
declare function window_manager_set_cursor(widget: any, cursor: string): TRet;
declare function window_manager_back(widget: any): TRet;
declare function window_manager_back_to_home(widget: any): TRet;
declare function window_manager_back_to(widget: any, target: string): TRet;
declare function window_base_cast(widget: any): any;
declare function window_base_t_get_prop_theme(nativeObj: any): string;
declare function window_base_t_get_prop_closable(nativeObj: any): TWindowClosable;
declare function style_mutable_set_name(s: any, name: string): TRet;
declare function style_mutable_set_int(s: any, state: string, name: string, val: number): TRet;
declare function style_mutable_cast(s: any): any;
declare function style_mutable_create(widget: any, default_style: any): any;
declare function style_mutable_t_get_prop_name(nativeObj: any): string;
declare function image_base_set_image(widget: any, name: string): TRet;
declare function image_base_set_rotation(widget: any, rotation: number): TRet;
declare function image_base_set_scale(widget: any, scale_x: number, scale_y: number): TRet;
declare function image_base_set_anchor(widget: any, anchor_x: number, anchor_y: number): TRet;
declare function image_base_set_selected(widget: any, selected: boolean): TRet;
declare function image_base_set_selectable(widget: any, selectable: boolean): TRet;
declare function image_base_set_clickable(widget: any, clickable: boolean): TRet;
declare function image_base_cast(widget: any): any;
declare function image_base_t_get_prop_image(nativeObj: any): string;
declare function image_base_t_get_prop_anchor_x(nativeObj: any): number;
declare function image_base_t_get_prop_anchor_y(nativeObj: any): number;
declare function image_base_t_get_prop_scale_x(nativeObj: any): number;
declare function image_base_t_get_prop_scale_y(nativeObj: any): number;
declare function image_base_t_get_prop_rotation(nativeObj: any): number;
declare function image_base_t_get_prop_clickable(nativeObj: any): boolean;
declare function image_base_t_get_prop_selectable(nativeObj: any): boolean;
declare function image_base_t_get_prop_selected(nativeObj: any): boolean;
declare function window_event_cast(event: any): any;
declare function window_event_t_get_prop_window(nativeObj: any): any;
declare function paint_event_cast(event: any): any;
declare function paint_event_t_get_prop_c(nativeObj: any): any;
declare function key_event_cast(event: any): any;
declare function key_event_t_get_prop_key(nativeObj: any): number;
declare function key_event_t_get_prop_alt(nativeObj: any): boolean;
declare function key_event_t_get_prop_lalt(nativeObj: any): boolean;
declare function key_event_t_get_prop_ralt(nativeObj: any): boolean;
declare function key_event_t_get_prop_ctrl(nativeObj: any): boolean;
declare function key_event_t_get_prop_lctrl(nativeObj: any): boolean;
declare function key_event_t_get_prop_rctrl(nativeObj: any): boolean;
declare function key_event_t_get_prop_shift(nativeObj: any): boolean;
declare function key_event_t_get_prop_lshift(nativeObj: any): boolean;
declare function key_event_t_get_prop_rshift(nativeObj: any): boolean;
declare function key_event_t_get_prop_cmd(nativeObj: any): boolean;
declare function key_event_t_get_prop_menu(nativeObj: any): boolean;
declare function key_event_t_get_prop_capslock(nativeObj: any): boolean;
declare function pointer_event_cast(event: any): any;
declare function pointer_event_t_get_prop_x(nativeObj: any): number;
declare function pointer_event_t_get_prop_y(nativeObj: any): number;
declare function pointer_event_t_get_prop_button(nativeObj: any): number;
declare function pointer_event_t_get_prop_pressed(nativeObj: any): boolean;
declare function pointer_event_t_get_prop_alt(nativeObj: any): boolean;
declare function pointer_event_t_get_prop_ctrl(nativeObj: any): boolean;
declare function pointer_event_t_get_prop_cmd(nativeObj: any): boolean;
declare function pointer_event_t_get_prop_menu(nativeObj: any): boolean;
declare function pointer_event_t_get_prop_shift(nativeObj: any): boolean;
declare function orientation_event_cast(event: any): any;
declare function orientation_event_t_get_prop_orientation(nativeObj: any): number;
declare function wheel_event_cast(event: any): any;
declare function wheel_event_t_get_prop_dy(nativeObj: any): number;
declare function wheel_event_t_get_prop_alt(nativeObj: any): boolean;
declare function wheel_event_t_get_prop_ctrl(nativeObj: any): boolean;
declare function wheel_event_t_get_prop_shift(nativeObj: any): boolean;
declare function app_bar_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function app_bar_cast(widget: any): any;
declare function button_group_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function button_group_cast(widget: any): any;
declare function button_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function button_cast(widget: any): any;
declare function button_set_repeat(widget: any, repeat: number): TRet;
declare function button_set_enable_long_press(widget: any, enable_long_press: boolean): TRet;
declare function button_t_get_prop_repeat(nativeObj: any): number;
declare function button_t_get_prop_enable_long_press(nativeObj: any): boolean;
declare function check_button_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function check_button_create_radio(parent: any, x: number, y: number, w: number, h: number): any;
declare function check_button_set_value(widget: any, value: any): TRet;
declare function check_button_cast(widget: any): any;
declare function check_button_t_get_prop_value(nativeObj: any): boolean;
declare function clip_view_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function clip_view_cast(widget: any): any;
declare function color_tile_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function color_tile_cast(widget: any): any;
declare function color_tile_set_bg_color(widget: any, color: string): TRet;
declare function color_tile_t_get_prop_bg_color(nativeObj: any): string;
declare function color_tile_t_get_prop_border_color(nativeObj: any): string;
declare function column_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function column_cast(widget: any): any;
declare function combo_box_item_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function combo_box_item_cast(widget: any): any;
declare function combo_box_item_set_checked(widget: any, checked: boolean): TRet;
declare function combo_box_item_set_value(widget: any, value: any): TRet;
declare function combo_box_item_t_get_prop_value(nativeObj: any): number;
declare function combo_box_item_t_get_prop_checked(nativeObj: any): boolean;
declare function combo_box_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function combo_box_cast(widget: any): any;
declare function combo_box_set_open_window(widget: any, open_window: string): TRet;
declare function combo_box_reset_options(widget: any): TRet;
declare function combo_box_count_options(widget: any): number;
declare function combo_box_set_selected_index(widget: any, index: number): TRet;
declare function combo_box_set_localize_options(widget: any, localize_options: boolean): TRet;
declare function combo_box_set_value(widget: any, value: any): TRet;
declare function combo_box_set_item_height(widget: any, item_height: number): TRet;
declare function combo_box_append_option(widget: any, value: any, text: string): TRet;
declare function combo_box_set_options(widget: any, options: string): TRet;
declare function combo_box_get_value(widget: any): number;
declare function combo_box_get_text(widget: any): string;
declare function combo_box_t_get_prop_open_window(nativeObj: any): string;
declare function combo_box_t_get_prop_selected_index(nativeObj: any): number;
declare function combo_box_t_get_prop_value(nativeObj: any): number;
declare function combo_box_t_get_prop_localize_options(nativeObj: any): boolean;
declare function combo_box_t_get_prop_options(nativeObj: any): string;
declare function combo_box_t_get_prop_item_height(nativeObj: any): number;
declare function dialog_client_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function dialog_client_cast(widget: any): any;
declare function dialog_title_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function dialog_title_cast(widget: any): any;
declare function digit_clock_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function digit_clock_cast(widget: any): any;
declare function digit_clock_set_format(widget: any, format: string): TRet;
declare function digit_clock_t_get_prop_format(nativeObj: any): string;
declare function dragger_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function dragger_cast(widget: any): any;
declare function dragger_set_range(widget: any, x_min: number, y_min: number, x_max: number, y_max: number): TRet;
declare function dragger_t_get_prop_x_min(nativeObj: any): number;
declare function dragger_t_get_prop_y_min(nativeObj: any): number;
declare function dragger_t_get_prop_x_max(nativeObj: any): number;
declare function dragger_t_get_prop_y_max(nativeObj: any): number;
declare function edit_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function edit_cast(widget: any): any;
declare function edit_get_int(widget: any): number;
declare function edit_get_double(widget: any): number;
declare function edit_set_int(widget: any, value: any): TRet;
declare function edit_set_double(widget: any, value: any): TRet;
declare function edit_set_text_limit(widget: any, min: number, max: number): TRet;
declare function edit_set_int_limit(widget: any, min: number, max: number, step: number): TRet;
declare function edit_set_float_limit(widget: any, min: number, max: number, step: number): TRet;
declare function edit_set_readonly(widget: any, readonly: boolean): TRet;
declare function edit_set_auto_fix(widget: any, auto_fix: boolean): TRet;
declare function edit_set_select_none_when_focused(widget: any, select_none_when_focused: boolean): TRet;
declare function edit_set_open_im_when_focused(widget: any, open_im_when_focused: boolean): TRet;
declare function edit_set_input_type(widget: any, type: TInputType): TRet;
declare function edit_set_input_tips(widget: any, tips: string): TRet;
declare function edit_set_password_visible(widget: any, password_visible: boolean): TRet;
declare function edit_set_focus(widget: any, focus: boolean): TRet;
declare function edit_set_cursor(widget: any, cursor: number): TRet;
declare function edit_t_get_prop_readonly(nativeObj: any): boolean;
declare function edit_t_get_prop_password_visible(nativeObj: any): boolean;
declare function edit_t_get_prop_auto_fix(nativeObj: any): boolean;
declare function edit_t_get_prop_select_none_when_focused(nativeObj: any): boolean;
declare function edit_t_get_prop_open_im_when_focused(nativeObj: any): boolean;
declare function edit_t_get_prop_tips(nativeObj: any): string;
declare function edit_t_get_prop_input_type(nativeObj: any): TInputType;
declare function edit_t_get_prop_min(nativeObj: any): number;
declare function edit_t_get_prop_max(nativeObj: any): number;
declare function edit_t_get_prop_step(nativeObj: any): number;
declare function grid_item_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function grid_item_cast(widget: any): any;
declare function grid_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function grid_cast(widget: any): any;
declare function group_box_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function group_box_cast(widget: any): any;
declare function label_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function label_set_length(widget: any, length: number): TRet;
declare function label_resize_to_content(widget: any, min_w: number, max_w: number, min_h: number, max_h: number): TRet;
declare function label_cast(widget: any): any;
declare function label_t_get_prop_length(nativeObj: any): number;
declare function overlay_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function overlay_cast(widget: any): any;
declare function pages_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function pages_cast(widget: any): any;
declare function pages_set_active(widget: any, index: number): TRet;
declare function pages_set_active_by_name(widget: any, name: string): TRet;
declare function pages_t_get_prop_active(nativeObj: any): number;
declare function progress_bar_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function progress_bar_cast(widget: any): any;
declare function progress_bar_set_value(widget: any, value: any): TRet;
declare function progress_bar_set_max(widget: any, max: number): TRet;
declare function progress_bar_set_vertical(widget: any, vertical: boolean): TRet;
declare function progress_bar_set_show_text(widget: any, show_text: boolean): TRet;
declare function progress_bar_get_percent(widget: any): number;
declare function progress_bar_t_get_prop_value(nativeObj: any): number;
declare function progress_bar_t_get_prop_max(nativeObj: any): number;
declare function progress_bar_t_get_prop_vertical(nativeObj: any): boolean;
declare function progress_bar_t_get_prop_show_text(nativeObj: any): boolean;
declare function row_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function row_cast(widget: any): any;
declare function slider_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function slider_cast(widget: any): any;
declare function slider_set_value(widget: any, value: any): TRet;
declare function slider_set_min(widget: any, min: number): TRet;
declare function slider_set_max(widget: any, max: number): TRet;
declare function slider_set_step(widget: any, step: number): TRet;
declare function slider_set_bar_size(widget: any, bar_size: number): TRet;
declare function slider_set_vertical(widget: any, vertical: boolean): TRet;
declare function slider_t_get_prop_value(nativeObj: any): number;
declare function slider_t_get_prop_min(nativeObj: any): number;
declare function slider_t_get_prop_max(nativeObj: any): number;
declare function slider_t_get_prop_step(nativeObj: any): number;
declare function slider_t_get_prop_vertical(nativeObj: any): boolean;
declare function slider_t_get_prop_bar_size(nativeObj: any): number;
declare function slider_t_get_prop_dragger_size(nativeObj: any): number;
declare function slider_t_get_prop_dragger_adapt_to_icon(nativeObj: any): boolean;
declare function slider_t_get_prop_slide_with_bar(nativeObj: any): boolean;
declare function tab_button_group_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function tab_button_group_set_compact(widget: any, compact: boolean): TRet;
declare function tab_button_group_set_scrollable(widget: any, scrollable: boolean): TRet;
declare function tab_button_group_cast(widget: any): any;
declare function tab_button_group_t_get_prop_compact(nativeObj: any): boolean;
declare function tab_button_group_t_get_prop_scrollable(nativeObj: any): boolean;
declare function tab_button_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function tab_button_cast(widget: any): any;
declare function tab_button_set_value(widget: any, value: any): TRet;
declare function tab_button_set_icon(widget: any, name: string): TRet;
declare function tab_button_set_active_icon(widget: any, name: string): TRet;
declare function tab_button_set_load_ui(widget: any, name: string): TRet;
declare function tab_button_t_get_prop_value(nativeObj: any): boolean;
declare function tab_button_t_get_prop_load_ui(nativeObj: any): string;
declare function tab_button_t_get_prop_active_icon(nativeObj: any): string;
declare function tab_button_t_get_prop_icon(nativeObj: any): string;
declare function tab_control_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function tab_control_cast(widget: any): any;
declare function view_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function view_cast(widget: any): any;
declare function idle_info_cast(idle: any): any;
declare function idle_info_t_get_prop_ctx(nativeObj: any): any;
declare function idle_info_t_get_prop_id(nativeObj: any): number;
declare function object_array_create(): any;
declare function object_array_unref(obj: any): TRet;
declare function object_array_clear_props(obj: any): TRet;
declare function object_array_t_get_prop_props_size(nativeObj: any): number;
declare function gif_image_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function gif_image_cast(widget: any): any;
declare function object_default_create(): any;
declare function object_default_unref(obj: any): TRet;
declare function object_default_clear_props(obj: any): TRet;
declare function object_default_t_get_prop_props_size(nativeObj: any): number;
declare function image_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function image_set_draw_type(widget: any, draw_type: TImageDrawType): TRet;
declare function image_cast(widget: any): any;
declare function image_t_get_prop_draw_type(nativeObj: any): TImageDrawType;
declare function combo_box_ex_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function calibration_win_cast(widget: any): any;
declare function popup_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function popup_cast(widget: any): any;
declare function popup_set_close_when_click(widget: any, close_when_click: boolean): TRet;
declare function popup_set_close_when_click_outside(widget: any, close_when_click_outside: boolean): TRet;
declare function popup_t_get_prop_close_when_click(nativeObj: any): boolean;
declare function popup_t_get_prop_close_when_click_outside(nativeObj: any): boolean;
declare function svg_image_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function svg_image_set_image(widget: any, name: string): TRet;
declare function svg_image_cast(widget: any): any;
declare function timer_info_cast(timer: any): any;
declare function timer_info_t_get_prop_ctx(nativeObj: any): any;
declare function timer_info_t_get_prop_id(nativeObj: any): number;
declare function timer_info_t_get_prop_now(nativeObj: any): number;
declare function spin_box_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function spin_box_cast(widget: any): any;
declare function system_bar_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function system_bar_cast(widget: any): any;
declare function window_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function window_create_default(): any;
declare function window_set_fullscreen(widget: any, fullscreen: boolean): TRet;
declare function window_open(name: string): any;
declare function window_open_and_close(name: string, to_close: any): any;
declare function window_close(widget: any): TRet;
declare function window_close_force(widget: any): TRet;
declare function window_cast(widget: any): any;
declare function window_t_get_prop_fullscreen(nativeObj: any): boolean;
declare function keyboard_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function keyboard_cast(widget: any): any;
declare function dialog_create(parent: any, x: number, y: number, w: number, h: number): any;
declare function dialog_create_simple(parent: any, x: number, y: number, w: number, h: number): any;
declare function dialog_cast(widget: any): any;
declare function dialog_get_title(widget: any): any;
declare function dialog_get_client(widget: any): any;
declare function dialog_open(name: string): any;
declare function dialog_set_title(widget: any, title: string): TRet;
declare function dialog_modal(widget: any): TDialogQuitCode;
declare function dialog_quit(widget: any, code: number): TRet;
declare function dialog_is_quited(widget: any): boolean;
declare function dialog_is_modal(widget: any): boolean;
declare function dialog_toast(text: string, duration: number): TRet;
declare function dialog_info(title: string, text: string): TRet;
declare function dialog_warn(title: string, text: string): TRet;
declare function dialog_confirm(title: string, text: string): TRet;
declare function dialog_t_get_prop_highlight(nativeObj: any): string;

/**
 * 事件基类。
 *
 */
class TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 转换为event对象。
   *
   *> 供脚本语言使用
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
  static cast(event: TEvent): TEvent {
    return new TEvent(event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * 创建event对象。
   *
   *主要给脚本语言使用。
   * 
   * @param type 事件类型。
   *
   * @returns 返回事件对象。
   */
  static create(type: number): TEvent {
    return new TEvent(event_create(type));
  }


  /**
   * 销毁事件对象。
   *
   *主要给脚本语言使用。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return event_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 类型。
   *
   */
  get type(): number {
    return event_t_get_prop_type(this.nativeObj);
  }


  /**
   * 事件发生的时间。
   *
   */
  get time(): number {
    return event_t_get_prop_time(this.nativeObj);
  }


  /**
   * 事件发生的目标对象。
   *
   */
  get target(): any {
    return event_t_get_prop_target(this.nativeObj);
  }

};
/**
 * 矩形。包括一个x坐标、y坐标、宽度和高度。
 *
 */
class TRect {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 创建rect对象。
   *
   *> 主要供脚本语言使用。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns rect对象。
   */
  static create(x: number, y: number, w: number, h: number): TRect {
    return new TRect(rect_create(x, y, w, h));
  }


  /**
   * 设置rect对象的xywh。
   *
   *> 主要供脚本语言使用。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns rect对象。
   */
  set(x: number, y: number, w: number, h: number): TRect {
    return new TRect(rect_set(this != null ? (this.nativeObj || this) : null, x, y, w, h));
  }


  /**
   * 转换为rect对象。
   *
   *> 供脚本语言使用。
   * 
   * @param rect rect对象。
   *
   * @returns rect对象。
   */
  static cast(rect: TRect): TRect {
    return new TRect(rect_cast(rect != null ? (rect.nativeObj || rect) : null));
  }


  /**
   * 销毁rect对象。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return rect_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * x坐标。
   *
   */
  get x(): number {
    return rect_t_get_prop_x(this.nativeObj);
  }


  /**
   * y坐标。
   *
   */
  get y(): number {
    return rect_t_get_prop_y(this.nativeObj);
  }


  /**
   * 宽度。
   *
   */
  get w(): number {
    return rect_t_get_prop_w(this.nativeObj);
  }


  /**
   * 高度。
   *
   */
  get h(): number {
    return rect_t_get_prop_h(this.nativeObj);
  }

};
/**
 * 点(浮点数)。包括一个x坐标和一个y坐标。
 *
 */
class TPointf {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }

};
/**
 * 点。包括一个x坐标和一个y坐标。
 *
 */
class TPoint {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }

};
/**
 * 事件分发器, 用于实现观察者模式。
 *
 */
class TEmitter {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 创建emitter对象。
   * 
   *
   * @returns 对象。
   */
  static create(): TEmitter {
    return new TEmitter(emitter_create());
  }


  /**
   * 分发事件。如果当前分发的回调函数返回RET_REMOVE，该回调函数将被移出。
   *禁用状态下，本函数不做任何事情。
   * 
   * @param e 事件对象。
   *
   * @returns 如果当前分发的回调函数返回RET_STOP，dispatch中断分发，并返回RET_STOP，否则返回RET_OK。
   */
  dispatch(e: TEvent): TRet {
    return emitter_dispatch(this != null ? (this.nativeObj || this) : null, e != null ? (e.nativeObj || e) : null);
  }


  /**
   * 分发事件。
   *> 对emitter_dispatch的包装，分发一个简单的事件。
   *如果当前分发的回调函数返回RET_STOP，dispatch中断分发，并返回RET_STOP，否则返回RET_OK。
   * 
   * @param type 事件类型。
   *
   * @returns 
   */
  dispatchSimpleEvent(type: TEventType): TRet {
    return emitter_dispatch_simple_event(this != null ? (this.nativeObj || this) : null, type);
  }


  /**
   * 注册指定事件的处理函数。
   * 
   * @param type 事件类型。
   * @param on_event 事件处理函数。
   * @param ctx 事件处理函数上下文。
   *
   * @returns 返回id，用于emitter_off。
   */
  on(type: TEventType, on_event: Function, ctx: any): number {
    return emitter_on(this != null ? (this.nativeObj || this) : null, type, on_event, ctx);
  }


  /**
   * 注销指定事件的处理函数。
   * 
   * @param id emitter_on返回的ID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  off(id: number): TRet {
    return emitter_off(this != null ? (this.nativeObj || this) : null, id);
  }


  /**
   * 启用。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  enable(): TRet {
    return emitter_enable(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 禁用。
   *
   *禁用后emitter_dispatch无效，但可以注册和注销。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  disable(): TRet {
    return emitter_disable(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取注册的回调函数个数，主要用于辅助测试。
   * 
   *
   * @returns 回调函数个数。
   */
  size(): number {
    return emitter_size(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 销毁。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return emitter_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 转换为emitter对象(供脚本语言使用)。
   *
   *主要给脚本语言使用。
   * 
   * @param emitter emitter对象。
   *
   * @returns 对象。
   */
  static cast(emitter: TEmitter): TEmitter {
    return new TEmitter(emitter_cast(emitter != null ? (emitter.nativeObj || emitter) : null));
  }

};
/**
 * 位图。
 *
 */
class TBitmap {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 创建图片对象(一般供脚本语言中使用)。
   * 
   *
   * @returns 返回bitmap对象。
   */
  static create(): TBitmap {
    return new TBitmap(bitmap_create());
  }


  /**
   * 创建图片对象。
   * 
   * @param w 宽度。
   * @param h 高度。
   * @param line_length line_length。
   * @param format 格式。
   *
   * @returns 返回bitmap对象。
   */
  static createEx(w: number, h: number, line_length: number, format: TBitmapFormat): TBitmap {
    return new TBitmap(bitmap_create_ex(w, h, line_length, format));
  }


  /**
   * 获取图片一个像素占用的字节数。
   * 
   *
   * @returns 返回一个像素占用的字节数。
   */
  getBpp(): number {
    return bitmap_get_bpp(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 销毁图片。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return bitmap_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 宽度。
   *
   */
  get w(): number {
    return bitmap_t_get_prop_w(this.nativeObj);
  }


  /**
   * 高度。
   *
   */
  get h(): number {
    return bitmap_t_get_prop_h(this.nativeObj);
  }


  /**
   * 每一行实际占用的内存(也称为stride或pitch)，一般情况下为w*bpp。
   *
   */
  get lineLength(): number {
    return bitmap_t_get_prop_line_length(this.nativeObj);
  }


  /**
   * 标志。请参考{bitmap_flag_t}。
   *
   */
  get flags(): number {
    return bitmap_t_get_prop_flags(this.nativeObj);
  }


  /**
   * 格式。请参考{bitmap_format_t}。
   *
   */
  get format(): number {
    return bitmap_t_get_prop_format(this.nativeObj);
  }


  /**
   * 名称。
   *
   */
  get name(): string {
    return bitmap_t_get_prop_name(this.nativeObj);
  }

};
/**
 * 一个通用数据类型，用来存放整数、浮点数、字符串和其它对象。
 *
 *在C/C++中，一般不需动态创建对象，直接声明并初始化即可。如：
 *
 *
 *> 在脚本语言中，需要动态创建对象。
 *
 */
class TValue {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 设置类型为bool的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setBool(value: any): TValue {
    return new TValue(value_set_bool(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为bool的值。
   * 
   *
   * @returns 值。
   */
  bool(): boolean {
    return value_bool(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为int8的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setInt8(value: any): TValue {
    return new TValue(value_set_int8(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为int8的值。
   * 
   *
   * @returns 值。
   */
  int8(): number {
    return value_int8(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为uint8的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setUint8(value: any): TValue {
    return new TValue(value_set_uint8(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为uint8的值。
   * 
   *
   * @returns 值。
   */
  uint8(): number {
    return value_uint8(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为int16的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setInt16(value: any): TValue {
    return new TValue(value_set_int16(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为int16的值。
   * 
   *
   * @returns 值。
   */
  int16(): number {
    return value_int16(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为uint16的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setUint16(value: any): TValue {
    return new TValue(value_set_uint16(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为uint16的值。
   * 
   *
   * @returns 值。
   */
  uint16(): number {
    return value_uint16(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为int32的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setInt32(value: any): TValue {
    return new TValue(value_set_int32(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为int32的值。
   * 
   *
   * @returns 值。
   */
  int32(): number {
    return value_int32(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为uint32的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setUint32(value: any): TValue {
    return new TValue(value_set_uint32(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 设置类型为int64的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setInt64(value: any): TValue {
    return new TValue(value_set_int64(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为int64的值。
   * 
   *
   * @returns 值。
   */
  int64(): number {
    return value_int64(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为uint64的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setUint64(value: any): TValue {
    return new TValue(value_set_uint64(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为uint64的值。
   * 
   *
   * @returns 值。
   */
  uint64(): number {
    return value_uint64(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为float\_t的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setFloat(value: any): TValue {
    return new TValue(value_set_float(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为float的值。
   * 
   *
   * @returns 值。
   */
  float32(): number {
    return value_float32(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为double的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setFloat64(value: any): TValue {
    return new TValue(value_set_double(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为double的值。
   * 
   *
   * @returns 值。
   */
  float64(): number {
    return value_double(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为字符串的值(并拷贝字符串)。
   *
   *> 供脚本语言使用。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setStr(value: string): TValue {
    return new TValue(value_dup_str(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取类型为字符串的值。
   * 
   *
   * @returns 值。
   */
  str(): string {
    return value_str(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 判断value是否为空值。
   * 
   *
   * @returns 为空值返回TRUE，否则返回FALSE。
   */
  isNull(): boolean {
    return value_is_null(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置类型为int的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setInt(value: any): TValue {
    return new TValue(value_set_int(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 设置类型为object的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setObject(value: TObject): TValue {
    return new TValue(value_set_object(this != null ? (this.nativeObj || this) : null, value != null ? (value.nativeObj || value) : null));
  }


  /**
   * 转换为object的值。
   * 
   *
   * @returns 值。
   */
  object(): TObject {
    return new TObject(value_object(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 设置类型为token的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
  setToken(value: any): TValue {
    return new TValue(value_set_token(this != null ? (this.nativeObj || this) : null, value));
  }


  /**
   * 获取token的值。
   * 
   *
   * @returns 值。
   */
  token(): number {
    return value_token(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 创建value对象。
   * 
   *
   * @returns 对象。
   */
  static create(): TValue {
    return new TValue(value_create());
  }


  /**
   * 销毁value对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return value_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 重置value对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  reset(): TRet {
    return value_reset(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 转换为value对象。
   *
   *> 供脚本语言使用
   * 
   * @param value value对象。
   *
   * @returns 对象。
   */
  static cast(value: TValue): TValue {
    return new TValue(value_cast(value != null ? (value.nativeObj || value) : null));
  }

};
/**
 * 对象接口。
 *
 */
class TObject extends TEmitter {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 引用计数减1。引用计数为0时，销毁对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  unref(): TRet {
    return object_unref(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 引用计数加1。
   * 
   * @param obj object对象。
   *
   * @returns 返回object对象。
   */
  static ref(obj: TObject): TObject {
    return new TObject(object_ref(obj != null ? (obj.nativeObj || obj) : null));
  }


  /**
   * 获取对象的类型名称。
   * 
   *
   * @returns 返回对象的类型名称。
   */
  getType(): string {
    return object_get_type(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取对象的描述信息。
   * 
   *
   * @returns 返回对象的描述信息。
   */
  getDesc(): string {
    return object_get_desc(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取对象占用内存的大小。
   * 
   *
   * @returns 返回对象占用内存的大小。
   */
  getSize(): number {
    return object_get_size(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 判断对象是否是集合。
   * 
   *
   * @returns 返回TRUE表示是集合，否则不是。
   */
  isCollection(): boolean {
    return object_is_collection(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置对象的名称。
   * 
   * @param name 对象的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setName(name: string): TRet {
    return object_set_name(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 比较两个对象。
   * 
   * @param other 比较的object对象。
   *
   * @returns 返回比较结果。
   */
  compare(other: TObject): number {
    return object_compare(this != null ? (this.nativeObj || this) : null, other != null ? (other.nativeObj || other) : null);
  }


  /**
   * 获取指定属性的值。
   * 
   * @param name 属性的名称。
   * @param v 返回属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  getProp(name: string, v: TValue): TRet {
    return object_get_prop(this != null ? (this.nativeObj || this) : null, name, v != null ? (v.nativeObj || v) : null);
  }


  /**
   * 获取指定属性的字符串类型的值。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回指定属性的字符串类型的值。
   */
  getPropStr(name: string): string {
    return object_get_prop_str(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 获取指定属性的指针类型的值。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回指定属性的指针类型的值。
   */
  getPropPointer(name: string): any {
    return object_get_prop_pointer(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 获取指定属性的object类型的值。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回指定属性的object类型的值。
   */
  getPropObject(name: string): TObject {
    return new TObject(object_get_prop_object(this != null ? (this.nativeObj || this) : null, name));
  }


  /**
   * 获取指定属性的整数类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的整数类型的值。
   */
  getPropInt(name: string, defval: number): number {
    return object_get_prop_int(this != null ? (this.nativeObj || this) : null, name, defval);
  }


  /**
   * 获取指定属性的bool类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的bool类型的值。
   */
  getPropBool(name: string, defval: boolean): boolean {
    return object_get_prop_bool(this != null ? (this.nativeObj || this) : null, name, defval);
  }


  /**
   * 获取指定属性的浮点数类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的浮点数类型的值。
   */
  getPropFloat(name: string, defval: number): number {
    return object_get_prop_float(this != null ? (this.nativeObj || this) : null, name, defval);
  }


  /**
   * 删除指定属性。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  removeProp(name: string): TRet {
    return object_remove_prop(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置指定属性的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setProp(name: string, value: TValue): TRet {
    return object_set_prop(this != null ? (this.nativeObj || this) : null, name, value != null ? (value.nativeObj || value) : null);
  }


  /**
   * 设置指定属性的字符串类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPropStr(name: string, value: string): TRet {
    return object_set_prop_str(this != null ? (this.nativeObj || this) : null, name, value);
  }


  /**
   * 设置指定属性的object类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPropObject(name: string, value: TObject): TRet {
    return object_set_prop_object(this != null ? (this.nativeObj || this) : null, name, value != null ? (value.nativeObj || value) : null);
  }


  /**
   * 设置指定属性的整数类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPropInt(name: string, value: any): TRet {
    return object_set_prop_int(this != null ? (this.nativeObj || this) : null, name, value);
  }


  /**
   * 设置指定属性的bool类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPropBool(name: string, value: any): TRet {
    return object_set_prop_bool(this != null ? (this.nativeObj || this) : null, name, value);
  }


  /**
   * 设置指定属性的浮点数类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPropFloat(name: string, value: any): TRet {
    return object_set_prop_float(this != null ? (this.nativeObj || this) : null, name, value);
  }


  /**
   * 拷贝指定的属性。
   * 
   * @param src 源对象。
   * @param name 属性的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  copyProp(src: TObject, name: string): TRet {
    return object_copy_prop(this != null ? (this.nativeObj || this) : null, src != null ? (src.nativeObj || src) : null, name);
  }


  /**
   * 检查是否存在指定的属性。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回TRUE表示存在，否则表示不存在。
   */
  hasProp(name: string): boolean {
    return object_has_prop(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 计算一个表达式，表达式中引用的变量从prop中获取。
   * 
   * @param expr 表达式。
   * @param v 返回计算结果。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  eval(expr: string, v: TValue): TRet {
    return object_eval(this != null ? (this.nativeObj || this) : null, expr, v != null ? (v.nativeObj || v) : null);
  }


  /**
   * 检查是否可以执行指定的命令。
   * 
   * @param name 命令的名称。
   * @param args 命令的参数。
   *
   * @returns 返回TRUE表示可以执行，否则表示不可以执行。
   */
  canExec(name: string, args: string): boolean {
    return object_can_exec(this != null ? (this.nativeObj || this) : null, name, args);
  }


  /**
   * 执行指定的命令。
   * 
   * @param name 命令的名称。
   * @param args 命令的参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  execute(name: string, args: string): TRet {
    return object_exec(this != null ? (this.nativeObj || this) : null, name, args);
  }


  /**
   * 触发EVT_PROPS_CHANGED事件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  notifyChanged(): TRet {
    return object_notify_changed(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取指定属性的字符串类型的值。
   * 
   * @param path 属性的path。
   *
   * @returns 返回指定属性的字符串类型的值。
   */
  getPropStrByPath(path: string): string {
    return object_get_prop_str_by_path(this != null ? (this.nativeObj || this) : null, path);
  }


  /**
   * 获取指定属性的指针类型的值。
   * 
   * @param path 属性的path。
   *
   * @returns 返回指定属性的指针类型的值。
   */
  getPropPointerByPath(path: string): any {
    return object_get_prop_pointer_by_path(this != null ? (this.nativeObj || this) : null, path);
  }


  /**
   * 获取指定属性的object类型的值。
   * 
   * @param path 属性的path。
   *
   * @returns 返回指定属性的object类型的值。
   */
  getPropObjectByPath(path: string): TObject {
    return new TObject(object_get_prop_object_by_path(this != null ? (this.nativeObj || this) : null, path));
  }


  /**
   * 获取指定属性的整数类型的值。
   * 
   * @param path 属性的path。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的整数类型的值。
   */
  getPropIntByPath(path: string, defval: number): number {
    return object_get_prop_int_by_path(this != null ? (this.nativeObj || this) : null, path, defval);
  }


  /**
   * 获取指定属性的bool类型的值。
   * 
   * @param path 属性的path。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的bool类型的值。
   */
  getPropBoolByPath(path: string, defval: boolean): boolean {
    return object_get_prop_bool_by_path(this != null ? (this.nativeObj || this) : null, path, defval);
  }


  /**
   * 获取指定属性的浮点数类型的值。
   * 
   * @param path 属性的path。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的浮点数类型的值。
   */
  getPropFloatByPath(path: string, defval: number): number {
    return object_get_prop_float_by_path(this != null ? (this.nativeObj || this) : null, path, defval);
  }


  /**
   * 引用计数。
   *
   */
  get refCount(): number {
    return object_t_get_prop_ref_count(this.nativeObj);
  }


  /**
   * 对象的名称。
   *
   */
  get name(): string {
    return object_t_get_prop_name(this.nativeObj);
  }

  set name(v: string) {
    this.setName(v);
  }

};
/**
 * TK全局对象。
 *
 */
class TGlobal {

  /**
   * 初始化TK。
   * 
   * @param w LCD宽度。
   * @param h LCD高度。
   * @param app_type 应用程序的类型。
   * @param app_name 应用程序的名称(必须为常量字符串)。
   * @param app_root 应用程序的根目录，用于定位资源文件(必须为常量字符串)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static init(w: number, h: number, app_type: TAppType, app_name: string, app_root: string): TRet {
    return tk_init(w, h, app_type, app_name, app_root);
  }


  /**
   * 进入TK事件主循环。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static run(): TRet {
    return tk_run();
  }


  /**
   * 退出TK事件主循环。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static quit(): TRet {
    return tk_quit();
  }


  /**
   * 获取全局指针的X坐标。
   * 
   *
   * @returns 返回全局指针的X坐标。
   */
  static getPointerX(): number {
    return tk_get_pointer_x();
  }


  /**
   * 获取全局指针的Y坐标。
   * 
   *
   * @returns 返回全局指针的X坐标。
   */
  static getPointerY(): number {
    return tk_get_pointer_y();
  }


  /**
   * 获取全局指针是否按下。
   * 
   *
   * @returns 返回全局指针是否按下。
   */
  static isPointerPressed(): boolean {
    return tk_is_pointer_pressed();
  }

};
/**
 * 对话框退出码。
 *
 *> 一般用作dialog_quit函数的参数。
 *
 */
enum TDialogQuitCode {

  /**
   * 对话框被强行关闭或不关心关闭原因。
   *
   */
  NONE = DIALOG_QUIT_NONE(),

  /**
   * 点击“OK”按钮关闭。
   *
   */
  OK = DIALOG_QUIT_OK(),

  /**
   * 点击“YES”按钮关闭。
   *
   */
  YES = DIALOG_QUIT_YES(),

  /**
   * 点击“CANCEL”按钮关闭。
   *
   */
  CANCEL = DIALOG_QUIT_CANCEL(),

  /**
   * 点击“NO”按钮关闭。
   *
   */
  NO = DIALOG_QUIT_NO(),

  /**
   * 点击其它按钮关闭。
   *
   */
  OTHER = DIALOG_QUIT_OTHER(),
};


/**
 * 类型常量定义。
 *
 */
enum TEventType {

  /**
   * 指针按下事件名(pointer_event_t)。
   *
   */
  POINTER_DOWN = EVT_POINTER_DOWN(),

  /**
   * 指针按下事件名，在子控件处理之前触发(pointer_event_t)。
   *
   */
  POINTER_DOWN_BEFORE_CHILDREN = EVT_POINTER_DOWN_BEFORE_CHILDREN(),

  /**
   * 指针移动事件名(pointer_event_t)。
   *
   */
  POINTER_MOVE = EVT_POINTER_MOVE(),

  /**
   * 指针移动事件名，在子控件处理之前触发(pointer_event_t)。
   *
   */
  POINTER_MOVE_BEFORE_CHILDREN = EVT_POINTER_MOVE_BEFORE_CHILDREN(),

  /**
   * 指针抬起事件名(pointer_event_t)。
   *
   */
  POINTER_UP = EVT_POINTER_UP(),

  /**
   * 指针抬起事件名，在子控件处理之前触发(pointer_event_t)。
   *
   */
  POINTER_UP_BEFORE_CHILDREN = EVT_POINTER_UP_BEFORE_CHILDREN(),

  /**
   * 滚轮事件名(pointer_event_t)。
   *
   */
  WHEEL = EVT_WHEEL(),

  /**
   * 鼠标滚轮事件名，在子控件处理之前触发(key_event_t)。
   *
   */
  WHEEL_BEFORE_CHILDREN = EVT_WHEEL_BEFORE_CHILDREN(),

  /**
   * 取消前一个指针按下事件名(pointer_event_t)。
   *
   */
  POINTER_DOWN_ABORT = EVT_POINTER_DOWN_ABORT(),

  /**
   * 右键/长按弹出上下文菜单的事件名(pointer_event_t)。
   *
   */
  CONTEXT_MENU = EVT_CONTEXT_MENU(),

  /**
   * 指针进入事件名(pointer_event_t)。
   *
   */
  POINTER_ENTER = EVT_POINTER_ENTER(),

  /**
   * 指针离开事件名(pointer_event_t)。
   *
   */
  POINTER_LEAVE = EVT_POINTER_LEAVE(),

  /**
   * 长按事件名(pointer_event_t)。
   *
   */
  LONG_PRESS = EVT_LONG_PRESS(),

  /**
   * 点击事件名(pointer_event_t)。
   *
   */
  CLICK = EVT_CLICK(),

  /**
   * 得到焦点事件名(event_t)。
   *
   */
  FOCUS = EVT_FOCUS(),

  /**
   * 失去焦点事件名(event_t)。
   *
   */
  BLUR = EVT_BLUR(),

  /**
   * 键按下事件名(key_event_t)。
   *
   */
  KEY_DOWN = EVT_KEY_DOWN(),

  /**
   * 键按下事件名，在子控件处理之前触发(key_event_t)。
   *
   */
  KEY_DOWN_BEFORE_CHILDREN = EVT_KEY_DOWN_BEFORE_CHILDREN(),

  /**
   * 按键repeat事件名(key_event_t)。
   *
   */
  KEY_REPEAT = EVT_KEY_REPEAT(),

  /**
   * 键抬起事件名(key_event_t)。
   *
   */
  KEY_UP = EVT_KEY_UP(),

  /**
   * 键抬起事件名，在子控件处理之前触发(key_event_t)。
   *
   */
  KEY_UP_BEFORE_CHILDREN = EVT_KEY_UP_BEFORE_CHILDREN(),

  /**
   * 即将移动Widget的事件名(event_t)。
   *
   */
  WILL_MOVE = EVT_WILL_MOVE(),

  /**
   * 移动Widget的事件名(event_t)。
   *
   */
  MOVE = EVT_MOVE(),

  /**
   * 即将调整Widget大小的事件名(event_t)。
   *
   */
  WILL_RESIZE = EVT_WILL_RESIZE(),

  /**
   * 调整Widget大小的事件名(event_t)。
   *
   */
  RESIZE = EVT_RESIZE(),

  /**
   * 即将调整Widget大小/位置的事件名(event_t)。
   *
   */
  WILL_MOVE_RESIZE = EVT_WILL_MOVE_RESIZE(),

  /**
   * 调整Widget大小/位置的事件名(event_t)。
   *
   */
  MOVE_RESIZE = EVT_MOVE_RESIZE(),

  /**
   * 控件的值即将改变的事件名(event_t)。
   *
   */
  VALUE_WILL_CHANGE = EVT_VALUE_WILL_CHANGE(),

  /**
   * 控件的值改变的事件名(event_t)。
   *
   */
  VALUE_CHANGED = EVT_VALUE_CHANGED(),

  /**
   * 控件的值持续改变(如编辑器正在编辑)的事件名(event_t)。
   *
   */
  VALUE_CHANGING = EVT_VALUE_CHANGING(),

  /**
   * 绘制的事件名(paint_event_t)。
   *
   */
  PAINT = EVT_PAINT(),

  /**
   * 即将绘制的事件名(paint_event_t)。
   *
   */
  BEFORE_PAINT = EVT_BEFORE_PAINT(),

  /**
   * 绘制完成的事件名(paint_event_t)。
   *
   */
  AFTER_PAINT = EVT_AFTER_PAINT(),

  /**
   * 绘制完成(canvas状态已经恢复)的事件名(paint_event_t)。
   *
   */
  PAINT_DONE = EVT_PAINT_DONE(),

  /**
   * locale改变的事件(event_t)。
   *
   */
  LOCALE_CHANGED = EVT_LOCALE_CHANGED(),

  /**
   * 控件动画开始事件(event_t)。
   *
   */
  ANIM_START = EVT_ANIM_START(),

  /**
   * 控件动画被主动停止的事件(event_t)。
   *
   */
  ANIM_STOP = EVT_ANIM_STOP(),

  /**
   * 控件动画被暂停的事件(event_t)。
   *
   */
  ANIM_PAUSE = EVT_ANIM_PAUSE(),

  /**
   * 控件动画yoyo/repeat时，完成一次的事件(event_t)。
   *
   */
  ANIM_ONCE = EVT_ANIM_ONCE(),

  /**
   * 控件动画完成事件(event_t)。
   *
   */
  ANIM_END = EVT_ANIM_END(),

  /**
   * 窗口加载完成事件(event_t)。
   *
   */
  WINDOW_LOAD = EVT_WINDOW_LOAD(),

  /**
   * 控件加载完成事件(event_t)。
   *
   */
  WIDGET_LOAD = EVT_WIDGET_LOAD(),

  /**
   * 窗口即将打开事件(event_t)。
   *如果有窗口动画，在窗口动画开始前触发。如果没有窗口动画，在窗口被加载后的下一次循环中触发。
   *
   */
  WINDOW_WILL_OPEN = EVT_WINDOW_WILL_OPEN(),

  /**
   * 窗口打开事件(event_t)。
   *如果有窗口动画，在窗口动画完成时触发。如果没有窗口动画，在窗口被加载后的下一次循环中触发。
   *
   */
  WINDOW_OPEN = EVT_WINDOW_OPEN(),

  /**
   * 窗口被切换到后台事件(event_t)。
   *打开新窗口时，当前窗口被切换到后台时，对当前窗口触发本事件。
   *
   */
  WINDOW_TO_BACKGROUND = EVT_WINDOW_TO_BACKGROUND(),

  /**
   * 窗口被切换到前台事件(event_t)。
   *关闭当前窗口时，前一个窗口被切换到前台时，对前一个窗口触发本事件。
   *
   */
  WINDOW_TO_FOREGROUND = EVT_WINDOW_TO_FOREGROUND(),

  /**
   * 窗口关闭事件。
   *
   */
  WINDOW_CLOSE = EVT_WINDOW_CLOSE(),

  /**
   * 请求关闭窗口的事件(event_t)。
   *
   */
  REQUEST_CLOSE_WINDOW = EVT_REQUEST_CLOSE_WINDOW(),

  /**
   * 顶层窗口改变的事件(window_event_t)。
   *
   */
  TOP_WINDOW_CHANGED = EVT_TOP_WINDOW_CHANGED(),

  /**
   * 输入法提交输入的文本事件(im_commit_event_t)。
   *
   */
  IM_COMMIT = EVT_IM_COMMIT(),

  /**
   * 输入法请求显示候选字事件(im_candidates_event_t)。
   *
   */
  IM_SHOW_CANDIDATES = EVT_IM_SHOW_CANDIDATES(),

  /**
   * 软键盘Action点击事件(event_t)。
   *
   */
  IM_ACTION = EVT_IM_ACTION(),

  /**
   * 请求更新软键盘上的Action按钮的信息(im_action_button_info_event_t)。
   *
   */
  IM_ACTION_INFO = EVT_IM_ACTION_INFO(),

  /**
   * 开始拖动(event_t)。
   *
   */
  DRAG_START = EVT_DRAG_START(),

  /**
   * 拖动(event_t)。
   *
   */
  DRAG = EVT_DRAG(),

  /**
   * 结束拖动(event_t)。
   *
   */
  DRAG_END = EVT_DRAG_END(),

  /**
   * 在指定的时间内(WITH_SCREEN_SAVER_TIME)，没有用户输入事件，由窗口管理器触发。
   *
   */
  SCREEN_SAVER = EVT_SCREEN_SAVER(),

  /**
   * 内存不足(event_t)。
   *
   */
  LOW_MEMORY = EVT_LOW_MEMORY(),

  /**
   * 内存耗尽(event_t)。
   *
   */
  OUT_OF_MEMORY = EVT_OUT_OF_MEMORY(),

  /**
   * 屏幕即将旋转(event_t)。
   *
   */
  ORIENTATION_WILL_CHANGED = EVT_ORIENTATION_WILL_CHANGED(),

  /**
   * 屏幕旋转(event_t)。
   *
   */
  ORIENTATION_CHANGED = EVT_ORIENTATION_CHANGED(),

  /**
   * 控件创建事件(event_t)。
   *
   */
  WIDGET_CREATED = EVT_WIDGET_CREATED(),

  /**
   * 请求退出应用程序事件。
   *点击原生窗口关闭按钮时，通过窗口管理器触发，注册该事件并返回RET_STOP，可以阻止窗口关闭。
   *
   */
  REQUEST_QUIT_APP = EVT_REQUEST_QUIT_APP(),

  /**
   * 主题变化(event_t)。
   *
   */
  THEME_CHANGED = EVT_THEME_CHANGED(),

  /**
   * 控件加载新的子控件(event_t)。
   *
   */
  WIDGET_ADD_CHILD = EVT_WIDGET_ADD_CHILD(),

  /**
   * 控件移除子控件(event_t)。
   *
   */
  WIDGET_REMOVE_CHILD = EVT_WIDGET_REMOVE_CHILD(),

  /**
   * event queue其它请求编号起始值。
   *
   */
  REQ_START = EVT_REQ_START(),

  /**
   * 用户定义事件起始值。
   *
   */
  USER_START = EVT_USER_START(),

  /**
   * 无效事件名称。
   *
   */
  NONE = EVT_NONE(),

  /**
   * 对象的属性即将改变的事件名(prop_change_event_t)。
   *
   */
  PROP_WILL_CHANGE = EVT_PROP_WILL_CHANGE(),

  /**
   * 对象的属性改变的事件名(prop_change_event_t)。
   *
   */
  PROP_CHANGED = EVT_PROP_CHANGED(),

  /**
   * 即将增加和删除集合中的项目(event_t)。
   *
   */
  ITEMS_WILL_CHANGE = EVT_ITEMS_WILL_CHANGE(),

  /**
   * 完成增加和删除集合中的项目(event_t)。
   *
   */
  ITEMS_CHANGED = EVT_ITEMS_CHANGED(),

  /**
   * 对象的属性改变的事件名(props_event_t)。
   *
   */
  PROPS_CHANGED = EVT_PROPS_CHANGED(),

  /**
   * 进度状态(progress_event_t)。
   *
   */
  PROGRESS = EVT_PROGRESS(),

  /**
   * 对象销毁事件名(event_t)。
   *
   */
  DESTROY = EVT_DESTROY(),
};


/**
 * 字体管理器，负责字体的加载和缓存管理。
 *(如果使用nanovg，字体由nanovg内部管理)
 *
 */
class TFontManager {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 卸载指定的字体。
   * 
   * @param name 字体名，为NULL时使用缺省字体。
   * @param size 字体的大小(矢量字体指定为0即可)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  unloadFont(name: string, size: number): TRet {
    return font_manager_unload_font(this != null ? (this.nativeObj || this) : null, name, size);
  }


  /**
   * 卸载全部字体。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  unloadAll(): TRet {
    return font_manager_unload_all(this != null ? (this.nativeObj || this) : null);
  }

};
/**
 * 字模格式常量定义。
 *
 */
enum TGlyphFormat {

  /**
   * 每个像素占用1个字节(缺省)。
   *
   */
  ALPHA = GLYPH_FMT_ALPHA(),

  /**
   * 每个像素占用1个比特。
   *
   */
  MONO = GLYPH_FMT_MONO(),

  /**
   * 每个像素占用4个字节。
   *
   */
  RGBA = GLYPH_FMT_RGBA(),
};


/**
 * idle可以看作是duration为0的定时器。
 *
 *> idle可以用来实现一些异步处理。
 *
 *示例：
 *
 *
 *> 在非GUI线程请用idle\_queue。
 *
 */
class TIdle {

  /**
   * 增加一个idle。
   * 
   * @param on_idle idle回调函数，回调函数返回RET_REPEAT，则下次继续执行，否则自动移出。
   * @param ctx idle回调函数的上下文。
   *
   * @returns 返回idle的ID，0表示失败。
   */
  static add(on_idle: Function, ctx: any): number {
    return idle_add(on_idle, ctx);
  }


  /**
   * 删除指定的idle。
   * 
   * @param idle_id idleID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static remove(idle_id: number): TRet {
    return idle_remove(idle_id);
  }

};
/**
 * 图片管理器。负责加载，解码和缓存图片。
 *
 */
class TImageManager {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 获取缺省的图片管理器。
   * 
   *
   * @returns 返回图片管理器对象。
   */
  static instance(): TImageManager {
    return new TImageManager(image_manager());
  }


  /**
   * 获取指定的图片。
   *先从缓存查找，如果没找到，再加载并缓存。
   * 
   * @param name 图片名称。
   * @param image 用于返回图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  getBitmap(name: string, image: TBitmap): TRet {
    return image_manager_get_bitmap(this != null ? (this.nativeObj || this) : null, name, image != null ? (image.nativeObj || image) : null);
  }

};
/**
 * 输入类型常量定义。
 *
 */
enum TInputType {

  /**
   * 文本。
   *
   */
  TEXT = INPUT_TEXT(),

  /**
   * 整数。
   *
   */
  INT = INPUT_INT(),

  /**
   * 非负整数。
   *
   */
  UINT = INPUT_UINT(),

  /**
   * 16进制整数。
   *
   */
  HEX = INPUT_HEX(),

  /**
   * 浮点数。
   *
   */
  FLOAT = INPUT_FLOAT(),

  /**
   * 非负浮点数。
   *
   */
  UFLOAT = INPUT_UFLOAT(),

  /**
   * 邮件地址。
   *
   */
  EMAIL = INPUT_EMAIL(),

  /**
   * 密码。
   *
   */
  PASSWORD = INPUT_PASSWORD(),

  /**
   * 电话号码。
   *
   */
  PHONE = INPUT_PHONE(),

  /**
   * 使用自定义的软键盘(如计算器等应用不希望弹出系统软键盘)。
   *
   */
  CUSTOM = INPUT_CUSTOM(),

  /**
   * 使用自定义的密码软键盘。
   *
   */
  CUSTOM_PASSWORD = INPUT_CUSTOM_PASSWORD(),
};


/**
 * 类型常量定义。
 *
 */
enum TValueType {

  /**
   * 无效类型。
   *
   */
  INVALID = VALUE_TYPE_INVALID(),

  /**
   * BOOL类型。
   *
   */
  BOOL = VALUE_TYPE_BOOL(),

  /**
   * int8_t类型。
   *
   */
  INT8 = VALUE_TYPE_INT8(),

  /**
   * uint8_t类型。
   *
   */
  UINT8 = VALUE_TYPE_UINT8(),

  /**
   * int16_t类型。
   *
   */
  INT16 = VALUE_TYPE_INT16(),

  /**
   * uint16_t类型。
   *
   */
  UINT16 = VALUE_TYPE_UINT16(),

  /**
   * int32_t类型。
   *
   */
  INT32 = VALUE_TYPE_INT32(),

  /**
   * uint32_t类型。
   *
   */
  UINT32 = VALUE_TYPE_UINT32(),

  /**
   * int64_t类型。
   *
   */
  INT64 = VALUE_TYPE_INT64(),

  /**
   * uint64_t类型。
   *
   */
  UINT64 = VALUE_TYPE_UINT64(),

  /**
   * void*类型。
   *
   */
  POINTER = VALUE_TYPE_POINTER(),

  /**
   * float_t类型。
   *
   */
  FLOAT = VALUE_TYPE_FLOAT(),

  /**
   * float类型。
   *
   */
  FLOAT32 = VALUE_TYPE_FLOAT32(),

  /**
   * double类型。
   *
   */
  DOUBLE = VALUE_TYPE_DOUBLE(),

  /**
   * char*类型。
   *
   */
  STRING = VALUE_TYPE_STRING(),

  /**
   * wchar_t*类型。
   *
   */
  WSTRING = VALUE_TYPE_WSTRING(),

  /**
   * object_t*类型。
   *
   */
  OBJECT = VALUE_TYPE_OBJECT(),

  /**
   * 带长度的字符串。
   *
   */
  SIZED_STRING = VALUE_TYPE_SIZED_STRING(),

  /**
   * 二进制数据。
   *
   */
  BINARY = VALUE_TYPE_BINARY(),

  /**
   * 二进制数据(UBJSON)。
   *
   */
  UBJSON = VALUE_TYPE_UBJSON(),

  /**
   * 特殊用途。
   *
   */
  TOKEN = VALUE_TYPE_TOKEN(),
};


/**
 * 输入法接口。
 *
 *常见的实现方式有以下几种：
 *
 ** 空实现。用于不需要输入法的嵌入式平台。
 *
 ** 缺省实现。用于需要输入法的嵌入式平台。
 *
 ** 基于SDL实现的平台原生输入法。用于桌面系统和手机系统。
 *
 *
 *
 *> 输入类型请参考：[input\_type](input_type_t.md)
 *
 */
class TInputMethod {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 提交输入文本。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  commitText(text: string): TRet {
    return input_method_commit_text(this != null ? (this.nativeObj || this) : null, text);
  }


  /**
   * 提交按键。
   * 
   * @param key 键值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  dispatchKey(key: number): TRet {
    return input_method_dispatch_key(this != null ? (this.nativeObj || this) : null, key);
  }


  /**
   * 获取全局输入法对象。
   * 
   *
   * @returns 成功返回输入法对象，失败返回NULL。
   */
  static instance(): TInputMethod {
    return new TInputMethod(input_method());
  }

};
/**
 * key code。
 *
 */
enum TKeyCode {

  /**
   * TK_KEY_RETURN
   *
   */
  KEY_RETURN = TK_KEY_RETURN(),

  /**
   * TK_KEY_ESCAPE
   *
   */
  KEY_ESCAPE = TK_KEY_ESCAPE(),

  /**
   * TK_KEY_BACKSPACE
   *
   */
  KEY_BACKSPACE = TK_KEY_BACKSPACE(),

  /**
   * TK_KEY_TAB
   *
   */
  KEY_TAB = TK_KEY_TAB(),

  /**
   * TK_KEY_SPACE
   *
   */
  KEY_SPACE = TK_KEY_SPACE(),

  /**
   * TK_KEY_EXCLAIM
   *
   */
  KEY_EXCLAIM = TK_KEY_EXCLAIM(),

  /**
   * TK_KEY_QUOTEDBL
   *
   */
  KEY_QUOTEDBL = TK_KEY_QUOTEDBL(),

  /**
   * TK_KEY_HASH
   *
   */
  KEY_HASH = TK_KEY_HASH(),

  /**
   * TK_KEY_PERCENT
   *
   */
  KEY_PERCENT = TK_KEY_PERCENT(),

  /**
   * TK_KEY_DOLLAR
   *
   */
  KEY_DOLLAR = TK_KEY_DOLLAR(),

  /**
   * TK_KEY_AMPERSAND
   *
   */
  KEY_AMPERSAND = TK_KEY_AMPERSAND(),

  /**
   * TK_KEY_QUOTE
   *
   */
  KEY_QUOTE = TK_KEY_QUOTE(),

  /**
   * TK_KEY_LEFTPAREN
   *
   */
  KEY_LEFTPAREN = TK_KEY_LEFTPAREN(),

  /**
   * TK_KEY_RIGHTPAREN
   *
   */
  KEY_RIGHTPAREN = TK_KEY_RIGHTPAREN(),

  /**
   * TK_KEY_ASTERISK
   *
   */
  KEY_ASTERISK = TK_KEY_ASTERISK(),

  /**
   * TK_KEY_PLUS
   *
   */
  KEY_PLUS = TK_KEY_PLUS(),

  /**
   * TK_KEY_COMMA
   *
   */
  KEY_COMMA = TK_KEY_COMMA(),

  /**
   * TK_KEY_MINUS
   *
   */
  KEY_MINUS = TK_KEY_MINUS(),

  /**
   * TK_KEY_PERIOD
   *
   */
  KEY_PERIOD = TK_KEY_PERIOD(),

  /**
   * TK_KEY_SLASH
   *
   */
  KEY_SLASH = TK_KEY_SLASH(),

  /**
   * TK_KEY_0
   *
   */
  KEY_0 = TK_KEY_0(),

  /**
   * TK_KEY_1
   *
   */
  KEY_1 = TK_KEY_1(),

  /**
   * TK_KEY_2
   *
   */
  KEY_2 = TK_KEY_2(),

  /**
   * TK_KEY_3
   *
   */
  KEY_3 = TK_KEY_3(),

  /**
   * TK_KEY_4
   *
   */
  KEY_4 = TK_KEY_4(),

  /**
   * TK_KEY_5
   *
   */
  KEY_5 = TK_KEY_5(),

  /**
   * TK_KEY_6
   *
   */
  KEY_6 = TK_KEY_6(),

  /**
   * TK_KEY_7
   *
   */
  KEY_7 = TK_KEY_7(),

  /**
   * TK_KEY_8
   *
   */
  KEY_8 = TK_KEY_8(),

  /**
   * TK_KEY_9
   *
   */
  KEY_9 = TK_KEY_9(),

  /**
   * TK_KEY_COLON
   *
   */
  KEY_COLON = TK_KEY_COLON(),

  /**
   * TK_KEY_SEMICOLON
   *
   */
  KEY_SEMICOLON = TK_KEY_SEMICOLON(),

  /**
   * TK_KEY_LESS
   *
   */
  KEY_LESS = TK_KEY_LESS(),

  /**
   * TK_KEY_EQUAL
   *
   */
  KEY_EQUAL = TK_KEY_EQUAL(),

  /**
   * TK_KEY_GREATER
   *
   */
  KEY_GREATER = TK_KEY_GREATER(),

  /**
   * TK_KEY_QUESTION
   *
   */
  KEY_QUESTION = TK_KEY_QUESTION(),

  /**
   * TK_KEY_AT
   *
   */
  KEY_AT = TK_KEY_AT(),

  /**
   * TK_KEY_LEFTBRACKET
   *
   */
  KEY_LEFTBRACKET = TK_KEY_LEFTBRACKET(),

  /**
   * TK_KEY_BACKSLASH
   *
   */
  KEY_BACKSLASH = TK_KEY_BACKSLASH(),

  /**
   * TK_KEY_RIGHTBRACKET
   *
   */
  KEY_RIGHTBRACKET = TK_KEY_RIGHTBRACKET(),

  /**
   * TK_KEY_CARET
   *
   */
  KEY_CARET = TK_KEY_CARET(),

  /**
   * TK_KEY_UNDERSCORE
   *
   */
  KEY_UNDERSCORE = TK_KEY_UNDERSCORE(),

  /**
   * TK_KEY_BACKQUOTE
   *
   */
  KEY_BACKQUOTE = TK_KEY_BACKQUOTE(),

  /**
   * TK_KEY_a
   *
   */
  KEY_a = TK_KEY_a(),

  /**
   * TK_KEY_b
   *
   */
  KEY_b = TK_KEY_b(),

  /**
   * TK_KEY_c
   *
   */
  KEY_c = TK_KEY_c(),

  /**
   * TK_KEY_d
   *
   */
  KEY_d = TK_KEY_d(),

  /**
   * TK_KEY_e
   *
   */
  KEY_e = TK_KEY_e(),

  /**
   * TK_KEY_f
   *
   */
  KEY_f = TK_KEY_f(),

  /**
   * TK_KEY_g
   *
   */
  KEY_g = TK_KEY_g(),

  /**
   * TK_KEY_h
   *
   */
  KEY_h = TK_KEY_h(),

  /**
   * TK_KEY_i
   *
   */
  KEY_i = TK_KEY_i(),

  /**
   * TK_KEY_j
   *
   */
  KEY_j = TK_KEY_j(),

  /**
   * TK_KEY_k
   *
   */
  KEY_k = TK_KEY_k(),

  /**
   * TK_KEY_l
   *
   */
  KEY_l = TK_KEY_l(),

  /**
   * TK_KEY_m
   *
   */
  KEY_m = TK_KEY_m(),

  /**
   * TK_KEY_n
   *
   */
  KEY_n = TK_KEY_n(),

  /**
   * TK_KEY_o
   *
   */
  KEY_o = TK_KEY_o(),

  /**
   * TK_KEY_p
   *
   */
  KEY_p = TK_KEY_p(),

  /**
   * TK_KEY_q
   *
   */
  KEY_q = TK_KEY_q(),

  /**
   * TK_KEY_r
   *
   */
  KEY_r = TK_KEY_r(),

  /**
   * TK_KEY_s
   *
   */
  KEY_s = TK_KEY_s(),

  /**
   * TK_KEY_t
   *
   */
  KEY_t = TK_KEY_t(),

  /**
   * TK_KEY_u
   *
   */
  KEY_u = TK_KEY_u(),

  /**
   * TK_KEY_v
   *
   */
  KEY_v = TK_KEY_v(),

  /**
   * TK_KEY_w
   *
   */
  KEY_w = TK_KEY_w(),

  /**
   * TK_KEY_x
   *
   */
  KEY_x = TK_KEY_x(),

  /**
   * TK_KEY_y
   *
   */
  KEY_y = TK_KEY_y(),

  /**
   * TK_KEY_z
   *
   */
  KEY_z = TK_KEY_z(),

  /**
   * TK_KEY_A
   *
   */
  KEY_A = TK_KEY_A(),

  /**
   * TK_KEY_B
   *
   */
  KEY_B = TK_KEY_B(),

  /**
   * TK_KEY_C
   *
   */
  KEY_C = TK_KEY_C(),

  /**
   * TK_KEY_D
   *
   */
  KEY_D = TK_KEY_D(),

  /**
   * TK_KEY_E
   *
   */
  KEY_E = TK_KEY_E(),

  /**
   * TK_KEY_F
   *
   */
  KEY_F = TK_KEY_F(),

  /**
   * TK_KEY_G
   *
   */
  KEY_G = TK_KEY_G(),

  /**
   * TK_KEY_H
   *
   */
  KEY_H = TK_KEY_H(),

  /**
   * TK_KEY_I
   *
   */
  KEY_I = TK_KEY_I(),

  /**
   * TK_KEY_J
   *
   */
  KEY_J = TK_KEY_J(),

  /**
   * TK_KEY_K
   *
   */
  KEY_K = TK_KEY_K(),

  /**
   * TK_KEY_L
   *
   */
  KEY_L = TK_KEY_L(),

  /**
   * TK_KEY_M
   *
   */
  KEY_M = TK_KEY_M(),

  /**
   * TK_KEY_N
   *
   */
  KEY_N = TK_KEY_N(),

  /**
   * TK_KEY_O
   *
   */
  KEY_O = TK_KEY_O(),

  /**
   * TK_KEY_P
   *
   */
  KEY_P = TK_KEY_P(),

  /**
   * TK_KEY_Q
   *
   */
  KEY_Q = TK_KEY_Q(),

  /**
   * TK_KEY_R
   *
   */
  KEY_R = TK_KEY_R(),

  /**
   * TK_KEY_S
   *
   */
  KEY_S = TK_KEY_S(),

  /**
   * TK_KEY_T
   *
   */
  KEY_T = TK_KEY_T(),

  /**
   * TK_KEY_U
   *
   */
  KEY_U = TK_KEY_U(),

  /**
   * TK_KEY_V
   *
   */
  KEY_V = TK_KEY_V(),

  /**
   * TK_KEY_W
   *
   */
  KEY_W = TK_KEY_W(),

  /**
   * TK_KEY_X
   *
   */
  KEY_X = TK_KEY_X(),

  /**
   * TK_KEY_Y
   *
   */
  KEY_Y = TK_KEY_Y(),

  /**
   * TK_KEY_Z
   *
   */
  KEY_Z = TK_KEY_Z(),

  /**
   * TK_KEY_DOT
   *
   */
  KEY_DOT = TK_KEY_DOT(),

  /**
   * TK_KEY_DELETE
   *
   */
  KEY_DELETE = TK_KEY_DELETE(),

  /**
   * TK_KEY_LEFTBRACE
   *
   */
  KEY_LEFTBRACE = TK_KEY_LEFTBRACE(),

  /**
   * TK_KEY_RIGHTBRACE
   *
   */
  KEY_RIGHTBRACE = TK_KEY_RIGHTBRACE(),

  /**
   * TK_KEY_LSHIFT
   *
   */
  KEY_LSHIFT = TK_KEY_LSHIFT(),

  /**
   * TK_KEY_RSHIFT
   *
   */
  KEY_RSHIFT = TK_KEY_RSHIFT(),

  /**
   * TK_KEY_LCTRL
   *
   */
  KEY_LCTRL = TK_KEY_LCTRL(),

  /**
   * TK_KEY_RCTRL
   *
   */
  KEY_RCTRL = TK_KEY_RCTRL(),

  /**
   * TK_KEY_LALT
   *
   */
  KEY_LALT = TK_KEY_LALT(),

  /**
   * TK_KEY_RALT
   *
   */
  KEY_RALT = TK_KEY_RALT(),

  /**
   * TK_KEY_CAPSLOCK
   *
   */
  KEY_CAPSLOCK = TK_KEY_CAPSLOCK(),

  /**
   * TK_KEY_HOME
   *
   */
  KEY_HOME = TK_KEY_HOME(),

  /**
   * TK_KEY_END
   *
   */
  KEY_END = TK_KEY_END(),

  /**
   * TK_KEY_INSERT
   *
   */
  KEY_INSERT = TK_KEY_INSERT(),

  /**
   * TK_KEY_UP
   *
   */
  KEY_UP = TK_KEY_UP(),

  /**
   * TK_KEY_DOWN
   *
   */
  KEY_DOWN = TK_KEY_DOWN(),

  /**
   * TK_KEY_LEFT
   *
   */
  KEY_LEFT = TK_KEY_LEFT(),

  /**
   * TK_KEY_RIGHT
   *
   */
  KEY_RIGHT = TK_KEY_RIGHT(),

  /**
   * TK_KEY_PAGEUP
   *
   */
  KEY_PAGEUP = TK_KEY_PAGEUP(),

  /**
   * TK_KEY_PAGEDOWN
   *
   */
  KEY_PAGEDOWN = TK_KEY_PAGEDOWN(),

  /**
   * TK_KEY_F1
   *
   */
  KEY_F1 = TK_KEY_F1(),

  /**
   * TK_KEY_F2
   *
   */
  KEY_F2 = TK_KEY_F2(),

  /**
   * TK_KEY_F3
   *
   */
  KEY_F3 = TK_KEY_F3(),

  /**
   * TK_KEY_F4
   *
   */
  KEY_F4 = TK_KEY_F4(),

  /**
   * TK_KEY_F5
   *
   */
  KEY_F5 = TK_KEY_F5(),

  /**
   * TK_KEY_F6
   *
   */
  KEY_F6 = TK_KEY_F6(),

  /**
   * TK_KEY_F7
   *
   */
  KEY_F7 = TK_KEY_F7(),

  /**
   * TK_KEY_F8
   *
   */
  KEY_F8 = TK_KEY_F8(),

  /**
   * TK_KEY_F9
   *
   */
  KEY_F9 = TK_KEY_F9(),

  /**
   * TK_KEY_F10
   *
   */
  KEY_F10 = TK_KEY_F10(),

  /**
   * TK_KEY_F11
   *
   */
  KEY_F11 = TK_KEY_F11(),

  /**
   * TK_KEY_F12
   *
   */
  KEY_F12 = TK_KEY_F12(),

  /**
   * TK_KEY_MENU
   *
   */
  KEY_MENU = TK_KEY_MENU(),

  /**
   * TK_KEY_COMMAND
   *
   */
  KEY_COMMAND = TK_KEY_COMMAND(),

  /**
   * TK_KEY_BACK
   *
   */
  KEY_BACK = TK_KEY_BACK(),

  /**
   * TK_KEY_CANCEL
   *
   */
  KEY_CANCEL = TK_KEY_CANCEL(),
};


/**
 * 本地化信息。提供字符串翻译数据管理，当前语言改变的事件通知等等。
 *
 */
class TLocaleInfo {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 获取缺省locale_info。
   * 
   *
   * @returns 返回locale_info对象。
   */
  static instance(): TLocaleInfo {
    return new TLocaleInfo(locale_info());
  }


  /**
   * 翻译字符串。
   * 
   * @param text 待翻译的文本。
   *
   * @returns 返回翻译之后的字符串。
   */
  tr(text: string): string {
    return locale_info_tr(this != null ? (this.nativeObj || this) : null, text);
  }


  /**
   * 设置当前的国家和语言。
   * 
   * @param language 语言。
   * @param country 国家或地区。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  change(language: string, country: string): TRet {
    return locale_info_change(this != null ? (this.nativeObj || this) : null, language, country);
  }


  /**
   * 注销指定事件的处理函数。
   * 
   * @param id locale_info_on返回的ID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  off(id: number): TRet {
    return locale_info_off(this != null ? (this.nativeObj || this) : null, id);
  }

};
/**
 * style常量定义。
 *
 */
enum TStyleId {

  /**
   * 背景颜色。
   *
   */
  _ID_BG_COLOR = STYLE_ID_BG_COLOR(),

  /**
   * 前景颜色。
   *
   */
  _ID_FG_COLOR = STYLE_ID_FG_COLOR(),

  /**
   * 蒙版颜色。
   *
   */
  _ID_MASK_COLOR = STYLE_ID_MASK_COLOR(),

  /**
   * 字体名称。
   *
   */
  _ID_FONT_NAME = STYLE_ID_FONT_NAME(),

  /**
   * 字体大小。
   *
   */
  _ID_FONT_SIZE = STYLE_ID_FONT_SIZE(),

  /**
   * 字体风格(粗体、斜体等)。
   *
   */
  _ID_FONT_STYLE = STYLE_ID_FONT_STYLE(),

  /**
   * 文本颜色。
   *
   */
  _ID_TEXT_COLOR = STYLE_ID_TEXT_COLOR(),

  /**
   * 提示文本颜色。
   *
   */
  _ID_TIPS_TEXT_COLOR = STYLE_ID_TIPS_TEXT_COLOR(),

  /**
   * 文本水平对齐的方式。
   *
   */
  _ID_TEXT_ALIGN_H = STYLE_ID_TEXT_ALIGN_H(),

  /**
   * 文本垂直对齐的方式。
   *
   */
  _ID_TEXT_ALIGN_V = STYLE_ID_TEXT_ALIGN_V(),

  /**
   * 边框颜色。
   *
   */
  _ID_BORDER_COLOR = STYLE_ID_BORDER_COLOR(),

  /**
   * 边框线宽。
   *
   */
  _ID_BORDER_WIDTH = STYLE_ID_BORDER_WIDTH(),

  /**
   * 边框类型。
   *
   */
  _ID_BORDER = STYLE_ID_BORDER(),

  /**
   * 图片的名称。
   *
   */
  _ID_BG_IMAGE = STYLE_ID_BG_IMAGE(),

  /**
   * 图片的显示方式。
   *
   */
  _ID_BG_IMAGE_DRAW_TYPE = STYLE_ID_BG_IMAGE_DRAW_TYPE(),

  /**
   * 图标的名称。
   *
   */
  _ID_ICON = STYLE_ID_ICON(),

  /**
   * 图片的名称。
   *
   */
  _ID_FG_IMAGE = STYLE_ID_FG_IMAGE(),

  /**
   * 图片的显示方式。
   *
   */
  _ID_FG_IMAGE_DRAW_TYPE = STYLE_ID_FG_IMAGE_DRAW_TYPE(),

  /**
   * 间距。
   *
   */
  _ID_SPACER = STYLE_ID_SPACER(),

  /**
   * 边距。
   *
   */
  _ID_MARGIN = STYLE_ID_MARGIN(),

  /**
   * 左边距。
   *
   */
  _ID_MARGIN_LEFT = STYLE_ID_MARGIN_LEFT(),

  /**
   * 右边距。
   *
   */
  _ID_MARGIN_RIGHT = STYLE_ID_MARGIN_RIGHT(),

  /**
   * 顶边距。
   *
   */
  _ID_MARGIN_TOP = STYLE_ID_MARGIN_TOP(),

  /**
   * 底边距。
   *
   */
  _ID_MARGIN_BOTTOM = STYLE_ID_MARGIN_BOTTOM(),

  /**
   * 图标的位置。
   *
   */
  _ID_ICON_AT = STYLE_ID_ICON_AT(),

  /**
   * Active图标的名称。
   *
   */
  _ID_ACTIVE_ICON = STYLE_ID_ACTIVE_ICON(),

  /**
   * X方向的偏移，方便实现按下的效果。
   *
   */
  _ID_X_OFFSET = STYLE_ID_X_OFFSET(),

  /**
   * Y方向的偏移，方便实现按下的效果。
   *
   */
  _ID_Y_OFFSET = STYLE_ID_Y_OFFSET(),

  /**
   * 编辑器中选中区域的背景颜色。
   *
   */
  _ID_SELECTED_BG_COLOR = STYLE_ID_SELECTED_BG_COLOR(),

  /**
   * 编辑器中选中区域的前景颜色。
   *
   */
  _ID_SELECTED_FG_COLOR = STYLE_ID_SELECTED_FG_COLOR(),

  /**
   * 编辑器中选中区域的文本颜色。
   *
   */
  _ID_SELECTED_TEXT_COLOR = STYLE_ID_SELECTED_TEXT_COLOR(),

  /**
   * 圆角半径(仅在WITH_VGCANVAS定义时生效)。
   *
   */
  _ID_ROUND_RADIUS = STYLE_ID_ROUND_RADIUS(),

  /**
   * 子控件布局参数。
   *
   */
  _ID_CHILDREN_LAYOUT = STYLE_ID_CHILDREN_LAYOUT(),

  /**
   * 控件布局参数。
   *
   */
  _ID_SELF_LAYOUT = STYLE_ID_SELF_LAYOUT(),
};


/**
 * 控件风格。
 *
 *widget从style对象中，获取诸如字体、颜色和图片相关的参数，根据这些参数来绘制界面。
 *
 *
 *属性名称的请参考[style\_id](style_id_t.md)
 *
 */
class TStyle {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * widget状态改变时，通知style更新数据。
   * 
   * @param widget 控件对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  notifyWidgetStateChanged(widget: TWidget): TRet {
    return style_notify_widget_state_changed(this != null ? (this.nativeObj || this) : null, widget != null ? (widget.nativeObj || widget) : null);
  }


  /**
   * 检查style对象是否有效
   * 
   *
   * @returns 返回是否有效。
   */
  isValid(): boolean {
    return style_is_valid(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取指定name的整数格式的值。
   * 
   * @param name 属性名。
   * @param defval 缺省值。
   *
   * @returns 返回整数格式的值。
   */
  getInt(name: string, defval: number): number {
    return style_get_int(this != null ? (this.nativeObj || this) : null, name, defval);
  }


  /**
   * 获取指定name的字符串格式的值。
   * 
   * @param name 属性名。
   * @param defval 缺省值。
   *
   * @returns 返回字符串格式的值。
   */
  getStr(name: string, defval: string): string {
    return style_get_str(this != null ? (this.nativeObj || this) : null, name, defval);
  }


  /**
   * 设置指定状态的指定属性的值(仅仅对mutable的style有效)。
   * 
   * @param state 状态。
   * @param name 属性名。
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  set(state: string, name: string, value: TValue): TRet {
    return style_set(this != null ? (this.nativeObj || this) : null, state, name, value != null ? (value.nativeObj || value) : null);
  }


  /**
   * 检查style是否是mutable的。
   * 
   *
   * @returns 返回TRUE表示是，否则表示不是。
   */
  isMutable(): boolean {
    return style_is_mutable(this != null ? (this.nativeObj || this) : null);
  }

};
/**
 * 主题。
 *
 *负责管理缺省的主题数据，方便实现style\_const。
 *
 */
class TTheme {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 获取缺省的主题对象。
   * 
   *
   * @returns 返回主题对象。
   */
  static instance(): TTheme {
    return new TTheme(theme());
  }

};
/**
 * 定时器系统。
 *
 *> 本定时器精度较低，最高精度为1000/FPS，如果需要高精度的定时器，请用OS提供的定时器。
 *
 *示例：
 *
 *> 在非GUI线程请用timer\_queue。
 *
 */
class TTimer {

  /**
   * 增加一个timer。
   * 
   * @param on_timer timer回调函数。
   * @param ctx timer回调函数的上下文。
   * @param duration 时间。
   *
   * @returns 返回timer的ID，TK_INVALID_ID表示失败。
   */
  static add(on_timer: Function, ctx: any, duration: number): number {
    return timer_add(on_timer, ctx, duration);
  }


  /**
   * 删除指定的timer。
   * 
   * @param timer_id timerID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static remove(timer_id: number): TRet {
    return timer_remove(timer_id);
  }


  /**
   * 重置指定的timer，重置之后定时器重新开始计时。
   * 
   * @param timer_id timerID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static reset(timer_id: number): TRet {
    return timer_reset(timer_id);
  }


  /**
   * 修改指定的timer的duration，修改之后定时器重新开始计时。
   * 
   * @param timer_id timerID。
   * @param duration 新的时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static modify(timer_id: number, duration: number): TRet {
    return timer_modify(timer_id, duration);
  }

};
/**
 * 垂直对齐的常量定义。
 *
 */
enum TAlignV {

  /**
   * 无效对齐方式。
   *
   */
  NONE = ALIGN_V_NONE(),

  /**
   * 居中对齐。
   *
   */
  MIDDLE = ALIGN_V_MIDDLE(),

  /**
   * 顶部对齐。
   *
   */
  TOP = ALIGN_V_TOP(),

  /**
   * 底部对齐。
   *
   */
  BOTTOM = ALIGN_V_BOTTOM(),
};


/**
 * 水平对齐的常量定义。
 *
 */
enum TAlignH {

  /**
   * 无效对齐方式。
   *
   */
  NONE = ALIGN_H_NONE(),

  /**
   * 居中对齐。
   *
   */
  CENTER = ALIGN_H_CENTER(),

  /**
   * 左边对齐。
   *
   */
  LEFT = ALIGN_H_LEFT(),

  /**
   * 右边对齐。
   *
   */
  RIGHT = ALIGN_H_RIGHT(),
};


/**
 * 应用程序类型。
 *
 */
enum TAppType {

  /**
   * 嵌入式或移动APP
   *
   */
  MOBILE = APP_MOBILE(),

  /**
   * 模拟器。
   *
   */
  SIMULATOR = APP_SIMULATOR(),

  /**
   * 桌面应用程序。
   *
   */
  DESKTOP = APP_DESKTOP(),
};


/**
 * 位图格式常量定义。
 *
 */
enum TBitmapFormat {

  /**
   * 无效格式。
   *
   */
  NONE = BITMAP_FMT_NONE(),

  /**
   * 一个像素占用4个字节，RGBA占一个字节，按内存地址递增。
   *
   */
  RGBA8888 = BITMAP_FMT_RGBA8888(),

  /**
   * 一个像素占用4个字节，ABGR占一个字节，按内存地址递增。
   *
   */
  ABGR8888 = BITMAP_FMT_ABGR8888(),

  /**
   * 一个像素占用4个字节，BGRA占一个字节，按内存地址递增。
   *
   */
  BGRA8888 = BITMAP_FMT_BGRA8888(),

  /**
   * 一个像素占用4个字节，ARGB占一个字节，按内存地址递增。
   *
   */
  ARGB8888 = BITMAP_FMT_ARGB8888(),

  /**
   * 一个像素占用2个字节，RGB分别占用5,6,5位, 按内存地址递增。
   *
   */
  RGB565 = BITMAP_FMT_RGB565(),

  /**
   * 一个像素占用2个字节，BGR分别占用5,6,5位, 按内存地址递增。
   *
   */
  BGR565 = BITMAP_FMT_BGR565(),

  /**
   * 一个像素占用3个字节，RGB占一个字节，按内存地址递增。
   *
   */
  RGB888 = BITMAP_FMT_RGB888(),

  /**
   * 一个像素占用3个字节，RGB占一个字节，按内存地址递增。
   *
   */
  BGR888 = BITMAP_FMT_BGR888(),

  /**
   * 一个像素占用1个字节。
   *
   */
  GRAY = BITMAP_FMT_GRAY(),

  /**
   * 一个像素占用1比特。
   *
   */
  MONO = BITMAP_FMT_MONO(),
};


/**
 * 位图标志常量定义。
 *
 */
enum TBitmapFlag {

  /**
   * 无特殊标志。
   *
   */
  NONE = BITMAP_FLAG_NONE(),

  /**
   * 不透明图片。
   *
   */
  OPAQUE = BITMAP_FLAG_OPAQUE(),

  /**
   * 图片内容不会变化。
   *
   */
  IMMUTABLE = BITMAP_FLAG_IMMUTABLE(),

  /**
   * OpenGL Texture, bitmap的id是有效的texture id。
   *
   */
  TEXTURE = BITMAP_FLAG_TEXTURE(),

  /**
   * 如果是MUTABLE的图片，更新时需要设置此标志，底层可能会做特殊处理，比如更新图片到GPU。
   *
   */
  CHANGED = BITMAP_FLAG_CHANGED(),

  /**
   * 预乘alpha。
   *
   */
  PREMULTI_ALPHA = BITMAP_FLAG_PREMULTI_ALPHA(),
};


/**
 * 矢量图画布抽象基类。
 *
 *具体实现时可以使用agg，nanovg, cairo和skia等方式。
 *
 *cairo和skia体积太大，不适合嵌入式平台，但在PC平台也是一种选择。
 *
 *目前我们只提供了基于nanovg的实现，支持软件渲染和硬件渲染。
 *
 *我们对nanovg进行了一些改进:
 *
 ** 可以用agg/agge实现软件渲染(暂时不支持文本绘制)。
 *
 ** 可以用bgfx使用DirectX(Windows平台)和Metal(iOS)平台硬件加速。
 *
 *
 *
 *示例：
 *
 *
 *>请参考：https://www.w3schools.com/tags/ref_canvas.asp
 *
 */
class TVgcanvas {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 转换为vgcanvas对象(供脚本语言使用)。
   * 
   * @param vg vgcanvas对象。
   *
   * @returns vgcanvas对象。
   */
  static cast(vg: TVgcanvas): TVgcanvas {
    return new TVgcanvas(vgcanvas_cast(vg != null ? (vg.nativeObj || vg) : null));
  }


  /**
   * flush
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  flush(): TRet {
    return vgcanvas_flush(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 清除之前的路径，并重新开始一条路径。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  beginPath(): TRet {
    return vgcanvas_begin_path(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 移动当前点到指定点。
   * 
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  moveTo(x: number, y: number): TRet {
    return vgcanvas_move_to(this != null ? (this.nativeObj || this) : null, x, y);
  }


  /**
   * 生成一条线段(从当前点到目标点)。
   * 
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  lineTo(x: number, y: number): TRet {
    return vgcanvas_line_to(this != null ? (this.nativeObj || this) : null, x, y);
  }


  /**
   * 生成一条二次贝塞尔曲线。
   * 
   * @param cpx 控制点x坐标。
   * @param cpy 控制点y坐标。
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  quadTo(cpx: number, cpy: number, x: number, y: number): TRet {
    return vgcanvas_quad_to(this != null ? (this.nativeObj || this) : null, cpx, cpy, x, y);
  }


  /**
   * 生成一条三次贝塞尔曲线。
   * 
   * @param cp1x 控制点1x坐标。
   * @param cp1y 控制点1y坐标。
   * @param cp2x 控制点2x坐标。
   * @param cp2y 控制点3y坐标。
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  bezierTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): TRet {
    return vgcanvas_bezier_to(this != null ? (this.nativeObj || this) : null, cp1x, cp1y, cp2x, cp2y, x, y);
  }


  /**
   * 生成一条圆弧路径到指定点。
   * 
   * @param x1 起始点x坐标。
   * @param y1 起始点y坐标。
   * @param x2 结束点x坐标。
   * @param y2 结束点y坐标。
   * @param r 半径。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, r: number): TRet {
    return vgcanvas_arc_to(this != null ? (this.nativeObj || this) : null, x1, y1, x2, y2, r);
  }


  /**
   * 生成一条圆弧。
   * 
   * @param x 原点x坐标。
   * @param y 原点y坐标。
   * @param r 半径。
   * @param start_angle 起始角度。
   * @param end_angle 结束角度。
   * @param ccw 是否逆时针。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  arc(x: number, y: number, r: number, start_angle: number, end_angle: number, ccw: boolean): TRet {
    return vgcanvas_arc(this != null ? (this.nativeObj || this) : null, x, y, r, start_angle, end_angle, ccw);
  }


  /**
   * 检查点是否在当前路径中。
   * 
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回TRUE表示在，否则表示不在。
   */
  isPointInPath(x: number, y: number): boolean {
    return vgcanvas_is_point_in_path(this != null ? (this.nativeObj || this) : null, x, y);
  }


  /**
   * 生成一个矩形路径。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  rect(x: number, y: number, w: number, h: number): TRet {
    return vgcanvas_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
  }


  /**
   * 生成一个圆角矩形路径。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   * @param r 圆角半径。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  roundedRect(x: number, y: number, w: number, h: number, r: number): TRet {
    return vgcanvas_rounded_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h, r);
  }


  /**
   * 生成一个椭圆路径。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param rx 圆角半径。
   * @param ry 圆角半径。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  ellipse(x: number, y: number, rx: number, ry: number): TRet {
    return vgcanvas_ellipse(this != null ? (this.nativeObj || this) : null, x, y, rx, ry);
  }


  /**
   * 闭合路径。
   *
   *>闭合路径是指把起点和终点连接起来，形成一个封闭的多边形。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  closePath(): TRet {
    return vgcanvas_close_path(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 旋转。
   * 
   * @param rad 角度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  rotate(rad: number): TRet {
    return vgcanvas_rotate(this != null ? (this.nativeObj || this) : null, rad);
  }


  /**
   * 缩放。
   * 
   * @param x x方向缩放比例。
   * @param y y方向缩放比例。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  scale(x: number, y: number): TRet {
    return vgcanvas_scale(this != null ? (this.nativeObj || this) : null, x, y);
  }


  /**
   * 平移。
   * 
   * @param x x方向偏移。
   * @param y y方向偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  translate(x: number, y: number): TRet {
    return vgcanvas_translate(this != null ? (this.nativeObj || this) : null, x, y);
  }


  /**
   * 变换矩阵。
   * 
   * @param a a
   * @param b b
   * @param c c
   * @param d d
   * @param e e
   * @param f f
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  transform(a: number, b: number, c: number, d: number, e: number, f: number): TRet {
    return vgcanvas_transform(this != null ? (this.nativeObj || this) : null, a, b, c, d, e, f);
  }


  /**
   * 设置变换矩阵。
   * 
   * @param a a
   * @param b b
   * @param c c
   * @param d d
   * @param e e
   * @param f f
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): TRet {
    return vgcanvas_set_transform(this != null ? (this.nativeObj || this) : null, a, b, c, d, e, f);
  }


  /**
   * 矩形裁剪。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  clipRect(x: number, y: number, w: number, h: number): TRet {
    return vgcanvas_clip_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
  }


  /**
   * 填充多边形。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  fill(): TRet {
    return vgcanvas_fill(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 画线。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  stroke(): TRet {
    return vgcanvas_stroke(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 用图片填充/画多边形(可能存在可移植性问题，除非必要请勿使用)。
   *多边形的顶点必须在图片范围内，可以通过矩阵变化画到不同的位置。
   * 
   * @param stroke TRUE表示画线FALSE表示填充。
   * @param img 图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  paint(stroke: boolean, img: TBitmap): TRet {
    return vgcanvas_paint(this != null ? (this.nativeObj || this) : null, stroke, img != null ? (img.nativeObj || img) : null);
  }


  /**
   * 设置字体的名称。
   * 
   * @param font 字体名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFont(font: string): TRet {
    return vgcanvas_set_font(this != null ? (this.nativeObj || this) : null, font);
  }


  /**
   * 设置字体的大小。
   * 
   * @param font 字体大小。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFontSize(font: number): TRet {
    return vgcanvas_set_font_size(this != null ? (this.nativeObj || this) : null, font);
  }


  /**
   * 设置文本水平对齐的方式。
   * 
   * @param value 取值：left|center|right，必须为常量字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTextAlign(value: string): TRet {
    return vgcanvas_set_text_align(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置文本垂直对齐的方式。
   * 
   * @param value 取值：top|middle|bottom，必须为常量字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTextBaseline(value: string): TRet {
    return vgcanvas_set_text_baseline(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 绘制文本。
   * 
   * @param text text
   * @param x x坐标。
   * @param y y坐标。
   * @param max_width 最大宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  fillText(text: string, x: number, y: number, max_width: number): TRet {
    return vgcanvas_fill_text(this != null ? (this.nativeObj || this) : null, text, x, y, max_width);
  }


  /**
   * 测量文本的宽度。
   * 
   * @param text text
   *
   * @returns 返回text的宽度。
   */
  measureText(text: string): number {
    return vgcanvas_measure_text(this != null ? (this.nativeObj || this) : null, text);
  }


  /**
   * 绘制图片。
   * 
   * @param img 图片。
   * @param sx sx
   * @param sy sy
   * @param sw sw
   * @param sh sh
   * @param dx dx
   * @param dy dy
   * @param dw dw
   * @param dh dh
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawImage(img: TBitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): TRet {
    return vgcanvas_draw_image(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, sx, sy, sw, sh, dx, dy, dw, dh);
  }


  /**
   * 绘制图标。
   *
   *绘制图标时会根据屏幕密度进行自动缩放，而绘制普通图片时不会。
   * 
   * @param img 图片。
   * @param sx sx
   * @param sy sy
   * @param sw sw
   * @param sh sh
   * @param dx dx
   * @param dy dy
   * @param dw dw
   * @param dh dh
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawIcon(img: TBitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): TRet {
    return vgcanvas_draw_icon(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, sx, sy, sw, sh, dx, dy, dw, dh);
  }


  /**
   * 设置是否启用反走样。
   * 
   * @param value 是否启用反走样。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAntialias(value: any): TRet {
    return vgcanvas_set_antialias(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置全局透明度。
   * 
   * @param alpha global alpha。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setGlobalAlpha(alpha: number): TRet {
    return vgcanvas_set_global_alpha(this != null ? (this.nativeObj || this) : null, alpha);
  }


  /**
   * 设置线条的宽度。
   * 
   * @param value 线宽。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLineWidth(value: any): TRet {
    return vgcanvas_set_line_width(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置填充颜色。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFillColor(color: string): TRet {
    return vgcanvas_set_fill_color_str(this != null ? (this.nativeObj || this) : null, color);
  }


  /**
   * 设置线条颜色。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setStrokeColor(color: string): TRet {
    return vgcanvas_set_stroke_color_str(this != null ? (this.nativeObj || this) : null, color);
  }


  /**
   * 设置line cap。
   * 
   * @param value 取值：butt|round|square，必须为常量字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLineCap(value: string): TRet {
    return vgcanvas_set_line_cap(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置line join。
   * 
   * @param value 取值：bevel|round|miter，必须为常量字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLineJoin(value: string): TRet {
    return vgcanvas_set_line_join(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置miter limit。
   * 
   * @param value miter limit
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMiterLimit(value: any): TRet {
    return vgcanvas_set_miter_limit(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 保存当前的状态。如颜色和矩阵等信息。
   *
   *> save/restore必须配套使用，否则可能导致状态混乱。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  save(): TRet {
    return vgcanvas_save(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 恢复上次save的状态。
   *
   *> save/restore必须配套使用，否则可能导致状态混乱。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  restore(): TRet {
    return vgcanvas_restore(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * canvas的宽度
   *
   */
  get w(): number {
    return vgcanvas_t_get_prop_w(this.nativeObj);
  }


  /**
   * canvas的高度
   *
   */
  get h(): number {
    return vgcanvas_t_get_prop_h(this.nativeObj);
  }


  /**
   * 一行占的字节
   *
   */
  get stride(): number {
    return vgcanvas_t_get_prop_stride(this.nativeObj);
  }


  /**
   * 显示比例。
   *
   */
  get ratio(): number {
    return vgcanvas_t_get_prop_ratio(this.nativeObj);
  }


  /**
   * 是否启用反走样功能。
   *
   */
  get antiAlias(): boolean {
    return vgcanvas_t_get_prop_anti_alias(this.nativeObj);
  }


  /**
   * 线宽。
   *
   */
  get lineWidth(): number {
    return vgcanvas_t_get_prop_line_width(this.nativeObj);
  }

  set lineWidth(v: number) {
    this.setLineWidth(v);
  }


  /**
   * 全局alpha。
   *
   */
  get globalAlpha(): number {
    return vgcanvas_t_get_prop_global_alpha(this.nativeObj);
  }

  set globalAlpha(v: number) {
    this.setGlobalAlpha(v);
  }


  /**
   * miter\_limit。
   *@see http://www.w3school.com.cn/tags/canvas_miterlimit.asp
   *
   */
  get miterLimit(): number {
    return vgcanvas_t_get_prop_miter_limit(this.nativeObj);
  }

  set miterLimit(v: number) {
    this.setMiterLimit(v);
  }


  /**
   * line\_cap。
   *@see http://www.w3school.com.cn/tags/canvas_linecap.asp
   *
   */
  get lineCap(): string {
    return vgcanvas_t_get_prop_line_cap(this.nativeObj);
  }

  set lineCap(v: string) {
    this.setLineCap(v);
  }


  /**
   * line\_join。
   *@see http://www.w3school.com.cn/tags/canvas_linejoin.asp
   *
   */
  get lineJoin(): string {
    return vgcanvas_t_get_prop_line_join(this.nativeObj);
  }

  set lineJoin(v: string) {
    this.setLineJoin(v);
  }


  /**
   * 字体。
   *
   */
  get font(): string {
    return vgcanvas_t_get_prop_font(this.nativeObj);
  }

  set font(v: string) {
    this.setFont(v);
  }


  /**
   * 字体大小。
   *
   */
  get fontSize(): number {
    return vgcanvas_t_get_prop_font_size(this.nativeObj);
  }

  set fontSize(v: number) {
    this.setFontSize(v);
  }


  /**
   * 文本对齐方式。
   *
   *@see http://www.w3school.com.cn/tags/canvas_textalign.asp
   *
   */
  get textAlign(): string {
    return vgcanvas_t_get_prop_text_align(this.nativeObj);
  }

  set textAlign(v: string) {
    this.setTextAlign(v);
  }


  /**
   * 文本基线。
   *
   *@see http://www.w3school.com.cn/tags/canvas_textbaseline.asp
   *
   */
  get textBaseline(): string {
    return vgcanvas_t_get_prop_text_baseline(this.nativeObj);
  }

  set textBaseline(v: string) {
    this.setTextBaseline(v);
  }

};
/**
 * 控件的属性。
 *
 */
enum TWidgetProp {

  /**
   * 用于执行某些特殊的命令（比如控制动画的启停），主要是方便MVVM通过属性来控制动画。
   *
   */
  EXEC = WIDGET_PROP_EXEC(),

  /**
   * X坐标。
   *
   */
  X = WIDGET_PROP_X(),

  /**
   * Y坐标。
   *
   */
  Y = WIDGET_PROP_Y(),

  /**
   * 宽度。
   *
   */
  W = WIDGET_PROP_W(),

  /**
   * 高度。
   *
   */
  H = WIDGET_PROP_H(),

  /**
   * Canvas。
   *
   */
  CANVAS = WIDGET_PROP_CANVAS(),

  /**
   * Canvas。
   *
   */
  LOCALIZE_OPTIONS = WIDGET_PROP_LOCALIZE_OPTIONS(),

  /**
   * Native Window。
   *
   */
  NATIVE_WINDOW = WIDGET_PROP_NATIVE_WINDOW(),

  /**
   * dialog highlight。
   *
   */
  HIGHLIGHT = WIDGET_PROP_HIGHLIGHT(),

  /**
   * slider中的bar的的宽度或高度。
   *
   */
  BAR_SIZE = WIDGET_PROP_BAR_SIZE(),

  /**
   * 不透明度。
   *
   */
  OPACITY = WIDGET_PROP_OPACITY(),

  /**
   * 最小宽度。
   *
   */
  MIN_W = WIDGET_PROP_MIN_W(),

  /**
   * 最大宽度。
   *
   */
  MAX_W = WIDGET_PROP_MAX_W(),

  /**
   * 子控件布局参数。
   *
   */
  CHILDREN_LAYOUT = WIDGET_PROP_CHILDREN_LAYOUT(),

  /**
   * 子控件布局参数(过时)。
   *
   */
  LAYOUT = WIDGET_PROP_LAYOUT(),

  /**
   * 控件布局参数。
   *
   */
  SELF_LAYOUT = WIDGET_PROP_SELF_LAYOUT(),

  /**
   * layout宽度。
   *
   */
  LAYOUT_W = WIDGET_PROP_LAYOUT_W(),

  /**
   * layout高度。
   *
   */
  LAYOUT_H = WIDGET_PROP_LAYOUT_H(),

  /**
   * 虚拟宽度。
   *
   */
  VIRTUAL_W = WIDGET_PROP_VIRTUAL_W(),

  /**
   * 虚拟高度。
   *
   */
  VIRTUAL_H = WIDGET_PROP_VIRTUAL_H(),

  /**
   * 名称。
   *
   */
  NAME = WIDGET_PROP_NAME(),

  /**
   * 类型。
   *
   */
  TYPE = WIDGET_PROP_TYPE(),

  /**
   * 是否可以关闭。
   *
   */
  CLOSABLE = WIDGET_PROP_CLOSABLE(),

  /**
   * 鼠标指针。
   *
   */
  CURSOR = WIDGET_PROP_CURSOR(),

  /**
   * 值。
   *
   */
  VALUE = WIDGET_PROP_VALUE(),

  /**
   * 长度。
   *
   */
  LENGTH = WIDGET_PROP_LENGTH(),

  /**
   * 文本。
   *
   */
  TEXT = WIDGET_PROP_TEXT(),

  /**
   * 待翻译文本。
   *
   */
  TR_TEXT = WIDGET_PROP_TR_TEXT(),

  /**
   * style。
   *
   */
  STYLE = WIDGET_PROP_STYLE(),

  /**
   * 是否启用。
   *
   */
  ENABLE = WIDGET_PROP_ENABLE(),

  /**
   * 是否启用按键音等反馈。
   *
   */
  FEEDBACK = WIDGET_PROP_FEEDBACK(),

  /**
   * 是否启用floating布局。
   *
   */
  FLOATING = WIDGET_PROP_FLOATING(),

  /**
   * 边距。
   *
   */
  MARGIN = WIDGET_PROP_MARGIN(),

  /**
   * 间距。
   *
   */
  SPACING = WIDGET_PROP_SPACING(),

  /**
   * 左边距。
   *
   */
  LEFT_MARGIN = WIDGET_PROP_LEFT_MARGIN(),

  /**
   * 右边距。
   *
   */
  RIGHT_MARGIN = WIDGET_PROP_RIGHT_MARGIN(),

  /**
   * 顶边距。
   *
   */
  TOP_MARGIN = WIDGET_PROP_TOP_MARGIN(),

  /**
   * 底边距。
   *
   */
  BOTTOM_MARGIN = WIDGET_PROP_BOTTOM_MARGIN(),

  /**
   * 步长。
   *
   */
  STEP = WIDGET_PROP_STEP(),

  /**
   * 是否可见。
   *
   */
  VISIBLE = WIDGET_PROP_VISIBLE(),

  /**
   * 是否接受用户事件。
   *
   */
  SENSITIVE = WIDGET_PROP_SENSITIVE(),

  /**
   * 控件动画。
   *
   */
  ANIMATION = WIDGET_PROP_ANIMATION(),

  /**
   * 窗口动画。
   *
   */
  ANIM_HINT = WIDGET_PROP_ANIM_HINT(),

  /**
   * 窗口设置为全部大小。
   *
   */
  FULLSCREEN = WIDGET_PROP_FULLSCREEN(),

  /**
   * 打开窗口动画。
   *
   */
  OPEN_ANIM_HINT = WIDGET_PROP_OPEN_ANIM_HINT(),

  /**
   * 关闭窗口动画。
   *
   */
  CLOSE_ANIM_HINT = WIDGET_PROP_CLOSE_ANIM_HINT(),

  /**
   * 最小值。
   *
   */
  MIN = WIDGET_PROP_MIN(),

  /**
   * 提示信息。
   *
   */
  TIPS = WIDGET_PROP_TIPS(),

  /**
   * 输入类型。
   *
   */
  INPUT_TYPE = WIDGET_PROP_INPUT_TYPE(),

  /**
   * 只读模式。
   *
   */
  READONLY = WIDGET_PROP_READONLY(),

  /**
   * 密码是否可见。
   *
   */
  PASSWORD_VISIBLE = WIDGET_PROP_PASSWORD_VISIBLE(),

  /**
   * 是否处于active状态。
   *
   */
  ACTIVE = WIDGET_PROP_ACTIVE(),

  /**
   * 是否为垂直模式。
   *
   */
  VERTICAL = WIDGET_PROP_VERTICAL(),

  /**
   * 是否显示文本。
   *
   */
  SHOW_TEXT = WIDGET_PROP_SHOW_TEXT(),

  /**
   * X方向的偏移。
   *
   */
  XOFFSET = WIDGET_PROP_XOFFSET(),

  /**
   * Y方向的偏移。
   *
   */
  YOFFSET = WIDGET_PROP_YOFFSET(),

  /**
   * 垂直对齐模式。
   *
   */
  ALIGN_V = WIDGET_PROP_ALIGN_V(),

  /**
   * 水平对齐模式。
   *
   */
  ALIGN_H = WIDGET_PROP_ALIGN_H(),

  /**
   * 是否自动播放或指定播放的时间。
   *
   */
  AUTO_PLAY = WIDGET_PROP_AUTO_PLAY(),

  /**
   * 是否循环播放或循环播放的次数。
   *
   */
  LOOP = WIDGET_PROP_LOOP(),

  /**
   * 是否启用自动更正功能。
   *
   */
  AUTO_FIX = WIDGET_PROP_AUTO_FIX(),

  /**
   * 编辑器在获得焦点时是否不选中文本。
   *
   */
  SELECT_NONE_WHEN_FOCUSED = WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED(),

  /**
   * 编辑器在获得焦点时是否打开输入法。
   *
   */
  OPEN_IM_WHEN_FOCUSED = WIDGET_PROP_OPEN_IM_WHEN_FOCUSED(),

  /**
   * X最小值。
   *
   */
  X_MIN = WIDGET_PROP_X_MIN(),

  /**
   * X最大值。
   *
   */
  X_MAX = WIDGET_PROP_X_MAX(),

  /**
   * Y最小值。
   *
   */
  Y_MIN = WIDGET_PROP_Y_MIN(),

  /**
   * Y最大值。
   *
   */
  Y_MAX = WIDGET_PROP_Y_MAX(),

  /**
   * 最大值。
   *
   */
  MAX = WIDGET_PROP_MAX(),

  /**
   * 让窗口管理器直接把按键发给自己。
   *
   */
  GRAB_KEYS = WIDGET_PROP_GRAB_KEYS(),

  /**
   * 行数或每行的高度。
   *
   */
  ROW = WIDGET_PROP_ROW(),

  /**
   * 控件状态。
   *
   */
  STATE_FOR_STYLE = WIDGET_PROP_STATE_FOR_STYLE(),

  /**
   * 窗口主题名称。
   *
   */
  THEME = WIDGET_PROP_THEME(),

  /**
   * window stage
   *
   */
  STAGE = WIDGET_PROP_STAGE(),

  /**
   * 图片管理器。
   *
   */
  IMAGE_MANAGER = WIDGET_PROP_IMAGE_MANAGER(),

  /**
   * 资源管理器。
   *
   */
  ASSETS_MANAGER = WIDGET_PROP_ASSETS_MANAGER(),

  /**
   * locale_info。
   *
   */
  LOCALE_INFO = WIDGET_PROP_LOCALE_INFO(),

  /**
   * 字体管理器。
   *
   */
  FONT_MANAGER = WIDGET_PROP_FONT_MANAGER(),

  /**
   * 窗口的主题对象。
   *
   */
  THEME_OBJ = WIDGET_PROP_THEME_OBJ(),

  /**
   * 缺省的主题对象。
   *
   */
  DEFAULT_THEME_OBJ = WIDGET_PROP_DEFAULT_THEME_OBJ(),

  /**
   * 项的宽度。
   *
   */
  ITEM_WIDTH = WIDGET_PROP_ITEM_WIDTH(),

  /**
   * 项的高度。
   *
   */
  ITEM_HEIGHT = WIDGET_PROP_ITEM_HEIGHT(),

  /**
   * 项的缺省高度。
   *
   */
  DEFAULT_ITEM_HEIGHT = WIDGET_PROP_DEFAULT_ITEM_HEIGHT(),

  /**
   * X方向是否可拖动。
   *
   */
  XSLIDABLE = WIDGET_PROP_XSLIDABLE(),

  /**
   * Y方向是否可拖动。
   *
   */
  YSLIDABLE = WIDGET_PROP_YSLIDABLE(),

  /**
   * 重复次数。
   *
   */
  REPEAT = WIDGET_PROP_REPEAT(),

  /**
   * 是否启用长按。
   *
   */
  ENABLE_LONG_PRESS = WIDGET_PROP_ENABLE_LONG_PRESS(),

  /**
   * 是否启用动画。
   *
   */
  ANIMATABLE = WIDGET_PROP_ANIMATABLE(),

  /**
   * 是否自动隐藏滚动条。
   *
   */
  AUTO_HIDE_SCROLL_BAR = WIDGET_PROP_AUTO_HIDE_SCROLL_BAR(),

  /**
   * 图片名称。
   *
   */
  IMAGE = WIDGET_PROP_IMAGE(),

  /**
   * 显示格式。
   *
   */
  FORMAT = WIDGET_PROP_FORMAT(),

  /**
   * 图片绘制类型。
   *
   */
  DRAW_TYPE = WIDGET_PROP_DRAW_TYPE(),

  /**
   * 是否可选择。
   *
   */
  SELECTABLE = WIDGET_PROP_SELECTABLE(),

  /**
   * 是否可点击。
   *
   */
  CLICKABLE = WIDGET_PROP_CLICKABLE(),

  /**
   * X方向缩放比例。
   *
   */
  SCALE_X = WIDGET_PROP_SCALE_X(),

  /**
   * Y方向缩放比例。
   *
   */
  SCALE_Y = WIDGET_PROP_SCALE_Y(),

  /**
   * x锚点。
   *
   */
  ANCHOR_X = WIDGET_PROP_ANCHOR_X(),

  /**
   * y锚点。
   *
   */
  ANCHOR_Y = WIDGET_PROP_ANCHOR_Y(),

  /**
   * 选中角度(幅度)
   *
   */
  ROTATION = WIDGET_PROP_ROTATION(),

  /**
   * 紧凑模式。
   *
   */
  COMPACT = WIDGET_PROP_COMPACT(),

  /**
   * 是否支持滚动。
   *
   */
  SCROLLABLE = WIDGET_PROP_SCROLLABLE(),

  /**
   * 图标名称。
   *
   */
  ICON = WIDGET_PROP_ICON(),

  /**
   * 选项集合。
   *
   */
  OPTIONS = WIDGET_PROP_OPTIONS(),

  /**
   * 是否被选中。
   *
   */
  SELECTED = WIDGET_PROP_SELECTED(),

  /**
   * 是否被勾选。
   *
   */
  CHECKED = WIDGET_PROP_CHECKED(),

  /**
   * active状态下的图标。
   *
   */
  ACTIVE_ICON = WIDGET_PROP_ACTIVE_ICON(),

  /**
   * 动态加载UI名字。
   *
   */
  LOAD_UI = WIDGET_PROP_LOAD_UI(),

  /**
   * 要打开窗口的名称。
   *
   */
  OPEN_WINDOW = WIDGET_PROP_OPEN_WINDOW(),

  /**
   * 被选中项的索引。
   *
   */
  SELECTED_INDEX = WIDGET_PROP_SELECTED_INDEX(),

  /**
   * 点击窗口时关闭窗口。
   *
   */
  CLOSE_WHEN_CLICK = WIDGET_PROP_CLOSE_WHEN_CLICK(),

  /**
   * 点击窗口外部时关闭窗口。
   *
   */
  CLOSE_WHEN_CLICK_OUTSIDE = WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE(),

  /**
   * 行间距。
   *
   */
  LINE_GAP = WIDGET_PROP_LINE_GAP(),

  /**
   * 背景颜色(仅仅使用于color tile)。
   *
   */
  BG_COLOR = WIDGET_PROP_BG_COLOR(),

  /**
   * 边框颜色(仅仅使用于color tile)。
   *
   */
  BORDER_COLOR = WIDGET_PROP_BORDER_COLOR(),

  /**
   * 延迟时间(毫秒)
   *
   */
  DELAY = WIDGET_PROP_DELAY(),

  /**
   * 是否为键盘。
   *
   */
  IS_KEYBOARD = WIDGET_PROP_IS_KEYBOARD(),

  /**
   * 是否为焦点控件。
   *
   */
  FOCUSED = WIDGET_PROP_FOCUSED(),

  /**
   * (过时请用focused)。
   *
   */
  FOCUS = WIDGET_PROP_FOCUS(),

  /**
   * 是否支持焦点停留。
   *
   */
  FOCUSABLE = WIDGET_PROP_FOCUSABLE(),

  /**
   * 是否支持焦点状态(如果希望style支持焦点状态，但有不希望焦点停留，可用本属性)。
   *
   */
  WITH_FOCUS_STATE = WIDGET_PROP_WITH_FOCUS_STATE(),

  /**
   * 将焦点移到前一个的键值。
   *
   */
  MOVE_FOCUS_PREV_KEY = WIDGET_PROP_MOVE_FOCUS_PREV_KEY(),

  /**
   * 将焦点移到后一个的键值。
   *
   */
  MOVE_FOCUS_NEXT_KEY = WIDGET_PROP_MOVE_FOCUS_NEXT_KEY(),

  /**
   * 将焦点向上移动的键值。
   *
   */
  MOVE_FOCUS_UP_KEY = WIDGET_PROP_MOVE_FOCUS_UP_KEY(),

  /**
   * 将焦点向下移动的键值。
   *
   */
  MOVE_FOCUS_DOWN_KEY = WIDGET_PROP_MOVE_FOCUS_DOWN_KEY(),

  /**
   * 将焦点向左移动的键值。
   *
   */
  MOVE_FOCUS_LEFT_KEY = WIDGET_PROP_MOVE_FOCUS_LEFT_KEY(),

  /**
   * 将焦点向右移动的键值。
   *
   */
  MOVE_FOCUS_RIGHT_KEY = WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY(),
};


/**
 * 控件的类型。
 *
 */
enum TWidgetType {

  /**
   * 无特殊类型。
   *
   */
  NONE = WIDGET_TYPE_NONE(),

  /**
   * 窗口管理器。
   *
   */
  WINDOW_MANAGER = WIDGET_TYPE_WINDOW_MANAGER(),

  /**
   * 普通窗口。
   *
   */
  NORMAL_WINDOW = WIDGET_TYPE_NORMAL_WINDOW(),

  /**
   * overlay窗口。
   *
   */
  OVERLAY = WIDGET_TYPE_OVERLAY(),

  /**
   * 工具条。
   *
   */
  TOOL_BAR = WIDGET_TYPE_TOOL_BAR(),

  /**
   * 对话框。
   *
   */
  DIALOG = WIDGET_TYPE_DIALOG(),

  /**
   * 弹出窗口。
   *
   */
  POPUP = WIDGET_TYPE_POPUP(),

  /**
   * system bar window
   *
   */
  SYSTEM_BAR = WIDGET_TYPE_SYSTEM_BAR(),

  /**
   * system bar window ato bottom
   *
   */
  SYSTEM_BAR_BOTTOM = WIDGET_TYPE_SYSTEM_BAR_BOTTOM(),

  /**
   * 精灵窗口。
   *
   */
  SPRITE = WIDGET_TYPE_SPRITE(),

  /**
   * 键盘窗口。
   *
   */
  KEYBOARD = WIDGET_TYPE_KEYBOARD(),

  /**
   * 拖放状态窗口。
   *
   */
  DND = WIDGET_TYPE_DND(),

  /**
   * 文本控件。
   *
   */
  LABEL = WIDGET_TYPE_LABEL(),

  /**
   * 按钮控件。
   *
   */
  BUTTON = WIDGET_TYPE_BUTTON(),

  /**
   * 图片控件。
   *
   */
  IMAGE = WIDGET_TYPE_IMAGE(),

  /**
   * 文本编辑控件。
   *
   */
  EDIT = WIDGET_TYPE_EDIT(),

  /**
   * 进度条控件。
   *
   */
  PROGRESS_BAR = WIDGET_TYPE_PROGRESS_BAR(),

  /**
   * 分组控件。
   *
   */
  GROUP_BOX = WIDGET_TYPE_GROUP_BOX(),

  /**
   * 多选按钮控件。
   *
   */
  CHECK_BUTTON = WIDGET_TYPE_CHECK_BUTTON(),

  /**
   * 单选按钮控件。
   *
   */
  RADIO_BUTTON = WIDGET_TYPE_RADIO_BUTTON(),

  /**
   * 对话框标题。
   *
   */
  DIALOG_TITLE = WIDGET_TYPE_DIALOG_TITLE(),

  /**
   * 对话框客户区域。
   *
   */
  DIALOG_CLIENT = WIDGET_TYPE_DIALOG_CLIENT(),

  /**
   * 滑块控件。
   *
   */
  SLIDER = WIDGET_TYPE_SLIDER(),

  /**
   * 视图控件。
   *
   */
  VIEW = WIDGET_TYPE_VIEW(),

  /**
   * 下拉选择框控件。
   *
   */
  COMBO_BOX = WIDGET_TYPE_COMBO_BOX(),

  /**
   * 下拉选择框的列表项控件。
   *
   */
  COMBO_BOX_ITEM = WIDGET_TYPE_COMBO_BOX_ITEM(),

  /**
   * 滑动视图控件。
   *
   */
  SLIDE_VIEW = WIDGET_TYPE_SLIDE_VIEW(),

  /**
   * 滑动视图的指示器控件。
   *
   */
  SLIDE_INDICATOR = WIDGET_TYPE_SLIDE_INDICATOR(),

  /**
   * 滑动视图的指示器控件（圆弧显示）。
   *
   */
  SLIDE_INDICATOR_ARC = WIDGET_TYPE_SLIDE_INDICATOR_ARC(),

  /**
   * 多页控件。
   *
   */
  PAGES = WIDGET_TYPE_PAGES(),

  /**
   * 标签按钮控件。
   *
   */
  TAB_BUTTON = WIDGET_TYPE_TAB_BUTTON(),

  /**
   * 标签控件。
   *
   */
  TAB_CONTROL = WIDGET_TYPE_TAB_CONTROL(),

  /**
   * 标签按钮分组控件。
   *
   */
  TAB_BUTTON_GROUP = WIDGET_TYPE_TAB_BUTTON_GROUP(),

  /**
   * 按钮分组控件。
   *
   */
  BUTTON_GROUP = WIDGET_TYPE_BUTTON_GROUP(),

  /**
   * 候选字控件。
   *
   */
  CANDIDATES = WIDGET_TYPE_CANDIDATES(),

  /**
   * 数值编辑控件。
   *
   */
  SPIN_BOX = WIDGET_TYPE_SPIN_BOX(),

  /**
   * 拖动块控件。
   *
   */
  DRAGGER = WIDGET_TYPE_DRAGGER(),

  /**
   * 滚动条控件。
   *
   */
  SCROLL_BAR = WIDGET_TYPE_SCROLL_BAR(),

  /**
   * 桌面版滚动条控件。
   *
   */
  SCROLL_BAR_DESKTOP = WIDGET_TYPE_SCROLL_BAR_DESKTOP(),

  /**
   * 移动版滚动条控件。
   *
   */
  SCROLL_BAR_MOBILE = WIDGET_TYPE_SCROLL_BAR_MOBILE(),

  /**
   * 滚动视图控件。
   *
   */
  SCROLL_VIEW = WIDGET_TYPE_SCROLL_VIEW(),

  /**
   * 列表视图控件。
   *
   */
  LIST_VIEW = WIDGET_TYPE_LIST_VIEW(),

  /**
   * 水平列表视图控件。
   *
   */
  LIST_VIEW_H = WIDGET_TYPE_LIST_VIEW_H(),

  /**
   * 列表项控件。
   *
   */
  LIST_ITEM = WIDGET_TYPE_LIST_ITEM(),

  /**
   * 颜色选择器控件。
   *
   */
  COLOR_PICKER = WIDGET_TYPE_COLOR_PICKER(),

  /**
   * 颜色选择器组件控件。
   *
   */
  COLOR_COMPONENT = WIDGET_TYPE_COLOR_COMPONENT(),

  /**
   * 颜色块控件。
   *
   */
  COLOR_TILE = WIDGET_TYPE_COLOR_TILE(),

  /**
   * 裁剪控件。
   *
   */
  CLIP_VIEW = WIDGET_TYPE_CLIP_VIEW(),

  /**
   * 富文本控件。
   *
   */
  RICH_TEXT = WIDGET_TYPE_RICH_TEXT(),

  /**
   * AppBar控件。
   *
   */
  APP_BAR = WIDGET_TYPE_APP_BAR(),

  /**
   * 网格控件。
   *
   */
  GRID = WIDGET_TYPE_GRID(),

  /**
   * 网格项目控件。
   *
   */
  GRID_ITEM = WIDGET_TYPE_GRID_ITEM(),

  /**
   * 行控件。
   *
   */
  ROW = WIDGET_TYPE_ROW(),

  /**
   * 列控件。
   *
   */
  COLUMN = WIDGET_TYPE_COLUMN(),

  /**
   * 电阻屏校准窗口。
   *
   */
  CALIBRATION_WIN = WIDGET_TYPE_CALIBRATION_WIN(),
};


/**
 * 窗口的生命周期常量定义。
 *
 */
enum TWindowStage {

  /**
   * 初始状态。
   *
   */
  NONE = WINDOW_STAGE_NONE(),

  /**
   * 创建完成。
   *
   */
  CREATED = WINDOW_STAGE_CREATED(),

  /**
   * 窗口已经打开(窗口打开动画完成后，处于该状态，直到窗口被关闭)
   *
   */
  OPENED = WINDOW_STAGE_OPENED(),

  /**
   * 窗口已关闭。
   *
   */
  CLOSED = WINDOW_STAGE_CLOSED(),
};


/**
 * 窗口的closable常量定义。
 *
 */
enum TWindowClosable {

  /**
   * 窗口可关闭。
   *
   */
  YES = WINDOW_CLOSABLE_YES(),

  /**
   * 窗口不可关闭。
   *
   */
  NO = WINDOW_CLOSABLE_NO(),

  /**
   * 窗口需要确认后才能关闭。
   *
   */
  CONFIRM = WINDOW_CLOSABLE_CONFIRM(),
};


/**
 * 控件状态常量定义。
 *
 *这里指定常用的状态值，扩展控件可以在自己的头文件中定义私有的状态。
 *
 */
enum TWidgetState {

  /**
   * 无效状态。
   *
   */
  STATE_NONE = WIDGET_STATE_NONE(),

  /**
   * 正常状态。
   *
   */
  STATE_NORMAL = WIDGET_STATE_NORMAL(),

  /**
   * 指针按下状态。
   *
   */
  STATE_PRESSED = WIDGET_STATE_PRESSED(),

  /**
   * 指针悬浮状态。
   *
   */
  STATE_OVER = WIDGET_STATE_OVER(),

  /**
   * 禁用状态。
   *
   */
  STATE_DISABLE = WIDGET_STATE_DISABLE(),

  /**
   * 聚焦状态。
   *
   */
  STATE_FOCUSED = WIDGET_STATE_FOCUSED(),

  /**
   * 勾选状态。
   *
   */
  STATE_CHECKED = WIDGET_STATE_CHECKED(),

  /**
   * 没勾选状态。
   *
   */
  STATE_UNCHECKED = WIDGET_STATE_UNCHECKED(),

  /**
   * 编辑器无内容状态。
   *
   */
  STATE_EMPTY = WIDGET_STATE_EMPTY(),

  /**
   * 编辑器无内容同时聚焦的状态。
   *
   */
  STATE_EMPTY_FOCUS = WIDGET_STATE_EMPTY_FOCUS(),

  /**
   * 输入错误状态。
   *
   */
  STATE_ERROR = WIDGET_STATE_ERROR(),

  /**
   * 选中状态。
   *
   */
  STATE_SELECTED = WIDGET_STATE_SELECTED(),

  /**
   * 正常状态(选中项)。
   *
   */
  STATE_NORMAL_OF_CHECKED = WIDGET_STATE_NORMAL_OF_CHECKED(),

  /**
   * 指针按下状态(选中项)。
   *
   */
  STATE_PRESSED_OF_CHECKED = WIDGET_STATE_PRESSED_OF_CHECKED(),

  /**
   * 指针悬浮状态(选中项)。
   *
   */
  STATE_OVER_OF_CHECKED = WIDGET_STATE_OVER_OF_CHECKED(),

  /**
   * 焦点状态(选中项)。
   *
   */
  STATE_FOCUSED_OF_CHECKED = WIDGET_STATE_FOCUSED_OF_CHECKED(),

  /**
   * 正常状态(当前项)。
   *
   */
  STATE_NORMAL_OF_ACTIVE = WIDGET_STATE_NORMAL_OF_ACTIVE(),

  /**
   * 指针按下状态(当前项)。
   *
   */
  STATE_PRESSED_OF_ACTIVE = WIDGET_STATE_PRESSED_OF_ACTIVE(),

  /**
   * 指针悬浮状态(当前项)。
   *
   */
  STATE_OVER_OF_ACTIVE = WIDGET_STATE_OVER_OF_ACTIVE(),

  /**
   * 焦点状态(当前项)。
   *
   */
  STATE_FOCUSED_OF_ACTIVE = WIDGET_STATE_FOCUSED_OF_ACTIVE(),
};


/**
 * widget_t* button = button_create(win, 10, 10, 128, 30);
 *widget_set_text(button, L"OK");
 *widget_on(button, EVT_CLICK, on_click, NULL);
 *```
 *
 */
class TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 获取子控件的个数。
   * 
   *
   * @returns 子控件的个数。
   */
  countChildren(): number {
    return widget_count_children(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取指定索引的子控件。
   * 
   * @param index 索引。
   *
   * @returns 子控件。
   */
  getChild(index: number): TWidget {
    return new TWidget(widget_get_child(this != null ? (this.nativeObj || this) : null, index));
  }


  /**
   * 获取控件在父控件中的索引编号。
   * 
   *
   * @returns 在父控件中的索引编号。
   */
  indexOf(): number {
    return widget_index_of(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 移动控件。
   * 
   * @param x x坐标
   * @param y y坐标
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  move(x: number, y: number): TRet {
    return widget_move(this != null ? (this.nativeObj || this) : null, x, y);
  }


  /**
   * 调整控件的大小。
   * 
   * @param w 宽度
   * @param h 高度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  resize(w: number, h: number): TRet {
    return widget_resize(this != null ? (this.nativeObj || this) : null, w, h);
  }


  /**
   * 移动控件并调整控件的大小。
   * 
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  moveResize(x: number, y: number, w: number, h: number): TRet {
    return widget_move_resize(this != null ? (this.nativeObj || this) : null, x, y, w, h);
  }


  /**
   * 设置控件的值。
   *只是对widget\_set\_prop的包装，值的意义由子类控件决定。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return widget_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置控件的值(以动画形式变化到指定的值)。
   *只是对widget\_set\_prop的包装，值的意义由子类控件决定。
   * 
   * @param value 值。
   * @param duration 动画持续时间(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  animateValueTo(value: any, duration: number): TRet {
    return widget_animate_value_to(this != null ? (this.nativeObj || this) : null, value, duration);
  }


  /**
   * 增加控件的值。
   *只是对widget\_set\_prop的包装，值的意义由子类控件决定。
   * 
   * @param delta 增量。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  addValue(delta: number): TRet {
    return widget_add_value(this != null ? (this.nativeObj || this) : null, delta);
  }


  /**
   * 启用指定的主题。
   * 
   * @param style style的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  useStyle(style: string): TRet {
    return widget_use_style(this != null ? (this.nativeObj || this) : null, style);
  }


  /**
   * 设置控件的文本。
   *只是对widget\_set\_prop的包装，文本的意义由子类控件决定。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setText(text: string): TRet {
    return widget_set_text_utf8(this != null ? (this.nativeObj || this) : null, text);
  }


  /**
   * 获取翻译之后的文本，然后调用widget_set_text。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTrText(text: string): TRet {
    return widget_set_tr_text(this != null ? (this.nativeObj || this) : null, text);
  }


  /**
   * 获取控件的值。只是对widget\_get\_prop的包装，值的意义由子类控件决定。
   * 
   *
   * @returns 返回值。
   */
  getValue(): number {
    return widget_get_value(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取控件的文本。
   *只是对widget\_get\_prop的包装，文本的意义由子类控件决定。
   * 
   *
   * @returns 返回文本。
   */
  getText(): any {
    return widget_get_text(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置控件的名称。
   * 
   * @param name 名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setName(name: string): TRet {
    return widget_set_name(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置theme的名称，用于动态切换主题。名称与当前主题名称相同，则重新加载全部资源。
   *
   *> 目前只支持带有文件系统的平台。
   * 
   * @param name 主题的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTheme(name: string): TRet {
    return widget_set_theme(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置鼠标指针的图片名。
   * 
   * @param cursor 图片名称(无扩展名)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPointerCursor(cursor: string): TRet {
    return widget_set_pointer_cursor(this != null ? (this.nativeObj || this) : null, cursor);
  }


  /**
   * 设置控件的动画参数(仅用于在UI文件使用)。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   * 
   * @param animation 动画参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAnimation(animation: string): TRet {
    return widget_set_animation(this != null ? (this.nativeObj || this) : null, animation);
  }


  /**
   * 创建动画。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 除非指定auto_start=false，动画创建后自动启动。
   ** 除非指定auto_destroy=false，动画播放完成后自动销毁。
   * 
   * @param animation 动画参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  createAnimator(animation: string): TRet {
    return widget_create_animator(this != null ? (this.nativeObj || this) : null, animation);
  }


  /**
   * 播放动画。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，播放所有名称为name的动画。
   ** 2.name为NULL时，播放所有widget相关的动画。
   ** 3.widget和name均为NULL，播放所有动画。
   * 
   * @param name 动画名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  startAnimator(name: string): TRet {
    return widget_start_animator(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置动画的时间倍率，<0: 时间倒退，<1: 时间变慢，>1 时间变快。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，设置所有名称为name的动画的时间倍率。
   ** 2.name为NULL时，设置所有widget相关的动画的时间倍率。
   ** 3.widget和name均为NULL，设置所有动画的时间倍率。
   * 
   * @param name 动画名称。
   * @param time_scale 时间倍率。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAnimatorTimeScale(name: string, time_scale: number): TRet {
    return widget_set_animator_time_scale(this != null ? (this.nativeObj || this) : null, name, time_scale);
  }


  /**
   * 暂停动画。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，暂停所有名称为name的动画。
   ** 2.name为NULL时，暂停所有widget相关的动画。
   ** 3.widget和name均为NULL，暂停所有动画。
   * 
   * @param name 动画名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  pauseAnimator(name: string): TRet {
    return widget_pause_animator(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 停止动画(控件的相应属性回归原位)。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，停止所有名称为name的动画。
   ** 2.name为NULL时，停止所有widget相关的动画。
   ** 3.widget和name均为NULL，停止所有动画。
   * 
   * @param name 动画名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  stopAnimator(name: string): TRet {
    return widget_stop_animator(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 销毁动画。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，销毁所有名称为name的动画。
   ** 2.name为NULL时，销毁所有widget相关的动画。
   ** 3.widget和name均为NULL，销毁所有动画。
   * 
   * @param name 动画名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroyAnimator(name: string): TRet {
    return widget_destroy_animator(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置控件的可用性。
   * 
   * @param enable 是否可用性。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setEnable(enable: boolean): TRet {
    return widget_set_enable(this != null ? (this.nativeObj || this) : null, enable);
  }


  /**
   * 设置控件是否启用反馈。
   * 
   * @param feedback 是否启用反馈。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFeedback(feedback: boolean): TRet {
    return widget_set_feedback(this != null ? (this.nativeObj || this) : null, feedback);
  }


  /**
   * 设置控件的floating标志。
   *> floating的控件不受父控件的子控件布局参数的影响。
   * 
   * @param floating 是否启用floating布局。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFloating(floating: boolean): TRet {
    return widget_set_floating(this != null ? (this.nativeObj || this) : null, floating);
  }


  /**
   * 设置控件是否获得焦点。
   * 
   * @param focused 是否获得焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFocused(focused: boolean): TRet {
    return widget_set_focused(this != null ? (this.nativeObj || this) : null, focused);
  }


  /**
   * 设置控件是否可获得焦点。
   * 
   * @param focusable 是否可获得焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFocusable(focusable: boolean): TRet {
    return widget_set_focusable(this != null ? (this.nativeObj || this) : null, focusable);
  }


  /**
   * 设置控件的状态。
   * 
   * @param state 状态(必须为真正的常量字符串，在widget的整个生命周期有效)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setState(state: string): TRet {
    return widget_set_state(this != null ? (this.nativeObj || this) : null, state);
  }


  /**
   * 设置控件的不透明度。
   *
   *>在嵌入式平台，半透明效果会使性能大幅下降，请谨慎使用。
   * 
   * @param opacity 不透明度(取值0-255，0表示完全透明，255表示完全不透明)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setOpacity(opacity: number): TRet {
    return widget_set_opacity(this != null ? (this.nativeObj || this) : null, opacity);
  }


  /**
   * 销毁全部子控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroyChildren(): TRet {
    return widget_destroy_children(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 加入一个子控件。
   * 
   * @param child 子控件对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  addChild(child: TWidget): TRet {
    return widget_add_child(this != null ? (this.nativeObj || this) : null, child != null ? (child.nativeObj || child) : null);
  }


  /**
   * 移出指定的子控件(并不销毁)。
   * 
   * @param child 子控件对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  removeChild(child: TWidget): TRet {
    return widget_remove_child(this != null ? (this.nativeObj || this) : null, child != null ? (child.nativeObj || child) : null);
  }


  /**
   * 插入子控件到指定的位置。
   * 
   * @param index 位置序数(大于等于总个数，则放到最后)。
   * @param child 子控件对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  insertChild(index: number, child: TWidget): TRet {
    return widget_insert_child(this != null ? (this.nativeObj || this) : null, index, child != null ? (child.nativeObj || child) : null);
  }


  /**
   * 调整控件在父控件中的位置序数。
   * 
   * @param index 位置序数(大于等于总个数，则放到最后)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  restack(index: number): TRet {
    return widget_restack(this != null ? (this.nativeObj || this) : null, index);
  }


  /**
   * 查找指定名称的子控件(同widget_lookup(widget, name, FALSE))。
   * 
   * @param name 子控件的名称。
   *
   * @returns 子控件或NULL。
   */
  child(name: string): TWidget {
    return new TWidget(widget_child(this != null ? (this.nativeObj || this) : null, name));
  }


  /**
   * 查找指定名称的子控件(返回第一个)。
   * 
   * @param name 子控件的名称。
   * @param recursive 是否递归查找全部子控件。
   *
   * @returns 子控件或NULL。
   */
  lookup(name: string, recursive: boolean): TWidget {
    return new TWidget(widget_lookup(this != null ? (this.nativeObj || this) : null, name, recursive));
  }


  /**
   * 查找指定类型的子控件(返回第一个)。
   * 
   * @param type 子控件的名称。
   * @param recursive 是否递归查找全部子控件。
   *
   * @returns 子控件或NULL。
   */
  lookupByType(type: string, recursive: boolean): TWidget {
    return new TWidget(widget_lookup_by_type(this != null ? (this.nativeObj || this) : null, type, recursive));
  }


  /**
   * 设置控件的可见性。
   * 
   * @param visible 是否可见。
   * @param recursive 是否递归设置全部子控件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVisible(visible: boolean, recursive: boolean): TRet {
    return widget_set_visible(this != null ? (this.nativeObj || this) : null, visible, recursive);
  }


  /**
   * 设置控件的可见性(不触发repaint和relayout)。
   * 
   * @param visible 是否可见。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVisibleOnly(visible: boolean): TRet {
    return widget_set_visible_only(this != null ? (this.nativeObj || this) : null, visible);
  }


  /**
   * 设置控件是否接受用户事件。
   * 
   * @param sensitive 是否接受用户事件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSensitive(sensitive: boolean): TRet {
    return widget_set_sensitive(this != null ? (this.nativeObj || this) : null, sensitive);
  }


  /**
   * widget_t* ok = button_create(win, 10, 10, 80, 30);
   *widget_on(ok, EVT_CLICK, on_click, NULL);
   *
   *```
   * 
   * @param type 事件类型。
   * @param on_event 事件处理函数。
   * @param ctx 事件处理函数上下文。
   *
   * @returns 返回id，用于widget_off。
   */
  on(type: TEventType, on_event: Function, ctx: any): number {
    return widget_on(this != null ? (this.nativeObj || this) : null, type, on_event, ctx);
  }


  /**
   * 注销指定事件的处理函数。
   * 
   * @param id widget_on返回的ID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  off(id: number): TRet {
    return widget_off(this != null ? (this.nativeObj || this) : null, id);
  }


  /**
   * 请求强制重绘控件。
   * 
   * @param r 矩形对象(widget本地坐标)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  invalidateForce(r: TRect): TRet {
    return widget_invalidate_force(this != null ? (this.nativeObj || this) : null, r != null ? (r.nativeObj || r) : null);
  }


  /**
   * 设置字符串格式的属性。
   * 
   * @param name 属性的名称。
   * @param v 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPropStr(name: string, v: string): TRet {
    return widget_set_prop_str(this != null ? (this.nativeObj || this) : null, name, v);
  }


  /**
   * 获取字符串格式的属性。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回属性的值。
   */
  getPropStr(name: string, defval: string): string {
    return widget_get_prop_str(this != null ? (this.nativeObj || this) : null, name, defval);
  }


  /**
   * 设置整数格式的属性。
   * 
   * @param name 属性的名称。
   * @param v 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPropInt(name: string, v: number): TRet {
    return widget_set_prop_int(this != null ? (this.nativeObj || this) : null, name, v);
  }


  /**
   * 获取整数格式的属性。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回属性的值。
   */
  getPropInt(name: string, defval: number): number {
    return widget_get_prop_int(this != null ? (this.nativeObj || this) : null, name, defval);
  }


  /**
   * 设置布尔格式的属性。
   * 
   * @param name 属性的名称。
   * @param v 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPropBool(name: string, v: boolean): TRet {
    return widget_set_prop_bool(this != null ? (this.nativeObj || this) : null, name, v);
  }


  /**
   * 获取布尔格式的属性。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回属性的值。
   */
  getPropBool(name: string, defval: boolean): boolean {
    return widget_get_prop_bool(this != null ? (this.nativeObj || this) : null, name, defval);
  }


  /**
   * 判断当前控件所在的窗口是否已经打开。
   * 
   *
   * @returns 返回当前控件所在的窗口是否已经打开。
   */
  isWindowOpened(): boolean {
    return widget_is_window_opened(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 判断当前控件是否是窗口。
   * 
   *
   * @returns 返回当前控件是否是窗口。
   */
  isWindow(): boolean {
    return widget_is_window(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 判断当前控件是否是设计窗口。
   * 
   *
   * @returns 返回当前控件是否是设计窗口。
   */
  isDesigningWindow(): boolean {
    return widget_is_designing_window(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 判断当前控件是否是窗口管理器。
   * 
   *
   * @returns 返回当前控件是否是窗口管理器。
   */
  isWindowManager(): boolean {
    return widget_is_window_manager(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 遍历当前控件及子控件。
   * 
   * @param visit 遍历的回调函数。
   * @param ctx 回调函数的上下文。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  foreach(visit: Function, ctx: any): TRet {
    return widget_foreach(this != null ? (this.nativeObj || this) : null, visit, ctx);
  }


  /**
   * 获取当前控件所在的窗口。
   * 
   *
   * @returns 窗口对象。
   */
  getWindow(): TWidget {
    return new TWidget(widget_get_window(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 获取当前的窗口管理器。
   * 
   *
   * @returns 窗口管理器对象。
   */
  getWindowManager(): TWidget {
    return new TWidget(widget_get_window_manager(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 获取当前控件的类型名称。
   * 
   *
   * @returns 返回类型名。
   */
  getType(): string {
    return widget_get_type(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * clone。
   * 
   * @param parent clone新控件的parent对象。
   *
   * @returns 返回clone的对象。
   */
  clone(parent: TWidget): TWidget {
    return new TWidget(widget_clone(this != null ? (this.nativeObj || this) : null, parent != null ? (parent.nativeObj || parent) : null));
  }


  /**
   * 判断两个widget是否相同。
   * 
   * @param other 要比较的控件对象。
   *
   * @returns 返回TRUE表示相同，否则表示不同。
   */
  equal(other: TWidget): boolean {
    return widget_equal(this != null ? (this.nativeObj || this) : null, other != null ? (other.nativeObj || other) : null);
  }


  /**
   * 转换为widget对象(供脚本语言使用)。
   * 
   * @param widget widget对象。
   *
   * @returns widget对象。
   */
  static cast(widget: TWidget): TWidget {
    return new TWidget(widget_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 从父控件中移除控件，并调用unref函数销毁控件。
   *
   *> 一般无需直接调用，关闭窗口时，自动销毁相关控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return widget_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 减少控件的引用计数。引用计数为0时销毁控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  unref(): TRet {
    return widget_unref(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 检查控件是否是system bar类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
  isSystemBar(): boolean {
    return widget_is_system_bar(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 检查控件是否是普通窗口类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
  isNormalWindow(): boolean {
    return widget_is_normal_window(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 检查控件是否是对话框类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
  isDialog(): boolean {
    return widget_is_dialog(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 检查控件是否是弹出窗口类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
  isPopup(): boolean {
    return widget_is_popup(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 布局当前控件及子控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  layout(): TRet {
    return widget_layout(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置控件自己的布局参数。
   * 
   * @param params 布局参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSelfLayout(params: string): TRet {
    return widget_set_self_layout(this != null ? (this.nativeObj || this) : null, params);
  }


  /**
   * 设置子控件的布局参数。
   * 
   * @param params 布局参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setChildrenLayout(params: string): TRet {
    return widget_set_children_layout(this != null ? (this.nativeObj || this) : null, params);
  }


  /**
   * 设置控件自己的布局(缺省布局器)参数(过时，请用widget\_set\_self\_layout)。
   * 
   * @param x x参数。
   * @param y y参数。
   * @param w w参数。
   * @param h h参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSelfLayoutParams(x: string, y: string, w: string, h: string): TRet {
    return widget_set_self_layout_params(this != null ? (this.nativeObj || this) : null, x, y, w, h);
  }


  /**
   * 设置整数类型的style。
   * 
   * @param state_and_name 状态和名字，用英文的冒号分隔。
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setStyleInt(state_and_name: string, value: any): TRet {
    return widget_set_style_int(this != null ? (this.nativeObj || this) : null, state_and_name, value);
  }


  /**
   * 设置字符串类型的style。
   * 
   * @param state_and_name 状态和名字，用英文的冒号分隔。
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setStyleStr(state_and_name: string, value: string): TRet {
    return widget_set_style_str(this != null ? (this.nativeObj || this) : null, state_and_name, value);
  }


  /**
   * 设置颜色类型的style。
   * 
   * @param state_and_name 状态和名字，用英文的冒号分隔。
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setStyleColor(state_and_name: string, value: any): TRet {
    return widget_set_style_color(this != null ? (this.nativeObj || this) : null, state_and_name, value);
  }


  /**
   * x坐标(相对于父控件的x坐标)。
   *
   */
  get x(): number {
    return widget_t_get_prop_x(this.nativeObj);
  }


  /**
   * y坐标(相对于父控件的y坐标)。
   *
   */
  get y(): number {
    return widget_t_get_prop_y(this.nativeObj);
  }


  /**
   * 宽度。
   *
   */
  get w(): number {
    return widget_t_get_prop_w(this.nativeObj);
  }


  /**
   * 高度。
   *
   */
  get h(): number {
    return widget_t_get_prop_h(this.nativeObj);
  }


  /**
   * 控件名字。
   *
   */
  get name(): string {
    return widget_t_get_prop_name(this.nativeObj);
  }

  set name(v: string) {
    this.setName(v);
  }


  /**
   * 保存用于翻译的字符串。
   *
   */
  get trText(): string {
    return widget_t_get_prop_tr_text(this.nativeObj);
  }

  set trText(v: string) {
    this.setTrText(v);
  }

  /**
   * style的名称。
   *
   */
  get style(): string {
    return widget_t_get_prop_style(this.nativeObj);
  }


  /**
   * 动画参数。请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   */
  get animation(): string {
    return widget_t_get_prop_animation(this.nativeObj);
  }

  set animation(v: string) {
    this.setAnimation(v);
  }


  /**
   * 启用/禁用状态。
   *
   */
  get enable(): boolean {
    return widget_t_get_prop_enable(this.nativeObj);
  }

  set enable(v: boolean) {
    this.setEnable(v);
  }


  /**
   * 是否启用按键音、触屏音和震动等反馈。
   *
   */
  get feedback(): boolean {
    return widget_t_get_prop_feedback(this.nativeObj);
  }

  set feedback(v: boolean) {
    this.setFeedback(v);
  }


  /**
   * 是否可见。
   *
   */
  get visible(): boolean {
    return widget_t_get_prop_visible(this.nativeObj);
  }

  set visible(v: boolean) {
    widget_t_set_prop_visible(this.nativeObj, v);
  }


  /**
   * 是否接受用户事件。
   *
   */
  get sensitive(): boolean {
    return widget_t_get_prop_sensitive(this.nativeObj);
  }

  set sensitive(v: boolean) {
    widget_t_set_prop_sensitive(this.nativeObj, v);
  }


  /**
   * 是否支持焦点停留。
   *
   */
  get focusable(): boolean {
    return widget_t_get_prop_focusable(this.nativeObj);
  }

  set focusable(v: boolean) {
    widget_t_set_prop_focusable(this.nativeObj, v);
  }


  /**
   * 是否支持焦点状态。
   *> 如果希望style支持焦点状态，但有不希望焦点停留，可用本属性。
   *
   */
  get withFocusState(): boolean {
    return widget_t_get_prop_with_focus_state(this.nativeObj);
  }

  set withFocusState(v: boolean) {
    widget_t_set_prop_with_focus_state(this.nativeObj, v);
  }


  /**
   * 标识控件是否启用浮动布局，不受父控件的children_layout的控制。
   *
   */
  get floating(): boolean {
    return widget_t_get_prop_floating(this.nativeObj);
  }

  set floating(v: boolean) {
    this.setFloating(v);
  }


  /**
   * 父控件
   *
   */
  get parent(): TWidget {
    return new TWidget(widget_t_get_prop_parent(this.nativeObj));
  }

};
/**
 * 函数返回值常量定义。
 *
 */
enum TRet {

  /**
   * 成功。
   *
   */
  OK = RET_OK(),

  /**
   * Out of memory。
   *
   */
  OOM = RET_OOM(),

  /**
   * 失败。
   *
   */
  FAIL = RET_FAIL(),

  /**
   * 没有实现/不支持。
   *
   */
  NOT_IMPL = RET_NOT_IMPL(),

  /**
   * 退出。通常用于主循环。
   *
   */
  QUIT = RET_QUIT(),

  /**
   * 找到。
   *
   */
  FOUND = RET_FOUND(),

  /**
   * 对象忙。
   *
   */
  BUSY = RET_BUSY(),

  /**
   * 移出。通常用于定时器。
   *
   */
  REMOVE = RET_REMOVE(),

  /**
   * 重复。通常用于定时器。
   *
   */
  REPEAT = RET_REPEAT(),

  /**
   * 没找到。
   *
   */
  NOT_FOUND = RET_NOT_FOUND(),

  /**
   * 操作完成。
   *
   */
  DONE = RET_DONE(),

  /**
   * 停止后续操作。
   *
   */
  STOP = RET_STOP(),

  /**
   * 跳过当前项。
   *
   */
  SKIP = RET_SKIP(),

  /**
   * 继续后续操作。
   *
   */
  CONTINUE = RET_CONTINUE(),

  /**
   * 对象属性变化。
   *
   */
  OBJECT_CHANGED = RET_OBJECT_CHANGED(),

  /**
   * 集合数目变化。
   *
   */
  ITEMS_CHANGED = RET_ITEMS_CHANGED(),

  /**
   * 无效参数。
   *
   */
  BAD_PARAMS = RET_BAD_PARAMS(),

  /**
   * 超时。
   *
   */
  TIMEOUT = RET_TIMEOUT(),

  /**
   * CRC错误。
   *
   */
  CRC = RET_CRC(),

  /**
   * IO错误。
   *
   */
  IO = RET_IO(),

  /**
   * End of Stream
   *
   */
  EOS = RET_EOS(),
};


/**
 * 定时器管理器。
 *
 */
class TTimerManager {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }

};
/**
 * 获取当前时间的函数。
 *这里的当前时间是相对的，在嵌入式系统一般相对于开机时间。
 *它本身并没有任何意义，一般用来计算时间间隔，如实现定时器和动画等等。
 *
 */
class TTimeNow {

  /**
   * 获取当前时间(秒)。
   * 
   *
   * @returns 返回当前时间(秒)。
   */
  static s(): number {
    return time_now_s();
  }


  /**
   * 获取当前时间(毫秒)。
   * 
   *
   * @returns 返回当前时间(毫秒)。
   */
  static ms(): number {
    return time_now_ms();
  }

};
/**
 * 图片绘制方法常量定义。
 *
 */
enum TImageDrawType {

  /**
   * 缺省显示。将图片按原大小显示在目标矩形的左上角。
   *
   */
  DEFAULT = IMAGE_DRAW_DEFAULT(),

  /**
   * 居中显示。将图片按原大小显示在目标矩形的中央。
   *
   */
  CENTER = IMAGE_DRAW_CENTER(),

  /**
   * 图标显示。同居中显示，但会根据屏幕密度调整大小。
   *
   */
  ICON = IMAGE_DRAW_ICON(),

  /**
   * 缩放显示。将图片缩放至目标矩形的大小(不保证宽高成比例)。
   *
   */
  SCALE = IMAGE_DRAW_SCALE(),

  /**
   * 自动缩放显示。将图片缩放至目标矩形的宽度或高度(选取最小的比例)，并居中显示。
   *
   */
  SCALE_AUTO = IMAGE_DRAW_SCALE_AUTO(),

  /**
   * 如果图片比目标矩形大，自动缩小显示，否则居中显示。
   *
   */
  SCALE_DOWN = IMAGE_DRAW_SCALE_DOWN(),

  /**
   * 宽度缩放显示。 将图片缩放至目标矩形的宽度，高度按此比例进行缩放，超出不部分不显示。
   *
   */
  SCALE_W = IMAGE_DRAW_SCALE_W(),

  /**
   * 高度缩放显示。将图片缩放至目标矩形的高度，宽度按此比例进行缩放，超出不部分不显示。
   *
   */
  SCALE_H = IMAGE_DRAW_SCALE_H(),

  /**
   * 平铺显示。
   *
   */
  REPEAT = IMAGE_DRAW_REPEAT(),

  /**
   * 水平方向平铺显示，垂直方向缩放。
   *
   */
  REPEAT_X = IMAGE_DRAW_REPEAT_X(),

  /**
   * 垂直方向平铺显示，水平方向缩放。
   *
   */
  REPEAT_Y = IMAGE_DRAW_REPEAT_Y(),

  /**
   * 垂直方向平铺显示，水平方向缩放(从底部到顶部)。
   *
   */
  REPEAT_Y_INVERSE = IMAGE_DRAW_REPEAT_Y_INVERSE(),

  /**
   * 9宫格显示。
   *将图片分成等大小的9块，4个角按原大小显示在目标矩形的4个角，左右上下和中间5块分别缩放显示在对应的目标区域。
   *
   */
  PATCH9 = IMAGE_DRAW_PATCH9(),

  /**
   * 水平方向3宫格显示，垂直方向居中显示。
   *将图片在水平方向上分成等大小的3块，左右两块按原大小显示在目标矩形的左右，中间一块缩放显示在目标区域中间剩余部分。
   *
   */
  PATCH3_X = IMAGE_DRAW_PATCH3_X(),

  /**
   * 垂直方向3宫格显示，水平方向居中显示。
   *将图片在垂直方向上分成等大小的3块，上下两块按原大小显示在目标矩形的上下，中间一块缩放显示在目标区域中间剩余部分。
   *
   */
  PATCH3_Y = IMAGE_DRAW_PATCH3_Y(),

  /**
   * 水平方向3宫格显示，垂直方向缩放显示。
   *将图片在水平方向上分成等大小的3块，左右两块按原大小显示在目标矩形的左右，中间一块缩放显示在目标区域中间剩余部分。
   *
   */
  PATCH3_X_SCALE_Y = IMAGE_DRAW_PATCH3_X_SCALE_Y(),

  /**
   * 垂直方向3宫格显示，水平方向缩放显示。
   *将图片在垂直方向上分成等大小的3块，上下两块按原大小显示在目标矩形的上下，中间一块缩放显示在目标区域中间剩余部分。
   *
   */
  PATCH3_Y_SCALE_X = IMAGE_DRAW_PATCH3_Y_SCALE_X(),
};


/**
 * 提供基本的绘图功能和状态管理。
 *
 */
class TCanvas {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 获取画布的宽度。
   * 
   *
   * @returns 返回画布的宽度。
   */
  getWidth(): number {
    return canvas_get_width(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取画布的高度。
   * 
   *
   * @returns 返回画布的高度。
   */
  getHeight(): number {
    return canvas_get_height(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取裁剪区。
   * 
   * @param r rect对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  getClipRect(r: TRect): TRet {
    return canvas_get_clip_rect(this != null ? (this.nativeObj || this) : null, r != null ? (r.nativeObj || r) : null);
  }


  /**
   * 设置裁剪区。
   * 
   * @param r rect对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setClipRect(r: TRect): TRet {
    return canvas_set_clip_rect(this != null ? (this.nativeObj || this) : null, r != null ? (r.nativeObj || r) : null);
  }


  /**
   * 设置裁剪区。
   * 
   * @param r rect对象。
   * @param translate 是否将裁剪区的位置加上canvas当前的偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setClipRectEx(r: TRect, translate: boolean): TRet {
    return canvas_set_clip_rect_ex(this != null ? (this.nativeObj || this) : null, r != null ? (r.nativeObj || r) : null, translate);
  }


  /**
   * 设置填充颜色。
   *
   *> 供脚本语言使用。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFillColor(color: string): TRet {
    return canvas_set_fill_color_str(this != null ? (this.nativeObj || this) : null, color);
  }


  /**
   * 设置文本颜色。
   *
   *> 供脚本语言使用。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTextColor(color: string): TRet {
    return canvas_set_text_color_str(this != null ? (this.nativeObj || this) : null, color);
  }


  /**
   * 设置线条颜色。
   *
   *> 供脚本语言使用。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setStrokeColor(color: string): TRet {
    return canvas_set_stroke_color_str(this != null ? (this.nativeObj || this) : null, color);
  }


  /**
   * 设置全局alpha值。
   * 
   * @param alpha alpha值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setGlobalAlpha(alpha: number): TRet {
    return canvas_set_global_alpha(this != null ? (this.nativeObj || this) : null, alpha);
  }


  /**
   * 平移原点坐标。
   * 
   * @param dx x偏移。
   * @param dy y偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  translate(dx: number, dy: number): TRet {
    return canvas_translate(this != null ? (this.nativeObj || this) : null, dx, dy);
  }


  /**
   * 反向平移原点坐标。
   * 
   * @param dx x偏移。
   * @param dy y偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  untranslate(dx: number, dy: number): TRet {
    return canvas_untranslate(this != null ? (this.nativeObj || this) : null, dx, dy);
  }


  /**
   * 画垂直线。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawVline(x: number, y: number, h: number): TRet {
    return canvas_draw_vline(this != null ? (this.nativeObj || this) : null, x, y, h);
  }


  /**
   * 画水平线。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawHline(x: number, y: number, w: number): TRet {
    return canvas_draw_hline(this != null ? (this.nativeObj || this) : null, x, y, w);
  }


  /**
   * 填充矩形。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  fillRect(x: number, y: number, w: number, h: number): TRet {
    return canvas_fill_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
  }


  /**
   * 绘制矩形。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  strokeRect(x: number, y: number, w: number, h: number): TRet {
    return canvas_stroke_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
  }


  /**
   * 设置字体。
   * 
   * @param name 字体名称。
   * @param size 字体大小。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFont(name: string, size: number): TRet {
    return canvas_set_font(this != null ? (this.nativeObj || this) : null, name, size);
  }


  /**
   * 计算文本所占的宽度。
   *
   *> 供脚本语言使用。
   * 
   * @param str 字符串。
   *
   * @returns 返回文本所占的宽度。
   */
  measureText(str: string): number {
    return canvas_measure_utf8(this != null ? (this.nativeObj || this) : null, str);
  }


  /**
   * 绘制文本。
   *
   *> 供脚本语言使用。
   * 
   * @param str 字符串。
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawText(str: string, x: number, y: number): TRet {
    return canvas_draw_utf8(this != null ? (this.nativeObj || this) : null, str, x, y);
  }


  /**
   * 绘制文本。
   *
   *> 供脚本语言使用。
   * 
   * @param str 字符串。
   * @param r 矩形区域。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawTextInRect(str: string, r: TRect): TRet {
    return canvas_draw_utf8_in_rect(this != null ? (this.nativeObj || this) : null, str, r != null ? (r.nativeObj || r) : null);
  }


  /**
   * 绘制图标。
   * 
   * @param img 图片对象。
   * @param cx 中心点x坐标。
   * @param cy 中心点y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawIcon(img: TBitmap, cx: number, cy: number): TRet {
    return canvas_draw_icon(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, cx, cy);
  }


  /**
   * 绘制图片。
   * 
   * @param img 图片对象。
   * @param src 源区域。
   * @param dst 目的区域。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawImage(img: TBitmap, src: TRect, dst: TRect): TRet {
    return canvas_draw_image(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, src != null ? (src.nativeObj || src) : null, dst != null ? (dst.nativeObj || dst) : null);
  }


  /**
   * 绘制图片。
   * 
   * @param img 图片对象。
   * @param draw_type 绘制类型。
   * @param dst 目的区域。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  drawImageEx(img: TBitmap, draw_type: TImageDrawType, dst: TRect): TRet {
    return canvas_draw_image_ex(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, draw_type, dst != null ? (dst.nativeObj || dst) : null);
  }


  /**
   * 获取vgcanvas对象。
   * 
   *
   * @returns 返回vgcanvas对象。
   */
  getVgcanvas(): TVgcanvas {
    return new TVgcanvas(canvas_get_vgcanvas(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 转换为canvas对象(供脚本语言使用)。
   * 
   * @param c canvas对象。
   *
   * @returns canvas对象。
   */
  static cast(c: TCanvas): TCanvas {
    return new TCanvas(canvas_cast(c != null ? (c.nativeObj || c) : null));
  }


  /**
   * 释放相关资源。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  reset(): TRet {
    return canvas_reset(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * x坐标偏移。
   *
   */
  get ox(): number {
    return canvas_t_get_prop_ox(this.nativeObj);
  }


  /**
   * y坐标偏移。
   *
   */
  get oy(): number {
    return canvas_t_get_prop_oy(this.nativeObj);
  }


  /**
   * 当前字体名称。
   *
   */
  get fontName(): string {
    return canvas_t_get_prop_font_name(this.nativeObj);
  }


  /**
   * 当前字体大小。
   *
   */
  get fontSize(): number {
    return canvas_t_get_prop_font_size(this.nativeObj);
  }


  /**
   * 当前全局alpha。
   *
   */
  get globalAlpha(): number {
    return canvas_t_get_prop_global_alpha(this.nativeObj);
  }

  set globalAlpha(v: number) {
    this.setGlobalAlpha(v);
  }

};
/**
 * 命名的值。
 *
 */
class TNamedValue {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 创建named_value对象。
   * 
   *
   * @returns 返回named_value对象。
   */
  static create(): TNamedValue {
    return new TNamedValue(named_value_create());
  }


  /**
   * 转换为named_value对象(供脚本语言使用)。
   * 
   * @param nv named_value对象。
   *
   * @returns 返回named_value对象。
   */
  static cast(nv: TNamedValue): TNamedValue {
    return new TNamedValue(named_value_cast(nv != null ? (nv.nativeObj || nv) : null));
  }


  /**
   * 设置名称。
   * 
   * @param name 名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setName(name: string): TRet {
    return named_value_set_name(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: TValue): TRet {
    return named_value_set_value(this != null ? (this.nativeObj || this) : null, value != null ? (value.nativeObj || value) : null);
  }


  /**
   * 获取值对象(主要给脚本语言使用)。
   * 
   *
   * @returns 返回值对象。
   */
  getValue(): TValue {
    return new TValue(named_value_get_value(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 销毁named_value对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return named_value_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 名称。
   *
   */
  get name(): string {
    return named_value_t_get_prop_name(this.nativeObj);
  }

  set name(v: string) {
    this.setName(v);
  }

};
/**
 * MIME_TYPE。
 *
 */
enum TMIME_TYPE {

  /**
   * "application/envoy"。
   *
   */
  APPLICATION_ENVOY = MIME_TYPE_APPLICATION_ENVOY(),

  /**
   * "application/fractals"。
   *
   */
  APPLICATION_FRACTALS = MIME_TYPE_APPLICATION_FRACTALS(),

  /**
   * "application/futuresplash"。
   *
   */
  APPLICATION_FUTURESPLASH = MIME_TYPE_APPLICATION_FUTURESPLASH(),

  /**
   * "application/hta"。
   *
   */
  APPLICATION_HTA = MIME_TYPE_APPLICATION_HTA(),

  /**
   * "application/json"。
   *
   */
  APPLICATION_JSON = MIME_TYPE_APPLICATION_JSON(),

  /**
   * "application/ubjson"。
   *
   */
  APPLICATION_UBJSON = MIME_TYPE_APPLICATION_UBJSON(),

  /**
   * "application/mac-binhex40"。
   *
   */
  APPLICATION_MAC_BINHEX40 = MIME_TYPE_APPLICATION_MAC_BINHEX40(),

  /**
   * "application/msword"。
   *
   */
  APPLICATION_MSWORD = MIME_TYPE_APPLICATION_MSWORD(),

  /**
   * "application/octet-stream"。
   *
   */
  APPLICATION_OCTET_STREAM = MIME_TYPE_APPLICATION_OCTET_STREAM(),

  /**
   * "application/oda"。
   *
   */
  APPLICATION_ODA = MIME_TYPE_APPLICATION_ODA(),

  /**
   * "application/olescript"。
   *
   */
  APPLICATION_OLESCRIPT = MIME_TYPE_APPLICATION_OLESCRIPT(),

  /**
   * "application/pdf"。
   *
   */
  APPLICATION_PDF = MIME_TYPE_APPLICATION_PDF(),

  /**
   * "application/pics-rules"。
   *
   */
  APPLICATION_PICS_RULES = MIME_TYPE_APPLICATION_PICS_RULES(),

  /**
   * "application/pkcs10"。
   *
   */
  APPLICATION_PKCS10 = MIME_TYPE_APPLICATION_PKCS10(),

  /**
   * "application/pkix-crl"。
   *
   */
  APPLICATION_PKIX_CRL = MIME_TYPE_APPLICATION_PKIX_CRL(),

  /**
   * "application/postscript"。
   *
   */
  APPLICATION_POSTSCRIPT = MIME_TYPE_APPLICATION_POSTSCRIPT(),

  /**
   * "application/rtf"。
   *
   */
  APPLICATION_RTF = MIME_TYPE_APPLICATION_RTF(),

  /**
   * "application/vnd.ms-excel"。
   *
   */
  APPLICATION_VND_MS_EXCEL = MIME_TYPE_APPLICATION_VND_MS_EXCEL(),

  /**
   * "application/vnd.ms-outlook"。
   *
   */
  APPLICATION_VND_MS_OUTLOOK = MIME_TYPE_APPLICATION_VND_MS_OUTLOOK(),

  /**
   * "application/vnd.ms-pkicertstore"。
   *
   */
  APPLICATION_VND_MS_PKICERTSTORE = MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE(),

  /**
   * "application/vnd.ms-pkiseccat"。
   *
   */
  APPLICATION_VND_MS_PKISECCAT = MIME_TYPE_APPLICATION_VND_MS_PKISECCAT(),

  /**
   * "application/vnd.ms-pkistl"。
   *
   */
  APPLICATION_VND_MS_PKISTL = MIME_TYPE_APPLICATION_VND_MS_PKISTL(),

  /**
   * "application/vnd.ms-powerpoint"。
   *
   */
  APPLICATION_VND_MS_POWERPOINT = MIME_TYPE_APPLICATION_VND_MS_POWERPOINT(),

  /**
   * "application/vnd.ms-project"。
   *
   */
  APPLICATION_VND_MS_PROJECT = MIME_TYPE_APPLICATION_VND_MS_PROJECT(),

  /**
   * "application/vnd.ms-works"。
   *
   */
  APPLICATION_VND_MS_WORKS = MIME_TYPE_APPLICATION_VND_MS_WORKS(),

  /**
   * "application/winhlp"。
   *
   */
  APPLICATION_WINHLP = MIME_TYPE_APPLICATION_WINHLP(),

  /**
   * "application/x-bcpio"。
   *
   */
  APPLICATION_X_BCPIO = MIME_TYPE_APPLICATION_X_BCPIO(),

  /**
   * "application/x-cdf"。
   *
   */
  APPLICATION_X_CDF = MIME_TYPE_APPLICATION_X_CDF(),

  /**
   * "application/x-compress"。
   *
   */
  APPLICATION_X_COMPRESS = MIME_TYPE_APPLICATION_X_COMPRESS(),

  /**
   * "application/x-compressed"。
   *
   */
  APPLICATION_X_COMPRESSED = MIME_TYPE_APPLICATION_X_COMPRESSED(),

  /**
   * "application/x-cpio"。
   *
   */
  APPLICATION_X_CPIO = MIME_TYPE_APPLICATION_X_CPIO(),

  /**
   * "application/x-csh"。
   *
   */
  APPLICATION_X_CSH = MIME_TYPE_APPLICATION_X_CSH(),

  /**
   * "application/x-director"。
   *
   */
  APPLICATION_X_DIRECTOR = MIME_TYPE_APPLICATION_X_DIRECTOR(),

  /**
   * "application/x-dvi"。
   *
   */
  APPLICATION_X_DVI = MIME_TYPE_APPLICATION_X_DVI(),

  /**
   * "application/x-gtar"。
   *
   */
  APPLICATION_X_GTAR = MIME_TYPE_APPLICATION_X_GTAR(),

  /**
   * "application/x-gzip"。
   *
   */
  APPLICATION_X_GZIP = MIME_TYPE_APPLICATION_X_GZIP(),

  /**
   * "application/x-hdf"。
   *
   */
  APPLICATION_X_HDF = MIME_TYPE_APPLICATION_X_HDF(),

  /**
   * "application/x-iphone"。
   *
   */
  APPLICATION_X_IPHONE = MIME_TYPE_APPLICATION_X_IPHONE(),

  /**
   * "application/x-javascript"。
   *
   */
  APPLICATION_X_JAVASCRIPT = MIME_TYPE_APPLICATION_X_JAVASCRIPT(),

  /**
   * "application/x-latex"。
   *
   */
  APPLICATION_X_LATEX = MIME_TYPE_APPLICATION_X_LATEX(),

  /**
   * "application/x-msaccess"。
   *
   */
  APPLICATION_X_MSACCESS = MIME_TYPE_APPLICATION_X_MSACCESS(),

  /**
   * "application/x-mscardfile"。
   *
   */
  APPLICATION_X_MSCARDFILE = MIME_TYPE_APPLICATION_X_MSCARDFILE(),

  /**
   * "application/x-msclip"。
   *
   */
  APPLICATION_X_MSCLIP = MIME_TYPE_APPLICATION_X_MSCLIP(),

  /**
   * "application/x-msdownload"。
   *
   */
  APPLICATION_X_MSDOWNLOAD = MIME_TYPE_APPLICATION_X_MSDOWNLOAD(),

  /**
   * "application/x-msmediaview"。
   *
   */
  APPLICATION_X_MSMEDIAVIEW = MIME_TYPE_APPLICATION_X_MSMEDIAVIEW(),

  /**
   * "application/x-msmetafile"。
   *
   */
  APPLICATION_X_MSMETAFILE = MIME_TYPE_APPLICATION_X_MSMETAFILE(),

  /**
   * "application/x-msmoney"。
   *
   */
  APPLICATION_X_MSMONEY = MIME_TYPE_APPLICATION_X_MSMONEY(),

  /**
   * "application/x-mspublisher"。
   *
   */
  APPLICATION_X_MSPUBLISHER = MIME_TYPE_APPLICATION_X_MSPUBLISHER(),

  /**
   * "application/x-msschedule"。
   *
   */
  APPLICATION_X_MSSCHEDULE = MIME_TYPE_APPLICATION_X_MSSCHEDULE(),

  /**
   * "application/x-msterminal"。
   *
   */
  APPLICATION_X_MSTERMINAL = MIME_TYPE_APPLICATION_X_MSTERMINAL(),

  /**
   * "application/x-mswrite"。
   *
   */
  APPLICATION_X_MSWRITE = MIME_TYPE_APPLICATION_X_MSWRITE(),

  /**
   * "application/x-netcdf"。
   *
   */
  APPLICATION_X_NETCDF = MIME_TYPE_APPLICATION_X_NETCDF(),

  /**
   * "application/x-perfmon"。
   *
   */
  APPLICATION_X_PERFMON = MIME_TYPE_APPLICATION_X_PERFMON(),

  /**
   * "application/x-pkcs12"。
   *
   */
  APPLICATION_X_PKCS12 = MIME_TYPE_APPLICATION_X_PKCS12(),

  /**
   * "application/x-sh"。
   *
   */
  APPLICATION_X_SH = MIME_TYPE_APPLICATION_X_SH(),

  /**
   * "application/x-shar"。
   *
   */
  APPLICATION_X_SHAR = MIME_TYPE_APPLICATION_X_SHAR(),

  /**
   * "application/x-shockwave-flash"。
   *
   */
  APPLICATION_X_SHOCKWAVE_FLASH = MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH(),

  /**
   * "application/x-stuffit"。
   *
   */
  APPLICATION_X_STUFFIT = MIME_TYPE_APPLICATION_X_STUFFIT(),

  /**
   * "application/x-sv4cpio"。
   *
   */
  APPLICATION_X_SV4CPIO = MIME_TYPE_APPLICATION_X_SV4CPIO(),

  /**
   * "application/x-sv4crc"。
   *
   */
  APPLICATION_X_SV4CRC = MIME_TYPE_APPLICATION_X_SV4CRC(),

  /**
   * "application/x-tar"。
   *
   */
  APPLICATION_X_TAR = MIME_TYPE_APPLICATION_X_TAR(),

  /**
   * "application/x-tcl"。
   *
   */
  APPLICATION_X_TCL = MIME_TYPE_APPLICATION_X_TCL(),

  /**
   * "application/x-tex"。
   *
   */
  APPLICATION_X_TEX = MIME_TYPE_APPLICATION_X_TEX(),

  /**
   * "application/x-texinfo"。
   *
   */
  APPLICATION_X_TEXINFO = MIME_TYPE_APPLICATION_X_TEXINFO(),

  /**
   * "application/x-troff"。
   *
   */
  APPLICATION_X_TROFF = MIME_TYPE_APPLICATION_X_TROFF(),

  /**
   * "application/x-ustar"。
   *
   */
  APPLICATION_X_USTAR = MIME_TYPE_APPLICATION_X_USTAR(),

  /**
   * "application/zip"。
   *
   */
  APPLICATION_ZIP = MIME_TYPE_APPLICATION_ZIP(),

  /**
   * "audio/basic"。
   *
   */
  AUDIO_BASIC = MIME_TYPE_AUDIO_BASIC(),

  /**
   * "audio/mid"。
   *
   */
  AUDIO_MID = MIME_TYPE_AUDIO_MID(),

  /**
   * "audio/mpeg"。
   *
   */
  AUDIO_MPEG = MIME_TYPE_AUDIO_MPEG(),

  /**
   * "audio/x-aiff"。
   *
   */
  AUDIO_X_AIFF = MIME_TYPE_AUDIO_X_AIFF(),

  /**
   * "audio/x-mpegurl"。
   *
   */
  AUDIO_X_MPEGURL = MIME_TYPE_AUDIO_X_MPEGURL(),

  /**
   * "audio/x-wav"。
   *
   */
  AUDIO_X_WAV = MIME_TYPE_AUDIO_X_WAV(),

  /**
   * "image/bmp"。
   *
   */
  IMAGE_BMP = MIME_TYPE_IMAGE_BMP(),

  /**
   * "image/cis-cod"。
   *
   */
  IMAGE_CIS_COD = MIME_TYPE_IMAGE_CIS_COD(),

  /**
   * "image/gif"。
   *
   */
  IMAGE_GIF = MIME_TYPE_IMAGE_GIF(),

  /**
   * "image/ief"。
   *
   */
  IMAGE_IEF = MIME_TYPE_IMAGE_IEF(),

  /**
   * "image/jpeg"。
   *
   */
  IMAGE_JPEG = MIME_TYPE_IMAGE_JPEG(),

  /**
   * "image/pipeg"。
   *
   */
  IMAGE_PIPEG = MIME_TYPE_IMAGE_PIPEG(),

  /**
   * "image/svg+xml"。
   *
   */
  IMAGE_SVG_XML = MIME_TYPE_IMAGE_SVG_XML(),

  /**
   * "image/tiff"。
   *
   */
  IMAGE_TIFF = MIME_TYPE_IMAGE_TIFF(),

  /**
   * "image/x-cmx"。
   *
   */
  IMAGE_X_CMX = MIME_TYPE_IMAGE_X_CMX(),

  /**
   * "image/x-icon"。
   *
   */
  IMAGE_X_ICON = MIME_TYPE_IMAGE_X_ICON(),

  /**
   * "image/x-rgb"。
   *
   */
  IMAGE_X_RGB = MIME_TYPE_IMAGE_X_RGB(),

  /**
   * "image/x-xbitmap"。
   *
   */
  IMAGE_X_XBITMAP = MIME_TYPE_IMAGE_X_XBITMAP(),

  /**
   * "image/x-xpixmap"。
   *
   */
  IMAGE_X_XPIXMAP = MIME_TYPE_IMAGE_X_XPIXMAP(),

  /**
   * "image/x-xwindowdump"。
   *
   */
  IMAGE_X_XWINDOWDUMP = MIME_TYPE_IMAGE_X_XWINDOWDUMP(),

  /**
   * "message/rfc822"。
   *
   */
  MESSAGE_RFC822 = MIME_TYPE_MESSAGE_RFC822(),

  /**
   * "text/css"。
   *
   */
  TEXT_CSS = MIME_TYPE_TEXT_CSS(),

  /**
   * "text/h323"。
   *
   */
  TEXT_H323 = MIME_TYPE_TEXT_H323(),

  /**
   * "text/html"。
   *
   */
  TEXT_HTML = MIME_TYPE_TEXT_HTML(),

  /**
   * "text/iuls"。
   *
   */
  TEXT_IULS = MIME_TYPE_TEXT_IULS(),

  /**
   * "text/plain"。
   *
   */
  TEXT_PLAIN = MIME_TYPE_TEXT_PLAIN(),

  /**
   * "text/richtext"。
   *
   */
  TEXT_RICHTEXT = MIME_TYPE_TEXT_RICHTEXT(),

  /**
   * "text/scriptlet"。
   *
   */
  TEXT_SCRIPTLET = MIME_TYPE_TEXT_SCRIPTLET(),

  /**
   * "text/webviewhtml"。
   *
   */
  TEXT_WEBVIEWHTML = MIME_TYPE_TEXT_WEBVIEWHTML(),

  /**
   * "text/x-component"。
   *
   */
  TEXT_X_COMPONENT = MIME_TYPE_TEXT_X_COMPONENT(),

  /**
   * "text/x-setext"。
   *
   */
  TEXT_X_SETEXT = MIME_TYPE_TEXT_X_SETEXT(),

  /**
   * "text/x-vcard"。
   *
   */
  TEXT_X_VCARD = MIME_TYPE_TEXT_X_VCARD(),

  /**
   * "video/mpeg"。
   *
   */
  VIDEO_MPEG = MIME_TYPE_VIDEO_MPEG(),

  /**
   * "video/quicktime"。
   *
   */
  VIDEO_QUICKTIME = MIME_TYPE_VIDEO_QUICKTIME(),

  /**
   * "video/x-msvideo"。
   *
   */
  VIDEO_X_MSVIDEO = MIME_TYPE_VIDEO_X_MSVIDEO(),
};


/**
 * idle_manager_t管理器。
 *
 */
class TIdleManager {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }

};
/**
 * 指示器默认绘制的类型。
 *
 */
enum TIndicatorDefaultPaint {

  /**
   * 自动选择。
   *
   */
  AUTO = INDICATOR_DEFAULT_PAINT_AUTO(),

  /**
   * 实心圆点指示器，当前项填充selected_fg_color，其他填充fg_color。
   *
   */
  FILL_DOT = INDICATOR_DEFAULT_PAINT_FILL_DOT(),

  /**
   * 镂空圆点指示器，当前项填充selected_fg_color，其他镂空fg_color。
   *
   */
  STROKE_DOT = INDICATOR_DEFAULT_PAINT_STROKE_DOT(),

  /**
   * 实心矩形指示器，当前项填充selected_fg_color，其他填充fg_color。
   *
   */
  FILL_RECT = INDICATOR_DEFAULT_PAINT_FILL_RECT(),

  /**
   * 镂空矩形指示器，当前项填充selected_fg_color，其他镂空fg_color。
   *
   */
  STROKE_RECT = INDICATOR_DEFAULT_PAINT_STROKE_RECT(),
};


/**
 * 剪切板数据类型定义。
 *
 */
enum TClipBoardDataType {

  /**
   * 无数据。
   *
   */
  NONE = CLIP_BOARD_DATA_TYPE_NONE(),

  /**
   * UTF8文本。
   *
   */
  TEXT = CLIP_BOARD_DATA_TYPE_TEXT(),
};


/**
 * 剪切板接口。
 *
 */
class TClipBoard {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 设置文本(UTF8)数据到剪切板。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static setText(text: string): TRet {
    return clip_board_set_text(text);
  }


  /**
   * 从剪切板中获取文本(UTF8)数据。
   * 
   *
   * @returns 返回文本数据。
   */
  static getText(): string {
    return clip_board_get_text();
  }

};
/**
 * 缓动作动画常量定义。
 *
 */
enum TEasingType {

  /**
   * EASING_LINEAR。
   *
   */
  LINEAR = EASING_LINEAR(),

  /**
   * EASING_QUADRATIC_IN
   *
   */
  QUADRATIC_IN = EASING_QUADRATIC_IN(),

  /**
   * EASING_QUADRATIC_OUT
   *
   */
  QUADRATIC_OUT = EASING_QUADRATIC_OUT(),

  /**
   * EASING_QUADRATIC_INOUT
   *
   */
  QUADRATIC_INOUT = EASING_QUADRATIC_INOUT(),

  /**
   * EASING_CUBIC_IN
   *
   */
  CUBIC_IN = EASING_CUBIC_IN(),

  /**
   * EASING_CUBIC_OUT
   *
   */
  CUBIC_OUT = EASING_CUBIC_OUT(),

  /**
   * EASING_SIN_IN
   *
   */
  SIN_IN = EASING_SIN_IN(),

  /**
   * EASING_SIN_OUT
   *
   */
  SIN_OUT = EASING_SIN_OUT(),

  /**
   * EASING_SIN_OUT
   *
   */
  SIN_INOUT = EASING_SIN_INOUT(),

  /**
   * EASING_POW_IN
   *
   */
  POW_IN = EASING_POW_IN(),

  /**
   * EASING_POW_OUT
   *
   */
  POW_OUT = EASING_POW_OUT(),

  /**
   * EASING_POW_INOUT
   *
   */
  POW_INOUT = EASING_POW_INOUT(),

  /**
   * EASING_CIRCULAR_IN
   *
   */
  CIRCULAR_IN = EASING_CIRCULAR_IN(),

  /**
   * EASING_CIRCULAR_OUT
   *
   */
  CIRCULAR_OUT = EASING_CIRCULAR_OUT(),

  /**
   * EASING_CIRCULAR_INOUT
   *
   */
  CIRCULAR_INOUT = EASING_CIRCULAR_INOUT(),

  /**
   * EASING_ELASTIC_IN
   *
   */
  ELASTIC_IN = EASING_ELASTIC_IN(),

  /**
   * EASING_ELASTIC_OUT
   *
   */
  ELASTIC_OUT = EASING_ELASTIC_OUT(),

  /**
   * EASING_ELASTIC_INOUT
   *
   */
  ELASTIC_INOUT = EASING_ELASTIC_INOUT(),

  /**
   * EASING_BACK_IN
   *
   */
  BACK_IN = EASING_BACK_IN(),

  /**
   * EASING_BACK_OUT
   *
   */
  BACK_OUT = EASING_BACK_OUT(),

  /**
   * EASING_BACK_INOUT
   *
   */
  BACK_INOUT = EASING_BACK_INOUT(),

  /**
   * EASING_BOUNCE_IN
   *
   */
  BOUNCE_IN = EASING_BOUNCE_IN(),

  /**
   * EASING_BOUNCE_OUT
   *
   */
  BOUNCE_OUT = EASING_BOUNCE_OUT(),

  /**
   * EASING_BOUNCE_INOUT
   *
   */
  BOUNCE_INOUT = EASING_BOUNCE_INOUT(),
};


/**
 * 日期时间。
 *
 *> 在嵌入式平台中，在系统初始时，需要调用date\_time\_global\_init设置实际获取/设置系统时间的函数。
 *
 */
class TDateTime {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 创建date_time对象，并初始为当前日期和时间(一般供脚本语言中使用)。
   * 
   *
   * @returns 返回date_time对象。
   */
  static create(): TDateTime {
    return new TDateTime(date_time_create());
  }


  /**
   * 设置当前时间。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  set(): TRet {
    return date_time_set(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 销毁date_time对象(一般供脚本语言中使用)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return date_time_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 秒(0 - 59)。
   *
   */
  get second(): number {
    return date_time_t_get_prop_second(this.nativeObj);
  }


  /**
   * 分(0 - 59)。
   *
   */
  get minute(): number {
    return date_time_t_get_prop_minute(this.nativeObj);
  }


  /**
   * 时(0 - 23)。
   *
   */
  get hour(): number {
    return date_time_t_get_prop_hour(this.nativeObj);
  }


  /**
   * 日(1-31)。
   *
   */
  get day(): number {
    return date_time_t_get_prop_day(this.nativeObj);
  }


  /**
   * 星期几(0-6, Sunday = 0)。
   *
   */
  get wday(): number {
    return date_time_t_get_prop_wday(this.nativeObj);
  }


  /**
   * 月(1-12)。
   *
   */
  get month(): number {
    return date_time_t_get_prop_month(this.nativeObj);
  }


  /**
   * 年。
   *
   */
  get year(): number {
    return date_time_t_get_prop_year(this.nativeObj);
  }

};
/**
 * 颜色。
 *
 */
class TColor {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 创建color对象。
   *
   *> 主要供脚本语言使用。
   * 
   * @param r 红色通道。
   * @param b 蓝色通道。
   * @param g 绿色通道。
   * @param a alpha通道。
   *
   * @returns color对象。
   */
  static create(r: number, b: number, g: number, a: number): TColor {
    return new TColor(color_create(r, b, g, a));
  }


  /**
   * 创建color对象。
   *
   *> 主要供脚本语言使用。
   * 
   * @param str css类似的颜色值。
   *
   * @returns color对象。
   */
  fromStr(str: string): TColor {
    return new TColor(color_from_str(this != null ? (this.nativeObj || this) : null, str));
  }


  /**
   * 获取红色通道的值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回红色通道的值。
   */
  r(): number {
    return color_r(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取绿色通道的值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回绿色通道的值。
   */
  g(): number {
    return color_g(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取蓝色通道的值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回蓝色通道的值。
   */
  b(): number {
    return color_b(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取alpha通道的值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回alpha通道的值。
   */
  a(): number {
    return color_a(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 转换为color对象。
   *
   *> 供脚本语言使用。
   * 
   * @param color color对象。
   *
   * @returns color对象。
   */
  static cast(color: TColor): TColor {
    return new TColor(color_cast(color != null ? (color.nativeObj || color) : null));
  }


  /**
   * 销毁color对象。
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  destroy(): TRet {
    return color_destroy(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 颜色的数值。
   *
   */
  get color(): number {
    return color_t_get_prop_color(this.nativeObj);
  }

  set color(v: number) {
    color_t_set_prop_color(this.nativeObj, v);
  }

};
/**
 * 单个资源的描述信息。
 *
 */
class TAssetInfo {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 类型。
   *
   */
  get type(): number {
    return asset_info_t_get_prop_type(this.nativeObj);
  }


  /**
   * 子类型。
   *
   */
  get subtype(): number {
    return asset_info_t_get_prop_subtype(this.nativeObj);
  }


  /**
   * 资源是否在ROM中。
   *
   */
  get isInRom(): number {
    return asset_info_t_get_prop_is_in_rom(this.nativeObj);
  }


  /**
   * 大小。
   *
   */
  get size(): number {
    return asset_info_t_get_prop_size(this.nativeObj);
  }


  /**
   * 引用计数。
   *is\_in\_rom == FALSE时才有效。
   *
   */
  get refcount(): number {
    return asset_info_t_get_prop_refcount(this.nativeObj);
  }


  /**
   * 名称。
   *
   */
  get name(): string {
    return asset_info_t_get_prop_name(this.nativeObj);
  }

};
/**
 * 资源类型常量定义。
 *
 */
enum TAssetType {

  /**
   * 无效资源。
   *
   */
  NONE = ASSET_TYPE_NONE(),

  /**
   * 字体资源。
   *
   */
  FONT = ASSET_TYPE_FONT(),

  /**
   * 图片资源。
   *
   */
  IMAGE = ASSET_TYPE_IMAGE(),

  /**
   * 主题资源。
   *
   */
  STYLE = ASSET_TYPE_STYLE(),

  /**
   * UI数据资源。
   *
   */
  UI = ASSET_TYPE_UI(),

  /**
   * XML数据资源。
   *
   */
  XML = ASSET_TYPE_XML(),

  /**
   * 字符串数据资源。
   *
   */
  STRINGS = ASSET_TYPE_STRINGS(),

  /**
   * JS等脚本资源。
   *
   */
  SCRIPT = ASSET_TYPE_SCRIPT(),

  /**
   * 其它数据资源。
   *
   */
  DATA = ASSET_TYPE_DATA(),
};


/**
 * 资源管理器。
 *这里的资源管理器并非Windows下的文件浏览器，而是负责对各种资源，比如字体、主题、图片、界面数据、字符串和其它数据的进行集中管理的组件。引入资源管理器的目的有以下几个：
 *
 ** 让上层不需要了解存储的方式。
 *在没有文件系统时或者内存紧缺时，把资源转成常量数组直接编译到代码中。在有文件系统而且内存充足时，资源放在文件系统中。在有网络时，资源也可以存放在服务器上(暂未实现)。资源管理器为上层提供统一的接口，让上层而不用关心底层的存储方式。
 *
 ** 让上层不需要了解资源的具体格式。
 *比如一个名为earth的图片，没有文件系统或内存紧缺，图片直接用位图数据格式存在ROM中，而有文件系统时，则用PNG格式存放在文件系统中。资源管理器让上层不需要关心图片的格式，访问时指定图片的名称即可(不用指定扩展名)。
 *
 ** 让上层不需要了解屏幕的密度。
 *不同的屏幕密度下需要加载不同的图片，比如MacPro的Retina屏就需要用双倍解析度的图片，否则就出现界面模糊。AWTK以后会支持PC软件和手机软件的开发，所以资源管理器需要为此提供支持，让上层不需关心屏幕的密度。
 *
 ** 对资源进行内存缓存。
 *不同类型的资源使用方式是不一样的，比如字体和主题加载之后会一直使用，UI文件在生成界面之后就暂时不需要了，PNG文件解码之后就只需要保留解码的位图数据即可。资源管理器配合图片管理器等其它组件实现资源的自动缓存。
 *
 *当从文件系统加载资源时，目录结构要求如下：
 *
 *```
 *assets/{theme}/raw/
 *fonts   字体
 *images  图片
 *x1   普通密度屏幕的图片。
 *x2   2倍密度屏幕的图片。
 *x3   3倍密度屏幕的图片。
 *xx   密度无关的图片。
 *strings 需要翻译的字符串。
 *styles  主题数据。
 *ui      UI描述数据。
 *```
 *
 */
class TAssetsManager {
  public nativeObj: any;
  constructor(nativeObj: any) {
    this.nativeObj = nativeObj;
  }


  /**
   * 获取缺省资源管理器。
   * 
   *
   * @returns 返回asset manager对象。
   */
  static instance(): TAssetsManager {
    return new TAssetsManager(assets_manager());
  }


  /**
   * 在资源管理器的缓存中查找指定的资源并引用它，如果缓存中不存在，尝试加载该资源。
   * 
   * @param type 资源的类型。
   * @param name 资源的名称。
   *
   * @returns 返回资源。
   */
  ref(type: TAssetType, name: string): TAssetInfo {
    return new TAssetInfo(assets_manager_ref(this != null ? (this.nativeObj || this) : null, type, name));
  }


  /**
   * 释放指定的资源。
   * 
   * @param info 资源。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  unref(info: TAssetInfo): TRet {
    return assets_manager_unref(this != null ? (this.nativeObj || this) : null, info != null ? (info.nativeObj || info) : null);
  }

};
/**
 * 画布控件。
 *
 *画布控件让开发者可以自己在控件上绘制需要的内容。
 *
 *canvas\_widget\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于canvas\_widget\_t控件。
 *
 *在xml中使用"canvas"标签创建画布控件。如：
 *
 *```xml
 *<canvas name="paint_vgcanvas" x="0" y="0" w="100%" h="100%" />
 *```
 *
 *> 更多用法请参考：
 *[canvas_widget.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/vgcanvas.xml)
 *
 *在c代码中使用函数canvas\_widget\_create创建画布控件。如：
 *
 *
 *> 创建之后，需要用widget\_on注册EVT\_PAINT事件，并在EVT\_PAINT事件处理函数中绘制。
 *
 *
 *绘制时，可以通过canvas接口去绘制，也可以通过vgcanvas接口去绘制。
 *先从evt获取canvas对象，再通过canvas\_get\_vgcanvas从canvas中获取vgcanvas对象。
 *
 *
 *> 完整示例请参考：
 *[canvas demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/canvas.c)
 *
 *参考：
 *
 ** [canvas接口描述](canvas_t.md)
 ** [vgcanvas接口描述](vgcanvas_t.md)
 *
 */
class TCanvasWidget extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建canvas_widget对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TCanvasWidget(canvas_widget_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为canvas_widget对象(供脚本语言使用)。
   * 
   * @param widget canvas_widget对象。
   *
   * @returns canvas_widget对象。
   */
  static cast(widget: TWidget): TCanvasWidget {
    return new TCanvasWidget(canvas_widget_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 模拟时钟控件。
 *
 *time\_clock\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于time\_clock\_t控件。
 *
 *在xml中使用"time\_clock"标签创建模拟时钟控件。如：
 *
 *```xml
 *<time_clock x="c" y="m" w="300" h="300" bg_image="clock_bg" image="clock"
 *hour_image="clock_hour" minute_image="clock_minute" second_image="clock_second"/>
 *```
 *
 *> 更多用法请参考：[time\_clock.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/time_clock.xml)
 *
 *在c代码中使用函数time\_clock\_create创建模拟时钟控件。如：
 *
 *
 *> 完整示例请参考：[time_clock demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/time_clock.c)
 *
 *time\_clock一般不需要设置style。
 *
 */
class TTimeClock extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建time_clock对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TTimeClock(time_clock_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为time_clock对象(供脚本语言使用)。
   * 
   * @param widget time_clock对象。
   *
   * @returns time_clock对象。
   */
  static cast(widget: TWidget): TTimeClock {
    return new TTimeClock(time_clock_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置小时的值。
   * 
   * @param hour 小时的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setHour(hour: number): TRet {
    return time_clock_set_hour(this != null ? (this.nativeObj || this) : null, hour);
  }


  /**
   * 设置分钟的值。
   * 
   * @param minute 分钟的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMinute(minute: number): TRet {
    return time_clock_set_minute(this != null ? (this.nativeObj || this) : null, minute);
  }


  /**
   * 设置秒的值。
   * 
   * @param second 秒的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSecond(second: number): TRet {
    return time_clock_set_second(this != null ? (this.nativeObj || this) : null, second);
  }


  /**
   * 设置小时的图片。
   * 
   * @param hour 小时的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setHourImage(hour: string): TRet {
    return time_clock_set_hour_image(this != null ? (this.nativeObj || this) : null, hour);
  }


  /**
   * 设置分钟的图片。
   * 
   * @param minute_image 分钟的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMinuteImage(minute_image: string): TRet {
    return time_clock_set_minute_image(this != null ? (this.nativeObj || this) : null, minute_image);
  }


  /**
   * 设置秒的图片。
   * 
   * @param second_image 秒的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSecondImage(second_image: string): TRet {
    return time_clock_set_second_image(this != null ? (this.nativeObj || this) : null, second_image);
  }


  /**
   * 设置背景图片。
   * 
   * @param bg_image 背景图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setBgImage(bg_image: string): TRet {
    return time_clock_set_bg_image(this != null ? (this.nativeObj || this) : null, bg_image);
  }


  /**
   * 设置中心图片。
   * 
   * @param image 图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setImage(image: string): TRet {
    return time_clock_set_image(this != null ? (this.nativeObj || this) : null, image);
  }


  /**
   * 设置小时指针的旋转锚点。
   *> 后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f
   * 
   * @param anchor_x 指针的锚点坐标x。
   * @param anchor_y 指针的锚点坐标y。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setHourAnchor(anchor_x: string, anchor_y: string): TRet {
    return time_clock_set_hour_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
  }


  /**
   * 设置分钟指针的旋转锚点。
   *> 后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f
   * 
   * @param anchor_x 指针的锚点坐标x。
   * @param anchor_y 指针的锚点坐标y。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMinuteAnchor(anchor_x: string, anchor_y: string): TRet {
    return time_clock_set_minute_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
  }


  /**
   * 设置秒钟指针的旋转锚点。
   *> 后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f
   * 
   * @param anchor_x 指针的锚点坐标x。
   * @param anchor_y 指针的锚点坐标y。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSecondAnchor(anchor_x: string, anchor_y: string): TRet {
    return time_clock_set_second_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
  }


  /**
   * 小时。
   *
   */
  get hour(): number {
    return time_clock_t_get_prop_hour(this.nativeObj);
  }

  set hour(v: number) {
    this.setHour(v);
  }


  /**
   * 分钟。
   *
   */
  get minute(): number {
    return time_clock_t_get_prop_minute(this.nativeObj);
  }

  set minute(v: number) {
    this.setMinute(v);
  }


  /**
   * 秒。
   *
   */
  get second(): number {
    return time_clock_t_get_prop_second(this.nativeObj);
  }

  set second(v: number) {
    this.setSecond(v);
  }


  /**
   * 中心图片。
   *
   */
  get image(): string {
    return time_clock_t_get_prop_image(this.nativeObj);
  }

  set image(v: string) {
    this.setImage(v);
  }


  /**
   * 背景图片。
   *
   */
  get bgImage(): string {
    return time_clock_t_get_prop_bg_image(this.nativeObj);
  }

  set bgImage(v: string) {
    this.setBgImage(v);
  }


  /**
   * 时针图片。
   *
   */
  get hourImage(): string {
    return time_clock_t_get_prop_hour_image(this.nativeObj);
  }

  set hourImage(v: string) {
    this.setHourImage(v);
  }


  /**
   * 分针图片。
   *
   */
  get minuteImage(): string {
    return time_clock_t_get_prop_minute_image(this.nativeObj);
  }

  set minuteImage(v: string) {
    this.setMinuteImage(v);
  }


  /**
   * 秒针图片。
   *
   */
  get secondImage(): string {
    return time_clock_t_get_prop_second_image(this.nativeObj);
  }

  set secondImage(v: string) {
    this.setSecondImage(v);
  }


  /**
   * 时针图片旋转锚点x坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
  get hourAnchorX(): string {
    return time_clock_t_get_prop_hour_anchor_x(this.nativeObj);
  }


  /**
   * 时针图片旋转锚点y坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
  get hourAnchorY(): string {
    return time_clock_t_get_prop_hour_anchor_y(this.nativeObj);
  }


  /**
   * 分针图片旋转锚点x坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
  get minuteAnchorX(): string {
    return time_clock_t_get_prop_minute_anchor_x(this.nativeObj);
  }


  /**
   * 分针图片旋转锚点y坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
  get minuteAnchorY(): string {
    return time_clock_t_get_prop_minute_anchor_y(this.nativeObj);
  }


  /**
   * 秒针图片旋转锚点x坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
  get secondAnchorX(): string {
    return time_clock_t_get_prop_second_anchor_x(this.nativeObj);
  }


  /**
   * 秒针图片旋转锚点y坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
  get secondAnchorY(): string {
    return time_clock_t_get_prop_second_anchor_y(this.nativeObj);
  }

};
/**
 * 文本选择器控件，通常用于选择日期和时间等。
 *
 *> XXX: 目前需要先设置options和visible_nr，再设置其它参数(在XML中也需要按此顺序)。
 *
 *text\_selector\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于text\_selector\_t控件。
 *
 *在xml中使用"text\_selector"标签创建文本选择器控件。如：
 *
 *```xml
 *<text_selector options="red;green;blue;gold;orange" visible_nr="3" text="red"/>
 *```
 *
 *> 更多用法请参考：[text\_selector.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/text_selector.xml)
 *
 *在c代码中使用函数text\_selector\_create创建文本选择器控件。如：
 *
 *
 *> 完整示例请参考：[text\_selector demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/text_selector.c)
 *
 *可用通过style来设置控件的显示风格，如字体和背景颜色等。如：
 *
 *```xml
 *<style name="dark" fg_color="#a0a0a0"  text_color="black" text_align_h="center">
 *<normal     bg_color="#ffffff" mask_color="#404040" border_color="#404040"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L443)
 *
 */
class TTextSelector extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建text_selector对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TTextSelector(text_selector_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换text_selector对象(供脚本语言使用)。
   * 
   * @param widget text_selector对象。
   *
   * @returns text_selector对象。
   */
  static cast(widget: TWidget): TTextSelector {
    return new TTextSelector(text_selector_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 重置所有选项。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  resetOptions(): TRet {
    return text_selector_reset_options(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取选项个数。
   * 
   *
   * @returns 返回选项个数。
   */
  countOptions(): number {
    return text_selector_count_options(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 追加一个选项。
   * 
   * @param value 值。
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  appendOption(value: any, text: string): TRet {
    return text_selector_append_option(this != null ? (this.nativeObj || this) : null, value, text);
  }


  /**
   * 设置选项。
   * 
   * @param options 选项。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setOptions(options: string): TRet {
    return text_selector_set_options(this != null ? (this.nativeObj || this) : null, options);
  }


  /**
   * 设置一系列的整数选项。
   * 
   * @param start 起始值。
   * @param nr 个数。
   * @param step 步长。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setRangeOptions(start: number, nr: number, step: number): TRet {
    return text_selector_set_range_options(this != null ? (this.nativeObj || this) : null, start, nr, step);
  }


  /**
   * 获取text_selector的值。
   * 
   *
   * @returns 返回值。
   */
  getValue(): number {
    return text_selector_get_value(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置text_selector的值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return text_selector_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 获取text_selector的文本。
   * 
   *
   * @returns 返回文本。
   */
  getTextValue(): string {
    return text_selector_get_text(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置text_selector的文本。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setText(text: string): TRet {
    return text_selector_set_text(this != null ? (this.nativeObj || this) : null, text);
  }


  /**
   * 设置第index个选项为当前选中的选项。
   * 
   * @param index 选项的索引。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSelectedIndex(index: number): TRet {
    return text_selector_set_selected_index(this != null ? (this.nativeObj || this) : null, index);
  }


  /**
   * 设置可见的选项数。
   * 
   * @param visible_nr 选项数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVisibleNr(visible_nr: number): TRet {
    return text_selector_set_visible_nr(this != null ? (this.nativeObj || this) : null, visible_nr);
  }


  /**
   * 可见的选项数量(只能是3或者5，缺省为5)。
   *
   */
  get visibleNr(): number {
    return text_selector_t_get_prop_visible_nr(this.nativeObj);
  }

  set visibleNr(v: number) {
    this.setVisibleNr(v);
  }


  /**
   * 当前选中的选项。
   *
   */
  get selectedIndex(): number {
    return text_selector_t_get_prop_selected_index(this.nativeObj);
  }

  set selectedIndex(v: number) {
    this.setSelectedIndex(v);
  }


  /**
   * 设置可选项(冒号分隔值和文本，分号分隔选项，如:1:red;2:green;3:blue)。
   *对于数值选项，也可以指定一个范围，用『-』分隔起始值、结束值和格式。
   *如："1-7-%02d"表示1到7，格式为『02d』，格式为可选，缺省为『%d』。
   *
   */
  get options(): string {
    return text_selector_t_get_prop_options(this.nativeObj);
  }

  set options(v: string) {
    this.setOptions(v);
  }

};
/**
 * 对象属性变化事件。
 *
 */
class TPropChangeEvent extends TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 把event对象转prop_change_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 返回event对象。
   */
  static cast(event: TEvent): TPropChangeEvent {
    return new TPropChangeEvent(prop_change_event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * 属性的名称。
   *
   */
  get name(): string {
    return prop_change_event_t_get_prop_name(this.nativeObj);
  }


  /**
   * 属性的值。
   *
   */
  get value(): TValue {
    return new TValue(prop_change_event_t_get_prop_value(this.nativeObj));
  }

};
/**
 * 进度变化事件。
 *
 */
class TProgressEvent extends TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 把event对象转progress_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 返回event对象。
   */
  static cast(event: TEvent): TProgressEvent {
    return new TProgressEvent(progress_event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * 进度百分比。
   *
   */
  get percent(): number {
    return progress_event_t_get_prop_percent(this.nativeObj);
  }

};
/**
 * 开关控件。
 *
 *switch\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于switch\_t控件。
 *
 *在xml中使用"switch"标签创建开关控件。如：
 *
 *```xml
 *<switch x="10" y="60" w="60" h="22" />
 *```
 *
 *> 更多用法请参考：[switch.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/switch.xml)
 *
 *在c代码中使用函数switch\_create创建开关控件。如：
 *
 *
 *> 完整示例请参考：[switch demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/switch.c)
 *
 *可用通过style来设置控件的显示风格，如背景图片等。如：
 *
 *```xml
 *<style name="default">
 *<normal  bg_image="switch" />
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L452)
 *
 */
class TSwitch extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建switch对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSwitch(switch_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置控件的值。
   * 
   * @param value 值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return switch_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 转换switch对象(供脚本语言使用)。
   * 
   * @param widget switch对象。
   *
   * @returns switch对象。
   */
  static cast(widget: TWidget): TSwitch {
    return new TSwitch(switch_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 值。
   *
   */
  get value(): boolean {
    return switch_t_get_prop_value(this.nativeObj);
  }

  set value(v: boolean) {
    this.setValue(v);
  }


  /**
   * 当开关处于关闭时，图片偏移相对于图片宽度的比例(缺省为1/3)。
   *
   */
  get maxXoffsetRatio(): number {
    return switch_t_get_prop_max_xoffset_ratio(this.nativeObj);
  }

};
/**
 * 滑动视图。
 *
 *滑动视图可以管理多个页面，并通过滑动来切换当前页面。也可以管理多张图片，让它们自动切换。
 *
 *slide\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于slide\_view\_t控件。
 *
 *在xml中使用"slide\_view"标签创建滑动视图控件。如：
 *
 *```xml
 *<slide_view x="0" y="0" w="100%" h="100%" style="dot">
 *<view x="0" y="0" w="100%" h="100%" children_layout="default(w=60,h=60,m=5,s=10)">
 *...
 *</view>
 *<view x="0" y="0" w="100%" h="100%" children_layout="default(w=60,h=60,m=5,s=10)">
 *...
 *</view>
 *</slide_view>
 *```
 *
 *> 更多用法请参考：[slide_view.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/slide_view.xml)
 *
 *在c代码中使用函数slide\_view\_create创建滑动视图控件。如：
 *
 *
 *> 完整示例请参考：
 *[slide_view demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/slide_view.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色和指示器的图标等等。如：
 *
 *```xml
 *<style name="dot">
 *<normal  icon="dot" active_icon="active_dot"/>
 *</style>
 *```
 *
 *> 如果希望背景图片跟随滚动，请将背景图片设置到页面上，否则设置到slide\_view上。
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L458)
 *
 */
class TSlideView extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建slide_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSlideView(slide_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为slide_view对象(供脚本语言使用)。
   * 
   * @param widget slide_view对象。
   *
   * @returns slide_view对象。
   */
  static cast(widget: TWidget): TSlideView {
    return new TSlideView(slide_view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置为自动播放模式。
   * 
   * @param auto_play 0表示禁止自动播放，非0表示自动播放时每一页播放的时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAutoPlay(auto_play: number): TRet {
    return slide_view_set_auto_play(this != null ? (this.nativeObj || this) : null, auto_play);
  }


  /**
   * 设置当前页的序号。
   * 
   * @param index 当前页的序号。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setActive(index: number): TRet {
    return slide_view_set_active(this != null ? (this.nativeObj || this) : null, index);
  }


  /**
   * 设置为上下滑动(缺省为左右滑动)。
   * 
   * @param vertical TRUE表示上下滑动，FALSE表示左右滑动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVertical(vertical: boolean): TRet {
    return slide_view_set_vertical(this != null ? (this.nativeObj || this) : null, vertical);
  }


  /**
   * 设置页面切换动画。
   *
   *anim_hint取值如下：
   *
   ** "translate"：平移。
   ** "overlap"：覆盖。
   ** "overlap\_with\_alpha"：覆盖并改变透明度。
   *
   *> 使用"overlap"或"overlap\_with\_alpha"动画时，背景图片最好指定到page上。
   *>
   *> 使用"overlap\_with\_alpha"动画时，slideview的背景设置为黑色，
   *> 或slideview的背景设置为透明，窗口的背景设置为黑色，以获得更好的视觉效果和性能。
   * 
   * @param anim_hint 页面切换动画。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAnimHint(anim_hint: string): TRet {
    return slide_view_set_anim_hint(this != null ? (this.nativeObj || this) : null, anim_hint);
  }


  /**
   * 设置循环切换模式。
   * 
   * @param loop 是否启用循环切换模式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLoop(loop: boolean): TRet {
    return slide_view_set_loop(this != null ? (this.nativeObj || this) : null, loop);
  }


  /**
   * 是否为上下滑动模式。
   *
   */
  get vertical(): boolean {
    return slide_view_t_get_prop_vertical(this.nativeObj);
  }

  set vertical(v: boolean) {
    this.setVertical(v);
  }


  /**
   * 自动播放。0表示禁止自动播放，非0表示自动播放时每一页播放的时间。
   *
   */
  get autoPlay(): number {
    return slide_view_t_get_prop_auto_play(this.nativeObj);
  }

  set autoPlay(v: number) {
    this.setAutoPlay(v);
  }


  /**
   * 循环切换模式。
   *
   *向后切换：切换到最后一页时，再往后切换就到第一页。
   *向前切换：切换到第一页时，再往前切换就到最后一页。
   *
   */
  get loop(): boolean {
    return slide_view_t_get_prop_loop(this.nativeObj);
  }

  set loop(v: boolean) {
    this.setLoop(v);
  }


  /**
   * 页面切换效果。
   *
   */
  get animHint(): string {
    return slide_view_t_get_prop_anim_hint(this.nativeObj);
  }

  set animHint(v: string) {
    this.setAnimHint(v);
  }

};
/**
 * slide_view的指示器控件。
 *
 *> 支持直线、弧线排布，默认有4种绘制样式，若设置了icon/active_icon，则优先使用icon/active_icon
 *
 *slide\_indicator\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于slide\_indicator\_t控件。
 *
 *在xml中使用"slide\_indicator"或"slide\_indicator\_arc"标签创建指示器控件。如：
 *
 *```xml
 *<slide_view name="view" x="0"  y="0" w="100%" h="100%">
 *...
 *</slide_view>
 *<slide_indicator name="indicator" x="right" y="0" w="6" h="100%"/>
 *```
 *
 *> 更多用法请参考：[slide\_view.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/slide_view.xml)
 *
 *在c代码中使用函数slide\_indicator\_create创建指示器控件。如：
 *
 *
 *```xml
 *<style name="default">
 *<normal fg_color="#FFFFFF80" selected_fg_color="#FFFFFF"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L350)
 *
 */
class TSlideIndicator extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建slide_indicator对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSlideIndicator(slide_indicator_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 创建slide_indicator对象（线性显示）
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static createLinear(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSlideIndicator(slide_indicator_create_linear(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 创建slide_indicator对象（圆弧显示）
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static createArc(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSlideIndicator(slide_indicator_create_arc(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为slide_indicator对象(供脚本语言使用)。
   * 
   * @param widget slide_indicator对象。
   *
   * @returns slide_indicator对象。
   */
  static cast(widget: TWidget): TSlideIndicator {
    return new TSlideIndicator(slide_indicator_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置当前页的序号。
   * 
   * @param value 当前项的序号。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return slide_indicator_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置指示器的数量。
   * 
   * @param max 数量。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMax(max: number): TRet {
    return slide_indicator_set_max(this != null ? (this.nativeObj || this) : null, max);
  }


  /**
   * 设置指示器的默认绘制类型。
   * 
   * @param default_paint 默认绘制类型。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setDefaultPaint(default_paint: TIndicatorDefaultPaint): TRet {
    return slide_indicator_set_default_paint(this != null ? (this.nativeObj || this) : null, default_paint);
  }


  /**
   * 设置指示器是否自动隐藏。
   * 
   * @param auto_hide 0表示禁止，非0表示无操作后延迟多久隐藏。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAutoHide(auto_hide: number): TRet {
    return slide_indicator_set_auto_hide(this != null ? (this.nativeObj || this) : null, auto_hide);
  }


  /**
   * 设置指示器的边距(默认为10像素)。
   * 
   * @param margin 指示器的边距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMargin(margin: number): TRet {
    return slide_indicator_set_margin(this != null ? (this.nativeObj || this) : null, margin);
  }


  /**
   * 设置指示器的间距(指示器有弧度时为角度值，否则为直线间距)。
   * 
   * @param spacing 指示器的间距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSpacing(spacing: number): TRet {
    return slide_indicator_set_spacing(this != null ? (this.nativeObj || this) : null, spacing);
  }


  /**
   * 设置指示器的大小(默认为8)。
   * 
   * @param size 指示器的大小。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSize(size: number): TRet {
    return slide_indicator_set_size(this != null ? (this.nativeObj || this) : null, size);
  }


  /**
   * 设置旋转锚点。
   * 
   * @param anchor_x 锚点坐标x。(后面加上px为像素点，不加px为相对百分比坐标)
   * @param anchor_y 锚点坐标y。(后面加上px为像素点，不加px为相对百分比坐标)
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAnchor(anchor_x: string, anchor_y: string): TRet {
    return slide_indicator_set_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
  }


  /**
   * 设置指示器指示的目标。
   * 
   * @param indicated_target 指示器指示的目标
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setIndicatedTarget(indicated_target: string): TRet {
    return slide_indicator_set_indicated_target(this != null ? (this.nativeObj || this) : null, indicated_target);
  }


  /**
   * 值(缺省为0)。
   *
   */
  get value(): number {
    return slide_indicator_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }


  /**
   * 最大值(缺省为100)。
   *
   */
  get max(): number {
    return slide_indicator_t_get_prop_max(this.nativeObj);
  }

  set max(v: number) {
    this.setMax(v);
  }


  /**
   * 指示器的类型。
   *
   */
  get defaultPaint(): TIndicatorDefaultPaint {
    return slide_indicator_t_get_prop_default_paint(this.nativeObj);
  }

  set defaultPaint(v: TIndicatorDefaultPaint) {
    this.setDefaultPaint(v);
  }


  /**
   * 自动隐藏。0表示禁止，非0表示无操作后延迟多久隐藏。
   *
   */
  get autoHide(): number {
    return slide_indicator_t_get_prop_auto_hide(this.nativeObj);
  }

  set autoHide(v: number) {
    this.setAutoHide(v);
  }


  /**
   * 指示器与边缘的边距。
   *
   */
  get margin(): number {
    return slide_indicator_t_get_prop_margin(this.nativeObj);
  }

  set margin(v: number) {
    this.setMargin(v);
  }


  /**
   * 指示器的中心之间的间距（圆弧显示时，间距的单位为弧度，否则为像素）。
   *
   */
  get spacing(): number {
    return slide_indicator_t_get_prop_spacing(this.nativeObj);
  }

  set spacing(v: number) {
    this.setSpacing(v);
  }


  /**
   * 指示器的大小。
   *
   */
  get size(): number {
    return slide_indicator_t_get_prop_size(this.nativeObj);
  }

  set size(v: number) {
    this.setSize(v);
  }


  /**
   * 锚点x坐标。
   *
   */
  get anchorX(): number {
    return slide_indicator_t_get_prop_anchor_x(this.nativeObj);
  }


  /**
   * 锚点y坐标。
   *
   */
  get anchorY(): number {
    return slide_indicator_t_get_prop_anchor_y(this.nativeObj);
  }


  /**
   * 指示器指示的目标。
   *
   */
  get indicatedTarget(): string {
    return slide_indicator_t_get_prop_indicated_target(this.nativeObj);
  }

  set indicatedTarget(v: string) {
    this.setIndicatedTarget(v);
  }

};
/**
 * 左右滑动菜单控件。
 *
 *一般用一组按钮作为子控件，通过左右滑动改变当前的项。除了当菜单使用外，也可以用来切换页面。
 *
 *slide\_menu\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于slide\_menu\_t控件。
 *
 *在xml中使用"slide\_menu"标签创建左右滑动菜单控件。如：
 *
 *```xml
 *<slide_menu style="mask" align_v="top">
 *<button style="slide_button" text="0"/>
 *<button style="slide_button" text="1"/>
 *<button style="slide_button" text="2"/>
 *<button style="slide_button" text="3"/>
 *<button style="slide_button" text="4"/>
 *</slide_menu>
 *```
 *
 *> 更多用法请参考：[slide_menu.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/slide_menu.xml)
 *
 *在c代码中使用函数slide\_menu\_create创建左右滑动菜单控件。如：
 *
 *
 *可按下面的方法关注当前项改变的事件：
 *
 *
 *可按下面的方法关注当前按钮被点击的事件：
 *
 *
 *> 完整示例请参考：[slide_menu demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/slide_menu.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色和蒙版颜色等等。如：
 *
 *```xml
 *<style name="mask">
 *<normal     bg_color="#f0f0f0" mask_color="#f0f0f0"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L493)
 *
 */
class TSlideMenu extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建slide_menu对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSlideMenu(slide_menu_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换slide_menu对象(供脚本语言使用)。
   * 
   * @param widget slide_menu对象。
   *
   * @returns slide_menu对象。
   */
  static cast(widget: TWidget): TSlideMenu {
    return new TSlideMenu(slide_menu_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置当前项。
   * 
   * @param value 当前项的索引。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return slide_menu_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置垂直对齐方式。
   * 
   * @param align_v 对齐方式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAlignV(align_v: TAlignV): TRet {
    return slide_menu_set_align_v(this != null ? (this.nativeObj || this) : null, align_v);
  }


  /**
   * 设置最小缩放比例。
   * 
   * @param min_scale 最小缩放比例，范围[0.5-1]。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMinScale(min_scale: number): TRet {
    return slide_menu_set_min_scale(this != null ? (this.nativeObj || this) : null, min_scale);
  }


  /**
   * 值。代表当前选中项的索引。
   *
   */
  get value(): number {
    return slide_menu_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }


  /**
   * 垂直对齐方式。
   *
   */
  get alignV(): TAlignV {
    return slide_menu_t_get_prop_align_v(this.nativeObj);
  }

  set alignV(v: TAlignV) {
    this.setAlignV(v);
  }


  /**
   * 最小缩放比例。
   *
   */
  get minScale(): number {
    return slide_menu_t_get_prop_min_scale(this.nativeObj);
  }

  set minScale(v: number) {
    this.setMinScale(v);
  }

};
/**
 * 滚动视图。
 *
 *scroll\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于scroll\_view\_t控件。
 *
 *在xml中使用"scroll\_view"标签创建滚动视图控件。如：
 *
 *```xml
 *<list_view x="0"  y="30" w="100%" h="-80" item_height="60">
 *<scroll_view name="view" x="0"  y="0" w="100%" h="100%">
 *<list_item style="odd" children_layout="default(rows=1,cols=0)">
 *<image draw_type="icon" w="30" image="earth"/>
 *<label w="-30" text="1.Hello AWTK !">
 *<switch x="r:10" y="m" w="60" h="20"/>
 *</label>
 *</list_item>
 *...
 *</scroll_view>
 *</list_view>
 *```
 *
 *> 滚动视图一般作为列表视图的子控件使用。
 *
 *> 更多用法请参考：[list\_view\_m.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/list_view_m.xml)
 *
 *在c代码中使用函数scroll\_view\_create创建列表视图控件。如：
 *
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框颜色等(一般情况不需要)。
 *
 */
class TScrollView extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建scroll_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TScrollView(scroll_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为scroll_view对象(供脚本语言使用)。
   * 
   * @param widget scroll_view对象。
   *
   * @returns scroll_view对象。
   */
  static cast(widget: TWidget): TScrollView {
    return new TScrollView(scroll_view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置虚拟宽度。
   * 
   * @param w 虚拟宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVirtualW(w: number): TRet {
    return scroll_view_set_virtual_w(this != null ? (this.nativeObj || this) : null, w);
  }


  /**
   * 设置虚拟高度。
   * 
   * @param h 虚拟高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVirtualH(h: number): TRet {
    return scroll_view_set_virtual_h(this != null ? (this.nativeObj || this) : null, h);
  }


  /**
   * 设置是否允许x方向滑动。
   * 
   * @param xslidable 是否允许滑动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setXslidable(xslidable: boolean): TRet {
    return scroll_view_set_xslidable(this != null ? (this.nativeObj || this) : null, xslidable);
  }


  /**
   * 设置是否允许y方向滑动。
   * 
   * @param yslidable 是否允许滑动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setYslidable(yslidable: boolean): TRet {
    return scroll_view_set_yslidable(this != null ? (this.nativeObj || this) : null, yslidable);
  }


  /**
   * 设置偏移量。
   * 
   * @param xoffset x偏移量。
   * @param yoffset y偏移量。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setOffset(xoffset: number, yoffset: number): TRet {
    return scroll_view_set_offset(this != null ? (this.nativeObj || this) : null, xoffset, yoffset);
  }


  /**
   * 设置偏移速度比例。
   * 
   * @param xspeed_scale x偏移速度比例。。
   * @param yspeed_scale y偏移速度比例。。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSpeedScale(xspeed_scale: number, yspeed_scale: number): TRet {
    return scroll_view_set_speed_scale(this != null ? (this.nativeObj || this) : null, xspeed_scale, yspeed_scale);
  }


  /**
   * 滚动到指定的偏移量。
   * 
   * @param xoffset_end x偏移量。
   * @param yoffset_end y偏移量。
   * @param duration 时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  scrollTo(xoffset_end: number, yoffset_end: number, duration: number): TRet {
    return scroll_view_scroll_to(this != null ? (this.nativeObj || this) : null, xoffset_end, yoffset_end, duration);
  }


  /**
   * 滚动到指定的偏移量。
   * 
   * @param xoffset_delta x偏移量。
   * @param yoffset_delta y偏移量。
   * @param duration 时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  scrollDeltaTo(xoffset_delta: number, yoffset_delta: number, duration: number): TRet {
    return scroll_view_scroll_delta_to(this != null ? (this.nativeObj || this) : null, xoffset_delta, yoffset_delta, duration);
  }


  /**
   * 虚拟宽度。
   *
   */
  get virtualW(): number {
    return scroll_view_t_get_prop_virtual_w(this.nativeObj);
  }

  set virtualW(v: number) {
    this.setVirtualW(v);
  }


  /**
   * 虚拟高度。
   *
   */
  get virtualH(): number {
    return scroll_view_t_get_prop_virtual_h(this.nativeObj);
  }

  set virtualH(v: number) {
    this.setVirtualH(v);
  }


  /**
   * x偏移量。
   *
   */
  get xoffset(): number {
    return scroll_view_t_get_prop_xoffset(this.nativeObj);
  }


  /**
   * y偏移量。
   *
   */
  get yoffset(): number {
    return scroll_view_t_get_prop_yoffset(this.nativeObj);
  }


  /**
   * x偏移速度比例。
   *
   */
  get xspeedScale(): number {
    return scroll_view_t_get_prop_xspeed_scale(this.nativeObj);
  }


  /**
   * y偏移速度比例。
   *
   */
  get yspeedScale(): number {
    return scroll_view_t_get_prop_yspeed_scale(this.nativeObj);
  }


  /**
   * 是否允许x方向滑动。
   *
   */
  get xslidable(): boolean {
    return scroll_view_t_get_prop_xslidable(this.nativeObj);
  }

  set xslidable(v: boolean) {
    this.setXslidable(v);
  }


  /**
   * 是否允许y方向滑动。
   *
   */
  get yslidable(): boolean {
    return scroll_view_t_get_prop_yslidable(this.nativeObj);
  }

  set yslidable(v: boolean) {
    this.setYslidable(v);
  }

};
/**
 * 滚动条控件。
 *
 *> 目前只支持垂直滚动。
 *
 *scroll\_bar\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于scroll\_bar\_t控件。
 *
 *在xml中使用"scroll\_bar"或"scroll\_bar\_d"或"scroll\_bar\_m"标签创建滚动条控件。如：
 *
 *```xml
 *<list_view x="0"  y="30" w="100%" h="-80" item_height="60">
 *<scroll_view name="view" x="0"  y="0" w="100%" h="100%">
 *...
 *</scroll_view>
 *<scroll_bar_m name="bar" x="right" y="0" w="6" h="100%" value="0"/>
 *</list_view>
 *```
 *
 *> 更多用法请参考：[list\_view\_m.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/list_view_m.xml)
 *
 *在c代码中使用函数scroll\_bar\_create创建列表项控件。如：
 *
 *
 *```xml
 *<style name="default">
 *<normal bg_color="#c0c0c0" fg_color="#808080"/>
 *<over bg_color="#c0c0c0" fg_color="#808080"/>
 *<pressed bg_color="#c0c0c0" fg_color="#808080"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L350)
 *
 */
class TScrollBar extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建scroll_bar对象
   *
   *> 根据宏WITH_DESKTOP_STYLE决定创建desktop风格还是mobile风格的滚动条
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TScrollBar(scroll_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为scroll_bar对象(供脚本语言使用)。
   * 
   * @param widget scroll_bar对象。
   *
   * @returns scroll_bar对象。
   */
  static cast(widget: TWidget): TScrollBar {
    return new TScrollBar(scroll_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 创建mobile风格的scroll_bar对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static createMobile(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TScrollBar(scroll_bar_create_mobile(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 创建desktop风格的scroll_bar对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static createDesktop(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TScrollBar(scroll_bar_create_desktop(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置参数。
   * 
   * @param virtual_size 虚拟高度。
   * @param row 每一行的高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setParams(virtual_size: number, row: number): TRet {
    return scroll_bar_set_params(this != null ? (this.nativeObj || this) : null, virtual_size, row);
  }


  /**
   * 滚动到指定的值。
   * 
   * @param value 值。
   * @param duration 动画持续时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  scrollTo(value: any, duration: number): TRet {
    return scroll_bar_scroll_to(this != null ? (this.nativeObj || this) : null, value, duration);
  }


  /**
   * 设置值，并触发EVT_VALUE_CHANGED事件。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return scroll_bar_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 在当前的值上增加一个值，并触发EVT_VALUE_CHANGED事件。
   * 
   * @param delta 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  addDelta(delta: number): TRet {
    return scroll_bar_add_delta(this != null ? (this.nativeObj || this) : null, delta);
  }


  /**
   * 在当前的值上增加一个值，并滚动到新的值，并触发EVT_VALUE_CHANGED事件。
   * 
   * @param delta 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  scrollDelta(delta: number): TRet {
    return scroll_bar_scroll_delta(this != null ? (this.nativeObj || this) : null, delta);
  }


  /**
   * 设置值，但不触发EVT_VALUE_CHANGED事件。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValueOnly(value: any): TRet {
    return scroll_bar_set_value_only(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 判断是否是mobile风格的滚动条。
   * 
   *
   * @returns 返回TRUE表示是mobile风格的，否则表示不是mobile风格的。
   */
  isMobile(): boolean {
    return scroll_bar_is_mobile(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 虚拟宽度或高度。
   *
   */
  get virtualSize(): number {
    return scroll_bar_t_get_prop_virtual_size(this.nativeObj);
  }


  /**
   * 当前的值。
   *
   */
  get value(): number {
    return scroll_bar_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }


  /**
   * 行的高度。
   *
   */
  get row(): number {
    return scroll_bar_t_get_prop_row(this.nativeObj);
  }


  /**
   * 滚动时是否启用动画。
   *
   */
  get animatable(): boolean {
    return scroll_bar_t_get_prop_animatable(this.nativeObj);
  }

};
/**
 * 列表视图控件。
 *
 *列表视图控件是一个可以垂直滚动的列表控件。
 *
 *如果不需要滚动，可以用view控件配置适当的layout参数作为列表控件。
 *
 *列表视图中的列表项可以固定高度，也可以使用不同高度。请参考[变高列表项](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/list_view_vh.xml)
 *
 *列表视图控件的中可以有滚动条，也可以没有滚动条。
 *可以使用移动设备风格的滚动条，也可以使用桌面风格的滚动条。
 *
 *list\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于list\_view\_t控件。
 *
 *在xml中使用"list\_view"标签创建列表视图控件。如：
 *
 *```xml
 *<list_view x="0"  y="30" w="100%" h="-80" item_height="60">
 *<scroll_view name="view" x="0"  y="0" w="100%" h="100%">
 *<list_item style="odd" children_layout="default(rows=1,cols=0)">
 *<image draw_type="icon" w="30" image="earth"/>
 *<label w="-30" text="1.Hello AWTK !">
 *<switch x="r:10" y="m" w="60" h="20"/>
 *</label>
 *</list_item>
 *...
 *</scroll_view>
 *</list_view>
 *```
 *
 *> 注意：列表项不是作为列表视图控件的直接子控件，而是作为滚动视图的子控件。
 *
 *
 *> 更多用法请参考：[list\_view\_m.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/list_view_m.xml)
 *
 *在c代码中使用函数list\_view\_create创建列表视图控件。如：
 *
 *
 *用代码构造列表视图是比较繁琐的事情，最好用XML来构造。
 *如果需要动态修改，可以使用widget\_clone来增加列表项，使用widget\_remove\_child来移出列表项。
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框颜色等(一般情况不需要)。
 *
 */
class TListView extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建list_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TListView(list_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置列表项的高度。
   * 
   * @param item_height 列表项的高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setItemHeight(item_height: number): TRet {
    return list_view_set_item_height(this != null ? (this.nativeObj || this) : null, item_height);
  }


  /**
   * 设置列表项的缺省高度。
   * 
   * @param default_item_height 列表项的高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setDefaultItemHeight(default_item_height: number): TRet {
    return list_view_set_default_item_height(this != null ? (this.nativeObj || this) : null, default_item_height);
  }


  /**
   * 设置是否自动隐藏滚动条。
   * 
   * @param auto_hide_scroll_bar 是否自动隐藏滚动条。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAutoHideScrollBar(auto_hide_scroll_bar: boolean): TRet {
    return list_view_set_auto_hide_scroll_bar(this != null ? (this.nativeObj || this) : null, auto_hide_scroll_bar);
  }


  /**
   * 转换为list_view对象(供脚本语言使用)。
   * 
   * @param widget list_view对象。
   *
   * @returns list_view对象。
   */
  static cast(widget: TWidget): TListView {
    return new TListView(list_view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 列表项的高度。如果 item_height 0，所有列表项使用固定高度，否则使用列表项自身的高度。
   *
   */
  get itemHeight(): number {
    return list_view_t_get_prop_item_height(this.nativeObj);
  }

  set itemHeight(v: number) {
    this.setItemHeight(v);
  }


  /**
   * 列表项的缺省高度。如果item_height <= 0 而且列表项自身的高度 <= 0，则使用缺省高度。
   *
   */
  get defaultItemHeight(): number {
    return list_view_t_get_prop_default_item_height(this.nativeObj);
  }

  set defaultItemHeight(v: number) {
    this.setDefaultItemHeight(v);
  }


  /**
   * 如果不需要滚动条时，自动隐藏滚动条。
   *
   */
  get autoHideScrollBar(): boolean {
    return list_view_t_get_prop_auto_hide_scroll_bar(this.nativeObj);
  }

  set autoHideScrollBar(v: boolean) {
    this.setAutoHideScrollBar(v);
  }

};
/**
 * 水平列表视图控件。
 *
 *list\_view\_h\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于list\_view\_h\_t控件。
 *
 *在xml中使用"list\_view\_h"标签创建水平列表视图控件。如：
 *
 *```xml
 *<list_view_h x="center"  y="10" w="90%" h="100" item_width="200" spacing="5">
 *<scroll_view name="view" w="100%" h="100%">
 *<image style="border" draw_type="auto" image="1" text="1"/>
 *...
 *</scroll_view>
 *</list_view_h>
 *```
 *
 *> 注意：列表项不是作为列表视图控件的直接子控件，而是作为滚动视图的子控件。
 *
 *
 *> 更多用法请参考：[list\_view\_h.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/list_view_h.xml)
 *
 *在c代码中使用函数list\_view\_h\_create创建水平列表视图控件。如：
 *
 *
 *用代码构造列表视图是比较繁琐的事情，最好用XML来构造。
 *如果需要动态修改，可以使用widget\_clone来增加列表项，使用widget\_remove\_child来移出列表项。
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框颜色等(一般情况不需要)。
 *
 */
class TListViewH extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建list_view_h对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TListViewH(list_view_h_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置列表项的宽度。
   * 
   * @param item_width 列表项的宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setItemWidth(item_width: number): TRet {
    return list_view_h_set_item_width(this != null ? (this.nativeObj || this) : null, item_width);
  }


  /**
   * 设置列表项的间距。
   * 
   * @param spacing 列表项的间距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSpacing(spacing: number): TRet {
    return list_view_h_set_spacing(this != null ? (this.nativeObj || this) : null, spacing);
  }


  /**
   * 转换为list_view_h对象(供脚本语言使用)。
   * 
   * @param widget list_view_h对象。
   *
   * @returns list_view_h对象。
   */
  static cast(widget: TWidget): TListViewH {
    return new TListViewH(list_view_h_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 列表项的宽度。
   *
   */
  get itemWidth(): number {
    return list_view_h_t_get_prop_item_width(this.nativeObj);
  }

  set itemWidth(v: number) {
    this.setItemWidth(v);
  }


  /**
   * 间距。
   *
   */
  get spacing(): number {
    return list_view_h_t_get_prop_spacing(this.nativeObj);
  }

  set spacing(v: number) {
    this.setSpacing(v);
  }

};
/**
 * 列表项控件。
 *
 *列表项控件是一个简单的容器控件，一般作为列表视图中滚动视图的子控件。
 *
 *list\_item\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于list\_item\_t控件。
 *
 *在xml中使用"list\_item"标签创建列表项控件。如：
 *
 *```xml
 *<list_view x="0"  y="30" w="100%" h="-80" item_height="60">
 *<scroll_view name="view" x="0"  y="0" w="100%" h="100%">
 *<list_item style="odd" children_layout="default(rows=1,cols=0)">
 *<image draw_type="icon" w="30" image="earth"/>
 *<label w="-30" text="1.Hello AWTK !">
 *<switch x="r:10" y="m" w="60" h="20"/>
 *</label>
 *</list_item>
 *...
 *</scroll_view>
 *</list_view>
 *```
 *
 *> 更多用法请参考：[list\_view\_m.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/list_view_m.xml)
 *
 *在c代码中使用函数list\_item\_create创建列表项控件。如：
 *
 *
 *> 列表项控件大小一般由列表控制，不需指定xywh参数。
 *
 *可以用style来实现可点击或不可点击的效果。如：
 *
 *```xml
 *<style name="odd_clickable" border_color="#a0a0a0"  border="bottom" text_color="black">
 *<normal     bg_color="#f5f5f5" />
 *<pressed    bg_color="#c0c0c0" />
 *<over       bg_color="#f5f5f5" />
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L372)
 *
 */
class TListItem extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建list_item对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TListItem(list_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为list_item对象(供脚本语言使用)。
   * 
   * @param widget list_item对象。
   *
   * @returns list_item对象。
   */
  static cast(widget: TWidget): TListItem {
    return new TListItem(list_item_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 可水平滚动的文本控件，方便实现长文本滚动。
 *
 *
 *hscroll\_label\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于hscroll\_label\_t控件。
 *
 *在xml中使用"hscroll\_label"标签创建行号控件，一般配合mledit使用。如：
 *
 *```xml
 *```
 *
 *> 更多用法请参考：[mledit.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/mledit.xml)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default" text_color="black">
 *<normal   />
 *<focused  />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml)
 *
 */
class THscrollLabel extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建hscroll_label对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new THscrollLabel(hscroll_label_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置lull。
   * 
   * @param lull 间歇时间(ms)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLull(lull: number): TRet {
    return hscroll_label_set_lull(this != null ? (this.nativeObj || this) : null, lull);
  }


  /**
   * 设置duration。
   * 
   * @param duration 滚动时间(ms)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setDuration(duration: number): TRet {
    return hscroll_label_set_duration(this != null ? (this.nativeObj || this) : null, duration);
  }


  /**
   * 设置only_focus。
   * 
   * @param only_focus 是否只有处于focus时才滚动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setOnlyFocus(only_focus: boolean): TRet {
    return hscroll_label_set_only_focus(this != null ? (this.nativeObj || this) : null, only_focus);
  }


  /**
   * 设置only_parent_focus。
   * 
   * @param only_parent_focus 是否只有处于focus时才滚动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setOnlyParentFocus(only_parent_focus: boolean): TRet {
    return hscroll_label_set_only_parent_focus(this != null ? (this.nativeObj || this) : null, only_parent_focus);
  }


  /**
   * 设置loop。
   * 
   * @param loop 是否循环滚动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLoop(loop: boolean): TRet {
    return hscroll_label_set_loop(this != null ? (this.nativeObj || this) : null, loop);
  }


  /**
   * 设置yoyo。
   * 
   * @param yoyo 是否往返滚动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setYoyo(yoyo: boolean): TRet {
    return hscroll_label_set_yoyo(this != null ? (this.nativeObj || this) : null, yoyo);
  }


  /**
   * 设置ellipses。
   * 
   * @param ellipses 是否在文本超长时在行尾显示"..."。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setEllipses(ellipses: boolean): TRet {
    return hscroll_label_set_ellipses(this != null ? (this.nativeObj || this) : null, ellipses);
  }


  /**
   * 设置x偏移(一般无需用户调用)。。
   * 
   * @param xoffset x偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setXoffset(xoffset: number): TRet {
    return hscroll_label_set_xoffset(this != null ? (this.nativeObj || this) : null, xoffset);
  }


  /**
   * 启动(一般无需用户调用)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  start(): TRet {
    return hscroll_label_start(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 停止(一般无需用户调用)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  stop(): TRet {
    return hscroll_label_stop(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 转换为hscroll_label对象(供脚本语言使用)。
   * 
   * @param widget hscroll_label对象。
   *
   * @returns hscroll_label对象。
   */
  static cast(widget: TWidget): THscrollLabel {
    return new THscrollLabel(hscroll_label_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 只有处于focus时才滚动(缺省否)。
   *
   */
  get onlyFocus(): boolean {
    return hscroll_label_t_get_prop_only_focus(this.nativeObj);
  }

  set onlyFocus(v: boolean) {
    this.setOnlyFocus(v);
  }


  /**
   * 只有父控件处于focus时才滚动(缺省否)。
   *
   */
  get onlyParentFocus(): boolean {
    return hscroll_label_t_get_prop_only_parent_focus(this.nativeObj);
  }

  set onlyParentFocus(v: boolean) {
    this.setOnlyParentFocus(v);
  }


  /**
   * loop是否循环滚动(缺省FALSE)。
   *
   */
  get loop(): boolean {
    return hscroll_label_t_get_prop_loop(this.nativeObj);
  }

  set loop(v: boolean) {
    this.setLoop(v);
  }


  /**
   * 是否往返滚动(缺省FALSE)。
   *
   */
  get yoyo(): boolean {
    return hscroll_label_t_get_prop_yoyo(this.nativeObj);
  }

  set yoyo(v: boolean) {
    this.setYoyo(v);
  }


  /**
   * 文本显示不下时，在行尾显示省略号(缺省FALSE)。
   *
   */
  get ellipses(): boolean {
    return hscroll_label_t_get_prop_ellipses(this.nativeObj);
  }

  set ellipses(v: boolean) {
    this.setEllipses(v);
  }


  /**
   * 滚动之间的间歇时间(ms)，缺省3000ms。
   *
   */
  get lull(): number {
    return hscroll_label_t_get_prop_lull(this.nativeObj);
  }

  set lull(v: number) {
    this.setLull(v);
  }


  /**
   * 完整的滚动一次需要的时间(ms)，缺省5000ms。
   *
   */
  get duration(): number {
    return hscroll_label_t_get_prop_duration(this.nativeObj);
  }

  set duration(v: number) {
    this.setDuration(v);
  }


  /**
   * 偏移量。
   *
   */
  get xoffset(): number {
    return hscroll_label_t_get_prop_xoffset(this.nativeObj);
  }

  set xoffset(v: number) {
    this.setXoffset(v);
  }


  /**
   * 文本的宽度。
   *
   */
  get textW(): number {
    return hscroll_label_t_get_prop_text_w(this.nativeObj);
  }

};
/**
 * 图文混排控件，实现简单的图文混排。
 *
 *rich\_text\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于rich\_text\_t控件。
 *
 *在xml中使用"rich\_text"标签创建图文混排控件。如：
 *
 *```xml
 *<rich_text x="0" y="0" w="100%" h="60"
 *text="<image name=&quota;bricks&quota;/><font align_v=&quota;middle&quota;>hello awtk!</font>" />
 *```
 *>
 *
 *> 更多用法请参考：
 *[rich_text.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/rich_text.xml)
 *
 *在c代码中使用函数rich\_text\_create创建图文混排控件。如：
 *
 *
 *> 完整示例请参考：
 *[rich_text demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/rich_text.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色等等。而字体的大小和颜色则由文本内部的属性决定。
 *
 *目前支持image和font两个tag：
 *
 ** image 支持的属性有：
 ** name 图片的名称。
 ** w 图片的宽度。
 ** h 图片的高度。
 *
 ** font 支持的属性有：
 ** color 颜色。
 ** size 大小。
 ** align_v 垂直方向对齐的方式(top|middle|bottom)。
 ** bold 粗体(暂不支持)
 ** italic 斜体(暂不支持)
 ** underline 下划线(暂不支持)
 *
 */
class TRichText extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建rich_text对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TRichText(rich_text_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置文本。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setText(text: string): TRet {
    return rich_text_set_text(this != null ? (this.nativeObj || this) : null, text);
  }


  /**
   * 转换为rich_text对象(供脚本语言使用)。
   * 
   * @param widget rich_text对象。
   *
   * @returns rich_text对象。
   */
  static cast(widget: TWidget): TRichText {
    return new TRichText(rich_text_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 行间距。
   *
   */
  get lineGap(): number {
    return rich_text_t_get_prop_line_gap(this.nativeObj);
  }


  /**
   * 边距。
   *
   */
  get margin(): number {
    return rich_text_t_get_prop_margin(this.nativeObj);
  }

};
/**
 * 进度圆环控件。
 *
 *progress\_circle\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于progress\_circle\_t控件。
 *
 *在xml中使用"progress\_circle"标签创建进度圆环控件。如：
 *
 *```xml
 *<progress_circle max="360" show_text="true" start_angle="90" />
 *```
 *
 *> 更多用法请参考：
 *[progress_circle.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/progress_circle.xml)
 *
 *在c代码中使用函数progress\_circle\_create创建进度圆环控件。如：
 *
 *
 *> 完整示例请参考：
 *[progress_circle
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/progress_circle.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default">
 *<normal text_color="green" fg_color="black" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L467)
 *
 */
class TProgressCircle extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建progress_circle对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TProgressCircle(progress_circle_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为progress_circle对象(供脚本语言使用)。
   * 
   * @param widget progress_circle对象。
   *
   * @returns progress_circle对象。
   */
  static cast(widget: TWidget): TProgressCircle {
    return new TProgressCircle(progress_circle_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return progress_circle_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置最大值。
   * 
   * @param max 最大值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMax(max: number): TRet {
    return progress_circle_set_max(this != null ? (this.nativeObj || this) : null, max);
  }


  /**
   * 设置环线的厚度。
   * 
   * @param line_width 环线的厚度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLineWidth(line_width: number): TRet {
    return progress_circle_set_line_width(this != null ? (this.nativeObj || this) : null, line_width);
  }


  /**
   * 设置起始角度。
   * 
   * @param start_angle 起始角度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setStartAngle(start_angle: number): TRet {
    return progress_circle_set_start_angle(this != null ? (this.nativeObj || this) : null, start_angle);
  }


  /**
   * 设置单位。
   * 
   * @param unit 单位。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setUnit(unit: string): TRet {
    return progress_circle_set_unit(this != null ? (this.nativeObj || this) : null, unit);
  }


  /**
   * 设置是否显示文本。
   * 
   * @param show_text 是否显示文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setShowText(show_text: boolean): TRet {
    return progress_circle_set_show_text(this != null ? (this.nativeObj || this) : null, show_text);
  }


  /**
   * 设置是否为逆时针方向。
   * 
   * @param counter_clock_wise 是否为逆时针方向。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setCounterClockWise(counter_clock_wise: boolean): TRet {
    return progress_circle_set_counter_clock_wise(this != null ? (this.nativeObj || this) : null, counter_clock_wise);
  }


  /**
   * 值(缺省为0)。
   *
   */
  get value(): number {
    return progress_circle_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }


  /**
   * 最大值(缺省为100)。
   *
   */
  get max(): number {
    return progress_circle_t_get_prop_max(this.nativeObj);
  }

  set max(v: number) {
    this.setMax(v);
  }


  /**
   * 起始角度(单位为度，缺省-90)。
   *
   */
  get startAngle(): number {
    return progress_circle_t_get_prop_start_angle(this.nativeObj);
  }

  set startAngle(v: number) {
    this.setStartAngle(v);
  }


  /**
   * 环线的厚度(缺省为8)。
   *
   */
  get lineWidth(): number {
    return progress_circle_t_get_prop_line_width(this.nativeObj);
  }

  set lineWidth(v: number) {
    this.setLineWidth(v);
  }


  /**
   * 单元(缺省无)。
   *
   */
  get unit(): string {
    return progress_circle_t_get_prop_unit(this.nativeObj);
  }

  set unit(v: string) {
    this.setUnit(v);
  }


  /**
   * 是否为逆时针方向(缺省为FALSE)。
   *
   */
  get counterClockWise(): boolean {
    return progress_circle_t_get_prop_counter_clock_wise(this.nativeObj);
  }

  set counterClockWise(v: boolean) {
    this.setCounterClockWise(v);
  }


  /**
   * 是否显示文本(缺省为TRUE)。
   *
   */
  get showText(): boolean {
    return progress_circle_t_get_prop_show_text(this.nativeObj);
  }

  set showText(v: boolean) {
    this.setShowText(v);
  }

};
/**
 * 多行编辑器控件。
 *
 *mledit\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于mledit\_t控件。
 *
 *在xml中使用"mledit"标签创建多行编辑器控件。如：
 *
 *```xml
 *<mledit x="c" y="m" w="300" h="300" />
 *```
 *
 *> 更多用法请参考：[mledit.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/mledit.xml)
 *
 *在c代码中使用函数mledit\_create创建多行编辑器控件。如：
 *
 *
 *> 完整示例请参考：[mledit demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/mledit.c)
 *
 *time\_clock一般不需要设置style。
 *
 */
class TMledit extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建mledit对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TMledit(mledit_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置编辑器是否为只读。
   * 
   * @param readonly 只读。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setReadonly(readonly: boolean): TRet {
    return mledit_set_readonly(this != null ? (this.nativeObj || this) : null, readonly);
  }


  /**
   * 设置为焦点。
   * 
   * @param focus 是否为焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFocus(focus: boolean): TRet {
    return mledit_set_focus(this != null ? (this.nativeObj || this) : null, focus);
  }


  /**
   * 设置编辑器是否自动折行。
   * 
   * @param wrap_word 是否自动折行。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setWrapWord(wrap_word: boolean): TRet {
    return mledit_set_wrap_word(this != null ? (this.nativeObj || this) : null, wrap_word);
  }


  /**
   * 设置编辑器的最大行数。
   * 
   * @param max_lines 最大行数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMaxLines(max_lines: number): TRet {
    return mledit_set_max_lines(this != null ? (this.nativeObj || this) : null, max_lines);
  }


  /**
   * 设置编辑器的输入提示。
   * 
   * @param tips 输入提示。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setInputTips(tips: string): TRet {
    return mledit_set_input_tips(this != null ? (this.nativeObj || this) : null, tips);
  }


  /**
   * 设置编辑器光标位置。
   * 
   * @param cursor 光标位置。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setCursor(cursor: number): TRet {
    return mledit_set_cursor(this != null ? (this.nativeObj || this) : null, cursor);
  }


  /**
   * 设置编辑器滚动速度。
   * 
   * @param scroll_line 滚动行数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setScrollLine(scroll_line: number): TRet {
    return mledit_set_scroll_line(this != null ? (this.nativeObj || this) : null, scroll_line);
  }


  /**
   * 转换为mledit对象(供脚本语言使用)。
   * 
   * @param widget mledit对象。
   *
   * @returns mledit对象。
   */
  static cast(widget: TWidget): TMledit {
    return new TMledit(mledit_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 编辑器是否为只读。
   *
   */
  get readonly(): boolean {
    return mledit_t_get_prop_readonly(this.nativeObj);
  }

  set readonly(v: boolean) {
    this.setReadonly(v);
  }


  /**
   * 输入提示。
   *
   */
  get tips(): string {
    return mledit_t_get_prop_tips(this.nativeObj);
  }


  /**
   * 是否自动折行。
   *
   */
  get wrapWord(): boolean {
    return mledit_t_get_prop_wrap_word(this.nativeObj);
  }

  set wrapWord(v: boolean) {
    this.setWrapWord(v);
  }


  /**
   * 最大行数。
   *
   */
  get maxLines(): number {
    return mledit_t_get_prop_max_lines(this.nativeObj);
  }

  set maxLines(v: number) {
    this.setMaxLines(v);
  }


  /**
   * 鼠标一次滚动行数。
   *
   */
  get scrollLine(): number {
    return mledit_t_get_prop_scroll_line(this.nativeObj);
  }

  set scrollLine(v: number) {
    this.setScrollLine(v);
  }

};
/**
 * 行号。多行编辑器的行号。
 *
 *line\_number\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于line\_number\_t控件。
 *
 *在xml中使用"lin\e_number"标签创建行号控件，一般配合mledit使用。如：
 *
 *```xml
 *<mledit x="c" y="10" h="40%" w="90%" focus="true" left_margin="36" right_margin="16"
 *wrap_word="true">
 *<line_number x="0" y="0" w="32" h="100%" value="0"/>
 *<scroll_bar_d x="right" y="0" w="14" h="100%" value="0"/>
 *</mledit>
 *```
 *
 *> 更多用法请参考：[mledit.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/mledit.xml)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<line_number>
 *<style name="default">
 *<normal text_color="black" bg_color="#d0d0d0" text_align_h="right"/>
 *</style>
 *</line_number>
 *```
 *
 *> 更多用法请参考：
 *[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L556)
 *
 */
class TLineNumber extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建line_number对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TLineNumber(line_number_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置顶部边距。
   * 
   * @param top_margin 顶部边距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTopMargin(top_margin: number): TRet {
    return line_number_set_top_margin(this != null ? (this.nativeObj || this) : null, top_margin);
  }


  /**
   * 设置顶部边距。
   * 
   * @param bottom_margin 顶部边距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setBottomMargin(bottom_margin: number): TRet {
    return line_number_set_bottom_margin(this != null ? (this.nativeObj || this) : null, bottom_margin);
  }


  /**
   * 设置行高。
   * 
   * @param line_height 行高。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLineHeight(line_height: number): TRet {
    return line_number_set_line_height(this != null ? (this.nativeObj || this) : null, line_height);
  }


  /**
   * 设置y偏移。
   * 
   * @param yoffset 行高。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setYoffset(yoffset: number): TRet {
    return line_number_set_yoffset(this != null ? (this.nativeObj || this) : null, yoffset);
  }


  /**
   * 转换为line_number对象(供脚本语言使用)。
   * 
   * @param widget line_number对象。
   *
   * @returns line_number对象。
   */
  static cast(widget: TWidget): TLineNumber {
    return new TLineNumber(line_number_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 图片值控件。
 *
 *可以用图片来表示如电池电量、WIFI信号强度和其它各种数值的值。
 *
 *其原理如下：
 *
 ** 1.把value以format为格式转换成字符串。
 ** 2.把每个字符与image(图片文件名前缀)映射成一个图片名。
 ** 3.最后把这些图片显示出来。
 *
 *image\_value\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于image\_value\_t控件。
 *
 *在xml中使用"image\_value"标签创建图片值控件。如：
 *
 *```xml
 *<image_value  value="0" image="num_" />
 *```
 *
 *> 更多用法请参考：
 *[image\_value](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/image_value.xml)
 *
 *在c代码中使用函数image\_value\_create创建图片值控件。如：
 *
 *
 *> 完整示例请参考：
 *[image_value demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/image_value.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框等等，不过一般情况并不需要。
 *
 */
class TImageValue extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建image_value对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TImageValue(image_value_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置图片前缀。
   * 
   * @param image 图片前缀。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setImage(image: string): TRet {
    return image_value_set_image(this != null ? (this.nativeObj || this) : null, image);
  }


  /**
   * 设置格式。
   * 
   * @param format 格式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFormat(format: string): TRet {
    return image_value_set_format(this != null ? (this.nativeObj || this) : null, format);
  }


  /**
   * 设置值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return image_value_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 转换为image_value对象(供脚本语言使用)。
   * 
   * @param widget image_value对象。
   *
   * @returns image_value对象。
   */
  static cast(widget: TWidget): TImageValue {
    return new TImageValue(image_value_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 图片名称的前缀。
   *
   */
  get image(): string {
    return image_value_t_get_prop_image(this.nativeObj);
  }

  set image(v: string) {
    this.setImage(v);
  }


  /**
   * 数值到字符串转换时的格式，缺省为"%d"。
   *
   */
  get format(): string {
    return image_value_t_get_prop_format(this.nativeObj);
  }

  set format(v: string) {
    this.setFormat(v);
  }


  /**
   * 值。
   *
   */
  get value(): number {
    return image_value_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }

};
/**
 * 图片动画控件，指定一个图片前缀，依次显示指定序列的图片，从而形成动画效果。
 *
 *图片序列可以用sequence指定，也可以用start\_index和end\_index指定一个范围。
 *
 *image\_animation\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于image\_animation\_t控件。
 *
 *在xml中使用"image\_animation"标签创建图片动画控件。如：
 *
 *```xml
 *<image_animation image="ani" start_index="1" end_index="9" auto_play="true" interval="50"
 *delay="100"/>
 *```
 *
 *> 更多用法请参考：
 *[image_animation.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/image_animation.xml)
 *
 *在c代码中使用函数image\_animation\_create创建图片动画控件。如：
 *
 *
 *> 完整示例请参考：
 *[image_animation
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/image_animation.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框等等，不过一般情况并不需要。
 *
 */
class TImageAnimation extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建image_animation对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TImageAnimation(image_animation_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置是否循环播放。
   * 
   * @param loop 是否循环播放。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLoop(loop: boolean): TRet {
    return image_animation_set_loop(this != null ? (this.nativeObj || this) : null, loop);
  }


  /**
   * 设置图片前缀。
   * 
   * @param image 图片前缀。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setImage(image: string): TRet {
    return image_animation_set_image(this != null ? (this.nativeObj || this) : null, image);
  }


  /**
   * 设置播放间隔时间。
   * 
   * @param interval 间隔时间(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setInterval(interval: number): TRet {
    return image_animation_set_interval(this != null ? (this.nativeObj || this) : null, interval);
  }


  /**
   * 设置延迟播放时间(仅适用于自动播放)。
   * 
   * @param delay 延迟播放时间(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setDelay(delay: number): TRet {
    return image_animation_set_delay(this != null ? (this.nativeObj || this) : null, delay);
  }


  /**
   * 设置是否自动播放。
   * 
   * @param auto_play 是否自动播放。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAutoPlay(auto_play: boolean): TRet {
    return image_animation_set_auto_play(this != null ? (this.nativeObj || this) : null, auto_play);
  }


  /**
   * 设置播放序列。比如image为"fire"，sequence为"12223", 将依次播放"fire1", "fire2", "fire2", "fire2",
   *"fire3"。
   * 
   * @param sequence 播放序列。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSequence(sequence: string): TRet {
    return image_animation_set_sequence(this != null ? (this.nativeObj || this) : null, sequence);
  }


  /**
   * 设置播放序列。比如image为"fire"，start_index为0, end_index为99, 将依次播放"fire0", ...,
   *"fire99"。
   *
   *若指定的图片不存在，则重复上一张图片。
   * 
   * @param start_index 图片起始序数。
   * @param end_index 图片结束序数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setRangeSequence(start_index: number, end_index: number): TRet {
    return image_animation_set_range_sequence(this != null ? (this.nativeObj || this) : null, start_index, end_index);
  }


  /**
   * 播放。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  play(): TRet {
    return image_animation_play(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 停止(并重置index为-1)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  stop(): TRet {
    return image_animation_stop(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 暂停。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  pause(): TRet {
    return image_animation_pause(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 手动切换到下一张图片。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  next(): TRet {
    return image_animation_next(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置生成图片名的格式。
   *
   *XXX:生成图片名时，第一个参数是图片名前缀，第二个是序数，只能在此前提下设置格式。
   *
   *```
   *const char* format = image_animation->format ? image_animation->format : "%s%d";
   *tk_snprintf(name, TK_NAME_LEN, format, image_animation->image, image_animation->index);
   *```
   * 
   * @param format 格式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFormat(format: string): TRet {
    return image_animation_set_format(this != null ? (this.nativeObj || this) : null, format);
  }


  /**
   * 设置绘制完成后unload图片，以释放内存空间。
   * 
   * @param unload_after_paint 是否绘制完成后unload图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setUnloadAfterPaint(unload_after_paint: boolean): TRet {
    return image_animation_set_unload_after_paint(this != null ? (this.nativeObj || this) : null, unload_after_paint);
  }


  /**
   * 转换为image_animation对象(供脚本语言使用)。
   * 
   * @param widget image_animation对象。
   *
   * @returns image_animation对象。
   */
  static cast(widget: TWidget): TImageAnimation {
    return new TImageAnimation(image_animation_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 图片名称的前缀。
   *
   */
  get image(): string {
    return image_animation_t_get_prop_image(this.nativeObj);
  }

  set image(v: string) {
    this.setImage(v);
  }


  /**
   * 播放的序列，字符可选值为数字和英文大小写字母，字符可以重复。如：0123456789或者123123abcd。
   *
   */
  get sequence(): string {
    return image_animation_t_get_prop_sequence(this.nativeObj);
  }

  set sequence(v: string) {
    this.setSequence(v);
  }


  /**
   * 图片起始序数。
   *
   */
  get startIndex(): number {
    return image_animation_t_get_prop_start_index(this.nativeObj);
  }


  /**
   * 图片结束序数。
   *
   */
  get endIndex(): number {
    return image_animation_t_get_prop_end_index(this.nativeObj);
  }


  /**
   * 是否循环播放。
   *
   */
  get loop(): boolean {
    return image_animation_t_get_prop_loop(this.nativeObj);
  }

  set loop(v: boolean) {
    this.setLoop(v);
  }


  /**
   * 是否自动播放。
   *
   */
  get autoPlay(): boolean {
    return image_animation_t_get_prop_auto_play(this.nativeObj);
  }

  set autoPlay(v: boolean) {
    this.setAutoPlay(v);
  }


  /**
   * 绘制完成后unload图片，以释放内存空间。
   *
   */
  get unloadAfterPaint(): boolean {
    return image_animation_t_get_prop_unload_after_paint(this.nativeObj);
  }

  set unloadAfterPaint(v: boolean) {
    this.setUnloadAfterPaint(v);
  }


  /**
   * 索引到图片名转换时的格式，缺省为"%s%d"。
   *
   */
  get format(): string {
    return image_animation_t_get_prop_format(this.nativeObj);
  }

  set format(v: string) {
    this.setFormat(v);
  }


  /**
   * 每张图片播放的时间(毫秒)。
   *
   */
  get interval(): number {
    return image_animation_t_get_prop_interval(this.nativeObj);
  }

  set interval(v: number) {
    this.setInterval(v);
  }


  /**
   * 自动播放时延迟播放的时间(毫秒)。
   *
   */
  get delay(): number {
    return image_animation_t_get_prop_delay(this.nativeObj);
  }

  set delay(v: number) {
    this.setDelay(v);
  }

};
/**
 * 表盘控件。
 *
 *表盘控件就是一张图片。
 *
 *guage\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于guage\_t控件。
 *
 *在xml中使用"guage"标签创建表盘控件。如：
 *
 *```xml
 *<guage x="c" y="10" w="240" h="240" image="guage_bg"
 *```
 *
 *> 更多用法请参考：
 *[guage.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/guage.xml)
 *
 *在c代码中使用函数guage\_create创建表盘控件。如：
 *
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<guage>
 *<style name="border">
 *<normal border_color="#000000" bg_color="#e0e0e0" text_color="black"/>
 *</style>
 *</guage>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml)
 *
 */
class TGuage extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建guage对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TGuage(guage_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为guage对象(供脚本语言使用)。
   * 
   * @param widget guage对象。
   *
   * @returns guage对象。
   */
  static cast(widget: TWidget): TGuage {
    return new TGuage(guage_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置背景图片的名称。
   * 
   * @param name 图片名称，该图片必须存在于资源管理器。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setImage(name: string): TRet {
    return guage_set_image(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置图片的显示方式。
   *
   *> 绘制方式的属性值和枚举值:
   *[image\_draw\_type\_name\_value](https://github.com/zlgopen/awtk/blob/master/src/base/enums.c#L98)
   * 
   * @param draw_type 显示方式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setDrawType(draw_type: TImageDrawType): TRet {
    return guage_set_draw_type(this != null ? (this.nativeObj || this) : null, draw_type);
  }


  /**
   * 背景图片。
   *
   */
  get image(): string {
    return guage_t_get_prop_image(this.nativeObj);
  }

  set image(v: string) {
    this.setImage(v);
  }


  /**
   * 图片的绘制方式。
   *
   */
  get drawType(): TImageDrawType {
    return guage_t_get_prop_draw_type(this.nativeObj);
  }

  set drawType(v: TImageDrawType) {
    this.setDrawType(v);
  }

};
/**
 * 仪表指针控件。
 *
 *仪表指针就是一张旋转的图片，图片可以是普通图片也可以是SVG图片。
 *
 *在嵌入式平台上，对于旋转的图片，SVG图片的效率比位图高数倍，所以推荐使用SVG图片。
 *
 *guage\_pointer\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于guage\_pointer\_t控件。
 *
 *在xml中使用"guage\_pointer"标签创建仪表指针控件。如：
 *
 *```xml
 *<guage_pointer x="c" y="50" w="24" h="140" value="-128" image="guage_pointer" />
 *```
 *
 *> 更多用法请参考：
 *[guage.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/guage.xml)
 *
 *在c代码中使用函数guage\_pointer\_create创建仪表指针控件。如：
 *
 *
 *> 创建之后，需要用guage\_pointer\_set\_image设置仪表指针图片。
 *
 */
class TGuagePointer extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建guage_pointer对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TGuagePointer(guage_pointer_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为guage_pointer对象(供脚本语言使用)。
   * 
   * @param widget guage_pointer对象。
   *
   * @returns guage_pointer对象。
   */
  static cast(widget: TWidget): TGuagePointer {
    return new TGuagePointer(guage_pointer_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置指针角度。12点钟方向为0度，顺时钟方向为正，单位为度。
   * 
   * @param angle 指针角度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAngle(angle: number): TRet {
    return guage_pointer_set_angle(this != null ? (this.nativeObj || this) : null, angle);
  }


  /**
   * 设置指针的图片。
   * 
   * @param image 指针的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setImage(image: string): TRet {
    return guage_pointer_set_image(this != null ? (this.nativeObj || this) : null, image);
  }


  /**
   * 设置指针的旋转锚点。
   * 
   * @param anchor_x 指针的锚点坐标x。(后面加上px为像素点，不加px为相对百分比坐标)
   * @param anchor_y 指针的锚点坐标y。(后面加上px为像素点，不加px为相对百分比坐标)
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAnchor(anchor_x: string, anchor_y: string): TRet {
    return guage_pointer_set_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
  }


  /**
   * 指针角度。12点钟方向为0度，顺时钟方向为正，单位为度。
   *
   */
  get angle(): number {
    return guage_pointer_t_get_prop_angle(this.nativeObj);
  }

  set angle(v: number) {
    this.setAngle(v);
  }


  /**
   * 指针图片。
   *
   *图片须垂直向上，图片的中心点为旋转方向。
   *
   */
  get image(): string {
    return guage_pointer_t_get_prop_image(this.nativeObj);
  }

  set image(v: string) {
    this.setImage(v);
  }


  /**
   * 旋转锚点x坐标。
   *
   */
  get anchorX(): number {
    return guage_pointer_t_get_prop_anchor_x(this.nativeObj);
  }


  /**
   * 旋转锚点y坐标。
   *
   */
  get anchorY(): number {
    return guage_pointer_t_get_prop_anchor_y(this.nativeObj);
  }

};
/**
 * 将draggable放入目标控件，即可让目标控件或当前窗口可以被拖动。
 *
 *draggable\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于draggable\_t控件。
 *
 *在xml中使用"draggable"标签创建draggable控件。如：
 *
 *```xml
 *<button text="Drag Me" w="80" h="40" x="10" y="10">
 *<draggable />
 *</button>
 *```
 *
 *拖动对话框标题时移动对话框：
 *
 *```xml
 *<dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK"
 *<draggable drag_window="true"/>
 *</dialog_title>
 *```
 *
 *> 更多用法请参考：
 *[draggable.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/draggable.xml)
 *
 *在c代码中使用函数draggable\_create创建按钮控件。如：
 *
 *
 *> draggable本身不可见，故无需style。
 *
 */
class TDraggable extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建draggable对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TDraggable(draggable_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为draggable对象(供脚本语言使用)。
   * 
   * @param widget draggable对象。
   *
   * @returns draggable对象。
   */
  static cast(widget: TWidget): TDraggable {
    return new TDraggable(draggable_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置top。
   * 
   * @param top 拖动范围的顶部限制。缺省为父控件的顶部。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTop(top: number): TRet {
    return draggable_set_top(this != null ? (this.nativeObj || this) : null, top);
  }


  /**
   * 设置bottom。
   * 
   * @param bottom 拖动范围的底部限制。缺省为父控件的底部。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setBottom(bottom: number): TRet {
    return draggable_set_bottom(this != null ? (this.nativeObj || this) : null, bottom);
  }


  /**
   * 设置left。
   * 
   * @param left 拖动范围的左边限制。缺省为父控件的左边。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLeft(left: number): TRet {
    return draggable_set_left(this != null ? (this.nativeObj || this) : null, left);
  }


  /**
   * 设置right。
   * 
   * @param right 拖动范围的右边限制。缺省为父控件的右边边。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setRight(right: number): TRet {
    return draggable_set_right(this != null ? (this.nativeObj || this) : null, right);
  }


  /**
   * 设置vertical_only。
   * 
   * @param vertical_only 只允许垂直拖动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVerticalOnly(vertical_only: boolean): TRet {
    return draggable_set_vertical_only(this != null ? (this.nativeObj || this) : null, vertical_only);
  }


  /**
   * 设置horizontal_only。
   * 
   * @param horizontal_only 只允许水平拖动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setHorizontalOnly(horizontal_only: boolean): TRet {
    return draggable_set_horizontal_only(this != null ? (this.nativeObj || this) : null, horizontal_only);
  }


  /**
   * 设置drag_window。
   *拖动窗口而不是父控件。比如放在对话框的titlebar上，拖动titlebar其实是希望拖动对话框。
   * 
   * @param drag_window drag_window
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setDragWindow(drag_window: boolean): TRet {
    return draggable_set_drag_window(this != null ? (this.nativeObj || this) : null, drag_window);
  }


  /**
   * 拖动范围的顶部限制。缺省为父控件的顶部。
   *
   */
  get top(): number {
    return draggable_t_get_prop_top(this.nativeObj);
  }

  set top(v: number) {
    this.setTop(v);
  }


  /**
   * 拖动范围的底部限制。缺省为父控件的底部。
   *
   */
  get bottom(): number {
    return draggable_t_get_prop_bottom(this.nativeObj);
  }

  set bottom(v: number) {
    this.setBottom(v);
  }


  /**
   * 拖动范围的左边限制。缺省为父控件的左边。
   *
   */
  get left(): number {
    return draggable_t_get_prop_left(this.nativeObj);
  }

  set left(v: number) {
    this.setLeft(v);
  }


  /**
   * 拖动范围的右边限制。缺省为父控件的右边边。
   *
   */
  get right(): number {
    return draggable_t_get_prop_right(this.nativeObj);
  }

  set right(v: number) {
    this.setRight(v);
  }


  /**
   * 只允许垂直拖动。
   *
   */
  get verticalOnly(): boolean {
    return draggable_t_get_prop_vertical_only(this.nativeObj);
  }

  set verticalOnly(v: boolean) {
    this.setVerticalOnly(v);
  }


  /**
   * 只允许水平拖动。
   *
   */
  get horizontalOnly(): boolean {
    return draggable_t_get_prop_horizontal_only(this.nativeObj);
  }

  set horizontalOnly(v: boolean) {
    this.setHorizontalOnly(v);
  }


  /**
   * 拖动窗口而不是父控件。比如放在对话框的titlebar上，拖动titlebar其实是希望拖动对话框。
   *
   */
  get dragWindow(): boolean {
    return draggable_t_get_prop_drag_window(this.nativeObj);
  }

  set dragWindow(v: boolean) {
    this.setDragWindow(v);
  }

};
/**
 * 颜色选择器。
 *
 *color\_picker\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于color\_picker\_t控件。
 *
 *在xml中使用"color\_picker"标签创建颜色选择器控件。如：
 *
 *```xml
 *<color_picker x="0" y="0" w="100%" h="100%" value="orange">
 *<color_component x="0" y="0" w="200" h="200" name="sv"/>
 *<color_component x="210" y="0" w="20" h="200" name="h"/>
 *<color_tile x="0" y="210" w="50%" h="20" name="new" bg_color="green"/>
 *<color_tile x="right" y="210" w="50%" h="20" name="old" bg_color="blue"/>
 *</color_picker>
 *```
 *
 *> 更多用法请参考：
 *[color\_picker](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/color_picker.xml)
 *
 *其中的子控件必须按下列规则命名：
 *
 ** r 红色分量。可以是spin_box、edit和slider。
 ** g 绿色分量。可以是spin_box、edit和slider。
 ** b 蓝色分量。可以是spin_box、edit和slider。
 ** h Hue分量。可以是spin_box、edit、slider和color_component。
 ** s Saturation分量。可以是spin_box、edit和slider。
 ** v Value/Brightness分量。可以是spin_box、edit和slider。
 ** sv Saturation和Value/Brightness分量。可以是color_component。
 ** old 旧的值。可以是spin_box、edit和color_tile。
 ** new 新的值。可以是spin_box、edit和color_tile。
 *
 */
class TColorPicker extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建color_picker对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TColorPicker(color_picker_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置颜色。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setColor(color: string): TRet {
    return color_picker_set_color(this != null ? (this.nativeObj || this) : null, color);
  }


  /**
   * 转换为color_picker对象(供脚本语言使用)。
   * 
   * @param widget color_picker对象。
   *
   * @returns color_picker对象。
   */
  static cast(widget: TWidget): TColorPicker {
    return new TColorPicker(color_picker_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 颜色。
   *
   */
  get value(): string {
    return color_picker_t_get_prop_value(this.nativeObj);
  }

};
/**
 * 颜色选择器的颜色分量。
 *控件的名称有严格规定：
 *COLOR_PICKER_CHILD_SV: 水平为Value/Brightness(递增)，垂直为Saturation(递减)。
 *COLOR_PICKER_CHILD_H: 水平为同色，垂直为Hue(递减)。
 *
 */
class TColorComponent extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 转换为color_component对象(供脚本语言使用)。
   * 
   * @param widget color_component对象。
   *
   * @returns color_component对象。
   */
  static cast(widget: TWidget): TColorComponent {
    return new TColorComponent(color_component_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 窗口管理器。
 *
 */
class TWindowManager extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 获取全局window_manager对象
   * 
   *
   * @returns 对象。
   */
  static instance(): TWindowManager {
    return new TWindowManager(window_manager());
  }


  /**
   * 转换为window_manager对象(供脚本语言使用)。
   * 
   * @param widget window_manager对象。
   *
   * @returns window_manager对象。
   */
  static cast(widget: TWidget): TWindowManager {
    return new TWindowManager(window_manager_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 获取最上面的主窗口。
   * 
   *
   * @returns 返回窗口对象。
   */
  getTopMainWindow(): TWidget {
    return new TWidget(window_manager_get_top_main_window(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 获取最上面的窗口。
   * 
   *
   * @returns 返回窗口对象。
   */
  getTopWindow(): TWidget {
    return new TWidget(window_manager_get_top_window(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 获取前一个的窗口。
   * 
   *
   * @returns 返回窗口对象。
   */
  getPrevWindow(): TWidget {
    return new TWidget(window_manager_get_prev_window(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 获取指针当前的X坐标。
   * 
   *
   * @returns 返回指针当前的X坐标。
   */
  getPointerX(): number {
    return window_manager_get_pointer_x(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取指针当前的Y坐标。
   * 
   *
   * @returns 返回指针当前的X坐标。
   */
  getPointerY(): number {
    return window_manager_get_pointer_y(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取指针当前是否按下。
   * 
   *
   * @returns 返回指针当前是否按下。
   */
  getPointerPressed(): boolean {
    return window_manager_get_pointer_pressed(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置是否显示FPS。
   * 
   * @param show_fps 是否显示FPS。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setShowFps(show_fps: boolean): TRet {
    return window_manager_set_show_fps(this != null ? (this.nativeObj || this) : null, show_fps);
  }


  /**
   * 设置屏保时间。
   * 
   * @param screen_saver_time 屏保时间(单位毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setScreenSaverTime(screen_saver_time: number): TRet {
    return window_manager_set_screen_saver_time(this != null ? (this.nativeObj || this) : null, screen_saver_time);
  }


  /**
   * 设置鼠标指针。
   * 
   * @param cursor 图片名称(从图片管理器中加载)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setCursor(cursor: string): TRet {
    return window_manager_set_cursor(this != null ? (this.nativeObj || this) : null, cursor);
  }


  /**
   * 请求关闭顶层窗口。
   *
   *> 如果顶层窗口时模态对话框，用DIALOG\_QUIT\_NONE调用dialog\_quit。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  back(): TRet {
    return window_manager_back(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 回到主窗口，关闭之上的全部窗口。
   *
   *> 如果顶层窗口时模态对话框，用DIALOG\_QUIT\_NONE调用dialog\_quit。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  backToHome(): TRet {
    return window_manager_back_to_home(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 回到指定的窗口，关闭之上的全部窗口。
   *
   *> 如果顶层窗口时模态对话框，用DIALOG\_QUIT\_NONE调用dialog\_quit。
   * 
   * @param target 目标窗口的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  backTo(target: string): TRet {
    return window_manager_back_to(this != null ? (this.nativeObj || this) : null, target);
  }

};
/**
 * 窗口。
 *
 *本类把窗口相关的公共行为进行抽象，放到一起方便重用。目前已知的具体实现如下图：
 *
 *
 *
 *> 本类是一个抽象类，不能进行实例化。请在应用程序中使用具体的类，如window\_t。
 *
 */
class TWindowBase extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 转换为window_base对象(供脚本语言使用)。
   * 
   * @param widget window_base对象。
   *
   * @returns window_base对象。
   */
  static cast(widget: TWidget): TWindowBase {
    return new TWindowBase(window_base_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 主题资源的名称。
   *每个窗口都可以有独立的主题文件，如果没指定，则使用系统缺省的主题文件。
   *主题是一个XML文件，放在assets/raw/styles目录下。
   *请参考[主题](https://github.com/zlgopen/awtk/blob/master/docs/theme.md)
   *
   */
  get theme(): string {
    return window_base_t_get_prop_theme(this.nativeObj);
  }


  /**
   * 收到EVT_REQUEST_CLOSE_WINDOW是否自动关闭窗口。
   *
   *如果关闭窗口时，需要用户确认:
   *
   ** 1.将closable设置为WINDOW\_CLOSABLE\_CONFIRM
   *
   ** 2.处理窗口的EVT\_REQUEST\_CLOSE\_WINDOW事件
   *
   *> closable在XML中取值为：yes/no/confirm，缺省为yes。
   *
   */
  get closable(): TWindowClosable {
    return window_base_t_get_prop_closable(this.nativeObj);
  }

};
/**
 * 可变的style(可实时修改并生效，主要用于在designer中被编辑的控件，或者一些特殊控件)。
 *
 *style\_mutable也对style\_const进行了包装，当用户没修改某个值时，便从style\_const中获取。
 *
 */
class TStyleMutable extends TStyle {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 设置style的名称。
   * 
   * @param name 名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setName(name: string): TRet {
    return style_mutable_set_name(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置指定名称整数格式的值。
   * 
   * @param state 控件状态。
   * @param name 属性名。
   * @param val 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setInt(state: string, name: string, val: number): TRet {
    return style_mutable_set_int(this != null ? (this.nativeObj || this) : null, state, name, val);
  }


  /**
   * 转换为style_mutable对象。
   * 
   * @param s style对象。
   *
   * @returns style对象。
   */
  static cast(s: TStyle): TStyleMutable {
    return new TStyleMutable(style_mutable_cast(s != null ? (s.nativeObj || s) : null));
  }


  /**
   * 创建style\_mutable对象。
   *
   *> 除了测试程序外不需要直接调用，widget会通过style\_factory\_create创建。
   * 
   * @param widget 控件
   * @param default_style 缺省的style。
   *
   * @returns style对象。
   */
  static create(widget: TWidget, default_style: TStyle): TStyle {
    return new TStyleMutable(style_mutable_create(widget != null ? (widget.nativeObj || widget) : null, default_style != null ? (default_style.nativeObj || default_style) : null));
  }


  /**
   * 名称。
   *
   */
  get name(): string {
    return style_mutable_t_get_prop_name(this.nativeObj);
  }

  set name(v: string) {
    this.setName(v);
  }

};
/**
 * 图片控件基类。
 *
 *本类把图片相关控件的公共行为进行抽象，放到一起方便重用。目前已知的具体实现如下图：
 *
 *
 *
 *> 本类是一个抽象类，不能进行实例化。请在应用程序中使用具体的类，如image\_t。
 *
 *如果需要显示文件系统中的图片，只需将图片名称换成实际的文件名，并加上"file://"前缀即可。如：
 *
 *```
 *<image draw_type="center" image="file://./demos/assets/default/raw/images/xx/flag_CN.png" />
 *<gif image="file://./demos/assets/default/raw/images/x2/bee.gif" />
 *<svg image="file://./demos/assets/default/raw/images/svg/china.bsvg" />
 *```
 *
 */
class TImageBase extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 设置控件的图片名称。
   *
   *> 如果需要显示文件系统中的图片，只需将图片名称换成实际的文件名，并加上"file://"前缀即可。
   * 
   * @param name 图片名称，该图片必须存在于资源管理器。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setImage(name: string): TRet {
    return image_base_set_image(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置控件的旋转角度(仅在WITH_VGCANVAS定义时生效)。
   * 
   * @param rotation 旋转角度(幅度)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setRotation(rotation: number): TRet {
    return image_base_set_rotation(this != null ? (this.nativeObj || this) : null, rotation);
  }


  /**
   * 设置控件的缩放比例(仅在WITH_VGCANVAS定义时生效)。
   * 
   * @param scale_x X方向缩放比例。
   * @param scale_y Y方向缩放比例。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setScale(scale_x: number, scale_y: number): TRet {
    return image_base_set_scale(this != null ? (this.nativeObj || this) : null, scale_x, scale_y);
  }


  /**
   * 设置控件的锚点(仅在WITH_VGCANVAS定义时生效)。
   * 
   * @param anchor_x 锚点X(0-1)。0在控件左边，0.5在控件中间，1在控件右边。
   * @param anchor_y 锚点Y(0-1)。0在控件顶部，0.5在控件中间，1在控件底部。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAnchor(anchor_x: number, anchor_y: number): TRet {
    return image_base_set_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
  }


  /**
   * 设置控件的选中状态。
   * 
   * @param selected 是否被选中。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSelected(selected: boolean): TRet {
    return image_base_set_selected(this != null ? (this.nativeObj || this) : null, selected);
  }


  /**
   * 设置控件是否可以被选中。
   * 
   * @param selectable 是否可以被选中。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSelectable(selectable: boolean): TRet {
    return image_base_set_selectable(this != null ? (this.nativeObj || this) : null, selectable);
  }


  /**
   * 设置控件是否可以被点击。
   * 
   * @param clickable 是否可以被点击。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setClickable(clickable: boolean): TRet {
    return image_base_set_clickable(this != null ? (this.nativeObj || this) : null, clickable);
  }


  /**
   * 转换为image_base对象(供脚本语言使用)。
   * 
   * @param widget image_base对象。
   *
   * @returns image_base对象。
   */
  static cast(widget: TWidget): TImageBase {
    return new TImageBase(image_base_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 图片的名称。
   *
   */
  get image(): string {
    return image_base_t_get_prop_image(this.nativeObj);
  }

  set image(v: string) {
    this.setImage(v);
  }


  /**
   * 锚点X(0-1)。0在控件左边，0.5在控件中间，1在控件右边。
   *
   */
  get anchorX(): number {
    return image_base_t_get_prop_anchor_x(this.nativeObj);
  }


  /**
   * 锚点Y(0-1)。0在控件顶部，0.5在控件中间，1在控件底部。
   *
   */
  get anchorY(): number {
    return image_base_t_get_prop_anchor_y(this.nativeObj);
  }


  /**
   * 控件在X方向上的缩放比例。
   *
   */
  get scaleX(): number {
    return image_base_t_get_prop_scale_x(this.nativeObj);
  }


  /**
   * 控件在Y方向上的缩放比例。
   *
   */
  get scaleY(): number {
    return image_base_t_get_prop_scale_y(this.nativeObj);
  }


  /**
   * 控件的旋转角度(幅度)。
   *
   */
  get rotation(): number {
    return image_base_t_get_prop_rotation(this.nativeObj);
  }

  set rotation(v: number) {
    this.setRotation(v);
  }


  /**
   * 点击时，是否触发EVT_CLICK事件。
   *
   */
  get clickable(): boolean {
    return image_base_t_get_prop_clickable(this.nativeObj);
  }

  set clickable(v: boolean) {
    this.setClickable(v);
  }


  /**
   * 是否设置选中状态。
   *
   */
  get selectable(): boolean {
    return image_base_t_get_prop_selectable(this.nativeObj);
  }

  set selectable(v: boolean) {
    this.setSelectable(v);
  }


  /**
   * 当前是否被选中。
   *
   */
  get selected(): boolean {
    return image_base_t_get_prop_selected(this.nativeObj);
  }

  set selected(v: boolean) {
    this.setSelected(v);
  }

};
/**
 * 窗口事件，由窗口管理器触发。
 *
 */
class TWindowEvent extends TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 把event对象转window_event_t对象。主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 对象。
   */
  static cast(event: TEvent): TWindowEvent {
    return new TWindowEvent(window_event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * canvas。
   *
   */
  get window(): TWidget {
    return new TWidget(window_event_t_get_prop_window(this.nativeObj));
  }

};
/**
 * 绘制事件。
 *
 */
class TPaintEvent extends TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 把event对象转paint_event_t对象。主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event 对象。
   */
  static cast(event: TEvent): TPaintEvent {
    return new TPaintEvent(paint_event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * canvas。
   *
   */
  get c(): TCanvas {
    return new TCanvas(paint_event_t_get_prop_c(this.nativeObj));
  }

};
/**
 * 按键事件。
 *
 */
class TKeyEvent extends TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 把event对象转key_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
  static cast(event: TEvent): TKeyEvent {
    return new TKeyEvent(key_event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * 键值。
   *
   */
  get key(): number {
    return key_event_t_get_prop_key(this.nativeObj);
  }


  /**
   * alt键是否按下。
   *
   */
  get alt(): boolean {
    return key_event_t_get_prop_alt(this.nativeObj);
  }


  /**
   * left alt键是否按下。
   *
   */
  get lalt(): boolean {
    return key_event_t_get_prop_lalt(this.nativeObj);
  }


  /**
   * right alt键是否按下。
   *
   */
  get ralt(): boolean {
    return key_event_t_get_prop_ralt(this.nativeObj);
  }


  /**
   * right alt键是否按下。
   *ctrl键是否按下。
   *
   */
  get ctrl(): boolean {
    return key_event_t_get_prop_ctrl(this.nativeObj);
  }


  /**
   * left ctrl键是否按下。
   *
   */
  get lctrl(): boolean {
    return key_event_t_get_prop_lctrl(this.nativeObj);
  }


  /**
   * right ctrl键是否按下。
   *
   */
  get rctrl(): boolean {
    return key_event_t_get_prop_rctrl(this.nativeObj);
  }


  /**
   * shift键是否按下。
   *
   */
  get shift(): boolean {
    return key_event_t_get_prop_shift(this.nativeObj);
  }


  /**
   * left shift键是否按下。
   *
   */
  get lshift(): boolean {
    return key_event_t_get_prop_lshift(this.nativeObj);
  }


  /**
   * right shift键是否按下。
   *
   */
  get rshift(): boolean {
    return key_event_t_get_prop_rshift(this.nativeObj);
  }


  /**
   * left shift键是否按下。
   *cmd/win键是否按下。
   *
   */
  get cmd(): boolean {
    return key_event_t_get_prop_cmd(this.nativeObj);
  }


  /**
   * menu键是否按下。
   *
   */
  get menu(): boolean {
    return key_event_t_get_prop_menu(this.nativeObj);
  }


  /**
   * capslock键是否按下。
   *
   */
  get capslock(): boolean {
    return key_event_t_get_prop_capslock(this.nativeObj);
  }

};
/**
 * 指针事件。
 *
 */
class TPointerEvent extends TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 把event对象转pointer_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
  static cast(event: TEvent): TPointerEvent {
    return new TPointerEvent(pointer_event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * x坐标。
   *
   */
  get x(): number {
    return pointer_event_t_get_prop_x(this.nativeObj);
  }


  /**
   * y坐标。
   *
   */
  get y(): number {
    return pointer_event_t_get_prop_y(this.nativeObj);
  }


  /**
   * button。
   *
   */
  get button(): number {
    return pointer_event_t_get_prop_button(this.nativeObj);
  }


  /**
   * 指针是否按下。
   *
   */
  get pressed(): boolean {
    return pointer_event_t_get_prop_pressed(this.nativeObj);
  }


  /**
   * alt键是否按下。
   *
   */
  get alt(): boolean {
    return pointer_event_t_get_prop_alt(this.nativeObj);
  }


  /**
   * ctrl键是否按下。
   *
   */
  get ctrl(): boolean {
    return pointer_event_t_get_prop_ctrl(this.nativeObj);
  }


  /**
   * cmd键是否按下。
   *
   */
  get cmd(): boolean {
    return pointer_event_t_get_prop_cmd(this.nativeObj);
  }


  /**
   * menu键是否按下。
   *
   */
  get menu(): boolean {
    return pointer_event_t_get_prop_menu(this.nativeObj);
  }


  /**
   * shift键是否按下。
   *
   */
  get shift(): boolean {
    return pointer_event_t_get_prop_shift(this.nativeObj);
  }

};
/**
 * 滚轮事件。
 *
 */
class TOrientationEvent extends TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 把event对象转orientation_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
  static cast(event: TEvent): TOrientationEvent {
    return new TOrientationEvent(orientation_event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * 屏幕方向。
   *
   */
  get orientation(): number {
    return orientation_event_t_get_prop_orientation(this.nativeObj);
  }

};
/**
 * 滚轮事件。
 *
 */
class TWheelEvent extends TEvent {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 把event对象转wheel_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
  static cast(event: TEvent): TWheelEvent {
    return new TWheelEvent(wheel_event_cast(event != null ? (event.nativeObj || event) : null));
  }


  /**
   * 滚轮的y值。
   *
   */
  get dy(): number {
    return wheel_event_t_get_prop_dy(this.nativeObj);
  }


  /**
   * alt键是否按下。
   *
   */
  get alt(): boolean {
    return wheel_event_t_get_prop_alt(this.nativeObj);
  }


  /**
   * ctrl键是否按下。
   *
   */
  get ctrl(): boolean {
    return wheel_event_t_get_prop_ctrl(this.nativeObj);
  }


  /**
   * shift键是否按下。
   *
   */
  get shift(): boolean {
    return wheel_event_t_get_prop_shift(this.nativeObj);
  }

};
/**
 * app_bar控件。
 *
 *一个简单的容器控件，一般在窗口的顶部，用于显示本窗口的状态和信息。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *app\_bar\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于app\_bar\_t控件。
 *
 *在xml中使用"app\_bar"标签创建app\_bar。如：
 *
 *```xml
 *<app_bar x="0" y="0" w="100%" h="30"
 *<label x="0" y="0" w="100%" h="100%" text="Basic Controls" />
 *</app_bar>
 *```
 *
 *在c代码中使用函数app\_bar\_create创建app\_bar。如：
 *
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TAppBar extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建app_bar对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TAppBar(app_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为app_bar对象(供脚本语言使用)。
   * 
   * @param widget app_bar对象。
   *
   * @returns app_bar对象。
   */
  static cast(widget: TWidget): TAppBar {
    return new TAppBar(app_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * Button Group控件。一个简单的容器控件，用于容纳一组按钮控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *button\_group\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于button\_group\_t控件。
 *
 *在xml中使用"button\_group"标签创建button\_group。如：
 *
 *```xml
 *<button_group x="0" y="m" w="100%" h="40" children_layout="default(c=4,r=1,s=5,m=5)">
 *<button name="open:basic" text="Basic"/>
 *<button name="open:button" text="Buttons"/>
 *<button name="open:edit" text="Edits"/>
 *<button name="open:keyboard" text="KeyBoard"/>
 *</button_group>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TButtonGroup extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建button_group对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TButtonGroup(button_group_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为button_group对象(供脚本语言使用)。
   * 
   * @param widget button_group对象。
   *
   * @returns button_group对象。
   */
  static cast(widget: TWidget): TButtonGroup {
    return new TButtonGroup(button_group_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 按钮控件。
 *
 *点击按钮之后会触发EVT\_CLICK事件，注册EVT\_CLICK事件以执行特定操作。
 *
 *按钮控件也可以作为容器使用，使用图片和文本作为其子控件，可以实现很多有趣的效果。
 *
 *button\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于button\_t控件。
 *
 *在xml中使用"button"标签创建按钮控件。如：
 *
 *```xml
 *<button x="c" y="m" w="80" h="30" text="OK"/>
 *```
 *
 *> 更多用法请参考：
 *[button.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/button.xml)
 *
 *在c代码中使用函数button\_create创建按钮控件。如：
 *
 *
 *> 创建之后，需要用widget\_set\_text或widget\_set\_text\_utf8设置文本内容。
 *
 *> 完整示例请参考：
 *[button demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/button.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0"  text_color="black">
 *<normal     bg_color="#f0f0f0" />
 *<pressed    bg_color="#c0c0c0" x_offset="1" y_offset="1"/>
 *<over       bg_color="#e0e0e0" />
 *<disable    bg_color="gray" text_color="#d0d0d0" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L31)
 *
 */
class TButton extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建button对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TButton(button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为button对象(供脚本语言使用)。
   * 
   * @param widget button对象。
   *
   * @returns button对象。
   */
  static cast(widget: TWidget): TButton {
    return new TButton(button_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置触发EVT\_CLICK事件的时间间隔。为0则不重复触发EVT\_CLICK事件。
   * 
   * @param repeat 触发EVT_CLICK事件的时间间隔(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setRepeat(repeat: number): TRet {
    return button_set_repeat(this != null ? (this.nativeObj || this) : null, repeat);
  }


  /**
   * 设置是否启用长按事件。
   * 
   * @param enable_long_press 是否启用长按事件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setEnableLongPress(enable_long_press: boolean): TRet {
    return button_set_enable_long_press(this != null ? (this.nativeObj || this) : null, enable_long_press);
  }


  /**
   * 重复触发EVT\_CLICK事件的时间间隔。
   *
   *为0则不重复触发EVT\_CLICK事件。
   *
   */
  get repeat(): number {
    return button_t_get_prop_repeat(this.nativeObj);
  }

  set repeat(v: number) {
    this.setRepeat(v);
  }


  /**
   * 是否启用长按事件，为true时才触发长按事件。
   *
   *触发长按事件后不再触发点击事件。
   *缺省不启用。
   *
   */
  get enableLongPress(): boolean {
    return button_t_get_prop_enable_long_press(this.nativeObj);
  }

  set enableLongPress(v: boolean) {
    this.setEnableLongPress(v);
  }

};
/**
 * 勾选按钮控件(单选/多选)。
 *
 *check\_button\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于check\_button\_t控件。
 *
 *在xml中使用"check_button"标签创建多选按钮控件。如：
 *
 *```xml
 *<check_button name="c1" text="Book"/>
 *```
 *
 *在xml中使用"radio_button"标签创建单选按钮控件。如：
 *
 *```xml
 *<radio_button name="r1" text="Book"/>
 *```
 *
 *> 更多用法请参考：
 *[button.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/basic.xml)
 *
 *在c代码中使用函数check\_button\_create创建多选按钮控件。如：
 *
 *
 *在c代码中使用函数check\_button\_create\_radio创建单选按钮控件。如：
 *
 *
 *> 完整示例请参考：
 *[button demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/check_button.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default" icon_at="left">
 *<normal  icon="unchecked" />
 *<pressed icon="unchecked" />
 *<over    icon="unchecked" text_color="green"/>
 *<normal_of_checked icon="checked" text_color="blue"/>
 *<pressed_of_checked icon="checked" text_color="blue"/>
 *<over_of_checked icon="checked" text_color="green"/>
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L227)
 *
 */
class TCheckButton extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建多选按钮对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TCheckButton(check_button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 创建单选按钮对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static createRadio(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TCheckButton(check_button_create_radio(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置控件的值。
   * 
   * @param value 值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return check_button_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 转换check_button对象(供脚本语言使用)。
   * 
   * @param widget check_button对象。
   *
   * @returns check_button对象。
   */
  static cast(widget: TWidget): TCheckButton {
    return new TCheckButton(check_button_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 值。
   *
   */
  get value(): boolean {
    return check_button_t_get_prop_value(this.nativeObj);
  }

  set value(v: boolean) {
    this.setValue(v);
  }

};
/**
 * 一个裁剪子控件的容器控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *clip\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于clip\_view\_t控件。
 *
 *在xml中使用"clip_view"标签创建clip_view，在clip_view控件下的所有子控件都会被裁剪。如下button控件会被裁剪，无法画出clip_view控件 ：
 *
 *```xml
 *<clip_view x="0" y="0" w="100" h="100">
 *<button x="50" y="10" w="100" h="50" />
 *</clip_view>
 *```
 *
 *备注：在clip_view控件下的所有子控件都会被裁剪，如果子控件本身会设置裁剪区的话，在子控件中计算裁剪区的交集，具体请参考scroll_view控件的scroll_view_on_paint_children函数。
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TClipView extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建clip_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TClipView(clip_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为clip_view对象(供脚本语言使用)。
   * 
   * @param widget clip_view对象。
   *
   * @returns clip_view对象。
   */
  static cast(widget: TWidget): TClipView {
    return new TClipView(clip_view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 色块控件。
 *
 *用来显示一个颜色块，它通过属性而不是主题来设置颜色，方便在运行时动态改变颜色。
 *
 *可以使用value属性访问背景颜色的颜色值。
 *
 *color\_tile\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于color\_tile\_t控件。
 *
 *在xml中使用"color_tile"标签创建色块控件。如：
 *
 *```xml
 *<color_tile x="c" y="m" w="80" h="30" bg_color="green" />
 *```
 *
 *> 更多用法请参考：
 *[color_tile](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/color_picker_rgb.xml)
 *
 *在c代码中使用函数color_tile\_create创建色块控件。如：
 *
 *> 创建之后，用color\_tile\_set\_bg\_color设置背景颜色。
 *
 */
class TColorTile extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建color_tile对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TColorTile(color_tile_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为color_tile对象(供脚本语言使用)。
   * 
   * @param widget color_tile对象。
   *
   * @returns color_tile对象。
   */
  static cast(widget: TWidget): TColorTile {
    return new TColorTile(color_tile_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置背景颜色。
   * 
   * @param color 背景颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setBgColor(color: string): TRet {
    return color_tile_set_bg_color(this != null ? (this.nativeObj || this) : null, color);
  }


  /**
   * 背景颜色。
   *
   */
  get bgColor(): string {
    return color_tile_t_get_prop_bg_color(this.nativeObj);
  }

  set bgColor(v: string) {
    this.setBgColor(v);
  }


  /**
   * 边框颜色。
   *
   */
  get borderColor(): string {
    return color_tile_t_get_prop_border_color(this.nativeObj);
  }

};
/**
 * column。一个简单的容器控件，垂直排列其子控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *column\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于column\_t控件。
 *
 *在xml中使用"column"标签创建column。如：
 *
 *```xml
 *<column x="0" y="0" w="100%" h="100%" children_layout="default(c=1,r=0)">
 *<button name="open:basic" text="Basic"/>
 *<button name="open:button" text="Buttons"/>
 *<button name="open:edit" text="Edits"/>
 *<button name="open:keyboard" text="KeyBoard"/>
 *</column>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TColumn extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建column对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TColumn(column_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为column对象(供脚本语言使用)。
   * 
   * @param widget column对象。
   *
   * @returns column对象。
   */
  static cast(widget: TWidget): TColumn {
    return new TColumn(column_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * ComboBox Item控件。
 *
 *本类仅供combo\_box控件内部使用。
 *
 */
class TComboBoxItem extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建combo_box_item对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TComboBoxItem(combo_box_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换combo_box_item对象(供脚本语言使用)。
   * 
   * @param widget combo_box_item对象。
   *
   * @returns combo_box_item对象。
   */
  static cast(widget: TWidget): TComboBoxItem {
    return new TComboBoxItem(combo_box_item_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置控件是否被选中。
   * 
   * @param checked 是否被选中。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setChecked(checked: boolean): TRet {
    return combo_box_item_set_checked(this != null ? (this.nativeObj || this) : null, checked);
  }


  /**
   * 设置控件的值。
   * 
   * @param value 值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return combo_box_item_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 值。
   *
   */
  get value(): number {
    return combo_box_item_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }


  /**
   * 是否被选中。
   *
   */
  get checked(): boolean {
    return combo_box_item_t_get_prop_checked(this.nativeObj);
  }

  set checked(v: boolean) {
    this.setChecked(v);
  }

};
/**
 * 下拉列表控件。
 *
 *点击右边的按钮，可弹出一个下拉列表，从中选择一项作为当前的值。
 *
 *combo\_box\_t是[edit\_t](edit_t.md)的子类控件，edit\_t的函数均适用于combo\_box\_t控件。
 *
 *在xml中使用"combo_box"标签创建下拉列表控件。
 *
 *列表选项可以直接写在"options"属性中。如：
 *
 *```xml
 *<combo_box readonly="true" x="10" y="bottom:5" w="200" h="30" tr_text="ok"
 *options="1:ok;2:cancel;"/>
 *```
 *
 *列表选项也可以放在独立的窗口中，用属性"open_window"指定窗口的名称。如：
 *
 *```xml
 *<combo_box open_window="language" readonly="true" x="10" y="bottom:50" w="200" h="30"
 *tr_text="english"/>
 *```
 *
 *language.xml:
 *
 *```xml
 *<popup close_when_click_outside="true" h="80"
 *<list_view x="0"  y="0" w="100%" h="100%" item_height="30">
 *<scroll_view name="view" x="0"  y="0" w="-12" h="100%">
 *<combo_box_item tr_text="english"/>
 *<combo_box_item tr_text="chinese" />
 *</scroll_view>
 *<scroll_bar_d name="bar" x="right" y="0" w="12" h="100%" value="0"/>
 *</list_view>
 *</popup>
 *```
 *
 *> 更多用法请参考：[combo_box.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/combo_box.xml)
 *
 *
 *
 *如果在文本比较长时，希望在获得焦点时文本自动滚动，可以放入一个hscroll_label为子控件，并命名为"value"。如：
 *
 *```xml
 *<combo_box left_margin="6" readonly="true" x="10" y="50" w="80" h="30" options="leftttttttttt;centerrrrrrrrrrrrrrrr;rightttttttttt;"
 *selected_index="1">
 *<hscroll_label x="0" y="0" w="-30" h="100%"
 *name="value"
 *lull="1000"
 *loop="true"
 *yoyo="true"
 *ellipses="true"
 *only_parent_focus="true"/>
 *<button style="combobox_down" x="right:5" y="middle" w="20" h="20"/>
 *</combo_box>
 *```
 *
 *在c代码中使用函数combo\_box\_create创建下拉列表控件。如：
 *
 *
 *创建之后：
 *
 ** 用combo\_box\_set\_options设置可选项目。
 ** 用combo\_box\_set\_selected\_index设置缺省项。
 *
 *> 完整示例请参考：[combo_box
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/combo_box.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<combo_box>
 *<style name="default" border_color="#a0a0a0"  text_color="black" text_align_h="left">
 *<normal     bg_color="#f0f0f0" />
 *<focused    bg_color="#f0f0f0" border_color="black"/>
 *<empty      bg_color="#f0f0f0" text_color="#a0a0a0" />
 *</style>
 *</combo_box>
 *```
 *
 ** 1.combobox的下拉按钮的style名称为combobox_down，可以在主题文件中设置。
 *
 *```xml
 *<button>
 *<style name="combobox_down" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" icon="arrow_down_n"/>
 *<pressed    bg_color="#c0c0c0" icon="arrow_down_p"/>
 *<over       bg_color="#e0e0e0" icon="arrow_down_o"/>
 *</style>
 *</button>
 *```
 *
 ** 2.combobox的弹出popup窗口的style名称为combobox_popup，可以在主题文件中设置。
 *
 *```xml
 *<popup>
 *<style name="combobox_popup" border_color="red">
 *<normal bg_color="#808080"/>
 *</style>
 *</popup>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L422)
 *
 */
class TComboBox extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建combo_box对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TComboBox(combo_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换combo_box对象(供脚本语言使用)。
   * 
   * @param widget combo_box对象。
   *
   * @returns combo_box对象。
   */
  static cast(widget: TWidget): TComboBox {
    return new TComboBox(combo_box_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 点击按钮时可以打开popup窗口，本函数可设置窗口的名称。
   * 
   * @param open_window 弹出窗口的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setOpenWindow(open_window: string): TRet {
    return combo_box_set_open_window(this != null ? (this.nativeObj || this) : null, open_window);
  }


  /**
   * 重置所有选项。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  resetOptions(): TRet {
    return combo_box_reset_options(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取选项个数。
   * 
   *
   * @returns 返回选项个数。
   */
  countOptions(): number {
    return combo_box_count_options(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置第index个选项为当前选中的选项。
   * 
   * @param index 选项的索引。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSelectedIndex(index: number): TRet {
    return combo_box_set_selected_index(this != null ? (this.nativeObj || this) : null, index);
  }


  /**
   * 设置是否本地化(翻译)选项。
   * 
   * @param localize_options 是否本地化(翻译)选项。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLocalizeOptions(localize_options: boolean): TRet {
    return combo_box_set_localize_options(this != null ? (this.nativeObj || this) : null, localize_options);
  }


  /**
   * 设置值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return combo_box_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置item高度。
   * 
   * @param item_height item的高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setItemHeight(item_height: number): TRet {
    return combo_box_set_item_height(this != null ? (this.nativeObj || this) : null, item_height);
  }


  /**
   * 追加一个选项。
   * 
   * @param value 值。
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  appendOption(value: any, text: string): TRet {
    return combo_box_append_option(this != null ? (this.nativeObj || this) : null, value, text);
  }


  /**
   * 设置选项。
   * 
   * @param options 选项。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setOptions(options: string): TRet {
    return combo_box_set_options(this != null ? (this.nativeObj || this) : null, options);
  }


  /**
   * 获取combo_box的值。
   * 
   *
   * @returns 返回值。
   */
  getValue(): number {
    return combo_box_get_value(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取combo_box的文本。
   * 
   *
   * @returns 返回文本。
   */
  getTextValue(): string {
    return combo_box_get_text(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 为点击按钮时，要打开窗口的名称。
   *
   */
  get openWindow(): string {
    return combo_box_t_get_prop_open_window(this.nativeObj);
  }

  set openWindow(v: string) {
    this.setOpenWindow(v);
  }


  /**
   * 当前选中的选项。
   *
   */
  get selectedIndex(): number {
    return combo_box_t_get_prop_selected_index(this.nativeObj);
  }

  set selectedIndex(v: number) {
    this.setSelectedIndex(v);
  }


  /**
   * 值。
   *
   */
  get value(): number {
    return combo_box_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }


  /**
   * 是否本地化(翻译)选项(缺省为TRUE)。
   *
   */
  get localizeOptions(): boolean {
    return combo_box_t_get_prop_localize_options(this.nativeObj);
  }

  set localizeOptions(v: boolean) {
    this.setLocalizeOptions(v);
  }


  /**
   * 设置可选项(冒号分隔值和文本，分号分隔选项，如:1:red;2:green;3:blue)。
   *
   */
  get options(): string {
    return combo_box_t_get_prop_options(this.nativeObj);
  }

  set options(v: string) {
    this.setOptions(v);
  }


  /**
   * 下拉选项的高度。如果open_window为空，则使用缺省高度。
   *
   */
  get itemHeight(): number {
    return combo_box_t_get_prop_item_height(this.nativeObj);
  }

  set itemHeight(v: number) {
    this.setItemHeight(v);
  }

};
/**
 * 对话框客户区控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *dialog\_client\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于dialog\_client\_t控件。
 *
 *在xml中使用"dialog\_client"标签创建dialog\_client。如：
 *
 *```xml
 *<dialog anim_hint="center_scale(duration=300)" x="c" y="m" w="80%" h="160" text="Dialog">
 *<dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK" />
 *<dialog_client x="0" y="bottom" w="100%" h="-30">
 *<label name="" x="center" y="middle:-20" w="200" h="30" text="Are you ready?"/>
 *<button name="quit" x="10" y="bottom:10" w="40%" h="30" text="确定"/>
 *<button name="quit" x="right:10" y="bottom:10" w="40%" h="30" text="取消"/>
 *</dialog_client>
 *</dialog>
 *```
 *
 *在c代码中，用dialog\_create\_simple创建对话框时，自动创建dialog客户区对象。
 *
 */
class TDialogClient extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建dialog客户区对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns dialog对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TDialogClient(dialog_client_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为dialog_client对象(供脚本语言使用)。
   * 
   * @param widget dialog_client对象。
   *
   * @returns dialog_client对象。
   */
  static cast(widget: TWidget): TDialogClient {
    return new TDialogClient(dialog_client_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 对话框标题控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *dialog\_title\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于dialog\_title\_t控件。
 *
 *在xml中使用"dialog\_title"标签创建dialog\_title。如：
 *
 *```xml
 *<dialog anim_hint="center_scale(duration=300)" x="c" y="m" w="80%" h="160" text="Dialog">
 *<dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK" />
 *<dialog_client x="0" y="bottom" w="100%" h="-30">
 *<label name="" x="center" y="middle:-20" w="200" h="30" text="Are you ready?"/>
 *<button name="quit" x="10" y="bottom:10" w="40%" h="30" text="确定"/>
 *<button name="quit" x="right:10" y="bottom:10" w="40%" h="30" text="取消"/>
 *</dialog_client>
 *</dialog>
 *```
 *
 *在c代码中，用dialog\_create\_simple创建对话框时，自动创建dialog标题对象。
 *
 */
class TDialogTitle extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建dialog对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns dialog对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TDialogTitle(dialog_title_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为dialog_title对象(供脚本语言使用)。
   * 
   * @param widget dialog_title对象。
   *
   * @returns dialog_title对象。
   */
  static cast(widget: TWidget): TDialogTitle {
    return new TDialogTitle(dialog_title_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 数字时钟控件。
 *
 *digit\_clock\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于digit\_clock\_t控件。
 *
 *在xml中使用"digit\_clock"标签创建数字时钟控件。如：
 *
 *```xml
 *<digit_clock format="YY/MM/DD h:mm:ss"/>
 *```
 *
 *> 更多用法请参考：[digit\_clock.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/digit_clock.xml)
 *
 *在c代码中使用函数digit\_clock\_create创建数字时钟控件。如：
 *
 *
 *> 完整示例请参考：[digit\_clock demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/digit_clock.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default">
 *<normal text_color="black" />
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L138)
 *
 */
class TDigitClock extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建digit_clock对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TDigitClock(digit_clock_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为digit_clock对象(供脚本语言使用)。
   * 
   * @param widget digit_clock对象。
   *
   * @returns digit_clock对象。
   */
  static cast(widget: TWidget): TDigitClock {
    return new TDigitClock(digit_clock_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置显示格式。
   * 
   * @param format 格式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFormat(format: string): TRet {
    return digit_clock_set_format(this != null ? (this.nativeObj || this) : null, format);
  }


  /**
   * 显示格式。
   *
   ** Y 代表年(完整显示)
   ** M 代表月(1-12)
   ** D 代表日(1-31)
   ** h 代表时(0-23)
   ** m 代表分(0-59)
   ** s 代表秒(0-59)
   ** w 代表星期(0-6)
   ** W 代表星期的英文缩写(支持翻译)
   ** YY 代表年(只显示末两位)
   ** MM 代表月(01-12)
   ** DD 代表日(01-31)
   ** hh 代表时(00-23)
   ** mm 代表分(00-59)
   ** ss 代表秒(00-59)
   ** MMM 代表月的英文缩写(支持翻译)
   *
   *如 日期时间为：2018/11/12 9:10:20
   ** "Y/D/M"显示为"2018/11/12"
   ** "Y-D-M"显示为"2018-11-12"
   ** "Y-D-M h:m:s"显示为"2018-11-12 9:10:20"
   ** "Y-D-M hh:mm:ss"显示为"2018-11-12 09:10:20"
   *
   */
  get format(): string {
    return digit_clock_t_get_prop_format(this.nativeObj);
  }

  set format(v: string) {
    this.setFormat(v);
  }

};
/**
 * dragger控件。
 *
 *目前主要用于scrollbar里的滑块。
 *
 */
class TDragger extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建dragger对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TDragger(dragger_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为dragger对象(供脚本语言使用)。
   * 
   * @param widget dragger对象。
   *
   * @returns dragger对象。
   */
  static cast(widget: TWidget): TDragger {
    return new TDragger(dragger_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置拖动的范围。
   * 
   * @param x_min x坐标最小值。
   * @param y_min y坐标最小值。
   * @param x_max x坐标最大值。
   * @param y_max y坐标最大值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setRange(x_min: number, y_min: number, x_max: number, y_max: number): TRet {
    return dragger_set_range(this != null ? (this.nativeObj || this) : null, x_min, y_min, x_max, y_max);
  }


  /**
   * x坐标的最小值。
   *
   */
  get xMin(): number {
    return dragger_t_get_prop_x_min(this.nativeObj);
  }


  /**
   * y坐标的最小值。
   *
   */
  get yMin(): number {
    return dragger_t_get_prop_y_min(this.nativeObj);
  }


  /**
   * x坐标的最大值。
   *
   */
  get xMax(): number {
    return dragger_t_get_prop_x_max(this.nativeObj);
  }


  /**
   * y坐标的最大值。
   *
   */
  get yMax(): number {
    return dragger_t_get_prop_y_max(this.nativeObj);
  }

};
/**
 * 单行编辑器控件。
 *
 *在基于SDL的平台，单行编辑器控件使用平台原生的输入法，对于嵌入式平台使用内置的输入法。
 *
 *在使用内置的输入法时，软键盘由输入类型决定，开发者可以自定义软键盘的界面。
 *
 *edit\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于edit\_t控件。
 *
 *edit\_t本身可以做为容器，放入按钮等控件。有几个特殊的子控件：
 *
 ** 名为"clear"的按钮。点击时清除编辑器中的内容。
 ** 名为"inc"的按钮。点击时增加编辑器的值，用于实现类似于spinbox的功能。
 ** 名为"dec"的按钮。点击时减少编辑器的值，用于实现类似于spinbox的功能。
 ** 名为"visible"的复选框。勾选时显示密码，反之不显示密码。
 *
 *在xml中使用"edit"标签创建编辑器控件。如：
 *
 *```xml
 *<edit x="c" y="m" w="80" h="30"
 *tips="age" input_type="uint" min="0" max="150" step="1" auto_fix="true" style="number" />
 *```
 *
 *> XXX：需要在min/max/step之前设置input\_type。
 *
 *>更多用法请参考：
 *[edit.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/edit.xml)
 *
 *在c代码中使用函数edit\_create创建编辑器控件。如：
 *
 *
 *> 创建之后，可以用widget\_set\_text或widget\_set\_text\_utf8设置文本内容。
 *
 *> 完整示例请参考：
 *[edit demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/edit.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0"  text_color="black" text_align_h="left">
 *<normal     bg_color="#f0f0f0" />
 *<focused    bg_color="#f0f0f0" border_color="black"/>
 *<disable    bg_color="gray" text_color="#d0d0d0" />
 *<error      bg_color="#f0f0f0" text_color="red" />
 *<empty      bg_color="#f0f0f0" text_color="#a0a0a0" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L104)
 *
 */
class TEdit extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建edit对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TEdit(edit_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为edit对象(供脚本语言使用)。
   * 
   * @param widget edit对象。
   *
   * @returns edit对象。
   */
  static cast(widget: TWidget): TEdit {
    return new TEdit(edit_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 获取int类型的值。
   * 
   *
   * @returns 返回int的值。
   */
  getInt(): number {
    return edit_get_int(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 获取double类型的值。
   * 
   *
   * @returns 返回double的值。
   */
  getDouble(): number {
    return edit_get_double(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 设置int类型的值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setInt(value: any): TRet {
    return edit_set_int(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置double类型的值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setDouble(value: any): TRet {
    return edit_set_double(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置为文本输入及其长度限制，不允许输入超过max个字符，少于min个字符时进入error状态。
   * 
   * @param min 最小长度。
   * @param max 最大长度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTextLimit(min: number, max: number): TRet {
    return edit_set_text_limit(this != null ? (this.nativeObj || this) : null, min, max);
  }


  /**
   * 设置为整数输入及取值范围。
   * 
   * @param min 最小值。
   * @param max 最大值。
   * @param step 步长。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setIntLimit(min: number, max: number, step: number): TRet {
    return edit_set_int_limit(this != null ? (this.nativeObj || this) : null, min, max, step);
  }


  /**
   * 设置为浮点数输入及取值范围。
   * 
   * @param min 最小值。
   * @param max 最大值。
   * @param step 步长。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFloatLimit(min: number, max: number, step: number): TRet {
    return edit_set_float_limit(this != null ? (this.nativeObj || this) : null, min, max, step);
  }


  /**
   * 设置编辑器是否为只读。
   * 
   * @param readonly 只读。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setReadonly(readonly: boolean): TRet {
    return edit_set_readonly(this != null ? (this.nativeObj || this) : null, readonly);
  }


  /**
   * 设置编辑器是否为自动改正。
   * 
   * @param auto_fix 自动改正。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setAutoFix(auto_fix: boolean): TRet {
    return edit_set_auto_fix(this != null ? (this.nativeObj || this) : null, auto_fix);
  }


  /**
   * 设置编辑器是否在获得焦点时不选中文本。
   * 
   * @param select_none_when_focused 是否在获得焦点时不选中文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setSelectNoneWhenFocused(select_none_when_focused: boolean): TRet {
    return edit_set_select_none_when_focused(this != null ? (this.nativeObj || this) : null, select_none_when_focused);
  }


  /**
   * 设置编辑器是否在获得焦点时打开输入法。
   * 
   * @param open_im_when_focused 是否在获得焦点时打开输入法。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setOpenImWhenFocused(open_im_when_focused: boolean): TRet {
    return edit_set_open_im_when_focused(this != null ? (this.nativeObj || this) : null, open_im_when_focused);
  }


  /**
   * 设置编辑器的输入类型。
   * 
   * @param type 输入类型。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setInputType(type: TInputType): TRet {
    return edit_set_input_type(this != null ? (this.nativeObj || this) : null, type);
  }


  /**
   * 设置编辑器的输入提示。
   * 
   * @param tips 输入提示。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setInputTips(tips: string): TRet {
    return edit_set_input_tips(this != null ? (this.nativeObj || this) : null, tips);
  }


  /**
   * 当编辑器输入类型为密码时，设置密码是否可见。
   * 
   * @param password_visible 密码是否可见。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setPasswordVisible(password_visible: boolean): TRet {
    return edit_set_password_visible(this != null ? (this.nativeObj || this) : null, password_visible);
  }


  /**
   * 设置为焦点。
   * 
   * @param focus 是否为焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFocus(focus: boolean): TRet {
    return edit_set_focus(this != null ? (this.nativeObj || this) : null, focus);
  }


  /**
   * 设置输入框的光标坐标。
   * 
   * @param cursor 是否为焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setCursor(cursor: number): TRet {
    return edit_set_cursor(this != null ? (this.nativeObj || this) : null, cursor);
  }


  /**
   * 编辑器是否为只读。
   *
   */
  get readonly(): boolean {
    return edit_t_get_prop_readonly(this.nativeObj);
  }

  set readonly(v: boolean) {
    this.setReadonly(v);
  }


  /**
   * 密码是否可见。
   *
   */
  get passwordVisible(): boolean {
    return edit_t_get_prop_password_visible(this.nativeObj);
  }

  set passwordVisible(v: boolean) {
    this.setPasswordVisible(v);
  }


  /**
   * 输入无效时，是否自动改正。
   *
   */
  get autoFix(): boolean {
    return edit_t_get_prop_auto_fix(this.nativeObj);
  }

  set autoFix(v: boolean) {
    this.setAutoFix(v);
  }


  /**
   * 获得焦点时不选中文本。
   *
   *> 主要用于没有指针设备的情况，否则软键盘无法取消选中文本。
   *
   */
  get selectNoneWhenFocused(): boolean {
    return edit_t_get_prop_select_none_when_focused(this.nativeObj);
  }

  set selectNoneWhenFocused(v: boolean) {
    this.setSelectNoneWhenFocused(v);
  }


  /**
   * 获得焦点时打开输入法。
   *
   *> 主要用于没有指针设备的情况，否则每次切换焦点时都打开输入法。
   *
   */
  get openImWhenFocused(): boolean {
    return edit_t_get_prop_open_im_when_focused(this.nativeObj);
  }

  set openImWhenFocused(v: boolean) {
    this.setOpenImWhenFocused(v);
  }


  /**
   * 输入提示。
   *
   */
  get tips(): string {
    return edit_t_get_prop_tips(this.nativeObj);
  }


  /**
   * 输入类型。
   *
   */
  get inputType(): TInputType {
    return edit_t_get_prop_input_type(this.nativeObj);
  }

  set inputType(v: TInputType) {
    this.setInputType(v);
  }


  /**
   * 最小值或最小长度。
   *
   */
  get min(): number {
    return edit_t_get_prop_min(this.nativeObj);
  }


  /**
   * 最大值或最大长度。
   *
   */
  get max(): number {
    return edit_t_get_prop_max(this.nativeObj);
  }


  /**
   * 步长。
   *作为数值型编辑器时，一次增加和减少时的数值。
   *
   */
  get step(): number {
    return edit_t_get_prop_step(this.nativeObj);
  }

};
/**
 * grid_item。一个简单的容器控件，一般作为grid的子控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *grid\_item\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于grid\_item\_t控件。
 *
 *在xml中使用"grid\_item"标签创建grid\_item。如：
 *
 *```xml
 *<grid x="0" y="0" w="100%" h="100%" children_layout="default(c=2,r=2,m=5,s=5)">
 *<grid_item>
 *<button x="c" y="m" w="80%" h="30" name="0" text="0"/>
 *</grid_item>
 *<grid_item>
 *<button x="c" y="m" w="80%" h="30" name="1" text="1"/>
 *</grid_item>
 *<grid_item>
 *<button x="c" y="m" w="80%" h="30" name="2" text="2"/>
 *</grid_item>
 *<grid_item>
 *<button x="c" y="m" w="80%" h="30" name="3" text="3"/>
 *</grid_item>
 *</grid>
 *
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TGridItem extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建grid_item对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TGridItem(grid_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为grid_item对象(供脚本语言使用)。
   * 
   * @param widget grid_item对象。
   *
   * @returns grid_item对象。
   */
  static cast(widget: TWidget): TGridItem {
    return new TGridItem(grid_item_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * grid控件。一个简单的容器控件，用于网格排列一组控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *grid\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于grid\_t控件。
 *
 *在xml中使用"grid"标签创建grid。如：
 *
 *```xml
 *<grid x="0" y="0" w="100%" h="100%" children_layout="default(c=2,r=2,m=5,s=5)">
 *<button name="open:basic" text="Basic"/>
 *<button name="open:button" text="Buttons"/>
 *<button name="open:edit" text="Edits"/>
 *<button name="open:keyboard" text="KeyBoard"/>
 *</grid>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TGrid extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建grid对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TGrid(grid_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为grid对象(供脚本语言使用)。
   * 
   * @param widget grid对象。
   *
   * @returns grid对象。
   */
  static cast(widget: TWidget): TGrid {
    return new TGrid(grid_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 分组控件。
 *
 *单选按钮在同一个父控件中是互斥的，所以通常将相关的单选按钮放在一个group\_box中。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *group\_box\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于group\_box\_t控件。
 *
 *在xml中使用"group\_box"标签创建group\_box。如：
 *
 *```xml
 *<group_box x="20" y="230" w="50%" h="90" children_layout="default(r=3,c=1,ym=2,s=10)"
 *<radio_button name="r1" text="Book"/>
 *<radio_button name="r2" text="Food"/>
 *<radio_button name="r3" text="Pencil" value="true"/>
 *</group_box>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TGroupBox extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建group_box对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TGroupBox(group_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为group_box对象(供脚本语言使用)。
   * 
   * @param widget group_box对象。
   *
   * @returns group_box对象。
   */
  static cast(widget: TWidget): TGroupBox {
    return new TGroupBox(group_box_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 文本控件。用于显示一行或多行文本。
 *
 *文本控件不会根据文本的长度自动换行，只有文本内容包含换行符时才会换行。
 *
 *如需自动换行请使用[rich\_text\_t](rich_text_t.md)控件。
 *
 *label\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于label\_t控件。
 *
 *在xml中使用"label"标签创建文本控件。如：
 *
 *```xml
 *<label style="center" text="center"/>
 *```
 *
 *> 更多用法请参考：[label.xml](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/label.xml)
 *
 *在c代码中使用函数label\_create创建文本控件。如：
 *
 *
 *> 创建之后，需要用widget\_set\_text或widget\_set\_text\_utf8设置文本内容。
 *
 *> 完整示例请参考：[label demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/label.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="left">
 *<normal text_color="red" text_align_h="left" border_color="#a0a0a0" margin="4" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L144)
 *
 */
class TLabel extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建label对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TLabel(label_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置显示字符的个数(小余0时全部显示)。。
   * 
   * @param length 最大可显示字符个数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLength(length: number): TRet {
    return label_set_length(this != null ? (this.nativeObj || this) : null, length);
  }


  /**
   * 根据文本内容调节控件大小。
   * 
   * @param min_w 最小宽度。
   * @param max_w 最大宽度。
   * @param min_h 最小高度。
   * @param max_h 最大高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  resizeToContent(min_w: number, max_w: number, min_h: number, max_h: number): TRet {
    return label_resize_to_content(this != null ? (this.nativeObj || this) : null, min_w, max_w, min_h, max_h);
  }


  /**
   * 转换为label对象(供脚本语言使用)。
   * 
   * @param widget label对象。
   *
   * @returns label对象。
   */
  static cast(widget: TWidget): TLabel {
    return new TLabel(label_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 显示字符的个数(小余0时全部显示)。
   *主要用于动态改变显示字符的个数，来实现类似[拨号中...]的动画效果。
   *
   */
  get length(): number {
    return label_t_get_prop_length(this.nativeObj);
  }

  set length(v: number) {
    this.setLength(v);
  }

};
/**
 * overlay窗口。
 *
 *overlay窗口有点类似于非模态的dialog，但是它位置和大小是完全自由的，窗口管理器不会对它做任何限制。
 *
 *如果overlay窗口有透明或半透效果，则不支持窗口动画，但可以通过移动窗口位置来实现类似动画的效果。
 *
 *overlay\_t是[window\_base\_t](window_base_t.md)的子类控件，window\_base\_t的函数均适用于overlay\_t控件。
 *
 *在xml中使用"overlay"标签创建窗口。需要指定坐标和大小，可以指定主题和动画名称。如：
 *
 *```xml
 *<overlay theme="basic" x="100" y="100" w="200" h="300">
 *...
 *</overlay>
 *```
 *
 *>
 *更多用法请参考：[overlay.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/)
 *
 *在c代码中使用函数overlay\_create创建窗口。如：
 *
 *
 *> 完整示例请参考：[overlay
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/)
 *
 *可用通过style来设置窗口的风格，如背景颜色或图片等。如：
 *
 *```xml
 *<style name="bricks">
 *<normal bg_image="bricks"  bg_image_draw_type="repeat"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L0)
 *
 */
class TOverlay extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建overlay对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TOverlay(overlay_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为overlay对象(供脚本语言使用)。
   * 
   * @param widget overlay对象。
   *
   * @returns overlay对象。
   */
  static cast(widget: TWidget): TOverlay {
    return new TOverlay(overlay_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 页面管理控件。
 *
 *只有一个Page处于active状态，处于active状态的Page才能显示并接收事件。
 *常用于实现标签控件中的页面管理。
 *
 *pages\_t是[widget\_t](widget_t.md)的子类控件，
 *widget\_t的函数均适用于pages\_t控件。
 *
 *在xml中使用"pages"标签创建页面管理控件。如：
 *
 *```xml
 *<tab_control x="0" y="0" w="100%" h="100%"
 *<pages x="c" y="20" w="90%" h="-60" value="1">
 *...
 *</pages>
 *<tab_button_group>
 *...
 *</tab_button_group>
 *</tab_control>
 *```
 *
 *> 更多用法请参考：
 *[tab control](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/)
 *
 */
class TPages extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建pages对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TPages(pages_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为pages对象(供脚本语言使用)。
   * 
   * @param widget pages对象。
   *
   * @returns pages对象。
   */
  static cast(widget: TWidget): TPages {
    return new TPages(pages_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置当前的Page。
   * 
   * @param index 当前Page的序号。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setActive(index: number): TRet {
    return pages_set_active(this != null ? (this.nativeObj || this) : null, index);
  }


  /**
   * 通过页面的名字设置当前的Page。
   * 
   * @param name 当前Page的名字。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setActiveByName(name: string): TRet {
    return pages_set_active_by_name(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 当前活跃的page。
   *
   */
  get active(): number {
    return pages_t_get_prop_active(this.nativeObj);
  }

  set active(v: number) {
    this.setActive(v);
  }

};
/**
 * 进度条控件。
 *
 *进度条控件可以水平显示也可以垂直显示，由vertical属性决定。
 *
 *progress\_bar\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于progress\_bar\_t控件。
 *
 *在xml中使用"progress\_bar"标签创建进度条控件。如：
 *
 *```xml
 *<progress_bar name="bar1" x="10" y="128" w="240" h="30" value="40"/>
 *<progress_bar name="bar2" x="280" y="128" w="30" h="118" value="20" vertical="true"/>
 *```
 *
 *> 更多用法请参考：
 *[basic demo](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/basic.xml)
 *
 *在c代码中使用函数progress\_bar\_create创建进度条控件。如：
 *
 *
 *> 完整示例请参考：
 *[progress_bar demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/progress_bar.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style>
 *<normal bg_color="#f0f0f0" text_color="gold" fg_color="#c0c0c0" border_color="#a0a0a0" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L183)
 *
 */
class TProgressBar extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建progress_bar对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TProgressBar(progress_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为progress_bar对象(供脚本语言使用)。
   * 
   * @param widget progress_bar对象。
   *
   * @returns progress_bar对象。
   */
  static cast(widget: TWidget): TProgressBar {
    return new TProgressBar(progress_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置进度条的进度。
   * 
   * @param value 进度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return progress_bar_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置最大值。
   * 
   * @param max 最大值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMax(max: number): TRet {
    return progress_bar_set_max(this != null ? (this.nativeObj || this) : null, max);
  }


  /**
   * 设置进度条的方向。
   * 
   * @param vertical 是否为垂直方向。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVertical(vertical: boolean): TRet {
    return progress_bar_set_vertical(this != null ? (this.nativeObj || this) : null, vertical);
  }


  /**
   * 设置进度条的是否显示文本。
   * 
   * @param show_text 是否显示文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setShowText(show_text: boolean): TRet {
    return progress_bar_set_show_text(this != null ? (this.nativeObj || this) : null, show_text);
  }


  /**
   * 获取进度百分比。
   *
   *> 当max为100时，percent和value取整后一致。
   * 
   *
   * @returns 返回百分比。
   */
  getPercent(): number {
    return progress_bar_get_percent(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 进度条的值[0-100]。
   *
   */
  get value(): number {
    return progress_bar_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }


  /**
   * 最大值(缺省为100)。
   *
   */
  get max(): number {
    return progress_bar_t_get_prop_max(this.nativeObj);
  }

  set max(v: number) {
    this.setMax(v);
  }


  /**
   * 进度条的是否为垂直方向。
   *
   */
  get vertical(): boolean {
    return progress_bar_t_get_prop_vertical(this.nativeObj);
  }

  set vertical(v: boolean) {
    this.setVertical(v);
  }


  /**
   * 是否显示文本。
   *
   */
  get showText(): boolean {
    return progress_bar_t_get_prop_show_text(this.nativeObj);
  }

  set showText(v: boolean) {
    this.setShowText(v);
  }

};
/**
 * row。一个简单的容器控件，用于水平排列其子控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *row\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于row\_t控件。
 *
 *在xml中使用"row"标签创建row。如：
 *
 *```xml
 *<row x="0" y="0" w="100%" h="100%" children_layout="default(c=0,r=1)">
 *<button name="open:basic" text="Basic"/>
 *<button name="open:button" text="Buttons"/>
 *<button name="open:edit" text="Edits"/>
 *<button name="open:keyboard" text="KeyBoard"/>
 *</row>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TRow extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建row对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TRow(row_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为row对象(供脚本语言使用)。
   * 
   * @param widget row对象。
   *
   * @returns row对象。
   */
  static cast(widget: TWidget): TRow {
    return new TRow(row_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 滑块控件。
 *
 *slider\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于slider\_t控件。
 *
 *在xml中使用"slider"标签创建滑块控件。如：
 *
 *```xml
 *<slider x="center" y="10" w="80%" h="20" value="10"/>
 *<slider style="img" x="center" y="50" w="80%" h="30" value="20" />
 *<slider style="img" x="center" y="90" w="80%" h="30" value="30" min="5" max="50" step="5"/>
 *```
 *
 *> 更多用法请参考：
 *[basic](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/basic.xml)
 *
 *在c代码中使用函数slider\_create创建滑块控件。如：
 *
 *
 *> 完整示例请参考：
 *[slider demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/slider.c)
 *
 *可用通过style来设置控件的显示风格，如图片和颜色等等。如：
 *
 *```xml
 *<style name="img" bg_image="slider_bg" fg_image="slider_fg">
 *<normal icon="slider_drag"/>
 *<pressed icon="slider_drag_p"/>
 *<over icon="slider_drag_o"/>
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L179)
 *
 */
class TSlider extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建slider对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSlider(slider_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为slider对象(供脚本语言使用)。
   * 
   * @param widget slider对象。
   *
   * @returns slider对象。
   */
  static cast(widget: TWidget): TSlider {
    return new TSlider(slider_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置滑块的值。
   * 
   * @param value 值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return slider_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置滑块的最小值。
   * 
   * @param min 最小值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMin(min: number): TRet {
    return slider_set_min(this != null ? (this.nativeObj || this) : null, min);
  }


  /**
   * 设置滑块的最大值。
   * 
   * @param max 最大值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setMax(max: number): TRet {
    return slider_set_max(this != null ? (this.nativeObj || this) : null, max);
  }


  /**
   * 设置滑块的拖动的最小单位。
   * 
   * @param step 拖动的最小单位。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setStep(step: number): TRet {
    return slider_set_step(this != null ? (this.nativeObj || this) : null, step);
  }


  /**
   * 设置bar的宽度或高度。
   * 
   * @param bar_size bar的宽度或高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setBarSize(bar_size: number): TRet {
    return slider_set_bar_size(this != null ? (this.nativeObj || this) : null, bar_size);
  }


  /**
   * 设置滑块的方向。
   * 
   * @param vertical 是否为垂直方向。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setVertical(vertical: boolean): TRet {
    return slider_set_vertical(this != null ? (this.nativeObj || this) : null, vertical);
  }


  /**
   * 值。
   *
   */
  get value(): number {
    return slider_t_get_prop_value(this.nativeObj);
  }

  set value(v: number) {
    this.setValue(v);
  }


  /**
   * 最小值。
   *
   */
  get min(): number {
    return slider_t_get_prop_min(this.nativeObj);
  }

  set min(v: number) {
    this.setMin(v);
  }


  /**
   * 最大值。
   *
   */
  get max(): number {
    return slider_t_get_prop_max(this.nativeObj);
  }

  set max(v: number) {
    this.setMax(v);
  }


  /**
   * 拖动的最小单位。
   *
   */
  get step(): number {
    return slider_t_get_prop_step(this.nativeObj);
  }

  set step(v: number) {
    this.setStep(v);
  }


  /**
   * 滑块的是否为垂直方向。
   *
   */
  get vertical(): boolean {
    return slider_t_get_prop_vertical(this.nativeObj);
  }

  set vertical(v: boolean) {
    this.setVertical(v);
  }


  /**
   * 轴的宽度或高度（单位：像素），为0表示为控件的宽度或高度的一半，缺省为0。
   *
   */
  get barSize(): number {
    return slider_t_get_prop_bar_size(this.nativeObj);
  }

  set barSize(v: number) {
    this.setBarSize(v);
  }


  /**
   * 滑块的宽度或高度（单位：像素），缺省为10。
   *
   */
  get draggerSize(): number {
    return slider_t_get_prop_dragger_size(this.nativeObj);
  }


  /**
   * 滑块的宽度或高度是否与icon适应，缺省为true。
   *
   */
  get draggerAdaptToIcon(): boolean {
    return slider_t_get_prop_dragger_adapt_to_icon(this.nativeObj);
  }


  /**
   * 是否允许在轴上滑动来改变滑块位置，缺省为FALSE。
   *
   */
  get slideWithBar(): boolean {
    return slider_t_get_prop_slide_with_bar(this.nativeObj);
  }

};
/**
 * 标签按钮分组控件。
 *
 *一个简单的容器，主要用于对标签按钮进行布局和管理。
 *
 *tab\_button\_group\_t是[widget\_t](widget_t.md)的子类控件，
 *widget\_t的函数均适用于tab\_button\_group\_t控件。
 *
 *在xml中使用"tab\_button\_group"标签创建标签按钮分组控件。如：
 *
 *```xml
 *<tab_button_group x="c" y="bottom:10" w="90%" h="30" compact="true"
 *<tab_button text="General"/>
 *<tab_button text="Network" value="true" />
 *<tab_button text="Security"/>
 *</tab_button_group>
 *```
 *
 *> 更多用法请参考：
 *[tab control](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/)
 *
 *可用通过style来设置控件的显示风格，如颜色等等。如：
 *
 *```xml
 *<tab_button_group>
 *<style name="default">
 *<normal/>
 *</style>
 *</tab_button_group>
 *```
 *
 */
class TTabButtonGroup extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建tab_button_group对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TTabButtonGroup(tab_button_group_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置compact。
   * 
   * @param compact 是否使用紧凑布局(缺省FALSE)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setCompact(compact: boolean): TRet {
    return tab_button_group_set_compact(this != null ? (this.nativeObj || this) : null, compact);
  }


  /**
   * 设置scrollable。
   * 
   * @param scrollable 是否允许滚动(缺省FALSE)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setScrollable(scrollable: boolean): TRet {
    return tab_button_group_set_scrollable(this != null ? (this.nativeObj || this) : null, scrollable);
  }


  /**
   * 转换tab_button_group对象(供脚本语言使用)。
   * 
   * @param widget tab_button_group对象。
   *
   * @returns tab_button_group对象。
   */
  static cast(widget: TWidget): TTabButtonGroup {
    return new TTabButtonGroup(tab_button_group_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 紧凑型排版子控件(缺省FALSE)。
   *
   */
  get compact(): boolean {
    return tab_button_group_t_get_prop_compact(this.nativeObj);
  }

  set compact(v: boolean) {
    this.setCompact(v);
  }


  /**
   * 是否支持滚动(缺省FALSE)。
   *
   *> 紧凑型排版子控件时才支持滚动。
   *
   */
  get scrollable(): boolean {
    return tab_button_group_t_get_prop_scrollable(this.nativeObj);
  }

  set scrollable(v: boolean) {
    this.setScrollable(v);
  }

};
/**
 * 标签按钮控件。
 *
 *标签按钮有点类似单选按钮，但点击标签按钮之后会自动切换当前的标签页。
 *
 *tab\_button\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于tab\_button\_t控件。
 *
 *在xml中使用"tab\_button"标签创建标签按钮控件。如：
 *
 *```xml
 *<!-- tab_button_view_page1.xml -->
 *<view w="100%" h="100%">
 *<label x="c" y="m" w="100%" h="60" text="page1" />
 *<button name="close" x="c" y="bottom:100" w="80" h="40" text="Close" />
 *</view>
 *```
 *
 *```xml
 *<!-- tab_button dynamic load UI -->
 *<pages name="pages" x="right" y="0" w="70%" h="100%">
 *</pages>
 *<list_view x="0" y="0" w="30%" h="100%" item_height="40" auto_hide_scroll_bar="true">
 *<scroll_view name="view" x="0"  y="0" w="-12" h="100%">
 *<tab_button text="page1" load_ui="tab_button_view_page1" value="true"/>
 *<tab_button text="page2" load_ui="tab_button_view_page2" />
 *<tab_button text="page3" load_ui="tab_button_view_page3" />
 *<scroll_view />
 *<scroll_bar_d name="bar" x="right" y="0" w="12" h="100%" value="0"/>
 *</list_view>
 *```
 *
 *```xml
 *<!-- tab_button static load UI -->
 *<tab_button_group x="c" y="bottom:10" w="90%" h="30" compact="true"
 *<tab_button text="General"/>
 *<tab_button text="Network" value="true" />
 *<tab_button text="Security"/>
 *</tab_button_group>
 *```
 *
 *标签按钮一般放在标签按钮分组中，布局由标签按钮分组控件决定，不需要指定自己的布局参数和坐标。
 *
 *> 更多用法请参考：
 *[tab control](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<tab_button>
 *<style name="default" border_color="#a0a0a0"  text_color="black">
 *<normal     bg_color="#d0d0d0" />
 *<pressed    bg_color="#f0f0f0" />
 *<over       bg_color="#e0e0e0" />
 *<normal_of_active     bg_color="#f0f0f0" />
 *<pressed_of_active    bg_color="#f0f0f0" />
 *<over_of_active       bg_color="#f0f0f0" />
 *</style>
 *</tab_button>
 *```
 *
 */
class TTabButton extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建tab_button对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TTabButton(tab_button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换tab_button对象(供脚本语言使用)。
   * 
   * @param widget tab_button对象。
   *
   * @returns tab_button对象。
   */
  static cast(widget: TWidget): TTabButton {
    return new TTabButton(tab_button_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置为当前标签。
   * 
   * @param value 是否为当前标签。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setValue(value: any): TRet {
    return tab_button_set_value(this != null ? (this.nativeObj || this) : null, value);
  }


  /**
   * 设置控件的图标。
   * 
   * @param name 当前项的图标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setIcon(name: string): TRet {
    return tab_button_set_icon(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置控件的active图标。
   * 
   * @param name 当前项的图标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setActiveIcon(name: string): TRet {
    return tab_button_set_active_icon(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 设置控件动态加载显示UI。
   * 
   * @param name 动态加载UI的资源名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setLoadUi(name: string): TRet {
    return tab_button_set_load_ui(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 值。
   *
   */
  get value(): boolean {
    return tab_button_t_get_prop_value(this.nativeObj);
  }

  set value(v: boolean) {
    this.setValue(v);
  }


  /**
   * 激活后加载的UI名字。
   *
   */
  get loadUi(): string {
    return tab_button_t_get_prop_load_ui(this.nativeObj);
  }

  set loadUi(v: string) {
    this.setLoadUi(v);
  }


  /**
   * 当前项的图标的名称。
   *
   */
  get activeIcon(): string {
    return tab_button_t_get_prop_active_icon(this.nativeObj);
  }

  set activeIcon(v: string) {
    this.setActiveIcon(v);
  }


  /**
   * 非当前项的图标的名称。
   *
   */
  get icon(): string {
    return tab_button_t_get_prop_icon(this.nativeObj);
  }

  set icon(v: string) {
    this.setIcon(v);
  }

};
/**
 * 标签控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *
 *标签控件通常会包含一个pages控件和一个tab\_button\_group控件。
 *
 *
 *
 *tab\_control\_t是[widget\_t](widget_t.md)的子类控件，
 *widget\_t的函数均适用于tab\_control\_t控件。
 *
 *在xml中使用"tab\_control"标签创建标签控件。如：
 *
 *```xml
 *<tab_control x="0" y="0" w="100%" h="100%"
 *<pages x="c" y="20" w="90%" h="-60" value="1">
 *...
 *</pages>
 *<tab_button_group>
 *...
 *</tab_button_group>
 *</tab_control>
 *```
 *
 *> 更多用法请参考：
 *[tab control](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/)
 *
 */
class TTabControl extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建tab_control对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TTabControl(tab_control_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换tab_control对象(供脚本语言使用)。
   * 
   * @param widget tab_control对象。
   *
   * @returns tab_control对象。
   */
  static cast(widget: TWidget): TTabControl {
    return new TTabControl(tab_control_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 一个通用的容器控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于view\_t控件。
 *
 *在xml中使用"view"标签创建view。如：
 *
 *```xml
 *<view x="0" y="0" w="100%" h="100%" children_layout="default(c=2,r=2,m=5,s=5)">
 *</view>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
class TView extends TWidget {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TView(view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为view对象(供脚本语言使用)。
   * 
   * @param widget view对象。
   *
   * @returns view对象。
   */
  static cast(widget: TWidget): TView {
    return new TView(view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 单个idle的信息。
 *
 */
class TIdleInfo extends TObject {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 转换为idle_info对象(供脚本语言使用)。
   * 
   * @param idle idle_info对象。
   *
   * @returns idle_info对象。
   */
  static cast(idle: TIdleInfo): TIdleInfo {
    return new TIdleInfo(idle_info_cast(idle != null ? (idle.nativeObj || idle) : null));
  }


  /**
   * idle回调函数上下文。
   *
   */
  get ctx(): any {
    return idle_info_t_get_prop_ctx(this.nativeObj);
  }


  /**
   * idle的ID
   *
   *> 为TK\_INVALID\_ID时表示无效idle。
   *
   */
  get id(): number {
    return idle_info_t_get_prop_id(this.nativeObj);
  }

};
/**
 * mutable图片控件。
 *
 *像摄像头和视频的图像是变化的，每一帧都不同，我们把这类图片称为mutable image。
 *
 *本控件辅助实现摄像头和视频的显示功能。
 *
 *mutable\_image\_t是[image\_base\_t](image_base_t.md)的子类控件，image\_base\_t的函数均适用于mutable\_image\_t控件。
 *
 *在xml中使用"mutable\_image"标签创建mutable图片控件。如：
 *
 *```xml
 *<mutable_image w="100%" h="100%"/>
 *```
 *
 *>更多用法请参考：
 *[mutable
 *image](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/mutable_image.xml)
 *
 *在c代码中使用函数mutable\_image\_create创建mutable图片控件。如：
 *
 *
 *> 创建之后:
 *>
 *> 需要用mutable\_image\_set\_prepare\_image设置准备图片的回调函数。
 *
 *> 完整示例请参考：[mutable image demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/mutable_image.c)
 *
 *一般不需通过style来设置控件的显示风格，如果在特殊情况下需要，可以参考其它控件。
 *
 */
class TMutableImage extends TImageBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }

};
/**
 * 简单的动态数组，内部存放value对象。
 *
 *访问时属性名称为：
 *
 ** "size"/"length" 用于获取数组的长度。
 ** index 用于访问属性，-1可以用来追加新元素。
 *
 */
class TObjectArray extends TObject {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建对象。
   * 
   *
   * @returns 返回object对象。
   */
  static create(): TObject {
    return new TObjectArray(object_array_create());
  }


  /**
   * for script gc
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  unref(): TRet {
    return object_array_unref(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 清除全部属性。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  clearProps(): TRet {
    return object_array_clear_props(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 属性个数。
   *
   */
  get propsSize(): number {
    return object_array_t_get_prop_props_size(this.nativeObj);
  }

};
/**
 * GIF图片控件。
 *
 *> 注意：GIF图片的尺寸大于控件大小时会自动缩小图片，但一般的嵌入式系统的硬件加速都不支持图片缩放，
 *所以缩放图片会导致性能明显下降。如果性能不满意时，请确认一下GIF图片的尺寸是否小余控件大小。
 *
 *gif\_image\_t是[image\_base\_t](image_base_t.md)的子类控件，image\_base\_t的函数均适用于gif\_image\_t控件。
 *
 *在xml中使用"gif"标签创建GIF图片控件。如：
 *
 *```xml
 *<gif image="bee"/>
 *```
 *
 *>更多用法请参考：
 *[gif
 *image](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/gif_image.xml)
 *
 *在c代码中使用函数gif\_image\_create创建GIF图片控件。如：
 *
 *
 *> 创建之后:
 *>
 *> 需要用widget\_set\_image设置图片名称。
 *
 *> 完整示例请参考：[gif image demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/gif_image.c)
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<gif>
 *<style name="border">
 *<normal border_color="#000000" bg_color="#e0e0e0" text_color="black"/>
 *</style>
 *</gif>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml)
 *
 */
class TGifImage extends TImageBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建gif_image对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TGifImage(gif_image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为gif_image对象(供脚本语言使用)。
   * 
   * @param widget gif_image对象。
   *
   * @returns gif_image对象。
   */
  static cast(widget: TWidget): TGifImage {
    return new TGifImage(gif_image_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 对象接口的缺省实现。
 *
 *内部使用有序数组保存所有属性，可以快速查找指定名称的属性。
 *
 */
class TObjectDefault extends TObject {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建对象。
   * 
   *
   * @returns 返回object对象。
   */
  static create(): TObject {
    return new TObjectDefault(object_default_create());
  }


  /**
   * for script gc
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  unref(): TRet {
    return object_default_unref(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 清除全部属性。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  clearProps(): TRet {
    return object_default_clear_props(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 属性个数。
   *
   */
  get propsSize(): number {
    return object_default_t_get_prop_props_size(this.nativeObj);
  }

};
/**
 * 图片控件。
 *
 *用来显示一张静态图片，目前支持bmp/png/jpg等格式。
 *
 *如果要显示gif文件，请用[gif\_image](gif_image_t.md)。
 *
 *如果要显示svg文件，请用[svg\_image](svg_image_t.md)。
 *
 *如果需要支持勾选效果，请设置**selectable**属性。
 *
 *如果需要支持点击效果，请设置**clickable**属性。
 *
 *image\_t是[image\_base\_t](image_base_t.md)的子类控件，image\_base\_t的函数均适用于image\_t控件。
 *
 *在xml中使用"image"标签创建图片控件。如：
 *
 *```xml
 *<image style="border" image="earth" draw_type="icon" />
 *```
 *
 *> 更多用法请参考：
 *[image.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/images.xml)
 *
 *在c代码中使用函数image\_create创建图片控件。如：
 *
 *
 *> 创建之后:
 *>
 *> 需要用widget\_set\_image设置图片名称。
 *>
 *> 可以用image\_set\_draw\_type设置图片的绘制方式。
 *
 *> 绘制方式请参考[image\_draw\_type\_t](image_draw_type_t.md)
 *
 *> 绘制方式的属性值和枚举值:
 *[image\_draw\_type\_name\_value](https://github.com/zlgopen/awtk/blob/master/src/base/enums.c#L98)
 *
 *> 完整示例请参考：
 *[image demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/image.c)
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<image>
 *<style name="border">
 *<normal border_color="#000000" bg_color="#e0e0e0" text_color="black"/>
 *</style>
 *</image>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L313)
 *
 */
class TImage extends TImageBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建image对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TImage(image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置图片的绘制方式。
   * 
   * @param draw_type 绘制方式(仅在没有旋转和缩放时生效)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setDrawType(draw_type: TImageDrawType): TRet {
    return image_set_draw_type(this != null ? (this.nativeObj || this) : null, draw_type);
  }


  /**
   * 转换为image对象(供脚本语言使用)。
   * 
   * @param widget image对象。
   *
   * @returns image对象。
   */
  static cast(widget: TWidget): TImage {
    return new TImage(image_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 图片的绘制方式(仅在没有旋转和缩放时生效)。
   *
   */
  get drawType(): TImageDrawType {
    return image_t_get_prop_draw_type(this.nativeObj);
  }

  set drawType(v: TImageDrawType) {
    this.setDrawType(v);
  }

};
/**
 * 可滚动的combo_box控件。
 *
 */
class TComboBoxEx extends TComboBox {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建combo_box_ex对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TComboBoxEx(combo_box_ex_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }

};
/**
 * 电阻屏校准窗口。
 *
 *calibration\_win\_t是[window\_base\_t](window_base_t.md)的子类控件，
 *window\_base\_t的函数均适用于calibration\_win\_t控件。
 *
 *在xml中使用"calibration\_win"标签创建电阻屏校准窗口。如：
 *
 *```xml
 *<calibration_win name="cali" w="100%" h="100%" text="Please click the center of cross">
 *</calibration_win>
 *```
 *
 *> 更多用法请参考：
 *[window.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/calibration_win.xml)
 *
 *在c代码中使用函数calibration\_win\_create创建窗口。如：
 *
 *
 *通过calibration\_win\_set\_on\_done注册回调函数，用于保存校准数据。
 *
 */
class TCalibrationWin extends TWindowBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 转换为calibration_win对象(供脚本语言使用)。
   * 
   * @param widget calibration_win对象。
   *
   * @returns calibration_win对象。
   */
  static cast(widget: TWidget): TCalibrationWin {
    return new TCalibrationWin(calibration_win_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 弹出窗口。
 *
 *弹出窗口是一种特殊的窗口，大小和位置可以自由设置，主要用来实现右键菜单和combo\_box的下列列表等功能。
 *
 *popup\_t是[window\_base\_t](window_base_t.md)的子类控件，window\_base\_t的函数均适用于popup\_t控件。
 *
 *在xml中使用"popup"标签创建弹出窗口。如：
 *
 *```xml
 *<popup close_when_click_outside="true" x="c" y="m" w="80%" h="80"
 *<list_view x="0"  y="0" w="100%" h="100%" item_height="30">
 *<scroll_view name="view" x="0"  y="0" w="-12" h="100%">
 *<combo_box_item tr_text="english"/>
 *<combo_box_item tr_text="chinese" />
 *</scroll_view>
 *<scroll_bar_d name="bar" x="right" y="0" w="12" h="100%" value="0"/>
 *</list_view>
 *</popup>
 *```
 *
 *>
 *更多用法请参考：[popup](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/)
 *
 *在c代码中使用函数popup\_create创建弹出窗口。如：
 *
 *
 *> 创建之后，和使用普通窗口是一样的。
 *
 *> 完整示例请参考：[combo_box.c](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/combo_box.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<popup>
 *<style name="default" border_color="#a0a0a0">
 *<normal bg_color="#f0f0f0"/>
 *</style>
 *</popup>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L324)
 *
 */
class TPopup extends TWindowBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建popup对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns popup对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TPopup(popup_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为popup对象(供脚本语言使用)。
   * 
   * @param widget popup对象。
   *
   * @returns popup对象。
   */
  static cast(widget: TWidget): TPopup {
    return new TPopup(popup_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 设置点击时是否关闭窗口。
   * 
   * @param close_when_click 点击时是否关闭窗口。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setCloseWhenClick(close_when_click: boolean): TRet {
    return popup_set_close_when_click(this != null ? (this.nativeObj || this) : null, close_when_click);
  }


  /**
   * 设置点击窗口外部时是否关闭窗口。
   * 
   * @param close_when_click_outside 点击窗口外部时是否关闭窗口。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setCloseWhenClickOutside(close_when_click_outside: boolean): TRet {
    return popup_set_close_when_click_outside(this != null ? (this.nativeObj || this) : null, close_when_click_outside);
  }


  /**
   * 点击时是否关闭窗口。
   *
   */
  get closeWhenClick(): boolean {
    return popup_t_get_prop_close_when_click(this.nativeObj);
  }

  set closeWhenClick(v: boolean) {
    this.setCloseWhenClick(v);
  }


  /**
   * 点击到窗口外时是否关闭窗口。
   *
   */
  get closeWhenClickOutside(): boolean {
    return popup_t_get_prop_close_when_click_outside(this.nativeObj);
  }

  set closeWhenClickOutside(v: boolean) {
    this.setCloseWhenClickOutside(v);
  }

};
/**
 * SVG图片控件。
 *
 *svg\_image\_t是[image\_base\_t](image_base_t.md)的子类控件，image\_base\_t的函数均适用于svg\_image\_t控件。
 *
 *在xml中使用"svg"标签创建SVG图片控件。如：
 *
 *```xml
 *<svg image="girl"/>
 *```
 *
 *>更多用法请参考：[svg image](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/svg_image.xml)
 *
 *在c代码中使用函数svg\_image\_create创建SVG图片控件。如：
 *
 *
 *> 创建之后: 需要用widget\_set\_image设置图片名称。
 *
 *> 完整示例请参考：[svg image demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/svg_image.c)
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<svg>
 *<style name="default">
 *<normal border_color="green" fg_color="red" />
 *</style>
 *</svg>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml)
 *
 */
class TSvgImage extends TImageBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建svg_image对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSvgImage(svg_image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 设置控件的图片名称。
   *
   *> 如果需要显示文件系统中的图片，只需将图片名称换成实际的文件名，并加上"file://"前缀即可。
   * 
   * @param name 图片名称，该图片必须存在于资源管理器。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setImage(name: string): TRet {
    return svg_image_set_image(this != null ? (this.nativeObj || this) : null, name);
  }


  /**
   * 转换为svg_image对象(供脚本语言使用)。
   * 
   * @param widget svg_image对象。
   *
   * @returns svg_image对象。
   */
  static cast(widget: TWidget): TSvgImage {
    return new TSvgImage(svg_image_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 单个定时器的信息。
 *
 */
class TTimerInfo extends TObject {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 转换为timer_info对象(供脚本语言使用)。
   * 
   * @param timer timer_info对象。
   *
   * @returns timer_info对象。
   */
  static cast(timer: TTimerInfo): TTimerInfo {
    return new TTimerInfo(timer_info_cast(timer != null ? (timer.nativeObj || timer) : null));
  }


  /**
   * 定时器回调函数的上下文
   *
   */
  get ctx(): any {
    return timer_info_t_get_prop_ctx(this.nativeObj);
  }


  /**
   * 定时器的ID
   *
   *> 为TK\_INVALID\_ID时表示无效定时器。
   *
   */
  get id(): number {
    return timer_info_t_get_prop_id(this.nativeObj);
  }


  /**
   * 当前时间(相对时间，单位为毫秒)。
   *
   */
  get now(): number {
    return timer_info_t_get_prop_now(this.nativeObj);
  }

};
/**
 * spinbox控件。
 *
 *一个特殊的数值编辑器，将edit\_t和button\_t进行组合，方便编辑数值。
 *
 *点击向上的按钮将数值增加一个step，点击向下的按钮将数值减小一个step。
 *step的值可以通过step属性进行设置。
 *
 *spin_box\_t是[edit\_t](edit_t.md)的子类控件，edit\_t的函数均适用于spin\_box\_t控件。
 *
 *在xml中使用"spin_box"标签创建spinbox控件。如：
 *
 *```xml
 *<spin_box w="70%" input_type="int" min="-100" max="100" step="5">
 *```
 *
 *>
 *更多用法请参考：[spin_box.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/spinbox.xml)
 *
 *在c代码中使用函数spin_box\_create创建spinbox控件。如：
 *
 *
 *> 创建之后:
 *>
 *> 可以用edit相关函数去设置它的各种属性。
 *
 *> 完整示例请参考：[spin_box
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/spin_box.c)
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<spin_box>
 *<style name="default" border_color="#a0a0a0"  text_color="black" text_align_h="left">
 *<normal     bg_color="#f0f0f0" />
 *<focused    bg_color="#f0f0f0" border_color="black"/>
 *<disable    bg_color="gray" text_color="#d0d0d0" />
 *<error      bg_color="#f0f0f0" text_color="red" />
 *<empty      bg_color="#f0f0f0" text_color="#a0a0a0" />
 *</style>
 *</spin_box>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L128)
 *
 */
class TSpinBox extends TEdit {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建spin_box对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSpinBox(spin_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为spin_box对象(供脚本语言使用)。
   * 
   * @param widget spin_box对象。
   *
   * @returns spin_box对象。
   */
  static cast(widget: TWidget): TSpinBox {
    return new TSpinBox(spin_box_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * system\_bar窗口。
 *
 *system\_bar窗口是一种特殊的窗口，独占LCD顶部区域，用来显示当前窗口的标题和关闭按钮等内容。
 *
 *> system\_bar窗口需要在打开第一个应用程序窗口之前打开。
 *
 *system_bar对两个子控件会做特殊处理：
 *
 ** 1.名为"title"的label控件，自动显示当前主窗口的name或text。
 ** 2.名为"close"的button控件，点击之后向当前主窗口发送EVT\_REQUEST\_CLOSE\_WINDOW消息。
 *
 *system\_bar\_t是[window\_base\_t](window_base_t.md)的子类控件，
 *window\_base\_t的函数均适用于system\_bar\_t控件。
 *
 *在xml中使用"system\_bar"标签创建system\_bar窗口。如：
 *
 *```xml
 *<system_bar h="30">
 *<column x="0" y="0" w="-40" h="100%">
 *<label style="title" x="10" y="m" w="55%" h="100%" name="title"/>
 *<digit_clock style="time" x="r" y="m" w="40%" h="100%" format="hh:mm"/>
 *</column>
 *<button style="close" x="r:5" y="m" w="26" h="26" name="close" text="x"/>
 *</system_bar>
 *```
 *
 *> 更多用法请参考：
 *[system_bar](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/system_bar.xml)
 *
 *在c代码中使用函数system\_bar\_create创建system\_bar窗口。如：
 *
 *
 *> 创建之后，和使用普通窗口是一样的。
 *
 *可用通过style来设置控件的显示风格，如背景颜色等等。如：
 *
 *```xml
 *<system_bar>
 *<style name="default">
 *<normal bg_color="#a0a0a0"/>
 *</style>
 *</system_bar>
 *```
 *
 *> 更多用法请参考：
 *[system_bar.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/system_bar.xml)
 *
 */
class TSystemBar extends TWindowBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建system_bar对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns system_bar对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TSystemBar(system_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为system_bar对象(供脚本语言使用)。
   * 
   * @param widget system_bar对象。
   *
   * @returns system_bar对象。
   */
  static cast(widget: TWidget): TSystemBar {
    return new TSystemBar(system_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 窗口。
 *
 *缺省的应用程序窗口，占用除system\_bar\_t之外的整个区域，请不要修改它的位置和大小(除非你清楚后果)。
 *
 *window\_t是[window\_base\_t](window_base_t.md)的子类控件，window\_base\_t的函数均适用于window\_t控件。
 *
 *在xml中使用"window"标签创建窗口。无需指定坐标和大小，可以指定主题和动画名称。如：
 *
 *```xml
 *<window theme="basic" anim_hint="htranslate">
 *...
 *</window>
 *```
 *
 *>
 *更多用法请参考：[window.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/)
 *
 *在c代码中使用函数window\_create创建窗口。如：
 *
 *
 *> 无需指定父控件、坐标和大小，使用0即可。
 *
 *> 完整示例请参考：[window
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/)
 *
 *可用通过style来设置窗口的风格，如背景颜色或图片等。如：
 *
 *```xml
 *<style name="bricks">
 *<normal bg_image="bricks"  bg_image_draw_type="repeat"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L0)
 *
 */
class TWindow extends TWindowBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建window对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TWindow(window_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 以缺省的方式创建window对象。
   * 
   *
   * @returns 对象。
   */
  static createDefault(): TWidget {
    return new TWindow(window_create_default());
  }


  /**
   * 设置为全屏窗口。
   *
   *>这里全屏是指与LCD相同大小，而非让SDL窗口全屏。
   * 
   * @param fullscreen 是否全屏。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setFullscreen(fullscreen: boolean): TRet {
    return window_set_fullscreen(this != null ? (this.nativeObj || this) : null, fullscreen);
  }


  /**
   * 从资源文件中加载并创建window_base对象。本函数在ui_loader/ui_builder_default里实现。
   * 
   * @param name window的名称。
   *
   * @returns 对象。
   */
  static open(name: string): TWidget {
    return new TWindow(window_open(name));
  }


  /**
   * 从资源文件中加载并创建window对象。本函数在ui_loader/ui_builder_default里实现。
   * 
   * @param name window的名称。
   * @param to_close 关闭该窗口。
   *
   * @returns 对象。
   */
  static openAndClose(name: string, to_close: TWidget): TWidget {
    return new TWindow(window_open_and_close(name, to_close != null ? (to_close.nativeObj || to_close) : null));
  }


  /**
   * 关闭窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  close(): TRet {
    return window_close(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 立即无条件关闭窗口(无动画)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  closeForce(): TRet {
    return window_close_force(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 转换为window对象(供脚本语言使用)。
   * 
   * @param widget window对象。
   *
   * @returns window对象。
   */
  static cast(widget: TWidget): TWindow {
    return new TWindow(window_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 是否全屏。
   *
   *>这里全屏是指与LCD相同大小，而非让SDL窗口全屏。
   *
   */
  get fullscreen(): boolean {
    return window_t_get_prop_fullscreen(this.nativeObj);
  }

  set fullscreen(v: boolean) {
    this.setFullscreen(v);
  }

};
/**
 * 软键盘。
 *
 *软键盘是一个特殊的窗口，由编辑器通过输入法自动打开和关闭。
 *
 *这里介绍一下定制软键盘的方法：
 *
 *编辑器输入类型和软键盘UI资源文件的对应关系:
 *
 *| 输入类型       | 软键盘UI资源文件|
 *|----------------|:---------------:|
 *| INPUT\_PHONE    | kb\_phone.xml    |
 *| INPUT\_INT      | kb\_int.xml      |
 *| INPUT\_FLOAT    | kb\_float.xml    |
 *| INPUT\_UINT     | kb\_uint.xml     |
 *| INPUT\_UFLOAT   | kb\_ufloat.xml   |
 *| INPUT\_HEX      | kb\_hex.xml      |
 *| INPUT\_EMAIL    | kb\_ascii.xml    |
 *| INPUT\_PASSWORD | kb\_ascii.xml    |
 *| INPUT\_CUSTOM   | 使用自定义的键盘 |
 *| 其它            | kb\_default.xml  |
 *
 *keyboard中按钮子控件的名称有些特殊要求：
 *
 *|  名称          | 功能            |
 *|----------------|:---------------:|
 *| return         | 回车键          |
 *| action         | 定制按钮        |
 *| backspace      | 删除键          |
 *| tab            | tab键           |
 *| space          | 空格键          |
 *| close          | 关闭软键盘      |
 *| 前缀key:       | 键值            |
 *| 前缀page:      | 切换到页面      |
 *
 *
 *> 更多用法请参考：
 *[kb_default](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/kb_default.xml)
 *
 */
class TKeyboard extends TWindowBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建keyboard对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TKeyboard(keyboard_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换为keyboard对象(供脚本语言使用)。
   * 
   * @param widget keyboard对象。
   *
   * @returns keyboard对象。
   */
  static cast(widget: TWidget): TKeyboard {
    return new TKeyboard(keyboard_cast(widget != null ? (widget.nativeObj || widget) : null));
  }

};
/**
 * 对话框。 对话框是一种特殊的窗口，大小和位置可以自由设置。
 *
 *AWTK中的对话框可以是模态的，也可以是非模态的。
 *
 *如果dialog有透明或半透效果则不支持窗口动画。
 *
 *> 由于浏览器中无法实现主循环嵌套，因此无法实现模态对话框。
 *如果希望自己写的AWTK应用程序可以在浏览器(包括各种小程序)中运行或演示，
 *请避免使用模态对话框。
 *
 *对话框通常由对话框标题和对话框客户区两部分组成：
 *
 *
 *
 *dialog\_t是[window\_base\_t](window_base_t.md)的子类控件，window\_base\_t的函数均适用于dialog\_t控件。
 *
 *在xml中使用"dialog"标签创建对话框。如：
 *
 *```xml
 *<dialog anim_hint="center_scale(duration=300)" x="c" y="m" w="80%" h="160" text="Dialog">
 *<dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK" />
 *<dialog_client x="0" y="bottom" w="100%" h="-30">
 *<label name="" x="center" y="middle:-20" w="200" h="30" text="Are you ready?"/>
 *<button name="quit" x="10" y="bottom:10" w="40%" h="30" text="确定"/>
 *<button name="quit" x="right:10" y="bottom:10" w="40%" h="30" text="取消"/>
 *</dialog_client>
 *</dialog>
 *```
 *
 *如果你不需要对话框的标题，可以这样写：
 *
 *```xml
 *<dialog anim_hint="center_scale(duration=300)" x="c" y="m" w="80%" h="160" text="Dialog">
 *<label name="" x="center" y="middle:-20" w="200" h="30" text="Are you ready?"/>
 *<button name="quit" x="10" y="bottom:10" w="40%" h="30" text="确定"/>
 *<button name="quit" x="right:10" y="bottom:10" w="40%" h="30" text="取消"/>
 *</dialog>
 *```
 *
 *打开非模态对话框时，其用法与普通窗口一样。打开非模态对话框时，还需要调用dialog\_modal。
 *
 *
 *关闭模态对话框用dialog\_quit
 *
 *
 *关闭非模态对话框用window\_close。
 *
 *
 *> 更多用法请参考：
 *[dialog.xml](https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/ui/)
 *
 *> 完整C代码示例请参考：
 *
 ** [非模态对话框](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/dialog.c)
 *
 ** [模态对话框](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/dialog_modal.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default">
 *<normal border_color="#606060" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme default]
 *(https://github.com/zlgopen/awtk/blob/master/demos/assets/default/raw/styles/default.xml#L324)
 *
 */
class TDialog extends TWindowBase {
  public nativeObj: any;
  constructor(nativeObj: any) {
    super(nativeObj);
  }


  /**
   * 创建dialog对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns dialog对象。
   */
  static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TDialog(dialog_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 创建dialog对象，同时创建title/client。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns dialog对象。
   */
  static createSimple(parent: TWidget, x: number, y: number, w: number, h: number): TWidget {
    return new TDialog(dialog_create_simple(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }


  /**
   * 转换dialog对象(供脚本语言使用)。
   * 
   * @param widget dialog对象。
   *
   * @returns dialog对象。
   */
  static cast(widget: TWidget): TDialog {
    return new TDialog(dialog_cast(widget != null ? (widget.nativeObj || widget) : null));
  }


  /**
   * 获取title控件。
   * 
   *
   * @returns title对象。
   */
  getTitle(): TWidget {
    return new TWidget(dialog_get_title(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 获取client控件。
   * 
   *
   * @returns client对象。
   */
  getClient(): TWidget {
    return new TWidget(dialog_get_client(this != null ? (this.nativeObj || this) : null));
  }


  /**
   * 从资源文件中加载并创建Dialog对象。
   *
   *本函数在ui\_loader/ui\_builder_default里实现。
   * 
   * @param name dialog的名称。
   *
   * @returns 对象。
   */
  static open(name: string): TWidget {
    return new TDialog(dialog_open(name));
  }


  /**
   * 设置对话框的标题文本。
   * 
   * @param title 标题。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  setTitle(title: string): TRet {
    return dialog_set_title(this != null ? (this.nativeObj || this) : null, title);
  }


  /**
   * 模态显示对话框。
   *dialog_modal返回后，dialog对象将在下一个idle函数中回收。
   *也就是在dialog_modal调用完成后仍然可以访问dialog中控件，直到本次事件结束。
   * 
   *
   * @returns 返回退出吗。
   */
  modal(): TDialogQuitCode {
    return dialog_modal(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 退出模态显示，关闭对话框。
   *
   *> 比如，在对话框中关闭按钮的事件处理函数中，调用本函数关闭对话框。
   * 
   * @param code 退出码，作为dialog_modal的返回值(参考：[dialog_quit_code_t](dialog_quit_code_t.md))。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  quit(code: number): TRet {
    return dialog_quit(this != null ? (this.nativeObj || this) : null, code);
  }


  /**
   * 检查对话框是否已经退出模态。
   * 
   *
   * @returns 返回TRUE表示已经退出，否则表示没有。
   */
  isQuited(): boolean {
    return dialog_is_quited(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 检查对话框是否为模态对话框。
   * 
   *
   * @returns 返回TRUE表示是模态对话框，否则表示不是。
   */
  isModal(): boolean {
    return dialog_is_modal(this != null ? (this.nativeObj || this) : null);
  }


  /**
   * 显示『短暂提示信息』对话框。
   *
   *主题由dialog_toast.xml文件决定。
   * 
   * @param text 文本内容。
   * @param duration 显示时间(单位为毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static toast(text: string, duration: number): TRet {
    return dialog_toast(text, duration);
  }


  /**
   * 显示『提示信息』对话框。
   *
   *主题由dialog_info.xml文件决定。
   * 
   * @param title 标题。
   * @param text 文本内容。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static info(title: string, text: string): TRet {
    return dialog_info(title, text);
  }


  /**
   * 显示『警告』对话框。
   *
   *主题由dialog_warn.xml文件决定。
   * 
   * @param title 标题。
   * @param text 文本内容。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
  static warn(title: string, text: string): TRet {
    return dialog_warn(title, text);
  }


  /**
   * 显示『确认』对话框。
   *
   *主题由dialog_confirm.xml文件决定。
   * 
   * @param title 标题。
   * @param text 文本内容。
   *
   * @returns 返回RET_OK表示确认，否则表示取消。
   */
  static confirm(title: string, text: string): TRet {
    return dialog_confirm(title, text);
  }


  /**
   * 对话框高亮策略。
   *
   *> 请参考 [对话框高亮策略](https://github.com/zlgopen/awtk/blob/master/docs/dialog_highlight.md)
   *
   */
  get highlight(): string {
    return dialog_t_get_prop_highlight(this.nativeObj);
  }

};