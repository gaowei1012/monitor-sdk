"use strict";
var t = "[UMENG] -- ",
  e = function() {
    var e = null,
      n = !1;

    function i() {
      this.setDebug = function(t) {
        n = t
      };
      this.d = function() {
        if (n) try {
          "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]);
          console.debug.apply(console, arguments)
        } catch (t) {}
      };
      this.i = function() {
        try {
          if (n) try {
            "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]);
            console.info.apply(console, arguments)
          } catch (t) {}
        } catch (t) {}
      };
      this.e = function() {
        if (n) try {
          "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]);
          console.error.apply(console, arguments)
        } catch (t) {}
      };
      this.w = function() {
        if (n) try {
          "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]);
          console.warn.apply(console, arguments)
        } catch (t) {}
      };
      this.v = function() {
        if (n) try {
          "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]);
          console.log.apply(console, arguments)
        } catch (t) {}
      };
      this.t = function() {
        if (n) try {
          console.table.apply(console, arguments)
        } catch (t) {}
      };
      this.tip = function() {
        try {
          "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]);
          console.log.apply(console, arguments)
        } catch (t) {}
      };
      this.tip_w = function(t) {
        try {
          console.log("%c [UMENG] -- " + t, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;")
        } catch (t) {}
      };
      this.err = function() {
        try {
          "string" == typeof arguments[0] && (arguments[0] = t + arguments[0]);
          console.error.apply(console, arguments)
        } catch (t) {}
      };
      this.repeat = function(t) {
        for (var e = t; e.length < 86;) e += t;
        return e
      }
    }
    return function() {
      null === e && (e = new i);
      return e
    }
  }(),
  n = null;

function i() {
  if (n) return n;
  try {
    n = dd.getSystemInfoSync()
  } catch (t) {
    n = null
  }
  return n
}

function r(t) {
  var e = i();
  return e && e.app ? new RegExp("^" + t + "$", "i").test(e.app) : 0
}

function o() {
  return r("TB|taobao|com.taobao.taobao")
}

function s() {
  return r("LX")
}

function a() {
  return r("amap")
}
var u = function() {
    function t() {}
    t.prototype.setStorage = function(t, e, n) {
      dd.setStorage({
        key: t,
        data: e,
        success: function(t) {
          "function" == typeof n && n(!0)
        },
        fail: function() {
          "function" == typeof n && n(!1)
        }
      })
    };
    t.prototype.getStorage = function(t, n) {
      dd.getStorage({
        key: t,
        success: function(t) {
          "function" == typeof n && n(t.data)
        },
        fail: function(i) {
          e().w(t + ": " + i.errMsg);
          "function" == typeof n && n()
        }
      })
    };
    t.prototype.removeStorage = function(t, e) {
      dd.removeStorage({
        key: t,
        success: function() {
          "function" == typeof e && e(!0)
        },
        fail: function() {
          "function" == typeof e && e(!1)
        }
      })
    };
    t.prototype.removeStorageSync = function(t) {
      try {
        dd.removeStorageSync({
          key: t
        });
        return !0
      } catch (t) {
        return !1
      }
    };
    t.prototype.getSystemInfo = function(t) {
      var e, n = i();
      if (n) {
        e = {
          model: n.model,
          platform: n.platform,
          brand: n.brand,
          pixelRatio: n.pixelRatio,
          screenWidth: n.screenWidth,
          screenHeight: n.screenHeight,
          fontSizeSetting: n.fontSizeSetting,
          OSVersion: n.system,
          language: n.language,
          deviceName: n.model,
          platformVersion: n.version,
          platformSDKVersion: dd.SDKVersion,
          resolution: "",
          statusBarHeight: n.statusBarHeight,
          storage: n.storage,
          host: n.app
        };
        var r, o;
        if ("android" === n.platform) {
          r = Math.round(n.screenWidth);
          o = Math.round(n.screenHeight)
        } else {
          r = Math.round(n.screenWidth * n.pixelRatio);
          o = Math.round(n.screenHeight * n.pixelRatio)
        }
        e.resolution = r > o ? r + "*" + o : o + "*" + r;
        "function" == typeof t && t(e)
      } else "function" == typeof t && t(e)
    };
    t.prototype.getDeviceInfo = function(t) {
      try {
        var n = this;
        dd.call("getDeviceInfo", {}, (function(e) {
          var i = (e || {}).data;
          if (i) {
            n.setStorage("device_info", i);
            "function" == typeof t && t(i)
          } else n.getStorage("device_info", (function(e) {
            "function" == typeof t && t(e)
          }))
        }))
      } catch (n) {
        e().w("支付宝获取设备info 失败", n);
        "function" == typeof t && t()
      }
    };
    t.prototype.checkNetworkAvailable = function(t) {
      dd.getNetworkType({
        success: function(e) {
          "function" == typeof t && t(e.networkAvailable)
        },
        fail: function() {
          "function" == typeof t && t()
        }
      })
    };
    t.prototype.getNetworkInfo = function(t) {
      dd.getNetworkType({
        success: function(e) {
          "function" == typeof t && t({
            networkAvailable: e.networkAvailable,
            networkType: e.networkType
          })
        },
        fail: function() {
          "function" == typeof t && t()
        }
      })
    };
    t.prototype.getDeviceId = function(t) {
      "function" == typeof t && t("")
    };
    t.prototype.getAdvertisingId = function(t) {
      "function" == typeof t && t("")
    };
    t.prototype.getPageName = function() {
      return ""
    };
    t.prototype.onNetworkStatusChange = function(t) {
      dd.onNetworkStatusChange((function(e) {
        "function" == typeof t && t(e.isConnected || !0)
      }))
    };
    t.prototype.request = function(t) {
      t.headers = t.header;
      try {
        delete t.header
      } catch (t) {}
      return dd.request ? dd.request(t) : dd.httpRequest(t)
    };
    t.prototype.getSdkType = function() {
      return this.getPlatform() + "mp"
    };
    t.prototype.getPlatform = function() {
      return o() ? "taobao" : a() ? "gaode" : s() ? "fliggy" : "alipay"
    };
    t.prototype.getUserInfo = function(t) {
      var n = {
        fail: function() {
          t && t()
        },
        success: function(e) {
          try {
            var n = JSON.parse(e.response).response;
            n && t && t({
              avatar: n.avatar,
              nickName: n.nickName,
              gender: n.gender,
              country: n.countryCode,
              province: n.province,
              city: n.city
            })
          } catch (e) {
            t()
          }
        }
      };
      try {
        dd.getSetting({
          success: function(e) {
            console.log("setting: ", e);
            e && e.authSetting && e.authSetting.userInfo ? dd.getOpenUserInfo(n) : t && t()
          },
          fail: function() {
            t && t()
          }
        })
      } catch (t) {
        e.e("getUserInfo error", t)
      }
    };
    t.prototype.getAppInfoSync = function() {
      var t = {};
      dd.getAppIdSync && (t = dd.getAppIdSync() || {});
      return {
        appId: t.appId
      }
    };
    t.prototype.onShareAppMessage = function() {};
    t.prototype.shareAppMessage = function() {};
    t.prototype.getLaunchOptionsSync = function() {
      var t = null;
      if (t) return t;
      if (!dd.getLaunchOptionsSync) return {};
      try {
        t = dd.getLaunchOptionsSync()
      } catch (e) {
        t = null
      }
      return t || {}
    };
    return t
  }(),
  c = new u,
  f = {
    SESSION_INTERVAL: 3e4,
    LOG_URL: "/alipaym_logs",
    GET_OPENID_URL: "",
    USERINFO_URL: "/uminiprogram_logs/comm/uif",
    ENDPOINT: "https://umini.shujupie.com",
    ENDPOINTB: "https://ulogs.umeng.com",
    DEVICE_INFO_KEY: "device_info",
    ADVERTISING_ID: "mobile_ad_id",
    ANDROID_ID: "android_id",
    CURRENT_SESSION: "current_session",
    SESSION_PAUSE_TIME: "session_pause_time",
    EVENT_SEND_DEFAULT_INTERVAL: 15e3,
    EVENT_LAST_SEND_TIME: "last_send_time",
    MAX_EVENTID_LENGTH: 128,
    MAX_PROPERTY_KEY_LENGTH: 256,
    MAX_PROPERTY_KEYS_COUNT: 100,
    REPORT_POLICY: "report_policy",
    REPORT_INTERVAL_TIME: "report_interval_time",
    REPORT_POLICY_START_SEND: "1",
    REPORT_POLICY_INTERVAL: "6",
    IMPRINT: "imprint",
    SEED_VERSION: "1.0.0",
    IMPL_VERSION: "2.8.0",
    ALIPAY_AVAILABLE_VERSION: "10.1.52",
    SHARE_PATH: "um_share_path",
    SHARES: "shares",
    REQUESTS: "requests",
    UUID: "um_uuid",
    UUID_SUFFIX: "ud",
    OPENID: "um_od",
    UNIONID: "um_unid",
    ALIPAYID: "um_alipayid",
    USERID: "um_userid",
    PROVIDER: "um_provider",
    SWANID: "um_swanid",
    ANONYMOUSID: "um_anonymousid",
    LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
    UM_SSRC: "_um_ssrc",
    USER_INFO: "user_info",
    IS_ALIYUN: !1
  };
var p = {
    isNumber: function(t) {
      return !Number.isNaN(parseInt(t, 10))
    },
    compareVersion: function(t, e) {
      for (var n = String(t).split("."), i = String(e).split("."), r = 0; r < Math.max(n.length, i.length); r++) {
        var o = parseInt(n[r] || 0, 10),
          s = parseInt(i[r] || 0, 10);
        if (o > s) return 1;
        if (o < s) return -1
      }
      return 0
    },
    getRandomStr: function(t) {
      for (var e = "", n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], i = 0; i < Number(t); i++) {
        e += n[Math.round(Math.random() * (n.length - 1))]
      }
      return e
    },
    clone: function(t) {
      return JSON.parse(JSON.stringify(t))
    },
    startsWith: function(t, e) {
      return !(!t || !e || 0 === e.length || e.length > t.length) && t.substr(0, e.length) === e
    },
    endsWith: function(t, e) {
      return !(!e || 0 === t.length || e.length > t.length) && t.substring(t.length - e.length) === e
    },
    assign: function(t) {
      if (null == t) throw new TypeError("Cannot convert undefined or null to object");
      for (var e = Object(t), n = 1; n < arguments.length; n++) {
        var i = arguments[n];
        if (i)
          for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
      }
      return e
    },
    deepEqual: function t(e, n) {
      if (e === n) return !0;
      if (e && "object" == typeof e && n && "object" == typeof n) {
        if (Object.keys(e).length !== Object.keys(n).length) return !1;
        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(n, i)) return !1;
          if (!t(e[i], n[i])) return !1
        }
        return !0
      }
      return !1
    },
    trimStart: function(t, e) {
      if (!t) return "";
      if ("string" == typeof e && e.length) {
        var n = new RegExp("^" + e + "*");
        t = t.replace(n, "")
      } else t = t.replace(/^s*/, "");
      return t
    },
    trimEnd: function(t, e) {
      if (!t) return "";
      var n, i;
      if ("string" == typeof e && e.length) {
        n = new RegExp(e);
        i = t.length;
        for (; n.test(t.charAt(i));) i -= 1;
        return t.slice(0, i + 1)
      }
      n = /s/;
      i = t.length - 1;
      for (; n.test(t.charAt(i));) i -= 1;
      return t.slice(0, i + 1)
    },
    isFunction: function(t) {
      return "function" == typeof t
    }
  },
  d = function() {
    var t = null;

    function e() {
      var t = {};
      this.useOpenid = function() {
        return !!t.useOpenid
      };
      this.useSwanid = function() {
        return !!t.useSwanid
      };
      this.autoGetOpenid = function() {
        return !!t.autoGetOpenid
      };
      this.appKey = function() {
        return t.appKey
      };
      this.uploadUserInfo = function() {
        return t.uploadUserInfo
      };
      this.enableVerify = function() {
        return t.enableVerify
      };
      this.set = function(e) {
        t = e
      };
      this.get = function() {
        return t
      };
      this.setItem = function(e, n) {
        t[e] = n
      };
      this.getItem = function(e) {
        return t[e]
      }
    }
    return function() {
      t || (t = new e);
      return t
    }
  }();

