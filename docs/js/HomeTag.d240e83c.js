"use strict";
(self["webpackChunkrealworld_vue"] =
  self["webpackChunkrealworld_vue"] || []).push([
  [843],
  {
    225: function (t, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return i;
          }
        });
      var a = r(252);
      const n = { class: "home-tag" };
      function u(t, e, r, u, s, c) {
        const o = (0, a.up)("RwvArticleList");
        return (
          (0, a.wg)(),
          (0, a.iD)("div", n, [(0, a.Wm)(o, { tag: c.tag }, null, 8, ["tag"])])
        );
      }
      var s = r(603),
        c = {
          name: "RwvHomeTag",
          components: { RwvArticleList: s.Z },
          computed: {
            tag() {
              return this.$route.params.tag;
            }
          }
        },
        o = r(744);
      const l = (0, o.Z)(c, [["render", u]]);
      var i = l;
    }
  }
]);
//# sourceMappingURL=HomeTag.d240e83c.js.map
