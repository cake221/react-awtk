
declare function print(str);
if(this['console'] === undefined) {
  this.console = {}
  this.console.log = function(str) {
    print(str);
  }
}
declare function tk_quit() : TRet;
declare function tk_get_pointer_x() : number;
declare function tk_get_pointer_y() : number;
declare function tk_is_pointer_pressed() : number;
declare function bitmap_create() : TBitmap;
declare function bitmap_create_ex(w : number, h : number, line_length : number, format : TBitmapFormat) : TBitmap;
declare function bitmap_get_bpp(bitmap : TBitmap) : number;
declare function bitmap_destroy(bitmap : TBitmap) : TRet;
declare function bitmap_t_get_prop_w(nativeObj : any);
declare function bitmap_t_get_prop_h(nativeObj : any);
declare function bitmap_t_get_prop_line_length(nativeObj : any);
declare function bitmap_t_get_prop_flags(nativeObj : any);
declare function bitmap_t_get_prop_format(nativeObj : any);
declare function bitmap_t_get_prop_name(nativeObj : any);
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
declare function canvas_get_width(c : TCanvas) : number;
declare function canvas_get_height(c : TCanvas) : number;
declare function canvas_get_clip_rect(c : TCanvas, r : TRect) : TRet;
declare function canvas_set_clip_rect(c : TCanvas, r : TRect) : TRet;
declare function canvas_set_clip_rect_ex(c : TCanvas, r : TRect, translate : number) : TRet;
declare function canvas_set_fill_color_str(c : TCanvas, color : string) : TRet;
declare function canvas_set_text_color_str(c : TCanvas, color : string) : TRet;
declare function canvas_set_stroke_color_str(c : TCanvas, color : string) : TRet;
declare function canvas_set_global_alpha(c : TCanvas, alpha : number) : TRet;
declare function canvas_translate(c : TCanvas, dx : number, dy : number) : TRet;
declare function canvas_untranslate(c : TCanvas, dx : number, dy : number) : TRet;
declare function canvas_draw_vline(c : TCanvas, x : number, y : number, h : number) : TRet;
declare function canvas_draw_hline(c : TCanvas, x : number, y : number, w : number) : TRet;
declare function canvas_fill_rect(c : TCanvas, x : number, y : number, w : number, h : number) : TRet;
declare function canvas_stroke_rect(c : TCanvas, x : number, y : number, w : number, h : number) : TRet;
declare function canvas_set_font(c : TCanvas, name : string, size : number) : TRet;
declare function canvas_measure_utf8(c : TCanvas, str : string) : number;
declare function canvas_draw_utf8(c : TCanvas, str : string, x : number, y : number) : TRet;
declare function canvas_draw_utf8_in_rect(c : TCanvas, str : string, r : TRect) : TRet;
declare function canvas_draw_icon(c : TCanvas, img : TBitmap, cx : number, cy : number) : TRet;
declare function canvas_draw_image(c : TCanvas, img : TBitmap, src : TRect, dst : TRect) : TRet;
declare function canvas_draw_image_ex(c : TCanvas, img : TBitmap, draw_type : TImageDrawType, dst : TRect) : TRet;
declare function canvas_get_vgcanvas(c : TCanvas) : TVgcanvas;
declare function canvas_cast(c : TCanvas) : TCanvas;
declare function canvas_reset(c : TCanvas) : TRet;
declare function canvas_t_get_prop_ox(nativeObj : any);
declare function canvas_t_get_prop_oy(nativeObj : any);
declare function canvas_t_get_prop_font_name(nativeObj : any);
declare function canvas_t_get_prop_font_size(nativeObj : any);
declare function canvas_t_get_prop_global_alpha(nativeObj : any);
declare function CLIP_BOARD_DATA_TYPE_NONE();
declare function CLIP_BOARD_DATA_TYPE_TEXT();
declare function clip_board_set_text(text : string) : TRet;
declare function clip_board_get_text() : string;
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
declare function EVT_REQ_START();
declare function EVT_USER_START();
declare function font_manager_unload_font(fm : TFontManager, name : string, size : number) : TRet;
declare function font_manager_unload_all(fm : TFontManager) : TRet;
declare function GLYPH_FMT_ALPHA();
declare function GLYPH_FMT_MONO();
declare function GLYPH_FMT_RGBA();
declare function idle_add(on_idle : Function, ctx : any) : number;
declare function idle_remove(idle_id : number) : TRet;
declare function value_set_bool(v : TValue, value : number) : TValue;
declare function value_bool(v : TValue) : number;
declare function value_set_int8(v : TValue, value : number) : TValue;
declare function value_int8(v : TValue) : number;
declare function value_set_uint8(v : TValue, value : number) : TValue;
declare function value_uint8(v : TValue) : number;
declare function value_set_int16(v : TValue, value : number) : TValue;
declare function value_int16(v : TValue) : number;
declare function value_set_uint16(v : TValue, value : number) : TValue;
declare function value_uint16(v : TValue) : number;
declare function value_set_int32(v : TValue, value : number) : TValue;
declare function value_int32(v : TValue) : number;
declare function value_set_uint32(v : TValue, value : number) : TValue;
declare function value_set_int64(v : TValue, value : number) : TValue;
declare function value_int64(v : TValue) : number;
declare function value_set_uint64(v : TValue, value : number) : TValue;
declare function value_uint64(v : TValue) : number;
declare function value_set_float(v : TValue, value : number) : TValue;
declare function value_float32(v : TValue) : number;
declare function value_set_double(v : TValue, value : number) : TValue;
declare function value_double(v : TValue) : number;
declare function value_dup_str(v : TValue, value : string) : TValue;
declare function value_str(v : TValue) : string;
declare function value_is_null(value : TValue) : number;
declare function value_set_int(v : TValue, value : number) : TValue;
declare function value_set_object(v : TValue, value : TObject) : TValue;
declare function value_object(v : TValue) : TObject;
declare function value_set_token(v : TValue, value : number) : TValue;
declare function value_token(v : TValue) : number;
declare function value_create() : TValue;
declare function value_destroy(v : TValue) : TRet;
declare function value_reset(v : TValue) : TRet;
declare function value_cast(value : TValue) : TValue;
declare function image_manager() : TImageManager;
declare function image_manager_get_bitmap(imm : TImageManager, name : string, image : TBitmap) : TRet;
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
declare function input_method_commit_text(im : TInputMethod, text : string) : TRet;
declare function input_method_dispatch_key(im : TInputMethod, key : number) : TRet;
declare function input_method() : TInputMethod;
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
declare function locale_info() : TLocaleInfo;
declare function locale_info_tr(locale_info : TLocaleInfo, text : string) : string;
declare function locale_info_change(locale_info : TLocaleInfo, language : string, country : string) : TRet;
declare function locale_info_on(locale_info : TLocaleInfo, type : TEventType, on_event : Function, ctx : any) : number;
declare function locale_info_off(locale_info : TLocaleInfo, id : number) : TRet;
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
declare function style_notify_widget_state_changed(s : TStyle, widget : TWidget) : TRet;
declare function style_is_valid(s : TStyle) : number;
declare function style_get_int(s : TStyle, name : string, defval : number) : number;
declare function style_get_str(s : TStyle, name : string, defval : string) : string;
declare function style_set(s : TStyle, state : string, name : string, value : TValue) : TRet;
declare function style_is_mutable(s : TStyle) : number;
declare function theme() : TTheme;
declare function timer_add(on_timer : Function, ctx : any, duration : number) : number;
declare function timer_remove(timer_id : number) : TRet;
declare function timer_reset(timer_id : number) : TRet;
declare function timer_modify(timer_id : number, duration : number) : TRet;
declare function ALIGN_V_NONE();
declare function ALIGN_V_MIDDLE();
declare function ALIGN_V_TOP();
declare function ALIGN_V_BOTTOM();
declare function ALIGN_H_NONE();
declare function ALIGN_H_CENTER();
declare function ALIGN_H_LEFT();
declare function ALIGN_H_RIGHT();
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
declare function vgcanvas_cast(vg : TVgcanvas) : TVgcanvas;
declare function vgcanvas_flush(vg : TVgcanvas) : TRet;
declare function vgcanvas_begin_path(vg : TVgcanvas) : TRet;
declare function vgcanvas_move_to(vg : TVgcanvas, x : number, y : number) : TRet;
declare function vgcanvas_line_to(vg : TVgcanvas, x : number, y : number) : TRet;
declare function vgcanvas_quad_to(vg : TVgcanvas, cpx : number, cpy : number, x : number, y : number) : TRet;
declare function vgcanvas_bezier_to(vg : TVgcanvas, cp1x : number, cp1y : number, cp2x : number, cp2y : number, x : number, y : number) : TRet;
declare function vgcanvas_arc_to(vg : TVgcanvas, x1 : number, y1 : number, x2 : number, y2 : number, r : number) : TRet;
declare function vgcanvas_arc(vg : TVgcanvas, x : number, y : number, r : number, start_angle : number, end_angle : number, ccw : number) : TRet;
declare function vgcanvas_is_point_in_path(vg : TVgcanvas, x : number, y : number) : number;
declare function vgcanvas_rect(vg : TVgcanvas, x : number, y : number, w : number, h : number) : TRet;
declare function vgcanvas_rounded_rect(vg : TVgcanvas, x : number, y : number, w : number, h : number, r : number) : TRet;
declare function vgcanvas_ellipse(vg : TVgcanvas, x : number, y : number, rx : number, ry : number) : TRet;
declare function vgcanvas_close_path(vg : TVgcanvas) : TRet;
declare function vgcanvas_rotate(vg : TVgcanvas, rad : number) : TRet;
declare function vgcanvas_scale(vg : TVgcanvas, x : number, y : number) : TRet;
declare function vgcanvas_translate(vg : TVgcanvas, x : number, y : number) : TRet;
declare function vgcanvas_transform(vg : TVgcanvas, a : number, b : number, c : number, d : number, e : number, f : number) : TRet;
declare function vgcanvas_set_transform(vg : TVgcanvas, a : number, b : number, c : number, d : number, e : number, f : number) : TRet;
declare function vgcanvas_clip_rect(vg : TVgcanvas, x : number, y : number, w : number, h : number) : TRet;
declare function vgcanvas_fill(vg : TVgcanvas) : TRet;
declare function vgcanvas_stroke(vg : TVgcanvas) : TRet;
declare function vgcanvas_paint(vg : TVgcanvas, stroke : number, img : TBitmap) : TRet;
declare function vgcanvas_set_font(vg : TVgcanvas, font : string) : TRet;
declare function vgcanvas_set_font_size(vg : TVgcanvas, font : number) : TRet;
declare function vgcanvas_set_text_align(vg : TVgcanvas, value : string) : TRet;
declare function vgcanvas_set_text_baseline(vg : TVgcanvas, value : string) : TRet;
declare function vgcanvas_fill_text(vg : TVgcanvas, text : string, x : number, y : number, max_width : number) : TRet;
declare function vgcanvas_measure_text(vg : TVgcanvas, text : string) : number;
declare function vgcanvas_draw_image(vg : TVgcanvas, img : TBitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet;
declare function vgcanvas_draw_icon(vg : TVgcanvas, img : TBitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet;
declare function vgcanvas_set_antialias(vg : TVgcanvas, value : number) : TRet;
declare function vgcanvas_set_global_alpha(vg : TVgcanvas, alpha : number) : TRet;
declare function vgcanvas_set_line_width(vg : TVgcanvas, value : number) : TRet;
declare function vgcanvas_set_fill_color_str(vg : TVgcanvas, color : string) : TRet;
declare function vgcanvas_set_stroke_color_str(vg : TVgcanvas, color : string) : TRet;
declare function vgcanvas_set_line_cap(vg : TVgcanvas, value : string) : TRet;
declare function vgcanvas_set_line_join(vg : TVgcanvas, value : string) : TRet;
declare function vgcanvas_set_miter_limit(vg : TVgcanvas, value : number) : TRet;
declare function vgcanvas_save(vg : TVgcanvas) : TRet;
declare function vgcanvas_restore(vg : TVgcanvas) : TRet;
declare function vgcanvas_t_get_prop_w(nativeObj : any);
declare function vgcanvas_t_get_prop_h(nativeObj : any);
declare function vgcanvas_t_get_prop_ratio(nativeObj : any);
declare function vgcanvas_t_get_prop_anti_alias(nativeObj : any);
declare function vgcanvas_t_get_prop_line_width(nativeObj : any);
declare function vgcanvas_t_get_prop_global_alpha(nativeObj : any);
declare function vgcanvas_t_get_prop_miter_limit(nativeObj : any);
declare function vgcanvas_t_get_prop_line_cap(nativeObj : any);
declare function vgcanvas_t_get_prop_line_join(nativeObj : any);
declare function vgcanvas_t_get_prop_font(nativeObj : any);
declare function vgcanvas_t_get_prop_font_size(nativeObj : any);
declare function vgcanvas_t_get_prop_text_align(nativeObj : any);
declare function vgcanvas_t_get_prop_text_baseline(nativeObj : any);
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
declare function widget_count_children(widget : TWidget) : number;
declare function widget_get_child(widget : TWidget, index : number) : TWidget;
declare function widget_index_of(widget : TWidget) : number;
declare function widget_move(widget : TWidget, x : number, y : number) : TRet;
declare function widget_resize(widget : TWidget, w : number, h : number) : TRet;
declare function widget_move_resize(widget : TWidget, x : number, y : number, w : number, h : number) : TRet;
declare function widget_set_value(widget : TWidget, value : number) : TRet;
declare function widget_animate_value_to(widget : TWidget, value : number, duration : number) : TRet;
declare function widget_add_value(widget : TWidget, delta : number) : TRet;
declare function widget_use_style(widget : TWidget, style : string) : TRet;
declare function widget_set_text_utf8(widget : TWidget, text : string) : TRet;
declare function widget_set_tr_text(widget : TWidget, text : string) : TRet;
declare function widget_get_value(widget : TWidget) : number;
declare function widget_get_text(widget : TWidget) : any;
declare function widget_set_name(widget : TWidget, name : string) : TRet;
declare function widget_set_theme(widget : TWidget, name : string) : TRet;
declare function widget_set_pointer_cursor(widget : TWidget, cursor : string) : TRet;
declare function widget_set_animation(widget : TWidget, animation : string) : TRet;
declare function widget_create_animator(widget : TWidget, animation : string) : TRet;
declare function widget_start_animator(widget : TWidget, name : string) : TRet;
declare function widget_set_animator_time_scale(widget : TWidget, name : string, time_scale : number) : TRet;
declare function widget_pause_animator(widget : TWidget, name : string) : TRet;
declare function widget_stop_animator(widget : TWidget, name : string) : TRet;
declare function widget_destroy_animator(widget : TWidget, name : string) : TRet;
declare function widget_set_enable(widget : TWidget, enable : number) : TRet;
declare function widget_set_feedback(widget : TWidget, feedback : number) : TRet;
declare function widget_set_floating(widget : TWidget, floating : number) : TRet;
declare function widget_set_focused(widget : TWidget, focused : number) : TRet;
declare function widget_child(widget : TWidget, name : string) : TWidget;
declare function widget_lookup(widget : TWidget, name : string, recursive : number) : TWidget;
declare function widget_lookup_by_type(widget : TWidget, type : string, recursive : number) : TWidget;
declare function widget_set_visible(widget : TWidget, visible : number, recursive : number) : TRet;
declare function widget_set_visible_only(widget : TWidget, visible : number) : TRet;
declare function widget_set_sensitive(widget : TWidget, sensitive : number) : TRet;
declare function widget_on(widget : TWidget, type : number, on_event : Function, ctx : any) : number;
declare function widget_on_with_tag(widget : TWidget, type : number, on_event : Function, ctx : any, tag : number) : number;
declare function widget_off(widget : TWidget, id : number) : TRet;
declare function widget_invalidate_force(widget : TWidget, r : TRect) : TRet;
declare function widget_set_prop_str(widget : TWidget, name : string, v : string) : TRet;
declare function widget_get_prop_str(widget : TWidget, name : string, defval : string) : string;
declare function widget_set_prop_int(widget : TWidget, name : string, v : number) : TRet;
declare function widget_get_prop_int(widget : TWidget, name : string, defval : number) : number;
declare function widget_set_prop_bool(widget : TWidget, name : string, v : number) : TRet;
declare function widget_get_prop_bool(widget : TWidget, name : string, defval : number) : number;
declare function widget_is_window_opened(widget : TWidget) : number;
declare function widget_is_window(widget : TWidget) : number;
declare function widget_is_designing_window(widget : TWidget) : number;
declare function widget_is_window_manager(widget : TWidget) : number;
declare function widget_foreach(widget : TWidget, visit : Function, ctx : any) : TRet;
declare function widget_get_window(widget : TWidget) : TWidget;
declare function widget_get_window_manager(widget : TWidget) : TWidget;
declare function widget_get_type(widget : TWidget) : string;
declare function widget_clone(widget : TWidget, parent : TWidget) : TWidget;
declare function widget_equal(widget : TWidget, other : TWidget) : number;
declare function widget_cast(widget : TWidget) : TWidget;
declare function widget_destroy(widget : TWidget) : TRet;
declare function widget_unref(widget : TWidget) : TRet;
declare function widget_layout(widget : TWidget) : TRet;
declare function widget_set_self_layout(widget : TWidget, params : string) : TRet;
declare function widget_set_children_layout(widget : TWidget, params : string) : TRet;
declare function widget_set_self_layout_params(widget : TWidget, x : string, y : string, w : string, h : string) : TRet;
declare function widget_set_style_int(widget : TWidget, state_and_name : string, value : number) : TRet;
declare function widget_set_style_str(widget : TWidget, state_and_name : string, value : string) : TRet;
declare function widget_set_style_color(widget : TWidget, state_and_name : string, value : number) : TRet;
declare function widget_t_get_prop_x(nativeObj : any);
declare function widget_t_get_prop_y(nativeObj : any);
declare function widget_t_get_prop_w(nativeObj : any);
declare function widget_t_get_prop_h(nativeObj : any);
declare function widget_t_get_prop_name(nativeObj : any);
declare function widget_t_get_prop_tr_text(nativeObj : any);
declare function widget_t_get_prop_style(nativeObj : any);
declare function widget_t_get_prop_animation(nativeObj : any);
declare function widget_t_get_prop_enable(nativeObj : any);
declare function widget_t_get_prop_feedback(nativeObj : any);
declare function widget_t_get_prop_visible(nativeObj : any);
declare function widget_t_set_prop_visible(nativeObj : any, value : number);
declare function widget_t_get_prop_sensitive(nativeObj : any);
declare function widget_t_set_prop_sensitive(nativeObj : any, value : number);
declare function widget_t_get_prop_focusable(nativeObj : any);
declare function widget_t_set_prop_focusable(nativeObj : any, value : number);
declare function widget_t_get_prop_with_focus_state(nativeObj : any);
declare function widget_t_set_prop_with_focus_state(nativeObj : any, value : number);
declare function widget_t_get_prop_floating(nativeObj : any);
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
declare function time_now_s() : number;
declare function time_now_ms() : number;
declare function rect_create(x : number, y : number, w : number, h : number) : TRect;
declare function rect_set(rect : TRect, x : number, y : number, w : number, h : number) : TRect;
declare function rect_cast(rect : TRect) : TRect;
declare function rect_destroy(r : TRect) : TRet;
declare function rect_t_get_prop_x(nativeObj : any);
declare function rect_t_get_prop_y(nativeObj : any);
declare function rect_t_get_prop_w(nativeObj : any);
declare function rect_t_get_prop_h(nativeObj : any);
declare function named_value_create() : TNamedValue;
declare function named_value_cast(nv : TNamedValue) : TNamedValue;
declare function named_value_set_name(nv : TNamedValue, name : string) : TRet;
declare function named_value_set_value(nv : TNamedValue, value : TValue) : TRet;
declare function named_value_get_value(nv : TNamedValue) : TValue;
declare function named_value_destroy(nv : TNamedValue) : TRet;
declare function named_value_t_get_prop_name(nativeObj : any);
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
declare function event_cast(event : TEvent) : TEvent;
declare function event_create(type : number) : TEvent;
declare function event_destroy(event : TEvent) : TRet;
declare function event_t_get_prop_type(nativeObj : any);
declare function event_t_get_prop_time(nativeObj : any);
declare function event_t_get_prop_target(nativeObj : any);
declare function EVT_NONE();
declare function EVT_PROP_WILL_CHANGE();
declare function EVT_PROP_CHANGED();
declare function EVT_ITEMS_WILL_CHANGE();
declare function EVT_ITEMS_CHANGED();
declare function EVT_PROPS_CHANGED();
declare function EVT_PROGRESS();
declare function EVT_DESTROY();
declare function emitter_create() : TEmitter;
declare function emitter_dispatch(emitter : TEmitter, e : TEvent) : TRet;
declare function emitter_dispatch_simple_event(emitter : TEmitter, type : number) : TRet;
declare function emitter_on(emitter : TEmitter, type : number, on_event : Function, ctx : any) : number;
declare function emitter_on_with_tag(emitter : TEmitter, type : number, on_event : Function, ctx : any, tag : number) : number;
declare function emitter_off(emitter : TEmitter, id : number) : TRet;
declare function emitter_enable(emitter : TEmitter) : TRet;
declare function emitter_disable(emitter : TEmitter) : TRet;
declare function emitter_size(emitter : TEmitter) : number;
declare function emitter_destroy(emitter : TEmitter) : TRet;
declare function emitter_cast(emitter : TEmitter) : TEmitter;
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
declare function date_time_create() : TDateTime;
declare function date_time_set(dt : TDateTime) : TRet;
declare function date_time_destroy(dt : TDateTime) : TRet;
declare function date_time_t_get_prop_second(nativeObj : any);
declare function date_time_t_get_prop_minute(nativeObj : any);
declare function date_time_t_get_prop_hour(nativeObj : any);
declare function date_time_t_get_prop_day(nativeObj : any);
declare function date_time_t_get_prop_wday(nativeObj : any);
declare function date_time_t_get_prop_month(nativeObj : any);
declare function date_time_t_get_prop_year(nativeObj : any);
declare function color_create(r : number, b : number, g : number, a : number) : TColor;
declare function color_from_str(c : TColor, str : string) : TColor;
declare function color_r(c : TColor) : number;
declare function color_g(c : TColor) : number;
declare function color_b(c : TColor) : number;
declare function color_a(c : TColor) : number;
declare function color_cast(color : TColor) : TColor;
declare function color_destroy(c : TColor) : TRet;
declare function color_t_get_prop_color(nativeObj : any);
declare function color_t_set_prop_color(nativeObj : any, value : number);
declare function asset_info_t_get_prop_type(nativeObj : any);
declare function asset_info_t_get_prop_subtype(nativeObj : any);
declare function asset_info_t_get_prop_is_in_rom(nativeObj : any);
declare function asset_info_t_get_prop_size(nativeObj : any);
declare function asset_info_t_get_prop_refcount(nativeObj : any);
declare function asset_info_t_get_prop_name(nativeObj : any);
declare function ASSET_TYPE_NONE();
declare function ASSET_TYPE_FONT();
declare function ASSET_TYPE_IMAGE();
declare function ASSET_TYPE_STYLE();
declare function ASSET_TYPE_UI();
declare function ASSET_TYPE_XML();
declare function ASSET_TYPE_STRINGS();
declare function ASSET_TYPE_SCRIPT();
declare function ASSET_TYPE_DATA();
declare function assets_manager() : TAssetsManager;
declare function assets_manager_ref(am : TAssetsManager, type : TAssetType, name : string) : TAssetInfo;
declare function assets_manager_unref(am : TAssetsManager, info : TAssetInfo) : TRet;
declare function color_component_cast(widget : TWidget) : TWidget;
declare function time_clock_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function time_clock_cast(widget : TWidget) : TWidget;
declare function time_clock_set_hour(widget : TWidget, hour : number) : TRet;
declare function time_clock_set_minute(widget : TWidget, minute : number) : TRet;
declare function time_clock_set_second(widget : TWidget, second : number) : TRet;
declare function time_clock_set_hour_image(widget : TWidget, hour : string) : TRet;
declare function time_clock_set_minute_image(widget : TWidget, minute_image : string) : TRet;
declare function time_clock_set_second_image(widget : TWidget, second_image : string) : TRet;
declare function time_clock_set_bg_image(widget : TWidget, bg_image : string) : TRet;
declare function time_clock_set_image(widget : TWidget, image : string) : TRet;
declare function time_clock_set_hour_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
declare function time_clock_set_minute_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
declare function time_clock_set_second_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
declare function time_clock_t_get_prop_hour(nativeObj : any);
declare function time_clock_t_get_prop_minute(nativeObj : any);
declare function time_clock_t_get_prop_second(nativeObj : any);
declare function time_clock_t_get_prop_image(nativeObj : any);
declare function time_clock_t_get_prop_bg_image(nativeObj : any);
declare function time_clock_t_get_prop_hour_image(nativeObj : any);
declare function time_clock_t_get_prop_minute_image(nativeObj : any);
declare function time_clock_t_get_prop_second_image(nativeObj : any);
declare function time_clock_t_get_prop_hour_anchor_x(nativeObj : any);
declare function time_clock_t_get_prop_hour_anchor_y(nativeObj : any);
declare function time_clock_t_get_prop_minute_anchor_x(nativeObj : any);
declare function time_clock_t_get_prop_minute_anchor_y(nativeObj : any);
declare function time_clock_t_get_prop_second_anchor_x(nativeObj : any);
declare function time_clock_t_get_prop_second_anchor_y(nativeObj : any);
declare function text_selector_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function text_selector_cast(widget : TWidget) : TWidget;
declare function text_selector_reset_options(widget : TWidget) : TRet;
declare function text_selector_count_options(widget : TWidget) : number;
declare function text_selector_append_option(widget : TWidget, value : number, text : string) : TRet;
declare function text_selector_set_options(widget : TWidget, options : string) : TRet;
declare function text_selector_set_range_options(widget : TWidget, start : number, nr : number, step : number) : TRet;
declare function text_selector_get_value(widget : TWidget) : number;
declare function text_selector_set_value(widget : TWidget, value : number) : TRet;
declare function text_selector_get_text(widget : TWidget) : string;
declare function text_selector_set_text(widget : TWidget, text : string) : TRet;
declare function text_selector_set_selected_index(widget : TWidget, index : number) : TRet;
declare function text_selector_set_visible_nr(widget : TWidget, visible_nr : number) : TRet;
declare function text_selector_t_get_prop_visible_nr(nativeObj : any);
declare function text_selector_t_get_prop_selected_index(nativeObj : any);
declare function text_selector_t_get_prop_options(nativeObj : any);
declare function switch_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function switch_set_value(widget : TWidget, value : number) : TRet;
declare function switch_cast(widget : TWidget) : TWidget;
declare function switch_t_get_prop_value(nativeObj : any);
declare function switch_t_get_prop_max_xoffset_ratio(nativeObj : any);
declare function prop_change_event_cast(event : TEvent) : TPropChangeEvent;
declare function prop_change_event_t_get_prop_name(nativeObj : any);
declare function prop_change_event_t_get_prop_value(nativeObj : any);
declare function progress_event_cast(event : TEvent) : TProgressEvent;
declare function progress_event_t_get_prop_percent(nativeObj : any);
declare function view_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function view_cast(widget : TWidget) : TWidget;
declare function slide_view_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function slide_view_cast(widget : TWidget) : TWidget;
declare function slide_view_set_auto_play(widget : TWidget, auto_play : number) : TRet;
declare function slide_view_set_active(widget : TWidget, index : number) : TRet;
declare function slide_view_set_vertical(widget : TWidget, vertical : number) : TRet;
declare function slide_view_set_anim_hint(widget : TWidget, anim_hint : string) : TRet;
declare function slide_view_set_loop(widget : TWidget, loop : number) : TRet;
declare function slide_view_t_get_prop_vertical(nativeObj : any);
declare function slide_view_t_get_prop_auto_play(nativeObj : any);
declare function slide_view_t_get_prop_loop(nativeObj : any);
declare function slide_view_t_get_prop_anim_hint(nativeObj : any);
declare function slide_indicator_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function slide_indicator_create_linear(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function slide_indicator_create_arc(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function slide_indicator_cast(widget : TWidget) : TWidget;
declare function slide_indicator_set_value(widget : TWidget, value : number) : TRet;
declare function slide_indicator_set_max(widget : TWidget, max : number) : TRet;
declare function slide_indicator_set_default_paint(widget : TWidget, default_paint : TIndicatorDefaultPaint) : TRet;
declare function slide_indicator_set_auto_hide(widget : TWidget, auto_hide : number) : TRet;
declare function slide_indicator_set_margin(widget : TWidget, margin : number) : TRet;
declare function slide_indicator_set_spacing(widget : TWidget, spacing : number) : TRet;
declare function slide_indicator_set_size(widget : TWidget, size : number) : TRet;
declare function slide_indicator_set_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
declare function slide_indicator_set_indicated_target(widget : TWidget, indicated_target : string) : TRet;
declare function slide_indicator_t_get_prop_value(nativeObj : any);
declare function slide_indicator_t_get_prop_max(nativeObj : any);
declare function slide_indicator_t_get_prop_default_paint(nativeObj : any);
declare function slide_indicator_t_get_prop_auto_hide(nativeObj : any);
declare function slide_indicator_t_get_prop_margin(nativeObj : any);
declare function slide_indicator_t_get_prop_spacing(nativeObj : any);
declare function slide_indicator_t_get_prop_size(nativeObj : any);
declare function slide_indicator_t_get_prop_anchor_x(nativeObj : any);
declare function slide_indicator_t_get_prop_anchor_y(nativeObj : any);
declare function slide_indicator_t_get_prop_indicated_target(nativeObj : any);
declare function slide_menu_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function slide_menu_cast(widget : TWidget) : TWidget;
declare function slide_menu_set_value(widget : TWidget, value : number) : TRet;
declare function slide_menu_set_align_v(widget : TWidget, align_v : TAlignV) : TRet;
declare function slide_menu_set_min_scale(widget : TWidget, min_scale : number) : TRet;
declare function slide_menu_t_get_prop_value(nativeObj : any);
declare function slide_menu_t_get_prop_align_v(nativeObj : any);
declare function slide_menu_t_get_prop_min_scale(nativeObj : any);
declare function scroll_view_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function scroll_view_cast(widget : TWidget) : TWidget;
declare function scroll_view_set_virtual_w(widget : TWidget, w : number) : TRet;
declare function scroll_view_set_virtual_h(widget : TWidget, h : number) : TRet;
declare function scroll_view_set_xslidable(widget : TWidget, xslidable : number) : TRet;
declare function scroll_view_set_yslidable(widget : TWidget, yslidable : number) : TRet;
declare function scroll_view_set_offset(widget : TWidget, xoffset : number, yoffset : number) : TRet;
declare function scroll_view_scroll_to(widget : TWidget, xoffset_end : number, yoffset_end : number, duration : number) : TRet;
declare function scroll_view_scroll_delta_to(widget : TWidget, xoffset_delta : number, yoffset_delta : number, duration : number) : TRet;
declare function scroll_view_t_get_prop_virtual_w(nativeObj : any);
declare function scroll_view_t_get_prop_virtual_h(nativeObj : any);
declare function scroll_view_t_get_prop_xoffset(nativeObj : any);
declare function scroll_view_t_get_prop_yoffset(nativeObj : any);
declare function scroll_view_t_get_prop_xslidable(nativeObj : any);
declare function scroll_view_t_get_prop_yslidable(nativeObj : any);
declare function scroll_bar_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function scroll_bar_cast(widget : TWidget) : TWidget;
declare function scroll_bar_create_mobile(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function scroll_bar_create_desktop(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function scroll_bar_set_params(widget : TWidget, virtual_size : number, row : number) : TRet;
declare function scroll_bar_scroll_to(widget : TWidget, value : number, duration : number) : TRet;
declare function scroll_bar_set_value(widget : TWidget, value : number) : TRet;
declare function scroll_bar_add_delta(widget : TWidget, delta : number) : TRet;
declare function scroll_bar_scroll_delta(widget : TWidget, delta : number) : TRet;
declare function scroll_bar_set_value_only(widget : TWidget, value : number) : TRet;
declare function scroll_bar_is_mobile(widget : TWidget) : number;
declare function scroll_bar_t_get_prop_virtual_size(nativeObj : any);
declare function scroll_bar_t_get_prop_value(nativeObj : any);
declare function scroll_bar_t_get_prop_row(nativeObj : any);
declare function scroll_bar_t_get_prop_animatable(nativeObj : any);
declare function tab_control_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function tab_control_cast(widget : TWidget) : TWidget;
declare function list_view_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function list_view_set_item_height(widget : TWidget, item_height : number) : TRet;
declare function list_view_set_default_item_height(widget : TWidget, default_item_height : number) : TRet;
declare function list_view_set_auto_hide_scroll_bar(widget : TWidget, auto_hide_scroll_bar : number) : TRet;
declare function list_view_cast(widget : TWidget) : TWidget;
declare function list_view_t_get_prop_item_height(nativeObj : any);
declare function list_view_t_get_prop_default_item_height(nativeObj : any);
declare function list_view_t_get_prop_auto_hide_scroll_bar(nativeObj : any);
declare function list_view_h_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function list_view_h_set_item_width(widget : TWidget, item_width : number) : TRet;
declare function list_view_h_set_spacing(widget : TWidget, spacing : number) : TRet;
declare function list_view_h_cast(widget : TWidget) : TWidget;
declare function list_view_h_t_get_prop_item_width(nativeObj : any);
declare function list_view_h_t_get_prop_spacing(nativeObj : any);
declare function tab_button_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function tab_button_cast(widget : TWidget) : TWidget;
declare function tab_button_set_value(widget : TWidget, value : number) : TRet;
declare function tab_button_set_icon(widget : TWidget, name : string) : TRet;
declare function tab_button_set_active_icon(widget : TWidget, name : string) : TRet;
declare function tab_button_t_get_prop_value(nativeObj : any);
declare function tab_button_t_get_prop_active_icon(nativeObj : any);
declare function tab_button_t_get_prop_icon(nativeObj : any);
declare function tab_button_group_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function tab_button_group_set_compact(widget : TWidget, compact : number) : TRet;
declare function tab_button_group_set_scrollable(widget : TWidget, scrollable : number) : TRet;
declare function tab_button_group_cast(widget : TWidget) : TWidget;
declare function tab_button_group_t_get_prop_compact(nativeObj : any);
declare function tab_button_group_t_get_prop_scrollable(nativeObj : any);
declare function list_item_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function list_item_cast(widget : TWidget) : TWidget;
declare function hscroll_label_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function hscroll_label_set_lull(widget : TWidget, lull : number) : TRet;
declare function hscroll_label_set_duration(widget : TWidget, duration : number) : TRet;
declare function hscroll_label_set_only_focus(widget : TWidget, only_focus : number) : TRet;
declare function hscroll_label_set_only_parent_focus(widget : TWidget, only_parent_focus : number) : TRet;
declare function hscroll_label_set_loop(widget : TWidget, loop : number) : TRet;
declare function hscroll_label_set_yoyo(widget : TWidget, yoyo : number) : TRet;
declare function hscroll_label_set_ellipses(widget : TWidget, ellipses : number) : TRet;
declare function hscroll_label_set_xoffset(widget : TWidget, xoffset : number) : TRet;
declare function hscroll_label_start(widget : TWidget) : TRet;
declare function hscroll_label_stop(widget : TWidget) : TRet;
declare function hscroll_label_cast(widget : TWidget) : TWidget;
declare function hscroll_label_t_get_prop_only_focus(nativeObj : any);
declare function hscroll_label_t_get_prop_only_parent_focus(nativeObj : any);
declare function hscroll_label_t_get_prop_loop(nativeObj : any);
declare function hscroll_label_t_get_prop_yoyo(nativeObj : any);
declare function hscroll_label_t_get_prop_ellipses(nativeObj : any);
declare function hscroll_label_t_get_prop_lull(nativeObj : any);
declare function hscroll_label_t_get_prop_duration(nativeObj : any);
declare function hscroll_label_t_get_prop_xoffset(nativeObj : any);
declare function hscroll_label_t_get_prop_text_w(nativeObj : any);
declare function rich_text_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function rich_text_set_text(widget : TWidget, text : string) : TRet;
declare function rich_text_cast(widget : TWidget) : TWidget;
declare function rich_text_t_get_prop_line_gap(nativeObj : any);
declare function progress_circle_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function progress_circle_cast(widget : TWidget) : TWidget;
declare function progress_circle_set_value(widget : TWidget, value : number) : TRet;
declare function progress_circle_set_max(widget : TWidget, max : number) : TRet;
declare function progress_circle_set_line_width(widget : TWidget, line_width : number) : TRet;
declare function progress_circle_set_start_angle(widget : TWidget, start_angle : number) : TRet;
declare function progress_circle_set_unit(widget : TWidget, unit : string) : TRet;
declare function progress_circle_set_show_text(widget : TWidget, show_text : number) : TRet;
declare function progress_circle_set_counter_clock_wise(widget : TWidget, counter_clock_wise : number) : TRet;
declare function progress_circle_t_get_prop_value(nativeObj : any);
declare function progress_circle_t_get_prop_max(nativeObj : any);
declare function progress_circle_t_get_prop_start_angle(nativeObj : any);
declare function progress_circle_t_get_prop_line_width(nativeObj : any);
declare function progress_circle_t_get_prop_unit(nativeObj : any);
declare function progress_circle_t_get_prop_counter_clock_wise(nativeObj : any);
declare function progress_circle_t_get_prop_show_text(nativeObj : any);
declare function slider_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function slider_cast(widget : TWidget) : TWidget;
declare function slider_set_value(widget : TWidget, value : number) : TRet;
declare function slider_set_min(widget : TWidget, min : number) : TRet;
declare function slider_set_max(widget : TWidget, max : number) : TRet;
declare function slider_set_step(widget : TWidget, step : number) : TRet;
declare function slider_set_bar_size(widget : TWidget, bar_size : number) : TRet;
declare function slider_set_vertical(widget : TWidget, vertical : number) : TRet;
declare function slider_t_get_prop_value(nativeObj : any);
declare function slider_t_get_prop_min(nativeObj : any);
declare function slider_t_get_prop_max(nativeObj : any);
declare function slider_t_get_prop_step(nativeObj : any);
declare function slider_t_get_prop_vertical(nativeObj : any);
declare function slider_t_get_prop_bar_size(nativeObj : any);
declare function mledit_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function mledit_set_readonly(widget : TWidget, readonly : number) : TRet;
declare function mledit_set_focus(widget : TWidget, focus : number) : TRet;
declare function mledit_set_wrap_word(widget : TWidget, wrap_word : number) : TRet;
declare function mledit_set_max_lines(widget : TWidget, max_lines : number) : TRet;
declare function mledit_set_input_tips(widget : TWidget, tips : string) : TRet;
declare function mledit_set_cursor(widget : TWidget, cursor : number) : TRet;
declare function mledit_set_scroll_line(widget : TWidget, scroll_line : number) : TRet;
declare function mledit_cast(widget : TWidget) : TWidget;
declare function mledit_t_get_prop_readonly(nativeObj : any);
declare function mledit_t_get_prop_tips(nativeObj : any);
declare function mledit_t_get_prop_wrap_word(nativeObj : any);
declare function mledit_t_get_prop_max_lines(nativeObj : any);
declare function mledit_t_get_prop_scroll_line(nativeObj : any);
declare function row_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function row_cast(widget : TWidget) : TWidget;
declare function progress_bar_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function progress_bar_cast(widget : TWidget) : TWidget;
declare function progress_bar_set_value(widget : TWidget, value : number) : TRet;
declare function progress_bar_set_max(widget : TWidget, max : number) : TRet;
declare function progress_bar_set_vertical(widget : TWidget, vertical : number) : TRet;
declare function progress_bar_set_show_text(widget : TWidget, show_text : number) : TRet;
declare function progress_bar_get_percent(widget : TWidget) : number;
declare function progress_bar_t_get_prop_value(nativeObj : any);
declare function progress_bar_t_get_prop_max(nativeObj : any);
declare function progress_bar_t_get_prop_vertical(nativeObj : any);
declare function progress_bar_t_get_prop_show_text(nativeObj : any);
declare function object_unref(obj : TObject) : TRet;
declare function object_ref(obj : TObject) : TObject;
declare function object_get_type(obj : TObject) : string;
declare function object_get_desc(obj : TObject) : string;
declare function object_get_size(obj : TObject) : number;
declare function object_is_collection(obj : TObject) : number;
declare function object_set_name(obj : TObject, name : string) : TRet;
declare function object_compare(obj : TObject, other : TObject) : number;
declare function object_get_prop(obj : TObject, name : string, v : TValue) : TRet;
declare function object_get_prop_str(obj : TObject, name : string) : string;
declare function object_get_prop_pointer(obj : TObject, name : string) : any;
declare function object_get_prop_object(obj : TObject, name : string) : TObject;
declare function object_get_prop_int(obj : TObject, name : string, defval : number) : number;
declare function object_get_prop_bool(obj : TObject, name : string, defval : number) : number;
declare function object_get_prop_float(obj : TObject, name : string, defval : number) : number;
declare function object_remove_prop(obj : TObject, name : string) : TRet;
declare function object_set_prop(obj : TObject, name : string, value : TValue) : TRet;
declare function object_set_prop_str(obj : TObject, name : string, value : string) : TRet;
declare function object_set_prop_object(obj : TObject, name : string, value : TObject) : TRet;
declare function object_set_prop_int(obj : TObject, name : string, value : number) : TRet;
declare function object_set_prop_bool(obj : TObject, name : string, value : number) : TRet;
declare function object_set_prop_float(obj : TObject, name : string, value : number) : TRet;
declare function object_copy_prop(obj : TObject, src : TObject, name : string) : TRet;
declare function object_foreach_prop(obj : TObject, on_prop : Function, ctx : any) : TRet;
declare function object_has_prop(obj : TObject, name : string) : number;
declare function object_eval(obj : TObject, expr : string, v : TValue) : TRet;
declare function object_can_exec(obj : TObject, name : string, args : string) : number;
declare function object_exec(obj : TObject, name : string, args : string) : TRet;
declare function object_notify_changed(obj : TObject) : TRet;
declare function object_get_prop_str_by_path(obj : TObject, path : string) : string;
declare function object_get_prop_pointer_by_path(obj : TObject, path : string) : any;
declare function object_get_prop_object_by_path(obj : TObject, path : string) : TObject;
declare function object_get_prop_int_by_path(obj : TObject, path : string, defval : number) : number;
declare function object_get_prop_bool_by_path(obj : TObject, path : string, defval : number) : number;
declare function object_get_prop_float_by_path(obj : TObject, path : string, defval : number) : number;
declare function object_t_get_prop_ref_count(nativeObj : any);
declare function object_t_get_prop_name(nativeObj : any);
declare function pages_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function pages_cast(widget : TWidget) : TWidget;
declare function pages_set_active(widget : TWidget, index : number) : TRet;
declare function pages_set_active_by_name(widget : TWidget, name : string) : TRet;
declare function pages_t_get_prop_active(nativeObj : any);
declare function line_number_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function line_number_set_top_margin(widget : TWidget, top_margin : number) : TRet;
declare function line_number_set_bottom_margin(widget : TWidget, bottom_margin : number) : TRet;
declare function line_number_set_line_height(widget : TWidget, line_height : number) : TRet;
declare function line_number_set_yoffset(widget : TWidget, yoffset : number) : TRet;
declare function line_number_cast(widget : TWidget) : TWidget;
declare function overlay_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function overlay_cast(widget : TWidget) : TWidget;
declare function image_value_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function image_value_set_image(widget : TWidget, image : string) : TRet;
declare function image_value_set_format(widget : TWidget, format : string) : TRet;
declare function image_value_set_value(widget : TWidget, value : number) : TRet;
declare function image_value_cast(widget : TWidget) : TWidget;
declare function image_value_t_get_prop_image(nativeObj : any);
declare function image_value_t_get_prop_format(nativeObj : any);
declare function image_value_t_get_prop_value(nativeObj : any);
declare function image_animation_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function image_animation_set_loop(widget : TWidget, loop : number) : TRet;
declare function image_animation_set_image(widget : TWidget, image : string) : TRet;
declare function image_animation_set_interval(widget : TWidget, interval : number) : TRet;
declare function image_animation_set_delay(widget : TWidget, delay : number) : TRet;
declare function image_animation_set_auto_play(widget : TWidget, auto_play : number) : TRet;
declare function image_animation_set_sequence(widget : TWidget, sequence : string) : TRet;
declare function image_animation_set_range_sequence(widget : TWidget, start_index : number, end_index : number) : TRet;
declare function image_animation_play(widget : TWidget) : TRet;
declare function image_animation_stop(widget : TWidget) : TRet;
declare function image_animation_pause(widget : TWidget) : TRet;
declare function image_animation_next(widget : TWidget) : TRet;
declare function image_animation_set_format(widget : TWidget, format : string) : TRet;
declare function image_animation_set_unload_after_paint(widget : TWidget, unload_after_paint : number) : TRet;
declare function image_animation_cast(widget : TWidget) : TWidget;
declare function image_animation_t_get_prop_image(nativeObj : any);
declare function image_animation_t_get_prop_sequence(nativeObj : any);
declare function image_animation_t_get_prop_start_index(nativeObj : any);
declare function image_animation_t_get_prop_end_index(nativeObj : any);
declare function image_animation_t_get_prop_loop(nativeObj : any);
declare function image_animation_t_get_prop_auto_play(nativeObj : any);
declare function image_animation_t_get_prop_unload_after_paint(nativeObj : any);
declare function image_animation_t_get_prop_format(nativeObj : any);
declare function image_animation_t_get_prop_interval(nativeObj : any);
declare function image_animation_t_get_prop_delay(nativeObj : any);
declare function guage_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function guage_cast(widget : TWidget) : TWidget;
declare function guage_set_image(widget : TWidget, name : string) : TRet;
declare function guage_set_draw_type(widget : TWidget, draw_type : TImageDrawType) : TRet;
declare function guage_t_get_prop_image(nativeObj : any);
declare function guage_t_get_prop_draw_type(nativeObj : any);
declare function guage_pointer_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function guage_pointer_cast(widget : TWidget) : TWidget;
declare function guage_pointer_set_angle(widget : TWidget, angle : number) : TRet;
declare function guage_pointer_set_image(widget : TWidget, image : string) : TRet;
declare function guage_pointer_set_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
declare function guage_pointer_t_get_prop_angle(nativeObj : any);
declare function guage_pointer_t_get_prop_image(nativeObj : any);
declare function guage_pointer_t_get_prop_anchor_x(nativeObj : any);
declare function guage_pointer_t_get_prop_anchor_y(nativeObj : any);
declare function label_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function label_set_length(widget : TWidget, length : number) : TRet;
declare function label_resize_to_content(widget : TWidget, min_w : number, max_w : number, min_h : number, max_h : number) : TRet;
declare function label_cast(widget : TWidget) : TWidget;
declare function label_t_get_prop_length(nativeObj : any);
declare function draggable_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function draggable_cast(widget : TWidget) : TWidget;
declare function draggable_set_top(widget : TWidget, top : number) : TRet;
declare function draggable_set_bottom(widget : TWidget, bottom : number) : TRet;
declare function draggable_set_left(widget : TWidget, left : number) : TRet;
declare function draggable_set_right(widget : TWidget, right : number) : TRet;
declare function draggable_set_vertical_only(widget : TWidget, vertical_only : number) : TRet;
declare function draggable_set_horizontal_only(widget : TWidget, horizontal_only : number) : TRet;
declare function draggable_set_drag_window(widget : TWidget, drag_window : number) : TRet;
declare function draggable_t_get_prop_top(nativeObj : any);
declare function draggable_t_get_prop_bottom(nativeObj : any);
declare function draggable_t_get_prop_left(nativeObj : any);
declare function draggable_t_get_prop_right(nativeObj : any);
declare function draggable_t_get_prop_vertical_only(nativeObj : any);
declare function draggable_t_get_prop_horizontal_only(nativeObj : any);
declare function draggable_t_get_prop_drag_window(nativeObj : any);
declare function group_box_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function group_box_cast(widget : TWidget) : TWidget;
declare function color_picker_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function color_picker_set_color(widget : TWidget, color : string) : TRet;
declare function color_picker_cast(widget : TWidget) : TWidget;
declare function color_picker_t_get_prop_value(nativeObj : any);
declare function canvas_widget_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function canvas_widget_cast(widget : TWidget) : TWidget;
declare function grid_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function grid_cast(widget : TWidget) : TWidget;
declare function grid_item_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function grid_item_cast(widget : TWidget) : TWidget;
declare function window_manager() : TWidget;
declare function window_manager_cast(widget : TWidget) : TWidget;
declare function window_manager_get_top_main_window(widget : TWidget) : TWidget;
declare function window_manager_get_top_window(widget : TWidget) : TWidget;
declare function window_manager_get_prev_window(widget : TWidget) : TWidget;
declare function window_manager_get_pointer_x(widget : TWidget) : number;
declare function window_manager_get_pointer_y(widget : TWidget) : number;
declare function window_manager_get_pointer_pressed(widget : TWidget) : number;
declare function window_manager_set_show_fps(widget : TWidget, show_fps : number) : TRet;
declare function window_manager_set_screen_saver_time(widget : TWidget, screen_saver_time : number) : TRet;
declare function window_manager_set_cursor(widget : TWidget, cursor : string) : TRet;
declare function window_manager_back(widget : TWidget) : TRet;
declare function window_manager_back_to_home(widget : TWidget) : TRet;
declare function window_base_cast(widget : TWidget) : TWidget;
declare function window_base_t_get_prop_theme(nativeObj : any);
declare function window_base_t_get_prop_closable(nativeObj : any);
declare function edit_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function edit_cast(widget : TWidget) : TWidget;
declare function edit_get_int(widget : TWidget) : number;
declare function edit_get_double(widget : TWidget) : number;
declare function edit_set_int(widget : TWidget, value : number) : TRet;
declare function edit_set_double(widget : TWidget, value : number) : TRet;
declare function edit_set_text_limit(widget : TWidget, min : number, max : number) : TRet;
declare function edit_set_int_limit(widget : TWidget, min : number, max : number, step : number) : TRet;
declare function edit_set_float_limit(widget : TWidget, min : number, max : number, step : number) : TRet;
declare function edit_set_readonly(widget : TWidget, readonly : number) : TRet;
declare function edit_set_auto_fix(widget : TWidget, auto_fix : number) : TRet;
declare function edit_set_select_none_when_focused(widget : TWidget, select_none_when_focused : number) : TRet;
declare function edit_set_open_im_when_focused(widget : TWidget, open_im_when_focused : number) : TRet;
declare function edit_set_input_type(widget : TWidget, type : TInputType) : TRet;
declare function edit_set_input_tips(widget : TWidget, tips : string) : TRet;
declare function edit_set_password_visible(widget : TWidget, password_visible : number) : TRet;
declare function edit_set_focus(widget : TWidget, focus : number) : TRet;
declare function edit_set_cursor(widget : TWidget, cursor : number) : TRet;
declare function edit_t_get_prop_readonly(nativeObj : any);
declare function edit_t_get_prop_password_visible(nativeObj : any);
declare function edit_t_get_prop_auto_fix(nativeObj : any);
declare function edit_t_get_prop_select_none_when_focused(nativeObj : any);
declare function edit_t_get_prop_open_im_when_focused(nativeObj : any);
declare function edit_t_get_prop_tips(nativeObj : any);
declare function edit_t_get_prop_input_type(nativeObj : any);
declare function edit_t_get_prop_min(nativeObj : any);
declare function edit_t_get_prop_max(nativeObj : any);
declare function edit_t_get_prop_step(nativeObj : any);
declare function style_mutable_set_name(s : TStyle, name : string) : TRet;
declare function style_mutable_set_int(s : TStyle, state : string, name : string, val : number) : TRet;
declare function style_mutable_cast(s : TStyle) : TStyle;
declare function style_mutable_create(widget : TWidget, default_style : TStyle) : TStyle;
declare function style_mutable_t_get_prop_name(nativeObj : any);
declare function dragger_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function dragger_cast(widget : TWidget) : TWidget;
declare function dragger_set_range(widget : TWidget, x_min : number, y_min : number, x_max : number, y_max : number) : TWidget;
declare function dragger_t_get_prop_x_min(nativeObj : any);
declare function dragger_t_get_prop_y_min(nativeObj : any);
declare function dragger_t_get_prop_x_max(nativeObj : any);
declare function dragger_t_get_prop_y_max(nativeObj : any);
declare function image_base_set_image(widget : TWidget, name : string) : TRet;
declare function image_base_set_rotation(widget : TWidget, rotation : number) : TRet;
declare function image_base_set_scale(widget : TWidget, scale_x : number, scale_y : number) : TRet;
declare function image_base_set_anchor(widget : TWidget, anchor_x : number, anchor_y : number) : TRet;
declare function image_base_set_selected(widget : TWidget, selected : number) : TRet;
declare function image_base_set_selectable(widget : TWidget, selectable : number) : TRet;
declare function image_base_set_clickable(widget : TWidget, clickable : number) : TRet;
declare function image_base_cast(widget : TWidget) : TWidget;
declare function image_base_t_get_prop_image(nativeObj : any);
declare function image_base_t_get_prop_anchor_x(nativeObj : any);
declare function image_base_t_get_prop_anchor_y(nativeObj : any);
declare function image_base_t_get_prop_scale_x(nativeObj : any);
declare function image_base_t_get_prop_scale_y(nativeObj : any);
declare function image_base_t_get_prop_rotation(nativeObj : any);
declare function image_base_t_get_prop_clickable(nativeObj : any);
declare function image_base_t_get_prop_selectable(nativeObj : any);
declare function image_base_t_get_prop_selected(nativeObj : any);
declare function window_event_cast(event : TEvent) : TWindowEvent;
declare function window_event_t_get_prop_window(nativeObj : any);
declare function paint_event_cast(event : TEvent) : TPaintEvent;
declare function paint_event_t_get_prop_c(nativeObj : any);
declare function key_event_cast(event : TEvent) : TKeyEvent;
declare function key_event_t_get_prop_key(nativeObj : any);
declare function key_event_t_get_prop_alt(nativeObj : any);
declare function key_event_t_get_prop_lalt(nativeObj : any);
declare function key_event_t_get_prop_ralt(nativeObj : any);
declare function key_event_t_get_prop_ctrl(nativeObj : any);
declare function key_event_t_get_prop_lctrl(nativeObj : any);
declare function key_event_t_get_prop_rctrl(nativeObj : any);
declare function key_event_t_get_prop_shift(nativeObj : any);
declare function key_event_t_get_prop_lshift(nativeObj : any);
declare function key_event_t_get_prop_rshift(nativeObj : any);
declare function key_event_t_get_prop_cmd(nativeObj : any);
declare function key_event_t_get_prop_menu(nativeObj : any);
declare function key_event_t_get_prop_capslock(nativeObj : any);
declare function pointer_event_cast(event : TEvent) : TPointerEvent;
declare function pointer_event_t_get_prop_x(nativeObj : any);
declare function pointer_event_t_get_prop_y(nativeObj : any);
declare function pointer_event_t_get_prop_button(nativeObj : any);
declare function pointer_event_t_get_prop_pressed(nativeObj : any);
declare function pointer_event_t_get_prop_alt(nativeObj : any);
declare function pointer_event_t_get_prop_ctrl(nativeObj : any);
declare function pointer_event_t_get_prop_cmd(nativeObj : any);
declare function pointer_event_t_get_prop_menu(nativeObj : any);
declare function pointer_event_t_get_prop_shift(nativeObj : any);
declare function orientation_event_cast(event : TEvent) : TOrientationEvent;
declare function orientation_event_t_get_prop_orientation(nativeObj : any);
declare function wheel_event_cast(event : TEvent) : TWheelEvent;
declare function wheel_event_t_get_prop_dy(nativeObj : any);
declare function wheel_event_t_get_prop_alt(nativeObj : any);
declare function wheel_event_t_get_prop_ctrl(nativeObj : any);
declare function wheel_event_t_get_prop_shift(nativeObj : any);
declare function app_bar_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function app_bar_cast(widget : TWidget) : TWidget;
declare function button_group_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function button_group_cast(widget : TWidget) : TWidget;
declare function button_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function button_cast(widget : TWidget) : TWidget;
declare function button_set_repeat(widget : TWidget, repeat : number) : TRet;
declare function button_set_enable_long_press(widget : TWidget, enable_long_press : number) : TRet;
declare function button_t_get_prop_repeat(nativeObj : any);
declare function button_t_get_prop_enable_long_press(nativeObj : any);
declare function digit_clock_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function digit_clock_cast(widget : TWidget) : TWidget;
declare function digit_clock_set_format(widget : TWidget, format : string) : TRet;
declare function digit_clock_t_get_prop_format(nativeObj : any);
declare function check_button_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function check_button_create_radio(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function check_button_set_value(widget : TWidget, value : number) : TRet;
declare function check_button_cast(widget : TWidget) : TWidget;
declare function check_button_t_get_prop_value(nativeObj : any);
declare function color_tile_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function color_tile_cast(widget : TWidget) : TWidget;
declare function color_tile_set_bg_color(widget : TWidget, color : string) : TRet;
declare function color_tile_t_get_prop_bg_color(nativeObj : any);
declare function color_tile_t_get_prop_border_color(nativeObj : any);
declare function column_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function column_cast(widget : TWidget) : TWidget;
declare function combo_box_item_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function combo_box_item_cast(widget : TWidget) : TWidget;
declare function combo_box_item_set_checked(widget : TWidget, checked : number) : TRet;
declare function combo_box_item_set_value(widget : TWidget, value : number) : TRet;
declare function combo_box_item_t_get_prop_value(nativeObj : any);
declare function combo_box_item_t_get_prop_checked(nativeObj : any);
declare function combo_box_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function combo_box_cast(widget : TWidget) : TWidget;
declare function combo_box_set_open_window(widget : TWidget, open_window : string) : TRet;
declare function combo_box_reset_options(widget : TWidget) : TRet;
declare function combo_box_count_options(widget : TWidget) : number;
declare function combo_box_set_selected_index(widget : TWidget, index : number) : TRet;
declare function combo_box_set_localize_options(widget : TWidget, localize_options : number) : TRet;
declare function combo_box_set_value(widget : TWidget, value : number) : TRet;
declare function combo_box_set_item_height(widget : TWidget, item_height : number) : TRet;
declare function combo_box_append_option(widget : TWidget, value : number, text : string) : TRet;
declare function combo_box_set_options(widget : TWidget, options : string) : TRet;
declare function combo_box_get_value(widget : TWidget) : number;
declare function combo_box_get_text(widget : TWidget) : string;
declare function combo_box_t_get_prop_open_window(nativeObj : any);
declare function combo_box_t_get_prop_selected_index(nativeObj : any);
declare function combo_box_t_get_prop_value(nativeObj : any);
declare function combo_box_t_get_prop_localize_options(nativeObj : any);
declare function combo_box_t_get_prop_options(nativeObj : any);
declare function combo_box_t_get_prop_item_height(nativeObj : any);
declare function dialog_client_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function dialog_client_cast(widget : TWidget) : TWidget;
declare function dialog_title_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function dialog_title_cast(widget : TWidget) : TWidget;
declare function object_default_create() : TObject;
declare function object_default_unref(obj : TObject) : TRet;
declare function object_default_clear_props(obj : TObject) : TRet;
declare function object_default_t_get_prop_props_size(nativeObj : any);
declare function window_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function window_set_fullscreen(widget : TWidget, fullscreen : number) : TRet;
declare function window_open(name : string) : TWidget;
declare function window_open_and_close(name : string, to_close : TWidget) : TWidget;
declare function window_close(widget : TWidget) : TRet;
declare function window_close_force(widget : TWidget) : TRet;
declare function window_cast(widget : TWidget) : TWidget;
declare function window_t_get_prop_fullscreen(nativeObj : any);
declare function timer_info_cast(timer : TTimerInfo) : TTimerInfo;
declare function timer_info_t_get_prop_ctx(nativeObj : any);
declare function timer_info_t_get_prop_id(nativeObj : any);
declare function timer_info_t_get_prop_now(nativeObj : any);
declare function combo_box_ex_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function image_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function image_set_draw_type(widget : TWidget, draw_type : TImageDrawType) : TRet;
declare function image_cast(widget : TWidget) : TWidget;
declare function image_t_get_prop_draw_type(nativeObj : any);
declare function gif_image_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function gif_image_cast(widget : TWidget) : TWidget;
declare function keyboard_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function keyboard_cast(widget : TWidget) : TWidget;
declare function popup_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function popup_cast(widget : TWidget) : TWidget;
declare function popup_set_close_when_click(widget : TWidget, close_when_click : number) : TRet;
declare function popup_set_close_when_click_outside(widget : TWidget, close_when_click_outside : number) : TRet;
declare function popup_t_get_prop_close_when_click(nativeObj : any);
declare function popup_t_get_prop_close_when_click_outside(nativeObj : any);
declare function object_array_create() : TObject;
declare function object_array_unref(obj : TObject) : TRet;
declare function object_array_clear_props(obj : TObject) : TRet;
declare function object_array_t_get_prop_props_size(nativeObj : any);
declare function spin_box_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function spin_box_cast(widget : TWidget) : TWidget;
declare function system_bar_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function system_bar_cast(widget : TWidget) : TWidget;
declare function idle_info_cast(idle : TIdleInfo) : TIdleInfo;
declare function idle_info_t_get_prop_ctx(nativeObj : any);
declare function idle_info_t_get_prop_id(nativeObj : any);
declare function svg_image_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function svg_image_set_image(widget : TWidget, name : string) : TRet;
declare function svg_image_cast(widget : TWidget) : TWidget;
declare function dialog_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function dialog_create_simple(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
declare function dialog_cast(widget : TWidget) : TWidget;
declare function dialog_get_title(widget : TWidget) : TWidget;
declare function dialog_get_client(widget : TWidget) : TWidget;
declare function dialog_open(name : string) : TWidget;
declare function dialog_set_title(widget : TWidget, title : string) : TRet;
declare function dialog_modal(widget : TWidget) : TRet;
declare function dialog_quit(widget : TWidget, code : number) : TRet;
declare function dialog_is_quited(widget : TWidget) : number;
declare function dialog_is_modal(widget : TWidget) : number;
declare function dialog_toast(text : string, duration : number) : TRet;
declare function dialog_info(title : string, text : string) : TRet;
declare function dialog_warn(title : string, text : string) : TRet;
declare function dialog_confirm(title : string, text : string) : TRet;
declare function dialog_t_get_prop_highlight(nativeObj : any);
class TGlobal {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static quit() : TRet  {
    return tk_quit();
  }
  
  static getPointerX() : number  {
    return tk_get_pointer_x();
  }
  
  static getPointerY() : number  {
    return tk_get_pointer_y();
  }
  
  static isPointerPressed() : number  {
    return tk_is_pointer_pressed();
  }
  
}

class TBitmap {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static create() : TBitmap  {
    return new TBitmap(bitmap_create());
  }
  
  static createEx(w : number, h : number, line_length : number, format : TBitmapFormat) : TBitmap  {
    return new TBitmap(bitmap_create_ex(w, h, line_length, format));
  }
  
  getBpp() : number  {
    return bitmap_get_bpp(this.nativeObj);
  }
  
  destroy() : TRet  {
    return bitmap_destroy(this.nativeObj);
  }
  
  get w() : number {
    return bitmap_t_get_prop_w(this.nativeObj);
  }
  
  get h() : number {
    return bitmap_t_get_prop_h(this.nativeObj);
  }
  
  get lineLength() : number {
    return bitmap_t_get_prop_line_length(this.nativeObj);
  }
  
  get flags() : number {
    return bitmap_t_get_prop_flags(this.nativeObj);
  }
  
  get format() : number {
    return bitmap_t_get_prop_format(this.nativeObj);
  }
  
  get name() : string {
    return bitmap_t_get_prop_name(this.nativeObj);
  }
  
}

enum TImageDrawType {
  DEFAULT = IMAGE_DRAW_DEFAULT(),
  CENTER = IMAGE_DRAW_CENTER(),
  ICON = IMAGE_DRAW_ICON(),
  SCALE = IMAGE_DRAW_SCALE(),
  SCALE_AUTO = IMAGE_DRAW_SCALE_AUTO(),
  SCALE_DOWN = IMAGE_DRAW_SCALE_DOWN(),
  SCALE_W = IMAGE_DRAW_SCALE_W(),
  SCALE_H = IMAGE_DRAW_SCALE_H(),
  REPEAT = IMAGE_DRAW_REPEAT(),
  REPEAT_X = IMAGE_DRAW_REPEAT_X(),
  REPEAT_Y = IMAGE_DRAW_REPEAT_Y(),
  REPEAT_Y_INVERSE = IMAGE_DRAW_REPEAT_Y_INVERSE(),
  PATCH9 = IMAGE_DRAW_PATCH9(),
  PATCH3_X = IMAGE_DRAW_PATCH3_X(),
  PATCH3_Y = IMAGE_DRAW_PATCH3_Y(),
  PATCH3_X_SCALE_Y = IMAGE_DRAW_PATCH3_X_SCALE_Y(),
  PATCH3_Y_SCALE_X = IMAGE_DRAW_PATCH3_Y_SCALE_X(),
};

class TCanvas {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  getWidth() : number  {
    return canvas_get_width(this.nativeObj);
  }
  
  getHeight() : number  {
    return canvas_get_height(this.nativeObj);
  }
  
  getClipRect(r : TRect) : TRet  {
    return canvas_get_clip_rect(this.nativeObj, r != null ? (r.nativeObj || r) : null);
  }
  
  setClipRect(r : TRect) : TRet  {
    return canvas_set_clip_rect(this.nativeObj, r != null ? (r.nativeObj || r) : null);
  }
  
  setClipRectEx(r : TRect, translate : number) : TRet  {
    return canvas_set_clip_rect_ex(this.nativeObj, r != null ? (r.nativeObj || r) : null, translate);
  }
  
  setFillColor(color : string) : TRet  {
    return canvas_set_fill_color_str(this.nativeObj, color);
  }
  
  setTextColor(color : string) : TRet  {
    return canvas_set_text_color_str(this.nativeObj, color);
  }
  
  setStrokeColor(color : string) : TRet  {
    return canvas_set_stroke_color_str(this.nativeObj, color);
  }
  
  setGlobalAlpha(alpha : number) : TRet  {
    return canvas_set_global_alpha(this.nativeObj, alpha);
  }
  
  translate(dx : number, dy : number) : TRet  {
    return canvas_translate(this.nativeObj, dx, dy);
  }
  
  untranslate(dx : number, dy : number) : TRet  {
    return canvas_untranslate(this.nativeObj, dx, dy);
  }
  
  drawVline(x : number, y : number, h : number) : TRet  {
    return canvas_draw_vline(this.nativeObj, x, y, h);
  }
  
  drawHline(x : number, y : number, w : number) : TRet  {
    return canvas_draw_hline(this.nativeObj, x, y, w);
  }
  
  fillRect(x : number, y : number, w : number, h : number) : TRet  {
    return canvas_fill_rect(this.nativeObj, x, y, w, h);
  }
  
  strokeRect(x : number, y : number, w : number, h : number) : TRet  {
    return canvas_stroke_rect(this.nativeObj, x, y, w, h);
  }
  
  setFont(name : string, size : number) : TRet  {
    return canvas_set_font(this.nativeObj, name, size);
  }
  
  measureText(str : string) : number  {
    return canvas_measure_utf8(this.nativeObj, str);
  }
  
  drawText(str : string, x : number, y : number) : TRet  {
    return canvas_draw_utf8(this.nativeObj, str, x, y);
  }
  
  drawTextInRect(str : string, r : TRect) : TRet  {
    return canvas_draw_utf8_in_rect(this.nativeObj, str, r != null ? (r.nativeObj || r) : null);
  }
  
  drawIcon(img : TBitmap, cx : number, cy : number) : TRet  {
    return canvas_draw_icon(this.nativeObj, img != null ? (img.nativeObj || img) : null, cx, cy);
  }
  
  drawImage(img : TBitmap, src : TRect, dst : TRect) : TRet  {
    return canvas_draw_image(this.nativeObj, img != null ? (img.nativeObj || img) : null, src != null ? (src.nativeObj || src) : null, dst != null ? (dst.nativeObj || dst) : null);
  }
  
  drawImageEx(img : TBitmap, draw_type : TImageDrawType, dst : TRect) : TRet  {
    return canvas_draw_image_ex(this.nativeObj, img != null ? (img.nativeObj || img) : null, draw_type, dst != null ? (dst.nativeObj || dst) : null);
  }
  
  getVgcanvas() : TVgcanvas  {
    return new TVgcanvas(canvas_get_vgcanvas(this.nativeObj));
  }
  
  static cast(c : TCanvas) : TCanvas  {
    return new TCanvas(canvas_cast(c != null ? (c.nativeObj || c) : null));
  }
  
  reset() : TRet  {
    return canvas_reset(this.nativeObj);
  }
  
  get ox() : number {
    return canvas_t_get_prop_ox(this.nativeObj);
  }
  
  get oy() : number {
    return canvas_t_get_prop_oy(this.nativeObj);
  }
  
  get fontName() : string {
    return canvas_t_get_prop_font_name(this.nativeObj);
  }
  
  get fontSize() : number {
    return canvas_t_get_prop_font_size(this.nativeObj);
  }
  
  get globalAlpha() : number {
    return canvas_t_get_prop_global_alpha(this.nativeObj);
  }
  
}

enum TClipBoardDataType {
  NONE = CLIP_BOARD_DATA_TYPE_NONE(),
  TEXT = CLIP_BOARD_DATA_TYPE_TEXT(),
};

class TClipBoard {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static setText(text : string) : TRet  {
    return clip_board_set_text(text);
  }
  
  static getText() : string  {
    return clip_board_get_text();
  }
  
}

enum TDialogQuitCode {
  NONE = DIALOG_QUIT_NONE(),
  OK = DIALOG_QUIT_OK(),
  YES = DIALOG_QUIT_YES(),
  CANCEL = DIALOG_QUIT_CANCEL(),
  NO = DIALOG_QUIT_NO(),
  OTHER = DIALOG_QUIT_OTHER(),
};

enum TEventType {
  POINTER_DOWN = EVT_POINTER_DOWN(),
  POINTER_DOWN_BEFORE_CHILDREN = EVT_POINTER_DOWN_BEFORE_CHILDREN(),
  POINTER_MOVE = EVT_POINTER_MOVE(),
  POINTER_MOVE_BEFORE_CHILDREN = EVT_POINTER_MOVE_BEFORE_CHILDREN(),
  POINTER_UP = EVT_POINTER_UP(),
  POINTER_UP_BEFORE_CHILDREN = EVT_POINTER_UP_BEFORE_CHILDREN(),
  WHEEL = EVT_WHEEL(),
  WHEEL_BEFORE_CHILDREN = EVT_WHEEL_BEFORE_CHILDREN(),
  POINTER_DOWN_ABORT = EVT_POINTER_DOWN_ABORT(),
  CONTEXT_MENU = EVT_CONTEXT_MENU(),
  POINTER_ENTER = EVT_POINTER_ENTER(),
  POINTER_LEAVE = EVT_POINTER_LEAVE(),
  LONG_PRESS = EVT_LONG_PRESS(),
  CLICK = EVT_CLICK(),
  FOCUS = EVT_FOCUS(),
  BLUR = EVT_BLUR(),
  KEY_DOWN = EVT_KEY_DOWN(),
  KEY_DOWN_BEFORE_CHILDREN = EVT_KEY_DOWN_BEFORE_CHILDREN(),
  KEY_REPEAT = EVT_KEY_REPEAT(),
  KEY_UP = EVT_KEY_UP(),
  KEY_UP_BEFORE_CHILDREN = EVT_KEY_UP_BEFORE_CHILDREN(),
  WILL_MOVE = EVT_WILL_MOVE(),
  MOVE = EVT_MOVE(),
  WILL_RESIZE = EVT_WILL_RESIZE(),
  RESIZE = EVT_RESIZE(),
  WILL_MOVE_RESIZE = EVT_WILL_MOVE_RESIZE(),
  MOVE_RESIZE = EVT_MOVE_RESIZE(),
  VALUE_WILL_CHANGE = EVT_VALUE_WILL_CHANGE(),
  VALUE_CHANGED = EVT_VALUE_CHANGED(),
  VALUE_CHANGING = EVT_VALUE_CHANGING(),
  PAINT = EVT_PAINT(),
  BEFORE_PAINT = EVT_BEFORE_PAINT(),
  AFTER_PAINT = EVT_AFTER_PAINT(),
  PAINT_DONE = EVT_PAINT_DONE(),
  LOCALE_CHANGED = EVT_LOCALE_CHANGED(),
  ANIM_START = EVT_ANIM_START(),
  ANIM_STOP = EVT_ANIM_STOP(),
  ANIM_PAUSE = EVT_ANIM_PAUSE(),
  ANIM_ONCE = EVT_ANIM_ONCE(),
  ANIM_END = EVT_ANIM_END(),
  WINDOW_LOAD = EVT_WINDOW_LOAD(),
  WINDOW_WILL_OPEN = EVT_WINDOW_WILL_OPEN(),
  WINDOW_OPEN = EVT_WINDOW_OPEN(),
  WINDOW_TO_BACKGROUND = EVT_WINDOW_TO_BACKGROUND(),
  WINDOW_TO_FOREGROUND = EVT_WINDOW_TO_FOREGROUND(),
  WINDOW_CLOSE = EVT_WINDOW_CLOSE(),
  REQUEST_CLOSE_WINDOW = EVT_REQUEST_CLOSE_WINDOW(),
  TOP_WINDOW_CHANGED = EVT_TOP_WINDOW_CHANGED(),
  IM_COMMIT = EVT_IM_COMMIT(),
  IM_SHOW_CANDIDATES = EVT_IM_SHOW_CANDIDATES(),
  IM_ACTION = EVT_IM_ACTION(),
  IM_ACTION_INFO = EVT_IM_ACTION_INFO(),
  DRAG_START = EVT_DRAG_START(),
  DRAG = EVT_DRAG(),
  DRAG_END = EVT_DRAG_END(),
  SCREEN_SAVER = EVT_SCREEN_SAVER(),
  LOW_MEMORY = EVT_LOW_MEMORY(),
  OUT_OF_MEMORY = EVT_OUT_OF_MEMORY(),
  ORIENTATION_WILL_CHANGED = EVT_ORIENTATION_WILL_CHANGED(),
  ORIENTATION_CHANGED = EVT_ORIENTATION_CHANGED(),
  WIDGET_CREATED = EVT_WIDGET_CREATED(),
  REQUEST_QUIT_APP = EVT_REQUEST_QUIT_APP(),
  THEME_CHANGED = EVT_THEME_CHANGED(),
  REQ_START = EVT_REQ_START(),
  USER_START = EVT_USER_START(),
};

class TFontManager {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  unloadFont(name : string, size : number) : TRet  {
    return font_manager_unload_font(this.nativeObj, name, size);
  }
  
  unloadAll() : TRet  {
    return font_manager_unload_all(this.nativeObj);
  }
  
}

enum TGlyphFormat {
  ALPHA = GLYPH_FMT_ALPHA(),
  MONO = GLYPH_FMT_MONO(),
  RGBA = GLYPH_FMT_RGBA(),
};

class TIdle {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static add(on_idle : Function, ctx : any) : number  {
    return idle_add(on_idle, ctx);
  }
  
  static remove(idle_id : number) : TRet  {
    return idle_remove(idle_id);
  }
  
}

class TValue {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  setBool(value : number) : TValue  {
    return new TValue(value_set_bool(this.nativeObj, value));
  }
  
  bool() : number  {
    return value_bool(this.nativeObj);
  }
  
  setInt8(value : number) : TValue  {
    return new TValue(value_set_int8(this.nativeObj, value));
  }
  
  int8() : number  {
    return value_int8(this.nativeObj);
  }
  
  setUint8(value : number) : TValue  {
    return new TValue(value_set_uint8(this.nativeObj, value));
  }
  
  uint8() : number  {
    return value_uint8(this.nativeObj);
  }
  
  setInt16(value : number) : TValue  {
    return new TValue(value_set_int16(this.nativeObj, value));
  }
  
  int16() : number  {
    return value_int16(this.nativeObj);
  }
  
  setUint16(value : number) : TValue  {
    return new TValue(value_set_uint16(this.nativeObj, value));
  }
  
  uint16() : number  {
    return value_uint16(this.nativeObj);
  }
  
  setInt32(value : number) : TValue  {
    return new TValue(value_set_int32(this.nativeObj, value));
  }
  
  int32() : number  {
    return value_int32(this.nativeObj);
  }
  
  setUint32(value : number) : TValue  {
    return new TValue(value_set_uint32(this.nativeObj, value));
  }
  
  setInt64(value : number) : TValue  {
    return new TValue(value_set_int64(this.nativeObj, value));
  }
  
  int64() : number  {
    return value_int64(this.nativeObj);
  }
  
  setUint64(value : number) : TValue  {
    return new TValue(value_set_uint64(this.nativeObj, value));
  }
  
  uint64() : number  {
    return value_uint64(this.nativeObj);
  }
  
  setFloat(value : number) : TValue  {
    return new TValue(value_set_float(this.nativeObj, value));
  }
  
  float32() : number  {
    return value_float32(this.nativeObj);
  }
  
  setFloat64(value : number) : TValue  {
    return new TValue(value_set_double(this.nativeObj, value));
  }
  
  float64() : number  {
    return value_double(this.nativeObj);
  }
  
  setStr(value : string) : TValue  {
    return new TValue(value_dup_str(this.nativeObj, value));
  }
  
  str() : string  {
    return value_str(this.nativeObj);
  }
  
  isNull() : number  {
    return value_is_null(this.nativeObj);
  }
  
  setInt(value : number) : TValue  {
    return new TValue(value_set_int(this.nativeObj, value));
  }
  
  setObject(value : TObject) : TValue  {
    return new TValue(value_set_object(this.nativeObj, value != null ? (value.nativeObj || value) : null));
  }
  
  object() : TObject  {
    return new TObject(value_object(this.nativeObj));
  }
  
  setToken(value : number) : TValue  {
    return new TValue(value_set_token(this.nativeObj, value));
  }
  
  token() : number  {
    return value_token(this.nativeObj);
  }
  
  static create() : TValue  {
    return new TValue(value_create());
  }
  
  destroy() : TRet  {
    return value_destroy(this.nativeObj);
  }
  
  reset() : TRet  {
    return value_reset(this.nativeObj);
  }
  
  static cast(value : TValue) : TValue  {
    return new TValue(value_cast(value != null ? (value.nativeObj || value) : null));
  }
  
}

class TImageManager {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static instance() : TImageManager  {
    return new TImageManager(image_manager());
  }
  
  getBitmap(name : string, image : TBitmap) : TRet  {
    return image_manager_get_bitmap(this.nativeObj, name, image != null ? (image.nativeObj || image) : null);
  }
  
}

enum TInputType {
  TEXT = INPUT_TEXT(),
  INT = INPUT_INT(),
  UINT = INPUT_UINT(),
  HEX = INPUT_HEX(),
  FLOAT = INPUT_FLOAT(),
  UFLOAT = INPUT_UFLOAT(),
  EMAIL = INPUT_EMAIL(),
  PASSWORD = INPUT_PASSWORD(),
  PHONE = INPUT_PHONE(),
  CUSTOM = INPUT_CUSTOM(),
};

enum TValueType {
  INVALID = VALUE_TYPE_INVALID(),
  BOOL = VALUE_TYPE_BOOL(),
  INT8 = VALUE_TYPE_INT8(),
  UINT8 = VALUE_TYPE_UINT8(),
  INT16 = VALUE_TYPE_INT16(),
  UINT16 = VALUE_TYPE_UINT16(),
  INT32 = VALUE_TYPE_INT32(),
  UINT32 = VALUE_TYPE_UINT32(),
  INT64 = VALUE_TYPE_INT64(),
  UINT64 = VALUE_TYPE_UINT64(),
  POINTER = VALUE_TYPE_POINTER(),
  FLOAT = VALUE_TYPE_FLOAT(),
  FLOAT32 = VALUE_TYPE_FLOAT32(),
  DOUBLE = VALUE_TYPE_DOUBLE(),
  STRING = VALUE_TYPE_STRING(),
  WSTRING = VALUE_TYPE_WSTRING(),
  OBJECT = VALUE_TYPE_OBJECT(),
  SIZED_STRING = VALUE_TYPE_SIZED_STRING(),
  BINARY = VALUE_TYPE_BINARY(),
  UBJSON = VALUE_TYPE_UBJSON(),
  TOKEN = VALUE_TYPE_TOKEN(),
};

class TInputMethod {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  commitText(text : string) : TRet  {
    return input_method_commit_text(this.nativeObj, text);
  }
  
  dispatchKey(key : number) : TRet  {
    return input_method_dispatch_key(this.nativeObj, key);
  }
  
  static instance() : TInputMethod  {
    return new TInputMethod(input_method());
  }
  
}

enum TKeyCode {
  KEY_RETURN = TK_KEY_RETURN(),
  KEY_ESCAPE = TK_KEY_ESCAPE(),
  KEY_BACKSPACE = TK_KEY_BACKSPACE(),
  KEY_TAB = TK_KEY_TAB(),
  KEY_SPACE = TK_KEY_SPACE(),
  KEY_EXCLAIM = TK_KEY_EXCLAIM(),
  KEY_QUOTEDBL = TK_KEY_QUOTEDBL(),
  KEY_HASH = TK_KEY_HASH(),
  KEY_PERCENT = TK_KEY_PERCENT(),
  KEY_DOLLAR = TK_KEY_DOLLAR(),
  KEY_AMPERSAND = TK_KEY_AMPERSAND(),
  KEY_QUOTE = TK_KEY_QUOTE(),
  KEY_LEFTPAREN = TK_KEY_LEFTPAREN(),
  KEY_RIGHTPAREN = TK_KEY_RIGHTPAREN(),
  KEY_ASTERISK = TK_KEY_ASTERISK(),
  KEY_PLUS = TK_KEY_PLUS(),
  KEY_COMMA = TK_KEY_COMMA(),
  KEY_MINUS = TK_KEY_MINUS(),
  KEY_PERIOD = TK_KEY_PERIOD(),
  KEY_SLASH = TK_KEY_SLASH(),
  KEY_0 = TK_KEY_0(),
  KEY_1 = TK_KEY_1(),
  KEY_2 = TK_KEY_2(),
  KEY_3 = TK_KEY_3(),
  KEY_4 = TK_KEY_4(),
  KEY_5 = TK_KEY_5(),
  KEY_6 = TK_KEY_6(),
  KEY_7 = TK_KEY_7(),
  KEY_8 = TK_KEY_8(),
  KEY_9 = TK_KEY_9(),
  KEY_COLON = TK_KEY_COLON(),
  KEY_SEMICOLON = TK_KEY_SEMICOLON(),
  KEY_LESS = TK_KEY_LESS(),
  KEY_EQUAL = TK_KEY_EQUAL(),
  KEY_GREATER = TK_KEY_GREATER(),
  KEY_QUESTION = TK_KEY_QUESTION(),
  KEY_AT = TK_KEY_AT(),
  KEY_LEFTBRACKET = TK_KEY_LEFTBRACKET(),
  KEY_BACKSLASH = TK_KEY_BACKSLASH(),
  KEY_RIGHTBRACKET = TK_KEY_RIGHTBRACKET(),
  KEY_CARET = TK_KEY_CARET(),
  KEY_UNDERSCORE = TK_KEY_UNDERSCORE(),
  KEY_BACKQUOTE = TK_KEY_BACKQUOTE(),
  KEY_a = TK_KEY_a(),
  KEY_b = TK_KEY_b(),
  KEY_c = TK_KEY_c(),
  KEY_d = TK_KEY_d(),
  KEY_e = TK_KEY_e(),
  KEY_f = TK_KEY_f(),
  KEY_g = TK_KEY_g(),
  KEY_h = TK_KEY_h(),
  KEY_i = TK_KEY_i(),
  KEY_j = TK_KEY_j(),
  KEY_k = TK_KEY_k(),
  KEY_l = TK_KEY_l(),
  KEY_m = TK_KEY_m(),
  KEY_n = TK_KEY_n(),
  KEY_o = TK_KEY_o(),
  KEY_p = TK_KEY_p(),
  KEY_q = TK_KEY_q(),
  KEY_r = TK_KEY_r(),
  KEY_s = TK_KEY_s(),
  KEY_t = TK_KEY_t(),
  KEY_u = TK_KEY_u(),
  KEY_v = TK_KEY_v(),
  KEY_w = TK_KEY_w(),
  KEY_x = TK_KEY_x(),
  KEY_y = TK_KEY_y(),
  KEY_z = TK_KEY_z(),
  KEY_A = TK_KEY_A(),
  KEY_B = TK_KEY_B(),
  KEY_C = TK_KEY_C(),
  KEY_D = TK_KEY_D(),
  KEY_E = TK_KEY_E(),
  KEY_F = TK_KEY_F(),
  KEY_G = TK_KEY_G(),
  KEY_H = TK_KEY_H(),
  KEY_I = TK_KEY_I(),
  KEY_J = TK_KEY_J(),
  KEY_K = TK_KEY_K(),
  KEY_L = TK_KEY_L(),
  KEY_M = TK_KEY_M(),
  KEY_N = TK_KEY_N(),
  KEY_O = TK_KEY_O(),
  KEY_P = TK_KEY_P(),
  KEY_Q = TK_KEY_Q(),
  KEY_R = TK_KEY_R(),
  KEY_S = TK_KEY_S(),
  KEY_T = TK_KEY_T(),
  KEY_U = TK_KEY_U(),
  KEY_V = TK_KEY_V(),
  KEY_W = TK_KEY_W(),
  KEY_X = TK_KEY_X(),
  KEY_Y = TK_KEY_Y(),
  KEY_Z = TK_KEY_Z(),
  KEY_DOT = TK_KEY_DOT(),
  KEY_DELETE = TK_KEY_DELETE(),
  KEY_LEFTBRACE = TK_KEY_LEFTBRACE(),
  KEY_RIGHTBRACE = TK_KEY_RIGHTBRACE(),
  KEY_LSHIFT = TK_KEY_LSHIFT(),
  KEY_RSHIFT = TK_KEY_RSHIFT(),
  KEY_LCTRL = TK_KEY_LCTRL(),
  KEY_RCTRL = TK_KEY_RCTRL(),
  KEY_LALT = TK_KEY_LALT(),
  KEY_RALT = TK_KEY_RALT(),
  KEY_CAPSLOCK = TK_KEY_CAPSLOCK(),
  KEY_HOME = TK_KEY_HOME(),
  KEY_END = TK_KEY_END(),
  KEY_INSERT = TK_KEY_INSERT(),
  KEY_UP = TK_KEY_UP(),
  KEY_DOWN = TK_KEY_DOWN(),
  KEY_LEFT = TK_KEY_LEFT(),
  KEY_RIGHT = TK_KEY_RIGHT(),
  KEY_PAGEUP = TK_KEY_PAGEUP(),
  KEY_PAGEDOWN = TK_KEY_PAGEDOWN(),
  KEY_F1 = TK_KEY_F1(),
  KEY_F2 = TK_KEY_F2(),
  KEY_F3 = TK_KEY_F3(),
  KEY_F4 = TK_KEY_F4(),
  KEY_F5 = TK_KEY_F5(),
  KEY_F6 = TK_KEY_F6(),
  KEY_F7 = TK_KEY_F7(),
  KEY_F8 = TK_KEY_F8(),
  KEY_F9 = TK_KEY_F9(),
  KEY_F10 = TK_KEY_F10(),
  KEY_F11 = TK_KEY_F11(),
  KEY_F12 = TK_KEY_F12(),
  KEY_MENU = TK_KEY_MENU(),
  KEY_COMMAND = TK_KEY_COMMAND(),
  KEY_BACK = TK_KEY_BACK(),
  KEY_CANCEL = TK_KEY_CANCEL(),
};

class TLocaleInfo {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static instance() : TLocaleInfo  {
    return new TLocaleInfo(locale_info());
  }
  
  tr(text : string) : string  {
    return locale_info_tr(this.nativeObj, text);
  }
  
  change(language : string, country : string) : TRet  {
    return locale_info_change(this.nativeObj, language, country);
  }
  
  on(type : TEventType, on_event : Function, ctx : any) : number  {
    return locale_info_on(this.nativeObj, type, on_event, ctx);
  }
  
  off(id : number) : TRet  {
    return locale_info_off(this.nativeObj, id);
  }
  
}

enum TStyleId {
  _ID_BG_COLOR = STYLE_ID_BG_COLOR(),
  _ID_FG_COLOR = STYLE_ID_FG_COLOR(),
  _ID_MASK_COLOR = STYLE_ID_MASK_COLOR(),
  _ID_FONT_NAME = STYLE_ID_FONT_NAME(),
  _ID_FONT_SIZE = STYLE_ID_FONT_SIZE(),
  _ID_FONT_STYLE = STYLE_ID_FONT_STYLE(),
  _ID_TEXT_COLOR = STYLE_ID_TEXT_COLOR(),
  _ID_TIPS_TEXT_COLOR = STYLE_ID_TIPS_TEXT_COLOR(),
  _ID_TEXT_ALIGN_H = STYLE_ID_TEXT_ALIGN_H(),
  _ID_TEXT_ALIGN_V = STYLE_ID_TEXT_ALIGN_V(),
  _ID_BORDER_COLOR = STYLE_ID_BORDER_COLOR(),
  _ID_BORDER_WIDTH = STYLE_ID_BORDER_WIDTH(),
  _ID_BORDER = STYLE_ID_BORDER(),
  _ID_BG_IMAGE = STYLE_ID_BG_IMAGE(),
  _ID_BG_IMAGE_DRAW_TYPE = STYLE_ID_BG_IMAGE_DRAW_TYPE(),
  _ID_ICON = STYLE_ID_ICON(),
  _ID_FG_IMAGE = STYLE_ID_FG_IMAGE(),
  _ID_FG_IMAGE_DRAW_TYPE = STYLE_ID_FG_IMAGE_DRAW_TYPE(),
  _ID_SPACER = STYLE_ID_SPACER(),
  _ID_MARGIN = STYLE_ID_MARGIN(),
  _ID_MARGIN_LEFT = STYLE_ID_MARGIN_LEFT(),
  _ID_MARGIN_RIGHT = STYLE_ID_MARGIN_RIGHT(),
  _ID_MARGIN_TOP = STYLE_ID_MARGIN_TOP(),
  _ID_MARGIN_BOTTOM = STYLE_ID_MARGIN_BOTTOM(),
  _ID_ICON_AT = STYLE_ID_ICON_AT(),
  _ID_ACTIVE_ICON = STYLE_ID_ACTIVE_ICON(),
  _ID_X_OFFSET = STYLE_ID_X_OFFSET(),
  _ID_Y_OFFSET = STYLE_ID_Y_OFFSET(),
  _ID_SELECTED_BG_COLOR = STYLE_ID_SELECTED_BG_COLOR(),
  _ID_SELECTED_FG_COLOR = STYLE_ID_SELECTED_FG_COLOR(),
  _ID_SELECTED_TEXT_COLOR = STYLE_ID_SELECTED_TEXT_COLOR(),
  _ID_ROUND_RADIUS = STYLE_ID_ROUND_RADIUS(),
};

class TStyle {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  notifyWidgetStateChanged(widget : TWidget) : TRet  {
    return style_notify_widget_state_changed(this.nativeObj, widget != null ? (widget.nativeObj || widget) : null);
  }
  
  isValid() : number  {
    return style_is_valid(this.nativeObj);
  }
  
  getInt(name : string, defval : number) : number  {
    return style_get_int(this.nativeObj, name, defval);
  }
  
  getStr(name : string, defval : string) : string  {
    return style_get_str(this.nativeObj, name, defval);
  }
  
  set(state : string, name : string, value : TValue) : TRet  {
    return style_set(this.nativeObj, state, name, value != null ? (value.nativeObj || value) : null);
  }
  
  isMutable() : number  {
    return style_is_mutable(this.nativeObj);
  }
  
}

class TTheme {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static instance() : TTheme  {
    return new TTheme(theme());
  }
  
}

class TTimer {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static add(on_timer : Function, ctx : any, duration : number) : number  {
    return timer_add(on_timer, ctx, duration);
  }
  
  static remove(timer_id : number) : TRet  {
    return timer_remove(timer_id);
  }
  
  static reset(timer_id : number) : TRet  {
    return timer_reset(timer_id);
  }
  
  static modify(timer_id : number, duration : number) : TRet  {
    return timer_modify(timer_id, duration);
  }
  
}

enum TAlignV {
  NONE = ALIGN_V_NONE(),
  MIDDLE = ALIGN_V_MIDDLE(),
  TOP = ALIGN_V_TOP(),
  BOTTOM = ALIGN_V_BOTTOM(),
};

enum TAlignH {
  NONE = ALIGN_H_NONE(),
  CENTER = ALIGN_H_CENTER(),
  LEFT = ALIGN_H_LEFT(),
  RIGHT = ALIGN_H_RIGHT(),
};

enum TBitmapFormat {
  NONE = BITMAP_FMT_NONE(),
  RGBA8888 = BITMAP_FMT_RGBA8888(),
  ABGR8888 = BITMAP_FMT_ABGR8888(),
  BGRA8888 = BITMAP_FMT_BGRA8888(),
  ARGB8888 = BITMAP_FMT_ARGB8888(),
  RGB565 = BITMAP_FMT_RGB565(),
  BGR565 = BITMAP_FMT_BGR565(),
  RGB888 = BITMAP_FMT_RGB888(),
  BGR888 = BITMAP_FMT_BGR888(),
  GRAY = BITMAP_FMT_GRAY(),
  MONO = BITMAP_FMT_MONO(),
};

enum TBitmapFlag {
  NONE = BITMAP_FLAG_NONE(),
  OPAQUE = BITMAP_FLAG_OPAQUE(),
  IMMUTABLE = BITMAP_FLAG_IMMUTABLE(),
  TEXTURE = BITMAP_FLAG_TEXTURE(),
  CHANGED = BITMAP_FLAG_CHANGED(),
  PREMULTI_ALPHA = BITMAP_FLAG_PREMULTI_ALPHA(),
};

class TVgcanvas {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static cast(vg : TVgcanvas) : TVgcanvas  {
    return new TVgcanvas(vgcanvas_cast(vg != null ? (vg.nativeObj || vg) : null));
  }
  
  flush() : TRet  {
    return vgcanvas_flush(this.nativeObj);
  }
  
  beginPath() : TRet  {
    return vgcanvas_begin_path(this.nativeObj);
  }
  
  moveTo(x : number, y : number) : TRet  {
    return vgcanvas_move_to(this.nativeObj, x, y);
  }
  
  lineTo(x : number, y : number) : TRet  {
    return vgcanvas_line_to(this.nativeObj, x, y);
  }
  
  quadTo(cpx : number, cpy : number, x : number, y : number) : TRet  {
    return vgcanvas_quad_to(this.nativeObj, cpx, cpy, x, y);
  }
  
  bezierTo(cp1x : number, cp1y : number, cp2x : number, cp2y : number, x : number, y : number) : TRet  {
    return vgcanvas_bezier_to(this.nativeObj, cp1x, cp1y, cp2x, cp2y, x, y);
  }
  
  arcTo(x1 : number, y1 : number, x2 : number, y2 : number, r : number) : TRet  {
    return vgcanvas_arc_to(this.nativeObj, x1, y1, x2, y2, r);
  }
  
  arc(x : number, y : number, r : number, start_angle : number, end_angle : number, ccw : number) : TRet  {
    return vgcanvas_arc(this.nativeObj, x, y, r, start_angle, end_angle, ccw);
  }
  
  isPointInPath(x : number, y : number) : number  {
    return vgcanvas_is_point_in_path(this.nativeObj, x, y);
  }
  
  rect(x : number, y : number, w : number, h : number) : TRet  {
    return vgcanvas_rect(this.nativeObj, x, y, w, h);
  }
  
  roundedRect(x : number, y : number, w : number, h : number, r : number) : TRet  {
    return vgcanvas_rounded_rect(this.nativeObj, x, y, w, h, r);
  }
  
  ellipse(x : number, y : number, rx : number, ry : number) : TRet  {
    return vgcanvas_ellipse(this.nativeObj, x, y, rx, ry);
  }
  
  closePath() : TRet  {
    return vgcanvas_close_path(this.nativeObj);
  }
  
  rotate(rad : number) : TRet  {
    return vgcanvas_rotate(this.nativeObj, rad);
  }
  
  scale(x : number, y : number) : TRet  {
    return vgcanvas_scale(this.nativeObj, x, y);
  }
  
  translate(x : number, y : number) : TRet  {
    return vgcanvas_translate(this.nativeObj, x, y);
  }
  
  transform(a : number, b : number, c : number, d : number, e : number, f : number) : TRet  {
    return vgcanvas_transform(this.nativeObj, a, b, c, d, e, f);
  }
  
  setTransform(a : number, b : number, c : number, d : number, e : number, f : number) : TRet  {
    return vgcanvas_set_transform(this.nativeObj, a, b, c, d, e, f);
  }
  
  clipRect(x : number, y : number, w : number, h : number) : TRet  {
    return vgcanvas_clip_rect(this.nativeObj, x, y, w, h);
  }
  
  fill() : TRet  {
    return vgcanvas_fill(this.nativeObj);
  }
  
  stroke() : TRet  {
    return vgcanvas_stroke(this.nativeObj);
  }
  
  paint(stroke : number, img : TBitmap) : TRet  {
    return vgcanvas_paint(this.nativeObj, stroke, img != null ? (img.nativeObj || img) : null);
  }
  
  setFont(font : string) : TRet  {
    return vgcanvas_set_font(this.nativeObj, font);
  }
  
  setFontSize(font : number) : TRet  {
    return vgcanvas_set_font_size(this.nativeObj, font);
  }
  
  setTextAlign(value : string) : TRet  {
    return vgcanvas_set_text_align(this.nativeObj, value);
  }
  
  setTextBaseline(value : string) : TRet  {
    return vgcanvas_set_text_baseline(this.nativeObj, value);
  }
  
  fillText(text : string, x : number, y : number, max_width : number) : TRet  {
    return vgcanvas_fill_text(this.nativeObj, text, x, y, max_width);
  }
  
  measureText(text : string) : number  {
    return vgcanvas_measure_text(this.nativeObj, text);
  }
  
  drawImage(img : TBitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet  {
    return vgcanvas_draw_image(this.nativeObj, img != null ? (img.nativeObj || img) : null, sx, sy, sw, sh, dx, dy, dw, dh);
  }
  
  drawIcon(img : TBitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet  {
    return vgcanvas_draw_icon(this.nativeObj, img != null ? (img.nativeObj || img) : null, sx, sy, sw, sh, dx, dy, dw, dh);
  }
  
  setAntialias(value : number) : TRet  {
    return vgcanvas_set_antialias(this.nativeObj, value);
  }
  
  setGlobalAlpha(alpha : number) : TRet  {
    return vgcanvas_set_global_alpha(this.nativeObj, alpha);
  }
  
  setLineWidth(value : number) : TRet  {
    return vgcanvas_set_line_width(this.nativeObj, value);
  }
  
  setFillColor(color : string) : TRet  {
    return vgcanvas_set_fill_color_str(this.nativeObj, color);
  }
  
  setStrokeColor(color : string) : TRet  {
    return vgcanvas_set_stroke_color_str(this.nativeObj, color);
  }
  
  setLineCap(value : string) : TRet  {
    return vgcanvas_set_line_cap(this.nativeObj, value);
  }
  
  setLineJoin(value : string) : TRet  {
    return vgcanvas_set_line_join(this.nativeObj, value);
  }
  
  setMiterLimit(value : number) : TRet  {
    return vgcanvas_set_miter_limit(this.nativeObj, value);
  }
  
  save() : TRet  {
    return vgcanvas_save(this.nativeObj);
  }
  
  restore() : TRet  {
    return vgcanvas_restore(this.nativeObj);
  }
  
  get w() : number {
    return vgcanvas_t_get_prop_w(this.nativeObj);
  }
  
  get h() : number {
    return vgcanvas_t_get_prop_h(this.nativeObj);
  }
  
  get ratio() : number {
    return vgcanvas_t_get_prop_ratio(this.nativeObj);
  }
  
  get antiAlias() : number {
    return vgcanvas_t_get_prop_anti_alias(this.nativeObj);
  }
  
  get lineWidth() : number {
    return vgcanvas_t_get_prop_line_width(this.nativeObj);
  }
  
  get globalAlpha() : number {
    return vgcanvas_t_get_prop_global_alpha(this.nativeObj);
  }
  
  get miterLimit() : number {
    return vgcanvas_t_get_prop_miter_limit(this.nativeObj);
  }
  
  get lineCap() : string {
    return vgcanvas_t_get_prop_line_cap(this.nativeObj);
  }
  
  get lineJoin() : string {
    return vgcanvas_t_get_prop_line_join(this.nativeObj);
  }
  
  get font() : string {
    return vgcanvas_t_get_prop_font(this.nativeObj);
  }
  
  get fontSize() : number {
    return vgcanvas_t_get_prop_font_size(this.nativeObj);
  }
  
  get textAlign() : string {
    return vgcanvas_t_get_prop_text_align(this.nativeObj);
  }
  
  get textBaseline() : string {
    return vgcanvas_t_get_prop_text_baseline(this.nativeObj);
  }
  
}

enum TWidgetProp {
  EXEC = WIDGET_PROP_EXEC(),
  X = WIDGET_PROP_X(),
  Y = WIDGET_PROP_Y(),
  W = WIDGET_PROP_W(),
  H = WIDGET_PROP_H(),
  CANVAS = WIDGET_PROP_CANVAS(),
  LOCALIZE_OPTIONS = WIDGET_PROP_LOCALIZE_OPTIONS(),
  NATIVE_WINDOW = WIDGET_PROP_NATIVE_WINDOW(),
  HIGHLIGHT = WIDGET_PROP_HIGHLIGHT(),
  BAR_SIZE = WIDGET_PROP_BAR_SIZE(),
  OPACITY = WIDGET_PROP_OPACITY(),
  MIN_W = WIDGET_PROP_MIN_W(),
  MAX_W = WIDGET_PROP_MAX_W(),
  CHILDREN_LAYOUT = WIDGET_PROP_CHILDREN_LAYOUT(),
  LAYOUT = WIDGET_PROP_LAYOUT(),
  SELF_LAYOUT = WIDGET_PROP_SELF_LAYOUT(),
  LAYOUT_W = WIDGET_PROP_LAYOUT_W(),
  LAYOUT_H = WIDGET_PROP_LAYOUT_H(),
  VIRTUAL_W = WIDGET_PROP_VIRTUAL_W(),
  VIRTUAL_H = WIDGET_PROP_VIRTUAL_H(),
  NAME = WIDGET_PROP_NAME(),
  TYPE = WIDGET_PROP_TYPE(),
  CLOSABLE = WIDGET_PROP_CLOSABLE(),
  CURSOR = WIDGET_PROP_CURSOR(),
  VALUE = WIDGET_PROP_VALUE(),
  LENGTH = WIDGET_PROP_LENGTH(),
  TEXT = WIDGET_PROP_TEXT(),
  TR_TEXT = WIDGET_PROP_TR_TEXT(),
  STYLE = WIDGET_PROP_STYLE(),
  ENABLE = WIDGET_PROP_ENABLE(),
  FEEDBACK = WIDGET_PROP_FEEDBACK(),
  FLOATING = WIDGET_PROP_FLOATING(),
  MARGIN = WIDGET_PROP_MARGIN(),
  SPACING = WIDGET_PROP_SPACING(),
  LEFT_MARGIN = WIDGET_PROP_LEFT_MARGIN(),
  RIGHT_MARGIN = WIDGET_PROP_RIGHT_MARGIN(),
  TOP_MARGIN = WIDGET_PROP_TOP_MARGIN(),
  BOTTOM_MARGIN = WIDGET_PROP_BOTTOM_MARGIN(),
  STEP = WIDGET_PROP_STEP(),
  VISIBLE = WIDGET_PROP_VISIBLE(),
  SENSITIVE = WIDGET_PROP_SENSITIVE(),
  ANIMATION = WIDGET_PROP_ANIMATION(),
  ANIM_HINT = WIDGET_PROP_ANIM_HINT(),
  FULLSCREEN = WIDGET_PROP_FULLSCREEN(),
  OPEN_ANIM_HINT = WIDGET_PROP_OPEN_ANIM_HINT(),
  CLOSE_ANIM_HINT = WIDGET_PROP_CLOSE_ANIM_HINT(),
  MIN = WIDGET_PROP_MIN(),
  TIPS = WIDGET_PROP_TIPS(),
  INPUT_TYPE = WIDGET_PROP_INPUT_TYPE(),
  READONLY = WIDGET_PROP_READONLY(),
  PASSWORD_VISIBLE = WIDGET_PROP_PASSWORD_VISIBLE(),
  ACTIVE = WIDGET_PROP_ACTIVE(),
  VERTICAL = WIDGET_PROP_VERTICAL(),
  SHOW_TEXT = WIDGET_PROP_SHOW_TEXT(),
  XOFFSET = WIDGET_PROP_XOFFSET(),
  YOFFSET = WIDGET_PROP_YOFFSET(),
  ALIGN_V = WIDGET_PROP_ALIGN_V(),
  ALIGN_H = WIDGET_PROP_ALIGN_H(),
  AUTO_PLAY = WIDGET_PROP_AUTO_PLAY(),
  LOOP = WIDGET_PROP_LOOP(),
  AUTO_FIX = WIDGET_PROP_AUTO_FIX(),
  SELECT_NONE_WHEN_FOCUSED = WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED(),
  OPEN_IM_WHEN_FOCUSED = WIDGET_PROP_OPEN_IM_WHEN_FOCUSED(),
  X_MIN = WIDGET_PROP_X_MIN(),
  X_MAX = WIDGET_PROP_X_MAX(),
  Y_MIN = WIDGET_PROP_Y_MIN(),
  Y_MAX = WIDGET_PROP_Y_MAX(),
  MAX = WIDGET_PROP_MAX(),
  GRAB_KEYS = WIDGET_PROP_GRAB_KEYS(),
  ROW = WIDGET_PROP_ROW(),
  STATE_FOR_STYLE = WIDGET_PROP_STATE_FOR_STYLE(),
  THEME = WIDGET_PROP_THEME(),
  STAGE = WIDGET_PROP_STAGE(),
  IMAGE_MANAGER = WIDGET_PROP_IMAGE_MANAGER(),
  ASSETS_MANAGER = WIDGET_PROP_ASSETS_MANAGER(),
  LOCALE_INFO = WIDGET_PROP_LOCALE_INFO(),
  FONT_MANAGER = WIDGET_PROP_FONT_MANAGER(),
  THEME_OBJ = WIDGET_PROP_THEME_OBJ(),
  DEFAULT_THEME_OBJ = WIDGET_PROP_DEFAULT_THEME_OBJ(),
  ITEM_WIDTH = WIDGET_PROP_ITEM_WIDTH(),
  ITEM_HEIGHT = WIDGET_PROP_ITEM_HEIGHT(),
  DEFAULT_ITEM_HEIGHT = WIDGET_PROP_DEFAULT_ITEM_HEIGHT(),
  XSLIDABLE = WIDGET_PROP_XSLIDABLE(),
  YSLIDABLE = WIDGET_PROP_YSLIDABLE(),
  REPEAT = WIDGET_PROP_REPEAT(),
  ENABLE_LONG_PRESS = WIDGET_PROP_ENABLE_LONG_PRESS(),
  ANIMATABLE = WIDGET_PROP_ANIMATABLE(),
  AUTO_HIDE_SCROLL_BAR = WIDGET_PROP_AUTO_HIDE_SCROLL_BAR(),
  IMAGE = WIDGET_PROP_IMAGE(),
  FORMAT = WIDGET_PROP_FORMAT(),
  DRAW_TYPE = WIDGET_PROP_DRAW_TYPE(),
  SELECTABLE = WIDGET_PROP_SELECTABLE(),
  CLICKABLE = WIDGET_PROP_CLICKABLE(),
  SCALE_X = WIDGET_PROP_SCALE_X(),
  SCALE_Y = WIDGET_PROP_SCALE_Y(),
  ANCHOR_X = WIDGET_PROP_ANCHOR_X(),
  ANCHOR_Y = WIDGET_PROP_ANCHOR_Y(),
  ROTATION = WIDGET_PROP_ROTATION(),
  COMPACT = WIDGET_PROP_COMPACT(),
  SCROLLABLE = WIDGET_PROP_SCROLLABLE(),
  ICON = WIDGET_PROP_ICON(),
  OPTIONS = WIDGET_PROP_OPTIONS(),
  SELECTED = WIDGET_PROP_SELECTED(),
  CHECKED = WIDGET_PROP_CHECKED(),
  ACTIVE_ICON = WIDGET_PROP_ACTIVE_ICON(),
  OPEN_WINDOW = WIDGET_PROP_OPEN_WINDOW(),
  SELECTED_INDEX = WIDGET_PROP_SELECTED_INDEX(),
  CLOSE_WHEN_CLICK = WIDGET_PROP_CLOSE_WHEN_CLICK(),
  CLOSE_WHEN_CLICK_OUTSIDE = WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE(),
  LINE_GAP = WIDGET_PROP_LINE_GAP(),
  BG_COLOR = WIDGET_PROP_BG_COLOR(),
  BORDER_COLOR = WIDGET_PROP_BORDER_COLOR(),
  DELAY = WIDGET_PROP_DELAY(),
  IS_KEYBOARD = WIDGET_PROP_IS_KEYBOARD(),
  FOCUSED = WIDGET_PROP_FOCUSED(),
  FOCUS = WIDGET_PROP_FOCUS(),
  FOCUSABLE = WIDGET_PROP_FOCUSABLE(),
  WITH_FOCUS_STATE = WIDGET_PROP_WITH_FOCUS_STATE(),
  MOVE_FOCUS_PREV_KEY = WIDGET_PROP_MOVE_FOCUS_PREV_KEY(),
  MOVE_FOCUS_NEXT_KEY = WIDGET_PROP_MOVE_FOCUS_NEXT_KEY(),
  MOVE_FOCUS_UP_KEY = WIDGET_PROP_MOVE_FOCUS_UP_KEY(),
  MOVE_FOCUS_DOWN_KEY = WIDGET_PROP_MOVE_FOCUS_DOWN_KEY(),
  MOVE_FOCUS_LEFT_KEY = WIDGET_PROP_MOVE_FOCUS_LEFT_KEY(),
  MOVE_FOCUS_RIGHT_KEY = WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY(),
};

enum TWidgetType {
  NONE = WIDGET_TYPE_NONE(),
  WINDOW_MANAGER = WIDGET_TYPE_WINDOW_MANAGER(),
  NORMAL_WINDOW = WIDGET_TYPE_NORMAL_WINDOW(),
  OVERLAY = WIDGET_TYPE_OVERLAY(),
  TOOL_BAR = WIDGET_TYPE_TOOL_BAR(),
  DIALOG = WIDGET_TYPE_DIALOG(),
  POPUP = WIDGET_TYPE_POPUP(),
  SYSTEM_BAR = WIDGET_TYPE_SYSTEM_BAR(),
  SYSTEM_BAR_BOTTOM = WIDGET_TYPE_SYSTEM_BAR_BOTTOM(),
  SPRITE = WIDGET_TYPE_SPRITE(),
  KEYBOARD = WIDGET_TYPE_KEYBOARD(),
  DND = WIDGET_TYPE_DND(),
  LABEL = WIDGET_TYPE_LABEL(),
  BUTTON = WIDGET_TYPE_BUTTON(),
  IMAGE = WIDGET_TYPE_IMAGE(),
  EDIT = WIDGET_TYPE_EDIT(),
  PROGRESS_BAR = WIDGET_TYPE_PROGRESS_BAR(),
  GROUP_BOX = WIDGET_TYPE_GROUP_BOX(),
  CHECK_BUTTON = WIDGET_TYPE_CHECK_BUTTON(),
  RADIO_BUTTON = WIDGET_TYPE_RADIO_BUTTON(),
  DIALOG_TITLE = WIDGET_TYPE_DIALOG_TITLE(),
  DIALOG_CLIENT = WIDGET_TYPE_DIALOG_CLIENT(),
  SLIDER = WIDGET_TYPE_SLIDER(),
  VIEW = WIDGET_TYPE_VIEW(),
  COMBO_BOX = WIDGET_TYPE_COMBO_BOX(),
  COMBO_BOX_ITEM = WIDGET_TYPE_COMBO_BOX_ITEM(),
  SLIDE_VIEW = WIDGET_TYPE_SLIDE_VIEW(),
  SLIDE_INDICATOR = WIDGET_TYPE_SLIDE_INDICATOR(),
  SLIDE_INDICATOR_ARC = WIDGET_TYPE_SLIDE_INDICATOR_ARC(),
  PAGES = WIDGET_TYPE_PAGES(),
  TAB_BUTTON = WIDGET_TYPE_TAB_BUTTON(),
  TAB_CONTROL = WIDGET_TYPE_TAB_CONTROL(),
  TAB_BUTTON_GROUP = WIDGET_TYPE_TAB_BUTTON_GROUP(),
  BUTTON_GROUP = WIDGET_TYPE_BUTTON_GROUP(),
  CANDIDATES = WIDGET_TYPE_CANDIDATES(),
  SPIN_BOX = WIDGET_TYPE_SPIN_BOX(),
  DRAGGER = WIDGET_TYPE_DRAGGER(),
  SCROLL_BAR = WIDGET_TYPE_SCROLL_BAR(),
  SCROLL_BAR_DESKTOP = WIDGET_TYPE_SCROLL_BAR_DESKTOP(),
  SCROLL_BAR_MOBILE = WIDGET_TYPE_SCROLL_BAR_MOBILE(),
  SCROLL_VIEW = WIDGET_TYPE_SCROLL_VIEW(),
  LIST_VIEW = WIDGET_TYPE_LIST_VIEW(),
  LIST_VIEW_H = WIDGET_TYPE_LIST_VIEW_H(),
  LIST_ITEM = WIDGET_TYPE_LIST_ITEM(),
  COLOR_PICKER = WIDGET_TYPE_COLOR_PICKER(),
  COLOR_COMPONENT = WIDGET_TYPE_COLOR_COMPONENT(),
  COLOR_TILE = WIDGET_TYPE_COLOR_TILE(),
  RICH_TEXT = WIDGET_TYPE_RICH_TEXT(),
  APP_BAR = WIDGET_TYPE_APP_BAR(),
  GRID = WIDGET_TYPE_GRID(),
  GRID_ITEM = WIDGET_TYPE_GRID_ITEM(),
  ROW = WIDGET_TYPE_ROW(),
  COLUMN = WIDGET_TYPE_COLUMN(),
  CALIBRATION_WIN = WIDGET_TYPE_CALIBRATION_WIN(),
};

enum TWindowStage {
  NONE = WINDOW_STAGE_NONE(),
  CREATED = WINDOW_STAGE_CREATED(),
  OPENED = WINDOW_STAGE_OPENED(),
  CLOSED = WINDOW_STAGE_CLOSED(),
};

enum TWindowClosable {
  YES = WINDOW_CLOSABLE_YES(),
  NO = WINDOW_CLOSABLE_NO(),
  CONFIRM = WINDOW_CLOSABLE_CONFIRM(),
};

enum TWidgetState {
  STATE_NONE = WIDGET_STATE_NONE(),
  STATE_NORMAL = WIDGET_STATE_NORMAL(),
  STATE_PRESSED = WIDGET_STATE_PRESSED(),
  STATE_OVER = WIDGET_STATE_OVER(),
  STATE_DISABLE = WIDGET_STATE_DISABLE(),
  STATE_FOCUSED = WIDGET_STATE_FOCUSED(),
  STATE_CHECKED = WIDGET_STATE_CHECKED(),
  STATE_UNCHECKED = WIDGET_STATE_UNCHECKED(),
  STATE_EMPTY = WIDGET_STATE_EMPTY(),
  STATE_EMPTY_FOCUS = WIDGET_STATE_EMPTY_FOCUS(),
  STATE_ERROR = WIDGET_STATE_ERROR(),
  STATE_SELECTED = WIDGET_STATE_SELECTED(),
  STATE_NORMAL_OF_CHECKED = WIDGET_STATE_NORMAL_OF_CHECKED(),
  STATE_PRESSED_OF_CHECKED = WIDGET_STATE_PRESSED_OF_CHECKED(),
  STATE_OVER_OF_CHECKED = WIDGET_STATE_OVER_OF_CHECKED(),
  STATE_FOCUSED_OF_CHECKED = WIDGET_STATE_FOCUSED_OF_CHECKED(),
  STATE_NORMAL_OF_ACTIVE = WIDGET_STATE_NORMAL_OF_ACTIVE(),
  STATE_PRESSED_OF_ACTIVE = WIDGET_STATE_PRESSED_OF_ACTIVE(),
  STATE_OVER_OF_ACTIVE = WIDGET_STATE_OVER_OF_ACTIVE(),
  STATE_FOCUSED_OF_ACTIVE = WIDGET_STATE_FOCUSED_OF_ACTIVE(),
};

class TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  countChildren() : number  {
    return widget_count_children(this.nativeObj);
  }
  
  getChild(index : number) : TWidget  {
    return new TWidget(widget_get_child(this.nativeObj, index));
  }
  
  indexOf() : number  {
    return widget_index_of(this.nativeObj);
  }
  
  move(x : number, y : number) : TRet  {
    return widget_move(this.nativeObj, x, y);
  }
  
  resize(w : number, h : number) : TRet  {
    return widget_resize(this.nativeObj, w, h);
  }
  
  moveResize(x : number, y : number, w : number, h : number) : TRet  {
    return widget_move_resize(this.nativeObj, x, y, w, h);
  }
  
  setValue(value : number) : TRet  {
    return widget_set_value(this.nativeObj, value);
  }
  
  animateValueTo(value : number, duration : number) : TRet  {
    return widget_animate_value_to(this.nativeObj, value, duration);
  }
  
  addValue(delta : number) : TRet  {
    return widget_add_value(this.nativeObj, delta);
  }
  
  useStyle(style : string) : TRet  {
    return widget_use_style(this.nativeObj, style);
  }
  
  setText(text : string) : TRet  {
    return widget_set_text_utf8(this.nativeObj, text);
  }
  
  setTrText(text : string) : TRet  {
    return widget_set_tr_text(this.nativeObj, text);
  }
  
  getValue() : number  {
    return widget_get_value(this.nativeObj);
  }
  
  getText() : any  {
    return widget_get_text(this.nativeObj);
  }
  
  setName(name : string) : TRet  {
    return widget_set_name(this.nativeObj, name);
  }
  
  setTheme(name : string) : TRet  {
    return widget_set_theme(this.nativeObj, name);
  }
  
  setPointerCursor(cursor : string) : TRet  {
    return widget_set_pointer_cursor(this.nativeObj, cursor);
  }
  
  setAnimation(animation : string) : TRet  {
    return widget_set_animation(this.nativeObj, animation);
  }
  
  createAnimator(animation : string) : TRet  {
    return widget_create_animator(this.nativeObj, animation);
  }
  
  startAnimator(name : string) : TRet  {
    return widget_start_animator(this.nativeObj, name);
  }
  
  setAnimatorTimeScale(name : string, time_scale : number) : TRet  {
    return widget_set_animator_time_scale(this.nativeObj, name, time_scale);
  }
  
  pauseAnimator(name : string) : TRet  {
    return widget_pause_animator(this.nativeObj, name);
  }
  
  stopAnimator(name : string) : TRet  {
    return widget_stop_animator(this.nativeObj, name);
  }
  
  destroyAnimator(name : string) : TRet  {
    return widget_destroy_animator(this.nativeObj, name);
  }
  
  setEnable(enable : number) : TRet  {
    return widget_set_enable(this.nativeObj, enable);
  }
  
  setFeedback(feedback : number) : TRet  {
    return widget_set_feedback(this.nativeObj, feedback);
  }
  
  setFloating(floating : number) : TRet  {
    return widget_set_floating(this.nativeObj, floating);
  }
  
  setFocused(focused : number) : TRet  {
    return widget_set_focused(this.nativeObj, focused);
  }
  
  child(name : string) : TWidget  {
    return new TWidget(widget_child(this.nativeObj, name));
  }
  
  lookup(name : string, recursive : number) : TWidget  {
    return new TWidget(widget_lookup(this.nativeObj, name, recursive));
  }
  
  lookupByType(type : string, recursive : number) : TWidget  {
    return new TWidget(widget_lookup_by_type(this.nativeObj, type, recursive));
  }
  
  setVisible(visible : number, recursive : number) : TRet  {
    return widget_set_visible(this.nativeObj, visible, recursive);
  }
  
  setVisibleOnly(visible : number) : TRet  {
    return widget_set_visible_only(this.nativeObj, visible);
  }
  
  setSensitive(sensitive : number) : TRet  {
    return widget_set_sensitive(this.nativeObj, sensitive);
  }
  
  on(type : number, on_event : Function, ctx : any) : number  {
    return widget_on(this.nativeObj, type, on_event, ctx);
  }
  
  onWithTag(type : number, on_event : Function, ctx : any, tag : number) : number  {
    return widget_on_with_tag(this.nativeObj, type, on_event, ctx, tag);
  }
  
  off(id : number) : TRet  {
    return widget_off(this.nativeObj, id);
  }
  
  invalidateForce(r : TRect) : TRet  {
    return widget_invalidate_force(this.nativeObj, r != null ? (r.nativeObj || r) : null);
  }
  
  setPropStr(name : string, v : string) : TRet  {
    return widget_set_prop_str(this.nativeObj, name, v);
  }
  
  getPropStr(name : string, defval : string) : string  {
    return widget_get_prop_str(this.nativeObj, name, defval);
  }
  
  setPropInt(name : string, v : number) : TRet  {
    return widget_set_prop_int(this.nativeObj, name, v);
  }
  
  getPropInt(name : string, defval : number) : number  {
    return widget_get_prop_int(this.nativeObj, name, defval);
  }
  
  setPropBool(name : string, v : number) : TRet  {
    return widget_set_prop_bool(this.nativeObj, name, v);
  }
  
  getPropBool(name : string, defval : number) : number  {
    return widget_get_prop_bool(this.nativeObj, name, defval);
  }
  
  isWindowOpened() : number  {
    return widget_is_window_opened(this.nativeObj);
  }
  
  isWindow() : number  {
    return widget_is_window(this.nativeObj);
  }
  
  isDesigningWindow() : number  {
    return widget_is_designing_window(this.nativeObj);
  }
  
  isWindowManager() : number  {
    return widget_is_window_manager(this.nativeObj);
  }
  
  foreach(visit : Function, ctx : any) : TRet  {
    return widget_foreach(this.nativeObj, visit, ctx);
  }
  
  getWindow() : TWidget  {
    return new TWidget(widget_get_window(this.nativeObj));
  }
  
  getWindowManager() : TWidget  {
    return new TWidget(widget_get_window_manager(this.nativeObj));
  }
  
  getType() : string  {
    return widget_get_type(this.nativeObj);
  }
  
  clone(parent : TWidget) : TWidget  {
    return new TWidget(widget_clone(this.nativeObj, parent != null ? (parent.nativeObj || parent) : null));
  }
  
  equal(other : TWidget) : number  {
    return widget_equal(this.nativeObj, other != null ? (other.nativeObj || other) : null);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TWidget(widget_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  destroy() : TRet  {
    return widget_destroy(this.nativeObj);
  }
  
  unref() : TRet  {
    return widget_unref(this.nativeObj);
  }
  
  layout() : TRet  {
    return widget_layout(this.nativeObj);
  }
  
  setSelfLayout(params : string) : TRet  {
    return widget_set_self_layout(this.nativeObj, params);
  }
  
  setChildrenLayout(params : string) : TRet  {
    return widget_set_children_layout(this.nativeObj, params);
  }
  
  setSelfLayoutParams(x : string, y : string, w : string, h : string) : TRet  {
    return widget_set_self_layout_params(this.nativeObj, x, y, w, h);
  }
  
  setStyleInt(state_and_name : string, value : number) : TRet  {
    return widget_set_style_int(this.nativeObj, state_and_name, value);
  }
  
  setStyleStr(state_and_name : string, value : string) : TRet  {
    return widget_set_style_str(this.nativeObj, state_and_name, value);
  }
  
  setStyleColor(state_and_name : string, value : number) : TRet  {
    return widget_set_style_color(this.nativeObj, state_and_name, value);
  }
  
  get x() : number {
    return widget_t_get_prop_x(this.nativeObj);
  }
  
  get y() : number {
    return widget_t_get_prop_y(this.nativeObj);
  }
  
  get w() : number {
    return widget_t_get_prop_w(this.nativeObj);
  }
  
  get h() : number {
    return widget_t_get_prop_h(this.nativeObj);
  }
  
  get name() : string {
    return widget_t_get_prop_name(this.nativeObj);
  }
  
  get trText() : string {
    return widget_t_get_prop_tr_text(this.nativeObj);
  }
  
  get style() : string {
    return widget_t_get_prop_style(this.nativeObj);
  }
  
  get animation() : string {
    return widget_t_get_prop_animation(this.nativeObj);
  }
  
  get enable() : number {
    return widget_t_get_prop_enable(this.nativeObj);
  }
  
  get feedback() : number {
    return widget_t_get_prop_feedback(this.nativeObj);
  }
  
  set visible(value : number) {
    widget_t_set_prop_visible(this.nativeObj, value);
  }
  
  get visible() : number {
    return widget_t_get_prop_visible(this.nativeObj);
  }
  
  set sensitive(value : number) {
    widget_t_set_prop_sensitive(this.nativeObj, value);
  }
  
  get sensitive() : number {
    return widget_t_get_prop_sensitive(this.nativeObj);
  }
  
  set focusable(value : number) {
    widget_t_set_prop_focusable(this.nativeObj, value);
  }
  
  get focusable() : number {
    return widget_t_get_prop_focusable(this.nativeObj);
  }
  
  set withFocusState(value : number) {
    widget_t_set_prop_with_focus_state(this.nativeObj, value);
  }
  
  get withFocusState() : number {
    return widget_t_get_prop_with_focus_state(this.nativeObj);
  }
  
  get floating() : number {
    return widget_t_get_prop_floating(this.nativeObj);
  }
  
}

enum TRet {
  OK = RET_OK(),
  OOM = RET_OOM(),
  FAIL = RET_FAIL(),
  NOT_IMPL = RET_NOT_IMPL(),
  QUIT = RET_QUIT(),
  FOUND = RET_FOUND(),
  BUSY = RET_BUSY(),
  REMOVE = RET_REMOVE(),
  REPEAT = RET_REPEAT(),
  NOT_FOUND = RET_NOT_FOUND(),
  DONE = RET_DONE(),
  STOP = RET_STOP(),
  SKIP = RET_SKIP(),
  CONTINUE = RET_CONTINUE(),
  OBJECT_CHANGED = RET_OBJECT_CHANGED(),
  ITEMS_CHANGED = RET_ITEMS_CHANGED(),
  BAD_PARAMS = RET_BAD_PARAMS(),
  TIMEOUT = RET_TIMEOUT(),
  CRC = RET_CRC(),
  IO = RET_IO(),
  EOS = RET_EOS(),
};

class TTimerManager {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
}

class TTimeNow {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static s() : number  {
    return time_now_s();
  }
  
  static ms() : number  {
    return time_now_ms();
  }
  
}

class TRect {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static create(x : number, y : number, w : number, h : number) : TRect  {
    return new TRect(rect_create(x, y, w, h));
  }
  
  set(x : number, y : number, w : number, h : number) : TRect  {
    return new TRect(rect_set(this.nativeObj, x, y, w, h));
  }
  
  static cast(rect : TRect) : TRect  {
    return new TRect(rect_cast(rect != null ? (rect.nativeObj || rect) : null));
  }
  
  destroy() : TRet  {
    return rect_destroy(this.nativeObj);
  }
  
  get x() : number {
    return rect_t_get_prop_x(this.nativeObj);
  }
  
  get y() : number {
    return rect_t_get_prop_y(this.nativeObj);
  }
  
  get w() : number {
    return rect_t_get_prop_w(this.nativeObj);
  }
  
  get h() : number {
    return rect_t_get_prop_h(this.nativeObj);
  }
  
}

class TPointf {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
}

class TPoint {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
}

class TPath {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
}

class TNamedValue {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static create() : TNamedValue  {
    return new TNamedValue(named_value_create());
  }
  
  static cast(nv : TNamedValue) : TNamedValue  {
    return new TNamedValue(named_value_cast(nv != null ? (nv.nativeObj || nv) : null));
  }
  
  setName(name : string) : TRet  {
    return named_value_set_name(this.nativeObj, name);
  }
  
  setValue(value : TValue) : TRet  {
    return named_value_set_value(this.nativeObj, value != null ? (value.nativeObj || value) : null);
  }
  
  getValue() : TValue  {
    return new TValue(named_value_get_value(this.nativeObj));
  }
  
  destroy() : TRet  {
    return named_value_destroy(this.nativeObj);
  }
  
  get name() : string {
    return named_value_t_get_prop_name(this.nativeObj);
  }
  
}

enum TMIME_TYPE {
  APPLICATION_ENVOY = MIME_TYPE_APPLICATION_ENVOY(),
  APPLICATION_FRACTALS = MIME_TYPE_APPLICATION_FRACTALS(),
  APPLICATION_FUTURESPLASH = MIME_TYPE_APPLICATION_FUTURESPLASH(),
  APPLICATION_HTA = MIME_TYPE_APPLICATION_HTA(),
  APPLICATION_JSON = MIME_TYPE_APPLICATION_JSON(),
  APPLICATION_UBJSON = MIME_TYPE_APPLICATION_UBJSON(),
  APPLICATION_MAC_BINHEX40 = MIME_TYPE_APPLICATION_MAC_BINHEX40(),
  APPLICATION_MSWORD = MIME_TYPE_APPLICATION_MSWORD(),
  APPLICATION_OCTET_STREAM = MIME_TYPE_APPLICATION_OCTET_STREAM(),
  APPLICATION_ODA = MIME_TYPE_APPLICATION_ODA(),
  APPLICATION_OLESCRIPT = MIME_TYPE_APPLICATION_OLESCRIPT(),
  APPLICATION_PDF = MIME_TYPE_APPLICATION_PDF(),
  APPLICATION_PICS_RULES = MIME_TYPE_APPLICATION_PICS_RULES(),
  APPLICATION_PKCS10 = MIME_TYPE_APPLICATION_PKCS10(),
  APPLICATION_PKIX_CRL = MIME_TYPE_APPLICATION_PKIX_CRL(),
  APPLICATION_POSTSCRIPT = MIME_TYPE_APPLICATION_POSTSCRIPT(),
  APPLICATION_RTF = MIME_TYPE_APPLICATION_RTF(),
  APPLICATION_VND_MS_EXCEL = MIME_TYPE_APPLICATION_VND_MS_EXCEL(),
  APPLICATION_VND_MS_OUTLOOK = MIME_TYPE_APPLICATION_VND_MS_OUTLOOK(),
  APPLICATION_VND_MS_PKICERTSTORE = MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE(),
  APPLICATION_VND_MS_PKISECCAT = MIME_TYPE_APPLICATION_VND_MS_PKISECCAT(),
  APPLICATION_VND_MS_PKISTL = MIME_TYPE_APPLICATION_VND_MS_PKISTL(),
  APPLICATION_VND_MS_POWERPOINT = MIME_TYPE_APPLICATION_VND_MS_POWERPOINT(),
  APPLICATION_VND_MS_PROJECT = MIME_TYPE_APPLICATION_VND_MS_PROJECT(),
  APPLICATION_VND_MS_WORKS = MIME_TYPE_APPLICATION_VND_MS_WORKS(),
  APPLICATION_WINHLP = MIME_TYPE_APPLICATION_WINHLP(),
  APPLICATION_X_BCPIO = MIME_TYPE_APPLICATION_X_BCPIO(),
  APPLICATION_X_CDF = MIME_TYPE_APPLICATION_X_CDF(),
  APPLICATION_X_COMPRESS = MIME_TYPE_APPLICATION_X_COMPRESS(),
  APPLICATION_X_COMPRESSED = MIME_TYPE_APPLICATION_X_COMPRESSED(),
  APPLICATION_X_CPIO = MIME_TYPE_APPLICATION_X_CPIO(),
  APPLICATION_X_CSH = MIME_TYPE_APPLICATION_X_CSH(),
  APPLICATION_X_DIRECTOR = MIME_TYPE_APPLICATION_X_DIRECTOR(),
  APPLICATION_X_DVI = MIME_TYPE_APPLICATION_X_DVI(),
  APPLICATION_X_GTAR = MIME_TYPE_APPLICATION_X_GTAR(),
  APPLICATION_X_GZIP = MIME_TYPE_APPLICATION_X_GZIP(),
  APPLICATION_X_HDF = MIME_TYPE_APPLICATION_X_HDF(),
  APPLICATION_X_IPHONE = MIME_TYPE_APPLICATION_X_IPHONE(),
  APPLICATION_X_JAVASCRIPT = MIME_TYPE_APPLICATION_X_JAVASCRIPT(),
  APPLICATION_X_LATEX = MIME_TYPE_APPLICATION_X_LATEX(),
  APPLICATION_X_MSACCESS = MIME_TYPE_APPLICATION_X_MSACCESS(),
  APPLICATION_X_MSCARDFILE = MIME_TYPE_APPLICATION_X_MSCARDFILE(),
  APPLICATION_X_MSCLIP = MIME_TYPE_APPLICATION_X_MSCLIP(),
  APPLICATION_X_MSDOWNLOAD = MIME_TYPE_APPLICATION_X_MSDOWNLOAD(),
  APPLICATION_X_MSMEDIAVIEW = MIME_TYPE_APPLICATION_X_MSMEDIAVIEW(),
  APPLICATION_X_MSMETAFILE = MIME_TYPE_APPLICATION_X_MSMETAFILE(),
  APPLICATION_X_MSMONEY = MIME_TYPE_APPLICATION_X_MSMONEY(),
  APPLICATION_X_MSPUBLISHER = MIME_TYPE_APPLICATION_X_MSPUBLISHER(),
  APPLICATION_X_MSSCHEDULE = MIME_TYPE_APPLICATION_X_MSSCHEDULE(),
  APPLICATION_X_MSTERMINAL = MIME_TYPE_APPLICATION_X_MSTERMINAL(),
  APPLICATION_X_MSWRITE = MIME_TYPE_APPLICATION_X_MSWRITE(),
  APPLICATION_X_NETCDF = MIME_TYPE_APPLICATION_X_NETCDF(),
  APPLICATION_X_PERFMON = MIME_TYPE_APPLICATION_X_PERFMON(),
  APPLICATION_X_PKCS12 = MIME_TYPE_APPLICATION_X_PKCS12(),
  APPLICATION_X_SH = MIME_TYPE_APPLICATION_X_SH(),
  APPLICATION_X_SHAR = MIME_TYPE_APPLICATION_X_SHAR(),
  APPLICATION_X_SHOCKWAVE_FLASH = MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH(),
  APPLICATION_X_STUFFIT = MIME_TYPE_APPLICATION_X_STUFFIT(),
  APPLICATION_X_SV4CPIO = MIME_TYPE_APPLICATION_X_SV4CPIO(),
  APPLICATION_X_SV4CRC = MIME_TYPE_APPLICATION_X_SV4CRC(),
  APPLICATION_X_TAR = MIME_TYPE_APPLICATION_X_TAR(),
  APPLICATION_X_TCL = MIME_TYPE_APPLICATION_X_TCL(),
  APPLICATION_X_TEX = MIME_TYPE_APPLICATION_X_TEX(),
  APPLICATION_X_TEXINFO = MIME_TYPE_APPLICATION_X_TEXINFO(),
  APPLICATION_X_TROFF = MIME_TYPE_APPLICATION_X_TROFF(),
  APPLICATION_X_USTAR = MIME_TYPE_APPLICATION_X_USTAR(),
  APPLICATION_ZIP = MIME_TYPE_APPLICATION_ZIP(),
  AUDIO_BASIC = MIME_TYPE_AUDIO_BASIC(),
  AUDIO_MID = MIME_TYPE_AUDIO_MID(),
  AUDIO_MPEG = MIME_TYPE_AUDIO_MPEG(),
  AUDIO_X_AIFF = MIME_TYPE_AUDIO_X_AIFF(),
  AUDIO_X_MPEGURL = MIME_TYPE_AUDIO_X_MPEGURL(),
  AUDIO_X_WAV = MIME_TYPE_AUDIO_X_WAV(),
  IMAGE_BMP = MIME_TYPE_IMAGE_BMP(),
  IMAGE_CIS_COD = MIME_TYPE_IMAGE_CIS_COD(),
  IMAGE_GIF = MIME_TYPE_IMAGE_GIF(),
  IMAGE_IEF = MIME_TYPE_IMAGE_IEF(),
  IMAGE_JPEG = MIME_TYPE_IMAGE_JPEG(),
  IMAGE_PIPEG = MIME_TYPE_IMAGE_PIPEG(),
  IMAGE_SVG_XML = MIME_TYPE_IMAGE_SVG_XML(),
  IMAGE_TIFF = MIME_TYPE_IMAGE_TIFF(),
  IMAGE_X_CMX = MIME_TYPE_IMAGE_X_CMX(),
  IMAGE_X_ICON = MIME_TYPE_IMAGE_X_ICON(),
  IMAGE_X_RGB = MIME_TYPE_IMAGE_X_RGB(),
  IMAGE_X_XBITMAP = MIME_TYPE_IMAGE_X_XBITMAP(),
  IMAGE_X_XPIXMAP = MIME_TYPE_IMAGE_X_XPIXMAP(),
  IMAGE_X_XWINDOWDUMP = MIME_TYPE_IMAGE_X_XWINDOWDUMP(),
  MESSAGE_RFC822 = MIME_TYPE_MESSAGE_RFC822(),
  TEXT_CSS = MIME_TYPE_TEXT_CSS(),
  TEXT_H323 = MIME_TYPE_TEXT_H323(),
  TEXT_HTML = MIME_TYPE_TEXT_HTML(),
  TEXT_IULS = MIME_TYPE_TEXT_IULS(),
  TEXT_PLAIN = MIME_TYPE_TEXT_PLAIN(),
  TEXT_RICHTEXT = MIME_TYPE_TEXT_RICHTEXT(),
  TEXT_SCRIPTLET = MIME_TYPE_TEXT_SCRIPTLET(),
  TEXT_WEBVIEWHTML = MIME_TYPE_TEXT_WEBVIEWHTML(),
  TEXT_X_COMPONENT = MIME_TYPE_TEXT_X_COMPONENT(),
  TEXT_X_SETEXT = MIME_TYPE_TEXT_X_SETEXT(),
  TEXT_X_VCARD = MIME_TYPE_TEXT_X_VCARD(),
  VIDEO_MPEG = MIME_TYPE_VIDEO_MPEG(),
  VIDEO_QUICKTIME = MIME_TYPE_VIDEO_QUICKTIME(),
  VIDEO_X_MSVIDEO = MIME_TYPE_VIDEO_X_MSVIDEO(),
};

class TIdleManager {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
}

enum TIndicatorDefaultPaint {
  AUTO = INDICATOR_DEFAULT_PAINT_AUTO(),
  FILL_DOT = INDICATOR_DEFAULT_PAINT_FILL_DOT(),
  STROKE_DOT = INDICATOR_DEFAULT_PAINT_STROKE_DOT(),
  FILL_RECT = INDICATOR_DEFAULT_PAINT_FILL_RECT(),
  STROKE_RECT = INDICATOR_DEFAULT_PAINT_STROKE_RECT(),
};

class TFsFile {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
}

class TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static cast(event : TEvent) : TEvent  {
    return new TEvent(event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  static create(type : number) : TEvent  {
    return new TEvent(event_create(type));
  }
  
  destroy() : TRet  {
    return event_destroy(this.nativeObj);
  }
  
  get type() : number {
    return event_t_get_prop_type(this.nativeObj);
  }
  
  get time() : number {
    return event_t_get_prop_time(this.nativeObj);
  }
  
  get target() : any {
    return event_t_get_prop_target(this.nativeObj);
  }
  
}

enum TEventBaseType {
  NONE = EVT_NONE(),
  PROP_WILL_CHANGE = EVT_PROP_WILL_CHANGE(),
  PROP_CHANGED = EVT_PROP_CHANGED(),
  ITEMS_WILL_CHANGE = EVT_ITEMS_WILL_CHANGE(),
  ITEMS_CHANGED = EVT_ITEMS_CHANGED(),
  PROPS_CHANGED = EVT_PROPS_CHANGED(),
  PROGRESS = EVT_PROGRESS(),
  DESTROY = EVT_DESTROY(),
};

class TEmitter {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static create() : TEmitter  {
    return new TEmitter(emitter_create());
  }
  
  dispatch(e : TEvent) : TRet  {
    return emitter_dispatch(this.nativeObj, e != null ? (e.nativeObj || e) : null);
  }
  
  dispatchSimpleEvent(type : number) : TRet  {
    return emitter_dispatch_simple_event(this.nativeObj, type);
  }
  
  on(type : number, on_event : Function, ctx : any) : number  {
    return emitter_on(this.nativeObj, type, on_event, ctx);
  }
  
  onWithTag(type : number, on_event : Function, ctx : any, tag : number) : number  {
    return emitter_on_with_tag(this.nativeObj, type, on_event, ctx, tag);
  }
  
  off(id : number) : TRet  {
    return emitter_off(this.nativeObj, id);
  }
  
  enable() : TRet  {
    return emitter_enable(this.nativeObj);
  }
  
  disable() : TRet  {
    return emitter_disable(this.nativeObj);
  }
  
  size() : number  {
    return emitter_size(this.nativeObj);
  }
  
  destroy() : TRet  {
    return emitter_destroy(this.nativeObj);
  }
  
  static cast(emitter : TEmitter) : TEmitter  {
    return new TEmitter(emitter_cast(emitter != null ? (emitter.nativeObj || emitter) : null));
  }
  
}

enum TEasingType {
  LINEAR = EASING_LINEAR(),
  QUADRATIC_IN = EASING_QUADRATIC_IN(),
  QUADRATIC_OUT = EASING_QUADRATIC_OUT(),
  QUADRATIC_INOUT = EASING_QUADRATIC_INOUT(),
  CUBIC_IN = EASING_CUBIC_IN(),
  CUBIC_OUT = EASING_CUBIC_OUT(),
  SIN_IN = EASING_SIN_IN(),
  SIN_OUT = EASING_SIN_OUT(),
  SIN_INOUT = EASING_SIN_INOUT(),
  POW_IN = EASING_POW_IN(),
  POW_OUT = EASING_POW_OUT(),
  POW_INOUT = EASING_POW_INOUT(),
  CIRCULAR_IN = EASING_CIRCULAR_IN(),
  CIRCULAR_OUT = EASING_CIRCULAR_OUT(),
  CIRCULAR_INOUT = EASING_CIRCULAR_INOUT(),
  ELASTIC_IN = EASING_ELASTIC_IN(),
  ELASTIC_OUT = EASING_ELASTIC_OUT(),
  ELASTIC_INOUT = EASING_ELASTIC_INOUT(),
  BACK_IN = EASING_BACK_IN(),
  BACK_OUT = EASING_BACK_OUT(),
  BACK_INOUT = EASING_BACK_INOUT(),
  BOUNCE_IN = EASING_BOUNCE_IN(),
  BOUNCE_OUT = EASING_BOUNCE_OUT(),
  BOUNCE_INOUT = EASING_BOUNCE_INOUT(),
};

class TDateTime {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static create() : TDateTime  {
    return new TDateTime(date_time_create());
  }
  
  set() : TRet  {
    return date_time_set(this.nativeObj);
  }
  
  destroy() : TRet  {
    return date_time_destroy(this.nativeObj);
  }
  
  get second() : number {
    return date_time_t_get_prop_second(this.nativeObj);
  }
  
  get minute() : number {
    return date_time_t_get_prop_minute(this.nativeObj);
  }
  
  get hour() : number {
    return date_time_t_get_prop_hour(this.nativeObj);
  }
  
  get day() : number {
    return date_time_t_get_prop_day(this.nativeObj);
  }
  
  get wday() : number {
    return date_time_t_get_prop_wday(this.nativeObj);
  }
  
  get month() : number {
    return date_time_t_get_prop_month(this.nativeObj);
  }
  
  get year() : number {
    return date_time_t_get_prop_year(this.nativeObj);
  }
  
}

class TColor {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static create(r : number, b : number, g : number, a : number) : TColor  {
    return new TColor(color_create(r, b, g, a));
  }
  
  fromStr(str : string) : TColor  {
    return new TColor(color_from_str(this.nativeObj, str));
  }
  
  r() : number  {
    return color_r(this.nativeObj);
  }
  
  g() : number  {
    return color_g(this.nativeObj);
  }
  
  b() : number  {
    return color_b(this.nativeObj);
  }
  
  a() : number  {
    return color_a(this.nativeObj);
  }
  
  static cast(color : TColor) : TColor  {
    return new TColor(color_cast(color != null ? (color.nativeObj || color) : null));
  }
  
  destroy() : TRet  {
    return color_destroy(this.nativeObj);
  }
  
  set color(value : number) {
    color_t_set_prop_color(this.nativeObj, value);
  }
  
  get color() : number {
    return color_t_get_prop_color(this.nativeObj);
  }
  
}

class TAssetInfo {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  get type() : number {
    return asset_info_t_get_prop_type(this.nativeObj);
  }
  
  get subtype() : number {
    return asset_info_t_get_prop_subtype(this.nativeObj);
  }
  
  get isInRom() : number {
    return asset_info_t_get_prop_is_in_rom(this.nativeObj);
  }
  
  get size() : number {
    return asset_info_t_get_prop_size(this.nativeObj);
  }
  
  get refcount() : number {
    return asset_info_t_get_prop_refcount(this.nativeObj);
  }
  
  get name() : string {
    return asset_info_t_get_prop_name(this.nativeObj);
  }
  
}

enum TAssetType {
  NONE = ASSET_TYPE_NONE(),
  FONT = ASSET_TYPE_FONT(),
  IMAGE = ASSET_TYPE_IMAGE(),
  STYLE = ASSET_TYPE_STYLE(),
  UI = ASSET_TYPE_UI(),
  XML = ASSET_TYPE_XML(),
  STRINGS = ASSET_TYPE_STRINGS(),
  SCRIPT = ASSET_TYPE_SCRIPT(),
  DATA = ASSET_TYPE_DATA(),
};

class TAssetsManager {
  public nativeObj : any;
  constructor(nativeObj) {
    this.nativeObj = nativeObj;
  }
  
  static instance() : TAssetsManager  {
    return new TAssetsManager(assets_manager());
  }
  
  ref(type : TAssetType, name : string) : TAssetInfo  {
    return new TAssetInfo(assets_manager_ref(this.nativeObj, type, name));
  }
  
  unref(info : TAssetInfo) : TRet  {
    return assets_manager_unref(this.nativeObj, info != null ? (info.nativeObj || info) : null);
  }
  
}

class TColorComponent extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TColorComponent(color_component_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TTimeClock extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TTimeClock(time_clock_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TTimeClock(time_clock_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setHour(hour : number) : TRet  {
    return time_clock_set_hour(this.nativeObj, hour);
  }
  
  setMinute(minute : number) : TRet  {
    return time_clock_set_minute(this.nativeObj, minute);
  }
  
  setSecond(second : number) : TRet  {
    return time_clock_set_second(this.nativeObj, second);
  }
  
  setHourImage(hour : string) : TRet  {
    return time_clock_set_hour_image(this.nativeObj, hour);
  }
  
  setMinuteImage(minute_image : string) : TRet  {
    return time_clock_set_minute_image(this.nativeObj, minute_image);
  }
  
  setSecondImage(second_image : string) : TRet  {
    return time_clock_set_second_image(this.nativeObj, second_image);
  }
  
  setBgImage(bg_image : string) : TRet  {
    return time_clock_set_bg_image(this.nativeObj, bg_image);
  }
  
  setImage(image : string) : TRet  {
    return time_clock_set_image(this.nativeObj, image);
  }
  
  setHourAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return time_clock_set_hour_anchor(this.nativeObj, anchor_x, anchor_y);
  }
  
  setMinuteAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return time_clock_set_minute_anchor(this.nativeObj, anchor_x, anchor_y);
  }
  
  setSecondAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return time_clock_set_second_anchor(this.nativeObj, anchor_x, anchor_y);
  }
  
  get hour() : number {
    return time_clock_t_get_prop_hour(this.nativeObj);
  }
  
  get minute() : number {
    return time_clock_t_get_prop_minute(this.nativeObj);
  }
  
  get second() : number {
    return time_clock_t_get_prop_second(this.nativeObj);
  }
  
  get image() : string {
    return time_clock_t_get_prop_image(this.nativeObj);
  }
  
  get bgImage() : string {
    return time_clock_t_get_prop_bg_image(this.nativeObj);
  }
  
  get hourImage() : string {
    return time_clock_t_get_prop_hour_image(this.nativeObj);
  }
  
  get minuteImage() : string {
    return time_clock_t_get_prop_minute_image(this.nativeObj);
  }
  
  get secondImage() : string {
    return time_clock_t_get_prop_second_image(this.nativeObj);
  }
  
  get hourAnchorX() : string {
    return time_clock_t_get_prop_hour_anchor_x(this.nativeObj);
  }
  
  get hourAnchorY() : string {
    return time_clock_t_get_prop_hour_anchor_y(this.nativeObj);
  }
  
  get minuteAnchorX() : string {
    return time_clock_t_get_prop_minute_anchor_x(this.nativeObj);
  }
  
  get minuteAnchorY() : string {
    return time_clock_t_get_prop_minute_anchor_y(this.nativeObj);
  }
  
  get secondAnchorX() : string {
    return time_clock_t_get_prop_second_anchor_x(this.nativeObj);
  }
  
  get secondAnchorY() : string {
    return time_clock_t_get_prop_second_anchor_y(this.nativeObj);
  }
  
}

class TTextSelector extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TTextSelector(text_selector_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TTextSelector(text_selector_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  resetOptions() : TRet  {
    return text_selector_reset_options(this.nativeObj);
  }
  
  countOptions() : number  {
    return text_selector_count_options(this.nativeObj);
  }
  
  appendOption(value : number, text : string) : TRet  {
    return text_selector_append_option(this.nativeObj, value, text);
  }
  
  setOptions(options : string) : TRet  {
    return text_selector_set_options(this.nativeObj, options);
  }
  
  setRangeOptions(start : number, nr : number, step : number) : TRet  {
    return text_selector_set_range_options(this.nativeObj, start, nr, step);
  }
  
  getValue() : number  {
    return text_selector_get_value(this.nativeObj);
  }
  
  setValue(value : number) : TRet  {
    return text_selector_set_value(this.nativeObj, value);
  }
  
  getTextValue() : string  {
    return text_selector_get_text(this.nativeObj);
  }
  
  setText(text : string) : TRet  {
    return text_selector_set_text(this.nativeObj, text);
  }
  
  setSelectedIndex(index : number) : TRet  {
    return text_selector_set_selected_index(this.nativeObj, index);
  }
  
  setVisibleNr(visible_nr : number) : TRet  {
    return text_selector_set_visible_nr(this.nativeObj, visible_nr);
  }
  
  get visibleNr() : number {
    return text_selector_t_get_prop_visible_nr(this.nativeObj);
  }
  
  get selectedIndex() : number {
    return text_selector_t_get_prop_selected_index(this.nativeObj);
  }
  
  get options() : string {
    return text_selector_t_get_prop_options(this.nativeObj);
  }
  
}

class TSwitch extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSwitch(switch_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setValue(value : number) : TRet  {
    return switch_set_value(this.nativeObj, value);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TSwitch(switch_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get value() : number {
    return switch_t_get_prop_value(this.nativeObj);
  }
  
  get maxXoffsetRatio() : number {
    return switch_t_get_prop_max_xoffset_ratio(this.nativeObj);
  }
  
}

class TPropChangeEvent extends TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(event : TEvent) : TPropChangeEvent  {
    return new TPropChangeEvent(prop_change_event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  get name() : string {
    return prop_change_event_t_get_prop_name(this.nativeObj);
  }
  
  get value() : TValue {
    return new TValue(prop_change_event_t_get_prop_value(this.nativeObj));
  }
  
}

class TProgressEvent extends TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(event : TEvent) : TProgressEvent  {
    return new TProgressEvent(progress_event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  get percent() : number {
    return progress_event_t_get_prop_percent(this.nativeObj);
  }
  
}

class TView extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TView(view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TView(view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TSlideView extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSlideView(slide_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TSlideView(slide_view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setAutoPlay(auto_play : number) : TRet  {
    return slide_view_set_auto_play(this.nativeObj, auto_play);
  }
  
  setActive(index : number) : TRet  {
    return slide_view_set_active(this.nativeObj, index);
  }
  
  setVertical(vertical : number) : TRet  {
    return slide_view_set_vertical(this.nativeObj, vertical);
  }
  
  setAnimHint(anim_hint : string) : TRet  {
    return slide_view_set_anim_hint(this.nativeObj, anim_hint);
  }
  
  setLoop(loop : number) : TRet  {
    return slide_view_set_loop(this.nativeObj, loop);
  }
  
  get vertical() : number {
    return slide_view_t_get_prop_vertical(this.nativeObj);
  }
  
  get autoPlay() : number {
    return slide_view_t_get_prop_auto_play(this.nativeObj);
  }
  
  get loop() : number {
    return slide_view_t_get_prop_loop(this.nativeObj);
  }
  
  get animHint() : string {
    return slide_view_t_get_prop_anim_hint(this.nativeObj);
  }
  
}

class TSlideIndicator extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSlideIndicator(slide_indicator_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static createLinear(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSlideIndicator(slide_indicator_create_linear(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static createArc(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSlideIndicator(slide_indicator_create_arc(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TSlideIndicator(slide_indicator_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setValue(value : number) : TRet  {
    return slide_indicator_set_value(this.nativeObj, value);
  }
  
  setMax(max : number) : TRet  {
    return slide_indicator_set_max(this.nativeObj, max);
  }
  
  setDefaultPaint(default_paint : TIndicatorDefaultPaint) : TRet  {
    return slide_indicator_set_default_paint(this.nativeObj, default_paint);
  }
  
  setAutoHide(auto_hide : number) : TRet  {
    return slide_indicator_set_auto_hide(this.nativeObj, auto_hide);
  }
  
  setMargin(margin : number) : TRet  {
    return slide_indicator_set_margin(this.nativeObj, margin);
  }
  
  setSpacing(spacing : number) : TRet  {
    return slide_indicator_set_spacing(this.nativeObj, spacing);
  }
  
  setSize(size : number) : TRet  {
    return slide_indicator_set_size(this.nativeObj, size);
  }
  
  setAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return slide_indicator_set_anchor(this.nativeObj, anchor_x, anchor_y);
  }
  
  setIndicatedTarget(indicated_target : string) : TRet  {
    return slide_indicator_set_indicated_target(this.nativeObj, indicated_target);
  }
  
  get value() : number {
    return slide_indicator_t_get_prop_value(this.nativeObj);
  }
  
  get max() : number {
    return slide_indicator_t_get_prop_max(this.nativeObj);
  }
  
  get defaultPaint() : TIndicatorDefaultPaint {
    return slide_indicator_t_get_prop_default_paint(this.nativeObj);
  }
  
  get autoHide() : number {
    return slide_indicator_t_get_prop_auto_hide(this.nativeObj);
  }
  
  get margin() : number {
    return slide_indicator_t_get_prop_margin(this.nativeObj);
  }
  
  get spacing() : number {
    return slide_indicator_t_get_prop_spacing(this.nativeObj);
  }
  
  get size() : number {
    return slide_indicator_t_get_prop_size(this.nativeObj);
  }
  
  get anchorX() : number {
    return slide_indicator_t_get_prop_anchor_x(this.nativeObj);
  }
  
  get anchorY() : number {
    return slide_indicator_t_get_prop_anchor_y(this.nativeObj);
  }
  
  get indicatedTarget() : string {
    return slide_indicator_t_get_prop_indicated_target(this.nativeObj);
  }
  
}

class TSlideMenu extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSlideMenu(slide_menu_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TSlideMenu(slide_menu_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setValue(value : number) : TRet  {
    return slide_menu_set_value(this.nativeObj, value);
  }
  
  setAlignV(align_v : TAlignV) : TRet  {
    return slide_menu_set_align_v(this.nativeObj, align_v);
  }
  
  setMinScale(min_scale : number) : TRet  {
    return slide_menu_set_min_scale(this.nativeObj, min_scale);
  }
  
  get value() : number {
    return slide_menu_t_get_prop_value(this.nativeObj);
  }
  
  get alignV() : TAlignV {
    return slide_menu_t_get_prop_align_v(this.nativeObj);
  }
  
  get minScale() : number {
    return slide_menu_t_get_prop_min_scale(this.nativeObj);
  }
  
}

class TScrollView extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TScrollView(scroll_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TScrollView(scroll_view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setVirtualW(w : number) : TRet  {
    return scroll_view_set_virtual_w(this.nativeObj, w);
  }
  
  setVirtualH(h : number) : TRet  {
    return scroll_view_set_virtual_h(this.nativeObj, h);
  }
  
  setXslidable(xslidable : number) : TRet  {
    return scroll_view_set_xslidable(this.nativeObj, xslidable);
  }
  
  setYslidable(yslidable : number) : TRet  {
    return scroll_view_set_yslidable(this.nativeObj, yslidable);
  }
  
  setOffset(xoffset : number, yoffset : number) : TRet  {
    return scroll_view_set_offset(this.nativeObj, xoffset, yoffset);
  }
  
  scrollTo(xoffset_end : number, yoffset_end : number, duration : number) : TRet  {
    return scroll_view_scroll_to(this.nativeObj, xoffset_end, yoffset_end, duration);
  }
  
  scrollDeltaTo(xoffset_delta : number, yoffset_delta : number, duration : number) : TRet  {
    return scroll_view_scroll_delta_to(this.nativeObj, xoffset_delta, yoffset_delta, duration);
  }
  
  get virtualW() : number {
    return scroll_view_t_get_prop_virtual_w(this.nativeObj);
  }
  
  get virtualH() : number {
    return scroll_view_t_get_prop_virtual_h(this.nativeObj);
  }
  
  get xoffset() : number {
    return scroll_view_t_get_prop_xoffset(this.nativeObj);
  }
  
  get yoffset() : number {
    return scroll_view_t_get_prop_yoffset(this.nativeObj);
  }
  
  get xslidable() : number {
    return scroll_view_t_get_prop_xslidable(this.nativeObj);
  }
  
  get yslidable() : number {
    return scroll_view_t_get_prop_yslidable(this.nativeObj);
  }
  
}

class TScrollBar extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TScrollBar(scroll_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TScrollBar(scroll_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  static createMobile(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TScrollBar(scroll_bar_create_mobile(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static createDesktop(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TScrollBar(scroll_bar_create_desktop(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setParams(virtual_size : number, row : number) : TRet  {
    return scroll_bar_set_params(this.nativeObj, virtual_size, row);
  }
  
  scrollTo(value : number, duration : number) : TRet  {
    return scroll_bar_scroll_to(this.nativeObj, value, duration);
  }
  
  setValue(value : number) : TRet  {
    return scroll_bar_set_value(this.nativeObj, value);
  }
  
  addDelta(delta : number) : TRet  {
    return scroll_bar_add_delta(this.nativeObj, delta);
  }
  
  scrollDelta(delta : number) : TRet  {
    return scroll_bar_scroll_delta(this.nativeObj, delta);
  }
  
  setValueOnly(value : number) : TRet  {
    return scroll_bar_set_value_only(this.nativeObj, value);
  }
  
  isMobile() : number  {
    return scroll_bar_is_mobile(this.nativeObj);
  }
  
  get virtualSize() : number {
    return scroll_bar_t_get_prop_virtual_size(this.nativeObj);
  }
  
  get value() : number {
    return scroll_bar_t_get_prop_value(this.nativeObj);
  }
  
  get row() : number {
    return scroll_bar_t_get_prop_row(this.nativeObj);
  }
  
  get animatable() : number {
    return scroll_bar_t_get_prop_animatable(this.nativeObj);
  }
  
}

class TTabControl extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TTabControl(tab_control_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TTabControl(tab_control_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TListView extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TListView(list_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setItemHeight(item_height : number) : TRet  {
    return list_view_set_item_height(this.nativeObj, item_height);
  }
  
  setDefaultItemHeight(default_item_height : number) : TRet  {
    return list_view_set_default_item_height(this.nativeObj, default_item_height);
  }
  
  setAutoHideScrollBar(auto_hide_scroll_bar : number) : TRet  {
    return list_view_set_auto_hide_scroll_bar(this.nativeObj, auto_hide_scroll_bar);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TListView(list_view_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get itemHeight() : number {
    return list_view_t_get_prop_item_height(this.nativeObj);
  }
  
  get defaultItemHeight() : number {
    return list_view_t_get_prop_default_item_height(this.nativeObj);
  }
  
  get autoHideScrollBar() : number {
    return list_view_t_get_prop_auto_hide_scroll_bar(this.nativeObj);
  }
  
}

class TListViewH extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TListViewH(list_view_h_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setItemWidth(item_width : number) : TRet  {
    return list_view_h_set_item_width(this.nativeObj, item_width);
  }
  
  setSpacing(spacing : number) : TRet  {
    return list_view_h_set_spacing(this.nativeObj, spacing);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TListViewH(list_view_h_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get itemWidth() : number {
    return list_view_h_t_get_prop_item_width(this.nativeObj);
  }
  
  get spacing() : number {
    return list_view_h_t_get_prop_spacing(this.nativeObj);
  }
  
}

class TTabButton extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TTabButton(tab_button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TTabButton(tab_button_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setValue(value : number) : TRet  {
    return tab_button_set_value(this.nativeObj, value);
  }
  
  setIcon(name : string) : TRet  {
    return tab_button_set_icon(this.nativeObj, name);
  }
  
  setActiveIcon(name : string) : TRet  {
    return tab_button_set_active_icon(this.nativeObj, name);
  }
  
  get value() : number {
    return tab_button_t_get_prop_value(this.nativeObj);
  }
  
  get activeIcon() : string {
    return tab_button_t_get_prop_active_icon(this.nativeObj);
  }
  
  get icon() : string {
    return tab_button_t_get_prop_icon(this.nativeObj);
  }
  
}

class TTabButtonGroup extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TTabButtonGroup(tab_button_group_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setCompact(compact : number) : TRet  {
    return tab_button_group_set_compact(this.nativeObj, compact);
  }
  
  setScrollable(scrollable : number) : TRet  {
    return tab_button_group_set_scrollable(this.nativeObj, scrollable);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TTabButtonGroup(tab_button_group_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get compact() : number {
    return tab_button_group_t_get_prop_compact(this.nativeObj);
  }
  
  get scrollable() : number {
    return tab_button_group_t_get_prop_scrollable(this.nativeObj);
  }
  
}

class TListItem extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TListItem(list_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TListItem(list_item_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class THscrollLabel extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new THscrollLabel(hscroll_label_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setLull(lull : number) : TRet  {
    return hscroll_label_set_lull(this.nativeObj, lull);
  }
  
  setDuration(duration : number) : TRet  {
    return hscroll_label_set_duration(this.nativeObj, duration);
  }
  
  setOnlyFocus(only_focus : number) : TRet  {
    return hscroll_label_set_only_focus(this.nativeObj, only_focus);
  }
  
  setOnlyParentFocus(only_parent_focus : number) : TRet  {
    return hscroll_label_set_only_parent_focus(this.nativeObj, only_parent_focus);
  }
  
  setLoop(loop : number) : TRet  {
    return hscroll_label_set_loop(this.nativeObj, loop);
  }
  
  setYoyo(yoyo : number) : TRet  {
    return hscroll_label_set_yoyo(this.nativeObj, yoyo);
  }
  
  setEllipses(ellipses : number) : TRet  {
    return hscroll_label_set_ellipses(this.nativeObj, ellipses);
  }
  
  setXoffset(xoffset : number) : TRet  {
    return hscroll_label_set_xoffset(this.nativeObj, xoffset);
  }
  
  start() : TRet  {
    return hscroll_label_start(this.nativeObj);
  }
  
  stop() : TRet  {
    return hscroll_label_stop(this.nativeObj);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new THscrollLabel(hscroll_label_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get onlyFocus() : number {
    return hscroll_label_t_get_prop_only_focus(this.nativeObj);
  }
  
  get onlyParentFocus() : number {
    return hscroll_label_t_get_prop_only_parent_focus(this.nativeObj);
  }
  
  get loop() : number {
    return hscroll_label_t_get_prop_loop(this.nativeObj);
  }
  
  get yoyo() : number {
    return hscroll_label_t_get_prop_yoyo(this.nativeObj);
  }
  
  get ellipses() : number {
    return hscroll_label_t_get_prop_ellipses(this.nativeObj);
  }
  
  get lull() : number {
    return hscroll_label_t_get_prop_lull(this.nativeObj);
  }
  
  get duration() : number {
    return hscroll_label_t_get_prop_duration(this.nativeObj);
  }
  
  get xoffset() : number {
    return hscroll_label_t_get_prop_xoffset(this.nativeObj);
  }
  
  get textW() : number {
    return hscroll_label_t_get_prop_text_w(this.nativeObj);
  }
  
}

class TRichText extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TRichText(rich_text_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setText(text : string) : TRet  {
    return rich_text_set_text(this.nativeObj, text);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TRichText(rich_text_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get lineGap() : number {
    return rich_text_t_get_prop_line_gap(this.nativeObj);
  }
  
}

class TProgressCircle extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TProgressCircle(progress_circle_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TProgressCircle(progress_circle_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setValue(value : number) : TRet  {
    return progress_circle_set_value(this.nativeObj, value);
  }
  
  setMax(max : number) : TRet  {
    return progress_circle_set_max(this.nativeObj, max);
  }
  
  setLineWidth(line_width : number) : TRet  {
    return progress_circle_set_line_width(this.nativeObj, line_width);
  }
  
  setStartAngle(start_angle : number) : TRet  {
    return progress_circle_set_start_angle(this.nativeObj, start_angle);
  }
  
  setUnit(unit : string) : TRet  {
    return progress_circle_set_unit(this.nativeObj, unit);
  }
  
  setShowText(show_text : number) : TRet  {
    return progress_circle_set_show_text(this.nativeObj, show_text);
  }
  
  setCounterClockWise(counter_clock_wise : number) : TRet  {
    return progress_circle_set_counter_clock_wise(this.nativeObj, counter_clock_wise);
  }
  
  get value() : number {
    return progress_circle_t_get_prop_value(this.nativeObj);
  }
  
  get max() : number {
    return progress_circle_t_get_prop_max(this.nativeObj);
  }
  
  get startAngle() : number {
    return progress_circle_t_get_prop_start_angle(this.nativeObj);
  }
  
  get lineWidth() : number {
    return progress_circle_t_get_prop_line_width(this.nativeObj);
  }
  
  get unit() : string {
    return progress_circle_t_get_prop_unit(this.nativeObj);
  }
  
  get counterClockWise() : number {
    return progress_circle_t_get_prop_counter_clock_wise(this.nativeObj);
  }
  
  get showText() : number {
    return progress_circle_t_get_prop_show_text(this.nativeObj);
  }
  
}

class TSlider extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSlider(slider_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TSlider(slider_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setValue(value : number) : TRet  {
    return slider_set_value(this.nativeObj, value);
  }
  
  setMin(min : number) : TRet  {
    return slider_set_min(this.nativeObj, min);
  }
  
  setMax(max : number) : TRet  {
    return slider_set_max(this.nativeObj, max);
  }
  
  setStep(step : number) : TRet  {
    return slider_set_step(this.nativeObj, step);
  }
  
  setBarSize(bar_size : number) : TRet  {
    return slider_set_bar_size(this.nativeObj, bar_size);
  }
  
  setVertical(vertical : number) : TRet  {
    return slider_set_vertical(this.nativeObj, vertical);
  }
  
  get value() : number {
    return slider_t_get_prop_value(this.nativeObj);
  }
  
  get min() : number {
    return slider_t_get_prop_min(this.nativeObj);
  }
  
  get max() : number {
    return slider_t_get_prop_max(this.nativeObj);
  }
  
  get step() : number {
    return slider_t_get_prop_step(this.nativeObj);
  }
  
  get vertical() : number {
    return slider_t_get_prop_vertical(this.nativeObj);
  }
  
  get barSize() : number {
    return slider_t_get_prop_bar_size(this.nativeObj);
  }
  
}

class TMledit extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TMledit(mledit_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setReadonly(readonly : number) : TRet  {
    return mledit_set_readonly(this.nativeObj, readonly);
  }
  
  setFocus(focus : number) : TRet  {
    return mledit_set_focus(this.nativeObj, focus);
  }
  
  setWrapWord(wrap_word : number) : TRet  {
    return mledit_set_wrap_word(this.nativeObj, wrap_word);
  }
  
  setMaxLines(max_lines : number) : TRet  {
    return mledit_set_max_lines(this.nativeObj, max_lines);
  }
  
  setInputTips(tips : string) : TRet  {
    return mledit_set_input_tips(this.nativeObj, tips);
  }
  
  setCursor(cursor : number) : TRet  {
    return mledit_set_cursor(this.nativeObj, cursor);
  }
  
  setScrollLine(scroll_line : number) : TRet  {
    return mledit_set_scroll_line(this.nativeObj, scroll_line);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TMledit(mledit_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get readonly() : number {
    return mledit_t_get_prop_readonly(this.nativeObj);
  }
  
  get tips() : string {
    return mledit_t_get_prop_tips(this.nativeObj);
  }
  
  get wrapWord() : number {
    return mledit_t_get_prop_wrap_word(this.nativeObj);
  }
  
  get maxLines() : number {
    return mledit_t_get_prop_max_lines(this.nativeObj);
  }
  
  get scrollLine() : number {
    return mledit_t_get_prop_scroll_line(this.nativeObj);
  }
  
}

class TRow extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TRow(row_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TRow(row_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TProgressBar extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TProgressBar(progress_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TProgressBar(progress_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setValue(value : number) : TRet  {
    return progress_bar_set_value(this.nativeObj, value);
  }
  
  setMax(max : number) : TRet  {
    return progress_bar_set_max(this.nativeObj, max);
  }
  
  setVertical(vertical : number) : TRet  {
    return progress_bar_set_vertical(this.nativeObj, vertical);
  }
  
  setShowText(show_text : number) : TRet  {
    return progress_bar_set_show_text(this.nativeObj, show_text);
  }
  
  getPercent() : number  {
    return progress_bar_get_percent(this.nativeObj);
  }
  
  get value() : number {
    return progress_bar_t_get_prop_value(this.nativeObj);
  }
  
  get max() : number {
    return progress_bar_t_get_prop_max(this.nativeObj);
  }
  
  get vertical() : number {
    return progress_bar_t_get_prop_vertical(this.nativeObj);
  }
  
  get showText() : number {
    return progress_bar_t_get_prop_show_text(this.nativeObj);
  }
  
}

class TObject extends TEmitter {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  unref() : TRet  {
    return object_unref(this.nativeObj);
  }
  
  static ref(obj : TObject) : TObject  {
    return new TObject(object_ref(obj != null ? (obj.nativeObj || obj) : null));
  }
  
  getType() : string  {
    return object_get_type(this.nativeObj);
  }
  
  getDesc() : string  {
    return object_get_desc(this.nativeObj);
  }
  
  getSize() : number  {
    return object_get_size(this.nativeObj);
  }
  
  isCollection() : number  {
    return object_is_collection(this.nativeObj);
  }
  
  setName(name : string) : TRet  {
    return object_set_name(this.nativeObj, name);
  }
  
  compare(other : TObject) : number  {
    return object_compare(this.nativeObj, other != null ? (other.nativeObj || other) : null);
  }
  
  getProp(name : string, v : TValue) : TRet  {
    return object_get_prop(this.nativeObj, name, v != null ? (v.nativeObj || v) : null);
  }
  
  getPropStr(name : string) : string  {
    return object_get_prop_str(this.nativeObj, name);
  }
  
  getPropPointer(name : string) : any  {
    return object_get_prop_pointer(this.nativeObj, name);
  }
  
  getPropObject(name : string) : TObject  {
    return new TObject(object_get_prop_object(this.nativeObj, name));
  }
  
  getPropInt(name : string, defval : number) : number  {
    return object_get_prop_int(this.nativeObj, name, defval);
  }
  
  getPropBool(name : string, defval : number) : number  {
    return object_get_prop_bool(this.nativeObj, name, defval);
  }
  
  getPropFloat(name : string, defval : number) : number  {
    return object_get_prop_float(this.nativeObj, name, defval);
  }
  
  removeProp(name : string) : TRet  {
    return object_remove_prop(this.nativeObj, name);
  }
  
  setProp(name : string, value : TValue) : TRet  {
    return object_set_prop(this.nativeObj, name, value != null ? (value.nativeObj || value) : null);
  }
  
  setPropStr(name : string, value : string) : TRet  {
    return object_set_prop_str(this.nativeObj, name, value);
  }
  
  setPropObject(name : string, value : TObject) : TRet  {
    return object_set_prop_object(this.nativeObj, name, value != null ? (value.nativeObj || value) : null);
  }
  
  setPropInt(name : string, value : number) : TRet  {
    return object_set_prop_int(this.nativeObj, name, value);
  }
  
  setPropBool(name : string, value : number) : TRet  {
    return object_set_prop_bool(this.nativeObj, name, value);
  }
  
  setPropFloat(name : string, value : number) : TRet  {
    return object_set_prop_float(this.nativeObj, name, value);
  }
  
  copyProp(src : TObject, name : string) : TRet  {
    return object_copy_prop(this.nativeObj, src != null ? (src.nativeObj || src) : null, name);
  }
  
  foreachProp(on_prop : Function, ctx : any) : TRet  {
    return object_foreach_prop(this.nativeObj, on_prop, ctx);
  }
  
  hasProp(name : string) : number  {
    return object_has_prop(this.nativeObj, name);
  }
  
  eval(expr : string, v : TValue) : TRet  {
    return object_eval(this.nativeObj, expr, v != null ? (v.nativeObj || v) : null);
  }
  
  canExec(name : string, args : string) : number  {
    return object_can_exec(this.nativeObj, name, args);
  }
  
  exec(name : string, args : string) : TRet  {
    return object_exec(this.nativeObj, name, args);
  }
  
  notifyChanged() : TRet  {
    return object_notify_changed(this.nativeObj);
  }
  
  getPropStrByPath(path : string) : string  {
    return object_get_prop_str_by_path(this.nativeObj, path);
  }
  
  getPropPointerByPath(path : string) : any  {
    return object_get_prop_pointer_by_path(this.nativeObj, path);
  }
  
  getPropObjectByPath(path : string) : TObject  {
    return new TObject(object_get_prop_object_by_path(this.nativeObj, path));
  }
  
  getPropIntByPath(path : string, defval : number) : number  {
    return object_get_prop_int_by_path(this.nativeObj, path, defval);
  }
  
  getPropBoolByPath(path : string, defval : number) : number  {
    return object_get_prop_bool_by_path(this.nativeObj, path, defval);
  }
  
  getPropFloatByPath(path : string, defval : number) : number  {
    return object_get_prop_float_by_path(this.nativeObj, path, defval);
  }
  
  get refCount() : number {
    return object_t_get_prop_ref_count(this.nativeObj);
  }
  
  get name() : string {
    return object_t_get_prop_name(this.nativeObj);
  }
  
}

class TPages extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TPages(pages_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TPages(pages_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setActive(index : number) : TRet  {
    return pages_set_active(this.nativeObj, index);
  }
  
  setActiveByName(name : string) : TRet  {
    return pages_set_active_by_name(this.nativeObj, name);
  }
  
  get active() : number {
    return pages_t_get_prop_active(this.nativeObj);
  }
  
}

class TLineNumber extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TLineNumber(line_number_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setTopMargin(top_margin : number) : TRet  {
    return line_number_set_top_margin(this.nativeObj, top_margin);
  }
  
  setBottomMargin(bottom_margin : number) : TRet  {
    return line_number_set_bottom_margin(this.nativeObj, bottom_margin);
  }
  
  setLineHeight(line_height : number) : TRet  {
    return line_number_set_line_height(this.nativeObj, line_height);
  }
  
  setYoffset(yoffset : number) : TRet  {
    return line_number_set_yoffset(this.nativeObj, yoffset);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TLineNumber(line_number_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TOverlay extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TOverlay(overlay_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TOverlay(overlay_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TImageValue extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TImageValue(image_value_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setImage(image : string) : TRet  {
    return image_value_set_image(this.nativeObj, image);
  }
  
  setFormat(format : string) : TRet  {
    return image_value_set_format(this.nativeObj, format);
  }
  
  setValue(value : number) : TRet  {
    return image_value_set_value(this.nativeObj, value);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TImageValue(image_value_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get image() : string {
    return image_value_t_get_prop_image(this.nativeObj);
  }
  
  get format() : string {
    return image_value_t_get_prop_format(this.nativeObj);
  }
  
  get value() : number {
    return image_value_t_get_prop_value(this.nativeObj);
  }
  
}

class TImageAnimation extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TImageAnimation(image_animation_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setLoop(loop : number) : TRet  {
    return image_animation_set_loop(this.nativeObj, loop);
  }
  
  setImage(image : string) : TRet  {
    return image_animation_set_image(this.nativeObj, image);
  }
  
  setInterval(interval : number) : TRet  {
    return image_animation_set_interval(this.nativeObj, interval);
  }
  
  setDelay(delay : number) : TRet  {
    return image_animation_set_delay(this.nativeObj, delay);
  }
  
  setAutoPlay(auto_play : number) : TRet  {
    return image_animation_set_auto_play(this.nativeObj, auto_play);
  }
  
  setSequence(sequence : string) : TRet  {
    return image_animation_set_sequence(this.nativeObj, sequence);
  }
  
  setRangeSequence(start_index : number, end_index : number) : TRet  {
    return image_animation_set_range_sequence(this.nativeObj, start_index, end_index);
  }
  
  play() : TRet  {
    return image_animation_play(this.nativeObj);
  }
  
  stop() : TRet  {
    return image_animation_stop(this.nativeObj);
  }
  
  pause() : TRet  {
    return image_animation_pause(this.nativeObj);
  }
  
  next() : TRet  {
    return image_animation_next(this.nativeObj);
  }
  
  setFormat(format : string) : TRet  {
    return image_animation_set_format(this.nativeObj, format);
  }
  
  setUnloadAfterPaint(unload_after_paint : number) : TRet  {
    return image_animation_set_unload_after_paint(this.nativeObj, unload_after_paint);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TImageAnimation(image_animation_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get image() : string {
    return image_animation_t_get_prop_image(this.nativeObj);
  }
  
  get sequence() : string {
    return image_animation_t_get_prop_sequence(this.nativeObj);
  }
  
  get startIndex() : number {
    return image_animation_t_get_prop_start_index(this.nativeObj);
  }
  
  get endIndex() : number {
    return image_animation_t_get_prop_end_index(this.nativeObj);
  }
  
  get loop() : number {
    return image_animation_t_get_prop_loop(this.nativeObj);
  }
  
  get autoPlay() : number {
    return image_animation_t_get_prop_auto_play(this.nativeObj);
  }
  
  get unloadAfterPaint() : number {
    return image_animation_t_get_prop_unload_after_paint(this.nativeObj);
  }
  
  get format() : string {
    return image_animation_t_get_prop_format(this.nativeObj);
  }
  
  get interval() : number {
    return image_animation_t_get_prop_interval(this.nativeObj);
  }
  
  get delay() : number {
    return image_animation_t_get_prop_delay(this.nativeObj);
  }
  
}

class TGuage extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TGuage(guage_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TGuage(guage_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setImage(name : string) : TRet  {
    return guage_set_image(this.nativeObj, name);
  }
  
  setDrawType(draw_type : TImageDrawType) : TRet  {
    return guage_set_draw_type(this.nativeObj, draw_type);
  }
  
  get image() : string {
    return guage_t_get_prop_image(this.nativeObj);
  }
  
  get drawType() : TImageDrawType {
    return guage_t_get_prop_draw_type(this.nativeObj);
  }
  
}

class TGuagePointer extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TGuagePointer(guage_pointer_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TGuagePointer(guage_pointer_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setAngle(angle : number) : TRet  {
    return guage_pointer_set_angle(this.nativeObj, angle);
  }
  
  setImage(image : string) : TRet  {
    return guage_pointer_set_image(this.nativeObj, image);
  }
  
  setAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return guage_pointer_set_anchor(this.nativeObj, anchor_x, anchor_y);
  }
  
  get angle() : number {
    return guage_pointer_t_get_prop_angle(this.nativeObj);
  }
  
  get image() : string {
    return guage_pointer_t_get_prop_image(this.nativeObj);
  }
  
  get anchorX() : number {
    return guage_pointer_t_get_prop_anchor_x(this.nativeObj);
  }
  
  get anchorY() : number {
    return guage_pointer_t_get_prop_anchor_y(this.nativeObj);
  }
  
}

class TLabel extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TLabel(label_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setLength(length : number) : TRet  {
    return label_set_length(this.nativeObj, length);
  }
  
  resizeToContent(min_w : number, max_w : number, min_h : number, max_h : number) : TRet  {
    return label_resize_to_content(this.nativeObj, min_w, max_w, min_h, max_h);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TLabel(label_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get length() : number {
    return label_t_get_prop_length(this.nativeObj);
  }
  
}

class TDraggable extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TDraggable(draggable_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TDraggable(draggable_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setTop(top : number) : TRet  {
    return draggable_set_top(this.nativeObj, top);
  }
  
  setBottom(bottom : number) : TRet  {
    return draggable_set_bottom(this.nativeObj, bottom);
  }
  
  setLeft(left : number) : TRet  {
    return draggable_set_left(this.nativeObj, left);
  }
  
  setRight(right : number) : TRet  {
    return draggable_set_right(this.nativeObj, right);
  }
  
  setVerticalOnly(vertical_only : number) : TRet  {
    return draggable_set_vertical_only(this.nativeObj, vertical_only);
  }
  
  setHorizontalOnly(horizontal_only : number) : TRet  {
    return draggable_set_horizontal_only(this.nativeObj, horizontal_only);
  }
  
  setDragWindow(drag_window : number) : TRet  {
    return draggable_set_drag_window(this.nativeObj, drag_window);
  }
  
  get top() : number {
    return draggable_t_get_prop_top(this.nativeObj);
  }
  
  get bottom() : number {
    return draggable_t_get_prop_bottom(this.nativeObj);
  }
  
  get left() : number {
    return draggable_t_get_prop_left(this.nativeObj);
  }
  
  get right() : number {
    return draggable_t_get_prop_right(this.nativeObj);
  }
  
  get verticalOnly() : number {
    return draggable_t_get_prop_vertical_only(this.nativeObj);
  }
  
  get horizontalOnly() : number {
    return draggable_t_get_prop_horizontal_only(this.nativeObj);
  }
  
  get dragWindow() : number {
    return draggable_t_get_prop_drag_window(this.nativeObj);
  }
  
}

class TGroupBox extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TGroupBox(group_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TGroupBox(group_box_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TColorPicker extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TColorPicker(color_picker_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setColor(color : string) : TRet  {
    return color_picker_set_color(this.nativeObj, color);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TColorPicker(color_picker_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get value() : string {
    return color_picker_t_get_prop_value(this.nativeObj);
  }
  
}

class TCanvasWidget extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TCanvasWidget(canvas_widget_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TCanvasWidget(canvas_widget_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TGrid extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TGrid(grid_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TGrid(grid_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TGridItem extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TGridItem(grid_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TGridItem(grid_item_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TWindowManager extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static instance() : TWidget  {
    return new TWindowManager(window_manager());
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TWindowManager(window_manager_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  getTopMainWindow() : TWidget  {
    return new TWidget(window_manager_get_top_main_window(this.nativeObj));
  }
  
  getTopWindow() : TWidget  {
    return new TWidget(window_manager_get_top_window(this.nativeObj));
  }
  
  getPrevWindow() : TWidget  {
    return new TWidget(window_manager_get_prev_window(this.nativeObj));
  }
  
  getPointerX() : number  {
    return window_manager_get_pointer_x(this.nativeObj);
  }
  
  getPointerY() : number  {
    return window_manager_get_pointer_y(this.nativeObj);
  }
  
  getPointerPressed() : number  {
    return window_manager_get_pointer_pressed(this.nativeObj);
  }
  
  setShowFps(show_fps : number) : TRet  {
    return window_manager_set_show_fps(this.nativeObj, show_fps);
  }
  
  setScreenSaverTime(screen_saver_time : number) : TRet  {
    return window_manager_set_screen_saver_time(this.nativeObj, screen_saver_time);
  }
  
  setCursor(cursor : string) : TRet  {
    return window_manager_set_cursor(this.nativeObj, cursor);
  }
  
  back() : TRet  {
    return window_manager_back(this.nativeObj);
  }
  
  backToHome() : TRet  {
    return window_manager_back_to_home(this.nativeObj);
  }
  
}

class TWindowBase extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TWindowBase(window_base_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get theme() : string {
    return window_base_t_get_prop_theme(this.nativeObj);
  }
  
  get closable() : TWindowClosable {
    return window_base_t_get_prop_closable(this.nativeObj);
  }
  
}

class TEdit extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TEdit(edit_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TEdit(edit_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  getInt() : number  {
    return edit_get_int(this.nativeObj);
  }
  
  getDouble() : number  {
    return edit_get_double(this.nativeObj);
  }
  
  setInt(value : number) : TRet  {
    return edit_set_int(this.nativeObj, value);
  }
  
  setDouble(value : number) : TRet  {
    return edit_set_double(this.nativeObj, value);
  }
  
  setTextLimit(min : number, max : number) : TRet  {
    return edit_set_text_limit(this.nativeObj, min, max);
  }
  
  setIntLimit(min : number, max : number, step : number) : TRet  {
    return edit_set_int_limit(this.nativeObj, min, max, step);
  }
  
  setFloatLimit(min : number, max : number, step : number) : TRet  {
    return edit_set_float_limit(this.nativeObj, min, max, step);
  }
  
  setReadonly(readonly : number) : TRet  {
    return edit_set_readonly(this.nativeObj, readonly);
  }
  
  setAutoFix(auto_fix : number) : TRet  {
    return edit_set_auto_fix(this.nativeObj, auto_fix);
  }
  
  setSelectNoneWhenFocused(select_none_when_focused : number) : TRet  {
    return edit_set_select_none_when_focused(this.nativeObj, select_none_when_focused);
  }
  
  setOpenImWhenFocused(open_im_when_focused : number) : TRet  {
    return edit_set_open_im_when_focused(this.nativeObj, open_im_when_focused);
  }
  
  setInputType(type : TInputType) : TRet  {
    return edit_set_input_type(this.nativeObj, type);
  }
  
  setInputTips(tips : string) : TRet  {
    return edit_set_input_tips(this.nativeObj, tips);
  }
  
  setPasswordVisible(password_visible : number) : TRet  {
    return edit_set_password_visible(this.nativeObj, password_visible);
  }
  
  setFocus(focus : number) : TRet  {
    return edit_set_focus(this.nativeObj, focus);
  }
  
  setCursor(cursor : number) : TRet  {
    return edit_set_cursor(this.nativeObj, cursor);
  }
  
  get readonly() : number {
    return edit_t_get_prop_readonly(this.nativeObj);
  }
  
  get passwordVisible() : number {
    return edit_t_get_prop_password_visible(this.nativeObj);
  }
  
  get autoFix() : number {
    return edit_t_get_prop_auto_fix(this.nativeObj);
  }
  
  get selectNoneWhenFocused() : number {
    return edit_t_get_prop_select_none_when_focused(this.nativeObj);
  }
  
  get openImWhenFocused() : number {
    return edit_t_get_prop_open_im_when_focused(this.nativeObj);
  }
  
  get tips() : string {
    return edit_t_get_prop_tips(this.nativeObj);
  }
  
  get inputType() : TInputType {
    return edit_t_get_prop_input_type(this.nativeObj);
  }
  
  get min() : number {
    return edit_t_get_prop_min(this.nativeObj);
  }
  
  get max() : number {
    return edit_t_get_prop_max(this.nativeObj);
  }
  
  get step() : number {
    return edit_t_get_prop_step(this.nativeObj);
  }
  
}

class TStyleMutable extends TStyle {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  setName(name : string) : TRet  {
    return style_mutable_set_name(this.nativeObj, name);
  }
  
  setInt(state : string, name : string, val : number) : TRet  {
    return style_mutable_set_int(this.nativeObj, state, name, val);
  }
  
  static cast(s : TStyle) : TStyle  {
    return new TStyleMutable(style_mutable_cast(s != null ? (s.nativeObj || s) : null));
  }
  
  static create(widget : TWidget, default_style : TStyle) : TStyle  {
    return new TStyleMutable(style_mutable_create(widget != null ? (widget.nativeObj || widget) : null, default_style != null ? (default_style.nativeObj || default_style) : null));
  }
  
  get name() : string {
    return style_mutable_t_get_prop_name(this.nativeObj);
  }
  
}

class TDragger extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TDragger(dragger_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TDragger(dragger_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setRange(x_min : number, y_min : number, x_max : number, y_max : number) : TWidget  {
    return new TWidget(dragger_set_range(this.nativeObj, x_min, y_min, x_max, y_max));
  }
  
  get xMin() : number {
    return dragger_t_get_prop_x_min(this.nativeObj);
  }
  
  get yMin() : number {
    return dragger_t_get_prop_y_min(this.nativeObj);
  }
  
  get xMax() : number {
    return dragger_t_get_prop_x_max(this.nativeObj);
  }
  
  get yMax() : number {
    return dragger_t_get_prop_y_max(this.nativeObj);
  }
  
}

class TImageBase extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  setImage(name : string) : TRet  {
    return image_base_set_image(this.nativeObj, name);
  }
  
  setRotation(rotation : number) : TRet  {
    return image_base_set_rotation(this.nativeObj, rotation);
  }
  
  setScale(scale_x : number, scale_y : number) : TRet  {
    return image_base_set_scale(this.nativeObj, scale_x, scale_y);
  }
  
  setAnchor(anchor_x : number, anchor_y : number) : TRet  {
    return image_base_set_anchor(this.nativeObj, anchor_x, anchor_y);
  }
  
  setSelected(selected : number) : TRet  {
    return image_base_set_selected(this.nativeObj, selected);
  }
  
  setSelectable(selectable : number) : TRet  {
    return image_base_set_selectable(this.nativeObj, selectable);
  }
  
  setClickable(clickable : number) : TRet  {
    return image_base_set_clickable(this.nativeObj, clickable);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TImageBase(image_base_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get image() : string {
    return image_base_t_get_prop_image(this.nativeObj);
  }
  
  get anchorX() : number {
    return image_base_t_get_prop_anchor_x(this.nativeObj);
  }
  
  get anchorY() : number {
    return image_base_t_get_prop_anchor_y(this.nativeObj);
  }
  
  get scaleX() : number {
    return image_base_t_get_prop_scale_x(this.nativeObj);
  }
  
  get scaleY() : number {
    return image_base_t_get_prop_scale_y(this.nativeObj);
  }
  
  get rotation() : number {
    return image_base_t_get_prop_rotation(this.nativeObj);
  }
  
  get clickable() : number {
    return image_base_t_get_prop_clickable(this.nativeObj);
  }
  
  get selectable() : number {
    return image_base_t_get_prop_selectable(this.nativeObj);
  }
  
  get selected() : number {
    return image_base_t_get_prop_selected(this.nativeObj);
  }
  
}

class TWindowEvent extends TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(event : TEvent) : TWindowEvent  {
    return new TWindowEvent(window_event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  get window() : TWidget {
    return new TWidget(window_event_t_get_prop_window(this.nativeObj));
  }
  
}

class TPaintEvent extends TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(event : TEvent) : TPaintEvent  {
    return new TPaintEvent(paint_event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  get c() : TCanvas {
    return new TCanvas(paint_event_t_get_prop_c(this.nativeObj));
  }
  
}

class TKeyEvent extends TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(event : TEvent) : TKeyEvent  {
    return new TKeyEvent(key_event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  get key() : number {
    return key_event_t_get_prop_key(this.nativeObj);
  }
  
  get alt() : number {
    return key_event_t_get_prop_alt(this.nativeObj);
  }
  
  get lalt() : number {
    return key_event_t_get_prop_lalt(this.nativeObj);
  }
  
  get ralt() : number {
    return key_event_t_get_prop_ralt(this.nativeObj);
  }
  
  get ctrl() : number {
    return key_event_t_get_prop_ctrl(this.nativeObj);
  }
  
  get lctrl() : number {
    return key_event_t_get_prop_lctrl(this.nativeObj);
  }
  
  get rctrl() : number {
    return key_event_t_get_prop_rctrl(this.nativeObj);
  }
  
  get shift() : number {
    return key_event_t_get_prop_shift(this.nativeObj);
  }
  
  get lshift() : number {
    return key_event_t_get_prop_lshift(this.nativeObj);
  }
  
  get rshift() : number {
    return key_event_t_get_prop_rshift(this.nativeObj);
  }
  
  get cmd() : number {
    return key_event_t_get_prop_cmd(this.nativeObj);
  }
  
  get menu() : number {
    return key_event_t_get_prop_menu(this.nativeObj);
  }
  
  get capslock() : number {
    return key_event_t_get_prop_capslock(this.nativeObj);
  }
  
}

class TPointerEvent extends TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(event : TEvent) : TPointerEvent  {
    return new TPointerEvent(pointer_event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  get x() : number {
    return pointer_event_t_get_prop_x(this.nativeObj);
  }
  
  get y() : number {
    return pointer_event_t_get_prop_y(this.nativeObj);
  }
  
  get button() : number {
    return pointer_event_t_get_prop_button(this.nativeObj);
  }
  
  get pressed() : number {
    return pointer_event_t_get_prop_pressed(this.nativeObj);
  }
  
  get alt() : number {
    return pointer_event_t_get_prop_alt(this.nativeObj);
  }
  
  get ctrl() : number {
    return pointer_event_t_get_prop_ctrl(this.nativeObj);
  }
  
  get cmd() : number {
    return pointer_event_t_get_prop_cmd(this.nativeObj);
  }
  
  get menu() : number {
    return pointer_event_t_get_prop_menu(this.nativeObj);
  }
  
  get shift() : number {
    return pointer_event_t_get_prop_shift(this.nativeObj);
  }
  
}

class TOrientationEvent extends TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(event : TEvent) : TOrientationEvent  {
    return new TOrientationEvent(orientation_event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  get orientation() : number {
    return orientation_event_t_get_prop_orientation(this.nativeObj);
  }
  
}

class TWheelEvent extends TEvent {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(event : TEvent) : TWheelEvent  {
    return new TWheelEvent(wheel_event_cast(event != null ? (event.nativeObj || event) : null));
  }
  
  get dy() : number {
    return wheel_event_t_get_prop_dy(this.nativeObj);
  }
  
  get alt() : number {
    return wheel_event_t_get_prop_alt(this.nativeObj);
  }
  
  get ctrl() : number {
    return wheel_event_t_get_prop_ctrl(this.nativeObj);
  }
  
  get shift() : number {
    return wheel_event_t_get_prop_shift(this.nativeObj);
  }
  
}

class TAppBar extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TAppBar(app_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TAppBar(app_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TButtonGroup extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TButtonGroup(button_group_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TButtonGroup(button_group_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TButton extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TButton(button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TButton(button_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setRepeat(repeat : number) : TRet  {
    return button_set_repeat(this.nativeObj, repeat);
  }
  
  setEnableLongPress(enable_long_press : number) : TRet  {
    return button_set_enable_long_press(this.nativeObj, enable_long_press);
  }
  
  get repeat() : number {
    return button_t_get_prop_repeat(this.nativeObj);
  }
  
  get enableLongPress() : number {
    return button_t_get_prop_enable_long_press(this.nativeObj);
  }
  
}

class TDigitClock extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TDigitClock(digit_clock_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TDigitClock(digit_clock_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setFormat(format : string) : TRet  {
    return digit_clock_set_format(this.nativeObj, format);
  }
  
  get format() : string {
    return digit_clock_t_get_prop_format(this.nativeObj);
  }
  
}

class TCheckButton extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TCheckButton(check_button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static createRadio(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TCheckButton(check_button_create_radio(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setValue(value : number) : TRet  {
    return check_button_set_value(this.nativeObj, value);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TCheckButton(check_button_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get value() : number {
    return check_button_t_get_prop_value(this.nativeObj);
  }
  
}

class TColorTile extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TColorTile(color_tile_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TColorTile(color_tile_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setBgColor(color : string) : TRet  {
    return color_tile_set_bg_color(this.nativeObj, color);
  }
  
  get bgColor() : string {
    return color_tile_t_get_prop_bg_color(this.nativeObj);
  }
  
  get borderColor() : string {
    return color_tile_t_get_prop_border_color(this.nativeObj);
  }
  
}

class TColumn extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TColumn(column_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TColumn(column_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TComboBoxItem extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TComboBoxItem(combo_box_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TComboBoxItem(combo_box_item_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setChecked(checked : number) : TRet  {
    return combo_box_item_set_checked(this.nativeObj, checked);
  }
  
  setValue(value : number) : TRet  {
    return combo_box_item_set_value(this.nativeObj, value);
  }
  
  get value() : number {
    return combo_box_item_t_get_prop_value(this.nativeObj);
  }
  
  get checked() : number {
    return combo_box_item_t_get_prop_checked(this.nativeObj);
  }
  
}

class TComboBox extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TComboBox(combo_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TComboBox(combo_box_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setOpenWindow(open_window : string) : TRet  {
    return combo_box_set_open_window(this.nativeObj, open_window);
  }
  
  resetOptions() : TRet  {
    return combo_box_reset_options(this.nativeObj);
  }
  
  countOptions() : number  {
    return combo_box_count_options(this.nativeObj);
  }
  
  setSelectedIndex(index : number) : TRet  {
    return combo_box_set_selected_index(this.nativeObj, index);
  }
  
  setLocalizeOptions(localize_options : number) : TRet  {
    return combo_box_set_localize_options(this.nativeObj, localize_options);
  }
  
  setValue(value : number) : TRet  {
    return combo_box_set_value(this.nativeObj, value);
  }
  
  setItemHeight(item_height : number) : TRet  {
    return combo_box_set_item_height(this.nativeObj, item_height);
  }
  
  appendOption(value : number, text : string) : TRet  {
    return combo_box_append_option(this.nativeObj, value, text);
  }
  
  setOptions(options : string) : TRet  {
    return combo_box_set_options(this.nativeObj, options);
  }
  
  getValue() : number  {
    return combo_box_get_value(this.nativeObj);
  }
  
  getTextValue() : string  {
    return combo_box_get_text(this.nativeObj);
  }
  
  get openWindow() : string {
    return combo_box_t_get_prop_open_window(this.nativeObj);
  }
  
  get selectedIndex() : number {
    return combo_box_t_get_prop_selected_index(this.nativeObj);
  }
  
  get value() : number {
    return combo_box_t_get_prop_value(this.nativeObj);
  }
  
  get localizeOptions() : number {
    return combo_box_t_get_prop_localize_options(this.nativeObj);
  }
  
  get options() : string {
    return combo_box_t_get_prop_options(this.nativeObj);
  }
  
  get itemHeight() : number {
    return combo_box_t_get_prop_item_height(this.nativeObj);
  }
  
}

class TDialogClient extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TDialogClient(dialog_client_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TDialogClient(dialog_client_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TDialogTitle extends TWidget {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TDialogTitle(dialog_title_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TDialogTitle(dialog_title_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TObjectDefault extends TObject {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create() : TObject  {
    return new TObjectDefault(object_default_create());
  }
  
  unref() : TRet  {
    return object_default_unref(this.nativeObj);
  }
  
  clearProps() : TRet  {
    return object_default_clear_props(this.nativeObj);
  }
  
  get propsSize() : number {
    return object_default_t_get_prop_props_size(this.nativeObj);
  }
  
}

class TWindow extends TWindowBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TWindow(window_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setFullscreen(fullscreen : number) : TRet  {
    return window_set_fullscreen(this.nativeObj, fullscreen);
  }
  
  static open(name : string) : TWidget  {
    return new TWindow(window_open(name));
  }
  
  static openAndClose(name : string, to_close : TWidget) : TWidget  {
    return new TWindow(window_open_and_close(name, to_close != null ? (to_close.nativeObj || to_close) : null));
  }
  
  close() : TRet  {
    return window_close(this.nativeObj);
  }
  
  closeForce() : TRet  {
    return window_close_force(this.nativeObj);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TWindow(window_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get fullscreen() : number {
    return window_t_get_prop_fullscreen(this.nativeObj);
  }
  
}

class TTimerInfo extends TObject {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(timer : TTimerInfo) : TTimerInfo  {
    return new TTimerInfo(timer_info_cast(timer != null ? (timer.nativeObj || timer) : null));
  }
  
  get ctx() : any {
    return timer_info_t_get_prop_ctx(this.nativeObj);
  }
  
  get id() : number {
    return timer_info_t_get_prop_id(this.nativeObj);
  }
  
  get now() : number {
    return timer_info_t_get_prop_now(this.nativeObj);
  }
  
}

class TComboBoxEx extends TComboBox {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TComboBoxEx(combo_box_ex_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
}

class TImage extends TImageBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TImage(image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setDrawType(draw_type : TImageDrawType) : TRet  {
    return image_set_draw_type(this.nativeObj, draw_type);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TImage(image_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  get drawType() : TImageDrawType {
    return image_t_get_prop_draw_type(this.nativeObj);
  }
  
}

class TGifImage extends TImageBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TGifImage(gif_image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TGifImage(gif_image_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TKeyboard extends TWindowBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TKeyboard(keyboard_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TKeyboard(keyboard_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TPopup extends TWindowBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TPopup(popup_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TPopup(popup_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  setCloseWhenClick(close_when_click : number) : TRet  {
    return popup_set_close_when_click(this.nativeObj, close_when_click);
  }
  
  setCloseWhenClickOutside(close_when_click_outside : number) : TRet  {
    return popup_set_close_when_click_outside(this.nativeObj, close_when_click_outside);
  }
  
  get closeWhenClick() : number {
    return popup_t_get_prop_close_when_click(this.nativeObj);
  }
  
  get closeWhenClickOutside() : number {
    return popup_t_get_prop_close_when_click_outside(this.nativeObj);
  }
  
}

class TObjectArray extends TObject {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create() : TObject  {
    return new TObjectArray(object_array_create());
  }
  
  unref() : TRet  {
    return object_array_unref(this.nativeObj);
  }
  
  clearProps() : TRet  {
    return object_array_clear_props(this.nativeObj);
  }
  
  get propsSize() : number {
    return object_array_t_get_prop_props_size(this.nativeObj);
  }
  
}

class TMutableImage extends TImageBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
}

class TSpinBox extends TEdit {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSpinBox(spin_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TSpinBox(spin_box_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TSystemBar extends TWindowBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSystemBar(system_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TSystemBar(system_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TIdleInfo extends TObject {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static cast(idle : TIdleInfo) : TIdleInfo  {
    return new TIdleInfo(idle_info_cast(idle != null ? (idle.nativeObj || idle) : null));
  }
  
  get ctx() : any {
    return idle_info_t_get_prop_ctx(this.nativeObj);
  }
  
  get id() : number {
    return idle_info_t_get_prop_id(this.nativeObj);
  }
  
}

class TSvgImage extends TImageBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TSvgImage(svg_image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  setImage(name : string) : TRet  {
    return svg_image_set_image(this.nativeObj, name);
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TSvgImage(svg_image_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
}

class TDialog extends TWindowBase {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
  static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TDialog(dialog_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static createSimple(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
    return new TDialog(dialog_create_simple(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
  }
  
  static cast(widget : TWidget) : TWidget  {
    return new TDialog(dialog_cast(widget != null ? (widget.nativeObj || widget) : null));
  }
  
  getTitle() : TWidget  {
    return new TWidget(dialog_get_title(this.nativeObj));
  }
  
  getClient() : TWidget  {
    return new TWidget(dialog_get_client(this.nativeObj));
  }
  
  static open(name : string) : TWidget  {
    return new TDialog(dialog_open(name));
  }
  
  setTitle(title : string) : TRet  {
    return dialog_set_title(this.nativeObj, title);
  }
  
  modal() : TRet  {
    return dialog_modal(this.nativeObj);
  }
  
  quit(code : number) : TRet  {
    return dialog_quit(this.nativeObj, code);
  }
  
  isQuited() : number  {
    return dialog_is_quited(this.nativeObj);
  }
  
  isModal() : number  {
    return dialog_is_modal(this.nativeObj);
  }
  
  static toast(text : string, duration : number) : TRet  {
    return dialog_toast(text, duration);
  }
  
  static info(title : string, text : string) : TRet  {
    return dialog_info(title, text);
  }
  
  static warn(title : string, text : string) : TRet  {
    return dialog_warn(title, text);
  }
  
  static confirm(title : string, text : string) : TRet  {
    return dialog_confirm(title, text);
  }
  
  get highlight() : string {
    return dialog_t_get_prop_highlight(this.nativeObj);
  }
  
}

class TWindowManagerDefault extends TWindowManager {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
}

class TWindowManagerSimple extends TWindowManager {
  public nativeObj : any;
  constructor(nativeObj) {
    super(nativeObj);
  }
  
}

