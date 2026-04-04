"use strict";
(() => {
  var N0 = Object.create;
  var pl = Object.defineProperty;
  var O0 = Object.getOwnPropertyDescriptor;
  var M0 = Object.getOwnPropertyNames;
  var b0 = Object.getPrototypeOf,
    j0 = Object.prototype.hasOwnProperty;
  var U0 = (e, t, n) =>
    t in e ? pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
  var Ne = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Au = (e, t) => {
      for (var n in t) pl(e, n, { get: t[n], enumerable: !0 });
    },
    H0 = (e, t, n, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of M0(t))
          !j0.call(e, i) &&
            i !== n &&
            pl(e, i, { get: () => t[i], enumerable: !(r = O0(t, i)) || r.enumerable });
      return e;
    };
  var rr = (e, t, n) => (
    (n = e != null ? N0(b0(e)) : {}),
    H0(t || !e || !e.__esModule ? pl(n, "default", { value: e, enumerable: !0 }) : n, e)
  );
  var An = (e, t, n) => U0(e, typeof t != "symbol" ? t + "" : t, n);
  var Gf = Ne((V) => {
    "use strict";
    var Xr = Symbol.for("react.element"),
      V0 = Symbol.for("react.portal"),
      W0 = Symbol.for("react.fragment"),
      $0 = Symbol.for("react.strict_mode"),
      Q0 = Symbol.for("react.profiler"),
      q0 = Symbol.for("react.provider"),
      K0 = Symbol.for("react.context"),
      X0 = Symbol.for("react.forward_ref"),
      Y0 = Symbol.for("react.suspense"),
      G0 = Symbol.for("react.memo"),
      J0 = Symbol.for("react.lazy"),
      jf = Symbol.iterator;
    function Z0(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (jf && e[jf]) || e["@@iterator"]), typeof e == "function" ? e : null);
    }
    var Vf = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Wf = Object.assign,
      $f = {};
    function ir(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = $f), (this.updater = n || Vf));
    }
    ir.prototype.isReactComponent = {};
    ir.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    ir.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function Qf() {}
    Qf.prototype = ir.prototype;
    function Pu(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = $f), (this.updater = n || Vf));
    }
    var Iu = (Pu.prototype = new Qf());
    Iu.constructor = Pu;
    Wf(Iu, ir.prototype);
    Iu.isPureReactComponent = !0;
    var Uf = Array.isArray,
      qf = Object.prototype.hasOwnProperty,
      Lu = { current: null },
      Kf = { key: !0, ref: !0, __self: !0, __source: !0 };
    function Xf(e, t, n) {
      var r,
        i = {},
        l = null,
        o = null;
      if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = "" + t.key), t))
          qf.call(t, r) && !Kf.hasOwnProperty(r) && (i[r] = t[r]);
      var u = arguments.length - 2;
      if (u === 1) i.children = n;
      else if (1 < u) {
        for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
        i.children = a;
      }
      if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
      return { $$typeof: Xr, type: e, key: l, ref: o, props: i, _owner: Lu.current };
    }
    function e1(e, t) {
      return { $$typeof: Xr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
    }
    function _u(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Xr;
    }
    function t1(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (n) {
          return t[n];
        })
      );
    }
    var Hf = /\/+/g;
    function Tu(e, t) {
      return typeof e == "object" && e !== null && e.key != null ? t1("" + e.key) : t.toString(36);
    }
    function dl(e, t, n, r, i) {
      var l = typeof e;
      (l === "undefined" || l === "boolean") && (e = null);
      var o = !1;
      if (e === null) o = !0;
      else
        switch (l) {
          case "string":
          case "number":
            o = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case Xr:
              case V0:
                o = !0;
            }
        }
      if (o)
        return (
          (o = e),
          (i = i(o)),
          (e = r === "" ? "." + Tu(o, 0) : r),
          Uf(i)
            ? ((n = ""),
              e != null && (n = e.replace(Hf, "$&/") + "/"),
              dl(i, t, n, "", function (s) {
                return s;
              }))
            : i != null &&
              (_u(i) &&
                (i = e1(
                  i,
                  n +
                    (!i.key || (o && o.key === i.key)
                      ? ""
                      : ("" + i.key).replace(Hf, "$&/") + "/") +
                    e,
                )),
              t.push(i)),
          1
        );
      if (((o = 0), (r = r === "" ? "." : r + ":"), Uf(e)))
        for (var u = 0; u < e.length; u++) {
          l = e[u];
          var a = r + Tu(l, u);
          o += dl(l, t, n, a, i);
        }
      else if (((a = Z0(e)), typeof a == "function"))
        for (e = a.call(e), u = 0; !(l = e.next()).done; )
          ((l = l.value), (a = r + Tu(l, u++)), (o += dl(l, t, n, a, i)));
      else if (l === "object")
        throw (
          (t = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              (t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      return o;
    }
    function ml(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        dl(e, r, "", "", function (l) {
          return t.call(n, l, i++);
        }),
        r
      );
    }
    function n1(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (n) {
              (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
            },
            function (n) {
              (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var Le = { current: null },
      hl = { transition: null },
      r1 = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: hl, ReactCurrentOwner: Lu };
    function Yf() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    V.Children = {
      map: ml,
      forEach: function (e, t, n) {
        ml(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          ml(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          ml(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!_u(e))
          throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      },
    };
    V.Component = ir;
    V.Fragment = W0;
    V.Profiler = Q0;
    V.PureComponent = Pu;
    V.StrictMode = $0;
    V.Suspense = Y0;
    V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r1;
    V.act = Yf;
    V.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var r = Wf({}, e.props),
        i = e.key,
        l = e.ref,
        o = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((l = t.ref), (o = Lu.current)),
          t.key !== void 0 && (i = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var u = e.type.defaultProps;
        for (a in t)
          qf.call(t, a) &&
            !Kf.hasOwnProperty(a) &&
            (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
      }
      var a = arguments.length - 2;
      if (a === 1) r.children = n;
      else if (1 < a) {
        u = Array(a);
        for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
        r.children = u;
      }
      return { $$typeof: Xr, type: e.type, key: i, ref: l, props: r, _owner: o };
    };
    V.createContext = function (e) {
      return (
        (e = {
          $$typeof: K0,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: q0, _context: e }),
        (e.Consumer = e)
      );
    };
    V.createElement = Xf;
    V.createFactory = function (e) {
      var t = Xf.bind(null, e);
      return ((t.type = e), t);
    };
    V.createRef = function () {
      return { current: null };
    };
    V.forwardRef = function (e) {
      return { $$typeof: X0, render: e };
    };
    V.isValidElement = _u;
    V.lazy = function (e) {
      return { $$typeof: J0, _payload: { _status: -1, _result: e }, _init: n1 };
    };
    V.memo = function (e, t) {
      return { $$typeof: G0, type: e, compare: t === void 0 ? null : t };
    };
    V.startTransition = function (e) {
      var t = hl.transition;
      hl.transition = {};
      try {
        e();
      } finally {
        hl.transition = t;
      }
    };
    V.unstable_act = Yf;
    V.useCallback = function (e, t) {
      return Le.current.useCallback(e, t);
    };
    V.useContext = function (e) {
      return Le.current.useContext(e);
    };
    V.useDebugValue = function () {};
    V.useDeferredValue = function (e) {
      return Le.current.useDeferredValue(e);
    };
    V.useEffect = function (e, t) {
      return Le.current.useEffect(e, t);
    };
    V.useId = function () {
      return Le.current.useId();
    };
    V.useImperativeHandle = function (e, t, n) {
      return Le.current.useImperativeHandle(e, t, n);
    };
    V.useInsertionEffect = function (e, t) {
      return Le.current.useInsertionEffect(e, t);
    };
    V.useLayoutEffect = function (e, t) {
      return Le.current.useLayoutEffect(e, t);
    };
    V.useMemo = function (e, t) {
      return Le.current.useMemo(e, t);
    };
    V.useReducer = function (e, t, n) {
      return Le.current.useReducer(e, t, n);
    };
    V.useRef = function (e) {
      return Le.current.useRef(e);
    };
    V.useState = function (e) {
      return Le.current.useState(e);
    };
    V.useSyncExternalStore = function (e, t, n) {
      return Le.current.useSyncExternalStore(e, t, n);
    };
    V.useTransition = function () {
      return Le.current.useTransition();
    };
    V.version = "18.3.1";
  });
  var Yr = Ne((cC, Jf) => {
    "use strict";
    Jf.exports = Gf();
  });
  var ap = Ne((G) => {
    "use strict";
    function Nu(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          i = e[r];
        if (0 < gl(i, t)) ((e[r] = t), (e[n] = i), (n = r));
        else break e;
      }
    }
    function ft(e) {
      return e.length === 0 ? null : e[0];
    }
    function kl(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, i = e.length, l = i >>> 1; r < l; ) {
          var o = 2 * (r + 1) - 1,
            u = e[o],
            a = o + 1,
            s = e[a];
          if (0 > gl(u, n))
            a < i && 0 > gl(s, u)
              ? ((e[r] = s), (e[a] = n), (r = a))
              : ((e[r] = u), (e[o] = n), (r = o));
          else if (a < i && 0 > gl(s, n)) ((e[r] = s), (e[a] = n), (r = a));
          else break e;
        }
      }
      return t;
    }
    function gl(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n !== 0 ? n : e.id - t.id;
    }
    typeof performance == "object" && typeof performance.now == "function"
      ? ((Zf = performance),
        (G.unstable_now = function () {
          return Zf.now();
        }))
      : ((zu = Date),
        (ep = zu.now()),
        (G.unstable_now = function () {
          return zu.now() - ep;
        }));
    var Zf,
      zu,
      ep,
      wt = [],
      Xt = [],
      i1 = 1,
      Ze = null,
      Ce = 3,
      xl = !1,
      Tn = !1,
      Jr = !1,
      rp = typeof setTimeout == "function" ? setTimeout : null,
      ip = typeof clearTimeout == "function" ? clearTimeout : null,
      tp = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ou(e) {
      for (var t = ft(Xt); t !== null; ) {
        if (t.callback === null) kl(Xt);
        else if (t.startTime <= e) (kl(Xt), (t.sortIndex = t.expirationTime), Nu(wt, t));
        else break;
        t = ft(Xt);
      }
    }
    function Mu(e) {
      if (((Jr = !1), Ou(e), !Tn))
        if (ft(wt) !== null) ((Tn = !0), ju(bu));
        else {
          var t = ft(Xt);
          t !== null && Uu(Mu, t.startTime - e);
        }
    }
    function bu(e, t) {
      ((Tn = !1), Jr && ((Jr = !1), ip(Zr), (Zr = -1)), (xl = !0));
      var n = Ce;
      try {
        for (Ou(t), Ze = ft(wt); Ze !== null && (!(Ze.expirationTime > t) || (e && !up())); ) {
          var r = Ze.callback;
          if (typeof r == "function") {
            ((Ze.callback = null), (Ce = Ze.priorityLevel));
            var i = r(Ze.expirationTime <= t);
            ((t = G.unstable_now()),
              typeof i == "function" ? (Ze.callback = i) : Ze === ft(wt) && kl(wt),
              Ou(t));
          } else kl(wt);
          Ze = ft(wt);
        }
        if (Ze !== null) var l = !0;
        else {
          var o = ft(Xt);
          (o !== null && Uu(Mu, o.startTime - t), (l = !1));
        }
        return l;
      } finally {
        ((Ze = null), (Ce = n), (xl = !1));
      }
    }
    var vl = !1,
      yl = null,
      Zr = -1,
      lp = 5,
      op = -1;
    function up() {
      return !(G.unstable_now() - op < lp);
    }
    function Bu() {
      if (yl !== null) {
        var e = G.unstable_now();
        op = e;
        var t = !0;
        try {
          t = yl(!0, e);
        } finally {
          t ? Gr() : ((vl = !1), (yl = null));
        }
      } else vl = !1;
    }
    var Gr;
    typeof tp == "function"
      ? (Gr = function () {
          tp(Bu);
        })
      : typeof MessageChannel < "u"
        ? ((Ru = new MessageChannel()),
          (np = Ru.port2),
          (Ru.port1.onmessage = Bu),
          (Gr = function () {
            np.postMessage(null);
          }))
        : (Gr = function () {
            rp(Bu, 0);
          });
    var Ru, np;
    function ju(e) {
      ((yl = e), vl || ((vl = !0), Gr()));
    }
    function Uu(e, t) {
      Zr = rp(function () {
        e(G.unstable_now());
      }, t);
    }
    G.unstable_IdlePriority = 5;
    G.unstable_ImmediatePriority = 1;
    G.unstable_LowPriority = 4;
    G.unstable_NormalPriority = 3;
    G.unstable_Profiling = null;
    G.unstable_UserBlockingPriority = 2;
    G.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    G.unstable_continueExecution = function () {
      Tn || xl || ((Tn = !0), ju(bu));
    };
    G.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (lp = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    G.unstable_getCurrentPriorityLevel = function () {
      return Ce;
    };
    G.unstable_getFirstCallbackNode = function () {
      return ft(wt);
    };
    G.unstable_next = function (e) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = Ce;
      }
      var n = Ce;
      Ce = t;
      try {
        return e();
      } finally {
        Ce = n;
      }
    };
    G.unstable_pauseExecution = function () {};
    G.unstable_requestPaint = function () {};
    G.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = Ce;
      Ce = e;
      try {
        return t();
      } finally {
        Ce = n;
      }
    };
    G.unstable_scheduleCallback = function (e, t, n) {
      var r = G.unstable_now();
      switch (
        (typeof n == "object" && n !== null
          ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
          : (n = r),
        e)
      ) {
        case 1:
          var i = -1;
          break;
        case 2:
          i = 250;
          break;
        case 5:
          i = 1073741823;
          break;
        case 4:
          i = 1e4;
          break;
        default:
          i = 5e3;
      }
      return (
        (i = n + i),
        (e = {
          id: i1++,
          callback: t,
          priorityLevel: e,
          startTime: n,
          expirationTime: i,
          sortIndex: -1,
        }),
        n > r
          ? ((e.sortIndex = n),
            Nu(Xt, e),
            ft(wt) === null &&
              e === ft(Xt) &&
              (Jr ? (ip(Zr), (Zr = -1)) : (Jr = !0), Uu(Mu, n - r)))
          : ((e.sortIndex = i), Nu(wt, e), Tn || xl || ((Tn = !0), ju(bu))),
        e
      );
    };
    G.unstable_shouldYield = up;
    G.unstable_wrapCallback = function (e) {
      var t = Ce;
      return function () {
        var n = Ce;
        Ce = t;
        try {
          return e.apply(this, arguments);
        } finally {
          Ce = n;
        }
      };
    };
  });
  var cp = Ne((pC, sp) => {
    "use strict";
    sp.exports = ap();
  });
  var dh = Ne((Ye) => {
    "use strict";
    var l1 = Yr(),
      Ke = cp();
    function T(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var ym = new Set(),
      wi = {};
    function Un(e, t) {
      (Fr(e, t), Fr(e + "Capture", t));
    }
    function Fr(e, t) {
      for (wi[e] = t, e = 0; e < t.length; e++) ym.add(t[e]);
    }
    var bt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      ca = Object.prototype.hasOwnProperty,
      o1 =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      fp = {},
      pp = {};
    function u1(e) {
      return ca.call(pp, e)
        ? !0
        : ca.call(fp, e)
          ? !1
          : o1.test(e)
            ? (pp[e] = !0)
            : ((fp[e] = !0), !1);
    }
    function a1(e, t, n, r) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return r
            ? !1
            : n !== null
              ? !n.acceptsBooleans
              : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function s1(e, t, n, r) {
      if (t === null || typeof t > "u" || a1(e, t, n, r)) return !0;
      if (r) return !1;
      if (n !== null)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function Be(e, t, n, r, i, l, o) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o));
    }
    var Ee = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        Ee[e] = new Be(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Ee[t] = new Be(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      Ee[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        Ee[e] = new Be(e, 2, !1, e, null, !1, !1);
      },
    );
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Ee[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Ee[e] = new Be(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      Ee[e] = new Be(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Ee[e] = new Be(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      Ee[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var ns = /[\-:]([a-z])/g;
    function rs(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ns, rs);
        Ee[t] = new Be(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ns, rs);
        Ee[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ns, rs);
      Ee[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Ee[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Ee.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Ee[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function is(e, t, n, r) {
      var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
      (i !== null
        ? i.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (s1(t, n, i, r) && (n = null),
        r || i === null
          ? u1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((i = i.type),
                  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Vt = l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      wl = Symbol.for("react.element"),
      ur = Symbol.for("react.portal"),
      ar = Symbol.for("react.fragment"),
      ls = Symbol.for("react.strict_mode"),
      fa = Symbol.for("react.profiler"),
      km = Symbol.for("react.provider"),
      xm = Symbol.for("react.context"),
      os = Symbol.for("react.forward_ref"),
      pa = Symbol.for("react.suspense"),
      ma = Symbol.for("react.suspense_list"),
      us = Symbol.for("react.memo"),
      Gt = Symbol.for("react.lazy"),
      vm = Symbol.for("react.offscreen"),
      mp = Symbol.iterator;
    function ei(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (mp && e[mp]) || e["@@iterator"]), typeof e == "function" ? e : null);
    }
    var ie = Object.assign,
      Hu;
    function ai(e) {
      if (Hu === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Hu = (t && t[1]) || "";
        }
      return (
        `
` +
        Hu +
        e
      );
    }
    var Vu = !1;
    function Wu(e, t) {
      if (!e || Vu) return "";
      Vu = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (s) {
              var r = s;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (s) {
              r = s;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (s) {
            r = s;
          }
          e();
        }
      } catch (s) {
        if (s && r && typeof s.stack == "string") {
          for (
            var i = s.stack.split(`
`),
              l = r.stack.split(`
`),
              o = i.length - 1,
              u = l.length - 1;
            1 <= o && 0 <= u && i[o] !== l[u];
          )
            u--;
          for (; 1 <= o && 0 <= u; o--, u--)
            if (i[o] !== l[u]) {
              if (o !== 1 || u !== 1)
                do
                  if ((o--, u--, 0 > u || i[o] !== l[u])) {
                    var a =
                      `
` + i[o].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        a.includes("<anonymous>") &&
                        (a = a.replace("<anonymous>", e.displayName)),
                      a
                    );
                  }
                while (1 <= o && 0 <= u);
              break;
            }
        }
      } finally {
        ((Vu = !1), (Error.prepareStackTrace = n));
      }
      return (e = e ? e.displayName || e.name : "") ? ai(e) : "";
    }
    function c1(e) {
      switch (e.tag) {
        case 5:
          return ai(e.type);
        case 16:
          return ai("Lazy");
        case 13:
          return ai("Suspense");
        case 19:
          return ai("SuspenseList");
        case 0:
        case 2:
        case 15:
          return ((e = Wu(e.type, !1)), e);
        case 11:
          return ((e = Wu(e.type.render, !1)), e);
        case 1:
          return ((e = Wu(e.type, !0)), e);
        default:
          return "";
      }
    }
    function da(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case ar:
          return "Fragment";
        case ur:
          return "Portal";
        case fa:
          return "Profiler";
        case ls:
          return "StrictMode";
        case pa:
          return "Suspense";
        case ma:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case xm:
            return (e.displayName || "Context") + ".Consumer";
          case km:
            return (e._context.displayName || "Context") + ".Provider";
          case os:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case us:
            return ((t = e.displayName || null), t !== null ? t : da(e.type) || "Memo");
          case Gt:
            ((t = e._payload), (e = e._init));
            try {
              return da(e(t));
            } catch {}
        }
      return null;
    }
    function f1(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ""),
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return da(t);
        case 8:
          return t === ls ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function pn(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function wm(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function p1(e) {
      var t = wm(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
      ) {
        var i = n.get,
          l = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (o) {
              ((r = "" + o), l.call(this, o));
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (o) {
              r = "" + o;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Dl(e) {
      e._valueTracker || (e._valueTracker = p1(e));
    }
    function Dm(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = wm(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
      );
    }
    function Yl(e) {
      if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function ha(e, t) {
      var n = t.checked;
      return ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
      });
    }
    function dp(e, t) {
      var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
      ((n = pn(t.value != null ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        }));
    }
    function Em(e, t) {
      ((t = t.checked), t != null && is(e, "checked", t, !1));
    }
    function ga(e, t) {
      Em(e, t);
      var n = pn(t.value),
        r = t.type;
      if (n != null)
        r === "number"
          ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
      }
      (t.hasOwnProperty("value")
        ? ya(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && ya(e, t.type, pn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
    }
    function hp(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null)))
          return;
        ((t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n));
    }
    function ya(e, t, n) {
      (t !== "number" || Yl(e.ownerDocument) !== e) &&
        (n == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var si = Array.isArray;
    function xr(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = "" + pn(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function ka(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
      return ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function gp(e, t) {
      var n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(T(92));
          if (si(n)) {
            if (1 < n.length) throw Error(T(93));
            n = n[0];
          }
          t = n;
        }
        (t == null && (t = ""), (n = t));
      }
      e._wrapperState = { initialValue: pn(n) };
    }
    function Cm(e, t) {
      var n = pn(t.value),
        r = pn(t.defaultValue);
      (n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r));
    }
    function yp(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Fm(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function xa(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Fm(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
    }
    var El,
      Sm = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            El = El || document.createElement("div"),
              El.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = El.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function Di(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var pi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      m1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pi).forEach(function (e) {
      m1.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pi[t] = pi[e]));
      });
    });
    function Am(e, t, n) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || (pi.hasOwnProperty(e) && pi[e])
          ? ("" + t).trim()
          : t + "px";
    }
    function Tm(e, t) {
      e = e.style;
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0,
            i = Am(n, t[n], r);
          (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
        }
    }
    var d1 = ie(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function va(e, t) {
      if (t) {
        if (d1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(T(60));
          if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(T(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(T(62));
      }
    }
    function wa(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Da = null;
    function as(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Ea = null,
      vr = null,
      wr = null;
    function kp(e) {
      if ((e = ji(e))) {
        if (typeof Ea != "function") throw Error(T(280));
        var t = e.stateNode;
        t && ((t = Fo(t)), Ea(e.stateNode, e.type, t));
      }
    }
    function Pm(e) {
      vr ? (wr ? wr.push(e) : (wr = [e])) : (vr = e);
    }
    function Im() {
      if (vr) {
        var e = vr,
          t = wr;
        if (((wr = vr = null), kp(e), t)) for (e = 0; e < t.length; e++) kp(t[e]);
      }
    }
    function Lm(e, t) {
      return e(t);
    }
    function _m() {}
    var $u = !1;
    function zm(e, t, n) {
      if ($u) return e(t, n);
      $u = !0;
      try {
        return Lm(e, t, n);
      } finally {
        (($u = !1), (vr !== null || wr !== null) && (_m(), Im()));
      }
    }
    function Ei(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = Fo(n);
      if (r === null) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
            (e = !r));
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != "function") throw Error(T(231, t, typeof n));
      return n;
    }
    var Ca = !1;
    if (bt)
      try {
        ((lr = {}),
          Object.defineProperty(lr, "passive", {
            get: function () {
              Ca = !0;
            },
          }),
          window.addEventListener("test", lr, lr),
          window.removeEventListener("test", lr, lr));
      } catch {
        Ca = !1;
      }
    var lr;
    function h1(e, t, n, r, i, l, o, u, a) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (c) {
        this.onError(c);
      }
    }
    var mi = !1,
      Gl = null,
      Jl = !1,
      Fa = null,
      g1 = {
        onError: function (e) {
          ((mi = !0), (Gl = e));
        },
      };
    function y1(e, t, n, r, i, l, o, u, a) {
      ((mi = !1), (Gl = null), h1.apply(g1, arguments));
    }
    function k1(e, t, n, r, i, l, o, u, a) {
      if ((y1.apply(this, arguments), mi)) {
        if (mi) {
          var s = Gl;
          ((mi = !1), (Gl = null));
        } else throw Error(T(198));
        Jl || ((Jl = !0), (Fa = s));
      }
    }
    function Hn(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function Bm(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function xp(e) {
      if (Hn(e) !== e) throw Error(T(188));
    }
    function x1(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = Hn(e)), t === null)) throw Error(T(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === l.child) {
          for (l = i.child; l; ) {
            if (l === n) return (xp(i), e);
            if (l === r) return (xp(i), t);
            l = l.sibling;
          }
          throw Error(T(188));
        }
        if (n.return !== r.return) ((n = i), (r = l));
        else {
          for (var o = !1, u = i.child; u; ) {
            if (u === n) {
              ((o = !0), (n = i), (r = l));
              break;
            }
            if (u === r) {
              ((o = !0), (r = i), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!o) {
            for (u = l.child; u; ) {
              if (u === n) {
                ((o = !0), (n = l), (r = i));
                break;
              }
              if (u === r) {
                ((o = !0), (r = l), (n = i));
                break;
              }
              u = u.sibling;
            }
            if (!o) throw Error(T(189));
          }
        }
        if (n.alternate !== r) throw Error(T(190));
      }
      if (n.tag !== 3) throw Error(T(188));
      return n.stateNode.current === n ? e : t;
    }
    function Rm(e) {
      return ((e = x1(e)), e !== null ? Nm(e) : null);
    }
    function Nm(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = Nm(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var Om = Ke.unstable_scheduleCallback,
      vp = Ke.unstable_cancelCallback,
      v1 = Ke.unstable_shouldYield,
      w1 = Ke.unstable_requestPaint,
      se = Ke.unstable_now,
      D1 = Ke.unstable_getCurrentPriorityLevel,
      ss = Ke.unstable_ImmediatePriority,
      Mm = Ke.unstable_UserBlockingPriority,
      Zl = Ke.unstable_NormalPriority,
      E1 = Ke.unstable_LowPriority,
      bm = Ke.unstable_IdlePriority,
      wo = null,
      Ft = null;
    function C1(e) {
      if (Ft && typeof Ft.onCommitFiberRoot == "function")
        try {
          Ft.onCommitFiberRoot(wo, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var gt = Math.clz32 ? Math.clz32 : A1,
      F1 = Math.log,
      S1 = Math.LN2;
    function A1(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((F1(e) / S1) | 0)) | 0);
    }
    var Cl = 64,
      Fl = 4194304;
    function ci(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function eo(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        o = n & 268435455;
      if (o !== 0) {
        var u = o & ~i;
        u !== 0 ? (r = ci(u)) : ((l &= o), l !== 0 && (r = ci(l)));
      } else ((o = n & ~i), o !== 0 ? (r = ci(o)) : l !== 0 && (r = ci(l)));
      if (r === 0) return 0;
      if (
        t !== 0 &&
        t !== r &&
        (t & i) === 0 &&
        ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
      )
        return t;
      if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
          ((n = 31 - gt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
      return r;
    }
    function T1(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function P1(e, t) {
      for (
        var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes;
        0 < l;
      ) {
        var o = 31 - gt(l),
          u = 1 << o,
          a = i[o];
        (a === -1
          ? ((u & n) === 0 || (u & r) !== 0) && (i[o] = T1(u, t))
          : a <= t && (e.expiredLanes |= u),
          (l &= ~u));
      }
    }
    function Sa(e) {
      return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
    }
    function jm() {
      var e = Cl;
      return ((Cl <<= 1), (Cl & 4194240) === 0 && (Cl = 64), e);
    }
    function Qu(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Mi(e, t, n) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - gt(t)),
        (e[t] = n));
    }
    function I1(e, t) {
      var n = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var r = e.eventTimes;
      for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - gt(n),
          l = 1 << i;
        ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l));
      }
    }
    function cs(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - gt(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    var q = 0;
    function Um(e) {
      return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
    }
    var Hm,
      fs,
      Vm,
      Wm,
      $m,
      Aa = !1,
      Sl = [],
      rn = null,
      ln = null,
      on = null,
      Ci = new Map(),
      Fi = new Map(),
      Zt = [],
      L1 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " ",
        );
    function wp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          rn = null;
          break;
        case "dragenter":
        case "dragleave":
          ln = null;
          break;
        case "mouseover":
        case "mouseout":
          on = null;
          break;
        case "pointerover":
        case "pointerout":
          Ci.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Fi.delete(t.pointerId);
      }
    }
    function ti(e, t, n, r, i, l) {
      return e === null || e.nativeEvent !== l
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [i],
          }),
          t !== null && ((t = ji(t)), t !== null && fs(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function _1(e, t, n, r, i) {
      switch (t) {
        case "focusin":
          return ((rn = ti(rn, e, t, n, r, i)), !0);
        case "dragenter":
          return ((ln = ti(ln, e, t, n, r, i)), !0);
        case "mouseover":
          return ((on = ti(on, e, t, n, r, i)), !0);
        case "pointerover":
          var l = i.pointerId;
          return (Ci.set(l, ti(Ci.get(l) || null, e, t, n, r, i)), !0);
        case "gotpointercapture":
          return ((l = i.pointerId), Fi.set(l, ti(Fi.get(l) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function Qm(e) {
      var t = Ln(e.target);
      if (t !== null) {
        var n = Hn(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = Bm(n)), t !== null)) {
              ((e.blockedOn = t),
                $m(e.priority, function () {
                  Vm(n);
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function jl(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Da = r), n.target.dispatchEvent(r), (Da = null));
        } else return ((t = ji(n)), t !== null && fs(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Dp(e, t, n) {
      jl(e) && n.delete(t);
    }
    function z1() {
      ((Aa = !1),
        rn !== null && jl(rn) && (rn = null),
        ln !== null && jl(ln) && (ln = null),
        on !== null && jl(on) && (on = null),
        Ci.forEach(Dp),
        Fi.forEach(Dp));
    }
    function ni(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Aa || ((Aa = !0), Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, z1)));
    }
    function Si(e) {
      function t(i) {
        return ni(i, e);
      }
      if (0 < Sl.length) {
        ni(Sl[0], e);
        for (var n = 1; n < Sl.length; n++) {
          var r = Sl[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        rn !== null && ni(rn, e),
          ln !== null && ni(ln, e),
          on !== null && ni(on, e),
          Ci.forEach(t),
          Fi.forEach(t),
          n = 0;
        n < Zt.length;
        n++
      )
        ((r = Zt[n]), r.blockedOn === e && (r.blockedOn = null));
      for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
        (Qm(n), n.blockedOn === null && Zt.shift());
    }
    var Dr = Vt.ReactCurrentBatchConfig,
      to = !0;
    function B1(e, t, n, r) {
      var i = q,
        l = Dr.transition;
      Dr.transition = null;
      try {
        ((q = 1), ps(e, t, n, r));
      } finally {
        ((q = i), (Dr.transition = l));
      }
    }
    function R1(e, t, n, r) {
      var i = q,
        l = Dr.transition;
      Dr.transition = null;
      try {
        ((q = 4), ps(e, t, n, r));
      } finally {
        ((q = i), (Dr.transition = l));
      }
    }
    function ps(e, t, n, r) {
      if (to) {
        var i = Ta(e, t, n, r);
        if (i === null) (Zu(e, t, r, no, n), wp(e, r));
        else if (_1(i, e, t, n, r)) r.stopPropagation();
        else if ((wp(e, r), t & 4 && -1 < L1.indexOf(e))) {
          for (; i !== null; ) {
            var l = ji(i);
            if (
              (l !== null && Hm(l), (l = Ta(e, t, n, r)), l === null && Zu(e, t, r, no, n), l === i)
            )
              break;
            i = l;
          }
          i !== null && r.stopPropagation();
        } else Zu(e, t, r, null, n);
      }
    }
    var no = null;
    function Ta(e, t, n, r) {
      if (((no = null), (e = as(r)), (e = Ln(e)), e !== null))
        if (((t = Hn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
          if (((e = Bm(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return ((no = e), null);
    }
    function qm(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (D1()) {
            case ss:
              return 1;
            case Mm:
              return 4;
            case Zl:
            case E1:
              return 16;
            case bm:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var tn = null,
      ms = null,
      Ul = null;
    function Km() {
      if (Ul) return Ul;
      var e,
        t = ms,
        n = t.length,
        r,
        i = "value" in tn ? tn.value : tn.textContent,
        l = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
      return (Ul = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Hl(e) {
      var t = e.keyCode;
      return (
        "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Al() {
      return !0;
    }
    function Ep() {
      return !1;
    }
    function Xe(e) {
      function t(n, r, i, l, o) {
        ((this._reactName = n),
          (this._targetInst = i),
          (this.type = r),
          (this.nativeEvent = l),
          (this.target = o),
          (this.currentTarget = null));
        for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
        return (
          (this.isDefaultPrevented = (
            l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
          )
            ? Al
            : Ep),
          (this.isPropagationStopped = Ep),
          this
        );
      }
      return (
        ie(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n &&
              (n.preventDefault
                ? n.preventDefault()
                : typeof n.returnValue != "unknown" && (n.returnValue = !1),
              (this.isDefaultPrevented = Al));
          },
          stopPropagation: function () {
            var n = this.nativeEvent;
            n &&
              (n.stopPropagation
                ? n.stopPropagation()
                : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
              (this.isPropagationStopped = Al));
          },
          persist: function () {},
          isPersistent: Al,
        }),
        t
      );
    }
    var _r = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      ds = Xe(_r),
      bi = ie({}, _r, { view: 0, detail: 0 }),
      N1 = Xe(bi),
      qu,
      Ku,
      ri,
      Do = ie({}, bi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: hs,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== ri &&
                (ri && e.type === "mousemove"
                  ? ((qu = e.screenX - ri.screenX), (Ku = e.screenY - ri.screenY))
                  : (Ku = qu = 0),
                (ri = e)),
              qu);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Ku;
        },
      }),
      Cp = Xe(Do),
      O1 = ie({}, Do, { dataTransfer: 0 }),
      M1 = Xe(O1),
      b1 = ie({}, bi, { relatedTarget: 0 }),
      Xu = Xe(b1),
      j1 = ie({}, _r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      U1 = Xe(j1),
      H1 = ie({}, _r, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      V1 = Xe(H1),
      W1 = ie({}, _r, { data: 0 }),
      Fp = Xe(W1),
      $1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      Q1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      q1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function K1(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = q1[e]) ? !!t[e] : !1;
    }
    function hs() {
      return K1;
    }
    var X1 = ie({}, bi, {
        key: function (e) {
          if (e.key) {
            var t = $1[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = Hl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
              ? Q1[e.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: hs,
        charCode: function (e) {
          return e.type === "keypress" ? Hl(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? Hl(e)
            : e.type === "keydown" || e.type === "keyup"
              ? e.keyCode
              : 0;
        },
      }),
      Y1 = Xe(X1),
      G1 = ie({}, Do, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Sp = Xe(G1),
      J1 = ie({}, bi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: hs,
      }),
      Z1 = Xe(J1),
      ek = ie({}, _r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      tk = Xe(ek),
      nk = ie({}, Do, {
        deltaX: function (e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      rk = Xe(nk),
      ik = [9, 13, 27, 32],
      gs = bt && "CompositionEvent" in window,
      di = null;
    bt && "documentMode" in document && (di = document.documentMode);
    var lk = bt && "TextEvent" in window && !di,
      Xm = bt && (!gs || (di && 8 < di && 11 >= di)),
      Ap = " ",
      Tp = !1;
    function Ym(e, t) {
      switch (e) {
        case "keyup":
          return ik.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gm(e) {
      return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
    }
    var sr = !1;
    function ok(e, t) {
      switch (e) {
        case "compositionend":
          return Gm(t);
        case "keypress":
          return t.which !== 32 ? null : ((Tp = !0), Ap);
        case "textInput":
          return ((e = t.data), e === Ap && Tp ? null : e);
        default:
          return null;
      }
    }
    function uk(e, t) {
      if (sr)
        return e === "compositionend" || (!gs && Ym(e, t))
          ? ((e = Km()), (Ul = ms = tn = null), (sr = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Xm && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var ak = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Pp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ak[e.type] : t === "textarea";
    }
    function Jm(e, t, n, r) {
      (Pm(r),
        (t = ro(t, "onChange")),
        0 < t.length &&
          ((n = new ds("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
    }
    var hi = null,
      Ai = null;
    function sk(e) {
      sd(e, 0);
    }
    function Eo(e) {
      var t = pr(e);
      if (Dm(t)) return e;
    }
    function ck(e, t) {
      if (e === "change") return t;
    }
    var Zm = !1;
    bt &&
      (bt
        ? ((Pl = "oninput" in document),
          Pl ||
            ((Yu = document.createElement("div")),
            Yu.setAttribute("oninput", "return;"),
            (Pl = typeof Yu.oninput == "function")),
          (Tl = Pl))
        : (Tl = !1),
      (Zm = Tl && (!document.documentMode || 9 < document.documentMode)));
    var Tl, Pl, Yu;
    function Ip() {
      hi && (hi.detachEvent("onpropertychange", ed), (Ai = hi = null));
    }
    function ed(e) {
      if (e.propertyName === "value" && Eo(Ai)) {
        var t = [];
        (Jm(t, Ai, e, as(e)), zm(sk, t));
      }
    }
    function fk(e, t, n) {
      e === "focusin"
        ? (Ip(), (hi = t), (Ai = n), hi.attachEvent("onpropertychange", ed))
        : e === "focusout" && Ip();
    }
    function pk(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return Eo(Ai);
    }
    function mk(e, t) {
      if (e === "click") return Eo(t);
    }
    function dk(e, t) {
      if (e === "input" || e === "change") return Eo(t);
    }
    function hk(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var kt = typeof Object.is == "function" ? Object.is : hk;
    function Ti(e, t) {
      if (kt(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ca.call(t, i) || !kt(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Lp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function _p(e, t) {
      var n = Lp(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Lp(n);
      }
    }
    function td(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? td(e, t.parentNode)
              : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function nd() {
      for (var e = window, t = Yl(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Yl(e.document);
      }
      return t;
    }
    function ys(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    function gk(e) {
      var t = nd(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (t !== n && n && n.ownerDocument && td(n.ownerDocument.documentElement, n)) {
        if (r !== null && ys(n)) {
          if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
            ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
          else if (
            ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
          ) {
            e = e.getSelection();
            var i = n.textContent.length,
              l = Math.min(r.start, i);
            ((r = r.end === void 0 ? l : Math.min(r.end, i)),
              !e.extend && l > r && ((i = r), (r = l), (l = i)),
              (i = _p(n, l)));
            var o = _p(n, r);
            i &&
              o &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== i.node ||
                e.anchorOffset !== i.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()),
              t.setStart(i.node, i.offset),
              e.removeAllRanges(),
              l > r
                ? (e.addRange(t), e.extend(o.node, o.offset))
                : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        }
        for (t = [], e = n; (e = e.parentNode); )
          e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
          ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
      }
    }
    var yk = bt && "documentMode" in document && 11 >= document.documentMode,
      cr = null,
      Pa = null,
      gi = null,
      Ia = !1;
    function zp(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Ia ||
        cr == null ||
        cr !== Yl(r) ||
        ((r = cr),
        "selectionStart" in r && ys(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (gi && Ti(gi, r)) ||
          ((gi = r),
          (r = ro(Pa, "onSelect")),
          0 < r.length &&
            ((t = new ds("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = cr))));
    }
    function Il(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var fr = {
        animationend: Il("Animation", "AnimationEnd"),
        animationiteration: Il("Animation", "AnimationIteration"),
        animationstart: Il("Animation", "AnimationStart"),
        transitionend: Il("Transition", "TransitionEnd"),
      },
      Gu = {},
      rd = {};
    bt &&
      ((rd = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete fr.animationend.animation,
        delete fr.animationiteration.animation,
        delete fr.animationstart.animation),
      "TransitionEvent" in window || delete fr.transitionend.transition);
    function Co(e) {
      if (Gu[e]) return Gu[e];
      if (!fr[e]) return e;
      var t = fr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in rd) return (Gu[e] = t[n]);
      return e;
    }
    var id = Co("animationend"),
      ld = Co("animationiteration"),
      od = Co("animationstart"),
      ud = Co("transitionend"),
      ad = new Map(),
      Bp =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    function dn(e, t) {
      (ad.set(e, t), Un(t, [e]));
    }
    for (Ll = 0; Ll < Bp.length; Ll++)
      ((_l = Bp[Ll]),
        (Rp = _l.toLowerCase()),
        (Np = _l[0].toUpperCase() + _l.slice(1)),
        dn(Rp, "on" + Np));
    var _l, Rp, Np, Ll;
    dn(id, "onAnimationEnd");
    dn(ld, "onAnimationIteration");
    dn(od, "onAnimationStart");
    dn("dblclick", "onDoubleClick");
    dn("focusin", "onFocus");
    dn("focusout", "onBlur");
    dn(ud, "onTransitionEnd");
    Fr("onMouseEnter", ["mouseout", "mouseover"]);
    Fr("onMouseLeave", ["mouseout", "mouseover"]);
    Fr("onPointerEnter", ["pointerout", "pointerover"]);
    Fr("onPointerLeave", ["pointerout", "pointerover"]);
    Un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Un(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    );
    Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Un(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    );
    Un(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
    var fi =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      kk = new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));
    function Op(e, t, n) {
      var r = e.type || "unknown-event";
      ((e.currentTarget = n), k1(r, t, void 0, e), (e.currentTarget = null));
    }
    function sd(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        e: {
          var l = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var u = r[o],
                a = u.instance,
                s = u.currentTarget;
              if (((u = u.listener), a !== l && i.isPropagationStopped())) break e;
              (Op(i, u, s), (l = a));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((u = r[o]),
                (a = u.instance),
                (s = u.currentTarget),
                (u = u.listener),
                a !== l && i.isPropagationStopped())
              )
                break e;
              (Op(i, u, s), (l = a));
            }
        }
      }
      if (Jl) throw ((e = Fa), (Jl = !1), (Fa = null), e);
    }
    function Z(e, t) {
      var n = t[Ra];
      n === void 0 && (n = t[Ra] = new Set());
      var r = e + "__bubble";
      n.has(r) || (cd(t, e, 2, !1), n.add(r));
    }
    function Ju(e, t, n) {
      var r = 0;
      (t && (r |= 4), cd(n, e, r, t));
    }
    var zl = "_reactListening" + Math.random().toString(36).slice(2);
    function Pi(e) {
      if (!e[zl]) {
        ((e[zl] = !0),
          ym.forEach(function (n) {
            n !== "selectionchange" && (kk.has(n) || Ju(n, !1, e), Ju(n, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zl] || ((t[zl] = !0), Ju("selectionchange", !1, t));
      }
    }
    function cd(e, t, n, r) {
      switch (qm(t)) {
        case 1:
          var i = B1;
          break;
        case 4:
          i = R1;
          break;
        default:
          i = ps;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !Ca || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
        r
          ? i !== void 0
            ? e.addEventListener(t, n, { capture: !0, passive: i })
            : e.addEventListener(t, n, !0)
          : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1));
    }
    function Zu(e, t, n, r, i) {
      var l = r;
      if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
        e: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var u = r.stateNode.containerInfo;
            if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var a = o.tag;
                if (
                  (a === 3 || a === 4) &&
                  ((a = o.stateNode.containerInfo),
                  a === i || (a.nodeType === 8 && a.parentNode === i))
                )
                  return;
                o = o.return;
              }
            for (; u !== null; ) {
              if (((o = Ln(u)), o === null)) return;
              if (((a = o.tag), a === 5 || a === 6)) {
                r = l = o;
                continue e;
              }
              u = u.parentNode;
            }
          }
          r = r.return;
        }
      zm(function () {
        var s = l,
          c = as(n),
          f = [];
        e: {
          var p = ad.get(e);
          if (p !== void 0) {
            var m = ds,
              g = e;
            switch (e) {
              case "keypress":
                if (Hl(n) === 0) break e;
              case "keydown":
              case "keyup":
                m = Y1;
                break;
              case "focusin":
                ((g = "focus"), (m = Xu));
                break;
              case "focusout":
                ((g = "blur"), (m = Xu));
                break;
              case "beforeblur":
              case "afterblur":
                m = Xu;
                break;
              case "click":
                if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                m = Cp;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                m = M1;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                m = Z1;
                break;
              case id:
              case ld:
              case od:
                m = U1;
                break;
              case ud:
                m = tk;
                break;
              case "scroll":
                m = N1;
                break;
              case "wheel":
                m = rk;
                break;
              case "copy":
              case "cut":
              case "paste":
                m = V1;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                m = Sp;
            }
            var v = (t & 4) !== 0,
              F = !v && e === "scroll",
              d = v ? (p !== null ? p + "Capture" : null) : p;
            v = [];
            for (var h = s, y; h !== null; ) {
              y = h;
              var E = y.stateNode;
              if (
                (y.tag === 5 &&
                  E !== null &&
                  ((y = E), d !== null && ((E = Ei(h, d)), E != null && v.push(Ii(h, E, y)))),
                F)
              )
                break;
              h = h.return;
            }
            0 < v.length && ((p = new m(p, g, null, n, c)), f.push({ event: p, listeners: v }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (
              ((p = e === "mouseover" || e === "pointerover"),
              (m = e === "mouseout" || e === "pointerout"),
              p && n !== Da && (g = n.relatedTarget || n.fromElement) && (Ln(g) || g[jt]))
            )
              break e;
            if (
              (m || p) &&
              ((p =
                c.window === c
                  ? c
                  : (p = c.ownerDocument)
                    ? p.defaultView || p.parentWindow
                    : window),
              m
                ? ((g = n.relatedTarget || n.toElement),
                  (m = s),
                  (g = g ? Ln(g) : null),
                  g !== null &&
                    ((F = Hn(g)), g !== F || (g.tag !== 5 && g.tag !== 6)) &&
                    (g = null))
                : ((m = null), (g = s)),
              m !== g)
            ) {
              if (
                ((v = Cp),
                (E = "onMouseLeave"),
                (d = "onMouseEnter"),
                (h = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((v = Sp), (E = "onPointerLeave"), (d = "onPointerEnter"), (h = "pointer")),
                (F = m == null ? p : pr(m)),
                (y = g == null ? p : pr(g)),
                (p = new v(E, h + "leave", m, n, c)),
                (p.target = F),
                (p.relatedTarget = y),
                (E = null),
                Ln(c) === s &&
                  ((v = new v(d, h + "enter", g, n, c)),
                  (v.target = y),
                  (v.relatedTarget = F),
                  (E = v)),
                (F = E),
                m && g)
              )
                t: {
                  for (v = m, d = g, h = 0, y = v; y; y = or(y)) h++;
                  for (y = 0, E = d; E; E = or(E)) y++;
                  for (; 0 < h - y; ) ((v = or(v)), h--);
                  for (; 0 < y - h; ) ((d = or(d)), y--);
                  for (; h--; ) {
                    if (v === d || (d !== null && v === d.alternate)) break t;
                    ((v = or(v)), (d = or(d)));
                  }
                  v = null;
                }
              else v = null;
              (m !== null && Mp(f, p, m, v, !1), g !== null && F !== null && Mp(f, F, g, v, !0));
            }
          }
          e: {
            if (
              ((p = s ? pr(s) : window),
              (m = p.nodeName && p.nodeName.toLowerCase()),
              m === "select" || (m === "input" && p.type === "file"))
            )
              var S = ck;
            else if (Pp(p))
              if (Zm) S = dk;
              else {
                S = pk;
                var w = fk;
              }
            else
              (m = p.nodeName) &&
                m.toLowerCase() === "input" &&
                (p.type === "checkbox" || p.type === "radio") &&
                (S = mk);
            if (S && (S = S(e, s))) {
              Jm(f, S, n, c);
              break e;
            }
            (w && w(e, p, s),
              e === "focusout" &&
                (w = p._wrapperState) &&
                w.controlled &&
                p.type === "number" &&
                ya(p, "number", p.value));
          }
          switch (((w = s ? pr(s) : window), e)) {
            case "focusin":
              (Pp(w) || w.contentEditable === "true") && ((cr = w), (Pa = s), (gi = null));
              break;
            case "focusout":
              gi = Pa = cr = null;
              break;
            case "mousedown":
              Ia = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((Ia = !1), zp(f, n, c));
              break;
            case "selectionchange":
              if (yk) break;
            case "keydown":
            case "keyup":
              zp(f, n, c);
          }
          var P;
          if (gs)
            e: {
              switch (e) {
                case "compositionstart":
                  var L = "onCompositionStart";
                  break e;
                case "compositionend":
                  L = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  L = "onCompositionUpdate";
                  break e;
              }
              L = void 0;
            }
          else
            sr
              ? Ym(e, n) && (L = "onCompositionEnd")
              : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
          (L &&
            (Xm &&
              n.locale !== "ko" &&
              (sr || L !== "onCompositionStart"
                ? L === "onCompositionEnd" && sr && (P = Km())
                : ((tn = c), (ms = "value" in tn ? tn.value : tn.textContent), (sr = !0))),
            (w = ro(s, L)),
            0 < w.length &&
              ((L = new Fp(L, e, null, n, c)),
              f.push({ event: L, listeners: w }),
              P ? (L.data = P) : ((P = Gm(n)), P !== null && (L.data = P)))),
            (P = lk ? ok(e, n) : uk(e, n)) &&
              ((s = ro(s, "onBeforeInput")),
              0 < s.length &&
                ((c = new Fp("onBeforeInput", "beforeinput", null, n, c)),
                f.push({ event: c, listeners: s }),
                (c.data = P))));
        }
        sd(f, t);
      });
    }
    function Ii(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function ro(e, t) {
      for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
          l = i.stateNode;
        (i.tag === 5 &&
          l !== null &&
          ((i = l),
          (l = Ei(e, n)),
          l != null && r.unshift(Ii(e, l, i)),
          (l = Ei(e, t)),
          l != null && r.push(Ii(e, l, i))),
          (e = e.return));
      }
      return r;
    }
    function or(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function Mp(e, t, n, r, i) {
      for (var l = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n,
          a = u.alternate,
          s = u.stateNode;
        if (a !== null && a === r) break;
        (u.tag === 5 &&
          s !== null &&
          ((u = s),
          i
            ? ((a = Ei(n, l)), a != null && o.unshift(Ii(n, a, u)))
            : i || ((a = Ei(n, l)), a != null && o.push(Ii(n, a, u)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var xk = /\r\n?/g,
      vk = /\u0000|\uFFFD/g;
    function bp(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          xk,
          `
`,
        )
        .replace(vk, "");
    }
    function Bl(e, t, n) {
      if (((t = bp(t)), bp(e) !== t && n)) throw Error(T(425));
    }
    function io() {}
    var La = null,
      _a = null;
    function za(e, t) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Ba = typeof setTimeout == "function" ? setTimeout : void 0,
      wk = typeof clearTimeout == "function" ? clearTimeout : void 0,
      jp = typeof Promise == "function" ? Promise : void 0,
      Dk =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof jp < "u"
            ? function (e) {
                return jp.resolve(null).then(e).catch(Ek);
              }
            : Ba;
    function Ek(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function ea(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === "/$")) {
            if (r === 0) {
              (e.removeChild(i), Si(t));
              return;
            }
            r--;
          } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
      } while (n);
      Si(t);
    }
    function un(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function Up(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0) return e;
            t--;
          } else n === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var zr = Math.random().toString(36).slice(2),
      Ct = "__reactFiber$" + zr,
      Li = "__reactProps$" + zr,
      jt = "__reactContainer$" + zr,
      Ra = "__reactEvents$" + zr,
      Ck = "__reactListeners$" + zr,
      Fk = "__reactHandles$" + zr;
    function Ln(e) {
      var t = e[Ct];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[jt] || n[Ct])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = Up(e); e !== null; ) {
              if ((n = e[Ct])) return n;
              e = Up(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function ji(e) {
      return (
        (e = e[Ct] || e[jt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
      );
    }
    function pr(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(T(33));
    }
    function Fo(e) {
      return e[Li] || null;
    }
    var Na = [],
      mr = -1;
    function hn(e) {
      return { current: e };
    }
    function ee(e) {
      0 > mr || ((e.current = Na[mr]), (Na[mr] = null), mr--);
    }
    function J(e, t) {
      (mr++, (Na[mr] = e.current), (e.current = t));
    }
    var mn = {},
      Te = hn(mn),
      be = hn(!1),
      Nn = mn;
    function Sr(e, t) {
      var n = e.type.contextTypes;
      if (!n) return mn;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {},
        l;
      for (l in n) i[l] = t[l];
      return (
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function je(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function lo() {
      (ee(be), ee(Te));
    }
    function Hp(e, t, n) {
      if (Te.current !== mn) throw Error(T(168));
      (J(Te, t), J(be, n));
    }
    function fd(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
      r = r.getChildContext();
      for (var i in r) if (!(i in t)) throw Error(T(108, f1(e) || "Unknown", i));
      return ie({}, n, r);
    }
    function oo(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
        (Nn = Te.current),
        J(Te, e),
        J(be, be.current),
        !0
      );
    }
    function Vp(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(T(169));
      (n
        ? ((e = fd(e, t, Nn)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          ee(be),
          ee(Te),
          J(Te, e))
        : ee(be),
        J(be, n));
    }
    var Rt = null,
      So = !1,
      ta = !1;
    function pd(e) {
      Rt === null ? (Rt = [e]) : Rt.push(e);
    }
    function Sk(e) {
      ((So = !0), pd(e));
    }
    function gn() {
      if (!ta && Rt !== null) {
        ta = !0;
        var e = 0,
          t = q;
        try {
          var n = Rt;
          for (q = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
          }
          ((Rt = null), (So = !1));
        } catch (i) {
          throw (Rt !== null && (Rt = Rt.slice(e + 1)), Om(ss, gn), i);
        } finally {
          ((q = t), (ta = !1));
        }
      }
      return null;
    }
    var dr = [],
      hr = 0,
      uo = null,
      ao = 0,
      et = [],
      tt = 0,
      On = null,
      Nt = 1,
      Ot = "";
    function Pn(e, t) {
      ((dr[hr++] = ao), (dr[hr++] = uo), (uo = e), (ao = t));
    }
    function md(e, t, n) {
      ((et[tt++] = Nt), (et[tt++] = Ot), (et[tt++] = On), (On = e));
      var r = Nt;
      e = Ot;
      var i = 32 - gt(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var l = 32 - gt(t) + i;
      if (30 < l) {
        var o = i - (i % 5);
        ((l = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Nt = (1 << (32 - gt(t) + i)) | (n << i) | r),
          (Ot = l + e));
      } else ((Nt = (1 << l) | (n << i) | r), (Ot = e));
    }
    function ks(e) {
      e.return !== null && (Pn(e, 1), md(e, 1, 0));
    }
    function xs(e) {
      for (; e === uo; ) ((uo = dr[--hr]), (dr[hr] = null), (ao = dr[--hr]), (dr[hr] = null));
      for (; e === On; )
        ((On = et[--tt]),
          (et[tt] = null),
          (Ot = et[--tt]),
          (et[tt] = null),
          (Nt = et[--tt]),
          (et[tt] = null));
    }
    var qe = null,
      Qe = null,
      te = !1,
      ht = null;
    function dd(e, t) {
      var n = nt(5, null, null, 0);
      ((n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
    }
    function Wp(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
            t !== null ? ((e.stateNode = t), (qe = e), (Qe = un(t.firstChild)), !0) : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (qe = e), (Qe = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((n = On !== null ? { id: Nt, overflow: Ot } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                (n = nt(18, null, null, 0)),
                (n.stateNode = t),
                (n.return = e),
                (e.child = n),
                (qe = e),
                (Qe = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function Oa(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Ma(e) {
      if (te) {
        var t = Qe;
        if (t) {
          var n = t;
          if (!Wp(e, t)) {
            if (Oa(e)) throw Error(T(418));
            t = un(n.nextSibling);
            var r = qe;
            t && Wp(e, t) ? dd(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (qe = e));
          }
        } else {
          if (Oa(e)) throw Error(T(418));
          ((e.flags = (e.flags & -4097) | 2), (te = !1), (qe = e));
        }
      }
    }
    function $p(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      qe = e;
    }
    function Rl(e) {
      if (e !== qe) return !1;
      if (!te) return ($p(e), (te = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type), (t = t !== "head" && t !== "body" && !za(e.type, e.memoizedProps))),
        t && (t = Qe))
      ) {
        if (Oa(e)) throw (hd(), Error(T(418)));
        for (; t; ) (dd(e, t), (t = un(t.nextSibling)));
      }
      if (($p(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(T(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === "/$") {
                if (t === 0) {
                  Qe = un(e.nextSibling);
                  break e;
                }
                t--;
              } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          Qe = null;
        }
      } else Qe = qe ? un(e.stateNode.nextSibling) : null;
      return !0;
    }
    function hd() {
      for (var e = Qe; e; ) e = un(e.nextSibling);
    }
    function Ar() {
      ((Qe = qe = null), (te = !1));
    }
    function vs(e) {
      ht === null ? (ht = [e]) : ht.push(e);
    }
    var Ak = Vt.ReactCurrentBatchConfig;
    function ii(e, t, n) {
      if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
          if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(T(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(T(147, e));
          var i = r,
            l = "" + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === l
            ? t.ref
            : ((t = function (o) {
                var u = i.refs;
                o === null ? delete u[l] : (u[l] = o);
              }),
              (t._stringRef = l),
              t);
        }
        if (typeof e != "string") throw Error(T(284));
        if (!n._owner) throw Error(T(290, e));
      }
      return e;
    }
    function Nl(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          T(
            31,
            e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e,
          ),
        )
      );
    }
    function Qp(e) {
      var t = e._init;
      return t(e._payload);
    }
    function gd(e) {
      function t(d, h) {
        if (e) {
          var y = d.deletions;
          y === null ? ((d.deletions = [h]), (d.flags |= 16)) : y.push(h);
        }
      }
      function n(d, h) {
        if (!e) return null;
        for (; h !== null; ) (t(d, h), (h = h.sibling));
        return null;
      }
      function r(d, h) {
        for (d = new Map(); h !== null; )
          (h.key !== null ? d.set(h.key, h) : d.set(h.index, h), (h = h.sibling));
        return d;
      }
      function i(d, h) {
        return ((d = fn(d, h)), (d.index = 0), (d.sibling = null), d);
      }
      function l(d, h, y) {
        return (
          (d.index = y),
          e
            ? ((y = d.alternate),
              y !== null ? ((y = y.index), y < h ? ((d.flags |= 2), h) : y) : ((d.flags |= 2), h))
            : ((d.flags |= 1048576), h)
        );
      }
      function o(d) {
        return (e && d.alternate === null && (d.flags |= 2), d);
      }
      function u(d, h, y, E) {
        return h === null || h.tag !== 6
          ? ((h = aa(y, d.mode, E)), (h.return = d), h)
          : ((h = i(h, y)), (h.return = d), h);
      }
      function a(d, h, y, E) {
        var S = y.type;
        return S === ar
          ? c(d, h, y.props.children, E, y.key)
          : h !== null &&
              (h.elementType === S ||
                (typeof S == "object" && S !== null && S.$$typeof === Gt && Qp(S) === h.type))
            ? ((E = i(h, y.props)), (E.ref = ii(d, h, y)), (E.return = d), E)
            : ((E = Xl(y.type, y.key, y.props, null, d.mode, E)),
              (E.ref = ii(d, h, y)),
              (E.return = d),
              E);
      }
      function s(d, h, y, E) {
        return h === null ||
          h.tag !== 4 ||
          h.stateNode.containerInfo !== y.containerInfo ||
          h.stateNode.implementation !== y.implementation
          ? ((h = sa(y, d.mode, E)), (h.return = d), h)
          : ((h = i(h, y.children || [])), (h.return = d), h);
      }
      function c(d, h, y, E, S) {
        return h === null || h.tag !== 7
          ? ((h = Rn(y, d.mode, E, S)), (h.return = d), h)
          : ((h = i(h, y)), (h.return = d), h);
      }
      function f(d, h, y) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
          return ((h = aa("" + h, d.mode, y)), (h.return = d), h);
        if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case wl:
              return (
                (y = Xl(h.type, h.key, h.props, null, d.mode, y)),
                (y.ref = ii(d, null, h)),
                (y.return = d),
                y
              );
            case ur:
              return ((h = sa(h, d.mode, y)), (h.return = d), h);
            case Gt:
              var E = h._init;
              return f(d, E(h._payload), y);
          }
          if (si(h) || ei(h)) return ((h = Rn(h, d.mode, y, null)), (h.return = d), h);
          Nl(d, h);
        }
        return null;
      }
      function p(d, h, y, E) {
        var S = h !== null ? h.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number")
          return S !== null ? null : u(d, h, "" + y, E);
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case wl:
              return y.key === S ? a(d, h, y, E) : null;
            case ur:
              return y.key === S ? s(d, h, y, E) : null;
            case Gt:
              return ((S = y._init), p(d, h, S(y._payload), E));
          }
          if (si(y) || ei(y)) return S !== null ? null : c(d, h, y, E, null);
          Nl(d, y);
        }
        return null;
      }
      function m(d, h, y, E, S) {
        if ((typeof E == "string" && E !== "") || typeof E == "number")
          return ((d = d.get(y) || null), u(h, d, "" + E, S));
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case wl:
              return ((d = d.get(E.key === null ? y : E.key) || null), a(h, d, E, S));
            case ur:
              return ((d = d.get(E.key === null ? y : E.key) || null), s(h, d, E, S));
            case Gt:
              var w = E._init;
              return m(d, h, y, w(E._payload), S);
          }
          if (si(E) || ei(E)) return ((d = d.get(y) || null), c(h, d, E, S, null));
          Nl(h, E);
        }
        return null;
      }
      function g(d, h, y, E) {
        for (
          var S = null, w = null, P = h, L = (h = 0), O = null;
          P !== null && L < y.length;
          L++
        ) {
          P.index > L ? ((O = P), (P = null)) : (O = P.sibling);
          var D = p(d, P, y[L], E);
          if (D === null) {
            P === null && (P = O);
            break;
          }
          (e && P && D.alternate === null && t(d, P),
            (h = l(D, h, L)),
            w === null ? (S = D) : (w.sibling = D),
            (w = D),
            (P = O));
        }
        if (L === y.length) return (n(d, P), te && Pn(d, L), S);
        if (P === null) {
          for (; L < y.length; L++)
            ((P = f(d, y[L], E)),
              P !== null && ((h = l(P, h, L)), w === null ? (S = P) : (w.sibling = P), (w = P)));
          return (te && Pn(d, L), S);
        }
        for (P = r(d, P); L < y.length; L++)
          ((O = m(P, d, L, y[L], E)),
            O !== null &&
              (e && O.alternate !== null && P.delete(O.key === null ? L : O.key),
              (h = l(O, h, L)),
              w === null ? (S = O) : (w.sibling = O),
              (w = O)));
        return (
          e &&
            P.forEach(function (X) {
              return t(d, X);
            }),
          te && Pn(d, L),
          S
        );
      }
      function v(d, h, y, E) {
        var S = ei(y);
        if (typeof S != "function") throw Error(T(150));
        if (((y = S.call(y)), y == null)) throw Error(T(151));
        for (
          var w = (S = null), P = h, L = (h = 0), O = null, D = y.next();
          P !== null && !D.done;
          L++, D = y.next()
        ) {
          P.index > L ? ((O = P), (P = null)) : (O = P.sibling);
          var X = p(d, P, D.value, E);
          if (X === null) {
            P === null && (P = O);
            break;
          }
          (e && P && X.alternate === null && t(d, P),
            (h = l(X, h, L)),
            w === null ? (S = X) : (w.sibling = X),
            (w = X),
            (P = O));
        }
        if (D.done) return (n(d, P), te && Pn(d, L), S);
        if (P === null) {
          for (; !D.done; L++, D = y.next())
            ((D = f(d, D.value, E)),
              D !== null && ((h = l(D, h, L)), w === null ? (S = D) : (w.sibling = D), (w = D)));
          return (te && Pn(d, L), S);
        }
        for (P = r(d, P); !D.done; L++, D = y.next())
          ((D = m(P, d, L, D.value, E)),
            D !== null &&
              (e && D.alternate !== null && P.delete(D.key === null ? L : D.key),
              (h = l(D, h, L)),
              w === null ? (S = D) : (w.sibling = D),
              (w = D)));
        return (
          e &&
            P.forEach(function (Q) {
              return t(d, Q);
            }),
          te && Pn(d, L),
          S
        );
      }
      function F(d, h, y, E) {
        if (
          (typeof y == "object" &&
            y !== null &&
            y.type === ar &&
            y.key === null &&
            (y = y.props.children),
          typeof y == "object" && y !== null)
        ) {
          switch (y.$$typeof) {
            case wl:
              e: {
                for (var S = y.key, w = h; w !== null; ) {
                  if (w.key === S) {
                    if (((S = y.type), S === ar)) {
                      if (w.tag === 7) {
                        (n(d, w.sibling), (h = i(w, y.props.children)), (h.return = d), (d = h));
                        break e;
                      }
                    } else if (
                      w.elementType === S ||
                      (typeof S == "object" && S !== null && S.$$typeof === Gt && Qp(S) === w.type)
                    ) {
                      (n(d, w.sibling),
                        (h = i(w, y.props)),
                        (h.ref = ii(d, w, y)),
                        (h.return = d),
                        (d = h));
                      break e;
                    }
                    n(d, w);
                    break;
                  } else t(d, w);
                  w = w.sibling;
                }
                y.type === ar
                  ? ((h = Rn(y.props.children, d.mode, E, y.key)), (h.return = d), (d = h))
                  : ((E = Xl(y.type, y.key, y.props, null, d.mode, E)),
                    (E.ref = ii(d, h, y)),
                    (E.return = d),
                    (d = E));
              }
              return o(d);
            case ur:
              e: {
                for (w = y.key; h !== null; ) {
                  if (h.key === w)
                    if (
                      h.tag === 4 &&
                      h.stateNode.containerInfo === y.containerInfo &&
                      h.stateNode.implementation === y.implementation
                    ) {
                      (n(d, h.sibling), (h = i(h, y.children || [])), (h.return = d), (d = h));
                      break e;
                    } else {
                      n(d, h);
                      break;
                    }
                  else t(d, h);
                  h = h.sibling;
                }
                ((h = sa(y, d.mode, E)), (h.return = d), (d = h));
              }
              return o(d);
            case Gt:
              return ((w = y._init), F(d, h, w(y._payload), E));
          }
          if (si(y)) return g(d, h, y, E);
          if (ei(y)) return v(d, h, y, E);
          Nl(d, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
          ? ((y = "" + y),
            h !== null && h.tag === 6
              ? (n(d, h.sibling), (h = i(h, y)), (h.return = d), (d = h))
              : (n(d, h), (h = aa(y, d.mode, E)), (h.return = d), (d = h)),
            o(d))
          : n(d, h);
      }
      return F;
    }
    var Tr = gd(!0),
      yd = gd(!1),
      so = hn(null),
      co = null,
      gr = null,
      ws = null;
    function Ds() {
      ws = gr = co = null;
    }
    function Es(e) {
      var t = so.current;
      (ee(so), (e._currentValue = t));
    }
    function ba(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
            : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Er(e, t) {
      ((co = e),
        (ws = gr = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Me = !0), (e.firstContext = null)));
    }
    function it(e) {
      var t = e._currentValue;
      if (ws !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), gr === null)) {
          if (co === null) throw Error(T(308));
          ((gr = e), (co.dependencies = { lanes: 0, firstContext: e }));
        } else gr = gr.next = e;
      return t;
    }
    var _n = null;
    function Cs(e) {
      _n === null ? (_n = [e]) : _n.push(e);
    }
    function kd(e, t, n, r) {
      var i = t.interleaved;
      return (
        i === null ? ((n.next = n), Cs(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        Ut(e, r)
      );
    }
    function Ut(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        ((e.childLanes |= t),
          (n = e.alternate),
          n !== null && (n.childLanes |= t),
          (n = e),
          (e = e.return));
      return n.tag === 3 ? n.stateNode : null;
    }
    var Jt = !1;
    function Fs(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function xd(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function Mt(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function an(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), ($ & 2) !== 0)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Ut(e, n)
        );
      }
      return (
        (i = r.interleaved),
        i === null ? ((t.next = t), Cs(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        Ut(e, n)
      );
    }
    function Vl(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), cs(e, n));
      }
    }
    function qp(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          l = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            (l === null ? (i = l = o) : (l = l.next = o), (n = n.next));
          } while (n !== null);
          l === null ? (i = l = t) : (l = l.next = t);
        } else i = l = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: l,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    function fo(e, t, n, r) {
      var i = e.updateQueue;
      Jt = !1;
      var l = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        u = i.shared.pending;
      if (u !== null) {
        i.shared.pending = null;
        var a = u,
          s = a.next;
        ((a.next = null), o === null ? (l = s) : (o.next = s), (o = a));
        var c = e.alternate;
        c !== null &&
          ((c = c.updateQueue),
          (u = c.lastBaseUpdate),
          u !== o && (u === null ? (c.firstBaseUpdate = s) : (u.next = s), (c.lastBaseUpdate = a)));
      }
      if (l !== null) {
        var f = i.baseState;
        ((o = 0), (c = s = a = null), (u = l));
        do {
          var p = u.lane,
            m = u.eventTime;
          if ((r & p) === p) {
            c !== null &&
              (c = c.next =
                {
                  eventTime: m,
                  lane: 0,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                });
            e: {
              var g = e,
                v = u;
              switch (((p = t), (m = n), v.tag)) {
                case 1:
                  if (((g = v.payload), typeof g == "function")) {
                    f = g.call(m, f, p);
                    break e;
                  }
                  f = g;
                  break e;
                case 3:
                  g.flags = (g.flags & -65537) | 128;
                case 0:
                  if (
                    ((g = v.payload), (p = typeof g == "function" ? g.call(m, f, p) : g), p == null)
                  )
                    break e;
                  f = ie({}, f, p);
                  break e;
                case 2:
                  Jt = !0;
              }
            }
            u.callback !== null &&
              u.lane !== 0 &&
              ((e.flags |= 64), (p = i.effects), p === null ? (i.effects = [u]) : p.push(u));
          } else
            ((m = {
              eventTime: m,
              lane: p,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            }),
              c === null ? ((s = c = m), (a = f)) : (c = c.next = m),
              (o |= p));
          if (((u = u.next), u === null)) {
            if (((u = i.shared.pending), u === null)) break;
            ((p = u),
              (u = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (!0);
        if (
          (c === null && (a = f),
          (i.baseState = a),
          (i.firstBaseUpdate = s),
          (i.lastBaseUpdate = c),
          (t = i.shared.interleaved),
          t !== null)
        ) {
          i = t;
          do ((o |= i.lane), (i = i.next));
          while (i !== t);
        } else l === null && (i.shared.lanes = 0);
        ((bn |= o), (e.lanes = o), (e.memoizedState = f));
      }
    }
    function Kp(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            i = r.callback;
          if (i !== null) {
            if (((r.callback = null), (r = n), typeof i != "function")) throw Error(T(191, i));
            i.call(r);
          }
        }
    }
    var Ui = {},
      St = hn(Ui),
      _i = hn(Ui),
      zi = hn(Ui);
    function zn(e) {
      if (e === Ui) throw Error(T(174));
      return e;
    }
    function Ss(e, t) {
      switch ((J(zi, t), J(_i, e), J(St, Ui), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : xa(null, "");
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = xa(t, e)));
      }
      (ee(St), J(St, t));
    }
    function Pr() {
      (ee(St), ee(_i), ee(zi));
    }
    function vd(e) {
      zn(zi.current);
      var t = zn(St.current),
        n = xa(t, e.type);
      t !== n && (J(_i, e), J(St, n));
    }
    function As(e) {
      _i.current === e && (ee(St), ee(_i));
    }
    var ne = hn(0);
    function po(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var na = [];
    function Ts() {
      for (var e = 0; e < na.length; e++) na[e]._workInProgressVersionPrimary = null;
      na.length = 0;
    }
    var Wl = Vt.ReactCurrentDispatcher,
      ra = Vt.ReactCurrentBatchConfig,
      Mn = 0,
      re = null,
      de = null,
      ye = null,
      mo = !1,
      yi = !1,
      Bi = 0,
      Tk = 0;
    function Fe() {
      throw Error(T(321));
    }
    function Ps(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
      return !0;
    }
    function Is(e, t, n, r, i, l) {
      if (
        ((Mn = l),
        (re = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Wl.current = e === null || e.memoizedState === null ? _k : zk),
        (e = n(r, i)),
        yi)
      ) {
        l = 0;
        do {
          if (((yi = !1), (Bi = 0), 25 <= l)) throw Error(T(301));
          ((l += 1), (ye = de = null), (t.updateQueue = null), (Wl.current = Bk), (e = n(r, i)));
        } while (yi);
      }
      if (
        ((Wl.current = ho),
        (t = de !== null && de.next !== null),
        (Mn = 0),
        (ye = de = re = null),
        (mo = !1),
        t)
      )
        throw Error(T(300));
      return e;
    }
    function Ls() {
      var e = Bi !== 0;
      return ((Bi = 0), e);
    }
    function Et() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (ye === null ? (re.memoizedState = ye = e) : (ye = ye.next = e), ye);
    }
    function lt() {
      if (de === null) {
        var e = re.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = de.next;
      var t = ye === null ? re.memoizedState : ye.next;
      if (t !== null) ((ye = t), (de = e));
      else {
        if (e === null) throw Error(T(310));
        ((de = e),
          (e = {
            memoizedState: de.memoizedState,
            baseState: de.baseState,
            baseQueue: de.baseQueue,
            queue: de.queue,
            next: null,
          }),
          ye === null ? (re.memoizedState = ye = e) : (ye = ye.next = e));
      }
      return ye;
    }
    function Ri(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ia(e) {
      var t = lt(),
        n = t.queue;
      if (n === null) throw Error(T(311));
      n.lastRenderedReducer = e;
      var r = de,
        i = r.baseQueue,
        l = n.pending;
      if (l !== null) {
        if (i !== null) {
          var o = i.next;
          ((i.next = l.next), (l.next = o));
        }
        ((r.baseQueue = i = l), (n.pending = null));
      }
      if (i !== null) {
        ((l = i.next), (r = r.baseState));
        var u = (o = null),
          a = null,
          s = l;
        do {
          var c = s.lane;
          if ((Mn & c) === c)
            (a !== null &&
              (a = a.next =
                {
                  lane: 0,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                }),
              (r = s.hasEagerState ? s.eagerState : e(r, s.action)));
          else {
            var f = {
              lane: c,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            };
            (a === null ? ((u = a = f), (o = r)) : (a = a.next = f), (re.lanes |= c), (bn |= c));
          }
          s = s.next;
        } while (s !== null && s !== l);
        (a === null ? (o = r) : (a.next = u),
          kt(r, t.memoizedState) || (Me = !0),
          (t.memoizedState = r),
          (t.baseState = o),
          (t.baseQueue = a),
          (n.lastRenderedState = r));
      }
      if (((e = n.interleaved), e !== null)) {
        i = e;
        do ((l = i.lane), (re.lanes |= l), (bn |= l), (i = i.next));
        while (i !== e);
      } else i === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function la(e) {
      var t = lt(),
        n = t.queue;
      if (n === null) throw Error(T(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var o = (i = i.next);
        do ((l = e(l, o.action)), (o = o.next));
        while (o !== i);
        (kt(l, t.memoizedState) || (Me = !0),
          (t.memoizedState = l),
          t.baseQueue === null && (t.baseState = l),
          (n.lastRenderedState = l));
      }
      return [l, r];
    }
    function wd() {}
    function Dd(e, t) {
      var n = re,
        r = lt(),
        i = t(),
        l = !kt(r.memoizedState, i);
      if (
        (l && ((r.memoizedState = i), (Me = !0)),
        (r = r.queue),
        _s(Fd.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (ye !== null && ye.memoizedState.tag & 1))
      ) {
        if (((n.flags |= 2048), Ni(9, Cd.bind(null, n, r, i, t), void 0, null), ke === null))
          throw Error(T(349));
        (Mn & 30) !== 0 || Ed(n, t, i);
      }
      return i;
    }
    function Ed(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = re.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }), (re.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Cd(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Sd(t) && Ad(e));
    }
    function Fd(e, t, n) {
      return n(function () {
        Sd(t) && Ad(e);
      });
    }
    function Sd(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !kt(e, n);
      } catch {
        return !0;
      }
    }
    function Ad(e) {
      var t = Ut(e, 1);
      t !== null && yt(t, e, 1, -1);
    }
    function Xp(e) {
      var t = Et();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ri,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Lk.bind(null, re, e)),
        [t.memoizedState, e]
      );
    }
    function Ni(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = re.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (re.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function Td() {
      return lt().memoizedState;
    }
    function $l(e, t, n, r) {
      var i = Et();
      ((re.flags |= e), (i.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function Ao(e, t, n, r) {
      var i = lt();
      r = r === void 0 ? null : r;
      var l = void 0;
      if (de !== null) {
        var o = de.memoizedState;
        if (((l = o.destroy), r !== null && Ps(r, o.deps))) {
          i.memoizedState = Ni(t, n, l, r);
          return;
        }
      }
      ((re.flags |= e), (i.memoizedState = Ni(1 | t, n, l, r)));
    }
    function Yp(e, t) {
      return $l(8390656, 8, e, t);
    }
    function _s(e, t) {
      return Ao(2048, 8, e, t);
    }
    function Pd(e, t) {
      return Ao(4, 2, e, t);
    }
    function Id(e, t) {
      return Ao(4, 4, e, t);
    }
    function Ld(e, t) {
      if (typeof t == "function")
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function _d(e, t, n) {
      return ((n = n != null ? n.concat([e]) : null), Ao(4, 4, Ld.bind(null, t, e), n));
    }
    function zs() {}
    function zd(e, t) {
      var n = lt();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Ps(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Bd(e, t) {
      var n = lt();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Ps(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function Rd(e, t, n) {
      return (Mn & 21) === 0
        ? (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n))
        : (kt(n, t) || ((n = jm()), (re.lanes |= n), (bn |= n), (e.baseState = !0)), t);
    }
    function Pk(e, t) {
      var n = q;
      ((q = n !== 0 && 4 > n ? n : 4), e(!0));
      var r = ra.transition;
      ra.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((q = n), (ra.transition = r));
      }
    }
    function Nd() {
      return lt().memoizedState;
    }
    function Ik(e, t, n) {
      var r = cn(e);
      if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Od(e)))
        Md(t, n);
      else if (((n = kd(e, t, n, r)), n !== null)) {
        var i = ze();
        (yt(n, e, r, i), bd(n, t, r));
      }
    }
    function Lk(e, t, n) {
      var r = cn(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
      if (Od(e)) Md(t, i);
      else {
        var l = e.alternate;
        if (
          e.lanes === 0 &&
          (l === null || l.lanes === 0) &&
          ((l = t.lastRenderedReducer), l !== null)
        )
          try {
            var o = t.lastRenderedState,
              u = l(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = u), kt(u, o))) {
              var a = t.interleaved;
              (a === null ? ((i.next = i), Cs(t)) : ((i.next = a.next), (a.next = i)),
                (t.interleaved = i));
              return;
            }
          } catch {}
        ((n = kd(e, t, i, r)), n !== null && ((i = ze()), yt(n, e, r, i), bd(n, t, r)));
      }
    }
    function Od(e) {
      var t = e.alternate;
      return e === re || (t !== null && t === re);
    }
    function Md(e, t) {
      yi = mo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function bd(e, t, n) {
      if ((n & 4194240) !== 0) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), cs(e, n));
      }
    }
    var ho = {
        readContext: it,
        useCallback: Fe,
        useContext: Fe,
        useEffect: Fe,
        useImperativeHandle: Fe,
        useInsertionEffect: Fe,
        useLayoutEffect: Fe,
        useMemo: Fe,
        useReducer: Fe,
        useRef: Fe,
        useState: Fe,
        useDebugValue: Fe,
        useDeferredValue: Fe,
        useTransition: Fe,
        useMutableSource: Fe,
        useSyncExternalStore: Fe,
        useId: Fe,
        unstable_isNewReconciler: !1,
      },
      _k = {
        readContext: it,
        useCallback: function (e, t) {
          return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: it,
        useEffect: Yp,
        useImperativeHandle: function (e, t, n) {
          return ((n = n != null ? n.concat([e]) : null), $l(4194308, 4, Ld.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return $l(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return $l(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Et();
          return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
          var r = Et();
          return (
            (t = n !== void 0 ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = Ik.bind(null, re, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Et();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: Xp,
        useDebugValue: zs,
        useDeferredValue: function (e) {
          return (Et().memoizedState = e);
        },
        useTransition: function () {
          var e = Xp(!1),
            t = e[0];
          return ((e = Pk.bind(null, e[1])), (Et().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = re,
            i = Et();
          if (te) {
            if (n === void 0) throw Error(T(407));
            n = n();
          } else {
            if (((n = t()), ke === null)) throw Error(T(349));
            (Mn & 30) !== 0 || Ed(r, t, n);
          }
          i.memoizedState = n;
          var l = { value: n, getSnapshot: t };
          return (
            (i.queue = l),
            Yp(Fd.bind(null, r, l, e), [e]),
            (r.flags |= 2048),
            Ni(9, Cd.bind(null, r, l, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = Et(),
            t = ke.identifierPrefix;
          if (te) {
            var n = Ot,
              r = Nt;
            ((n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
              (t = ":" + t + "R" + n),
              (n = Bi++),
              0 < n && (t += "H" + n.toString(32)),
              (t += ":"));
          } else ((n = Tk++), (t = ":" + t + "r" + n.toString(32) + ":"));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      zk = {
        readContext: it,
        useCallback: zd,
        useContext: it,
        useEffect: _s,
        useImperativeHandle: _d,
        useInsertionEffect: Pd,
        useLayoutEffect: Id,
        useMemo: Bd,
        useReducer: ia,
        useRef: Td,
        useState: function () {
          return ia(Ri);
        },
        useDebugValue: zs,
        useDeferredValue: function (e) {
          var t = lt();
          return Rd(t, de.memoizedState, e);
        },
        useTransition: function () {
          var e = ia(Ri)[0],
            t = lt().memoizedState;
          return [e, t];
        },
        useMutableSource: wd,
        useSyncExternalStore: Dd,
        useId: Nd,
        unstable_isNewReconciler: !1,
      },
      Bk = {
        readContext: it,
        useCallback: zd,
        useContext: it,
        useEffect: _s,
        useImperativeHandle: _d,
        useInsertionEffect: Pd,
        useLayoutEffect: Id,
        useMemo: Bd,
        useReducer: la,
        useRef: Td,
        useState: function () {
          return la(Ri);
        },
        useDebugValue: zs,
        useDeferredValue: function (e) {
          var t = lt();
          return de === null ? (t.memoizedState = e) : Rd(t, de.memoizedState, e);
        },
        useTransition: function () {
          var e = la(Ri)[0],
            t = lt().memoizedState;
          return [e, t];
        },
        useMutableSource: wd,
        useSyncExternalStore: Dd,
        useId: Nd,
        unstable_isNewReconciler: !1,
      };
    function mt(e, t) {
      if (e && e.defaultProps) {
        ((t = ie({}, t)), (e = e.defaultProps));
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function ja(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : ie({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var To = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? Hn(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ze(),
          i = cn(e),
          l = Mt(r, i);
        ((l.payload = t),
          n != null && (l.callback = n),
          (t = an(e, l, i)),
          t !== null && (yt(t, e, i, r), Vl(t, e, i)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ze(),
          i = cn(e),
          l = Mt(r, i);
        ((l.tag = 1),
          (l.payload = t),
          n != null && (l.callback = n),
          (t = an(e, l, i)),
          t !== null && (yt(t, e, i, r), Vl(t, e, i)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ze(),
          r = cn(e),
          i = Mt(n, r);
        ((i.tag = 2),
          t != null && (i.callback = t),
          (t = an(e, i, r)),
          t !== null && (yt(t, e, r, n), Vl(t, e, r)));
      },
    };
    function Gp(e, t, n, r, i, l, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(r, l, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Ti(n, r) || !Ti(i, l)
            : !0
      );
    }
    function jd(e, t, n) {
      var r = !1,
        i = mn,
        l = t.contextType;
      return (
        typeof l == "object" && l !== null
          ? (l = it(l))
          : ((i = je(t) ? Nn : Te.current),
            (r = t.contextTypes),
            (l = (r = r != null) ? Sr(e, i) : mn)),
        (t = new t(n, l)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = To),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
      );
    }
    function Jp(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && To.enqueueReplaceState(t, t.state, null));
    }
    function Ua(e, t, n, r) {
      var i = e.stateNode;
      ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Fs(e));
      var l = t.contextType;
      (typeof l == "object" && l !== null
        ? (i.context = it(l))
        : ((l = je(t) ? Nn : Te.current), (i.context = Sr(e, l))),
        (i.state = e.memoizedState),
        (l = t.getDerivedStateFromProps),
        typeof l == "function" && (ja(e, t, l, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((t = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
          t !== i.state && To.enqueueReplaceState(i, i.state, null),
          fo(e, n, i, r),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308));
    }
    function Ir(e, t) {
      try {
        var n = "",
          r = t;
        do ((n += c1(r)), (r = r.return));
        while (r);
        var i = n;
      } catch (l) {
        i =
          `
Error generating stack: ` +
          l.message +
          `
` +
          l.stack;
      }
      return { value: e, source: t, stack: i, digest: null };
    }
    function oa(e, t, n) {
      return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function Ha(e, t) {
      try {
        console.error(t.value);
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    var Rk = typeof WeakMap == "function" ? WeakMap : Map;
    function Ud(e, t, n) {
      ((n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
      var r = t.value;
      return (
        (n.callback = function () {
          (yo || ((yo = !0), (Ja = r)), Ha(e, t));
        }),
        n
      );
    }
    function Hd(e, t, n) {
      ((n = Mt(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var i = t.value;
        ((n.payload = function () {
          return r(i);
        }),
          (n.callback = function () {
            Ha(e, t);
          }));
      }
      var l = e.stateNode;
      return (
        l !== null &&
          typeof l.componentDidCatch == "function" &&
          (n.callback = function () {
            (Ha(e, t),
              typeof r != "function" && (sn === null ? (sn = new Set([this])) : sn.add(this)));
            var o = t.stack;
            this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
          }),
        n
      );
    }
    function Zp(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Rk();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || (i.add(n), (e = Xk.bind(null, e, t, n)), t.then(e, e));
    }
    function em(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function tm(e, t, n, r, i) {
      return (e.mode & 1) === 0
        ? (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              n.tag === 1 &&
                (n.alternate === null ? (n.tag = 17) : ((t = Mt(-1, 1)), (t.tag = 2), an(n, t, 1))),
              (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = i), e);
    }
    var Nk = Vt.ReactCurrentOwner,
      Me = !1;
    function _e(e, t, n, r) {
      t.child = e === null ? yd(t, null, n, r) : Tr(t, e.child, n, r);
    }
    function nm(e, t, n, r, i) {
      n = n.render;
      var l = t.ref;
      return (
        Er(t, i),
        (r = Is(e, t, n, r, l, i)),
        (n = Ls()),
        e !== null && !Me
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ht(e, t, i))
          : (te && n && ks(t), (t.flags |= 1), _e(e, t, r, i), t.child)
      );
    }
    function rm(e, t, n, r, i) {
      if (e === null) {
        var l = n.type;
        return typeof l == "function" &&
          !Us(l) &&
          l.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = l), Vd(e, t, l, r, i))
          : ((e = Xl(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((l = e.child), (e.lanes & i) === 0)) {
        var o = l.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : Ti), n(o, r) && e.ref === t.ref))
          return Ht(e, t, i);
      }
      return ((t.flags |= 1), (e = fn(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function Vd(e, t, n, r, i) {
      if (e !== null) {
        var l = e.memoizedProps;
        if (Ti(l, r) && e.ref === t.ref)
          if (((Me = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
            (e.flags & 131072) !== 0 && (Me = !0);
          else return ((t.lanes = e.lanes), Ht(e, t, i));
      }
      return Va(e, t, n, r, i);
    }
    function Wd(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
      if (r.mode === "hidden")
        if ((t.mode & 1) === 0)
          ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            J(kr, $e),
            ($e |= n));
        else {
          if ((n & 1073741824) === 0)
            return (
              (e = l !== null ? l.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
              (t.updateQueue = null),
              J(kr, $e),
              ($e |= e),
              null
            );
          ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            (r = l !== null ? l.baseLanes : n),
            J(kr, $e),
            ($e |= r));
        }
      else
        (l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
          J(kr, $e),
          ($e |= r));
      return (_e(e, t, i, n), t.child);
    }
    function $d(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Va(e, t, n, r, i) {
      var l = je(n) ? Nn : Te.current;
      return (
        (l = Sr(t, l)),
        Er(t, i),
        (n = Is(e, t, n, r, l, i)),
        (r = Ls()),
        e !== null && !Me
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ht(e, t, i))
          : (te && r && ks(t), (t.flags |= 1), _e(e, t, n, i), t.child)
      );
    }
    function im(e, t, n, r, i) {
      if (je(n)) {
        var l = !0;
        oo(t);
      } else l = !1;
      if ((Er(t, i), t.stateNode === null)) (Ql(e, t), jd(t, n, r), Ua(t, n, r, i), (r = !0));
      else if (e === null) {
        var o = t.stateNode,
          u = t.memoizedProps;
        o.props = u;
        var a = o.context,
          s = n.contextType;
        typeof s == "object" && s !== null
          ? (s = it(s))
          : ((s = je(n) ? Nn : Te.current), (s = Sr(t, s)));
        var c = n.getDerivedStateFromProps,
          f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        (f ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((u !== r || a !== s) && Jp(t, o, r, s)),
          (Jt = !1));
        var p = t.memoizedState;
        ((o.state = p),
          fo(t, r, o, i),
          (a = t.memoizedState),
          u !== r || p !== a || be.current || Jt
            ? (typeof c == "function" && (ja(t, n, c, r), (a = t.memoizedState)),
              (u = Jt || Gp(t, n, u, r, p, a, s))
                ? (f ||
                    (typeof o.UNSAFE_componentWillMount != "function" &&
                      typeof o.componentWillMount != "function") ||
                    (typeof o.componentWillMount == "function" && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == "function" &&
                      o.UNSAFE_componentWillMount()),
                  typeof o.componentDidMount == "function" && (t.flags |= 4194308))
                : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = a)),
              (o.props = r),
              (o.state = a),
              (o.context = s),
              (r = u))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
      } else {
        ((o = t.stateNode),
          xd(e, t),
          (u = t.memoizedProps),
          (s = t.type === t.elementType ? u : mt(t.type, u)),
          (o.props = s),
          (f = t.pendingProps),
          (p = o.context),
          (a = n.contextType),
          typeof a == "object" && a !== null
            ? (a = it(a))
            : ((a = je(n) ? Nn : Te.current), (a = Sr(t, a))));
        var m = n.getDerivedStateFromProps;
        ((c = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((u !== f || p !== a) && Jp(t, o, r, a)),
          (Jt = !1),
          (p = t.memoizedState),
          (o.state = p),
          fo(t, r, o, i));
        var g = t.memoizedState;
        u !== f || p !== g || be.current || Jt
          ? (typeof m == "function" && (ja(t, n, m, r), (g = t.memoizedState)),
            (s = Jt || Gp(t, n, s, r, p, g, a) || !1)
              ? (c ||
                  (typeof o.UNSAFE_componentWillUpdate != "function" &&
                    typeof o.componentWillUpdate != "function") ||
                  (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, a),
                  typeof o.UNSAFE_componentWillUpdate == "function" &&
                    o.UNSAFE_componentWillUpdate(r, g, a)),
                typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
              : (typeof o.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = g)),
            (o.props = r),
            (o.state = g),
            (o.context = a),
            (r = s))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return Wa(e, t, n, r, l, i);
    }
    function Wa(e, t, n, r, i, l) {
      $d(e, t);
      var o = (t.flags & 128) !== 0;
      if (!r && !o) return (i && Vp(t, n, !1), Ht(e, t, l));
      ((r = t.stateNode), (Nk.current = t));
      var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
      return (
        (t.flags |= 1),
        e !== null && o
          ? ((t.child = Tr(t, e.child, null, l)), (t.child = Tr(t, null, u, l)))
          : _e(e, t, u, l),
        (t.memoizedState = r.state),
        i && Vp(t, n, !0),
        t.child
      );
    }
    function Qd(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? Hp(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Hp(e, t.context, !1),
        Ss(e, t.containerInfo));
    }
    function lm(e, t, n, r, i) {
      return (Ar(), vs(i), (t.flags |= 256), _e(e, t, n, r), t.child);
    }
    var $a = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Qa(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function qd(e, t, n) {
      var r = t.pendingProps,
        i = ne.current,
        l = !1,
        o = (t.flags & 128) !== 0,
        u;
      if (
        ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        u ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
        J(ne, i & 1),
        e === null)
      )
        return (
          Ma(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? ((t.mode & 1) === 0
                ? (t.lanes = 1)
                : e.data === "$!"
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824),
              null)
            : ((o = r.children),
              (e = r.fallback),
              l
                ? ((r = t.mode),
                  (l = t.child),
                  (o = { mode: "hidden", children: o }),
                  (r & 1) === 0 && l !== null
                    ? ((l.childLanes = 0), (l.pendingProps = o))
                    : (l = Lo(o, r, 0, null)),
                  (e = Rn(e, r, n, null)),
                  (l.return = t),
                  (e.return = t),
                  (l.sibling = e),
                  (t.child = l),
                  (t.child.memoizedState = Qa(n)),
                  (t.memoizedState = $a),
                  e)
                : Bs(t, o))
        );
      if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
        return Ok(e, t, o, r, u, i, n);
      if (l) {
        ((l = r.fallback), (o = t.mode), (i = e.child), (u = i.sibling));
        var a = { mode: "hidden", children: r.children };
        return (
          (o & 1) === 0 && t.child !== i
            ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
            : ((r = fn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
          u !== null ? (l = fn(u, l)) : ((l = Rn(l, o, n, null)), (l.flags |= 2)),
          (l.return = t),
          (r.return = t),
          (r.sibling = l),
          (t.child = r),
          (r = l),
          (l = t.child),
          (o = e.child.memoizedState),
          (o =
            o === null
              ? Qa(n)
              : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
          (l.memoizedState = o),
          (l.childLanes = e.childLanes & ~n),
          (t.memoizedState = $a),
          r
        );
      }
      return (
        (l = e.child),
        (e = l.sibling),
        (r = fn(l, { mode: "visible", children: r.children })),
        (t.mode & 1) === 0 && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
      );
    }
    function Bs(e, t) {
      return (
        (t = Lo({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
      );
    }
    function Ol(e, t, n, r) {
      return (
        r !== null && vs(r),
        Tr(t, e.child, null, n),
        (e = Bs(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Ok(e, t, n, r, i, l, o) {
      if (n)
        return t.flags & 256
          ? ((t.flags &= -257), (r = oa(Error(T(422)))), Ol(e, t, o, r))
          : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((l = r.fallback),
              (i = t.mode),
              (r = Lo({ mode: "visible", children: r.children }, i, 0, null)),
              (l = Rn(l, i, o, null)),
              (l.flags |= 2),
              (r.return = t),
              (l.return = t),
              (r.sibling = l),
              (t.child = r),
              (t.mode & 1) !== 0 && Tr(t, e.child, null, o),
              (t.child.memoizedState = Qa(o)),
              (t.memoizedState = $a),
              l);
      if ((t.mode & 1) === 0) return Ol(e, t, o, null);
      if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
        return ((r = u), (l = Error(T(419))), (r = oa(l, r, void 0)), Ol(e, t, o, r));
      }
      if (((u = (o & e.childLanes) !== 0), Me || u)) {
        if (((r = ke), r !== null)) {
          switch (o & -o) {
            case 4:
              i = 2;
              break;
            case 16:
              i = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              i = 32;
              break;
            case 536870912:
              i = 268435456;
              break;
            default:
              i = 0;
          }
          ((i = (i & (r.suspendedLanes | o)) !== 0 ? 0 : i),
            i !== 0 && i !== l.retryLane && ((l.retryLane = i), Ut(e, i), yt(r, e, i, -1)));
        }
        return (js(), (r = oa(Error(T(421)))), Ol(e, t, o, r));
      }
      return i.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = Yk.bind(null, e)), (i._reactRetry = t), null)
        : ((e = l.treeContext),
          (Qe = un(i.nextSibling)),
          (qe = t),
          (te = !0),
          (ht = null),
          e !== null &&
            ((et[tt++] = Nt),
            (et[tt++] = Ot),
            (et[tt++] = On),
            (Nt = e.id),
            (Ot = e.overflow),
            (On = t)),
          (t = Bs(t, r.children)),
          (t.flags |= 4096),
          t);
    }
    function om(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ba(e.return, t, n));
    }
    function ua(e, t, n, r, i) {
      var l = e.memoizedState;
      l === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
          })
        : ((l.isBackwards = t),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = n),
          (l.tailMode = i));
    }
    function Kd(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
      if ((_e(e, t, r.children, n), (r = ne.current), (r & 2) !== 0))
        ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && om(e, n, t);
            else if (e.tag === 19) om(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      if ((J(ne, r), (t.mode & 1) === 0)) t.memoizedState = null;
      else
        switch (i) {
          case "forwards":
            for (n = t.child, i = null; n !== null; )
              ((e = n.alternate), e !== null && po(e) === null && (i = n), (n = n.sibling));
            ((n = i),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              ua(t, !1, i, n, l));
            break;
          case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null; ) {
              if (((e = i.alternate), e !== null && po(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            ua(t, !0, n, null, l);
            break;
          case "together":
            ua(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ql(e, t) {
      (t.mode & 1) === 0 &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Ht(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (bn |= t.lanes), (n & t.childLanes) === 0)
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(T(153));
      if (t.child !== null) {
        for (
          e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Mk(e, t, n) {
      switch (t.tag) {
        case 3:
          (Qd(t), Ar());
          break;
        case 5:
          vd(t);
          break;
        case 1:
          je(t.type) && oo(t);
          break;
        case 4:
          Ss(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context,
            i = t.memoizedProps.value;
          (J(so, r._currentValue), (r._currentValue = i));
          break;
        case 13:
          if (((r = t.memoizedState), r !== null))
            return r.dehydrated !== null
              ? (J(ne, ne.current & 1), (t.flags |= 128), null)
              : (n & t.child.childLanes) !== 0
                ? qd(e, t, n)
                : (J(ne, ne.current & 1), (e = Ht(e, t, n)), e !== null ? e.sibling : null);
          J(ne, ne.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
            if (r) return Kd(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            J(ne, ne.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), Wd(e, t, n));
      }
      return Ht(e, t, n);
    }
    var Xd, qa, Yd, Gd;
    Xd = function (e, t) {
      for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
          ((n.child.return = n), (n = n.child));
          continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    };
    qa = function () {};
    Yd = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        ((e = t.stateNode), zn(St.current));
        var l = null;
        switch (n) {
          case "input":
            ((i = ha(e, i)), (r = ha(e, r)), (l = []));
            break;
          case "select":
            ((i = ie({}, i, { value: void 0 })), (r = ie({}, r, { value: void 0 })), (l = []));
            break;
          case "textarea":
            ((i = ka(e, i)), (r = ka(e, r)), (l = []));
            break;
          default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = io);
        }
        va(n, r);
        var o;
        n = null;
        for (s in i)
          if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
            if (s === "style") {
              var u = i[s];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              s !== "dangerouslySetInnerHTML" &&
                s !== "children" &&
                s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                s !== "autoFocus" &&
                (wi.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null));
        for (s in r) {
          var a = r[s];
          if (((u = i?.[s]), r.hasOwnProperty(s) && a !== u && (a != null || u != null)))
            if (s === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (a && a.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
              } else (n || (l || (l = []), l.push(s, n)), (n = a));
            else
              s === "dangerouslySetInnerHTML"
                ? ((a = a ? a.__html : void 0),
                  (u = u ? u.__html : void 0),
                  a != null && u !== a && (l = l || []).push(s, a))
                : s === "children"
                  ? (typeof a != "string" && typeof a != "number") || (l = l || []).push(s, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    (wi.hasOwnProperty(s)
                      ? (a != null && s === "onScroll" && Z("scroll", e), l || u === a || (l = []))
                      : (l = l || []).push(s, a));
        }
        n && (l = l || []).push("style", n);
        var s = l;
        (t.updateQueue = s) && (t.flags |= 4);
      }
    };
    Gd = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    };
    function li(e, t) {
      if (!te)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function Se(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 14680064),
            (r |= i.flags & 14680064),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function bk(e, t, n) {
      var r = t.pendingProps;
      switch ((xs(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Se(t), null);
        case 1:
          return (je(t.type) && lo(), Se(t), null);
        case 3:
          return (
            (r = t.stateNode),
            Pr(),
            ee(be),
            ee(Te),
            Ts(),
            r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
            (e === null || e.child === null) &&
              (Rl(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                  ((t.flags |= 1024), ht !== null && (ts(ht), (ht = null)))),
            qa(e, t),
            Se(t),
            null
          );
        case 5:
          As(t);
          var i = zn(zi.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            (Yd(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(T(166));
              return (Se(t), null);
            }
            if (((e = zn(St.current)), Rl(t))) {
              ((r = t.stateNode), (n = t.type));
              var l = t.memoizedProps;
              switch (((r[Ct] = t), (r[Li] = l), (e = (t.mode & 1) !== 0), n)) {
                case "dialog":
                  (Z("cancel", r), Z("close", r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Z("load", r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < fi.length; i++) Z(fi[i], r);
                  break;
                case "source":
                  Z("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  (Z("error", r), Z("load", r));
                  break;
                case "details":
                  Z("toggle", r);
                  break;
                case "input":
                  (dp(r, l), Z("invalid", r));
                  break;
                case "select":
                  ((r._wrapperState = { wasMultiple: !!l.multiple }), Z("invalid", r));
                  break;
                case "textarea":
                  (gp(r, l), Z("invalid", r));
              }
              (va(n, l), (i = null));
              for (var o in l)
                if (l.hasOwnProperty(o)) {
                  var u = l[o];
                  o === "children"
                    ? typeof u == "string"
                      ? r.textContent !== u &&
                        (l.suppressHydrationWarning !== !0 && Bl(r.textContent, u, e),
                        (i = ["children", u]))
                      : typeof u == "number" &&
                        r.textContent !== "" + u &&
                        (l.suppressHydrationWarning !== !0 && Bl(r.textContent, u, e),
                        (i = ["children", "" + u]))
                    : wi.hasOwnProperty(o) && u != null && o === "onScroll" && Z("scroll", r);
                }
              switch (n) {
                case "input":
                  (Dl(r), hp(r, l, !0));
                  break;
                case "textarea":
                  (Dl(r), yp(r));
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof l.onClick == "function" && (r.onclick = io);
              }
              ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
            } else {
              ((o = i.nodeType === 9 ? i : i.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = Fm(n)),
                e === "http://www.w3.org/1999/xhtml"
                  ? n === "script"
                    ? ((e = o.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)))
                    : typeof r.is == "string"
                      ? (e = o.createElement(n, { is: r.is }))
                      : ((e = o.createElement(n)),
                        n === "select" &&
                          ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                  : (e = o.createElementNS(e, n)),
                (e[Ct] = t),
                (e[Li] = r),
                Xd(e, t, !1, !1),
                (t.stateNode = e));
              e: {
                switch (((o = wa(n, r)), n)) {
                  case "dialog":
                    (Z("cancel", e), Z("close", e), (i = r));
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    (Z("load", e), (i = r));
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < fi.length; i++) Z(fi[i], e);
                    i = r;
                    break;
                  case "source":
                    (Z("error", e), (i = r));
                    break;
                  case "img":
                  case "image":
                  case "link":
                    (Z("error", e), Z("load", e), (i = r));
                    break;
                  case "details":
                    (Z("toggle", e), (i = r));
                    break;
                  case "input":
                    (dp(e, r), (i = ha(e, r)), Z("invalid", e));
                    break;
                  case "option":
                    i = r;
                    break;
                  case "select":
                    ((e._wrapperState = { wasMultiple: !!r.multiple }),
                      (i = ie({}, r, { value: void 0 })),
                      Z("invalid", e));
                    break;
                  case "textarea":
                    (gp(e, r), (i = ka(e, r)), Z("invalid", e));
                    break;
                  default:
                    i = r;
                }
                (va(n, i), (u = i));
                for (l in u)
                  if (u.hasOwnProperty(l)) {
                    var a = u[l];
                    l === "style"
                      ? Tm(e, a)
                      : l === "dangerouslySetInnerHTML"
                        ? ((a = a ? a.__html : void 0), a != null && Sm(e, a))
                        : l === "children"
                          ? typeof a == "string"
                            ? (n !== "textarea" || a !== "") && Di(e, a)
                            : typeof a == "number" && Di(e, "" + a)
                          : l !== "suppressContentEditableWarning" &&
                            l !== "suppressHydrationWarning" &&
                            l !== "autoFocus" &&
                            (wi.hasOwnProperty(l)
                              ? a != null && l === "onScroll" && Z("scroll", e)
                              : a != null && is(e, l, a, o));
                  }
                switch (n) {
                  case "input":
                    (Dl(e), hp(e, r, !1));
                    break;
                  case "textarea":
                    (Dl(e), yp(e));
                    break;
                  case "option":
                    r.value != null && e.setAttribute("value", "" + pn(r.value));
                    break;
                  case "select":
                    ((e.multiple = !!r.multiple),
                      (l = r.value),
                      l != null
                        ? xr(e, !!r.multiple, l, !1)
                        : r.defaultValue != null && xr(e, !!r.multiple, r.defaultValue, !0));
                    break;
                  default:
                    typeof i.onClick == "function" && (e.onclick = io);
                }
                switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    r = !!r.autoFocus;
                    break e;
                  case "img":
                    r = !0;
                    break e;
                  default:
                    r = !1;
                }
              }
              r && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (Se(t), null);
        case 6:
          if (e && t.stateNode != null) Gd(e, t, e.memoizedProps, r);
          else {
            if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
            if (((n = zn(zi.current)), zn(St.current), Rl(t))) {
              if (
                ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[Ct] = t),
                (l = r.nodeValue !== n) && ((e = qe), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    Bl(r.nodeValue, n, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      Bl(r.nodeValue, n, (e.mode & 1) !== 0);
                }
              l && (t.flags |= 4);
            } else
              ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                (r[Ct] = t),
                (t.stateNode = r));
          }
          return (Se(t), null);
        case 13:
          if (
            (ee(ne),
            (r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (te && Qe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
              (hd(), Ar(), (t.flags |= 98560), (l = !1));
            else if (((l = Rl(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!l) throw Error(T(318));
                if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                  throw Error(T(317));
                l[Ct] = t;
              } else (Ar(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
              (Se(t), (l = !1));
            } else (ht !== null && (ts(ht), (ht = null)), (l = !0));
            if (!l) return t.flags & 65536 ? t : null;
          }
          return (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((r = r !== null),
              r !== (e !== null && e.memoizedState !== null) &&
                r &&
                ((t.child.flags |= 8192),
                (t.mode & 1) !== 0 &&
                  (e === null || (ne.current & 1) !== 0 ? he === 0 && (he = 3) : js())),
              t.updateQueue !== null && (t.flags |= 4),
              Se(t),
              null);
        case 4:
          return (Pr(), qa(e, t), e === null && Pi(t.stateNode.containerInfo), Se(t), null);
        case 10:
          return (Es(t.type._context), Se(t), null);
        case 17:
          return (je(t.type) && lo(), Se(t), null);
        case 19:
          if ((ee(ne), (l = t.memoizedState), l === null)) return (Se(t), null);
          if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
            if (r) li(l, !1);
            else {
              if (he !== 0 || (e !== null && (e.flags & 128) !== 0))
                for (e = t.child; e !== null; ) {
                  if (((o = po(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        li(l, !1),
                        r = o.updateQueue,
                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        r = n,
                        n = t.child;
                      n !== null;
                    )
                      ((l = n),
                        (e = r),
                        (l.flags &= 14680066),
                        (o = l.alternate),
                        o === null
                          ? ((l.childLanes = 0),
                            (l.lanes = e),
                            (l.child = null),
                            (l.subtreeFlags = 0),
                            (l.memoizedProps = null),
                            (l.memoizedState = null),
                            (l.updateQueue = null),
                            (l.dependencies = null),
                            (l.stateNode = null))
                          : ((l.childLanes = o.childLanes),
                            (l.lanes = o.lanes),
                            (l.child = o.child),
                            (l.subtreeFlags = 0),
                            (l.deletions = null),
                            (l.memoizedProps = o.memoizedProps),
                            (l.memoizedState = o.memoizedState),
                            (l.updateQueue = o.updateQueue),
                            (l.type = o.type),
                            (e = o.dependencies),
                            (l.dependencies =
                              e === null
                                ? null
                                : { lanes: e.lanes, firstContext: e.firstContext })),
                        (n = n.sibling));
                    return (J(ne, (ne.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              l.tail !== null &&
                se() > Lr &&
                ((t.flags |= 128), (r = !0), li(l, !1), (t.lanes = 4194304));
            }
          else {
            if (!r)
              if (((e = po(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  li(l, !0),
                  l.tail === null && l.tailMode === "hidden" && !o.alternate && !te)
                )
                  return (Se(t), null);
              } else
                2 * se() - l.renderingStartTime > Lr &&
                  n !== 1073741824 &&
                  ((t.flags |= 128), (r = !0), li(l, !1), (t.lanes = 4194304));
            l.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((n = l.last), n !== null ? (n.sibling = o) : (t.child = o), (l.last = o));
          }
          return l.tail !== null
            ? ((t = l.tail),
              (l.rendering = t),
              (l.tail = t.sibling),
              (l.renderingStartTime = se()),
              (t.sibling = null),
              (n = ne.current),
              J(ne, r ? (n & 1) | 2 : n & 1),
              t)
            : (Se(t), null);
        case 22:
        case 23:
          return (
            bs(),
            (r = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r && (t.mode & 1) !== 0
              ? ($e & 1073741824) !== 0 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Se(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(T(156, t.tag));
    }
    function jk(e, t) {
      switch ((xs(t), t.tag)) {
        case 1:
          return (
            je(t.type) && lo(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Pr(),
            ee(be),
            ee(Te),
            Ts(),
            (e = t.flags),
            (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (As(t), null);
        case 13:
          if ((ee(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(T(340));
            Ar();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (ee(ne), null);
        case 4:
          return (Pr(), null);
        case 10:
          return (Es(t.type._context), null);
        case 22:
        case 23:
          return (bs(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Ml = !1,
      Ae = !1,
      Uk = typeof WeakSet == "function" ? WeakSet : Set,
      z = null;
    function yr(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == "function")
          try {
            n(null);
          } catch (r) {
            oe(e, t, r);
          }
        else n.current = null;
    }
    function Ka(e, t, n) {
      try {
        n();
      } catch (r) {
        oe(e, t, r);
      }
    }
    var um = !1;
    function Hk(e, t) {
      if (((La = to), (e = nd()), ys(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var i = r.anchorOffset,
                l = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, l.nodeType);
              } catch {
                n = null;
                break e;
              }
              var o = 0,
                u = -1,
                a = -1,
                s = 0,
                c = 0,
                f = e,
                p = null;
              t: for (;;) {
                for (
                  var m;
                  f !== n || (i !== 0 && f.nodeType !== 3) || (u = o + i),
                    f !== l || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                    f.nodeType === 3 && (o += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break t;
                  if (
                    (p === n && ++s === i && (u = o),
                    p === l && ++c === r && (a = o),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = u === -1 || a === -1 ? null : { start: u, end: a };
            } else n = null;
          }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (_a = { focusedElem: e, selectionRange: n }, to = !1, z = t; z !== null; )
        if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
          ((e.return = t), (z = e));
        else
          for (; z !== null; ) {
            t = z;
            try {
              var g = t.alternate;
              if ((t.flags & 1024) !== 0)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (g !== null) {
                      var v = g.memoizedProps,
                        F = g.memoizedState,
                        d = t.stateNode,
                        h = d.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? v : mt(t.type, v),
                          F,
                        );
                      d.__reactInternalSnapshotBeforeUpdate = h;
                    }
                    break;
                  case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1
                      ? (y.textContent = "")
                      : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(T(163));
                }
            } catch (E) {
              oe(t, t.return, E);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (z = e));
              break;
            }
            z = t.return;
          }
      return ((g = um), (um = !1), g);
    }
    function ki(e, t, n) {
      var r = t.updateQueue;
      if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
          if ((i.tag & e) === e) {
            var l = i.destroy;
            ((i.destroy = void 0), l !== void 0 && Ka(t, n, l));
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function Po(e, t) {
      if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function Xa(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        (e.tag, (e = n), typeof t == "function" ? t(e) : (t.current = e));
      }
    }
    function Jd(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Jd(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null && (delete t[Ct], delete t[Li], delete t[Ra], delete t[Ck], delete t[Fk])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function Zd(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function am(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Zd(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Ya(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? n.nodeType === 8
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (n.nodeType === 8
                ? ((t = n.parentNode), t.insertBefore(e, n))
                : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = io)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Ya(e, t, n), e = e.sibling; e !== null; ) (Ya(e, t, n), (e = e.sibling));
    }
    function Ga(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Ga(e, t, n), e = e.sibling; e !== null; ) (Ga(e, t, n), (e = e.sibling));
    }
    var we = null,
      dt = !1;
    function Yt(e, t, n) {
      for (n = n.child; n !== null; ) (eh(e, t, n), (n = n.sibling));
    }
    function eh(e, t, n) {
      if (Ft && typeof Ft.onCommitFiberUnmount == "function")
        try {
          Ft.onCommitFiberUnmount(wo, n);
        } catch {}
      switch (n.tag) {
        case 5:
          Ae || yr(n, t);
        case 6:
          var r = we,
            i = dt;
          ((we = null),
            Yt(e, t, n),
            (we = r),
            (dt = i),
            we !== null &&
              (dt
                ? ((e = we),
                  (n = n.stateNode),
                  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                : we.removeChild(n.stateNode)));
          break;
        case 18:
          we !== null &&
            (dt
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8 ? ea(e.parentNode, n) : e.nodeType === 1 && ea(e, n),
                Si(e))
              : ea(we, n.stateNode));
          break;
        case 4:
          ((r = we),
            (i = dt),
            (we = n.stateNode.containerInfo),
            (dt = !0),
            Yt(e, t, n),
            (we = r),
            (dt = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!Ae && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
            i = r = r.next;
            do {
              var l = i,
                o = l.destroy;
              ((l = l.tag),
                o !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && Ka(n, t, o),
                (i = i.next));
            } while (i !== r);
          }
          Yt(e, t, n);
          break;
        case 1:
          if (!Ae && (yr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
            try {
              ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
            } catch (u) {
              oe(n, t, u);
            }
          Yt(e, t, n);
          break;
        case 21:
          Yt(e, t, n);
          break;
        case 22:
          n.mode & 1
            ? ((Ae = (r = Ae) || n.memoizedState !== null), Yt(e, t, n), (Ae = r))
            : Yt(e, t, n);
          break;
        default:
          Yt(e, t, n);
      }
    }
    function sm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new Uk()),
          t.forEach(function (r) {
            var i = Gk.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i));
          }));
      }
    }
    function pt(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          try {
            var l = e,
              o = t,
              u = o;
            e: for (; u !== null; ) {
              switch (u.tag) {
                case 5:
                  ((we = u.stateNode), (dt = !1));
                  break e;
                case 3:
                  ((we = u.stateNode.containerInfo), (dt = !0));
                  break e;
                case 4:
                  ((we = u.stateNode.containerInfo), (dt = !0));
                  break e;
              }
              u = u.return;
            }
            if (we === null) throw Error(T(160));
            (eh(l, o, i), (we = null), (dt = !1));
            var a = i.alternate;
            (a !== null && (a.return = null), (i.return = null));
          } catch (s) {
            oe(i, t, s);
          }
        }
      if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (th(t, e), (t = t.sibling));
    }
    function th(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((pt(t, e), Dt(e), r & 4)) {
            try {
              (ki(3, e, e.return), Po(3, e));
            } catch (v) {
              oe(e, e.return, v);
            }
            try {
              ki(5, e, e.return);
            } catch (v) {
              oe(e, e.return, v);
            }
          }
          break;
        case 1:
          (pt(t, e), Dt(e), r & 512 && n !== null && yr(n, n.return));
          break;
        case 5:
          if ((pt(t, e), Dt(e), r & 512 && n !== null && yr(n, n.return), e.flags & 32)) {
            var i = e.stateNode;
            try {
              Di(i, "");
            } catch (v) {
              oe(e, e.return, v);
            }
          }
          if (r & 4 && ((i = e.stateNode), i != null)) {
            var l = e.memoizedProps,
              o = n !== null ? n.memoizedProps : l,
              u = e.type,
              a = e.updateQueue;
            if (((e.updateQueue = null), a !== null))
              try {
                (u === "input" && l.type === "radio" && l.name != null && Em(i, l), wa(u, o));
                var s = wa(u, l);
                for (o = 0; o < a.length; o += 2) {
                  var c = a[o],
                    f = a[o + 1];
                  c === "style"
                    ? Tm(i, f)
                    : c === "dangerouslySetInnerHTML"
                      ? Sm(i, f)
                      : c === "children"
                        ? Di(i, f)
                        : is(i, c, f, s);
                }
                switch (u) {
                  case "input":
                    ga(i, l);
                    break;
                  case "textarea":
                    Cm(i, l);
                    break;
                  case "select":
                    var p = i._wrapperState.wasMultiple;
                    i._wrapperState.wasMultiple = !!l.multiple;
                    var m = l.value;
                    m != null
                      ? xr(i, !!l.multiple, m, !1)
                      : p !== !!l.multiple &&
                        (l.defaultValue != null
                          ? xr(i, !!l.multiple, l.defaultValue, !0)
                          : xr(i, !!l.multiple, l.multiple ? [] : "", !1));
                }
                i[Li] = l;
              } catch (v) {
                oe(e, e.return, v);
              }
          }
          break;
        case 6:
          if ((pt(t, e), Dt(e), r & 4)) {
            if (e.stateNode === null) throw Error(T(162));
            ((i = e.stateNode), (l = e.memoizedProps));
            try {
              i.nodeValue = l;
            } catch (v) {
              oe(e, e.return, v);
            }
          }
          break;
        case 3:
          if ((pt(t, e), Dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
            try {
              Si(t.containerInfo);
            } catch (v) {
              oe(e, e.return, v);
            }
          break;
        case 4:
          (pt(t, e), Dt(e));
          break;
        case 13:
          (pt(t, e),
            Dt(e),
            (i = e.child),
            i.flags & 8192 &&
              ((l = i.memoizedState !== null),
              (i.stateNode.isHidden = l),
              !l || (i.alternate !== null && i.alternate.memoizedState !== null) || (Os = se())),
            r & 4 && sm(e));
          break;
        case 22:
          if (
            ((c = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((Ae = (s = Ae) || c), pt(t, e), (Ae = s)) : pt(t, e),
            Dt(e),
            r & 8192)
          ) {
            if (
              ((s = e.memoizedState !== null),
              (e.stateNode.isHidden = s) && !c && (e.mode & 1) !== 0)
            )
              for (z = e, c = e.child; c !== null; ) {
                for (f = z = c; z !== null; ) {
                  switch (((p = z), (m = p.child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      ki(4, p, p.return);
                      break;
                    case 1:
                      yr(p, p.return);
                      var g = p.stateNode;
                      if (typeof g.componentWillUnmount == "function") {
                        ((r = p), (n = p.return));
                        try {
                          ((t = r),
                            (g.props = t.memoizedProps),
                            (g.state = t.memoizedState),
                            g.componentWillUnmount());
                        } catch (v) {
                          oe(r, n, v);
                        }
                      }
                      break;
                    case 5:
                      yr(p, p.return);
                      break;
                    case 22:
                      if (p.memoizedState !== null) {
                        fm(f);
                        continue;
                      }
                  }
                  m !== null ? ((m.return = p), (z = m)) : fm(f);
                }
                c = c.sibling;
              }
            e: for (c = null, f = e; ; ) {
              if (f.tag === 5) {
                if (c === null) {
                  c = f;
                  try {
                    ((i = f.stateNode),
                      s
                        ? ((l = i.style),
                          typeof l.setProperty == "function"
                            ? l.setProperty("display", "none", "important")
                            : (l.display = "none"))
                        : ((u = f.stateNode),
                          (a = f.memoizedProps.style),
                          (o = a != null && a.hasOwnProperty("display") ? a.display : null),
                          (u.style.display = Am("display", o))));
                  } catch (v) {
                    oe(e, e.return, v);
                  }
                }
              } else if (f.tag === 6) {
                if (c === null)
                  try {
                    f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                  } catch (v) {
                    oe(e, e.return, v);
                  }
              } else if (
                ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
                f.child !== null
              ) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break e;
                (c === f && (c = null), (f = f.return));
              }
              (c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling));
            }
          }
          break;
        case 19:
          (pt(t, e), Dt(e), r & 4 && sm(e));
          break;
        case 21:
          break;
        default:
          (pt(t, e), Dt(e));
      }
    }
    function Dt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var n = e.return; n !== null; ) {
              if (Zd(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(T(160));
          }
          switch (r.tag) {
            case 5:
              var i = r.stateNode;
              r.flags & 32 && (Di(i, ""), (r.flags &= -33));
              var l = am(e);
              Ga(e, l, i);
              break;
            case 3:
            case 4:
              var o = r.stateNode.containerInfo,
                u = am(e);
              Ya(e, u, o);
              break;
            default:
              throw Error(T(161));
          }
        } catch (a) {
          oe(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Vk(e, t, n) {
      ((z = e), nh(e, t, n));
    }
    function nh(e, t, n) {
      for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var i = z,
          l = i.child;
        if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || Ml;
          if (!o) {
            var u = i.alternate,
              a = (u !== null && u.memoizedState !== null) || Ae;
            u = Ml;
            var s = Ae;
            if (((Ml = o), (Ae = a) && !s))
              for (z = i; z !== null; )
                ((o = z),
                  (a = o.child),
                  o.tag === 22 && o.memoizedState !== null
                    ? pm(i)
                    : a !== null
                      ? ((a.return = o), (z = a))
                      : pm(i));
            for (; l !== null; ) ((z = l), nh(l, t, n), (l = l.sibling));
            ((z = i), (Ml = u), (Ae = s));
          }
          cm(e, t, n);
        } else
          (i.subtreeFlags & 8772) !== 0 && l !== null ? ((l.return = i), (z = l)) : cm(e, t, n);
      }
    }
    function cm(e) {
      for (; z !== null; ) {
        var t = z;
        if ((t.flags & 8772) !== 0) {
          var n = t.alternate;
          try {
            if ((t.flags & 8772) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Ae || Po(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !Ae)
                    if (n === null) r.componentDidMount();
                    else {
                      var i =
                        t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        i,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  var l = t.updateQueue;
                  l !== null && Kp(t, l, r);
                  break;
                case 3:
                  var o = t.updateQueue;
                  if (o !== null) {
                    if (((n = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          n = t.child.stateNode;
                          break;
                        case 1:
                          n = t.child.stateNode;
                      }
                    Kp(t, o, n);
                  }
                  break;
                case 5:
                  var u = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = u;
                    var a = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        a.autoFocus && n.focus();
                        break;
                      case "img":
                        a.src && (n.src = a.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var s = t.alternate;
                    if (s !== null) {
                      var c = s.memoizedState;
                      if (c !== null) {
                        var f = c.dehydrated;
                        f !== null && Si(f);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(T(163));
              }
            Ae || (t.flags & 512 && Xa(t));
          } catch (p) {
            oe(t, t.return, p);
          }
        }
        if (t === e) {
          z = null;
          break;
        }
        if (((n = t.sibling), n !== null)) {
          ((n.return = t.return), (z = n));
          break;
        }
        z = t.return;
      }
    }
    function fm(e) {
      for (; z !== null; ) {
        var t = z;
        if (t === e) {
          z = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          ((n.return = t.return), (z = n));
          break;
        }
        z = t.return;
      }
    }
    function pm(e) {
      for (; z !== null; ) {
        var t = z;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                Po(4, t);
              } catch (a) {
                oe(t, n, a);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                var i = t.return;
                try {
                  r.componentDidMount();
                } catch (a) {
                  oe(t, i, a);
                }
              }
              var l = t.return;
              try {
                Xa(t);
              } catch (a) {
                oe(t, l, a);
              }
              break;
            case 5:
              var o = t.return;
              try {
                Xa(t);
              } catch (a) {
                oe(t, o, a);
              }
          }
        } catch (a) {
          oe(t, t.return, a);
        }
        if (t === e) {
          z = null;
          break;
        }
        var u = t.sibling;
        if (u !== null) {
          ((u.return = t.return), (z = u));
          break;
        }
        z = t.return;
      }
    }
    var Wk = Math.ceil,
      go = Vt.ReactCurrentDispatcher,
      Rs = Vt.ReactCurrentOwner,
      rt = Vt.ReactCurrentBatchConfig,
      $ = 0,
      ke = null,
      pe = null,
      De = 0,
      $e = 0,
      kr = hn(0),
      he = 0,
      Oi = null,
      bn = 0,
      Io = 0,
      Ns = 0,
      xi = null,
      Oe = null,
      Os = 0,
      Lr = 1 / 0,
      Bt = null,
      yo = !1,
      Ja = null,
      sn = null,
      bl = !1,
      nn = null,
      ko = 0,
      vi = 0,
      Za = null,
      ql = -1,
      Kl = 0;
    function ze() {
      return ($ & 6) !== 0 ? se() : ql !== -1 ? ql : (ql = se());
    }
    function cn(e) {
      return (e.mode & 1) === 0
        ? 1
        : ($ & 2) !== 0 && De !== 0
          ? De & -De
          : Ak.transition !== null
            ? (Kl === 0 && (Kl = jm()), Kl)
            : ((e = q), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qm(e.type))), e);
    }
    function yt(e, t, n, r) {
      if (50 < vi) throw ((vi = 0), (Za = null), Error(T(185)));
      (Mi(e, n, r),
        (($ & 2) === 0 || e !== ke) &&
          (e === ke && (($ & 2) === 0 && (Io |= n), he === 4 && en(e, De)),
          Ue(e, r),
          n === 1 && $ === 0 && (t.mode & 1) === 0 && ((Lr = se() + 500), So && gn())));
    }
    function Ue(e, t) {
      var n = e.callbackNode;
      P1(e, t);
      var r = eo(e, e === ke ? De : 0);
      if (r === 0) (n !== null && vp(n), (e.callbackNode = null), (e.callbackPriority = 0));
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && vp(n), t === 1))
          (e.tag === 0 ? Sk(mm.bind(null, e)) : pd(mm.bind(null, e)),
            Dk(function () {
              ($ & 6) === 0 && gn();
            }),
            (n = null));
        else {
          switch (Um(r)) {
            case 1:
              n = ss;
              break;
            case 4:
              n = Mm;
              break;
            case 16:
              n = Zl;
              break;
            case 536870912:
              n = bm;
              break;
            default:
              n = Zl;
          }
          n = ch(n, rh.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
      }
    }
    function rh(e, t) {
      if (((ql = -1), (Kl = 0), ($ & 6) !== 0)) throw Error(T(327));
      var n = e.callbackNode;
      if (Cr() && e.callbackNode !== n) return null;
      var r = eo(e, e === ke ? De : 0);
      if (r === 0) return null;
      if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xo(e, r);
      else {
        t = r;
        var i = $;
        $ |= 2;
        var l = lh();
        (ke !== e || De !== t) && ((Bt = null), (Lr = se() + 500), Bn(e, t));
        do
          try {
            qk();
            break;
          } catch (u) {
            ih(e, u);
          }
        while (!0);
        (Ds(),
          (go.current = l),
          ($ = i),
          pe !== null ? (t = 0) : ((ke = null), (De = 0), (t = he)));
      }
      if (t !== 0) {
        if ((t === 2 && ((i = Sa(e)), i !== 0 && ((r = i), (t = es(e, i)))), t === 1))
          throw ((n = Oi), Bn(e, 0), en(e, r), Ue(e, se()), n);
        if (t === 6) en(e, r);
        else {
          if (
            ((i = e.current.alternate),
            (r & 30) === 0 &&
              !$k(i) &&
              ((t = xo(e, r)),
              t === 2 && ((l = Sa(e)), l !== 0 && ((r = l), (t = es(e, l)))),
              t === 1))
          )
            throw ((n = Oi), Bn(e, 0), en(e, r), Ue(e, se()), n);
          switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(T(345));
            case 2:
              In(e, Oe, Bt);
              break;
            case 3:
              if ((en(e, r), (r & 130023424) === r && ((t = Os + 500 - se()), 10 < t))) {
                if (eo(e, 0) !== 0) break;
                if (((i = e.suspendedLanes), (i & r) !== r)) {
                  (ze(), (e.pingedLanes |= e.suspendedLanes & i));
                  break;
                }
                e.timeoutHandle = Ba(In.bind(null, e, Oe, Bt), t);
                break;
              }
              In(e, Oe, Bt);
              break;
            case 4:
              if ((en(e, r), (r & 4194240) === r)) break;
              for (t = e.eventTimes, i = -1; 0 < r; ) {
                var o = 31 - gt(r);
                ((l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l));
              }
              if (
                ((r = i),
                (r = se() - r),
                (r =
                  (120 > r
                    ? 120
                    : 480 > r
                      ? 480
                      : 1080 > r
                        ? 1080
                        : 1920 > r
                          ? 1920
                          : 3e3 > r
                            ? 3e3
                            : 4320 > r
                              ? 4320
                              : 1960 * Wk(r / 1960)) - r),
                10 < r)
              ) {
                e.timeoutHandle = Ba(In.bind(null, e, Oe, Bt), r);
                break;
              }
              In(e, Oe, Bt);
              break;
            case 5:
              In(e, Oe, Bt);
              break;
            default:
              throw Error(T(329));
          }
        }
      }
      return (Ue(e, se()), e.callbackNode === n ? rh.bind(null, e) : null);
    }
    function es(e, t) {
      var n = xi;
      return (
        e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
        (e = xo(e, t)),
        e !== 2 && ((t = Oe), (Oe = n), t !== null && ts(t)),
        e
      );
    }
    function ts(e) {
      Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
    }
    function $k(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                l = i.getSnapshot;
              i = i.value;
              try {
                if (!kt(l(), i)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function en(e, t) {
      for (
        t &= ~Ns, t &= ~Io, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - gt(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function mm(e) {
      if (($ & 6) !== 0) throw Error(T(327));
      Cr();
      var t = eo(e, 0);
      if ((t & 1) === 0) return (Ue(e, se()), null);
      var n = xo(e, t);
      if (e.tag !== 0 && n === 2) {
        var r = Sa(e);
        r !== 0 && ((t = r), (n = es(e, r)));
      }
      if (n === 1) throw ((n = Oi), Bn(e, 0), en(e, t), Ue(e, se()), n);
      if (n === 6) throw Error(T(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        In(e, Oe, Bt),
        Ue(e, se()),
        null
      );
    }
    function Ms(e, t) {
      var n = $;
      $ |= 1;
      try {
        return e(t);
      } finally {
        (($ = n), $ === 0 && ((Lr = se() + 500), So && gn()));
      }
    }
    function jn(e) {
      nn !== null && nn.tag === 0 && ($ & 6) === 0 && Cr();
      var t = $;
      $ |= 1;
      var n = rt.transition,
        r = q;
      try {
        if (((rt.transition = null), (q = 1), e)) return e();
      } finally {
        ((q = r), (rt.transition = n), ($ = t), ($ & 6) === 0 && gn());
      }
    }
    function bs() {
      (($e = kr.current), ee(kr));
    }
    function Bn(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), wk(n)), pe !== null))
        for (n = pe.return; n !== null; ) {
          var r = n;
          switch ((xs(r), r.tag)) {
            case 1:
              ((r = r.type.childContextTypes), r != null && lo());
              break;
            case 3:
              (Pr(), ee(be), ee(Te), Ts());
              break;
            case 5:
              As(r);
              break;
            case 4:
              Pr();
              break;
            case 13:
              ee(ne);
              break;
            case 19:
              ee(ne);
              break;
            case 10:
              Es(r.type._context);
              break;
            case 22:
            case 23:
              bs();
          }
          n = n.return;
        }
      if (
        ((ke = e),
        (pe = e = fn(e.current, null)),
        (De = $e = t),
        (he = 0),
        (Oi = null),
        (Ns = Io = bn = 0),
        (Oe = xi = null),
        _n !== null)
      ) {
        for (t = 0; t < _n.length; t++)
          if (((n = _n[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var i = r.next,
              l = n.pending;
            if (l !== null) {
              var o = l.next;
              ((l.next = i), (r.next = o));
            }
            n.pending = r;
          }
        _n = null;
      }
      return e;
    }
    function ih(e, t) {
      do {
        var n = pe;
        try {
          if ((Ds(), (Wl.current = ho), mo)) {
            for (var r = re.memoizedState; r !== null; ) {
              var i = r.queue;
              (i !== null && (i.pending = null), (r = r.next));
            }
            mo = !1;
          }
          if (
            ((Mn = 0),
            (ye = de = re = null),
            (yi = !1),
            (Bi = 0),
            (Rs.current = null),
            n === null || n.return === null)
          ) {
            ((he = 1), (Oi = t), (pe = null));
            break;
          }
          e: {
            var l = e,
              o = n.return,
              u = n,
              a = t;
            if (
              ((t = De),
              (u.flags |= 32768),
              a !== null && typeof a == "object" && typeof a.then == "function")
            ) {
              var s = a,
                c = u,
                f = c.tag;
              if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
                var p = c.alternate;
                p
                  ? ((c.updateQueue = p.updateQueue),
                    (c.memoizedState = p.memoizedState),
                    (c.lanes = p.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var m = em(o);
              if (m !== null) {
                ((m.flags &= -257), tm(m, o, u, l, t), m.mode & 1 && Zp(l, s, t), (t = m), (a = s));
                var g = t.updateQueue;
                if (g === null) {
                  var v = new Set();
                  (v.add(a), (t.updateQueue = v));
                } else g.add(a);
                break e;
              } else {
                if ((t & 1) === 0) {
                  (Zp(l, s, t), js());
                  break e;
                }
                a = Error(T(426));
              }
            } else if (te && u.mode & 1) {
              var F = em(o);
              if (F !== null) {
                ((F.flags & 65536) === 0 && (F.flags |= 256), tm(F, o, u, l, t), vs(Ir(a, u)));
                break e;
              }
            }
            ((l = a = Ir(a, u)),
              he !== 4 && (he = 2),
              xi === null ? (xi = [l]) : xi.push(l),
              (l = o));
            do {
              switch (l.tag) {
                case 3:
                  ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                  var d = Ud(l, a, t);
                  qp(l, d);
                  break e;
                case 1:
                  u = a;
                  var h = l.type,
                    y = l.stateNode;
                  if (
                    (l.flags & 128) === 0 &&
                    (typeof h.getDerivedStateFromError == "function" ||
                      (y !== null &&
                        typeof y.componentDidCatch == "function" &&
                        (sn === null || !sn.has(y))))
                  ) {
                    ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                    var E = Hd(l, u, t);
                    qp(l, E);
                    break e;
                  }
              }
              l = l.return;
            } while (l !== null);
          }
          uh(n);
        } catch (S) {
          ((t = S), pe === n && n !== null && (pe = n = n.return));
          continue;
        }
        break;
      } while (!0);
    }
    function lh() {
      var e = go.current;
      return ((go.current = ho), e === null ? ho : e);
    }
    function js() {
      ((he === 0 || he === 3 || he === 2) && (he = 4),
        ke === null || ((bn & 268435455) === 0 && (Io & 268435455) === 0) || en(ke, De));
    }
    function xo(e, t) {
      var n = $;
      $ |= 2;
      var r = lh();
      (ke !== e || De !== t) && ((Bt = null), Bn(e, t));
      do
        try {
          Qk();
          break;
        } catch (i) {
          ih(e, i);
        }
      while (!0);
      if ((Ds(), ($ = n), (go.current = r), pe !== null)) throw Error(T(261));
      return ((ke = null), (De = 0), he);
    }
    function Qk() {
      for (; pe !== null; ) oh(pe);
    }
    function qk() {
      for (; pe !== null && !v1(); ) oh(pe);
    }
    function oh(e) {
      var t = sh(e.alternate, e, $e);
      ((e.memoizedProps = e.pendingProps), t === null ? uh(e) : (pe = t), (Rs.current = null));
    }
    function uh(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), (t.flags & 32768) === 0)) {
          if (((n = bk(n, t, $e)), n !== null)) {
            pe = n;
            return;
          }
        } else {
          if (((n = jk(n, t)), n !== null)) {
            ((n.flags &= 32767), (pe = n));
            return;
          }
          if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((he = 6), (pe = null));
            return;
          }
        }
        if (((t = t.sibling), t !== null)) {
          pe = t;
          return;
        }
        pe = t = e;
      } while (t !== null);
      he === 0 && (he = 5);
    }
    function In(e, t, n) {
      var r = q,
        i = rt.transition;
      try {
        ((rt.transition = null), (q = 1), Kk(e, t, n, r));
      } finally {
        ((rt.transition = i), (q = r));
      }
      return null;
    }
    function Kk(e, t, n, r) {
      do Cr();
      while (nn !== null);
      if (($ & 6) !== 0) throw Error(T(327));
      n = e.finishedWork;
      var i = e.finishedLanes;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(T(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var l = n.lanes | n.childLanes;
      if (
        (I1(e, l),
        e === ke && ((pe = ke = null), (De = 0)),
        ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
          bl ||
          ((bl = !0),
          ch(Zl, function () {
            return (Cr(), null);
          })),
        (l = (n.flags & 15990) !== 0),
        (n.subtreeFlags & 15990) !== 0 || l)
      ) {
        ((l = rt.transition), (rt.transition = null));
        var o = q;
        q = 1;
        var u = $;
        (($ |= 4),
          (Rs.current = null),
          Hk(e, n),
          th(n, e),
          gk(_a),
          (to = !!La),
          (_a = La = null),
          (e.current = n),
          Vk(n, e, i),
          w1(),
          ($ = u),
          (q = o),
          (rt.transition = l));
      } else e.current = n;
      if (
        (bl && ((bl = !1), (nn = e), (ko = i)),
        (l = e.pendingLanes),
        l === 0 && (sn = null),
        C1(n.stateNode, r),
        Ue(e, se()),
        t !== null)
      )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
          ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
      if (yo) throw ((yo = !1), (e = Ja), (Ja = null), e);
      return (
        (ko & 1) !== 0 && e.tag !== 0 && Cr(),
        (l = e.pendingLanes),
        (l & 1) !== 0 ? (e === Za ? vi++ : ((vi = 0), (Za = e))) : (vi = 0),
        gn(),
        null
      );
    }
    function Cr() {
      if (nn !== null) {
        var e = Um(ko),
          t = rt.transition,
          n = q;
        try {
          if (((rt.transition = null), (q = 16 > e ? 16 : e), nn === null)) var r = !1;
          else {
            if (((e = nn), (nn = null), (ko = 0), ($ & 6) !== 0)) throw Error(T(331));
            var i = $;
            for ($ |= 4, z = e.current; z !== null; ) {
              var l = z,
                o = l.child;
              if ((z.flags & 16) !== 0) {
                var u = l.deletions;
                if (u !== null) {
                  for (var a = 0; a < u.length; a++) {
                    var s = u[a];
                    for (z = s; z !== null; ) {
                      var c = z;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ki(8, c, l);
                      }
                      var f = c.child;
                      if (f !== null) ((f.return = c), (z = f));
                      else
                        for (; z !== null; ) {
                          c = z;
                          var p = c.sibling,
                            m = c.return;
                          if ((Jd(c), c === s)) {
                            z = null;
                            break;
                          }
                          if (p !== null) {
                            ((p.return = m), (z = p));
                            break;
                          }
                          z = m;
                        }
                    }
                  }
                  var g = l.alternate;
                  if (g !== null) {
                    var v = g.child;
                    if (v !== null) {
                      g.child = null;
                      do {
                        var F = v.sibling;
                        ((v.sibling = null), (v = F));
                      } while (v !== null);
                    }
                  }
                  z = l;
                }
              }
              if ((l.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = l), (z = o));
              else
                e: for (; z !== null; ) {
                  if (((l = z), (l.flags & 2048) !== 0))
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ki(9, l, l.return);
                    }
                  var d = l.sibling;
                  if (d !== null) {
                    ((d.return = l.return), (z = d));
                    break e;
                  }
                  z = l.return;
                }
            }
            var h = e.current;
            for (z = h; z !== null; ) {
              o = z;
              var y = o.child;
              if ((o.subtreeFlags & 2064) !== 0 && y !== null) ((y.return = o), (z = y));
              else
                e: for (o = h; z !== null; ) {
                  if (((u = z), (u.flags & 2048) !== 0))
                    try {
                      switch (u.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Po(9, u);
                      }
                    } catch (S) {
                      oe(u, u.return, S);
                    }
                  if (u === o) {
                    z = null;
                    break e;
                  }
                  var E = u.sibling;
                  if (E !== null) {
                    ((E.return = u.return), (z = E));
                    break e;
                  }
                  z = u.return;
                }
            }
            if ((($ = i), gn(), Ft && typeof Ft.onPostCommitFiberRoot == "function"))
              try {
                Ft.onPostCommitFiberRoot(wo, e);
              } catch {}
            r = !0;
          }
          return r;
        } finally {
          ((q = n), (rt.transition = t));
        }
      }
      return !1;
    }
    function dm(e, t, n) {
      ((t = Ir(n, t)),
        (t = Ud(e, t, 1)),
        (e = an(e, t, 1)),
        (t = ze()),
        e !== null && (Mi(e, 1, t), Ue(e, t)));
    }
    function oe(e, t, n) {
      if (e.tag === 3) dm(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            dm(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r)))
            ) {
              ((e = Ir(n, e)),
                (e = Hd(t, e, 1)),
                (t = an(t, e, 1)),
                (e = ze()),
                t !== null && (Mi(t, 1, e), Ue(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Xk(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = ze()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ke === e &&
          (De & n) === n &&
          (he === 4 || (he === 3 && (De & 130023424) === De && 500 > se() - Os)
            ? Bn(e, 0)
            : (Ns |= n)),
        Ue(e, t));
    }
    function ah(e, t) {
      t === 0 &&
        ((e.mode & 1) === 0
          ? (t = 1)
          : ((t = Fl), (Fl <<= 1), (Fl & 130023424) === 0 && (Fl = 4194304)));
      var n = ze();
      ((e = Ut(e, t)), e !== null && (Mi(e, t, n), Ue(e, n)));
    }
    function Yk(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), ah(e, n));
    }
    function Gk(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(T(314));
      }
      (r !== null && r.delete(t), ah(e, n));
    }
    var sh;
    sh = function (e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || be.current) Me = !0;
        else {
          if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Me = !1), Mk(e, t, n));
          Me = (e.flags & 131072) !== 0;
        }
      else ((Me = !1), te && (t.flags & 1048576) !== 0 && md(t, ao, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          (Ql(e, t), (e = t.pendingProps));
          var i = Sr(t, Te.current);
          (Er(t, n), (i = Is(null, t, r, e, i, n)));
          var l = Ls();
          return (
            (t.flags |= 1),
            typeof i == "object" &&
            i !== null &&
            typeof i.render == "function" &&
            i.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                je(r) ? ((l = !0), oo(t)) : (l = !1),
                (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                Fs(t),
                (i.updater = To),
                (t.stateNode = i),
                (i._reactInternals = t),
                Ua(t, r, e, n),
                (t = Wa(null, t, r, !0, l, n)))
              : ((t.tag = 0), te && l && ks(t), _e(null, t, i, n), (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          e: {
            switch (
              (Ql(e, t),
              (e = t.pendingProps),
              (i = r._init),
              (r = i(r._payload)),
              (t.type = r),
              (i = t.tag = Zk(r)),
              (e = mt(r, e)),
              i)
            ) {
              case 0:
                t = Va(null, t, r, e, n);
                break e;
              case 1:
                t = im(null, t, r, e, n);
                break e;
              case 11:
                t = nm(null, t, r, e, n);
                break e;
              case 14:
                t = rm(null, t, r, mt(r.type, e), n);
                break e;
            }
            throw Error(T(306, r, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : mt(r, i)),
            Va(e, t, r, i, n)
          );
        case 1:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : mt(r, i)),
            im(e, t, r, i, n)
          );
        case 3:
          e: {
            if ((Qd(t), e === null)) throw Error(T(387));
            ((r = t.pendingProps),
              (l = t.memoizedState),
              (i = l.element),
              xd(e, t),
              fo(t, r, null, n));
            var o = t.memoizedState;
            if (((r = o.element), l.isDehydrated))
              if (
                ((l = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                  pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                  transitions: o.transitions,
                }),
                (t.updateQueue.baseState = l),
                (t.memoizedState = l),
                t.flags & 256)
              ) {
                ((i = Ir(Error(T(423)), t)), (t = lm(e, t, r, n, i)));
                break e;
              } else if (r !== i) {
                ((i = Ir(Error(T(424)), t)), (t = lm(e, t, r, n, i)));
                break e;
              } else
                for (
                  Qe = un(t.stateNode.containerInfo.firstChild),
                    qe = t,
                    te = !0,
                    ht = null,
                    n = yd(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            else {
              if ((Ar(), r === i)) {
                t = Ht(e, t, n);
                break e;
              }
              _e(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            vd(t),
            e === null && Ma(t),
            (r = t.type),
            (i = t.pendingProps),
            (l = e !== null ? e.memoizedProps : null),
            (o = i.children),
            za(r, i) ? (o = null) : l !== null && za(r, l) && (t.flags |= 32),
            $d(e, t),
            _e(e, t, o, n),
            t.child
          );
        case 6:
          return (e === null && Ma(t), null);
        case 13:
          return qd(e, t, n);
        case 4:
          return (
            Ss(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Tr(t, null, r, n)) : _e(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : mt(r, i)),
            nm(e, t, r, i, n)
          );
        case 7:
          return (_e(e, t, t.pendingProps, n), t.child);
        case 8:
          return (_e(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (_e(e, t, t.pendingProps.children, n), t.child);
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (i = t.pendingProps),
              (l = t.memoizedProps),
              (o = i.value),
              J(so, r._currentValue),
              (r._currentValue = o),
              l !== null)
            )
              if (kt(l.value, o)) {
                if (l.children === i.children && !be.current) {
                  t = Ht(e, t, n);
                  break e;
                }
              } else
                for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                  var u = l.dependencies;
                  if (u !== null) {
                    o = l.child;
                    for (var a = u.firstContext; a !== null; ) {
                      if (a.context === r) {
                        if (l.tag === 1) {
                          ((a = Mt(-1, n & -n)), (a.tag = 2));
                          var s = l.updateQueue;
                          if (s !== null) {
                            s = s.shared;
                            var c = s.pending;
                            (c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
                              (s.pending = a));
                          }
                        }
                        ((l.lanes |= n),
                          (a = l.alternate),
                          a !== null && (a.lanes |= n),
                          ba(l.return, n, t),
                          (u.lanes |= n));
                        break;
                      }
                      a = a.next;
                    }
                  } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
                  else if (l.tag === 18) {
                    if (((o = l.return), o === null)) throw Error(T(341));
                    ((o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      ba(o, n, t),
                      (o = l.sibling));
                  } else o = l.child;
                  if (o !== null) o.return = l;
                  else
                    for (o = l; o !== null; ) {
                      if (o === t) {
                        o = null;
                        break;
                      }
                      if (((l = o.sibling), l !== null)) {
                        ((l.return = o.return), (o = l));
                        break;
                      }
                      o = o.return;
                    }
                  l = o;
                }
            (_e(e, t, i.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (i = t.type),
            (r = t.pendingProps.children),
            Er(t, n),
            (i = it(i)),
            (r = r(i)),
            (t.flags |= 1),
            _e(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (r = t.type), (i = mt(r, t.pendingProps)), (i = mt(r.type, i)), rm(e, t, r, i, n)
          );
        case 15:
          return Vd(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : mt(r, i)),
            Ql(e, t),
            (t.tag = 1),
            je(r) ? ((e = !0), oo(t)) : (e = !1),
            Er(t, n),
            jd(t, r, i),
            Ua(t, r, i, n),
            Wa(null, t, r, !0, e, n)
          );
        case 19:
          return Kd(e, t, n);
        case 22:
          return Wd(e, t, n);
      }
      throw Error(T(156, t.tag));
    };
    function ch(e, t) {
      return Om(e, t);
    }
    function Jk(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function nt(e, t, n, r) {
      return new Jk(e, t, n, r);
    }
    function Us(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Zk(e) {
      if (typeof e == "function") return Us(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === os)) return 11;
        if (e === us) return 14;
      }
      return 2;
    }
    function fn(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = nt(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Xl(e, t, n, r, i, l) {
      var o = 2;
      if (((r = e), typeof e == "function")) Us(e) && (o = 1);
      else if (typeof e == "string") o = 5;
      else
        e: switch (e) {
          case ar:
            return Rn(n.children, i, l, t);
          case ls:
            ((o = 8), (i |= 8));
            break;
          case fa:
            return ((e = nt(12, n, t, i | 2)), (e.elementType = fa), (e.lanes = l), e);
          case pa:
            return ((e = nt(13, n, t, i)), (e.elementType = pa), (e.lanes = l), e);
          case ma:
            return ((e = nt(19, n, t, i)), (e.elementType = ma), (e.lanes = l), e);
          case vm:
            return Lo(n, i, l, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case km:
                  o = 10;
                  break e;
                case xm:
                  o = 9;
                  break e;
                case os:
                  o = 11;
                  break e;
                case us:
                  o = 14;
                  break e;
                case Gt:
                  ((o = 16), (r = null));
                  break e;
              }
            throw Error(T(130, e == null ? e : typeof e, ""));
        }
      return ((t = nt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t);
    }
    function Rn(e, t, n, r) {
      return ((e = nt(7, e, r, t)), (e.lanes = n), e);
    }
    function Lo(e, t, n, r) {
      return (
        (e = nt(22, e, r, t)),
        (e.elementType = vm),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function aa(e, t, n) {
      return ((e = nt(6, e, null, t)), (e.lanes = n), e);
    }
    function sa(e, t, n) {
      return (
        (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function ex(e, t, n, r, i) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Qu(0)),
        (this.expirationTimes = Qu(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Qu(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null));
    }
    function Hs(e, t, n, r, i, l, o, u, a) {
      return (
        (e = new ex(e, t, n, u, a)),
        t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
        (l = nt(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Fs(l),
        e
      );
    }
    function tx(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: ur,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function fh(e) {
      if (!e) return mn;
      e = e._reactInternals;
      e: {
        if (Hn(e) !== e || e.tag !== 1) throw Error(T(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (je(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(T(171));
      }
      if (e.tag === 1) {
        var n = e.type;
        if (je(n)) return fd(e, n, t);
      }
      return t;
    }
    function ph(e, t, n, r, i, l, o, u, a) {
      return (
        (e = Hs(n, r, !0, e, i, l, o, u, a)),
        (e.context = fh(null)),
        (n = e.current),
        (r = ze()),
        (i = cn(n)),
        (l = Mt(r, i)),
        (l.callback = t ?? null),
        an(n, l, i),
        (e.current.lanes = i),
        Mi(e, i, r),
        Ue(e, r),
        e
      );
    }
    function _o(e, t, n, r) {
      var i = t.current,
        l = ze(),
        o = cn(i);
      return (
        (n = fh(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Mt(l, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = an(i, t, o)),
        e !== null && (yt(e, i, o, l), Vl(e, i, o)),
        o
      );
    }
    function vo(e) {
      return ((e = e.current), e.child ? (e.child.tag === 5, e.child.stateNode) : null);
    }
    function hm(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function Vs(e, t) {
      (hm(e, t), (e = e.alternate) && hm(e, t));
    }
    function nx() {
      return null;
    }
    var mh =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function Ws(e) {
      this._internalRoot = e;
    }
    zo.prototype.render = Ws.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(T(409));
      _o(e, t, null, null);
    };
    zo.prototype.unmount = Ws.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (jn(function () {
          _o(null, e, null, null);
        }),
          (t[jt] = null));
      }
    };
    function zo(e) {
      this._internalRoot = e;
    }
    zo.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Wm();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
        (Zt.splice(n, 0, e), n === 0 && Qm(e));
      }
    };
    function $s(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function Bo(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function gm() {}
    function rx(e, t, n, r, i) {
      if (i) {
        if (typeof r == "function") {
          var l = r;
          r = function () {
            var s = vo(o);
            l.call(s);
          };
        }
        var o = ph(t, r, e, 0, null, !1, !1, "", gm);
        return (
          (e._reactRootContainer = o),
          (e[jt] = o.current),
          Pi(e.nodeType === 8 ? e.parentNode : e),
          jn(),
          o
        );
      }
      for (; (i = e.lastChild); ) e.removeChild(i);
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var s = vo(a);
          u.call(s);
        };
      }
      var a = Hs(e, 0, !1, null, null, !1, !1, "", gm);
      return (
        (e._reactRootContainer = a),
        (e[jt] = a.current),
        Pi(e.nodeType === 8 ? e.parentNode : e),
        jn(function () {
          _o(t, a, n, r);
        }),
        a
      );
    }
    function Ro(e, t, n, r, i) {
      var l = n._reactRootContainer;
      if (l) {
        var o = l;
        if (typeof i == "function") {
          var u = i;
          i = function () {
            var a = vo(o);
            u.call(a);
          };
        }
        _o(t, o, e, i);
      } else o = rx(n, t, e, i, r);
      return vo(o);
    }
    Hm = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = ci(t.pendingLanes);
            n !== 0 && (cs(t, n | 1), Ue(t, se()), ($ & 6) === 0 && ((Lr = se() + 500), gn()));
          }
          break;
        case 13:
          (jn(function () {
            var r = Ut(e, 1);
            if (r !== null) {
              var i = ze();
              yt(r, e, 1, i);
            }
          }),
            Vs(e, 1));
      }
    };
    fs = function (e) {
      if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
          var n = ze();
          yt(t, e, 134217728, n);
        }
        Vs(e, 134217728);
      }
    };
    Vm = function (e) {
      if (e.tag === 13) {
        var t = cn(e),
          n = Ut(e, t);
        if (n !== null) {
          var r = ze();
          yt(n, e, t, r);
        }
        Vs(e, t);
      }
    };
    Wm = function () {
      return q;
    };
    $m = function (e, t) {
      var n = q;
      try {
        return ((q = e), t());
      } finally {
        q = n;
      }
    };
    Ea = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ga(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = Fo(r);
                if (!i) throw Error(T(90));
                (Dm(r), ga(r, i));
              }
            }
          }
          break;
        case "textarea":
          Cm(e, n);
          break;
        case "select":
          ((t = n.value), t != null && xr(e, !!n.multiple, t, !1));
      }
    };
    Lm = Ms;
    _m = jn;
    var ix = { usingClientEntryPoint: !1, Events: [ji, pr, Fo, Pm, Im, Ms] },
      oi = {
        findFiberByHostInstance: Ln,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      lx = {
        bundleType: oi.bundleType,
        version: oi.version,
        rendererPackageName: oi.rendererPackageName,
        rendererConfig: oi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Vt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = Rm(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: oi.findFiberByHostInstance || nx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      ((ui = __REACT_DEVTOOLS_GLOBAL_HOOK__), !ui.isDisabled && ui.supportsFiber)
    )
      try {
        ((wo = ui.inject(lx)), (Ft = ui));
      } catch {}
    var ui;
    Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ix;
    Ye.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!$s(t)) throw Error(T(200));
      return tx(e, t, null, n);
    };
    Ye.createRoot = function (e, t) {
      if (!$s(e)) throw Error(T(299));
      var n = !1,
        r = "",
        i = mh;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Hs(e, 1, !1, null, null, n, !1, r, i)),
        (e[jt] = t.current),
        Pi(e.nodeType === 8 ? e.parentNode : e),
        new Ws(t)
      );
    };
    Ye.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(T(188))
          : ((e = Object.keys(e).join(",")), Error(T(268, e)));
      return ((e = Rm(t)), (e = e === null ? null : e.stateNode), e);
    };
    Ye.flushSync = function (e) {
      return jn(e);
    };
    Ye.hydrate = function (e, t, n) {
      if (!Bo(t)) throw Error(T(200));
      return Ro(null, e, t, !0, n);
    };
    Ye.hydrateRoot = function (e, t, n) {
      if (!$s(e)) throw Error(T(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        l = "",
        o = mh;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = ph(t, null, e, 1, n ?? null, i, !1, l, o)),
        (e[jt] = t.current),
        Pi(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i));
      return new zo(t);
    };
    Ye.render = function (e, t, n) {
      if (!Bo(t)) throw Error(T(200));
      return Ro(null, e, t, !1, n);
    };
    Ye.unmountComponentAtNode = function (e) {
      if (!Bo(e)) throw Error(T(40));
      return e._reactRootContainer
        ? (jn(function () {
            Ro(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[jt] = null));
            });
          }),
          !0)
        : !1;
    };
    Ye.unstable_batchedUpdates = Ms;
    Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Bo(n)) throw Error(T(200));
      if (e == null || e._reactInternals === void 0) throw Error(T(38));
      return Ro(e, t, n, !1, r);
    };
    Ye.version = "18.3.1-next-f1338f8080-20240426";
  });
  var yh = Ne((dC, gh) => {
    "use strict";
    function hh() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh);
        } catch (e) {
          console.error(e);
        }
    }
    (hh(), (gh.exports = dh()));
  });
  var xh = Ne((Qs) => {
    "use strict";
    var kh = yh();
    ((Qs.createRoot = kh.createRoot), (Qs.hydrateRoot = kh.hydrateRoot));
    var hC;
  });
  var zh = Ne((vF, _h) => {
    "use strict";
    var Th = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      hx = /\n/g,
      gx = /^\s*/,
      yx = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      kx = /^:\s*/,
      xx = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      vx = /^[;\s]*/,
      wx = /^\s+|\s+$/g,
      Dx = `
`,
      Ph = "/",
      Ih = "*",
      $n = "",
      Ex = "comment",
      Cx = "declaration";
    function Fx(e, t) {
      if (typeof e != "string") throw new TypeError("First argument must be a string");
      if (!e) return [];
      t = t || {};
      var n = 1,
        r = 1;
      function i(g) {
        var v = g.match(hx);
        v && (n += v.length);
        var F = g.lastIndexOf(Dx);
        r = ~F ? g.length - F : r + g.length;
      }
      function l() {
        var g = { line: n, column: r };
        return function (v) {
          return ((v.position = new o(g)), s(), v);
        };
      }
      function o(g) {
        ((this.start = g), (this.end = { line: n, column: r }), (this.source = t.source));
      }
      o.prototype.content = e;
      function u(g) {
        var v = new Error(t.source + ":" + n + ":" + r + ": " + g);
        if (
          ((v.reason = g),
          (v.filename = t.source),
          (v.line = n),
          (v.column = r),
          (v.source = e),
          !t.silent)
        )
          throw v;
      }
      function a(g) {
        var v = g.exec(e);
        if (v) {
          var F = v[0];
          return (i(F), (e = e.slice(F.length)), v);
        }
      }
      function s() {
        a(gx);
      }
      function c(g) {
        var v;
        for (g = g || []; (v = f()); ) v !== !1 && g.push(v);
        return g;
      }
      function f() {
        var g = l();
        if (!(Ph != e.charAt(0) || Ih != e.charAt(1))) {
          for (var v = 2; $n != e.charAt(v) && (Ih != e.charAt(v) || Ph != e.charAt(v + 1)); ) ++v;
          if (((v += 2), $n === e.charAt(v - 1))) return u("End of comment missing");
          var F = e.slice(2, v - 2);
          return ((r += 2), i(F), (e = e.slice(v)), (r += 2), g({ type: Ex, comment: F }));
        }
      }
      function p() {
        var g = l(),
          v = a(yx);
        if (v) {
          if ((f(), !a(kx))) return u("property missing ':'");
          var F = a(xx),
            d = g({
              type: Cx,
              property: Lh(v[0].replace(Th, $n)),
              value: F ? Lh(F[0].replace(Th, $n)) : $n,
            });
          return (a(vx), d);
        }
      }
      function m() {
        var g = [];
        c(g);
        for (var v; (v = p()); ) v !== !1 && (g.push(v), c(g));
        return g;
      }
      return (s(), m());
    }
    function Lh(e) {
      return e ? e.replace(wx, $n) : $n;
    }
    _h.exports = Fx;
  });
  var Bh = Ne((Wi) => {
    "use strict";
    var Sx =
      (Wi && Wi.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(Wi, "__esModule", { value: !0 });
    Wi.default = Tx;
    var Ax = Sx(zh());
    function Tx(e, t) {
      let n = null;
      if (!e || typeof e != "string") return n;
      let r = (0, Ax.default)(e),
        i = typeof t == "function";
      return (
        r.forEach((l) => {
          if (l.type !== "declaration") return;
          let { property: o, value: u } = l;
          i ? t(o, u, l) : u && ((n = n || {}), (n[o] = u));
        }),
        n
      );
    }
  });
  var Nh = Ne((Uo) => {
    "use strict";
    Object.defineProperty(Uo, "__esModule", { value: !0 });
    Uo.camelCase = void 0;
    var Px = /^--[a-zA-Z0-9_-]+$/,
      Ix = /-([a-z])/g,
      Lx = /^[^-]+$/,
      _x = /^-(webkit|moz|ms|o|khtml)-/,
      zx = /^-(ms)-/,
      Bx = function (e) {
        return !e || Lx.test(e) || Px.test(e);
      },
      Rx = function (e, t) {
        return t.toUpperCase();
      },
      Rh = function (e, t) {
        return "".concat(t, "-");
      },
      Nx = function (e, t) {
        return (
          t === void 0 && (t = {}),
          Bx(e)
            ? e
            : ((e = e.toLowerCase()),
              t.reactCompat ? (e = e.replace(zx, Rh)) : (e = e.replace(_x, Rh)),
              e.replace(Ix, Rx))
        );
      };
    Uo.camelCase = Nx;
  });
  var Mh = Ne((rc, Oh) => {
    "use strict";
    var Ox =
        (rc && rc.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        },
      Mx = Ox(Bh()),
      bx = Nh();
    function nc(e, t) {
      var n = {};
      return (
        !e ||
          typeof e != "string" ||
          (0, Mx.default)(e, function (r, i) {
            r && i && (n[(0, bx.camelCase)(r, t)] = i);
          }),
        n
      );
    }
    nc.default = nc;
    Oh.exports = nc;
  });
  var Kh = Ne((Vo) => {
    "use strict";
    var lv = Yr(),
      ov = Symbol.for("react.element"),
      uv = Symbol.for("react.fragment"),
      av = Object.prototype.hasOwnProperty,
      sv = lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      cv = { key: !0, ref: !0, __self: !0, __source: !0 };
    function qh(e, t, n) {
      var r,
        i = {},
        l = null,
        o = null;
      (n !== void 0 && (l = "" + n),
        t.key !== void 0 && (l = "" + t.key),
        t.ref !== void 0 && (o = t.ref));
      for (r in t) av.call(t, r) && !cv.hasOwnProperty(r) && (i[r] = t[r]);
      if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
      return { $$typeof: ov, type: e, key: l, ref: o, props: i, _owner: sv.current };
    }
    Vo.Fragment = uv;
    Vo.jsx = qh;
    Vo.jsxs = qh;
  });
  var Yh = Ne((qF, Xh) => {
    "use strict";
    Xh.exports = Kh();
  });
  var py = Ne((J3, fy) => {
    "use strict";
    var pu = Object.prototype.hasOwnProperty,
      cy = Object.prototype.toString,
      iy = Object.defineProperty,
      ly = Object.getOwnPropertyDescriptor,
      oy = function (t) {
        return typeof Array.isArray == "function"
          ? Array.isArray(t)
          : cy.call(t) === "[object Array]";
      },
      uy = function (t) {
        if (!t || cy.call(t) !== "[object Object]") return !1;
        var n = pu.call(t, "constructor"),
          r =
            t.constructor &&
            t.constructor.prototype &&
            pu.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !r) return !1;
        var i;
        for (i in t);
        return typeof i > "u" || pu.call(t, i);
      },
      ay = function (t, n) {
        iy && n.name === "__proto__"
          ? iy(t, n.name, { enumerable: !0, configurable: !0, value: n.newValue, writable: !0 })
          : (t[n.name] = n.newValue);
      },
      sy = function (t, n) {
        if (n === "__proto__")
          if (pu.call(t, n)) {
            if (ly) return ly(t, n).value;
          } else return;
        return t[n];
      };
    fy.exports = function e() {
      var t,
        n,
        r,
        i,
        l,
        o,
        u = arguments[0],
        a = 1,
        s = arguments.length,
        c = !1;
      for (
        typeof u == "boolean" && ((c = u), (u = arguments[1] || {}), (a = 2)),
          (u == null || (typeof u != "object" && typeof u != "function")) && (u = {});
        a < s;
        ++a
      )
        if (((t = arguments[a]), t != null))
          for (n in t)
            ((r = sy(u, n)),
              (i = sy(t, n)),
              u !== i &&
                (c && i && (uy(i) || (l = oy(i)))
                  ? (l ? ((l = !1), (o = r && oy(r) ? r : [])) : (o = r && uy(r) ? r : {}),
                    ay(u, { name: n, newValue: e(c, o, i) }))
                  : typeof i < "u" && ay(u, { name: n, newValue: i })));
      return u;
    };
  });
  var Cu = rr(Yr(), 1),
    T0 = rr(xh(), 1);
  function vh(e, t) {
    let n = t || {};
    return (e[e.length - 1] === "" ? [...e, ""] : e)
      .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
      .trim();
  }
  var ox = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    ux = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    ax = {};
  function No(e, t) {
    return ((t || ax).jsx ? ux : ox).test(e);
  }
  var sx = /[ \t\n\f\r]/g;
  function qs(e) {
    return typeof e == "object" ? (e.type === "text" ? wh(e.value) : !1) : wh(e);
  }
  function wh(e) {
    return e.replace(sx, "") === "";
  }
  var Wt = class {
    constructor(t, n, r) {
      ((this.normal = n), (this.property = t), r && (this.space = r));
    }
  };
  Wt.prototype.normal = {};
  Wt.prototype.property = {};
  Wt.prototype.space = void 0;
  function Ks(e, t) {
    let n = {},
      r = {};
    for (let i of e) (Object.assign(n, i.property), Object.assign(r, i.normal));
    return new Wt(n, r, t);
  }
  function Hi(e) {
    return e.toLowerCase();
  }
  var xe = class {
    constructor(t, n) {
      ((this.attribute = n), (this.property = t));
    }
  };
  xe.prototype.attribute = "";
  xe.prototype.booleanish = !1;
  xe.prototype.boolean = !1;
  xe.prototype.commaOrSpaceSeparated = !1;
  xe.prototype.commaSeparated = !1;
  xe.prototype.defined = !1;
  xe.prototype.mustUseProperty = !1;
  xe.prototype.number = !1;
  xe.prototype.overloadedBoolean = !1;
  xe.prototype.property = "";
  xe.prototype.spaceSeparated = !1;
  xe.prototype.space = void 0;
  var Vi = {};
  Au(Vi, {
    boolean: () => b,
    booleanish: () => ue,
    commaOrSpaceSeparated: () => He,
    commaSeparated: () => yn,
    number: () => A,
    overloadedBoolean: () => Oo,
    spaceSeparated: () => K,
  });
  var cx = 0,
    b = Vn(),
    ue = Vn(),
    Oo = Vn(),
    A = Vn(),
    K = Vn(),
    yn = Vn(),
    He = Vn();
  function Vn() {
    return 2 ** ++cx;
  }
  var Xs = Object.keys(Vi),
    Wn = class extends xe {
      constructor(t, n, r, i) {
        let l = -1;
        if ((super(t, n), Dh(this, "space", i), typeof r == "number"))
          for (; ++l < Xs.length; ) {
            let o = Xs[l];
            Dh(this, Xs[l], (r & Vi[o]) === Vi[o]);
          }
      }
    };
  Wn.prototype.defined = !0;
  function Dh(e, t, n) {
    n && (e[t] = n);
  }
  function ot(e) {
    let t = {},
      n = {};
    for (let [r, i] of Object.entries(e.properties)) {
      let l = new Wn(r, e.transform(e.attributes || {}, r), i, e.space);
      (e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0),
        (t[r] = l),
        (n[Hi(r)] = r),
        (n[Hi(l.attribute)] = r));
    }
    return new Wt(t, n, e.space);
  }
  var Ys = ot({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: ue,
      ariaAutoComplete: null,
      ariaBusy: ue,
      ariaChecked: ue,
      ariaColCount: A,
      ariaColIndex: A,
      ariaColSpan: A,
      ariaControls: K,
      ariaCurrent: null,
      ariaDescribedBy: K,
      ariaDetails: null,
      ariaDisabled: ue,
      ariaDropEffect: K,
      ariaErrorMessage: null,
      ariaExpanded: ue,
      ariaFlowTo: K,
      ariaGrabbed: ue,
      ariaHasPopup: null,
      ariaHidden: ue,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: K,
      ariaLevel: A,
      ariaLive: null,
      ariaModal: ue,
      ariaMultiLine: ue,
      ariaMultiSelectable: ue,
      ariaOrientation: null,
      ariaOwns: K,
      ariaPlaceholder: null,
      ariaPosInSet: A,
      ariaPressed: ue,
      ariaReadOnly: ue,
      ariaRelevant: null,
      ariaRequired: ue,
      ariaRoleDescription: K,
      ariaRowCount: A,
      ariaRowIndex: A,
      ariaRowSpan: A,
      ariaSelected: ue,
      ariaSetSize: A,
      ariaSort: null,
      ariaValueMax: A,
      ariaValueMin: A,
      ariaValueNow: A,
      ariaValueText: null,
      role: null,
    },
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    },
  });
  function Mo(e, t) {
    return t in e ? e[t] : t;
  }
  function bo(e, t) {
    return Mo(e, t.toLowerCase());
  }
  var Eh = ot({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: yn,
      acceptCharset: K,
      accessKey: K,
      action: null,
      allow: null,
      allowFullScreen: b,
      allowPaymentRequest: b,
      allowUserMedia: b,
      alt: null,
      as: null,
      async: b,
      autoCapitalize: null,
      autoComplete: K,
      autoFocus: b,
      autoPlay: b,
      blocking: K,
      capture: null,
      charSet: null,
      checked: b,
      cite: null,
      className: K,
      cols: A,
      colSpan: null,
      content: null,
      contentEditable: ue,
      controls: b,
      controlsList: K,
      coords: A | yn,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: b,
      defer: b,
      dir: null,
      dirName: null,
      disabled: b,
      download: Oo,
      draggable: ue,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: b,
      formTarget: null,
      headers: K,
      height: A,
      hidden: Oo,
      high: A,
      href: null,
      hrefLang: null,
      htmlFor: K,
      httpEquiv: K,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: b,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: b,
      itemId: null,
      itemProp: K,
      itemRef: K,
      itemScope: b,
      itemType: K,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: b,
      low: A,
      manifest: null,
      max: null,
      maxLength: A,
      media: null,
      method: null,
      min: null,
      minLength: A,
      multiple: b,
      muted: b,
      name: null,
      nonce: null,
      noModule: b,
      noValidate: b,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: b,
      optimum: A,
      pattern: null,
      ping: K,
      placeholder: null,
      playsInline: b,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: b,
      referrerPolicy: null,
      rel: K,
      required: b,
      reversed: b,
      rows: A,
      rowSpan: A,
      sandbox: K,
      scope: null,
      scoped: b,
      seamless: b,
      selected: b,
      shadowRootClonable: b,
      shadowRootDelegatesFocus: b,
      shadowRootMode: null,
      shape: null,
      size: A,
      sizes: null,
      slot: null,
      span: A,
      spellCheck: ue,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: A,
      step: null,
      style: null,
      tabIndex: A,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: b,
      useMap: null,
      value: ue,
      width: A,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: K,
      axis: null,
      background: null,
      bgColor: null,
      border: A,
      borderColor: null,
      bottomMargin: A,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: b,
      declare: b,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: A,
      leftMargin: A,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: A,
      marginWidth: A,
      noResize: b,
      noHref: b,
      noShade: b,
      noWrap: b,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: A,
      rules: null,
      scheme: null,
      scrolling: ue,
      standby: null,
      summary: null,
      text: null,
      topMargin: A,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: A,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: b,
      disableRemotePlayback: b,
      prefix: null,
      property: null,
      results: A,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: bo,
  });
  var Ch = ot({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    properties: {
      about: He,
      accentHeight: A,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: A,
      amplitude: A,
      arabicForm: null,
      ascent: A,
      attributeName: null,
      attributeType: null,
      azimuth: A,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: A,
      by: null,
      calcMode: null,
      capHeight: A,
      className: K,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: A,
      diffuseConstant: A,
      direction: null,
      display: null,
      dur: null,
      divisor: A,
      dominantBaseline: null,
      download: b,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: A,
      enableBackground: null,
      end: null,
      event: null,
      exponent: A,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: A,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: yn,
      g2: yn,
      glyphName: yn,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: A,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: A,
      horizOriginX: A,
      horizOriginY: A,
      id: null,
      ideographic: A,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: A,
      k: A,
      k1: A,
      k2: A,
      k3: A,
      k4: A,
      kernelMatrix: He,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: A,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: A,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: A,
      overlineThickness: A,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: A,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: K,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: A,
      pointsAtY: A,
      pointsAtZ: A,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: He,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: He,
      rev: He,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: He,
      requiredFeatures: He,
      requiredFonts: He,
      requiredFormats: He,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: A,
      specularExponent: A,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: A,
      strikethroughThickness: A,
      string: null,
      stroke: null,
      strokeDashArray: He,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: A,
      strokeOpacity: A,
      strokeWidth: null,
      style: null,
      surfaceScale: A,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: He,
      tabIndex: A,
      tableValues: null,
      target: null,
      targetX: A,
      targetY: A,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: He,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: A,
      underlineThickness: A,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: A,
      values: null,
      vAlphabetic: A,
      vMathematical: A,
      vectorEffect: null,
      vHanging: A,
      vIdeographic: A,
      version: null,
      vertAdvY: A,
      vertOriginX: A,
      vertOriginY: A,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: A,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: "svg",
    transform: Mo,
  });
  var Gs = ot({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
  });
  var Js = ot({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: bo,
  });
  var Zs = ot({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
  });
  var ec = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  };
  var fx = /[A-Z]/g,
    Fh = /-[a-z]/g,
    px = /^data[-\w.:]+$/i;
  function tc(e, t) {
    let n = Hi(t),
      r = t,
      i = xe;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && px.test(t)) {
      if (t.charAt(4) === "-") {
        let l = t.slice(5).replace(Fh, dx);
        r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
      } else {
        let l = t.slice(4);
        if (!Fh.test(l)) {
          let o = l.replace(fx, mx);
          (o.charAt(0) !== "-" && (o = "-" + o), (t = "data" + o));
        }
      }
      i = Wn;
    }
    return new i(r, t);
  }
  function mx(e) {
    return "-" + e.toLowerCase();
  }
  function dx(e) {
    return e.charAt(1).toUpperCase();
  }
  var Sh = Ks([Ys, Eh, Gs, Js, Zs], "html"),
    jo = Ks([Ys, Ch, Gs, Js, Zs], "svg");
  function Ah(e) {
    return e.join(" ").trim();
  }
  var Hh = rr(Mh(), 1);
  var Ho = bh("end"),
    Br = bh("start");
  function bh(e) {
    return t;
    function t(n) {
      let r = (n && n.position && n.position[e]) || {};
      if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
        return {
          line: r.line,
          column: r.column,
          offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
        };
    }
  }
  function ic(e) {
    let t = Br(e),
      n = Ho(e);
    if (t && n) return { start: t, end: n };
  }
  function kn(e) {
    return !e || typeof e != "object"
      ? ""
      : "position" in e || "type" in e
        ? jh(e.position)
        : "start" in e || "end" in e
          ? jh(e)
          : "line" in e || "column" in e
            ? lc(e)
            : "";
  }
  function lc(e) {
    return Uh(e && e.line) + ":" + Uh(e && e.column);
  }
  function jh(e) {
    return lc(e && e.start) + "-" + lc(e && e.end);
  }
  function Uh(e) {
    return e && typeof e == "number" ? e : 1;
  }
  var ce = class extends Error {
    constructor(t, n, r) {
      (super(), typeof n == "string" && ((r = n), (n = void 0)));
      let i = "",
        l = {},
        o = !1;
      if (
        (n &&
          ("line" in n && "column" in n
            ? (l = { place: n })
            : "start" in n && "end" in n
              ? (l = { place: n })
              : "type" in n
                ? (l = { ancestors: [n], place: n.position })
                : (l = { ...n })),
        typeof t == "string"
          ? (i = t)
          : !l.cause && t && ((o = !0), (i = t.message), (l.cause = t)),
        !l.ruleId && !l.source && typeof r == "string")
      ) {
        let a = r.indexOf(":");
        a === -1 ? (l.ruleId = r) : ((l.source = r.slice(0, a)), (l.ruleId = r.slice(a + 1)));
      }
      if (!l.place && l.ancestors && l.ancestors) {
        let a = l.ancestors[l.ancestors.length - 1];
        a && (l.place = a.position);
      }
      let u = l.place && "start" in l.place ? l.place.start : l.place;
      ((this.ancestors = l.ancestors || void 0),
        (this.cause = l.cause || void 0),
        (this.column = u ? u.column : void 0),
        (this.fatal = void 0),
        (this.file = ""),
        (this.message = i),
        (this.line = u ? u.line : void 0),
        (this.name = kn(l.place) || "1:1"),
        (this.place = l.place || void 0),
        (this.reason = this.message),
        (this.ruleId = l.ruleId || void 0),
        (this.source = l.source || void 0),
        (this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : ""),
        (this.actual = void 0),
        (this.expected = void 0),
        (this.note = void 0),
        (this.url = void 0));
    }
  };
  ce.prototype.file = "";
  ce.prototype.name = "";
  ce.prototype.reason = "";
  ce.prototype.message = "";
  ce.prototype.stack = "";
  ce.prototype.column = void 0;
  ce.prototype.line = void 0;
  ce.prototype.ancestors = void 0;
  ce.prototype.cause = void 0;
  ce.prototype.fatal = void 0;
  ce.prototype.place = void 0;
  ce.prototype.ruleId = void 0;
  ce.prototype.source = void 0;
  var oc = {}.hasOwnProperty,
    jx = new Map(),
    Ux = /[A-Z]/g,
    Hx = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
    Vx = new Set(["td", "th"]),
    Vh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function uc(e, t) {
    if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    let n = t.filePath || void 0,
      r;
    if (t.development) {
      if (typeof t.jsxDEV != "function")
        throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      r = Gx(n, t.jsxDEV);
    } else {
      if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      r = Yx(n, t.jsx, t.jsxs);
    }
    let i = {
        Fragment: t.Fragment,
        ancestors: [],
        components: t.components || {},
        create: r,
        elementAttributeNameCase: t.elementAttributeNameCase || "react",
        evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
        filePath: n,
        ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
        passKeys: t.passKeys !== !1,
        passNode: t.passNode || !1,
        schema: t.space === "svg" ? jo : Sh,
        stylePropertyNameCase: t.stylePropertyNameCase || "dom",
        tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
      },
      l = Wh(i, e, void 0);
    return l && typeof l != "string"
      ? l
      : i.create(e, i.Fragment, { children: l || void 0 }, void 0);
  }
  function Wh(e, t, n) {
    if (t.type === "element") return Wx(e, t, n);
    if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return $x(e, t);
    if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return qx(e, t, n);
    if (t.type === "mdxjsEsm") return Qx(e, t);
    if (t.type === "root") return Kx(e, t, n);
    if (t.type === "text") return Xx(e, t);
  }
  function Wx(e, t, n) {
    let r = e.schema,
      i = r;
    (t.tagName.toLowerCase() === "svg" && r.space === "html" && ((i = jo), (e.schema = i)),
      e.ancestors.push(t));
    let l = Qh(e, t.tagName, !1),
      o = Jx(e, t),
      u = sc(e, t);
    return (
      Hx.has(t.tagName) &&
        (u = u.filter(function (a) {
          return typeof a == "string" ? !qs(a) : !0;
        })),
      $h(e, o, l, t),
      ac(o, u),
      e.ancestors.pop(),
      (e.schema = r),
      e.create(t, l, o, n)
    );
  }
  function $x(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
      let r = t.data.estree.body[0];
      return (r.type, e.evaluater.evaluateExpression(r.expression));
    }
    $i(e, t.position);
  }
  function Qx(e, t) {
    if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
    $i(e, t.position);
  }
  function qx(e, t, n) {
    let r = e.schema,
      i = r;
    (t.name === "svg" && r.space === "html" && ((i = jo), (e.schema = i)), e.ancestors.push(t));
    let l = t.name === null ? e.Fragment : Qh(e, t.name, !0),
      o = Zx(e, t),
      u = sc(e, t);
    return ($h(e, o, l, t), ac(o, u), e.ancestors.pop(), (e.schema = r), e.create(t, l, o, n));
  }
  function Kx(e, t, n) {
    let r = {};
    return (ac(r, sc(e, t)), e.create(t, e.Fragment, r, n));
  }
  function Xx(e, t) {
    return t.value;
  }
  function $h(e, t, n, r) {
    typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
  }
  function ac(e, t) {
    if (t.length > 0) {
      let n = t.length > 1 ? t : t[0];
      n && (e.children = n);
    }
  }
  function Yx(e, t, n) {
    return r;
    function r(i, l, o, u) {
      let s = Array.isArray(o.children) ? n : t;
      return u ? s(l, o, u) : s(l, o);
    }
  }
  function Gx(e, t) {
    return n;
    function n(r, i, l, o) {
      let u = Array.isArray(l.children),
        a = Br(r);
      return t(
        i,
        l,
        o,
        u,
        { columnNumber: a ? a.column - 1 : void 0, fileName: e, lineNumber: a ? a.line : void 0 },
        void 0,
      );
    }
  }
  function Jx(e, t) {
    let n = {},
      r,
      i;
    for (i in t.properties)
      if (i !== "children" && oc.call(t.properties, i)) {
        let l = ev(e, i, t.properties[i]);
        if (l) {
          let [o, u] = l;
          e.tableCellAlignToStyle && o === "align" && typeof u == "string" && Vx.has(t.tagName)
            ? (r = u)
            : (n[o] = u);
        }
      }
    if (r) {
      let l = n.style || (n.style = {});
      l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
    }
    return n;
  }
  function Zx(e, t) {
    let n = {};
    for (let r of t.attributes)
      if (r.type === "mdxJsxExpressionAttribute")
        if (r.data && r.data.estree && e.evaluater) {
          let l = r.data.estree.body[0];
          l.type;
          let o = l.expression;
          o.type;
          let u = o.properties[0];
          (u.type, Object.assign(n, e.evaluater.evaluateExpression(u.argument)));
        } else $i(e, t.position);
      else {
        let i = r.name,
          l;
        if (r.value && typeof r.value == "object")
          if (r.value.data && r.value.data.estree && e.evaluater) {
            let u = r.value.data.estree.body[0];
            (u.type, (l = e.evaluater.evaluateExpression(u.expression)));
          } else $i(e, t.position);
        else l = r.value === null ? !0 : r.value;
        n[i] = l;
      }
    return n;
  }
  function sc(e, t) {
    let n = [],
      r = -1,
      i = e.passKeys ? new Map() : jx;
    for (; ++r < t.children.length; ) {
      let l = t.children[r],
        o;
      if (e.passKeys) {
        let a =
          l.type === "element"
            ? l.tagName
            : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement"
              ? l.name
              : void 0;
        if (a) {
          let s = i.get(a) || 0;
          ((o = a + "-" + s), i.set(a, s + 1));
        }
      }
      let u = Wh(e, l, o);
      u !== void 0 && n.push(u);
    }
    return n;
  }
  function ev(e, t, n) {
    let r = tc(e.schema, t);
    if (!(n == null || (typeof n == "number" && Number.isNaN(n)))) {
      if ((Array.isArray(n) && (n = r.commaSeparated ? vh(n) : Ah(n)), r.property === "style")) {
        let i = typeof n == "object" ? n : tv(e, String(n));
        return (e.stylePropertyNameCase === "css" && (i = nv(i)), ["style", i]);
      }
      return [
        e.elementAttributeNameCase === "react" && r.space
          ? ec[r.property] || r.property
          : r.attribute,
        n,
      ];
    }
  }
  function tv(e, t) {
    try {
      return (0, Hh.default)(t, { reactCompat: !0 });
    } catch (n) {
      if (e.ignoreInvalidStyle) return {};
      let r = n,
        i = new ce("Cannot parse `style` attribute", {
          ancestors: e.ancestors,
          cause: r,
          ruleId: "style",
          source: "hast-util-to-jsx-runtime",
        });
      throw ((i.file = e.filePath || void 0), (i.url = Vh + "#cannot-parse-style-attribute"), i);
    }
  }
  function Qh(e, t, n) {
    let r;
    if (!n) r = { type: "Literal", value: t };
    else if (t.includes(".")) {
      let i = t.split("."),
        l = -1,
        o;
      for (; ++l < i.length; ) {
        let u = No(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
        o = o
          ? {
              type: "MemberExpression",
              object: o,
              property: u,
              computed: !!(l && u.type === "Literal"),
              optional: !1,
            }
          : u;
      }
      r = o;
    } else
      r =
        No(t) && !/^[a-z]/.test(t)
          ? { type: "Identifier", name: t }
          : { type: "Literal", value: t };
    if (r.type === "Literal") {
      let i = r.value;
      return oc.call(e.components, i) ? e.components[i] : i;
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    $i(e);
  }
  function $i(e, t) {
    let n = new ce("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime",
    });
    throw (
      (n.file = e.filePath || void 0),
      (n.url = Vh + "#cannot-handle-mdx-estrees-without-createevaluater"),
      n
    );
  }
  function nv(e) {
    let t = {},
      n;
    for (n in e) oc.call(e, n) && (t[rv(n)] = e[n]);
    return t;
  }
  function rv(e) {
    let t = e.replace(Ux, iv);
    return (t.slice(0, 3) === "ms-" && (t = "-" + t), t);
  }
  function iv(e) {
    return "-" + e.toLowerCase();
  }
  var Qi = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"],
  };
  var br = rr(Yh(), 1),
    Dy = rr(Yr(), 1);
  var fv = {};
  function Qn(e, t) {
    let n = t || fv,
      r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
      i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
    return Jh(e, r, i);
  }
  function Jh(e, t, n) {
    if (pv(e)) {
      if ("value" in e) return e.type === "html" && !n ? "" : e.value;
      if (t && "alt" in e && e.alt) return e.alt;
      if ("children" in e) return Gh(e.children, t, n);
    }
    return Array.isArray(e) ? Gh(e, t, n) : "";
  }
  function Gh(e, t, n) {
    let r = [],
      i = -1;
    for (; ++i < e.length; ) r[i] = Jh(e[i], t, n);
    return r.join("");
  }
  function pv(e) {
    return !!(e && typeof e == "object");
  }
  var Zh = document.createElement("i");
  function Rr(e) {
    let t = "&" + e + ";";
    Zh.innerHTML = t;
    let n = Zh.textContent;
    return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t ? !1 : n;
  }
  function fe(e, t, n, r) {
    let i = e.length,
      l = 0,
      o;
    if (
      (t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t), (n = n > 0 ? n : 0), r.length < 1e4)
    )
      ((o = Array.from(r)), o.unshift(t, n), e.splice(...o));
    else
      for (n && e.splice(t, n); l < r.length; )
        ((o = r.slice(l, l + 1e4)), o.unshift(t, 0), e.splice(...o), (l += 1e4), (t += 1e4));
  }
  function Re(e, t) {
    return e.length > 0 ? (fe(e, e.length, 0, t), e) : t;
  }
  var eg = {}.hasOwnProperty;
  function Wo(e) {
    let t = {},
      n = -1;
    for (; ++n < e.length; ) mv(t, e[n]);
    return t;
  }
  function mv(e, t) {
    let n;
    for (n in t) {
      let i = (eg.call(e, n) ? e[n] : void 0) || (e[n] = {}),
        l = t[n],
        o;
      if (l)
        for (o in l) {
          eg.call(i, o) || (i[o] = []);
          let u = l[o];
          dv(i[o], Array.isArray(u) ? u : u ? [u] : []);
        }
    }
  }
  function dv(e, t) {
    let n = -1,
      r = [];
    for (; ++n < t.length; ) (t[n].add === "after" ? e : r).push(t[n]);
    fe(e, 0, 0, r);
  }
  function $o(e, t) {
    let n = Number.parseInt(e, t);
    return n < 9 ||
      n === 11 ||
      (n > 13 && n < 32) ||
      (n > 126 && n < 160) ||
      (n > 55295 && n < 57344) ||
      (n > 64975 && n < 65008) ||
      (n & 65535) === 65535 ||
      (n & 65535) === 65534 ||
      n > 1114111
      ? "\uFFFD"
      : String.fromCodePoint(n);
  }
  function Pe(e) {
    return e
      .replace(/[\t\n\r ]+/g, " ")
      .replace(/^ | $/g, "")
      .toLowerCase()
      .toUpperCase();
  }
  var ge = xn(/[A-Za-z]/),
    ae = xn(/[\dA-Za-z]/),
    tg = xn(/[#-'*+\--9=?A-Z^-~]/);
  function qn(e) {
    return e !== null && (e < 32 || e === 127);
  }
  var qi = xn(/\d/),
    ng = xn(/[\dA-Fa-f]/),
    rg = xn(/[!-/:-@[-`{-~]/);
  function _(e) {
    return e !== null && e < -2;
  }
  function H(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function N(e) {
    return e === -2 || e === -1 || e === 32;
  }
  var Kn = xn(/\p{P}|\p{S}/u),
    At = xn(/\s/);
  function xn(e) {
    return t;
    function t(n) {
      return n !== null && n > -1 && e.test(String.fromCharCode(n));
    }
  }
  function ut(e) {
    let t = [],
      n = -1,
      r = 0,
      i = 0;
    for (; ++n < e.length; ) {
      let l = e.charCodeAt(n),
        o = "";
      if (l === 37 && ae(e.charCodeAt(n + 1)) && ae(e.charCodeAt(n + 2))) i = 2;
      else if (l < 128)
        /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
      else if (l > 55295 && l < 57344) {
        let u = e.charCodeAt(n + 1);
        l < 56320 && u > 56319 && u < 57344
          ? ((o = String.fromCharCode(l, u)), (i = 1))
          : (o = "\uFFFD");
      } else o = String.fromCharCode(l);
      (o && (t.push(e.slice(r, n), encodeURIComponent(o)), (r = n + i + 1), (o = "")),
        i && ((n += i), (i = 0)));
    }
    return t.join("") + e.slice(r);
  }
  function R(e, t, n, r) {
    let i = r ? r - 1 : Number.POSITIVE_INFINITY,
      l = 0;
    return o;
    function o(a) {
      return N(a) ? (e.enter(n), u(a)) : t(a);
    }
    function u(a) {
      return N(a) && l++ < i ? (e.consume(a), u) : (e.exit(n), t(a));
    }
  }
  var ig = { tokenize: hv };
  function hv(e) {
    let t = e.attempt(this.parser.constructs.contentInitial, r, i),
      n;
    return t;
    function r(u) {
      if (u === null) {
        e.consume(u);
        return;
      }
      return (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), R(e, t, "linePrefix"));
    }
    function i(u) {
      return (e.enter("paragraph"), l(u));
    }
    function l(u) {
      let a = e.enter("chunkText", { contentType: "text", previous: n });
      return (n && (n.next = a), (n = a), o(u));
    }
    function o(u) {
      if (u === null) {
        (e.exit("chunkText"), e.exit("paragraph"), e.consume(u));
        return;
      }
      return _(u) ? (e.consume(u), e.exit("chunkText"), l) : (e.consume(u), o);
    }
  }
  var og = { tokenize: gv },
    lg = { tokenize: yv };
  function gv(e) {
    let t = this,
      n = [],
      r = 0,
      i,
      l,
      o;
    return u;
    function u(y) {
      if (r < n.length) {
        let E = n[r];
        return ((t.containerState = E[1]), e.attempt(E[0].continuation, a, s)(y));
      }
      return s(y);
    }
    function a(y) {
      if ((r++, t.containerState._closeFlow)) {
        ((t.containerState._closeFlow = void 0), i && h());
        let E = t.events.length,
          S = E,
          w;
        for (; S--; )
          if (t.events[S][0] === "exit" && t.events[S][1].type === "chunkFlow") {
            w = t.events[S][1].end;
            break;
          }
        d(r);
        let P = E;
        for (; P < t.events.length; ) ((t.events[P][1].end = { ...w }), P++);
        return (fe(t.events, S + 1, 0, t.events.slice(E)), (t.events.length = P), s(y));
      }
      return u(y);
    }
    function s(y) {
      if (r === n.length) {
        if (!i) return p(y);
        if (i.currentConstruct && i.currentConstruct.concrete) return g(y);
        t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
      }
      return ((t.containerState = {}), e.check(lg, c, f)(y));
    }
    function c(y) {
      return (i && h(), d(r), p(y));
    }
    function f(y) {
      return ((t.parser.lazy[t.now().line] = r !== n.length), (o = t.now().offset), g(y));
    }
    function p(y) {
      return ((t.containerState = {}), e.attempt(lg, m, g)(y));
    }
    function m(y) {
      return (r++, n.push([t.currentConstruct, t.containerState]), p(y));
    }
    function g(y) {
      if (y === null) {
        (i && h(), d(0), e.consume(y));
        return;
      }
      return (
        (i = i || t.parser.flow(t.now())),
        e.enter("chunkFlow", { _tokenizer: i, contentType: "flow", previous: l }),
        v(y)
      );
    }
    function v(y) {
      if (y === null) {
        (F(e.exit("chunkFlow"), !0), d(0), e.consume(y));
        return;
      }
      return _(y)
        ? (e.consume(y), F(e.exit("chunkFlow")), (r = 0), (t.interrupt = void 0), u)
        : (e.consume(y), v);
    }
    function F(y, E) {
      let S = t.sliceStream(y);
      if (
        (E && S.push(null),
        (y.previous = l),
        l && (l.next = y),
        (l = y),
        i.defineSkip(y.start),
        i.write(S),
        t.parser.lazy[y.start.line])
      ) {
        let w = i.events.length;
        for (; w--; )
          if (
            i.events[w][1].start.offset < o &&
            (!i.events[w][1].end || i.events[w][1].end.offset > o)
          )
            return;
        let P = t.events.length,
          L = P,
          O,
          D;
        for (; L--; )
          if (t.events[L][0] === "exit" && t.events[L][1].type === "chunkFlow") {
            if (O) {
              D = t.events[L][1].end;
              break;
            }
            O = !0;
          }
        for (d(r), w = P; w < t.events.length; ) ((t.events[w][1].end = { ...D }), w++);
        (fe(t.events, L + 1, 0, t.events.slice(P)), (t.events.length = w));
      }
    }
    function d(y) {
      let E = n.length;
      for (; E-- > y; ) {
        let S = n[E];
        ((t.containerState = S[1]), S[0].exit.call(t, e));
      }
      n.length = y;
    }
    function h() {
      (i.write([null]), (l = void 0), (i = void 0), (t.containerState._closeFlow = void 0));
    }
  }
  function yv(e, t, n) {
    return R(
      e,
      e.attempt(this.parser.constructs.document, t, n),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
    );
  }
  function $t(e) {
    if (e === null || H(e) || At(e)) return 1;
    if (Kn(e)) return 2;
  }
  function vn(e, t, n) {
    let r = [],
      i = -1;
    for (; ++i < e.length; ) {
      let l = e[i].resolveAll;
      l && !r.includes(l) && ((t = l(t, n)), r.push(l));
    }
    return t;
  }
  var Ki = { name: "attention", resolveAll: kv, tokenize: xv };
  function kv(e, t) {
    let n = -1,
      r,
      i,
      l,
      o,
      u,
      a,
      s,
      c;
    for (; ++n < e.length; )
      if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
        for (r = n; r--; )
          if (
            e[r][0] === "exit" &&
            e[r][1].type === "attentionSequence" &&
            e[r][1]._open &&
            t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)
          ) {
            if (
              (e[r][1]._close || e[n][1]._open) &&
              (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
              !(
                (e[r][1].end.offset -
                  e[r][1].start.offset +
                  e[n][1].end.offset -
                  e[n][1].start.offset) %
                3
              )
            )
              continue;
            a =
              e[r][1].end.offset - e[r][1].start.offset > 1 &&
              e[n][1].end.offset - e[n][1].start.offset > 1
                ? 2
                : 1;
            let f = { ...e[r][1].end },
              p = { ...e[n][1].start };
            (ug(f, -a),
              ug(p, a),
              (o = {
                type: a > 1 ? "strongSequence" : "emphasisSequence",
                start: f,
                end: { ...e[r][1].end },
              }),
              (u = {
                type: a > 1 ? "strongSequence" : "emphasisSequence",
                start: { ...e[n][1].start },
                end: p,
              }),
              (l = {
                type: a > 1 ? "strongText" : "emphasisText",
                start: { ...e[r][1].end },
                end: { ...e[n][1].start },
              }),
              (i = {
                type: a > 1 ? "strong" : "emphasis",
                start: { ...o.start },
                end: { ...u.end },
              }),
              (e[r][1].end = { ...o.start }),
              (e[n][1].start = { ...u.end }),
              (s = []),
              e[r][1].end.offset - e[r][1].start.offset &&
                (s = Re(s, [
                  ["enter", e[r][1], t],
                  ["exit", e[r][1], t],
                ])),
              (s = Re(s, [
                ["enter", i, t],
                ["enter", o, t],
                ["exit", o, t],
                ["enter", l, t],
              ])),
              (s = Re(s, vn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t))),
              (s = Re(s, [
                ["exit", l, t],
                ["enter", u, t],
                ["exit", u, t],
                ["exit", i, t],
              ])),
              e[n][1].end.offset - e[n][1].start.offset
                ? ((c = 2),
                  (s = Re(s, [
                    ["enter", e[n][1], t],
                    ["exit", e[n][1], t],
                  ])))
                : (c = 0),
              fe(e, r - 1, n - r + 3, s),
              (n = r + s.length - c - 2));
            break;
          }
      }
    for (n = -1; ++n < e.length; ) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e;
  }
  function xv(e, t) {
    let n = this.parser.constructs.attentionMarkers.null,
      r = this.previous,
      i = $t(r),
      l;
    return o;
    function o(a) {
      return ((l = a), e.enter("attentionSequence"), u(a));
    }
    function u(a) {
      if (a === l) return (e.consume(a), u);
      let s = e.exit("attentionSequence"),
        c = $t(a),
        f = !c || (c === 2 && i) || n.includes(a),
        p = !i || (i === 2 && c) || n.includes(r);
      return (
        (s._open = !!(l === 42 ? f : f && (i || !p))),
        (s._close = !!(l === 42 ? p : p && (c || !f))),
        t(a)
      );
    }
  }
  function ug(e, t) {
    ((e.column += t), (e.offset += t), (e._bufferIndex += t));
  }
  var cc = { name: "autolink", tokenize: vv };
  function vv(e, t, n) {
    let r = 0;
    return i;
    function i(m) {
      return (
        e.enter("autolink"),
        e.enter("autolinkMarker"),
        e.consume(m),
        e.exit("autolinkMarker"),
        e.enter("autolinkProtocol"),
        l
      );
    }
    function l(m) {
      return ge(m) ? (e.consume(m), o) : m === 64 ? n(m) : s(m);
    }
    function o(m) {
      return m === 43 || m === 45 || m === 46 || ae(m) ? ((r = 1), u(m)) : s(m);
    }
    function u(m) {
      return m === 58
        ? (e.consume(m), (r = 0), a)
        : (m === 43 || m === 45 || m === 46 || ae(m)) && r++ < 32
          ? (e.consume(m), u)
          : ((r = 0), s(m));
    }
    function a(m) {
      return m === 62
        ? (e.exit("autolinkProtocol"),
          e.enter("autolinkMarker"),
          e.consume(m),
          e.exit("autolinkMarker"),
          e.exit("autolink"),
          t)
        : m === null || m === 32 || m === 60 || qn(m)
          ? n(m)
          : (e.consume(m), a);
    }
    function s(m) {
      return m === 64 ? (e.consume(m), c) : tg(m) ? (e.consume(m), s) : n(m);
    }
    function c(m) {
      return ae(m) ? f(m) : n(m);
    }
    function f(m) {
      return m === 46
        ? (e.consume(m), (r = 0), c)
        : m === 62
          ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
            e.enter("autolinkMarker"),
            e.consume(m),
            e.exit("autolinkMarker"),
            e.exit("autolink"),
            t)
          : p(m);
    }
    function p(m) {
      if ((m === 45 || ae(m)) && r++ < 63) {
        let g = m === 45 ? p : f;
        return (e.consume(m), g);
      }
      return n(m);
    }
  }
  var Tt = { partial: !0, tokenize: wv };
  function wv(e, t, n) {
    return r;
    function r(l) {
      return N(l) ? R(e, i, "linePrefix")(l) : i(l);
    }
    function i(l) {
      return l === null || _(l) ? t(l) : n(l);
    }
  }
  var Qo = { continuation: { tokenize: Ev }, exit: Cv, name: "blockQuote", tokenize: Dv };
  function Dv(e, t, n) {
    let r = this;
    return i;
    function i(o) {
      if (o === 62) {
        let u = r.containerState;
        return (
          u.open || (e.enter("blockQuote", { _container: !0 }), (u.open = !0)),
          e.enter("blockQuotePrefix"),
          e.enter("blockQuoteMarker"),
          e.consume(o),
          e.exit("blockQuoteMarker"),
          l
        );
      }
      return n(o);
    }
    function l(o) {
      return N(o)
        ? (e.enter("blockQuotePrefixWhitespace"),
          e.consume(o),
          e.exit("blockQuotePrefixWhitespace"),
          e.exit("blockQuotePrefix"),
          t)
        : (e.exit("blockQuotePrefix"), t(o));
    }
  }
  function Ev(e, t, n) {
    let r = this;
    return i;
    function i(o) {
      return N(o)
        ? R(
            e,
            l,
            "linePrefix",
            r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
          )(o)
        : l(o);
    }
    function l(o) {
      return e.attempt(Qo, t, n)(o);
    }
  }
  function Cv(e) {
    e.exit("blockQuote");
  }
  var qo = { name: "characterEscape", tokenize: Fv };
  function Fv(e, t, n) {
    return r;
    function r(l) {
      return (
        e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i
      );
    }
    function i(l) {
      return rg(l)
        ? (e.enter("characterEscapeValue"),
          e.consume(l),
          e.exit("characterEscapeValue"),
          e.exit("characterEscape"),
          t)
        : n(l);
    }
  }
  var Ko = { name: "characterReference", tokenize: Sv };
  function Sv(e, t, n) {
    let r = this,
      i = 0,
      l,
      o;
    return u;
    function u(f) {
      return (
        e.enter("characterReference"),
        e.enter("characterReferenceMarker"),
        e.consume(f),
        e.exit("characterReferenceMarker"),
        a
      );
    }
    function a(f) {
      return f === 35
        ? (e.enter("characterReferenceMarkerNumeric"),
          e.consume(f),
          e.exit("characterReferenceMarkerNumeric"),
          s)
        : (e.enter("characterReferenceValue"), (l = 31), (o = ae), c(f));
    }
    function s(f) {
      return f === 88 || f === 120
        ? (e.enter("characterReferenceMarkerHexadecimal"),
          e.consume(f),
          e.exit("characterReferenceMarkerHexadecimal"),
          e.enter("characterReferenceValue"),
          (l = 6),
          (o = ng),
          c)
        : (e.enter("characterReferenceValue"), (l = 7), (o = qi), c(f));
    }
    function c(f) {
      if (f === 59 && i) {
        let p = e.exit("characterReferenceValue");
        return o === ae && !Rr(r.sliceSerialize(p))
          ? n(f)
          : (e.enter("characterReferenceMarker"),
            e.consume(f),
            e.exit("characterReferenceMarker"),
            e.exit("characterReference"),
            t);
      }
      return o(f) && i++ < l ? (e.consume(f), c) : n(f);
    }
  }
  var ag = { partial: !0, tokenize: Tv },
    Xo = { concrete: !0, name: "codeFenced", tokenize: Av };
  function Av(e, t, n) {
    let r = this,
      i = { partial: !0, tokenize: S },
      l = 0,
      o = 0,
      u;
    return a;
    function a(w) {
      return s(w);
    }
    function s(w) {
      let P = r.events[r.events.length - 1];
      return (
        (l = P && P[1].type === "linePrefix" ? P[2].sliceSerialize(P[1], !0).length : 0),
        (u = w),
        e.enter("codeFenced"),
        e.enter("codeFencedFence"),
        e.enter("codeFencedFenceSequence"),
        c(w)
      );
    }
    function c(w) {
      return w === u
        ? (o++, e.consume(w), c)
        : o < 3
          ? n(w)
          : (e.exit("codeFencedFenceSequence"), N(w) ? R(e, f, "whitespace")(w) : f(w));
    }
    function f(w) {
      return w === null || _(w)
        ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(ag, v, E)(w))
        : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), p(w));
    }
    function p(w) {
      return w === null || _(w)
        ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(w))
        : N(w)
          ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), R(e, m, "whitespace")(w))
          : w === 96 && w === u
            ? n(w)
            : (e.consume(w), p);
    }
    function m(w) {
      return w === null || _(w)
        ? f(w)
        : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), g(w));
    }
    function g(w) {
      return w === null || _(w)
        ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(w))
        : w === 96 && w === u
          ? n(w)
          : (e.consume(w), g);
    }
    function v(w) {
      return e.attempt(i, E, F)(w);
    }
    function F(w) {
      return (e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), d);
    }
    function d(w) {
      return l > 0 && N(w) ? R(e, h, "linePrefix", l + 1)(w) : h(w);
    }
    function h(w) {
      return w === null || _(w) ? e.check(ag, v, E)(w) : (e.enter("codeFlowValue"), y(w));
    }
    function y(w) {
      return w === null || _(w) ? (e.exit("codeFlowValue"), h(w)) : (e.consume(w), y);
    }
    function E(w) {
      return (e.exit("codeFenced"), t(w));
    }
    function S(w, P, L) {
      let O = 0;
      return D;
      function D(U) {
        return (w.enter("lineEnding"), w.consume(U), w.exit("lineEnding"), X);
      }
      function X(U) {
        return (
          w.enter("codeFencedFence"),
          N(U)
            ? R(
                w,
                Q,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
              )(U)
            : Q(U)
        );
      }
      function Q(U) {
        return U === u ? (w.enter("codeFencedFenceSequence"), B(U)) : L(U);
      }
      function B(U) {
        return U === u
          ? (O++, w.consume(U), B)
          : O >= o
            ? (w.exit("codeFencedFenceSequence"), N(U) ? R(w, j, "whitespace")(U) : j(U))
            : L(U);
      }
      function j(U) {
        return U === null || _(U) ? (w.exit("codeFencedFence"), P(U)) : L(U);
      }
    }
  }
  function Tv(e, t, n) {
    let r = this;
    return i;
    function i(o) {
      return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
    }
    function l(o) {
      return r.parser.lazy[r.now().line] ? n(o) : t(o);
    }
  }
  var Xi = { name: "codeIndented", tokenize: Iv },
    Pv = { partial: !0, tokenize: Lv };
  function Iv(e, t, n) {
    let r = this;
    return i;
    function i(s) {
      return (e.enter("codeIndented"), R(e, l, "linePrefix", 5)(s));
    }
    function l(s) {
      let c = r.events[r.events.length - 1];
      return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4
        ? o(s)
        : n(s);
    }
    function o(s) {
      return s === null ? a(s) : _(s) ? e.attempt(Pv, o, a)(s) : (e.enter("codeFlowValue"), u(s));
    }
    function u(s) {
      return s === null || _(s) ? (e.exit("codeFlowValue"), o(s)) : (e.consume(s), u);
    }
    function a(s) {
      return (e.exit("codeIndented"), t(s));
    }
  }
  function Lv(e, t, n) {
    let r = this;
    return i;
    function i(o) {
      return r.parser.lazy[r.now().line]
        ? n(o)
        : _(o)
          ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i)
          : R(e, l, "linePrefix", 5)(o);
    }
    function l(o) {
      let u = r.events[r.events.length - 1];
      return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4
        ? t(o)
        : _(o)
          ? i(o)
          : n(o);
    }
  }
  var fc = { name: "codeText", previous: zv, resolve: _v, tokenize: Bv };
  function _v(e) {
    let t = e.length - 4,
      n = 3,
      r,
      i;
    if (
      (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
      (e[t][1].type === "lineEnding" || e[t][1].type === "space")
    ) {
      for (r = n; ++r < t; )
        if (e[r][1].type === "codeTextData") {
          ((e[n][1].type = "codeTextPadding"),
            (e[t][1].type = "codeTextPadding"),
            (n += 2),
            (t -= 2));
          break;
        }
    }
    for (r = n - 1, t++; ++r <= t; )
      i === void 0
        ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
        : (r === t || e[r][1].type === "lineEnding") &&
          ((e[i][1].type = "codeTextData"),
          r !== i + 2 &&
            ((e[i][1].end = e[r - 1][1].end),
            e.splice(i + 2, r - i - 2),
            (t -= r - i - 2),
            (r = i + 2)),
          (i = void 0));
    return e;
  }
  function zv(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function Bv(e, t, n) {
    let r = this,
      i = 0,
      l,
      o;
    return u;
    function u(p) {
      return (e.enter("codeText"), e.enter("codeTextSequence"), a(p));
    }
    function a(p) {
      return p === 96 ? (e.consume(p), i++, a) : (e.exit("codeTextSequence"), s(p));
    }
    function s(p) {
      return p === null
        ? n(p)
        : p === 32
          ? (e.enter("space"), e.consume(p), e.exit("space"), s)
          : p === 96
            ? ((o = e.enter("codeTextSequence")), (l = 0), f(p))
            : _(p)
              ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), s)
              : (e.enter("codeTextData"), c(p));
    }
    function c(p) {
      return p === null || p === 32 || p === 96 || _(p)
        ? (e.exit("codeTextData"), s(p))
        : (e.consume(p), c);
    }
    function f(p) {
      return p === 96
        ? (e.consume(p), l++, f)
        : l === i
          ? (e.exit("codeTextSequence"), e.exit("codeText"), t(p))
          : ((o.type = "codeTextData"), c(p));
    }
  }
  var Yo = class {
    constructor(t) {
      ((this.left = t ? [...t] : []), (this.right = []));
    }
    get(t) {
      if (t < 0 || t >= this.left.length + this.right.length)
        throw new RangeError(
          "Cannot access index `" +
            t +
            "` in a splice buffer of size `" +
            (this.left.length + this.right.length) +
            "`",
        );
      return t < this.left.length
        ? this.left[t]
        : this.right[this.right.length - t + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return (this.setCursor(0), this.right.pop());
    }
    slice(t, n) {
      let r = n ?? Number.POSITIVE_INFINITY;
      return r < this.left.length
        ? this.left.slice(t, r)
        : t > this.left.length
          ? this.right
              .slice(
                this.right.length - r + this.left.length,
                this.right.length - t + this.left.length,
              )
              .reverse()
          : this.left
              .slice(t)
              .concat(this.right.slice(this.right.length - r + this.left.length).reverse());
    }
    splice(t, n, r) {
      let i = n || 0;
      this.setCursor(Math.trunc(t));
      let l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
      return (r && Yi(this.left, r), l.reverse());
    }
    pop() {
      return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
    }
    push(t) {
      (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t));
    }
    pushMany(t) {
      (this.setCursor(Number.POSITIVE_INFINITY), Yi(this.left, t));
    }
    unshift(t) {
      (this.setCursor(0), this.right.push(t));
    }
    unshiftMany(t) {
      (this.setCursor(0), Yi(this.right, t.reverse()));
    }
    setCursor(t) {
      if (
        !(
          t === this.left.length ||
          (t > this.left.length && this.right.length === 0) ||
          (t < 0 && this.left.length === 0)
        )
      )
        if (t < this.left.length) {
          let n = this.left.splice(t, Number.POSITIVE_INFINITY);
          Yi(this.right, n.reverse());
        } else {
          let n = this.right.splice(
            this.left.length + this.right.length - t,
            Number.POSITIVE_INFINITY,
          );
          Yi(this.left, n.reverse());
        }
    }
  };
  function Yi(e, t) {
    let n = 0;
    if (t.length < 1e4) e.push(...t);
    else for (; n < t.length; ) (e.push(...t.slice(n, n + 1e4)), (n += 1e4));
  }
  function Go(e) {
    let t = {},
      n = -1,
      r,
      i,
      l,
      o,
      u,
      a,
      s,
      c = new Yo(e);
    for (; ++n < c.length; ) {
      for (; n in t; ) n = t[n];
      if (
        ((r = c.get(n)),
        n &&
          r[1].type === "chunkFlow" &&
          c.get(n - 1)[1].type === "listItemPrefix" &&
          ((a = r[1]._tokenizer.events),
          (l = 0),
          l < a.length && a[l][1].type === "lineEndingBlank" && (l += 2),
          l < a.length && a[l][1].type === "content"))
      )
        for (; ++l < a.length && a[l][1].type !== "content"; )
          a[l][1].type === "chunkText" && ((a[l][1]._isInFirstContentOfListItem = !0), l++);
      if (r[0] === "enter") r[1].contentType && (Object.assign(t, Rv(c, n)), (n = t[n]), (s = !0));
      else if (r[1]._container) {
        for (l = n, i = void 0; l--; )
          if (((o = c.get(l)), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank"))
            o[0] === "enter" &&
              (i && (c.get(i)[1].type = "lineEndingBlank"), (o[1].type = "lineEnding"), (i = l));
          else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
        i &&
          ((r[1].end = { ...c.get(i)[1].start }),
          (u = c.slice(i, n)),
          u.unshift(r),
          c.splice(i, n - i + 1, u));
      }
    }
    return (fe(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !s);
  }
  function Rv(e, t) {
    let n = e.get(t)[1],
      r = e.get(t)[2],
      i = t - 1,
      l = [],
      o = n._tokenizer;
    o ||
      ((o = r.parser[n.contentType](n.start)),
      n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
    let u = o.events,
      a = [],
      s = {},
      c,
      f,
      p = -1,
      m = n,
      g = 0,
      v = 0,
      F = [v];
    for (; m; ) {
      for (; e.get(++i)[1] !== m; );
      (l.push(i),
        m._tokenizer ||
          ((c = r.sliceStream(m)),
          m.next || c.push(null),
          f && o.defineSkip(m.start),
          m._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0),
          o.write(c),
          m._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)),
        (f = m),
        (m = m.next));
    }
    for (m = n; ++p < u.length; )
      u[p][0] === "exit" &&
        u[p - 1][0] === "enter" &&
        u[p][1].type === u[p - 1][1].type &&
        u[p][1].start.line !== u[p][1].end.line &&
        ((v = p + 1), F.push(v), (m._tokenizer = void 0), (m.previous = void 0), (m = m.next));
    for (
      o.events = [], m ? ((m._tokenizer = void 0), (m.previous = void 0)) : F.pop(), p = F.length;
      p--;
    ) {
      let d = u.slice(F[p], F[p + 1]),
        h = l.pop();
      (a.push([h, h + d.length - 1]), e.splice(h, 2, d));
    }
    for (a.reverse(), p = -1; ++p < a.length; )
      ((s[g + a[p][0]] = g + a[p][1]), (g += a[p][1] - a[p][0] - 1));
    return s;
  }
  var pc = { resolve: Ov, tokenize: Mv },
    Nv = { partial: !0, tokenize: bv };
  function Ov(e) {
    return (Go(e), e);
  }
  function Mv(e, t) {
    let n;
    return r;
    function r(u) {
      return (e.enter("content"), (n = e.enter("chunkContent", { contentType: "content" })), i(u));
    }
    function i(u) {
      return u === null ? l(u) : _(u) ? e.check(Nv, o, l)(u) : (e.consume(u), i);
    }
    function l(u) {
      return (e.exit("chunkContent"), e.exit("content"), t(u));
    }
    function o(u) {
      return (
        e.consume(u),
        e.exit("chunkContent"),
        (n.next = e.enter("chunkContent", { contentType: "content", previous: n })),
        (n = n.next),
        i
      );
    }
  }
  function bv(e, t, n) {
    let r = this;
    return i;
    function i(o) {
      return (
        e.exit("chunkContent"),
        e.enter("lineEnding"),
        e.consume(o),
        e.exit("lineEnding"),
        R(e, l, "linePrefix")
      );
    }
    function l(o) {
      if (o === null || _(o)) return n(o);
      let u = r.events[r.events.length - 1];
      return !r.parser.constructs.disable.null.includes("codeIndented") &&
        u &&
        u[1].type === "linePrefix" &&
        u[2].sliceSerialize(u[1], !0).length >= 4
        ? t(o)
        : e.interrupt(r.parser.constructs.flow, n, t)(o);
    }
  }
  function Jo(e, t, n, r, i, l, o, u, a) {
    let s = a || Number.POSITIVE_INFINITY,
      c = 0;
    return f;
    function f(d) {
      return d === 60
        ? (e.enter(r), e.enter(i), e.enter(l), e.consume(d), e.exit(l), p)
        : d === null || d === 32 || d === 41 || qn(d)
          ? n(d)
          : (e.enter(r),
            e.enter(o),
            e.enter(u),
            e.enter("chunkString", { contentType: "string" }),
            v(d));
    }
    function p(d) {
      return d === 62
        ? (e.enter(l), e.consume(d), e.exit(l), e.exit(i), e.exit(r), t)
        : (e.enter(u), e.enter("chunkString", { contentType: "string" }), m(d));
    }
    function m(d) {
      return d === 62
        ? (e.exit("chunkString"), e.exit(u), p(d))
        : d === null || d === 60 || _(d)
          ? n(d)
          : (e.consume(d), d === 92 ? g : m);
    }
    function g(d) {
      return d === 60 || d === 62 || d === 92 ? (e.consume(d), m) : m(d);
    }
    function v(d) {
      return !c && (d === null || d === 41 || H(d))
        ? (e.exit("chunkString"), e.exit(u), e.exit(o), e.exit(r), t(d))
        : c < s && d === 40
          ? (e.consume(d), c++, v)
          : d === 41
            ? (e.consume(d), c--, v)
            : d === null || d === 32 || d === 40 || qn(d)
              ? n(d)
              : (e.consume(d), d === 92 ? F : v);
    }
    function F(d) {
      return d === 40 || d === 41 || d === 92 ? (e.consume(d), v) : v(d);
    }
  }
  function Zo(e, t, n, r, i, l) {
    let o = this,
      u = 0,
      a;
    return s;
    function s(m) {
      return (e.enter(r), e.enter(i), e.consume(m), e.exit(i), e.enter(l), c);
    }
    function c(m) {
      return u > 999 ||
        m === null ||
        m === 91 ||
        (m === 93 && !a) ||
        (m === 94 && !u && "_hiddenFootnoteSupport" in o.parser.constructs)
        ? n(m)
        : m === 93
          ? (e.exit(l), e.enter(i), e.consume(m), e.exit(i), e.exit(r), t)
          : _(m)
            ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), c)
            : (e.enter("chunkString", { contentType: "string" }), f(m));
    }
    function f(m) {
      return m === null || m === 91 || m === 93 || _(m) || u++ > 999
        ? (e.exit("chunkString"), c(m))
        : (e.consume(m), a || (a = !N(m)), m === 92 ? p : f);
    }
    function p(m) {
      return m === 91 || m === 92 || m === 93 ? (e.consume(m), u++, f) : f(m);
    }
  }
  function eu(e, t, n, r, i, l) {
    let o;
    return u;
    function u(p) {
      return p === 34 || p === 39 || p === 40
        ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), (o = p === 40 ? 41 : p), a)
        : n(p);
    }
    function a(p) {
      return p === o ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(l), s(p));
    }
    function s(p) {
      return p === o
        ? (e.exit(l), a(o))
        : p === null
          ? n(p)
          : _(p)
            ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), R(e, s, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), c(p));
    }
    function c(p) {
      return p === o || p === null || _(p)
        ? (e.exit("chunkString"), s(p))
        : (e.consume(p), p === 92 ? f : c);
    }
    function f(p) {
      return p === o || p === 92 ? (e.consume(p), c) : c(p);
    }
  }
  function Xn(e, t) {
    let n;
    return r;
    function r(i) {
      return _(i)
        ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (n = !0), r)
        : N(i)
          ? R(e, r, n ? "linePrefix" : "lineSuffix")(i)
          : t(i);
    }
  }
  var mc = { name: "definition", tokenize: Uv },
    jv = { partial: !0, tokenize: Hv };
  function Uv(e, t, n) {
    let r = this,
      i;
    return l;
    function l(m) {
      return (e.enter("definition"), o(m));
    }
    function o(m) {
      return Zo.call(
        r,
        e,
        u,
        n,
        "definitionLabel",
        "definitionLabelMarker",
        "definitionLabelString",
      )(m);
    }
    function u(m) {
      return (
        (i = Pe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
        m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), a) : n(m)
      );
    }
    function a(m) {
      return H(m) ? Xn(e, s)(m) : s(m);
    }
    function s(m) {
      return Jo(
        e,
        c,
        n,
        "definitionDestination",
        "definitionDestinationLiteral",
        "definitionDestinationLiteralMarker",
        "definitionDestinationRaw",
        "definitionDestinationString",
      )(m);
    }
    function c(m) {
      return e.attempt(jv, f, f)(m);
    }
    function f(m) {
      return N(m) ? R(e, p, "whitespace")(m) : p(m);
    }
    function p(m) {
      return m === null || _(m) ? (e.exit("definition"), r.parser.defined.push(i), t(m)) : n(m);
    }
  }
  function Hv(e, t, n) {
    return r;
    function r(u) {
      return H(u) ? Xn(e, i)(u) : n(u);
    }
    function i(u) {
      return eu(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(u);
    }
    function l(u) {
      return N(u) ? R(e, o, "whitespace")(u) : o(u);
    }
    function o(u) {
      return u === null || _(u) ? t(u) : n(u);
    }
  }
  var dc = { name: "hardBreakEscape", tokenize: Vv };
  function Vv(e, t, n) {
    return r;
    function r(l) {
      return (e.enter("hardBreakEscape"), e.consume(l), i);
    }
    function i(l) {
      return _(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
    }
  }
  var hc = { name: "headingAtx", resolve: Wv, tokenize: $v };
  function Wv(e, t) {
    let n = e.length - 2,
      r = 3,
      i,
      l;
    return (
      e[r][1].type === "whitespace" && (r += 2),
      n - 2 > r && e[n][1].type === "whitespace" && (n -= 2),
      e[n][1].type === "atxHeadingSequence" &&
        (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace")) &&
        (n -= r + 1 === n ? 2 : 4),
      n > r &&
        ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end }),
        (l = { type: "chunkText", start: e[r][1].start, end: e[n][1].end, contentType: "text" }),
        fe(e, r, n - r + 1, [
          ["enter", i, t],
          ["enter", l, t],
          ["exit", l, t],
          ["exit", i, t],
        ])),
      e
    );
  }
  function $v(e, t, n) {
    let r = 0;
    return i;
    function i(c) {
      return (e.enter("atxHeading"), l(c));
    }
    function l(c) {
      return (e.enter("atxHeadingSequence"), o(c));
    }
    function o(c) {
      return c === 35 && r++ < 6
        ? (e.consume(c), o)
        : c === null || H(c)
          ? (e.exit("atxHeadingSequence"), u(c))
          : n(c);
    }
    function u(c) {
      return c === 35
        ? (e.enter("atxHeadingSequence"), a(c))
        : c === null || _(c)
          ? (e.exit("atxHeading"), t(c))
          : N(c)
            ? R(e, u, "whitespace")(c)
            : (e.enter("atxHeadingText"), s(c));
    }
    function a(c) {
      return c === 35 ? (e.consume(c), a) : (e.exit("atxHeadingSequence"), u(c));
    }
    function s(c) {
      return c === null || c === 35 || H(c) ? (e.exit("atxHeadingText"), u(c)) : (e.consume(c), s);
    }
  }
  var sg = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "search",
      "section",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul",
    ],
    gc = ["pre", "script", "style", "textarea"];
  var yc = { concrete: !0, name: "htmlFlow", resolveTo: Kv, tokenize: Xv },
    Qv = { partial: !0, tokenize: Gv },
    qv = { partial: !0, tokenize: Yv };
  function Kv(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
    return (
      t > 1 &&
        e[t - 2][1].type === "linePrefix" &&
        ((e[t][1].start = e[t - 2][1].start),
        (e[t + 1][1].start = e[t - 2][1].start),
        e.splice(t - 2, 2)),
      e
    );
  }
  function Xv(e, t, n) {
    let r = this,
      i,
      l,
      o,
      u,
      a;
    return s;
    function s(x) {
      return c(x);
    }
    function c(x) {
      return (e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(x), f);
    }
    function f(x) {
      return x === 33
        ? (e.consume(x), p)
        : x === 47
          ? (e.consume(x), (l = !0), v)
          : x === 63
            ? (e.consume(x), (i = 3), r.interrupt ? t : k)
            : ge(x)
              ? (e.consume(x), (o = String.fromCharCode(x)), F)
              : n(x);
    }
    function p(x) {
      return x === 45
        ? (e.consume(x), (i = 2), m)
        : x === 91
          ? (e.consume(x), (i = 5), (u = 0), g)
          : ge(x)
            ? (e.consume(x), (i = 4), r.interrupt ? t : k)
            : n(x);
    }
    function m(x) {
      return x === 45 ? (e.consume(x), r.interrupt ? t : k) : n(x);
    }
    function g(x) {
      let Ve = "CDATA[";
      return x === Ve.charCodeAt(u++)
        ? (e.consume(x), u === Ve.length ? (r.interrupt ? t : Q) : g)
        : n(x);
    }
    function v(x) {
      return ge(x) ? (e.consume(x), (o = String.fromCharCode(x)), F) : n(x);
    }
    function F(x) {
      if (x === null || x === 47 || x === 62 || H(x)) {
        let Ve = x === 47,
          Cn = o.toLowerCase();
        return !Ve && !l && gc.includes(Cn)
          ? ((i = 1), r.interrupt ? t(x) : Q(x))
          : sg.includes(o.toLowerCase())
            ? ((i = 6), Ve ? (e.consume(x), d) : r.interrupt ? t(x) : Q(x))
            : ((i = 7), r.interrupt && !r.parser.lazy[r.now().line] ? n(x) : l ? h(x) : y(x));
      }
      return x === 45 || ae(x) ? (e.consume(x), (o += String.fromCharCode(x)), F) : n(x);
    }
    function d(x) {
      return x === 62 ? (e.consume(x), r.interrupt ? t : Q) : n(x);
    }
    function h(x) {
      return N(x) ? (e.consume(x), h) : D(x);
    }
    function y(x) {
      return x === 47
        ? (e.consume(x), D)
        : x === 58 || x === 95 || ge(x)
          ? (e.consume(x), E)
          : N(x)
            ? (e.consume(x), y)
            : D(x);
    }
    function E(x) {
      return x === 45 || x === 46 || x === 58 || x === 95 || ae(x) ? (e.consume(x), E) : S(x);
    }
    function S(x) {
      return x === 61 ? (e.consume(x), w) : N(x) ? (e.consume(x), S) : y(x);
    }
    function w(x) {
      return x === null || x === 60 || x === 61 || x === 62 || x === 96
        ? n(x)
        : x === 34 || x === 39
          ? (e.consume(x), (a = x), P)
          : N(x)
            ? (e.consume(x), w)
            : L(x);
    }
    function P(x) {
      return x === a
        ? (e.consume(x), (a = null), O)
        : x === null || _(x)
          ? n(x)
          : (e.consume(x), P);
    }
    function L(x) {
      return x === null ||
        x === 34 ||
        x === 39 ||
        x === 47 ||
        x === 60 ||
        x === 61 ||
        x === 62 ||
        x === 96 ||
        H(x)
        ? S(x)
        : (e.consume(x), L);
    }
    function O(x) {
      return x === 47 || x === 62 || N(x) ? y(x) : n(x);
    }
    function D(x) {
      return x === 62 ? (e.consume(x), X) : n(x);
    }
    function X(x) {
      return x === null || _(x) ? Q(x) : N(x) ? (e.consume(x), X) : n(x);
    }
    function Q(x) {
      return x === 45 && i === 2
        ? (e.consume(x), le)
        : x === 60 && i === 1
          ? (e.consume(x), me)
          : x === 62 && i === 4
            ? (e.consume(x), Je)
            : x === 63 && i === 3
              ? (e.consume(x), k)
              : x === 93 && i === 5
                ? (e.consume(x), vt)
                : _(x) && (i === 6 || i === 7)
                  ? (e.exit("htmlFlowData"), e.check(Qv, It, B)(x))
                  : x === null || _(x)
                    ? (e.exit("htmlFlowData"), B(x))
                    : (e.consume(x), Q);
    }
    function B(x) {
      return e.check(qv, j, It)(x);
    }
    function j(x) {
      return (e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), U);
    }
    function U(x) {
      return x === null || _(x) ? B(x) : (e.enter("htmlFlowData"), Q(x));
    }
    function le(x) {
      return x === 45 ? (e.consume(x), k) : Q(x);
    }
    function me(x) {
      return x === 47 ? (e.consume(x), (o = ""), st) : Q(x);
    }
    function st(x) {
      if (x === 62) {
        let Ve = o.toLowerCase();
        return gc.includes(Ve) ? (e.consume(x), Je) : Q(x);
      }
      return ge(x) && o.length < 8 ? (e.consume(x), (o += String.fromCharCode(x)), st) : Q(x);
    }
    function vt(x) {
      return x === 93 ? (e.consume(x), k) : Q(x);
    }
    function k(x) {
      return x === 62 ? (e.consume(x), Je) : x === 45 && i === 2 ? (e.consume(x), k) : Q(x);
    }
    function Je(x) {
      return x === null || _(x) ? (e.exit("htmlFlowData"), It(x)) : (e.consume(x), Je);
    }
    function It(x) {
      return (e.exit("htmlFlow"), t(x));
    }
  }
  function Yv(e, t, n) {
    let r = this;
    return i;
    function i(o) {
      return _(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
    }
    function l(o) {
      return r.parser.lazy[r.now().line] ? n(o) : t(o);
    }
  }
  function Gv(e, t, n) {
    return r;
    function r(i) {
      return (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Tt, t, n));
    }
  }
  var kc = { name: "htmlText", tokenize: Jv };
  function Jv(e, t, n) {
    let r = this,
      i,
      l,
      o;
    return u;
    function u(k) {
      return (e.enter("htmlText"), e.enter("htmlTextData"), e.consume(k), a);
    }
    function a(k) {
      return k === 33
        ? (e.consume(k), s)
        : k === 47
          ? (e.consume(k), S)
          : k === 63
            ? (e.consume(k), y)
            : ge(k)
              ? (e.consume(k), L)
              : n(k);
    }
    function s(k) {
      return k === 45
        ? (e.consume(k), c)
        : k === 91
          ? (e.consume(k), (l = 0), g)
          : ge(k)
            ? (e.consume(k), h)
            : n(k);
    }
    function c(k) {
      return k === 45 ? (e.consume(k), m) : n(k);
    }
    function f(k) {
      return k === null
        ? n(k)
        : k === 45
          ? (e.consume(k), p)
          : _(k)
            ? ((o = f), me(k))
            : (e.consume(k), f);
    }
    function p(k) {
      return k === 45 ? (e.consume(k), m) : f(k);
    }
    function m(k) {
      return k === 62 ? le(k) : k === 45 ? p(k) : f(k);
    }
    function g(k) {
      let Je = "CDATA[";
      return k === Je.charCodeAt(l++) ? (e.consume(k), l === Je.length ? v : g) : n(k);
    }
    function v(k) {
      return k === null
        ? n(k)
        : k === 93
          ? (e.consume(k), F)
          : _(k)
            ? ((o = v), me(k))
            : (e.consume(k), v);
    }
    function F(k) {
      return k === 93 ? (e.consume(k), d) : v(k);
    }
    function d(k) {
      return k === 62 ? le(k) : k === 93 ? (e.consume(k), d) : v(k);
    }
    function h(k) {
      return k === null || k === 62 ? le(k) : _(k) ? ((o = h), me(k)) : (e.consume(k), h);
    }
    function y(k) {
      return k === null
        ? n(k)
        : k === 63
          ? (e.consume(k), E)
          : _(k)
            ? ((o = y), me(k))
            : (e.consume(k), y);
    }
    function E(k) {
      return k === 62 ? le(k) : y(k);
    }
    function S(k) {
      return ge(k) ? (e.consume(k), w) : n(k);
    }
    function w(k) {
      return k === 45 || ae(k) ? (e.consume(k), w) : P(k);
    }
    function P(k) {
      return _(k) ? ((o = P), me(k)) : N(k) ? (e.consume(k), P) : le(k);
    }
    function L(k) {
      return k === 45 || ae(k) ? (e.consume(k), L) : k === 47 || k === 62 || H(k) ? O(k) : n(k);
    }
    function O(k) {
      return k === 47
        ? (e.consume(k), le)
        : k === 58 || k === 95 || ge(k)
          ? (e.consume(k), D)
          : _(k)
            ? ((o = O), me(k))
            : N(k)
              ? (e.consume(k), O)
              : le(k);
    }
    function D(k) {
      return k === 45 || k === 46 || k === 58 || k === 95 || ae(k) ? (e.consume(k), D) : X(k);
    }
    function X(k) {
      return k === 61
        ? (e.consume(k), Q)
        : _(k)
          ? ((o = X), me(k))
          : N(k)
            ? (e.consume(k), X)
            : O(k);
    }
    function Q(k) {
      return k === null || k === 60 || k === 61 || k === 62 || k === 96
        ? n(k)
        : k === 34 || k === 39
          ? (e.consume(k), (i = k), B)
          : _(k)
            ? ((o = Q), me(k))
            : N(k)
              ? (e.consume(k), Q)
              : (e.consume(k), j);
    }
    function B(k) {
      return k === i
        ? (e.consume(k), (i = void 0), U)
        : k === null
          ? n(k)
          : _(k)
            ? ((o = B), me(k))
            : (e.consume(k), B);
    }
    function j(k) {
      return k === null || k === 34 || k === 39 || k === 60 || k === 61 || k === 96
        ? n(k)
        : k === 47 || k === 62 || H(k)
          ? O(k)
          : (e.consume(k), j);
    }
    function U(k) {
      return k === 47 || k === 62 || H(k) ? O(k) : n(k);
    }
    function le(k) {
      return k === 62 ? (e.consume(k), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(k);
    }
    function me(k) {
      return (
        e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), st
      );
    }
    function st(k) {
      return N(k)
        ? R(
            e,
            vt,
            "linePrefix",
            r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
          )(k)
        : vt(k);
    }
    function vt(k) {
      return (e.enter("htmlTextData"), o(k));
    }
  }
  var Yn = { name: "labelEnd", resolveAll: nw, resolveTo: rw, tokenize: iw },
    Zv = { tokenize: lw },
    ew = { tokenize: ow },
    tw = { tokenize: uw };
  function nw(e) {
    let t = -1,
      n = [];
    for (; ++t < e.length; ) {
      let r = e[t][1];
      if (
        (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd")
      ) {
        let i = r.type === "labelImage" ? 4 : 2;
        ((r.type = "data"), (t += i));
      }
    }
    return (e.length !== n.length && fe(e, 0, e.length, n), e);
  }
  function rw(e, t) {
    let n = e.length,
      r = 0,
      i,
      l,
      o,
      u;
    for (; n--; )
      if (((i = e[n][1]), l)) {
        if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
        e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
      } else if (o) {
        if (
          e[n][0] === "enter" &&
          (i.type === "labelImage" || i.type === "labelLink") &&
          !i._balanced &&
          ((l = n), i.type !== "labelLink")
        ) {
          r = 2;
          break;
        }
      } else i.type === "labelEnd" && (o = n);
    let a = {
        type: e[l][1].type === "labelLink" ? "link" : "image",
        start: { ...e[l][1].start },
        end: { ...e[e.length - 1][1].end },
      },
      s = { type: "label", start: { ...e[l][1].start }, end: { ...e[o][1].end } },
      c = { type: "labelText", start: { ...e[l + r + 2][1].end }, end: { ...e[o - 2][1].start } };
    return (
      (u = [
        ["enter", a, t],
        ["enter", s, t],
      ]),
      (u = Re(u, e.slice(l + 1, l + r + 3))),
      (u = Re(u, [["enter", c, t]])),
      (u = Re(u, vn(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t))),
      (u = Re(u, [["exit", c, t], e[o - 2], e[o - 1], ["exit", s, t]])),
      (u = Re(u, e.slice(o + 1))),
      (u = Re(u, [["exit", a, t]])),
      fe(e, l, e.length, u),
      e
    );
  }
  function iw(e, t, n) {
    let r = this,
      i = r.events.length,
      l,
      o;
    for (; i--; )
      if (
        (r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") &&
        !r.events[i][1]._balanced
      ) {
        l = r.events[i][1];
        break;
      }
    return u;
    function u(p) {
      return l
        ? l._inactive
          ? f(p)
          : ((o = r.parser.defined.includes(Pe(r.sliceSerialize({ start: l.end, end: r.now() })))),
            e.enter("labelEnd"),
            e.enter("labelMarker"),
            e.consume(p),
            e.exit("labelMarker"),
            e.exit("labelEnd"),
            a)
        : n(p);
    }
    function a(p) {
      return p === 40
        ? e.attempt(Zv, c, o ? c : f)(p)
        : p === 91
          ? e.attempt(ew, c, o ? s : f)(p)
          : o
            ? c(p)
            : f(p);
    }
    function s(p) {
      return e.attempt(tw, c, f)(p);
    }
    function c(p) {
      return t(p);
    }
    function f(p) {
      return ((l._balanced = !0), n(p));
    }
  }
  function lw(e, t, n) {
    return r;
    function r(f) {
      return (
        e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i
      );
    }
    function i(f) {
      return H(f) ? Xn(e, l)(f) : l(f);
    }
    function l(f) {
      return f === 41
        ? c(f)
        : Jo(
            e,
            o,
            u,
            "resourceDestination",
            "resourceDestinationLiteral",
            "resourceDestinationLiteralMarker",
            "resourceDestinationRaw",
            "resourceDestinationString",
            32,
          )(f);
    }
    function o(f) {
      return H(f) ? Xn(e, a)(f) : c(f);
    }
    function u(f) {
      return n(f);
    }
    function a(f) {
      return f === 34 || f === 39 || f === 40
        ? eu(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f)
        : c(f);
    }
    function s(f) {
      return H(f) ? Xn(e, c)(f) : c(f);
    }
    function c(f) {
      return f === 41
        ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t)
        : n(f);
    }
  }
  function ow(e, t, n) {
    let r = this;
    return i;
    function i(u) {
      return Zo.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(u);
    }
    function l(u) {
      return r.parser.defined.includes(
        Pe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
      )
        ? t(u)
        : n(u);
    }
    function o(u) {
      return n(u);
    }
  }
  function uw(e, t, n) {
    return r;
    function r(l) {
      return (
        e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i
      );
    }
    function i(l) {
      return l === 93
        ? (e.enter("referenceMarker"),
          e.consume(l),
          e.exit("referenceMarker"),
          e.exit("reference"),
          t)
        : n(l);
    }
  }
  var xc = { name: "labelStartImage", resolveAll: Yn.resolveAll, tokenize: aw };
  function aw(e, t, n) {
    let r = this;
    return i;
    function i(u) {
      return (
        e.enter("labelImage"),
        e.enter("labelImageMarker"),
        e.consume(u),
        e.exit("labelImageMarker"),
        l
      );
    }
    function l(u) {
      return u === 91
        ? (e.enter("labelMarker"), e.consume(u), e.exit("labelMarker"), e.exit("labelImage"), o)
        : n(u);
    }
    function o(u) {
      return u === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(u) : t(u);
    }
  }
  var vc = { name: "labelStartLink", resolveAll: Yn.resolveAll, tokenize: sw };
  function sw(e, t, n) {
    let r = this;
    return i;
    function i(o) {
      return (
        e.enter("labelLink"),
        e.enter("labelMarker"),
        e.consume(o),
        e.exit("labelMarker"),
        e.exit("labelLink"),
        l
      );
    }
    function l(o) {
      return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
    }
  }
  var Gi = { name: "lineEnding", tokenize: cw };
  function cw(e, t) {
    return n;
    function n(r) {
      return (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), R(e, t, "linePrefix"));
    }
  }
  var Gn = { name: "thematicBreak", tokenize: fw };
  function fw(e, t, n) {
    let r = 0,
      i;
    return l;
    function l(s) {
      return (e.enter("thematicBreak"), o(s));
    }
    function o(s) {
      return ((i = s), u(s));
    }
    function u(s) {
      return s === i
        ? (e.enter("thematicBreakSequence"), a(s))
        : r >= 3 && (s === null || _(s))
          ? (e.exit("thematicBreak"), t(s))
          : n(s);
    }
    function a(s) {
      return s === i
        ? (e.consume(s), r++, a)
        : (e.exit("thematicBreakSequence"), N(s) ? R(e, u, "whitespace")(s) : u(s));
    }
  }
  var Ie = { continuation: { tokenize: hw }, exit: yw, name: "list", tokenize: dw },
    pw = { partial: !0, tokenize: kw },
    mw = { partial: !0, tokenize: gw };
  function dw(e, t, n) {
    let r = this,
      i = r.events[r.events.length - 1],
      l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
      o = 0;
    return u;
    function u(m) {
      let g =
        r.containerState.type ||
        (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
      if (
        g === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : qi(m)
      ) {
        if (
          (r.containerState.type || ((r.containerState.type = g), e.enter(g, { _container: !0 })),
          g === "listUnordered")
        )
          return (e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(Gn, n, s)(m) : s(m));
        if (!r.interrupt || m === 49)
          return (e.enter("listItemPrefix"), e.enter("listItemValue"), a(m));
      }
      return n(m);
    }
    function a(m) {
      return qi(m) && ++o < 10
        ? (e.consume(m), a)
        : (!r.interrupt || o < 2) &&
            (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46)
          ? (e.exit("listItemValue"), s(m))
          : n(m);
    }
    function s(m) {
      return (
        e.enter("listItemMarker"),
        e.consume(m),
        e.exit("listItemMarker"),
        (r.containerState.marker = r.containerState.marker || m),
        e.check(Tt, r.interrupt ? n : c, e.attempt(pw, p, f))
      );
    }
    function c(m) {
      return ((r.containerState.initialBlankLine = !0), l++, p(m));
    }
    function f(m) {
      return N(m)
        ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), p)
        : n(m);
    }
    function p(m) {
      return (
        (r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length), t(m)
      );
    }
  }
  function hw(e, t, n) {
    let r = this;
    return ((r.containerState._closeFlow = void 0), e.check(Tt, i, l));
    function i(u) {
      return (
        (r.containerState.furtherBlankLines =
          r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
        R(e, t, "listItemIndent", r.containerState.size + 1)(u)
      );
    }
    function l(u) {
      return r.containerState.furtherBlankLines || !N(u)
        ? ((r.containerState.furtherBlankLines = void 0),
          (r.containerState.initialBlankLine = void 0),
          o(u))
        : ((r.containerState.furtherBlankLines = void 0),
          (r.containerState.initialBlankLine = void 0),
          e.attempt(mw, t, o)(u));
    }
    function o(u) {
      return (
        (r.containerState._closeFlow = !0),
        (r.interrupt = void 0),
        R(
          e,
          e.attempt(Ie, t, n),
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
        )(u)
      );
    }
  }
  function gw(e, t, n) {
    let r = this;
    return R(e, i, "listItemIndent", r.containerState.size + 1);
    function i(l) {
      let o = r.events[r.events.length - 1];
      return o &&
        o[1].type === "listItemIndent" &&
        o[2].sliceSerialize(o[1], !0).length === r.containerState.size
        ? t(l)
        : n(l);
    }
  }
  function yw(e) {
    e.exit(this.containerState.type);
  }
  function kw(e, t, n) {
    let r = this;
    return R(
      e,
      i,
      "listItemPrefixWhitespace",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5,
    );
    function i(l) {
      let o = r.events[r.events.length - 1];
      return !N(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
    }
  }
  var tu = { name: "setextUnderline", resolveTo: xw, tokenize: vw };
  function xw(e, t) {
    let n = e.length,
      r,
      i,
      l;
    for (; n--; )
      if (e[n][0] === "enter") {
        if (e[n][1].type === "content") {
          r = n;
          break;
        }
        e[n][1].type === "paragraph" && (i = n);
      } else
        (e[n][1].type === "content" && e.splice(n, 1),
          !l && e[n][1].type === "definition" && (l = n));
    let o = {
      type: "setextHeading",
      start: { ...e[r][1].start },
      end: { ...e[e.length - 1][1].end },
    };
    return (
      (e[i][1].type = "setextHeadingText"),
      l
        ? (e.splice(i, 0, ["enter", o, t]),
          e.splice(l + 1, 0, ["exit", e[r][1], t]),
          (e[r][1].end = { ...e[l][1].end }))
        : (e[r][1] = o),
      e.push(["exit", o, t]),
      e
    );
  }
  function vw(e, t, n) {
    let r = this,
      i;
    return l;
    function l(s) {
      let c = r.events.length,
        f;
      for (; c--; )
        if (
          r.events[c][1].type !== "lineEnding" &&
          r.events[c][1].type !== "linePrefix" &&
          r.events[c][1].type !== "content"
        ) {
          f = r.events[c][1].type === "paragraph";
          break;
        }
      return !r.parser.lazy[r.now().line] && (r.interrupt || f)
        ? (e.enter("setextHeadingLine"), (i = s), o(s))
        : n(s);
    }
    function o(s) {
      return (e.enter("setextHeadingLineSequence"), u(s));
    }
    function u(s) {
      return s === i
        ? (e.consume(s), u)
        : (e.exit("setextHeadingLineSequence"), N(s) ? R(e, a, "lineSuffix")(s) : a(s));
    }
    function a(s) {
      return s === null || _(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
    }
  }
  var cg = { tokenize: ww };
  function ww(e) {
    let t = this,
      n = e.attempt(
        Tt,
        r,
        e.attempt(
          this.parser.constructs.flowInitial,
          i,
          R(e, e.attempt(this.parser.constructs.flow, i, e.attempt(pc, i)), "linePrefix"),
        ),
      );
    return n;
    function r(l) {
      if (l === null) {
        e.consume(l);
        return;
      }
      return (
        e.enter("lineEndingBlank"),
        e.consume(l),
        e.exit("lineEndingBlank"),
        (t.currentConstruct = void 0),
        n
      );
    }
    function i(l) {
      if (l === null) {
        e.consume(l);
        return;
      }
      return (
        e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), (t.currentConstruct = void 0), n
      );
    }
  }
  var fg = { resolveAll: hg() },
    pg = dg("string"),
    mg = dg("text");
  function dg(e) {
    return { resolveAll: hg(e === "text" ? Dw : void 0), tokenize: t };
    function t(n) {
      let r = this,
        i = this.parser.constructs[e],
        l = n.attempt(i, o, u);
      return o;
      function o(c) {
        return s(c) ? l(c) : u(c);
      }
      function u(c) {
        if (c === null) {
          n.consume(c);
          return;
        }
        return (n.enter("data"), n.consume(c), a);
      }
      function a(c) {
        return s(c) ? (n.exit("data"), l(c)) : (n.consume(c), a);
      }
      function s(c) {
        if (c === null) return !0;
        let f = i[c],
          p = -1;
        if (f)
          for (; ++p < f.length; ) {
            let m = f[p];
            if (!m.previous || m.previous.call(r, r.previous)) return !0;
          }
        return !1;
      }
    }
  }
  function hg(e) {
    return t;
    function t(n, r) {
      let i = -1,
        l;
      for (; ++i <= n.length; )
        l === void 0
          ? n[i] && n[i][1].type === "data" && ((l = i), i++)
          : (!n[i] || n[i][1].type !== "data") &&
            (i !== l + 2 &&
              ((n[l][1].end = n[i - 1][1].end), n.splice(l + 2, i - l - 2), (i = l + 2)),
            (l = void 0));
      return e ? e(n, r) : n;
    }
  }
  function Dw(e, t) {
    let n = 0;
    for (; ++n <= e.length; )
      if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
        let r = e[n - 1][1],
          i = t.sliceStream(r),
          l = i.length,
          o = -1,
          u = 0,
          a;
        for (; l--; ) {
          let s = i[l];
          if (typeof s == "string") {
            for (o = s.length; s.charCodeAt(o - 1) === 32; ) (u++, o--);
            if (o) break;
            o = -1;
          } else if (s === -2) ((a = !0), u++);
          else if (s !== -1) {
            l++;
            break;
          }
        }
        if ((t._contentTypeTextTrailing && n === e.length && (u = 0), u)) {
          let s = {
            type: n === e.length || a || u < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              _bufferIndex: l ? o : r.start._bufferIndex + o,
              _index: r.start._index + l,
              line: r.end.line,
              column: r.end.column - u,
              offset: r.end.offset - u,
            },
            end: { ...r.end },
          };
          ((r.end = { ...s.start }),
            r.start.offset === r.end.offset
              ? Object.assign(r, s)
              : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), (n += 2)));
        }
        n++;
      }
    return e;
  }
  var wc = {};
  Au(wc, {
    attentionMarkers: () => Iw,
    contentInitial: () => Cw,
    disable: () => Lw,
    document: () => Ew,
    flow: () => Sw,
    flowInitial: () => Fw,
    insideSpan: () => Pw,
    string: () => Aw,
    text: () => Tw,
  });
  var Ew = {
      42: Ie,
      43: Ie,
      45: Ie,
      48: Ie,
      49: Ie,
      50: Ie,
      51: Ie,
      52: Ie,
      53: Ie,
      54: Ie,
      55: Ie,
      56: Ie,
      57: Ie,
      62: Qo,
    },
    Cw = { 91: mc },
    Fw = { [-2]: Xi, [-1]: Xi, 32: Xi },
    Sw = { 35: hc, 42: Gn, 45: [tu, Gn], 60: yc, 61: tu, 95: Gn, 96: Xo, 126: Xo },
    Aw = { 38: Ko, 92: qo },
    Tw = {
      [-5]: Gi,
      [-4]: Gi,
      [-3]: Gi,
      33: xc,
      38: Ko,
      42: Ki,
      60: [cc, kc],
      91: vc,
      92: [dc, qo],
      93: Yn,
      95: Ki,
      96: fc,
    },
    Pw = { null: [Ki, fg] },
    Iw = { null: [42, 95] },
    Lw = { null: [] };
  function gg(e, t, n) {
    let r = {
        _bufferIndex: -1,
        _index: 0,
        line: (n && n.line) || 1,
        column: (n && n.column) || 1,
        offset: (n && n.offset) || 0,
      },
      i = {},
      l = [],
      o = [],
      u = [],
      a = !0,
      s = {
        attempt: O(P),
        check: O(L),
        consume: E,
        enter: S,
        exit: w,
        interrupt: O(L, { interrupt: !0 }),
      },
      c = {
        code: null,
        containerState: {},
        defineSkip: d,
        events: [],
        now: F,
        parser: e,
        previous: null,
        sliceSerialize: g,
        sliceStream: v,
        write: m,
      },
      f = t.tokenize.call(c, s),
      p;
    return (t.resolveAll && l.push(t), c);
    function m(B) {
      return (
        (o = Re(o, B)),
        h(),
        o[o.length - 1] !== null ? [] : (D(t, 0), (c.events = vn(l, c.events, c)), c.events)
      );
    }
    function g(B, j) {
      return zw(v(B), j);
    }
    function v(B) {
      return _w(o, B);
    }
    function F() {
      let { _bufferIndex: B, _index: j, line: U, column: le, offset: me } = r;
      return { _bufferIndex: B, _index: j, line: U, column: le, offset: me };
    }
    function d(B) {
      ((i[B.line] = B.column), Q());
    }
    function h() {
      let B;
      for (; r._index < o.length; ) {
        let j = o[r._index];
        if (typeof j == "string")
          for (
            B = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
            r._index === B && r._bufferIndex < j.length;
          )
            y(j.charCodeAt(r._bufferIndex));
        else y(j);
      }
    }
    function y(B) {
      ((a = void 0), (p = B), (f = f(B)));
    }
    function E(B) {
      (_(B)
        ? (r.line++, (r.column = 1), (r.offset += B === -3 ? 2 : 1), Q())
        : B !== -1 && (r.column++, r.offset++),
        r._bufferIndex < 0
          ? r._index++
          : (r._bufferIndex++,
            r._bufferIndex === o[r._index].length && ((r._bufferIndex = -1), r._index++)),
        (c.previous = B),
        (a = !0));
    }
    function S(B, j) {
      let U = j || {};
      return ((U.type = B), (U.start = F()), c.events.push(["enter", U, c]), u.push(U), U);
    }
    function w(B) {
      let j = u.pop();
      return ((j.end = F()), c.events.push(["exit", j, c]), j);
    }
    function P(B, j) {
      D(B, j.from);
    }
    function L(B, j) {
      j.restore();
    }
    function O(B, j) {
      return U;
      function U(le, me, st) {
        let vt, k, Je, It;
        return Array.isArray(le) ? Ve(le) : "tokenize" in le ? Ve([le]) : x(le);
        function x(ve) {
          return Qr;
          function Qr(Lt) {
            let Fn = Lt !== null && ve[Lt],
              tr = Lt !== null && ve.null,
              Su = [
                ...(Array.isArray(Fn) ? Fn : Fn ? [Fn] : []),
                ...(Array.isArray(tr) ? tr : tr ? [tr] : []),
              ];
            return Ve(Su)(Lt);
          }
        }
        function Ve(ve) {
          return ((vt = ve), (k = 0), ve.length === 0 ? st : Cn(ve[k]));
        }
        function Cn(ve) {
          return Qr;
          function Qr(Lt) {
            return (
              (It = X()),
              (Je = ve),
              ve.partial || (c.currentConstruct = ve),
              ve.name && c.parser.constructs.disable.null.includes(ve.name)
                ? fl(Lt)
                : ve.tokenize.call(j ? Object.assign(Object.create(c), j) : c, s, Fu, fl)(Lt)
            );
          }
        }
        function Fu(ve) {
          return ((a = !0), B(Je, It), me);
        }
        function fl(ve) {
          return ((a = !0), It.restore(), ++k < vt.length ? Cn(vt[k]) : st);
        }
      }
    }
    function D(B, j) {
      (B.resolveAll && !l.includes(B) && l.push(B),
        B.resolve && fe(c.events, j, c.events.length - j, B.resolve(c.events.slice(j), c)),
        B.resolveTo && (c.events = B.resolveTo(c.events, c)));
    }
    function X() {
      let B = F(),
        j = c.previous,
        U = c.currentConstruct,
        le = c.events.length,
        me = Array.from(u);
      return { from: le, restore: st };
      function st() {
        ((r = B),
          (c.previous = j),
          (c.currentConstruct = U),
          (c.events.length = le),
          (u = me),
          Q());
      }
    }
    function Q() {
      r.line in i && r.column < 2 && ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
    }
  }
  function _w(e, t) {
    let n = t.start._index,
      r = t.start._bufferIndex,
      i = t.end._index,
      l = t.end._bufferIndex,
      o;
    if (n === i) o = [e[n].slice(r, l)];
    else {
      if (((o = e.slice(n, i)), r > -1)) {
        let u = o[0];
        typeof u == "string" ? (o[0] = u.slice(r)) : o.shift();
      }
      l > 0 && o.push(e[i].slice(0, l));
    }
    return o;
  }
  function zw(e, t) {
    let n = -1,
      r = [],
      i;
    for (; ++n < e.length; ) {
      let l = e[n],
        o;
      if (typeof l == "string") o = l;
      else
        switch (l) {
          case -5: {
            o = "\r";
            break;
          }
          case -4: {
            o = `
`;
            break;
          }
          case -3: {
            o = `\r
`;
            break;
          }
          case -2: {
            o = t ? " " : "	";
            break;
          }
          case -1: {
            if (!t && i) continue;
            o = " ";
            break;
          }
          default:
            o = String.fromCharCode(l);
        }
      ((i = l === -2), r.push(o));
    }
    return r.join("");
  }
  function Dc(e) {
    let r = {
      constructs: Wo([wc, ...((e || {}).extensions || [])]),
      content: i(ig),
      defined: [],
      document: i(og),
      flow: i(cg),
      lazy: {},
      string: i(pg),
      text: i(mg),
    };
    return r;
    function i(l) {
      return o;
      function o(u) {
        return gg(r, l, u);
      }
    }
  }
  function Ec(e) {
    for (; !Go(e); );
    return e;
  }
  var yg = /[\0\t\n\r]/g;
  function Cc() {
    let e = 1,
      t = "",
      n = !0,
      r;
    return i;
    function i(l, o, u) {
      let a = [],
        s,
        c,
        f,
        p,
        m;
      for (
        l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)),
          f = 0,
          t = "",
          n && (l.charCodeAt(0) === 65279 && f++, (n = void 0));
        f < l.length;
      ) {
        if (
          ((yg.lastIndex = f),
          (s = yg.exec(l)),
          (p = s && s.index !== void 0 ? s.index : l.length),
          (m = l.charCodeAt(p)),
          !s)
        ) {
          t = l.slice(f);
          break;
        }
        if (m === 10 && f === p && r) (a.push(-3), (r = void 0));
        else
          switch (
            (r && (a.push(-5), (r = void 0)), f < p && (a.push(l.slice(f, p)), (e += p - f)), m)
          ) {
            case 0: {
              (a.push(65533), e++);
              break;
            }
            case 9: {
              for (c = Math.ceil(e / 4) * 4, a.push(-2); e++ < c; ) a.push(-1);
              break;
            }
            case 10: {
              (a.push(-4), (e = 1));
              break;
            }
            default:
              ((r = !0), (e = 1));
          }
        f = p + 1;
      }
      return (u && (r && a.push(-5), t && a.push(t), a.push(null)), a);
    }
  }
  var Bw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function kg(e) {
    return e.replace(Bw, Rw);
  }
  function Rw(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
      let i = n.charCodeAt(1),
        l = i === 120 || i === 88;
      return $o(n.slice(l ? 2 : 1), l ? 16 : 10);
    }
    return Rr(n) || e;
  }
  var vg = {}.hasOwnProperty;
  function Fc(e, t, n) {
    return (
      t && typeof t == "object" && ((n = t), (t = void 0)),
      Nw(n)(
        Ec(
          Dc(n)
            .document()
            .write(Cc()(e, t, !0)),
        ),
      )
    );
  }
  function Nw(e) {
    let t = {
      transforms: [],
      canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
      enter: {
        autolink: l(Mf),
        autolinkProtocol: O,
        autolinkEmail: O,
        atxHeading: l(Rf),
        blockQuote: l(Lt),
        characterEscape: O,
        characterReference: O,
        codeFenced: l(Fn),
        codeFencedFenceInfo: o,
        codeFencedFenceMeta: o,
        codeIndented: l(Fn, o),
        codeText: l(tr, o),
        codeTextData: O,
        data: O,
        codeFlowValue: O,
        definition: l(Su),
        definitionDestinationString: o,
        definitionLabelString: o,
        definitionTitleString: o,
        emphasis: l(P0),
        hardBreakEscape: l(Nf),
        hardBreakTrailing: l(Nf),
        htmlFlow: l(Of, o),
        htmlFlowData: O,
        htmlText: l(Of, o),
        htmlTextData: O,
        image: l(I0),
        label: o,
        link: l(Mf),
        listItem: l(L0),
        listItemValue: p,
        listOrdered: l(bf, f),
        listUnordered: l(bf),
        paragraph: l(_0),
        reference: x,
        referenceString: o,
        resourceDestinationString: o,
        resourceTitleString: o,
        setextHeading: l(Rf),
        strong: l(z0),
        thematicBreak: l(R0),
      },
      exit: {
        atxHeading: a(),
        atxHeadingSequence: S,
        autolink: a(),
        autolinkEmail: Qr,
        autolinkProtocol: ve,
        blockQuote: a(),
        characterEscapeValue: D,
        characterReferenceMarkerHexadecimal: Cn,
        characterReferenceMarkerNumeric: Cn,
        characterReferenceValue: Fu,
        characterReference: fl,
        codeFenced: a(F),
        codeFencedFence: v,
        codeFencedFenceInfo: m,
        codeFencedFenceMeta: g,
        codeFlowValue: D,
        codeIndented: a(d),
        codeText: a(U),
        codeTextData: D,
        data: D,
        definition: a(),
        definitionDestinationString: E,
        definitionLabelString: h,
        definitionTitleString: y,
        emphasis: a(),
        hardBreakEscape: a(Q),
        hardBreakTrailing: a(Q),
        htmlFlow: a(B),
        htmlFlowData: D,
        htmlText: a(j),
        htmlTextData: D,
        image: a(me),
        label: vt,
        labelText: st,
        lineEnding: X,
        link: a(le),
        listItem: a(),
        listOrdered: a(),
        listUnordered: a(),
        paragraph: a(),
        referenceString: Ve,
        resourceDestinationString: k,
        resourceTitleString: Je,
        resource: It,
        setextHeading: a(L),
        setextHeadingLineSequence: P,
        setextHeadingText: w,
        strong: a(),
        thematicBreak: a(),
      },
    };
    wg(t, (e || {}).mdastExtensions || []);
    let n = {};
    return r;
    function r(C) {
      let I = { type: "root", children: [] },
        M = {
          stack: [I],
          tokenStack: [],
          config: t,
          enter: u,
          exit: s,
          buffer: o,
          resume: c,
          data: n,
        },
        W = [],
        Y = -1;
      for (; ++Y < C.length; )
        if (C[Y][1].type === "listOrdered" || C[Y][1].type === "listUnordered")
          if (C[Y][0] === "enter") W.push(Y);
          else {
            let ct = W.pop();
            Y = i(C, ct, Y);
          }
      for (Y = -1; ++Y < C.length; ) {
        let ct = t[C[Y][0]];
        vg.call(ct, C[Y][1].type) &&
          ct[C[Y][1].type].call(
            Object.assign({ sliceSerialize: C[Y][2].sliceSerialize }, M),
            C[Y][1],
          );
      }
      if (M.tokenStack.length > 0) {
        let ct = M.tokenStack[M.tokenStack.length - 1];
        (ct[1] || xg).call(M, void 0, ct[0]);
      }
      for (
        I.position = {
          start: wn(C.length > 0 ? C[0][1].start : { line: 1, column: 1, offset: 0 }),
          end: wn(C.length > 0 ? C[C.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
        },
          Y = -1;
        ++Y < t.transforms.length;
      )
        I = t.transforms[Y](I) || I;
      return I;
    }
    function i(C, I, M) {
      let W = I - 1,
        Y = -1,
        ct = !1,
        Sn,
        _t,
        qr,
        Kr;
      for (; ++W <= M; ) {
        let We = C[W];
        switch (We[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            (We[0] === "enter" ? Y++ : Y--, (Kr = void 0));
            break;
          }
          case "lineEndingBlank": {
            We[0] === "enter" && (Sn && !Kr && !Y && !qr && (qr = W), (Kr = void 0));
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Kr = void 0;
        }
        if (
          (!Y && We[0] === "enter" && We[1].type === "listItemPrefix") ||
          (Y === -1 &&
            We[0] === "exit" &&
            (We[1].type === "listUnordered" || We[1].type === "listOrdered"))
        ) {
          if (Sn) {
            let nr = W;
            for (_t = void 0; nr--; ) {
              let zt = C[nr];
              if (zt[1].type === "lineEnding" || zt[1].type === "lineEndingBlank") {
                if (zt[0] === "exit") continue;
                (_t && ((C[_t][1].type = "lineEndingBlank"), (ct = !0)),
                  (zt[1].type = "lineEnding"),
                  (_t = nr));
              } else if (
                !(
                  zt[1].type === "linePrefix" ||
                  zt[1].type === "blockQuotePrefix" ||
                  zt[1].type === "blockQuotePrefixWhitespace" ||
                  zt[1].type === "blockQuoteMarker" ||
                  zt[1].type === "listItemIndent"
                )
              )
                break;
            }
            (qr && (!_t || qr < _t) && (Sn._spread = !0),
              (Sn.end = Object.assign({}, _t ? C[_t][1].start : We[1].end)),
              C.splice(_t || W, 0, ["exit", Sn, We[2]]),
              W++,
              M++);
          }
          if (We[1].type === "listItemPrefix") {
            let nr = {
              type: "listItem",
              _spread: !1,
              start: Object.assign({}, We[1].start),
              end: void 0,
            };
            ((Sn = nr), C.splice(W, 0, ["enter", nr, We[2]]), W++, M++, (qr = void 0), (Kr = !0));
          }
        }
      }
      return ((C[I][1]._spread = ct), M);
    }
    function l(C, I) {
      return M;
      function M(W) {
        (u.call(this, C(W), W), I && I.call(this, W));
      }
    }
    function o() {
      this.stack.push({ type: "fragment", children: [] });
    }
    function u(C, I, M) {
      (this.stack[this.stack.length - 1].children.push(C),
        this.stack.push(C),
        this.tokenStack.push([I, M || void 0]),
        (C.position = { start: wn(I.start), end: void 0 }));
    }
    function a(C) {
      return I;
      function I(M) {
        (C && C.call(this, M), s.call(this, M));
      }
    }
    function s(C, I) {
      let M = this.stack.pop(),
        W = this.tokenStack.pop();
      if (W) W[0].type !== C.type && (I ? I.call(this, C, W[0]) : (W[1] || xg).call(this, C, W[0]));
      else
        throw new Error(
          "Cannot close `" +
            C.type +
            "` (" +
            kn({ start: C.start, end: C.end }) +
            "): it\u2019s not open",
        );
      M.position.end = wn(C.end);
    }
    function c() {
      return Qn(this.stack.pop());
    }
    function f() {
      this.data.expectingFirstListItemValue = !0;
    }
    function p(C) {
      if (this.data.expectingFirstListItemValue) {
        let I = this.stack[this.stack.length - 2];
        ((I.start = Number.parseInt(this.sliceSerialize(C), 10)),
          (this.data.expectingFirstListItemValue = void 0));
      }
    }
    function m() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.lang = C;
    }
    function g() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.meta = C;
    }
    function v() {
      this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0));
    }
    function F() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      ((I.value = C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")), (this.data.flowCodeInside = void 0));
    }
    function d() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.value = C.replace(/(\r?\n|\r)$/g, "");
    }
    function h(C) {
      let I = this.resume(),
        M = this.stack[this.stack.length - 1];
      ((M.label = I), (M.identifier = Pe(this.sliceSerialize(C)).toLowerCase()));
    }
    function y() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.title = C;
    }
    function E() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.url = C;
    }
    function S(C) {
      let I = this.stack[this.stack.length - 1];
      if (!I.depth) {
        let M = this.sliceSerialize(C).length;
        I.depth = M;
      }
    }
    function w() {
      this.data.setextHeadingSlurpLineEnding = !0;
    }
    function P(C) {
      let I = this.stack[this.stack.length - 1];
      I.depth = this.sliceSerialize(C).codePointAt(0) === 61 ? 1 : 2;
    }
    function L() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function O(C) {
      let M = this.stack[this.stack.length - 1].children,
        W = M[M.length - 1];
      ((!W || W.type !== "text") &&
        ((W = B0()), (W.position = { start: wn(C.start), end: void 0 }), M.push(W)),
        this.stack.push(W));
    }
    function D(C) {
      let I = this.stack.pop();
      ((I.value += this.sliceSerialize(C)), (I.position.end = wn(C.end)));
    }
    function X(C) {
      let I = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        let M = I.children[I.children.length - 1];
        ((M.position.end = wn(C.end)), (this.data.atHardBreak = void 0));
        return;
      }
      !this.data.setextHeadingSlurpLineEnding &&
        t.canContainEols.includes(I.type) &&
        (O.call(this, C), D.call(this, C));
    }
    function Q() {
      this.data.atHardBreak = !0;
    }
    function B() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.value = C;
    }
    function j() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.value = C;
    }
    function U() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.value = C;
    }
    function le() {
      let C = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        let I = this.data.referenceType || "shortcut";
        ((C.type += "Reference"), (C.referenceType = I), delete C.url, delete C.title);
      } else (delete C.identifier, delete C.label);
      this.data.referenceType = void 0;
    }
    function me() {
      let C = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        let I = this.data.referenceType || "shortcut";
        ((C.type += "Reference"), (C.referenceType = I), delete C.url, delete C.title);
      } else (delete C.identifier, delete C.label);
      this.data.referenceType = void 0;
    }
    function st(C) {
      let I = this.sliceSerialize(C),
        M = this.stack[this.stack.length - 2];
      ((M.label = kg(I)), (M.identifier = Pe(I).toLowerCase()));
    }
    function vt() {
      let C = this.stack[this.stack.length - 1],
        I = this.resume(),
        M = this.stack[this.stack.length - 1];
      if (((this.data.inReference = !0), M.type === "link")) {
        let W = C.children;
        M.children = W;
      } else M.alt = I;
    }
    function k() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.url = C;
    }
    function Je() {
      let C = this.resume(),
        I = this.stack[this.stack.length - 1];
      I.title = C;
    }
    function It() {
      this.data.inReference = void 0;
    }
    function x() {
      this.data.referenceType = "collapsed";
    }
    function Ve(C) {
      let I = this.resume(),
        M = this.stack[this.stack.length - 1];
      ((M.label = I),
        (M.identifier = Pe(this.sliceSerialize(C)).toLowerCase()),
        (this.data.referenceType = "full"));
    }
    function Cn(C) {
      this.data.characterReferenceType = C.type;
    }
    function Fu(C) {
      let I = this.sliceSerialize(C),
        M = this.data.characterReferenceType,
        W;
      M
        ? ((W = $o(I, M === "characterReferenceMarkerNumeric" ? 10 : 16)),
          (this.data.characterReferenceType = void 0))
        : (W = Rr(I));
      let Y = this.stack[this.stack.length - 1];
      Y.value += W;
    }
    function fl(C) {
      let I = this.stack.pop();
      I.position.end = wn(C.end);
    }
    function ve(C) {
      D.call(this, C);
      let I = this.stack[this.stack.length - 1];
      I.url = this.sliceSerialize(C);
    }
    function Qr(C) {
      D.call(this, C);
      let I = this.stack[this.stack.length - 1];
      I.url = "mailto:" + this.sliceSerialize(C);
    }
    function Lt() {
      return { type: "blockquote", children: [] };
    }
    function Fn() {
      return { type: "code", lang: null, meta: null, value: "" };
    }
    function tr() {
      return { type: "inlineCode", value: "" };
    }
    function Su() {
      return { type: "definition", identifier: "", label: null, title: null, url: "" };
    }
    function P0() {
      return { type: "emphasis", children: [] };
    }
    function Rf() {
      return { type: "heading", depth: 0, children: [] };
    }
    function Nf() {
      return { type: "break" };
    }
    function Of() {
      return { type: "html", value: "" };
    }
    function I0() {
      return { type: "image", title: null, url: "", alt: null };
    }
    function Mf() {
      return { type: "link", title: null, url: "", children: [] };
    }
    function bf(C) {
      return {
        type: "list",
        ordered: C.type === "listOrdered",
        start: null,
        spread: C._spread,
        children: [],
      };
    }
    function L0(C) {
      return { type: "listItem", spread: C._spread, checked: null, children: [] };
    }
    function _0() {
      return { type: "paragraph", children: [] };
    }
    function z0() {
      return { type: "strong", children: [] };
    }
    function B0() {
      return { type: "text", value: "" };
    }
    function R0() {
      return { type: "thematicBreak" };
    }
  }
  function wn(e) {
    return { line: e.line, column: e.column, offset: e.offset };
  }
  function wg(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
      let r = t[n];
      Array.isArray(r) ? wg(e, r) : Ow(e, r);
    }
  }
  function Ow(e, t) {
    let n;
    for (n in t)
      if (vg.call(t, n))
        switch (n) {
          case "canContainEols": {
            let r = t[n];
            r && e[n].push(...r);
            break;
          }
          case "transforms": {
            let r = t[n];
            r && e[n].push(...r);
            break;
          }
          case "enter":
          case "exit": {
            let r = t[n];
            r && Object.assign(e[n], r);
            break;
          }
        }
  }
  function xg(e, t) {
    throw e
      ? new Error(
          "Cannot close `" +
            e.type +
            "` (" +
            kn({ start: e.start, end: e.end }) +
            "): a different token (`" +
            t.type +
            "`, " +
            kn({ start: t.start, end: t.end }) +
            ") is open",
        )
      : new Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            kn({ start: t.start, end: t.end }) +
            ") is still open",
        );
  }
  function nu(e) {
    let t = this;
    t.parser = n;
    function n(r) {
      return Fc(r, {
        ...t.data("settings"),
        ...e,
        extensions: t.data("micromarkExtensions") || [],
        mdastExtensions: t.data("fromMarkdownExtensions") || [],
      });
    }
  }
  function Dg(e, t) {
    let n = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: e.wrap(e.all(t), !0),
    };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function Eg(e, t) {
    let n = { type: "element", tagName: "br", properties: {}, children: [] };
    return (
      e.patch(t, n),
      [
        e.applyData(t, n),
        {
          type: "text",
          value: `
`,
        },
      ]
    );
  }
  function Cg(e, t) {
    let n = t.value
        ? t.value +
          `
`
        : "",
      r = {},
      i = t.lang ? t.lang.split(/\s+/) : [];
    i.length > 0 && (r.className = ["language-" + i[0]]);
    let l = {
      type: "element",
      tagName: "code",
      properties: r,
      children: [{ type: "text", value: n }],
    };
    return (
      t.meta && (l.data = { meta: t.meta }),
      e.patch(t, l),
      (l = e.applyData(t, l)),
      (l = { type: "element", tagName: "pre", properties: {}, children: [l] }),
      e.patch(t, l),
      l
    );
  }
  function Fg(e, t) {
    let n = { type: "element", tagName: "del", properties: {}, children: e.all(t) };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function Sg(e, t) {
    let n = { type: "element", tagName: "em", properties: {}, children: e.all(t) };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function Ag(e, t) {
    let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
      r = String(t.identifier).toUpperCase(),
      i = ut(r.toLowerCase()),
      l = e.footnoteOrder.indexOf(r),
      o,
      u = e.footnoteCounts.get(r);
    (u === void 0 ? ((u = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length)) : (o = l + 1),
      (u += 1),
      e.footnoteCounts.set(r, u));
    let a = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + n + "fn-" + i,
        id: n + "fnref-" + i + (u > 1 ? "-" + u : ""),
        dataFootnoteRef: !0,
        ariaDescribedBy: ["footnote-label"],
      },
      children: [{ type: "text", value: String(o) }],
    };
    e.patch(t, a);
    let s = { type: "element", tagName: "sup", properties: {}, children: [a] };
    return (e.patch(t, s), e.applyData(t, s));
  }
  function Tg(e, t) {
    let n = { type: "element", tagName: "h" + t.depth, properties: {}, children: e.all(t) };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function Pg(e, t) {
    if (e.options.allowDangerousHtml) {
      let n = { type: "raw", value: t.value };
      return (e.patch(t, n), e.applyData(t, n));
    }
  }
  function ru(e, t) {
    let n = t.referenceType,
      r = "]";
    if (
      (n === "collapsed"
        ? (r += "[]")
        : n === "full" && (r += "[" + (t.label || t.identifier) + "]"),
      t.type === "imageReference")
    )
      return [{ type: "text", value: "![" + t.alt + r }];
    let i = e.all(t),
      l = i[0];
    l && l.type === "text" ? (l.value = "[" + l.value) : i.unshift({ type: "text", value: "[" });
    let o = i[i.length - 1];
    return (o && o.type === "text" ? (o.value += r) : i.push({ type: "text", value: r }), i);
  }
  function Ig(e, t) {
    let n = String(t.identifier).toUpperCase(),
      r = e.definitionById.get(n);
    if (!r) return ru(e, t);
    let i = { src: ut(r.url || ""), alt: t.alt };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    let l = { type: "element", tagName: "img", properties: i, children: [] };
    return (e.patch(t, l), e.applyData(t, l));
  }
  function Lg(e, t) {
    let n = { src: ut(t.url) };
    (t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
      t.title !== null && t.title !== void 0 && (n.title = t.title));
    let r = { type: "element", tagName: "img", properties: n, children: [] };
    return (e.patch(t, r), e.applyData(t, r));
  }
  function _g(e, t) {
    let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
    e.patch(t, n);
    let r = { type: "element", tagName: "code", properties: {}, children: [n] };
    return (e.patch(t, r), e.applyData(t, r));
  }
  function zg(e, t) {
    let n = String(t.identifier).toUpperCase(),
      r = e.definitionById.get(n);
    if (!r) return ru(e, t);
    let i = { href: ut(r.url || "") };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    let l = { type: "element", tagName: "a", properties: i, children: e.all(t) };
    return (e.patch(t, l), e.applyData(t, l));
  }
  function Bg(e, t) {
    let n = { href: ut(t.url) };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    let r = { type: "element", tagName: "a", properties: n, children: e.all(t) };
    return (e.patch(t, r), e.applyData(t, r));
  }
  function Rg(e, t, n) {
    let r = e.all(t),
      i = n ? Mw(n) : Ng(t),
      l = {},
      o = [];
    if (typeof t.checked == "boolean") {
      let c = r[0],
        f;
      (c && c.type === "element" && c.tagName === "p"
        ? (f = c)
        : ((f = { type: "element", tagName: "p", properties: {}, children: [] }), r.unshift(f)),
        f.children.length > 0 && f.children.unshift({ type: "text", value: " " }),
        f.children.unshift({
          type: "element",
          tagName: "input",
          properties: { type: "checkbox", checked: t.checked, disabled: !0 },
          children: [],
        }),
        (l.className = ["task-list-item"]));
    }
    let u = -1;
    for (; ++u < r.length; ) {
      let c = r[u];
      ((i || u !== 0 || c.type !== "element" || c.tagName !== "p") &&
        o.push({
          type: "text",
          value: `
`,
        }),
        c.type === "element" && c.tagName === "p" && !i ? o.push(...c.children) : o.push(c));
    }
    let a = r[r.length - 1];
    a &&
      (i || a.type !== "element" || a.tagName !== "p") &&
      o.push({
        type: "text",
        value: `
`,
      });
    let s = { type: "element", tagName: "li", properties: l, children: o };
    return (e.patch(t, s), e.applyData(t, s));
  }
  function Mw(e) {
    let t = !1;
    if (e.type === "list") {
      t = e.spread || !1;
      let n = e.children,
        r = -1;
      for (; !t && ++r < n.length; ) t = Ng(n[r]);
    }
    return t;
  }
  function Ng(e) {
    let t = e.spread;
    return t ?? e.children.length > 1;
  }
  function Og(e, t) {
    let n = {},
      r = e.all(t),
      i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
      let o = r[i];
      if (
        o.type === "element" &&
        o.tagName === "li" &&
        o.properties &&
        Array.isArray(o.properties.className) &&
        o.properties.className.includes("task-list-item")
      ) {
        n.className = ["contains-task-list"];
        break;
      }
    }
    let l = {
      type: "element",
      tagName: t.ordered ? "ol" : "ul",
      properties: n,
      children: e.wrap(r, !0),
    };
    return (e.patch(t, l), e.applyData(t, l));
  }
  function Mg(e, t) {
    let n = { type: "element", tagName: "p", properties: {}, children: e.all(t) };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function bg(e, t) {
    let n = { type: "root", children: e.wrap(e.all(t)) };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function jg(e, t) {
    let n = { type: "element", tagName: "strong", properties: {}, children: e.all(t) };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function Ug(e, t) {
    let n = e.all(t),
      r = n.shift(),
      i = [];
    if (r) {
      let o = { type: "element", tagName: "thead", properties: {}, children: e.wrap([r], !0) };
      (e.patch(t.children[0], o), i.push(o));
    }
    if (n.length > 0) {
      let o = { type: "element", tagName: "tbody", properties: {}, children: e.wrap(n, !0) },
        u = Br(t.children[1]),
        a = Ho(t.children[t.children.length - 1]);
      (u && a && (o.position = { start: u, end: a }), i.push(o));
    }
    let l = { type: "element", tagName: "table", properties: {}, children: e.wrap(i, !0) };
    return (e.patch(t, l), e.applyData(t, l));
  }
  function Hg(e, t, n) {
    let r = n ? n.children : void 0,
      l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
      o = n && n.type === "table" ? n.align : void 0,
      u = o ? o.length : t.children.length,
      a = -1,
      s = [];
    for (; ++a < u; ) {
      let f = t.children[a],
        p = {},
        m = o ? o[a] : void 0;
      m && (p.align = m);
      let g = { type: "element", tagName: l, properties: p, children: [] };
      (f && ((g.children = e.all(f)), e.patch(f, g), (g = e.applyData(f, g))), s.push(g));
    }
    let c = { type: "element", tagName: "tr", properties: {}, children: e.wrap(s, !0) };
    return (e.patch(t, c), e.applyData(t, c));
  }
  function Vg(e, t) {
    let n = { type: "element", tagName: "td", properties: {}, children: e.all(t) };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function $g(e) {
    let t = String(e),
      n = /\r?\n|\r/g,
      r = n.exec(t),
      i = 0,
      l = [];
    for (; r; )
      (l.push(Wg(t.slice(i, r.index), i > 0, !0), r[0]),
        (i = r.index + r[0].length),
        (r = n.exec(t)));
    return (l.push(Wg(t.slice(i), i > 0, !1)), l.join(""));
  }
  function Wg(e, t, n) {
    let r = 0,
      i = e.length;
    if (t) {
      let l = e.codePointAt(r);
      for (; l === 9 || l === 32; ) (r++, (l = e.codePointAt(r)));
    }
    if (n) {
      let l = e.codePointAt(i - 1);
      for (; l === 9 || l === 32; ) (i--, (l = e.codePointAt(i - 1)));
    }
    return i > r ? e.slice(r, i) : "";
  }
  function Qg(e, t) {
    let n = { type: "text", value: $g(String(t.value)) };
    return (e.patch(t, n), e.applyData(t, n));
  }
  function qg(e, t) {
    let n = { type: "element", tagName: "hr", properties: {}, children: [] };
    return (e.patch(t, n), e.applyData(t, n));
  }
  var Kg = {
    blockquote: Dg,
    break: Eg,
    code: Cg,
    delete: Fg,
    emphasis: Sg,
    footnoteReference: Ag,
    heading: Tg,
    html: Pg,
    imageReference: Ig,
    image: Lg,
    inlineCode: _g,
    linkReference: zg,
    link: Bg,
    listItem: Rg,
    list: Og,
    paragraph: Mg,
    root: bg,
    strong: jg,
    table: Ug,
    tableCell: Vg,
    tableRow: Hg,
    text: Qg,
    thematicBreak: qg,
    toml: iu,
    yaml: iu,
    definition: iu,
    footnoteDefinition: iu,
  };
  function iu() {}
  var Xg = typeof self == "object" ? self : globalThis,
    Hw = (e, t) => {
      let n = (i, l) => (e.set(l, i), i),
        r = (i) => {
          if (e.has(i)) return e.get(i);
          let [l, o] = t[i];
          switch (l) {
            case 0:
            case -1:
              return n(o, i);
            case 1: {
              let u = n([], i);
              for (let a of o) u.push(r(a));
              return u;
            }
            case 2: {
              let u = n({}, i);
              for (let [a, s] of o) u[r(a)] = r(s);
              return u;
            }
            case 3:
              return n(new Date(o), i);
            case 4: {
              let { source: u, flags: a } = o;
              return n(new RegExp(u, a), i);
            }
            case 5: {
              let u = n(new Map(), i);
              for (let [a, s] of o) u.set(r(a), r(s));
              return u;
            }
            case 6: {
              let u = n(new Set(), i);
              for (let a of o) u.add(r(a));
              return u;
            }
            case 7: {
              let { name: u, message: a } = o;
              return n(new Xg[u](a), i);
            }
            case 8:
              return n(BigInt(o), i);
            case "BigInt":
              return n(Object(BigInt(o)), i);
            case "ArrayBuffer":
              return n(new Uint8Array(o).buffer, o);
            case "DataView": {
              let { buffer: u } = new Uint8Array(o);
              return n(new DataView(u), o);
            }
          }
          return n(new Xg[l](o), i);
        };
      return r;
    },
    Tc = (e) => Hw(new Map(), e)(0);
  var Nr = "",
    { toString: Vw } = {},
    { keys: Ww } = Object,
    Ji = (e) => {
      let t = typeof e;
      if (t !== "object" || !e) return [0, t];
      let n = Vw.call(e).slice(8, -1);
      switch (n) {
        case "Array":
          return [1, Nr];
        case "Object":
          return [2, Nr];
        case "Date":
          return [3, Nr];
        case "RegExp":
          return [4, Nr];
        case "Map":
          return [5, Nr];
        case "Set":
          return [6, Nr];
        case "DataView":
          return [1, n];
      }
      return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
    },
    ou = ([e, t]) => e === 0 && (t === "function" || t === "symbol"),
    $w = (e, t, n, r) => {
      let i = (o, u) => {
          let a = r.push(o) - 1;
          return (n.set(u, a), a);
        },
        l = (o) => {
          if (n.has(o)) return n.get(o);
          let [u, a] = Ji(o);
          switch (u) {
            case 0: {
              let c = o;
              switch (a) {
                case "bigint":
                  ((u = 8), (c = o.toString()));
                  break;
                case "function":
                case "symbol":
                  if (e) throw new TypeError("unable to serialize " + a);
                  c = null;
                  break;
                case "undefined":
                  return i([-1], o);
              }
              return i([u, c], o);
            }
            case 1: {
              if (a) {
                let p = o;
                return (
                  a === "DataView"
                    ? (p = new Uint8Array(o.buffer))
                    : a === "ArrayBuffer" && (p = new Uint8Array(o)),
                  i([a, [...p]], o)
                );
              }
              let c = [],
                f = i([u, c], o);
              for (let p of o) c.push(l(p));
              return f;
            }
            case 2: {
              if (a)
                switch (a) {
                  case "BigInt":
                    return i([a, o.toString()], o);
                  case "Boolean":
                  case "Number":
                  case "String":
                    return i([a, o.valueOf()], o);
                }
              if (t && "toJSON" in o) return l(o.toJSON());
              let c = [],
                f = i([u, c], o);
              for (let p of Ww(o)) (e || !ou(Ji(o[p]))) && c.push([l(p), l(o[p])]);
              return f;
            }
            case 3:
              return i([u, o.toISOString()], o);
            case 4: {
              let { source: c, flags: f } = o;
              return i([u, { source: c, flags: f }], o);
            }
            case 5: {
              let c = [],
                f = i([u, c], o);
              for (let [p, m] of o) (e || !(ou(Ji(p)) || ou(Ji(m)))) && c.push([l(p), l(m)]);
              return f;
            }
            case 6: {
              let c = [],
                f = i([u, c], o);
              for (let p of o) (e || !ou(Ji(p))) && c.push(l(p));
              return f;
            }
          }
          let { message: s } = o;
          return i([u, { name: a, message: s }], o);
        };
      return l;
    },
    Pc = (e, { json: t, lossy: n } = {}) => {
      let r = [];
      return ($w(!(t || n), !!t, new Map(), r)(e), r);
    };
  var Or =
    typeof structuredClone == "function"
      ? (e, t) => (t && ("json" in t || "lossy" in t) ? Tc(Pc(e, t)) : structuredClone(e))
      : (e, t) => Tc(Pc(e, t));
  function Qw(e, t) {
    let n = [{ type: "text", value: "\u21A9" }];
    return (
      t > 1 &&
        n.push({
          type: "element",
          tagName: "sup",
          properties: {},
          children: [{ type: "text", value: String(t) }],
        }),
      n
    );
  }
  function qw(e, t) {
    return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
  }
  function ey(e) {
    let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
      n = e.options.footnoteBackContent || Qw,
      r = e.options.footnoteBackLabel || qw,
      i = e.options.footnoteLabel || "Footnotes",
      l = e.options.footnoteLabelTagName || "h2",
      o = e.options.footnoteLabelProperties || { className: ["sr-only"] },
      u = [],
      a = -1;
    for (; ++a < e.footnoteOrder.length; ) {
      let s = e.footnoteById.get(e.footnoteOrder[a]);
      if (!s) continue;
      let c = e.all(s),
        f = String(s.identifier).toUpperCase(),
        p = ut(f.toLowerCase()),
        m = 0,
        g = [],
        v = e.footnoteCounts.get(f);
      for (; v !== void 0 && ++m <= v; ) {
        g.length > 0 && g.push({ type: "text", value: " " });
        let h = typeof n == "string" ? n : n(a, m);
        (typeof h == "string" && (h = { type: "text", value: h }),
          g.push({
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + t + "fnref-" + p + (m > 1 ? "-" + m : ""),
              dataFootnoteBackref: "",
              ariaLabel: typeof r == "string" ? r : r(a, m),
              className: ["data-footnote-backref"],
            },
            children: Array.isArray(h) ? h : [h],
          }));
      }
      let F = c[c.length - 1];
      if (F && F.type === "element" && F.tagName === "p") {
        let h = F.children[F.children.length - 1];
        (h && h.type === "text" ? (h.value += " ") : F.children.push({ type: "text", value: " " }),
          F.children.push(...g));
      } else c.push(...g);
      let d = {
        type: "element",
        tagName: "li",
        properties: { id: t + "fn-" + p },
        children: e.wrap(c, !0),
      };
      (e.patch(s, d), u.push(d));
    }
    if (u.length !== 0)
      return {
        type: "element",
        tagName: "section",
        properties: { dataFootnotes: !0, className: ["footnotes"] },
        children: [
          {
            type: "element",
            tagName: l,
            properties: { ...Or(o), id: "footnote-label" },
            children: [{ type: "text", value: i }],
          },
          {
            type: "text",
            value: `
`,
          },
          { type: "element", tagName: "ol", properties: {}, children: e.wrap(u, !0) },
          {
            type: "text",
            value: `
`,
          },
        ],
      };
  }
  var Dn = function (e) {
    if (e == null) return Gw;
    if (typeof e == "function") return uu(e);
    if (typeof e == "object") return Array.isArray(e) ? Kw(e) : Xw(e);
    if (typeof e == "string") return Yw(e);
    throw new Error("Expected function, string, or object as test");
  };
  function Kw(e) {
    let t = [],
      n = -1;
    for (; ++n < e.length; ) t[n] = Dn(e[n]);
    return uu(r);
    function r(...i) {
      let l = -1;
      for (; ++l < t.length; ) if (t[l].apply(this, i)) return !0;
      return !1;
    }
  }
  function Xw(e) {
    let t = e;
    return uu(n);
    function n(r) {
      let i = r,
        l;
      for (l in e) if (i[l] !== t[l]) return !1;
      return !0;
    }
  }
  function Yw(e) {
    return uu(t);
    function t(n) {
      return n && n.type === e;
    }
  }
  function uu(e) {
    return t;
    function t(n, r, i) {
      return !!(Jw(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0));
    }
  }
  function Gw() {
    return !0;
  }
  function Jw(e) {
    return e !== null && typeof e == "object" && "type" in e;
  }
  var ty = [],
    au = !0,
    Jn = !1,
    su = "skip";
  function Zi(e, t, n, r) {
    let i;
    typeof t == "function" && typeof n != "function" ? ((r = n), (n = t)) : (i = t);
    let l = Dn(i),
      o = r ? -1 : 1;
    u(e, void 0, [])();
    function u(a, s, c) {
      let f = a && typeof a == "object" ? a : {};
      if (typeof f.type == "string") {
        let m =
          typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : void 0;
        Object.defineProperty(p, "name", {
          value: "node (" + (a.type + (m ? "<" + m + ">" : "")) + ")",
        });
      }
      return p;
      function p() {
        let m = ty,
          g,
          v,
          F;
        if ((!t || l(a, s, c[c.length - 1] || void 0)) && ((m = Zw(n(a, c))), m[0] === Jn))
          return m;
        if ("children" in a && a.children) {
          let d = a;
          if (d.children && m[0] !== su)
            for (
              v = (r ? d.children.length : -1) + o, F = c.concat(d);
              v > -1 && v < d.children.length;
            ) {
              let h = d.children[v];
              if (((g = u(h, v, F)()), g[0] === Jn)) return g;
              v = typeof g[1] == "number" ? g[1] : v + o;
            }
        }
        return m;
      }
    }
  }
  function Zw(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [au, e] : e == null ? ty : [e];
  }
  function Qt(e, t, n, r) {
    let i, l, o;
    (typeof t == "function" && typeof n != "function"
      ? ((l = void 0), (o = t), (i = n))
      : ((l = t), (o = n), (i = r)),
      Zi(e, l, u, i));
    function u(a, s) {
      let c = s[s.length - 1],
        f = c ? c.children.indexOf(a) : void 0;
      return o(a, f, c);
    }
  }
  var Ic = {}.hasOwnProperty,
    eD = {};
  function ry(e, t) {
    let n = t || eD,
      r = new Map(),
      i = new Map(),
      l = new Map(),
      o = { ...Kg, ...n.handlers },
      u = {
        all: s,
        applyData: nD,
        definitionById: r,
        footnoteById: i,
        footnoteCounts: l,
        footnoteOrder: [],
        handlers: o,
        one: a,
        options: n,
        patch: tD,
        wrap: iD,
      };
    return (
      Qt(e, function (c) {
        if (c.type === "definition" || c.type === "footnoteDefinition") {
          let f = c.type === "definition" ? r : i,
            p = String(c.identifier).toUpperCase();
          f.has(p) || f.set(p, c);
        }
      }),
      u
    );
    function a(c, f) {
      let p = c.type,
        m = u.handlers[p];
      if (Ic.call(u.handlers, p) && m) return m(u, c, f);
      if (u.options.passThrough && u.options.passThrough.includes(p)) {
        if ("children" in c) {
          let { children: v, ...F } = c,
            d = Or(F);
          return ((d.children = u.all(c)), d);
        }
        return Or(c);
      }
      return (u.options.unknownHandler || rD)(u, c, f);
    }
    function s(c) {
      let f = [];
      if ("children" in c) {
        let p = c.children,
          m = -1;
        for (; ++m < p.length; ) {
          let g = u.one(p[m], c);
          if (g) {
            if (
              m &&
              p[m - 1].type === "break" &&
              (!Array.isArray(g) && g.type === "text" && (g.value = ny(g.value)),
              !Array.isArray(g) && g.type === "element")
            ) {
              let v = g.children[0];
              v && v.type === "text" && (v.value = ny(v.value));
            }
            Array.isArray(g) ? f.push(...g) : f.push(g);
          }
        }
      }
      return f;
    }
  }
  function tD(e, t) {
    e.position && (t.position = ic(e));
  }
  function nD(e, t) {
    let n = t;
    if (e && e.data) {
      let r = e.data.hName,
        i = e.data.hChildren,
        l = e.data.hProperties;
      if (typeof r == "string")
        if (n.type === "element") n.tagName = r;
        else {
          let o = "children" in n ? n.children : [n];
          n = { type: "element", tagName: r, properties: {}, children: o };
        }
      (n.type === "element" && l && Object.assign(n.properties, Or(l)),
        "children" in n && n.children && i !== null && i !== void 0 && (n.children = i));
    }
    return n;
  }
  function rD(e, t) {
    let n = t.data || {},
      r =
        "value" in t && !(Ic.call(n, "hProperties") || Ic.call(n, "hChildren"))
          ? { type: "text", value: t.value }
          : { type: "element", tagName: "div", properties: {}, children: e.all(t) };
    return (e.patch(t, r), e.applyData(t, r));
  }
  function iD(e, t) {
    let n = [],
      r = -1;
    for (
      t &&
      n.push({
        type: "text",
        value: `
`,
      });
      ++r < e.length;
    )
      (r &&
        n.push({
          type: "text",
          value: `
`,
        }),
        n.push(e[r]));
    return (
      t &&
        e.length > 0 &&
        n.push({
          type: "text",
          value: `
`,
        }),
      n
    );
  }
  function ny(e) {
    let t = 0,
      n = e.charCodeAt(t);
    for (; n === 9 || n === 32; ) (t++, (n = e.charCodeAt(t)));
    return e.slice(t);
  }
  function cu(e, t) {
    let n = ry(e, t),
      r = n.one(e, void 0),
      i = ey(n),
      l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
    return (
      i &&
        ("children" in l,
        l.children.push(
          {
            type: "text",
            value: `
`,
          },
          i,
        )),
      l
    );
  }
  function fu(e, t) {
    return e && "run" in e
      ? async function (n, r) {
          let i = cu(n, { file: r, ...t });
          await e.run(i, r);
        }
      : function (n, r) {
          return cu(n, { file: r, ...(e || t) });
        };
  }
  function Lc(e) {
    if (e) throw e;
  }
  var du = rr(py(), 1);
  function el(e) {
    if (typeof e != "object" || e === null) return !1;
    let t = Object.getPrototypeOf(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  }
  function _c() {
    let e = [],
      t = { run: n, use: r };
    return t;
    function n(...i) {
      let l = -1,
        o = i.pop();
      if (typeof o != "function")
        throw new TypeError("Expected function as last argument, not " + o);
      u(null, ...i);
      function u(a, ...s) {
        let c = e[++l],
          f = -1;
        if (a) {
          o(a);
          return;
        }
        for (; ++f < i.length; ) (s[f] === null || s[f] === void 0) && (s[f] = i[f]);
        ((i = s), c ? my(c, u)(...s) : o(null, ...s));
      }
    }
    function r(i) {
      if (typeof i != "function")
        throw new TypeError("Expected `middelware` to be a function, not " + i);
      return (e.push(i), t);
    }
  }
  function my(e, t) {
    let n;
    return r;
    function r(...o) {
      let u = e.length > o.length,
        a;
      u && o.push(i);
      try {
        a = e.apply(this, o);
      } catch (s) {
        let c = s;
        if (u && n) throw c;
        return i(c);
      }
      u ||
        (a && a.then && typeof a.then == "function"
          ? a.then(l, i)
          : a instanceof Error
            ? i(a)
            : l(a));
    }
    function i(o, ...u) {
      n || ((n = !0), t(o, ...u));
    }
    function l(o) {
      i(null, o);
    }
  }
  var xt = { basename: lD, dirname: oD, extname: uD, join: aD, sep: "/" };
  function lD(e, t) {
    if (t !== void 0 && typeof t != "string")
      throw new TypeError('"ext" argument must be a string');
    tl(e);
    let n = 0,
      r = -1,
      i = e.length,
      l;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
      for (; i--; )
        if (e.codePointAt(i) === 47) {
          if (l) {
            n = i + 1;
            break;
          }
        } else r < 0 && ((l = !0), (r = i + 1));
      return r < 0 ? "" : e.slice(n, r);
    }
    if (t === e) return "";
    let o = -1,
      u = t.length - 1;
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          n = i + 1;
          break;
        }
      } else
        (o < 0 && ((l = !0), (o = i + 1)),
          u > -1 &&
            (e.codePointAt(i) === t.codePointAt(u--) ? u < 0 && (r = i) : ((u = -1), (r = o))));
    return (n === r ? (r = o) : r < 0 && (r = e.length), e.slice(n, r));
  }
  function oD(e) {
    if ((tl(e), e.length === 0)) return ".";
    let t = -1,
      n = e.length,
      r;
    for (; --n; )
      if (e.codePointAt(n) === 47) {
        if (r) {
          t = n;
          break;
        }
      } else r || (r = !0);
    return t < 0
      ? e.codePointAt(0) === 47
        ? "/"
        : "."
      : t === 1 && e.codePointAt(0) === 47
        ? "//"
        : e.slice(0, t);
  }
  function uD(e) {
    tl(e);
    let t = e.length,
      n = -1,
      r = 0,
      i = -1,
      l = 0,
      o;
    for (; t--; ) {
      let u = e.codePointAt(t);
      if (u === 47) {
        if (o) {
          r = t + 1;
          break;
        }
        continue;
      }
      (n < 0 && ((o = !0), (n = t + 1)),
        u === 46 ? (i < 0 ? (i = t) : l !== 1 && (l = 1)) : i > -1 && (l = -1));
    }
    return i < 0 || n < 0 || l === 0 || (l === 1 && i === n - 1 && i === r + 1)
      ? ""
      : e.slice(i, n);
  }
  function aD(...e) {
    let t = -1,
      n;
    for (; ++t < e.length; ) (tl(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]));
    return n === void 0 ? "." : sD(n);
  }
  function sD(e) {
    tl(e);
    let t = e.codePointAt(0) === 47,
      n = cD(e, !t);
    return (
      n.length === 0 && !t && (n = "."),
      n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"),
      t ? "/" + n : n
    );
  }
  function cD(e, t) {
    let n = "",
      r = 0,
      i = -1,
      l = 0,
      o = -1,
      u,
      a;
    for (; ++o <= e.length; ) {
      if (o < e.length) u = e.codePointAt(o);
      else {
        if (u === 47) break;
        u = 47;
      }
      if (u === 47) {
        if (!(i === o - 1 || l === 1))
          if (i !== o - 1 && l === 2) {
            if (
              n.length < 2 ||
              r !== 2 ||
              n.codePointAt(n.length - 1) !== 46 ||
              n.codePointAt(n.length - 2) !== 46
            ) {
              if (n.length > 2) {
                if (((a = n.lastIndexOf("/")), a !== n.length - 1)) {
                  (a < 0
                    ? ((n = ""), (r = 0))
                    : ((n = n.slice(0, a)), (r = n.length - 1 - n.lastIndexOf("/"))),
                    (i = o),
                    (l = 0));
                  continue;
                }
              } else if (n.length > 0) {
                ((n = ""), (r = 0), (i = o), (l = 0));
                continue;
              }
            }
            t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
          } else
            (n.length > 0 ? (n += "/" + e.slice(i + 1, o)) : (n = e.slice(i + 1, o)),
              (r = o - i - 1));
        ((i = o), (l = 0));
      } else u === 46 && l > -1 ? l++ : (l = -1);
    }
    return n;
  }
  function tl(e) {
    if (typeof e != "string")
      throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
  var dy = { cwd: fD };
  function fD() {
    return "/";
  }
  function Mr(e) {
    return !!(
      e !== null &&
      typeof e == "object" &&
      "href" in e &&
      e.href &&
      "protocol" in e &&
      e.protocol &&
      e.auth === void 0
    );
  }
  function hy(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!Mr(e)) {
      let t = new TypeError(
        'The "path" argument must be of type string or an instance of URL. Received `' + e + "`",
      );
      throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
    }
    if (e.protocol !== "file:") {
      let t = new TypeError("The URL must be of scheme file");
      throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
    }
    return pD(e);
  }
  function pD(e) {
    if (e.hostname !== "") {
      let r = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
    }
    let t = e.pathname,
      n = -1;
    for (; ++n < t.length; )
      if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
        let r = t.codePointAt(n + 2);
        if (r === 70 || r === 102) {
          let i = new TypeError("File URL path must not include encoded / characters");
          throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
        }
      }
    return decodeURIComponent(t);
  }
  var zc = ["history", "path", "basename", "stem", "extname", "dirname"],
    Zn = class {
      constructor(t) {
        let n;
        (t
          ? Mr(t)
            ? (n = { path: t })
            : typeof t == "string" || mD(t)
              ? (n = { value: t })
              : (n = t)
          : (n = {}),
          (this.cwd = "cwd" in n ? "" : dy.cwd()),
          (this.data = {}),
          (this.history = []),
          (this.messages = []),
          this.value,
          this.map,
          this.result,
          this.stored);
        let r = -1;
        for (; ++r < zc.length; ) {
          let l = zc[r];
          l in n &&
            n[l] !== void 0 &&
            n[l] !== null &&
            (this[l] = l === "history" ? [...n[l]] : n[l]);
        }
        let i;
        for (i in n) zc.includes(i) || (this[i] = n[i]);
      }
      get basename() {
        return typeof this.path == "string" ? xt.basename(this.path) : void 0;
      }
      set basename(t) {
        (Rc(t, "basename"), Bc(t, "basename"), (this.path = xt.join(this.dirname || "", t)));
      }
      get dirname() {
        return typeof this.path == "string" ? xt.dirname(this.path) : void 0;
      }
      set dirname(t) {
        (gy(this.basename, "dirname"), (this.path = xt.join(t || "", this.basename)));
      }
      get extname() {
        return typeof this.path == "string" ? xt.extname(this.path) : void 0;
      }
      set extname(t) {
        if ((Bc(t, "extname"), gy(this.dirname, "extname"), t)) {
          if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
          if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = xt.join(this.dirname, this.stem + (t || ""));
      }
      get path() {
        return this.history[this.history.length - 1];
      }
      set path(t) {
        (Mr(t) && (t = hy(t)), Rc(t, "path"), this.path !== t && this.history.push(t));
      }
      get stem() {
        return typeof this.path == "string" ? xt.basename(this.path, this.extname) : void 0;
      }
      set stem(t) {
        (Rc(t, "stem"),
          Bc(t, "stem"),
          (this.path = xt.join(this.dirname || "", t + (this.extname || ""))));
      }
      fail(t, n, r) {
        let i = this.message(t, n, r);
        throw ((i.fatal = !0), i);
      }
      info(t, n, r) {
        let i = this.message(t, n, r);
        return ((i.fatal = void 0), i);
      }
      message(t, n, r) {
        let i = new ce(t, n, r);
        return (
          this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
          (i.fatal = !1),
          this.messages.push(i),
          i
        );
      }
      toString(t) {
        return this.value === void 0
          ? ""
          : typeof this.value == "string"
            ? this.value
            : new TextDecoder(t || void 0).decode(this.value);
      }
    };
  function Bc(e, t) {
    if (e && e.includes(xt.sep))
      throw new Error("`" + t + "` cannot be a path: did not expect `" + xt.sep + "`");
  }
  function Rc(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty");
  }
  function gy(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
  }
  function mD(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  var yy = function (e) {
    let r = this.constructor.prototype,
      i = r[e],
      l = function () {
        return i.apply(l, arguments);
      };
    return (Object.setPrototypeOf(l, r), l);
  };
  var dD = {}.hasOwnProperty,
    bc = class e extends yy {
      constructor() {
        (super("copy"),
          (this.Compiler = void 0),
          (this.Parser = void 0),
          (this.attachers = []),
          (this.compiler = void 0),
          (this.freezeIndex = -1),
          (this.frozen = void 0),
          (this.namespace = {}),
          (this.parser = void 0),
          (this.transformers = _c()));
      }
      copy() {
        let t = new e(),
          n = -1;
        for (; ++n < this.attachers.length; ) {
          let r = this.attachers[n];
          t.use(...r);
        }
        return (t.data((0, du.default)(!0, {}, this.namespace)), t);
      }
      data(t, n) {
        return typeof t == "string"
          ? arguments.length === 2
            ? (Mc("data", this.frozen), (this.namespace[t] = n), this)
            : (dD.call(this.namespace, t) && this.namespace[t]) || void 0
          : t
            ? (Mc("data", this.frozen), (this.namespace = t), this)
            : this.namespace;
      }
      freeze() {
        if (this.frozen) return this;
        let t = this;
        for (; ++this.freezeIndex < this.attachers.length; ) {
          let [n, ...r] = this.attachers[this.freezeIndex];
          if (r[0] === !1) continue;
          r[0] === !0 && (r[0] = void 0);
          let i = n.call(t, ...r);
          typeof i == "function" && this.transformers.use(i);
        }
        return ((this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this);
      }
      parse(t) {
        this.freeze();
        let n = mu(t),
          r = this.parser || this.Parser;
        return (Nc("parse", r), r(String(n), n));
      }
      process(t, n) {
        let r = this;
        return (
          this.freeze(),
          Nc("process", this.parser || this.Parser),
          Oc("process", this.compiler || this.Compiler),
          n ? i(void 0, n) : new Promise(i)
        );
        function i(l, o) {
          let u = mu(t),
            a = r.parse(u);
          r.run(a, u, function (c, f, p) {
            if (c || !f || !p) return s(c);
            let m = f,
              g = r.stringify(m, p);
            (gD(g) ? (p.value = g) : (p.result = g), s(c, p));
          });
          function s(c, f) {
            c || !f ? o(c) : l ? l(f) : n(void 0, f);
          }
        }
      }
      processSync(t) {
        let n = !1,
          r;
        return (
          this.freeze(),
          Nc("processSync", this.parser || this.Parser),
          Oc("processSync", this.compiler || this.Compiler),
          this.process(t, i),
          xy("processSync", "process", n),
          r
        );
        function i(l, o) {
          ((n = !0), Lc(l), (r = o));
        }
      }
      run(t, n, r) {
        (ky(t), this.freeze());
        let i = this.transformers;
        return (
          !r && typeof n == "function" && ((r = n), (n = void 0)), r ? l(void 0, r) : new Promise(l)
        );
        function l(o, u) {
          let a = mu(n);
          i.run(t, a, s);
          function s(c, f, p) {
            let m = f || t;
            c ? u(c) : o ? o(m) : r(void 0, m, p);
          }
        }
      }
      runSync(t, n) {
        let r = !1,
          i;
        return (this.run(t, n, l), xy("runSync", "run", r), i);
        function l(o, u) {
          (Lc(o), (i = u), (r = !0));
        }
      }
      stringify(t, n) {
        this.freeze();
        let r = mu(n),
          i = this.compiler || this.Compiler;
        return (Oc("stringify", i), ky(t), i(t, r));
      }
      use(t, ...n) {
        let r = this.attachers,
          i = this.namespace;
        if ((Mc("use", this.frozen), t != null))
          if (typeof t == "function") a(t, n);
          else if (typeof t == "object") Array.isArray(t) ? u(t) : o(t);
          else throw new TypeError("Expected usable value, not `" + t + "`");
        return this;
        function l(s) {
          if (typeof s == "function") a(s, []);
          else if (typeof s == "object")
            if (Array.isArray(s)) {
              let [c, ...f] = s;
              a(c, f);
            } else o(s);
          else throw new TypeError("Expected usable value, not `" + s + "`");
        }
        function o(s) {
          if (!("plugins" in s) && !("settings" in s))
            throw new Error(
              "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
            );
          (u(s.plugins), s.settings && (i.settings = (0, du.default)(!0, i.settings, s.settings)));
        }
        function u(s) {
          let c = -1;
          if (s != null)
            if (Array.isArray(s))
              for (; ++c < s.length; ) {
                let f = s[c];
                l(f);
              }
            else throw new TypeError("Expected a list of plugins, not `" + s + "`");
        }
        function a(s, c) {
          let f = -1,
            p = -1;
          for (; ++f < r.length; )
            if (r[f][0] === s) {
              p = f;
              break;
            }
          if (p === -1) r.push([s, ...c]);
          else if (c.length > 0) {
            let [m, ...g] = c,
              v = r[p][1];
            (el(v) && el(m) && (m = (0, du.default)(!0, v, m)), (r[p] = [s, m, ...g]));
          }
        }
      }
    },
    jc = new bc().freeze();
  function Nc(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`");
  }
  function Oc(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`");
  }
  function Mc(e, t) {
    if (t)
      throw new Error(
        "Cannot call `" +
          e +
          "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
      );
  }
  function ky(e) {
    if (!el(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
  }
  function xy(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
  }
  function mu(e) {
    return hD(e) ? e : new Zn(e);
  }
  function hD(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e);
  }
  function gD(e) {
    return typeof e == "string" || yD(e);
  }
  function yD(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  var kD = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    vy = [],
    wy = { allowDangerousHtml: !0 },
    xD = /^(https?|ircs?|mailto|xmpp)$/i,
    vD = [
      { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
      { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
      {
        from: "allowNode",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowElement",
      },
      {
        from: "allowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowedElements",
      },
      { from: "className", id: "remove-classname" },
      {
        from: "disallowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "disallowedElements",
      },
      { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
      { from: "includeElementIndex", id: "#remove-includeelementindex" },
      { from: "includeNodeIndex", id: "change-includenodeindex-to-includeelementindex" },
      { from: "linkTarget", id: "remove-linktarget" },
      { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
      { from: "rawSourcePos", id: "#remove-rawsourcepos" },
      { from: "renderers", id: "change-renderers-to-components", to: "components" },
      { from: "source", id: "change-source-to-children", to: "children" },
      { from: "sourcePos", id: "#remove-sourcepos" },
      { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
      { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
    ];
  function Uc(e) {
    let t = wD(e),
      n = DD(e);
    return ED(t.runSync(t.parse(n), n), e);
  }
  function wD(e) {
    let t = e.rehypePlugins || vy,
      n = e.remarkPlugins || vy,
      r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...wy } : wy;
    return jc().use(nu).use(n).use(fu, r).use(t);
  }
  function DD(e) {
    let t = e.children || "",
      n = new Zn();
    return (typeof t == "string" ? (n.value = t) : ("" + t, void 0), n);
  }
  function ED(e, t) {
    let n = t.allowedElements,
      r = t.allowElement,
      i = t.components,
      l = t.disallowedElements,
      o = t.skipHtml,
      u = t.unwrapDisallowed,
      a = t.urlTransform || Ey;
    for (let c of vD)
      Object.hasOwn(t, c.from) &&
        ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + kD + c.id, void 0);
    return (
      n && l && void 0,
      Qt(e, s),
      uc(e, {
        Fragment: br.Fragment,
        components: i,
        ignoreInvalidStyle: !0,
        jsx: br.jsx,
        jsxs: br.jsxs,
        passKeys: !0,
        passNode: !0,
      })
    );
    function s(c, f, p) {
      if (c.type === "raw" && p && typeof f == "number")
        return (
          o ? p.children.splice(f, 1) : (p.children[f] = { type: "text", value: c.value }), f
        );
      if (c.type === "element") {
        let m;
        for (m in Qi)
          if (Object.hasOwn(Qi, m) && Object.hasOwn(c.properties, m)) {
            let g = c.properties[m],
              v = Qi[m];
            (v === null || v.includes(c.tagName)) && (c.properties[m] = a(String(g || ""), m, c));
          }
      }
      if (c.type === "element") {
        let m = n ? !n.includes(c.tagName) : l ? l.includes(c.tagName) : !1;
        if ((!m && r && typeof f == "number" && (m = !r(c, f, p)), m && p && typeof f == "number"))
          return (
            u && c.children ? p.children.splice(f, 1, ...c.children) : p.children.splice(f, 1), f
          );
      }
    }
  }
  function Ey(e) {
    let t = e.indexOf(":"),
      n = e.indexOf("?"),
      r = e.indexOf("#"),
      i = e.indexOf("/");
    return t === -1 ||
      (i !== -1 && t > i) ||
      (n !== -1 && t > n) ||
      (r !== -1 && t > r) ||
      xD.test(e.slice(0, t))
      ? e
      : "";
  }
  var Cy =
    /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;
  var CD = Object.hasOwnProperty,
    nl = class {
      constructor() {
        (this.occurrences, this.reset());
      }
      slug(t, n) {
        let r = this,
          i = FD(t, n === !0),
          l = i;
        for (; CD.call(r.occurrences, i); ) (r.occurrences[l]++, (i = l + "-" + r.occurrences[l]));
        return ((r.occurrences[i] = 0), i);
      }
      reset() {
        this.occurrences = Object.create(null);
      }
    };
  function FD(e, t) {
    return typeof e != "string"
      ? ""
      : (t || (e = e.toLowerCase()), e.replace(Cy, "").replace(/ /g, "-"));
  }
  function Hc(e) {
    let t = e.type === "element" ? e.tagName.toLowerCase() : "",
      n = t.length === 2 && t.charCodeAt(0) === 104 ? t.charCodeAt(1) : 0;
    return n > 48 && n < 55 ? n - 48 : void 0;
  }
  function Vc(e) {
    return "children" in e ? Fy(e) : "value" in e ? e.value : "";
  }
  function SD(e) {
    return e.type === "text" ? e.value : "children" in e ? Fy(e) : "";
  }
  function Fy(e) {
    let t = -1,
      n = [];
    for (; ++t < e.children.length; ) n[t] = SD(e.children[t]);
    return n.join("");
  }
  var AD = {},
    Sy = new nl();
  function hu(e) {
    let n = (e || AD).prefix || "";
    return function (r) {
      (Sy.reset(),
        Qt(r, "element", function (i) {
          Hc(i) && !i.properties.id && (i.properties.id = n + Sy.slug(Vc(i)));
        }));
    };
  }
  function Wc(e, t) {
    let n = String(e);
    if (typeof t != "string") throw new TypeError("Expected character");
    let r = 0,
      i = n.indexOf(t);
    for (; i !== -1; ) (r++, (i = n.indexOf(t, i + t.length)));
    return r;
  }
  function $c(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  function Qc(e, t, n) {
    let i = Dn((n || {}).ignore || []),
      l = TD(t),
      o = -1;
    for (; ++o < l.length; ) Zi(e, "text", u);
    function u(s, c) {
      let f = -1,
        p;
      for (; ++f < c.length; ) {
        let m = c[f],
          g = p ? p.children : void 0;
        if (i(m, g ? g.indexOf(m) : void 0, p)) return;
        p = m;
      }
      if (p) return a(s, c);
    }
    function a(s, c) {
      let f = c[c.length - 1],
        p = l[o][0],
        m = l[o][1],
        g = 0,
        F = f.children.indexOf(s),
        d = !1,
        h = [];
      p.lastIndex = 0;
      let y = p.exec(s.value);
      for (; y; ) {
        let E = y.index,
          S = { index: y.index, input: y.input, stack: [...c, s] },
          w = m(...y, S);
        if (
          (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0),
          w === !1
            ? (p.lastIndex = E + 1)
            : (g !== E && h.push({ type: "text", value: s.value.slice(g, E) }),
              Array.isArray(w) ? h.push(...w) : w && h.push(w),
              (g = E + y[0].length),
              (d = !0)),
          !p.global)
        )
          break;
        y = p.exec(s.value);
      }
      return (
        d
          ? (g < s.value.length && h.push({ type: "text", value: s.value.slice(g) }),
            f.children.splice(F, 1, ...h))
          : (h = [s]),
        F + h.length
      );
    }
  }
  function TD(e) {
    let t = [];
    if (!Array.isArray(e)) throw new TypeError("Expected find and replace tuple or list of tuples");
    let n = !e[0] || Array.isArray(e[0]) ? e : [e],
      r = -1;
    for (; ++r < n.length; ) {
      let i = n[r];
      t.push([PD(i[0]), ID(i[1])]);
    }
    return t;
  }
  function PD(e) {
    return typeof e == "string" ? new RegExp($c(e), "g") : e;
  }
  function ID(e) {
    return typeof e == "function"
      ? e
      : function () {
          return e;
        };
  }
  var qc = "phrasing",
    Kc = ["autolink", "link", "image", "label"];
  function Yc() {
    return {
      transforms: [ND],
      enter: {
        literalAutolink: LD,
        literalAutolinkEmail: Xc,
        literalAutolinkHttp: Xc,
        literalAutolinkWww: Xc,
      },
      exit: {
        literalAutolink: RD,
        literalAutolinkEmail: BD,
        literalAutolinkHttp: _D,
        literalAutolinkWww: zD,
      },
    };
  }
  function Gc() {
    return {
      unsafe: [
        {
          character: "@",
          before: "[+\\-.\\w]",
          after: "[\\-.\\w]",
          inConstruct: qc,
          notInConstruct: Kc,
        },
        { character: ".", before: "[Ww]", after: "[\\-.\\w]", inConstruct: qc, notInConstruct: Kc },
        { character: ":", before: "[ps]", after: "\\/", inConstruct: qc, notInConstruct: Kc },
      ],
    };
  }
  function LD(e) {
    this.enter({ type: "link", title: null, url: "", children: [] }, e);
  }
  function Xc(e) {
    this.config.enter.autolinkProtocol.call(this, e);
  }
  function _D(e) {
    this.config.exit.autolinkProtocol.call(this, e);
  }
  function zD(e) {
    this.config.exit.data.call(this, e);
    let t = this.stack[this.stack.length - 1];
    (t.type, (t.url = "http://" + this.sliceSerialize(e)));
  }
  function BD(e) {
    this.config.exit.autolinkEmail.call(this, e);
  }
  function RD(e) {
    this.exit(e);
  }
  function ND(e) {
    Qc(
      e,
      [
        [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, OD],
        [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, MD],
      ],
      { ignore: ["link", "linkReference"] },
    );
  }
  function OD(e, t, n, r, i) {
    let l = "";
    if (!Ay(i) || (/^w/i.test(t) && ((n = t + n), (t = ""), (l = "http://")), !bD(n))) return !1;
    let o = jD(n + r);
    if (!o[0]) return !1;
    let u = {
      type: "link",
      title: null,
      url: l + t + o[0],
      children: [{ type: "text", value: t + o[0] }],
    };
    return o[1] ? [u, { type: "text", value: o[1] }] : u;
  }
  function MD(e, t, n, r) {
    return !Ay(r, !0) || /[-\d_]$/.test(n)
      ? !1
      : {
          type: "link",
          title: null,
          url: "mailto:" + t + "@" + n,
          children: [{ type: "text", value: t + "@" + n }],
        };
  }
  function bD(e) {
    let t = e.split(".");
    return !(
      t.length < 2 ||
      (t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
      (t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
    );
  }
  function jD(e) {
    let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
    if (!t) return [e, void 0];
    e = e.slice(0, t.index);
    let n = t[0],
      r = n.indexOf(")"),
      i = Wc(e, "("),
      l = Wc(e, ")");
    for (; r !== -1 && i > l; )
      ((e += n.slice(0, r + 1)), (n = n.slice(r + 1)), (r = n.indexOf(")")), l++);
    return [e, n];
  }
  function Ay(e, t) {
    let n = e.input.charCodeAt(e.index - 1);
    return (e.index === 0 || At(n) || Kn(n)) && (!t || n !== 47);
  }
  Ty.peek = XD;
  function UD() {
    this.buffer();
  }
  function HD(e) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
  }
  function VD() {
    this.buffer();
  }
  function WD(e) {
    this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, e);
  }
  function $D(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1];
    (n.type, (n.identifier = Pe(this.sliceSerialize(e)).toLowerCase()), (n.label = t));
  }
  function QD(e) {
    this.exit(e);
  }
  function qD(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1];
    (n.type, (n.identifier = Pe(this.sliceSerialize(e)).toLowerCase()), (n.label = t));
  }
  function KD(e) {
    this.exit(e);
  }
  function XD() {
    return "[";
  }
  function Ty(e, t, n, r) {
    let i = n.createTracker(r),
      l = i.move("[^"),
      o = n.enter("footnoteReference"),
      u = n.enter("reference");
    return (
      (l += i.move(n.safe(n.associationId(e), { after: "]", before: l }))),
      u(),
      o(),
      (l += i.move("]")),
      l
    );
  }
  function Jc() {
    return {
      enter: {
        gfmFootnoteCallString: UD,
        gfmFootnoteCall: HD,
        gfmFootnoteDefinitionLabelString: VD,
        gfmFootnoteDefinition: WD,
      },
      exit: {
        gfmFootnoteCallString: $D,
        gfmFootnoteCall: QD,
        gfmFootnoteDefinitionLabelString: qD,
        gfmFootnoteDefinition: KD,
      },
    };
  }
  function Zc(e) {
    let t = !1;
    return (
      e && e.firstLineBlank && (t = !0),
      {
        handlers: { footnoteDefinition: n, footnoteReference: Ty },
        unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }],
      }
    );
    function n(r, i, l, o) {
      let u = l.createTracker(o),
        a = u.move("[^"),
        s = l.enter("footnoteDefinition"),
        c = l.enter("label");
      return (
        (a += u.move(l.safe(l.associationId(r), { before: a, after: "]" }))),
        c(),
        (a += u.move("]:")),
        r.children &&
          r.children.length > 0 &&
          (u.shift(4),
          (a += u.move(
            (t
              ? `
`
              : " ") + l.indentLines(l.containerFlow(r, u.current()), t ? Py : YD),
          ))),
        s(),
        a
      );
    }
  }
  function YD(e, t, n) {
    return t === 0 ? e : Py(e, t, n);
  }
  function Py(e, t, n) {
    return (n ? "" : "    ") + e;
  }
  var GD = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe",
  ];
  Iy.peek = eE;
  function ef() {
    return {
      canContainEols: ["delete"],
      enter: { strikethrough: JD },
      exit: { strikethrough: ZD },
    };
  }
  function tf() {
    return {
      unsafe: [{ character: "~", inConstruct: "phrasing", notInConstruct: GD }],
      handlers: { delete: Iy },
    };
  }
  function JD(e) {
    this.enter({ type: "delete", children: [] }, e);
  }
  function ZD(e) {
    this.exit(e);
  }
  function Iy(e, t, n, r) {
    let i = n.createTracker(r),
      l = n.enter("strikethrough"),
      o = i.move("~~");
    return (
      (o += n.containerPhrasing(e, { ...i.current(), before: o, after: "~" })),
      (o += i.move("~~")),
      l(),
      o
    );
  }
  function eE() {
    return "~";
  }
  function tE(e) {
    return e.length;
  }
  function _y(e, t) {
    let n = t || {},
      r = (n.align || []).concat(),
      i = n.stringLength || tE,
      l = [],
      o = [],
      u = [],
      a = [],
      s = 0,
      c = -1;
    for (; ++c < e.length; ) {
      let v = [],
        F = [],
        d = -1;
      for (e[c].length > s && (s = e[c].length); ++d < e[c].length; ) {
        let h = nE(e[c][d]);
        if (n.alignDelimiters !== !1) {
          let y = i(h);
          ((F[d] = y), (a[d] === void 0 || y > a[d]) && (a[d] = y));
        }
        v.push(h);
      }
      ((o[c] = v), (u[c] = F));
    }
    let f = -1;
    if (typeof r == "object" && "length" in r) for (; ++f < s; ) l[f] = Ly(r[f]);
    else {
      let v = Ly(r);
      for (; ++f < s; ) l[f] = v;
    }
    f = -1;
    let p = [],
      m = [];
    for (; ++f < s; ) {
      let v = l[f],
        F = "",
        d = "";
      v === 99 ? ((F = ":"), (d = ":")) : v === 108 ? (F = ":") : v === 114 && (d = ":");
      let h = n.alignDelimiters === !1 ? 1 : Math.max(1, a[f] - F.length - d.length),
        y = F + "-".repeat(h) + d;
      (n.alignDelimiters !== !1 &&
        ((h = F.length + h + d.length), h > a[f] && (a[f] = h), (m[f] = h)),
        (p[f] = y));
    }
    (o.splice(1, 0, p), u.splice(1, 0, m), (c = -1));
    let g = [];
    for (; ++c < o.length; ) {
      let v = o[c],
        F = u[c];
      f = -1;
      let d = [];
      for (; ++f < s; ) {
        let h = v[f] || "",
          y = "",
          E = "";
        if (n.alignDelimiters !== !1) {
          let S = a[f] - (F[f] || 0),
            w = l[f];
          w === 114
            ? (y = " ".repeat(S))
            : w === 99
              ? S % 2
                ? ((y = " ".repeat(S / 2 + 0.5)), (E = " ".repeat(S / 2 - 0.5)))
                : ((y = " ".repeat(S / 2)), (E = y))
              : (E = " ".repeat(S));
        }
        (n.delimiterStart !== !1 && !f && d.push("|"),
          n.padding !== !1 &&
            !(n.alignDelimiters === !1 && h === "") &&
            (n.delimiterStart !== !1 || f) &&
            d.push(" "),
          n.alignDelimiters !== !1 && d.push(y),
          d.push(h),
          n.alignDelimiters !== !1 && d.push(E),
          n.padding !== !1 && d.push(" "),
          (n.delimiterEnd !== !1 || f !== s - 1) && d.push("|"));
      }
      g.push(n.delimiterEnd === !1 ? d.join("").replace(/ +$/, "") : d.join(""));
    }
    return g.join(`
`);
  }
  function nE(e) {
    return e == null ? "" : String(e);
  }
  function Ly(e) {
    let t = typeof e == "string" ? e.codePointAt(0) : 0;
    return t === 67 || t === 99
      ? 99
      : t === 76 || t === 108
        ? 108
        : t === 82 || t === 114
          ? 114
          : 0;
  }
  function zy(e, t, n, r) {
    let i = n.enter("blockquote"),
      l = n.createTracker(r);
    (l.move("> "), l.shift(2));
    let o = n.indentLines(n.containerFlow(e, l.current()), rE);
    return (i(), o);
  }
  function rE(e, t, n) {
    return ">" + (n ? "" : " ") + e;
  }
  function Ry(e, t) {
    return By(e, t.inConstruct, !0) && !By(e, t.notInConstruct, !1);
  }
  function By(e, t, n) {
    if ((typeof t == "string" && (t = [t]), !t || t.length === 0)) return n;
    let r = -1;
    for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
    return !1;
  }
  function nf(e, t, n, r) {
    let i = -1;
    for (; ++i < n.unsafe.length; )
      if (
        n.unsafe[i].character ===
          `
` &&
        Ry(n.stack, n.unsafe[i])
      )
        return /[ \t]/.test(r.before) ? "" : " ";
    return `\\
`;
  }
  function Ny(e, t) {
    let n = String(e),
      r = n.indexOf(t),
      i = r,
      l = 0,
      o = 0;
    if (typeof t != "string") throw new TypeError("Expected substring");
    for (; r !== -1; )
      (r === i ? ++l > o && (o = l) : (l = 1), (i = r + t.length), (r = n.indexOf(t, i)));
    return o;
  }
  function Oy(e, t) {
    return !!(
      t.options.fences === !1 &&
      e.value &&
      !e.lang &&
      /[^ \r\n]/.test(e.value) &&
      !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
    );
  }
  function My(e) {
    let t = e.options.fence || "`";
    if (t !== "`" && t !== "~")
      throw new Error(
        "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`",
      );
    return t;
  }
  function by(e, t, n, r) {
    let i = My(n),
      l = e.value || "",
      o = i === "`" ? "GraveAccent" : "Tilde";
    if (Oy(e, n)) {
      let f = n.enter("codeIndented"),
        p = n.indentLines(l, iE);
      return (f(), p);
    }
    let u = n.createTracker(r),
      a = i.repeat(Math.max(Ny(l, i) + 1, 3)),
      s = n.enter("codeFenced"),
      c = u.move(a);
    if (e.lang) {
      let f = n.enter(`codeFencedLang${o}`);
      ((c += u.move(n.safe(e.lang, { before: c, after: " ", encode: ["`"], ...u.current() }))),
        f());
    }
    if (e.lang && e.meta) {
      let f = n.enter(`codeFencedMeta${o}`);
      ((c += u.move(" ")),
        (c += u.move(
          n.safe(e.meta, {
            before: c,
            after: `
`,
            encode: ["`"],
            ...u.current(),
          }),
        )),
        f());
    }
    return (
      (c += u.move(`
`)),
      l &&
        (c += u.move(
          l +
            `
`,
        )),
      (c += u.move(a)),
      s(),
      c
    );
  }
  function iE(e, t, n) {
    return (n ? "" : "    ") + e;
  }
  function jr(e) {
    let t = e.options.quote || '"';
    if (t !== '"' && t !== "'")
      throw new Error(
        "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`",
      );
    return t;
  }
  function jy(e, t, n, r) {
    let i = jr(n),
      l = i === '"' ? "Quote" : "Apostrophe",
      o = n.enter("definition"),
      u = n.enter("label"),
      a = n.createTracker(r),
      s = a.move("[");
    return (
      (s += a.move(n.safe(n.associationId(e), { before: s, after: "]", ...a.current() }))),
      (s += a.move("]: ")),
      u(),
      !e.url || /[\0- \u007F]/.test(e.url)
        ? ((u = n.enter("destinationLiteral")),
          (s += a.move("<")),
          (s += a.move(n.safe(e.url, { before: s, after: ">", ...a.current() }))),
          (s += a.move(">")))
        : ((u = n.enter("destinationRaw")),
          (s += a.move(
            n.safe(e.url, {
              before: s,
              after: e.title
                ? " "
                : `
`,
              ...a.current(),
            }),
          ))),
      u(),
      e.title &&
        ((u = n.enter(`title${l}`)),
        (s += a.move(" " + i)),
        (s += a.move(n.safe(e.title, { before: s, after: i, ...a.current() }))),
        (s += a.move(i)),
        u()),
      o(),
      s
    );
  }
  function Uy(e) {
    let t = e.options.emphasis || "*";
    if (t !== "*" && t !== "_")
      throw new Error(
        "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`",
      );
    return t;
  }
  function En(e) {
    return "&#x" + e.toString(16).toUpperCase() + ";";
  }
  function Ur(e, t, n) {
    let r = $t(e),
      i = $t(t);
    return r === void 0
      ? i === void 0
        ? n === "_"
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !1 }
        : i === 1
          ? { inside: !0, outside: !0 }
          : { inside: !1, outside: !0 }
      : r === 1
        ? i === void 0
          ? { inside: !1, outside: !1 }
          : i === 1
            ? { inside: !0, outside: !0 }
            : { inside: !1, outside: !1 }
        : i === void 0
          ? { inside: !1, outside: !1 }
          : i === 1
            ? { inside: !0, outside: !1 }
            : { inside: !1, outside: !1 };
  }
  rf.peek = lE;
  function rf(e, t, n, r) {
    let i = Uy(n),
      l = n.enter("emphasis"),
      o = n.createTracker(r),
      u = o.move(i),
      a = o.move(n.containerPhrasing(e, { after: i, before: u, ...o.current() })),
      s = a.charCodeAt(0),
      c = Ur(r.before.charCodeAt(r.before.length - 1), s, i);
    c.inside && (a = En(s) + a.slice(1));
    let f = a.charCodeAt(a.length - 1),
      p = Ur(r.after.charCodeAt(0), f, i);
    p.inside && (a = a.slice(0, -1) + En(f));
    let m = o.move(i);
    return (
      l(), (n.attentionEncodeSurroundingInfo = { after: p.outside, before: c.outside }), u + a + m
    );
  }
  function lE(e, t, n) {
    return n.options.emphasis || "*";
  }
  function Hy(e, t) {
    let n = !1;
    return (
      Qt(e, function (r) {
        if (("value" in r && /\r?\n|\r/.test(r.value)) || r.type === "break") return ((n = !0), Jn);
      }),
      !!((!e.depth || e.depth < 3) && Qn(e) && (t.options.setext || n))
    );
  }
  function Vy(e, t, n, r) {
    let i = Math.max(Math.min(6, e.depth || 1), 1),
      l = n.createTracker(r);
    if (Hy(e, n)) {
      let c = n.enter("headingSetext"),
        f = n.enter("phrasing"),
        p = n.containerPhrasing(e, {
          ...l.current(),
          before: `
`,
          after: `
`,
        });
      return (
        f(),
        c(),
        p +
          `
` +
          (i === 1 ? "=" : "-").repeat(
            p.length -
              (Math.max(
                p.lastIndexOf("\r"),
                p.lastIndexOf(`
`),
              ) +
                1),
          )
      );
    }
    let o = "#".repeat(i),
      u = n.enter("headingAtx"),
      a = n.enter("phrasing");
    l.move(o + " ");
    let s = n.containerPhrasing(e, {
      before: "# ",
      after: `
`,
      ...l.current(),
    });
    return (
      /^[\t ]/.test(s) && (s = En(s.charCodeAt(0)) + s.slice(1)),
      (s = s ? o + " " + s : o),
      n.options.closeAtx && (s += " " + o),
      a(),
      u(),
      s
    );
  }
  lf.peek = oE;
  function lf(e) {
    return e.value || "";
  }
  function oE() {
    return "<";
  }
  of.peek = uE;
  function of(e, t, n, r) {
    let i = jr(n),
      l = i === '"' ? "Quote" : "Apostrophe",
      o = n.enter("image"),
      u = n.enter("label"),
      a = n.createTracker(r),
      s = a.move("![");
    return (
      (s += a.move(n.safe(e.alt, { before: s, after: "]", ...a.current() }))),
      (s += a.move("](")),
      u(),
      (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
        ? ((u = n.enter("destinationLiteral")),
          (s += a.move("<")),
          (s += a.move(n.safe(e.url, { before: s, after: ">", ...a.current() }))),
          (s += a.move(">")))
        : ((u = n.enter("destinationRaw")),
          (s += a.move(n.safe(e.url, { before: s, after: e.title ? " " : ")", ...a.current() })))),
      u(),
      e.title &&
        ((u = n.enter(`title${l}`)),
        (s += a.move(" " + i)),
        (s += a.move(n.safe(e.title, { before: s, after: i, ...a.current() }))),
        (s += a.move(i)),
        u()),
      (s += a.move(")")),
      o(),
      s
    );
  }
  function uE() {
    return "!";
  }
  uf.peek = aE;
  function uf(e, t, n, r) {
    let i = e.referenceType,
      l = n.enter("imageReference"),
      o = n.enter("label"),
      u = n.createTracker(r),
      a = u.move("!["),
      s = n.safe(e.alt, { before: a, after: "]", ...u.current() });
    ((a += u.move(s + "][")), o());
    let c = n.stack;
    ((n.stack = []), (o = n.enter("reference")));
    let f = n.safe(n.associationId(e), { before: a, after: "]", ...u.current() });
    return (
      o(),
      (n.stack = c),
      l(),
      i === "full" || !s || s !== f
        ? (a += u.move(f + "]"))
        : i === "shortcut"
          ? (a = a.slice(0, -1))
          : (a += u.move("]")),
      a
    );
  }
  function aE() {
    return "!";
  }
  af.peek = sE;
  function af(e, t, n) {
    let r = e.value || "",
      i = "`",
      l = -1;
    for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
    for (
      /[^ \r\n]/.test(r) &&
      ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
      (r = " " + r + " ");
      ++l < n.unsafe.length;
    ) {
      let o = n.unsafe[l],
        u = n.compilePattern(o),
        a;
      if (o.atBreak)
        for (; (a = u.exec(r)); ) {
          let s = a.index;
          (r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--,
            (r = r.slice(0, s) + " " + r.slice(a.index + 1)));
        }
    }
    return i + r + i;
  }
  function sE() {
    return "`";
  }
  function sf(e, t) {
    let n = Qn(e);
    return !!(
      !t.options.resourceLink &&
      e.url &&
      !e.title &&
      e.children &&
      e.children.length === 1 &&
      e.children[0].type === "text" &&
      (n === e.url || "mailto:" + n === e.url) &&
      /^[a-z][a-z+.-]+:/i.test(e.url) &&
      !/[\0- <>\u007F]/.test(e.url)
    );
  }
  cf.peek = cE;
  function cf(e, t, n, r) {
    let i = jr(n),
      l = i === '"' ? "Quote" : "Apostrophe",
      o = n.createTracker(r),
      u,
      a;
    if (sf(e, n)) {
      let c = n.stack;
      ((n.stack = []), (u = n.enter("autolink")));
      let f = o.move("<");
      return (
        (f += o.move(n.containerPhrasing(e, { before: f, after: ">", ...o.current() }))),
        (f += o.move(">")),
        u(),
        (n.stack = c),
        f
      );
    }
    ((u = n.enter("link")), (a = n.enter("label")));
    let s = o.move("[");
    return (
      (s += o.move(n.containerPhrasing(e, { before: s, after: "](", ...o.current() }))),
      (s += o.move("](")),
      a(),
      (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
        ? ((a = n.enter("destinationLiteral")),
          (s += o.move("<")),
          (s += o.move(n.safe(e.url, { before: s, after: ">", ...o.current() }))),
          (s += o.move(">")))
        : ((a = n.enter("destinationRaw")),
          (s += o.move(n.safe(e.url, { before: s, after: e.title ? " " : ")", ...o.current() })))),
      a(),
      e.title &&
        ((a = n.enter(`title${l}`)),
        (s += o.move(" " + i)),
        (s += o.move(n.safe(e.title, { before: s, after: i, ...o.current() }))),
        (s += o.move(i)),
        a()),
      (s += o.move(")")),
      u(),
      s
    );
  }
  function cE(e, t, n) {
    return sf(e, n) ? "<" : "[";
  }
  ff.peek = fE;
  function ff(e, t, n, r) {
    let i = e.referenceType,
      l = n.enter("linkReference"),
      o = n.enter("label"),
      u = n.createTracker(r),
      a = u.move("["),
      s = n.containerPhrasing(e, { before: a, after: "]", ...u.current() });
    ((a += u.move(s + "][")), o());
    let c = n.stack;
    ((n.stack = []), (o = n.enter("reference")));
    let f = n.safe(n.associationId(e), { before: a, after: "]", ...u.current() });
    return (
      o(),
      (n.stack = c),
      l(),
      i === "full" || !s || s !== f
        ? (a += u.move(f + "]"))
        : i === "shortcut"
          ? (a = a.slice(0, -1))
          : (a += u.move("]")),
      a
    );
  }
  function fE() {
    return "[";
  }
  function Hr(e) {
    let t = e.options.bullet || "*";
    if (t !== "*" && t !== "+" && t !== "-")
      throw new Error(
        "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`",
      );
    return t;
  }
  function Wy(e) {
    let t = Hr(e),
      n = e.options.bulletOther;
    if (!n) return t === "*" ? "-" : "*";
    if (n !== "*" && n !== "+" && n !== "-")
      throw new Error(
        "Cannot serialize items with `" +
          n +
          "` for `options.bulletOther`, expected `*`, `+`, or `-`",
      );
    if (n === t)
      throw new Error(
        "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different",
      );
    return n;
  }
  function $y(e) {
    let t = e.options.bulletOrdered || ".";
    if (t !== "." && t !== ")")
      throw new Error(
        "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`",
      );
    return t;
  }
  function gu(e) {
    let t = e.options.rule || "*";
    if (t !== "*" && t !== "-" && t !== "_")
      throw new Error(
        "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`",
      );
    return t;
  }
  function Qy(e, t, n, r) {
    let i = n.enter("list"),
      l = n.bulletCurrent,
      o = e.ordered ? $y(n) : Hr(n),
      u = e.ordered ? (o === "." ? ")" : ".") : Wy(n),
      a = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
    if (!e.ordered) {
      let c = e.children ? e.children[0] : void 0;
      if (
        ((o === "*" || o === "-") &&
          c &&
          (!c.children || !c.children[0]) &&
          n.stack[n.stack.length - 1] === "list" &&
          n.stack[n.stack.length - 2] === "listItem" &&
          n.stack[n.stack.length - 3] === "list" &&
          n.stack[n.stack.length - 4] === "listItem" &&
          n.indexStack[n.indexStack.length - 1] === 0 &&
          n.indexStack[n.indexStack.length - 2] === 0 &&
          n.indexStack[n.indexStack.length - 3] === 0 &&
          (a = !0),
        gu(n) === o && c)
      ) {
        let f = -1;
        for (; ++f < e.children.length; ) {
          let p = e.children[f];
          if (
            p &&
            p.type === "listItem" &&
            p.children &&
            p.children[0] &&
            p.children[0].type === "thematicBreak"
          ) {
            a = !0;
            break;
          }
        }
      }
    }
    (a && (o = u), (n.bulletCurrent = o));
    let s = n.containerFlow(e, r);
    return ((n.bulletLastUsed = o), (n.bulletCurrent = l), i(), s);
  }
  function qy(e) {
    let t = e.options.listItemIndent || "one";
    if (t !== "tab" && t !== "one" && t !== "mixed")
      throw new Error(
        "Cannot serialize items with `" +
          t +
          "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`",
      );
    return t;
  }
  function Ky(e, t, n, r) {
    let i = qy(n),
      l = n.bulletCurrent || Hr(n);
    t &&
      t.type === "list" &&
      t.ordered &&
      (l =
        (typeof t.start == "number" && t.start > -1 ? t.start : 1) +
        (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) +
        l);
    let o = l.length + 1;
    (i === "tab" || (i === "mixed" && ((t && t.type === "list" && t.spread) || e.spread))) &&
      (o = Math.ceil(o / 4) * 4);
    let u = n.createTracker(r);
    (u.move(l + " ".repeat(o - l.length)), u.shift(o));
    let a = n.enter("listItem"),
      s = n.indentLines(n.containerFlow(e, u.current()), c);
    return (a(), s);
    function c(f, p, m) {
      return p ? (m ? "" : " ".repeat(o)) + f : (m ? l : l + " ".repeat(o - l.length)) + f;
    }
  }
  function Xy(e, t, n, r) {
    let i = n.enter("paragraph"),
      l = n.enter("phrasing"),
      o = n.containerPhrasing(e, r);
    return (l(), i(), o);
  }
  var pf = Dn([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "inlineMath",
    "link",
    "linkReference",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "strong",
    "text",
    "textDirective",
  ]);
  function Yy(e, t, n, r) {
    return (
      e.children.some(function (o) {
        return pf(o);
      })
        ? n.containerPhrasing
        : n.containerFlow
    ).call(n, e, r);
  }
  function Gy(e) {
    let t = e.options.strong || "*";
    if (t !== "*" && t !== "_")
      throw new Error(
        "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`",
      );
    return t;
  }
  mf.peek = pE;
  function mf(e, t, n, r) {
    let i = Gy(n),
      l = n.enter("strong"),
      o = n.createTracker(r),
      u = o.move(i + i),
      a = o.move(n.containerPhrasing(e, { after: i, before: u, ...o.current() })),
      s = a.charCodeAt(0),
      c = Ur(r.before.charCodeAt(r.before.length - 1), s, i);
    c.inside && (a = En(s) + a.slice(1));
    let f = a.charCodeAt(a.length - 1),
      p = Ur(r.after.charCodeAt(0), f, i);
    p.inside && (a = a.slice(0, -1) + En(f));
    let m = o.move(i + i);
    return (
      l(), (n.attentionEncodeSurroundingInfo = { after: p.outside, before: c.outside }), u + a + m
    );
  }
  function pE(e, t, n) {
    return n.options.strong || "*";
  }
  function Jy(e, t, n, r) {
    return n.safe(e.value, r);
  }
  function Zy(e) {
    let t = e.options.ruleRepetition || 3;
    if (t < 3)
      throw new Error(
        "Cannot serialize rules with repetition `" +
          t +
          "` for `options.ruleRepetition`, expected `3` or more",
      );
    return t;
  }
  function e0(e, t, n) {
    let r = (gu(n) + (n.options.ruleSpaces ? " " : "")).repeat(Zy(n));
    return n.options.ruleSpaces ? r.slice(0, -1) : r;
  }
  var rl = {
    blockquote: zy,
    break: nf,
    code: by,
    definition: jy,
    emphasis: rf,
    hardBreak: nf,
    heading: Vy,
    html: lf,
    image: of,
    imageReference: uf,
    inlineCode: af,
    link: cf,
    linkReference: ff,
    list: Qy,
    listItem: Ky,
    paragraph: Xy,
    root: Yy,
    strong: mf,
    text: Jy,
    thematicBreak: e0,
  };
  function hf() {
    return {
      enter: { table: mE, tableData: t0, tableHeader: t0, tableRow: hE },
      exit: { codeText: gE, table: dE, tableData: df, tableHeader: df, tableRow: df },
    };
  }
  function mE(e) {
    let t = e._align;
    (this.enter(
      {
        type: "table",
        align: t.map(function (n) {
          return n === "none" ? null : n;
        }),
        children: [],
      },
      e,
    ),
      (this.data.inTable = !0));
  }
  function dE(e) {
    (this.exit(e), (this.data.inTable = void 0));
  }
  function hE(e) {
    this.enter({ type: "tableRow", children: [] }, e);
  }
  function df(e) {
    this.exit(e);
  }
  function t0(e) {
    this.enter({ type: "tableCell", children: [] }, e);
  }
  function gE(e) {
    let t = this.resume();
    this.data.inTable && (t = t.replace(/\\([\\|])/g, yE));
    let n = this.stack[this.stack.length - 1];
    (n.type, (n.value = t), this.exit(e));
  }
  function yE(e, t) {
    return t === "|" ? t : e;
  }
  function gf(e) {
    let t = e || {},
      n = t.tableCellPadding,
      r = t.tablePipeAlign,
      i = t.stringLength,
      l = n ? " " : "|";
    return {
      unsafe: [
        { character: "\r", inConstruct: "tableCell" },
        {
          character: `
`,
          inConstruct: "tableCell",
        },
        { atBreak: !0, character: "|", after: "[	 :-]" },
        { character: "|", inConstruct: "tableCell" },
        { atBreak: !0, character: ":", after: "-" },
        { atBreak: !0, character: "-", after: "[:|-]" },
      ],
      handlers: { inlineCode: p, table: o, tableCell: a, tableRow: u },
    };
    function o(m, g, v, F) {
      return s(c(m, v, F), m.align);
    }
    function u(m, g, v, F) {
      let d = f(m, v, F),
        h = s([d]);
      return h.slice(
        0,
        h.indexOf(`
`),
      );
    }
    function a(m, g, v, F) {
      let d = v.enter("tableCell"),
        h = v.enter("phrasing"),
        y = v.containerPhrasing(m, { ...F, before: l, after: l });
      return (h(), d(), y);
    }
    function s(m, g) {
      return _y(m, { align: g, alignDelimiters: r, padding: n, stringLength: i });
    }
    function c(m, g, v) {
      let F = m.children,
        d = -1,
        h = [],
        y = g.enter("table");
      for (; ++d < F.length; ) h[d] = f(F[d], g, v);
      return (y(), h);
    }
    function f(m, g, v) {
      let F = m.children,
        d = -1,
        h = [],
        y = g.enter("tableRow");
      for (; ++d < F.length; ) h[d] = a(F[d], m, g, v);
      return (y(), h);
    }
    function p(m, g, v) {
      let F = rl.inlineCode(m, g, v);
      return (v.stack.includes("tableCell") && (F = F.replace(/\|/g, "\\$&")), F);
    }
  }
  function yf() {
    return {
      exit: { taskListCheckValueChecked: n0, taskListCheckValueUnchecked: n0, paragraph: kE },
    };
  }
  function kf() {
    return {
      unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
      handlers: { listItem: xE },
    };
  }
  function n0(e) {
    let t = this.stack[this.stack.length - 2];
    (t.type, (t.checked = e.type === "taskListCheckValueChecked"));
  }
  function kE(e) {
    let t = this.stack[this.stack.length - 2];
    if (t && t.type === "listItem" && typeof t.checked == "boolean") {
      let n = this.stack[this.stack.length - 1];
      n.type;
      let r = n.children[0];
      if (r && r.type === "text") {
        let i = t.children,
          l = -1,
          o;
        for (; ++l < i.length; ) {
          let u = i[l];
          if (u.type === "paragraph") {
            o = u;
            break;
          }
        }
        o === n &&
          ((r.value = r.value.slice(1)),
          r.value.length === 0
            ? n.children.shift()
            : n.position &&
              r.position &&
              typeof r.position.start.offset == "number" &&
              (r.position.start.column++,
              r.position.start.offset++,
              (n.position.start = Object.assign({}, r.position.start))));
      }
    }
    this.exit(e);
  }
  function xE(e, t, n, r) {
    let i = e.children[0],
      l = typeof e.checked == "boolean" && i && i.type === "paragraph",
      o = "[" + (e.checked ? "x" : " ") + "] ",
      u = n.createTracker(r);
    l && u.move(o);
    let a = rl.listItem(e, t, n, { ...r, ...u.current() });
    return (l && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), a);
    function s(c) {
      return c + o;
    }
  }
  function xf() {
    return [Yc(), Jc(), ef(), hf(), yf()];
  }
  function vf(e) {
    return { extensions: [Gc(), Zc(e), tf(), gf(e), kf()] };
  }
  var vE = { tokenize: FE, partial: !0 },
    r0 = { tokenize: SE, partial: !0 },
    i0 = { tokenize: AE, partial: !0 },
    l0 = { tokenize: TE, partial: !0 },
    wE = { tokenize: PE, partial: !0 },
    o0 = { name: "wwwAutolink", tokenize: EE, previous: a0 },
    u0 = { name: "protocolAutolink", tokenize: CE, previous: s0 },
    qt = { name: "emailAutolink", tokenize: DE, previous: c0 },
    Pt = {};
  function Df() {
    return { text: Pt };
  }
  var er = 48;
  for (; er < 123; ) ((Pt[er] = qt), er++, er === 58 ? (er = 65) : er === 91 && (er = 97));
  Pt[43] = qt;
  Pt[45] = qt;
  Pt[46] = qt;
  Pt[95] = qt;
  Pt[72] = [qt, u0];
  Pt[104] = [qt, u0];
  Pt[87] = [qt, o0];
  Pt[119] = [qt, o0];
  function DE(e, t, n) {
    let r = this,
      i,
      l;
    return o;
    function o(f) {
      return !wf(f) || !c0.call(r, r.previous) || Ef(r.events)
        ? n(f)
        : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), u(f));
    }
    function u(f) {
      return wf(f) ? (e.consume(f), u) : f === 64 ? (e.consume(f), a) : n(f);
    }
    function a(f) {
      return f === 46
        ? e.check(wE, c, s)(f)
        : f === 45 || f === 95 || ae(f)
          ? ((l = !0), e.consume(f), a)
          : c(f);
    }
    function s(f) {
      return (e.consume(f), (i = !0), a);
    }
    function c(f) {
      return l && i && ge(r.previous)
        ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(f))
        : n(f);
    }
  }
  function EE(e, t, n) {
    let r = this;
    return i;
    function i(o) {
      return (o !== 87 && o !== 119) || !a0.call(r, r.previous) || Ef(r.events)
        ? n(o)
        : (e.enter("literalAutolink"),
          e.enter("literalAutolinkWww"),
          e.check(vE, e.attempt(r0, e.attempt(i0, l), n), n)(o));
    }
    function l(o) {
      return (e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o));
    }
  }
  function CE(e, t, n) {
    let r = this,
      i = "",
      l = !1;
    return o;
    function o(f) {
      return (f === 72 || f === 104) && s0.call(r, r.previous) && !Ef(r.events)
        ? (e.enter("literalAutolink"),
          e.enter("literalAutolinkHttp"),
          (i += String.fromCodePoint(f)),
          e.consume(f),
          u)
        : n(f);
    }
    function u(f) {
      if (ge(f) && i.length < 5) return ((i += String.fromCodePoint(f)), e.consume(f), u);
      if (f === 58) {
        let p = i.toLowerCase();
        if (p === "http" || p === "https") return (e.consume(f), a);
      }
      return n(f);
    }
    function a(f) {
      return f === 47 ? (e.consume(f), l ? s : ((l = !0), a)) : n(f);
    }
    function s(f) {
      return f === null || qn(f) || H(f) || At(f) || Kn(f)
        ? n(f)
        : e.attempt(r0, e.attempt(i0, c), n)(f);
    }
    function c(f) {
      return (e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(f));
    }
  }
  function FE(e, t, n) {
    let r = 0;
    return i;
    function i(o) {
      return (o === 87 || o === 119) && r < 3
        ? (r++, e.consume(o), i)
        : o === 46 && r === 3
          ? (e.consume(o), l)
          : n(o);
    }
    function l(o) {
      return o === null ? n(o) : t(o);
    }
  }
  function SE(e, t, n) {
    let r, i, l;
    return o;
    function o(s) {
      return s === 46 || s === 95
        ? e.check(l0, a, u)(s)
        : s === null || H(s) || At(s) || (s !== 45 && Kn(s))
          ? a(s)
          : ((l = !0), e.consume(s), o);
    }
    function u(s) {
      return (s === 95 ? (r = !0) : ((i = r), (r = void 0)), e.consume(s), o);
    }
    function a(s) {
      return i || r || !l ? n(s) : t(s);
    }
  }
  function AE(e, t) {
    let n = 0,
      r = 0;
    return i;
    function i(o) {
      return o === 40
        ? (n++, e.consume(o), i)
        : o === 41 && r < n
          ? l(o)
          : o === 33 ||
              o === 34 ||
              o === 38 ||
              o === 39 ||
              o === 41 ||
              o === 42 ||
              o === 44 ||
              o === 46 ||
              o === 58 ||
              o === 59 ||
              o === 60 ||
              o === 63 ||
              o === 93 ||
              o === 95 ||
              o === 126
            ? e.check(l0, t, l)(o)
            : o === null || H(o) || At(o)
              ? t(o)
              : (e.consume(o), i);
    }
    function l(o) {
      return (o === 41 && r++, e.consume(o), i);
    }
  }
  function TE(e, t, n) {
    return r;
    function r(u) {
      return u === 33 ||
        u === 34 ||
        u === 39 ||
        u === 41 ||
        u === 42 ||
        u === 44 ||
        u === 46 ||
        u === 58 ||
        u === 59 ||
        u === 63 ||
        u === 95 ||
        u === 126
        ? (e.consume(u), r)
        : u === 38
          ? (e.consume(u), l)
          : u === 93
            ? (e.consume(u), i)
            : u === 60 || u === null || H(u) || At(u)
              ? t(u)
              : n(u);
    }
    function i(u) {
      return u === null || u === 40 || u === 91 || H(u) || At(u) ? t(u) : r(u);
    }
    function l(u) {
      return ge(u) ? o(u) : n(u);
    }
    function o(u) {
      return u === 59 ? (e.consume(u), r) : ge(u) ? (e.consume(u), o) : n(u);
    }
  }
  function PE(e, t, n) {
    return r;
    function r(l) {
      return (e.consume(l), i);
    }
    function i(l) {
      return ae(l) ? n(l) : t(l);
    }
  }
  function a0(e) {
    return (
      e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || H(e)
    );
  }
  function s0(e) {
    return !ge(e);
  }
  function c0(e) {
    return !(e === 47 || wf(e));
  }
  function wf(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || ae(e);
  }
  function Ef(e) {
    let t = e.length,
      n = !1;
    for (; t--; ) {
      let r = e[t][1];
      if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
        n = !0;
        break;
      }
      if (r._gfmAutolinkLiteralWalkedInto) {
        n = !1;
        break;
      }
    }
    return (e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n);
  }
  var IE = { tokenize: OE, partial: !0 };
  function Cf() {
    return {
      document: {
        91: {
          name: "gfmFootnoteDefinition",
          tokenize: BE,
          continuation: { tokenize: RE },
          exit: NE,
        },
      },
      text: {
        91: { name: "gfmFootnoteCall", tokenize: zE },
        93: { name: "gfmPotentialFootnoteCall", add: "after", tokenize: LE, resolveTo: _E },
      },
    };
  }
  function LE(e, t, n) {
    let r = this,
      i = r.events.length,
      l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
      o;
    for (; i--; ) {
      let a = r.events[i][1];
      if (a.type === "labelImage") {
        o = a;
        break;
      }
      if (
        a.type === "gfmFootnoteCall" ||
        a.type === "labelLink" ||
        a.type === "label" ||
        a.type === "image" ||
        a.type === "link"
      )
        break;
    }
    return u;
    function u(a) {
      if (!o || !o._balanced) return n(a);
      let s = Pe(r.sliceSerialize({ start: o.end, end: r.now() }));
      return s.codePointAt(0) !== 94 || !l.includes(s.slice(1))
        ? n(a)
        : (e.enter("gfmFootnoteCallLabelMarker"),
          e.consume(a),
          e.exit("gfmFootnoteCallLabelMarker"),
          t(a));
    }
  }
  function _E(e, t) {
    let n = e.length,
      r;
    for (; n--; )
      if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
        r = e[n][1];
        break;
      }
    ((e[n + 1][1].type = "data"), (e[n + 3][1].type = "gfmFootnoteCallLabelMarker"));
    let i = {
        type: "gfmFootnoteCall",
        start: Object.assign({}, e[n + 3][1].start),
        end: Object.assign({}, e[e.length - 1][1].end),
      },
      l = {
        type: "gfmFootnoteCallMarker",
        start: Object.assign({}, e[n + 3][1].end),
        end: Object.assign({}, e[n + 3][1].end),
      };
    (l.end.column++, l.end.offset++, l.end._bufferIndex++);
    let o = {
        type: "gfmFootnoteCallString",
        start: Object.assign({}, l.end),
        end: Object.assign({}, e[e.length - 1][1].start),
      },
      u = {
        type: "chunkString",
        contentType: "string",
        start: Object.assign({}, o.start),
        end: Object.assign({}, o.end),
      },
      a = [
        e[n + 1],
        e[n + 2],
        ["enter", i, t],
        e[n + 3],
        e[n + 4],
        ["enter", l, t],
        ["exit", l, t],
        ["enter", o, t],
        ["enter", u, t],
        ["exit", u, t],
        ["exit", o, t],
        e[e.length - 2],
        e[e.length - 1],
        ["exit", i, t],
      ];
    return (e.splice(n, e.length - n + 1, ...a), e);
  }
  function zE(e, t, n) {
    let r = this,
      i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
      l = 0,
      o;
    return u;
    function u(f) {
      return (
        e.enter("gfmFootnoteCall"),
        e.enter("gfmFootnoteCallLabelMarker"),
        e.consume(f),
        e.exit("gfmFootnoteCallLabelMarker"),
        a
      );
    }
    function a(f) {
      return f !== 94
        ? n(f)
        : (e.enter("gfmFootnoteCallMarker"),
          e.consume(f),
          e.exit("gfmFootnoteCallMarker"),
          e.enter("gfmFootnoteCallString"),
          (e.enter("chunkString").contentType = "string"),
          s);
    }
    function s(f) {
      if (l > 999 || (f === 93 && !o) || f === null || f === 91 || H(f)) return n(f);
      if (f === 93) {
        e.exit("chunkString");
        let p = e.exit("gfmFootnoteCallString");
        return i.includes(Pe(r.sliceSerialize(p)))
          ? (e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(f),
            e.exit("gfmFootnoteCallLabelMarker"),
            e.exit("gfmFootnoteCall"),
            t)
          : n(f);
      }
      return (H(f) || (o = !0), l++, e.consume(f), f === 92 ? c : s);
    }
    function c(f) {
      return f === 91 || f === 92 || f === 93 ? (e.consume(f), l++, s) : s(f);
    }
  }
  function BE(e, t, n) {
    let r = this,
      i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
      l,
      o = 0,
      u;
    return a;
    function a(g) {
      return (
        (e.enter("gfmFootnoteDefinition")._container = !0),
        e.enter("gfmFootnoteDefinitionLabel"),
        e.enter("gfmFootnoteDefinitionLabelMarker"),
        e.consume(g),
        e.exit("gfmFootnoteDefinitionLabelMarker"),
        s
      );
    }
    function s(g) {
      return g === 94
        ? (e.enter("gfmFootnoteDefinitionMarker"),
          e.consume(g),
          e.exit("gfmFootnoteDefinitionMarker"),
          e.enter("gfmFootnoteDefinitionLabelString"),
          (e.enter("chunkString").contentType = "string"),
          c)
        : n(g);
    }
    function c(g) {
      if (o > 999 || (g === 93 && !u) || g === null || g === 91 || H(g)) return n(g);
      if (g === 93) {
        e.exit("chunkString");
        let v = e.exit("gfmFootnoteDefinitionLabelString");
        return (
          (l = Pe(r.sliceSerialize(v))),
          e.enter("gfmFootnoteDefinitionLabelMarker"),
          e.consume(g),
          e.exit("gfmFootnoteDefinitionLabelMarker"),
          e.exit("gfmFootnoteDefinitionLabel"),
          p
        );
      }
      return (H(g) || (u = !0), o++, e.consume(g), g === 92 ? f : c);
    }
    function f(g) {
      return g === 91 || g === 92 || g === 93 ? (e.consume(g), o++, c) : c(g);
    }
    function p(g) {
      return g === 58
        ? (e.enter("definitionMarker"),
          e.consume(g),
          e.exit("definitionMarker"),
          i.includes(l) || i.push(l),
          R(e, m, "gfmFootnoteDefinitionWhitespace"))
        : n(g);
    }
    function m(g) {
      return t(g);
    }
  }
  function RE(e, t, n) {
    return e.check(Tt, t, e.attempt(IE, t, n));
  }
  function NE(e) {
    e.exit("gfmFootnoteDefinition");
  }
  function OE(e, t, n) {
    let r = this;
    return R(e, i, "gfmFootnoteDefinitionIndent", 5);
    function i(l) {
      let o = r.events[r.events.length - 1];
      return o &&
        o[1].type === "gfmFootnoteDefinitionIndent" &&
        o[2].sliceSerialize(o[1], !0).length === 4
        ? t(l)
        : n(l);
    }
  }
  function Ff(e) {
    let n = (e || {}).singleTilde,
      r = { name: "strikethrough", tokenize: l, resolveAll: i };
    return (
      n == null && (n = !0),
      { text: { 126: r }, insideSpan: { null: [r] }, attentionMarkers: { null: [126] } }
    );
    function i(o, u) {
      let a = -1;
      for (; ++a < o.length; )
        if (
          o[a][0] === "enter" &&
          o[a][1].type === "strikethroughSequenceTemporary" &&
          o[a][1]._close
        ) {
          let s = a;
          for (; s--; )
            if (
              o[s][0] === "exit" &&
              o[s][1].type === "strikethroughSequenceTemporary" &&
              o[s][1]._open &&
              o[a][1].end.offset - o[a][1].start.offset ===
                o[s][1].end.offset - o[s][1].start.offset
            ) {
              ((o[a][1].type = "strikethroughSequence"), (o[s][1].type = "strikethroughSequence"));
              let c = {
                  type: "strikethrough",
                  start: Object.assign({}, o[s][1].start),
                  end: Object.assign({}, o[a][1].end),
                },
                f = {
                  type: "strikethroughText",
                  start: Object.assign({}, o[s][1].end),
                  end: Object.assign({}, o[a][1].start),
                },
                p = [
                  ["enter", c, u],
                  ["enter", o[s][1], u],
                  ["exit", o[s][1], u],
                  ["enter", f, u],
                ],
                m = u.parser.constructs.insideSpan.null;
              (m && fe(p, p.length, 0, vn(m, o.slice(s + 1, a), u)),
                fe(p, p.length, 0, [
                  ["exit", f, u],
                  ["enter", o[a][1], u],
                  ["exit", o[a][1], u],
                  ["exit", c, u],
                ]),
                fe(o, s - 1, a - s + 3, p),
                (a = s + p.length - 2));
              break;
            }
        }
      for (a = -1; ++a < o.length; )
        o[a][1].type === "strikethroughSequenceTemporary" && (o[a][1].type = "data");
      return o;
    }
    function l(o, u, a) {
      let s = this.previous,
        c = this.events,
        f = 0;
      return p;
      function p(g) {
        return s === 126 && c[c.length - 1][1].type !== "characterEscape"
          ? a(g)
          : (o.enter("strikethroughSequenceTemporary"), m(g));
      }
      function m(g) {
        let v = $t(s);
        if (g === 126) return f > 1 ? a(g) : (o.consume(g), f++, m);
        if (f < 2 && !n) return a(g);
        let F = o.exit("strikethroughSequenceTemporary"),
          d = $t(g);
        return ((F._open = !d || (d === 2 && !!v)), (F._close = !v || (v === 2 && !!d)), u(g));
      }
    }
  }
  var yu = class {
    constructor() {
      this.map = [];
    }
    add(t, n, r) {
      ME(this, t, n, r);
    }
    consume(t) {
      if (
        (this.map.sort(function (l, o) {
          return l[0] - o[0];
        }),
        this.map.length === 0)
      )
        return;
      let n = this.map.length,
        r = [];
      for (; n > 0; )
        ((n -= 1),
          r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]),
          (t.length = this.map[n][0]));
      (r.push(t.slice()), (t.length = 0));
      let i = r.pop();
      for (; i; ) {
        for (let l of i) t.push(l);
        i = r.pop();
      }
      this.map.length = 0;
    }
  };
  function ME(e, t, n, r) {
    let i = 0;
    if (!(n === 0 && r.length === 0)) {
      for (; i < e.map.length; ) {
        if (e.map[i][0] === t) {
          ((e.map[i][1] += n), e.map[i][2].push(...r));
          return;
        }
        i += 1;
      }
      e.map.push([t, n, r]);
    }
  }
  function f0(e, t) {
    let n = !1,
      r = [];
    for (; t < e.length; ) {
      let i = e[t];
      if (n) {
        if (i[0] === "enter")
          i[1].type === "tableContent" &&
            r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
        else if (i[1].type === "tableContent") {
          if (e[t - 1][1].type === "tableDelimiterMarker") {
            let l = r.length - 1;
            r[l] = r[l] === "left" ? "center" : "right";
          }
        } else if (i[1].type === "tableDelimiterRow") break;
      } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
      t += 1;
    }
    return r;
  }
  function Sf() {
    return { flow: { null: { name: "table", tokenize: bE, resolveAll: jE } } };
  }
  function bE(e, t, n) {
    let r = this,
      i = 0,
      l = 0,
      o;
    return u;
    function u(D) {
      let X = r.events.length - 1;
      for (; X > -1; ) {
        let j = r.events[X][1].type;
        if (j === "lineEnding" || j === "linePrefix") X--;
        else break;
      }
      let Q = X > -1 ? r.events[X][1].type : null,
        B = Q === "tableHead" || Q === "tableRow" ? w : a;
      return B === w && r.parser.lazy[r.now().line] ? n(D) : B(D);
    }
    function a(D) {
      return (e.enter("tableHead"), e.enter("tableRow"), s(D));
    }
    function s(D) {
      return (D === 124 || ((o = !0), (l += 1)), c(D));
    }
    function c(D) {
      return D === null
        ? n(D)
        : _(D)
          ? l > 1
            ? ((l = 0),
              (r.interrupt = !0),
              e.exit("tableRow"),
              e.enter("lineEnding"),
              e.consume(D),
              e.exit("lineEnding"),
              m)
            : n(D)
          : N(D)
            ? R(e, c, "whitespace")(D)
            : ((l += 1),
              o && ((o = !1), (i += 1)),
              D === 124
                ? (e.enter("tableCellDivider"),
                  e.consume(D),
                  e.exit("tableCellDivider"),
                  (o = !0),
                  c)
                : (e.enter("data"), f(D)));
    }
    function f(D) {
      return D === null || D === 124 || H(D)
        ? (e.exit("data"), c(D))
        : (e.consume(D), D === 92 ? p : f);
    }
    function p(D) {
      return D === 92 || D === 124 ? (e.consume(D), f) : f(D);
    }
    function m(D) {
      return (
        (r.interrupt = !1),
        r.parser.lazy[r.now().line]
          ? n(D)
          : (e.enter("tableDelimiterRow"),
            (o = !1),
            N(D)
              ? R(
                  e,
                  g,
                  "linePrefix",
                  r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
                )(D)
              : g(D))
      );
    }
    function g(D) {
      return D === 45 || D === 58
        ? F(D)
        : D === 124
          ? ((o = !0), e.enter("tableCellDivider"), e.consume(D), e.exit("tableCellDivider"), v)
          : S(D);
    }
    function v(D) {
      return N(D) ? R(e, F, "whitespace")(D) : F(D);
    }
    function F(D) {
      return D === 58
        ? ((l += 1),
          (o = !0),
          e.enter("tableDelimiterMarker"),
          e.consume(D),
          e.exit("tableDelimiterMarker"),
          d)
        : D === 45
          ? ((l += 1), d(D))
          : D === null || _(D)
            ? E(D)
            : S(D);
    }
    function d(D) {
      return D === 45 ? (e.enter("tableDelimiterFiller"), h(D)) : S(D);
    }
    function h(D) {
      return D === 45
        ? (e.consume(D), h)
        : D === 58
          ? ((o = !0),
            e.exit("tableDelimiterFiller"),
            e.enter("tableDelimiterMarker"),
            e.consume(D),
            e.exit("tableDelimiterMarker"),
            y)
          : (e.exit("tableDelimiterFiller"), y(D));
    }
    function y(D) {
      return N(D) ? R(e, E, "whitespace")(D) : E(D);
    }
    function E(D) {
      return D === 124
        ? g(D)
        : D === null || _(D)
          ? !o || i !== l
            ? S(D)
            : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(D))
          : S(D);
    }
    function S(D) {
      return n(D);
    }
    function w(D) {
      return (e.enter("tableRow"), P(D));
    }
    function P(D) {
      return D === 124
        ? (e.enter("tableCellDivider"), e.consume(D), e.exit("tableCellDivider"), P)
        : D === null || _(D)
          ? (e.exit("tableRow"), t(D))
          : N(D)
            ? R(e, P, "whitespace")(D)
            : (e.enter("data"), L(D));
    }
    function L(D) {
      return D === null || D === 124 || H(D)
        ? (e.exit("data"), P(D))
        : (e.consume(D), D === 92 ? O : L);
    }
    function O(D) {
      return D === 92 || D === 124 ? (e.consume(D), L) : L(D);
    }
  }
  function jE(e, t) {
    let n = -1,
      r = !0,
      i = 0,
      l = [0, 0, 0, 0],
      o = [0, 0, 0, 0],
      u = !1,
      a = 0,
      s,
      c,
      f,
      p = new yu();
    for (; ++n < e.length; ) {
      let m = e[n],
        g = m[1];
      m[0] === "enter"
        ? g.type === "tableHead"
          ? ((u = !1),
            a !== 0 && (p0(p, t, a, s, c), (c = void 0), (a = 0)),
            (s = {
              type: "table",
              start: Object.assign({}, g.start),
              end: Object.assign({}, g.end),
            }),
            p.add(n, 0, [["enter", s, t]]))
          : g.type === "tableRow" || g.type === "tableDelimiterRow"
            ? ((r = !0),
              (f = void 0),
              (l = [0, 0, 0, 0]),
              (o = [0, n + 1, 0, 0]),
              u &&
                ((u = !1),
                (c = {
                  type: "tableBody",
                  start: Object.assign({}, g.start),
                  end: Object.assign({}, g.end),
                }),
                p.add(n, 0, [["enter", c, t]])),
              (i = g.type === "tableDelimiterRow" ? 2 : c ? 3 : 1))
            : i &&
                (g.type === "data" ||
                  g.type === "tableDelimiterMarker" ||
                  g.type === "tableDelimiterFiller")
              ? ((r = !1),
                o[2] === 0 &&
                  (l[1] !== 0 &&
                    ((o[0] = o[1]), (f = ku(p, t, l, i, void 0, f)), (l = [0, 0, 0, 0])),
                  (o[2] = n)))
              : g.type === "tableCellDivider" &&
                (r
                  ? (r = !1)
                  : (l[1] !== 0 && ((o[0] = o[1]), (f = ku(p, t, l, i, void 0, f))),
                    (l = o),
                    (o = [l[1], n, 0, 0])))
        : g.type === "tableHead"
          ? ((u = !0), (a = n))
          : g.type === "tableRow" || g.type === "tableDelimiterRow"
            ? ((a = n),
              l[1] !== 0
                ? ((o[0] = o[1]), (f = ku(p, t, l, i, n, f)))
                : o[1] !== 0 && (f = ku(p, t, o, i, n, f)),
              (i = 0))
            : i &&
              (g.type === "data" ||
                g.type === "tableDelimiterMarker" ||
                g.type === "tableDelimiterFiller") &&
              (o[3] = n);
    }
    for (a !== 0 && p0(p, t, a, s, c), p.consume(t.events), n = -1; ++n < t.events.length; ) {
      let m = t.events[n];
      m[0] === "enter" && m[1].type === "table" && (m[1]._align = f0(t.events, n));
    }
    return e;
  }
  function ku(e, t, n, r, i, l) {
    let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData",
      u = "tableContent";
    n[0] !== 0 &&
      ((l.end = Object.assign({}, Vr(t.events, n[0]))), e.add(n[0], 0, [["exit", l, t]]));
    let a = Vr(t.events, n[1]);
    if (
      ((l = { type: o, start: Object.assign({}, a), end: Object.assign({}, a) }),
      e.add(n[1], 0, [["enter", l, t]]),
      n[2] !== 0)
    ) {
      let s = Vr(t.events, n[2]),
        c = Vr(t.events, n[3]),
        f = { type: u, start: Object.assign({}, s), end: Object.assign({}, c) };
      if ((e.add(n[2], 0, [["enter", f, t]]), r !== 2)) {
        let p = t.events[n[2]],
          m = t.events[n[3]];
        if (
          ((p[1].end = Object.assign({}, m[1].end)),
          (p[1].type = "chunkText"),
          (p[1].contentType = "text"),
          n[3] > n[2] + 1)
        ) {
          let g = n[2] + 1,
            v = n[3] - n[2] - 1;
          e.add(g, v, []);
        }
      }
      e.add(n[3] + 1, 0, [["exit", f, t]]);
    }
    return (
      i !== void 0 &&
        ((l.end = Object.assign({}, Vr(t.events, i))), e.add(i, 0, [["exit", l, t]]), (l = void 0)),
      l
    );
  }
  function p0(e, t, n, r, i) {
    let l = [],
      o = Vr(t.events, n);
    (i && ((i.end = Object.assign({}, o)), l.push(["exit", i, t])),
      (r.end = Object.assign({}, o)),
      l.push(["exit", r, t]),
      e.add(n + 1, 0, l));
  }
  function Vr(e, t) {
    let n = e[t],
      r = n[0] === "enter" ? "start" : "end";
    return n[1][r];
  }
  var UE = { name: "tasklistCheck", tokenize: HE };
  function Af() {
    return { text: { 91: UE } };
  }
  function HE(e, t, n) {
    let r = this;
    return i;
    function i(a) {
      return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
        ? n(a)
        : (e.enter("taskListCheck"),
          e.enter("taskListCheckMarker"),
          e.consume(a),
          e.exit("taskListCheckMarker"),
          l);
    }
    function l(a) {
      return H(a)
        ? (e.enter("taskListCheckValueUnchecked"),
          e.consume(a),
          e.exit("taskListCheckValueUnchecked"),
          o)
        : a === 88 || a === 120
          ? (e.enter("taskListCheckValueChecked"),
            e.consume(a),
            e.exit("taskListCheckValueChecked"),
            o)
          : n(a);
    }
    function o(a) {
      return a === 93
        ? (e.enter("taskListCheckMarker"),
          e.consume(a),
          e.exit("taskListCheckMarker"),
          e.exit("taskListCheck"),
          u)
        : n(a);
    }
    function u(a) {
      return _(a) ? t(a) : N(a) ? e.check({ tokenize: VE }, t, n)(a) : n(a);
    }
  }
  function VE(e, t, n) {
    return R(e, r, "whitespace");
    function r(i) {
      return i === null ? n(i) : t(i);
    }
  }
  function m0(e) {
    return Wo([Df(), Cf(), Ff(e), Sf(), Af()]);
  }
  var WE = {};
  function xu(e) {
    let t = this,
      n = e || WE,
      r = t.data(),
      i = r.micromarkExtensions || (r.micromarkExtensions = []),
      l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
      o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
    (i.push(m0(n)), l.push(xf()), o.push(vf(n)));
  }
  var $E = { Stringify: 1, BeforeStream: 2, Stream: 3 },
    Ge = (e, t) => {
      let n = new String(e);
      return ((n.isEscaped = !0), (n.callbacks = t), n);
    },
    QE = /[&<>'"]/,
    vu = async (e, t) => {
      let n = "";
      t || (t = []);
      let r = await Promise.all(e);
      for (let i = r.length - 1; (n += r[i]), i--, !(i < 0); i--) {
        let l = r[i];
        typeof l == "object" && t.push(...(l.callbacks || []));
        let o = l.isEscaped;
        if (
          ((l = await (typeof l == "object" ? l.toString() : l)),
          typeof l == "object" && t.push(...(l.callbacks || [])),
          l.isEscaped ?? o)
        )
          n += l;
        else {
          let u = [n];
          (Kt(l, u), (n = u[0]));
        }
      }
      return Ge(n, t);
    },
    Kt = (e, t) => {
      let n = e.search(QE);
      if (n === -1) {
        t[0] += e;
        return;
      }
      let r,
        i,
        l = 0;
      for (i = n; i < e.length; i++) {
        switch (e.charCodeAt(i)) {
          case 34:
            r = "&quot;";
            break;
          case 39:
            r = "&#39;";
            break;
          case 38:
            r = "&amp;";
            break;
          case 60:
            r = "&lt;";
            break;
          case 62:
            r = "&gt;";
            break;
          default:
            continue;
        }
        ((t[0] += e.substring(l, i) + r), (l = i + 1));
      }
      t[0] += e.substring(l, i);
    },
    Tf = (e) => {
      let t = e.callbacks;
      if (!t?.length) return e;
      let n = [e],
        r = {};
      return (t.forEach((i) => i({ phase: $E.Stringify, buffer: n, context: r })), n[0]);
    };
  var wu = Symbol("RENDERER"),
    d0 = Symbol("ERROR_HANDLER");
  var h0 = Symbol("INTERNAL");
  var il = Symbol("PERMALINK");
  var Pf = (e) => ((e[h0] = !0), e);
  var g0 =
    (e) =>
    ({ value: t, children: n }) => {
      if (!n) return;
      let r = {
        children: [
          {
            tag: Pf(() => {
              e.push(t);
            }),
            props: {},
          },
        ],
      };
      (Array.isArray(n) ? r.children.push(...n.flat()) : r.children.push(n),
        r.children.push({
          tag: Pf(() => {
            e.pop();
          }),
          props: {},
        }));
      let i = { tag: "", props: r, type: "" };
      return (
        (i[d0] = (l) => {
          throw (e.pop(), l);
        }),
        i
      );
    };
  var ll = [],
    y0 = (e) => {
      let t = [e],
        n = (r) => {
          t.push(r.value);
          let i;
          try {
            i = r.children
              ? (Array.isArray(r.children) ? new k0("", {}, r.children) : r.children).toString()
              : "";
          } catch (l) {
            throw (t.pop(), l);
          }
          return i instanceof Promise
            ? i.finally(() => t.pop()).then((l) => Ge(l, l.callbacks))
            : (t.pop(), Ge(i));
        };
      return ((n.values = t), (n.Provider = n), (n[wu] = g0(t)), ll.push(n), n);
    },
    Wr = (e) => e.values.at(-1);
  var x0 = {
      title: [],
      script: ["src"],
      style: ["data-href"],
      link: ["href"],
      meta: ["name", "httpEquiv", "charset", "itemProp"],
    },
    If = {},
    v0 = "data-precedence";
  var sl = {};
  Au(sl, {
    button: () => eC,
    form: () => JE,
    input: () => ZE,
    link: () => YE,
    meta: () => GE,
    script: () => KE,
    style: () => XE,
    title: () => qE,
  });
  var ol = (e) => (Array.isArray(e) ? e : [e]);
  var w0 = new WeakMap(),
    D0 =
      (e, t, n, r) =>
      ({ buffer: i, context: l }) => {
        if (!i) return;
        let o = w0.get(l) || {};
        w0.set(l, o);
        let u = o[e] || (o[e] = []),
          a = !1,
          s = x0[e];
        if (s.length > 0) {
          e: for (let [, c] of u)
            for (let f of s)
              if ((c?.[f] ?? null) === n?.[f]) {
                a = !0;
                break e;
              }
        }
        if (
          (a
            ? (i[0] = i[0].replaceAll(t, ""))
            : s.length > 0
              ? u.push([t, n, r])
              : u.unshift([t, n, r]),
          i[0].indexOf("</head>") !== -1)
        ) {
          let c;
          if (r === void 0) c = u.map(([f]) => f);
          else {
            let f = [];
            c = u
              .map(([p, , m]) => {
                let g = f.indexOf(m);
                return (g === -1 && (f.push(m), (g = f.length - 1)), [p, g]);
              })
              .sort((p, m) => p[1] - m[1])
              .map(([p]) => p);
          }
          (c.forEach((f) => {
            i[0] = i[0].replaceAll(f, "");
          }),
            (i[0] = i[0].replace(/(?=<\/head>)/, c.join(""))));
        }
      },
    ul = (e, t, n) => Ge(new at(e, n, ol(t ?? [])).toString()),
    al = (e, t, n, r) => {
      if ("itemProp" in n) return ul(e, t, n);
      let { precedence: i, blocking: l, ...o } = n;
      ((i = r ? (i ?? "") : void 0), r && (o[v0] = i));
      let u = new at(e, o, ol(t || [])).toString();
      return u instanceof Promise
        ? u.then((a) => Ge(u, [...(a.callbacks || []), D0(e, a, o, i)]))
        : Ge(u, [D0(e, u, o, i)]);
    },
    qE = ({ children: e, ...t }) => {
      let n = Du();
      if (n) {
        let r = Wr(n);
        if (r === "svg" || r === "head") return new at("title", t, ol(e ?? []));
      }
      return al("title", e, t, !1);
    },
    KE = ({ children: e, ...t }) => {
      let n = Du();
      return ["src", "async"].some((r) => !t[r]) || (n && Wr(n) === "head")
        ? ul("script", e, t)
        : al("script", e, t, !1);
    },
    XE = ({ children: e, ...t }) =>
      ["href", "precedence"].every((n) => n in t)
        ? ((t["data-href"] = t.href), delete t.href, al("style", e, t, !0))
        : ul("style", e, t),
    YE = ({ children: e, ...t }) =>
      ["onLoad", "onError"].some((n) => n in t) ||
      (t.rel === "stylesheet" && (!("precedence" in t) || "disabled" in t))
        ? ul("link", e, t)
        : al("link", e, t, "precedence" in t),
    GE = ({ children: e, ...t }) => {
      let n = Du();
      return n && Wr(n) === "head" ? ul("meta", e, t) : al("meta", e, t, !1);
    },
    E0 = (e, { children: t, ...n }) => new at(e, n, ol(t ?? [])),
    JE = (e) => (
      typeof e.action == "function" && (e.action = il in e.action ? e.action[il] : void 0),
      E0("form", e)
    ),
    C0 = (e, t) => (
      typeof t.formAction == "function" &&
        (t.formAction = il in t.formAction ? t.formAction[il] : void 0),
      E0(e, t)
    ),
    ZE = (e) => C0("input", e),
    eC = (e) => C0("button", e);
  var tC = new Map([
      ["className", "class"],
      ["htmlFor", "for"],
      ["crossOrigin", "crossorigin"],
      ["httpEquiv", "http-equiv"],
      ["itemProp", "itemprop"],
      ["fetchPriority", "fetchpriority"],
      ["noModule", "nomodule"],
      ["formAction", "formaction"],
    ]),
    Lf = (e) => tC.get(e) || e,
    _f = (e, t) => {
      for (let [n, r] of Object.entries(e)) {
        let i =
          n[0] === "-" || !/[A-Z]/.test(n) ? n : n.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`);
        t(
          i,
          r == null
            ? null
            : typeof r == "number"
              ? i.match(
                  /^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/,
                )
                ? `${r}`
                : `${r}px`
              : r,
        );
      }
    };
  var cl = void 0,
    Du = () => cl,
    nC = (e) =>
      /[A-Z]/.test(e) &&
      e.match(
        /^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/,
      )
        ? e.replace(/([A-Z])/g, "-$1").toLowerCase()
        : e,
    rC = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ],
    iC = [
      "allowfullscreen",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "download",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "itemscope",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected",
    ],
    Bf = (e, t) => {
      for (let n = 0, r = e.length; n < r; n++) {
        let i = e[n];
        if (typeof i == "string") Kt(i, t);
        else {
          if (typeof i == "boolean" || i === null || i === void 0) continue;
          i instanceof at
            ? i.toStringToBuffer(t)
            : typeof i == "number" || i.isEscaped
              ? (t[0] += i)
              : i instanceof Promise
                ? t.unshift("", i)
                : Bf(i, t);
        }
      }
    },
    at = class {
      constructor(e, t, n) {
        An(this, "tag");
        An(this, "props");
        An(this, "key");
        An(this, "children");
        An(this, "isEscaped", !0);
        An(this, "localContexts");
        ((this.tag = e), (this.props = t), (this.children = n));
      }
      get type() {
        return this.tag;
      }
      get ref() {
        return this.props.ref || null;
      }
      toString() {
        let e = [""];
        this.localContexts?.forEach(([t, n]) => {
          t.values.push(n);
        });
        try {
          this.toStringToBuffer(e);
        } finally {
          this.localContexts?.forEach(([t]) => {
            t.values.pop();
          });
        }
        return e.length === 1
          ? "callbacks" in e
            ? Tf(Ge(e[0], e.callbacks)).toString()
            : e[0]
          : vu(e, e.callbacks);
      }
      toStringToBuffer(e) {
        let t = this.tag,
          n = this.props,
          { children: r } = this;
        e[0] += `<${t}`;
        let i = cl && Wr(cl) === "svg" ? (l) => nC(Lf(l)) : (l) => Lf(l);
        for (let [l, o] of Object.entries(n))
          if (((l = i(l)), l !== "children")) {
            if (l === "style" && typeof o == "object") {
              let u = "";
              (_f(o, (a, s) => {
                s != null && (u += `${u ? ";" : ""}${a}:${s}`);
              }),
                (e[0] += ' style="'),
                Kt(u, e),
                (e[0] += '"'));
            } else if (typeof o == "string") ((e[0] += ` ${l}="`), Kt(o, e), (e[0] += '"'));
            else if (o != null)
              if (typeof o == "number" || o.isEscaped) e[0] += ` ${l}="${o}"`;
              else if (typeof o == "boolean" && iC.includes(l)) o && (e[0] += ` ${l}=""`);
              else if (l === "dangerouslySetInnerHTML") {
                if (r.length > 0)
                  throw new Error(
                    "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",
                  );
                r = [Ge(o.__html)];
              } else if (o instanceof Promise) ((e[0] += ` ${l}="`), e.unshift('"', o));
              else if (typeof o == "function") {
                if (!l.startsWith("on") && l !== "ref")
                  throw new Error(`Invalid prop '${l}' of type 'function' supplied to '${t}'.`);
              } else ((e[0] += ` ${l}="`), Kt(o.toString(), e), (e[0] += '"'));
          }
        if (rC.includes(t) && r.length === 0) {
          e[0] += "/>";
          return;
        }
        ((e[0] += ">"), Bf(r, e), (e[0] += `</${t}>`));
      }
    },
    zf = class extends at {
      toStringToBuffer(e) {
        let { children: t } = this,
          n = { ...this.props };
        t.length && (n.children = t.length === 1 ? t[0] : t);
        let r = this.tag.call(null, n);
        if (!(typeof r == "boolean" || r == null))
          if (r instanceof Promise)
            if (ll.length === 0) e.unshift("", r);
            else {
              let i = ll.map((l) => [l, l.values.at(-1)]);
              e.unshift(
                "",
                r.then((l) => (l instanceof at && (l.localContexts = i), l)),
              );
            }
          else
            r instanceof at
              ? r.toStringToBuffer(e)
              : typeof r == "number" || r.isEscaped
                ? ((e[0] += r),
                  r.callbacks &&
                    (e.callbacks || (e.callbacks = []), e.callbacks.push(...r.callbacks)))
                : Kt(r, e);
      }
    },
    k0 = class extends at {
      toStringToBuffer(e) {
        Bf(this.children, e);
      }
    };
  var F0 = !1,
    Eu = (e, t, n) => {
      if (!F0) {
        for (let r in If) sl[r][wu] = If[r];
        F0 = !0;
      }
      return typeof e == "function"
        ? new zf(e, t, n)
        : sl[e]
          ? new zf(sl[e], t, n)
          : e === "svg" || e === "head"
            ? (cl || (cl = y0("")), new at(e, t, [new zf(cl, { value: e }, n)]))
            : new at(e, t, n);
    };
  function $r(e, t, n) {
    let r;
    if (!t || !("children" in t)) r = Eu(e, t, []);
    else {
      let i = t.children;
      r = Array.isArray(i) ? Eu(e, t, i) : Eu(e, t, [i]);
    }
    return ((r.key = n), r);
  }
  function oC() {
    let e = document.querySelectorAll("#toc-nav a");
    if (!e.length) return;
    let t = Array.from(e)
      .map((l) => {
        let o = decodeURIComponent(l.getAttribute("href").slice(1));
        return document.getElementById(o);
      })
      .filter((l) => l !== null);
    if (!t.length) return;
    let n = null;
    function r(l) {
      (n && (n.style.cssText = ""),
        (n = l),
        (l.style.color = "#667eea"),
        (l.style.background = "#ededf8"),
        (l.style.fontWeight = "600"));
    }
    let i = new IntersectionObserver(
      (l) => {
        for (let o of l)
          if (o.isIntersecting) {
            let u = document.querySelector(`#toc-nav a[href="#${o.target.id}"]`);
            u && r(u);
          }
      },
      { rootMargin: "-5% 0px -80% 0px" },
    );
    t.forEach((l) => i.observe(l));
  }
  function uC({ content: e }) {
    let t = (0, Cu.useRef)(null);
    return (
      (0, Cu.useEffect)(() => {
        if (!t.current) return;
        let n = Array.from(t.current.querySelectorAll("h1, h2, h3, h4, h5, h6"));
        if (!n.length) return;
        let r = document.getElementById("toc-nav"),
          i = document.getElementById("toc-sidebar");
        if (
          (r &&
            (r.innerHTML = n
              .map(
                (l) =>
                  `<li style="padding-left:${(parseInt(l.tagName[1]) - 1) * 0.75}rem"><a href="#${l.id}" style="display:block;padding:0.3rem 0.5rem;border-radius:4px;text-decoration:none;font-size:0.835rem;line-height:1.4;color:#555;">${l.textContent}</a></li>`,
              )
              .join("")),
          i)
        ) {
          i.removeAttribute("style");
          let l = document.getElementById("post-wrapper");
          l &&
            ((l.style.display = "grid"),
            (l.style.gridTemplateColumns = "1fr 260px"),
            (l.style.gap = "3rem"),
            (l.style.alignItems = "start"),
            (l.style.maxWidth = "none"));
        }
        oC();
      }, []),
      $r("div", {
        ref: t,
        children: $r(Uc, { remarkPlugins: [xu], rehypePlugins: [hu], children: e }),
      })
    );
  }
  var S0 = document.getElementById("markdown-raw"),
    A0 = document.getElementById("post-content");
  if (S0 && A0) {
    let e = JSON.parse(S0.textContent ?? '""');
    T0.default.createRoot(A0).render($r(uC, { content: e }));
  }
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
