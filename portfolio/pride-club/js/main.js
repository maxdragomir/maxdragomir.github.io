!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [], E = C.document, i = Object.getPrototypeOf, a = t.slice, g = t.concat, l = t.push, r = t.indexOf, n = {},
    o = n.toString, m = n.hasOwnProperty, s = m.toString, c = s.call(Object), v = {}, y = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    }, b = function (e) {
      return null != e && e === e.window
    }, u = {type: !0, src: !0, noModule: !0};

  function _(e, t, n) {
    var i, r = (t = t || E).createElement("script");
    if (r.text = e, n) for (i in u) n[i] && (r[i] = n[i]);
    t.head.appendChild(r).parentNode.removeChild(r)
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
  }

  var f = "3.3.1", T = function (e, t) {
    return new T.fn.init(e, t)
  }, d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function h(e) {
    var t = !!e && "length" in e && e.length, n = w(e);
    return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  T.fn = T.prototype = {
    jquery: f, constructor: T, length: 0, toArray: function () {
      return a.call(this)
    }, get: function (e) {
      return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
    }, pushStack: function (e) {
      var t = T.merge(this.constructor(), e);
      return t.prevObject = this, t
    }, each: function (e) {
      return T.each(this, e)
    }, map: function (n) {
      return this.pushStack(T.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    }, slice: function () {
      return this.pushStack(a.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: l, sort: t.sort, splice: t.splice
  }, T.extend = T.fn.extend = function () {
    var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
    for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && T.isPlainObject(n) ? n : {}, s[t] = T.extend(c, o, i)) : void 0 !== i && (s[t] = i));
    return s
  }, T.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = i(e)) || "function" == typeof (n = m.call(t, "constructor") && t.constructor) && s.call(n) === c)
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, globalEval: function (e) {
      _(e)
    }, each: function (e, t) {
      var n, i = 0;
      if (h(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(d, "")
    }, makeArray: function (e, t) {
      var n = t || [];
      return null != e && (h(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
    }, inArray: function (e, t, n) {
      return null == t ? -1 : r.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
      return e.length = r, e
    }, grep: function (e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
      return i
    }, map: function (e, t, n) {
      var i, r, o = 0, s = [];
      if (h(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r); else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
      return g.apply([], s)
    }, guid: 1, support: v
  }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var p = function (n) {
    var e, h, _, o, r, p, f, g, w, l, c, x, C, s, E, m, a, u, v, T = "sizzle" + 1 * new Date, y = n.document, S = 0,
      i = 0, d = se(), b = se(), A = se(), D = function (e, t) {
        return e === t && (c = !0), 0
      }, k = {}.hasOwnProperty, t = [], O = t.pop, I = t.push, N = t.push, j = t.slice, P = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1
      },
      L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      H = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      R = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + H + "*\\]",
      W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
      F = new RegExp(H + "+", "g"), B = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
      U = new RegExp("^" + H + "*," + H + "*"), q = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
      z = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"), $ = new RegExp(W), Y = new RegExp("^" + M + "$"),
      V = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + L + ")$", "i"),
        needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
      }, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, X = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
      J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"), ee = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, ie = function () {
        x()
      }, re = ye(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e)
      }, {dir: "parentNode", next: "legend"});
    try {
      N.apply(t = j.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
    } catch (e) {
      N = {
        apply: t.length ? function (e, t) {
          I.apply(e, j.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) ;
          e.length = n - 1
        }
      }
    }

    function oe(e, t, n, i) {
      var r, o, s, a, l, c, u, f = t && t.ownerDocument, d = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
      if (!i && ((t ? t.ownerDocument || t : y) !== C && x(t), t = t || C, E)) {
        if (11 !== d && (l = G.exec(e))) if (r = l[1]) {
          if (9 === d) {
            if (!(s = t.getElementById(r))) return n;
            if (s.id === r) return n.push(s), n
          } else if (f && (s = f.getElementById(r)) && v(t, s) && s.id === r) return n.push(s), n
        } else {
          if (l[2]) return N.apply(n, t.getElementsByTagName(e)), n;
          if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(r)), n
        }
        if (h.qsa && !A[e + " "] && (!m || !m.test(e))) {
          if (1 !== d) f = t, u = e; else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = T), o = (c = p(e)).length; o--;) c[o] = "#" + a + " " + ve(c[o]);
            u = c.join(","), f = Z.test(e) && ge(t.parentNode) || t
          }
          if (u) try {
            return N.apply(n, f.querySelectorAll(u)), n
          } catch (e) {
          } finally {
            a === T && t.removeAttribute("id")
          }
        }
      }
      return g(e.replace(B, "$1"), t, n, i)
    }

    function se() {
      var i = [];
      return function e(t, n) {
        return i.push(t + " ") > _.cacheLength && delete e[i.shift()], e[t + " "] = n
      }
    }

    function ae(e) {
      return e[T] = !0, e
    }

    function le(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function ce(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t
    }

    function ue(e, t) {
      var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }

    function fe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function de(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function he(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function pe(s) {
      return ae(function (o) {
        return o = +o, ae(function (e, t) {
          for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    for (e in h = oe.support = {}, r = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, x = oe.setDocument = function (e) {
      var t, n, i = e ? e.ownerDocument || e : y;
      return i !== C && 9 === i.nodeType && i.documentElement && (s = (C = i).documentElement, E = !r(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), h.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), h.getElementsByTagName = le(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
      }), h.getElementsByClassName = X.test(C.getElementsByClassName), h.getById = le(function (e) {
        return s.appendChild(e).id = T, !C.getElementsByName || !C.getElementsByName(T).length
      }), h.getById ? (_.filter.ID = function (e) {
        var t = e.replace(J, ee);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, _.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (_.filter.ID = function (e) {
        var n = e.replace(J, ee);
        return function (e) {
          var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n
        }
      }, _.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && E) {
          var n, i, r, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), _.find.TAG = h.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, i = [], r = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[r++];) 1 === n.nodeType && i.push(n);
          return i
        }
        return o
      }, _.find.CLASS = h.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
      }, a = [], m = [], (h.qsa = X.test(C.querySelectorAll)) && (le(function (e) {
        s.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]")
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
      })), (h.matchesSelector = X.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function (e) {
        h.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), a.push("!=", W)
      }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = X.test(s.compareDocumentPosition), v = t || X.test(s.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      }, D = t ? function (e, t) {
        if (e === t) return c = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return c = !0, 0;
        var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
        if (!r || !o) return e === C ? -1 : t === C ? 1 : r ? -1 : o ? 1 : l ? P(l, e) - P(l, t) : 0;
        if (r === o) return ue(e, t);
        for (n = e; n = n.parentNode;) s.unshift(n);
        for (n = t; n = n.parentNode;) a.unshift(n);
        for (; s[i] === a[i];) i++;
        return i ? ue(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
      }), C
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t)
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && x(e), t = t.replace(z, "='$1']"), h.matchesSelector && E && !A[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
        var n = u.call(e, t);
        if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (e) {
      }
      return 0 < oe(t, C, null, [e]).length
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && x(e), v(e, t)
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== C && x(e);
      var n = _.attrHandle[t.toLowerCase()], i = n && k.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== i ? i : h.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne)
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, oe.uniqueSort = function (e) {
      var t, n = [], i = 0, r = 0;
      if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(D), c) {
        for (; t = e[r++];) t === e[r] && (i = n.push(r));
        for (; i--;) e.splice(n[i], 1)
      }
      return l = null, e
    }, o = oe.getText = function (e) {
      var t, n = "", i = 0, r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
        } else if (3 === r || 4 === r) return e.nodeValue
      } else for (; t = e[i++];) n += o(t);
      return n
    }, (_ = oe.selectors = {
      cacheLength: 50,
      createPseudo: ae,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(J, ee).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = d[e + " "];
          return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && d(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        }, ATTR: function (n, i, r) {
          return function (e) {
            var t = oe.attr(e, n);
            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(F, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
          }
        }, CHILD: function (p, e, t, g, m) {
          var v = "nth" !== p.slice(0, 3), y = "last" !== p.slice(-4), b = "of-type" === e;
          return 1 === g && 0 === m ? function (e) {
            return !!e.parentNode
          } : function (e, t, n) {
            var i, r, o, s, a, l, c = v !== y ? "nextSibling" : "previousSibling", u = e.parentNode,
              f = b && e.nodeName.toLowerCase(), d = !n && !b, h = !1;
            if (u) {
              if (v) {
                for (; c;) {
                  for (s = e; s = s[c];) if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                  l = c = "only" === p && !l && "nextSibling"
                }
                return !0
              }
              if (l = [y ? u.firstChild : u.lastChild], y && d) {
                for (h = (a = (i = (r = (o = (s = u)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (h = a = 0) || l.pop();) if (1 === s.nodeType && ++h && s === e) {
                  r[p] = [S, a, h];
                  break
                }
              } else if (d && (h = a = (i = (r = (o = (s = e)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h) for (; (s = ++a && s && s[c] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((r = (o = s[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, h]), s !== e));) ;
              return (h -= m) === g || h % g == 0 && 0 <= h / g
            }
          }
        }, PSEUDO: function (e, o) {
          var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return s[T] ? s(o) : 1 < s.length ? (t = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, t) {
            for (var n, i = s(e, o), r = i.length; r--;) e[n = P(e, i[r])] = !(t[n] = i[r])
          }) : function (e) {
            return s(e, 0, t)
          }) : s
        }
      },
      pseudos: {
        not: ae(function (e) {
          var i = [], r = [], a = f(e.replace(B, "$1"));
          return a[T] ? ae(function (e, t, n, i) {
            for (var r, o = a(e, null, i, []), s = e.length; s--;) (r = o[s]) && (e[s] = !(t[s] = r))
          }) : function (e, t, n) {
            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
          }
        }), has: ae(function (t) {
          return function (e) {
            return 0 < oe(t, e).length
          }
        }), contains: ae(function (t) {
          return t = t.replace(J, ee), function (e) {
            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
          }
        }), lang: ae(function (n) {
          return Y.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(J, ee).toLowerCase(), function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1
          }
        }), target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id
        }, root: function (e) {
          return e === s
        }, focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: he(!1), disabled: he(!0), checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        }, parent: function (e) {
          return !_.pseudos.empty(e)
        }, header: function (e) {
          return Q.test(e.nodeName)
        }, input: function (e) {
          return K.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: pe(function () {
          return [0]
        }), last: pe(function (e, t) {
          return [t - 1]
        }), eq: pe(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }), even: pe(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }), odd: pe(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }), lt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
          return e
        }), gt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }).pseudos.nth = _.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) _.pseudos[e] = fe(e);
    for (e in{submit: !0, reset: !0}) _.pseudos[e] = de(e);

    function me() {
    }

    function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function ye(a, e, t) {
      var l = e.dir, c = e.next, u = c || l, f = t && "parentNode" === u, d = i++;
      return e.first ? function (e, t, n) {
        for (; e = e[l];) if (1 === e.nodeType || f) return a(e, t, n);
        return !1
      } : function (e, t, n) {
        var i, r, o, s = [S, d];
        if (n) {
          for (; e = e[l];) if ((1 === e.nodeType || f) && a(e, t, n)) return !0
        } else for (; e = e[l];) if (1 === e.nodeType || f) if (r = (o = e[T] || (e[T] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e; else {
          if ((i = r[u]) && i[0] === S && i[1] === d) return s[2] = i[2];
          if ((r[u] = s)[2] = a(e, t, n)) return !0
        }
        return !1
      }
    }

    function be(r) {
      return 1 < r.length ? function (e, t, n) {
        for (var i = r.length; i--;) if (!r[i](e, t, n)) return !1;
        return !0
      } : r[0]
    }

    function _e(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
      return s
    }

    function we(h, p, g, m, v, e) {
      return m && !m[T] && (m = we(m)), v && !v[T] && (v = we(v, e)), ae(function (e, t, n, i) {
        var r, o, s, a = [], l = [], c = t.length, u = e || function (e, t, n) {
            for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
            return n
          }(p || "*", n.nodeType ? [n] : n, []), f = !h || !e && p ? u : _e(u, a, h, n, i),
          d = g ? v || (e ? h : c || m) ? [] : t : f;
        if (g && g(f, d, n, i), m) for (r = _e(d, l), m(r, [], n, i), o = r.length; o--;) (s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
        if (e) {
          if (v || h) {
            if (v) {
              for (r = [], o = d.length; o--;) (s = d[o]) && r.push(f[o] = s);
              v(null, d = [], r, i)
            }
            for (o = d.length; o--;) (s = d[o]) && -1 < (r = v ? P(e, s) : a[o]) && (e[r] = !(t[r] = s))
          }
        } else d = _e(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, i) : N.apply(t, d)
      })
    }

    function xe(e) {
      for (var r, t, n, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = ye(function (e) {
        return e === r
      }, s, !0), c = ye(function (e) {
        return -1 < P(r, e)
      }, s, !0), u = [function (e, t, n) {
        var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
        return r = null, i
      }]; a < i; a++) if (t = _.relative[e[a].type]) u = [ye(be(u), t)]; else {
        if ((t = _.filter[e[a].type].apply(null, e[a].matches))[T]) {
          for (n = ++a; n < i && !_.relative[e[n].type]; n++) ;
          return we(1 < a && be(u), 1 < a && ve(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(B, "$1"), t, a < n && xe(e.slice(a, n)), n < i && xe(e = e.slice(n)), n < i && ve(e))
        }
        u.push(t)
      }
      return be(u)
    }

    return me.prototype = _.filters = _.pseudos, _.setFilters = new me, p = oe.tokenize = function (e, t) {
      var n, i, r, o, s, a, l, c = b[e + " "];
      if (c) return t ? 0 : c.slice(0);
      for (s = e, a = [], l = _.preFilter; s;) {
        for (o in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = q.exec(s)) && (n = i.shift(), r.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length)), _.filter) !(i = V[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
          value: n,
          type: o,
          matches: i
        }), s = s.slice(n.length));
        if (!n) break
      }
      return t ? s.length : s ? oe.error(e) : b(e, a).slice(0)
    }, f = oe.compile = function (e, t) {
      var n, m, v, y, b, i, r = [], o = [], s = A[e + " "];
      if (!s) {
        for (t || (t = p(e)), n = t.length; n--;) (s = xe(t[n]))[T] ? r.push(s) : o.push(s);
        (s = A(e, (m = o, y = 0 < (v = r).length, b = 0 < m.length, i = function (e, t, n, i, r) {
          var o, s, a, l = 0, c = "0", u = e && [], f = [], d = w, h = e || b && _.find.TAG("*", r),
            p = S += null == d ? 1 : Math.random() || .1, g = h.length;
          for (r && (w = t === C || t || r); c !== g && null != (o = h[c]); c++) {
            if (b && o) {
              for (s = 0, t || o.ownerDocument === C || (x(o), n = !E); a = m[s++];) if (a(o, t || C, n)) {
                i.push(o);
                break
              }
              r && (S = p)
            }
            y && ((o = !a && o) && l--, e && u.push(o))
          }
          if (l += c, y && c !== l) {
            for (s = 0; a = v[s++];) a(u, f, t, n);
            if (e) {
              if (0 < l) for (; c--;) u[c] || f[c] || (f[c] = O.call(i));
              f = _e(f)
            }
            N.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && oe.uniqueSort(i)
          }
          return r && (S = p, w = d), u
        }, y ? ae(i) : i))).selector = e
      }
      return s
    }, g = oe.select = function (e, t, n, i) {
      var r, o, s, a, l, c = "function" == typeof e && e, u = !i && p(e = c.selector || e);
      if (n = n || [], 1 === u.length) {
        if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && E && _.relative[o[1].type]) {
          if (!(t = (_.find.ID(s.matches[0].replace(J, ee), t) || [])[0])) return n;
          c && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (r = V.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);) if ((l = _.find[a]) && (i = l(s.matches[0].replace(J, ee), Z.test(o[0].type) && ge(t.parentNode) || t))) {
          if (o.splice(r, 1), !(e = i.length && ve(o))) return N.apply(n, i), n;
          break
        }
      }
      return (c || f(e, u))(i, t, !E, n, !t || Z.test(e) && ge(t.parentNode) || t), n
    }, h.sortStable = T.split("").sort(D).join("") === T, h.detectDuplicates = !!c, x(), h.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ce("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), h.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ce("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), le(function (e) {
      return null == e.getAttribute("disabled")
    }) || ce(L, function (e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), oe
  }(C);
  T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;
  var x = function (e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
      if (r && T(e).is(n)) break;
      i.push(e)
    }
    return i
  }, S = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  }, A = T.expr.match.needsContext;

  function D(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }

  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function O(e, n, i) {
    return y(n) ? T.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== i
    }) : n.nodeType ? T.grep(e, function (e) {
      return e === n !== i
    }) : "string" != typeof n ? T.grep(e, function (e) {
      return -1 < r.call(n, e) !== i
    }) : T.filter(n, e, i)
  }

  T.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, T.fn.extend({
    find: function (e) {
      var t, n, i = this.length, r = this;
      if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
        for (t = 0; t < i; t++) if (T.contains(r[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
      return 1 < i ? T.uniqueSort(n) : n
    }, filter: function (e) {
      return this.pushStack(O(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(O(this, e || [], !0))
    }, is: function (e) {
      return !!O(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
    }
  });
  var I, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (T.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (n = n || I, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), k.test(i[1]) && T.isPlainObject(t)) for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (r = E.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
  }).prototype = T.fn, I = T(E);
  var j = /^(?:parents|prev(?:Until|All))/, P = {children: !0, contents: !0, next: !0, prev: !0};

  function L(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) ;
    return e
  }

  T.fn.extend({
    has: function (e) {
      var t = T(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0
      })
    }, closest: function (e, t) {
      var n, i = 0, r = this.length, o = [], s = "string" != typeof e && T(e);
      if (!A.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
    }, index: function (e) {
      return e ? "string" == typeof e ? r.call(T(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), T.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return x(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return x(e, "parentNode", n)
    }, next: function (e) {
      return L(e, "nextSibling")
    }, prev: function (e) {
      return L(e, "previousSibling")
    }, nextAll: function (e) {
      return x(e, "nextSibling")
    }, prevAll: function (e) {
      return x(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return x(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return x(e, "previousSibling", n)
    }, siblings: function (e) {
      return S((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return S(e.firstChild)
    }, contents: function (e) {
      return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
    }
  }, function (i, r) {
    T.fn[i] = function (e, t) {
      var n = T.map(this, r, e);
      return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (P[i] || T.uniqueSort(n), j.test(i) && n.reverse()), this.pushStack(n)
    }
  });
  var H = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e
  }

  function R(e) {
    throw e
  }

  function W(e, t, n, i) {
    var r;
    try {
      e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }

  T.Callbacks = function (i) {
    var e, n;
    i = "string" == typeof i ? (e = i, n = {}, T.each(e.match(H) || [], function (e, t) {
      n[t] = !0
    }), n) : T.extend({}, i);
    var r, t, o, s, a = [], l = [], c = -1, u = function () {
      for (s = s || i.once, o = r = !0; l.length; c = -1) for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
      i.memory || (t = !1), r = !1, s && (a = t ? [] : "")
    }, f = {
      add: function () {
        return a && (t && !r && (c = a.length - 1, l.push(t)), function n(e) {
          T.each(e, function (e, t) {
            y(t) ? i.unique && f.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
          })
        }(arguments), t && !r && u()), this
      }, remove: function () {
        return T.each(arguments, function (e, t) {
          for (var n; -1 < (n = T.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
        }), this
      }, has: function (e) {
        return e ? -1 < T.inArray(e, a) : 0 < a.length
      }, empty: function () {
        return a && (a = []), this
      }, disable: function () {
        return s = l = [], a = t = "", this
      }, disabled: function () {
        return !a
      }, lock: function () {
        return s = l = [], t || r || (a = t = ""), this
      }, locked: function () {
        return !!s
      }, fireWith: function (e, t) {
        return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
      }, fire: function () {
        return f.fireWith(this, arguments), this
      }, fired: function () {
        return !!o
      }
    };
    return f
  }, T.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
        r = "pending", s = {
          state: function () {
            return r
          }, always: function () {
            return a.done(arguments).fail(arguments), this
          }, catch: function (e) {
            return s.then(null, e)
          }, pipe: function () {
            var r = arguments;
            return T.Deferred(function (i) {
              T.each(o, function (e, t) {
                var n = y(r[t[4]]) && r[t[4]];
                a[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), r = null
            }).promise()
          }, then: function (t, n, i) {
            var l = 0;

            function c(r, o, s, a) {
              return function () {
                var n = this, i = arguments, e = function () {
                  var e, t;
                  if (!(r < l)) {
                    if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, c(l, o, M, a), c(l, o, R, a)) : (l++, t.call(e, c(l, o, M, a), c(l, o, R, a), c(l, o, M, o.notifyWith))) : (s !== M && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
                  }
                }, t = a ? e : function () {
                  try {
                    e()
                  } catch (e) {
                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== R && (n = void 0, i = [e]), o.rejectWith(n, i))
                  }
                };
                r ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()), C.setTimeout(t))
              }
            }

            return T.Deferred(function (e) {
              o[0][3].add(c(0, e, y(i) ? i : M, e.notifyWith)), o[1][3].add(c(0, e, y(t) ? t : M)), o[2][3].add(c(0, e, y(n) ? n : R))
            }).promise()
          }, promise: function (e) {
            return null != e ? T.extend(e, s) : s
          }
        }, a = {};
      return T.each(o, function (e, t) {
        var n = t[2], i = t[5];
        s[t[1]] = n.add, i && n.add(function () {
          r = i
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function () {
          return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
        }, a[t[0] + "With"] = n.fireWith
      }), s.promise(a), e && e.call(a, a), a
    }, when: function (e) {
      var n = arguments.length, t = n, i = Array(t), r = a.call(arguments), o = T.Deferred(), s = function (t) {
        return function (e) {
          i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(i, r)
        }
      };
      if (n <= 1 && (W(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || y(r[t] && r[t].then))) return o.then();
      for (; t--;) W(r[t], s(t), o.reject);
      return o.promise()
    }
  });
  var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  T.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && F.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, T.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var B = T.Deferred();

  function U() {
    E.removeEventListener("DOMContentLoaded", U), C.removeEventListener("load", U), T.ready()
  }

  T.fn.ready = function (e) {
    return B.then(e).catch(function (e) {
      T.readyException(e)
    }), this
  }, T.extend({
    isReady: !1, readyWait: 1, ready: function (e) {
      (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || B.resolveWith(E, [T])
    }
  }), T.ready.then = B.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(T.ready) : (E.addEventListener("DOMContentLoaded", U), C.addEventListener("load", U));
  var q = function (e, t, n, i, r, o, s) {
    var a = 0, l = e.length, c = null == n;
    if ("object" === w(n)) for (a in r = !0, n) q(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, y(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
      return c.call(T(e), n)
    })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
  }, z = /^-ms-/, $ = /-([a-z])/g;

  function Y(e, t) {
    return t.toUpperCase()
  }

  function V(e) {
    return e.replace(z, "ms-").replace($, Y)
  }

  var K = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Q() {
    this.expando = T.expando + Q.uid++
  }

  Q.uid = 1, Q.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    }, set: function (e, t, n) {
      var i, r = this.cache(e);
      if ("string" == typeof t) r[V(t)] = n; else for (i in t) r[V(i)] = t[i];
      return r
    }, get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
    }, access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(H) || []).length;
          for (; n--;) delete i[t[n]]
        }
        (void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    }, hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !T.isEmptyObject(t)
    }
  };
  var X = new Q, G = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;

  function ee(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
      } catch (e) {
      }
      G.set(e, t, n)
    } else n = void 0;
    return n
  }

  T.extend({
    hasData: function (e) {
      return G.hasData(e) || X.hasData(e)
    }, data: function (e, t, n) {
      return G.access(e, t, n)
    }, removeData: function (e, t) {
      G.remove(e, t)
    }, _data: function (e, t, n) {
      return X.access(e, t, n)
    }, _removeData: function (e, t) {
      X.remove(e, t)
    }
  }), T.fn.extend({
    data: function (n, e) {
      var t, i, r, o = this[0], s = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (r = G.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
          for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = V(i.slice(5)), ee(o, i, r[i]));
          X.set(o, "hasDataAttrs", !0)
        }
        return r
      }
      return "object" == typeof n ? this.each(function () {
        G.set(this, n)
      }) : q(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          G.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        G.remove(this, e)
      })
    }
  }), T.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, T.makeArray(n)) : i.push(n)), i || []
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = T.queue(e, t), i = n.length, r = n.shift(), o = T._queueHooks(e, t);
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
        T.dequeue(e, t)
      }, o)), !i && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return X.get(e, n) || X.access(e, n, {
        empty: T.Callbacks("once memory").add(function () {
          X.remove(e, [t + "queue", n])
        })
      })
    }
  }), T.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = T.queue(this, t, n);
        T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        T.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, i = 1, r = T.Deferred(), o = this, s = this.length, a = function () {
        --i || r.resolveWith(o, [o])
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = X.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      return a(), r.promise(t)
    }
  });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    ie = ["Top", "Right", "Bottom", "Left"], re = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
    }, oe = function (e, t, n, i) {
      var r, o, s = {};
      for (o in t) s[o] = e.style[o], e.style[o] = t[o];
      for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
      return r
    };

  function se(e, t, n, i) {
    var r, o, s = 20, a = i ? function () {
        return i.cur()
      } : function () {
        return T.css(e, t, "")
      }, l = a(), c = n && n[3] || (T.cssNumber[t] ? "" : "px"),
      u = (T.cssNumber[t] || "px" !== c && +l) && ne.exec(T.css(e, t));
    if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--;) T.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
      u *= 2, T.style(e, t, u + c), n = n || []
    }
    return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
  }

  var ae = {};

  function le(e, t) {
    for (var n, i, r, o, s, a, l, c = [], u = 0, f = e.length; u < f; u++) (i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = X.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && re(i) && (c[u] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = ae[a]) || (o = s.body.appendChild(s.createElement(a)), l = T.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ae[a] = l)))) : "none" !== n && (c[u] = "none", X.set(i, "display", n)));
    for (u = 0; u < f; u++) null != c[u] && (e[u].style.display = c[u]);
    return e
  }

  T.fn.extend({
    show: function () {
      return le(this, !0)
    }, hide: function () {
      return le(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        re(this) ? T(this).show() : T(this).hide()
      })
    }
  });
  var ce = /^(?:checkbox|radio)$/i, ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, fe = /^$|^module$|\/(?:java|ecma)script/i,
    de = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

  function he(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? T.merge([e], n) : n
  }

  function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
  }

  de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
  var ge, me, ve = /<|&#?\w+;/;

  function ye(e, t, n, i, r) {
    for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) if ((o = e[h]) || 0 === o) if ("object" === w(o)) T.merge(d, o.nodeType ? [o] : o); else if (ve.test(o)) {
      for (s = s || f.appendChild(t.createElement("div")), a = (ue.exec(o) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
      T.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
    } else d.push(t.createTextNode(o));
    for (f.textContent = "", h = 0; o = d[h++];) if (i && -1 < T.inArray(o, i)) r && r.push(o); else if (c = T.contains(o.ownerDocument, o), s = he(f.appendChild(o), "script"), c && pe(s), n) for (u = 0; o = s[u++];) fe.test(o.type || "") && n.push(o);
    return f
  }

  ge = E.createDocumentFragment().appendChild(E.createElement("div")), (me = E.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), v.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;
  var be = E.documentElement, _e = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    xe = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0
  }

  function Ee() {
    return !1
  }

  function Te() {
    try {
      return E.activeElement
    } catch (e) {
    }
  }

  function Se(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in"string" != typeof n && (i = i || n, n = void 0), t) Se(e, a, n, i, t[a], o);
      return e
    }
    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ee; else if (!r) return e;
    return 1 === o && (s = r, (r = function (e) {
      return T().off(e), s.apply(this, arguments)
    }).guid = s.guid || (s.guid = T.guid++)), e.each(function () {
      T.event.add(this, t, r, i, n)
    })
  }

  T.event = {
    global: {}, add: function (t, e, n, i, r) {
      var o, s, a, l, c, u, f, d, h, p, g, m = X.get(t);
      if (m) for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(be, r), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
        return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
      }), c = (e = (e || "").match(H) || [""]).length; c--;) h = g = (a = xe.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = T.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = T.event.special[h] || {}, u = T.extend({
        type: h,
        origType: g,
        data: i,
        handler: n,
        guid: n.guid,
        selector: r,
        needsContext: r && T.expr.match.needsContext.test(r),
        namespace: p.join(".")
      }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), T.event.global[h] = !0)
    }, remove: function (e, t, n, i, r) {
      var o, s, a, l, c, u, f, d, h, p, g, m = X.hasData(e) && X.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(H) || [""]).length; c--;) if (h = g = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
          for (f = T.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
          s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || T.removeEvent(e, h, m.handle), delete l[h])
        } else for (h in l) T.event.remove(e, h + t[c], n, i, !0);
        T.isEmptyObject(l) && X.remove(e, "handle events")
      }
    }, dispatch: function (e) {
      var t, n, i, r, o, s, a = T.event.fix(e), l = new Array(arguments.length),
        c = (X.get(this, "events") || {})[a.type] || [], u = T.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = T.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, a), a.result
      }
    }, handlers: function (e, t) {
      var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < T(r, this).index(c) : T.find(r, this, null, [c]).length), s[r] && o.push(i);
        o.length && a.push({elem: c, handlers: o})
      }
      return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
    }, addProp: function (t, e) {
      Object.defineProperty(T.Event.prototype, t, {
        enumerable: !0, configurable: !0, get: y(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        }, set: function (e) {
          Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
        }
      })
    }, fix: function (e) {
      return e[T.expando] ? e : new T.Event(e)
    }, special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          if (this !== Te() && this.focus) return this.focus(), !1
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          if (this === Te() && this.blur) return this.blur(), !1
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
        }, _default: function (e) {
          return D(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, T.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, T.Event = function (e, t) {
    if (!(this instanceof T.Event)) return new T.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
  }, T.Event.prototype = {
    constructor: T.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, T.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, T.event.addProp), T.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, r) {
    T.event.special[e] = {
      delegateType: r, bindType: r, handle: function (e) {
        var t, n = e.relatedTarget, i = e.handleObj;
        return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
      }
    }
  }), T.fn.extend({
    on: function (e, t, n, i) {
      return Se(this, e, t, n, i)
    }, one: function (e, t, n, i) {
      return Se(this, e, t, n, i, 1)
    }, off: function (e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        T.event.remove(this, e, n, t)
      })
    }
  });
  var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    De = /<script|<style|<link/i, ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ie(e, t) {
    return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
  }

  function Ne(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function je(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Pe(e, t) {
    var n, i, r, o, s, a, l, c;
    if (1 === t.nodeType) {
      if (X.hasData(e) && (o = X.access(e), s = X.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) for (n = 0, i = c[r].length; n < i; n++) T.event.add(t, r, c[r][n]);
      G.hasData(e) && (a = G.access(e), l = T.extend({}, a), G.set(t, l))
    }
  }

  function Le(n, i, r, o) {
    i = g.apply([], i);
    var e, t, s, a, l, c, u = 0, f = n.length, d = f - 1, h = i[0], p = y(h);
    if (p || 1 < f && "string" == typeof h && !v.checkClone && ke.test(h)) return n.each(function (e) {
      var t = n.eq(e);
      p && (i[0] = h.call(this, e, t.html())), Le(t, i, r, o)
    });
    if (f && (t = (e = ye(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (a = (s = T.map(he(e, "script"), Ne)).length; u < f; u++) l = e, u !== d && (l = T.clone(l, !0, !0), a && T.merge(s, he(l, "script"))), r.call(n[u], l, u);
      if (a) for (c = s[s.length - 1].ownerDocument, T.map(s, je), u = 0; u < a; u++) l = s[u], fe.test(l.type || "") && !X.access(l, "globalEval") && T.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : _(l.textContent.replace(Oe, ""), c, l))
    }
    return n
  }

  function He(e, t, n) {
    for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(he(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  T.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ae, "<$1></$2>")
    }, clone: function (e, t, n) {
      var i, r, o, s, a, l, c, u = e.cloneNode(!0), f = T.contains(e.ownerDocument, e);
      if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (s = he(u), i = 0, r = (o = he(e)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      if (t) if (n) for (o = o || he(e), s = s || he(u), i = 0, r = o.length; i < r; i++) Pe(o[i], s[i]); else Pe(e, u);
      return 0 < (s = he(u, "script")).length && pe(s, !f && he(e, "script")), u
    }, cleanData: function (e) {
      for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++) if (K(n)) {
        if (t = n[X.expando]) {
          if (t.events) for (i in t.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
          n[X.expando] = void 0
        }
        n[G.expando] && (n[G.expando] = void 0)
      }
    }
  }), T.fn.extend({
    detach: function (e) {
      return He(this, e, !0)
    }, remove: function (e) {
      return He(this, e)
    }, text: function (e) {
      return q(this, function (e) {
        return void 0 === e ? T.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return Le(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
      })
    }, prepend: function () {
      return Le(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Ie(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return Le(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return Le(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(he(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return T.clone(this, e, t)
      })
    }, html: function (e) {
      return q(this, function (e) {
        var t = this[0] || {}, n = 0, i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !De.test(e) && !de[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = T.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(he(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var n = [];
      return Le(this, arguments, function (e) {
        var t = this.parentNode;
        T.inArray(this, n) < 0 && (T.cleanData(he(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), T.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, s) {
    T.fn[e] = function (e) {
      for (var t, n = [], i = T(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), T(i[o])[s](t), l.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var Me = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Re = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e)
  }, We = new RegExp(ie.join("|"), "i");

  function Fe(e, t, n) {
    var i, r, o, s, a = e.style;
    return (n = n || Re(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (s = T.style(e, t)), !v.pixelBoxStyles() && Me.test(s) && We.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function Be(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }

  !function () {
    function e() {
      if (l) {
        a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(a).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", be.removeChild(a), l = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }

    var n, i, r, o, s, a = E.createElement("div"), l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(v, {
      boxSizingReliable: function () {
        return e(), i
      }, pixelBoxStyles: function () {
        return e(), o
      }, pixelPosition: function () {
        return e(), n
      }, reliableMarginLeft: function () {
        return e(), s
      }, scrollboxSize: function () {
        return e(), r
      }
    }))
  }();
  var Ue = /^(none|table(?!-c[ea]).+)/, qe = /^--/, ze = {position: "absolute", visibility: "hidden", display: "block"},
    $e = {letterSpacing: "0", fontWeight: "400"}, Ye = ["Webkit", "Moz", "ms"], Ve = E.createElement("div").style;

  function Ke(e) {
    var t = T.cssProps[e];
    return t || (t = T.cssProps[e] = function (e) {
      if (e in Ve) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) if ((e = Ye[n] + t) in Ve) return e
    }(e) || e), t
  }

  function Qe(e, t, n) {
    var i = ne.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function Xe(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0, a = 0, l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2) "margin" === n && (l += T.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= T.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= T.css(e, "border" + ie[s] + "Width", !0, r))) : (l += T.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += T.css(e, "border" + ie[s] + "Width", !0, r) : a += T.css(e, "border" + ie[s] + "Width", !0, r));
    return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
  }

  function Ge(e, t, n) {
    var i = Re(e), r = Fe(e, t, i), o = "border-box" === T.css(e, "boxSizing", !1, i), s = o;
    if (Me.test(r)) {
      if (!n) return r;
      r = "auto"
    }
    return s = s && (v.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === T.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Xe(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
  }

  function Ze(e, t, n, i, r) {
    return new Ze.prototype.init(e, t, n, i, r)
  }

  T.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, s, a = V(t), l = qe.test(t), c = e.style;
        if (l || (t = Ke(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
        "string" === (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = se(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
      }
    },
    css: function (e, t, n, i) {
      var r, o, s, a = V(t);
      return qe.test(t) || (t = Ke(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Fe(e, t, i)), "normal" === r && t in $e && (r = $e[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
    }
  }), T.each(["height", "width"], function (e, a) {
    T.cssHooks[a] = {
      get: function (e, t, n) {
        if (t) return !Ue.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, a, n) : oe(e, ze, function () {
          return Ge(e, a, n)
        })
      }, set: function (e, t, n) {
        var i, r = Re(e), o = "border-box" === T.css(e, "boxSizing", !1, r), s = n && Xe(e, a, n, o, r);
        return o && v.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Xe(e, a, "border", !1, r) - .5)), s && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = T.css(e, a)), Qe(0, t, s)
      }
    }
  }), T.cssHooks.marginLeft = Be(v.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {marginLeft: 0}, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), T.each({margin: "", padding: "", border: "Width"}, function (r, o) {
    T.cssHooks[r + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
        return n
      }
    }, "margin" !== r && (T.cssHooks[r + o].set = Qe)
  }), T.fn.extend({
    css: function (e, t) {
      return q(this, function (e, t, n) {
        var i, r, o = {}, s = 0;
        if (Array.isArray(t)) {
          for (i = Re(e), r = t.length; s < r; s++) o[t[s]] = T.css(e, t[s], !1, i);
          return o
        }
        return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((T.Tween = Ze).prototype = {
    constructor: Ze, init: function (e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = Ze.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = Ze.propHooks[this.prop];
      return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this
    }
  }).init.prototype = Ze.prototype, (Ze.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      }, set: function (e) {
        T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = Ze.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, T.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }, _default: "swing"
  }, T.fx = Ze.prototype.init, T.fx.step = {};
  var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, T.fx.interval), T.fx.tick())
  }

  function st() {
    return C.setTimeout(function () {
      Je = void 0
    }), Je = Date.now()
  }

  function at(e, t) {
    var n, i = 0, r = {height: e};
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function lt(e, t, n) {
    for (var i, r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i
  }

  function ct(o, e, t) {
    var n, s, i = 0, r = ct.prefilters.length, a = T.Deferred().always(function () {
      delete l.elem
    }), l = function () {
      if (s) return !1;
      for (var e = Je || st(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
      return a.notifyWith(o, [c, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
    }, c = a.promise({
      elem: o,
      props: T.extend({}, e),
      opts: T.extend(!0, {specialEasing: {}, easing: T.easing._default}, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Je || st(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = T.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
        return c.tweens.push(n), n
      },
      stop: function (e) {
        var t = 0, n = e ? c.tweens.length : 0;
        if (s) return this;
        for (s = !0; t < n; t++) c.tweens[t].run(1);
        return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
      }
    }), u = c.props;
    for (!function (e, t) {
      var n, i, r, o, s;
      for (n in e) if (r = t[i = V(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = T.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
    }(u, c.opts.specialEasing); i < r; i++) if (n = ct.prefilters[i].call(c, o, u, c.opts)) return y(n.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
    return T.map(u, lt, c), y(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
      elem: o,
      anim: c,
      queue: c.opts.queue
    })), c
  }

  T.Animation = T.extend(ct, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, ne.exec(t), n), n
      }]
    }, tweener: function (e, t) {
      y(e) ? (t = e, e = ["*"]) : e = e.match(H);
      for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
    }, prefilters: [function (e, t, n) {
      var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t, d = this, h = {}, p = e.style,
        g = e.nodeType && re(e), m = X.get(e, "fxshow");
      for (i in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a()
      }), s.unqueued++, d.always(function () {
        d.always(function () {
          s.unqueued--, T.queue(e, "fx").length || s.empty.fire()
        })
      })), t) if (r = t[i], it.test(r)) {
        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
          if ("show" !== r || !m || void 0 === m[i]) continue;
          g = !0
        }
        h[i] = m && m[i] || T.style(e, i)
      }
      if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = X.get(e, "display")), "none" === (u = T.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = T.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (d.done(function () {
        p.display = c
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {display: c}), o && (m.hidden = !g), g && le([e], !0), d.done(function () {
        for (i in g || le([e]), X.remove(e, "fxshow"), h) T.style(e, i, h[i])
      })), l = lt(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
    }], prefilter: function (e, t) {
      t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
    }
  }), T.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? T.extend({}, e) : {
      complete: n || !n && t || y(e) && e,
      duration: e,
      easing: n && t || t && !y(t) && t
    };
    return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
    }, i
  }, T.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(re).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
    }, animate: function (t, e, n, i) {
      var r = T.isEmptyObject(t), o = T.speed(e, n, i), s = function () {
        var e = ct(this, T.extend({}, t), o);
        (r || X.get(this, "finish")) && e.stop(!0)
      };
      return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
    }, stop: function (r, e, o) {
      var s = function (e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
        var e = !0, t = null != r && r + "queueHooks", n = T.timers, i = X.get(this);
        if (t) i[t] && i[t].stop && s(i[t]); else for (t in i) i[t] && i[t].stop && rt.test(t) && s(i[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || T.dequeue(this, r)
      })
    }, finish: function (s) {
      return !1 !== s && (s = s || "fx"), this.each(function () {
        var e, t = X.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = T.timers, o = n ? n.length : 0;
        for (t.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), T.each(["toggle", "show", "hide"], function (e, i) {
    var r = T.fn[i];
    T.fn[i] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(at(i, !0), e, t, n)
    }
  }), T.each({
    slideDown: at("show"),
    slideUp: at("hide"),
    slideToggle: at("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, i) {
    T.fn[e] = function (e, t, n) {
      return this.animate(i, e, t, n)
    }
  }), T.timers = [], T.fx.tick = function () {
    var e, t = 0, n = T.timers;
    for (Je = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || T.fx.stop(), Je = void 0
  }, T.fx.timer = function (e) {
    T.timers.push(e), T.fx.start()
  }, T.fx.interval = 13, T.fx.start = function () {
    et || (et = !0, ot())
  }, T.fx.stop = function () {
    et = null
  }, T.fx.speeds = {slow: 600, fast: 200, _default: 400}, T.fn.delay = function (i, e) {
    return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, i);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", v.checkOn = "" !== tt.value, v.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", v.radioValue = "t" === tt.value;
  var ut, ft = T.expr.attrHandle;
  T.fn.extend({
    attr: function (e, t) {
      return q(this, T.attr, e, t, 1 < arguments.length)
    }, removeAttr: function (e) {
      return this.each(function () {
        T.removeAttr(this, e)
      })
    }
  }), T.extend({
    attr: function (e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!v.radioValue && "radio" === t && D(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, removeAttr: function (e, t) {
      var n, i = 0, r = t && t.match(H);
      if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
    }
  }), ut = {
    set: function (e, t, n) {
      return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var s = ft[t] || T.find.attr;
    ft[t] = function (e, t, n) {
      var i, r, o = t.toLowerCase();
      return n || (r = ft[o], ft[o] = i, i = null != s(e, t, n) ? o : null, ft[o] = r), i
    }
  });
  var dt = /^(?:input|select|textarea|button)$/i, ht = /^(?:a|area)$/i;

  function pt(e) {
    return (e.match(H) || []).join(" ")
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
  }

  T.fn.extend({
    prop: function (e, t) {
      return q(this, T.prop, e, t, 1 < arguments.length)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[T.propFix[e] || e]
      })
    }
  }), T.extend({
    prop: function (e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = T.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }, propFix: {for: "htmlFor", class: "className"}
  }), v.optSelected || (T.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }, set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    T.propFix[this.toLowerCase()] = this
  }), T.fn.extend({
    addClass: function (t) {
      var e, n, i, r, o, s, a, l = 0;
      if (y(t)) return this.each(function (e) {
        T(this).addClass(t.call(this, e, gt(this)))
      });
      if ((e = mt(t)).length) for (; n = this[l++];) if (r = gt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
        r !== (a = pt(i)) && n.setAttribute("class", a)
      }
      return this
    }, removeClass: function (t) {
      var e, n, i, r, o, s, a, l = 0;
      if (y(t)) return this.each(function (e) {
        T(this).removeClass(t.call(this, e, gt(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) for (; n = this[l++];) if (r = gt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
        for (s = 0; o = e[s++];) for (; -1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
        r !== (a = pt(i)) && n.setAttribute("class", a)
      }
      return this
    }, toggleClass: function (r, t) {
      var o = typeof r, s = "string" === o || Array.isArray(r);
      return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function (e) {
        T(this).toggleClass(r.call(this, e, gt(this), t), t)
      }) : this.each(function () {
        var e, t, n, i;
        if (s) for (t = 0, n = T(this), i = mt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== r && "boolean" !== o || ((e = gt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : X.get(this, "__className__") || ""))
      })
    }, hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + pt(gt(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var vt = /\r/g;
  T.fn.extend({
    val: function (n) {
      var i, e, r, t = this[0];
      return arguments.length ? (r = y(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = r ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = T.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
      })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
    }
  }), T.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = T.find.attr(e, "value");
          return null != t ? t : pt(T.text(e))
        }
      }, select: {
        get: function (e) {
          var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [],
            l = s ? o + 1 : r.length;
          for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
            if (t = T(n).val(), s) return t;
            a.push(t)
          }
          return a
        }, set: function (e, t) {
          for (var n, i, r = e.options, o = T.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), T.each(["radio", "checkbox"], function () {
    T.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t)
      }
    }, v.checkOn || (T.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), v.focusin = "onfocusin" in C;
  var yt = /^(?:focusinfocus|focusoutblur)$/, bt = function (e) {
    e.stopPropagation()
  };
  T.extend(T.event, {
    trigger: function (e, t, n, i) {
      var r, o, s, a, l, c, u, f, d = [n || E], h = m.call(e, "type") ? e.type : e,
        p = m.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = s = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(h + T.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[T.expando] ? e : new T.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), u = T.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
        if (!i && !u.noBubble && !b(n)) {
          for (a = u.delegateType || h, yt.test(a + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
          s === (n.ownerDocument || E) && d.push(s.defaultView || s.parentWindow || C)
        }
        for (r = 0; (o = d[r++]) && !e.isPropagationStopped();) f = o, e.type = 1 < r ? a : u.bindType || h, (c = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && K(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !K(n) || l && y(n[h]) && !b(n) && ((s = n[l]) && (n[l] = null), T.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, bt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, bt), T.event.triggered = void 0, s && (n[l] = s)), e.result
      }
    }, simulate: function (e, t, n) {
      var i = T.extend(new T.Event, n, {type: e, isSimulated: !0});
      T.event.trigger(i, null, t)
    }
  }), T.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        T.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return T.event.trigger(e, t, n, !0)
    }
  }), v.focusin || T.each({focus: "focusin", blur: "focusout"}, function (n, i) {
    var r = function (e) {
      T.event.simulate(i, e.target, T.event.fix(e))
    };
    T.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this, t = X.access(e, i);
        t || e.addEventListener(n, r, !0), X.access(e, i, (t || 0) + 1)
      }, teardown: function () {
        var e = this.ownerDocument || this, t = X.access(e, i) - 1;
        t ? X.access(e, i, t) : (e.removeEventListener(n, r, !0), X.remove(e, i))
      }
    }
  });
  var _t = C.location, wt = Date.now(), xt = /\?/;
  T.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new C.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
  };
  var Ct = /\[\]$/, Et = /\r?\n/g, Tt = /^(?:submit|button|image|reset|file)$/i,
    St = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, i, r) {
    var t;
    if (Array.isArray(e)) T.each(e, function (e, t) {
      i || Ct.test(n) ? r(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
    }); else if (i || "object" !== w(e)) r(n, e); else for (t in e) At(n + "[" + t + "]", e[t], i, r)
  }

  T.param = function (e, t) {
    var n, i = [], r = function (e, t) {
      var n = y(t) ? t() : t;
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    };
    if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
      r(this.name, this.value)
    }); else for (n in e) At(n, e[n], t, r);
    return i.join("&")
  }, T.fn.extend({
    serialize: function () {
      return T.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = T.prop(this, "elements");
        return e ? T.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !T(this).is(":disabled") && St.test(this.nodeName) && !Tt.test(e) && (this.checked || !ce.test(e))
      }).map(function (e, t) {
        var n = T(this).val();
        return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
          return {name: t.name, value: e.replace(Et, "\r\n")}
        }) : {name: t.name, value: n.replace(Et, "\r\n")}
      }).get()
    }
  });
  var Dt = /%20/g, kt = /#.*$/, Ot = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm, Nt = /^(?:GET|HEAD)$/,
    jt = /^\/\//, Pt = {}, Lt = {}, Ht = "*/".concat("*"), Mt = E.createElement("a");

  function Rt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, i = 0, r = e.toLowerCase().match(H) || [];
      if (y(t)) for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function Wt(t, r, o, s) {
    var a = {}, l = t === Lt;

    function c(e) {
      var i;
      return a[e] = !0, T.each(t[e] || [], function (e, t) {
        var n = t(r, o, s);
        return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
      }), i
    }

    return c(r.dataTypes[0]) || !a["*"] && c("*")
  }

  function Ft(e, t) {
    var n, i, r = T.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && T.extend(!0, e, i), e
  }

  Mt.href = _t.href, T.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: _t.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Ht,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? Ft(Ft(e, T.ajaxSettings), t) : Ft(T.ajaxSettings, e)
    },
    ajaxPrefilter: Rt(Pt),
    ajaxTransport: Rt(Lt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var u, f, d, n, h, i, p, g, r, o, m = T.ajaxSetup({}, t), v = m.context || m,
        y = m.context && (v.nodeType || v.jquery) ? T(v) : T.event, b = T.Deferred(), _ = T.Callbacks("once memory"),
        w = m.statusCode || {}, s = {}, a = {}, l = "canceled", x = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (p) {
              if (!n) for (n = {}; t = It.exec(d);) n[t[1].toLowerCase()] = t[2];
              t = n[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return p ? d : null
          }, setRequestHeader: function (e, t) {
            return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
          }, overrideMimeType: function (e) {
            return null == p && (m.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (p) x.always(e[x.status]); else for (t in e) w[t] = [w[t], e[t]];
            return this
          }, abort: function (e) {
            var t = e || l;
            return u && u.abort(t), c(0, t), this
          }
        };
      if (b.promise(x), m.url = ((e || m.url || _t.href) + "").replace(jt, _t.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(H) || [""], null == m.crossDomain) {
        i = E.createElement("a");
        try {
          i.href = m.url, i.href = i.href, m.crossDomain = Mt.protocol + "//" + Mt.host != i.protocol + "//" + i.host
        } catch (e) {
          m.crossDomain = !0
        }
      }
      if (m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), Wt(Pt, m, t, x), p) return x;
      for (r in(g = T.event && m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Nt.test(m.type), f = m.url.replace(kt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Dt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (xt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Ot, "$1"), o = (xt.test(f) ? "&" : "?") + "_=" + wt++ + o), m.url = f + o), m.ifModified && (T.lastModified[f] && x.setRequestHeader("If-Modified-Since", T.lastModified[f]), T.etag[f] && x.setRequestHeader("If-None-Match", T.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(r, m.headers[r]);
      if (m.beforeSend && (!1 === m.beforeSend.call(v, x, m) || p)) return x.abort();
      if (l = "abort", _.add(m.complete), x.done(m.success), x.fail(m.error), u = Wt(Lt, m, t, x)) {
        if (x.readyState = 1, g && y.trigger("ajaxSend", [x, m]), p) return x;
        m.async && 0 < m.timeout && (h = C.setTimeout(function () {
          x.abort("timeout")
        }, m.timeout));
        try {
          p = !1, u.send(s, c)
        } catch (e) {
          if (p) throw e;
          c(-1, e)
        }
      } else c(-1, "No Transport");

      function c(e, t, n, i) {
        var r, o, s, a, l, c = t;
        p || (p = !0, h && C.clearTimeout(h), u = void 0, d = i || "", x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
          for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i) for (r in a) if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break
          }
          if (l[0] in n) o = l[0]; else {
            for (r in n) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                o = r;
                break
              }
              s || (s = r)
            }
            o = o || s
          }
          if (o) return o !== l[0] && l.unshift(o), n[o]
        }(m, x, n)), a = function (e, t, n, i) {
          var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
          if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
          for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
              !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
              break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
              t = s(t)
            } catch (e) {
              return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o}
            }
          }
          return {state: "success", data: t}
        }(m, a, x, r), r ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (T.lastModified[f] = l), (l = x.getResponseHeader("etag")) && (T.etag[f] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, o = a.data, r = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", r ? b.resolveWith(v, [o, c, x]) : b.rejectWith(v, [x, c, s]), x.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [x, m, r ? o : s]), _.fireWith(v, [x, c]), g && (y.trigger("ajaxComplete", [x, m]), --T.active || T.event.trigger("ajaxStop")))
      }

      return x
    },
    getJSON: function (e, t, n) {
      return T.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return T.get(e, void 0, t, "script")
    }
  }), T.each(["get", "post"], function (e, r) {
    T[r] = function (e, t, n, i) {
      return y(t) && (i = i || n, n = t, t = void 0), T.ajax(T.extend({
        url: e,
        type: r,
        dataType: i,
        data: t,
        success: n
      }, T.isPlainObject(e) && e))
    }
  }), T._evalUrl = function (e) {
    return T.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
  }, T.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    }, wrapInner: function (n) {
      return y(n) ? this.each(function (e) {
        T(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = T(this), t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    }, wrap: function (t) {
      var n = y(t);
      return this.each(function (e) {
        T(this).wrapAll(n ? t.call(this, e) : t)
      })
    }, unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        T(this).replaceWith(this.childNodes)
      }), this
    }
  }), T.expr.pseudos.hidden = function (e) {
    return !T.expr.pseudos.visible(e)
  }, T.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, T.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest
    } catch (e) {
    }
  };
  var Bt = {0: 200, 1223: 204}, Ut = T.ajaxSettings.xhr();
  v.cors = !!Ut && "withCredentials" in Ut, v.ajax = Ut = !!Ut, T.ajaxTransport(function (r) {
    var o, s;
    if (v.cors || Ut && !r.crossDomain) return {
      send: function (e, t) {
        var n, i = r.xhr();
        if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (n in r.xhrFields) i[n] = r.xhrFields[n];
        for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Bt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {binary: i.response} : {text: i.responseText}, i.getAllResponseHeaders()))
          }
        }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
          4 === i.readyState && C.setTimeout(function () {
            o && s()
          })
        }, o = o("abort");
        try {
          i.send(r.hasContent && r.data || null)
        } catch (e) {
          if (o) throw e
        }
      }, abort: function () {
        o && o()
      }
    }
  }), T.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), T.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {
      "text script": function (e) {
        return T.globalEval(e), e
      }
    }
  }), T.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), T.ajaxTransport("script", function (n) {
    var i, r;
    if (n.crossDomain) return {
      send: function (e, t) {
        i = T("<script>").prop({charset: n.scriptCharset, src: n.url}).on("load error", r = function (e) {
          i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), E.head.appendChild(i[0])
      }, abort: function () {
        r && r()
      }
    }
  });
  var qt, zt = [], $t = /(=)\?(?=&|$)|\?\?/;
  T.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = zt.pop() || T.expando + "_" + wt++;
      return this[e] = !0, e
    }
  }), T.ajaxPrefilter("json jsonp", function (e, t, n) {
    var i, r, o,
      s = !1 !== e.jsonp && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace($t, "$1" + i) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
      return o || T.error(i + " was not called"), o[0]
    }, e.dataTypes[0] = "json", r = C[i], C[i] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === r ? T(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, zt.push(i)), o && y(r) && r(o[0]), o = r = void 0
    }), "script"
  }), v.createHTMLDocument = ((qt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), T.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(i)) : t = E), o = !n && [], (r = k.exec(e)) ? [t.createElement(r[1])] : (r = ye([e], t, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
    var i, r, o
  }, T.fn.load = function (e, t, n) {
    var i, r, o, s = this, a = e.indexOf(" ");
    return -1 < a && (i = pt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && T.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    T.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), T.expr.pseudos.animated = function (t) {
    return T.grep(T.timers, function (e) {
      return t === e.elem
    }).length
  }, T.offset = {
    setOffset: function (e, t, n) {
      var i, r, o, s, a, l, c = T.css(e, "position"), u = T(e), f = {};
      "static" === c && (e.style.position = "relative"), a = u.offset(), o = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
    }
  }, T.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        T.offset.setOffset(this, t, e)
      });
      var e, n, i = this[0];
      return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {top: 0, left: 0} : void 0
    }, position: function () {
      if (this[0]) {
        var e, t, n, i = this[0], r = {top: 0, left: 0};
        if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect(); else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
          e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0), r.left += T.css(e, "borderLeftWidth", !0))
        }
        return {top: t.top - r.top - T.css(i, "marginTop", !0), left: t.left - r.left - T.css(i, "marginLeft", !0)}
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
        return e || be
      })
    }
  }), T.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
    var o = "pageYOffset" === r;
    T.fn[t] = function (e) {
      return q(this, function (e, t, n) {
        var i;
        if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
        i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), T.each(["top", "left"], function (e, n) {
    T.cssHooks[n] = Be(v.pixelPosition, function (e, t) {
      if (t) return t = Fe(e, n), Me.test(t) ? T(e).position()[n] + "px" : t
    })
  }), T.each({Height: "height", Width: "width"}, function (s, a) {
    T.each({padding: "inner" + s, content: a, "": "outer" + s}, function (i, o) {
      T.fn[o] = function (e, t) {
        var n = arguments.length && (i || "boolean" != typeof e), r = i || (!0 === e || !0 === t ? "margin" : "border");
        return q(this, function (e, t, n) {
          var i;
          return b(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(e, t, r) : T.style(e, t, n, r)
        }, a, n ? e : void 0, n)
      }
    })
  }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    T.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), T.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), T.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), T.proxy = function (e, t) {
    var n, i, r;
    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = a.call(arguments, 2), (r = function () {
      return e.apply(t || this, i.concat(a.call(arguments)))
    }).guid = e.guid = e.guid || T.guid++, r
  }, T.holdReady = function (e) {
    e ? T.readyWait++ : T.ready(!0)
  }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = D, T.isFunction = y, T.isWindow = b, T.camelCase = V, T.type = w, T.now = Date.now, T.isNumeric = function (e) {
    var t = T.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return T
  });
  var Yt = C.jQuery, Vt = C.$;
  return T.noConflict = function (e) {
    return C.$ === T && (C.$ = Vt), e && C.jQuery === T && (C.jQuery = Yt), T
  }, e || (C.jQuery = C.$ = T), T
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
  "use strict";
  for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < t.length; i += 1) if (e && 0 <= navigator.userAgent.indexOf(t[i])) {
    n = 1;
    break
  }
  var s = e && window.Promise ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e()
      }))
    }
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e()
      }, n))
    }
  };

  function a(e) {
    return e && "[object Function]" === {}.toString.call(e)
  }

  function _(e, t) {
    if (1 !== e.nodeType) return [];
    var n = getComputedStyle(e, null);
    return t ? n[t] : n
  }

  function d(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host
  }

  function p(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case"HTML":
      case"BODY":
        return e.ownerDocument.body;
      case"#document":
        return e.body
    }
    var t = _(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + r + i) ? e : p(d(e))
  }

  var r = e && !(!window.MSInputMethodContext || !document.documentMode), o = e && /MSIE 10/.test(navigator.userAgent);

  function g(e) {
    return 11 === e ? r : 10 === e ? o : r || o
  }

  function y(e) {
    if (!e) return document.documentElement;
    for (var t = g(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === _(n, "position") ? y(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
  }

  function u(e) {
    return null !== e.parentNode ? u(e.parentNode) : e
  }

  function h(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e,
      o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s, a, l = o.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && y(s.firstElementChild) !== s ? y(l) : l;
    var c = u(e);
    return c.host ? h(c.host, t) : h(e, u(t).host)
  }

  function m(e) {
    var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
      n = e.nodeName;
    if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || i)[t]
    }
    return e[t]
  }

  function f(e, t) {
    var n = "x" === t ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
  }

  function l(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], g(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
  }

  function v() {
    var e = document.body, t = document.documentElement, n = g(10) && getComputedStyle(t);
    return {height: l("Height", e, t, n), width: l("Width", e, t, n)}
  }

  var c = function () {
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }

    return function (e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e
    }
  }(), w = function (e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }, x = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  };

  function C(e) {
    return x({}, e, {right: e.left + e.width, bottom: e.top + e.height})
  }

  function b(e) {
    var t = {};
    try {
      if (g(10)) {
        t = e.getBoundingClientRect();
        var n = m(e, "top"), i = m(e, "left");
        t.top += n, t.left += i, t.bottom += n, t.right += i
      } else t = e.getBoundingClientRect()
    } catch (e) {
    }
    var r = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
      o = "HTML" === e.nodeName ? v() : {}, s = o.width || e.clientWidth || r.right - r.left,
      a = o.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, c = e.offsetHeight - a;
    if (l || c) {
      var u = _(e);
      l -= f(u, "x"), c -= f(u, "y"), r.width -= l, r.height -= c
    }
    return C(r)
  }

  function E(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = g(10), r = "HTML" === t.nodeName,
      o = b(e), s = b(t), a = p(e), l = _(t), c = parseFloat(l.borderTopWidth, 10),
      u = parseFloat(l.borderLeftWidth, 10);
    n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
    var f = C({top: o.top - s.top - c, left: o.left - s.left - u, width: o.width, height: o.height});
    if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
      var d = parseFloat(l.marginTop, 10), h = parseFloat(l.marginLeft, 10);
      f.top -= c - d, f.bottom -= c - d, f.left -= u - h, f.right -= u - h, f.marginTop = d, f.marginLeft = h
    }
    return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = m(t, "top"), r = m(t, "left"),
        o = n ? -1 : 1;
      return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
    }(f, t)), f
  }

  function T(e) {
    if (!e || !e.parentElement || g()) return document.documentElement;
    for (var t = e.parentElement; t && "none" === _(t, "transform");) t = t.parentElement;
    return t || document.documentElement
  }

  function S(e, t, n, i) {
    var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
      s = r ? T(e) : h(e, t);
    if ("viewport" === i) o = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = e.ownerDocument.documentElement,
        i = E(e, n), r = Math.max(n.clientWidth, window.innerWidth || 0),
        o = Math.max(n.clientHeight, window.innerHeight || 0), s = t ? 0 : m(n), a = t ? 0 : m(n, "left");
      return C({top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o})
    }(s, r); else {
      var a = void 0;
      "scrollParent" === i ? "BODY" === (a = p(d(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
      var l = E(a, s, r);
      if ("HTML" !== a.nodeName || function e(t) {
        var n = t.nodeName;
        return "BODY" !== n && "HTML" !== n && ("fixed" === _(t, "position") || e(d(t)))
      }(s)) o = l; else {
        var c = v(), u = c.height, f = c.width;
        o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
      }
    }
    return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
  }

  function A(e, t, i, n, r) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var s = S(i, n, o, r), a = {
      top: {width: s.width, height: t.top - s.top},
      right: {width: s.right - t.right, height: s.height},
      bottom: {width: s.width, height: s.bottom - t.bottom},
      left: {width: t.left - s.left, height: s.height}
    }, l = Object.keys(a).map(function (e) {
      return x({key: e}, a[e], {area: (t = a[e], t.width * t.height)});
      var t
    }).sort(function (e, t) {
      return t.area - e.area
    }), c = l.filter(function (e) {
      var t = e.width, n = e.height;
      return t >= i.clientWidth && n >= i.clientHeight
    }), u = 0 < c.length ? c[0].key : l[0].key, f = e.split("-")[1];
    return u + (f ? "-" + f : "")
  }

  function D(e, t, n) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return E(n, i ? T(t) : h(t, n), i)
  }

  function k(e) {
    var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    return {width: e.offsetWidth + i, height: e.offsetHeight + n}
  }

  function O(e) {
    var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }

  function I(e, t, n) {
    n = n.split("-")[0];
    var i = k(e), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n),
      s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
    return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[O(a)], r
  }

  function N(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function j(e, n, t) {
    return (void 0 === t ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n
      });
      var i = N(e, function (e) {
        return e[t] === n
      });
      return e.indexOf(i)
    }(e, "name", t))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var t = e.function || e.fn;
      e.enabled && a(t) && (n.offsets.popper = C(n.offsets.popper), n.offsets.reference = C(n.offsets.reference), n = t(n, e))
    }), n
  }

  function P(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n
    })
  }

  function L(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var r = t[i], o = r ? "" + r + n : e;
      if (void 0 !== document.body.style[o]) return o
    }
    return null
  }

  function H(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window
  }

  function M(e, t, n, i) {
    n.updateBound = i, H(e).addEventListener("resize", n.updateBound, {passive: !0});
    var r = p(e);
    return function e(t, n, i, r) {
      var o = "BODY" === t.nodeName, s = o ? t.ownerDocument.defaultView : t;
      s.addEventListener(n, i, {passive: !0}), o || e(p(s.parentNode), n, i, r), r.push(s)
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
  }

  function R() {
    var e, t;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
  }

  function W(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function F(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && W(i[e]) && (t = "px"), n.style[e] = i[e] + t
    })
  }

  function B(e, t, n) {
    var i = N(e, function (e) {
      return e.name === t
    }), r = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order
    });
    if (!r) {
      var o = "`" + t + "`", s = "`" + n + "`";
      console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
    }
    return r
  }

  var U = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
    q = U.slice(3);

  function z(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = q.indexOf(e),
      i = q.slice(n + 1).concat(q.slice(0, n));
    return t ? i.reverse() : i
  }

  var $ = "flip", Y = "clockwise", V = "counterclockwise";

  function K(e, r, o, t) {
    var s = [0, 0], a = -1 !== ["right", "left"].indexOf(t), n = e.split(/(\+|\-)/).map(function (e) {
      return e.trim()
    }), i = n.indexOf(N(n, function (e) {
      return -1 !== e.search(/,|\s/)
    }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
      c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
    return (c = c.map(function (e, t) {
      var n = (1 === t ? !a : a) ? "height" : "width", i = !1;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
          if (!o) return e;
          if (0 === s.indexOf("%")) {
            var a = void 0;
            switch (s) {
              case"%p":
                a = n;
                break;
              case"%":
              case"%r":
              default:
                a = i
            }
            return C(a)[t] / 100 * o
          }
          if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
          return o
        }(e, n, r, o)
      })
    })).forEach(function (n, i) {
      n.forEach(function (e, t) {
        W(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
      })
    }), s
  }

  var Q = {
    placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
    }, onUpdate: function () {
    }, modifiers: {
      shift: {
        order: 100, enabled: !0, fn: function (e) {
          var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
          if (i) {
            var r = e.offsets, o = r.reference, s = r.popper, a = -1 !== ["bottom", "top"].indexOf(n),
              l = a ? "left" : "top", c = a ? "width" : "height",
              u = {start: w({}, l, o[l]), end: w({}, l, o[l] + o[c] - s[c])};
            e.offsets.popper = x({}, s, u[i])
          }
          return e
        }
      }, offset: {
        order: 200, enabled: !0, fn: function (e, t) {
          var n = t.offset, i = e.placement, r = e.offsets, o = r.popper, s = r.reference, a = i.split("-")[0],
            l = void 0;
          return l = W(+n) ? [+n, 0] : K(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
        }, offset: 0
      }, preventOverflow: {
        order: 300, enabled: !0, fn: function (e, i) {
          var t = i.boundariesElement || y(e.instance.popper);
          e.instance.reference === t && (t = y(t));
          var n = L("transform"), r = e.instance.popper.style, o = r.top, s = r.left, a = r[n];
          r.top = "", r.left = "", r[n] = "";
          var l = S(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
          r.top = o, r.left = s, r[n] = a, i.boundaries = l;
          var c = i.priority, u = e.offsets.popper, f = {
            primary: function (e) {
              var t = u[e];
              return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), w({}, e, t)
            }, secondary: function (e) {
              var t = "right" === e ? "left" : "top", n = u[t];
              return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), w({}, t, n)
            }
          };
          return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            u = x({}, u, f[t](e))
          }), e.offsets.popper = u, e
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
      }, keepTogether: {
        order: 400, enabled: !0, fn: function (e) {
          var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0], o = Math.floor,
            s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top",
            c = s ? "width" : "height";
          return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
        }
      }, arrow: {
        order: 500, enabled: !0, fn: function (e, t) {
          var n;
          if (!B(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var i = t.element;
          if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
          var r = e.placement.split("-")[0], o = e.offsets, s = o.popper, a = o.reference,
            l = -1 !== ["left", "right"].indexOf(r), c = l ? "height" : "width", u = l ? "Top" : "Left",
            f = u.toLowerCase(), d = l ? "left" : "top", h = l ? "bottom" : "right", p = k(i)[c];
          a[h] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - p)), a[f] + p > s[h] && (e.offsets.popper[f] += a[f] + p - s[h]), e.offsets.popper = C(e.offsets.popper);
          var g = a[f] + a[c] / 2 - p / 2, m = _(e.instance.popper), v = parseFloat(m["margin" + u], 10),
            y = parseFloat(m["border" + u + "Width"], 10), b = g - e.offsets.popper[f] - v - y;
          return b = Math.max(Math.min(s[c] - p, b), 0), e.arrowElement = i, e.offsets.arrow = (w(n = {}, f, Math.round(b)), w(n, d, ""), n), e
        }, element: "[x-arrow]"
      }, flip: {
        order: 600, enabled: !0, fn: function (p, g) {
          if (P(p.instance.modifiers, "inner")) return p;
          if (p.flipped && p.placement === p.originalPlacement) return p;
          var m = S(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
            v = p.placement.split("-")[0], y = O(v), b = p.placement.split("-")[1] || "", _ = [];
          switch (g.behavior) {
            case $:
              _ = [v, y];
              break;
            case Y:
              _ = z(v);
              break;
            case V:
              _ = z(v, !0);
              break;
            default:
              _ = g.behavior
          }
          return _.forEach(function (e, t) {
            if (v !== e || _.length === t + 1) return p;
            v = p.placement.split("-")[0], y = O(v);
            var n, i = p.offsets.popper, r = p.offsets.reference, o = Math.floor,
              s = "left" === v && o(i.right) > o(r.left) || "right" === v && o(i.left) < o(r.right) || "top" === v && o(i.bottom) > o(r.top) || "bottom" === v && o(i.top) < o(r.bottom),
              a = o(i.left) < o(m.left), l = o(i.right) > o(m.right), c = o(i.top) < o(m.top),
              u = o(i.bottom) > o(m.bottom),
              f = "left" === v && a || "right" === v && l || "top" === v && c || "bottom" === v && u,
              d = -1 !== ["top", "bottom"].indexOf(v),
              h = !!g.flipVariations && (d && "start" === b && a || d && "end" === b && l || !d && "start" === b && c || !d && "end" === b && u);
            (s || f || h) && (p.flipped = !0, (s || f) && (v = _[t + 1]), h && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), p.placement = v + (b ? "-" + b : ""), p.offsets.popper = x({}, p.offsets.popper, I(p.instance.popper, p.offsets.reference, p.placement)), p = j(p.instance.modifiers, p, "flip"))
          }), p
        }, behavior: "flip", padding: 5, boundariesElement: "viewport"
      }, inner: {
        order: 700, enabled: !1, fn: function (e) {
          var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference,
            s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
          return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = O(t), e.offsets.popper = C(r), e
        }
      }, hide: {
        order: 800, enabled: !0, fn: function (e) {
          if (!B(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference, n = N(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name
          }).boundaries;
          if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
          }
          return e
        }
      }, computeStyle: {
        order: 850, enabled: !0, fn: function (e, t) {
          var n = t.x, i = t.y, r = e.offsets.popper, o = N(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name
          }).gpuAcceleration;
          void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var s = void 0 !== o ? o : t.gpuAcceleration, a = b(y(e.instance.popper)), l = {position: r.position}, c = {
              left: Math.floor(r.left),
              top: Math.round(r.top),
              bottom: Math.round(r.bottom),
              right: Math.floor(r.right)
            }, u = "bottom" === n ? "top" : "bottom", f = "right" === i ? "left" : "right", d = L("transform"),
            h = void 0, p = void 0;
          if (p = "bottom" === u ? -a.height + c.bottom : c.top, h = "right" === f ? -a.width + c.right : c.left, s && d) l[d] = "translate3d(" + h + "px, " + p + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform"; else {
            var g = "bottom" === u ? -1 : 1, m = "right" === f ? -1 : 1;
            l[u] = p * g, l[f] = h * m, l.willChange = u + ", " + f
          }
          var v = {"x-placement": e.placement};
          return e.attributes = x({}, v, e.attributes), e.styles = x({}, l, e.styles), e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles), e
        }, gpuAcceleration: !0, x: "bottom", y: "right"
      }, applyStyle: {
        order: 900, enabled: !0, fn: function (e) {
          var t, n;
          return F(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
          }), e.arrowElement && Object.keys(e.arrowStyles).length && F(e.arrowElement, e.arrowStyles), e
        }, onLoad: function (e, t, n, i, r) {
          var o = D(r, t, e, n.positionFixed),
            s = A(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return t.setAttribute("x-placement", s), F(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
        }, gpuAcceleration: void 0
      }
    }
  }, X = function () {
    function o(e, t) {
      var n = this, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, o), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update)
      }, this.update = s(this.update.bind(this)), this.options = x({}, o.Defaults, i), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(x({}, o.Defaults.modifiers, i.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = x({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return x({name: e}, n.options.modifiers[e])
      }).sort(function (e, t) {
        return e.order - t.order
      }), this.modifiers.forEach(function (e) {
        e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
      }), this.update();
      var r = this.options.eventsEnabled;
      r && this.enableEventListeners(), this.state.eventsEnabled = r
    }

    return c(o, [{
      key: "update", value: function () {
        return function () {
          if (!this.state.isDestroyed) {
            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = I(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = j(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
          }
        }.call(this)
      }
    }, {
      key: "destroy", value: function () {
        return function () {
          return this.state.isDestroyed = !0, P(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[L("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }.call(this)
      }
    }, {
      key: "enableEventListeners", value: function () {
        return function () {
          this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
        }.call(this)
      }
    }, {
      key: "disableEventListeners", value: function () {
        return R.call(this)
      }
    }]), o
  }();
  return X.Utils = ("undefined" != typeof window ? window : global).PopperUtils, X.placements = U, X.Defaults = Q, X
});
var Util = function (i) {
  var t = "transitionend";

  function e(e) {
    var t = this, n = !1;
    return i(this).one(l.TRANSITION_END, function () {
      n = !0
    }), setTimeout(function () {
      n || l.triggerTransitionEnd(t)
    }, e), this
  }

  var l = {
    TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
      for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) ;
      return e
    }, getSelectorFromElement: function (e) {
      var t = e.getAttribute("data-target");
      t && "#" !== t || (t = e.getAttribute("href") || "");
      try {
        return 0 < i(document).find(t).length ? t : null
      } catch (e) {
        return null
      }
    }, getTransitionDurationFromElement: function (e) {
      if (!e) return 0;
      var t = i(e).css("transition-duration");
      return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
    }, reflow: function (e) {
      return e.offsetHeight
    }, triggerTransitionEnd: function (e) {
      i(e).trigger(t)
    }, supportsTransitionEnd: function () {
      return Boolean(t)
    }, isElement: function (e) {
      return (e[0] || e).nodeType
    }, typeCheckConfig: function (e, t, n) {
      for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
        var r = n[i], o = t[i],
          s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
        if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
      }
      var a
    }
  };
  return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = {
    bindType: t,
    delegateType: t,
    handle: function (e) {
      if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
    }
  }, l
}($);

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var Alert = function (r) {
  var e = "alert", o = "bs.alert", t = "." + o, n = r.fn[e],
    s = {CLOSE: "close" + t, CLOSED: "closed" + t, CLICK_DATA_API: "click" + t + ".data-api"}, a = "alert", l = "fade",
    c = "show", i = function () {
      function i(e) {
        this._element = e
      }

      var e = i.prototype;
      return e.close = function (e) {
        var t = this._element;
        e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
      }, e.dispose = function () {
        r.removeData(this._element, o), this._element = null
      }, e._getRootElement = function (e) {
        var t = Util.getSelectorFromElement(e), n = !1;
        return t && (n = r(t)[0]), n || (n = r(e).closest("." + a)[0]), n
      }, e._triggerCloseEvent = function (e) {
        var t = r.Event(s.CLOSE);
        return r(e).trigger(t), t
      }, e._removeElement = function (t) {
        var n = this;
        if (r(t).removeClass(c), r(t).hasClass(l)) {
          var e = Util.getTransitionDurationFromElement(t);
          r(t).one(Util.TRANSITION_END, function (e) {
            return n._destroyElement(t, e)
          }).emulateTransitionEnd(e)
        } else this._destroyElement(t)
      }, e._destroyElement = function (e) {
        r(e).detach().trigger(s.CLOSED).remove()
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var e = r(this), t = e.data(o);
          t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this)
        })
      }, i._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this)
        }
      }, _createClass(i, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }]), i
    }();
  return r(document).on(s.CLICK_DATA_API, '[data-dismiss="alert"]', i._handleDismiss(new i)), r.fn[e] = i._jQueryInterface, r.fn[e].Constructor = i, r.fn[e].noConflict = function () {
    return r.fn[e] = n, i._jQueryInterface
  }, i
}($);

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var Button = function (o) {
  var e = "button", i = "bs.button", t = "." + i, n = ".data-api", r = o.fn[e], s = "active", a = "btn", l = "focus",
    c = '[data-toggle^="button"]', u = '[data-toggle="buttons"]', f = "input", d = ".active", h = ".btn",
    p = {CLICK_DATA_API: "click" + t + n, FOCUS_BLUR_DATA_API: "focus" + t + n + " blur" + t + n}, g = function () {
      function n(e) {
        this._element = e
      }

      var e = n.prototype;
      return e.toggle = function () {
        var e = !0, t = !0, n = o(this._element).closest(u)[0];
        if (n) {
          var i = o(this._element).find(f)[0];
          if (i) {
            if ("radio" === i.type) if (i.checked && o(this._element).hasClass(s)) e = !1; else {
              var r = o(n).find(d)[0];
              r && o(r).removeClass(s)
            }
            if (e) {
              if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
              i.checked = !o(this._element).hasClass(s), o(i).trigger("change")
            }
            i.focus(), t = !1
          }
        }
        t && this._element.setAttribute("aria-pressed", !o(this._element).hasClass(s)), e && o(this._element).toggleClass(s)
      }, e.dispose = function () {
        o.removeData(this._element, i), this._element = null
      }, n._jQueryInterface = function (t) {
        return this.each(function () {
          var e = o(this).data(i);
          e || (e = new n(this), o(this).data(i, e)), "toggle" === t && e[t]()
        })
      }, _createClass(n, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }]), n
    }();
  return o(document).on(p.CLICK_DATA_API, c, function (e) {
    e.preventDefault();
    var t = e.target;
    o(t).hasClass(a) || (t = o(t).closest(h)), g._jQueryInterface.call(o(t), "toggle")
  }).on(p.FOCUS_BLUR_DATA_API, c, function (e) {
    var t = o(e.target).closest(h)[0];
    o(t).toggleClass(l, /^focus(in)?$/.test(e.type))
  }), o.fn[e] = g._jQueryInterface, o.fn[e].Constructor = g, o.fn[e].noConflict = function () {
    return o.fn[e] = r, g._jQueryInterface
  }, g
}($);

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function (e) {
      _defineProperty(t, e, n[e])
    })
  }
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var Carousel = function (h) {
  var t = "carousel", s = "bs.carousel", n = "." + s, e = ".data-api", i = h.fn[t],
    r = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, a = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    }, p = "next", l = "prev", g = "left", m = "right", v = {
      SLIDE: "slide" + n,
      SLID: "slid" + n,
      KEYDOWN: "keydown" + n,
      MOUSEENTER: "mouseenter" + n,
      MOUSELEAVE: "mouseleave" + n,
      TOUCHEND: "touchend" + n,
      LOAD_DATA_API: "load" + n + e,
      CLICK_DATA_API: "click" + n + e
    }, c = "carousel", y = "active", b = "slide", _ = "carousel-item-right", w = "carousel-item-left",
    x = "carousel-item-next", C = "carousel-item-prev", u = ".active", E = ".active.carousel-item",
    f = ".carousel-item", d = ".carousel-item-next, .carousel-item-prev", T = ".carousel-indicators",
    o = "[data-slide], [data-slide-to]", S = '[data-ride="carousel"]', A = function () {
      function o(e, t) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = h(e)[0], this._indicatorsElement = h(this._element).find(T)[0], this._addEventListeners()
      }

      var e = o.prototype;
      return e.next = function () {
        this._isSliding || this._slide(p)
      }, e.nextWhenVisible = function () {
        !document.hidden && h(this._element).is(":visible") && "hidden" !== h(this._element).css("visibility") && this.next()
      }, e.prev = function () {
        this._isSliding || this._slide(l)
      }, e.pause = function (e) {
        e || (this._isPaused = !0), h(this._element).find(d)[0] && (Util.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }, e.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }, e.to = function (e) {
        var t = this;
        this._activeElement = h(this._element).find(E)[0];
        var n = this._getItemIndex(this._activeElement);
        if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) h(this._element).one(v.SLID, function () {
          return t.to(e)
        }); else {
          if (n === e) return this.pause(), void this.cycle();
          var i = n < e ? p : l;
          this._slide(i, this._items[e])
        }
      }, e.dispose = function () {
        h(this._element).off(n), h.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
      }, e._getConfig = function (e) {
        return e = _objectSpread({}, r, e), Util.typeCheckConfig(t, e, a), e
      }, e._addEventListeners = function () {
        var t = this;
        this._config.keyboard && h(this._element).on(v.KEYDOWN, function (e) {
          return t._keydown(e)
        }), "hover" === this._config.pause && (h(this._element).on(v.MOUSEENTER, function (e) {
          return t.pause(e)
        }).on(v.MOUSELEAVE, function (e) {
          return t.cycle(e)
        }), "ontouchstart" in document.documentElement && h(this._element).on(v.TOUCHEND, function () {
          t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e)
          }, 500 + t._config.interval)
        }))
      }, e._keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
          case 37:
            e.preventDefault(), this.prev();
            break;
          case 39:
            e.preventDefault(), this.next()
        }
      }, e._getItemIndex = function (e) {
        return this._items = h.makeArray(h(e).parent().find(f)), this._items.indexOf(e)
      }, e._getItemByDirection = function (e, t) {
        var n = e === p, i = e === l, r = this._getItemIndex(t), o = this._items.length - 1;
        if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
        var s = (r + (e === l ? -1 : 1)) % this._items.length;
        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
      }, e._triggerSlideEvent = function (e, t) {
        var n = this._getItemIndex(e), i = this._getItemIndex(h(this._element).find(E)[0]),
          r = h.Event(v.SLIDE, {relatedTarget: e, direction: t, from: i, to: n});
        return h(this._element).trigger(r), r
      }, e._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          h(this._indicatorsElement).find(u).removeClass(y);
          var t = this._indicatorsElement.children[this._getItemIndex(e)];
          t && h(t).addClass(y)
        }
      }, e._slide = function (e, t) {
        var n, i, r, o = this, s = h(this._element).find(E)[0], a = this._getItemIndex(s),
          l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), u = Boolean(this._interval);
        if (e === p ? (n = w, i = x, r = g) : (n = _, i = C, r = m), l && h(l).hasClass(y)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
          this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
          var f = h.Event(v.SLID, {relatedTarget: l, direction: r, from: a, to: c});
          if (h(this._element).hasClass(b)) {
            h(l).addClass(i), Util.reflow(l), h(s).addClass(n), h(l).addClass(n);
            var d = Util.getTransitionDurationFromElement(s);
            h(s).one(Util.TRANSITION_END, function () {
              h(l).removeClass(n + " " + i).addClass(y), h(s).removeClass(y + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
                return h(o._element).trigger(f)
              }, 0)
            }).emulateTransitionEnd(d)
          } else h(s).removeClass(y), h(l).addClass(y), this._isSliding = !1, h(this._element).trigger(f);
          u && this.cycle()
        }
      }, o._jQueryInterface = function (i) {
        return this.each(function () {
          var e = h(this).data(s), t = _objectSpread({}, r, h(this).data());
          "object" == typeof i && (t = _objectSpread({}, t, i));
          var n = "string" == typeof i ? i : t.slide;
          if (e || (e = new o(this, t), h(this).data(s, e)), "number" == typeof i) e.to(i); else if ("string" == typeof n) {
            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          } else t.interval && (e.pause(), e.cycle())
        })
      }, o._dataApiClickHandler = function (e) {
        var t = Util.getSelectorFromElement(this);
        if (t) {
          var n = h(t)[0];
          if (n && h(n).hasClass(c)) {
            var i = _objectSpread({}, h(n).data(), h(this).data()), r = this.getAttribute("data-slide-to");
            r && (i.interval = !1), o._jQueryInterface.call(h(n), i), r && h(n).data(s).to(r), e.preventDefault()
          }
        }
      }, _createClass(o, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return r
        }
      }]), o
    }();
  return h(document).on(v.CLICK_DATA_API, o, A._dataApiClickHandler), h(window).on(v.LOAD_DATA_API, function () {
    h(S).each(function () {
      var e = h(this);
      A._jQueryInterface.call(e, e.data())
    })
  }), h.fn[t] = A._jQueryInterface, h.fn[t].Constructor = A, h.fn[t].noConflict = function () {
    return h.fn[t] = i, A._jQueryInterface
  }, A
}($);

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function (e) {
      _defineProperty(t, e, n[e])
    })
  }
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var Collapse = function (l) {
  var t = "collapse", c = "bs.collapse", e = "." + c, n = l.fn[t], r = {toggle: !0, parent: ""},
    i = {toggle: "boolean", parent: "(string|element)"}, u = {
      SHOW: "show" + e,
      SHOWN: "shown" + e,
      HIDE: "hide" + e,
      HIDDEN: "hidden" + e,
      CLICK_DATA_API: "click" + e + ".data-api"
    }, f = "show", d = "collapse", h = "collapsing", p = "collapsed", o = "width", s = "height", g = ".show, .collapsing",
    m = '[data-toggle="collapse"]', a = function () {
      function a(e, t) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = l.makeArray(l('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
        for (var n = l(m), i = 0; i < n.length; i++) {
          var r = n[i], o = Util.getSelectorFromElement(r);
          null !== o && 0 < l(o).filter(e).length && (this._selector = o, this._triggerArray.push(r))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
      }

      var e = a.prototype;
      return e.toggle = function () {
        l(this._element).hasClass(f) ? this.hide() : this.show()
      }, e.show = function () {
        var e, t, n = this;
        if (!this._isTransitioning && !l(this._element).hasClass(f) && (this._parent && 0 === (e = l.makeArray(l(this._parent).find(g).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (t = l(e).not(this._selector).data(c)) && t._isTransitioning))) {
          var i = l.Event(u.SHOW);
          if (l(this._element).trigger(i), !i.isDefaultPrevented()) {
            e && (a._jQueryInterface.call(l(e).not(this._selector), "hide"), t || l(e).data(c, null));
            var r = this._getDimension();
            l(this._element).removeClass(d).addClass(h), (this._element.style[r] = 0) < this._triggerArray.length && l(this._triggerArray).removeClass(p).attr("aria-expanded", !0), this.setTransitioning(!0);
            var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              s = Util.getTransitionDurationFromElement(this._element);
            l(this._element).one(Util.TRANSITION_END, function () {
              l(n._element).removeClass(h).addClass(d).addClass(f), n._element.style[r] = "", n.setTransitioning(!1), l(n._element).trigger(u.SHOWN)
            }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
          }
        }
      }, e.hide = function () {
        var e = this;
        if (!this._isTransitioning && l(this._element).hasClass(f)) {
          var t = l.Event(u.HIDE);
          if (l(this._element).trigger(t), !t.isDefaultPrevented()) {
            var n = this._getDimension();
            if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Util.reflow(this._element), l(this._element).addClass(h).removeClass(d).removeClass(f), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
              var r = this._triggerArray[i], o = Util.getSelectorFromElement(r);
              if (null !== o) l(o).hasClass(f) || l(r).addClass(p).attr("aria-expanded", !1)
            }
            this.setTransitioning(!0);
            this._element.style[n] = "";
            var s = Util.getTransitionDurationFromElement(this._element);
            l(this._element).one(Util.TRANSITION_END, function () {
              e.setTransitioning(!1), l(e._element).removeClass(h).addClass(d).trigger(u.HIDDEN)
            }).emulateTransitionEnd(s)
          }
        }
      }, e.setTransitioning = function (e) {
        this._isTransitioning = e
      }, e.dispose = function () {
        l.removeData(this._element, c), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
      }, e._getConfig = function (e) {
        return (e = _objectSpread({}, r, e)).toggle = Boolean(e.toggle), Util.typeCheckConfig(t, e, i), e
      }, e._getDimension = function () {
        return l(this._element).hasClass(o) ? o : s
      }, e._getParent = function () {
        var n = this, e = null;
        Util.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = l(this._config.parent)[0];
        var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return l(e).find(t).each(function (e, t) {
          n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
        }), e
      }, e._addAriaAndCollapsedClass = function (e, t) {
        if (e) {
          var n = l(e).hasClass(f);
          0 < t.length && l(t).toggleClass(p, !n).attr("aria-expanded", n)
        }
      }, a._getTargetFromElement = function (e) {
        var t = Util.getSelectorFromElement(e);
        return t ? l(t)[0] : null
      }, a._jQueryInterface = function (i) {
        return this.each(function () {
          var e = l(this), t = e.data(c), n = _objectSpread({}, r, e.data(), "object" == typeof i && i ? i : {});
          if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(c, t)), "string" == typeof i) {
            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
            t[i]()
          }
        })
      }, _createClass(a, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return r
        }
      }]), a
    }();
  return l(document).on(u.CLICK_DATA_API, m, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = l(this), t = Util.getSelectorFromElement(this);
    l(t).each(function () {
      var e = l(this), t = e.data(c) ? "toggle" : n.data();
      a._jQueryInterface.call(e, t)
    })
  }), l.fn[t] = a._jQueryInterface, l.fn[t].Constructor = a, l.fn[t].noConflict = function () {
    return l.fn[t] = n, a._jQueryInterface
  }, a
}($);

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function (e) {
      _defineProperty(t, e, n[e])
    })
  }
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var Dropdown = function (c) {
  var t = "dropdown", u = "bs.dropdown", n = "." + u, e = ".data-api", i = c.fn[t], s = new RegExp("38|40|27"), f = {
      HIDE: "hide" + n,
      HIDDEN: "hidden" + n,
      SHOW: "show" + n,
      SHOWN: "shown" + n,
      CLICK: "click" + n,
      CLICK_DATA_API: "click" + n + e,
      KEYDOWN_DATA_API: "keydown" + n + e,
      KEYUP_DATA_API: "keyup" + n + e
    }, a = "disabled", d = "show", r = "dropup", o = "dropright", h = "dropleft", p = "dropdown-menu-right",
    g = "position-static", m = '[data-toggle="dropdown"]', l = ".dropdown form", v = ".dropdown-menu",
    y = ".navbar-nav", b = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", _ = "top-start",
    w = "top-end", x = "bottom-start", C = "bottom-end", E = "right-start", T = "left-start",
    S = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, A = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string"
    }, D = function () {
      function l(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
      }

      var e = l.prototype;
      return e.toggle = function () {
        if (!this._element.disabled && !c(this._element).hasClass(a)) {
          var e = l._getParentFromElement(this._element), t = c(this._menu).hasClass(d);
          if (l._clearMenus(), !t) {
            var n = {relatedTarget: this._element}, i = c.Event(f.SHOW, n);
            if (c(e).trigger(i), !i.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof Popper) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                var r = this._element;
                "parent" === this._config.reference ? r = e : Util.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && c(e).addClass(g), this._popper = new Popper(r, this._menu, this._getPopperConfig())
              }
              "ontouchstart" in document.documentElement && 0 === c(e).closest(y).length && c(document.body).children().on("mouseover", null, c.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), c(this._menu).toggleClass(d), c(e).toggleClass(d).trigger(c.Event(f.SHOWN, n))
            }
          }
        }
      }, e.dispose = function () {
        c.removeData(this._element, u), c(this._element).off(n), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
      }, e.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
      }, e._addEventListeners = function () {
        var t = this;
        c(this._element).on(f.CLICK, function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle()
        })
      }, e._getConfig = function (e) {
        return e = _objectSpread({}, this.constructor.Default, c(this._element).data(), e), Util.typeCheckConfig(t, e, this.constructor.DefaultType), e
      }, e._getMenuElement = function () {
        if (!this._menu) {
          var e = l._getParentFromElement(this._element);
          this._menu = c(e).find(v)[0]
        }
        return this._menu
      }, e._getPlacement = function () {
        var e = c(this._element).parent(), t = x;
        return e.hasClass(r) ? (t = _, c(this._menu).hasClass(p) && (t = w)) : e.hasClass(o) ? t = E : e.hasClass(h) ? t = T : c(this._menu).hasClass(p) && (t = C), t
      }, e._detectNavbar = function () {
        return 0 < c(this._element).closest(".navbar").length
      }, e._getPopperConfig = function () {
        var t = this, e = {};
        "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = _objectSpread({}, e.offsets, t._config.offset(e.offsets) || {}), e
        } : e.offset = this._config.offset;
        var n = {
          placement: this._getPlacement(),
          modifiers: {
            offset: e,
            flip: {enabled: this._config.flip},
            preventOverflow: {boundariesElement: this._config.boundary}
          }
        };
        return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
      }, l._jQueryInterface = function (t) {
        return this.each(function () {
          var e = c(this).data(u);
          if (e || (e = new l(this, "object" == typeof t ? t : null), c(this).data(u, e)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, l._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var t = c.makeArray(c(m)), n = 0; n < t.length; n++) {
          var i = l._getParentFromElement(t[n]), r = c(t[n]).data(u), o = {relatedTarget: t[n]};
          if (r) {
            var s = r._menu;
            if (c(i).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && c.contains(i, e.target))) {
              var a = c.Event(f.HIDE, o);
              c(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && c(document.body).children().off("mouseover", null, c.noop), t[n].setAttribute("aria-expanded", "false"), c(s).removeClass(d), c(i).removeClass(d).trigger(c.Event(f.HIDDEN, o)))
            }
          }
        }
      }, l._getParentFromElement = function (e) {
        var t, n = Util.getSelectorFromElement(e);
        return n && (t = c(n)[0]), t || e.parentNode
      }, l._dataApiKeydownHandler = function (e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || c(e.target).closest(v).length)) : s.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !c(this).hasClass(a))) {
          var t = l._getParentFromElement(this), n = c(t).hasClass(d);
          if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
            var i = c(t).find(b).get();
            if (0 !== i.length) {
              var r = i.indexOf(e.target);
              38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
            }
          } else {
            if (27 === e.which) {
              var o = c(t).find(m)[0];
              c(o).trigger("focus")
            }
            c(this).trigger("click")
          }
        }
      }, _createClass(l, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return S
        }
      }, {
        key: "DefaultType", get: function () {
          return A
        }
      }]), l
    }();
  return c(document).on(f.KEYDOWN_DATA_API, m, D._dataApiKeydownHandler).on(f.KEYDOWN_DATA_API, v, D._dataApiKeydownHandler).on(f.CLICK_DATA_API + " " + f.KEYUP_DATA_API, D._clearMenus).on(f.CLICK_DATA_API, m, function (e) {
    e.preventDefault(), e.stopPropagation(), D._jQueryInterface.call(c(this), "toggle")
  }).on(f.CLICK_DATA_API, l, function (e) {
    e.stopPropagation()
  }), c.fn[t] = D._jQueryInterface, c.fn[t].Constructor = D, c.fn[t].noConflict = function () {
    return c.fn[t] = i, D._jQueryInterface
  }, D
}($, Popper);

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function (e) {
      _defineProperty(t, e, n[e])
    })
  }
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var Modal = function (s) {
  var t = "modal", a = "bs.modal", n = "." + a, e = s.fn[t], o = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
    i = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, l = {
      HIDE: "hide" + n,
      HIDDEN: "hidden" + n,
      SHOW: "show" + n,
      SHOWN: "shown" + n,
      FOCUSIN: "focusin" + n,
      RESIZE: "resize" + n,
      CLICK_DISMISS: "click.dismiss" + n,
      KEYDOWN_DISMISS: "keydown.dismiss" + n,
      MOUSEUP_DISMISS: "mouseup.dismiss" + n,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
      CLICK_DATA_API: "click" + n + ".data-api"
    }, c = "modal-scrollbar-measure", u = "modal-backdrop", f = "modal-open", d = "fade", h = "show", p = ".modal-dialog",
    r = '[data-toggle="modal"]', g = '[data-dismiss="modal"]', m = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    v = ".sticky-top", y = ".navbar-toggler", b = function () {
      function r(e, t) {
        this._config = this._getConfig(t), this._element = e, this._dialog = s(e).find(p)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
      }

      var e = r.prototype;
      return e.toggle = function (e) {
        return this._isShown ? this.hide() : this.show(e)
      }, e.show = function (e) {
        var t = this;
        if (!this._isTransitioning && !this._isShown) {
          s(this._element).hasClass(d) && (this._isTransitioning = !0);
          var n = s.Event(l.SHOW, {relatedTarget: e});
          s(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), s(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), s(this._element).on(l.CLICK_DISMISS, g, function (e) {
            return t.hide(e)
          }), s(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
            s(t._element).one(l.MOUSEUP_DISMISS, function (e) {
              s(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
            })
          }), this._showBackdrop(function () {
            return t._showElement(e)
          }))
        }
      }, e.hide = function (e) {
        var t = this;
        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
          var n = s.Event(l.HIDE);
          if (s(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
            this._isShown = !1;
            var i = s(this._element).hasClass(d);
            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), s(document).off(l.FOCUSIN), s(this._element).removeClass(h), s(this._element).off(l.CLICK_DISMISS), s(this._dialog).off(l.MOUSEDOWN_DISMISS), i) {
              var r = Util.getTransitionDurationFromElement(this._element);
              s(this._element).one(Util.TRANSITION_END, function (e) {
                return t._hideModal(e)
              }).emulateTransitionEnd(r)
            } else this._hideModal()
          }
        }
      }, e.dispose = function () {
        s.removeData(this._element, a), s(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
      }, e.handleUpdate = function () {
        this._adjustDialog()
      }, e._getConfig = function (e) {
        return e = _objectSpread({}, o, e), Util.typeCheckConfig(t, e, i), e
      }, e._showElement = function (e) {
        var t = this, n = s(this._element).hasClass(d);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Util.reflow(this._element), s(this._element).addClass(h), this._config.focus && this._enforceFocus();
        var i = s.Event(l.SHOWN, {relatedTarget: e}), r = function () {
          t._config.focus && t._element.focus(), t._isTransitioning = !1, s(t._element).trigger(i)
        };
        if (n) {
          var o = Util.getTransitionDurationFromElement(this._element);
          s(this._dialog).one(Util.TRANSITION_END, r).emulateTransitionEnd(o)
        } else r()
      }, e._enforceFocus = function () {
        var t = this;
        s(document).off(l.FOCUSIN).on(l.FOCUSIN, function (e) {
          document !== e.target && t._element !== e.target && 0 === s(t._element).has(e.target).length && t._element.focus()
        })
      }, e._setEscapeEvent = function () {
        var t = this;
        this._isShown && this._config.keyboard ? s(this._element).on(l.KEYDOWN_DISMISS, function (e) {
          27 === e.which && (e.preventDefault(), t.hide())
        }) : this._isShown || s(this._element).off(l.KEYDOWN_DISMISS)
      }, e._setResizeEvent = function () {
        var t = this;
        this._isShown ? s(window).on(l.RESIZE, function (e) {
          return t.handleUpdate(e)
        }) : s(window).off(l.RESIZE)
      }, e._hideModal = function () {
        var e = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          s(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), s(e._element).trigger(l.HIDDEN)
        })
      }, e._removeBackdrop = function () {
        this._backdrop && (s(this._backdrop).remove(), this._backdrop = null)
      }, e._showBackdrop = function (e) {
        var t = this, n = s(this._element).hasClass(d) ? d : "";
        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = u, n && s(this._backdrop).addClass(n), s(this._backdrop).appendTo(document.body), s(this._element).on(l.CLICK_DISMISS, function (e) {
            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
          }), n && Util.reflow(this._backdrop), s(this._backdrop).addClass(h), !e) return;
          if (!n) return void e();
          var i = Util.getTransitionDurationFromElement(this._backdrop);
          s(this._backdrop).one(Util.TRANSITION_END, e).emulateTransitionEnd(i)
        } else if (!this._isShown && this._backdrop) {
          s(this._backdrop).removeClass(h);
          var r = function () {
            t._removeBackdrop(), e && e()
          };
          if (s(this._element).hasClass(d)) {
            var o = Util.getTransitionDurationFromElement(this._backdrop);
            s(this._backdrop).one(Util.TRANSITION_END, r).emulateTransitionEnd(o)
          } else r()
        } else e && e()
      }, e._adjustDialog = function () {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }, e._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }, e._checkScrollbar = function () {
        var e = document.body.getBoundingClientRect();
        this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
      }, e._setScrollbar = function () {
        var r = this;
        if (this._isBodyOverflowing) {
          s(m).each(function (e, t) {
            var n = s(t)[0].style.paddingRight, i = s(t).css("padding-right");
            s(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
          }), s(v).each(function (e, t) {
            var n = s(t)[0].style.marginRight, i = s(t).css("margin-right");
            s(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
          }), s(y).each(function (e, t) {
            var n = s(t)[0].style.marginRight, i = s(t).css("margin-right");
            s(t).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
          });
          var e = document.body.style.paddingRight, t = s(document.body).css("padding-right");
          s(document.body).data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
        }
      }, e._resetScrollbar = function () {
        s(m).each(function (e, t) {
          var n = s(t).data("padding-right");
          void 0 !== n && s(t).css("padding-right", n).removeData("padding-right")
        }), s(v + ", " + y).each(function (e, t) {
          var n = s(t).data("margin-right");
          void 0 !== n && s(t).css("margin-right", n).removeData("margin-right")
        });
        var e = s(document.body).data("padding-right");
        void 0 !== e && s(document.body).css("padding-right", e).removeData("padding-right")
      }, e._getScrollbarWidth = function () {
        var e = document.createElement("div");
        e.className = c, document.body.appendChild(e);
        var t = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e), t
      }, r._jQueryInterface = function (n, i) {
        return this.each(function () {
          var e = s(this).data(a), t = _objectSpread({}, o, s(this).data(), "object" == typeof n && n ? n : {});
          if (e || (e = new r(this, t), s(this).data(a, e)), "string" == typeof n) {
            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
            e[n](i)
          } else t.show && e.show(i)
        })
      }, _createClass(r, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return o
        }
      }]), r
    }();
  return s(document).on(l.CLICK_DATA_API, r, function (e) {
    var t, n = this, i = Util.getSelectorFromElement(this);
    i && (t = s(i)[0]);
    var r = s(t).data(a) ? "toggle" : _objectSpread({}, s(t).data(), s(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var o = s(t).one(l.SHOW, function (e) {
      e.isDefaultPrevented() || o.one(l.HIDDEN, function () {
        s(n).is(":visible") && n.focus()
      })
    });
    b._jQueryInterface.call(s(t), r, this)
  }), s.fn[t] = b._jQueryInterface, s.fn[t].Constructor = b, s.fn[t].noConflict = function () {
    return s.fn[t] = e, b._jQueryInterface
  }, b
}($);

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function (e) {
      _defineProperty(t, e, n[e])
    })
  }
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var ScrollSpy = function (s) {
  var i = "scrollspy", r = "bs.scrollspy", t = "." + r, e = s.fn[i], o = {offset: 10, method: "auto", target: ""},
    a = {offset: "number", method: "string", target: "(string|element)"},
    l = {ACTIVATE: "activate" + t, SCROLL: "scroll" + t, LOAD_DATA_API: "load" + t + ".data-api"}, c = "dropdown-item",
    u = "active", f = '[data-spy="scroll"]', d = ".active", h = ".nav, .list-group", p = ".nav-link", g = ".nav-item",
    m = ".list-group-item", v = ".dropdown", y = ".dropdown-item", b = ".dropdown-toggle", _ = "offset", w = "position",
    x = function () {
      function n(e, t) {
        var n = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + p + "," + this._config.target + " " + m + "," + this._config.target + " " + y, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, s(this._scrollElement).on(l.SCROLL, function (e) {
          return n._process(e)
        }), this.refresh(), this._process()
      }

      var e = n.prototype;
      return e.refresh = function () {
        var t = this, e = this._scrollElement === this._scrollElement.window ? _ : w,
          r = "auto" === this._config.method ? e : this._config.method, o = r === w ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), s.makeArray(s(this._selector)).map(function (e) {
          var t, n = Util.getSelectorFromElement(e);
          if (n && (t = s(n)[0]), t) {
            var i = t.getBoundingClientRect();
            if (i.width || i.height) return [s(t)[r]().top + o, n]
          }
          return null
        }).filter(function (e) {
          return e
        }).sort(function (e, t) {
          return e[0] - t[0]
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1])
        })
      }, e.dispose = function () {
        s.removeData(this._element, r), s(this._scrollElement).off(t), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
      }, e._getConfig = function (e) {
        if ("string" != typeof (e = _objectSpread({}, o, "object" == typeof e && e ? e : {})).target) {
          var t = s(e.target).attr("id");
          t || (t = Util.getUID(i), s(e.target).attr("id", t)), e.target = "#" + t
        }
        return Util.typeCheckConfig(i, e, a), e
      }, e._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }, e._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }, e._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }, e._process = function () {
        var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();
        if (this._scrollHeight !== t && this.refresh(), n <= e) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i)
        } else {
          if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
          for (var r = this._offsets.length; r--;) {
            this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
          }
        }
      }, e._activate = function (t) {
        this._activeTarget = t, this._clear();
        var e = this._selector.split(",");
        e = e.map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        });
        var n = s(e.join(","));
        n.hasClass(c) ? (n.closest(v).find(b).addClass(u), n.addClass(u)) : (n.addClass(u), n.parents(h).prev(p + ", " + m).addClass(u), n.parents(h).prev(g).children(p).addClass(u)), s(this._scrollElement).trigger(l.ACTIVATE, {relatedTarget: t})
      }, e._clear = function () {
        s(this._selector).filter(d).removeClass(u)
      }, n._jQueryInterface = function (t) {
        return this.each(function () {
          var e = s(this).data(r);
          if (e || (e = new n(this, "object" == typeof t && t), s(this).data(r, e)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
            e[t]()
          }
        })
      }, _createClass(n, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return o
        }
      }]), n
    }();
  return s(window).on(l.LOAD_DATA_API, function () {
    for (var e = s.makeArray(s(f)), t = e.length; t--;) {
      var n = s(e[t]);
      x._jQueryInterface.call(n, n.data())
    }
  }), s.fn[i] = x._jQueryInterface, s.fn[i].Constructor = x, s.fn[i].noConflict = function () {
    return s.fn[i] = e, x._jQueryInterface
  }, x
}($);

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var Tab = function (c) {
  var r = "bs.tab", e = "." + r, t = c.fn.tab, u = {
      HIDE: "hide" + e,
      HIDDEN: "hidden" + e,
      SHOW: "show" + e,
      SHOWN: "shown" + e,
      CLICK_DATA_API: "click" + e + ".data-api"
    }, o = "dropdown-menu", f = "active", d = "disabled", l = "fade", s = "show", a = ".dropdown",
    h = ".nav, .list-group", p = ".active", g = "> li > .active",
    n = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', m = ".dropdown-toggle",
    v = "> .dropdown-menu .active", i = function () {
      function i(e) {
        this._element = e
      }

      var e = i.prototype;
      return e.show = function () {
        var n = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && c(this._element).hasClass(f) || c(this._element).hasClass(d))) {
          var e, i, t = c(this._element).closest(h)[0], r = Util.getSelectorFromElement(this._element);
          if (t) {
            var o = "UL" === t.nodeName ? g : p;
            i = (i = c.makeArray(c(t).find(o)))[i.length - 1]
          }
          var s = c.Event(u.HIDE, {relatedTarget: this._element}), a = c.Event(u.SHOW, {relatedTarget: i});
          if (i && c(i).trigger(s), c(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
            r && (e = c(r)[0]), this._activate(this._element, t);
            var l = function () {
              var e = c.Event(u.HIDDEN, {relatedTarget: n._element}), t = c.Event(u.SHOWN, {relatedTarget: i});
              c(i).trigger(e), c(n._element).trigger(t)
            };
            e ? this._activate(e, e.parentNode, l) : l()
          }
        }
      }, e.dispose = function () {
        c.removeData(this._element, r), this._element = null
      }, e._activate = function (e, t, n) {
        var i = this, r = ("UL" === t.nodeName ? c(t).find(g) : c(t).children(p))[0], o = n && r && c(r).hasClass(l),
          s = function () {
            return i._transitionComplete(e, r, n)
          };
        if (r && o) {
          var a = Util.getTransitionDurationFromElement(r);
          c(r).one(Util.TRANSITION_END, s).emulateTransitionEnd(a)
        } else s()
      }, e._transitionComplete = function (e, t, n) {
        if (t) {
          c(t).removeClass(s + " " + f);
          var i = c(t.parentNode).find(v)[0];
          i && c(i).removeClass(f), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
        }
        if (c(e).addClass(f), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Util.reflow(e), c(e).addClass(s), e.parentNode && c(e.parentNode).hasClass(o)) {
          var r = c(e).closest(a)[0];
          r && c(r).find(m).addClass(f), e.setAttribute("aria-expanded", !0)
        }
        n && n()
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var e = c(this), t = e.data(r);
          if (t || (t = new i(this), e.data(r, t)), "string" == typeof n) {
            if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
            t[n]()
          }
        })
      }, _createClass(i, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }]), i
    }();
  return c(document).on(u.CLICK_DATA_API, n, function (e) {
    e.preventDefault(), i._jQueryInterface.call(c(this), "show")
  }), c.fn.tab = i._jQueryInterface, c.fn.tab.Constructor = i, c.fn.tab.noConflict = function () {
    return c.fn.tab = t, i._jQueryInterface
  }, i
}($);

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function (e) {
      _defineProperty(t, e, n[e])
    })
  }
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