function h() {}
h.prototype = {
  on: function(t, e, n) {
    var i = this.e || (this.e = {});
    (i[t] || (i[t] = [])).push({
      fn: e,
      ctx: n
    });
    return this
  },
  once: function(t, e, n) {
    var i = this;

    function r() {
      i.off(t, r);
      e.apply(n, arguments)
    }
    r._ = e;
    return this.on(t, r, n)
  },
  emit: function(t) {
    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, e);
    return this
  },
  off: function(t, e) {
    var n = this.e || (this.e = {}),
      i = n[t],
      r = [];
    if (i && e)
      for (var o = 0, s = i.length; o < s; o++) i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
    r.length ? n[t] = r : delete n[t];
    return this
  }
};
var l = new h;
l.messageType = {
  CONFIG_LOADED: 0,
  UMA_LIB_INITED: 1
};
var g = function(t, e) {
  g = Object.setPrototypeOf || {
    __proto__: []
  }
  instanceof Array && function(t, e) {
    t.__proto__ = e
  } || function(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
  };
  return g(t, e)
};

function y(t, e) {
  g(t, e);

  function n() {
    this.constructor = t
  }
  t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
}
var _ = function() {
  function t() {
    this._uuid = "";
    this._userid = "";
    this._provider = "";
    this._idType = ""
  }
  t.prototype.createUUID = function() {
    return p.getRandomStr(10) + Date.now() + p.getRandomStr(7) + f.UUID_SUFFIX
  };
  t.prototype.initUUID = function(t) {
    var e = this;
    c.getStorage(f.UUID, (function(n) {
      if (n) e._uuid = n;
      else {
        e._uuid = e.createUUID();
        c.setStorage(f.UUID, e._uuid)
      }
      t && t(n)
    }))
  };
  t.prototype.initUserid = function() {
    var t = this;
    c.getStorage(f.USERID, (function(n) {
      if (!t._userid && n) {
        t._userid = n;
        e().v("userId is ", n)
      }
    }));
    c.getStorage(f.PROVIDER, (function(n) {
      if (!t._provider && n) {
        t._provider = n;
        e().v("provider is ", n)
      }
    }))
  };
  t.prototype.init = function(t) {
    var e = this;
    e.initUUID((function() {
      e.initUserid();
      e.initID(t)
    }))
  };
  t.prototype.setUserid = function(t, e) {
    if (!this._userid && t) {
      this._userid = t;
      this._provider = e;
      c.setStorage(f.USERID, t);
      c.setStorage(f.PROVIDER, e)
    }
  };
  t.prototype.removeUserid = function() {
    this._userid = void 0;
    this._provider = void 0;
    c.removeStorageSync(f.USERID);
    c.removeStorageSync(f.PROVIDER)
  };
  t.prototype.getUserId = function() {
    return this._userid
  };
  t.prototype.getProvider = function() {
    return this._provider
  };
  t.prototype.getIdType = function() {
    return this._idType
  };
  t.prototype.getIdTracking = function() {
    var t = {};
    this._uuid && (t.uuid = this._uuid);
    this._userid && (t.userid = this._userid);
    return t
  };
  return t
}();
! function(t) {
  y(n, t);

  function n() {
    var e = null !== t && t.apply(this, arguments) || this;
    e._openid = "";
    e._unionid = "";
    e._useOpenid = !1;
    return e
  }
  n.prototype.initID = function(t) {
    var n = this;
    n._idType = n._useOpenid ? "openid" : "uuid";
    e().v("id type: ", n._idType);
    c.getStorage(f.UNIONID, (function(t) {
      n._unionid = t
    }));
    this._useOpenid ? c.getStorage(f.OPENID, (function(e) {
      n._openid = e;
      t && t()
    })) : t && t()
  };
  n.prototype.setUseOpenid = function(t) {
    this._useOpenid = t
  };
  n.prototype.setOpenid = function(t) {
    if (!this._openid && t) {
      this._openid = t;
      c.setStorage(f.OPENID, t)
    }
  };
  n.prototype.setUnionid = function(t) {
    if (!this._unionid && t) {
      this._unionid = t;
      c.setStorage(f.UNIONID, t)
    }
  };
  n.prototype.getIdTracking = function() {
    var e = t.prototype.getIdTracking.call(this);
    this._openid && (e.openid = this._openid);
    this._unionid && (e.unionid = this._unionid);
    this._userid && (e.userid = this._userid);
    return e
  };
  n.prototype.getId = function() {
    return this._useOpenid ? this._openid : this._uuid
  }
}(_);
var v, m = function(t) {
    y(n, t);

    function n() {
      var e = null !== t && t.apply(this, arguments) || this;
      e._alipayid = "";
      e._um_alipayid = "";
      return e
    }
    n.prototype.getAlipayId = function(t) {
      try {
        if (s() || o() || a()) return t(this._alipayid);
        dd.call("getOpenUserData", {}, (function(n) {
          var i = (n || {}).uid;
          i || e().w("not support alipayid use uuid");
          "function" == typeof t && t(i)
        }))
      } catch (e) {
        t("")
      }
    };
    n.prototype.initID = function(t) {
      var n = this;
      o() || s() || a() ? n._idType = "device_id" : n._idType = "alipay_id";
      c.getStorage(f.ALIPAYID, (function(i) {
        if (i) {
          n._alipayid = i;
          t && t()
        } else n.getAlipayId((function(i) {
          e().v("获取到alipayid: %s", i);
          if (i) {
            n._alipayid = i;
            c.setStorage(f.ALIPAYID, n._alipayid)
          } else {
            n._idType = "uuid";
            n._alipayid = n._uuid
          }
          t && t()
        }))
      }))
    };
    n.prototype.getId = function() {
      return this._alipayid
    };
    n.prototype.getIdTracking = function() {
      var e = t.prototype.getIdTracking.call(this);
      if (o() || s() || a()) {
        this._alipayid && (e.device_id = this._alipayid);
        return e
      }
      this._alipayid && this._uuid !== this._alipayid && (e.alipay_id = this._alipayid);
      this._um_alipayid && (e.um_alipayid = this._um_alipayid);
      return e
    };
    n.prototype.setAlipayUserid = function(t) {
      this._um_alipayid = t
    };
    n.prototype.setDeviceId = function(t) {
      t && (this._alipayid = t)
    };
    return n
  }(_),
  I = (v = null, function() {
    v || (v = new m);
    return v
  }),
  S = function() {
    var t = null;

    function e() {
      var t = !1,
        e = null,
        n = [];
      this.addPageStart = function(n) {
        if (n && !t) {
          e = {
            ts: Date.now(),
            path: n,
            page_name: n
          };
          t = !0
        }
      };
      this.addPageEnd = function(i) {
        if (t && i && e && i === e.page_name) {
          var r = Date.now() - e.ts;
          e.duration = Math.abs(r);
          n.push(e);
          e = null;
          t = !1
        }
      };
      this.get = function() {
        return n
      };
      this.getCurrentPage = function() {
        return e
      };
      this.clear = function() {
        n.length = 0
      }
    }
    return function() {
      t || (t = new e);
      return t
    }
  }(),
  A = {};
