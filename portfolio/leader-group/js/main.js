! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(E, e) {
    "use strict";
    var t = [],
        C = E.document,
        r = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        s = m.toString,
        u = s.call(Object),
        v = {},
        y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        b = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function _(e, t, n) {
        var r, i = (t = t || C).createElement("script");
        if (i.text = e, n)
            for (r in c) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.3.1",
        x = function(e, t) {
            return new x.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(n) {
            return this.pushStack(x.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (u && r && (x.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(u, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = m.call(t, "constructor") && t.constructor) && s.call(n) === u)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            _(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (h(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (h(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = t[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, h, _, o, i, p, f, g, w, l, u, T, E, s, C, m, a, c, v, x = "sizzle" + 1 * new Date,
            y = n.document,
            S = 0,
            r = 0,
            d = se(),
            b = se(),
            D = se(),
            A = function(e, t) {
                return e === t && (u = !0), 0
            },
            N = {}.hasOwnProperty,
            t = [],
            O = t.pop,
            k = t.push,
            I = t.push,
            j = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + H + "*\\]",
            W = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            U = new RegExp(H + "+", "g"),
            F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            q = new RegExp("^" + H + "*," + H + "*"),
            B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            $ = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
            V = new RegExp(W),
            K = new RegExp("^" + M + "$"),
            Q = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            z = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                T()
            },
            ie = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            I.apply(t = j.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: t.length ? function(e, t) {
                    k.apply(e, j.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, r) {
            var i, o, s, a, l, u, c, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((t ? t.ownerDocument || t : y) !== E && T(t), t = t || E, C)) {
                if (11 !== d && (l = X.exec(e)))
                    if (i = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (f && (s = f.getElementById(i)) && v(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return I.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return I.apply(n, t.getElementsByClassName(i)), n
                    } if (h.qsa && !D[e + " "] && (!m || !m.test(e))) {
                    if (1 !== d) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = x), o = (u = p(e)).length; o--;) u[o] = "#" + a + " " + ve(u[o]);
                        c = u.join(","), f = J.test(e) && ge(t.parentNode) || t
                    }
                    if (c) try {
                        return I.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        a === x && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(F, "$1"), t, n, r)
        }

        function se() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > _.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function ae(e) {
            return e[x] = !0, e
        }

        function le(e) {
            var t = E.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) _.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function de(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function he(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function pe(s) {
            return ae(function(o) {
                return o = +o, ae(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = oe.support = {}, i = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, T = oe.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : y;
            return r !== E && 9 === r.nodeType && r.documentElement && (s = (E = r).documentElement, C = !i(E), y !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), h.attributes = le(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), h.getElementsByTagName = le(function(e) {
                return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
            }), h.getElementsByClassName = G.test(E.getElementsByClassName), h.getById = le(function(e) {
                return s.appendChild(e).id = x, !E.getElementsByName || !E.getElementsByName(x).length
            }), h.getById ? (_.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, _.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (_.filter.ID = function(e) {
                var n = e.replace(Z, ee);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, _.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), _.find.TAG = h.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, _.find.CLASS = h.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, a = [], m = [], (h.qsa = G.test(E.querySelectorAll)) && (le(function(e) {
                s.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
            }), le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = E.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (h.matchesSelector = G.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", W)
            }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = G.test(s.compareDocumentPosition), v = t || G.test(s.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, A = t ? function(e, t) {
                if (e === t) return u = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === y && v(y, e) ? -1 : t === E || t.ownerDocument === y && v(y, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return u = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                if (!i || !o) return e === E ? -1 : t === E ? 1 : i ? -1 : o ? 1 : l ? P(l, e) - P(l, t) : 0;
                if (i === o) return ce(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[r] === a[r];) r++;
                return r ? ce(s[r], a[r]) : s[r] === y ? -1 : a[r] === y ? 1 : 0
            }), E
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== E && T(e), t = t.replace($, "='$1']"), h.matchesSelector && C && !D[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
                var n = c.call(e, t);
                if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {}
            return 0 < oe(t, E, null, [e]).length
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== E && T(e), v(e, t)
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== E && T(e);
            var n = _.attrHandle[t.toLowerCase()],
                r = n && N.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
            return void 0 !== r ? r : h.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(A), u) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return l = null, e
        }, o = oe.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += o(t);
            return n
        }, (_ = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = d[e + " "];
                    return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && d(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = oe.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(U, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(p, e, t, g, m) {
                    var v = "nth" !== p.slice(0, 3),
                        y = "last" !== p.slice(-4),
                        b = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var r, i, o, s, a, l, u = v !== y ? "nextSibling" : "previousSibling",
                            c = e.parentNode,
                            f = b && e.nodeName.toLowerCase(),
                            d = !n && !b,
                            h = !1;
                        if (c) {
                            if (v) {
                                for (; u;) {
                                    for (s = e; s = s[u];)
                                        if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                    l = u = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? c.firstChild : c.lastChild], y && d) {
                                for (h = (a = (r = (i = (o = (s = c)[x] || (s[x] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (h = a = 0) || l.pop();)
                                    if (1 === s.nodeType && ++h && s === e) {
                                        i[p] = [S, a, h];
                                        break
                                    }
                            } else if (d && (h = a = (r = (i = (o = (s = e)[x] || (s[x] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && r[1]), !1 === h)
                                for (;
                                    (s = ++a && s && s[u] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((i = (o = s[x] || (s[x] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, h]), s !== e)););
                            return (h -= m) === g || h % g == 0 && 0 <= h / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return s[x] ? s(o) : 1 < s.length ? (t = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                        for (var n, r = s(e, o), i = r.length; i--;) e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return s(e, 0, t)
                    }) : s
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var r = [],
                        i = [],
                        a = f(e.replace(F, "$1"));
                    return a[x] ? ae(function(e, t, n, r) {
                        for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, t, n) {
                        return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
                    }
                }),
                has: ae(function(t) {
                    return function(e) {
                        return 0 < oe(t, e).length
                    }
                }),
                contains: ae(function(t) {
                    return t = t.replace(Z, ee),
                        function(e) {
                            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                        }
                }),
                lang: ae(function(n) {
                    return K.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: he(!1),
                disabled: he(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return z.test(e.nodeName)
                },
                input: function(e) {
                    return Y.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: pe(function() {
                    return [0]
                }),
                last: pe(function(e, t) {
                    return [t - 1]
                }),
                eq: pe(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: pe(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: pe(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: pe(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }),
                gt: pe(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = _.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[e] = fe(e);
        for (e in {
            submit: !0,
            reset: !0
        }) _.pseudos[e] = de(e);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ye(a, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                f = t && "parentNode" === c,
                d = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || f) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, s = [S, d];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (i = (o = e[x] || (e[x] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === d) return s[2] = r[2];
                                if ((i[c] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function be(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function _e(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
            return s
        }

        function we(h, p, g, m, v, e) {
            return m && !m[x] && (m = we(m)), v && !v[x] && (v = we(v, e)), ae(function(e, t, n, r) {
                var i, o, s, a = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    f = !h || !e && p ? c : _e(c, a, h, n, r),
                    d = g ? v || (e ? h : u || m) ? [] : t : f;
                if (g && g(f, d, n, r), m)
                    for (i = _e(d, l), m(i, [], n, r), o = i.length; o--;)(s = i[o]) && (d[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (i = [], o = d.length; o--;)(s = d[o]) && i.push(f[o] = s);
                            v(null, d = [], i, r)
                        }
                        for (o = d.length; o--;)(s = d[o]) && -1 < (i = v ? P(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else d = _e(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, r) : I.apply(t, d)
            })
        }

        function Te(e) {
            for (var i, t, n, r = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = ye(function(e) {
                return e === i
            }, s, !0), u = ye(function(e) {
                return -1 < P(i, e)
            }, s, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                return i = null, r
            }]; a < r; a++)
                if (t = _.relative[e[a].type]) c = [ye(be(c), t)];
                else {
                    if ((t = _.filter[e[a].type].apply(null, e[a].matches))[x]) {
                        for (n = ++a; n < r && !_.relative[e[n].type]; n++);
                        return we(1 < a && be(c), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(F, "$1"), t, a < n && Te(e.slice(a, n)), n < r && Te(e = e.slice(n)), n < r && ve(e))
                    }
                    c.push(t)
                } return be(c)
        }
        return me.prototype = _.filters = _.pseudos, _.setFilters = new me, p = oe.tokenize = function(e, t) {
            var n, r, i, o, s, a, l, u = b[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, a = [], l = _.preFilter; s;) {
                for (o in n && !(r = q.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = B.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(F, " ")
                }), s = s.slice(n.length)), _.filter) !(r = Q[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : b(e, a).slice(0)
        }, f = oe.compile = function(e, t) {
            var n, m, v, y, b, r, i = [],
                o = [],
                s = D[e + " "];
            if (!s) {
                for (t || (t = p(e)), n = t.length; n--;)(s = Te(t[n]))[x] ? i.push(s) : o.push(s);
                (s = D(e, (m = o, y = 0 < (v = i).length, b = 0 < m.length, r = function(e, t, n, r, i) {
                    var o, s, a, l = 0,
                        u = "0",
                        c = e && [],
                        f = [],
                        d = w,
                        h = e || b && _.find.TAG("*", i),
                        p = S += null == d ? 1 : Math.random() || .1,
                        g = h.length;
                    for (i && (w = t === E || t || i); u !== g && null != (o = h[u]); u++) {
                        if (b && o) {
                            for (s = 0, t || o.ownerDocument === E || (T(o), n = !C); a = m[s++];)
                                if (a(o, t || E, n)) {
                                    r.push(o);
                                    break
                                } i && (S = p)
                        }
                        y && ((o = !a && o) && l--, e && c.push(o))
                    }
                    if (l += u, y && u !== l) {
                        for (s = 0; a = v[s++];) a(c, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--;) c[u] || f[u] || (f[u] = O.call(r));
                            f = _e(f)
                        }
                        I.apply(r, f), i && !e && 0 < f.length && 1 < l + v.length && oe.uniqueSort(r)
                    }
                    return i && (S = p, w = d), c
                }, y ? ae(r) : r))).selector = e
            }
            return s
        }, g = oe.select = function(e, t, n, r) {
            var i, o, s, a, l, u = "function" == typeof e && e,
                c = !r && p(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && C && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !_.relative[a = s.type]);)
                    if ((l = _.find[a]) && (r = l(s.matches[0].replace(Z, ee), J.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && ve(o))) return I.apply(n, r), n;
                        break
                    }
            }
            return (u || f(e, c))(r, t, !C, n, !t || J.test(e) && ge(t.parentNode) || t), n
        }, h.sortStable = x.split("").sort(A).join("") === x, h.detectDuplicates = !!u, T(), h.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(L, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(E);
    x.find = p, x.expr = p.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = p.uniqueSort, x.text = p.getText, x.isXMLDoc = p.isXML, x.contains = p.contains, x.escapeSelector = p.escape;
    var T = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                 (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && x(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = x.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, n, r) {
        return y(n) ? x.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? x.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? x.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : x.filter(n, e, r)
    }
    x.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, x.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (x.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) x.find(e, i[t], n);
            return 1 < r ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function(e) {
            return !!O(this, "string" == typeof e && D.test(e) ? x(e) : e || [], !1).length
        }
    });
    var k, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || k, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), N.test(r[1]) && x.isPlainObject(t))
                    for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, k = x(C);
    var j = /^(?:parents|prev(?:Until|All))/,
        P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && x(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? x.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(x(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, function(r, i) {
        x.fn[r] = function(e, t) {
            var n = x.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = x.filter(t, n)), 1 < this.length && (P[r] || x.uniqueSort(n), j.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function W(e, t, n, r) {
        var i;
        try {
            e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, x.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }), n) : x.extend({}, r);
        var i, t, o, s, a = [],
            l = [],
            u = -1,
            c = function() {
                for (s = s || r.once, o = i = !0; l.length; u = -1)
                    for (t = l.shift(); ++u < a.length;) !1 === a[u].apply(t[0], t[1]) && r.stopOnFalse && (u = a.length, t = !1);
                r.memory || (t = !1), i = !1, s && (a = t ? [] : "")
            },
            f = {
                add: function() {
                    return a && (t && !i && (u = a.length - 1, l.push(t)), function n(e) {
                        x.each(e, function(e, t) {
                            y(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return x.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = x.inArray(t, a, n));) a.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < x.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = l = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], t || i || (a = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, x.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return x.Deferred(function(r) {
                            x.each(o, function(e, t) {
                                var n = y(i[t[4]]) && i[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var l = 0;

                        function u(i, o, s, a) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < l)) {
                                            if ((e = s.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, u(l, o, M, a), u(l, o, R, a)) : (l++, t.call(e, u(l, o, M, a), u(l, o, R, a), u(l, o, M, o.notifyWith))) : (s !== M && (n = void 0, r = [e]), (a || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (s !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (x.Deferred.getStackHook && (t.stackTrace = x.Deferred.getStackHook()), E.setTimeout(t))
                            }
                        }
                        return x.Deferred(function(e) {
                            o[0][3].add(u(0, e, y(r) ? r : M, e.notifyWith)), o[1][3].add(u(0, e, y(t) ? t : M)), o[2][3].add(u(0, e, y(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, s) : s
                    }
                },
                a = {};
            return x.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = a.call(arguments),
                o = x.Deferred(),
                s = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (W(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || y(i[t] && i[t].then))) return o.then();
            for (; t--;) W(i[t], s(t), o.reject);
            return o.promise()
        }
    });
    var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(e, t) {
        E.console && E.console.warn && e && U.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, x.readyException = function(e) {
        E.setTimeout(function() {
            throw e
        })
    };
    var F = x.Deferred();

    function q() {
        C.removeEventListener("DOMContentLoaded", q), E.removeEventListener("load", q), x.ready()
    }
    x.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            x.readyException(e)
        }), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || F.resolveWith(C, [x])
        }
    }), x.ready.then = F.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? E.setTimeout(x.ready) : (C.addEventListener("DOMContentLoaded", q), E.addEventListener("load", q));
    var B = function(e, t, n, r, i, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === w(n))
                for (a in i = !0, n) B(e, t, a, n[a], !0, o, s);
            else if (void 0 !== r && (i = !0, y(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                return u.call(x(e), n)
            })), t))
                for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        $ = /^-ms-/,
        V = /-([a-z])/g;

    function K(e, t) {
        return t.toUpperCase()
    }

    function Q(e) {
        return e.replace($, "ms-").replace(V, K)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function z() {
        this.expando = x.expando + z.uid++
    }
    z.uid = 1, z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[Q(t)] = n;
            else
                for (r in t) i[Q(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in r ? [t] : t.match(H) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || x.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var G = new z,
        X = new z,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                X.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return X.hasData(e) || G.hasData(e)
        },
        data: function(e, t, n) {
            return X.access(e, t, n)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }), x.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = X.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = Q(r.slice(5)), ee(o, r, i[r]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                X.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = X.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    X.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }), x.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, x.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                x.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    G.remove(e, [t + "queue", n])
                })
            })
        }
    }), x.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? x.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = x.queue(this, t, n);
                x._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = x.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = G.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
        },
        oe = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
            return i
        };

    function se(e, t, n, r) {
        var i, o, s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            c = (x.cssNumber[t] || "px" !== u && +l) && ne.exec(x.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) x.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, x.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var ae = {};

    function le(e, t) {
        for (var n, r, i, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (u[c] = G.get(r, "display") || null, u[c] || (r.style.display = "")), "" === r.style.display && ie(r) && (u[c] = (l = s = o = void 0, s = (i = r).ownerDocument, a = i.nodeName, (l = ae[a]) || (o = s.body.appendChild(s.createElement(a)), l = x.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ae[a] = l)))) : "none" !== n && (u[c] = "none", G.set(r, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    x.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i,
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
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? x.merge([e], n) : n
    }

    function pe(e, t) {
        for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
    var ge, me, ve = /<|&#?\w+;/;

    function ye(e, t, n, r, i) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === w(o)) x.merge(d, o.nodeType ? [o] : o);
                else if (ve.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), a = (ce.exec(o) || ["", ""])[1].toLowerCase(), l = de[a] || de._default, s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
                    x.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
                } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (r && -1 < x.inArray(o, r)) i && i.push(o);
            else if (u = x.contains(o.ownerDocument, o), s = he(f.appendChild(o), "script"), u && pe(s), n)
                for (c = 0; o = s[c++];) fe.test(o.type || "") && n.push(o);
        return f
    }
    ge = C.createDocumentFragment().appendChild(C.createElement("div")), (me = C.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), v.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;
    var be = C.documentElement,
        _e = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function Ce() {
        return !1
    }

    function xe() {
        try {
            return C.activeElement
        } catch (e) {}
    }

    function Se(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return x().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = x.guid++)), e.each(function() {
            x.event.add(this, t, i, r, n)
        })
    }
    x.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, l, u, c, f, d, h, p, g, m = G.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && x.find.matchesSelector(be, i), n.guid || (n.guid = x.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                    return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                }), u = (e = (e || "").match(H) || [""]).length; u--;) h = g = (a = Te.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = x.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = x.event.special[h] || {}, c = x.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && x.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), x.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, l, u, c, f, d, h, p, g, m = G.hasData(e) && G.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(H) || [""]).length; u--;)
                    if (h = g = (a = Te.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = x.event.special[h] || {}, d = l[h = (r ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || x.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) x.event.remove(e, h + t[u], n, r, !0);
                x.isEmptyObject(l) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s, a = x.event.fix(e),
                l = new Array(arguments.length),
                u = (G.get(this, "events") || {})[a.type] || [],
                c = x.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = x.event.handlers.call(this, a, u), t = 0;
                     (i = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = i.elem, n = 0;
                         (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < x(i, this).index(u) : x.find(i, this, null, [u]).length), s[i] && o.push(r);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(x.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xe() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xe() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return A(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        x.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || x.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), x.fn.extend({
        on: function(e, t, n, r) {
            return Se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
                x.event.remove(this, e, n, t)
            })
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ke(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (o = G.access(e), s = G.set(t, o), u = o.events))
                for (i in delete s.handle, s.events = {}, u)
                    for (n = 0, r = u[i].length; n < r; n++) x.event.add(t, i, u[i][n]);
            X.hasData(e) && (a = X.access(e), l = x.extend({}, a), X.set(t, l))
        }
    }

    function Le(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, l, u, c = 0,
            f = n.length,
            d = f - 1,
            h = r[0],
            p = y(h);
        if (p || 1 < f && "string" == typeof h && !v.checkClone && Ne.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            p && (r[0] = h.call(this, e, t.html())), Le(t, r, i, o)
        });
        if (f && (t = (e = ye(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = x.map(he(e, "script"), Ie)).length; c < f; c++) l = e, c !== d && (l = x.clone(l, !0, !0), a && x.merge(s, he(l, "script"))), i.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, x.map(s, je), c = 0; c < a; c++) l = s[c], fe.test(l.type || "") && !G.access(l, "globalEval") && x.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(l.src) : _(l.textContent.replace(Oe, ""), u, l))
        }
        return n
    }

    function He(e, t, n) {
        for (var r, i = t ? x.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || x.cleanData(he(r)), r.parentNode && (n && x.contains(r.ownerDocument, r) && pe(he(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e.replace(De, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, l, u, c = e.cloneNode(!0),
                f = x.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = he(c), r = 0, i = (o = he(e)).length; r < i; r++) a = o[r], l = s[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || he(e), s = s || he(c), r = 0, i = o.length; r < i; r++) Pe(o[r], s[r]);
                else Pe(e, c);
            return 0 < (s = he(c, "script")).length && pe(s, !f && he(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Le(this, arguments, function(e) {
                var t = this.parentNode;
                x.inArray(this, n) < 0 && (x.cleanData(he(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        x.fn[e] = function(e) {
            for (var t, n = [], r = x(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), x(r[o])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = E), t.getComputedStyle(e)
        },
        We = new RegExp(re.join("|"), "i");

    function Ue(e, t, n) {
        var r, i, o, s, a = e.style;
        return (n = n || Re(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || x.contains(e.ownerDocument, e) || (s = x.style(e, t)), !v.pixelBoxStyles() && Me.test(s) && We.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(a).appendChild(l);
                var e = E.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 36 === l.offsetWidth || "absolute", be.removeChild(a), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, s, a = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, x.extend(v, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            }
        }))
    }();
    var qe = /^(none|table(?!-c[ea]).+)/,
        Be = /^--/,
        $e = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ke = ["Webkit", "Moz", "ms"],
        Qe = C.createElement("div").style;

    function Ye(e) {
        var t = x.cssProps[e];
        return t || (t = x.cssProps[e] = function(e) {
            if (e in Qe) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;)
                if ((e = Ke[n] + t) in Qe) return e
        }(e) || e), t
    }

    function ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ge(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += x.css(e, n + re[s], !0, i)), r ? ("content" === n && (l -= x.css(e, "padding" + re[s], !0, i)), "margin" !== n && (l -= x.css(e, "border" + re[s] + "Width", !0, i))) : (l += x.css(e, "padding" + re[s], !0, i), "padding" !== n ? l += x.css(e, "border" + re[s] + "Width", !0, i) : a += x.css(e, "border" + re[s] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function Xe(e, t, n) {
        var r = Re(e),
            i = Ue(e, t, r),
            o = "border-box" === x.css(e, "boxSizing", !1, r),
            s = o;
        if (Me.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return s = s && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === x.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Ge(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
    }

    function Je(e, t, n, r, i) {
        return new Je.prototype.init(e, t, n, r, i)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ue(e, "opacity");
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
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Q(t),
                    l = Be.test(t),
                    u = e.style;
                if (l || (t = Ye(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (x.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Q(t);
            return Be.test(t) || (t = Ye(a)), (s = x.cssHooks[t] || x.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ue(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), x.each(["height", "width"], function(e, a) {
        x.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !qe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, a, n) : oe(e, $e, function() {
                    return Xe(e, a, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Re(e),
                    o = "border-box" === x.css(e, "boxSizing", !1, i),
                    s = n && Ge(e, a, n, o, i);
                return o && v.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(i[a]) - Ge(e, a, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = x.css(e, a)), ze(0, t, s)
            }
        }
    }), x.cssHooks.marginLeft = Fe(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        x.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (x.cssHooks[i + o].set = ze)
    }), x.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; s < i; s++) o[t[s]] = x.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((x.Tween = Je).prototype = {
        constructor: Je,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
        }
    }).init.prototype = Je.prototype, (Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = Je.prototype.init, x.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === C.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(ot) : E.setTimeout(ot, x.fx.interval), x.fx.tick())
    }

    function st() {
        return E.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function at(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ut(o, e, t) {
        var n, s, r = 0,
            i = ut.prefilters.length,
            a = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Ze || st(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
                return a.notifyWith(o, [u, n, t]), n < 1 && i ? t : (i || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
            },
            u = a.promise({
                elem: o,
                props: x.extend({}, e),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || st(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = x.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (! function(e, t) {
            var n, r, i, o, s;
            for (n in e)
                if (i = t[r = Q(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = x.cssHooks[r]) && "expand" in s)
                    for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                else t[r] = i
        }(c, u.opts.specialEasing); r < i; r++)
            if (n = ut.prefilters[r].call(u, o, c, u.opts)) return y(n.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return x.map(c, lt, u), y(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), x.fx.timer(x.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    x.Animation = x.extend(ut, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            y(e) ? (t = e, e = ["*"]) : e = e.match(H);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, l, u, c, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                g = e.nodeType && ie(e),
                m = G.get(e, "fxshow");
            for (r in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    h[r] = m && m[r] || x.style(e, r)
                } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
                for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = G.get(e, "display")), "none" === (c = x.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = x.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === x.css(e, "float") && (l || (d.done(function() {
                    p.display = u
                }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(e, "fxshow", {
                    display: u
                }), o && (m.hidden = !g), g && le([e], !0), d.done(function() {
                    for (r in g || le([e]), G.remove(e, "fxshow"), h) x.style(e, r, h[r])
                })), l = lt(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return x.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            y(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ie).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = x.isEmptyObject(t),
                o = x.speed(e, n, r),
                s = function() {
                    var e = ut(this, x.extend({}, t), o);
                    (i || G.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(i, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = x.timers,
                    r = G.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || x.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = G.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = x.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, x.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function(e, r) {
        var i = x.fn[r];
        x.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(at(r, !0), e, t, n)
        }
    }), x.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        x.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            n = x.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), Ze = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        et || (et = !0, ot())
    }, x.fx.stop = function() {
        et = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(r, e) {
        return r = x.fx && x.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = E.setTimeout(e, r);
            t.stop = function() {
                E.clearTimeout(n)
            }
        })
    }, tt = C.createElement("input"), nt = C.createElement("select").appendChild(C.createElement("option")), tt.type = "checkbox", v.checkOn = "" !== tt.value, v.optSelected = nt.selected, (tt = C.createElement("input")).value = "t", tt.type = "radio", v.radioValue = "t" === tt.value;
    var ct, ft = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return B(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        }
    }), x.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = x.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(H);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = ft[t] || x.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != s(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;

    function pt(e) {
        return (e.match(H) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return B(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        }
    }), x.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t, i = x.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) {
                x(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = mt(t)).length)
                for (; n = this[l++];)
                    if (i = gt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = pt(r)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) {
                x(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                for (; n = this[l++];)
                    if (i = gt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (a = pt(r)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                s = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && s ? t ? this.addClass(i) : this.removeClass(i) : y(i) ? this.each(function(e) {
                x(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (s)
                    for (t = 0, n = x(this), r = mt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = gt(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + pt(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    x.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, x(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = x.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = x.valHooks[t.type] || x.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : pt(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : i.length;
                    for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = x.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < x.inArray(x.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        }, v.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in E;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, l, u, c, f, d = [n || C],
                h = m.call(e, "type") ? e.type : e,
                p = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(h + x.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[x.expando] ? e : new x.Event(h, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : x.makeArray(t, [e]), c = x.event.special[h] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !b(n)) {
                    for (a = c.delegateType || h, yt.test(a + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
                    s === (n.ownerDocument || C) && d.push(s.defaultView || s.parentWindow || E)
                }
                for (i = 0;
                     (o = d[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? a : c.bindType || h, (u = (G.get(o, "events") || {})[e.type] && G.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && Y(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = h, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Y(n) || l && y(n[h]) && !b(n) && ((s = n[l]) && (n[l] = null), x.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, bt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, bt), x.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(r, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), v.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            x.event.simulate(r, e.target, x.event.fix(e))
        };
        x.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = G.access(e, r);
                t || e.addEventListener(n, i, !0), G.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = G.access(e, r) - 1;
                t ? G.access(e, r, t) : (e.removeEventListener(n, i, !0), G.remove(e, r))
            }
        }
    });
    var _t = E.location,
        wt = Date.now(),
        Tt = /\?/;
    x.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new E.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), t
    };
    var Et = /\[\]$/,
        Ct = /\r?\n/g,
        xt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) x.each(e, function(e, t) {
            r || Et.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    x.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = y(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !xt.test(e) && (this.checked || !ue.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        Nt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Pt = {},
        Lt = {},
        Ht = "*/".concat("*"),
        Mt = C.createElement("a");

    function Rt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(H) || [];
            if (y(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, s) {
        var a = {},
            l = t === Lt;

        function u(e) {
            var r;
            return a[e] = !0, x.each(t[e] || [], function(e, t) {
                var n = t(i, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1)
            }), r
        }
        return u(i.dataTypes[0]) || !a["*"] && u("*")
    }

    function Ut(e, t) {
        var n, r, i = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r), e
    }
    Mt.href = _t.href, x.extend({
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
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, x.ajaxSettings), t) : Ut(x.ajaxSettings, e)
        },
        ajaxPrefilter: Rt(Pt),
        ajaxTransport: Rt(Lt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, d, n, h, r, p, g, i, o, m = x.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? x(v) : x.event,
                b = x.Deferred(),
                _ = x.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = kt.exec(d);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return p ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (b.promise(T), m.url = ((e || m.url || _t.href) + "").replace(jt, _t.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(H) || [""], null == m.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = x.param(m.data, m.traditional)), Wt(Pt, m, t, T), p) return T;
            for (i in (g = x.event && m.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !It.test(m.type), f = m.url.replace(Nt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(At, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (Tt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Ot, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt++ + o), m.url = f + o), m.ifModified && (x.lastModified[f] && T.setRequestHeader("If-Modified-Since", x.lastModified[f]), x.etag[f] && T.setRequestHeader("If-None-Match", x.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || p)) return T.abort();
            if (l = "abort", _.add(m.complete), T.done(m.success), T.fail(m.error), c = Wt(Lt, m, t, T)) {
                if (T.readyState = 1, g && y.trigger("ajaxSend", [T, m]), p) return T;
                m.async && 0 < m.timeout && (h = E.setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    p = !1, c.send(s, u)
                } catch (e) {
                    if (p) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, s, a, l, u = t;
                p || (p = !0, h && E.clearTimeout(h), c = void 0, d = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, l = e.dataTypes;
                         "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                l.unshift(i);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, T, n)), a = function(e, t, n, r) {
                    var i, o, s, a, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = u[l + " " + o] || u["* " + o]))
                                    for (i in u)
                                        if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));
                                            break
                                        } if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, T, i), i ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (x.lastModified[f] = l), (l = T.getResponseHeader("etag")) && (x.etag[f] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, i = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || u) + "", i ? b.resolveWith(v, [o, u, T]) : b.rejectWith(v, [T, u, s]), T.statusCode(w), w = void 0, g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : s]), _.fireWith(v, [T, u]), g && (y.trigger("ajaxComplete", [T, m]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], function(e, i) {
        x[i] = function(e, t, n, r) {
            return y(t) && (r = r || n, n = t, t = void 0), x.ajax(x.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, x.isPlainObject(e) && e))
        }
    }), x._evalUrl = function(e) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                x(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = x(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                x(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                x(this).replaceWith(this.childNodes)
            }), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new E.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        qt = x.ajaxSettings.xhr();
    v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, x.ajaxTransport(function(i) {
        var o, s;
        if (v.cors || qt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ft[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), s = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                    4 === r.readyState && E.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), x.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = x("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Bt, $t = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || x.expando + "_" + wt++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || x.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = E[r], E[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? x(E).removeProp(r) : E[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, $t.push(r)), o && y(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Bt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = ye([e], t, o), o && o.length && x(o).remove(), x.merge([], i.childNodes)));
        var r, i, o
    }, x.fn.load = function(e, t, n) {
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (r = pt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && x.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.expr.pseudos.animated = function(t) {
        return x.grep(x.timers, function(e) {
            return t === e.elem
        }).length
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, l, u = x.css(e, "position"),
                c = x(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), y(t) && (t = t.call(e, n, x.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, x.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                x.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = x(e).offset()).top += x.css(e, "borderTopWidth", !0), i.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - x.css(r, "marginTop", !0),
                    left: t.left - i.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || be
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        x.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r;
                if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), x.each(["top", "left"], function(e, n) {
        x.cssHooks[n] = Fe(v.pixelPosition, function(e, t) {
            if (t) return t = Ue(e, n), Me.test(t) ? x(e).position()[n] + "px" : t
        })
    }), x.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        x.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            x.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return b(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? x.css(e, t, i) : x.style(e, t, n, i)
                }, a, n ? e : void 0, n)
            }
        })
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        x.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), x.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = a.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, i
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = A, x.isFunction = y, x.isWindow = b, x.camelCase = Q, x.type = w, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    });
    var Kt = E.jQuery,
        Qt = E.$;
    return x.noConflict = function(e) {
        return E.$ === x && (E.$ = Qt), e && E.jQuery === x && (E.jQuery = Kt), x
    }, e || (E.jQuery = E.$ = x), x
}),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
    }(this, function() {
        "use strict";
        for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], n = 0, r = 0; r < t.length; r += 1)
            if (e && 0 <= navigator.userAgent.indexOf(t[r])) {
                n = 1;
                break
            } var s = e && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
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
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
            }
            var t = _(e),
                n = t.overflow,
                r = t.overflowX,
                i = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + i + r) ? e : p(d(e))
        }
        var i = e && !(!window.MSInputMethodContext || !document.documentMode),
            o = e && /MSIE 10/.test(navigator.userAgent);

        function g(e) {
            return 11 === e ? i : 10 === e ? o : i || o
        }

        function y(e) {
            if (!e) return document.documentElement;
            for (var t = g(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === _(n, "position") ? y(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function c(e) {
            return null !== e.parentNode ? c(e.parentNode) : e
        }

        function h(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                r = n ? e : t,
                i = n ? t : e,
                o = document.createRange();
            o.setStart(r, 0), o.setEnd(i, 0);
            var s, a, l = o.commonAncestorContainer;
            if (e !== l && t !== l || r.contains(i)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && y(s.firstElementChild) !== s ? y(l) : l;
            var u = c(e);
            return u.host ? h(u.host, t) : h(e, c(t).host)
        }

        function m(e) {
            var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var r = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || r)[t]
            }
            return e[t]
        }

        function f(e, t) {
            var n = "x" === t ? "Left" : "Top",
                r = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
        }

        function l(e, t, n, r) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], g(10) ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }

        function v() {
            var e = document.body,
                t = document.documentElement,
                n = g(10) && getComputedStyle(t);
            return {
                height: l("Height", e, t, n),
                width: l("Width", e, t, n)
            }
        }
        var u = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            b = function() {
                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), e
                }
            }(),
            w = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };

        function E(e) {
            return T({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function C(e) {
            var t = {};
            try {
                if (g(10)) {
                    t = e.getBoundingClientRect();
                    var n = m(e, "top"),
                        r = m(e, "left");
                    t.top += n, t.left += r, t.bottom += n, t.right += r
                } else t = e.getBoundingClientRect()
            } catch (e) {}
            var i = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                },
                o = "HTML" === e.nodeName ? v() : {},
                s = o.width || e.clientWidth || i.right - i.left,
                a = o.height || e.clientHeight || i.bottom - i.top,
                l = e.offsetWidth - s,
                u = e.offsetHeight - a;
            if (l || u) {
                var c = _(e);
                l -= f(c, "x"), u -= f(c, "y"), i.width -= l, i.height -= u
            }
            return E(i)
        }

        function x(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                r = g(10),
                i = "HTML" === t.nodeName,
                o = C(e),
                s = C(t),
                a = p(e),
                l = _(t),
                u = parseFloat(l.borderTopWidth, 10),
                c = parseFloat(l.borderLeftWidth, 10);
            n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
            var f = E({
                top: o.top - s.top - u,
                left: o.left - s.left - c,
                width: o.width,
                height: o.height
            });
            if (f.marginTop = 0, f.marginLeft = 0, !r && i) {
                var d = parseFloat(l.marginTop, 10),
                    h = parseFloat(l.marginLeft, 10);
                f.top -= u - d, f.bottom -= u - d, f.left -= c - h, f.right -= c - h, f.marginTop = d, f.marginLeft = h
            }
            return (r && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    r = m(t, "top"),
                    i = m(t, "left"),
                    o = n ? -1 : 1;
                return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
            }(f, t)), f
        }

        function S(e) {
            if (!e || !e.parentElement || g()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === _(t, "transform");) t = t.parentElement;
            return t || document.documentElement
        }

        function D(e, t, n, r) {
            var i = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                o = {
                    top: 0,
                    left: 0
                },
                s = i ? S(e) : h(e, t);
            if ("viewport" === r) o = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    n = e.ownerDocument.documentElement,
                    r = x(e, n),
                    i = Math.max(n.clientWidth, window.innerWidth || 0),
                    o = Math.max(n.clientHeight, window.innerHeight || 0),
                    s = t ? 0 : m(n),
                    a = t ? 0 : m(n, "left");
                return E({
                    top: s - r.top + r.marginTop,
                    left: a - r.left + r.marginLeft,
                    width: i,
                    height: o
                })
            }(s, i);
            else {
                var a = void 0;
                "scrollParent" === r ? "BODY" === (a = p(d(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === r ? e.ownerDocument.documentElement : r;
                var l = x(a, s, i);
                if ("HTML" !== a.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === _(t, "position") || e(d(t)))
                }(s)) o = l;
                else {
                    var u = v(),
                        c = u.height,
                        f = u.width;
                    o.top += l.top - l.marginTop, o.bottom = c + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
                }
            }
            return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
        }

        function A(e, t, r, n, i) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = D(r, n, o, i),
                a = {
                    top: {
                        width: s.width,
                        height: t.top - s.top
                    },
                    right: {
                        width: s.right - t.right,
                        height: s.height
                    },
                    bottom: {
                        width: s.width,
                        height: s.bottom - t.bottom
                    },
                    left: {
                        width: t.left - s.left,
                        height: s.height
                    }
                },
                l = Object.keys(a).map(function(e) {
                    return T({
                        key: e
                    }, a[e], {
                        area: (t = a[e], t.width * t.height)
                    });
                    var t
                }).sort(function(e, t) {
                    return t.area - e.area
                }),
                u = l.filter(function(e) {
                    var t = e.width,
                        n = e.height;
                    return t >= r.clientWidth && n >= r.clientHeight
                }),
                c = 0 < u.length ? u[0].key : l[0].key,
                f = e.split("-")[1];
            return c + (f ? "-" + f : "")
        }

        function N(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return x(n, r ? S(t) : h(t, n), r)
        }

        function O(e) {
            var t = getComputedStyle(e),
                n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return {
                width: e.offsetWidth + r,
                height: e.offsetHeight + n
            }
        }

        function k(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
                return t[e]
            })
        }

        function I(e, t, n) {
            n = n.split("-")[0];
            var r = O(e),
                i = {
                    width: r.width,
                    height: r.height
                },
                o = -1 !== ["right", "left"].indexOf(n),
                s = o ? "top" : "left",
                a = o ? "left" : "top",
                l = o ? "height" : "width",
                u = o ? "width" : "height";
            return i[s] = t[s] + t[l] / 2 - r[l] / 2, i[a] = n === a ? t[a] - r[u] : t[k(a)], i
        }

        function j(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function P(e, n, t) {
            return (void 0 === t ? e : e.slice(0, function(e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex(function(e) {
                    return e[t] === n
                });
                var r = j(e, function(e) {
                    return e[t] === n
                });
                return e.indexOf(r)
            }(e, "name", t))).forEach(function(e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var t = e.function || e.fn;
                e.enabled && a(t) && (n.offsets.popper = E(n.offsets.popper), n.offsets.reference = E(n.offsets.reference), n = t(n, e))
            }), n
        }

        function L(e, n) {
            return e.some(function(e) {
                var t = e.name;
                return e.enabled && t === n
            })
        }

        function H(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                var i = t[r],
                    o = i ? "" + i + n : e;
                if (void 0 !== document.body.style[o]) return o
            }
            return null
        }

        function M(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function R(e, t, n, r) {
            n.updateBound = r, M(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var i = p(e);
            return function e(t, n, r, i) {
                var o = "BODY" === t.nodeName,
                    s = o ? t.ownerDocument.defaultView : t;
                s.addEventListener(n, r, {
                    passive: !0
                }), o || e(p(s.parentNode), n, r, i), i.push(s)
            }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
        }

        function W() {
            var e, t;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, M(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
        }

        function U(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function F(n, r) {
            Object.keys(r).forEach(function(e) {
                var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && U(r[e]) && (t = "px"), n.style[e] = r[e] + t
            })
        }

        function q(e, t, n) {
            var r = j(e, function(e) {
                    return e.name === t
                }),
                i = !!r && e.some(function(e) {
                    return e.name === n && e.enabled && e.order < r.order
                });
            if (!i) {
                var o = "`" + t + "`",
                    s = "`" + n + "`";
                console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return i
        }
        var B = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            $ = B.slice(3);

        function V(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = $.indexOf(e),
                r = $.slice(n + 1).concat($.slice(0, n));
            return t ? r.reverse() : r
        }
        var K = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        };

        function Q(e, i, o, t) {
            var s = [0, 0],
                a = -1 !== ["right", "left"].indexOf(t),
                n = e.split(/(\+|\-)/).map(function(e) {
                    return e.trim()
                }),
                r = n.indexOf(j(n, function(e) {
                    return -1 !== e.search(/,|\s/)
                }));
            n[r] && -1 === n[r].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                u = -1 !== r ? [n.slice(0, r).concat([n[r].split(l)[0]]), [n[r].split(l)[1]].concat(n.slice(r + 1))] : [n];
            return (u = u.map(function(e, t) {
                var n = (1 === t ? !a : a) ? "height" : "width",
                    r = !1;
                return e.reduce(function(e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, r = !0, e) : r ? (e[e.length - 1] += t, r = !1, e) : e.concat(t)
                }, []).map(function(e) {
                    return function(e, t, n, r) {
                        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                            o = +i[1],
                            s = i[2];
                        if (!o) return e;
                        if (0 === s.indexOf("%")) {
                            var a = void 0;
                            switch (s) {
                                case "%p":
                                    a = n;
                                    break;
                                case "%":
                                case "%r":
                                default:
                                    a = r
                            }
                            return E(a)[t] / 100 * o
                        }
                        if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                        return o
                    }(e, n, i, o)
                })
            })).forEach(function(n, r) {
                n.forEach(function(e, t) {
                    U(e) && (s[r] += e * ("-" === n[t - 1] ? -1 : 1))
                })
            }), s
        }
        var Y = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                r = t.split("-")[1];
                            if (r) {
                                var i = e.offsets,
                                    o = i.reference,
                                    s = i.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(n),
                                    l = a ? "left" : "top",
                                    u = a ? "width" : "height",
                                    c = {
                                        start: w({}, l, o[l]),
                                        end: w({}, l, o[l] + o[u] - s[u])
                                    };
                                e.offsets.popper = T({}, s, c[r])
                            }
                            return e
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.offset,
                                r = e.placement,
                                i = e.offsets,
                                o = i.popper,
                                s = i.reference,
                                a = r.split("-")[0],
                                l = void 0;
                            return l = U(+n) ? [+n, 0] : Q(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function(e, r) {
                            var t = r.boundariesElement || y(e.instance.popper);
                            e.instance.reference === t && (t = y(t));
                            var n = H("transform"),
                                i = e.instance.popper.style,
                                o = i.top,
                                s = i.left,
                                a = i[n];
                            i.top = "", i.left = "", i[n] = "";
                            var l = D(e.instance.popper, e.instance.reference, r.padding, t, e.positionFixed);
                            i.top = o, i.left = s, i[n] = a, r.boundaries = l;
                            var u = r.priority,
                                c = e.offsets.popper,
                                f = {
                                    primary: function(e) {
                                        var t = c[e];
                                        return c[e] < l[e] && !r.escapeWithReference && (t = Math.max(c[e], l[e])), w({}, e, t)
                                    },
                                    secondary: function(e) {
                                        var t = "right" === e ? "left" : "top",
                                            n = c[t];
                                        return c[e] > l[e] && !r.escapeWithReference && (n = Math.min(c[t], l[e] - ("right" === e ? c.width : c.height))), w({}, t, n)
                                    }
                                };
                            return u.forEach(function(e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                c = T({}, c, f[t](e))
                            }), e.offsets.popper = c, e
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.offsets,
                                n = t.popper,
                                r = t.reference,
                                i = e.placement.split("-")[0],
                                o = Math.floor,
                                s = -1 !== ["top", "bottom"].indexOf(i),
                                a = s ? "right" : "bottom",
                                l = s ? "left" : "top",
                                u = s ? "width" : "height";
                            return n[a] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[u]), n[l] > o(r[a]) && (e.offsets.popper[l] = o(r[a])), e
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function(e, t) {
                            var n;
                            if (!q(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var r = t.element;
                            if ("string" == typeof r) {
                                if (!(r = e.instance.popper.querySelector(r))) return e
                            } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var i = e.placement.split("-")[0],
                                o = e.offsets,
                                s = o.popper,
                                a = o.reference,
                                l = -1 !== ["left", "right"].indexOf(i),
                                u = l ? "height" : "width",
                                c = l ? "Top" : "Left",
                                f = c.toLowerCase(),
                                d = l ? "left" : "top",
                                h = l ? "bottom" : "right",
                                p = O(r)[u];
                            a[h] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - p)), a[f] + p > s[h] && (e.offsets.popper[f] += a[f] + p - s[h]), e.offsets.popper = E(e.offsets.popper);
                            var g = a[f] + a[u] / 2 - p / 2,
                                m = _(e.instance.popper),
                                v = parseFloat(m["margin" + c], 10),
                                y = parseFloat(m["border" + c + "Width"], 10),
                                b = g - e.offsets.popper[f] - v - y;
                            return b = Math.max(Math.min(s[u] - p, b), 0), e.arrowElement = r, e.offsets.arrow = (w(n = {}, f, Math.round(b)), w(n, d, ""), n), e
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function(p, g) {
                            if (L(p.instance.modifiers, "inner")) return p;
                            if (p.flipped && p.placement === p.originalPlacement) return p;
                            var m = D(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
                                v = p.placement.split("-")[0],
                                y = k(v),
                                b = p.placement.split("-")[1] || "",
                                _ = [];
                            switch (g.behavior) {
                                case K.FLIP:
                                    _ = [v, y];
                                    break;
                                case K.CLOCKWISE:
                                    _ = V(v);
                                    break;
                                case K.COUNTERCLOCKWISE:
                                    _ = V(v, !0);
                                    break;
                                default:
                                    _ = g.behavior
                            }
                            return _.forEach(function(e, t) {
                                if (v !== e || _.length === t + 1) return p;
                                v = p.placement.split("-")[0], y = k(v);
                                var n, r = p.offsets.popper,
                                    i = p.offsets.reference,
                                    o = Math.floor,
                                    s = "left" === v && o(r.right) > o(i.left) || "right" === v && o(r.left) < o(i.right) || "top" === v && o(r.bottom) > o(i.top) || "bottom" === v && o(r.top) < o(i.bottom),
                                    a = o(r.left) < o(m.left),
                                    l = o(r.right) > o(m.right),
                                    u = o(r.top) < o(m.top),
                                    c = o(r.bottom) > o(m.bottom),
                                    f = "left" === v && a || "right" === v && l || "top" === v && u || "bottom" === v && c,
                                    d = -1 !== ["top", "bottom"].indexOf(v),
                                    h = !!g.flipVariations && (d && "start" === b && a || d && "end" === b && l || !d && "start" === b && u || !d && "end" === b && c);
                                (s || f || h) && (p.flipped = !0, (s || f) && (v = _[t + 1]), h && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), p.placement = v + (b ? "-" + b : ""), p.offsets.popper = T({}, p.offsets.popper, I(p.instance.popper, p.offsets.reference, p.placement)), p = P(p.instance.modifiers, p, "flip"))
                            }), p
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport"
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function(e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                r = e.offsets,
                                i = r.popper,
                                o = r.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                a = -1 === ["top", "left"].indexOf(n);
                            return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0), e.placement = k(t), e.offsets.popper = E(i), e
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function(e) {
                            if (!q(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                n = j(e.instance.modifiers, function(e) {
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
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.x,
                                r = t.y,
                                i = e.offsets.popper,
                                o = j(e.instance.modifiers, function(e) {
                                    return "applyStyle" === e.name
                                }).gpuAcceleration;
                            void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s = void 0 !== o ? o : t.gpuAcceleration,
                                a = C(y(e.instance.popper)),
                                l = {
                                    position: i.position
                                },
                                u = {
                                    left: Math.floor(i.left),
                                    top: Math.round(i.top),
                                    bottom: Math.round(i.bottom),
                                    right: Math.floor(i.right)
                                },
                                c = "bottom" === n ? "top" : "bottom",
                                f = "right" === r ? "left" : "right",
                                d = H("transform"),
                                h = void 0,
                                p = void 0;
                            if (p = "bottom" === c ? -a.height + u.bottom : u.top, h = "right" === f ? -a.width + u.right : u.left, s && d) l[d] = "translate3d(" + h + "px, " + p + "px, 0)", l[c] = 0, l[f] = 0, l.willChange = "transform";
                            else {
                                var g = "bottom" === c ? -1 : 1,
                                    m = "right" === f ? -1 : 1;
                                l[c] = p * g, l[f] = h * m, l.willChange = c + ", " + f
                            }
                            var v = {
                                "x-placement": e.placement
                            };
                            return e.attributes = T({}, v, e.attributes), e.styles = T({}, l, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function(e) {
                            var t, n;
                            return F(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                            }), e.arrowElement && Object.keys(e.arrowStyles).length && F(e.arrowElement, e.arrowStyles), e
                        },
                        onLoad: function(e, t, n, r, i) {
                            var o = N(i, t, e, n.positionFixed),
                                s = A(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", s), F(t, {
                                position: n.positionFixed ? "fixed" : "absolute"
                            }), n
                        },
                        gpuAcceleration: void 0
                    }
                }
            },
            z = function() {
                function o(e, t) {
                    var n = this,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    u(this, o), this.scheduleUpdate = function() {
                        return requestAnimationFrame(n.update)
                    }, this.update = s(this.update.bind(this)), this.options = T({}, o.Defaults, r), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(T({}, o.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                        n.options.modifiers[e] = T({}, o.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                        return T({
                            name: e
                        }, n.options.modifiers[e])
                    }).sort(function(e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function(e) {
                        e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                    }), this.update();
                    var i = this.options.eventsEnabled;
                    i && this.enableEventListeners(), this.state.eventsEnabled = i
                }
                return b(o, [{
                    key: "update",
                    value: function() {
                        return function() {
                            if (!this.state.isDestroyed) {
                                var e = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                e.offsets.reference = N(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = I(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                            }
                        }.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return function() {
                            return this.state.isDestroyed = !0, L(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                        }.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return function() {
                            this.state.eventsEnabled || (this.state = R(this.reference, this.options, this.state, this.scheduleUpdate))
                        }.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return W.call(this)
                    }
                }]), o
            }();
        return z.Utils = ("undefined" != typeof window ? window : global).PopperUtils, z.placements = B, z.Defaults = Y, z
    });
var Util = function(r) {
    var t = "transitionend";

    function e(e) {
        var t = this,
            n = !1;
        return r(this).one(l.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || l.triggerTransitionEnd(t)
        }, e), this
    }
    var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            t && "#" !== t || (t = e.getAttribute("href") || "");
            try {
                return 0 < r(document).find(t).length ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = r(e).css("transition-duration");
            return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            r(e).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var i = n[r],
                        o = t[r],
                        s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(i).test(s)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + i + '".')
                } var a
        }
    };
    return r.fn.emulateTransitionEnd = e, r.event.special[l.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (r(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    }, l
}($);

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Alert = function(i) {
    var e = "alert",
        o = "bs.alert",
        t = "." + o,
        n = i.fn[e],
        s = {
            CLOSE: "close" + t,
            CLOSED: "closed" + t,
            CLICK_DATA_API: "click" + t + ".data-api"
        },
        a = "alert",
        l = "fade",
        u = "show",
        r = function() {
            function r(e) {
                this._element = e
            }
            var e = r.prototype;
            return e.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function() {
                i.removeData(this._element, o), this._element = null
            }, e._getRootElement = function(e) {
                var t = Util.getSelectorFromElement(e),
                    n = !1;
                return t && (n = i(t)[0]), n || (n = i(e).closest("." + a)[0]), n
            }, e._triggerCloseEvent = function(e) {
                var t = i.Event(s.CLOSE);
                return i(e).trigger(t), t
            }, e._removeElement = function(t) {
                var n = this;
                if (i(t).removeClass(u), i(t).hasClass(l)) {
                    var e = Util.getTransitionDurationFromElement(t);
                    i(t).one(Util.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function(e) {
                i(e).detach().trigger(s.CLOSED).remove()
            }, r._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = i(this),
                        t = e.data(o);
                    t || (t = new r(this), e.data(o, t)), "close" === n && t[n](this)
                })
            }, r._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, _createClass(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }]), r
        }();
    return i(document).on(s.CLICK_DATA_API, '[data-dismiss="alert"]', r._handleDismiss(new r)), i.fn[e] = r._jQueryInterface, i.fn[e].Constructor = r, i.fn[e].noConflict = function() {
        return i.fn[e] = n, r._jQueryInterface
    }, r
}($);

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Button = function(o) {
    var e = "button",
        r = "bs.button",
        t = "." + r,
        n = ".data-api",
        i = o.fn[e],
        s = "active",
        a = "btn",
        l = "focus",
        u = '[data-toggle^="button"]',
        c = '[data-toggle="buttons"]',
        f = "input",
        d = ".active",
        h = ".btn",
        p = {
            CLICK_DATA_API: "click" + t + n,
            FOCUS_BLUR_DATA_API: "focus" + t + n + " blur" + t + n
        },
        g = function() {
            function n(e) {
                this._element = e
            }
            var e = n.prototype;
            return e.toggle = function() {
                var e = !0,
                    t = !0,
                    n = o(this._element).closest(c)[0];
                if (n) {
                    var r = o(this._element).find(f)[0];
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && o(this._element).hasClass(s)) e = !1;
                            else {
                                var i = o(n).find(d)[0];
                                i && o(i).removeClass(s)
                            } if (e) {
                            if (r.hasAttribute("disabled") || n.hasAttribute("disabled") || r.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            r.checked = !o(this._element).hasClass(s), o(r).trigger("change")
                        }
                        r.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !o(this._element).hasClass(s)), e && o(this._element).toggleClass(s)
            }, e.dispose = function() {
                o.removeData(this._element, r), this._element = null
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = o(this).data(r);
                    e || (e = new n(this), o(this).data(r, e)), "toggle" === t && e[t]()
                })
            }, _createClass(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }]), n
        }();
    return o(document).on(p.CLICK_DATA_API, u, function(e) {
        e.preventDefault();
        var t = e.target;
        o(t).hasClass(a) || (t = o(t).closest(h)), g._jQueryInterface.call(o(t), "toggle")
    }).on(p.FOCUS_BLUR_DATA_API, u, function(e) {
        var t = o(e.target).closest(h)[0];
        o(t).toggleClass(l, /^focus(in)?$/.test(e.type))
    }), o.fn[e] = g._jQueryInterface, o.fn[e].Constructor = g, o.fn[e].noConflict = function() {
        return o.fn[e] = i, g._jQueryInterface
    }, g
}($);

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(e) {
            _defineProperty(t, e, n[e])
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Carousel = function(h) {
    var t = "carousel",
        s = "bs.carousel",
        n = "." + s,
        e = ".data-api",
        r = h.fn[t],
        i = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        },
        a = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        },
        p = "next",
        l = "prev",
        g = "left",
        m = "right",
        v = {
            SLIDE: "slide" + n,
            SLID: "slid" + n,
            KEYDOWN: "keydown" + n,
            MOUSEENTER: "mouseenter" + n,
            MOUSELEAVE: "mouseleave" + n,
            TOUCHEND: "touchend" + n,
            LOAD_DATA_API: "load" + n + e,
            CLICK_DATA_API: "click" + n + e
        },
        u = "carousel",
        y = "active",
        b = "slide",
        _ = "carousel-item-right",
        w = "carousel-item-left",
        T = "carousel-item-next",
        E = "carousel-item-prev",
        C = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        },
        o = function() {
            function o(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = h(e)[0], this._indicatorsElement = h(this._element).find(C.INDICATORS)[0], this._addEventListeners()
            }
            var e = o.prototype;
            return e.next = function() {
                this._isSliding || this._slide(p)
            }, e.nextWhenVisible = function() {
                !document.hidden && h(this._element).is(":visible") && "hidden" !== h(this._element).css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide(l)
            }, e.pause = function(e) {
                e || (this._isPaused = !0), h(this._element).find(C.NEXT_PREV)[0] && (Util.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(e) {
                var t = this;
                this._activeElement = h(this._element).find(C.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) h(this._element).one(v.SLID, function() {
                        return t.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var r = n < e ? p : l;
                        this._slide(r, this._items[e])
                    }
            }, e.dispose = function() {
                h(this._element).off(n), h.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(e) {
                return e = _objectSpread({}, i, e), Util.typeCheckConfig(t, e, a), e
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && h(this._element).on(v.KEYDOWN, function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (h(this._element).on(v.MOUSEENTER, function(e) {
                    return t.pause(e)
                }).on(v.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                }), "ontouchstart" in document.documentElement && h(this._element).on(v.TOUCHEND, function() {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }, e._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(e) {
                return this._items = h.makeArray(h(e).parent().find(C.ITEM)), this._items.indexOf(e)
            }, e._getItemByDirection = function(e, t) {
                var n = e === p,
                    r = e === l,
                    i = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                var s = (i + (e === l ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    r = this._getItemIndex(h(this._element).find(C.ACTIVE_ITEM)[0]),
                    i = h.Event(v.SLIDE, {
                        relatedTarget: e,
                        direction: t,
                        from: r,
                        to: n
                    });
                return h(this._element).trigger(i), i
            }, e._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    h(this._indicatorsElement).find(C.ACTIVE).removeClass(y);
                    var t = this._indicatorsElement.children[this._getItemIndex(e)];
                    t && h(t).addClass(y)
                }
            }, e._slide = function(e, t) {
                var n, r, i, o = this,
                    s = h(this._element).find(C.ACTIVE_ITEM)[0],
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    u = this._getItemIndex(l),
                    c = Boolean(this._interval);
                if (e === p ? (n = w, r = T, i = g) : (n = _, r = E, i = m), l && h(l).hasClass(y)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, i).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var f = h.Event(v.SLID, {
                        relatedTarget: l,
                        direction: i,
                        from: a,
                        to: u
                    });
                    if (h(this._element).hasClass(b)) {
                        h(l).addClass(r), Util.reflow(l), h(s).addClass(n), h(l).addClass(n);
                        var d = Util.getTransitionDurationFromElement(s);
                        h(s).one(Util.TRANSITION_END, function() {
                            h(l).removeClass(n + " " + r).addClass(y), h(s).removeClass(y + " " + r + " " + n), o._isSliding = !1, setTimeout(function() {
                                return h(o._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else h(s).removeClass(y), h(l).addClass(y), this._isSliding = !1, h(this._element).trigger(f);
                    c && this.cycle()
                }
            }, o._jQueryInterface = function(r) {
                return this.each(function() {
                    var e = h(this).data(s),
                        t = _objectSpread({}, i, h(this).data());
                    "object" == typeof r && (t = _objectSpread({}, t, r));
                    var n = "string" == typeof r ? r : t.slide;
                    if (e || (e = new o(this, t), h(this).data(s, e)), "number" == typeof r) e.to(r);
                    else if ("string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && (e.pause(), e.cycle())
                })
            }, o._dataApiClickHandler = function(e) {
                var t = Util.getSelectorFromElement(this);
                if (t) {
                    var n = h(t)[0];
                    if (n && h(n).hasClass(u)) {
                        var r = _objectSpread({}, h(n).data(), h(this).data()),
                            i = this.getAttribute("data-slide-to");
                        i && (r.interval = !1), o._jQueryInterface.call(h(n), r), i && h(n).data(s).to(i), e.preventDefault()
                    }
                }
            }, _createClass(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return i
                }
            }]), o
        }();
    return h(document).on(v.CLICK_DATA_API, C.DATA_SLIDE, o._dataApiClickHandler), h(window).on(v.LOAD_DATA_API, function() {
        h(C.DATA_RIDE).each(function() {
            var e = h(this);
            o._jQueryInterface.call(e, e.data())
        })
    }), h.fn[t] = o._jQueryInterface, h.fn[t].Constructor = o, h.fn[t].noConflict = function() {
        return h.fn[t] = r, o._jQueryInterface
    }, o
}($);

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(e) {
            _defineProperty(t, e, n[e])
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Collapse = function(l) {
    var t = "collapse",
        u = "bs.collapse",
        e = "." + u,
        n = l.fn[t],
        i = {
            toggle: !0,
            parent: ""
        },
        r = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        c = {
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            CLICK_DATA_API: "click" + e + ".data-api"
        },
        f = "show",
        d = "collapse",
        h = "collapsing",
        p = "collapsed",
        o = "width",
        s = "height",
        g = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        a = function() {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = l.makeArray(l('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = l(g.DATA_TOGGLE), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = Util.getSelectorFromElement(i);
                    null !== o && 0 < l(o).filter(e).length && (this._selector = o, this._triggerArray.push(i))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = a.prototype;
            return e.toggle = function() {
                l(this._element).hasClass(f) ? this.hide() : this.show()
            }, e.show = function() {
                var e, t, n = this;
                if (!this._isTransitioning && !l(this._element).hasClass(f) && (this._parent && 0 === (e = l.makeArray(l(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (t = l(e).not(this._selector).data(u)) && t._isTransitioning))) {
                    var r = l.Event(c.SHOW);
                    if (l(this._element).trigger(r), !r.isDefaultPrevented()) {
                        e && (a._jQueryInterface.call(l(e).not(this._selector), "hide"), t || l(e).data(u, null));
                        var i = this._getDimension();
                        l(this._element).removeClass(d).addClass(h), (this._element.style[i] = 0) < this._triggerArray.length && l(this._triggerArray).removeClass(p).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (i[0].toUpperCase() + i.slice(1)),
                            s = Util.getTransitionDurationFromElement(this._element);
                        l(this._element).one(Util.TRANSITION_END, function() {
                            l(n._element).removeClass(h).addClass(d).addClass(f), n._element.style[i] = "", n.setTransitioning(!1), l(n._element).trigger(c.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[i] = this._element[o] + "px"
                    }
                }
            }, e.hide = function() {
                var e = this;
                if (!this._isTransitioning && l(this._element).hasClass(f)) {
                    var t = l.Event(c.HIDE);
                    if (l(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Util.reflow(this._element), l(this._element).addClass(h).removeClass(d).removeClass(f), 0 < this._triggerArray.length)
                            for (var r = 0; r < this._triggerArray.length; r++) {
                                var i = this._triggerArray[r],
                                    o = Util.getSelectorFromElement(i);
                                if (null !== o) l(o).hasClass(f) || l(i).addClass(p).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var s = Util.getTransitionDurationFromElement(this._element);
                        l(this._element).one(Util.TRANSITION_END, function() {
                            e.setTransitioning(!1), l(e._element).removeClass(h).addClass(d).trigger(c.HIDDEN)
                        }).emulateTransitionEnd(s)
                    }
                }
            }, e.setTransitioning = function(e) {
                this._isTransitioning = e
            }, e.dispose = function() {
                l.removeData(this._element, u), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(e) {
                return (e = _objectSpread({}, i, e)).toggle = Boolean(e.toggle), Util.typeCheckConfig(t, e, r), e
            }, e._getDimension = function() {
                return l(this._element).hasClass(o) ? o : s
            }, e._getParent = function() {
                var n = this,
                    e = null;
                Util.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = l(this._config.parent)[0];
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return l(e).find(t).each(function(e, t) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                }), e
            }, e._addAriaAndCollapsedClass = function(e, t) {
                if (e) {
                    var n = l(e).hasClass(f);
                    0 < t.length && l(t).toggleClass(p, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function(e) {
                var t = Util.getSelectorFromElement(e);
                return t ? l(t)[0] : null
            }, a._jQueryInterface = function(r) {
                return this.each(function() {
                    var e = l(this),
                        t = e.data(u),
                        n = _objectSpread({}, i, e.data(), "object" == typeof r && r ? r : {});
                    if (!t && n.toggle && /show|hide/.test(r) && (n.toggle = !1), t || (t = new a(this, n), e.data(u, t)), "string" == typeof r) {
                        if (void 0 === t[r]) throw new TypeError('No method named "' + r + '"');
                        t[r]()
                    }
                })
            }, _createClass(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return i
                }
            }]), a
        }();
    return l(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = l(this),
            t = Util.getSelectorFromElement(this);
        l(t).each(function() {
            var e = l(this),
                t = e.data(u) ? "toggle" : n.data();
            a._jQueryInterface.call(e, t)
        })
    }), l.fn[t] = a._jQueryInterface, l.fn[t].Constructor = a, l.fn[t].noConflict = function() {
        return l.fn[t] = n, a._jQueryInterface
    }, a
}($);

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(e) {
            _defineProperty(t, e, n[e])
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Dropdown = function(u) {
    var t = "dropdown",
        c = "bs.dropdown",
        n = "." + c,
        e = ".data-api",
        r = u.fn[t],
        s = new RegExp("38|40|27"),
        f = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK: "click" + n,
            CLICK_DATA_API: "click" + n + e,
            KEYDOWN_DATA_API: "keydown" + n + e,
            KEYUP_DATA_API: "keyup" + n + e
        },
        a = "disabled",
        d = "show",
        i = "dropup",
        o = "dropright",
        h = "dropleft",
        p = "dropdown-menu-right",
        g = "position-static",
        m = '[data-toggle="dropdown"]',
        l = ".dropdown form",
        v = ".dropdown-menu",
        y = ".navbar-nav",
        b = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        _ = "top-start",
        w = "top-end",
        T = "bottom-start",
        E = "bottom-end",
        C = "right-start",
        x = "left-start",
        S = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        D = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        A = function() {
            function l(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = l.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !u(this._element).hasClass(a)) {
                    var e = l._getParentFromElement(this._element),
                        t = u(this._menu).hasClass(d);
                    if (l._clearMenus(), !t) {
                        var n = {
                                relatedTarget: this._element
                            },
                            r = u.Event(f.SHOW, n);
                        if (u(e).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof Popper) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var i = this._element;
                                "parent" === this._config.reference ? i = e : Util.isElement(this._config.reference) && (i = this._config.reference, void 0 !== this._config.reference.jquery && (i = this._config.reference[0])), "scrollParent" !== this._config.boundary && u(e).addClass(g), this._popper = new Popper(i, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === u(e).closest(y).length && u(document.body).children().on("mouseover", null, u.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), u(this._menu).toggleClass(d), u(e).toggleClass(d).trigger(u.Event(f.SHOWN, n))
                        }
                    }
                }
            }, e.dispose = function() {
                u.removeData(this._element, c), u(this._element).off(n), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function() {
                var t = this;
                u(this._element).on(f.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function(e) {
                return e = _objectSpread({}, this.constructor.Default, u(this._element).data(), e), Util.typeCheckConfig(t, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = l._getParentFromElement(this._element);
                    this._menu = u(e).find(v)[0]
                }
                return this._menu
            }, e._getPlacement = function() {
                var e = u(this._element).parent(),
                    t = T;
                return e.hasClass(i) ? (t = _, u(this._menu).hasClass(p) && (t = w)) : e.hasClass(o) ? t = C : e.hasClass(h) ? t = x : u(this._menu).hasClass(p) && (t = E), t
            }, e._detectNavbar = function() {
                return 0 < u(this._element).closest(".navbar").length
            }, e._getPopperConfig = function() {
                var t = this,
                    e = {};
                "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = _objectSpread({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, l._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = u(this).data(c);
                    if (e || (e = new l(this, "object" == typeof t ? t : null), u(this).data(c, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, l._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = u.makeArray(u(m)), n = 0; n < t.length; n++) {
                        var r = l._getParentFromElement(t[n]),
                            i = u(t[n]).data(c),
                            o = {
                                relatedTarget: t[n]
                            };
                        if (i) {
                            var s = i._menu;
                            if (u(r).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && u.contains(r, e.target))) {
                                var a = u.Event(f.HIDE, o);
                                u(r).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && u(document.body).children().off("mouseover", null, u.noop), t[n].setAttribute("aria-expanded", "false"), u(s).removeClass(d), u(r).removeClass(d).trigger(u.Event(f.HIDDEN, o)))
                            }
                        }
                    }
            }, l._getParentFromElement = function(e) {
                var t, n = Util.getSelectorFromElement(e);
                return n && (t = u(n)[0]), t || e.parentNode
            }, l._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || u(e.target).closest(v).length)) : s.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !u(this).hasClass(a))) {
                    var t = l._getParentFromElement(this),
                        n = u(t).hasClass(d);
                    if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                        var r = u(t).find(b).get();
                        if (0 !== r.length) {
                            var i = r.indexOf(e.target);
                            38 === e.which && 0 < i && i--, 40 === e.which && i < r.length - 1 && i++, i < 0 && (i = 0), r[i].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = u(t).find(m)[0];
                            u(o).trigger("focus")
                        }
                        u(this).trigger("click")
                    }
                }
            }, _createClass(l, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return S
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return D
                }
            }]), l
        }();
    return u(document).on(f.KEYDOWN_DATA_API, m, A._dataApiKeydownHandler).on(f.KEYDOWN_DATA_API, v, A._dataApiKeydownHandler).on(f.CLICK_DATA_API + " " + f.KEYUP_DATA_API, A._clearMenus).on(f.CLICK_DATA_API, m, function(e) {
        e.preventDefault(), e.stopPropagation(), A._jQueryInterface.call(u(this), "toggle")
    }).on(f.CLICK_DATA_API, l, function(e) {
        e.stopPropagation()
    }), u.fn[t] = A._jQueryInterface, u.fn[t].Constructor = A, u.fn[t].noConflict = function() {
        return u.fn[t] = r, A._jQueryInterface
    }, A
}($, Popper);

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(e) {
            _defineProperty(t, e, n[e])
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Modal = function(s) {
    var t = "modal",
        a = "bs.modal",
        n = "." + a,
        e = s.fn[t],
        o = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        r = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        l = {
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
        },
        u = "modal-scrollbar-measure",
        c = "modal-backdrop",
        f = "modal-open",
        d = "fade",
        h = "show",
        p = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        },
        g = function() {
            function i(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = s(e).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var e = i.prototype;
            return e.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function(e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    s(this._element).hasClass(d) && (this._isTransitioning = !0);
                    var n = s.Event(l.SHOW, {
                        relatedTarget: e
                    });
                    s(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), s(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), s(this._element).on(l.CLICK_DISMISS, p.DATA_DISMISS, function(e) {
                        return t.hide(e)
                    }), s(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                        s(t._element).one(l.MOUSEUP_DISMISS, function(e) {
                            s(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, e.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = s.Event(l.HIDE);
                    if (s(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = s(this._element).hasClass(d);
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), s(document).off(l.FOCUSIN), s(this._element).removeClass(h), s(this._element).off(l.CLICK_DISMISS), s(this._dialog).off(l.MOUSEDOWN_DISMISS), r) {
                            var i = Util.getTransitionDurationFromElement(this._element);
                            s(this._element).one(Util.TRANSITION_END, function(e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(i)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                s.removeData(this._element, a), s(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(e) {
                return e = _objectSpread({}, o, e), Util.typeCheckConfig(t, e, r), e
            }, e._showElement = function(e) {
                var t = this,
                    n = s(this._element).hasClass(d);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Util.reflow(this._element), s(this._element).addClass(h), this._config.focus && this._enforceFocus();
                var r = s.Event(l.SHOWN, {
                        relatedTarget: e
                    }),
                    i = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, s(t._element).trigger(r)
                    };
                if (n) {
                    var o = Util.getTransitionDurationFromElement(this._element);
                    s(this._dialog).one(Util.TRANSITION_END, i).emulateTransitionEnd(o)
                } else i()
            }, e._enforceFocus = function() {
                var t = this;
                s(document).off(l.FOCUSIN).on(l.FOCUSIN, function(e) {
                    document !== e.target && t._element !== e.target && 0 === s(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? s(this._element).on(l.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || s(this._element).off(l.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? s(window).on(l.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : s(window).off(l.RESIZE)
            }, e._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                    s(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), s(e._element).trigger(l.HIDDEN)
                })
            }, e._removeBackdrop = function() {
                this._backdrop && (s(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(e) {
                var t = this,
                    n = s(this._element).hasClass(d) ? d : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = c, n && s(this._backdrop).addClass(n), s(this._backdrop).appendTo(document.body), s(this._element).on(l.CLICK_DISMISS, function(e) {
                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                    }), n && Util.reflow(this._backdrop), s(this._backdrop).addClass(h), !e) return;
                    if (!n) return void e();
                    var r = Util.getTransitionDurationFromElement(this._backdrop);
                    s(this._backdrop).one(Util.TRANSITION_END, e).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    s(this._backdrop).removeClass(h);
                    var i = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (s(this._element).hasClass(d)) {
                        var o = Util.getTransitionDurationFromElement(this._backdrop);
                        s(this._backdrop).one(Util.TRANSITION_END, i).emulateTransitionEnd(o)
                    } else i()
                } else e && e()
            }, e._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var i = this;
                if (this._isBodyOverflowing) {
                    s(p.FIXED_CONTENT).each(function(e, t) {
                        var n = s(t)[0].style.paddingRight,
                            r = s(t).css("padding-right");
                        s(t).data("padding-right", n).css("padding-right", parseFloat(r) + i._scrollbarWidth + "px")
                    }), s(p.STICKY_CONTENT).each(function(e, t) {
                        var n = s(t)[0].style.marginRight,
                            r = s(t).css("margin-right");
                        s(t).data("margin-right", n).css("margin-right", parseFloat(r) - i._scrollbarWidth + "px")
                    }), s(p.NAVBAR_TOGGLER).each(function(e, t) {
                        var n = s(t)[0].style.marginRight,
                            r = s(t).css("margin-right");
                        s(t).data("margin-right", n).css("margin-right", parseFloat(r) + i._scrollbarWidth + "px")
                    });
                    var e = document.body.style.paddingRight,
                        t = s(document.body).css("padding-right");
                    s(document.body).data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
                }
            }, e._resetScrollbar = function() {
                s(p.FIXED_CONTENT).each(function(e, t) {
                    var n = s(t).data("padding-right");
                    void 0 !== n && s(t).css("padding-right", n).removeData("padding-right")
                }), s(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function(e, t) {
                    var n = s(t).data("margin-right");
                    void 0 !== n && s(t).css("margin-right", n).removeData("margin-right")
                });
                var e = s(document.body).data("padding-right");
                void 0 !== e && s(document.body).css("padding-right", e).removeData("padding-right")
            }, e._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = u, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, i._jQueryInterface = function(n, r) {
                return this.each(function() {
                    var e = s(this).data(a),
                        t = _objectSpread({}, o, s(this).data(), "object" == typeof n && n ? n : {});
                    if (e || (e = new i(this, t), s(this).data(a, e)), "string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](r)
                    } else t.show && e.show(r)
                })
            }, _createClass(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return o
                }
            }]), i
        }();
    return s(document).on(l.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
        var t, n = this,
            r = Util.getSelectorFromElement(this);
        r && (t = s(r)[0]);
        var i = s(t).data(a) ? "toggle" : _objectSpread({}, s(t).data(), s(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = s(t).one(l.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(l.HIDDEN, function() {
                s(n).is(":visible") && n.focus()
            })
        });
        g._jQueryInterface.call(s(t), i, this)
    }), s.fn[t] = g._jQueryInterface, s.fn[t].Constructor = g, s.fn[t].noConflict = function() {
        return s.fn[t] = e, g._jQueryInterface
    }, g
}($);

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(e) {
            _defineProperty(t, e, n[e])
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var ScrollSpy = function(s) {
    var r = "scrollspy",
        i = "bs.scrollspy",
        t = "." + i,
        e = s.fn[r],
        o = {
            offset: 10,
            method: "auto",
            target: ""
        },
        a = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        l = {
            ACTIVATE: "activate" + t,
            SCROLL: "scroll" + t,
            LOAD_DATA_API: "load" + t + ".data-api"
        },
        u = "dropdown-item",
        c = "active",
        f = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        d = "offset",
        h = "position",
        p = function() {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, s(this._scrollElement).on(l.SCROLL, function(e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? d : h,
                    i = "auto" === this._config.method ? e : this._config.method,
                    o = i === h ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), s.makeArray(s(this._selector)).map(function(e) {
                    var t, n = Util.getSelectorFromElement(e);
                    if (n && (t = s(n)[0]), t) {
                        var r = t.getBoundingClientRect();
                        if (r.width || r.height) return [s(t)[i]().top + o, n]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function() {
                s.removeData(this._element, i), s(this._scrollElement).off(t), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(e) {
                if ("string" != typeof(e = _objectSpread({}, o, "object" == typeof e && e ? e : {})).target) {
                    var t = s(e.target).attr("id");
                    t || (t = Util.getUID(r), s(e.target).attr("id", t)), e.target = "#" + t
                }
                return Util.typeCheckConfig(r, e, a), e
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var r = this._targets[this._targets.length - 1];
                    this._activeTarget !== r && this._activate(r)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var i = this._offsets.length; i--;) {
                        this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                    }
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",");
                e = e.map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var n = s(e.join(","));
                n.hasClass(u) ? (n.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c), n.addClass(c)) : (n.addClass(c), n.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(c), n.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(c)), s(this._scrollElement).trigger(l.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function() {
                s(this._selector).filter(f.ACTIVE).removeClass(c)
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = s(this).data(i);
                    if (e || (e = new n(this, "object" == typeof t && t), s(this).data(i, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, _createClass(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return o
                }
            }]), n
        }();
    return s(window).on(l.LOAD_DATA_API, function() {
        for (var e = s.makeArray(s(f.DATA_SPY)), t = e.length; t--;) {
            var n = s(e[t]);
            p._jQueryInterface.call(n, n.data())
        }
    }), s.fn[r] = p._jQueryInterface, s.fn[r].Constructor = p, s.fn[r].noConflict = function() {
        return s.fn[r] = e, p._jQueryInterface
    }, p
}($);

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Tab = function(u) {
    var i = "bs.tab",
        e = "." + i,
        t = u.fn.tab,
        c = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            CLICK_DATA_API: "click" + e + ".data-api"
        },
        o = "dropdown-menu",
        f = "active",
        d = "disabled",
        l = "fade",
        s = "show",
        a = ".dropdown",
        h = ".nav, .list-group",
        p = ".active",
        g = "> li > .active",
        n = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        m = ".dropdown-toggle",
        v = "> .dropdown-menu .active",
        r = function() {
            function r(e) {
                this._element = e
            }
            var e = r.prototype;
            return e.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && u(this._element).hasClass(f) || u(this._element).hasClass(d))) {
                    var e, r, t = u(this._element).closest(h)[0],
                        i = Util.getSelectorFromElement(this._element);
                    if (t) {
                        var o = "UL" === t.nodeName ? g : p;
                        r = (r = u.makeArray(u(t).find(o)))[r.length - 1]
                    }
                    var s = u.Event(c.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = u.Event(c.SHOW, {
                            relatedTarget: r
                        });
                    if (r && u(r).trigger(s), u(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        i && (e = u(i)[0]), this._activate(this._element, t);
                        var l = function() {
                            var e = u.Event(c.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                t = u.Event(c.SHOWN, {
                                    relatedTarget: r
                                });
                            u(r).trigger(e), u(n._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function() {
                u.removeData(this._element, i), this._element = null
            }, e._activate = function(e, t, n) {
                var r = this,
                    i = ("UL" === t.nodeName ? u(t).find(g) : u(t).children(p))[0],
                    o = n && i && u(i).hasClass(l),
                    s = function() {
                        return r._transitionComplete(e, i, n)
                    };
                if (i && o) {
                    var a = Util.getTransitionDurationFromElement(i);
                    u(i).one(Util.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, e._transitionComplete = function(e, t, n) {
                if (t) {
                    u(t).removeClass(s + " " + f);
                    var r = u(t.parentNode).find(v)[0];
                    r && u(r).removeClass(f), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (u(e).addClass(f), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Util.reflow(e), u(e).addClass(s), e.parentNode && u(e.parentNode).hasClass(o)) {
                    var i = u(e).closest(a)[0];
                    i && u(i).find(m).addClass(f), e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, r._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = u(this),
                        t = e.data(i);
                    if (t || (t = new r(this), e.data(i, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, _createClass(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }]), r
        }();
    return u(document).on(c.CLICK_DATA_API, n, function(e) {
        e.preventDefault(), r._jQueryInterface.call(u(this), "show")
    }), u.fn.tab = r._jQueryInterface, u.fn.tab.Constructor = r, u.fn.tab.noConflict = function() {
        return u.fn.tab = t, r._jQueryInterface
    }, r
}($);

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(e) {
            _defineProperty(t, e, n[e])
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var Tooltip = function(c) {
    var t = "tooltip",
        i = "bs.tooltip",
        n = "." + i,
        e = c.fn[t],
        o = "bs-tooltip",
        s = new RegExp("(^|\\s)" + o + "\\S+", "g"),
        a = {
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
        },
        l = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        u = {
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
        },
        f = "show",
        d = "out",
        h = {
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
        },
        p = "fade",
        g = "show",
        m = ".tooltip-inner",
        v = ".arrow",
        y = "hover",
        b = "focus",
        _ = "click",
        w = "manual",
        r = function() {
            function r(e, t) {
                if ("undefined" == typeof Popper) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = r.prototype;
            return e.enable = function() {
                this._isEnabled = !0
            }, e.disable = function() {
                this._isEnabled = !1
            }, e.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = c(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), c(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (c(this.getTipElement()).hasClass(g)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() {
                clearTimeout(this._timeout), c.removeData(this.element, this.constructor.DATA_KEY), c(this.element).off(this.constructor.EVENT_KEY), c(this.element).closest(".modal").off("hide.bs.modal"), this.tip && c(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function() {
                var t = this;
                if ("none" === c(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = c.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    c(this.element).trigger(e);
                    var n = c.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !n) return;
                    var r = this.getTipElement(),
                        i = Util.getUID(this.constructor.NAME);
                    r.setAttribute("id", i), this.element.setAttribute("aria-describedby", i), this.setContent(), this.config.animation && c(r).addClass(p);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : c(this.config.container);
                    c(r).data(this.constructor.DATA_KEY, this), c.contains(this.element.ownerDocument.documentElement, this.tip) || c(r).appendTo(a), c(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Popper(this.element, r, {
                        placement: s,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: v
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), c(r).addClass(g), "ontouchstart" in document.documentElement && c(document.body).children().on("mouseover", null, c.noop);
                    var l = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, c(t.element).trigger(t.constructor.Event.SHOWN), e === d && t._leave(null, t)
                    };
                    if (c(this.tip).hasClass(p)) {
                        var u = Util.getTransitionDurationFromElement(this.tip);
                        c(this.tip).one(Util.TRANSITION_END, l).emulateTransitionEnd(u)
                    } else l()
                }
            }, e.hide = function(e) {
                var t = this,
                    n = this.getTipElement(),
                    r = c.Event(this.constructor.Event.HIDE),
                    i = function() {
                        t._hoverState !== f && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), c(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (c(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (c(n).removeClass(g), "ontouchstart" in document.documentElement && c(document.body).children().off("mouseover", null, c.noop), this._activeTrigger[_] = !1, this._activeTrigger[b] = !1, this._activeTrigger[y] = !1, c(this.tip).hasClass(p)) {
                        var o = Util.getTransitionDurationFromElement(n);
                        c(n).one(Util.TRANSITION_END, i).emulateTransitionEnd(o)
                    } else i();
                    this._hoverState = ""
                }
            }, e.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function() {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function(e) {
                c(this.getTipElement()).addClass(o + "-" + e)
            }, e.getTipElement = function() {
                return this.tip = this.tip || c(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var e = c(this.getTipElement());
                this.setElementContent(e.find(m), this.getTitle()), e.removeClass(p + " " + g)
            }, e.setElementContent = function(e, t) {
                var n = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? n ? c(t).parent().is(e) || e.empty().append(t) : e.text(c(t).text()) : e[n ? "html" : "text"](t)
            }, e.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, e._getAttachment = function(e) {
                return l[e.toUpperCase()]
            }, e._setListeners = function() {
                var r = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) c(r.element).on(r.constructor.Event.CLICK, r.config.selector, function(e) {
                        return r.toggle(e)
                    });
                    else if (e !== w) {
                        var t = e === y ? r.constructor.Event.MOUSEENTER : r.constructor.Event.FOCUSIN,
                            n = e === y ? r.constructor.Event.MOUSELEAVE : r.constructor.Event.FOCUSOUT;
                        c(r.element).on(t, r.config.selector, function(e) {
                            return r._enter(e)
                        }).on(n, r.config.selector, function(e) {
                            return r._leave(e)
                        })
                    }
                    c(r.element).closest(".modal").on("hide.bs.modal", function() {
                        return r.hide()
                    })
                }), this.config.selector ? this.config = _objectSpread({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || c(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), c(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? b : y] = !0), c(t.getTipElement()).hasClass(g) || t._hoverState === f ? t._hoverState = f : (clearTimeout(t._timeout), t._hoverState = f, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    t._hoverState === f && t.show()
                }, t.config.delay.show) : t.show())
            }, e._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || c(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), c(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? b : y] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = d, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    t._hoverState === d && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function(e) {
                return "number" == typeof(e = _objectSpread({}, this.constructor.Default, c(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Util.typeCheckConfig(t, e, this.constructor.DefaultType), e
            }, e._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function() {
                var e = c(this.getTipElement()),
                    t = e.attr("class").match(s);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function(e) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (c(e).removeClass(p), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, r._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = c(this).data(i),
                        t = "object" == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new r(this, t), c(this).data(i, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, _createClass(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return u
                }
            }, {
                key: "NAME",
                get: function() {
                    return t
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "Event",
                get: function() {
                    return h
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return n
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return a
                }
            }]), r
        }();
    return c.fn[t] = r._jQueryInterface, c.fn[t].Constructor = r, c.fn[t].noConflict = function() {
        return c.fn[t] = e, r._jQueryInterface
    }, r
}($, Popper);

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
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
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(e) {
            _defineProperty(t, e, n[e])
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var Popover = function(i) {
    var n = "popover",
        o = "bs.popover",
        s = "." + o,
        e = i.fn[n],
        a = "bs-popover",
        l = new RegExp("(^|\\s)" + a + "\\S+", "g"),
        u = _objectSpread({}, Tooltip.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        c = _objectSpread({}, Tooltip.DefaultType, {
            content: "(string|element|function)"
        }),
        f = "fade",
        d = "show",
        h = ".popover-header",
        p = ".popover-body",
        g = {
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
        },
        t = function(e) {
            function r() {
                return e.apply(this, arguments) || this
            }
            _inheritsLoose(r, e);
            var t = r.prototype;
            return t.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, t.addAttachmentClass = function(e) {
                i(this.getTipElement()).addClass(a + "-" + e)
            }, t.getTipElement = function() {
                return this.tip = this.tip || i(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var e = i(this.getTipElement());
                this.setElementContent(e.find(h), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(p), t), e.removeClass(f + " " + d)
            }, t._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, t._cleanTipClass = function() {
                var e = i(this.getTipElement()),
                    t = e.attr("class").match(l);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, r._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = i(this).data(o),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new r(this, t), i(this).data(o, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, _createClass(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return u
                }
            }, {
                key: "NAME",
                get: function() {
                    return n
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return o
                }
            }, {
                key: "Event",
                get: function() {
                    return g
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return s
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return c
                }
            }]), r
        }(Tooltip);
    return i.fn[n] = t._jQueryInterface, i.fn[n].Constructor = t, i.fn[n].noConflict = function() {
        return i.fn[n] = e, t._jQueryInterface
    }, t
}($);

function initMap() {
    var e = {
            lat: 47.212325,
            lng: 38.933663
        },
        t = new google.maps.Map(document.getElementById("map"), {
            center: e,
            zoom: 15,
            styles: [{
                elementType: "geometry",
                stylers: [{
                    color: "#465fbe"
                }]
            }, {
                elementType: "geometry.fill",
                stylers: [{
                    weight: 1
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#ffffff"
                }]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#1a3646"
                }]
            }, {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#2a43a2"
                }]
            }, {
                featureType: "administrative.province",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#2a43a2"
                }]
            }, {
                featureType: "landscape.man_made",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#334e87"
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#283d6a"
                }]
            }, {
                featureType: "poi",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#1d2c4d"
                }]
            }, {
                featureType: "poi.attraction",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "poi.business",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "poi.government",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "poi.medical",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "poi.place_of_worship",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "poi.school",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "poi.sports_complex",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    color: "#304a7d"
                }]
            }, {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#98a5be"
                }]
            }, {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#1d2c4d"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#2a43a2"
                }]
            }, {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#b0d5ce"
                }]
            }, {
                featureType: "road.highway",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#023e58"
                }]
            }, {
                featureType: "transit",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#98a5be"
                }]
            }, {
                featureType: "transit",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#1d2c4d"
                }]
            }, {
                featureType: "transit.line",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#283d6a"
                }]
            }, {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{
                    color: "#7790ef"
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#2a43a2"
                }]
            }, {
                featureType: "water",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#7790ef"
                }, {
                    weight: 8
                }]
            }, {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#ffffff"
                }]
            }]
        });
    marker = new google.maps.Marker({
        position: e,
        map: t,
        icon: "img/pin.png"
    }), infowindow = new google.maps.InfoWindow({
        content: '<p style="color: #333;">Мы тут!</p>'
    }), marker.addListener("click", function() {
        infowindow.open(t, marker)
    }), marker.addListener("click", function() {
        marker.setAnimation(google.maps.Animation.DROP)
    })
}(function() {
    var r, t, n, i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        s = [].indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var n, r;
            for (n in e) null != (r = e[n]) && (t[n] = r);
            return t
        }, e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }, e
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function e() {
            this.keys = [], this.values = []
        }
        return e.prototype.get = function(e) {
            var t, n, r, i;
            for (t = n = 0, r = (i = this.keys).length; n < r; t = ++n)
                if (i[t] === e) return this.values[t]
        }, e.prototype.set = function(e, t) {
            var n, r, i, o;
            for (n = r = 0, i = (o = this.keys).length; r < i; n = ++r)
                if (o[n] === e) return void(this.values[n] = t);
            return this.keys.push(e), this.values.push(t)
        }, e
    }()), r = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (r = function() {
        function e() {
            console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e
    }()), this.WOW = function() {
        function e(e) {
            null == e && (e = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animatad",
            offset: 0,
            mobile: !0,
            live: !0
        }, e.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var i, e, t, n, s;
            if (this.stopped = !1, this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.all = function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.boxes).length; e < t; e++) i = n[e], r.push(i);
                return r
            }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else {
                    for (e = 0, t = (n = this.boxes).length; e < t; e++) i = n[e], this.applyStyle(i, !0);
                    window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                } return this.config.live ? new r((s = this, function(e) {
                var i, o, t, n, r;
                for (r = [], t = 0, n = e.length; t < n; t++) o = e[t], r.push(function() {
                    var e, t, n, r;
                    for (r = [], e = 0, t = (n = o.addedNodes || []).length; e < t; e++) i = n[e], r.push(this.doSync(i));
                    return r
                }.call(s));
                return r
            })).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function() {
            return r.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(e) {
            var t, n, r, i, o;
            if (!this.stopped) {
                for (e || (e = this.element), o = [], n = 0, r = (i = (e = e.parentNode || e).getElementsByClassName(this.config.boxClass)).length; n < r; n++) t = i[n], s.call(this.all, t) < 0 ? (this.applyStyle(t, !0), this.boxes.push(t), this.all.push(t), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, e.prototype.show = function(e) {
            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass
        }, e.prototype.applyStyle = function(e, t) {
            var n, r, i, o;
            return r = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), i = e.getAttribute("data-wow-iteration"), this.animate((o = this, function() {
                return o.customStyle(e, t, r, n, i)
            }))
        }, e.prototype.animate = "requestAnimationFrame" in window ? function(e) {
            return window.requestAnimationFrame(e)
        } : function(e) {
            return e()
        }, e.prototype.resetStyle = function() {
            var e, t, n, r, i;
            for (i = [], t = 0, n = (r = this.boxes).length; t < n; t++) e = r[t], i.push(e.setAttribute("style", "visibility: visible;"));
            return i
        }, e.prototype.customStyle = function(e, t, n, r, i) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                animationDuration: n
            }), r && this.vendorSet(e.style, {
                animationDelay: r
            }), i && this.vendorSet(e.style, {
                animationIterationCount: i
            }), this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }), e
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(i, e) {
            var o, s, a, t;
            for (o in t = [], e) s = e[o], i["" + o] = s, t.push(function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.vendors).length; e < t; e++) a = n[e], r.push(i["" + a + o.charAt(0).toUpperCase() + o.substr(1)] = s);
                return r
            }.call(this));
            return t
        }, e.prototype.vendorCSS = function(e, t) {
            var n, r, i, o, s, a;
            for (n = (r = window.getComputedStyle(e)).getPropertyCSSValue(t), o = 0, s = (a = this.vendors).length; o < s; o++) i = a[o], n = n || r.getPropertyCSSValue("-" + i + "-" + t);
            return n
        }, e.prototype.animationName = function(t) {
            var n;
            try {
                n = this.vendorCSS(t, "animation-name").cssText
            } catch (e) {
                n = window.getComputedStyle(t).getPropertyValue("animation-name")
            }
            return "none" === n ? "" : n
        }, e.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }, e.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var i;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.boxes).length; e < t; e++)(i = n[e]) && (this.isVisible(i) ? this.show(i) : r.push(i));
                return r
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
            return t
        }, e.prototype.isVisible = function(e) {
            var t, n, r, i, o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset, i = (o = window.pageYOffset) + this.element.clientHeight - n, t = (r = this.offsetTop(e)) + e.clientHeight, r <= i && o <= t
        }, e.prototype.util = function() {
            return this._util || (this._util = new t)
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this), $(document).ready(function() {

    new WOW().init();

    var loader = $('#preloader');
    setTimeout(function () {
        if (!loader.hasClass('ok')) {
            loader.addClass('ok');
        }
    }, 1500);

    var body =$('body'),
        menu = $('.menu'),
        mobileMenu = $('.mobile-menu'),
        menuButton = $('#menu');

    menu.on('click', function () {
        body.toggleClass('open_menu');
        mobileMenu.toggleClass('show');
        menuButton.toggleClass('close');
    });

    $('.items-col a').mouseenter(function () {
        $(this).parents('.contact-items').find('.rotate-180').addClass('rotate-hover');
    });

    $('.items-col a').mouseleave(function () {
        $(this).parents('.contact-items').find('.rotate-180').removeClass('rotate-hover');
    });


    if($('.content').hasClass('section-slider')) {

        var arrowLeft = $('.nav-left'),
            arrowRight = $('.nav-right'),
            currentSlide = 1,
            loadSlide = $('.footer_wrapper'),
            elements = $('.big-slider-items a'),
            counter = 1;

        function sliderBar() {
            for (var i = 0; i < elements.length; ++i) {
                loadSlide.removeClass('show-anim');
            }
            if (counter > elements.length - 1) {
                counter = 0;
            }
            elements[counter].click();
            loadSlide.addClass('show-anim');
            counter++;
        }

        function reset() {
            $('.section_title h1').hide();
            $('.section > span').hide();
            $('.slider-img').hide();
            $('.section-slider').removeClass('first-slider');
            $('.section-slider').removeClass('second-slider');
            $('.section-slider').removeClass('third-slider');
        }

        function toLeft() {
            reset();
            if (currentSlide === 1) {
                currentSlide = 3;
                $('#third-slider').click();
            } else if (currentSlide === 2) {
                currentSlide = 1;
                $('#first-slider').click();
            } else if (currentSlide === 3) {
                currentSlide = 2;
                $('#second-slider').click();
            }
        }

        function toRight() {
            reset();
            if (currentSlide === 1) {
                $('#second-slider').click();
                currentSlide = 2;
            } else if (currentSlide === 2) {
                $('#third-slider').click();
                currentSlide = 3;
            } else if (currentSlide === 3) {
                $('#first-slider').click();
                currentSlide = 1;
            }
        }

        arrowLeft.on('click', function () {
            toLeft();
        });

        arrowRight.on('click', function () {
            toRight();
        });


        $('.big-slider-items').on('click', 'a', function () {
            $('.big-slider-items a').removeClass('active');
            $(this).addClass('active');

            if($('#first-slider').hasClass('active')) {
                if(!$('.section-slider').hasClass('first-slider')) {
                    reset();
                    $('.section-slider').addClass('first-slider');
                    $('.first-slider').show();
                    $('meta[name="theme-color"]').attr('content', '#2a43a2');
                    currentSlide = 1;
                }
            } else if ($('#second-slider').hasClass('active')) {
                if(!$('.section-slider').hasClass('second-slider')) {
                    reset();
                    $('.section-slider').addClass('second-slider');
                    $('.second-slider').show();
                    $('meta[name="theme-color"]').attr('content', '#BCB76B');

                    currentSlide = 2;
                }
            } else if ($('#third-slider').hasClass('active')) {
                if(!$('.section-slider').hasClass('third-slider')) {
                    reset();
                    $('.section-slider').addClass('third-slider');
                    $('.third-slider').show();
                    $('meta[name="theme-color"]').attr('content', '#EA8C55');

                    currentSlide = 3;
                }
            }
        });


        reset();
        $('.first-slider').show();
        loadSlide.addClass('show-anim');
        $('.section-slider').addClass('first-slider');


        var switchInterval = setInterval(sliderBar, 10000);

        $('.big-slider-nav').mouseenter(function() {
            clearInterval(switchInterval);
            loadSlide.removeClass('show-anim');
        });
        $('.big-slider-nav').mouseleave(function() {
            loadSlide.addClass('show-anim');
            switchInterval = setInterval(sliderBar, 10000);
        });
    }
});
//# sourceMappingURL=main.js.map