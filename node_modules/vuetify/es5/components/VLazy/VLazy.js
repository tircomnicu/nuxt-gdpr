"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toggleable = _interopRequireDefault(require("../../mixins/toggleable"));

var _intersect = _interopRequireDefault(require("../../directives/intersect"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _helpers = require("../../util/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mixins
// Directives
// Utilities
var _default2 = (0, _mixins.default)(_toggleable.default).extend({
  name: 'VLazy',
  directives: {
    intersect: _intersect.default
  },
  props: {
    minHeight: [Number, String],
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: function _default() {
        return {
          root: undefined,
          rootMargin: undefined,
          threshold: undefined
        };
      }
    },
    transition: {
      type: String,
      default: 'fade-transition'
    }
  },
  computed: {
    styles: function styles() {
      return {
        minHeight: parseInt(this.minHeight) ? (0, _helpers.convertToUnit)(this.minHeight) : this.minHeight
      };
    }
  },
  methods: {
    genContent: function genContent() {
      if (!this.isActive) return undefined;
      var slot = (0, _helpers.getSlot)(this);
      /* istanbul ignore if */

      if (!this.transition) return slot;
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, slot);
    },
    onObserve: function onObserve(entries) {
      if (this.isActive) return;
      this.isActive = Boolean(entries.find(function (entry) {
        return entry.isIntersecting;
      }));
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'v-observe',
      attrs: this.$attrs,
      directives: [{
        name: 'intersect',
        value: {
          handler: this.onObserve,
          options: this.options
        }
      }],
      on: this.$listeners,
      style: this.styles
    }, [this.genContent()]);
  }
});

exports.default = _default2;
//# sourceMappingURL=VLazy.js.map