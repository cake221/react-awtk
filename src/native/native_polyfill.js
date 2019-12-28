global.__AwtkSnapshot = [];
global.tk_quit = function(  ){
  global.__AwtkSnapshot.push(`funtion  tk_quit(  ) :`)
  return undefined
}

global.tk_get_pointer_x = function(  ){
  global.__AwtkSnapshot.push(`funtion  tk_get_pointer_x(  ) :`)
  return undefined
}

global.tk_get_pointer_y = function(  ){
  global.__AwtkSnapshot.push(`funtion  tk_get_pointer_y(  ) :`)
  return undefined
}

global.tk_is_pointer_pressed = function(  ){
  global.__AwtkSnapshot.push(`funtion  tk_is_pointer_pressed(  ) :`)
  return undefined
}

global.bitmap_create = function(  ){
  global.__AwtkSnapshot.push(`funtion  bitmap_create(  ) :`)
  return undefined
}

global.bitmap_create_ex = function( w, h, line_length, format ){
  global.__AwtkSnapshot.push(`funtion  bitmap_create_ex( w, h, line_length, format ) :${w}, ${h}, ${line_length}, ${format}`)
  return undefined
}

global.bitmap_get_bpp = function( bitmap ){
  global.__AwtkSnapshot.push(`funtion  bitmap_get_bpp( bitmap ) :${bitmap}`)
  return undefined
}

global.bitmap_destroy = function( bitmap ){
  global.__AwtkSnapshot.push(`funtion  bitmap_destroy( bitmap ) :${bitmap}`)
  return undefined
}

global.bitmap_t_get_prop_w = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  bitmap_t_get_prop_w`)
  return "bitmap_t_get_prop_w"
}

global.bitmap_t_get_prop_h = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  bitmap_t_get_prop_h`)
  return "bitmap_t_get_prop_h"
}

global.bitmap_t_get_prop_line_length = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  bitmap_t_get_prop_line_length`)
  return "bitmap_t_get_prop_line_length"
}

global.bitmap_t_get_prop_flags = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  bitmap_t_get_prop_flags`)
  return "bitmap_t_get_prop_flags"
}

global.bitmap_t_get_prop_format = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  bitmap_t_get_prop_format`)
  return "bitmap_t_get_prop_format"
}

global.bitmap_t_get_prop_name = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  bitmap_t_get_prop_name`)
  return "bitmap_t_get_prop_name"
}

global.IMAGE_DRAW_DEFAULT = function(){
 return "IMAGE_DRAW_DEFAULT"
}

global.IMAGE_DRAW_CENTER = function(){
 return "IMAGE_DRAW_CENTER"
}

global.IMAGE_DRAW_ICON = function(){
 return "IMAGE_DRAW_ICON"
}

global.IMAGE_DRAW_SCALE = function(){
 return "IMAGE_DRAW_SCALE"
}

global.IMAGE_DRAW_SCALE_AUTO = function(){
 return "IMAGE_DRAW_SCALE_AUTO"
}

global.IMAGE_DRAW_SCALE_DOWN = function(){
 return "IMAGE_DRAW_SCALE_DOWN"
}

global.IMAGE_DRAW_SCALE_W = function(){
 return "IMAGE_DRAW_SCALE_W"
}

global.IMAGE_DRAW_SCALE_H = function(){
 return "IMAGE_DRAW_SCALE_H"
}

global.IMAGE_DRAW_REPEAT = function(){
 return "IMAGE_DRAW_REPEAT"
}

global.IMAGE_DRAW_REPEAT_X = function(){
 return "IMAGE_DRAW_REPEAT_X"
}

global.IMAGE_DRAW_REPEAT_Y = function(){
 return "IMAGE_DRAW_REPEAT_Y"
}

global.IMAGE_DRAW_REPEAT_Y_INVERSE = function(){
 return "IMAGE_DRAW_REPEAT_Y_INVERSE"
}

global.IMAGE_DRAW_PATCH9 = function(){
 return "IMAGE_DRAW_PATCH9"
}

global.IMAGE_DRAW_PATCH3_X = function(){
 return "IMAGE_DRAW_PATCH3_X"
}

global.IMAGE_DRAW_PATCH3_Y = function(){
 return "IMAGE_DRAW_PATCH3_Y"
}

global.IMAGE_DRAW_PATCH3_X_SCALE_Y = function(){
 return "IMAGE_DRAW_PATCH3_X_SCALE_Y"
}

global.IMAGE_DRAW_PATCH3_Y_SCALE_X = function(){
 return "IMAGE_DRAW_PATCH3_Y_SCALE_X"
}


/**
 * 图片绘制方法常量定义。
 *
 *
 */
global.TImageDrawType = {

  /**
   * 缺省显示。将图片按原大小显示在目标矩形的左上角。
   *
   *
   */
 DEFAULT : IMAGE_DRAW_DEFAULT(),

  /**
   * 居中显示。将图片按原大小显示在目标矩形的中央。
   *
   *
   */
 CENTER : IMAGE_DRAW_CENTER(),

  /**
   * 图标显示。同居中显示，但会根据屏幕密度调整大小。
   *
   *
   */
 ICON : IMAGE_DRAW_ICON(),

  /**
   * 缩放显示。将图片缩放至目标矩形的大小(不保证宽高成比例)。
   *
   *
   */
 SCALE : IMAGE_DRAW_SCALE(),

  /**
   * 自动缩放显示。将图片缩放至目标矩形的宽度或高度(选取最小的比例)，并居中显示。
   *
   *
   */
 SCALE_AUTO : IMAGE_DRAW_SCALE_AUTO(),

  /**
   * 如果图片比目标矩形大，自动缩小显示，否则居中显示。
   *
   *
   */
 SCALE_DOWN : IMAGE_DRAW_SCALE_DOWN(),

  /**
   * 宽度缩放显示。 将图片缩放至目标矩形的宽度，高度按此比例进行缩放，超出不部分不显示。
   *
   *
   */
 SCALE_W : IMAGE_DRAW_SCALE_W(),

  /**
   * 高度缩放显示。将图片缩放至目标矩形的高度，宽度按此比例进行缩放，超出不部分不显示。
   *
   *
   */
 SCALE_H : IMAGE_DRAW_SCALE_H(),

  /**
   * 平铺显示。
   *
   *
   */
 REPEAT : IMAGE_DRAW_REPEAT(),

  /**
   * 水平方向平铺显示，垂直方向缩放。
   *
   *
   */
 REPEAT_X : IMAGE_DRAW_REPEAT_X(),

  /**
   * 垂直方向平铺显示，水平方向缩放。
   *
   *
   */
 REPEAT_Y : IMAGE_DRAW_REPEAT_Y(),

  /**
   * 垂直方向平铺显示，水平方向缩放(从底部到顶部)。
   *
   *
   */
 REPEAT_Y_INVERSE : IMAGE_DRAW_REPEAT_Y_INVERSE(),

  /**
   * 9宫格显示。
   *将图片分成等大小的9块，4个角按原大小显示在目标矩形的4个角，左右上下和中间5块分别缩放显示在对应的目标区域。
   *
   *
   */
 PATCH9 : IMAGE_DRAW_PATCH9(),

  /**
   * 水平方向3宫格显示，垂直方向居中显示。
   *将图片在水平方向上分成等大小的3块，左右两块按原大小显示在目标矩形的左右，中间一块缩放显示在目标区域中间剩余部分。
   *
   *
   */
 PATCH3_X : IMAGE_DRAW_PATCH3_X(),

  /**
   * 垂直方向3宫格显示，水平方向居中显示。
   *将图片在垂直方向上分成等大小的3块，上下两块按原大小显示在目标矩形的上下，中间一块缩放显示在目标区域中间剩余部分。
   *
   *
   */
 PATCH3_Y : IMAGE_DRAW_PATCH3_Y(),

  /**
   * 水平方向3宫格显示，垂直方向缩放显示。
   *将图片在水平方向上分成等大小的3块，左右两块按原大小显示在目标矩形的左右，中间一块缩放显示在目标区域中间剩余部分。
   *
   *
   */
 PATCH3_X_SCALE_Y : IMAGE_DRAW_PATCH3_X_SCALE_Y(),

  /**
   * 垂直方向3宫格显示，水平方向缩放显示。
   *将图片在垂直方向上分成等大小的3块，上下两块按原大小显示在目标矩形的上下，中间一块缩放显示在目标区域中间剩余部分。
   *
   *
   */
 PATCH3_Y_SCALE_X : IMAGE_DRAW_PATCH3_Y_SCALE_X(),
};

global.canvas_get_width = function( c ){
  global.__AwtkSnapshot.push(`funtion  canvas_get_width( c ) :${c}`)
  return undefined
}

global.canvas_get_height = function( c ){
  global.__AwtkSnapshot.push(`funtion  canvas_get_height( c ) :${c}`)
  return undefined
}

global.canvas_get_clip_rect = function( c, r ){
  global.__AwtkSnapshot.push(`funtion  canvas_get_clip_rect( c, r ) :${c}, ${r}`)
  return undefined
}

global.canvas_set_clip_rect = function( c, r ){
  global.__AwtkSnapshot.push(`funtion  canvas_set_clip_rect( c, r ) :${c}, ${r}`)
  return undefined
}

global.canvas_set_clip_rect_ex = function( c, r, translate ){
  global.__AwtkSnapshot.push(`funtion  canvas_set_clip_rect_ex( c, r, translate ) :${c}, ${r}, ${translate}`)
  return undefined
}

global.canvas_set_fill_color_str = function( c, color ){
  global.__AwtkSnapshot.push(`funtion  canvas_set_fill_color_str( c, color ) :${c}, ${color}`)
  return undefined
}

global.canvas_set_text_color_str = function( c, color ){
  global.__AwtkSnapshot.push(`funtion  canvas_set_text_color_str( c, color ) :${c}, ${color}`)
  return undefined
}

global.canvas_set_stroke_color_str = function( c, color ){
  global.__AwtkSnapshot.push(`funtion  canvas_set_stroke_color_str( c, color ) :${c}, ${color}`)
  return undefined
}

global.canvas_set_global_alpha = function( c, alpha ){
  global.__AwtkSnapshot.push(`funtion  canvas_set_global_alpha( c, alpha ) :${c}, ${alpha}`)
  return undefined
}

global.canvas_translate = function( c, dx, dy ){
  global.__AwtkSnapshot.push(`funtion  canvas_translate( c, dx, dy ) :${c}, ${dx}, ${dy}`)
  return undefined
}

global.canvas_untranslate = function( c, dx, dy ){
  global.__AwtkSnapshot.push(`funtion  canvas_untranslate( c, dx, dy ) :${c}, ${dx}, ${dy}`)
  return undefined
}

global.canvas_draw_vline = function( c, x, y, h ){
  global.__AwtkSnapshot.push(`funtion  canvas_draw_vline( c, x, y, h ) :${c}, ${x}, ${y}, ${h}`)
  return undefined
}

global.canvas_draw_hline = function( c, x, y, w ){
  global.__AwtkSnapshot.push(`funtion  canvas_draw_hline( c, x, y, w ) :${c}, ${x}, ${y}, ${w}`)
  return undefined
}

global.canvas_fill_rect = function( c, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  canvas_fill_rect( c, x, y, w, h ) :${c}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.canvas_stroke_rect = function( c, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  canvas_stroke_rect( c, x, y, w, h ) :${c}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.canvas_set_font = function( c, name, size ){
  global.__AwtkSnapshot.push(`funtion  canvas_set_font( c, name, size ) :${c}, ${name}, ${size}`)
  return undefined
}

global.canvas_measure_utf8 = function( c, str ){
  global.__AwtkSnapshot.push(`funtion  canvas_measure_utf8( c, str ) :${c}, ${str}`)
  return undefined
}

global.canvas_draw_utf8 = function( c, str, x, y ){
  global.__AwtkSnapshot.push(`funtion  canvas_draw_utf8( c, str, x, y ) :${c}, ${str}, ${x}, ${y}`)
  return undefined
}

global.canvas_draw_utf8_in_rect = function( c, str, r ){
  global.__AwtkSnapshot.push(`funtion  canvas_draw_utf8_in_rect( c, str, r ) :${c}, ${str}, ${r}`)
  return undefined
}

global.canvas_draw_icon = function( c, img, cx, cy ){
  global.__AwtkSnapshot.push(`funtion  canvas_draw_icon( c, img, cx, cy ) :${c}, ${img}, ${cx}, ${cy}`)
  return undefined
}

global.canvas_draw_image = function( c, img, src, dst ){
  global.__AwtkSnapshot.push(`funtion  canvas_draw_image( c, img, src, dst ) :${c}, ${img}, ${src}, ${dst}`)
  return undefined
}

global.canvas_draw_image_ex = function( c, img, draw_type, dst ){
  global.__AwtkSnapshot.push(`funtion  canvas_draw_image_ex( c, img, draw_type, dst ) :${c}, ${img}, ${draw_type}, ${dst}`)
  return undefined
}

global.canvas_get_vgcanvas = function( c ){
  global.__AwtkSnapshot.push(`funtion  canvas_get_vgcanvas( c ) :${c}`)
  return undefined
}

global.canvas_cast = function( c ){
  global.__AwtkSnapshot.push(`funtion  canvas_cast( c ) :${c}`)
  return undefined
}

global.canvas_reset = function( c ){
  global.__AwtkSnapshot.push(`funtion  canvas_reset( c ) :${c}`)
  return undefined
}

global.canvas_t_get_prop_ox = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  canvas_t_get_prop_ox`)
  return "canvas_t_get_prop_ox"
}

global.canvas_t_get_prop_oy = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  canvas_t_get_prop_oy`)
  return "canvas_t_get_prop_oy"
}

global.canvas_t_get_prop_font_name = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  canvas_t_get_prop_font_name`)
  return "canvas_t_get_prop_font_name"
}

global.canvas_t_get_prop_font_size = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  canvas_t_get_prop_font_size`)
  return "canvas_t_get_prop_font_size"
}

global.canvas_t_get_prop_global_alpha = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  canvas_t_get_prop_global_alpha`)
  return "canvas_t_get_prop_global_alpha"
}

global.CLIP_BOARD_DATA_TYPE_NONE = function(){
 return "CLIP_BOARD_DATA_TYPE_NONE"
}

global.CLIP_BOARD_DATA_TYPE_TEXT = function(){
 return "CLIP_BOARD_DATA_TYPE_TEXT"
}


/**
 * 剪切板数据类型定义。
 *
 *
 */
global.TClipBoardDataType = {

  /**
   * 无数据。
   *
   *
   */
 NONE : CLIP_BOARD_DATA_TYPE_NONE(),

  /**
   * UTF8文本。
   *
   *
   */
 TEXT : CLIP_BOARD_DATA_TYPE_TEXT(),
};

global.clip_board_set_text = function( text ){
  global.__AwtkSnapshot.push(`funtion  clip_board_set_text( text ) :${text}`)
  return undefined
}

global.clip_board_get_text = function(  ){
  global.__AwtkSnapshot.push(`funtion  clip_board_get_text(  ) :`)
  return undefined
}

global.DIALOG_QUIT_NONE = function(){
 return "DIALOG_QUIT_NONE"
}

global.DIALOG_QUIT_OK = function(){
 return "DIALOG_QUIT_OK"
}

global.DIALOG_QUIT_YES = function(){
 return "DIALOG_QUIT_YES"
}

global.DIALOG_QUIT_CANCEL = function(){
 return "DIALOG_QUIT_CANCEL"
}

global.DIALOG_QUIT_NO = function(){
 return "DIALOG_QUIT_NO"
}

global.DIALOG_QUIT_OTHER = function(){
 return "DIALOG_QUIT_OTHER"
}


/**
 * 对话框退出码。
 *> 一般用作dialog_quit函数的参数。
 *
 *
 */
global.TDialogQuitCode = {

  /**
   * 对话框被强行关闭或不关心关闭原因。
   *
   *
   */
 NONE : DIALOG_QUIT_NONE(),

  /**
   * 点击“OK”按钮关闭。
   *
   *
   */
 OK : DIALOG_QUIT_OK(),

  /**
   * 点击“YES”按钮关闭。
   *
   *
   */
 YES : DIALOG_QUIT_YES(),

  /**
   * 点击“CANCEL”按钮关闭。
   *
   *
   */
 CANCEL : DIALOG_QUIT_CANCEL(),

  /**
   * 点击“NO”按钮关闭。
   *
   *
   */
 NO : DIALOG_QUIT_NO(),

  /**
   * 点击其它按钮关闭。
   *
   *
   */
 OTHER : DIALOG_QUIT_OTHER(),
};

global.EVT_POINTER_DOWN = function(){
 return "EVT_POINTER_DOWN"
}

global.EVT_POINTER_DOWN_BEFORE_CHILDREN = function(){
 return "EVT_POINTER_DOWN_BEFORE_CHILDREN"
}

global.EVT_POINTER_MOVE = function(){
 return "EVT_POINTER_MOVE"
}

global.EVT_POINTER_MOVE_BEFORE_CHILDREN = function(){
 return "EVT_POINTER_MOVE_BEFORE_CHILDREN"
}

global.EVT_POINTER_UP = function(){
 return "EVT_POINTER_UP"
}

global.EVT_POINTER_UP_BEFORE_CHILDREN = function(){
 return "EVT_POINTER_UP_BEFORE_CHILDREN"
}

global.EVT_WHEEL = function(){
 return "EVT_WHEEL"
}

global.EVT_WHEEL_BEFORE_CHILDREN = function(){
 return "EVT_WHEEL_BEFORE_CHILDREN"
}

global.EVT_POINTER_DOWN_ABORT = function(){
 return "EVT_POINTER_DOWN_ABORT"
}

global.EVT_CONTEXT_MENU = function(){
 return "EVT_CONTEXT_MENU"
}

global.EVT_POINTER_ENTER = function(){
 return "EVT_POINTER_ENTER"
}

global.EVT_POINTER_LEAVE = function(){
 return "EVT_POINTER_LEAVE"
}

global.EVT_LONG_PRESS = function(){
 return "EVT_LONG_PRESS"
}

global.EVT_CLICK = function(){
 return "EVT_CLICK"
}

global.EVT_FOCUS = function(){
 return "EVT_FOCUS"
}

global.EVT_BLUR = function(){
 return "EVT_BLUR"
}

global.EVT_KEY_DOWN = function(){
 return "EVT_KEY_DOWN"
}

global.EVT_KEY_DOWN_BEFORE_CHILDREN = function(){
 return "EVT_KEY_DOWN_BEFORE_CHILDREN"
}

global.EVT_KEY_REPEAT = function(){
 return "EVT_KEY_REPEAT"
}

global.EVT_KEY_UP = function(){
 return "EVT_KEY_UP"
}

global.EVT_KEY_UP_BEFORE_CHILDREN = function(){
 return "EVT_KEY_UP_BEFORE_CHILDREN"
}

global.EVT_WILL_MOVE = function(){
 return "EVT_WILL_MOVE"
}

global.EVT_MOVE = function(){
 return "EVT_MOVE"
}

global.EVT_WILL_RESIZE = function(){
 return "EVT_WILL_RESIZE"
}

global.EVT_RESIZE = function(){
 return "EVT_RESIZE"
}

global.EVT_WILL_MOVE_RESIZE = function(){
 return "EVT_WILL_MOVE_RESIZE"
}

global.EVT_MOVE_RESIZE = function(){
 return "EVT_MOVE_RESIZE"
}

global.EVT_VALUE_WILL_CHANGE = function(){
 return "EVT_VALUE_WILL_CHANGE"
}

global.EVT_VALUE_CHANGED = function(){
 return "EVT_VALUE_CHANGED"
}

global.EVT_VALUE_CHANGING = function(){
 return "EVT_VALUE_CHANGING"
}

global.EVT_PAINT = function(){
 return "EVT_PAINT"
}

global.EVT_BEFORE_PAINT = function(){
 return "EVT_BEFORE_PAINT"
}

global.EVT_AFTER_PAINT = function(){
 return "EVT_AFTER_PAINT"
}

global.EVT_PAINT_DONE = function(){
 return "EVT_PAINT_DONE"
}

global.EVT_LOCALE_CHANGED = function(){
 return "EVT_LOCALE_CHANGED"
}

global.EVT_ANIM_START = function(){
 return "EVT_ANIM_START"
}

global.EVT_ANIM_STOP = function(){
 return "EVT_ANIM_STOP"
}

global.EVT_ANIM_PAUSE = function(){
 return "EVT_ANIM_PAUSE"
}

global.EVT_ANIM_ONCE = function(){
 return "EVT_ANIM_ONCE"
}

global.EVT_ANIM_END = function(){
 return "EVT_ANIM_END"
}

global.EVT_WINDOW_LOAD = function(){
 return "EVT_WINDOW_LOAD"
}

global.EVT_WINDOW_WILL_OPEN = function(){
 return "EVT_WINDOW_WILL_OPEN"
}

global.EVT_WINDOW_OPEN = function(){
 return "EVT_WINDOW_OPEN"
}

global.EVT_WINDOW_TO_BACKGROUND = function(){
 return "EVT_WINDOW_TO_BACKGROUND"
}

global.EVT_WINDOW_TO_FOREGROUND = function(){
 return "EVT_WINDOW_TO_FOREGROUND"
}

global.EVT_WINDOW_CLOSE = function(){
 return "EVT_WINDOW_CLOSE"
}

global.EVT_REQUEST_CLOSE_WINDOW = function(){
 return "EVT_REQUEST_CLOSE_WINDOW"
}

global.EVT_TOP_WINDOW_CHANGED = function(){
 return "EVT_TOP_WINDOW_CHANGED"
}

global.EVT_IM_COMMIT = function(){
 return "EVT_IM_COMMIT"
}

global.EVT_IM_SHOW_CANDIDATES = function(){
 return "EVT_IM_SHOW_CANDIDATES"
}

global.EVT_IM_ACTION = function(){
 return "EVT_IM_ACTION"
}

global.EVT_IM_ACTION_INFO = function(){
 return "EVT_IM_ACTION_INFO"
}

global.EVT_DRAG_START = function(){
 return "EVT_DRAG_START"
}

global.EVT_DRAG = function(){
 return "EVT_DRAG"
}

global.EVT_DRAG_END = function(){
 return "EVT_DRAG_END"
}

global.EVT_SCREEN_SAVER = function(){
 return "EVT_SCREEN_SAVER"
}

global.EVT_LOW_MEMORY = function(){
 return "EVT_LOW_MEMORY"
}

global.EVT_OUT_OF_MEMORY = function(){
 return "EVT_OUT_OF_MEMORY"
}

global.EVT_ORIENTATION_WILL_CHANGED = function(){
 return "EVT_ORIENTATION_WILL_CHANGED"
}

global.EVT_ORIENTATION_CHANGED = function(){
 return "EVT_ORIENTATION_CHANGED"
}

global.EVT_WIDGET_CREATED = function(){
 return "EVT_WIDGET_CREATED"
}

global.EVT_REQUEST_QUIT_APP = function(){
 return "EVT_REQUEST_QUIT_APP"
}

global.EVT_THEME_CHANGED = function(){
 return "EVT_THEME_CHANGED"
}

global.EVT_REQ_START = function(){
 return "EVT_REQ_START"
}

global.EVT_USER_START = function(){
 return "EVT_USER_START"
}

global.EVT_NONE = function(){
 return "EVT_NONE"
}

global.EVT_PROP_WILL_CHANGE = function(){
 return "EVT_PROP_WILL_CHANGE"
}

global.EVT_PROP_CHANGED = function(){
 return "EVT_PROP_CHANGED"
}

global.EVT_ITEMS_WILL_CHANGE = function(){
 return "EVT_ITEMS_WILL_CHANGE"
}

global.EVT_ITEMS_CHANGED = function(){
 return "EVT_ITEMS_CHANGED"
}

global.EVT_PROPS_CHANGED = function(){
 return "EVT_PROPS_CHANGED"
}

global.EVT_PROGRESS = function(){
 return "EVT_PROGRESS"
}

global.EVT_DESTROY = function(){
 return "EVT_DESTROY"
}


/**
 * 类型常量定义。
 *
 *
 */
global.TEventType = {

  /**
   * 指针按下事件名(pointer_event_t)。
   *
   *
   */
 POINTER_DOWN : EVT_POINTER_DOWN(),

  /**
   * 指针按下事件名，在子控件处理之前触发(pointer_event_t)。
   *
   *
   */
 POINTER_DOWN_BEFORE_CHILDREN : EVT_POINTER_DOWN_BEFORE_CHILDREN(),

  /**
   * 指针移动事件名(pointer_event_t)。
   *
   *
   */
 POINTER_MOVE : EVT_POINTER_MOVE(),

  /**
   * 指针移动事件名，在子控件处理之前触发(pointer_event_t)。
   *
   *
   */
 POINTER_MOVE_BEFORE_CHILDREN : EVT_POINTER_MOVE_BEFORE_CHILDREN(),

  /**
   * 指针抬起事件名(pointer_event_t)。
   *
   *
   */
 POINTER_UP : EVT_POINTER_UP(),

  /**
   * 指针抬起事件名，在子控件处理之前触发(pointer_event_t)。
   *
   *
   */
 POINTER_UP_BEFORE_CHILDREN : EVT_POINTER_UP_BEFORE_CHILDREN(),

  /**
   * 滚轮事件名(pointer_event_t)。
   *
   *
   */
 WHEEL : EVT_WHEEL(),

  /**
   * 鼠标滚轮事件名，在子控件处理之前触发(key_event_t)。
   *
   *
   */
 WHEEL_BEFORE_CHILDREN : EVT_WHEEL_BEFORE_CHILDREN(),

  /**
   * 取消前一个指针按下事件名(pointer_event_t)。
   *
   *
   */
 POINTER_DOWN_ABORT : EVT_POINTER_DOWN_ABORT(),

  /**
   * 右键/长按弹出上下文菜单的事件名(pointer_event_t)。
   *
   *
   */
 CONTEXT_MENU : EVT_CONTEXT_MENU(),

  /**
   * 指针进入事件名(pointer_event_t)。
   *
   *
   */
 POINTER_ENTER : EVT_POINTER_ENTER(),

  /**
   * 指针离开事件名(pointer_event_t)。
   *
   *
   */
 POINTER_LEAVE : EVT_POINTER_LEAVE(),

  /**
   * 长按事件名(pointer_event_t)。
   *
   *
   */
 LONG_PRESS : EVT_LONG_PRESS(),

  /**
   * 点击事件名(pointer_event_t)。
   *
   *
   */
 CLICK : EVT_CLICK(),

  /**
   * 得到焦点事件名(event_t)。
   *
   *
   */
 FOCUS : EVT_FOCUS(),

  /**
   * 失去焦点事件名(event_t)。
   *
   *
   */
 BLUR : EVT_BLUR(),

  /**
   * 键按下事件名(key_event_t)。
   *
   *
   */
 KEY_DOWN : EVT_KEY_DOWN(),

  /**
   * 键按下事件名，在子控件处理之前触发(key_event_t)。
   *
   *
   */
 KEY_DOWN_BEFORE_CHILDREN : EVT_KEY_DOWN_BEFORE_CHILDREN(),

  /**
   * 按键repeat事件名(key_event_t)。
   *
   *
   */
 KEY_REPEAT : EVT_KEY_REPEAT(),

  /**
   * 键抬起事件名(key_event_t)。
   *
   *
   */
 KEY_UP : EVT_KEY_UP(),

  /**
   * 键抬起事件名，在子控件处理之前触发(key_event_t)。
   *
   *
   */
 KEY_UP_BEFORE_CHILDREN : EVT_KEY_UP_BEFORE_CHILDREN(),

  /**
   * 即将移动Widget的事件名(event_t)。
   *
   *
   */
 WILL_MOVE : EVT_WILL_MOVE(),

  /**
   * 移动Widget的事件名(event_t)。
   *
   *
   */
 MOVE : EVT_MOVE(),

  /**
   * 即将调整Widget大小的事件名(event_t)。
   *
   *
   */
 WILL_RESIZE : EVT_WILL_RESIZE(),

  /**
   * 调整Widget大小的事件名(event_t)。
   *
   *
   */
 RESIZE : EVT_RESIZE(),

  /**
   * 即将调整Widget大小/位置的事件名(event_t)。
   *
   *
   */
 WILL_MOVE_RESIZE : EVT_WILL_MOVE_RESIZE(),

  /**
   * 调整Widget大小/位置的事件名(event_t)。
   *
   *
   */
 MOVE_RESIZE : EVT_MOVE_RESIZE(),

  /**
   * 控件的值即将改变的事件名(event_t)。
   *
   *
   */
 VALUE_WILL_CHANGE : EVT_VALUE_WILL_CHANGE(),

  /**
   * 控件的值改变的事件名(event_t)。
   *
   *
   */
 VALUE_CHANGED : EVT_VALUE_CHANGED(),

  /**
   * 控件的值持续改变(如编辑器正在编辑)的事件名(event_t)。
   *
   *
   */
 VALUE_CHANGING : EVT_VALUE_CHANGING(),

  /**
   * 绘制的事件名(paint_event_t)。
   *
   *
   */
 PAINT : EVT_PAINT(),

  /**
   * 即将绘制的事件名(paint_event_t)。
   *
   *
   */
 BEFORE_PAINT : EVT_BEFORE_PAINT(),

  /**
   * 绘制完成的事件名(paint_event_t)。
   *
   *
   */
 AFTER_PAINT : EVT_AFTER_PAINT(),

  /**
   * 绘制完成(canvas状态已经恢复)的事件名(paint_event_t)。
   *
   *
   */
 PAINT_DONE : EVT_PAINT_DONE(),

  /**
   * locale改变的事件(event_t)。
   *
   *
   */
 LOCALE_CHANGED : EVT_LOCALE_CHANGED(),

  /**
   * 控件动画开始事件(event_t)。
   *
   *
   */
 ANIM_START : EVT_ANIM_START(),

  /**
   * 控件动画被主动停止的事件(event_t)。
   *
   *
   */
 ANIM_STOP : EVT_ANIM_STOP(),

  /**
   * 控件动画被暂停的事件(event_t)。
   *
   *
   */
 ANIM_PAUSE : EVT_ANIM_PAUSE(),

  /**
   * 控件动画yoyo/repeat时，完成一次的事件(event_t)。
   *
   *
   */
 ANIM_ONCE : EVT_ANIM_ONCE(),

  /**
   * 控件动画完成事件(event_t)。
   *
   *
   */
 ANIM_END : EVT_ANIM_END(),

  /**
   * 窗口加载完成事件(event_t)。
   *
   *
   */
 WINDOW_LOAD : EVT_WINDOW_LOAD(),

  /**
   * 窗口即将打开事件(event_t)。
   *如果有窗口动画，在窗口动画开始前触发。如果没有窗口动画，在窗口被加载后的下一次循环中触发。
   *
   *
   */
 WINDOW_WILL_OPEN : EVT_WINDOW_WILL_OPEN(),

  /**
   * 窗口打开事件(event_t)。
   *如果有窗口动画，在窗口动画完成时触发。如果没有窗口动画，在窗口被加载后的下一次循环中触发。
   *
   *
   */
 WINDOW_OPEN : EVT_WINDOW_OPEN(),

  /**
   * 窗口被切换到后台事件(event_t)。
   *打开新窗口时，当前窗口被切换到后台时，对当前窗口触发本事件。
   *
   *
   */
 WINDOW_TO_BACKGROUND : EVT_WINDOW_TO_BACKGROUND(),

  /**
   * 窗口被切换到前台事件(event_t)。
   *关闭当前窗口时，前一个窗口被切换到前台时，对前一个窗口触发本事件。
   *
   *
   */
 WINDOW_TO_FOREGROUND : EVT_WINDOW_TO_FOREGROUND(),

  /**
   * 窗口关闭事件。
   *
   *
   */
 WINDOW_CLOSE : EVT_WINDOW_CLOSE(),

  /**
   * 请求关闭窗口的事件(event_t)。
   *
   *
   */
 REQUEST_CLOSE_WINDOW : EVT_REQUEST_CLOSE_WINDOW(),

  /**
   * 顶层窗口改变的事件(window_event_t)。
   *
   *
   */
 TOP_WINDOW_CHANGED : EVT_TOP_WINDOW_CHANGED(),

  /**
   * 输入法提交输入的文本事件(im_commit_event_t)。
   *
   *
   */
 IM_COMMIT : EVT_IM_COMMIT(),

  /**
   * 输入法请求显示候选字事件(im_candidates_event_t)。
   *
   *
   */
 IM_SHOW_CANDIDATES : EVT_IM_SHOW_CANDIDATES(),

  /**
   * 软键盘Action点击事件(event_t)。
   *
   *
   */
 IM_ACTION : EVT_IM_ACTION(),

  /**
   * 请求更新软键盘上的Action按钮的信息(im_action_button_info_event_t)。
   *
   *
   */
 IM_ACTION_INFO : EVT_IM_ACTION_INFO(),

  /**
   * 开始拖动(event_t)。
   *
   *
   */
 DRAG_START : EVT_DRAG_START(),

  /**
   * 拖动(event_t)。
   *
   *
   */
 DRAG : EVT_DRAG(),

  /**
   * 结束拖动(event_t)。
   *
   *
   */
 DRAG_END : EVT_DRAG_END(),

  /**
   * 在指定的时间内(WITH_SCREEN_SAVER_TIME)，没有用户输入事件，由窗口管理器触发。
   *
   *
   */
 SCREEN_SAVER : EVT_SCREEN_SAVER(),

  /**
   * 内存不足(event_t)。
   *
   *
   */
 LOW_MEMORY : EVT_LOW_MEMORY(),

  /**
   * 内存耗尽(event_t)。
   *
   *
   */
 OUT_OF_MEMORY : EVT_OUT_OF_MEMORY(),

  /**
   * 屏幕即将旋转(event_t)。
   *
   *
   */
 ORIENTATION_WILL_CHANGED : EVT_ORIENTATION_WILL_CHANGED(),

  /**
   * 屏幕旋转(event_t)。
   *
   *
   */
 ORIENTATION_CHANGED : EVT_ORIENTATION_CHANGED(),

  /**
   * 控件创建事件(event_t)。
   *
   *
   */
 WIDGET_CREATED : EVT_WIDGET_CREATED(),

  /**
   * 请求退出应用程序事件。
   *点击原生窗口关闭按钮时，通过窗口管理器触发，注册该事件并返回RET_STOP，可以阻止窗口关闭。
   *
   *
   */
 REQUEST_QUIT_APP : EVT_REQUEST_QUIT_APP(),

  /**
   * 主题变化(event_t)。
   *
   *
   */
 THEME_CHANGED : EVT_THEME_CHANGED(),

  /**
   * event queue其它请求编号起始值。
   *
   *
   */
 REQ_START : EVT_REQ_START(),

  /**
   * 用户定义事件起始值。
   *
   *
   */
 USER_START : EVT_USER_START(),

  /**
   * 无效事件名称。
   *
   *
   */
 NONE : EVT_NONE(),

  /**
   * 对象的属性即将改变的事件名(prop_change_event_t)。
   *
   *
   */
 PROP_WILL_CHANGE : EVT_PROP_WILL_CHANGE(),

  /**
   * 对象的属性改变的事件名(prop_change_event_t)。
   *
   *
   */
 PROP_CHANGED : EVT_PROP_CHANGED(),

  /**
   * 即将增加和删除集合中的项目(event_t)。
   *
   *
   */
 ITEMS_WILL_CHANGE : EVT_ITEMS_WILL_CHANGE(),

  /**
   * 完成增加和删除集合中的项目(event_t)。
   *
   *
   */
 ITEMS_CHANGED : EVT_ITEMS_CHANGED(),

  /**
   * 对象的属性改变的事件名(props_event_t)。
   *
   *
   */
 PROPS_CHANGED : EVT_PROPS_CHANGED(),

  /**
   * 进度状态(progress_event_t)。
   *
   *
   */
 PROGRESS : EVT_PROGRESS(),

  /**
   * 对象销毁事件名(event_t)。
   *
   *
   */
 DESTROY : EVT_DESTROY(),
};

global.font_manager_unload_font = function( fm, name, size ){
  global.__AwtkSnapshot.push(`funtion  font_manager_unload_font( fm, name, size ) :${fm}, ${name}, ${size}`)
  return undefined
}

global.font_manager_unload_all = function( fm ){
  global.__AwtkSnapshot.push(`funtion  font_manager_unload_all( fm ) :${fm}`)
  return undefined
}

global.GLYPH_FMT_ALPHA = function(){
 return "GLYPH_FMT_ALPHA"
}

global.GLYPH_FMT_MONO = function(){
 return "GLYPH_FMT_MONO"
}

global.GLYPH_FMT_RGBA = function(){
 return "GLYPH_FMT_RGBA"
}


/**
 * 字模格式常量定义。
 *
 *
 */
global.TGlyphFormat = {

  /**
   * 每个像素占用1个字节(缺省)。
   *
   *
   */
 ALPHA : GLYPH_FMT_ALPHA(),

  /**
   * 每个像素占用1个比特。
   *
   *
   */
 MONO : GLYPH_FMT_MONO(),

  /**
   * 每个像素占用4个字节。
   *
   *
   */
 RGBA : GLYPH_FMT_RGBA(),
};

global.idle_add = function( on_idle, ctx ){
  global.__AwtkSnapshot.push(`funtion  idle_add( on_idle, ctx ) :${on_idle}, ${ctx}`)
  return undefined
}

global.idle_remove = function( idle_id ){
  global.__AwtkSnapshot.push(`funtion  idle_remove( idle_id ) :${idle_id}`)
  return undefined
}

global.value_set_bool = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_bool( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_bool = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_bool( v ) :${v}`)
  return undefined
}

