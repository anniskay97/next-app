module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/index/Comments.js":
/*!**************************************!*\
  !*** ./components/index/Comments.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Comments =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Comments, _React$Component);

  function Comments() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Comments)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      text: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      _this.setState({
        text: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (event) {
      var text = _this.state.text;
      var _this$props = _this.props,
          postId = _this$props.postId,
          handleAddComment = _this$props.handleAddComment;
      event.preventDefault();
      handleAddComment(postId, text);

      _this.setState({
        text: ""
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showComment", function (comment) {
      var _this$props2 = _this.props,
          postId = _this$props2.postId,
          auth = _this$props2.auth,
          classes = _this$props2.classes,
          handleDeleteComment = _this$props2.handleDeleteComment;
      var isCommentCreator = comment.postedBy._id === auth.user._id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/profile/".concat(comment.postedBy._id)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, comment.postedBy.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), comment.text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classes.commentDate
      }, comment.createdAt, isCommentCreator && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {
        color: "secondary",
        className: classes.commentDelete,
        onClick: function onClick() {
          return handleDeleteComment(postId, comment);
        }
      })));
    });

    return _this;
  }

  _createClass(Comments, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          auth = _this$props3.auth,
          comments = _this$props3.comments,
          classes = _this$props3.classes;
      var text = this.state.text;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.comments
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_1___default.a, {
        avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.smallAvatar,
          src: auth.user.avatar
        }),
        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
          margin: "normal",
          required: true,
          fullWidth: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
          htmlFor: "add-comment"
        }, "Add comments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
          id: "add-comment",
          name: "text",
          placeholder: "Reply to this post",
          value: text,
          onChange: this.handleChange
        }))),
        className: classes.cardHeader
      }), comments.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: comment._id,
          avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
            className: classes.smallAvatar,
            src: comment.postedBy.avatar
          }),
          title: _this2.showComment(comment),
          className: classes.cardHeader
        });
      }));
    }
  }]);

  return Comments;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var styles = function styles(theme) {
  return {
    comments: {
      backgroundColor: "rgba(11, 61, 130, 0.06)"
    },
    cardHeader: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    smallAvatar: {
      margin: 10
    },
    commentDate: {
      display: "block",
      color: "gray",
      fontSize: "0.8em"
    },
    commentDelete: {
      fontSize: "1.6em",
      verticalAlign: "middle",
      cursor: "pointer"
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(styles)(Comments));

/***/ }),

/***/ "./components/index/Post.js":
/*!**********************************!*\
  !*** ./components/index/Post.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Comment */ "@material-ui/icons/Comment");
/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_DeleteTwoTone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/DeleteTwoTone */ "@material-ui/icons/DeleteTwoTone");
/* harmony import */ var _material_ui_icons_DeleteTwoTone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteTwoTone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Comments */ "./components/index/Comments.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















