(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ../library_management/node_modules/party-js/lib/settings.js
  var require_settings = __commonJS({
    "../library_management/node_modules/party-js/lib/settings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.settings = void 0;
      exports.settings = {
        debug: false,
        gravity: 800,
        zIndex: 99999,
        respectReducedMotion: true
      };
    }
  });

  // ../library_management/node_modules/party-js/lib/util/config.js
  var require_config = __commonJS({
    "../library_management/node_modules/party-js/lib/util/config.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.overrideDefaults = void 0;
      function overrideDefaults(defaults, overrides) {
        return Object.assign({}, defaults, overrides);
      }
      exports.overrideDefaults = overrideDefaults;
    }
  });

  // ../library_management/node_modules/party-js/lib/components/circle.js
  var require_circle = __commonJS({
    "../library_management/node_modules/party-js/lib/components/circle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Circle = void 0;
      var Circle = function() {
        function Circle2(x, y, radius) {
          if (radius === void 0) {
            radius = 0;
          }
          this.x = x;
          this.y = y;
          this.radius = radius;
        }
        Circle2.zero = new Circle2(0, 0);
        return Circle2;
      }();
      exports.Circle = Circle;
    }
  });

  // ../library_management/node_modules/party-js/lib/systems/math.js
  var require_math = __commonJS({
    "../library_management/node_modules/party-js/lib/systems/math.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.approximately = exports.clamp = exports.invlerp = exports.slerp = exports.lerp = exports.epsilon = exports.rad2deg = exports.deg2rad = void 0;
      exports.deg2rad = Math.PI / 180;
      exports.rad2deg = 180 / Math.PI;
      exports.epsilon = 1e-6;
      function lerp(a, b, t) {
        return (1 - t) * a + t * b;
      }
      exports.lerp = lerp;
      function slerp(a, b, t) {
        return lerp(a, b, (1 - Math.cos(t * Math.PI)) / 2);
      }
      exports.slerp = slerp;
      function invlerp(a, b, v) {
        return (v - a) / (b - a);
      }
      exports.invlerp = invlerp;
      function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
      }
      exports.clamp = clamp;
      function approximately(a, b) {
        return Math.abs(a - b) < exports.epsilon;
      }
      exports.approximately = approximately;
    }
  });

  // ../library_management/node_modules/party-js/lib/components/color.js
  var require_color = __commonJS({
    "../library_management/node_modules/party-js/lib/components/color.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Color = void 0;
      var math_1 = require_math();
      var Color = function() {
        function Color2(r, g, b) {
          this.values = new Float32Array(3);
          this.rgb = [r, g, b];
        }
        Object.defineProperty(Color2.prototype, "r", {
          get: function() {
            return this.values[0];
          },
          set: function(value) {
            this.values[0] = Math.floor(value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Color2.prototype, "g", {
          get: function() {
            return this.values[1];
          },
          set: function(value) {
            this.values[1] = Math.floor(value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Color2.prototype, "b", {
          get: function() {
            return this.values[2];
          },
          set: function(value) {
            this.values[2] = Math.floor(value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Color2.prototype, "rgb", {
          get: function() {
            return [this.r, this.g, this.b];
          },
          set: function(values) {
            this.r = values[0];
            this.g = values[1];
            this.b = values[2];
          },
          enumerable: false,
          configurable: true
        });
        Color2.prototype.mix = function(color, weight) {
          if (weight === void 0) {
            weight = 0.5;
          }
          return new Color2(math_1.lerp(this.r, color.r, weight), math_1.lerp(this.g, color.g, weight), math_1.lerp(this.b, color.b, weight));
        };
        Color2.prototype.toHex = function() {
          var hex = function(v) {
            return v.toString(16).padStart(2, "0");
          };
          return "#" + hex(this.r) + hex(this.g) + hex(this.b);
        };
        Color2.prototype.toString = function() {
          return "rgb(" + this.values.join(", ") + ")";
        };
        Color2.fromHex = function(hex) {
          if (hex.startsWith("#")) {
            hex = hex.substr(1);
          }
          return new Color2(parseInt(hex.substr(0, 2), 16), parseInt(hex.substr(2, 2), 16), parseInt(hex.substr(4, 2), 16));
        };
        Color2.fromHsl = function(h, s, l) {
          h /= 360;
          s /= 100;
          l /= 100;
          if (s === 0) {
            return new Color2(l, l, l);
          } else {
            var hue2rgb = function(p2, q2, t) {
              if (t < 0)
                t += 1;
              if (t > 1)
                t -= 1;
              if (t < 1 / 6)
                return p2 + (q2 - p2) * 6 * t;
              if (t < 1 / 2)
                return q2;
              if (t < 2 / 3)
                return p2 + (q2 - p2) * (2 / 3 - t) * 6;
              return p2;
            };
            var to255 = function(v) {
              return Math.min(255, 256 * v);
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            return new Color2(to255(hue2rgb(p, q, h + 1 / 3)), to255(hue2rgb(p, q, h)), to255(hue2rgb(p, q, h - 1 / 3)));
          }
        };
        Color2.white = new Color2(255, 255, 255);
        Color2.black = new Color2(0, 0, 0);
        return Color2;
      }();
      exports.Color = Color;
    }
  });

  // ../library_management/node_modules/party-js/lib/components/spline.js
  var require_spline = __commonJS({
    "../library_management/node_modules/party-js/lib/components/spline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Spline = void 0;
      var math_1 = require_math();
      var Spline = function() {
        function Spline2() {
          var keys = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
          }
          if (keys.length === 0) {
            throw new Error("Splines require at least one key.");
          }
          if (Array.isArray(keys[0])) {
            throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");
          }
          this.keys = keys;
        }
        Spline2.prototype.evaluate = function(time) {
          if (this.keys.length === 0) {
            throw new Error("Attempt to evaluate a spline with no keys.");
          }
          if (this.keys.length === 1) {
            return this.keys[0].value;
          }
          var ascendingKeys = this.keys.sort(function(a, b) {
            return a.time - b.time;
          });
          var upperKeyIndex = ascendingKeys.findIndex(function(g) {
            return g.time > time;
          });
          if (upperKeyIndex === 0) {
            return ascendingKeys[0].value;
          }
          if (upperKeyIndex === -1) {
            return ascendingKeys[ascendingKeys.length - 1].value;
          }
          var lowerKey = ascendingKeys[upperKeyIndex - 1];
          var upperKey = ascendingKeys[upperKeyIndex];
          var containedTime = math_1.invlerp(lowerKey.time, upperKey.time, time);
          return this.interpolate(lowerKey.value, upperKey.value, containedTime);
        };
        return Spline2;
      }();
      exports.Spline = Spline;
    }
  });

  // ../library_management/node_modules/party-js/lib/components/gradient.js
  var require_gradient = __commonJS({
    "../library_management/node_modules/party-js/lib/components/gradient.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __spreadArray = exports && exports.__spreadArray || function(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Gradient = void 0;
      var spline_1 = require_spline();
      var Gradient = function(_super) {
        __extends(Gradient2, _super);
        function Gradient2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Gradient2.prototype.interpolate = function(a, b, t) {
          return a.mix(b, t);
        };
        Gradient2.solid = function(color) {
          return new Gradient2({ value: color, time: 0.5 });
        };
        Gradient2.simple = function() {
          var colors = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            colors[_i] = arguments[_i];
          }
          var step = 1 / (colors.length - 1);
          return new (Gradient2.bind.apply(Gradient2, __spreadArray([void 0], colors.map(function(color, index) {
            return {
              value: color,
              time: index * step
            };
          }))))();
        };
        return Gradient2;
      }(spline_1.Spline);
      exports.Gradient = Gradient;
    }
  });

  // ../library_management/node_modules/party-js/lib/components/numericSpline.js
  var require_numericSpline = __commonJS({
    "../library_management/node_modules/party-js/lib/components/numericSpline.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NumericSpline = void 0;
      var math_1 = require_math();
      var spline_1 = require_spline();
      var NumericSpline = function(_super) {
        __extends(NumericSpline2, _super);
        function NumericSpline2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        NumericSpline2.prototype.interpolate = function(a, b, t) {
          return math_1.slerp(a, b, t);
        };
        return NumericSpline2;
      }(spline_1.Spline);
      exports.NumericSpline = NumericSpline;
    }
  });

  // ../library_management/node_modules/party-js/lib/components/rect.js
  var require_rect = __commonJS({
    "../library_management/node_modules/party-js/lib/components/rect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Rect = void 0;
      var Rect = function() {
        function Rect2(x, y, width, height) {
          if (width === void 0) {
            width = 0;
          }
          if (height === void 0) {
            height = 0;
          }
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
        }
        Rect2.fromScreen = function() {
          return new Rect2(window.scrollX, window.scrollY, window.innerWidth, window.innerHeight);
        };
        Rect2.fromElement = function(element) {
          var r = element.getBoundingClientRect();
          return new Rect2(window.scrollX + r.x, window.scrollY + r.y, r.width, r.height);
        };
        Rect2.zero = new Rect2(0, 0);
        return Rect2;
      }();
      exports.Rect = Rect;
    }
  });

  // ../library_management/node_modules/party-js/lib/components/vector.js
  var require_vector = __commonJS({
    "../library_management/node_modules/party-js/lib/components/vector.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Vector = void 0;
      var math_1 = require_math();
      var Vector = function() {
        function Vector2(x, y, z) {
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (z === void 0) {
            z = 0;
          }
          this.values = new Float32Array(3);
          this.xyz = [x, y, z];
        }
        Object.defineProperty(Vector2.prototype, "x", {
          get: function() {
            return this.values[0];
          },
          set: function(value) {
            this.values[0] = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Vector2.prototype, "y", {
          get: function() {
            return this.values[1];
          },
          set: function(value) {
            this.values[1] = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Vector2.prototype, "z", {
          get: function() {
            return this.values[2];
          },
          set: function(value) {
            this.values[2] = value;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Vector2.prototype, "xyz", {
          get: function() {
            return [this.x, this.y, this.z];
          },
          set: function(values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
          },
          enumerable: false,
          configurable: true
        });
        Vector2.prototype.magnitude = function() {
          return Math.sqrt(this.sqrMagnitude());
        };
        Vector2.prototype.sqrMagnitude = function() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        };
        Vector2.prototype.add = function(vector) {
          return new Vector2(this.x + vector.x, this.y + vector.y, this.z + vector.z);
        };
        Vector2.prototype.subtract = function(vector) {
          return new Vector2(this.x - vector.x, this.y - vector.y, this.z - vector.z);
        };
        Vector2.prototype.scale = function(scalar) {
          if (typeof scalar === "number") {
            return new Vector2(this.x * scalar, this.y * scalar, this.z * scalar);
          } else {
            return new Vector2(this.x * scalar.x, this.y * scalar.y, this.z * scalar.z);
          }
        };
        Vector2.prototype.normalized = function() {
          var magnitude = this.magnitude();
          if (magnitude !== 0) {
            return this.scale(1 / magnitude);
          }
          return new (Vector2.bind.apply(Vector2, __spreadArray([void 0], this.xyz)))();
        };
        Vector2.prototype.angle = function(vector) {
          return math_1.rad2deg * Math.acos((this.x * vector.x + this.y * vector.y + this.z * vector.z) / (this.magnitude() * vector.magnitude()));
        };
        Vector2.prototype.cross = function(vector) {
          return new Vector2(this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x);
        };
        Vector2.prototype.dot = function(vector) {
          return this.magnitude() * vector.magnitude() * Math.cos(math_1.deg2rad * this.angle(vector));
        };
        Vector2.prototype.toString = function() {
          return "Vector(" + this.values.join(", ") + ")";
        };
        Vector2.from2dAngle = function(angle) {
          return new Vector2(Math.cos(angle * math_1.deg2rad), Math.sin(angle * math_1.deg2rad));
        };
        Vector2.zero = new Vector2(0, 0, 0);
        Vector2.one = new Vector2(1, 1, 1);
        Vector2.right = new Vector2(1, 0, 0);
        Vector2.up = new Vector2(0, 1, 0);
        Vector2.forward = new Vector2(0, 0, 1);
        return Vector2;
      }();
      exports.Vector = Vector;
    }
  });

  // ../library_management/node_modules/party-js/lib/components/index.js
  var require_components = __commonJS({
    "../library_management/node_modules/party-js/lib/components/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_circle(), exports);
      __exportStar(require_color(), exports);
      __exportStar(require_gradient(), exports);
      __exportStar(require_numericSpline(), exports);
      __exportStar(require_rect(), exports);
      __exportStar(require_vector(), exports);
    }
  });

  // ../library_management/node_modules/party-js/lib/util/rotation.js
  var require_rotation = __commonJS({
    "../library_management/node_modules/party-js/lib/util/rotation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.rotationToNormal = void 0;
      var components_1 = require_components();
      var math_1 = require_math();
      function rotationToNormal(rotation) {
        var alpha = rotation.x * math_1.deg2rad;
        var beta = rotation.y * math_1.deg2rad;
        var a = new components_1.Vector(Math.cos(beta), 0, Math.sin(beta));
        var b = new components_1.Vector(0, Math.cos(alpha), Math.sin(alpha));
        return a.cross(b);
      }
      exports.rotationToNormal = rotationToNormal;
    }
  });

  // ../library_management/node_modules/party-js/lib/util/rules.js
  var require_rules = __commonJS({
    "../library_management/node_modules/party-js/lib/util/rules.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.despawningRules = void 0;
      exports.despawningRules = {
        lifetime: function(particle) {
          return particle.lifetime <= 0;
        },
        bounds: function(particle) {
          var height = document.documentElement.scrollHeight;
          return particle.location.y > height;
        }
      };
    }
  });

  // ../library_management/node_modules/party-js/lib/util/lazy.js
  var require_lazy = __commonJS({
    "../library_management/node_modules/party-js/lib/util/lazy.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Lazy = void 0;
      var Lazy = function() {
        function Lazy2(factory, exists) {
          if (exists === void 0) {
            exists = Lazy2.defaultExists;
          }
          this.factory = factory;
          this.exists = exists;
        }
        Object.defineProperty(Lazy2.prototype, "current", {
          get: function() {
            if (!this.exists(this.value)) {
              this.value = this.factory();
            }
            return this.value;
          },
          enumerable: false,
          configurable: true
        });
        Lazy2.defaultExists = function(value) {
          return typeof value !== "undefined";
        };
        return Lazy2;
      }();
      exports.Lazy = Lazy;
    }
  });

  // ../library_management/node_modules/party-js/lib/util/index.js
  var require_util = __commonJS({
    "../library_management/node_modules/party-js/lib/util/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_config(), exports);
      __exportStar(require_rotation(), exports);
      __exportStar(require_rules(), exports);
      __exportStar(require_lazy(), exports);
    }
  });

  // ../library_management/node_modules/party-js/lib/containers.js
  var require_containers = __commonJS({
    "../library_management/node_modules/party-js/lib/containers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.particleContainer = exports.debugContainer = exports.rootContainer = void 0;
      var settings_1 = require_settings();
      var util_1 = require_util();
      var containerPrefix = "party-js-";
      function isContainerActive(container) {
        return container && container.isConnected;
      }
      function makeContainer(name, styles, parent) {
        var container = document.createElement("div");
        container.id = containerPrefix + name;
        Object.assign(container.style, styles);
        return parent.appendChild(container);
      }
      exports.rootContainer = new util_1.Lazy(function() {
        return makeContainer("container", {
          position: "fixed",
          left: "0",
          top: "0",
          height: "100vh",
          width: "100vw",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: settings_1.settings.zIndex.toString()
        }, document.body);
      }, isContainerActive);
      exports.debugContainer = new util_1.Lazy(function() {
        return makeContainer("debug", {
          position: "absolute",
          top: "0",
          left: "0",
          margin: "0.5em",
          padding: "0.5em 1em",
          border: "2px solid rgb(0, 0, 0, 0.2)",
          background: "rgb(0, 0, 0, 0.1)",
          color: "#555",
          fontFamily: "monospace"
        }, exports.rootContainer.current);
      }, isContainerActive);
      exports.particleContainer = new util_1.Lazy(function() {
        return makeContainer("particles", {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          perspective: "1200px"
        }, exports.rootContainer.current);
      }, isContainerActive);
    }
  });

  // ../library_management/node_modules/party-js/lib/debug.js
  var require_debug = __commonJS({
    "../library_management/node_modules/party-js/lib/debug.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Debug = void 0;
      var containers_1 = require_containers();
      var settings_1 = require_settings();
      var Debug = function() {
        function Debug2(scene) {
          this.scene = scene;
          this.refreshRate = 8;
          this.refreshTimer = 1 / this.refreshRate;
        }
        Debug2.prototype.tick = function(delta) {
          var container = containers_1.debugContainer.current;
          var displayStyle = settings_1.settings.debug ? "block" : "none";
          if (container.style.display !== displayStyle) {
            container.style.display = displayStyle;
          }
          if (!settings_1.settings.debug) {
            return;
          }
          this.refreshTimer += delta;
          if (this.refreshTimer > 1 / this.refreshRate) {
            this.refreshTimer = 0;
            container.innerHTML = this.getDebugInformation(delta).join("<br>");
          }
        };
        Debug2.prototype.getDebugInformation = function(delta) {
          var emitters = this.scene.emitters.length;
          var particles = this.scene.emitters.reduce(function(acc, cur) {
            return acc + cur.particles.length;
          }, 0);
          var infos = [
            "<b>party.js Debug</b>",
            "--------------",
            "FPS: " + Math.round(1 / delta),
            "Emitters: " + emitters,
            "Particles: " + particles
          ];
          var emitterInfos = this.scene.emitters.map(function(emitter) {
            return [
              "\u2B6F: " + (emitter["currentLoop"] + 1) + "/" + (emitter.options.loops >= 0 ? emitter.options.loops : "\u221E"),
              "\u03A3p: " + emitter.particles.length,
              !emitter.isExpired ? "\u03A3t: " + emitter["durationTimer"].toFixed(3) + "s" : "<i>expired</i>"
            ].join(", ");
          });
          infos.push.apply(infos, __spreadArray(["--------------"], emitterInfos));
          return infos;
        };
        return Debug2;
      }();
      exports.Debug = Debug;
    }
  });

  // ../library_management/node_modules/party-js/lib/systems/random.js
  var require_random = __commonJS({
    "../library_management/node_modules/party-js/lib/systems/random.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.randomInsideCircle = exports.randomInsideRect = exports.randomUnitVector = exports.pick = exports.randomRange = void 0;
      var components_1 = require_components();
      var math_1 = require_math();
      function randomRange(min, max) {
        if (min === void 0) {
          min = 0;
        }
        if (max === void 0) {
          max = 1;
        }
        return math_1.lerp(min, max, Math.random());
      }
      exports.randomRange = randomRange;
      function pick(arr) {
        return arr.length === 0 ? void 0 : arr[Math.floor(Math.random() * arr.length)];
      }
      exports.pick = pick;
      function randomUnitVector() {
        var theta = randomRange(0, 2 * Math.PI);
        var z = randomRange(-1, 1);
        return new components_1.Vector(Math.sqrt(1 - z * z) * Math.cos(theta), Math.sqrt(1 - z * z) * Math.sin(theta), z);
      }
      exports.randomUnitVector = randomUnitVector;
      function randomInsideRect(rect) {
        return new components_1.Vector(rect.x + randomRange(0, rect.width), rect.y + randomRange(0, rect.height));
      }
      exports.randomInsideRect = randomInsideRect;
      function randomInsideCircle(circle) {
        var theta = randomRange(0, 2 * Math.PI);
        var radius = randomRange(0, circle.radius);
        return new components_1.Vector(circle.x + Math.cos(theta) * radius, circle.y + Math.sin(theta) * radius);
      }
      exports.randomInsideCircle = randomInsideCircle;
    }
  });

  // ../library_management/node_modules/party-js/lib/systems/variation.js
  var require_variation = __commonJS({
    "../library_management/node_modules/party-js/lib/systems/variation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.gradientSample = exports.splineSample = exports.skewRelative = exports.skew = exports.range = exports.evaluateVariation = void 0;
      var random_1 = require_random();
      function evaluateVariation(variation) {
        if (Array.isArray(variation))
          return random_1.pick(variation);
        if (typeof variation === "function")
          return variation();
        return variation;
      }
      exports.evaluateVariation = evaluateVariation;
      function range(min, max) {
        return function() {
          return random_1.randomRange(min, max);
        };
      }
      exports.range = range;
      function skew(value, amount) {
        return function() {
          return value + random_1.randomRange(-amount, amount);
        };
      }
      exports.skew = skew;
      function skewRelative(value, percentage) {
        return function() {
          return value * (1 + random_1.randomRange(-percentage, percentage));
        };
      }
      exports.skewRelative = skewRelative;
      function splineSample(spline) {
        return function() {
          return spline.evaluate(Math.random());
        };
      }
      exports.splineSample = splineSample;
      function gradientSample(gradient) {
        return splineSample(gradient);
      }
      exports.gradientSample = gradientSample;
    }
  });

  // ../library_management/node_modules/party-js/lib/particles/options/emitterOptions.js
  var require_emitterOptions = __commonJS({
    "../library_management/node_modules/party-js/lib/particles/options/emitterOptions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDefaultEmitterOptions = void 0;
      var rules_1 = require_rules();
      function getDefaultEmitterOptions() {
        return {
          duration: 5,
          loops: 1,
          useGravity: true,
          maxParticles: 300,
          despawningRules: [rules_1.despawningRules.lifetime, rules_1.despawningRules.bounds],
          modules: []
        };
      }
      exports.getDefaultEmitterOptions = getDefaultEmitterOptions;
    }
  });

  // ../library_management/node_modules/party-js/lib/systems/sources.js
  var require_sources = __commonJS({
    "../library_management/node_modules/party-js/lib/systems/sources.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.circleSource = exports.rectSource = exports.mouseSource = exports.elementSource = exports.dynamicSource = void 0;
      var components_1 = require_components();
      var random_1 = require_random();
      function dynamicSource(source) {
        if (source instanceof HTMLElement) {
          return elementSource(source);
        }
        if (source instanceof components_1.Circle) {
          return circleSource(source);
        }
        if (source instanceof components_1.Rect) {
          return rectSource(source);
        }
        if (source instanceof MouseEvent) {
          return mouseSource(source);
        }
        throw new Error("Cannot infer the source type of '" + source + "'.");
      }
      exports.dynamicSource = dynamicSource;
      function elementSource(source) {
        return function() {
          return random_1.randomInsideRect(components_1.Rect.fromElement(source));
        };
      }
      exports.elementSource = elementSource;
      function mouseSource(source) {
        return function() {
          return new components_1.Vector(window.scrollX + source.clientX, window.scrollY + source.clientY);
        };
      }
      exports.mouseSource = mouseSource;
      function rectSource(source) {
        return function() {
          return random_1.randomInsideRect(source);
        };
      }
      exports.rectSource = rectSource;
      function circleSource(source) {
        return function() {
          return random_1.randomInsideCircle(source);
        };
      }
      exports.circleSource = circleSource;
    }
  });

  // ../library_management/node_modules/party-js/lib/particles/options/emissionOptions.js
  var require_emissionOptions = __commonJS({
    "../library_management/node_modules/party-js/lib/particles/options/emissionOptions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDefaultEmissionOptions = void 0;
      var components_1 = require_components();
      var sources_1 = require_sources();
      function getDefaultEmissionOptions() {
        return {
          rate: 10,
          angle: 0,
          bursts: [],
          sourceSampler: sources_1.rectSource(components_1.Rect.zero),
          initialLifetime: 5,
          initialSpeed: 5,
          initialSize: 1,
          initialRotation: components_1.Vector.zero,
          initialColor: components_1.Color.white
        };
      }
      exports.getDefaultEmissionOptions = getDefaultEmissionOptions;
    }
  });

  // ../library_management/node_modules/party-js/lib/particles/options/renderOptions.js
  var require_renderOptions = __commonJS({
    "../library_management/node_modules/party-js/lib/particles/options/renderOptions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDefaultRendererOptions = void 0;
      function getDefaultRendererOptions() {
        return {
          shapeFactory: "square",
          applyColor: defaultApplyColor,
          applyOpacity: defaultApplyOpacity,
          applyLighting: defaultApplyLighting,
          applyTransform: defaultApplyTransform
        };
      }
      exports.getDefaultRendererOptions = getDefaultRendererOptions;
      function defaultApplyColor(color, element) {
        var hex = color.toHex();
        switch (element.nodeName.toLowerCase()) {
          case "div":
            element.style.background = hex;
            break;
          case "svg":
            element.style.fill = element.style.color = hex;
            break;
          default:
            element.style.color = hex;
            break;
        }
      }
      function defaultApplyOpacity(opacity, element) {
        element.style.opacity = opacity.toString();
      }
      function defaultApplyLighting(lighting, element) {
        element.style.filter = "brightness(" + (0.5 + Math.abs(lighting)) + ")";
      }
      function defaultApplyTransform(particle, element) {
        element.style.transform = "translateX(" + (particle.location.x - window.scrollX).toFixed(3) + "px) " + ("translateY(" + (particle.location.y - window.scrollY).toFixed(3) + "px) ") + ("translateZ(" + particle.location.z.toFixed(3) + "px) ") + ("rotateX(" + particle.rotation.x.toFixed(3) + "deg) ") + ("rotateY(" + particle.rotation.y.toFixed(3) + "deg) ") + ("rotateZ(" + particle.rotation.z.toFixed(3) + "deg) ") + ("scale(" + particle.size.toFixed(3) + ")");
      }
    }
  });

  // ../library_management/node_modules/party-js/lib/particles/options/index.js
  var require_options = __commonJS({
    "../library_management/node_modules/party-js/lib/particles/options/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_emitterOptions(), exports);
      __exportStar(require_emissionOptions(), exports);
      __exportStar(require_renderOptions(), exports);
    }
  });

  // ../library_management/node_modules/party-js/lib/particles/particle.js
  var require_particle = __commonJS({
    "../library_management/node_modules/party-js/lib/particles/particle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Particle = void 0;
      var components_1 = require_components();
      var config_1 = require_config();
      var Particle = function() {
        function Particle2(options) {
          var populatedOptions = config_1.overrideDefaults({
            lifetime: 0,
            size: 1,
            location: components_1.Vector.zero,
            rotation: components_1.Vector.zero,
            velocity: components_1.Vector.zero,
            color: components_1.Color.white,
            opacity: 1
          }, options);
          this.id = Symbol();
          this.size = this.initialSize = populatedOptions.size;
          this.lifetime = this.initialLifetime = populatedOptions.lifetime;
          this.rotation = this.initialRotation = populatedOptions.rotation;
          this.location = populatedOptions.location;
          this.velocity = populatedOptions.velocity;
          this.color = populatedOptions.color;
          this.opacity = populatedOptions.opacity;
        }
        return Particle2;
      }();
      exports.Particle = Particle;
    }
  });

  // ../library_management/node_modules/party-js/lib/particles/emitter.js
  var require_emitter = __commonJS({
    "../library_management/node_modules/party-js/lib/particles/emitter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Emitter = void 0;
      var vector_1 = require_vector();
      var settings_1 = require_settings();
      var variation_1 = require_variation();
      var config_1 = require_config();
      var options_1 = require_options();
      var particle_1 = require_particle();
      var Emitter = function() {
        function Emitter2(options) {
          this.particles = [];
          this.currentLoop = 0;
          this.durationTimer = 0;
          this.emissionTimer = 0;
          this.attemptedBurstIndices = [];
          this.options = config_1.overrideDefaults(options_1.getDefaultEmitterOptions(), options === null || options === void 0 ? void 0 : options.emitterOptions);
          this.emission = config_1.overrideDefaults(options_1.getDefaultEmissionOptions(), options === null || options === void 0 ? void 0 : options.emissionOptions);
          this.renderer = config_1.overrideDefaults(options_1.getDefaultRendererOptions(), options === null || options === void 0 ? void 0 : options.rendererOptions);
        }
        Object.defineProperty(Emitter2.prototype, "isExpired", {
          get: function() {
            return this.options.loops >= 0 && this.currentLoop >= this.options.loops;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Emitter2.prototype, "canRemove", {
          get: function() {
            return this.particles.length === 0;
          },
          enumerable: false,
          configurable: true
        });
        Emitter2.prototype.clearParticles = function() {
          return this.particles.splice(0).length;
        };
        Emitter2.prototype.tick = function(delta) {
          if (!this.isExpired) {
            this.durationTimer += delta;
            if (this.durationTimer >= this.options.duration) {
              this.currentLoop++;
              this.durationTimer = 0;
              this.attemptedBurstIndices = [];
            }
            if (!this.isExpired) {
              var burstIndex = 0;
              for (var _i = 0, _a = this.emission.bursts; _i < _a.length; _i++) {
                var burst = _a[_i];
                if (burst.time <= this.durationTimer) {
                  if (!this.attemptedBurstIndices.includes(burstIndex)) {
                    var count = variation_1.evaluateVariation(burst.count);
                    for (var i = 0; i < count; i++) {
                      this.emitParticle();
                    }
                    this.attemptedBurstIndices.push(burstIndex);
                  }
                }
                burstIndex++;
              }
              this.emissionTimer += delta;
              var delay = 1 / this.emission.rate;
              while (this.emissionTimer > delay) {
                this.emissionTimer -= delay;
                this.emitParticle();
              }
            }
          }
          var _loop_1 = function(i2) {
            var particle = this_1.particles[i2];
            this_1.tickParticle(particle, delta);
            if (this_1.options.despawningRules.some(function(rule) {
              return rule(particle);
            })) {
              this_1.particles.splice(i2, 1);
            }
          };
          var this_1 = this;
          for (var i = this.particles.length - 1; i >= 0; i--) {
            _loop_1(i);
          }
        };
        Emitter2.prototype.tickParticle = function(particle, delta) {
          particle.lifetime -= delta;
          if (this.options.useGravity) {
            particle.velocity = particle.velocity.add(vector_1.Vector.up.scale(settings_1.settings.gravity * delta));
          }
          particle.location = particle.location.add(particle.velocity.scale(delta));
          for (var _i = 0, _a = this.options.modules; _i < _a.length; _i++) {
            var moduleFunction = _a[_i];
            moduleFunction(particle);
          }
        };
        Emitter2.prototype.emitParticle = function() {
          var particle = new particle_1.Particle({
            location: this.emission.sourceSampler(),
            lifetime: variation_1.evaluateVariation(this.emission.initialLifetime),
            velocity: vector_1.Vector.from2dAngle(variation_1.evaluateVariation(this.emission.angle)).scale(variation_1.evaluateVariation(this.emission.initialSpeed)),
            size: variation_1.evaluateVariation(this.emission.initialSize),
            rotation: variation_1.evaluateVariation(this.emission.initialRotation),
            color: variation_1.evaluateVariation(this.emission.initialColor)
          });
          this.particles.push(particle);
          if (this.particles.length > this.options.maxParticles) {
            this.particles.shift();
          }
          return particle;
        };
        return Emitter2;
      }();
      exports.Emitter = Emitter;
    }
  });

  // ../library_management/node_modules/party-js/lib/systems/shapes.js
  var require_shapes = __commonJS({
    "../library_management/node_modules/party-js/lib/systems/shapes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.resolveShapeFactory = exports.resolvableShapes = void 0;
      var variation_1 = require_variation();
      exports.resolvableShapes = {
        square: '<div style="height: 10px; width: 10px;"></div>',
        rectangle: '<div style="height: 6px; width: 10px;"></div>',
        circle: '<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',
        roundedSquare: '<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',
        roundedRectangle: '<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',
        star: '<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'
      };
      function resolveShapeFactory(factory) {
        var shape = variation_1.evaluateVariation(factory);
        if (typeof shape === "string") {
          var resolved = exports.resolvableShapes[shape];
          if (!resolved) {
            throw new Error("Failed to resolve shape key '" + shape + "'. Did you forget to add it to the 'resolvableShapes' lookup?");
          }
          var dummy = document.createElement("div");
          dummy.innerHTML = resolved;
          return dummy.firstElementChild;
        }
        return shape;
      }
      exports.resolveShapeFactory = resolveShapeFactory;
    }
  });

  // ../library_management/node_modules/party-js/lib/particles/renderer.js
  var require_renderer = __commonJS({
    "../library_management/node_modules/party-js/lib/particles/renderer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Renderer = void 0;
      var __1 = require_lib();
      var vector_1 = require_vector();
      var containers_1 = require_containers();
      var shapes_1 = require_shapes();
      var util_1 = require_util();
      var Renderer = function() {
        function Renderer2() {
          this.elements = /* @__PURE__ */ new Map();
          this.light = new vector_1.Vector(0, 0, 1);
          this.enabled = true;
          this.enabled = !__1.settings.respectReducedMotion || !window.matchMedia("(prefers-reduced-motion)").matches;
        }
        Renderer2.prototype.begin = function() {
          this.renderedParticles = [];
        };
        Renderer2.prototype.end = function() {
          var it = this.elements.keys();
          var result = it.next();
          while (!result.done) {
            var id = result.value;
            if (!this.renderedParticles.includes(id)) {
              this.elements.get(id).remove();
              this.elements.delete(id);
            }
            result = it.next();
          }
          return this.renderedParticles.length;
        };
        Renderer2.prototype.renderParticle = function(particle, emitter) {
          if (!this.enabled)
            return;
          var options = emitter.renderer;
          var element = this.elements.has(particle.id) ? this.elements.get(particle.id) : this.createParticleElement(particle, options);
          if (options.applyColor) {
            options.applyColor(particle.color, element);
          }
          if (options.applyOpacity) {
            options.applyOpacity(particle.opacity, element);
          }
          if (options.applyLighting) {
            var normal = util_1.rotationToNormal(particle.rotation);
            var lightingCoefficient = normal.dot(this.light);
            options.applyLighting(lightingCoefficient, element);
          }
          if (options.applyTransform) {
            options.applyTransform(particle, element);
          }
          this.renderedParticles.push(particle.id);
        };
        Renderer2.prototype.createParticleElement = function(particle, options) {
          var resolved = shapes_1.resolveShapeFactory(options.shapeFactory);
          var element = resolved.cloneNode(true);
          element.style.position = "absolute";
          this.elements.set(particle.id, containers_1.particleContainer.current.appendChild(element));
          return element;
        };
        return Renderer2;
      }();
      exports.Renderer = Renderer;
    }
  });

  // ../library_management/node_modules/party-js/lib/scene.js
  var require_scene = __commonJS({
    "../library_management/node_modules/party-js/lib/scene.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Scene = void 0;
      var debug_1 = require_debug();
      var emitter_1 = require_emitter();
      var renderer_1 = require_renderer();
      var Scene = function() {
        function Scene2() {
          this.emitters = [];
          this.debug = new debug_1.Debug(this);
          this.renderer = new renderer_1.Renderer();
          this.scheduledTickId = void 0;
          this.lastTickTimestamp = performance.now();
          this.tick = this.tick.bind(this);
          this.scheduleTick();
        }
        Scene2.prototype.createEmitter = function(options) {
          var emitter = new emitter_1.Emitter(options);
          this.emitters.push(emitter);
          return emitter;
        };
        Scene2.prototype.clearEmitters = function() {
          return this.emitters.splice(0).length;
        };
        Scene2.prototype.clearParticles = function() {
          return this.emitters.reduce(function(sum, emitter) {
            return sum + emitter.clearParticles();
          }, 0);
        };
        Scene2.prototype.scheduleTick = function() {
          this.scheduledTickId = window.requestAnimationFrame(this.tick);
        };
        Scene2.prototype.cancelTick = function() {
          window.cancelAnimationFrame(this.scheduledTickId);
        };
        Scene2.prototype.tick = function(timestamp) {
          var delta = (timestamp - this.lastTickTimestamp) / 1e3;
          try {
            for (var i = 0; i < this.emitters.length; i++) {
              var emitter = this.emitters[i];
              emitter.tick(delta);
              if (emitter.isExpired && emitter.canRemove) {
                this.emitters.splice(i--, 1);
              }
            }
          } catch (error) {
            console.error(`An error occurred while updating the scene's emitters:
"` + error + '"');
          }
          try {
            this.renderer.begin();
            for (var _i = 0, _a = this.emitters; _i < _a.length; _i++) {
              var emitter = _a[_i];
              for (var _b = 0, _c = emitter.particles; _b < _c.length; _b++) {
                var particle = _c[_b];
                this.renderer.renderParticle(particle, emitter);
              }
            }
            this.renderer.end();
          } catch (error) {
            console.error(`An error occurred while rendering the scene's particles:
"` + error + '"');
          }
          this.debug.tick(delta);
          this.lastTickTimestamp = timestamp;
          this.scheduleTick();
        };
        return Scene2;
      }();
      exports.Scene = Scene;
    }
  });

  // ../library_management/node_modules/party-js/lib/systems/modules.js
  var require_modules = __commonJS({
    "../library_management/node_modules/party-js/lib/systems/modules.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ModuleBuilder = void 0;
      var components_1 = require_components();
      var ModuleBuilder = function() {
        function ModuleBuilder2() {
          this.factor = "lifetime";
          this.isRelative = false;
        }
        ModuleBuilder2.prototype.drive = function(key) {
          this.driverKey = key;
          return this;
        };
        ModuleBuilder2.prototype.through = function(factor) {
          this.factor = factor;
          return this;
        };
        ModuleBuilder2.prototype.by = function(driver) {
          this.driverValue = driver;
          return this;
        };
        ModuleBuilder2.prototype.relative = function(isRelative) {
          if (isRelative === void 0) {
            isRelative = true;
          }
          this.isRelative = isRelative;
          return this;
        };
        ModuleBuilder2.prototype.build = function() {
          var _this = this;
          if (typeof this.driverKey === "undefined") {
            throw new Error("No driving key was provided in the module builder. Did you forget a '.drive()' call?");
          }
          if (typeof this.driverValue === "undefined") {
            throw new Error("No driving value was provided in the module builder. Did you forget a '.through()' call?");
          }
          return function(particle) {
            updateDrivenProperty(particle, _this.driverKey, evaluateModuleDriver(_this.driverValue, calculateModuleFactor(_this.factor, particle), particle), _this.isRelative);
          };
        };
        return ModuleBuilder2;
      }();
      exports.ModuleBuilder = ModuleBuilder;
      function evaluateModuleDriver(driver, factor, particle) {
        if (typeof driver === "object" && "evaluate" in driver) {
          return driver.evaluate(factor);
        }
        if (typeof driver === "function") {
          return driver(factor, particle);
        }
        return driver;
      }
      function calculateModuleFactor(factor, particle) {
        switch (factor) {
          case "lifetime":
            return particle.initialLifetime - particle.lifetime;
          case "relativeLifetime":
            return (particle.initialLifetime - particle.lifetime) / particle.initialLifetime;
          case "size":
            return particle.size;
          default:
            throw new Error("Invalid driving factor '" + factor + "'.");
        }
      }
      function updateDrivenProperty(particle, key, value, relative) {
        if (relative === void 0) {
          relative = false;
        }
        if (!relative) {
          particle[key] = value;
        } else {
          var initial = particle["initial" + key[0].toUpperCase() + key.substr(1)];
          if (typeof initial === "undefined") {
            throw new Error("Unable to use relative chaining with key '" + key + "'; no initial value exists.");
          }
          if (value instanceof components_1.Vector) {
            updateDrivenProperty(particle, key, initial.add(value));
          } else if (typeof value === "number") {
            updateDrivenProperty(particle, key, initial * value);
          } else {
            throw new Error("Unable to use relative chaining with particle key '" + key + "'; no relative operation for '" + value + "' could be inferred.");
          }
        }
      }
    }
  });

  // ../library_management/node_modules/party-js/lib/templates/confetti.js
  var require_confetti = __commonJS({
    "../library_management/node_modules/party-js/lib/templates/confetti.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.confetti = void 0;
      var __1 = require_lib();
      var components_1 = require_components();
      var modules_1 = require_modules();
      var random = require_random();
      var sources = require_sources();
      var variation = require_variation();
      var util = require_util();
      function confetti(source, options) {
        var populated = util.overrideDefaults({
          count: variation.range(20, 40),
          spread: variation.range(35, 45),
          speed: variation.range(300, 600),
          size: variation.skew(1, 0.2),
          rotation: function() {
            return random.randomUnitVector().scale(180);
          },
          color: function() {
            return components_1.Color.fromHsl(random.randomRange(0, 360), 100, 70);
          },
          modules: [
            new modules_1.ModuleBuilder().drive("size").by(function(t) {
              return Math.min(1, t * 3);
            }).relative().build(),
            new modules_1.ModuleBuilder().drive("rotation").by(function(t) {
              return new components_1.Vector(140, 200, 260).scale(t);
            }).relative().build()
          ],
          shapes: ["square", "circle"]
        }, options);
        var emitter = __1.scene.current.createEmitter({
          emitterOptions: {
            loops: 1,
            duration: 8,
            modules: populated.modules
          },
          emissionOptions: {
            rate: 0,
            bursts: [{ time: 0, count: populated.count }],
            sourceSampler: sources.dynamicSource(source),
            angle: variation.skew(-90, variation.evaluateVariation(populated.spread)),
            initialLifetime: 8,
            initialSpeed: populated.speed,
            initialSize: populated.size,
            initialRotation: populated.rotation,
            initialColor: populated.color
          },
          rendererOptions: {
            shapeFactory: populated.shapes
          }
        });
        return emitter;
      }
      exports.confetti = confetti;
    }
  });

  // ../library_management/node_modules/party-js/lib/templates/sparkles.js
  var require_sparkles = __commonJS({
    "../library_management/node_modules/party-js/lib/templates/sparkles.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sparkles = void 0;
      var __1 = require_lib();
      var components_1 = require_components();
      var modules_1 = require_modules();
      var random = require_random();
      var sources = require_sources();
      var variation = require_variation();
      var util = require_util();
      function sparkles(source, options) {
        var populated = util.overrideDefaults({
          lifetime: variation.range(1, 2),
          count: variation.range(10, 20),
          speed: variation.range(100, 200),
          size: variation.range(0.8, 1.8),
          rotation: function() {
            return new components_1.Vector(0, 0, random.randomRange(0, 360));
          },
          color: function() {
            return components_1.Color.fromHsl(50, 100, random.randomRange(55, 85));
          },
          modules: [
            new modules_1.ModuleBuilder().drive("rotation").by(function(t) {
              return new components_1.Vector(0, 0, 200).scale(t);
            }).relative().build(),
            new modules_1.ModuleBuilder().drive("size").by(new components_1.NumericSpline({ time: 0, value: 0 }, { time: 0.3, value: 1 }, { time: 0.7, value: 1 }, { time: 1, value: 0 })).through("relativeLifetime").relative().build(),
            new modules_1.ModuleBuilder().drive("opacity").by(new components_1.NumericSpline({ time: 0, value: 1 }, { time: 0.5, value: 1 }, { time: 1, value: 0 })).through("relativeLifetime").build()
          ],
          shapes: "star"
        }, options);
        var emitter = __1.scene.current.createEmitter({
          emitterOptions: {
            loops: 1,
            duration: 3,
            useGravity: false,
            modules: populated.modules
          },
          emissionOptions: {
            rate: 0,
            bursts: [{ time: 0, count: populated.count }],
            sourceSampler: sources.dynamicSource(source),
            angle: variation.range(0, 360),
            initialLifetime: populated.lifetime,
            initialSpeed: populated.speed,
            initialSize: populated.size,
            initialRotation: populated.rotation,
            initialColor: populated.color
          },
          rendererOptions: {
            applyLighting: void 0,
            shapeFactory: populated.shapes
          }
        });
        return emitter;
      }
      exports.sparkles = sparkles;
    }
  });

  // ../library_management/node_modules/party-js/lib/templates/index.js
  var require_templates = __commonJS({
    "../library_management/node_modules/party-js/lib/templates/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_confetti(), exports);
      __exportStar(require_sparkles(), exports);
    }
  });

  // ../library_management/node_modules/party-js/lib/index.js
  var require_lib = __commonJS({
    "../library_management/node_modules/party-js/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = exports.forceInit = exports.util = exports.math = exports.random = exports.sources = exports.variation = exports.Emitter = exports.Particle = exports.settings = exports.scene = void 0;
      var scene_1 = require_scene();
      var util_1 = require_util();
      __exportStar(require_components(), exports);
      __exportStar(require_templates(), exports);
      __exportStar(require_shapes(), exports);
      __exportStar(require_modules(), exports);
      exports.scene = new util_1.Lazy(function() {
        if (typeof document === "undefined" || typeof window === "undefined") {
          throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");
        }
        return new scene_1.Scene();
      });
      var settings_1 = require_settings();
      Object.defineProperty(exports, "settings", { enumerable: true, get: function() {
        return settings_1.settings;
      } });
      var particle_1 = require_particle();
      Object.defineProperty(exports, "Particle", { enumerable: true, get: function() {
        return particle_1.Particle;
      } });
      var emitter_1 = require_emitter();
      Object.defineProperty(exports, "Emitter", { enumerable: true, get: function() {
        return emitter_1.Emitter;
      } });
      exports.variation = require_variation();
      exports.sources = require_sources();
      exports.random = require_random();
      exports.math = require_math();
      exports.util = require_util();
      function forceInit() {
        exports.scene.current;
      }
      exports.forceInit = forceInit;
      exports.default = require_lib();
    }
  });

  // ../library_management/library_management/public/js/party.bundle.js
  var import_party_js = __toESM(require_lib());
  console.log("Hello World!");
  console.log(typeof import_party_js.default);
  frappe.party = import_party_js.default;
})();
//# sourceMappingURL=party.bundle.7ZJUUNW3.js.map