global.value_set_int8 = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_int8( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_int8 = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_int8( v ) :${v}`)
  return undefined
}

global.value_set_uint8 = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_uint8( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_uint8 = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_uint8( v ) :${v}`)
  return undefined
}

global.value_set_int16 = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_int16( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_int16 = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_int16( v ) :${v}`)
  return undefined
}

global.value_set_uint16 = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_uint16( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_uint16 = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_uint16( v ) :${v}`)
  return undefined
}

global.value_set_int32 = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_int32( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_int32 = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_int32( v ) :${v}`)
  return undefined
}

global.value_set_uint32 = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_uint32( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_set_int64 = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_int64( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_int64 = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_int64( v ) :${v}`)
  return undefined
}

global.value_set_uint64 = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_uint64( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_uint64 = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_uint64( v ) :${v}`)
  return undefined
}

global.value_set_float = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_float( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_float32 = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_float32( v ) :${v}`)
  return undefined
}

global.value_set_double = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_double( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_double = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_double( v ) :${v}`)
  return undefined
}

global.value_dup_str = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_dup_str( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_str = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_str( v ) :${v}`)
  return undefined
}

global.value_is_null = function( value ){
  global.__AwtkSnapshot.push(`funtion  value_is_null( value ) :${value}`)
  return undefined
}

global.value_set_int = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_int( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_set_object = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_object( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_object = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_object( v ) :${v}`)
  return undefined
}

global.value_set_token = function( v, value ){
  global.__AwtkSnapshot.push(`funtion  value_set_token( v, value ) :${v}, ${value}`)
  return undefined
}

global.value_token = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_token( v ) :${v}`)
  return undefined
}

global.value_create = function(  ){
  global.__AwtkSnapshot.push(`funtion  value_create(  ) :`)
  return undefined
}

global.value_destroy = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_destroy( v ) :${v}`)
  return undefined
}

global.value_reset = function( v ){
  global.__AwtkSnapshot.push(`funtion  value_reset( v ) :${v}`)
  return undefined
}

global.value_cast = function( value ){
  global.__AwtkSnapshot.push(`funtion  value_cast( value ) :${value}`)
  return undefined
}

global.image_manager = function(  ){
  global.__AwtkSnapshot.push(`funtion  image_manager(  ) :`)
  return undefined
}

global.image_manager_get_bitmap = function( imm, name, image ){
  global.__AwtkSnapshot.push(`funtion  image_manager_get_bitmap( imm, name, image ) :${imm}, ${name}, ${image}`)
  return undefined
}

global.INPUT_TEXT = function(){
 return "INPUT_TEXT"
}

global.INPUT_INT = function(){
 return "INPUT_INT"
}

global.INPUT_UINT = function(){
 return "INPUT_UINT"
}

global.INPUT_HEX = function(){
 return "INPUT_HEX"
}

global.INPUT_FLOAT = function(){
 return "INPUT_FLOAT"
}

global.INPUT_UFLOAT = function(){
 return "INPUT_UFLOAT"
}

global.INPUT_EMAIL = function(){
 return "INPUT_EMAIL"
}

global.INPUT_PASSWORD = function(){
 return "INPUT_PASSWORD"
}

global.INPUT_PHONE = function(){
 return "INPUT_PHONE"
}

global.INPUT_CUSTOM = function(){
 return "INPUT_CUSTOM"
}


/**
 * 输入类型常量定义。
 *
 *
 */
global.TInputType = {

  /**
   * 文本。
   *
   *
   */
 TEXT : INPUT_TEXT(),

  /**
   * 整数。
   *
   *
   */
 INT : INPUT_INT(),

  /**
   * 非负整数。
   *
   *
   */
 UINT : INPUT_UINT(),

  /**
   * 16进制整数。
   *
   *
   */
 HEX : INPUT_HEX(),

  /**
   * 浮点数。
   *
   *
   */
 FLOAT : INPUT_FLOAT(),

  /**
   * 非负浮点数。
   *
   *
   */
 UFLOAT : INPUT_UFLOAT(),

  /**
   * 邮件地址。
   *
   *
   */
 EMAIL : INPUT_EMAIL(),

  /**
   * 密码。
   *
   *
   */
 PASSWORD : INPUT_PASSWORD(),

  /**
   * 电话号码。
   *
   *
   */
 PHONE : INPUT_PHONE(),

  /**
   * 使用自定义的软键盘(如计算器等应用不希望弹出系统软键盘)。
   *
   *
   */
 CUSTOM : INPUT_CUSTOM(),
};

global.VALUE_TYPE_INVALID = function(){
 return "VALUE_TYPE_INVALID"
}

global.VALUE_TYPE_BOOL = function(){
 return "VALUE_TYPE_BOOL"
}

global.VALUE_TYPE_INT8 = function(){
 return "VALUE_TYPE_INT8"
}

global.VALUE_TYPE_UINT8 = function(){
 return "VALUE_TYPE_UINT8"
}

global.VALUE_TYPE_INT16 = function(){
 return "VALUE_TYPE_INT16"
}

global.VALUE_TYPE_UINT16 = function(){
 return "VALUE_TYPE_UINT16"
}

global.VALUE_TYPE_INT32 = function(){
 return "VALUE_TYPE_INT32"
}

global.VALUE_TYPE_UINT32 = function(){
 return "VALUE_TYPE_UINT32"
}

global.VALUE_TYPE_INT64 = function(){
 return "VALUE_TYPE_INT64"
}

global.VALUE_TYPE_UINT64 = function(){
 return "VALUE_TYPE_UINT64"
}

global.VALUE_TYPE_POINTER = function(){
 return "VALUE_TYPE_POINTER"
}

global.VALUE_TYPE_FLOAT = function(){
 return "VALUE_TYPE_FLOAT"
}

global.VALUE_TYPE_FLOAT32 = function(){
 return "VALUE_TYPE_FLOAT32"
}

global.VALUE_TYPE_DOUBLE = function(){
 return "VALUE_TYPE_DOUBLE"
}

global.VALUE_TYPE_STRING = function(){
 return "VALUE_TYPE_STRING"
}

global.VALUE_TYPE_WSTRING = function(){
 return "VALUE_TYPE_WSTRING"
}

global.VALUE_TYPE_OBJECT = function(){
 return "VALUE_TYPE_OBJECT"
}

global.VALUE_TYPE_SIZED_STRING = function(){
 return "VALUE_TYPE_SIZED_STRING"
}

global.VALUE_TYPE_BINARY = function(){
 return "VALUE_TYPE_BINARY"
}

global.VALUE_TYPE_UBJSON = function(){
 return "VALUE_TYPE_UBJSON"
}

global.VALUE_TYPE_TOKEN = function(){
 return "VALUE_TYPE_TOKEN"
}


/**
 * 类型常量定义。
 *
 *
 */
global.TValueType = {

  /**
   * 无效类型。
   *
   *
   */
 INVALID : VALUE_TYPE_INVALID(),

  /**
   * BOOL类型。
   *
   *
   */
 BOOL : VALUE_TYPE_BOOL(),

  /**
   * int8_t类型。
   *
   *
   */
 INT8 : VALUE_TYPE_INT8(),

  /**
   * uint8_t类型。
   *
   *
   */
 UINT8 : VALUE_TYPE_UINT8(),

  /**
   * int16_t类型。
   *
   *
   */
 INT16 : VALUE_TYPE_INT16(),

  /**
   * uint16_t类型。
   *
   *
   */
 UINT16 : VALUE_TYPE_UINT16(),

  /**
   * int32_t类型。
   *
   *
   */
 INT32 : VALUE_TYPE_INT32(),

  /**
   * uint32_t类型。
   *
   *
   */
 UINT32 : VALUE_TYPE_UINT32(),

  /**
   * int64_t类型。
   *
   *
   */
 INT64 : VALUE_TYPE_INT64(),

  /**
   * uint64_t类型。
   *
   *
   */
 UINT64 : VALUE_TYPE_UINT64(),

  /**
   * void*类型。
   *
   *
   */
 POINTER : VALUE_TYPE_POINTER(),

  /**
   * float_t类型。
   *
   *
   */
 FLOAT : VALUE_TYPE_FLOAT(),

  /**
   * float类型。
   *
   *
   */
 FLOAT32 : VALUE_TYPE_FLOAT32(),

  /**
   * double类型。
   *
   *
   */
 DOUBLE : VALUE_TYPE_DOUBLE(),

  /**
   * char*类型。
   *
   *
   */
 STRING : VALUE_TYPE_STRING(),

  /**
   * wchar_t*类型。
   *
   *
   */
 WSTRING : VALUE_TYPE_WSTRING(),

  /**
   * object_t*类型。
   *
   *
   */
 OBJECT : VALUE_TYPE_OBJECT(),

  /**
   * 带长度的字符串。
   *
   *
   */
 SIZED_STRING : VALUE_TYPE_SIZED_STRING(),

  /**
   * 二进制数据。
   *
   *
   */
 BINARY : VALUE_TYPE_BINARY(),

  /**
   * 二进制数据(UBJSON)。
   *
   *
   */
 UBJSON : VALUE_TYPE_UBJSON(),

  /**
   * 特殊用途。
   *
   *
   */
 TOKEN : VALUE_TYPE_TOKEN(),
};

global.input_method_commit_text = function( im, text ){
  global.__AwtkSnapshot.push(`funtion  input_method_commit_text( im, text ) :${im}, ${text}`)
  return undefined
}

global.input_method_dispatch_key = function( im, key ){
  global.__AwtkSnapshot.push(`funtion  input_method_dispatch_key( im, key ) :${im}, ${key}`)
  return undefined
}

global.input_method = function(  ){
  global.__AwtkSnapshot.push(`funtion  input_method(  ) :`)
  return undefined
}

global.TK_KEY_RETURN = function(){
 return "TK_KEY_RETURN"
}

global.TK_KEY_ESCAPE = function(){
 return "TK_KEY_ESCAPE"
}

global.TK_KEY_BACKSPACE = function(){
 return "TK_KEY_BACKSPACE"
}

global.TK_KEY_TAB = function(){
 return "TK_KEY_TAB"
}

global.TK_KEY_SPACE = function(){
 return "TK_KEY_SPACE"
}

global.TK_KEY_EXCLAIM = function(){
 return "TK_KEY_EXCLAIM"
}

global.TK_KEY_QUOTEDBL = function(){
 return "TK_KEY_QUOTEDBL"
}

global.TK_KEY_HASH = function(){
 return "TK_KEY_HASH"
}

global.TK_KEY_PERCENT = function(){
 return "TK_KEY_PERCENT"
}

global.TK_KEY_DOLLAR = function(){
 return "TK_KEY_DOLLAR"
}

global.TK_KEY_AMPERSAND = function(){
 return "TK_KEY_AMPERSAND"
}

global.TK_KEY_QUOTE = function(){
 return "TK_KEY_QUOTE"
}

global.TK_KEY_LEFTPAREN = function(){
 return "TK_KEY_LEFTPAREN"
}

global.TK_KEY_RIGHTPAREN = function(){
 return "TK_KEY_RIGHTPAREN"
}

global.TK_KEY_ASTERISK = function(){
 return "TK_KEY_ASTERISK"
}

global.TK_KEY_PLUS = function(){
 return "TK_KEY_PLUS"
}

global.TK_KEY_COMMA = function(){
 return "TK_KEY_COMMA"
}

global.TK_KEY_MINUS = function(){
 return "TK_KEY_MINUS"
}

global.TK_KEY_PERIOD = function(){
 return "TK_KEY_PERIOD"
}

global.TK_KEY_SLASH = function(){
 return "TK_KEY_SLASH"
}

global.TK_KEY_0 = function(){
 return "TK_KEY_0"
}

global.TK_KEY_1 = function(){
 return "TK_KEY_1"
}

global.TK_KEY_2 = function(){
 return "TK_KEY_2"
}

global.TK_KEY_3 = function(){
 return "TK_KEY_3"
}

global.TK_KEY_4 = function(){
 return "TK_KEY_4"
}

global.TK_KEY_5 = function(){
 return "TK_KEY_5"
}

global.TK_KEY_6 = function(){
 return "TK_KEY_6"
}

global.TK_KEY_7 = function(){
 return "TK_KEY_7"
}

global.TK_KEY_8 = function(){
 return "TK_KEY_8"
}

global.TK_KEY_9 = function(){
 return "TK_KEY_9"
}

global.TK_KEY_COLON = function(){
 return "TK_KEY_COLON"
}

global.TK_KEY_SEMICOLON = function(){
 return "TK_KEY_SEMICOLON"
}

global.TK_KEY_LESS = function(){
 return "TK_KEY_LESS"
}

global.TK_KEY_EQUAL = function(){
 return "TK_KEY_EQUAL"
}

global.TK_KEY_GREATER = function(){
 return "TK_KEY_GREATER"
}

global.TK_KEY_QUESTION = function(){
 return "TK_KEY_QUESTION"
}

global.TK_KEY_AT = function(){
 return "TK_KEY_AT"
}

global.TK_KEY_LEFTBRACKET = function(){
 return "TK_KEY_LEFTBRACKET"
}

global.TK_KEY_BACKSLASH = function(){
 return "TK_KEY_BACKSLASH"
}

global.TK_KEY_RIGHTBRACKET = function(){
 return "TK_KEY_RIGHTBRACKET"
}

global.TK_KEY_CARET = function(){
 return "TK_KEY_CARET"
}

global.TK_KEY_UNDERSCORE = function(){
 return "TK_KEY_UNDERSCORE"
}

global.TK_KEY_BACKQUOTE = function(){
 return "TK_KEY_BACKQUOTE"
}

global.TK_KEY_a = function(){
 return "TK_KEY_a"
}

global.TK_KEY_b = function(){
 return "TK_KEY_b"
}

global.TK_KEY_c = function(){
 return "TK_KEY_c"
}

global.TK_KEY_d = function(){
 return "TK_KEY_d"
}

global.TK_KEY_e = function(){
 return "TK_KEY_e"
}

global.TK_KEY_f = function(){
 return "TK_KEY_f"
}

global.TK_KEY_g = function(){
 return "TK_KEY_g"
}

global.TK_KEY_h = function(){
 return "TK_KEY_h"
}

global.TK_KEY_i = function(){
 return "TK_KEY_i"
}

global.TK_KEY_j = function(){
 return "TK_KEY_j"
}

global.TK_KEY_k = function(){
 return "TK_KEY_k"
}

global.TK_KEY_l = function(){
 return "TK_KEY_l"
}

global.TK_KEY_m = function(){
 return "TK_KEY_m"
}

global.TK_KEY_n = function(){
 return "TK_KEY_n"
}

global.TK_KEY_o = function(){
 return "TK_KEY_o"
}

global.TK_KEY_p = function(){
 return "TK_KEY_p"
}

global.TK_KEY_q = function(){
 return "TK_KEY_q"
}

global.TK_KEY_r = function(){
 return "TK_KEY_r"
}

global.TK_KEY_s = function(){
 return "TK_KEY_s"
}

global.TK_KEY_t = function(){
 return "TK_KEY_t"
}

global.TK_KEY_u = function(){
 return "TK_KEY_u"
}

global.TK_KEY_v = function(){
 return "TK_KEY_v"
}

global.TK_KEY_w = function(){
 return "TK_KEY_w"
}

global.TK_KEY_x = function(){
 return "TK_KEY_x"
}

global.TK_KEY_y = function(){
 return "TK_KEY_y"
}

global.TK_KEY_z = function(){
 return "TK_KEY_z"
}

global.TK_KEY_A = function(){
 return "TK_KEY_A"
}

global.TK_KEY_B = function(){
 return "TK_KEY_B"
}

global.TK_KEY_C = function(){
 return "TK_KEY_C"
}

global.TK_KEY_D = function(){
 return "TK_KEY_D"
}

global.TK_KEY_E = function(){
 return "TK_KEY_E"
}

global.TK_KEY_F = function(){
 return "TK_KEY_F"
}

global.TK_KEY_G = function(){
 return "TK_KEY_G"
}

global.TK_KEY_H = function(){
 return "TK_KEY_H"
}

global.TK_KEY_I = function(){
 return "TK_KEY_I"
}

global.TK_KEY_J = function(){
 return "TK_KEY_J"
}

global.TK_KEY_K = function(){
 return "TK_KEY_K"
}

global.TK_KEY_L = function(){
 return "TK_KEY_L"
}

global.TK_KEY_M = function(){
 return "TK_KEY_M"
}

global.TK_KEY_N = function(){
 return "TK_KEY_N"
}

global.TK_KEY_O = function(){
 return "TK_KEY_O"
}

global.TK_KEY_P = function(){
 return "TK_KEY_P"
}

global.TK_KEY_Q = function(){
 return "TK_KEY_Q"
}

global.TK_KEY_R = function(){
 return "TK_KEY_R"
}

global.TK_KEY_S = function(){
 return "TK_KEY_S"
}

global.TK_KEY_T = function(){
 return "TK_KEY_T"
}

global.TK_KEY_U = function(){
 return "TK_KEY_U"
}

global.TK_KEY_V = function(){
 return "TK_KEY_V"
}

global.TK_KEY_W = function(){
 return "TK_KEY_W"
}

global.TK_KEY_X = function(){
 return "TK_KEY_X"
}

global.TK_KEY_Y = function(){
 return "TK_KEY_Y"
}

global.TK_KEY_Z = function(){
 return "TK_KEY_Z"
}

global.TK_KEY_DOT = function(){
 return "TK_KEY_DOT"
}

global.TK_KEY_DELETE = function(){
 return "TK_KEY_DELETE"
}

global.TK_KEY_LEFTBRACE = function(){
 return "TK_KEY_LEFTBRACE"
}

global.TK_KEY_RIGHTBRACE = function(){
 return "TK_KEY_RIGHTBRACE"
}

global.TK_KEY_LSHIFT = function(){
 return "TK_KEY_LSHIFT"
}

global.TK_KEY_RSHIFT = function(){
 return "TK_KEY_RSHIFT"
}

global.TK_KEY_LCTRL = function(){
 return "TK_KEY_LCTRL"
}

global.TK_KEY_RCTRL = function(){
 return "TK_KEY_RCTRL"
}

global.TK_KEY_LALT = function(){
 return "TK_KEY_LALT"
}

global.TK_KEY_RALT = function(){
 return "TK_KEY_RALT"
}

global.TK_KEY_CAPSLOCK = function(){
 return "TK_KEY_CAPSLOCK"
}

global.TK_KEY_HOME = function(){
 return "TK_KEY_HOME"
}

global.TK_KEY_END = function(){
 return "TK_KEY_END"
}

global.TK_KEY_INSERT = function(){
 return "TK_KEY_INSERT"
}

global.TK_KEY_UP = function(){
 return "TK_KEY_UP"
}

global.TK_KEY_DOWN = function(){
 return "TK_KEY_DOWN"
}

global.TK_KEY_LEFT = function(){
 return "TK_KEY_LEFT"
}

global.TK_KEY_RIGHT = function(){
 return "TK_KEY_RIGHT"
}

global.TK_KEY_PAGEUP = function(){
 return "TK_KEY_PAGEUP"
}

global.TK_KEY_PAGEDOWN = function(){
 return "TK_KEY_PAGEDOWN"
}

global.TK_KEY_F1 = function(){
 return "TK_KEY_F1"
}

global.TK_KEY_F2 = function(){
 return "TK_KEY_F2"
}

global.TK_KEY_F3 = function(){
 return "TK_KEY_F3"
}

global.TK_KEY_F4 = function(){
 return "TK_KEY_F4"
}

global.TK_KEY_F5 = function(){
 return "TK_KEY_F5"
}

global.TK_KEY_F6 = function(){
 return "TK_KEY_F6"
}

global.TK_KEY_F7 = function(){
 return "TK_KEY_F7"
}

global.TK_KEY_F8 = function(){
 return "TK_KEY_F8"
}

global.TK_KEY_F9 = function(){
 return "TK_KEY_F9"
}

global.TK_KEY_F10 = function(){
 return "TK_KEY_F10"
}

global.TK_KEY_F11 = function(){
 return "TK_KEY_F11"
}

global.TK_KEY_F12 = function(){
 return "TK_KEY_F12"
}

global.TK_KEY_MENU = function(){
 return "TK_KEY_MENU"
}

global.TK_KEY_COMMAND = function(){
 return "TK_KEY_COMMAND"
}

global.TK_KEY_BACK = function(){
 return "TK_KEY_BACK"
}

global.TK_KEY_CANCEL = function(){
 return "TK_KEY_CANCEL"
}


/**
 * key code。
 *
 *
 */
global.TKeyCode = {

  /**
   * TK_KEY_RETURN
   *
   *
   */
 KEY_RETURN : TK_KEY_RETURN(),

  /**
   * TK_KEY_ESCAPE
   *
   *
   */
 KEY_ESCAPE : TK_KEY_ESCAPE(),

  /**
   * TK_KEY_BACKSPACE
   *
   *
   */
 KEY_BACKSPACE : TK_KEY_BACKSPACE(),

  /**
   * TK_KEY_TAB
   *
   *
   */
 KEY_TAB : TK_KEY_TAB(),

  /**
   * TK_KEY_SPACE
   *
   *
   */
 KEY_SPACE : TK_KEY_SPACE(),

  /**
   * TK_KEY_EXCLAIM
   *
   *
   */
 KEY_EXCLAIM : TK_KEY_EXCLAIM(),

  /**
   * TK_KEY_QUOTEDBL
   *
   *
   */
 KEY_QUOTEDBL : TK_KEY_QUOTEDBL(),

  /**
   * TK_KEY_HASH
   *
   *
   */
 KEY_HASH : TK_KEY_HASH(),

  /**
   * TK_KEY_PERCENT
   *
   *
   */
 KEY_PERCENT : TK_KEY_PERCENT(),

  /**
   * TK_KEY_DOLLAR
   *
   *
   */
 KEY_DOLLAR : TK_KEY_DOLLAR(),

  /**
   * TK_KEY_AMPERSAND
   *
   *
   */
 KEY_AMPERSAND : TK_KEY_AMPERSAND(),

  /**
   * TK_KEY_QUOTE
   *
   *
   */
 KEY_QUOTE : TK_KEY_QUOTE(),

  /**
   * TK_KEY_LEFTPAREN
   *
   *
   */
 KEY_LEFTPAREN : TK_KEY_LEFTPAREN(),

  /**
   * TK_KEY_RIGHTPAREN
   *
   *
   */
 KEY_RIGHTPAREN : TK_KEY_RIGHTPAREN(),

  /**
   * TK_KEY_ASTERISK
   *
   *
   */
 KEY_ASTERISK : TK_KEY_ASTERISK(),

  /**
   * TK_KEY_PLUS
   *
   *
   */
 KEY_PLUS : TK_KEY_PLUS(),

  /**
   * TK_KEY_COMMA
   *
   *
   */
 KEY_COMMA : TK_KEY_COMMA(),

  /**
   * TK_KEY_MINUS
   *
   *
   */
 KEY_MINUS : TK_KEY_MINUS(),

  /**
   * TK_KEY_PERIOD
   *
   *
   */
 KEY_PERIOD : TK_KEY_PERIOD(),

  /**
   * TK_KEY_SLASH
   *
   *
   */
 KEY_SLASH : TK_KEY_SLASH(),

  /**
   * TK_KEY_0
   *
   *
   */
 KEY_0 : TK_KEY_0(),

  /**
   * TK_KEY_1
   *
   *
   */
 KEY_1 : TK_KEY_1(),

  /**
   * TK_KEY_2
   *
   *
   */
 KEY_2 : TK_KEY_2(),

  /**
   * TK_KEY_3
   *
   *
   */
 KEY_3 : TK_KEY_3(),

  /**
   * TK_KEY_4
   *
   *
   */
 KEY_4 : TK_KEY_4(),

  /**
   * TK_KEY_5
   *
   *
   */
 KEY_5 : TK_KEY_5(),

  /**
   * TK_KEY_6
   *
   *
   */
 KEY_6 : TK_KEY_6(),

  /**
   * TK_KEY_7
   *
   *
   */
 KEY_7 : TK_KEY_7(),

  /**
   * TK_KEY_8
   *
   *
   */
 KEY_8 : TK_KEY_8(),

  /**
   * TK_KEY_9
   *
   *
   */
 KEY_9 : TK_KEY_9(),

  /**
   * TK_KEY_COLON
   *
   *
   */
 KEY_COLON : TK_KEY_COLON(),

  /**
   * TK_KEY_SEMICOLON
   *
   *
   */
 KEY_SEMICOLON : TK_KEY_SEMICOLON(),

  /**
   * TK_KEY_LESS
   *
   *
   */
 KEY_LESS : TK_KEY_LESS(),

  /**
   * TK_KEY_EQUAL
   *
   *
   */
 KEY_EQUAL : TK_KEY_EQUAL(),

  /**
   * TK_KEY_GREATER
   *
   *
   */
 KEY_GREATER : TK_KEY_GREATER(),

  /**
   * TK_KEY_QUESTION
   *
   *
   */
 KEY_QUESTION : TK_KEY_QUESTION(),

  /**
   * TK_KEY_AT
   *
   *
   */
 KEY_AT : TK_KEY_AT(),

  /**
   * TK_KEY_LEFTBRACKET
   *
   *
   */
 KEY_LEFTBRACKET : TK_KEY_LEFTBRACKET(),

  /**
   * TK_KEY_BACKSLASH
   *
   *
   */
 KEY_BACKSLASH : TK_KEY_BACKSLASH(),

  /**
   * TK_KEY_RIGHTBRACKET
   *
   *
   */
 KEY_RIGHTBRACKET : TK_KEY_RIGHTBRACKET(),

  /**
   * TK_KEY_CARET
   *
   *
   */
 KEY_CARET : TK_KEY_CARET(),

  /**
   * TK_KEY_UNDERSCORE
   *
   *
   */
 KEY_UNDERSCORE : TK_KEY_UNDERSCORE(),

  /**
   * TK_KEY_BACKQUOTE
   *
   *
   */
 KEY_BACKQUOTE : TK_KEY_BACKQUOTE(),

  /**
   * TK_KEY_a
   *
   *
   */
 KEY_a : TK_KEY_a(),

  /**
   * TK_KEY_b
   *
   *
   */
 KEY_b : TK_KEY_b(),

  /**
   * TK_KEY_c
   *
   *
   */
 KEY_c : TK_KEY_c(),

  /**
   * TK_KEY_d
   *
   *
   */
 KEY_d : TK_KEY_d(),

  /**
   * TK_KEY_e
   *
   *
   */
 KEY_e : TK_KEY_e(),

  /**
   * TK_KEY_f
   *
   *
   */
 KEY_f : TK_KEY_f(),

  /**
   * TK_KEY_g
   *
   *
   */
 KEY_g : TK_KEY_g(),

  /**
   * TK_KEY_h
   *
   *
   */
 KEY_h : TK_KEY_h(),

  /**
   * TK_KEY_i
   *
   *
   */
 KEY_i : TK_KEY_i(),

  /**
   * TK_KEY_j
   *
   *
   */
 KEY_j : TK_KEY_j(),

  /**
   * TK_KEY_k
   *
   *
   */
 KEY_k : TK_KEY_k(),

  /**
   * TK_KEY_l
   *
   *
   */
 KEY_l : TK_KEY_l(),

  /**
   * TK_KEY_m
   *
   *
   */
 KEY_m : TK_KEY_m(),

  /**
   * TK_KEY_n
   *
   *
   */
 KEY_n : TK_KEY_n(),

  /**
   * TK_KEY_o
   *
   *
   */
 KEY_o : TK_KEY_o(),

  /**
   * TK_KEY_p
   *
   *
   */
 KEY_p : TK_KEY_p(),

  /**
   * TK_KEY_q
   *
   *
   */
 KEY_q : TK_KEY_q(),

  /**
   * TK_KEY_r
   *
   *
   */
 KEY_r : TK_KEY_r(),

  /**
   * TK_KEY_s
   *
   *
   */
 KEY_s : TK_KEY_s(),

  /**
   * TK_KEY_t
   *
   *
   */
 KEY_t : TK_KEY_t(),

  /**
   * TK_KEY_u
   *
   *
   */
 KEY_u : TK_KEY_u(),

  /**
   * TK_KEY_v
   *
   *
   */
 KEY_v : TK_KEY_v(),

  /**
   * TK_KEY_w
   *
   *
   */
 KEY_w : TK_KEY_w(),

  /**
   * TK_KEY_x
   *
   *
   */
 KEY_x : TK_KEY_x(),

  /**
   * TK_KEY_y
   *
   *
   */
 KEY_y : TK_KEY_y(),

  /**
   * TK_KEY_z
   *
   *
   */
 KEY_z : TK_KEY_z(),

  /**
   * TK_KEY_A
   *
   *
   */
 KEY_A : TK_KEY_A(),

  /**
   * TK_KEY_B
   *
   *
   */
 KEY_B : TK_KEY_B(),

  /**
   * TK_KEY_C
   *
   *
   */
 KEY_C : TK_KEY_C(),

  /**
   * TK_KEY_D
   *
   *
   */
 KEY_D : TK_KEY_D(),

  /**
   * TK_KEY_E
   *
   *
   */
 KEY_E : TK_KEY_E(),

  /**
   * TK_KEY_F
   *
   *
   */
 KEY_F : TK_KEY_F(),

  /**
   * TK_KEY_G
   *
   *
   */
 KEY_G : TK_KEY_G(),

  /**
   * TK_KEY_H
   *
   *
   */
 KEY_H : TK_KEY_H(),

  /**
   * TK_KEY_I
   *
   *
   */
 KEY_I : TK_KEY_I(),

  /**
   * TK_KEY_J
   *
   *
   */
 KEY_J : TK_KEY_J(),

  /**
   * TK_KEY_K
   *
   *
   */
 KEY_K : TK_KEY_K(),

  /**
   * TK_KEY_L
   *
   *
   */
 KEY_L : TK_KEY_L(),

  /**
   * TK_KEY_M
   *
   *
   */
 KEY_M : TK_KEY_M(),

  /**
   * TK_KEY_N
   *
   *
   */
 KEY_N : TK_KEY_N(),

  /**
   * TK_KEY_O
   *
   *
   */
 KEY_O : TK_KEY_O(),

  /**
   * TK_KEY_P
   *
   *
   */
 KEY_P : TK_KEY_P(),

  /**
   * TK_KEY_Q
   *
   *
   */
 KEY_Q : TK_KEY_Q(),

  /**
   * TK_KEY_R
   *
   *
   */
 KEY_R : TK_KEY_R(),

  /**
   * TK_KEY_S
   *
   *
   */
 KEY_S : TK_KEY_S(),

  /**
   * TK_KEY_T
   *
   *
   */
 KEY_T : TK_KEY_T(),

  /**
   * TK_KEY_U
   *
   *
   */
 KEY_U : TK_KEY_U(),

  /**
   * TK_KEY_V
   *
   *
   */
 KEY_V : TK_KEY_V(),

  /**
   * TK_KEY_W
   *
   *
   */
 KEY_W : TK_KEY_W(),

  /**
   * TK_KEY_X
   *
   *
   */
 KEY_X : TK_KEY_X(),

  /**
   * TK_KEY_Y
   *
   *
   */
 KEY_Y : TK_KEY_Y(),

  /**
   * TK_KEY_Z
   *
   *
   */
 KEY_Z : TK_KEY_Z(),

  /**
   * TK_KEY_DOT
   *
   *
   */
 KEY_DOT : TK_KEY_DOT(),

  /**
   * TK_KEY_DELETE
   *
   *
   */
 KEY_DELETE : TK_KEY_DELETE(),

  /**
   * TK_KEY_LEFTBRACE
   *
   *
   */
 KEY_LEFTBRACE : TK_KEY_LEFTBRACE(),

  /**
   * TK_KEY_RIGHTBRACE
   *
   *
   */
 KEY_RIGHTBRACE : TK_KEY_RIGHTBRACE(),

  /**
   * TK_KEY_LSHIFT
   *
   *
   */
 KEY_LSHIFT : TK_KEY_LSHIFT(),

  /**
   * TK_KEY_RSHIFT
   *
   *
   */
 KEY_RSHIFT : TK_KEY_RSHIFT(),

  /**
   * TK_KEY_LCTRL
   *
   *
   */
 KEY_LCTRL : TK_KEY_LCTRL(),

  /**
   * TK_KEY_RCTRL
   *
   *
   */
 KEY_RCTRL : TK_KEY_RCTRL(),

  /**
   * TK_KEY_LALT
   *
   *
   */
 KEY_LALT : TK_KEY_LALT(),

  /**
   * TK_KEY_RALT
   *
   *
   */
 KEY_RALT : TK_KEY_RALT(),

  /**
   * TK_KEY_CAPSLOCK
   *
   *
   */
 KEY_CAPSLOCK : TK_KEY_CAPSLOCK(),

  /**
   * TK_KEY_HOME
   *
   *
   */
 KEY_HOME : TK_KEY_HOME(),

  /**
   * TK_KEY_END
   *
   *
   */
 KEY_END : TK_KEY_END(),

  /**
   * TK_KEY_INSERT
   *
   *
   */
 KEY_INSERT : TK_KEY_INSERT(),

  /**
   * TK_KEY_UP
   *
   *
   */
 KEY_UP : TK_KEY_UP(),

  /**
   * TK_KEY_DOWN
   *
   *
   */
 KEY_DOWN : TK_KEY_DOWN(),

  /**
   * TK_KEY_LEFT
   *
   *
   */
 KEY_LEFT : TK_KEY_LEFT(),

  /**
   * TK_KEY_RIGHT
   *
   *
   */
 KEY_RIGHT : TK_KEY_RIGHT(),

  /**
   * TK_KEY_PAGEUP
   *
   *
   */
 KEY_PAGEUP : TK_KEY_PAGEUP(),

  /**
   * TK_KEY_PAGEDOWN
   *
   *
   */
 KEY_PAGEDOWN : TK_KEY_PAGEDOWN(),

  /**
   * TK_KEY_F1
   *
   *
   */
 KEY_F1 : TK_KEY_F1(),

  /**
   * TK_KEY_F2
   *
   *
   */
 KEY_F2 : TK_KEY_F2(),

  /**
   * TK_KEY_F3
   *
   *
   */
 KEY_F3 : TK_KEY_F3(),

  /**
   * TK_KEY_F4
   *
   *
   */
 KEY_F4 : TK_KEY_F4(),

  /**
   * TK_KEY_F5
   *
   *
   */
 KEY_F5 : TK_KEY_F5(),

  /**
   * TK_KEY_F6
   *
   *
   */
 KEY_F6 : TK_KEY_F6(),

  /**
   * TK_KEY_F7
   *
   *
   */
 KEY_F7 : TK_KEY_F7(),

  /**
   * TK_KEY_F8
   *
   *
   */
 KEY_F8 : TK_KEY_F8(),

  /**
   * TK_KEY_F9
   *
   *
   */
 KEY_F9 : TK_KEY_F9(),

  /**
   * TK_KEY_F10
   *
   *
   */
 KEY_F10 : TK_KEY_F10(),

  /**
   * TK_KEY_F11
   *
   *
   */
 KEY_F11 : TK_KEY_F11(),

  /**
   * TK_KEY_F12
   *
   *
   */
 KEY_F12 : TK_KEY_F12(),

  /**
   * TK_KEY_MENU
   *
   *
   */
 KEY_MENU : TK_KEY_MENU(),

  /**
   * TK_KEY_COMMAND
   *
   *
   */
 KEY_COMMAND : TK_KEY_COMMAND(),

  /**
   * TK_KEY_BACK
   *
   *
   */
 KEY_BACK : TK_KEY_BACK(),

  /**
   * TK_KEY_CANCEL
   *
   *
   */
 KEY_CANCEL : TK_KEY_CANCEL(),
};

global.locale_info = function(  ){
  global.__AwtkSnapshot.push(`funtion  locale_info(  ) :`)
  return undefined
}

global.locale_info_tr = function( locale_info, text ){
  global.__AwtkSnapshot.push(`funtion  locale_info_tr( locale_info, text ) :${locale_info}, ${text}`)
  return undefined
}

global.locale_info_change = function( locale_info, language, country ){
  global.__AwtkSnapshot.push(`funtion  locale_info_change( locale_info, language, country ) :${locale_info}, ${language}, ${country}`)
  return undefined
}

global.locale_info_off = function( locale_info, id ){
  global.__AwtkSnapshot.push(`funtion  locale_info_off( locale_info, id ) :${locale_info}, ${id}`)
  return undefined
}

global.STYLE_ID_BG_COLOR = function(){
 return "STYLE_ID_BG_COLOR"
}

global.STYLE_ID_FG_COLOR = function(){
 return "STYLE_ID_FG_COLOR"
}

global.STYLE_ID_MASK_COLOR = function(){
 return "STYLE_ID_MASK_COLOR"
}

global.STYLE_ID_FONT_NAME = function(){
 return "STYLE_ID_FONT_NAME"
}

global.STYLE_ID_FONT_SIZE = function(){
 return "STYLE_ID_FONT_SIZE"
}

global.STYLE_ID_FONT_STYLE = function(){
 return "STYLE_ID_FONT_STYLE"
}

global.STYLE_ID_TEXT_COLOR = function(){
 return "STYLE_ID_TEXT_COLOR"
}

global.STYLE_ID_TIPS_TEXT_COLOR = function(){
 return "STYLE_ID_TIPS_TEXT_COLOR"
}

global.STYLE_ID_TEXT_ALIGN_H = function(){
 return "STYLE_ID_TEXT_ALIGN_H"
}

global.STYLE_ID_TEXT_ALIGN_V = function(){
 return "STYLE_ID_TEXT_ALIGN_V"
}

global.STYLE_ID_BORDER_COLOR = function(){
 return "STYLE_ID_BORDER_COLOR"
}

global.STYLE_ID_BORDER_WIDTH = function(){
 return "STYLE_ID_BORDER_WIDTH"
}

global.STYLE_ID_BORDER = function(){
 return "STYLE_ID_BORDER"
}

global.STYLE_ID_BG_IMAGE = function(){
 return "STYLE_ID_BG_IMAGE"
}

global.STYLE_ID_BG_IMAGE_DRAW_TYPE = function(){
 return "STYLE_ID_BG_IMAGE_DRAW_TYPE"
}

global.STYLE_ID_ICON = function(){
 return "STYLE_ID_ICON"
}

global.STYLE_ID_FG_IMAGE = function(){
 return "STYLE_ID_FG_IMAGE"
}

global.STYLE_ID_FG_IMAGE_DRAW_TYPE = function(){
 return "STYLE_ID_FG_IMAGE_DRAW_TYPE"
}

global.STYLE_ID_SPACER = function(){
 return "STYLE_ID_SPACER"
}

global.STYLE_ID_MARGIN = function(){
 return "STYLE_ID_MARGIN"
}

global.STYLE_ID_MARGIN_LEFT = function(){
 return "STYLE_ID_MARGIN_LEFT"
}

global.STYLE_ID_MARGIN_RIGHT = function(){
 return "STYLE_ID_MARGIN_RIGHT"
}

global.STYLE_ID_MARGIN_TOP = function(){
 return "STYLE_ID_MARGIN_TOP"
}

global.STYLE_ID_MARGIN_BOTTOM = function(){
 return "STYLE_ID_MARGIN_BOTTOM"
}

global.STYLE_ID_ICON_AT = function(){
 return "STYLE_ID_ICON_AT"
}

global.STYLE_ID_ACTIVE_ICON = function(){
 return "STYLE_ID_ACTIVE_ICON"
}

global.STYLE_ID_X_OFFSET = function(){
 return "STYLE_ID_X_OFFSET"
}

global.STYLE_ID_Y_OFFSET = function(){
 return "STYLE_ID_Y_OFFSET"
}

global.STYLE_ID_SELECTED_BG_COLOR = function(){
 return "STYLE_ID_SELECTED_BG_COLOR"
}

global.STYLE_ID_SELECTED_FG_COLOR = function(){
 return "STYLE_ID_SELECTED_FG_COLOR"
}

global.STYLE_ID_SELECTED_TEXT_COLOR = function(){
 return "STYLE_ID_SELECTED_TEXT_COLOR"
}

global.STYLE_ID_ROUND_RADIUS = function(){
 return "STYLE_ID_ROUND_RADIUS"
}


/**
 * style常量定义。
 *
 *
 */
global.TStyleId = {

  /**
   * 背景颜色。
   *
   *
   */
 _ID_BG_COLOR : STYLE_ID_BG_COLOR(),

  /**
   * 前景颜色。
   *
   *
   */
 _ID_FG_COLOR : STYLE_ID_FG_COLOR(),

  /**
   * 蒙版颜色。
   *
   *
   */
 _ID_MASK_COLOR : STYLE_ID_MASK_COLOR(),

  /**
   * 字体名称。
   *
   *
   */
 _ID_FONT_NAME : STYLE_ID_FONT_NAME(),

  /**
   * 字体大小。
   *
   *
   */
 _ID_FONT_SIZE : STYLE_ID_FONT_SIZE(),

  /**
   * 字体风格(粗体、斜体等)。
   *
   *
   */
 _ID_FONT_STYLE : STYLE_ID_FONT_STYLE(),

  /**
   * 文本颜色。
   *
   *
   */
 _ID_TEXT_COLOR : STYLE_ID_TEXT_COLOR(),

  /**
   * 提示文本颜色。
   *
   *
   */
 _ID_TIPS_TEXT_COLOR : STYLE_ID_TIPS_TEXT_COLOR(),

  /**
   * 文本水平对齐的方式。
   *
   *
   */
 _ID_TEXT_ALIGN_H : STYLE_ID_TEXT_ALIGN_H(),

  /**
   * 文本垂直对齐的方式。
   *
   *
   */
 _ID_TEXT_ALIGN_V : STYLE_ID_TEXT_ALIGN_V(),

  /**
   * 边框颜色。
   *
   *
   */
 _ID_BORDER_COLOR : STYLE_ID_BORDER_COLOR(),

  /**
   * 边框线宽。
   *
   *
   */
 _ID_BORDER_WIDTH : STYLE_ID_BORDER_WIDTH(),

  /**
   * 边框类型。
   *
   *
   */
 _ID_BORDER : STYLE_ID_BORDER(),

  /**
   * 图片的名称。
   *
   *
   */
 _ID_BG_IMAGE : STYLE_ID_BG_IMAGE(),

  /**
   * 图片的显示方式。
   *
   *
   */
 _ID_BG_IMAGE_DRAW_TYPE : STYLE_ID_BG_IMAGE_DRAW_TYPE(),

  /**
   * 图标的名称。
   *
   *
   */
 _ID_ICON : STYLE_ID_ICON(),

  /**
   * 图片的名称。
   *
   *
   */
 _ID_FG_IMAGE : STYLE_ID_FG_IMAGE(),

  /**
   * 图片的显示方式。
   *
   *
   */
 _ID_FG_IMAGE_DRAW_TYPE : STYLE_ID_FG_IMAGE_DRAW_TYPE(),

  /**
   * 间距。
   *
   *
   */
 _ID_SPACER : STYLE_ID_SPACER(),

  /**
   * 边距。
   *
   *
   */
 _ID_MARGIN : STYLE_ID_MARGIN(),

  /**
   * 左边距。
   *
   *
   */
 _ID_MARGIN_LEFT : STYLE_ID_MARGIN_LEFT(),

  /**
   * 右边距。
   *
   *
   */
 _ID_MARGIN_RIGHT : STYLE_ID_MARGIN_RIGHT(),

  /**
   * 顶边距。
   *
   *
   */
 _ID_MARGIN_TOP : STYLE_ID_MARGIN_TOP(),

  /**
   * 底边距。
   *
   *
   */
 _ID_MARGIN_BOTTOM : STYLE_ID_MARGIN_BOTTOM(),

  /**
   * 图标的位置。
   *
   *
   */
 _ID_ICON_AT : STYLE_ID_ICON_AT(),

  /**
   * Active图标的名称。
   *
   *
   */
 _ID_ACTIVE_ICON : STYLE_ID_ACTIVE_ICON(),

  /**
   * X方向的偏移，方便实现按下的效果。
   *
   *
   */
 _ID_X_OFFSET : STYLE_ID_X_OFFSET(),

  /**
   * Y方向的偏移，方便实现按下的效果。
   *
   *
   */
 _ID_Y_OFFSET : STYLE_ID_Y_OFFSET(),

  /**
   * 编辑器中选中区域的背景颜色。
   *
   *
   */
 _ID_SELECTED_BG_COLOR : STYLE_ID_SELECTED_BG_COLOR(),

  /**
   * 编辑器中选中区域的前景颜色。
   *
   *
   */
 _ID_SELECTED_FG_COLOR : STYLE_ID_SELECTED_FG_COLOR(),

  /**
   * 编辑器中选中区域的文本颜色。
   *
   *
   */
 _ID_SELECTED_TEXT_COLOR : STYLE_ID_SELECTED_TEXT_COLOR(),

  /**
   * 圆角半径(仅在WITH_VGCANVAS定义时生效)。
   *
   *
   */
 _ID_ROUND_RADIUS : STYLE_ID_ROUND_RADIUS(),
};

global.style_notify_widget_state_changed = function( s, widget ){
  global.__AwtkSnapshot.push(`funtion  style_notify_widget_state_changed( s, widget ) :${s}, ${widget}`)
  return undefined
}

global.style_is_valid = function( s ){
  global.__AwtkSnapshot.push(`funtion  style_is_valid( s ) :${s}`)
  return undefined
}

global.style_get_int = function( s, name, defval ){
  global.__AwtkSnapshot.push(`funtion  style_get_int( s, name, defval ) :${s}, ${name}, ${defval}`)
  return undefined
}

global.style_get_str = function( s, name, defval ){
  global.__AwtkSnapshot.push(`funtion  style_get_str( s, name, defval ) :${s}, ${name}, ${defval}`)
  return undefined
}

global.style_set = function( s, state, name, value ){
  global.__AwtkSnapshot.push(`funtion  style_set( s, state, name, value ) :${s}, ${state}, ${name}, ${value}`)
  return undefined
}

global.style_is_mutable = function( s ){
  global.__AwtkSnapshot.push(`funtion  style_is_mutable( s ) :${s}`)
  return undefined
}

global.theme = function(  ){
  global.__AwtkSnapshot.push(`funtion  theme(  ) :`)
  return undefined
}

global.timer_add = function( on_timer, ctx, duration ){
  global.__AwtkSnapshot.push(`funtion  timer_add( on_timer, ctx, duration ) :${on_timer}, ${ctx}, ${duration}`)
  return undefined
}

global.timer_remove = function( timer_id ){
  global.__AwtkSnapshot.push(`funtion  timer_remove( timer_id ) :${timer_id}`)
  return undefined
}

global.timer_reset = function( timer_id ){
  global.__AwtkSnapshot.push(`funtion  timer_reset( timer_id ) :${timer_id}`)
  return undefined
}

global.timer_modify = function( timer_id, duration ){
  global.__AwtkSnapshot.push(`funtion  timer_modify( timer_id, duration ) :${timer_id}, ${duration}`)
  return undefined
}

global.ALIGN_V_NONE = function(){
 return "ALIGN_V_NONE"
}

global.ALIGN_V_MIDDLE = function(){
 return "ALIGN_V_MIDDLE"
}

global.ALIGN_V_TOP = function(){
 return "ALIGN_V_TOP"
}

global.ALIGN_V_BOTTOM = function(){
 return "ALIGN_V_BOTTOM"
}


/**
 * 垂直对齐的常量定义。
 *
 *
 */
global.TAlignV = {

  /**
   * 无效对齐方式。
   *
   *
   */
 NONE : ALIGN_V_NONE(),

  /**
   * 居中对齐。
   *
   *
   */
 MIDDLE : ALIGN_V_MIDDLE(),

  /**
   * 顶部对齐。
   *
   *
   */
 TOP : ALIGN_V_TOP(),

  /**
   * 底部对齐。
   *
   *
   */
 BOTTOM : ALIGN_V_BOTTOM(),
};

global.ALIGN_H_NONE = function(){
 return "ALIGN_H_NONE"
}

global.ALIGN_H_CENTER = function(){
 return "ALIGN_H_CENTER"
}

global.ALIGN_H_LEFT = function(){
 return "ALIGN_H_LEFT"
}

global.ALIGN_H_RIGHT = function(){
 return "ALIGN_H_RIGHT"
}


/**
 * 水平对齐的常量定义。
 *
 *
 */
global.TAlignH = {

  /**
   * 无效对齐方式。
   *
   *
   */
 NONE : ALIGN_H_NONE(),

  /**
   * 居中对齐。
   *
   *
   */
 CENTER : ALIGN_H_CENTER(),

  /**
   * 左边对齐。
   *
   *
   */
 LEFT : ALIGN_H_LEFT(),

  /**
   * 右边对齐。
   *
   *
   */
 RIGHT : ALIGN_H_RIGHT(),
};

global.APP_MOBILE = function(){
 return "APP_MOBILE"
}

global.APP_SIMULATOR = function(){
 return "APP_SIMULATOR"
}

global.APP_DESKTOP = function(){
 return "APP_DESKTOP"
}


/**
 * 应用程序类型。
 *
 *
 */
global.TAppType = {

  /**
   * 嵌入式或移动APP
   *
   *
   */
 MOBILE : APP_MOBILE(),

  /**
   * 模拟器。
   *
   *
   */
 SIMULATOR : APP_SIMULATOR(),

  /**
   * 桌面应用程序。
   *
   *
   */
 DESKTOP : APP_DESKTOP(),
};

global.BITMAP_FMT_NONE = function(){
 return "BITMAP_FMT_NONE"
}

global.BITMAP_FMT_RGBA8888 = function(){
 return "BITMAP_FMT_RGBA8888"
}

global.BITMAP_FMT_ABGR8888 = function(){
 return "BITMAP_FMT_ABGR8888"
}

global.BITMAP_FMT_BGRA8888 = function(){
 return "BITMAP_FMT_BGRA8888"
}

global.BITMAP_FMT_ARGB8888 = function(){
 return "BITMAP_FMT_ARGB8888"
}

global.BITMAP_FMT_RGB565 = function(){
 return "BITMAP_FMT_RGB565"
}

global.BITMAP_FMT_BGR565 = function(){
 return "BITMAP_FMT_BGR565"
}

global.BITMAP_FMT_RGB888 = function(){
 return "BITMAP_FMT_RGB888"
}

global.BITMAP_FMT_BGR888 = function(){
 return "BITMAP_FMT_BGR888"
}

global.BITMAP_FMT_GRAY = function(){
 return "BITMAP_FMT_GRAY"
}

global.BITMAP_FMT_MONO = function(){
 return "BITMAP_FMT_MONO"
}


/**
 * 位图格式常量定义。
 *
 *
 */
global.TBitmapFormat = {

  /**
   * 无效格式。
   *
   *
   */
 NONE : BITMAP_FMT_NONE(),

  /**
   * 一个像素占用4个字节，RGBA占一个字节，按内存地址递增。
   *
   *
   */
 RGBA8888 : BITMAP_FMT_RGBA8888(),

  /**
   * 一个像素占用4个字节，ABGR占一个字节，按内存地址递增。
   *
   *
   */
 ABGR8888 : BITMAP_FMT_ABGR8888(),

  /**
   * 一个像素占用4个字节，BGRA占一个字节，按内存地址递增。
   *
   *
   */
 BGRA8888 : BITMAP_FMT_BGRA8888(),

  /**
   * 一个像素占用4个字节，ARGB占一个字节，按内存地址递增。
   *
   *
   */
 ARGB8888 : BITMAP_FMT_ARGB8888(),

  /**
   * 一个像素占用2个字节，RGB分别占用5,6,5位, 按内存地址递增。
   *
   *
   */
 RGB565 : BITMAP_FMT_RGB565(),

  /**
   * 一个像素占用2个字节，BGR分别占用5,6,5位, 按内存地址递增。
   *
   *
   */
 BGR565 : BITMAP_FMT_BGR565(),

  /**
   * 一个像素占用3个字节，RGB占一个字节，按内存地址递增。
   *
   *
   */
 RGB888 : BITMAP_FMT_RGB888(),

  /**
   * 一个像素占用3个字节，RGB占一个字节，按内存地址递增。
   *
   *
   */
 BGR888 : BITMAP_FMT_BGR888(),

  /**
   * 一个像素占用1个字节。
   *
   *
   */
 GRAY : BITMAP_FMT_GRAY(),

  /**
   * 一个像素占用1比特。
   *
   *
   */
 MONO : BITMAP_FMT_MONO(),
};

global.BITMAP_FLAG_NONE = function(){
 return "BITMAP_FLAG_NONE"
}

global.BITMAP_FLAG_OPAQUE = function(){
 return "BITMAP_FLAG_OPAQUE"
}

global.BITMAP_FLAG_IMMUTABLE = function(){
 return "BITMAP_FLAG_IMMUTABLE"
}

global.BITMAP_FLAG_TEXTURE = function(){
 return "BITMAP_FLAG_TEXTURE"
}

global.BITMAP_FLAG_CHANGED = function(){
 return "BITMAP_FLAG_CHANGED"
}

global.BITMAP_FLAG_PREMULTI_ALPHA = function(){
 return "BITMAP_FLAG_PREMULTI_ALPHA"
}


/**
 * 位图标志常量定义。
 *
 *
 */
global.TBitmapFlag = {

  /**
   * 无特殊标志。
   *
   *
   */
 NONE : BITMAP_FLAG_NONE(),

  /**
   * 不透明图片。
   *
   *
   */
 OPAQUE : BITMAP_FLAG_OPAQUE(),

  /**
   * 图片内容不会变化。
   *
   *
   */
 IMMUTABLE : BITMAP_FLAG_IMMUTABLE(),

  /**
   * OpenGL Texture, bitmap的id是有效的texture id。
   *
   *
   */
 TEXTURE : BITMAP_FLAG_TEXTURE(),

  /**
   * 如果是MUTABLE的图片，更新时需要设置此标志，底层可能会做特殊处理，比如更新图片到GPU。
   *
   *
   */
 CHANGED : BITMAP_FLAG_CHANGED(),

  /**
   * 预乘alpha。
   *
   *
   */
 PREMULTI_ALPHA : BITMAP_FLAG_PREMULTI_ALPHA(),
};

global.vgcanvas_cast = function( vg ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_cast( vg ) :${vg}`)
  return undefined
}

