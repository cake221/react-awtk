export declare function print(str: any): any;
export declare function tk_quit(): TRet;
export declare function tk_get_pointer_x(): number;
export declare function tk_get_pointer_y(): number;
export declare function tk_is_pointer_pressed(): number;
export declare function bitmap_create(): TBitmap;
export declare function bitmap_create_ex(w: number, h: number, line_length: number, format: TBitmapFormat): TBitmap;
export declare function bitmap_get_bpp(bitmap: TBitmap): number;
export declare function bitmap_destroy(bitmap: TBitmap): TRet;
export declare function bitmap_t_get_prop_w(nativeObj: any): any;
export declare function bitmap_t_get_prop_h(nativeObj: any): any;
export declare function bitmap_t_get_prop_line_length(nativeObj: any): any;
export declare function bitmap_t_get_prop_flags(nativeObj: any): any;
export declare function bitmap_t_get_prop_format(nativeObj: any): any;
export declare function bitmap_t_get_prop_name(nativeObj: any): any;
export declare function IMAGE_DRAW_DEFAULT(): any;
export declare function IMAGE_DRAW_CENTER(): any;
export declare function IMAGE_DRAW_ICON(): any;
export declare function IMAGE_DRAW_SCALE(): any;
export declare function IMAGE_DRAW_SCALE_AUTO(): any;
export declare function IMAGE_DRAW_SCALE_DOWN(): any;
export declare function IMAGE_DRAW_SCALE_W(): any;
export declare function IMAGE_DRAW_SCALE_H(): any;
export declare function IMAGE_DRAW_REPEAT(): any;
export declare function IMAGE_DRAW_REPEAT_X(): any;
export declare function IMAGE_DRAW_REPEAT_Y(): any;
export declare function IMAGE_DRAW_REPEAT_Y_INVERSE(): any;
export declare function IMAGE_DRAW_PATCH9(): any;
export declare function IMAGE_DRAW_PATCH3_X(): any;
export declare function IMAGE_DRAW_PATCH3_Y(): any;
export declare function IMAGE_DRAW_PATCH3_X_SCALE_Y(): any;
export declare function IMAGE_DRAW_PATCH3_Y_SCALE_X(): any;
export declare function canvas_get_width(c: TCanvas): number;
export declare function canvas_get_height(c: TCanvas): number;
export declare function canvas_get_clip_rect(c: TCanvas, r: TRect): TRet;
export declare function canvas_set_clip_rect(c: TCanvas, r: TRect): TRet;
export declare function canvas_set_clip_rect_ex(c: TCanvas, r: TRect, translate: number): TRet;
export declare function canvas_set_fill_color_str(c: TCanvas, color: string): TRet;
export declare function canvas_set_text_color_str(c: TCanvas, color: string): TRet;
export declare function canvas_set_stroke_color_str(c: TCanvas, color: string): TRet;
export declare function canvas_set_global_alpha(c: TCanvas, alpha: number): TRet;
export declare function canvas_translate(c: TCanvas, dx: number, dy: number): TRet;
export declare function canvas_untranslate(c: TCanvas, dx: number, dy: number): TRet;
export declare function canvas_draw_vline(c: TCanvas, x: number, y: number, h: number): TRet;
export declare function canvas_draw_hline(c: TCanvas, x: number, y: number, w: number): TRet;
export declare function canvas_fill_rect(c: TCanvas, x: number, y: number, w: number, h: number): TRet;
export declare function canvas_stroke_rect(c: TCanvas, x: number, y: number, w: number, h: number): TRet;
export declare function canvas_set_font(c: TCanvas, name: string, size: number): TRet;
export declare function canvas_measure_utf8(c: TCanvas, str: string): number;
export declare function canvas_draw_utf8(c: TCanvas, str: string, x: number, y: number): TRet;
export declare function canvas_draw_utf8_in_rect(c: TCanvas, str: string, r: TRect): TRet;
export declare function canvas_draw_icon(c: TCanvas, img: TBitmap, cx: number, cy: number): TRet;
export declare function canvas_draw_image(c: TCanvas, img: TBitmap, src: TRect, dst: TRect): TRet;
export declare function canvas_draw_image_ex(c: TCanvas, img: TBitmap, draw_type: TImageDrawType, dst: TRect): TRet;
export declare function canvas_get_vgcanvas(c: TCanvas): TVgcanvas;
export declare function canvas_cast(c: TCanvas): TCanvas;
export declare function canvas_reset(c: TCanvas): TRet;
export declare function canvas_t_get_prop_ox(nativeObj: any): any;
export declare function canvas_t_get_prop_oy(nativeObj: any): any;
export declare function canvas_t_get_prop_font_name(nativeObj: any): any;
export declare function canvas_t_get_prop_font_size(nativeObj: any): any;
export declare function canvas_t_get_prop_global_alpha(nativeObj: any): any;
export declare function CLIP_BOARD_DATA_TYPE_NONE(): any;
export declare function CLIP_BOARD_DATA_TYPE_TEXT(): any;
export declare function clip_board_set_text(text: string): TRet;
export declare function clip_board_get_text(): string;
export declare function DIALOG_QUIT_NONE(): any;
export declare function DIALOG_QUIT_OK(): any;
export declare function DIALOG_QUIT_YES(): any;
export declare function DIALOG_QUIT_CANCEL(): any;
export declare function DIALOG_QUIT_NO(): any;
export declare function DIALOG_QUIT_OTHER(): any;
export declare function EVT_POINTER_DOWN(): any;
export declare function EVT_POINTER_DOWN_BEFORE_CHILDREN(): any;
export declare function EVT_POINTER_MOVE(): any;
export declare function EVT_POINTER_MOVE_BEFORE_CHILDREN(): any;
export declare function EVT_POINTER_UP(): any;
export declare function EVT_POINTER_UP_BEFORE_CHILDREN(): any;
export declare function EVT_WHEEL(): any;
export declare function EVT_WHEEL_BEFORE_CHILDREN(): any;
export declare function EVT_POINTER_DOWN_ABORT(): any;
export declare function EVT_CONTEXT_MENU(): any;
export declare function EVT_POINTER_ENTER(): any;
export declare function EVT_POINTER_LEAVE(): any;
export declare function EVT_LONG_PRESS(): any;
export declare function EVT_CLICK(): any;
export declare function EVT_FOCUS(): any;
export declare function EVT_BLUR(): any;
export declare function EVT_KEY_DOWN(): any;
export declare function EVT_KEY_DOWN_BEFORE_CHILDREN(): any;
export declare function EVT_KEY_REPEAT(): any;
export declare function EVT_KEY_UP(): any;
export declare function EVT_KEY_UP_BEFORE_CHILDREN(): any;
export declare function EVT_WILL_MOVE(): any;
export declare function EVT_MOVE(): any;
export declare function EVT_WILL_RESIZE(): any;
export declare function EVT_RESIZE(): any;
export declare function EVT_WILL_MOVE_RESIZE(): any;
export declare function EVT_MOVE_RESIZE(): any;
export declare function EVT_VALUE_WILL_CHANGE(): any;
export declare function EVT_VALUE_CHANGED(): any;
export declare function EVT_VALUE_CHANGING(): any;
export declare function EVT_PAINT(): any;
export declare function EVT_BEFORE_PAINT(): any;
export declare function EVT_AFTER_PAINT(): any;
export declare function EVT_PAINT_DONE(): any;
export declare function EVT_LOCALE_CHANGED(): any;
export declare function EVT_ANIM_START(): any;
export declare function EVT_ANIM_STOP(): any;
export declare function EVT_ANIM_PAUSE(): any;
export declare function EVT_ANIM_ONCE(): any;
export declare function EVT_ANIM_END(): any;
export declare function EVT_WINDOW_LOAD(): any;
export declare function EVT_WINDOW_WILL_OPEN(): any;
export declare function EVT_WINDOW_OPEN(): any;
export declare function EVT_WINDOW_TO_BACKGROUND(): any;
export declare function EVT_WINDOW_TO_FOREGROUND(): any;
export declare function EVT_WINDOW_CLOSE(): any;
export declare function EVT_REQUEST_CLOSE_WINDOW(): any;
export declare function EVT_TOP_WINDOW_CHANGED(): any;
export declare function EVT_IM_COMMIT(): any;
export declare function EVT_IM_SHOW_CANDIDATES(): any;
export declare function EVT_IM_ACTION(): any;
export declare function EVT_IM_ACTION_INFO(): any;
export declare function EVT_DRAG_START(): any;
export declare function EVT_DRAG(): any;
export declare function EVT_DRAG_END(): any;
export declare function EVT_SCREEN_SAVER(): any;
export declare function EVT_LOW_MEMORY(): any;
export declare function EVT_OUT_OF_MEMORY(): any;
export declare function EVT_ORIENTATION_WILL_CHANGED(): any;
export declare function EVT_ORIENTATION_CHANGED(): any;
export declare function EVT_WIDGET_CREATED(): any;
export declare function EVT_REQUEST_QUIT_APP(): any;
export declare function EVT_THEME_CHANGED(): any;
export declare function EVT_REQ_START(): any;
export declare function EVT_USER_START(): any;
export declare function font_manager_unload_font(fm: TFontManager, name: string, size: number): TRet;
export declare function font_manager_unload_all(fm: TFontManager): TRet;
export declare function GLYPH_FMT_ALPHA(): any;
export declare function GLYPH_FMT_MONO(): any;
export declare function GLYPH_FMT_RGBA(): any;
export declare function idle_add(on_idle: Function, ctx: any): number;
export declare function idle_remove(idle_id: number): TRet;
export declare function value_set_bool(v: TValue, value: number): TValue;
export declare function value_bool(v: TValue): number;
export declare function value_set_int8(v: TValue, value: number): TValue;
export declare function value_int8(v: TValue): number;
export declare function value_set_uint8(v: TValue, value: number): TValue;
export declare function value_uint8(v: TValue): number;
export declare function value_set_int16(v: TValue, value: number): TValue;
export declare function value_int16(v: TValue): number;
export declare function value_set_uint16(v: TValue, value: number): TValue;
export declare function value_uint16(v: TValue): number;
export declare function value_set_int32(v: TValue, value: number): TValue;
export declare function value_int32(v: TValue): number;
export declare function value_set_uint32(v: TValue, value: number): TValue;
export declare function value_set_int64(v: TValue, value: number): TValue;
export declare function value_int64(v: TValue): number;
export declare function value_set_uint64(v: TValue, value: number): TValue;
export declare function value_uint64(v: TValue): number;
export declare function value_set_float(v: TValue, value: number): TValue;
export declare function value_float32(v: TValue): number;
export declare function value_set_double(v: TValue, value: number): TValue;
export declare function value_double(v: TValue): number;
export declare function value_dup_str(v: TValue, value: string): TValue;
export declare function value_str(v: TValue): string;
export declare function value_is_null(value: TValue): number;
export declare function value_set_int(v: TValue, value: number): TValue;
export declare function value_set_object(v: TValue, value: TObject): TValue;
export declare function value_object(v: TValue): TObject;
export declare function value_set_token(v: TValue, value: number): TValue;
export declare function value_token(v: TValue): number;
export declare function value_create(): TValue;
export declare function value_destroy(v: TValue): TRet;
export declare function value_reset(v: TValue): TRet;
export declare function value_cast(value: TValue): TValue;
export declare function image_manager(): TImageManager;
export declare function image_manager_get_bitmap(imm: TImageManager, name: string, image: TBitmap): TRet;
export declare function INPUT_TEXT(): any;
export declare function INPUT_INT(): any;
export declare function INPUT_UINT(): any;
export declare function INPUT_HEX(): any;
export declare function INPUT_FLOAT(): any;
export declare function INPUT_UFLOAT(): any;
export declare function INPUT_EMAIL(): any;
export declare function INPUT_PASSWORD(): any;
export declare function INPUT_PHONE(): any;
export declare function INPUT_CUSTOM(): any;
export declare function VALUE_TYPE_INVALID(): any;
export declare function VALUE_TYPE_BOOL(): any;
export declare function VALUE_TYPE_INT8(): any;
export declare function VALUE_TYPE_UINT8(): any;
export declare function VALUE_TYPE_INT16(): any;
export declare function VALUE_TYPE_UINT16(): any;
export declare function VALUE_TYPE_INT32(): any;
export declare function VALUE_TYPE_UINT32(): any;
export declare function VALUE_TYPE_INT64(): any;
export declare function VALUE_TYPE_UINT64(): any;
export declare function VALUE_TYPE_POINTER(): any;
export declare function VALUE_TYPE_FLOAT(): any;
export declare function VALUE_TYPE_FLOAT32(): any;
export declare function VALUE_TYPE_DOUBLE(): any;
export declare function VALUE_TYPE_STRING(): any;
export declare function VALUE_TYPE_WSTRING(): any;
export declare function VALUE_TYPE_OBJECT(): any;
export declare function VALUE_TYPE_SIZED_STRING(): any;
export declare function VALUE_TYPE_BINARY(): any;
export declare function VALUE_TYPE_UBJSON(): any;
export declare function VALUE_TYPE_TOKEN(): any;
export declare function input_method_commit_text(im: TInputMethod, text: string): TRet;
export declare function input_method_dispatch_key(im: TInputMethod, key: number): TRet;
export declare function input_method(): TInputMethod;
export declare function TK_KEY_RETURN(): any;
export declare function TK_KEY_ESCAPE(): any;
export declare function TK_KEY_BACKSPACE(): any;
export declare function TK_KEY_TAB(): any;
export declare function TK_KEY_SPACE(): any;
export declare function TK_KEY_EXCLAIM(): any;
export declare function TK_KEY_QUOTEDBL(): any;
export declare function TK_KEY_HASH(): any;
export declare function TK_KEY_PERCENT(): any;
export declare function TK_KEY_DOLLAR(): any;
export declare function TK_KEY_AMPERSAND(): any;
export declare function TK_KEY_QUOTE(): any;
export declare function TK_KEY_LEFTPAREN(): any;
export declare function TK_KEY_RIGHTPAREN(): any;
export declare function TK_KEY_ASTERISK(): any;
export declare function TK_KEY_PLUS(): any;
export declare function TK_KEY_COMMA(): any;
export declare function TK_KEY_MINUS(): any;
export declare function TK_KEY_PERIOD(): any;
export declare function TK_KEY_SLASH(): any;
export declare function TK_KEY_0(): any;
export declare function TK_KEY_1(): any;
export declare function TK_KEY_2(): any;
export declare function TK_KEY_3(): any;
export declare function TK_KEY_4(): any;
export declare function TK_KEY_5(): any;
export declare function TK_KEY_6(): any;
export declare function TK_KEY_7(): any;
export declare function TK_KEY_8(): any;
export declare function TK_KEY_9(): any;
export declare function TK_KEY_COLON(): any;
export declare function TK_KEY_SEMICOLON(): any;
export declare function TK_KEY_LESS(): any;
export declare function TK_KEY_EQUAL(): any;
export declare function TK_KEY_GREATER(): any;
export declare function TK_KEY_QUESTION(): any;
export declare function TK_KEY_AT(): any;
export declare function TK_KEY_LEFTBRACKET(): any;
export declare function TK_KEY_BACKSLASH(): any;
export declare function TK_KEY_RIGHTBRACKET(): any;
export declare function TK_KEY_CARET(): any;
export declare function TK_KEY_UNDERSCORE(): any;
export declare function TK_KEY_BACKQUOTE(): any;
export declare function TK_KEY_a(): any;
export declare function TK_KEY_b(): any;
export declare function TK_KEY_c(): any;
export declare function TK_KEY_d(): any;
export declare function TK_KEY_e(): any;
export declare function TK_KEY_f(): any;
export declare function TK_KEY_g(): any;
export declare function TK_KEY_h(): any;
export declare function TK_KEY_i(): any;
export declare function TK_KEY_j(): any;
export declare function TK_KEY_k(): any;
export declare function TK_KEY_l(): any;
export declare function TK_KEY_m(): any;
export declare function TK_KEY_n(): any;
export declare function TK_KEY_o(): any;
export declare function TK_KEY_p(): any;
export declare function TK_KEY_q(): any;
export declare function TK_KEY_r(): any;
export declare function TK_KEY_s(): any;
export declare function TK_KEY_t(): any;
export declare function TK_KEY_u(): any;
export declare function TK_KEY_v(): any;
export declare function TK_KEY_w(): any;
export declare function TK_KEY_x(): any;
export declare function TK_KEY_y(): any;
export declare function TK_KEY_z(): any;
export declare function TK_KEY_A(): any;
export declare function TK_KEY_B(): any;
export declare function TK_KEY_C(): any;
export declare function TK_KEY_D(): any;
export declare function TK_KEY_E(): any;
export declare function TK_KEY_F(): any;
export declare function TK_KEY_G(): any;
export declare function TK_KEY_H(): any;
export declare function TK_KEY_I(): any;
export declare function TK_KEY_J(): any;
export declare function TK_KEY_K(): any;
export declare function TK_KEY_L(): any;
export declare function TK_KEY_M(): any;
export declare function TK_KEY_N(): any;
export declare function TK_KEY_O(): any;
export declare function TK_KEY_P(): any;
export declare function TK_KEY_Q(): any;
export declare function TK_KEY_R(): any;
export declare function TK_KEY_S(): any;
export declare function TK_KEY_T(): any;
export declare function TK_KEY_U(): any;
export declare function TK_KEY_V(): any;
export declare function TK_KEY_W(): any;
export declare function TK_KEY_X(): any;
export declare function TK_KEY_Y(): any;
export declare function TK_KEY_Z(): any;
export declare function TK_KEY_DOT(): any;
export declare function TK_KEY_DELETE(): any;
export declare function TK_KEY_LEFTBRACE(): any;
export declare function TK_KEY_RIGHTBRACE(): any;
export declare function TK_KEY_LSHIFT(): any;
export declare function TK_KEY_RSHIFT(): any;
export declare function TK_KEY_LCTRL(): any;
export declare function TK_KEY_RCTRL(): any;
export declare function TK_KEY_LALT(): any;
export declare function TK_KEY_RALT(): any;
export declare function TK_KEY_CAPSLOCK(): any;
export declare function TK_KEY_HOME(): any;
export declare function TK_KEY_END(): any;
export declare function TK_KEY_INSERT(): any;
export declare function TK_KEY_UP(): any;
export declare function TK_KEY_DOWN(): any;
export declare function TK_KEY_LEFT(): any;
export declare function TK_KEY_RIGHT(): any;
export declare function TK_KEY_PAGEUP(): any;
export declare function TK_KEY_PAGEDOWN(): any;
export declare function TK_KEY_F1(): any;
export declare function TK_KEY_F2(): any;
export declare function TK_KEY_F3(): any;
export declare function TK_KEY_F4(): any;
export declare function TK_KEY_F5(): any;
export declare function TK_KEY_F6(): any;
export declare function TK_KEY_F7(): any;
export declare function TK_KEY_F8(): any;
export declare function TK_KEY_F9(): any;
export declare function TK_KEY_F10(): any;
export declare function TK_KEY_F11(): any;
export declare function TK_KEY_F12(): any;
export declare function TK_KEY_MENU(): any;
export declare function TK_KEY_COMMAND(): any;
export declare function TK_KEY_BACK(): any;
export declare function TK_KEY_CANCEL(): any;
export declare function locale_info(): TLocaleInfo;
export declare function locale_info_tr(locale_info: TLocaleInfo, text: string): string;
export declare function locale_info_change(locale_info: TLocaleInfo, language: string, country: string): TRet;
export declare function locale_info_on(locale_info: TLocaleInfo, type: TEventType, on_event: Function, ctx: any): number;
export declare function locale_info_off(locale_info: TLocaleInfo, id: number): TRet;
export declare function STYLE_ID_BG_COLOR(): any;
export declare function STYLE_ID_FG_COLOR(): any;
export declare function STYLE_ID_MASK_COLOR(): any;
export declare function STYLE_ID_FONT_NAME(): any;
export declare function STYLE_ID_FONT_SIZE(): any;
export declare function STYLE_ID_FONT_STYLE(): any;
export declare function STYLE_ID_TEXT_COLOR(): any;
export declare function STYLE_ID_TIPS_TEXT_COLOR(): any;
export declare function STYLE_ID_TEXT_ALIGN_H(): any;
export declare function STYLE_ID_TEXT_ALIGN_V(): any;
export declare function STYLE_ID_BORDER_COLOR(): any;
export declare function STYLE_ID_BORDER_WIDTH(): any;
export declare function STYLE_ID_BORDER(): any;
export declare function STYLE_ID_BG_IMAGE(): any;
export declare function STYLE_ID_BG_IMAGE_DRAW_TYPE(): any;
export declare function STYLE_ID_ICON(): any;
export declare function STYLE_ID_FG_IMAGE(): any;
export declare function STYLE_ID_FG_IMAGE_DRAW_TYPE(): any;
export declare function STYLE_ID_SPACER(): any;
export declare function STYLE_ID_MARGIN(): any;
export declare function STYLE_ID_MARGIN_LEFT(): any;
export declare function STYLE_ID_MARGIN_RIGHT(): any;
export declare function STYLE_ID_MARGIN_TOP(): any;
export declare function STYLE_ID_MARGIN_BOTTOM(): any;
export declare function STYLE_ID_ICON_AT(): any;
export declare function STYLE_ID_ACTIVE_ICON(): any;
export declare function STYLE_ID_X_OFFSET(): any;
export declare function STYLE_ID_Y_OFFSET(): any;
export declare function STYLE_ID_SELECTED_BG_COLOR(): any;
export declare function STYLE_ID_SELECTED_FG_COLOR(): any;
export declare function STYLE_ID_SELECTED_TEXT_COLOR(): any;
export declare function STYLE_ID_ROUND_RADIUS(): any;
export declare function style_notify_widget_state_changed(s: TStyle, widget: TWidget): TRet;
export declare function style_is_valid(s: TStyle): number;
export declare function style_get_int(s: TStyle, name: string, defval: number): number;
export declare function style_get_str(s: TStyle, name: string, defval: string): string;
export declare function style_set(s: TStyle, state: string, name: string, value: TValue): TRet;
export declare function style_is_mutable(s: TStyle): number;
export declare function theme(): TTheme;
export declare function timer_add(on_timer: Function, ctx: any, duration: number): number;
export declare function timer_remove(timer_id: number): TRet;
export declare function timer_reset(timer_id: number): TRet;
export declare function timer_modify(timer_id: number, duration: number): TRet;
export declare function ALIGN_V_NONE(): any;
export declare function ALIGN_V_MIDDLE(): any;
export declare function ALIGN_V_TOP(): any;
export declare function ALIGN_V_BOTTOM(): any;
export declare function ALIGN_H_NONE(): any;
export declare function ALIGN_H_CENTER(): any;
export declare function ALIGN_H_LEFT(): any;
export declare function ALIGN_H_RIGHT(): any;
export declare function BITMAP_FMT_NONE(): any;
export declare function BITMAP_FMT_RGBA8888(): any;
export declare function BITMAP_FMT_ABGR8888(): any;
export declare function BITMAP_FMT_BGRA8888(): any;
export declare function BITMAP_FMT_ARGB8888(): any;
export declare function BITMAP_FMT_RGB565(): any;
export declare function BITMAP_FMT_BGR565(): any;
export declare function BITMAP_FMT_RGB888(): any;
export declare function BITMAP_FMT_BGR888(): any;
export declare function BITMAP_FMT_GRAY(): any;
export declare function BITMAP_FMT_MONO(): any;
export declare function BITMAP_FLAG_NONE(): any;
export declare function BITMAP_FLAG_OPAQUE(): any;
export declare function BITMAP_FLAG_IMMUTABLE(): any;
export declare function BITMAP_FLAG_TEXTURE(): any;
export declare function BITMAP_FLAG_CHANGED(): any;
export declare function BITMAP_FLAG_PREMULTI_ALPHA(): any;
export declare function vgcanvas_cast(vg: TVgcanvas): TVgcanvas;
export declare function vgcanvas_flush(vg: TVgcanvas): TRet;
export declare function vgcanvas_begin_path(vg: TVgcanvas): TRet;
export declare function vgcanvas_move_to(vg: TVgcanvas, x: number, y: number): TRet;
export declare function vgcanvas_line_to(vg: TVgcanvas, x: number, y: number): TRet;
export declare function vgcanvas_quad_to(vg: TVgcanvas, cpx: number, cpy: number, x: number, y: number): TRet;
export declare function vgcanvas_bezier_to(vg: TVgcanvas, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): TRet;
export declare function vgcanvas_arc_to(vg: TVgcanvas, x1: number, y1: number, x2: number, y2: number, r: number): TRet;
export declare function vgcanvas_arc(vg: TVgcanvas, x: number, y: number, r: number, start_angle: number, end_angle: number, ccw: number): TRet;
export declare function vgcanvas_is_point_in_path(vg: TVgcanvas, x: number, y: number): number;
export declare function vgcanvas_rect(vg: TVgcanvas, x: number, y: number, w: number, h: number): TRet;
export declare function vgcanvas_rounded_rect(vg: TVgcanvas, x: number, y: number, w: number, h: number, r: number): TRet;
export declare function vgcanvas_ellipse(vg: TVgcanvas, x: number, y: number, rx: number, ry: number): TRet;
export declare function vgcanvas_close_path(vg: TVgcanvas): TRet;
export declare function vgcanvas_rotate(vg: TVgcanvas, rad: number): TRet;
export declare function vgcanvas_scale(vg: TVgcanvas, x: number, y: number): TRet;
export declare function vgcanvas_translate(vg: TVgcanvas, x: number, y: number): TRet;
export declare function vgcanvas_transform(vg: TVgcanvas, a: number, b: number, c: number, d: number, e: number, f: number): TRet;
export declare function vgcanvas_set_transform(vg: TVgcanvas, a: number, b: number, c: number, d: number, e: number, f: number): TRet;
export declare function vgcanvas_clip_rect(vg: TVgcanvas, x: number, y: number, w: number, h: number): TRet;
export declare function vgcanvas_fill(vg: TVgcanvas): TRet;
export declare function vgcanvas_stroke(vg: TVgcanvas): TRet;
export declare function vgcanvas_paint(vg: TVgcanvas, stroke: number, img: TBitmap): TRet;
export declare function vgcanvas_set_font(vg: TVgcanvas, font: string): TRet;
export declare function vgcanvas_set_font_size(vg: TVgcanvas, font: number): TRet;
export declare function vgcanvas_set_text_align(vg: TVgcanvas, value: string): TRet;
export declare function vgcanvas_set_text_baseline(vg: TVgcanvas, value: string): TRet;
export declare function vgcanvas_fill_text(vg: TVgcanvas, text: string, x: number, y: number, max_width: number): TRet;
export declare function vgcanvas_measure_text(vg: TVgcanvas, text: string): number;
export declare function vgcanvas_draw_image(vg: TVgcanvas, img: TBitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): TRet;
export declare function vgcanvas_draw_icon(vg: TVgcanvas, img: TBitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): TRet;
export declare function vgcanvas_set_antialias(vg: TVgcanvas, value: number): TRet;
export declare function vgcanvas_set_global_alpha(vg: TVgcanvas, alpha: number): TRet;
export declare function vgcanvas_set_line_width(vg: TVgcanvas, value: number): TRet;
export declare function vgcanvas_set_fill_color_str(vg: TVgcanvas, color: string): TRet;
export declare function vgcanvas_set_stroke_color_str(vg: TVgcanvas, color: string): TRet;
export declare function vgcanvas_set_line_cap(vg: TVgcanvas, value: string): TRet;
export declare function vgcanvas_set_line_join(vg: TVgcanvas, value: string): TRet;
export declare function vgcanvas_set_miter_limit(vg: TVgcanvas, value: number): TRet;
export declare function vgcanvas_save(vg: TVgcanvas): TRet;
export declare function vgcanvas_restore(vg: TVgcanvas): TRet;
export declare function vgcanvas_t_get_prop_w(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_h(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_ratio(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_anti_alias(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_line_width(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_global_alpha(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_miter_limit(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_line_cap(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_line_join(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_font(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_font_size(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_text_align(nativeObj: any): any;
export declare function vgcanvas_t_get_prop_text_baseline(nativeObj: any): any;
export declare function WIDGET_PROP_EXEC(): any;
export declare function WIDGET_PROP_X(): any;
export declare function WIDGET_PROP_Y(): any;
export declare function WIDGET_PROP_W(): any;
export declare function WIDGET_PROP_H(): any;
export declare function WIDGET_PROP_CANVAS(): any;
export declare function WIDGET_PROP_LOCALIZE_OPTIONS(): any;
export declare function WIDGET_PROP_NATIVE_WINDOW(): any;
export declare function WIDGET_PROP_HIGHLIGHT(): any;
export declare function WIDGET_PROP_BAR_SIZE(): any;
export declare function WIDGET_PROP_OPACITY(): any;
export declare function WIDGET_PROP_MIN_W(): any;
export declare function WIDGET_PROP_MAX_W(): any;
export declare function WIDGET_PROP_CHILDREN_LAYOUT(): any;
export declare function WIDGET_PROP_LAYOUT(): any;
export declare function WIDGET_PROP_SELF_LAYOUT(): any;
export declare function WIDGET_PROP_LAYOUT_W(): any;
export declare function WIDGET_PROP_LAYOUT_H(): any;
export declare function WIDGET_PROP_VIRTUAL_W(): any;
export declare function WIDGET_PROP_VIRTUAL_H(): any;
export declare function WIDGET_PROP_NAME(): any;
export declare function WIDGET_PROP_TYPE(): any;
export declare function WIDGET_PROP_CLOSABLE(): any;
export declare function WIDGET_PROP_CURSOR(): any;
export declare function WIDGET_PROP_VALUE(): any;
export declare function WIDGET_PROP_LENGTH(): any;
export declare function WIDGET_PROP_TEXT(): any;
export declare function WIDGET_PROP_TR_TEXT(): any;
export declare function WIDGET_PROP_STYLE(): any;
export declare function WIDGET_PROP_ENABLE(): any;
export declare function WIDGET_PROP_FEEDBACK(): any;
export declare function WIDGET_PROP_FLOATING(): any;
export declare function WIDGET_PROP_MARGIN(): any;
export declare function WIDGET_PROP_SPACING(): any;
export declare function WIDGET_PROP_LEFT_MARGIN(): any;
export declare function WIDGET_PROP_RIGHT_MARGIN(): any;
export declare function WIDGET_PROP_TOP_MARGIN(): any;
export declare function WIDGET_PROP_BOTTOM_MARGIN(): any;
export declare function WIDGET_PROP_STEP(): any;
export declare function WIDGET_PROP_VISIBLE(): any;
export declare function WIDGET_PROP_SENSITIVE(): any;
export declare function WIDGET_PROP_ANIMATION(): any;
export declare function WIDGET_PROP_ANIM_HINT(): any;
export declare function WIDGET_PROP_FULLSCREEN(): any;
export declare function WIDGET_PROP_OPEN_ANIM_HINT(): any;
export declare function WIDGET_PROP_CLOSE_ANIM_HINT(): any;
export declare function WIDGET_PROP_MIN(): any;
export declare function WIDGET_PROP_TIPS(): any;
export declare function WIDGET_PROP_INPUT_TYPE(): any;
export declare function WIDGET_PROP_READONLY(): any;
export declare function WIDGET_PROP_PASSWORD_VISIBLE(): any;
export declare function WIDGET_PROP_ACTIVE(): any;
export declare function WIDGET_PROP_VERTICAL(): any;
export declare function WIDGET_PROP_SHOW_TEXT(): any;
export declare function WIDGET_PROP_XOFFSET(): any;
export declare function WIDGET_PROP_YOFFSET(): any;
export declare function WIDGET_PROP_ALIGN_V(): any;
export declare function WIDGET_PROP_ALIGN_H(): any;
export declare function WIDGET_PROP_AUTO_PLAY(): any;
export declare function WIDGET_PROP_LOOP(): any;
export declare function WIDGET_PROP_AUTO_FIX(): any;
export declare function WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED(): any;
export declare function WIDGET_PROP_OPEN_IM_WHEN_FOCUSED(): any;
export declare function WIDGET_PROP_X_MIN(): any;
export declare function WIDGET_PROP_X_MAX(): any;
export declare function WIDGET_PROP_Y_MIN(): any;
export declare function WIDGET_PROP_Y_MAX(): any;
export declare function WIDGET_PROP_MAX(): any;
export declare function WIDGET_PROP_GRAB_KEYS(): any;
export declare function WIDGET_PROP_ROW(): any;
export declare function WIDGET_PROP_STATE_FOR_STYLE(): any;
export declare function WIDGET_PROP_THEME(): any;
export declare function WIDGET_PROP_STAGE(): any;
export declare function WIDGET_PROP_IMAGE_MANAGER(): any;
export declare function WIDGET_PROP_ASSETS_MANAGER(): any;
export declare function WIDGET_PROP_LOCALE_INFO(): any;
export declare function WIDGET_PROP_FONT_MANAGER(): any;
export declare function WIDGET_PROP_THEME_OBJ(): any;
export declare function WIDGET_PROP_DEFAULT_THEME_OBJ(): any;
export declare function WIDGET_PROP_ITEM_WIDTH(): any;
export declare function WIDGET_PROP_ITEM_HEIGHT(): any;
export declare function WIDGET_PROP_DEFAULT_ITEM_HEIGHT(): any;
export declare function WIDGET_PROP_XSLIDABLE(): any;
export declare function WIDGET_PROP_YSLIDABLE(): any;
export declare function WIDGET_PROP_REPEAT(): any;
export declare function WIDGET_PROP_ENABLE_LONG_PRESS(): any;
export declare function WIDGET_PROP_ANIMATABLE(): any;
export declare function WIDGET_PROP_AUTO_HIDE_SCROLL_BAR(): any;
export declare function WIDGET_PROP_IMAGE(): any;
export declare function WIDGET_PROP_FORMAT(): any;
export declare function WIDGET_PROP_DRAW_TYPE(): any;
export declare function WIDGET_PROP_SELECTABLE(): any;
export declare function WIDGET_PROP_CLICKABLE(): any;
export declare function WIDGET_PROP_SCALE_X(): any;
export declare function WIDGET_PROP_SCALE_Y(): any;
export declare function WIDGET_PROP_ANCHOR_X(): any;
export declare function WIDGET_PROP_ANCHOR_Y(): any;
export declare function WIDGET_PROP_ROTATION(): any;
export declare function WIDGET_PROP_COMPACT(): any;
export declare function WIDGET_PROP_SCROLLABLE(): any;
export declare function WIDGET_PROP_ICON(): any;
export declare function WIDGET_PROP_OPTIONS(): any;
export declare function WIDGET_PROP_SELECTED(): any;
export declare function WIDGET_PROP_CHECKED(): any;
export declare function WIDGET_PROP_ACTIVE_ICON(): any;
export declare function WIDGET_PROP_OPEN_WINDOW(): any;
export declare function WIDGET_PROP_SELECTED_INDEX(): any;
export declare function WIDGET_PROP_CLOSE_WHEN_CLICK(): any;
export declare function WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE(): any;
export declare function WIDGET_PROP_LINE_GAP(): any;
export declare function WIDGET_PROP_BG_COLOR(): any;
export declare function WIDGET_PROP_BORDER_COLOR(): any;
export declare function WIDGET_PROP_DELAY(): any;
export declare function WIDGET_PROP_IS_KEYBOARD(): any;
export declare function WIDGET_PROP_FOCUSED(): any;
export declare function WIDGET_PROP_FOCUS(): any;
export declare function WIDGET_PROP_FOCUSABLE(): any;
export declare function WIDGET_PROP_WITH_FOCUS_STATE(): any;
export declare function WIDGET_PROP_MOVE_FOCUS_PREV_KEY(): any;
export declare function WIDGET_PROP_MOVE_FOCUS_NEXT_KEY(): any;
export declare function WIDGET_PROP_MOVE_FOCUS_UP_KEY(): any;
export declare function WIDGET_PROP_MOVE_FOCUS_DOWN_KEY(): any;
export declare function WIDGET_PROP_MOVE_FOCUS_LEFT_KEY(): any;
export declare function WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY(): any;
export declare function WIDGET_TYPE_NONE(): any;
export declare function WIDGET_TYPE_WINDOW_MANAGER(): any;
export declare function WIDGET_TYPE_NORMAL_WINDOW(): any;
export declare function WIDGET_TYPE_OVERLAY(): any;
export declare function WIDGET_TYPE_TOOL_BAR(): any;
export declare function WIDGET_TYPE_DIALOG(): any;
export declare function WIDGET_TYPE_POPUP(): any;
export declare function WIDGET_TYPE_SYSTEM_BAR(): any;
export declare function WIDGET_TYPE_SYSTEM_BAR_BOTTOM(): any;
export declare function WIDGET_TYPE_SPRITE(): any;
export declare function WIDGET_TYPE_KEYBOARD(): any;
export declare function WIDGET_TYPE_DND(): any;
export declare function WIDGET_TYPE_LABEL(): any;
export declare function WIDGET_TYPE_BUTTON(): any;
export declare function WIDGET_TYPE_IMAGE(): any;
export declare function WIDGET_TYPE_EDIT(): any;
export declare function WIDGET_TYPE_PROGRESS_BAR(): any;
export declare function WIDGET_TYPE_GROUP_BOX(): any;
export declare function WIDGET_TYPE_CHECK_BUTTON(): any;
export declare function WIDGET_TYPE_RADIO_BUTTON(): any;
export declare function WIDGET_TYPE_DIALOG_TITLE(): any;
export declare function WIDGET_TYPE_DIALOG_CLIENT(): any;
export declare function WIDGET_TYPE_SLIDER(): any;
export declare function WIDGET_TYPE_VIEW(): any;
export declare function WIDGET_TYPE_COMBO_BOX(): any;
export declare function WIDGET_TYPE_COMBO_BOX_ITEM(): any;
export declare function WIDGET_TYPE_SLIDE_VIEW(): any;
export declare function WIDGET_TYPE_SLIDE_INDICATOR(): any;
export declare function WIDGET_TYPE_SLIDE_INDICATOR_ARC(): any;
export declare function WIDGET_TYPE_PAGES(): any;
export declare function WIDGET_TYPE_TAB_BUTTON(): any;
export declare function WIDGET_TYPE_TAB_CONTROL(): any;
export declare function WIDGET_TYPE_TAB_BUTTON_GROUP(): any;
export declare function WIDGET_TYPE_BUTTON_GROUP(): any;
export declare function WIDGET_TYPE_CANDIDATES(): any;
export declare function WIDGET_TYPE_SPIN_BOX(): any;
export declare function WIDGET_TYPE_DRAGGER(): any;
export declare function WIDGET_TYPE_SCROLL_BAR(): any;
export declare function WIDGET_TYPE_SCROLL_BAR_DESKTOP(): any;
export declare function WIDGET_TYPE_SCROLL_BAR_MOBILE(): any;
export declare function WIDGET_TYPE_SCROLL_VIEW(): any;
export declare function WIDGET_TYPE_LIST_VIEW(): any;
export declare function WIDGET_TYPE_LIST_VIEW_H(): any;
export declare function WIDGET_TYPE_LIST_ITEM(): any;
export declare function WIDGET_TYPE_COLOR_PICKER(): any;
export declare function WIDGET_TYPE_COLOR_COMPONENT(): any;
export declare function WIDGET_TYPE_COLOR_TILE(): any;
export declare function WIDGET_TYPE_RICH_TEXT(): any;
export declare function WIDGET_TYPE_APP_BAR(): any;
export declare function WIDGET_TYPE_GRID(): any;
export declare function WIDGET_TYPE_GRID_ITEM(): any;
export declare function WIDGET_TYPE_ROW(): any;
export declare function WIDGET_TYPE_COLUMN(): any;
export declare function WIDGET_TYPE_CALIBRATION_WIN(): any;
export declare function WINDOW_STAGE_NONE(): any;
export declare function WINDOW_STAGE_CREATED(): any;
export declare function WINDOW_STAGE_OPENED(): any;
export declare function WINDOW_STAGE_CLOSED(): any;
export declare function WINDOW_CLOSABLE_YES(): any;
export declare function WINDOW_CLOSABLE_NO(): any;
export declare function WINDOW_CLOSABLE_CONFIRM(): any;
export declare function WIDGET_STATE_NONE(): any;
export declare function WIDGET_STATE_NORMAL(): any;
export declare function WIDGET_STATE_PRESSED(): any;
export declare function WIDGET_STATE_OVER(): any;
export declare function WIDGET_STATE_DISABLE(): any;
export declare function WIDGET_STATE_FOCUSED(): any;
export declare function WIDGET_STATE_CHECKED(): any;
export declare function WIDGET_STATE_UNCHECKED(): any;
export declare function WIDGET_STATE_EMPTY(): any;
export declare function WIDGET_STATE_EMPTY_FOCUS(): any;
export declare function WIDGET_STATE_ERROR(): any;
export declare function WIDGET_STATE_SELECTED(): any;
export declare function WIDGET_STATE_NORMAL_OF_CHECKED(): any;
export declare function WIDGET_STATE_PRESSED_OF_CHECKED(): any;
export declare function WIDGET_STATE_OVER_OF_CHECKED(): any;
export declare function WIDGET_STATE_FOCUSED_OF_CHECKED(): any;
export declare function WIDGET_STATE_NORMAL_OF_ACTIVE(): any;
export declare function WIDGET_STATE_PRESSED_OF_ACTIVE(): any;
export declare function WIDGET_STATE_OVER_OF_ACTIVE(): any;
export declare function WIDGET_STATE_FOCUSED_OF_ACTIVE(): any;
export declare function widget_count_children(widget: TWidget): number;
export declare function widget_get_child(widget: TWidget, index: number): TWidget;
export declare function widget_index_of(widget: TWidget): number;
export declare function widget_move(widget: TWidget, x: number, y: number): TRet;
export declare function widget_resize(widget: TWidget, w: number, h: number): TRet;
export declare function widget_move_resize(widget: TWidget, x: number, y: number, w: number, h: number): TRet;
export declare function widget_set_value(widget: TWidget, value: number): TRet;
export declare function widget_animate_value_to(widget: TWidget, value: number, duration: number): TRet;
export declare function widget_add_value(widget: TWidget, delta: number): TRet;
export declare function widget_use_style(widget: TWidget, style: string): TRet;
export declare function widget_set_text_utf8(widget: TWidget, text: string): TRet;
export declare function widget_set_tr_text(widget: TWidget, text: string): TRet;
export declare function widget_get_value(widget: TWidget): number;
export declare function widget_get_text(widget: TWidget): any;
export declare function widget_set_name(widget: TWidget, name: string): TRet;
export declare function widget_set_theme(widget: TWidget, name: string): TRet;
export declare function widget_set_pointer_cursor(widget: TWidget, cursor: string): TRet;
export declare function widget_set_animation(widget: TWidget, animation: string): TRet;
export declare function widget_create_animator(widget: TWidget, animation: string): TRet;
export declare function widget_start_animator(widget: TWidget, name: string): TRet;
export declare function widget_set_animator_time_scale(widget: TWidget, name: string, time_scale: number): TRet;
export declare function widget_pause_animator(widget: TWidget, name: string): TRet;
export declare function widget_stop_animator(widget: TWidget, name: string): TRet;
export declare function widget_destroy_animator(widget: TWidget, name: string): TRet;
export declare function widget_set_enable(widget: TWidget, enable: number): TRet;
export declare function widget_set_feedback(widget: TWidget, feedback: number): TRet;
export declare function widget_set_floating(widget: TWidget, floating: number): TRet;
export declare function widget_set_focused(widget: TWidget, focused: number): TRet;
export declare function widget_child(widget: TWidget, name: string): TWidget;
export declare function widget_lookup(widget: TWidget, name: string, recursive: number): TWidget;
export declare function widget_lookup_by_type(widget: TWidget, type: string, recursive: number): TWidget;
export declare function widget_set_visible(widget: TWidget, visible: number, recursive: number): TRet;
export declare function widget_set_visible_only(widget: TWidget, visible: number): TRet;
export declare function widget_set_sensitive(widget: TWidget, sensitive: number): TRet;
export declare function widget_on(widget: TWidget, type: number, on_event: Function, ctx: any): number;
export declare function widget_on_with_tag(widget: TWidget, type: number, on_event: Function, ctx: any, tag: number): number;
export declare function widget_off(widget: TWidget, id: number): TRet;
export declare function widget_invalidate_force(widget: TWidget, r: TRect): TRet;
export declare function widget_set_prop_str(widget: TWidget, name: string, v: string): TRet;
export declare function widget_get_prop_str(widget: TWidget, name: string, defval: string): string;
export declare function widget_set_prop_int(widget: TWidget, name: string, v: number): TRet;
export declare function widget_get_prop_int(widget: TWidget, name: string, defval: number): number;
export declare function widget_set_prop_bool(widget: TWidget, name: string, v: number): TRet;
export declare function widget_get_prop_bool(widget: TWidget, name: string, defval: number): number;
export declare function widget_is_window_opened(widget: TWidget): number;
export declare function widget_is_window(widget: TWidget): number;
export declare function widget_is_designing_window(widget: TWidget): number;
export declare function widget_is_window_manager(widget: TWidget): number;
export declare function widget_foreach(widget: TWidget, visit: Function, ctx: any): TRet;
export declare function widget_get_window(widget: TWidget): TWidget;
export declare function widget_get_window_manager(widget: TWidget): TWidget;
export declare function widget_get_type(widget: TWidget): string;
export declare function widget_clone(widget: TWidget, parent: TWidget): TWidget;
export declare function widget_equal(widget: TWidget, other: TWidget): number;
export declare function widget_cast(widget: TWidget): TWidget;
export declare function widget_destroy(widget: TWidget): TRet;
export declare function widget_unref(widget: TWidget): TRet;
export declare function widget_layout(widget: TWidget): TRet;
export declare function widget_set_self_layout(widget: TWidget, params: string): TRet;
export declare function widget_set_children_layout(widget: TWidget, params: string): TRet;
export declare function widget_set_self_layout_params(widget: TWidget, x: string, y: string, w: string, h: string): TRet;
export declare function widget_set_style_int(widget: TWidget, state_and_name: string, value: number): TRet;
export declare function widget_set_style_str(widget: TWidget, state_and_name: string, value: string): TRet;
export declare function widget_set_style_color(widget: TWidget, state_and_name: string, value: number): TRet;
export declare function widget_t_get_prop_x(nativeObj: any): any;
export declare function widget_t_get_prop_y(nativeObj: any): any;
export declare function widget_t_get_prop_w(nativeObj: any): any;
export declare function widget_t_get_prop_h(nativeObj: any): any;
export declare function widget_t_get_prop_name(nativeObj: any): any;
export declare function widget_t_get_prop_tr_text(nativeObj: any): any;
export declare function widget_t_get_prop_style(nativeObj: any): any;
export declare function widget_t_get_prop_animation(nativeObj: any): any;
export declare function widget_t_get_prop_enable(nativeObj: any): any;
export declare function widget_t_get_prop_feedback(nativeObj: any): any;
export declare function widget_t_get_prop_visible(nativeObj: any): any;
export declare function widget_t_set_prop_visible(nativeObj: any, value: number): any;
export declare function widget_t_get_prop_sensitive(nativeObj: any): any;
export declare function widget_t_set_prop_sensitive(nativeObj: any, value: number): any;
export declare function widget_t_get_prop_focusable(nativeObj: any): any;
export declare function widget_t_set_prop_focusable(nativeObj: any, value: number): any;
export declare function widget_t_get_prop_with_focus_state(nativeObj: any): any;
export declare function widget_t_set_prop_with_focus_state(nativeObj: any, value: number): any;
export declare function widget_t_get_prop_floating(nativeObj: any): any;
export declare function RET_OK(): any;
export declare function RET_OOM(): any;
export declare function RET_FAIL(): any;
export declare function RET_NOT_IMPL(): any;
export declare function RET_QUIT(): any;
export declare function RET_FOUND(): any;
export declare function RET_BUSY(): any;
export declare function RET_REMOVE(): any;
export declare function RET_REPEAT(): any;
export declare function RET_NOT_FOUND(): any;
export declare function RET_DONE(): any;
export declare function RET_STOP(): any;
export declare function RET_SKIP(): any;
export declare function RET_CONTINUE(): any;
export declare function RET_OBJECT_CHANGED(): any;
export declare function RET_ITEMS_CHANGED(): any;
export declare function RET_BAD_PARAMS(): any;
export declare function RET_TIMEOUT(): any;
export declare function RET_CRC(): any;
export declare function RET_IO(): any;
export declare function RET_EOS(): any;
export declare function time_now_s(): number;
export declare function time_now_ms(): number;
export declare function rect_create(x: number, y: number, w: number, h: number): TRect;
export declare function rect_set(rect: TRect, x: number, y: number, w: number, h: number): TRect;
export declare function rect_cast(rect: TRect): TRect;
export declare function rect_destroy(r: TRect): TRet;
export declare function rect_t_get_prop_x(nativeObj: any): any;
export declare function rect_t_get_prop_y(nativeObj: any): any;
export declare function rect_t_get_prop_w(nativeObj: any): any;
export declare function rect_t_get_prop_h(nativeObj: any): any;
export declare function named_value_create(): TNamedValue;
export declare function named_value_cast(nv: TNamedValue): TNamedValue;
export declare function named_value_set_name(nv: TNamedValue, name: string): TRet;
export declare function named_value_set_value(nv: TNamedValue, value: TValue): TRet;
export declare function named_value_get_value(nv: TNamedValue): TValue;
export declare function named_value_destroy(nv: TNamedValue): TRet;
export declare function named_value_t_get_prop_name(nativeObj: any): any;
export declare function MIME_TYPE_APPLICATION_ENVOY(): any;
export declare function MIME_TYPE_APPLICATION_FRACTALS(): any;
export declare function MIME_TYPE_APPLICATION_FUTURESPLASH(): any;
export declare function MIME_TYPE_APPLICATION_HTA(): any;
export declare function MIME_TYPE_APPLICATION_JSON(): any;
export declare function MIME_TYPE_APPLICATION_UBJSON(): any;
export declare function MIME_TYPE_APPLICATION_MAC_BINHEX40(): any;
export declare function MIME_TYPE_APPLICATION_MSWORD(): any;
export declare function MIME_TYPE_APPLICATION_OCTET_STREAM(): any;
export declare function MIME_TYPE_APPLICATION_ODA(): any;
export declare function MIME_TYPE_APPLICATION_OLESCRIPT(): any;
export declare function MIME_TYPE_APPLICATION_PDF(): any;
export declare function MIME_TYPE_APPLICATION_PICS_RULES(): any;
export declare function MIME_TYPE_APPLICATION_PKCS10(): any;
export declare function MIME_TYPE_APPLICATION_PKIX_CRL(): any;
export declare function MIME_TYPE_APPLICATION_POSTSCRIPT(): any;
export declare function MIME_TYPE_APPLICATION_RTF(): any;
export declare function MIME_TYPE_APPLICATION_VND_MS_EXCEL(): any;
export declare function MIME_TYPE_APPLICATION_VND_MS_OUTLOOK(): any;
export declare function MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE(): any;
export declare function MIME_TYPE_APPLICATION_VND_MS_PKISECCAT(): any;
export declare function MIME_TYPE_APPLICATION_VND_MS_PKISTL(): any;
export declare function MIME_TYPE_APPLICATION_VND_MS_POWERPOINT(): any;
export declare function MIME_TYPE_APPLICATION_VND_MS_PROJECT(): any;
export declare function MIME_TYPE_APPLICATION_VND_MS_WORKS(): any;
export declare function MIME_TYPE_APPLICATION_WINHLP(): any;
export declare function MIME_TYPE_APPLICATION_X_BCPIO(): any;
export declare function MIME_TYPE_APPLICATION_X_CDF(): any;
export declare function MIME_TYPE_APPLICATION_X_COMPRESS(): any;
export declare function MIME_TYPE_APPLICATION_X_COMPRESSED(): any;
export declare function MIME_TYPE_APPLICATION_X_CPIO(): any;
export declare function MIME_TYPE_APPLICATION_X_CSH(): any;
export declare function MIME_TYPE_APPLICATION_X_DIRECTOR(): any;
export declare function MIME_TYPE_APPLICATION_X_DVI(): any;
export declare function MIME_TYPE_APPLICATION_X_GTAR(): any;
export declare function MIME_TYPE_APPLICATION_X_GZIP(): any;
export declare function MIME_TYPE_APPLICATION_X_HDF(): any;
export declare function MIME_TYPE_APPLICATION_X_IPHONE(): any;
export declare function MIME_TYPE_APPLICATION_X_JAVASCRIPT(): any;
export declare function MIME_TYPE_APPLICATION_X_LATEX(): any;
export declare function MIME_TYPE_APPLICATION_X_MSACCESS(): any;
export declare function MIME_TYPE_APPLICATION_X_MSCARDFILE(): any;
export declare function MIME_TYPE_APPLICATION_X_MSCLIP(): any;
export declare function MIME_TYPE_APPLICATION_X_MSDOWNLOAD(): any;
export declare function MIME_TYPE_APPLICATION_X_MSMEDIAVIEW(): any;
export declare function MIME_TYPE_APPLICATION_X_MSMETAFILE(): any;
export declare function MIME_TYPE_APPLICATION_X_MSMONEY(): any;
export declare function MIME_TYPE_APPLICATION_X_MSPUBLISHER(): any;
export declare function MIME_TYPE_APPLICATION_X_MSSCHEDULE(): any;
export declare function MIME_TYPE_APPLICATION_X_MSTERMINAL(): any;
export declare function MIME_TYPE_APPLICATION_X_MSWRITE(): any;
export declare function MIME_TYPE_APPLICATION_X_NETCDF(): any;
export declare function MIME_TYPE_APPLICATION_X_PERFMON(): any;
export declare function MIME_TYPE_APPLICATION_X_PKCS12(): any;
export declare function MIME_TYPE_APPLICATION_X_SH(): any;
export declare function MIME_TYPE_APPLICATION_X_SHAR(): any;
export declare function MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH(): any;
export declare function MIME_TYPE_APPLICATION_X_STUFFIT(): any;
export declare function MIME_TYPE_APPLICATION_X_SV4CPIO(): any;
export declare function MIME_TYPE_APPLICATION_X_SV4CRC(): any;
export declare function MIME_TYPE_APPLICATION_X_TAR(): any;
export declare function MIME_TYPE_APPLICATION_X_TCL(): any;
export declare function MIME_TYPE_APPLICATION_X_TEX(): any;
export declare function MIME_TYPE_APPLICATION_X_TEXINFO(): any;
export declare function MIME_TYPE_APPLICATION_X_TROFF(): any;
export declare function MIME_TYPE_APPLICATION_X_USTAR(): any;
export declare function MIME_TYPE_APPLICATION_ZIP(): any;
export declare function MIME_TYPE_AUDIO_BASIC(): any;
export declare function MIME_TYPE_AUDIO_MID(): any;
export declare function MIME_TYPE_AUDIO_MPEG(): any;
export declare function MIME_TYPE_AUDIO_X_AIFF(): any;
export declare function MIME_TYPE_AUDIO_X_MPEGURL(): any;
export declare function MIME_TYPE_AUDIO_X_WAV(): any;
export declare function MIME_TYPE_IMAGE_BMP(): any;
export declare function MIME_TYPE_IMAGE_CIS_COD(): any;
export declare function MIME_TYPE_IMAGE_GIF(): any;
export declare function MIME_TYPE_IMAGE_IEF(): any;
export declare function MIME_TYPE_IMAGE_JPEG(): any;
export declare function MIME_TYPE_IMAGE_PIPEG(): any;
export declare function MIME_TYPE_IMAGE_SVG_XML(): any;
export declare function MIME_TYPE_IMAGE_TIFF(): any;
export declare function MIME_TYPE_IMAGE_X_CMX(): any;
export declare function MIME_TYPE_IMAGE_X_ICON(): any;
export declare function MIME_TYPE_IMAGE_X_RGB(): any;
export declare function MIME_TYPE_IMAGE_X_XBITMAP(): any;
export declare function MIME_TYPE_IMAGE_X_XPIXMAP(): any;
export declare function MIME_TYPE_IMAGE_X_XWINDOWDUMP(): any;
export declare function MIME_TYPE_MESSAGE_RFC822(): any;
export declare function MIME_TYPE_TEXT_CSS(): any;
export declare function MIME_TYPE_TEXT_H323(): any;
export declare function MIME_TYPE_TEXT_HTML(): any;
export declare function MIME_TYPE_TEXT_IULS(): any;
export declare function MIME_TYPE_TEXT_PLAIN(): any;
export declare function MIME_TYPE_TEXT_RICHTEXT(): any;
export declare function MIME_TYPE_TEXT_SCRIPTLET(): any;
export declare function MIME_TYPE_TEXT_WEBVIEWHTML(): any;
export declare function MIME_TYPE_TEXT_X_COMPONENT(): any;
export declare function MIME_TYPE_TEXT_X_SETEXT(): any;
export declare function MIME_TYPE_TEXT_X_VCARD(): any;
export declare function MIME_TYPE_VIDEO_MPEG(): any;
export declare function MIME_TYPE_VIDEO_QUICKTIME(): any;
export declare function MIME_TYPE_VIDEO_X_MSVIDEO(): any;
export declare function INDICATOR_DEFAULT_PAINT_AUTO(): any;
export declare function INDICATOR_DEFAULT_PAINT_FILL_DOT(): any;
export declare function INDICATOR_DEFAULT_PAINT_STROKE_DOT(): any;
export declare function INDICATOR_DEFAULT_PAINT_FILL_RECT(): any;
export declare function INDICATOR_DEFAULT_PAINT_STROKE_RECT(): any;
export declare function event_cast(event: TEvent): TEvent;
export declare function event_create(type: number): TEvent;
export declare function event_destroy(event: TEvent): TRet;
export declare function event_t_get_prop_type(nativeObj: any): any;
export declare function event_t_get_prop_time(nativeObj: any): any;
export declare function event_t_get_prop_target(nativeObj: any): any;
export declare function EVT_NONE(): any;
export declare function EVT_PROP_WILL_CHANGE(): any;
export declare function EVT_PROP_CHANGED(): any;
export declare function EVT_ITEMS_WILL_CHANGE(): any;
export declare function EVT_ITEMS_CHANGED(): any;
export declare function EVT_PROPS_CHANGED(): any;
export declare function EVT_PROGRESS(): any;
export declare function EVT_DESTROY(): any;
export declare function emitter_create(): TEmitter;
export declare function emitter_dispatch(emitter: TEmitter, e: TEvent): TRet;
export declare function emitter_dispatch_simple_event(emitter: TEmitter, type: number): TRet;
export declare function emitter_on(emitter: TEmitter, type: number, on_event: Function, ctx: any): number;
export declare function emitter_on_with_tag(emitter: TEmitter, type: number, on_event: Function, ctx: any, tag: number): number;
export declare function emitter_off(emitter: TEmitter, id: number): TRet;
export declare function emitter_enable(emitter: TEmitter): TRet;
export declare function emitter_disable(emitter: TEmitter): TRet;
export declare function emitter_size(emitter: TEmitter): number;
export declare function emitter_destroy(emitter: TEmitter): TRet;
export declare function emitter_cast(emitter: TEmitter): TEmitter;
export declare function EASING_LINEAR(): any;
export declare function EASING_QUADRATIC_IN(): any;
export declare function EASING_QUADRATIC_OUT(): any;
export declare function EASING_QUADRATIC_INOUT(): any;
export declare function EASING_CUBIC_IN(): any;
export declare function EASING_CUBIC_OUT(): any;
export declare function EASING_SIN_IN(): any;
export declare function EASING_SIN_OUT(): any;
export declare function EASING_SIN_INOUT(): any;
export declare function EASING_POW_IN(): any;
export declare function EASING_POW_OUT(): any;
export declare function EASING_POW_INOUT(): any;
export declare function EASING_CIRCULAR_IN(): any;
export declare function EASING_CIRCULAR_OUT(): any;
export declare function EASING_CIRCULAR_INOUT(): any;
export declare function EASING_ELASTIC_IN(): any;
export declare function EASING_ELASTIC_OUT(): any;
export declare function EASING_ELASTIC_INOUT(): any;
export declare function EASING_BACK_IN(): any;
export declare function EASING_BACK_OUT(): any;
export declare function EASING_BACK_INOUT(): any;
export declare function EASING_BOUNCE_IN(): any;
export declare function EASING_BOUNCE_OUT(): any;
export declare function EASING_BOUNCE_INOUT(): any;
export declare function date_time_create(): TDateTime;
export declare function date_time_set(dt: TDateTime): TRet;
export declare function date_time_destroy(dt: TDateTime): TRet;
export declare function date_time_t_get_prop_second(nativeObj: any): any;
export declare function date_time_t_get_prop_minute(nativeObj: any): any;
export declare function date_time_t_get_prop_hour(nativeObj: any): any;
export declare function date_time_t_get_prop_day(nativeObj: any): any;
export declare function date_time_t_get_prop_wday(nativeObj: any): any;
export declare function date_time_t_get_prop_month(nativeObj: any): any;
export declare function date_time_t_get_prop_year(nativeObj: any): any;
export declare function color_create(r: number, b: number, g: number, a: number): TColor;
export declare function color_from_str(c: TColor, str: string): TColor;
export declare function color_r(c: TColor): number;
export declare function color_g(c: TColor): number;
export declare function color_b(c: TColor): number;
export declare function color_a(c: TColor): number;
export declare function color_cast(color: TColor): TColor;
export declare function color_destroy(c: TColor): TRet;
export declare function color_t_get_prop_color(nativeObj: any): any;
export declare function color_t_set_prop_color(nativeObj: any, value: number): any;
export declare function asset_info_t_get_prop_type(nativeObj: any): any;
export declare function asset_info_t_get_prop_subtype(nativeObj: any): any;
export declare function asset_info_t_get_prop_is_in_rom(nativeObj: any): any;
export declare function asset_info_t_get_prop_size(nativeObj: any): any;
export declare function asset_info_t_get_prop_refcount(nativeObj: any): any;
export declare function asset_info_t_get_prop_name(nativeObj: any): any;
export declare function ASSET_TYPE_NONE(): any;
export declare function ASSET_TYPE_FONT(): any;
export declare function ASSET_TYPE_IMAGE(): any;
export declare function ASSET_TYPE_STYLE(): any;
export declare function ASSET_TYPE_UI(): any;
export declare function ASSET_TYPE_XML(): any;
export declare function ASSET_TYPE_STRINGS(): any;
export declare function ASSET_TYPE_SCRIPT(): any;
export declare function ASSET_TYPE_DATA(): any;
export declare function assets_manager(): TAssetsManager;
export declare function assets_manager_ref(am: TAssetsManager, type: TAssetType, name: string): TAssetInfo;
export declare function assets_manager_unref(am: TAssetsManager, info: TAssetInfo): TRet;
export declare function color_component_cast(widget: TWidget): TWidget;
export declare function time_clock_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function time_clock_cast(widget: TWidget): TWidget;
export declare function time_clock_set_hour(widget: TWidget, hour: number): TRet;
export declare function time_clock_set_minute(widget: TWidget, minute: number): TRet;
export declare function time_clock_set_second(widget: TWidget, second: number): TRet;
export declare function time_clock_set_hour_image(widget: TWidget, hour: string): TRet;
export declare function time_clock_set_minute_image(widget: TWidget, minute_image: string): TRet;
export declare function time_clock_set_second_image(widget: TWidget, second_image: string): TRet;
export declare function time_clock_set_bg_image(widget: TWidget, bg_image: string): TRet;
export declare function time_clock_set_image(widget: TWidget, image: string): TRet;
export declare function time_clock_set_hour_anchor(widget: TWidget, anchor_x: string, anchor_y: string): TRet;
export declare function time_clock_set_minute_anchor(widget: TWidget, anchor_x: string, anchor_y: string): TRet;
export declare function time_clock_set_second_anchor(widget: TWidget, anchor_x: string, anchor_y: string): TRet;
export declare function time_clock_t_get_prop_hour(nativeObj: any): any;
export declare function time_clock_t_get_prop_minute(nativeObj: any): any;
export declare function time_clock_t_get_prop_second(nativeObj: any): any;
export declare function time_clock_t_get_prop_image(nativeObj: any): any;
export declare function time_clock_t_get_prop_bg_image(nativeObj: any): any;
export declare function time_clock_t_get_prop_hour_image(nativeObj: any): any;
export declare function time_clock_t_get_prop_minute_image(nativeObj: any): any;
export declare function time_clock_t_get_prop_second_image(nativeObj: any): any;
export declare function time_clock_t_get_prop_hour_anchor_x(nativeObj: any): any;
export declare function time_clock_t_get_prop_hour_anchor_y(nativeObj: any): any;
export declare function time_clock_t_get_prop_minute_anchor_x(nativeObj: any): any;
export declare function time_clock_t_get_prop_minute_anchor_y(nativeObj: any): any;
export declare function time_clock_t_get_prop_second_anchor_x(nativeObj: any): any;
export declare function time_clock_t_get_prop_second_anchor_y(nativeObj: any): any;
export declare function text_selector_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function text_selector_cast(widget: TWidget): TWidget;
export declare function text_selector_reset_options(widget: TWidget): TRet;
export declare function text_selector_count_options(widget: TWidget): number;
export declare function text_selector_append_option(widget: TWidget, value: number, text: string): TRet;
export declare function text_selector_set_options(widget: TWidget, options: string): TRet;
export declare function text_selector_set_range_options(widget: TWidget, start: number, nr: number, step: number): TRet;
export declare function text_selector_get_value(widget: TWidget): number;
export declare function text_selector_set_value(widget: TWidget, value: number): TRet;
export declare function text_selector_get_text(widget: TWidget): string;
export declare function text_selector_set_text(widget: TWidget, text: string): TRet;
export declare function text_selector_set_selected_index(widget: TWidget, index: number): TRet;
export declare function text_selector_set_visible_nr(widget: TWidget, visible_nr: number): TRet;
export declare function text_selector_t_get_prop_visible_nr(nativeObj: any): any;
export declare function text_selector_t_get_prop_selected_index(nativeObj: any): any;
export declare function text_selector_t_get_prop_options(nativeObj: any): any;
export declare function switch_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function switch_set_value(widget: TWidget, value: number): TRet;
export declare function switch_cast(widget: TWidget): TWidget;
export declare function switch_t_get_prop_value(nativeObj: any): any;
export declare function switch_t_get_prop_max_xoffset_ratio(nativeObj: any): any;
export declare function prop_change_event_cast(event: TEvent): TPropChangeEvent;
export declare function prop_change_event_t_get_prop_name(nativeObj: any): any;
export declare function prop_change_event_t_get_prop_value(nativeObj: any): any;
export declare function progress_event_cast(event: TEvent): TProgressEvent;
export declare function progress_event_t_get_prop_percent(nativeObj: any): any;
export declare function view_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function view_cast(widget: TWidget): TWidget;
export declare function slide_view_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function slide_view_cast(widget: TWidget): TWidget;
export declare function slide_view_set_auto_play(widget: TWidget, auto_play: number): TRet;
export declare function slide_view_set_active(widget: TWidget, index: number): TRet;
export declare function slide_view_set_vertical(widget: TWidget, vertical: number): TRet;
export declare function slide_view_set_anim_hint(widget: TWidget, anim_hint: string): TRet;
export declare function slide_view_set_loop(widget: TWidget, loop: number): TRet;
export declare function slide_view_t_get_prop_vertical(nativeObj: any): any;
export declare function slide_view_t_get_prop_auto_play(nativeObj: any): any;
export declare function slide_view_t_get_prop_loop(nativeObj: any): any;
export declare function slide_view_t_get_prop_anim_hint(nativeObj: any): any;
export declare function slide_indicator_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function slide_indicator_create_linear(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function slide_indicator_create_arc(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function slide_indicator_cast(widget: TWidget): TWidget;
export declare function slide_indicator_set_value(widget: TWidget, value: number): TRet;
export declare function slide_indicator_set_max(widget: TWidget, max: number): TRet;
export declare function slide_indicator_set_default_paint(widget: TWidget, default_paint: TIndicatorDefaultPaint): TRet;
export declare function slide_indicator_set_auto_hide(widget: TWidget, auto_hide: number): TRet;
export declare function slide_indicator_set_margin(widget: TWidget, margin: number): TRet;
export declare function slide_indicator_set_spacing(widget: TWidget, spacing: number): TRet;
export declare function slide_indicator_set_size(widget: TWidget, size: number): TRet;
export declare function slide_indicator_set_anchor(widget: TWidget, anchor_x: string, anchor_y: string): TRet;
export declare function slide_indicator_set_indicated_target(widget: TWidget, indicated_target: string): TRet;
export declare function slide_indicator_t_get_prop_value(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_max(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_default_paint(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_auto_hide(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_margin(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_spacing(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_size(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_anchor_x(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_anchor_y(nativeObj: any): any;
export declare function slide_indicator_t_get_prop_indicated_target(nativeObj: any): any;
export declare function slide_menu_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function slide_menu_cast(widget: TWidget): TWidget;
export declare function slide_menu_set_value(widget: TWidget, value: number): TRet;
export declare function slide_menu_set_align_v(widget: TWidget, align_v: TAlignV): TRet;
export declare function slide_menu_set_min_scale(widget: TWidget, min_scale: number): TRet;
export declare function slide_menu_t_get_prop_value(nativeObj: any): any;
export declare function slide_menu_t_get_prop_align_v(nativeObj: any): any;
export declare function slide_menu_t_get_prop_min_scale(nativeObj: any): any;
export declare function scroll_view_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function scroll_view_cast(widget: TWidget): TWidget;
export declare function scroll_view_set_virtual_w(widget: TWidget, w: number): TRet;
export declare function scroll_view_set_virtual_h(widget: TWidget, h: number): TRet;
export declare function scroll_view_set_xslidable(widget: TWidget, xslidable: number): TRet;
export declare function scroll_view_set_yslidable(widget: TWidget, yslidable: number): TRet;
export declare function scroll_view_set_offset(widget: TWidget, xoffset: number, yoffset: number): TRet;
export declare function scroll_view_scroll_to(widget: TWidget, xoffset_end: number, yoffset_end: number, duration: number): TRet;
export declare function scroll_view_scroll_delta_to(widget: TWidget, xoffset_delta: number, yoffset_delta: number, duration: number): TRet;
export declare function scroll_view_t_get_prop_virtual_w(nativeObj: any): any;
export declare function scroll_view_t_get_prop_virtual_h(nativeObj: any): any;
export declare function scroll_view_t_get_prop_xoffset(nativeObj: any): any;
export declare function scroll_view_t_get_prop_yoffset(nativeObj: any): any;
export declare function scroll_view_t_get_prop_xslidable(nativeObj: any): any;
export declare function scroll_view_t_get_prop_yslidable(nativeObj: any): any;
export declare function scroll_bar_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function scroll_bar_cast(widget: TWidget): TWidget;
export declare function scroll_bar_create_mobile(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function scroll_bar_create_desktop(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function scroll_bar_set_params(widget: TWidget, virtual_size: number, row: number): TRet;
export declare function scroll_bar_scroll_to(widget: TWidget, value: number, duration: number): TRet;
export declare function scroll_bar_set_value(widget: TWidget, value: number): TRet;
export declare function scroll_bar_add_delta(widget: TWidget, delta: number): TRet;
export declare function scroll_bar_scroll_delta(widget: TWidget, delta: number): TRet;
export declare function scroll_bar_set_value_only(widget: TWidget, value: number): TRet;
export declare function scroll_bar_is_mobile(widget: TWidget): number;
export declare function scroll_bar_t_get_prop_virtual_size(nativeObj: any): any;
export declare function scroll_bar_t_get_prop_value(nativeObj: any): any;
export declare function scroll_bar_t_get_prop_row(nativeObj: any): any;
export declare function scroll_bar_t_get_prop_animatable(nativeObj: any): any;
export declare function tab_control_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function tab_control_cast(widget: TWidget): TWidget;
export declare function list_view_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function list_view_set_item_height(widget: TWidget, item_height: number): TRet;
export declare function list_view_set_default_item_height(widget: TWidget, default_item_height: number): TRet;
export declare function list_view_set_auto_hide_scroll_bar(widget: TWidget, auto_hide_scroll_bar: number): TRet;
export declare function list_view_cast(widget: TWidget): TWidget;
export declare function list_view_t_get_prop_item_height(nativeObj: any): any;
export declare function list_view_t_get_prop_default_item_height(nativeObj: any): any;
export declare function list_view_t_get_prop_auto_hide_scroll_bar(nativeObj: any): any;
export declare function list_view_h_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function list_view_h_set_item_width(widget: TWidget, item_width: number): TRet;
export declare function list_view_h_set_spacing(widget: TWidget, spacing: number): TRet;
export declare function list_view_h_cast(widget: TWidget): TWidget;
export declare function list_view_h_t_get_prop_item_width(nativeObj: any): any;
export declare function list_view_h_t_get_prop_spacing(nativeObj: any): any;
export declare function tab_button_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function tab_button_cast(widget: TWidget): TWidget;
export declare function tab_button_set_value(widget: TWidget, value: number): TRet;
export declare function tab_button_set_icon(widget: TWidget, name: string): TRet;
export declare function tab_button_set_active_icon(widget: TWidget, name: string): TRet;
export declare function tab_button_t_get_prop_value(nativeObj: any): any;
export declare function tab_button_t_get_prop_active_icon(nativeObj: any): any;
export declare function tab_button_t_get_prop_icon(nativeObj: any): any;
export declare function tab_button_group_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function tab_button_group_set_compact(widget: TWidget, compact: number): TRet;
export declare function tab_button_group_set_scrollable(widget: TWidget, scrollable: number): TRet;
export declare function tab_button_group_cast(widget: TWidget): TWidget;
export declare function tab_button_group_t_get_prop_compact(nativeObj: any): any;
export declare function tab_button_group_t_get_prop_scrollable(nativeObj: any): any;
export declare function list_item_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function list_item_cast(widget: TWidget): TWidget;
export declare function hscroll_label_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function hscroll_label_set_lull(widget: TWidget, lull: number): TRet;
export declare function hscroll_label_set_duration(widget: TWidget, duration: number): TRet;
export declare function hscroll_label_set_only_focus(widget: TWidget, only_focus: number): TRet;
export declare function hscroll_label_set_only_parent_focus(widget: TWidget, only_parent_focus: number): TRet;
export declare function hscroll_label_set_loop(widget: TWidget, loop: number): TRet;
export declare function hscroll_label_set_yoyo(widget: TWidget, yoyo: number): TRet;
export declare function hscroll_label_set_ellipses(widget: TWidget, ellipses: number): TRet;
export declare function hscroll_label_set_xoffset(widget: TWidget, xoffset: number): TRet;
export declare function hscroll_label_start(widget: TWidget): TRet;
export declare function hscroll_label_stop(widget: TWidget): TRet;
export declare function hscroll_label_cast(widget: TWidget): TWidget;
export declare function hscroll_label_t_get_prop_only_focus(nativeObj: any): any;
export declare function hscroll_label_t_get_prop_only_parent_focus(nativeObj: any): any;
export declare function hscroll_label_t_get_prop_loop(nativeObj: any): any;
export declare function hscroll_label_t_get_prop_yoyo(nativeObj: any): any;
export declare function hscroll_label_t_get_prop_ellipses(nativeObj: any): any;
export declare function hscroll_label_t_get_prop_lull(nativeObj: any): any;
export declare function hscroll_label_t_get_prop_duration(nativeObj: any): any;
export declare function hscroll_label_t_get_prop_xoffset(nativeObj: any): any;
export declare function hscroll_label_t_get_prop_text_w(nativeObj: any): any;
export declare function rich_text_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function rich_text_set_text(widget: TWidget, text: string): TRet;
export declare function rich_text_cast(widget: TWidget): TWidget;
export declare function rich_text_t_get_prop_line_gap(nativeObj: any): any;
export declare function progress_circle_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function progress_circle_cast(widget: TWidget): TWidget;
export declare function progress_circle_set_value(widget: TWidget, value: number): TRet;
export declare function progress_circle_set_max(widget: TWidget, max: number): TRet;
export declare function progress_circle_set_line_width(widget: TWidget, line_width: number): TRet;
export declare function progress_circle_set_start_angle(widget: TWidget, start_angle: number): TRet;
export declare function progress_circle_set_unit(widget: TWidget, unit: string): TRet;
export declare function progress_circle_set_show_text(widget: TWidget, show_text: number): TRet;
export declare function progress_circle_set_counter_clock_wise(widget: TWidget, counter_clock_wise: number): TRet;
export declare function progress_circle_t_get_prop_value(nativeObj: any): any;
export declare function progress_circle_t_get_prop_max(nativeObj: any): any;
export declare function progress_circle_t_get_prop_start_angle(nativeObj: any): any;
export declare function progress_circle_t_get_prop_line_width(nativeObj: any): any;
export declare function progress_circle_t_get_prop_unit(nativeObj: any): any;
export declare function progress_circle_t_get_prop_counter_clock_wise(nativeObj: any): any;
export declare function progress_circle_t_get_prop_show_text(nativeObj: any): any;
export declare function slider_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function slider_cast(widget: TWidget): TWidget;
export declare function slider_set_value(widget: TWidget, value: number): TRet;
export declare function slider_set_min(widget: TWidget, min: number): TRet;
export declare function slider_set_max(widget: TWidget, max: number): TRet;
export declare function slider_set_step(widget: TWidget, step: number): TRet;
export declare function slider_set_bar_size(widget: TWidget, bar_size: number): TRet;
export declare function slider_set_vertical(widget: TWidget, vertical: number): TRet;
export declare function slider_t_get_prop_value(nativeObj: any): any;
export declare function slider_t_get_prop_min(nativeObj: any): any;
export declare function slider_t_get_prop_max(nativeObj: any): any;
export declare function slider_t_get_prop_step(nativeObj: any): any;
export declare function slider_t_get_prop_vertical(nativeObj: any): any;
export declare function slider_t_get_prop_bar_size(nativeObj: any): any;
export declare function mledit_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function mledit_set_readonly(widget: TWidget, readonly: number): TRet;
export declare function mledit_set_focus(widget: TWidget, focus: number): TRet;
export declare function mledit_set_wrap_word(widget: TWidget, wrap_word: number): TRet;
export declare function mledit_set_max_lines(widget: TWidget, max_lines: number): TRet;
export declare function mledit_set_input_tips(widget: TWidget, tips: string): TRet;
export declare function mledit_set_cursor(widget: TWidget, cursor: number): TRet;
export declare function mledit_set_scroll_line(widget: TWidget, scroll_line: number): TRet;
export declare function mledit_cast(widget: TWidget): TWidget;
export declare function mledit_t_get_prop_readonly(nativeObj: any): any;
export declare function mledit_t_get_prop_tips(nativeObj: any): any;
export declare function mledit_t_get_prop_wrap_word(nativeObj: any): any;
export declare function mledit_t_get_prop_max_lines(nativeObj: any): any;
export declare function mledit_t_get_prop_scroll_line(nativeObj: any): any;
export declare function row_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function row_cast(widget: TWidget): TWidget;
export declare function progress_bar_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function progress_bar_cast(widget: TWidget): TWidget;
export declare function progress_bar_set_value(widget: TWidget, value: number): TRet;
export declare function progress_bar_set_max(widget: TWidget, max: number): TRet;
export declare function progress_bar_set_vertical(widget: TWidget, vertical: number): TRet;
export declare function progress_bar_set_show_text(widget: TWidget, show_text: number): TRet;
export declare function progress_bar_get_percent(widget: TWidget): number;
export declare function progress_bar_t_get_prop_value(nativeObj: any): any;
export declare function progress_bar_t_get_prop_max(nativeObj: any): any;
export declare function progress_bar_t_get_prop_vertical(nativeObj: any): any;
export declare function progress_bar_t_get_prop_show_text(nativeObj: any): any;
export declare function object_unref(obj: TObject): TRet;
export declare function object_ref(obj: TObject): TObject;
export declare function object_get_type(obj: TObject): string;
export declare function object_get_desc(obj: TObject): string;
export declare function object_get_size(obj: TObject): number;
export declare function object_is_collection(obj: TObject): number;
export declare function object_set_name(obj: TObject, name: string): TRet;
export declare function object_compare(obj: TObject, other: TObject): number;
export declare function object_get_prop(obj: TObject, name: string, v: TValue): TRet;
export declare function object_get_prop_str(obj: TObject, name: string): string;
export declare function object_get_prop_pointer(obj: TObject, name: string): any;
export declare function object_get_prop_object(obj: TObject, name: string): TObject;
export declare function object_get_prop_int(obj: TObject, name: string, defval: number): number;
export declare function object_get_prop_bool(obj: TObject, name: string, defval: number): number;
export declare function object_get_prop_float(obj: TObject, name: string, defval: number): number;
export declare function object_remove_prop(obj: TObject, name: string): TRet;
export declare function object_set_prop(obj: TObject, name: string, value: TValue): TRet;
export declare function object_set_prop_str(obj: TObject, name: string, value: string): TRet;
export declare function object_set_prop_object(obj: TObject, name: string, value: TObject): TRet;
export declare function object_set_prop_int(obj: TObject, name: string, value: number): TRet;
export declare function object_set_prop_bool(obj: TObject, name: string, value: number): TRet;
export declare function object_set_prop_float(obj: TObject, name: string, value: number): TRet;
export declare function object_copy_prop(obj: TObject, src: TObject, name: string): TRet;
export declare function object_foreach_prop(obj: TObject, on_prop: Function, ctx: any): TRet;
export declare function object_has_prop(obj: TObject, name: string): number;
export declare function object_eval(obj: TObject, expr: string, v: TValue): TRet;
export declare function object_can_exec(obj: TObject, name: string, args: string): number;
export declare function object_exec(obj: TObject, name: string, args: string): TRet;
export declare function object_notify_changed(obj: TObject): TRet;
export declare function object_get_prop_str_by_path(obj: TObject, path: string): string;
export declare function object_get_prop_pointer_by_path(obj: TObject, path: string): any;
export declare function object_get_prop_object_by_path(obj: TObject, path: string): TObject;
export declare function object_get_prop_int_by_path(obj: TObject, path: string, defval: number): number;
export declare function object_get_prop_bool_by_path(obj: TObject, path: string, defval: number): number;
export declare function object_get_prop_float_by_path(obj: TObject, path: string, defval: number): number;
export declare function object_t_get_prop_ref_count(nativeObj: any): any;
export declare function object_t_get_prop_name(nativeObj: any): any;
export declare function pages_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function pages_cast(widget: TWidget): TWidget;
export declare function pages_set_active(widget: TWidget, index: number): TRet;
export declare function pages_set_active_by_name(widget: TWidget, name: string): TRet;
export declare function pages_t_get_prop_active(nativeObj: any): any;
export declare function line_number_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function line_number_set_top_margin(widget: TWidget, top_margin: number): TRet;
export declare function line_number_set_bottom_margin(widget: TWidget, bottom_margin: number): TRet;
export declare function line_number_set_line_height(widget: TWidget, line_height: number): TRet;
export declare function line_number_set_yoffset(widget: TWidget, yoffset: number): TRet;
export declare function line_number_cast(widget: TWidget): TWidget;
export declare function overlay_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function overlay_cast(widget: TWidget): TWidget;
export declare function image_value_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function image_value_set_image(widget: TWidget, image: string): TRet;
export declare function image_value_set_format(widget: TWidget, format: string): TRet;
export declare function image_value_set_value(widget: TWidget, value: number): TRet;
export declare function image_value_cast(widget: TWidget): TWidget;
export declare function image_value_t_get_prop_image(nativeObj: any): any;
export declare function image_value_t_get_prop_format(nativeObj: any): any;
export declare function image_value_t_get_prop_value(nativeObj: any): any;
export declare function image_animation_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function image_animation_set_loop(widget: TWidget, loop: number): TRet;
export declare function image_animation_set_image(widget: TWidget, image: string): TRet;
export declare function image_animation_set_interval(widget: TWidget, interval: number): TRet;
export declare function image_animation_set_delay(widget: TWidget, delay: number): TRet;
export declare function image_animation_set_auto_play(widget: TWidget, auto_play: number): TRet;
export declare function image_animation_set_sequence(widget: TWidget, sequence: string): TRet;
export declare function image_animation_set_range_sequence(widget: TWidget, start_index: number, end_index: number): TRet;
export declare function image_animation_play(widget: TWidget): TRet;
export declare function image_animation_stop(widget: TWidget): TRet;
export declare function image_animation_pause(widget: TWidget): TRet;
export declare function image_animation_next(widget: TWidget): TRet;
export declare function image_animation_set_format(widget: TWidget, format: string): TRet;
export declare function image_animation_set_unload_after_paint(widget: TWidget, unload_after_paint: number): TRet;
export declare function image_animation_cast(widget: TWidget): TWidget;
export declare function image_animation_t_get_prop_image(nativeObj: any): any;
export declare function image_animation_t_get_prop_sequence(nativeObj: any): any;
export declare function image_animation_t_get_prop_start_index(nativeObj: any): any;
export declare function image_animation_t_get_prop_end_index(nativeObj: any): any;
export declare function image_animation_t_get_prop_loop(nativeObj: any): any;
export declare function image_animation_t_get_prop_auto_play(nativeObj: any): any;
export declare function image_animation_t_get_prop_unload_after_paint(nativeObj: any): any;
export declare function image_animation_t_get_prop_format(nativeObj: any): any;
export declare function image_animation_t_get_prop_interval(nativeObj: any): any;
export declare function image_animation_t_get_prop_delay(nativeObj: any): any;
export declare function guage_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function guage_cast(widget: TWidget): TWidget;
export declare function guage_set_image(widget: TWidget, name: string): TRet;
export declare function guage_set_draw_type(widget: TWidget, draw_type: TImageDrawType): TRet;
export declare function guage_t_get_prop_image(nativeObj: any): any;
export declare function guage_t_get_prop_draw_type(nativeObj: any): any;
export declare function guage_pointer_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function guage_pointer_cast(widget: TWidget): TWidget;
export declare function guage_pointer_set_angle(widget: TWidget, angle: number): TRet;
export declare function guage_pointer_set_image(widget: TWidget, image: string): TRet;
export declare function guage_pointer_set_anchor(widget: TWidget, anchor_x: string, anchor_y: string): TRet;
export declare function guage_pointer_t_get_prop_angle(nativeObj: any): any;
export declare function guage_pointer_t_get_prop_image(nativeObj: any): any;
export declare function guage_pointer_t_get_prop_anchor_x(nativeObj: any): any;
export declare function guage_pointer_t_get_prop_anchor_y(nativeObj: any): any;
export declare function label_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function label_set_length(widget: TWidget, length: number): TRet;
export declare function label_resize_to_content(widget: TWidget, min_w: number, max_w: number, min_h: number, max_h: number): TRet;
export declare function label_cast(widget: TWidget): TWidget;
export declare function label_t_get_prop_length(nativeObj: any): any;
export declare function draggable_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function draggable_cast(widget: TWidget): TWidget;
export declare function draggable_set_top(widget: TWidget, top: number): TRet;
export declare function draggable_set_bottom(widget: TWidget, bottom: number): TRet;
export declare function draggable_set_left(widget: TWidget, left: number): TRet;
export declare function draggable_set_right(widget: TWidget, right: number): TRet;
export declare function draggable_set_vertical_only(widget: TWidget, vertical_only: number): TRet;
export declare function draggable_set_horizontal_only(widget: TWidget, horizontal_only: number): TRet;
export declare function draggable_set_drag_window(widget: TWidget, drag_window: number): TRet;
export declare function draggable_t_get_prop_top(nativeObj: any): any;
export declare function draggable_t_get_prop_bottom(nativeObj: any): any;
export declare function draggable_t_get_prop_left(nativeObj: any): any;
export declare function draggable_t_get_prop_right(nativeObj: any): any;
export declare function draggable_t_get_prop_vertical_only(nativeObj: any): any;
export declare function draggable_t_get_prop_horizontal_only(nativeObj: any): any;
export declare function draggable_t_get_prop_drag_window(nativeObj: any): any;
export declare function group_box_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function group_box_cast(widget: TWidget): TWidget;
export declare function color_picker_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function color_picker_set_color(widget: TWidget, color: string): TRet;
export declare function color_picker_cast(widget: TWidget): TWidget;
export declare function color_picker_t_get_prop_value(nativeObj: any): any;
export declare function canvas_widget_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function canvas_widget_cast(widget: TWidget): TWidget;
export declare function grid_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function grid_cast(widget: TWidget): TWidget;
export declare function grid_item_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function grid_item_cast(widget: TWidget): TWidget;
export declare function window_manager(): TWidget;
export declare function window_manager_cast(widget: TWidget): TWidget;
export declare function window_manager_get_top_main_window(widget: TWidget): TWidget;
export declare function window_manager_get_top_window(widget: TWidget): TWidget;
export declare function window_manager_get_prev_window(widget: TWidget): TWidget;
export declare function window_manager_get_pointer_x(widget: TWidget): number;
export declare function window_manager_get_pointer_y(widget: TWidget): number;
export declare function window_manager_get_pointer_pressed(widget: TWidget): number;
export declare function window_manager_set_show_fps(widget: TWidget, show_fps: number): TRet;
export declare function window_manager_set_screen_saver_time(widget: TWidget, screen_saver_time: number): TRet;
export declare function window_manager_set_cursor(widget: TWidget, cursor: string): TRet;
export declare function window_manager_back(widget: TWidget): TRet;
export declare function window_manager_back_to_home(widget: TWidget): TRet;
export declare function window_base_cast(widget: TWidget): TWidget;
export declare function window_base_t_get_prop_theme(nativeObj: any): any;
export declare function window_base_t_get_prop_closable(nativeObj: any): any;
export declare function edit_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function edit_cast(widget: TWidget): TWidget;
export declare function edit_get_int(widget: TWidget): number;
export declare function edit_get_double(widget: TWidget): number;
export declare function edit_set_int(widget: TWidget, value: number): TRet;
export declare function edit_set_double(widget: TWidget, value: number): TRet;
export declare function edit_set_text_limit(widget: TWidget, min: number, max: number): TRet;
export declare function edit_set_int_limit(widget: TWidget, min: number, max: number, step: number): TRet;
export declare function edit_set_float_limit(widget: TWidget, min: number, max: number, step: number): TRet;
export declare function edit_set_readonly(widget: TWidget, readonly: number): TRet;
export declare function edit_set_auto_fix(widget: TWidget, auto_fix: number): TRet;
export declare function edit_set_select_none_when_focused(widget: TWidget, select_none_when_focused: number): TRet;
export declare function edit_set_open_im_when_focused(widget: TWidget, open_im_when_focused: number): TRet;
export declare function edit_set_input_type(widget: TWidget, type: TInputType): TRet;
export declare function edit_set_input_tips(widget: TWidget, tips: string): TRet;
export declare function edit_set_password_visible(widget: TWidget, password_visible: number): TRet;
export declare function edit_set_focus(widget: TWidget, focus: number): TRet;
export declare function edit_set_cursor(widget: TWidget, cursor: number): TRet;
export declare function edit_t_get_prop_readonly(nativeObj: any): any;
export declare function edit_t_get_prop_password_visible(nativeObj: any): any;
export declare function edit_t_get_prop_auto_fix(nativeObj: any): any;
export declare function edit_t_get_prop_select_none_when_focused(nativeObj: any): any;
export declare function edit_t_get_prop_open_im_when_focused(nativeObj: any): any;
export declare function edit_t_get_prop_tips(nativeObj: any): any;
export declare function edit_t_get_prop_input_type(nativeObj: any): any;
export declare function edit_t_get_prop_min(nativeObj: any): any;
export declare function edit_t_get_prop_max(nativeObj: any): any;
export declare function edit_t_get_prop_step(nativeObj: any): any;
export declare function style_mutable_set_name(s: TStyle, name: string): TRet;
export declare function style_mutable_set_int(s: TStyle, state: string, name: string, val: number): TRet;
export declare function style_mutable_cast(s: TStyle): TStyle;
export declare function style_mutable_create(widget: TWidget, default_style: TStyle): TStyle;
export declare function style_mutable_t_get_prop_name(nativeObj: any): any;
export declare function dragger_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function dragger_cast(widget: TWidget): TWidget;
export declare function dragger_set_range(widget: TWidget, x_min: number, y_min: number, x_max: number, y_max: number): TWidget;
export declare function dragger_t_get_prop_x_min(nativeObj: any): any;
export declare function dragger_t_get_prop_y_min(nativeObj: any): any;
export declare function dragger_t_get_prop_x_max(nativeObj: any): any;
export declare function dragger_t_get_prop_y_max(nativeObj: any): any;
export declare function image_base_set_image(widget: TWidget, name: string): TRet;
export declare function image_base_set_rotation(widget: TWidget, rotation: number): TRet;
export declare function image_base_set_scale(widget: TWidget, scale_x: number, scale_y: number): TRet;
export declare function image_base_set_anchor(widget: TWidget, anchor_x: number, anchor_y: number): TRet;
export declare function image_base_set_selected(widget: TWidget, selected: number): TRet;
export declare function image_base_set_selectable(widget: TWidget, selectable: number): TRet;
export declare function image_base_set_clickable(widget: TWidget, clickable: number): TRet;
export declare function image_base_cast(widget: TWidget): TWidget;
export declare function image_base_t_get_prop_image(nativeObj: any): any;
export declare function image_base_t_get_prop_anchor_x(nativeObj: any): any;
export declare function image_base_t_get_prop_anchor_y(nativeObj: any): any;
export declare function image_base_t_get_prop_scale_x(nativeObj: any): any;
export declare function image_base_t_get_prop_scale_y(nativeObj: any): any;
export declare function image_base_t_get_prop_rotation(nativeObj: any): any;
export declare function image_base_t_get_prop_clickable(nativeObj: any): any;
export declare function image_base_t_get_prop_selectable(nativeObj: any): any;
export declare function image_base_t_get_prop_selected(nativeObj: any): any;
export declare function window_event_cast(event: TEvent): TWindowEvent;
export declare function window_event_t_get_prop_window(nativeObj: any): any;
export declare function paint_event_cast(event: TEvent): TPaintEvent;
export declare function paint_event_t_get_prop_c(nativeObj: any): any;
export declare function key_event_cast(event: TEvent): TKeyEvent;
export declare function key_event_t_get_prop_key(nativeObj: any): any;
export declare function key_event_t_get_prop_alt(nativeObj: any): any;
export declare function key_event_t_get_prop_lalt(nativeObj: any): any;
export declare function key_event_t_get_prop_ralt(nativeObj: any): any;
export declare function key_event_t_get_prop_ctrl(nativeObj: any): any;
export declare function key_event_t_get_prop_lctrl(nativeObj: any): any;
export declare function key_event_t_get_prop_rctrl(nativeObj: any): any;
export declare function key_event_t_get_prop_shift(nativeObj: any): any;
export declare function key_event_t_get_prop_lshift(nativeObj: any): any;
export declare function key_event_t_get_prop_rshift(nativeObj: any): any;
export declare function key_event_t_get_prop_cmd(nativeObj: any): any;
export declare function key_event_t_get_prop_menu(nativeObj: any): any;
export declare function key_event_t_get_prop_capslock(nativeObj: any): any;
export declare function pointer_event_cast(event: TEvent): TPointerEvent;
export declare function pointer_event_t_get_prop_x(nativeObj: any): any;
export declare function pointer_event_t_get_prop_y(nativeObj: any): any;
export declare function pointer_event_t_get_prop_button(nativeObj: any): any;
export declare function pointer_event_t_get_prop_pressed(nativeObj: any): any;
export declare function pointer_event_t_get_prop_alt(nativeObj: any): any;
export declare function pointer_event_t_get_prop_ctrl(nativeObj: any): any;
export declare function pointer_event_t_get_prop_cmd(nativeObj: any): any;
export declare function pointer_event_t_get_prop_menu(nativeObj: any): any;
export declare function pointer_event_t_get_prop_shift(nativeObj: any): any;
export declare function orientation_event_cast(event: TEvent): TOrientationEvent;
export declare function orientation_event_t_get_prop_orientation(nativeObj: any): any;
export declare function wheel_event_cast(event: TEvent): TWheelEvent;
export declare function wheel_event_t_get_prop_dy(nativeObj: any): any;
export declare function wheel_event_t_get_prop_alt(nativeObj: any): any;
export declare function wheel_event_t_get_prop_ctrl(nativeObj: any): any;
export declare function wheel_event_t_get_prop_shift(nativeObj: any): any;
export declare function app_bar_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function app_bar_cast(widget: TWidget): TWidget;
export declare function button_group_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function button_group_cast(widget: TWidget): TWidget;
export declare function button_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function button_cast(widget: TWidget): TWidget;
export declare function button_set_repeat(widget: TWidget, repeat: number): TRet;
export declare function button_set_enable_long_press(widget: TWidget, enable_long_press: number): TRet;
export declare function button_t_get_prop_repeat(nativeObj: any): any;
export declare function button_t_get_prop_enable_long_press(nativeObj: any): any;
export declare function digit_clock_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function digit_clock_cast(widget: TWidget): TWidget;
export declare function digit_clock_set_format(widget: TWidget, format: string): TRet;
export declare function digit_clock_t_get_prop_format(nativeObj: any): any;
export declare function check_button_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function check_button_create_radio(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function check_button_set_value(widget: TWidget, value: number): TRet;
export declare function check_button_cast(widget: TWidget): TWidget;
export declare function check_button_t_get_prop_value(nativeObj: any): any;
export declare function color_tile_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function color_tile_cast(widget: TWidget): TWidget;
export declare function color_tile_set_bg_color(widget: TWidget, color: string): TRet;
export declare function color_tile_t_get_prop_bg_color(nativeObj: any): any;
export declare function color_tile_t_get_prop_border_color(nativeObj: any): any;
export declare function column_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function column_cast(widget: TWidget): TWidget;
export declare function combo_box_item_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function combo_box_item_cast(widget: TWidget): TWidget;
export declare function combo_box_item_set_checked(widget: TWidget, checked: number): TRet;
export declare function combo_box_item_set_value(widget: TWidget, value: number): TRet;
export declare function combo_box_item_t_get_prop_value(nativeObj: any): any;
export declare function combo_box_item_t_get_prop_checked(nativeObj: any): any;
export declare function combo_box_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function combo_box_cast(widget: TWidget): TWidget;
export declare function combo_box_set_open_window(widget: TWidget, open_window: string): TRet;
export declare function combo_box_reset_options(widget: TWidget): TRet;
export declare function combo_box_count_options(widget: TWidget): number;
export declare function combo_box_set_selected_index(widget: TWidget, index: number): TRet;
export declare function combo_box_set_localize_options(widget: TWidget, localize_options: number): TRet;
export declare function combo_box_set_value(widget: TWidget, value: number): TRet;
export declare function combo_box_set_item_height(widget: TWidget, item_height: number): TRet;
export declare function combo_box_append_option(widget: TWidget, value: number, text: string): TRet;
export declare function combo_box_set_options(widget: TWidget, options: string): TRet;
export declare function combo_box_get_value(widget: TWidget): number;
export declare function combo_box_get_text(widget: TWidget): string;
export declare function combo_box_t_get_prop_open_window(nativeObj: any): any;
export declare function combo_box_t_get_prop_selected_index(nativeObj: any): any;
export declare function combo_box_t_get_prop_value(nativeObj: any): any;
export declare function combo_box_t_get_prop_localize_options(nativeObj: any): any;
export declare function combo_box_t_get_prop_options(nativeObj: any): any;
export declare function combo_box_t_get_prop_item_height(nativeObj: any): any;
export declare function dialog_client_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function dialog_client_cast(widget: TWidget): TWidget;
export declare function dialog_title_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function dialog_title_cast(widget: TWidget): TWidget;
export declare function object_default_create(): TObject;
export declare function object_default_unref(obj: TObject): TRet;
export declare function object_default_clear_props(obj: TObject): TRet;
export declare function object_default_t_get_prop_props_size(nativeObj: any): any;
export declare function window_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function window_set_fullscreen(widget: TWidget, fullscreen: number): TRet;
export declare function window_open(name: string): TWidget;
export declare function window_open_and_close(name: string, to_close: TWidget): TWidget;
export declare function window_close(widget: TWidget): TRet;
export declare function window_close_force(widget: TWidget): TRet;
export declare function window_cast(widget: TWidget): TWidget;
export declare function window_t_get_prop_fullscreen(nativeObj: any): any;
export declare function timer_info_cast(timer: TTimerInfo): TTimerInfo;
export declare function timer_info_t_get_prop_ctx(nativeObj: any): any;
export declare function timer_info_t_get_prop_id(nativeObj: any): any;
export declare function timer_info_t_get_prop_now(nativeObj: any): any;
export declare function combo_box_ex_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function image_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function image_set_draw_type(widget: TWidget, draw_type: TImageDrawType): TRet;
export declare function image_cast(widget: TWidget): TWidget;
export declare function image_t_get_prop_draw_type(nativeObj: any): any;
export declare function gif_image_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function gif_image_cast(widget: TWidget): TWidget;
export declare function keyboard_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function keyboard_cast(widget: TWidget): TWidget;
export declare function popup_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function popup_cast(widget: TWidget): TWidget;
export declare function popup_set_close_when_click(widget: TWidget, close_when_click: number): TRet;
export declare function popup_set_close_when_click_outside(widget: TWidget, close_when_click_outside: number): TRet;
export declare function popup_t_get_prop_close_when_click(nativeObj: any): any;
export declare function popup_t_get_prop_close_when_click_outside(nativeObj: any): any;
export declare function object_array_create(): TObject;
export declare function object_array_unref(obj: TObject): TRet;
export declare function object_array_clear_props(obj: TObject): TRet;
export declare function object_array_t_get_prop_props_size(nativeObj: any): any;
export declare function spin_box_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function spin_box_cast(widget: TWidget): TWidget;
export declare function system_bar_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function system_bar_cast(widget: TWidget): TWidget;
export declare function idle_info_cast(idle: TIdleInfo): TIdleInfo;
export declare function idle_info_t_get_prop_ctx(nativeObj: any): any;
export declare function idle_info_t_get_prop_id(nativeObj: any): any;
export declare function svg_image_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function svg_image_set_image(widget: TWidget, name: string): TRet;
export declare function svg_image_cast(widget: TWidget): TWidget;
export declare function dialog_create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function dialog_create_simple(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
export declare function dialog_cast(widget: TWidget): TWidget;
export declare function dialog_get_title(widget: TWidget): TWidget;
export declare function dialog_get_client(widget: TWidget): TWidget;
export declare function dialog_open(name: string): TWidget;
export declare function dialog_set_title(widget: TWidget, title: string): TRet;
export declare function dialog_modal(widget: TWidget): TRet;
export declare function dialog_quit(widget: TWidget, code: number): TRet;
export declare function dialog_is_quited(widget: TWidget): number;
export declare function dialog_is_modal(widget: TWidget): number;
export declare function dialog_toast(text: string, duration: number): TRet;
export declare function dialog_info(title: string, text: string): TRet;
export declare function dialog_warn(title: string, text: string): TRet;
export declare function dialog_confirm(title: string, text: string): TRet;
export declare function dialog_t_get_prop_highlight(nativeObj: any): any;
export declare class TGlobal {
    nativeObj: any;
    constructor(nativeObj: any);
    static quit(): TRet;
    static getPointerX(): number;
    static getPointerY(): number;
    static isPointerPressed(): number;
}
export declare class TBitmap {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TBitmap;
    static createEx(w: number, h: number, line_length: number, format: TBitmapFormat): TBitmap;
    getBpp(): number;
    destroy(): TRet;
    get w(): number;
    get h(): number;
    get lineLength(): number;
    get flags(): number;
    get format(): number;
    get name(): string;
}
export declare enum TImageDrawType {
    DEFAULT,
    CENTER,
    ICON,
    SCALE,
    SCALE_AUTO,
    SCALE_DOWN,
    SCALE_W,
    SCALE_H,
    REPEAT,
    REPEAT_X,
    REPEAT_Y,
    REPEAT_Y_INVERSE,
    PATCH9,
    PATCH3_X,
    PATCH3_Y,
    PATCH3_X_SCALE_Y,
    PATCH3_Y_SCALE_X
}
export declare class TCanvas {
    nativeObj: any;
    constructor(nativeObj: any);
    getWidth(): number;
    getHeight(): number;
    getClipRect(r: TRect): TRet;
    setClipRect(r: TRect): TRet;
    setClipRectEx(r: TRect, translate: number): TRet;
    setFillColor(color: string): TRet;
    setTextColor(color: string): TRet;
    setStrokeColor(color: string): TRet;
    setGlobalAlpha(alpha: number): TRet;
    translate(dx: number, dy: number): TRet;
    untranslate(dx: number, dy: number): TRet;
    drawVline(x: number, y: number, h: number): TRet;
    drawHline(x: number, y: number, w: number): TRet;
    fillRect(x: number, y: number, w: number, h: number): TRet;
    strokeRect(x: number, y: number, w: number, h: number): TRet;
    setFont(name: string, size: number): TRet;
    measureText(str: string): number;
    drawText(str: string, x: number, y: number): TRet;
    drawTextInRect(str: string, r: TRect): TRet;
    drawIcon(img: TBitmap, cx: number, cy: number): TRet;
    drawImage(img: TBitmap, src: TRect, dst: TRect): TRet;
    drawImageEx(img: TBitmap, draw_type: TImageDrawType, dst: TRect): TRet;
    getVgcanvas(): TVgcanvas;
    static cast(c: TCanvas): TCanvas;
    reset(): TRet;
    get ox(): number;
    get oy(): number;
    get fontName(): string;
    get fontSize(): number;
    get globalAlpha(): number;
}
export declare enum TClipBoardDataType {
    NONE,
    TEXT
}
export declare class TClipBoard {
    nativeObj: any;
    constructor(nativeObj: any);
    static setText(text: string): TRet;
    static getText(): string;
}
export declare enum TDialogQuitCode {
    NONE,
    OK,
    YES,
    CANCEL,
    NO,
    OTHER
}
export declare enum TEventType {
    POINTER_DOWN,
    POINTER_DOWN_BEFORE_CHILDREN,
    POINTER_MOVE,
    POINTER_MOVE_BEFORE_CHILDREN,
    POINTER_UP,
    POINTER_UP_BEFORE_CHILDREN,
    WHEEL,
    WHEEL_BEFORE_CHILDREN,
    POINTER_DOWN_ABORT,
    CONTEXT_MENU,
    POINTER_ENTER,
    POINTER_LEAVE,
    LONG_PRESS,
    CLICK,
    FOCUS,
    BLUR,
    KEY_DOWN,
    KEY_DOWN_BEFORE_CHILDREN,
    KEY_REPEAT,
    KEY_UP,
    KEY_UP_BEFORE_CHILDREN,
    WILL_MOVE,
    MOVE,
    WILL_RESIZE,
    RESIZE,
    WILL_MOVE_RESIZE,
    MOVE_RESIZE,
    VALUE_WILL_CHANGE,
    VALUE_CHANGED,
    VALUE_CHANGING,
    PAINT,
    BEFORE_PAINT,
    AFTER_PAINT,
    PAINT_DONE,
    LOCALE_CHANGED,
    ANIM_START,
    ANIM_STOP,
    ANIM_PAUSE,
    ANIM_ONCE,
    ANIM_END,
    WINDOW_LOAD,
    WINDOW_WILL_OPEN,
    WINDOW_OPEN,
    WINDOW_TO_BACKGROUND,
    WINDOW_TO_FOREGROUND,
    WINDOW_CLOSE,
    REQUEST_CLOSE_WINDOW,
    TOP_WINDOW_CHANGED,
    IM_COMMIT,
    IM_SHOW_CANDIDATES,
    IM_ACTION,
    IM_ACTION_INFO,
    DRAG_START,
    DRAG,
    DRAG_END,
    SCREEN_SAVER,
    LOW_MEMORY,
    OUT_OF_MEMORY,
    ORIENTATION_WILL_CHANGED,
    ORIENTATION_CHANGED,
    WIDGET_CREATED,
    REQUEST_QUIT_APP,
    THEME_CHANGED,
    REQ_START,
    USER_START
}
export declare class TFontManager {
    nativeObj: any;
    constructor(nativeObj: any);
    unloadFont(name: string, size: number): TRet;
    unloadAll(): TRet;
}
export declare enum TGlyphFormat {
    ALPHA,
    MONO,
    RGBA
}
export declare class TIdle {
    nativeObj: any;
    constructor(nativeObj: any);
    static add(on_idle: Function, ctx: any): number;
    static remove(idle_id: number): TRet;
}
export declare class TValue {
    nativeObj: any;
    constructor(nativeObj: any);
    setBool(value: number): TValue;
    bool(): number;
    setInt8(value: number): TValue;
    int8(): number;
    setUint8(value: number): TValue;
    uint8(): number;
    setInt16(value: number): TValue;
    int16(): number;
    setUint16(value: number): TValue;
    uint16(): number;
    setInt32(value: number): TValue;
    int32(): number;
    setUint32(value: number): TValue;
    setInt64(value: number): TValue;
    int64(): number;
    setUint64(value: number): TValue;
    uint64(): number;
    setFloat(value: number): TValue;
    float32(): number;
    setFloat64(value: number): TValue;
    float64(): number;
    setStr(value: string): TValue;
    str(): string;
    isNull(): number;
    setInt(value: number): TValue;
    setObject(value: TObject): TValue;
    object(): TObject;
    setToken(value: number): TValue;
    token(): number;
    static create(): TValue;
    destroy(): TRet;
    reset(): TRet;
    static cast(value: TValue): TValue;
}
export declare class TImageManager {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TImageManager;
    getBitmap(name: string, image: TBitmap): TRet;
}
export declare enum TInputType {
    TEXT,
    INT,
    UINT,
    HEX,
    FLOAT,
    UFLOAT,
    EMAIL,
    PASSWORD,
    PHONE,
    CUSTOM
}
export declare enum TValueType {
    INVALID,
    BOOL,
    INT8,
    UINT8,
    INT16,
    UINT16,
    INT32,
    UINT32,
    INT64,
    UINT64,
    POINTER,
    FLOAT,
    FLOAT32,
    DOUBLE,
    STRING,
    WSTRING,
    OBJECT,
    SIZED_STRING,
    BINARY,
    UBJSON,
    TOKEN
}
export declare class TInputMethod {
    nativeObj: any;
    constructor(nativeObj: any);
    commitText(text: string): TRet;
    dispatchKey(key: number): TRet;
    static instance(): TInputMethod;
}
export declare enum TKeyCode {
    KEY_RETURN,
    KEY_ESCAPE,
    KEY_BACKSPACE,
    KEY_TAB,
    KEY_SPACE,
    KEY_EXCLAIM,
    KEY_QUOTEDBL,
    KEY_HASH,
    KEY_PERCENT,
    KEY_DOLLAR,
    KEY_AMPERSAND,
    KEY_QUOTE,
    KEY_LEFTPAREN,
    KEY_RIGHTPAREN,
    KEY_ASTERISK,
    KEY_PLUS,
    KEY_COMMA,
    KEY_MINUS,
    KEY_PERIOD,
    KEY_SLASH,
    KEY_0,
    KEY_1,
    KEY_2,
    KEY_3,
    KEY_4,
    KEY_5,
    KEY_6,
    KEY_7,
    KEY_8,
    KEY_9,
    KEY_COLON,
    KEY_SEMICOLON,
    KEY_LESS,
    KEY_EQUAL,
    KEY_GREATER,
    KEY_QUESTION,
    KEY_AT,
    KEY_LEFTBRACKET,
    KEY_BACKSLASH,
    KEY_RIGHTBRACKET,
    KEY_CARET,
    KEY_UNDERSCORE,
    KEY_BACKQUOTE,
    KEY_a,
    KEY_b,
    KEY_c,
    KEY_d,
    KEY_e,
    KEY_f,
    KEY_g,
    KEY_h,
    KEY_i,
    KEY_j,
    KEY_k,
    KEY_l,
    KEY_m,
    KEY_n,
    KEY_o,
    KEY_p,
    KEY_q,
    KEY_r,
    KEY_s,
    KEY_t,
    KEY_u,
    KEY_v,
    KEY_w,
    KEY_x,
    KEY_y,
    KEY_z,
    KEY_A,
    KEY_B,
    KEY_C,
    KEY_D,
    KEY_E,
    KEY_F,
    KEY_G,
    KEY_H,
    KEY_I,
    KEY_J,
    KEY_K,
    KEY_L,
    KEY_M,
    KEY_N,
    KEY_O,
    KEY_P,
    KEY_Q,
    KEY_R,
    KEY_S,
    KEY_T,
    KEY_U,
    KEY_V,
    KEY_W,
    KEY_X,
    KEY_Y,
    KEY_Z,
    KEY_DOT,
    KEY_DELETE,
    KEY_LEFTBRACE,
    KEY_RIGHTBRACE,
    KEY_LSHIFT,
    KEY_RSHIFT,
    KEY_LCTRL,
    KEY_RCTRL,
    KEY_LALT,
    KEY_RALT,
    KEY_CAPSLOCK,
    KEY_HOME,
    KEY_END,
    KEY_INSERT,
    KEY_UP,
    KEY_DOWN,
    KEY_LEFT,
    KEY_RIGHT,
    KEY_PAGEUP,
    KEY_PAGEDOWN,
    KEY_F1,
    KEY_F2,
    KEY_F3,
    KEY_F4,
    KEY_F5,
    KEY_F6,
    KEY_F7,
    KEY_F8,
    KEY_F9,
    KEY_F10,
    KEY_F11,
    KEY_F12,
    KEY_MENU,
    KEY_COMMAND,
    KEY_BACK,
    KEY_CANCEL
}
export declare class TLocaleInfo {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TLocaleInfo;
    tr(text: string): string;
    change(language: string, country: string): TRet;
    on(type: TEventType, on_event: Function, ctx: any): number;
    off(id: number): TRet;
}
export declare enum TStyleId {
    _ID_BG_COLOR,
    _ID_FG_COLOR,
    _ID_MASK_COLOR,
    _ID_FONT_NAME,
    _ID_FONT_SIZE,
    _ID_FONT_STYLE,
    _ID_TEXT_COLOR,
    _ID_TIPS_TEXT_COLOR,
    _ID_TEXT_ALIGN_H,
    _ID_TEXT_ALIGN_V,
    _ID_BORDER_COLOR,
    _ID_BORDER_WIDTH,
    _ID_BORDER,
    _ID_BG_IMAGE,
    _ID_BG_IMAGE_DRAW_TYPE,
    _ID_ICON,
    _ID_FG_IMAGE,
    _ID_FG_IMAGE_DRAW_TYPE,
    _ID_SPACER,
    _ID_MARGIN,
    _ID_MARGIN_LEFT,
    _ID_MARGIN_RIGHT,
    _ID_MARGIN_TOP,
    _ID_MARGIN_BOTTOM,
    _ID_ICON_AT,
    _ID_ACTIVE_ICON,
    _ID_X_OFFSET,
    _ID_Y_OFFSET,
    _ID_SELECTED_BG_COLOR,
    _ID_SELECTED_FG_COLOR,
    _ID_SELECTED_TEXT_COLOR,
    _ID_ROUND_RADIUS
}
export declare class TStyle {
    nativeObj: any;
    constructor(nativeObj: any);
    notifyWidgetStateChanged(widget: TWidget): TRet;
    isValid(): number;
    getInt(name: string, defval: number): number;
    getStr(name: string, defval: string): string;
    set(state: string, name: string, value: TValue): TRet;
    isMutable(): number;
}
export declare class TTheme {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TTheme;
}
export declare class TTimer {
    nativeObj: any;
    constructor(nativeObj: any);
    static add(on_timer: Function, ctx: any, duration: number): number;
    static remove(timer_id: number): TRet;
    static reset(timer_id: number): TRet;
    static modify(timer_id: number, duration: number): TRet;
}
export declare enum TAlignV {
    NONE,
    MIDDLE,
    TOP,
    BOTTOM
}
export declare enum TAlignH {
    NONE,
    CENTER,
    LEFT,
    RIGHT
}
export declare enum TBitmapFormat {
    NONE,
    RGBA8888,
    ABGR8888,
    BGRA8888,
    ARGB8888,
    RGB565,
    BGR565,
    RGB888,
    BGR888,
    GRAY,
    MONO
}
export declare enum TBitmapFlag {
    NONE,
    OPAQUE,
    IMMUTABLE,
    TEXTURE,
    CHANGED,
    PREMULTI_ALPHA
}
export declare class TVgcanvas {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(vg: TVgcanvas): TVgcanvas;
    flush(): TRet;
    beginPath(): TRet;
    moveTo(x: number, y: number): TRet;
    lineTo(x: number, y: number): TRet;
    quadTo(cpx: number, cpy: number, x: number, y: number): TRet;
    bezierTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): TRet;
    arcTo(x1: number, y1: number, x2: number, y2: number, r: number): TRet;
    arc(x: number, y: number, r: number, start_angle: number, end_angle: number, ccw: number): TRet;
    isPointInPath(x: number, y: number): number;
    rect(x: number, y: number, w: number, h: number): TRet;
    roundedRect(x: number, y: number, w: number, h: number, r: number): TRet;
    ellipse(x: number, y: number, rx: number, ry: number): TRet;
    closePath(): TRet;
    rotate(rad: number): TRet;
    scale(x: number, y: number): TRet;
    translate(x: number, y: number): TRet;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): TRet;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): TRet;
    clipRect(x: number, y: number, w: number, h: number): TRet;
    fill(): TRet;
    stroke(): TRet;
    paint(stroke: number, img: TBitmap): TRet;
    setFont(font: string): TRet;
    setFontSize(font: number): TRet;
    setTextAlign(value: string): TRet;
    setTextBaseline(value: string): TRet;
    fillText(text: string, x: number, y: number, max_width: number): TRet;
    measureText(text: string): number;
    drawImage(img: TBitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): TRet;
    drawIcon(img: TBitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): TRet;
    setAntialias(value: number): TRet;
    setGlobalAlpha(alpha: number): TRet;
    setLineWidth(value: number): TRet;
    setFillColor(color: string): TRet;
    setStrokeColor(color: string): TRet;
    setLineCap(value: string): TRet;
    setLineJoin(value: string): TRet;
    setMiterLimit(value: number): TRet;
    save(): TRet;
    restore(): TRet;
    get w(): number;
    get h(): number;
    get ratio(): number;
    get antiAlias(): number;
    get lineWidth(): number;
    get globalAlpha(): number;
    get miterLimit(): number;
    get lineCap(): string;
    get lineJoin(): string;
    get font(): string;
    get fontSize(): number;
    get textAlign(): string;
    get textBaseline(): string;
}
export declare enum TWidgetProp {
    EXEC,
    X,
    Y,
    W,
    H,
    CANVAS,
    LOCALIZE_OPTIONS,
    NATIVE_WINDOW,
    HIGHLIGHT,
    BAR_SIZE,
    OPACITY,
    MIN_W,
    MAX_W,
    CHILDREN_LAYOUT,
    LAYOUT,
    SELF_LAYOUT,
    LAYOUT_W,
    LAYOUT_H,
    VIRTUAL_W,
    VIRTUAL_H,
    NAME,
    TYPE,
    CLOSABLE,
    CURSOR,
    VALUE,
    LENGTH,
    TEXT,
    TR_TEXT,
    STYLE,
    ENABLE,
    FEEDBACK,
    FLOATING,
    MARGIN,
    SPACING,
    LEFT_MARGIN,
    RIGHT_MARGIN,
    TOP_MARGIN,
    BOTTOM_MARGIN,
    STEP,
    VISIBLE,
    SENSITIVE,
    ANIMATION,
    ANIM_HINT,
    FULLSCREEN,
    OPEN_ANIM_HINT,
    CLOSE_ANIM_HINT,
    MIN,
    TIPS,
    INPUT_TYPE,
    READONLY,
    PASSWORD_VISIBLE,
    ACTIVE,
    VERTICAL,
    SHOW_TEXT,
    XOFFSET,
    YOFFSET,
    ALIGN_V,
    ALIGN_H,
    AUTO_PLAY,
    LOOP,
    AUTO_FIX,
    SELECT_NONE_WHEN_FOCUSED,
    OPEN_IM_WHEN_FOCUSED,
    X_MIN,
    X_MAX,
    Y_MIN,
    Y_MAX,
    MAX,
    GRAB_KEYS,
    ROW,
    STATE_FOR_STYLE,
    THEME,
    STAGE,
    IMAGE_MANAGER,
    ASSETS_MANAGER,
    LOCALE_INFO,
    FONT_MANAGER,
    THEME_OBJ,
    DEFAULT_THEME_OBJ,
    ITEM_WIDTH,
    ITEM_HEIGHT,
    DEFAULT_ITEM_HEIGHT,
    XSLIDABLE,
    YSLIDABLE,
    REPEAT,
    ENABLE_LONG_PRESS,
    ANIMATABLE,
    AUTO_HIDE_SCROLL_BAR,
    IMAGE,
    FORMAT,
    DRAW_TYPE,
    SELECTABLE,
    CLICKABLE,
    SCALE_X,
    SCALE_Y,
    ANCHOR_X,
    ANCHOR_Y,
    ROTATION,
    COMPACT,
    SCROLLABLE,
    ICON,
    OPTIONS,
    SELECTED,
    CHECKED,
    ACTIVE_ICON,
    OPEN_WINDOW,
    SELECTED_INDEX,
    CLOSE_WHEN_CLICK,
    CLOSE_WHEN_CLICK_OUTSIDE,
    LINE_GAP,
    BG_COLOR,
    BORDER_COLOR,
    DELAY,
    IS_KEYBOARD,
    FOCUSED,
    FOCUS,
    FOCUSABLE,
    WITH_FOCUS_STATE,
    MOVE_FOCUS_PREV_KEY,
    MOVE_FOCUS_NEXT_KEY,
    MOVE_FOCUS_UP_KEY,
    MOVE_FOCUS_DOWN_KEY,
    MOVE_FOCUS_LEFT_KEY,
    MOVE_FOCUS_RIGHT_KEY
}
export declare enum TWidgetType {
    NONE,
    WINDOW_MANAGER,
    NORMAL_WINDOW,
    OVERLAY,
    TOOL_BAR,
    DIALOG,
    POPUP,
    SYSTEM_BAR,
    SYSTEM_BAR_BOTTOM,
    SPRITE,
    KEYBOARD,
    DND,
    LABEL,
    BUTTON,
    IMAGE,
    EDIT,
    PROGRESS_BAR,
    GROUP_BOX,
    CHECK_BUTTON,
    RADIO_BUTTON,
    DIALOG_TITLE,
    DIALOG_CLIENT,
    SLIDER,
    VIEW,
    COMBO_BOX,
    COMBO_BOX_ITEM,
    SLIDE_VIEW,
    SLIDE_INDICATOR,
    SLIDE_INDICATOR_ARC,
    PAGES,
    TAB_BUTTON,
    TAB_CONTROL,
    TAB_BUTTON_GROUP,
    BUTTON_GROUP,
    CANDIDATES,
    SPIN_BOX,
    DRAGGER,
    SCROLL_BAR,
    SCROLL_BAR_DESKTOP,
    SCROLL_BAR_MOBILE,
    SCROLL_VIEW,
    LIST_VIEW,
    LIST_VIEW_H,
    LIST_ITEM,
    COLOR_PICKER,
    COLOR_COMPONENT,
    COLOR_TILE,
    RICH_TEXT,
    APP_BAR,
    GRID,
    GRID_ITEM,
    ROW,
    COLUMN,
    CALIBRATION_WIN
}
export declare enum TWindowStage {
    NONE,
    CREATED,
    OPENED,
    CLOSED
}
export declare enum TWindowClosable {
    YES,
    NO,
    CONFIRM
}
export declare enum TWidgetState {
    STATE_NONE,
    STATE_NORMAL,
    STATE_PRESSED,
    STATE_OVER,
    STATE_DISABLE,
    STATE_FOCUSED,
    STATE_CHECKED,
    STATE_UNCHECKED,
    STATE_EMPTY,
    STATE_EMPTY_FOCUS,
    STATE_ERROR,
    STATE_SELECTED,
    STATE_NORMAL_OF_CHECKED,
    STATE_PRESSED_OF_CHECKED,
    STATE_OVER_OF_CHECKED,
    STATE_FOCUSED_OF_CHECKED,
    STATE_NORMAL_OF_ACTIVE,
    STATE_PRESSED_OF_ACTIVE,
    STATE_OVER_OF_ACTIVE,
    STATE_FOCUSED_OF_ACTIVE
}
export declare class TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    // todo 需要添加进 awtk.ts
    addWidgetChild(child:TWidget):TRet;
    countChildren(): number;
    getChild(index: number): TWidget;
    indexOf(): number;
    move(x: number, y: number): TRet;
    resize(w: number, h: number): TRet;
    moveResize(x: number, y: number, w: number, h: number): TRet;
    setValue(value: number): TRet;
    animateValueTo(value: number, duration: number): TRet;
    addValue(delta: number): TRet;
    useStyle(style: string): TRet;
    setText(text: string): TRet;
    setTrText(text: string): TRet;
    getValue(): number;
    getText(): any;
    setName(name: string): TRet;
    setTheme(name: string): TRet;
    setPointerCursor(cursor: string): TRet;
    setAnimation(animation: string): TRet;
    createAnimator(animation: string): TRet;
    startAnimator(name: string): TRet;
    setAnimatorTimeScale(name: string, time_scale: number): TRet;
    pauseAnimator(name: string): TRet;
    stopAnimator(name: string): TRet;
    destroyAnimator(name: string): TRet;
    setEnable(enable: number): TRet;
    setFeedback(feedback: number): TRet;
    setFloating(floating: number): TRet;
    setFocused(focused: number): TRet;
    child(name: string): TWidget;
    lookup(name: string, recursive: number): TWidget;
    lookupByType(type: string, recursive: number): TWidget;
    setVisible(visible: number, recursive: number): TRet;
    setVisibleOnly(visible: number): TRet;
    setSensitive(sensitive: number): TRet;
    on(type: number, on_event: Function, ctx: any): number;
    onWithTag(type: number, on_event: Function, ctx: any, tag: number): number;
    off(id: number): TRet;
    invalidateForce(r: TRect): TRet;
    setPropStr(name: string, v: string): TRet;
    getPropStr(name: string, defval: string): string;
    setPropInt(name: string, v: number): TRet;
    getPropInt(name: string, defval: number): number;
    setPropBool(name: string, v: number): TRet;
    getPropBool(name: string, defval: number): number;
    isWindowOpened(): number;
    isWindow(): number;
    isDesigningWindow(): number;
    isWindowManager(): number;
    foreach(visit: Function, ctx: any): TRet;
    getWindow(): TWidget;
    getWindowManager(): TWidget;
    getType(): string;
    clone(parent: TWidget): TWidget;
    equal(other: TWidget): number;
    static cast(widget: TWidget): TWidget;
    destroy(): TRet;
    unref(): TRet;
    layout(): TRet;
    setSelfLayout(params: string): TRet;
    setChildrenLayout(params: string): TRet;
    setSelfLayoutParams(x: string, y: string, w: string, h: string): TRet;
    setStyleInt(state_and_name: string, value: number): TRet;
    setStyleStr(state_and_name: string, value: string): TRet;
    setStyleColor(state_and_name: string, value: number): TRet;
    get x(): number;
    get y(): number;
    get w(): number;
    get h(): number;
    get name(): string;
    get trText(): string;
    get style(): string;
    get animation(): string;
    get enable(): number;
    get feedback(): number;
    set visible(value: number);
    get visible(): number;
    set sensitive(value: number);
    get sensitive(): number;
    set focusable(value: number);
    get focusable(): number;
    set withFocusState(value: number);
    get withFocusState(): number;
    get floating(): number;
}
export declare enum TRet {
    OK,
    OOM,
    FAIL,
    NOT_IMPL,
    QUIT,
    FOUND,
    BUSY,
    REMOVE,
    REPEAT,
    NOT_FOUND,
    DONE,
    STOP,
    SKIP,
    CONTINUE,
    OBJECT_CHANGED,
    ITEMS_CHANGED,
    BAD_PARAMS,
    TIMEOUT,
    CRC,
    IO,
    EOS
}
export declare class TTimerManager {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TTimeNow {
    nativeObj: any;
    constructor(nativeObj: any);
    static s(): number;
    static ms(): number;
}
export declare class TRect {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(x: number, y: number, w: number, h: number): TRect;
    set(x: number, y: number, w: number, h: number): TRect;
    static cast(rect: TRect): TRect;
    destroy(): TRet;
    get x(): number;
    get y(): number;
    get w(): number;
    get h(): number;
}
export declare class TPointf {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TPoint {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TPath {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TNamedValue {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TNamedValue;
    static cast(nv: TNamedValue): TNamedValue;
    setName(name: string): TRet;
    setValue(value: TValue): TRet;
    getValue(): TValue;
    destroy(): TRet;
    get name(): string;
}
export declare enum TMIME_TYPE {
    APPLICATION_ENVOY,
    APPLICATION_FRACTALS,
    APPLICATION_FUTURESPLASH,
    APPLICATION_HTA,
    APPLICATION_JSON,
    APPLICATION_UBJSON,
    APPLICATION_MAC_BINHEX40,
    APPLICATION_MSWORD,
    APPLICATION_OCTET_STREAM,
    APPLICATION_ODA,
    APPLICATION_OLESCRIPT,
    APPLICATION_PDF,
    APPLICATION_PICS_RULES,
    APPLICATION_PKCS10,
    APPLICATION_PKIX_CRL,
    APPLICATION_POSTSCRIPT,
    APPLICATION_RTF,
    APPLICATION_VND_MS_EXCEL,
    APPLICATION_VND_MS_OUTLOOK,
    APPLICATION_VND_MS_PKICERTSTORE,
    APPLICATION_VND_MS_PKISECCAT,
    APPLICATION_VND_MS_PKISTL,
    APPLICATION_VND_MS_POWERPOINT,
    APPLICATION_VND_MS_PROJECT,
    APPLICATION_VND_MS_WORKS,
    APPLICATION_WINHLP,
    APPLICATION_X_BCPIO,
    APPLICATION_X_CDF,
    APPLICATION_X_COMPRESS,
    APPLICATION_X_COMPRESSED,
    APPLICATION_X_CPIO,
    APPLICATION_X_CSH,
    APPLICATION_X_DIRECTOR,
    APPLICATION_X_DVI,
    APPLICATION_X_GTAR,
    APPLICATION_X_GZIP,
    APPLICATION_X_HDF,
    APPLICATION_X_IPHONE,
    APPLICATION_X_JAVASCRIPT,
    APPLICATION_X_LATEX,
    APPLICATION_X_MSACCESS,
    APPLICATION_X_MSCARDFILE,
    APPLICATION_X_MSCLIP,
    APPLICATION_X_MSDOWNLOAD,
    APPLICATION_X_MSMEDIAVIEW,
    APPLICATION_X_MSMETAFILE,
    APPLICATION_X_MSMONEY,
    APPLICATION_X_MSPUBLISHER,
    APPLICATION_X_MSSCHEDULE,
    APPLICATION_X_MSTERMINAL,
    APPLICATION_X_MSWRITE,
    APPLICATION_X_NETCDF,
    APPLICATION_X_PERFMON,
    APPLICATION_X_PKCS12,
    APPLICATION_X_SH,
    APPLICATION_X_SHAR,
    APPLICATION_X_SHOCKWAVE_FLASH,
    APPLICATION_X_STUFFIT,
    APPLICATION_X_SV4CPIO,
    APPLICATION_X_SV4CRC,
    APPLICATION_X_TAR,
    APPLICATION_X_TCL,
    APPLICATION_X_TEX,
    APPLICATION_X_TEXINFO,
    APPLICATION_X_TROFF,
    APPLICATION_X_USTAR,
    APPLICATION_ZIP,
    AUDIO_BASIC,
    AUDIO_MID,
    AUDIO_MPEG,
    AUDIO_X_AIFF,
    AUDIO_X_MPEGURL,
    AUDIO_X_WAV,
    IMAGE_BMP,
    IMAGE_CIS_COD,
    IMAGE_GIF,
    IMAGE_IEF,
    IMAGE_JPEG,
    IMAGE_PIPEG,
    IMAGE_SVG_XML,
    IMAGE_TIFF,
    IMAGE_X_CMX,
    IMAGE_X_ICON,
    IMAGE_X_RGB,
    IMAGE_X_XBITMAP,
    IMAGE_X_XPIXMAP,
    IMAGE_X_XWINDOWDUMP,
    MESSAGE_RFC822,
    TEXT_CSS,
    TEXT_H323,
    TEXT_HTML,
    TEXT_IULS,
    TEXT_PLAIN,
    TEXT_RICHTEXT,
    TEXT_SCRIPTLET,
    TEXT_WEBVIEWHTML,
    TEXT_X_COMPONENT,
    TEXT_X_SETEXT,
    TEXT_X_VCARD,
    VIDEO_MPEG,
    VIDEO_QUICKTIME,
    VIDEO_X_MSVIDEO
}
export declare class TIdleManager {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare enum TIndicatorDefaultPaint {
    AUTO,
    FILL_DOT,
    STROKE_DOT,
    FILL_RECT,
    STROKE_RECT
}
export declare class TFsFile {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TEvent;
    static create(type: number): TEvent;
    destroy(): TRet;
    get type(): number;
    get time(): number;
    get target(): any;
}
export declare enum TEventBaseType {
    NONE,
    PROP_WILL_CHANGE,
    PROP_CHANGED,
    ITEMS_WILL_CHANGE,
    ITEMS_CHANGED,
    PROPS_CHANGED,
    PROGRESS,
    DESTROY
}
export declare class TEmitter {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TEmitter;
    dispatch(e: TEvent): TRet;
    dispatchSimpleEvent(type: number): TRet;
    on(type: number, on_event: Function, ctx: any): number;
    onWithTag(type: number, on_event: Function, ctx: any, tag: number): number;
    off(id: number): TRet;
    enable(): TRet;
    disable(): TRet;
    size(): number;
    destroy(): TRet;
    static cast(emitter: TEmitter): TEmitter;
}
export declare enum TEasingType {
    LINEAR,
    QUADRATIC_IN,
    QUADRATIC_OUT,
    QUADRATIC_INOUT,
    CUBIC_IN,
    CUBIC_OUT,
    SIN_IN,
    SIN_OUT,
    SIN_INOUT,
    POW_IN,
    POW_OUT,
    POW_INOUT,
    CIRCULAR_IN,
    CIRCULAR_OUT,
    CIRCULAR_INOUT,
    ELASTIC_IN,
    ELASTIC_OUT,
    ELASTIC_INOUT,
    BACK_IN,
    BACK_OUT,
    BACK_INOUT,
    BOUNCE_IN,
    BOUNCE_OUT,
    BOUNCE_INOUT
}
export declare class TDateTime {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TDateTime;
    set(): TRet;
    destroy(): TRet;
    get second(): number;
    get minute(): number;
    get hour(): number;
    get day(): number;
    get wday(): number;
    get month(): number;
    get year(): number;
}
export declare class TColor {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(r: number, b: number, g: number, a: number): TColor;
    fromStr(str: string): TColor;
    r(): number;
    g(): number;
    b(): number;
    a(): number;
    static cast(color: TColor): TColor;
    destroy(): TRet;
    set color(value: number);
    get color(): number;
}
export declare class TAssetInfo {
    nativeObj: any;
    constructor(nativeObj: any);
    get type(): number;
    get subtype(): number;
    get isInRom(): number;
    get size(): number;
    get refcount(): number;
    get name(): string;
}
export declare enum TAssetType {
    NONE,
    FONT,
    IMAGE,
    STYLE,
    UI,
    XML,
    STRINGS,
    SCRIPT,
    DATA
}
export declare class TAssetsManager {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TAssetsManager;
    ref(type: TAssetType, name: string): TAssetInfo;
    unref(info: TAssetInfo): TRet;
}
export declare class TColorComponent extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(widget: TWidget): TWidget;
}
export declare class TTimeClock extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setHour(hour: number): TRet;
    setMinute(minute: number): TRet;
    setSecond(second: number): TRet;
    setHourImage(hour: string): TRet;
    setMinuteImage(minute_image: string): TRet;
    setSecondImage(second_image: string): TRet;
    setBgImage(bg_image: string): TRet;
    setImage(image: string): TRet;
    setHourAnchor(anchor_x: string, anchor_y: string): TRet;
    setMinuteAnchor(anchor_x: string, anchor_y: string): TRet;
    setSecondAnchor(anchor_x: string, anchor_y: string): TRet;
    get hour(): number;
    get minute(): number;
    get second(): number;
    get image(): string;
    get bgImage(): string;
    get hourImage(): string;
    get minuteImage(): string;
    get secondImage(): string;
    get hourAnchorX(): string;
    get hourAnchorY(): string;
    get minuteAnchorX(): string;
    get minuteAnchorY(): string;
    get secondAnchorX(): string;
    get secondAnchorY(): string;
}
export declare class TTextSelector extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    resetOptions(): TRet;
    countOptions(): number;
    appendOption(value: number, text: string): TRet;
    setOptions(options: string): TRet;
    setRangeOptions(start: number, nr: number, step: number): TRet;
    getValue(): number;
    setValue(value: number): TRet;
    getTextValue(): string;
    setText(text: string): TRet;
    setSelectedIndex(index: number): TRet;
    setVisibleNr(visible_nr: number): TRet;
    get visibleNr(): number;
    get selectedIndex(): number;
    get options(): string;
}
export declare class TSwitch extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setValue(value: number): TRet;
    static cast(widget: TWidget): TWidget;
    get value(): number;
    get maxXoffsetRatio(): number;
}
export declare class TPropChangeEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TPropChangeEvent;
    get name(): string;
    get value(): TValue;
}
export declare class TProgressEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TProgressEvent;
    get percent(): number;
}
export declare class TView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TSlideView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setAutoPlay(auto_play: number): TRet;
    setActive(index: number): TRet;
    setVertical(vertical: number): TRet;
    setAnimHint(anim_hint: string): TRet;
    setLoop(loop: number): TRet;
    get vertical(): number;
    get autoPlay(): number;
    get loop(): number;
    get animHint(): string;
}
export declare class TSlideIndicator extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static createLinear(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static createArc(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setValue(value: number): TRet;
    setMax(max: number): TRet;
    setDefaultPaint(default_paint: TIndicatorDefaultPaint): TRet;
    setAutoHide(auto_hide: number): TRet;
    setMargin(margin: number): TRet;
    setSpacing(spacing: number): TRet;
    setSize(size: number): TRet;
    setAnchor(anchor_x: string, anchor_y: string): TRet;
    setIndicatedTarget(indicated_target: string): TRet;
    get value(): number;
    get max(): number;
    get defaultPaint(): TIndicatorDefaultPaint;
    get autoHide(): number;
    get margin(): number;
    get spacing(): number;
    get size(): number;
    get anchorX(): number;
    get anchorY(): number;
    get indicatedTarget(): string;
}
export declare class TSlideMenu extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setValue(value: number): TRet;
    setAlignV(align_v: TAlignV): TRet;
    setMinScale(min_scale: number): TRet;
    get value(): number;
    get alignV(): TAlignV;
    get minScale(): number;
}
export declare class TScrollView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setVirtualW(w: number): TRet;
    setVirtualH(h: number): TRet;
    setXslidable(xslidable: number): TRet;
    setYslidable(yslidable: number): TRet;
    setOffset(xoffset: number, yoffset: number): TRet;
    scrollTo(xoffset_end: number, yoffset_end: number, duration: number): TRet;
    scrollDeltaTo(xoffset_delta: number, yoffset_delta: number, duration: number): TRet;
    get virtualW(): number;
    get virtualH(): number;
    get xoffset(): number;
    get yoffset(): number;
    get xslidable(): number;
    get yslidable(): number;
}
export declare class TScrollBar extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    static createMobile(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static createDesktop(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setParams(virtual_size: number, row: number): TRet;
    scrollTo(value: number, duration: number): TRet;
    setValue(value: number): TRet;
    addDelta(delta: number): TRet;
    scrollDelta(delta: number): TRet;
    setValueOnly(value: number): TRet;
    isMobile(): number;
    get virtualSize(): number;
    get value(): number;
    get row(): number;
    get animatable(): number;
}
export declare class TTabControl extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TListView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setItemHeight(item_height: number): TRet;
    setDefaultItemHeight(default_item_height: number): TRet;
    setAutoHideScrollBar(auto_hide_scroll_bar: number): TRet;
    static cast(widget: TWidget): TWidget;
    get itemHeight(): number;
    get defaultItemHeight(): number;
    get autoHideScrollBar(): number;
}
export declare class TListViewH extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setItemWidth(item_width: number): TRet;
    setSpacing(spacing: number): TRet;
    static cast(widget: TWidget): TWidget;
    get itemWidth(): number;
    get spacing(): number;
}
export declare class TTabButton extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setValue(value: number): TRet;
    setIcon(name: string): TRet;
    setActiveIcon(name: string): TRet;
    get value(): number;
    get activeIcon(): string;
    get icon(): string;
}
export declare class TTabButtonGroup extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setCompact(compact: number): TRet;
    setScrollable(scrollable: number): TRet;
    static cast(widget: TWidget): TWidget;
    get compact(): number;
    get scrollable(): number;
}
export declare class TListItem extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class THscrollLabel extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setLull(lull: number): TRet;
    setDuration(duration: number): TRet;
    setOnlyFocus(only_focus: number): TRet;
    setOnlyParentFocus(only_parent_focus: number): TRet;
    setLoop(loop: number): TRet;
    setYoyo(yoyo: number): TRet;
    setEllipses(ellipses: number): TRet;
    setXoffset(xoffset: number): TRet;
    start(): TRet;
    stop(): TRet;
    static cast(widget: TWidget): TWidget;
    get onlyFocus(): number;
    get onlyParentFocus(): number;
    get loop(): number;
    get yoyo(): number;
    get ellipses(): number;
    get lull(): number;
    get duration(): number;
    get xoffset(): number;
    get textW(): number;
}
export declare class TRichText extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setText(text: string): TRet;
    static cast(widget: TWidget): TWidget;
    get lineGap(): number;
}
export declare class TProgressCircle extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setValue(value: number): TRet;
    setMax(max: number): TRet;
    setLineWidth(line_width: number): TRet;
    setStartAngle(start_angle: number): TRet;
    setUnit(unit: string): TRet;
    setShowText(show_text: number): TRet;
    setCounterClockWise(counter_clock_wise: number): TRet;
    get value(): number;
    get max(): number;
    get startAngle(): number;
    get lineWidth(): number;
    get unit(): string;
    get counterClockWise(): number;
    get showText(): number;
}
export declare class TSlider extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setValue(value: number): TRet;
    setMin(min: number): TRet;
    setMax(max: number): TRet;
    setStep(step: number): TRet;
    setBarSize(bar_size: number): TRet;
    setVertical(vertical: number): TRet;
    get value(): number;
    get min(): number;
    get max(): number;
    get step(): number;
    get vertical(): number;
    get barSize(): number;
}
export declare class TMledit extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setReadonly(readonly: number): TRet;
    setFocus(focus: number): TRet;
    setWrapWord(wrap_word: number): TRet;
    setMaxLines(max_lines: number): TRet;
    setInputTips(tips: string): TRet;
    setCursor(cursor: number): TRet;
    setScrollLine(scroll_line: number): TRet;
    static cast(widget: TWidget): TWidget;
    get readonly(): number;
    get tips(): string;
    get wrapWord(): number;
    get maxLines(): number;
    get scrollLine(): number;
}
export declare class TRow extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TProgressBar extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setValue(value: number): TRet;
    setMax(max: number): TRet;
    setVertical(vertical: number): TRet;
    setShowText(show_text: number): TRet;
    getPercent(): number;
    get value(): number;
    get max(): number;
    get vertical(): number;
    get showText(): number;
}
export declare class TObject extends TEmitter {
    nativeObj: any;
    constructor(nativeObj: any);
    unref(): TRet;
    static ref(obj: TObject): TObject;
    getType(): string;
    getDesc(): string;
    getSize(): number;
    isCollection(): number;
    setName(name: string): TRet;
    compare(other: TObject): number;
    getProp(name: string, v: TValue): TRet;
    getPropStr(name: string): string;
    getPropPointer(name: string): any;
    getPropObject(name: string): TObject;
    getPropInt(name: string, defval: number): number;
    getPropBool(name: string, defval: number): number;
    getPropFloat(name: string, defval: number): number;
    removeProp(name: string): TRet;
    setProp(name: string, value: TValue): TRet;
    setPropStr(name: string, value: string): TRet;
    setPropObject(name: string, value: TObject): TRet;
    setPropInt(name: string, value: number): TRet;
    setPropBool(name: string, value: number): TRet;
    setPropFloat(name: string, value: number): TRet;
    copyProp(src: TObject, name: string): TRet;
    foreachProp(on_prop: Function, ctx: any): TRet;
    hasProp(name: string): number;
    eval(expr: string, v: TValue): TRet;
    canExec(name: string, args: string): number;
    exec(name: string, args: string): TRet;
    notifyChanged(): TRet;
    getPropStrByPath(path: string): string;
    getPropPointerByPath(path: string): any;
    getPropObjectByPath(path: string): TObject;
    getPropIntByPath(path: string, defval: number): number;
    getPropBoolByPath(path: string, defval: number): number;
    getPropFloatByPath(path: string, defval: number): number;
    get refCount(): number;
    get name(): string;
}
export declare class TPages extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setActive(index: number): TRet;
    setActiveByName(name: string): TRet;
    get active(): number;
}
export declare class TLineNumber extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setTopMargin(top_margin: number): TRet;
    setBottomMargin(bottom_margin: number): TRet;
    setLineHeight(line_height: number): TRet;
    setYoffset(yoffset: number): TRet;
    static cast(widget: TWidget): TWidget;
}
export declare class TOverlay extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TImageValue extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setImage(image: string): TRet;
    setFormat(format: string): TRet;
    setValue(value: number): TRet;
    static cast(widget: TWidget): TWidget;
    get image(): string;
    get format(): string;
    get value(): number;
}
export declare class TImageAnimation extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setLoop(loop: number): TRet;
    setImage(image: string): TRet;
    setInterval(interval: number): TRet;
    setDelay(delay: number): TRet;
    setAutoPlay(auto_play: number): TRet;
    setSequence(sequence: string): TRet;
    setRangeSequence(start_index: number, end_index: number): TRet;
    play(): TRet;
    stop(): TRet;
    pause(): TRet;
    next(): TRet;
    setFormat(format: string): TRet;
    setUnloadAfterPaint(unload_after_paint: number): TRet;
    static cast(widget: TWidget): TWidget;
    get image(): string;
    get sequence(): string;
    get startIndex(): number;
    get endIndex(): number;
    get loop(): number;
    get autoPlay(): number;
    get unloadAfterPaint(): number;
    get format(): string;
    get interval(): number;
    get delay(): number;
}
export declare class TGuage extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setImage(name: string): TRet;
    setDrawType(draw_type: TImageDrawType): TRet;
    get image(): string;
    get drawType(): TImageDrawType;
}
export declare class TGuagePointer extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setAngle(angle: number): TRet;
    setImage(image: string): TRet;
    setAnchor(anchor_x: string, anchor_y: string): TRet;
    get angle(): number;
    get image(): string;
    get anchorX(): number;
    get anchorY(): number;
}
export declare class TLabel extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setLength(length: number): TRet;
    resizeToContent(min_w: number, max_w: number, min_h: number, max_h: number): TRet;
    static cast(widget: TWidget): TWidget;
    get length(): number;
}
export declare class TDraggable extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setTop(top: number): TRet;
    setBottom(bottom: number): TRet;
    setLeft(left: number): TRet;
    setRight(right: number): TRet;
    setVerticalOnly(vertical_only: number): TRet;
    setHorizontalOnly(horizontal_only: number): TRet;
    setDragWindow(drag_window: number): TRet;
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
    get verticalOnly(): number;
    get horizontalOnly(): number;
    get dragWindow(): number;
}
export declare class TGroupBox extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TColorPicker extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setColor(color: string): TRet;
    static cast(widget: TWidget): TWidget;
    get value(): string;
}
export declare class TCanvasWidget extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TGrid extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TGridItem extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TWindowManager extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TWidget;
    static cast(widget: TWidget): TWidget;
    getTopMainWindow(): TWidget;
    getTopWindow(): TWidget;
    getPrevWindow(): TWidget;
    getPointerX(): number;
    getPointerY(): number;
    getPointerPressed(): number;
    setShowFps(show_fps: number): TRet;
    setScreenSaverTime(screen_saver_time: number): TRet;
    setCursor(cursor: string): TRet;
    back(): TRet;
    backToHome(): TRet;
}
export declare class TWindowBase extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(widget: TWidget): TWidget;
    get theme(): string;
    get closable(): TWindowClosable;
}
export declare class TEdit extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    getInt(): number;
    getDouble(): number;
    setInt(value: number): TRet;
    setDouble(value: number): TRet;
    setTextLimit(min: number, max: number): TRet;
    setIntLimit(min: number, max: number, step: number): TRet;
    setFloatLimit(min: number, max: number, step: number): TRet;
    setReadonly(readonly: number): TRet;
    setAutoFix(auto_fix: number): TRet;
    setSelectNoneWhenFocused(select_none_when_focused: number): TRet;
    setOpenImWhenFocused(open_im_when_focused: number): TRet;
    setInputType(type: TInputType): TRet;
    setInputTips(tips: string): TRet;
    setPasswordVisible(password_visible: number): TRet;
    setFocus(focus: number): TRet;
    setCursor(cursor: number): TRet;
    get readonly(): number;
    get passwordVisible(): number;
    get autoFix(): number;
    get selectNoneWhenFocused(): number;
    get openImWhenFocused(): number;
    get tips(): string;
    get inputType(): TInputType;
    get min(): number;
    get max(): number;
    get step(): number;
}
export declare class TStyleMutable extends TStyle {
    nativeObj: any;
    constructor(nativeObj: any);
    setName(name: string): TRet;
    setInt(state: string, name: string, val: number): TRet;
    static cast(s: TStyle): TStyle;
    static create(widget: TWidget, default_style: TStyle): TStyle;
    get name(): string;
}
export declare class TDragger extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setRange(x_min: number, y_min: number, x_max: number, y_max: number): TWidget;
    get xMin(): number;
    get yMin(): number;
    get xMax(): number;
    get yMax(): number;
}
export declare class TImageBase extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    setImage(name: string): TRet;
    setRotation(rotation: number): TRet;
    setScale(scale_x: number, scale_y: number): TRet;
    setAnchor(anchor_x: number, anchor_y: number): TRet;
    setSelected(selected: number): TRet;
    setSelectable(selectable: number): TRet;
    setClickable(clickable: number): TRet;
    static cast(widget: TWidget): TWidget;
    get image(): string;
    get anchorX(): number;
    get anchorY(): number;
    get scaleX(): number;
    get scaleY(): number;
    get rotation(): number;
    get clickable(): number;
    get selectable(): number;
    get selected(): number;
}
export declare class TWindowEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TWindowEvent;
    get window(): TWidget;
}
export declare class TPaintEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TPaintEvent;
    get c(): TCanvas;
}
export declare class TKeyEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TKeyEvent;
    get key(): number;
    get alt(): number;
    get lalt(): number;
    get ralt(): number;
    get ctrl(): number;
    get lctrl(): number;
    get rctrl(): number;
    get shift(): number;
    get lshift(): number;
    get rshift(): number;
    get cmd(): number;
    get menu(): number;
    get capslock(): number;
}
export declare class TPointerEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TPointerEvent;
    get x(): number;
    get y(): number;
    get button(): number;
    get pressed(): number;
    get alt(): number;
    get ctrl(): number;
    get cmd(): number;
    get menu(): number;
    get shift(): number;
}
export declare class TOrientationEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TOrientationEvent;
    get orientation(): number;
}
export declare class TWheelEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: TEvent): TWheelEvent;
    get dy(): number;
    get alt(): number;
    get ctrl(): number;
    get shift(): number;
}
export declare class TAppBar extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TButtonGroup extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TButton extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setRepeat(repeat: number): TRet;
    setEnableLongPress(enable_long_press: number): TRet;
    get repeat(): number;
    get enableLongPress(): number;
}
export declare class TDigitClock extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setFormat(format: string): TRet;
    get format(): string;
}
export declare class TCheckButton extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static createRadio(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setValue(value: number): TRet;
    static cast(widget: TWidget): TWidget;
    get value(): number;
}
export declare class TColorTile extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setBgColor(color: string): TRet;
    get bgColor(): string;
    get borderColor(): string;
}
export declare class TColumn extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TComboBoxItem extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setChecked(checked: number): TRet;
    setValue(value: number): TRet;
    get value(): number;
    get checked(): number;
}
export declare class TComboBox extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setOpenWindow(open_window: string): TRet;
    resetOptions(): TRet;
    countOptions(): number;
    setSelectedIndex(index: number): TRet;
    setLocalizeOptions(localize_options: number): TRet;
    setValue(value: number): TRet;
    setItemHeight(item_height: number): TRet;
    appendOption(value: number, text: string): TRet;
    setOptions(options: string): TRet;
    getValue(): number;
    getTextValue(): string;
    get openWindow(): string;
    get selectedIndex(): number;
    get value(): number;
    get localizeOptions(): number;
    get options(): string;
    get itemHeight(): number;
}
export declare class TDialogClient extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TDialogTitle extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TObjectDefault extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TObject;
    unref(): TRet;
    clearProps(): TRet;
    get propsSize(): number;
}
export declare class TWindow extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setFullscreen(fullscreen: number): TRet;
    static open(name: string): TWidget;
    static openAndClose(name: string, to_close: TWidget): TWidget;
    close(): TRet;
    closeForce(): TRet;
    static cast(widget: TWidget): TWidget;
    get fullscreen(): number;
}
export declare class TTimerInfo extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(timer: TTimerInfo): TTimerInfo;
    get ctx(): any;
    get id(): number;
    get now(): number;
}
export declare class TComboBoxEx extends TComboBox {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
}
export declare class TImage extends TImageBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setDrawType(draw_type: TImageDrawType): TRet;
    static cast(widget: TWidget): TWidget;
    get drawType(): TImageDrawType;
}
export declare class TGifImage extends TImageBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TKeyboard extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TPopup extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    setCloseWhenClick(close_when_click: number): TRet;
    setCloseWhenClickOutside(close_when_click_outside: number): TRet;
    get closeWhenClick(): number;
    get closeWhenClickOutside(): number;
}
export declare class TObjectArray extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TObject;
    unref(): TRet;
    clearProps(): TRet;
    get propsSize(): number;
}
export declare class TMutableImage extends TImageBase {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TSpinBox extends TEdit {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TSystemBar extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
}
export declare class TIdleInfo extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(idle: TIdleInfo): TIdleInfo;
    get ctx(): any;
    get id(): number;
}
export declare class TSvgImage extends TImageBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    setImage(name: string): TRet;
    static cast(widget: TWidget): TWidget;
}
export declare class TDialog extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static createSimple(parent: TWidget, x: number, y: number, w: number, h: number): TWidget;
    static cast(widget: TWidget): TWidget;
    getTitle(): TWidget;
    getClient(): TWidget;
    static open(name: string): TWidget;
    setTitle(title: string): TRet;
    modal(): TRet;
    quit(code: number): TRet;
    isQuited(): number;
    isModal(): number;
    static toast(text: string, duration: number): TRet;
    static info(title: string, text: string): TRet;
    static warn(title: string, text: string): TRet;
    static confirm(title: string, text: string): TRet;
    get highlight(): string;
}
export declare class TWindowManagerDefault extends TWindowManager {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TWindowManagerSimple extends TWindowManager {
    nativeObj: any;
    constructor(nativeObj: any);
}
