"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var theme_1 = require("../theme");
var styles = react_native_1.StyleSheet.create({
    text: {
        color: theme_1["default"].colors.textPrimary,
        fontSize: theme_1["default"].fontSizes.body,
        fontFamily: theme_1["default"].fonts.main,
        fontWeight: theme_1["default"].fontWeights.normal
    },
    colorTextSecondary: {
        color: theme_1["default"].colors.textSecondary
    },
    colorPrimary: {
        color: theme_1["default"].colors.primary
    },
    fontSizeSubheading: {
        fontSize: theme_1["default"].fontSizes.subheading
    },
    fontWeightBold: {
        fontWeight: theme_1["default"].fontWeights.bold
    }
});
var Text = function (_a) {
    var color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, style = _a.style, props = __rest(_a, ["color", "fontSize", "fontWeight", "style"]);
    var textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ];
    return <react_native_1.Text style={textStyle} {...props}/>;
};
exports["default"] = Text;
