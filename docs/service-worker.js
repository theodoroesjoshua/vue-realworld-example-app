if (!self.define) {
  let e,
    l = {};
  const r = (r, s) => (
    (r = new URL(r + ".js", s).href),
    l[r] ||
      new Promise((l) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = l), document.head.appendChild(e);
        } else (e = r), importScripts(r), l();
      }).then(() => {
        let e = l[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, i) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (l[o]) return;
    let a = {};
    const u = (e) => r(e, o),
      n = { module: { uri: o }, exports: a, require: u };
    l[o] = Promise.all(s.map((e) => n[e] || u(e))).then((e) => (i(...e), a));
  };
}
define(["./workbox-db5fc017"], function (e) {
  "use strict";
  e.setCacheNameDetails({ prefix: "realworld-vue" }),
    self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
    e.precacheAndRoute(
      [
        {
          url: "/vue-realworld-example-app/index.html",
          revision: "9d312696639ad9ce8cd0c63319be40bb"
        },
        {
          url: "/vue-realworld-example-app/js/Article.cd3688db.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/ArticleEdit.642385e9.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/HomeTag.d240e83c.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/Login.a76e5546.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/MyFeed.2007b260.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/Profile.8fa3ecc0.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/ProfileArticles.6c1d9e6c.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/ProfileFavorited.80c31ef9.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/Register.babaa8da.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/Settings.0d05c253.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/app.e114ff42.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/js/chunk-vendors.c1db2e9b.js",
          revision: null
        },
        {
          url: "/vue-realworld-example-app/manifest.json",
          revision: "3723b7f0dd90c95111059c3f9053d9ec"
        },
        {
          url: "/vue-realworld-example-app/robots.txt",
          revision: "735ab4f94fbcd57074377afca324c813"
        }
      ],
      {}
    );
});
//# sourceMappingURL=service-worker.js.map
