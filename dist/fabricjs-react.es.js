import ke, { useState as B, useEffect as Ae, useRef as Se } from "react";
import { fabric as $ } from "fabric-pure-browser";
const Y = "#000000", re = "rgba(255, 255, 255, 0.0)", br = {
  radius: 20,
  left: 100,
  top: 100,
  fill: re,
  stroke: Y
}, Er = {
  left: 100,
  top: 100,
  fill: re,
  stroke: Y,
  width: 40,
  height: 40,
  angle: 0
}, we = {
  points: [50, 100, 200, 200],
  options: {
    left: 170,
    top: 150,
    stroke: Y
  }
}, ee = {
  type: "text",
  left: 100,
  top: 100,
  fontSize: 16,
  fontFamily: "Arial",
  fill: Y
}, gr = (i, h, m, y, p, _) => ({
  canvas: i,
  addCircle: () => {
    const a = new $.Circle({
      ...br,
      fill: h,
      stroke: m
    });
    i.add(a);
  },
  addRectangle: () => {
    const a = new $.Rect({
      ...Er,
      fill: h,
      stroke: m
    });
    i.add(a);
  },
  addLine: () => {
    const a = new $.Line(we.points, {
      ...we.options,
      stroke: m
    });
    i.add(a);
  },
  addText: (a) => {
    const c = new $.Textbox(a, {
      ...ee,
      fill: m
    });
    c.set({
      text: a
    }), i.add(c);
  },
  updateText: (a) => {
    const c = i.getActiveObjects();
    c.length && c[0].type === ee.type && (c[0].set({
      text: a
    }), i.renderAll());
  },
  deleteAll: () => {
    i.getObjects().forEach((a) => i.remove(a)), i.discardActiveObject(), i.renderAll();
  },
  deleteSelected: () => {
    i.getActiveObjects().forEach((a) => i.remove(a)), i.discardActiveObject(), i.renderAll();
  },
  fillColor: h,
  strokeColor: m,
  setFillColor: (a) => {
    y(a), i.getActiveObjects().forEach((c) => c.set({
      fill: a
    })), i.renderAll();
  },
  setStrokeColor: (a) => {
    p(a), i.getActiveObjects().forEach((c) => {
      if (c.type === ee.type) {
        c.set({
          fill: a
        });
        return;
      }
      c.set({
        stroke: a
      });
    }), i.renderAll();
  },
  zoomIn: () => {
    const a = i.getZoom();
    i.setZoom(a / _);
  },
  zoomOut: () => {
    const a = i.getZoom();
    i.setZoom(a * _);
  }
}), _r = (i = {}) => {
  const h = i.scaleStep || 0.5, {
    defaultFillColor: m,
    defaultStrokeColor: y
  } = i, [p, _] = B(null), [a, c] = B(m || re), [f, w] = B(y || Y), [b, R] = B([]);
  return Ae(() => {
    p && ((j) => {
      j.on("selection:cleared", () => {
        R([]);
      }), j.on("selection:created", (x) => {
        R(x.selected);
      }), j.on("selection:updated", (x) => {
        R(x.selected);
      });
    })(p);
  }, [p]), {
    selectedObjects: b,
    onReady: (O) => {
      console.log("Fabric canvas ready"), _(O);
    },
    editor: p ? gr(p, a, f, c, w, h) : void 0
  };
};
var Fe = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function hr() {
  if (je)
    return L;
  je = 1;
  var i = ke, h = Symbol.for("react.element"), m = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, p = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, f, w) {
    var b, R = {}, O = null, j = null;
    w !== void 0 && (O = "" + w), f.key !== void 0 && (O = "" + f.key), f.ref !== void 0 && (j = f.ref);
    for (b in f)
      y.call(f, b) && !_.hasOwnProperty(b) && (R[b] = f[b]);
    if (c && c.defaultProps)
      for (b in f = c.defaultProps, f)
        R[b] === void 0 && (R[b] = f[b]);
    return { $$typeof: h, type: c, key: O, ref: j, props: R, _owner: p.current };
  }
  return L.Fragment = m, L.jsx = a, L.jsxs = a, L;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function mr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var i = ke, h = Symbol.for("react.element"), m = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), x = Symbol.iterator, De = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[De];
      return typeof r == "function" ? r : null;
    }
    var k = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var We = !1, $e = !1, Ye = !1, Ne = !1, Ve = !1, te;
    te = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === _ || Ve || e === p || e === w || e === b || Ne || e === j || We || $e || Ye || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === R || e.$$typeof === a || e.$$typeof === c || e.$$typeof === f || e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case m:
          return "Portal";
        case _:
          return "Profiler";
        case p:
          return "StrictMode";
        case w:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return ne(r) + ".Consumer";
          case a:
            var t = e;
            return ne(t._context) + ".Provider";
          case f:
            return Ue(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case O: {
            var u = e, l = u._payload, s = u._init;
            try {
              return C(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, ae, oe, ie, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function ze() {
      {
        if (D === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Be() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ae
            }),
            info: P({}, e, {
              value: oe
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: se
            }),
            group: P({}, e, {
              value: ue
            }),
            groupCollapsed: P({}, e, {
              value: le
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        D < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, q;
    function N(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, V;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Je();
    }
    function de(e, r) {
      if (!e || G)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = J.current, J.current = null, ze();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (S) {
              n = S;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var o = S.stack.split(`
`), g = n.stack.split(`
`), d = o.length - 1, v = g.length - 1; d >= 1 && v >= 0 && o[d] !== g[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (o[d] !== g[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || o[d] !== g[v]) {
                    var T = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, T), T;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = l, Be(), Error.prepareStackTrace = u;
      }
      var F = e ? e.displayName || e.name : "", Ce = F ? N(F) : "";
      return typeof e == "function" && V.set(e, Ce), Ce;
    }
    function qe(e, r, t) {
      return de(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ge(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case w:
          return N("Suspense");
        case b:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return qe(e.render);
          case R:
            return M(e.type, r, t);
          case O: {
            var n = e, u = n._payload, l = n._init;
            try {
              return M(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ve = {}, pe = k.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function He(e, r, t, n, u) {
      {
        var l = Function.call.bind(U);
        for (var s in e)
          if (l(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              o = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (z(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof o), z(null)), o instanceof Error && !(o.message in ve) && (ve[o.message] = !0, z(u), E("Failed %s type: %s", t, o.message), z(null));
          }
      }
    }
    var Ke = Array.isArray;
    function H(e) {
      return Ke(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Xe(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), be(e);
    }
    var I = k.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, he, K;
    K = {};
    function er(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = C(I.current.type);
        K[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(I.current.type), e.ref), K[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          he || (he = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, n, u, l, s) {
      var o = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: s,
        _owner: l
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ir(e, r, t, n, u) {
      {
        var l, s = {}, o = null, g = null;
        t !== void 0 && (Ee(t), o = "" + t), rr(r) && (Ee(r.key), o = "" + r.key), er(r) && (g = r.ref, tr(r, u));
        for (l in r)
          U.call(r, l) && !Qe.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            s[l] === void 0 && (s[l] = d[l]);
        }
        if (o || g) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && nr(s, v), g && ar(s, v);
        }
        return or(e, o, g, u, n, I.current, s);
      }
    }
    var Z = k.ReactCurrentOwner, me = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function ye() {
      {
        if (Z.current) {
          var e = C(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ur(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + C(e._owner.type) + "."), A(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && _e(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Ie(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), s; !(s = l.next()).done; )
              Q(s.value) && _e(s.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var u = C(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Oe(e, r, t, n, u, l) {
      {
        var s = Me(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = sr(u);
          g ? o += g : o += ye();
          var d;
          e === null ? d = "null" : H(e) ? d = "array" : e !== void 0 && e.$$typeof === h ? (d = "<" + (C(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var v = ir(e, r, t, u, l);
        if (v == null)
          return v;
        if (s) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (H(T)) {
                for (var F = 0; F < T.length; F++)
                  Te(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(T, e);
        }
        return e === y ? cr(v) : lr(v), v;
      }
    }
    function fr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var vr = dr, pr = fr;
    W.Fragment = y, W.jsx = vr, W.jsxs = pr;
  }()), W;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = hr() : i.exports = mr();
})(Fe);
const xe = Fe.exports.jsx, Tr = ({
  className: i,
  onReady: h
}) => {
  const m = Se(null), y = Se(null);
  return Ae(() => {
    const p = new $.Canvas(m.current, {
      selection: !1
    }), _ = () => {
      var c, f;
      p.setHeight(((c = y.current) == null ? void 0 : c.clientHeight) || 0), p.setWidth(((f = y.current) == null ? void 0 : f.clientWidth) || 0), p.renderAll();
    }, a = () => {
      _();
    };
    return _(), window.addEventListener("resize", a, !1), h && h(p), () => {
      p.dispose(), window.removeEventListener("resize", a);
    };
  }, []), /* @__PURE__ */ xe("div", {
    ref: y,
    className: i,
    children: /* @__PURE__ */ xe("canvas", {
      ref: m
    })
  });
};
export {
  Tr as FabricJSCanvas,
  _r as useFabricJSEditor
};