global.vgcanvas_flush = function( vg ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_flush( vg ) :${vg}`)
  return undefined
}

global.vgcanvas_begin_path = function( vg ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_begin_path( vg ) :${vg}`)
  return undefined
}

global.vgcanvas_move_to = function( vg, x, y ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_move_to( vg, x, y ) :${vg}, ${x}, ${y}`)
  return undefined
}

global.vgcanvas_line_to = function( vg, x, y ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_line_to( vg, x, y ) :${vg}, ${x}, ${y}`)
  return undefined
}

global.vgcanvas_quad_to = function( vg, cpx, cpy, x, y ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_quad_to( vg, cpx, cpy, x, y ) :${vg}, ${cpx}, ${cpy}, ${x}, ${y}`)
  return undefined
}

global.vgcanvas_bezier_to = function( vg, cp1x, cp1y, cp2x, cp2y, x, y ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_bezier_to( vg, cp1x, cp1y, cp2x, cp2y, x, y ) :${vg}, ${cp1x}, ${cp1y}, ${cp2x}, ${cp2y}, ${x}, ${y}`)
  return undefined
}

global.vgcanvas_arc_to = function( vg, x1, y1, x2, y2, r ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_arc_to( vg, x1, y1, x2, y2, r ) :${vg}, ${x1}, ${y1}, ${x2}, ${y2}, ${r}`)
  return undefined
}

global.vgcanvas_arc = function( vg, x, y, r, start_angle, end_angle, ccw ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_arc( vg, x, y, r, start_angle, end_angle, ccw ) :${vg}, ${x}, ${y}, ${r}, ${start_angle}, ${end_angle}, ${ccw}`)
  return undefined
}

global.vgcanvas_is_point_in_path = function( vg, x, y ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_is_point_in_path( vg, x, y ) :${vg}, ${x}, ${y}`)
  return undefined
}

global.vgcanvas_rect = function( vg, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_rect( vg, x, y, w, h ) :${vg}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.vgcanvas_rounded_rect = function( vg, x, y, w, h, r ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_rounded_rect( vg, x, y, w, h, r ) :${vg}, ${x}, ${y}, ${w}, ${h}, ${r}`)
  return undefined
}

global.vgcanvas_ellipse = function( vg, x, y, rx, ry ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_ellipse( vg, x, y, rx, ry ) :${vg}, ${x}, ${y}, ${rx}, ${ry}`)
  return undefined
}

global.vgcanvas_close_path = function( vg ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_close_path( vg ) :${vg}`)
  return undefined
}

global.vgcanvas_rotate = function( vg, rad ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_rotate( vg, rad ) :${vg}, ${rad}`)
  return undefined
}

global.vgcanvas_scale = function( vg, x, y ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_scale( vg, x, y ) :${vg}, ${x}, ${y}`)
  return undefined
}

global.vgcanvas_translate = function( vg, x, y ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_translate( vg, x, y ) :${vg}, ${x}, ${y}`)
  return undefined
}

global.vgcanvas_transform = function( vg, a, b, c, d, e, f ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_transform( vg, a, b, c, d, e, f ) :${vg}, ${a}, ${b}, ${c}, ${d}, ${e}, ${f}`)
  return undefined
}

global.vgcanvas_set_transform = function( vg, a, b, c, d, e, f ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_transform( vg, a, b, c, d, e, f ) :${vg}, ${a}, ${b}, ${c}, ${d}, ${e}, ${f}`)
  return undefined
}

global.vgcanvas_clip_rect = function( vg, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_clip_rect( vg, x, y, w, h ) :${vg}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.vgcanvas_fill = function( vg ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_fill( vg ) :${vg}`)
  return undefined
}

global.vgcanvas_stroke = function( vg ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_stroke( vg ) :${vg}`)
  return undefined
}

global.vgcanvas_paint = function( vg, stroke, img ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_paint( vg, stroke, img ) :${vg}, ${stroke}, ${img}`)
  return undefined
}

global.vgcanvas_set_font = function( vg, font ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_font( vg, font ) :${vg}, ${font}`)
  return undefined
}

global.vgcanvas_set_font_size = function( vg, font ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_font_size( vg, font ) :${vg}, ${font}`)
  return undefined
}

global.vgcanvas_set_text_align = function( vg, value ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_text_align( vg, value ) :${vg}, ${value}`)
  return undefined
}

global.vgcanvas_set_text_baseline = function( vg, value ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_text_baseline( vg, value ) :${vg}, ${value}`)
  return undefined
}

global.vgcanvas_fill_text = function( vg, text, x, y, max_width ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_fill_text( vg, text, x, y, max_width ) :${vg}, ${text}, ${x}, ${y}, ${max_width}`)
  return undefined
}

global.vgcanvas_measure_text = function( vg, text ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_measure_text( vg, text ) :${vg}, ${text}`)
  return undefined
}

global.vgcanvas_draw_image = function( vg, img, sx, sy, sw, sh, dx, dy, dw, dh ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_draw_image( vg, img, sx, sy, sw, sh, dx, dy, dw, dh ) :${vg}, ${img}, ${sx}, ${sy}, ${sw}, ${sh}, ${dx}, ${dy}, ${dw}, ${dh}`)
  return undefined
}

global.vgcanvas_draw_icon = function( vg, img, sx, sy, sw, sh, dx, dy, dw, dh ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_draw_icon( vg, img, sx, sy, sw, sh, dx, dy, dw, dh ) :${vg}, ${img}, ${sx}, ${sy}, ${sw}, ${sh}, ${dx}, ${dy}, ${dw}, ${dh}`)
  return undefined
}

global.vgcanvas_set_antialias = function( vg, value ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_antialias( vg, value ) :${vg}, ${value}`)
  return undefined
}

global.vgcanvas_set_global_alpha = function( vg, alpha ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_global_alpha( vg, alpha ) :${vg}, ${alpha}`)
  return undefined
}

global.vgcanvas_set_line_width = function( vg, value ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_line_width( vg, value ) :${vg}, ${value}`)
  return undefined
}

global.vgcanvas_set_fill_color_str = function( vg, color ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_fill_color_str( vg, color ) :${vg}, ${color}`)
  return undefined
}

global.vgcanvas_set_stroke_color_str = function( vg, color ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_stroke_color_str( vg, color ) :${vg}, ${color}`)
  return undefined
}

global.vgcanvas_set_line_cap = function( vg, value ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_line_cap( vg, value ) :${vg}, ${value}`)
  return undefined
}

global.vgcanvas_set_line_join = function( vg, value ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_line_join( vg, value ) :${vg}, ${value}`)
  return undefined
}

global.vgcanvas_set_miter_limit = function( vg, value ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_set_miter_limit( vg, value ) :${vg}, ${value}`)
  return undefined
}

global.vgcanvas_save = function( vg ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_save( vg ) :${vg}`)
  return undefined
}

global.vgcanvas_restore = function( vg ){
  global.__AwtkSnapshot.push(`funtion  vgcanvas_restore( vg ) :${vg}`)
  return undefined
}

global.vgcanvas_t_get_prop_w = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_w`)
  return "vgcanvas_t_get_prop_w"
}

global.vgcanvas_t_get_prop_h = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_h`)
  return "vgcanvas_t_get_prop_h"
}

global.vgcanvas_t_get_prop_ratio = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_ratio`)
  return "vgcanvas_t_get_prop_ratio"
}

global.vgcanvas_t_get_prop_anti_alias = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_anti_alias`)
  return "vgcanvas_t_get_prop_anti_alias"
}

global.vgcanvas_t_get_prop_line_width = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_line_width`)
  return "vgcanvas_t_get_prop_line_width"
}

global.vgcanvas_t_get_prop_global_alpha = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_global_alpha`)
  return "vgcanvas_t_get_prop_global_alpha"
}

global.vgcanvas_t_get_prop_miter_limit = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_miter_limit`)
  return "vgcanvas_t_get_prop_miter_limit"
}

global.vgcanvas_t_get_prop_line_cap = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_line_cap`)
  return "vgcanvas_t_get_prop_line_cap"
}

global.vgcanvas_t_get_prop_line_join = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_line_join`)
  return "vgcanvas_t_get_prop_line_join"
}

global.vgcanvas_t_get_prop_font = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_font`)
  return "vgcanvas_t_get_prop_font"
}

global.vgcanvas_t_get_prop_font_size = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_font_size`)
  return "vgcanvas_t_get_prop_font_size"
}

global.vgcanvas_t_get_prop_text_align = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_text_align`)
  return "vgcanvas_t_get_prop_text_align"
}

global.vgcanvas_t_get_prop_text_baseline = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  vgcanvas_t_get_prop_text_baseline`)
  return "vgcanvas_t_get_prop_text_baseline"
}

global.WIDGET_PROP_EXEC = function(){
 return "WIDGET_PROP_EXEC"
}

global.WIDGET_PROP_X = function(){
 return "WIDGET_PROP_X"
}

global.WIDGET_PROP_Y = function(){
 return "WIDGET_PROP_Y"
}

global.WIDGET_PROP_W = function(){
 return "WIDGET_PROP_W"
}

global.WIDGET_PROP_H = function(){
 return "WIDGET_PROP_H"
}

global.WIDGET_PROP_CANVAS = function(){
 return "WIDGET_PROP_CANVAS"
}

global.WIDGET_PROP_LOCALIZE_OPTIONS = function(){
 return "WIDGET_PROP_LOCALIZE_OPTIONS"
}

global.WIDGET_PROP_NATIVE_WINDOW = function(){
 return "WIDGET_PROP_NATIVE_WINDOW"
}

global.WIDGET_PROP_HIGHLIGHT = function(){
 return "WIDGET_PROP_HIGHLIGHT"
}

global.WIDGET_PROP_BAR_SIZE = function(){
 return "WIDGET_PROP_BAR_SIZE"
}

global.WIDGET_PROP_OPACITY = function(){
 return "WIDGET_PROP_OPACITY"
}

global.WIDGET_PROP_MIN_W = function(){
 return "WIDGET_PROP_MIN_W"
}

global.WIDGET_PROP_MAX_W = function(){
 return "WIDGET_PROP_MAX_W"
}

global.WIDGET_PROP_CHILDREN_LAYOUT = function(){
 return "WIDGET_PROP_CHILDREN_LAYOUT"
}

global.WIDGET_PROP_LAYOUT = function(){
 return "WIDGET_PROP_LAYOUT"
}

global.WIDGET_PROP_SELF_LAYOUT = function(){
 return "WIDGET_PROP_SELF_LAYOUT"
}

global.WIDGET_PROP_LAYOUT_W = function(){
 return "WIDGET_PROP_LAYOUT_W"
}

global.WIDGET_PROP_LAYOUT_H = function(){
 return "WIDGET_PROP_LAYOUT_H"
}

global.WIDGET_PROP_VIRTUAL_W = function(){
 return "WIDGET_PROP_VIRTUAL_W"
}

global.WIDGET_PROP_VIRTUAL_H = function(){
 return "WIDGET_PROP_VIRTUAL_H"
}

global.WIDGET_PROP_NAME = function(){
 return "WIDGET_PROP_NAME"
}

global.WIDGET_PROP_TYPE = function(){
 return "WIDGET_PROP_TYPE"
}

global.WIDGET_PROP_CLOSABLE = function(){
 return "WIDGET_PROP_CLOSABLE"
}

global.WIDGET_PROP_CURSOR = function(){
 return "WIDGET_PROP_CURSOR"
}

global.WIDGET_PROP_VALUE = function(){
 return "WIDGET_PROP_VALUE"
}

global.WIDGET_PROP_LENGTH = function(){
 return "WIDGET_PROP_LENGTH"
}

global.WIDGET_PROP_TEXT = function(){
 return "WIDGET_PROP_TEXT"
}

global.WIDGET_PROP_TR_TEXT = function(){
 return "WIDGET_PROP_TR_TEXT"
}

global.WIDGET_PROP_STYLE = function(){
 return "WIDGET_PROP_STYLE"
}

global.WIDGET_PROP_ENABLE = function(){
 return "WIDGET_PROP_ENABLE"
}

global.WIDGET_PROP_FEEDBACK = function(){
 return "WIDGET_PROP_FEEDBACK"
}

global.WIDGET_PROP_FLOATING = function(){
 return "WIDGET_PROP_FLOATING"
}

global.WIDGET_PROP_MARGIN = function(){
 return "WIDGET_PROP_MARGIN"
}

global.WIDGET_PROP_SPACING = function(){
 return "WIDGET_PROP_SPACING"
}

global.WIDGET_PROP_LEFT_MARGIN = function(){
 return "WIDGET_PROP_LEFT_MARGIN"
}

global.WIDGET_PROP_RIGHT_MARGIN = function(){
 return "WIDGET_PROP_RIGHT_MARGIN"
}

global.WIDGET_PROP_TOP_MARGIN = function(){
 return "WIDGET_PROP_TOP_MARGIN"
}

global.WIDGET_PROP_BOTTOM_MARGIN = function(){
 return "WIDGET_PROP_BOTTOM_MARGIN"
}

global.WIDGET_PROP_STEP = function(){
 return "WIDGET_PROP_STEP"
}

global.WIDGET_PROP_VISIBLE = function(){
 return "WIDGET_PROP_VISIBLE"
}

global.WIDGET_PROP_SENSITIVE = function(){
 return "WIDGET_PROP_SENSITIVE"
}

global.WIDGET_PROP_ANIMATION = function(){
 return "WIDGET_PROP_ANIMATION"
}

global.WIDGET_PROP_ANIM_HINT = function(){
 return "WIDGET_PROP_ANIM_HINT"
}

global.WIDGET_PROP_FULLSCREEN = function(){
 return "WIDGET_PROP_FULLSCREEN"
}

global.WIDGET_PROP_OPEN_ANIM_HINT = function(){
 return "WIDGET_PROP_OPEN_ANIM_HINT"
}

global.WIDGET_PROP_CLOSE_ANIM_HINT = function(){
 return "WIDGET_PROP_CLOSE_ANIM_HINT"
}

global.WIDGET_PROP_MIN = function(){
 return "WIDGET_PROP_MIN"
}

global.WIDGET_PROP_TIPS = function(){
 return "WIDGET_PROP_TIPS"
}

global.WIDGET_PROP_INPUT_TYPE = function(){
 return "WIDGET_PROP_INPUT_TYPE"
}

global.WIDGET_PROP_READONLY = function(){
 return "WIDGET_PROP_READONLY"
}

global.WIDGET_PROP_PASSWORD_VISIBLE = function(){
 return "WIDGET_PROP_PASSWORD_VISIBLE"
}

global.WIDGET_PROP_ACTIVE = function(){
 return "WIDGET_PROP_ACTIVE"
}

global.WIDGET_PROP_VERTICAL = function(){
 return "WIDGET_PROP_VERTICAL"
}

global.WIDGET_PROP_SHOW_TEXT = function(){
 return "WIDGET_PROP_SHOW_TEXT"
}

global.WIDGET_PROP_XOFFSET = function(){
 return "WIDGET_PROP_XOFFSET"
}

global.WIDGET_PROP_YOFFSET = function(){
 return "WIDGET_PROP_YOFFSET"
}

global.WIDGET_PROP_ALIGN_V = function(){
 return "WIDGET_PROP_ALIGN_V"
}

global.WIDGET_PROP_ALIGN_H = function(){
 return "WIDGET_PROP_ALIGN_H"
}

global.WIDGET_PROP_AUTO_PLAY = function(){
 return "WIDGET_PROP_AUTO_PLAY"
}

global.WIDGET_PROP_LOOP = function(){
 return "WIDGET_PROP_LOOP"
}

global.WIDGET_PROP_AUTO_FIX = function(){
 return "WIDGET_PROP_AUTO_FIX"
}

global.WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED = function(){
 return "WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED"
}

global.WIDGET_PROP_OPEN_IM_WHEN_FOCUSED = function(){
 return "WIDGET_PROP_OPEN_IM_WHEN_FOCUSED"
}

global.WIDGET_PROP_X_MIN = function(){
 return "WIDGET_PROP_X_MIN"
}

global.WIDGET_PROP_X_MAX = function(){
 return "WIDGET_PROP_X_MAX"
}

global.WIDGET_PROP_Y_MIN = function(){
 return "WIDGET_PROP_Y_MIN"
}

global.WIDGET_PROP_Y_MAX = function(){
 return "WIDGET_PROP_Y_MAX"
}

global.WIDGET_PROP_MAX = function(){
 return "WIDGET_PROP_MAX"
}

global.WIDGET_PROP_GRAB_KEYS = function(){
 return "WIDGET_PROP_GRAB_KEYS"
}

global.WIDGET_PROP_ROW = function(){
 return "WIDGET_PROP_ROW"
}

global.WIDGET_PROP_STATE_FOR_STYLE = function(){
 return "WIDGET_PROP_STATE_FOR_STYLE"
}

global.WIDGET_PROP_THEME = function(){
 return "WIDGET_PROP_THEME"
}

global.WIDGET_PROP_STAGE = function(){
 return "WIDGET_PROP_STAGE"
}

global.WIDGET_PROP_IMAGE_MANAGER = function(){
 return "WIDGET_PROP_IMAGE_MANAGER"
}

global.WIDGET_PROP_ASSETS_MANAGER = function(){
 return "WIDGET_PROP_ASSETS_MANAGER"
}

global.WIDGET_PROP_LOCALE_INFO = function(){
 return "WIDGET_PROP_LOCALE_INFO"
}

global.WIDGET_PROP_FONT_MANAGER = function(){
 return "WIDGET_PROP_FONT_MANAGER"
}

global.WIDGET_PROP_THEME_OBJ = function(){
 return "WIDGET_PROP_THEME_OBJ"
}

global.WIDGET_PROP_DEFAULT_THEME_OBJ = function(){
 return "WIDGET_PROP_DEFAULT_THEME_OBJ"
}

global.WIDGET_PROP_ITEM_WIDTH = function(){
 return "WIDGET_PROP_ITEM_WIDTH"
}

global.WIDGET_PROP_ITEM_HEIGHT = function(){
 return "WIDGET_PROP_ITEM_HEIGHT"
}

global.WIDGET_PROP_DEFAULT_ITEM_HEIGHT = function(){
 return "WIDGET_PROP_DEFAULT_ITEM_HEIGHT"
}

global.WIDGET_PROP_XSLIDABLE = function(){
 return "WIDGET_PROP_XSLIDABLE"
}

global.WIDGET_PROP_YSLIDABLE = function(){
 return "WIDGET_PROP_YSLIDABLE"
}

global.WIDGET_PROP_REPEAT = function(){
 return "WIDGET_PROP_REPEAT"
}

global.WIDGET_PROP_ENABLE_LONG_PRESS = function(){
 return "WIDGET_PROP_ENABLE_LONG_PRESS"
}

global.WIDGET_PROP_ANIMATABLE = function(){
 return "WIDGET_PROP_ANIMATABLE"
}

global.WIDGET_PROP_AUTO_HIDE_SCROLL_BAR = function(){
 return "WIDGET_PROP_AUTO_HIDE_SCROLL_BAR"
}

global.WIDGET_PROP_IMAGE = function(){
 return "WIDGET_PROP_IMAGE"
}

global.WIDGET_PROP_FORMAT = function(){
 return "WIDGET_PROP_FORMAT"
}

global.WIDGET_PROP_DRAW_TYPE = function(){
 return "WIDGET_PROP_DRAW_TYPE"
}

global.WIDGET_PROP_SELECTABLE = function(){
 return "WIDGET_PROP_SELECTABLE"
}

global.WIDGET_PROP_CLICKABLE = function(){
 return "WIDGET_PROP_CLICKABLE"
}

global.WIDGET_PROP_SCALE_X = function(){
 return "WIDGET_PROP_SCALE_X"
}

global.WIDGET_PROP_SCALE_Y = function(){
 return "WIDGET_PROP_SCALE_Y"
}

global.WIDGET_PROP_ANCHOR_X = function(){
 return "WIDGET_PROP_ANCHOR_X"
}

global.WIDGET_PROP_ANCHOR_Y = function(){
 return "WIDGET_PROP_ANCHOR_Y"
}

global.WIDGET_PROP_ROTATION = function(){
 return "WIDGET_PROP_ROTATION"
}

global.WIDGET_PROP_COMPACT = function(){
 return "WIDGET_PROP_COMPACT"
}

global.WIDGET_PROP_SCROLLABLE = function(){
 return "WIDGET_PROP_SCROLLABLE"
}

global.WIDGET_PROP_ICON = function(){
 return "WIDGET_PROP_ICON"
}

