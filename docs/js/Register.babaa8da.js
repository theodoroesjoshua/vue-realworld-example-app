"use strict";
(self["webpackChunkrealworld_vue"] =
  self["webpackChunkrealworld_vue"] || []).push([
  [494],
  {
    734: function (e, r, s) {
      s.r(r),
        s.d(r, {
          default: function () {
            return k;
          }
        });
      var o = s(252),
        t = s(577),
        l = s(963);
      const a = { class: "auth-page" },
        n = { class: "container page" },
        u = { class: "row" },
        i = { class: "col-md-6 offset-md-3 col-xs-12" },
        c = { class: "text-xs-center" },
        m = { key: 0, class: "error-messages" },
        p = { class: "form-group" },
        d = { class: "form-group" },
        w = { class: "form-group" };
      function f(e, r, s, f, h, g) {
        const _ = (0, o.up)("router-link");
        return (
          (0, o.wg)(),
          (0, o.iD)("div", a, [
            (0, o._)("div", n, [
              (0, o._)("div", u, [
                (0, o._)("div", i, [
                  r[6] ||
                    (r[6] = (0, o._)(
                      "h1",
                      { class: "text-xs-center" },
                      "Sign up",
                      -1
                    )),
                  (0, o._)("p", c, [
                    (0, o.Wm)(
                      _,
                      { to: { name: "login" } },
                      {
                        default: (0, o.w5)(
                          () =>
                            r[4] || (r[4] = [(0, o.Uk)(" Have an account? ")])
                        ),
                        _: 1
                      }
                    )
                  ]),
                  e.errors
                    ? ((0, o.wg)(),
                      (0, o.iD)("ul", m, [
                        ((0, o.wg)(!0),
                        (0, o.iD)(
                          o.HY,
                          null,
                          (0, o.Ko)(
                            e.errors,
                            (e, r) => (
                              (0, o.wg)(),
                              (0, o.iD)(
                                "li",
                                { key: r },
                                (0, t.zw)(r) +
                                  " " +
                                  (0, t.zw)(g.errorFilter(e)),
                                1
                              )
                            )
                          ),
                          128
                        ))
                      ]))
                    : (0, o.kq)("", !0),
                  (0, o._)(
                    "form",
                    {
                      onSubmit:
                        r[3] ||
                        (r[3] = (0, l.iM)(
                          (...e) => g.onSubmit && g.onSubmit(...e),
                          ["prevent"]
                        ))
                    },
                    [
                      (0, o._)("fieldset", p, [
                        (0, o.wy)(
                          (0, o._)(
                            "input",
                            {
                              class: "form-control form-control-lg",
                              type: "text",
                              "onUpdate:modelValue":
                                r[0] || (r[0] = (e) => (h.username = e)),
                              placeholder: "Username"
                            },
                            null,
                            512
                          ),
                          [[l.nr, h.username]]
                        )
                      ]),
                      (0, o._)("fieldset", d, [
                        (0, o.wy)(
                          (0, o._)(
                            "input",
                            {
                              class: "form-control form-control-lg",
                              type: "text",
                              "onUpdate:modelValue":
                                r[1] || (r[1] = (e) => (h.email = e)),
                              placeholder: "Email"
                            },
                            null,
                            512
                          ),
                          [[l.nr, h.email]]
                        )
                      ]),
                      (0, o._)("fieldset", w, [
                        (0, o.wy)(
                          (0, o._)(
                            "input",
                            {
                              class: "form-control form-control-lg",
                              type: "password",
                              "onUpdate:modelValue":
                                r[2] || (r[2] = (e) => (h.password = e)),
                              placeholder: "Password"
                            },
                            null,
                            512
                          ),
                          [[l.nr, h.password]]
                        )
                      ]),
                      r[5] ||
                        (r[5] = (0, o._)(
                          "button",
                          { class: "btn btn-lg btn-primary pull-xs-right" },
                          " Sign up ",
                          -1
                        ))
                    ],
                    32
                  )
                ])
              ])
            ])
          ])
        );
      }
      var h = s(637),
        g = s(685),
        _ = {
          name: "RwvRegister",
          data() {
            return { username: "", email: "", password: "" };
          },
          computed: { ...(0, h.rn)({ errors: (e) => e.auth.errors }) },
          methods: {
            onSubmit() {
              this.$store
                .dispatch(g.Nz, {
                  email: this.email,
                  password: this.password,
                  username: this.username
                })
                .then(() => this.$router.push({ name: "home" }));
            },
            errorFilter(e) {
              return `${e[0]}`;
            }
          }
        },
        v = s(744);
      const b = (0, v.Z)(_, [["render", f]]);
      var k = b;
    }
  }
]);
//# sourceMappingURL=Register.babaa8da.js.map
