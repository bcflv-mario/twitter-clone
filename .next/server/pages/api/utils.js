"use strict";
(() => {
var exports = {};
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 9182:
/***/ ((module) => {

module.exports = import("@faker-js/faker");;

/***/ }),

/***/ 1682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.js

let global = {};
const prisma = global.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const lib_prisma = (prisma);

/***/ }),

/***/ 945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1682);
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9182);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__]);
_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({
    req
  });
  if (req.method !== 'POST') return res.end();

  if (req.body.task === 'clean_database') {
    await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tweet.deleteMany */ .Z.tweet.deleteMany({});
    await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.deleteMany */ .Z.user.deleteMany({
      where: {
        NOT: {
          email: {
            in: [session.user.email]
          }
        }
      }
    });
  }

  if (req.body.task === 'generate_users_and_tweets') {
    let count = 0;

    while (count < 5) {
      await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.create */ .Z.user.create({
        data: {
          name: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.internet.userName().toLowerCase(),
          email: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.internet.email().toLowerCase(),
          image: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.internet.avatar()
        }
      });
      count++;
    } //create 1 tweet for each user


    const users = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findMany */ .Z.user.findMany({});
    users.forEach(async user => {
      await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tweet.create */ .Z.tweet.create({
        data: {
          content: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.hacker.phrase(),
          author: {
            connect: {
              id: user.id
            }
          }
        }
      });
    });
  }

  res.end();
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(945));
module.exports = __webpack_exports__;

})();