var Post =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Post, _React$PureComponent);

  function Post() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Post);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Post)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isLiked: false,
      numLikes: 0,
      comments: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkLiked", function (likes) {
      return likes.includes(_this.props.auth.user._id);
    });

    return _this;
  }

  _createClass(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isLiked: this.checkLiked(this.props.post.likes),
        numLikes: this.props.post.likes.length,
        comments: this.props.post.comments
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.post.likes.length !== this.props.post.likes.length) {
        this.setState({
          isLiked: this.checkLiked(this.props.post.likes),
          numLikes: this.props.post.likes.length
        });
      }

      if (prevProps.post.comments.length !== this.props.post.comments.length) {
        this.setState({
          comments: this.props.post.comments
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          post = _this$props.post,
          auth = _this$props.auth,
          isDeletingPost = _this$props.isDeletingPost,
          handleDeletePost = _this$props.handleDeletePost,
          handleToggleLike = _this$props.handleToggleLike,
          handleAddComment = _this$props.handleAddComment,
          handleDeleteComment = _this$props.handleDeleteComment;
      var _this$state = this.state,
          isLiked = _this$state.isLiked,
          numLikes = _this$state.numLikes,
          comments = _this$state.comments;
      var isPostCreator = post.postedBy._id === auth.user._id;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: classes.card
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_2___default.a, {
        avatar: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
          src: post.postedBy.avatar
        }),
        action: isPostCreator && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
          disabled: isDeletingPost,
          onClick: function onClick() {
            return handleDeletePost(post);
          }
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_DeleteTwoTone__WEBPACK_IMPORTED_MODULE_10___default.a, {
          color: "secondary"
        })),
        title: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
          href: "/profile/".concat(post.postedBy._id)
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", null, post.postedBy.name)),
        subheader: post.createdAt,
        className: classes.cardHeader
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.cardContent
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
        variant: "body1",
        className: classes.text
      }, post.text), post.image && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: classes.imageContainer
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
        className: classes.image,
        src: post.image
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
        onClick: function onClick() {
          return handleToggleLike(post);
        },
        className: classes.button
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_0___default.a, {
        badgeContent: numLikes,
        color: "secondary"
      }, isLiked ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.favoriteIcon
      }) : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.favoriteIcon
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.button
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_0___default.a, {
        badgeContent: comments.length,
        color: "primary"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classes.commentIcon
      })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a, null), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Comments__WEBPACK_IMPORTED_MODULE_16__["default"], {
        auth: auth,
        postId: post._id,
        comments: comments,
        handleAddComment: handleAddComment,
        handleDeleteComment: handleDeleteComment
      }));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.PureComponent);

var styles = function styles(theme) {
  return {
    card: {
      marginBottom: theme.spacing.unit * 3
    },
    cardContent: {
      backgroundColor: "white"
    },
    cardHeader: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      backgroundColor: "rgba(11, 61, 130, 0.06)"
    },
    imageContainer: {
      textAlign: "center",
      padding: theme.spacing.unit
    },
    image: {
      height: 200
    },
    favoriteIcon: {
      color: theme.palette.favoriteIcon
    },
    commentIcon: {
      color: theme.palette.commentIcon
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_13___default()(styles)(Post));

/***/ }),

/***/ "./components/profile/DeleteUser.js":
/*!******************************************!*\
  !*** ./components/profile/DeleteUser.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/auth */ "./lib/auth.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var DeleteUser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeleteUser, _React$Component);

  function DeleteUser() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false,
      isDeleting: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDeleteUser", function () {
      var user = _this.props.user;

      _this.setState({
        isDeleting: true
      });

      Object(_lib_api__WEBPACK_IMPORTED_MODULE_9__["deleteUser"])(user._id).then(function () {
        Object(_lib_auth__WEBPACK_IMPORTED_MODULE_10__["signoutUser"])();
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          isDeleting: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpen", function () {
      return _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      return _this.setState({
        open: false
      });
    });

    return _this;
  }

  _createClass(DeleteUser, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          isDeleting = _this$state.isDeleting;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.handleOpen,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
        open: open,
        onClose: this.handleClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, null, "DeleteAccount"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, null, "Confirm to delete your account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: this.handleClose,
        color: "primary"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: this.handleDeleteUser,
        color: "secondary",
        disabled: isDeleting
      }, isDeleting ? "Deleting" : "Confirm"))));
    }
  }]);

  return DeleteUser;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DeleteUser);

/***/ }),

/***/ "./components/profile/FollowTab.js":
/*!*****************************************!*\
  !*** ./components/profile/FollowTab.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var FollowTab = function FollowTab(_ref) {
  var classes = _ref.classes,
      users = _ref.users;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_2___default.a, {
    cellHeight: 160,
    className: classes.gridList,
    cols: 4
  }, users.map(function (user) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        height: 120
      },
      key: user._id
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/profile/".concat(user._id)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
      src: user.avatar,
      className: classes.bigAvatar
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
      component: "h3",
      variant: "subtitle1",
      className: classes.tileText
    }, user.name))));
  })));
};

var styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit * 2,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden"
    },
    bigAvatar: {
      width: 60,
      height: 60,
      margin: "auto"
    },
    gridList: _defineProperty({
      width: 300
    }, theme.breakpoints.up("sm"), {
      width: 400
    }),
    tileText: {
      textAlign: "center",
      marginTop: 10
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(styles)(FollowTab));

/***/ }),

