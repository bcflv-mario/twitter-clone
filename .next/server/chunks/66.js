"use strict";
exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 8096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tweet)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_timeago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_timeago__WEBPACK_IMPORTED_MODULE_2__]);
lib_timeago__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Tweet({
  tweet,
  nolink
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "flex flex-shrink-0 p-4 pb-0",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "flex-shrink-0 block group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            children: tweet.author.image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
              className: "rounded-full",
              src: tweet.author.image,
              alt: "",
              width: "40",
              height: "40"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "ml-3 -mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              className: "",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/${tweet.author.name}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    className: "text-base font-medium leading-6 color-primary hover:underline",
                    children: tweet.author.name
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "pl-1 text-sm font-light leading-5 color-dimmed",
                children: nolink ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: lib_timeago__WEBPACK_IMPORTED_MODULE_2__/* ["default"].format */ .Z.format(new Date(tweet.createdAt), 'twitter')
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: `/${tweet.author.name}/status/${tweet.id}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    className: "hover:underline",
                    children: lib_timeago__WEBPACK_IMPORTED_MODULE_2__/* ["default"].format */ .Z.format(new Date(tweet.createdAt), 'twitter')
                  })
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "pl-16 -mt-6",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        className: "flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto",
        children: tweet.content
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tweets)
/* harmony export */ });
/* harmony import */ var components_Tweet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8096);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Tweet__WEBPACK_IMPORTED_MODULE_0__]);
components_Tweet__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Tweets({
  tweets,
  nolink
}) {
  if (!tweets) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
    children: "No Tweet"
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: tweets.map((tweet, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(components_Tweet__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      tweet: tweet,
      nolink: nolink
    }, index))
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$m": () => (/* binding */ getReplies),
/* harmony export */   "B0": () => (/* binding */ getUserTweets),
/* harmony export */   "FI": () => (/* binding */ userExists),
/* harmony export */   "Z3": () => (/* binding */ getTweet),
/* harmony export */   "ZJ": () => (/* binding */ getTweets)
/* harmony export */ });
const getTweets = async (prisma, take, cursor) => {
  return await prisma.tweet.findMany({
    where: {
      parent: null
    },
    orderBy: [{
      id: 'desc'
    }],
    include: {
      author: true
    },
    take,
    cursor,
    skip: cursor ? 1 : 0
  });
};
const getReplies = async (id, prisma) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      parent: parseInt(id)
    },
    orderBy: [{
      id: 'desc'
    }],
    include: {
      author: true
    }
  });
  return tweets;
};
const userExists = async (name, prisma) => {
  const userFind = await prisma.user.findFirst({
    where: {
      name: name
    }
  }); // console.log('in userExists ', userFind)

  return userFind;
};
const getTweet = async (id, prisma) => {
  const tweet = await prisma.tweet.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      author: true
    }
  });

  if (tweet.parent) {
    tweet.parent_data = await prisma.tweet.findUnique({
      where: {
        id: parseInt(tweet.parent)
      },
      include: {
        author: true
      }
    });
  }

  return tweet;
};
const getUserTweets = async (name, prisma) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      author: {
        name: name
      },
      parent: null
    },
    orderBy: [{
      id: 'desc'
    }],
    include: {
      author: true
    }
  });
  return tweets;
};

/***/ }),

/***/ 8766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let global = {};
const prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ 7282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6721);
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([javascript_time_ago__WEBPACK_IMPORTED_MODULE_0__, javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_1__]);
([javascript_time_ago__WEBPACK_IMPORTED_MODULE_0__, javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


javascript_time_ago__WEBPACK_IMPORTED_MODULE_0__["default"].addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_1__["default"]);
const timeago = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_0__["default"]('en-US');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeago);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;