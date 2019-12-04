var TEvent = /** @class */ (function () {
  function TEvent(nativeObj) {
    this.nativeObj = nativeObj;
  }
  TEvent.cast = function (event) {
    return new TEvent(event_cast(event != null ? (event.nativeObj || event) : null));
  };
  TEvent.create = function (type) {
    return new TEvent(event_create(type));
  };
  TEvent.prototype.destroy = function () {
    return event_destroy(this.nativeObj);
  };
  Object.defineProperty(TEvent.prototype, "type", {
    get: function () {
      return event_t_get_prop_type(this.nativeObj);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TEvent.prototype, "time", {
    get: function () {
      return event_t_get_prop_time(this.nativeObj);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TEvent.prototype, "target", {
    get: function () {
      return event_t_get_prop_target(this.nativeObj);
    },
    enumerable: true,
    configurable: true
  });
  return TEvent;
}());