global.WIDGET_PROP_OPTIONS = function(){
 return "WIDGET_PROP_OPTIONS"
}

global.WIDGET_PROP_SELECTED = function(){
 return "WIDGET_PROP_SELECTED"
}

global.WIDGET_PROP_CHECKED = function(){
 return "WIDGET_PROP_CHECKED"
}

global.WIDGET_PROP_ACTIVE_ICON = function(){
 return "WIDGET_PROP_ACTIVE_ICON"
}

global.WIDGET_PROP_OPEN_WINDOW = function(){
 return "WIDGET_PROP_OPEN_WINDOW"
}

global.WIDGET_PROP_SELECTED_INDEX = function(){
 return "WIDGET_PROP_SELECTED_INDEX"
}

global.WIDGET_PROP_CLOSE_WHEN_CLICK = function(){
 return "WIDGET_PROP_CLOSE_WHEN_CLICK"
}

global.WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE = function(){
 return "WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE"
}

global.WIDGET_PROP_LINE_GAP = function(){
 return "WIDGET_PROP_LINE_GAP"
}

global.WIDGET_PROP_BG_COLOR = function(){
 return "WIDGET_PROP_BG_COLOR"
}

global.WIDGET_PROP_BORDER_COLOR = function(){
 return "WIDGET_PROP_BORDER_COLOR"
}

global.WIDGET_PROP_DELAY = function(){
 return "WIDGET_PROP_DELAY"
}

global.WIDGET_PROP_IS_KEYBOARD = function(){
 return "WIDGET_PROP_IS_KEYBOARD"
}

global.WIDGET_PROP_FOCUSED = function(){
 return "WIDGET_PROP_FOCUSED"
}

global.WIDGET_PROP_FOCUS = function(){
 return "WIDGET_PROP_FOCUS"
}

global.WIDGET_PROP_FOCUSABLE = function(){
 return "WIDGET_PROP_FOCUSABLE"
}

global.WIDGET_PROP_WITH_FOCUS_STATE = function(){
 return "WIDGET_PROP_WITH_FOCUS_STATE"
}

global.WIDGET_PROP_MOVE_FOCUS_PREV_KEY = function(){
 return "WIDGET_PROP_MOVE_FOCUS_PREV_KEY"
}

global.WIDGET_PROP_MOVE_FOCUS_NEXT_KEY = function(){
 return "WIDGET_PROP_MOVE_FOCUS_NEXT_KEY"
}

global.WIDGET_PROP_MOVE_FOCUS_UP_KEY = function(){
 return "WIDGET_PROP_MOVE_FOCUS_UP_KEY"
}

global.WIDGET_PROP_MOVE_FOCUS_DOWN_KEY = function(){
 return "WIDGET_PROP_MOVE_FOCUS_DOWN_KEY"
}

global.WIDGET_PROP_MOVE_FOCUS_LEFT_KEY = function(){
 return "WIDGET_PROP_MOVE_FOCUS_LEFT_KEY"
}

global.WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY = function(){
 return "WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY"
}


/**
 * 控件的属性。
 *
 *
 */
global.TWidgetProp = {

  /**
   * 用于执行某些特殊的命令（比如控制动画的启停），主要是方便MVVM通过属性来控制动画。
   *
   *
   */
 EXEC : WIDGET_PROP_EXEC(),

  /**
   * X坐标。
   *
   *
   */
 X : WIDGET_PROP_X(),

  /**
   * Y坐标。
   *
   *
   */
 Y : WIDGET_PROP_Y(),

  /**
   * 宽度。
   *
   *
   */
 W : WIDGET_PROP_W(),

  /**
   * 高度。
   *
   *
   */
 H : WIDGET_PROP_H(),

  /**
   * Canvas。
   *
   *
   */
 CANVAS : WIDGET_PROP_CANVAS(),

  /**
   * Canvas。
   *
   *
   */
 LOCALIZE_OPTIONS : WIDGET_PROP_LOCALIZE_OPTIONS(),

  /**
   * Native Window。
   *
   *
   */
 NATIVE_WINDOW : WIDGET_PROP_NATIVE_WINDOW(),

  /**
   * dialog highlight。
   *
   *
   */
 HIGHLIGHT : WIDGET_PROP_HIGHLIGHT(),

  /**
   * slider中的bar的的宽度或高度。
   *
   *
   */
 BAR_SIZE : WIDGET_PROP_BAR_SIZE(),

  /**
   * 不透明度。
   *
   *
   */
 OPACITY : WIDGET_PROP_OPACITY(),

  /**
   * 最小宽度。
   *
   *
   */
 MIN_W : WIDGET_PROP_MIN_W(),

  /**
   * 最大宽度。
   *
   *
   */
 MAX_W : WIDGET_PROP_MAX_W(),

  /**
   * 子控件布局参数。
   *
   *
   */
 CHILDREN_LAYOUT : WIDGET_PROP_CHILDREN_LAYOUT(),

  /**
   * 子控件布局参数(过时)。
   *
   *
   */
 LAYOUT : WIDGET_PROP_LAYOUT(),

  /**
   * 控件布局参数。
   *
   *
   */
 SELF_LAYOUT : WIDGET_PROP_SELF_LAYOUT(),

  /**
   * layout宽度。
   *
   *
   */
 LAYOUT_W : WIDGET_PROP_LAYOUT_W(),

  /**
   * layout高度。
   *
   *
   */
 LAYOUT_H : WIDGET_PROP_LAYOUT_H(),

  /**
   * 虚拟宽度。
   *
   *
   */
 VIRTUAL_W : WIDGET_PROP_VIRTUAL_W(),

  /**
   * 虚拟高度。
   *
   *
   */
 VIRTUAL_H : WIDGET_PROP_VIRTUAL_H(),

  /**
   * 名称。
   *
   *
   */
 NAME : WIDGET_PROP_NAME(),

  /**
   * 类型。
   *
   *
   */
 TYPE : WIDGET_PROP_TYPE(),

  /**
   * 是否可以关闭。
   *
   *
   */
 CLOSABLE : WIDGET_PROP_CLOSABLE(),

  /**
   * 鼠标指针。
   *
   *
   */
 CURSOR : WIDGET_PROP_CURSOR(),

  /**
   * 值。
   *
   *
   */
 VALUE : WIDGET_PROP_VALUE(),

  /**
   * 长度。
   *
   *
   */
 LENGTH : WIDGET_PROP_LENGTH(),

  /**
   * 文本。
   *
   *
   */
 TEXT : WIDGET_PROP_TEXT(),

  /**
   * 待翻译文本。
   *
   *
   */
 TR_TEXT : WIDGET_PROP_TR_TEXT(),

  /**
   * style。
   *
   *
   */
 STYLE : WIDGET_PROP_STYLE(),

  /**
   * 是否启用。
   *
   *
   */
 ENABLE : WIDGET_PROP_ENABLE(),

  /**
   * 是否启用按键音等反馈。
   *
   *
   */
 FEEDBACK : WIDGET_PROP_FEEDBACK(),

  /**
   * 是否启用floating布局。
   *
   *
   */
 FLOATING : WIDGET_PROP_FLOATING(),

  /**
   * 边距。
   *
   *
   */
 MARGIN : WIDGET_PROP_MARGIN(),

  /**
   * 间距。
   *
   *
   */
 SPACING : WIDGET_PROP_SPACING(),

  /**
   * 左边距。
   *
   *
   */
 LEFT_MARGIN : WIDGET_PROP_LEFT_MARGIN(),

  /**
   * 右边距。
   *
   *
   */
 RIGHT_MARGIN : WIDGET_PROP_RIGHT_MARGIN(),

  /**
   * 顶边距。
   *
   *
   */
 TOP_MARGIN : WIDGET_PROP_TOP_MARGIN(),

  /**
   * 底边距。
   *
   *
   */
 BOTTOM_MARGIN : WIDGET_PROP_BOTTOM_MARGIN(),

  /**
   * 步长。
   *
   *
   */
 STEP : WIDGET_PROP_STEP(),

  /**
   * 是否可见。
   *
   *
   */
 VISIBLE : WIDGET_PROP_VISIBLE(),

  /**
   * 是否接受用户事件。
   *
   *
   */
 SENSITIVE : WIDGET_PROP_SENSITIVE(),

  /**
   * 控件动画。
   *
   *
   */
 ANIMATION : WIDGET_PROP_ANIMATION(),

  /**
   * 窗口动画。
   *
   *
   */
 ANIM_HINT : WIDGET_PROP_ANIM_HINT(),

  /**
   * 窗口设置为全部大小。
   *
   *
   */
 FULLSCREEN : WIDGET_PROP_FULLSCREEN(),

  /**
   * 打开窗口动画。
   *
   *
   */
 OPEN_ANIM_HINT : WIDGET_PROP_OPEN_ANIM_HINT(),

  /**
   * 关闭窗口动画。
   *
   *
   */
 CLOSE_ANIM_HINT : WIDGET_PROP_CLOSE_ANIM_HINT(),

  /**
   * 最小值。
   *
   *
   */
 MIN : WIDGET_PROP_MIN(),

  /**
   * 提示信息。
   *
   *
   */
 TIPS : WIDGET_PROP_TIPS(),

  /**
   * 输入类型。
   *
   *
   */
 INPUT_TYPE : WIDGET_PROP_INPUT_TYPE(),

  /**
   * 只读模式。
   *
   *
   */
 READONLY : WIDGET_PROP_READONLY(),

  /**
   * 密码是否可见。
   *
   *
   */
 PASSWORD_VISIBLE : WIDGET_PROP_PASSWORD_VISIBLE(),

  /**
   * 是否处于active状态。
   *
   *
   */
 ACTIVE : WIDGET_PROP_ACTIVE(),

  /**
   * 是否为垂直模式。
   *
   *
   */
 VERTICAL : WIDGET_PROP_VERTICAL(),

  /**
   * 是否显示文本。
   *
   *
   */
 SHOW_TEXT : WIDGET_PROP_SHOW_TEXT(),

  /**
   * X方向的偏移。
   *
   *
   */
 XOFFSET : WIDGET_PROP_XOFFSET(),

  /**
   * Y方向的偏移。
   *
   *
   */
 YOFFSET : WIDGET_PROP_YOFFSET(),

  /**
   * 垂直对齐模式。
   *
   *
   */
 ALIGN_V : WIDGET_PROP_ALIGN_V(),

  /**
   * 水平对齐模式。
   *
   *
   */
 ALIGN_H : WIDGET_PROP_ALIGN_H(),

  /**
   * 是否自动播放或指定播放的时间。
   *
   *
   */
 AUTO_PLAY : WIDGET_PROP_AUTO_PLAY(),

  /**
   * 是否循环播放或循环播放的次数。
   *
   *
   */
 LOOP : WIDGET_PROP_LOOP(),

  /**
   * 是否启用自动更正功能。
   *
   *
   */
 AUTO_FIX : WIDGET_PROP_AUTO_FIX(),

  /**
   * 编辑器在获得焦点时是否不选中文本。
   *
   *
   */
 SELECT_NONE_WHEN_FOCUSED : WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED(),

  /**
   * 编辑器在获得焦点时是否打开输入法。
   *
   *
   */
 OPEN_IM_WHEN_FOCUSED : WIDGET_PROP_OPEN_IM_WHEN_FOCUSED(),

  /**
   * X最小值。
   *
   *
   */
 X_MIN : WIDGET_PROP_X_MIN(),

  /**
   * X最大值。
   *
   *
   */
 X_MAX : WIDGET_PROP_X_MAX(),

  /**
   * Y最小值。
   *
   *
   */
 Y_MIN : WIDGET_PROP_Y_MIN(),

  /**
   * Y最大值。
   *
   *
   */
 Y_MAX : WIDGET_PROP_Y_MAX(),

  /**
   * 最大值。
   *
   *
   */
 MAX : WIDGET_PROP_MAX(),

  /**
   * 让窗口管理器直接把按键发给自己。
   *
   *
   */
 GRAB_KEYS : WIDGET_PROP_GRAB_KEYS(),

  /**
   * 行数或每行的高度。
   *
   *
   */
 ROW : WIDGET_PROP_ROW(),

  /**
   * 控件状态。
   *
   *
   */
 STATE_FOR_STYLE : WIDGET_PROP_STATE_FOR_STYLE(),

  /**
   * 窗口主题名称。
   *
   *
   */
 THEME : WIDGET_PROP_THEME(),

  /**
   * window stage
   *
   *
   */
 STAGE : WIDGET_PROP_STAGE(),

  /**
   * 图片管理器。
   *
   *
   */
 IMAGE_MANAGER : WIDGET_PROP_IMAGE_MANAGER(),

  /**
   * 资源管理器。
   *
   *
   */
 ASSETS_MANAGER : WIDGET_PROP_ASSETS_MANAGER(),

  /**
   * locale_info。
   *
   *
   */
 LOCALE_INFO : WIDGET_PROP_LOCALE_INFO(),

  /**
   * 字体管理器。
   *
   *
   */
 FONT_MANAGER : WIDGET_PROP_FONT_MANAGER(),

  /**
   * 窗口的主题对象。
   *
   *
   */
 THEME_OBJ : WIDGET_PROP_THEME_OBJ(),

  /**
   * 缺省的主题对象。
   *
   *
   */
 DEFAULT_THEME_OBJ : WIDGET_PROP_DEFAULT_THEME_OBJ(),

  /**
   * 项的宽度。
   *
   *
   */
 ITEM_WIDTH : WIDGET_PROP_ITEM_WIDTH(),

  /**
   * 项的高度。
   *
   *
   */
 ITEM_HEIGHT : WIDGET_PROP_ITEM_HEIGHT(),

  /**
   * 项的缺省高度。
   *
   *
   */
 DEFAULT_ITEM_HEIGHT : WIDGET_PROP_DEFAULT_ITEM_HEIGHT(),

  /**
   * X方向是否可拖动。
   *
   *
   */
 XSLIDABLE : WIDGET_PROP_XSLIDABLE(),

  /**
   * Y方向是否可拖动。
   *
   *
   */
 YSLIDABLE : WIDGET_PROP_YSLIDABLE(),

  /**
   * 重复次数。
   *
   *
   */
 REPEAT : WIDGET_PROP_REPEAT(),

  /**
   * 是否启用长按。
   *
   *
   */
 ENABLE_LONG_PRESS : WIDGET_PROP_ENABLE_LONG_PRESS(),

  /**
   * 是否启用动画。
   *
   *
   */
 ANIMATABLE : WIDGET_PROP_ANIMATABLE(),

  /**
   * 是否自动隐藏滚动条。
   *
   *
   */
 AUTO_HIDE_SCROLL_BAR : WIDGET_PROP_AUTO_HIDE_SCROLL_BAR(),

  /**
   * 图片名称。
   *
   *
   */
 IMAGE : WIDGET_PROP_IMAGE(),

  /**
   * 显示格式。
   *
   *
   */
 FORMAT : WIDGET_PROP_FORMAT(),

  /**
   * 图片绘制类型。
   *
   *
   */
 DRAW_TYPE : WIDGET_PROP_DRAW_TYPE(),

  /**
   * 是否可选择。
   *
   *
   */
 SELECTABLE : WIDGET_PROP_SELECTABLE(),

  /**
   * 是否可点击。
   *
   *
   */
 CLICKABLE : WIDGET_PROP_CLICKABLE(),

  /**
   * X方向缩放比例。
   *
   *
   */
 SCALE_X : WIDGET_PROP_SCALE_X(),

  /**
   * Y方向缩放比例。
   *
   *
   */
 SCALE_Y : WIDGET_PROP_SCALE_Y(),

  /**
   * x锚点。
   *
   *
   */
 ANCHOR_X : WIDGET_PROP_ANCHOR_X(),

  /**
   * y锚点。
   *
   *
   */
 ANCHOR_Y : WIDGET_PROP_ANCHOR_Y(),

  /**
   * 选中角度(幅度)
   *
   *
   */
 ROTATION : WIDGET_PROP_ROTATION(),

  /**
   * 紧凑模式。
   *
   *
   */
 COMPACT : WIDGET_PROP_COMPACT(),

  /**
   * 是否支持滚动。
   *
   *
   */
 SCROLLABLE : WIDGET_PROP_SCROLLABLE(),

  /**
   * 图标名称。
   *
   *
   */
 ICON : WIDGET_PROP_ICON(),

  /**
   * 选项集合。
   *
   *
   */
 OPTIONS : WIDGET_PROP_OPTIONS(),

  /**
   * 是否被选中。
   *
   *
   */
 SELECTED : WIDGET_PROP_SELECTED(),

  /**
   * 是否被勾选。
   *
   *
   */
 CHECKED : WIDGET_PROP_CHECKED(),

  /**
   * active状态下的图标。
   *
   *
   */
 ACTIVE_ICON : WIDGET_PROP_ACTIVE_ICON(),

  /**
   * 要打开窗口的名称。
   *
   *
   */
 OPEN_WINDOW : WIDGET_PROP_OPEN_WINDOW(),

  /**
   * 被选中项的索引。
   *
   *
   */
 SELECTED_INDEX : WIDGET_PROP_SELECTED_INDEX(),

  /**
   * 点击窗口时关闭窗口。
   *
   *
   */
 CLOSE_WHEN_CLICK : WIDGET_PROP_CLOSE_WHEN_CLICK(),

  /**
   * 点击窗口外部时关闭窗口。
   *
   *
   */
 CLOSE_WHEN_CLICK_OUTSIDE : WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE(),

  /**
   * 行间距。
   *
   *
   */
 LINE_GAP : WIDGET_PROP_LINE_GAP(),

  /**
   * 背景颜色(仅仅使用于color tile)。
   *
   *
   */
 BG_COLOR : WIDGET_PROP_BG_COLOR(),

  /**
   * 边框颜色(仅仅使用于color tile)。
   *
   *
   */
 BORDER_COLOR : WIDGET_PROP_BORDER_COLOR(),

  /**
   * 延迟时间(毫秒)
   *
   *
   */
 DELAY : WIDGET_PROP_DELAY(),

  /**
   * 是否为键盘。
   *
   *
   */
 IS_KEYBOARD : WIDGET_PROP_IS_KEYBOARD(),

  /**
   * 是否为焦点控件。
   *
   *
   */
 FOCUSED : WIDGET_PROP_FOCUSED(),

  /**
   * (过时请用focused)。
   *
   *
   */
 FOCUS : WIDGET_PROP_FOCUS(),

  /**
   * 是否支持焦点停留。
   *
   *
   */
 FOCUSABLE : WIDGET_PROP_FOCUSABLE(),

  /**
   * 是否支持焦点状态(如果希望style支持焦点状态，但有不希望焦点停留，可用本属性)。
   *
   *
   */
 WITH_FOCUS_STATE : WIDGET_PROP_WITH_FOCUS_STATE(),

  /**
   * 将焦点移到前一个的键值。
   *
   *
   */
 MOVE_FOCUS_PREV_KEY : WIDGET_PROP_MOVE_FOCUS_PREV_KEY(),

  /**
   * 将焦点移到后一个的键值。
   *
   *
   */
 MOVE_FOCUS_NEXT_KEY : WIDGET_PROP_MOVE_FOCUS_NEXT_KEY(),

  /**
   * 将焦点向上移动的键值。
   *
   *
   */
 MOVE_FOCUS_UP_KEY : WIDGET_PROP_MOVE_FOCUS_UP_KEY(),

  /**
   * 将焦点向下移动的键值。
   *
   *
   */
 MOVE_FOCUS_DOWN_KEY : WIDGET_PROP_MOVE_FOCUS_DOWN_KEY(),

  /**
   * 将焦点向左移动的键值。
   *
   *
   */
 MOVE_FOCUS_LEFT_KEY : WIDGET_PROP_MOVE_FOCUS_LEFT_KEY(),

  /**
   * 将焦点向右移动的键值。
   *
   *
   */
 MOVE_FOCUS_RIGHT_KEY : WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY(),
};

global.WIDGET_TYPE_NONE = function(){
 return "WIDGET_TYPE_NONE"
}

global.WIDGET_TYPE_WINDOW_MANAGER = function(){
 return "WIDGET_TYPE_WINDOW_MANAGER"
}

global.WIDGET_TYPE_NORMAL_WINDOW = function(){
 return "WIDGET_TYPE_NORMAL_WINDOW"
}

global.WIDGET_TYPE_OVERLAY = function(){
 return "WIDGET_TYPE_OVERLAY"
}

global.WIDGET_TYPE_TOOL_BAR = function(){
 return "WIDGET_TYPE_TOOL_BAR"
}

global.WIDGET_TYPE_DIALOG = function(){
 return "WIDGET_TYPE_DIALOG"
}

global.WIDGET_TYPE_POPUP = function(){
 return "WIDGET_TYPE_POPUP"
}

global.WIDGET_TYPE_SYSTEM_BAR = function(){
 return "WIDGET_TYPE_SYSTEM_BAR"
}

global.WIDGET_TYPE_SYSTEM_BAR_BOTTOM = function(){
 return "WIDGET_TYPE_SYSTEM_BAR_BOTTOM"
}

global.WIDGET_TYPE_SPRITE = function(){
 return "WIDGET_TYPE_SPRITE"
}

global.WIDGET_TYPE_KEYBOARD = function(){
 return "WIDGET_TYPE_KEYBOARD"
}

global.WIDGET_TYPE_DND = function(){
 return "WIDGET_TYPE_DND"
}

global.WIDGET_TYPE_LABEL = function(){
 return "WIDGET_TYPE_LABEL"
}

global.WIDGET_TYPE_BUTTON = function(){
 return "WIDGET_TYPE_BUTTON"
}

global.WIDGET_TYPE_IMAGE = function(){
 return "WIDGET_TYPE_IMAGE"
}

global.WIDGET_TYPE_EDIT = function(){
 return "WIDGET_TYPE_EDIT"
}

global.WIDGET_TYPE_PROGRESS_BAR = function(){
 return "WIDGET_TYPE_PROGRESS_BAR"
}

global.WIDGET_TYPE_GROUP_BOX = function(){
 return "WIDGET_TYPE_GROUP_BOX"
}

global.WIDGET_TYPE_CHECK_BUTTON = function(){
 return "WIDGET_TYPE_CHECK_BUTTON"
}

global.WIDGET_TYPE_RADIO_BUTTON = function(){
 return "WIDGET_TYPE_RADIO_BUTTON"
}

global.WIDGET_TYPE_DIALOG_TITLE = function(){
 return "WIDGET_TYPE_DIALOG_TITLE"
}

global.WIDGET_TYPE_DIALOG_CLIENT = function(){
 return "WIDGET_TYPE_DIALOG_CLIENT"
}

global.WIDGET_TYPE_SLIDER = function(){
 return "WIDGET_TYPE_SLIDER"
}

global.WIDGET_TYPE_VIEW = function(){
 return "WIDGET_TYPE_VIEW"
}

global.WIDGET_TYPE_COMBO_BOX = function(){
 return "WIDGET_TYPE_COMBO_BOX"
}

global.WIDGET_TYPE_COMBO_BOX_ITEM = function(){
 return "WIDGET_TYPE_COMBO_BOX_ITEM"
}

global.WIDGET_TYPE_SLIDE_VIEW = function(){
 return "WIDGET_TYPE_SLIDE_VIEW"
}

global.WIDGET_TYPE_SLIDE_INDICATOR = function(){
 return "WIDGET_TYPE_SLIDE_INDICATOR"
}

global.WIDGET_TYPE_SLIDE_INDICATOR_ARC = function(){
 return "WIDGET_TYPE_SLIDE_INDICATOR_ARC"
}

global.WIDGET_TYPE_PAGES = function(){
 return "WIDGET_TYPE_PAGES"
}

global.WIDGET_TYPE_TAB_BUTTON = function(){
 return "WIDGET_TYPE_TAB_BUTTON"
}

global.WIDGET_TYPE_TAB_CONTROL = function(){
 return "WIDGET_TYPE_TAB_CONTROL"
}

global.WIDGET_TYPE_TAB_BUTTON_GROUP = function(){
 return "WIDGET_TYPE_TAB_BUTTON_GROUP"
}

global.WIDGET_TYPE_BUTTON_GROUP = function(){
 return "WIDGET_TYPE_BUTTON_GROUP"
}

global.WIDGET_TYPE_CANDIDATES = function(){
 return "WIDGET_TYPE_CANDIDATES"
}

global.WIDGET_TYPE_SPIN_BOX = function(){
 return "WIDGET_TYPE_SPIN_BOX"
}

global.WIDGET_TYPE_DRAGGER = function(){
 return "WIDGET_TYPE_DRAGGER"
}

global.WIDGET_TYPE_SCROLL_BAR = function(){
 return "WIDGET_TYPE_SCROLL_BAR"
}

global.WIDGET_TYPE_SCROLL_BAR_DESKTOP = function(){
 return "WIDGET_TYPE_SCROLL_BAR_DESKTOP"
}

global.WIDGET_TYPE_SCROLL_BAR_MOBILE = function(){
 return "WIDGET_TYPE_SCROLL_BAR_MOBILE"
}

global.WIDGET_TYPE_SCROLL_VIEW = function(){
 return "WIDGET_TYPE_SCROLL_VIEW"
}

global.WIDGET_TYPE_LIST_VIEW = function(){
 return "WIDGET_TYPE_LIST_VIEW"
}

global.WIDGET_TYPE_LIST_VIEW_H = function(){
 return "WIDGET_TYPE_LIST_VIEW_H"
}

global.WIDGET_TYPE_LIST_ITEM = function(){
 return "WIDGET_TYPE_LIST_ITEM"
}

global.WIDGET_TYPE_COLOR_PICKER = function(){
 return "WIDGET_TYPE_COLOR_PICKER"
}

global.WIDGET_TYPE_COLOR_COMPONENT = function(){
 return "WIDGET_TYPE_COLOR_COMPONENT"
}

global.WIDGET_TYPE_COLOR_TILE = function(){
 return "WIDGET_TYPE_COLOR_TILE"
}

global.WIDGET_TYPE_RICH_TEXT = function(){
 return "WIDGET_TYPE_RICH_TEXT"
}

global.WIDGET_TYPE_APP_BAR = function(){
 return "WIDGET_TYPE_APP_BAR"
}

global.WIDGET_TYPE_GRID = function(){
 return "WIDGET_TYPE_GRID"
}

global.WIDGET_TYPE_GRID_ITEM = function(){
 return "WIDGET_TYPE_GRID_ITEM"
}

global.WIDGET_TYPE_ROW = function(){
 return "WIDGET_TYPE_ROW"
}

global.WIDGET_TYPE_COLUMN = function(){
 return "WIDGET_TYPE_COLUMN"
}

global.WIDGET_TYPE_CALIBRATION_WIN = function(){
 return "WIDGET_TYPE_CALIBRATION_WIN"
}


/**
 * 控件的类型。
 *
 *
 */
global.TWidgetType = {

  /**
   * 无特殊类型。
   *
   *
   */
 NONE : WIDGET_TYPE_NONE(),

  /**
   * 窗口管理器。
   *
   *
   */
 WINDOW_MANAGER : WIDGET_TYPE_WINDOW_MANAGER(),

  /**
   * 普通窗口。
   *
   *
   */
 NORMAL_WINDOW : WIDGET_TYPE_NORMAL_WINDOW(),

  /**
   * overlay窗口。
   *
   *
   */
 OVERLAY : WIDGET_TYPE_OVERLAY(),

  /**
   * 工具条。
   *
   *
   */
 TOOL_BAR : WIDGET_TYPE_TOOL_BAR(),

  /**
   * 对话框。
   *
   *
   */
 DIALOG : WIDGET_TYPE_DIALOG(),

  /**
   * 弹出窗口。
   *
   *
   */
 POPUP : WIDGET_TYPE_POPUP(),

  /**
   * system bar window
   *
   *
   */
 SYSTEM_BAR : WIDGET_TYPE_SYSTEM_BAR(),

  /**
   * system bar window ato bottom
   *
   *
   */
 SYSTEM_BAR_BOTTOM : WIDGET_TYPE_SYSTEM_BAR_BOTTOM(),

  /**
   * 精灵窗口。
   *
   *
   */
 SPRITE : WIDGET_TYPE_SPRITE(),

  /**
   * 键盘窗口。
   *
   *
   */
 KEYBOARD : WIDGET_TYPE_KEYBOARD(),

  /**
   * 拖放状态窗口。
   *
   *
   */
 DND : WIDGET_TYPE_DND(),

  /**
   * 文本控件。
   *
   *
   */
 LABEL : WIDGET_TYPE_LABEL(),

  /**
   * 按钮控件。
   *
   *
   */
 BUTTON : WIDGET_TYPE_BUTTON(),

  /**
   * 图片控件。
   *
   *
   */
 IMAGE : WIDGET_TYPE_IMAGE(),

  /**
   * 文本编辑控件。
   *
   *
   */
 EDIT : WIDGET_TYPE_EDIT(),

  /**
   * 进度条控件。
   *
   *
   */
 PROGRESS_BAR : WIDGET_TYPE_PROGRESS_BAR(),

  /**
   * 分组控件。
   *
   *
   */
 GROUP_BOX : WIDGET_TYPE_GROUP_BOX(),

  /**
   * 多选按钮控件。
   *
   *
   */
 CHECK_BUTTON : WIDGET_TYPE_CHECK_BUTTON(),

  /**
   * 单选按钮控件。
   *
   *
   */
 RADIO_BUTTON : WIDGET_TYPE_RADIO_BUTTON(),

  /**
   * 对话框标题。
   *
   *
   */
 DIALOG_TITLE : WIDGET_TYPE_DIALOG_TITLE(),

  /**
   * 对话框客户区域。
   *
   *
   */
 DIALOG_CLIENT : WIDGET_TYPE_DIALOG_CLIENT(),

  /**
   * 滑块控件。
   *
   *
   */
 SLIDER : WIDGET_TYPE_SLIDER(),

  /**
   * 视图控件。
   *
   *
   */
 VIEW : WIDGET_TYPE_VIEW(),

  /**
   * 下拉选择框控件。
   *
   *
   */
 COMBO_BOX : WIDGET_TYPE_COMBO_BOX(),

  /**
   * 下拉选择框的列表项控件。
   *
   *
   */
 COMBO_BOX_ITEM : WIDGET_TYPE_COMBO_BOX_ITEM(),

  /**
   * 滑动视图控件。
   *
   *
   */
 SLIDE_VIEW : WIDGET_TYPE_SLIDE_VIEW(),

  /**
   * 滑动视图的指示器控件。
   *
   *
   */
 SLIDE_INDICATOR : WIDGET_TYPE_SLIDE_INDICATOR(),

  /**
   * 滑动视图的指示器控件（圆弧显示）。
   *
   *
   */
 SLIDE_INDICATOR_ARC : WIDGET_TYPE_SLIDE_INDICATOR_ARC(),

  /**
   * 多页控件。
   *
   *
   */
 PAGES : WIDGET_TYPE_PAGES(),

  /**
   * 标签按钮控件。
   *
   *
   */
 TAB_BUTTON : WIDGET_TYPE_TAB_BUTTON(),

  /**
   * 标签控件。
   *
   *
   */
 TAB_CONTROL : WIDGET_TYPE_TAB_CONTROL(),

  /**
   * 标签按钮分组控件。
   *
   *
   */
 TAB_BUTTON_GROUP : WIDGET_TYPE_TAB_BUTTON_GROUP(),

  /**
   * 按钮分组控件。
   *
   *
   */
 BUTTON_GROUP : WIDGET_TYPE_BUTTON_GROUP(),

  /**
   * 候选字控件。
   *
   *
   */
 CANDIDATES : WIDGET_TYPE_CANDIDATES(),

  /**
   * 数值编辑控件。
   *
   *
   */
 SPIN_BOX : WIDGET_TYPE_SPIN_BOX(),

  /**
   * 拖动块控件。
   *
   *
   */
 DRAGGER : WIDGET_TYPE_DRAGGER(),

  /**
   * 滚动条控件。
   *
   *
   */
 SCROLL_BAR : WIDGET_TYPE_SCROLL_BAR(),

  /**
   * 桌面版滚动条控件。
   *
   *
   */
 SCROLL_BAR_DESKTOP : WIDGET_TYPE_SCROLL_BAR_DESKTOP(),

  /**
   * 移动版滚动条控件。
   *
   *
   */
 SCROLL_BAR_MOBILE : WIDGET_TYPE_SCROLL_BAR_MOBILE(),

  /**
   * 滚动视图控件。
   *
   *
   */
 SCROLL_VIEW : WIDGET_TYPE_SCROLL_VIEW(),

  /**
   * 列表视图控件。
   *
   *
   */
 LIST_VIEW : WIDGET_TYPE_LIST_VIEW(),

  /**
   * 水平列表视图控件。
   *
   *
   */
 LIST_VIEW_H : WIDGET_TYPE_LIST_VIEW_H(),

  /**
   * 列表项控件。
   *
   *
   */
 LIST_ITEM : WIDGET_TYPE_LIST_ITEM(),

  /**
   * 颜色选择器控件。
   *
   *
   */
 COLOR_PICKER : WIDGET_TYPE_COLOR_PICKER(),

  /**
   * 颜色选择器组件控件。
   *
   *
   */
 COLOR_COMPONENT : WIDGET_TYPE_COLOR_COMPONENT(),

  /**
   * 颜色块控件。
   *
   *
   */
 COLOR_TILE : WIDGET_TYPE_COLOR_TILE(),

  /**
   * 富文本控件。
   *
   *
   */
 RICH_TEXT : WIDGET_TYPE_RICH_TEXT(),

  /**
   * AppBar控件。
   *
   *
   */
 APP_BAR : WIDGET_TYPE_APP_BAR(),

  /**
   * 网格控件。
   *
   *
   */
 GRID : WIDGET_TYPE_GRID(),

  /**
   * 网格项目控件。
   *
   *
   */
 GRID_ITEM : WIDGET_TYPE_GRID_ITEM(),

  /**
   * 行控件。
   *
   *
   */
 ROW : WIDGET_TYPE_ROW(),

  /**
   * 列控件。
   *
   *
   */
 COLUMN : WIDGET_TYPE_COLUMN(),

  /**
   * 电阻屏校准窗口。
   *
   *
   */
 CALIBRATION_WIN : WIDGET_TYPE_CALIBRATION_WIN(),
};

global.WINDOW_STAGE_NONE = function(){
 return "WINDOW_STAGE_NONE"
}

global.WINDOW_STAGE_CREATED = function(){
 return "WINDOW_STAGE_CREATED"
}

global.WINDOW_STAGE_OPENED = function(){
 return "WINDOW_STAGE_OPENED"
}

global.WINDOW_STAGE_CLOSED = function(){
 return "WINDOW_STAGE_CLOSED"
}


/**
 * 窗口的生命周期常量定义。
 *
 *
 */
global.TWindowStage = {

  /**
   * 初始状态。
   *
   *
   */
 NONE : WINDOW_STAGE_NONE(),

  /**
   * 创建完成。
   *
   *
   */
 CREATED : WINDOW_STAGE_CREATED(),

  /**
   * 窗口已经打开(窗口打开动画完成后，处于该状态，直到窗口被关闭)
   *
   *
   */
 OPENED : WINDOW_STAGE_OPENED(),

  /**
   * 窗口已关闭。
   *
   *
   */
 CLOSED : WINDOW_STAGE_CLOSED(),
};

global.WINDOW_CLOSABLE_YES = function(){
 return "WINDOW_CLOSABLE_YES"
}

global.WINDOW_CLOSABLE_NO = function(){
 return "WINDOW_CLOSABLE_NO"
}

global.WINDOW_CLOSABLE_CONFIRM = function(){
 return "WINDOW_CLOSABLE_CONFIRM"
}


/**
 * 窗口的closable常量定义。
 *
 *
 */
global.TWindowClosable = {

  /**
   * 窗口可关闭。
   *
   *
   */
 YES : WINDOW_CLOSABLE_YES(),

  /**
   * 窗口不可关闭。
   *
   *
   */
 NO : WINDOW_CLOSABLE_NO(),

  /**
   * 窗口需要确认后才能关闭。
   *
   *
   */
 CONFIRM : WINDOW_CLOSABLE_CONFIRM(),
};

global.WIDGET_STATE_NONE = function(){
 return "WIDGET_STATE_NONE"
}

global.WIDGET_STATE_NORMAL = function(){
 return "WIDGET_STATE_NORMAL"
}

global.WIDGET_STATE_PRESSED = function(){
 return "WIDGET_STATE_PRESSED"
}

global.WIDGET_STATE_OVER = function(){
 return "WIDGET_STATE_OVER"
}

global.WIDGET_STATE_DISABLE = function(){
 return "WIDGET_STATE_DISABLE"
}

global.WIDGET_STATE_FOCUSED = function(){
 return "WIDGET_STATE_FOCUSED"
}

global.WIDGET_STATE_CHECKED = function(){
 return "WIDGET_STATE_CHECKED"
}

global.WIDGET_STATE_UNCHECKED = function(){
 return "WIDGET_STATE_UNCHECKED"
}

global.WIDGET_STATE_EMPTY = function(){
 return "WIDGET_STATE_EMPTY"
}

global.WIDGET_STATE_EMPTY_FOCUS = function(){
 return "WIDGET_STATE_EMPTY_FOCUS"
}

global.WIDGET_STATE_ERROR = function(){
 return "WIDGET_STATE_ERROR"
}

global.WIDGET_STATE_SELECTED = function(){
 return "WIDGET_STATE_SELECTED"
}

global.WIDGET_STATE_NORMAL_OF_CHECKED = function(){
 return "WIDGET_STATE_NORMAL_OF_CHECKED"
}

