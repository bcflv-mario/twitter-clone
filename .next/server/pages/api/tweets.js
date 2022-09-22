"use strict";
(() => {
var exports = {};
exports.id = 583;
exports.ids = [583];
exports.modules = {

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

/***/ 1377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/prisma.js + 1 modules
var prisma = __webpack_require__(1682);
;// CONCATENATED MODULE: ./lib/data.js
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
;// CONCATENATED MODULE: ./pages/api/tweets.js


async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(501).end();
  }

  const take = parseInt(req.query.take || 2);
  const cursor = parseInt(req.query.cursor) || null;

  if (!cursor) {
    res.status(400).send({
      error: 'Missing cursor parameter'
    });
  }

  const tweets = await getTweets(prisma/* default */.Z, take, {
    id: cursor
  });
  res.json(tweets);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1377));
module.exports = __webpack_exports__;

})();