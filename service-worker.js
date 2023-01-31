(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // window-shim.js
  var fakeWindow;
  var init_window_shim = __esm({
    "window-shim.js"() {
      fakeWindow = {};
      if (typeof window !== "undefined") {
        fakeWindow = window;
      }
      fakeWindow.criRequest = async (options, callback) => {
        const { host, port, path } = options;
        const url = `http://${host}:${port}${path}`;
        console.log(url);
        try {
          const res = await fetch({
            url,
            method: "get"
          });
          const responseText = await res.text();
          callback(null, responseText);
        } catch (e) {
          callback(e, null);
        }
      };
    }
  });

  // node_modules/chrome-remote-interface/chrome-remote-interface.js
  var require_chrome_remote_interface = __commonJS({
    "node_modules/chrome-remote-interface/chrome-remote-interface.js"(exports, module) {
      init_window_shim();
      (() => {
        var e = { 6010: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4155);
          const i = r2(7187), o = r2(4782), a = r2(7996), s = r2(8855);
          o.setDefaultResultOrder && o.setDefaultResultOrder("ipv4first"), e2.exports = function(e3, t3) {
            "function" == typeof e3 && (t3 = e3, e3 = void 0);
            const r3 = new i();
            return "function" == typeof t3 ? (n2.nextTick(() => {
              new s(e3, r3);
            }), r3.once("connect", t3)) : new Promise((t4, n3) => {
              r3.once("connect", t4), r3.once("error", n3), new s(e3, r3);
            });
          }, e2.exports.Protocol = a.Protocol, e2.exports.List = a.List, e2.exports.New = a.New, e2.exports.Activate = a.Activate, e2.exports.Close = a.Close, e2.exports.Version = a.Version;
        }, 7249: (e2) => {
          "use strict";
          function t2(e3, t3, r2) {
            e3.category = t3, Object.keys(r2).forEach((n2) => {
              "name" !== n2 && (e3[n2] = "type" === t3 && "properties" === n2 || "parameters" === n2 ? function(e4) {
                const t4 = {};
                return e4.forEach((e5) => {
                  const r3 = e5.name;
                  delete e5.name, t4[r3] = e5;
                }), t4;
              }(r2[n2]) : r2[n2]);
            });
          }
          e2.exports.prepare = function(e3, r2) {
            e3.protocol = r2, r2.domains.forEach((r3) => {
              const n2 = r3.domain;
              e3[n2] = {}, (r3.commands || []).forEach((r4) => {
                !function(e4, r5, n3) {
                  const i = `${r5}.${n3.name}`, o = (t3, r6, n4) => e4.send(i, t3, r6, n4);
                  t2(o, "command", n3), e4[i] = e4[r5][n3.name] = o;
                }(e3, n2, r4);
              }), (r3.events || []).forEach((r4) => {
                !function(e4, r5, n3) {
                  const i = `${r5}.${n3.name}`, o = (t3, r6) => {
                    "function" == typeof t3 && (r6 = t3, t3 = void 0);
                    const n4 = t3 ? `${i}.${t3}` : i;
                    return "function" == typeof r6 ? (e4.on(n4, r6), () => e4.removeListener(n4, r6)) : new Promise((t4, r7) => {
                      e4.once(n4, t4);
                    });
                  };
                  t2(o, "event", n3), e4[i] = e4[r5][n3.name] = o;
                }(e3, n2, r4);
              }), (r3.types || []).forEach((r4) => {
                !function(e4, r5, n3) {
                  const i = `${r5}.${n3.id}`, o = {};
                  t2(o, "type", n3), e4[i] = e4[r5][n3.id] = o;
                }(e3, n2, r4);
              }), e3[n2].on = (t3, r4) => e3[n2][t3](r4);
            });
          };
        }, 8855: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4155);
          const i = r2(7187), o = r2(1588), a = r2(8575).WU, s = r2(8575).Qc, p = r2(5529), c = r2(7249), d = r2(5372), l = r2(7996);
          class u extends Error {
            constructor(e3, t3) {
              let { message: r3 } = t3;
              t3.data && (r3 += ` (${t3.data})`), super(r3), this.request = e3, this.response = t3;
            }
          }
          e2.exports = class extends i {
            constructor(e3, t3) {
              super();
              e3 = e3 || {}, this.host = e3.host || d.HOST, this.port = e3.port || d.PORT, this.secure = !!e3.secure, this.useHostName = !!e3.useHostName, this.alterPath = e3.alterPath || ((e4) => e4), this.protocol = e3.protocol, this.local = !!e3.local, this.target = e3.target || ((e4) => {
                let t4, r3 = e4.find((e5) => !!e5.webSocketDebuggerUrl && (t4 = t4 || e5, "page" === e5.type));
                if (r3 = r3 || t4, r3)
                  return r3;
                throw new Error("No inspectable targets");
              }), this._notifier = t3, this._callbacks = {}, this._nextCommandId = 1, this.webSocketUrl = void 0, this._start();
            }
            inspect(e3, t3) {
              return t3.customInspect = false, o.inspect(this, t3);
            }
            send(e3, t3, r3, n3) {
              const i2 = Array.from(arguments).slice(1);
              return t3 = i2.find((e4) => "object" == typeof e4), r3 = i2.find((e4) => "string" == typeof e4), "function" == typeof (n3 = i2.find((e4) => "function" == typeof e4)) ? void this._enqueueCommand(e3, t3, r3, n3) : new Promise((n4, i3) => {
                this._enqueueCommand(e3, t3, r3, (o2, a2) => {
                  if (o2) {
                    const n5 = { method: e3, params: t3, sessionId: r3 };
                    i3(o2 instanceof Error ? o2 : new u(n5, a2));
                  } else
                    n4(a2);
                });
              });
            }
            close(e3) {
              const t3 = (e4) => {
                3 === this._ws.readyState ? e4() : (this._ws.removeAllListeners("close"), this._ws.once("close", () => {
                  this._ws.removeAllListeners(), e4();
                }), this._ws.close());
              };
              return "function" == typeof e3 ? void t3(e3) : new Promise((e4, r3) => {
                t3(e4);
              });
            }
            async _start() {
              const e3 = { host: this.host, port: this.port, secure: this.secure, useHostName: this.useHostName, alterPath: this.alterPath };
              try {
                const t3 = await this._fetchDebuggerURL(e3), r3 = s(t3);
                r3.pathname = e3.alterPath(r3.pathname), this.webSocketUrl = a(r3), e3.host = r3.hostname, e3.port = r3.port || e3.port;
                const i2 = await this._fetchProtocol(e3);
                c.prepare(this, i2), await this._connectToWebSocket(), n2.nextTick(() => {
                  this._notifier.emit("connect", this);
                });
              } catch (e4) {
                this._notifier.emit("error", e4);
              }
            }
            async _fetchDebuggerURL(e3) {
              const t3 = this.target;
              switch (typeof t3) {
                case "string": {
                  let r3 = t3;
                  if (r3.startsWith("/") && (r3 = `ws://${this.host}:${this.port}${r3}`), r3.match(/^wss?:/i))
                    return r3;
                  return (await l.List(e3)).find((e4) => e4.id === r3).webSocketDebuggerUrl;
                }
                case "object":
                  return t3.webSocketDebuggerUrl;
                case "function": {
                  const r3 = t3, n3 = await l.List(e3), i2 = r3(n3);
                  return ("number" == typeof i2 ? n3[i2] : i2).webSocketDebuggerUrl;
                }
                default:
                  throw new Error(`Invalid target argument "${this.target}"`);
              }
            }
            async _fetchProtocol(e3) {
              return this.protocol ? this.protocol : (e3.local = this.local, await l.Protocol(e3));
            }
            _connectToWebSocket() {
              return new Promise((e3, t3) => {
                try {
                  this.secure && (this.webSocketUrl = this.webSocketUrl.replace(/^ws:/i, "wss:")), this._ws = new p(this.webSocketUrl);
                } catch (e4) {
                  return void t3(e4);
                }
                this._ws.on("open", () => {
                  e3();
                }), this._ws.on("message", (e4) => {
                  const t4 = JSON.parse(e4);
                  this._handleMessage(t4);
                }), this._ws.on("close", (e4) => {
                  this.emit("disconnect");
                }), this._ws.on("error", (e4) => {
                  t3(e4);
                });
              });
            }
            _handleMessage(e3) {
              if (e3.id) {
                const t3 = this._callbacks[e3.id];
                if (!t3)
                  return;
                e3.error ? t3(true, e3.error) : t3(false, e3.result || {}), delete this._callbacks[e3.id], 0 === Object.keys(this._callbacks).length && this.emit("ready");
              } else if (e3.method) {
                const { method: t3, params: r3, sessionId: n3 } = e3;
                this.emit("event", e3), this.emit(t3, r3, n3), this.emit(`${t3}.${n3}`, r3, n3);
              }
            }
            _enqueueCommand(e3, t3, r3, n3) {
              const i2 = this._nextCommandId++, o2 = { id: i2, method: e3, sessionId: r3, params: t3 || {} };
              this._ws.send(JSON.stringify(o2), (e4) => {
                e4 ? "function" == typeof n3 && n3(e4) : this._callbacks[i2] = n3;
              });
            }
          };
        }, 5372: (e2) => {
          "use strict";
          e2.exports.HOST = "localhost", e2.exports.PORT = 9222;
        }, 7996: (e2, t2, r2) => {
          "use strict";
          const n2 = r2(3423), i = r2(8532), o = r2(5372), a = r2(4162);
          function s(e3, t3, r3) {
            const s2 = t3.secure ? i : n2, p2 = { method: t3.method, host: t3.host || o.HOST, port: t3.port || o.PORT, useHostName: t3.useHostName, path: t3.alterPath ? t3.alterPath(e3) : e3 };
            a(s2, p2, r3);
          }
          function p(e3) {
            return (t3, r3) => ("function" == typeof t3 && (r3 = t3, t3 = void 0), t3 = t3 || {}, "function" == typeof r3 ? void e3(t3, r3) : new Promise((r4, n3) => {
              e3(t3, (e4, t4) => {
                e4 ? n3(e4) : r4(t4);
              });
            }));
          }
          e2.exports.Protocol = p(function(e3, t3) {
            if (e3.local) {
              const e4 = r2(4203);
              t3(null, e4);
            } else
              s("/json/protocol", e3, (e4, r3) => {
                e4 ? t3(e4) : t3(null, JSON.parse(r3));
              });
          }), e2.exports.List = p(function(e3, t3) {
            s("/json/list", e3, (e4, r3) => {
              e4 ? t3(e4) : t3(null, JSON.parse(r3));
            });
          }), e2.exports.New = p(function(e3, t3) {
            let r3 = "/json/new";
            Object.prototype.hasOwnProperty.call(e3, "url") && (r3 += `?${e3.url}`), e3.method = e3.method || "PUT", s(r3, e3, (e4, r4) => {
              e4 ? t3(e4) : t3(null, JSON.parse(r4));
            });
          }), e2.exports.Activate = p(function(e3, t3) {
            s("/json/activate/" + e3.id, e3, (e4) => {
              t3(e4 || null);
            });
          }), e2.exports.Close = p(function(e3, t3) {
            s("/json/close/" + e3.id, e3, (e4) => {
              t3(e4 || null);
            });
          }), e2.exports.Version = p(function(e3, t3) {
            s("/json/version", e3, (e4, r3) => {
              e4 ? t3(e4) : t3(null, JSON.parse(r3));
            });
          });
        }, 5529: (e2, t2, r2) => {
          "use strict";
          const n2 = r2(7187);
          e2.exports = class extends n2 {
            constructor(e3) {
              super(), this._ws = new WebSocket(e3), this._ws.onopen = () => {
                this.emit("open");
              }, this._ws.onclose = () => {
                this.emit("close");
              }, this._ws.onmessage = (e4) => {
                this.emit("message", e4.data);
              }, this._ws.onerror = () => {
                this.emit("error", new Error("WebSocket error"));
              };
            }
            close() {
              this._ws.close();
            }
            send(e3, t3) {
              try {
                this._ws.send(e3), t3();
              } catch (e4) {
                t3(e4);
              }
            }
          };
        }, 6124: (e2, t2, r2) => {
          "use strict";
          if (r2(1934), r2(5666), r2(7694), r2.g._babelPolyfill)
            throw new Error("only one instance of babel-polyfill is allowed");
          r2.g._babelPolyfill = true;
          function n2(e3, t3, r3) {
            e3[t3] || Object.defineProperty(e3, t3, { writable: true, configurable: true, value: r3 });
          }
          n2(String.prototype, "padLeft", "".padStart), n2(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e3) {
            [][e3] && n2(Array, e3, Function.call.bind([][e3]));
          });
        }, 1924: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(210), i = r2(5559), o = i(n2("String.prototype.indexOf"));
          e2.exports = function(e3, t3) {
            var r3 = n2(e3, !!t3);
            return "function" == typeof r3 && o(e3, ".prototype.") > -1 ? i(r3) : r3;
          };
        }, 5559: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(8612), i = r2(210), o = i("%Function.prototype.apply%"), a = i("%Function.prototype.call%"), s = i("%Reflect.apply%", true) || n2.call(a, o), p = i("%Object.getOwnPropertyDescriptor%", true), c = i("%Object.defineProperty%", true), d = i("%Math.max%");
          if (c)
            try {
              c({}, "a", { value: 1 });
            } catch (e3) {
              c = null;
            }
          e2.exports = function(e3) {
            var t3 = s(n2, a, arguments);
            if (p && c) {
              var r3 = p(t3, "length");
              r3.configurable && c(t3, "length", { value: 1 + d(0, e3.length - (arguments.length - 1)) });
            }
            return t3;
          };
          var l = function() {
            return s(n2, o, arguments);
          };
          c ? c(e2.exports, "apply", { value: l }) : e2.exports.apply = l;
        }, 7694: (e2, t2, r2) => {
          r2(1761), e2.exports = r2(5645).RegExp.escape;
        }, 4963: (e2) => {
          e2.exports = function(e3) {
            if ("function" != typeof e3)
              throw TypeError(e3 + " is not a function!");
            return e3;
          };
        }, 3365: (e2, t2, r2) => {
          var n2 = r2(2032);
          e2.exports = function(e3, t3) {
            if ("number" != typeof e3 && "Number" != n2(e3))
              throw TypeError(t3);
            return +e3;
          };
        }, 7722: (e2, t2, r2) => {
          var n2 = r2(6314)("unscopables"), i = Array.prototype;
          null == i[n2] && r2(7728)(i, n2, {}), e2.exports = function(e3) {
            i[n2][e3] = true;
          };
        }, 6793: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4496)(true);
          e2.exports = function(e3, t3, r3) {
            return t3 + (r3 ? n2(e3, t3).length : 1);
          };
        }, 3328: (e2) => {
          e2.exports = function(e3, t2, r2, n2) {
            if (!(e3 instanceof t2) || void 0 !== n2 && n2 in e3)
              throw TypeError(r2 + ": incorrect invocation!");
            return e3;
          };
        }, 7007: (e2, t2, r2) => {
          var n2 = r2(5286);
          e2.exports = function(e3) {
            if (!n2(e3))
              throw TypeError(e3 + " is not an object!");
            return e3;
          };
        }, 5216: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(508), i = r2(2337), o = r2(875);
          e2.exports = [].copyWithin || function(e3, t3) {
            var r3 = n2(this), a = o(r3.length), s = i(e3, a), p = i(t3, a), c = arguments.length > 2 ? arguments[2] : void 0, d = Math.min((void 0 === c ? a : i(c, a)) - p, a - s), l = 1;
            for (p < s && s < p + d && (l = -1, p += d - 1, s += d - 1); d-- > 0; )
              p in r3 ? r3[s] = r3[p] : delete r3[s], s += l, p += l;
            return r3;
          };
        }, 6852: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(508), i = r2(2337), o = r2(875);
          e2.exports = function(e3) {
            for (var t3 = n2(this), r3 = o(t3.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, r3), p = a > 2 ? arguments[2] : void 0, c = void 0 === p ? r3 : i(p, r3); c > s; )
              t3[s++] = e3;
            return t3;
          };
        }, 9490: (e2, t2, r2) => {
          var n2 = r2(3531);
          e2.exports = function(e3, t3) {
            var r3 = [];
            return n2(e3, false, r3.push, r3, t3), r3;
          };
        }, 9315: (e2, t2, r2) => {
          var n2 = r2(2110), i = r2(875), o = r2(2337);
          e2.exports = function(e3) {
            return function(t3, r3, a) {
              var s, p = n2(t3), c = i(p.length), d = o(a, c);
              if (e3 && r3 != r3) {
                for (; c > d; )
                  if ((s = p[d++]) != s)
                    return true;
              } else
                for (; c > d; d++)
                  if ((e3 || d in p) && p[d] === r3)
                    return e3 || d || 0;
              return !e3 && -1;
            };
          };
        }, 50: (e2, t2, r2) => {
          var n2 = r2(741), i = r2(9797), o = r2(508), a = r2(875), s = r2(6886);
          e2.exports = function(e3, t3) {
            var r3 = 1 == e3, p = 2 == e3, c = 3 == e3, d = 4 == e3, l = 6 == e3, u = 5 == e3 || l, m = t3 || s;
            return function(t4, s2, h) {
              for (var f, y, g = o(t4), b = i(g), v = n2(s2, h, 3), w = a(b.length), S = 0, I = r3 ? m(t4, w) : p ? m(t4, 0) : void 0; w > S; S++)
                if ((u || S in b) && (y = v(f = b[S], S, g), e3)) {
                  if (r3)
                    I[S] = y;
                  else if (y)
                    switch (e3) {
                      case 3:
                        return true;
                      case 5:
                        return f;
                      case 6:
                        return S;
                      case 2:
                        I.push(f);
                    }
                  else if (d)
                    return false;
                }
              return l ? -1 : c || d ? d : I;
            };
          };
        }, 7628: (e2, t2, r2) => {
          var n2 = r2(4963), i = r2(508), o = r2(9797), a = r2(875);
          e2.exports = function(e3, t3, r3, s, p) {
            n2(t3);
            var c = i(e3), d = o(c), l = a(c.length), u = p ? l - 1 : 0, m = p ? -1 : 1;
            if (r3 < 2)
              for (; ; ) {
                if (u in d) {
                  s = d[u], u += m;
                  break;
                }
                if (u += m, p ? u < 0 : l <= u)
                  throw TypeError("Reduce of empty array with no initial value");
              }
            for (; p ? u >= 0 : l > u; u += m)
              u in d && (s = t3(s, d[u], u, c));
            return s;
          };
        }, 2736: (e2, t2, r2) => {
          var n2 = r2(5286), i = r2(4302), o = r2(6314)("species");
          e2.exports = function(e3) {
            var t3;
            return i(e3) && ("function" != typeof (t3 = e3.constructor) || t3 !== Array && !i(t3.prototype) || (t3 = void 0), n2(t3) && null === (t3 = t3[o]) && (t3 = void 0)), void 0 === t3 ? Array : t3;
          };
        }, 6886: (e2, t2, r2) => {
          var n2 = r2(2736);
          e2.exports = function(e3, t3) {
            return new (n2(e3))(t3);
          };
        }, 4398: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4963), i = r2(5286), o = r2(7242), a = [].slice, s = {}, p = function(e3, t3, r3) {
            if (!(t3 in s)) {
              for (var n3 = [], i2 = 0; i2 < t3; i2++)
                n3[i2] = "a[" + i2 + "]";
              s[t3] = Function("F,a", "return new F(" + n3.join(",") + ")");
            }
            return s[t3](e3, r3);
          };
          e2.exports = Function.bind || function(e3) {
            var t3 = n2(this), r3 = a.call(arguments, 1), s2 = function() {
              var n3 = r3.concat(a.call(arguments));
              return this instanceof s2 ? p(t3, n3.length, n3) : o(t3, n3, e3);
            };
            return i(t3.prototype) && (s2.prototype = t3.prototype), s2;
          };
        }, 1488: (e2, t2, r2) => {
          var n2 = r2(2032), i = r2(6314)("toStringTag"), o = "Arguments" == n2(function() {
            return arguments;
          }());
          e2.exports = function(e3) {
            var t3, r3, a;
            return void 0 === e3 ? "Undefined" : null === e3 ? "Null" : "string" == typeof (r3 = function(e4, t4) {
              try {
                return e4[t4];
              } catch (e5) {
              }
            }(t3 = Object(e3), i)) ? r3 : o ? n2(t3) : "Object" == (a = n2(t3)) && "function" == typeof t3.callee ? "Arguments" : a;
          };
        }, 2032: (e2) => {
          var t2 = {}.toString;
          e2.exports = function(e3) {
            return t2.call(e3).slice(8, -1);
          };
        }, 9824: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(9275).f, i = r2(2503), o = r2(4408), a = r2(741), s = r2(3328), p = r2(3531), c = r2(2923), d = r2(5436), l = r2(2974), u = r2(7057), m = r2(4728).fastKey, h = r2(1616), f = u ? "_s" : "size", y = function(e3, t3) {
            var r3, n3 = m(t3);
            if ("F" !== n3)
              return e3._i[n3];
            for (r3 = e3._f; r3; r3 = r3.n)
              if (r3.k == t3)
                return r3;
          };
          e2.exports = { getConstructor: function(e3, t3, r3, c2) {
            var d2 = e3(function(e4, n3) {
              s(e4, d2, t3, "_i"), e4._t = t3, e4._i = i(null), e4._f = void 0, e4._l = void 0, e4[f] = 0, null != n3 && p(n3, r3, e4[c2], e4);
            });
            return o(d2.prototype, { clear: function() {
              for (var e4 = h(this, t3), r4 = e4._i, n3 = e4._f; n3; n3 = n3.n)
                n3.r = true, n3.p && (n3.p = n3.p.n = void 0), delete r4[n3.i];
              e4._f = e4._l = void 0, e4[f] = 0;
            }, delete: function(e4) {
              var r4 = h(this, t3), n3 = y(r4, e4);
              if (n3) {
                var i2 = n3.n, o2 = n3.p;
                delete r4._i[n3.i], n3.r = true, o2 && (o2.n = i2), i2 && (i2.p = o2), r4._f == n3 && (r4._f = i2), r4._l == n3 && (r4._l = o2), r4[f]--;
              }
              return !!n3;
            }, forEach: function(e4) {
              h(this, t3);
              for (var r4, n3 = a(e4, arguments.length > 1 ? arguments[1] : void 0, 3); r4 = r4 ? r4.n : this._f; )
                for (n3(r4.v, r4.k, this); r4 && r4.r; )
                  r4 = r4.p;
            }, has: function(e4) {
              return !!y(h(this, t3), e4);
            } }), u && n2(d2.prototype, "size", { get: function() {
              return h(this, t3)[f];
            } }), d2;
          }, def: function(e3, t3, r3) {
            var n3, i2, o2 = y(e3, t3);
            return o2 ? o2.v = r3 : (e3._l = o2 = { i: i2 = m(t3, true), k: t3, v: r3, p: n3 = e3._l, n: void 0, r: false }, e3._f || (e3._f = o2), n3 && (n3.n = o2), e3[f]++, "F" !== i2 && (e3._i[i2] = o2)), e3;
          }, getEntry: y, setStrong: function(e3, t3, r3) {
            c(e3, t3, function(e4, r4) {
              this._t = h(e4, t3), this._k = r4, this._l = void 0;
            }, function() {
              for (var e4 = this, t4 = e4._k, r4 = e4._l; r4 && r4.r; )
                r4 = r4.p;
              return e4._t && (e4._l = r4 = r4 ? r4.n : e4._t._f) ? d(0, "keys" == t4 ? r4.k : "values" == t4 ? r4.v : [r4.k, r4.v]) : (e4._t = void 0, d(1));
            }, r3 ? "entries" : "values", !r3, true), l(t3);
          } };
        }, 6132: (e2, t2, r2) => {
          var n2 = r2(1488), i = r2(9490);
          e2.exports = function(e3) {
            return function() {
              if (n2(this) != e3)
                throw TypeError(e3 + "#toJSON isn't generic");
              return i(this);
            };
          };
        }, 3657: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4408), i = r2(4728).getWeak, o = r2(7007), a = r2(5286), s = r2(3328), p = r2(3531), c = r2(50), d = r2(9181), l = r2(1616), u = c(5), m = c(6), h = 0, f = function(e3) {
            return e3._l || (e3._l = new y());
          }, y = function() {
            this.a = [];
          }, g = function(e3, t3) {
            return u(e3.a, function(e4) {
              return e4[0] === t3;
            });
          };
          y.prototype = { get: function(e3) {
            var t3 = g(this, e3);
            if (t3)
              return t3[1];
          }, has: function(e3) {
            return !!g(this, e3);
          }, set: function(e3, t3) {
            var r3 = g(this, e3);
            r3 ? r3[1] = t3 : this.a.push([e3, t3]);
          }, delete: function(e3) {
            var t3 = m(this.a, function(t4) {
              return t4[0] === e3;
            });
            return ~t3 && this.a.splice(t3, 1), !!~t3;
          } }, e2.exports = { getConstructor: function(e3, t3, r3, o2) {
            var c2 = e3(function(e4, n3) {
              s(e4, c2, t3, "_i"), e4._t = t3, e4._i = h++, e4._l = void 0, null != n3 && p(n3, r3, e4[o2], e4);
            });
            return n2(c2.prototype, { delete: function(e4) {
              if (!a(e4))
                return false;
              var r4 = i(e4);
              return true === r4 ? f(l(this, t3)).delete(e4) : r4 && d(r4, this._i) && delete r4[this._i];
            }, has: function(e4) {
              if (!a(e4))
                return false;
              var r4 = i(e4);
              return true === r4 ? f(l(this, t3)).has(e4) : r4 && d(r4, this._i);
            } }), c2;
          }, def: function(e3, t3, r3) {
            var n3 = i(o(t3), true);
            return true === n3 ? f(e3).set(t3, r3) : n3[e3._i] = r3, e3;
          }, ufstore: f };
        }, 5795: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(3816), i = r2(2985), o = r2(7234), a = r2(4408), s = r2(4728), p = r2(3531), c = r2(3328), d = r2(5286), l = r2(4253), u = r2(7462), m = r2(2943), h = r2(266);
          e2.exports = function(e3, t3, r3, f, y, g) {
            var b = n2[e3], v = b, w = y ? "set" : "add", S = v && v.prototype, I = {}, x = function(e4) {
              var t4 = S[e4];
              o(S, e4, "delete" == e4 || "has" == e4 ? function(e5) {
                return !(g && !d(e5)) && t4.call(this, 0 === e5 ? 0 : e5);
              } : "get" == e4 ? function(e5) {
                return g && !d(e5) ? void 0 : t4.call(this, 0 === e5 ? 0 : e5);
              } : "add" == e4 ? function(e5) {
                return t4.call(this, 0 === e5 ? 0 : e5), this;
              } : function(e5, r4) {
                return t4.call(this, 0 === e5 ? 0 : e5, r4), this;
              });
            };
            if ("function" == typeof v && (g || S.forEach && !l(function() {
              new v().entries().next();
            }))) {
              var T = new v(), k = T[w](g ? {} : -0, 1) != T, C = l(function() {
                T.has(1);
              }), R = u(function(e4) {
                new v(e4);
              }), $ = !g && l(function() {
                for (var e4 = new v(), t4 = 5; t4--; )
                  e4[w](t4, t4);
                return !e4.has(-0);
              });
              R || ((v = t3(function(t4, r4) {
                c(t4, v, e3);
                var n3 = h(new b(), t4, v);
                return null != r4 && p(r4, y, n3[w], n3), n3;
              })).prototype = S, S.constructor = v), (C || $) && (x("delete"), x("has"), y && x("get")), ($ || k) && x(w), g && S.clear && delete S.clear;
            } else
              v = f.getConstructor(t3, e3, y, w), a(v.prototype, r3), s.NEED = true;
            return m(v, e3), I[e3] = v, i(i.G + i.W + i.F * (v != b), I), g || f.setStrong(v, e3, y), v;
          };
        }, 5645: (e2) => {
          var t2 = e2.exports = { version: "2.6.12" };
          "number" == typeof __e && (__e = t2);
        }, 2811: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(9275), i = r2(681);
          e2.exports = function(e3, t3, r3) {
            t3 in e3 ? n2.f(e3, t3, i(0, r3)) : e3[t3] = r3;
          };
        }, 741: (e2, t2, r2) => {
          var n2 = r2(4963);
          e2.exports = function(e3, t3, r3) {
            if (n2(e3), void 0 === t3)
              return e3;
            switch (r3) {
              case 1:
                return function(r4) {
                  return e3.call(t3, r4);
                };
              case 2:
                return function(r4, n3) {
                  return e3.call(t3, r4, n3);
                };
              case 3:
                return function(r4, n3, i) {
                  return e3.call(t3, r4, n3, i);
                };
            }
            return function() {
              return e3.apply(t3, arguments);
            };
          };
        }, 3537: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4253), i = Date.prototype.getTime, o = Date.prototype.toISOString, a = function(e3) {
            return e3 > 9 ? e3 : "0" + e3;
          };
          e2.exports = n2(function() {
            return "0385-07-25T07:06:39.999Z" != o.call(/* @__PURE__ */ new Date(-50000000000001));
          }) || !n2(function() {
            o.call(/* @__PURE__ */ new Date(NaN));
          }) ? function() {
            if (!isFinite(i.call(this)))
              throw RangeError("Invalid time value");
            var e3 = this, t3 = e3.getUTCFullYear(), r3 = e3.getUTCMilliseconds(), n3 = t3 < 0 ? "-" : t3 > 9999 ? "+" : "";
            return n3 + ("00000" + Math.abs(t3)).slice(n3 ? -6 : -4) + "-" + a(e3.getUTCMonth() + 1) + "-" + a(e3.getUTCDate()) + "T" + a(e3.getUTCHours()) + ":" + a(e3.getUTCMinutes()) + ":" + a(e3.getUTCSeconds()) + "." + (r3 > 99 ? r3 : "0" + a(r3)) + "Z";
          } : o;
        }, 870: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(7007), i = r2(1689), o = "number";
          e2.exports = function(e3) {
            if ("string" !== e3 && e3 !== o && "default" !== e3)
              throw TypeError("Incorrect hint");
            return i(n2(this), e3 != o);
          };
        }, 1355: (e2) => {
          e2.exports = function(e3) {
            if (null == e3)
              throw TypeError("Can't call method on  " + e3);
            return e3;
          };
        }, 7057: (e2, t2, r2) => {
          e2.exports = !r2(4253)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, 2457: (e2, t2, r2) => {
          var n2 = r2(5286), i = r2(3816).document, o = n2(i) && n2(i.createElement);
          e2.exports = function(e3) {
            return o ? i.createElement(e3) : {};
          };
        }, 4430: (e2) => {
          e2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, 5541: (e2, t2, r2) => {
          var n2 = r2(7184), i = r2(4548), o = r2(4682);
          e2.exports = function(e3) {
            var t3 = n2(e3), r3 = i.f;
            if (r3)
              for (var a, s = r3(e3), p = o.f, c = 0; s.length > c; )
                p.call(e3, a = s[c++]) && t3.push(a);
            return t3;
          };
        }, 2985: (e2, t2, r2) => {
          var n2 = r2(3816), i = r2(5645), o = r2(7728), a = r2(7234), s = r2(741), p = function(e3, t3, r3) {
            var c, d, l, u, m = e3 & p.F, h = e3 & p.G, f = e3 & p.S, y = e3 & p.P, g = e3 & p.B, b = h ? n2 : f ? n2[t3] || (n2[t3] = {}) : (n2[t3] || {}).prototype, v = h ? i : i[t3] || (i[t3] = {}), w = v.prototype || (v.prototype = {});
            for (c in h && (r3 = t3), r3)
              l = ((d = !m && b && void 0 !== b[c]) ? b : r3)[c], u = g && d ? s(l, n2) : y && "function" == typeof l ? s(Function.call, l) : l, b && a(b, c, l, e3 & p.U), v[c] != l && o(v, c, u), y && w[c] != l && (w[c] = l);
          };
          n2.core = i, p.F = 1, p.G = 2, p.S = 4, p.P = 8, p.B = 16, p.W = 32, p.U = 64, p.R = 128, e2.exports = p;
        }, 8852: (e2, t2, r2) => {
          var n2 = r2(6314)("match");
          e2.exports = function(e3) {
            var t3 = /./;
            try {
              "/./"[e3](t3);
            } catch (r3) {
              try {
                return t3[n2] = false, !"/./"[e3](t3);
              } catch (e4) {
              }
            }
            return true;
          };
        }, 4253: (e2) => {
          e2.exports = function(e3) {
            try {
              return !!e3();
            } catch (e4) {
              return true;
            }
          };
        }, 8082: (e2, t2, r2) => {
          "use strict";
          r2(8269);
          var n2 = r2(7234), i = r2(7728), o = r2(4253), a = r2(1355), s = r2(6314), p = r2(1165), c = s("species"), d = !o(function() {
            var e3 = /./;
            return e3.exec = function() {
              var e4 = [];
              return e4.groups = { a: "7" }, e4;
            }, "7" !== "".replace(e3, "$<a>");
          }), l = function() {
            var e3 = /(?:)/, t3 = e3.exec;
            e3.exec = function() {
              return t3.apply(this, arguments);
            };
            var r3 = "ab".split(e3);
            return 2 === r3.length && "a" === r3[0] && "b" === r3[1];
          }();
          e2.exports = function(e3, t3, r3) {
            var u = s(e3), m = !o(function() {
              var t4 = {};
              return t4[u] = function() {
                return 7;
              }, 7 != ""[e3](t4);
            }), h = m ? !o(function() {
              var t4 = false, r4 = /a/;
              return r4.exec = function() {
                return t4 = true, null;
              }, "split" === e3 && (r4.constructor = {}, r4.constructor[c] = function() {
                return r4;
              }), r4[u](""), !t4;
            }) : void 0;
            if (!m || !h || "replace" === e3 && !d || "split" === e3 && !l) {
              var f = /./[u], y = r3(a, u, ""[e3], function(e4, t4, r4, n3, i2) {
                return t4.exec === p ? m && !i2 ? { done: true, value: f.call(t4, r4, n3) } : { done: true, value: e4.call(r4, t4, n3) } : { done: false };
              }), g = y[0], b = y[1];
              n2(String.prototype, e3, g), i(RegExp.prototype, u, 2 == t3 ? function(e4, t4) {
                return b.call(e4, this, t4);
              } : function(e4) {
                return b.call(e4, this);
              });
            }
          };
        }, 3218: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(7007);
          e2.exports = function() {
            var e3 = n2(this), t3 = "";
            return e3.global && (t3 += "g"), e3.ignoreCase && (t3 += "i"), e3.multiline && (t3 += "m"), e3.unicode && (t3 += "u"), e3.sticky && (t3 += "y"), t3;
          };
        }, 3325: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4302), i = r2(5286), o = r2(875), a = r2(741), s = r2(6314)("isConcatSpreadable");
          e2.exports = function e3(t3, r3, p, c, d, l, u, m) {
            for (var h, f, y = d, g = 0, b = !!u && a(u, m, 3); g < c; ) {
              if (g in p) {
                if (h = b ? b(p[g], g, r3) : p[g], f = false, i(h) && (f = void 0 !== (f = h[s]) ? !!f : n2(h)), f && l > 0)
                  y = e3(t3, r3, h, o(h.length), y, l - 1) - 1;
                else {
                  if (y >= 9007199254740991)
                    throw TypeError();
                  t3[y] = h;
                }
                y++;
              }
              g++;
            }
            return y;
          };
        }, 3531: (e2, t2, r2) => {
          var n2 = r2(741), i = r2(8851), o = r2(6555), a = r2(7007), s = r2(875), p = r2(9002), c = {}, d = {}, l = e2.exports = function(e3, t3, r3, l2, u) {
            var m, h, f, y, g = u ? function() {
              return e3;
            } : p(e3), b = n2(r3, l2, t3 ? 2 : 1), v = 0;
            if ("function" != typeof g)
              throw TypeError(e3 + " is not iterable!");
            if (o(g)) {
              for (m = s(e3.length); m > v; v++)
                if ((y = t3 ? b(a(h = e3[v])[0], h[1]) : b(e3[v])) === c || y === d)
                  return y;
            } else
              for (f = g.call(e3); !(h = f.next()).done; )
                if ((y = i(f, b, h.value, t3)) === c || y === d)
                  return y;
          };
          l.BREAK = c, l.RETURN = d;
        }, 18: (e2, t2, r2) => {
          e2.exports = r2(3825)("native-function-to-string", Function.toString);
        }, 3816: (e2) => {
          var t2 = e2.exports = "undefined" != typeof fakeWindow && fakeWindow.Math == Math ? fakeWindow : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = t2);
        }, 9181: (e2) => {
          var t2 = {}.hasOwnProperty;
          e2.exports = function(e3, r2) {
            return t2.call(e3, r2);
          };
        }, 7728: (e2, t2, r2) => {
          var n2 = r2(9275), i = r2(681);
          e2.exports = r2(7057) ? function(e3, t3, r3) {
            return n2.f(e3, t3, i(1, r3));
          } : function(e3, t3, r3) {
            return e3[t3] = r3, e3;
          };
        }, 639: (e2, t2, r2) => {
          var n2 = r2(3816).document;
          e2.exports = n2 && n2.documentElement;
        }, 1734: (e2, t2, r2) => {
          e2.exports = !r2(7057) && !r2(4253)(function() {
            return 7 != Object.defineProperty(r2(2457)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, 266: (e2, t2, r2) => {
          var n2 = r2(5286), i = r2(7375).set;
          e2.exports = function(e3, t3, r3) {
            var o, a = t3.constructor;
            return a !== r3 && "function" == typeof a && (o = a.prototype) !== r3.prototype && n2(o) && i && i(e3, o), e3;
          };
        }, 7242: (e2) => {
          e2.exports = function(e3, t2, r2) {
            var n2 = void 0 === r2;
            switch (t2.length) {
              case 0:
                return n2 ? e3() : e3.call(r2);
              case 1:
                return n2 ? e3(t2[0]) : e3.call(r2, t2[0]);
              case 2:
                return n2 ? e3(t2[0], t2[1]) : e3.call(r2, t2[0], t2[1]);
              case 3:
                return n2 ? e3(t2[0], t2[1], t2[2]) : e3.call(r2, t2[0], t2[1], t2[2]);
              case 4:
                return n2 ? e3(t2[0], t2[1], t2[2], t2[3]) : e3.call(r2, t2[0], t2[1], t2[2], t2[3]);
            }
            return e3.apply(r2, t2);
          };
        }, 9797: (e2, t2, r2) => {
          var n2 = r2(2032);
          e2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e3) {
            return "String" == n2(e3) ? e3.split("") : Object(e3);
          };
        }, 6555: (e2, t2, r2) => {
          var n2 = r2(2803), i = r2(6314)("iterator"), o = Array.prototype;
          e2.exports = function(e3) {
            return void 0 !== e3 && (n2.Array === e3 || o[i] === e3);
          };
        }, 4302: (e2, t2, r2) => {
          var n2 = r2(2032);
          e2.exports = Array.isArray || function(e3) {
            return "Array" == n2(e3);
          };
        }, 8367: (e2, t2, r2) => {
          var n2 = r2(5286), i = Math.floor;
          e2.exports = function(e3) {
            return !n2(e3) && isFinite(e3) && i(e3) === e3;
          };
        }, 5286: (e2) => {
          e2.exports = function(e3) {
            return "object" == typeof e3 ? null !== e3 : "function" == typeof e3;
          };
        }, 5364: (e2, t2, r2) => {
          var n2 = r2(5286), i = r2(2032), o = r2(6314)("match");
          e2.exports = function(e3) {
            var t3;
            return n2(e3) && (void 0 !== (t3 = e3[o]) ? !!t3 : "RegExp" == i(e3));
          };
        }, 8851: (e2, t2, r2) => {
          var n2 = r2(7007);
          e2.exports = function(e3, t3, r3, i) {
            try {
              return i ? t3(n2(r3)[0], r3[1]) : t3(r3);
            } catch (t4) {
              var o = e3.return;
              throw void 0 !== o && n2(o.call(e3)), t4;
            }
          };
        }, 9988: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2503), i = r2(681), o = r2(2943), a = {};
          r2(7728)(a, r2(6314)("iterator"), function() {
            return this;
          }), e2.exports = function(e3, t3, r3) {
            e3.prototype = n2(a, { next: i(1, r3) }), o(e3, t3 + " Iterator");
          };
        }, 2923: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4461), i = r2(2985), o = r2(7234), a = r2(7728), s = r2(2803), p = r2(9988), c = r2(2943), d = r2(468), l = r2(6314)("iterator"), u = !([].keys && "next" in [].keys()), m = "keys", h = "values", f = function() {
            return this;
          };
          e2.exports = function(e3, t3, r3, y, g, b, v) {
            p(r3, t3, y);
            var w, S, I, x = function(e4) {
              if (!u && e4 in R)
                return R[e4];
              switch (e4) {
                case m:
                case h:
                  return function() {
                    return new r3(this, e4);
                  };
              }
              return function() {
                return new r3(this, e4);
              };
            }, T = t3 + " Iterator", k = g == h, C = false, R = e3.prototype, $ = R[l] || R["@@iterator"] || g && R[g], O = $ || x(g), A = g ? k ? x("entries") : O : void 0, P = "Array" == t3 && R.entries || $;
            if (P && (I = d(P.call(new e3()))) !== Object.prototype && I.next && (c(I, T, true), n2 || "function" == typeof I[l] || a(I, l, f)), k && $ && $.name !== h && (C = true, O = function() {
              return $.call(this);
            }), n2 && !v || !u && !C && R[l] || a(R, l, O), s[t3] = O, s[T] = f, g)
              if (w = { values: k ? O : x(h), keys: b ? O : x(m), entries: A }, v)
                for (S in w)
                  S in R || o(R, S, w[S]);
              else
                i(i.P + i.F * (u || C), t3, w);
            return w;
          };
        }, 7462: (e2, t2, r2) => {
          var n2 = r2(6314)("iterator"), i = false;
          try {
            var o = [7][n2]();
            o.return = function() {
              i = true;
            }, Array.from(o, function() {
              throw 2;
            });
          } catch (e3) {
          }
          e2.exports = function(e3, t3) {
            if (!t3 && !i)
              return false;
            var r3 = false;
            try {
              var o2 = [7], a = o2[n2]();
              a.next = function() {
                return { done: r3 = true };
              }, o2[n2] = function() {
                return a;
              }, e3(o2);
            } catch (e4) {
            }
            return r3;
          };
        }, 5436: (e2) => {
          e2.exports = function(e3, t2) {
            return { value: t2, done: !!e3 };
          };
        }, 2803: (e2) => {
          e2.exports = {};
        }, 4461: (e2) => {
          e2.exports = false;
        }, 3086: (e2) => {
          var t2 = Math.expm1;
          e2.exports = !t2 || t2(10) > 22025.465794806718 || t2(10) < 22025.465794806718 || -2e-17 != t2(-2e-17) ? function(e3) {
            return 0 == (e3 = +e3) ? e3 : e3 > -1e-6 && e3 < 1e-6 ? e3 + e3 * e3 / 2 : Math.exp(e3) - 1;
          } : t2;
        }, 4934: (e2, t2, r2) => {
          var n2 = r2(1801), i = Math.pow, o = i(2, -52), a = i(2, -23), s = i(2, 127) * (2 - a), p = i(2, -126);
          e2.exports = Math.fround || function(e3) {
            var t3, r3, i2 = Math.abs(e3), c = n2(e3);
            return i2 < p ? c * (i2 / p / a + 1 / o - 1 / o) * p * a : (r3 = (t3 = (1 + a / o) * i2) - (t3 - i2)) > s || r3 != r3 ? c * (1 / 0) : c * r3;
          };
        }, 6206: (e2) => {
          e2.exports = Math.log1p || function(e3) {
            return (e3 = +e3) > -1e-8 && e3 < 1e-8 ? e3 - e3 * e3 / 2 : Math.log(1 + e3);
          };
        }, 8757: (e2) => {
          e2.exports = Math.scale || function(e3, t2, r2, n2, i) {
            return 0 === arguments.length || e3 != e3 || t2 != t2 || r2 != r2 || n2 != n2 || i != i ? NaN : e3 === 1 / 0 || e3 === -1 / 0 ? e3 : (e3 - t2) * (i - n2) / (r2 - t2) + n2;
          };
        }, 1801: (e2) => {
          e2.exports = Math.sign || function(e3) {
            return 0 == (e3 = +e3) || e3 != e3 ? e3 : e3 < 0 ? -1 : 1;
          };
        }, 4728: (e2, t2, r2) => {
          var n2 = r2(3953)("meta"), i = r2(5286), o = r2(9181), a = r2(9275).f, s = 0, p = Object.isExtensible || function() {
            return true;
          }, c = !r2(4253)(function() {
            return p(Object.preventExtensions({}));
          }), d = function(e3) {
            a(e3, n2, { value: { i: "O" + ++s, w: {} } });
          }, l = e2.exports = { KEY: n2, NEED: false, fastKey: function(e3, t3) {
            if (!i(e3))
              return "symbol" == typeof e3 ? e3 : ("string" == typeof e3 ? "S" : "P") + e3;
            if (!o(e3, n2)) {
              if (!p(e3))
                return "F";
              if (!t3)
                return "E";
              d(e3);
            }
            return e3[n2].i;
          }, getWeak: function(e3, t3) {
            if (!o(e3, n2)) {
              if (!p(e3))
                return true;
              if (!t3)
                return false;
              d(e3);
            }
            return e3[n2].w;
          }, onFreeze: function(e3) {
            return c && l.NEED && p(e3) && !o(e3, n2) && d(e3), e3;
          } };
        }, 133: (e2, t2, r2) => {
          var n2 = r2(8416), i = r2(2985), o = r2(3825)("metadata"), a = o.store || (o.store = new (r2(147))()), s = function(e3, t3, r3) {
            var i2 = a.get(e3);
            if (!i2) {
              if (!r3)
                return;
              a.set(e3, i2 = new n2());
            }
            var o2 = i2.get(t3);
            if (!o2) {
              if (!r3)
                return;
              i2.set(t3, o2 = new n2());
            }
            return o2;
          };
          e2.exports = { store: a, map: s, has: function(e3, t3, r3) {
            var n3 = s(t3, r3, false);
            return void 0 !== n3 && n3.has(e3);
          }, get: function(e3, t3, r3) {
            var n3 = s(t3, r3, false);
            return void 0 === n3 ? void 0 : n3.get(e3);
          }, set: function(e3, t3, r3, n3) {
            s(r3, n3, true).set(e3, t3);
          }, keys: function(e3, t3) {
            var r3 = s(e3, t3, false), n3 = [];
            return r3 && r3.forEach(function(e4, t4) {
              n3.push(t4);
            }), n3;
          }, key: function(e3) {
            return void 0 === e3 || "symbol" == typeof e3 ? e3 : String(e3);
          }, exp: function(e3) {
            i(i.S, "Reflect", e3);
          } };
        }, 4351: (e2, t2, r2) => {
          var n2 = r2(3816), i = r2(4193).set, o = n2.MutationObserver || n2.WebKitMutationObserver, a = n2.process, s = n2.Promise, p = "process" == r2(2032)(a);
          e2.exports = function() {
            var e3, t3, r3, c = function() {
              var n3, i2;
              for (p && (n3 = a.domain) && n3.exit(); e3; ) {
                i2 = e3.fn, e3 = e3.next;
                try {
                  i2();
                } catch (n4) {
                  throw e3 ? r3() : t3 = void 0, n4;
                }
              }
              t3 = void 0, n3 && n3.enter();
            };
            if (p)
              r3 = function() {
                a.nextTick(c);
              };
            else if (!o || n2.navigator && n2.navigator.standalone)
              if (s && s.resolve) {
                var d = s.resolve(void 0);
                r3 = function() {
                  d.then(c);
                };
              } else
                r3 = function() {
                  i.call(n2, c);
                };
            else {
              var l = true, u = document.createTextNode("");
              new o(c).observe(u, { characterData: true }), r3 = function() {
                u.data = l = !l;
              };
            }
            return function(n3) {
              var i2 = { fn: n3, next: void 0 };
              t3 && (t3.next = i2), e3 || (e3 = i2, r3()), t3 = i2;
            };
          };
        }, 3499: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4963);
          function i(e3) {
            var t3, r3;
            this.promise = new e3(function(e4, n3) {
              if (void 0 !== t3 || void 0 !== r3)
                throw TypeError("Bad Promise constructor");
              t3 = e4, r3 = n3;
            }), this.resolve = n2(t3), this.reject = n2(r3);
          }
          e2.exports.f = function(e3) {
            return new i(e3);
          };
        }, 5345: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(7057), i = r2(7184), o = r2(4548), a = r2(4682), s = r2(508), p = r2(9797), c = Object.assign;
          e2.exports = !c || r2(4253)(function() {
            var e3 = {}, t3 = {}, r3 = Symbol(), n3 = "abcdefghijklmnopqrst";
            return e3[r3] = 7, n3.split("").forEach(function(e4) {
              t3[e4] = e4;
            }), 7 != c({}, e3)[r3] || Object.keys(c({}, t3)).join("") != n3;
          }) ? function(e3, t3) {
            for (var r3 = s(e3), c2 = arguments.length, d = 1, l = o.f, u = a.f; c2 > d; )
              for (var m, h = p(arguments[d++]), f = l ? i(h).concat(l(h)) : i(h), y = f.length, g = 0; y > g; )
                m = f[g++], n2 && !u.call(h, m) || (r3[m] = h[m]);
            return r3;
          } : c;
        }, 2503: (e2, t2, r2) => {
          var n2 = r2(7007), i = r2(5588), o = r2(4430), a = r2(9335)("IE_PROTO"), s = function() {
          }, p = function() {
            var e3, t3 = r2(2457)("iframe"), n3 = o.length;
            for (t3.style.display = "none", r2(639).appendChild(t3), t3.src = "javascript:", (e3 = t3.contentWindow.document).open(), e3.write("<script>document.F=Object<\/script>"), e3.close(), p = e3.F; n3--; )
              delete p.prototype[o[n3]];
            return p();
          };
          e2.exports = Object.create || function(e3, t3) {
            var r3;
            return null !== e3 ? (s.prototype = n2(e3), r3 = new s(), s.prototype = null, r3[a] = e3) : r3 = p(), void 0 === t3 ? r3 : i(r3, t3);
          };
        }, 9275: (e2, t2, r2) => {
          var n2 = r2(7007), i = r2(1734), o = r2(1689), a = Object.defineProperty;
          t2.f = r2(7057) ? Object.defineProperty : function(e3, t3, r3) {
            if (n2(e3), t3 = o(t3, true), n2(r3), i)
              try {
                return a(e3, t3, r3);
              } catch (e4) {
              }
            if ("get" in r3 || "set" in r3)
              throw TypeError("Accessors not supported!");
            return "value" in r3 && (e3[t3] = r3.value), e3;
          };
        }, 5588: (e2, t2, r2) => {
          var n2 = r2(9275), i = r2(7007), o = r2(7184);
          e2.exports = r2(7057) ? Object.defineProperties : function(e3, t3) {
            i(e3);
            for (var r3, a = o(t3), s = a.length, p = 0; s > p; )
              n2.f(e3, r3 = a[p++], t3[r3]);
            return e3;
          };
        }, 1670: (e2, t2, r2) => {
          "use strict";
          e2.exports = r2(4461) || !r2(4253)(function() {
            var e3 = Math.random();
            __defineSetter__.call(null, e3, function() {
            }), delete r2(3816)[e3];
          });
        }, 8693: (e2, t2, r2) => {
          var n2 = r2(4682), i = r2(681), o = r2(2110), a = r2(1689), s = r2(9181), p = r2(1734), c = Object.getOwnPropertyDescriptor;
          t2.f = r2(7057) ? c : function(e3, t3) {
            if (e3 = o(e3), t3 = a(t3, true), p)
              try {
                return c(e3, t3);
              } catch (e4) {
              }
            if (s(e3, t3))
              return i(!n2.f.call(e3, t3), e3[t3]);
          };
        }, 9327: (e2, t2, r2) => {
          var n2 = r2(2110), i = r2(616).f, o = {}.toString, a = "object" == typeof fakeWindow && fakeWindow && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(fakeWindow) : [];
          e2.exports.f = function(e3) {
            return a && "[object Window]" == o.call(e3) ? function(e4) {
              try {
                return i(e4);
              } catch (e5) {
                return a.slice();
              }
            }(e3) : i(n2(e3));
          };
        }, 616: (e2, t2, r2) => {
          var n2 = r2(189), i = r2(4430).concat("length", "prototype");
          t2.f = Object.getOwnPropertyNames || function(e3) {
            return n2(e3, i);
          };
        }, 4548: (e2, t2) => {
          t2.f = Object.getOwnPropertySymbols;
        }, 468: (e2, t2, r2) => {
          var n2 = r2(9181), i = r2(508), o = r2(9335)("IE_PROTO"), a = Object.prototype;
          e2.exports = Object.getPrototypeOf || function(e3) {
            return e3 = i(e3), n2(e3, o) ? e3[o] : "function" == typeof e3.constructor && e3 instanceof e3.constructor ? e3.constructor.prototype : e3 instanceof Object ? a : null;
          };
        }, 189: (e2, t2, r2) => {
          var n2 = r2(9181), i = r2(2110), o = r2(9315)(false), a = r2(9335)("IE_PROTO");
          e2.exports = function(e3, t3) {
            var r3, s = i(e3), p = 0, c = [];
            for (r3 in s)
              r3 != a && n2(s, r3) && c.push(r3);
            for (; t3.length > p; )
              n2(s, r3 = t3[p++]) && (~o(c, r3) || c.push(r3));
            return c;
          };
        }, 7184: (e2, t2, r2) => {
          var n2 = r2(189), i = r2(4430);
          e2.exports = Object.keys || function(e3) {
            return n2(e3, i);
          };
        }, 4682: (e2, t2) => {
          t2.f = {}.propertyIsEnumerable;
        }, 3160: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(5645), o = r2(4253);
          e2.exports = function(e3, t3) {
            var r3 = (i.Object || {})[e3] || Object[e3], a = {};
            a[e3] = t3(r3), n2(n2.S + n2.F * o(function() {
              r3(1);
            }), "Object", a);
          };
        }, 1131: (e2, t2, r2) => {
          var n2 = r2(7057), i = r2(7184), o = r2(2110), a = r2(4682).f;
          e2.exports = function(e3) {
            return function(t3) {
              for (var r3, s = o(t3), p = i(s), c = p.length, d = 0, l = []; c > d; )
                r3 = p[d++], n2 && !a.call(s, r3) || l.push(e3 ? [r3, s[r3]] : s[r3]);
              return l;
            };
          };
        }, 7643: (e2, t2, r2) => {
          var n2 = r2(616), i = r2(4548), o = r2(7007), a = r2(3816).Reflect;
          e2.exports = a && a.ownKeys || function(e3) {
            var t3 = n2.f(o(e3)), r3 = i.f;
            return r3 ? t3.concat(r3(e3)) : t3;
          };
        }, 7743: (e2, t2, r2) => {
          var n2 = r2(3816).parseFloat, i = r2(9599).trim;
          e2.exports = 1 / n2(r2(4644) + "-0") != -1 / 0 ? function(e3) {
            var t3 = i(String(e3), 3), r3 = n2(t3);
            return 0 === r3 && "-" == t3.charAt(0) ? -0 : r3;
          } : n2;
        }, 5960: (e2, t2, r2) => {
          var n2 = r2(3816).parseInt, i = r2(9599).trim, o = r2(4644), a = /^[-+]?0[xX]/;
          e2.exports = 8 !== n2(o + "08") || 22 !== n2(o + "0x16") ? function(e3, t3) {
            var r3 = i(String(e3), 3);
            return n2(r3, t3 >>> 0 || (a.test(r3) ? 16 : 10));
          } : n2;
        }, 188: (e2) => {
          e2.exports = function(e3) {
            try {
              return { e: false, v: e3() };
            } catch (e4) {
              return { e: true, v: e4 };
            }
          };
        }, 94: (e2, t2, r2) => {
          var n2 = r2(7007), i = r2(5286), o = r2(3499);
          e2.exports = function(e3, t3) {
            if (n2(e3), i(t3) && t3.constructor === e3)
              return t3;
            var r3 = o.f(e3);
            return (0, r3.resolve)(t3), r3.promise;
          };
        }, 681: (e2) => {
          e2.exports = function(e3, t2) {
            return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t2 };
          };
        }, 4408: (e2, t2, r2) => {
          var n2 = r2(7234);
          e2.exports = function(e3, t3, r3) {
            for (var i in t3)
              n2(e3, i, t3[i], r3);
            return e3;
          };
        }, 7234: (e2, t2, r2) => {
          var n2 = r2(3816), i = r2(7728), o = r2(9181), a = r2(3953)("src"), s = r2(18), p = "toString", c = ("" + s).split(p);
          r2(5645).inspectSource = function(e3) {
            return s.call(e3);
          }, (e2.exports = function(e3, t3, r3, s2) {
            var p2 = "function" == typeof r3;
            p2 && (o(r3, "name") || i(r3, "name", t3)), e3[t3] !== r3 && (p2 && (o(r3, a) || i(r3, a, e3[t3] ? "" + e3[t3] : c.join(String(t3)))), e3 === n2 ? e3[t3] = r3 : s2 ? e3[t3] ? e3[t3] = r3 : i(e3, t3, r3) : (delete e3[t3], i(e3, t3, r3)));
          })(Function.prototype, p, function() {
            return "function" == typeof this && this[a] || s.call(this);
          });
        }, 7787: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(1488), i = RegExp.prototype.exec;
          e2.exports = function(e3, t3) {
            var r3 = e3.exec;
            if ("function" == typeof r3) {
              var o = r3.call(e3, t3);
              if ("object" != typeof o)
                throw new TypeError("RegExp exec method returned something other than an Object or null");
              return o;
            }
            if ("RegExp" !== n2(e3))
              throw new TypeError("RegExp#exec called on incompatible receiver");
            return i.call(e3, t3);
          };
        }, 1165: (e2, t2, r2) => {
          "use strict";
          var n2, i, o = r2(3218), a = RegExp.prototype.exec, s = String.prototype.replace, p = a, c = (n2 = /a/, i = /b*/g, a.call(n2, "a"), a.call(i, "a"), 0 !== n2.lastIndex || 0 !== i.lastIndex), d = void 0 !== /()??/.exec("")[1];
          (c || d) && (p = function(e3) {
            var t3, r3, n3, i2, p2 = this;
            return d && (r3 = new RegExp("^" + p2.source + "$(?!\\s)", o.call(p2))), c && (t3 = p2.lastIndex), n3 = a.call(p2, e3), c && n3 && (p2.lastIndex = p2.global ? n3.index + n3[0].length : t3), d && n3 && n3.length > 1 && s.call(n3[0], r3, function() {
              for (i2 = 1; i2 < arguments.length - 2; i2++)
                void 0 === arguments[i2] && (n3[i2] = void 0);
            }), n3;
          }), e2.exports = p;
        }, 5496: (e2) => {
          e2.exports = function(e3, t2) {
            var r2 = t2 === Object(t2) ? function(e4) {
              return t2[e4];
            } : t2;
            return function(t3) {
              return String(t3).replace(e3, r2);
            };
          };
        }, 7195: (e2) => {
          e2.exports = Object.is || function(e3, t2) {
            return e3 === t2 ? 0 !== e3 || 1 / e3 == 1 / t2 : e3 != e3 && t2 != t2;
          };
        }, 1024: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(4963), o = r2(741), a = r2(3531);
          e2.exports = function(e3) {
            n2(n2.S, e3, { from: function(e4) {
              var t3, r3, n3, s, p = arguments[1];
              return i(this), (t3 = void 0 !== p) && i(p), null == e4 ? new this() : (r3 = [], t3 ? (n3 = 0, s = o(p, arguments[2], 2), a(e4, false, function(e5) {
                r3.push(s(e5, n3++));
              })) : a(e4, false, r3.push, r3), new this(r3));
            } });
          };
        }, 4881: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985);
          e2.exports = function(e3) {
            n2(n2.S, e3, { of: function() {
              for (var e4 = arguments.length, t3 = new Array(e4); e4--; )
                t3[e4] = arguments[e4];
              return new this(t3);
            } });
          };
        }, 7375: (e2, t2, r2) => {
          var n2 = r2(5286), i = r2(7007), o = function(e3, t3) {
            if (i(e3), !n2(t3) && null !== t3)
              throw TypeError(t3 + ": can't set as prototype!");
          };
          e2.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e3, t3, n3) {
            try {
              (n3 = r2(741)(Function.call, r2(8693).f(Object.prototype, "__proto__").set, 2))(e3, []), t3 = !(e3 instanceof Array);
            } catch (e4) {
              t3 = true;
            }
            return function(e4, r3) {
              return o(e4, r3), t3 ? e4.__proto__ = r3 : n3(e4, r3), e4;
            };
          }({}, false) : void 0), check: o };
        }, 2974: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(3816), i = r2(9275), o = r2(7057), a = r2(6314)("species");
          e2.exports = function(e3) {
            var t3 = n2[e3];
            o && t3 && !t3[a] && i.f(t3, a, { configurable: true, get: function() {
              return this;
            } });
          };
        }, 2943: (e2, t2, r2) => {
          var n2 = r2(9275).f, i = r2(9181), o = r2(6314)("toStringTag");
          e2.exports = function(e3, t3, r3) {
            e3 && !i(e3 = r3 ? e3 : e3.prototype, o) && n2(e3, o, { configurable: true, value: t3 });
          };
        }, 9335: (e2, t2, r2) => {
          var n2 = r2(3825)("keys"), i = r2(3953);
          e2.exports = function(e3) {
            return n2[e3] || (n2[e3] = i(e3));
          };
        }, 3825: (e2, t2, r2) => {
          var n2 = r2(5645), i = r2(3816), o = "__core-js_shared__", a = i[o] || (i[o] = {});
          (e2.exports = function(e3, t3) {
            return a[e3] || (a[e3] = void 0 !== t3 ? t3 : {});
          })("versions", []).push({ version: n2.version, mode: r2(4461) ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
        }, 8364: (e2, t2, r2) => {
          var n2 = r2(7007), i = r2(4963), o = r2(6314)("species");
          e2.exports = function(e3, t3) {
            var r3, a = n2(e3).constructor;
            return void 0 === a || null == (r3 = n2(a)[o]) ? t3 : i(r3);
          };
        }, 7717: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4253);
          e2.exports = function(e3, t3) {
            return !!e3 && n2(function() {
              t3 ? e3.call(null, function() {
              }, 1) : e3.call(null);
            });
          };
        }, 4496: (e2, t2, r2) => {
          var n2 = r2(1467), i = r2(1355);
          e2.exports = function(e3) {
            return function(t3, r3) {
              var o, a, s = String(i(t3)), p = n2(r3), c = s.length;
              return p < 0 || p >= c ? e3 ? "" : void 0 : (o = s.charCodeAt(p)) < 55296 || o > 56319 || p + 1 === c || (a = s.charCodeAt(p + 1)) < 56320 || a > 57343 ? e3 ? s.charAt(p) : o : e3 ? s.slice(p, p + 2) : a - 56320 + (o - 55296 << 10) + 65536;
            };
          };
        }, 2094: (e2, t2, r2) => {
          var n2 = r2(5364), i = r2(1355);
          e2.exports = function(e3, t3, r3) {
            if (n2(t3))
              throw TypeError("String#" + r3 + " doesn't accept regex!");
            return String(i(e3));
          };
        }, 9395: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(4253), o = r2(1355), a = /"/g, s = function(e3, t3, r3, n3) {
            var i2 = String(o(e3)), s2 = "<" + t3;
            return "" !== r3 && (s2 += " " + r3 + '="' + String(n3).replace(a, "&quot;") + '"'), s2 + ">" + i2 + "</" + t3 + ">";
          };
          e2.exports = function(e3, t3) {
            var r3 = {};
            r3[e3] = t3(s), n2(n2.P + n2.F * i(function() {
              var t4 = ""[e3]('"');
              return t4 !== t4.toLowerCase() || t4.split('"').length > 3;
            }), "String", r3);
          };
        }, 5442: (e2, t2, r2) => {
          var n2 = r2(875), i = r2(8595), o = r2(1355);
          e2.exports = function(e3, t3, r3, a) {
            var s = String(o(e3)), p = s.length, c = void 0 === r3 ? " " : String(r3), d = n2(t3);
            if (d <= p || "" == c)
              return s;
            var l = d - p, u = i.call(c, Math.ceil(l / c.length));
            return u.length > l && (u = u.slice(0, l)), a ? u + s : s + u;
          };
        }, 8595: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(1467), i = r2(1355);
          e2.exports = function(e3) {
            var t3 = String(i(this)), r3 = "", o = n2(e3);
            if (o < 0 || o == 1 / 0)
              throw RangeError("Count can't be negative");
            for (; o > 0; (o >>>= 1) && (t3 += t3))
              1 & o && (r3 += t3);
            return r3;
          };
        }, 9599: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(1355), o = r2(4253), a = r2(4644), s = "[" + a + "]", p = RegExp("^" + s + s + "*"), c = RegExp(s + s + "*$"), d = function(e3, t3, r3) {
            var i2 = {}, s2 = o(function() {
              return !!a[e3]() || "\u200B\x85" != "\u200B\x85"[e3]();
            }), p2 = i2[e3] = s2 ? t3(l) : a[e3];
            r3 && (i2[r3] = p2), n2(n2.P + n2.F * s2, "String", i2);
          }, l = d.trim = function(e3, t3) {
            return e3 = String(i(e3)), 1 & t3 && (e3 = e3.replace(p, "")), 2 & t3 && (e3 = e3.replace(c, "")), e3;
          };
          e2.exports = d;
        }, 4644: (e2) => {
          e2.exports = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        }, 4193: (e2, t2, r2) => {
          var n2, i, o, a = r2(741), s = r2(7242), p = r2(639), c = r2(2457), d = r2(3816), l = d.process, u = d.setImmediate, m = d.clearImmediate, h = d.MessageChannel, f = d.Dispatch, y = 0, g = {}, b = "onreadystatechange", v = function() {
            var e3 = +this;
            if (g.hasOwnProperty(e3)) {
              var t3 = g[e3];
              delete g[e3], t3();
            }
          }, w = function(e3) {
            v.call(e3.data);
          };
          u && m || (u = function(e3) {
            for (var t3 = [], r3 = 1; arguments.length > r3; )
              t3.push(arguments[r3++]);
            return g[++y] = function() {
              s("function" == typeof e3 ? e3 : Function(e3), t3);
            }, n2(y), y;
          }, m = function(e3) {
            delete g[e3];
          }, "process" == r2(2032)(l) ? n2 = function(e3) {
            l.nextTick(a(v, e3, 1));
          } : f && f.now ? n2 = function(e3) {
            f.now(a(v, e3, 1));
          } : h ? (o = (i = new h()).port2, i.port1.onmessage = w, n2 = a(o.postMessage, o, 1)) : d.addEventListener && "function" == typeof postMessage && !d.importScripts ? (n2 = function(e3) {
            d.postMessage(e3 + "", "*");
          }, d.addEventListener("message", w, false)) : n2 = b in c("script") ? function(e3) {
            p.appendChild(c("script")).onreadystatechange = function() {
              p.removeChild(this), v.call(e3);
            };
          } : function(e3) {
            setTimeout(a(v, e3, 1), 0);
          }), e2.exports = { set: u, clear: m };
        }, 2337: (e2, t2, r2) => {
          var n2 = r2(1467), i = Math.max, o = Math.min;
          e2.exports = function(e3, t3) {
            return (e3 = n2(e3)) < 0 ? i(e3 + t3, 0) : o(e3, t3);
          };
        }, 4843: (e2, t2, r2) => {
          var n2 = r2(1467), i = r2(875);
          e2.exports = function(e3) {
            if (void 0 === e3)
              return 0;
            var t3 = n2(e3), r3 = i(t3);
            if (t3 !== r3)
              throw RangeError("Wrong length!");
            return r3;
          };
        }, 1467: (e2) => {
          var t2 = Math.ceil, r2 = Math.floor;
          e2.exports = function(e3) {
            return isNaN(e3 = +e3) ? 0 : (e3 > 0 ? r2 : t2)(e3);
          };
        }, 2110: (e2, t2, r2) => {
          var n2 = r2(9797), i = r2(1355);
          e2.exports = function(e3) {
            return n2(i(e3));
          };
        }, 875: (e2, t2, r2) => {
          var n2 = r2(1467), i = Math.min;
          e2.exports = function(e3) {
            return e3 > 0 ? i(n2(e3), 9007199254740991) : 0;
          };
        }, 508: (e2, t2, r2) => {
          var n2 = r2(1355);
          e2.exports = function(e3) {
            return Object(n2(e3));
          };
        }, 1689: (e2, t2, r2) => {
          var n2 = r2(5286);
          e2.exports = function(e3, t3) {
            if (!n2(e3))
              return e3;
            var r3, i;
            if (t3 && "function" == typeof (r3 = e3.toString) && !n2(i = r3.call(e3)))
              return i;
            if ("function" == typeof (r3 = e3.valueOf) && !n2(i = r3.call(e3)))
              return i;
            if (!t3 && "function" == typeof (r3 = e3.toString) && !n2(i = r3.call(e3)))
              return i;
            throw TypeError("Can't convert object to primitive value");
          };
        }, 8440: (e2, t2, r2) => {
          "use strict";
          if (r2(7057)) {
            var n2 = r2(4461), i = r2(3816), o = r2(4253), a = r2(2985), s = r2(9383), p = r2(1125), c = r2(741), d = r2(3328), l = r2(681), u = r2(7728), m = r2(4408), h = r2(1467), f = r2(875), y = r2(4843), g = r2(2337), b = r2(1689), v = r2(9181), w = r2(1488), S = r2(5286), I = r2(508), x = r2(6555), T = r2(2503), k = r2(468), C = r2(616).f, R = r2(9002), $ = r2(3953), O = r2(6314), A = r2(50), P = r2(9315), D = r2(8364), j = r2(6997), N = r2(2803), E = r2(7462), M = r2(2974), F = r2(6852), q = r2(5216), L = r2(9275), B = r2(8693), U = L.f, W = B.f, _ = i.RangeError, H = i.TypeError, V = i.Uint8Array, G = "ArrayBuffer", z = "SharedArrayBuffer", J = "BYTES_PER_ELEMENT", X = Array.prototype, K = p.ArrayBuffer, Y = p.DataView, Q = A(0), Z = A(2), ee = A(3), te = A(4), re = A(5), ne = A(6), ie = P(true), oe = P(false), ae = j.values, se = j.keys, pe = j.entries, ce = X.lastIndexOf, de = X.reduce, le = X.reduceRight, ue = X.join, me = X.sort, he = X.slice, fe = X.toString, ye = X.toLocaleString, ge = O("iterator"), be = O("toStringTag"), ve = $("typed_constructor"), we = $("def_constructor"), Se = s.CONSTR, Ie = s.TYPED, xe = s.VIEW, Te = "Wrong length!", ke = A(1, function(e3, t3) {
              return Ae(D(e3, e3[we]), t3);
            }), Ce = o(function() {
              return 1 === new V(new Uint16Array([1]).buffer)[0];
            }), Re = !!V && !!V.prototype.set && o(function() {
              new V(1).set({});
            }), $e = function(e3, t3) {
              var r3 = h(e3);
              if (r3 < 0 || r3 % t3)
                throw _("Wrong offset!");
              return r3;
            }, Oe = function(e3) {
              if (S(e3) && Ie in e3)
                return e3;
              throw H(e3 + " is not a typed array!");
            }, Ae = function(e3, t3) {
              if (!S(e3) || !(ve in e3))
                throw H("It is not a typed array constructor!");
              return new e3(t3);
            }, Pe = function(e3, t3) {
              return De(D(e3, e3[we]), t3);
            }, De = function(e3, t3) {
              for (var r3 = 0, n3 = t3.length, i2 = Ae(e3, n3); n3 > r3; )
                i2[r3] = t3[r3++];
              return i2;
            }, je = function(e3, t3, r3) {
              U(e3, t3, { get: function() {
                return this._d[r3];
              } });
            }, Ne = function(e3) {
              var t3, r3, n3, i2, o2, a2, s2 = I(e3), p2 = arguments.length, d2 = p2 > 1 ? arguments[1] : void 0, l2 = void 0 !== d2, u2 = R(s2);
              if (null != u2 && !x(u2)) {
                for (a2 = u2.call(s2), n3 = [], t3 = 0; !(o2 = a2.next()).done; t3++)
                  n3.push(o2.value);
                s2 = n3;
              }
              for (l2 && p2 > 2 && (d2 = c(d2, arguments[2], 2)), t3 = 0, r3 = f(s2.length), i2 = Ae(this, r3); r3 > t3; t3++)
                i2[t3] = l2 ? d2(s2[t3], t3) : s2[t3];
              return i2;
            }, Ee = function() {
              for (var e3 = 0, t3 = arguments.length, r3 = Ae(this, t3); t3 > e3; )
                r3[e3] = arguments[e3++];
              return r3;
            }, Me = !!V && o(function() {
              ye.call(new V(1));
            }), Fe = function() {
              return ye.apply(Me ? he.call(Oe(this)) : Oe(this), arguments);
            }, qe = { copyWithin: function(e3, t3) {
              return q.call(Oe(this), e3, t3, arguments.length > 2 ? arguments[2] : void 0);
            }, every: function(e3) {
              return te(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            }, fill: function(e3) {
              return F.apply(Oe(this), arguments);
            }, filter: function(e3) {
              return Pe(this, Z(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0));
            }, find: function(e3) {
              return re(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            }, findIndex: function(e3) {
              return ne(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            }, forEach: function(e3) {
              Q(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            }, indexOf: function(e3) {
              return oe(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            }, includes: function(e3) {
              return ie(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            }, join: function(e3) {
              return ue.apply(Oe(this), arguments);
            }, lastIndexOf: function(e3) {
              return ce.apply(Oe(this), arguments);
            }, map: function(e3) {
              return ke(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            }, reduce: function(e3) {
              return de.apply(Oe(this), arguments);
            }, reduceRight: function(e3) {
              return le.apply(Oe(this), arguments);
            }, reverse: function() {
              for (var e3, t3 = this, r3 = Oe(t3).length, n3 = Math.floor(r3 / 2), i2 = 0; i2 < n3; )
                e3 = t3[i2], t3[i2++] = t3[--r3], t3[r3] = e3;
              return t3;
            }, some: function(e3) {
              return ee(Oe(this), e3, arguments.length > 1 ? arguments[1] : void 0);
            }, sort: function(e3) {
              return me.call(Oe(this), e3);
            }, subarray: function(e3, t3) {
              var r3 = Oe(this), n3 = r3.length, i2 = g(e3, n3);
              return new (D(r3, r3[we]))(r3.buffer, r3.byteOffset + i2 * r3.BYTES_PER_ELEMENT, f((void 0 === t3 ? n3 : g(t3, n3)) - i2));
            } }, Le = function(e3, t3) {
              return Pe(this, he.call(Oe(this), e3, t3));
            }, Be = function(e3) {
              Oe(this);
              var t3 = $e(arguments[1], 1), r3 = this.length, n3 = I(e3), i2 = f(n3.length), o2 = 0;
              if (i2 + t3 > r3)
                throw _(Te);
              for (; o2 < i2; )
                this[t3 + o2] = n3[o2++];
            }, Ue = { entries: function() {
              return pe.call(Oe(this));
            }, keys: function() {
              return se.call(Oe(this));
            }, values: function() {
              return ae.call(Oe(this));
            } }, We = function(e3, t3) {
              return S(e3) && e3[Ie] && "symbol" != typeof t3 && t3 in e3 && String(+t3) == String(t3);
            }, _e = function(e3, t3) {
              return We(e3, t3 = b(t3, true)) ? l(2, e3[t3]) : W(e3, t3);
            }, He = function(e3, t3, r3) {
              return !(We(e3, t3 = b(t3, true)) && S(r3) && v(r3, "value")) || v(r3, "get") || v(r3, "set") || r3.configurable || v(r3, "writable") && !r3.writable || v(r3, "enumerable") && !r3.enumerable ? U(e3, t3, r3) : (e3[t3] = r3.value, e3);
            };
            Se || (B.f = _e, L.f = He), a(a.S + a.F * !Se, "Object", { getOwnPropertyDescriptor: _e, defineProperty: He }), o(function() {
              fe.call({});
            }) && (fe = ye = function() {
              return ue.call(this);
            });
            var Ve = m({}, qe);
            m(Ve, Ue), u(Ve, ge, Ue.values), m(Ve, { slice: Le, set: Be, constructor: function() {
            }, toString: fe, toLocaleString: Fe }), je(Ve, "buffer", "b"), je(Ve, "byteOffset", "o"), je(Ve, "byteLength", "l"), je(Ve, "length", "e"), U(Ve, be, { get: function() {
              return this[Ie];
            } }), e2.exports = function(e3, t3, r3, p2) {
              var c2 = e3 + ((p2 = !!p2) ? "Clamped" : "") + "Array", l2 = "get" + e3, m2 = "set" + e3, h2 = i[c2], g2 = h2 || {}, b2 = h2 && k(h2), v2 = !h2 || !s.ABV, I2 = {}, x2 = h2 && h2.prototype, R2 = function(e4, r4) {
                U(e4, r4, { get: function() {
                  return function(e5, r5) {
                    var n3 = e5._d;
                    return n3.v[l2](r5 * t3 + n3.o, Ce);
                  }(this, r4);
                }, set: function(e5) {
                  return function(e6, r5, n3) {
                    var i2 = e6._d;
                    p2 && (n3 = (n3 = Math.round(n3)) < 0 ? 0 : n3 > 255 ? 255 : 255 & n3), i2.v[m2](r5 * t3 + i2.o, n3, Ce);
                  }(this, r4, e5);
                }, enumerable: true });
              };
              v2 ? (h2 = r3(function(e4, r4, n3, i2) {
                d(e4, h2, c2, "_d");
                var o2, a2, s2, p3, l3 = 0, m3 = 0;
                if (S(r4)) {
                  if (!(r4 instanceof K || (p3 = w(r4)) == G || p3 == z))
                    return Ie in r4 ? De(h2, r4) : Ne.call(h2, r4);
                  o2 = r4, m3 = $e(n3, t3);
                  var g3 = r4.byteLength;
                  if (void 0 === i2) {
                    if (g3 % t3)
                      throw _(Te);
                    if ((a2 = g3 - m3) < 0)
                      throw _(Te);
                  } else if ((a2 = f(i2) * t3) + m3 > g3)
                    throw _(Te);
                  s2 = a2 / t3;
                } else
                  s2 = y(r4), o2 = new K(a2 = s2 * t3);
                for (u(e4, "_d", { b: o2, o: m3, l: a2, e: s2, v: new Y(o2) }); l3 < s2; )
                  R2(e4, l3++);
              }), x2 = h2.prototype = T(Ve), u(x2, "constructor", h2)) : o(function() {
                h2(1);
              }) && o(function() {
                new h2(-1);
              }) && E(function(e4) {
                new h2(), new h2(null), new h2(1.5), new h2(e4);
              }, true) || (h2 = r3(function(e4, r4, n3, i2) {
                var o2;
                return d(e4, h2, c2), S(r4) ? r4 instanceof K || (o2 = w(r4)) == G || o2 == z ? void 0 !== i2 ? new g2(r4, $e(n3, t3), i2) : void 0 !== n3 ? new g2(r4, $e(n3, t3)) : new g2(r4) : Ie in r4 ? De(h2, r4) : Ne.call(h2, r4) : new g2(y(r4));
              }), Q(b2 !== Function.prototype ? C(g2).concat(C(b2)) : C(g2), function(e4) {
                e4 in h2 || u(h2, e4, g2[e4]);
              }), h2.prototype = x2, n2 || (x2.constructor = h2));
              var $2 = x2[ge], O2 = !!$2 && ("values" == $2.name || null == $2.name), A2 = Ue.values;
              u(h2, ve, true), u(x2, Ie, c2), u(x2, xe, true), u(x2, we, h2), (p2 ? new h2(1)[be] == c2 : be in x2) || U(x2, be, { get: function() {
                return c2;
              } }), I2[c2] = h2, a(a.G + a.W + a.F * (h2 != g2), I2), a(a.S, c2, { BYTES_PER_ELEMENT: t3 }), a(a.S + a.F * o(function() {
                g2.of.call(h2, 1);
              }), c2, { from: Ne, of: Ee }), J in x2 || u(x2, J, t3), a(a.P, c2, qe), M(c2), a(a.P + a.F * Re, c2, { set: Be }), a(a.P + a.F * !O2, c2, Ue), n2 || x2.toString == fe || (x2.toString = fe), a(a.P + a.F * o(function() {
                new h2(1).slice();
              }), c2, { slice: Le }), a(a.P + a.F * (o(function() {
                return [1, 2].toLocaleString() != new h2([1, 2]).toLocaleString();
              }) || !o(function() {
                x2.toLocaleString.call([1, 2]);
              })), c2, { toLocaleString: Fe }), N[c2] = O2 ? $2 : A2, n2 || O2 || u(x2, ge, A2);
            };
          } else
            e2.exports = function() {
            };
        }, 1125: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(3816), i = r2(7057), o = r2(4461), a = r2(9383), s = r2(7728), p = r2(4408), c = r2(4253), d = r2(3328), l = r2(1467), u = r2(875), m = r2(4843), h = r2(616).f, f = r2(9275).f, y = r2(6852), g = r2(2943), b = "ArrayBuffer", v = "DataView", w = "Wrong index!", S = n2.ArrayBuffer, I = n2.DataView, x = n2.Math, T = n2.RangeError, k = n2.Infinity, C = S, R = x.abs, $ = x.pow, O = x.floor, A = x.log, P = x.LN2, D = "buffer", j = "byteLength", N = "byteOffset", E = i ? "_b" : D, M = i ? "_l" : j, F = i ? "_o" : N;
          function q(e3, t3, r3) {
            var n3, i2, o2, a2 = new Array(r3), s2 = 8 * r3 - t3 - 1, p2 = (1 << s2) - 1, c2 = p2 >> 1, d2 = 23 === t3 ? $(2, -24) - $(2, -77) : 0, l2 = 0, u2 = e3 < 0 || 0 === e3 && 1 / e3 < 0 ? 1 : 0;
            for ((e3 = R(e3)) != e3 || e3 === k ? (i2 = e3 != e3 ? 1 : 0, n3 = p2) : (n3 = O(A(e3) / P), e3 * (o2 = $(2, -n3)) < 1 && (n3--, o2 *= 2), (e3 += n3 + c2 >= 1 ? d2 / o2 : d2 * $(2, 1 - c2)) * o2 >= 2 && (n3++, o2 /= 2), n3 + c2 >= p2 ? (i2 = 0, n3 = p2) : n3 + c2 >= 1 ? (i2 = (e3 * o2 - 1) * $(2, t3), n3 += c2) : (i2 = e3 * $(2, c2 - 1) * $(2, t3), n3 = 0)); t3 >= 8; a2[l2++] = 255 & i2, i2 /= 256, t3 -= 8)
              ;
            for (n3 = n3 << t3 | i2, s2 += t3; s2 > 0; a2[l2++] = 255 & n3, n3 /= 256, s2 -= 8)
              ;
            return a2[--l2] |= 128 * u2, a2;
          }
          function L(e3, t3, r3) {
            var n3, i2 = 8 * r3 - t3 - 1, o2 = (1 << i2) - 1, a2 = o2 >> 1, s2 = i2 - 7, p2 = r3 - 1, c2 = e3[p2--], d2 = 127 & c2;
            for (c2 >>= 7; s2 > 0; d2 = 256 * d2 + e3[p2], p2--, s2 -= 8)
              ;
            for (n3 = d2 & (1 << -s2) - 1, d2 >>= -s2, s2 += t3; s2 > 0; n3 = 256 * n3 + e3[p2], p2--, s2 -= 8)
              ;
            if (0 === d2)
              d2 = 1 - a2;
            else {
              if (d2 === o2)
                return n3 ? NaN : c2 ? -k : k;
              n3 += $(2, t3), d2 -= a2;
            }
            return (c2 ? -1 : 1) * n3 * $(2, d2 - t3);
          }
          function B(e3) {
            return e3[3] << 24 | e3[2] << 16 | e3[1] << 8 | e3[0];
          }
          function U(e3) {
            return [255 & e3];
          }
          function W(e3) {
            return [255 & e3, e3 >> 8 & 255];
          }
          function _(e3) {
            return [255 & e3, e3 >> 8 & 255, e3 >> 16 & 255, e3 >> 24 & 255];
          }
          function H(e3) {
            return q(e3, 52, 8);
          }
          function V(e3) {
            return q(e3, 23, 4);
          }
          function G(e3, t3, r3) {
            f(e3.prototype, t3, { get: function() {
              return this[r3];
            } });
          }
          function z(e3, t3, r3, n3) {
            var i2 = m(+r3);
            if (i2 + t3 > e3[M])
              throw T(w);
            var o2 = e3[E]._b, a2 = i2 + e3[F], s2 = o2.slice(a2, a2 + t3);
            return n3 ? s2 : s2.reverse();
          }
          function J(e3, t3, r3, n3, i2, o2) {
            var a2 = m(+r3);
            if (a2 + t3 > e3[M])
              throw T(w);
            for (var s2 = e3[E]._b, p2 = a2 + e3[F], c2 = n3(+i2), d2 = 0; d2 < t3; d2++)
              s2[p2 + d2] = c2[o2 ? d2 : t3 - d2 - 1];
          }
          if (a.ABV) {
            if (!c(function() {
              S(1);
            }) || !c(function() {
              new S(-1);
            }) || c(function() {
              return new S(), new S(1.5), new S(NaN), S.name != b;
            })) {
              for (var X, K = (S = function(e3) {
                return d(this, S), new C(m(e3));
              }).prototype = C.prototype, Y = h(C), Q = 0; Y.length > Q; )
                (X = Y[Q++]) in S || s(S, X, C[X]);
              o || (K.constructor = S);
            }
            var Z = new I(new S(2)), ee = I.prototype.setInt8;
            Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || p(I.prototype, { setInt8: function(e3, t3) {
              ee.call(this, e3, t3 << 24 >> 24);
            }, setUint8: function(e3, t3) {
              ee.call(this, e3, t3 << 24 >> 24);
            } }, true);
          } else
            S = function(e3) {
              d(this, S, b);
              var t3 = m(e3);
              this._b = y.call(new Array(t3), 0), this[M] = t3;
            }, I = function(e3, t3, r3) {
              d(this, I, v), d(e3, S, v);
              var n3 = e3[M], i2 = l(t3);
              if (i2 < 0 || i2 > n3)
                throw T("Wrong offset!");
              if (i2 + (r3 = void 0 === r3 ? n3 - i2 : u(r3)) > n3)
                throw T("Wrong length!");
              this[E] = e3, this[F] = i2, this[M] = r3;
            }, i && (G(S, j, "_l"), G(I, D, "_b"), G(I, j, "_l"), G(I, N, "_o")), p(I.prototype, { getInt8: function(e3) {
              return z(this, 1, e3)[0] << 24 >> 24;
            }, getUint8: function(e3) {
              return z(this, 1, e3)[0];
            }, getInt16: function(e3) {
              var t3 = z(this, 2, e3, arguments[1]);
              return (t3[1] << 8 | t3[0]) << 16 >> 16;
            }, getUint16: function(e3) {
              var t3 = z(this, 2, e3, arguments[1]);
              return t3[1] << 8 | t3[0];
            }, getInt32: function(e3) {
              return B(z(this, 4, e3, arguments[1]));
            }, getUint32: function(e3) {
              return B(z(this, 4, e3, arguments[1])) >>> 0;
            }, getFloat32: function(e3) {
              return L(z(this, 4, e3, arguments[1]), 23, 4);
            }, getFloat64: function(e3) {
              return L(z(this, 8, e3, arguments[1]), 52, 8);
            }, setInt8: function(e3, t3) {
              J(this, 1, e3, U, t3);
            }, setUint8: function(e3, t3) {
              J(this, 1, e3, U, t3);
            }, setInt16: function(e3, t3) {
              J(this, 2, e3, W, t3, arguments[2]);
            }, setUint16: function(e3, t3) {
              J(this, 2, e3, W, t3, arguments[2]);
            }, setInt32: function(e3, t3) {
              J(this, 4, e3, _, t3, arguments[2]);
            }, setUint32: function(e3, t3) {
              J(this, 4, e3, _, t3, arguments[2]);
            }, setFloat32: function(e3, t3) {
              J(this, 4, e3, V, t3, arguments[2]);
            }, setFloat64: function(e3, t3) {
              J(this, 8, e3, H, t3, arguments[2]);
            } });
          g(S, b), g(I, v), s(I.prototype, a.VIEW, true), t2.ArrayBuffer = S, t2.DataView = I;
        }, 9383: (e2, t2, r2) => {
          for (var n2, i = r2(3816), o = r2(7728), a = r2(3953), s = a("typed_array"), p = a("view"), c = !(!i.ArrayBuffer || !i.DataView), d = c, l = 0, u = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9; )
            (n2 = i[u[l++]]) ? (o(n2.prototype, s, true), o(n2.prototype, p, true)) : d = false;
          e2.exports = { ABV: c, CONSTR: d, TYPED: s, VIEW: p };
        }, 3953: (e2) => {
          var t2 = 0, r2 = Math.random();
          e2.exports = function(e3) {
            return "Symbol(".concat(void 0 === e3 ? "" : e3, ")_", (++t2 + r2).toString(36));
          };
        }, 575: (e2, t2, r2) => {
          var n2 = r2(3816).navigator;
          e2.exports = n2 && n2.userAgent || "";
        }, 1616: (e2, t2, r2) => {
          var n2 = r2(5286);
          e2.exports = function(e3, t3) {
            if (!n2(e3) || e3._t !== t3)
              throw TypeError("Incompatible receiver, " + t3 + " required!");
            return e3;
          };
        }, 6074: (e2, t2, r2) => {
          var n2 = r2(3816), i = r2(5645), o = r2(4461), a = r2(8787), s = r2(9275).f;
          e2.exports = function(e3) {
            var t3 = i.Symbol || (i.Symbol = o ? {} : n2.Symbol || {});
            "_" == e3.charAt(0) || e3 in t3 || s(t3, e3, { value: a.f(e3) });
          };
        }, 8787: (e2, t2, r2) => {
          t2.f = r2(6314);
        }, 6314: (e2, t2, r2) => {
          var n2 = r2(3825)("wks"), i = r2(3953), o = r2(3816).Symbol, a = "function" == typeof o;
          (e2.exports = function(e3) {
            return n2[e3] || (n2[e3] = a && o[e3] || (a ? o : i)("Symbol." + e3));
          }).store = n2;
        }, 9002: (e2, t2, r2) => {
          var n2 = r2(1488), i = r2(6314)("iterator"), o = r2(2803);
          e2.exports = r2(5645).getIteratorMethod = function(e3) {
            if (null != e3)
              return e3[i] || e3["@@iterator"] || o[n2(e3)];
          };
        }, 1761: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(5496)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
          n2(n2.S, "RegExp", { escape: function(e3) {
            return i(e3);
          } });
        }, 2e3: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.P, "Array", { copyWithin: r2(5216) }), r2(7722)("copyWithin");
        }, 5745: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(50)(4);
          n2(n2.P + n2.F * !r2(7717)([].every, true), "Array", { every: function(e3) {
            return i(this, e3, arguments[1]);
          } });
        }, 8977: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.P, "Array", { fill: r2(6852) }), r2(7722)("fill");
        }, 8837: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(50)(2);
          n2(n2.P + n2.F * !r2(7717)([].filter, true), "Array", { filter: function(e3) {
            return i(this, e3, arguments[1]);
          } });
        }, 4899: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(50)(6), o = "findIndex", a = true;
          o in [] && Array(1)[o](function() {
            a = false;
          }), n2(n2.P + n2.F * a, "Array", { findIndex: function(e3) {
            return i(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), r2(7722)(o);
        }, 2310: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(50)(5), o = "find", a = true;
          o in [] && Array(1).find(function() {
            a = false;
          }), n2(n2.P + n2.F * a, "Array", { find: function(e3) {
            return i(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), r2(7722)(o);
        }, 4336: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(50)(0), o = r2(7717)([].forEach, true);
          n2(n2.P + n2.F * !o, "Array", { forEach: function(e3) {
            return i(this, e3, arguments[1]);
          } });
        }, 522: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(741), i = r2(2985), o = r2(508), a = r2(8851), s = r2(6555), p = r2(875), c = r2(2811), d = r2(9002);
          i(i.S + i.F * !r2(7462)(function(e3) {
            Array.from(e3);
          }), "Array", { from: function(e3) {
            var t3, r3, i2, l, u = o(e3), m = "function" == typeof this ? this : Array, h = arguments.length, f = h > 1 ? arguments[1] : void 0, y = void 0 !== f, g = 0, b = d(u);
            if (y && (f = n2(f, h > 2 ? arguments[2] : void 0, 2)), null == b || m == Array && s(b))
              for (r3 = new m(t3 = p(u.length)); t3 > g; g++)
                c(r3, g, y ? f(u[g], g) : u[g]);
            else
              for (l = b.call(u), r3 = new m(); !(i2 = l.next()).done; g++)
                c(r3, g, y ? a(l, f, [i2.value, g], true) : i2.value);
            return r3.length = g, r3;
          } });
        }, 3369: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(9315)(false), o = [].indexOf, a = !!o && 1 / [1].indexOf(1, -0) < 0;
          n2(n2.P + n2.F * (a || !r2(7717)(o)), "Array", { indexOf: function(e3) {
            return a ? o.apply(this, arguments) || 0 : i(this, e3, arguments[1]);
          } });
        }, 774: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Array", { isArray: r2(4302) });
        }, 6997: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(7722), i = r2(5436), o = r2(2803), a = r2(2110);
          e2.exports = r2(2923)(Array, "Array", function(e3, t3) {
            this._t = a(e3), this._i = 0, this._k = t3;
          }, function() {
            var e3 = this._t, t3 = this._k, r3 = this._i++;
            return !e3 || r3 >= e3.length ? (this._t = void 0, i(1)) : i(0, "keys" == t3 ? r3 : "values" == t3 ? e3[r3] : [r3, e3[r3]]);
          }, "values"), o.Arguments = o.Array, n2("keys"), n2("values"), n2("entries");
        }, 7842: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(2110), o = [].join;
          n2(n2.P + n2.F * (r2(9797) != Object || !r2(7717)(o)), "Array", { join: function(e3) {
            return o.call(i(this), void 0 === e3 ? "," : e3);
          } });
        }, 9564: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(2110), o = r2(1467), a = r2(875), s = [].lastIndexOf, p = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
          n2(n2.P + n2.F * (p || !r2(7717)(s)), "Array", { lastIndexOf: function(e3) {
            if (p)
              return s.apply(this, arguments) || 0;
            var t3 = i(this), r3 = a(t3.length), n3 = r3 - 1;
            for (arguments.length > 1 && (n3 = Math.min(n3, o(arguments[1]))), n3 < 0 && (n3 = r3 + n3); n3 >= 0; n3--)
              if (n3 in t3 && t3[n3] === e3)
                return n3 || 0;
            return -1;
          } });
        }, 1802: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(50)(1);
          n2(n2.P + n2.F * !r2(7717)([].map, true), "Array", { map: function(e3) {
            return i(this, e3, arguments[1]);
          } });
        }, 8295: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(2811);
          n2(n2.S + n2.F * r2(4253)(function() {
            function e3() {
            }
            return !(Array.of.call(e3) instanceof e3);
          }), "Array", { of: function() {
            for (var e3 = 0, t3 = arguments.length, r3 = new ("function" == typeof this ? this : Array)(t3); t3 > e3; )
              i(r3, e3, arguments[e3++]);
            return r3.length = t3, r3;
          } });
        }, 3750: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(7628);
          n2(n2.P + n2.F * !r2(7717)([].reduceRight, true), "Array", { reduceRight: function(e3) {
            return i(this, e3, arguments.length, arguments[1], true);
          } });
        }, 3057: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(7628);
          n2(n2.P + n2.F * !r2(7717)([].reduce, true), "Array", { reduce: function(e3) {
            return i(this, e3, arguments.length, arguments[1], false);
          } });
        }, 110: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(639), o = r2(2032), a = r2(2337), s = r2(875), p = [].slice;
          n2(n2.P + n2.F * r2(4253)(function() {
            i && p.call(i);
          }), "Array", { slice: function(e3, t3) {
            var r3 = s(this.length), n3 = o(this);
            if (t3 = void 0 === t3 ? r3 : t3, "Array" == n3)
              return p.call(this, e3, t3);
            for (var i2 = a(e3, r3), c = a(t3, r3), d = s(c - i2), l = new Array(d), u = 0; u < d; u++)
              l[u] = "String" == n3 ? this.charAt(i2 + u) : this[i2 + u];
            return l;
          } });
        }, 6773: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(50)(3);
          n2(n2.P + n2.F * !r2(7717)([].some, true), "Array", { some: function(e3) {
            return i(this, e3, arguments[1]);
          } });
        }, 75: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(4963), o = r2(508), a = r2(4253), s = [].sort, p = [1, 2, 3];
          n2(n2.P + n2.F * (a(function() {
            p.sort(void 0);
          }) || !a(function() {
            p.sort(null);
          }) || !r2(7717)(s)), "Array", { sort: function(e3) {
            return void 0 === e3 ? s.call(o(this)) : s.call(o(this), i(e3));
          } });
        }, 1842: (e2, t2, r2) => {
          r2(2974)("Array");
        }, 1822: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Date", { now: function() {
            return (/* @__PURE__ */ new Date()).getTime();
          } });
        }, 1031: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(3537);
          n2(n2.P + n2.F * (Date.prototype.toISOString !== i), "Date", { toISOString: i });
        }, 9977: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(508), o = r2(1689);
          n2(n2.P + n2.F * r2(4253)(function() {
            return null !== (/* @__PURE__ */ new Date(NaN)).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() {
              return 1;
            } });
          }), "Date", { toJSON: function(e3) {
            var t3 = i(this), r3 = o(t3);
            return "number" != typeof r3 || isFinite(r3) ? t3.toISOString() : null;
          } });
        }, 1560: (e2, t2, r2) => {
          var n2 = r2(6314)("toPrimitive"), i = Date.prototype;
          n2 in i || r2(7728)(i, n2, r2(870));
        }, 6331: (e2, t2, r2) => {
          var n2 = Date.prototype, i = "Invalid Date", o = "toString", a = n2.toString, s = n2.getTime;
          /* @__PURE__ */ new Date(NaN) + "" != i && r2(7234)(n2, o, function() {
            var e3 = s.call(this);
            return e3 == e3 ? a.call(this) : i;
          });
        }, 9730: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.P, "Function", { bind: r2(4398) });
        }, 8377: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(5286), i = r2(468), o = r2(6314)("hasInstance"), a = Function.prototype;
          o in a || r2(9275).f(a, o, { value: function(e3) {
            if ("function" != typeof this || !n2(e3))
              return false;
            if (!n2(this.prototype))
              return e3 instanceof this;
            for (; e3 = i(e3); )
              if (this.prototype === e3)
                return true;
            return false;
          } });
        }, 6059: (e2, t2, r2) => {
          var n2 = r2(9275).f, i = Function.prototype, o = /^\s*function ([^ (]*)/, a = "name";
          a in i || r2(7057) && n2(i, a, { configurable: true, get: function() {
            try {
              return ("" + this).match(o)[1];
            } catch (e3) {
              return "";
            }
          } });
        }, 8416: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(9824), i = r2(1616), o = "Map";
          e2.exports = r2(5795)(o, function(e3) {
            return function() {
              return e3(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { get: function(e3) {
            var t3 = n2.getEntry(i(this, o), e3);
            return t3 && t3.v;
          }, set: function(e3, t3) {
            return n2.def(i(this, o), 0 === e3 ? 0 : e3, t3);
          } }, n2, true);
        }, 6503: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(6206), o = Math.sqrt, a = Math.acosh;
          n2(n2.S + n2.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", { acosh: function(e3) {
            return (e3 = +e3) < 1 ? NaN : e3 > 9490626562425156e-8 ? Math.log(e3) + Math.LN2 : i(e3 - 1 + o(e3 - 1) * o(e3 + 1));
          } });
        }, 6786: (e2, t2, r2) => {
          var n2 = r2(2985), i = Math.asinh;
          n2(n2.S + n2.F * !(i && 1 / i(0) > 0), "Math", { asinh: function e3(t3) {
            return isFinite(t3 = +t3) && 0 != t3 ? t3 < 0 ? -e3(-t3) : Math.log(t3 + Math.sqrt(t3 * t3 + 1)) : t3;
          } });
        }, 932: (e2, t2, r2) => {
          var n2 = r2(2985), i = Math.atanh;
          n2(n2.S + n2.F * !(i && 1 / i(-0) < 0), "Math", { atanh: function(e3) {
            return 0 == (e3 = +e3) ? e3 : Math.log((1 + e3) / (1 - e3)) / 2;
          } });
        }, 7526: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(1801);
          n2(n2.S, "Math", { cbrt: function(e3) {
            return i(e3 = +e3) * Math.pow(Math.abs(e3), 1 / 3);
          } });
        }, 1591: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { clz32: function(e3) {
            return (e3 >>>= 0) ? 31 - Math.floor(Math.log(e3 + 0.5) * Math.LOG2E) : 32;
          } });
        }, 9073: (e2, t2, r2) => {
          var n2 = r2(2985), i = Math.exp;
          n2(n2.S, "Math", { cosh: function(e3) {
            return (i(e3 = +e3) + i(-e3)) / 2;
          } });
        }, 347: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(3086);
          n2(n2.S + n2.F * (i != Math.expm1), "Math", { expm1: i });
        }, 579: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { fround: r2(4934) });
        }, 4669: (e2, t2, r2) => {
          var n2 = r2(2985), i = Math.abs;
          n2(n2.S, "Math", { hypot: function(e3, t3) {
            for (var r3, n3, o = 0, a = 0, s = arguments.length, p = 0; a < s; )
              p < (r3 = i(arguments[a++])) ? (o = o * (n3 = p / r3) * n3 + 1, p = r3) : o += r3 > 0 ? (n3 = r3 / p) * n3 : r3;
            return p === 1 / 0 ? 1 / 0 : p * Math.sqrt(o);
          } });
        }, 7710: (e2, t2, r2) => {
          var n2 = r2(2985), i = Math.imul;
          n2(n2.S + n2.F * r2(4253)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length;
          }), "Math", { imul: function(e3, t3) {
            var r3 = 65535, n3 = +e3, i2 = +t3, o = r3 & n3, a = r3 & i2;
            return 0 | o * a + ((r3 & n3 >>> 16) * a + o * (r3 & i2 >>> 16) << 16 >>> 0);
          } });
        }, 5789: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { log10: function(e3) {
            return Math.log(e3) * Math.LOG10E;
          } });
        }, 3514: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { log1p: r2(6206) });
        }, 9978: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { log2: function(e3) {
            return Math.log(e3) / Math.LN2;
          } });
        }, 8472: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { sign: r2(1801) });
        }, 6946: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(3086), o = Math.exp;
          n2(n2.S + n2.F * r2(4253)(function() {
            return -2e-17 != !Math.sinh(-2e-17);
          }), "Math", { sinh: function(e3) {
            return Math.abs(e3 = +e3) < 1 ? (i(e3) - i(-e3)) / 2 : (o(e3 - 1) - o(-e3 - 1)) * (Math.E / 2);
          } });
        }, 5068: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(3086), o = Math.exp;
          n2(n2.S, "Math", { tanh: function(e3) {
            var t3 = i(e3 = +e3), r3 = i(-e3);
            return t3 == 1 / 0 ? 1 : r3 == 1 / 0 ? -1 : (t3 - r3) / (o(e3) + o(-e3));
          } });
        }, 413: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { trunc: function(e3) {
            return (e3 > 0 ? Math.floor : Math.ceil)(e3);
          } });
        }, 1246: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(3816), i = r2(9181), o = r2(2032), a = r2(266), s = r2(1689), p = r2(4253), c = r2(616).f, d = r2(8693).f, l = r2(9275).f, u = r2(9599).trim, m = "Number", h = n2.Number, f = h, y = h.prototype, g = o(r2(2503)(y)) == m, b = "trim" in String.prototype, v = function(e3) {
            var t3 = s(e3, false);
            if ("string" == typeof t3 && t3.length > 2) {
              var r3, n3, i2, o2 = (t3 = b ? t3.trim() : u(t3, 3)).charCodeAt(0);
              if (43 === o2 || 45 === o2) {
                if (88 === (r3 = t3.charCodeAt(2)) || 120 === r3)
                  return NaN;
              } else if (48 === o2) {
                switch (t3.charCodeAt(1)) {
                  case 66:
                  case 98:
                    n3 = 2, i2 = 49;
                    break;
                  case 79:
                  case 111:
                    n3 = 8, i2 = 55;
                    break;
                  default:
                    return +t3;
                }
                for (var a2, p2 = t3.slice(2), c2 = 0, d2 = p2.length; c2 < d2; c2++)
                  if ((a2 = p2.charCodeAt(c2)) < 48 || a2 > i2)
                    return NaN;
                return parseInt(p2, n3);
              }
            }
            return +t3;
          };
          if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
            h = function(e3) {
              var t3 = arguments.length < 1 ? 0 : e3, r3 = this;
              return r3 instanceof h && (g ? p(function() {
                y.valueOf.call(r3);
              }) : o(r3) != m) ? a(new f(v(t3)), r3, h) : v(t3);
            };
            for (var w, S = r2(7057) ? c(f) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), I = 0; S.length > I; I++)
              i(f, w = S[I]) && !i(h, w) && l(h, w, d(f, w));
            h.prototype = y, y.constructor = h, r2(7234)(n2, m, h);
          }
        }, 5972: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Number", { EPSILON: Math.pow(2, -52) });
        }, 3403: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(3816).isFinite;
          n2(n2.S, "Number", { isFinite: function(e3) {
            return "number" == typeof e3 && i(e3);
          } });
        }, 2516: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Number", { isInteger: r2(8367) });
        }, 9371: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Number", { isNaN: function(e3) {
            return e3 != e3;
          } });
        }, 6479: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(8367), o = Math.abs;
          n2(n2.S, "Number", { isSafeInteger: function(e3) {
            return i(e3) && o(e3) <= 9007199254740991;
          } });
        }, 1736: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
        }, 1889: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
        }, 5177: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(7743);
          n2(n2.S + n2.F * (Number.parseFloat != i), "Number", { parseFloat: i });
        }, 6943: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(5960);
          n2(n2.S + n2.F * (Number.parseInt != i), "Number", { parseInt: i });
        }, 726: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(1467), o = r2(3365), a = r2(8595), s = 1 .toFixed, p = Math.floor, c = [0, 0, 0, 0, 0, 0], d = "Number.toFixed: incorrect invocation!", l = "0", u = function(e3, t3) {
            for (var r3 = -1, n3 = t3; ++r3 < 6; )
              n3 += e3 * c[r3], c[r3] = n3 % 1e7, n3 = p(n3 / 1e7);
          }, m = function(e3) {
            for (var t3 = 6, r3 = 0; --t3 >= 0; )
              r3 += c[t3], c[t3] = p(r3 / e3), r3 = r3 % e3 * 1e7;
          }, h = function() {
            for (var e3 = 6, t3 = ""; --e3 >= 0; )
              if ("" !== t3 || 0 === e3 || 0 !== c[e3]) {
                var r3 = String(c[e3]);
                t3 = "" === t3 ? r3 : t3 + a.call(l, 7 - r3.length) + r3;
              }
            return t3;
          }, f = function(e3, t3, r3) {
            return 0 === t3 ? r3 : t3 % 2 == 1 ? f(e3, t3 - 1, r3 * e3) : f(e3 * e3, t3 / 2, r3);
          };
          n2(n2.P + n2.F * (!!s && ("0.000" !== 8e-5 .toFixed(3) || "1" !== 0.9 .toFixed(0) || "1.25" !== 1.255 .toFixed(2) || "1000000000000000128" !== 1000000000000000100 .toFixed(0)) || !r2(4253)(function() {
            s.call({});
          })), "Number", { toFixed: function(e3) {
            var t3, r3, n3, s2, p2 = o(this, d), c2 = i(e3), y = "", g = l;
            if (c2 < 0 || c2 > 20)
              throw RangeError(d);
            if (p2 != p2)
              return "NaN";
            if (p2 <= -1e21 || p2 >= 1e21)
              return String(p2);
            if (p2 < 0 && (y = "-", p2 = -p2), p2 > 1e-21)
              if (t3 = function(e4) {
                for (var t4 = 0, r4 = e4; r4 >= 4096; )
                  t4 += 12, r4 /= 4096;
                for (; r4 >= 2; )
                  t4 += 1, r4 /= 2;
                return t4;
              }(p2 * f(2, 69, 1)) - 69, r3 = t3 < 0 ? p2 * f(2, -t3, 1) : p2 / f(2, t3, 1), r3 *= 4503599627370496, (t3 = 52 - t3) > 0) {
                for (u(0, r3), n3 = c2; n3 >= 7; )
                  u(1e7, 0), n3 -= 7;
                for (u(f(10, n3, 1), 0), n3 = t3 - 1; n3 >= 23; )
                  m(1 << 23), n3 -= 23;
                m(1 << n3), u(1, 1), m(2), g = h();
              } else
                u(0, r3), u(1 << -t3, 0), g = h() + a.call(l, c2);
            return g = c2 > 0 ? y + ((s2 = g.length) <= c2 ? "0." + a.call(l, c2 - s2) + g : g.slice(0, s2 - c2) + "." + g.slice(s2 - c2)) : y + g;
          } });
        }, 1901: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(4253), o = r2(3365), a = 1 .toPrecision;
          n2(n2.P + n2.F * (i(function() {
            return "1" !== a.call(1, void 0);
          }) || !i(function() {
            a.call({});
          })), "Number", { toPrecision: function(e3) {
            var t3 = o(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === e3 ? a.call(t3) : a.call(t3, e3);
          } });
        }, 5115: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S + n2.F, "Object", { assign: r2(5345) });
        }, 8132: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Object", { create: r2(2503) });
        }, 7470: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S + n2.F * !r2(7057), "Object", { defineProperties: r2(5588) });
        }, 8388: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S + n2.F * !r2(7057), "Object", { defineProperty: r2(9275).f });
        }, 9375: (e2, t2, r2) => {
          var n2 = r2(5286), i = r2(4728).onFreeze;
          r2(3160)("freeze", function(e3) {
            return function(t3) {
              return e3 && n2(t3) ? e3(i(t3)) : t3;
            };
          });
        }, 4882: (e2, t2, r2) => {
          var n2 = r2(2110), i = r2(8693).f;
          r2(3160)("getOwnPropertyDescriptor", function() {
            return function(e3, t3) {
              return i(n2(e3), t3);
            };
          });
        }, 9622: (e2, t2, r2) => {
          r2(3160)("getOwnPropertyNames", function() {
            return r2(9327).f;
          });
        }, 1520: (e2, t2, r2) => {
          var n2 = r2(508), i = r2(468);
          r2(3160)("getPrototypeOf", function() {
            return function(e3) {
              return i(n2(e3));
            };
          });
        }, 9892: (e2, t2, r2) => {
          var n2 = r2(5286);
          r2(3160)("isExtensible", function(e3) {
            return function(t3) {
              return !!n2(t3) && (!e3 || e3(t3));
            };
          });
        }, 4157: (e2, t2, r2) => {
          var n2 = r2(5286);
          r2(3160)("isFrozen", function(e3) {
            return function(t3) {
              return !n2(t3) || !!e3 && e3(t3);
            };
          });
        }, 5095: (e2, t2, r2) => {
          var n2 = r2(5286);
          r2(3160)("isSealed", function(e3) {
            return function(t3) {
              return !n2(t3) || !!e3 && e3(t3);
            };
          });
        }, 9176: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Object", { is: r2(7195) });
        }, 7476: (e2, t2, r2) => {
          var n2 = r2(508), i = r2(7184);
          r2(3160)("keys", function() {
            return function(e3) {
              return i(n2(e3));
            };
          });
        }, 4672: (e2, t2, r2) => {
          var n2 = r2(5286), i = r2(4728).onFreeze;
          r2(3160)("preventExtensions", function(e3) {
            return function(t3) {
              return e3 && n2(t3) ? e3(i(t3)) : t3;
            };
          });
        }, 3533: (e2, t2, r2) => {
          var n2 = r2(5286), i = r2(4728).onFreeze;
          r2(3160)("seal", function(e3) {
            return function(t3) {
              return e3 && n2(t3) ? e3(i(t3)) : t3;
            };
          });
        }, 8838: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Object", { setPrototypeOf: r2(7375).set });
        }, 6253: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(1488), i = {};
          i[r2(6314)("toStringTag")] = "z", i + "" != "[object z]" && r2(7234)(Object.prototype, "toString", function() {
            return "[object " + n2(this) + "]";
          }, true);
        }, 4299: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(7743);
          n2(n2.G + n2.F * (parseFloat != i), { parseFloat: i });
        }, 1084: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(5960);
          n2(n2.G + n2.F * (parseInt != i), { parseInt: i });
        }, 851: (e2, t2, r2) => {
          "use strict";
          var n2, i, o, a, s = r2(4461), p = r2(3816), c = r2(741), d = r2(1488), l = r2(2985), u = r2(5286), m = r2(4963), h = r2(3328), f = r2(3531), y = r2(8364), g = r2(4193).set, b = r2(4351)(), v = r2(3499), w = r2(188), S = r2(575), I = r2(94), x = "Promise", T = p.TypeError, k = p.process, C = k && k.versions, R = C && C.v8 || "", $ = p.Promise, O = "process" == d(k), A = function() {
          }, P = i = v.f, D = !!function() {
            try {
              var e3 = $.resolve(1), t3 = (e3.constructor = {})[r2(6314)("species")] = function(e4) {
                e4(A, A);
              };
              return (O || "function" == typeof PromiseRejectionEvent) && e3.then(A) instanceof t3 && 0 !== R.indexOf("6.6") && -1 === S.indexOf("Chrome/66");
            } catch (e4) {
            }
          }(), j = function(e3) {
            var t3;
            return !(!u(e3) || "function" != typeof (t3 = e3.then)) && t3;
          }, N = function(e3, t3) {
            if (!e3._n) {
              e3._n = true;
              var r3 = e3._c;
              b(function() {
                for (var n3 = e3._v, i2 = 1 == e3._s, o2 = 0, a2 = function(t4) {
                  var r4, o3, a3, s2 = i2 ? t4.ok : t4.fail, p2 = t4.resolve, c2 = t4.reject, d2 = t4.domain;
                  try {
                    s2 ? (i2 || (2 == e3._h && F(e3), e3._h = 1), true === s2 ? r4 = n3 : (d2 && d2.enter(), r4 = s2(n3), d2 && (d2.exit(), a3 = true)), r4 === t4.promise ? c2(T("Promise-chain cycle")) : (o3 = j(r4)) ? o3.call(r4, p2, c2) : p2(r4)) : c2(n3);
                  } catch (e4) {
                    d2 && !a3 && d2.exit(), c2(e4);
                  }
                }; r3.length > o2; )
                  a2(r3[o2++]);
                e3._c = [], e3._n = false, t3 && !e3._h && E(e3);
              });
            }
          }, E = function(e3) {
            g.call(p, function() {
              var t3, r3, n3, i2 = e3._v, o2 = M(e3);
              if (o2 && (t3 = w(function() {
                O ? k.emit("unhandledRejection", i2, e3) : (r3 = p.onunhandledrejection) ? r3({ promise: e3, reason: i2 }) : (n3 = p.console) && n3.error && n3.error("Unhandled promise rejection", i2);
              }), e3._h = O || M(e3) ? 2 : 1), e3._a = void 0, o2 && t3.e)
                throw t3.v;
            });
          }, M = function(e3) {
            return 1 !== e3._h && 0 === (e3._a || e3._c).length;
          }, F = function(e3) {
            g.call(p, function() {
              var t3;
              O ? k.emit("rejectionHandled", e3) : (t3 = p.onrejectionhandled) && t3({ promise: e3, reason: e3._v });
            });
          }, q = function(e3) {
            var t3 = this;
            t3._d || (t3._d = true, (t3 = t3._w || t3)._v = e3, t3._s = 2, t3._a || (t3._a = t3._c.slice()), N(t3, true));
          }, L = function(e3) {
            var t3, r3 = this;
            if (!r3._d) {
              r3._d = true, r3 = r3._w || r3;
              try {
                if (r3 === e3)
                  throw T("Promise can't be resolved itself");
                (t3 = j(e3)) ? b(function() {
                  var n3 = { _w: r3, _d: false };
                  try {
                    t3.call(e3, c(L, n3, 1), c(q, n3, 1));
                  } catch (e4) {
                    q.call(n3, e4);
                  }
                }) : (r3._v = e3, r3._s = 1, N(r3, false));
              } catch (e4) {
                q.call({ _w: r3, _d: false }, e4);
              }
            }
          };
          D || ($ = function(e3) {
            h(this, $, x, "_h"), m(e3), n2.call(this);
            try {
              e3(c(L, this, 1), c(q, this, 1));
            } catch (e4) {
              q.call(this, e4);
            }
          }, (n2 = function(e3) {
            this._c = [], this._a = void 0, this._s = 0, this._d = false, this._v = void 0, this._h = 0, this._n = false;
          }).prototype = r2(4408)($.prototype, { then: function(e3, t3) {
            var r3 = P(y(this, $));
            return r3.ok = "function" != typeof e3 || e3, r3.fail = "function" == typeof t3 && t3, r3.domain = O ? k.domain : void 0, this._c.push(r3), this._a && this._a.push(r3), this._s && N(this, false), r3.promise;
          }, catch: function(e3) {
            return this.then(void 0, e3);
          } }), o = function() {
            var e3 = new n2();
            this.promise = e3, this.resolve = c(L, e3, 1), this.reject = c(q, e3, 1);
          }, v.f = P = function(e3) {
            return e3 === $ || e3 === a ? new o(e3) : i(e3);
          }), l(l.G + l.W + l.F * !D, { Promise: $ }), r2(2943)($, x), r2(2974)(x), a = r2(5645).Promise, l(l.S + l.F * !D, x, { reject: function(e3) {
            var t3 = P(this);
            return (0, t3.reject)(e3), t3.promise;
          } }), l(l.S + l.F * (s || !D), x, { resolve: function(e3) {
            return I(s && this === a ? $ : this, e3);
          } }), l(l.S + l.F * !(D && r2(7462)(function(e3) {
            $.all(e3).catch(A);
          })), x, { all: function(e3) {
            var t3 = this, r3 = P(t3), n3 = r3.resolve, i2 = r3.reject, o2 = w(function() {
              var r4 = [], o3 = 0, a2 = 1;
              f(e3, false, function(e4) {
                var s2 = o3++, p2 = false;
                r4.push(void 0), a2++, t3.resolve(e4).then(function(e5) {
                  p2 || (p2 = true, r4[s2] = e5, --a2 || n3(r4));
                }, i2);
              }), --a2 || n3(r4);
            });
            return o2.e && i2(o2.v), r3.promise;
          }, race: function(e3) {
            var t3 = this, r3 = P(t3), n3 = r3.reject, i2 = w(function() {
              f(e3, false, function(e4) {
                t3.resolve(e4).then(r3.resolve, n3);
              });
            });
            return i2.e && n3(i2.v), r3.promise;
          } });
        }, 1572: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(4963), o = r2(7007), a = (r2(3816).Reflect || {}).apply, s = Function.apply;
          n2(n2.S + n2.F * !r2(4253)(function() {
            a(function() {
            });
          }), "Reflect", { apply: function(e3, t3, r3) {
            var n3 = i(e3), p = o(r3);
            return a ? a(n3, t3, p) : s.call(n3, t3, p);
          } });
        }, 2139: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(2503), o = r2(4963), a = r2(7007), s = r2(5286), p = r2(4253), c = r2(4398), d = (r2(3816).Reflect || {}).construct, l = p(function() {
            function e3() {
            }
            return !(d(function() {
            }, [], e3) instanceof e3);
          }), u = !p(function() {
            d(function() {
            });
          });
          n2(n2.S + n2.F * (l || u), "Reflect", { construct: function(e3, t3) {
            o(e3), a(t3);
            var r3 = arguments.length < 3 ? e3 : o(arguments[2]);
            if (u && !l)
              return d(e3, t3, r3);
            if (e3 == r3) {
              switch (t3.length) {
                case 0:
                  return new e3();
                case 1:
                  return new e3(t3[0]);
                case 2:
                  return new e3(t3[0], t3[1]);
                case 3:
                  return new e3(t3[0], t3[1], t3[2]);
                case 4:
                  return new e3(t3[0], t3[1], t3[2], t3[3]);
              }
              var n3 = [null];
              return n3.push.apply(n3, t3), new (c.apply(e3, n3))();
            }
            var p2 = r3.prototype, m = i(s(p2) ? p2 : Object.prototype), h = Function.apply.call(e3, m, t3);
            return s(h) ? h : m;
          } });
        }, 685: (e2, t2, r2) => {
          var n2 = r2(9275), i = r2(2985), o = r2(7007), a = r2(1689);
          i(i.S + i.F * r2(4253)(function() {
            Reflect.defineProperty(n2.f({}, 1, { value: 1 }), 1, { value: 2 });
          }), "Reflect", { defineProperty: function(e3, t3, r3) {
            o(e3), t3 = a(t3, true), o(r3);
            try {
              return n2.f(e3, t3, r3), true;
            } catch (e4) {
              return false;
            }
          } });
        }, 5535: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(8693).f, o = r2(7007);
          n2(n2.S, "Reflect", { deleteProperty: function(e3, t3) {
            var r3 = i(o(e3), t3);
            return !(r3 && !r3.configurable) && delete e3[t3];
          } });
        }, 7347: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(7007), o = function(e3) {
            this._t = i(e3), this._i = 0;
            var t3, r3 = this._k = [];
            for (t3 in e3)
              r3.push(t3);
          };
          r2(9988)(o, "Object", function() {
            var e3, t3 = this, r3 = t3._k;
            do {
              if (t3._i >= r3.length)
                return { value: void 0, done: true };
            } while (!((e3 = r3[t3._i++]) in t3._t));
            return { value: e3, done: false };
          }), n2(n2.S, "Reflect", { enumerate: function(e3) {
            return new o(e3);
          } });
        }, 6633: (e2, t2, r2) => {
          var n2 = r2(8693), i = r2(2985), o = r2(7007);
          i(i.S, "Reflect", { getOwnPropertyDescriptor: function(e3, t3) {
            return n2.f(o(e3), t3);
          } });
        }, 8989: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(468), o = r2(7007);
          n2(n2.S, "Reflect", { getPrototypeOf: function(e3) {
            return i(o(e3));
          } });
        }, 3049: (e2, t2, r2) => {
          var n2 = r2(8693), i = r2(468), o = r2(9181), a = r2(2985), s = r2(5286), p = r2(7007);
          a(a.S, "Reflect", { get: function e3(t3, r3) {
            var a2, c, d = arguments.length < 3 ? t3 : arguments[2];
            return p(t3) === d ? t3[r3] : (a2 = n2.f(t3, r3)) ? o(a2, "value") ? a2.value : void 0 !== a2.get ? a2.get.call(d) : void 0 : s(c = i(t3)) ? e3(c, r3, d) : void 0;
          } });
        }, 8270: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Reflect", { has: function(e3, t3) {
            return t3 in e3;
          } });
        }, 4510: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(7007), o = Object.isExtensible;
          n2(n2.S, "Reflect", { isExtensible: function(e3) {
            return i(e3), !o || o(e3);
          } });
        }, 3984: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Reflect", { ownKeys: r2(7643) });
        }, 5769: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(7007), o = Object.preventExtensions;
          n2(n2.S, "Reflect", { preventExtensions: function(e3) {
            i(e3);
            try {
              return o && o(e3), true;
            } catch (e4) {
              return false;
            }
          } });
        }, 6014: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(7375);
          i && n2(n2.S, "Reflect", { setPrototypeOf: function(e3, t3) {
            i.check(e3, t3);
            try {
              return i.set(e3, t3), true;
            } catch (e4) {
              return false;
            }
          } });
        }, 55: (e2, t2, r2) => {
          var n2 = r2(9275), i = r2(8693), o = r2(468), a = r2(9181), s = r2(2985), p = r2(681), c = r2(7007), d = r2(5286);
          s(s.S, "Reflect", { set: function e3(t3, r3, s2) {
            var l, u, m = arguments.length < 4 ? t3 : arguments[3], h = i.f(c(t3), r3);
            if (!h) {
              if (d(u = o(t3)))
                return e3(u, r3, s2, m);
              h = p(0);
            }
            if (a(h, "value")) {
              if (false === h.writable || !d(m))
                return false;
              if (l = i.f(m, r3)) {
                if (l.get || l.set || false === l.writable)
                  return false;
                l.value = s2, n2.f(m, r3, l);
              } else
                n2.f(m, r3, p(0, s2));
              return true;
            }
            return void 0 !== h.set && (h.set.call(m, s2), true);
          } });
        }, 3946: (e2, t2, r2) => {
          var n2 = r2(3816), i = r2(266), o = r2(9275).f, a = r2(616).f, s = r2(5364), p = r2(3218), c = n2.RegExp, d = c, l = c.prototype, u = /a/g, m = /a/g, h = new c(u) !== u;
          if (r2(7057) && (!h || r2(4253)(function() {
            return m[r2(6314)("match")] = false, c(u) != u || c(m) == m || "/a/i" != c(u, "i");
          }))) {
            c = function(e3, t3) {
              var r3 = this instanceof c, n3 = s(e3), o2 = void 0 === t3;
              return !r3 && n3 && e3.constructor === c && o2 ? e3 : i(h ? new d(n3 && !o2 ? e3.source : e3, t3) : d((n3 = e3 instanceof c) ? e3.source : e3, n3 && o2 ? p.call(e3) : t3), r3 ? this : l, c);
            };
            for (var f = function(e3) {
              e3 in c || o(c, e3, { configurable: true, get: function() {
                return d[e3];
              }, set: function(t3) {
                d[e3] = t3;
              } });
            }, y = a(d), g = 0; y.length > g; )
              f(y[g++]);
            l.constructor = c, c.prototype = l, r2(7234)(n2, "RegExp", c);
          }
          r2(2974)("RegExp");
        }, 8269: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(1165);
          r2(2985)({ target: "RegExp", proto: true, forced: n2 !== /./.exec }, { exec: n2 });
        }, 6774: (e2, t2, r2) => {
          r2(7057) && "g" != /./g.flags && r2(9275).f(RegExp.prototype, "flags", { configurable: true, get: r2(3218) });
        }, 1466: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(7007), i = r2(875), o = r2(6793), a = r2(7787);
          r2(8082)("match", 1, function(e3, t3, r3, s) {
            return [function(r4) {
              var n3 = e3(this), i2 = null == r4 ? void 0 : r4[t3];
              return void 0 !== i2 ? i2.call(r4, n3) : new RegExp(r4)[t3](String(n3));
            }, function(e4) {
              var t4 = s(r3, e4, this);
              if (t4.done)
                return t4.value;
              var p = n2(e4), c = String(this);
              if (!p.global)
                return a(p, c);
              var d = p.unicode;
              p.lastIndex = 0;
              for (var l, u = [], m = 0; null !== (l = a(p, c)); ) {
                var h = String(l[0]);
                u[m] = h, "" === h && (p.lastIndex = o(c, i(p.lastIndex), d)), m++;
              }
              return 0 === m ? null : u;
            }];
          });
        }, 9357: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(7007), i = r2(508), o = r2(875), a = r2(1467), s = r2(6793), p = r2(7787), c = Math.max, d = Math.min, l = Math.floor, u = /\$([$&`']|\d\d?|<[^>]*>)/g, m = /\$([$&`']|\d\d?)/g;
          r2(8082)("replace", 2, function(e3, t3, r3, h) {
            return [function(n3, i2) {
              var o2 = e3(this), a2 = null == n3 ? void 0 : n3[t3];
              return void 0 !== a2 ? a2.call(n3, o2, i2) : r3.call(String(o2), n3, i2);
            }, function(e4, t4) {
              var i2 = h(r3, e4, this, t4);
              if (i2.done)
                return i2.value;
              var l2 = n2(e4), u2 = String(this), m2 = "function" == typeof t4;
              m2 || (t4 = String(t4));
              var y = l2.global;
              if (y) {
                var g = l2.unicode;
                l2.lastIndex = 0;
              }
              for (var b = []; ; ) {
                var v = p(l2, u2);
                if (null === v)
                  break;
                if (b.push(v), !y)
                  break;
                "" === String(v[0]) && (l2.lastIndex = s(u2, o(l2.lastIndex), g));
              }
              for (var w, S = "", I = 0, x = 0; x < b.length; x++) {
                v = b[x];
                for (var T = String(v[0]), k = c(d(a(v.index), u2.length), 0), C = [], R = 1; R < v.length; R++)
                  C.push(void 0 === (w = v[R]) ? w : String(w));
                var $ = v.groups;
                if (m2) {
                  var O = [T].concat(C, k, u2);
                  void 0 !== $ && O.push($);
                  var A = String(t4.apply(void 0, O));
                } else
                  A = f(T, u2, k, C, $, t4);
                k >= I && (S += u2.slice(I, k) + A, I = k + T.length);
              }
              return S + u2.slice(I);
            }];
            function f(e4, t4, n3, o2, a2, s2) {
              var p2 = n3 + e4.length, c2 = o2.length, d2 = m;
              return void 0 !== a2 && (a2 = i(a2), d2 = u), r3.call(s2, d2, function(r4, i2) {
                var s3;
                switch (i2.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return e4;
                  case "`":
                    return t4.slice(0, n3);
                  case "'":
                    return t4.slice(p2);
                  case "<":
                    s3 = a2[i2.slice(1, -1)];
                    break;
                  default:
                    var d3 = +i2;
                    if (0 === d3)
                      return r4;
                    if (d3 > c2) {
                      var u2 = l(d3 / 10);
                      return 0 === u2 ? r4 : u2 <= c2 ? void 0 === o2[u2 - 1] ? i2.charAt(1) : o2[u2 - 1] + i2.charAt(1) : r4;
                    }
                    s3 = o2[d3 - 1];
                }
                return void 0 === s3 ? "" : s3;
              });
            }
          });
        }, 6142: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(7007), i = r2(7195), o = r2(7787);
          r2(8082)("search", 1, function(e3, t3, r3, a) {
            return [function(r4) {
              var n3 = e3(this), i2 = null == r4 ? void 0 : r4[t3];
              return void 0 !== i2 ? i2.call(r4, n3) : new RegExp(r4)[t3](String(n3));
            }, function(e4) {
              var t4 = a(r3, e4, this);
              if (t4.done)
                return t4.value;
              var s = n2(e4), p = String(this), c = s.lastIndex;
              i(c, 0) || (s.lastIndex = 0);
              var d = o(s, p);
              return i(s.lastIndex, c) || (s.lastIndex = c), null === d ? -1 : d.index;
            }];
          });
        }, 1876: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(5364), i = r2(7007), o = r2(8364), a = r2(6793), s = r2(875), p = r2(7787), c = r2(1165), d = r2(4253), l = Math.min, u = [].push, m = 4294967295, h = !d(function() {
            RegExp(m, "y");
          });
          r2(8082)("split", 2, function(e3, t3, r3, d2) {
            var f;
            return f = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e4, t4) {
              var i2 = String(this);
              if (void 0 === e4 && 0 === t4)
                return [];
              if (!n2(e4))
                return r3.call(i2, e4, t4);
              for (var o2, a2, s2, p2 = [], d3 = (e4.ignoreCase ? "i" : "") + (e4.multiline ? "m" : "") + (e4.unicode ? "u" : "") + (e4.sticky ? "y" : ""), l2 = 0, h2 = void 0 === t4 ? m : t4 >>> 0, f2 = new RegExp(e4.source, d3 + "g"); (o2 = c.call(f2, i2)) && !((a2 = f2.lastIndex) > l2 && (p2.push(i2.slice(l2, o2.index)), o2.length > 1 && o2.index < i2.length && u.apply(p2, o2.slice(1)), s2 = o2[0].length, l2 = a2, p2.length >= h2)); )
                f2.lastIndex === o2.index && f2.lastIndex++;
              return l2 === i2.length ? !s2 && f2.test("") || p2.push("") : p2.push(i2.slice(l2)), p2.length > h2 ? p2.slice(0, h2) : p2;
            } : "0".split(void 0, 0).length ? function(e4, t4) {
              return void 0 === e4 && 0 === t4 ? [] : r3.call(this, e4, t4);
            } : r3, [function(r4, n3) {
              var i2 = e3(this), o2 = null == r4 ? void 0 : r4[t3];
              return void 0 !== o2 ? o2.call(r4, i2, n3) : f.call(String(i2), r4, n3);
            }, function(e4, t4) {
              var n3 = d2(f, e4, this, t4, f !== r3);
              if (n3.done)
                return n3.value;
              var c2 = i(e4), u2 = String(this), y = o(c2, RegExp), g = c2.unicode, b = (c2.ignoreCase ? "i" : "") + (c2.multiline ? "m" : "") + (c2.unicode ? "u" : "") + (h ? "y" : "g"), v = new y(h ? c2 : "^(?:" + c2.source + ")", b), w = void 0 === t4 ? m : t4 >>> 0;
              if (0 === w)
                return [];
              if (0 === u2.length)
                return null === p(v, u2) ? [u2] : [];
              for (var S = 0, I = 0, x = []; I < u2.length; ) {
                v.lastIndex = h ? I : 0;
                var T, k = p(v, h ? u2 : u2.slice(I));
                if (null === k || (T = l(s(v.lastIndex + (h ? 0 : I)), u2.length)) === S)
                  I = a(u2, I, g);
                else {
                  if (x.push(u2.slice(S, I)), x.length === w)
                    return x;
                  for (var C = 1; C <= k.length - 1; C++)
                    if (x.push(k[C]), x.length === w)
                      return x;
                  I = S = T;
                }
              }
              return x.push(u2.slice(S)), x;
            }];
          });
        }, 6108: (e2, t2, r2) => {
          "use strict";
          r2(6774);
          var n2 = r2(7007), i = r2(3218), o = r2(7057), a = "toString", s = /./.toString, p = function(e3) {
            r2(7234)(RegExp.prototype, a, e3, true);
          };
          r2(4253)(function() {
            return "/a/b" != s.call({ source: "a", flags: "b" });
          }) ? p(function() {
            var e3 = n2(this);
            return "/".concat(e3.source, "/", "flags" in e3 ? e3.flags : !o && e3 instanceof RegExp ? i.call(e3) : void 0);
          }) : s.name != a && p(function() {
            return s.call(this);
          });
        }, 8184: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(9824), i = r2(1616);
          e2.exports = r2(5795)("Set", function(e3) {
            return function() {
              return e3(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(e3) {
            return n2.def(i(this, "Set"), e3 = 0 === e3 ? 0 : e3, e3);
          } }, n2);
        }, 856: (e2, t2, r2) => {
          "use strict";
          r2(9395)("anchor", function(e3) {
            return function(t3) {
              return e3(this, "a", "name", t3);
            };
          });
        }, 703: (e2, t2, r2) => {
          "use strict";
          r2(9395)("big", function(e3) {
            return function() {
              return e3(this, "big", "", "");
            };
          });
        }, 1539: (e2, t2, r2) => {
          "use strict";
          r2(9395)("blink", function(e3) {
            return function() {
              return e3(this, "blink", "", "");
            };
          });
        }, 5292: (e2, t2, r2) => {
          "use strict";
          r2(9395)("bold", function(e3) {
            return function() {
              return e3(this, "b", "", "");
            };
          });
        }, 9539: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(4496)(false);
          n2(n2.P, "String", { codePointAt: function(e3) {
            return i(this, e3);
          } });
        }, 6620: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(875), o = r2(2094), a = "endsWith", s = "".endsWith;
          n2(n2.P + n2.F * r2(8852)(a), "String", { endsWith: function(e3) {
            var t3 = o(this, e3, a), r3 = arguments.length > 1 ? arguments[1] : void 0, n3 = i(t3.length), p = void 0 === r3 ? n3 : Math.min(i(r3), n3), c = String(e3);
            return s ? s.call(t3, c, p) : t3.slice(p - c.length, p) === c;
          } });
        }, 6629: (e2, t2, r2) => {
          "use strict";
          r2(9395)("fixed", function(e3) {
            return function() {
              return e3(this, "tt", "", "");
            };
          });
        }, 3694: (e2, t2, r2) => {
          "use strict";
          r2(9395)("fontcolor", function(e3) {
            return function(t3) {
              return e3(this, "font", "color", t3);
            };
          });
        }, 7648: (e2, t2, r2) => {
          "use strict";
          r2(9395)("fontsize", function(e3) {
            return function(t3) {
              return e3(this, "font", "size", t3);
            };
          });
        }, 191: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(2337), o = String.fromCharCode, a = String.fromCodePoint;
          n2(n2.S + n2.F * (!!a && 1 != a.length), "String", { fromCodePoint: function(e3) {
            for (var t3, r3 = [], n3 = arguments.length, a2 = 0; n3 > a2; ) {
              if (t3 = +arguments[a2++], i(t3, 1114111) !== t3)
                throw RangeError(t3 + " is not a valid code point");
              r3.push(t3 < 65536 ? o(t3) : o(55296 + ((t3 -= 65536) >> 10), t3 % 1024 + 56320));
            }
            return r3.join("");
          } });
        }, 2850: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(2094), o = "includes";
          n2(n2.P + n2.F * r2(8852)(o), "String", { includes: function(e3) {
            return !!~i(this, e3, o).indexOf(e3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 7795: (e2, t2, r2) => {
          "use strict";
          r2(9395)("italics", function(e3) {
            return function() {
              return e3(this, "i", "", "");
            };
          });
        }, 9115: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4496)(true);
          r2(2923)(String, "String", function(e3) {
            this._t = String(e3), this._i = 0;
          }, function() {
            var e3, t3 = this._t, r3 = this._i;
            return r3 >= t3.length ? { value: void 0, done: true } : (e3 = n2(t3, r3), this._i += e3.length, { value: e3, done: false });
          });
        }, 4531: (e2, t2, r2) => {
          "use strict";
          r2(9395)("link", function(e3) {
            return function(t3) {
              return e3(this, "a", "href", t3);
            };
          });
        }, 8306: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(2110), o = r2(875);
          n2(n2.S, "String", { raw: function(e3) {
            for (var t3 = i(e3.raw), r3 = o(t3.length), n3 = arguments.length, a = [], s = 0; r3 > s; )
              a.push(String(t3[s++])), s < n3 && a.push(String(arguments[s]));
            return a.join("");
          } });
        }, 823: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.P, "String", { repeat: r2(8595) });
        }, 3605: (e2, t2, r2) => {
          "use strict";
          r2(9395)("small", function(e3) {
            return function() {
              return e3(this, "small", "", "");
            };
          });
        }, 7732: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(875), o = r2(2094), a = "startsWith", s = "".startsWith;
          n2(n2.P + n2.F * r2(8852)(a), "String", { startsWith: function(e3) {
            var t3 = o(this, e3, a), r3 = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, t3.length)), n3 = String(e3);
            return s ? s.call(t3, n3, r3) : t3.slice(r3, r3 + n3.length) === n3;
          } });
        }, 6780: (e2, t2, r2) => {
          "use strict";
          r2(9395)("strike", function(e3) {
            return function() {
              return e3(this, "strike", "", "");
            };
          });
        }, 9937: (e2, t2, r2) => {
          "use strict";
          r2(9395)("sub", function(e3) {
            return function() {
              return e3(this, "sub", "", "");
            };
          });
        }, 511: (e2, t2, r2) => {
          "use strict";
          r2(9395)("sup", function(e3) {
            return function() {
              return e3(this, "sup", "", "");
            };
          });
        }, 4564: (e2, t2, r2) => {
          "use strict";
          r2(9599)("trim", function(e3) {
            return function() {
              return e3(this, 3);
            };
          });
        }, 5767: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(3816), i = r2(9181), o = r2(7057), a = r2(2985), s = r2(7234), p = r2(4728).KEY, c = r2(4253), d = r2(3825), l = r2(2943), u = r2(3953), m = r2(6314), h = r2(8787), f = r2(6074), y = r2(5541), g = r2(4302), b = r2(7007), v = r2(5286), w = r2(508), S = r2(2110), I = r2(1689), x = r2(681), T = r2(2503), k = r2(9327), C = r2(8693), R = r2(4548), $ = r2(9275), O = r2(7184), A = C.f, P = $.f, D = k.f, j = n2.Symbol, N = n2.JSON, E = N && N.stringify, M = m("_hidden"), F = m("toPrimitive"), q = {}.propertyIsEnumerable, L = d("symbol-registry"), B = d("symbols"), U = d("op-symbols"), W = Object.prototype, _ = "function" == typeof j && !!R.f, H = n2.QObject, V = !H || !H.prototype || !H.prototype.findChild, G = o && c(function() {
            return 7 != T(P({}, "a", { get: function() {
              return P(this, "a", { value: 7 }).a;
            } })).a;
          }) ? function(e3, t3, r3) {
            var n3 = A(W, t3);
            n3 && delete W[t3], P(e3, t3, r3), n3 && e3 !== W && P(W, t3, n3);
          } : P, z = function(e3) {
            var t3 = B[e3] = T(j.prototype);
            return t3._k = e3, t3;
          }, J = _ && "symbol" == typeof j.iterator ? function(e3) {
            return "symbol" == typeof e3;
          } : function(e3) {
            return e3 instanceof j;
          }, X = function(e3, t3, r3) {
            return e3 === W && X(U, t3, r3), b(e3), t3 = I(t3, true), b(r3), i(B, t3) ? (r3.enumerable ? (i(e3, M) && e3[M][t3] && (e3[M][t3] = false), r3 = T(r3, { enumerable: x(0, false) })) : (i(e3, M) || P(e3, M, x(1, {})), e3[M][t3] = true), G(e3, t3, r3)) : P(e3, t3, r3);
          }, K = function(e3, t3) {
            b(e3);
            for (var r3, n3 = y(t3 = S(t3)), i2 = 0, o2 = n3.length; o2 > i2; )
              X(e3, r3 = n3[i2++], t3[r3]);
            return e3;
          }, Y = function(e3) {
            var t3 = q.call(this, e3 = I(e3, true));
            return !(this === W && i(B, e3) && !i(U, e3)) && (!(t3 || !i(this, e3) || !i(B, e3) || i(this, M) && this[M][e3]) || t3);
          }, Q = function(e3, t3) {
            if (e3 = S(e3), t3 = I(t3, true), e3 !== W || !i(B, t3) || i(U, t3)) {
              var r3 = A(e3, t3);
              return !r3 || !i(B, t3) || i(e3, M) && e3[M][t3] || (r3.enumerable = true), r3;
            }
          }, Z = function(e3) {
            for (var t3, r3 = D(S(e3)), n3 = [], o2 = 0; r3.length > o2; )
              i(B, t3 = r3[o2++]) || t3 == M || t3 == p || n3.push(t3);
            return n3;
          }, ee = function(e3) {
            for (var t3, r3 = e3 === W, n3 = D(r3 ? U : S(e3)), o2 = [], a2 = 0; n3.length > a2; )
              !i(B, t3 = n3[a2++]) || r3 && !i(W, t3) || o2.push(B[t3]);
            return o2;
          };
          _ || (s((j = function() {
            if (this instanceof j)
              throw TypeError("Symbol is not a constructor!");
            var e3 = u(arguments.length > 0 ? arguments[0] : void 0), t3 = function(r3) {
              this === W && t3.call(U, r3), i(this, M) && i(this[M], e3) && (this[M][e3] = false), G(this, e3, x(1, r3));
            };
            return o && V && G(W, e3, { configurable: true, set: t3 }), z(e3);
          }).prototype, "toString", function() {
            return this._k;
          }), C.f = Q, $.f = X, r2(616).f = k.f = Z, r2(4682).f = Y, R.f = ee, o && !r2(4461) && s(W, "propertyIsEnumerable", Y, true), h.f = function(e3) {
            return z(m(e3));
          }), a(a.G + a.W + a.F * !_, { Symbol: j });
          for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; te.length > re; )
            m(te[re++]);
          for (var ne = O(m.store), ie = 0; ne.length > ie; )
            f(ne[ie++]);
          a(a.S + a.F * !_, "Symbol", { for: function(e3) {
            return i(L, e3 += "") ? L[e3] : L[e3] = j(e3);
          }, keyFor: function(e3) {
            if (!J(e3))
              throw TypeError(e3 + " is not a symbol!");
            for (var t3 in L)
              if (L[t3] === e3)
                return t3;
          }, useSetter: function() {
            V = true;
          }, useSimple: function() {
            V = false;
          } }), a(a.S + a.F * !_, "Object", { create: function(e3, t3) {
            return void 0 === t3 ? T(e3) : K(T(e3), t3);
          }, defineProperty: X, defineProperties: K, getOwnPropertyDescriptor: Q, getOwnPropertyNames: Z, getOwnPropertySymbols: ee });
          var oe = c(function() {
            R.f(1);
          });
          a(a.S + a.F * oe, "Object", { getOwnPropertySymbols: function(e3) {
            return R.f(w(e3));
          } }), N && a(a.S + a.F * (!_ || c(function() {
            var e3 = j();
            return "[null]" != E([e3]) || "{}" != E({ a: e3 }) || "{}" != E(Object(e3));
          })), "JSON", { stringify: function(e3) {
            for (var t3, r3, n3 = [e3], i2 = 1; arguments.length > i2; )
              n3.push(arguments[i2++]);
            if (r3 = t3 = n3[1], (v(t3) || void 0 !== e3) && !J(e3))
              return g(t3) || (t3 = function(e4, t4) {
                if ("function" == typeof r3 && (t4 = r3.call(this, e4, t4)), !J(t4))
                  return t4;
              }), n3[1] = t3, E.apply(N, n3);
          } }), j.prototype[F] || r2(7728)(j.prototype, F, j.prototype.valueOf), l(j, "Symbol"), l(Math, "Math", true), l(n2.JSON, "JSON", true);
        }, 142: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(9383), o = r2(1125), a = r2(7007), s = r2(2337), p = r2(875), c = r2(5286), d = r2(3816).ArrayBuffer, l = r2(8364), u = o.ArrayBuffer, m = o.DataView, h = i.ABV && d.isView, f = u.prototype.slice, y = i.VIEW, g = "ArrayBuffer";
          n2(n2.G + n2.W + n2.F * (d !== u), { ArrayBuffer: u }), n2(n2.S + n2.F * !i.CONSTR, g, { isView: function(e3) {
            return h && h(e3) || c(e3) && y in e3;
          } }), n2(n2.P + n2.U + n2.F * r2(4253)(function() {
            return !new u(2).slice(1, void 0).byteLength;
          }), g, { slice: function(e3, t3) {
            if (void 0 !== f && void 0 === t3)
              return f.call(a(this), e3);
            for (var r3 = a(this).byteLength, n3 = s(e3, r3), i2 = s(void 0 === t3 ? r3 : t3, r3), o2 = new (l(this, u))(p(i2 - n3)), c2 = new m(this), d2 = new m(o2), h2 = 0; n3 < i2; )
              d2.setUint8(h2++, c2.getUint8(n3++));
            return o2;
          } }), r2(2974)(g);
        }, 1786: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.G + n2.W + n2.F * !r2(9383).ABV, { DataView: r2(1125).DataView });
        }, 162: (e2, t2, r2) => {
          r2(8440)("Float32", 4, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 3834: (e2, t2, r2) => {
          r2(8440)("Float64", 8, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 4821: (e2, t2, r2) => {
          r2(8440)("Int16", 2, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 1303: (e2, t2, r2) => {
          r2(8440)("Int32", 4, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 5368: (e2, t2, r2) => {
          r2(8440)("Int8", 1, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 9103: (e2, t2, r2) => {
          r2(8440)("Uint16", 2, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 3318: (e2, t2, r2) => {
          r2(8440)("Uint32", 4, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 6964: (e2, t2, r2) => {
          r2(8440)("Uint8", 1, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          });
        }, 2152: (e2, t2, r2) => {
          r2(8440)("Uint8", 1, function(e3) {
            return function(t3, r3, n2) {
              return e3(this, t3, r3, n2);
            };
          }, true);
        }, 147: (e2, t2, r2) => {
          "use strict";
          var n2, i = r2(3816), o = r2(50)(0), a = r2(7234), s = r2(4728), p = r2(5345), c = r2(3657), d = r2(5286), l = r2(1616), u = r2(1616), m = !i.ActiveXObject && "ActiveXObject" in i, h = "WeakMap", f = s.getWeak, y = Object.isExtensible, g = c.ufstore, b = function(e3) {
            return function() {
              return e3(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, v = { get: function(e3) {
            if (d(e3)) {
              var t3 = f(e3);
              return true === t3 ? g(l(this, h)).get(e3) : t3 ? t3[this._i] : void 0;
            }
          }, set: function(e3, t3) {
            return c.def(l(this, h), e3, t3);
          } }, w = e2.exports = r2(5795)(h, b, v, c, true, true);
          u && m && (p((n2 = c.getConstructor(b, h)).prototype, v), s.NEED = true, o(["delete", "has", "get", "set"], function(e3) {
            var t3 = w.prototype, r3 = t3[e3];
            a(t3, e3, function(t4, i2) {
              if (d(t4) && !y(t4)) {
                this._f || (this._f = new n2());
                var o2 = this._f[e3](t4, i2);
                return "set" == e3 ? this : o2;
              }
              return r3.call(this, t4, i2);
            });
          }));
        }, 9192: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(3657), i = r2(1616), o = "WeakSet";
          r2(5795)(o, function(e3) {
            return function() {
              return e3(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(e3) {
            return n2.def(i(this, o), e3, true);
          } }, n2, false, true);
        }, 1268: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(3325), o = r2(508), a = r2(875), s = r2(4963), p = r2(6886);
          n2(n2.P, "Array", { flatMap: function(e3) {
            var t3, r3, n3 = o(this);
            return s(e3), t3 = a(n3.length), r3 = p(n3, 0), i(r3, n3, n3, t3, 0, 1, e3, arguments[1]), r3;
          } }), r2(7722)("flatMap");
        }, 4692: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(3325), o = r2(508), a = r2(875), s = r2(1467), p = r2(6886);
          n2(n2.P, "Array", { flatten: function() {
            var e3 = arguments[0], t3 = o(this), r3 = a(t3.length), n3 = p(t3, 0);
            return i(n3, t3, t3, r3, 0, void 0 === e3 ? 1 : s(e3)), n3;
          } }), r2(7722)("flatten");
        }, 2773: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(9315)(true);
          n2(n2.P, "Array", { includes: function(e3) {
            return i(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), r2(7722)("includes");
        }, 8267: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(4351)(), o = r2(3816).process, a = "process" == r2(2032)(o);
          n2(n2.G, { asap: function(e3) {
            var t3 = a && o.domain;
            i(t3 ? t3.bind(e3) : e3);
          } });
        }, 2559: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(2032);
          n2(n2.S, "Error", { isError: function(e3) {
            return "Error" === i(e3);
          } });
        }, 5575: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.G, { global: r2(3816) });
        }, 525: (e2, t2, r2) => {
          r2(1024)("Map");
        }, 8211: (e2, t2, r2) => {
          r2(4881)("Map");
        }, 7698: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.P + n2.R, "Map", { toJSON: r2(6132)("Map") });
        }, 8865: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { clamp: function(e3, t3, r3) {
            return Math.min(r3, Math.max(t3, e3));
          } });
        }, 368: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { DEG_PER_RAD: Math.PI / 180 });
        }, 6427: (e2, t2, r2) => {
          var n2 = r2(2985), i = 180 / Math.PI;
          n2(n2.S, "Math", { degrees: function(e3) {
            return e3 * i;
          } });
        }, 286: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(8757), o = r2(4934);
          n2(n2.S, "Math", { fscale: function(e3, t3, r3, n3, a) {
            return o(i(e3, t3, r3, n3, a));
          } });
        }, 2816: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { iaddh: function(e3, t3, r3, n3) {
            var i = e3 >>> 0, o = r3 >>> 0;
            return (t3 >>> 0) + (n3 >>> 0) + ((i & o | (i | o) & ~(i + o >>> 0)) >>> 31) | 0;
          } });
        }, 2082: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { imulh: function(e3, t3) {
            var r3 = 65535, n3 = +e3, i = +t3, o = n3 & r3, a = i & r3, s = n3 >> 16, p = i >> 16, c = (s * a >>> 0) + (o * a >>> 16);
            return s * p + (c >> 16) + ((o * p >>> 0) + (c & r3) >> 16);
          } });
        }, 5986: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { isubh: function(e3, t3, r3, n3) {
            var i = e3 >>> 0, o = r3 >>> 0;
            return (t3 >>> 0) - (n3 >>> 0) - ((~i & o | ~(i ^ o) & i - o >>> 0) >>> 31) | 0;
          } });
        }, 6308: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { RAD_PER_DEG: 180 / Math.PI });
        }, 9221: (e2, t2, r2) => {
          var n2 = r2(2985), i = Math.PI / 180;
          n2(n2.S, "Math", { radians: function(e3) {
            return e3 * i;
          } });
        }, 3570: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { scale: r2(8757) });
        }, 3776: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { signbit: function(e3) {
            return (e3 = +e3) != e3 ? e3 : 0 == e3 ? 1 / e3 == 1 / 0 : e3 > 0;
          } });
        }, 6754: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "Math", { umulh: function(e3, t3) {
            var r3 = 65535, n3 = +e3, i = +t3, o = n3 & r3, a = i & r3, s = n3 >>> 16, p = i >>> 16, c = (s * a >>> 0) + (o * a >>> 16);
            return s * p + (c >>> 16) + ((o * p >>> 0) + (c & r3) >>> 16);
          } });
        }, 8646: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(508), o = r2(4963), a = r2(9275);
          r2(7057) && n2(n2.P + r2(1670), "Object", { __defineGetter__: function(e3, t3) {
            a.f(i(this), e3, { get: o(t3), enumerable: true, configurable: true });
          } });
        }, 2658: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(508), o = r2(4963), a = r2(9275);
          r2(7057) && n2(n2.P + r2(1670), "Object", { __defineSetter__: function(e3, t3) {
            a.f(i(this), e3, { set: o(t3), enumerable: true, configurable: true });
          } });
        }, 3276: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(1131)(true);
          n2(n2.S, "Object", { entries: function(e3) {
            return i(e3);
          } });
        }, 8351: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(7643), o = r2(2110), a = r2(8693), s = r2(2811);
          n2(n2.S, "Object", { getOwnPropertyDescriptors: function(e3) {
            for (var t3, r3, n3 = o(e3), p = a.f, c = i(n3), d = {}, l = 0; c.length > l; )
              void 0 !== (r3 = p(n3, t3 = c[l++])) && s(d, t3, r3);
            return d;
          } });
        }, 6917: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(508), o = r2(1689), a = r2(468), s = r2(8693).f;
          r2(7057) && n2(n2.P + r2(1670), "Object", { __lookupGetter__: function(e3) {
            var t3, r3 = i(this), n3 = o(e3, true);
            do {
              if (t3 = s(r3, n3))
                return t3.get;
            } while (r3 = a(r3));
          } });
        }, 372: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(508), o = r2(1689), a = r2(468), s = r2(8693).f;
          r2(7057) && n2(n2.P + r2(1670), "Object", { __lookupSetter__: function(e3) {
            var t3, r3 = i(this), n3 = o(e3, true);
            do {
              if (t3 = s(r3, n3))
                return t3.set;
            } while (r3 = a(r3));
          } });
        }, 6409: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(1131)(false);
          n2(n2.S, "Object", { values: function(e3) {
            return i(e3);
          } });
        }, 6534: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(3816), o = r2(5645), a = r2(4351)(), s = r2(6314)("observable"), p = r2(4963), c = r2(7007), d = r2(3328), l = r2(4408), u = r2(7728), m = r2(3531), h = m.RETURN, f = function(e3) {
            return null == e3 ? void 0 : p(e3);
          }, y = function(e3) {
            var t3 = e3._c;
            t3 && (e3._c = void 0, t3());
          }, g = function(e3) {
            return void 0 === e3._o;
          }, b = function(e3) {
            g(e3) || (e3._o = void 0, y(e3));
          }, v = function(e3, t3) {
            c(e3), this._c = void 0, this._o = e3, e3 = new w(this);
            try {
              var r3 = t3(e3), n3 = r3;
              null != r3 && ("function" == typeof r3.unsubscribe ? r3 = function() {
                n3.unsubscribe();
              } : p(r3), this._c = r3);
            } catch (t4) {
              return void e3.error(t4);
            }
            g(this) && y(this);
          };
          v.prototype = l({}, { unsubscribe: function() {
            b(this);
          } });
          var w = function(e3) {
            this._s = e3;
          };
          w.prototype = l({}, { next: function(e3) {
            var t3 = this._s;
            if (!g(t3)) {
              var r3 = t3._o;
              try {
                var n3 = f(r3.next);
                if (n3)
                  return n3.call(r3, e3);
              } catch (e4) {
                try {
                  b(t3);
                } finally {
                  throw e4;
                }
              }
            }
          }, error: function(e3) {
            var t3 = this._s;
            if (g(t3))
              throw e3;
            var r3 = t3._o;
            t3._o = void 0;
            try {
              var n3 = f(r3.error);
              if (!n3)
                throw e3;
              e3 = n3.call(r3, e3);
            } catch (e4) {
              try {
                y(t3);
              } finally {
                throw e4;
              }
            }
            return y(t3), e3;
          }, complete: function(e3) {
            var t3 = this._s;
            if (!g(t3)) {
              var r3 = t3._o;
              t3._o = void 0;
              try {
                var n3 = f(r3.complete);
                e3 = n3 ? n3.call(r3, e3) : void 0;
              } catch (e4) {
                try {
                  y(t3);
                } finally {
                  throw e4;
                }
              }
              return y(t3), e3;
            }
          } });
          var S = function(e3) {
            d(this, S, "Observable", "_f")._f = p(e3);
          };
          l(S.prototype, { subscribe: function(e3) {
            return new v(e3, this._f);
          }, forEach: function(e3) {
            var t3 = this;
            return new (o.Promise || i.Promise)(function(r3, n3) {
              p(e3);
              var i2 = t3.subscribe({ next: function(t4) {
                try {
                  return e3(t4);
                } catch (e4) {
                  n3(e4), i2.unsubscribe();
                }
              }, error: n3, complete: r3 });
            });
          } }), l(S, { from: function(e3) {
            var t3 = "function" == typeof this ? this : S, r3 = f(c(e3)[s]);
            if (r3) {
              var n3 = c(r3.call(e3));
              return n3.constructor === t3 ? n3 : new t3(function(e4) {
                return n3.subscribe(e4);
              });
            }
            return new t3(function(t4) {
              var r4 = false;
              return a(function() {
                if (!r4) {
                  try {
                    if (m(e3, false, function(e4) {
                      if (t4.next(e4), r4)
                        return h;
                    }) === h)
                      return;
                  } catch (e4) {
                    if (r4)
                      throw e4;
                    return void t4.error(e4);
                  }
                  t4.complete();
                }
              }), function() {
                r4 = true;
              };
            });
          }, of: function() {
            for (var e3 = 0, t3 = arguments.length, r3 = new Array(t3); e3 < t3; )
              r3[e3] = arguments[e3++];
            return new ("function" == typeof this ? this : S)(function(e4) {
              var t4 = false;
              return a(function() {
                if (!t4) {
                  for (var n3 = 0; n3 < r3.length; ++n3)
                    if (e4.next(r3[n3]), t4)
                      return;
                  e4.complete();
                }
              }), function() {
                t4 = true;
              };
            });
          } }), u(S.prototype, s, function() {
            return this;
          }), n2(n2.G, { Observable: S }), r2(2974)("Observable");
        }, 9865: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(5645), o = r2(3816), a = r2(8364), s = r2(94);
          n2(n2.P + n2.R, "Promise", { finally: function(e3) {
            var t3 = a(this, i.Promise || o.Promise), r3 = "function" == typeof e3;
            return this.then(r3 ? function(r4) {
              return s(t3, e3()).then(function() {
                return r4;
              });
            } : e3, r3 ? function(r4) {
              return s(t3, e3()).then(function() {
                throw r4;
              });
            } : e3);
          } });
        }, 1898: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(3499), o = r2(188);
          n2(n2.S, "Promise", { try: function(e3) {
            var t3 = i.f(this), r3 = o(e3);
            return (r3.e ? t3.reject : t3.resolve)(r3.v), t3.promise;
          } });
        }, 3364: (e2, t2, r2) => {
          var n2 = r2(133), i = r2(7007), o = n2.key, a = n2.set;
          n2.exp({ defineMetadata: function(e3, t3, r3, n3) {
            a(e3, t3, i(r3), o(n3));
          } });
        }, 1432: (e2, t2, r2) => {
          var n2 = r2(133), i = r2(7007), o = n2.key, a = n2.map, s = n2.store;
          n2.exp({ deleteMetadata: function(e3, t3) {
            var r3 = arguments.length < 3 ? void 0 : o(arguments[2]), n3 = a(i(t3), r3, false);
            if (void 0 === n3 || !n3.delete(e3))
              return false;
            if (n3.size)
              return true;
            var p = s.get(t3);
            return p.delete(r3), !!p.size || s.delete(t3);
          } });
        }, 4416: (e2, t2, r2) => {
          var n2 = r2(8184), i = r2(9490), o = r2(133), a = r2(7007), s = r2(468), p = o.keys, c = o.key, d = function(e3, t3) {
            var r3 = p(e3, t3), o2 = s(e3);
            if (null === o2)
              return r3;
            var a2 = d(o2, t3);
            return a2.length ? r3.length ? i(new n2(r3.concat(a2))) : a2 : r3;
          };
          o.exp({ getMetadataKeys: function(e3) {
            return d(a(e3), arguments.length < 2 ? void 0 : c(arguments[1]));
          } });
        }, 6562: (e2, t2, r2) => {
          var n2 = r2(133), i = r2(7007), o = r2(468), a = n2.has, s = n2.get, p = n2.key, c = function(e3, t3, r3) {
            if (a(e3, t3, r3))
              return s(e3, t3, r3);
            var n3 = o(t3);
            return null !== n3 ? c(e3, n3, r3) : void 0;
          };
          n2.exp({ getMetadata: function(e3, t3) {
            return c(e3, i(t3), arguments.length < 3 ? void 0 : p(arguments[2]));
          } });
        }, 2213: (e2, t2, r2) => {
          var n2 = r2(133), i = r2(7007), o = n2.keys, a = n2.key;
          n2.exp({ getOwnMetadataKeys: function(e3) {
            return o(i(e3), arguments.length < 2 ? void 0 : a(arguments[1]));
          } });
        }, 8681: (e2, t2, r2) => {
          var n2 = r2(133), i = r2(7007), o = n2.get, a = n2.key;
          n2.exp({ getOwnMetadata: function(e3, t3) {
            return o(e3, i(t3), arguments.length < 3 ? void 0 : a(arguments[2]));
          } });
        }, 3471: (e2, t2, r2) => {
          var n2 = r2(133), i = r2(7007), o = r2(468), a = n2.has, s = n2.key, p = function(e3, t3, r3) {
            if (a(e3, t3, r3))
              return true;
            var n3 = o(t3);
            return null !== n3 && p(e3, n3, r3);
          };
          n2.exp({ hasMetadata: function(e3, t3) {
            return p(e3, i(t3), arguments.length < 3 ? void 0 : s(arguments[2]));
          } });
        }, 4329: (e2, t2, r2) => {
          var n2 = r2(133), i = r2(7007), o = n2.has, a = n2.key;
          n2.exp({ hasOwnMetadata: function(e3, t3) {
            return o(e3, i(t3), arguments.length < 3 ? void 0 : a(arguments[2]));
          } });
        }, 5159: (e2, t2, r2) => {
          var n2 = r2(133), i = r2(7007), o = r2(4963), a = n2.key, s = n2.set;
          n2.exp({ metadata: function(e3, t3) {
            return function(r3, n3) {
              s(e3, t3, (void 0 !== n3 ? i : o)(r3), a(n3));
            };
          } });
        }, 9467: (e2, t2, r2) => {
          r2(1024)("Set");
        }, 4837: (e2, t2, r2) => {
          r2(4881)("Set");
        }, 8739: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.P + n2.R, "Set", { toJSON: r2(6132)("Set") });
        }, 7220: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(4496)(true), o = r2(4253)(function() {
            return "\u{20BB7}" !== "\u{20BB7}".at(0);
          });
          n2(n2.P + n2.F * o, "String", { at: function(e3) {
            return i(this, e3);
          } });
        }, 4208: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(1355), o = r2(875), a = r2(5364), s = r2(3218), p = RegExp.prototype, c = function(e3, t3) {
            this._r = e3, this._s = t3;
          };
          r2(9988)(c, "RegExp String", function() {
            var e3 = this._r.exec(this._s);
            return { value: e3, done: null === e3 };
          }), n2(n2.P, "String", { matchAll: function(e3) {
            if (i(this), !a(e3))
              throw TypeError(e3 + " is not a regexp!");
            var t3 = String(this), r3 = "flags" in p ? String(e3.flags) : s.call(e3), n3 = new RegExp(e3.source, ~r3.indexOf("g") ? r3 : "g" + r3);
            return n3.lastIndex = o(e3.lastIndex), new c(n3, t3);
          } });
        }, 2770: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(5442), o = r2(575), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
          n2(n2.P + n2.F * a, "String", { padEnd: function(e3) {
            return i(this, e3, arguments.length > 1 ? arguments[1] : void 0, false);
          } });
        }, 1784: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2985), i = r2(5442), o = r2(575), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
          n2(n2.P + n2.F * a, "String", { padStart: function(e3) {
            return i(this, e3, arguments.length > 1 ? arguments[1] : void 0, true);
          } });
        }, 5869: (e2, t2, r2) => {
          "use strict";
          r2(9599)("trimLeft", function(e3) {
            return function() {
              return e3(this, 1);
            };
          }, "trimStart");
        }, 4325: (e2, t2, r2) => {
          "use strict";
          r2(9599)("trimRight", function(e3) {
            return function() {
              return e3(this, 2);
            };
          }, "trimEnd");
        }, 9665: (e2, t2, r2) => {
          r2(6074)("asyncIterator");
        }, 9593: (e2, t2, r2) => {
          r2(6074)("observable");
        }, 8967: (e2, t2, r2) => {
          var n2 = r2(2985);
          n2(n2.S, "System", { global: r2(3816) });
        }, 4188: (e2, t2, r2) => {
          r2(1024)("WeakMap");
        }, 7594: (e2, t2, r2) => {
          r2(4881)("WeakMap");
        }, 3495: (e2, t2, r2) => {
          r2(1024)("WeakSet");
        }, 9550: (e2, t2, r2) => {
          r2(4881)("WeakSet");
        }, 1181: (e2, t2, r2) => {
          for (var n2 = r2(6997), i = r2(7184), o = r2(7234), a = r2(3816), s = r2(7728), p = r2(2803), c = r2(6314), d = c("iterator"), l = c("toStringTag"), u = p.Array, m = { CSSRuleList: true, CSSStyleDeclaration: false, CSSValueList: false, ClientRectList: false, DOMRectList: false, DOMStringList: false, DOMTokenList: true, DataTransferItemList: false, FileList: false, HTMLAllCollection: false, HTMLCollection: false, HTMLFormElement: false, HTMLSelectElement: false, MediaList: true, MimeTypeArray: false, NamedNodeMap: false, NodeList: true, PaintRequestList: false, Plugin: false, PluginArray: false, SVGLengthList: false, SVGNumberList: false, SVGPathSegList: false, SVGPointList: false, SVGStringList: false, SVGTransformList: false, SourceBufferList: false, StyleSheetList: true, TextTrackCueList: false, TextTrackList: false, TouchList: false }, h = i(m), f = 0; f < h.length; f++) {
            var y, g = h[f], b = m[g], v = a[g], w = v && v.prototype;
            if (w && (w[d] || s(w, d, u), w[l] || s(w, l, g), p[g] = u, b))
              for (y in n2)
                w[y] || o(w, y, n2[y], true);
          }
        }, 4633: (e2, t2, r2) => {
          var n2 = r2(2985), i = r2(4193);
          n2(n2.G + n2.B, { setImmediate: i.set, clearImmediate: i.clear });
        }, 2564: (e2, t2, r2) => {
          var n2 = r2(3816), i = r2(2985), o = r2(575), a = [].slice, s = /MSIE .\./.test(o), p = function(e3) {
            return function(t3, r3) {
              var n3 = arguments.length > 2, i2 = !!n3 && a.call(arguments, 2);
              return e3(n3 ? function() {
                ("function" == typeof t3 ? t3 : Function(t3)).apply(this, i2);
              } : t3, r3);
            };
          };
          i(i.G + i.B + i.F * s, { setTimeout: p(n2.setTimeout), setInterval: p(n2.setInterval) });
        }, 1934: (e2, t2, r2) => {
          r2(5767), r2(8132), r2(8388), r2(7470), r2(4882), r2(1520), r2(7476), r2(9622), r2(9375), r2(3533), r2(4672), r2(4157), r2(5095), r2(9892), r2(5115), r2(9176), r2(8838), r2(6253), r2(9730), r2(6059), r2(8377), r2(1084), r2(4299), r2(1246), r2(726), r2(1901), r2(5972), r2(3403), r2(2516), r2(9371), r2(6479), r2(1736), r2(1889), r2(5177), r2(6943), r2(6503), r2(6786), r2(932), r2(7526), r2(1591), r2(9073), r2(347), r2(579), r2(4669), r2(7710), r2(5789), r2(3514), r2(9978), r2(8472), r2(6946), r2(5068), r2(413), r2(191), r2(8306), r2(4564), r2(9115), r2(9539), r2(6620), r2(2850), r2(823), r2(7732), r2(856), r2(703), r2(1539), r2(5292), r2(6629), r2(3694), r2(7648), r2(7795), r2(4531), r2(3605), r2(6780), r2(9937), r2(511), r2(1822), r2(9977), r2(1031), r2(6331), r2(1560), r2(774), r2(522), r2(8295), r2(7842), r2(110), r2(75), r2(4336), r2(1802), r2(8837), r2(6773), r2(5745), r2(3057), r2(3750), r2(3369), r2(9564), r2(2e3), r2(8977), r2(2310), r2(4899), r2(1842), r2(6997), r2(3946), r2(8269), r2(6108), r2(6774), r2(1466), r2(9357), r2(6142), r2(1876), r2(851), r2(8416), r2(8184), r2(147), r2(9192), r2(142), r2(1786), r2(5368), r2(6964), r2(2152), r2(4821), r2(9103), r2(1303), r2(3318), r2(162), r2(3834), r2(1572), r2(2139), r2(685), r2(5535), r2(7347), r2(3049), r2(6633), r2(8989), r2(8270), r2(4510), r2(3984), r2(5769), r2(55), r2(6014), r2(2773), r2(1268), r2(4692), r2(7220), r2(1784), r2(2770), r2(5869), r2(4325), r2(4208), r2(9665), r2(9593), r2(8351), r2(6409), r2(3276), r2(8646), r2(2658), r2(6917), r2(372), r2(7698), r2(8739), r2(8211), r2(4837), r2(7594), r2(9550), r2(525), r2(9467), r2(4188), r2(3495), r2(5575), r2(8967), r2(2559), r2(8865), r2(368), r2(6427), r2(286), r2(2816), r2(5986), r2(2082), r2(6308), r2(9221), r2(3570), r2(6754), r2(3776), r2(9865), r2(1898), r2(3364), r2(1432), r2(6562), r2(4416), r2(8681), r2(2213), r2(3471), r2(4329), r2(5159), r2(8267), r2(6534), r2(2564), r2(4633), r2(1181), e2.exports = r2(5645);
        }, 7187: (e2) => {
          "use strict";
          var t2, r2 = "object" == typeof Reflect ? Reflect : null, n2 = r2 && "function" == typeof r2.apply ? r2.apply : function(e3, t3, r3) {
            return Function.prototype.apply.call(e3, t3, r3);
          };
          t2 = r2 && "function" == typeof r2.ownKeys ? r2.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
            return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
          } : function(e3) {
            return Object.getOwnPropertyNames(e3);
          };
          var i = Number.isNaN || function(e3) {
            return e3 != e3;
          };
          function o() {
            o.init.call(this);
          }
          e2.exports = o, e2.exports.once = function(e3, t3) {
            return new Promise(function(r3, n3) {
              function i2(r4) {
                e3.removeListener(t3, o2), n3(r4);
              }
              function o2() {
                "function" == typeof e3.removeListener && e3.removeListener("error", i2), r3([].slice.call(arguments));
              }
              f(e3, t3, o2, { once: true }), "error" !== t3 && function(e4, t4, r4) {
                "function" == typeof e4.on && f(e4, "error", t4, r4);
              }(e3, i2, { once: true });
            });
          }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
          var a = 10;
          function s(e3) {
            if ("function" != typeof e3)
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e3);
          }
          function p(e3) {
            return void 0 === e3._maxListeners ? o.defaultMaxListeners : e3._maxListeners;
          }
          function c(e3, t3, r3, n3) {
            var i2, o2, a2, c2;
            if (s(r3), void 0 === (o2 = e3._events) ? (o2 = e3._events = /* @__PURE__ */ Object.create(null), e3._eventsCount = 0) : (void 0 !== o2.newListener && (e3.emit("newListener", t3, r3.listener ? r3.listener : r3), o2 = e3._events), a2 = o2[t3]), void 0 === a2)
              a2 = o2[t3] = r3, ++e3._eventsCount;
            else if ("function" == typeof a2 ? a2 = o2[t3] = n3 ? [r3, a2] : [a2, r3] : n3 ? a2.unshift(r3) : a2.push(r3), (i2 = p(e3)) > 0 && a2.length > i2 && !a2.warned) {
              a2.warned = true;
              var d2 = new Error("Possible EventEmitter memory leak detected. " + a2.length + " " + String(t3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              d2.name = "MaxListenersExceededWarning", d2.emitter = e3, d2.type = t3, d2.count = a2.length, c2 = d2, console && console.warn && console.warn(c2);
            }
            return e3;
          }
          function d() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function l(e3, t3, r3) {
            var n3 = { fired: false, wrapFn: void 0, target: e3, type: t3, listener: r3 }, i2 = d.bind(n3);
            return i2.listener = r3, n3.wrapFn = i2, i2;
          }
          function u(e3, t3, r3) {
            var n3 = e3._events;
            if (void 0 === n3)
              return [];
            var i2 = n3[t3];
            return void 0 === i2 ? [] : "function" == typeof i2 ? r3 ? [i2.listener || i2] : [i2] : r3 ? function(e4) {
              for (var t4 = new Array(e4.length), r4 = 0; r4 < t4.length; ++r4)
                t4[r4] = e4[r4].listener || e4[r4];
              return t4;
            }(i2) : h(i2, i2.length);
          }
          function m(e3) {
            var t3 = this._events;
            if (void 0 !== t3) {
              var r3 = t3[e3];
              if ("function" == typeof r3)
                return 1;
              if (void 0 !== r3)
                return r3.length;
            }
            return 0;
          }
          function h(e3, t3) {
            for (var r3 = new Array(t3), n3 = 0; n3 < t3; ++n3)
              r3[n3] = e3[n3];
            return r3;
          }
          function f(e3, t3, r3, n3) {
            if ("function" == typeof e3.on)
              n3.once ? e3.once(t3, r3) : e3.on(t3, r3);
            else {
              if ("function" != typeof e3.addEventListener)
                throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e3);
              e3.addEventListener(t3, function i2(o2) {
                n3.once && e3.removeEventListener(t3, i2), r3(o2);
              });
            }
          }
          Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
            return a;
          }, set: function(e3) {
            if ("number" != typeof e3 || e3 < 0 || i(e3))
              throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e3 + ".");
            a = e3;
          } }), o.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, o.prototype.setMaxListeners = function(e3) {
            if ("number" != typeof e3 || e3 < 0 || i(e3))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e3 + ".");
            return this._maxListeners = e3, this;
          }, o.prototype.getMaxListeners = function() {
            return p(this);
          }, o.prototype.emit = function(e3) {
            for (var t3 = [], r3 = 1; r3 < arguments.length; r3++)
              t3.push(arguments[r3]);
            var i2 = "error" === e3, o2 = this._events;
            if (void 0 !== o2)
              i2 = i2 && void 0 === o2.error;
            else if (!i2)
              return false;
            if (i2) {
              var a2;
              if (t3.length > 0 && (a2 = t3[0]), a2 instanceof Error)
                throw a2;
              var s2 = new Error("Unhandled error." + (a2 ? " (" + a2.message + ")" : ""));
              throw s2.context = a2, s2;
            }
            var p2 = o2[e3];
            if (void 0 === p2)
              return false;
            if ("function" == typeof p2)
              n2(p2, this, t3);
            else {
              var c2 = p2.length, d2 = h(p2, c2);
              for (r3 = 0; r3 < c2; ++r3)
                n2(d2[r3], this, t3);
            }
            return true;
          }, o.prototype.addListener = function(e3, t3) {
            return c(this, e3, t3, false);
          }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e3, t3) {
            return c(this, e3, t3, true);
          }, o.prototype.once = function(e3, t3) {
            return s(t3), this.on(e3, l(this, e3, t3)), this;
          }, o.prototype.prependOnceListener = function(e3, t3) {
            return s(t3), this.prependListener(e3, l(this, e3, t3)), this;
          }, o.prototype.removeListener = function(e3, t3) {
            var r3, n3, i2, o2, a2;
            if (s(t3), void 0 === (n3 = this._events))
              return this;
            if (void 0 === (r3 = n3[e3]))
              return this;
            if (r3 === t3 || r3.listener === t3)
              0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete n3[e3], n3.removeListener && this.emit("removeListener", e3, r3.listener || t3));
            else if ("function" != typeof r3) {
              for (i2 = -1, o2 = r3.length - 1; o2 >= 0; o2--)
                if (r3[o2] === t3 || r3[o2].listener === t3) {
                  a2 = r3[o2].listener, i2 = o2;
                  break;
                }
              if (i2 < 0)
                return this;
              0 === i2 ? r3.shift() : function(e4, t4) {
                for (; t4 + 1 < e4.length; t4++)
                  e4[t4] = e4[t4 + 1];
                e4.pop();
              }(r3, i2), 1 === r3.length && (n3[e3] = r3[0]), void 0 !== n3.removeListener && this.emit("removeListener", e3, a2 || t3);
            }
            return this;
          }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e3) {
            var t3, r3, n3;
            if (void 0 === (r3 = this._events))
              return this;
            if (void 0 === r3.removeListener)
              return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== r3[e3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete r3[e3]), this;
            if (0 === arguments.length) {
              var i2, o2 = Object.keys(r3);
              for (n3 = 0; n3 < o2.length; ++n3)
                "removeListener" !== (i2 = o2[n3]) && this.removeAllListeners(i2);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if ("function" == typeof (t3 = r3[e3]))
              this.removeListener(e3, t3);
            else if (void 0 !== t3)
              for (n3 = t3.length - 1; n3 >= 0; n3--)
                this.removeListener(e3, t3[n3]);
            return this;
          }, o.prototype.listeners = function(e3) {
            return u(this, e3, true);
          }, o.prototype.rawListeners = function(e3) {
            return u(this, e3, false);
          }, o.listenerCount = function(e3, t3) {
            return "function" == typeof e3.listenerCount ? e3.listenerCount(t3) : m.call(e3, t3);
          }, o.prototype.listenerCount = m, o.prototype.eventNames = function() {
            return this._eventsCount > 0 ? t2(this._events) : [];
          };
        }, 4029: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(5320), i = Object.prototype.toString, o = Object.prototype.hasOwnProperty, a = function(e3, t3, r3) {
            for (var n3 = 0, i2 = e3.length; n3 < i2; n3++)
              o.call(e3, n3) && (null == r3 ? t3(e3[n3], n3, e3) : t3.call(r3, e3[n3], n3, e3));
          }, s = function(e3, t3, r3) {
            for (var n3 = 0, i2 = e3.length; n3 < i2; n3++)
              null == r3 ? t3(e3.charAt(n3), n3, e3) : t3.call(r3, e3.charAt(n3), n3, e3);
          }, p = function(e3, t3, r3) {
            for (var n3 in e3)
              o.call(e3, n3) && (null == r3 ? t3(e3[n3], n3, e3) : t3.call(r3, e3[n3], n3, e3));
          };
          e2.exports = function(e3, t3, r3) {
            if (!n2(t3))
              throw new TypeError("iterator must be a function");
            var o2;
            arguments.length >= 3 && (o2 = r3), "[object Array]" === i.call(e3) ? a(e3, t3, o2) : "string" == typeof e3 ? s(e3, t3, o2) : p(e3, t3, o2);
          };
        }, 9092: (e2) => {
          "use strict";
          var t2 = "Function.prototype.bind called on incompatible ", r2 = Array.prototype.slice, n2 = Object.prototype.toString, i = "[object Function]";
          e2.exports = function(e3) {
            var o = this;
            if ("function" != typeof o || n2.call(o) !== i)
              throw new TypeError(t2 + o);
            for (var a, s = r2.call(arguments, 1), p = function() {
              if (this instanceof a) {
                var t3 = o.apply(this, s.concat(r2.call(arguments)));
                return Object(t3) === t3 ? t3 : this;
              }
              return o.apply(e3, s.concat(r2.call(arguments)));
            }, c = Math.max(0, o.length - s.length), d = [], l = 0; l < c; l++)
              d.push("$" + l);
            if (a = Function("binder", "return function (" + d.join(",") + "){ return binder.apply(this,arguments); }")(p), o.prototype) {
              var u = function() {
              };
              u.prototype = o.prototype, a.prototype = new u(), u.prototype = null;
            }
            return a;
          };
        }, 8612: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(9092);
          e2.exports = Function.prototype.bind || n2;
        }, 210: (e2, t2, r2) => {
          "use strict";
          var n2, i = SyntaxError, o = Function, a = TypeError, s = function(e3) {
            try {
              return o('"use strict"; return (' + e3 + ").constructor;")();
            } catch (e4) {
            }
          }, p = Object.getOwnPropertyDescriptor;
          if (p)
            try {
              p({}, "");
            } catch (e3) {
              p = null;
            }
          var c = function() {
            throw new a();
          }, d = p ? function() {
            try {
              return c;
            } catch (e3) {
              try {
                return p(arguments, "callee").get;
              } catch (e4) {
                return c;
              }
            }
          }() : c, l = r2(1405)(), u = Object.getPrototypeOf || function(e3) {
            return e3.__proto__;
          }, m = {}, h = "undefined" == typeof Uint8Array ? n2 : u(Uint8Array), f = { "%AggregateError%": "undefined" == typeof AggregateError ? n2 : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n2 : ArrayBuffer, "%ArrayIteratorPrototype%": l ? u([][Symbol.iterator]()) : n2, "%AsyncFromSyncIteratorPrototype%": n2, "%AsyncFunction%": m, "%AsyncGenerator%": m, "%AsyncGeneratorFunction%": m, "%AsyncIteratorPrototype%": m, "%Atomics%": "undefined" == typeof Atomics ? n2 : Atomics, "%BigInt%": "undefined" == typeof BigInt ? n2 : BigInt, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? n2 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": "undefined" == typeof Float32Array ? n2 : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? n2 : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n2 : FinalizationRegistry, "%Function%": o, "%GeneratorFunction%": m, "%Int8Array%": "undefined" == typeof Int8Array ? n2 : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? n2 : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? n2 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": l ? u(u([][Symbol.iterator]())) : n2, "%JSON%": "object" == typeof JSON ? JSON : n2, "%Map%": "undefined" == typeof Map ? n2 : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && l ? u((/* @__PURE__ */ new Map())[Symbol.iterator]()) : n2, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? n2 : Promise, "%Proxy%": "undefined" == typeof Proxy ? n2 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": "undefined" == typeof Reflect ? n2 : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? n2 : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && l ? u((/* @__PURE__ */ new Set())[Symbol.iterator]()) : n2, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n2 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": l ? u(""[Symbol.iterator]()) : n2, "%Symbol%": l ? Symbol : n2, "%SyntaxError%": i, "%ThrowTypeError%": d, "%TypedArray%": h, "%TypeError%": a, "%Uint8Array%": "undefined" == typeof Uint8Array ? n2 : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n2 : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? n2 : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? n2 : Uint32Array, "%URIError%": URIError, "%WeakMap%": "undefined" == typeof WeakMap ? n2 : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? n2 : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? n2 : WeakSet }, y = function e3(t3) {
            var r3;
            if ("%AsyncFunction%" === t3)
              r3 = s("async function () {}");
            else if ("%GeneratorFunction%" === t3)
              r3 = s("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t3)
              r3 = s("async function* () {}");
            else if ("%AsyncGenerator%" === t3) {
              var n3 = e3("%AsyncGeneratorFunction%");
              n3 && (r3 = n3.prototype);
            } else if ("%AsyncIteratorPrototype%" === t3) {
              var i2 = e3("%AsyncGenerator%");
              i2 && (r3 = u(i2.prototype));
            }
            return f[t3] = r3, r3;
          }, g = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, b = r2(8612), v = r2(7642), w = b.call(Function.call, Array.prototype.concat), S = b.call(Function.apply, Array.prototype.splice), I = b.call(Function.call, String.prototype.replace), x = b.call(Function.call, String.prototype.slice), T = b.call(Function.call, RegExp.prototype.exec), k = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, C = /\\(\\)?/g, R = function(e3) {
            var t3 = x(e3, 0, 1), r3 = x(e3, -1);
            if ("%" === t3 && "%" !== r3)
              throw new i("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r3 && "%" !== t3)
              throw new i("invalid intrinsic syntax, expected opening `%`");
            var n3 = [];
            return I(e3, k, function(e4, t4, r4, i2) {
              n3[n3.length] = r4 ? I(i2, C, "$1") : t4 || e4;
            }), n3;
          }, $ = function(e3, t3) {
            var r3, n3 = e3;
            if (v(g, n3) && (n3 = "%" + (r3 = g[n3])[0] + "%"), v(f, n3)) {
              var o2 = f[n3];
              if (o2 === m && (o2 = y(n3)), void 0 === o2 && !t3)
                throw new a("intrinsic " + e3 + " exists, but is not available. Please file an issue!");
              return { alias: r3, name: n3, value: o2 };
            }
            throw new i("intrinsic " + e3 + " does not exist!");
          };
          e2.exports = function(e3, t3) {
            if ("string" != typeof e3 || 0 === e3.length)
              throw new a("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof t3)
              throw new a('"allowMissing" argument must be a boolean');
            if (null === T(/^%?[^%]*%?$/g, e3))
              throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var r3 = R(e3), n3 = r3.length > 0 ? r3[0] : "", o2 = $("%" + n3 + "%", t3), s2 = o2.name, c2 = o2.value, d2 = false, l2 = o2.alias;
            l2 && (n3 = l2[0], S(r3, w([0, 1], l2)));
            for (var u2 = 1, m2 = true; u2 < r3.length; u2 += 1) {
              var h2 = r3[u2], y2 = x(h2, 0, 1), g2 = x(h2, -1);
              if (('"' === y2 || "'" === y2 || "`" === y2 || '"' === g2 || "'" === g2 || "`" === g2) && y2 !== g2)
                throw new i("property names with quotes must have matching quotes");
              if ("constructor" !== h2 && m2 || (d2 = true), v(f, s2 = "%" + (n3 += "." + h2) + "%"))
                c2 = f[s2];
              else if (null != c2) {
                if (!(h2 in c2)) {
                  if (!t3)
                    throw new a("base intrinsic for " + e3 + " exists, but the property is not available.");
                  return;
                }
                if (p && u2 + 1 >= r3.length) {
                  var b2 = p(c2, h2);
                  c2 = (m2 = !!b2) && "get" in b2 && !("originalValue" in b2.get) ? b2.get : c2[h2];
                } else
                  m2 = v(c2, h2), c2 = c2[h2];
                m2 && !d2 && (f[s2] = c2);
              }
            }
            return c2;
          };
        }, 1405: (e2, t2, r2) => {
          "use strict";
          var n2 = "undefined" != typeof Symbol && Symbol, i = r2(5419);
          e2.exports = function() {
            return "function" == typeof n2 && ("function" == typeof Symbol && ("symbol" == typeof n2("foo") && ("symbol" == typeof Symbol("bar") && i())));
          };
        }, 5419: (e2) => {
          "use strict";
          e2.exports = function() {
            if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
              return false;
            if ("symbol" == typeof Symbol.iterator)
              return true;
            var e3 = {}, t2 = Symbol("test"), r2 = Object(t2);
            if ("string" == typeof t2)
              return false;
            if ("[object Symbol]" !== Object.prototype.toString.call(t2))
              return false;
            if ("[object Symbol]" !== Object.prototype.toString.call(r2))
              return false;
            for (t2 in e3[t2] = 42, e3)
              return false;
            if ("function" == typeof Object.keys && 0 !== Object.keys(e3).length)
              return false;
            if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e3).length)
              return false;
            var n2 = Object.getOwnPropertySymbols(e3);
            if (1 !== n2.length || n2[0] !== t2)
              return false;
            if (!Object.prototype.propertyIsEnumerable.call(e3, t2))
              return false;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
              var i = Object.getOwnPropertyDescriptor(e3, t2);
              if (42 !== i.value || true !== i.enumerable)
                return false;
            }
            return true;
          };
        }, 6410: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(5419);
          e2.exports = function() {
            return n2() && !!Symbol.toStringTag;
          };
        }, 7642: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(8612);
          e2.exports = n2.call(Function.call, Object.prototype.hasOwnProperty);
        }, 5717: (e2) => {
          "function" == typeof Object.create ? e2.exports = function(e3, t2) {
            t2 && (e3.super_ = t2, e3.prototype = Object.create(t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }));
          } : e2.exports = function(e3, t2) {
            if (t2) {
              e3.super_ = t2;
              var r2 = function() {
              };
              r2.prototype = t2.prototype, e3.prototype = new r2(), e3.prototype.constructor = e3;
            }
          };
        }, 2584: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(6410)(), i = r2(1924)("Object.prototype.toString"), o = function(e3) {
            return !(n2 && e3 && "object" == typeof e3 && Symbol.toStringTag in e3) && "[object Arguments]" === i(e3);
          }, a = function(e3) {
            return !!o(e3) || null !== e3 && "object" == typeof e3 && "number" == typeof e3.length && e3.length >= 0 && "[object Array]" !== i(e3) && "[object Function]" === i(e3.callee);
          }, s = function() {
            return o(arguments);
          }();
          o.isLegacyArguments = a, e2.exports = s ? o : a;
        }, 5320: (e2) => {
          "use strict";
          var t2, r2, n2 = Function.prototype.toString, i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
          if ("function" == typeof i && "function" == typeof Object.defineProperty)
            try {
              t2 = Object.defineProperty({}, "length", { get: function() {
                throw r2;
              } }), r2 = {}, i(function() {
                throw 42;
              }, null, t2);
            } catch (e3) {
              e3 !== r2 && (i = null);
            }
          else
            i = null;
          var o = /^\s*class\b/, a = function(e3) {
            try {
              var t3 = n2.call(e3);
              return o.test(t3);
            } catch (e4) {
              return false;
            }
          }, s = Object.prototype.toString, p = "function" == typeof Symbol && !!Symbol.toStringTag, c = "object" == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
          e2.exports = i ? function(e3) {
            if (e3 === c)
              return true;
            if (!e3)
              return false;
            if ("function" != typeof e3 && "object" != typeof e3)
              return false;
            if ("function" == typeof e3 && !e3.prototype)
              return true;
            try {
              i(e3, null, t2);
            } catch (e4) {
              if (e4 !== r2)
                return false;
            }
            return !a(e3);
          } : function(e3) {
            if (e3 === c)
              return true;
            if (!e3)
              return false;
            if ("function" != typeof e3 && "object" != typeof e3)
              return false;
            if ("function" == typeof e3 && !e3.prototype)
              return true;
            if (p)
              return function(e4) {
                try {
                  return !a(e4) && (n2.call(e4), true);
                } catch (e5) {
                  return false;
                }
              }(e3);
            if (a(e3))
              return false;
            var t3 = s.call(e3);
            return "[object Function]" === t3 || "[object GeneratorFunction]" === t3;
          };
        }, 8662: (e2, t2, r2) => {
          "use strict";
          var n2, i = Object.prototype.toString, o = Function.prototype.toString, a = /^\s*(?:function)?\*/, s = r2(6410)(), p = Object.getPrototypeOf;
          e2.exports = function(e3) {
            if ("function" != typeof e3)
              return false;
            if (a.test(o.call(e3)))
              return true;
            if (!s)
              return "[object GeneratorFunction]" === i.call(e3);
            if (!p)
              return false;
            if (void 0 === n2) {
              var t3 = function() {
                if (!s)
                  return false;
                try {
                  return Function("return function*() {}")();
                } catch (e4) {
                }
              }();
              n2 = !!t3 && p(t3);
            }
            return p(e3) === n2;
          };
        }, 5692: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4029), i = r2(3083), o = r2(1924), a = o("Object.prototype.toString"), s = r2(6410)(), p = "undefined" == typeof globalThis ? r2.g : globalThis, c = i(), d = o("Array.prototype.indexOf", true) || function(e3, t3) {
            for (var r3 = 0; r3 < e3.length; r3 += 1)
              if (e3[r3] === t3)
                return r3;
            return -1;
          }, l = o("String.prototype.slice"), u = {}, m = r2(882), h = Object.getPrototypeOf;
          s && m && h && n2(c, function(e3) {
            var t3 = new p[e3]();
            if (Symbol.toStringTag in t3) {
              var r3 = h(t3), n3 = m(r3, Symbol.toStringTag);
              if (!n3) {
                var i2 = h(r3);
                n3 = m(i2, Symbol.toStringTag);
              }
              u[e3] = n3.get;
            }
          });
          e2.exports = function(e3) {
            if (!e3 || "object" != typeof e3)
              return false;
            if (!s || !(Symbol.toStringTag in e3)) {
              var t3 = l(a(e3), 8, -1);
              return d(c, t3) > -1;
            }
            return !!m && function(e4) {
              var t4 = false;
              return n2(u, function(r3, n3) {
                if (!t4)
                  try {
                    t4 = r3.call(e4) === n3;
                  } catch (e5) {
                  }
              }), t4;
            }(e3);
          };
        }, 4155: (e2) => {
          var t2, r2, n2 = e2.exports = {};
          function i() {
            throw new Error("setTimeout has not been defined");
          }
          function o() {
            throw new Error("clearTimeout has not been defined");
          }
          function a(e3) {
            if (t2 === setTimeout)
              return setTimeout(e3, 0);
            if ((t2 === i || !t2) && setTimeout)
              return t2 = setTimeout, setTimeout(e3, 0);
            try {
              return t2(e3, 0);
            } catch (r3) {
              try {
                return t2.call(null, e3, 0);
              } catch (r4) {
                return t2.call(this, e3, 0);
              }
            }
          }
          !function() {
            try {
              t2 = "function" == typeof setTimeout ? setTimeout : i;
            } catch (e3) {
              t2 = i;
            }
            try {
              r2 = "function" == typeof clearTimeout ? clearTimeout : o;
            } catch (e3) {
              r2 = o;
            }
          }();
          var s, p = [], c = false, d = -1;
          function l() {
            c && s && (c = false, s.length ? p = s.concat(p) : d = -1, p.length && u());
          }
          function u() {
            if (!c) {
              var e3 = a(l);
              c = true;
              for (var t3 = p.length; t3; ) {
                for (s = p, p = []; ++d < t3; )
                  s && s[d].run();
                d = -1, t3 = p.length;
              }
              s = null, c = false, function(e4) {
                if (r2 === clearTimeout)
                  return clearTimeout(e4);
                if ((r2 === o || !r2) && clearTimeout)
                  return r2 = clearTimeout, clearTimeout(e4);
                try {
                  r2(e4);
                } catch (t4) {
                  try {
                    return r2.call(null, e4);
                  } catch (t5) {
                    return r2.call(this, e4);
                  }
                }
              }(e3);
            }
          }
          function m(e3, t3) {
            this.fun = e3, this.array = t3;
          }
          function h() {
          }
          n2.nextTick = function(e3) {
            var t3 = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r3 = 1; r3 < arguments.length; r3++)
                t3[r3 - 1] = arguments[r3];
            p.push(new m(e3, t3)), 1 !== p.length || c || a(u);
          }, m.prototype.run = function() {
            this.fun.apply(null, this.array);
          }, n2.title = "browser", n2.browser = true, n2.env = {}, n2.argv = [], n2.version = "", n2.versions = {}, n2.on = h, n2.addListener = h, n2.once = h, n2.off = h, n2.removeListener = h, n2.removeAllListeners = h, n2.emit = h, n2.prependListener = h, n2.prependOnceListener = h, n2.listeners = function(e3) {
            return [];
          }, n2.binding = function(e3) {
            throw new Error("process.binding is not supported");
          }, n2.cwd = function() {
            return "/";
          }, n2.chdir = function(e3) {
            throw new Error("process.chdir is not supported");
          }, n2.umask = function() {
            return 0;
          };
        }, 2587: (e2) => {
          "use strict";
          function t2(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }
          e2.exports = function(e3, r2, n2, i) {
            r2 = r2 || "&", n2 = n2 || "=";
            var o = {};
            if ("string" != typeof e3 || 0 === e3.length)
              return o;
            var a = /\+/g;
            e3 = e3.split(r2);
            var s = 1e3;
            i && "number" == typeof i.maxKeys && (s = i.maxKeys);
            var p = e3.length;
            s > 0 && p > s && (p = s);
            for (var c = 0; c < p; ++c) {
              var d, l, u, m, h = e3[c].replace(a, "%20"), f = h.indexOf(n2);
              f >= 0 ? (d = h.substr(0, f), l = h.substr(f + 1)) : (d = h, l = ""), u = decodeURIComponent(d), m = decodeURIComponent(l), t2(o, u) ? Array.isArray(o[u]) ? o[u].push(m) : o[u] = [o[u], m] : o[u] = m;
            }
            return o;
          };
        }, 2361: (e2) => {
          "use strict";
          var t2 = function(e3) {
            switch (typeof e3) {
              case "string":
                return e3;
              case "boolean":
                return e3 ? "true" : "false";
              case "number":
                return isFinite(e3) ? e3 : "";
              default:
                return "";
            }
          };
          e2.exports = function(e3, r2, n2, i) {
            return r2 = r2 || "&", n2 = n2 || "=", null === e3 && (e3 = void 0), "object" == typeof e3 ? Object.keys(e3).map(function(i2) {
              var o = encodeURIComponent(t2(i2)) + n2;
              return Array.isArray(e3[i2]) ? e3[i2].map(function(e4) {
                return o + encodeURIComponent(t2(e4));
              }).join(r2) : o + encodeURIComponent(t2(e3[i2]));
            }).join(r2) : i ? encodeURIComponent(t2(i)) + n2 + encodeURIComponent(t2(e3)) : "";
          };
        }, 7673: (e2, t2, r2) => {
          "use strict";
          t2.decode = t2.parse = r2(2587), t2.encode = t2.stringify = r2(2361);
        }, 5666: function(e2, t2, r2) {
          !function(t3) {
            "use strict";
            var r3, n2 = Object.prototype, i = n2.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", p = o.toStringTag || "@@toStringTag", c = t3.regeneratorRuntime;
            if (c)
              e2.exports = c;
            else {
              (c = t3.regeneratorRuntime = e2.exports).wrap = v;
              var d = "suspendedStart", l = "suspendedYield", u = "executing", m = "completed", h = {}, f = {};
              f[a] = function() {
                return this;
              };
              var y = Object.getPrototypeOf, g = y && y(y(A([])));
              g && g !== n2 && i.call(g, a) && (f = g);
              var b = x.prototype = S.prototype = Object.create(f);
              I.prototype = b.constructor = x, x.constructor = I, x[p] = I.displayName = "GeneratorFunction", c.isGeneratorFunction = function(e3) {
                var t4 = "function" == typeof e3 && e3.constructor;
                return !!t4 && (t4 === I || "GeneratorFunction" === (t4.displayName || t4.name));
              }, c.mark = function(e3) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e3, x) : (e3.__proto__ = x, p in e3 || (e3[p] = "GeneratorFunction")), e3.prototype = Object.create(b), e3;
              }, c.awrap = function(e3) {
                return { __await: e3 };
              }, T(k.prototype), k.prototype[s] = function() {
                return this;
              }, c.AsyncIterator = k, c.async = function(e3, t4, r4, n3) {
                var i2 = new k(v(e3, t4, r4, n3));
                return c.isGeneratorFunction(t4) ? i2 : i2.next().then(function(e4) {
                  return e4.done ? e4.value : i2.next();
                });
              }, T(b), b[p] = "Generator", b[a] = function() {
                return this;
              }, b.toString = function() {
                return "[object Generator]";
              }, c.keys = function(e3) {
                var t4 = [];
                for (var r4 in e3)
                  t4.push(r4);
                return t4.reverse(), function r5() {
                  for (; t4.length; ) {
                    var n3 = t4.pop();
                    if (n3 in e3)
                      return r5.value = n3, r5.done = false, r5;
                  }
                  return r5.done = true, r5;
                };
              }, c.values = A, O.prototype = { constructor: O, reset: function(e3) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = r3, this.done = false, this.delegate = null, this.method = "next", this.arg = r3, this.tryEntries.forEach($), !e3)
                  for (var t4 in this)
                    "t" === t4.charAt(0) && i.call(this, t4) && !isNaN(+t4.slice(1)) && (this[t4] = r3);
              }, stop: function() {
                this.done = true;
                var e3 = this.tryEntries[0].completion;
                if ("throw" === e3.type)
                  throw e3.arg;
                return this.rval;
              }, dispatchException: function(e3) {
                if (this.done)
                  throw e3;
                var t4 = this;
                function n3(n4, i2) {
                  return s2.type = "throw", s2.arg = e3, t4.next = n4, i2 && (t4.method = "next", t4.arg = r3), !!i2;
                }
                for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
                  var a2 = this.tryEntries[o2], s2 = a2.completion;
                  if ("root" === a2.tryLoc)
                    return n3("end");
                  if (a2.tryLoc <= this.prev) {
                    var p2 = i.call(a2, "catchLoc"), c2 = i.call(a2, "finallyLoc");
                    if (p2 && c2) {
                      if (this.prev < a2.catchLoc)
                        return n3(a2.catchLoc, true);
                      if (this.prev < a2.finallyLoc)
                        return n3(a2.finallyLoc);
                    } else if (p2) {
                      if (this.prev < a2.catchLoc)
                        return n3(a2.catchLoc, true);
                    } else {
                      if (!c2)
                        throw new Error("try statement without catch or finally");
                      if (this.prev < a2.finallyLoc)
                        return n3(a2.finallyLoc);
                    }
                  }
                }
              }, abrupt: function(e3, t4) {
                for (var r4 = this.tryEntries.length - 1; r4 >= 0; --r4) {
                  var n3 = this.tryEntries[r4];
                  if (n3.tryLoc <= this.prev && i.call(n3, "finallyLoc") && this.prev < n3.finallyLoc) {
                    var o2 = n3;
                    break;
                  }
                }
                o2 && ("break" === e3 || "continue" === e3) && o2.tryLoc <= t4 && t4 <= o2.finallyLoc && (o2 = null);
                var a2 = o2 ? o2.completion : {};
                return a2.type = e3, a2.arg = t4, o2 ? (this.method = "next", this.next = o2.finallyLoc, h) : this.complete(a2);
              }, complete: function(e3, t4) {
                if ("throw" === e3.type)
                  throw e3.arg;
                return "break" === e3.type || "continue" === e3.type ? this.next = e3.arg : "return" === e3.type ? (this.rval = this.arg = e3.arg, this.method = "return", this.next = "end") : "normal" === e3.type && t4 && (this.next = t4), h;
              }, finish: function(e3) {
                for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
                  var r4 = this.tryEntries[t4];
                  if (r4.finallyLoc === e3)
                    return this.complete(r4.completion, r4.afterLoc), $(r4), h;
                }
              }, catch: function(e3) {
                for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
                  var r4 = this.tryEntries[t4];
                  if (r4.tryLoc === e3) {
                    var n3 = r4.completion;
                    if ("throw" === n3.type) {
                      var i2 = n3.arg;
                      $(r4);
                    }
                    return i2;
                  }
                }
                throw new Error("illegal catch attempt");
              }, delegateYield: function(e3, t4, n3) {
                return this.delegate = { iterator: A(e3), resultName: t4, nextLoc: n3 }, "next" === this.method && (this.arg = r3), h;
              } };
            }
            function v(e3, t4, r4, n3) {
              var i2 = t4 && t4.prototype instanceof S ? t4 : S, o2 = Object.create(i2.prototype), a2 = new O(n3 || []);
              return o2._invoke = function(e4, t5, r5) {
                var n4 = d;
                return function(i3, o3) {
                  if (n4 === u)
                    throw new Error("Generator is already running");
                  if (n4 === m) {
                    if ("throw" === i3)
                      throw o3;
                    return P();
                  }
                  for (r5.method = i3, r5.arg = o3; ; ) {
                    var a3 = r5.delegate;
                    if (a3) {
                      var s2 = C(a3, r5);
                      if (s2) {
                        if (s2 === h)
                          continue;
                        return s2;
                      }
                    }
                    if ("next" === r5.method)
                      r5.sent = r5._sent = r5.arg;
                    else if ("throw" === r5.method) {
                      if (n4 === d)
                        throw n4 = m, r5.arg;
                      r5.dispatchException(r5.arg);
                    } else
                      "return" === r5.method && r5.abrupt("return", r5.arg);
                    n4 = u;
                    var p2 = w(e4, t5, r5);
                    if ("normal" === p2.type) {
                      if (n4 = r5.done ? m : l, p2.arg === h)
                        continue;
                      return { value: p2.arg, done: r5.done };
                    }
                    "throw" === p2.type && (n4 = m, r5.method = "throw", r5.arg = p2.arg);
                  }
                };
              }(e3, r4, a2), o2;
            }
            function w(e3, t4, r4) {
              try {
                return { type: "normal", arg: e3.call(t4, r4) };
              } catch (e4) {
                return { type: "throw", arg: e4 };
              }
            }
            function S() {
            }
            function I() {
            }
            function x() {
            }
            function T(e3) {
              ["next", "throw", "return"].forEach(function(t4) {
                e3[t4] = function(e4) {
                  return this._invoke(t4, e4);
                };
              });
            }
            function k(e3) {
              function r4(t4, n4, o2, a2) {
                var s2 = w(e3[t4], e3, n4);
                if ("throw" !== s2.type) {
                  var p2 = s2.arg, c2 = p2.value;
                  return c2 && "object" == typeof c2 && i.call(c2, "__await") ? Promise.resolve(c2.__await).then(function(e4) {
                    r4("next", e4, o2, a2);
                  }, function(e4) {
                    r4("throw", e4, o2, a2);
                  }) : Promise.resolve(c2).then(function(e4) {
                    p2.value = e4, o2(p2);
                  }, a2);
                }
                a2(s2.arg);
              }
              var n3;
              "object" == typeof t3.process && t3.process.domain && (r4 = t3.process.domain.bind(r4)), this._invoke = function(e4, t4) {
                function i2() {
                  return new Promise(function(n4, i3) {
                    r4(e4, t4, n4, i3);
                  });
                }
                return n3 = n3 ? n3.then(i2, i2) : i2();
              };
            }
            function C(e3, t4) {
              var n3 = e3.iterator[t4.method];
              if (n3 === r3) {
                if (t4.delegate = null, "throw" === t4.method) {
                  if (e3.iterator.return && (t4.method = "return", t4.arg = r3, C(e3, t4), "throw" === t4.method))
                    return h;
                  t4.method = "throw", t4.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return h;
              }
              var i2 = w(n3, e3.iterator, t4.arg);
              if ("throw" === i2.type)
                return t4.method = "throw", t4.arg = i2.arg, t4.delegate = null, h;
              var o2 = i2.arg;
              return o2 ? o2.done ? (t4[e3.resultName] = o2.value, t4.next = e3.nextLoc, "return" !== t4.method && (t4.method = "next", t4.arg = r3), t4.delegate = null, h) : o2 : (t4.method = "throw", t4.arg = new TypeError("iterator result is not an object"), t4.delegate = null, h);
            }
            function R(e3) {
              var t4 = { tryLoc: e3[0] };
              1 in e3 && (t4.catchLoc = e3[1]), 2 in e3 && (t4.finallyLoc = e3[2], t4.afterLoc = e3[3]), this.tryEntries.push(t4);
            }
            function $(e3) {
              var t4 = e3.completion || {};
              t4.type = "normal", delete t4.arg, e3.completion = t4;
            }
            function O(e3) {
              this.tryEntries = [{ tryLoc: "root" }], e3.forEach(R, this), this.reset(true);
            }
            function A(e3) {
              if (e3) {
                var t4 = e3[a];
                if (t4)
                  return t4.call(e3);
                if ("function" == typeof e3.next)
                  return e3;
                if (!isNaN(e3.length)) {
                  var n3 = -1, o2 = function t5() {
                    for (; ++n3 < e3.length; )
                      if (i.call(e3, n3))
                        return t5.value = e3[n3], t5.done = false, t5;
                    return t5.value = r3, t5.done = true, t5;
                  };
                  return o2.next = o2;
                }
              }
              return { next: P };
            }
            function P() {
              return { value: r3, done: true };
            }
          }("object" == typeof r2.g ? r2.g : "object" == typeof fakeWindow ? fakeWindow : "object" == typeof self ? self : this);
        }, 2511: function(e2, t2, r2) {
          var n2;
          e2 = r2.nmd(e2), function(i) {
            t2 && t2.nodeType, e2 && e2.nodeType;
            var o = "object" == typeof r2.g && r2.g;
            o.global !== o && o.window !== o && o.self;
            var a, s = 2147483647, p = 36, c = /^xn--/, d = /[^\x20-\x7E]/, l = /[\x2E\u3002\uFF0E\uFF61]/g, u = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, m = Math.floor, h = String.fromCharCode;
            function f(e3) {
              throw RangeError(u[e3]);
            }
            function y(e3, t3) {
              for (var r3 = e3.length, n3 = []; r3--; )
                n3[r3] = t3(e3[r3]);
              return n3;
            }
            function g(e3, t3) {
              var r3 = e3.split("@"), n3 = "";
              return r3.length > 1 && (n3 = r3[0] + "@", e3 = r3[1]), n3 + y((e3 = e3.replace(l, ".")).split("."), t3).join(".");
            }
            function b(e3) {
              for (var t3, r3, n3 = [], i2 = 0, o2 = e3.length; i2 < o2; )
                (t3 = e3.charCodeAt(i2++)) >= 55296 && t3 <= 56319 && i2 < o2 ? 56320 == (64512 & (r3 = e3.charCodeAt(i2++))) ? n3.push(((1023 & t3) << 10) + (1023 & r3) + 65536) : (n3.push(t3), i2--) : n3.push(t3);
              return n3;
            }
            function v(e3) {
              return y(e3, function(e4) {
                var t3 = "";
                return e4 > 65535 && (t3 += h((e4 -= 65536) >>> 10 & 1023 | 55296), e4 = 56320 | 1023 & e4), t3 += h(e4);
              }).join("");
            }
            function w(e3, t3) {
              return e3 + 22 + 75 * (e3 < 26) - ((0 != t3) << 5);
            }
            function S(e3, t3, r3) {
              var n3 = 0;
              for (e3 = r3 ? m(e3 / 700) : e3 >> 1, e3 += m(e3 / t3); e3 > 455; n3 += p)
                e3 = m(e3 / 35);
              return m(n3 + 36 * e3 / (e3 + 38));
            }
            function I(e3) {
              var t3, r3, n3, i2, o2, a2, c2, d2, l2, u2, h2, y2 = [], g2 = e3.length, b2 = 0, w2 = 128, I2 = 72;
              for ((r3 = e3.lastIndexOf("-")) < 0 && (r3 = 0), n3 = 0; n3 < r3; ++n3)
                e3.charCodeAt(n3) >= 128 && f("not-basic"), y2.push(e3.charCodeAt(n3));
              for (i2 = r3 > 0 ? r3 + 1 : 0; i2 < g2; ) {
                for (o2 = b2, a2 = 1, c2 = p; i2 >= g2 && f("invalid-input"), ((d2 = (h2 = e3.charCodeAt(i2++)) - 48 < 10 ? h2 - 22 : h2 - 65 < 26 ? h2 - 65 : h2 - 97 < 26 ? h2 - 97 : p) >= p || d2 > m((s - b2) / a2)) && f("overflow"), b2 += d2 * a2, !(d2 < (l2 = c2 <= I2 ? 1 : c2 >= I2 + 26 ? 26 : c2 - I2)); c2 += p)
                  a2 > m(s / (u2 = p - l2)) && f("overflow"), a2 *= u2;
                I2 = S(b2 - o2, t3 = y2.length + 1, 0 == o2), m(b2 / t3) > s - w2 && f("overflow"), w2 += m(b2 / t3), b2 %= t3, y2.splice(b2++, 0, w2);
              }
              return v(y2);
            }
            function x(e3) {
              var t3, r3, n3, i2, o2, a2, c2, d2, l2, u2, y2, g2, v2, I2, x2, T = [];
              for (g2 = (e3 = b(e3)).length, t3 = 128, r3 = 0, o2 = 72, a2 = 0; a2 < g2; ++a2)
                (y2 = e3[a2]) < 128 && T.push(h(y2));
              for (n3 = i2 = T.length, i2 && T.push("-"); n3 < g2; ) {
                for (c2 = s, a2 = 0; a2 < g2; ++a2)
                  (y2 = e3[a2]) >= t3 && y2 < c2 && (c2 = y2);
                for (c2 - t3 > m((s - r3) / (v2 = n3 + 1)) && f("overflow"), r3 += (c2 - t3) * v2, t3 = c2, a2 = 0; a2 < g2; ++a2)
                  if ((y2 = e3[a2]) < t3 && ++r3 > s && f("overflow"), y2 == t3) {
                    for (d2 = r3, l2 = p; !(d2 < (u2 = l2 <= o2 ? 1 : l2 >= o2 + 26 ? 26 : l2 - o2)); l2 += p)
                      x2 = d2 - u2, I2 = p - u2, T.push(h(w(u2 + x2 % I2, 0))), d2 = m(x2 / I2);
                    T.push(h(w(d2, 0))), o2 = S(r3, v2, n3 == i2), r3 = 0, ++n3;
                  }
                ++r3, ++t3;
              }
              return T.join("");
            }
            a = { version: "1.3.2", ucs2: { decode: b, encode: v }, decode: I, encode: x, toASCII: function(e3) {
              return g(e3, function(e4) {
                return d.test(e4) ? "xn--" + x(e4) : e4;
              });
            }, toUnicode: function(e3) {
              return g(e3, function(e4) {
                return c.test(e4) ? I(e4.slice(4).toLowerCase()) : e4;
              });
            } }, void 0 === (n2 = function() {
              return a;
            }.call(t2, r2, t2, e2)) || (e2.exports = n2);
          }();
        }, 8575: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2511), i = r2(2502);
          function o() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
          }
          t2.Qc = v, t2.WU = function(e3) {
            i.isString(e3) && (e3 = v(e3));
            return e3 instanceof o ? e3.format() : o.prototype.format.call(e3);
          };
          var a = /^([a-z0-9.+-]+:)/i, s = /:[0-9]*$/, p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]), d = ["'"].concat(c), l = ["%", "/", "?", ";", "#"].concat(d), u = ["/", "?", "#"], m = /^[+a-z0-9A-Z_-]{0,63}$/, h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, f = { javascript: true, "javascript:": true }, y = { javascript: true, "javascript:": true }, g = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true }, b = r2(7673);
          function v(e3, t3, r3) {
            if (e3 && i.isObject(e3) && e3 instanceof o)
              return e3;
            var n3 = new o();
            return n3.parse(e3, t3, r3), n3;
          }
          o.prototype.parse = function(e3, t3, r3) {
            if (!i.isString(e3))
              throw new TypeError("Parameter 'url' must be a string, not " + typeof e3);
            var o2 = e3.indexOf("?"), s2 = -1 !== o2 && o2 < e3.indexOf("#") ? "?" : "#", c2 = e3.split(s2);
            c2[0] = c2[0].replace(/\\/g, "/");
            var v2 = e3 = c2.join(s2);
            if (v2 = v2.trim(), !r3 && 1 === e3.split("#").length) {
              var w = p.exec(v2);
              if (w)
                return this.path = v2, this.href = v2, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t3 ? b.parse(this.search.substr(1)) : this.search.substr(1)) : t3 && (this.search = "", this.query = {}), this;
            }
            var S = a.exec(v2);
            if (S) {
              var I = (S = S[0]).toLowerCase();
              this.protocol = I, v2 = v2.substr(S.length);
            }
            if (r3 || S || v2.match(/^\/\/[^@\/]+@[^@\/]+/)) {
              var x = "//" === v2.substr(0, 2);
              !x || S && y[S] || (v2 = v2.substr(2), this.slashes = true);
            }
            if (!y[S] && (x || S && !g[S])) {
              for (var T, k, C = -1, R = 0; R < u.length; R++) {
                -1 !== ($ = v2.indexOf(u[R])) && (-1 === C || $ < C) && (C = $);
              }
              -1 !== (k = -1 === C ? v2.lastIndexOf("@") : v2.lastIndexOf("@", C)) && (T = v2.slice(0, k), v2 = v2.slice(k + 1), this.auth = decodeURIComponent(T)), C = -1;
              for (R = 0; R < l.length; R++) {
                var $;
                -1 !== ($ = v2.indexOf(l[R])) && (-1 === C || $ < C) && (C = $);
              }
              -1 === C && (C = v2.length), this.host = v2.slice(0, C), v2 = v2.slice(C), this.parseHost(), this.hostname = this.hostname || "";
              var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
              if (!O)
                for (var A = this.hostname.split(/\./), P = (R = 0, A.length); R < P; R++) {
                  var D = A[R];
                  if (D && !D.match(m)) {
                    for (var j = "", N = 0, E = D.length; N < E; N++)
                      D.charCodeAt(N) > 127 ? j += "x" : j += D[N];
                    if (!j.match(m)) {
                      var M = A.slice(0, R), F = A.slice(R + 1), q = D.match(h);
                      q && (M.push(q[1]), F.unshift(q[2])), F.length && (v2 = "/" + F.join(".") + v2), this.hostname = M.join(".");
                      break;
                    }
                  }
                }
              this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = n2.toASCII(this.hostname));
              var L = this.port ? ":" + this.port : "", B = this.hostname || "";
              this.host = B + L, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== v2[0] && (v2 = "/" + v2));
            }
            if (!f[I])
              for (R = 0, P = d.length; R < P; R++) {
                var U = d[R];
                if (-1 !== v2.indexOf(U)) {
                  var W = encodeURIComponent(U);
                  W === U && (W = escape(U)), v2 = v2.split(U).join(W);
                }
              }
            var _ = v2.indexOf("#");
            -1 !== _ && (this.hash = v2.substr(_), v2 = v2.slice(0, _));
            var H = v2.indexOf("?");
            if (-1 !== H ? (this.search = v2.substr(H), this.query = v2.substr(H + 1), t3 && (this.query = b.parse(this.query)), v2 = v2.slice(0, H)) : t3 && (this.search = "", this.query = {}), v2 && (this.pathname = v2), g[I] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
              L = this.pathname || "";
              var V = this.search || "";
              this.path = L + V;
            }
            return this.href = this.format(), this;
          }, o.prototype.format = function() {
            var e3 = this.auth || "";
            e3 && (e3 = (e3 = encodeURIComponent(e3)).replace(/%3A/i, ":"), e3 += "@");
            var t3 = this.protocol || "", r3 = this.pathname || "", n3 = this.hash || "", o2 = false, a2 = "";
            this.host ? o2 = e3 + this.host : this.hostname && (o2 = e3 + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o2 += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a2 = b.stringify(this.query));
            var s2 = this.search || a2 && "?" + a2 || "";
            return t3 && ":" !== t3.substr(-1) && (t3 += ":"), this.slashes || (!t3 || g[t3]) && false !== o2 ? (o2 = "//" + (o2 || ""), r3 && "/" !== r3.charAt(0) && (r3 = "/" + r3)) : o2 || (o2 = ""), n3 && "#" !== n3.charAt(0) && (n3 = "#" + n3), s2 && "?" !== s2.charAt(0) && (s2 = "?" + s2), t3 + o2 + (r3 = r3.replace(/[?#]/g, function(e4) {
              return encodeURIComponent(e4);
            })) + (s2 = s2.replace("#", "%23")) + n3;
          }, o.prototype.resolve = function(e3) {
            return this.resolveObject(v(e3, false, true)).format();
          }, o.prototype.resolveObject = function(e3) {
            if (i.isString(e3)) {
              var t3 = new o();
              t3.parse(e3, false, true), e3 = t3;
            }
            for (var r3 = new o(), n3 = Object.keys(this), a2 = 0; a2 < n3.length; a2++) {
              var s2 = n3[a2];
              r3[s2] = this[s2];
            }
            if (r3.hash = e3.hash, "" === e3.href)
              return r3.href = r3.format(), r3;
            if (e3.slashes && !e3.protocol) {
              for (var p2 = Object.keys(e3), c2 = 0; c2 < p2.length; c2++) {
                var d2 = p2[c2];
                "protocol" !== d2 && (r3[d2] = e3[d2]);
              }
              return g[r3.protocol] && r3.hostname && !r3.pathname && (r3.path = r3.pathname = "/"), r3.href = r3.format(), r3;
            }
            if (e3.protocol && e3.protocol !== r3.protocol) {
              if (!g[e3.protocol]) {
                for (var l2 = Object.keys(e3), u2 = 0; u2 < l2.length; u2++) {
                  var m2 = l2[u2];
                  r3[m2] = e3[m2];
                }
                return r3.href = r3.format(), r3;
              }
              if (r3.protocol = e3.protocol, e3.host || y[e3.protocol])
                r3.pathname = e3.pathname;
              else {
                for (var h2 = (e3.pathname || "").split("/"); h2.length && !(e3.host = h2.shift()); )
                  ;
                e3.host || (e3.host = ""), e3.hostname || (e3.hostname = ""), "" !== h2[0] && h2.unshift(""), h2.length < 2 && h2.unshift(""), r3.pathname = h2.join("/");
              }
              if (r3.search = e3.search, r3.query = e3.query, r3.host = e3.host || "", r3.auth = e3.auth, r3.hostname = e3.hostname || e3.host, r3.port = e3.port, r3.pathname || r3.search) {
                var f2 = r3.pathname || "", b2 = r3.search || "";
                r3.path = f2 + b2;
              }
              return r3.slashes = r3.slashes || e3.slashes, r3.href = r3.format(), r3;
            }
            var v2 = r3.pathname && "/" === r3.pathname.charAt(0), w = e3.host || e3.pathname && "/" === e3.pathname.charAt(0), S = w || v2 || r3.host && e3.pathname, I = S, x = r3.pathname && r3.pathname.split("/") || [], T = (h2 = e3.pathname && e3.pathname.split("/") || [], r3.protocol && !g[r3.protocol]);
            if (T && (r3.hostname = "", r3.port = null, r3.host && ("" === x[0] ? x[0] = r3.host : x.unshift(r3.host)), r3.host = "", e3.protocol && (e3.hostname = null, e3.port = null, e3.host && ("" === h2[0] ? h2[0] = e3.host : h2.unshift(e3.host)), e3.host = null), S = S && ("" === h2[0] || "" === x[0])), w)
              r3.host = e3.host || "" === e3.host ? e3.host : r3.host, r3.hostname = e3.hostname || "" === e3.hostname ? e3.hostname : r3.hostname, r3.search = e3.search, r3.query = e3.query, x = h2;
            else if (h2.length)
              x || (x = []), x.pop(), x = x.concat(h2), r3.search = e3.search, r3.query = e3.query;
            else if (!i.isNullOrUndefined(e3.search)) {
              if (T)
                r3.hostname = r3.host = x.shift(), (O = !!(r3.host && r3.host.indexOf("@") > 0) && r3.host.split("@")) && (r3.auth = O.shift(), r3.host = r3.hostname = O.shift());
              return r3.search = e3.search, r3.query = e3.query, i.isNull(r3.pathname) && i.isNull(r3.search) || (r3.path = (r3.pathname ? r3.pathname : "") + (r3.search ? r3.search : "")), r3.href = r3.format(), r3;
            }
            if (!x.length)
              return r3.pathname = null, r3.search ? r3.path = "/" + r3.search : r3.path = null, r3.href = r3.format(), r3;
            for (var k = x.slice(-1)[0], C = (r3.host || e3.host || x.length > 1) && ("." === k || ".." === k) || "" === k, R = 0, $ = x.length; $ >= 0; $--)
              "." === (k = x[$]) ? x.splice($, 1) : ".." === k ? (x.splice($, 1), R++) : R && (x.splice($, 1), R--);
            if (!S && !I)
              for (; R--; R)
                x.unshift("..");
            !S || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), C && "/" !== x.join("/").substr(-1) && x.push("");
            var O, A = "" === x[0] || x[0] && "/" === x[0].charAt(0);
            T && (r3.hostname = r3.host = A ? "" : x.length ? x.shift() : "", (O = !!(r3.host && r3.host.indexOf("@") > 0) && r3.host.split("@")) && (r3.auth = O.shift(), r3.host = r3.hostname = O.shift()));
            return (S = S || r3.host && x.length) && !A && x.unshift(""), x.length ? r3.pathname = x.join("/") : (r3.pathname = null, r3.path = null), i.isNull(r3.pathname) && i.isNull(r3.search) || (r3.path = (r3.pathname ? r3.pathname : "") + (r3.search ? r3.search : "")), r3.auth = e3.auth || r3.auth, r3.slashes = r3.slashes || e3.slashes, r3.href = r3.format(), r3;
          }, o.prototype.parseHost = function() {
            var e3 = this.host, t3 = s.exec(e3);
            t3 && (":" !== (t3 = t3[0]) && (this.port = t3.substr(1)), e3 = e3.substr(0, e3.length - t3.length)), e3 && (this.hostname = e3);
          };
        }, 2502: (e2) => {
          "use strict";
          e2.exports = { isString: function(e3) {
            return "string" == typeof e3;
          }, isObject: function(e3) {
            return "object" == typeof e3 && null !== e3;
          }, isNull: function(e3) {
            return null === e3;
          }, isNullOrUndefined: function(e3) {
            return null == e3;
          } };
        }, 384: (e2) => {
          e2.exports = function(e3) {
            return e3 && "object" == typeof e3 && "function" == typeof e3.copy && "function" == typeof e3.fill && "function" == typeof e3.readUInt8;
          };
        }, 5955: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(2584), i = r2(8662), o = r2(6430), a = r2(5692);
          function s(e3) {
            return e3.call.bind(e3);
          }
          var p = "undefined" != typeof BigInt, c = "undefined" != typeof Symbol, d = s(Object.prototype.toString), l = s(Number.prototype.valueOf), u = s(String.prototype.valueOf), m = s(Boolean.prototype.valueOf);
          if (p)
            var h = s(BigInt.prototype.valueOf);
          if (c)
            var f = s(Symbol.prototype.valueOf);
          function y(e3, t3) {
            if ("object" != typeof e3)
              return false;
            try {
              return t3(e3), true;
            } catch (e4) {
              return false;
            }
          }
          function g(e3) {
            return "[object Map]" === d(e3);
          }
          function b(e3) {
            return "[object Set]" === d(e3);
          }
          function v(e3) {
            return "[object WeakMap]" === d(e3);
          }
          function w(e3) {
            return "[object WeakSet]" === d(e3);
          }
          function S(e3) {
            return "[object ArrayBuffer]" === d(e3);
          }
          function I(e3) {
            return "undefined" != typeof ArrayBuffer && (S.working ? S(e3) : e3 instanceof ArrayBuffer);
          }
          function x(e3) {
            return "[object DataView]" === d(e3);
          }
          function T(e3) {
            return "undefined" != typeof DataView && (x.working ? x(e3) : e3 instanceof DataView);
          }
          t2.isArgumentsObject = n2, t2.isGeneratorFunction = i, t2.isTypedArray = a, t2.isPromise = function(e3) {
            return "undefined" != typeof Promise && e3 instanceof Promise || null !== e3 && "object" == typeof e3 && "function" == typeof e3.then && "function" == typeof e3.catch;
          }, t2.isArrayBufferView = function(e3) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e3) : a(e3) || T(e3);
          }, t2.isUint8Array = function(e3) {
            return "Uint8Array" === o(e3);
          }, t2.isUint8ClampedArray = function(e3) {
            return "Uint8ClampedArray" === o(e3);
          }, t2.isUint16Array = function(e3) {
            return "Uint16Array" === o(e3);
          }, t2.isUint32Array = function(e3) {
            return "Uint32Array" === o(e3);
          }, t2.isInt8Array = function(e3) {
            return "Int8Array" === o(e3);
          }, t2.isInt16Array = function(e3) {
            return "Int16Array" === o(e3);
          }, t2.isInt32Array = function(e3) {
            return "Int32Array" === o(e3);
          }, t2.isFloat32Array = function(e3) {
            return "Float32Array" === o(e3);
          }, t2.isFloat64Array = function(e3) {
            return "Float64Array" === o(e3);
          }, t2.isBigInt64Array = function(e3) {
            return "BigInt64Array" === o(e3);
          }, t2.isBigUint64Array = function(e3) {
            return "BigUint64Array" === o(e3);
          }, g.working = "undefined" != typeof Map && g(/* @__PURE__ */ new Map()), t2.isMap = function(e3) {
            return "undefined" != typeof Map && (g.working ? g(e3) : e3 instanceof Map);
          }, b.working = "undefined" != typeof Set && b(/* @__PURE__ */ new Set()), t2.isSet = function(e3) {
            return "undefined" != typeof Set && (b.working ? b(e3) : e3 instanceof Set);
          }, v.working = "undefined" != typeof WeakMap && v(/* @__PURE__ */ new WeakMap()), t2.isWeakMap = function(e3) {
            return "undefined" != typeof WeakMap && (v.working ? v(e3) : e3 instanceof WeakMap);
          }, w.working = "undefined" != typeof WeakSet && w(/* @__PURE__ */ new WeakSet()), t2.isWeakSet = function(e3) {
            return w(e3);
          }, S.working = "undefined" != typeof ArrayBuffer && S(new ArrayBuffer()), t2.isArrayBuffer = I, x.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && x(new DataView(new ArrayBuffer(1), 0, 1)), t2.isDataView = T;
          var k = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
          function C(e3) {
            return "[object SharedArrayBuffer]" === d(e3);
          }
          function R(e3) {
            return void 0 !== k && (void 0 === C.working && (C.working = C(new k())), C.working ? C(e3) : e3 instanceof k);
          }
          function $(e3) {
            return y(e3, l);
          }
          function O(e3) {
            return y(e3, u);
          }
          function A(e3) {
            return y(e3, m);
          }
          function P(e3) {
            return p && y(e3, h);
          }
          function D(e3) {
            return c && y(e3, f);
          }
          t2.isSharedArrayBuffer = R, t2.isAsyncFunction = function(e3) {
            return "[object AsyncFunction]" === d(e3);
          }, t2.isMapIterator = function(e3) {
            return "[object Map Iterator]" === d(e3);
          }, t2.isSetIterator = function(e3) {
            return "[object Set Iterator]" === d(e3);
          }, t2.isGeneratorObject = function(e3) {
            return "[object Generator]" === d(e3);
          }, t2.isWebAssemblyCompiledModule = function(e3) {
            return "[object WebAssembly.Module]" === d(e3);
          }, t2.isNumberObject = $, t2.isStringObject = O, t2.isBooleanObject = A, t2.isBigIntObject = P, t2.isSymbolObject = D, t2.isBoxedPrimitive = function(e3) {
            return $(e3) || O(e3) || A(e3) || P(e3) || D(e3);
          }, t2.isAnyArrayBuffer = function(e3) {
            return "undefined" != typeof Uint8Array && (I(e3) || R(e3));
          }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e3) {
            Object.defineProperty(t2, e3, { enumerable: false, value: function() {
              throw new Error(e3 + " is not supported in userland");
            } });
          });
        }, 1588: (e2, t2, r2) => {
          var n2 = r2(4155), i = Object.getOwnPropertyDescriptors || function(e3) {
            for (var t3 = Object.keys(e3), r3 = {}, n3 = 0; n3 < t3.length; n3++)
              r3[t3[n3]] = Object.getOwnPropertyDescriptor(e3, t3[n3]);
            return r3;
          }, o = /%[sdj%]/g;
          t2.format = function(e3) {
            if (!v(e3)) {
              for (var t3 = [], r3 = 0; r3 < arguments.length; r3++)
                t3.push(c(arguments[r3]));
              return t3.join(" ");
            }
            r3 = 1;
            for (var n3 = arguments, i2 = n3.length, a2 = String(e3).replace(o, function(e4) {
              if ("%%" === e4)
                return "%";
              if (r3 >= i2)
                return e4;
              switch (e4) {
                case "%s":
                  return String(n3[r3++]);
                case "%d":
                  return Number(n3[r3++]);
                case "%j":
                  try {
                    return JSON.stringify(n3[r3++]);
                  } catch (e5) {
                    return "[Circular]";
                  }
                default:
                  return e4;
              }
            }), s2 = n3[r3]; r3 < i2; s2 = n3[++r3])
              g(s2) || !I(s2) ? a2 += " " + s2 : a2 += " " + c(s2);
            return a2;
          }, t2.deprecate = function(e3, r3) {
            if (void 0 !== n2 && true === n2.noDeprecation)
              return e3;
            if (void 0 === n2)
              return function() {
                return t2.deprecate(e3, r3).apply(this, arguments);
              };
            var i2 = false;
            return function() {
              if (!i2) {
                if (n2.throwDeprecation)
                  throw new Error(r3);
                n2.traceDeprecation ? console.trace(r3) : console.error(r3), i2 = true;
              }
              return e3.apply(this, arguments);
            };
          };
          var a = {}, s = /^$/;
          if (n2.env.NODE_DEBUG) {
            var p = n2.env.NODE_DEBUG;
            p = p.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), s = new RegExp("^" + p + "$", "i");
          }
          function c(e3, r3) {
            var n3 = { seen: [], stylize: l };
            return arguments.length >= 3 && (n3.depth = arguments[2]), arguments.length >= 4 && (n3.colors = arguments[3]), y(r3) ? n3.showHidden = r3 : r3 && t2._extend(n3, r3), w(n3.showHidden) && (n3.showHidden = false), w(n3.depth) && (n3.depth = 2), w(n3.colors) && (n3.colors = false), w(n3.customInspect) && (n3.customInspect = true), n3.colors && (n3.stylize = d), u(n3, e3, n3.depth);
          }
          function d(e3, t3) {
            var r3 = c.styles[t3];
            return r3 ? "\x1B[" + c.colors[r3][0] + "m" + e3 + "\x1B[" + c.colors[r3][1] + "m" : e3;
          }
          function l(e3, t3) {
            return e3;
          }
          function u(e3, r3, n3) {
            if (e3.customInspect && r3 && k(r3.inspect) && r3.inspect !== t2.inspect && (!r3.constructor || r3.constructor.prototype !== r3)) {
              var i2 = r3.inspect(n3, e3);
              return v(i2) || (i2 = u(e3, i2, n3)), i2;
            }
            var o2 = function(e4, t3) {
              if (w(t3))
                return e4.stylize("undefined", "undefined");
              if (v(t3)) {
                var r4 = "'" + JSON.stringify(t3).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e4.stylize(r4, "string");
              }
              if (b(t3))
                return e4.stylize("" + t3, "number");
              if (y(t3))
                return e4.stylize("" + t3, "boolean");
              if (g(t3))
                return e4.stylize("null", "null");
            }(e3, r3);
            if (o2)
              return o2;
            var a2 = Object.keys(r3), s2 = function(e4) {
              var t3 = {};
              return e4.forEach(function(e5, r4) {
                t3[e5] = true;
              }), t3;
            }(a2);
            if (e3.showHidden && (a2 = Object.getOwnPropertyNames(r3)), T(r3) && (a2.indexOf("message") >= 0 || a2.indexOf("description") >= 0))
              return m(r3);
            if (0 === a2.length) {
              if (k(r3)) {
                var p2 = r3.name ? ": " + r3.name : "";
                return e3.stylize("[Function" + p2 + "]", "special");
              }
              if (S(r3))
                return e3.stylize(RegExp.prototype.toString.call(r3), "regexp");
              if (x(r3))
                return e3.stylize(Date.prototype.toString.call(r3), "date");
              if (T(r3))
                return m(r3);
            }
            var c2, d2 = "", l2 = false, I2 = ["{", "}"];
            (f(r3) && (l2 = true, I2 = ["[", "]"]), k(r3)) && (d2 = " [Function" + (r3.name ? ": " + r3.name : "") + "]");
            return S(r3) && (d2 = " " + RegExp.prototype.toString.call(r3)), x(r3) && (d2 = " " + Date.prototype.toUTCString.call(r3)), T(r3) && (d2 = " " + m(r3)), 0 !== a2.length || l2 && 0 != r3.length ? n3 < 0 ? S(r3) ? e3.stylize(RegExp.prototype.toString.call(r3), "regexp") : e3.stylize("[Object]", "special") : (e3.seen.push(r3), c2 = l2 ? function(e4, t3, r4, n4, i3) {
              for (var o3 = [], a3 = 0, s3 = t3.length; a3 < s3; ++a3)
                A(t3, String(a3)) ? o3.push(h(e4, t3, r4, n4, String(a3), true)) : o3.push("");
              return i3.forEach(function(i4) {
                i4.match(/^\d+$/) || o3.push(h(e4, t3, r4, n4, i4, true));
              }), o3;
            }(e3, r3, n3, s2, a2) : a2.map(function(t3) {
              return h(e3, r3, n3, s2, t3, l2);
            }), e3.seen.pop(), function(e4, t3, r4) {
              if (e4.reduce(function(e5, t4) {
                return t4.indexOf("\n") >= 0 && 0, e5 + t4.replace(/\u001b\[\d\d?m/g, "").length + 1;
              }, 0) > 60)
                return r4[0] + ("" === t3 ? "" : t3 + "\n ") + " " + e4.join(",\n  ") + " " + r4[1];
              return r4[0] + t3 + " " + e4.join(", ") + " " + r4[1];
            }(c2, d2, I2)) : I2[0] + d2 + I2[1];
          }
          function m(e3) {
            return "[" + Error.prototype.toString.call(e3) + "]";
          }
          function h(e3, t3, r3, n3, i2, o2) {
            var a2, s2, p2;
            if ((p2 = Object.getOwnPropertyDescriptor(t3, i2) || { value: t3[i2] }).get ? s2 = p2.set ? e3.stylize("[Getter/Setter]", "special") : e3.stylize("[Getter]", "special") : p2.set && (s2 = e3.stylize("[Setter]", "special")), A(n3, i2) || (a2 = "[" + i2 + "]"), s2 || (e3.seen.indexOf(p2.value) < 0 ? (s2 = g(r3) ? u(e3, p2.value, null) : u(e3, p2.value, r3 - 1)).indexOf("\n") > -1 && (s2 = o2 ? s2.split("\n").map(function(e4) {
              return "  " + e4;
            }).join("\n").substr(2) : "\n" + s2.split("\n").map(function(e4) {
              return "   " + e4;
            }).join("\n")) : s2 = e3.stylize("[Circular]", "special")), w(a2)) {
              if (o2 && i2.match(/^\d+$/))
                return s2;
              (a2 = JSON.stringify("" + i2)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a2 = a2.substr(1, a2.length - 2), a2 = e3.stylize(a2, "name")) : (a2 = a2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a2 = e3.stylize(a2, "string"));
            }
            return a2 + ": " + s2;
          }
          function f(e3) {
            return Array.isArray(e3);
          }
          function y(e3) {
            return "boolean" == typeof e3;
          }
          function g(e3) {
            return null === e3;
          }
          function b(e3) {
            return "number" == typeof e3;
          }
          function v(e3) {
            return "string" == typeof e3;
          }
          function w(e3) {
            return void 0 === e3;
          }
          function S(e3) {
            return I(e3) && "[object RegExp]" === C(e3);
          }
          function I(e3) {
            return "object" == typeof e3 && null !== e3;
          }
          function x(e3) {
            return I(e3) && "[object Date]" === C(e3);
          }
          function T(e3) {
            return I(e3) && ("[object Error]" === C(e3) || e3 instanceof Error);
          }
          function k(e3) {
            return "function" == typeof e3;
          }
          function C(e3) {
            return Object.prototype.toString.call(e3);
          }
          function R(e3) {
            return e3 < 10 ? "0" + e3.toString(10) : e3.toString(10);
          }
          t2.debuglog = function(e3) {
            if (e3 = e3.toUpperCase(), !a[e3])
              if (s.test(e3)) {
                var r3 = n2.pid;
                a[e3] = function() {
                  var n3 = t2.format.apply(t2, arguments);
                  console.error("%s %d: %s", e3, r3, n3);
                };
              } else
                a[e3] = function() {
                };
            return a[e3];
          }, t2.inspect = c, c.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, c.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, t2.types = r2(5955), t2.isArray = f, t2.isBoolean = y, t2.isNull = g, t2.isNullOrUndefined = function(e3) {
            return null == e3;
          }, t2.isNumber = b, t2.isString = v, t2.isSymbol = function(e3) {
            return "symbol" == typeof e3;
          }, t2.isUndefined = w, t2.isRegExp = S, t2.types.isRegExp = S, t2.isObject = I, t2.isDate = x, t2.types.isDate = x, t2.isError = T, t2.types.isNativeError = T, t2.isFunction = k, t2.isPrimitive = function(e3) {
            return null === e3 || "boolean" == typeof e3 || "number" == typeof e3 || "string" == typeof e3 || "symbol" == typeof e3 || void 0 === e3;
          }, t2.isBuffer = r2(384);
          var $ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          function O() {
            var e3 = /* @__PURE__ */ new Date(), t3 = [R(e3.getHours()), R(e3.getMinutes()), R(e3.getSeconds())].join(":");
            return [e3.getDate(), $[e3.getMonth()], t3].join(" ");
          }
          function A(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }
          t2.log = function() {
            console.log("%s - %s", O(), t2.format.apply(t2, arguments));
          }, t2.inherits = r2(5717), t2._extend = function(e3, t3) {
            if (!t3 || !I(t3))
              return e3;
            for (var r3 = Object.keys(t3), n3 = r3.length; n3--; )
              e3[r3[n3]] = t3[r3[n3]];
            return e3;
          };
          var P = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
          function D(e3, t3) {
            if (!e3) {
              var r3 = new Error("Promise was rejected with a falsy value");
              r3.reason = e3, e3 = r3;
            }
            return t3(e3);
          }
          t2.promisify = function(e3) {
            if ("function" != typeof e3)
              throw new TypeError('The "original" argument must be of type Function');
            if (P && e3[P]) {
              var t3;
              if ("function" != typeof (t3 = e3[P]))
                throw new TypeError('The "util.promisify.custom" argument must be of type Function');
              return Object.defineProperty(t3, P, { value: t3, enumerable: false, writable: false, configurable: true }), t3;
            }
            function t3() {
              for (var t4, r3, n3 = new Promise(function(e4, n4) {
                t4 = e4, r3 = n4;
              }), i2 = [], o2 = 0; o2 < arguments.length; o2++)
                i2.push(arguments[o2]);
              i2.push(function(e4, n4) {
                e4 ? r3(e4) : t4(n4);
              });
              try {
                e3.apply(this, i2);
              } catch (e4) {
                r3(e4);
              }
              return n3;
            }
            return Object.setPrototypeOf(t3, Object.getPrototypeOf(e3)), P && Object.defineProperty(t3, P, { value: t3, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t3, i(e3));
          }, t2.promisify.custom = P, t2.callbackify = function(e3) {
            if ("function" != typeof e3)
              throw new TypeError('The "original" argument must be of type Function');
            function t3() {
              for (var t4 = [], r3 = 0; r3 < arguments.length; r3++)
                t4.push(arguments[r3]);
              var i2 = t4.pop();
              if ("function" != typeof i2)
                throw new TypeError("The last argument must be of type Function");
              var o2 = this, a2 = function() {
                return i2.apply(o2, arguments);
              };
              e3.apply(this, t4).then(function(e4) {
                n2.nextTick(a2.bind(null, null, e4));
              }, function(e4) {
                n2.nextTick(D.bind(null, e4, a2));
              });
            }
            return Object.setPrototypeOf(t3, Object.getPrototypeOf(e3)), Object.defineProperties(t3, i(e3)), t3;
          };
        }, 6430: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(4029), i = r2(3083), o = r2(1924), a = o("Object.prototype.toString"), s = r2(6410)(), p = "undefined" == typeof globalThis ? r2.g : globalThis, c = i(), d = o("String.prototype.slice"), l = {}, u = r2(882), m = Object.getPrototypeOf;
          s && u && m && n2(c, function(e3) {
            if ("function" == typeof p[e3]) {
              var t3 = new p[e3]();
              if (Symbol.toStringTag in t3) {
                var r3 = m(t3), n3 = u(r3, Symbol.toStringTag);
                if (!n3) {
                  var i2 = m(r3);
                  n3 = u(i2, Symbol.toStringTag);
                }
                l[e3] = n3.get;
              }
            }
          });
          var h = r2(5692);
          e2.exports = function(e3) {
            return !!h(e3) && (s && Symbol.toStringTag in e3 ? function(e4) {
              var t3 = false;
              return n2(l, function(r3, n3) {
                if (!t3)
                  try {
                    var i2 = r3.call(e4);
                    i2 === n3 && (t3 = i2);
                  } catch (e5) {
                  }
              }), t3;
            }(e3) : d(a(e3), 8, -1));
          };
        }, 4162: (e2) => {
          "use strict";
          e2.exports = function(e3, t2, r2) {
            fakeWindow.criRequest(t2, r2);
          };
        }, 3423: () => {
        }, 8532: () => {
        }, 4782: () => {
        }, 3083: (e2, t2, r2) => {
          "use strict";
          var n2 = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], i = "undefined" == typeof globalThis ? r2.g : globalThis;
          e2.exports = function() {
            for (var e3 = [], t3 = 0; t3 < n2.length; t3++)
              "function" == typeof i[n2[t3]] && (e3[e3.length] = n2[t3]);
            return e3;
          };
        }, 882: (e2, t2, r2) => {
          "use strict";
          var n2 = r2(210)("%Object.getOwnPropertyDescriptor%", true);
          if (n2)
            try {
              n2([], "length");
            } catch (e3) {
              n2 = null;
            }
          e2.exports = n2;
        }, 4203: (e2) => {
          "use strict";
          e2.exports = JSON.parse('{"version":{"major":"1","minor":"3"},"domains":[{"domain":"Accessibility","experimental":true,"dependencies":["DOM"],"types":[{"id":"AXNodeId","description":"Unique accessibility node identifier.","type":"string"},{"id":"AXValueType","description":"Enum of possible property types.","type":"string","enum":["boolean","tristate","booleanOrUndefined","idref","idrefList","integer","node","nodeList","number","string","computedString","token","tokenList","domRelation","role","internalRole","valueUndefined"]},{"id":"AXValueSourceType","description":"Enum of possible property sources.","type":"string","enum":["attribute","implicit","style","contents","placeholder","relatedElement"]},{"id":"AXValueNativeSourceType","description":"Enum of possible native property sources (as a subtype of a particular AXValueSourceType).","type":"string","enum":["description","figcaption","label","labelfor","labelwrapped","legend","rubyannotation","tablecaption","title","other"]},{"id":"AXValueSource","description":"A single source for a computed AX property.","type":"object","properties":[{"name":"type","description":"What type of source this is.","$ref":"AXValueSourceType"},{"name":"value","description":"The value of this property source.","optional":true,"$ref":"AXValue"},{"name":"attribute","description":"The name of the relevant attribute, if any.","optional":true,"type":"string"},{"name":"attributeValue","description":"The value of the relevant attribute, if any.","optional":true,"$ref":"AXValue"},{"name":"superseded","description":"Whether this source is superseded by a higher priority source.","optional":true,"type":"boolean"},{"name":"nativeSource","description":"The native markup source for this value, e.g. a <label> element.","optional":true,"$ref":"AXValueNativeSourceType"},{"name":"nativeSourceValue","description":"The value, such as a node or node list, of the native source.","optional":true,"$ref":"AXValue"},{"name":"invalid","description":"Whether the value for this property is invalid.","optional":true,"type":"boolean"},{"name":"invalidReason","description":"Reason for the value being invalid, if it is.","optional":true,"type":"string"}]},{"id":"AXRelatedNode","type":"object","properties":[{"name":"backendDOMNodeId","description":"The BackendNodeId of the related DOM node.","$ref":"DOM.BackendNodeId"},{"name":"idref","description":"The IDRef value provided, if any.","optional":true,"type":"string"},{"name":"text","description":"The text alternative of this node in the current context.","optional":true,"type":"string"}]},{"id":"AXProperty","type":"object","properties":[{"name":"name","description":"The name of this property.","$ref":"AXPropertyName"},{"name":"value","description":"The value of this property.","$ref":"AXValue"}]},{"id":"AXValue","description":"A single computed AX property.","type":"object","properties":[{"name":"type","description":"The type of this value.","$ref":"AXValueType"},{"name":"value","description":"The computed value of this property.","optional":true,"type":"any"},{"name":"relatedNodes","description":"One or more related nodes, if applicable.","optional":true,"type":"array","items":{"$ref":"AXRelatedNode"}},{"name":"sources","description":"The sources which contributed to the computation of this property.","optional":true,"type":"array","items":{"$ref":"AXValueSource"}}]},{"id":"AXPropertyName","description":"Values of AXProperty name:\\n- from \'busy\' to \'roledescription\': states which apply to every AX node\\n- from \'live\' to \'root\': attributes which apply to nodes in live regions\\n- from \'autocomplete\' to \'valuetext\': attributes which apply to widgets\\n- from \'checked\' to \'selected\': states which apply to widgets\\n- from \'activedescendant\' to \'owns\' - relationships between elements other than parent/child/sibling.","type":"string","enum":["busy","disabled","editable","focusable","focused","hidden","hiddenRoot","invalid","keyshortcuts","settable","roledescription","live","atomic","relevant","root","autocomplete","hasPopup","level","multiselectable","orientation","multiline","readonly","required","valuemin","valuemax","valuetext","checked","expanded","modal","pressed","selected","activedescendant","controls","describedby","details","errormessage","flowto","labelledby","owns"]},{"id":"AXNode","description":"A node in the accessibility tree.","type":"object","properties":[{"name":"nodeId","description":"Unique identifier for this node.","$ref":"AXNodeId"},{"name":"ignored","description":"Whether this node is ignored for accessibility","type":"boolean"},{"name":"ignoredReasons","description":"Collection of reasons why this node is hidden.","optional":true,"type":"array","items":{"$ref":"AXProperty"}},{"name":"role","description":"This `Node`\'s role, whether explicit or implicit.","optional":true,"$ref":"AXValue"},{"name":"name","description":"The accessible name for this `Node`.","optional":true,"$ref":"AXValue"},{"name":"description","description":"The accessible description for this `Node`.","optional":true,"$ref":"AXValue"},{"name":"value","description":"The value for this `Node`.","optional":true,"$ref":"AXValue"},{"name":"properties","description":"All other properties","optional":true,"type":"array","items":{"$ref":"AXProperty"}},{"name":"parentId","description":"ID for this node\'s parent.","optional":true,"$ref":"AXNodeId"},{"name":"childIds","description":"IDs for each of this node\'s child nodes.","optional":true,"type":"array","items":{"$ref":"AXNodeId"}},{"name":"backendDOMNodeId","description":"The backend ID for the associated DOM node, if any.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"frameId","description":"The frame ID for the frame associated with this nodes document.","optional":true,"$ref":"Page.FrameId"}]}],"commands":[{"name":"disable","description":"Disables the accessibility domain."},{"name":"enable","description":"Enables the accessibility domain which causes `AXNodeId`s to remain consistent between method calls.\\nThis turns on accessibility for the page, which can impact performance until accessibility is disabled."},{"name":"getPartialAXTree","description":"Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.","experimental":true,"parameters":[{"name":"nodeId","description":"Identifier of the node to get the partial accessibility tree for.","optional":true,"$ref":"DOM.NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node to get the partial accessibility tree for.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper to get the partial accessibility tree for.","optional":true,"$ref":"Runtime.RemoteObjectId"},{"name":"fetchRelatives","description":"Whether to fetch this nodes ancestors, siblings and children. Defaults to true.","optional":true,"type":"boolean"}],"returns":[{"name":"nodes","description":"The `Accessibility.AXNode` for this DOM node, if it exists, plus its ancestors, siblings and\\nchildren, if requested.","type":"array","items":{"$ref":"AXNode"}}]},{"name":"getFullAXTree","description":"Fetches the entire accessibility tree for the root Document","experimental":true,"parameters":[{"name":"depth","description":"The maximum depth at which descendants of the root node should be retrieved.\\nIf omitted, the full tree is returned.","optional":true,"type":"integer"},{"name":"max_depth","description":"Deprecated. This parameter has been renamed to `depth`. If depth is not provided, max_depth will be used.","deprecated":true,"optional":true,"type":"integer"},{"name":"frameId","description":"The frame for whose document the AX tree should be retrieved.\\nIf omited, the root frame is used.","optional":true,"$ref":"Page.FrameId"}],"returns":[{"name":"nodes","type":"array","items":{"$ref":"AXNode"}}]},{"name":"getRootAXNode","description":"Fetches the root node.\\nRequires `enable()` to have been called previously.","experimental":true,"parameters":[{"name":"frameId","description":"The frame in whose document the node resides.\\nIf omitted, the root frame is used.","optional":true,"$ref":"Page.FrameId"}],"returns":[{"name":"node","$ref":"AXNode"}]},{"name":"getAXNodeAndAncestors","description":"Fetches a node and all ancestors up to and including the root.\\nRequires `enable()` to have been called previously.","experimental":true,"parameters":[{"name":"nodeId","description":"Identifier of the node to get.","optional":true,"$ref":"DOM.NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node to get.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper to get.","optional":true,"$ref":"Runtime.RemoteObjectId"}],"returns":[{"name":"nodes","type":"array","items":{"$ref":"AXNode"}}]},{"name":"getChildAXNodes","description":"Fetches a particular accessibility node by AXNodeId.\\nRequires `enable()` to have been called previously.","experimental":true,"parameters":[{"name":"id","$ref":"AXNodeId"},{"name":"frameId","description":"The frame in whose document the node resides.\\nIf omitted, the root frame is used.","optional":true,"$ref":"Page.FrameId"}],"returns":[{"name":"nodes","type":"array","items":{"$ref":"AXNode"}}]},{"name":"queryAXTree","description":"Query a DOM node\'s accessibility subtree for accessible name and role.\\nThis command computes the name and role for all nodes in the subtree, including those that are\\nignored for accessibility, and returns those that mactch the specified name and role. If no DOM\\nnode is specified, or the DOM node does not exist, the command returns an error. If neither\\n`accessibleName` or `role` is specified, it returns all the accessibility nodes in the subtree.","experimental":true,"parameters":[{"name":"nodeId","description":"Identifier of the node for the root to query.","optional":true,"$ref":"DOM.NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node for the root to query.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper for the root to query.","optional":true,"$ref":"Runtime.RemoteObjectId"},{"name":"accessibleName","description":"Find nodes with this computed name.","optional":true,"type":"string"},{"name":"role","description":"Find nodes with this computed role.","optional":true,"type":"string"}],"returns":[{"name":"nodes","description":"A list of `Accessibility.AXNode` matching the specified attributes,\\nincluding nodes that are ignored for accessibility.","type":"array","items":{"$ref":"AXNode"}}]}],"events":[{"name":"loadComplete","description":"The loadComplete event mirrors the load complete event sent by the browser to assistive\\ntechnology when the web page has finished loading.","experimental":true,"parameters":[{"name":"root","description":"New document root node.","$ref":"AXNode"}]},{"name":"nodesUpdated","description":"The nodesUpdated event is sent every time a previously requested node has changed the in tree.","experimental":true,"parameters":[{"name":"nodes","description":"Updated node data.","type":"array","items":{"$ref":"AXNode"}}]}]},{"domain":"Animation","experimental":true,"dependencies":["Runtime","DOM"],"types":[{"id":"Animation","description":"Animation instance.","type":"object","properties":[{"name":"id","description":"`Animation`\'s id.","type":"string"},{"name":"name","description":"`Animation`\'s name.","type":"string"},{"name":"pausedState","description":"`Animation`\'s internal paused state.","type":"boolean"},{"name":"playState","description":"`Animation`\'s play state.","type":"string"},{"name":"playbackRate","description":"`Animation`\'s playback rate.","type":"number"},{"name":"startTime","description":"`Animation`\'s start time.","type":"number"},{"name":"currentTime","description":"`Animation`\'s current time.","type":"number"},{"name":"type","description":"Animation type of `Animation`.","type":"string","enum":["CSSTransition","CSSAnimation","WebAnimation"]},{"name":"source","description":"`Animation`\'s source animation node.","optional":true,"$ref":"AnimationEffect"},{"name":"cssId","description":"A unique ID for `Animation` representing the sources that triggered this CSS\\nanimation/transition.","optional":true,"type":"string"}]},{"id":"AnimationEffect","description":"AnimationEffect instance","type":"object","properties":[{"name":"delay","description":"`AnimationEffect`\'s delay.","type":"number"},{"name":"endDelay","description":"`AnimationEffect`\'s end delay.","type":"number"},{"name":"iterationStart","description":"`AnimationEffect`\'s iteration start.","type":"number"},{"name":"iterations","description":"`AnimationEffect`\'s iterations.","type":"number"},{"name":"duration","description":"`AnimationEffect`\'s iteration duration.","type":"number"},{"name":"direction","description":"`AnimationEffect`\'s playback direction.","type":"string"},{"name":"fill","description":"`AnimationEffect`\'s fill mode.","type":"string"},{"name":"backendNodeId","description":"`AnimationEffect`\'s target node.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"keyframesRule","description":"`AnimationEffect`\'s keyframes.","optional":true,"$ref":"KeyframesRule"},{"name":"easing","description":"`AnimationEffect`\'s timing function.","type":"string"}]},{"id":"KeyframesRule","description":"Keyframes Rule","type":"object","properties":[{"name":"name","description":"CSS keyframed animation\'s name.","optional":true,"type":"string"},{"name":"keyframes","description":"List of animation keyframes.","type":"array","items":{"$ref":"KeyframeStyle"}}]},{"id":"KeyframeStyle","description":"Keyframe Style","type":"object","properties":[{"name":"offset","description":"Keyframe\'s time offset.","type":"string"},{"name":"easing","description":"`AnimationEffect`\'s timing function.","type":"string"}]}],"commands":[{"name":"disable","description":"Disables animation domain notifications."},{"name":"enable","description":"Enables animation domain notifications."},{"name":"getCurrentTime","description":"Returns the current time of the an animation.","parameters":[{"name":"id","description":"Id of animation.","type":"string"}],"returns":[{"name":"currentTime","description":"Current time of the page.","type":"number"}]},{"name":"getPlaybackRate","description":"Gets the playback rate of the document timeline.","returns":[{"name":"playbackRate","description":"Playback rate for animations on page.","type":"number"}]},{"name":"releaseAnimations","description":"Releases a set of animations to no longer be manipulated.","parameters":[{"name":"animations","description":"List of animation ids to seek.","type":"array","items":{"type":"string"}}]},{"name":"resolveAnimation","description":"Gets the remote object of the Animation.","parameters":[{"name":"animationId","description":"Animation id.","type":"string"}],"returns":[{"name":"remoteObject","description":"Corresponding remote object.","$ref":"Runtime.RemoteObject"}]},{"name":"seekAnimations","description":"Seek a set of animations to a particular time within each animation.","parameters":[{"name":"animations","description":"List of animation ids to seek.","type":"array","items":{"type":"string"}},{"name":"currentTime","description":"Set the current time of each animation.","type":"number"}]},{"name":"setPaused","description":"Sets the paused state of a set of animations.","parameters":[{"name":"animations","description":"Animations to set the pause state of.","type":"array","items":{"type":"string"}},{"name":"paused","description":"Paused state to set to.","type":"boolean"}]},{"name":"setPlaybackRate","description":"Sets the playback rate of the document timeline.","parameters":[{"name":"playbackRate","description":"Playback rate for animations on page","type":"number"}]},{"name":"setTiming","description":"Sets the timing of an animation node.","parameters":[{"name":"animationId","description":"Animation id.","type":"string"},{"name":"duration","description":"Duration of the animation.","type":"number"},{"name":"delay","description":"Delay of the animation.","type":"number"}]}],"events":[{"name":"animationCanceled","description":"Event for when an animation has been cancelled.","parameters":[{"name":"id","description":"Id of the animation that was cancelled.","type":"string"}]},{"name":"animationCreated","description":"Event for each animation that has been created.","parameters":[{"name":"id","description":"Id of the animation that was created.","type":"string"}]},{"name":"animationStarted","description":"Event for animation that has been started.","parameters":[{"name":"animation","description":"Animation that was started.","$ref":"Animation"}]}]},{"domain":"Audits","description":"Audits domain allows investigation of page violations and possible improvements.","experimental":true,"dependencies":["Network"],"types":[{"id":"AffectedCookie","description":"Information about a cookie that is affected by an inspector issue.","type":"object","properties":[{"name":"name","description":"The following three properties uniquely identify a cookie","type":"string"},{"name":"path","type":"string"},{"name":"domain","type":"string"}]},{"id":"AffectedRequest","description":"Information about a request that is affected by an inspector issue.","type":"object","properties":[{"name":"requestId","description":"The unique request id.","$ref":"Network.RequestId"},{"name":"url","optional":true,"type":"string"}]},{"id":"AffectedFrame","description":"Information about the frame affected by an inspector issue.","type":"object","properties":[{"name":"frameId","$ref":"Page.FrameId"}]},{"id":"SameSiteCookieExclusionReason","type":"string","enum":["ExcludeSameSiteUnspecifiedTreatedAsLax","ExcludeSameSiteNoneInsecure","ExcludeSameSiteLax","ExcludeSameSiteStrict","ExcludeInvalidSameParty","ExcludeSamePartyCrossPartyContext"]},{"id":"SameSiteCookieWarningReason","type":"string","enum":["WarnSameSiteUnspecifiedCrossSiteContext","WarnSameSiteNoneInsecure","WarnSameSiteUnspecifiedLaxAllowUnsafe","WarnSameSiteStrictLaxDowngradeStrict","WarnSameSiteStrictCrossDowngradeStrict","WarnSameSiteStrictCrossDowngradeLax","WarnSameSiteLaxCrossDowngradeStrict","WarnSameSiteLaxCrossDowngradeLax"]},{"id":"SameSiteCookieOperation","type":"string","enum":["SetCookie","ReadCookie"]},{"id":"SameSiteCookieIssueDetails","description":"This information is currently necessary, as the front-end has a difficult\\ntime finding a specific cookie. With this, we can convey specific error\\ninformation without the cookie.","type":"object","properties":[{"name":"cookie","description":"If AffectedCookie is not set then rawCookieLine contains the raw\\nSet-Cookie header string. This hints at a problem where the\\ncookie line is syntactically or semantically malformed in a way\\nthat no valid cookie could be created.","optional":true,"$ref":"AffectedCookie"},{"name":"rawCookieLine","optional":true,"type":"string"},{"name":"cookieWarningReasons","type":"array","items":{"$ref":"SameSiteCookieWarningReason"}},{"name":"cookieExclusionReasons","type":"array","items":{"$ref":"SameSiteCookieExclusionReason"}},{"name":"operation","description":"Optionally identifies the site-for-cookies and the cookie url, which\\nmay be used by the front-end as additional context.","$ref":"SameSiteCookieOperation"},{"name":"siteForCookies","optional":true,"type":"string"},{"name":"cookieUrl","optional":true,"type":"string"},{"name":"request","optional":true,"$ref":"AffectedRequest"}]},{"id":"MixedContentResolutionStatus","type":"string","enum":["MixedContentBlocked","MixedContentAutomaticallyUpgraded","MixedContentWarning"]},{"id":"MixedContentResourceType","type":"string","enum":["Audio","Beacon","CSPReport","Download","EventSource","Favicon","Font","Form","Frame","Image","Import","Manifest","Ping","PluginData","PluginResource","Prefetch","Resource","Script","ServiceWorker","SharedWorker","Stylesheet","Track","Video","Worker","XMLHttpRequest","XSLT"]},{"id":"MixedContentIssueDetails","type":"object","properties":[{"name":"resourceType","description":"The type of resource causing the mixed content issue (css, js, iframe,\\nform,...). Marked as optional because it is mapped to from\\nblink::mojom::RequestContextType, which will be replaced\\nby network::mojom::RequestDestination","optional":true,"$ref":"MixedContentResourceType"},{"name":"resolutionStatus","description":"The way the mixed content issue is being resolved.","$ref":"MixedContentResolutionStatus"},{"name":"insecureURL","description":"The unsafe http url causing the mixed content issue.","type":"string"},{"name":"mainResourceURL","description":"The url responsible for the call to an unsafe url.","type":"string"},{"name":"request","description":"The mixed content request.\\nDoes not always exist (e.g. for unsafe form submission urls).","optional":true,"$ref":"AffectedRequest"},{"name":"frame","description":"Optional because not every mixed content issue is necessarily linked to a frame.","optional":true,"$ref":"AffectedFrame"}]},{"id":"BlockedByResponseReason","description":"Enum indicating the reason a response has been blocked. These reasons are\\nrefinements of the net error BLOCKED_BY_RESPONSE.","type":"string","enum":["CoepFrameResourceNeedsCoepHeader","CoopSandboxedIFrameCannotNavigateToCoopPage","CorpNotSameOrigin","CorpNotSameOriginAfterDefaultedToSameOriginByCoep","CorpNotSameSite"]},{"id":"BlockedByResponseIssueDetails","description":"Details for a request that has been blocked with the BLOCKED_BY_RESPONSE\\ncode. Currently only used for COEP/COOP, but may be extended to include\\nsome CSP errors in the future.","type":"object","properties":[{"name":"request","$ref":"AffectedRequest"},{"name":"parentFrame","optional":true,"$ref":"AffectedFrame"},{"name":"blockedFrame","optional":true,"$ref":"AffectedFrame"},{"name":"reason","$ref":"BlockedByResponseReason"}]},{"id":"HeavyAdResolutionStatus","type":"string","enum":["HeavyAdBlocked","HeavyAdWarning"]},{"id":"HeavyAdReason","type":"string","enum":["NetworkTotalLimit","CpuTotalLimit","CpuPeakLimit"]},{"id":"HeavyAdIssueDetails","type":"object","properties":[{"name":"resolution","description":"The resolution status, either blocking the content or warning.","$ref":"HeavyAdResolutionStatus"},{"name":"reason","description":"The reason the ad was blocked, total network or cpu or peak cpu.","$ref":"HeavyAdReason"},{"name":"frame","description":"The frame that was blocked.","$ref":"AffectedFrame"}]},{"id":"ContentSecurityPolicyViolationType","type":"string","enum":["kInlineViolation","kEvalViolation","kURLViolation","kTrustedTypesSinkViolation","kTrustedTypesPolicyViolation","kWasmEvalViolation"]},{"id":"SourceCodeLocation","type":"object","properties":[{"name":"scriptId","optional":true,"$ref":"Runtime.ScriptId"},{"name":"url","type":"string"},{"name":"lineNumber","type":"integer"},{"name":"columnNumber","type":"integer"}]},{"id":"ContentSecurityPolicyIssueDetails","type":"object","properties":[{"name":"blockedURL","description":"The url not included in allowed sources.","optional":true,"type":"string"},{"name":"violatedDirective","description":"Specific directive that is violated, causing the CSP issue.","type":"string"},{"name":"isReportOnly","type":"boolean"},{"name":"contentSecurityPolicyViolationType","$ref":"ContentSecurityPolicyViolationType"},{"name":"frameAncestor","optional":true,"$ref":"AffectedFrame"},{"name":"sourceCodeLocation","optional":true,"$ref":"SourceCodeLocation"},{"name":"violatingNodeId","optional":true,"$ref":"DOM.BackendNodeId"}]},{"id":"SharedArrayBufferIssueType","type":"string","enum":["TransferIssue","CreationIssue"]},{"id":"SharedArrayBufferIssueDetails","description":"Details for a issue arising from an SAB being instantiated in, or\\ntransferred to a context that is not cross-origin isolated.","type":"object","properties":[{"name":"sourceCodeLocation","$ref":"SourceCodeLocation"},{"name":"isWarning","type":"boolean"},{"name":"type","$ref":"SharedArrayBufferIssueType"}]},{"id":"TwaQualityEnforcementViolationType","type":"string","enum":["kHttpError","kUnavailableOffline","kDigitalAssetLinks"]},{"id":"TrustedWebActivityIssueDetails","type":"object","properties":[{"name":"url","description":"The url that triggers the violation.","type":"string"},{"name":"violationType","$ref":"TwaQualityEnforcementViolationType"},{"name":"httpStatusCode","optional":true,"type":"integer"},{"name":"packageName","description":"The package name of the Trusted Web Activity client app. This field is\\nonly used when violation type is kDigitalAssetLinks.","optional":true,"type":"string"},{"name":"signature","description":"The signature of the Trusted Web Activity client app. This field is only\\nused when violation type is kDigitalAssetLinks.","optional":true,"type":"string"}]},{"id":"LowTextContrastIssueDetails","type":"object","properties":[{"name":"violatingNodeId","$ref":"DOM.BackendNodeId"},{"name":"violatingNodeSelector","type":"string"},{"name":"contrastRatio","type":"number"},{"name":"thresholdAA","type":"number"},{"name":"thresholdAAA","type":"number"},{"name":"fontSize","type":"string"},{"name":"fontWeight","type":"string"}]},{"id":"CorsIssueDetails","description":"Details for a CORS related issue, e.g. a warning or error related to\\nCORS RFC1918 enforcement.","type":"object","properties":[{"name":"corsErrorStatus","$ref":"Network.CorsErrorStatus"},{"name":"isWarning","type":"boolean"},{"name":"request","$ref":"AffectedRequest"},{"name":"location","optional":true,"$ref":"SourceCodeLocation"},{"name":"initiatorOrigin","optional":true,"type":"string"},{"name":"resourceIPAddressSpace","optional":true,"$ref":"Network.IPAddressSpace"},{"name":"clientSecurityState","optional":true,"$ref":"Network.ClientSecurityState"}]},{"id":"AttributionReportingIssueType","type":"string","enum":["PermissionPolicyDisabled","InvalidAttributionSourceEventId","InvalidAttributionData","AttributionSourceUntrustworthyOrigin","AttributionUntrustworthyOrigin","AttributionTriggerDataTooLarge","AttributionEventSourceTriggerDataTooLarge","InvalidAttributionSourceExpiry","InvalidAttributionSourcePriority","InvalidEventSourceTriggerData","InvalidTriggerPriority","InvalidTriggerDedupKey"]},{"id":"AttributionReportingIssueDetails","description":"Details for issues around \\"Attribution Reporting API\\" usage.\\nExplainer: https://github.com/WICG/conversion-measurement-api","type":"object","properties":[{"name":"violationType","$ref":"AttributionReportingIssueType"},{"name":"frame","optional":true,"$ref":"AffectedFrame"},{"name":"request","optional":true,"$ref":"AffectedRequest"},{"name":"violatingNodeId","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"invalidParameter","optional":true,"type":"string"}]},{"id":"QuirksModeIssueDetails","description":"Details for issues about documents in Quirks Mode\\nor Limited Quirks Mode that affects page layouting.","type":"object","properties":[{"name":"isLimitedQuirksMode","description":"If false, it means the document\'s mode is \\"quirks\\"\\ninstead of \\"limited-quirks\\".","type":"boolean"},{"name":"documentNodeId","$ref":"DOM.BackendNodeId"},{"name":"url","type":"string"},{"name":"frameId","$ref":"Page.FrameId"},{"name":"loaderId","$ref":"Network.LoaderId"}]},{"id":"NavigatorUserAgentIssueDetails","type":"object","properties":[{"name":"url","type":"string"},{"name":"location","optional":true,"$ref":"SourceCodeLocation"}]},{"id":"GenericIssueErrorType","type":"string","enum":["CrossOriginPortalPostMessageError"]},{"id":"GenericIssueDetails","description":"Depending on the concrete errorType, different properties are set.","type":"object","properties":[{"name":"errorType","description":"Issues with the same errorType are aggregated in the frontend.","$ref":"GenericIssueErrorType"},{"name":"frameId","optional":true,"$ref":"Page.FrameId"}]},{"id":"DeprecationIssueDetails","description":"This issue tracks information needed to print a deprecation message.\\nThe formatting is inherited from the old console.log version, see more at:\\nhttps://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/frame/deprecation.cc\\nTODO(crbug.com/1264960): Re-work format to add i18n support per:\\nhttps://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/public/devtools_protocol/README.md","type":"object","properties":[{"name":"affectedFrame","optional":true,"$ref":"AffectedFrame"},{"name":"sourceCodeLocation","$ref":"SourceCodeLocation"},{"name":"message","description":"The content of the deprecation issue (this won\'t be translated),\\ne.g. \\"window.inefficientLegacyStorageMethod will be removed in M97,\\naround January 2022. Please use Web Storage or Indexed Database\\ninstead. This standard was abandoned in January, 1970. See\\nhttps://www.chromestatus.com/feature/5684870116278272 for more details.\\"","deprecated":true,"optional":true,"type":"string"},{"name":"deprecationType","type":"string"}]},{"id":"ClientHintIssueReason","type":"string","enum":["MetaTagAllowListInvalidOrigin","MetaTagModifiedHTML"]},{"id":"FederatedAuthRequestIssueDetails","type":"object","properties":[{"name":"federatedAuthRequestIssueReason","$ref":"FederatedAuthRequestIssueReason"}]},{"id":"FederatedAuthRequestIssueReason","description":"Represents the failure reason when a federated authentication reason fails.\\nShould be updated alongside RequestIdTokenStatus in\\nthird_party/blink/public/mojom/webid/federated_auth_request.mojom to include\\nall cases except for success.","type":"string","enum":["ApprovalDeclined","TooManyRequests","WellKnownHttpNotFound","WellKnownNoResponse","WellKnownInvalidResponse","ClientIdMetadataHttpNotFound","ClientIdMetadataNoResponse","ClientIdMetadataInvalidResponse","ErrorFetchingSignin","InvalidSigninResponse","AccountsHttpNotFound","AccountsNoResponse","AccountsInvalidResponse","IdTokenHttpNotFound","IdTokenNoResponse","IdTokenInvalidResponse","IdTokenInvalidRequest","ErrorIdToken","Canceled"]},{"id":"ClientHintIssueDetails","description":"This issue tracks client hints related issues. It\'s used to deprecate old\\nfeatures, encourage the use of new ones, and provide general guidance.","type":"object","properties":[{"name":"sourceCodeLocation","$ref":"SourceCodeLocation"},{"name":"clientHintIssueReason","$ref":"ClientHintIssueReason"}]},{"id":"InspectorIssueCode","description":"A unique identifier for the type of issue. Each type may use one of the\\noptional fields in InspectorIssueDetails to convey more specific\\ninformation about the kind of issue.","type":"string","enum":["SameSiteCookieIssue","MixedContentIssue","BlockedByResponseIssue","HeavyAdIssue","ContentSecurityPolicyIssue","SharedArrayBufferIssue","TrustedWebActivityIssue","LowTextContrastIssue","CorsIssue","AttributionReportingIssue","QuirksModeIssue","NavigatorUserAgentIssue","GenericIssue","DeprecationIssue","ClientHintIssue","FederatedAuthRequestIssue"]},{"id":"InspectorIssueDetails","description":"This struct holds a list of optional fields with additional information\\nspecific to the kind of issue. When adding a new issue code, please also\\nadd a new optional field to this type.","type":"object","properties":[{"name":"sameSiteCookieIssueDetails","optional":true,"$ref":"SameSiteCookieIssueDetails"},{"name":"mixedContentIssueDetails","optional":true,"$ref":"MixedContentIssueDetails"},{"name":"blockedByResponseIssueDetails","optional":true,"$ref":"BlockedByResponseIssueDetails"},{"name":"heavyAdIssueDetails","optional":true,"$ref":"HeavyAdIssueDetails"},{"name":"contentSecurityPolicyIssueDetails","optional":true,"$ref":"ContentSecurityPolicyIssueDetails"},{"name":"sharedArrayBufferIssueDetails","optional":true,"$ref":"SharedArrayBufferIssueDetails"},{"name":"twaQualityEnforcementDetails","optional":true,"$ref":"TrustedWebActivityIssueDetails"},{"name":"lowTextContrastIssueDetails","optional":true,"$ref":"LowTextContrastIssueDetails"},{"name":"corsIssueDetails","optional":true,"$ref":"CorsIssueDetails"},{"name":"attributionReportingIssueDetails","optional":true,"$ref":"AttributionReportingIssueDetails"},{"name":"quirksModeIssueDetails","optional":true,"$ref":"QuirksModeIssueDetails"},{"name":"navigatorUserAgentIssueDetails","optional":true,"$ref":"NavigatorUserAgentIssueDetails"},{"name":"genericIssueDetails","optional":true,"$ref":"GenericIssueDetails"},{"name":"deprecationIssueDetails","optional":true,"$ref":"DeprecationIssueDetails"},{"name":"clientHintIssueDetails","optional":true,"$ref":"ClientHintIssueDetails"},{"name":"federatedAuthRequestIssueDetails","optional":true,"$ref":"FederatedAuthRequestIssueDetails"}]},{"id":"IssueId","description":"A unique id for a DevTools inspector issue. Allows other entities (e.g.\\nexceptions, CDP message, console messages, etc.) to reference an issue.","type":"string"},{"id":"InspectorIssue","description":"An inspector issue reported from the back-end.","type":"object","properties":[{"name":"code","$ref":"InspectorIssueCode"},{"name":"details","$ref":"InspectorIssueDetails"},{"name":"issueId","description":"A unique id for this issue. May be omitted if no other entity (e.g.\\nexception, CDP message, etc.) is referencing this issue.","optional":true,"$ref":"IssueId"}]}],"commands":[{"name":"getEncodedResponse","description":"Returns the response body and size if it were re-encoded with the specified settings. Only\\napplies to images.","parameters":[{"name":"requestId","description":"Identifier of the network request to get content for.","$ref":"Network.RequestId"},{"name":"encoding","description":"The encoding to use.","type":"string","enum":["webp","jpeg","png"]},{"name":"quality","description":"The quality of the encoding (0-1). (defaults to 1)","optional":true,"type":"number"},{"name":"sizeOnly","description":"Whether to only return the size information (defaults to false).","optional":true,"type":"boolean"}],"returns":[{"name":"body","description":"The encoded body as a base64 string. Omitted if sizeOnly is true. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"},{"name":"originalSize","description":"Size before re-encoding.","type":"integer"},{"name":"encodedSize","description":"Size after re-encoding.","type":"integer"}]},{"name":"disable","description":"Disables issues domain, prevents further issues from being reported to the client."},{"name":"enable","description":"Enables issues domain, sends the issues collected so far to the client by means of the\\n`issueAdded` event."},{"name":"checkContrast","description":"Runs the contrast check for the target page. Found issues are reported\\nusing Audits.issueAdded event.","parameters":[{"name":"reportAAA","description":"Whether to report WCAG AAA level issues. Default is false.","optional":true,"type":"boolean"}]}],"events":[{"name":"issueAdded","parameters":[{"name":"issue","$ref":"InspectorIssue"}]}]},{"domain":"BackgroundService","description":"Defines events for background web platform features.","experimental":true,"types":[{"id":"ServiceName","description":"The Background Service that will be associated with the commands/events.\\nEvery Background Service operates independently, but they share the same\\nAPI.","type":"string","enum":["backgroundFetch","backgroundSync","pushMessaging","notifications","paymentHandler","periodicBackgroundSync"]},{"id":"EventMetadata","description":"A key-value pair for additional event information to pass along.","type":"object","properties":[{"name":"key","type":"string"},{"name":"value","type":"string"}]},{"id":"BackgroundServiceEvent","type":"object","properties":[{"name":"timestamp","description":"Timestamp of the event (in seconds).","$ref":"Network.TimeSinceEpoch"},{"name":"origin","description":"The origin this event belongs to.","type":"string"},{"name":"serviceWorkerRegistrationId","description":"The Service Worker ID that initiated the event.","$ref":"ServiceWorker.RegistrationID"},{"name":"service","description":"The Background Service this event belongs to.","$ref":"ServiceName"},{"name":"eventName","description":"A description of the event.","type":"string"},{"name":"instanceId","description":"An identifier that groups related events together.","type":"string"},{"name":"eventMetadata","description":"A list of event-specific information.","type":"array","items":{"$ref":"EventMetadata"}}]}],"commands":[{"name":"startObserving","description":"Enables event updates for the service.","parameters":[{"name":"service","$ref":"ServiceName"}]},{"name":"stopObserving","description":"Disables event updates for the service.","parameters":[{"name":"service","$ref":"ServiceName"}]},{"name":"setRecording","description":"Set the recording state for the service.","parameters":[{"name":"shouldRecord","type":"boolean"},{"name":"service","$ref":"ServiceName"}]},{"name":"clearEvents","description":"Clears all stored data for the service.","parameters":[{"name":"service","$ref":"ServiceName"}]}],"events":[{"name":"recordingStateChanged","description":"Called when the recording state for the service has been updated.","parameters":[{"name":"isRecording","type":"boolean"},{"name":"service","$ref":"ServiceName"}]},{"name":"backgroundServiceEventReceived","description":"Called with all existing backgroundServiceEvents when enabled, and all new\\nevents afterwards if enabled and recording.","parameters":[{"name":"backgroundServiceEvent","$ref":"BackgroundServiceEvent"}]}]},{"domain":"Browser","description":"The Browser domain defines methods and events for browser managing.","types":[{"id":"BrowserContextID","experimental":true,"type":"string"},{"id":"WindowID","experimental":true,"type":"integer"},{"id":"WindowState","description":"The state of the browser window.","experimental":true,"type":"string","enum":["normal","minimized","maximized","fullscreen"]},{"id":"Bounds","description":"Browser window bounds information","experimental":true,"type":"object","properties":[{"name":"left","description":"The offset from the left edge of the screen to the window in pixels.","optional":true,"type":"integer"},{"name":"top","description":"The offset from the top edge of the screen to the window in pixels.","optional":true,"type":"integer"},{"name":"width","description":"The window width in pixels.","optional":true,"type":"integer"},{"name":"height","description":"The window height in pixels.","optional":true,"type":"integer"},{"name":"windowState","description":"The window state. Default to normal.","optional":true,"$ref":"WindowState"}]},{"id":"PermissionType","experimental":true,"type":"string","enum":["accessibilityEvents","audioCapture","backgroundSync","backgroundFetch","clipboardReadWrite","clipboardSanitizedWrite","displayCapture","durableStorage","flash","geolocation","midi","midiSysex","nfc","notifications","paymentHandler","periodicBackgroundSync","protectedMediaIdentifier","sensors","videoCapture","videoCapturePanTiltZoom","idleDetection","wakeLockScreen","wakeLockSystem"]},{"id":"PermissionSetting","experimental":true,"type":"string","enum":["granted","denied","prompt"]},{"id":"PermissionDescriptor","description":"Definition of PermissionDescriptor defined in the Permissions API:\\nhttps://w3c.github.io/permissions/#dictdef-permissiondescriptor.","experimental":true,"type":"object","properties":[{"name":"name","description":"Name of permission.\\nSee https://cs.chromium.org/chromium/src/third_party/blink/renderer/modules/permissions/permission_descriptor.idl for valid permission names.","type":"string"},{"name":"sysex","description":"For \\"midi\\" permission, may also specify sysex control.","optional":true,"type":"boolean"},{"name":"userVisibleOnly","description":"For \\"push\\" permission, may specify userVisibleOnly.\\nNote that userVisibleOnly = true is the only currently supported type.","optional":true,"type":"boolean"},{"name":"allowWithoutSanitization","description":"For \\"clipboard\\" permission, may specify allowWithoutSanitization.","optional":true,"type":"boolean"},{"name":"panTiltZoom","description":"For \\"camera\\" permission, may specify panTiltZoom.","optional":true,"type":"boolean"}]},{"id":"BrowserCommandId","description":"Browser command ids used by executeBrowserCommand.","experimental":true,"type":"string","enum":["openTabSearch","closeTabSearch"]},{"id":"Bucket","description":"Chrome histogram bucket.","experimental":true,"type":"object","properties":[{"name":"low","description":"Minimum value (inclusive).","type":"integer"},{"name":"high","description":"Maximum value (exclusive).","type":"integer"},{"name":"count","description":"Number of samples.","type":"integer"}]},{"id":"Histogram","description":"Chrome histogram.","experimental":true,"type":"object","properties":[{"name":"name","description":"Name.","type":"string"},{"name":"sum","description":"Sum of sample values.","type":"integer"},{"name":"count","description":"Total number of samples.","type":"integer"},{"name":"buckets","description":"Buckets.","type":"array","items":{"$ref":"Bucket"}}]}],"commands":[{"name":"setPermission","description":"Set permission settings for given origin.","experimental":true,"parameters":[{"name":"permission","description":"Descriptor of permission to override.","$ref":"PermissionDescriptor"},{"name":"setting","description":"Setting of the permission.","$ref":"PermissionSetting"},{"name":"origin","description":"Origin the permission applies to, all origins if not specified.","optional":true,"type":"string"},{"name":"browserContextId","description":"Context to override. When omitted, default browser context is used.","optional":true,"$ref":"BrowserContextID"}]},{"name":"grantPermissions","description":"Grant specific permissions to the given origin and reject all others.","experimental":true,"parameters":[{"name":"permissions","type":"array","items":{"$ref":"PermissionType"}},{"name":"origin","description":"Origin the permission applies to, all origins if not specified.","optional":true,"type":"string"},{"name":"browserContextId","description":"BrowserContext to override permissions. When omitted, default browser context is used.","optional":true,"$ref":"BrowserContextID"}]},{"name":"resetPermissions","description":"Reset all permission management for all origins.","experimental":true,"parameters":[{"name":"browserContextId","description":"BrowserContext to reset permissions. When omitted, default browser context is used.","optional":true,"$ref":"BrowserContextID"}]},{"name":"setDownloadBehavior","description":"Set the behavior when downloading a file.","experimental":true,"parameters":[{"name":"behavior","description":"Whether to allow all or deny all download requests, or use default Chrome behavior if\\navailable (otherwise deny). |allowAndName| allows download and names files according to\\ntheir dowmload guids.","type":"string","enum":["deny","allow","allowAndName","default"]},{"name":"browserContextId","description":"BrowserContext to set download behavior. When omitted, default browser context is used.","optional":true,"$ref":"BrowserContextID"},{"name":"downloadPath","description":"The default path to save downloaded files to. This is required if behavior is set to \'allow\'\\nor \'allowAndName\'.","optional":true,"type":"string"},{"name":"eventsEnabled","description":"Whether to emit download events (defaults to false).","optional":true,"type":"boolean"}]},{"name":"cancelDownload","description":"Cancel a download if in progress","experimental":true,"parameters":[{"name":"guid","description":"Global unique identifier of the download.","type":"string"},{"name":"browserContextId","description":"BrowserContext to perform the action in. When omitted, default browser context is used.","optional":true,"$ref":"BrowserContextID"}]},{"name":"close","description":"Close browser gracefully."},{"name":"crash","description":"Crashes browser on the main thread.","experimental":true},{"name":"crashGpuProcess","description":"Crashes GPU process.","experimental":true},{"name":"getVersion","description":"Returns version information.","returns":[{"name":"protocolVersion","description":"Protocol version.","type":"string"},{"name":"product","description":"Product name.","type":"string"},{"name":"revision","description":"Product revision.","type":"string"},{"name":"userAgent","description":"User-Agent.","type":"string"},{"name":"jsVersion","description":"V8 version.","type":"string"}]},{"name":"getBrowserCommandLine","description":"Returns the command line switches for the browser process if, and only if\\n--enable-automation is on the commandline.","experimental":true,"returns":[{"name":"arguments","description":"Commandline parameters","type":"array","items":{"type":"string"}}]},{"name":"getHistograms","description":"Get Chrome histograms.","experimental":true,"parameters":[{"name":"query","description":"Requested substring in name. Only histograms which have query as a\\nsubstring in their name are extracted. An empty or absent query returns\\nall histograms.","optional":true,"type":"string"},{"name":"delta","description":"If true, retrieve delta since last call.","optional":true,"type":"boolean"}],"returns":[{"name":"histograms","description":"Histograms.","type":"array","items":{"$ref":"Histogram"}}]},{"name":"getHistogram","description":"Get a Chrome histogram by name.","experimental":true,"parameters":[{"name":"name","description":"Requested histogram name.","type":"string"},{"name":"delta","description":"If true, retrieve delta since last call.","optional":true,"type":"boolean"}],"returns":[{"name":"histogram","description":"Histogram.","$ref":"Histogram"}]},{"name":"getWindowBounds","description":"Get position and size of the browser window.","experimental":true,"parameters":[{"name":"windowId","description":"Browser window id.","$ref":"WindowID"}],"returns":[{"name":"bounds","description":"Bounds information of the window. When window state is \'minimized\', the restored window\\nposition and size are returned.","$ref":"Bounds"}]},{"name":"getWindowForTarget","description":"Get the browser window that contains the devtools target.","experimental":true,"parameters":[{"name":"targetId","description":"Devtools agent host id. If called as a part of the session, associated targetId is used.","optional":true,"$ref":"Target.TargetID"}],"returns":[{"name":"windowId","description":"Browser window id.","$ref":"WindowID"},{"name":"bounds","description":"Bounds information of the window. When window state is \'minimized\', the restored window\\nposition and size are returned.","$ref":"Bounds"}]},{"name":"setWindowBounds","description":"Set position and/or size of the browser window.","experimental":true,"parameters":[{"name":"windowId","description":"Browser window id.","$ref":"WindowID"},{"name":"bounds","description":"New window bounds. The \'minimized\', \'maximized\' and \'fullscreen\' states cannot be combined\\nwith \'left\', \'top\', \'width\' or \'height\'. Leaves unspecified fields unchanged.","$ref":"Bounds"}]},{"name":"setDockTile","description":"Set dock tile details, platform-specific.","experimental":true,"parameters":[{"name":"badgeLabel","optional":true,"type":"string"},{"name":"image","description":"Png encoded image. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"}]},{"name":"executeBrowserCommand","description":"Invoke custom browser commands used by telemetry.","experimental":true,"parameters":[{"name":"commandId","$ref":"BrowserCommandId"}]}],"events":[{"name":"downloadWillBegin","description":"Fired when page is about to start a download.","experimental":true,"parameters":[{"name":"frameId","description":"Id of the frame that caused the download to begin.","$ref":"Page.FrameId"},{"name":"guid","description":"Global unique identifier of the download.","type":"string"},{"name":"url","description":"URL of the resource being downloaded.","type":"string"},{"name":"suggestedFilename","description":"Suggested file name of the resource (the actual name of the file saved on disk may differ).","type":"string"}]},{"name":"downloadProgress","description":"Fired when download makes progress. Last call has |done| == true.","experimental":true,"parameters":[{"name":"guid","description":"Global unique identifier of the download.","type":"string"},{"name":"totalBytes","description":"Total expected bytes to download.","type":"number"},{"name":"receivedBytes","description":"Total bytes received.","type":"number"},{"name":"state","description":"Download status.","type":"string","enum":["inProgress","completed","canceled"]}]}]},{"domain":"CSS","description":"This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles)\\nhave an associated `id` used in subsequent operations on the related object. Each object type has\\na specific `id` structure, and those are not interchangeable between objects of different kinds.\\nCSS objects can be loaded using the `get*ForNode()` calls (which accept a DOM node id). A client\\ncan also keep track of stylesheets via the `styleSheetAdded`/`styleSheetRemoved` events and\\nsubsequently load the required stylesheet contents using the `getStyleSheet[Text]()` methods.","experimental":true,"dependencies":["DOM","Page"],"types":[{"id":"StyleSheetId","type":"string"},{"id":"StyleSheetOrigin","description":"Stylesheet type: \\"injected\\" for stylesheets injected via extension, \\"user-agent\\" for user-agent\\nstylesheets, \\"inspector\\" for stylesheets created by the inspector (i.e. those holding the \\"via\\ninspector\\" rules), \\"regular\\" for regular stylesheets.","type":"string","enum":["injected","user-agent","inspector","regular"]},{"id":"PseudoElementMatches","description":"CSS rule collection for a single pseudo style.","type":"object","properties":[{"name":"pseudoType","description":"Pseudo element type.","$ref":"DOM.PseudoType"},{"name":"matches","description":"Matches of CSS rules applicable to the pseudo style.","type":"array","items":{"$ref":"RuleMatch"}}]},{"id":"InheritedStyleEntry","description":"Inherited CSS rule collection from ancestor node.","type":"object","properties":[{"name":"inlineStyle","description":"The ancestor node\'s inline style, if any, in the style inheritance chain.","optional":true,"$ref":"CSSStyle"},{"name":"matchedCSSRules","description":"Matches of CSS rules matching the ancestor node in the style inheritance chain.","type":"array","items":{"$ref":"RuleMatch"}}]},{"id":"RuleMatch","description":"Match data for a CSS rule.","type":"object","properties":[{"name":"rule","description":"CSS rule in the match.","$ref":"CSSRule"},{"name":"matchingSelectors","description":"Matching selector indices in the rule\'s selectorList selectors (0-based).","type":"array","items":{"type":"integer"}}]},{"id":"Value","description":"Data for a simple selector (these are delimited by commas in a selector list).","type":"object","properties":[{"name":"text","description":"Value text.","type":"string"},{"name":"range","description":"Value range in the underlying resource (if available).","optional":true,"$ref":"SourceRange"}]},{"id":"SelectorList","description":"Selector list data.","type":"object","properties":[{"name":"selectors","description":"Selectors in the list.","type":"array","items":{"$ref":"Value"}},{"name":"text","description":"Rule selector text.","type":"string"}]},{"id":"CSSStyleSheetHeader","description":"CSS stylesheet metainformation.","type":"object","properties":[{"name":"styleSheetId","description":"The stylesheet identifier.","$ref":"StyleSheetId"},{"name":"frameId","description":"Owner frame identifier.","$ref":"Page.FrameId"},{"name":"sourceURL","description":"Stylesheet resource URL. Empty if this is a constructed stylesheet created using\\nnew CSSStyleSheet() (but non-empty if this is a constructed sylesheet imported\\nas a CSS module script).","type":"string"},{"name":"sourceMapURL","description":"URL of source map associated with the stylesheet (if any).","optional":true,"type":"string"},{"name":"origin","description":"Stylesheet origin.","$ref":"StyleSheetOrigin"},{"name":"title","description":"Stylesheet title.","type":"string"},{"name":"ownerNode","description":"The backend id for the owner node of the stylesheet.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"disabled","description":"Denotes whether the stylesheet is disabled.","type":"boolean"},{"name":"hasSourceURL","description":"Whether the sourceURL field value comes from the sourceURL comment.","optional":true,"type":"boolean"},{"name":"isInline","description":"Whether this stylesheet is created for STYLE tag by parser. This flag is not set for\\ndocument.written STYLE tags.","type":"boolean"},{"name":"isMutable","description":"Whether this stylesheet is mutable. Inline stylesheets become mutable\\nafter they have been modified via CSSOM API.\\n<link> element\'s stylesheets become mutable only if DevTools modifies them.\\nConstructed stylesheets (new CSSStyleSheet()) are mutable immediately after creation.","type":"boolean"},{"name":"isConstructed","description":"True if this stylesheet is created through new CSSStyleSheet() or imported as a\\nCSS module script.","type":"boolean"},{"name":"startLine","description":"Line offset of the stylesheet within the resource (zero based).","type":"number"},{"name":"startColumn","description":"Column offset of the stylesheet within the resource (zero based).","type":"number"},{"name":"length","description":"Size of the content (in characters).","type":"number"},{"name":"endLine","description":"Line offset of the end of the stylesheet within the resource (zero based).","type":"number"},{"name":"endColumn","description":"Column offset of the end of the stylesheet within the resource (zero based).","type":"number"}]},{"id":"CSSRule","description":"CSS rule representation.","type":"object","properties":[{"name":"styleSheetId","description":"The css style sheet identifier (absent for user agent stylesheet and user-specified\\nstylesheet rules) this rule came from.","optional":true,"$ref":"StyleSheetId"},{"name":"selectorList","description":"Rule selector data.","$ref":"SelectorList"},{"name":"origin","description":"Parent stylesheet\'s origin.","$ref":"StyleSheetOrigin"},{"name":"style","description":"Associated style declaration.","$ref":"CSSStyle"},{"name":"media","description":"Media list array (for rules involving media queries). The array enumerates media queries\\nstarting with the innermost one, going outwards.","optional":true,"type":"array","items":{"$ref":"CSSMedia"}},{"name":"containerQueries","description":"Container query list array (for rules involving container queries).\\nThe array enumerates container queries starting with the innermost one, going outwards.","experimental":true,"optional":true,"type":"array","items":{"$ref":"CSSContainerQuery"}},{"name":"supports","description":"@supports CSS at-rule array.\\nThe array enumerates @supports at-rules starting with the innermost one, going outwards.","experimental":true,"optional":true,"type":"array","items":{"$ref":"CSSSupports"}}]},{"id":"RuleUsage","description":"CSS coverage information.","type":"object","properties":[{"name":"styleSheetId","description":"The css style sheet identifier (absent for user agent stylesheet and user-specified\\nstylesheet rules) this rule came from.","$ref":"StyleSheetId"},{"name":"startOffset","description":"Offset of the start of the rule (including selector) from the beginning of the stylesheet.","type":"number"},{"name":"endOffset","description":"Offset of the end of the rule body from the beginning of the stylesheet.","type":"number"},{"name":"used","description":"Indicates whether the rule was actually used by some element in the page.","type":"boolean"}]},{"id":"SourceRange","description":"Text range within a resource. All numbers are zero-based.","type":"object","properties":[{"name":"startLine","description":"Start line of range.","type":"integer"},{"name":"startColumn","description":"Start column of range (inclusive).","type":"integer"},{"name":"endLine","description":"End line of range","type":"integer"},{"name":"endColumn","description":"End column of range (exclusive).","type":"integer"}]},{"id":"ShorthandEntry","type":"object","properties":[{"name":"name","description":"Shorthand name.","type":"string"},{"name":"value","description":"Shorthand value.","type":"string"},{"name":"important","description":"Whether the property has \\"!important\\" annotation (implies `false` if absent).","optional":true,"type":"boolean"}]},{"id":"CSSComputedStyleProperty","type":"object","properties":[{"name":"name","description":"Computed style property name.","type":"string"},{"name":"value","description":"Computed style property value.","type":"string"}]},{"id":"CSSStyle","description":"CSS style representation.","type":"object","properties":[{"name":"styleSheetId","description":"The css style sheet identifier (absent for user agent stylesheet and user-specified\\nstylesheet rules) this rule came from.","optional":true,"$ref":"StyleSheetId"},{"name":"cssProperties","description":"CSS properties in the style.","type":"array","items":{"$ref":"CSSProperty"}},{"name":"shorthandEntries","description":"Computed values for all shorthands found in the style.","type":"array","items":{"$ref":"ShorthandEntry"}},{"name":"cssText","description":"Style declaration text (if available).","optional":true,"type":"string"},{"name":"range","description":"Style declaration range in the enclosing stylesheet (if available).","optional":true,"$ref":"SourceRange"}]},{"id":"CSSProperty","description":"CSS property declaration data.","type":"object","properties":[{"name":"name","description":"The property name.","type":"string"},{"name":"value","description":"The property value.","type":"string"},{"name":"important","description":"Whether the property has \\"!important\\" annotation (implies `false` if absent).","optional":true,"type":"boolean"},{"name":"implicit","description":"Whether the property is implicit (implies `false` if absent).","optional":true,"type":"boolean"},{"name":"text","description":"The full property text as specified in the style.","optional":true,"type":"string"},{"name":"parsedOk","description":"Whether the property is understood by the browser (implies `true` if absent).","optional":true,"type":"boolean"},{"name":"disabled","description":"Whether the property is disabled by the user (present for source-based properties only).","optional":true,"type":"boolean"},{"name":"range","description":"The entire property range in the enclosing style declaration (if available).","optional":true,"$ref":"SourceRange"}]},{"id":"CSSMedia","description":"CSS media rule descriptor.","type":"object","properties":[{"name":"text","description":"Media query text.","type":"string"},{"name":"source","description":"Source of the media query: \\"mediaRule\\" if specified by a @media rule, \\"importRule\\" if\\nspecified by an @import rule, \\"linkedSheet\\" if specified by a \\"media\\" attribute in a linked\\nstylesheet\'s LINK tag, \\"inlineSheet\\" if specified by a \\"media\\" attribute in an inline\\nstylesheet\'s STYLE tag.","type":"string","enum":["mediaRule","importRule","linkedSheet","inlineSheet"]},{"name":"sourceURL","description":"URL of the document containing the media query description.","optional":true,"type":"string"},{"name":"range","description":"The associated rule (@media or @import) header range in the enclosing stylesheet (if\\navailable).","optional":true,"$ref":"SourceRange"},{"name":"styleSheetId","description":"Identifier of the stylesheet containing this object (if exists).","optional":true,"$ref":"StyleSheetId"},{"name":"mediaList","description":"Array of media queries.","optional":true,"type":"array","items":{"$ref":"MediaQuery"}}]},{"id":"MediaQuery","description":"Media query descriptor.","type":"object","properties":[{"name":"expressions","description":"Array of media query expressions.","type":"array","items":{"$ref":"MediaQueryExpression"}},{"name":"active","description":"Whether the media query condition is satisfied.","type":"boolean"}]},{"id":"MediaQueryExpression","description":"Media query expression descriptor.","type":"object","properties":[{"name":"value","description":"Media query expression value.","type":"number"},{"name":"unit","description":"Media query expression units.","type":"string"},{"name":"feature","description":"Media query expression feature.","type":"string"},{"name":"valueRange","description":"The associated range of the value text in the enclosing stylesheet (if available).","optional":true,"$ref":"SourceRange"},{"name":"computedLength","description":"Computed length of media query expression (if applicable).","optional":true,"type":"number"}]},{"id":"CSSContainerQuery","description":"CSS container query rule descriptor.","experimental":true,"type":"object","properties":[{"name":"text","description":"Container query text.","type":"string"},{"name":"range","description":"The associated rule header range in the enclosing stylesheet (if\\navailable).","optional":true,"$ref":"SourceRange"},{"name":"styleSheetId","description":"Identifier of the stylesheet containing this object (if exists).","optional":true,"$ref":"StyleSheetId"},{"name":"name","description":"Optional name for the container.","optional":true,"type":"string"}]},{"id":"CSSSupports","description":"CSS Supports at-rule descriptor.","experimental":true,"type":"object","properties":[{"name":"text","description":"Supports rule text.","type":"string"},{"name":"range","description":"The associated rule header range in the enclosing stylesheet (if\\navailable).","optional":true,"$ref":"SourceRange"},{"name":"styleSheetId","description":"Identifier of the stylesheet containing this object (if exists).","optional":true,"$ref":"StyleSheetId"}]},{"id":"PlatformFontUsage","description":"Information about amount of glyphs that were rendered with given font.","type":"object","properties":[{"name":"familyName","description":"Font\'s family name reported by platform.","type":"string"},{"name":"isCustomFont","description":"Indicates if the font was downloaded or resolved locally.","type":"boolean"},{"name":"glyphCount","description":"Amount of glyphs that were rendered with this font.","type":"number"}]},{"id":"FontVariationAxis","description":"Information about font variation axes for variable fonts","type":"object","properties":[{"name":"tag","description":"The font-variation-setting tag (a.k.a. \\"axis tag\\").","type":"string"},{"name":"name","description":"Human-readable variation name in the default language (normally, \\"en\\").","type":"string"},{"name":"minValue","description":"The minimum value (inclusive) the font supports for this tag.","type":"number"},{"name":"maxValue","description":"The maximum value (inclusive) the font supports for this tag.","type":"number"},{"name":"defaultValue","description":"The default value.","type":"number"}]},{"id":"FontFace","description":"Properties of a web font: https://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#font-descriptions\\nand additional information such as platformFontFamily and fontVariationAxes.","type":"object","properties":[{"name":"fontFamily","description":"The font-family.","type":"string"},{"name":"fontStyle","description":"The font-style.","type":"string"},{"name":"fontVariant","description":"The font-variant.","type":"string"},{"name":"fontWeight","description":"The font-weight.","type":"string"},{"name":"fontStretch","description":"The font-stretch.","type":"string"},{"name":"unicodeRange","description":"The unicode-range.","type":"string"},{"name":"src","description":"The src.","type":"string"},{"name":"platformFontFamily","description":"The resolved platform font family","type":"string"},{"name":"fontVariationAxes","description":"Available variation settings (a.k.a. \\"axes\\").","optional":true,"type":"array","items":{"$ref":"FontVariationAxis"}}]},{"id":"CSSKeyframesRule","description":"CSS keyframes rule representation.","type":"object","properties":[{"name":"animationName","description":"Animation name.","$ref":"Value"},{"name":"keyframes","description":"List of keyframes.","type":"array","items":{"$ref":"CSSKeyframeRule"}}]},{"id":"CSSKeyframeRule","description":"CSS keyframe rule representation.","type":"object","properties":[{"name":"styleSheetId","description":"The css style sheet identifier (absent for user agent stylesheet and user-specified\\nstylesheet rules) this rule came from.","optional":true,"$ref":"StyleSheetId"},{"name":"origin","description":"Parent stylesheet\'s origin.","$ref":"StyleSheetOrigin"},{"name":"keyText","description":"Associated key text.","$ref":"Value"},{"name":"style","description":"Associated style declaration.","$ref":"CSSStyle"}]},{"id":"StyleDeclarationEdit","description":"A descriptor of operation to mutate style declaration text.","type":"object","properties":[{"name":"styleSheetId","description":"The css style sheet identifier.","$ref":"StyleSheetId"},{"name":"range","description":"The range of the style text in the enclosing stylesheet.","$ref":"SourceRange"},{"name":"text","description":"New style text.","type":"string"}]}],"commands":[{"name":"addRule","description":"Inserts a new rule with the given `ruleText` in a stylesheet with given `styleSheetId`, at the\\nposition specified by `location`.","parameters":[{"name":"styleSheetId","description":"The css style sheet identifier where a new rule should be inserted.","$ref":"StyleSheetId"},{"name":"ruleText","description":"The text of a new rule.","type":"string"},{"name":"location","description":"Text position of a new rule in the target style sheet.","$ref":"SourceRange"}],"returns":[{"name":"rule","description":"The newly created rule.","$ref":"CSSRule"}]},{"name":"collectClassNames","description":"Returns all class names from specified stylesheet.","parameters":[{"name":"styleSheetId","$ref":"StyleSheetId"}],"returns":[{"name":"classNames","description":"Class name list.","type":"array","items":{"type":"string"}}]},{"name":"createStyleSheet","description":"Creates a new special \\"via-inspector\\" stylesheet in the frame with given `frameId`.","parameters":[{"name":"frameId","description":"Identifier of the frame where \\"via-inspector\\" stylesheet should be created.","$ref":"Page.FrameId"}],"returns":[{"name":"styleSheetId","description":"Identifier of the created \\"via-inspector\\" stylesheet.","$ref":"StyleSheetId"}]},{"name":"disable","description":"Disables the CSS agent for the given page."},{"name":"enable","description":"Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been\\nenabled until the result of this command is received."},{"name":"forcePseudoState","description":"Ensures that the given node will have specified pseudo-classes whenever its style is computed by\\nthe browser.","parameters":[{"name":"nodeId","description":"The element id for which to force the pseudo state.","$ref":"DOM.NodeId"},{"name":"forcedPseudoClasses","description":"Element pseudo classes to force when computing the element\'s style.","type":"array","items":{"type":"string"}}]},{"name":"getBackgroundColors","parameters":[{"name":"nodeId","description":"Id of the node to get background colors for.","$ref":"DOM.NodeId"}],"returns":[{"name":"backgroundColors","description":"The range of background colors behind this element, if it contains any visible text. If no\\nvisible text is present, this will be undefined. In the case of a flat background color,\\nthis will consist of simply that color. In the case of a gradient, this will consist of each\\nof the color stops. For anything more complicated, this will be an empty array. Images will\\nbe ignored (as if the image had failed to load).","optional":true,"type":"array","items":{"type":"string"}},{"name":"computedFontSize","description":"The computed font size for this node, as a CSS computed value string (e.g. \'12px\').","optional":true,"type":"string"},{"name":"computedFontWeight","description":"The computed font weight for this node, as a CSS computed value string (e.g. \'normal\' or\\n\'100\').","optional":true,"type":"string"}]},{"name":"getComputedStyleForNode","description":"Returns the computed style for a DOM node identified by `nodeId`.","parameters":[{"name":"nodeId","$ref":"DOM.NodeId"}],"returns":[{"name":"computedStyle","description":"Computed style for the specified DOM node.","type":"array","items":{"$ref":"CSSComputedStyleProperty"}}]},{"name":"getInlineStylesForNode","description":"Returns the styles defined inline (explicitly in the \\"style\\" attribute and implicitly, using DOM\\nattributes) for a DOM node identified by `nodeId`.","parameters":[{"name":"nodeId","$ref":"DOM.NodeId"}],"returns":[{"name":"inlineStyle","description":"Inline style for the specified DOM node.","optional":true,"$ref":"CSSStyle"},{"name":"attributesStyle","description":"Attribute-defined element style (e.g. resulting from \\"width=20 height=100%\\").","optional":true,"$ref":"CSSStyle"}]},{"name":"getMatchedStylesForNode","description":"Returns requested styles for a DOM node identified by `nodeId`.","parameters":[{"name":"nodeId","$ref":"DOM.NodeId"}],"returns":[{"name":"inlineStyle","description":"Inline style for the specified DOM node.","optional":true,"$ref":"CSSStyle"},{"name":"attributesStyle","description":"Attribute-defined element style (e.g. resulting from \\"width=20 height=100%\\").","optional":true,"$ref":"CSSStyle"},{"name":"matchedCSSRules","description":"CSS rules matching this node, from all applicable stylesheets.","optional":true,"type":"array","items":{"$ref":"RuleMatch"}},{"name":"pseudoElements","description":"Pseudo style matches for this node.","optional":true,"type":"array","items":{"$ref":"PseudoElementMatches"}},{"name":"inherited","description":"A chain of inherited styles (from the immediate node parent up to the DOM tree root).","optional":true,"type":"array","items":{"$ref":"InheritedStyleEntry"}},{"name":"cssKeyframesRules","description":"A list of CSS keyframed animations matching this node.","optional":true,"type":"array","items":{"$ref":"CSSKeyframesRule"}}]},{"name":"getMediaQueries","description":"Returns all media queries parsed by the rendering engine.","returns":[{"name":"medias","type":"array","items":{"$ref":"CSSMedia"}}]},{"name":"getPlatformFontsForNode","description":"Requests information about platform fonts which we used to render child TextNodes in the given\\nnode.","parameters":[{"name":"nodeId","$ref":"DOM.NodeId"}],"returns":[{"name":"fonts","description":"Usage statistics for every employed platform font.","type":"array","items":{"$ref":"PlatformFontUsage"}}]},{"name":"getStyleSheetText","description":"Returns the current textual content for a stylesheet.","parameters":[{"name":"styleSheetId","$ref":"StyleSheetId"}],"returns":[{"name":"text","description":"The stylesheet text.","type":"string"}]},{"name":"trackComputedStyleUpdates","description":"Starts tracking the given computed styles for updates. The specified array of properties\\nreplaces the one previously specified. Pass empty array to disable tracking.\\nUse takeComputedStyleUpdates to retrieve the list of nodes that had properties modified.\\nThe changes to computed style properties are only tracked for nodes pushed to the front-end\\nby the DOM agent. If no changes to the tracked properties occur after the node has been pushed\\nto the front-end, no updates will be issued for the node.","experimental":true,"parameters":[{"name":"propertiesToTrack","type":"array","items":{"$ref":"CSSComputedStyleProperty"}}]},{"name":"takeComputedStyleUpdates","description":"Polls the next batch of computed style updates.","experimental":true,"returns":[{"name":"nodeIds","description":"The list of node Ids that have their tracked computed styles updated","type":"array","items":{"$ref":"DOM.NodeId"}}]},{"name":"setEffectivePropertyValueForNode","description":"Find a rule with the given active property for the given node and set the new value for this\\nproperty","parameters":[{"name":"nodeId","description":"The element id for which to set property.","$ref":"DOM.NodeId"},{"name":"propertyName","type":"string"},{"name":"value","type":"string"}]},{"name":"setKeyframeKey","description":"Modifies the keyframe rule key text.","parameters":[{"name":"styleSheetId","$ref":"StyleSheetId"},{"name":"range","$ref":"SourceRange"},{"name":"keyText","type":"string"}],"returns":[{"name":"keyText","description":"The resulting key text after modification.","$ref":"Value"}]},{"name":"setMediaText","description":"Modifies the rule selector.","parameters":[{"name":"styleSheetId","$ref":"StyleSheetId"},{"name":"range","$ref":"SourceRange"},{"name":"text","type":"string"}],"returns":[{"name":"media","description":"The resulting CSS media rule after modification.","$ref":"CSSMedia"}]},{"name":"setContainerQueryText","description":"Modifies the expression of a container query.","experimental":true,"parameters":[{"name":"styleSheetId","$ref":"StyleSheetId"},{"name":"range","$ref":"SourceRange"},{"name":"text","type":"string"}],"returns":[{"name":"containerQuery","description":"The resulting CSS container query rule after modification.","$ref":"CSSContainerQuery"}]},{"name":"setRuleSelector","description":"Modifies the rule selector.","parameters":[{"name":"styleSheetId","$ref":"StyleSheetId"},{"name":"range","$ref":"SourceRange"},{"name":"selector","type":"string"}],"returns":[{"name":"selectorList","description":"The resulting selector list after modification.","$ref":"SelectorList"}]},{"name":"setStyleSheetText","description":"Sets the new stylesheet text.","parameters":[{"name":"styleSheetId","$ref":"StyleSheetId"},{"name":"text","type":"string"}],"returns":[{"name":"sourceMapURL","description":"URL of source map associated with script (if any).","optional":true,"type":"string"}]},{"name":"setStyleTexts","description":"Applies specified style edits one after another in the given order.","parameters":[{"name":"edits","type":"array","items":{"$ref":"StyleDeclarationEdit"}}],"returns":[{"name":"styles","description":"The resulting styles after modification.","type":"array","items":{"$ref":"CSSStyle"}}]},{"name":"startRuleUsageTracking","description":"Enables the selector recording."},{"name":"stopRuleUsageTracking","description":"Stop tracking rule usage and return the list of rules that were used since last call to\\n`takeCoverageDelta` (or since start of coverage instrumentation)","returns":[{"name":"ruleUsage","type":"array","items":{"$ref":"RuleUsage"}}]},{"name":"takeCoverageDelta","description":"Obtain list of rules that became used since last call to this method (or since start of coverage\\ninstrumentation)","returns":[{"name":"coverage","type":"array","items":{"$ref":"RuleUsage"}},{"name":"timestamp","description":"Monotonically increasing time, in seconds.","type":"number"}]},{"name":"setLocalFontsEnabled","description":"Enables/disables rendering of local CSS fonts (enabled by default).","experimental":true,"parameters":[{"name":"enabled","description":"Whether rendering of local fonts is enabled.","type":"boolean"}]}],"events":[{"name":"fontsUpdated","description":"Fires whenever a web font is updated.  A non-empty font parameter indicates a successfully loaded\\nweb font","parameters":[{"name":"font","description":"The web font that has loaded.","optional":true,"$ref":"FontFace"}]},{"name":"mediaQueryResultChanged","description":"Fires whenever a MediaQuery result changes (for example, after a browser window has been\\nresized.) The current implementation considers only viewport-dependent media features."},{"name":"styleSheetAdded","description":"Fired whenever an active document stylesheet is added.","parameters":[{"name":"header","description":"Added stylesheet metainfo.","$ref":"CSSStyleSheetHeader"}]},{"name":"styleSheetChanged","description":"Fired whenever a stylesheet is changed as a result of the client operation.","parameters":[{"name":"styleSheetId","$ref":"StyleSheetId"}]},{"name":"styleSheetRemoved","description":"Fired whenever an active document stylesheet is removed.","parameters":[{"name":"styleSheetId","description":"Identifier of the removed stylesheet.","$ref":"StyleSheetId"}]}]},{"domain":"CacheStorage","experimental":true,"types":[{"id":"CacheId","description":"Unique identifier of the Cache object.","type":"string"},{"id":"CachedResponseType","description":"type of HTTP response cached","type":"string","enum":["basic","cors","default","error","opaqueResponse","opaqueRedirect"]},{"id":"DataEntry","description":"Data entry.","type":"object","properties":[{"name":"requestURL","description":"Request URL.","type":"string"},{"name":"requestMethod","description":"Request method.","type":"string"},{"name":"requestHeaders","description":"Request headers","type":"array","items":{"$ref":"Header"}},{"name":"responseTime","description":"Number of seconds since epoch.","type":"number"},{"name":"responseStatus","description":"HTTP response status code.","type":"integer"},{"name":"responseStatusText","description":"HTTP response status text.","type":"string"},{"name":"responseType","description":"HTTP response type","$ref":"CachedResponseType"},{"name":"responseHeaders","description":"Response headers","type":"array","items":{"$ref":"Header"}}]},{"id":"Cache","description":"Cache identifier.","type":"object","properties":[{"name":"cacheId","description":"An opaque unique id of the cache.","$ref":"CacheId"},{"name":"securityOrigin","description":"Security origin of the cache.","type":"string"},{"name":"cacheName","description":"The name of the cache.","type":"string"}]},{"id":"Header","type":"object","properties":[{"name":"name","type":"string"},{"name":"value","type":"string"}]},{"id":"CachedResponse","description":"Cached response","type":"object","properties":[{"name":"body","description":"Entry content, base64-encoded. (Encoded as a base64 string when passed over JSON)","type":"string"}]}],"commands":[{"name":"deleteCache","description":"Deletes a cache.","parameters":[{"name":"cacheId","description":"Id of cache for deletion.","$ref":"CacheId"}]},{"name":"deleteEntry","description":"Deletes a cache entry.","parameters":[{"name":"cacheId","description":"Id of cache where the entry will be deleted.","$ref":"CacheId"},{"name":"request","description":"URL spec of the request.","type":"string"}]},{"name":"requestCacheNames","description":"Requests cache names.","parameters":[{"name":"securityOrigin","description":"Security origin.","type":"string"}],"returns":[{"name":"caches","description":"Caches for the security origin.","type":"array","items":{"$ref":"Cache"}}]},{"name":"requestCachedResponse","description":"Fetches cache entry.","parameters":[{"name":"cacheId","description":"Id of cache that contains the entry.","$ref":"CacheId"},{"name":"requestURL","description":"URL spec of the request.","type":"string"},{"name":"requestHeaders","description":"headers of the request.","type":"array","items":{"$ref":"Header"}}],"returns":[{"name":"response","description":"Response read from the cache.","$ref":"CachedResponse"}]},{"name":"requestEntries","description":"Requests data from cache.","parameters":[{"name":"cacheId","description":"ID of cache to get entries from.","$ref":"CacheId"},{"name":"skipCount","description":"Number of records to skip.","optional":true,"type":"integer"},{"name":"pageSize","description":"Number of records to fetch.","optional":true,"type":"integer"},{"name":"pathFilter","description":"If present, only return the entries containing this substring in the path","optional":true,"type":"string"}],"returns":[{"name":"cacheDataEntries","description":"Array of object store data entries.","type":"array","items":{"$ref":"DataEntry"}},{"name":"returnCount","description":"Count of returned entries from this storage. If pathFilter is empty, it\\nis the count of all entries from this storage.","type":"number"}]}]},{"domain":"Cast","description":"A domain for interacting with Cast, Presentation API, and Remote Playback API\\nfunctionalities.","experimental":true,"types":[{"id":"Sink","type":"object","properties":[{"name":"name","type":"string"},{"name":"id","type":"string"},{"name":"session","description":"Text describing the current session. Present only if there is an active\\nsession on the sink.","optional":true,"type":"string"}]}],"commands":[{"name":"enable","description":"Starts observing for sinks that can be used for tab mirroring, and if set,\\nsinks compatible with |presentationUrl| as well. When sinks are found, a\\n|sinksUpdated| event is fired.\\nAlso starts observing for issue messages. When an issue is added or removed,\\nan |issueUpdated| event is fired.","parameters":[{"name":"presentationUrl","optional":true,"type":"string"}]},{"name":"disable","description":"Stops observing for sinks and issues."},{"name":"setSinkToUse","description":"Sets a sink to be used when the web page requests the browser to choose a\\nsink via Presentation API, Remote Playback API, or Cast SDK.","parameters":[{"name":"sinkName","type":"string"}]},{"name":"startDesktopMirroring","description":"Starts mirroring the desktop to the sink.","parameters":[{"name":"sinkName","type":"string"}]},{"name":"startTabMirroring","description":"Starts mirroring the tab to the sink.","parameters":[{"name":"sinkName","type":"string"}]},{"name":"stopCasting","description":"Stops the active Cast session on the sink.","parameters":[{"name":"sinkName","type":"string"}]}],"events":[{"name":"sinksUpdated","description":"This is fired whenever the list of available sinks changes. A sink is a\\ndevice or a software surface that you can cast to.","parameters":[{"name":"sinks","type":"array","items":{"$ref":"Sink"}}]},{"name":"issueUpdated","description":"This is fired whenever the outstanding issue/error message changes.\\n|issueMessage| is empty if there is no issue.","parameters":[{"name":"issueMessage","type":"string"}]}]},{"domain":"DOM","description":"This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object\\nthat has an `id`. This `id` can be used to get additional information on the Node, resolve it into\\nthe JavaScript object wrapper, etc. It is important that client receives DOM events only for the\\nnodes that are known to the client. Backend keeps track of the nodes that were sent to the client\\nand never sends the same node twice. It is client\'s responsibility to collect information about\\nthe nodes that were sent to the client.<p>Note that `iframe` owner elements will return\\ncorresponding document elements as their child nodes.</p>","dependencies":["Runtime"],"types":[{"id":"NodeId","description":"Unique DOM node identifier.","type":"integer"},{"id":"BackendNodeId","description":"Unique DOM node identifier used to reference a node that may not have been pushed to the\\nfront-end.","type":"integer"},{"id":"BackendNode","description":"Backend node with a friendly name.","type":"object","properties":[{"name":"nodeType","description":"`Node`\'s nodeType.","type":"integer"},{"name":"nodeName","description":"`Node`\'s nodeName.","type":"string"},{"name":"backendNodeId","$ref":"BackendNodeId"}]},{"id":"PseudoType","description":"Pseudo element type.","type":"string","enum":["first-line","first-letter","before","after","marker","backdrop","selection","target-text","spelling-error","grammar-error","highlight","first-line-inherited","scrollbar","scrollbar-thumb","scrollbar-button","scrollbar-track","scrollbar-track-piece","scrollbar-corner","resizer","input-list-button","transition","transition-container","transition-old-content","transition-new-content"]},{"id":"ShadowRootType","description":"Shadow root type.","type":"string","enum":["user-agent","open","closed"]},{"id":"CompatibilityMode","description":"Document compatibility mode.","type":"string","enum":["QuirksMode","LimitedQuirksMode","NoQuirksMode"]},{"id":"Node","description":"DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes.\\nDOMNode is a base node mirror type.","type":"object","properties":[{"name":"nodeId","description":"Node identifier that is passed into the rest of the DOM messages as the `nodeId`. Backend\\nwill only push node with given `id` once. It is aware of all requested nodes and will only\\nfire DOM events for nodes known to the client.","$ref":"NodeId"},{"name":"parentId","description":"The id of the parent node if any.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"The BackendNodeId for this node.","$ref":"BackendNodeId"},{"name":"nodeType","description":"`Node`\'s nodeType.","type":"integer"},{"name":"nodeName","description":"`Node`\'s nodeName.","type":"string"},{"name":"localName","description":"`Node`\'s localName.","type":"string"},{"name":"nodeValue","description":"`Node`\'s nodeValue.","type":"string"},{"name":"childNodeCount","description":"Child count for `Container` nodes.","optional":true,"type":"integer"},{"name":"children","description":"Child nodes of this node when requested with children.","optional":true,"type":"array","items":{"$ref":"Node"}},{"name":"attributes","description":"Attributes of the `Element` node in the form of flat array `[name1, value1, name2, value2]`.","optional":true,"type":"array","items":{"type":"string"}},{"name":"documentURL","description":"Document URL that `Document` or `FrameOwner` node points to.","optional":true,"type":"string"},{"name":"baseURL","description":"Base URL that `Document` or `FrameOwner` node uses for URL completion.","optional":true,"type":"string"},{"name":"publicId","description":"`DocumentType`\'s publicId.","optional":true,"type":"string"},{"name":"systemId","description":"`DocumentType`\'s systemId.","optional":true,"type":"string"},{"name":"internalSubset","description":"`DocumentType`\'s internalSubset.","optional":true,"type":"string"},{"name":"xmlVersion","description":"`Document`\'s XML version in case of XML documents.","optional":true,"type":"string"},{"name":"name","description":"`Attr`\'s name.","optional":true,"type":"string"},{"name":"value","description":"`Attr`\'s value.","optional":true,"type":"string"},{"name":"pseudoType","description":"Pseudo element type for this node.","optional":true,"$ref":"PseudoType"},{"name":"shadowRootType","description":"Shadow root type.","optional":true,"$ref":"ShadowRootType"},{"name":"frameId","description":"Frame ID for frame owner elements.","optional":true,"$ref":"Page.FrameId"},{"name":"contentDocument","description":"Content document for frame owner elements.","optional":true,"$ref":"Node"},{"name":"shadowRoots","description":"Shadow root list for given element host.","optional":true,"type":"array","items":{"$ref":"Node"}},{"name":"templateContent","description":"Content document fragment for template elements.","optional":true,"$ref":"Node"},{"name":"pseudoElements","description":"Pseudo elements associated with this node.","optional":true,"type":"array","items":{"$ref":"Node"}},{"name":"importedDocument","description":"Deprecated, as the HTML Imports API has been removed (crbug.com/937746).\\nThis property used to return the imported document for the HTMLImport links.\\nThe property is always undefined now.","deprecated":true,"optional":true,"$ref":"Node"},{"name":"distributedNodes","description":"Distributed nodes for given insertion point.","optional":true,"type":"array","items":{"$ref":"BackendNode"}},{"name":"isSVG","description":"Whether the node is SVG.","optional":true,"type":"boolean"},{"name":"compatibilityMode","optional":true,"$ref":"CompatibilityMode"}]},{"id":"RGBA","description":"A structure holding an RGBA color.","type":"object","properties":[{"name":"r","description":"The red component, in the [0-255] range.","type":"integer"},{"name":"g","description":"The green component, in the [0-255] range.","type":"integer"},{"name":"b","description":"The blue component, in the [0-255] range.","type":"integer"},{"name":"a","description":"The alpha component, in the [0-1] range (default: 1).","optional":true,"type":"number"}]},{"id":"Quad","description":"An array of quad vertices, x immediately followed by y for each point, points clock-wise.","type":"array","items":{"type":"number"}},{"id":"BoxModel","description":"Box model.","type":"object","properties":[{"name":"content","description":"Content box","$ref":"Quad"},{"name":"padding","description":"Padding box","$ref":"Quad"},{"name":"border","description":"Border box","$ref":"Quad"},{"name":"margin","description":"Margin box","$ref":"Quad"},{"name":"width","description":"Node width","type":"integer"},{"name":"height","description":"Node height","type":"integer"},{"name":"shapeOutside","description":"Shape outside coordinates","optional":true,"$ref":"ShapeOutsideInfo"}]},{"id":"ShapeOutsideInfo","description":"CSS Shape Outside details.","type":"object","properties":[{"name":"bounds","description":"Shape bounds","$ref":"Quad"},{"name":"shape","description":"Shape coordinate details","type":"array","items":{"type":"any"}},{"name":"marginShape","description":"Margin shape bounds","type":"array","items":{"type":"any"}}]},{"id":"Rect","description":"Rectangle.","type":"object","properties":[{"name":"x","description":"X coordinate","type":"number"},{"name":"y","description":"Y coordinate","type":"number"},{"name":"width","description":"Rectangle width","type":"number"},{"name":"height","description":"Rectangle height","type":"number"}]},{"id":"CSSComputedStyleProperty","type":"object","properties":[{"name":"name","description":"Computed style property name.","type":"string"},{"name":"value","description":"Computed style property value.","type":"string"}]}],"commands":[{"name":"collectClassNamesFromSubtree","description":"Collects class names for the node with given id and all of it\'s child nodes.","experimental":true,"parameters":[{"name":"nodeId","description":"Id of the node to collect class names.","$ref":"NodeId"}],"returns":[{"name":"classNames","description":"Class name list.","type":"array","items":{"type":"string"}}]},{"name":"copyTo","description":"Creates a deep copy of the specified node and places it into the target container before the\\ngiven anchor.","experimental":true,"parameters":[{"name":"nodeId","description":"Id of the node to copy.","$ref":"NodeId"},{"name":"targetNodeId","description":"Id of the element to drop the copy into.","$ref":"NodeId"},{"name":"insertBeforeNodeId","description":"Drop the copy before this node (if absent, the copy becomes the last child of\\n`targetNodeId`).","optional":true,"$ref":"NodeId"}],"returns":[{"name":"nodeId","description":"Id of the node clone.","$ref":"NodeId"}]},{"name":"describeNode","description":"Describes node given its id, does not require domain to be enabled. Does not start tracking any\\nobjects, can be used for automation.","parameters":[{"name":"nodeId","description":"Identifier of the node.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node.","optional":true,"$ref":"BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper.","optional":true,"$ref":"Runtime.RemoteObjectId"},{"name":"depth","description":"The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the\\nentire subtree or provide an integer larger than 0.","optional":true,"type":"integer"},{"name":"pierce","description":"Whether or not iframes and shadow roots should be traversed when returning the subtree\\n(default is false).","optional":true,"type":"boolean"}],"returns":[{"name":"node","description":"Node description.","$ref":"Node"}]},{"name":"scrollIntoViewIfNeeded","description":"Scrolls the specified rect of the given node into view if not already visible.\\nNote: exactly one between nodeId, backendNodeId and objectId should be passed\\nto identify the node.","experimental":true,"parameters":[{"name":"nodeId","description":"Identifier of the node.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node.","optional":true,"$ref":"BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper.","optional":true,"$ref":"Runtime.RemoteObjectId"},{"name":"rect","description":"The rect to be scrolled into view, relative to the node\'s border box, in CSS pixels.\\nWhen omitted, center of the node will be used, similar to Element.scrollIntoView.","optional":true,"$ref":"Rect"}]},{"name":"disable","description":"Disables DOM agent for the given page."},{"name":"discardSearchResults","description":"Discards search results from the session with the given id. `getSearchResults` should no longer\\nbe called for that search.","experimental":true,"parameters":[{"name":"searchId","description":"Unique search session identifier.","type":"string"}]},{"name":"enable","description":"Enables DOM agent for the given page.","parameters":[{"name":"includeWhitespace","description":"Whether to include whitespaces in the children array of returned Nodes.","experimental":true,"optional":true,"type":"string","enum":["none","all"]}]},{"name":"focus","description":"Focuses the given element.","parameters":[{"name":"nodeId","description":"Identifier of the node.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node.","optional":true,"$ref":"BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper.","optional":true,"$ref":"Runtime.RemoteObjectId"}]},{"name":"getAttributes","description":"Returns attributes for the specified node.","parameters":[{"name":"nodeId","description":"Id of the node to retrieve attibutes for.","$ref":"NodeId"}],"returns":[{"name":"attributes","description":"An interleaved array of node attribute names and values.","type":"array","items":{"type":"string"}}]},{"name":"getBoxModel","description":"Returns boxes for the given node.","parameters":[{"name":"nodeId","description":"Identifier of the node.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node.","optional":true,"$ref":"BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper.","optional":true,"$ref":"Runtime.RemoteObjectId"}],"returns":[{"name":"model","description":"Box model for the node.","$ref":"BoxModel"}]},{"name":"getContentQuads","description":"Returns quads that describe node position on the page. This method\\nmight return multiple quads for inline nodes.","experimental":true,"parameters":[{"name":"nodeId","description":"Identifier of the node.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node.","optional":true,"$ref":"BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper.","optional":true,"$ref":"Runtime.RemoteObjectId"}],"returns":[{"name":"quads","description":"Quads that describe node layout relative to viewport.","type":"array","items":{"$ref":"Quad"}}]},{"name":"getDocument","description":"Returns the root DOM node (and optionally the subtree) to the caller.","parameters":[{"name":"depth","description":"The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the\\nentire subtree or provide an integer larger than 0.","optional":true,"type":"integer"},{"name":"pierce","description":"Whether or not iframes and shadow roots should be traversed when returning the subtree\\n(default is false).","optional":true,"type":"boolean"}],"returns":[{"name":"root","description":"Resulting node.","$ref":"Node"}]},{"name":"getFlattenedDocument","description":"Returns the root DOM node (and optionally the subtree) to the caller.\\nDeprecated, as it is not designed to work well with the rest of the DOM agent.\\nUse DOMSnapshot.captureSnapshot instead.","deprecated":true,"parameters":[{"name":"depth","description":"The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the\\nentire subtree or provide an integer larger than 0.","optional":true,"type":"integer"},{"name":"pierce","description":"Whether or not iframes and shadow roots should be traversed when returning the subtree\\n(default is false).","optional":true,"type":"boolean"}],"returns":[{"name":"nodes","description":"Resulting node.","type":"array","items":{"$ref":"Node"}}]},{"name":"getNodesForSubtreeByStyle","description":"Finds nodes with a given computed style in a subtree.","experimental":true,"parameters":[{"name":"nodeId","description":"Node ID pointing to the root of a subtree.","$ref":"NodeId"},{"name":"computedStyles","description":"The style to filter nodes by (includes nodes if any of properties matches).","type":"array","items":{"$ref":"CSSComputedStyleProperty"}},{"name":"pierce","description":"Whether or not iframes and shadow roots in the same target should be traversed when returning the\\nresults (default is false).","optional":true,"type":"boolean"}],"returns":[{"name":"nodeIds","description":"Resulting nodes.","type":"array","items":{"$ref":"NodeId"}}]},{"name":"getNodeForLocation","description":"Returns node id at given location. Depending on whether DOM domain is enabled, nodeId is\\neither returned or not.","parameters":[{"name":"x","description":"X coordinate.","type":"integer"},{"name":"y","description":"Y coordinate.","type":"integer"},{"name":"includeUserAgentShadowDOM","description":"False to skip to the nearest non-UA shadow root ancestor (default: false).","optional":true,"type":"boolean"},{"name":"ignorePointerEventsNone","description":"Whether to ignore pointer-events: none on elements and hit test them.","optional":true,"type":"boolean"}],"returns":[{"name":"backendNodeId","description":"Resulting node.","$ref":"BackendNodeId"},{"name":"frameId","description":"Frame this node belongs to.","$ref":"Page.FrameId"},{"name":"nodeId","description":"Id of the node at given coordinates, only when enabled and requested document.","optional":true,"$ref":"NodeId"}]},{"name":"getOuterHTML","description":"Returns node\'s HTML markup.","parameters":[{"name":"nodeId","description":"Identifier of the node.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node.","optional":true,"$ref":"BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper.","optional":true,"$ref":"Runtime.RemoteObjectId"}],"returns":[{"name":"outerHTML","description":"Outer HTML markup.","type":"string"}]},{"name":"getRelayoutBoundary","description":"Returns the id of the nearest ancestor that is a relayout boundary.","experimental":true,"parameters":[{"name":"nodeId","description":"Id of the node.","$ref":"NodeId"}],"returns":[{"name":"nodeId","description":"Relayout boundary node id for the given node.","$ref":"NodeId"}]},{"name":"getSearchResults","description":"Returns search results from given `fromIndex` to given `toIndex` from the search with the given\\nidentifier.","experimental":true,"parameters":[{"name":"searchId","description":"Unique search session identifier.","type":"string"},{"name":"fromIndex","description":"Start index of the search result to be returned.","type":"integer"},{"name":"toIndex","description":"End index of the search result to be returned.","type":"integer"}],"returns":[{"name":"nodeIds","description":"Ids of the search result nodes.","type":"array","items":{"$ref":"NodeId"}}]},{"name":"hideHighlight","description":"Hides any highlight.","redirect":"Overlay"},{"name":"highlightNode","description":"Highlights DOM node.","redirect":"Overlay"},{"name":"highlightRect","description":"Highlights given rectangle.","redirect":"Overlay"},{"name":"markUndoableState","description":"Marks last undoable state.","experimental":true},{"name":"moveTo","description":"Moves node into the new container, places it before the given anchor.","parameters":[{"name":"nodeId","description":"Id of the node to move.","$ref":"NodeId"},{"name":"targetNodeId","description":"Id of the element to drop the moved node into.","$ref":"NodeId"},{"name":"insertBeforeNodeId","description":"Drop node before this one (if absent, the moved node becomes the last child of\\n`targetNodeId`).","optional":true,"$ref":"NodeId"}],"returns":[{"name":"nodeId","description":"New id of the moved node.","$ref":"NodeId"}]},{"name":"performSearch","description":"Searches for a given string in the DOM tree. Use `getSearchResults` to access search results or\\n`cancelSearch` to end this search session.","experimental":true,"parameters":[{"name":"query","description":"Plain text or query selector or XPath search query.","type":"string"},{"name":"includeUserAgentShadowDOM","description":"True to search in user agent shadow DOM.","optional":true,"type":"boolean"}],"returns":[{"name":"searchId","description":"Unique search session identifier.","type":"string"},{"name":"resultCount","description":"Number of search results.","type":"integer"}]},{"name":"pushNodeByPathToFrontend","description":"Requests that the node is sent to the caller given its path. // FIXME, use XPath","experimental":true,"parameters":[{"name":"path","description":"Path to node in the proprietary format.","type":"string"}],"returns":[{"name":"nodeId","description":"Id of the node for given path.","$ref":"NodeId"}]},{"name":"pushNodesByBackendIdsToFrontend","description":"Requests that a batch of nodes is sent to the caller given their backend node ids.","experimental":true,"parameters":[{"name":"backendNodeIds","description":"The array of backend node ids.","type":"array","items":{"$ref":"BackendNodeId"}}],"returns":[{"name":"nodeIds","description":"The array of ids of pushed nodes that correspond to the backend ids specified in\\nbackendNodeIds.","type":"array","items":{"$ref":"NodeId"}}]},{"name":"querySelector","description":"Executes `querySelector` on a given node.","parameters":[{"name":"nodeId","description":"Id of the node to query upon.","$ref":"NodeId"},{"name":"selector","description":"Selector string.","type":"string"}],"returns":[{"name":"nodeId","description":"Query selector result.","$ref":"NodeId"}]},{"name":"querySelectorAll","description":"Executes `querySelectorAll` on a given node.","parameters":[{"name":"nodeId","description":"Id of the node to query upon.","$ref":"NodeId"},{"name":"selector","description":"Selector string.","type":"string"}],"returns":[{"name":"nodeIds","description":"Query selector result.","type":"array","items":{"$ref":"NodeId"}}]},{"name":"redo","description":"Re-does the last undone action.","experimental":true},{"name":"removeAttribute","description":"Removes attribute with given name from an element with given id.","parameters":[{"name":"nodeId","description":"Id of the element to remove attribute from.","$ref":"NodeId"},{"name":"name","description":"Name of the attribute to remove.","type":"string"}]},{"name":"removeNode","description":"Removes node with given id.","parameters":[{"name":"nodeId","description":"Id of the node to remove.","$ref":"NodeId"}]},{"name":"requestChildNodes","description":"Requests that children of the node with given id are returned to the caller in form of\\n`setChildNodes` events where not only immediate children are retrieved, but all children down to\\nthe specified depth.","parameters":[{"name":"nodeId","description":"Id of the node to get children for.","$ref":"NodeId"},{"name":"depth","description":"The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the\\nentire subtree or provide an integer larger than 0.","optional":true,"type":"integer"},{"name":"pierce","description":"Whether or not iframes and shadow roots should be traversed when returning the sub-tree\\n(default is false).","optional":true,"type":"boolean"}]},{"name":"requestNode","description":"Requests that the node is sent to the caller given the JavaScript node object reference. All\\nnodes that form the path from the node to the root are also sent to the client as a series of\\n`setChildNodes` notifications.","parameters":[{"name":"objectId","description":"JavaScript object id to convert into node.","$ref":"Runtime.RemoteObjectId"}],"returns":[{"name":"nodeId","description":"Node id for given object.","$ref":"NodeId"}]},{"name":"resolveNode","description":"Resolves the JavaScript node object for a given NodeId or BackendNodeId.","parameters":[{"name":"nodeId","description":"Id of the node to resolve.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"Backend identifier of the node to resolve.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"objectGroup","description":"Symbolic group name that can be used to release multiple objects.","optional":true,"type":"string"},{"name":"executionContextId","description":"Execution context in which to resolve the node.","optional":true,"$ref":"Runtime.ExecutionContextId"}],"returns":[{"name":"object","description":"JavaScript object wrapper for given node.","$ref":"Runtime.RemoteObject"}]},{"name":"setAttributeValue","description":"Sets attribute for an element with given id.","parameters":[{"name":"nodeId","description":"Id of the element to set attribute for.","$ref":"NodeId"},{"name":"name","description":"Attribute name.","type":"string"},{"name":"value","description":"Attribute value.","type":"string"}]},{"name":"setAttributesAsText","description":"Sets attributes on element with given id. This method is useful when user edits some existing\\nattribute value and types in several attribute name/value pairs.","parameters":[{"name":"nodeId","description":"Id of the element to set attributes for.","$ref":"NodeId"},{"name":"text","description":"Text with a number of attributes. Will parse this text using HTML parser.","type":"string"},{"name":"name","description":"Attribute name to replace with new attributes derived from text in case text parsed\\nsuccessfully.","optional":true,"type":"string"}]},{"name":"setFileInputFiles","description":"Sets files for the given file input element.","parameters":[{"name":"files","description":"Array of file paths to set.","type":"array","items":{"type":"string"}},{"name":"nodeId","description":"Identifier of the node.","optional":true,"$ref":"NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node.","optional":true,"$ref":"BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node wrapper.","optional":true,"$ref":"Runtime.RemoteObjectId"}]},{"name":"setNodeStackTracesEnabled","description":"Sets if stack traces should be captured for Nodes. See `Node.getNodeStackTraces`. Default is disabled.","experimental":true,"parameters":[{"name":"enable","description":"Enable or disable.","type":"boolean"}]},{"name":"getNodeStackTraces","description":"Gets stack traces associated with a Node. As of now, only provides stack trace for Node creation.","experimental":true,"parameters":[{"name":"nodeId","description":"Id of the node to get stack traces for.","$ref":"NodeId"}],"returns":[{"name":"creation","description":"Creation stack trace, if available.","optional":true,"$ref":"Runtime.StackTrace"}]},{"name":"getFileInfo","description":"Returns file information for the given\\nFile wrapper.","experimental":true,"parameters":[{"name":"objectId","description":"JavaScript object id of the node wrapper.","$ref":"Runtime.RemoteObjectId"}],"returns":[{"name":"path","type":"string"}]},{"name":"setInspectedNode","description":"Enables console to refer to the node with given id via $x (see Command Line API for more details\\n$x functions).","experimental":true,"parameters":[{"name":"nodeId","description":"DOM node id to be accessible by means of $x command line API.","$ref":"NodeId"}]},{"name":"setNodeName","description":"Sets node name for a node with given id.","parameters":[{"name":"nodeId","description":"Id of the node to set name for.","$ref":"NodeId"},{"name":"name","description":"New node\'s name.","type":"string"}],"returns":[{"name":"nodeId","description":"New node\'s id.","$ref":"NodeId"}]},{"name":"setNodeValue","description":"Sets node value for a node with given id.","parameters":[{"name":"nodeId","description":"Id of the node to set value for.","$ref":"NodeId"},{"name":"value","description":"New node\'s value.","type":"string"}]},{"name":"setOuterHTML","description":"Sets node HTML markup, returns new node id.","parameters":[{"name":"nodeId","description":"Id of the node to set markup for.","$ref":"NodeId"},{"name":"outerHTML","description":"Outer HTML markup to set.","type":"string"}]},{"name":"undo","description":"Undoes the last performed action.","experimental":true},{"name":"getFrameOwner","description":"Returns iframe node that owns iframe with the given domain.","experimental":true,"parameters":[{"name":"frameId","$ref":"Page.FrameId"}],"returns":[{"name":"backendNodeId","description":"Resulting node.","$ref":"BackendNodeId"},{"name":"nodeId","description":"Id of the node at given coordinates, only when enabled and requested document.","optional":true,"$ref":"NodeId"}]},{"name":"getContainerForNode","description":"Returns the container of the given node based on container query conditions.\\nIf containerName is given, it will find the nearest container with a matching name;\\notherwise it will find the nearest container regardless of its container name.","experimental":true,"parameters":[{"name":"nodeId","$ref":"NodeId"},{"name":"containerName","optional":true,"type":"string"}],"returns":[{"name":"nodeId","description":"The container node for the given node, or null if not found.","optional":true,"$ref":"NodeId"}]},{"name":"getQueryingDescendantsForContainer","description":"Returns the descendants of a container query container that have\\ncontainer queries against this container.","experimental":true,"parameters":[{"name":"nodeId","description":"Id of the container node to find querying descendants from.","$ref":"NodeId"}],"returns":[{"name":"nodeIds","description":"Descendant nodes with container queries against the given container.","type":"array","items":{"$ref":"NodeId"}}]}],"events":[{"name":"attributeModified","description":"Fired when `Element`\'s attribute is modified.","parameters":[{"name":"nodeId","description":"Id of the node that has changed.","$ref":"NodeId"},{"name":"name","description":"Attribute name.","type":"string"},{"name":"value","description":"Attribute value.","type":"string"}]},{"name":"attributeRemoved","description":"Fired when `Element`\'s attribute is removed.","parameters":[{"name":"nodeId","description":"Id of the node that has changed.","$ref":"NodeId"},{"name":"name","description":"A ttribute name.","type":"string"}]},{"name":"characterDataModified","description":"Mirrors `DOMCharacterDataModified` event.","parameters":[{"name":"nodeId","description":"Id of the node that has changed.","$ref":"NodeId"},{"name":"characterData","description":"New text value.","type":"string"}]},{"name":"childNodeCountUpdated","description":"Fired when `Container`\'s child node count has changed.","parameters":[{"name":"nodeId","description":"Id of the node that has changed.","$ref":"NodeId"},{"name":"childNodeCount","description":"New node count.","type":"integer"}]},{"name":"childNodeInserted","description":"Mirrors `DOMNodeInserted` event.","parameters":[{"name":"parentNodeId","description":"Id of the node that has changed.","$ref":"NodeId"},{"name":"previousNodeId","description":"If of the previous siblint.","$ref":"NodeId"},{"name":"node","description":"Inserted node data.","$ref":"Node"}]},{"name":"childNodeRemoved","description":"Mirrors `DOMNodeRemoved` event.","parameters":[{"name":"parentNodeId","description":"Parent id.","$ref":"NodeId"},{"name":"nodeId","description":"Id of the node that has been removed.","$ref":"NodeId"}]},{"name":"distributedNodesUpdated","description":"Called when distribution is changed.","experimental":true,"parameters":[{"name":"insertionPointId","description":"Insertion point where distributed nodes were updated.","$ref":"NodeId"},{"name":"distributedNodes","description":"Distributed nodes for given insertion point.","type":"array","items":{"$ref":"BackendNode"}}]},{"name":"documentUpdated","description":"Fired when `Document` has been totally updated. Node ids are no longer valid."},{"name":"inlineStyleInvalidated","description":"Fired when `Element`\'s inline style is modified via a CSS property modification.","experimental":true,"parameters":[{"name":"nodeIds","description":"Ids of the nodes for which the inline styles have been invalidated.","type":"array","items":{"$ref":"NodeId"}}]},{"name":"pseudoElementAdded","description":"Called when a pseudo element is added to an element.","experimental":true,"parameters":[{"name":"parentId","description":"Pseudo element\'s parent element id.","$ref":"NodeId"},{"name":"pseudoElement","description":"The added pseudo element.","$ref":"Node"}]},{"name":"pseudoElementRemoved","description":"Called when a pseudo element is removed from an element.","experimental":true,"parameters":[{"name":"parentId","description":"Pseudo element\'s parent element id.","$ref":"NodeId"},{"name":"pseudoElementId","description":"The removed pseudo element id.","$ref":"NodeId"}]},{"name":"setChildNodes","description":"Fired when backend wants to provide client with the missing DOM structure. This happens upon\\nmost of the calls requesting node ids.","parameters":[{"name":"parentId","description":"Parent node id to populate with children.","$ref":"NodeId"},{"name":"nodes","description":"Child nodes array.","type":"array","items":{"$ref":"Node"}}]},{"name":"shadowRootPopped","description":"Called when shadow root is popped from the element.","experimental":true,"parameters":[{"name":"hostId","description":"Host element id.","$ref":"NodeId"},{"name":"rootId","description":"Shadow root id.","$ref":"NodeId"}]},{"name":"shadowRootPushed","description":"Called when shadow root is pushed into the element.","experimental":true,"parameters":[{"name":"hostId","description":"Host element id.","$ref":"NodeId"},{"name":"root","description":"Shadow root.","$ref":"Node"}]}]},{"domain":"DOMDebugger","description":"DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript\\nexecution will stop on these operations as if there was a regular breakpoint set.","dependencies":["DOM","Debugger","Runtime"],"types":[{"id":"DOMBreakpointType","description":"DOM breakpoint type.","type":"string","enum":["subtree-modified","attribute-modified","node-removed"]},{"id":"CSPViolationType","description":"CSP Violation type.","experimental":true,"type":"string","enum":["trustedtype-sink-violation","trustedtype-policy-violation"]},{"id":"EventListener","description":"Object event listener.","type":"object","properties":[{"name":"type","description":"`EventListener`\'s type.","type":"string"},{"name":"useCapture","description":"`EventListener`\'s useCapture.","type":"boolean"},{"name":"passive","description":"`EventListener`\'s passive flag.","type":"boolean"},{"name":"once","description":"`EventListener`\'s once flag.","type":"boolean"},{"name":"scriptId","description":"Script id of the handler code.","$ref":"Runtime.ScriptId"},{"name":"lineNumber","description":"Line number in the script (0-based).","type":"integer"},{"name":"columnNumber","description":"Column number in the script (0-based).","type":"integer"},{"name":"handler","description":"Event handler function value.","optional":true,"$ref":"Runtime.RemoteObject"},{"name":"originalHandler","description":"Event original handler function value.","optional":true,"$ref":"Runtime.RemoteObject"},{"name":"backendNodeId","description":"Node the listener is added to (if any).","optional":true,"$ref":"DOM.BackendNodeId"}]}],"commands":[{"name":"getEventListeners","description":"Returns event listeners of the given object.","parameters":[{"name":"objectId","description":"Identifier of the object to return listeners for.","$ref":"Runtime.RemoteObjectId"},{"name":"depth","description":"The maximum depth at which Node children should be retrieved, defaults to 1. Use -1 for the\\nentire subtree or provide an integer larger than 0.","optional":true,"type":"integer"},{"name":"pierce","description":"Whether or not iframes and shadow roots should be traversed when returning the subtree\\n(default is false). Reports listeners for all contexts if pierce is enabled.","optional":true,"type":"boolean"}],"returns":[{"name":"listeners","description":"Array of relevant listeners.","type":"array","items":{"$ref":"EventListener"}}]},{"name":"removeDOMBreakpoint","description":"Removes DOM breakpoint that was set using `setDOMBreakpoint`.","parameters":[{"name":"nodeId","description":"Identifier of the node to remove breakpoint from.","$ref":"DOM.NodeId"},{"name":"type","description":"Type of the breakpoint to remove.","$ref":"DOMBreakpointType"}]},{"name":"removeEventListenerBreakpoint","description":"Removes breakpoint on particular DOM event.","parameters":[{"name":"eventName","description":"Event name.","type":"string"},{"name":"targetName","description":"EventTarget interface name.","experimental":true,"optional":true,"type":"string"}]},{"name":"removeInstrumentationBreakpoint","description":"Removes breakpoint on particular native event.","experimental":true,"parameters":[{"name":"eventName","description":"Instrumentation name to stop on.","type":"string"}]},{"name":"removeXHRBreakpoint","description":"Removes breakpoint from XMLHttpRequest.","parameters":[{"name":"url","description":"Resource URL substring.","type":"string"}]},{"name":"setBreakOnCSPViolation","description":"Sets breakpoint on particular CSP violations.","experimental":true,"parameters":[{"name":"violationTypes","description":"CSP Violations to stop upon.","type":"array","items":{"$ref":"CSPViolationType"}}]},{"name":"setDOMBreakpoint","description":"Sets breakpoint on particular operation with DOM.","parameters":[{"name":"nodeId","description":"Identifier of the node to set breakpoint on.","$ref":"DOM.NodeId"},{"name":"type","description":"Type of the operation to stop upon.","$ref":"DOMBreakpointType"}]},{"name":"setEventListenerBreakpoint","description":"Sets breakpoint on particular DOM event.","parameters":[{"name":"eventName","description":"DOM Event name to stop on (any DOM event will do).","type":"string"},{"name":"targetName","description":"EventTarget interface name to stop on. If equal to `\\"*\\"` or not provided, will stop on any\\nEventTarget.","experimental":true,"optional":true,"type":"string"}]},{"name":"setInstrumentationBreakpoint","description":"Sets breakpoint on particular native event.","experimental":true,"parameters":[{"name":"eventName","description":"Instrumentation name to stop on.","type":"string"}]},{"name":"setXHRBreakpoint","description":"Sets breakpoint on XMLHttpRequest.","parameters":[{"name":"url","description":"Resource URL substring. All XHRs having this substring in the URL will get stopped upon.","type":"string"}]}]},{"domain":"EventBreakpoints","description":"EventBreakpoints permits setting breakpoints on particular operations and\\nevents in targets that run JavaScript but do not have a DOM.\\nJavaScript execution will stop on these operations as if there was a regular\\nbreakpoint set.","experimental":true,"commands":[{"name":"setInstrumentationBreakpoint","description":"Sets breakpoint on particular native event.","parameters":[{"name":"eventName","description":"Instrumentation name to stop on.","type":"string"}]},{"name":"removeInstrumentationBreakpoint","description":"Removes breakpoint on particular native event.","parameters":[{"name":"eventName","description":"Instrumentation name to stop on.","type":"string"}]}]},{"domain":"DOMSnapshot","description":"This domain facilitates obtaining document snapshots with DOM, layout, and style information.","experimental":true,"dependencies":["CSS","DOM","DOMDebugger","Page"],"types":[{"id":"DOMNode","description":"A Node in the DOM tree.","type":"object","properties":[{"name":"nodeType","description":"`Node`\'s nodeType.","type":"integer"},{"name":"nodeName","description":"`Node`\'s nodeName.","type":"string"},{"name":"nodeValue","description":"`Node`\'s nodeValue.","type":"string"},{"name":"textValue","description":"Only set for textarea elements, contains the text value.","optional":true,"type":"string"},{"name":"inputValue","description":"Only set for input elements, contains the input\'s associated text value.","optional":true,"type":"string"},{"name":"inputChecked","description":"Only set for radio and checkbox input elements, indicates if the element has been checked","optional":true,"type":"boolean"},{"name":"optionSelected","description":"Only set for option elements, indicates if the element has been selected","optional":true,"type":"boolean"},{"name":"backendNodeId","description":"`Node`\'s id, corresponds to DOM.Node.backendNodeId.","$ref":"DOM.BackendNodeId"},{"name":"childNodeIndexes","description":"The indexes of the node\'s child nodes in the `domNodes` array returned by `getSnapshot`, if\\nany.","optional":true,"type":"array","items":{"type":"integer"}},{"name":"attributes","description":"Attributes of an `Element` node.","optional":true,"type":"array","items":{"$ref":"NameValue"}},{"name":"pseudoElementIndexes","description":"Indexes of pseudo elements associated with this node in the `domNodes` array returned by\\n`getSnapshot`, if any.","optional":true,"type":"array","items":{"type":"integer"}},{"name":"layoutNodeIndex","description":"The index of the node\'s related layout tree node in the `layoutTreeNodes` array returned by\\n`getSnapshot`, if any.","optional":true,"type":"integer"},{"name":"documentURL","description":"Document URL that `Document` or `FrameOwner` node points to.","optional":true,"type":"string"},{"name":"baseURL","description":"Base URL that `Document` or `FrameOwner` node uses for URL completion.","optional":true,"type":"string"},{"name":"contentLanguage","description":"Only set for documents, contains the document\'s content language.","optional":true,"type":"string"},{"name":"documentEncoding","description":"Only set for documents, contains the document\'s character set encoding.","optional":true,"type":"string"},{"name":"publicId","description":"`DocumentType` node\'s publicId.","optional":true,"type":"string"},{"name":"systemId","description":"`DocumentType` node\'s systemId.","optional":true,"type":"string"},{"name":"frameId","description":"Frame ID for frame owner elements and also for the document node.","optional":true,"$ref":"Page.FrameId"},{"name":"contentDocumentIndex","description":"The index of a frame owner element\'s content document in the `domNodes` array returned by\\n`getSnapshot`, if any.","optional":true,"type":"integer"},{"name":"pseudoType","description":"Type of a pseudo element node.","optional":true,"$ref":"DOM.PseudoType"},{"name":"shadowRootType","description":"Shadow root type.","optional":true,"$ref":"DOM.ShadowRootType"},{"name":"isClickable","description":"Whether this DOM node responds to mouse clicks. This includes nodes that have had click\\nevent listeners attached via JavaScript as well as anchor tags that naturally navigate when\\nclicked.","optional":true,"type":"boolean"},{"name":"eventListeners","description":"Details of the node\'s event listeners, if any.","optional":true,"type":"array","items":{"$ref":"DOMDebugger.EventListener"}},{"name":"currentSourceURL","description":"The selected url for nodes with a srcset attribute.","optional":true,"type":"string"},{"name":"originURL","description":"The url of the script (if any) that generates this node.","optional":true,"type":"string"},{"name":"scrollOffsetX","description":"Scroll offsets, set when this node is a Document.","optional":true,"type":"number"},{"name":"scrollOffsetY","optional":true,"type":"number"}]},{"id":"InlineTextBox","description":"Details of post layout rendered text positions. The exact layout should not be regarded as\\nstable and may change between versions.","type":"object","properties":[{"name":"boundingBox","description":"The bounding box in document coordinates. Note that scroll offset of the document is ignored.","$ref":"DOM.Rect"},{"name":"startCharacterIndex","description":"The starting index in characters, for this post layout textbox substring. Characters that\\nwould be represented as a surrogate pair in UTF-16 have length 2.","type":"integer"},{"name":"numCharacters","description":"The number of characters in this post layout textbox substring. Characters that would be\\nrepresented as a surrogate pair in UTF-16 have length 2.","type":"integer"}]},{"id":"LayoutTreeNode","description":"Details of an element in the DOM tree with a LayoutObject.","type":"object","properties":[{"name":"domNodeIndex","description":"The index of the related DOM node in the `domNodes` array returned by `getSnapshot`.","type":"integer"},{"name":"boundingBox","description":"The bounding box in document coordinates. Note that scroll offset of the document is ignored.","$ref":"DOM.Rect"},{"name":"layoutText","description":"Contents of the LayoutText, if any.","optional":true,"type":"string"},{"name":"inlineTextNodes","description":"The post-layout inline text nodes, if any.","optional":true,"type":"array","items":{"$ref":"InlineTextBox"}},{"name":"styleIndex","description":"Index into the `computedStyles` array returned by `getSnapshot`.","optional":true,"type":"integer"},{"name":"paintOrder","description":"Global paint order index, which is determined by the stacking order of the nodes. Nodes\\nthat are painted together will have the same index. Only provided if includePaintOrder in\\ngetSnapshot was true.","optional":true,"type":"integer"},{"name":"isStackingContext","description":"Set to true to indicate the element begins a new stacking context.","optional":true,"type":"boolean"}]},{"id":"ComputedStyle","description":"A subset of the full ComputedStyle as defined by the request whitelist.","type":"object","properties":[{"name":"properties","description":"Name/value pairs of computed style properties.","type":"array","items":{"$ref":"NameValue"}}]},{"id":"NameValue","description":"A name/value pair.","type":"object","properties":[{"name":"name","description":"Attribute/property name.","type":"string"},{"name":"value","description":"Attribute/property value.","type":"string"}]},{"id":"StringIndex","description":"Index of the string in the strings table.","type":"integer"},{"id":"ArrayOfStrings","description":"Index of the string in the strings table.","type":"array","items":{"$ref":"StringIndex"}},{"id":"RareStringData","description":"Data that is only present on rare nodes.","type":"object","properties":[{"name":"index","type":"array","items":{"type":"integer"}},{"name":"value","type":"array","items":{"$ref":"StringIndex"}}]},{"id":"RareBooleanData","type":"object","properties":[{"name":"index","type":"array","items":{"type":"integer"}}]},{"id":"RareIntegerData","type":"object","properties":[{"name":"index","type":"array","items":{"type":"integer"}},{"name":"value","type":"array","items":{"type":"integer"}}]},{"id":"Rectangle","type":"array","items":{"type":"number"}},{"id":"DocumentSnapshot","description":"Document snapshot.","type":"object","properties":[{"name":"documentURL","description":"Document URL that `Document` or `FrameOwner` node points to.","$ref":"StringIndex"},{"name":"title","description":"Document title.","$ref":"StringIndex"},{"name":"baseURL","description":"Base URL that `Document` or `FrameOwner` node uses for URL completion.","$ref":"StringIndex"},{"name":"contentLanguage","description":"Contains the document\'s content language.","$ref":"StringIndex"},{"name":"encodingName","description":"Contains the document\'s character set encoding.","$ref":"StringIndex"},{"name":"publicId","description":"`DocumentType` node\'s publicId.","$ref":"StringIndex"},{"name":"systemId","description":"`DocumentType` node\'s systemId.","$ref":"StringIndex"},{"name":"frameId","description":"Frame ID for frame owner elements and also for the document node.","$ref":"StringIndex"},{"name":"nodes","description":"A table with dom nodes.","$ref":"NodeTreeSnapshot"},{"name":"layout","description":"The nodes in the layout tree.","$ref":"LayoutTreeSnapshot"},{"name":"textBoxes","description":"The post-layout inline text nodes.","$ref":"TextBoxSnapshot"},{"name":"scrollOffsetX","description":"Horizontal scroll offset.","optional":true,"type":"number"},{"name":"scrollOffsetY","description":"Vertical scroll offset.","optional":true,"type":"number"},{"name":"contentWidth","description":"Document content width.","optional":true,"type":"number"},{"name":"contentHeight","description":"Document content height.","optional":true,"type":"number"}]},{"id":"NodeTreeSnapshot","description":"Table containing nodes.","type":"object","properties":[{"name":"parentIndex","description":"Parent node index.","optional":true,"type":"array","items":{"type":"integer"}},{"name":"nodeType","description":"`Node`\'s nodeType.","optional":true,"type":"array","items":{"type":"integer"}},{"name":"shadowRootType","description":"Type of the shadow root the `Node` is in. String values are equal to the `ShadowRootType` enum.","optional":true,"$ref":"RareStringData"},{"name":"nodeName","description":"`Node`\'s nodeName.","optional":true,"type":"array","items":{"$ref":"StringIndex"}},{"name":"nodeValue","description":"`Node`\'s nodeValue.","optional":true,"type":"array","items":{"$ref":"StringIndex"}},{"name":"backendNodeId","description":"`Node`\'s id, corresponds to DOM.Node.backendNodeId.","optional":true,"type":"array","items":{"$ref":"DOM.BackendNodeId"}},{"name":"attributes","description":"Attributes of an `Element` node. Flatten name, value pairs.","optional":true,"type":"array","items":{"$ref":"ArrayOfStrings"}},{"name":"textValue","description":"Only set for textarea elements, contains the text value.","optional":true,"$ref":"RareStringData"},{"name":"inputValue","description":"Only set for input elements, contains the input\'s associated text value.","optional":true,"$ref":"RareStringData"},{"name":"inputChecked","description":"Only set for radio and checkbox input elements, indicates if the element has been checked","optional":true,"$ref":"RareBooleanData"},{"name":"optionSelected","description":"Only set for option elements, indicates if the element has been selected","optional":true,"$ref":"RareBooleanData"},{"name":"contentDocumentIndex","description":"The index of the document in the list of the snapshot documents.","optional":true,"$ref":"RareIntegerData"},{"name":"pseudoType","description":"Type of a pseudo element node.","optional":true,"$ref":"RareStringData"},{"name":"isClickable","description":"Whether this DOM node responds to mouse clicks. This includes nodes that have had click\\nevent listeners attached via JavaScript as well as anchor tags that naturally navigate when\\nclicked.","optional":true,"$ref":"RareBooleanData"},{"name":"currentSourceURL","description":"The selected url for nodes with a srcset attribute.","optional":true,"$ref":"RareStringData"},{"name":"originURL","description":"The url of the script (if any) that generates this node.","optional":true,"$ref":"RareStringData"}]},{"id":"LayoutTreeSnapshot","description":"Table of details of an element in the DOM tree with a LayoutObject.","type":"object","properties":[{"name":"nodeIndex","description":"Index of the corresponding node in the `NodeTreeSnapshot` array returned by `captureSnapshot`.","type":"array","items":{"type":"integer"}},{"name":"styles","description":"Array of indexes specifying computed style strings, filtered according to the `computedStyles` parameter passed to `captureSnapshot`.","type":"array","items":{"$ref":"ArrayOfStrings"}},{"name":"bounds","description":"The absolute position bounding box.","type":"array","items":{"$ref":"Rectangle"}},{"name":"text","description":"Contents of the LayoutText, if any.","type":"array","items":{"$ref":"StringIndex"}},{"name":"stackingContexts","description":"Stacking context information.","$ref":"RareBooleanData"},{"name":"paintOrders","description":"Global paint order index, which is determined by the stacking order of the nodes. Nodes\\nthat are painted together will have the same index. Only provided if includePaintOrder in\\ncaptureSnapshot was true.","optional":true,"type":"array","items":{"type":"integer"}},{"name":"offsetRects","description":"The offset rect of nodes. Only available when includeDOMRects is set to true","optional":true,"type":"array","items":{"$ref":"Rectangle"}},{"name":"scrollRects","description":"The scroll rect of nodes. Only available when includeDOMRects is set to true","optional":true,"type":"array","items":{"$ref":"Rectangle"}},{"name":"clientRects","description":"The client rect of nodes. Only available when includeDOMRects is set to true","optional":true,"type":"array","items":{"$ref":"Rectangle"}},{"name":"blendedBackgroundColors","description":"The list of background colors that are blended with colors of overlapping elements.","experimental":true,"optional":true,"type":"array","items":{"$ref":"StringIndex"}},{"name":"textColorOpacities","description":"The list of computed text opacities.","experimental":true,"optional":true,"type":"array","items":{"type":"number"}}]},{"id":"TextBoxSnapshot","description":"Table of details of the post layout rendered text positions. The exact layout should not be regarded as\\nstable and may change between versions.","type":"object","properties":[{"name":"layoutIndex","description":"Index of the layout tree node that owns this box collection.","type":"array","items":{"type":"integer"}},{"name":"bounds","description":"The absolute position bounding box.","type":"array","items":{"$ref":"Rectangle"}},{"name":"start","description":"The starting index in characters, for this post layout textbox substring. Characters that\\nwould be represented as a surrogate pair in UTF-16 have length 2.","type":"array","items":{"type":"integer"}},{"name":"length","description":"The number of characters in this post layout textbox substring. Characters that would be\\nrepresented as a surrogate pair in UTF-16 have length 2.","type":"array","items":{"type":"integer"}}]}],"commands":[{"name":"disable","description":"Disables DOM snapshot agent for the given page."},{"name":"enable","description":"Enables DOM snapshot agent for the given page."},{"name":"getSnapshot","description":"Returns a document snapshot, including the full DOM tree of the root node (including iframes,\\ntemplate contents, and imported documents) in a flattened array, as well as layout and\\nwhite-listed computed style information for the nodes. Shadow DOM in the returned DOM tree is\\nflattened.","deprecated":true,"parameters":[{"name":"computedStyleWhitelist","description":"Whitelist of computed styles to return.","type":"array","items":{"type":"string"}},{"name":"includeEventListeners","description":"Whether or not to retrieve details of DOM listeners (default false).","optional":true,"type":"boolean"},{"name":"includePaintOrder","description":"Whether to determine and include the paint order index of LayoutTreeNodes (default false).","optional":true,"type":"boolean"},{"name":"includeUserAgentShadowTree","description":"Whether to include UA shadow tree in the snapshot (default false).","optional":true,"type":"boolean"}],"returns":[{"name":"domNodes","description":"The nodes in the DOM tree. The DOMNode at index 0 corresponds to the root document.","type":"array","items":{"$ref":"DOMNode"}},{"name":"layoutTreeNodes","description":"The nodes in the layout tree.","type":"array","items":{"$ref":"LayoutTreeNode"}},{"name":"computedStyles","description":"Whitelisted ComputedStyle properties for each node in the layout tree.","type":"array","items":{"$ref":"ComputedStyle"}}]},{"name":"captureSnapshot","description":"Returns a document snapshot, including the full DOM tree of the root node (including iframes,\\ntemplate contents, and imported documents) in a flattened array, as well as layout and\\nwhite-listed computed style information for the nodes. Shadow DOM in the returned DOM tree is\\nflattened.","parameters":[{"name":"computedStyles","description":"Whitelist of computed styles to return.","type":"array","items":{"type":"string"}},{"name":"includePaintOrder","description":"Whether to include layout object paint orders into the snapshot.","optional":true,"type":"boolean"},{"name":"includeDOMRects","description":"Whether to include DOM rectangles (offsetRects, clientRects, scrollRects) into the snapshot","optional":true,"type":"boolean"},{"name":"includeBlendedBackgroundColors","description":"Whether to include blended background colors in the snapshot (default: false).\\nBlended background color is achieved by blending background colors of all elements\\nthat overlap with the current element.","experimental":true,"optional":true,"type":"boolean"},{"name":"includeTextColorOpacities","description":"Whether to include text color opacity in the snapshot (default: false).\\nAn element might have the opacity property set that affects the text color of the element.\\nThe final text color opacity is computed based on the opacity of all overlapping elements.","experimental":true,"optional":true,"type":"boolean"}],"returns":[{"name":"documents","description":"The nodes in the DOM tree. The DOMNode at index 0 corresponds to the root document.","type":"array","items":{"$ref":"DocumentSnapshot"}},{"name":"strings","description":"Shared string table that all string properties refer to with indexes.","type":"array","items":{"type":"string"}}]}]},{"domain":"DOMStorage","description":"Query and modify DOM storage.","experimental":true,"types":[{"id":"StorageId","description":"DOM Storage identifier.","type":"object","properties":[{"name":"securityOrigin","description":"Security origin for the storage.","type":"string"},{"name":"isLocalStorage","description":"Whether the storage is local storage (not session storage).","type":"boolean"}]},{"id":"Item","description":"DOM Storage item.","type":"array","items":{"type":"string"}}],"commands":[{"name":"clear","parameters":[{"name":"storageId","$ref":"StorageId"}]},{"name":"disable","description":"Disables storage tracking, prevents storage events from being sent to the client."},{"name":"enable","description":"Enables storage tracking, storage events will now be delivered to the client."},{"name":"getDOMStorageItems","parameters":[{"name":"storageId","$ref":"StorageId"}],"returns":[{"name":"entries","type":"array","items":{"$ref":"Item"}}]},{"name":"removeDOMStorageItem","parameters":[{"name":"storageId","$ref":"StorageId"},{"name":"key","type":"string"}]},{"name":"setDOMStorageItem","parameters":[{"name":"storageId","$ref":"StorageId"},{"name":"key","type":"string"},{"name":"value","type":"string"}]}],"events":[{"name":"domStorageItemAdded","parameters":[{"name":"storageId","$ref":"StorageId"},{"name":"key","type":"string"},{"name":"newValue","type":"string"}]},{"name":"domStorageItemRemoved","parameters":[{"name":"storageId","$ref":"StorageId"},{"name":"key","type":"string"}]},{"name":"domStorageItemUpdated","parameters":[{"name":"storageId","$ref":"StorageId"},{"name":"key","type":"string"},{"name":"oldValue","type":"string"},{"name":"newValue","type":"string"}]},{"name":"domStorageItemsCleared","parameters":[{"name":"storageId","$ref":"StorageId"}]}]},{"domain":"Database","experimental":true,"types":[{"id":"DatabaseId","description":"Unique identifier of Database object.","type":"string"},{"id":"Database","description":"Database object.","type":"object","properties":[{"name":"id","description":"Database ID.","$ref":"DatabaseId"},{"name":"domain","description":"Database domain.","type":"string"},{"name":"name","description":"Database name.","type":"string"},{"name":"version","description":"Database version.","type":"string"}]},{"id":"Error","description":"Database error.","type":"object","properties":[{"name":"message","description":"Error message.","type":"string"},{"name":"code","description":"Error code.","type":"integer"}]}],"commands":[{"name":"disable","description":"Disables database tracking, prevents database events from being sent to the client."},{"name":"enable","description":"Enables database tracking, database events will now be delivered to the client."},{"name":"executeSQL","parameters":[{"name":"databaseId","$ref":"DatabaseId"},{"name":"query","type":"string"}],"returns":[{"name":"columnNames","optional":true,"type":"array","items":{"type":"string"}},{"name":"values","optional":true,"type":"array","items":{"type":"any"}},{"name":"sqlError","optional":true,"$ref":"Error"}]},{"name":"getDatabaseTableNames","parameters":[{"name":"databaseId","$ref":"DatabaseId"}],"returns":[{"name":"tableNames","type":"array","items":{"type":"string"}}]}],"events":[{"name":"addDatabase","parameters":[{"name":"database","$ref":"Database"}]}]},{"domain":"DeviceOrientation","experimental":true,"commands":[{"name":"clearDeviceOrientationOverride","description":"Clears the overridden Device Orientation."},{"name":"setDeviceOrientationOverride","description":"Overrides the Device Orientation.","parameters":[{"name":"alpha","description":"Mock alpha","type":"number"},{"name":"beta","description":"Mock beta","type":"number"},{"name":"gamma","description":"Mock gamma","type":"number"}]}]},{"domain":"Emulation","description":"This domain emulates different environments for the page.","dependencies":["DOM","Page","Runtime"],"types":[{"id":"ScreenOrientation","description":"Screen orientation.","type":"object","properties":[{"name":"type","description":"Orientation type.","type":"string","enum":["portraitPrimary","portraitSecondary","landscapePrimary","landscapeSecondary"]},{"name":"angle","description":"Orientation angle.","type":"integer"}]},{"id":"DisplayFeature","type":"object","properties":[{"name":"orientation","description":"Orientation of a display feature in relation to screen","type":"string","enum":["vertical","horizontal"]},{"name":"offset","description":"The offset from the screen origin in either the x (for vertical\\norientation) or y (for horizontal orientation) direction.","type":"integer"},{"name":"maskLength","description":"A display feature may mask content such that it is not physically\\ndisplayed - this length along with the offset describes this area.\\nA display feature that only splits content will have a 0 mask_length.","type":"integer"}]},{"id":"MediaFeature","type":"object","properties":[{"name":"name","type":"string"},{"name":"value","type":"string"}]},{"id":"VirtualTimePolicy","description":"advance: If the scheduler runs out of immediate work, the virtual time base may fast forward to\\nallow the next delayed task (if any) to run; pause: The virtual time base may not advance;\\npauseIfNetworkFetchesPending: The virtual time base may not advance if there are any pending\\nresource fetches.","experimental":true,"type":"string","enum":["advance","pause","pauseIfNetworkFetchesPending"]},{"id":"UserAgentBrandVersion","description":"Used to specify User Agent Cient Hints to emulate. See https://wicg.github.io/ua-client-hints","experimental":true,"type":"object","properties":[{"name":"brand","type":"string"},{"name":"version","type":"string"}]},{"id":"UserAgentMetadata","description":"Used to specify User Agent Cient Hints to emulate. See https://wicg.github.io/ua-client-hints\\nMissing optional values will be filled in by the target with what it would normally use.","experimental":true,"type":"object","properties":[{"name":"brands","optional":true,"type":"array","items":{"$ref":"UserAgentBrandVersion"}},{"name":"fullVersionList","optional":true,"type":"array","items":{"$ref":"UserAgentBrandVersion"}},{"name":"fullVersion","deprecated":true,"optional":true,"type":"string"},{"name":"platform","type":"string"},{"name":"platformVersion","type":"string"},{"name":"architecture","type":"string"},{"name":"model","type":"string"},{"name":"mobile","type":"boolean"}]},{"id":"DisabledImageType","description":"Enum of image types that can be disabled.","experimental":true,"type":"string","enum":["avif","jxl","webp"]}],"commands":[{"name":"canEmulate","description":"Tells whether emulation is supported.","returns":[{"name":"result","description":"True if emulation is supported.","type":"boolean"}]},{"name":"clearDeviceMetricsOverride","description":"Clears the overridden device metrics."},{"name":"clearGeolocationOverride","description":"Clears the overridden Geolocation Position and Error."},{"name":"resetPageScaleFactor","description":"Requests that page scale factor is reset to initial values.","experimental":true},{"name":"setFocusEmulationEnabled","description":"Enables or disables simulating a focused and active page.","experimental":true,"parameters":[{"name":"enabled","description":"Whether to enable to disable focus emulation.","type":"boolean"}]},{"name":"setAutoDarkModeOverride","description":"Automatically render all web contents using a dark theme.","experimental":true,"parameters":[{"name":"enabled","description":"Whether to enable or disable automatic dark mode.\\nIf not specified, any existing override will be cleared.","optional":true,"type":"boolean"}]},{"name":"setCPUThrottlingRate","description":"Enables CPU throttling to emulate slow CPUs.","experimental":true,"parameters":[{"name":"rate","description":"Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc).","type":"number"}]},{"name":"setDefaultBackgroundColorOverride","description":"Sets or clears an override of the default background color of the frame. This override is used\\nif the content does not specify one.","parameters":[{"name":"color","description":"RGBA of the default background color. If not specified, any existing override will be\\ncleared.","optional":true,"$ref":"DOM.RGBA"}]},{"name":"setDeviceMetricsOverride","description":"Overrides the values of device screen dimensions (window.screen.width, window.screen.height,\\nwindow.innerWidth, window.innerHeight, and \\"device-width\\"/\\"device-height\\"-related CSS media\\nquery results).","parameters":[{"name":"width","description":"Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.","type":"integer"},{"name":"height","description":"Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.","type":"integer"},{"name":"deviceScaleFactor","description":"Overriding device scale factor value. 0 disables the override.","type":"number"},{"name":"mobile","description":"Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text\\nautosizing and more.","type":"boolean"},{"name":"scale","description":"Scale to apply to resulting view image.","experimental":true,"optional":true,"type":"number"},{"name":"screenWidth","description":"Overriding screen width value in pixels (minimum 0, maximum 10000000).","experimental":true,"optional":true,"type":"integer"},{"name":"screenHeight","description":"Overriding screen height value in pixels (minimum 0, maximum 10000000).","experimental":true,"optional":true,"type":"integer"},{"name":"positionX","description":"Overriding view X position on screen in pixels (minimum 0, maximum 10000000).","experimental":true,"optional":true,"type":"integer"},{"name":"positionY","description":"Overriding view Y position on screen in pixels (minimum 0, maximum 10000000).","experimental":true,"optional":true,"type":"integer"},{"name":"dontSetVisibleSize","description":"Do not set visible view size, rely upon explicit setVisibleSize call.","experimental":true,"optional":true,"type":"boolean"},{"name":"screenOrientation","description":"Screen orientation override.","optional":true,"$ref":"ScreenOrientation"},{"name":"viewport","description":"If set, the visible area of the page will be overridden to this viewport. This viewport\\nchange is not observed by the page, e.g. viewport-relative elements do not change positions.","experimental":true,"optional":true,"$ref":"Page.Viewport"},{"name":"displayFeature","description":"If set, the display feature of a multi-segment screen. If not set, multi-segment support\\nis turned-off.","experimental":true,"optional":true,"$ref":"DisplayFeature"}]},{"name":"setScrollbarsHidden","experimental":true,"parameters":[{"name":"hidden","description":"Whether scrollbars should be always hidden.","type":"boolean"}]},{"name":"setDocumentCookieDisabled","experimental":true,"parameters":[{"name":"disabled","description":"Whether document.coookie API should be disabled.","type":"boolean"}]},{"name":"setEmitTouchEventsForMouse","experimental":true,"parameters":[{"name":"enabled","description":"Whether touch emulation based on mouse input should be enabled.","type":"boolean"},{"name":"configuration","description":"Touch/gesture events configuration. Default: current platform.","optional":true,"type":"string","enum":["mobile","desktop"]}]},{"name":"setEmulatedMedia","description":"Emulates the given media type or media feature for CSS media queries.","parameters":[{"name":"media","description":"Media type to emulate. Empty string disables the override.","optional":true,"type":"string"},{"name":"features","description":"Media features to emulate.","optional":true,"type":"array","items":{"$ref":"MediaFeature"}}]},{"name":"setEmulatedVisionDeficiency","description":"Emulates the given vision deficiency.","experimental":true,"parameters":[{"name":"type","description":"Vision deficiency to emulate.","type":"string","enum":["none","achromatopsia","blurredVision","deuteranopia","protanopia","tritanopia"]}]},{"name":"setGeolocationOverride","description":"Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position\\nunavailable.","parameters":[{"name":"latitude","description":"Mock latitude","optional":true,"type":"number"},{"name":"longitude","description":"Mock longitude","optional":true,"type":"number"},{"name":"accuracy","description":"Mock accuracy","optional":true,"type":"number"}]},{"name":"setIdleOverride","description":"Overrides the Idle state.","experimental":true,"parameters":[{"name":"isUserActive","description":"Mock isUserActive","type":"boolean"},{"name":"isScreenUnlocked","description":"Mock isScreenUnlocked","type":"boolean"}]},{"name":"clearIdleOverride","description":"Clears Idle state overrides.","experimental":true},{"name":"setNavigatorOverrides","description":"Overrides value returned by the javascript navigator object.","experimental":true,"deprecated":true,"parameters":[{"name":"platform","description":"The platform navigator.platform should return.","type":"string"}]},{"name":"setPageScaleFactor","description":"Sets a specified page scale factor.","experimental":true,"parameters":[{"name":"pageScaleFactor","description":"Page scale factor.","type":"number"}]},{"name":"setScriptExecutionDisabled","description":"Switches script execution in the page.","parameters":[{"name":"value","description":"Whether script execution should be disabled in the page.","type":"boolean"}]},{"name":"setTouchEmulationEnabled","description":"Enables touch on platforms which do not support them.","parameters":[{"name":"enabled","description":"Whether the touch event emulation should be enabled.","type":"boolean"},{"name":"maxTouchPoints","description":"Maximum touch points supported. Defaults to one.","optional":true,"type":"integer"}]},{"name":"setVirtualTimePolicy","description":"Turns on virtual time for all frames (replacing real-time with a synthetic time source) and sets\\nthe current virtual time policy.  Note this supersedes any previous time budget.","experimental":true,"parameters":[{"name":"policy","$ref":"VirtualTimePolicy"},{"name":"budget","description":"If set, after this many virtual milliseconds have elapsed virtual time will be paused and a\\nvirtualTimeBudgetExpired event is sent.","optional":true,"type":"number"},{"name":"maxVirtualTimeTaskStarvationCount","description":"If set this specifies the maximum number of tasks that can be run before virtual is forced\\nforwards to prevent deadlock.","optional":true,"type":"integer"},{"name":"initialVirtualTime","description":"If set, base::Time::Now will be overridden to initially return this value.","optional":true,"$ref":"Network.TimeSinceEpoch"}],"returns":[{"name":"virtualTimeTicksBase","description":"Absolute timestamp at which virtual time was first enabled (up time in milliseconds).","type":"number"}]},{"name":"setLocaleOverride","description":"Overrides default host system locale with the specified one.","experimental":true,"parameters":[{"name":"locale","description":"ICU style C locale (e.g. \\"en_US\\"). If not specified or empty, disables the override and\\nrestores default host system locale.","optional":true,"type":"string"}]},{"name":"setTimezoneOverride","description":"Overrides default host system timezone with the specified one.","experimental":true,"parameters":[{"name":"timezoneId","description":"The timezone identifier. If empty, disables the override and\\nrestores default host system timezone.","type":"string"}]},{"name":"setVisibleSize","description":"Resizes the frame/viewport of the page. Note that this does not affect the frame\'s container\\n(e.g. browser window). Can be used to produce screenshots of the specified size. Not supported\\non Android.","experimental":true,"deprecated":true,"parameters":[{"name":"width","description":"Frame width (DIP).","type":"integer"},{"name":"height","description":"Frame height (DIP).","type":"integer"}]},{"name":"setDisabledImageTypes","experimental":true,"parameters":[{"name":"imageTypes","description":"Image types to disable.","type":"array","items":{"$ref":"DisabledImageType"}}]},{"name":"setUserAgentOverride","description":"Allows overriding user agent with the given string.","parameters":[{"name":"userAgent","description":"User agent to use.","type":"string"},{"name":"acceptLanguage","description":"Browser langugage to emulate.","optional":true,"type":"string"},{"name":"platform","description":"The platform navigator.platform should return.","optional":true,"type":"string"},{"name":"userAgentMetadata","description":"To be sent in Sec-CH-UA-* headers and returned in navigator.userAgentData","experimental":true,"optional":true,"$ref":"UserAgentMetadata"}]}],"events":[{"name":"virtualTimeBudgetExpired","description":"Notification sent after the virtual time budget for the current VirtualTimePolicy has run out.","experimental":true}]},{"domain":"HeadlessExperimental","description":"This domain provides experimental commands only supported in headless mode.","experimental":true,"dependencies":["Page","Runtime"],"types":[{"id":"ScreenshotParams","description":"Encoding options for a screenshot.","type":"object","properties":[{"name":"format","description":"Image compression format (defaults to png).","optional":true,"type":"string","enum":["jpeg","png"]},{"name":"quality","description":"Compression quality from range [0..100] (jpeg only).","optional":true,"type":"integer"}]}],"commands":[{"name":"beginFrame","description":"Sends a BeginFrame to the target and returns when the frame was completed. Optionally captures a\\nscreenshot from the resulting frame. Requires that the target was created with enabled\\nBeginFrameControl. Designed for use with --run-all-compositor-stages-before-draw, see also\\nhttps://goo.gl/3zHXhB for more background.","parameters":[{"name":"frameTimeTicks","description":"Timestamp of this BeginFrame in Renderer TimeTicks (milliseconds of uptime). If not set,\\nthe current time will be used.","optional":true,"type":"number"},{"name":"interval","description":"The interval between BeginFrames that is reported to the compositor, in milliseconds.\\nDefaults to a 60 frames/second interval, i.e. about 16.666 milliseconds.","optional":true,"type":"number"},{"name":"noDisplayUpdates","description":"Whether updates should not be committed and drawn onto the display. False by default. If\\ntrue, only side effects of the BeginFrame will be run, such as layout and animations, but\\nany visual updates may not be visible on the display or in screenshots.","optional":true,"type":"boolean"},{"name":"screenshot","description":"If set, a screenshot of the frame will be captured and returned in the response. Otherwise,\\nno screenshot will be captured. Note that capturing a screenshot can fail, for example,\\nduring renderer initialization. In such a case, no screenshot data will be returned.","optional":true,"$ref":"ScreenshotParams"}],"returns":[{"name":"hasDamage","description":"Whether the BeginFrame resulted in damage and, thus, a new frame was committed to the\\ndisplay. Reported for diagnostic uses, may be removed in the future.","type":"boolean"},{"name":"screenshotData","description":"Base64-encoded image data of the screenshot, if one was requested and successfully taken. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"}]},{"name":"disable","description":"Disables headless events for the target."},{"name":"enable","description":"Enables headless events for the target."}],"events":[{"name":"needsBeginFramesChanged","description":"Issued when the target starts or stops needing BeginFrames.\\nDeprecated. Issue beginFrame unconditionally instead and use result from\\nbeginFrame to detect whether the frames were suppressed.","deprecated":true,"parameters":[{"name":"needsBeginFrames","description":"True if BeginFrames are needed, false otherwise.","type":"boolean"}]}]},{"domain":"IO","description":"Input/Output operations for streams produced by DevTools.","types":[{"id":"StreamHandle","description":"This is either obtained from another method or specified as `blob:&lt;uuid&gt;` where\\n`&lt;uuid&gt` is an UUID of a Blob.","type":"string"}],"commands":[{"name":"close","description":"Close the stream, discard any temporary backing storage.","parameters":[{"name":"handle","description":"Handle of the stream to close.","$ref":"StreamHandle"}]},{"name":"read","description":"Read a chunk of the stream","parameters":[{"name":"handle","description":"Handle of the stream to read.","$ref":"StreamHandle"},{"name":"offset","description":"Seek to the specified offset before reading (if not specificed, proceed with offset\\nfollowing the last read). Some types of streams may only support sequential reads.","optional":true,"type":"integer"},{"name":"size","description":"Maximum number of bytes to read (left upon the agent discretion if not specified).","optional":true,"type":"integer"}],"returns":[{"name":"base64Encoded","description":"Set if the data is base64-encoded","optional":true,"type":"boolean"},{"name":"data","description":"Data that were read.","type":"string"},{"name":"eof","description":"Set if the end-of-file condition occurred while reading.","type":"boolean"}]},{"name":"resolveBlob","description":"Return UUID of Blob object specified by a remote object id.","parameters":[{"name":"objectId","description":"Object id of a Blob object wrapper.","$ref":"Runtime.RemoteObjectId"}],"returns":[{"name":"uuid","description":"UUID of the specified Blob.","type":"string"}]}]},{"domain":"IndexedDB","experimental":true,"dependencies":["Runtime"],"types":[{"id":"DatabaseWithObjectStores","description":"Database with an array of object stores.","type":"object","properties":[{"name":"name","description":"Database name.","type":"string"},{"name":"version","description":"Database version (type is not \'integer\', as the standard\\nrequires the version number to be \'unsigned long long\')","type":"number"},{"name":"objectStores","description":"Object stores in this database.","type":"array","items":{"$ref":"ObjectStore"}}]},{"id":"ObjectStore","description":"Object store.","type":"object","properties":[{"name":"name","description":"Object store name.","type":"string"},{"name":"keyPath","description":"Object store key path.","$ref":"KeyPath"},{"name":"autoIncrement","description":"If true, object store has auto increment flag set.","type":"boolean"},{"name":"indexes","description":"Indexes in this object store.","type":"array","items":{"$ref":"ObjectStoreIndex"}}]},{"id":"ObjectStoreIndex","description":"Object store index.","type":"object","properties":[{"name":"name","description":"Index name.","type":"string"},{"name":"keyPath","description":"Index key path.","$ref":"KeyPath"},{"name":"unique","description":"If true, index is unique.","type":"boolean"},{"name":"multiEntry","description":"If true, index allows multiple entries for a key.","type":"boolean"}]},{"id":"Key","description":"Key.","type":"object","properties":[{"name":"type","description":"Key type.","type":"string","enum":["number","string","date","array"]},{"name":"number","description":"Number value.","optional":true,"type":"number"},{"name":"string","description":"String value.","optional":true,"type":"string"},{"name":"date","description":"Date value.","optional":true,"type":"number"},{"name":"array","description":"Array value.","optional":true,"type":"array","items":{"$ref":"Key"}}]},{"id":"KeyRange","description":"Key range.","type":"object","properties":[{"name":"lower","description":"Lower bound.","optional":true,"$ref":"Key"},{"name":"upper","description":"Upper bound.","optional":true,"$ref":"Key"},{"name":"lowerOpen","description":"If true lower bound is open.","type":"boolean"},{"name":"upperOpen","description":"If true upper bound is open.","type":"boolean"}]},{"id":"DataEntry","description":"Data entry.","type":"object","properties":[{"name":"key","description":"Key object.","$ref":"Runtime.RemoteObject"},{"name":"primaryKey","description":"Primary key object.","$ref":"Runtime.RemoteObject"},{"name":"value","description":"Value object.","$ref":"Runtime.RemoteObject"}]},{"id":"KeyPath","description":"Key path.","type":"object","properties":[{"name":"type","description":"Key path type.","type":"string","enum":["null","string","array"]},{"name":"string","description":"String value.","optional":true,"type":"string"},{"name":"array","description":"Array value.","optional":true,"type":"array","items":{"type":"string"}}]}],"commands":[{"name":"clearObjectStore","description":"Clears all entries from an object store.","parameters":[{"name":"securityOrigin","description":"Security origin.","type":"string"},{"name":"databaseName","description":"Database name.","type":"string"},{"name":"objectStoreName","description":"Object store name.","type":"string"}]},{"name":"deleteDatabase","description":"Deletes a database.","parameters":[{"name":"securityOrigin","description":"Security origin.","type":"string"},{"name":"databaseName","description":"Database name.","type":"string"}]},{"name":"deleteObjectStoreEntries","description":"Delete a range of entries from an object store","parameters":[{"name":"securityOrigin","type":"string"},{"name":"databaseName","type":"string"},{"name":"objectStoreName","type":"string"},{"name":"keyRange","description":"Range of entry keys to delete","$ref":"KeyRange"}]},{"name":"disable","description":"Disables events from backend."},{"name":"enable","description":"Enables events from backend."},{"name":"requestData","description":"Requests data from object store or index.","parameters":[{"name":"securityOrigin","description":"Security origin.","type":"string"},{"name":"databaseName","description":"Database name.","type":"string"},{"name":"objectStoreName","description":"Object store name.","type":"string"},{"name":"indexName","description":"Index name, empty string for object store data requests.","type":"string"},{"name":"skipCount","description":"Number of records to skip.","type":"integer"},{"name":"pageSize","description":"Number of records to fetch.","type":"integer"},{"name":"keyRange","description":"Key range.","optional":true,"$ref":"KeyRange"}],"returns":[{"name":"objectStoreDataEntries","description":"Array of object store data entries.","type":"array","items":{"$ref":"DataEntry"}},{"name":"hasMore","description":"If true, there are more entries to fetch in the given range.","type":"boolean"}]},{"name":"getMetadata","description":"Gets metadata of an object store","parameters":[{"name":"securityOrigin","description":"Security origin.","type":"string"},{"name":"databaseName","description":"Database name.","type":"string"},{"name":"objectStoreName","description":"Object store name.","type":"string"}],"returns":[{"name":"entriesCount","description":"the entries count","type":"number"},{"name":"keyGeneratorValue","description":"the current value of key generator, to become the next inserted\\nkey into the object store. Valid if objectStore.autoIncrement\\nis true.","type":"number"}]},{"name":"requestDatabase","description":"Requests database with given name in given frame.","parameters":[{"name":"securityOrigin","description":"Security origin.","type":"string"},{"name":"databaseName","description":"Database name.","type":"string"}],"returns":[{"name":"databaseWithObjectStores","description":"Database with an array of object stores.","$ref":"DatabaseWithObjectStores"}]},{"name":"requestDatabaseNames","description":"Requests database names for given security origin.","parameters":[{"name":"securityOrigin","description":"Security origin.","type":"string"}],"returns":[{"name":"databaseNames","description":"Database names for origin.","type":"array","items":{"type":"string"}}]}]},{"domain":"Input","types":[{"id":"TouchPoint","type":"object","properties":[{"name":"x","description":"X coordinate of the event relative to the main frame\'s viewport in CSS pixels.","type":"number"},{"name":"y","description":"Y coordinate of the event relative to the main frame\'s viewport in CSS pixels. 0 refers to\\nthe top of the viewport and Y increases as it proceeds towards the bottom of the viewport.","type":"number"},{"name":"radiusX","description":"X radius of the touch area (default: 1.0).","optional":true,"type":"number"},{"name":"radiusY","description":"Y radius of the touch area (default: 1.0).","optional":true,"type":"number"},{"name":"rotationAngle","description":"Rotation angle (default: 0.0).","optional":true,"type":"number"},{"name":"force","description":"Force (default: 1.0).","optional":true,"type":"number"},{"name":"tangentialPressure","description":"The normalized tangential pressure, which has a range of [-1,1] (default: 0).","experimental":true,"optional":true,"type":"number"},{"name":"tiltX","description":"The plane angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis, in degrees of the range [-90,90], a positive tiltX is to the right (default: 0)","experimental":true,"optional":true,"type":"integer"},{"name":"tiltY","description":"The plane angle between the X-Z plane and the plane containing both the stylus axis and the X axis, in degrees of the range [-90,90], a positive tiltY is towards the user (default: 0).","experimental":true,"optional":true,"type":"integer"},{"name":"twist","description":"The clockwise rotation of a pen stylus around its own major axis, in degrees in the range [0,359] (default: 0).","experimental":true,"optional":true,"type":"integer"},{"name":"id","description":"Identifier used to track touch sources between events, must be unique within an event.","optional":true,"type":"number"}]},{"id":"GestureSourceType","experimental":true,"type":"string","enum":["default","touch","mouse"]},{"id":"MouseButton","type":"string","enum":["none","left","middle","right","back","forward"]},{"id":"TimeSinceEpoch","description":"UTC time in seconds, counted from January 1, 1970.","type":"number"},{"id":"DragDataItem","experimental":true,"type":"object","properties":[{"name":"mimeType","description":"Mime type of the dragged data.","type":"string"},{"name":"data","description":"Depending of the value of `mimeType`, it contains the dragged link,\\ntext, HTML markup or any other data.","type":"string"},{"name":"title","description":"Title associated with a link. Only valid when `mimeType` == \\"text/uri-list\\".","optional":true,"type":"string"},{"name":"baseURL","description":"Stores the base URL for the contained markup. Only valid when `mimeType`\\n== \\"text/html\\".","optional":true,"type":"string"}]},{"id":"DragData","experimental":true,"type":"object","properties":[{"name":"items","type":"array","items":{"$ref":"DragDataItem"}},{"name":"files","description":"List of filenames that should be included when dropping","optional":true,"type":"array","items":{"type":"string"}},{"name":"dragOperationsMask","description":"Bit field representing allowed drag operations. Copy = 1, Link = 2, Move = 16","type":"integer"}]}],"commands":[{"name":"dispatchDragEvent","description":"Dispatches a drag event into the page.","experimental":true,"parameters":[{"name":"type","description":"Type of the drag event.","type":"string","enum":["dragEnter","dragOver","drop","dragCancel"]},{"name":"x","description":"X coordinate of the event relative to the main frame\'s viewport in CSS pixels.","type":"number"},{"name":"y","description":"Y coordinate of the event relative to the main frame\'s viewport in CSS pixels. 0 refers to\\nthe top of the viewport and Y increases as it proceeds towards the bottom of the viewport.","type":"number"},{"name":"data","$ref":"DragData"},{"name":"modifiers","description":"Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8\\n(default: 0).","optional":true,"type":"integer"}]},{"name":"dispatchKeyEvent","description":"Dispatches a key event to the page.","parameters":[{"name":"type","description":"Type of the key event.","type":"string","enum":["keyDown","keyUp","rawKeyDown","char"]},{"name":"modifiers","description":"Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8\\n(default: 0).","optional":true,"type":"integer"},{"name":"timestamp","description":"Time at which the event occurred.","optional":true,"$ref":"TimeSinceEpoch"},{"name":"text","description":"Text as generated by processing a virtual key code with a keyboard layout. Not needed for\\nfor `keyUp` and `rawKeyDown` events (default: \\"\\")","optional":true,"type":"string"},{"name":"unmodifiedText","description":"Text that would have been generated by the keyboard if no modifiers were pressed (except for\\nshift). Useful for shortcut (accelerator) key handling (default: \\"\\").","optional":true,"type":"string"},{"name":"keyIdentifier","description":"Unique key identifier (e.g., \'U+0041\') (default: \\"\\").","optional":true,"type":"string"},{"name":"code","description":"Unique DOM defined string value for each physical key (e.g., \'KeyA\') (default: \\"\\").","optional":true,"type":"string"},{"name":"key","description":"Unique DOM defined string value describing the meaning of the key in the context of active\\nmodifiers, keyboard layout, etc (e.g., \'AltGr\') (default: \\"\\").","optional":true,"type":"string"},{"name":"windowsVirtualKeyCode","description":"Windows virtual key code (default: 0).","optional":true,"type":"integer"},{"name":"nativeVirtualKeyCode","description":"Native virtual key code (default: 0).","optional":true,"type":"integer"},{"name":"autoRepeat","description":"Whether the event was generated from auto repeat (default: false).","optional":true,"type":"boolean"},{"name":"isKeypad","description":"Whether the event was generated from the keypad (default: false).","optional":true,"type":"boolean"},{"name":"isSystemKey","description":"Whether the event was a system key event (default: false).","optional":true,"type":"boolean"},{"name":"location","description":"Whether the event was from the left or right side of the keyboard. 1=Left, 2=Right (default:\\n0).","optional":true,"type":"integer"},{"name":"commands","description":"Editing commands to send with the key event (e.g., \'selectAll\') (default: []).\\nThese are related to but not equal the command names used in `document.execCommand` and NSStandardKeyBindingResponding.\\nSee https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h for valid command names.","experimental":true,"optional":true,"type":"array","items":{"type":"string"}}]},{"name":"insertText","description":"This method emulates inserting text that doesn\'t come from a key press,\\nfor example an emoji keyboard or an IME.","experimental":true,"parameters":[{"name":"text","description":"The text to insert.","type":"string"}]},{"name":"imeSetComposition","description":"This method sets the current candidate text for ime.\\nUse imeCommitComposition to commit the final text.\\nUse imeSetComposition with empty string as text to cancel composition.","experimental":true,"parameters":[{"name":"text","description":"The text to insert","type":"string"},{"name":"selectionStart","description":"selection start","type":"integer"},{"name":"selectionEnd","description":"selection end","type":"integer"},{"name":"replacementStart","description":"replacement start","optional":true,"type":"integer"},{"name":"replacementEnd","description":"replacement end","optional":true,"type":"integer"}]},{"name":"dispatchMouseEvent","description":"Dispatches a mouse event to the page.","parameters":[{"name":"type","description":"Type of the mouse event.","type":"string","enum":["mousePressed","mouseReleased","mouseMoved","mouseWheel"]},{"name":"x","description":"X coordinate of the event relative to the main frame\'s viewport in CSS pixels.","type":"number"},{"name":"y","description":"Y coordinate of the event relative to the main frame\'s viewport in CSS pixels. 0 refers to\\nthe top of the viewport and Y increases as it proceeds towards the bottom of the viewport.","type":"number"},{"name":"modifiers","description":"Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8\\n(default: 0).","optional":true,"type":"integer"},{"name":"timestamp","description":"Time at which the event occurred.","optional":true,"$ref":"TimeSinceEpoch"},{"name":"button","description":"Mouse button (default: \\"none\\").","optional":true,"$ref":"MouseButton"},{"name":"buttons","description":"A number indicating which buttons are pressed on the mouse when a mouse event is triggered.\\nLeft=1, Right=2, Middle=4, Back=8, Forward=16, None=0.","optional":true,"type":"integer"},{"name":"clickCount","description":"Number of times the mouse button was clicked (default: 0).","optional":true,"type":"integer"},{"name":"force","description":"The normalized pressure, which has a range of [0,1] (default: 0).","experimental":true,"optional":true,"type":"number"},{"name":"tangentialPressure","description":"The normalized tangential pressure, which has a range of [-1,1] (default: 0).","experimental":true,"optional":true,"type":"number"},{"name":"tiltX","description":"The plane angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis, in degrees of the range [-90,90], a positive tiltX is to the right (default: 0).","experimental":true,"optional":true,"type":"integer"},{"name":"tiltY","description":"The plane angle between the X-Z plane and the plane containing both the stylus axis and the X axis, in degrees of the range [-90,90], a positive tiltY is towards the user (default: 0).","experimental":true,"optional":true,"type":"integer"},{"name":"twist","description":"The clockwise rotation of a pen stylus around its own major axis, in degrees in the range [0,359] (default: 0).","experimental":true,"optional":true,"type":"integer"},{"name":"deltaX","description":"X delta in CSS pixels for mouse wheel event (default: 0).","optional":true,"type":"number"},{"name":"deltaY","description":"Y delta in CSS pixels for mouse wheel event (default: 0).","optional":true,"type":"number"},{"name":"pointerType","description":"Pointer type (default: \\"mouse\\").","optional":true,"type":"string","enum":["mouse","pen"]}]},{"name":"dispatchTouchEvent","description":"Dispatches a touch event to the page.","parameters":[{"name":"type","description":"Type of the touch event. TouchEnd and TouchCancel must not contain any touch points, while\\nTouchStart and TouchMove must contains at least one.","type":"string","enum":["touchStart","touchEnd","touchMove","touchCancel"]},{"name":"touchPoints","description":"Active touch points on the touch device. One event per any changed point (compared to\\nprevious touch event in a sequence) is generated, emulating pressing/moving/releasing points\\none by one.","type":"array","items":{"$ref":"TouchPoint"}},{"name":"modifiers","description":"Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8\\n(default: 0).","optional":true,"type":"integer"},{"name":"timestamp","description":"Time at which the event occurred.","optional":true,"$ref":"TimeSinceEpoch"}]},{"name":"emulateTouchFromMouseEvent","description":"Emulates touch event from the mouse event parameters.","experimental":true,"parameters":[{"name":"type","description":"Type of the mouse event.","type":"string","enum":["mousePressed","mouseReleased","mouseMoved","mouseWheel"]},{"name":"x","description":"X coordinate of the mouse pointer in DIP.","type":"integer"},{"name":"y","description":"Y coordinate of the mouse pointer in DIP.","type":"integer"},{"name":"button","description":"Mouse button. Only \\"none\\", \\"left\\", \\"right\\" are supported.","$ref":"MouseButton"},{"name":"timestamp","description":"Time at which the event occurred (default: current time).","optional":true,"$ref":"TimeSinceEpoch"},{"name":"deltaX","description":"X delta in DIP for mouse wheel event (default: 0).","optional":true,"type":"number"},{"name":"deltaY","description":"Y delta in DIP for mouse wheel event (default: 0).","optional":true,"type":"number"},{"name":"modifiers","description":"Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8\\n(default: 0).","optional":true,"type":"integer"},{"name":"clickCount","description":"Number of times the mouse button was clicked (default: 0).","optional":true,"type":"integer"}]},{"name":"setIgnoreInputEvents","description":"Ignores input events (useful while auditing page).","parameters":[{"name":"ignore","description":"Ignores input events processing when set to true.","type":"boolean"}]},{"name":"setInterceptDrags","description":"Prevents default drag and drop behavior and instead emits `Input.dragIntercepted` events.\\nDrag and drop behavior can be directly controlled via `Input.dispatchDragEvent`.","experimental":true,"parameters":[{"name":"enabled","type":"boolean"}]},{"name":"synthesizePinchGesture","description":"Synthesizes a pinch gesture over a time period by issuing appropriate touch events.","experimental":true,"parameters":[{"name":"x","description":"X coordinate of the start of the gesture in CSS pixels.","type":"number"},{"name":"y","description":"Y coordinate of the start of the gesture in CSS pixels.","type":"number"},{"name":"scaleFactor","description":"Relative scale factor after zooming (>1.0 zooms in, <1.0 zooms out).","type":"number"},{"name":"relativeSpeed","description":"Relative pointer speed in pixels per second (default: 800).","optional":true,"type":"integer"},{"name":"gestureSourceType","description":"Which type of input events to be generated (default: \'default\', which queries the platform\\nfor the preferred input type).","optional":true,"$ref":"GestureSourceType"}]},{"name":"synthesizeScrollGesture","description":"Synthesizes a scroll gesture over a time period by issuing appropriate touch events.","experimental":true,"parameters":[{"name":"x","description":"X coordinate of the start of the gesture in CSS pixels.","type":"number"},{"name":"y","description":"Y coordinate of the start of the gesture in CSS pixels.","type":"number"},{"name":"xDistance","description":"The distance to scroll along the X axis (positive to scroll left).","optional":true,"type":"number"},{"name":"yDistance","description":"The distance to scroll along the Y axis (positive to scroll up).","optional":true,"type":"number"},{"name":"xOverscroll","description":"The number of additional pixels to scroll back along the X axis, in addition to the given\\ndistance.","optional":true,"type":"number"},{"name":"yOverscroll","description":"The number of additional pixels to scroll back along the Y axis, in addition to the given\\ndistance.","optional":true,"type":"number"},{"name":"preventFling","description":"Prevent fling (default: true).","optional":true,"type":"boolean"},{"name":"speed","description":"Swipe speed in pixels per second (default: 800).","optional":true,"type":"integer"},{"name":"gestureSourceType","description":"Which type of input events to be generated (default: \'default\', which queries the platform\\nfor the preferred input type).","optional":true,"$ref":"GestureSourceType"},{"name":"repeatCount","description":"The number of times to repeat the gesture (default: 0).","optional":true,"type":"integer"},{"name":"repeatDelayMs","description":"The number of milliseconds delay between each repeat. (default: 250).","optional":true,"type":"integer"},{"name":"interactionMarkerName","description":"The name of the interaction markers to generate, if not empty (default: \\"\\").","optional":true,"type":"string"}]},{"name":"synthesizeTapGesture","description":"Synthesizes a tap gesture over a time period by issuing appropriate touch events.","experimental":true,"parameters":[{"name":"x","description":"X coordinate of the start of the gesture in CSS pixels.","type":"number"},{"name":"y","description":"Y coordinate of the start of the gesture in CSS pixels.","type":"number"},{"name":"duration","description":"Duration between touchdown and touchup events in ms (default: 50).","optional":true,"type":"integer"},{"name":"tapCount","description":"Number of times to perform the tap (e.g. 2 for double tap, default: 1).","optional":true,"type":"integer"},{"name":"gestureSourceType","description":"Which type of input events to be generated (default: \'default\', which queries the platform\\nfor the preferred input type).","optional":true,"$ref":"GestureSourceType"}]}],"events":[{"name":"dragIntercepted","description":"Emitted only when `Input.setInterceptDrags` is enabled. Use this data with `Input.dispatchDragEvent` to\\nrestore normal drag and drop behavior.","experimental":true,"parameters":[{"name":"data","$ref":"DragData"}]}]},{"domain":"Inspector","experimental":true,"commands":[{"name":"disable","description":"Disables inspector domain notifications."},{"name":"enable","description":"Enables inspector domain notifications."}],"events":[{"name":"detached","description":"Fired when remote debugging connection is about to be terminated. Contains detach reason.","parameters":[{"name":"reason","description":"The reason why connection has been terminated.","type":"string"}]},{"name":"targetCrashed","description":"Fired when debugging target has crashed"},{"name":"targetReloadedAfterCrash","description":"Fired when debugging target has reloaded after crash"}]},{"domain":"LayerTree","experimental":true,"dependencies":["DOM"],"types":[{"id":"LayerId","description":"Unique Layer identifier.","type":"string"},{"id":"SnapshotId","description":"Unique snapshot identifier.","type":"string"},{"id":"ScrollRect","description":"Rectangle where scrolling happens on the main thread.","type":"object","properties":[{"name":"rect","description":"Rectangle itself.","$ref":"DOM.Rect"},{"name":"type","description":"Reason for rectangle to force scrolling on the main thread","type":"string","enum":["RepaintsOnScroll","TouchEventHandler","WheelEventHandler"]}]},{"id":"StickyPositionConstraint","description":"Sticky position constraints.","type":"object","properties":[{"name":"stickyBoxRect","description":"Layout rectangle of the sticky element before being shifted","$ref":"DOM.Rect"},{"name":"containingBlockRect","description":"Layout rectangle of the containing block of the sticky element","$ref":"DOM.Rect"},{"name":"nearestLayerShiftingStickyBox","description":"The nearest sticky layer that shifts the sticky box","optional":true,"$ref":"LayerId"},{"name":"nearestLayerShiftingContainingBlock","description":"The nearest sticky layer that shifts the containing block","optional":true,"$ref":"LayerId"}]},{"id":"PictureTile","description":"Serialized fragment of layer picture along with its offset within the layer.","type":"object","properties":[{"name":"x","description":"Offset from owning layer left boundary","type":"number"},{"name":"y","description":"Offset from owning layer top boundary","type":"number"},{"name":"picture","description":"Base64-encoded snapshot data. (Encoded as a base64 string when passed over JSON)","type":"string"}]},{"id":"Layer","description":"Information about a compositing layer.","type":"object","properties":[{"name":"layerId","description":"The unique id for this layer.","$ref":"LayerId"},{"name":"parentLayerId","description":"The id of parent (not present for root).","optional":true,"$ref":"LayerId"},{"name":"backendNodeId","description":"The backend id for the node associated with this layer.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"offsetX","description":"Offset from parent layer, X coordinate.","type":"number"},{"name":"offsetY","description":"Offset from parent layer, Y coordinate.","type":"number"},{"name":"width","description":"Layer width.","type":"number"},{"name":"height","description":"Layer height.","type":"number"},{"name":"transform","description":"Transformation matrix for layer, default is identity matrix","optional":true,"type":"array","items":{"type":"number"}},{"name":"anchorX","description":"Transform anchor point X, absent if no transform specified","optional":true,"type":"number"},{"name":"anchorY","description":"Transform anchor point Y, absent if no transform specified","optional":true,"type":"number"},{"name":"anchorZ","description":"Transform anchor point Z, absent if no transform specified","optional":true,"type":"number"},{"name":"paintCount","description":"Indicates how many time this layer has painted.","type":"integer"},{"name":"drawsContent","description":"Indicates whether this layer hosts any content, rather than being used for\\ntransform/scrolling purposes only.","type":"boolean"},{"name":"invisible","description":"Set if layer is not visible.","optional":true,"type":"boolean"},{"name":"scrollRects","description":"Rectangles scrolling on main thread only.","optional":true,"type":"array","items":{"$ref":"ScrollRect"}},{"name":"stickyPositionConstraint","description":"Sticky position constraint information","optional":true,"$ref":"StickyPositionConstraint"}]},{"id":"PaintProfile","description":"Array of timings, one per paint step.","type":"array","items":{"type":"number"}}],"commands":[{"name":"compositingReasons","description":"Provides the reasons why the given layer was composited.","parameters":[{"name":"layerId","description":"The id of the layer for which we want to get the reasons it was composited.","$ref":"LayerId"}],"returns":[{"name":"compositingReasons","description":"A list of strings specifying reasons for the given layer to become composited.","deprecated":true,"type":"array","items":{"type":"string"}},{"name":"compositingReasonIds","description":"A list of strings specifying reason IDs for the given layer to become composited.","type":"array","items":{"type":"string"}}]},{"name":"disable","description":"Disables compositing tree inspection."},{"name":"enable","description":"Enables compositing tree inspection."},{"name":"loadSnapshot","description":"Returns the snapshot identifier.","parameters":[{"name":"tiles","description":"An array of tiles composing the snapshot.","type":"array","items":{"$ref":"PictureTile"}}],"returns":[{"name":"snapshotId","description":"The id of the snapshot.","$ref":"SnapshotId"}]},{"name":"makeSnapshot","description":"Returns the layer snapshot identifier.","parameters":[{"name":"layerId","description":"The id of the layer.","$ref":"LayerId"}],"returns":[{"name":"snapshotId","description":"The id of the layer snapshot.","$ref":"SnapshotId"}]},{"name":"profileSnapshot","parameters":[{"name":"snapshotId","description":"The id of the layer snapshot.","$ref":"SnapshotId"},{"name":"minRepeatCount","description":"The maximum number of times to replay the snapshot (1, if not specified).","optional":true,"type":"integer"},{"name":"minDuration","description":"The minimum duration (in seconds) to replay the snapshot.","optional":true,"type":"number"},{"name":"clipRect","description":"The clip rectangle to apply when replaying the snapshot.","optional":true,"$ref":"DOM.Rect"}],"returns":[{"name":"timings","description":"The array of paint profiles, one per run.","type":"array","items":{"$ref":"PaintProfile"}}]},{"name":"releaseSnapshot","description":"Releases layer snapshot captured by the back-end.","parameters":[{"name":"snapshotId","description":"The id of the layer snapshot.","$ref":"SnapshotId"}]},{"name":"replaySnapshot","description":"Replays the layer snapshot and returns the resulting bitmap.","parameters":[{"name":"snapshotId","description":"The id of the layer snapshot.","$ref":"SnapshotId"},{"name":"fromStep","description":"The first step to replay from (replay from the very start if not specified).","optional":true,"type":"integer"},{"name":"toStep","description":"The last step to replay to (replay till the end if not specified).","optional":true,"type":"integer"},{"name":"scale","description":"The scale to apply while replaying (defaults to 1).","optional":true,"type":"number"}],"returns":[{"name":"dataURL","description":"A data: URL for resulting image.","type":"string"}]},{"name":"snapshotCommandLog","description":"Replays the layer snapshot and returns canvas log.","parameters":[{"name":"snapshotId","description":"The id of the layer snapshot.","$ref":"SnapshotId"}],"returns":[{"name":"commandLog","description":"The array of canvas function calls.","type":"array","items":{"type":"object"}}]}],"events":[{"name":"layerPainted","parameters":[{"name":"layerId","description":"The id of the painted layer.","$ref":"LayerId"},{"name":"clip","description":"Clip rectangle.","$ref":"DOM.Rect"}]},{"name":"layerTreeDidChange","parameters":[{"name":"layers","description":"Layer tree, absent if not in the comspositing mode.","optional":true,"type":"array","items":{"$ref":"Layer"}}]}]},{"domain":"Log","description":"Provides access to log entries.","dependencies":["Runtime","Network"],"types":[{"id":"LogEntry","description":"Log entry.","type":"object","properties":[{"name":"source","description":"Log entry source.","type":"string","enum":["xml","javascript","network","storage","appcache","rendering","security","deprecation","worker","violation","intervention","recommendation","other"]},{"name":"level","description":"Log entry severity.","type":"string","enum":["verbose","info","warning","error"]},{"name":"text","description":"Logged text.","type":"string"},{"name":"category","optional":true,"type":"string","enum":["cors"]},{"name":"timestamp","description":"Timestamp when this entry was added.","$ref":"Runtime.Timestamp"},{"name":"url","description":"URL of the resource if known.","optional":true,"type":"string"},{"name":"lineNumber","description":"Line number in the resource.","optional":true,"type":"integer"},{"name":"stackTrace","description":"JavaScript stack trace.","optional":true,"$ref":"Runtime.StackTrace"},{"name":"networkRequestId","description":"Identifier of the network request associated with this entry.","optional":true,"$ref":"Network.RequestId"},{"name":"workerId","description":"Identifier of the worker associated with this entry.","optional":true,"type":"string"},{"name":"args","description":"Call arguments.","optional":true,"type":"array","items":{"$ref":"Runtime.RemoteObject"}}]},{"id":"ViolationSetting","description":"Violation configuration setting.","type":"object","properties":[{"name":"name","description":"Violation type.","type":"string","enum":["longTask","longLayout","blockedEvent","blockedParser","discouragedAPIUse","handler","recurringHandler"]},{"name":"threshold","description":"Time threshold to trigger upon.","type":"number"}]}],"commands":[{"name":"clear","description":"Clears the log."},{"name":"disable","description":"Disables log domain, prevents further log entries from being reported to the client."},{"name":"enable","description":"Enables log domain, sends the entries collected so far to the client by means of the\\n`entryAdded` notification."},{"name":"startViolationsReport","description":"start violation reporting.","parameters":[{"name":"config","description":"Configuration for violations.","type":"array","items":{"$ref":"ViolationSetting"}}]},{"name":"stopViolationsReport","description":"Stop violation reporting."}],"events":[{"name":"entryAdded","description":"Issued when new message was logged.","parameters":[{"name":"entry","description":"The entry.","$ref":"LogEntry"}]}]},{"domain":"Memory","experimental":true,"types":[{"id":"PressureLevel","description":"Memory pressure level.","type":"string","enum":["moderate","critical"]},{"id":"SamplingProfileNode","description":"Heap profile sample.","type":"object","properties":[{"name":"size","description":"Size of the sampled allocation.","type":"number"},{"name":"total","description":"Total bytes attributed to this sample.","type":"number"},{"name":"stack","description":"Execution stack at the point of allocation.","type":"array","items":{"type":"string"}}]},{"id":"SamplingProfile","description":"Array of heap profile samples.","type":"object","properties":[{"name":"samples","type":"array","items":{"$ref":"SamplingProfileNode"}},{"name":"modules","type":"array","items":{"$ref":"Module"}}]},{"id":"Module","description":"Executable module information","type":"object","properties":[{"name":"name","description":"Name of the module.","type":"string"},{"name":"uuid","description":"UUID of the module.","type":"string"},{"name":"baseAddress","description":"Base address where the module is loaded into memory. Encoded as a decimal\\nor hexadecimal (0x prefixed) string.","type":"string"},{"name":"size","description":"Size of the module in bytes.","type":"number"}]}],"commands":[{"name":"getDOMCounters","returns":[{"name":"documents","type":"integer"},{"name":"nodes","type":"integer"},{"name":"jsEventListeners","type":"integer"}]},{"name":"prepareForLeakDetection"},{"name":"forciblyPurgeJavaScriptMemory","description":"Simulate OomIntervention by purging V8 memory."},{"name":"setPressureNotificationsSuppressed","description":"Enable/disable suppressing memory pressure notifications in all processes.","parameters":[{"name":"suppressed","description":"If true, memory pressure notifications will be suppressed.","type":"boolean"}]},{"name":"simulatePressureNotification","description":"Simulate a memory pressure notification in all processes.","parameters":[{"name":"level","description":"Memory pressure level of the notification.","$ref":"PressureLevel"}]},{"name":"startSampling","description":"Start collecting native memory profile.","parameters":[{"name":"samplingInterval","description":"Average number of bytes between samples.","optional":true,"type":"integer"},{"name":"suppressRandomness","description":"Do not randomize intervals between samples.","optional":true,"type":"boolean"}]},{"name":"stopSampling","description":"Stop collecting native memory profile."},{"name":"getAllTimeSamplingProfile","description":"Retrieve native memory allocations profile\\ncollected since renderer process startup.","returns":[{"name":"profile","$ref":"SamplingProfile"}]},{"name":"getBrowserSamplingProfile","description":"Retrieve native memory allocations profile\\ncollected since browser process startup.","returns":[{"name":"profile","$ref":"SamplingProfile"}]},{"name":"getSamplingProfile","description":"Retrieve native memory allocations profile collected since last\\n`startSampling` call.","returns":[{"name":"profile","$ref":"SamplingProfile"}]}]},{"domain":"Network","description":"Network domain allows tracking network activities of the page. It exposes information about http,\\nfile, data and other requests and responses, their headers, bodies, timing, etc.","dependencies":["Debugger","Runtime","Security"],"types":[{"id":"ResourceType","description":"Resource type as it was perceived by the rendering engine.","type":"string","enum":["Document","Stylesheet","Image","Media","Font","Script","TextTrack","XHR","Fetch","EventSource","WebSocket","Manifest","SignedExchange","Ping","CSPViolationReport","Preflight","Other"]},{"id":"LoaderId","description":"Unique loader identifier.","type":"string"},{"id":"RequestId","description":"Unique request identifier.","type":"string"},{"id":"InterceptionId","description":"Unique intercepted request identifier.","type":"string"},{"id":"ErrorReason","description":"Network level fetch failure reason.","type":"string","enum":["Failed","Aborted","TimedOut","AccessDenied","ConnectionClosed","ConnectionReset","ConnectionRefused","ConnectionAborted","ConnectionFailed","NameNotResolved","InternetDisconnected","AddressUnreachable","BlockedByClient","BlockedByResponse"]},{"id":"TimeSinceEpoch","description":"UTC time in seconds, counted from January 1, 1970.","type":"number"},{"id":"MonotonicTime","description":"Monotonically increasing time in seconds since an arbitrary point in the past.","type":"number"},{"id":"Headers","description":"Request / response headers as keys / values of JSON object.","type":"object"},{"id":"ConnectionType","description":"The underlying connection technology that the browser is supposedly using.","type":"string","enum":["none","cellular2g","cellular3g","cellular4g","bluetooth","ethernet","wifi","wimax","other"]},{"id":"CookieSameSite","description":"Represents the cookie\'s \'SameSite\' status:\\nhttps://tools.ietf.org/html/draft-west-first-party-cookies","type":"string","enum":["Strict","Lax","None"]},{"id":"CookiePriority","description":"Represents the cookie\'s \'Priority\' status:\\nhttps://tools.ietf.org/html/draft-west-cookie-priority-00","experimental":true,"type":"string","enum":["Low","Medium","High"]},{"id":"CookieSourceScheme","description":"Represents the source scheme of the origin that originally set the cookie.\\nA value of \\"Unset\\" allows protocol clients to emulate legacy cookie scope for the scheme.\\nThis is a temporary ability and it will be removed in the future.","experimental":true,"type":"string","enum":["Unset","NonSecure","Secure"]},{"id":"ResourceTiming","description":"Timing information for the request.","type":"object","properties":[{"name":"requestTime","description":"Timing\'s requestTime is a baseline in seconds, while the other numbers are ticks in\\nmilliseconds relatively to this requestTime.","type":"number"},{"name":"proxyStart","description":"Started resolving proxy.","type":"number"},{"name":"proxyEnd","description":"Finished resolving proxy.","type":"number"},{"name":"dnsStart","description":"Started DNS address resolve.","type":"number"},{"name":"dnsEnd","description":"Finished DNS address resolve.","type":"number"},{"name":"connectStart","description":"Started connecting to the remote host.","type":"number"},{"name":"connectEnd","description":"Connected to the remote host.","type":"number"},{"name":"sslStart","description":"Started SSL handshake.","type":"number"},{"name":"sslEnd","description":"Finished SSL handshake.","type":"number"},{"name":"workerStart","description":"Started running ServiceWorker.","experimental":true,"type":"number"},{"name":"workerReady","description":"Finished Starting ServiceWorker.","experimental":true,"type":"number"},{"name":"workerFetchStart","description":"Started fetch event.","experimental":true,"type":"number"},{"name":"workerRespondWithSettled","description":"Settled fetch event respondWith promise.","experimental":true,"type":"number"},{"name":"sendStart","description":"Started sending request.","type":"number"},{"name":"sendEnd","description":"Finished sending request.","type":"number"},{"name":"pushStart","description":"Time the server started pushing request.","experimental":true,"type":"number"},{"name":"pushEnd","description":"Time the server finished pushing request.","experimental":true,"type":"number"},{"name":"receiveHeadersEnd","description":"Finished receiving response headers.","type":"number"}]},{"id":"ResourcePriority","description":"Loading priority of a resource request.","type":"string","enum":["VeryLow","Low","Medium","High","VeryHigh"]},{"id":"PostDataEntry","description":"Post data entry for HTTP request","type":"object","properties":[{"name":"bytes","optional":true,"type":"string"}]},{"id":"Request","description":"HTTP request data.","type":"object","properties":[{"name":"url","description":"Request URL (without fragment).","type":"string"},{"name":"urlFragment","description":"Fragment of the requested URL starting with hash, if present.","optional":true,"type":"string"},{"name":"method","description":"HTTP request method.","type":"string"},{"name":"headers","description":"HTTP request headers.","$ref":"Headers"},{"name":"postData","description":"HTTP POST request data.","optional":true,"type":"string"},{"name":"hasPostData","description":"True when the request has POST data. Note that postData might still be omitted when this flag is true when the data is too long.","optional":true,"type":"boolean"},{"name":"postDataEntries","description":"Request body elements. This will be converted from base64 to binary","experimental":true,"optional":true,"type":"array","items":{"$ref":"PostDataEntry"}},{"name":"mixedContentType","description":"The mixed content type of the request.","optional":true,"$ref":"Security.MixedContentType"},{"name":"initialPriority","description":"Priority of the resource request at the time request is sent.","$ref":"ResourcePriority"},{"name":"referrerPolicy","description":"The referrer policy of the request, as defined in https://www.w3.org/TR/referrer-policy/","type":"string","enum":["unsafe-url","no-referrer-when-downgrade","no-referrer","origin","origin-when-cross-origin","same-origin","strict-origin","strict-origin-when-cross-origin"]},{"name":"isLinkPreload","description":"Whether is loaded via link preload.","optional":true,"type":"boolean"},{"name":"trustTokenParams","description":"Set for requests when the TrustToken API is used. Contains the parameters\\npassed by the developer (e.g. via \\"fetch\\") as understood by the backend.","experimental":true,"optional":true,"$ref":"TrustTokenParams"},{"name":"isSameSite","description":"True if this resource request is considered to be the \'same site\' as the\\nrequest correspondinfg to the main frame.","experimental":true,"optional":true,"type":"boolean"}]},{"id":"SignedCertificateTimestamp","description":"Details of a signed certificate timestamp (SCT).","type":"object","properties":[{"name":"status","description":"Validation status.","type":"string"},{"name":"origin","description":"Origin.","type":"string"},{"name":"logDescription","description":"Log name / description.","type":"string"},{"name":"logId","description":"Log ID.","type":"string"},{"name":"timestamp","description":"Issuance date. Unlike TimeSinceEpoch, this contains the number of\\nmilliseconds since January 1, 1970, UTC, not the number of seconds.","type":"number"},{"name":"hashAlgorithm","description":"Hash algorithm.","type":"string"},{"name":"signatureAlgorithm","description":"Signature algorithm.","type":"string"},{"name":"signatureData","description":"Signature data.","type":"string"}]},{"id":"SecurityDetails","description":"Security details about a request.","type":"object","properties":[{"name":"protocol","description":"Protocol name (e.g. \\"TLS 1.2\\" or \\"QUIC\\").","type":"string"},{"name":"keyExchange","description":"Key Exchange used by the connection, or the empty string if not applicable.","type":"string"},{"name":"keyExchangeGroup","description":"(EC)DH group used by the connection, if applicable.","optional":true,"type":"string"},{"name":"cipher","description":"Cipher name.","type":"string"},{"name":"mac","description":"TLS MAC. Note that AEAD ciphers do not have separate MACs.","optional":true,"type":"string"},{"name":"certificateId","description":"Certificate ID value.","$ref":"Security.CertificateId"},{"name":"subjectName","description":"Certificate subject name.","type":"string"},{"name":"sanList","description":"Subject Alternative Name (SAN) DNS names and IP addresses.","type":"array","items":{"type":"string"}},{"name":"issuer","description":"Name of the issuing CA.","type":"string"},{"name":"validFrom","description":"Certificate valid from date.","$ref":"TimeSinceEpoch"},{"name":"validTo","description":"Certificate valid to (expiration) date","$ref":"TimeSinceEpoch"},{"name":"signedCertificateTimestampList","description":"List of signed certificate timestamps (SCTs).","type":"array","items":{"$ref":"SignedCertificateTimestamp"}},{"name":"certificateTransparencyCompliance","description":"Whether the request complied with Certificate Transparency policy","$ref":"CertificateTransparencyCompliance"}]},{"id":"CertificateTransparencyCompliance","description":"Whether the request complied with Certificate Transparency policy.","type":"string","enum":["unknown","not-compliant","compliant"]},{"id":"BlockedReason","description":"The reason why request was blocked.","type":"string","enum":["other","csp","mixed-content","origin","inspector","subresource-filter","content-type","coep-frame-resource-needs-coep-header","coop-sandboxed-iframe-cannot-navigate-to-coop-page","corp-not-same-origin","corp-not-same-origin-after-defaulted-to-same-origin-by-coep","corp-not-same-site"]},{"id":"CorsError","description":"The reason why request was blocked.","type":"string","enum":["DisallowedByMode","InvalidResponse","WildcardOriginNotAllowed","MissingAllowOriginHeader","MultipleAllowOriginValues","InvalidAllowOriginValue","AllowOriginMismatch","InvalidAllowCredentials","CorsDisabledScheme","PreflightInvalidStatus","PreflightDisallowedRedirect","PreflightWildcardOriginNotAllowed","PreflightMissingAllowOriginHeader","PreflightMultipleAllowOriginValues","PreflightInvalidAllowOriginValue","PreflightAllowOriginMismatch","PreflightInvalidAllowCredentials","PreflightMissingAllowExternal","PreflightInvalidAllowExternal","PreflightMissingAllowPrivateNetwork","PreflightInvalidAllowPrivateNetwork","InvalidAllowMethodsPreflightResponse","InvalidAllowHeadersPreflightResponse","MethodDisallowedByPreflightResponse","HeaderDisallowedByPreflightResponse","RedirectContainsCredentials","InsecurePrivateNetwork","InvalidPrivateNetworkAccess","UnexpectedPrivateNetworkAccess","NoCorsRedirectModeNotFollow"]},{"id":"CorsErrorStatus","type":"object","properties":[{"name":"corsError","$ref":"CorsError"},{"name":"failedParameter","type":"string"}]},{"id":"ServiceWorkerResponseSource","description":"Source of serviceworker response.","type":"string","enum":["cache-storage","http-cache","fallback-code","network"]},{"id":"TrustTokenParams","description":"Determines what type of Trust Token operation is executed and\\ndepending on the type, some additional parameters. The values\\nare specified in third_party/blink/renderer/core/fetch/trust_token.idl.","experimental":true,"type":"object","properties":[{"name":"type","$ref":"TrustTokenOperationType"},{"name":"refreshPolicy","description":"Only set for \\"token-redemption\\" type and determine whether\\nto request a fresh SRR or use a still valid cached SRR.","type":"string","enum":["UseCached","Refresh"]},{"name":"issuers","description":"Origins of issuers from whom to request tokens or redemption\\nrecords.","optional":true,"type":"array","items":{"type":"string"}}]},{"id":"TrustTokenOperationType","experimental":true,"type":"string","enum":["Issuance","Redemption","Signing"]},{"id":"Response","description":"HTTP response data.","type":"object","properties":[{"name":"url","description":"Response URL. This URL can be different from CachedResource.url in case of redirect.","type":"string"},{"name":"status","description":"HTTP response status code.","type":"integer"},{"name":"statusText","description":"HTTP response status text.","type":"string"},{"name":"headers","description":"HTTP response headers.","$ref":"Headers"},{"name":"headersText","description":"HTTP response headers text. This has been replaced by the headers in Network.responseReceivedExtraInfo.","deprecated":true,"optional":true,"type":"string"},{"name":"mimeType","description":"Resource mimeType as determined by the browser.","type":"string"},{"name":"requestHeaders","description":"Refined HTTP request headers that were actually transmitted over the network.","optional":true,"$ref":"Headers"},{"name":"requestHeadersText","description":"HTTP request headers text. This has been replaced by the headers in Network.requestWillBeSentExtraInfo.","deprecated":true,"optional":true,"type":"string"},{"name":"connectionReused","description":"Specifies whether physical connection was actually reused for this request.","type":"boolean"},{"name":"connectionId","description":"Physical connection id that was actually used for this request.","type":"number"},{"name":"remoteIPAddress","description":"Remote IP address.","optional":true,"type":"string"},{"name":"remotePort","description":"Remote port.","optional":true,"type":"integer"},{"name":"fromDiskCache","description":"Specifies that the request was served from the disk cache.","optional":true,"type":"boolean"},{"name":"fromServiceWorker","description":"Specifies that the request was served from the ServiceWorker.","optional":true,"type":"boolean"},{"name":"fromPrefetchCache","description":"Specifies that the request was served from the prefetch cache.","optional":true,"type":"boolean"},{"name":"encodedDataLength","description":"Total number of bytes received for this request so far.","type":"number"},{"name":"timing","description":"Timing information for the given request.","optional":true,"$ref":"ResourceTiming"},{"name":"serviceWorkerResponseSource","description":"Response source of response from ServiceWorker.","optional":true,"$ref":"ServiceWorkerResponseSource"},{"name":"responseTime","description":"The time at which the returned response was generated.","optional":true,"$ref":"TimeSinceEpoch"},{"name":"cacheStorageCacheName","description":"Cache Storage Cache Name.","optional":true,"type":"string"},{"name":"protocol","description":"Protocol used to fetch this request.","optional":true,"type":"string"},{"name":"securityState","description":"Security state of the request resource.","$ref":"Security.SecurityState"},{"name":"securityDetails","description":"Security details for the request.","optional":true,"$ref":"SecurityDetails"}]},{"id":"WebSocketRequest","description":"WebSocket request data.","type":"object","properties":[{"name":"headers","description":"HTTP request headers.","$ref":"Headers"}]},{"id":"WebSocketResponse","description":"WebSocket response data.","type":"object","properties":[{"name":"status","description":"HTTP response status code.","type":"integer"},{"name":"statusText","description":"HTTP response status text.","type":"string"},{"name":"headers","description":"HTTP response headers.","$ref":"Headers"},{"name":"headersText","description":"HTTP response headers text.","optional":true,"type":"string"},{"name":"requestHeaders","description":"HTTP request headers.","optional":true,"$ref":"Headers"},{"name":"requestHeadersText","description":"HTTP request headers text.","optional":true,"type":"string"}]},{"id":"WebSocketFrame","description":"WebSocket message data. This represents an entire WebSocket message, not just a fragmented frame as the name suggests.","type":"object","properties":[{"name":"opcode","description":"WebSocket message opcode.","type":"number"},{"name":"mask","description":"WebSocket message mask.","type":"boolean"},{"name":"payloadData","description":"WebSocket message payload data.\\nIf the opcode is 1, this is a text message and payloadData is a UTF-8 string.\\nIf the opcode isn\'t 1, then payloadData is a base64 encoded string representing binary data.","type":"string"}]},{"id":"CachedResource","description":"Information about the cached resource.","type":"object","properties":[{"name":"url","description":"Resource URL. This is the url of the original network request.","type":"string"},{"name":"type","description":"Type of this resource.","$ref":"ResourceType"},{"name":"response","description":"Cached response data.","optional":true,"$ref":"Response"},{"name":"bodySize","description":"Cached response body size.","type":"number"}]},{"id":"Initiator","description":"Information about the request initiator.","type":"object","properties":[{"name":"type","description":"Type of this initiator.","type":"string","enum":["parser","script","preload","SignedExchange","preflight","other"]},{"name":"stack","description":"Initiator JavaScript stack trace, set for Script only.","optional":true,"$ref":"Runtime.StackTrace"},{"name":"url","description":"Initiator URL, set for Parser type or for Script type (when script is importing module) or for SignedExchange type.","optional":true,"type":"string"},{"name":"lineNumber","description":"Initiator line number, set for Parser type or for Script type (when script is importing\\nmodule) (0-based).","optional":true,"type":"number"},{"name":"columnNumber","description":"Initiator column number, set for Parser type or for Script type (when script is importing\\nmodule) (0-based).","optional":true,"type":"number"},{"name":"requestId","description":"Set if another request triggered this request (e.g. preflight).","optional":true,"$ref":"RequestId"}]},{"id":"Cookie","description":"Cookie object","type":"object","properties":[{"name":"name","description":"Cookie name.","type":"string"},{"name":"value","description":"Cookie value.","type":"string"},{"name":"domain","description":"Cookie domain.","type":"string"},{"name":"path","description":"Cookie path.","type":"string"},{"name":"expires","description":"Cookie expiration date as the number of seconds since the UNIX epoch.","type":"number"},{"name":"size","description":"Cookie size.","type":"integer"},{"name":"httpOnly","description":"True if cookie is http-only.","type":"boolean"},{"name":"secure","description":"True if cookie is secure.","type":"boolean"},{"name":"session","description":"True in case of session cookie.","type":"boolean"},{"name":"sameSite","description":"Cookie SameSite type.","optional":true,"$ref":"CookieSameSite"},{"name":"priority","description":"Cookie Priority","experimental":true,"$ref":"CookiePriority"},{"name":"sameParty","description":"True if cookie is SameParty.","experimental":true,"type":"boolean"},{"name":"sourceScheme","description":"Cookie source scheme type.","experimental":true,"$ref":"CookieSourceScheme"},{"name":"sourcePort","description":"Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.\\nAn unspecified port value allows protocol clients to emulate legacy cookie scope for the port.\\nThis is a temporary ability and it will be removed in the future.","experimental":true,"type":"integer"},{"name":"partitionKey","description":"Cookie partition key. The site of the top-level URL the browser was visiting at the start\\nof the request to the endpoint that set the cookie.","experimental":true,"optional":true,"type":"string"},{"name":"partitionKeyOpaque","description":"True if cookie partition key is opaque.","experimental":true,"optional":true,"type":"boolean"}]},{"id":"SetCookieBlockedReason","description":"Types of reasons why a cookie may not be stored from a response.","experimental":true,"type":"string","enum":["SecureOnly","SameSiteStrict","SameSiteLax","SameSiteUnspecifiedTreatedAsLax","SameSiteNoneInsecure","UserPreferences","SyntaxError","SchemeNotSupported","OverwriteSecure","InvalidDomain","InvalidPrefix","UnknownError","SchemefulSameSiteStrict","SchemefulSameSiteLax","SchemefulSameSiteUnspecifiedTreatedAsLax","SamePartyFromCrossPartyContext","SamePartyConflictsWithOtherAttributes","NameValuePairExceedsMaxSize"]},{"id":"CookieBlockedReason","description":"Types of reasons why a cookie may not be sent with a request.","experimental":true,"type":"string","enum":["SecureOnly","NotOnPath","DomainMismatch","SameSiteStrict","SameSiteLax","SameSiteUnspecifiedTreatedAsLax","SameSiteNoneInsecure","UserPreferences","UnknownError","SchemefulSameSiteStrict","SchemefulSameSiteLax","SchemefulSameSiteUnspecifiedTreatedAsLax","SamePartyFromCrossPartyContext","NameValuePairExceedsMaxSize"]},{"id":"BlockedSetCookieWithReason","description":"A cookie which was not stored from a response with the corresponding reason.","experimental":true,"type":"object","properties":[{"name":"blockedReasons","description":"The reason(s) this cookie was blocked.","type":"array","items":{"$ref":"SetCookieBlockedReason"}},{"name":"cookieLine","description":"The string representing this individual cookie as it would appear in the header.\\nThis is not the entire \\"cookie\\" or \\"set-cookie\\" header which could have multiple cookies.","type":"string"},{"name":"cookie","description":"The cookie object which represents the cookie which was not stored. It is optional because\\nsometimes complete cookie information is not available, such as in the case of parsing\\nerrors.","optional":true,"$ref":"Cookie"}]},{"id":"BlockedCookieWithReason","description":"A cookie with was not sent with a request with the corresponding reason.","experimental":true,"type":"object","properties":[{"name":"blockedReasons","description":"The reason(s) the cookie was blocked.","type":"array","items":{"$ref":"CookieBlockedReason"}},{"name":"cookie","description":"The cookie object representing the cookie which was not sent.","$ref":"Cookie"}]},{"id":"CookieParam","description":"Cookie parameter object","type":"object","properties":[{"name":"name","description":"Cookie name.","type":"string"},{"name":"value","description":"Cookie value.","type":"string"},{"name":"url","description":"The request-URI to associate with the setting of the cookie. This value can affect the\\ndefault domain, path, source port, and source scheme values of the created cookie.","optional":true,"type":"string"},{"name":"domain","description":"Cookie domain.","optional":true,"type":"string"},{"name":"path","description":"Cookie path.","optional":true,"type":"string"},{"name":"secure","description":"True if cookie is secure.","optional":true,"type":"boolean"},{"name":"httpOnly","description":"True if cookie is http-only.","optional":true,"type":"boolean"},{"name":"sameSite","description":"Cookie SameSite type.","optional":true,"$ref":"CookieSameSite"},{"name":"expires","description":"Cookie expiration date, session cookie if not set","optional":true,"$ref":"TimeSinceEpoch"},{"name":"priority","description":"Cookie Priority.","experimental":true,"optional":true,"$ref":"CookiePriority"},{"name":"sameParty","description":"True if cookie is SameParty.","experimental":true,"optional":true,"type":"boolean"},{"name":"sourceScheme","description":"Cookie source scheme type.","experimental":true,"optional":true,"$ref":"CookieSourceScheme"},{"name":"sourcePort","description":"Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.\\nAn unspecified port value allows protocol clients to emulate legacy cookie scope for the port.\\nThis is a temporary ability and it will be removed in the future.","experimental":true,"optional":true,"type":"integer"},{"name":"partitionKey","description":"Cookie partition key. The site of the top-level URL the browser was visiting at the start\\nof the request to the endpoint that set the cookie.\\nIf not set, the cookie will be set as not partitioned.","experimental":true,"optional":true,"type":"string"}]},{"id":"AuthChallenge","description":"Authorization challenge for HTTP status code 401 or 407.","experimental":true,"type":"object","properties":[{"name":"source","description":"Source of the authentication challenge.","optional":true,"type":"string","enum":["Server","Proxy"]},{"name":"origin","description":"Origin of the challenger.","type":"string"},{"name":"scheme","description":"The authentication scheme used, such as basic or digest","type":"string"},{"name":"realm","description":"The realm of the challenge. May be empty.","type":"string"}]},{"id":"AuthChallengeResponse","description":"Response to an AuthChallenge.","experimental":true,"type":"object","properties":[{"name":"response","description":"The decision on what to do in response to the authorization challenge.  Default means\\ndeferring to the default behavior of the net stack, which will likely either the Cancel\\nauthentication or display a popup dialog box.","type":"string","enum":["Default","CancelAuth","ProvideCredentials"]},{"name":"username","description":"The username to provide, possibly empty. Should only be set if response is\\nProvideCredentials.","optional":true,"type":"string"},{"name":"password","description":"The password to provide, possibly empty. Should only be set if response is\\nProvideCredentials.","optional":true,"type":"string"}]},{"id":"InterceptionStage","description":"Stages of the interception to begin intercepting. Request will intercept before the request is\\nsent. Response will intercept after the response is received.","experimental":true,"type":"string","enum":["Request","HeadersReceived"]},{"id":"RequestPattern","description":"Request pattern for interception.","experimental":true,"type":"object","properties":[{"name":"urlPattern","description":"Wildcards (`\'*\'` -> zero or more, `\'?\'` -> exactly one) are allowed. Escape character is\\nbackslash. Omitting is equivalent to `\\"*\\"`.","optional":true,"type":"string"},{"name":"resourceType","description":"If set, only requests for matching resource types will be intercepted.","optional":true,"$ref":"ResourceType"},{"name":"interceptionStage","description":"Stage at which to begin intercepting requests. Default is Request.","optional":true,"$ref":"InterceptionStage"}]},{"id":"SignedExchangeSignature","description":"Information about a signed exchange signature.\\nhttps://wicg.github.io/webpackage/draft-yasskin-httpbis-origin-signed-exchanges-impl.html#rfc.section.3.1","experimental":true,"type":"object","properties":[{"name":"label","description":"Signed exchange signature label.","type":"string"},{"name":"signature","description":"The hex string of signed exchange signature.","type":"string"},{"name":"integrity","description":"Signed exchange signature integrity.","type":"string"},{"name":"certUrl","description":"Signed exchange signature cert Url.","optional":true,"type":"string"},{"name":"certSha256","description":"The hex string of signed exchange signature cert sha256.","optional":true,"type":"string"},{"name":"validityUrl","description":"Signed exchange signature validity Url.","type":"string"},{"name":"date","description":"Signed exchange signature date.","type":"integer"},{"name":"expires","description":"Signed exchange signature expires.","type":"integer"},{"name":"certificates","description":"The encoded certificates.","optional":true,"type":"array","items":{"type":"string"}}]},{"id":"SignedExchangeHeader","description":"Information about a signed exchange header.\\nhttps://wicg.github.io/webpackage/draft-yasskin-httpbis-origin-signed-exchanges-impl.html#cbor-representation","experimental":true,"type":"object","properties":[{"name":"requestUrl","description":"Signed exchange request URL.","type":"string"},{"name":"responseCode","description":"Signed exchange response code.","type":"integer"},{"name":"responseHeaders","description":"Signed exchange response headers.","$ref":"Headers"},{"name":"signatures","description":"Signed exchange response signature.","type":"array","items":{"$ref":"SignedExchangeSignature"}},{"name":"headerIntegrity","description":"Signed exchange header integrity hash in the form of \\"sha256-<base64-hash-value>\\".","type":"string"}]},{"id":"SignedExchangeErrorField","description":"Field type for a signed exchange related error.","experimental":true,"type":"string","enum":["signatureSig","signatureIntegrity","signatureCertUrl","signatureCertSha256","signatureValidityUrl","signatureTimestamps"]},{"id":"SignedExchangeError","description":"Information about a signed exchange response.","experimental":true,"type":"object","properties":[{"name":"message","description":"Error message.","type":"string"},{"name":"signatureIndex","description":"The index of the signature which caused the error.","optional":true,"type":"integer"},{"name":"errorField","description":"The field which caused the error.","optional":true,"$ref":"SignedExchangeErrorField"}]},{"id":"SignedExchangeInfo","description":"Information about a signed exchange response.","experimental":true,"type":"object","properties":[{"name":"outerResponse","description":"The outer response of signed HTTP exchange which was received from network.","$ref":"Response"},{"name":"header","description":"Information about the signed exchange header.","optional":true,"$ref":"SignedExchangeHeader"},{"name":"securityDetails","description":"Security details for the signed exchange header.","optional":true,"$ref":"SecurityDetails"},{"name":"errors","description":"Errors occurred while handling the signed exchagne.","optional":true,"type":"array","items":{"$ref":"SignedExchangeError"}}]},{"id":"ContentEncoding","description":"List of content encodings supported by the backend.","experimental":true,"type":"string","enum":["deflate","gzip","br"]},{"id":"PrivateNetworkRequestPolicy","experimental":true,"type":"string","enum":["Allow","BlockFromInsecureToMorePrivate","WarnFromInsecureToMorePrivate","PreflightBlock","PreflightWarn"]},{"id":"IPAddressSpace","experimental":true,"type":"string","enum":["Local","Private","Public","Unknown"]},{"id":"ConnectTiming","experimental":true,"type":"object","properties":[{"name":"requestTime","description":"Timing\'s requestTime is a baseline in seconds, while the other numbers are ticks in\\nmilliseconds relatively to this requestTime. Matches ResourceTiming\'s requestTime for\\nthe same request (but not for redirected requests).","type":"number"}]},{"id":"ClientSecurityState","experimental":true,"type":"object","properties":[{"name":"initiatorIsSecureContext","type":"boolean"},{"name":"initiatorIPAddressSpace","$ref":"IPAddressSpace"},{"name":"privateNetworkRequestPolicy","$ref":"PrivateNetworkRequestPolicy"}]},{"id":"CrossOriginOpenerPolicyValue","experimental":true,"type":"string","enum":["SameOrigin","SameOriginAllowPopups","UnsafeNone","SameOriginPlusCoep","SameOriginAllowPopupsPlusCoep"]},{"id":"CrossOriginOpenerPolicyStatus","experimental":true,"type":"object","properties":[{"name":"value","$ref":"CrossOriginOpenerPolicyValue"},{"name":"reportOnlyValue","$ref":"CrossOriginOpenerPolicyValue"},{"name":"reportingEndpoint","optional":true,"type":"string"},{"name":"reportOnlyReportingEndpoint","optional":true,"type":"string"}]},{"id":"CrossOriginEmbedderPolicyValue","experimental":true,"type":"string","enum":["None","Credentialless","RequireCorp"]},{"id":"CrossOriginEmbedderPolicyStatus","experimental":true,"type":"object","properties":[{"name":"value","$ref":"CrossOriginEmbedderPolicyValue"},{"name":"reportOnlyValue","$ref":"CrossOriginEmbedderPolicyValue"},{"name":"reportingEndpoint","optional":true,"type":"string"},{"name":"reportOnlyReportingEndpoint","optional":true,"type":"string"}]},{"id":"SecurityIsolationStatus","experimental":true,"type":"object","properties":[{"name":"coop","optional":true,"$ref":"CrossOriginOpenerPolicyStatus"},{"name":"coep","optional":true,"$ref":"CrossOriginEmbedderPolicyStatus"}]},{"id":"ReportStatus","description":"The status of a Reporting API report.","experimental":true,"type":"string","enum":["Queued","Pending","MarkedForRemoval","Success"]},{"id":"ReportId","experimental":true,"type":"string"},{"id":"ReportingApiReport","description":"An object representing a report generated by the Reporting API.","experimental":true,"type":"object","properties":[{"name":"id","$ref":"ReportId"},{"name":"initiatorUrl","description":"The URL of the document that triggered the report.","type":"string"},{"name":"destination","description":"The name of the endpoint group that should be used to deliver the report.","type":"string"},{"name":"type","description":"The type of the report (specifies the set of data that is contained in the report body).","type":"string"},{"name":"timestamp","description":"When the report was generated.","$ref":"Network.TimeSinceEpoch"},{"name":"depth","description":"How many uploads deep the related request was.","type":"integer"},{"name":"completedAttempts","description":"The number of delivery attempts made so far, not including an active attempt.","type":"integer"},{"name":"body","type":"object"},{"name":"status","$ref":"ReportStatus"}]},{"id":"ReportingApiEndpoint","experimental":true,"type":"object","properties":[{"name":"url","description":"The URL of the endpoint to which reports may be delivered.","type":"string"},{"name":"groupName","description":"Name of the endpoint group.","type":"string"}]},{"id":"LoadNetworkResourcePageResult","description":"An object providing the result of a network resource load.","experimental":true,"type":"object","properties":[{"name":"success","type":"boolean"},{"name":"netError","description":"Optional values used for error reporting.","optional":true,"type":"number"},{"name":"netErrorName","optional":true,"type":"string"},{"name":"httpStatusCode","optional":true,"type":"number"},{"name":"stream","description":"If successful, one of the following two fields holds the result.","optional":true,"$ref":"IO.StreamHandle"},{"name":"headers","description":"Response headers.","optional":true,"$ref":"Network.Headers"}]},{"id":"LoadNetworkResourceOptions","description":"An options object that may be extended later to better support CORS,\\nCORB and streaming.","experimental":true,"type":"object","properties":[{"name":"disableCache","type":"boolean"},{"name":"includeCredentials","type":"boolean"}]}],"commands":[{"name":"setAcceptedEncodings","description":"Sets a list of content encodings that will be accepted. Empty list means no encoding is accepted.","experimental":true,"parameters":[{"name":"encodings","description":"List of accepted content encodings.","type":"array","items":{"$ref":"ContentEncoding"}}]},{"name":"clearAcceptedEncodingsOverride","description":"Clears accepted encodings set by setAcceptedEncodings","experimental":true},{"name":"canClearBrowserCache","description":"Tells whether clearing browser cache is supported.","deprecated":true,"returns":[{"name":"result","description":"True if browser cache can be cleared.","type":"boolean"}]},{"name":"canClearBrowserCookies","description":"Tells whether clearing browser cookies is supported.","deprecated":true,"returns":[{"name":"result","description":"True if browser cookies can be cleared.","type":"boolean"}]},{"name":"canEmulateNetworkConditions","description":"Tells whether emulation of network conditions is supported.","deprecated":true,"returns":[{"name":"result","description":"True if emulation of network conditions is supported.","type":"boolean"}]},{"name":"clearBrowserCache","description":"Clears browser cache."},{"name":"clearBrowserCookies","description":"Clears browser cookies."},{"name":"continueInterceptedRequest","description":"Response to Network.requestIntercepted which either modifies the request to continue with any\\nmodifications, or blocks it, or completes it with the provided response bytes. If a network\\nfetch occurs as a result which encounters a redirect an additional Network.requestIntercepted\\nevent will be sent with the same InterceptionId.\\nDeprecated, use Fetch.continueRequest, Fetch.fulfillRequest and Fetch.failRequest instead.","experimental":true,"deprecated":true,"parameters":[{"name":"interceptionId","$ref":"InterceptionId"},{"name":"errorReason","description":"If set this causes the request to fail with the given reason. Passing `Aborted` for requests\\nmarked with `isNavigationRequest` also cancels the navigation. Must not be set in response\\nto an authChallenge.","optional":true,"$ref":"ErrorReason"},{"name":"rawResponse","description":"If set the requests completes using with the provided base64 encoded raw response, including\\nHTTP status line and headers etc... Must not be set in response to an authChallenge. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"},{"name":"url","description":"If set the request url will be modified in a way that\'s not observable by page. Must not be\\nset in response to an authChallenge.","optional":true,"type":"string"},{"name":"method","description":"If set this allows the request method to be overridden. Must not be set in response to an\\nauthChallenge.","optional":true,"type":"string"},{"name":"postData","description":"If set this allows postData to be set. Must not be set in response to an authChallenge.","optional":true,"type":"string"},{"name":"headers","description":"If set this allows the request headers to be changed. Must not be set in response to an\\nauthChallenge.","optional":true,"$ref":"Headers"},{"name":"authChallengeResponse","description":"Response to a requestIntercepted with an authChallenge. Must not be set otherwise.","optional":true,"$ref":"AuthChallengeResponse"}]},{"name":"deleteCookies","description":"Deletes browser cookies with matching name and url or domain/path pair.","parameters":[{"name":"name","description":"Name of the cookies to remove.","type":"string"},{"name":"url","description":"If specified, deletes all the cookies with the given name where domain and path match\\nprovided URL.","optional":true,"type":"string"},{"name":"domain","description":"If specified, deletes only cookies with the exact domain.","optional":true,"type":"string"},{"name":"path","description":"If specified, deletes only cookies with the exact path.","optional":true,"type":"string"}]},{"name":"disable","description":"Disables network tracking, prevents network events from being sent to the client."},{"name":"emulateNetworkConditions","description":"Activates emulation of network conditions.","parameters":[{"name":"offline","description":"True to emulate internet disconnection.","type":"boolean"},{"name":"latency","description":"Minimum latency from request sent to response headers received (ms).","type":"number"},{"name":"downloadThroughput","description":"Maximal aggregated download throughput (bytes/sec). -1 disables download throttling.","type":"number"},{"name":"uploadThroughput","description":"Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling.","type":"number"},{"name":"connectionType","description":"Connection type if known.","optional":true,"$ref":"ConnectionType"}]},{"name":"enable","description":"Enables network tracking, network events will now be delivered to the client.","parameters":[{"name":"maxTotalBufferSize","description":"Buffer size in bytes to use when preserving network payloads (XHRs, etc).","experimental":true,"optional":true,"type":"integer"},{"name":"maxResourceBufferSize","description":"Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc).","experimental":true,"optional":true,"type":"integer"},{"name":"maxPostDataSize","description":"Longest post body size (in bytes) that would be included in requestWillBeSent notification","optional":true,"type":"integer"}]},{"name":"getAllCookies","description":"Returns all browser cookies. Depending on the backend support, will return detailed cookie\\ninformation in the `cookies` field.","returns":[{"name":"cookies","description":"Array of cookie objects.","type":"array","items":{"$ref":"Cookie"}}]},{"name":"getCertificate","description":"Returns the DER-encoded certificate.","experimental":true,"parameters":[{"name":"origin","description":"Origin to get certificate for.","type":"string"}],"returns":[{"name":"tableNames","type":"array","items":{"type":"string"}}]},{"name":"getCookies","description":"Returns all browser cookies for the current URL. Depending on the backend support, will return\\ndetailed cookie information in the `cookies` field.","parameters":[{"name":"urls","description":"The list of URLs for which applicable cookies will be fetched.\\nIf not specified, it\'s assumed to be set to the list containing\\nthe URLs of the page and all of its subframes.","optional":true,"type":"array","items":{"type":"string"}}],"returns":[{"name":"cookies","description":"Array of cookie objects.","type":"array","items":{"$ref":"Cookie"}}]},{"name":"getResponseBody","description":"Returns content served for the given request.","parameters":[{"name":"requestId","description":"Identifier of the network request to get content for.","$ref":"RequestId"}],"returns":[{"name":"body","description":"Response body.","type":"string"},{"name":"base64Encoded","description":"True, if content was sent as base64.","type":"boolean"}]},{"name":"getRequestPostData","description":"Returns post data sent with the request. Returns an error when no data was sent with the request.","parameters":[{"name":"requestId","description":"Identifier of the network request to get content for.","$ref":"RequestId"}],"returns":[{"name":"postData","description":"Request body string, omitting files from multipart requests","type":"string"}]},{"name":"getResponseBodyForInterception","description":"Returns content served for the given currently intercepted request.","experimental":true,"parameters":[{"name":"interceptionId","description":"Identifier for the intercepted request to get body for.","$ref":"InterceptionId"}],"returns":[{"name":"body","description":"Response body.","type":"string"},{"name":"base64Encoded","description":"True, if content was sent as base64.","type":"boolean"}]},{"name":"takeResponseBodyForInterceptionAsStream","description":"Returns a handle to the stream representing the response body. Note that after this command,\\nthe intercepted request can\'t be continued as is -- you either need to cancel it or to provide\\nthe response body. The stream only supports sequential read, IO.read will fail if the position\\nis specified.","experimental":true,"parameters":[{"name":"interceptionId","$ref":"InterceptionId"}],"returns":[{"name":"stream","$ref":"IO.StreamHandle"}]},{"name":"replayXHR","description":"This method sends a new XMLHttpRequest which is identical to the original one. The following\\nparameters should be identical: method, url, async, request body, extra headers, withCredentials\\nattribute, user, password.","experimental":true,"parameters":[{"name":"requestId","description":"Identifier of XHR to replay.","$ref":"RequestId"}]},{"name":"searchInResponseBody","description":"Searches for given string in response content.","experimental":true,"parameters":[{"name":"requestId","description":"Identifier of the network response to search.","$ref":"RequestId"},{"name":"query","description":"String to search for.","type":"string"},{"name":"caseSensitive","description":"If true, search is case sensitive.","optional":true,"type":"boolean"},{"name":"isRegex","description":"If true, treats string parameter as regex.","optional":true,"type":"boolean"}],"returns":[{"name":"result","description":"List of search matches.","type":"array","items":{"$ref":"Debugger.SearchMatch"}}]},{"name":"setBlockedURLs","description":"Blocks URLs from loading.","experimental":true,"parameters":[{"name":"urls","description":"URL patterns to block. Wildcards (\'*\') are allowed.","type":"array","items":{"type":"string"}}]},{"name":"setBypassServiceWorker","description":"Toggles ignoring of service worker for each request.","experimental":true,"parameters":[{"name":"bypass","description":"Bypass service worker and load from network.","type":"boolean"}]},{"name":"setCacheDisabled","description":"Toggles ignoring cache for each request. If `true`, cache will not be used.","parameters":[{"name":"cacheDisabled","description":"Cache disabled state.","type":"boolean"}]},{"name":"setCookie","description":"Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.","parameters":[{"name":"name","description":"Cookie name.","type":"string"},{"name":"value","description":"Cookie value.","type":"string"},{"name":"url","description":"The request-URI to associate with the setting of the cookie. This value can affect the\\ndefault domain, path, source port, and source scheme values of the created cookie.","optional":true,"type":"string"},{"name":"domain","description":"Cookie domain.","optional":true,"type":"string"},{"name":"path","description":"Cookie path.","optional":true,"type":"string"},{"name":"secure","description":"True if cookie is secure.","optional":true,"type":"boolean"},{"name":"httpOnly","description":"True if cookie is http-only.","optional":true,"type":"boolean"},{"name":"sameSite","description":"Cookie SameSite type.","optional":true,"$ref":"CookieSameSite"},{"name":"expires","description":"Cookie expiration date, session cookie if not set","optional":true,"$ref":"TimeSinceEpoch"},{"name":"priority","description":"Cookie Priority type.","experimental":true,"optional":true,"$ref":"CookiePriority"},{"name":"sameParty","description":"True if cookie is SameParty.","experimental":true,"optional":true,"type":"boolean"},{"name":"sourceScheme","description":"Cookie source scheme type.","experimental":true,"optional":true,"$ref":"CookieSourceScheme"},{"name":"sourcePort","description":"Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.\\nAn unspecified port value allows protocol clients to emulate legacy cookie scope for the port.\\nThis is a temporary ability and it will be removed in the future.","experimental":true,"optional":true,"type":"integer"},{"name":"partitionKey","description":"Cookie partition key. The site of the top-level URL the browser was visiting at the start\\nof the request to the endpoint that set the cookie.\\nIf not set, the cookie will be set as not partitioned.","experimental":true,"optional":true,"type":"string"}],"returns":[{"name":"success","description":"Always set to true. If an error occurs, the response indicates protocol error.","deprecated":true,"type":"boolean"}]},{"name":"setCookies","description":"Sets given cookies.","parameters":[{"name":"cookies","description":"Cookies to be set.","type":"array","items":{"$ref":"CookieParam"}}]},{"name":"setExtraHTTPHeaders","description":"Specifies whether to always send extra HTTP headers with the requests from this page.","parameters":[{"name":"headers","description":"Map with extra HTTP headers.","$ref":"Headers"}]},{"name":"setAttachDebugStack","description":"Specifies whether to attach a page script stack id in requests","experimental":true,"parameters":[{"name":"enabled","description":"Whether to attach a page script stack for debugging purpose.","type":"boolean"}]},{"name":"setRequestInterception","description":"Sets the requests to intercept that match the provided patterns and optionally resource types.\\nDeprecated, please use Fetch.enable instead.","experimental":true,"deprecated":true,"parameters":[{"name":"patterns","description":"Requests matching any of these patterns will be forwarded and wait for the corresponding\\ncontinueInterceptedRequest call.","type":"array","items":{"$ref":"RequestPattern"}}]},{"name":"setUserAgentOverride","description":"Allows overriding user agent with the given string.","redirect":"Emulation","parameters":[{"name":"userAgent","description":"User agent to use.","type":"string"},{"name":"acceptLanguage","description":"Browser langugage to emulate.","optional":true,"type":"string"},{"name":"platform","description":"The platform navigator.platform should return.","optional":true,"type":"string"},{"name":"userAgentMetadata","description":"To be sent in Sec-CH-UA-* headers and returned in navigator.userAgentData","experimental":true,"optional":true,"$ref":"Emulation.UserAgentMetadata"}]},{"name":"getSecurityIsolationStatus","description":"Returns information about the COEP/COOP isolation status.","experimental":true,"parameters":[{"name":"frameId","description":"If no frameId is provided, the status of the target is provided.","optional":true,"$ref":"Page.FrameId"}],"returns":[{"name":"status","$ref":"SecurityIsolationStatus"}]},{"name":"enableReportingApi","description":"Enables tracking for the Reporting API, events generated by the Reporting API will now be delivered to the client.\\nEnabling triggers \'reportingApiReportAdded\' for all existing reports.","experimental":true,"parameters":[{"name":"enable","description":"Whether to enable or disable events for the Reporting API","type":"boolean"}]},{"name":"loadNetworkResource","description":"Fetches the resource and returns the content.","experimental":true,"parameters":[{"name":"frameId","description":"Frame id to get the resource for. Mandatory for frame targets, and\\nshould be omitted for worker targets.","optional":true,"$ref":"Page.FrameId"},{"name":"url","description":"URL of the resource to get content for.","type":"string"},{"name":"options","description":"Options for the request.","$ref":"LoadNetworkResourceOptions"}],"returns":[{"name":"resource","$ref":"LoadNetworkResourcePageResult"}]}],"events":[{"name":"dataReceived","description":"Fired when data chunk was received over the network.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"dataLength","description":"Data chunk length.","type":"integer"},{"name":"encodedDataLength","description":"Actual bytes received (might be less than dataLength for compressed encodings).","type":"integer"}]},{"name":"eventSourceMessageReceived","description":"Fired when EventSource message is received.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"eventName","description":"Message type.","type":"string"},{"name":"eventId","description":"Message identifier.","type":"string"},{"name":"data","description":"Message content.","type":"string"}]},{"name":"loadingFailed","description":"Fired when HTTP request has failed to load.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"type","description":"Resource type.","$ref":"ResourceType"},{"name":"errorText","description":"User friendly error message.","type":"string"},{"name":"canceled","description":"True if loading was canceled.","optional":true,"type":"boolean"},{"name":"blockedReason","description":"The reason why loading was blocked, if any.","optional":true,"$ref":"BlockedReason"},{"name":"corsErrorStatus","description":"The reason why loading was blocked by CORS, if any.","optional":true,"$ref":"CorsErrorStatus"}]},{"name":"loadingFinished","description":"Fired when HTTP request has finished loading.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"encodedDataLength","description":"Total number of bytes received for this request.","type":"number"},{"name":"shouldReportCorbBlocking","description":"Set when 1) response was blocked by Cross-Origin Read Blocking and also\\n2) this needs to be reported to the DevTools console.","optional":true,"type":"boolean"}]},{"name":"requestIntercepted","description":"Details of an intercepted HTTP request, which must be either allowed, blocked, modified or\\nmocked.\\nDeprecated, use Fetch.requestPaused instead.","experimental":true,"deprecated":true,"parameters":[{"name":"interceptionId","description":"Each request the page makes will have a unique id, however if any redirects are encountered\\nwhile processing that fetch, they will be reported with the same id as the original fetch.\\nLikewise if HTTP authentication is needed then the same fetch id will be used.","$ref":"InterceptionId"},{"name":"request","$ref":"Request"},{"name":"frameId","description":"The id of the frame that initiated the request.","$ref":"Page.FrameId"},{"name":"resourceType","description":"How the requested resource will be used.","$ref":"ResourceType"},{"name":"isNavigationRequest","description":"Whether this is a navigation request, which can abort the navigation completely.","type":"boolean"},{"name":"isDownload","description":"Set if the request is a navigation that will result in a download.\\nOnly present after response is received from the server (i.e. HeadersReceived stage).","optional":true,"type":"boolean"},{"name":"redirectUrl","description":"Redirect location, only sent if a redirect was intercepted.","optional":true,"type":"string"},{"name":"authChallenge","description":"Details of the Authorization Challenge encountered. If this is set then\\ncontinueInterceptedRequest must contain an authChallengeResponse.","optional":true,"$ref":"AuthChallenge"},{"name":"responseErrorReason","description":"Response error if intercepted at response stage or if redirect occurred while intercepting\\nrequest.","optional":true,"$ref":"ErrorReason"},{"name":"responseStatusCode","description":"Response code if intercepted at response stage or if redirect occurred while intercepting\\nrequest or auth retry occurred.","optional":true,"type":"integer"},{"name":"responseHeaders","description":"Response headers if intercepted at the response stage or if redirect occurred while\\nintercepting request or auth retry occurred.","optional":true,"$ref":"Headers"},{"name":"requestId","description":"If the intercepted request had a corresponding requestWillBeSent event fired for it, then\\nthis requestId will be the same as the requestId present in the requestWillBeSent event.","optional":true,"$ref":"RequestId"}]},{"name":"requestServedFromCache","description":"Fired if request ended up loading from cache.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"}]},{"name":"requestWillBeSent","description":"Fired when page is about to send HTTP request.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"loaderId","description":"Loader identifier. Empty string if the request is fetched from worker.","$ref":"LoaderId"},{"name":"documentURL","description":"URL of the document this request is loaded for.","type":"string"},{"name":"request","description":"Request data.","$ref":"Request"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"wallTime","description":"Timestamp.","$ref":"TimeSinceEpoch"},{"name":"initiator","description":"Request initiator.","$ref":"Initiator"},{"name":"redirectHasExtraInfo","description":"In the case that redirectResponse is populated, this flag indicates whether\\nrequestWillBeSentExtraInfo and responseReceivedExtraInfo events will be or were emitted\\nfor the request which was just redirected.","experimental":true,"type":"boolean"},{"name":"redirectResponse","description":"Redirect response data.","optional":true,"$ref":"Response"},{"name":"type","description":"Type of this resource.","optional":true,"$ref":"ResourceType"},{"name":"frameId","description":"Frame identifier.","optional":true,"$ref":"Page.FrameId"},{"name":"hasUserGesture","description":"Whether the request is initiated by a user gesture. Defaults to false.","optional":true,"type":"boolean"}]},{"name":"resourceChangedPriority","description":"Fired when resource loading priority is changed","experimental":true,"parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"newPriority","description":"New priority","$ref":"ResourcePriority"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"}]},{"name":"signedExchangeReceived","description":"Fired when a signed exchange was received over the network","experimental":true,"parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"info","description":"Information about the signed exchange response.","$ref":"SignedExchangeInfo"}]},{"name":"responseReceived","description":"Fired when HTTP response is available.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"loaderId","description":"Loader identifier. Empty string if the request is fetched from worker.","$ref":"LoaderId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"type","description":"Resource type.","$ref":"ResourceType"},{"name":"response","description":"Response data.","$ref":"Response"},{"name":"hasExtraInfo","description":"Indicates whether requestWillBeSentExtraInfo and responseReceivedExtraInfo events will be\\nor were emitted for this request.","experimental":true,"type":"boolean"},{"name":"frameId","description":"Frame identifier.","optional":true,"$ref":"Page.FrameId"}]},{"name":"webSocketClosed","description":"Fired when WebSocket is closed.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"}]},{"name":"webSocketCreated","description":"Fired upon WebSocket creation.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"url","description":"WebSocket request URL.","type":"string"},{"name":"initiator","description":"Request initiator.","optional":true,"$ref":"Initiator"}]},{"name":"webSocketFrameError","description":"Fired when WebSocket message error occurs.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"errorMessage","description":"WebSocket error message.","type":"string"}]},{"name":"webSocketFrameReceived","description":"Fired when WebSocket message is received.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"response","description":"WebSocket response data.","$ref":"WebSocketFrame"}]},{"name":"webSocketFrameSent","description":"Fired when WebSocket message is sent.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"response","description":"WebSocket response data.","$ref":"WebSocketFrame"}]},{"name":"webSocketHandshakeResponseReceived","description":"Fired when WebSocket handshake response becomes available.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"response","description":"WebSocket response data.","$ref":"WebSocketResponse"}]},{"name":"webSocketWillSendHandshakeRequest","description":"Fired when WebSocket is about to initiate handshake.","parameters":[{"name":"requestId","description":"Request identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"wallTime","description":"UTC Timestamp.","$ref":"TimeSinceEpoch"},{"name":"request","description":"WebSocket request data.","$ref":"WebSocketRequest"}]},{"name":"webTransportCreated","description":"Fired upon WebTransport creation.","parameters":[{"name":"transportId","description":"WebTransport identifier.","$ref":"RequestId"},{"name":"url","description":"WebTransport request URL.","type":"string"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"},{"name":"initiator","description":"Request initiator.","optional":true,"$ref":"Initiator"}]},{"name":"webTransportConnectionEstablished","description":"Fired when WebTransport handshake is finished.","parameters":[{"name":"transportId","description":"WebTransport identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"}]},{"name":"webTransportClosed","description":"Fired when WebTransport is disposed.","parameters":[{"name":"transportId","description":"WebTransport identifier.","$ref":"RequestId"},{"name":"timestamp","description":"Timestamp.","$ref":"MonotonicTime"}]},{"name":"requestWillBeSentExtraInfo","description":"Fired when additional information about a requestWillBeSent event is available from the\\nnetwork stack. Not every requestWillBeSent event will have an additional\\nrequestWillBeSentExtraInfo fired for it, and there is no guarantee whether requestWillBeSent\\nor requestWillBeSentExtraInfo will be fired first for the same request.","experimental":true,"parameters":[{"name":"requestId","description":"Request identifier. Used to match this information to an existing requestWillBeSent event.","$ref":"RequestId"},{"name":"associatedCookies","description":"A list of cookies potentially associated to the requested URL. This includes both cookies sent with\\nthe request and the ones not sent; the latter are distinguished by having blockedReason field set.","type":"array","items":{"$ref":"BlockedCookieWithReason"}},{"name":"headers","description":"Raw request headers as they will be sent over the wire.","$ref":"Headers"},{"name":"connectTiming","description":"Connection timing information for the request.","experimental":true,"$ref":"ConnectTiming"},{"name":"clientSecurityState","description":"The client security state set for the request.","optional":true,"$ref":"ClientSecurityState"}]},{"name":"responseReceivedExtraInfo","description":"Fired when additional information about a responseReceived event is available from the network\\nstack. Not every responseReceived event will have an additional responseReceivedExtraInfo for\\nit, and responseReceivedExtraInfo may be fired before or after responseReceived.","experimental":true,"parameters":[{"name":"requestId","description":"Request identifier. Used to match this information to another responseReceived event.","$ref":"RequestId"},{"name":"blockedCookies","description":"A list of cookies which were not stored from the response along with the corresponding\\nreasons for blocking. The cookies here may not be valid due to syntax errors, which\\nare represented by the invalid cookie line string instead of a proper cookie.","type":"array","items":{"$ref":"BlockedSetCookieWithReason"}},{"name":"headers","description":"Raw response headers as they were received over the wire.","$ref":"Headers"},{"name":"resourceIPAddressSpace","description":"The IP address space of the resource. The address space can only be determined once the transport\\nestablished the connection, so we can\'t send it in `requestWillBeSentExtraInfo`.","$ref":"IPAddressSpace"},{"name":"statusCode","description":"The status code of the response. This is useful in cases the request failed and no responseReceived\\nevent is triggered, which is the case for, e.g., CORS errors. This is also the correct status code\\nfor cached requests, where the status in responseReceived is a 200 and this will be 304.","type":"integer"},{"name":"headersText","description":"Raw response header text as it was received over the wire. The raw text may not always be\\navailable, such as in the case of HTTP/2 or QUIC.","optional":true,"type":"string"}]},{"name":"trustTokenOperationDone","description":"Fired exactly once for each Trust Token operation. Depending on\\nthe type of the operation and whether the operation succeeded or\\nfailed, the event is fired before the corresponding request was sent\\nor after the response was received.","experimental":true,"parameters":[{"name":"status","description":"Detailed success or error status of the operation.\\n\'AlreadyExists\' also signifies a successful operation, as the result\\nof the operation already exists und thus, the operation was abort\\npreemptively (e.g. a cache hit).","type":"string","enum":["Ok","InvalidArgument","FailedPrecondition","ResourceExhausted","AlreadyExists","Unavailable","BadResponse","InternalError","UnknownError","FulfilledLocally"]},{"name":"type","$ref":"TrustTokenOperationType"},{"name":"requestId","$ref":"RequestId"},{"name":"topLevelOrigin","description":"Top level origin. The context in which the operation was attempted.","optional":true,"type":"string"},{"name":"issuerOrigin","description":"Origin of the issuer in case of a \\"Issuance\\" or \\"Redemption\\" operation.","optional":true,"type":"string"},{"name":"issuedTokenCount","description":"The number of obtained Trust Tokens on a successful \\"Issuance\\" operation.","optional":true,"type":"integer"}]},{"name":"subresourceWebBundleMetadataReceived","description":"Fired once when parsing the .wbn file has succeeded.\\nThe event contains the information about the web bundle contents.","experimental":true,"parameters":[{"name":"requestId","description":"Request identifier. Used to match this information to another event.","$ref":"RequestId"},{"name":"urls","description":"A list of URLs of resources in the subresource Web Bundle.","type":"array","items":{"type":"string"}}]},{"name":"subresourceWebBundleMetadataError","description":"Fired once when parsing the .wbn file has failed.","experimental":true,"parameters":[{"name":"requestId","description":"Request identifier. Used to match this information to another event.","$ref":"RequestId"},{"name":"errorMessage","description":"Error message","type":"string"}]},{"name":"subresourceWebBundleInnerResponseParsed","description":"Fired when handling requests for resources within a .wbn file.\\nNote: this will only be fired for resources that are requested by the webpage.","experimental":true,"parameters":[{"name":"innerRequestId","description":"Request identifier of the subresource request","$ref":"RequestId"},{"name":"innerRequestURL","description":"URL of the subresource resource.","type":"string"},{"name":"bundleRequestId","description":"Bundle request identifier. Used to match this information to another event.\\nThis made be absent in case when the instrumentation was enabled only\\nafter webbundle was parsed.","optional":true,"$ref":"RequestId"}]},{"name":"subresourceWebBundleInnerResponseError","description":"Fired when request for resources within a .wbn file failed.","experimental":true,"parameters":[{"name":"innerRequestId","description":"Request identifier of the subresource request","$ref":"RequestId"},{"name":"innerRequestURL","description":"URL of the subresource resource.","type":"string"},{"name":"errorMessage","description":"Error message","type":"string"},{"name":"bundleRequestId","description":"Bundle request identifier. Used to match this information to another event.\\nThis made be absent in case when the instrumentation was enabled only\\nafter webbundle was parsed.","optional":true,"$ref":"RequestId"}]},{"name":"reportingApiReportAdded","description":"Is sent whenever a new report is added.\\nAnd after \'enableReportingApi\' for all existing reports.","experimental":true,"parameters":[{"name":"report","$ref":"ReportingApiReport"}]},{"name":"reportingApiReportUpdated","experimental":true,"parameters":[{"name":"report","$ref":"ReportingApiReport"}]},{"name":"reportingApiEndpointsChangedForOrigin","experimental":true,"parameters":[{"name":"origin","description":"Origin of the document(s) which configured the endpoints.","type":"string"},{"name":"endpoints","type":"array","items":{"$ref":"ReportingApiEndpoint"}}]}]},{"domain":"Overlay","description":"This domain provides various functionality related to drawing atop the inspected page.","experimental":true,"dependencies":["DOM","Page","Runtime"],"types":[{"id":"SourceOrderConfig","description":"Configuration data for drawing the source order of an elements children.","type":"object","properties":[{"name":"parentOutlineColor","description":"the color to outline the givent element in.","$ref":"DOM.RGBA"},{"name":"childOutlineColor","description":"the color to outline the child elements in.","$ref":"DOM.RGBA"}]},{"id":"GridHighlightConfig","description":"Configuration data for the highlighting of Grid elements.","type":"object","properties":[{"name":"showGridExtensionLines","description":"Whether the extension lines from grid cells to the rulers should be shown (default: false).","optional":true,"type":"boolean"},{"name":"showPositiveLineNumbers","description":"Show Positive line number labels (default: false).","optional":true,"type":"boolean"},{"name":"showNegativeLineNumbers","description":"Show Negative line number labels (default: false).","optional":true,"type":"boolean"},{"name":"showAreaNames","description":"Show area name labels (default: false).","optional":true,"type":"boolean"},{"name":"showLineNames","description":"Show line name labels (default: false).","optional":true,"type":"boolean"},{"name":"showTrackSizes","description":"Show track size labels (default: false).","optional":true,"type":"boolean"},{"name":"gridBorderColor","description":"The grid container border highlight color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"cellBorderColor","description":"The cell border color (default: transparent). Deprecated, please use rowLineColor and columnLineColor instead.","deprecated":true,"optional":true,"$ref":"DOM.RGBA"},{"name":"rowLineColor","description":"The row line color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"columnLineColor","description":"The column line color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"gridBorderDash","description":"Whether the grid border is dashed (default: false).","optional":true,"type":"boolean"},{"name":"cellBorderDash","description":"Whether the cell border is dashed (default: false). Deprecated, please us rowLineDash and columnLineDash instead.","deprecated":true,"optional":true,"type":"boolean"},{"name":"rowLineDash","description":"Whether row lines are dashed (default: false).","optional":true,"type":"boolean"},{"name":"columnLineDash","description":"Whether column lines are dashed (default: false).","optional":true,"type":"boolean"},{"name":"rowGapColor","description":"The row gap highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"rowHatchColor","description":"The row gap hatching fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"columnGapColor","description":"The column gap highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"columnHatchColor","description":"The column gap hatching fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"areaBorderColor","description":"The named grid areas border color (Default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"gridBackgroundColor","description":"The grid container background color (Default: transparent).","optional":true,"$ref":"DOM.RGBA"}]},{"id":"FlexContainerHighlightConfig","description":"Configuration data for the highlighting of Flex container elements.","type":"object","properties":[{"name":"containerBorder","description":"The style of the container border","optional":true,"$ref":"LineStyle"},{"name":"lineSeparator","description":"The style of the separator between lines","optional":true,"$ref":"LineStyle"},{"name":"itemSeparator","description":"The style of the separator between items","optional":true,"$ref":"LineStyle"},{"name":"mainDistributedSpace","description":"Style of content-distribution space on the main axis (justify-content).","optional":true,"$ref":"BoxStyle"},{"name":"crossDistributedSpace","description":"Style of content-distribution space on the cross axis (align-content).","optional":true,"$ref":"BoxStyle"},{"name":"rowGapSpace","description":"Style of empty space caused by row gaps (gap/row-gap).","optional":true,"$ref":"BoxStyle"},{"name":"columnGapSpace","description":"Style of empty space caused by columns gaps (gap/column-gap).","optional":true,"$ref":"BoxStyle"},{"name":"crossAlignment","description":"Style of the self-alignment line (align-items).","optional":true,"$ref":"LineStyle"}]},{"id":"FlexItemHighlightConfig","description":"Configuration data for the highlighting of Flex item elements.","type":"object","properties":[{"name":"baseSizeBox","description":"Style of the box representing the item\'s base size","optional":true,"$ref":"BoxStyle"},{"name":"baseSizeBorder","description":"Style of the border around the box representing the item\'s base size","optional":true,"$ref":"LineStyle"},{"name":"flexibilityArrow","description":"Style of the arrow representing if the item grew or shrank","optional":true,"$ref":"LineStyle"}]},{"id":"LineStyle","description":"Style information for drawing a line.","type":"object","properties":[{"name":"color","description":"The color of the line (default: transparent)","optional":true,"$ref":"DOM.RGBA"},{"name":"pattern","description":"The line pattern (default: solid)","optional":true,"type":"string","enum":["dashed","dotted"]}]},{"id":"BoxStyle","description":"Style information for drawing a box.","type":"object","properties":[{"name":"fillColor","description":"The background color for the box (default: transparent)","optional":true,"$ref":"DOM.RGBA"},{"name":"hatchColor","description":"The hatching color for the box (default: transparent)","optional":true,"$ref":"DOM.RGBA"}]},{"id":"ContrastAlgorithm","type":"string","enum":["aa","aaa","apca"]},{"id":"HighlightConfig","description":"Configuration data for the highlighting of page elements.","type":"object","properties":[{"name":"showInfo","description":"Whether the node info tooltip should be shown (default: false).","optional":true,"type":"boolean"},{"name":"showStyles","description":"Whether the node styles in the tooltip (default: false).","optional":true,"type":"boolean"},{"name":"showRulers","description":"Whether the rulers should be shown (default: false).","optional":true,"type":"boolean"},{"name":"showAccessibilityInfo","description":"Whether the a11y info should be shown (default: true).","optional":true,"type":"boolean"},{"name":"showExtensionLines","description":"Whether the extension lines from node to the rulers should be shown (default: false).","optional":true,"type":"boolean"},{"name":"contentColor","description":"The content box highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"paddingColor","description":"The padding highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"borderColor","description":"The border highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"marginColor","description":"The margin highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"eventTargetColor","description":"The event target element highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"shapeColor","description":"The shape outside fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"shapeMarginColor","description":"The shape margin fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"cssGridColor","description":"The grid layout color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"colorFormat","description":"The color format used to format color styles (default: hex).","optional":true,"$ref":"ColorFormat"},{"name":"gridHighlightConfig","description":"The grid layout highlight configuration (default: all transparent).","optional":true,"$ref":"GridHighlightConfig"},{"name":"flexContainerHighlightConfig","description":"The flex container highlight configuration (default: all transparent).","optional":true,"$ref":"FlexContainerHighlightConfig"},{"name":"flexItemHighlightConfig","description":"The flex item highlight configuration (default: all transparent).","optional":true,"$ref":"FlexItemHighlightConfig"},{"name":"contrastAlgorithm","description":"The contrast algorithm to use for the contrast ratio (default: aa).","optional":true,"$ref":"ContrastAlgorithm"},{"name":"containerQueryContainerHighlightConfig","description":"The container query container highlight configuration (default: all transparent).","optional":true,"$ref":"ContainerQueryContainerHighlightConfig"}]},{"id":"ColorFormat","type":"string","enum":["rgb","hsl","hex"]},{"id":"GridNodeHighlightConfig","description":"Configurations for Persistent Grid Highlight","type":"object","properties":[{"name":"gridHighlightConfig","description":"A descriptor for the highlight appearance.","$ref":"GridHighlightConfig"},{"name":"nodeId","description":"Identifier of the node to highlight.","$ref":"DOM.NodeId"}]},{"id":"FlexNodeHighlightConfig","type":"object","properties":[{"name":"flexContainerHighlightConfig","description":"A descriptor for the highlight appearance of flex containers.","$ref":"FlexContainerHighlightConfig"},{"name":"nodeId","description":"Identifier of the node to highlight.","$ref":"DOM.NodeId"}]},{"id":"ScrollSnapContainerHighlightConfig","type":"object","properties":[{"name":"snapportBorder","description":"The style of the snapport border (default: transparent)","optional":true,"$ref":"LineStyle"},{"name":"snapAreaBorder","description":"The style of the snap area border (default: transparent)","optional":true,"$ref":"LineStyle"},{"name":"scrollMarginColor","description":"The margin highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"scrollPaddingColor","description":"The padding highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"}]},{"id":"ScrollSnapHighlightConfig","type":"object","properties":[{"name":"scrollSnapContainerHighlightConfig","description":"A descriptor for the highlight appearance of scroll snap containers.","$ref":"ScrollSnapContainerHighlightConfig"},{"name":"nodeId","description":"Identifier of the node to highlight.","$ref":"DOM.NodeId"}]},{"id":"HingeConfig","description":"Configuration for dual screen hinge","type":"object","properties":[{"name":"rect","description":"A rectangle represent hinge","$ref":"DOM.Rect"},{"name":"contentColor","description":"The content box highlight fill color (default: a dark color).","optional":true,"$ref":"DOM.RGBA"},{"name":"outlineColor","description":"The content box highlight outline color (default: transparent).","optional":true,"$ref":"DOM.RGBA"}]},{"id":"ContainerQueryHighlightConfig","type":"object","properties":[{"name":"containerQueryContainerHighlightConfig","description":"A descriptor for the highlight appearance of container query containers.","$ref":"ContainerQueryContainerHighlightConfig"},{"name":"nodeId","description":"Identifier of the container node to highlight.","$ref":"DOM.NodeId"}]},{"id":"ContainerQueryContainerHighlightConfig","type":"object","properties":[{"name":"containerBorder","description":"The style of the container border.","optional":true,"$ref":"LineStyle"},{"name":"descendantBorder","description":"The style of the descendants\' borders.","optional":true,"$ref":"LineStyle"}]},{"id":"IsolatedElementHighlightConfig","type":"object","properties":[{"name":"isolationModeHighlightConfig","description":"A descriptor for the highlight appearance of an element in isolation mode.","$ref":"IsolationModeHighlightConfig"},{"name":"nodeId","description":"Identifier of the isolated element to highlight.","$ref":"DOM.NodeId"}]},{"id":"IsolationModeHighlightConfig","type":"object","properties":[{"name":"resizerColor","description":"The fill color of the resizers (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"resizerHandleColor","description":"The fill color for resizer handles (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"maskColor","description":"The fill color for the mask covering non-isolated elements (default: transparent).","optional":true,"$ref":"DOM.RGBA"}]},{"id":"InspectMode","type":"string","enum":["searchForNode","searchForUAShadowDOM","captureAreaScreenshot","showDistances","none"]}],"commands":[{"name":"disable","description":"Disables domain notifications."},{"name":"enable","description":"Enables domain notifications."},{"name":"getHighlightObjectForTest","description":"For testing.","parameters":[{"name":"nodeId","description":"Id of the node to get highlight object for.","$ref":"DOM.NodeId"},{"name":"includeDistance","description":"Whether to include distance info.","optional":true,"type":"boolean"},{"name":"includeStyle","description":"Whether to include style info.","optional":true,"type":"boolean"},{"name":"colorFormat","description":"The color format to get config with (default: hex).","optional":true,"$ref":"ColorFormat"},{"name":"showAccessibilityInfo","description":"Whether to show accessibility info (default: true).","optional":true,"type":"boolean"}],"returns":[{"name":"highlight","description":"Highlight data for the node.","type":"object"}]},{"name":"getGridHighlightObjectsForTest","description":"For Persistent Grid testing.","parameters":[{"name":"nodeIds","description":"Ids of the node to get highlight object for.","type":"array","items":{"$ref":"DOM.NodeId"}}],"returns":[{"name":"highlights","description":"Grid Highlight data for the node ids provided.","type":"object"}]},{"name":"getSourceOrderHighlightObjectForTest","description":"For Source Order Viewer testing.","parameters":[{"name":"nodeId","description":"Id of the node to highlight.","$ref":"DOM.NodeId"}],"returns":[{"name":"highlight","description":"Source order highlight data for the node id provided.","type":"object"}]},{"name":"hideHighlight","description":"Hides any highlight."},{"name":"highlightFrame","description":"Highlights owner element of the frame with given id.\\nDeprecated: Doesn\'t work reliablity and cannot be fixed due to process\\nseparatation (the owner node might be in a different process). Determine\\nthe owner node in the client and use highlightNode.","deprecated":true,"parameters":[{"name":"frameId","description":"Identifier of the frame to highlight.","$ref":"Page.FrameId"},{"name":"contentColor","description":"The content box highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"contentOutlineColor","description":"The content box highlight outline color (default: transparent).","optional":true,"$ref":"DOM.RGBA"}]},{"name":"highlightNode","description":"Highlights DOM node with given id or with the given JavaScript object wrapper. Either nodeId or\\nobjectId must be specified.","parameters":[{"name":"highlightConfig","description":"A descriptor for the highlight appearance.","$ref":"HighlightConfig"},{"name":"nodeId","description":"Identifier of the node to highlight.","optional":true,"$ref":"DOM.NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node to highlight.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node to be highlighted.","optional":true,"$ref":"Runtime.RemoteObjectId"},{"name":"selector","description":"Selectors to highlight relevant nodes.","optional":true,"type":"string"}]},{"name":"highlightQuad","description":"Highlights given quad. Coordinates are absolute with respect to the main frame viewport.","parameters":[{"name":"quad","description":"Quad to highlight","$ref":"DOM.Quad"},{"name":"color","description":"The highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"outlineColor","description":"The highlight outline color (default: transparent).","optional":true,"$ref":"DOM.RGBA"}]},{"name":"highlightRect","description":"Highlights given rectangle. Coordinates are absolute with respect to the main frame viewport.","parameters":[{"name":"x","description":"X coordinate","type":"integer"},{"name":"y","description":"Y coordinate","type":"integer"},{"name":"width","description":"Rectangle width","type":"integer"},{"name":"height","description":"Rectangle height","type":"integer"},{"name":"color","description":"The highlight fill color (default: transparent).","optional":true,"$ref":"DOM.RGBA"},{"name":"outlineColor","description":"The highlight outline color (default: transparent).","optional":true,"$ref":"DOM.RGBA"}]},{"name":"highlightSourceOrder","description":"Highlights the source order of the children of the DOM node with given id or with the given\\nJavaScript object wrapper. Either nodeId or objectId must be specified.","parameters":[{"name":"sourceOrderConfig","description":"A descriptor for the appearance of the overlay drawing.","$ref":"SourceOrderConfig"},{"name":"nodeId","description":"Identifier of the node to highlight.","optional":true,"$ref":"DOM.NodeId"},{"name":"backendNodeId","description":"Identifier of the backend node to highlight.","optional":true,"$ref":"DOM.BackendNodeId"},{"name":"objectId","description":"JavaScript object id of the node to be highlighted.","optional":true,"$ref":"Runtime.RemoteObjectId"}]},{"name":"setInspectMode","description":"Enters the \'inspect\' mode. In this mode, elements that user is hovering over are highlighted.\\nBackend then generates \'inspectNodeRequested\' event upon element selection.","parameters":[{"name":"mode","description":"Set an inspection mode.","$ref":"InspectMode"},{"name":"highlightConfig","description":"A descriptor for the highlight appearance of hovered-over nodes. May be omitted if `enabled\\n== false`.","optional":true,"$ref":"HighlightConfig"}]},{"name":"setShowAdHighlights","description":"Highlights owner element of all frames detected to be ads.","parameters":[{"name":"show","description":"True for showing ad highlights","type":"boolean"}]},{"name":"setPausedInDebuggerMessage","parameters":[{"name":"message","description":"The message to display, also triggers resume and step over controls.","optional":true,"type":"string"}]},{"name":"setShowDebugBorders","description":"Requests that backend shows debug borders on layers","parameters":[{"name":"show","description":"True for showing debug borders","type":"boolean"}]},{"name":"setShowFPSCounter","description":"Requests that backend shows the FPS counter","parameters":[{"name":"show","description":"True for showing the FPS counter","type":"boolean"}]},{"name":"setShowGridOverlays","description":"Highlight multiple elements with the CSS Grid overlay.","parameters":[{"name":"gridNodeHighlightConfigs","description":"An array of node identifiers and descriptors for the highlight appearance.","type":"array","items":{"$ref":"GridNodeHighlightConfig"}}]},{"name":"setShowFlexOverlays","parameters":[{"name":"flexNodeHighlightConfigs","description":"An array of node identifiers and descriptors for the highlight appearance.","type":"array","items":{"$ref":"FlexNodeHighlightConfig"}}]},{"name":"setShowScrollSnapOverlays","parameters":[{"name":"scrollSnapHighlightConfigs","description":"An array of node identifiers and descriptors for the highlight appearance.","type":"array","items":{"$ref":"ScrollSnapHighlightConfig"}}]},{"name":"setShowContainerQueryOverlays","parameters":[{"name":"containerQueryHighlightConfigs","description":"An array of node identifiers and descriptors for the highlight appearance.","type":"array","items":{"$ref":"ContainerQueryHighlightConfig"}}]},{"name":"setShowPaintRects","description":"Requests that backend shows paint rectangles","parameters":[{"name":"result","description":"True for showing paint rectangles","type":"boolean"}]},{"name":"setShowLayoutShiftRegions","description":"Requests that backend shows layout shift regions","parameters":[{"name":"result","description":"True for showing layout shift regions","type":"boolean"}]},{"name":"setShowScrollBottleneckRects","description":"Requests that backend shows scroll bottleneck rects","parameters":[{"name":"show","description":"True for showing scroll bottleneck rects","type":"boolean"}]},{"name":"setShowHitTestBorders","description":"Deprecated, no longer has any effect.","deprecated":true,"parameters":[{"name":"show","description":"True for showing hit-test borders","type":"boolean"}]},{"name":"setShowWebVitals","description":"Request that backend shows an overlay with web vital metrics.","parameters":[{"name":"show","type":"boolean"}]},{"name":"setShowViewportSizeOnResize","description":"Paints viewport size upon main frame resize.","parameters":[{"name":"show","description":"Whether to paint size or not.","type":"boolean"}]},{"name":"setShowHinge","description":"Add a dual screen device hinge","parameters":[{"name":"hingeConfig","description":"hinge data, null means hideHinge","optional":true,"$ref":"HingeConfig"}]},{"name":"setShowIsolatedElements","description":"Show elements in isolation mode with overlays.","parameters":[{"name":"isolatedElementHighlightConfigs","description":"An array of node identifiers and descriptors for the highlight appearance.","type":"array","items":{"$ref":"IsolatedElementHighlightConfig"}}]}],"events":[{"name":"inspectNodeRequested","description":"Fired when the node should be inspected. This happens after call to `setInspectMode` or when\\nuser manually inspects an element.","parameters":[{"name":"backendNodeId","description":"Id of the node to inspect.","$ref":"DOM.BackendNodeId"}]},{"name":"nodeHighlightRequested","description":"Fired when the node should be highlighted. This happens after call to `setInspectMode`.","parameters":[{"name":"nodeId","$ref":"DOM.NodeId"}]},{"name":"screenshotRequested","description":"Fired when user asks to capture screenshot of some area on the page.","parameters":[{"name":"viewport","description":"Viewport to capture, in device independent pixels (dip).","$ref":"Page.Viewport"}]},{"name":"inspectModeCanceled","description":"Fired when user cancels the inspect mode."}]},{"domain":"Page","description":"Actions and events related to the inspected page belong to the page domain.","dependencies":["Debugger","DOM","IO","Network","Runtime"],"types":[{"id":"FrameId","description":"Unique frame identifier.","type":"string"},{"id":"AdFrameType","description":"Indicates whether a frame has been identified as an ad.","experimental":true,"type":"string","enum":["none","child","root"]},{"id":"AdFrameExplanation","experimental":true,"type":"string","enum":["ParentIsAd","CreatedByAdScript","MatchedBlockingRule"]},{"id":"AdFrameStatus","description":"Indicates whether a frame has been identified as an ad and why.","experimental":true,"type":"object","properties":[{"name":"adFrameType","$ref":"AdFrameType"},{"name":"explanations","optional":true,"type":"array","items":{"$ref":"AdFrameExplanation"}}]},{"id":"SecureContextType","description":"Indicates whether the frame is a secure context and why it is the case.","experimental":true,"type":"string","enum":["Secure","SecureLocalhost","InsecureScheme","InsecureAncestor"]},{"id":"CrossOriginIsolatedContextType","description":"Indicates whether the frame is cross-origin isolated and why it is the case.","experimental":true,"type":"string","enum":["Isolated","NotIsolated","NotIsolatedFeatureDisabled"]},{"id":"GatedAPIFeatures","experimental":true,"type":"string","enum":["SharedArrayBuffers","SharedArrayBuffersTransferAllowed","PerformanceMeasureMemory","PerformanceProfile"]},{"id":"PermissionsPolicyFeature","description":"All Permissions Policy features. This enum should match the one defined\\nin third_party/blink/renderer/core/permissions_policy/permissions_policy_features.json5.","experimental":true,"type":"string","enum":["accelerometer","ambient-light-sensor","attribution-reporting","autoplay","camera","ch-dpr","ch-device-memory","ch-downlink","ch-ect","ch-prefers-color-scheme","ch-rtt","ch-ua","ch-ua-arch","ch-ua-bitness","ch-ua-platform","ch-ua-model","ch-ua-mobile","ch-ua-full","ch-ua-full-version","ch-ua-full-version-list","ch-ua-platform-version","ch-ua-reduced","ch-ua-wow64","ch-viewport-height","ch-viewport-width","ch-width","ch-partitioned-cookies","clipboard-read","clipboard-write","cross-origin-isolated","direct-sockets","display-capture","document-domain","encrypted-media","execution-while-out-of-viewport","execution-while-not-rendered","focus-without-user-activation","fullscreen","frobulate","gamepad","geolocation","gyroscope","hid","idle-detection","join-ad-interest-group","keyboard-map","magnetometer","microphone","midi","otp-credentials","payment","picture-in-picture","publickey-credentials-get","run-ad-auction","screen-wake-lock","serial","shared-autofill","storage-access-api","sync-xhr","trust-token-redemption","usb","vertical-scroll","web-share","window-placement","xr-spatial-tracking"]},{"id":"PermissionsPolicyBlockReason","description":"Reason for a permissions policy feature to be disabled.","experimental":true,"type":"string","enum":["Header","IframeAttribute","InFencedFrameTree"]},{"id":"PermissionsPolicyBlockLocator","experimental":true,"type":"object","properties":[{"name":"frameId","$ref":"FrameId"},{"name":"blockReason","$ref":"PermissionsPolicyBlockReason"}]},{"id":"PermissionsPolicyFeatureState","experimental":true,"type":"object","properties":[{"name":"feature","$ref":"PermissionsPolicyFeature"},{"name":"allowed","type":"boolean"},{"name":"locator","optional":true,"$ref":"PermissionsPolicyBlockLocator"}]},{"id":"OriginTrialTokenStatus","description":"Origin Trial(https://www.chromium.org/blink/origin-trials) support.\\nStatus for an Origin Trial token.","experimental":true,"type":"string","enum":["Success","NotSupported","Insecure","Expired","WrongOrigin","InvalidSignature","Malformed","WrongVersion","FeatureDisabled","TokenDisabled","FeatureDisabledForUser","UnknownTrial"]},{"id":"OriginTrialStatus","description":"Status for an Origin Trial.","experimental":true,"type":"string","enum":["Enabled","ValidTokenNotProvided","OSNotSupported","TrialNotAllowed"]},{"id":"OriginTrialUsageRestriction","experimental":true,"type":"string","enum":["None","Subset"]},{"id":"OriginTrialToken","experimental":true,"type":"object","properties":[{"name":"origin","type":"string"},{"name":"matchSubDomains","type":"boolean"},{"name":"trialName","type":"string"},{"name":"expiryTime","$ref":"Network.TimeSinceEpoch"},{"name":"isThirdParty","type":"boolean"},{"name":"usageRestriction","$ref":"OriginTrialUsageRestriction"}]},{"id":"OriginTrialTokenWithStatus","experimental":true,"type":"object","properties":[{"name":"rawTokenText","type":"string"},{"name":"parsedToken","description":"`parsedToken` is present only when the token is extractable and\\nparsable.","optional":true,"$ref":"OriginTrialToken"},{"name":"status","$ref":"OriginTrialTokenStatus"}]},{"id":"OriginTrial","experimental":true,"type":"object","properties":[{"name":"trialName","type":"string"},{"name":"status","$ref":"OriginTrialStatus"},{"name":"tokensWithStatus","type":"array","items":{"$ref":"OriginTrialTokenWithStatus"}}]},{"id":"Frame","description":"Information about the Frame on the page.","type":"object","properties":[{"name":"id","description":"Frame unique identifier.","$ref":"FrameId"},{"name":"parentId","description":"Parent frame identifier.","optional":true,"$ref":"FrameId"},{"name":"loaderId","description":"Identifier of the loader associated with this frame.","$ref":"Network.LoaderId"},{"name":"name","description":"Frame\'s name as specified in the tag.","optional":true,"type":"string"},{"name":"url","description":"Frame document\'s URL without fragment.","type":"string"},{"name":"urlFragment","description":"Frame document\'s URL fragment including the \'#\'.","experimental":true,"optional":true,"type":"string"},{"name":"domainAndRegistry","description":"Frame document\'s registered domain, taking the public suffixes list into account.\\nExtracted from the Frame\'s url.\\nExample URLs: http://www.google.com/file.html -> \\"google.com\\"\\n              http://a.b.co.uk/file.html      -> \\"b.co.uk\\"","experimental":true,"type":"string"},{"name":"securityOrigin","description":"Frame document\'s security origin.","type":"string"},{"name":"mimeType","description":"Frame document\'s mimeType as determined by the browser.","type":"string"},{"name":"unreachableUrl","description":"If the frame failed to load, this contains the URL that could not be loaded. Note that unlike url above, this URL may contain a fragment.","experimental":true,"optional":true,"type":"string"},{"name":"adFrameStatus","description":"Indicates whether this frame was tagged as an ad and why.","experimental":true,"optional":true,"$ref":"AdFrameStatus"},{"name":"secureContextType","description":"Indicates whether the main document is a secure context and explains why that is the case.","experimental":true,"$ref":"SecureContextType"},{"name":"crossOriginIsolatedContextType","description":"Indicates whether this is a cross origin isolated context.","experimental":true,"$ref":"CrossOriginIsolatedContextType"},{"name":"gatedAPIFeatures","description":"Indicated which gated APIs / features are available.","experimental":true,"type":"array","items":{"$ref":"GatedAPIFeatures"}}]},{"id":"FrameResource","description":"Information about the Resource on the page.","experimental":true,"type":"object","properties":[{"name":"url","description":"Resource URL.","type":"string"},{"name":"type","description":"Type of this resource.","$ref":"Network.ResourceType"},{"name":"mimeType","description":"Resource mimeType as determined by the browser.","type":"string"},{"name":"lastModified","description":"last-modified timestamp as reported by server.","optional":true,"$ref":"Network.TimeSinceEpoch"},{"name":"contentSize","description":"Resource content size.","optional":true,"type":"number"},{"name":"failed","description":"True if the resource failed to load.","optional":true,"type":"boolean"},{"name":"canceled","description":"True if the resource was canceled during loading.","optional":true,"type":"boolean"}]},{"id":"FrameResourceTree","description":"Information about the Frame hierarchy along with their cached resources.","experimental":true,"type":"object","properties":[{"name":"frame","description":"Frame information for this tree item.","$ref":"Frame"},{"name":"childFrames","description":"Child frames.","optional":true,"type":"array","items":{"$ref":"FrameResourceTree"}},{"name":"resources","description":"Information about frame resources.","type":"array","items":{"$ref":"FrameResource"}}]},{"id":"FrameTree","description":"Information about the Frame hierarchy.","type":"object","properties":[{"name":"frame","description":"Frame information for this tree item.","$ref":"Frame"},{"name":"childFrames","description":"Child frames.","optional":true,"type":"array","items":{"$ref":"FrameTree"}}]},{"id":"ScriptIdentifier","description":"Unique script identifier.","type":"string"},{"id":"TransitionType","description":"Transition type.","type":"string","enum":["link","typed","address_bar","auto_bookmark","auto_subframe","manual_subframe","generated","auto_toplevel","form_submit","reload","keyword","keyword_generated","other"]},{"id":"NavigationEntry","description":"Navigation history entry.","type":"object","properties":[{"name":"id","description":"Unique id of the navigation history entry.","type":"integer"},{"name":"url","description":"URL of the navigation history entry.","type":"string"},{"name":"userTypedURL","description":"URL that the user typed in the url bar.","type":"string"},{"name":"title","description":"Title of the navigation history entry.","type":"string"},{"name":"transitionType","description":"Transition type.","$ref":"TransitionType"}]},{"id":"ScreencastFrameMetadata","description":"Screencast frame metadata.","experimental":true,"type":"object","properties":[{"name":"offsetTop","description":"Top offset in DIP.","type":"number"},{"name":"pageScaleFactor","description":"Page scale factor.","type":"number"},{"name":"deviceWidth","description":"Device screen width in DIP.","type":"number"},{"name":"deviceHeight","description":"Device screen height in DIP.","type":"number"},{"name":"scrollOffsetX","description":"Position of horizontal scroll in CSS pixels.","type":"number"},{"name":"scrollOffsetY","description":"Position of vertical scroll in CSS pixels.","type":"number"},{"name":"timestamp","description":"Frame swap timestamp.","optional":true,"$ref":"Network.TimeSinceEpoch"}]},{"id":"DialogType","description":"Javascript dialog type.","type":"string","enum":["alert","confirm","prompt","beforeunload"]},{"id":"AppManifestError","description":"Error while paring app manifest.","type":"object","properties":[{"name":"message","description":"Error message.","type":"string"},{"name":"critical","description":"If criticial, this is a non-recoverable parse error.","type":"integer"},{"name":"line","description":"Error line.","type":"integer"},{"name":"column","description":"Error column.","type":"integer"}]},{"id":"AppManifestParsedProperties","description":"Parsed app manifest properties.","experimental":true,"type":"object","properties":[{"name":"scope","description":"Computed scope value","type":"string"}]},{"id":"LayoutViewport","description":"Layout viewport position and dimensions.","type":"object","properties":[{"name":"pageX","description":"Horizontal offset relative to the document (CSS pixels).","type":"integer"},{"name":"pageY","description":"Vertical offset relative to the document (CSS pixels).","type":"integer"},{"name":"clientWidth","description":"Width (CSS pixels), excludes scrollbar if present.","type":"integer"},{"name":"clientHeight","description":"Height (CSS pixels), excludes scrollbar if present.","type":"integer"}]},{"id":"VisualViewport","description":"Visual viewport position, dimensions, and scale.","type":"object","properties":[{"name":"offsetX","description":"Horizontal offset relative to the layout viewport (CSS pixels).","type":"number"},{"name":"offsetY","description":"Vertical offset relative to the layout viewport (CSS pixels).","type":"number"},{"name":"pageX","description":"Horizontal offset relative to the document (CSS pixels).","type":"number"},{"name":"pageY","description":"Vertical offset relative to the document (CSS pixels).","type":"number"},{"name":"clientWidth","description":"Width (CSS pixels), excludes scrollbar if present.","type":"number"},{"name":"clientHeight","description":"Height (CSS pixels), excludes scrollbar if present.","type":"number"},{"name":"scale","description":"Scale relative to the ideal viewport (size at width=device-width).","type":"number"},{"name":"zoom","description":"Page zoom factor (CSS to device independent pixels ratio).","optional":true,"type":"number"}]},{"id":"Viewport","description":"Viewport for capturing screenshot.","type":"object","properties":[{"name":"x","description":"X offset in device independent pixels (dip).","type":"number"},{"name":"y","description":"Y offset in device independent pixels (dip).","type":"number"},{"name":"width","description":"Rectangle width in device independent pixels (dip).","type":"number"},{"name":"height","description":"Rectangle height in device independent pixels (dip).","type":"number"},{"name":"scale","description":"Page scale factor.","type":"number"}]},{"id":"FontFamilies","description":"Generic font families collection.","experimental":true,"type":"object","properties":[{"name":"standard","description":"The standard font-family.","optional":true,"type":"string"},{"name":"fixed","description":"The fixed font-family.","optional":true,"type":"string"},{"name":"serif","description":"The serif font-family.","optional":true,"type":"string"},{"name":"sansSerif","description":"The sansSerif font-family.","optional":true,"type":"string"},{"name":"cursive","description":"The cursive font-family.","optional":true,"type":"string"},{"name":"fantasy","description":"The fantasy font-family.","optional":true,"type":"string"},{"name":"pictograph","description":"The pictograph font-family.","optional":true,"type":"string"}]},{"id":"ScriptFontFamilies","description":"Font families collection for a script.","experimental":true,"type":"object","properties":[{"name":"script","description":"Name of the script which these font families are defined for.","type":"string"},{"name":"fontFamilies","description":"Generic font families collection for the script.","$ref":"FontFamilies"}]},{"id":"FontSizes","description":"Default font sizes.","experimental":true,"type":"object","properties":[{"name":"standard","description":"Default standard font size.","optional":true,"type":"integer"},{"name":"fixed","description":"Default fixed font size.","optional":true,"type":"integer"}]},{"id":"ClientNavigationReason","experimental":true,"type":"string","enum":["formSubmissionGet","formSubmissionPost","httpHeaderRefresh","scriptInitiated","metaTagRefresh","pageBlockInterstitial","reload","anchorClick"]},{"id":"ClientNavigationDisposition","experimental":true,"type":"string","enum":["currentTab","newTab","newWindow","download"]},{"id":"InstallabilityErrorArgument","experimental":true,"type":"object","properties":[{"name":"name","description":"Argument name (e.g. name:\'minimum-icon-size-in-pixels\').","type":"string"},{"name":"value","description":"Argument value (e.g. value:\'64\').","type":"string"}]},{"id":"InstallabilityError","description":"The installability error","experimental":true,"type":"object","properties":[{"name":"errorId","description":"The error id (e.g. \'manifest-missing-suitable-icon\').","type":"string"},{"name":"errorArguments","description":"The list of error arguments (e.g. {name:\'minimum-icon-size-in-pixels\', value:\'64\'}).","type":"array","items":{"$ref":"InstallabilityErrorArgument"}}]},{"id":"ReferrerPolicy","description":"The referring-policy used for the navigation.","experimental":true,"type":"string","enum":["noReferrer","noReferrerWhenDowngrade","origin","originWhenCrossOrigin","sameOrigin","strictOrigin","strictOriginWhenCrossOrigin","unsafeUrl"]},{"id":"CompilationCacheParams","description":"Per-script compilation cache parameters for `Page.produceCompilationCache`","experimental":true,"type":"object","properties":[{"name":"url","description":"The URL of the script to produce a compilation cache entry for.","type":"string"},{"name":"eager","description":"A hint to the backend whether eager compilation is recommended.\\n(the actual compilation mode used is upon backend discretion).","optional":true,"type":"boolean"}]},{"id":"NavigationType","description":"The type of a frameNavigated event.","experimental":true,"type":"string","enum":["Navigation","BackForwardCacheRestore"]},{"id":"BackForwardCacheNotRestoredReason","description":"List of not restored reasons for back-forward cache.","experimental":true,"type":"string","enum":["NotPrimaryMainFrame","BackForwardCacheDisabled","RelatedActiveContentsExist","HTTPStatusNotOK","SchemeNotHTTPOrHTTPS","Loading","WasGrantedMediaAccess","DisableForRenderFrameHostCalled","DomainNotAllowed","HTTPMethodNotGET","SubframeIsNavigating","Timeout","CacheLimit","JavaScriptExecution","RendererProcessKilled","RendererProcessCrashed","GrantedMediaStreamAccess","SchedulerTrackedFeatureUsed","ConflictingBrowsingInstance","CacheFlushed","ServiceWorkerVersionActivation","SessionRestored","ServiceWorkerPostMessage","EnteredBackForwardCacheBeforeServiceWorkerHostAdded","RenderFrameHostReused_SameSite","RenderFrameHostReused_CrossSite","ServiceWorkerClaim","IgnoreEventAndEvict","HaveInnerContents","TimeoutPuttingInCache","BackForwardCacheDisabledByLowMemory","BackForwardCacheDisabledByCommandLine","NetworkRequestDatapipeDrainedAsBytesConsumer","NetworkRequestRedirected","NetworkRequestTimeout","NetworkExceedsBufferLimit","NavigationCancelledWhileRestoring","NotMostRecentNavigationEntry","BackForwardCacheDisabledForPrerender","UserAgentOverrideDiffers","ForegroundCacheLimit","BrowsingInstanceNotSwapped","BackForwardCacheDisabledForDelegate","OptInUnloadHeaderNotPresent","UnloadHandlerExistsInMainFrame","UnloadHandlerExistsInSubFrame","ServiceWorkerUnregistration","CacheControlNoStore","CacheControlNoStoreCookieModified","CacheControlNoStoreHTTPOnlyCookieModified","NoResponseHead","Unknown","ActivationNavigationsDisallowedForBug1234857","WebSocket","WebTransport","WebRTC","MainResourceHasCacheControlNoStore","MainResourceHasCacheControlNoCache","SubresourceHasCacheControlNoStore","SubresourceHasCacheControlNoCache","ContainsPlugins","DocumentLoaded","DedicatedWorkerOrWorklet","OutstandingNetworkRequestOthers","OutstandingIndexedDBTransaction","RequestedNotificationsPermission","RequestedMIDIPermission","RequestedAudioCapturePermission","RequestedVideoCapturePermission","RequestedBackForwardCacheBlockedSensors","RequestedBackgroundWorkPermission","BroadcastChannel","IndexedDBConnection","WebXR","SharedWorker","WebLocks","WebHID","WebShare","RequestedStorageAccessGrant","WebNfc","OutstandingNetworkRequestFetch","OutstandingNetworkRequestXHR","AppBanner","Printing","WebDatabase","PictureInPicture","Portal","SpeechRecognizer","IdleManager","PaymentManager","SpeechSynthesis","KeyboardLock","WebOTPService","OutstandingNetworkRequestDirectSocket","InjectedJavascript","InjectedStyleSheet","Dummy","ContentSecurityHandler","ContentWebAuthenticationAPI","ContentFileChooser","ContentSerial","ContentFileSystemAccess","ContentMediaDevicesDispatcherHost","ContentWebBluetooth","ContentWebUSB","ContentMediaSession","ContentMediaSessionService","ContentScreenReader","EmbedderPopupBlockerTabHelper","EmbedderSafeBrowsingTriggeredPopupBlocker","EmbedderSafeBrowsingThreatDetails","EmbedderAppBannerManager","EmbedderDomDistillerViewerSource","EmbedderDomDistillerSelfDeletingRequestDelegate","EmbedderOomInterventionTabHelper","EmbedderOfflinePage","EmbedderChromePasswordManagerClientBindCredentialManager","EmbedderPermissionRequestManager","EmbedderModalDialog","EmbedderExtensions","EmbedderExtensionMessaging","EmbedderExtensionMessagingForOpenPort","EmbedderExtensionSentMessageToCachedFrame"]},{"id":"BackForwardCacheNotRestoredReasonType","description":"Types of not restored reasons for back-forward cache.","experimental":true,"type":"string","enum":["SupportPending","PageSupportNeeded","Circumstantial"]},{"id":"BackForwardCacheNotRestoredExplanation","experimental":true,"type":"object","properties":[{"name":"type","description":"Type of the reason","$ref":"BackForwardCacheNotRestoredReasonType"},{"name":"reason","description":"Not restored reason","$ref":"BackForwardCacheNotRestoredReason"}]},{"id":"BackForwardCacheNotRestoredExplanationTree","experimental":true,"type":"object","properties":[{"name":"url","description":"URL of each frame","type":"string"},{"name":"explanations","description":"Not restored reasons of each frame","type":"array","items":{"$ref":"BackForwardCacheNotRestoredExplanation"}},{"name":"children","description":"Array of children frame","type":"array","items":{"$ref":"BackForwardCacheNotRestoredExplanationTree"}}]}],"commands":[{"name":"addScriptToEvaluateOnLoad","description":"Deprecated, please use addScriptToEvaluateOnNewDocument instead.","experimental":true,"deprecated":true,"parameters":[{"name":"scriptSource","type":"string"}],"returns":[{"name":"identifier","description":"Identifier of the added script.","$ref":"ScriptIdentifier"}]},{"name":"addScriptToEvaluateOnNewDocument","description":"Evaluates given script in every frame upon creation (before loading frame\'s scripts).","parameters":[{"name":"source","type":"string"},{"name":"worldName","description":"If specified, creates an isolated world with the given name and evaluates given script in it.\\nThis world name will be used as the ExecutionContextDescription::name when the corresponding\\nevent is emitted.","experimental":true,"optional":true,"type":"string"},{"name":"includeCommandLineAPI","description":"Specifies whether command line API should be available to the script, defaults\\nto false.","experimental":true,"optional":true,"type":"boolean"}],"returns":[{"name":"identifier","description":"Identifier of the added script.","$ref":"ScriptIdentifier"}]},{"name":"bringToFront","description":"Brings page to front (activates tab)."},{"name":"captureScreenshot","description":"Capture page screenshot.","parameters":[{"name":"format","description":"Image compression format (defaults to png).","optional":true,"type":"string","enum":["jpeg","png","webp"]},{"name":"quality","description":"Compression quality from range [0..100] (jpeg only).","optional":true,"type":"integer"},{"name":"clip","description":"Capture the screenshot of a given region only.","optional":true,"$ref":"Viewport"},{"name":"fromSurface","description":"Capture the screenshot from the surface, rather than the view. Defaults to true.","experimental":true,"optional":true,"type":"boolean"},{"name":"captureBeyondViewport","description":"Capture the screenshot beyond the viewport. Defaults to false.","experimental":true,"optional":true,"type":"boolean"}],"returns":[{"name":"data","description":"Base64-encoded image data. (Encoded as a base64 string when passed over JSON)","type":"string"}]},{"name":"captureSnapshot","description":"Returns a snapshot of the page as a string. For MHTML format, the serialization includes\\niframes, shadow DOM, external resources, and element-inline styles.","experimental":true,"parameters":[{"name":"format","description":"Format (defaults to mhtml).","optional":true,"type":"string","enum":["mhtml"]}],"returns":[{"name":"data","description":"Serialized page data.","type":"string"}]},{"name":"clearDeviceMetricsOverride","description":"Clears the overridden device metrics.","experimental":true,"deprecated":true,"redirect":"Emulation"},{"name":"clearDeviceOrientationOverride","description":"Clears the overridden Device Orientation.","experimental":true,"deprecated":true,"redirect":"DeviceOrientation"},{"name":"clearGeolocationOverride","description":"Clears the overridden Geolocation Position and Error.","deprecated":true,"redirect":"Emulation"},{"name":"createIsolatedWorld","description":"Creates an isolated world for the given frame.","parameters":[{"name":"frameId","description":"Id of the frame in which the isolated world should be created.","$ref":"FrameId"},{"name":"worldName","description":"An optional name which is reported in the Execution Context.","optional":true,"type":"string"},{"name":"grantUniveralAccess","description":"Whether or not universal access should be granted to the isolated world. This is a powerful\\noption, use with caution.","optional":true,"type":"boolean"}],"returns":[{"name":"executionContextId","description":"Execution context of the isolated world.","$ref":"Runtime.ExecutionContextId"}]},{"name":"deleteCookie","description":"Deletes browser cookie with given name, domain and path.","experimental":true,"deprecated":true,"redirect":"Network","parameters":[{"name":"cookieName","description":"Name of the cookie to remove.","type":"string"},{"name":"url","description":"URL to match cooke domain and path.","type":"string"}]},{"name":"disable","description":"Disables page domain notifications."},{"name":"enable","description":"Enables page domain notifications."},{"name":"getAppManifest","returns":[{"name":"url","description":"Manifest location.","type":"string"},{"name":"errors","type":"array","items":{"$ref":"AppManifestError"}},{"name":"data","description":"Manifest content.","optional":true,"type":"string"},{"name":"parsed","description":"Parsed manifest properties","experimental":true,"optional":true,"$ref":"AppManifestParsedProperties"}]},{"name":"getInstallabilityErrors","experimental":true,"returns":[{"name":"installabilityErrors","type":"array","items":{"$ref":"InstallabilityError"}}]},{"name":"getManifestIcons","experimental":true,"returns":[{"name":"primaryIcon","optional":true,"type":"string"}]},{"name":"getAppId","description":"Returns the unique (PWA) app id.\\nOnly returns values if the feature flag \'WebAppEnableManifestId\' is enabled","experimental":true,"returns":[{"name":"appId","description":"App id, either from manifest\'s id attribute or computed from start_url","optional":true,"type":"string"},{"name":"recommendedId","description":"Recommendation for manifest\'s id attribute to match current id computed from start_url","optional":true,"type":"string"}]},{"name":"getCookies","description":"Returns all browser cookies. Depending on the backend support, will return detailed cookie\\ninformation in the `cookies` field.","experimental":true,"deprecated":true,"redirect":"Network","returns":[{"name":"cookies","description":"Array of cookie objects.","type":"array","items":{"$ref":"Network.Cookie"}}]},{"name":"getFrameTree","description":"Returns present frame tree structure.","returns":[{"name":"frameTree","description":"Present frame tree structure.","$ref":"FrameTree"}]},{"name":"getLayoutMetrics","description":"Returns metrics relating to the layouting of the page, such as viewport bounds/scale.","returns":[{"name":"layoutViewport","description":"Deprecated metrics relating to the layout viewport. Can be in DP or in CSS pixels depending on the `enable-use-zoom-for-dsf` flag. Use `cssLayoutViewport` instead.","deprecated":true,"$ref":"LayoutViewport"},{"name":"visualViewport","description":"Deprecated metrics relating to the visual viewport. Can be in DP or in CSS pixels depending on the `enable-use-zoom-for-dsf` flag. Use `cssVisualViewport` instead.","deprecated":true,"$ref":"VisualViewport"},{"name":"contentSize","description":"Deprecated size of scrollable area. Can be in DP or in CSS pixels depending on the `enable-use-zoom-for-dsf` flag. Use `cssContentSize` instead.","deprecated":true,"$ref":"DOM.Rect"},{"name":"cssLayoutViewport","description":"Metrics relating to the layout viewport in CSS pixels.","$ref":"LayoutViewport"},{"name":"cssVisualViewport","description":"Metrics relating to the visual viewport in CSS pixels.","$ref":"VisualViewport"},{"name":"cssContentSize","description":"Size of scrollable area in CSS pixels.","$ref":"DOM.Rect"}]},{"name":"getNavigationHistory","description":"Returns navigation history for the current page.","returns":[{"name":"currentIndex","description":"Index of the current navigation history entry.","type":"integer"},{"name":"entries","description":"Array of navigation history entries.","type":"array","items":{"$ref":"NavigationEntry"}}]},{"name":"resetNavigationHistory","description":"Resets navigation history for the current page."},{"name":"getResourceContent","description":"Returns content of the given resource.","experimental":true,"parameters":[{"name":"frameId","description":"Frame id to get resource for.","$ref":"FrameId"},{"name":"url","description":"URL of the resource to get content for.","type":"string"}],"returns":[{"name":"content","description":"Resource content.","type":"string"},{"name":"base64Encoded","description":"True, if content was served as base64.","type":"boolean"}]},{"name":"getResourceTree","description":"Returns present frame / resource tree structure.","experimental":true,"returns":[{"name":"frameTree","description":"Present frame / resource tree structure.","$ref":"FrameResourceTree"}]},{"name":"handleJavaScriptDialog","description":"Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).","parameters":[{"name":"accept","description":"Whether to accept or dismiss the dialog.","type":"boolean"},{"name":"promptText","description":"The text to enter into the dialog prompt before accepting. Used only if this is a prompt\\ndialog.","optional":true,"type":"string"}]},{"name":"navigate","description":"Navigates current page to the given URL.","parameters":[{"name":"url","description":"URL to navigate the page to.","type":"string"},{"name":"referrer","description":"Referrer URL.","optional":true,"type":"string"},{"name":"transitionType","description":"Intended transition type.","optional":true,"$ref":"TransitionType"},{"name":"frameId","description":"Frame id to navigate, if not specified navigates the top frame.","optional":true,"$ref":"FrameId"},{"name":"referrerPolicy","description":"Referrer-policy used for the navigation.","experimental":true,"optional":true,"$ref":"ReferrerPolicy"}],"returns":[{"name":"frameId","description":"Frame id that has navigated (or failed to navigate)","$ref":"FrameId"},{"name":"loaderId","description":"Loader identifier.","optional":true,"$ref":"Network.LoaderId"},{"name":"errorText","description":"User friendly error message, present if and only if navigation has failed.","optional":true,"type":"string"}]},{"name":"navigateToHistoryEntry","description":"Navigates current page to the given history entry.","parameters":[{"name":"entryId","description":"Unique id of the entry to navigate to.","type":"integer"}]},{"name":"printToPDF","description":"Print page as PDF.","parameters":[{"name":"landscape","description":"Paper orientation. Defaults to false.","optional":true,"type":"boolean"},{"name":"displayHeaderFooter","description":"Display header and footer. Defaults to false.","optional":true,"type":"boolean"},{"name":"printBackground","description":"Print background graphics. Defaults to false.","optional":true,"type":"boolean"},{"name":"scale","description":"Scale of the webpage rendering. Defaults to 1.","optional":true,"type":"number"},{"name":"paperWidth","description":"Paper width in inches. Defaults to 8.5 inches.","optional":true,"type":"number"},{"name":"paperHeight","description":"Paper height in inches. Defaults to 11 inches.","optional":true,"type":"number"},{"name":"marginTop","description":"Top margin in inches. Defaults to 1cm (~0.4 inches).","optional":true,"type":"number"},{"name":"marginBottom","description":"Bottom margin in inches. Defaults to 1cm (~0.4 inches).","optional":true,"type":"number"},{"name":"marginLeft","description":"Left margin in inches. Defaults to 1cm (~0.4 inches).","optional":true,"type":"number"},{"name":"marginRight","description":"Right margin in inches. Defaults to 1cm (~0.4 inches).","optional":true,"type":"number"},{"name":"pageRanges","description":"Paper ranges to print, e.g., \'1-5, 8, 11-13\'. Defaults to the empty string, which means\\nprint all pages.","optional":true,"type":"string"},{"name":"ignoreInvalidPageRanges","description":"Whether to silently ignore invalid but successfully parsed page ranges, such as \'3-2\'.\\nDefaults to false.","optional":true,"type":"boolean"},{"name":"headerTemplate","description":"HTML template for the print header. Should be valid HTML markup with following\\nclasses used to inject printing values into them:\\n- `date`: formatted print date\\n- `title`: document title\\n- `url`: document location\\n- `pageNumber`: current page number\\n- `totalPages`: total pages in the document\\n\\nFor example, `<span class=title></span>` would generate span containing the title.","optional":true,"type":"string"},{"name":"footerTemplate","description":"HTML template for the print footer. Should use the same format as the `headerTemplate`.","optional":true,"type":"string"},{"name":"preferCSSPageSize","description":"Whether or not to prefer page size as defined by css. Defaults to false,\\nin which case the content will be scaled to fit the paper size.","optional":true,"type":"boolean"},{"name":"transferMode","description":"return as stream","experimental":true,"optional":true,"type":"string","enum":["ReturnAsBase64","ReturnAsStream"]}],"returns":[{"name":"data","description":"Base64-encoded pdf data. Empty if |returnAsStream| is specified. (Encoded as a base64 string when passed over JSON)","type":"string"},{"name":"stream","description":"A handle of the stream that holds resulting PDF data.","experimental":true,"optional":true,"$ref":"IO.StreamHandle"}]},{"name":"reload","description":"Reloads given page optionally ignoring the cache.","parameters":[{"name":"ignoreCache","description":"If true, browser cache is ignored (as if the user pressed Shift+refresh).","optional":true,"type":"boolean"},{"name":"scriptToEvaluateOnLoad","description":"If set, the script will be injected into all frames of the inspected page after reload.\\nArgument will be ignored if reloading dataURL origin.","optional":true,"type":"string"}]},{"name":"removeScriptToEvaluateOnLoad","description":"Deprecated, please use removeScriptToEvaluateOnNewDocument instead.","experimental":true,"deprecated":true,"parameters":[{"name":"identifier","$ref":"ScriptIdentifier"}]},{"name":"removeScriptToEvaluateOnNewDocument","description":"Removes given script from the list.","parameters":[{"name":"identifier","$ref":"ScriptIdentifier"}]},{"name":"screencastFrameAck","description":"Acknowledges that a screencast frame has been received by the frontend.","experimental":true,"parameters":[{"name":"sessionId","description":"Frame number.","type":"integer"}]},{"name":"searchInResource","description":"Searches for given string in resource content.","experimental":true,"parameters":[{"name":"frameId","description":"Frame id for resource to search in.","$ref":"FrameId"},{"name":"url","description":"URL of the resource to search in.","type":"string"},{"name":"query","description":"String to search for.","type":"string"},{"name":"caseSensitive","description":"If true, search is case sensitive.","optional":true,"type":"boolean"},{"name":"isRegex","description":"If true, treats string parameter as regex.","optional":true,"type":"boolean"}],"returns":[{"name":"result","description":"List of search matches.","type":"array","items":{"$ref":"Debugger.SearchMatch"}}]},{"name":"setAdBlockingEnabled","description":"Enable Chrome\'s experimental ad filter on all sites.","experimental":true,"parameters":[{"name":"enabled","description":"Whether to block ads.","type":"boolean"}]},{"name":"setBypassCSP","description":"Enable page Content Security Policy by-passing.","experimental":true,"parameters":[{"name":"enabled","description":"Whether to bypass page CSP.","type":"boolean"}]},{"name":"getPermissionsPolicyState","description":"Get Permissions Policy state on given frame.","experimental":true,"parameters":[{"name":"frameId","$ref":"FrameId"}],"returns":[{"name":"states","type":"array","items":{"$ref":"PermissionsPolicyFeatureState"}}]},{"name":"getOriginTrials","description":"Get Origin Trials on given frame.","experimental":true,"parameters":[{"name":"frameId","$ref":"FrameId"}],"returns":[{"name":"originTrials","type":"array","items":{"$ref":"OriginTrial"}}]},{"name":"setDeviceMetricsOverride","description":"Overrides the values of device screen dimensions (window.screen.width, window.screen.height,\\nwindow.innerWidth, window.innerHeight, and \\"device-width\\"/\\"device-height\\"-related CSS media\\nquery results).","experimental":true,"deprecated":true,"redirect":"Emulation","parameters":[{"name":"width","description":"Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.","type":"integer"},{"name":"height","description":"Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.","type":"integer"},{"name":"deviceScaleFactor","description":"Overriding device scale factor value. 0 disables the override.","type":"number"},{"name":"mobile","description":"Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text\\nautosizing and more.","type":"boolean"},{"name":"scale","description":"Scale to apply to resulting view image.","optional":true,"type":"number"},{"name":"screenWidth","description":"Overriding screen width value in pixels (minimum 0, maximum 10000000).","optional":true,"type":"integer"},{"name":"screenHeight","description":"Overriding screen height value in pixels (minimum 0, maximum 10000000).","optional":true,"type":"integer"},{"name":"positionX","description":"Overriding view X position on screen in pixels (minimum 0, maximum 10000000).","optional":true,"type":"integer"},{"name":"positionY","description":"Overriding view Y position on screen in pixels (minimum 0, maximum 10000000).","optional":true,"type":"integer"},{"name":"dontSetVisibleSize","description":"Do not set visible view size, rely upon explicit setVisibleSize call.","optional":true,"type":"boolean"},{"name":"screenOrientation","description":"Screen orientation override.","optional":true,"$ref":"Emulation.ScreenOrientation"},{"name":"viewport","description":"The viewport dimensions and scale. If not set, the override is cleared.","optional":true,"$ref":"Viewport"}]},{"name":"setDeviceOrientationOverride","description":"Overrides the Device Orientation.","experimental":true,"deprecated":true,"redirect":"DeviceOrientation","parameters":[{"name":"alpha","description":"Mock alpha","type":"number"},{"name":"beta","description":"Mock beta","type":"number"},{"name":"gamma","description":"Mock gamma","type":"number"}]},{"name":"setFontFamilies","description":"Set generic font families.","experimental":true,"parameters":[{"name":"fontFamilies","description":"Specifies font families to set. If a font family is not specified, it won\'t be changed.","$ref":"FontFamilies"},{"name":"forScripts","description":"Specifies font families to set for individual scripts.","optional":true,"type":"array","items":{"$ref":"ScriptFontFamilies"}}]},{"name":"setFontSizes","description":"Set default font sizes.","experimental":true,"parameters":[{"name":"fontSizes","description":"Specifies font sizes to set. If a font size is not specified, it won\'t be changed.","$ref":"FontSizes"}]},{"name":"setDocumentContent","description":"Sets given markup as the document\'s HTML.","parameters":[{"name":"frameId","description":"Frame id to set HTML for.","$ref":"FrameId"},{"name":"html","description":"HTML content to set.","type":"string"}]},{"name":"setDownloadBehavior","description":"Set the behavior when downloading a file.","experimental":true,"deprecated":true,"parameters":[{"name":"behavior","description":"Whether to allow all or deny all download requests, or use default Chrome behavior if\\navailable (otherwise deny).","type":"string","enum":["deny","allow","default"]},{"name":"downloadPath","description":"The default path to save downloaded files to. This is required if behavior is set to \'allow\'","optional":true,"type":"string"}]},{"name":"setGeolocationOverride","description":"Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position\\nunavailable.","deprecated":true,"redirect":"Emulation","parameters":[{"name":"latitude","description":"Mock latitude","optional":true,"type":"number"},{"name":"longitude","description":"Mock longitude","optional":true,"type":"number"},{"name":"accuracy","description":"Mock accuracy","optional":true,"type":"number"}]},{"name":"setLifecycleEventsEnabled","description":"Controls whether page will emit lifecycle events.","experimental":true,"parameters":[{"name":"enabled","description":"If true, starts emitting lifecycle events.","type":"boolean"}]},{"name":"setTouchEmulationEnabled","description":"Toggles mouse event-based touch event emulation.","experimental":true,"deprecated":true,"redirect":"Emulation","parameters":[{"name":"enabled","description":"Whether the touch event emulation should be enabled.","type":"boolean"},{"name":"configuration","description":"Touch/gesture events configuration. Default: current platform.","optional":true,"type":"string","enum":["mobile","desktop"]}]},{"name":"startScreencast","description":"Starts sending each frame using the `screencastFrame` event.","experimental":true,"parameters":[{"name":"format","description":"Image compression format.","optional":true,"type":"string","enum":["jpeg","png"]},{"name":"quality","description":"Compression quality from range [0..100].","optional":true,"type":"integer"},{"name":"maxWidth","description":"Maximum screenshot width.","optional":true,"type":"integer"},{"name":"maxHeight","description":"Maximum screenshot height.","optional":true,"type":"integer"},{"name":"everyNthFrame","description":"Send every n-th frame.","optional":true,"type":"integer"}]},{"name":"stopLoading","description":"Force the page stop all navigations and pending resource fetches."},{"name":"crash","description":"Crashes renderer on the IO thread, generates minidumps.","experimental":true},{"name":"close","description":"Tries to close page, running its beforeunload hooks, if any.","experimental":true},{"name":"setWebLifecycleState","description":"Tries to update the web lifecycle state of the page.\\nIt will transition the page to the given state according to:\\nhttps://github.com/WICG/web-lifecycle/","experimental":true,"parameters":[{"name":"state","description":"Target lifecycle state","type":"string","enum":["frozen","active"]}]},{"name":"stopScreencast","description":"Stops sending each frame in the `screencastFrame`.","experimental":true},{"name":"produceCompilationCache","description":"Requests backend to produce compilation cache for the specified scripts.\\n`scripts` are appeneded to the list of scripts for which the cache\\nwould be produced. The list may be reset during page navigation.\\nWhen script with a matching URL is encountered, the cache is optionally\\nproduced upon backend discretion, based on internal heuristics.\\nSee also: `Page.compilationCacheProduced`.","experimental":true,"parameters":[{"name":"scripts","type":"array","items":{"$ref":"CompilationCacheParams"}}]},{"name":"addCompilationCache","description":"Seeds compilation cache for given url. Compilation cache does not survive\\ncross-process navigation.","experimental":true,"parameters":[{"name":"url","type":"string"},{"name":"data","description":"Base64-encoded data (Encoded as a base64 string when passed over JSON)","type":"string"}]},{"name":"clearCompilationCache","description":"Clears seeded compilation cache.","experimental":true},{"name":"setSPCTransactionMode","description":"Sets the Secure Payment Confirmation transaction mode.\\nhttps://w3c.github.io/secure-payment-confirmation/#sctn-automation-set-spc-transaction-mode","experimental":true,"parameters":[{"name":"mode","type":"string","enum":["none","autoaccept","autoreject"]}]},{"name":"generateTestReport","description":"Generates a report for testing.","experimental":true,"parameters":[{"name":"message","description":"Message to be displayed in the report.","type":"string"},{"name":"group","description":"Specifies the endpoint group to deliver the report to.","optional":true,"type":"string"}]},{"name":"waitForDebugger","description":"Pauses page execution. Can be resumed using generic Runtime.runIfWaitingForDebugger.","experimental":true},{"name":"setInterceptFileChooserDialog","description":"Intercept file chooser requests and transfer control to protocol clients.\\nWhen file chooser interception is enabled, native file chooser dialog is not shown.\\nInstead, a protocol event `Page.fileChooserOpened` is emitted.","experimental":true,"parameters":[{"name":"enabled","type":"boolean"}]}],"events":[{"name":"domContentEventFired","parameters":[{"name":"timestamp","$ref":"Network.MonotonicTime"}]},{"name":"fileChooserOpened","description":"Emitted only when `page.interceptFileChooser` is enabled.","parameters":[{"name":"frameId","description":"Id of the frame containing input node.","experimental":true,"$ref":"FrameId"},{"name":"backendNodeId","description":"Input node id.","experimental":true,"$ref":"DOM.BackendNodeId"},{"name":"mode","description":"Input mode.","type":"string","enum":["selectSingle","selectMultiple"]}]},{"name":"frameAttached","description":"Fired when frame has been attached to its parent.","parameters":[{"name":"frameId","description":"Id of the frame that has been attached.","$ref":"FrameId"},{"name":"parentFrameId","description":"Parent frame identifier.","$ref":"FrameId"},{"name":"stack","description":"JavaScript stack trace of when frame was attached, only set if frame initiated from script.","optional":true,"$ref":"Runtime.StackTrace"}]},{"name":"frameClearedScheduledNavigation","description":"Fired when frame no longer has a scheduled navigation.","deprecated":true,"parameters":[{"name":"frameId","description":"Id of the frame that has cleared its scheduled navigation.","$ref":"FrameId"}]},{"name":"frameDetached","description":"Fired when frame has been detached from its parent.","parameters":[{"name":"frameId","description":"Id of the frame that has been detached.","$ref":"FrameId"},{"name":"reason","experimental":true,"type":"string","enum":["remove","swap"]}]},{"name":"frameNavigated","description":"Fired once navigation of the frame has completed. Frame is now associated with the new loader.","parameters":[{"name":"frame","description":"Frame object.","$ref":"Frame"},{"name":"type","experimental":true,"$ref":"NavigationType"}]},{"name":"documentOpened","description":"Fired when opening document to write to.","experimental":true,"parameters":[{"name":"frame","description":"Frame object.","$ref":"Frame"}]},{"name":"frameResized","experimental":true},{"name":"frameRequestedNavigation","description":"Fired when a renderer-initiated navigation is requested.\\nNavigation may still be cancelled after the event is issued.","experimental":true,"parameters":[{"name":"frameId","description":"Id of the frame that is being navigated.","$ref":"FrameId"},{"name":"reason","description":"The reason for the navigation.","$ref":"ClientNavigationReason"},{"name":"url","description":"The destination URL for the requested navigation.","type":"string"},{"name":"disposition","description":"The disposition for the navigation.","$ref":"ClientNavigationDisposition"}]},{"name":"frameScheduledNavigation","description":"Fired when frame schedules a potential navigation.","deprecated":true,"parameters":[{"name":"frameId","description":"Id of the frame that has scheduled a navigation.","$ref":"FrameId"},{"name":"delay","description":"Delay (in seconds) until the navigation is scheduled to begin. The navigation is not\\nguaranteed to start.","type":"number"},{"name":"reason","description":"The reason for the navigation.","$ref":"ClientNavigationReason"},{"name":"url","description":"The destination URL for the scheduled navigation.","type":"string"}]},{"name":"frameStartedLoading","description":"Fired when frame has started loading.","experimental":true,"parameters":[{"name":"frameId","description":"Id of the frame that has started loading.","$ref":"FrameId"}]},{"name":"frameStoppedLoading","description":"Fired when frame has stopped loading.","experimental":true,"parameters":[{"name":"frameId","description":"Id of the frame that has stopped loading.","$ref":"FrameId"}]},{"name":"downloadWillBegin","description":"Fired when page is about to start a download.\\nDeprecated. Use Browser.downloadWillBegin instead.","experimental":true,"deprecated":true,"parameters":[{"name":"frameId","description":"Id of the frame that caused download to begin.","$ref":"FrameId"},{"name":"guid","description":"Global unique identifier of the download.","type":"string"},{"name":"url","description":"URL of the resource being downloaded.","type":"string"},{"name":"suggestedFilename","description":"Suggested file name of the resource (the actual name of the file saved on disk may differ).","type":"string"}]},{"name":"downloadProgress","description":"Fired when download makes progress. Last call has |done| == true.\\nDeprecated. Use Browser.downloadProgress instead.","experimental":true,"deprecated":true,"parameters":[{"name":"guid","description":"Global unique identifier of the download.","type":"string"},{"name":"totalBytes","description":"Total expected bytes to download.","type":"number"},{"name":"receivedBytes","description":"Total bytes received.","type":"number"},{"name":"state","description":"Download status.","type":"string","enum":["inProgress","completed","canceled"]}]},{"name":"interstitialHidden","description":"Fired when interstitial page was hidden"},{"name":"interstitialShown","description":"Fired when interstitial page was shown"},{"name":"javascriptDialogClosed","description":"Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been\\nclosed.","parameters":[{"name":"result","description":"Whether dialog was confirmed.","type":"boolean"},{"name":"userInput","description":"User input in case of prompt.","type":"string"}]},{"name":"javascriptDialogOpening","description":"Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to\\nopen.","parameters":[{"name":"url","description":"Frame url.","type":"string"},{"name":"message","description":"Message that will be displayed by the dialog.","type":"string"},{"name":"type","description":"Dialog type.","$ref":"DialogType"},{"name":"hasBrowserHandler","description":"True iff browser is capable showing or acting on the given dialog. When browser has no\\ndialog handler for given target, calling alert while Page domain is engaged will stall\\nthe page execution. Execution can be resumed via calling Page.handleJavaScriptDialog.","type":"boolean"},{"name":"defaultPrompt","description":"Default dialog prompt.","optional":true,"type":"string"}]},{"name":"lifecycleEvent","description":"Fired for top level page lifecycle events such as navigation, load, paint, etc.","parameters":[{"name":"frameId","description":"Id of the frame.","$ref":"FrameId"},{"name":"loaderId","description":"Loader identifier. Empty string if the request is fetched from worker.","$ref":"Network.LoaderId"},{"name":"name","type":"string"},{"name":"timestamp","$ref":"Network.MonotonicTime"}]},{"name":"backForwardCacheNotUsed","description":"Fired for failed bfcache history navigations if BackForwardCache feature is enabled. Do\\nnot assume any ordering with the Page.frameNavigated event. This event is fired only for\\nmain-frame history navigation where the document changes (non-same-document navigations),\\nwhen bfcache navigation fails.","experimental":true,"parameters":[{"name":"loaderId","description":"The loader id for the associated navgation.","$ref":"Network.LoaderId"},{"name":"frameId","description":"The frame id of the associated frame.","$ref":"FrameId"},{"name":"notRestoredExplanations","description":"Array of reasons why the page could not be cached. This must not be empty.","type":"array","items":{"$ref":"BackForwardCacheNotRestoredExplanation"}},{"name":"notRestoredExplanationsTree","description":"Tree structure of reasons why the page could not be cached for each frame.","optional":true,"$ref":"BackForwardCacheNotRestoredExplanationTree"}]},{"name":"loadEventFired","parameters":[{"name":"timestamp","$ref":"Network.MonotonicTime"}]},{"name":"navigatedWithinDocument","description":"Fired when same-document navigation happens, e.g. due to history API usage or anchor navigation.","experimental":true,"parameters":[{"name":"frameId","description":"Id of the frame.","$ref":"FrameId"},{"name":"url","description":"Frame\'s new url.","type":"string"}]},{"name":"screencastFrame","description":"Compressed image data requested by the `startScreencast`.","experimental":true,"parameters":[{"name":"data","description":"Base64-encoded compressed image. (Encoded as a base64 string when passed over JSON)","type":"string"},{"name":"metadata","description":"Screencast frame metadata.","$ref":"ScreencastFrameMetadata"},{"name":"sessionId","description":"Frame number.","type":"integer"}]},{"name":"screencastVisibilityChanged","description":"Fired when the page with currently enabled screencast was shown or hidden `.","experimental":true,"parameters":[{"name":"visible","description":"True if the page is visible.","type":"boolean"}]},{"name":"windowOpen","description":"Fired when a new window is going to be opened, via window.open(), link click, form submission,\\netc.","parameters":[{"name":"url","description":"The URL for the new window.","type":"string"},{"name":"windowName","description":"Window name.","type":"string"},{"name":"windowFeatures","description":"An array of enabled window features.","type":"array","items":{"type":"string"}},{"name":"userGesture","description":"Whether or not it was triggered by user gesture.","type":"boolean"}]},{"name":"compilationCacheProduced","description":"Issued for every compilation cache generated. Is only available\\nif Page.setGenerateCompilationCache is enabled.","experimental":true,"parameters":[{"name":"url","type":"string"},{"name":"data","description":"Base64-encoded data (Encoded as a base64 string when passed over JSON)","type":"string"}]}]},{"domain":"Performance","types":[{"id":"Metric","description":"Run-time execution metric.","type":"object","properties":[{"name":"name","description":"Metric name.","type":"string"},{"name":"value","description":"Metric value.","type":"number"}]}],"commands":[{"name":"disable","description":"Disable collecting and reporting metrics."},{"name":"enable","description":"Enable collecting and reporting metrics.","parameters":[{"name":"timeDomain","description":"Time domain to use for collecting and reporting duration metrics.","optional":true,"type":"string","enum":["timeTicks","threadTicks"]}]},{"name":"setTimeDomain","description":"Sets time domain to use for collecting and reporting duration metrics.\\nNote that this must be called before enabling metrics collection. Calling\\nthis method while metrics collection is enabled returns an error.","experimental":true,"deprecated":true,"parameters":[{"name":"timeDomain","description":"Time domain","type":"string","enum":["timeTicks","threadTicks"]}]},{"name":"getMetrics","description":"Retrieve current values of run-time metrics.","returns":[{"name":"metrics","description":"Current values for run-time metrics.","type":"array","items":{"$ref":"Metric"}}]}],"events":[{"name":"metrics","description":"Current values of the metrics.","parameters":[{"name":"metrics","description":"Current values of the metrics.","type":"array","items":{"$ref":"Metric"}},{"name":"title","description":"Timestamp title.","type":"string"}]}]},{"domain":"PerformanceTimeline","description":"Reporting of performance timeline events, as specified in\\nhttps://w3c.github.io/performance-timeline/#dom-performanceobserver.","experimental":true,"dependencies":["DOM","Network"],"types":[{"id":"LargestContentfulPaint","description":"See https://github.com/WICG/LargestContentfulPaint and largest_contentful_paint.idl","type":"object","properties":[{"name":"renderTime","$ref":"Network.TimeSinceEpoch"},{"name":"loadTime","$ref":"Network.TimeSinceEpoch"},{"name":"size","description":"The number of pixels being painted.","type":"number"},{"name":"elementId","description":"The id attribute of the element, if available.","optional":true,"type":"string"},{"name":"url","description":"The URL of the image (may be trimmed).","optional":true,"type":"string"},{"name":"nodeId","optional":true,"$ref":"DOM.BackendNodeId"}]},{"id":"LayoutShiftAttribution","type":"object","properties":[{"name":"previousRect","$ref":"DOM.Rect"},{"name":"currentRect","$ref":"DOM.Rect"},{"name":"nodeId","optional":true,"$ref":"DOM.BackendNodeId"}]},{"id":"LayoutShift","description":"See https://wicg.github.io/layout-instability/#sec-layout-shift and layout_shift.idl","type":"object","properties":[{"name":"value","description":"Score increment produced by this event.","type":"number"},{"name":"hadRecentInput","type":"boolean"},{"name":"lastInputTime","$ref":"Network.TimeSinceEpoch"},{"name":"sources","type":"array","items":{"$ref":"LayoutShiftAttribution"}}]},{"id":"TimelineEvent","type":"object","properties":[{"name":"frameId","description":"Identifies the frame that this event is related to. Empty for non-frame targets.","$ref":"Page.FrameId"},{"name":"type","description":"The event type, as specified in https://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype\\nThis determines which of the optional \\"details\\" fiedls is present.","type":"string"},{"name":"name","description":"Name may be empty depending on the type.","type":"string"},{"name":"time","description":"Time in seconds since Epoch, monotonically increasing within document lifetime.","$ref":"Network.TimeSinceEpoch"},{"name":"duration","description":"Event duration, if applicable.","optional":true,"type":"number"},{"name":"lcpDetails","optional":true,"$ref":"LargestContentfulPaint"},{"name":"layoutShiftDetails","optional":true,"$ref":"LayoutShift"}]}],"commands":[{"name":"enable","description":"Previously buffered events would be reported before method returns.\\nSee also: timelineEventAdded","parameters":[{"name":"eventTypes","description":"The types of event to report, as specified in\\nhttps://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype\\nThe specified filter overrides any previous filters, passing empty\\nfilter disables recording.\\nNote that not all types exposed to the web platform are currently supported.","type":"array","items":{"type":"string"}}]}],"events":[{"name":"timelineEventAdded","description":"Sent when a performance timeline event is added. See reportPerformanceTimeline method.","parameters":[{"name":"event","$ref":"TimelineEvent"}]}]},{"domain":"Security","description":"Security","types":[{"id":"CertificateId","description":"An internal certificate ID value.","type":"integer"},{"id":"MixedContentType","description":"A description of mixed content (HTTP resources on HTTPS pages), as defined by\\nhttps://www.w3.org/TR/mixed-content/#categories","type":"string","enum":["blockable","optionally-blockable","none"]},{"id":"SecurityState","description":"The security level of a page or resource.","type":"string","enum":["unknown","neutral","insecure","secure","info","insecure-broken"]},{"id":"CertificateSecurityState","description":"Details about the security state of the page certificate.","experimental":true,"type":"object","properties":[{"name":"protocol","description":"Protocol name (e.g. \\"TLS 1.2\\" or \\"QUIC\\").","type":"string"},{"name":"keyExchange","description":"Key Exchange used by the connection, or the empty string if not applicable.","type":"string"},{"name":"keyExchangeGroup","description":"(EC)DH group used by the connection, if applicable.","optional":true,"type":"string"},{"name":"cipher","description":"Cipher name.","type":"string"},{"name":"mac","description":"TLS MAC. Note that AEAD ciphers do not have separate MACs.","optional":true,"type":"string"},{"name":"certificate","description":"Page certificate.","type":"array","items":{"type":"string"}},{"name":"subjectName","description":"Certificate subject name.","type":"string"},{"name":"issuer","description":"Name of the issuing CA.","type":"string"},{"name":"validFrom","description":"Certificate valid from date.","$ref":"Network.TimeSinceEpoch"},{"name":"validTo","description":"Certificate valid to (expiration) date","$ref":"Network.TimeSinceEpoch"},{"name":"certificateNetworkError","description":"The highest priority network error code, if the certificate has an error.","optional":true,"type":"string"},{"name":"certificateHasWeakSignature","description":"True if the certificate uses a weak signature aglorithm.","type":"boolean"},{"name":"certificateHasSha1Signature","description":"True if the certificate has a SHA1 signature in the chain.","type":"boolean"},{"name":"modernSSL","description":"True if modern SSL","type":"boolean"},{"name":"obsoleteSslProtocol","description":"True if the connection is using an obsolete SSL protocol.","type":"boolean"},{"name":"obsoleteSslKeyExchange","description":"True if the connection is using an obsolete SSL key exchange.","type":"boolean"},{"name":"obsoleteSslCipher","description":"True if the connection is using an obsolete SSL cipher.","type":"boolean"},{"name":"obsoleteSslSignature","description":"True if the connection is using an obsolete SSL signature.","type":"boolean"}]},{"id":"SafetyTipStatus","experimental":true,"type":"string","enum":["badReputation","lookalike"]},{"id":"SafetyTipInfo","experimental":true,"type":"object","properties":[{"name":"safetyTipStatus","description":"Describes whether the page triggers any safety tips or reputation warnings. Default is unknown.","$ref":"SafetyTipStatus"},{"name":"safeUrl","description":"The URL the safety tip suggested (\\"Did you mean?\\"). Only filled in for lookalike matches.","optional":true,"type":"string"}]},{"id":"VisibleSecurityState","description":"Security state information about the page.","experimental":true,"type":"object","properties":[{"name":"securityState","description":"The security level of the page.","$ref":"SecurityState"},{"name":"certificateSecurityState","description":"Security state details about the page certificate.","optional":true,"$ref":"CertificateSecurityState"},{"name":"safetyTipInfo","description":"The type of Safety Tip triggered on the page. Note that this field will be set even if the Safety Tip UI was not actually shown.","optional":true,"$ref":"SafetyTipInfo"},{"name":"securityStateIssueIds","description":"Array of security state issues ids.","type":"array","items":{"type":"string"}}]},{"id":"SecurityStateExplanation","description":"An explanation of an factor contributing to the security state.","type":"object","properties":[{"name":"securityState","description":"Security state representing the severity of the factor being explained.","$ref":"SecurityState"},{"name":"title","description":"Title describing the type of factor.","type":"string"},{"name":"summary","description":"Short phrase describing the type of factor.","type":"string"},{"name":"description","description":"Full text explanation of the factor.","type":"string"},{"name":"mixedContentType","description":"The type of mixed content described by the explanation.","$ref":"MixedContentType"},{"name":"certificate","description":"Page certificate.","type":"array","items":{"type":"string"}},{"name":"recommendations","description":"Recommendations to fix any issues.","optional":true,"type":"array","items":{"type":"string"}}]},{"id":"InsecureContentStatus","description":"Information about insecure content on the page.","deprecated":true,"type":"object","properties":[{"name":"ranMixedContent","description":"Always false.","type":"boolean"},{"name":"displayedMixedContent","description":"Always false.","type":"boolean"},{"name":"containedMixedForm","description":"Always false.","type":"boolean"},{"name":"ranContentWithCertErrors","description":"Always false.","type":"boolean"},{"name":"displayedContentWithCertErrors","description":"Always false.","type":"boolean"},{"name":"ranInsecureContentStyle","description":"Always set to unknown.","$ref":"SecurityState"},{"name":"displayedInsecureContentStyle","description":"Always set to unknown.","$ref":"SecurityState"}]},{"id":"CertificateErrorAction","description":"The action to take when a certificate error occurs. continue will continue processing the\\nrequest and cancel will cancel the request.","type":"string","enum":["continue","cancel"]}],"commands":[{"name":"disable","description":"Disables tracking security state changes."},{"name":"enable","description":"Enables tracking security state changes."},{"name":"setIgnoreCertificateErrors","description":"Enable/disable whether all certificate errors should be ignored.","experimental":true,"parameters":[{"name":"ignore","description":"If true, all certificate errors will be ignored.","type":"boolean"}]},{"name":"handleCertificateError","description":"Handles a certificate error that fired a certificateError event.","deprecated":true,"parameters":[{"name":"eventId","description":"The ID of the event.","type":"integer"},{"name":"action","description":"The action to take on the certificate error.","$ref":"CertificateErrorAction"}]},{"name":"setOverrideCertificateErrors","description":"Enable/disable overriding certificate errors. If enabled, all certificate error events need to\\nbe handled by the DevTools client and should be answered with `handleCertificateError` commands.","deprecated":true,"parameters":[{"name":"override","description":"If true, certificate errors will be overridden.","type":"boolean"}]}],"events":[{"name":"certificateError","description":"There is a certificate error. If overriding certificate errors is enabled, then it should be\\nhandled with the `handleCertificateError` command. Note: this event does not fire if the\\ncertificate error has been allowed internally. Only one client per target should override\\ncertificate errors at the same time.","deprecated":true,"parameters":[{"name":"eventId","description":"The ID of the event.","type":"integer"},{"name":"errorType","description":"The type of the error.","type":"string"},{"name":"requestURL","description":"The url that was requested.","type":"string"}]},{"name":"visibleSecurityStateChanged","description":"The security state of the page changed.","experimental":true,"parameters":[{"name":"visibleSecurityState","description":"Security state information about the page.","$ref":"VisibleSecurityState"}]},{"name":"securityStateChanged","description":"The security state of the page changed. No longer being sent.","deprecated":true,"parameters":[{"name":"securityState","description":"Security state.","$ref":"SecurityState"},{"name":"schemeIsCryptographic","description":"True if the page was loaded over cryptographic transport such as HTTPS.","deprecated":true,"type":"boolean"},{"name":"explanations","description":"Previously a list of explanations for the security state. Now always\\nempty.","deprecated":true,"type":"array","items":{"$ref":"SecurityStateExplanation"}},{"name":"insecureContentStatus","description":"Information about insecure content on the page.","deprecated":true,"$ref":"InsecureContentStatus"},{"name":"summary","description":"Overrides user-visible description of the state. Always omitted.","deprecated":true,"optional":true,"type":"string"}]}]},{"domain":"ServiceWorker","experimental":true,"dependencies":["Target"],"types":[{"id":"RegistrationID","type":"string"},{"id":"ServiceWorkerRegistration","description":"ServiceWorker registration.","type":"object","properties":[{"name":"registrationId","$ref":"RegistrationID"},{"name":"scopeURL","type":"string"},{"name":"isDeleted","type":"boolean"}]},{"id":"ServiceWorkerVersionRunningStatus","type":"string","enum":["stopped","starting","running","stopping"]},{"id":"ServiceWorkerVersionStatus","type":"string","enum":["new","installing","installed","activating","activated","redundant"]},{"id":"ServiceWorkerVersion","description":"ServiceWorker version.","type":"object","properties":[{"name":"versionId","type":"string"},{"name":"registrationId","$ref":"RegistrationID"},{"name":"scriptURL","type":"string"},{"name":"runningStatus","$ref":"ServiceWorkerVersionRunningStatus"},{"name":"status","$ref":"ServiceWorkerVersionStatus"},{"name":"scriptLastModified","description":"The Last-Modified header value of the main script.","optional":true,"type":"number"},{"name":"scriptResponseTime","description":"The time at which the response headers of the main script were received from the server.\\nFor cached script it is the last time the cache entry was validated.","optional":true,"type":"number"},{"name":"controlledClients","optional":true,"type":"array","items":{"$ref":"Target.TargetID"}},{"name":"targetId","optional":true,"$ref":"Target.TargetID"}]},{"id":"ServiceWorkerErrorMessage","description":"ServiceWorker error message.","type":"object","properties":[{"name":"errorMessage","type":"string"},{"name":"registrationId","$ref":"RegistrationID"},{"name":"versionId","type":"string"},{"name":"sourceURL","type":"string"},{"name":"lineNumber","type":"integer"},{"name":"columnNumber","type":"integer"}]}],"commands":[{"name":"deliverPushMessage","parameters":[{"name":"origin","type":"string"},{"name":"registrationId","$ref":"RegistrationID"},{"name":"data","type":"string"}]},{"name":"disable"},{"name":"dispatchSyncEvent","parameters":[{"name":"origin","type":"string"},{"name":"registrationId","$ref":"RegistrationID"},{"name":"tag","type":"string"},{"name":"lastChance","type":"boolean"}]},{"name":"dispatchPeriodicSyncEvent","parameters":[{"name":"origin","type":"string"},{"name":"registrationId","$ref":"RegistrationID"},{"name":"tag","type":"string"}]},{"name":"enable"},{"name":"inspectWorker","parameters":[{"name":"versionId","type":"string"}]},{"name":"setForceUpdateOnPageLoad","parameters":[{"name":"forceUpdateOnPageLoad","type":"boolean"}]},{"name":"skipWaiting","parameters":[{"name":"scopeURL","type":"string"}]},{"name":"startWorker","parameters":[{"name":"scopeURL","type":"string"}]},{"name":"stopAllWorkers"},{"name":"stopWorker","parameters":[{"name":"versionId","type":"string"}]},{"name":"unregister","parameters":[{"name":"scopeURL","type":"string"}]},{"name":"updateRegistration","parameters":[{"name":"scopeURL","type":"string"}]}],"events":[{"name":"workerErrorReported","parameters":[{"name":"errorMessage","$ref":"ServiceWorkerErrorMessage"}]},{"name":"workerRegistrationUpdated","parameters":[{"name":"registrations","type":"array","items":{"$ref":"ServiceWorkerRegistration"}}]},{"name":"workerVersionUpdated","parameters":[{"name":"versions","type":"array","items":{"$ref":"ServiceWorkerVersion"}}]}]},{"domain":"Storage","experimental":true,"dependencies":["Browser","Network"],"types":[{"id":"StorageType","description":"Enum of possible storage types.","type":"string","enum":["appcache","cookies","file_systems","indexeddb","local_storage","shader_cache","websql","service_workers","cache_storage","interest_groups","all","other"]},{"id":"UsageForType","description":"Usage for a storage type.","type":"object","properties":[{"name":"storageType","description":"Name of storage type.","$ref":"StorageType"},{"name":"usage","description":"Storage usage (bytes).","type":"number"}]},{"id":"TrustTokens","description":"Pair of issuer origin and number of available (signed, but not used) Trust\\nTokens from that issuer.","experimental":true,"type":"object","properties":[{"name":"issuerOrigin","type":"string"},{"name":"count","type":"number"}]},{"id":"InterestGroupAccessType","description":"Enum of interest group access types.","type":"string","enum":["join","leave","update","bid","win"]},{"id":"InterestGroupAd","description":"Ad advertising element inside an interest group.","type":"object","properties":[{"name":"renderUrl","type":"string"},{"name":"metadata","optional":true,"type":"string"}]},{"id":"InterestGroupDetails","description":"The full details of an interest group.","type":"object","properties":[{"name":"ownerOrigin","type":"string"},{"name":"name","type":"string"},{"name":"expirationTime","$ref":"Network.TimeSinceEpoch"},{"name":"joiningOrigin","type":"string"},{"name":"biddingUrl","optional":true,"type":"string"},{"name":"biddingWasmHelperUrl","optional":true,"type":"string"},{"name":"updateUrl","optional":true,"type":"string"},{"name":"trustedBiddingSignalsUrl","optional":true,"type":"string"},{"name":"trustedBiddingSignalsKeys","type":"array","items":{"type":"string"}},{"name":"userBiddingSignals","optional":true,"type":"string"},{"name":"ads","type":"array","items":{"$ref":"InterestGroupAd"}},{"name":"adComponents","type":"array","items":{"$ref":"InterestGroupAd"}}]}],"commands":[{"name":"clearDataForOrigin","description":"Clears storage for origin.","parameters":[{"name":"origin","description":"Security origin.","type":"string"},{"name":"storageTypes","description":"Comma separated list of StorageType to clear.","type":"string"}]},{"name":"getCookies","description":"Returns all browser cookies.","parameters":[{"name":"browserContextId","description":"Browser context to use when called on the browser endpoint.","optional":true,"$ref":"Browser.BrowserContextID"}],"returns":[{"name":"cookies","description":"Array of cookie objects.","type":"array","items":{"$ref":"Network.Cookie"}}]},{"name":"setCookies","description":"Sets given cookies.","parameters":[{"name":"cookies","description":"Cookies to be set.","type":"array","items":{"$ref":"Network.CookieParam"}},{"name":"browserContextId","description":"Browser context to use when called on the browser endpoint.","optional":true,"$ref":"Browser.BrowserContextID"}]},{"name":"clearCookies","description":"Clears cookies.","parameters":[{"name":"browserContextId","description":"Browser context to use when called on the browser endpoint.","optional":true,"$ref":"Browser.BrowserContextID"}]},{"name":"getUsageAndQuota","description":"Returns usage and quota in bytes.","parameters":[{"name":"origin","description":"Security origin.","type":"string"}],"returns":[{"name":"usage","description":"Storage usage (bytes).","type":"number"},{"name":"quota","description":"Storage quota (bytes).","type":"number"},{"name":"overrideActive","description":"Whether or not the origin has an active storage quota override","type":"boolean"},{"name":"usageBreakdown","description":"Storage usage per type (bytes).","type":"array","items":{"$ref":"UsageForType"}}]},{"name":"overrideQuotaForOrigin","description":"Override quota for the specified origin","experimental":true,"parameters":[{"name":"origin","description":"Security origin.","type":"string"},{"name":"quotaSize","description":"The quota size (in bytes) to override the original quota with.\\nIf this is called multiple times, the overridden quota will be equal to\\nthe quotaSize provided in the final call. If this is called without\\nspecifying a quotaSize, the quota will be reset to the default value for\\nthe specified origin. If this is called multiple times with different\\norigins, the override will be maintained for each origin until it is\\ndisabled (called without a quotaSize).","optional":true,"type":"number"}]},{"name":"trackCacheStorageForOrigin","description":"Registers origin to be notified when an update occurs to its cache storage list.","parameters":[{"name":"origin","description":"Security origin.","type":"string"}]},{"name":"trackIndexedDBForOrigin","description":"Registers origin to be notified when an update occurs to its IndexedDB.","parameters":[{"name":"origin","description":"Security origin.","type":"string"}]},{"name":"untrackCacheStorageForOrigin","description":"Unregisters origin from receiving notifications for cache storage.","parameters":[{"name":"origin","description":"Security origin.","type":"string"}]},{"name":"untrackIndexedDBForOrigin","description":"Unregisters origin from receiving notifications for IndexedDB.","parameters":[{"name":"origin","description":"Security origin.","type":"string"}]},{"name":"getTrustTokens","description":"Returns the number of stored Trust Tokens per issuer for the\\ncurrent browsing context.","experimental":true,"returns":[{"name":"tokens","type":"array","items":{"$ref":"TrustTokens"}}]},{"name":"clearTrustTokens","description":"Removes all Trust Tokens issued by the provided issuerOrigin.\\nLeaves other stored data, including the issuer\'s Redemption Records, intact.","experimental":true,"parameters":[{"name":"issuerOrigin","type":"string"}],"returns":[{"name":"didDeleteTokens","description":"True if any tokens were deleted, false otherwise.","type":"boolean"}]},{"name":"getInterestGroupDetails","description":"Gets details for a named interest group.","experimental":true,"parameters":[{"name":"ownerOrigin","type":"string"},{"name":"name","type":"string"}],"returns":[{"name":"details","$ref":"InterestGroupDetails"}]},{"name":"setInterestGroupTracking","description":"Enables/Disables issuing of interestGroupAccessed events.","experimental":true,"parameters":[{"name":"enable","type":"boolean"}]}],"events":[{"name":"cacheStorageContentUpdated","description":"A cache\'s contents have been modified.","parameters":[{"name":"origin","description":"Origin to update.","type":"string"},{"name":"cacheName","description":"Name of cache in origin.","type":"string"}]},{"name":"cacheStorageListUpdated","description":"A cache has been added/deleted.","parameters":[{"name":"origin","description":"Origin to update.","type":"string"}]},{"name":"indexedDBContentUpdated","description":"The origin\'s IndexedDB object store has been modified.","parameters":[{"name":"origin","description":"Origin to update.","type":"string"},{"name":"databaseName","description":"Database to update.","type":"string"},{"name":"objectStoreName","description":"ObjectStore to update.","type":"string"}]},{"name":"indexedDBListUpdated","description":"The origin\'s IndexedDB database list has been modified.","parameters":[{"name":"origin","description":"Origin to update.","type":"string"}]},{"name":"interestGroupAccessed","description":"One of the interest groups was accessed by the associated page.","parameters":[{"name":"accessTime","$ref":"Network.TimeSinceEpoch"},{"name":"type","$ref":"InterestGroupAccessType"},{"name":"ownerOrigin","type":"string"},{"name":"name","type":"string"}]}]},{"domain":"SystemInfo","description":"The SystemInfo domain defines methods and events for querying low-level system information.","experimental":true,"types":[{"id":"GPUDevice","description":"Describes a single graphics processor (GPU).","type":"object","properties":[{"name":"vendorId","description":"PCI ID of the GPU vendor, if available; 0 otherwise.","type":"number"},{"name":"deviceId","description":"PCI ID of the GPU device, if available; 0 otherwise.","type":"number"},{"name":"subSysId","description":"Sub sys ID of the GPU, only available on Windows.","optional":true,"type":"number"},{"name":"revision","description":"Revision of the GPU, only available on Windows.","optional":true,"type":"number"},{"name":"vendorString","description":"String description of the GPU vendor, if the PCI ID is not available.","type":"string"},{"name":"deviceString","description":"String description of the GPU device, if the PCI ID is not available.","type":"string"},{"name":"driverVendor","description":"String description of the GPU driver vendor.","type":"string"},{"name":"driverVersion","description":"String description of the GPU driver version.","type":"string"}]},{"id":"Size","description":"Describes the width and height dimensions of an entity.","type":"object","properties":[{"name":"width","description":"Width in pixels.","type":"integer"},{"name":"height","description":"Height in pixels.","type":"integer"}]},{"id":"VideoDecodeAcceleratorCapability","description":"Describes a supported video decoding profile with its associated minimum and\\nmaximum resolutions.","type":"object","properties":[{"name":"profile","description":"Video codec profile that is supported, e.g. VP9 Profile 2.","type":"string"},{"name":"maxResolution","description":"Maximum video dimensions in pixels supported for this |profile|.","$ref":"Size"},{"name":"minResolution","description":"Minimum video dimensions in pixels supported for this |profile|.","$ref":"Size"}]},{"id":"VideoEncodeAcceleratorCapability","description":"Describes a supported video encoding profile with its associated maximum\\nresolution and maximum framerate.","type":"object","properties":[{"name":"profile","description":"Video codec profile that is supported, e.g H264 Main.","type":"string"},{"name":"maxResolution","description":"Maximum video dimensions in pixels supported for this |profile|.","$ref":"Size"},{"name":"maxFramerateNumerator","description":"Maximum encoding framerate in frames per second supported for this\\n|profile|, as fraction\'s numerator and denominator, e.g. 24/1 fps,\\n24000/1001 fps, etc.","type":"integer"},{"name":"maxFramerateDenominator","type":"integer"}]},{"id":"SubsamplingFormat","description":"YUV subsampling type of the pixels of a given image.","type":"string","enum":["yuv420","yuv422","yuv444"]},{"id":"ImageType","description":"Image format of a given image.","type":"string","enum":["jpeg","webp","unknown"]},{"id":"ImageDecodeAcceleratorCapability","description":"Describes a supported image decoding profile with its associated minimum and\\nmaximum resolutions and subsampling.","type":"object","properties":[{"name":"imageType","description":"Image coded, e.g. Jpeg.","$ref":"ImageType"},{"name":"maxDimensions","description":"Maximum supported dimensions of the image in pixels.","$ref":"Size"},{"name":"minDimensions","description":"Minimum supported dimensions of the image in pixels.","$ref":"Size"},{"name":"subsamplings","description":"Optional array of supported subsampling formats, e.g. 4:2:0, if known.","type":"array","items":{"$ref":"SubsamplingFormat"}}]},{"id":"GPUInfo","description":"Provides information about the GPU(s) on the system.","type":"object","properties":[{"name":"devices","description":"The graphics devices on the system. Element 0 is the primary GPU.","type":"array","items":{"$ref":"GPUDevice"}},{"name":"auxAttributes","description":"An optional dictionary of additional GPU related attributes.","optional":true,"type":"object"},{"name":"featureStatus","description":"An optional dictionary of graphics features and their status.","optional":true,"type":"object"},{"name":"driverBugWorkarounds","description":"An optional array of GPU driver bug workarounds.","type":"array","items":{"type":"string"}},{"name":"videoDecoding","description":"Supported accelerated video decoding capabilities.","type":"array","items":{"$ref":"VideoDecodeAcceleratorCapability"}},{"name":"videoEncoding","description":"Supported accelerated video encoding capabilities.","type":"array","items":{"$ref":"VideoEncodeAcceleratorCapability"}},{"name":"imageDecoding","description":"Supported accelerated image decoding capabilities.","type":"array","items":{"$ref":"ImageDecodeAcceleratorCapability"}}]},{"id":"ProcessInfo","description":"Represents process info.","type":"object","properties":[{"name":"type","description":"Specifies process type.","type":"string"},{"name":"id","description":"Specifies process id.","type":"integer"},{"name":"cpuTime","description":"Specifies cumulative CPU usage in seconds across all threads of the\\nprocess since the process start.","type":"number"}]}],"commands":[{"name":"getInfo","description":"Returns information about the system.","returns":[{"name":"gpu","description":"Information about the GPUs on the system.","$ref":"GPUInfo"},{"name":"modelName","description":"A platform-dependent description of the model of the machine. On Mac OS, this is, for\\nexample, \'MacBookPro\'. Will be the empty string if not supported.","type":"string"},{"name":"modelVersion","description":"A platform-dependent description of the version of the machine. On Mac OS, this is, for\\nexample, \'10.1\'. Will be the empty string if not supported.","type":"string"},{"name":"commandLine","description":"The command line string used to launch the browser. Will be the empty string if not\\nsupported.","type":"string"}]},{"name":"getProcessInfo","description":"Returns information about all running processes.","returns":[{"name":"processInfo","description":"An array of process info blocks.","type":"array","items":{"$ref":"ProcessInfo"}}]}]},{"domain":"Target","description":"Supports additional targets discovery and allows to attach to them.","types":[{"id":"TargetID","type":"string"},{"id":"SessionID","description":"Unique identifier of attached debugging session.","type":"string"},{"id":"TargetInfo","type":"object","properties":[{"name":"targetId","$ref":"TargetID"},{"name":"type","type":"string"},{"name":"title","type":"string"},{"name":"url","type":"string"},{"name":"attached","description":"Whether the target has an attached client.","type":"boolean"},{"name":"openerId","description":"Opener target Id","optional":true,"$ref":"TargetID"},{"name":"canAccessOpener","description":"Whether the target has access to the originating window.","experimental":true,"type":"boolean"},{"name":"openerFrameId","description":"Frame id of originating window (is only set if target has an opener).","experimental":true,"optional":true,"$ref":"Page.FrameId"},{"name":"browserContextId","experimental":true,"optional":true,"$ref":"Browser.BrowserContextID"}]},{"id":"RemoteLocation","experimental":true,"type":"object","properties":[{"name":"host","type":"string"},{"name":"port","type":"integer"}]}],"commands":[{"name":"activateTarget","description":"Activates (focuses) the target.","parameters":[{"name":"targetId","$ref":"TargetID"}]},{"name":"attachToTarget","description":"Attaches to the target with given id.","parameters":[{"name":"targetId","$ref":"TargetID"},{"name":"flatten","description":"Enables \\"flat\\" access to the session via specifying sessionId attribute in the commands.\\nWe plan to make this the default, deprecate non-flattened mode,\\nand eventually retire it. See crbug.com/991325.","optional":true,"type":"boolean"}],"returns":[{"name":"sessionId","description":"Id assigned to the session.","$ref":"SessionID"}]},{"name":"attachToBrowserTarget","description":"Attaches to the browser target, only uses flat sessionId mode.","experimental":true,"returns":[{"name":"sessionId","description":"Id assigned to the session.","$ref":"SessionID"}]},{"name":"closeTarget","description":"Closes the target. If the target is a page that gets closed too.","parameters":[{"name":"targetId","$ref":"TargetID"}],"returns":[{"name":"success","description":"Always set to true. If an error occurs, the response indicates protocol error.","deprecated":true,"type":"boolean"}]},{"name":"exposeDevToolsProtocol","description":"Inject object to the target\'s main frame that provides a communication\\nchannel with browser target.\\n\\nInjected object will be available as `window[bindingName]`.\\n\\nThe object has the follwing API:\\n- `binding.send(json)` - a method to send messages over the remote debugging protocol\\n- `binding.onmessage = json => handleMessage(json)` - a callback that will be called for the protocol notifications and command responses.","experimental":true,"parameters":[{"name":"targetId","$ref":"TargetID"},{"name":"bindingName","description":"Binding name, \'cdp\' if not specified.","optional":true,"type":"string"}]},{"name":"createBrowserContext","description":"Creates a new empty BrowserContext. Similar to an incognito profile but you can have more than\\none.","experimental":true,"parameters":[{"name":"disposeOnDetach","description":"If specified, disposes this context when debugging session disconnects.","optional":true,"type":"boolean"},{"name":"proxyServer","description":"Proxy server, similar to the one passed to --proxy-server","optional":true,"type":"string"},{"name":"proxyBypassList","description":"Proxy bypass list, similar to the one passed to --proxy-bypass-list","optional":true,"type":"string"},{"name":"originsWithUniversalNetworkAccess","description":"An optional list of origins to grant unlimited cross-origin access to.\\nParts of the URL other than those constituting origin are ignored.","optional":true,"type":"array","items":{"type":"string"}}],"returns":[{"name":"browserContextId","description":"The id of the context created.","$ref":"Browser.BrowserContextID"}]},{"name":"getBrowserContexts","description":"Returns all browser contexts created with `Target.createBrowserContext` method.","experimental":true,"returns":[{"name":"browserContextIds","description":"An array of browser context ids.","type":"array","items":{"$ref":"Browser.BrowserContextID"}}]},{"name":"createTarget","description":"Creates a new page.","parameters":[{"name":"url","description":"The initial URL the page will be navigated to. An empty string indicates about:blank.","type":"string"},{"name":"width","description":"Frame width in DIP (headless chrome only).","optional":true,"type":"integer"},{"name":"height","description":"Frame height in DIP (headless chrome only).","optional":true,"type":"integer"},{"name":"browserContextId","description":"The browser context to create the page in.","experimental":true,"optional":true,"$ref":"Browser.BrowserContextID"},{"name":"enableBeginFrameControl","description":"Whether BeginFrames for this target will be controlled via DevTools (headless chrome only,\\nnot supported on MacOS yet, false by default).","experimental":true,"optional":true,"type":"boolean"},{"name":"newWindow","description":"Whether to create a new Window or Tab (chrome-only, false by default).","optional":true,"type":"boolean"},{"name":"background","description":"Whether to create the target in background or foreground (chrome-only,\\nfalse by default).","optional":true,"type":"boolean"}],"returns":[{"name":"targetId","description":"The id of the page opened.","$ref":"TargetID"}]},{"name":"detachFromTarget","description":"Detaches session with given id.","parameters":[{"name":"sessionId","description":"Session to detach.","optional":true,"$ref":"SessionID"},{"name":"targetId","description":"Deprecated.","deprecated":true,"optional":true,"$ref":"TargetID"}]},{"name":"disposeBrowserContext","description":"Deletes a BrowserContext. All the belonging pages will be closed without calling their\\nbeforeunload hooks.","experimental":true,"parameters":[{"name":"browserContextId","$ref":"Browser.BrowserContextID"}]},{"name":"getTargetInfo","description":"Returns information about a target.","experimental":true,"parameters":[{"name":"targetId","optional":true,"$ref":"TargetID"}],"returns":[{"name":"targetInfo","$ref":"TargetInfo"}]},{"name":"getTargets","description":"Retrieves a list of available targets.","returns":[{"name":"targetInfos","description":"The list of targets.","type":"array","items":{"$ref":"TargetInfo"}}]},{"name":"sendMessageToTarget","description":"Sends protocol message over session with given id.\\nConsider using flat mode instead; see commands attachToTarget, setAutoAttach,\\nand crbug.com/991325.","deprecated":true,"parameters":[{"name":"message","type":"string"},{"name":"sessionId","description":"Identifier of the session.","optional":true,"$ref":"SessionID"},{"name":"targetId","description":"Deprecated.","deprecated":true,"optional":true,"$ref":"TargetID"}]},{"name":"setAutoAttach","description":"Controls whether to automatically attach to new targets which are considered to be related to\\nthis one. When turned on, attaches to all existing related targets as well. When turned off,\\nautomatically detaches from all currently attached targets.\\nThis also clears all targets added by `autoAttachRelated` from the list of targets to watch\\nfor creation of related targets.","experimental":true,"parameters":[{"name":"autoAttach","description":"Whether to auto-attach to related targets.","type":"boolean"},{"name":"waitForDebuggerOnStart","description":"Whether to pause new targets when attaching to them. Use `Runtime.runIfWaitingForDebugger`\\nto run paused targets.","type":"boolean"},{"name":"flatten","description":"Enables \\"flat\\" access to the session via specifying sessionId attribute in the commands.\\nWe plan to make this the default, deprecate non-flattened mode,\\nand eventually retire it. See crbug.com/991325.","optional":true,"type":"boolean"}]},{"name":"autoAttachRelated","description":"Adds the specified target to the list of targets that will be monitored for any related target\\ncreation (such as child frames, child workers and new versions of service worker) and reported\\nthrough `attachedToTarget`. The specified target is also auto-attached.\\nThis cancels the effect of any previous `setAutoAttach` and is also cancelled by subsequent\\n`setAutoAttach`. Only available at the Browser target.","experimental":true,"parameters":[{"name":"targetId","$ref":"TargetID"},{"name":"waitForDebuggerOnStart","description":"Whether to pause new targets when attaching to them. Use `Runtime.runIfWaitingForDebugger`\\nto run paused targets.","type":"boolean"}]},{"name":"setDiscoverTargets","description":"Controls whether to discover available targets and notify via\\n`targetCreated/targetInfoChanged/targetDestroyed` events.","parameters":[{"name":"discover","description":"Whether to discover available targets.","type":"boolean"}]},{"name":"setRemoteLocations","description":"Enables target discovery for the specified locations, when `setDiscoverTargets` was set to\\n`true`.","experimental":true,"parameters":[{"name":"locations","description":"List of remote locations.","type":"array","items":{"$ref":"RemoteLocation"}}]}],"events":[{"name":"attachedToTarget","description":"Issued when attached to target because of auto-attach or `attachToTarget` command.","experimental":true,"parameters":[{"name":"sessionId","description":"Identifier assigned to the session used to send/receive messages.","$ref":"SessionID"},{"name":"targetInfo","$ref":"TargetInfo"},{"name":"waitingForDebugger","type":"boolean"}]},{"name":"detachedFromTarget","description":"Issued when detached from target for any reason (including `detachFromTarget` command). Can be\\nissued multiple times per target if multiple sessions have been attached to it.","experimental":true,"parameters":[{"name":"sessionId","description":"Detached session identifier.","$ref":"SessionID"},{"name":"targetId","description":"Deprecated.","deprecated":true,"optional":true,"$ref":"TargetID"}]},{"name":"receivedMessageFromTarget","description":"Notifies about a new protocol message received from the session (as reported in\\n`attachedToTarget` event).","parameters":[{"name":"sessionId","description":"Identifier of a session which sends a message.","$ref":"SessionID"},{"name":"message","type":"string"},{"name":"targetId","description":"Deprecated.","deprecated":true,"optional":true,"$ref":"TargetID"}]},{"name":"targetCreated","description":"Issued when a possible inspection target is created.","parameters":[{"name":"targetInfo","$ref":"TargetInfo"}]},{"name":"targetDestroyed","description":"Issued when a target is destroyed.","parameters":[{"name":"targetId","$ref":"TargetID"}]},{"name":"targetCrashed","description":"Issued when a target has crashed.","parameters":[{"name":"targetId","$ref":"TargetID"},{"name":"status","description":"Termination status type.","type":"string"},{"name":"errorCode","description":"Termination error code.","type":"integer"}]},{"name":"targetInfoChanged","description":"Issued when some information about a target has changed. This only happens between\\n`targetCreated` and `targetDestroyed`.","parameters":[{"name":"targetInfo","$ref":"TargetInfo"}]}]},{"domain":"Tethering","description":"The Tethering domain defines methods and events for browser port binding.","experimental":true,"commands":[{"name":"bind","description":"Request browser port binding.","parameters":[{"name":"port","description":"Port number to bind.","type":"integer"}]},{"name":"unbind","description":"Request browser port unbinding.","parameters":[{"name":"port","description":"Port number to unbind.","type":"integer"}]}],"events":[{"name":"accepted","description":"Informs that port was successfully bound and got a specified connection id.","parameters":[{"name":"port","description":"Port number that was successfully bound.","type":"integer"},{"name":"connectionId","description":"Connection id to be used.","type":"string"}]}]},{"domain":"Tracing","experimental":true,"dependencies":["IO"],"types":[{"id":"MemoryDumpConfig","description":"Configuration for memory dump. Used only when \\"memory-infra\\" category is enabled.","type":"object"},{"id":"TraceConfig","type":"object","properties":[{"name":"recordMode","description":"Controls how the trace buffer stores data.","optional":true,"type":"string","enum":["recordUntilFull","recordContinuously","recordAsMuchAsPossible","echoToConsole"]},{"name":"enableSampling","description":"Turns on JavaScript stack sampling.","optional":true,"type":"boolean"},{"name":"enableSystrace","description":"Turns on system tracing.","optional":true,"type":"boolean"},{"name":"enableArgumentFilter","description":"Turns on argument filter.","optional":true,"type":"boolean"},{"name":"includedCategories","description":"Included category filters.","optional":true,"type":"array","items":{"type":"string"}},{"name":"excludedCategories","description":"Excluded category filters.","optional":true,"type":"array","items":{"type":"string"}},{"name":"syntheticDelays","description":"Configuration to synthesize the delays in tracing.","optional":true,"type":"array","items":{"type":"string"}},{"name":"memoryDumpConfig","description":"Configuration for memory dump triggers. Used only when \\"memory-infra\\" category is enabled.","optional":true,"$ref":"MemoryDumpConfig"}]},{"id":"StreamFormat","description":"Data format of a trace. Can be either the legacy JSON format or the\\nprotocol buffer format. Note that the JSON format will be deprecated soon.","type":"string","enum":["json","proto"]},{"id":"StreamCompression","description":"Compression type to use for traces returned via streams.","type":"string","enum":["none","gzip"]},{"id":"MemoryDumpLevelOfDetail","description":"Details exposed when memory request explicitly declared.\\nKeep consistent with memory_dump_request_args.h and\\nmemory_instrumentation.mojom","type":"string","enum":["background","light","detailed"]},{"id":"TracingBackend","description":"Backend type to use for tracing. `chrome` uses the Chrome-integrated\\ntracing service and is supported on all platforms. `system` is only\\nsupported on Chrome OS and uses the Perfetto system tracing service.\\n`auto` chooses `system` when the perfettoConfig provided to Tracing.start\\nspecifies at least one non-Chrome data source; otherwise uses `chrome`.","type":"string","enum":["auto","chrome","system"]}],"commands":[{"name":"end","description":"Stop trace events collection."},{"name":"getCategories","description":"Gets supported tracing categories.","returns":[{"name":"categories","description":"A list of supported tracing categories.","type":"array","items":{"type":"string"}}]},{"name":"recordClockSyncMarker","description":"Record a clock sync marker in the trace.","parameters":[{"name":"syncId","description":"The ID of this clock sync marker","type":"string"}]},{"name":"requestMemoryDump","description":"Request a global memory dump.","parameters":[{"name":"deterministic","description":"Enables more deterministic results by forcing garbage collection","optional":true,"type":"boolean"},{"name":"levelOfDetail","description":"Specifies level of details in memory dump. Defaults to \\"detailed\\".","optional":true,"$ref":"MemoryDumpLevelOfDetail"}],"returns":[{"name":"dumpGuid","description":"GUID of the resulting global memory dump.","type":"string"},{"name":"success","description":"True iff the global memory dump succeeded.","type":"boolean"}]},{"name":"start","description":"Start trace events collection.","parameters":[{"name":"categories","description":"Category/tag filter","deprecated":true,"optional":true,"type":"string"},{"name":"options","description":"Tracing options","deprecated":true,"optional":true,"type":"string"},{"name":"bufferUsageReportingInterval","description":"If set, the agent will issue bufferUsage events at this interval, specified in milliseconds","optional":true,"type":"number"},{"name":"transferMode","description":"Whether to report trace events as series of dataCollected events or to save trace to a\\nstream (defaults to `ReportEvents`).","optional":true,"type":"string","enum":["ReportEvents","ReturnAsStream"]},{"name":"streamFormat","description":"Trace data format to use. This only applies when using `ReturnAsStream`\\ntransfer mode (defaults to `json`).","optional":true,"$ref":"StreamFormat"},{"name":"streamCompression","description":"Compression format to use. This only applies when using `ReturnAsStream`\\ntransfer mode (defaults to `none`)","optional":true,"$ref":"StreamCompression"},{"name":"traceConfig","optional":true,"$ref":"TraceConfig"},{"name":"perfettoConfig","description":"Base64-encoded serialized perfetto.protos.TraceConfig protobuf message\\nWhen specified, the parameters `categories`, `options`, `traceConfig`\\nare ignored. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"},{"name":"tracingBackend","description":"Backend type (defaults to `auto`)","optional":true,"$ref":"TracingBackend"}]}],"events":[{"name":"bufferUsage","parameters":[{"name":"percentFull","description":"A number in range [0..1] that indicates the used size of event buffer as a fraction of its\\ntotal size.","optional":true,"type":"number"},{"name":"eventCount","description":"An approximate number of events in the trace log.","optional":true,"type":"number"},{"name":"value","description":"A number in range [0..1] that indicates the used size of event buffer as a fraction of its\\ntotal size.","optional":true,"type":"number"}]},{"name":"dataCollected","description":"Contains an bucket of collected trace events. When tracing is stopped collected events will be\\nsend as a sequence of dataCollected events followed by tracingComplete event.","parameters":[{"name":"value","type":"array","items":{"type":"object"}}]},{"name":"tracingComplete","description":"Signals that tracing is stopped and there is no trace buffers pending flush, all data were\\ndelivered via dataCollected events.","parameters":[{"name":"dataLossOccurred","description":"Indicates whether some trace data is known to have been lost, e.g. because the trace ring\\nbuffer wrapped around.","type":"boolean"},{"name":"stream","description":"A handle of the stream that holds resulting trace data.","optional":true,"$ref":"IO.StreamHandle"},{"name":"traceFormat","description":"Trace data format of returned stream.","optional":true,"$ref":"StreamFormat"},{"name":"streamCompression","description":"Compression format of returned stream.","optional":true,"$ref":"StreamCompression"}]}]},{"domain":"Fetch","description":"A domain for letting clients substitute browser\'s network layer with client code.","dependencies":["Network","IO","Page"],"types":[{"id":"RequestId","description":"Unique request identifier.","type":"string"},{"id":"RequestStage","description":"Stages of the request to handle. Request will intercept before the request is\\nsent. Response will intercept after the response is received (but before response\\nbody is received).","type":"string","enum":["Request","Response"]},{"id":"RequestPattern","type":"object","properties":[{"name":"urlPattern","description":"Wildcards (`\'*\'` -> zero or more, `\'?\'` -> exactly one) are allowed. Escape character is\\nbackslash. Omitting is equivalent to `\\"*\\"`.","optional":true,"type":"string"},{"name":"resourceType","description":"If set, only requests for matching resource types will be intercepted.","optional":true,"$ref":"Network.ResourceType"},{"name":"requestStage","description":"Stage at which to begin intercepting requests. Default is Request.","optional":true,"$ref":"RequestStage"}]},{"id":"HeaderEntry","description":"Response HTTP header entry","type":"object","properties":[{"name":"name","type":"string"},{"name":"value","type":"string"}]},{"id":"AuthChallenge","description":"Authorization challenge for HTTP status code 401 or 407.","type":"object","properties":[{"name":"source","description":"Source of the authentication challenge.","optional":true,"type":"string","enum":["Server","Proxy"]},{"name":"origin","description":"Origin of the challenger.","type":"string"},{"name":"scheme","description":"The authentication scheme used, such as basic or digest","type":"string"},{"name":"realm","description":"The realm of the challenge. May be empty.","type":"string"}]},{"id":"AuthChallengeResponse","description":"Response to an AuthChallenge.","type":"object","properties":[{"name":"response","description":"The decision on what to do in response to the authorization challenge.  Default means\\ndeferring to the default behavior of the net stack, which will likely either the Cancel\\nauthentication or display a popup dialog box.","type":"string","enum":["Default","CancelAuth","ProvideCredentials"]},{"name":"username","description":"The username to provide, possibly empty. Should only be set if response is\\nProvideCredentials.","optional":true,"type":"string"},{"name":"password","description":"The password to provide, possibly empty. Should only be set if response is\\nProvideCredentials.","optional":true,"type":"string"}]}],"commands":[{"name":"disable","description":"Disables the fetch domain."},{"name":"enable","description":"Enables issuing of requestPaused events. A request will be paused until client\\ncalls one of failRequest, fulfillRequest or continueRequest/continueWithAuth.","parameters":[{"name":"patterns","description":"If specified, only requests matching any of these patterns will produce\\nfetchRequested event and will be paused until clients response. If not set,\\nall requests will be affected.","optional":true,"type":"array","items":{"$ref":"RequestPattern"}},{"name":"handleAuthRequests","description":"If true, authRequired events will be issued and requests will be paused\\nexpecting a call to continueWithAuth.","optional":true,"type":"boolean"}]},{"name":"failRequest","description":"Causes the request to fail with specified reason.","parameters":[{"name":"requestId","description":"An id the client received in requestPaused event.","$ref":"RequestId"},{"name":"errorReason","description":"Causes the request to fail with the given reason.","$ref":"Network.ErrorReason"}]},{"name":"fulfillRequest","description":"Provides response to the request.","parameters":[{"name":"requestId","description":"An id the client received in requestPaused event.","$ref":"RequestId"},{"name":"responseCode","description":"An HTTP response code.","type":"integer"},{"name":"responseHeaders","description":"Response headers.","optional":true,"type":"array","items":{"$ref":"HeaderEntry"}},{"name":"binaryResponseHeaders","description":"Alternative way of specifying response headers as a \\\\0-separated\\nseries of name: value pairs. Prefer the above method unless you\\nneed to represent some non-UTF8 values that can\'t be transmitted\\nover the protocol as text. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"},{"name":"body","description":"A response body. If absent, original response body will be used if\\nthe request is intercepted at the response stage and empty body\\nwill be used if the request is intercepted at the request stage. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"},{"name":"responsePhrase","description":"A textual representation of responseCode.\\nIf absent, a standard phrase matching responseCode is used.","optional":true,"type":"string"}]},{"name":"continueRequest","description":"Continues the request, optionally modifying some of its parameters.","parameters":[{"name":"requestId","description":"An id the client received in requestPaused event.","$ref":"RequestId"},{"name":"url","description":"If set, the request url will be modified in a way that\'s not observable by page.","optional":true,"type":"string"},{"name":"method","description":"If set, the request method is overridden.","optional":true,"type":"string"},{"name":"postData","description":"If set, overrides the post data in the request. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"},{"name":"headers","description":"If set, overrides the request headers.","optional":true,"type":"array","items":{"$ref":"HeaderEntry"}},{"name":"interceptResponse","description":"If set, overrides response interception behavior for this request.","experimental":true,"optional":true,"type":"boolean"}]},{"name":"continueWithAuth","description":"Continues a request supplying authChallengeResponse following authRequired event.","parameters":[{"name":"requestId","description":"An id the client received in authRequired event.","$ref":"RequestId"},{"name":"authChallengeResponse","description":"Response to  with an authChallenge.","$ref":"AuthChallengeResponse"}]},{"name":"continueResponse","description":"Continues loading of the paused response, optionally modifying the\\nresponse headers. If either responseCode or headers are modified, all of them\\nmust be present.","experimental":true,"parameters":[{"name":"requestId","description":"An id the client received in requestPaused event.","$ref":"RequestId"},{"name":"responseCode","description":"An HTTP response code. If absent, original response code will be used.","optional":true,"type":"integer"},{"name":"responsePhrase","description":"A textual representation of responseCode.\\nIf absent, a standard phrase matching responseCode is used.","optional":true,"type":"string"},{"name":"responseHeaders","description":"Response headers. If absent, original response headers will be used.","optional":true,"type":"array","items":{"$ref":"HeaderEntry"}},{"name":"binaryResponseHeaders","description":"Alternative way of specifying response headers as a \\\\0-separated\\nseries of name: value pairs. Prefer the above method unless you\\nneed to represent some non-UTF8 values that can\'t be transmitted\\nover the protocol as text. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"}]},{"name":"getResponseBody","description":"Causes the body of the response to be received from the server and\\nreturned as a single string. May only be issued for a request that\\nis paused in the Response stage and is mutually exclusive with\\ntakeResponseBodyForInterceptionAsStream. Calling other methods that\\naffect the request or disabling fetch domain before body is received\\nresults in an undefined behavior.","parameters":[{"name":"requestId","description":"Identifier for the intercepted request to get body for.","$ref":"RequestId"}],"returns":[{"name":"body","description":"Response body.","type":"string"},{"name":"base64Encoded","description":"True, if content was sent as base64.","type":"boolean"}]},{"name":"takeResponseBodyAsStream","description":"Returns a handle to the stream representing the response body.\\nThe request must be paused in the HeadersReceived stage.\\nNote that after this command the request can\'t be continued\\nas is -- client either needs to cancel it or to provide the\\nresponse body.\\nThe stream only supports sequential read, IO.read will fail if the position\\nis specified.\\nThis method is mutually exclusive with getResponseBody.\\nCalling other methods that affect the request or disabling fetch\\ndomain before body is received results in an undefined behavior.","parameters":[{"name":"requestId","$ref":"RequestId"}],"returns":[{"name":"stream","$ref":"IO.StreamHandle"}]}],"events":[{"name":"requestPaused","description":"Issued when the domain is enabled and the request URL matches the\\nspecified filter. The request is paused until the client responds\\nwith one of continueRequest, failRequest or fulfillRequest.\\nThe stage of the request can be determined by presence of responseErrorReason\\nand responseStatusCode -- the request is at the response stage if either\\nof these fields is present and in the request stage otherwise.","parameters":[{"name":"requestId","description":"Each request the page makes will have a unique id.","$ref":"RequestId"},{"name":"request","description":"The details of the request.","$ref":"Network.Request"},{"name":"frameId","description":"The id of the frame that initiated the request.","$ref":"Page.FrameId"},{"name":"resourceType","description":"How the requested resource will be used.","$ref":"Network.ResourceType"},{"name":"responseErrorReason","description":"Response error if intercepted at response stage.","optional":true,"$ref":"Network.ErrorReason"},{"name":"responseStatusCode","description":"Response code if intercepted at response stage.","optional":true,"type":"integer"},{"name":"responseStatusText","description":"Response status text if intercepted at response stage.","optional":true,"type":"string"},{"name":"responseHeaders","description":"Response headers if intercepted at the response stage.","optional":true,"type":"array","items":{"$ref":"HeaderEntry"}},{"name":"networkId","description":"If the intercepted request had a corresponding Network.requestWillBeSent event fired for it,\\nthen this networkId will be the same as the requestId present in the requestWillBeSent event.","optional":true,"$ref":"RequestId"}]},{"name":"authRequired","description":"Issued when the domain is enabled with handleAuthRequests set to true.\\nThe request is paused until client responds with continueWithAuth.","parameters":[{"name":"requestId","description":"Each request the page makes will have a unique id.","$ref":"RequestId"},{"name":"request","description":"The details of the request.","$ref":"Network.Request"},{"name":"frameId","description":"The id of the frame that initiated the request.","$ref":"Page.FrameId"},{"name":"resourceType","description":"How the requested resource will be used.","$ref":"Network.ResourceType"},{"name":"authChallenge","description":"Details of the Authorization Challenge encountered.\\nIf this is set, client should respond with continueRequest that\\ncontains AuthChallengeResponse.","$ref":"AuthChallenge"}]}]},{"domain":"WebAudio","description":"This domain allows inspection of Web Audio API.\\nhttps://webaudio.github.io/web-audio-api/","experimental":true,"types":[{"id":"GraphObjectId","description":"An unique ID for a graph object (AudioContext, AudioNode, AudioParam) in Web Audio API","type":"string"},{"id":"ContextType","description":"Enum of BaseAudioContext types","type":"string","enum":["realtime","offline"]},{"id":"ContextState","description":"Enum of AudioContextState from the spec","type":"string","enum":["suspended","running","closed"]},{"id":"NodeType","description":"Enum of AudioNode types","type":"string"},{"id":"ChannelCountMode","description":"Enum of AudioNode::ChannelCountMode from the spec","type":"string","enum":["clamped-max","explicit","max"]},{"id":"ChannelInterpretation","description":"Enum of AudioNode::ChannelInterpretation from the spec","type":"string","enum":["discrete","speakers"]},{"id":"ParamType","description":"Enum of AudioParam types","type":"string"},{"id":"AutomationRate","description":"Enum of AudioParam::AutomationRate from the spec","type":"string","enum":["a-rate","k-rate"]},{"id":"ContextRealtimeData","description":"Fields in AudioContext that change in real-time.","type":"object","properties":[{"name":"currentTime","description":"The current context time in second in BaseAudioContext.","type":"number"},{"name":"renderCapacity","description":"The time spent on rendering graph divided by render quantum duration,\\nand multiplied by 100. 100 means the audio renderer reached the full\\ncapacity and glitch may occur.","type":"number"},{"name":"callbackIntervalMean","description":"A running mean of callback interval.","type":"number"},{"name":"callbackIntervalVariance","description":"A running variance of callback interval.","type":"number"}]},{"id":"BaseAudioContext","description":"Protocol object for BaseAudioContext","type":"object","properties":[{"name":"contextId","$ref":"GraphObjectId"},{"name":"contextType","$ref":"ContextType"},{"name":"contextState","$ref":"ContextState"},{"name":"realtimeData","optional":true,"$ref":"ContextRealtimeData"},{"name":"callbackBufferSize","description":"Platform-dependent callback buffer size.","type":"number"},{"name":"maxOutputChannelCount","description":"Number of output channels supported by audio hardware in use.","type":"number"},{"name":"sampleRate","description":"Context sample rate.","type":"number"}]},{"id":"AudioListener","description":"Protocol object for AudioListener","type":"object","properties":[{"name":"listenerId","$ref":"GraphObjectId"},{"name":"contextId","$ref":"GraphObjectId"}]},{"id":"AudioNode","description":"Protocol object for AudioNode","type":"object","properties":[{"name":"nodeId","$ref":"GraphObjectId"},{"name":"contextId","$ref":"GraphObjectId"},{"name":"nodeType","$ref":"NodeType"},{"name":"numberOfInputs","type":"number"},{"name":"numberOfOutputs","type":"number"},{"name":"channelCount","type":"number"},{"name":"channelCountMode","$ref":"ChannelCountMode"},{"name":"channelInterpretation","$ref":"ChannelInterpretation"}]},{"id":"AudioParam","description":"Protocol object for AudioParam","type":"object","properties":[{"name":"paramId","$ref":"GraphObjectId"},{"name":"nodeId","$ref":"GraphObjectId"},{"name":"contextId","$ref":"GraphObjectId"},{"name":"paramType","$ref":"ParamType"},{"name":"rate","$ref":"AutomationRate"},{"name":"defaultValue","type":"number"},{"name":"minValue","type":"number"},{"name":"maxValue","type":"number"}]}],"commands":[{"name":"enable","description":"Enables the WebAudio domain and starts sending context lifetime events."},{"name":"disable","description":"Disables the WebAudio domain."},{"name":"getRealtimeData","description":"Fetch the realtime data from the registered contexts.","parameters":[{"name":"contextId","$ref":"GraphObjectId"}],"returns":[{"name":"realtimeData","$ref":"ContextRealtimeData"}]}],"events":[{"name":"contextCreated","description":"Notifies that a new BaseAudioContext has been created.","parameters":[{"name":"context","$ref":"BaseAudioContext"}]},{"name":"contextWillBeDestroyed","description":"Notifies that an existing BaseAudioContext will be destroyed.","parameters":[{"name":"contextId","$ref":"GraphObjectId"}]},{"name":"contextChanged","description":"Notifies that existing BaseAudioContext has changed some properties (id stays the same)..","parameters":[{"name":"context","$ref":"BaseAudioContext"}]},{"name":"audioListenerCreated","description":"Notifies that the construction of an AudioListener has finished.","parameters":[{"name":"listener","$ref":"AudioListener"}]},{"name":"audioListenerWillBeDestroyed","description":"Notifies that a new AudioListener has been created.","parameters":[{"name":"contextId","$ref":"GraphObjectId"},{"name":"listenerId","$ref":"GraphObjectId"}]},{"name":"audioNodeCreated","description":"Notifies that a new AudioNode has been created.","parameters":[{"name":"node","$ref":"AudioNode"}]},{"name":"audioNodeWillBeDestroyed","description":"Notifies that an existing AudioNode has been destroyed.","parameters":[{"name":"contextId","$ref":"GraphObjectId"},{"name":"nodeId","$ref":"GraphObjectId"}]},{"name":"audioParamCreated","description":"Notifies that a new AudioParam has been created.","parameters":[{"name":"param","$ref":"AudioParam"}]},{"name":"audioParamWillBeDestroyed","description":"Notifies that an existing AudioParam has been destroyed.","parameters":[{"name":"contextId","$ref":"GraphObjectId"},{"name":"nodeId","$ref":"GraphObjectId"},{"name":"paramId","$ref":"GraphObjectId"}]},{"name":"nodesConnected","description":"Notifies that two AudioNodes are connected.","parameters":[{"name":"contextId","$ref":"GraphObjectId"},{"name":"sourceId","$ref":"GraphObjectId"},{"name":"destinationId","$ref":"GraphObjectId"},{"name":"sourceOutputIndex","optional":true,"type":"number"},{"name":"destinationInputIndex","optional":true,"type":"number"}]},{"name":"nodesDisconnected","description":"Notifies that AudioNodes are disconnected. The destination can be null, and it means all the outgoing connections from the source are disconnected.","parameters":[{"name":"contextId","$ref":"GraphObjectId"},{"name":"sourceId","$ref":"GraphObjectId"},{"name":"destinationId","$ref":"GraphObjectId"},{"name":"sourceOutputIndex","optional":true,"type":"number"},{"name":"destinationInputIndex","optional":true,"type":"number"}]},{"name":"nodeParamConnected","description":"Notifies that an AudioNode is connected to an AudioParam.","parameters":[{"name":"contextId","$ref":"GraphObjectId"},{"name":"sourceId","$ref":"GraphObjectId"},{"name":"destinationId","$ref":"GraphObjectId"},{"name":"sourceOutputIndex","optional":true,"type":"number"}]},{"name":"nodeParamDisconnected","description":"Notifies that an AudioNode is disconnected to an AudioParam.","parameters":[{"name":"contextId","$ref":"GraphObjectId"},{"name":"sourceId","$ref":"GraphObjectId"},{"name":"destinationId","$ref":"GraphObjectId"},{"name":"sourceOutputIndex","optional":true,"type":"number"}]}]},{"domain":"WebAuthn","description":"This domain allows configuring virtual authenticators to test the WebAuthn\\nAPI.","experimental":true,"types":[{"id":"AuthenticatorId","type":"string"},{"id":"AuthenticatorProtocol","type":"string","enum":["u2f","ctap2"]},{"id":"Ctap2Version","type":"string","enum":["ctap2_0","ctap2_1"]},{"id":"AuthenticatorTransport","type":"string","enum":["usb","nfc","ble","cable","internal"]},{"id":"VirtualAuthenticatorOptions","type":"object","properties":[{"name":"protocol","$ref":"AuthenticatorProtocol"},{"name":"ctap2Version","description":"Defaults to ctap2_0. Ignored if |protocol| == u2f.","optional":true,"$ref":"Ctap2Version"},{"name":"transport","$ref":"AuthenticatorTransport"},{"name":"hasResidentKey","description":"Defaults to false.","optional":true,"type":"boolean"},{"name":"hasUserVerification","description":"Defaults to false.","optional":true,"type":"boolean"},{"name":"hasLargeBlob","description":"If set to true, the authenticator will support the largeBlob extension.\\nhttps://w3c.github.io/webauthn#largeBlob\\nDefaults to false.","optional":true,"type":"boolean"},{"name":"hasCredBlob","description":"If set to true, the authenticator will support the credBlob extension.\\nhttps://fidoalliance.org/specs/fido-v2.1-rd-20201208/fido-client-to-authenticator-protocol-v2.1-rd-20201208.html#sctn-credBlob-extension\\nDefaults to false.","optional":true,"type":"boolean"},{"name":"hasMinPinLength","description":"If set to true, the authenticator will support the minPinLength extension.\\nhttps://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension\\nDefaults to false.","optional":true,"type":"boolean"},{"name":"automaticPresenceSimulation","description":"If set to true, tests of user presence will succeed immediately.\\nOtherwise, they will not be resolved. Defaults to true.","optional":true,"type":"boolean"},{"name":"isUserVerified","description":"Sets whether User Verification succeeds or fails for an authenticator.\\nDefaults to false.","optional":true,"type":"boolean"}]},{"id":"Credential","type":"object","properties":[{"name":"credentialId","type":"string"},{"name":"isResidentCredential","type":"boolean"},{"name":"rpId","description":"Relying Party ID the credential is scoped to. Must be set when adding a\\ncredential.","optional":true,"type":"string"},{"name":"privateKey","description":"The ECDSA P-256 private key in PKCS#8 format. (Encoded as a base64 string when passed over JSON)","type":"string"},{"name":"userHandle","description":"An opaque byte sequence with a maximum size of 64 bytes mapping the\\ncredential to a specific user. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"},{"name":"signCount","description":"Signature counter. This is incremented by one for each successful\\nassertion.\\nSee https://w3c.github.io/webauthn/#signature-counter","type":"integer"},{"name":"largeBlob","description":"The large blob associated with the credential.\\nSee https://w3c.github.io/webauthn/#sctn-large-blob-extension (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"}]}],"commands":[{"name":"enable","description":"Enable the WebAuthn domain and start intercepting credential storage and\\nretrieval with a virtual authenticator."},{"name":"disable","description":"Disable the WebAuthn domain."},{"name":"addVirtualAuthenticator","description":"Creates and adds a virtual authenticator.","parameters":[{"name":"options","$ref":"VirtualAuthenticatorOptions"}],"returns":[{"name":"authenticatorId","$ref":"AuthenticatorId"}]},{"name":"removeVirtualAuthenticator","description":"Removes the given authenticator.","parameters":[{"name":"authenticatorId","$ref":"AuthenticatorId"}]},{"name":"addCredential","description":"Adds the credential to the specified authenticator.","parameters":[{"name":"authenticatorId","$ref":"AuthenticatorId"},{"name":"credential","$ref":"Credential"}]},{"name":"getCredential","description":"Returns a single credential stored in the given virtual authenticator that\\nmatches the credential ID.","parameters":[{"name":"authenticatorId","$ref":"AuthenticatorId"},{"name":"credentialId","type":"string"}],"returns":[{"name":"credential","$ref":"Credential"}]},{"name":"getCredentials","description":"Returns all the credentials stored in the given virtual authenticator.","parameters":[{"name":"authenticatorId","$ref":"AuthenticatorId"}],"returns":[{"name":"credentials","type":"array","items":{"$ref":"Credential"}}]},{"name":"removeCredential","description":"Removes a credential from the authenticator.","parameters":[{"name":"authenticatorId","$ref":"AuthenticatorId"},{"name":"credentialId","type":"string"}]},{"name":"clearCredentials","description":"Clears all the credentials from the specified device.","parameters":[{"name":"authenticatorId","$ref":"AuthenticatorId"}]},{"name":"setUserVerified","description":"Sets whether User Verification succeeds or fails for an authenticator.\\nThe default is true.","parameters":[{"name":"authenticatorId","$ref":"AuthenticatorId"},{"name":"isUserVerified","type":"boolean"}]},{"name":"setAutomaticPresenceSimulation","description":"Sets whether tests of user presence will succeed immediately (if true) or fail to resolve (if false) for an authenticator.\\nThe default is true.","parameters":[{"name":"authenticatorId","$ref":"AuthenticatorId"},{"name":"enabled","type":"boolean"}]}]},{"domain":"Media","description":"This domain allows detailed inspection of media elements","experimental":true,"types":[{"id":"PlayerId","description":"Players will get an ID that is unique within the agent context.","type":"string"},{"id":"Timestamp","type":"number"},{"id":"PlayerMessage","description":"Have one type per entry in MediaLogRecord::Type\\nCorresponds to kMessage","type":"object","properties":[{"name":"level","description":"Keep in sync with MediaLogMessageLevel\\nWe are currently keeping the message level \'error\' separate from the\\nPlayerError type because right now they represent different things,\\nthis one being a DVLOG(ERROR) style log message that gets printed\\nbased on what log level is selected in the UI, and the other is a\\nrepresentation of a media::PipelineStatus object. Soon however we\'re\\ngoing to be moving away from using PipelineStatus for errors and\\nintroducing a new error type which should hopefully let us integrate\\nthe error log level into the PlayerError type.","type":"string","enum":["error","warning","info","debug"]},{"name":"message","type":"string"}]},{"id":"PlayerProperty","description":"Corresponds to kMediaPropertyChange","type":"object","properties":[{"name":"name","type":"string"},{"name":"value","type":"string"}]},{"id":"PlayerEvent","description":"Corresponds to kMediaEventTriggered","type":"object","properties":[{"name":"timestamp","$ref":"Timestamp"},{"name":"value","type":"string"}]},{"id":"PlayerError","description":"Corresponds to kMediaError","type":"object","properties":[{"name":"type","type":"string","enum":["pipeline_error","media_error"]},{"name":"errorCode","description":"When this switches to using media::Status instead of PipelineStatus\\nwe can remove \\"errorCode\\" and replace it with the fields from\\na Status instance. This also seems like a duplicate of the error\\nlevel enum - there is a todo bug to have that level removed and\\nuse this instead. (crbug.com/1068454)","type":"string"}]}],"events":[{"name":"playerPropertiesChanged","description":"This can be called multiple times, and can be used to set / override /\\nremove player properties. A null propValue indicates removal.","parameters":[{"name":"playerId","$ref":"PlayerId"},{"name":"properties","type":"array","items":{"$ref":"PlayerProperty"}}]},{"name":"playerEventsAdded","description":"Send events as a list, allowing them to be batched on the browser for less\\ncongestion. If batched, events must ALWAYS be in chronological order.","parameters":[{"name":"playerId","$ref":"PlayerId"},{"name":"events","type":"array","items":{"$ref":"PlayerEvent"}}]},{"name":"playerMessagesLogged","description":"Send a list of any messages that need to be delivered.","parameters":[{"name":"playerId","$ref":"PlayerId"},{"name":"messages","type":"array","items":{"$ref":"PlayerMessage"}}]},{"name":"playerErrorsRaised","description":"Send a list of any errors that need to be delivered.","parameters":[{"name":"playerId","$ref":"PlayerId"},{"name":"errors","type":"array","items":{"$ref":"PlayerError"}}]},{"name":"playersCreated","description":"Called whenever a player is created, or when a new agent joins and receives\\na list of active players. If an agent is restored, it will receive the full\\nlist of player ids and all events again.","parameters":[{"name":"players","type":"array","items":{"$ref":"PlayerId"}}]}],"commands":[{"name":"enable","description":"Enables the Media domain"},{"name":"disable","description":"Disables the Media domain."}]},{"domain":"Console","description":"This domain is deprecated - use Runtime or Log instead.","deprecated":true,"dependencies":["Runtime"],"types":[{"id":"ConsoleMessage","description":"Console message.","type":"object","properties":[{"name":"source","description":"Message source.","type":"string","enum":["xml","javascript","network","console-api","storage","appcache","rendering","security","other","deprecation","worker"]},{"name":"level","description":"Message severity.","type":"string","enum":["log","warning","error","debug","info"]},{"name":"text","description":"Message text.","type":"string"},{"name":"url","description":"URL of the message origin.","optional":true,"type":"string"},{"name":"line","description":"Line number in the resource that generated this message (1-based).","optional":true,"type":"integer"},{"name":"column","description":"Column number in the resource that generated this message (1-based).","optional":true,"type":"integer"}]}],"commands":[{"name":"clearMessages","description":"Does nothing."},{"name":"disable","description":"Disables console domain, prevents further console messages from being reported to the client."},{"name":"enable","description":"Enables console domain, sends the messages collected so far to the client by means of the\\n`messageAdded` notification."}],"events":[{"name":"messageAdded","description":"Issued when new console message is added.","parameters":[{"name":"message","description":"Console message that has been added.","$ref":"ConsoleMessage"}]}]},{"domain":"Debugger","description":"Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing\\nbreakpoints, stepping through execution, exploring stack traces, etc.","dependencies":["Runtime"],"types":[{"id":"BreakpointId","description":"Breakpoint identifier.","type":"string"},{"id":"CallFrameId","description":"Call frame identifier.","type":"string"},{"id":"Location","description":"Location in the source code.","type":"object","properties":[{"name":"scriptId","description":"Script identifier as reported in the `Debugger.scriptParsed`.","$ref":"Runtime.ScriptId"},{"name":"lineNumber","description":"Line number in the script (0-based).","type":"integer"},{"name":"columnNumber","description":"Column number in the script (0-based).","optional":true,"type":"integer"}]},{"id":"ScriptPosition","description":"Location in the source code.","experimental":true,"type":"object","properties":[{"name":"lineNumber","type":"integer"},{"name":"columnNumber","type":"integer"}]},{"id":"LocationRange","description":"Location range within one script.","experimental":true,"type":"object","properties":[{"name":"scriptId","$ref":"Runtime.ScriptId"},{"name":"start","$ref":"ScriptPosition"},{"name":"end","$ref":"ScriptPosition"}]},{"id":"CallFrame","description":"JavaScript call frame. Array of call frames form the call stack.","type":"object","properties":[{"name":"callFrameId","description":"Call frame identifier. This identifier is only valid while the virtual machine is paused.","$ref":"CallFrameId"},{"name":"functionName","description":"Name of the JavaScript function called on this call frame.","type":"string"},{"name":"functionLocation","description":"Location in the source code.","optional":true,"$ref":"Location"},{"name":"location","description":"Location in the source code.","$ref":"Location"},{"name":"url","description":"JavaScript script name or url.","type":"string"},{"name":"scopeChain","description":"Scope chain for this call frame.","type":"array","items":{"$ref":"Scope"}},{"name":"this","description":"`this` object for this call frame.","$ref":"Runtime.RemoteObject"},{"name":"returnValue","description":"The value being returned, if the function is at return point.","optional":true,"$ref":"Runtime.RemoteObject"}]},{"id":"Scope","description":"Scope description.","type":"object","properties":[{"name":"type","description":"Scope type.","type":"string","enum":["global","local","with","closure","catch","block","script","eval","module","wasm-expression-stack"]},{"name":"object","description":"Object representing the scope. For `global` and `with` scopes it represents the actual\\nobject; for the rest of the scopes, it is artificial transient object enumerating scope\\nvariables as its properties.","$ref":"Runtime.RemoteObject"},{"name":"name","optional":true,"type":"string"},{"name":"startLocation","description":"Location in the source code where scope starts","optional":true,"$ref":"Location"},{"name":"endLocation","description":"Location in the source code where scope ends","optional":true,"$ref":"Location"}]},{"id":"SearchMatch","description":"Search match for resource.","type":"object","properties":[{"name":"lineNumber","description":"Line number in resource content.","type":"number"},{"name":"lineContent","description":"Line with match content.","type":"string"}]},{"id":"BreakLocation","type":"object","properties":[{"name":"scriptId","description":"Script identifier as reported in the `Debugger.scriptParsed`.","$ref":"Runtime.ScriptId"},{"name":"lineNumber","description":"Line number in the script (0-based).","type":"integer"},{"name":"columnNumber","description":"Column number in the script (0-based).","optional":true,"type":"integer"},{"name":"type","optional":true,"type":"string","enum":["debuggerStatement","call","return"]}]},{"id":"ScriptLanguage","description":"Enum of possible script languages.","type":"string","enum":["JavaScript","WebAssembly"]},{"id":"DebugSymbols","description":"Debug symbols available for a wasm script.","type":"object","properties":[{"name":"type","description":"Type of the debug symbols.","type":"string","enum":["None","SourceMap","EmbeddedDWARF","ExternalDWARF"]},{"name":"externalURL","description":"URL of the external symbol source.","optional":true,"type":"string"}]}],"commands":[{"name":"continueToLocation","description":"Continues execution until specific location is reached.","parameters":[{"name":"location","description":"Location to continue to.","$ref":"Location"},{"name":"targetCallFrames","optional":true,"type":"string","enum":["any","current"]}]},{"name":"disable","description":"Disables debugger for given page."},{"name":"enable","description":"Enables debugger for the given page. Clients should not assume that the debugging has been\\nenabled until the result for this command is received.","parameters":[{"name":"maxScriptsCacheSize","description":"The maximum size in bytes of collected scripts (not referenced by other heap objects)\\nthe debugger can hold. Puts no limit if parameter is omitted.","experimental":true,"optional":true,"type":"number"}],"returns":[{"name":"debuggerId","description":"Unique identifier of the debugger.","experimental":true,"$ref":"Runtime.UniqueDebuggerId"}]},{"name":"evaluateOnCallFrame","description":"Evaluates expression on a given call frame.","parameters":[{"name":"callFrameId","description":"Call frame identifier to evaluate on.","$ref":"CallFrameId"},{"name":"expression","description":"Expression to evaluate.","type":"string"},{"name":"objectGroup","description":"String object group name to put result into (allows rapid releasing resulting object handles\\nusing `releaseObjectGroup`).","optional":true,"type":"string"},{"name":"includeCommandLineAPI","description":"Specifies whether command line API should be available to the evaluated expression, defaults\\nto false.","optional":true,"type":"boolean"},{"name":"silent","description":"In silent mode exceptions thrown during evaluation are not reported and do not pause\\nexecution. Overrides `setPauseOnException` state.","optional":true,"type":"boolean"},{"name":"returnByValue","description":"Whether the result is expected to be a JSON object that should be sent by value.","optional":true,"type":"boolean"},{"name":"generatePreview","description":"Whether preview should be generated for the result.","experimental":true,"optional":true,"type":"boolean"},{"name":"throwOnSideEffect","description":"Whether to throw an exception if side effect cannot be ruled out during evaluation.","optional":true,"type":"boolean"},{"name":"timeout","description":"Terminate execution after timing out (number of milliseconds).","experimental":true,"optional":true,"$ref":"Runtime.TimeDelta"}],"returns":[{"name":"result","description":"Object wrapper for the evaluation result.","$ref":"Runtime.RemoteObject"},{"name":"exceptionDetails","description":"Exception details.","optional":true,"$ref":"Runtime.ExceptionDetails"}]},{"name":"getPossibleBreakpoints","description":"Returns possible locations for breakpoint. scriptId in start and end range locations should be\\nthe same.","parameters":[{"name":"start","description":"Start of range to search possible breakpoint locations in.","$ref":"Location"},{"name":"end","description":"End of range to search possible breakpoint locations in (excluding). When not specified, end\\nof scripts is used as end of range.","optional":true,"$ref":"Location"},{"name":"restrictToFunction","description":"Only consider locations which are in the same (non-nested) function as start.","optional":true,"type":"boolean"}],"returns":[{"name":"locations","description":"List of the possible breakpoint locations.","type":"array","items":{"$ref":"BreakLocation"}}]},{"name":"getScriptSource","description":"Returns source for the script with given id.","parameters":[{"name":"scriptId","description":"Id of the script to get source for.","$ref":"Runtime.ScriptId"}],"returns":[{"name":"scriptSource","description":"Script source (empty in case of Wasm bytecode).","type":"string"},{"name":"bytecode","description":"Wasm bytecode. (Encoded as a base64 string when passed over JSON)","optional":true,"type":"string"}]},{"name":"getWasmBytecode","description":"This command is deprecated. Use getScriptSource instead.","deprecated":true,"parameters":[{"name":"scriptId","description":"Id of the Wasm script to get source for.","$ref":"Runtime.ScriptId"}],"returns":[{"name":"bytecode","description":"Script source. (Encoded as a base64 string when passed over JSON)","type":"string"}]},{"name":"getStackTrace","description":"Returns stack trace with given `stackTraceId`.","experimental":true,"parameters":[{"name":"stackTraceId","$ref":"Runtime.StackTraceId"}],"returns":[{"name":"stackTrace","$ref":"Runtime.StackTrace"}]},{"name":"pause","description":"Stops on the next JavaScript statement."},{"name":"pauseOnAsyncCall","experimental":true,"deprecated":true,"parameters":[{"name":"parentStackTraceId","description":"Debugger will pause when async call with given stack trace is started.","$ref":"Runtime.StackTraceId"}]},{"name":"removeBreakpoint","description":"Removes JavaScript breakpoint.","parameters":[{"name":"breakpointId","$ref":"BreakpointId"}]},{"name":"restartFrame","description":"Restarts particular call frame from the beginning.","deprecated":true,"parameters":[{"name":"callFrameId","description":"Call frame identifier to evaluate on.","$ref":"CallFrameId"}],"returns":[{"name":"callFrames","description":"New stack trace.","type":"array","items":{"$ref":"CallFrame"}},{"name":"asyncStackTrace","description":"Async stack trace, if any.","optional":true,"$ref":"Runtime.StackTrace"},{"name":"asyncStackTraceId","description":"Async stack trace, if any.","experimental":true,"optional":true,"$ref":"Runtime.StackTraceId"}]},{"name":"resume","description":"Resumes JavaScript execution.","parameters":[{"name":"terminateOnResume","description":"Set to true to terminate execution upon resuming execution. In contrast\\nto Runtime.terminateExecution, this will allows to execute further\\nJavaScript (i.e. via evaluation) until execution of the paused code\\nis actually resumed, at which point termination is triggered.\\nIf execution is currently not paused, this parameter has no effect.","optional":true,"type":"boolean"}]},{"name":"searchInContent","description":"Searches for given string in script content.","parameters":[{"name":"scriptId","description":"Id of the script to search in.","$ref":"Runtime.ScriptId"},{"name":"query","description":"String to search for.","type":"string"},{"name":"caseSensitive","description":"If true, search is case sensitive.","optional":true,"type":"boolean"},{"name":"isRegex","description":"If true, treats string parameter as regex.","optional":true,"type":"boolean"}],"returns":[{"name":"result","description":"List of search matches.","type":"array","items":{"$ref":"SearchMatch"}}]},{"name":"setAsyncCallStackDepth","description":"Enables or disables async call stacks tracking.","parameters":[{"name":"maxDepth","description":"Maximum depth of async call stacks. Setting to `0` will effectively disable collecting async\\ncall stacks (default).","type":"integer"}]},{"name":"setBlackboxPatterns","description":"Replace previous blackbox patterns with passed ones. Forces backend to skip stepping/pausing in\\nscripts with url matching one of the patterns. VM will try to leave blackboxed script by\\nperforming \'step in\' several times, finally resorting to \'step out\' if unsuccessful.","experimental":true,"parameters":[{"name":"patterns","description":"Array of regexps that will be used to check script url for blackbox state.","type":"array","items":{"type":"string"}}]},{"name":"setBlackboxedRanges","description":"Makes backend skip steps in the script in blackboxed ranges. VM will try leave blacklisted\\nscripts by performing \'step in\' several times, finally resorting to \'step out\' if unsuccessful.\\nPositions array contains positions where blackbox state is changed. First interval isn\'t\\nblackboxed. Array should be sorted.","experimental":true,"parameters":[{"name":"scriptId","description":"Id of the script.","$ref":"Runtime.ScriptId"},{"name":"positions","type":"array","items":{"$ref":"ScriptPosition"}}]},{"name":"setBreakpoint","description":"Sets JavaScript breakpoint at a given location.","parameters":[{"name":"location","description":"Location to set breakpoint in.","$ref":"Location"},{"name":"condition","description":"Expression to use as a breakpoint condition. When specified, debugger will only stop on the\\nbreakpoint if this expression evaluates to true.","optional":true,"type":"string"}],"returns":[{"name":"breakpointId","description":"Id of the created breakpoint for further reference.","$ref":"BreakpointId"},{"name":"actualLocation","description":"Location this breakpoint resolved into.","$ref":"Location"}]},{"name":"setInstrumentationBreakpoint","description":"Sets instrumentation breakpoint.","parameters":[{"name":"instrumentation","description":"Instrumentation name.","type":"string","enum":["beforeScriptExecution","beforeScriptWithSourceMapExecution"]}],"returns":[{"name":"breakpointId","description":"Id of the created breakpoint for further reference.","$ref":"BreakpointId"}]},{"name":"setBreakpointByUrl","description":"Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this\\ncommand is issued, all existing parsed scripts will have breakpoints resolved and returned in\\n`locations` property. Further matching script parsing will result in subsequent\\n`breakpointResolved` events issued. This logical breakpoint will survive page reloads.","parameters":[{"name":"lineNumber","description":"Line number to set breakpoint at.","type":"integer"},{"name":"url","description":"URL of the resources to set breakpoint on.","optional":true,"type":"string"},{"name":"urlRegex","description":"Regex pattern for the URLs of the resources to set breakpoints on. Either `url` or\\n`urlRegex` must be specified.","optional":true,"type":"string"},{"name":"scriptHash","description":"Script hash of the resources to set breakpoint on.","optional":true,"type":"string"},{"name":"columnNumber","description":"Offset in the line to set breakpoint at.","optional":true,"type":"integer"},{"name":"condition","description":"Expression to use as a breakpoint condition. When specified, debugger will only stop on the\\nbreakpoint if this expression evaluates to true.","optional":true,"type":"string"}],"returns":[{"name":"breakpointId","description":"Id of the created breakpoint for further reference.","$ref":"BreakpointId"},{"name":"locations","description":"List of the locations this breakpoint resolved into upon addition.","type":"array","items":{"$ref":"Location"}}]},{"name":"setBreakpointOnFunctionCall","description":"Sets JavaScript breakpoint before each call to the given function.\\nIf another function was created from the same source as a given one,\\ncalling it will also trigger the breakpoint.","experimental":true,"parameters":[{"name":"objectId","description":"Function object id.","$ref":"Runtime.RemoteObjectId"},{"name":"condition","description":"Expression to use as a breakpoint condition. When specified, debugger will\\nstop on the breakpoint if this expression evaluates to true.","optional":true,"type":"string"}],"returns":[{"name":"breakpointId","description":"Id of the created breakpoint for further reference.","$ref":"BreakpointId"}]},{"name":"setBreakpointsActive","description":"Activates / deactivates all breakpoints on the page.","parameters":[{"name":"active","description":"New value for breakpoints active state.","type":"boolean"}]},{"name":"setPauseOnExceptions","description":"Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or\\nno exceptions. Initial pause on exceptions state is `none`.","parameters":[{"name":"state","description":"Pause on exceptions mode.","type":"string","enum":["none","uncaught","all"]}]},{"name":"setReturnValue","description":"Changes return value in top frame. Available only at return break position.","experimental":true,"parameters":[{"name":"newValue","description":"New return value.","$ref":"Runtime.CallArgument"}]},{"name":"setScriptSource","description":"Edits JavaScript source live.","parameters":[{"name":"scriptId","description":"Id of the script to edit.","$ref":"Runtime.ScriptId"},{"name":"scriptSource","description":"New content of the script.","type":"string"},{"name":"dryRun","description":"If true the change will not actually be applied. Dry run may be used to get result\\ndescription without actually modifying the code.","optional":true,"type":"boolean"}],"returns":[{"name":"callFrames","description":"New stack trace in case editing has happened while VM was stopped.","optional":true,"type":"array","items":{"$ref":"CallFrame"}},{"name":"stackChanged","description":"Whether current call stack  was modified after applying the changes.","optional":true,"type":"boolean"},{"name":"asyncStackTrace","description":"Async stack trace, if any.","optional":true,"$ref":"Runtime.StackTrace"},{"name":"asyncStackTraceId","description":"Async stack trace, if any.","experimental":true,"optional":true,"$ref":"Runtime.StackTraceId"},{"name":"exceptionDetails","description":"Exception details if any.","optional":true,"$ref":"Runtime.ExceptionDetails"}]},{"name":"setSkipAllPauses","description":"Makes page not interrupt on any pauses (breakpoint, exception, dom exception etc).","parameters":[{"name":"skip","description":"New value for skip pauses state.","type":"boolean"}]},{"name":"setVariableValue","description":"Changes value of variable in a callframe. Object-based scopes are not supported and must be\\nmutated manually.","parameters":[{"name":"scopeNumber","description":"0-based number of scope as was listed in scope chain. Only \'local\', \'closure\' and \'catch\'\\nscope types are allowed. Other scopes could be manipulated manually.","type":"integer"},{"name":"variableName","description":"Variable name.","type":"string"},{"name":"newValue","description":"New variable value.","$ref":"Runtime.CallArgument"},{"name":"callFrameId","description":"Id of callframe that holds variable.","$ref":"CallFrameId"}]},{"name":"stepInto","description":"Steps into the function call.","parameters":[{"name":"breakOnAsyncCall","description":"Debugger will pause on the execution of the first async task which was scheduled\\nbefore next pause.","experimental":true,"optional":true,"type":"boolean"},{"name":"skipList","description":"The skipList specifies location ranges that should be skipped on step into.","experimental":true,"optional":true,"type":"array","items":{"$ref":"LocationRange"}}]},{"name":"stepOut","description":"Steps out of the function call."},{"name":"stepOver","description":"Steps over the statement.","parameters":[{"name":"skipList","description":"The skipList specifies location ranges that should be skipped on step over.","experimental":true,"optional":true,"type":"array","items":{"$ref":"LocationRange"}}]}],"events":[{"name":"breakpointResolved","description":"Fired when breakpoint is resolved to an actual script and location.","parameters":[{"name":"breakpointId","description":"Breakpoint unique identifier.","$ref":"BreakpointId"},{"name":"location","description":"Actual breakpoint location.","$ref":"Location"}]},{"name":"paused","description":"Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.","parameters":[{"name":"callFrames","description":"Call stack the virtual machine stopped on.","type":"array","items":{"$ref":"CallFrame"}},{"name":"reason","description":"Pause reason.","type":"string","enum":["ambiguous","assert","CSPViolation","debugCommand","DOM","EventListener","exception","instrumentation","OOM","other","promiseRejection","XHR"]},{"name":"data","description":"Object containing break-specific auxiliary properties.","optional":true,"type":"object"},{"name":"hitBreakpoints","description":"Hit breakpoints IDs","optional":true,"type":"array","items":{"type":"string"}},{"name":"asyncStackTrace","description":"Async stack trace, if any.","optional":true,"$ref":"Runtime.StackTrace"},{"name":"asyncStackTraceId","description":"Async stack trace, if any.","experimental":true,"optional":true,"$ref":"Runtime.StackTraceId"},{"name":"asyncCallStackTraceId","description":"Never present, will be removed.","experimental":true,"deprecated":true,"optional":true,"$ref":"Runtime.StackTraceId"}]},{"name":"resumed","description":"Fired when the virtual machine resumed execution."},{"name":"scriptFailedToParse","description":"Fired when virtual machine fails to parse the script.","parameters":[{"name":"scriptId","description":"Identifier of the script parsed.","$ref":"Runtime.ScriptId"},{"name":"url","description":"URL or name of the script parsed (if any).","type":"string"},{"name":"startLine","description":"Line offset of the script within the resource with given URL (for script tags).","type":"integer"},{"name":"startColumn","description":"Column offset of the script within the resource with given URL.","type":"integer"},{"name":"endLine","description":"Last line of the script.","type":"integer"},{"name":"endColumn","description":"Length of the last line of the script.","type":"integer"},{"name":"executionContextId","description":"Specifies script creation context.","$ref":"Runtime.ExecutionContextId"},{"name":"hash","description":"Content hash of the script.","type":"string"},{"name":"executionContextAuxData","description":"Embedder-specific auxiliary data.","optional":true,"type":"object"},{"name":"sourceMapURL","description":"URL of source map associated with script (if any).","optional":true,"type":"string"},{"name":"hasSourceURL","description":"True, if this script has sourceURL.","optional":true,"type":"boolean"},{"name":"isModule","description":"True, if this script is ES6 module.","optional":true,"type":"boolean"},{"name":"length","description":"This script length.","optional":true,"type":"integer"},{"name":"stackTrace","description":"JavaScript top stack frame of where the script parsed event was triggered if available.","experimental":true,"optional":true,"$ref":"Runtime.StackTrace"},{"name":"codeOffset","description":"If the scriptLanguage is WebAssembly, the code section offset in the module.","experimental":true,"optional":true,"type":"integer"},{"name":"scriptLanguage","description":"The language of the script.","experimental":true,"optional":true,"$ref":"Debugger.ScriptLanguage"},{"name":"embedderName","description":"The name the embedder supplied for this script.","experimental":true,"optional":true,"type":"string"}]},{"name":"scriptParsed","description":"Fired when virtual machine parses script. This event is also fired for all known and uncollected\\nscripts upon enabling debugger.","parameters":[{"name":"scriptId","description":"Identifier of the script parsed.","$ref":"Runtime.ScriptId"},{"name":"url","description":"URL or name of the script parsed (if any).","type":"string"},{"name":"startLine","description":"Line offset of the script within the resource with given URL (for script tags).","type":"integer"},{"name":"startColumn","description":"Column offset of the script within the resource with given URL.","type":"integer"},{"name":"endLine","description":"Last line of the script.","type":"integer"},{"name":"endColumn","description":"Length of the last line of the script.","type":"integer"},{"name":"executionContextId","description":"Specifies script creation context.","$ref":"Runtime.ExecutionContextId"},{"name":"hash","description":"Content hash of the script.","type":"string"},{"name":"executionContextAuxData","description":"Embedder-specific auxiliary data.","optional":true,"type":"object"},{"name":"isLiveEdit","description":"True, if this script is generated as a result of the live edit operation.","experimental":true,"optional":true,"type":"boolean"},{"name":"sourceMapURL","description":"URL of source map associated with script (if any).","optional":true,"type":"string"},{"name":"hasSourceURL","description":"True, if this script has sourceURL.","optional":true,"type":"boolean"},{"name":"isModule","description":"True, if this script is ES6 module.","optional":true,"type":"boolean"},{"name":"length","description":"This script length.","optional":true,"type":"integer"},{"name":"stackTrace","description":"JavaScript top stack frame of where the script parsed event was triggered if available.","experimental":true,"optional":true,"$ref":"Runtime.StackTrace"},{"name":"codeOffset","description":"If the scriptLanguage is WebAssembly, the code section offset in the module.","experimental":true,"optional":true,"type":"integer"},{"name":"scriptLanguage","description":"The language of the script.","experimental":true,"optional":true,"$ref":"Debugger.ScriptLanguage"},{"name":"debugSymbols","description":"If the scriptLanguage is WebASsembly, the source of debug symbols for the module.","experimental":true,"optional":true,"$ref":"Debugger.DebugSymbols"},{"name":"embedderName","description":"The name the embedder supplied for this script.","experimental":true,"optional":true,"type":"string"}]}]},{"domain":"HeapProfiler","experimental":true,"dependencies":["Runtime"],"types":[{"id":"HeapSnapshotObjectId","description":"Heap snapshot object id.","type":"string"},{"id":"SamplingHeapProfileNode","description":"Sampling Heap Profile node. Holds callsite information, allocation statistics and child nodes.","type":"object","properties":[{"name":"callFrame","description":"Function location.","$ref":"Runtime.CallFrame"},{"name":"selfSize","description":"Allocations size in bytes for the node excluding children.","type":"number"},{"name":"id","description":"Node id. Ids are unique across all profiles collected between startSampling and stopSampling.","type":"integer"},{"name":"children","description":"Child nodes.","type":"array","items":{"$ref":"SamplingHeapProfileNode"}}]},{"id":"SamplingHeapProfileSample","description":"A single sample from a sampling profile.","type":"object","properties":[{"name":"size","description":"Allocation size in bytes attributed to the sample.","type":"number"},{"name":"nodeId","description":"Id of the corresponding profile tree node.","type":"integer"},{"name":"ordinal","description":"Time-ordered sample ordinal number. It is unique across all profiles retrieved\\nbetween startSampling and stopSampling.","type":"number"}]},{"id":"SamplingHeapProfile","description":"Sampling profile.","type":"object","properties":[{"name":"head","$ref":"SamplingHeapProfileNode"},{"name":"samples","type":"array","items":{"$ref":"SamplingHeapProfileSample"}}]}],"commands":[{"name":"addInspectedHeapObject","description":"Enables console to refer to the node with given id via $x (see Command Line API for more details\\n$x functions).","parameters":[{"name":"heapObjectId","description":"Heap snapshot object id to be accessible by means of $x command line API.","$ref":"HeapSnapshotObjectId"}]},{"name":"collectGarbage"},{"name":"disable"},{"name":"enable"},{"name":"getHeapObjectId","parameters":[{"name":"objectId","description":"Identifier of the object to get heap object id for.","$ref":"Runtime.RemoteObjectId"}],"returns":[{"name":"heapSnapshotObjectId","description":"Id of the heap snapshot object corresponding to the passed remote object id.","$ref":"HeapSnapshotObjectId"}]},{"name":"getObjectByHeapObjectId","parameters":[{"name":"objectId","$ref":"HeapSnapshotObjectId"},{"name":"objectGroup","description":"Symbolic group name that can be used to release multiple objects.","optional":true,"type":"string"}],"returns":[{"name":"result","description":"Evaluation result.","$ref":"Runtime.RemoteObject"}]},{"name":"getSamplingProfile","returns":[{"name":"profile","description":"Return the sampling profile being collected.","$ref":"SamplingHeapProfile"}]},{"name":"startSampling","parameters":[{"name":"samplingInterval","description":"Average sample interval in bytes. Poisson distribution is used for the intervals. The\\ndefault value is 32768 bytes.","optional":true,"type":"number"}]},{"name":"startTrackingHeapObjects","parameters":[{"name":"trackAllocations","optional":true,"type":"boolean"}]},{"name":"stopSampling","returns":[{"name":"profile","description":"Recorded sampling heap profile.","$ref":"SamplingHeapProfile"}]},{"name":"stopTrackingHeapObjects","parameters":[{"name":"reportProgress","description":"If true \'reportHeapSnapshotProgress\' events will be generated while snapshot is being taken\\nwhen the tracking is stopped.","optional":true,"type":"boolean"},{"name":"treatGlobalObjectsAsRoots","optional":true,"type":"boolean"},{"name":"captureNumericValue","description":"If true, numerical values are included in the snapshot","optional":true,"type":"boolean"}]},{"name":"takeHeapSnapshot","parameters":[{"name":"reportProgress","description":"If true \'reportHeapSnapshotProgress\' events will be generated while snapshot is being taken.","optional":true,"type":"boolean"},{"name":"treatGlobalObjectsAsRoots","description":"If true, a raw snapshot without artificial roots will be generated","optional":true,"type":"boolean"},{"name":"captureNumericValue","description":"If true, numerical values are included in the snapshot","optional":true,"type":"boolean"}]}],"events":[{"name":"addHeapSnapshotChunk","parameters":[{"name":"chunk","type":"string"}]},{"name":"heapStatsUpdate","description":"If heap objects tracking has been started then backend may send update for one or more fragments","parameters":[{"name":"statsUpdate","description":"An array of triplets. Each triplet describes a fragment. The first integer is the fragment\\nindex, the second integer is a total count of objects for the fragment, the third integer is\\na total size of the objects for the fragment.","type":"array","items":{"type":"integer"}}]},{"name":"lastSeenObjectId","description":"If heap objects tracking has been started then backend regularly sends a current value for last\\nseen object id and corresponding timestamp. If the were changes in the heap since last event\\nthen one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.","parameters":[{"name":"lastSeenObjectId","type":"integer"},{"name":"timestamp","type":"number"}]},{"name":"reportHeapSnapshotProgress","parameters":[{"name":"done","type":"integer"},{"name":"total","type":"integer"},{"name":"finished","optional":true,"type":"boolean"}]},{"name":"resetProfiles"}]},{"domain":"Profiler","dependencies":["Runtime","Debugger"],"types":[{"id":"ProfileNode","description":"Profile node. Holds callsite information, execution statistics and child nodes.","type":"object","properties":[{"name":"id","description":"Unique id of the node.","type":"integer"},{"name":"callFrame","description":"Function location.","$ref":"Runtime.CallFrame"},{"name":"hitCount","description":"Number of samples where this node was on top of the call stack.","optional":true,"type":"integer"},{"name":"children","description":"Child node ids.","optional":true,"type":"array","items":{"type":"integer"}},{"name":"deoptReason","description":"The reason of being not optimized. The function may be deoptimized or marked as don\'t\\noptimize.","optional":true,"type":"string"},{"name":"positionTicks","description":"An array of source position ticks.","optional":true,"type":"array","items":{"$ref":"PositionTickInfo"}}]},{"id":"Profile","description":"Profile.","type":"object","properties":[{"name":"nodes","description":"The list of profile nodes. First item is the root node.","type":"array","items":{"$ref":"ProfileNode"}},{"name":"startTime","description":"Profiling start timestamp in microseconds.","type":"number"},{"name":"endTime","description":"Profiling end timestamp in microseconds.","type":"number"},{"name":"samples","description":"Ids of samples top nodes.","optional":true,"type":"array","items":{"type":"integer"}},{"name":"timeDeltas","description":"Time intervals between adjacent samples in microseconds. The first delta is relative to the\\nprofile startTime.","optional":true,"type":"array","items":{"type":"integer"}}]},{"id":"PositionTickInfo","description":"Specifies a number of samples attributed to a certain source position.","type":"object","properties":[{"name":"line","description":"Source line number (1-based).","type":"integer"},{"name":"ticks","description":"Number of samples attributed to the source line.","type":"integer"}]},{"id":"CoverageRange","description":"Coverage data for a source range.","type":"object","properties":[{"name":"startOffset","description":"JavaScript script source offset for the range start.","type":"integer"},{"name":"endOffset","description":"JavaScript script source offset for the range end.","type":"integer"},{"name":"count","description":"Collected execution count of the source range.","type":"integer"}]},{"id":"FunctionCoverage","description":"Coverage data for a JavaScript function.","type":"object","properties":[{"name":"functionName","description":"JavaScript function name.","type":"string"},{"name":"ranges","description":"Source ranges inside the function with coverage data.","type":"array","items":{"$ref":"CoverageRange"}},{"name":"isBlockCoverage","description":"Whether coverage data for this function has block granularity.","type":"boolean"}]},{"id":"ScriptCoverage","description":"Coverage data for a JavaScript script.","type":"object","properties":[{"name":"scriptId","description":"JavaScript script id.","$ref":"Runtime.ScriptId"},{"name":"url","description":"JavaScript script name or url.","type":"string"},{"name":"functions","description":"Functions contained in the script that has coverage data.","type":"array","items":{"$ref":"FunctionCoverage"}}]},{"id":"TypeObject","description":"Describes a type collected during runtime.","experimental":true,"type":"object","properties":[{"name":"name","description":"Name of a type collected with type profiling.","type":"string"}]},{"id":"TypeProfileEntry","description":"Source offset and types for a parameter or return value.","experimental":true,"type":"object","properties":[{"name":"offset","description":"Source offset of the parameter or end of function for return values.","type":"integer"},{"name":"types","description":"The types for this parameter or return value.","type":"array","items":{"$ref":"TypeObject"}}]},{"id":"ScriptTypeProfile","description":"Type profile data collected during runtime for a JavaScript script.","experimental":true,"type":"object","properties":[{"name":"scriptId","description":"JavaScript script id.","$ref":"Runtime.ScriptId"},{"name":"url","description":"JavaScript script name or url.","type":"string"},{"name":"entries","description":"Type profile entries for parameters and return values of the functions in the script.","type":"array","items":{"$ref":"TypeProfileEntry"}}]}],"commands":[{"name":"disable"},{"name":"enable"},{"name":"getBestEffortCoverage","description":"Collect coverage data for the current isolate. The coverage data may be incomplete due to\\ngarbage collection.","returns":[{"name":"result","description":"Coverage data for the current isolate.","type":"array","items":{"$ref":"ScriptCoverage"}}]},{"name":"setSamplingInterval","description":"Changes CPU profiler sampling interval. Must be called before CPU profiles recording started.","parameters":[{"name":"interval","description":"New sampling interval in microseconds.","type":"integer"}]},{"name":"start"},{"name":"startPreciseCoverage","description":"Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code\\ncoverage may be incomplete. Enabling prevents running optimized code and resets execution\\ncounters.","parameters":[{"name":"callCount","description":"Collect accurate call counts beyond simple \'covered\' or \'not covered\'.","optional":true,"type":"boolean"},{"name":"detailed","description":"Collect block-based coverage.","optional":true,"type":"boolean"},{"name":"allowTriggeredUpdates","description":"Allow the backend to send updates on its own initiative","optional":true,"type":"boolean"}],"returns":[{"name":"timestamp","description":"Monotonically increasing time (in seconds) when the coverage update was taken in the backend.","type":"number"}]},{"name":"startTypeProfile","description":"Enable type profile.","experimental":true},{"name":"stop","returns":[{"name":"profile","description":"Recorded profile.","$ref":"Profile"}]},{"name":"stopPreciseCoverage","description":"Disable precise code coverage. Disabling releases unnecessary execution count records and allows\\nexecuting optimized code."},{"name":"stopTypeProfile","description":"Disable type profile. Disabling releases type profile data collected so far.","experimental":true},{"name":"takePreciseCoverage","description":"Collect coverage data for the current isolate, and resets execution counters. Precise code\\ncoverage needs to have started.","returns":[{"name":"result","description":"Coverage data for the current isolate.","type":"array","items":{"$ref":"ScriptCoverage"}},{"name":"timestamp","description":"Monotonically increasing time (in seconds) when the coverage update was taken in the backend.","type":"number"}]},{"name":"takeTypeProfile","description":"Collect type profile.","experimental":true,"returns":[{"name":"result","description":"Type profile for all scripts since startTypeProfile() was turned on.","type":"array","items":{"$ref":"ScriptTypeProfile"}}]}],"events":[{"name":"consoleProfileFinished","parameters":[{"name":"id","type":"string"},{"name":"location","description":"Location of console.profileEnd().","$ref":"Debugger.Location"},{"name":"profile","$ref":"Profile"},{"name":"title","description":"Profile title passed as an argument to console.profile().","optional":true,"type":"string"}]},{"name":"consoleProfileStarted","description":"Sent when new profile recording is started using console.profile() call.","parameters":[{"name":"id","type":"string"},{"name":"location","description":"Location of console.profile().","$ref":"Debugger.Location"},{"name":"title","description":"Profile title passed as an argument to console.profile().","optional":true,"type":"string"}]},{"name":"preciseCoverageDeltaUpdate","description":"Reports coverage delta since the last poll (either from an event like this, or from\\n`takePreciseCoverage` for the current isolate. May only be sent if precise code\\ncoverage has been started. This event can be trigged by the embedder to, for example,\\ntrigger collection of coverage data immediately at a certain point in time.","experimental":true,"parameters":[{"name":"timestamp","description":"Monotonically increasing time (in seconds) when the coverage update was taken in the backend.","type":"number"},{"name":"occasion","description":"Identifier for distinguishing coverage events.","type":"string"},{"name":"result","description":"Coverage data for the current isolate.","type":"array","items":{"$ref":"ScriptCoverage"}}]}]},{"domain":"Runtime","description":"Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects.\\nEvaluation results are returned as mirror object that expose object type, string representation\\nand unique identifier that can be used for further object reference. Original objects are\\nmaintained in memory unless they are either explicitly released or are released along with the\\nother objects in their object group.","types":[{"id":"ScriptId","description":"Unique script identifier.","type":"string"},{"id":"RemoteObjectId","description":"Unique object identifier.","type":"string"},{"id":"UnserializableValue","description":"Primitive value which cannot be JSON-stringified. Includes values `-0`, `NaN`, `Infinity`,\\n`-Infinity`, and bigint literals.","type":"string"},{"id":"RemoteObject","description":"Mirror object referencing original JavaScript object.","type":"object","properties":[{"name":"type","description":"Object type.","type":"string","enum":["object","function","undefined","string","number","boolean","symbol","bigint"]},{"name":"subtype","description":"Object subtype hint. Specified for `object` type values only.\\nNOTE: If you change anything here, make sure to also update\\n`subtype` in `ObjectPreview` and `PropertyPreview` below.","optional":true,"type":"string","enum":["array","null","node","regexp","date","map","set","weakmap","weakset","iterator","generator","error","proxy","promise","typedarray","arraybuffer","dataview","webassemblymemory","wasmvalue"]},{"name":"className","description":"Object class (constructor) name. Specified for `object` type values only.","optional":true,"type":"string"},{"name":"value","description":"Remote object value in case of primitive values or JSON values (if it was requested).","optional":true,"type":"any"},{"name":"unserializableValue","description":"Primitive value which can not be JSON-stringified does not have `value`, but gets this\\nproperty.","optional":true,"$ref":"UnserializableValue"},{"name":"description","description":"String representation of the object.","optional":true,"type":"string"},{"name":"objectId","description":"Unique object identifier (for non-primitive values).","optional":true,"$ref":"RemoteObjectId"},{"name":"preview","description":"Preview containing abbreviated property values. Specified for `object` type values only.","experimental":true,"optional":true,"$ref":"ObjectPreview"},{"name":"customPreview","experimental":true,"optional":true,"$ref":"CustomPreview"}]},{"id":"CustomPreview","experimental":true,"type":"object","properties":[{"name":"header","description":"The JSON-stringified result of formatter.header(object, config) call.\\nIt contains json ML array that represents RemoteObject.","type":"string"},{"name":"bodyGetterId","description":"If formatter returns true as a result of formatter.hasBody call then bodyGetterId will\\ncontain RemoteObjectId for the function that returns result of formatter.body(object, config) call.\\nThe result value is json ML array.","optional":true,"$ref":"RemoteObjectId"}]},{"id":"ObjectPreview","description":"Object containing abbreviated remote object value.","experimental":true,"type":"object","properties":[{"name":"type","description":"Object type.","type":"string","enum":["object","function","undefined","string","number","boolean","symbol","bigint"]},{"name":"subtype","description":"Object subtype hint. Specified for `object` type values only.","optional":true,"type":"string","enum":["array","null","node","regexp","date","map","set","weakmap","weakset","iterator","generator","error","proxy","promise","typedarray","arraybuffer","dataview","webassemblymemory","wasmvalue"]},{"name":"description","description":"String representation of the object.","optional":true,"type":"string"},{"name":"overflow","description":"True iff some of the properties or entries of the original object did not fit.","type":"boolean"},{"name":"properties","description":"List of the properties.","type":"array","items":{"$ref":"PropertyPreview"}},{"name":"entries","description":"List of the entries. Specified for `map` and `set` subtype values only.","optional":true,"type":"array","items":{"$ref":"EntryPreview"}}]},{"id":"PropertyPreview","experimental":true,"type":"object","properties":[{"name":"name","description":"Property name.","type":"string"},{"name":"type","description":"Object type. Accessor means that the property itself is an accessor property.","type":"string","enum":["object","function","undefined","string","number","boolean","symbol","accessor","bigint"]},{"name":"value","description":"User-friendly property value string.","optional":true,"type":"string"},{"name":"valuePreview","description":"Nested value preview.","optional":true,"$ref":"ObjectPreview"},{"name":"subtype","description":"Object subtype hint. Specified for `object` type values only.","optional":true,"type":"string","enum":["array","null","node","regexp","date","map","set","weakmap","weakset","iterator","generator","error","proxy","promise","typedarray","arraybuffer","dataview","webassemblymemory","wasmvalue"]}]},{"id":"EntryPreview","experimental":true,"type":"object","properties":[{"name":"key","description":"Preview of the key. Specified for map-like collection entries.","optional":true,"$ref":"ObjectPreview"},{"name":"value","description":"Preview of the value.","$ref":"ObjectPreview"}]},{"id":"PropertyDescriptor","description":"Object property descriptor.","type":"object","properties":[{"name":"name","description":"Property name or symbol description.","type":"string"},{"name":"value","description":"The value associated with the property.","optional":true,"$ref":"RemoteObject"},{"name":"writable","description":"True if the value associated with the property may be changed (data descriptors only).","optional":true,"type":"boolean"},{"name":"get","description":"A function which serves as a getter for the property, or `undefined` if there is no getter\\n(accessor descriptors only).","optional":true,"$ref":"RemoteObject"},{"name":"set","description":"A function which serves as a setter for the property, or `undefined` if there is no setter\\n(accessor descriptors only).","optional":true,"$ref":"RemoteObject"},{"name":"configurable","description":"True if the type of this property descriptor may be changed and if the property may be\\ndeleted from the corresponding object.","type":"boolean"},{"name":"enumerable","description":"True if this property shows up during enumeration of the properties on the corresponding\\nobject.","type":"boolean"},{"name":"wasThrown","description":"True if the result was thrown during the evaluation.","optional":true,"type":"boolean"},{"name":"isOwn","description":"True if the property is owned for the object.","optional":true,"type":"boolean"},{"name":"symbol","description":"Property symbol object, if the property is of the `symbol` type.","optional":true,"$ref":"RemoteObject"}]},{"id":"InternalPropertyDescriptor","description":"Object internal property descriptor. This property isn\'t normally visible in JavaScript code.","type":"object","properties":[{"name":"name","description":"Conventional property name.","type":"string"},{"name":"value","description":"The value associated with the property.","optional":true,"$ref":"RemoteObject"}]},{"id":"PrivatePropertyDescriptor","description":"Object private field descriptor.","experimental":true,"type":"object","properties":[{"name":"name","description":"Private property name.","type":"string"},{"name":"value","description":"The value associated with the private property.","optional":true,"$ref":"RemoteObject"},{"name":"get","description":"A function which serves as a getter for the private property,\\nor `undefined` if there is no getter (accessor descriptors only).","optional":true,"$ref":"RemoteObject"},{"name":"set","description":"A function which serves as a setter for the private property,\\nor `undefined` if there is no setter (accessor descriptors only).","optional":true,"$ref":"RemoteObject"}]},{"id":"CallArgument","description":"Represents function call argument. Either remote object id `objectId`, primitive `value`,\\nunserializable primitive value or neither of (for undefined) them should be specified.","type":"object","properties":[{"name":"value","description":"Primitive value or serializable javascript object.","optional":true,"type":"any"},{"name":"unserializableValue","description":"Primitive value which can not be JSON-stringified.","optional":true,"$ref":"UnserializableValue"},{"name":"objectId","description":"Remote object handle.","optional":true,"$ref":"RemoteObjectId"}]},{"id":"ExecutionContextId","description":"Id of an execution context.","type":"integer"},{"id":"ExecutionContextDescription","description":"Description of an isolated world.","type":"object","properties":[{"name":"id","description":"Unique id of the execution context. It can be used to specify in which execution context\\nscript evaluation should be performed.","$ref":"ExecutionContextId"},{"name":"origin","description":"Execution context origin.","type":"string"},{"name":"name","description":"Human readable name describing given context.","type":"string"},{"name":"uniqueId","description":"A system-unique execution context identifier. Unlike the id, this is unique across\\nmultiple processes, so can be reliably used to identify specific context while backend\\nperforms a cross-process navigation.","experimental":true,"type":"string"},{"name":"auxData","description":"Embedder-specific auxiliary data.","optional":true,"type":"object"}]},{"id":"ExceptionDetails","description":"Detailed information about exception (or error) that was thrown during script compilation or\\nexecution.","type":"object","properties":[{"name":"exceptionId","description":"Exception id.","type":"integer"},{"name":"text","description":"Exception text, which should be used together with exception object when available.","type":"string"},{"name":"lineNumber","description":"Line number of the exception location (0-based).","type":"integer"},{"name":"columnNumber","description":"Column number of the exception location (0-based).","type":"integer"},{"name":"scriptId","description":"Script ID of the exception location.","optional":true,"$ref":"ScriptId"},{"name":"url","description":"URL of the exception location, to be used when the script was not reported.","optional":true,"type":"string"},{"name":"stackTrace","description":"JavaScript stack trace if available.","optional":true,"$ref":"StackTrace"},{"name":"exception","description":"Exception object if available.","optional":true,"$ref":"RemoteObject"},{"name":"executionContextId","description":"Identifier of the context where exception happened.","optional":true,"$ref":"ExecutionContextId"},{"name":"exceptionMetaData","description":"Dictionary with entries of meta data that the client associated\\nwith this exception, such as information about associated network\\nrequests, etc.","experimental":true,"optional":true,"type":"object"}]},{"id":"Timestamp","description":"Number of milliseconds since epoch.","type":"number"},{"id":"TimeDelta","description":"Number of milliseconds.","type":"number"},{"id":"CallFrame","description":"Stack entry for runtime errors and assertions.","type":"object","properties":[{"name":"functionName","description":"JavaScript function name.","type":"string"},{"name":"scriptId","description":"JavaScript script id.","$ref":"ScriptId"},{"name":"url","description":"JavaScript script name or url.","type":"string"},{"name":"lineNumber","description":"JavaScript script line number (0-based).","type":"integer"},{"name":"columnNumber","description":"JavaScript script column number (0-based).","type":"integer"}]},{"id":"StackTrace","description":"Call frames for assertions or error messages.","type":"object","properties":[{"name":"description","description":"String label of this stack trace. For async traces this may be a name of the function that\\ninitiated the async call.","optional":true,"type":"string"},{"name":"callFrames","description":"JavaScript function name.","type":"array","items":{"$ref":"CallFrame"}},{"name":"parent","description":"Asynchronous JavaScript stack trace that preceded this stack, if available.","optional":true,"$ref":"StackTrace"},{"name":"parentId","description":"Asynchronous JavaScript stack trace that preceded this stack, if available.","experimental":true,"optional":true,"$ref":"StackTraceId"}]},{"id":"UniqueDebuggerId","description":"Unique identifier of current debugger.","experimental":true,"type":"string"},{"id":"StackTraceId","description":"If `debuggerId` is set stack trace comes from another debugger and can be resolved there. This\\nallows to track cross-debugger calls. See `Runtime.StackTrace` and `Debugger.paused` for usages.","experimental":true,"type":"object","properties":[{"name":"id","type":"string"},{"name":"debuggerId","optional":true,"$ref":"UniqueDebuggerId"}]}],"commands":[{"name":"awaitPromise","description":"Add handler to promise with given promise object id.","parameters":[{"name":"promiseObjectId","description":"Identifier of the promise.","$ref":"RemoteObjectId"},{"name":"returnByValue","description":"Whether the result is expected to be a JSON object that should be sent by value.","optional":true,"type":"boolean"},{"name":"generatePreview","description":"Whether preview should be generated for the result.","optional":true,"type":"boolean"}],"returns":[{"name":"result","description":"Promise result. Will contain rejected value if promise was rejected.","$ref":"RemoteObject"},{"name":"exceptionDetails","description":"Exception details if stack strace is available.","optional":true,"$ref":"ExceptionDetails"}]},{"name":"callFunctionOn","description":"Calls function with given declaration on the given object. Object group of the result is\\ninherited from the target object.","parameters":[{"name":"functionDeclaration","description":"Declaration of the function to call.","type":"string"},{"name":"objectId","description":"Identifier of the object to call function on. Either objectId or executionContextId should\\nbe specified.","optional":true,"$ref":"RemoteObjectId"},{"name":"arguments","description":"Call arguments. All call arguments must belong to the same JavaScript world as the target\\nobject.","optional":true,"type":"array","items":{"$ref":"CallArgument"}},{"name":"silent","description":"In silent mode exceptions thrown during evaluation are not reported and do not pause\\nexecution. Overrides `setPauseOnException` state.","optional":true,"type":"boolean"},{"name":"returnByValue","description":"Whether the result is expected to be a JSON object which should be sent by value.","optional":true,"type":"boolean"},{"name":"generatePreview","description":"Whether preview should be generated for the result.","experimental":true,"optional":true,"type":"boolean"},{"name":"userGesture","description":"Whether execution should be treated as initiated by user in the UI.","optional":true,"type":"boolean"},{"name":"awaitPromise","description":"Whether execution should `await` for resulting value and return once awaited promise is\\nresolved.","optional":true,"type":"boolean"},{"name":"executionContextId","description":"Specifies execution context which global object will be used to call function on. Either\\nexecutionContextId or objectId should be specified.","optional":true,"$ref":"ExecutionContextId"},{"name":"objectGroup","description":"Symbolic group name that can be used to release multiple objects. If objectGroup is not\\nspecified and objectId is, objectGroup will be inherited from object.","optional":true,"type":"string"},{"name":"throwOnSideEffect","description":"Whether to throw an exception if side effect cannot be ruled out during evaluation.","experimental":true,"optional":true,"type":"boolean"}],"returns":[{"name":"result","description":"Call result.","$ref":"RemoteObject"},{"name":"exceptionDetails","description":"Exception details.","optional":true,"$ref":"ExceptionDetails"}]},{"name":"compileScript","description":"Compiles expression.","parameters":[{"name":"expression","description":"Expression to compile.","type":"string"},{"name":"sourceURL","description":"Source url to be set for the script.","type":"string"},{"name":"persistScript","description":"Specifies whether the compiled script should be persisted.","type":"boolean"},{"name":"executionContextId","description":"Specifies in which execution context to perform script run. If the parameter is omitted the\\nevaluation will be performed in the context of the inspected page.","optional":true,"$ref":"ExecutionContextId"}],"returns":[{"name":"scriptId","description":"Id of the script.","optional":true,"$ref":"ScriptId"},{"name":"exceptionDetails","description":"Exception details.","optional":true,"$ref":"ExceptionDetails"}]},{"name":"disable","description":"Disables reporting of execution contexts creation."},{"name":"discardConsoleEntries","description":"Discards collected exceptions and console API calls."},{"name":"enable","description":"Enables reporting of execution contexts creation by means of `executionContextCreated` event.\\nWhen the reporting gets enabled the event will be sent immediately for each existing execution\\ncontext."},{"name":"evaluate","description":"Evaluates expression on global object.","parameters":[{"name":"expression","description":"Expression to evaluate.","type":"string"},{"name":"objectGroup","description":"Symbolic group name that can be used to release multiple objects.","optional":true,"type":"string"},{"name":"includeCommandLineAPI","description":"Determines whether Command Line API should be available during the evaluation.","optional":true,"type":"boolean"},{"name":"silent","description":"In silent mode exceptions thrown during evaluation are not reported and do not pause\\nexecution. Overrides `setPauseOnException` state.","optional":true,"type":"boolean"},{"name":"contextId","description":"Specifies in which execution context to perform evaluation. If the parameter is omitted the\\nevaluation will be performed in the context of the inspected page.\\nThis is mutually exclusive with `uniqueContextId`, which offers an\\nalternative way to identify the execution context that is more reliable\\nin a multi-process environment.","optional":true,"$ref":"ExecutionContextId"},{"name":"returnByValue","description":"Whether the result is expected to be a JSON object that should be sent by value.","optional":true,"type":"boolean"},{"name":"generatePreview","description":"Whether preview should be generated for the result.","experimental":true,"optional":true,"type":"boolean"},{"name":"userGesture","description":"Whether execution should be treated as initiated by user in the UI.","optional":true,"type":"boolean"},{"name":"awaitPromise","description":"Whether execution should `await` for resulting value and return once awaited promise is\\nresolved.","optional":true,"type":"boolean"},{"name":"throwOnSideEffect","description":"Whether to throw an exception if side effect cannot be ruled out during evaluation.\\nThis implies `disableBreaks` below.","experimental":true,"optional":true,"type":"boolean"},{"name":"timeout","description":"Terminate execution after timing out (number of milliseconds).","experimental":true,"optional":true,"$ref":"TimeDelta"},{"name":"disableBreaks","description":"Disable breakpoints during execution.","experimental":true,"optional":true,"type":"boolean"},{"name":"replMode","description":"Setting this flag to true enables `let` re-declaration and top-level `await`.\\nNote that `let` variables can only be re-declared if they originate from\\n`replMode` themselves.","experimental":true,"optional":true,"type":"boolean"},{"name":"allowUnsafeEvalBlockedByCSP","description":"The Content Security Policy (CSP) for the target might block \'unsafe-eval\'\\nwhich includes eval(), Function(), setTimeout() and setInterval()\\nwhen called with non-callable arguments. This flag bypasses CSP for this\\nevaluation and allows unsafe-eval. Defaults to true.","experimental":true,"optional":true,"type":"boolean"},{"name":"uniqueContextId","description":"An alternative way to specify the execution context to evaluate in.\\nCompared to contextId that may be reused across processes, this is guaranteed to be\\nsystem-unique, so it can be used to prevent accidental evaluation of the expression\\nin context different than intended (e.g. as a result of navigation across process\\nboundaries).\\nThis is mutually exclusive with `contextId`.","experimental":true,"optional":true,"type":"string"}],"returns":[{"name":"result","description":"Evaluation result.","$ref":"RemoteObject"},{"name":"exceptionDetails","description":"Exception details.","optional":true,"$ref":"ExceptionDetails"}]},{"name":"getIsolateId","description":"Returns the isolate id.","experimental":true,"returns":[{"name":"id","description":"The isolate id.","type":"string"}]},{"name":"getHeapUsage","description":"Returns the JavaScript heap usage.\\nIt is the total usage of the corresponding isolate not scoped to a particular Runtime.","experimental":true,"returns":[{"name":"usedSize","description":"Used heap size in bytes.","type":"number"},{"name":"totalSize","description":"Allocated heap size in bytes.","type":"number"}]},{"name":"getProperties","description":"Returns properties of a given object. Object group of the result is inherited from the target\\nobject.","parameters":[{"name":"objectId","description":"Identifier of the object to return properties for.","$ref":"RemoteObjectId"},{"name":"ownProperties","description":"If true, returns properties belonging only to the element itself, not to its prototype\\nchain.","optional":true,"type":"boolean"},{"name":"accessorPropertiesOnly","description":"If true, returns accessor properties (with getter/setter) only; internal properties are not\\nreturned either.","experimental":true,"optional":true,"type":"boolean"},{"name":"generatePreview","description":"Whether preview should be generated for the results.","experimental":true,"optional":true,"type":"boolean"},{"name":"nonIndexedPropertiesOnly","description":"If true, returns non-indexed properties only.","experimental":true,"optional":true,"type":"boolean"}],"returns":[{"name":"result","description":"Object properties.","type":"array","items":{"$ref":"PropertyDescriptor"}},{"name":"internalProperties","description":"Internal object properties (only of the element itself).","optional":true,"type":"array","items":{"$ref":"InternalPropertyDescriptor"}},{"name":"privateProperties","description":"Object private properties.","experimental":true,"optional":true,"type":"array","items":{"$ref":"PrivatePropertyDescriptor"}},{"name":"exceptionDetails","description":"Exception details.","optional":true,"$ref":"ExceptionDetails"}]},{"name":"globalLexicalScopeNames","description":"Returns all let, const and class variables from global scope.","parameters":[{"name":"executionContextId","description":"Specifies in which execution context to lookup global scope variables.","optional":true,"$ref":"ExecutionContextId"}],"returns":[{"name":"names","type":"array","items":{"type":"string"}}]},{"name":"queryObjects","parameters":[{"name":"prototypeObjectId","description":"Identifier of the prototype to return objects for.","$ref":"RemoteObjectId"},{"name":"objectGroup","description":"Symbolic group name that can be used to release the results.","optional":true,"type":"string"}],"returns":[{"name":"objects","description":"Array with objects.","$ref":"RemoteObject"}]},{"name":"releaseObject","description":"Releases remote object with given id.","parameters":[{"name":"objectId","description":"Identifier of the object to release.","$ref":"RemoteObjectId"}]},{"name":"releaseObjectGroup","description":"Releases all remote objects that belong to a given group.","parameters":[{"name":"objectGroup","description":"Symbolic object group name.","type":"string"}]},{"name":"runIfWaitingForDebugger","description":"Tells inspected instance to run if it was waiting for debugger to attach."},{"name":"runScript","description":"Runs script with given id in a given context.","parameters":[{"name":"scriptId","description":"Id of the script to run.","$ref":"ScriptId"},{"name":"executionContextId","description":"Specifies in which execution context to perform script run. If the parameter is omitted the\\nevaluation will be performed in the context of the inspected page.","optional":true,"$ref":"ExecutionContextId"},{"name":"objectGroup","description":"Symbolic group name that can be used to release multiple objects.","optional":true,"type":"string"},{"name":"silent","description":"In silent mode exceptions thrown during evaluation are not reported and do not pause\\nexecution. Overrides `setPauseOnException` state.","optional":true,"type":"boolean"},{"name":"includeCommandLineAPI","description":"Determines whether Command Line API should be available during the evaluation.","optional":true,"type":"boolean"},{"name":"returnByValue","description":"Whether the result is expected to be a JSON object which should be sent by value.","optional":true,"type":"boolean"},{"name":"generatePreview","description":"Whether preview should be generated for the result.","optional":true,"type":"boolean"},{"name":"awaitPromise","description":"Whether execution should `await` for resulting value and return once awaited promise is\\nresolved.","optional":true,"type":"boolean"}],"returns":[{"name":"result","description":"Run result.","$ref":"RemoteObject"},{"name":"exceptionDetails","description":"Exception details.","optional":true,"$ref":"ExceptionDetails"}]},{"name":"setAsyncCallStackDepth","description":"Enables or disables async call stacks tracking.","redirect":"Debugger","parameters":[{"name":"maxDepth","description":"Maximum depth of async call stacks. Setting to `0` will effectively disable collecting async\\ncall stacks (default).","type":"integer"}]},{"name":"setCustomObjectFormatterEnabled","experimental":true,"parameters":[{"name":"enabled","type":"boolean"}]},{"name":"setMaxCallStackSizeToCapture","experimental":true,"parameters":[{"name":"size","type":"integer"}]},{"name":"terminateExecution","description":"Terminate current or next JavaScript execution.\\nWill cancel the termination when the outer-most script execution ends.","experimental":true},{"name":"addBinding","description":"If executionContextId is empty, adds binding with the given name on the\\nglobal objects of all inspected contexts, including those created later,\\nbindings survive reloads.\\nBinding function takes exactly one argument, this argument should be string,\\nin case of any other input, function throws an exception.\\nEach binding function call produces Runtime.bindingCalled notification.","experimental":true,"parameters":[{"name":"name","type":"string"},{"name":"executionContextId","description":"If specified, the binding would only be exposed to the specified\\nexecution context. If omitted and `executionContextName` is not set,\\nthe binding is exposed to all execution contexts of the target.\\nThis parameter is mutually exclusive with `executionContextName`.\\nDeprecated in favor of `executionContextName` due to an unclear use case\\nand bugs in implementation (crbug.com/1169639). `executionContextId` will be\\nremoved in the future.","deprecated":true,"optional":true,"$ref":"ExecutionContextId"},{"name":"executionContextName","description":"If specified, the binding is exposed to the executionContext with\\nmatching name, even for contexts created after the binding is added.\\nSee also `ExecutionContext.name` and `worldName` parameter to\\n`Page.addScriptToEvaluateOnNewDocument`.\\nThis parameter is mutually exclusive with `executionContextId`.","experimental":true,"optional":true,"type":"string"}]},{"name":"removeBinding","description":"This method does not remove binding function from global object but\\nunsubscribes current runtime agent from Runtime.bindingCalled notifications.","experimental":true,"parameters":[{"name":"name","type":"string"}]}],"events":[{"name":"bindingCalled","description":"Notification is issued every time when binding is called.","experimental":true,"parameters":[{"name":"name","type":"string"},{"name":"payload","type":"string"},{"name":"executionContextId","description":"Identifier of the context where the call was made.","$ref":"ExecutionContextId"}]},{"name":"consoleAPICalled","description":"Issued when console API was called.","parameters":[{"name":"type","description":"Type of the call.","type":"string","enum":["log","debug","info","error","warning","dir","dirxml","table","trace","clear","startGroup","startGroupCollapsed","endGroup","assert","profile","profileEnd","count","timeEnd"]},{"name":"args","description":"Call arguments.","type":"array","items":{"$ref":"RemoteObject"}},{"name":"executionContextId","description":"Identifier of the context where the call was made.","$ref":"ExecutionContextId"},{"name":"timestamp","description":"Call timestamp.","$ref":"Timestamp"},{"name":"stackTrace","description":"Stack trace captured when the call was made. The async stack chain is automatically reported for\\nthe following call types: `assert`, `error`, `trace`, `warning`. For other types the async call\\nchain can be retrieved using `Debugger.getStackTrace` and `stackTrace.parentId` field.","optional":true,"$ref":"StackTrace"},{"name":"context","description":"Console context descriptor for calls on non-default console context (not console.*):\\n\'anonymous#unique-logger-id\' for call on unnamed context, \'name#unique-logger-id\' for call\\non named context.","experimental":true,"optional":true,"type":"string"}]},{"name":"exceptionRevoked","description":"Issued when unhandled exception was revoked.","parameters":[{"name":"reason","description":"Reason describing why exception was revoked.","type":"string"},{"name":"exceptionId","description":"The id of revoked exception, as reported in `exceptionThrown`.","type":"integer"}]},{"name":"exceptionThrown","description":"Issued when exception was thrown and unhandled.","parameters":[{"name":"timestamp","description":"Timestamp of the exception.","$ref":"Timestamp"},{"name":"exceptionDetails","$ref":"ExceptionDetails"}]},{"name":"executionContextCreated","description":"Issued when new execution context is created.","parameters":[{"name":"context","description":"A newly created execution context.","$ref":"ExecutionContextDescription"}]},{"name":"executionContextDestroyed","description":"Issued when execution context is destroyed.","parameters":[{"name":"executionContextId","description":"Id of the destroyed context","$ref":"ExecutionContextId"}]},{"name":"executionContextsCleared","description":"Issued when all executionContexts were cleared in browser"},{"name":"inspectRequested","description":"Issued when object should be inspected (for example, as a result of inspect() command line API\\ncall).","parameters":[{"name":"object","$ref":"RemoteObject"},{"name":"hints","type":"object"},{"name":"executionContextId","description":"Identifier of the context where the call was made.","experimental":true,"optional":true,"$ref":"ExecutionContextId"}]}]},{"domain":"Schema","description":"This domain is deprecated.","deprecated":true,"types":[{"id":"Domain","description":"Description of the protocol domain.","type":"object","properties":[{"name":"name","description":"Domain name.","type":"string"},{"name":"version","description":"Domain version.","type":"string"}]}],"commands":[{"name":"getDomains","description":"Returns supported domains.","returns":[{"name":"domains","description":"List of supported domains.","type":"array","items":{"$ref":"Domain"}}]}]}]}');
        } }, t = {};
        function r(n2) {
          var i = t[n2];
          if (void 0 !== i)
            return i.exports;
          var o = t[n2] = { id: n2, loaded: false, exports: {} };
          return e[n2].call(o.exports, o, o.exports, r), o.loaded = true, o.exports;
        }
        r.g = function() {
          if ("object" == typeof globalThis)
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if ("object" == typeof fakeWindow)
              return fakeWindow;
          }
        }(), r.nmd = (e2) => (e2.paths = [], e2.children || (e2.children = []), e2), r(6124);
        var n = r(6010);
        module.exports.CDP = n;
      })();
    }
  });

  // service-worker.ts
  init_window_shim();
  var import_chrome_remote_interface = __toESM(require_chrome_remote_interface(), 1);
  console.log(
    "This prints to the console of the service worker (background script)"
  );
  var getRemoteTargets = async () => {
    const res = await fetch("http://localhost:9222/json");
    return await res.json();
  };
  var websocketDebuggerURL;
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    if (request.type === "getTargets") {
      getRemoteTargets().then((targets) => {
        const actualTargets = [];
        for (let t of targets) {
          if (t.type === "page") {
            actualTargets.push(t);
          }
        }
        sendResponse({
          type: "listOfTargets",
          data: actualTargets
        });
        return true;
      }).catch((e) => {
        console.log(e);
        sendResponse({
          type: "error",
          data: e
        });
        return true;
      });
    } else if (request.type === "attachToTarget") {
      console.log(request.target);
      websocketDebuggerURL = request.target.webSocketDebuggerUrl;
      connectToClient(websocketDebuggerURL).then(() => {
        console.log("we successfully connected");
      });
    }
    return true;
  });
  async function connectToClient(websocket) {
    let client;
    try {
      client = await import_chrome_remote_interface.default.CDP({
        target: websocket,
        local: true
      });
      console.log(client);
      const { Network, Page } = client;
      Network.requestWillBeSent((params) => {
        console.log(params.request.url);
      });
      await Network.enable();
      await Page.enable();
      await Page.navigate({ url: "https://github.com" });
      await Page.loadEventFired();
    } catch (err) {
      console.error(err);
    } finally {
      if (client) {
        await client.close();
      }
    }
  }
})();
/*! Bundled license information:

chrome-remote-interface/chrome-remote-interface.js:
  (*! https://mths.be/punycode v1.3.2 by @mathias *)
*/