var E = function() {
    var t = null,
      n = [],
      i = "";

    function r() {
      return {
        add: function(t, r) {
          e().v("share origin: %o", t);
          var o = {
            title: t && t.title,
            path: t && t.path && t.path.split("?")[0],
            _um_sts: Date.now()
          };
          o.path && o.path.length > 1 && p.startsWith(o.path, "/") && (o.path = p.trimStart(o.path, "/"));
          var s = t.path || "",
            a = I().getId();
          if (a) {
            var u = i.split(","),
              c = (u = u.filter((function(t) {
                return t.length > 0
              }))).indexOf(a);
            c >= 0 && (u = u.slice(0, c));
            u.length < 3 && u.push(a);
            var f = u.join(","); - 1 !== s.indexOf("?") ? s += "&_um_ssrc=" + f : s += "?_um_ssrc=" + f;
            var d = Date.now();
            s += "&_um_sts=" + d;
            if (r) {
              var h = function(t) {
                  var e = [];
                  for (var n in t) "_um_ssrc" !== n && "_um_sts" !== n && e.push(n + "=" + t[n]);
                  return e.join("&")
                }(A),
                l = h ? h + "&_um_ssrc=" + f + "&_um_sts=" + d : "_um_ssrc=" + f + "&_um_sts=" + d;
              t.query = t.query ? t.query + "&_um_ssrc=" + f + "&_um_sts=" + d : l
            } else t.path = s;
            o._um_ssrc = f;
            o._um_sts = d
          }
          n.push(o);
          e().v("share: %o", t);
          return t
        },
        setShareSource: function(t) {
          i = t
        },
        clear: function() {
          n.length = 0
        },
        get: function() {
          return n
        }
      }
    }
    return function() {
      t || (t = new r);
      return t
    }
  }(),
  O = function(t) {
    if (t) try {
      return JSON.stringify(t)
    } catch (t) {}
    return ""
  },
  N = function(t) {
    if (t) try {
      return JSON.parse(t)
    } catch (t) {}
    return null
  },
  T = function() {
    var t = null,
      e = "",
      n = null,
      i = !1;

    function r() {
      this.load = function(t) {
        if (n) {
          c.removeStorage(e);
          t()
        } else {
          e = "um_cache_" + d().appKey();
          c.getStorage(e, (function(r) {
            n = N(r) || {};
            i = !0;
            c.removeStorage(e);
            t()
          }))
        }
      };
      this.save = function() {
        n && c.setStorage(e, O(n))
      };
      this.set = function(t, e) {
        n && (n[t] = e)
      };
      this.get = function(t) {
        return (n || {})[t]
      };
      this.remove = function(t) {
        n && n[t] && delete n[t]
      };
      this.getAll = function() {
        return n
      };
      this.clear = function() {
        n = null
      };
      this.has = function(t) {
        return !!this.get(t)
      };
      this.isLoaded = function() {
        return i
      }
    }
    return function() {
      t || (t = new r);
      return t
    }
  }(),
  U = function() {
    var t, n, i = [],
      r = [];

    function o() {
      if (i.length) {
        var t = T().get("ekvs");
        if (function(t) {
            var e = 0;
            for (var n in t) Array.isArray(t[n]) && (e += t[n].length);
            return e
          }(t) + i.length <= 1e4) {
          t = s(t, i);
          T().set("ekvs", t)
        }
      }
    }

    function s(t, e) {
      var i = (t = t || {})[n];
      Array.isArray(i) && i.length ? t[n] = i.concat(e) : t[n] = [].concat(e);
      return t
    }
    return function() {
      t || (t = {
        addEvent: function(t) {
          if (n) {
            i.unshift(t);
            if (i.length > 1) {
              o();
              i.length = 0
            }
          } else {
            e().w("session id is null: ", n);
            r.unshift(t)
          }
        },
        setSessionId: function(t) {
          n = t;
          e().v("setSessionId: ", n);
          if (Array.isArray(r) && r.length && n) {
            for (var i = 0; i < r.length; i++) this.addEvent(r[i]);
            r.length = 0
          }
        },
        getEkvs: function() {
          var t = T().get("ekvs");
          i && i.length && (t = s(t, i));
          return t
        },
        clear: function() {
          T().remove("ekvs");
          i.length = 0
        }
      });
      return t
    }
  }(),
  k = "2g",
  P = "3g",
  D = "4g",
  R = "half_session",
  w = "close_session",
  b = "ekv",
  L = ["access", "access_subtype"],
  C = function() {
    var t = null;

    function e() {
      var t = !1,
        e = {};

      function n(t) {
        var n = T().get(f.IMPRINT);
        n && (e.imprint = n);
        e.device_type = "Phone";
        e.sdk_version = f.IMPL_VERSION;
        e.appkey = d().appKey();
        c.getDeviceInfo((function(t) {
          e.device_info = t || ""
        }));
        var i = c.getAppInfoSync();
        e.appid = i.appId;
        e.app_env = i.appEnv;
        e.app_version = i.appVersion;
        c.getSystemInfo((function(n) {
          c.getNetworkInfo((function(i) {
            var r = function(t, e) {
              var n = {};
              (t = t || {}).safeArea = t.safeArea || {};
              var i = (e = e || {}).networkType;
              "none" === i && (i = "unknown");
              var r = t.model || "",
                o = t.platform || "",
                s = t.brand || "",
                a = s.toLowerCase();
              n.sdk_type = c.getSdkType();
              n.platform = c.getPlatform();
              n.platform_sdk_version = t.platformSDKVersion;
              n.platform_version = t.platformVersion;
              n.resolution = t.resolution;
              n.pixel_ratio = t.pixelRatio;
              n.os = o;
              n.font_size_setting = t.fontSizeSetting;
              n.device_model = r;
              n.device_brand = s;
              n.device_manufacturer = a;
              n.device_manuid = r;
              n.device_name = r;
              n.os_version = t.OSVersion;
              n.language = t.language;
              n.theme = t.theme;
              n.benchmark_level = t.benchmarkLevel;
              n.status_bar_height = t.statusBarHeight;
              n.safe_area_top = t.safeArea.top;
              n.safe_area_left = t.safeArea.left;
              n.safe_area_right = t.safeArea.right;
              n.safe_area_bottom = t.safeArea.bottom;
              n.safe_area_height = t.safeArea.height;
              n.safe_area_width = t.safeArea.width;
              n.storage = t.storage;
              n.screen_width = t.screenWidth;
              n.screen_height = t.screenHeight;
              n.host = t.host;
              switch (i = i ? i.toLowerCase() : "") {
                case D:
                  n.access_subtype = "LTE";
                  n.access = "4G";
                  break;
                case P:
                  n.access_subtype = "CDMA";
                  n.access = "3G";
                  break;
                case k:
                  n.access_subtype = "GRPS";
                  n.access = "2G";
                  break;
                default:
                  n.access = i;
                  delete n.access_subtype
              }
              return n
            }(n, i);
            p.assign(e, r);
            t && t()
          }))
        }))
      }
      return {
        init: function() {
          n((function() {
            t = !0
          }))
        },
        isLoaded: function() {
          return t
        },
        get: function() {
          return e
        },
        getRealtimeFields: function() {
          var t = {};
          L.forEach((function(n) {
            t[n] = e[n]
          }));
          return t
        },
        setIdTracking: function(t) {
          this.setItem("id_tracking", t)
        },
        setIdType: function(t) {
          this.setItem("id_type", t)
        },
        setAppVersion: function(t) {
          this.setItem("app_version", t)
        },
        setSuperProperty: function(t) {
          e.sp || (e.sp = {});
          e.sp.isv = t
        },
        getSuperProperty: function() {
          return e && e.sp ? e.sp.isv : ""
        },
        setItem: function(t, n) {
          e[t] = n
        },
        getItem: function(t) {
          return e[t]
        }
      }
    }
    return {
      instance: function() {
        t || (t = e());
        return t
      }
    }
  }(),
  M = function() {
    var t = null,
      n = null,
      i = null;

    function r() {
      return {
        resume: function(t) {
          var r = !1;
          i || (i = T().get(f.CURRENT_SESSION));
          var o = new Date;
          n = o.getTime();
          if (!i || !i.end_time || n - i.end_time > f.SESSION_INTERVAL) {
            r = !0;
            ! function(t) {
              try {
                var n = (i || {}).options || {},
                  r = p.assign({}, function(t) {
                    var n = {};
                    for (var i in t) 0 === i.indexOf("_um_") && (n[i] = t[i]);
                    e().v("query: ", t);
                    e().v("_um_params: ", n);
                    return n
                  }(t.query));
                r.path = t.path || t.page || n.path || n.page;
                r.path || (r.path = c.getLaunchOptionsSync().path || c.getLaunchOptionsSync().page);
                "gaode" !== c.getPlatform() && (r.scene = t.scene ? c.getPlatform() + "_" + t.scene : n.scene);
                var o = t.referrerInfo;
                o && (r.referrerAppId = o.appId);
                e().v("session options: ", r);
                var s = r[f.UM_SSRC];
                s && E().setShareSource(s);
                var a = Date.now();
                i = {
                  id: p.getRandomStr(10) + a,
                  start_time: a,
                  options: r
                }
              } catch (t) {
                e().e("生成新session失败: ", t)
              }
            }(t);
            e().v("开始新的session(%s): ", i.id, i)
          } else e().v("延续上一次session(%s): %s ", i.id, o.toLocaleTimeString(), i);
          return r
        },
        pause: function() {
          ! function() {
            if (i) {
              var t = new Date;
              i.end_time = t.getTime();
              "number" != typeof i.duration && (i.duration = 0);
              i.duration = i.end_time - n;
              T().set(f.CURRENT_SESSION, i);
              e().v("退出会话(%s): %s ", i.id, t.toLocaleTimeString(), i)
            }
          }()
        },
        getCurrentSessionId: function() {
          return (i || {}).id
        },
        getCurrentSession: function() {
          return i
        },
        cloneCurrentSession: function() {
          return p.clone(i)
        }
      }
    }
    return function() {
      t || (t = r());
      return t
    }
  }();

