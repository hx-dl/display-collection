(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    201: function (a, e, t) {
      "use strict";
      t.r(e);
      var r = t(2),
        v = Object(r.a)(
          {},
          function () {
            var a = this,
              e = a.$createElement,
              t = a._self._c || e;
            return t(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": a.$parent.slotKey } },
              [
                t("h1", { attrs: { id: "对-webpack-未来的展望" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#对-webpack-未来的展望" },
                    },
                    [a._v("#")]
                  ),
                  a._v(" 对 Webpack 未来的展望"),
                ]),
                a._v(" "),
                t("p", [
                  a._v(
                    "Webpack 这类模块打包工具刚出现的时候，是为了解决低版本浏览器不支持 ESM 模块化的问题，将各个分散的 JavaScript 模块合并成一个 bundle 文件，减少 HTTP 请求的数量，有助于提升页面首次访问的速度。后期 Webpack 乘胜追击，引入了 Loader、Plugin 机制，提供了各种构建相关的能力（babel 转义、css 合并、代码压缩），取代了同期的 Browserify、Gulp 等其他工具。"
                  ),
                ]),
                a._v(" "),
                t("p", [
                  a._v(
                    "如今，时间轮盘已经转到了 2020 年，HTTP/2 的盛行(类似淘宝这类一线的互联网公司已经全面升级到了 HTTP/2)，HTTP/3 也即将发行，加上 5G 网络已经开始商用，减少 HTTP 请求数量起到的作用已经微乎其微，而且新版的浏览器基本已经支持了 ESM("
                  ),
                  t(
                    "a",
                    {
                      attrs: {
                        href: "http://172.25.3.134:3000/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [a._v("Demo"), t("OutboundLink")],
                    1
                  ),
                  a._v(")。"),
                ]),
                a._v(" "),
                t("blockquote", [
                  t("p", [
                    t(
                      "a",
                      {
                        attrs: {
                          href: "https://caniuse.com/?search=JavaScript%20module",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [a._v("Can I use"), t("OutboundLink")],
                      1
                    ),
                    a._v(
                      " 上 JavaScript modules 显示除 IE 外的所有主流浏览器已经全部支持了 ESM"
                    ),
                  ]),
                ]),
                a._v(" "),
                t("p", [
                  a._v(
                    "所以，不需要考虑 IE 浏览器的场景下，我们完全可以抛弃打包工具，而直接在浏览器中使用浏览器原生的 JavaScript 模块功能。这主要基于三点考虑："
                  ),
                ]),
                a._v(" "),
                t("ul", [
                  t("li", [
                    t("p", [
                      a._v(
                        "兼容性可接受：基本主流的浏览器版本都支持直接使用 JavaScript Module 了（当然，IE 一如既往除外）。"
                      ),
                    ]),
                  ]),
                  a._v(" "),
                  t("li", [
                    t("p", [
                      a._v(
                        "性能问题的改善：之前打包的一个重要原因是 HTTP/1.1 的特性导致，我们合并请求来优化性能；而如今 HTTP/2 普及之后，这个性能问题不像以前那么突出了。"
                      ),
                    ]),
                  ]),
                  a._v(" "),
                  t("li", [
                    t("p", [
                      a._v(
                        "打包的必要性：打包工具的存在主要就是为了处理模块化与合并请求，而以上两点基本解决这两个问题；再加之打包工具越来越复杂，此消彼长，其存在的必要性自然被作者所质疑。\n由于我认为 webpack 之类的打包工具，“发家”后转型做构建工具并非最优解，实是一种阴差阳错的阶段性成果。所以当时对这个项目提到的观点也很赞同，其中印象最深的当属它提到的："
                      ),
                    ]),
                  ]),
                ]),
                a._v(" "),
                t("h2", { attrs: { id: "新的竞争对手出现" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#新的竞争对手出现" },
                    },
                    [a._v("#")]
                  ),
                  a._v(" 新的竞争对手出现"),
                ]),
                a._v(" "),
                t("p", [
                  a._v(
                    "灵活的 loader 和插件机制使得 Webpack 几乎无所不能，但是同时也造成了 Webpack 的配置及使用方式繁多，新人上手困难等问题。甚至有些人发出了：天下苦 Webpack 久已的感叹。"
                  ),
                ]),
                a._v(" "),
                t("h3", { attrs: { id: "面向未来的前端构建工具-vite" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#面向未来的前端构建工具-vite" },
                    },
                    [a._v("#")]
                  ),
                  a._v(" 面向未来的前端构建工具 vite"),
                ]),
                a._v(" "),
                t("p", [
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/vitejs/vite",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [a._v("Vite 源码"), t("OutboundLink")],
                    1
                  ),
                ]),
                a._v(" "),
                t("h3", { attrs: { id: "宣传要革webpack命的-snowpack" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#宣传要革webpack命的-snowpack" },
                    },
                    [a._v("#")]
                  ),
                  a._v(" 宣传要革webpack命的 snowpack"),
                ]),
                a._v(" "),
                t("p", [
                  t(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/pikapkg/snowpack",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [a._v("snowpack仓库"), t("OutboundLink")],
                    1
                  ),
                ]),
                a._v(" "),
                t("h2", { attrs: { id: "一些想法" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#一些想法" },
                    },
                    [a._v("#")]
                  ),
                  a._v(" 一些想法"),
                ]),
                a._v(" "),
                t("p", [
                  a._v(
                    "vite 等工具依靠现代浏览器的特性，除去了开发环境下的打包环节，减少了项目修改后等待代码打包的时间花费，加上尤大的亲自鼓吹站台，吸引了不少的用户。不过Webpack的强大以及模块化思想的实践还不是这些新生代工具一时半会可以替代的，最主要的原因是Webpack已经有了庞大的工程基础，例如vite这类的工具其实还是通过技术手段解决js语音编写的构建工具的性能瓶颈，我记得20年vueConf上，就有个老哥说：“我M1+64G运存，有必要吗？”，当时有点想笑，但感觉其实也是一个思路，如果从js语言性能瓶颈能够有所突破呢，Webpack的性能问题也就自然解决了。"
                  ),
                ]),
                a._v(" "),
                t("h2", { attrs: { id: "总结" } }, [
                  t(
                    "a",
                    { staticClass: "header-anchor", attrs: { href: "#总结" } },
                    [a._v("#")]
                  ),
                  a._v(" 总结"),
                ]),
                a._v(" "),
                t("p", [
                  a._v(
                    "时间有限，这次就讲这么多把，其实关于 Webpack 深入的内容还可以引申出更多的知识，比如 tapable、acorn、js 面向切面编程等。Webpack 它并不是某一个时刻突然就出现的产物，而是一群有卓越追求的前端开发们多年探索的智慧结晶，如果喜欢去了解这些前端领域的各种工具类库的产生背景以及一些八卦知识的话，其实是可以感受得到那群前端技术极客们的思想碰撞。"
                  ),
                ]),
                a._v(" "),
                t("p", [a._v("这次分享主要的知识点：")]),
                a._v(" "),
                t("ul", [
                  t("li", [
                    t("p", [
                      a._v("理解 webpack 的本质及模块打包工具的产生原因"),
                    ]),
                  ]),
                  a._v(" "),
                  t("li", [
                    t("p", [
                      a._v(
                        "学会一个小技巧使得编写 webpack 配置文件获得智能提示"
                      ),
                    ]),
                  ]),
                  a._v(" "),
                  t("li", [
                    t("p", [a._v("了解 webpack 打包后的结果运行机制")]),
                  ]),
                  a._v(" "),
                  t("li", [t("p", [a._v("学会如何编写一个简单的打包工具")])]),
                  a._v(" "),
                  t("li", [
                    t("p", [
                      a._v("理解 require 在浏览器端和 Node.js中的实现原理"),
                    ]),
                  ]),
                  a._v(" "),
                  t("li", [t("p", [a._v("了解 loader 和 plugin 的编写方式")])]),
                  a._v(" "),
                  t("li", [t("p", [a._v("构建工具的简单展望")])]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = v.exports;
    },
  },
]);