/***/ "./components/profile/FollowUser.js":
/*!******************************************!*\
  !*** ./components/profile/FollowUser.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");




var FollowUser = function FollowUser(_ref) {
  var isFollowing = _ref.isFollowing,
      toggleFollow = _ref.toggleFollow;
  var request = isFollowing ? _lib_api__WEBPACK_IMPORTED_MODULE_2__["unfollowUser"] : _lib_api__WEBPACK_IMPORTED_MODULE_2__["followUser"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: isFollowing ? "secondary" : "primary",
    onClick: function onClick() {
      return toggleFollow(request);
    }
  }, isFollowing ? "Unfollow" : "Follow");
};

/* harmony default export */ __webpack_exports__["default"] = (FollowUser);

/***/ }),

/***/ "./components/profile/ProfileTabs.js":
/*!*******************************************!*\
  !*** ./components/profile/ProfileTabs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index/Post */ "./components/index/Post.js");
/* harmony import */ var _components_profile_FollowTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/FollowTab */ "./components/profile/FollowTab.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ProfileTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfileTabs, _React$Component);

  function ProfileTabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProfileTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProfileTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      tab: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTabChange", function (event, value) {
      _this.setState({
        tab: value
      });
    });

    return _this;
  }

  _createClass(ProfileTabs, [{
    key: "render",
    value: function render() {
      var tab = this.state.tab;
      var _this$props = this.props,
          posts = _this$props.posts,
          user = _this$props.user,
          auth = _this$props.auth,
          isDeletingPost = _this$props.isDeletingPost,
          handleDeletePost = _this$props.handleDeletePost,
          handleToggleLike = _this$props.handleToggleLike,
          handleAddComment = _this$props.handleAddComment,
          handleDeleteComment = _this$props.handleDeleteComment;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a, {
        position: "static",
        color: "default"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_2___default.a, {
        value: tab,
        onChange: this.handleTabChange,
        indicatorColor: "secondary",
        textColor: "secondary",
        variant: "fullWidth"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Posts"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Following"
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3___default.a, {
        label: "Followers"
      })), tab === 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabContainer, null, posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_index_Post__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: post._id,
          auth: auth,
          post: post,
          isDeletingPost: isDeletingPost,
          handleDeletePost: handleDeletePost,
          handleToggleLike: handleToggleLike,
          handleAddComment: handleAddComment,
          handleDeleteComment: handleDeleteComment
        });
      })), tab === 1 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabContainer, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_profile_FollowTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
        users: user.following
      })), tab === 2 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabContainer, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_profile_FollowTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
        users: user.followers
      }))));
    }
  }]);

  return ProfileTabs;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

