"use strict";
(self["webpackChunkrealworld_vue"] =
  self["webpackChunkrealworld_vue"] || []).push([
  [303],
  {
    671: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return u;
        }
      });
      var s = t(252),
        a = t(577);
      const l = { class: "error-messages" };
      function i(e, r, t, i, o, n) {
        return (
          (0, s.wg)(),
          (0, s.iD)("ul", l, [
            ((0, s.wg)(!0),
            (0, s.iD)(
              s.HY,
              null,
              (0, s.Ko)(
                t.errors,
                (e, r) => (
                  (0, s.wg)(),
                  (0, s.iD)("li", { key: r }, [
                    (0, s._)("span", null, (0, a.zw)(r), 1),
                    ((0, s.wg)(!0),
                    (0, s.iD)(
                      s.HY,
                      null,
                      (0, s.Ko)(
                        e,
                        (e) => (
                          (0, s.wg)(),
                          (0, s.iD)("span", { key: e }, (0, a.zw)(e), 1)
                        )
                      ),
                      128
                    ))
                  ])
                )
              ),
              128
            ))
          ])
        );
      }
      var o = {
          name: "RwvListErorrs",
          props: { errors: { type: Object, required: !0 } }
        },
        n = t(744);
      const c = (0, n.Z)(o, [["render", i]]);
      var u = c;
    },
    339: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return T;
          }
        });
      var s = t(252),
        a = t(963),
        l = t(577);
      const i = { class: "editor-page" },
        o = { class: "container page" },
        n = { class: "row" },
        c = { class: "col-md-10 offset-md-1 col-xs-12" },
        u = ["disabled"],
        d = { class: "form-group" },
        p = { class: "form-group" },
        g = { class: "form-group" },
        m = { class: "form-group" },
        h = { class: "tag-list" },
        w = ["disabled"];
      function f(e, r, t, f, v, b) {
        const y = (0, s.up)("RwvListErrors"),
          _ = (0, s.up)("ion-icon");
        return (
          (0, s.wg)(),
          (0, s.iD)("div", i, [
            (0, s._)("div", o, [
              (0, s._)("div", n, [
                (0, s._)("div", c, [
                  (0, s.Wm)(y, { errors: v.errors }, null, 8, ["errors"]),
                  (0, s._)(
                    "form",
                    {
                      onSubmit:
                        r[5] ||
                        (r[5] = (0, a.iM)(
                          (r) => b.onPublish(e.article.slug),
                          ["prevent"]
                        ))
                    },
                    [
                      (0, s._)(
                        "fieldset",
                        { disabled: v.inProgress },
                        [
                          (0, s._)("fieldset", d, [
                            (0, s.wy)(
                              (0, s._)(
                                "input",
                                {
                                  type: "text",
                                  class: "form-control form-control-lg",
                                  "onUpdate:modelValue":
                                    r[0] ||
                                    (r[0] = (r) => (e.article.title = r)),
                                  placeholder: "Article Title"
                                },
                                null,
                                512
                              ),
                              [[a.nr, e.article.title]]
                            )
                          ]),
                          (0, s._)("fieldset", p, [
                            (0, s.wy)(
                              (0, s._)(
                                "input",
                                {
                                  type: "text",
                                  class: "form-control",
                                  "onUpdate:modelValue":
                                    r[1] ||
                                    (r[1] = (r) => (e.article.description = r)),
                                  placeholder: "What's this article about?"
                                },
                                null,
                                512
                              ),
                              [[a.nr, e.article.description]]
                            )
                          ]),
                          (0, s._)("fieldset", g, [
                            (0, s.wy)(
                              (0, s._)(
                                "textarea",
                                {
                                  class: "form-control",
                                  rows: "8",
                                  "onUpdate:modelValue":
                                    r[2] ||
                                    (r[2] = (r) => (e.article.body = r)),
                                  placeholder:
                                    "Write your article (in markdown)"
                                },
                                "                ",
                                512
                              ),
                              [[a.nr, e.article.body]]
                            )
                          ]),
                          (0, s._)("fieldset", m, [
                            (0, s.wy)(
                              (0, s._)(
                                "input",
                                {
                                  type: "text",
                                  class: "form-control",
                                  placeholder: "Enter tags",
                                  "onUpdate:modelValue":
                                    r[3] || (r[3] = (e) => (v.tagInput = e)),
                                  onKeypress:
                                    r[4] ||
                                    (r[4] = (0, a.D2)(
                                      (0, a.iM)(
                                        (e) => b.addTag(v.tagInput),
                                        ["prevent"]
                                      ),
                                      ["enter"]
                                    ))
                                },
                                null,
                                544
                              ),
                              [[a.nr, v.tagInput]]
                            ),
                            (0, s._)("div", h, [
                              ((0, s.wg)(!0),
                              (0, s.iD)(
                                s.HY,
                                null,
                                (0, s.Ko)(
                                  e.article.tagList,
                                  (e, r) => (
                                    (0, s.wg)(),
                                    (0, s.iD)(
                                      "span",
                                      {
                                        class: "tag-default tag-pill",
                                        key: e + r
                                      },
                                      [
                                        (0, s.Wm)(
                                          _,
                                          {
                                            name: "close-circle-outline",
                                            onClick: (r) => b.removeTag(e)
                                          },
                                          null,
                                          8,
                                          ["onClick"]
                                        ),
                                        (0, s.Uk)(" " + (0, l.zw)(e), 1)
                                      ]
                                    )
                                  )
                                ),
                                128
                              ))
                            ])
                          ])
                        ],
                        8,
                        u
                      ),
                      (0, s._)(
                        "button",
                        {
                          disabled: v.inProgress,
                          class: "btn btn-lg pull-xs-right btn-primary",
                          type: "submit"
                        },
                        " Publish Article ",
                        8,
                        w
                      )
                    ],
                    32
                  )
                ])
              ])
            ])
          ])
        );
      }
      var v = t(637),
        b = t(700),
        y = t(671),
        _ = t(685),
        k = {
          name: "RwvArticleEdit",
          components: { RwvListErrors: y.Z },
          props: { previousArticle: { type: Object, required: !1 } },
          async beforeRouteUpdate(e, r, t) {
            return await b.Z.dispatch(_.Ti), t();
          },
          async beforeRouteEnter(e, r, t) {
            return (
              await b.Z.dispatch(_.Ti),
              void 0 !== e.params.slug &&
                (await b.Z.dispatch(
                  _.UC,
                  e.params.slug,
                  e.params.previousArticle
                )),
              t()
            );
          },
          async beforeRouteLeave(e, r, t) {
            await b.Z.dispatch(_.Ti), t();
          },
          data() {
            return { tagInput: null, inProgress: !1, errors: {} };
          },
          computed: { ...(0, v.Se)(["article"]) },
          methods: {
            onPublish(e) {
              let r = e ? _.Nw : _.Fz;
              (this.inProgress = !0),
                this.$store
                  .dispatch(r)
                  .then(({ data: e }) => {
                    (this.inProgress = !1),
                      this.$router.push({
                        name: "article",
                        params: { slug: e.article.slug }
                      });
                  })
                  .catch(({ response: e }) => {
                    (this.inProgress = !1), (this.errors = e.data.errors);
                  });
            },
            removeTag(e) {
              this.$store.dispatch(_.d6, e);
            },
            addTag(e) {
              this.$store.dispatch(_.I, e), (this.tagInput = null);
            }
          }
        },
        D = t(744);
      const P = (0, D.Z)(k, [["render", f]]);
      var T = P;
    }
  }
]);
//# sourceMappingURL=ArticleEdit.642385e9.js.map
