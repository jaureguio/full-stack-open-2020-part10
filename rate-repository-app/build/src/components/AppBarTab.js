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
var react_router_native_1 = require("react-router-native");
var Text_1 = require("./Text");
var theme_1 = require("../theme");
var styles = react_native_1.StyleSheet.create({
    text: {
        fontSize: theme_1["default"].fontSizes.subheading,
        fontWeight: theme_1["default"].fontWeights.bold,
        color: theme_1["default"].appBar.textPrimary,
        padding: 8
    },
    active: {
        textDecorationLine: 'underline'
    }
});
var AppBarTab = function (_a) {
    var isActive = _a.isActive, 
    // onPress = () => null,
    style = _a.style, props = __rest(_a, ["isActive", "style"]);
    var location = react_router_native_1.useLocation();
    console.log(location);
    var appBarTabStyles = [
        styles.text,
        isActive && styles.active,
        style
    ];
    return (<react_native_1.TouchableWithoutFeedback>
      <Text_1.default style={appBarTabStyles} {...props}/>
    </react_native_1.TouchableWithoutFeedback>);
};
exports["default"] = AppBarTab;