global.WIDGET_STATE_PRESSED_OF_CHECKED = function(){
 return "WIDGET_STATE_PRESSED_OF_CHECKED"
}

global.WIDGET_STATE_OVER_OF_CHECKED = function(){
 return "WIDGET_STATE_OVER_OF_CHECKED"
}

global.WIDGET_STATE_FOCUSED_OF_CHECKED = function(){
 return "WIDGET_STATE_FOCUSED_OF_CHECKED"
}

global.WIDGET_STATE_NORMAL_OF_ACTIVE = function(){
 return "WIDGET_STATE_NORMAL_OF_ACTIVE"
}

global.WIDGET_STATE_PRESSED_OF_ACTIVE = function(){
 return "WIDGET_STATE_PRESSED_OF_ACTIVE"
}

global.WIDGET_STATE_OVER_OF_ACTIVE = function(){
 return "WIDGET_STATE_OVER_OF_ACTIVE"
}

global.WIDGET_STATE_FOCUSED_OF_ACTIVE = function(){
 return "WIDGET_STATE_FOCUSED_OF_ACTIVE"
}


/**
 * 控件状态常量定义。
 *这里指定常用的状态值，扩展控件可以在自己的头文件中定义私有的状态。
 *
 *
 */
global.TWidgetState = {

  /**
   * 无效状态。
   *
   *
   */
 STATE_NONE : WIDGET_STATE_NONE(),

  /**
   * 正常状态。
   *
   *
   */
 STATE_NORMAL : WIDGET_STATE_NORMAL(),

  /**
   * 指针按下状态。
   *
   *
   */
 STATE_PRESSED : WIDGET_STATE_PRESSED(),

  /**
   * 指针悬浮状态。
   *
   *
   */
 STATE_OVER : WIDGET_STATE_OVER(),

  /**
   * 禁用状态。
   *
   *
   */
 STATE_DISABLE : WIDGET_STATE_DISABLE(),

  /**
   * 聚焦状态。
   *
   *
   */
 STATE_FOCUSED : WIDGET_STATE_FOCUSED(),

  /**
   * 勾选状态。
   *
   *
   */
 STATE_CHECKED : WIDGET_STATE_CHECKED(),

  /**
   * 没勾选状态。
   *
   *
   */
 STATE_UNCHECKED : WIDGET_STATE_UNCHECKED(),

  /**
   * 编辑器无内容状态。
   *
   *
   */
 STATE_EMPTY : WIDGET_STATE_EMPTY(),

  /**
   * 编辑器无内容同时聚焦的状态。
   *
   *
   */
 STATE_EMPTY_FOCUS : WIDGET_STATE_EMPTY_FOCUS(),

  /**
   * 输入错误状态。
   *
   *
   */
 STATE_ERROR : WIDGET_STATE_ERROR(),

  /**
   * 选中状态。
   *
   *
   */
 STATE_SELECTED : WIDGET_STATE_SELECTED(),

  /**
   * 正常状态(选中项)。
   *
   *
   */
 STATE_NORMAL_OF_CHECKED : WIDGET_STATE_NORMAL_OF_CHECKED(),

  /**
   * 指针按下状态(选中项)。
   *
   *
   */
 STATE_PRESSED_OF_CHECKED : WIDGET_STATE_PRESSED_OF_CHECKED(),

  /**
   * 指针悬浮状态(选中项)。
   *
   *
   */
 STATE_OVER_OF_CHECKED : WIDGET_STATE_OVER_OF_CHECKED(),

  /**
   * 焦点状态(选中项)。
   *
   *
   */
 STATE_FOCUSED_OF_CHECKED : WIDGET_STATE_FOCUSED_OF_CHECKED(),

  /**
   * 正常状态(当前项)。
   *
   *
   */
 STATE_NORMAL_OF_ACTIVE : WIDGET_STATE_NORMAL_OF_ACTIVE(),

  /**
   * 指针按下状态(当前项)。
   *
   *
   */
 STATE_PRESSED_OF_ACTIVE : WIDGET_STATE_PRESSED_OF_ACTIVE(),

  /**
   * 指针悬浮状态(当前项)。
   *
   *
   */
 STATE_OVER_OF_ACTIVE : WIDGET_STATE_OVER_OF_ACTIVE(),

  /**
   * 焦点状态(当前项)。
   *
   *
   */
 STATE_FOCUSED_OF_ACTIVE : WIDGET_STATE_FOCUSED_OF_ACTIVE(),
};

global.widget_count_children = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_count_children( widget ) :${widget}`)
  return undefined
}

global.widget_get_child = function( widget, index ){
  global.__AwtkSnapshot.push(`funtion  widget_get_child( widget, index ) :${widget}, ${index}`)
  return undefined
}

global.widget_index_of = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_index_of( widget ) :${widget}`)
  return undefined
}

global.widget_move = function( widget, x, y ){
  global.__AwtkSnapshot.push(`funtion  widget_move( widget, x, y ) :${widget}, ${x}, ${y}`)
  return undefined
}

global.widget_resize = function( widget, w, h ){
  global.__AwtkSnapshot.push(`funtion  widget_resize( widget, w, h ) :${widget}, ${w}, ${h}`)
  return undefined
}

global.widget_move_resize = function( widget, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  widget_move_resize( widget, x, y, w, h ) :${widget}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.widget_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  widget_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.widget_animate_value_to = function( widget, value, duration ){
  global.__AwtkSnapshot.push(`funtion  widget_animate_value_to( widget, value, duration ) :${widget}, ${value}, ${duration}`)
  return undefined
}

global.widget_add_value = function( widget, delta ){
  global.__AwtkSnapshot.push(`funtion  widget_add_value( widget, delta ) :${widget}, ${delta}`)
  return undefined
}

global.widget_use_style = function( widget, style ){
  global.__AwtkSnapshot.push(`funtion  widget_use_style( widget, style ) :${widget}, ${style}`)
  return undefined
}

global.widget_set_text_utf8 = function( widget, text ){
  global.__AwtkSnapshot.push(`funtion  widget_set_text_utf8( widget, text ) :${widget}, ${text}`)
  return undefined
}

global.widget_set_tr_text = function( widget, text ){
  global.__AwtkSnapshot.push(`funtion  widget_set_tr_text( widget, text ) :${widget}, ${text}`)
  return undefined
}

global.widget_get_value = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_get_value( widget ) :${widget}`)
  return undefined
}

global.widget_get_text = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_get_text( widget ) :${widget}`)
  return undefined
}

global.widget_set_name = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  widget_set_name( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.widget_set_theme = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  widget_set_theme( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.widget_set_pointer_cursor = function( widget, cursor ){
  global.__AwtkSnapshot.push(`funtion  widget_set_pointer_cursor( widget, cursor ) :${widget}, ${cursor}`)
  return undefined
}

global.widget_set_animation = function( widget, animation ){
  global.__AwtkSnapshot.push(`funtion  widget_set_animation( widget, animation ) :${widget}, ${animation}`)
  return undefined
}

global.widget_create_animator = function( widget, animation ){
  global.__AwtkSnapshot.push(`funtion  widget_create_animator( widget, animation ) :${widget}, ${animation}`)
  return undefined
}

global.widget_start_animator = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  widget_start_animator( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.widget_set_animator_time_scale = function( widget, name, time_scale ){
  global.__AwtkSnapshot.push(`funtion  widget_set_animator_time_scale( widget, name, time_scale ) :${widget}, ${name}, ${time_scale}`)
  return undefined
}

global.widget_pause_animator = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  widget_pause_animator( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.widget_stop_animator = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  widget_stop_animator( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.widget_destroy_animator = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  widget_destroy_animator( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.widget_set_enable = function( widget, enable ){
  global.__AwtkSnapshot.push(`funtion  widget_set_enable( widget, enable ) :${widget}, ${enable}`)
  return undefined
}

global.widget_set_feedback = function( widget, feedback ){
  global.__AwtkSnapshot.push(`funtion  widget_set_feedback( widget, feedback ) :${widget}, ${feedback}`)
  return undefined
}

global.widget_set_floating = function( widget, floating ){
  global.__AwtkSnapshot.push(`funtion  widget_set_floating( widget, floating ) :${widget}, ${floating}`)
  return undefined
}

global.widget_set_focused = function( widget, focused ){
  global.__AwtkSnapshot.push(`funtion  widget_set_focused( widget, focused ) :${widget}, ${focused}`)
  return undefined
}

global.widget_set_state = function( widget, state ){
  global.__AwtkSnapshot.push(`funtion  widget_set_state( widget, state ) :${widget}, ${state}`)
  return undefined
}

global.widget_set_opacity = function( widget, opacity ){
  global.__AwtkSnapshot.push(`funtion  widget_set_opacity( widget, opacity ) :${widget}, ${opacity}`)
  return undefined
}

global.widget_destroy_children = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_destroy_children( widget ) :${widget}`)
  return undefined
}

global.widget_add_child = function( widget, child ){
  global.__AwtkSnapshot.push(`funtion  widget_add_child( widget, child ) :${widget}, ${child}`)
  return undefined
}

global.widget_remove_child = function( widget, child ){
  global.__AwtkSnapshot.push(`funtion  widget_remove_child( widget, child ) :${widget}, ${child}`)
  return undefined
}

global.widget_insert_child = function( widget, index, child ){
  global.__AwtkSnapshot.push(`funtion  widget_insert_child( widget, index, child ) :${widget}, ${index}, ${child}`)
  return undefined
}

global.widget_restack = function( widget, index ){
  global.__AwtkSnapshot.push(`funtion  widget_restack( widget, index ) :${widget}, ${index}`)
  return undefined
}

global.widget_child = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  widget_child( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.widget_lookup = function( widget, name, recursive ){
  global.__AwtkSnapshot.push(`funtion  widget_lookup( widget, name, recursive ) :${widget}, ${name}, ${recursive}`)
  return undefined
}

global.widget_lookup_by_type = function( widget, type, recursive ){
  global.__AwtkSnapshot.push(`funtion  widget_lookup_by_type( widget, type, recursive ) :${widget}, ${type}, ${recursive}`)
  return undefined
}

global.widget_set_visible = function( widget, visible, recursive ){
  global.__AwtkSnapshot.push(`funtion  widget_set_visible( widget, visible, recursive ) :${widget}, ${visible}, ${recursive}`)
  return undefined
}

global.widget_set_visible_only = function( widget, visible ){
  global.__AwtkSnapshot.push(`funtion  widget_set_visible_only( widget, visible ) :${widget}, ${visible}`)
  return undefined
}

global.widget_set_sensitive = function( widget, sensitive ){
  global.__AwtkSnapshot.push(`funtion  widget_set_sensitive( widget, sensitive ) :${widget}, ${sensitive}`)
  return undefined
}

global.widget_on = function( widget, type, on_event, ctx ){
  global.__AwtkSnapshot.push(`funtion  widget_on( widget, type, on_event, ctx ) :${widget}, ${type}, ${on_event}, ${ctx}`)
  return undefined
}

global.widget_off = function( widget, id ){
  global.__AwtkSnapshot.push(`funtion  widget_off( widget, id ) :${widget}, ${id}`)
  return undefined
}

global.widget_invalidate_force = function( widget, r ){
  global.__AwtkSnapshot.push(`funtion  widget_invalidate_force( widget, r ) :${widget}, ${r}`)
  return undefined
}

global.widget_set_prop_str = function( widget, name, v ){
  global.__AwtkSnapshot.push(`funtion  widget_set_prop_str( widget, name, v ) :${widget}, ${name}, ${v}`)
  return undefined
}

global.widget_get_prop_str = function( widget, name, defval ){
  global.__AwtkSnapshot.push(`funtion  widget_get_prop_str( widget, name, defval ) :${widget}, ${name}, ${defval}`)
  return undefined
}

global.widget_set_prop_int = function( widget, name, v ){
  global.__AwtkSnapshot.push(`funtion  widget_set_prop_int( widget, name, v ) :${widget}, ${name}, ${v}`)
  return undefined
}

global.widget_get_prop_int = function( widget, name, defval ){
  global.__AwtkSnapshot.push(`funtion  widget_get_prop_int( widget, name, defval ) :${widget}, ${name}, ${defval}`)
  return undefined
}

global.widget_set_prop_bool = function( widget, name, v ){
  global.__AwtkSnapshot.push(`funtion  widget_set_prop_bool( widget, name, v ) :${widget}, ${name}, ${v}`)
  return undefined
}

global.widget_get_prop_bool = function( widget, name, defval ){
  global.__AwtkSnapshot.push(`funtion  widget_get_prop_bool( widget, name, defval ) :${widget}, ${name}, ${defval}`)
  return undefined
}

global.widget_is_window_opened = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_is_window_opened( widget ) :${widget}`)
  return undefined
}

global.widget_is_window = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_is_window( widget ) :${widget}`)
  return undefined
}

global.widget_is_designing_window = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_is_designing_window( widget ) :${widget}`)
  return undefined
}

global.widget_is_window_manager = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_is_window_manager( widget ) :${widget}`)
  return undefined
}

global.widget_foreach = function( widget, visit, ctx ){
  global.__AwtkSnapshot.push(`funtion  widget_foreach( widget, visit, ctx ) :${widget}, ${visit}, ${ctx}`)
  return undefined
}

global.widget_get_window = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_get_window( widget ) :${widget}`)
  return undefined
}

global.widget_get_window_manager = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_get_window_manager( widget ) :${widget}`)
  return undefined
}

global.widget_get_type = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_get_type( widget ) :${widget}`)
  return undefined
}

global.widget_clone = function( widget, parent ){
  global.__AwtkSnapshot.push(`funtion  widget_clone( widget, parent ) :${widget}, ${parent}`)
  return undefined
}

global.widget_equal = function( widget, other ){
  global.__AwtkSnapshot.push(`funtion  widget_equal( widget, other ) :${widget}, ${other}`)
  return undefined
}

global.widget_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_cast( widget ) :${widget}`)
  return undefined
}

global.widget_destroy = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_destroy( widget ) :${widget}`)
  return undefined
}

global.widget_unref = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_unref( widget ) :${widget}`)
  return undefined
}

global.widget_layout = function( widget ){
  global.__AwtkSnapshot.push(`funtion  widget_layout( widget ) :${widget}`)
  return undefined
}

global.widget_set_self_layout = function( widget, params ){
  global.__AwtkSnapshot.push(`funtion  widget_set_self_layout( widget, params ) :${widget}, ${params}`)
  return undefined
}

global.widget_set_children_layout = function( widget, params ){
  global.__AwtkSnapshot.push(`funtion  widget_set_children_layout( widget, params ) :${widget}, ${params}`)
  return undefined
}

global.widget_set_self_layout_params = function( widget, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  widget_set_self_layout_params( widget, x, y, w, h ) :${widget}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.widget_set_style_int = function( widget, state_and_name, value ){
  global.__AwtkSnapshot.push(`funtion  widget_set_style_int( widget, state_and_name, value ) :${widget}, ${state_and_name}, ${value}`)
  return undefined
}

global.widget_set_style_str = function( widget, state_and_name, value ){
  global.__AwtkSnapshot.push(`funtion  widget_set_style_str( widget, state_and_name, value ) :${widget}, ${state_and_name}, ${value}`)
  return undefined
}

global.widget_set_style_color = function( widget, state_and_name, value ){
  global.__AwtkSnapshot.push(`funtion  widget_set_style_color( widget, state_and_name, value ) :${widget}, ${state_and_name}, ${value}`)
  return undefined
}

global.widget_t_get_prop_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_x`)
  return "widget_t_get_prop_x"
}

global.widget_t_get_prop_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_y`)
  return "widget_t_get_prop_y"
}

global.widget_t_get_prop_w = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_w`)
  return "widget_t_get_prop_w"
}

global.widget_t_get_prop_h = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_h`)
  return "widget_t_get_prop_h"
}

global.widget_t_get_prop_name = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_name`)
  return "widget_t_get_prop_name"
}

global.widget_t_get_prop_tr_text = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_tr_text`)
  return "widget_t_get_prop_tr_text"
}

global.widget_t_get_prop_style = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_style`)
  return "widget_t_get_prop_style"
}

global.widget_t_get_prop_animation = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_animation`)
  return "widget_t_get_prop_animation"
}

global.widget_t_get_prop_enable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_enable`)
  return "widget_t_get_prop_enable"
}

global.widget_t_get_prop_feedback = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_feedback`)
  return "widget_t_get_prop_feedback"
}

global.widget_t_get_prop_visible = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_visible`)
  return "widget_t_get_prop_visible"
}

global.widget_t_get_prop_visible = function (nativeObj){
  global.__AwtkSnapshot.push( `set properties  widget_t_get_prop_visible`)
}

global.widget_t_get_prop_sensitive = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_sensitive`)
  return "widget_t_get_prop_sensitive"
}

global.widget_t_get_prop_sensitive = function (nativeObj){
  global.__AwtkSnapshot.push( `set properties  widget_t_get_prop_sensitive`)
}

global.widget_t_get_prop_focusable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_focusable`)
  return "widget_t_get_prop_focusable"
}

global.widget_t_get_prop_focusable = function (nativeObj){
  global.__AwtkSnapshot.push( `set properties  widget_t_get_prop_focusable`)
}

global.widget_t_get_prop_with_focus_state = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_with_focus_state`)
  return "widget_t_get_prop_with_focus_state"
}

global.widget_t_get_prop_with_focus_state = function (nativeObj){
  global.__AwtkSnapshot.push( `set properties  widget_t_get_prop_with_focus_state`)
}

global.widget_t_get_prop_floating = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_floating`)
  return "widget_t_get_prop_floating"
}

global.widget_t_get_prop_parent = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  widget_t_get_prop_parent`)
  return "widget_t_get_prop_parent"
}

global.RET_OK = function(){
 return "RET_OK"
}

global.RET_OOM = function(){
 return "RET_OOM"
}

global.RET_FAIL = function(){
 return "RET_FAIL"
}

global.RET_NOT_IMPL = function(){
 return "RET_NOT_IMPL"
}

global.RET_QUIT = function(){
 return "RET_QUIT"
}

global.RET_FOUND = function(){
 return "RET_FOUND"
}

global.RET_BUSY = function(){
 return "RET_BUSY"
}

global.RET_REMOVE = function(){
 return "RET_REMOVE"
}

global.RET_REPEAT = function(){
 return "RET_REPEAT"
}

global.RET_NOT_FOUND = function(){
 return "RET_NOT_FOUND"
}

global.RET_DONE = function(){
 return "RET_DONE"
}

global.RET_STOP = function(){
 return "RET_STOP"
}

global.RET_SKIP = function(){
 return "RET_SKIP"
}

global.RET_CONTINUE = function(){
 return "RET_CONTINUE"
}

global.RET_OBJECT_CHANGED = function(){
 return "RET_OBJECT_CHANGED"
}

global.RET_ITEMS_CHANGED = function(){
 return "RET_ITEMS_CHANGED"
}

global.RET_BAD_PARAMS = function(){
 return "RET_BAD_PARAMS"
}

global.RET_TIMEOUT = function(){
 return "RET_TIMEOUT"
}

global.RET_CRC = function(){
 return "RET_CRC"
}

global.RET_IO = function(){
 return "RET_IO"
}

global.RET_EOS = function(){
 return "RET_EOS"
}


/**
 * 函数返回值常量定义。
 *
 *
 */
global.TRet = {

  /**
   * 成功。
   *
   *
   */
 OK : RET_OK(),

  /**
   * Out of memory。
   *
   *
   */
 OOM : RET_OOM(),

  /**
   * 失败。
   *
   *
   */
 FAIL : RET_FAIL(),

  /**
   * 没有实现/不支持。
   *
   *
   */
 NOT_IMPL : RET_NOT_IMPL(),

  /**
   * 退出。通常用于主循环。
   *
   *
   */
 QUIT : RET_QUIT(),

  /**
   * 找到。
   *
   *
   */
 FOUND : RET_FOUND(),

  /**
   * 对象忙。
   *
   *
   */
 BUSY : RET_BUSY(),

  /**
   * 移出。通常用于定时器。
   *
   *
   */
 REMOVE : RET_REMOVE(),

  /**
   * 重复。通常用于定时器。
   *
   *
   */
 REPEAT : RET_REPEAT(),

  /**
   * 没找到。
   *
   *
   */
 NOT_FOUND : RET_NOT_FOUND(),

  /**
   * 操作完成。
   *
   *
   */
 DONE : RET_DONE(),

  /**
   * 停止后续操作。
   *
   *
   */
 STOP : RET_STOP(),

  /**
   * 跳过当前项。
   *
   *
   */
 SKIP : RET_SKIP(),

  /**
   * 继续后续操作。
   *
   *
   */
 CONTINUE : RET_CONTINUE(),

  /**
   * 对象属性变化。
   *
   *
   */
 OBJECT_CHANGED : RET_OBJECT_CHANGED(),

  /**
   * 集合数目变化。
   *
   *
   */
 ITEMS_CHANGED : RET_ITEMS_CHANGED(),

  /**
   * 无效参数。
   *
   *
   */
 BAD_PARAMS : RET_BAD_PARAMS(),

  /**
   * 超时。
   *
   *
   */
 TIMEOUT : RET_TIMEOUT(),

  /**
   * CRC错误。
   *
   *
   */
 CRC : RET_CRC(),

  /**
   * IO错误。
   *
   *
   */
 IO : RET_IO(),

  /**
   * End of Stream
   *
   *
   */
 EOS : RET_EOS(),
};

global.time_now_s = function(  ){
  global.__AwtkSnapshot.push(`funtion  time_now_s(  ) :`)
  return undefined
}

global.time_now_ms = function(  ){
  global.__AwtkSnapshot.push(`funtion  time_now_ms(  ) :`)
  return undefined
}

global.rect_create = function( x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  rect_create( x, y, w, h ) :${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.rect_set = function( rect, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  rect_set( rect, x, y, w, h ) :${rect}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.rect_cast = function( rect ){
  global.__AwtkSnapshot.push(`funtion  rect_cast( rect ) :${rect}`)
  return undefined
}

global.rect_destroy = function( r ){
  global.__AwtkSnapshot.push(`funtion  rect_destroy( r ) :${r}`)
  return undefined
}

global.rect_t_get_prop_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  rect_t_get_prop_x`)
  return "rect_t_get_prop_x"
}

global.rect_t_get_prop_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  rect_t_get_prop_y`)
  return "rect_t_get_prop_y"
}

global.rect_t_get_prop_w = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  rect_t_get_prop_w`)
  return "rect_t_get_prop_w"
}

global.rect_t_get_prop_h = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  rect_t_get_prop_h`)
  return "rect_t_get_prop_h"
}

global.named_value_create = function(  ){
  global.__AwtkSnapshot.push(`funtion  named_value_create(  ) :`)
  return undefined
}

global.named_value_cast = function( nv ){
  global.__AwtkSnapshot.push(`funtion  named_value_cast( nv ) :${nv}`)
  return undefined
}

global.named_value_set_name = function( nv, name ){
  global.__AwtkSnapshot.push(`funtion  named_value_set_name( nv, name ) :${nv}, ${name}`)
  return undefined
}

global.named_value_set_value = function( nv, value ){
  global.__AwtkSnapshot.push(`funtion  named_value_set_value( nv, value ) :${nv}, ${value}`)
  return undefined
}

global.named_value_get_value = function( nv ){
  global.__AwtkSnapshot.push(`funtion  named_value_get_value( nv ) :${nv}`)
  return undefined
}

global.named_value_destroy = function( nv ){
  global.__AwtkSnapshot.push(`funtion  named_value_destroy( nv ) :${nv}`)
  return undefined
}

global.named_value_t_get_prop_name = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  named_value_t_get_prop_name`)
  return "named_value_t_get_prop_name"
}

global.MIME_TYPE_APPLICATION_ENVOY = function(){
 return "MIME_TYPE_APPLICATION_ENVOY"
}

global.MIME_TYPE_APPLICATION_FRACTALS = function(){
 return "MIME_TYPE_APPLICATION_FRACTALS"
}

global.MIME_TYPE_APPLICATION_FUTURESPLASH = function(){
 return "MIME_TYPE_APPLICATION_FUTURESPLASH"
}

global.MIME_TYPE_APPLICATION_HTA = function(){
 return "MIME_TYPE_APPLICATION_HTA"
}

global.MIME_TYPE_APPLICATION_JSON = function(){
 return "MIME_TYPE_APPLICATION_JSON"
}

global.MIME_TYPE_APPLICATION_UBJSON = function(){
 return "MIME_TYPE_APPLICATION_UBJSON"
}

global.MIME_TYPE_APPLICATION_MAC_BINHEX40 = function(){
 return "MIME_TYPE_APPLICATION_MAC_BINHEX40"
}

global.MIME_TYPE_APPLICATION_MSWORD = function(){
 return "MIME_TYPE_APPLICATION_MSWORD"
}

global.MIME_TYPE_APPLICATION_OCTET_STREAM = function(){
 return "MIME_TYPE_APPLICATION_OCTET_STREAM"
}

global.MIME_TYPE_APPLICATION_ODA = function(){
 return "MIME_TYPE_APPLICATION_ODA"
}

global.MIME_TYPE_APPLICATION_OLESCRIPT = function(){
 return "MIME_TYPE_APPLICATION_OLESCRIPT"
}

global.MIME_TYPE_APPLICATION_PDF = function(){
 return "MIME_TYPE_APPLICATION_PDF"
}

global.MIME_TYPE_APPLICATION_PICS_RULES = function(){
 return "MIME_TYPE_APPLICATION_PICS_RULES"
}

global.MIME_TYPE_APPLICATION_PKCS10 = function(){
 return "MIME_TYPE_APPLICATION_PKCS10"
}

global.MIME_TYPE_APPLICATION_PKIX_CRL = function(){
 return "MIME_TYPE_APPLICATION_PKIX_CRL"
}

global.MIME_TYPE_APPLICATION_POSTSCRIPT = function(){
 return "MIME_TYPE_APPLICATION_POSTSCRIPT"
}

global.MIME_TYPE_APPLICATION_RTF = function(){
 return "MIME_TYPE_APPLICATION_RTF"
}

global.MIME_TYPE_APPLICATION_VND_MS_EXCEL = function(){
 return "MIME_TYPE_APPLICATION_VND_MS_EXCEL"
}

global.MIME_TYPE_APPLICATION_VND_MS_OUTLOOK = function(){
 return "MIME_TYPE_APPLICATION_VND_MS_OUTLOOK"
}

global.MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE = function(){
 return "MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE"
}

global.MIME_TYPE_APPLICATION_VND_MS_PKISECCAT = function(){
 return "MIME_TYPE_APPLICATION_VND_MS_PKISECCAT"
}

global.MIME_TYPE_APPLICATION_VND_MS_PKISTL = function(){
 return "MIME_TYPE_APPLICATION_VND_MS_PKISTL"
}

global.MIME_TYPE_APPLICATION_VND_MS_POWERPOINT = function(){
 return "MIME_TYPE_APPLICATION_VND_MS_POWERPOINT"
}

global.MIME_TYPE_APPLICATION_VND_MS_PROJECT = function(){
 return "MIME_TYPE_APPLICATION_VND_MS_PROJECT"
}

global.MIME_TYPE_APPLICATION_VND_MS_WORKS = function(){
 return "MIME_TYPE_APPLICATION_VND_MS_WORKS"
}

global.MIME_TYPE_APPLICATION_WINHLP = function(){
 return "MIME_TYPE_APPLICATION_WINHLP"
}

global.MIME_TYPE_APPLICATION_X_BCPIO = function(){
 return "MIME_TYPE_APPLICATION_X_BCPIO"
}

global.MIME_TYPE_APPLICATION_X_CDF = function(){
 return "MIME_TYPE_APPLICATION_X_CDF"
}

global.MIME_TYPE_APPLICATION_X_COMPRESS = function(){
 return "MIME_TYPE_APPLICATION_X_COMPRESS"
}

global.MIME_TYPE_APPLICATION_X_COMPRESSED = function(){
 return "MIME_TYPE_APPLICATION_X_COMPRESSED"
}

global.MIME_TYPE_APPLICATION_X_CPIO = function(){
 return "MIME_TYPE_APPLICATION_X_CPIO"
}

global.MIME_TYPE_APPLICATION_X_CSH = function(){
 return "MIME_TYPE_APPLICATION_X_CSH"
}

global.MIME_TYPE_APPLICATION_X_DIRECTOR = function(){
 return "MIME_TYPE_APPLICATION_X_DIRECTOR"
}

global.MIME_TYPE_APPLICATION_X_DVI = function(){
 return "MIME_TYPE_APPLICATION_X_DVI"
}

global.MIME_TYPE_APPLICATION_X_GTAR = function(){
 return "MIME_TYPE_APPLICATION_X_GTAR"
}

global.MIME_TYPE_APPLICATION_X_GZIP = function(){
 return "MIME_TYPE_APPLICATION_X_GZIP"
}

global.MIME_TYPE_APPLICATION_X_HDF = function(){
 return "MIME_TYPE_APPLICATION_X_HDF"
}

global.MIME_TYPE_APPLICATION_X_IPHONE = function(){
 return "MIME_TYPE_APPLICATION_X_IPHONE"
}

global.MIME_TYPE_APPLICATION_X_JAVASCRIPT = function(){
 return "MIME_TYPE_APPLICATION_X_JAVASCRIPT"
}

global.MIME_TYPE_APPLICATION_X_LATEX = function(){
 return "MIME_TYPE_APPLICATION_X_LATEX"
}

global.MIME_TYPE_APPLICATION_X_MSACCESS = function(){
 return "MIME_TYPE_APPLICATION_X_MSACCESS"
}

global.MIME_TYPE_APPLICATION_X_MSCARDFILE = function(){
 return "MIME_TYPE_APPLICATION_X_MSCARDFILE"
}

global.MIME_TYPE_APPLICATION_X_MSCLIP = function(){
 return "MIME_TYPE_APPLICATION_X_MSCLIP"
}

global.MIME_TYPE_APPLICATION_X_MSDOWNLOAD = function(){
 return "MIME_TYPE_APPLICATION_X_MSDOWNLOAD"
}

global.MIME_TYPE_APPLICATION_X_MSMEDIAVIEW = function(){
 return "MIME_TYPE_APPLICATION_X_MSMEDIAVIEW"
}

global.MIME_TYPE_APPLICATION_X_MSMETAFILE = function(){
 return "MIME_TYPE_APPLICATION_X_MSMETAFILE"
}

global.MIME_TYPE_APPLICATION_X_MSMONEY = function(){
 return "MIME_TYPE_APPLICATION_X_MSMONEY"
}

global.MIME_TYPE_APPLICATION_X_MSPUBLISHER = function(){
 return "MIME_TYPE_APPLICATION_X_MSPUBLISHER"
}

global.MIME_TYPE_APPLICATION_X_MSSCHEDULE = function(){
 return "MIME_TYPE_APPLICATION_X_MSSCHEDULE"
}

global.MIME_TYPE_APPLICATION_X_MSTERMINAL = function(){
 return "MIME_TYPE_APPLICATION_X_MSTERMINAL"
}

global.MIME_TYPE_APPLICATION_X_MSWRITE = function(){
 return "MIME_TYPE_APPLICATION_X_MSWRITE"
}

global.MIME_TYPE_APPLICATION_X_NETCDF = function(){
 return "MIME_TYPE_APPLICATION_X_NETCDF"
}

global.MIME_TYPE_APPLICATION_X_PERFMON = function(){
 return "MIME_TYPE_APPLICATION_X_PERFMON"
}

global.MIME_TYPE_APPLICATION_X_PKCS12 = function(){
 return "MIME_TYPE_APPLICATION_X_PKCS12"
}

global.MIME_TYPE_APPLICATION_X_SH = function(){
 return "MIME_TYPE_APPLICATION_X_SH"
}

global.MIME_TYPE_APPLICATION_X_SHAR = function(){
 return "MIME_TYPE_APPLICATION_X_SHAR"
}

global.MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH = function(){
 return "MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH"
}

global.MIME_TYPE_APPLICATION_X_STUFFIT = function(){
 return "MIME_TYPE_APPLICATION_X_STUFFIT"
}

global.MIME_TYPE_APPLICATION_X_SV4CPIO = function(){
 return "MIME_TYPE_APPLICATION_X_SV4CPIO"
}

global.MIME_TYPE_APPLICATION_X_SV4CRC = function(){
 return "MIME_TYPE_APPLICATION_X_SV4CRC"
}

global.MIME_TYPE_APPLICATION_X_TAR = function(){
 return "MIME_TYPE_APPLICATION_X_TAR"
}

global.MIME_TYPE_APPLICATION_X_TCL = function(){
 return "MIME_TYPE_APPLICATION_X_TCL"
}

global.MIME_TYPE_APPLICATION_X_TEX = function(){
 return "MIME_TYPE_APPLICATION_X_TEX"
}

global.MIME_TYPE_APPLICATION_X_TEXINFO = function(){
 return "MIME_TYPE_APPLICATION_X_TEXINFO"
}

global.MIME_TYPE_APPLICATION_X_TROFF = function(){
 return "MIME_TYPE_APPLICATION_X_TROFF"
}

global.MIME_TYPE_APPLICATION_X_USTAR = function(){
 return "MIME_TYPE_APPLICATION_X_USTAR"
}

global.MIME_TYPE_APPLICATION_ZIP = function(){
 return "MIME_TYPE_APPLICATION_ZIP"
}

global.MIME_TYPE_AUDIO_BASIC = function(){
 return "MIME_TYPE_AUDIO_BASIC"
}

global.MIME_TYPE_AUDIO_MID = function(){
 return "MIME_TYPE_AUDIO_MID"
}

global.MIME_TYPE_AUDIO_MPEG = function(){
 return "MIME_TYPE_AUDIO_MPEG"
}

global.MIME_TYPE_AUDIO_X_AIFF = function(){
 return "MIME_TYPE_AUDIO_X_AIFF"
}

global.MIME_TYPE_AUDIO_X_MPEGURL = function(){
 return "MIME_TYPE_AUDIO_X_MPEGURL"
}

global.MIME_TYPE_AUDIO_X_WAV = function(){
 return "MIME_TYPE_AUDIO_X_WAV"
}

global.MIME_TYPE_IMAGE_BMP = function(){
 return "MIME_TYPE_IMAGE_BMP"
}

global.MIME_TYPE_IMAGE_CIS_COD = function(){
 return "MIME_TYPE_IMAGE_CIS_COD"
}

global.MIME_TYPE_IMAGE_GIF = function(){
 return "MIME_TYPE_IMAGE_GIF"
}

global.MIME_TYPE_IMAGE_IEF = function(){
 return "MIME_TYPE_IMAGE_IEF"
}

global.MIME_TYPE_IMAGE_JPEG = function(){
 return "MIME_TYPE_IMAGE_JPEG"
}

global.MIME_TYPE_IMAGE_PIPEG = function(){
 return "MIME_TYPE_IMAGE_PIPEG"
}

global.MIME_TYPE_IMAGE_SVG_XML = function(){
 return "MIME_TYPE_IMAGE_SVG_XML"
}

global.MIME_TYPE_IMAGE_TIFF = function(){
 return "MIME_TYPE_IMAGE_TIFF"
}

global.MIME_TYPE_IMAGE_X_CMX = function(){
 return "MIME_TYPE_IMAGE_X_CMX"
}

global.MIME_TYPE_IMAGE_X_ICON = function(){
 return "MIME_TYPE_IMAGE_X_ICON"
}

global.MIME_TYPE_IMAGE_X_RGB = function(){
 return "MIME_TYPE_IMAGE_X_RGB"
}

global.MIME_TYPE_IMAGE_X_XBITMAP = function(){
 return "MIME_TYPE_IMAGE_X_XBITMAP"
}

global.MIME_TYPE_IMAGE_X_XPIXMAP = function(){
 return "MIME_TYPE_IMAGE_X_XPIXMAP"
}

global.MIME_TYPE_IMAGE_X_XWINDOWDUMP = function(){
 return "MIME_TYPE_IMAGE_X_XWINDOWDUMP"
}

global.MIME_TYPE_MESSAGE_RFC822 = function(){
 return "MIME_TYPE_MESSAGE_RFC822"
}

global.MIME_TYPE_TEXT_CSS = function(){
 return "MIME_TYPE_TEXT_CSS"
}

global.MIME_TYPE_TEXT_H323 = function(){
 return "MIME_TYPE_TEXT_H323"
}

global.MIME_TYPE_TEXT_HTML = function(){
 return "MIME_TYPE_TEXT_HTML"
}

global.MIME_TYPE_TEXT_IULS = function(){
 return "MIME_TYPE_TEXT_IULS"
}

global.MIME_TYPE_TEXT_PLAIN = function(){
 return "MIME_TYPE_TEXT_PLAIN"
}

global.MIME_TYPE_TEXT_RICHTEXT = function(){
 return "MIME_TYPE_TEXT_RICHTEXT"
}

global.MIME_TYPE_TEXT_SCRIPTLET = function(){
 return "MIME_TYPE_TEXT_SCRIPTLET"
}

global.MIME_TYPE_TEXT_WEBVIEWHTML = function(){
 return "MIME_TYPE_TEXT_WEBVIEWHTML"
}

global.MIME_TYPE_TEXT_X_COMPONENT = function(){
 return "MIME_TYPE_TEXT_X_COMPONENT"
}

global.MIME_TYPE_TEXT_X_SETEXT = function(){
 return "MIME_TYPE_TEXT_X_SETEXT"
}

