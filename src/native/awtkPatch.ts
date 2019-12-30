
/**
 * 对话框退出码。
 *
 *> 一般用作dialog_quit函数的参数。
 *
 */
export enum TDialogQuitCodePatch {

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
export enum TEventTypePatch {

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
 * 字模格式常量定义。
 *
 */
export enum TGlyphFormatPatch {

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
 * 输入类型常量定义。
 *
 */
export enum TInputTypePatch {

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
//  CUSTOM_PASSWORD = INPUT_CUSTOM_PASSWORD(),
};


/**
 * 类型常量定义。
 *
 */
export enum TValueTypePatch {

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
 * key code。
 *
 */
export enum TKeyCodePatch {

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
 * style常量定义。
 *
 */
export enum TStyleIdPatch {

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
//  _ID_CHILDREN_LAYOUT = STYLE_ID_CHILDREN_LAYOUT(),

  /**
   * 控件布局参数。
   *
   */
//  _ID_SELF_LAYOUT = STYLE_ID_SELF_LAYOUT(),
};


/**
 * 垂直对齐的常量定义。
 *
 */
export enum TAlignVPatch {

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
export enum TAlignHPatch {

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
export enum TAppTypePatch {

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
export enum TBitmapFormatPatch {

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
export enum TBitmapFlagPatch {

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
 * 控件的属性。
 *
 */
export enum TWidgetPropPatch {

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
//  LOAD_UI = WIDGET_PROP_LOAD_UI(),

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
export enum TWidgetTypePatch {

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
//  CLIP_VIEW = WIDGET_TYPE_CLIP_VIEW(),

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
export enum TWindowStagePatch {

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
export enum TWindowClosablePatch {

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
export enum TWidgetStatePatch {

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
 * 函数返回值常量定义。
 *
 */
export enum TRetPatch {

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
 * 图片绘制方法常量定义。
 *
 */
export enum TImageDrawTypePatch {

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
 * MIME_TYPE。
 *
 */
export enum TMIME_TYPEPatch {

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
 * 指示器默认绘制的类型。
 *
 */
export enum TIndicatorDefaultPaintPatch {

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
export enum TClipBoardDataTypePatch {

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
 * 缓动作动画常量定义。
 *
 */
export enum TEasingTypePatch {

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
 * 资源类型常量定义。
 *
 */
export enum TAssetTypePatch {

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

