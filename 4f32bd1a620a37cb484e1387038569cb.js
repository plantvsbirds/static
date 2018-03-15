// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var yCord = function yCord() {
  return window.pageYOffset;
};
var height = Math.min(document.documentElement.clientHeight, 700);
var heights = [].concat(_toConsumableArray(document.querySelectorAll('.container'))).map(function (e) {
  return e.getBoundingClientRect().height;
});
var pageN = function pageN() {
  return heights.reduce(function (_ref, h) {
    var _ref2 = _slicedToArray(_ref, 2),
        prevN = _ref2[0],
        y = _ref2[1];

    return y - h > 0 ? [prevN + 1, y - h] : [prevN + y / h, 0];
  }, [0, yCord()])[0];
};

var $id = function $id(id) {
  return document.getElementById(id);
};
var $class = function $class(el, cls, setTo) {
  var clsList = el.classList;
  if (clsList) {
    if (setTo) {
      clsList.add(cls);
    } else {
      clsList.remove(cls);
    }
  } else {
    if (setTo) {
      el.className += ' ' + cls;
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + cls.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
};

var navs = [].concat(_toConsumableArray(document.querySelectorAll('.nav')));
var activeNavIndex = 0;
var scrollWaitTimer = null;

var finishScroll = function finishScroll() {
  var n = pageN(),
      floor = Math.floor(n),
      ceiling = floor + 1;
  if (n < .2) activeNavIndex = 0;
  if (floor === 0 && n !== 0) activeNavIndex = null;
  if (floor >= 1) activeNavIndex = floor;
  if (ceiling - n < 0.3 && ceiling >= 1) activeNavIndex = ceiling;
  // update
  navs.forEach(function (e, idx) {
    $class(e, 'active', activeNavIndex == idx);
  });
};

document.addEventListener('scroll', function () {
  finishScroll();
});

finishScroll();
},{}],7:[function(require,module,exports) {
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

[].concat(_toConsumableArray(document.querySelectorAll('[data-typewriter]'))).forEach(function (e) {
  try {
    var words = JSON.parse(e.getAttribute('data-words').split("'").join('"'));
    var banner = [].concat(_toConsumableArray(e.querySelectorAll('[data-slot]')));
    var type = function type(str, elem) {
      if (str.length !== 0) {
        var _update = function _update() {
          return elem.innerHTML = elem.innerHTML + str[0];
        };
        requestAnimationFrame ? requestAnimationFrame(_update) : _update();
        setTimeout(function () {
          return type(str.slice(1), elem);
        }, str[0] === ' ' ? 0 : 80);
      }
    };
    var update = function update(idx) {
      banner.forEach(function (b, bid) {
        b.innerHTML = '';
        type(words[idx][bid], b);
      });
      setTimeout(function () {
        return update((idx + 1) % words.length);
      }, 3000);
    };
    update(0);
  } catch (e) {}
});
},{}],11:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var $id = exports.$id = function $id(id) {
  return document.getElementById(id);
};
var $class = exports.$class = function $class(el, cls, setTo) {
  var clsList = el.classList;
  if (clsList) {
    if (setTo) {
      clsList.add(cls);
    } else {
      clsList.remove(cls);
    }
  } else {
    if (setTo) {
      el.className += ' ' + cls;
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + cls.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
};
},{}],8:[function(require,module,exports) {
'use strict';

var _util = require('./util.js');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

[].concat(_toConsumableArray(document.querySelectorAll('[data-video-control]'))).forEach(function (e) {
  var vid = document.querySelector(e.getAttribute('data-video-control'));
  if (!vid) return;
  var onClick = function onClick() {
    if (vid.paused || vid.ended) {
      vid.play();
      (0, _util.$class)(e, 'paused', false);
      var reqFullScreen = vid.requestFullscreen || vid.webkitRequestFullscreen;
      if (reqFullScreen) {
        reqFullScreen();
      }
    } else {
      vid.pause();
      (0, _util.$class)(e, 'paused', true);
    }
  };
  e.addEventListener('click', onClick);
  e.addEventListener('ontouchstart', onClick);
  vid.addEventListener('click', onClick);
  vid.addEventListener('ontouchstart', onClick);
  vid.addEventListener('pause', function () {
    (0, _util.$class)(e, 'paused', true);
  });
});
},{"./util.js":11}],9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var modal = document.querySelector('.modal');
var titleSlot = modal.querySelector('[data-slot-title]');
var bodySlot = modal.querySelector('[data-slot-body]');
var returnBtn = modal.querySelector('[data-action-return]');

