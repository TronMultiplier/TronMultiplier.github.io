!function(n){var t=function(){return void 0===t._value&&(t._value="undefined"!=typeof tronWeb),t._value},e=function(n){var i=function(){n(!0)},r=function(){n(!1)};if(!0===typeof e._init)return void i();if(!t())return void r();var o=0,u=setInterval(function(){o++,e._init||tronWeb.ready?(clearInterval(u),e._init=!0,i()):o>45&&(clearInterval(u),r())},1e3/60)},i=function(){return!!t()&&tronWeb.defaultAddress.base58},r=function(n){e(function(t){"function"==typeof n&&n(!!t&&!1!==i())})};r.installed=function(){return t()},r.getAddress=function(){return i()},function(n){window.tronapp=n}(r)}();