function V(t) {
  var e = null;
  switch (t) {
    case R:
      e = function() {
        var t = null,
          e = M().cloneCurrentSession();
        e && (t = {
          header: {
            st: "1"
          },
          analytics: {
            sessions: [e]
          }
        });
        return t
      }();
      break;
    case w:
      e = function() {
        var t = null,
          e = {},
          n = M().cloneCurrentSession();
        if (n) {
          var i = S().get(),
            r = E().get();
          Array.isArray(i) && i.length && (n.pages = p.clone(i));
          Array.isArray(r) && r.length && (n.shares = p.clone(r));
          S().clear();
          E().clear();
          e.sessions = [n]
        }
        var o = U().getEkvs();
        if (o) {
          e.ekvs = p.clone(o);
          U().clear()
        }(e.sessions || e.ekvs) && (t = {
          analytics: e
        });
        return t
      }();
      break;
    case b:
      e = function() {
        var t = null,
          e = U().getEkvs();
        if (e) {
          t = {
            analytics: {
              ekvs: p.clone(e)
            }
          };
          U().clear()
        }
        return t
      }()
  }
  return e
}
var x = {
    sessions: "sn",
    ekvs: "e",
    active_user: "active_user"
  },
  j = {
    sdk_type: "sdt",
    access: "ac",
    access_subtype: "acs",
    device_model: "dm",
    language: "lang",
    device_type: "dt",
    device_manufacturer: "dmf",
    device_name: "dn",
    platform_version: "pv",
    id_type: "it",
    font_size_setting: "fss",
    os_version: "ov",
    device_manuid: "did",
    platform_sdk_version: "psv",
    device_brand: "db",
    appkey: "ak",
    _id: "id",
    id_tracking: "itr",
    imprint: "imp",
    sdk_version: "sv",
    resolution: "rl",
    testToken: "ttn",
    theme: "t5",
    benchmark_level: "bml",
    screen_width: "sw",
    screen_height: "sh",
    status_bar_height: "sbh",
    safe_area_top: "sat",
    safe_area_left: "sal",
    safe_area_right: "sar",
    safe_area_bottom: "sab",
    safe_area_height: "sah",
    safe_area_width: "saw",
    pixel_ratio: "pr",
    storage: "s7",
    host: "hs"
  },
  q = {
    uuid: "ud",
    unionid: "und",
    openid: "od",
    anonymousid: "nd",
    alipay_id: "ad",
    device_id: "dd",
    userid: "puid"
  };

