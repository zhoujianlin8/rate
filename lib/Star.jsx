'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = function (_React$Component) {
  _inherits(Star, _React$Component);

  function Star() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Star);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Star.__proto__ || Object.getPrototypeOf(Star)).call.apply(_ref, [this].concat(args))), _this), _this.onHover = function (e) {
      var _this$props = _this.props,
          onHover = _this$props.onHover,
          index = _this$props.index;

      onHover(e, index);
    }, _this.onClick = function (e) {
      var _this$props2 = _this.props,
          onClick = _this$props2.onClick,
          index = _this$props2.index;

      onClick(e, index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Star, [{
    key: 'getClassName',
    value: function getClassName() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          index = _props.index,
          value = _props.value;

      var starValue = index + 1;
      if (value > index && value < starValue) {
        return prefixCls + ' ' + prefixCls + '-half ' + prefixCls + '-active ' + prefixCls + '-' + Math.round((value - index) * 10);
      }
      return starValue <= value ? prefixCls + ' ' + prefixCls + '-full' : prefixCls + ' ' + prefixCls + '-zero';
    }
  }, {
    key: 'render',
    value: function render() {
      var onHover = this.onHover,
          onClick = this.onClick;
      var _props2 = this.props,
          disabled = _props2.disabled,
          prefixCls = _props2.prefixCls,
          character = _props2.character;

      return _react2.default.createElement(
        'li',
        {
          className: this.getClassName(),
          onClick: disabled ? null : onClick,
          onMouseMove: disabled ? null : onHover
        },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-first' },
          character
        ),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-second' },
          character
        )
      );
    }
  }]);

  return Star;
}(_react2.default.Component);

Star.propTypes = {
  value: _propTypes2.default.number,
  index: _propTypes2.default.number,
  prefixCls: _propTypes2.default.string,
  allowHalf: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onHover: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  character: _propTypes2.default.node
};
exports.default = Star;