
export declare function print(str);
if(this['console'] === undefined) {
  this.console = {}
  this.console.log = function(str) {
      print(str);
  }
}
export declare function tk_quit() : TRet;
export declare function tk_get_pointer_x() : number;
export declare function tk_get_pointer_y() : number;
export declare function tk_is_pointer_pressed() : boolean;
export declare function bitmap_create() : TBitmap;
export declare function bitmap_create_ex(w : number, h : number, line_length : number, format : TBitmapFormat) : TBitmap;
export declare function bitmap_get_bpp(bitmap : TBitmap) : number;
export declare function bitmap_destroy(bitmap : TBitmap) : TRet;
export declare function bitmap_t_get_prop_w(nativeObj : any);
export declare function bitmap_t_get_prop_h(nativeObj : any);
export declare function bitmap_t_get_prop_line_length(nativeObj : any);
export declare function bitmap_t_get_prop_flags(nativeObj : any);
export declare function bitmap_t_get_prop_format(nativeObj : any);
export declare function bitmap_t_get_prop_name(nativeObj : any);
export declare function IMAGE_DRAW_DEFAULT();
export declare function IMAGE_DRAW_CENTER();
export declare function IMAGE_DRAW_ICON();
export declare function IMAGE_DRAW_SCALE();
export declare function IMAGE_DRAW_SCALE_AUTO();
export declare function IMAGE_DRAW_SCALE_DOWN();
export declare function IMAGE_DRAW_SCALE_W();
export declare function IMAGE_DRAW_SCALE_H();
export declare function IMAGE_DRAW_REPEAT();
export declare function IMAGE_DRAW_REPEAT_X();
export declare function IMAGE_DRAW_REPEAT_Y();
export declare function IMAGE_DRAW_REPEAT_Y_INVERSE();
export declare function IMAGE_DRAW_PATCH9();
export declare function IMAGE_DRAW_PATCH3_X();
export declare function IMAGE_DRAW_PATCH3_Y();
export declare function IMAGE_DRAW_PATCH3_X_SCALE_Y();
export declare function IMAGE_DRAW_PATCH3_Y_SCALE_X();
export declare function canvas_get_width(c : TCanvas) : number;
export declare function canvas_get_height(c : TCanvas) : number;
export declare function canvas_get_clip_rect(c : TCanvas, r : TRect) : TRet;
export declare function canvas_set_clip_rect(c : TCanvas, r : TRect) : TRet;
export declare function canvas_set_clip_rect_ex(c : TCanvas, r : TRect, translate : boolean) : TRet;
export declare function canvas_set_fill_color_str(c : TCanvas, color : string) : TRet;
export declare function canvas_set_text_color_str(c : TCanvas, color : string) : TRet;
export declare function canvas_set_stroke_color_str(c : TCanvas, color : string) : TRet;
export declare function canvas_set_global_alpha(c : TCanvas, alpha : number) : TRet;
export declare function canvas_translate(c : TCanvas, dx : number, dy : number) : TRet;
export declare function canvas_untranslate(c : TCanvas, dx : number, dy : number) : TRet;
export declare function canvas_draw_vline(c : TCanvas, x : number, y : number, h : number) : TRet;
export declare function canvas_draw_hline(c : TCanvas, x : number, y : number, w : number) : TRet;
export declare function canvas_fill_rect(c : TCanvas, x : number, y : number, w : number, h : number) : TRet;
export declare function canvas_stroke_rect(c : TCanvas, x : number, y : number, w : number, h : number) : TRet;
export declare function canvas_set_font(c : TCanvas, name : string, size : number) : TRet;
export declare function canvas_measure_utf8(c : TCanvas, str : string) : number;
export declare function canvas_draw_utf8(c : TCanvas, str : string, x : number, y : number) : TRet;
export declare function canvas_draw_utf8_in_rect(c : TCanvas, str : string, r : TRect) : TRet;
export declare function canvas_draw_icon(c : TCanvas, img : TBitmap, cx : number, cy : number) : TRet;
export declare function canvas_draw_image(c : TCanvas, img : TBitmap, src : TRect, dst : TRect) : TRet;
export declare function canvas_draw_image_ex(c : TCanvas, img : TBitmap, draw_type : TImageDrawType, dst : TRect) : TRet;
export declare function canvas_get_vgcanvas(c : TCanvas) : TVgcanvas;
export declare function canvas_cast(c : TCanvas) : TCanvas;
export declare function canvas_reset(c : TCanvas) : TRet;
export declare function canvas_t_get_prop_ox(nativeObj : any);
export declare function canvas_t_get_prop_oy(nativeObj : any);
export declare function canvas_t_get_prop_font_name(nativeObj : any);
export declare function canvas_t_get_prop_font_size(nativeObj : any);
export declare function canvas_t_get_prop_global_alpha(nativeObj : any);
export declare function CLIP_BOARD_DATA_TYPE_NONE();
export declare function CLIP_BOARD_DATA_TYPE_TEXT();
export declare function clip_board_set_text(text : string) : TRet;
export declare function clip_board_get_text() : string;
export declare function DIALOG_QUIT_NONE();
export declare function DIALOG_QUIT_OK();
export declare function DIALOG_QUIT_YES();
export declare function DIALOG_QUIT_CANCEL();
export declare function DIALOG_QUIT_NO();
export declare function DIALOG_QUIT_OTHER();
export declare function EVT_POINTER_DOWN();
export declare function EVT_POINTER_DOWN_BEFORE_CHILDREN();
export declare function EVT_POINTER_MOVE();
export declare function EVT_POINTER_MOVE_BEFORE_CHILDREN();
export declare function EVT_POINTER_UP();
export declare function EVT_POINTER_UP_BEFORE_CHILDREN();
export declare function EVT_WHEEL();
export declare function EVT_WHEEL_BEFORE_CHILDREN();
export declare function EVT_POINTER_DOWN_ABORT();
export declare function EVT_CONTEXT_MENU();
export declare function EVT_POINTER_ENTER();
export declare function EVT_POINTER_LEAVE();
export declare function EVT_LONG_PRESS();
export declare function EVT_CLICK();
export declare function EVT_FOCUS();
export declare function EVT_BLUR();
export declare function EVT_KEY_DOWN();
export declare function EVT_KEY_DOWN_BEFORE_CHILDREN();
export declare function EVT_KEY_REPEAT();
export declare function EVT_KEY_UP();
export declare function EVT_KEY_UP_BEFORE_CHILDREN();
export declare function EVT_WILL_MOVE();
export declare function EVT_MOVE();
export declare function EVT_WILL_RESIZE();
export declare function EVT_RESIZE();
export declare function EVT_WILL_MOVE_RESIZE();
export declare function EVT_MOVE_RESIZE();
export declare function EVT_VALUE_WILL_CHANGE();
export declare function EVT_VALUE_CHANGED();
export declare function EVT_VALUE_CHANGING();
export declare function EVT_PAINT();
export declare function EVT_BEFORE_PAINT();
export declare function EVT_AFTER_PAINT();
export declare function EVT_PAINT_DONE();
export declare function EVT_LOCALE_CHANGED();
export declare function EVT_ANIM_START();
export declare function EVT_ANIM_STOP();
export declare function EVT_ANIM_PAUSE();
export declare function EVT_ANIM_ONCE();
export declare function EVT_ANIM_END();
export declare function EVT_WINDOW_LOAD();
export declare function EVT_WINDOW_WILL_OPEN();
export declare function EVT_WINDOW_OPEN();
export declare function EVT_WINDOW_TO_BACKGROUND();
export declare function EVT_WINDOW_TO_FOREGROUND();
export declare function EVT_WINDOW_CLOSE();
export declare function EVT_REQUEST_CLOSE_WINDOW();
export declare function EVT_TOP_WINDOW_CHANGED();
export declare function EVT_IM_COMMIT();
export declare function EVT_IM_SHOW_CANDIDATES();
export declare function EVT_IM_ACTION();
export declare function EVT_IM_ACTION_INFO();
export declare function EVT_DRAG_START();
export declare function EVT_DRAG();
export declare function EVT_DRAG_END();
export declare function EVT_SCREEN_SAVER();
export declare function EVT_LOW_MEMORY();
export declare function EVT_OUT_OF_MEMORY();
export declare function EVT_ORIENTATION_WILL_CHANGED();
export declare function EVT_ORIENTATION_CHANGED();
export declare function EVT_WIDGET_CREATED();
export declare function EVT_REQUEST_QUIT_APP();
export declare function EVT_THEME_CHANGED();
export declare function EVT_REQ_START();
export declare function EVT_USER_START();
export declare function EVT_NONE();
export declare function EVT_PROP_WILL_CHANGE();
export declare function EVT_PROP_CHANGED();
export declare function EVT_ITEMS_WILL_CHANGE();
export declare function EVT_ITEMS_CHANGED();
export declare function EVT_PROPS_CHANGED();
export declare function EVT_PROGRESS();
export declare function EVT_DESTROY();
export declare function font_manager_unload_font(fm : TFontManager, name : string, size : number) : TRet;
export declare function font_manager_unload_all(fm : TFontManager) : TRet;
export declare function GLYPH_FMT_ALPHA();
export declare function GLYPH_FMT_MONO();
export declare function GLYPH_FMT_RGBA();
export declare function idle_add(on_idle : Function, ctx : any) : number;
export declare function idle_remove(idle_id : number) : TRet;
export declare function value_set_bool(v : TValue, value : any) : TValue;
export declare function value_bool(v : TValue) : boolean;
export declare function value_set_int8(v : TValue, value : any) : TValue;
export declare function value_int8(v : TValue) : number;
export declare function value_set_uint8(v : TValue, value : any) : TValue;
export declare function value_uint8(v : TValue) : number;
export declare function value_set_int16(v : TValue, value : any) : TValue;
export declare function value_int16(v : TValue) : number;
export declare function value_set_uint16(v : TValue, value : any) : TValue;
export declare function value_uint16(v : TValue) : number;
export declare function value_set_int32(v : TValue, value : any) : TValue;
export declare function value_int32(v : TValue) : number;
export declare function value_set_uint32(v : TValue, value : any) : TValue;
export declare function value_set_int64(v : TValue, value : any) : TValue;
export declare function value_int64(v : TValue) : number;
export declare function value_set_uint64(v : TValue, value : any) : TValue;
export declare function value_uint64(v : TValue) : number;
export declare function value_set_float(v : TValue, value : any) : TValue;
export declare function value_float32(v : TValue) : number;
export declare function value_set_double(v : TValue, value : any) : TValue;
export declare function value_double(v : TValue) : number;
export declare function value_dup_str(v : TValue, value : string) : TValue;
export declare function value_str(v : TValue) : string;
export declare function value_is_null(value : TValue) : boolean;
export declare function value_set_int(v : TValue, value : any) : TValue;
export declare function value_set_object(v : TValue, value : TObject) : TValue;
export declare function value_object(v : TValue) : TObject;
export declare function value_set_token(v : TValue, value : any) : TValue;
export declare function value_token(v : TValue) : number;
export declare function value_create() : TValue;
export declare function value_destroy(v : TValue) : TRet;
export declare function value_reset(v : TValue) : TRet;
export declare function value_cast(value : TValue) : TValue;
export declare function image_manager() : TImageManager;
export declare function image_manager_get_bitmap(imm : TImageManager, name : string, image : TBitmap) : TRet;
export declare function INPUT_TEXT();
export declare function INPUT_INT();
export declare function INPUT_UINT();
export declare function INPUT_HEX();
export declare function INPUT_FLOAT();
export declare function INPUT_UFLOAT();
export declare function INPUT_EMAIL();
export declare function INPUT_PASSWORD();
export declare function INPUT_PHONE();
export declare function INPUT_CUSTOM();
export declare function VALUE_TYPE_INVALID();
export declare function VALUE_TYPE_BOOL();
export declare function VALUE_TYPE_INT8();
export declare function VALUE_TYPE_UINT8();
export declare function VALUE_TYPE_INT16();
export declare function VALUE_TYPE_UINT16();
export declare function VALUE_TYPE_INT32();
export declare function VALUE_TYPE_UINT32();
export declare function VALUE_TYPE_INT64();
export declare function VALUE_TYPE_UINT64();
export declare function VALUE_TYPE_POINTER();
export declare function VALUE_TYPE_FLOAT();
export declare function VALUE_TYPE_FLOAT32();
export declare function VALUE_TYPE_DOUBLE();
export declare function VALUE_TYPE_STRING();
export declare function VALUE_TYPE_WSTRING();
export declare function VALUE_TYPE_OBJECT();
export declare function VALUE_TYPE_SIZED_STRING();
export declare function VALUE_TYPE_BINARY();
export declare function VALUE_TYPE_UBJSON();
export declare function VALUE_TYPE_TOKEN();
export declare function input_method_commit_text(im : TInputMethod, text : string) : TRet;
export declare function input_method_dispatch_key(im : TInputMethod, key : number) : TRet;
export declare function input_method() : TInputMethod;
export declare function TK_KEY_RETURN();
export declare function TK_KEY_ESCAPE();
export declare function TK_KEY_BACKSPACE();
export declare function TK_KEY_TAB();
export declare function TK_KEY_SPACE();
export declare function TK_KEY_EXCLAIM();
export declare function TK_KEY_QUOTEDBL();
export declare function TK_KEY_HASH();
export declare function TK_KEY_PERCENT();
export declare function TK_KEY_DOLLAR();
export declare function TK_KEY_AMPERSAND();
export declare function TK_KEY_QUOTE();
export declare function TK_KEY_LEFTPAREN();
export declare function TK_KEY_RIGHTPAREN();
export declare function TK_KEY_ASTERISK();
export declare function TK_KEY_PLUS();
export declare function TK_KEY_COMMA();
export declare function TK_KEY_MINUS();
export declare function TK_KEY_PERIOD();
export declare function TK_KEY_SLASH();
export declare function TK_KEY_0();
export declare function TK_KEY_1();
export declare function TK_KEY_2();
export declare function TK_KEY_3();
export declare function TK_KEY_4();
export declare function TK_KEY_5();
export declare function TK_KEY_6();
export declare function TK_KEY_7();
export declare function TK_KEY_8();
export declare function TK_KEY_9();
export declare function TK_KEY_COLON();
export declare function TK_KEY_SEMICOLON();
export declare function TK_KEY_LESS();
export declare function TK_KEY_EQUAL();
export declare function TK_KEY_GREATER();
export declare function TK_KEY_QUESTION();
export declare function TK_KEY_AT();
export declare function TK_KEY_LEFTBRACKET();
export declare function TK_KEY_BACKSLASH();
export declare function TK_KEY_RIGHTBRACKET();
export declare function TK_KEY_CARET();
export declare function TK_KEY_UNDERSCORE();
export declare function TK_KEY_BACKQUOTE();
export declare function TK_KEY_a();
export declare function TK_KEY_b();
export declare function TK_KEY_c();
export declare function TK_KEY_d();
export declare function TK_KEY_e();
export declare function TK_KEY_f();
export declare function TK_KEY_g();
export declare function TK_KEY_h();
export declare function TK_KEY_i();
export declare function TK_KEY_j();
export declare function TK_KEY_k();
export declare function TK_KEY_l();
export declare function TK_KEY_m();
export declare function TK_KEY_n();
export declare function TK_KEY_o();
export declare function TK_KEY_p();
export declare function TK_KEY_q();
export declare function TK_KEY_r();
export declare function TK_KEY_s();
export declare function TK_KEY_t();
export declare function TK_KEY_u();
export declare function TK_KEY_v();
export declare function TK_KEY_w();
export declare function TK_KEY_x();
export declare function TK_KEY_y();
export declare function TK_KEY_z();
export declare function TK_KEY_A();
export declare function TK_KEY_B();
export declare function TK_KEY_C();
export declare function TK_KEY_D();
export declare function TK_KEY_E();
export declare function TK_KEY_F();
export declare function TK_KEY_G();
export declare function TK_KEY_H();
export declare function TK_KEY_I();
export declare function TK_KEY_J();
export declare function TK_KEY_K();
export declare function TK_KEY_L();
export declare function TK_KEY_M();
export declare function TK_KEY_N();
export declare function TK_KEY_O();
export declare function TK_KEY_P();
export declare function TK_KEY_Q();
export declare function TK_KEY_R();
export declare function TK_KEY_S();
export declare function TK_KEY_T();
export declare function TK_KEY_U();
export declare function TK_KEY_V();
export declare function TK_KEY_W();
export declare function TK_KEY_X();
export declare function TK_KEY_Y();
export declare function TK_KEY_Z();
export declare function TK_KEY_DOT();
export declare function TK_KEY_DELETE();
export declare function TK_KEY_LEFTBRACE();
export declare function TK_KEY_RIGHTBRACE();
export declare function TK_KEY_LSHIFT();
export declare function TK_KEY_RSHIFT();
export declare function TK_KEY_LCTRL();
export declare function TK_KEY_RCTRL();
export declare function TK_KEY_LALT();
export declare function TK_KEY_RALT();
export declare function TK_KEY_CAPSLOCK();
export declare function TK_KEY_HOME();
export declare function TK_KEY_END();
export declare function TK_KEY_INSERT();
export declare function TK_KEY_UP();
export declare function TK_KEY_DOWN();
export declare function TK_KEY_LEFT();
export declare function TK_KEY_RIGHT();
export declare function TK_KEY_PAGEUP();
export declare function TK_KEY_PAGEDOWN();
export declare function TK_KEY_F1();
export declare function TK_KEY_F2();
export declare function TK_KEY_F3();
export declare function TK_KEY_F4();
export declare function TK_KEY_F5();
export declare function TK_KEY_F6();
export declare function TK_KEY_F7();
export declare function TK_KEY_F8();
export declare function TK_KEY_F9();
export declare function TK_KEY_F10();
export declare function TK_KEY_F11();
export declare function TK_KEY_F12();
export declare function TK_KEY_MENU();
export declare function TK_KEY_COMMAND();
export declare function TK_KEY_BACK();
export declare function TK_KEY_CANCEL();
export declare function locale_info() : TLocaleInfo;
export declare function locale_info_tr(locale_info : TLocaleInfo, text : string) : string;
export declare function locale_info_change(locale_info : TLocaleInfo, language : string, country : string) : TRet;
export declare function locale_info_off(locale_info : TLocaleInfo, id : number) : TRet;
export declare function STYLE_ID_BG_COLOR();
export declare function STYLE_ID_FG_COLOR();
export declare function STYLE_ID_MASK_COLOR();
export declare function STYLE_ID_FONT_NAME();
export declare function STYLE_ID_FONT_SIZE();
export declare function STYLE_ID_FONT_STYLE();
export declare function STYLE_ID_TEXT_COLOR();
export declare function STYLE_ID_TIPS_TEXT_COLOR();
export declare function STYLE_ID_TEXT_ALIGN_H();
export declare function STYLE_ID_TEXT_ALIGN_V();
export declare function STYLE_ID_BORDER_COLOR();
export declare function STYLE_ID_BORDER_WIDTH();
export declare function STYLE_ID_BORDER();
export declare function STYLE_ID_BG_IMAGE();
export declare function STYLE_ID_BG_IMAGE_DRAW_TYPE();
export declare function STYLE_ID_ICON();
export declare function STYLE_ID_FG_IMAGE();
export declare function STYLE_ID_FG_IMAGE_DRAW_TYPE();
export declare function STYLE_ID_SPACER();
export declare function STYLE_ID_MARGIN();
export declare function STYLE_ID_MARGIN_LEFT();
export declare function STYLE_ID_MARGIN_RIGHT();
export declare function STYLE_ID_MARGIN_TOP();
export declare function STYLE_ID_MARGIN_BOTTOM();
export declare function STYLE_ID_ICON_AT();
export declare function STYLE_ID_ACTIVE_ICON();
export declare function STYLE_ID_X_OFFSET();
export declare function STYLE_ID_Y_OFFSET();
export declare function STYLE_ID_SELECTED_BG_COLOR();
export declare function STYLE_ID_SELECTED_FG_COLOR();
export declare function STYLE_ID_SELECTED_TEXT_COLOR();
export declare function STYLE_ID_ROUND_RADIUS();
export declare function style_notify_widget_state_changed(s : TStyle, widget : TWidget) : TRet;
export declare function style_is_valid(s : TStyle) : boolean;
export declare function style_get_int(s : TStyle, name : string, defval : number) : number;
export declare function style_get_str(s : TStyle, name : string, defval : string) : string;
export declare function style_set(s : TStyle, state : string, name : string, value : TValue) : TRet;
export declare function style_is_mutable(s : TStyle) : boolean;
export declare function theme() : TTheme;
export declare function timer_add(on_timer : Function, ctx : any, duration : number) : number;
export declare function timer_remove(timer_id : number) : TRet;
export declare function timer_reset(timer_id : number) : TRet;
export declare function timer_modify(timer_id : number, duration : number) : TRet;
export declare function ALIGN_V_NONE();
export declare function ALIGN_V_MIDDLE();
export declare function ALIGN_V_TOP();
export declare function ALIGN_V_BOTTOM();
export declare function ALIGN_H_NONE();
export declare function ALIGN_H_CENTER();
export declare function ALIGN_H_LEFT();
export declare function ALIGN_H_RIGHT();
export declare function APP_MOBILE();
export declare function APP_SIMULATOR();
export declare function APP_DESKTOP();
export declare function BITMAP_FMT_NONE();
export declare function BITMAP_FMT_RGBA8888();
export declare function BITMAP_FMT_ABGR8888();
export declare function BITMAP_FMT_BGRA8888();
export declare function BITMAP_FMT_ARGB8888();
export declare function BITMAP_FMT_RGB565();
export declare function BITMAP_FMT_BGR565();
export declare function BITMAP_FMT_RGB888();
export declare function BITMAP_FMT_BGR888();
export declare function BITMAP_FMT_GRAY();
export declare function BITMAP_FMT_MONO();
export declare function BITMAP_FLAG_NONE();
export declare function BITMAP_FLAG_OPAQUE();
export declare function BITMAP_FLAG_IMMUTABLE();
export declare function BITMAP_FLAG_TEXTURE();
export declare function BITMAP_FLAG_CHANGED();
export declare function BITMAP_FLAG_PREMULTI_ALPHA();
export declare function vgcanvas_cast(vg : TVgcanvas) : TVgcanvas;
export declare function vgcanvas_flush(vg : TVgcanvas) : TRet;
export declare function vgcanvas_begin_path(vg : TVgcanvas) : TRet;
export declare function vgcanvas_move_to(vg : TVgcanvas, x : number, y : number) : TRet;
export declare function vgcanvas_line_to(vg : TVgcanvas, x : number, y : number) : TRet;
export declare function vgcanvas_quad_to(vg : TVgcanvas, cpx : number, cpy : number, x : number, y : number) : TRet;
export declare function vgcanvas_bezier_to(vg : TVgcanvas, cp1x : number, cp1y : number, cp2x : number, cp2y : number, x : number, y : number) : TRet;
export declare function vgcanvas_arc_to(vg : TVgcanvas, x1 : number, y1 : number, x2 : number, y2 : number, r : number) : TRet;
export declare function vgcanvas_arc(vg : TVgcanvas, x : number, y : number, r : number, start_angle : number, end_angle : number, ccw : boolean) : TRet;
export declare function vgcanvas_is_point_in_path(vg : TVgcanvas, x : number, y : number) : boolean;
export declare function vgcanvas_rect(vg : TVgcanvas, x : number, y : number, w : number, h : number) : TRet;
export declare function vgcanvas_rounded_rect(vg : TVgcanvas, x : number, y : number, w : number, h : number, r : number) : TRet;
export declare function vgcanvas_ellipse(vg : TVgcanvas, x : number, y : number, rx : number, ry : number) : TRet;
export declare function vgcanvas_close_path(vg : TVgcanvas) : TRet;
export declare function vgcanvas_rotate(vg : TVgcanvas, rad : number) : TRet;
export declare function vgcanvas_scale(vg : TVgcanvas, x : number, y : number) : TRet;
export declare function vgcanvas_translate(vg : TVgcanvas, x : number, y : number) : TRet;
export declare function vgcanvas_transform(vg : TVgcanvas, a : number, b : number, c : number, d : number, e : number, f : number) : TRet;
export declare function vgcanvas_set_transform(vg : TVgcanvas, a : number, b : number, c : number, d : number, e : number, f : number) : TRet;
export declare function vgcanvas_clip_rect(vg : TVgcanvas, x : number, y : number, w : number, h : number) : TRet;
export declare function vgcanvas_fill(vg : TVgcanvas) : TRet;
export declare function vgcanvas_stroke(vg : TVgcanvas) : TRet;
export declare function vgcanvas_paint(vg : TVgcanvas, stroke : boolean, img : TBitmap) : TRet;
export declare function vgcanvas_set_font(vg : TVgcanvas, font : string) : TRet;
export declare function vgcanvas_set_font_size(vg : TVgcanvas, font : number) : TRet;
export declare function vgcanvas_set_text_align(vg : TVgcanvas, value : string) : TRet;
export declare function vgcanvas_set_text_baseline(vg : TVgcanvas, value : string) : TRet;
export declare function vgcanvas_fill_text(vg : TVgcanvas, text : string, x : number, y : number, max_width : number) : TRet;
export declare function vgcanvas_measure_text(vg : TVgcanvas, text : string) : number;
export declare function vgcanvas_draw_image(vg : TVgcanvas, img : TBitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet;
export declare function vgcanvas_draw_icon(vg : TVgcanvas, img : TBitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet;
export declare function vgcanvas_set_antialias(vg : TVgcanvas, value : any) : TRet;
export declare function vgcanvas_set_global_alpha(vg : TVgcanvas, alpha : number) : TRet;
export declare function vgcanvas_set_line_width(vg : TVgcanvas, value : any) : TRet;
export declare function vgcanvas_set_fill_color_str(vg : TVgcanvas, color : string) : TRet;
export declare function vgcanvas_set_stroke_color_str(vg : TVgcanvas, color : string) : TRet;
export declare function vgcanvas_set_line_cap(vg : TVgcanvas, value : string) : TRet;
export declare function vgcanvas_set_line_join(vg : TVgcanvas, value : string) : TRet;
export declare function vgcanvas_set_miter_limit(vg : TVgcanvas, value : any) : TRet;
export declare function vgcanvas_save(vg : TVgcanvas) : TRet;
export declare function vgcanvas_restore(vg : TVgcanvas) : TRet;
export declare function vgcanvas_t_get_prop_w(nativeObj : any);
export declare function vgcanvas_t_get_prop_h(nativeObj : any);
export declare function vgcanvas_t_get_prop_ratio(nativeObj : any);
export declare function vgcanvas_t_get_prop_anti_alias(nativeObj : any);
export declare function vgcanvas_t_get_prop_line_width(nativeObj : any);
export declare function vgcanvas_t_get_prop_global_alpha(nativeObj : any);
export declare function vgcanvas_t_get_prop_miter_limit(nativeObj : any);
export declare function vgcanvas_t_get_prop_line_cap(nativeObj : any);
export declare function vgcanvas_t_get_prop_line_join(nativeObj : any);
export declare function vgcanvas_t_get_prop_font(nativeObj : any);
export declare function vgcanvas_t_get_prop_font_size(nativeObj : any);
export declare function vgcanvas_t_get_prop_text_align(nativeObj : any);
export declare function vgcanvas_t_get_prop_text_baseline(nativeObj : any);
export declare function WIDGET_PROP_EXEC();
export declare function WIDGET_PROP_X();
export declare function WIDGET_PROP_Y();
export declare function WIDGET_PROP_W();
export declare function WIDGET_PROP_H();
export declare function WIDGET_PROP_CANVAS();
export declare function WIDGET_PROP_LOCALIZE_OPTIONS();
export declare function WIDGET_PROP_NATIVE_WINDOW();
export declare function WIDGET_PROP_HIGHLIGHT();
export declare function WIDGET_PROP_BAR_SIZE();
export declare function WIDGET_PROP_OPACITY();
export declare function WIDGET_PROP_MIN_W();
export declare function WIDGET_PROP_MAX_W();
export declare function WIDGET_PROP_CHILDREN_LAYOUT();
export declare function WIDGET_PROP_LAYOUT();
export declare function WIDGET_PROP_SELF_LAYOUT();
export declare function WIDGET_PROP_LAYOUT_W();
export declare function WIDGET_PROP_LAYOUT_H();
export declare function WIDGET_PROP_VIRTUAL_W();
export declare function WIDGET_PROP_VIRTUAL_H();
export declare function WIDGET_PROP_NAME();
export declare function WIDGET_PROP_TYPE();
export declare function WIDGET_PROP_CLOSABLE();
export declare function WIDGET_PROP_CURSOR();
export declare function WIDGET_PROP_VALUE();
export declare function WIDGET_PROP_LENGTH();
export declare function WIDGET_PROP_TEXT();
export declare function WIDGET_PROP_TR_TEXT();
export declare function WIDGET_PROP_STYLE();
export declare function WIDGET_PROP_ENABLE();
export declare function WIDGET_PROP_FEEDBACK();
export declare function WIDGET_PROP_FLOATING();
export declare function WIDGET_PROP_MARGIN();
export declare function WIDGET_PROP_SPACING();
export declare function WIDGET_PROP_LEFT_MARGIN();
export declare function WIDGET_PROP_RIGHT_MARGIN();
export declare function WIDGET_PROP_TOP_MARGIN();
export declare function WIDGET_PROP_BOTTOM_MARGIN();
export declare function WIDGET_PROP_STEP();
export declare function WIDGET_PROP_VISIBLE();
export declare function WIDGET_PROP_SENSITIVE();
export declare function WIDGET_PROP_ANIMATION();
export declare function WIDGET_PROP_ANIM_HINT();
export declare function WIDGET_PROP_FULLSCREEN();
export declare function WIDGET_PROP_OPEN_ANIM_HINT();
export declare function WIDGET_PROP_CLOSE_ANIM_HINT();
export declare function WIDGET_PROP_MIN();
export declare function WIDGET_PROP_TIPS();
export declare function WIDGET_PROP_INPUT_TYPE();
export declare function WIDGET_PROP_READONLY();
export declare function WIDGET_PROP_PASSWORD_VISIBLE();
export declare function WIDGET_PROP_ACTIVE();
export declare function WIDGET_PROP_VERTICAL();
export declare function WIDGET_PROP_SHOW_TEXT();
export declare function WIDGET_PROP_XOFFSET();
export declare function WIDGET_PROP_YOFFSET();
export declare function WIDGET_PROP_ALIGN_V();
export declare function WIDGET_PROP_ALIGN_H();
export declare function WIDGET_PROP_AUTO_PLAY();
export declare function WIDGET_PROP_LOOP();
export declare function WIDGET_PROP_AUTO_FIX();
export declare function WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED();
export declare function WIDGET_PROP_OPEN_IM_WHEN_FOCUSED();
export declare function WIDGET_PROP_X_MIN();
export declare function WIDGET_PROP_X_MAX();
export declare function WIDGET_PROP_Y_MIN();
export declare function WIDGET_PROP_Y_MAX();
export declare function WIDGET_PROP_MAX();
export declare function WIDGET_PROP_GRAB_KEYS();
export declare function WIDGET_PROP_ROW();
export declare function WIDGET_PROP_STATE_FOR_STYLE();
export declare function WIDGET_PROP_THEME();
export declare function WIDGET_PROP_STAGE();
export declare function WIDGET_PROP_IMAGE_MANAGER();
export declare function WIDGET_PROP_ASSETS_MANAGER();
export declare function WIDGET_PROP_LOCALE_INFO();
export declare function WIDGET_PROP_FONT_MANAGER();
export declare function WIDGET_PROP_THEME_OBJ();
export declare function WIDGET_PROP_DEFAULT_THEME_OBJ();
export declare function WIDGET_PROP_ITEM_WIDTH();
export declare function WIDGET_PROP_ITEM_HEIGHT();
export declare function WIDGET_PROP_DEFAULT_ITEM_HEIGHT();
export declare function WIDGET_PROP_XSLIDABLE();
export declare function WIDGET_PROP_YSLIDABLE();
export declare function WIDGET_PROP_REPEAT();
export declare function WIDGET_PROP_ENABLE_LONG_PRESS();
export declare function WIDGET_PROP_ANIMATABLE();
export declare function WIDGET_PROP_AUTO_HIDE_SCROLL_BAR();
export declare function WIDGET_PROP_IMAGE();
export declare function WIDGET_PROP_FORMAT();
export declare function WIDGET_PROP_DRAW_TYPE();
export declare function WIDGET_PROP_SELECTABLE();
export declare function WIDGET_PROP_CLICKABLE();
export declare function WIDGET_PROP_SCALE_X();
export declare function WIDGET_PROP_SCALE_Y();
export declare function WIDGET_PROP_ANCHOR_X();
export declare function WIDGET_PROP_ANCHOR_Y();
export declare function WIDGET_PROP_ROTATION();
export declare function WIDGET_PROP_COMPACT();
export declare function WIDGET_PROP_SCROLLABLE();
export declare function WIDGET_PROP_ICON();
export declare function WIDGET_PROP_OPTIONS();
export declare function WIDGET_PROP_SELECTED();
export declare function WIDGET_PROP_CHECKED();
export declare function WIDGET_PROP_ACTIVE_ICON();
export declare function WIDGET_PROP_OPEN_WINDOW();
export declare function WIDGET_PROP_SELECTED_INDEX();
export declare function WIDGET_PROP_CLOSE_WHEN_CLICK();
export declare function WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE();
export declare function WIDGET_PROP_LINE_GAP();
export declare function WIDGET_PROP_BG_COLOR();
export declare function WIDGET_PROP_BORDER_COLOR();
export declare function WIDGET_PROP_DELAY();
export declare function WIDGET_PROP_IS_KEYBOARD();
export declare function WIDGET_PROP_FOCUSED();
export declare function WIDGET_PROP_FOCUS();
export declare function WIDGET_PROP_FOCUSABLE();
export declare function WIDGET_PROP_WITH_FOCUS_STATE();
export declare function WIDGET_PROP_MOVE_FOCUS_PREV_KEY();
export declare function WIDGET_PROP_MOVE_FOCUS_NEXT_KEY();
export declare function WIDGET_PROP_MOVE_FOCUS_UP_KEY();
export declare function WIDGET_PROP_MOVE_FOCUS_DOWN_KEY();
export declare function WIDGET_PROP_MOVE_FOCUS_LEFT_KEY();
export declare function WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY();
export declare function WIDGET_TYPE_NONE();
export declare function WIDGET_TYPE_WINDOW_MANAGER();
export declare function WIDGET_TYPE_NORMAL_WINDOW();
export declare function WIDGET_TYPE_OVERLAY();
export declare function WIDGET_TYPE_TOOL_BAR();
export declare function WIDGET_TYPE_DIALOG();
export declare function WIDGET_TYPE_POPUP();
export declare function WIDGET_TYPE_SYSTEM_BAR();
export declare function WIDGET_TYPE_SYSTEM_BAR_BOTTOM();
export declare function WIDGET_TYPE_SPRITE();
export declare function WIDGET_TYPE_KEYBOARD();
export declare function WIDGET_TYPE_DND();
export declare function WIDGET_TYPE_LABEL();
export declare function WIDGET_TYPE_BUTTON();
export declare function WIDGET_TYPE_IMAGE();
export declare function WIDGET_TYPE_EDIT();
export declare function WIDGET_TYPE_PROGRESS_BAR();
export declare function WIDGET_TYPE_GROUP_BOX();
export declare function WIDGET_TYPE_CHECK_BUTTON();
export declare function WIDGET_TYPE_RADIO_BUTTON();
export declare function WIDGET_TYPE_DIALOG_TITLE();
export declare function WIDGET_TYPE_DIALOG_CLIENT();
export declare function WIDGET_TYPE_SLIDER();
export declare function WIDGET_TYPE_VIEW();
export declare function WIDGET_TYPE_COMBO_BOX();
export declare function WIDGET_TYPE_COMBO_BOX_ITEM();
export declare function WIDGET_TYPE_SLIDE_VIEW();
export declare function WIDGET_TYPE_SLIDE_INDICATOR();
export declare function WIDGET_TYPE_SLIDE_INDICATOR_ARC();
export declare function WIDGET_TYPE_PAGES();
export declare function WIDGET_TYPE_TAB_BUTTON();
export declare function WIDGET_TYPE_TAB_CONTROL();
export declare function WIDGET_TYPE_TAB_BUTTON_GROUP();
export declare function WIDGET_TYPE_BUTTON_GROUP();
export declare function WIDGET_TYPE_CANDIDATES();
export declare function WIDGET_TYPE_SPIN_BOX();
export declare function WIDGET_TYPE_DRAGGER();
export declare function WIDGET_TYPE_SCROLL_BAR();
export declare function WIDGET_TYPE_SCROLL_BAR_DESKTOP();
export declare function WIDGET_TYPE_SCROLL_BAR_MOBILE();
export declare function WIDGET_TYPE_SCROLL_VIEW();
export declare function WIDGET_TYPE_LIST_VIEW();
export declare function WIDGET_TYPE_LIST_VIEW_H();
export declare function WIDGET_TYPE_LIST_ITEM();
export declare function WIDGET_TYPE_COLOR_PICKER();
export declare function WIDGET_TYPE_COLOR_COMPONENT();
export declare function WIDGET_TYPE_COLOR_TILE();
export declare function WIDGET_TYPE_RICH_TEXT();
export declare function WIDGET_TYPE_APP_BAR();
export declare function WIDGET_TYPE_GRID();
export declare function WIDGET_TYPE_GRID_ITEM();
export declare function WIDGET_TYPE_ROW();
export declare function WIDGET_TYPE_COLUMN();
export declare function WIDGET_TYPE_CALIBRATION_WIN();
export declare function WINDOW_STAGE_NONE();
export declare function WINDOW_STAGE_CREATED();
export declare function WINDOW_STAGE_OPENED();
export declare function WINDOW_STAGE_CLOSED();
export declare function WINDOW_CLOSABLE_YES();
export declare function WINDOW_CLOSABLE_NO();
export declare function WINDOW_CLOSABLE_CONFIRM();
export declare function WIDGET_STATE_NONE();
export declare function WIDGET_STATE_NORMAL();
export declare function WIDGET_STATE_PRESSED();
export declare function WIDGET_STATE_OVER();
export declare function WIDGET_STATE_DISABLE();
export declare function WIDGET_STATE_FOCUSED();
export declare function WIDGET_STATE_CHECKED();
export declare function WIDGET_STATE_UNCHECKED();
export declare function WIDGET_STATE_EMPTY();
export declare function WIDGET_STATE_EMPTY_FOCUS();
export declare function WIDGET_STATE_ERROR();
export declare function WIDGET_STATE_SELECTED();
export declare function WIDGET_STATE_NORMAL_OF_CHECKED();
export declare function WIDGET_STATE_PRESSED_OF_CHECKED();
export declare function WIDGET_STATE_OVER_OF_CHECKED();
export declare function WIDGET_STATE_FOCUSED_OF_CHECKED();
export declare function WIDGET_STATE_NORMAL_OF_ACTIVE();
export declare function WIDGET_STATE_PRESSED_OF_ACTIVE();
export declare function WIDGET_STATE_OVER_OF_ACTIVE();
export declare function WIDGET_STATE_FOCUSED_OF_ACTIVE();
export declare function widget_count_children(widget : TWidget) : number;
export declare function widget_get_child(widget : TWidget, index : number) : TWidget;
export declare function widget_index_of(widget : TWidget) : number;
export declare function widget_move(widget : TWidget, x : number, y : number) : TRet;
export declare function widget_resize(widget : TWidget, w : number, h : number) : TRet;
export declare function widget_move_resize(widget : TWidget, x : number, y : number, w : number, h : number) : TRet;
export declare function widget_set_value(widget : TWidget, value : any) : TRet;
export declare function widget_animate_value_to(widget : TWidget, value : any, duration : number) : TRet;
export declare function widget_add_value(widget : TWidget, delta : number) : TRet;
export declare function widget_use_style(widget : TWidget, style : string) : TRet;
export declare function widget_set_text_utf8(widget : TWidget, text : string) : TRet;
export declare function widget_set_tr_text(widget : TWidget, text : string) : TRet;
export declare function widget_get_value(widget : TWidget) : number;
export declare function widget_get_text(widget : TWidget) : any;
export declare function widget_set_name(widget : TWidget, name : string) : TRet;
export declare function widget_set_theme(widget : TWidget, name : string) : TRet;
export declare function widget_set_pointer_cursor(widget : TWidget, cursor : string) : TRet;
export declare function widget_set_animation(widget : TWidget, animation : string) : TRet;
export declare function widget_create_animator(widget : TWidget, animation : string) : TRet;
export declare function widget_start_animator(widget : TWidget, name : string) : TRet;
export declare function widget_set_animator_time_scale(widget : TWidget, name : string, time_scale : number) : TRet;
export declare function widget_pause_animator(widget : TWidget, name : string) : TRet;
export declare function widget_stop_animator(widget : TWidget, name : string) : TRet;
export declare function widget_destroy_animator(widget : TWidget, name : string) : TRet;
export declare function widget_set_enable(widget : TWidget, enable : boolean) : TRet;
export declare function widget_set_feedback(widget : TWidget, feedback : boolean) : TRet;
export declare function widget_set_floating(widget : TWidget, floating : boolean) : TRet;
export declare function widget_set_focused(widget : TWidget, focused : boolean) : TRet;
export declare function widget_set_state(widget : TWidget, state : string) : TRet;
export declare function widget_set_opacity(widget : TWidget, opacity : number) : TRet;
export declare function widget_destroy_children(widget : TWidget) : TRet;
export declare function widget_add_child(widget : TWidget, child : TWidget) : TRet;
export declare function widget_remove_child(widget : TWidget, child : TWidget) : TRet;
export declare function widget_insert_child(widget : TWidget, index : number, child : TWidget) : TRet;
export declare function widget_restack(widget : TWidget, index : number) : TRet;
export declare function widget_child(widget : TWidget, name : string) : TWidget;
export declare function widget_lookup(widget : TWidget, name : string, recursive : boolean) : TWidget;
export declare function widget_lookup_by_type(widget : TWidget, type : string, recursive : boolean) : TWidget;
export declare function widget_set_visible(widget : TWidget, visible : boolean, recursive : boolean) : TRet;
export declare function widget_set_visible_only(widget : TWidget, visible : boolean) : TRet;
export declare function widget_set_sensitive(widget : TWidget, sensitive : boolean) : TRet;
export declare function widget_on(widget : TWidget, type : TEventType, on_event : Function, ctx : any) : number;
export declare function widget_off(widget : TWidget, id : number) : TRet;
export declare function widget_invalidate_force(widget : TWidget, r : TRect) : TRet;
export declare function widget_set_prop_str(widget : TWidget, name : string, v : string) : TRet;
export declare function widget_get_prop_str(widget : TWidget, name : string, defval : string) : string;
export declare function widget_set_prop_int(widget : TWidget, name : string, v : number) : TRet;
export declare function widget_get_prop_int(widget : TWidget, name : string, defval : number) : number;
export declare function widget_set_prop_bool(widget : TWidget, name : string, v : boolean) : TRet;
export declare function widget_get_prop_bool(widget : TWidget, name : string, defval : boolean) : boolean;
export declare function widget_is_window_opened(widget : TWidget) : boolean;
export declare function widget_is_window(widget : TWidget) : boolean;
export declare function widget_is_designing_window(widget : TWidget) : boolean;
export declare function widget_is_window_manager(widget : TWidget) : boolean;
export declare function widget_foreach(widget : TWidget, visit : Function, ctx : any) : TRet;
export declare function widget_get_window(widget : TWidget) : TWidget;
export declare function widget_get_window_manager(widget : TWidget) : TWidget;
export declare function widget_get_type(widget : TWidget) : string;
export declare function widget_clone(widget : TWidget, parent : TWidget) : TWidget;
export declare function widget_equal(widget : TWidget, other : TWidget) : boolean;
export declare function widget_cast(widget : TWidget) : TWidget;
export declare function widget_destroy(widget : TWidget) : TRet;
export declare function widget_unref(widget : TWidget) : TRet;
export declare function widget_layout(widget : TWidget) : TRet;
export declare function widget_set_self_layout(widget : TWidget, params : string) : TRet;
export declare function widget_set_children_layout(widget : TWidget, params : string) : TRet;
export declare function widget_set_self_layout_params(widget : TWidget, x : string, y : string, w : string, h : string) : TRet;
export declare function widget_set_style_int(widget : TWidget, state_and_name : string, value : any) : TRet;
export declare function widget_set_style_str(widget : TWidget, state_and_name : string, value : string) : TRet;
export declare function widget_set_style_color(widget : TWidget, state_and_name : string, value : any) : TRet;
export declare function widget_t_get_prop_x(nativeObj : any);
export declare function widget_t_get_prop_y(nativeObj : any);
export declare function widget_t_get_prop_w(nativeObj : any);
export declare function widget_t_get_prop_h(nativeObj : any);
export declare function widget_t_get_prop_name(nativeObj : any);
export declare function widget_t_get_prop_tr_text(nativeObj : any);
export declare function widget_t_get_prop_style(nativeObj : any);
export declare function widget_t_get_prop_animation(nativeObj : any);
export declare function widget_t_get_prop_enable(nativeObj : any);
export declare function widget_t_get_prop_feedback(nativeObj : any);
export declare function widget_t_get_prop_visible(nativeObj : any);
export declare function widget_t_set_prop_visible(nativeObj : any, v : boolean);
export declare function widget_t_get_prop_sensitive(nativeObj : any);
export declare function widget_t_set_prop_sensitive(nativeObj : any, v : boolean);
export declare function widget_t_get_prop_focusable(nativeObj : any);
export declare function widget_t_set_prop_focusable(nativeObj : any, v : boolean);
export declare function widget_t_get_prop_with_focus_state(nativeObj : any);
export declare function widget_t_set_prop_with_focus_state(nativeObj : any, v : boolean);
export declare function widget_t_get_prop_floating(nativeObj : any);
export declare function widget_t_get_prop_parent(nativeObj : any);
export declare function RET_OK();
export declare function RET_OOM();
export declare function RET_FAIL();
export declare function RET_NOT_IMPL();
export declare function RET_QUIT();
export declare function RET_FOUND();
export declare function RET_BUSY();
export declare function RET_REMOVE();
export declare function RET_REPEAT();
export declare function RET_NOT_FOUND();
export declare function RET_DONE();
export declare function RET_STOP();
export declare function RET_SKIP();
export declare function RET_CONTINUE();
export declare function RET_OBJECT_CHANGED();
export declare function RET_ITEMS_CHANGED();
export declare function RET_BAD_PARAMS();
export declare function RET_TIMEOUT();
export declare function RET_CRC();
export declare function RET_IO();
export declare function RET_EOS();
export declare function time_now_s() : number;
export declare function time_now_ms() : number;
export declare function rect_create(x : number, y : number, w : number, h : number) : TRect;
export declare function rect_set(rect : TRect, x : number, y : number, w : number, h : number) : TRect;
export declare function rect_cast(rect : TRect) : TRect;
export declare function rect_destroy(r : TRect) : TRet;
export declare function rect_t_get_prop_x(nativeObj : any);
export declare function rect_t_get_prop_y(nativeObj : any);
export declare function rect_t_get_prop_w(nativeObj : any);
export declare function rect_t_get_prop_h(nativeObj : any);
export declare function named_value_create() : TNamedValue;
export declare function named_value_cast(nv : TNamedValue) : TNamedValue;
export declare function named_value_set_name(nv : TNamedValue, name : string) : TRet;
export declare function named_value_set_value(nv : TNamedValue, value : TValue) : TRet;
export declare function named_value_get_value(nv : TNamedValue) : TValue;
export declare function named_value_destroy(nv : TNamedValue) : TRet;
export declare function named_value_t_get_prop_name(nativeObj : any);
export declare function MIME_TYPE_APPLICATION_ENVOY();
export declare function MIME_TYPE_APPLICATION_FRACTALS();
export declare function MIME_TYPE_APPLICATION_FUTURESPLASH();
export declare function MIME_TYPE_APPLICATION_HTA();
export declare function MIME_TYPE_APPLICATION_JSON();
export declare function MIME_TYPE_APPLICATION_UBJSON();
export declare function MIME_TYPE_APPLICATION_MAC_BINHEX40();
export declare function MIME_TYPE_APPLICATION_MSWORD();
export declare function MIME_TYPE_APPLICATION_OCTET_STREAM();
export declare function MIME_TYPE_APPLICATION_ODA();
export declare function MIME_TYPE_APPLICATION_OLESCRIPT();
export declare function MIME_TYPE_APPLICATION_PDF();
export declare function MIME_TYPE_APPLICATION_PICS_RULES();
export declare function MIME_TYPE_APPLICATION_PKCS10();
export declare function MIME_TYPE_APPLICATION_PKIX_CRL();
export declare function MIME_TYPE_APPLICATION_POSTSCRIPT();
export declare function MIME_TYPE_APPLICATION_RTF();
export declare function MIME_TYPE_APPLICATION_VND_MS_EXCEL();
export declare function MIME_TYPE_APPLICATION_VND_MS_OUTLOOK();
export declare function MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE();
export declare function MIME_TYPE_APPLICATION_VND_MS_PKISECCAT();
export declare function MIME_TYPE_APPLICATION_VND_MS_PKISTL();
export declare function MIME_TYPE_APPLICATION_VND_MS_POWERPOINT();
export declare function MIME_TYPE_APPLICATION_VND_MS_PROJECT();
export declare function MIME_TYPE_APPLICATION_VND_MS_WORKS();
export declare function MIME_TYPE_APPLICATION_WINHLP();
export declare function MIME_TYPE_APPLICATION_X_BCPIO();
export declare function MIME_TYPE_APPLICATION_X_CDF();
export declare function MIME_TYPE_APPLICATION_X_COMPRESS();
export declare function MIME_TYPE_APPLICATION_X_COMPRESSED();
export declare function MIME_TYPE_APPLICATION_X_CPIO();
export declare function MIME_TYPE_APPLICATION_X_CSH();
export declare function MIME_TYPE_APPLICATION_X_DIRECTOR();
export declare function MIME_TYPE_APPLICATION_X_DVI();
export declare function MIME_TYPE_APPLICATION_X_GTAR();
export declare function MIME_TYPE_APPLICATION_X_GZIP();
export declare function MIME_TYPE_APPLICATION_X_HDF();
export declare function MIME_TYPE_APPLICATION_X_IPHONE();
export declare function MIME_TYPE_APPLICATION_X_JAVASCRIPT();
export declare function MIME_TYPE_APPLICATION_X_LATEX();
export declare function MIME_TYPE_APPLICATION_X_MSACCESS();
export declare function MIME_TYPE_APPLICATION_X_MSCARDFILE();
export declare function MIME_TYPE_APPLICATION_X_MSCLIP();
export declare function MIME_TYPE_APPLICATION_X_MSDOWNLOAD();
export declare function MIME_TYPE_APPLICATION_X_MSMEDIAVIEW();
export declare function MIME_TYPE_APPLICATION_X_MSMETAFILE();
export declare function MIME_TYPE_APPLICATION_X_MSMONEY();
export declare function MIME_TYPE_APPLICATION_X_MSPUBLISHER();
export declare function MIME_TYPE_APPLICATION_X_MSSCHEDULE();
export declare function MIME_TYPE_APPLICATION_X_MSTERMINAL();
export declare function MIME_TYPE_APPLICATION_X_MSWRITE();
export declare function MIME_TYPE_APPLICATION_X_NETCDF();
export declare function MIME_TYPE_APPLICATION_X_PERFMON();
export declare function MIME_TYPE_APPLICATION_X_PKCS12();
export declare function MIME_TYPE_APPLICATION_X_SH();
export declare function MIME_TYPE_APPLICATION_X_SHAR();
export declare function MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH();
export declare function MIME_TYPE_APPLICATION_X_STUFFIT();
export declare function MIME_TYPE_APPLICATION_X_SV4CPIO();
export declare function MIME_TYPE_APPLICATION_X_SV4CRC();
export declare function MIME_TYPE_APPLICATION_X_TAR();
export declare function MIME_TYPE_APPLICATION_X_TCL();
export declare function MIME_TYPE_APPLICATION_X_TEX();
export declare function MIME_TYPE_APPLICATION_X_TEXINFO();
export declare function MIME_TYPE_APPLICATION_X_TROFF();
export declare function MIME_TYPE_APPLICATION_X_USTAR();
export declare function MIME_TYPE_APPLICATION_ZIP();
export declare function MIME_TYPE_AUDIO_BASIC();
export declare function MIME_TYPE_AUDIO_MID();
export declare function MIME_TYPE_AUDIO_MPEG();
export declare function MIME_TYPE_AUDIO_X_AIFF();
export declare function MIME_TYPE_AUDIO_X_MPEGURL();
export declare function MIME_TYPE_AUDIO_X_WAV();
export declare function MIME_TYPE_IMAGE_BMP();
export declare function MIME_TYPE_IMAGE_CIS_COD();
export declare function MIME_TYPE_IMAGE_GIF();
export declare function MIME_TYPE_IMAGE_IEF();
export declare function MIME_TYPE_IMAGE_JPEG();
export declare function MIME_TYPE_IMAGE_PIPEG();
export declare function MIME_TYPE_IMAGE_SVG_XML();
export declare function MIME_TYPE_IMAGE_TIFF();
export declare function MIME_TYPE_IMAGE_X_CMX();
export declare function MIME_TYPE_IMAGE_X_ICON();
export declare function MIME_TYPE_IMAGE_X_RGB();
export declare function MIME_TYPE_IMAGE_X_XBITMAP();
export declare function MIME_TYPE_IMAGE_X_XPIXMAP();
export declare function MIME_TYPE_IMAGE_X_XWINDOWDUMP();
export declare function MIME_TYPE_MESSAGE_RFC822();
export declare function MIME_TYPE_TEXT_CSS();
export declare function MIME_TYPE_TEXT_H323();
export declare function MIME_TYPE_TEXT_HTML();
export declare function MIME_TYPE_TEXT_IULS();
export declare function MIME_TYPE_TEXT_PLAIN();
export declare function MIME_TYPE_TEXT_RICHTEXT();
export declare function MIME_TYPE_TEXT_SCRIPTLET();
export declare function MIME_TYPE_TEXT_WEBVIEWHTML();
export declare function MIME_TYPE_TEXT_X_COMPONENT();
export declare function MIME_TYPE_TEXT_X_SETEXT();
export declare function MIME_TYPE_TEXT_X_VCARD();
export declare function MIME_TYPE_VIDEO_MPEG();
export declare function MIME_TYPE_VIDEO_QUICKTIME();
export declare function MIME_TYPE_VIDEO_X_MSVIDEO();
export declare function INDICATOR_DEFAULT_PAINT_AUTO();
export declare function INDICATOR_DEFAULT_PAINT_FILL_DOT();
export declare function INDICATOR_DEFAULT_PAINT_STROKE_DOT();
export declare function INDICATOR_DEFAULT_PAINT_FILL_RECT();
export declare function INDICATOR_DEFAULT_PAINT_STROKE_RECT();
export declare function event_cast(event : TEvent) : TEvent;
export declare function event_create(type : number) : TEvent;
export declare function event_destroy(event : TEvent) : TRet;
export declare function event_t_get_prop_type(nativeObj : any);
export declare function event_t_get_prop_time(nativeObj : any);
export declare function event_t_get_prop_target(nativeObj : any);
export declare function emitter_create() : TEmitter;
export declare function emitter_dispatch(emitter : TEmitter, e : TEvent) : TRet;
export declare function emitter_dispatch_simple_event(emitter : TEmitter, type : TEventType) : TRet;
export declare function emitter_on(emitter : TEmitter, type : TEventType, on_event : Function, ctx : any) : number;
export declare function emitter_off(emitter : TEmitter, id : number) : TRet;
export declare function emitter_enable(emitter : TEmitter) : TRet;
export declare function emitter_disable(emitter : TEmitter) : TRet;
export declare function emitter_size(emitter : TEmitter) : number;
export declare function emitter_destroy(emitter : TEmitter) : TRet;
export declare function emitter_cast(emitter : TEmitter) : TEmitter;
export declare function EASING_LINEAR();
export declare function EASING_QUADRATIC_IN();
export declare function EASING_QUADRATIC_OUT();
export declare function EASING_QUADRATIC_INOUT();
export declare function EASING_CUBIC_IN();
export declare function EASING_CUBIC_OUT();
export declare function EASING_SIN_IN();
export declare function EASING_SIN_OUT();
export declare function EASING_SIN_INOUT();
export declare function EASING_POW_IN();
export declare function EASING_POW_OUT();
export declare function EASING_POW_INOUT();
export declare function EASING_CIRCULAR_IN();
export declare function EASING_CIRCULAR_OUT();
export declare function EASING_CIRCULAR_INOUT();
export declare function EASING_ELASTIC_IN();
export declare function EASING_ELASTIC_OUT();
export declare function EASING_ELASTIC_INOUT();
export declare function EASING_BACK_IN();
export declare function EASING_BACK_OUT();
export declare function EASING_BACK_INOUT();
export declare function EASING_BOUNCE_IN();
export declare function EASING_BOUNCE_OUT();
export declare function EASING_BOUNCE_INOUT();
export declare function date_time_create() : TDateTime;
export declare function date_time_set(dt : TDateTime) : TRet;
export declare function date_time_destroy(dt : TDateTime) : TRet;
export declare function date_time_t_get_prop_second(nativeObj : any);
export declare function date_time_t_get_prop_minute(nativeObj : any);
export declare function date_time_t_get_prop_hour(nativeObj : any);
export declare function date_time_t_get_prop_day(nativeObj : any);
export declare function date_time_t_get_prop_wday(nativeObj : any);
export declare function date_time_t_get_prop_month(nativeObj : any);
export declare function date_time_t_get_prop_year(nativeObj : any);
export declare function color_create(r : number, b : number, g : number, a : number) : TColor;
export declare function color_from_str(c : TColor, str : string) : TColor;
export declare function color_r(c : TColor) : number;
export declare function color_g(c : TColor) : number;
export declare function color_b(c : TColor) : number;
export declare function color_a(c : TColor) : number;
export declare function color_cast(color : TColor) : TColor;
export declare function color_destroy(c : TColor) : TRet;
export declare function color_t_get_prop_color(nativeObj : any);
export declare function color_t_set_prop_color(nativeObj : any, v : number);
export declare function asset_info_t_get_prop_type(nativeObj : any);
export declare function asset_info_t_get_prop_subtype(nativeObj : any);
export declare function asset_info_t_get_prop_is_in_rom(nativeObj : any);
export declare function asset_info_t_get_prop_size(nativeObj : any);
export declare function asset_info_t_get_prop_refcount(nativeObj : any);
export declare function asset_info_t_get_prop_name(nativeObj : any);
export declare function ASSET_TYPE_NONE();
export declare function ASSET_TYPE_FONT();
export declare function ASSET_TYPE_IMAGE();
export declare function ASSET_TYPE_STYLE();
export declare function ASSET_TYPE_UI();
export declare function ASSET_TYPE_XML();
export declare function ASSET_TYPE_STRINGS();
export declare function ASSET_TYPE_SCRIPT();
export declare function ASSET_TYPE_DATA();
export declare function assets_manager() : TAssetsManager;
export declare function assets_manager_ref(am : TAssetsManager, type : TAssetType, name : string) : TAssetInfo;
export declare function assets_manager_unref(am : TAssetsManager, info : TAssetInfo) : TRet;
export declare function color_component_cast(widget : TWidget) : TWidget;
export declare function time_clock_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function time_clock_cast(widget : TWidget) : TWidget;
export declare function time_clock_set_hour(widget : TWidget, hour : number) : TRet;
export declare function time_clock_set_minute(widget : TWidget, minute : number) : TRet;
export declare function time_clock_set_second(widget : TWidget, second : number) : TRet;
export declare function time_clock_set_hour_image(widget : TWidget, hour : string) : TRet;
export declare function time_clock_set_minute_image(widget : TWidget, minute_image : string) : TRet;
export declare function time_clock_set_second_image(widget : TWidget, second_image : string) : TRet;
export declare function time_clock_set_bg_image(widget : TWidget, bg_image : string) : TRet;
export declare function time_clock_set_image(widget : TWidget, image : string) : TRet;
export declare function time_clock_set_hour_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
export declare function time_clock_set_minute_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
export declare function time_clock_set_second_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
export declare function time_clock_t_get_prop_hour(nativeObj : any);
export declare function time_clock_t_get_prop_minute(nativeObj : any);
export declare function time_clock_t_get_prop_second(nativeObj : any);
export declare function time_clock_t_get_prop_image(nativeObj : any);
export declare function time_clock_t_get_prop_bg_image(nativeObj : any);
export declare function time_clock_t_get_prop_hour_image(nativeObj : any);
export declare function time_clock_t_get_prop_minute_image(nativeObj : any);
export declare function time_clock_t_get_prop_second_image(nativeObj : any);
export declare function time_clock_t_get_prop_hour_anchor_x(nativeObj : any);
export declare function time_clock_t_get_prop_hour_anchor_y(nativeObj : any);
export declare function time_clock_t_get_prop_minute_anchor_x(nativeObj : any);
export declare function time_clock_t_get_prop_minute_anchor_y(nativeObj : any);
export declare function time_clock_t_get_prop_second_anchor_x(nativeObj : any);
export declare function time_clock_t_get_prop_second_anchor_y(nativeObj : any);
export declare function text_selector_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function text_selector_cast(widget : TWidget) : TWidget;
export declare function text_selector_reset_options(widget : TWidget) : TRet;
export declare function text_selector_count_options(widget : TWidget) : number;
export declare function text_selector_append_option(widget : TWidget, value : any, text : string) : TRet;
export declare function text_selector_set_options(widget : TWidget, options : string) : TRet;
export declare function text_selector_set_range_options(widget : TWidget, start : number, nr : number, step : number) : TRet;
export declare function text_selector_get_value(widget : TWidget) : number;
export declare function text_selector_set_value(widget : TWidget, value : any) : TRet;
export declare function text_selector_get_text(widget : TWidget) : string;
export declare function text_selector_set_text(widget : TWidget, text : string) : TRet;
export declare function text_selector_set_selected_index(widget : TWidget, index : number) : TRet;
export declare function text_selector_set_visible_nr(widget : TWidget, visible_nr : number) : TRet;
export declare function text_selector_t_get_prop_visible_nr(nativeObj : any);
export declare function text_selector_t_get_prop_selected_index(nativeObj : any);
export declare function text_selector_t_get_prop_options(nativeObj : any);
export declare function switch_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function switch_set_value(widget : TWidget, value : any) : TRet;
export declare function switch_cast(widget : TWidget) : TWidget;
export declare function switch_t_get_prop_value(nativeObj : any);
export declare function switch_t_get_prop_max_xoffset_ratio(nativeObj : any);
export declare function prop_change_event_cast(event : TEvent) : TPropChangeEvent;
export declare function prop_change_event_t_get_prop_name(nativeObj : any);
export declare function prop_change_event_t_get_prop_value(nativeObj : any);
export declare function progress_event_cast(event : TEvent) : TProgressEvent;
export declare function progress_event_t_get_prop_percent(nativeObj : any);
export declare function view_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function view_cast(widget : TWidget) : TWidget;
export declare function slide_view_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function slide_view_cast(widget : TWidget) : TWidget;
export declare function slide_view_set_auto_play(widget : TWidget, auto_play : number) : TRet;
export declare function slide_view_set_active(widget : TWidget, index : number) : TRet;
export declare function slide_view_set_vertical(widget : TWidget, vertical : boolean) : TRet;
export declare function slide_view_set_anim_hint(widget : TWidget, anim_hint : string) : TRet;
export declare function slide_view_set_loop(widget : TWidget, loop : boolean) : TRet;
export declare function slide_view_t_get_prop_vertical(nativeObj : any);
export declare function slide_view_t_get_prop_auto_play(nativeObj : any);
export declare function slide_view_t_get_prop_loop(nativeObj : any);
export declare function slide_view_t_get_prop_anim_hint(nativeObj : any);
export declare function slide_indicator_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function slide_indicator_create_linear(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function slide_indicator_create_arc(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function slide_indicator_cast(widget : TWidget) : TWidget;
export declare function slide_indicator_set_value(widget : TWidget, value : any) : TRet;
export declare function slide_indicator_set_max(widget : TWidget, max : number) : TRet;
export declare function slide_indicator_set_default_paint(widget : TWidget, default_paint : TIndicatorDefaultPaint) : TRet;
export declare function slide_indicator_set_auto_hide(widget : TWidget, auto_hide : number) : TRet;
export declare function slide_indicator_set_margin(widget : TWidget, margin : number) : TRet;
export declare function slide_indicator_set_spacing(widget : TWidget, spacing : number) : TRet;
export declare function slide_indicator_set_size(widget : TWidget, size : number) : TRet;
export declare function slide_indicator_set_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
export declare function slide_indicator_set_indicated_target(widget : TWidget, indicated_target : string) : TRet;
export declare function slide_indicator_t_get_prop_value(nativeObj : any);
export declare function slide_indicator_t_get_prop_max(nativeObj : any);
export declare function slide_indicator_t_get_prop_default_paint(nativeObj : any);
export declare function slide_indicator_t_get_prop_auto_hide(nativeObj : any);
export declare function slide_indicator_t_get_prop_margin(nativeObj : any);
export declare function slide_indicator_t_get_prop_spacing(nativeObj : any);
export declare function slide_indicator_t_get_prop_size(nativeObj : any);
export declare function slide_indicator_t_get_prop_anchor_x(nativeObj : any);
export declare function slide_indicator_t_get_prop_anchor_y(nativeObj : any);
export declare function slide_indicator_t_get_prop_indicated_target(nativeObj : any);
export declare function slide_menu_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function slide_menu_cast(widget : TWidget) : TWidget;
export declare function slide_menu_set_value(widget : TWidget, value : any) : TRet;
export declare function slide_menu_set_align_v(widget : TWidget, align_v : TAlignV) : TRet;
export declare function slide_menu_set_min_scale(widget : TWidget, min_scale : number) : TRet;
export declare function slide_menu_t_get_prop_value(nativeObj : any);
export declare function slide_menu_t_get_prop_align_v(nativeObj : any);
export declare function slide_menu_t_get_prop_min_scale(nativeObj : any);
export declare function scroll_view_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function scroll_view_cast(widget : TWidget) : TWidget;
export declare function scroll_view_set_virtual_w(widget : TWidget, w : number) : TRet;
export declare function scroll_view_set_virtual_h(widget : TWidget, h : number) : TRet;
export declare function scroll_view_set_xslidable(widget : TWidget, xslidable : boolean) : TRet;
export declare function scroll_view_set_yslidable(widget : TWidget, yslidable : boolean) : TRet;
export declare function scroll_view_set_offset(widget : TWidget, xoffset : number, yoffset : number) : TRet;
export declare function scroll_view_set_speed_scale(widget : TWidget, xspeed_scale : number, yspeed_scale : number) : TRet;
export declare function scroll_view_scroll_to(widget : TWidget, xoffset_end : number, yoffset_end : number, duration : number) : TRet;
export declare function scroll_view_scroll_delta_to(widget : TWidget, xoffset_delta : number, yoffset_delta : number, duration : number) : TRet;
export declare function scroll_view_t_get_prop_virtual_w(nativeObj : any);
export declare function scroll_view_t_get_prop_virtual_h(nativeObj : any);
export declare function scroll_view_t_get_prop_xoffset(nativeObj : any);
export declare function scroll_view_t_get_prop_yoffset(nativeObj : any);
export declare function scroll_view_t_get_prop_xspeed_scale(nativeObj : any);
export declare function scroll_view_t_get_prop_yspeed_scale(nativeObj : any);
export declare function scroll_view_t_get_prop_xslidable(nativeObj : any);
export declare function scroll_view_t_get_prop_yslidable(nativeObj : any);
export declare function scroll_bar_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function scroll_bar_cast(widget : TWidget) : TWidget;
export declare function scroll_bar_create_mobile(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function scroll_bar_create_desktop(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function scroll_bar_set_params(widget : TWidget, virtual_size : number, row : number) : TRet;
export declare function scroll_bar_scroll_to(widget : TWidget, value : any, duration : number) : TRet;
export declare function scroll_bar_set_value(widget : TWidget, value : any) : TRet;
export declare function scroll_bar_add_delta(widget : TWidget, delta : number) : TRet;
export declare function scroll_bar_scroll_delta(widget : TWidget, delta : number) : TRet;
export declare function scroll_bar_set_value_only(widget : TWidget, value : any) : TRet;
export declare function scroll_bar_is_mobile(widget : TWidget) : boolean;
export declare function scroll_bar_t_get_prop_virtual_size(nativeObj : any);
export declare function scroll_bar_t_get_prop_value(nativeObj : any);
export declare function scroll_bar_t_get_prop_row(nativeObj : any);
export declare function scroll_bar_t_get_prop_animatable(nativeObj : any);
export declare function tab_control_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function tab_control_cast(widget : TWidget) : TWidget;
export declare function list_view_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function list_view_set_item_height(widget : TWidget, item_height : number) : TRet;
export declare function list_view_set_default_item_height(widget : TWidget, default_item_height : number) : TRet;
export declare function list_view_set_auto_hide_scroll_bar(widget : TWidget, auto_hide_scroll_bar : boolean) : TRet;
export declare function list_view_cast(widget : TWidget) : TWidget;
export declare function list_view_t_get_prop_item_height(nativeObj : any);
export declare function list_view_t_get_prop_default_item_height(nativeObj : any);
export declare function list_view_t_get_prop_auto_hide_scroll_bar(nativeObj : any);
export declare function list_view_h_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function list_view_h_set_item_width(widget : TWidget, item_width : number) : TRet;
export declare function list_view_h_set_spacing(widget : TWidget, spacing : number) : TRet;
export declare function list_view_h_cast(widget : TWidget) : TWidget;
export declare function list_view_h_t_get_prop_item_width(nativeObj : any);
export declare function list_view_h_t_get_prop_spacing(nativeObj : any);
export declare function tab_button_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function tab_button_cast(widget : TWidget) : TWidget;
export declare function tab_button_set_value(widget : TWidget, value : any) : TRet;
export declare function tab_button_set_icon(widget : TWidget, name : string) : TRet;
export declare function tab_button_set_active_icon(widget : TWidget, name : string) : TRet;
export declare function tab_button_t_get_prop_value(nativeObj : any);
export declare function tab_button_t_get_prop_active_icon(nativeObj : any);
export declare function tab_button_t_get_prop_icon(nativeObj : any);
export declare function tab_button_group_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function tab_button_group_set_compact(widget : TWidget, compact : boolean) : TRet;
export declare function tab_button_group_set_scrollable(widget : TWidget, scrollable : boolean) : TRet;
export declare function tab_button_group_cast(widget : TWidget) : TWidget;
export declare function tab_button_group_t_get_prop_compact(nativeObj : any);
export declare function tab_button_group_t_get_prop_scrollable(nativeObj : any);
export declare function list_item_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function list_item_cast(widget : TWidget) : TWidget;
export declare function hscroll_label_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function hscroll_label_set_lull(widget : TWidget, lull : number) : TRet;
export declare function hscroll_label_set_duration(widget : TWidget, duration : number) : TRet;
export declare function hscroll_label_set_only_focus(widget : TWidget, only_focus : boolean) : TRet;
export declare function hscroll_label_set_only_parent_focus(widget : TWidget, only_parent_focus : boolean) : TRet;
export declare function hscroll_label_set_loop(widget : TWidget, loop : boolean) : TRet;
export declare function hscroll_label_set_yoyo(widget : TWidget, yoyo : boolean) : TRet;
export declare function hscroll_label_set_ellipses(widget : TWidget, ellipses : boolean) : TRet;
export declare function hscroll_label_set_xoffset(widget : TWidget, xoffset : number) : TRet;
export declare function hscroll_label_start(widget : TWidget) : TRet;
export declare function hscroll_label_stop(widget : TWidget) : TRet;
export declare function hscroll_label_cast(widget : TWidget) : TWidget;
export declare function hscroll_label_t_get_prop_only_focus(nativeObj : any);
export declare function hscroll_label_t_get_prop_only_parent_focus(nativeObj : any);
export declare function hscroll_label_t_get_prop_loop(nativeObj : any);
export declare function hscroll_label_t_get_prop_yoyo(nativeObj : any);
export declare function hscroll_label_t_get_prop_ellipses(nativeObj : any);
export declare function hscroll_label_t_get_prop_lull(nativeObj : any);
export declare function hscroll_label_t_get_prop_duration(nativeObj : any);
export declare function hscroll_label_t_get_prop_xoffset(nativeObj : any);
export declare function hscroll_label_t_get_prop_text_w(nativeObj : any);
export declare function rich_text_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function rich_text_set_text(widget : TWidget, text : string) : TRet;
export declare function rich_text_cast(widget : TWidget) : TWidget;
export declare function rich_text_t_get_prop_line_gap(nativeObj : any);
export declare function progress_circle_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function progress_circle_cast(widget : TWidget) : TWidget;
export declare function progress_circle_set_value(widget : TWidget, value : any) : TRet;
export declare function progress_circle_set_max(widget : TWidget, max : number) : TRet;
export declare function progress_circle_set_line_width(widget : TWidget, line_width : number) : TRet;
export declare function progress_circle_set_start_angle(widget : TWidget, start_angle : number) : TRet;
export declare function progress_circle_set_unit(widget : TWidget, unit : string) : TRet;
export declare function progress_circle_set_show_text(widget : TWidget, show_text : boolean) : TRet;
export declare function progress_circle_set_counter_clock_wise(widget : TWidget, counter_clock_wise : boolean) : TRet;
export declare function progress_circle_t_get_prop_value(nativeObj : any);
export declare function progress_circle_t_get_prop_max(nativeObj : any);
export declare function progress_circle_t_get_prop_start_angle(nativeObj : any);
export declare function progress_circle_t_get_prop_line_width(nativeObj : any);
export declare function progress_circle_t_get_prop_unit(nativeObj : any);
export declare function progress_circle_t_get_prop_counter_clock_wise(nativeObj : any);
export declare function progress_circle_t_get_prop_show_text(nativeObj : any);
export declare function slider_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function slider_cast(widget : TWidget) : TWidget;
export declare function slider_set_value(widget : TWidget, value : any) : TRet;
export declare function slider_set_min(widget : TWidget, min : number) : TRet;
export declare function slider_set_max(widget : TWidget, max : number) : TRet;
export declare function slider_set_step(widget : TWidget, step : number) : TRet;
export declare function slider_set_bar_size(widget : TWidget, bar_size : number) : TRet;
export declare function slider_set_vertical(widget : TWidget, vertical : boolean) : TRet;
export declare function slider_t_get_prop_value(nativeObj : any);
export declare function slider_t_get_prop_min(nativeObj : any);
export declare function slider_t_get_prop_max(nativeObj : any);
export declare function slider_t_get_prop_step(nativeObj : any);
export declare function slider_t_get_prop_vertical(nativeObj : any);
export declare function slider_t_get_prop_bar_size(nativeObj : any);
export declare function mledit_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function mledit_set_readonly(widget : TWidget, readonly : boolean) : TRet;
export declare function mledit_set_focus(widget : TWidget, focus : boolean) : TRet;
export declare function mledit_set_wrap_word(widget : TWidget, wrap_word : boolean) : TRet;
export declare function mledit_set_max_lines(widget : TWidget, max_lines : number) : TRet;
export declare function mledit_set_input_tips(widget : TWidget, tips : string) : TRet;
export declare function mledit_set_cursor(widget : TWidget, cursor : number) : TRet;
export declare function mledit_set_scroll_line(widget : TWidget, scroll_line : number) : TRet;
export declare function mledit_cast(widget : TWidget) : TWidget;
export declare function mledit_t_get_prop_readonly(nativeObj : any);
export declare function mledit_t_get_prop_tips(nativeObj : any);
export declare function mledit_t_get_prop_wrap_word(nativeObj : any);
export declare function mledit_t_get_prop_max_lines(nativeObj : any);
export declare function mledit_t_get_prop_scroll_line(nativeObj : any);
export declare function row_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function row_cast(widget : TWidget) : TWidget;
export declare function progress_bar_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function progress_bar_cast(widget : TWidget) : TWidget;
export declare function progress_bar_set_value(widget : TWidget, value : any) : TRet;
export declare function progress_bar_set_max(widget : TWidget, max : number) : TRet;
export declare function progress_bar_set_vertical(widget : TWidget, vertical : boolean) : TRet;
export declare function progress_bar_set_show_text(widget : TWidget, show_text : boolean) : TRet;
export declare function progress_bar_get_percent(widget : TWidget) : number;
export declare function progress_bar_t_get_prop_value(nativeObj : any);
export declare function progress_bar_t_get_prop_max(nativeObj : any);
export declare function progress_bar_t_get_prop_vertical(nativeObj : any);
export declare function progress_bar_t_get_prop_show_text(nativeObj : any);
export declare function object_unref(obj : TObject) : TRet;
export declare function object_ref(obj : TObject) : TObject;
export declare function object_get_type(obj : TObject) : string;
export declare function object_get_desc(obj : TObject) : string;
export declare function object_get_size(obj : TObject) : number;
export declare function object_is_collection(obj : TObject) : boolean;
export declare function object_set_name(obj : TObject, name : string) : TRet;
export declare function object_compare(obj : TObject, other : TObject) : number;
export declare function object_get_prop(obj : TObject, name : string, v : TValue) : TRet;
export declare function object_get_prop_str(obj : TObject, name : string) : string;
export declare function object_get_prop_pointer(obj : TObject, name : string) : any;
export declare function object_get_prop_object(obj : TObject, name : string) : TObject;
export declare function object_get_prop_int(obj : TObject, name : string, defval : number) : number;
export declare function object_get_prop_bool(obj : TObject, name : string, defval : boolean) : boolean;
export declare function object_get_prop_float(obj : TObject, name : string, defval : number) : number;
export declare function object_remove_prop(obj : TObject, name : string) : TRet;
export declare function object_set_prop(obj : TObject, name : string, value : TValue) : TRet;
export declare function object_set_prop_str(obj : TObject, name : string, value : string) : TRet;
export declare function object_set_prop_object(obj : TObject, name : string, value : TObject) : TRet;
export declare function object_set_prop_int(obj : TObject, name : string, value : any) : TRet;
export declare function object_set_prop_bool(obj : TObject, name : string, value : any) : TRet;
export declare function object_set_prop_float(obj : TObject, name : string, value : any) : TRet;
export declare function object_copy_prop(obj : TObject, src : TObject, name : string) : TRet;
export declare function object_has_prop(obj : TObject, name : string) : boolean;
export declare function object_eval(obj : TObject, expr : string, v : TValue) : TRet;
export declare function object_can_exec(obj : TObject, name : string, args : string) : boolean;
export declare function object_exec(obj : TObject, name : string, args : string) : TRet;
export declare function object_notify_changed(obj : TObject) : TRet;
export declare function object_get_prop_str_by_path(obj : TObject, path : string) : string;
export declare function object_get_prop_pointer_by_path(obj : TObject, path : string) : any;
export declare function object_get_prop_object_by_path(obj : TObject, path : string) : TObject;
export declare function object_get_prop_int_by_path(obj : TObject, path : string, defval : number) : number;
export declare function object_get_prop_bool_by_path(obj : TObject, path : string, defval : boolean) : boolean;
export declare function object_get_prop_float_by_path(obj : TObject, path : string, defval : number) : number;
export declare function object_t_get_prop_ref_count(nativeObj : any);
export declare function object_t_get_prop_name(nativeObj : any);
export declare function pages_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function pages_cast(widget : TWidget) : TWidget;
export declare function pages_set_active(widget : TWidget, index : number) : TRet;
export declare function pages_set_active_by_name(widget : TWidget, name : string) : TRet;
export declare function pages_t_get_prop_active(nativeObj : any);
export declare function line_number_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function line_number_set_top_margin(widget : TWidget, top_margin : number) : TRet;
export declare function line_number_set_bottom_margin(widget : TWidget, bottom_margin : number) : TRet;
export declare function line_number_set_line_height(widget : TWidget, line_height : number) : TRet;
export declare function line_number_set_yoffset(widget : TWidget, yoffset : number) : TRet;
export declare function line_number_cast(widget : TWidget) : TWidget;
export declare function overlay_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function overlay_cast(widget : TWidget) : TWidget;
export declare function image_value_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function image_value_set_image(widget : TWidget, image : string) : TRet;
export declare function image_value_set_format(widget : TWidget, format : string) : TRet;
export declare function image_value_set_value(widget : TWidget, value : any) : TRet;
export declare function image_value_cast(widget : TWidget) : TWidget;
export declare function image_value_t_get_prop_image(nativeObj : any);
export declare function image_value_t_get_prop_format(nativeObj : any);
export declare function image_value_t_get_prop_value(nativeObj : any);
export declare function image_animation_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function image_animation_set_loop(widget : TWidget, loop : boolean) : TRet;
export declare function image_animation_set_image(widget : TWidget, image : string) : TRet;
export declare function image_animation_set_interval(widget : TWidget, interval : number) : TRet;
export declare function image_animation_set_delay(widget : TWidget, delay : number) : TRet;
export declare function image_animation_set_auto_play(widget : TWidget, auto_play : boolean) : TRet;
export declare function image_animation_set_sequence(widget : TWidget, sequence : string) : TRet;
export declare function image_animation_set_range_sequence(widget : TWidget, start_index : number, end_index : number) : TRet;
export declare function image_animation_play(widget : TWidget) : TRet;
export declare function image_animation_stop(widget : TWidget) : TRet;
export declare function image_animation_pause(widget : TWidget) : TRet;
export declare function image_animation_next(widget : TWidget) : TRet;
export declare function image_animation_set_format(widget : TWidget, format : string) : TRet;
export declare function image_animation_set_unload_after_paint(widget : TWidget, unload_after_paint : boolean) : TRet;
export declare function image_animation_cast(widget : TWidget) : TWidget;
export declare function image_animation_t_get_prop_image(nativeObj : any);
export declare function image_animation_t_get_prop_sequence(nativeObj : any);
export declare function image_animation_t_get_prop_start_index(nativeObj : any);
export declare function image_animation_t_get_prop_end_index(nativeObj : any);
export declare function image_animation_t_get_prop_loop(nativeObj : any);
export declare function image_animation_t_get_prop_auto_play(nativeObj : any);
export declare function image_animation_t_get_prop_unload_after_paint(nativeObj : any);
export declare function image_animation_t_get_prop_format(nativeObj : any);
export declare function image_animation_t_get_prop_interval(nativeObj : any);
export declare function image_animation_t_get_prop_delay(nativeObj : any);
export declare function guage_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function guage_cast(widget : TWidget) : TWidget;
export declare function guage_set_image(widget : TWidget, name : string) : TRet;
export declare function guage_set_draw_type(widget : TWidget, draw_type : TImageDrawType) : TRet;
export declare function guage_t_get_prop_image(nativeObj : any);
export declare function guage_t_get_prop_draw_type(nativeObj : any);
export declare function guage_pointer_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function guage_pointer_cast(widget : TWidget) : TWidget;
export declare function guage_pointer_set_angle(widget : TWidget, angle : number) : TRet;
export declare function guage_pointer_set_image(widget : TWidget, image : string) : TRet;
export declare function guage_pointer_set_anchor(widget : TWidget, anchor_x : string, anchor_y : string) : TRet;
export declare function guage_pointer_t_get_prop_angle(nativeObj : any);
export declare function guage_pointer_t_get_prop_image(nativeObj : any);
export declare function guage_pointer_t_get_prop_anchor_x(nativeObj : any);
export declare function guage_pointer_t_get_prop_anchor_y(nativeObj : any);
export declare function label_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function label_set_length(widget : TWidget, length : number) : TRet;
export declare function label_resize_to_content(widget : TWidget, min_w : number, max_w : number, min_h : number, max_h : number) : TRet;
export declare function label_cast(widget : TWidget) : TWidget;
export declare function label_t_get_prop_length(nativeObj : any);
export declare function draggable_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function draggable_cast(widget : TWidget) : TWidget;
export declare function draggable_set_top(widget : TWidget, top : number) : TRet;
export declare function draggable_set_bottom(widget : TWidget, bottom : number) : TRet;
export declare function draggable_set_left(widget : TWidget, left : number) : TRet;
export declare function draggable_set_right(widget : TWidget, right : number) : TRet;
export declare function draggable_set_vertical_only(widget : TWidget, vertical_only : boolean) : TRet;
export declare function draggable_set_horizontal_only(widget : TWidget, horizontal_only : boolean) : TRet;
export declare function draggable_set_drag_window(widget : TWidget, drag_window : boolean) : TRet;
export declare function draggable_t_get_prop_top(nativeObj : any);
export declare function draggable_t_get_prop_bottom(nativeObj : any);
export declare function draggable_t_get_prop_left(nativeObj : any);
export declare function draggable_t_get_prop_right(nativeObj : any);
export declare function draggable_t_get_prop_vertical_only(nativeObj : any);
export declare function draggable_t_get_prop_horizontal_only(nativeObj : any);
export declare function draggable_t_get_prop_drag_window(nativeObj : any);
export declare function group_box_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function group_box_cast(widget : TWidget) : TWidget;
export declare function color_picker_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function color_picker_set_color(widget : TWidget, color : string) : TRet;
export declare function color_picker_cast(widget : TWidget) : TWidget;
export declare function color_picker_t_get_prop_value(nativeObj : any);
export declare function canvas_widget_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function canvas_widget_cast(widget : TWidget) : TWidget;
export declare function grid_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function grid_cast(widget : TWidget) : TWidget;
export declare function grid_item_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function grid_item_cast(widget : TWidget) : TWidget;
export declare function window_manager() : TWidget;
export declare function window_manager_cast(widget : TWidget) : TWidget;
export declare function window_manager_get_top_main_window(widget : TWidget) : TWidget;
export declare function window_manager_get_top_window(widget : TWidget) : TWidget;
export declare function window_manager_get_prev_window(widget : TWidget) : TWidget;
export declare function window_manager_get_pointer_x(widget : TWidget) : number;
export declare function window_manager_get_pointer_y(widget : TWidget) : number;
export declare function window_manager_get_pointer_pressed(widget : TWidget) : boolean;
export declare function window_manager_set_show_fps(widget : TWidget, show_fps : boolean) : TRet;
export declare function window_manager_set_screen_saver_time(widget : TWidget, screen_saver_time : number) : TRet;
export declare function window_manager_set_cursor(widget : TWidget, cursor : string) : TRet;
export declare function window_manager_back(widget : TWidget) : TRet;
export declare function window_manager_back_to_home(widget : TWidget) : TRet;
export declare function window_manager_back_to(widget : TWidget, target : string) : TRet;
export declare function window_base_cast(widget : TWidget) : TWidget;
export declare function window_base_t_get_prop_theme(nativeObj : any);
export declare function window_base_t_get_prop_closable(nativeObj : any);
export declare function edit_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function edit_cast(widget : TWidget) : TWidget;
export declare function edit_get_int(widget : TWidget) : number;
export declare function edit_get_double(widget : TWidget) : number;
export declare function edit_set_int(widget : TWidget, value : any) : TRet;
export declare function edit_set_double(widget : TWidget, value : any) : TRet;
export declare function edit_set_text_limit(widget : TWidget, min : number, max : number) : TRet;
export declare function edit_set_int_limit(widget : TWidget, min : number, max : number, step : number) : TRet;
export declare function edit_set_float_limit(widget : TWidget, min : number, max : number, step : number) : TRet;
export declare function edit_set_readonly(widget : TWidget, readonly : boolean) : TRet;
export declare function edit_set_auto_fix(widget : TWidget, auto_fix : boolean) : TRet;
export declare function edit_set_select_none_when_focused(widget : TWidget, select_none_when_focused : boolean) : TRet;
export declare function edit_set_open_im_when_focused(widget : TWidget, open_im_when_focused : boolean) : TRet;
export declare function edit_set_input_type(widget : TWidget, type : TInputType) : TRet;
export declare function edit_set_input_tips(widget : TWidget, tips : string) : TRet;
export declare function edit_set_password_visible(widget : TWidget, password_visible : boolean) : TRet;
export declare function edit_set_focus(widget : TWidget, focus : boolean) : TRet;
export declare function edit_set_cursor(widget : TWidget, cursor : number) : TRet;
export declare function edit_t_get_prop_readonly(nativeObj : any);
export declare function edit_t_get_prop_password_visible(nativeObj : any);
export declare function edit_t_get_prop_auto_fix(nativeObj : any);
export declare function edit_t_get_prop_select_none_when_focused(nativeObj : any);
export declare function edit_t_get_prop_open_im_when_focused(nativeObj : any);
export declare function edit_t_get_prop_tips(nativeObj : any);
export declare function edit_t_get_prop_input_type(nativeObj : any);
export declare function edit_t_get_prop_min(nativeObj : any);
export declare function edit_t_get_prop_max(nativeObj : any);
export declare function edit_t_get_prop_step(nativeObj : any);
export declare function style_mutable_set_name(s : TStyle, name : string) : TRet;
export declare function style_mutable_set_int(s : TStyle, state : string, name : string, val : number) : TRet;
export declare function style_mutable_cast(s : TStyle) : TStyle;
export declare function style_mutable_create(widget : TWidget, default_style : TStyle) : TStyle;
export declare function style_mutable_t_get_prop_name(nativeObj : any);
export declare function dragger_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function dragger_cast(widget : TWidget) : TWidget;
export declare function dragger_set_range(widget : TWidget, x_min : number, y_min : number, x_max : number, y_max : number) : TWidget;
export declare function dragger_t_get_prop_x_min(nativeObj : any);
export declare function dragger_t_get_prop_y_min(nativeObj : any);
export declare function dragger_t_get_prop_x_max(nativeObj : any);
export declare function dragger_t_get_prop_y_max(nativeObj : any);
export declare function image_base_set_image(widget : TWidget, name : string) : TRet;
export declare function image_base_set_rotation(widget : TWidget, rotation : number) : TRet;
export declare function image_base_set_scale(widget : TWidget, scale_x : number, scale_y : number) : TRet;
export declare function image_base_set_anchor(widget : TWidget, anchor_x : number, anchor_y : number) : TRet;
export declare function image_base_set_selected(widget : TWidget, selected : boolean) : TRet;
export declare function image_base_set_selectable(widget : TWidget, selectable : boolean) : TRet;
export declare function image_base_set_clickable(widget : TWidget, clickable : boolean) : TRet;
export declare function image_base_cast(widget : TWidget) : TWidget;
export declare function image_base_t_get_prop_image(nativeObj : any);
export declare function image_base_t_get_prop_anchor_x(nativeObj : any);
export declare function image_base_t_get_prop_anchor_y(nativeObj : any);
export declare function image_base_t_get_prop_scale_x(nativeObj : any);
export declare function image_base_t_get_prop_scale_y(nativeObj : any);
export declare function image_base_t_get_prop_rotation(nativeObj : any);
export declare function image_base_t_get_prop_clickable(nativeObj : any);
export declare function image_base_t_get_prop_selectable(nativeObj : any);
export declare function image_base_t_get_prop_selected(nativeObj : any);
export declare function window_event_cast(event : TEvent) : TWindowEvent;
export declare function window_event_t_get_prop_window(nativeObj : any);
export declare function paint_event_cast(event : TEvent) : TPaintEvent;
export declare function paint_event_t_get_prop_c(nativeObj : any);
export declare function key_event_cast(event : TEvent) : TKeyEvent;
export declare function key_event_t_get_prop_key(nativeObj : any);
export declare function key_event_t_get_prop_alt(nativeObj : any);
export declare function key_event_t_get_prop_lalt(nativeObj : any);
export declare function key_event_t_get_prop_ralt(nativeObj : any);
export declare function key_event_t_get_prop_ctrl(nativeObj : any);
export declare function key_event_t_get_prop_lctrl(nativeObj : any);
export declare function key_event_t_get_prop_rctrl(nativeObj : any);
export declare function key_event_t_get_prop_shift(nativeObj : any);
export declare function key_event_t_get_prop_lshift(nativeObj : any);
export declare function key_event_t_get_prop_rshift(nativeObj : any);
export declare function key_event_t_get_prop_cmd(nativeObj : any);
export declare function key_event_t_get_prop_menu(nativeObj : any);
export declare function key_event_t_get_prop_capslock(nativeObj : any);
export declare function pointer_event_cast(event : TEvent) : TPointerEvent;
export declare function pointer_event_t_get_prop_x(nativeObj : any);
export declare function pointer_event_t_get_prop_y(nativeObj : any);
export declare function pointer_event_t_get_prop_button(nativeObj : any);
export declare function pointer_event_t_get_prop_pressed(nativeObj : any);
export declare function pointer_event_t_get_prop_alt(nativeObj : any);
export declare function pointer_event_t_get_prop_ctrl(nativeObj : any);
export declare function pointer_event_t_get_prop_cmd(nativeObj : any);
export declare function pointer_event_t_get_prop_menu(nativeObj : any);
export declare function pointer_event_t_get_prop_shift(nativeObj : any);
export declare function orientation_event_cast(event : TEvent) : TOrientationEvent;
export declare function orientation_event_t_get_prop_orientation(nativeObj : any);
export declare function wheel_event_cast(event : TEvent) : TWheelEvent;
export declare function wheel_event_t_get_prop_dy(nativeObj : any);
export declare function wheel_event_t_get_prop_alt(nativeObj : any);
export declare function wheel_event_t_get_prop_ctrl(nativeObj : any);
export declare function wheel_event_t_get_prop_shift(nativeObj : any);
export declare function app_bar_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function app_bar_cast(widget : TWidget) : TWidget;
export declare function button_group_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function button_group_cast(widget : TWidget) : TWidget;
export declare function button_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function button_cast(widget : TWidget) : TWidget;
export declare function button_set_repeat(widget : TWidget, repeat : number) : TRet;
export declare function button_set_enable_long_press(widget : TWidget, enable_long_press : boolean) : TRet;
export declare function button_t_get_prop_repeat(nativeObj : any);
export declare function button_t_get_prop_enable_long_press(nativeObj : any);
export declare function digit_clock_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function digit_clock_cast(widget : TWidget) : TWidget;
export declare function digit_clock_set_format(widget : TWidget, format : string) : TRet;
export declare function digit_clock_t_get_prop_format(nativeObj : any);
export declare function check_button_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function check_button_create_radio(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function check_button_set_value(widget : TWidget, value : any) : TRet;
export declare function check_button_cast(widget : TWidget) : TWidget;
export declare function check_button_t_get_prop_value(nativeObj : any);
export declare function color_tile_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function color_tile_cast(widget : TWidget) : TWidget;
export declare function color_tile_set_bg_color(widget : TWidget, color : string) : TRet;
export declare function color_tile_t_get_prop_bg_color(nativeObj : any);
export declare function color_tile_t_get_prop_border_color(nativeObj : any);
export declare function column_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function column_cast(widget : TWidget) : TWidget;
export declare function combo_box_item_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function combo_box_item_cast(widget : TWidget) : TWidget;
export declare function combo_box_item_set_checked(widget : TWidget, checked : boolean) : TRet;
export declare function combo_box_item_set_value(widget : TWidget, value : any) : TRet;
export declare function combo_box_item_t_get_prop_value(nativeObj : any);
export declare function combo_box_item_t_get_prop_checked(nativeObj : any);
export declare function combo_box_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function combo_box_cast(widget : TWidget) : TWidget;
export declare function combo_box_set_open_window(widget : TWidget, open_window : string) : TRet;
export declare function combo_box_reset_options(widget : TWidget) : TRet;
export declare function combo_box_count_options(widget : TWidget) : number;
export declare function combo_box_set_selected_index(widget : TWidget, index : number) : TRet;
export declare function combo_box_set_localize_options(widget : TWidget, localize_options : boolean) : TRet;
export declare function combo_box_set_value(widget : TWidget, value : any) : TRet;
export declare function combo_box_set_item_height(widget : TWidget, item_height : number) : TRet;
export declare function combo_box_append_option(widget : TWidget, value : any, text : string) : TRet;
export declare function combo_box_set_options(widget : TWidget, options : string) : TRet;
export declare function combo_box_get_value(widget : TWidget) : number;
export declare function combo_box_get_text(widget : TWidget) : string;
export declare function combo_box_t_get_prop_open_window(nativeObj : any);
export declare function combo_box_t_get_prop_selected_index(nativeObj : any);
export declare function combo_box_t_get_prop_value(nativeObj : any);
export declare function combo_box_t_get_prop_localize_options(nativeObj : any);
export declare function combo_box_t_get_prop_options(nativeObj : any);
export declare function combo_box_t_get_prop_item_height(nativeObj : any);
export declare function dialog_client_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function dialog_client_cast(widget : TWidget) : TWidget;
export declare function dialog_title_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function dialog_title_cast(widget : TWidget) : TWidget;
export declare function object_default_create() : TObject;
export declare function object_default_unref(obj : TObject) : TRet;
export declare function object_default_clear_props(obj : TObject) : TRet;
export declare function object_default_t_get_prop_props_size(nativeObj : any);
export declare function window_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function window_set_fullscreen(widget : TWidget, fullscreen : boolean) : TRet;
export declare function window_open(name : string) : TWidget;
export declare function window_open_and_close(name : string, to_close : TWidget) : TWidget;
export declare function window_close(widget : TWidget) : TRet;
export declare function window_close_force(widget : TWidget) : TRet;
export declare function window_cast(widget : TWidget) : TWidget;
export declare function window_t_get_prop_fullscreen(nativeObj : any);
export declare function timer_info_cast(timer : TTimerInfo) : TTimerInfo;
export declare function timer_info_t_get_prop_ctx(nativeObj : any);
export declare function timer_info_t_get_prop_id(nativeObj : any);
export declare function timer_info_t_get_prop_now(nativeObj : any);
export declare function combo_box_ex_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function image_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function image_set_draw_type(widget : TWidget, draw_type : TImageDrawType) : TRet;
export declare function image_cast(widget : TWidget) : TWidget;
export declare function image_t_get_prop_draw_type(nativeObj : any);
export declare function gif_image_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function gif_image_cast(widget : TWidget) : TWidget;
export declare function keyboard_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function keyboard_cast(widget : TWidget) : TWidget;
export declare function popup_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function popup_cast(widget : TWidget) : TWidget;
export declare function popup_set_close_when_click(widget : TWidget, close_when_click : boolean) : TRet;
export declare function popup_set_close_when_click_outside(widget : TWidget, close_when_click_outside : boolean) : TRet;
export declare function popup_t_get_prop_close_when_click(nativeObj : any);
export declare function popup_t_get_prop_close_when_click_outside(nativeObj : any);
export declare function object_array_create() : TObject;
export declare function object_array_unref(obj : TObject) : TRet;
export declare function object_array_clear_props(obj : TObject) : TRet;
export declare function object_array_t_get_prop_props_size(nativeObj : any);
export declare function spin_box_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function spin_box_cast(widget : TWidget) : TWidget;
export declare function system_bar_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function system_bar_cast(widget : TWidget) : TWidget;
export declare function idle_info_cast(idle : TIdleInfo) : TIdleInfo;
export declare function idle_info_t_get_prop_ctx(nativeObj : any);
export declare function idle_info_t_get_prop_id(nativeObj : any);
export declare function svg_image_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function svg_image_set_image(widget : TWidget, name : string) : TRet;
export declare function svg_image_cast(widget : TWidget) : TWidget;
export declare function dialog_create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function dialog_create_simple(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget;
export declare function dialog_cast(widget : TWidget) : TWidget;
export declare function dialog_get_title(widget : TWidget) : TWidget;
export declare function dialog_get_client(widget : TWidget) : TWidget;
export declare function dialog_open(name : string) : TWidget;
export declare function dialog_set_title(widget : TWidget, title : string) : TRet;
export declare function dialog_modal(widget : TWidget) : TRet;
export declare function dialog_quit(widget : TWidget, code : number) : TRet;
export declare function dialog_is_quited(widget : TWidget) : boolean;
export declare function dialog_is_modal(widget : TWidget) : boolean;
export declare function dialog_toast(text : string, duration : number) : TRet;
export declare function dialog_info(title : string, text : string) : TRet;
export declare function dialog_warn(title : string, text : string) : TRet;
export declare function dialog_confirm(title : string, text : string) : TRet;
export declare function dialog_t_get_prop_highlight(nativeObj : any);
export class TGlobal {
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

 static isPointerPressed() : boolean  {
   return tk_is_pointer_pressed();
 }

}

export class TBitmap {
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

export enum TImageDrawType {
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

export class TCanvas {
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

 setClipRectEx(r : TRect, translate : boolean) : TRet  {
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

 set globalAlpha(v : number) {
   this.setGlobalAlpha(v);
 }

 get globalAlpha() : number {
   return canvas_t_get_prop_global_alpha(this.nativeObj);
 }

}

export enum TClipBoardDataType {
 NONE = CLIP_BOARD_DATA_TYPE_NONE(),
 TEXT = CLIP_BOARD_DATA_TYPE_TEXT(),
};

export class TClipBoard {
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

export enum TDialogQuitCode {
 NONE = DIALOG_QUIT_NONE(),
 OK = DIALOG_QUIT_OK(),
 YES = DIALOG_QUIT_YES(),
 CANCEL = DIALOG_QUIT_CANCEL(),
 NO = DIALOG_QUIT_NO(),
 OTHER = DIALOG_QUIT_OTHER(),
};

export enum TEventType {
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
 NONE = EVT_NONE(),
 PROP_WILL_CHANGE = EVT_PROP_WILL_CHANGE(),
 PROP_CHANGED = EVT_PROP_CHANGED(),
 ITEMS_WILL_CHANGE = EVT_ITEMS_WILL_CHANGE(),
 ITEMS_CHANGED = EVT_ITEMS_CHANGED(),
 PROPS_CHANGED = EVT_PROPS_CHANGED(),
 PROGRESS = EVT_PROGRESS(),
 DESTROY = EVT_DESTROY(),
};

export class TFontManager {
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

export enum TGlyphFormat {
 ALPHA = GLYPH_FMT_ALPHA(),
 MONO = GLYPH_FMT_MONO(),
 RGBA = GLYPH_FMT_RGBA(),
};

export class TIdle {
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

export class TValue {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 setBool(value : any) : TValue  {
   return new TValue(value_set_bool(this.nativeObj, value));
 }

 bool() : boolean  {
   return value_bool(this.nativeObj);
 }

 setInt8(value : any) : TValue  {
   return new TValue(value_set_int8(this.nativeObj, value));
 }

 int8() : number  {
   return value_int8(this.nativeObj);
 }

 setUint8(value : any) : TValue  {
   return new TValue(value_set_uint8(this.nativeObj, value));
 }

 uint8() : number  {
   return value_uint8(this.nativeObj);
 }

 setInt16(value : any) : TValue  {
   return new TValue(value_set_int16(this.nativeObj, value));
 }

 int16() : number  {
   return value_int16(this.nativeObj);
 }

 setUint16(value : any) : TValue  {
   return new TValue(value_set_uint16(this.nativeObj, value));
 }

 uint16() : number  {
   return value_uint16(this.nativeObj);
 }

 setInt32(value : any) : TValue  {
   return new TValue(value_set_int32(this.nativeObj, value));
 }

 int32() : number  {
   return value_int32(this.nativeObj);
 }

 setUint32(value : any) : TValue  {
   return new TValue(value_set_uint32(this.nativeObj, value));
 }

 setInt64(value : any) : TValue  {
   return new TValue(value_set_int64(this.nativeObj, value));
 }

 int64() : number  {
   return value_int64(this.nativeObj);
 }

 setUint64(value : any) : TValue  {
   return new TValue(value_set_uint64(this.nativeObj, value));
 }

 uint64() : number  {
   return value_uint64(this.nativeObj);
 }

 setFloat(value : any) : TValue  {
   return new TValue(value_set_float(this.nativeObj, value));
 }

 float32() : number  {
   return value_float32(this.nativeObj);
 }

 setFloat64(value : any) : TValue  {
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

 isNull() : boolean  {
   return value_is_null(this.nativeObj);
 }

 setInt(value : any) : TValue  {
   return new TValue(value_set_int(this.nativeObj, value));
 }

 setObject(value : TObject) : TValue  {
   return new TValue(value_set_object(this.nativeObj, value != null ? (value.nativeObj || value) : null));
 }

 object() : TObject  {
   return new TObject(value_object(this.nativeObj));
 }

 setToken(value : any) : TValue  {
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

export class TImageManager {
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

export enum TInputType {
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

export enum TValueType {
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

export class TInputMethod {
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

export enum TKeyCode {
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

export class TLocaleInfo {
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

 off(id : number) : TRet  {
   return locale_info_off(this.nativeObj, id);
 }

}

export enum TStyleId {
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

export class TStyle {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 notifyWidgetStateChanged(widget : TWidget) : TRet  {
   return style_notify_widget_state_changed(this.nativeObj, widget != null ? (widget.nativeObj || widget) : null);
 }

 isValid() : boolean  {
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

 isMutable() : boolean  {
   return style_is_mutable(this.nativeObj);
 }

}

export class TTheme {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static instance() : TTheme  {
   return new TTheme(theme());
 }

}

export class TTimer {
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

export enum TAlignV {
 NONE = ALIGN_V_NONE(),
 MIDDLE = ALIGN_V_MIDDLE(),
 TOP = ALIGN_V_TOP(),
 BOTTOM = ALIGN_V_BOTTOM(),
};

export enum TAlignH {
 NONE = ALIGN_H_NONE(),
 CENTER = ALIGN_H_CENTER(),
 LEFT = ALIGN_H_LEFT(),
 RIGHT = ALIGN_H_RIGHT(),
};

export enum TAppType {
 MOBILE = APP_MOBILE(),
 SIMULATOR = APP_SIMULATOR(),
 DESKTOP = APP_DESKTOP(),
};

export enum TBitmapFormat {
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

export enum TBitmapFlag {
 NONE = BITMAP_FLAG_NONE(),
 OPAQUE = BITMAP_FLAG_OPAQUE(),
 IMMUTABLE = BITMAP_FLAG_IMMUTABLE(),
 TEXTURE = BITMAP_FLAG_TEXTURE(),
 CHANGED = BITMAP_FLAG_CHANGED(),
 PREMULTI_ALPHA = BITMAP_FLAG_PREMULTI_ALPHA(),
};

export class TVgcanvas {
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

 arc(x : number, y : number, r : number, start_angle : number, end_angle : number, ccw : boolean) : TRet  {
   return vgcanvas_arc(this.nativeObj, x, y, r, start_angle, end_angle, ccw);
 }

 isPointInPath(x : number, y : number) : boolean  {
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

 paint(stroke : boolean, img : TBitmap) : TRet  {
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

 setAntialias(value : any) : TRet  {
   return vgcanvas_set_antialias(this.nativeObj, value);
 }

 setGlobalAlpha(alpha : number) : TRet  {
   return vgcanvas_set_global_alpha(this.nativeObj, alpha);
 }

 setLineWidth(value : any) : TRet  {
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

 setMiterLimit(value : any) : TRet  {
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

 get antiAlias() : boolean {
   return vgcanvas_t_get_prop_anti_alias(this.nativeObj);
 }

 set lineWidth(v : number) {
   this.setLineWidth(v);
 }

 get lineWidth() : number {
   return vgcanvas_t_get_prop_line_width(this.nativeObj);
 }

 set globalAlpha(v : number) {
   this.setGlobalAlpha(v);
 }

 get globalAlpha() : number {
   return vgcanvas_t_get_prop_global_alpha(this.nativeObj);
 }

 set miterLimit(v : number) {
   this.setMiterLimit(v);
 }

 get miterLimit() : number {
   return vgcanvas_t_get_prop_miter_limit(this.nativeObj);
 }

 set lineCap(v : string) {
   this.setLineCap(v);
 }

 get lineCap() : string {
   return vgcanvas_t_get_prop_line_cap(this.nativeObj);
 }

 set lineJoin(v : string) {
   this.setLineJoin(v);
 }

 get lineJoin() : string {
   return vgcanvas_t_get_prop_line_join(this.nativeObj);
 }

 set font(v : string) {
   this.setFont(v);
 }

 get font() : string {
   return vgcanvas_t_get_prop_font(this.nativeObj);
 }

 set fontSize(v : number) {
   this.setFontSize(v);
 }

 get fontSize() : number {
   return vgcanvas_t_get_prop_font_size(this.nativeObj);
 }

 set textAlign(v : string) {
   this.setTextAlign(v);
 }

 get textAlign() : string {
   return vgcanvas_t_get_prop_text_align(this.nativeObj);
 }

 set textBaseline(v : string) {
   this.setTextBaseline(v);
 }

 get textBaseline() : string {
   return vgcanvas_t_get_prop_text_baseline(this.nativeObj);
 }

}

export enum TWidgetProp {
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

export enum TWidgetType {
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

export enum TWindowStage {
 NONE = WINDOW_STAGE_NONE(),
 CREATED = WINDOW_STAGE_CREATED(),
 OPENED = WINDOW_STAGE_OPENED(),
 CLOSED = WINDOW_STAGE_CLOSED(),
};

export enum TWindowClosable {
 YES = WINDOW_CLOSABLE_YES(),
 NO = WINDOW_CLOSABLE_NO(),
 CONFIRM = WINDOW_CLOSABLE_CONFIRM(),
};

export enum TWidgetState {
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

export class TWidget {
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

 setValue(value : any) : TRet  {
   return widget_set_value(this.nativeObj, value);
 }

 animateValueTo(value : any, duration : number) : TRet  {
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

 setEnable(enable : boolean) : TRet  {
   return widget_set_enable(this.nativeObj, enable);
 }

 setFeedback(feedback : boolean) : TRet  {
   return widget_set_feedback(this.nativeObj, feedback);
 }

 setFloating(floating : boolean) : TRet  {
   return widget_set_floating(this.nativeObj, floating);
 }

 setFocused(focused : boolean) : TRet  {
   return widget_set_focused(this.nativeObj, focused);
 }

 setState(state : string) : TRet  {
   return widget_set_state(this.nativeObj, state);
 }

 setOpacity(opacity : number) : TRet  {
   return widget_set_opacity(this.nativeObj, opacity);
 }

 destroyChildren() : TRet  {
   return widget_destroy_children(this.nativeObj);
 }

 addChild(child : TWidget) : TRet  {
   return widget_add_child(this.nativeObj, child != null ? (child.nativeObj || child) : null);
 }

 removeChild(child : TWidget) : TRet  {
   return widget_remove_child(this.nativeObj, child != null ? (child.nativeObj || child) : null);
 }

 insertChild(index : number, child : TWidget) : TRet  {
   return widget_insert_child(this.nativeObj, index, child != null ? (child.nativeObj || child) : null);
 }

 restack(index : number) : TRet  {
   return widget_restack(this.nativeObj, index);
 }

 child(name : string) : TWidget  {
   return new TWidget(widget_child(this.nativeObj, name));
 }

 lookup(name : string, recursive : boolean) : TWidget  {
   return new TWidget(widget_lookup(this.nativeObj, name, recursive));
 }

 lookupByType(type : string, recursive : boolean) : TWidget  {
   return new TWidget(widget_lookup_by_type(this.nativeObj, type, recursive));
 }

 setVisible(visible : boolean, recursive : boolean) : TRet  {
   return widget_set_visible(this.nativeObj, visible, recursive);
 }

 setVisibleOnly(visible : boolean) : TRet  {
   return widget_set_visible_only(this.nativeObj, visible);
 }

 setSensitive(sensitive : boolean) : TRet  {
   return widget_set_sensitive(this.nativeObj, sensitive);
 }

 on(type : TEventType, on_event : Function, ctx : any) : number  {
   return widget_on(this.nativeObj, type, on_event, ctx);
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

 setPropBool(name : string, v : boolean) : TRet  {
   return widget_set_prop_bool(this.nativeObj, name, v);
 }

 getPropBool(name : string, defval : boolean) : boolean  {
   return widget_get_prop_bool(this.nativeObj, name, defval);
 }

 isWindowOpened() : boolean  {
   return widget_is_window_opened(this.nativeObj);
 }

 isWindow() : boolean  {
   return widget_is_window(this.nativeObj);
 }

 isDesigningWindow() : boolean  {
   return widget_is_designing_window(this.nativeObj);
 }

 isWindowManager() : boolean  {
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

 equal(other : TWidget) : boolean  {
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

 setStyleInt(state_and_name : string, value : any) : TRet  {
   return widget_set_style_int(this.nativeObj, state_and_name, value);
 }

 setStyleStr(state_and_name : string, value : string) : TRet  {
   return widget_set_style_str(this.nativeObj, state_and_name, value);
 }

 setStyleColor(state_and_name : string, value : any) : TRet  {
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

 set name(v : string) {
   this.setName(v);
 }

 get name() : string {
   return widget_t_get_prop_name(this.nativeObj);
 }

 set trText(v : string) {
   this.setTrText(v);
 }

 get trText() : string {
   return widget_t_get_prop_tr_text(this.nativeObj);
 }

 get style() : string {
   return widget_t_get_prop_style(this.nativeObj);
 }

 set animation(v : string) {
   this.setAnimation(v);
 }

 get animation() : string {
   return widget_t_get_prop_animation(this.nativeObj);
 }

 set enable(v : boolean) {
   this.setEnable(v);
 }

 get enable() : boolean {
   return widget_t_get_prop_enable(this.nativeObj);
 }

 set feedback(v : boolean) {
   this.setFeedback(v);
 }

 get feedback() : boolean {
   return widget_t_get_prop_feedback(this.nativeObj);
 }

 set visible(v : boolean) {
   widget_t_set_prop_visible(this.nativeObj, v);
 }

 get visible() : boolean {
   return widget_t_get_prop_visible(this.nativeObj);
 }

 set sensitive(v : boolean) {
   widget_t_set_prop_sensitive(this.nativeObj, v);
 }

 get sensitive() : boolean {
   return widget_t_get_prop_sensitive(this.nativeObj);
 }

 set focusable(v : boolean) {
   widget_t_set_prop_focusable(this.nativeObj, v);
 }

 get focusable() : boolean {
   return widget_t_get_prop_focusable(this.nativeObj);
 }

 set withFocusState(v : boolean) {
   widget_t_set_prop_with_focus_state(this.nativeObj, v);
 }

 get withFocusState() : boolean {
   return widget_t_get_prop_with_focus_state(this.nativeObj);
 }

 set floating(v : boolean) {
   this.setFloating(v);
 }

 get floating() : boolean {
   return widget_t_get_prop_floating(this.nativeObj);
 }

 get parent() : TWidget {
   return new TWidget(widget_t_get_prop_parent(this.nativeObj));
 }

}

export enum TRet {
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

export class TTimerManager {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class TTimeNow {
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

export class TRect {
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

export class TPointf {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class TPoint {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class TPath {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class TNamedValue {
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

 set name(v : string) {
   this.setName(v);
 }

 get name() : string {
   return named_value_t_get_prop_name(this.nativeObj);
 }

}

export enum TMIME_TYPE {
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

export class TIdleManager {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export enum TIndicatorDefaultPaint {
 AUTO = INDICATOR_DEFAULT_PAINT_AUTO(),
 FILL_DOT = INDICATOR_DEFAULT_PAINT_FILL_DOT(),
 STROKE_DOT = INDICATOR_DEFAULT_PAINT_STROKE_DOT(),
 FILL_RECT = INDICATOR_DEFAULT_PAINT_FILL_RECT(),
 STROKE_RECT = INDICATOR_DEFAULT_PAINT_STROKE_RECT(),
};

export class TFsFile {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class TEvent {
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

export class TEmitter {
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

 dispatchSimpleEvent(type : TEventType) : TRet  {
   return emitter_dispatch_simple_event(this.nativeObj, type);
 }

 on(type : TEventType, on_event : Function, ctx : any) : number  {
   return emitter_on(this.nativeObj, type, on_event, ctx);
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

export enum TEasingType {
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

export class TDateTime {
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

export class TColor {
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

 set color(v : number) {
   color_t_set_prop_color(this.nativeObj, v);
 }

 get color() : number {
   return color_t_get_prop_color(this.nativeObj);
 }

}

export class TAssetInfo {
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

export enum TAssetType {
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

export class TAssetsManager {
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

export class TColorComponent extends TWidget {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(widget : TWidget) : TWidget  {
   return new TColorComponent(color_component_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

}

export class TTimeClock extends TWidget {
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

 set hour(v : number) {
   this.setHour(v);
 }

 get hour() : number {
   return time_clock_t_get_prop_hour(this.nativeObj);
 }

 set minute(v : number) {
   this.setMinute(v);
 }

 get minute() : number {
   return time_clock_t_get_prop_minute(this.nativeObj);
 }

 set second(v : number) {
   this.setSecond(v);
 }

 get second() : number {
   return time_clock_t_get_prop_second(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
 }

 get image() : string {
   return time_clock_t_get_prop_image(this.nativeObj);
 }

 set bgImage(v : string) {
   this.setBgImage(v);
 }

 get bgImage() : string {
   return time_clock_t_get_prop_bg_image(this.nativeObj);
 }

 set hourImage(v : string) {
   this.setHourImage(v);
 }

 get hourImage() : string {
   return time_clock_t_get_prop_hour_image(this.nativeObj);
 }

 set minuteImage(v : string) {
   this.setMinuteImage(v);
 }

 get minuteImage() : string {
   return time_clock_t_get_prop_minute_image(this.nativeObj);
 }

 set secondImage(v : string) {
   this.setSecondImage(v);
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

export class TTextSelector extends TWidget {
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

 appendOption(value : any, text : string) : TRet  {
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

 setValue(value : any) : TRet  {
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

 set visibleNr(v : number) {
   this.setVisibleNr(v);
 }

 get visibleNr() : number {
   return text_selector_t_get_prop_visible_nr(this.nativeObj);
 }

 set selectedIndex(v : number) {
   this.setSelectedIndex(v);
 }

 get selectedIndex() : number {
   return text_selector_t_get_prop_selected_index(this.nativeObj);
 }

 set options(v : string) {
   this.setOptions(v);
 }

 get options() : string {
   return text_selector_t_get_prop_options(this.nativeObj);
 }

}

export class TSwitch extends TWidget {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
   return new TSwitch(switch_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 setValue(value : any) : TRet  {
   return switch_set_value(this.nativeObj, value);
 }

 static cast(widget : TWidget) : TWidget  {
   return new TSwitch(switch_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

 set value(v : boolean) {
   this.setValue(v);
 }

 get value() : boolean {
   return switch_t_get_prop_value(this.nativeObj);
 }

 get maxXoffsetRatio() : number {
   return switch_t_get_prop_max_xoffset_ratio(this.nativeObj);
 }

}

export class TPropChangeEvent extends TEvent {
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

export class TProgressEvent extends TEvent {
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

export class TView extends TWidget {
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

export class TSlideView extends TWidget {
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

 setVertical(vertical : boolean) : TRet  {
   return slide_view_set_vertical(this.nativeObj, vertical);
 }

 setAnimHint(anim_hint : string) : TRet  {
   return slide_view_set_anim_hint(this.nativeObj, anim_hint);
 }

 setLoop(loop : boolean) : TRet  {
   return slide_view_set_loop(this.nativeObj, loop);
 }

 set vertical(v : boolean) {
   this.setVertical(v);
 }

 get vertical() : boolean {
   return slide_view_t_get_prop_vertical(this.nativeObj);
 }

 set autoPlay(v : number) {
   this.setAutoPlay(v);
 }

 get autoPlay() : number {
   return slide_view_t_get_prop_auto_play(this.nativeObj);
 }

 set loop(v : boolean) {
   this.setLoop(v);
 }

 get loop() : boolean {
   return slide_view_t_get_prop_loop(this.nativeObj);
 }

 set animHint(v : string) {
   this.setAnimHint(v);
 }

 get animHint() : string {
   return slide_view_t_get_prop_anim_hint(this.nativeObj);
 }

}

export class TSlideIndicator extends TWidget {
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

 setValue(value : any) : TRet  {
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

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return slide_indicator_t_get_prop_value(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }

 get max() : number {
   return slide_indicator_t_get_prop_max(this.nativeObj);
 }

 set defaultPaint(v : TIndicatorDefaultPaint) {
   this.setDefaultPaint(v);
 }

 get defaultPaint() : TIndicatorDefaultPaint {
   return slide_indicator_t_get_prop_default_paint(this.nativeObj);
 }

 set autoHide(v : number) {
   this.setAutoHide(v);
 }

 get autoHide() : number {
   return slide_indicator_t_get_prop_auto_hide(this.nativeObj);
 }

 set margin(v : number) {
   this.setMargin(v);
 }

 get margin() : number {
   return slide_indicator_t_get_prop_margin(this.nativeObj);
 }

 set spacing(v : number) {
   this.setSpacing(v);
 }

 get spacing() : number {
   return slide_indicator_t_get_prop_spacing(this.nativeObj);
 }

 set size(v : number) {
   this.setSize(v);
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

 set indicatedTarget(v : string) {
   this.setIndicatedTarget(v);
 }

 get indicatedTarget() : string {
   return slide_indicator_t_get_prop_indicated_target(this.nativeObj);
 }

}

export class TSlideMenu extends TWidget {
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

 setValue(value : any) : TRet  {
   return slide_menu_set_value(this.nativeObj, value);
 }

 setAlignV(align_v : TAlignV) : TRet  {
   return slide_menu_set_align_v(this.nativeObj, align_v);
 }

 setMinScale(min_scale : number) : TRet  {
   return slide_menu_set_min_scale(this.nativeObj, min_scale);
 }

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return slide_menu_t_get_prop_value(this.nativeObj);
 }

 set alignV(v : TAlignV) {
   this.setAlignV(v);
 }

 get alignV() : TAlignV {
   return slide_menu_t_get_prop_align_v(this.nativeObj);
 }

 set minScale(v : number) {
   this.setMinScale(v);
 }

 get minScale() : number {
   return slide_menu_t_get_prop_min_scale(this.nativeObj);
 }

}

export class TScrollView extends TWidget {
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

 setXslidable(xslidable : boolean) : TRet  {
   return scroll_view_set_xslidable(this.nativeObj, xslidable);
 }

 setYslidable(yslidable : boolean) : TRet  {
   return scroll_view_set_yslidable(this.nativeObj, yslidable);
 }

 setOffset(xoffset : number, yoffset : number) : TRet  {
   return scroll_view_set_offset(this.nativeObj, xoffset, yoffset);
 }

 setSpeedScale(xspeed_scale : number, yspeed_scale : number) : TRet  {
   return scroll_view_set_speed_scale(this.nativeObj, xspeed_scale, yspeed_scale);
 }

 scrollTo(xoffset_end : number, yoffset_end : number, duration : number) : TRet  {
   return scroll_view_scroll_to(this.nativeObj, xoffset_end, yoffset_end, duration);
 }

 scrollDeltaTo(xoffset_delta : number, yoffset_delta : number, duration : number) : TRet  {
   return scroll_view_scroll_delta_to(this.nativeObj, xoffset_delta, yoffset_delta, duration);
 }

 set virtualW(v : number) {
   this.setVirtualW(v);
 }

 get virtualW() : number {
   return scroll_view_t_get_prop_virtual_w(this.nativeObj);
 }

 set virtualH(v : number) {
   this.setVirtualH(v);
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

 get xspeedScale() : number {
   return scroll_view_t_get_prop_xspeed_scale(this.nativeObj);
 }

 get yspeedScale() : number {
   return scroll_view_t_get_prop_yspeed_scale(this.nativeObj);
 }

 set xslidable(v : boolean) {
   this.setXslidable(v);
 }

 get xslidable() : boolean {
   return scroll_view_t_get_prop_xslidable(this.nativeObj);
 }

 set yslidable(v : boolean) {
   this.setYslidable(v);
 }

 get yslidable() : boolean {
   return scroll_view_t_get_prop_yslidable(this.nativeObj);
 }

}

export class TScrollBar extends TWidget {
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

 scrollTo(value : any, duration : number) : TRet  {
   return scroll_bar_scroll_to(this.nativeObj, value, duration);
 }

 setValue(value : any) : TRet  {
   return scroll_bar_set_value(this.nativeObj, value);
 }

 addDelta(delta : number) : TRet  {
   return scroll_bar_add_delta(this.nativeObj, delta);
 }

 scrollDelta(delta : number) : TRet  {
   return scroll_bar_scroll_delta(this.nativeObj, delta);
 }

 setValueOnly(value : any) : TRet  {
   return scroll_bar_set_value_only(this.nativeObj, value);
 }

 isMobile() : boolean  {
   return scroll_bar_is_mobile(this.nativeObj);
 }

 get virtualSize() : number {
   return scroll_bar_t_get_prop_virtual_size(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return scroll_bar_t_get_prop_value(this.nativeObj);
 }

 get row() : number {
   return scroll_bar_t_get_prop_row(this.nativeObj);
 }

 get animatable() : boolean {
   return scroll_bar_t_get_prop_animatable(this.nativeObj);
 }

}

export class TTabControl extends TWidget {
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

export class TListView extends TWidget {
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

 setAutoHideScrollBar(auto_hide_scroll_bar : boolean) : TRet  {
   return list_view_set_auto_hide_scroll_bar(this.nativeObj, auto_hide_scroll_bar);
 }

 static cast(widget : TWidget) : TWidget  {
   return new TListView(list_view_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

 set itemHeight(v : number) {
   this.setItemHeight(v);
 }

 get itemHeight() : number {
   return list_view_t_get_prop_item_height(this.nativeObj);
 }

 set defaultItemHeight(v : number) {
   this.setDefaultItemHeight(v);
 }

 get defaultItemHeight() : number {
   return list_view_t_get_prop_default_item_height(this.nativeObj);
 }

 set autoHideScrollBar(v : boolean) {
   this.setAutoHideScrollBar(v);
 }

 get autoHideScrollBar() : boolean {
   return list_view_t_get_prop_auto_hide_scroll_bar(this.nativeObj);
 }

}

export class TListViewH extends TWidget {
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

 set itemWidth(v : number) {
   this.setItemWidth(v);
 }

 get itemWidth() : number {
   return list_view_h_t_get_prop_item_width(this.nativeObj);
 }

 set spacing(v : number) {
   this.setSpacing(v);
 }

 get spacing() : number {
   return list_view_h_t_get_prop_spacing(this.nativeObj);
 }

}

export class TTabButton extends TWidget {
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

 setValue(value : any) : TRet  {
   return tab_button_set_value(this.nativeObj, value);
 }

 setIcon(name : string) : TRet  {
   return tab_button_set_icon(this.nativeObj, name);
 }

 setActiveIcon(name : string) : TRet  {
   return tab_button_set_active_icon(this.nativeObj, name);
 }

 set value(v : boolean) {
   this.setValue(v);
 }

 get value() : boolean {
   return tab_button_t_get_prop_value(this.nativeObj);
 }

 set activeIcon(v : string) {
   this.setActiveIcon(v);
 }

 get activeIcon() : string {
   return tab_button_t_get_prop_active_icon(this.nativeObj);
 }

 set icon(v : string) {
   this.setIcon(v);
 }

 get icon() : string {
   return tab_button_t_get_prop_icon(this.nativeObj);
 }

}

export class TTabButtonGroup extends TWidget {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
   return new TTabButtonGroup(tab_button_group_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 setCompact(compact : boolean) : TRet  {
   return tab_button_group_set_compact(this.nativeObj, compact);
 }

 setScrollable(scrollable : boolean) : TRet  {
   return tab_button_group_set_scrollable(this.nativeObj, scrollable);
 }

 static cast(widget : TWidget) : TWidget  {
   return new TTabButtonGroup(tab_button_group_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

 set compact(v : boolean) {
   this.setCompact(v);
 }

 get compact() : boolean {
   return tab_button_group_t_get_prop_compact(this.nativeObj);
 }

 set scrollable(v : boolean) {
   this.setScrollable(v);
 }

 get scrollable() : boolean {
   return tab_button_group_t_get_prop_scrollable(this.nativeObj);
 }

}

export class TListItem extends TWidget {
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

export class THscrollLabel extends TWidget {
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

 setOnlyFocus(only_focus : boolean) : TRet  {
   return hscroll_label_set_only_focus(this.nativeObj, only_focus);
 }

 setOnlyParentFocus(only_parent_focus : boolean) : TRet  {
   return hscroll_label_set_only_parent_focus(this.nativeObj, only_parent_focus);
 }

 setLoop(loop : boolean) : TRet  {
   return hscroll_label_set_loop(this.nativeObj, loop);
 }

 setYoyo(yoyo : boolean) : TRet  {
   return hscroll_label_set_yoyo(this.nativeObj, yoyo);
 }

 setEllipses(ellipses : boolean) : TRet  {
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

 set onlyFocus(v : boolean) {
   this.setOnlyFocus(v);
 }

 get onlyFocus() : boolean {
   return hscroll_label_t_get_prop_only_focus(this.nativeObj);
 }

 set onlyParentFocus(v : boolean) {
   this.setOnlyParentFocus(v);
 }

 get onlyParentFocus() : boolean {
   return hscroll_label_t_get_prop_only_parent_focus(this.nativeObj);
 }

 set loop(v : boolean) {
   this.setLoop(v);
 }

 get loop() : boolean {
   return hscroll_label_t_get_prop_loop(this.nativeObj);
 }

 set yoyo(v : boolean) {
   this.setYoyo(v);
 }

 get yoyo() : boolean {
   return hscroll_label_t_get_prop_yoyo(this.nativeObj);
 }

 set ellipses(v : boolean) {
   this.setEllipses(v);
 }

 get ellipses() : boolean {
   return hscroll_label_t_get_prop_ellipses(this.nativeObj);
 }

 set lull(v : number) {
   this.setLull(v);
 }

 get lull() : number {
   return hscroll_label_t_get_prop_lull(this.nativeObj);
 }

 set duration(v : number) {
   this.setDuration(v);
 }

 get duration() : number {
   return hscroll_label_t_get_prop_duration(this.nativeObj);
 }

 set xoffset(v : number) {
   this.setXoffset(v);
 }

 get xoffset() : number {
   return hscroll_label_t_get_prop_xoffset(this.nativeObj);
 }

 get textW() : number {
   return hscroll_label_t_get_prop_text_w(this.nativeObj);
 }

}

export class TRichText extends TWidget {
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

export class TProgressCircle extends TWidget {
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

 setValue(value : any) : TRet  {
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

 setShowText(show_text : boolean) : TRet  {
   return progress_circle_set_show_text(this.nativeObj, show_text);
 }

 setCounterClockWise(counter_clock_wise : boolean) : TRet  {
   return progress_circle_set_counter_clock_wise(this.nativeObj, counter_clock_wise);
 }

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return progress_circle_t_get_prop_value(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }

 get max() : number {
   return progress_circle_t_get_prop_max(this.nativeObj);
 }

 set startAngle(v : number) {
   this.setStartAngle(v);
 }

 get startAngle() : number {
   return progress_circle_t_get_prop_start_angle(this.nativeObj);
 }

 set lineWidth(v : number) {
   this.setLineWidth(v);
 }

 get lineWidth() : number {
   return progress_circle_t_get_prop_line_width(this.nativeObj);
 }

 set unit(v : string) {
   this.setUnit(v);
 }

 get unit() : string {
   return progress_circle_t_get_prop_unit(this.nativeObj);
 }

 set counterClockWise(v : boolean) {
   this.setCounterClockWise(v);
 }

 get counterClockWise() : boolean {
   return progress_circle_t_get_prop_counter_clock_wise(this.nativeObj);
 }

 set showText(v : boolean) {
   this.setShowText(v);
 }

 get showText() : boolean {
   return progress_circle_t_get_prop_show_text(this.nativeObj);
 }

}

export class TSlider extends TWidget {
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

 setValue(value : any) : TRet  {
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

 setVertical(vertical : boolean) : TRet  {
   return slider_set_vertical(this.nativeObj, vertical);
 }

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return slider_t_get_prop_value(this.nativeObj);
 }

 set min(v : number) {
   this.setMin(v);
 }

 get min() : number {
   return slider_t_get_prop_min(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }

 get max() : number {
   return slider_t_get_prop_max(this.nativeObj);
 }

 set step(v : number) {
   this.setStep(v);
 }

 get step() : number {
   return slider_t_get_prop_step(this.nativeObj);
 }

 set vertical(v : boolean) {
   this.setVertical(v);
 }

 get vertical() : boolean {
   return slider_t_get_prop_vertical(this.nativeObj);
 }

 set barSize(v : number) {
   this.setBarSize(v);
 }

 get barSize() : number {
   return slider_t_get_prop_bar_size(this.nativeObj);
 }

}

export class TMledit extends TWidget {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
   return new TMledit(mledit_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 setReadonly(readonly : boolean) : TRet  {
   return mledit_set_readonly(this.nativeObj, readonly);
 }

 setFocus(focus : boolean) : TRet  {
   return mledit_set_focus(this.nativeObj, focus);
 }

 setWrapWord(wrap_word : boolean) : TRet  {
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

 set readonly(v : boolean) {
   this.setReadonly(v);
 }

 get readonly() : boolean {
   return mledit_t_get_prop_readonly(this.nativeObj);
 }

 get tips() : string {
   return mledit_t_get_prop_tips(this.nativeObj);
 }

 set wrapWord(v : boolean) {
   this.setWrapWord(v);
 }

 get wrapWord() : boolean {
   return mledit_t_get_prop_wrap_word(this.nativeObj);
 }

 set maxLines(v : number) {
   this.setMaxLines(v);
 }

 get maxLines() : number {
   return mledit_t_get_prop_max_lines(this.nativeObj);
 }

 set scrollLine(v : number) {
   this.setScrollLine(v);
 }

 get scrollLine() : number {
   return mledit_t_get_prop_scroll_line(this.nativeObj);
 }

}

export class TRow extends TWidget {
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

export class TProgressBar extends TWidget {
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

 setValue(value : any) : TRet  {
   return progress_bar_set_value(this.nativeObj, value);
 }

 setMax(max : number) : TRet  {
   return progress_bar_set_max(this.nativeObj, max);
 }

 setVertical(vertical : boolean) : TRet  {
   return progress_bar_set_vertical(this.nativeObj, vertical);
 }

 setShowText(show_text : boolean) : TRet  {
   return progress_bar_set_show_text(this.nativeObj, show_text);
 }

 getPercent() : number  {
   return progress_bar_get_percent(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return progress_bar_t_get_prop_value(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }

 get max() : number {
   return progress_bar_t_get_prop_max(this.nativeObj);
 }

 set vertical(v : boolean) {
   this.setVertical(v);
 }

 get vertical() : boolean {
   return progress_bar_t_get_prop_vertical(this.nativeObj);
 }

 set showText(v : boolean) {
   this.setShowText(v);
 }

 get showText() : boolean {
   return progress_bar_t_get_prop_show_text(this.nativeObj);
 }

}

export class TObject extends TEmitter {
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

 isCollection() : boolean  {
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

 getPropBool(name : string, defval : boolean) : boolean  {
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

 setPropInt(name : string, value : any) : TRet  {
   return object_set_prop_int(this.nativeObj, name, value);
 }

 setPropBool(name : string, value : any) : TRet  {
   return object_set_prop_bool(this.nativeObj, name, value);
 }

 setPropFloat(name : string, value : any) : TRet  {
   return object_set_prop_float(this.nativeObj, name, value);
 }

 copyProp(src : TObject, name : string) : TRet  {
   return object_copy_prop(this.nativeObj, src != null ? (src.nativeObj || src) : null, name);
 }

 hasProp(name : string) : boolean  {
   return object_has_prop(this.nativeObj, name);
 }

 eval(expr : string, v : TValue) : TRet  {
   return object_eval(this.nativeObj, expr, v != null ? (v.nativeObj || v) : null);
 }

 canExec(name : string, args : string) : boolean  {
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

 getPropBoolByPath(path : string, defval : boolean) : boolean  {
   return object_get_prop_bool_by_path(this.nativeObj, path, defval);
 }

 getPropFloatByPath(path : string, defval : number) : number  {
   return object_get_prop_float_by_path(this.nativeObj, path, defval);
 }

 get refCount() : number {
   return object_t_get_prop_ref_count(this.nativeObj);
 }

 set name(v : string) {
   this.setName(v);
 }

 get name() : string {
   return object_t_get_prop_name(this.nativeObj);
 }

}

export class TPages extends TWidget {
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

 set active(v : number) {
   this.setActive(v);
 }

 get active() : number {
   return pages_t_get_prop_active(this.nativeObj);
 }

}

export class TLineNumber extends TWidget {
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

export class TOverlay extends TWidget {
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

export class TImageValue extends TWidget {
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

 setValue(value : any) : TRet  {
   return image_value_set_value(this.nativeObj, value);
 }

 static cast(widget : TWidget) : TWidget  {
   return new TImageValue(image_value_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

 set image(v : string) {
   this.setImage(v);
 }

 get image() : string {
   return image_value_t_get_prop_image(this.nativeObj);
 }

 set format(v : string) {
   this.setFormat(v);
 }

 get format() : string {
   return image_value_t_get_prop_format(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return image_value_t_get_prop_value(this.nativeObj);
 }

}

export class TImageAnimation extends TWidget {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
   return new TImageAnimation(image_animation_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 setLoop(loop : boolean) : TRet  {
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

 setAutoPlay(auto_play : boolean) : TRet  {
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

 setUnloadAfterPaint(unload_after_paint : boolean) : TRet  {
   return image_animation_set_unload_after_paint(this.nativeObj, unload_after_paint);
 }

 static cast(widget : TWidget) : TWidget  {
   return new TImageAnimation(image_animation_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

 set image(v : string) {
   this.setImage(v);
 }

 get image() : string {
   return image_animation_t_get_prop_image(this.nativeObj);
 }

 set sequence(v : string) {
   this.setSequence(v);
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

 set loop(v : boolean) {
   this.setLoop(v);
 }

 get loop() : boolean {
   return image_animation_t_get_prop_loop(this.nativeObj);
 }

 set autoPlay(v : boolean) {
   this.setAutoPlay(v);
 }

 get autoPlay() : boolean {
   return image_animation_t_get_prop_auto_play(this.nativeObj);
 }

 set unloadAfterPaint(v : boolean) {
   this.setUnloadAfterPaint(v);
 }

 get unloadAfterPaint() : boolean {
   return image_animation_t_get_prop_unload_after_paint(this.nativeObj);
 }

 set format(v : string) {
   this.setFormat(v);
 }

 get format() : string {
   return image_animation_t_get_prop_format(this.nativeObj);
 }

 set interval(v : number) {
   this.setInterval(v);
 }

 get interval() : number {
   return image_animation_t_get_prop_interval(this.nativeObj);
 }

 set delay(v : number) {
   this.setDelay(v);
 }

 get delay() : number {
   return image_animation_t_get_prop_delay(this.nativeObj);
 }

}

export class TGuage extends TWidget {
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

 set image(v : string) {
   this.setImage(v);
 }

 get image() : string {
   return guage_t_get_prop_image(this.nativeObj);
 }

 set drawType(v : TImageDrawType) {
   this.setDrawType(v);
 }

 get drawType() : TImageDrawType {
   return guage_t_get_prop_draw_type(this.nativeObj);
 }

}

export class TGuagePointer extends TWidget {
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

 set angle(v : number) {
   this.setAngle(v);
 }

 get angle() : number {
   return guage_pointer_t_get_prop_angle(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
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

export class TLabel extends TWidget {
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

 set length(v : number) {
   this.setLength(v);
 }

 get length() : number {
   return label_t_get_prop_length(this.nativeObj);
 }

}

export class TDraggable extends TWidget {
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

 setVerticalOnly(vertical_only : boolean) : TRet  {
   return draggable_set_vertical_only(this.nativeObj, vertical_only);
 }

 setHorizontalOnly(horizontal_only : boolean) : TRet  {
   return draggable_set_horizontal_only(this.nativeObj, horizontal_only);
 }

 setDragWindow(drag_window : boolean) : TRet  {
   return draggable_set_drag_window(this.nativeObj, drag_window);
 }

 set top(v : number) {
   this.setTop(v);
 }

 get top() : number {
   return draggable_t_get_prop_top(this.nativeObj);
 }

 set bottom(v : number) {
   this.setBottom(v);
 }

 get bottom() : number {
   return draggable_t_get_prop_bottom(this.nativeObj);
 }

 set left(v : number) {
   this.setLeft(v);
 }

 get left() : number {
   return draggable_t_get_prop_left(this.nativeObj);
 }

 set right(v : number) {
   this.setRight(v);
 }

 get right() : number {
   return draggable_t_get_prop_right(this.nativeObj);
 }

 set verticalOnly(v : boolean) {
   this.setVerticalOnly(v);
 }

 get verticalOnly() : boolean {
   return draggable_t_get_prop_vertical_only(this.nativeObj);
 }

 set horizontalOnly(v : boolean) {
   this.setHorizontalOnly(v);
 }

 get horizontalOnly() : boolean {
   return draggable_t_get_prop_horizontal_only(this.nativeObj);
 }

 set dragWindow(v : boolean) {
   this.setDragWindow(v);
 }

 get dragWindow() : boolean {
   return draggable_t_get_prop_drag_window(this.nativeObj);
 }

}

export class TGroupBox extends TWidget {
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

export class TColorPicker extends TWidget {
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

export class TCanvasWidget extends TWidget {
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

export class TGrid extends TWidget {
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

export class TGridItem extends TWidget {
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

export class TWindowManager extends TWidget {
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

 getPointerPressed() : boolean  {
   return window_manager_get_pointer_pressed(this.nativeObj);
 }

 setShowFps(show_fps : boolean) : TRet  {
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

 backTo(target : string) : TRet  {
   return window_manager_back_to(this.nativeObj, target);
 }

}

export class TWindowBase extends TWidget {
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

export class TEdit extends TWidget {
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

 setInt(value : any) : TRet  {
   return edit_set_int(this.nativeObj, value);
 }

 setDouble(value : any) : TRet  {
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

 setReadonly(readonly : boolean) : TRet  {
   return edit_set_readonly(this.nativeObj, readonly);
 }

 setAutoFix(auto_fix : boolean) : TRet  {
   return edit_set_auto_fix(this.nativeObj, auto_fix);
 }

 setSelectNoneWhenFocused(select_none_when_focused : boolean) : TRet  {
   return edit_set_select_none_when_focused(this.nativeObj, select_none_when_focused);
 }

 setOpenImWhenFocused(open_im_when_focused : boolean) : TRet  {
   return edit_set_open_im_when_focused(this.nativeObj, open_im_when_focused);
 }

 setInputType(type : TInputType) : TRet  {
   return edit_set_input_type(this.nativeObj, type);
 }

 setInputTips(tips : string) : TRet  {
   return edit_set_input_tips(this.nativeObj, tips);
 }

 setPasswordVisible(password_visible : boolean) : TRet  {
   return edit_set_password_visible(this.nativeObj, password_visible);
 }

 setFocus(focus : boolean) : TRet  {
   return edit_set_focus(this.nativeObj, focus);
 }

 setCursor(cursor : number) : TRet  {
   return edit_set_cursor(this.nativeObj, cursor);
 }

 set readonly(v : boolean) {
   this.setReadonly(v);
 }

 get readonly() : boolean {
   return edit_t_get_prop_readonly(this.nativeObj);
 }

 set passwordVisible(v : boolean) {
   this.setPasswordVisible(v);
 }

 get passwordVisible() : boolean {
   return edit_t_get_prop_password_visible(this.nativeObj);
 }

 set autoFix(v : boolean) {
   this.setAutoFix(v);
 }

 get autoFix() : boolean {
   return edit_t_get_prop_auto_fix(this.nativeObj);
 }

 set selectNoneWhenFocused(v : boolean) {
   this.setSelectNoneWhenFocused(v);
 }

 get selectNoneWhenFocused() : boolean {
   return edit_t_get_prop_select_none_when_focused(this.nativeObj);
 }

 set openImWhenFocused(v : boolean) {
   this.setOpenImWhenFocused(v);
 }

 get openImWhenFocused() : boolean {
   return edit_t_get_prop_open_im_when_focused(this.nativeObj);
 }

 get tips() : string {
   return edit_t_get_prop_tips(this.nativeObj);
 }

 set inputType(v : TInputType) {
   this.setInputType(v);
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

export class TStyleMutable extends TStyle {
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

 set name(v : string) {
   this.setName(v);
 }

 get name() : string {
   return style_mutable_t_get_prop_name(this.nativeObj);
 }

}

export class TDragger extends TWidget {
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

export class TImageBase extends TWidget {
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

 setSelected(selected : boolean) : TRet  {
   return image_base_set_selected(this.nativeObj, selected);
 }

 setSelectable(selectable : boolean) : TRet  {
   return image_base_set_selectable(this.nativeObj, selectable);
 }

 setClickable(clickable : boolean) : TRet  {
   return image_base_set_clickable(this.nativeObj, clickable);
 }

 static cast(widget : TWidget) : TWidget  {
   return new TImageBase(image_base_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

 set image(v : string) {
   this.setImage(v);
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

 set rotation(v : number) {
   this.setRotation(v);
 }

 get rotation() : number {
   return image_base_t_get_prop_rotation(this.nativeObj);
 }

 set clickable(v : boolean) {
   this.setClickable(v);
 }

 get clickable() : boolean {
   return image_base_t_get_prop_clickable(this.nativeObj);
 }

 set selectable(v : boolean) {
   this.setSelectable(v);
 }

 get selectable() : boolean {
   return image_base_t_get_prop_selectable(this.nativeObj);
 }

 set selected(v : boolean) {
   this.setSelected(v);
 }

 get selected() : boolean {
   return image_base_t_get_prop_selected(this.nativeObj);
 }

}

export class TWindowEvent extends TEvent {
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

export class TPaintEvent extends TEvent {
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

export class TKeyEvent extends TEvent {
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

 get alt() : boolean {
   return key_event_t_get_prop_alt(this.nativeObj);
 }

 get lalt() : boolean {
   return key_event_t_get_prop_lalt(this.nativeObj);
 }

 get ralt() : boolean {
   return key_event_t_get_prop_ralt(this.nativeObj);
 }

 get ctrl() : boolean {
   return key_event_t_get_prop_ctrl(this.nativeObj);
 }

 get lctrl() : boolean {
   return key_event_t_get_prop_lctrl(this.nativeObj);
 }

 get rctrl() : boolean {
   return key_event_t_get_prop_rctrl(this.nativeObj);
 }

 get shift() : boolean {
   return key_event_t_get_prop_shift(this.nativeObj);
 }

 get lshift() : boolean {
   return key_event_t_get_prop_lshift(this.nativeObj);
 }

 get rshift() : boolean {
   return key_event_t_get_prop_rshift(this.nativeObj);
 }

 get cmd() : boolean {
   return key_event_t_get_prop_cmd(this.nativeObj);
 }

 get menu() : boolean {
   return key_event_t_get_prop_menu(this.nativeObj);
 }

 get capslock() : boolean {
   return key_event_t_get_prop_capslock(this.nativeObj);
 }

}

export class TPointerEvent extends TEvent {
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

 get pressed() : boolean {
   return pointer_event_t_get_prop_pressed(this.nativeObj);
 }

 get alt() : boolean {
   return pointer_event_t_get_prop_alt(this.nativeObj);
 }

 get ctrl() : boolean {
   return pointer_event_t_get_prop_ctrl(this.nativeObj);
 }

 get cmd() : boolean {
   return pointer_event_t_get_prop_cmd(this.nativeObj);
 }

 get menu() : boolean {
   return pointer_event_t_get_prop_menu(this.nativeObj);
 }

 get shift() : boolean {
   return pointer_event_t_get_prop_shift(this.nativeObj);
 }

}

export class TOrientationEvent extends TEvent {
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

export class TWheelEvent extends TEvent {
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

 get alt() : boolean {
   return wheel_event_t_get_prop_alt(this.nativeObj);
 }

 get ctrl() : boolean {
   return wheel_event_t_get_prop_ctrl(this.nativeObj);
 }

 get shift() : boolean {
   return wheel_event_t_get_prop_shift(this.nativeObj);
 }

}

export class TAppBar extends TWidget {
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

export class TButtonGroup extends TWidget {
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

export class TButton extends TWidget {
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

 setEnableLongPress(enable_long_press : boolean) : TRet  {
   return button_set_enable_long_press(this.nativeObj, enable_long_press);
 }

 set repeat(v : number) {
   this.setRepeat(v);
 }

 get repeat() : number {
   return button_t_get_prop_repeat(this.nativeObj);
 }

 set enableLongPress(v : boolean) {
   this.setEnableLongPress(v);
 }

 get enableLongPress() : boolean {
   return button_t_get_prop_enable_long_press(this.nativeObj);
 }

}

export class TDigitClock extends TWidget {
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

 set format(v : string) {
   this.setFormat(v);
 }

 get format() : string {
   return digit_clock_t_get_prop_format(this.nativeObj);
 }

}

export class TCheckButton extends TWidget {
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

 setValue(value : any) : TRet  {
   return check_button_set_value(this.nativeObj, value);
 }

 static cast(widget : TWidget) : TWidget  {
   return new TCheckButton(check_button_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

 set value(v : boolean) {
   this.setValue(v);
 }

 get value() : boolean {
   return check_button_t_get_prop_value(this.nativeObj);
 }

}

export class TColorTile extends TWidget {
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

 set bgColor(v : string) {
   this.setBgColor(v);
 }

 get bgColor() : string {
   return color_tile_t_get_prop_bg_color(this.nativeObj);
 }

 get borderColor() : string {
   return color_tile_t_get_prop_border_color(this.nativeObj);
 }

}

export class TColumn extends TWidget {
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

export class TComboBoxItem extends TWidget {
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

 setChecked(checked : boolean) : TRet  {
   return combo_box_item_set_checked(this.nativeObj, checked);
 }

 setValue(value : any) : TRet  {
   return combo_box_item_set_value(this.nativeObj, value);
 }

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return combo_box_item_t_get_prop_value(this.nativeObj);
 }

 set checked(v : boolean) {
   this.setChecked(v);
 }

 get checked() : boolean {
   return combo_box_item_t_get_prop_checked(this.nativeObj);
 }

}

export class TComboBox extends TWidget {
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

 setLocalizeOptions(localize_options : boolean) : TRet  {
   return combo_box_set_localize_options(this.nativeObj, localize_options);
 }

 setValue(value : any) : TRet  {
   return combo_box_set_value(this.nativeObj, value);
 }

 setItemHeight(item_height : number) : TRet  {
   return combo_box_set_item_height(this.nativeObj, item_height);
 }

 appendOption(value : any, text : string) : TRet  {
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

 set openWindow(v : string) {
   this.setOpenWindow(v);
 }

 get openWindow() : string {
   return combo_box_t_get_prop_open_window(this.nativeObj);
 }

 set selectedIndex(v : number) {
   this.setSelectedIndex(v);
 }

 get selectedIndex() : number {
   return combo_box_t_get_prop_selected_index(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }

 get value() : number {
   return combo_box_t_get_prop_value(this.nativeObj);
 }

 set localizeOptions(v : boolean) {
   this.setLocalizeOptions(v);
 }

 get localizeOptions() : boolean {
   return combo_box_t_get_prop_localize_options(this.nativeObj);
 }

 set options(v : string) {
   this.setOptions(v);
 }

 get options() : string {
   return combo_box_t_get_prop_options(this.nativeObj);
 }

 set itemHeight(v : number) {
   this.setItemHeight(v);
 }

 get itemHeight() : number {
   return combo_box_t_get_prop_item_height(this.nativeObj);
 }

}

export class TDialogClient extends TWidget {
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

export class TDialogTitle extends TWidget {
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

export class TObjectDefault extends TObject {
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

export class TWindow extends TWindowBase {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
   return new TWindow(window_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 setFullscreen(fullscreen : boolean) : TRet  {
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

 set fullscreen(v : boolean) {
   this.setFullscreen(v);
 }

 get fullscreen() : boolean {
   return window_t_get_prop_fullscreen(this.nativeObj);
 }

}

export class TTimerInfo extends TObject {
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

export class TComboBoxEx extends TComboBox {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWidget  {
   return new TComboBoxEx(combo_box_ex_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

}

export class TImage extends TImageBase {
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

 set drawType(v : TImageDrawType) {
   this.setDrawType(v);
 }

 get drawType() : TImageDrawType {
   return image_t_get_prop_draw_type(this.nativeObj);
 }

}

export class TGifImage extends TImageBase {
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

export class TKeyboard extends TWindowBase {
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

export class TPopup extends TWindowBase {
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

 setCloseWhenClick(close_when_click : boolean) : TRet  {
   return popup_set_close_when_click(this.nativeObj, close_when_click);
 }

 setCloseWhenClickOutside(close_when_click_outside : boolean) : TRet  {
   return popup_set_close_when_click_outside(this.nativeObj, close_when_click_outside);
 }

 set closeWhenClick(v : boolean) {
   this.setCloseWhenClick(v);
 }

 get closeWhenClick() : boolean {
   return popup_t_get_prop_close_when_click(this.nativeObj);
 }

 set closeWhenClickOutside(v : boolean) {
   this.setCloseWhenClickOutside(v);
 }

 get closeWhenClickOutside() : boolean {
   return popup_t_get_prop_close_when_click_outside(this.nativeObj);
 }

}

export class TObjectArray extends TObject {
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

export class TMutableImage extends TImageBase {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

}

export class TSpinBox extends TEdit {
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

export class TSystemBar extends TWindowBase {
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

export class TIdleInfo extends TObject {
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

export class TSvgImage extends TImageBase {
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

export class TDialog extends TWindowBase {
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

 isQuited() : boolean  {
   return dialog_is_quited(this.nativeObj);
 }

 isModal() : boolean  {
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

export class TWindowManagerDefault extends TWindowManager {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

}

export class TWindowManagerSimple extends TWindowManager {
 public nativeObj : any;
 constructor(nativeObj) {
   super(nativeObj);
 }

}

