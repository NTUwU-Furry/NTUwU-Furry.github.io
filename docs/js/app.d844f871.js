(function () {
  "use strict";
  var e = {
      1441: function (e, t, n) {
        var o = n(5130),
          r = n(6768);
        function a(e, t, n, o, a, i) {
          const u = (0, r.g2)("NavbarSection"),
            l = (0, r.g2)("router-view"),
            s = (0, r.g2)("FooterSection");
          return (
            (0, r.uX)(),
            (0, r.CE)(
              r.FK,
              null,
              [(0, r.bF)(u), (0, r.bF)(l), (0, r.bF)(s)],
              64
            )
          );
        }
        var i = n(4232);
        const u = { id: "navbar" },
          l = { id: "main-navbar" },
          s = ["src"],
          c = { id: "menu" },
          f = { id: "sub-navbar" },
          d = { class: "font-size" },
          m = ["id", "value"],
          p = ["for"];
        function v(e, t, n, a, v, h) {
          const b = (0, r.g2)("router-link");
          return (
            (0, r.uX)(),
            (0, r.CE)("nav", u, [
              (0, r.Lk)("section", l, [
                (0, r.bF)(
                  b,
                  { to: "/" },
                  {
                    default: (0, r.k6)(() => [
                      (0, r.Lk)("img", { src: e.logo, alt: "" }, null, 8, s),
                    ]),
                    _: 1,
                  }
                ),
                (0, r.Lk)("ul", c, [
                  (0, r.bF)(
                    b,
                    { to: "/" },
                    {
                      default: (0, r.k6)(() => [
                        (0, r.eW)((0, i.v_)(e.$t("navbar.home")), 1),
                      ]),
                      _: 1,
                    }
                  ),
                  (0, r.bF)(
                    b,
                    { to: "/about" },
                    {
                      default: (0, r.k6)(() => [
                        (0, r.eW)((0, i.v_)(e.$t("navbar.about")), 1),
                      ]),
                      _: 1,
                    }
                  ),
                  (0, r.bF)(
                    b,
                    { to: "/product" },
                    {
                      default: (0, r.k6)(() => [
                        (0, r.eW)((0, i.v_)(e.$t("navbar.product")), 1),
                      ]),
                      _: 1,
                    }
                  ),
                  e.getLoginInfo
                    ? ((0, r.uX)(),
                      (0, r.CE)(
                        r.FK,
                        { key: 0 },
                        [
                          (0, r.bF)(
                            b,
                            { to: "/dashboard" },
                            {
                              default: (0, r.k6)(() => [
                                (0, r.eW)(
                                  (0, i.v_)(e.$t("navbar.dashboard")),
                                  1
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          (0, r.bF)(
                            b,
                            { to: "/logout" },
                            {
                              default: (0, r.k6)(() => [
                                (0, r.eW)((0, i.v_)(e.$t("navbar.logout")), 1),
                              ]),
                              _: 1,
                            }
                          ),
                        ],
                        64
                      ))
                    : ((0, r.uX)(),
                      (0, r.Wv)(
                        b,
                        { key: 1, to: "/login" },
                        {
                          default: (0, r.k6)(() => [
                            (0, r.eW)((0, i.v_)(e.$t("navbar.login")), 1),
                          ]),
                          _: 1,
                        }
                      )),
                ]),
                (0, r.Lk)("i", {
                  class: "fa fa-bars menu-button",
                  onClick:
                    t[0] ||
                    (t[0] = (...t) => e.handleMenu && e.handleMenu(...t)),
                }),
              ]),
              (0, r.Lk)("section", f, [
                (0, r.Lk)("section", d, [
                  t[2] || (t[2] = (0, r.Lk)("div", null, "字級：", -1)),
                  (0, r.Lk)("ul", null, [
                    ((0, r.uX)(!0),
                    (0, r.CE)(
                      r.FK,
                      null,
                      (0, r.pI)(
                        e.fontSizes,
                        (n, a) => (
                          (0, r.uX)(),
                          (0, r.CE)("li", { key: a }, [
                            (0, r.bo)(
                              (0, r.Lk)(
                                "input",
                                {
                                  type: "radio",
                                  "onUpdate:modelValue":
                                    t[1] || (t[1] = (t) => (e.fontSize = t)),
                                  id: "font-size-" + a,
                                  value: n.label,
                                },
                                null,
                                8,
                                m
                              ),
                              [[o.XL, e.fontSize]]
                            ),
                            (0, r.Lk)(
                              "label",
                              { for: "font-size-" + a },
                              (0, i.v_)(e.$t("navbar.fontSize." + n.label)),
                              9,
                              p
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ])
          );
        }
        n(8992), n(2577);
        var h = n(4570),
          b = n.n(h),
          g = n.p + "img/logo.07cfedde.svg";
        const k = b();
        var y = (0, r.pM)({
            name: "NavbarSection",
            data() {
              return {
                logo: g,
                fontSize: "medium",
                fontSizes: [
                  { label: "small", size: "75%" },
                  { label: "medium", size: "100%" },
                  { label: "big", size: "125%" },
                ],
              };
            },
            computed: {
              getLoginInfo() {
                return this.$store.getters["user"];
              },
            },
            methods: {
              applyFontSize(e) {
                document.documentElement.style.fontSize =
                  this.fontSizes.find((t) => t.label === e)?.size || "100%";
              },
              handleMenu() {
                document.querySelector("#menu")?.classList.toggle("open");
              },
            },
            mounted() {
              const e = k.get("fontSize") || "medium";
              (this.fontSize = e), this.applyFontSize(e);
            },
            watch: {
              fontSize(e) {
                k.set("fontSize", e, "7d"), this.applyFontSize(e);
              },
            },
          }),
          w = n(1241);
        const L = (0, w.A)(y, [
          ["render", v],
          ["__scopeId", "data-v-9ef2a51c"],
        ]);
        var _ = L;
        const E = { id: "footer" },
          S = { id: "main-footer" },
          z = ["href", "innerHTML"],
          C = { id: "sub-footer" };
        function F(e, t, n, o, a, u) {
          return (
            (0, r.uX)(),
            (0, r.CE)("footer", E, [
              (0, r.Lk)("section", S, [
                ((0, r.uX)(!0),
                (0, r.CE)(
                  r.FK,
                  null,
                  (0, r.pI)(
                    e.footers,
                    (t, n) => (
                      (0, r.uX)(),
                      (0, r.CE)("div", { key: n }, [
                        (0, r.Lk)(
                          "h3",
                          null,
                          (0, i.v_)(e.$t("footer." + t.title)),
                          1
                        ),
                        (0, r.Lk)("ul", null, [
                          ((0, r.uX)(!0),
                          (0, r.CE)(
                            r.FK,
                            null,
                            (0, r.pI)(
                              t.links,
                              (e, t) => (
                                (0, r.uX)(),
                                (0, r.CE)("li", { key: t }, [
                                  (0, r.Lk)(
                                    "a",
                                    {
                                      href: e.href,
                                      innerHTML: e.name,
                                      target: "_blank",
                                      title: "另開新視窗",
                                    },
                                    null,
                                    8,
                                    z
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                      ])
                    )
                  ),
                  128
                )),
                t[0] ||
                  (t[0] = (0, r.Lk)(
                    "div",
                    { class: "info" },
                    [
                      (0, r.Lk)("h3", null, "地址"),
                      (0, r.Lk)(
                        "p",
                        { class: "address" },
                        "10617台北市大安區羅斯福路四段1號"
                      ),
                      (0, r.Lk)("div", { class: "map" }, [
                        (0, r.Lk)("iframe", {
                          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28921.158758621583!2d121.50924813054208!3d25.02915808041867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a989fe322ea9%3A0x21750404ee1d7f66!2z5ZyL56uL6Ie654Gj5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1732971834244!5m2!1szh-TW!2stw",
                          loading: "lazy",
                          referrerpolicy: "no-referrer-when-downgrade",
                        }),
                      ]),
                    ],
                    -1
                  )),
              ]),
              (0, r.Lk)("section", C, [
                (0, r.Lk)(
                  "p",
                  null,
                  (0, i.v_)(e.$t("footer.copyright", { year: e.getYear })),
                  1
                ),
              ]),
            ])
          );
        }
        var A = (0, r.pM)({
          name: "FooterSection",
          data() {
            return {
              footers: [
                {
                  title: "friend",
                  links: [
                    {
                      name: "成大獸文化社 | 臉書",
                      href: "https://www.facebook.com/NCKUFurry/",
                    },
                    {
                      name: "雲科大獸文化社 | 臉書",
                      href: "https://www.facebook.com/profile.php?id=61567748815733",
                    },
                  ],
                },
                {
                  title: "media",
                  links: [
                    {
                      name: "Facebook",
                      href: "https://www.facebook.com/NTUFurry/?locale=zh_TW",
                    },
                    { name: "Youtube", href: "#" },
                    {
                      name: "Ingstram",
                      href: "https://www.instagram.com/furriesatntu/",
                    },
                    { name: "Twitter", href: "https://x.com/NTUFurries" },
                    { name: "Mail", href: "mailto:ntufurry@gmail.com" },
                  ],
                },
                { title: "operation", links: [] },
              ],
            };
          },
          computed: {
            getYear() {
              return new Date().getFullYear();
            },
          },
        });
        const T = (0, w.A)(A, [
          ["render", F],
          ["__scopeId", "data-v-f296fbe4"],
        ]);
        var X = T,
          x = (0, r.pM)({
            name: "App",
            components: { NavbarSection: _, FooterSection: X },
          });
        const O = (0, w.A)(x, [["render", a]]);
        var N = O,
          M = n(1387);
        const W = { id: "home" },
          $ = { class: "event" },
          j = { key: 0, class: "event-list" },
          I = { key: 1 };
        function D(e, t, n, o, a, i) {
          const u = (0, r.g2)("EventBox");
          return (
            (0, r.uX)(),
            (0, r.CE)("section", W, [
              t[1] ||
                (t[1] = (0, r.Lk)(
                  "div",
                  { class: "intro" },
                  [
                    (0, r.Lk)("h2", null, "社團簡介"),
                    (0, r.Lk)("p", null, [
                      (0, r.eW)(" 本社致力於塑造一個尊重、友善、包容的空間，"),
                      (0, r.Lk)("br"),
                      (0, r.eW)(
                        " 旨在讓對獸文化有興趣的個體能夠自由地分享經驗、聚會聯絡，"
                      ),
                      (0, r.Lk)("br"),
                      (0, r.eW)(" 並期許以通俗易懂的方式向大眾介紹獸文化 "),
                    ]),
                  ],
                  -1
                )),
              (0, r.Lk)("div", $, [
                t[0] || (t[0] = (0, r.Lk)("h2", null, "近期活動", -1)),
                e.latestEvents.length > 0
                  ? ((0, r.uX)(),
                    (0, r.CE)("section", j, [
                      ((0, r.uX)(!0),
                      (0, r.CE)(
                        r.FK,
                        null,
                        (0, r.pI)(
                          e.latestEvents,
                          (e, t) => (
                            (0, r.uX)(),
                            (0, r.Wv)(u, { key: t, event: e }, null, 8, [
                              "event",
                            ])
                          )
                        ),
                        128
                      )),
                    ]))
                  : ((0, r.uX)(), (0, r.CE)("p", I, "無")),
              ]),
            ])
          );
        }
        var K = n(8056),
          P = n(4373),
          B = (0, r.pM)({
            name: "HomeView",
            components: { EventBox: K.A },
            data() {
              return { latestEvents: [] };
            },
            methods: {
              async getLatestEvents() {
                const e = await P.A.get(
                  "https://www.googleapis.com/calendar/v3/calendars/af5e41829a41e0d4a57af5e2fffc8fda2483d0c4863aad147e4c15bc6996b731@group.calendar.google.com/events?key=AIzaSyC1qeKLryVxGiWj04p7GJzS9rWsX-L8k6I"
                );
                console.debug(e.data.items);
              },
            },
            mounted() {
              this.getLatestEvents();
            },
          });
        const H = (0, w.A)(B, [
          ["render", D],
          ["__scopeId", "data-v-fdc02e7c"],
        ]);
        var U = H;
        const q = [
            {
              path: "/",
              name: "home",
              component: U,
              meta: { title: "台大獸文化交流社 | 首頁", KeepAlive: !0 },
            },
            {
              path: "/about",
              name: "about",
              component: () => n.e(834).then(n.bind(n, 1834)),
              meta: { title: "台大獸文化交流社 | 關於我們", KeepAlive: !0 },
            },
          ],
          Y = (0, M.aE)({ history: (0, M.LA)("/"), routes: q });
        var G = Y,
          J = n(782),
          V = (0, J.y$)({
            state: { user: null },
            getters: {
              user(e) {
                return e.user;
              },
            },
            mutations: {},
            actions: {},
            modules: {},
          }),
          Z = n(5931),
          Q = JSON.parse(
            '{"navbar":{"home":"首頁","about":"關於","product":"周邊","login":"登入","dashboard":"儀表盤","logout":"登出","fontSize":{"small":"小","medium":"中","big":"大"}},"footer":{"friend":"友社連結","media":"社交媒體","operation":"快速操作","copyright":"版權所有 © {year} 台大獸文化交流社"}}'
          ),
          R = JSON.parse(
            '{"navbar":{"home":"Home","about":"About","product":"Product","login":"Login","dashboard":"Dashboard","logout":"Logout"}}'
          ),
          ee = (0, Z.hU)({
            locale: "zh",
            fallbackLocale: "zh",
            messages: { zh: Q, en: R },
          });
        let te = window;
        window.frameElement &&
          "parent" === window.frameElement.getAttribute("tiledesk_context") &&
          (te = window.parent),
          (te.axios = P.A),
          G.beforeEach((e, t, n) => {
            (te.document.title =
              void 0 == e.meta.title ? "默认标题" : e.meta.title),
              n();
          }),
          (0, o.Ef)(N).use(V).use(G).use(ee).use(b()).mount("#app");
      },
      8056: function (e, t, n) {
        n.d(t, {
          A: function () {
            return f;
          },
        });
        var o = n(6768),
          r = n(4232);
        const a = { id: "eventbox" },
          i = { class: "description" };
        function u(e, t, n, u, l, s) {
          return (
            (0, o.uX)(),
            (0, o.CE)("div", a, [
              (0, o.Lk)("h3", null, (0, r.v_)(e.event.summary), 1),
              (0, o.Lk)("p", i, (0, r.v_)(e.event.description), 1),
              (0, o.Lk)(
                "p",
                null,
                "活動日期: " + (0, r.v_)(e.formatDate(e.event.start.dateTime)),
                1
              ),
              (0, o.Lk)(
                "p",
                null,
                (0, r.v_)(
                  e.calculateDuration(
                    e.event.start.dateTime,
                    e.event.end.dateTime
                  )
                ) + " 小時 ",
                1
              ),
            ])
          );
        }
        var l = (0, o.pM)({
            name: "EventBox",
            props: {
              event: {
                type: Object,
                required: !0,
                validator(e) {
                  return (
                    e &&
                    "string" === typeof e.summary &&
                    "string" === typeof e.description &&
                    e.start?.dateTime &&
                    e.end?.dateTime
                  );
                },
              },
            },
            methods: {
              formatDate(e) {
                const t = new Date(e);
                return `${t.getFullYear()}年 ${
                  t.getMonth() + 1
                }月 ${t.getDate()}日 ${t.getHours()}時 ${t.getMinutes()}分`;
              },
              calculateDuration(e, t) {
                const n = new Date(e),
                  o = new Date(t),
                  r = o.getTime() - n.getTime();
                return (r / 36e5).toFixed(2);
              },
            },
          }),
          s = n(1241);
        const c = (0, s.A)(l, [
          ["render", u],
          ["__scopeId", "data-v-5552303c"],
        ]);
        var f = c;
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var a = (t[o] = { exports: {} });
    return e[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, o, r, a) {
        if (!o) {
          var i = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (o = e[c][0]), (r = e[c][1]), (a = e[c][2]);
            for (var u = !0, l = 0; l < o.length; l++)
              (!1 & a || i >= a) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](o[l]);
              })
                ? o.splice(l--, 1)
                : ((u = !1), a < i && (i = a));
            if (u) {
              e.splice(c--, 1);
              var s = r();
              void 0 !== s && (t = s);
            }
          }
          return t;
        }
        a = a || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
        e[c] = [o, r, a];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, o) {
              return n.f[o](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return "js/" + e + ".291c0c6a.js";
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return "css/" + e + ".7955eeaa.css";
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "ntuwu-furry-website:";
      n.l = function (o, r, a, i) {
        if (e[o]) e[o].push(r);
        else {
          var u, l;
          if (void 0 !== a)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == o ||
                f.getAttribute("data-webpack") == t + a
              ) {
                u = f;
                break;
              }
            }
          u ||
            ((l = !0),
            (u = document.createElement("script")),
            (u.charset = "utf-8"),
            (u.timeout = 120),
            n.nc && u.setAttribute("nonce", n.nc),
            u.setAttribute("data-webpack", t + a),
            (u.src = o)),
            (e[o] = [r]);
          var d = function (t, n) {
              (u.onerror = u.onload = null), clearTimeout(m);
              var r = e[o];
              if (
                (delete e[o],
                u.parentNode && u.parentNode.removeChild(u),
                r &&
                  r.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            m = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: u }),
              12e4
            );
          (u.onerror = d.bind(null, u.onerror)),
            (u.onload = d.bind(null, u.onload)),
            l && document.head.appendChild(u);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var e = function (e, t, o, r, a) {
            var i = document.createElement("link");
            (i.rel = "stylesheet"),
              (i.type = "text/css"),
              n.nc && (i.nonce = n.nc);
            var u = function (n) {
              if (((i.onerror = i.onload = null), "load" === n.type)) r();
              else {
                var o = n && n.type,
                  u = (n && n.target && n.target.href) || t,
                  l = new Error(
                    "Loading CSS chunk " +
                      e +
                      " failed.\n(" +
                      o +
                      ": " +
                      u +
                      ")"
                  );
                (l.name = "ChunkLoadError"),
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                  (l.type = o),
                  (l.request = u),
                  i.parentNode && i.parentNode.removeChild(i),
                  a(l);
              }
            };
            return (
              (i.onerror = i.onload = u),
              (i.href = t),
              o
                ? o.parentNode.insertBefore(i, o.nextSibling)
                : document.head.appendChild(i),
              i
            );
          },
          t = function (e, t) {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var r = n[o],
                a = r.getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (a === e || a === t)) return r;
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
              (r = i[o]), (a = r.getAttribute("data-href"));
              if (a === e || a === t) return r;
            }
          },
          o = function (o) {
            return new Promise(function (r, a) {
              var i = n.miniCssF(o),
                u = n.p + i;
              if (t(i, u)) return r();
              e(o, u, null, r, a);
            });
          },
          r = { 524: 0 };
        n.f.miniCss = function (e, t) {
          var n = { 834: 1 };
          r[e]
            ? t.push(r[e])
            : 0 !== r[e] &&
              n[e] &&
              t.push(
                (r[e] = o(e).then(
                  function () {
                    r[e] = 0;
                  },
                  function (t) {
                    throw (delete r[e], t);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var e = { 524: 0 };
      (n.f.j = function (t, o) {
        var r = n.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) o.push(r[2]);
          else {
            var a = new Promise(function (n, o) {
              r = e[t] = [n, o];
            });
            o.push((r[2] = a));
            var i = n.p + n.u(t),
              u = new Error(),
              l = function (o) {
                if (n.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var a = o && ("load" === o.type ? "missing" : o.type),
                    i = o && o.target && o.target.src;
                  (u.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                    (u.name = "ChunkLoadError"),
                    (u.type = a),
                    (u.request = i),
                    r[1](u);
                }
              };
            n.l(i, l, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, o) {
          var r,
            a,
            i = o[0],
            u = o[1],
            l = o[2],
            s = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in u) n.o(u, r) && (n.m[r] = u[r]);
            if (l) var c = l(n);
          }
          for (t && t(o); s < i.length; s++)
            (a = i[s]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(c);
        },
        o = (self["webpackChunkntuwu_furry_website"] =
          self["webpackChunkntuwu_furry_website"] || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var o = n.O(void 0, [504], function () {
    return n(1441);
  });
  o = n.O(o);
})();
//# sourceMappingURL=app.d844f871.js.map