global.MIME_TYPE_TEXT_X_VCARD = function(){
 return "MIME_TYPE_TEXT_X_VCARD"
}

global.MIME_TYPE_VIDEO_MPEG = function(){
 return "MIME_TYPE_VIDEO_MPEG"
}

global.MIME_TYPE_VIDEO_QUICKTIME = function(){
 return "MIME_TYPE_VIDEO_QUICKTIME"
}

global.MIME_TYPE_VIDEO_X_MSVIDEO = function(){
 return "MIME_TYPE_VIDEO_X_MSVIDEO"
}


/**
 * MIME_TYPE。
 *
 *
 */
global.TMIME_TYPE = {

  /**
   * "application/envoy"。
   *
   *
   */
 APPLICATION_ENVOY : MIME_TYPE_APPLICATION_ENVOY(),

  /**
   * "application/fractals"。
   *
   *
   */
 APPLICATION_FRACTALS : MIME_TYPE_APPLICATION_FRACTALS(),

  /**
   * "application/futuresplash"。
   *
   *
   */
 APPLICATION_FUTURESPLASH : MIME_TYPE_APPLICATION_FUTURESPLASH(),

  /**
   * "application/hta"。
   *
   *
   */
 APPLICATION_HTA : MIME_TYPE_APPLICATION_HTA(),

  /**
   * "application/json"。
   *
   *
   */
 APPLICATION_JSON : MIME_TYPE_APPLICATION_JSON(),

  /**
   * "application/ubjson"。
   *
   *
   */
 APPLICATION_UBJSON : MIME_TYPE_APPLICATION_UBJSON(),

  /**
   * "application/mac-binhex40"。
   *
   *
   */
 APPLICATION_MAC_BINHEX40 : MIME_TYPE_APPLICATION_MAC_BINHEX40(),

  /**
   * "application/msword"。
   *
   *
   */
 APPLICATION_MSWORD : MIME_TYPE_APPLICATION_MSWORD(),

  /**
   * "application/octet-stream"。
   *
   *
   */
 APPLICATION_OCTET_STREAM : MIME_TYPE_APPLICATION_OCTET_STREAM(),

  /**
   * "application/oda"。
   *
   *
   */
 APPLICATION_ODA : MIME_TYPE_APPLICATION_ODA(),

  /**
   * "application/olescript"。
   *
   *
   */
 APPLICATION_OLESCRIPT : MIME_TYPE_APPLICATION_OLESCRIPT(),

  /**
   * "application/pdf"。
   *
   *
   */
 APPLICATION_PDF : MIME_TYPE_APPLICATION_PDF(),

  /**
   * "application/pics-rules"。
   *
   *
   */
 APPLICATION_PICS_RULES : MIME_TYPE_APPLICATION_PICS_RULES(),

  /**
   * "application/pkcs10"。
   *
   *
   */
 APPLICATION_PKCS10 : MIME_TYPE_APPLICATION_PKCS10(),

  /**
   * "application/pkix-crl"。
   *
   *
   */
 APPLICATION_PKIX_CRL : MIME_TYPE_APPLICATION_PKIX_CRL(),

  /**
   * "application/postscript"。
   *
   *
   */
 APPLICATION_POSTSCRIPT : MIME_TYPE_APPLICATION_POSTSCRIPT(),

  /**
   * "application/rtf"。
   *
   *
   */
 APPLICATION_RTF : MIME_TYPE_APPLICATION_RTF(),

  /**
   * "application/vnd.ms-excel"。
   *
   *
   */
 APPLICATION_VND_MS_EXCEL : MIME_TYPE_APPLICATION_VND_MS_EXCEL(),

  /**
   * "application/vnd.ms-outlook"。
   *
   *
   */
 APPLICATION_VND_MS_OUTLOOK : MIME_TYPE_APPLICATION_VND_MS_OUTLOOK(),

  /**
   * "application/vnd.ms-pkicertstore"。
   *
   *
   */
 APPLICATION_VND_MS_PKICERTSTORE : MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE(),

  /**
   * "application/vnd.ms-pkiseccat"。
   *
   *
   */
 APPLICATION_VND_MS_PKISECCAT : MIME_TYPE_APPLICATION_VND_MS_PKISECCAT(),

  /**
   * "application/vnd.ms-pkistl"。
   *
   *
   */
 APPLICATION_VND_MS_PKISTL : MIME_TYPE_APPLICATION_VND_MS_PKISTL(),

  /**
   * "application/vnd.ms-powerpoint"。
   *
   *
   */
 APPLICATION_VND_MS_POWERPOINT : MIME_TYPE_APPLICATION_VND_MS_POWERPOINT(),

  /**
   * "application/vnd.ms-project"。
   *
   *
   */
 APPLICATION_VND_MS_PROJECT : MIME_TYPE_APPLICATION_VND_MS_PROJECT(),

  /**
   * "application/vnd.ms-works"。
   *
   *
   */
 APPLICATION_VND_MS_WORKS : MIME_TYPE_APPLICATION_VND_MS_WORKS(),

  /**
   * "application/winhlp"。
   *
   *
   */
 APPLICATION_WINHLP : MIME_TYPE_APPLICATION_WINHLP(),

  /**
   * "application/x-bcpio"。
   *
   *
   */
 APPLICATION_X_BCPIO : MIME_TYPE_APPLICATION_X_BCPIO(),

  /**
   * "application/x-cdf"。
   *
   *
   */
 APPLICATION_X_CDF : MIME_TYPE_APPLICATION_X_CDF(),

  /**
   * "application/x-compress"。
   *
   *
   */
 APPLICATION_X_COMPRESS : MIME_TYPE_APPLICATION_X_COMPRESS(),

  /**
   * "application/x-compressed"。
   *
   *
   */
 APPLICATION_X_COMPRESSED : MIME_TYPE_APPLICATION_X_COMPRESSED(),

  /**
   * "application/x-cpio"。
   *
   *
   */
 APPLICATION_X_CPIO : MIME_TYPE_APPLICATION_X_CPIO(),

  /**
   * "application/x-csh"。
   *
   *
   */
 APPLICATION_X_CSH : MIME_TYPE_APPLICATION_X_CSH(),

  /**
   * "application/x-director"。
   *
   *
   */
 APPLICATION_X_DIRECTOR : MIME_TYPE_APPLICATION_X_DIRECTOR(),

  /**
   * "application/x-dvi"。
   *
   *
   */
 APPLICATION_X_DVI : MIME_TYPE_APPLICATION_X_DVI(),

  /**
   * "application/x-gtar"。
   *
   *
   */
 APPLICATION_X_GTAR : MIME_TYPE_APPLICATION_X_GTAR(),

  /**
   * "application/x-gzip"。
   *
   *
   */
 APPLICATION_X_GZIP : MIME_TYPE_APPLICATION_X_GZIP(),

  /**
   * "application/x-hdf"。
   *
   *
   */
 APPLICATION_X_HDF : MIME_TYPE_APPLICATION_X_HDF(),

  /**
   * "application/x-iphone"。
   *
   *
   */
 APPLICATION_X_IPHONE : MIME_TYPE_APPLICATION_X_IPHONE(),

  /**
   * "application/x-javascript"。
   *
   *
   */
 APPLICATION_X_JAVASCRIPT : MIME_TYPE_APPLICATION_X_JAVASCRIPT(),

  /**
   * "application/x-latex"。
   *
   *
   */
 APPLICATION_X_LATEX : MIME_TYPE_APPLICATION_X_LATEX(),

  /**
   * "application/x-msaccess"。
   *
   *
   */
 APPLICATION_X_MSACCESS : MIME_TYPE_APPLICATION_X_MSACCESS(),

  /**
   * "application/x-mscardfile"。
   *
   *
   */
 APPLICATION_X_MSCARDFILE : MIME_TYPE_APPLICATION_X_MSCARDFILE(),

  /**
   * "application/x-msclip"。
   *
   *
   */
 APPLICATION_X_MSCLIP : MIME_TYPE_APPLICATION_X_MSCLIP(),

  /**
   * "application/x-msdownload"。
   *
   *
   */
 APPLICATION_X_MSDOWNLOAD : MIME_TYPE_APPLICATION_X_MSDOWNLOAD(),

  /**
   * "application/x-msmediaview"。
   *
   *
   */
 APPLICATION_X_MSMEDIAVIEW : MIME_TYPE_APPLICATION_X_MSMEDIAVIEW(),

  /**
   * "application/x-msmetafile"。
   *
   *
   */
 APPLICATION_X_MSMETAFILE : MIME_TYPE_APPLICATION_X_MSMETAFILE(),

  /**
   * "application/x-msmoney"。
   *
   *
   */
 APPLICATION_X_MSMONEY : MIME_TYPE_APPLICATION_X_MSMONEY(),

  /**
   * "application/x-mspublisher"。
   *
   *
   */
 APPLICATION_X_MSPUBLISHER : MIME_TYPE_APPLICATION_X_MSPUBLISHER(),

  /**
   * "application/x-msschedule"。
   *
   *
   */
 APPLICATION_X_MSSCHEDULE : MIME_TYPE_APPLICATION_X_MSSCHEDULE(),

  /**
   * "application/x-msterminal"。
   *
   *
   */
 APPLICATION_X_MSTERMINAL : MIME_TYPE_APPLICATION_X_MSTERMINAL(),

  /**
   * "application/x-mswrite"。
   *
   *
   */
 APPLICATION_X_MSWRITE : MIME_TYPE_APPLICATION_X_MSWRITE(),

  /**
   * "application/x-netcdf"。
   *
   *
   */
 APPLICATION_X_NETCDF : MIME_TYPE_APPLICATION_X_NETCDF(),

  /**
   * "application/x-perfmon"。
   *
   *
   */
 APPLICATION_X_PERFMON : MIME_TYPE_APPLICATION_X_PERFMON(),

  /**
   * "application/x-pkcs12"。
   *
   *
   */
 APPLICATION_X_PKCS12 : MIME_TYPE_APPLICATION_X_PKCS12(),

  /**
   * "application/x-sh"。
   *
   *
   */
 APPLICATION_X_SH : MIME_TYPE_APPLICATION_X_SH(),

  /**
   * "application/x-shar"。
   *
   *
   */
 APPLICATION_X_SHAR : MIME_TYPE_APPLICATION_X_SHAR(),

  /**
   * "application/x-shockwave-flash"。
   *
   *
   */
 APPLICATION_X_SHOCKWAVE_FLASH : MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH(),

  /**
   * "application/x-stuffit"。
   *
   *
   */
 APPLICATION_X_STUFFIT : MIME_TYPE_APPLICATION_X_STUFFIT(),

  /**
   * "application/x-sv4cpio"。
   *
   *
   */
 APPLICATION_X_SV4CPIO : MIME_TYPE_APPLICATION_X_SV4CPIO(),

  /**
   * "application/x-sv4crc"。
   *
   *
   */
 APPLICATION_X_SV4CRC : MIME_TYPE_APPLICATION_X_SV4CRC(),

  /**
   * "application/x-tar"。
   *
   *
   */
 APPLICATION_X_TAR : MIME_TYPE_APPLICATION_X_TAR(),

  /**
   * "application/x-tcl"。
   *
   *
   */
 APPLICATION_X_TCL : MIME_TYPE_APPLICATION_X_TCL(),

  /**
   * "application/x-tex"。
   *
   *
   */
 APPLICATION_X_TEX : MIME_TYPE_APPLICATION_X_TEX(),

  /**
   * "application/x-texinfo"。
   *
   *
   */
 APPLICATION_X_TEXINFO : MIME_TYPE_APPLICATION_X_TEXINFO(),

  /**
   * "application/x-troff"。
   *
   *
   */
 APPLICATION_X_TROFF : MIME_TYPE_APPLICATION_X_TROFF(),

  /**
   * "application/x-ustar"。
   *
   *
   */
 APPLICATION_X_USTAR : MIME_TYPE_APPLICATION_X_USTAR(),

  /**
   * "application/zip"。
   *
   *
   */
 APPLICATION_ZIP : MIME_TYPE_APPLICATION_ZIP(),

  /**
   * "audio/basic"。
   *
   *
   */
 AUDIO_BASIC : MIME_TYPE_AUDIO_BASIC(),

  /**
   * "audio/mid"。
   *
   *
   */
 AUDIO_MID : MIME_TYPE_AUDIO_MID(),

  /**
   * "audio/mpeg"。
   *
   *
   */
 AUDIO_MPEG : MIME_TYPE_AUDIO_MPEG(),

  /**
   * "audio/x-aiff"。
   *
   *
   */
 AUDIO_X_AIFF : MIME_TYPE_AUDIO_X_AIFF(),

  /**
   * "audio/x-mpegurl"。
   *
   *
   */
 AUDIO_X_MPEGURL : MIME_TYPE_AUDIO_X_MPEGURL(),

  /**
   * "audio/x-wav"。
   *
   *
   */
 AUDIO_X_WAV : MIME_TYPE_AUDIO_X_WAV(),

  /**
   * "image/bmp"。
   *
   *
   */
 IMAGE_BMP : MIME_TYPE_IMAGE_BMP(),

  /**
   * "image/cis-cod"。
   *
   *
   */
 IMAGE_CIS_COD : MIME_TYPE_IMAGE_CIS_COD(),

  /**
   * "image/gif"。
   *
   *
   */
 IMAGE_GIF : MIME_TYPE_IMAGE_GIF(),

  /**
   * "image/ief"。
   *
   *
   */
 IMAGE_IEF : MIME_TYPE_IMAGE_IEF(),

  /**
   * "image/jpeg"。
   *
   *
   */
 IMAGE_JPEG : MIME_TYPE_IMAGE_JPEG(),

  /**
   * "image/pipeg"。
   *
   *
   */
 IMAGE_PIPEG : MIME_TYPE_IMAGE_PIPEG(),

  /**
   * "image/svg+xml"。
   *
   *
   */
 IMAGE_SVG_XML : MIME_TYPE_IMAGE_SVG_XML(),

  /**
   * "image/tiff"。
   *
   *
   */
 IMAGE_TIFF : MIME_TYPE_IMAGE_TIFF(),

  /**
   * "image/x-cmx"。
   *
   *
   */
 IMAGE_X_CMX : MIME_TYPE_IMAGE_X_CMX(),

  /**
   * "image/x-icon"。
   *
   *
   */
 IMAGE_X_ICON : MIME_TYPE_IMAGE_X_ICON(),

  /**
   * "image/x-rgb"。
   *
   *
   */
 IMAGE_X_RGB : MIME_TYPE_IMAGE_X_RGB(),

  /**
   * "image/x-xbitmap"。
   *
   *
   */
 IMAGE_X_XBITMAP : MIME_TYPE_IMAGE_X_XBITMAP(),

  /**
   * "image/x-xpixmap"。
   *
   *
   */
 IMAGE_X_XPIXMAP : MIME_TYPE_IMAGE_X_XPIXMAP(),

  /**
   * "image/x-xwindowdump"。
   *
   *
   */
 IMAGE_X_XWINDOWDUMP : MIME_TYPE_IMAGE_X_XWINDOWDUMP(),

  /**
   * "message/rfc822"。
   *
   *
   */
 MESSAGE_RFC822 : MIME_TYPE_MESSAGE_RFC822(),

  /**
   * "text/css"。
   *
   *
   */
 TEXT_CSS : MIME_TYPE_TEXT_CSS(),

  /**
   * "text/h323"。
   *
   *
   */
 TEXT_H323 : MIME_TYPE_TEXT_H323(),

  /**
   * "text/html"。
   *
   *
   */
 TEXT_HTML : MIME_TYPE_TEXT_HTML(),

  /**
   * "text/iuls"。
   *
   *
   */
 TEXT_IULS : MIME_TYPE_TEXT_IULS(),

  /**
   * "text/plain"。
   *
   *
   */
 TEXT_PLAIN : MIME_TYPE_TEXT_PLAIN(),

  /**
   * "text/richtext"。
   *
   *
   */
 TEXT_RICHTEXT : MIME_TYPE_TEXT_RICHTEXT(),

  /**
   * "text/scriptlet"。
   *
   *
   */
 TEXT_SCRIPTLET : MIME_TYPE_TEXT_SCRIPTLET(),

  /**
   * "text/webviewhtml"。
   *
   *
   */
 TEXT_WEBVIEWHTML : MIME_TYPE_TEXT_WEBVIEWHTML(),

  /**
   * "text/x-component"。
   *
   *
   */
 TEXT_X_COMPONENT : MIME_TYPE_TEXT_X_COMPONENT(),

  /**
   * "text/x-setext"。
   *
   *
   */
 TEXT_X_SETEXT : MIME_TYPE_TEXT_X_SETEXT(),

  /**
   * "text/x-vcard"。
   *
   *
   */
 TEXT_X_VCARD : MIME_TYPE_TEXT_X_VCARD(),

  /**
   * "video/mpeg"。
   *
   *
   */
 VIDEO_MPEG : MIME_TYPE_VIDEO_MPEG(),

  /**
   * "video/quicktime"。
   *
   *
   */
 VIDEO_QUICKTIME : MIME_TYPE_VIDEO_QUICKTIME(),

  /**
   * "video/x-msvideo"。
   *
   *
   */
 VIDEO_X_MSVIDEO : MIME_TYPE_VIDEO_X_MSVIDEO(),
};

global.INDICATOR_DEFAULT_PAINT_AUTO = function(){
 return "INDICATOR_DEFAULT_PAINT_AUTO"
}

global.INDICATOR_DEFAULT_PAINT_FILL_DOT = function(){
 return "INDICATOR_DEFAULT_PAINT_FILL_DOT"
}

global.INDICATOR_DEFAULT_PAINT_STROKE_DOT = function(){
 return "INDICATOR_DEFAULT_PAINT_STROKE_DOT"
}

global.INDICATOR_DEFAULT_PAINT_FILL_RECT = function(){
 return "INDICATOR_DEFAULT_PAINT_FILL_RECT"
}

global.INDICATOR_DEFAULT_PAINT_STROKE_RECT = function(){
 return "INDICATOR_DEFAULT_PAINT_STROKE_RECT"
}


/**
 * 指示器默认绘制的类型。
 *
 *
 */
global.TIndicatorDefaultPaint = {

  /**
   * 自动选择。
   *
   *
   */
 AUTO : INDICATOR_DEFAULT_PAINT_AUTO(),

  /**
   * 实心圆点指示器，当前项填充selected_fg_color，其他填充fg_color。
   *
   *
   */
 FILL_DOT : INDICATOR_DEFAULT_PAINT_FILL_DOT(),

  /**
   * 镂空圆点指示器，当前项填充selected_fg_color，其他镂空fg_color。
   *
   *
   */
 STROKE_DOT : INDICATOR_DEFAULT_PAINT_STROKE_DOT(),

  /**
   * 实心矩形指示器，当前项填充selected_fg_color，其他填充fg_color。
   *
   *
   */
 FILL_RECT : INDICATOR_DEFAULT_PAINT_FILL_RECT(),

  /**
   * 镂空矩形指示器，当前项填充selected_fg_color，其他镂空fg_color。
   *
   *
   */
 STROKE_RECT : INDICATOR_DEFAULT_PAINT_STROKE_RECT(),
};

global.event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  event_cast( event ) :${event}`)
  return undefined
}

global.event_create = function( type ){
  global.__AwtkSnapshot.push(`funtion  event_create( type ) :${type}`)
  return undefined
}

global.event_destroy = function( event ){
  global.__AwtkSnapshot.push(`funtion  event_destroy( event ) :${event}`)
  return undefined
}

global.event_t_get_prop_type = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  event_t_get_prop_type`)
  return "event_t_get_prop_type"
}

global.event_t_get_prop_time = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  event_t_get_prop_time`)
  return "event_t_get_prop_time"
}

global.event_t_get_prop_target = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  event_t_get_prop_target`)
  return "event_t_get_prop_target"
}

global.emitter_create = function(  ){
  global.__AwtkSnapshot.push(`funtion  emitter_create(  ) :`)
  return undefined
}

global.emitter_dispatch = function( emitter, e ){
  global.__AwtkSnapshot.push(`funtion  emitter_dispatch( emitter, e ) :${emitter}, ${e}`)
  return undefined
}

global.emitter_dispatch_simple_event = function( emitter, type ){
  global.__AwtkSnapshot.push(`funtion  emitter_dispatch_simple_event( emitter, type ) :${emitter}, ${type}`)
  return undefined
}

global.emitter_on = function( emitter, type, on_event, ctx ){
  global.__AwtkSnapshot.push(`funtion  emitter_on( emitter, type, on_event, ctx ) :${emitter}, ${type}, ${on_event}, ${ctx}`)
  return undefined
}

global.emitter_off = function( emitter, id ){
  global.__AwtkSnapshot.push(`funtion  emitter_off( emitter, id ) :${emitter}, ${id}`)
  return undefined
}

global.emitter_enable = function( emitter ){
  global.__AwtkSnapshot.push(`funtion  emitter_enable( emitter ) :${emitter}`)
  return undefined
}

global.emitter_disable = function( emitter ){
  global.__AwtkSnapshot.push(`funtion  emitter_disable( emitter ) :${emitter}`)
  return undefined
}

global.emitter_size = function( emitter ){
  global.__AwtkSnapshot.push(`funtion  emitter_size( emitter ) :${emitter}`)
  return undefined
}

global.emitter_destroy = function( emitter ){
  global.__AwtkSnapshot.push(`funtion  emitter_destroy( emitter ) :${emitter}`)
  return undefined
}

global.emitter_cast = function( emitter ){
  global.__AwtkSnapshot.push(`funtion  emitter_cast( emitter ) :${emitter}`)
  return undefined
}

global.EASING_LINEAR = function(){
 return "EASING_LINEAR"
}

global.EASING_QUADRATIC_IN = function(){
 return "EASING_QUADRATIC_IN"
}

global.EASING_QUADRATIC_OUT = function(){
 return "EASING_QUADRATIC_OUT"
}

global.EASING_QUADRATIC_INOUT = function(){
 return "EASING_QUADRATIC_INOUT"
}

global.EASING_CUBIC_IN = function(){
 return "EASING_CUBIC_IN"
}

global.EASING_CUBIC_OUT = function(){
 return "EASING_CUBIC_OUT"
}

global.EASING_SIN_IN = function(){
 return "EASING_SIN_IN"
}

global.EASING_SIN_OUT = function(){
 return "EASING_SIN_OUT"
}

global.EASING_SIN_INOUT = function(){
 return "EASING_SIN_INOUT"
}

global.EASING_POW_IN = function(){
 return "EASING_POW_IN"
}

global.EASING_POW_OUT = function(){
 return "EASING_POW_OUT"
}

global.EASING_POW_INOUT = function(){
 return "EASING_POW_INOUT"
}

global.EASING_CIRCULAR_IN = function(){
 return "EASING_CIRCULAR_IN"
}

global.EASING_CIRCULAR_OUT = function(){
 return "EASING_CIRCULAR_OUT"
}

global.EASING_CIRCULAR_INOUT = function(){
 return "EASING_CIRCULAR_INOUT"
}

global.EASING_ELASTIC_IN = function(){
 return "EASING_ELASTIC_IN"
}

global.EASING_ELASTIC_OUT = function(){
 return "EASING_ELASTIC_OUT"
}

global.EASING_ELASTIC_INOUT = function(){
 return "EASING_ELASTIC_INOUT"
}

global.EASING_BACK_IN = function(){
 return "EASING_BACK_IN"
}

global.EASING_BACK_OUT = function(){
 return "EASING_BACK_OUT"
}

global.EASING_BACK_INOUT = function(){
 return "EASING_BACK_INOUT"
}

global.EASING_BOUNCE_IN = function(){
 return "EASING_BOUNCE_IN"
}

global.EASING_BOUNCE_OUT = function(){
 return "EASING_BOUNCE_OUT"
}

global.EASING_BOUNCE_INOUT = function(){
 return "EASING_BOUNCE_INOUT"
}


/**
 * 缓动作动画常量定义。
 *
 *
 */
global.TEasingType = {

  /**
   * EASING_LINEAR。
   *
   *
   */
 LINEAR : EASING_LINEAR(),

  /**
   * EASING_QUADRATIC_IN
   *
   *
   */
 QUADRATIC_IN : EASING_QUADRATIC_IN(),

  /**
   * EASING_QUADRATIC_OUT
   *
   *
   */
 QUADRATIC_OUT : EASING_QUADRATIC_OUT(),

  /**
   * EASING_QUADRATIC_INOUT
   *
   *
   */
 QUADRATIC_INOUT : EASING_QUADRATIC_INOUT(),

  /**
   * EASING_CUBIC_IN
   *
   *
   */
 CUBIC_IN : EASING_CUBIC_IN(),

  /**
   * EASING_CUBIC_OUT
   *
   *
   */
 CUBIC_OUT : EASING_CUBIC_OUT(),

  /**
   * EASING_SIN_IN
   *
   *
   */
 SIN_IN : EASING_SIN_IN(),

  /**
   * EASING_SIN_OUT
   *
   *
   */
 SIN_OUT : EASING_SIN_OUT(),

  /**
   * EASING_SIN_OUT
   *
   *
   */
 SIN_INOUT : EASING_SIN_INOUT(),

  /**
   * EASING_POW_IN
   *
   *
   */
 POW_IN : EASING_POW_IN(),

  /**
   * EASING_POW_OUT
   *
   *
   */
 POW_OUT : EASING_POW_OUT(),

  /**
   * EASING_POW_INOUT
   *
   *
   */
 POW_INOUT : EASING_POW_INOUT(),

  /**
   * EASING_CIRCULAR_IN
   *
   *
   */
 CIRCULAR_IN : EASING_CIRCULAR_IN(),

  /**
   * EASING_CIRCULAR_OUT
   *
   *
   */
 CIRCULAR_OUT : EASING_CIRCULAR_OUT(),

  /**
   * EASING_CIRCULAR_INOUT
   *
   *
   */
 CIRCULAR_INOUT : EASING_CIRCULAR_INOUT(),

  /**
   * EASING_ELASTIC_IN
   *
   *
   */
 ELASTIC_IN : EASING_ELASTIC_IN(),

  /**
   * EASING_ELASTIC_OUT
   *
   *
   */
 ELASTIC_OUT : EASING_ELASTIC_OUT(),

  /**
   * EASING_ELASTIC_INOUT
   *
   *
   */
 ELASTIC_INOUT : EASING_ELASTIC_INOUT(),

  /**
   * EASING_BACK_IN
   *
   *
   */
 BACK_IN : EASING_BACK_IN(),

  /**
   * EASING_BACK_OUT
   *
   *
   */
 BACK_OUT : EASING_BACK_OUT(),

  /**
   * EASING_BACK_INOUT
   *
   *
   */
 BACK_INOUT : EASING_BACK_INOUT(),

  /**
   * EASING_BOUNCE_IN
   *
   *
   */
 BOUNCE_IN : EASING_BOUNCE_IN(),

  /**
   * EASING_BOUNCE_OUT
   *
   *
   */
 BOUNCE_OUT : EASING_BOUNCE_OUT(),

  /**
   * EASING_BOUNCE_INOUT
   *
   *
   */
 BOUNCE_INOUT : EASING_BOUNCE_INOUT(),
};

global.date_time_create = function(  ){
  global.__AwtkSnapshot.push(`funtion  date_time_create(  ) :`)
  return undefined
}

global.date_time_set = function( dt ){
  global.__AwtkSnapshot.push(`funtion  date_time_set( dt ) :${dt}`)
  return undefined
}

global.date_time_destroy = function( dt ){
  global.__AwtkSnapshot.push(`funtion  date_time_destroy( dt ) :${dt}`)
  return undefined
}

global.date_time_t_get_prop_second = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  date_time_t_get_prop_second`)
  return "date_time_t_get_prop_second"
}

global.date_time_t_get_prop_minute = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  date_time_t_get_prop_minute`)
  return "date_time_t_get_prop_minute"
}

global.date_time_t_get_prop_hour = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  date_time_t_get_prop_hour`)
  return "date_time_t_get_prop_hour"
}

global.date_time_t_get_prop_day = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  date_time_t_get_prop_day`)
  return "date_time_t_get_prop_day"
}

global.date_time_t_get_prop_wday = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  date_time_t_get_prop_wday`)
  return "date_time_t_get_prop_wday"
}

global.date_time_t_get_prop_month = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  date_time_t_get_prop_month`)
  return "date_time_t_get_prop_month"
}

global.date_time_t_get_prop_year = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  date_time_t_get_prop_year`)
  return "date_time_t_get_prop_year"
}

global.color_create = function( r, b, g, a ){
  global.__AwtkSnapshot.push(`funtion  color_create( r, b, g, a ) :${r}, ${b}, ${g}, ${a}`)
  return undefined
}

global.color_from_str = function( c, str ){
  global.__AwtkSnapshot.push(`funtion  color_from_str( c, str ) :${c}, ${str}`)
  return undefined
}

global.color_r = function( c ){
  global.__AwtkSnapshot.push(`funtion  color_r( c ) :${c}`)
  return undefined
}

global.color_g = function( c ){
  global.__AwtkSnapshot.push(`funtion  color_g( c ) :${c}`)
  return undefined
}

global.color_b = function( c ){
  global.__AwtkSnapshot.push(`funtion  color_b( c ) :${c}`)
  return undefined
}

global.color_a = function( c ){
  global.__AwtkSnapshot.push(`funtion  color_a( c ) :${c}`)
  return undefined
}

global.color_cast = function( color ){
  global.__AwtkSnapshot.push(`funtion  color_cast( color ) :${color}`)
  return undefined
}

global.color_destroy = function( c ){
  global.__AwtkSnapshot.push(`funtion  color_destroy( c ) :${c}`)
  return undefined
}

global.color_t_get_prop_color = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  color_t_get_prop_color`)
  return "color_t_get_prop_color"
}

global.color_t_get_prop_color = function (nativeObj){
  global.__AwtkSnapshot.push( `set properties  color_t_get_prop_color`)
}

global.asset_info_t_get_prop_type = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  asset_info_t_get_prop_type`)
  return "asset_info_t_get_prop_type"
}

global.asset_info_t_get_prop_subtype = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  asset_info_t_get_prop_subtype`)
  return "asset_info_t_get_prop_subtype"
}

global.asset_info_t_get_prop_is_in_rom = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  asset_info_t_get_prop_is_in_rom`)
  return "asset_info_t_get_prop_is_in_rom"
}

global.asset_info_t_get_prop_size = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  asset_info_t_get_prop_size`)
  return "asset_info_t_get_prop_size"
}

global.asset_info_t_get_prop_refcount = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  asset_info_t_get_prop_refcount`)
  return "asset_info_t_get_prop_refcount"
}

global.asset_info_t_get_prop_name = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  asset_info_t_get_prop_name`)
  return "asset_info_t_get_prop_name"
}

global.ASSET_TYPE_NONE = function(){
 return "ASSET_TYPE_NONE"
}

global.ASSET_TYPE_FONT = function(){
 return "ASSET_TYPE_FONT"
}

global.ASSET_TYPE_IMAGE = function(){
 return "ASSET_TYPE_IMAGE"
}

global.ASSET_TYPE_STYLE = function(){
 return "ASSET_TYPE_STYLE"
}

global.ASSET_TYPE_UI = function(){
 return "ASSET_TYPE_UI"
}

global.ASSET_TYPE_XML = function(){
 return "ASSET_TYPE_XML"
}

global.ASSET_TYPE_STRINGS = function(){
 return "ASSET_TYPE_STRINGS"
}

global.ASSET_TYPE_SCRIPT = function(){
 return "ASSET_TYPE_SCRIPT"
}

global.ASSET_TYPE_DATA = function(){
 return "ASSET_TYPE_DATA"
}


/**
 * 资源类型常量定义。
 *
 *
 */
global.TAssetType = {

  /**
   * 无效资源。
   *
   *
   */
 NONE : ASSET_TYPE_NONE(),

  /**
   * 字体资源。
   *
   *
   */
 FONT : ASSET_TYPE_FONT(),

  /**
   * 图片资源。
   *
   *
   */
 IMAGE : ASSET_TYPE_IMAGE(),

  /**
   * 主题资源。
   *
   *
   */
 STYLE : ASSET_TYPE_STYLE(),

  /**
   * UI数据资源。
   *
   *
   */
 UI : ASSET_TYPE_UI(),

  /**
   * XML数据资源。
   *
   *
   */
 XML : ASSET_TYPE_XML(),

  /**
   * 字符串数据资源。
   *
   *
   */
 STRINGS : ASSET_TYPE_STRINGS(),

  /**
   * JS等脚本资源。
   *
   *
   */
 SCRIPT : ASSET_TYPE_SCRIPT(),

  /**
   * 其它数据资源。
   *
   *
   */
 DATA : ASSET_TYPE_DATA(),
};

global.assets_manager = function(  ){
  global.__AwtkSnapshot.push(`funtion  assets_manager(  ) :`)
  return undefined
}

global.assets_manager_ref = function( am, type, name ){
  global.__AwtkSnapshot.push(`funtion  assets_manager_ref( am, type, name ) :${am}, ${type}, ${name}`)
  return undefined
}

global.assets_manager_unref = function( am, info ){
  global.__AwtkSnapshot.push(`funtion  assets_manager_unref( am, info ) :${am}, ${info}`)
  return undefined
}

global.color_component_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  color_component_cast( widget ) :${widget}`)
  return undefined
}

global.time_clock_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  time_clock_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.time_clock_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  time_clock_cast( widget ) :${widget}`)
  return undefined
}

global.time_clock_set_hour = function( widget, hour ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_hour( widget, hour ) :${widget}, ${hour}`)
  return undefined
}

global.time_clock_set_minute = function( widget, minute ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_minute( widget, minute ) :${widget}, ${minute}`)
  return undefined
}

global.time_clock_set_second = function( widget, second ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_second( widget, second ) :${widget}, ${second}`)
  return undefined
}

global.time_clock_set_hour_image = function( widget, hour ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_hour_image( widget, hour ) :${widget}, ${hour}`)
  return undefined
}

global.time_clock_set_minute_image = function( widget, minute_image ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_minute_image( widget, minute_image ) :${widget}, ${minute_image}`)
  return undefined
}

global.time_clock_set_second_image = function( widget, second_image ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_second_image( widget, second_image ) :${widget}, ${second_image}`)
  return undefined
}

global.time_clock_set_bg_image = function( widget, bg_image ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_bg_image( widget, bg_image ) :${widget}, ${bg_image}`)
  return undefined
}

global.time_clock_set_image = function( widget, image ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_image( widget, image ) :${widget}, ${image}`)
  return undefined
}

global.time_clock_set_hour_anchor = function( widget, anchor_x, anchor_y ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_hour_anchor( widget, anchor_x, anchor_y ) :${widget}, ${anchor_x}, ${anchor_y}`)
  return undefined
}

global.time_clock_set_minute_anchor = function( widget, anchor_x, anchor_y ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_minute_anchor( widget, anchor_x, anchor_y ) :${widget}, ${anchor_x}, ${anchor_y}`)
  return undefined
}

global.time_clock_set_second_anchor = function( widget, anchor_x, anchor_y ){
  global.__AwtkSnapshot.push(`funtion  time_clock_set_second_anchor( widget, anchor_x, anchor_y ) :${widget}, ${anchor_x}, ${anchor_y}`)
  return undefined
}

global.time_clock_t_get_prop_hour = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_hour`)
  return "time_clock_t_get_prop_hour"
}

global.time_clock_t_get_prop_minute = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_minute`)
  return "time_clock_t_get_prop_minute"
}

global.time_clock_t_get_prop_second = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_second`)
  return "time_clock_t_get_prop_second"
}

global.time_clock_t_get_prop_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_image`)
  return "time_clock_t_get_prop_image"
}

global.time_clock_t_get_prop_bg_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_bg_image`)
  return "time_clock_t_get_prop_bg_image"
}

global.time_clock_t_get_prop_hour_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_hour_image`)
  return "time_clock_t_get_prop_hour_image"
}

global.time_clock_t_get_prop_minute_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_minute_image`)
  return "time_clock_t_get_prop_minute_image"
}

global.time_clock_t_get_prop_second_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_second_image`)
  return "time_clock_t_get_prop_second_image"
}

global.time_clock_t_get_prop_hour_anchor_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_hour_anchor_x`)
  return "time_clock_t_get_prop_hour_anchor_x"
}

global.time_clock_t_get_prop_hour_anchor_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_hour_anchor_y`)
  return "time_clock_t_get_prop_hour_anchor_y"
}

global.time_clock_t_get_prop_minute_anchor_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_minute_anchor_x`)
  return "time_clock_t_get_prop_minute_anchor_x"
}

global.time_clock_t_get_prop_minute_anchor_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_minute_anchor_y`)
  return "time_clock_t_get_prop_minute_anchor_y"
}

global.time_clock_t_get_prop_second_anchor_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_second_anchor_x`)
  return "time_clock_t_get_prop_second_anchor_x"
}

global.time_clock_t_get_prop_second_anchor_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  time_clock_t_get_prop_second_anchor_y`)
  return "time_clock_t_get_prop_second_anchor_y"
}