var Tooltip = function (u) {
  var t = "tooltip", r = "bs.tooltip", n = "." + r, e = u.fn[t], o = "bs-tooltip",
    s = new RegExp("(^|\\s)" + o + "\\S+", "g"), a = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    }, l = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, c = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
    }, f = "show", d = "out", h = {
      HIDE: "hide" + n,
      HIDDEN: "hidden" + n,
      SHOW: "show" + n,
      SHOWN: "shown" + n,
      INSERTED: "inserted" + n,
      CLICK: "click" + n,
      FOCUSIN: "focusin" + n,
      FOCUSOUT: "focusout" + n,
      MOUSEENTER: "mouseenter" + n,
      MOUSELEAVE: "mouseleave" + n
    }, p = "fade", g = "show", m = ".tooltip-inner", v = ".arrow", y = "hover", b = "focus", _ = "click", w = "manual",
    i = function () {
      function i(e, t) {
        if ("undefined" == typeof Popper) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
      }

      var e = i.prototype;
      return e.enable = function () {
        this._isEnabled = !0
      }, e.disable = function () {
        this._isEnabled = !1
      }, e.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled
      }, e.toggle = function (e) {
        if (this._isEnabled) if (e) {
          var t = this.constructor.DATA_KEY, n = u(e.currentTarget).data(t);
          n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), u(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
        } else {
          if (u(this.getTipElement()).hasClass(g)) return void this._leave(null, this);
          this._enter(null, this)
        }
      }, e.dispose = function () {
        clearTimeout(this._timeout), u.removeData(this.element, this.constructor.DATA_KEY), u(this.element).off(this.constructor.EVENT_KEY), u(this.element).closest(".modal").off("hide.bs.modal"), this.tip && u(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
      }, e.show = function () {
        var t = this;
        if ("none" === u(this.element).css("display")) throw new Error("Please use show on visible elements");
        var e = u.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          u(this.element).trigger(e);
          var n = u.contains(this.element.ownerDocument.documentElement, this.element);
          if (e.isDefaultPrevented() || !n) return;
          var i = this.getTipElement(), r = Util.getUID(this.constructor.NAME);
          i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && u(i).addClass(p);
          var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            s = this._getAttachment(o);
          this.addAttachmentClass(s);
          var a = !1 === this.config.container ? document.body : u(this.config.container);
          u(i).data(this.constructor.DATA_KEY, this), u.contains(this.element.ownerDocument.documentElement, this.tip) || u(i).appendTo(a), u(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Popper(this.element, i, {
            placement: s,
            modifiers: {
              offset: {offset: this.config.offset},
              flip: {behavior: this.config.fallbackPlacement},
              arrow: {element: v},
              preventOverflow: {boundariesElement: this.config.boundary}
            },
            onCreate: function (e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
            },
            onUpdate: function (e) {
              t._handlePopperPlacementChange(e)
            }
          }), u(i).addClass(g), "ontouchstart" in document.documentElement && u(document.body).children().on("mouseover", null, u.noop);
          var l = function () {
            t.config.animation && t._fixTransition();
            var e = t._hoverState;
            t._hoverState = null, u(t.element).trigger(t.constructor.Event.SHOWN), e === d && t._leave(null, t)
          };
          if (u(this.tip).hasClass(p)) {
            var c = Util.getTransitionDurationFromElement(this.tip);
            u(this.tip).one(Util.TRANSITION_END, l).emulateTransitionEnd(c)
          } else l()
        }
      }, e.hide = function (e) {
        var t = this, n = this.getTipElement(), i = u.Event(this.constructor.Event.HIDE), r = function () {
          t._hoverState !== f && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), u(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
        };
        if (u(this.element).trigger(i), !i.isDefaultPrevented()) {
          if (u(n).removeClass(g), "ontouchstart" in document.documentElement && u(document.body).children().off("mouseover", null, u.noop), this._activeTrigger[_] = !1, this._activeTrigger[b] = !1, this._activeTrigger[y] = !1, u(this.tip).hasClass(p)) {
            var o = Util.getTransitionDurationFromElement(n);
            u(n).one(Util.TRANSITION_END, r).emulateTransitionEnd(o)
          } else r();
          this._hoverState = ""
        }
      }, e.update = function () {
        null !== this._popper && this._popper.scheduleUpdate()
      }, e.isWithContent = function () {
        return Boolean(this.getTitle())
      }, e.addAttachmentClass = function (e) {
        u(this.getTipElement()).addClass(o + "-" + e)
      }, e.getTipElement = function () {
        return this.tip = this.tip || u(this.config.template)[0], this.tip
      }, e.setContent = function () {
        var e = u(this.getTipElement());
        this.setElementContent(e.find(m), this.getTitle()), e.removeClass(p + " " + g)
      }, e.setElementContent = function (e, t) {
        var n = this.config.html;
        "object" == typeof t && (t.nodeType || t.jquery) ? n ? u(t).parent().is(e) || e.empty().append(t) : e.text(u(t).text()) : e[n ? "html" : "text"](t)
      }, e.getTitle = function () {
        var e = this.element.getAttribute("data-original-title");
        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
      }, e._getAttachment = function (e) {
        return l[e.toUpperCase()]
      }, e._setListeners = function () {
        var i = this;
        this.config.trigger.split(" ").forEach(function (e) {
          if ("click" === e) u(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
            return i.toggle(e)
          }); else if (e !== w) {
            var t = e === y ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = e === y ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
            u(i.element).on(t, i.config.selector, function (e) {
              return i._enter(e)
            }).on(n, i.config.selector, function (e) {
              return i._leave(e)
            })
          }
          u(i.element).closest(".modal").on("hide.bs.modal", function () {
            return i.hide()
          })
        }), this.config.selector ? this.config = _objectSpread({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle()
      }, e._fixTitle = function () {
        var e = typeof this.element.getAttribute("data-original-title");
        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
      }, e._enter = function (e, t) {
        var n = this.constructor.DATA_KEY;
        (t = t || u(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), u(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? b : y] = !0), u(t.getTipElement()).hasClass(g) || t._hoverState === f ? t._hoverState = f : (clearTimeout(t._timeout), t._hoverState = f, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
          t._hoverState === f && t.show()
        }, t.config.delay.show) : t.show())
      }, e._leave = function (e, t) {
        var n = this.constructor.DATA_KEY;
        (t = t || u(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), u(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? b : y] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = d, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
          t._hoverState === d && t.hide()
        }, t.config.delay.hide) : t.hide())
      }, e._isWithActiveTrigger = function () {
        for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
        return !1
      }, e._getConfig = function (e) {
        return "number" == typeof (e = _objectSpread({}, this.constructor.Default, u(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
          show: e.delay,
          hide: e.delay
        }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Util.typeCheckConfig(t, e, this.constructor.DefaultType), e
      }, e._getDelegateConfig = function () {
        var e = {};
        if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        return e
      }, e._cleanTipClass = function () {
        var e = u(this.getTipElement()), t = e.attr("class").match(s);
        null !== t && 0 < t.length && e.removeClass(t.join(""))
      }, e._handlePopperPlacementChange = function (e) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
      }, e._fixTransition = function () {
        var e = this.getTipElement(), t = this.config.animation;
        null === e.getAttribute("x-placement") && (u(e).removeClass(p), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var e = u(this).data(r), t = "object" == typeof n && n;
          if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), u(this).data(r, e)), "string" == typeof n)) {
            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          }
        })
      }, _createClass(i, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return c
        }
      }, {
        key: "NAME", get: function () {
          return t
        }
      }, {
        key: "DATA_KEY", get: function () {
          return r
        }
      }, {
        key: "Event", get: function () {
          return h
        }
      }, {
        key: "EVENT_KEY", get: function () {
          return n
        }
      }, {
        key: "DefaultType", get: function () {
          return a
        }
      }]), i
    }();
  return u.fn[t] = i._jQueryInterface, u.fn[t].Constructor = i, u.fn[t].noConflict = function () {
    return u.fn[t] = e, i._jQueryInterface
  }, i
}($, Popper);