var active = false;

var launchModal = exports.launchModal = function launchModal() {
  document.body.setAttribute('no-scroll', '');
  modal.setAttribute('active', '');
};

var set = exports.set = function set(_ref) {
  var title = _ref.title,
      content = _ref.content;

  titleSlot.innerHTML = title;
  bodySlot.innerHTML = content;
};

var closeModal = exports.closeModal = function closeModal() {
  document.body.removeAttribute('no-scroll');
  modal.removeAttribute('active');
};

returnBtn.addEventListener('click', closeModal);
},{}],10:[function(require,module,exports) {
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _modal = require('./modal.js');

var data = [["#childhood", 'Childhood', 'Born and raised&nbsp;in <a href="http://www.kentwired.com/latest_updates/article_6f12dc34-5b92-11e7-8f02-33af3689383d.html" target="_blank" data-content="http://www.kentwired.com/latest_updates/article_6f12dc34-5b92-11e7-8f02-33af3689383d.html" data-type="external" rel="undefined">Kent, Ohio</a> by two public school teachers,&nbsp;Benjamin quickly&nbsp;learned the core values of education and hard work. At the age of twelve, <a href="https://www.instagram.com/p/BTm3PysAI5a/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BTm3PysAI5a/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">Benjamin discovered the pleasure of public service while working for the local parks and recreation department.&nbsp; He continued volunteering with city and state organizations throughout his formative years.</a>'], ["#fbi", 'F.B.I.', 'After completing a <a href="https://www.facebook.com/notes/washington-program-in-national-issues/wpni-alum-highlight-benjamin-wolf-wpni1997/1451335854898393" target="_blank" data-content="https://www.facebook.com/notes/washington-program-in-national-issues/wpni-alum-highlight-benjamin-wolf-wpni1997/1451335854898393" data-type="external" rel="undefined">university internship on Capitol Hill in Washington D.C</a>.,&nbsp;Benjamin was <a href="https://www.instagram.com/p/BTd31PqAdKp/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BTd31PqAdKp/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">recruited</a> by the <a href="https://www.instagram.com/p/BUPbPyggdvR/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPbPyggdvR/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">Federal Bureau of Investigation</a>. <a href="https://www.instagram.com/p/BUPabMcgzTm/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPabMcgzTm/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">He graduated from the F.B.I. Academy</a> and <a href="https://www.instagram.com/p/BUPas0igC0J/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPas0igC0J/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">worked for&nbsp;years</a>&nbsp;within the <a href="https://en.wikipedia.org/wiki/Special_Surveillance_Group" target="_blank" data-content="https://en.wikipedia.org/wiki/Special_Surveillance_Group" data-type="external" rel="undefined">National Security Division</a> on the <a href="https://en.wikipedia.org/wiki/Special_Surveillance_Group" target="_blank" data-content="https://en.wikipedia.org/wiki/Special_Surveillance_Group" data-type="external" rel="undefined">highest priority</a>&nbsp;<a href="https://www.instagram.com/p/BUPb9LTAEM1/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPb9LTAEM1/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">terrorism</a>, <a href="https://www.instagram.com/p/BUPbn5YgBB8/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPbn5YgBB8/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">intelligence, </a>and international security matters.'], ["#diplomat", 'Diplomat', 'Benjamin later transferred to the U.S. <a href="https://www.instagram.com/p/BUPr-zMgEy0/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPr-zMgEy0/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">Department of State</a>&nbsp;as an American diplomat and earned tenure&nbsp;in the&nbsp;Foreign&nbsp;Service while&nbsp;<a href="https://www.instagram.com/p/BUPbELugppi/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPbELugppi/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">advancing security and diplomatic efforts abroad.</a> &nbsp; He&nbsp;actively and loyally served four Secretaries of State and advised dozens of U.S. <a href="https://www.facebook.com/wolfforcongress2018/photos/rpp.1046374028742297/1372810346098662/?type=3&amp;theater" target="_blank" data-content="https://www.facebook.com/wolfforcongress2018/photos/rpp.1046374028742297/1372810346098662/?type=3&amp;theater" data-type="external" rel="undefined">ambassadors.</a>&nbsp;&nbsp; <a href="https://www.instagram.com/p/BSZR29sg6sm/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BSZR29sg6sm/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">He received his Foreign Service tenure directly from Secretary Clinton</a> and often traveled with U.S.&nbsp;<a href="https://www.instagram.com/p/BUPYGzCAvZ1/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPYGzCAvZ1/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">Presidents as a security and human rights liaison. B</a>enjamin&nbsp;volunteered to <a href="https://www.instagram.com/p/BUPryrpAnVT/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPryrpAnVT/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">work in conflict</a> and <a href="https://www.instagram.com/p/BUkVobWgawB/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUkVobWgawB/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">war zones</a>&nbsp;<a href="https://www.instagram.com/p/BUPryrpAnVT/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPryrpAnVT/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">while protecting</a>&nbsp;and <a href="https://www.instagram.com/p/BUPsO2PAGWm/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPsO2PAGWm/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">defending the lives of others.</a> &nbsp;<a href="https://docs.wixstatic.com/ugd/e0f1f2_8f1daedfc8764e8c8e05fa24acf8981c.pdf" target="_blank" data-type="document">He also has served multiple times in Iraq.</a>&nbsp;'], ["#africa", 'Africa', 'Benjamin lived in <a href="https://www.instagram.com/p/BUPXgPegz8l/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BUPXgPegz8l/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">North and West Africa</a> for many years where he&nbsp;<a href="https://www.instagram.com/p/BRquRXpA9Zj/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BRquRXpA9Zj/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">collaborated</a> with international agencies including the W<a href="https://www.facebook.com/wolfforcongress2018/videos/1363286167051080/" target="_blank" data-content="https://www.facebook.com/wolfforcongress2018/videos/1363286167051080/" data-type="external" rel="undefined">orld Bank, the United Nations</a>, and&nbsp;the Red Cross. Created by President John F. Kennedy, the Peace Corps is Benjamin\'s&nbsp;favorite agency&nbsp;and was his inspiration to be a change agent overseas. &nbsp;It was during his years working in developing countries that Benjamin learned a new sense of appreciation that he translated into empowerment programs, job creation, skill-building and education initiatives.'], ["#family", 'Family', 'Benjamin has a modern&nbsp;multicultural family and raised his&nbsp;twin boys in Africa during his diplomatic postings to&nbsp;Algeria and Senegal.'], ["#scholar", 'Scholar', 'Upon completion of his <a href="https://www.thechicagoschool.edu/online/programs/phd-international-psychology-organizations-systems-concentration/" target="_blank" data-content="https://www.thechicagoschool.edu/online/programs/phd-international-psychology-organizations-systems-concentration/" data-type="external" rel="undefined">Ph.D. in International Psychology</a>, Benjamin will&nbsp;continue working in Chicago as a <a href="https://www.roosevelt.edu/Academics/Faculty/Profile?ID=bwolf" target="_blank" data-content="https://www.roosevelt.edu/Academics/Faculty/Profile?ID=bwolf" data-type="external" rel="undefined">professor while&nbsp;being</a>&nbsp;an advocate for <a href="https://www.instagram.com/p/BQ4dFYvg9wH/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BQ4dFYvg9wH/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">international human rights</a> and global justice issues.&nbsp;<a href="http://anatomyofliving.com/episode-03-how-to-participate-in-the-political-process-and-make-a-difference-conversation-with-benjamin-thomas-wolf/" target="_blank" data-content="http://anatomyofliving.com/episode-03-how-to-participate-in-the-political-process-and-make-a-difference-conversation-with-benjamin-thomas-wolf/" data-type="external" rel="undefined">His doctoral dissertation focuses on&nbsp;social movements and how basic human rights must be applied equally to every human regardless of race, gender, national identity&nbsp;or&nbsp;economic status.</a>&nbsp;&nbsp;<a href="https://www.instagram.com/p/BTp8WvbATqQ/?taken-by=benjaminthomaswolf" target="_blank" data-content="https://www.instagram.com/p/BTp8WvbATqQ/?taken-by=benjaminthomaswolf" data-type="external" rel="undefined">This idea&nbsp;sits at the cornerstone of&nbsp;his personal and political values.</a>']];

var jumps = ["#running", ''];

data.forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      trigger = _ref2[0],
      title = _ref2[1],
      content = _ref2[2];

  document.querySelector(trigger).addEventListener('click', function () {
    (0, _modal.set)({
      title: title,
      content: content
    });
    (0, _modal.launchModal)();
  });
});
},{"./modal.js":9}],4:[function(require,module,exports) {
'use strict';

require('./nav.js');

require('./typewriter.js');

require('./video.js');

require('./modal.js');

require('./timeline.js');
},{"./nav.js":6,"./typewriter.js":7,"./video.js":8,"./modal.js":9,"./timeline.js":10}]},{},[4])