"use strict";
(() => {
var exports = {};
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 6461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1682);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(501).end();
  }

  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
    req
  });
  const user = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findUnique */ .Z.user.findUnique({
    where: {
      email: session.user.email
    }
  });

  if (req.method === 'POST') {
    const tweet = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tweet.create */ .Z.tweet.create({
      data: {
        content: req.body.content,
        parent: req.body.parent || null,
        author: {
          connect: {
            id: user.id
          }
        }
      }
    });
    const tweetWithAuthorData = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tweet.findUnique */ .Z.tweet.findUnique({
      where: {
        id: tweet.id
      },
      include: {
        author: true
      }
    });
    res.json(tweetWithAuthorData);
    return;
  }

  if (req.method === 'DELETE') {
    const id = req.body.id;
    const tweet = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tweet.findUnique */ .Z.tweet.findUnique({
      where: {
        id
      },
      include: {
        author: true
      }
    });

    if (tweet.author.id !== user.id) {
      res.status(401).end();
      return;
    }

    await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tweet["delete"] */ .Z.tweet["delete"]({
      where: {
        id
      }
    });
    res.status(200).end();
    return;
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6461));
module.exports = __webpack_exports__;

})();