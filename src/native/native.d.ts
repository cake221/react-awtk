declare enum TRet {
  OK ,
  OOM ,
  FAIL ,
  NOT_IMPL ,
  QUIT ,
  FOUND ,
  BUSY ,
  REMOVE ,
  REPEAT ,
  NOT_FOUND ,
  DONE ,
  STOP ,
  SKIP ,
  CONTINUE ,
  OBJECT_CHANGED ,
  ITEMS_CHANGED ,
  BAD_PARAMS ,
  TIMEOUT ,
  CRC ,
  IO ,
  EOS
}

declare enum TImageDrawType {
  DEFAULT ,
  CENTER ,
  ICON ,
  SCALE ,
  SCALE_AUTO ,
  SCALE_DOWN ,
  SCALE_W ,
  SCALE_H ,
  REPEAT ,
  REPEAT_X ,
  REPEAT_Y ,
  REPEAT_Y_INVERSE ,
  PATCH9 ,
  PATCH3_X ,
  PATCH3_Y ,
  PATCH3_X_SCALE_Y ,
  PATCH3_Y_SCALE_X ,
}

declare enum TBitmapFormat {
  NONE ,
  RGBA8888 ,
  ABGR8888 ,
  BGRA8888 ,
  ARGB8888 ,
  RGB565 ,
  BGR565 ,
  RGB888 ,
  BGR888 ,
  GRAY ,
  MONO
}
 
declare enum TBitmapFlag {
  NONE ,
  OPAQUE ,
  IMMUTABLE ,
  TEXTURE ,
  CHANGED ,
  PREMULTI_ALPHA 
}

declare enum TEventType {
  POINTER_DOWN ,
  POINTER_DOWN_BEFORE_CHILDREN ,
  POINTER_MOVE ,
  POINTER_MOVE_BEFORE_CHILDREN ,
  POINTER_UP ,
  POINTER_UP_BEFORE_CHILDREN ,
  WHEEL ,
  WHEEL_BEFORE_CHILDREN ,
  POINTER_DOWN_ABORT ,
  CONTEXT_MENU ,
  POINTER_ENTER ,
  POINTER_LEAVE ,
  LONG_PRESS ,
  CLICK ,
  FOCUS ,
  BLUR ,
  KEY_DOWN ,
  KEY_DOWN_BEFORE_CHILDREN ,
  KEY_REPEAT ,
  KEY_UP ,
  KEY_UP_BEFORE_CHILDREN ,
  WILL_MOVE ,
  MOVE ,
  WILL_RESIZE ,
  RESIZE ,
  WILL_MOVE_RESIZE ,
  MOVE_RESIZE ,
  VALUE_WILL_CHANGE ,
  VALUE_CHANGED ,
  VALUE_CHANGING ,
  PAINT ,
  BEFORE_PAINT ,
  AFTER_PAINT ,
  PAINT_DONE ,
  LOCALE_CHANGED ,
  ANIM_START ,
  ANIM_STOP ,
  ANIM_PAUSE ,
  ANIM_ONCE ,
  ANIM_END ,
  WINDOW_LOAD ,
  WINDOW_WILL_OPEN ,
  WINDOW_OPEN ,
  WINDOW_TO_BACKGROUND ,
  WINDOW_TO_FOREGROUND ,
  WINDOW_CLOSE ,
  REQUEST_CLOSE_WINDOW ,
  TOP_WINDOW_CHANGED ,
  IM_COMMIT ,
  IM_SHOW_CANDIDATES ,
  IM_ACTION ,
  IM_ACTION_INFO ,
  DRAG_START ,
  DRAG ,
  DRAG_END ,
  SCREEN_SAVER ,
  LOW_MEMORY ,
  OUT_OF_MEMORY ,
  ORIENTATION_WILL_CHANGED ,
  ORIENTATION_CHANGED ,
  WIDGET_CREATED ,
  REQUEST_QUIT_APP ,
  THEME_CHANGED ,
  REQ_START ,
  USER_START ,
  NONE ,
  PROP_WILL_CHANGE ,
  PROP_CHANGED ,
  ITEMS_WILL_CHANGE ,
  ITEMS_CHANGED ,
  PROPS_CHANGED ,
  PROGRESS ,
  DESTROY 
}

declare enum TAssetType {
  NONE ,
  FONT ,
  IMAGE ,
  STYLE ,
  UI ,
  XML ,
  STRINGS ,
  SCRIPT ,
  DATA
}

declare enum TIndicatorDefaultPaint {
  AUTO,
  FILL_DOT,
  STROKE_DOT,
  FILL_RECT,
  STROKE_RECT
}

declare enum TAlignV {
  NONE,
  MIDDLE,
  TOP,
  BOTTOM,
}

declare enum TInputType {
  TEXT,
  INT,
  UINT,
  HEX,
  FLOAT,
  UFLOAT,
  EMAIL,
  PASSWORD,
  PHONE,
  CUSTOM,
}

declare enum TClipBoardDataType {
  NONE,
  TEXT,
 }
 
 declare enum TDialogQuitCode {
  NONE,
  OK,
  YES,
  CANCEL,
  NO,
  OTHER,
 }
 
 declare enum TGlyphFormat {
  ALPHA,
  MONO,
  RGBA,
 }
 
 declare enum TValueType {
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
  TOKEN,
 }
 
 declare enum TKeyCode {
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
  KEY_CANCEL,
 }
 
 declare enum TStyleId {
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
  _ID_ROUND_RADIUS,
 }
 
 declare enum TAlignH {
  NONE,
  CENTER,
  LEFT,
  RIGHT,
 }
 
 declare enum TAppType {
  MOBILE,
  SIMULATOR,
  DESKTOP,
 }
 
 
 declare enum TWidgetProp {
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
  MOVE_FOCUS_RIGHT_KEY,
 }
 
 declare enum TWidgetType {
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
  CALIBRATION_WIN,
 }
 
 declare enum TWindowStage {
  NONE,
  CREATED,
  OPENED,
  CLOSED,
 }
 
 declare enum TWindowClosable {
  YES,
  NO,
  CONFIRM,
 }
 
 declare enum TWidgetState {
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
  STATE_FOCUSED_OF_ACTIVE,
 }
 
 declare enum TMIME_TYPE {
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
  VIDEO_X_MSVIDEO,
 }
 
 declare enum TEasingType {
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
  BOUNCE_INOUT,
 }

interface TWidgetNativeObj{}
interface TBitmapNativeObj{}
interface TCanvasNativeObj{}
interface TRectNativeObj{}
interface TVgcanvasNativeObj{}
interface TValueNativeObj{}
interface TInputMethodNativeObj{}
interface TFontManagerNativeObj{}
interface TObjectNativeObj{}
interface TImageManagerNativeObj{}
interface TLocaleInfoNativeObj{}
interface TStyleNativeObj{}
interface TThemeNativeObj{}
interface TNamedValueNativeObj{}
interface TEventNativeObj{}
interface TEmitterNativeObj{}
interface TColorNativeObj{}
interface TDateTimeNativeObj{}
interface TAssetInfoNativeObj{}
interface TAssetsManagerNativeObj{}
interface TPropChangeEventNativeObj{}
interface TProgressEventNativeObj{}
interface TWindowEventNativeObj{}
interface TPaintEventNativeObj{}
interface TKeyEventNativeObj{}
interface TPointerEventNativeObj{}
interface TWheelEventNativeObj{}
interface TTimerInfoNativeObj{}
interface TIdleInfoNativeObj{}
interface TOrientationEventNativeObj{}

