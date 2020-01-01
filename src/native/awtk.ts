// declare function print(str);
// if(this['console'] === undefined) {
//   // this.console = {}
//   this.console.log = function(str) {
//       print(str);
//   }
// }

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

 // TODO:自己维护一份
  get text(): string {
    return widget_get_text(this.nativeObj);
  }

  set text(v: string) {
    this.setText(v);
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


export class TIdleManager {
 public nativeObj : any;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

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
 // TODO: 添加 text 
 // 检测 widget 和 rich_text 的 text 的不同
 set rich_text(text : string){
  this.setText(text);
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

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSlider  {
   return new TSlider(slider_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 static cast(widget : TWidget) : TSlider  {
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

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TProgressBar  {
   return new TProgressBar(progress_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 static cast(widget : TWidget) : TProgressBar  {
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

 static cast(widget : TWidget) : TWindowManager  {
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

 // TODO: 添加 inputTips 
 set inputTips(tips : string){
   this.setInputTips(tips)
 }

 // TODO: 添加 textLimit 
 set textLimit(text_limit: number[]){
   this.setTextLimit(text_limit[0], text_limit[1])
 }

  // TODO: 添加 intLimit
  set intLimit(int_limit: number[]){
    this.setIntLimit(int_limit[0], int_limit[1], int_limit[2])
  }

  // TODO: 添加 floatLimit
  set floatLimit(float_limit: number[]){
    this.setFloatLimit(float_limit[0], float_limit[1], float_limit[2])
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

 // TODO: 设置scale
 set scale(scale: number[]){
  this.setScale(scale[0], scale[1])
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

 static cast(widget : TWidget) : TCheckButton  {
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

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TComboBox  {
   return new TComboBox(combo_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 static cast(widget : TWidget) : TComboBox  {
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

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TComboBoxEx  {
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

 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSpinBox  {
   return new TSpinBox(spin_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

 static cast(widget : TWidget) : TSpinBox  {
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

