"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_native_1 = require("react-router-native");
var Main_1 = require("./src/components/Main");

console.log('APP!!!!')
function App() {
    return (<react_router_native_1.NativeRouter>
      <Main_1.default />
    </react_router_native_1.NativeRouter>);
}
exports["default"] = App;
