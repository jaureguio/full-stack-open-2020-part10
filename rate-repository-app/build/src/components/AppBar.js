"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_router_native_1 = require("react-router-native");
var AppBarTab_1 = require("./AppBarTab");
var expo_constants_1 = require("expo-constants");
var theme_1 = require("../theme");
var styles = react_native_1.StyleSheet.create({
    container: {
        paddingTop: expo_constants_1["default"].statusBarHeight,
        backgroundColor: theme_1["default"].appBar.primary
    }
});
var AppBar = function () {
    return (<react_native_1.View style={styles.container}>
      <react_router_native_1.Link to='/' component={AppBarTab_1["default"]} isActive>Repositories</react_router_native_1.Link>
      <react_router_native_1.Link to='/' component={AppBarTab_1["default"]} isActive>Signin</react_router_native_1.Link>
    </react_native_1.View>);
};
exports["default"] = AppBar;
