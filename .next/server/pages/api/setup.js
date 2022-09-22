"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
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

/***/ 126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1682);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
    req
  });
  if (!session) return res.end();

  if (req.method === 'POST') {
    const userExists = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findFirst */ .Z.user.findFirst({
      where: {
        name: req.body.name
      }
    });

    if (userExists) {
      // console.log('User exists: ', req.body.name)
      return res.status(409).json({
        message: `User name ${req.body.name} taken! Try another.`
      });
    } // else console.log('no exist: ', req.body.name)


    await lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.update */ .Z.user.update({
      where: {
        email: session.user.email
      },
      data: {
        name: req.body.name
      }
    });
    return res.status(201).end();
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(126));
module.exports = __webpack_exports__;

})();