function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
  }
}

function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _inheritsLoose(e, t) {
  e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
}

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function (e) {
      _defineProperty(t, e, n[e])
    })
  }
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
}

var Popover = function (r) {
  var n = "popover", o = "bs.popover", s = "." + o, e = r.fn[n], a = "bs-popover",
    l = new RegExp("(^|\\s)" + a + "\\S+", "g"), c = _objectSpread({}, Tooltip.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), u = _objectSpread({}, Tooltip.DefaultType, {content: "(string|element|function)"}), f = "fade", d = "show",
    h = ".popover-header", p = ".popover-body", g = {
      HIDE: "hide" + s,
      HIDDEN: "hidden" + s,
      SHOW: "show" + s,
      SHOWN: "shown" + s,
      INSERTED: "inserted" + s,
      CLICK: "click" + s,
      FOCUSIN: "focusin" + s,
      FOCUSOUT: "focusout" + s,
      MOUSEENTER: "mouseenter" + s,
      MOUSELEAVE: "mouseleave" + s
    }, t = function (e) {
      function i() {
        return e.apply(this, arguments) || this
      }

      _inheritsLoose(i, e);
      var t = i.prototype;
      return t.isWithContent = function () {
        return this.getTitle() || this._getContent()
      }, t.addAttachmentClass = function (e) {
        r(this.getTipElement()).addClass(a + "-" + e)
      }, t.getTipElement = function () {
        return this.tip = this.tip || r(this.config.template)[0], this.tip
      }, t.setContent = function () {
        var e = r(this.getTipElement());
        this.setElementContent(e.find(h), this.getTitle());
        var t = this._getContent();
        "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(p), t), e.removeClass(f + " " + d)
      }, t._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content
      }, t._cleanTipClass = function () {
        var e = r(this.getTipElement()), t = e.attr("class").match(l);
        null !== t && 0 < t.length && e.removeClass(t.join(""))
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var e = r(this).data(o), t = "object" == typeof n ? n : null;
          if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), r(this).data(o, e)), "string" == typeof n)) {
            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]()
          }
        })
      }, _createClass(i, null, [{
        key: "VERSION", get: function () {
          return "4.1.1"
        }
      }, {
        key: "Default", get: function () {
          return c
        }
      }, {
        key: "NAME", get: function () {
          return n
        }
      }, {
        key: "DATA_KEY", get: function () {
          return o
        }
      }, {
        key: "Event", get: function () {
          return g
        }
      }, {
        key: "EVENT_KEY", get: function () {
          return s
        }
      }, {
        key: "DefaultType", get: function () {
          return u
        }
      }]), i
    }(Tooltip);
  return r.fn[n] = t._jQueryInterface, r.fn[n].Constructor = t, r.fn[n].noConflict = function () {
    return r.fn[n] = e, t._jQueryInterface
  }, t
}($);

