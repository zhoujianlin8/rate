'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _Star = require('./Star');

var _Star2 = _interopRequireDefault(_Star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var Rate = function (_React$Component) {
    _inherits(Rate, _React$Component);

    function Rate(props) {
        _classCallCheck(this, Rate);

        var _this = _possibleConstructorReturn(this, (Rate.__proto__ || Object.getPrototypeOf(Rate)).call(this, props));

        _initialiseProps.call(_this);

        var value = props.value;
        if (value === undefined) {
            value = props.defaultValue;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    _createClass(Rate, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                var value = nextProps.value;
                if (value === undefined) {
                    value = nextProps.defaultValue;
                }
                this.setState({
                    value: value
                });
            }
        }
    }, {
        key: 'getStarDOM',
        value: function getStarDOM(index) {
            return _reactDom2.default.findDOMNode(this.refs['star_' + index]);
        }
    }, {
        key: 'getStarValue',
        value: function getStarValue(index, x) {
            var value = index + 1;
            if (this.props.allowHalf) {
                var leftEdge = (0, _util.getOffsetLeft)(this.getStarDOM(0));
                var width = (0, _util.getOffsetLeft)(this.getStarDOM(1)) - leftEdge;
                if (x - leftEdge - width * index < width / 2) {
                    value -= 0.5;
                }
            }
            return value;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                count = _props.count,
                allowHalf = _props.allowHalf,
                style = _props.style,
                prefixCls = _props.prefixCls,
                disabled = _props.disabled,
                className = _props.className,
                character = _props.character;
            var _state = this.state,
                value = _state.value,
                hoverValue = _state.hoverValue;

            var stars = [];
            var disabledClass = disabled ? prefixCls + '-disabled' : '';
            for (var index = 0; index < count; index++) {
                stars.push(_react2.default.createElement(_Star2.default, {
                    ref: 'star_' + index,
                    index: index,
                    disabled: disabled,
                    prefixCls: prefixCls + '-star',
                    allowHalf: allowHalf,
                    value: hoverValue === undefined ? value : hoverValue,
                    onClick: this.onClick,
                    onHover: this.onHover,
                    key: index,
                    character: character
                }));
            }
            return _react2.default.createElement(
                'ul',
                {
                    className: (0, _classnames2.default)(prefixCls, disabledClass, className),
                    style: style,
                    onMouseLeave: disabled ? null : this.onMouseLeave
                },
                stars
            );
        }
    }]);

    return Rate;
}(_react2.default.Component);

Rate.propTypes = {
    disabled: _propTypes2.default.bool,
    value: _propTypes2.default.number,
    defaultValue: _propTypes2.default.number,
    count: _propTypes2.default.number,
    allowHalf: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    prefixCls: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onHoverChange: _propTypes2.default.func,
    className: _propTypes2.default.string,
    character: _propTypes2.default.node
};
Rate.defaultProps = {
    defaultValue: 0,
    count: 5,
    allowHalf: false,
    style: {},
    prefixCls: 'wm-rate',
    onChange: noop,
    character: '★',
    onHoverChange: noop
};

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onHover = function (event, index) {
        var hoverValue = _this2.getStarValue(index, event.pageX);
        _this2.setState({
            hoverValue: hoverValue
        });
        _this2.props.onHoverChange(hoverValue);
    };

    this.onMouseLeave = function () {
        _this2.setState({
            hoverValue: undefined
        });
        _this2.props.onHoverChange(undefined);
    };

    this.onClick = function (event, index) {
        var value = _this2.getStarValue(index, event.pageX);
        if (!('value' in _this2.props)) {
            _this2.setState({
                value: value
            });
        }
        _this2.onMouseLeave();
        _this2.props.onChange(value);
    };
};

exports.default = Rate;