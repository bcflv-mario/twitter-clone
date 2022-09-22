"use strict";
(() => {
var exports = {};
exports.id = 308;
exports.ids = [308];
exports.modules = {

/***/ 9467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewReply)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function NewReply({
  tweet
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    0: reply,
    1: setReply
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
    className: "flex ml-2",
    onSubmit: async e => {
      e.preventDefault();

      if (!reply) {
        alert('Enter some text in the reply');
        return;
      }

      const res = await fetch('/api/tweet', {
        body: JSON.stringify({
          parent: tweet.id,
          content: reply
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      router.reload(window.location.pathname);
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("textarea", {
      className: "border p-4 w-full text-lg font-medium bg-transparent outline-none color-primary ",
      rows: 1,
      cols: 50,
      placeholder: "Tweet your reply",
      onChange: e => setReply(e.target.value)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "flex",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "flex-1 mb-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          className: "border float-right ml-2 px-8 py-2 mt-0 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover",
          children: "Reply"
        })
      })
    })]
  });
}

/***/ }),

/***/ 9323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SingleTweet),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var components_Tweet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8096);
/* harmony import */ var components_Tweets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8392);
/* harmony import */ var lib_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3106);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8766);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_NewReply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9467);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Tweet__WEBPACK_IMPORTED_MODULE_0__, components_Tweets__WEBPACK_IMPORTED_MODULE_1__]);
([components_Tweet__WEBPACK_IMPORTED_MODULE_0__, components_Tweets__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function SingleTweet({
  tweet,
  replies
}) {
  const {
    data: session,
    status
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  if (false) {}

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Tweet__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      tweet: tweet
    }), session && session.user.email === tweet.author.email && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "flex-1 py-2 m-2 text-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        href: "#",
        className: "flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full hover:bg-color-accent-hover hover:color-accent-hover",
        onClick: async () => {
          const res = await fetch('/api/tweet', {
            body: JSON.stringify({
              id: tweet.id
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'DELETE'
          });

          if (res.status === 401) {
            alert('Unauthorized');
          }

          if (res.status === 200) {
            router.push('/home');
          }
        },
        children: "delete"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_NewReply__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      tweet: tweet
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_Tweets__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      tweets: replies,
      nolink: true
    })]
  });
}
async function getServerSideProps({
  params
}) {
  let tweet = await (0,lib_data_js__WEBPACK_IMPORTED_MODULE_7__/* .getTweet */ .Z3)(params.id, lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  tweet = JSON.parse(JSON.stringify(tweet));
  let replies = await (0,lib_data_js__WEBPACK_IMPORTED_MODULE_7__/* .getReplies */ .$m)(params.id, lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  replies = JSON.parse(JSON.stringify(replies));
  return {
    props: {
      tweet,
      replies
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6721:
/***/ ((module) => {

module.exports = import("javascript-time-ago");;

/***/ }),

/***/ 8670:
/***/ ((module) => {

module.exports = import("javascript-time-ago/locale/en");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,61,66], () => (__webpack_exec__(9323)));
module.exports = __webpack_exports__;

})();