var TabContainer = function TabContainer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    component: "div",
    style: {
      padding: "1em"
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileTabs);

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getUser, followUser, unfollowUser, deleteUser, getAuthUser, updateUser, getUserFeed, addPost, getPostFeed, deletePost, likePost, unlikePost, addComment, deleteComment, getPostByUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followUser", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowUser", function() { return unfollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUser", function() { return getAuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFeed", function() { return getUserFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostFeed", function() { return getPostFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePost", function() { return likePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikePost", function() { return unlikePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostByUser", function() { return getPostByUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId) {
    var _ref2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/profile/".concat(userId));

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
var followUser =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(followId) {
    var _ref4, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/follow", {
              followId: followId
            });

          case 2:
            _ref4 = _context2.sent;
            data = _ref4.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function followUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var unfollowUser =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(followId) {
    var _ref6, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/unfollow", {
              followId: followId
            });

          case 2:
            _ref6 = _context3.sent;
            data = _ref6.data;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function unfollowUser(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteUser =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(authUserId) {
    var _ref8, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/users/".concat(authUserId));

          case 2:
            _ref8 = _context4.sent;
            data = _ref8.data;
            return _context4.abrupt("return", data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function deleteUser(_x4) {
    return _ref7.apply(this, arguments);
  };
}();
var getAuthUser =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(authUserId) {
    var _ref10, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/".concat(authUserId));

          case 2:
            _ref10 = _context5.sent;
            data = _ref10.data;
            return _context5.abrupt("return", data);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getAuthUser(_x5) {
    return _ref9.apply(this, arguments);
  };
}();
var updateUser =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(authUserId, userData) {
    var _ref12, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/".concat(authUserId), userData);

          case 2:
            _ref12 = _context6.sent;
            data = _ref12.data;
            return _context6.abrupt("return", data);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function updateUser(_x6, _x7) {
    return _ref11.apply(this, arguments);
  };
}();
var getUserFeed =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(authUserId) {
    var _ref14, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/feed/".concat(authUserId));

          case 2:
            _ref14 = _context7.sent;
            data = _ref14.data;
            return _context7.abrupt("return", data);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getUserFeed(_x8) {
    return _ref13.apply(this, arguments);
  };
}();
var addPost =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(authUserId, post) {
    var _ref16, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/posts/new/".concat(authUserId), post);

          case 2:
            _ref16 = _context8.sent;
            data = _ref16.data;
            return _context8.abrupt("return", data);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function addPost(_x9, _x10) {
    return _ref15.apply(this, arguments);
  };
}();
var getPostFeed =
/*#__PURE__*/
function () {
  var _ref17 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(authUserId) {
    var _ref18, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/posts/feed/".concat(authUserId));

          case 2:
            _ref18 = _context9.sent;
            data = _ref18.data;
            return _context9.abrupt("return", data);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function getPostFeed(_x11) {
    return _ref17.apply(this, arguments);
  };
}();
var deletePost =
/*#__PURE__*/
function () {
  var _ref19 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(postId) {
    var _ref20, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/posts/".concat(postId));

          case 2:
            _ref20 = _context10.sent;
            data = _ref20.data;
            return _context10.abrupt("return", data);

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function deletePost(_x12) {
    return _ref19.apply(this, arguments);
  };
}();
var likePost =
/*#__PURE__*/
function () {
  var _ref21 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(postId) {
    var _ref22, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/like", {
              postId: postId
            });

          case 2:
            _ref22 = _context11.sent;
            data = _ref22.data;
            return _context11.abrupt("return", data);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function likePost(_x13) {
    return _ref21.apply(this, arguments);
  };
}();
var unlikePost =
/*#__PURE__*/
function () {
  var _ref23 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(postId) {
    var _ref24, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/unlike", {
              postId: postId
            });

          case 2:
            _ref24 = _context12.sent;
            data = _ref24.data;
            return _context12.abrupt("return", data);

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function unlikePost(_x14) {
    return _ref23.apply(this, arguments);
  };
}();
var addComment =
/*#__PURE__*/
function () {
  var _ref25 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(postId, comment) {
    var _ref26, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/comment", {
              postId: postId,
              comment: comment
            });

          case 2:
            _ref26 = _context13.sent;
            data = _ref26.data;
            return _context13.abrupt("return", data);

          case 5:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  return function addComment(_x15, _x16) {
    return _ref25.apply(this, arguments);
  };
}();
var deleteComment =
/*#__PURE__*/
function () {
  var _ref27 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(postId, comment) {
    var _ref28, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/posts/uncomment", {
              postId: postId,
              comment: comment
            });

          case 2:
            _ref28 = _context14.sent;
            data = _ref28.data;
            return _context14.abrupt("return", data);

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }));

  return function deleteComment(_x17, _x18) {
    return _ref27.apply(this, arguments);
  };
}();
var getPostByUser =
/*#__PURE__*/
function () {
  var _ref29 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(postId) {
    var _ref30, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/posts/by/".concat(postId));

          case 2:
            _ref30 = _context15.sent;
            data = _ref30.data;
            return _context15.abrupt("return", data);

          case 5:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, this);
  }));

  return function getPostByUser(_x19) {
    return _ref29.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: getUserScript, getSessionFromServer, getSessionFromClient, authInitialProps, signupUser, signinUser, signoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserScript", function() { return getUserScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionFromServer", function() { return getSessionFromServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionFromClient", function() { return getSessionFromClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialProps", function() { return authInitialProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUser", function() { return signupUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signinUser", function() { return signinUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signoutUser", function() { return signoutUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var WINDOW_USER_SCRIPT_VARIABLE = "__USER__";
var getUserScript = function getUserScript(user) {
  return "".concat(WINDOW_USER_SCRIPT_VARIABLE, " = ").concat(JSON.stringify(user), ";");
};
var getSessionFromServer = function getSessionFromServer(req) {
  if (req.user) {
    return {
      user: req.user
    };
  }

  return {};
};
var getSessionFromClient = function getSessionFromClient() {
  if (typeof window !== "undefined") {
    var user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return {
      user: user
    };
  }

  return {
    user: {}
  };
};

var redirectUser = function redirectUser(res, path) {
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return {};
  }

  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace(path);
  return {};
};

var authInitialProps = function authInitialProps(isProtectedRoute) {
  return function (_ref) {
    var req = _ref.req,
        res = _ref.res,
        userId = _ref.query.userId;
    var auth = req ? getSessionFromServer(req) : getSessionFromClient();
    var currentPath = req ? req.url : window.location.pathname;
    var user = auth.user;
    var isAnonymous = !user;

    if (isProtectedRoute && isAnonymous && currentPath !== "/signin") {
      return redirectUser(res, "/signin");
    }

    return {
      auth: auth,
      userId: userId
    };
  };
};
var signupUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {
    var _ref3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth/signup", user);

          case 2:
            _ref3 = _context.sent;
            data = _ref3.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function signupUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var signinUser =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(user) {
    var _ref5, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth/signin", user);

          case 2:
            _ref5 = _context2.sent;
            data = _ref5.data;

            if (typeof window !== "undefined") {
              window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function signinUser(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var signoutUser =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (typeof window !== "undefined") {
              window[WINDOW_USER_SCRIPT_VARIABLE] = {};
            }

            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/auth/signout');

          case 3:
            next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/signin');

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function signoutUser() {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_profile_ProfileTabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../components/profile/ProfileTabs */ "./components/profile/ProfileTabs.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _components_profile_FollowUser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../components/profile/FollowUser */ "./components/profile/FollowUser.js");
/* harmony import */ var _components_profile_DeleteUser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/profile/DeleteUser */ "./components/profile/DeleteUser.js");
/* harmony import */ var _components_index_Post__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/index/Post */ "./components/index/Post.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Profile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      user: null,
      posts: [],
      isAuth: false,
      isFollowing: false,
      isLoading: true,
      isDeletingPost: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkFollow", function (auth, user) {
      return user.followers.findIndex(function (follower) {
        return follower._id === auth.user._id;
      }) > -1;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleFollow", function (sendRequest) {
      var userId = _this.props.userId;
      var isFollowing = _this.state.isFollowing;
      sendRequest(userId).then(function () {
        _this.setState({
          isFollowing: !isFollowing
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDeletePost", function (deletedPost) {
      _this.setState({
        isDeletingPost: true
      });

      Object(_lib_api__WEBPACK_IMPORTED_MODULE_18__["deletePost"])(deletedPost._id).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id === postData._id;
        });

        var updatedPosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), _toConsumableArray(_this.state.posts.slice(postIndex + 1)));

        _this.setState({
          posts: updatedPosts,
          isDeletingPost: false
        });
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          isDeletingPost: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleLike", function (post) {
      var auth = _this.props.auth;
      var isPostLiked = post.likes.includes(auth.user._id);
      var sendRequest = isPostLiked ? _lib_api__WEBPACK_IMPORTED_MODULE_18__["unlikePost"] : _lib_api__WEBPACK_IMPORTED_MODULE_18__["likePost"];
      sendRequest(post._id).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id === postData._id;
        });

        var updatedPosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), [postData], _toConsumableArray(_this.state.posts.slice(postIndex + 1)));

        _this.setState({
          posts: updatedPosts
        });
      }).catch(function (err) {
        return console.error(err);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAddComment", function (postId, text) {
      var comment = {
        text: text
      };
      Object(_lib_api__WEBPACK_IMPORTED_MODULE_18__["addComment"])(postId, comment).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id === postData._id;
        });

        var updatedPosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), [postData], _toConsumableArray(_this.state.posts.slice(postIndex + 1)));

        _this.setState({
          posts: updatedPosts
        });
      }).catch(function (err) {
        return console.error(err);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDeleteComment", function (postId, comment) {
      Object(_lib_api__WEBPACK_IMPORTED_MODULE_18__["deleteComment"])(postId, comment).then(function (postData) {
        var postIndex = _this.state.posts.findIndex(function (post) {
          return post._id === postData._id;
        });

        var updatedPosts = [].concat(_toConsumableArray(_this.state.posts.slice(0, postIndex)), [postData], _toConsumableArray(_this.state.posts.slice(postIndex + 1)));

        _this.setState({
          posts: updatedPosts
        });
      }).catch(function (err) {
        return console.error(err);
      });
    });

    return _this;
  }

  _createClass(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          userId = _this$props.userId,
          auth = _this$props.auth;
      var isAuth = auth.user._id === userId;
      Object(_lib_api__WEBPACK_IMPORTED_MODULE_18__["getUser"])(userId).then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user) {
          var isFollowing, posts;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  isFollowing = _this2.checkFollow(auth, user);
                  _context.next = 3;
                  return Object(_lib_api__WEBPACK_IMPORTED_MODULE_18__["getPostByUser"])(userId).then().catch();

                case 3:
                  posts = _context.sent;

                  _this2.setState({
                    user: user,
                    isAuth: isAuth,
                    posts: posts,
                    isFollowing: isFollowing,
                    isLoading: false
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          auth = _this$props2.auth;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          user = _this$state.user,
          isAuth = _this$state.isAuth,
          isFollowing = _this$state.isFollowing,
          posts = _this$state.posts,
          isDeletingPost = _this$state.isDeletingPost;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: classes.root,
        elevation: 4
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "h4",
        component: "h1",
        align: "center",
        className: classes.title,
        gutterBottom: true
      }, "Profile"), isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.progressContainer
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.progress,
        size: 55,
        thickness: 5
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
        dense: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
        src: user.avatar,
        className: classes.bigAvatar
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
        primary: user.name,
        secondary: user.email
      }), isAuth ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
        href: "/edit-profile"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
        color: "primary"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default.a, null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_profile_DeleteUser__WEBPACK_IMPORTED_MODULE_20__["default"], {
        user: user
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_profile_FollowUser__WEBPACK_IMPORTED_MODULE_19__["default"], {
        isFollowing: isFollowing,
        toggleFollow: this.toggleFollow
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
        primary: user.about,
        secondary: "Joined: ".concat(user.createdAt)
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_profile_ProfileTabs__WEBPACK_IMPORTED_MODULE_16__["default"], {
        auth: auth,
        posts: posts,
        user: user,
        isDeletingPost: isDeletingPost,
        handleDeletePost: this.handleDeletePost,
        handleToggleLike: this.handleToggleLike,
        handleAddComment: this.handleAddComment,
        handleDeleteComment: this.handleDeleteComment
      })));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var styles = function styles(theme) {
  return {
    root: _defineProperty({
      padding: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 5,
      margin: "auto"
    }, theme.breakpoints.up("sm"), {
      width: 600
    }),
    title: {
      color: theme.palette.primary.main
    },
    progress: {
      margin: theme.spacing.unit * 2
    },
    progressContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    },
    bigAvatar: {
      width: 60,
      height: 60,
      margin: 10
    }
  };
};

Profile.getInitialProps = Object(_lib_auth__WEBPACK_IMPORTED_MODULE_17__["authInitialProps"])(true);
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_14___default()(styles)(Profile));

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/profile.js */"./pages/profile.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/GridList":
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ "@material-ui/core/GridListTile":
/*!*************************************************!*\
  !*** external "@material-ui/core/GridListTile" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles/withStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/withStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),

/***/ "@material-ui/icons/Comment":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Comment" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Comment");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/DeleteTwoTone":
/*!***************************************************!*\
  !*** external "@material-ui/icons/DeleteTwoTone" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteTwoTone");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FavoriteBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/FavoriteBorder" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map