function scrollMenu() {
  $("#header").hasClass("scroll") && 32 === $("#header").offset().top ? $("#header").removeClass("scroll") : 32 < $("#header").offset().top && $("#header").addClass("scroll")
}

!function (t, n) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], function (e) {
    return n(e, t, t.document, t.Math)
  }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), t, t.document, t.Math) : n(jQuery, t, t.document, t.Math)
}("undefined" != typeof window ? window : this, function (St, At, Dt, kt, Ot) {
  "use strict";
  var It = "fullpage-wrapper", Nt = "." + It, jt = "fp-responsive", Pt = "fp-notransition", Lt = "fp-destroyed",
    Ht = "fp-enabled", Mt = "fp-viewing", Rt = "active", Wt = "." + Rt, Ft = "fp-completely", Bt = "fp-section",
    Ut = "." + Bt, qt = Ut + Wt, zt = "fp-tableCell", $t = "." + zt, Yt = "#fp-nav", Vt = "fp-tooltip", Kt = "fp-slide",
    Qt = "." + Kt, Xt = Qt + Wt, Gt = "fp-slides", Zt = "." + Gt, Jt = "fp-slidesContainer", en = "." + Jt,
    tn = "fp-table", nn = "fp-slidesNav", rn = "." + nn, on = rn + " a", e = "fp-controlArrow", sn = "." + e,
    an = "fp-prev", ln = sn + "." + an, cn = sn + ".fp-next", un = St(At), fn = St(Dt);
  St.fn.fullpage = function (m) {
    if (St("html").hasClass(Ht)) Et(); else {
      var l = St("html, body"), v = St("body"), y = St.fn.fullpage;
      m = St.extend(!0, {
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowHandler: St.fn.fp_scrolloverflow ? St.fn.fp_scrolloverflow.iscrollHandler : null,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: {type: "reveal", percentage: 62, property: "translate"},
        sectionSelector: ".section",
        slideSelector: ".slide",
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: !0
      }, m);
      var b, o, c, u, s = !1,
        i = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
        r = "ontouchstart" in At || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints, _ = St(this),
        w = un.height(), x = !1, t = !0, C = !0, f = [], a = {m: {up: !0, down: !0, left: !0, right: !0}};
      a.k = St.extend(!0, {}, a.m);
      var n, d, h, p, E, T, g, S, e = dt(), A = {
        touchmove: "ontouchmove" in At ? "touchmove" : e.move,
        touchstart: "ontouchstart" in At ? "touchstart" : e.down
      }, D = !1, k = St.extend(!0, {}, m), O = {};
      Et(), St.extend(St.easing, {
        easeInOutCubic: function (e, t, n, i, r) {
          return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        }
      }), St.event.special.destroyed = {
        remove: function (e) {
          e.handler && e.handler()
        }
      }, St(this).length && (y.version = "2.9.7", y.setAutoScrolling = V, y.setRecordHistory = K, y.setScrollingSpeed = Q, y.setFitToSection = X, y.setLockAnchors = function (e) {
        m.lockAnchors = e
      }, y.setMouseWheelScrolling = G, y.setAllowScrolling = Z, y.setKeyboardScrolling = J, y.moveSectionUp = ee, y.moveSectionDown = te, y.silentMoveTo = ne, y.moveTo = ie, y.moveSlideRight = re, y.moveSlideLeft = oe, y.fitToSection = pe, y.reBuild = se, y.setResponsive = ae, y.getFullpageData = function () {
        return {
          options: m,
          internals: {
            canScroll: C,
            isScrollAllowed: a,
            getDestinationPosition: Ee,
            isTouch: r,
            c: Pe,
            getXmovement: tt,
            removeAnimation: Ze,
            getTransforms: mt,
            lazyLoad: De,
            addAnimation: Ge,
            performHorizontalMove: Ke,
            landscapeScroll: $e,
            silentLandscapeScroll: pt,
            keepSlidesPosition: Ce,
            silentScroll: gt,
            styleSlides: ce,
            scrollHandler: de,
            getEventsPage: ht,
            getMSPointer: dt,
            isReallyTouch: ye,
            usingExtension: bt,
            toggleControlArrows: Ye
          }
        }
      }, y.destroy = function (e) {
        _.trigger("destroy", [e]), V(!1, "internal"), Z(!1), J(!1), _.addClass(Lt), clearTimeout(p), clearTimeout(h), clearTimeout(d), clearTimeout(E), clearTimeout(T), un.off("scroll", de).off("hashchange", Re).off("resize", Qe), fn.off("keydown", Fe).off("keyup", Be).off("click touchstart", Yt + " a").off("mouseenter", Yt + " li").off("mouseleave", Yt + " li").off("click touchstart", on).off("mouseover", m.normalScrollElements).off("mouseout", m.normalScrollElements), St(Ut).off("click touchstart", sn), bt("dragAndMove") && y.dragAndMove.destroy(), clearTimeout(p), clearTimeout(h), e && function () {
          gt(0), _.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
            Ae(St(this), "src")
          }), _.find("img[data-srcset]").each(function () {
            Ae(St(this), "srcset")
          }), St(Yt + ", " + rn + ", " + sn).remove(), St(Ut).css({
            height: "",
            "background-color": "",
            padding: ""
          }), St(Qt).css({width: ""}), _.css({
            height: "",
            position: "",
            "-ms-touch-action": "",
            "touch-action": ""
          }), l.css({
            overflow: "",
            height: ""
          }), St("html").removeClass(Ht), v.removeClass(jt), St.each(v.get(0).className.split(/\s+/), function (e, t) {
            0 === t.indexOf(Mt) && v.removeClass(t)
          }), St(Ut + ", " + Qt).each(function () {
            m.scrollOverflowHandler && m.scrollOverflowHandler.remove(St(this)), St(this).removeClass(tn + " " + Rt), St(this).attr("style", St(this).data("fp-styles"))
          }), yt(_), _.find($t + ", " + en + ", " + Zt).each(function () {
            St(this).replaceWith(this.childNodes)
          }), l.scrollTop(0);
          var e = [Bt, Kt, Jt];
          St.each(e, function (e, t) {
            St("." + t).removeClass(t)
          })
        }()
      }, y.landscapeScroll = $e, y.shared = {afterRenderActions: fe}, le("continuousHorizontal"), le("scrollHorizontally"), le("resetSliders"), le("interlockedSlides"), le("responsiveSlides"), le("fadingEffect"), le("dragAndMove"), le("offsetSections"), le("scrollOverflowReset"), le("parallax"), bt("dragAndMove") && y.dragAndMove.init(), m.css3 && (m.css3 = function () {
        var e, t = Dt.createElement("p"), n = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
        for (var i in Dt.body.insertBefore(t, null), n) t.style[i] !== Ot && (t.style[i] = "translate3d(1px,1px,1px)", e = At.getComputedStyle(t).getPropertyValue(n[i]));
        return Dt.body.removeChild(t), e !== Ot && 0 < e.length && "none" !== e
      }()), m.scrollBar = m.scrollBar || m.hybrid, Y = _.find(m.sectionSelector), m.anchors.length || (m.anchors = Y.filter("[data-anchor]").map(function () {
        return St(this).data("anchor").toString()
      }).get()), m.navigationTooltips.length || (m.navigationTooltips = Y.filter("[data-tooltip]").map(function () {
        return St(this).data("tooltip").toString()
      }).get()), _.css({
        height: "100%",
        position: "relative"
      }), _.addClass(It), St("html").addClass(Ht), w = un.height(), _.removeClass(Lt), _.find(m.sectionSelector).addClass(Bt), _.find(m.slideSelector).addClass(Kt), _t("parallax", "init"), St(Ut).each(function (e) {
        var t, n, i, r, o = St(this), s = o.find(Qt), a = s.length;
        o.data("fp-styles", o.attr("style")), i = o, (r = e) || 0 !== St(qt).length || i.addClass(Rt), u = St(qt), i.css("height", ue(i) + "px"), m.paddingTop && i.css("padding-top", m.paddingTop), m.paddingBottom && i.css("padding-bottom", m.paddingBottom), void 0 !== m.sectionsColor[r] && i.css("background-color", m.sectionsColor[r]), void 0 !== m.anchors[r] && i.attr("data-anchor", m.anchors[r]), t = o, n = e, void 0 !== m.anchors[n] && t.hasClass(Rt) && Je(m.anchors[n], n), m.menu && m.css3 && St(m.menu).closest(Nt).length && St(m.menu).appendTo(v), 0 < a ? ce(o, s, a) : m.verticalCentered && nt(o)
      }), m.fixedElements && m.css3 && St(m.fixedElements).appendTo(v), m.navigation && function () {
        v.append('<div id="fp-nav"><ul></ul></div>');
        var e = St(Yt);
        e.addClass(function () {
          return m.showActiveTooltip ? "fp-show-active " + m.navigationPosition : m.navigationPosition
        });
        for (var t = 0; t < St(Ut).length; t++) {
          var n = "";
          m.anchors.length && (n = m.anchors[t]);
          var i = '<li><a href="#' + n + '"><span></span></a>', r = m.navigationTooltips[t];
          void 0 !== r && "" !== r && (i += '<div class="' + Vt + " " + m.navigationPosition + '">' + r + "</div>"), i += "</li>", e.find("ul").append(i)
        }
        St(Yt).css("margin-top", "-" + St(Yt).height() / 2 + "px"), St(Yt).find("li").eq(St(qt).index(Ut)).find("a").addClass(Rt)
      }(), _.find('iframe[src*="youtube.com/embed/"]').each(function () {
        var e, t;
        t = (e = St(this)).attr("src"), e.attr("src", t + (/\?/.test(t) ? "&" : "?") + "enablejsapi=1")
      }), m.fadingEffect && y.fadingEffect && y.fadingEffect.apply(), m.scrollOverflow ? n = m.scrollOverflowHandler.init(m) : fe(), Z(!0), V(m.autoScrolling, "internal"), Xe(), ft(), "complete" === Dt.readyState && Me(), un.on("load", Me), un.on("scroll", de).on("hashchange", Re).blur(function () {
        c = t = !1
      }).resize(Qe), fn.keydown(Fe).keyup(Be).on("click touchstart", Yt + " a", function (e) {
        e.preventDefault();
        var t = St(this).parent().index();
        Te(St(Ut).eq(t))
      }).on("click touchstart", on, function (e) {
        e.preventDefault();
        var t = St(this).closest(Ut).find(Zt);
        $e(t, t.find(Qt).eq(St(this).closest("li").index()))
      }).on("click", ".fp-tooltip", function () {
        St(this).prev().trigger("click")
      }), St(Ut).on("click touchstart", sn, function () {
        var e = St(this).closest(Ut);
        St(this).hasClass(an) ? a.m.left && oe(e) : a.m.right && re(e)
      }), m.normalScrollElements && (fn.on("mouseenter touchstart", m.normalScrollElements, function () {
        Z(!1)
      }), fn.on("mouseleave touchend", m.normalScrollElements, function () {
        Z(!0)
      })), bt("dragAndMove") && y.dragAndMove.turnOffTouch());
      var I, N = !1, j = 0, P = 0, L = 0, H = 0, M = 0;
      I = At.requestAnimationFrame || At.mozRequestAnimationFrame || At.webkitRequestAnimationFrame || At.msRequestAnimationFrame, At.requestAnimationFrame = I;
      var R, W, F, B = (new Date).getTime(), U = !1, q = 0, z = 0, $ = w
    }
    var Y;

    function V(e, t) {
      e || gt(0), Ct("autoScrolling", e, t);
      var n = St(qt);
      m.autoScrolling && !m.scrollBar ? (l.css({
        overflow: "hidden",
        height: "100%"
      }), K(k.recordHistory, "internal"), _.css({
        "-ms-touch-action": "none",
        "touch-action": "none"
      }), n.length && gt(n.position().top)) : (l.css({
        overflow: "visible",
        height: "initial"
      }), K(!1, "internal"), _.css({
        "-ms-touch-action": "",
        "touch-action": ""
      }), yt(_), n.length && l.scrollTop(n.position().top)), _.trigger("setAutoScrolling", [e])
    }

    function K(e, t) {
      Ct("recordHistory", e, t)
    }

    function Q(e, t) {
      "internal" !== t && m.fadingEffect && y.fadingEffect && y.fadingEffect.update(e), Ct("scrollingSpeed", e, t)
    }

    function X(e, t) {
      Ct("fitToSection", e, t)
    }

    function G(e) {
      e ? (function () {
        var e, t = "";
        At.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
        var n = "onwheel" in Dt.createElement("div") ? "wheel" : Dt.onmousewheel !== Ot ? "mousewheel" : "DOMMouseScroll";
        "DOMMouseScroll" == n ? Dt[e](t + "MozMousePixelScroll", we, !1) : Dt[e](t + n, we, !1)
      }(), _.on("mousedown", Ue).on("mouseup", qe)) : (Dt.addEventListener ? (Dt.removeEventListener("mousewheel", we, !1), Dt.removeEventListener("wheel", we, !1), Dt.removeEventListener("MozMousePixelScroll", we, !1)) : Dt.detachEvent("onmousewheel", we), _.off("mousedown", Ue).off("mouseup", qe))
    }

    function Z(n, e) {
      void 0 !== e ? (e = e.replace(/ /g, "").split(","), St.each(e, function (e, t) {
        vt(n, t, "m")
      })) : (vt(n, "all", "m"), n ? (G(!0), (i || r) && (m.autoScrolling && v.off(A.touchmove).on(A.touchmove, me), St(Nt).off(A.touchstart).on(A.touchstart, be).off(A.touchmove).on(A.touchmove, ve))) : (G(!1), (i || r) && (m.autoScrolling && v.off(A.touchmove), St(Nt).off(A.touchstart).off(A.touchmove))))
    }

    function J(n, e) {
      void 0 !== e ? (e = e.replace(/ /g, "").split(","), St.each(e, function (e, t) {
        vt(n, t, "k")
      })) : (vt(n, "all", "k"), m.keyboardScrolling = n)
    }

    function ee() {
      var e = St(qt).prev(Ut);
      e.length || !m.loopTop && !m.continuousVertical || (e = St(Ut).last()), e.length && Te(e, null, !0)
    }

    function te() {
      var e = St(qt).next(Ut);
      e.length || !m.loopBottom && !m.continuousVertical || (e = St(Ut).first()), e.length && Te(e, null, !1)
    }

    function ne(e, t) {
      Q(0, "internal"), ie(e, t), Q(k.scrollingSpeed, "internal")
    }

    function ie(e, t) {
      var n = ot(e);
      void 0 !== t ? st(e, t) : 0 < n.length && Te(n)
    }

    function re(e) {
      xe("right", e)
    }

    function oe(e) {
      xe("left", e)
    }

    function se(e) {
      if (!_.hasClass(Lt)) {
        x = !0, w = un.height(), St(Ut).each(function () {
          var e = St(this).find(Zt), t = St(this).find(Qt);
          m.verticalCentered && St(this).find($t).css("height", it(St(this)) + "px"), St(this).css("height", ue(St(this)) + "px"), 1 < t.length && $e(e, e.find(Xt))
        }), m.scrollOverflow && n.createScrollBarForAll();
        var t = St(qt).index(Ut);
        t && !bt("fadingEffect") && ne(t + 1), x = !1, St.isFunction(m.afterResize) && e && m.afterResize.call(_), St.isFunction(m.afterReBuild) && !e && m.afterReBuild.call(_), _.trigger("afterRebuild")
      }
    }

    function ae(e) {
      var t = v.hasClass(jt);
      e ? t || (V(!1, "internal"), X(!1, "internal"), St(Yt).hide(), v.addClass(jt), St.isFunction(m.afterResponsive) && m.afterResponsive.call(_, e), m.responsiveSlides && y.responsiveSlides && y.responsiveSlides.toSections(), _.trigger("afterResponsive", [e])) : t && (V(k.autoScrolling, "internal"), X(k.autoScrolling, "internal"), St(Yt).show(), v.removeClass(jt), St.isFunction(m.afterResponsive) && m.afterResponsive.call(_, e), m.responsiveSlides && y.responsiveSlides && y.responsiveSlides.toSlides(), _.trigger("afterResponsive", [e]))
    }

    function le(e) {
      var t = "fp_" + e + "Extension";
      O[e] = m[e + "Key"], y[e] = void 0 !== At[t] ? new At[t] : null, y[e] && y[e].c(e)
    }

    function ce(e, t, n) {
      var i, r = 100 * n, o = 100 / n;
      t.wrapAll('<div class="' + Jt + '" />'), t.parent().wrap('<div class="' + Gt + '" />'), e.find(en).css("width", r + "%"), 1 < n && (m.controlArrows && ((i = e).find(Zt).after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != m.controlArrowColor && (i.find(cn).css("border-color", "transparent transparent transparent " + m.controlArrowColor), i.find(ln).css("border-color", "transparent " + m.controlArrowColor + " transparent transparent")), m.loopHorizontal || i.find(ln).hide()), m.slidesNavigation && function (e, t) {
        e.append('<div class="' + nn + '"><ul></ul></div>');
        var n = e.find(rn);
        n.addClass(m.slidesNavPosition);
        for (var i = 0; i < t; i++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
        n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(Rt)
      }(e, n)), t.each(function (e) {
        St(this).css("width", o + "%"), m.verticalCentered && nt(St(this))
      });
      var s = e.find(Xt);
      s.length && (0 !== St(qt).index(Ut) || 0 === St(qt).index(Ut) && 0 !== s.index()) ? (pt(s, "internal"), s.addClass("fp-initial")) : t.eq(0).addClass(Rt)
    }

    function ue(e) {
      return m.offsetSections && y.offsetSections ? kt.round(y.offsetSections.getWindowHeight(e)) : w
    }

    function fe() {
      var e, t = St(qt);
      t.addClass(Ft), De(t), ke(t), m.scrollOverflow && m.scrollOverflowHandler.afterLoad(), (!(e = ot(We().section)) || e.length && e.index() === u.index()) && St.isFunction(m.afterLoad) && m.afterLoad.call(t, t.data("anchor"), t.index(Ut) + 1), St.isFunction(m.afterRender) && m.afterRender.call(_), _.trigger("afterRender")
    }

    function de() {
      U || (requestAnimationFrame(he), U = !0)
    }

    function he() {
      var e, t;
      if (_.trigger("onScroll"), (!m.autoScrolling || m.scrollBar || bt("dragAndMove")) && !xt()) {
        var n = bt("dragAndMove") ? kt.abs(y.dragAndMove.getCurrentScroll()) : un.scrollTop(),
          i = ((t = n) > j ? "down" : "up", q = j = t, 0), r = n + un.height() / 2,
          o = (bt("dragAndMove") ? y.dragAndMove.getDocumentHeight() : v.height() - un.height()) === n,
          s = Dt.querySelectorAll(Ut);
        if (o) i = s.length - 1; else if (n) for (var a = 0; a < s.length; ++a) s[a].offsetTop <= r && (i = a); else i = 0;
        if (!(e = St(s).eq(i)).hasClass(Rt)) {
          N = !0;
          var l, c, u = St(qt), f = u.index(Ut) + 1, d = et(e), h = e.data("anchor"), p = e.index(Ut) + 1,
            g = e.find(Xt);
          g.length && (c = g.data("anchor"), l = g.index()), C && (e.addClass(Rt).siblings().removeClass(Rt), _t("parallax", "afterLoad"), St.isFunction(m.onLeave) && m.onLeave.call(u, f, p, d), St.isFunction(m.afterLoad) && m.afterLoad.call(e, h, p), m.resetSliders && y.resetSliders && y.resetSliders.apply({
            localIsResizing: x,
            leavingSection: f
          }), Ie(u), De(e), ke(e), Je(h, p - 1), m.anchors.length && (b = h), lt(l, c, h, p)), clearTimeout(E), E = setTimeout(function () {
            N = !1
          }, 100)
        }
        m.fitToSection && (clearTimeout(T), T = setTimeout(function () {
          m.fitToSection && St(qt).outerHeight() <= w && pe()
        }, m.fitToSectionDelay))
      }
      U = !1
    }

    function pe() {
      C && (x = !0, Te(St(qt)), x = !1)
    }

    function ge(e) {
      if (a.m[e]) {
        var t = "down" === e ? te : ee;
        if (y.scrollHorizontally && (t = y.scrollHorizontally.getScrollSection(e, t)), m.scrollOverflow) {
          var n = m.scrollOverflowHandler.scrollable(St(qt)), i = "down" === e ? "bottom" : "top";
          if (0 < n.length) {
            if (!m.scrollOverflowHandler.isScrolled(i, n)) return !0;
            t()
          } else t()
        } else t()
      }
    }

    function me(e) {
      var t = e.originalEvent;
      m.autoScrolling && ye(t) && e.preventDefault()
    }

    function ve(e) {
      var t = e.originalEvent, n = St(t.target).closest(Ut);
      if (ye(t)) {
        m.autoScrolling && e.preventDefault();
        var i = ht(t);
        H = i.y, M = i.x, n.find(Zt).length && kt.abs(L - M) > kt.abs(P - H) ? !s && kt.abs(L - M) > un.outerWidth() / 100 * m.touchSensitivity && (M < L ? a.m.right && re(n) : a.m.left && oe(n)) : m.autoScrolling && C && kt.abs(P - H) > un.height() / 100 * m.touchSensitivity && (H < P ? ge("down") : P < H && ge("up"))
      }
    }

    function ye(e) {
      return void 0 === e.pointerType || "mouse" != e.pointerType
    }

    function be(e) {
      var t = e.originalEvent;
      if (m.fitToSection && l.stop(), ye(t)) {
        var n = ht(t);
        P = n.y, L = n.x
      }
    }

    function _e(e, t) {
      for (var n = 0, i = e.slice(kt.max(e.length - t, 1)), r = 0; r < i.length; r++) n += i[r];
      return kt.ceil(n / t)
    }

    function we(e) {
      var t = (new Date).getTime(), n = St(".fp-completely").hasClass("fp-normal-scroll");
      if (m.autoScrolling && !c && !n) {
        var i = (e = e || At.event).wheelDelta || -e.deltaY || -e.detail, r = kt.max(-1, kt.min(1, i)),
          o = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
          s = kt.abs(e.wheelDeltaX) < kt.abs(e.wheelDelta) || kt.abs(e.deltaX) < kt.abs(e.deltaY) || !o;
        149 < f.length && f.shift(), f.push(kt.abs(i)), m.scrollBar && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        var a = t - B;
        return B = t, 200 < a && (f = []), C && !wt() && _e(f, 10) >= _e(f, 70) && s && ge(r < 0 ? "down" : "up"), !1
      }
      m.fitToSection && l.stop()
    }

    function xe(e, t) {
      var n = (void 0 === t ? St(qt) : t).find(Zt);
      if (!(!n.length || wt() || s || n.find(Qt).length < 2)) {
        var i = n.find(Xt), r = null;
        if (!(r = "left" === e ? i.prev(Qt) : i.next(Qt)).length) {
          if (!m.loopHorizontal) return;
          r = "left" === e ? i.siblings(":last") : i.siblings(":first")
        }
        s = !0, $e(n, r, e)
      }
    }

    function Ce() {
      St(Xt).each(function () {
        pt(St(this), "internal")
      })
    }

    function Ee(e) {
      var t = e.position(), n = t.top,
        i = bt("dragAndMove") && y.dragAndMove.isGrabbing ? y.dragAndMove.isScrollingDown() : t.top > q,
        r = n - w + e.outerHeight(), o = m.bigSectionsDestination;
      return e.outerHeight() > w ? (i || o) && "bottom" !== o || (n = r) : (i || x && e.is(":last-child")) && (n = r), m.offsetSections && y.offsetSections && (n = y.offsetSections.getSectionPosition(i, n, e)), q = n
    }

    function Te(e, t, n) {
      if (void 0 !== e && e.length) {
        var i, r, o = {
          element: e,
          callback: t,
          isMovementUp: n,
          dtop: Ee(e),
          yMovement: et(e),
          anchorLink: e.data("anchor"),
          sectionIndex: e.index(Ut),
          activeSlide: e.find(Xt),
          activeSection: St(qt),
          leavingSection: St(qt).index(Ut) + 1,
          localIsResizing: x
        };
        if (!(o.activeSection.is(e) && !x || m.scrollBar && un.scrollTop() === o.dtop && !e.hasClass("fp-auto-height"))) {
          if (o.activeSlide.length && (i = o.activeSlide.data("anchor"), r = o.activeSlide.index()), St.isFunction(m.onLeave) && !o.localIsResizing) {
            var s = o.yMovement;
            if (void 0 !== n && (s = n ? "up" : "down"), !1 === m.onLeave.call(o.activeSection, o.leavingSection, o.sectionIndex + 1, s)) return
          }
          _t("parallax", "apply", o), m.autoScrolling && m.continuousVertical && void 0 !== o.isMovementUp && (!o.isMovementUp && "up" == o.yMovement || o.isMovementUp && "down" == o.yMovement) && ((l = o).isMovementUp ? l.activeSection.before(l.activeSection.nextAll(Ut)) : l.activeSection.after(l.activeSection.prevAll(Ut).get().reverse()), gt(St(qt).position().top), Ce(), l.wrapAroundElements = l.activeSection, l.dtop = l.element.position().top, l.yMovement = et(l.element), l.leavingSection = l.activeSection.index(Ut) + 1, l.sectionIndex = l.element.index(Ut), St(Nt).trigger("onContinuousVertical", [l]), o = l), bt("scrollOverflowReset") && y.scrollOverflowReset.setPrevious(o.activeSection), o.localIsResizing || Ie(o.activeSection), m.scrollOverflow && m.scrollOverflowHandler.beforeLeave(), e.addClass(Rt).siblings().removeClass(Rt), De(e), m.scrollOverflow && m.scrollOverflowHandler.onLeave(), C = !1, lt(r, i, o.anchorLink, o.sectionIndex), function (e) {
            if (m.css3 && m.autoScrolling && !m.scrollBar) {
              rt("translate3d(0px, -" + kt.round(e.dtop) + "px, 0px)", !0), m.scrollingSpeed ? (clearTimeout(h), h = setTimeout(function () {
                Se(e)
              }, m.scrollingSpeed)) : Se(e)
            } else {
              var t = (n = e, i = {}, m.autoScrolling && !m.scrollBar ? (i.options = {top: -n.dtop}, i.element = Nt) : (i.options = {scrollTop: n.dtop}, i.element = "html, body"), i);
              St(t.element).animate(t.options, m.scrollingSpeed, m.easing).promise().done(function () {
                m.scrollBar ? setTimeout(function () {
                  Se(e)
                }, 30) : Se(e)
              })
            }
            var n, i
          }(o), b = o.anchorLink, Je(o.anchorLink, (a = o).wrapAroundElements && a.wrapAroundElements.length ? a.isMovementUp ? St(Ut).length - 1 : 0 : a.sectionIndex)
        }
      }
      var a, l
    }

    function Se(e) {
      var t;
      (t = e).wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? St(".fp-section:first").before(t.wrapAroundElements) : St(".fp-section:last").after(t.wrapAroundElements), gt(St(qt).position().top), Ce(), t.sectionIndex = t.element.index(Ut), t.leavingSection = t.activeSection.index(Ut) + 1), St.isFunction(m.afterLoad) && !e.localIsResizing && m.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), m.scrollOverflow && m.scrollOverflowHandler.afterLoad(), _t("parallax", "afterLoad"), bt("scrollOverflowReset") && y.scrollOverflowReset.reset(), m.resetSliders && y.resetSliders && y.resetSliders.apply(e), e.localIsResizing || ke(e.element), e.element.addClass(Ft).siblings().removeClass(Ft), C = !0, St.isFunction(e.callback) && e.callback.call(this)
    }

    function Ae(e, t) {
      e.attr(t, e.data(t)).removeAttr("data-" + t)
    }

    function De(e) {
      var i;
      m.lazyLoading && Ne(e).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function () {
        if (i = St(this), St.each(["src", "srcset"], function (e, t) {
          var n = i.attr("data-" + t);
          void 0 !== n && n && Ae(i, t)
        }), i.is("source")) {
          var e = i.closest("video").length ? "video" : "audio";
          i.closest(e).get(0).load()
        }
      })
    }

    function ke(e) {
      var t = Ne(e);
      t.find("video, audio").each(function () {
        var e = St(this).get(0);
        e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
      }), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
        var e = St(this).get(0);
        e.hasAttribute("data-autoplay") && Oe(e), e.onload = function () {
          e.hasAttribute("data-autoplay") && Oe(e)
        }
      })
    }

    function Oe(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
    }

    function Ie(e) {
      var t = Ne(e);
      t.find("video, audio").each(function () {
        var e = St(this).get(0);
        e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
      }), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
        var e = St(this).get(0);
        /youtube\.com\/embed\//.test(St(this).attr("src")) && !e.hasAttribute("data-keepplaying") && St(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
      })
    }

    function Ne(e) {
      var t = e.find(Xt);
      return t.length && (e = St(t)), e
    }

    function je(e) {
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

      function i(e) {
        var t, n, i, r, o, s, a = "", l = 0;
        for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); l < e.length;) t = c.indexOf(e.charAt(l++)) << 2 | (r = c.indexOf(e.charAt(l++))) >> 4, n = (15 & r) << 4 | (o = c.indexOf(e.charAt(l++))) >> 2, i = (3 & o) << 6 | (s = c.indexOf(e.charAt(l++))), a += String.fromCharCode(t), 64 != o && (a += String.fromCharCode(n)), 64 != s && (a += String.fromCharCode(i));
        return function (e) {
          for (var t, n = "", i = 0, r = 0, o = 0; i < e.length;) (r = e.charCodeAt(i)) < 128 ? (n += String.fromCharCode(r), i++) : 191 < r && r < 224 ? (o = e.charCodeAt(i + 1), n += String.fromCharCode((31 & r) << 6 | 63 & o), i += 2) : (o = e.charCodeAt(i + 1), t = e.charCodeAt(i + 2), n += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & t), i += 3);
          return n
        }(a)
      }

      function r(e) {
        return e.slice(3).slice(0, -3)
      }

      return function (e) {
        var t = e.split("_");
        if (1 < t.length) {
          var n = t[1];
          return e.replace(r(t[1]), "").split("_")[0] + "_" + i(n.slice(3).slice(0, -3))
        }
        return r(e)
      }(i(e))
    }

    function Pe(e) {
      R = je("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), W = St("<div/>").html(R).contents(), bt(e) && y[e] && (function (e) {
        var t = function () {
            if (Dt.domain.length) {
              for (var e = Dt.domain.replace(/^(www\.)/, "").split("."); 2 < e.length;) e.shift();
              return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
            }
            return ""
          }(), n = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN"], i = je(n[0]),
          r = je(n[1]), o = je(n[2]), s = je(n[3]), a = [i, r, o].indexOf(t) < 0 && 0 !== t.length,
          l = void 0 !== O[e] && O[e].length;
        if (!l && a) return !1;
        var c = l ? je(O[e]) : "", u = 1 < (c = c.split("_")).length && -1 < c[1].indexOf(e, c[1].length - e.length);
        return !(c[0].indexOf(t, c[0].length - t.length) < 0 && a && s != c[0]) && u || !a
      }(e) || (Le(), setInterval(Le, 2e3)))
    }

    function Le() {
      D || (kt.random() < .5 ? v.prepend(W) : v.append(W), D = !0, W.bind("destroyed", function () {
        clearTimeout(F), F = setTimeout(He, 900)
      })), St(W).attr("style", je("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, je("MTIzICFpbXBvcnRhbnQ7MzQ1")))
    }

    function He() {
      D = !1
    }

    function Me() {
      var e = We(), t = e.section, n = e.slide;
      t && (m.animateAnchor ? st(t, n) : ne(t, n))
    }

    function Re() {
      if (!N && !m.lockAnchors) {
        var e = We(), t = e.section, n = e.slide, i = void 0 === b, r = void 0 === b && void 0 === n && !s;
        t && t.length && (t && t !== b && !i || r || !s && o != n) && st(t, n)
      }
    }

    function We() {
      var e, t, n = At.location.hash;
      if (n.length) {
        var i = n.replace("#", "").split("/"), r = -1 < n.indexOf("#/");
        e = r ? "/" + i[1] : decodeURIComponent(i[0]);
        var o = r ? i[2] : i[1];
        o && o.length && (t = decodeURIComponent(o))
      }
      return {section: e, slide: t}
    }

    function Fe(e) {
      clearTimeout(g);
      var t = St(":focus"), n = e.which;
      9 === n ? function (e) {
        var t = e.shiftKey, n = St(":focus"), i = St(qt), r = i.find(Xt),
          o = (r.length ? r : i).find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]').not('[tabindex="-1"]');

        function s(e) {
          return e.preventDefault(), o.first().focus()
        }

        n.length ? n.closest(qt, Xt).length || (n = s(e)) : s(e), (!t && n.is(o.last()) || t && n.is(o.first())) && e.preventDefault()
      }(e) : t.is("textarea") || t.is("input") || t.is("select") || "true" === t.attr("contentEditable") || "" === t.attr("contentEditable") || !m.keyboardScrolling || !m.autoScrolling || (-1 < St.inArray(n, [40, 38, 32, 33, 34]) && e.preventDefault(), c = e.ctrlKey, g = setTimeout(function () {
        !function (e) {
          var t = e.shiftKey;
          if (C || !([37, 39].indexOf(e.which) < 0)) switch (e.which) {
            case 38:
            case 33:
              a.k.up && ee();
              break;
            case 32:
              if (t && a.k.up) {
                ee();
                break
              }
            case 40:
            case 34:
              a.k.down && te();
              break;
            case 36:
              a.k.up && ie(1);
              break;
            case 35:
              a.k.down && ie(St(Ut).length);
              break;
            case 37:
              a.k.left && oe();
              break;
            case 39:
              a.k.right && re()
          }
        }(e)
      }, 150))
    }

    function Be(e) {
      t && (c = e.ctrlKey)
    }

    function Ue(e) {
      2 == e.which && (z = e.pageY, _.on("mousemove", ze))
    }

    function qe(e) {
      2 == e.which && _.off("mousemove")
    }

    function ze(e) {
      C && (e.pageY < z && a.m.up ? ee() : e.pageY > z && a.m.down && te()), z = e.pageY
    }

    function $e(e, t, n) {
      var i = e.closest(Ut), r = {
        slides: e,
        destiny: t,
        direction: n,
        destinyPos: t.position(),
        slideIndex: t.index(),
        section: i,
        sectionIndex: i.index(Ut),
        anchorLink: i.data("anchor"),
        slidesNav: i.find(rn),
        slideAnchor: ut(t),
        prevSlide: i.find(Xt),
        prevSlideIndex: i.find(Xt).index(),
        localIsResizing: x
      };
      r.xMovement = tt(r.prevSlideIndex, r.slideIndex), r.localIsResizing || (C = !1), _t("parallax", "applyHorizontal", r), m.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && St.isFunction(m.onSlideLeave) && !1 === m.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex) ? s = !1 : (t.addClass(Rt).siblings().removeClass(Rt), r.localIsResizing || (Ie(r.prevSlide), De(t)), Ye(r), i.hasClass(Rt) && !r.localIsResizing && lt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), y.continuousHorizontal && y.continuousHorizontal.apply(r), xt() ? Ve(r) : Ke(e, r, !0), m.interlockedSlides && y.interlockedSlides && (bt("continuousHorizontal") && void 0 !== n && n !== r.xMovement || y.interlockedSlides.apply(r)))
    }

    function Ye(e) {
      !m.loopHorizontal && m.controlArrows && (e.section.find(ln).toggle(0 !== e.slideIndex), e.section.find(cn).toggle(!e.destiny.is(":last-child")))
    }

    function Ve(e) {
      var t, n;
      y.continuousHorizontal && y.continuousHorizontal.afterSlideLoads(e), t = e.slidesNav, n = e.slideIndex, t.find(Wt).removeClass(Rt), t.find("li").eq(n).find("a").addClass(Rt), e.localIsResizing || (_t("parallax", "afterSlideLoads"), St.isFunction(m.afterSlideLoad) && m.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex), C = !0, ke(e.destiny)), s = !1, bt("interlockedSlides") && y.interlockedSlides.apply(e)
    }

    function Ke(e, t, n) {
      var i = t.destinyPos;
      if (m.css3) {
        var r = "translate3d(-" + kt.round(i.left) + "px, 0px, 0px)";
        Ge(e.find(en)).css(mt(r)), p = setTimeout(function () {
          n && Ve(t)
        }, m.scrollingSpeed, m.easing)
      } else e.animate({scrollLeft: kt.round(i.left)}, m.scrollingSpeed, m.easing, function () {
        n && Ve(t)
      })
    }

    function Qe() {
      if (_.trigger("onResize"), Xe(), i) {
        var e = St(Dt.activeElement);
        if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
          var t = un.height();
          kt.abs(t - $) > 20 * kt.max($, t) / 100 && (se(!0), $ = t)
        }
      } else clearTimeout(d), d = setTimeout(function () {
        se(!0)
      }, 350)
    }

    function Xe() {
      var e = m.responsive || m.responsiveWidth, t = m.responsiveHeight, n = e && un.outerWidth() < e,
        i = t && un.height() < t;
      e && t ? ae(n || i) : e ? ae(n) : t && ae(i)
    }

    function Ge(e) {
      var t = "all " + m.scrollingSpeed + "ms " + m.easingcss3;
      return e.removeClass(Pt), e.css({"-webkit-transition": t, transition: t})
    }

    function Ze(e) {
      return e.addClass(Pt)
    }

    function Je(e, t) {
      var n, i, r;
      n = e, m.menu && (St(m.menu).find(Wt).removeClass(Rt), St(m.menu).find('[data-menuanchor="' + n + '"]').addClass(Rt)), i = e, r = t, m.navigation && (St(Yt).find(Wt).removeClass(Rt), i ? St(Yt).find('a[href="#' + i + '"]').addClass(Rt) : St(Yt).find("li").eq(r).find("a").addClass(Rt))
    }

    function et(e) {
      var t = St(qt).index(Ut), n = e.index(Ut);
      return t == n ? "none" : n < t ? "up" : "down"
    }

    function tt(e, t) {
      return e == t ? "none" : t < e ? "left" : "right"
    }

    function nt(e) {
      if (!e.hasClass(tn)) {
        var t = St('<div class="' + zt + '" />').height(it(e));
        e.addClass(tn).wrapInner(t)
      }
    }

    function it(e) {
      var t = ue(e);
      if (m.paddingTop || m.paddingBottom) {
        var n = e;
        n.hasClass(Bt) || (n = e.closest(Ut)), t -= parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"))
      }
      return t
    }

    function rt(e, t) {
      t ? Ge(_) : Ze(_), clearTimeout(S), _.css(mt(e)), S = setTimeout(function () {
        _.removeClass(Pt)
      }, 10)
    }

    function ot(e) {
      var t = _.find(Ut + '[data-anchor="' + e + '"]');
      if (!t.length) {
        var n = void 0 !== e ? e - 1 : 0;
        t = St(Ut).eq(n)
      }
      return t
    }

    function st(e, t) {
      var n = ot(e);
      if (n.length) {
        var i, r, o,
          s = (i = t, (o = (r = n).find(Qt + '[data-anchor="' + i + '"]')).length || (i = void 0 !== i ? i : 0, o = r.find(Qt).eq(i)), o);
        e === b || n.hasClass(Rt) ? at(s) : Te(n, function () {
          at(s)
        })
      }
    }

    function at(e) {
      e.length && $e(e.closest(Zt), e)
    }

    function lt(e, t, n, i) {
      var r = "";
      m.anchors.length && !m.lockAnchors && (e ? (void 0 !== n && (r = n), void 0 === t && (t = e), ct(r + "/" + (o = t))) : (void 0 !== e && (o = t), ct(n))), ft()
    }

    function ct(e) {
      if (m.recordHistory) location.hash = e; else if (i || r) At.history.replaceState(Ot, Ot, "#" + e); else {
        var t = At.location.href.split("#")[0];
        At.location.replace(t + "#" + e)
      }
    }

    function ut(e) {
      var t = e.data("anchor"), n = e.index();
      return void 0 === t && (t = n), t
    }

    function ft() {
      var e = St(qt), t = e.find(Xt), n = ut(e), i = ut(t), r = String(n);
      t.length && (r = r + "-" + i), r = r.replace("/", "-").replace("#", "");
      var o = new RegExp("\\b\\s?" + Mt + "-[^\\s]+\\b", "g");
      v[0].className = v[0].className.replace(o, ""), v.addClass(Mt + "-" + r)
    }

    function dt() {
      return At.PointerEvent ? {down: "pointerdown", move: "pointermove"} : {
        down: "MSPointerDown",
        move: "MSPointerMove"
      }
    }

    function ht(e) {
      var t = [];
      return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, r && ye(e) && m.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
    }

    function pt(e, t) {
      Q(0, "internal"), void 0 !== t && (x = !0), $e(e.closest(Zt), e), void 0 !== t && (x = !1), Q(k.scrollingSpeed, "internal")
    }

    function gt(e) {
      var t = kt.round(e);
      m.css3 && m.autoScrolling && !m.scrollBar ? rt("translate3d(0px, -" + t + "px, 0px)", !1) : m.autoScrolling && !m.scrollBar ? _.css("top", -t) : l.scrollTop(t)
    }

    function mt(e) {
      return {"-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e}
    }

    function vt(n, e, i) {
      "all" !== e ? a[i][e] = n : St.each(Object.keys(a[i]), function (e, t) {
        a[i][t] = n
      })
    }

    function yt(e) {
      return e.css({"-webkit-transition": "none", transition: "none"})
    }

    function bt(e) {
      return null !== m[e] && "object" == typeof m[e] ? m[e].enabled && y[e] : m[e] && y[e]
    }

    function _t(e, t, n) {
      if (bt(e)) return y[e][t](n)
    }

    function wt() {
      return bt("dragAndMove") && y.dragAndMove.isAnimating
    }

    function xt() {
      return bt("dragAndMove") && y.dragAndMove.isGrabbing
    }

    function Ct(e, t, n) {
      m[e] = t, "internal" !== n && (k[e] = t)
    }

    function Et() {
      St("html").hasClass(Ht) ? Tt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (m.continuousVertical && (m.loopTop || m.loopBottom) && (m.continuousVertical = !1, Tt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), m.scrollBar && m.scrollOverflow && Tt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !m.continuousVertical || !m.scrollBar && m.autoScrolling || (m.continuousVertical = !1, Tt("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), m.scrollOverflow && !m.scrollOverflowHandler && (m.scrollOverflow = !1, Tt("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), St.each(m.anchors, function (e, t) {
        var n = fn.find("[name]").filter(function () {
          return St(this).attr("name") && St(this).attr("name").toLowerCase() == t.toLowerCase()
        }), i = fn.find("[id]").filter(function () {
          return St(this).attr("id") && St(this).attr("id").toLowerCase() == t.toLowerCase()
        });
        (i.length || n.length) && (Tt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && Tt("error", '"' + t + '" is is being used by another element `id` property'), n.length && Tt("error", '"' + t + '" is is being used by another element `name` property'))
      }))
    }

    function Tt(e, t) {
      console && console[e] && console[e]("fullPage: " + t)
    }
  }
}), function () {
  var t, n = function (e, t) {
    return function () {
      return e.apply(t, arguments)
    }
  };
  t = function () {
    function e() {
    }

    return e.prototype.extend = function (e, t) {
      var n, i;
      for (n in e) null != (i = e[n]) && (t[n] = i);
      return t
    }, e.prototype.isMobile = function (e) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
    }, e
  }(), this.WOW = function () {
    function e(e) {
      null == e && (e = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults)
    }

    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0
    }, e.prototype.init = function () {
      var e;
      return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
    }, e.prototype.start = function () {
      var e, t, n, i;
      if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
        if (this.disabled()) return this.resetStyle();
        for (t = 0, n = (i = this.boxes).length; t < n; t++) e = i[t], this.applyStyle(e, !0);
        return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
      }
    }, e.prototype.stop = function () {
      if (window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval) return clearInterval(this.interval)
    }, e.prototype.show = function (e) {
      return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass
    }, e.prototype.applyStyle = function (e, t) {
      var n, i, r;
      return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), e.setAttribute("style", this.customStyle(t, i, n, r))
    }, e.prototype.resetStyle = function () {
      var e, t, n, i, r;
      for (r = [], t = 0, n = (i = this.boxes).length; t < n; t++) e = i[t], r.push(e.setAttribute("style", "visibility: visible;"));
      return r
    }, e.prototype.customStyle = function (e, t, n, i) {
      var r;
      return r = e ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;", t && (r += "-webkit-animation-duration: " + t + "; -moz-animation-duration: " + t + "; animation-duration: " + t + ";"), n && (r += "-webkit-animation-delay: " + n + "; -moz-animation-delay: " + n + "; animation-delay: " + n + ";"), i && (r += "-webkit-animation-iteration-count: " + i + "; -moz-animation-iteration-count: " + i + "; animation-iteration-count: " + i + ";"), r
    }, e.prototype.scrollHandler = function () {
      return this.scrolled = !0
    }, e.prototype.scrollCallback = function () {
      var r;
      if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
        var e, t, n, i;
        for (i = [], e = 0, t = (n = this.boxes).length; e < t; e++) (r = n[e]) && (this.isVisible(r) ? this.show(r) : i.push(r));
        return i
      }.call(this), !this.boxes.length)) return this.stop()
    }, e.prototype.offsetTop = function (e) {
      var t;
      for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
      return t
    }, e.prototype.isVisible = function (e) {
      var t, n, i, r, o;
      return n = e.getAttribute("data-wow-offset") || this.config.offset, r = (o = window.pageYOffset) + this.element.clientHeight - n, t = (i = this.offsetTop(e)) + e.clientHeight, i <= r && o <= t
    }, e.prototype.util = function () {
      return this._util || (this._util = new t)
    }, e.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, e
  }()
}.call(this), wow = new WOW({animateClass: "animated"}), setTimeout(function () {
  wow.init()
}, 1500), $(document).ready(function () {
  var e = $("#preloader");
  setTimeout(function () {
    e.hasClass("ok") || e.addClass("ok")
  }, 1500);
  var t = $("body"), n = $(".mobile-group"), i = $(".btn-mobile"), r = $("#menu-mobile a"), o = $(".first-step"),
    s = $(".first-step-content"), a = $(".second-step"), l = $(".second-step-content"), c = $(".third-step"),
    u = $(".third-step-content"), f = $(".btn-close");
  i.on("click", function () {
    t.toggleClass("open_menu"), n.toggleClass("show"), i.toggleClass("close"), n.hasClass("show") && r.on("click", function () {
      t.removeClass("open_menu"), n.removeClass("show"), i.removeClass("close")
    })
  }), o.on("click", function () {
    s.addClass("show"), t.addClass("remove-scroll")
  }), a.on("click", function () {
    l.addClass("show"), t.addClass("remove-scroll")
  }), c.on("click", function () {
    u.addClass("show"), t.addClass("remove-scroll")
  }), f.on("click", function () {
    $(this).parents(".modal-custom").removeClass("show"), t.removeClass("remove-scroll"), $.fn.fullpage.moveTo("product")
  }), $("#fullpage").fullpage({
    menu: "#menu, #menu-mobile",
    lockAnchors: !1,
    anchors: ["mission", "about", "product", "cases", "reviews", "contact"],
    navigation: !1,
    navigationPosition: "right",
    navigationTooltips: ["mission", "about", "product", "cases", "reviews", "contact"],
    showActiveTooltip: !1,
    slidesNavigation: !1,
    slidesNavPosition: "bottom",
    css3: !0,
    scrollingSpeed: 700,
    autoScrolling: !0,
    fitToSection: !1,
    fitToSectionDelay: 100,
    scrollBar: !1,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: !1,
    loopTop: !1,
    loopHorizontal: !0,
    continuousVertical: !1,
    continuousHorizontal: !1,
    scrollHorizontally: !1,
    interlockedSlides: !1,
    dragAndMove: !0,
    offsetSections: !1,
    resetSliders: !0,
    fadingEffect: !1,
    normalScrollElements: "#element1, .element2",
    scrollOverflow: !1,
    scrollOverflowReset: !1,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,
    keyboardScrolling: !0,
    animateAnchor: !0,
    recordHistory: !0,
    controlArrows: !1,
    verticalCentered: !0,
    paddingTop: "3em",
    paddingBottom: "3rem",
    fixedElements: "#header, #footer",
    responsiveWidth: 1200,
    responsiveHeight: 800,
    responsiveSlides: !0,
    parallax: !1,
    parallaxOptions: {type: "reveal", percentage: 62, property: "translate"},
    sectionSelector: ".section",
    slideSelector: ".slide",
    lazyLoading: !0,
    onLeave: function (e, t, n) {
      var i = $(".number-page"), r = $(".scroll");
      1 === t ? (i.html('<div class="number-page animated fadeInUp">01</div>'), r.attr("href", "#about").removeClass("go_home"), r.children("span").html("scroll")) : 2 === t ? (i.html('<div class="number-page animated fadeInUp">02</div>'), r.attr("href", "#product").removeClass("go_home"), r.children("span").html("scroll")) : 3 === t ? (i.html('<div class="number-page animated fadeInUp">03</div>'), r.attr("href", "#cases").removeClass("go_home"), r.children("span").html("scroll")) : 4 === t ? (i.html('<div class="number-page animated fadeInUp">04</div>'), r.attr("href", "#reviews").removeClass("go_home"), r.children("span").html("scroll")) : 5 === t ? (i.html('<div class="number-page animated fadeInUp">05</div>'), r.attr("href", "#contact").removeClass("go_home"), r.children("span").html("scroll")) : 6 === t && (i.html('<div class="number-page animated fadeInUp">06</div>'), r.attr("href", "#mission").addClass("go_home"), r.children("span").html("scroll top"))
    },
    afterLoad: function (e, t) {
    },
    afterRender: function () {
    },
    afterResize: function () {
    },
    afterResponsive: function (e) {
    },
    afterSlideLoad: function (e, t, n, i) {
    },
    onSlideLeave: function (e, t, n, i, r) {
    }
  })
}), $(document).on("scroll", function () {
  scrollMenu();
});
//# sourceMappingURL=main.js.map