global.text_selector_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  text_selector_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.text_selector_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  text_selector_cast( widget ) :${widget}`)
  return undefined
}

global.text_selector_reset_options = function( widget ){
  global.__AwtkSnapshot.push(`funtion  text_selector_reset_options( widget ) :${widget}`)
  return undefined
}

global.text_selector_count_options = function( widget ){
  global.__AwtkSnapshot.push(`funtion  text_selector_count_options( widget ) :${widget}`)
  return undefined
}

global.text_selector_append_option = function( widget, value, text ){
  global.__AwtkSnapshot.push(`funtion  text_selector_append_option( widget, value, text ) :${widget}, ${value}, ${text}`)
  return undefined
}

global.text_selector_set_options = function( widget, options ){
  global.__AwtkSnapshot.push(`funtion  text_selector_set_options( widget, options ) :${widget}, ${options}`)
  return undefined
}

global.text_selector_set_range_options = function( widget, start, nr, step ){
  global.__AwtkSnapshot.push(`funtion  text_selector_set_range_options( widget, start, nr, step ) :${widget}, ${start}, ${nr}, ${step}`)
  return undefined
}

global.text_selector_get_value = function( widget ){
  global.__AwtkSnapshot.push(`funtion  text_selector_get_value( widget ) :${widget}`)
  return undefined
}

global.text_selector_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  text_selector_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.text_selector_get_text = function( widget ){
  global.__AwtkSnapshot.push(`funtion  text_selector_get_text( widget ) :${widget}`)
  return undefined
}

global.text_selector_set_text = function( widget, text ){
  global.__AwtkSnapshot.push(`funtion  text_selector_set_text( widget, text ) :${widget}, ${text}`)
  return undefined
}

global.text_selector_set_selected_index = function( widget, index ){
  global.__AwtkSnapshot.push(`funtion  text_selector_set_selected_index( widget, index ) :${widget}, ${index}`)
  return undefined
}

global.text_selector_set_visible_nr = function( widget, visible_nr ){
  global.__AwtkSnapshot.push(`funtion  text_selector_set_visible_nr( widget, visible_nr ) :${widget}, ${visible_nr}`)
  return undefined
}

global.text_selector_t_get_prop_visible_nr = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  text_selector_t_get_prop_visible_nr`)
  return "text_selector_t_get_prop_visible_nr"
}

global.text_selector_t_get_prop_selected_index = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  text_selector_t_get_prop_selected_index`)
  return "text_selector_t_get_prop_selected_index"
}

global.text_selector_t_get_prop_options = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  text_selector_t_get_prop_options`)
  return "text_selector_t_get_prop_options"
}

global.switch_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  switch_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.switch_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  switch_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.switch_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  switch_cast( widget ) :${widget}`)
  return undefined
}

global.switch_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  switch_t_get_prop_value`)
  return "switch_t_get_prop_value"
}

global.switch_t_get_prop_max_xoffset_ratio = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  switch_t_get_prop_max_xoffset_ratio`)
  return "switch_t_get_prop_max_xoffset_ratio"
}

global.prop_change_event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  prop_change_event_cast( event ) :${event}`)
  return undefined
}

global.prop_change_event_t_get_prop_name = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  prop_change_event_t_get_prop_name`)
  return "prop_change_event_t_get_prop_name"
}

global.prop_change_event_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  prop_change_event_t_get_prop_value`)
  return "prop_change_event_t_get_prop_value"
}

global.progress_event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  progress_event_cast( event ) :${event}`)
  return undefined
}

global.progress_event_t_get_prop_percent = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_event_t_get_prop_percent`)
  return "progress_event_t_get_prop_percent"
}

global.view_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  view_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.view_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  view_cast( widget ) :${widget}`)
  return undefined
}

global.slide_view_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  slide_view_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.slide_view_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  slide_view_cast( widget ) :${widget}`)
  return undefined
}

global.slide_view_set_auto_play = function( widget, auto_play ){
  global.__AwtkSnapshot.push(`funtion  slide_view_set_auto_play( widget, auto_play ) :${widget}, ${auto_play}`)
  return undefined
}

global.slide_view_set_active = function( widget, index ){
  global.__AwtkSnapshot.push(`funtion  slide_view_set_active( widget, index ) :${widget}, ${index}`)
  return undefined
}

global.slide_view_set_vertical = function( widget, vertical ){
  global.__AwtkSnapshot.push(`funtion  slide_view_set_vertical( widget, vertical ) :${widget}, ${vertical}`)
  return undefined
}

global.slide_view_set_anim_hint = function( widget, anim_hint ){
  global.__AwtkSnapshot.push(`funtion  slide_view_set_anim_hint( widget, anim_hint ) :${widget}, ${anim_hint}`)
  return undefined
}

global.slide_view_set_loop = function( widget, loop ){
  global.__AwtkSnapshot.push(`funtion  slide_view_set_loop( widget, loop ) :${widget}, ${loop}`)
  return undefined
}

global.slide_view_t_get_prop_vertical = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_view_t_get_prop_vertical`)
  return "slide_view_t_get_prop_vertical"
}

global.slide_view_t_get_prop_auto_play = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_view_t_get_prop_auto_play`)
  return "slide_view_t_get_prop_auto_play"
}

global.slide_view_t_get_prop_loop = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_view_t_get_prop_loop`)
  return "slide_view_t_get_prop_loop"
}

global.slide_view_t_get_prop_anim_hint = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_view_t_get_prop_anim_hint`)
  return "slide_view_t_get_prop_anim_hint"
}

global.slide_indicator_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.slide_indicator_create_linear = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_create_linear( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.slide_indicator_create_arc = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_create_arc( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.slide_indicator_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_cast( widget ) :${widget}`)
  return undefined
}

global.slide_indicator_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.slide_indicator_set_max = function( widget, max ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_max( widget, max ) :${widget}, ${max}`)
  return undefined
}

global.slide_indicator_set_default_paint = function( widget, default_paint ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_default_paint( widget, default_paint ) :${widget}, ${default_paint}`)
  return undefined
}

global.slide_indicator_set_auto_hide = function( widget, auto_hide ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_auto_hide( widget, auto_hide ) :${widget}, ${auto_hide}`)
  return undefined
}

global.slide_indicator_set_margin = function( widget, margin ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_margin( widget, margin ) :${widget}, ${margin}`)
  return undefined
}

global.slide_indicator_set_spacing = function( widget, spacing ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_spacing( widget, spacing ) :${widget}, ${spacing}`)
  return undefined
}

global.slide_indicator_set_size = function( widget, size ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_size( widget, size ) :${widget}, ${size}`)
  return undefined
}

global.slide_indicator_set_anchor = function( widget, anchor_x, anchor_y ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_anchor( widget, anchor_x, anchor_y ) :${widget}, ${anchor_x}, ${anchor_y}`)
  return undefined
}

global.slide_indicator_set_indicated_target = function( widget, indicated_target ){
  global.__AwtkSnapshot.push(`funtion  slide_indicator_set_indicated_target( widget, indicated_target ) :${widget}, ${indicated_target}`)
  return undefined
}

global.slide_indicator_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_value`)
  return "slide_indicator_t_get_prop_value"
}

global.slide_indicator_t_get_prop_max = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_max`)
  return "slide_indicator_t_get_prop_max"
}

global.slide_indicator_t_get_prop_default_paint = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_default_paint`)
  return "slide_indicator_t_get_prop_default_paint"
}

global.slide_indicator_t_get_prop_auto_hide = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_auto_hide`)
  return "slide_indicator_t_get_prop_auto_hide"
}

global.slide_indicator_t_get_prop_margin = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_margin`)
  return "slide_indicator_t_get_prop_margin"
}

global.slide_indicator_t_get_prop_spacing = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_spacing`)
  return "slide_indicator_t_get_prop_spacing"
}

global.slide_indicator_t_get_prop_size = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_size`)
  return "slide_indicator_t_get_prop_size"
}

global.slide_indicator_t_get_prop_anchor_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_anchor_x`)
  return "slide_indicator_t_get_prop_anchor_x"
}

global.slide_indicator_t_get_prop_anchor_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_anchor_y`)
  return "slide_indicator_t_get_prop_anchor_y"
}

global.slide_indicator_t_get_prop_indicated_target = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_indicator_t_get_prop_indicated_target`)
  return "slide_indicator_t_get_prop_indicated_target"
}

global.slide_menu_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  slide_menu_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.slide_menu_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  slide_menu_cast( widget ) :${widget}`)
  return undefined
}

global.slide_menu_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  slide_menu_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.slide_menu_set_align_v = function( widget, align_v ){
  global.__AwtkSnapshot.push(`funtion  slide_menu_set_align_v( widget, align_v ) :${widget}, ${align_v}`)
  return undefined
}

global.slide_menu_set_min_scale = function( widget, min_scale ){
  global.__AwtkSnapshot.push(`funtion  slide_menu_set_min_scale( widget, min_scale ) :${widget}, ${min_scale}`)
  return undefined
}

global.slide_menu_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_menu_t_get_prop_value`)
  return "slide_menu_t_get_prop_value"
}

global.slide_menu_t_get_prop_align_v = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_menu_t_get_prop_align_v`)
  return "slide_menu_t_get_prop_align_v"
}

global.slide_menu_t_get_prop_min_scale = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slide_menu_t_get_prop_min_scale`)
  return "slide_menu_t_get_prop_min_scale"
}

global.scroll_view_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.scroll_view_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_cast( widget ) :${widget}`)
  return undefined
}

global.scroll_view_set_virtual_w = function( widget, w ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_set_virtual_w( widget, w ) :${widget}, ${w}`)
  return undefined
}

global.scroll_view_set_virtual_h = function( widget, h ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_set_virtual_h( widget, h ) :${widget}, ${h}`)
  return undefined
}

global.scroll_view_set_xslidable = function( widget, xslidable ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_set_xslidable( widget, xslidable ) :${widget}, ${xslidable}`)
  return undefined
}

global.scroll_view_set_yslidable = function( widget, yslidable ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_set_yslidable( widget, yslidable ) :${widget}, ${yslidable}`)
  return undefined
}

global.scroll_view_set_offset = function( widget, xoffset, yoffset ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_set_offset( widget, xoffset, yoffset ) :${widget}, ${xoffset}, ${yoffset}`)
  return undefined
}

global.scroll_view_set_speed_scale = function( widget, xspeed_scale, yspeed_scale ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_set_speed_scale( widget, xspeed_scale, yspeed_scale ) :${widget}, ${xspeed_scale}, ${yspeed_scale}`)
  return undefined
}

global.scroll_view_scroll_to = function( widget, xoffset_end, yoffset_end, duration ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_scroll_to( widget, xoffset_end, yoffset_end, duration ) :${widget}, ${xoffset_end}, ${yoffset_end}, ${duration}`)
  return undefined
}

global.scroll_view_scroll_delta_to = function( widget, xoffset_delta, yoffset_delta, duration ){
  global.__AwtkSnapshot.push(`funtion  scroll_view_scroll_delta_to( widget, xoffset_delta, yoffset_delta, duration ) :${widget}, ${xoffset_delta}, ${yoffset_delta}, ${duration}`)
  return undefined
}

global.scroll_view_t_get_prop_virtual_w = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_view_t_get_prop_virtual_w`)
  return "scroll_view_t_get_prop_virtual_w"
}

global.scroll_view_t_get_prop_virtual_h = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_view_t_get_prop_virtual_h`)
  return "scroll_view_t_get_prop_virtual_h"
}

global.scroll_view_t_get_prop_xoffset = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_view_t_get_prop_xoffset`)
  return "scroll_view_t_get_prop_xoffset"
}

global.scroll_view_t_get_prop_yoffset = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_view_t_get_prop_yoffset`)
  return "scroll_view_t_get_prop_yoffset"
}

global.scroll_view_t_get_prop_xspeed_scale = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_view_t_get_prop_xspeed_scale`)
  return "scroll_view_t_get_prop_xspeed_scale"
}

global.scroll_view_t_get_prop_yspeed_scale = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_view_t_get_prop_yspeed_scale`)
  return "scroll_view_t_get_prop_yspeed_scale"
}

global.scroll_view_t_get_prop_xslidable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_view_t_get_prop_xslidable`)
  return "scroll_view_t_get_prop_xslidable"
}

global.scroll_view_t_get_prop_yslidable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_view_t_get_prop_yslidable`)
  return "scroll_view_t_get_prop_yslidable"
}

global.scroll_bar_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.scroll_bar_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_cast( widget ) :${widget}`)
  return undefined
}

global.scroll_bar_create_mobile = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_create_mobile( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.scroll_bar_create_desktop = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_create_desktop( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.scroll_bar_set_params = function( widget, virtual_size, row ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_set_params( widget, virtual_size, row ) :${widget}, ${virtual_size}, ${row}`)
  return undefined
}

global.scroll_bar_scroll_to = function( widget, value, duration ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_scroll_to( widget, value, duration ) :${widget}, ${value}, ${duration}`)
  return undefined
}

global.scroll_bar_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.scroll_bar_add_delta = function( widget, delta ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_add_delta( widget, delta ) :${widget}, ${delta}`)
  return undefined
}

global.scroll_bar_scroll_delta = function( widget, delta ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_scroll_delta( widget, delta ) :${widget}, ${delta}`)
  return undefined
}

global.scroll_bar_set_value_only = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_set_value_only( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.scroll_bar_is_mobile = function( widget ){
  global.__AwtkSnapshot.push(`funtion  scroll_bar_is_mobile( widget ) :${widget}`)
  return undefined
}

global.scroll_bar_t_get_prop_virtual_size = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_bar_t_get_prop_virtual_size`)
  return "scroll_bar_t_get_prop_virtual_size"
}

global.scroll_bar_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_bar_t_get_prop_value`)
  return "scroll_bar_t_get_prop_value"
}

global.scroll_bar_t_get_prop_row = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_bar_t_get_prop_row`)
  return "scroll_bar_t_get_prop_row"
}

global.scroll_bar_t_get_prop_animatable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  scroll_bar_t_get_prop_animatable`)
  return "scroll_bar_t_get_prop_animatable"
}

global.tab_control_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  tab_control_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.tab_control_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  tab_control_cast( widget ) :${widget}`)
  return undefined
}

global.list_view_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  list_view_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.list_view_set_item_height = function( widget, item_height ){
  global.__AwtkSnapshot.push(`funtion  list_view_set_item_height( widget, item_height ) :${widget}, ${item_height}`)
  return undefined
}

global.list_view_set_default_item_height = function( widget, default_item_height ){
  global.__AwtkSnapshot.push(`funtion  list_view_set_default_item_height( widget, default_item_height ) :${widget}, ${default_item_height}`)
  return undefined
}

global.list_view_set_auto_hide_scroll_bar = function( widget, auto_hide_scroll_bar ){
  global.__AwtkSnapshot.push(`funtion  list_view_set_auto_hide_scroll_bar( widget, auto_hide_scroll_bar ) :${widget}, ${auto_hide_scroll_bar}`)
  return undefined
}

global.list_view_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  list_view_cast( widget ) :${widget}`)
  return undefined
}

global.list_view_t_get_prop_item_height = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  list_view_t_get_prop_item_height`)
  return "list_view_t_get_prop_item_height"
}

global.list_view_t_get_prop_default_item_height = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  list_view_t_get_prop_default_item_height`)
  return "list_view_t_get_prop_default_item_height"
}

global.list_view_t_get_prop_auto_hide_scroll_bar = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  list_view_t_get_prop_auto_hide_scroll_bar`)
  return "list_view_t_get_prop_auto_hide_scroll_bar"
}

global.list_view_h_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  list_view_h_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.list_view_h_set_item_width = function( widget, item_width ){
  global.__AwtkSnapshot.push(`funtion  list_view_h_set_item_width( widget, item_width ) :${widget}, ${item_width}`)
  return undefined
}

global.list_view_h_set_spacing = function( widget, spacing ){
  global.__AwtkSnapshot.push(`funtion  list_view_h_set_spacing( widget, spacing ) :${widget}, ${spacing}`)
  return undefined
}

global.list_view_h_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  list_view_h_cast( widget ) :${widget}`)
  return undefined
}

global.list_view_h_t_get_prop_item_width = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  list_view_h_t_get_prop_item_width`)
  return "list_view_h_t_get_prop_item_width"
}

global.list_view_h_t_get_prop_spacing = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  list_view_h_t_get_prop_spacing`)
  return "list_view_h_t_get_prop_spacing"
}

global.tab_button_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  tab_button_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.tab_button_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  tab_button_cast( widget ) :${widget}`)
  return undefined
}

global.tab_button_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  tab_button_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.tab_button_set_icon = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  tab_button_set_icon( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.tab_button_set_active_icon = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  tab_button_set_active_icon( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.tab_button_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  tab_button_t_get_prop_value`)
  return "tab_button_t_get_prop_value"
}

global.tab_button_t_get_prop_active_icon = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  tab_button_t_get_prop_active_icon`)
  return "tab_button_t_get_prop_active_icon"
}

global.tab_button_t_get_prop_icon = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  tab_button_t_get_prop_icon`)
  return "tab_button_t_get_prop_icon"
}

global.tab_button_group_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  tab_button_group_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.tab_button_group_set_compact = function( widget, compact ){
  global.__AwtkSnapshot.push(`funtion  tab_button_group_set_compact( widget, compact ) :${widget}, ${compact}`)
  return undefined
}

global.tab_button_group_set_scrollable = function( widget, scrollable ){
  global.__AwtkSnapshot.push(`funtion  tab_button_group_set_scrollable( widget, scrollable ) :${widget}, ${scrollable}`)
  return undefined
}

global.tab_button_group_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  tab_button_group_cast( widget ) :${widget}`)
  return undefined
}

global.tab_button_group_t_get_prop_compact = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  tab_button_group_t_get_prop_compact`)
  return "tab_button_group_t_get_prop_compact"
}

global.tab_button_group_t_get_prop_scrollable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  tab_button_group_t_get_prop_scrollable`)
  return "tab_button_group_t_get_prop_scrollable"
}

global.list_item_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  list_item_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.list_item_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  list_item_cast( widget ) :${widget}`)
  return undefined
}

global.hscroll_label_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.hscroll_label_set_lull = function( widget, lull ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_set_lull( widget, lull ) :${widget}, ${lull}`)
  return undefined
}

global.hscroll_label_set_duration = function( widget, duration ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_set_duration( widget, duration ) :${widget}, ${duration}`)
  return undefined
}

global.hscroll_label_set_only_focus = function( widget, only_focus ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_set_only_focus( widget, only_focus ) :${widget}, ${only_focus}`)
  return undefined
}

global.hscroll_label_set_only_parent_focus = function( widget, only_parent_focus ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_set_only_parent_focus( widget, only_parent_focus ) :${widget}, ${only_parent_focus}`)
  return undefined
}

global.hscroll_label_set_loop = function( widget, loop ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_set_loop( widget, loop ) :${widget}, ${loop}`)
  return undefined
}

global.hscroll_label_set_yoyo = function( widget, yoyo ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_set_yoyo( widget, yoyo ) :${widget}, ${yoyo}`)
  return undefined
}

global.hscroll_label_set_ellipses = function( widget, ellipses ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_set_ellipses( widget, ellipses ) :${widget}, ${ellipses}`)
  return undefined
}

global.hscroll_label_set_xoffset = function( widget, xoffset ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_set_xoffset( widget, xoffset ) :${widget}, ${xoffset}`)
  return undefined
}

global.hscroll_label_start = function( widget ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_start( widget ) :${widget}`)
  return undefined
}

global.hscroll_label_stop = function( widget ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_stop( widget ) :${widget}`)
  return undefined
}

global.hscroll_label_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  hscroll_label_cast( widget ) :${widget}`)
  return undefined
}

global.hscroll_label_t_get_prop_only_focus = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_only_focus`)
  return "hscroll_label_t_get_prop_only_focus"
}

global.hscroll_label_t_get_prop_only_parent_focus = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_only_parent_focus`)
  return "hscroll_label_t_get_prop_only_parent_focus"
}

global.hscroll_label_t_get_prop_loop = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_loop`)
  return "hscroll_label_t_get_prop_loop"
}

global.hscroll_label_t_get_prop_yoyo = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_yoyo`)
  return "hscroll_label_t_get_prop_yoyo"
}

global.hscroll_label_t_get_prop_ellipses = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_ellipses`)
  return "hscroll_label_t_get_prop_ellipses"
}

global.hscroll_label_t_get_prop_lull = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_lull`)
  return "hscroll_label_t_get_prop_lull"
}

global.hscroll_label_t_get_prop_duration = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_duration`)
  return "hscroll_label_t_get_prop_duration"
}

global.hscroll_label_t_get_prop_xoffset = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_xoffset`)
  return "hscroll_label_t_get_prop_xoffset"
}

global.hscroll_label_t_get_prop_text_w = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  hscroll_label_t_get_prop_text_w`)
  return "hscroll_label_t_get_prop_text_w"
}

global.rich_text_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  rich_text_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.rich_text_set_text = function( widget, text ){
  global.__AwtkSnapshot.push(`funtion  rich_text_set_text( widget, text ) :${widget}, ${text}`)
  return undefined
}

global.rich_text_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  rich_text_cast( widget ) :${widget}`)
  return undefined
}

global.rich_text_t_get_prop_line_gap = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  rich_text_t_get_prop_line_gap`)
  return "rich_text_t_get_prop_line_gap"
}

global.progress_circle_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.progress_circle_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_cast( widget ) :${widget}`)
  return undefined
}

global.progress_circle_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.progress_circle_set_max = function( widget, max ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_set_max( widget, max ) :${widget}, ${max}`)
  return undefined
}

global.progress_circle_set_line_width = function( widget, line_width ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_set_line_width( widget, line_width ) :${widget}, ${line_width}`)
  return undefined
}

global.progress_circle_set_start_angle = function( widget, start_angle ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_set_start_angle( widget, start_angle ) :${widget}, ${start_angle}`)
  return undefined
}

global.progress_circle_set_unit = function( widget, unit ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_set_unit( widget, unit ) :${widget}, ${unit}`)
  return undefined
}

global.progress_circle_set_show_text = function( widget, show_text ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_set_show_text( widget, show_text ) :${widget}, ${show_text}`)
  return undefined
}

global.progress_circle_set_counter_clock_wise = function( widget, counter_clock_wise ){
  global.__AwtkSnapshot.push(`funtion  progress_circle_set_counter_clock_wise( widget, counter_clock_wise ) :${widget}, ${counter_clock_wise}`)
  return undefined
}

global.progress_circle_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_circle_t_get_prop_value`)
  return "progress_circle_t_get_prop_value"
}

global.progress_circle_t_get_prop_max = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_circle_t_get_prop_max`)
  return "progress_circle_t_get_prop_max"
}

global.progress_circle_t_get_prop_start_angle = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_circle_t_get_prop_start_angle`)
  return "progress_circle_t_get_prop_start_angle"
}

global.progress_circle_t_get_prop_line_width = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_circle_t_get_prop_line_width`)
  return "progress_circle_t_get_prop_line_width"
}

global.progress_circle_t_get_prop_unit = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_circle_t_get_prop_unit`)
  return "progress_circle_t_get_prop_unit"
}

global.progress_circle_t_get_prop_counter_clock_wise = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_circle_t_get_prop_counter_clock_wise`)
  return "progress_circle_t_get_prop_counter_clock_wise"
}

global.progress_circle_t_get_prop_show_text = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_circle_t_get_prop_show_text`)
  return "progress_circle_t_get_prop_show_text"
}

global.slider_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  slider_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.slider_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  slider_cast( widget ) :${widget}`)
  return undefined
}

global.slider_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  slider_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.slider_set_min = function( widget, min ){
  global.__AwtkSnapshot.push(`funtion  slider_set_min( widget, min ) :${widget}, ${min}`)
  return undefined
}

global.slider_set_max = function( widget, max ){
  global.__AwtkSnapshot.push(`funtion  slider_set_max( widget, max ) :${widget}, ${max}`)
  return undefined
}

global.slider_set_step = function( widget, step ){
  global.__AwtkSnapshot.push(`funtion  slider_set_step( widget, step ) :${widget}, ${step}`)
  return undefined
}

global.slider_set_bar_size = function( widget, bar_size ){
  global.__AwtkSnapshot.push(`funtion  slider_set_bar_size( widget, bar_size ) :${widget}, ${bar_size}`)
  return undefined
}

global.slider_set_vertical = function( widget, vertical ){
  global.__AwtkSnapshot.push(`funtion  slider_set_vertical( widget, vertical ) :${widget}, ${vertical}`)
  return undefined
}

global.slider_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slider_t_get_prop_value`)
  return "slider_t_get_prop_value"
}

global.slider_t_get_prop_min = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slider_t_get_prop_min`)
  return "slider_t_get_prop_min"
}

global.slider_t_get_prop_max = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slider_t_get_prop_max`)
  return "slider_t_get_prop_max"
}

global.slider_t_get_prop_step = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slider_t_get_prop_step`)
  return "slider_t_get_prop_step"
}

global.slider_t_get_prop_vertical = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slider_t_get_prop_vertical`)
  return "slider_t_get_prop_vertical"
}

global.slider_t_get_prop_bar_size = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  slider_t_get_prop_bar_size`)
  return "slider_t_get_prop_bar_size"
}

global.mledit_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  mledit_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.mledit_set_readonly = function( widget, readonly ){
  global.__AwtkSnapshot.push(`funtion  mledit_set_readonly( widget, readonly ) :${widget}, ${readonly}`)
  return undefined
}

global.mledit_set_focus = function( widget, focus ){
  global.__AwtkSnapshot.push(`funtion  mledit_set_focus( widget, focus ) :${widget}, ${focus}`)
  return undefined
}

global.mledit_set_wrap_word = function( widget, wrap_word ){
  global.__AwtkSnapshot.push(`funtion  mledit_set_wrap_word( widget, wrap_word ) :${widget}, ${wrap_word}`)
  return undefined
}

global.mledit_set_max_lines = function( widget, max_lines ){
  global.__AwtkSnapshot.push(`funtion  mledit_set_max_lines( widget, max_lines ) :${widget}, ${max_lines}`)
  return undefined
}

global.mledit_set_input_tips = function( widget, tips ){
  global.__AwtkSnapshot.push(`funtion  mledit_set_input_tips( widget, tips ) :${widget}, ${tips}`)
  return undefined
}

global.mledit_set_cursor = function( widget, cursor ){
  global.__AwtkSnapshot.push(`funtion  mledit_set_cursor( widget, cursor ) :${widget}, ${cursor}`)
  return undefined
}

global.mledit_set_scroll_line = function( widget, scroll_line ){
  global.__AwtkSnapshot.push(`funtion  mledit_set_scroll_line( widget, scroll_line ) :${widget}, ${scroll_line}`)
  return undefined
}

global.mledit_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  mledit_cast( widget ) :${widget}`)
  return undefined
}

global.mledit_t_get_prop_readonly = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  mledit_t_get_prop_readonly`)
  return "mledit_t_get_prop_readonly"
}

global.mledit_t_get_prop_tips = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  mledit_t_get_prop_tips`)
  return "mledit_t_get_prop_tips"
}

global.mledit_t_get_prop_wrap_word = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  mledit_t_get_prop_wrap_word`)
  return "mledit_t_get_prop_wrap_word"
}

global.mledit_t_get_prop_max_lines = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  mledit_t_get_prop_max_lines`)
  return "mledit_t_get_prop_max_lines"
}

global.mledit_t_get_prop_scroll_line = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  mledit_t_get_prop_scroll_line`)
  return "mledit_t_get_prop_scroll_line"
}

global.row_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  row_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.row_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  row_cast( widget ) :${widget}`)
  return undefined
}

global.progress_bar_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  progress_bar_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.progress_bar_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  progress_bar_cast( widget ) :${widget}`)
  return undefined
}

global.progress_bar_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  progress_bar_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.progress_bar_set_max = function( widget, max ){
  global.__AwtkSnapshot.push(`funtion  progress_bar_set_max( widget, max ) :${widget}, ${max}`)
  return undefined
}

global.progress_bar_set_vertical = function( widget, vertical ){
  global.__AwtkSnapshot.push(`funtion  progress_bar_set_vertical( widget, vertical ) :${widget}, ${vertical}`)
  return undefined
}

global.progress_bar_set_show_text = function( widget, show_text ){
  global.__AwtkSnapshot.push(`funtion  progress_bar_set_show_text( widget, show_text ) :${widget}, ${show_text}`)
  return undefined
}

global.progress_bar_get_percent = function( widget ){
  global.__AwtkSnapshot.push(`funtion  progress_bar_get_percent( widget ) :${widget}`)
  return undefined
}

global.progress_bar_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_bar_t_get_prop_value`)
  return "progress_bar_t_get_prop_value"
}

global.progress_bar_t_get_prop_max = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_bar_t_get_prop_max`)
  return "progress_bar_t_get_prop_max"
}

global.progress_bar_t_get_prop_vertical = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_bar_t_get_prop_vertical`)
  return "progress_bar_t_get_prop_vertical"
}

global.progress_bar_t_get_prop_show_text = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  progress_bar_t_get_prop_show_text`)
  return "progress_bar_t_get_prop_show_text"
}

global.object_unref = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_unref( obj ) :${obj}`)
  return undefined
}

global.object_ref = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_ref( obj ) :${obj}`)
  return undefined
}

global.object_get_type = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_get_type( obj ) :${obj}`)
  return undefined
}

global.object_get_desc = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_get_desc( obj ) :${obj}`)
  return undefined
}

global.object_get_size = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_get_size( obj ) :${obj}`)
  return undefined
}

global.object_is_collection = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_is_collection( obj ) :${obj}`)
  return undefined
}

global.object_set_name = function( obj, name ){
  global.__AwtkSnapshot.push(`funtion  object_set_name( obj, name ) :${obj}, ${name}`)
  return undefined
}

global.object_compare = function( obj, other ){
  global.__AwtkSnapshot.push(`funtion  object_compare( obj, other ) :${obj}, ${other}`)
  return undefined
}

global.object_get_prop = function( obj, name, v ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop( obj, name, v ) :${obj}, ${name}, ${v}`)
  return undefined
}

global.object_get_prop_str = function( obj, name ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_str( obj, name ) :${obj}, ${name}`)
  return undefined
}

global.object_get_prop_pointer = function( obj, name ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_pointer( obj, name ) :${obj}, ${name}`)
  return undefined
}

global.object_get_prop_object = function( obj, name ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_object( obj, name ) :${obj}, ${name}`)
  return undefined
}

global.object_get_prop_int = function( obj, name, defval ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_int( obj, name, defval ) :${obj}, ${name}, ${defval}`)
  return undefined
}

global.object_get_prop_bool = function( obj, name, defval ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_bool( obj, name, defval ) :${obj}, ${name}, ${defval}`)
  return undefined
}

global.object_get_prop_float = function( obj, name, defval ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_float( obj, name, defval ) :${obj}, ${name}, ${defval}`)
  return undefined
}

global.object_remove_prop = function( obj, name ){
  global.__AwtkSnapshot.push(`funtion  object_remove_prop( obj, name ) :${obj}, ${name}`)
  return undefined
}

global.object_set_prop = function( obj, name, value ){
  global.__AwtkSnapshot.push(`funtion  object_set_prop( obj, name, value ) :${obj}, ${name}, ${value}`)
  return undefined
}

global.object_set_prop_str = function( obj, name, value ){
  global.__AwtkSnapshot.push(`funtion  object_set_prop_str( obj, name, value ) :${obj}, ${name}, ${value}`)
  return undefined
}

global.object_set_prop_object = function( obj, name, value ){
  global.__AwtkSnapshot.push(`funtion  object_set_prop_object( obj, name, value ) :${obj}, ${name}, ${value}`)
  return undefined
}

global.object_set_prop_int = function( obj, name, value ){
  global.__AwtkSnapshot.push(`funtion  object_set_prop_int( obj, name, value ) :${obj}, ${name}, ${value}`)
  return undefined
}

global.object_set_prop_bool = function( obj, name, value ){
  global.__AwtkSnapshot.push(`funtion  object_set_prop_bool( obj, name, value ) :${obj}, ${name}, ${value}`)
  return undefined
}

global.object_set_prop_float = function( obj, name, value ){
  global.__AwtkSnapshot.push(`funtion  object_set_prop_float( obj, name, value ) :${obj}, ${name}, ${value}`)
  return undefined
}

global.object_copy_prop = function( obj, src, name ){
  global.__AwtkSnapshot.push(`funtion  object_copy_prop( obj, src, name ) :${obj}, ${src}, ${name}`)
  return undefined
}

global.object_has_prop = function( obj, name ){
  global.__AwtkSnapshot.push(`funtion  object_has_prop( obj, name ) :${obj}, ${name}`)
  return undefined
}

global.object_eval = function( obj, expr, v ){
  global.__AwtkSnapshot.push(`funtion  object_eval( obj, expr, v ) :${obj}, ${expr}, ${v}`)
  return undefined
}

global.object_can_exec = function( obj, name, args ){
  global.__AwtkSnapshot.push(`funtion  object_can_exec( obj, name, args ) :${obj}, ${name}, ${args}`)
  return undefined
}

global.object_exec = function( obj, name, args ){
  global.__AwtkSnapshot.push(`funtion  object_exec( obj, name, args ) :${obj}, ${name}, ${args}`)
  return undefined
}

global.object_notify_changed = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_notify_changed( obj ) :${obj}`)
  return undefined
}

global.object_get_prop_str_by_path = function( obj, path ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_str_by_path( obj, path ) :${obj}, ${path}`)
  return undefined
}

global.object_get_prop_pointer_by_path = function( obj, path ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_pointer_by_path( obj, path ) :${obj}, ${path}`)
  return undefined
}

global.object_get_prop_object_by_path = function( obj, path ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_object_by_path( obj, path ) :${obj}, ${path}`)
  return undefined
}

global.object_get_prop_int_by_path = function( obj, path, defval ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_int_by_path( obj, path, defval ) :${obj}, ${path}, ${defval}`)
  return undefined
}

global.object_get_prop_bool_by_path = function( obj, path, defval ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_bool_by_path( obj, path, defval ) :${obj}, ${path}, ${defval}`)
  return undefined
}

global.object_get_prop_float_by_path = function( obj, path, defval ){
  global.__AwtkSnapshot.push(`funtion  object_get_prop_float_by_path( obj, path, defval ) :${obj}, ${path}, ${defval}`)
  return undefined
}

global.object_t_get_prop_ref_count = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  object_t_get_prop_ref_count`)
  return "object_t_get_prop_ref_count"
}

global.object_t_get_prop_name = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  object_t_get_prop_name`)
  return "object_t_get_prop_name"
}

global.pages_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  pages_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.pages_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  pages_cast( widget ) :${widget}`)
  return undefined
}

global.pages_set_active = function( widget, index ){
  global.__AwtkSnapshot.push(`funtion  pages_set_active( widget, index ) :${widget}, ${index}`)
  return undefined
}

global.pages_set_active_by_name = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  pages_set_active_by_name( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.pages_t_get_prop_active = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pages_t_get_prop_active`)
  return "pages_t_get_prop_active"
}

global.line_number_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  line_number_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.line_number_set_top_margin = function( widget, top_margin ){
  global.__AwtkSnapshot.push(`funtion  line_number_set_top_margin( widget, top_margin ) :${widget}, ${top_margin}`)
  return undefined
}

global.line_number_set_bottom_margin = function( widget, bottom_margin ){
  global.__AwtkSnapshot.push(`funtion  line_number_set_bottom_margin( widget, bottom_margin ) :${widget}, ${bottom_margin}`)
  return undefined
}

global.line_number_set_line_height = function( widget, line_height ){
  global.__AwtkSnapshot.push(`funtion  line_number_set_line_height( widget, line_height ) :${widget}, ${line_height}`)
  return undefined
}

global.line_number_set_yoffset = function( widget, yoffset ){
  global.__AwtkSnapshot.push(`funtion  line_number_set_yoffset( widget, yoffset ) :${widget}, ${yoffset}`)
  return undefined
}

global.line_number_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  line_number_cast( widget ) :${widget}`)
  return undefined
}

global.overlay_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  overlay_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.overlay_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  overlay_cast( widget ) :${widget}`)
  return undefined
}

global.image_value_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  image_value_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.image_value_set_image = function( widget, image ){
  global.__AwtkSnapshot.push(`funtion  image_value_set_image( widget, image ) :${widget}, ${image}`)
  return undefined
}

global.image_value_set_format = function( widget, format ){
  global.__AwtkSnapshot.push(`funtion  image_value_set_format( widget, format ) :${widget}, ${format}`)
  return undefined
}

global.image_value_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  image_value_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.image_value_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  image_value_cast( widget ) :${widget}`)
  return undefined
}

global.image_value_t_get_prop_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_value_t_get_prop_image`)
  return "image_value_t_get_prop_image"
}

global.image_value_t_get_prop_format = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_value_t_get_prop_format`)
  return "image_value_t_get_prop_format"
}

global.image_value_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_value_t_get_prop_value`)
  return "image_value_t_get_prop_value"
}

global.image_animation_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  image_animation_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.image_animation_set_loop = function( widget, loop ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_loop( widget, loop ) :${widget}, ${loop}`)
  return undefined
}

global.image_animation_set_image = function( widget, image ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_image( widget, image ) :${widget}, ${image}`)
  return undefined
}

global.image_animation_set_interval = function( widget, interval ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_interval( widget, interval ) :${widget}, ${interval}`)
  return undefined
}

global.image_animation_set_delay = function( widget, delay ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_delay( widget, delay ) :${widget}, ${delay}`)
  return undefined
}

global.image_animation_set_auto_play = function( widget, auto_play ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_auto_play( widget, auto_play ) :${widget}, ${auto_play}`)
  return undefined
}

global.image_animation_set_sequence = function( widget, sequence ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_sequence( widget, sequence ) :${widget}, ${sequence}`)
  return undefined
}