declare function tk_quit() : TRet;
declare function tk_get_pointer_x() : number;
declare function tk_get_pointer_y() : number;
declare function tk_is_pointer_pressed() : boolean;
declare function bitmap_create() : TBitmapNativeObj;
declare function bitmap_create_ex(w : number, h : number, line_length : number, format : TBitmapFormat) : TBitmapNativeObj;
declare function bitmap_get_bpp(bitmap : TBitmapNativeObj) : number;
declare function bitmap_destroy(bitmap : TBitmapNativeObj) : TRet;
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
declare function canvas_get_width(c : TCanvasNativeObj) : number;
declare function canvas_get_height(c : TCanvasNativeObj) : number;
declare function canvas_get_clip_rect(c : TCanvasNativeObj, r : TRectNativeObj) : TRet;
declare function canvas_set_clip_rect(c : TCanvasNativeObj, r : TRectNativeObj) : TRet;
declare function canvas_set_clip_rect_ex(c : TCanvasNativeObj, r : TRectNativeObj, translate : boolean) : TRet;
declare function canvas_set_fill_color_str(c : TCanvasNativeObj, color : string) : TRet;
declare function canvas_set_text_color_str(c : TCanvasNativeObj, color : string) : TRet;
declare function canvas_set_stroke_color_str(c : TCanvasNativeObj, color : string) : TRet;
declare function canvas_set_global_alpha(c : TCanvasNativeObj, alpha : number) : TRet;
declare function canvas_translate(c : TCanvasNativeObj, dx : number, dy : number) : TRet;
declare function canvas_untranslate(c : TCanvasNativeObj, dx : number, dy : number) : TRet;
declare function canvas_draw_vline(c : TCanvasNativeObj, x : number, y : number, h : number) : TRet;
declare function canvas_draw_hline(c : TCanvasNativeObj, x : number, y : number, w : number) : TRet;
declare function canvas_fill_rect(c : TCanvasNativeObj, x : number, y : number, w : number, h : number) : TRet;
declare function canvas_stroke_rect(c : TCanvasNativeObj, x : number, y : number, w : number, h : number) : TRet;
declare function canvas_set_font(c : TCanvasNativeObj, name : string, size : number) : TRet;
declare function canvas_measure_utf8(c : TCanvasNativeObj, str : string) : number;
declare function canvas_draw_utf8(c : TCanvasNativeObj, str : string, x : number, y : number) : TRet;
declare function canvas_draw_utf8_in_rect(c : TCanvasNativeObj, str : string, r : TRectNativeObj) : TRet;
declare function canvas_draw_icon(c : TCanvasNativeObj, img : TBitmapNativeObj, cx : number, cy : number) : TRet;
declare function canvas_draw_image(c : TCanvasNativeObj, img : TBitmapNativeObj, src : TRectNativeObj, dst : TRectNativeObj) : TRet;
declare function canvas_draw_image_ex(c : TCanvasNativeObj, img : TBitmapNativeObj, draw_type : TImageDrawType, dst : TRectNativeObj) : TRet;
declare function canvas_get_vgcanvas(c : TCanvasNativeObj) : TVgcanvasNativeObj;
declare function canvas_cast(c : TCanvasNativeObj) : TCanvasNativeObj;
declare function canvas_reset(c : TCanvasNativeObj) : TRet;
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
declare function EVT_NONE();
declare function EVT_PROP_WILL_CHANGE();
declare function EVT_PROP_CHANGED();
declare function EVT_ITEMS_WILL_CHANGE();
declare function EVT_ITEMS_CHANGED();
declare function EVT_PROPS_CHANGED();
declare function EVT_PROGRESS();
declare function EVT_DESTROY();
declare function font_manager_unload_font(fm : TFontManagerNativeObj, name : string, size : number) : TRet;
declare function font_manager_unload_all(fm : TFontManagerNativeObj) : TRet;
declare function GLYPH_FMT_ALPHA();
declare function GLYPH_FMT_MONO();
declare function GLYPH_FMT_RGBA();
declare function idle_add(on_idle : Function, ctx : any) : number;
declare function idle_remove(idle_id : number) : TRet;
declare function value_set_bool(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_bool(v : TValueNativeObj) : boolean;
declare function value_set_int8(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_int8(v : TValueNativeObj) : number;
declare function value_set_uint8(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_uint8(v : TValueNativeObj) : number;
declare function value_set_int16(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_int16(v : TValueNativeObj) : number;
declare function value_set_uint16(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_uint16(v : TValueNativeObj) : number;
declare function value_set_int32(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_int32(v : TValueNativeObj) : number;
declare function value_set_uint32(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_set_int64(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_int64(v : TValueNativeObj) : number;
declare function value_set_uint64(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_uint64(v : TValueNativeObj) : number;
declare function value_set_float(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_float32(v : TValueNativeObj) : number;
declare function value_set_double(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_double(v : TValueNativeObj) : number;
declare function value_dup_str(v : TValueNativeObj, value : string) : TValueNativeObj;
declare function value_str(v : TValueNativeObj) : string;
declare function value_is_null(value : TValueNativeObj) : boolean;
declare function value_set_int(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_set_object(v : TValueNativeObj, value : TObjectNativeObj) : TValueNativeObj;
declare function value_object(v : TValueNativeObj) : TObjectNativeObj;
declare function value_set_token(v : TValueNativeObj, value : any) : TValueNativeObj;
declare function value_token(v : TValueNativeObj) : number;
declare function value_create() : TValueNativeObj;
declare function value_destroy(v : TValueNativeObj) : TRet;
declare function value_reset(v : TValueNativeObj) : TRet;
declare function value_cast(value : TValueNativeObj) : TValueNativeObj;
declare function image_manager() : TImageManagerNativeObj;
declare function image_manager_get_bitmap(imm : TImageManagerNativeObj, name : string, image : TBitmapNativeObj) : TRet;
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
declare function input_method_commit_text(im : TInputMethodNativeObj, text : string) : TRet;
declare function input_method_dispatch_key(im : TInputMethodNativeObj, key : number) : TRet;
declare function input_method() : TInputMethodNativeObj;
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
declare function locale_info() : TLocaleInfoNativeObj;
declare function locale_info_tr(locale_info : TLocaleInfoNativeObj, text : string) : string;
declare function locale_info_change(locale_info : TLocaleInfoNativeObj, language : string, country : string) : TRet;
declare function locale_info_off(locale_info : TLocaleInfoNativeObj, id : number) : TRet;
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
declare function style_notify_widget_state_changed(s : TStyleNativeObj, widget : TWidgetNativeObj) : TRet;
declare function style_is_valid(s : TStyleNativeObj) : boolean;
declare function style_get_int(s : TStyleNativeObj, name : string, defval : number) : number;
declare function style_get_str(s : TStyleNativeObj, name : string, defval : string) : string;
declare function style_set(s : TStyleNativeObj, state : string, name : string, value : TValueNativeObj) : TRet;
declare function style_is_mutable(s : TStyleNativeObj) : boolean;
declare function theme() : TThemeNativeObj;
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
declare function vgcanvas_cast(vg : TVgcanvasNativeObj) : TVgcanvasNativeObj;
declare function vgcanvas_flush(vg : TVgcanvasNativeObj) : TRet;
declare function vgcanvas_begin_path(vg : TVgcanvasNativeObj) : TRet;
declare function vgcanvas_move_to(vg : TVgcanvasNativeObj, x : number, y : number) : TRet;
declare function vgcanvas_line_to(vg : TVgcanvasNativeObj, x : number, y : number) : TRet;
declare function vgcanvas_quad_to(vg : TVgcanvasNativeObj, cpx : number, cpy : number, x : number, y : number) : TRet;
declare function vgcanvas_bezier_to(vg : TVgcanvasNativeObj, cp1x : number, cp1y : number, cp2x : number, cp2y : number, x : number, y : number) : TRet;
declare function vgcanvas_arc_to(vg : TVgcanvasNativeObj, x1 : number, y1 : number, x2 : number, y2 : number, r : number) : TRet;
declare function vgcanvas_arc(vg : TVgcanvasNativeObj, x : number, y : number, r : number, start_angle : number, end_angle : number, ccw : boolean) : TRet;
declare function vgcanvas_is_point_in_path(vg : TVgcanvasNativeObj, x : number, y : number) : boolean;
declare function vgcanvas_rect(vg : TVgcanvasNativeObj, x : number, y : number, w : number, h : number) : TRet;
declare function vgcanvas_rounded_rect(vg : TVgcanvasNativeObj, x : number, y : number, w : number, h : number, r : number) : TRet;
declare function vgcanvas_ellipse(vg : TVgcanvasNativeObj, x : number, y : number, rx : number, ry : number) : TRet;
declare function vgcanvas_close_path(vg : TVgcanvasNativeObj) : TRet;
declare function vgcanvas_rotate(vg : TVgcanvasNativeObj, rad : number) : TRet;
declare function vgcanvas_scale(vg : TVgcanvasNativeObj, x : number, y : number) : TRet;
declare function vgcanvas_translate(vg : TVgcanvasNativeObj, x : number, y : number) : TRet;
declare function vgcanvas_transform(vg : TVgcanvasNativeObj, a : number, b : number, c : number, d : number, e : number, f : number) : TRet;
declare function vgcanvas_set_transform(vg : TVgcanvasNativeObj, a : number, b : number, c : number, d : number, e : number, f : number) : TRet;
declare function vgcanvas_clip_rect(vg : TVgcanvasNativeObj, x : number, y : number, w : number, h : number) : TRet;
declare function vgcanvas_fill(vg : TVgcanvasNativeObj) : TRet;
declare function vgcanvas_stroke(vg : TVgcanvasNativeObj) : TRet;
declare function vgcanvas_paint(vg : TVgcanvasNativeObj, stroke : boolean, img : TBitmapNativeObj) : TRet;
declare function vgcanvas_set_font(vg : TVgcanvasNativeObj, font : string) : TRet;
declare function vgcanvas_set_font_size(vg : TVgcanvasNativeObj, font : number) : TRet;
declare function vgcanvas_set_text_align(vg : TVgcanvasNativeObj, value : string) : TRet;
declare function vgcanvas_set_text_baseline(vg : TVgcanvasNativeObj, value : string) : TRet;
declare function vgcanvas_fill_text(vg : TVgcanvasNativeObj, text : string, x : number, y : number, max_width : number) : TRet;
declare function vgcanvas_measure_text(vg : TVgcanvasNativeObj, text : string) : number;
declare function vgcanvas_draw_image(vg : TVgcanvasNativeObj, img : TBitmapNativeObj, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet;
declare function vgcanvas_draw_icon(vg : TVgcanvasNativeObj, img : TBitmapNativeObj, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet;
declare function vgcanvas_set_antialias(vg : TVgcanvasNativeObj, value : any) : TRet;
declare function vgcanvas_set_global_alpha(vg : TVgcanvasNativeObj, alpha : number) : TRet;
declare function vgcanvas_set_line_width(vg : TVgcanvasNativeObj, value : any) : TRet;
declare function vgcanvas_set_fill_color_str(vg : TVgcanvasNativeObj, color : string) : TRet;
declare function vgcanvas_set_stroke_color_str(vg : TVgcanvasNativeObj, color : string) : TRet;
declare function vgcanvas_set_line_cap(vg : TVgcanvasNativeObj, value : string) : TRet;
declare function vgcanvas_set_line_join(vg : TVgcanvasNativeObj, value : string) : TRet;
declare function vgcanvas_set_miter_limit(vg : TVgcanvasNativeObj, value : any) : TRet;
declare function vgcanvas_save(vg : TVgcanvasNativeObj) : TRet;
declare function vgcanvas_restore(vg : TVgcanvasNativeObj) : TRet;
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
declare function widget_count_children(widget : TWidgetNativeObj) : number;
declare function widget_get_child(widget : TWidgetNativeObj, index : number) : TWidgetNativeObj;
declare function widget_index_of(widget : TWidgetNativeObj) : number;
declare function widget_move(widget : TWidgetNativeObj, x : number, y : number) : TRet;
declare function widget_resize(widget : TWidgetNativeObj, w : number, h : number) : TRet;
declare function widget_move_resize(widget : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TRet;
declare function widget_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function widget_animate_value_to(widget : TWidgetNativeObj, value : any, duration : number) : TRet;
declare function widget_add_value(widget : TWidgetNativeObj, delta : number) : TRet;
declare function widget_use_style(widget : TWidgetNativeObj, style : string) : TRet;
declare function widget_set_text_utf8(widget : TWidgetNativeObj, text : string) : TRet;
declare function widget_set_tr_text(widget : TWidgetNativeObj, text : string) : TRet;
declare function widget_get_value(widget : TWidgetNativeObj) : number;
declare function widget_get_text(widget : TWidgetNativeObj) : any;
declare function widget_set_name(widget : TWidgetNativeObj, name : string) : TRet;
declare function widget_set_theme(widget : TWidgetNativeObj, name : string) : TRet;
declare function widget_set_pointer_cursor(widget : TWidgetNativeObj, cursor : string) : TRet;
declare function widget_set_animation(widget : TWidgetNativeObj, animation : string) : TRet;
declare function widget_create_animator(widget : TWidgetNativeObj, animation : string) : TRet;
declare function widget_start_animator(widget : TWidgetNativeObj, name : string) : TRet;
declare function widget_set_animator_time_scale(widget : TWidgetNativeObj, name : string, time_scale : number) : TRet;
declare function widget_pause_animator(widget : TWidgetNativeObj, name : string) : TRet;
declare function widget_stop_animator(widget : TWidgetNativeObj, name : string) : TRet;
declare function widget_destroy_animator(widget : TWidgetNativeObj, name : string) : TRet;
declare function widget_set_enable(widget : TWidgetNativeObj, enable : boolean) : TRet;
declare function widget_set_feedback(widget : TWidgetNativeObj, feedback : boolean) : TRet;
declare function widget_set_floating(widget : TWidgetNativeObj, floating : boolean) : TRet;
declare function widget_set_focused(widget : TWidgetNativeObj, focused : boolean) : TRet;
declare function widget_set_state(widget : TWidgetNativeObj, state : string) : TRet;
declare function widget_set_opacity(widget : TWidgetNativeObj, opacity : number) : TRet;
declare function widget_destroy_children(widget : TWidgetNativeObj) : TRet;
declare function widget_add_child(widget : TWidgetNativeObj, child : TWidgetNativeObj) : TRet;
declare function widget_remove_child(widget : TWidgetNativeObj, child : TWidgetNativeObj) : TRet;
declare function widget_insert_child(widget : TWidgetNativeObj, index : number, child : TWidgetNativeObj) : TRet;
declare function widget_restack(widget : TWidgetNativeObj, index : number) : TRet;
declare function widget_child(widget : TWidgetNativeObj, name : string) : TWidgetNativeObj;
declare function widget_lookup(widget : TWidgetNativeObj, name : string, recursive : boolean) : TWidgetNativeObj;
declare function widget_lookup_by_type(widget : TWidgetNativeObj, type : string, recursive : boolean) : TWidgetNativeObj;
declare function widget_set_visible(widget : TWidgetNativeObj, visible : boolean, recursive : boolean) : TRet;
declare function widget_set_visible_only(widget : TWidgetNativeObj, visible : boolean) : TRet;
declare function widget_set_sensitive(widget : TWidgetNativeObj, sensitive : boolean) : TRet;
declare function widget_on(widget : TWidgetNativeObj, type : TEventType, on_event : Function, ctx : any) : number;
declare function widget_off(widget : TWidgetNativeObj, id : number) : TRet;
declare function widget_invalidate_force(widget : TWidgetNativeObj, r : TRectNativeObj) : TRet;
declare function widget_set_prop_str(widget : TWidgetNativeObj, name : string, v : string) : TRet;
declare function widget_get_prop_str(widget : TWidgetNativeObj, name : string, defval : string) : string;
declare function widget_set_prop_int(widget : TWidgetNativeObj, name : string, v : number) : TRet;
declare function widget_get_prop_int(widget : TWidgetNativeObj, name : string, defval : number) : number;
declare function widget_set_prop_bool(widget : TWidgetNativeObj, name : string, v : boolean) : TRet;
declare function widget_get_prop_bool(widget : TWidgetNativeObj, name : string, defval : boolean) : boolean;
declare function widget_is_window_opened(widget : TWidgetNativeObj) : boolean;
declare function widget_is_window(widget : TWidgetNativeObj) : boolean;
declare function widget_is_designing_window(widget : TWidgetNativeObj) : boolean;
declare function widget_is_window_manager(widget : TWidgetNativeObj) : boolean;
declare function widget_foreach(widget : TWidgetNativeObj, visit : Function, ctx : any) : TRet;
declare function widget_get_window(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function widget_get_window_manager(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function widget_get_type(widget : TWidgetNativeObj) : string;
declare function widget_clone(widget : TWidgetNativeObj, parent : TWidgetNativeObj) : TWidgetNativeObj;
declare function widget_equal(widget : TWidgetNativeObj, other : TWidgetNativeObj) : boolean;
declare function widget_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function widget_destroy(widget : TWidgetNativeObj) : TRet;
declare function widget_unref(widget : TWidgetNativeObj) : TRet;
declare function widget_layout(widget : TWidgetNativeObj) : TRet;
declare function widget_set_self_layout(widget : TWidgetNativeObj, params : string) : TRet;
declare function widget_set_children_layout(widget : TWidgetNativeObj, params : string) : TRet;
declare function widget_set_self_layout_params(widget : TWidgetNativeObj, x : string, y : string, w : string, h : string) : TRet;
declare function widget_set_style_int(widget : TWidgetNativeObj, state_and_name : string, value : any) : TRet;
declare function widget_set_style_str(widget : TWidgetNativeObj, state_and_name : string, value : string) : TRet;
declare function widget_set_style_color(widget : TWidgetNativeObj, state_and_name : string, value : any) : TRet;
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
declare function widget_t_set_prop_visible(nativeObj : any, v : boolean);
declare function widget_t_get_prop_sensitive(nativeObj : any);
declare function widget_t_set_prop_sensitive(nativeObj : any, v : boolean);
declare function widget_t_get_prop_focusable(nativeObj : any);
declare function widget_t_set_prop_focusable(nativeObj : any, v : boolean);
declare function widget_t_get_prop_with_focus_state(nativeObj : any);
declare function widget_t_set_prop_with_focus_state(nativeObj : any, v : boolean);
declare function widget_t_get_prop_floating(nativeObj : any);
declare function widget_t_get_prop_parent(nativeObj : any);
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
declare function rect_create(x : number, y : number, w : number, h : number) : TRectNativeObj;
declare function rect_set(rect : TRectNativeObj, x : number, y : number, w : number, h : number) : TRectNativeObj;
declare function rect_cast(rect : TRectNativeObj) : TRectNativeObj;
declare function rect_destroy(r : TRectNativeObj) : TRet;
declare function rect_t_get_prop_x(nativeObj : any);
declare function rect_t_get_prop_y(nativeObj : any);
declare function rect_t_get_prop_w(nativeObj : any);
declare function rect_t_get_prop_h(nativeObj : any);
declare function named_value_create() : TNamedValueNativeObj;
declare function named_value_cast(nv : TNamedValueNativeObj) : TNamedValueNativeObj;
declare function named_value_set_name(nv : TNamedValueNativeObj, name : string) : TRet;
declare function named_value_set_value(nv : TNamedValueNativeObj, value : TValueNativeObj) : TRet;
declare function named_value_get_value(nv : TNamedValueNativeObj) : TValueNativeObj;
declare function named_value_destroy(nv : TNamedValueNativeObj) : TRet;
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
declare function event_cast(event : TEventNativeObj) : TEventNativeObj;
declare function event_create(type : number) : TEventNativeObj;
declare function event_destroy(event : TEventNativeObj) : TRet;
declare function event_t_get_prop_type(nativeObj : any);
declare function event_t_get_prop_time(nativeObj : any);
declare function event_t_get_prop_target(nativeObj : any);
declare function emitter_create() : TEmitterNativeObj;
declare function emitter_dispatch(emitter : TEmitterNativeObj, e : TEventNativeObj) : TRet;
declare function emitter_dispatch_simple_event(emitter : TEmitterNativeObj, type : TEventType) : TRet;
declare function emitter_on(emitter : TEmitterNativeObj, type : TEventType, on_event : Function, ctx : any) : number;
declare function emitter_off(emitter : TEmitterNativeObj, id : number) : TRet;
declare function emitter_enable(emitter : TEmitterNativeObj) : TRet;
declare function emitter_disable(emitter : TEmitterNativeObj) : TRet;
declare function emitter_size(emitter : TEmitterNativeObj) : number;
declare function emitter_destroy(emitter : TEmitterNativeObj) : TRet;
declare function emitter_cast(emitter : TEmitterNativeObj) : TEmitterNativeObj;
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
declare function date_time_create() : TDateTimeNativeObj;
declare function date_time_set(dt : TDateTimeNativeObj) : TRet;
declare function date_time_destroy(dt : TDateTimeNativeObj) : TRet;
declare function date_time_t_get_prop_second(nativeObj : any);
declare function date_time_t_get_prop_minute(nativeObj : any);
declare function date_time_t_get_prop_hour(nativeObj : any);
declare function date_time_t_get_prop_day(nativeObj : any);
declare function date_time_t_get_prop_wday(nativeObj : any);
declare function date_time_t_get_prop_month(nativeObj : any);
declare function date_time_t_get_prop_year(nativeObj : any);
declare function color_create(r : number, b : number, g : number, a : number) : TColorNativeObj;
declare function color_from_str(c : TColorNativeObj, str : string) : TColorNativeObj;
declare function color_r(c : TColorNativeObj) : number;
declare function color_g(c : TColorNativeObj) : number;
declare function color_b(c : TColorNativeObj) : number;
declare function color_a(c : TColorNativeObj) : number;
declare function color_cast(color : TColorNativeObj) : TColorNativeObj;
declare function color_destroy(c : TColorNativeObj) : TRet;
declare function color_t_get_prop_color(nativeObj : any);
declare function color_t_set_prop_color(nativeObj : any, v : number);
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
declare function assets_manager() : TAssetsManagerNativeObj;
declare function assets_manager_ref(am : TAssetsManagerNativeObj, type : TAssetType, name : string) : TAssetInfoNativeObj;
declare function assets_manager_unref(am : TAssetsManagerNativeObj, info : TAssetInfoNativeObj) : TRet;
declare function color_component_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function time_clock_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function time_clock_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function time_clock_set_hour(widget : TWidgetNativeObj, hour : number) : TRet;
declare function time_clock_set_minute(widget : TWidgetNativeObj, minute : number) : TRet;
declare function time_clock_set_second(widget : TWidgetNativeObj, second : number) : TRet;
declare function time_clock_set_hour_image(widget : TWidgetNativeObj, hour : string) : TRet;
declare function time_clock_set_minute_image(widget : TWidgetNativeObj, minute_image : string) : TRet;
declare function time_clock_set_second_image(widget : TWidgetNativeObj, second_image : string) : TRet;
declare function time_clock_set_bg_image(widget : TWidgetNativeObj, bg_image : string) : TRet;
declare function time_clock_set_image(widget : TWidgetNativeObj, image : string) : TRet;
declare function time_clock_set_hour_anchor(widget : TWidgetNativeObj, anchor_x : string, anchor_y : string) : TRet;
declare function time_clock_set_minute_anchor(widget : TWidgetNativeObj, anchor_x : string, anchor_y : string) : TRet;
declare function time_clock_set_second_anchor(widget : TWidgetNativeObj, anchor_x : string, anchor_y : string) : TRet;
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
declare function text_selector_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function text_selector_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function text_selector_reset_options(widget : TWidgetNativeObj) : TRet;
declare function text_selector_count_options(widget : TWidgetNativeObj) : number;
declare function text_selector_append_option(widget : TWidgetNativeObj, value : any, text : string) : TRet;
declare function text_selector_set_options(widget : TWidgetNativeObj, options : string) : TRet;
declare function text_selector_set_range_options(widget : TWidgetNativeObj, start : number, nr : number, step : number) : TRet;
declare function text_selector_get_value(widget : TWidgetNativeObj) : number;
declare function text_selector_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function text_selector_get_text(widget : TWidgetNativeObj) : string;
declare function text_selector_set_text(widget : TWidgetNativeObj, text : string) : TRet;
declare function text_selector_set_selected_index(widget : TWidgetNativeObj, index : number) : TRet;
declare function text_selector_set_visible_nr(widget : TWidgetNativeObj, visible_nr : number) : TRet;
declare function text_selector_t_get_prop_visible_nr(nativeObj : any);
declare function text_selector_t_get_prop_selected_index(nativeObj : any);
declare function text_selector_t_get_prop_options(nativeObj : any);
declare function switch_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function switch_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function switch_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function switch_t_get_prop_value(nativeObj : any);
declare function switch_t_get_prop_max_xoffset_ratio(nativeObj : any);
declare function prop_change_event_cast(event : TEventNativeObj) : TPropChangeEventNativeObj;
declare function prop_change_event_t_get_prop_name(nativeObj : any);
declare function prop_change_event_t_get_prop_value(nativeObj : any);
declare function progress_event_cast(event : TEventNativeObj) : TProgressEventNativeObj;
declare function progress_event_t_get_prop_percent(nativeObj : any);
declare function view_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function view_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function slide_view_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function slide_view_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function slide_view_set_auto_play(widget : TWidgetNativeObj, auto_play : number) : TRet;
declare function slide_view_set_active(widget : TWidgetNativeObj, index : number) : TRet;
declare function slide_view_set_vertical(widget : TWidgetNativeObj, vertical : boolean) : TRet;
declare function slide_view_set_anim_hint(widget : TWidgetNativeObj, anim_hint : string) : TRet;
declare function slide_view_set_loop(widget : TWidgetNativeObj, loop : boolean) : TRet;
declare function slide_view_t_get_prop_vertical(nativeObj : any);
declare function slide_view_t_get_prop_auto_play(nativeObj : any);
declare function slide_view_t_get_prop_loop(nativeObj : any);
declare function slide_view_t_get_prop_anim_hint(nativeObj : any);
declare function slide_indicator_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function slide_indicator_create_linear(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function slide_indicator_create_arc(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function slide_indicator_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function slide_indicator_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function slide_indicator_set_max(widget : TWidgetNativeObj, max : number) : TRet;
declare function slide_indicator_set_default_paint(widget : TWidgetNativeObj, default_paint : TIndicatorDefaultPaint) : TRet;
declare function slide_indicator_set_auto_hide(widget : TWidgetNativeObj, auto_hide : number) : TRet;
declare function slide_indicator_set_margin(widget : TWidgetNativeObj, margin : number) : TRet;
declare function slide_indicator_set_spacing(widget : TWidgetNativeObj, spacing : number) : TRet;
declare function slide_indicator_set_size(widget : TWidgetNativeObj, size : number) : TRet;
declare function slide_indicator_set_anchor(widget : TWidgetNativeObj, anchor_x : string, anchor_y : string) : TRet;
declare function slide_indicator_set_indicated_target(widget : TWidgetNativeObj, indicated_target : string) : TRet;
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
declare function slide_menu_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function slide_menu_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function slide_menu_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function slide_menu_set_align_v(widget : TWidgetNativeObj, align_v : TAlignV) : TRet;
declare function slide_menu_set_min_scale(widget : TWidgetNativeObj, min_scale : number) : TRet;
declare function slide_menu_t_get_prop_value(nativeObj : any);
declare function slide_menu_t_get_prop_align_v(nativeObj : any);
declare function slide_menu_t_get_prop_min_scale(nativeObj : any);
declare function scroll_view_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function scroll_view_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function scroll_view_set_virtual_w(widget : TWidgetNativeObj, w : number) : TRet;
declare function scroll_view_set_virtual_h(widget : TWidgetNativeObj, h : number) : TRet;
declare function scroll_view_set_xslidable(widget : TWidgetNativeObj, xslidable : boolean) : TRet;
declare function scroll_view_set_yslidable(widget : TWidgetNativeObj, yslidable : boolean) : TRet;
declare function scroll_view_set_offset(widget : TWidgetNativeObj, xoffset : number, yoffset : number) : TRet;
declare function scroll_view_set_speed_scale(widget : TWidgetNativeObj, xspeed_scale : number, yspeed_scale : number) : TRet;
declare function scroll_view_scroll_to(widget : TWidgetNativeObj, xoffset_end : number, yoffset_end : number, duration : number) : TRet;
declare function scroll_view_scroll_delta_to(widget : TWidgetNativeObj, xoffset_delta : number, yoffset_delta : number, duration : number) : TRet;
declare function scroll_view_t_get_prop_virtual_w(nativeObj : any);
declare function scroll_view_t_get_prop_virtual_h(nativeObj : any);
declare function scroll_view_t_get_prop_xoffset(nativeObj : any);
declare function scroll_view_t_get_prop_yoffset(nativeObj : any);
declare function scroll_view_t_get_prop_xspeed_scale(nativeObj : any);
declare function scroll_view_t_get_prop_yspeed_scale(nativeObj : any);
declare function scroll_view_t_get_prop_xslidable(nativeObj : any);
declare function scroll_view_t_get_prop_yslidable(nativeObj : any);
declare function scroll_bar_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function scroll_bar_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function scroll_bar_create_mobile(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function scroll_bar_create_desktop(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function scroll_bar_set_params(widget : TWidgetNativeObj, virtual_size : number, row : number) : TRet;
declare function scroll_bar_scroll_to(widget : TWidgetNativeObj, value : any, duration : number) : TRet;
declare function scroll_bar_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function scroll_bar_add_delta(widget : TWidgetNativeObj, delta : number) : TRet;
declare function scroll_bar_scroll_delta(widget : TWidgetNativeObj, delta : number) : TRet;
declare function scroll_bar_set_value_only(widget : TWidgetNativeObj, value : any) : TRet;
declare function scroll_bar_is_mobile(widget : TWidgetNativeObj) : boolean;
declare function scroll_bar_t_get_prop_virtual_size(nativeObj : any);
declare function scroll_bar_t_get_prop_value(nativeObj : any);
declare function scroll_bar_t_get_prop_row(nativeObj : any);
declare function scroll_bar_t_get_prop_animatable(nativeObj : any);
declare function tab_control_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function tab_control_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function list_view_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function list_view_set_item_height(widget : TWidgetNativeObj, item_height : number) : TRet;
declare function list_view_set_default_item_height(widget : TWidgetNativeObj, default_item_height : number) : TRet;
declare function list_view_set_auto_hide_scroll_bar(widget : TWidgetNativeObj, auto_hide_scroll_bar : boolean) : TRet;
declare function list_view_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function list_view_t_get_prop_item_height(nativeObj : any);
declare function list_view_t_get_prop_default_item_height(nativeObj : any);
declare function list_view_t_get_prop_auto_hide_scroll_bar(nativeObj : any);
declare function list_view_h_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function list_view_h_set_item_width(widget : TWidgetNativeObj, item_width : number) : TRet;
declare function list_view_h_set_spacing(widget : TWidgetNativeObj, spacing : number) : TRet;
declare function list_view_h_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function list_view_h_t_get_prop_item_width(nativeObj : any);
declare function list_view_h_t_get_prop_spacing(nativeObj : any);
declare function tab_button_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function tab_button_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function tab_button_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function tab_button_set_icon(widget : TWidgetNativeObj, name : string) : TRet;
declare function tab_button_set_active_icon(widget : TWidgetNativeObj, name : string) : TRet;
declare function tab_button_t_get_prop_value(nativeObj : any);
declare function tab_button_t_get_prop_active_icon(nativeObj : any);
declare function tab_button_t_get_prop_icon(nativeObj : any);
declare function tab_button_group_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function tab_button_group_set_compact(widget : TWidgetNativeObj, compact : boolean) : TRet;
declare function tab_button_group_set_scrollable(widget : TWidgetNativeObj, scrollable : boolean) : TRet;
declare function tab_button_group_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function tab_button_group_t_get_prop_compact(nativeObj : any);
declare function tab_button_group_t_get_prop_scrollable(nativeObj : any);
declare function list_item_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function list_item_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function hscroll_label_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function hscroll_label_set_lull(widget : TWidgetNativeObj, lull : number) : TRet;
declare function hscroll_label_set_duration(widget : TWidgetNativeObj, duration : number) : TRet;
declare function hscroll_label_set_only_focus(widget : TWidgetNativeObj, only_focus : boolean) : TRet;
declare function hscroll_label_set_only_parent_focus(widget : TWidgetNativeObj, only_parent_focus : boolean) : TRet;
declare function hscroll_label_set_loop(widget : TWidgetNativeObj, loop : boolean) : TRet;
declare function hscroll_label_set_yoyo(widget : TWidgetNativeObj, yoyo : boolean) : TRet;
declare function hscroll_label_set_ellipses(widget : TWidgetNativeObj, ellipses : boolean) : TRet;
declare function hscroll_label_set_xoffset(widget : TWidgetNativeObj, xoffset : number) : TRet;
declare function hscroll_label_start(widget : TWidgetNativeObj) : TRet;
declare function hscroll_label_stop(widget : TWidgetNativeObj) : TRet;
declare function hscroll_label_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function hscroll_label_t_get_prop_only_focus(nativeObj : any);
declare function hscroll_label_t_get_prop_only_parent_focus(nativeObj : any);
declare function hscroll_label_t_get_prop_loop(nativeObj : any);
declare function hscroll_label_t_get_prop_yoyo(nativeObj : any);
declare function hscroll_label_t_get_prop_ellipses(nativeObj : any);
declare function hscroll_label_t_get_prop_lull(nativeObj : any);
declare function hscroll_label_t_get_prop_duration(nativeObj : any);
declare function hscroll_label_t_get_prop_xoffset(nativeObj : any);
declare function hscroll_label_t_get_prop_text_w(nativeObj : any);
declare function rich_text_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function rich_text_set_text(widget : TWidgetNativeObj, text : string) : TRet;
declare function rich_text_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function rich_text_t_get_prop_line_gap(nativeObj : any);
declare function progress_circle_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function progress_circle_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function progress_circle_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function progress_circle_set_max(widget : TWidgetNativeObj, max : number) : TRet;
declare function progress_circle_set_line_width(widget : TWidgetNativeObj, line_width : number) : TRet;
declare function progress_circle_set_start_angle(widget : TWidgetNativeObj, start_angle : number) : TRet;
declare function progress_circle_set_unit(widget : TWidgetNativeObj, unit : string) : TRet;
declare function progress_circle_set_show_text(widget : TWidgetNativeObj, show_text : boolean) : TRet;
declare function progress_circle_set_counter_clock_wise(widget : TWidgetNativeObj, counter_clock_wise : boolean) : TRet;
declare function progress_circle_t_get_prop_value(nativeObj : any);
declare function progress_circle_t_get_prop_max(nativeObj : any);
declare function progress_circle_t_get_prop_start_angle(nativeObj : any);
declare function progress_circle_t_get_prop_line_width(nativeObj : any);
declare function progress_circle_t_get_prop_unit(nativeObj : any);
declare function progress_circle_t_get_prop_counter_clock_wise(nativeObj : any);
declare function progress_circle_t_get_prop_show_text(nativeObj : any);
declare function slider_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function slider_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function slider_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function slider_set_min(widget : TWidgetNativeObj, min : number) : TRet;
declare function slider_set_max(widget : TWidgetNativeObj, max : number) : TRet;
declare function slider_set_step(widget : TWidgetNativeObj, step : number) : TRet;
declare function slider_set_bar_size(widget : TWidgetNativeObj, bar_size : number) : TRet;
declare function slider_set_vertical(widget : TWidgetNativeObj, vertical : boolean) : TRet;
declare function slider_t_get_prop_value(nativeObj : any);
declare function slider_t_get_prop_min(nativeObj : any);
declare function slider_t_get_prop_max(nativeObj : any);
declare function slider_t_get_prop_step(nativeObj : any);
declare function slider_t_get_prop_vertical(nativeObj : any);
declare function slider_t_get_prop_bar_size(nativeObj : any);
declare function mledit_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function mledit_set_readonly(widget : TWidgetNativeObj, readonly : boolean) : TRet;
declare function mledit_set_focus(widget : TWidgetNativeObj, focus : boolean) : TRet;
declare function mledit_set_wrap_word(widget : TWidgetNativeObj, wrap_word : boolean) : TRet;
declare function mledit_set_max_lines(widget : TWidgetNativeObj, max_lines : number) : TRet;
declare function mledit_set_input_tips(widget : TWidgetNativeObj, tips : string) : TRet;
declare function mledit_set_cursor(widget : TWidgetNativeObj, cursor : number) : TRet;
declare function mledit_set_scroll_line(widget : TWidgetNativeObj, scroll_line : number) : TRet;
declare function mledit_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function mledit_t_get_prop_readonly(nativeObj : any);
declare function mledit_t_get_prop_tips(nativeObj : any);
declare function mledit_t_get_prop_wrap_word(nativeObj : any);
declare function mledit_t_get_prop_max_lines(nativeObj : any);
declare function mledit_t_get_prop_scroll_line(nativeObj : any);
declare function row_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function row_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function progress_bar_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function progress_bar_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function progress_bar_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function progress_bar_set_max(widget : TWidgetNativeObj, max : number) : TRet;
declare function progress_bar_set_vertical(widget : TWidgetNativeObj, vertical : boolean) : TRet;
declare function progress_bar_set_show_text(widget : TWidgetNativeObj, show_text : boolean) : TRet;
declare function progress_bar_get_percent(widget : TWidgetNativeObj) : number;
declare function progress_bar_t_get_prop_value(nativeObj : any);
declare function progress_bar_t_get_prop_max(nativeObj : any);
declare function progress_bar_t_get_prop_vertical(nativeObj : any);
declare function progress_bar_t_get_prop_show_text(nativeObj : any);
declare function object_unref(obj : TObjectNativeObj) : TRet;
declare function object_ref(obj : TObjectNativeObj) : TObjectNativeObj;
declare function object_get_type(obj : TObjectNativeObj) : string;
declare function object_get_desc(obj : TObjectNativeObj) : string;
declare function object_get_size(obj : TObjectNativeObj) : number;
declare function object_is_collection(obj : TObjectNativeObj) : boolean;
declare function object_set_name(obj : TObjectNativeObj, name : string) : TRet;
declare function object_compare(obj : TObjectNativeObj, other : TObjectNativeObj) : number;
declare function object_get_prop(obj : TObjectNativeObj, name : string, v : TValueNativeObj) : TRet;
declare function object_get_prop_str(obj : TObjectNativeObj, name : string) : string;
declare function object_get_prop_pointer(obj : TObjectNativeObj, name : string) : any;
declare function object_get_prop_object(obj : TObjectNativeObj, name : string) : TObjectNativeObj;
declare function object_get_prop_int(obj : TObjectNativeObj, name : string, defval : number) : number;
declare function object_get_prop_bool(obj : TObjectNativeObj, name : string, defval : boolean) : boolean;
declare function object_get_prop_float(obj : TObjectNativeObj, name : string, defval : number) : number;
declare function object_remove_prop(obj : TObjectNativeObj, name : string) : TRet;
declare function object_set_prop(obj : TObjectNativeObj, name : string, value : TValueNativeObj) : TRet;
declare function object_set_prop_str(obj : TObjectNativeObj, name : string, value : string) : TRet;
declare function object_set_prop_object(obj : TObjectNativeObj, name : string, value : TObjectNativeObj) : TRet;
declare function object_set_prop_int(obj : TObjectNativeObj, name : string, value : any) : TRet;
declare function object_set_prop_bool(obj : TObjectNativeObj, name : string, value : any) : TRet;
declare function object_set_prop_float(obj : TObjectNativeObj, name : string, value : any) : TRet;
declare function object_copy_prop(obj : TObjectNativeObj, src : TObjectNativeObj, name : string) : TRet;
declare function object_has_prop(obj : TObjectNativeObj, name : string) : boolean;
declare function object_eval(obj : TObjectNativeObj, expr : string, v : TValueNativeObj) : TRet;
declare function object_can_exec(obj : TObjectNativeObj, name : string, args : string) : boolean;
declare function object_exec(obj : TObjectNativeObj, name : string, args : string) : TRet;
declare function object_notify_changed(obj : TObjectNativeObj) : TRet;
declare function object_get_prop_str_by_path(obj : TObjectNativeObj, path : string) : string;
declare function object_get_prop_pointer_by_path(obj : TObjectNativeObj, path : string) : any;
declare function object_get_prop_object_by_path(obj : TObjectNativeObj, path : string) : TObjectNativeObj;
declare function object_get_prop_int_by_path(obj : TObjectNativeObj, path : string, defval : number) : number;
declare function object_get_prop_bool_by_path(obj : TObjectNativeObj, path : string, defval : boolean) : boolean;
declare function object_get_prop_float_by_path(obj : TObjectNativeObj, path : string, defval : number) : number;
declare function object_t_get_prop_ref_count(nativeObj : any);
declare function object_t_get_prop_name(nativeObj : any);
declare function pages_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function pages_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function pages_set_active(widget : TWidgetNativeObj, index : number) : TRet;
declare function pages_set_active_by_name(widget : TWidgetNativeObj, name : string) : TRet;
declare function pages_t_get_prop_active(nativeObj : any);
declare function line_number_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function line_number_set_top_margin(widget : TWidgetNativeObj, top_margin : number) : TRet;
declare function line_number_set_bottom_margin(widget : TWidgetNativeObj, bottom_margin : number) : TRet;
declare function line_number_set_line_height(widget : TWidgetNativeObj, line_height : number) : TRet;
declare function line_number_set_yoffset(widget : TWidgetNativeObj, yoffset : number) : TRet;
declare function line_number_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function overlay_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function overlay_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function image_value_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function image_value_set_image(widget : TWidgetNativeObj, image : string) : TRet;
declare function image_value_set_format(widget : TWidgetNativeObj, format : string) : TRet;
declare function image_value_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function image_value_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function image_value_t_get_prop_image(nativeObj : any);
declare function image_value_t_get_prop_format(nativeObj : any);
declare function image_value_t_get_prop_value(nativeObj : any);
declare function image_animation_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function image_animation_set_loop(widget : TWidgetNativeObj, loop : boolean) : TRet;
declare function image_animation_set_image(widget : TWidgetNativeObj, image : string) : TRet;
declare function image_animation_set_interval(widget : TWidgetNativeObj, interval : number) : TRet;
declare function image_animation_set_delay(widget : TWidgetNativeObj, delay : number) : TRet;
declare function image_animation_set_auto_play(widget : TWidgetNativeObj, auto_play : boolean) : TRet;
declare function image_animation_set_sequence(widget : TWidgetNativeObj, sequence : string) : TRet;
declare function image_animation_set_range_sequence(widget : TWidgetNativeObj, start_index : number, end_index : number) : TRet;
declare function image_animation_play(widget : TWidgetNativeObj) : TRet;
declare function image_animation_stop(widget : TWidgetNativeObj) : TRet;
declare function image_animation_pause(widget : TWidgetNativeObj) : TRet;
declare function image_animation_next(widget : TWidgetNativeObj) : TRet;
declare function image_animation_set_format(widget : TWidgetNativeObj, format : string) : TRet;
declare function image_animation_set_unload_after_paint(widget : TWidgetNativeObj, unload_after_paint : boolean) : TRet;
declare function image_animation_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
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
declare function guage_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function guage_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function guage_set_image(widget : TWidgetNativeObj, name : string) : TRet;
declare function guage_set_draw_type(widget : TWidgetNativeObj, draw_type : TImageDrawType) : TRet;
declare function guage_t_get_prop_image(nativeObj : any);
declare function guage_t_get_prop_draw_type(nativeObj : any);
declare function guage_pointer_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function guage_pointer_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function guage_pointer_set_angle(widget : TWidgetNativeObj, angle : number) : TRet;
declare function guage_pointer_set_image(widget : TWidgetNativeObj, image : string) : TRet;
declare function guage_pointer_set_anchor(widget : TWidgetNativeObj, anchor_x : string, anchor_y : string) : TRet;
declare function guage_pointer_t_get_prop_angle(nativeObj : any);
declare function guage_pointer_t_get_prop_image(nativeObj : any);
declare function guage_pointer_t_get_prop_anchor_x(nativeObj : any);
declare function guage_pointer_t_get_prop_anchor_y(nativeObj : any);
declare function label_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function label_set_length(widget : TWidgetNativeObj, length : number) : TRet;
declare function label_resize_to_content(widget : TWidgetNativeObj, min_w : number, max_w : number, min_h : number, max_h : number) : TRet;
declare function label_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function label_t_get_prop_length(nativeObj : any);
declare function draggable_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function draggable_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function draggable_set_top(widget : TWidgetNativeObj, top : number) : TRet;
declare function draggable_set_bottom(widget : TWidgetNativeObj, bottom : number) : TRet;
declare function draggable_set_left(widget : TWidgetNativeObj, left : number) : TRet;
declare function draggable_set_right(widget : TWidgetNativeObj, right : number) : TRet;
declare function draggable_set_vertical_only(widget : TWidgetNativeObj, vertical_only : boolean) : TRet;
declare function draggable_set_horizontal_only(widget : TWidgetNativeObj, horizontal_only : boolean) : TRet;
declare function draggable_set_drag_window(widget : TWidgetNativeObj, drag_window : boolean) : TRet;
declare function draggable_t_get_prop_top(nativeObj : any);
declare function draggable_t_get_prop_bottom(nativeObj : any);
declare function draggable_t_get_prop_left(nativeObj : any);
declare function draggable_t_get_prop_right(nativeObj : any);
declare function draggable_t_get_prop_vertical_only(nativeObj : any);
declare function draggable_t_get_prop_horizontal_only(nativeObj : any);
declare function draggable_t_get_prop_drag_window(nativeObj : any);
declare function group_box_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function group_box_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function color_picker_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function color_picker_set_color(widget : TWidgetNativeObj, color : string) : TRet;
declare function color_picker_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function color_picker_t_get_prop_value(nativeObj : any);
declare function canvas_widget_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function canvas_widget_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function grid_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function grid_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function grid_item_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function grid_item_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function window_manager() : TWidgetNativeObj;
declare function window_manager_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function window_manager_get_top_main_window(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function window_manager_get_top_window(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function window_manager_get_prev_window(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function window_manager_get_pointer_x(widget : TWidgetNativeObj) : number;
declare function window_manager_get_pointer_y(widget : TWidgetNativeObj) : number;
declare function window_manager_get_pointer_pressed(widget : TWidgetNativeObj) : boolean;
declare function window_manager_set_show_fps(widget : TWidgetNativeObj, show_fps : boolean) : TRet;
declare function window_manager_set_screen_saver_time(widget : TWidgetNativeObj, screen_saver_time : number) : TRet;
declare function window_manager_set_cursor(widget : TWidgetNativeObj, cursor : string) : TRet;
declare function window_manager_back(widget : TWidgetNativeObj) : TRet;
declare function window_manager_back_to_home(widget : TWidgetNativeObj) : TRet;
declare function window_manager_back_to(widget : TWidgetNativeObj, target : string) : TRet;
declare function window_base_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function window_base_t_get_prop_theme(nativeObj : any);
declare function window_base_t_get_prop_closable(nativeObj : any);
declare function edit_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function edit_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function edit_get_int(widget : TWidgetNativeObj) : number;
declare function edit_get_double(widget : TWidgetNativeObj) : number;
declare function edit_set_int(widget : TWidgetNativeObj, value : any) : TRet;
declare function edit_set_double(widget : TWidgetNativeObj, value : any) : TRet;
declare function edit_set_text_limit(widget : TWidgetNativeObj, min : number, max : number) : TRet;
declare function edit_set_int_limit(widget : TWidgetNativeObj, min : number, max : number, step : number) : TRet;
declare function edit_set_float_limit(widget : TWidgetNativeObj, min : number, max : number, step : number) : TRet;
declare function edit_set_readonly(widget : TWidgetNativeObj, readonly : boolean) : TRet;
declare function edit_set_auto_fix(widget : TWidgetNativeObj, auto_fix : boolean) : TRet;
declare function edit_set_select_none_when_focused(widget : TWidgetNativeObj, select_none_when_focused : boolean) : TRet;
declare function edit_set_open_im_when_focused(widget : TWidgetNativeObj, open_im_when_focused : boolean) : TRet;
declare function edit_set_input_type(widget : TWidgetNativeObj, type : TInputType) : TRet;
declare function edit_set_input_tips(widget : TWidgetNativeObj, tips : string) : TRet;
declare function edit_set_password_visible(widget : TWidgetNativeObj, password_visible : boolean) : TRet;
declare function edit_set_focus(widget : TWidgetNativeObj, focus : boolean) : TRet;
declare function edit_set_cursor(widget : TWidgetNativeObj, cursor : number) : TRet;
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
declare function style_mutable_set_name(s : TStyleNativeObj, name : string) : TRet;
declare function style_mutable_set_int(s : TStyleNativeObj, state : string, name : string, val : number) : TRet;
declare function style_mutable_cast(s : TStyleNativeObj) : TStyleNativeObj;
declare function style_mutable_create(widget : TWidgetNativeObj, default_style : TStyleNativeObj) : TStyleNativeObj;
declare function style_mutable_t_get_prop_name(nativeObj : any);
declare function dragger_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function dragger_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function dragger_set_range(widget : TWidgetNativeObj, x_min : number, y_min : number, x_max : number, y_max : number) : TWidgetNativeObj;
declare function dragger_t_get_prop_x_min(nativeObj : any);
declare function dragger_t_get_prop_y_min(nativeObj : any);
declare function dragger_t_get_prop_x_max(nativeObj : any);
declare function dragger_t_get_prop_y_max(nativeObj : any);
declare function image_base_set_image(widget : TWidgetNativeObj, name : string) : TRet;
declare function image_base_set_rotation(widget : TWidgetNativeObj, rotation : number) : TRet;
declare function image_base_set_scale(widget : TWidgetNativeObj, scale_x : number, scale_y : number) : TRet;
declare function image_base_set_anchor(widget : TWidgetNativeObj, anchor_x : number, anchor_y : number) : TRet;
declare function image_base_set_selected(widget : TWidgetNativeObj, selected : boolean) : TRet;
declare function image_base_set_selectable(widget : TWidgetNativeObj, selectable : boolean) : TRet;
declare function image_base_set_clickable(widget : TWidgetNativeObj, clickable : boolean) : TRet;
declare function image_base_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function image_base_t_get_prop_image(nativeObj : any);
declare function image_base_t_get_prop_anchor_x(nativeObj : any);
declare function image_base_t_get_prop_anchor_y(nativeObj : any);
declare function image_base_t_get_prop_scale_x(nativeObj : any);
declare function image_base_t_get_prop_scale_y(nativeObj : any);
declare function image_base_t_get_prop_rotation(nativeObj : any);
declare function image_base_t_get_prop_clickable(nativeObj : any);
declare function image_base_t_get_prop_selectable(nativeObj : any);
declare function image_base_t_get_prop_selected(nativeObj : any);
declare function window_event_cast(event : TEventNativeObj) : TWindowEventNativeObj;
declare function window_event_t_get_prop_window(nativeObj : any);
declare function paint_event_cast(event : TEventNativeObj) : TPaintEventNativeObj;
declare function paint_event_t_get_prop_c(nativeObj : any);
declare function key_event_cast(event : TEventNativeObj) : TKeyEventNativeObj;
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
declare function pointer_event_cast(event : TEventNativeObj) : TPointerEventNativeObj;
declare function pointer_event_t_get_prop_x(nativeObj : any);
declare function pointer_event_t_get_prop_y(nativeObj : any);
declare function pointer_event_t_get_prop_button(nativeObj : any);
declare function pointer_event_t_get_prop_pressed(nativeObj : any);
declare function pointer_event_t_get_prop_alt(nativeObj : any);
declare function pointer_event_t_get_prop_ctrl(nativeObj : any);
declare function pointer_event_t_get_prop_cmd(nativeObj : any);
declare function pointer_event_t_get_prop_menu(nativeObj : any);
declare function pointer_event_t_get_prop_shift(nativeObj : any);
declare function orientation_event_cast(event : TEventNativeObj) : TOrientationEventNativeObj;
declare function orientation_event_t_get_prop_orientation(nativeObj : any);
declare function wheel_event_cast(event : TEventNativeObj) : TWheelEventNativeObj;
declare function wheel_event_t_get_prop_dy(nativeObj : any);
declare function wheel_event_t_get_prop_alt(nativeObj : any);
declare function wheel_event_t_get_prop_ctrl(nativeObj : any);
declare function wheel_event_t_get_prop_shift(nativeObj : any);
declare function app_bar_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function app_bar_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function button_group_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function button_group_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function button_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function button_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function button_set_repeat(widget : TWidgetNativeObj, repeat : number) : TRet;
declare function button_set_enable_long_press(widget : TWidgetNativeObj, enable_long_press : boolean) : TRet;
declare function button_t_get_prop_repeat(nativeObj : any);
declare function button_t_get_prop_enable_long_press(nativeObj : any);
declare function digit_clock_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function digit_clock_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function digit_clock_set_format(widget : TWidgetNativeObj, format : string) : TRet;
declare function digit_clock_t_get_prop_format(nativeObj : any);
declare function check_button_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function check_button_create_radio(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function check_button_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function check_button_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function check_button_t_get_prop_value(nativeObj : any);
declare function color_tile_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function color_tile_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function color_tile_set_bg_color(widget : TWidgetNativeObj, color : string) : TRet;
declare function color_tile_t_get_prop_bg_color(nativeObj : any);
declare function color_tile_t_get_prop_border_color(nativeObj : any);
declare function column_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function column_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function combo_box_item_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function combo_box_item_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function combo_box_item_set_checked(widget : TWidgetNativeObj, checked : boolean) : TRet;
declare function combo_box_item_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function combo_box_item_t_get_prop_value(nativeObj : any);
declare function combo_box_item_t_get_prop_checked(nativeObj : any);
declare function combo_box_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function combo_box_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function combo_box_set_open_window(widget : TWidgetNativeObj, open_window : string) : TRet;
declare function combo_box_reset_options(widget : TWidgetNativeObj) : TRet;
declare function combo_box_count_options(widget : TWidgetNativeObj) : number;
declare function combo_box_set_selected_index(widget : TWidgetNativeObj, index : number) : TRet;
declare function combo_box_set_localize_options(widget : TWidgetNativeObj, localize_options : boolean) : TRet;
declare function combo_box_set_value(widget : TWidgetNativeObj, value : any) : TRet;
declare function combo_box_set_item_height(widget : TWidgetNativeObj, item_height : number) : TRet;
declare function combo_box_append_option(widget : TWidgetNativeObj, value : any, text : string) : TRet;
declare function combo_box_set_options(widget : TWidgetNativeObj, options : string) : TRet;
declare function combo_box_get_value(widget : TWidgetNativeObj) : number;
declare function combo_box_get_text(widget : TWidgetNativeObj) : string;
declare function combo_box_t_get_prop_open_window(nativeObj : any);
declare function combo_box_t_get_prop_selected_index(nativeObj : any);
declare function combo_box_t_get_prop_value(nativeObj : any);
declare function combo_box_t_get_prop_localize_options(nativeObj : any);
declare function combo_box_t_get_prop_options(nativeObj : any);
declare function combo_box_t_get_prop_item_height(nativeObj : any);
declare function dialog_client_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function dialog_client_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function dialog_title_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function dialog_title_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function object_default_create() : TObjectNativeObj;
declare function object_default_unref(obj : TObjectNativeObj) : TRet;
declare function object_default_clear_props(obj : TObjectNativeObj) : TRet;
declare function object_default_t_get_prop_props_size(nativeObj : any);
declare function window_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function window_set_fullscreen(widget : TWidgetNativeObj, fullscreen : boolean) : TRet;
declare function window_open(name : string) : TWidgetNativeObj;
declare function window_open_and_close(name : string, to_close : TWidgetNativeObj) : TWidgetNativeObj;
declare function window_close(widget : TWidgetNativeObj) : TRet;
declare function window_close_force(widget : TWidgetNativeObj) : TRet;
declare function window_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function window_t_get_prop_fullscreen(nativeObj : any);
declare function timer_info_cast(timer : TTimerInfoNativeObj) : TTimerInfoNativeObj;
declare function timer_info_t_get_prop_ctx(nativeObj : any);
declare function timer_info_t_get_prop_id(nativeObj : any);
declare function timer_info_t_get_prop_now(nativeObj : any);
declare function combo_box_ex_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function image_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function image_set_draw_type(widget : TWidgetNativeObj, draw_type : TImageDrawType) : TRet;
declare function image_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function image_t_get_prop_draw_type(nativeObj : any);
declare function gif_image_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function gif_image_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function keyboard_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function keyboard_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function popup_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function popup_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function popup_set_close_when_click(widget : TWidgetNativeObj, close_when_click : boolean) : TRet;
declare function popup_set_close_when_click_outside(widget : TWidgetNativeObj, close_when_click_outside : boolean) : TRet;
declare function popup_t_get_prop_close_when_click(nativeObj : any);
declare function popup_t_get_prop_close_when_click_outside(nativeObj : any);
declare function object_array_create() : TObjectNativeObj;
declare function object_array_unref(obj : TObjectNativeObj) : TRet;
declare function object_array_clear_props(obj : TObjectNativeObj) : TRet;
declare function object_array_t_get_prop_props_size(nativeObj : any);
declare function spin_box_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function spin_box_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function system_bar_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function system_bar_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function idle_info_cast(idle : TIdleInfoNativeObj) : TIdleInfoNativeObj;
declare function idle_info_t_get_prop_ctx(nativeObj : any);
declare function idle_info_t_get_prop_id(nativeObj : any);
declare function svg_image_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function svg_image_set_image(widget : TWidgetNativeObj, name : string) : TRet;
declare function svg_image_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function dialog_create(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function dialog_create_simple(parent : TWidgetNativeObj, x : number, y : number, w : number, h : number) : TWidgetNativeObj;
declare function dialog_cast(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function dialog_get_title(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function dialog_get_client(widget : TWidgetNativeObj) : TWidgetNativeObj;
declare function dialog_open(name : string) : TWidgetNativeObj;
declare function dialog_set_title(widget : TWidgetNativeObj, title : string) : TRet;
declare function dialog_modal(widget : TWidgetNativeObj) : TRet;
declare function dialog_quit(widget : TWidgetNativeObj, code : number) : TRet;
declare function dialog_is_quited(widget : TWidgetNativeObj) : boolean;
declare function dialog_is_modal(widget : TWidgetNativeObj) : boolean;
declare function dialog_toast(text : string, duration : number) : TRet;
declare function dialog_info(title : string, text : string) : TRet;
declare function dialog_warn(title : string, text : string) : TRet;
declare function dialog_confirm(title : string, text : string) : TRet;
declare function dialog_t_get_prop_highlight(nativeObj : any);