function F(t, e) {
  var n = H(t, e);
  t && t.id_tracking && (n[e.id_tracking || "id_tracking"] = H(t.id_tracking, q));
  return n
}

function H(t, e) {
  var n = {};
  for (var i in t) e[i] ? n[e[i]] = t[i] : n[i] = t[i];
  return n
}

function Y(t, e) {
  var n = {};
  if (t)
    for (var i in t) t[i] && (n[e[i]] = t[i]);
  return n
}
var G = "";

function K() {
  return G
}
var B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  X = function(t) {
    for (var e = {}, n = 0, i = t.length; n < i; n++) e[t.charAt(n)] = n;
    return e
  }(B),
  W = String.fromCharCode,
  z = function(t) {
    if (t.length < 2) {
      return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? W(192 | e >>> 6) + W(128 | 63 & e) : W(224 | e >>> 12 & 15) + W(128 | e >>> 6 & 63) + W(128 | 63 & e)
    }
    var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
    return W(240 | e >>> 18 & 7) + W(128 | e >>> 12 & 63) + W(128 | e >>> 6 & 63) + W(128 | 63 & e)
  },
  J = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
  Q = function(t) {
    var e = [0, 2, 1][t.length % 3],
      n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
    return [B.charAt(n >>> 18), B.charAt(n >>> 12 & 63), e >= 2 ? "=" : B.charAt(n >>> 6 & 63), e >= 1 ? "=" : B.charAt(63 & n)].join("")
  },
  Z = function(t) {
    return e = function(t) {
      return t.replace(J, z)
    }(t), e.replace(/[\s\S]{1,3}/g, Q);
    var e
  },
  $ = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
  tt = function(t) {
    switch (t.length) {
      case 4:
        var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
        return W(55296 + (e >>> 10)) + W(56320 + (1023 & e));
      case 3:
        return W((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
      default:
        return W((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
    }
  },
  et = function(t) {
    var e = t.length,
      n = e % 4,
      i = (e > 0 ? X[t.charAt(0)] << 18 : 0) | (e > 1 ? X[t.charAt(1)] << 12 : 0) | (e > 2 ? X[t.charAt(2)] << 6 : 0) | (e > 3 ? X[t.charAt(3)] : 0),
      r = [W(i >>> 16), W(i >>> 8 & 255), W(255 & i)];
    r.length -= [0, 0, 2, 1][n];
    return r.join("")
  },
  nt = function(t) {
    return e = function(t) {
      return t.replace(/[\s\S]{1,4}/g, et)
    }(t), e.replace($, tt);
    var e
  },
  it = function(t, e) {
    return e ? Z(String(t)).replace(/[+\/]/g, (function(t) {
      return "+" == t ? "-" : "_"
    })).replace(/=/g, "") : Z(String(t))
  },
  rt = function(t) {
    return nt(String(t).replace(/[-_]/g, (function(t) {
      return "-" == t ? "+" : "/"
    })).replace(/[^A-Za-z0-9\+\/]/g, ""))
  };
var ot = new function() {
  var t = "",
    e = this;
  this.set = function(e) {
    t = e
  };
  this.get = function() {
    return t
  };
  this.getImpObj = function() {
    return N(rt(t))
  };
  this.getItem = function(t) {
    var n = e.getImpObj();
    return n && n[t] || ""
  };
  this.load = function() {
    t = T().get(f.IMPRINT)
  };
  this.save = function() {
    t && T().set(f.IMPRINT, t)
  }
};

function st(t, n, i, r) {
  C.instance().setIdType(I().getIdType());
  C.instance().setIdTracking(I().getIdTracking());
  var o = I().getUserId();
  o && t.analytics && (t.analytics.active_user = {
    puid: o,
    provider: I().getProvider()
  });
  var s = p.clone(C.instance().get());
  t.header = p.assign(s, t.header, {
    ts: Date.now(),
    testToken: K(),
    traceId: p.getRandomStr(10) + Date.now() + p.getRandomStr(9)
  });
  var a = function(t) {
      return {
        h: F(t.header, j),
        a: Y(t.analytics, x)
      }
    }(t),
    u = O(a),
    d = {
      url: f.ENDPOINT + f.LOG_URL,
      method: "POST",
      data: a,
      success: function(r) {
        var o = r.code || r.status || r.statusCode;
        if (200 === o || 413 === o) {
          e().i("数据发送成功: ", t, u);
          ! function(t) {
            if (t) {
              C.instance().setItem(f.IMPRINT, t);
              ot.set(t);
              ot.save();
              e().v("imprint: ", ot.getImpObj());
              ot.getItem("ttn_invalid") && (G = "")
            }
          }((r.data || {}).imprint);
          "function" == typeof n && n(r)
        } else {
          e().w("数据发送失败: ", u);
          "function" == typeof i && i()
        }
      },
      fail: function(t) {
        e().w("超时: ", u);
        "function" == typeof i && i()
      },
      complete: function() {
        "function" == typeof r && r()
      }
    };
  c.request(p.assign(d, {
    header: {
      "Msg-Type": c.getSdkType() + "/json",
      "disable-base64": "Y"
    }
  }))
}

function at(t) {
  var e = t,
    n = [];
  this.enqueue = function(t) {
    "number" == typeof e && this.size() >= e && this.dequeue();
    n.push(t)
  };
  this.dequeue = function() {
    return n.shift()
  };
  this.front = function() {
    return n[0]
  };
  this.isEmpty = function() {
    return 0 === n.length
  };
  this.clear = function() {
    n.length = 0
  };
  this.size = function() {
    return n.length
  };
  this.items = function() {
    return n
  };
  this.print = function() {
    console.log(n.toString())
  }
}
var ut = function() {
    var t = null,
      n = !1,
      i = [],
      r = new at(50);

    function o(t, e, n) {
      if (C.instance().isLoaded()) {
        e = e || {};
        var i = V(t);
        if (i) {
          var s = C.instance().getRealtimeFields();
          i.header = p.assign({}, i.header, s);
          i.noCache = e.noCache;
          r.enqueue(i)
        }
        "function" == typeof n && n()
      } else setTimeout((function() {
        o(t, e, n)
      }), 100)
    }

    function s(t) {
      var e = r.front();
      if (e) st(e, (function() {
        r.dequeue();
        s(t)
      }), (function() {
        var e = r.dequeue();
        e && !e.noCache && i.push(e);
        s(t)
      }));
      else {
        ! function() {
          i.forEach((function(t) {
            r.enqueue(t)
          }));
          i.length = 0
        }();
        t()
      }
    }

    function a(t) {
      if (I().getId())
        if (n) e().i("队列正在发送中");
        else {
          n = !0;
          s((function() {
            n = !1;
            "function" == typeof t && t()
          }))
        }
      else {
        e().i("获取id标识失败，暂缓发送");
        "function" == typeof t && t()
      }
    }

    function u() {
      this.send = function(t, e, n) {
        t ? this.add(t, e, (function() {
          a(n)
        })) : a(n)
      };
      this.add = function(t, e, n) {
        o(t, e, n)
      };
      this.load = function() {
        var t = T().get(f.REQUESTS);
        t && t.length && t.forEach((function(t) {
          r.enqueue(t)
        }));
        T().remove(f.REQUESTS)
      };
      this.save = function() {
        T().set(f.REQUESTS, p.clone(r.items()));
        r.clear()
      }
    }
    return function() {
      t || (t = new u);
      return t
    }
  }(),
  ct = function() {
    var t = null,
      n = null;

    function i() {
      this.setUserInfo = function(t) {
        n = t
      };
      this.update = function() {
        t(n) || c.getUserInfo((function(e) {
          t(e)
        }))
      };

      function t(t) {
        if (t && "object" == typeof t) {
          var n = T().get(f.USER_INFO);
          n && p.deepEqual(t, n) || function(t, n) {
            var i = d().appKey(),
              r = c.getSdkType(),
              o = I().getId(),
              s = I().getIdType();
            if (!(i && r && o && s)) return;
            var a = {
                ak: d().appKey(),
                sdt: c.getSdkType(),
                uin: t.nickName,
                uia: t.avatar || t.avatarUrl,
                uig: t.gender,
                uit: t.country,
                uip: t.province,
                uic: t.city,
                uil: t.language,
                id: I().getId(),
                it: I().getIdType(),
                age: t.age,
                cln: t.constellation
              },
              u = JSON.stringify(a);
            u = it(u);
            c.request({
              url: f.ENDPOINT + f.USERINFO_URL,
              method: "POST",
              header: {
                "content-type": "application/x-www-form-urlencoded"
              },
              data: "ui=" + u,
              success: function(i) {
                e().v("用户信息上传成功: ", t);
                n && n(i && i.data && 200 === i.data.code)
              },
              fail: function() {
                e().e("用户信息上传失败: ", t);
                n && n(!1)
              }
            })
          }(t, (function(e) {
            e && T().set(f.USER_INFO, t)
          }));
          return !0
        }
        return !1
      }
    }
    return function() {
      t || (t = new i);
      return t
    }
  }();

function ft(t, e) {
  this.id = t;
  this.ts = Date.now();
  var n = typeof e;
  if ("string" === n && e) this[t] = e;
  else if ("object" === n)
    for (var i in e)({}).hasOwnProperty.call(e, i) && (this[i] = e[i])
}

function pt() {
  var t = !1,
    n = !1,
    i = 0;
  this.init = function(n) {
    e().v("sdk version: " + f.IMPL_VERSION);
    t ? e().v("Lib重复实例化") : T().load((function() {
      e().v("cache初始化成功: ", T().getAll());
      ! function() {
        I().setUseOpenid && I().setUseOpenid(d().useOpenid());
        I().init((function() {
          C.instance().init();
          e().v("Header初始化成功")
        }))
      }();
      t = !0;
      "function" == typeof n && n();
      e().tip("SDK集成成功")
    }))
  };
  this.resume = function(i) {
    if (t && !n) {
      e().v("showOptions: ", i);
      var r;
      n = !0;
      d().enableVerify() && i && i.query && (r = i.query._ttn, G = r || G);
      this._resume(i)
    }
  };
  this._resume = function(t) {
    ut().load();
    var n = M().resume(t),
      i = M().getCurrentSessionId();
    U().setSessionId(i);
    n && ut().add(R, {}, (function() {
      I().setUseOpenid && I().setUseOpenid(d().useOpenid());
      if (d().useOpenid() && d().autoGetOpenid() && !I().getId()) {
        e().v("get id async");
        r(10, 3e3)
      } else {
        e().v("session auto send");
        ut().send()
      }
    }));

    function r(t, n) {
      I().getId() || t <= 0 || I().getOpenIdAsync(d().appKey(), (function(i) {
        if (i) {
          e().v("获取id成功");
          ut().send()
        } else {
          e().v("获取openid失败,启动重试,剩余可用次数", t - 1);
          setTimeout((function() {
            r(t - 1, n)
          }), n)
        }
      }))
    }
  };
  this.pause = function(r) {
    if (t) {
      n = !1;
      i = 0;
      M().pause();
      d().uploadUserInfo() && ct().update();
      ut().send(w, {}, (function() {
        ut().save();
        T().save();
        e().v("cache save success");
        "function" == typeof r && r()
      }))
    }
  };
  this.setOpenid = function(t) {
    e().v("setOpenId: %s", t);
    I().setOpenid(t);
    ut().send()
  };
  this.setUnionid = function(t) {
    e().v("setUnionid: %s", t);
    I().setUnionid(t)
  };
  this.setUserid = function(t, n) {
    e().v("setUserid: %s", t, n);
    I().setUserid(t, n)
  };
  this.removeUserid = function() {
    e().v("removeUserid");
    I().removeUserid()
  };
  this.setUserInfo = function(t) {
    e().v("setUserInfo: %s", t);
    ct().setUserInfo(t)
  };
  this.setAnonymousid = function(t) {
    e().v("setAnonymousId: %s", t);
    I().setAnonymousid(t);
    ut().send()
  };
  this.setAppVersion = function(t) {
    t && "string" != typeof t ? e().w("setAppVersion方法只接受字符串类型参数") : C.instance().setAppVersion(t)
  };
  this.setAlipayUserid = function(t) {
    if (t && "string" != typeof t) e().w("setAlipayUserid方法只接受字符串类型参数");
    else {
      e().v("setAlipayUserid: %s", t);
      I().setAlipayUserid(t)
    }
  };
  this.setDeviceId = function(t) {
    if ("string" == typeof t) {
      I().setDeviceId(t);
      return t
    }
  };
  this.setSuperProperty = function(t) {
    if (t && "string" != typeof t) e().w("超级属性只支持字符串类型");
    else {
      var n = this;
      if (C.instance().getSuperProperty() !== t) {
        C.instance().setSuperProperty(t);
        n.pause((function() {
          n.resume()
        }))
      }
    }
  };
  this.trackEvent = function(n, r) {
    if (t) {
      e().v("event: ", n, r);
      if (function(t, n) {
          if (!t || "string" != typeof t) {
            e().e('please check trackEvent id. id should be "string" and not null');
            return !1
          }
          var i = ["id", "ts", "du"],
            r = {};
          i.forEach((function(t) {
            r[t] = 1
          }));
          if (r[t]) {
            e().e("eventId不能与以下保留字冲突: " + i.join(","));
            return !1
          }
          if (t.length > f.MAX_EVENTID_LENGTH) {
            e().e("The maximum length of event id shall not exceed " + f.MAX_EVENTID_LENGTH);
            return !1
          }
          if (n && ("object" != typeof n || Array.isArray(n)) && "string" != typeof n) {
            e().e("please check trackEvent properties. properties should be string or object(not include Array)");
            return !1
          }
          if ("object" == typeof n) {
            var o = 0;
            for (var s in n)
              if ({}.hasOwnProperty.call(n, s)) {
                if (s.length > f.MAX_PROPERTY_KEY_LENGTH) {
                  e().e("The maximum length of property key shall not exceed " + f.MAX_PROPERTY_KEY_LENGTH);
                  return !1
                }
                if (o >= f.MAX_PROPERTY_KEYS_COUNT) {
                  e().e("The maximum count of properties shall not exceed " + f.MAX_PROPERTY_KEYS_COUNT);
                  return !1
                }
                if (r[s]) {
                  e().e("属性中的key不能与以下保留字冲突: " + i.join(","));
                  return !1
                }
                o += 1
              }
          }
          return !0
        }(n, r)) {
        var o = new ft(n, r);
        U().addEvent(o);
        var s = !!K(),
          a = s ? 0 : f.EVENT_SEND_DEFAULT_INTERVAL,
          u = Date.now();
        if (function(t, e) {
            return "number" != typeof i || "number" != typeof e || i <= 0 || t - i > e
          }(u, a)) {
          i = u;
          ut().send(b, {
            noCache: s
          }, (function() {}))
        }
      }
    }
  };
  this.trackShare = function(n) {
    if (t) try {
      if (c.getSdkType().indexOf("game") > -1) {
        n = E().add(n, !0);
        e().v("shareQuery: ", n)
      } else {
        n = E().add(n, !1);
        e().v("sharePath: ", n.path)
      }
    } catch (t) {
      e().v("shareAppMessage: ", t)
    }
    return n
  };
  this.trackPageStart = function(e) {
    t && S().addPageStart(e)
  };
  this.trackPageEnd = function(e) {
    t && S().addPageEnd(e)
  };
  this.onShareAppMessage = function(t) {
    var e = this;
    c.onShareAppMessage((function() {
      return e.trackShare(t())
    }))
  };
  this.shareAppMessage = function(t) {
    this.trackShare(t);
    c.shareAppMessage(t)
  }
}
var dt = [];

function ht() {}
ht.prototype = {
  createMethod: function(t, n, i) {
    try {
      t[n] = i && i[n] ? function() {
        return i[n].apply(i, arguments)
      } : function() {
        dt.push([n, [].slice.call(arguments)])
      }
    } catch (t) {
      e().v("create method errror: ", t)
    }
  },
  installApi: function(t, n) {
    try {
      var i, r, o = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setAppVersion,setAlipayUserid,setSuperProperty,setDeviceId,removeUserid".split(",");
      for (i = 0, r = o.length; i < r; i++) this.createMethod(t, o[i], n);
      if (n)
        for (i = 0, r = dt.length; i < r; i++) {
          var s = dt[i];
          try {
            n[s[0]].apply(n, s[1])
          } catch (t) {
            e().v("impl[v[0]].apply error: ", s[0], t)
          }
        }
    } catch (t) {
      e().v("install api errror: ", t)
    }
  }
};
var lt = [f.ENDPOINT, f.ENDPOINTB];

function gt(t, n) {
  var i, r;
  0 === t || 1 === t && n ? i = f.ENDPOINT : 2 === t && n ? i = f.ENDPOINTB : n && (i = lt[t]);
  if (t >= lt.length || n) {
    n && (r = i, f.ENDPOINT = r);
    n && e().v("命中可用服务", i);
    !n && e().tip_w("未命中可用服务");
    return !1
  }
  c.request({
    url: f.ENDPOINT + "/uminiprogram_logs/ckdh",
    success: function(e) {
      200 === (e.code || e.status || e.statusCode) && e.data && 200 === e.data.code ? gt(t + 1, !0) : gt(t + 1, !1)
    },
    fail: function() {
      gt(t + 1, !1)
    }
  })
}
var yt = {
    init: function(t) {
      f.ENDPOINTB && setTimeout((function() {
        gt(0, !1)
      }), t)
    }
  },
  _t = new ht,
  vt = {
    _inited: !1,
    _log: e(),
    preinit: function(t) {
      if (t && "object" == typeof t)
        for (var e in t) f[e] = t[e];
      return f
    },
    use: function(t, e) {
      t && p.isFunction(t.install) ? t.install(vt, e) : p.isFunction(t) && t(vt, e);
      return vt
    },
    messager: l,
    init: function(t) {
      if (this._inited) e().v("已经实例过，请避免重复初始化");
      else if (t)
        if (t.appKey) {
          "boolean" != typeof t.useOpenid && (t.useOpenid = !0);
          d().set(t);
          e().setDebug(t.debug);
          this._inited = !0;
          var n = this;
          l.emit(l.messageType.CONFIG_LOADED, t);
          try {
            var i = new pt;
            e().v("成功创建Lib对象");
            0;
            i.init((function() {
              e().v("Lib对象初始化成功");
              _t.installApi(n, i);
              e().v("安装Lib接口成功");
              l.emit(l.messageType.UMA_LIB_INITED, t)
            }));
            yt.init(3e3)
          } catch (t) {
            e().w("创建Lib对象异常: " + t)
          }
        } else e().err("请确保传入正确的appkey");
      else e().err("请正确设置相关信息！")
    }
  };
try {
  _t.installApi(vt, null)
} catch (t) {
  e().w("uma赋值异常: ", t)
}
var mt = "",
  It = {};

function St(t) {
  t && (mt = t)
}

function At(t, e) {
  if (t.onShareAppMessage) {
    var n = t.onShareAppMessage;
    t.onShareAppMessage = function(t) {
      var i = n.call(this, t) || {},
        r = function(t, e) {
          if (!t) return "";
          var n = [];
          for (var i in e) "_um_ssrc" !== i && "_um_sts" !== i && n.push(i + "=" + e[i]);
          var r = n.join("&");
          return r ? t + "?" + r : t
        }(mt, It[mt]);
      !i.path && r && (i.path = r);
      var o = e.trackShare.call(this, i);
      return void 0 === o ? i : o
    }
  }
}
var Et = {};

function Ot(t, e, n) {
  var i = t[e];
  t[e] = function(t) {
    n.call(this, t);
    i && i.call(this, t)
  }
}

function Nt(t) {
  try {
    Et = t ? p.clone(t) : {};
    e().v("App onShow: ", t, Et)
  } catch (t) {
    e().v("onAppShow: ", t)
  }
}

function Tt() {
  try {
    vt.pause()
  } catch (t) {
    e().v("onAppHide: ", t)
  }
}

function Ut(t) {
  try {
    St(this.route);
    t && (n = this.route, i = t, n && (It[n] = i));
    if (t) {
      Et.query = Et.query || {};
      p.assign(Et.query, t)
    }
    e().v("Page onLoad: ", t, Et)
  } catch (t) {
    e().v("onPageLoad: ", t)
  }
  var n, i
}

function kt() {
  try {
    St(this.route);
    vt.resume(Et);
    vt.trackPageStart(this.route)
  } catch (t) {
    e().v("onPageShow: ", t)
  }
}

function Pt() {
  try {
    vt.trackPageEnd(this.route)
  } catch (t) {
    e().v("onPageHide: ", t)
  }
}
try {
  var Dt = App;
  App = function(t) {
    Ot(t, "onLaunch", (function() {
      ! function(t) {
        try {
          c.getSystemInfo((function(n) {
            n && n.version && "alipay" === n.app && p.compareVersion(n.version, f.ALIPAY_AVAILABLE_VERSION) < 0 ? e().err("只支持版本号大于等于10.1.52的支付宝客户端！") : vt.init(t)
          }))
        } catch (t) {
          e().v("onAppLaunch: ", t)
        }
      }(t.umengConfig)
    }));
    Ot(t, "onShow", Nt);
    Ot(t, "onHide", Tt);
    At(t, vt);
    Dt(t)
  }
} catch (t) {
  e().w("App重写异常")
}
try {
  var Rt = Page;
  Page = function(t) {
    Ot(t, "onShow", kt);
    Ot(t, "onHide", Pt);
    Ot(t, "onUnload", Pt);
    Ot(t, "onLoad", Ut);
    At(t, vt);
    Rt(t)
  }
} catch (t) {
  e().w("Page重写异常")
}
dd.uma = vt;
module.exports = vt;
