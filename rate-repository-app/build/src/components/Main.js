"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_router_native_1 = require("react-router-native");
var theme_1 = require("../theme");
var AppBar_1 = require("./AppBar");
var RepositoryList_1 = require("./RepositoryList");
var SingIn_1 = require("./SingIn");
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: theme_1["default"].colors.mainBackground,
        flexGrow: 1,
        flexShrink: 1
    }
});
var Main = function () {
    console.log('LOGGIN FROM MAIN');
    return (<react_native_1.View style={styles.container}>
      <AppBar_1.default />
      <react_router_native_1.Switch>
        <react_router_native_1.Route path='/' exact>
          <RepositoryList_1.default />
        </react_router_native_1.Route>
        <react_router_native_1.Route path='/signin'>
          <SingIn_1.default />
        </react_router_native_1.Route>
        <react_router_native_1.Redirect to='/'/>
      </react_router_native_1.Switch>
    </react_native_1.View>);
};
exports["default"] = Main;