global.image_animation_set_range_sequence = function( widget, start_index, end_index ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_range_sequence( widget, start_index, end_index ) :${widget}, ${start_index}, ${end_index}`)
  return undefined
}

global.image_animation_play = function( widget ){
  global.__AwtkSnapshot.push(`funtion  image_animation_play( widget ) :${widget}`)
  return undefined
}

global.image_animation_stop = function( widget ){
  global.__AwtkSnapshot.push(`funtion  image_animation_stop( widget ) :${widget}`)
  return undefined
}

global.image_animation_pause = function( widget ){
  global.__AwtkSnapshot.push(`funtion  image_animation_pause( widget ) :${widget}`)
  return undefined
}

global.image_animation_next = function( widget ){
  global.__AwtkSnapshot.push(`funtion  image_animation_next( widget ) :${widget}`)
  return undefined
}

global.image_animation_set_format = function( widget, format ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_format( widget, format ) :${widget}, ${format}`)
  return undefined
}

global.image_animation_set_unload_after_paint = function( widget, unload_after_paint ){
  global.__AwtkSnapshot.push(`funtion  image_animation_set_unload_after_paint( widget, unload_after_paint ) :${widget}, ${unload_after_paint}`)
  return undefined
}

global.image_animation_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  image_animation_cast( widget ) :${widget}`)
  return undefined
}

global.image_animation_t_get_prop_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_image`)
  return "image_animation_t_get_prop_image"
}

global.image_animation_t_get_prop_sequence = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_sequence`)
  return "image_animation_t_get_prop_sequence"
}

global.image_animation_t_get_prop_start_index = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_start_index`)
  return "image_animation_t_get_prop_start_index"
}

global.image_animation_t_get_prop_end_index = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_end_index`)
  return "image_animation_t_get_prop_end_index"
}

global.image_animation_t_get_prop_loop = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_loop`)
  return "image_animation_t_get_prop_loop"
}

global.image_animation_t_get_prop_auto_play = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_auto_play`)
  return "image_animation_t_get_prop_auto_play"
}

global.image_animation_t_get_prop_unload_after_paint = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_unload_after_paint`)
  return "image_animation_t_get_prop_unload_after_paint"
}

global.image_animation_t_get_prop_format = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_format`)
  return "image_animation_t_get_prop_format"
}

global.image_animation_t_get_prop_interval = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_interval`)
  return "image_animation_t_get_prop_interval"
}

global.image_animation_t_get_prop_delay = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_animation_t_get_prop_delay`)
  return "image_animation_t_get_prop_delay"
}

global.guage_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  guage_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.guage_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  guage_cast( widget ) :${widget}`)
  return undefined
}

global.guage_set_image = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  guage_set_image( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.guage_set_draw_type = function( widget, draw_type ){
  global.__AwtkSnapshot.push(`funtion  guage_set_draw_type( widget, draw_type ) :${widget}, ${draw_type}`)
  return undefined
}

global.guage_t_get_prop_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  guage_t_get_prop_image`)
  return "guage_t_get_prop_image"
}

global.guage_t_get_prop_draw_type = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  guage_t_get_prop_draw_type`)
  return "guage_t_get_prop_draw_type"
}

global.guage_pointer_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  guage_pointer_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.guage_pointer_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  guage_pointer_cast( widget ) :${widget}`)
  return undefined
}

global.guage_pointer_set_angle = function( widget, angle ){
  global.__AwtkSnapshot.push(`funtion  guage_pointer_set_angle( widget, angle ) :${widget}, ${angle}`)
  return undefined
}

global.guage_pointer_set_image = function( widget, image ){
  global.__AwtkSnapshot.push(`funtion  guage_pointer_set_image( widget, image ) :${widget}, ${image}`)
  return undefined
}

global.guage_pointer_set_anchor = function( widget, anchor_x, anchor_y ){
  global.__AwtkSnapshot.push(`funtion  guage_pointer_set_anchor( widget, anchor_x, anchor_y ) :${widget}, ${anchor_x}, ${anchor_y}`)
  return undefined
}

global.guage_pointer_t_get_prop_angle = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  guage_pointer_t_get_prop_angle`)
  return "guage_pointer_t_get_prop_angle"
}

global.guage_pointer_t_get_prop_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  guage_pointer_t_get_prop_image`)
  return "guage_pointer_t_get_prop_image"
}

global.guage_pointer_t_get_prop_anchor_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  guage_pointer_t_get_prop_anchor_x`)
  return "guage_pointer_t_get_prop_anchor_x"
}

global.guage_pointer_t_get_prop_anchor_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  guage_pointer_t_get_prop_anchor_y`)
  return "guage_pointer_t_get_prop_anchor_y"
}

global.label_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  label_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.label_set_length = function( widget, length ){
  global.__AwtkSnapshot.push(`funtion  label_set_length( widget, length ) :${widget}, ${length}`)
  return undefined
}

global.label_resize_to_content = function( widget, min_w, max_w, min_h, max_h ){
  global.__AwtkSnapshot.push(`funtion  label_resize_to_content( widget, min_w, max_w, min_h, max_h ) :${widget}, ${min_w}, ${max_w}, ${min_h}, ${max_h}`)
  return undefined
}

global.label_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  label_cast( widget ) :${widget}`)
  return undefined
}

global.label_t_get_prop_length = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  label_t_get_prop_length`)
  return "label_t_get_prop_length"
}

global.draggable_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  draggable_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.draggable_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  draggable_cast( widget ) :${widget}`)
  return undefined
}

global.draggable_set_top = function( widget, top ){
  global.__AwtkSnapshot.push(`funtion  draggable_set_top( widget, top ) :${widget}, ${top}`)
  return undefined
}

global.draggable_set_bottom = function( widget, bottom ){
  global.__AwtkSnapshot.push(`funtion  draggable_set_bottom( widget, bottom ) :${widget}, ${bottom}`)
  return undefined
}

global.draggable_set_left = function( widget, left ){
  global.__AwtkSnapshot.push(`funtion  draggable_set_left( widget, left ) :${widget}, ${left}`)
  return undefined
}

global.draggable_set_right = function( widget, right ){
  global.__AwtkSnapshot.push(`funtion  draggable_set_right( widget, right ) :${widget}, ${right}`)
  return undefined
}

global.draggable_set_vertical_only = function( widget, vertical_only ){
  global.__AwtkSnapshot.push(`funtion  draggable_set_vertical_only( widget, vertical_only ) :${widget}, ${vertical_only}`)
  return undefined
}

global.draggable_set_horizontal_only = function( widget, horizontal_only ){
  global.__AwtkSnapshot.push(`funtion  draggable_set_horizontal_only( widget, horizontal_only ) :${widget}, ${horizontal_only}`)
  return undefined
}

global.draggable_set_drag_window = function( widget, drag_window ){
  global.__AwtkSnapshot.push(`funtion  draggable_set_drag_window( widget, drag_window ) :${widget}, ${drag_window}`)
  return undefined
}

global.draggable_t_get_prop_top = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  draggable_t_get_prop_top`)
  return "draggable_t_get_prop_top"
}

global.draggable_t_get_prop_bottom = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  draggable_t_get_prop_bottom`)
  return "draggable_t_get_prop_bottom"
}

global.draggable_t_get_prop_left = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  draggable_t_get_prop_left`)
  return "draggable_t_get_prop_left"
}

global.draggable_t_get_prop_right = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  draggable_t_get_prop_right`)
  return "draggable_t_get_prop_right"
}

global.draggable_t_get_prop_vertical_only = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  draggable_t_get_prop_vertical_only`)
  return "draggable_t_get_prop_vertical_only"
}

global.draggable_t_get_prop_horizontal_only = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  draggable_t_get_prop_horizontal_only`)
  return "draggable_t_get_prop_horizontal_only"
}

global.draggable_t_get_prop_drag_window = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  draggable_t_get_prop_drag_window`)
  return "draggable_t_get_prop_drag_window"
}

global.group_box_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  group_box_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.group_box_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  group_box_cast( widget ) :${widget}`)
  return undefined
}

global.color_picker_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  color_picker_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.color_picker_set_color = function( widget, color ){
  global.__AwtkSnapshot.push(`funtion  color_picker_set_color( widget, color ) :${widget}, ${color}`)
  return undefined
}

global.color_picker_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  color_picker_cast( widget ) :${widget}`)
  return undefined
}

global.color_picker_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  color_picker_t_get_prop_value`)
  return "color_picker_t_get_prop_value"
}

global.canvas_widget_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  canvas_widget_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.canvas_widget_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  canvas_widget_cast( widget ) :${widget}`)
  return undefined
}

global.grid_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  grid_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.grid_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  grid_cast( widget ) :${widget}`)
  return undefined
}

global.grid_item_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  grid_item_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.grid_item_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  grid_item_cast( widget ) :${widget}`)
  return undefined
}

global.window_manager = function(  ){
  global.__AwtkSnapshot.push(`funtion  window_manager(  ) :`)
  return undefined
}

global.window_manager_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_cast( widget ) :${widget}`)
  return undefined
}

global.window_manager_get_top_main_window = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_get_top_main_window( widget ) :${widget}`)
  return undefined
}

global.window_manager_get_top_window = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_get_top_window( widget ) :${widget}`)
  return undefined
}

global.window_manager_get_prev_window = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_get_prev_window( widget ) :${widget}`)
  return undefined
}

global.window_manager_get_pointer_x = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_get_pointer_x( widget ) :${widget}`)
  return undefined
}

global.window_manager_get_pointer_y = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_get_pointer_y( widget ) :${widget}`)
  return undefined
}

global.window_manager_get_pointer_pressed = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_get_pointer_pressed( widget ) :${widget}`)
  return undefined
}

global.window_manager_set_show_fps = function( widget, show_fps ){
  global.__AwtkSnapshot.push(`funtion  window_manager_set_show_fps( widget, show_fps ) :${widget}, ${show_fps}`)
  return undefined
}

global.window_manager_set_screen_saver_time = function( widget, screen_saver_time ){
  global.__AwtkSnapshot.push(`funtion  window_manager_set_screen_saver_time( widget, screen_saver_time ) :${widget}, ${screen_saver_time}`)
  return undefined
}

global.window_manager_set_cursor = function( widget, cursor ){
  global.__AwtkSnapshot.push(`funtion  window_manager_set_cursor( widget, cursor ) :${widget}, ${cursor}`)
  return undefined
}

global.window_manager_back = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_back( widget ) :${widget}`)
  return undefined
}

global.window_manager_back_to_home = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_manager_back_to_home( widget ) :${widget}`)
  return undefined
}

global.window_manager_back_to = function( widget, target ){
  global.__AwtkSnapshot.push(`funtion  window_manager_back_to( widget, target ) :${widget}, ${target}`)
  return undefined
}

global.window_base_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_base_cast( widget ) :${widget}`)
  return undefined
}

global.window_base_t_get_prop_theme = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  window_base_t_get_prop_theme`)
  return "window_base_t_get_prop_theme"
}

global.window_base_t_get_prop_closable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  window_base_t_get_prop_closable`)
  return "window_base_t_get_prop_closable"
}

global.edit_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  edit_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.edit_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  edit_cast( widget ) :${widget}`)
  return undefined
}

global.edit_get_int = function( widget ){
  global.__AwtkSnapshot.push(`funtion  edit_get_int( widget ) :${widget}`)
  return undefined
}

global.edit_get_double = function( widget ){
  global.__AwtkSnapshot.push(`funtion  edit_get_double( widget ) :${widget}`)
  return undefined
}

global.edit_set_int = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  edit_set_int( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.edit_set_double = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  edit_set_double( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.edit_set_text_limit = function( widget, min, max ){
  global.__AwtkSnapshot.push(`funtion  edit_set_text_limit( widget, min, max ) :${widget}, ${min}, ${max}`)
  return undefined
}

global.edit_set_int_limit = function( widget, min, max, step ){
  global.__AwtkSnapshot.push(`funtion  edit_set_int_limit( widget, min, max, step ) :${widget}, ${min}, ${max}, ${step}`)
  return undefined
}

global.edit_set_float_limit = function( widget, min, max, step ){
  global.__AwtkSnapshot.push(`funtion  edit_set_float_limit( widget, min, max, step ) :${widget}, ${min}, ${max}, ${step}`)
  return undefined
}

global.edit_set_readonly = function( widget, readonly ){
  global.__AwtkSnapshot.push(`funtion  edit_set_readonly( widget, readonly ) :${widget}, ${readonly}`)
  return undefined
}

global.edit_set_auto_fix = function( widget, auto_fix ){
  global.__AwtkSnapshot.push(`funtion  edit_set_auto_fix( widget, auto_fix ) :${widget}, ${auto_fix}`)
  return undefined
}

global.edit_set_select_none_when_focused = function( widget, select_none_when_focused ){
  global.__AwtkSnapshot.push(`funtion  edit_set_select_none_when_focused( widget, select_none_when_focused ) :${widget}, ${select_none_when_focused}`)
  return undefined
}

global.edit_set_open_im_when_focused = function( widget, open_im_when_focused ){
  global.__AwtkSnapshot.push(`funtion  edit_set_open_im_when_focused( widget, open_im_when_focused ) :${widget}, ${open_im_when_focused}`)
  return undefined
}

global.edit_set_input_type = function( widget, type ){
  global.__AwtkSnapshot.push(`funtion  edit_set_input_type( widget, type ) :${widget}, ${type}`)
  return undefined
}

global.edit_set_input_tips = function( widget, tips ){
  global.__AwtkSnapshot.push(`funtion  edit_set_input_tips( widget, tips ) :${widget}, ${tips}`)
  return undefined
}

global.edit_set_password_visible = function( widget, password_visible ){
  global.__AwtkSnapshot.push(`funtion  edit_set_password_visible( widget, password_visible ) :${widget}, ${password_visible}`)
  return undefined
}

global.edit_set_focus = function( widget, focus ){
  global.__AwtkSnapshot.push(`funtion  edit_set_focus( widget, focus ) :${widget}, ${focus}`)
  return undefined
}

global.edit_set_cursor = function( widget, cursor ){
  global.__AwtkSnapshot.push(`funtion  edit_set_cursor( widget, cursor ) :${widget}, ${cursor}`)
  return undefined
}

global.edit_t_get_prop_readonly = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_readonly`)
  return "edit_t_get_prop_readonly"
}

global.edit_t_get_prop_password_visible = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_password_visible`)
  return "edit_t_get_prop_password_visible"
}

global.edit_t_get_prop_auto_fix = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_auto_fix`)
  return "edit_t_get_prop_auto_fix"
}

global.edit_t_get_prop_select_none_when_focused = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_select_none_when_focused`)
  return "edit_t_get_prop_select_none_when_focused"
}

global.edit_t_get_prop_open_im_when_focused = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_open_im_when_focused`)
  return "edit_t_get_prop_open_im_when_focused"
}

global.edit_t_get_prop_tips = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_tips`)
  return "edit_t_get_prop_tips"
}

global.edit_t_get_prop_input_type = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_input_type`)
  return "edit_t_get_prop_input_type"
}

global.edit_t_get_prop_min = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_min`)
  return "edit_t_get_prop_min"
}

global.edit_t_get_prop_max = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_max`)
  return "edit_t_get_prop_max"
}

global.edit_t_get_prop_step = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  edit_t_get_prop_step`)
  return "edit_t_get_prop_step"
}

global.style_mutable_set_name = function( s, name ){
  global.__AwtkSnapshot.push(`funtion  style_mutable_set_name( s, name ) :${s}, ${name}`)
  return undefined
}

global.style_mutable_set_int = function( s, state, name, val ){
  global.__AwtkSnapshot.push(`funtion  style_mutable_set_int( s, state, name, val ) :${s}, ${state}, ${name}, ${val}`)
  return undefined
}

global.style_mutable_cast = function( s ){
  global.__AwtkSnapshot.push(`funtion  style_mutable_cast( s ) :${s}`)
  return undefined
}

global.style_mutable_create = function( widget, default_style ){
  global.__AwtkSnapshot.push(`funtion  style_mutable_create( widget, default_style ) :${widget}, ${default_style}`)
  return undefined
}

global.style_mutable_t_get_prop_name = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  style_mutable_t_get_prop_name`)
  return "style_mutable_t_get_prop_name"
}

global.dragger_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  dragger_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.dragger_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dragger_cast( widget ) :${widget}`)
  return undefined
}

global.dragger_set_range = function( widget, x_min, y_min, x_max, y_max ){
  global.__AwtkSnapshot.push(`funtion  dragger_set_range( widget, x_min, y_min, x_max, y_max ) :${widget}, ${x_min}, ${y_min}, ${x_max}, ${y_max}`)
  return undefined
}

global.dragger_t_get_prop_x_min = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  dragger_t_get_prop_x_min`)
  return "dragger_t_get_prop_x_min"
}

global.dragger_t_get_prop_y_min = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  dragger_t_get_prop_y_min`)
  return "dragger_t_get_prop_y_min"
}

global.dragger_t_get_prop_x_max = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  dragger_t_get_prop_x_max`)
  return "dragger_t_get_prop_x_max"
}

global.dragger_t_get_prop_y_max = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  dragger_t_get_prop_y_max`)
  return "dragger_t_get_prop_y_max"
}

global.image_base_set_image = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  image_base_set_image( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.image_base_set_rotation = function( widget, rotation ){
  global.__AwtkSnapshot.push(`funtion  image_base_set_rotation( widget, rotation ) :${widget}, ${rotation}`)
  return undefined
}

global.image_base_set_scale = function( widget, scale_x, scale_y ){
  global.__AwtkSnapshot.push(`funtion  image_base_set_scale( widget, scale_x, scale_y ) :${widget}, ${scale_x}, ${scale_y}`)
  return undefined
}

global.image_base_set_anchor = function( widget, anchor_x, anchor_y ){
  global.__AwtkSnapshot.push(`funtion  image_base_set_anchor( widget, anchor_x, anchor_y ) :${widget}, ${anchor_x}, ${anchor_y}`)
  return undefined
}

global.image_base_set_selected = function( widget, selected ){
  global.__AwtkSnapshot.push(`funtion  image_base_set_selected( widget, selected ) :${widget}, ${selected}`)
  return undefined
}

global.image_base_set_selectable = function( widget, selectable ){
  global.__AwtkSnapshot.push(`funtion  image_base_set_selectable( widget, selectable ) :${widget}, ${selectable}`)
  return undefined
}

global.image_base_set_clickable = function( widget, clickable ){
  global.__AwtkSnapshot.push(`funtion  image_base_set_clickable( widget, clickable ) :${widget}, ${clickable}`)
  return undefined
}

global.image_base_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  image_base_cast( widget ) :${widget}`)
  return undefined
}

global.image_base_t_get_prop_image = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_image`)
  return "image_base_t_get_prop_image"
}

global.image_base_t_get_prop_anchor_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_anchor_x`)
  return "image_base_t_get_prop_anchor_x"
}

global.image_base_t_get_prop_anchor_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_anchor_y`)
  return "image_base_t_get_prop_anchor_y"
}

global.image_base_t_get_prop_scale_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_scale_x`)
  return "image_base_t_get_prop_scale_x"
}

global.image_base_t_get_prop_scale_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_scale_y`)
  return "image_base_t_get_prop_scale_y"
}

global.image_base_t_get_prop_rotation = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_rotation`)
  return "image_base_t_get_prop_rotation"
}

global.image_base_t_get_prop_clickable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_clickable`)
  return "image_base_t_get_prop_clickable"
}

global.image_base_t_get_prop_selectable = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_selectable`)
  return "image_base_t_get_prop_selectable"
}

global.image_base_t_get_prop_selected = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_base_t_get_prop_selected`)
  return "image_base_t_get_prop_selected"
}

global.window_event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  window_event_cast( event ) :${event}`)
  return undefined
}

global.window_event_t_get_prop_window = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  window_event_t_get_prop_window`)
  return "window_event_t_get_prop_window"
}

global.paint_event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  paint_event_cast( event ) :${event}`)
  return undefined
}

global.paint_event_t_get_prop_c = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  paint_event_t_get_prop_c`)
  return "paint_event_t_get_prop_c"
}

global.key_event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  key_event_cast( event ) :${event}`)
  return undefined
}

global.key_event_t_get_prop_key = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_key`)
  return "key_event_t_get_prop_key"
}

global.key_event_t_get_prop_alt = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_alt`)
  return "key_event_t_get_prop_alt"
}

global.key_event_t_get_prop_lalt = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_lalt`)
  return "key_event_t_get_prop_lalt"
}

global.key_event_t_get_prop_ralt = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_ralt`)
  return "key_event_t_get_prop_ralt"
}

global.key_event_t_get_prop_ctrl = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_ctrl`)
  return "key_event_t_get_prop_ctrl"
}

global.key_event_t_get_prop_lctrl = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_lctrl`)
  return "key_event_t_get_prop_lctrl"
}

global.key_event_t_get_prop_rctrl = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_rctrl`)
  return "key_event_t_get_prop_rctrl"
}

global.key_event_t_get_prop_shift = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_shift`)
  return "key_event_t_get_prop_shift"
}

global.key_event_t_get_prop_lshift = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_lshift`)
  return "key_event_t_get_prop_lshift"
}

global.key_event_t_get_prop_rshift = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_rshift`)
  return "key_event_t_get_prop_rshift"
}

global.key_event_t_get_prop_cmd = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_cmd`)
  return "key_event_t_get_prop_cmd"
}

global.key_event_t_get_prop_menu = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_menu`)
  return "key_event_t_get_prop_menu"
}

global.key_event_t_get_prop_capslock = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  key_event_t_get_prop_capslock`)
  return "key_event_t_get_prop_capslock"
}

global.pointer_event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  pointer_event_cast( event ) :${event}`)
  return undefined
}

global.pointer_event_t_get_prop_x = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_x`)
  return "pointer_event_t_get_prop_x"
}

global.pointer_event_t_get_prop_y = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_y`)
  return "pointer_event_t_get_prop_y"
}

global.pointer_event_t_get_prop_button = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_button`)
  return "pointer_event_t_get_prop_button"
}

global.pointer_event_t_get_prop_pressed = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_pressed`)
  return "pointer_event_t_get_prop_pressed"
}

global.pointer_event_t_get_prop_alt = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_alt`)
  return "pointer_event_t_get_prop_alt"
}

global.pointer_event_t_get_prop_ctrl = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_ctrl`)
  return "pointer_event_t_get_prop_ctrl"
}

global.pointer_event_t_get_prop_cmd = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_cmd`)
  return "pointer_event_t_get_prop_cmd"
}

global.pointer_event_t_get_prop_menu = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_menu`)
  return "pointer_event_t_get_prop_menu"
}

global.pointer_event_t_get_prop_shift = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  pointer_event_t_get_prop_shift`)
  return "pointer_event_t_get_prop_shift"
}

global.orientation_event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  orientation_event_cast( event ) :${event}`)
  return undefined
}

global.orientation_event_t_get_prop_orientation = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  orientation_event_t_get_prop_orientation`)
  return "orientation_event_t_get_prop_orientation"
}

global.wheel_event_cast = function( event ){
  global.__AwtkSnapshot.push(`funtion  wheel_event_cast( event ) :${event}`)
  return undefined
}

global.wheel_event_t_get_prop_dy = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  wheel_event_t_get_prop_dy`)
  return "wheel_event_t_get_prop_dy"
}

global.wheel_event_t_get_prop_alt = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  wheel_event_t_get_prop_alt`)
  return "wheel_event_t_get_prop_alt"
}

global.wheel_event_t_get_prop_ctrl = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  wheel_event_t_get_prop_ctrl`)
  return "wheel_event_t_get_prop_ctrl"
}

global.wheel_event_t_get_prop_shift = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  wheel_event_t_get_prop_shift`)
  return "wheel_event_t_get_prop_shift"
}

global.app_bar_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  app_bar_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.app_bar_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  app_bar_cast( widget ) :${widget}`)
  return undefined
}

global.button_group_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  button_group_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.button_group_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  button_group_cast( widget ) :${widget}`)
  return undefined
}

global.button_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  button_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.button_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  button_cast( widget ) :${widget}`)
  return undefined
}

global.button_set_repeat = function( widget, repeat ){
  global.__AwtkSnapshot.push(`funtion  button_set_repeat( widget, repeat ) :${widget}, ${repeat}`)
  return undefined
}

global.button_set_enable_long_press = function( widget, enable_long_press ){
  global.__AwtkSnapshot.push(`funtion  button_set_enable_long_press( widget, enable_long_press ) :${widget}, ${enable_long_press}`)
  return undefined
}

global.button_t_get_prop_repeat = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  button_t_get_prop_repeat`)
  return "button_t_get_prop_repeat"
}

global.button_t_get_prop_enable_long_press = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  button_t_get_prop_enable_long_press`)
  return "button_t_get_prop_enable_long_press"
}

global.digit_clock_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  digit_clock_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.digit_clock_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  digit_clock_cast( widget ) :${widget}`)
  return undefined
}

global.digit_clock_set_format = function( widget, format ){
  global.__AwtkSnapshot.push(`funtion  digit_clock_set_format( widget, format ) :${widget}, ${format}`)
  return undefined
}

global.digit_clock_t_get_prop_format = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  digit_clock_t_get_prop_format`)
  return "digit_clock_t_get_prop_format"
}

global.check_button_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  check_button_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.check_button_create_radio = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  check_button_create_radio( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.check_button_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  check_button_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.check_button_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  check_button_cast( widget ) :${widget}`)
  return undefined
}

global.check_button_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  check_button_t_get_prop_value`)
  return "check_button_t_get_prop_value"
}

global.color_tile_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  color_tile_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.color_tile_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  color_tile_cast( widget ) :${widget}`)
  return undefined
}

global.color_tile_set_bg_color = function( widget, color ){
  global.__AwtkSnapshot.push(`funtion  color_tile_set_bg_color( widget, color ) :${widget}, ${color}`)
  return undefined
}

global.color_tile_t_get_prop_bg_color = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  color_tile_t_get_prop_bg_color`)
  return "color_tile_t_get_prop_bg_color"
}

global.color_tile_t_get_prop_border_color = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  color_tile_t_get_prop_border_color`)
  return "color_tile_t_get_prop_border_color"
}

global.column_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  column_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.column_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  column_cast( widget ) :${widget}`)
  return undefined
}

global.combo_box_item_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  combo_box_item_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.combo_box_item_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  combo_box_item_cast( widget ) :${widget}`)
  return undefined
}

global.combo_box_item_set_checked = function( widget, checked ){
  global.__AwtkSnapshot.push(`funtion  combo_box_item_set_checked( widget, checked ) :${widget}, ${checked}`)
  return undefined
}

global.combo_box_item_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  combo_box_item_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.combo_box_item_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  combo_box_item_t_get_prop_value`)
  return "combo_box_item_t_get_prop_value"
}

global.combo_box_item_t_get_prop_checked = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  combo_box_item_t_get_prop_checked`)
  return "combo_box_item_t_get_prop_checked"
}

global.combo_box_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  combo_box_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.combo_box_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  combo_box_cast( widget ) :${widget}`)
  return undefined
}

global.combo_box_set_open_window = function( widget, open_window ){
  global.__AwtkSnapshot.push(`funtion  combo_box_set_open_window( widget, open_window ) :${widget}, ${open_window}`)
  return undefined
}

global.combo_box_reset_options = function( widget ){
  global.__AwtkSnapshot.push(`funtion  combo_box_reset_options( widget ) :${widget}`)
  return undefined
}

global.combo_box_count_options = function( widget ){
  global.__AwtkSnapshot.push(`funtion  combo_box_count_options( widget ) :${widget}`)
  return undefined
}

global.combo_box_set_selected_index = function( widget, index ){
  global.__AwtkSnapshot.push(`funtion  combo_box_set_selected_index( widget, index ) :${widget}, ${index}`)
  return undefined
}

global.combo_box_set_localize_options = function( widget, localize_options ){
  global.__AwtkSnapshot.push(`funtion  combo_box_set_localize_options( widget, localize_options ) :${widget}, ${localize_options}`)
  return undefined
}

global.combo_box_set_value = function( widget, value ){
  global.__AwtkSnapshot.push(`funtion  combo_box_set_value( widget, value ) :${widget}, ${value}`)
  return undefined
}

global.combo_box_set_item_height = function( widget, item_height ){
  global.__AwtkSnapshot.push(`funtion  combo_box_set_item_height( widget, item_height ) :${widget}, ${item_height}`)
  return undefined
}

global.combo_box_append_option = function( widget, value, text ){
  global.__AwtkSnapshot.push(`funtion  combo_box_append_option( widget, value, text ) :${widget}, ${value}, ${text}`)
  return undefined
}

global.combo_box_set_options = function( widget, options ){
  global.__AwtkSnapshot.push(`funtion  combo_box_set_options( widget, options ) :${widget}, ${options}`)
  return undefined
}

global.combo_box_get_value = function( widget ){
  global.__AwtkSnapshot.push(`funtion  combo_box_get_value( widget ) :${widget}`)
  return undefined
}

global.combo_box_get_text = function( widget ){
  global.__AwtkSnapshot.push(`funtion  combo_box_get_text( widget ) :${widget}`)
  return undefined
}

global.combo_box_t_get_prop_open_window = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  combo_box_t_get_prop_open_window`)
  return "combo_box_t_get_prop_open_window"
}

global.combo_box_t_get_prop_selected_index = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  combo_box_t_get_prop_selected_index`)
  return "combo_box_t_get_prop_selected_index"
}

global.combo_box_t_get_prop_value = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  combo_box_t_get_prop_value`)
  return "combo_box_t_get_prop_value"
}

global.combo_box_t_get_prop_localize_options = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  combo_box_t_get_prop_localize_options`)
  return "combo_box_t_get_prop_localize_options"
}

global.combo_box_t_get_prop_options = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  combo_box_t_get_prop_options`)
  return "combo_box_t_get_prop_options"
}

global.combo_box_t_get_prop_item_height = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  combo_box_t_get_prop_item_height`)
  return "combo_box_t_get_prop_item_height"
}

global.dialog_client_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  dialog_client_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.dialog_client_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dialog_client_cast( widget ) :${widget}`)
  return undefined
}

global.dialog_title_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  dialog_title_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.dialog_title_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dialog_title_cast( widget ) :${widget}`)
  return undefined
}

global.object_default_create = function(  ){
  global.__AwtkSnapshot.push(`funtion  object_default_create(  ) :`)
  return undefined
}

global.object_default_unref = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_default_unref( obj ) :${obj}`)
  return undefined
}

global.object_default_clear_props = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_default_clear_props( obj ) :${obj}`)
  return undefined
}

global.object_default_t_get_prop_props_size = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  object_default_t_get_prop_props_size`)
  return "object_default_t_get_prop_props_size"
}

global.window_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  window_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.window_set_fullscreen = function( widget, fullscreen ){
  global.__AwtkSnapshot.push(`funtion  window_set_fullscreen( widget, fullscreen ) :${widget}, ${fullscreen}`)
  return undefined
}

global.window_open = function( name ){
  global.__AwtkSnapshot.push(`funtion  window_open( name ) :${name}`)
  return undefined
}

global.window_open_and_close = function( name, to_close ){
  global.__AwtkSnapshot.push(`funtion  window_open_and_close( name, to_close ) :${name}, ${to_close}`)
  return undefined
}

global.window_close = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_close( widget ) :${widget}`)
  return undefined
}

global.window_close_force = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_close_force( widget ) :${widget}`)
  return undefined
}

global.window_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  window_cast( widget ) :${widget}`)
  return undefined
}

global.window_t_get_prop_fullscreen = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  window_t_get_prop_fullscreen`)
  return "window_t_get_prop_fullscreen"
}

global.timer_info_cast = function( timer ){
  global.__AwtkSnapshot.push(`funtion  timer_info_cast( timer ) :${timer}`)
  return undefined
}

global.timer_info_t_get_prop_ctx = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  timer_info_t_get_prop_ctx`)
  return "timer_info_t_get_prop_ctx"
}

global.timer_info_t_get_prop_id = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  timer_info_t_get_prop_id`)
  return "timer_info_t_get_prop_id"
}

global.timer_info_t_get_prop_now = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  timer_info_t_get_prop_now`)
  return "timer_info_t_get_prop_now"
}

global.combo_box_ex_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  combo_box_ex_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.image_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  image_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.image_set_draw_type = function( widget, draw_type ){
  global.__AwtkSnapshot.push(`funtion  image_set_draw_type( widget, draw_type ) :${widget}, ${draw_type}`)
  return undefined
}

global.image_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  image_cast( widget ) :${widget}`)
  return undefined
}

global.image_t_get_prop_draw_type = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  image_t_get_prop_draw_type`)
  return "image_t_get_prop_draw_type"
}

global.gif_image_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  gif_image_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.gif_image_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  gif_image_cast( widget ) :${widget}`)
  return undefined
}

global.keyboard_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  keyboard_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.keyboard_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  keyboard_cast( widget ) :${widget}`)
  return undefined
}

global.popup_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  popup_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.popup_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  popup_cast( widget ) :${widget}`)
  return undefined
}

global.popup_set_close_when_click = function( widget, close_when_click ){
  global.__AwtkSnapshot.push(`funtion  popup_set_close_when_click( widget, close_when_click ) :${widget}, ${close_when_click}`)
  return undefined
}

global.popup_set_close_when_click_outside = function( widget, close_when_click_outside ){
  global.__AwtkSnapshot.push(`funtion  popup_set_close_when_click_outside( widget, close_when_click_outside ) :${widget}, ${close_when_click_outside}`)
  return undefined
}

global.popup_t_get_prop_close_when_click = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  popup_t_get_prop_close_when_click`)
  return "popup_t_get_prop_close_when_click"
}

global.popup_t_get_prop_close_when_click_outside = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  popup_t_get_prop_close_when_click_outside`)
  return "popup_t_get_prop_close_when_click_outside"
}

global.object_array_create = function(  ){
  global.__AwtkSnapshot.push(`funtion  object_array_create(  ) :`)
  return undefined
}

global.object_array_unref = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_array_unref( obj ) :${obj}`)
  return undefined
}

global.object_array_clear_props = function( obj ){
  global.__AwtkSnapshot.push(`funtion  object_array_clear_props( obj ) :${obj}`)
  return undefined
}

global.object_array_t_get_prop_props_size = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  object_array_t_get_prop_props_size`)
  return "object_array_t_get_prop_props_size"
}

global.spin_box_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  spin_box_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.spin_box_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  spin_box_cast( widget ) :${widget}`)
  return undefined
}

global.system_bar_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  system_bar_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.system_bar_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  system_bar_cast( widget ) :${widget}`)
  return undefined
}

global.idle_info_cast = function( idle ){
  global.__AwtkSnapshot.push(`funtion  idle_info_cast( idle ) :${idle}`)
  return undefined
}

global.idle_info_t_get_prop_ctx = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  idle_info_t_get_prop_ctx`)
  return "idle_info_t_get_prop_ctx"
}

global.idle_info_t_get_prop_id = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  idle_info_t_get_prop_id`)
  return "idle_info_t_get_prop_id"
}

global.svg_image_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  svg_image_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.svg_image_set_image = function( widget, name ){
  global.__AwtkSnapshot.push(`funtion  svg_image_set_image( widget, name ) :${widget}, ${name}`)
  return undefined
}

global.svg_image_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  svg_image_cast( widget ) :${widget}`)
  return undefined
}

global.dialog_create = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  dialog_create( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.dialog_create_simple = function( parent, x, y, w, h ){
  global.__AwtkSnapshot.push(`funtion  dialog_create_simple( parent, x, y, w, h ) :${parent}, ${x}, ${y}, ${w}, ${h}`)
  return undefined
}

global.dialog_cast = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dialog_cast( widget ) :${widget}`)
  return undefined
}

global.dialog_get_title = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dialog_get_title( widget ) :${widget}`)
  return undefined
}

global.dialog_get_client = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dialog_get_client( widget ) :${widget}`)
  return undefined
}

global.dialog_open = function( name ){
  global.__AwtkSnapshot.push(`funtion  dialog_open( name ) :${name}`)
  return undefined
}

global.dialog_set_title = function( widget, title ){
  global.__AwtkSnapshot.push(`funtion  dialog_set_title( widget, title ) :${widget}, ${title}`)
  return undefined
}

global.dialog_modal = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dialog_modal( widget ) :${widget}`)
  return undefined
}

global.dialog_quit = function( widget, code ){
  global.__AwtkSnapshot.push(`funtion  dialog_quit( widget, code ) :${widget}, ${code}`)
  return undefined
}

global.dialog_is_quited = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dialog_is_quited( widget ) :${widget}`)
  return undefined
}

global.dialog_is_modal = function( widget ){
  global.__AwtkSnapshot.push(`funtion  dialog_is_modal( widget ) :${widget}`)
  return undefined
}

global.dialog_toast = function( text, duration ){
  global.__AwtkSnapshot.push(`funtion  dialog_toast( text, duration ) :${text}, ${duration}`)
  return undefined
}

global.dialog_info = function( title, text ){
  global.__AwtkSnapshot.push(`funtion  dialog_info( title, text ) :${title}, ${text}`)
  return undefined
}

global.dialog_warn = function( title, text ){
  global.__AwtkSnapshot.push(`funtion  dialog_warn( title, text ) :${title}, ${text}`)
  return undefined
}

global.dialog_confirm = function( title, text ){
  global.__AwtkSnapshot.push(`funtion  dialog_confirm( title, text ) :${title}, ${text}`)
  return undefined
}

global.dialog_t_get_prop_highlight = function (nativeObj){
  global.__AwtkSnapshot.push( `get properties  dialog_t_get_prop_highlight`)
  return "dialog_t_get_prop_highlight"
}

