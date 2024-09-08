"use strict";

require("core-js/modules/es6.string.includes.js");
require("core-js/modules/es7.array.includes.js");
require("core-js/modules/es6.symbol.js");
var _excluded = ["hoge"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
{
  var data = {
    hoge: 'hoooooo',
    fuga: 'gaaaaaa',
    piyo: 'piiiii'
  };
  var _hoge = data.hoge,
    other = _objectWithoutProperties(data, _excluded);
  console.log(_hoge, other);
}
var hoge = 'mumumu';
