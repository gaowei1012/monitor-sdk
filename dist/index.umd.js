(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RolupMonitorSDK = {}));
})(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function commonjsRequire (path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var taro = {exports: {}};

	const DEFAULT_EMPTY_ARRAY$1 = '[]';
	const NO_DEFAULT_VALUE$1 = '';
	const DEFAULT_TRUE$1 = '!0';
	const DEFAULT_FALSE$1 = '!1';
	const touchEvents$1 = {
	    bindTouchStart: NO_DEFAULT_VALUE$1,
	    bindTouchMove: NO_DEFAULT_VALUE$1,
	    bindTouchEnd: NO_DEFAULT_VALUE$1,
	    bindTouchCancel: NO_DEFAULT_VALUE$1,
	    bindLongTap: NO_DEFAULT_VALUE$1
	};
	const animation$1 = {
	    animation: NO_DEFAULT_VALUE$1,
	    bindAnimationStart: NO_DEFAULT_VALUE$1,
	    bindAnimationIteration: NO_DEFAULT_VALUE$1,
	    bindAnimationEnd: NO_DEFAULT_VALUE$1,
	    bindTransitionEnd: NO_DEFAULT_VALUE$1
	};
	function singleQuote$1(s) {
	    return `'${s}'`;
	}
	const View$1 = Object.assign(Object.assign({ 'hover-class': singleQuote$1('none'), 'hover-stop-propagation': DEFAULT_FALSE$1, 'hover-start-time': '50', 'hover-stay-time': '400' }, touchEvents$1), animation$1);
	const Icon$1 = {
	    type: NO_DEFAULT_VALUE$1,
	    size: '23',
	    color: NO_DEFAULT_VALUE$1
	};
	const MapComp$1 = Object.assign({ longitude: NO_DEFAULT_VALUE$1, latitude: NO_DEFAULT_VALUE$1, scale: '16', markers: DEFAULT_EMPTY_ARRAY$1, covers: NO_DEFAULT_VALUE$1, polyline: DEFAULT_EMPTY_ARRAY$1, circles: DEFAULT_EMPTY_ARRAY$1, controls: DEFAULT_EMPTY_ARRAY$1, 'include-points': DEFAULT_EMPTY_ARRAY$1, 'show-location': NO_DEFAULT_VALUE$1, 'layer-style': '1', bindMarkerTap: NO_DEFAULT_VALUE$1, bindControlTap: NO_DEFAULT_VALUE$1, bindCalloutTap: NO_DEFAULT_VALUE$1, bindUpdated: NO_DEFAULT_VALUE$1 }, touchEvents$1);
	const Progress$1 = {
	    percent: NO_DEFAULT_VALUE$1,
	    'stroke-width': '6',
	    color: singleQuote$1('#09BB07'),
	    activeColor: singleQuote$1('#09BB07'),
	    backgroundColor: singleQuote$1('#EBEBEB'),
	    active: DEFAULT_FALSE$1,
	    'active-mode': singleQuote$1('backwards'),
	    'show-info': DEFAULT_FALSE$1
	};
	const RichText$1 = {
	    nodes: DEFAULT_EMPTY_ARRAY$1
	};
	const Text$1 = Object.assign({ selectable: DEFAULT_FALSE$1, space: NO_DEFAULT_VALUE$1, decode: DEFAULT_FALSE$1 }, touchEvents$1);
	const Button$1 = Object.assign({ size: singleQuote$1('default'), type: NO_DEFAULT_VALUE$1, plain: DEFAULT_FALSE$1, disabled: NO_DEFAULT_VALUE$1, loading: DEFAULT_FALSE$1, 'form-type': NO_DEFAULT_VALUE$1, 'open-type': NO_DEFAULT_VALUE$1, 'hover-class': singleQuote$1('button-hover'), 'hover-stop-propagation': DEFAULT_FALSE$1, 'hover-start-time': '20', 'hover-stay-time': '70', name: NO_DEFAULT_VALUE$1, bindagreeprivacyauthorization: NO_DEFAULT_VALUE$1 }, touchEvents$1);
	const Checkbox$1 = {
	    value: NO_DEFAULT_VALUE$1,
	    disabled: NO_DEFAULT_VALUE$1,
	    checked: DEFAULT_FALSE$1,
	    color: singleQuote$1('#09BB07'),
	    name: NO_DEFAULT_VALUE$1
	};
	const CheckboxGroup$1 = {
	    bindChange: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1
	};
	const Form$1 = {
	    'report-submit': DEFAULT_FALSE$1,
	    bindSubmit: NO_DEFAULT_VALUE$1,
	    bindReset: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1
	};
	const Input$1 = {
	    value: NO_DEFAULT_VALUE$1,
	    type: singleQuote$1(NO_DEFAULT_VALUE$1),
	    password: DEFAULT_FALSE$1,
	    placeholder: NO_DEFAULT_VALUE$1,
	    'placeholder-style': NO_DEFAULT_VALUE$1,
	    'placeholder-class': singleQuote$1('input-placeholder'),
	    disabled: NO_DEFAULT_VALUE$1,
	    maxlength: '140',
	    'cursor-spacing': '0',
	    focus: DEFAULT_FALSE$1,
	    'confirm-type': singleQuote$1('done'),
	    'confirm-hold': DEFAULT_FALSE$1,
	    cursor: '-1',
	    'selection-start': '-1',
	    'selection-end': '-1',
	    bindInput: NO_DEFAULT_VALUE$1,
	    bindFocus: NO_DEFAULT_VALUE$1,
	    bindBlur: NO_DEFAULT_VALUE$1,
	    bindConfirm: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1
	};
	const Label$1 = Object.assign({ for: NO_DEFAULT_VALUE$1, name: NO_DEFAULT_VALUE$1 }, touchEvents$1);
	const Picker$1 = {
	    mode: singleQuote$1('selector'),
	    disabled: NO_DEFAULT_VALUE$1,
	    range: NO_DEFAULT_VALUE$1,
	    'range-key': NO_DEFAULT_VALUE$1,
	    value: NO_DEFAULT_VALUE$1,
	    start: NO_DEFAULT_VALUE$1,
	    end: NO_DEFAULT_VALUE$1,
	    fields: singleQuote$1('day'),
	    'custom-item': NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1,
	    bindCancel: NO_DEFAULT_VALUE$1,
	    bindChange: NO_DEFAULT_VALUE$1,
	    bindColumnChange: NO_DEFAULT_VALUE$1
	};
	const PickerView$1 = {
	    value: NO_DEFAULT_VALUE$1,
	    'indicator-style': NO_DEFAULT_VALUE$1,
	    'indicator-class': NO_DEFAULT_VALUE$1,
	    'mask-style': NO_DEFAULT_VALUE$1,
	    'mask-class': NO_DEFAULT_VALUE$1,
	    bindChange: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1
	};
	const PickerViewColumn$1 = {
	    name: NO_DEFAULT_VALUE$1
	};
	const Radio$1 = {
	    value: NO_DEFAULT_VALUE$1,
	    checked: DEFAULT_FALSE$1,
	    disabled: NO_DEFAULT_VALUE$1,
	    color: singleQuote$1('#09BB07'),
	    name: NO_DEFAULT_VALUE$1
	};
	const RadioGroup$1 = {
	    bindChange: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1
	};
	const Slider$1 = {
	    min: '0',
	    max: '100',
	    step: '1',
	    disabled: NO_DEFAULT_VALUE$1,
	    value: '0',
	    activeColor: singleQuote$1('#1aad19'),
	    backgroundColor: singleQuote$1('#e9e9e9'),
	    'block-size': '28',
	    'block-color': singleQuote$1('#ffffff'),
	    'show-value': DEFAULT_FALSE$1,
	    bindChange: NO_DEFAULT_VALUE$1,
	    bindChanging: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1
	};
	const Switch$1 = {
	    checked: DEFAULT_FALSE$1,
	    disabled: NO_DEFAULT_VALUE$1,
	    type: singleQuote$1('switch'),
	    color: singleQuote$1('#04BE02'),
	    bindChange: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1
	};
	const Textarea$1 = {
	    value: NO_DEFAULT_VALUE$1,
	    placeholder: NO_DEFAULT_VALUE$1,
	    'placeholder-style': NO_DEFAULT_VALUE$1,
	    'placeholder-class': singleQuote$1('textarea-placeholder'),
	    disabled: NO_DEFAULT_VALUE$1,
	    maxlength: '140',
	    'auto-focus': DEFAULT_FALSE$1,
	    focus: DEFAULT_FALSE$1,
	    'auto-height': DEFAULT_FALSE$1,
	    fixed: DEFAULT_FALSE$1,
	    'cursor-spacing': '0',
	    cursor: '-1',
	    'selection-start': '-1',
	    'selection-end': '-1',
	    bindFocus: NO_DEFAULT_VALUE$1,
	    bindBlur: NO_DEFAULT_VALUE$1,
	    bindLineChange: NO_DEFAULT_VALUE$1,
	    bindInput: NO_DEFAULT_VALUE$1,
	    bindConfirm: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1
	};
	const CoverImage$1 = {
	    src: NO_DEFAULT_VALUE$1,
	    bindLoad: 'eh',
	    bindError: 'eh'
	};
	const CoverView$1 = Object.assign({ 'scroll-top': DEFAULT_FALSE$1 }, touchEvents$1);
	const MovableArea$1 = {
	    'scale-area': DEFAULT_FALSE$1
	};
	const MovableView$1 = Object.assign(Object.assign({ direction: 'none', inertia: DEFAULT_FALSE$1, 'out-of-bounds': DEFAULT_FALSE$1, x: NO_DEFAULT_VALUE$1, y: NO_DEFAULT_VALUE$1, damping: '20', friction: '2', disabled: NO_DEFAULT_VALUE$1, scale: DEFAULT_FALSE$1, 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', bindChange: NO_DEFAULT_VALUE$1, bindScale: NO_DEFAULT_VALUE$1, bindHTouchMove: NO_DEFAULT_VALUE$1, bindVTouchMove: NO_DEFAULT_VALUE$1, width: singleQuote$1('10px'), height: singleQuote$1('10px') }, touchEvents$1), animation$1);
	const ScrollView$1 = Object.assign(Object.assign({ 'scroll-x': DEFAULT_FALSE$1, 'scroll-y': DEFAULT_FALSE$1, 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': NO_DEFAULT_VALUE$1, 'scroll-left': NO_DEFAULT_VALUE$1, 'scroll-into-view': NO_DEFAULT_VALUE$1, 'scroll-with-animation': DEFAULT_FALSE$1, 'enable-back-to-top': DEFAULT_FALSE$1, bindScrollToUpper: NO_DEFAULT_VALUE$1, bindScrollToLower: NO_DEFAULT_VALUE$1, bindScroll: NO_DEFAULT_VALUE$1 }, touchEvents$1), animation$1);
	const Swiper$1 = Object.assign({ 'indicator-dots': DEFAULT_FALSE$1, 'indicator-color': singleQuote$1('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote$1('#000000'), autoplay: DEFAULT_FALSE$1, current: '0', interval: '5000', duration: '500', circular: DEFAULT_FALSE$1, vertical: DEFAULT_FALSE$1, 'previous-margin': singleQuote$1('0px'), 'next-margin': singleQuote$1('0px'), 'display-multiple-items': '1', bindChange: NO_DEFAULT_VALUE$1, bindTransition: NO_DEFAULT_VALUE$1, bindAnimationFinish: NO_DEFAULT_VALUE$1 }, touchEvents$1);
	const SwiperItem$1 = {
	    'item-id': NO_DEFAULT_VALUE$1
	};
	const Navigator$1 = {
	    url: NO_DEFAULT_VALUE$1,
	    'open-type': singleQuote$1('navigate'),
	    delta: '1',
	    'hover-class': singleQuote$1('navigator-hover'),
	    'hover-stop-propagation': DEFAULT_FALSE$1,
	    'hover-start-time': '50',
	    'hover-stay-time': '600',
	    bindSuccess: NO_DEFAULT_VALUE$1,
	    bindFail: NO_DEFAULT_VALUE$1,
	    bindComplete: NO_DEFAULT_VALUE$1
	};
	const Audio$1 = {
	    id: NO_DEFAULT_VALUE$1,
	    src: NO_DEFAULT_VALUE$1,
	    loop: DEFAULT_FALSE$1,
	    controls: DEFAULT_FALSE$1,
	    poster: NO_DEFAULT_VALUE$1,
	    name: NO_DEFAULT_VALUE$1,
	    author: NO_DEFAULT_VALUE$1,
	    bindError: NO_DEFAULT_VALUE$1,
	    bindPlay: NO_DEFAULT_VALUE$1,
	    bindPause: NO_DEFAULT_VALUE$1,
	    bindTimeUpdate: NO_DEFAULT_VALUE$1,
	    bindEnded: NO_DEFAULT_VALUE$1
	};
	const Camera$1 = {
	    'device-position': singleQuote$1('back'),
	    flash: singleQuote$1('auto'),
	    bindStop: NO_DEFAULT_VALUE$1,
	    bindError: NO_DEFAULT_VALUE$1
	};
	const Image$1 = Object.assign({ src: NO_DEFAULT_VALUE$1, mode: singleQuote$1('scaleToFill'), 'lazy-load': DEFAULT_FALSE$1, bindError: NO_DEFAULT_VALUE$1, bindLoad: NO_DEFAULT_VALUE$1 }, touchEvents$1);
	const LivePlayer$1 = Object.assign({ src: NO_DEFAULT_VALUE$1, autoplay: DEFAULT_FALSE$1, muted: DEFAULT_FALSE$1, orientation: singleQuote$1('vertical'), 'object-fit': singleQuote$1('contain'), 'background-mute': DEFAULT_FALSE$1, 'min-cache': '1', 'max-cache': '3', bindStateChange: NO_DEFAULT_VALUE$1, bindFullScreenChange: NO_DEFAULT_VALUE$1, bindNetStatus: NO_DEFAULT_VALUE$1 }, animation$1);
	const Video$1 = Object.assign({ src: NO_DEFAULT_VALUE$1, duration: NO_DEFAULT_VALUE$1, controls: DEFAULT_TRUE$1, 'danmu-list': NO_DEFAULT_VALUE$1, 'danmu-btn': NO_DEFAULT_VALUE$1, 'enable-danmu': NO_DEFAULT_VALUE$1, autoplay: DEFAULT_FALSE$1, loop: DEFAULT_FALSE$1, muted: DEFAULT_FALSE$1, 'initial-time': '0', 'page-gesture': DEFAULT_FALSE$1, direction: NO_DEFAULT_VALUE$1, 'show-progress': DEFAULT_TRUE$1, 'show-fullscreen-btn': DEFAULT_TRUE$1, 'show-play-btn': DEFAULT_TRUE$1, 'show-center-play-btn': DEFAULT_TRUE$1, 'enable-progress-gesture': DEFAULT_TRUE$1, 'object-fit': singleQuote$1('contain'), poster: NO_DEFAULT_VALUE$1, 'show-mute-btn': DEFAULT_FALSE$1, bindPlay: NO_DEFAULT_VALUE$1, bindPause: NO_DEFAULT_VALUE$1, bindEnded: NO_DEFAULT_VALUE$1, bindTimeUpdate: NO_DEFAULT_VALUE$1, bindFullScreenChange: NO_DEFAULT_VALUE$1, bindWaiting: NO_DEFAULT_VALUE$1, bindError: NO_DEFAULT_VALUE$1 }, animation$1);
	const Canvas$1 = Object.assign({ 'canvas-id': NO_DEFAULT_VALUE$1, 'disable-scroll': DEFAULT_FALSE$1, bindError: NO_DEFAULT_VALUE$1 }, touchEvents$1);
	const Ad$1 = {
	    'unit-id': NO_DEFAULT_VALUE$1,
	    'ad-intervals': NO_DEFAULT_VALUE$1,
	    bindLoad: NO_DEFAULT_VALUE$1,
	    bindError: NO_DEFAULT_VALUE$1,
	    bindClose: NO_DEFAULT_VALUE$1
	};
	const WebView$1 = {
	    src: NO_DEFAULT_VALUE$1,
	    bindMessage: NO_DEFAULT_VALUE$1,
	    bindLoad: NO_DEFAULT_VALUE$1,
	    bindError: NO_DEFAULT_VALUE$1
	};
	const Block$1 = {};
	// For Vue，因为 slot 标签被 vue 占用了
	const SlotView$1 = {
	    name: NO_DEFAULT_VALUE$1
	};
	// For React
	// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
	// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
	// 不给 View 直接加 slot 属性的原因是性能损耗
	const Slot$1 = {
	    name: NO_DEFAULT_VALUE$1
	};
	const NativeSlot$1 = {
	    name: NO_DEFAULT_VALUE$1
	};
	const Script$1 = {};
	const internalComponents$1 = {
	    View: View$1,
	    Icon: Icon$1,
	    Progress: Progress$1,
	    RichText: RichText$1,
	    Text: Text$1,
	    Button: Button$1,
	    Checkbox: Checkbox$1,
	    CheckboxGroup: CheckboxGroup$1,
	    Form: Form$1,
	    Input: Input$1,
	    Label: Label$1,
	    Picker: Picker$1,
	    PickerView: PickerView$1,
	    PickerViewColumn: PickerViewColumn$1,
	    Radio: Radio$1,
	    RadioGroup: RadioGroup$1,
	    Slider: Slider$1,
	    Switch: Switch$1,
	    CoverImage: CoverImage$1,
	    Textarea: Textarea$1,
	    CoverView: CoverView$1,
	    MovableArea: MovableArea$1,
	    MovableView: MovableView$1,
	    ScrollView: ScrollView$1,
	    Swiper: Swiper$1,
	    SwiperItem: SwiperItem$1,
	    Navigator: Navigator$1,
	    Audio: Audio$1,
	    Camera: Camera$1,
	    Image: Image$1,
	    LivePlayer: LivePlayer$1,
	    Video: Video$1,
	    Canvas: Canvas$1,
	    Ad: Ad$1,
	    WebView: WebView$1,
	    Block: Block$1,
	    Map: MapComp$1,
	    Slot: Slot$1,
	    SlotView: SlotView$1,
	    NativeSlot: NativeSlot$1,
	    Script: Script$1,
	};
	const controlledComponent$1 = new Set([
	    'input',
	    'checkbox',
	    'picker',
	    'picker-view',
	    'radio',
	    'slider',
	    'switch',
	    'textarea'
	]);

	var PLATFORM_TYPE$1;
	(function (PLATFORM_TYPE) {
	    PLATFORM_TYPE["MINI"] = "mini";
	    PLATFORM_TYPE["WEB"] = "web";
	    PLATFORM_TYPE["RN"] = "rn";
	    PLATFORM_TYPE["HARMONY"] = "harmony";
	    PLATFORM_TYPE["QUICK"] = "quickapp";
	})(PLATFORM_TYPE$1 || (PLATFORM_TYPE$1 = {}));
	({
	    h5: {
	        type: PLATFORM_TYPE$1.WEB
	    },
	    harmony: {
	        type: PLATFORM_TYPE$1.HARMONY
	    },
	    mini: {
	        type: PLATFORM_TYPE$1.MINI
	    },
	    rn: {
	        type: PLATFORM_TYPE$1.RN
	    },
	    quickapp: {
	        type: PLATFORM_TYPE$1.QUICK
	    },
	});

	class Events$1 {
	    constructor(opts) {
	        var _a;
	        this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
	    }
	    on(eventName, callback, context) {
	        let event, tail, _eventName;
	        if (!callback) {
	            return this;
	        }
	        if (typeof eventName === 'symbol') {
	            _eventName = [eventName];
	        }
	        else {
	            _eventName = eventName.split(Events$1.eventSplitter);
	        }
	        this.callbacks || (this.callbacks = {});
	        const calls = this.callbacks;
	        while ((event = _eventName.shift())) {
	            const list = calls[event];
	            const node = list ? list.tail : {};
	            node.next = tail = {};
	            node.context = context;
	            node.callback = callback;
	            calls[event] = {
	                tail,
	                next: list ? list.next : node
	            };
	        }
	        return this;
	    }
	    once(events, callback, context) {
	        const wrapper = (...args) => {
	            callback.apply(this, args);
	            this.off(events, wrapper, context);
	        };
	        this.on(events, wrapper, context);
	        return this;
	    }
	    off(events, callback, context) {
	        let event, calls, _events;
	        if (!(calls = this.callbacks)) {
	            return this;
	        }
	        if (!(events || callback || context)) {
	            delete this.callbacks;
	            return this;
	        }
	        if (typeof events === 'symbol') {
	            _events = [events];
	        }
	        else {
	            _events = events ? events.split(Events$1.eventSplitter) : Object.keys(calls);
	        }
	        while ((event = _events.shift())) {
	            let node = calls[event];
	            delete calls[event];
	            if (!node || !(callback || context)) {
	                continue;
	            }
	            const tail = node.tail;
	            while ((node = node.next) !== tail) {
	                const cb = node.callback;
	                const ctx = node.context;
	                if ((callback && cb !== callback) || (context && ctx !== context)) {
	                    this.on(event, cb, ctx);
	                }
	            }
	        }
	        return this;
	    }
	    trigger(events, ...args) {
	        let event, node, calls, _events;
	        if (!(calls = this.callbacks)) {
	            return this;
	        }
	        if (typeof events === 'symbol') {
	            _events = [events];
	        }
	        else {
	            _events = events.split(Events$1.eventSplitter);
	        }
	        while ((event = _events.shift())) {
	            if ((node = calls[event])) {
	                const tail = node.tail;
	                while ((node = node.next) !== tail) {
	                    node.callback.apply(node.context || this, args);
	                }
	            }
	        }
	        return this;
	    }
	}
	Events$1.eventSplitter = ','; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/

	class PageEvts$1 extends Events$1 {
	    constructor() {
	        super(...arguments);
	        this.exeList = [];
	    }
	    on(eventName, callback) {
	        super.on(eventName, callback, this);
	        this.exeList = this.exeList.reduce((prev, item) => {
	            if (item.eventName === eventName) {
	                super.trigger(item.eventName, item.data);
	            }
	            else {
	                prev.push(item);
	            }
	            return prev;
	        }, []);
	        return this;
	    }
	    emit(events, data) {
	        // eslint-disable-next-line
	        routeChannel$1.trigger(events, data);
	    }
	}
	const pageChannel$1 = new PageEvts$1();
	class RouteEvts$1 extends Events$1 {
	    emit(events, data) {
	        pageChannel$1.off(events);
	        pageChannel$1.exeList.push({
	            eventName: events,
	            data
	        });
	    }
	    addEvents(events) {
	        if (!events || typeof events !== 'object')
	            return;
	        Object.keys(events).forEach(key => {
	            this.off(key);
	            this.on(key, events[key], this);
	        });
	    }
	}
	const routeChannel$1 = new RouteEvts$1();
	const EventChannel = { pageChannel: pageChannel$1, routeChannel: routeChannel$1 };

	function isString$1(o) {
	    return typeof o === 'string';
	}
	function isUndefined$1(o) {
	    return typeof o === 'undefined';
	}
	function isNull$1(o) {
	    return o === null;
	}
	function isObject$1(o) {
	    return o !== null && typeof o === 'object';
	}
	function isFunction$1(o) {
	    return typeof o === 'function';
	}
	function isNumber$1(o) {
	    return typeof o === 'number';
	}
	const isArray$1 = Array.isArray;

	var HOOK_TYPE$1;
	(function (HOOK_TYPE) {
	    HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
	    HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
	    HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
	})(HOOK_TYPE$1 || (HOOK_TYPE$1 = {}));
	const defaultMiniLifecycle$1 = {
	    app: [
	        'onLaunch',
	        'onShow',
	        'onHide'
	    ],
	    page: [
	        'onLoad',
	        'onUnload',
	        'onReady',
	        'onShow',
	        'onHide',
	        [
	            'onPullDownRefresh',
	            'onReachBottom',
	            'onPageScroll',
	            'onResize',
	            'defer:onTabItemTap',
	            'onTitleClick',
	            'onOptionMenuClick',
	            'onPopMenuClick',
	            'onPullIntercept',
	            'onAddToFavorites'
	        ],
	        [
	            'onShareAppMessage',
	            'onShareTimeline'
	        ]
	    ],
	    component: [
	        'attached',
	        'detached'
	    ]
	};
	function TaroHook$1(type, initial) {
	    return {
	        type,
	        initial: initial || null
	    };
	}
	class TaroHooks$1 extends Events$1 {
	    constructor(hooks, opts) {
	        super(opts);
	        this.hooks = hooks;
	        for (const hookName in hooks) {
	            const { initial } = hooks[hookName];
	            if (isFunction$1(initial)) {
	                this.on(hookName, initial);
	            }
	        }
	    }
	    tapOneOrMany(hookName, callback) {
	        const list = isFunction$1(callback) ? [callback] : callback;
	        list.forEach(cb => this.on(hookName, cb));
	    }
	    tap(hookName, callback) {
	        const hooks = this.hooks;
	        const { type, initial } = hooks[hookName];
	        if (type === HOOK_TYPE$1.SINGLE) {
	            this.off(hookName);
	            this.on(hookName, isFunction$1(callback) ? callback : callback[callback.length - 1]);
	        }
	        else {
	            initial && this.off(hookName, initial);
	            this.tapOneOrMany(hookName, callback);
	        }
	    }
	    call(hookName, ...rest) {
	        var _a;
	        const hook = this.hooks[hookName];
	        if (!hook)
	            return;
	        const { type } = hook;
	        const calls = this.callbacks;
	        if (!calls)
	            return;
	        const list = calls[hookName];
	        if (list) {
	            const tail = list.tail;
	            let node = list.next;
	            let args = rest;
	            let res;
	            while (node !== tail) {
	                res = (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
	                if (type === HOOK_TYPE$1.WATERFALL) {
	                    const params = [res];
	                    args = params;
	                }
	                node = node.next;
	            }
	            return res;
	        }
	    }
	    isExist(hookName) {
	        var _a;
	        return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
	    }
	}
	const hooks$1 = new TaroHooks$1({
	    getMiniLifecycle: TaroHook$1(HOOK_TYPE$1.SINGLE, defaultConfig => defaultConfig),
	    getMiniLifecycleImpl: TaroHook$1(HOOK_TYPE$1.SINGLE, function () {
	        return this.call('getMiniLifecycle', defaultMiniLifecycle$1);
	    }),
	    getLifecycle: TaroHook$1(HOOK_TYPE$1.SINGLE, (instance, lifecycle) => instance[lifecycle]),
	    modifyRecursiveComponentConfig: TaroHook$1(HOOK_TYPE$1.SINGLE, (defaultConfig) => defaultConfig),
	    getPathIndex: TaroHook$1(HOOK_TYPE$1.SINGLE, indexOfNode => `[${indexOfNode}]`),
	    getEventCenter: TaroHook$1(HOOK_TYPE$1.SINGLE, Events => new Events()),
	    isBubbleEvents: TaroHook$1(HOOK_TYPE$1.SINGLE, eventName => {
	        /**
	         * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
	         * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
	         */
	        const BUBBLE_EVENTS = new Set([
	            'touchstart',
	            'touchmove',
	            'touchcancel',
	            'touchend',
	            'touchforcechange',
	            'tap',
	            'longpress',
	            'longtap',
	            'transitionend',
	            'animationstart',
	            'animationiteration',
	            'animationend'
	        ]);
	        return BUBBLE_EVENTS.has(eventName);
	    }),
	    getSpecialNodes: TaroHook$1(HOOK_TYPE$1.SINGLE, () => ['view', 'text', 'image']),
	    onRemoveAttribute: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    batchedEventUpdates: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    mergePageInstance: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    modifyPageObject: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    createPullDownComponent: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    getDOMNode: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    modifyHydrateData: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    transferHydrateData: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    modifySetAttrPayload: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    modifyRmAttrPayload: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    onAddEvent: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    proxyToRaw: TaroHook$1(HOOK_TYPE$1.SINGLE, function (proxyObj) {
	        return proxyObj;
	    }),
	    modifyMpEvent: TaroHook$1(HOOK_TYPE$1.MULTI),
	    modifyMpEventImpl: TaroHook$1(HOOK_TYPE$1.SINGLE, function (e) {
	        try {
	            // 有些小程序的事件对象的某些属性只读
	            this.call('modifyMpEvent', e);
	        }
	        catch (error) {
	            console.warn('[Taro modifyMpEvent hook Error]: ' + (error === null || error === void 0 ? void 0 : error.message));
	        }
	    }),
	    injectNewStyleProperties: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    modifyTaroEvent: TaroHook$1(HOOK_TYPE$1.MULTI),
	    dispatchTaroEvent: TaroHook$1(HOOK_TYPE$1.SINGLE, (e, node) => {
	        node.dispatchEvent(e);
	    }),
	    dispatchTaroEventFinish: TaroHook$1(HOOK_TYPE$1.MULTI),
	    modifyTaroEventReturn: TaroHook$1(HOOK_TYPE$1.SINGLE, () => undefined),
	    modifyDispatchEvent: TaroHook$1(HOOK_TYPE$1.MULTI),
	    initNativeApi: TaroHook$1(HOOK_TYPE$1.MULTI),
	    patchElement: TaroHook$1(HOOK_TYPE$1.MULTI),
	    modifyAddEventListener: TaroHook$1(HOOK_TYPE$1.SINGLE),
	    modifyRemoveEventListener: TaroHook$1(HOOK_TYPE$1.SINGLE),
	});

	const EMPTY_OBJ$1 = {};
	const noop$1 = (..._) => { };
	function toDashed$1(s) {
	    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
	}
	function toCamelCase$1(s) {
	    let camel = '';
	    let nextCap = false;
	    for (let i = 0; i < s.length; i++) {
	        if (s[i] !== '-') {
	            camel += nextCap ? s[i].toUpperCase() : s[i];
	            nextCap = false;
	        }
	        else {
	            nextCap = true;
	        }
	    }
	    return camel;
	}
	/**
	 * ensure takes a condition and throw a error if the condition fails,
	 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
	 * @param condition condition.
	 * @param msg error message.
	 */
	function ensure$1(condition, msg) {
	    if (!condition) {
	        if (process.env.NODE_ENV !== 'production') {
	            const reportIssue = '\n如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
	            throw new Error(msg + reportIssue);
	        }
	        else {
	            throw new Error(msg);
	        }
	    }
	}
	function warn$1(condition, msg) {
	    if (process.env.NODE_ENV !== 'production') {
	        if (condition) {
	            console.warn(`[taro warn] ${msg}`);
	        }
	    }
	}
	(new Date()).getTime().toString();
	function getComponentsAlias$3(origin) {
	    const mapping = {};
	    const viewAttrs = origin.View;
	    const extraList = {
	        '#text': {},
	        StaticView: viewAttrs,
	        StaticImage: origin.Image,
	        StaticText: origin.Text,
	        PureView: viewAttrs,
	        CatchView: viewAttrs
	    };
	    origin = Object.assign(Object.assign({}, origin), extraList);
	    Object.keys(origin)
	        .sort((a, b) => {
	        const reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
	        const isACommonly = reg.test(a);
	        const isBCommonly = reg.test(b);
	        if (isACommonly && isBCommonly) {
	            return a > b ? 1 : -1;
	        }
	        else if (isACommonly) {
	            return -1;
	        }
	        else if (isBCommonly) {
	            return 1;
	        }
	        else {
	            return a >= b ? 1 : -1;
	        }
	    })
	        .forEach((key, num) => {
	        const obj = {
	            _num: String(num)
	        };
	        Object.keys(origin[key])
	            .filter(attr => !(/^bind/.test(attr)) && !['focus', 'blur'].includes(attr))
	            .sort()
	            .forEach((attr, index) => {
	            obj[toCamelCase$1(attr)] = 'p' + index;
	        });
	        mapping[toDashed$1(key)] = obj;
	    });
	    return mapping;
	}

	// 字符串简写
	var Shortcuts$1;
	(function (Shortcuts) {
	    Shortcuts["Container"] = "container";
	    Shortcuts["Childnodes"] = "cn";
	    Shortcuts["Text"] = "v";
	    Shortcuts["NodeType"] = "nt";
	    Shortcuts["NodeName"] = "nn";
	    // Attrtibutes
	    Shortcuts["Style"] = "st";
	    Shortcuts["Class"] = "cl";
	    Shortcuts["Src"] = "src";
	})(Shortcuts$1 || (Shortcuts$1 = {}));

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
	  __assign = Object.assign || function __assign(t) {
	      for (var s, i = 1, n = arguments.length; i < n; i++) {
	          s = arguments[i];
	          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	      }
	      return t;
	  };
	  return __assign.apply(this, arguments);
	};

	function __classPrivateFieldGet(receiver, state, kind, f) {
	  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	}

	function __classPrivateFieldSet(receiver, state, value, kind, f) {
	  if (kind === "m") throw new TypeError("Private method is not writable");
	  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	}

	typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	  var e = new Error(message);
	  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};

	const PROPERTY_THRESHOLD$1 = 2046;
	const TARO_RUNTIME = 'Taro runtime';
	const HOOKS_APP_ID = 'taro-app';
	const SET_DATA$1 = '小程序 setData';
	const PAGE_INIT$1 = '页面初始化';
	const ROOT_STR$1 = 'root';
	const HTML$1 = 'html';
	const HEAD$1 = 'head';
	const BODY$1 = 'body';
	const APP$1 = 'app';
	const CONTAINER$1 = 'container';
	const DOCUMENT_ELEMENT_NAME$1 = '#document';
	const DOCUMENT_FRAGMENT$1 = 'document-fragment';
	const ID$1 = 'id';
	const UID$1 = 'uid';
	const CLASS$1 = 'class';
	const STYLE$1 = 'style';
	const FOCUS$1 = 'focus';
	const VIEW$1 = 'view';
	const STATIC_VIEW$1 = 'static-view';
	const PURE_VIEW$1 = 'pure-view';
	const PROPS$1 = 'props';
	const DATASET$1 = 'dataset';
	const OBJECT$1 = 'object';
	const VALUE$1 = 'value';
	const INPUT$1 = 'input';
	const CHANGE$1 = 'change';
	const CUSTOM_WRAPPER$1 = 'custom-wrapper';
	const TARGET$1 = 'target';
	const CURRENT_TARGET$1 = 'currentTarget';
	const TYPE$1 = 'type';
	const CONFIRM$1 = 'confirm';
	const TIME_STAMP$1 = 'timeStamp';
	const KEY_CODE$1 = 'keyCode';
	const TOUCHMOVE = 'touchmove';
	const DATE = 'Date';
	const SET_TIMEOUT = 'setTimeout';
	const COMPILE_MODE$1 = 'compileMode';
	const CATCHMOVE$1 = 'catchMove';
	const CATCH_VIEW$1 = 'catch-view';
	const COMMENT$1 = 'comment';
	const ON_LOAD = 'onLoad';
	const ON_READY = 'onReady';
	const ON_SHOW = 'onShow';
	const ON_HIDE = 'onHide';
	const OPTIONS = 'options';
	const EXTERNAL_CLASSES = 'externalClasses';
	const EVENT_CALLBACK_RESULT$1 = 'e_result';
	const BEHAVIORS = 'behaviors';
	const A$2 = 'a';
	/**
	 * 页面上下文切换时的行为
	 */
	var CONTEXT_ACTIONS$1;
	(function (CONTEXT_ACTIONS) {
	    CONTEXT_ACTIONS["INIT"] = "0";
	    CONTEXT_ACTIONS["RESTORE"] = "1";
	    CONTEXT_ACTIONS["RECOVER"] = "2";
	    CONTEXT_ACTIONS["DESTORY"] = "3";
	})(CONTEXT_ACTIONS$1 || (CONTEXT_ACTIONS$1 = {}));

	const observers$1 = [];
	/**
	 * The MutationObserver provides the ability
	 * to watch for changes being made to the DOM tree.
	 * It will invoke a specified callback function
	 * when DOM changes occur.
	 * @see https://dom.spec.whatwg.org/#mutationobserver
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
	 */
	class MutationObserverImpl$1 {
	    constructor(callback) {
	        this.records = [];
	        this.callback = callback;
	    }
	    /**
	     * Configures the MutationObserver
	     * to begin receiving notifications
	     * through its callback function
	     * when DOM changes matching the given options occur.
	     *
	     * Options matching is to be implemented.
	     */
	    observe(target, options) {
	        this.disconnect();
	        this.target = target;
	        this.options = options || {};
	        observers$1.push(this);
	    }
	    /**
	     * Stop the MutationObserver instance
	     * from receiving further notifications
	     * until and unless observe() is called again.
	     */
	    disconnect() {
	        this.target = null;
	        const index = observers$1.indexOf(this);
	        if (index >= 0) {
	            observers$1.splice(index, 1);
	        }
	    }
	    /**
	     * Removes all pending notifications
	     * from the MutationObserver's notification queue
	     * and returns them in a new Array of MutationRecord objects.
	     */
	    takeRecords() {
	        return this.records.splice(0, this.records.length);
	    }
	}
	/** Match two TaroNodes by sid. */
	const sidMatches$1 = (observerTarget, target) => {
	    return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
	};
	const isConcerned$1 = (record, options) => {
	    const { characterData, characterDataOldValue, attributes, attributeOldValue, childList } = options;
	    switch (record.type) {
	        case "characterData" /* MutationRecordType.CHARACTER_DATA */:
	            if (characterData) {
	                if (!characterDataOldValue)
	                    record.oldValue = null;
	                return true;
	            }
	            return false;
	        case "attributes" /* MutationRecordType.ATTRIBUTES */:
	            if (attributes) {
	                if (!attributeOldValue)
	                    record.oldValue = null;
	                return true;
	            }
	            return false;
	        case "childList" /* MutationRecordType.CHILD_LIST */:
	            if (childList) {
	                return true;
	            }
	            return false;
	    }
	};
	let pendingMuatations$1 = false;
	function logMutation$1(observer, record) {
	    observer.records.push(record);
	    if (!pendingMuatations$1) {
	        pendingMuatations$1 = true;
	        Promise
	            .resolve()
	            .then(() => {
	            pendingMuatations$1 = false;
	            observers$1.forEach(observer => {
	                return observer.callback(observer.takeRecords());
	            });
	        });
	    }
	}
	function recordMutation$1(record) {
	    observers$1.forEach(observer => {
	        const { options } = observer;
	        for (let t = record.target; t; t = t.parentNode) {
	            if (sidMatches$1(observer.target, t) && isConcerned$1(record, options)) {
	                logMutation$1(observer, record);
	                break;
	            }
	            if (!options.subtree)
	                break;
	        }
	    });
	}

	let MutationObserver$1$1 = class MutationObserver {
	    constructor(callback) {
	        if (ENABLE_MUTATION_OBSERVER) {
	            this.core = new MutationObserverImpl$1(callback);
	        }
	        else {
	            if (process.env.NODE_ENV !== 'production') {
	                console.warn('[Taro Warning] 若要使用 MutationObserver，请在 Taro 编译配置中设置 \'mini.runtime.enableMutationObserver: true\'');
	            }
	            this.core = {
	                observe: noop$1,
	                disconnect: noop$1,
	                takeRecords: noop$1
	            };
	        }
	    }
	    observe(...args) {
	        this.core.observe(...args);
	    }
	    disconnect() {
	        this.core.disconnect();
	    }
	    takeRecords() {
	        return this.core.takeRecords();
	    }
	    static record(record) {
	        recordMutation$1(record);
	    }
	};

	function throttle$1(fn, threshold = 250, scope) {
	    let lastTime = 0;
	    let deferTimer;
	    return function (...args) {
	        const context = scope || this;
	        const now = Date.now();
	        if (now - lastTime > threshold) {
	            fn.apply(this, args);
	            lastTime = now;
	        }
	        else {
	            clearTimeout(deferTimer);
	            deferTimer = setTimeout(() => {
	                lastTime = now;
	                fn.apply(context, args);
	            }, threshold);
	        }
	    };
	}

	const incrementId$1 = () => {
	    const chatCodes = [];
	    // A-Z
	    for (let i = 65; i <= 90; i++) {
	        chatCodes.push(i);
	    }
	    // a-z
	    for (let i = 97; i <= 122; i++) {
	        chatCodes.push(i);
	    }
	    const chatCodesLen = chatCodes.length - 1;
	    const list = [0, 0];
	    return () => {
	        const target = list.map(item => chatCodes[item]);
	        const res = String.fromCharCode(...target);
	        let tailIdx = list.length - 1;
	        list[tailIdx]++;
	        while (list[tailIdx] > chatCodesLen) {
	            list[tailIdx] = 0;
	            tailIdx = tailIdx - 1;
	            if (tailIdx < 0) {
	                list.push(0);
	                break;
	            }
	            list[tailIdx]++;
	        }
	        return res;
	    };
	};
	function isElement$1(node) {
	    return node.nodeType === 1 /* NodeType.ELEMENT_NODE */;
	}
	function isText$1(node) {
	    return node.nodeType === 3 /* NodeType.TEXT_NODE */;
	}
	function isComment$1(node) {
	    return node.nodeName === COMMENT$1;
	}
	function isHasExtractProp$1(el) {
	    const res = Object.keys(el.props).find(prop => {
	        return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
	    });
	    return Boolean(res);
	}
	/**
	 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
	 * @param node 当前组件
	 * @param type 事件类型
	 */
	function isParentBinded(node, type) {
	    var _a;
	    while ((node = (node === null || node === void 0 ? void 0 : node.parentElement) || null)) {
	        if (!node || node.nodeName === ROOT_STR$1 || node.nodeName === 'root-portal') {
	            return false;
	        }
	        else if ((_a = node.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
	            return true;
	        }
	    }
	    return false;
	}
	function shortcutAttr$1(key) {
	    switch (key) {
	        case STYLE$1:
	            return "st" /* Shortcuts.Style */;
	        case ID$1:
	            return UID$1;
	        case CLASS$1:
	            return "cl" /* Shortcuts.Class */;
	        default:
	            return key;
	    }
	}
	const customWrapperCache$1 = new Map();
	function extend$1(ctor, methodName, options) {
	    if (isFunction$1(options)) {
	        options = {
	            value: options
	        };
	    }
	    Object.defineProperty(ctor.prototype, methodName, Object.assign({ configurable: true, enumerable: true }, options));
	}
	let componentsAlias$1$1;
	function getComponentsAlias$2() {
	    if (!componentsAlias$1$1) {
	        componentsAlias$1$1 = getComponentsAlias$3(internalComponents$1);
	    }
	    return componentsAlias$1$1;
	}

	class ClassList$1 {
	    constructor(className, el) {
	        this.tokenList = [];
	        this.el = el;
	        className.trim().split(/\s+/).forEach(token => this.tokenList.push(token));
	    }
	    get value() {
	        return this.toString();
	    }
	    get length() {
	        return this.tokenList.length;
	    }
	    add() {
	        let index = 0;
	        let updated = false;
	        const tokens = arguments;
	        const length = tokens.length;
	        const tokenList = this.tokenList;
	        do {
	            const token = tokens[index];
	            if (this.checkTokenIsValid(token) && !~tokenList.indexOf(token)) {
	                tokenList.push(token);
	                updated = true;
	            }
	        } while (++index < length);
	        if (updated) {
	            this._update();
	        }
	    }
	    remove() {
	        let i = 0;
	        let updated = false;
	        const tokens = arguments;
	        const length = tokens.length;
	        const tokenList = this.tokenList;
	        do {
	            const token = tokens[i] + '';
	            if (!this.checkTokenIsValid(token))
	                continue;
	            const index = tokenList.indexOf(token);
	            if (~tokenList.indexOf(token)) {
	                tokenList.splice(index, 1);
	                updated = true;
	            }
	        } while (++i < length);
	        if (updated) {
	            this._update();
	        }
	    }
	    contains(token) {
	        if (!this.checkTokenIsValid(token))
	            return false;
	        return !!~this.tokenList.indexOf(token);
	    }
	    toggle(token, force) {
	        const result = this.contains(token);
	        const method = result ? force !== true && 'remove' : force !== false && 'add';
	        if (method) {
	            // @ts-ignore
	            this[method](token);
	        }
	        if (force === true || force === false) {
	            return force;
	        }
	        else {
	            return !result;
	        }
	    }
	    replace(token, replacement_token) {
	        if (!this.checkTokenIsValid(token) || !this.checkTokenIsValid(replacement_token))
	            return;
	        const index = this.tokenList.indexOf(token);
	        if (~index) {
	            this.tokenList.splice(index, 1, replacement_token);
	            this._update();
	        }
	    }
	    toString() {
	        return this.tokenList.filter(v => v !== '').join(' ');
	    }
	    checkTokenIsValid(token) {
	        if (token === '' || /\s/.test(token))
	            return false;
	        return true;
	    }
	    _update() {
	        this.el.className = this.value;
	    }
	}

	class EventSource$1 extends Map {
	    removeNode(child) {
	        const { sid, uid } = child;
	        this.delete(sid);
	        if (uid !== sid && uid)
	            this.delete(uid);
	    }
	    removeNodeTree(child) {
	        this.removeNode(child);
	        const { childNodes } = child;
	        childNodes.forEach(node => this.removeNodeTree(node));
	    }
	}
	const eventSource$1 = new EventSource$1();

	const env$1 = {
	    window: process.env.TARO_PLATFORM === 'web' ? window : EMPTY_OBJ$1,
	    document: process.env.TARO_PLATFORM === 'web' ? document : EMPTY_OBJ$1
	};

	let SPECIAL_NODES$1;
	let componentsAlias$2;
	/**
	 * React also has a fancy function's name for this: `hydrate()`.
	 * You may have been heard `hydrate` as a SSR-related function,
	 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
	 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
	 */
	function hydrate$1(node) {
	    var _a;
	    // 初始化 componentsAlias
	    componentsAlias$2 || (componentsAlias$2 = getComponentsAlias$2());
	    // 初始化 SPECIAL_NODES
	    SPECIAL_NODES$1 || (SPECIAL_NODES$1 = hooks$1.call('getSpecialNodes'));
	    const nodeName = node.nodeName;
	    let compileModeName = null;
	    if (isText$1(node)) {
	        return {
	            sid: node.sid,
	            ["v" /* Shortcuts.Text */]: node.nodeValue,
	            ["nn" /* Shortcuts.NodeName */]: ((_a = componentsAlias$2[nodeName]) === null || _a === void 0 ? void 0 : _a._num) || '8'
	        };
	    }
	    const data = {
	        ["nn" /* Shortcuts.NodeName */]: nodeName,
	        sid: node.sid
	    };
	    if (node.uid !== node.sid) {
	        data.uid = node.uid;
	    }
	    if (!node.isAnyEventBinded() && SPECIAL_NODES$1.indexOf(nodeName) > -1) {
	        data["nn" /* Shortcuts.NodeName */] = `static-${nodeName}`;
	        if (nodeName === VIEW$1 && !isHasExtractProp$1(node)) {
	            data["nn" /* Shortcuts.NodeName */] = PURE_VIEW$1;
	        }
	    }
	    const { props } = node;
	    for (const prop in props) {
	        const propInCamelCase = toCamelCase$1(prop);
	        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
	            prop !== CLASS$1 &&
	            prop !== STYLE$1 &&
	            prop !== ID$1 &&
	            propInCamelCase !== CATCHMOVE$1 &&
	            propInCamelCase !== COMPILE_MODE$1) {
	            data[propInCamelCase] = props[prop];
	        }
	        if (process.env.TARO_ENV !== 'swan' &&
	            nodeName === VIEW$1 &&
	            propInCamelCase === CATCHMOVE$1 &&
	            props[prop] !== false) {
	            data["nn" /* Shortcuts.NodeName */] = CATCH_VIEW$1;
	        }
	        if (propInCamelCase === COMPILE_MODE$1) {
	            compileModeName = props[prop];
	        }
	    }
	    // Children
	    data["cn" /* Shortcuts.Childnodes */] = node.childNodes.filter(node => !isComment$1(node)).map(hydrate$1);
	    if (node.className !== '') {
	        data["cl" /* Shortcuts.Class */] = node.className;
	    }
	    const cssText = node.cssText;
	    if (cssText !== '' && nodeName !== 'swiper-item') {
	        data["st" /* Shortcuts.Style */] = cssText;
	    }
	    hooks$1.call('modifyHydrateData', data, node);
	    const nn = data["nn" /* Shortcuts.NodeName */];
	    const componentAlias = componentsAlias$2[nn];
	    if (componentAlias) {
	        data["nn" /* Shortcuts.NodeName */] = componentAlias._num;
	        for (const prop in data) {
	            if (prop in componentAlias) {
	                data[componentAlias[prop]] = data[prop];
	                delete data[prop];
	            }
	        }
	    }
	    if (compileModeName !== null) {
	        data["nn" /* Shortcuts.NodeName */] = compileModeName;
	    }
	    const resData = hooks$1.call('transferHydrateData', data, node, componentAlias);
	    return resData || data;
	}

	class TaroEventTarget$1 {
	    constructor() {
	        this.__handlers = {};
	    }
	    addEventListener(type, handler, options) {
	        type = type.toLowerCase();
	        hooks$1.call('onAddEvent', type, handler, options, this);
	        if (type === 'regionchange') {
	            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
	            this.addEventListener('begin', handler, options);
	            this.addEventListener('end', handler, options);
	            return;
	        }
	        let isCapture = Boolean(options);
	        let isOnce = false;
	        if (isObject$1(options)) {
	            isCapture = Boolean(options.capture);
	            isOnce = Boolean(options.once);
	        }
	        if (isOnce) {
	            const wrapper = function () {
	                handler.apply(this, arguments); // this 指向 Element
	                this.removeEventListener(type, wrapper);
	            };
	            this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), { once: false }));
	            return;
	        }
	        process.env.NODE_ENV !== 'production' && warn$1(isCapture, 'Taro 暂未实现 event 的 capture 特性。');
	        // 某些框架，如 PReact 有委托的机制，handler 始终是同一个函数
	        // 这会导致多层停止冒泡失败：view -> view(handler.stop = false) -> view(handler.stop = true)
	        // 这样解决：view -> view(handlerA.stop = false) -> view(handlerB.stop = false)
	        // 因此每次绑定事件都新建一个函数，如果带来了性能问题，可以把这段逻辑抽取到 PReact 插件中。
	        const oldHandler = handler;
	        handler = function () {
	            return oldHandler.apply(this, arguments); // this 指向 Element
	        };
	        handler.oldHandler = oldHandler;
	        const handlers = this.__handlers[type];
	        if (isArray$1(handlers)) {
	            handlers.push(handler);
	        }
	        else {
	            this.__handlers[type] = [handler];
	        }
	    }
	    removeEventListener(type, handler) {
	        type = type.toLowerCase();
	        if (type === 'regionchange') {
	            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
	            this.removeEventListener('begin', handler);
	            this.removeEventListener('end', handler);
	            return;
	        }
	        if (!handler) {
	            return;
	        }
	        const handlers = this.__handlers[type];
	        if (!isArray$1(handlers)) {
	            return;
	        }
	        const index = handlers.findIndex(item => {
	            if (item === handler || item.oldHandler === handler)
	                return true;
	        });
	        process.env.NODE_ENV !== 'production' && warn$1(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
	        handlers.splice(index, 1);
	    }
	    isAnyEventBinded() {
	        const handlers = this.__handlers;
	        const isAnyEventBinded = Object.keys(handlers).find(key => handlers[key].length);
	        return Boolean(isAnyEventBinded);
	    }
	}

	const CHILDNODES$1 = "cn" /* Shortcuts.Childnodes */;
	const nodeId$1 = incrementId$1();
	class TaroNode$1 extends TaroEventTarget$1 {
	    constructor() {
	        super();
	        this.parentNode = null;
	        this.childNodes = [];
	        this.hydrate = (node) => () => hydrate$1(node);
	        this.uid = '_' + nodeId$1(); // dom 节点 id，开发者可修改
	        this.sid = this.uid; // dom 节点全局唯一 id，不可被修改
	        eventSource$1.set(this.sid, this);
	    }
	    updateChildNodes(isClean) {
	        const cleanChildNodes = () => [];
	        const rerenderChildNodes = () => {
	            const childNodes = this.childNodes.filter(node => !isComment$1(node));
	            return childNodes.map(hydrate$1);
	        };
	        this.enqueueUpdate({
	            path: `${this._path}.${CHILDNODES$1}`,
	            value: isClean ? cleanChildNodes : rerenderChildNodes
	        });
	    }
	    updateSingleChild(index) {
	        this.childNodes.forEach((child, childIndex) => {
	            if (isComment$1(child))
	                return;
	            if (index && childIndex < index)
	                return;
	            this.enqueueUpdate({
	                path: child._path,
	                value: this.hydrate(child)
	            });
	        });
	    }
	    get _root() {
	        var _a;
	        return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
	    }
	    findIndex(refChild) {
	        const index = this.childNodes.indexOf(refChild);
	        ensure$1(index !== -1, 'The node to be replaced is not a child of this node.');
	        return index;
	    }
	    get _path() {
	        const parentNode = this.parentNode;
	        if (parentNode) {
	            // 计算路径时，先过滤掉 comment 节点
	            const list = parentNode.childNodes.filter(node => !isComment$1(node));
	            const indexOfNode = list.indexOf(this);
	            const index = hooks$1.call('getPathIndex', indexOfNode);
	            return `${parentNode._path}.${CHILDNODES$1}.${index}`;
	        }
	        return '';
	    }
	    get nextSibling() {
	        const parentNode = this.parentNode;
	        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
	    }
	    get previousSibling() {
	        const parentNode = this.parentNode;
	        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
	    }
	    get parentElement() {
	        const parentNode = this.parentNode;
	        if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1 /* NodeType.ELEMENT_NODE */) {
	            return parentNode;
	        }
	        return null;
	    }
	    get firstChild() {
	        return this.childNodes[0] || null;
	    }
	    get lastChild() {
	        const childNodes = this.childNodes;
	        return childNodes[childNodes.length - 1] || null;
	    }
	    /**
	     * @textContent 目前只能置空子元素
	     * @TODO 等待完整 innerHTML 实现
	     */
	    // eslint-disable-next-line accessor-pairs
	    set textContent(text) {
	        const removedNodes = this.childNodes.slice();
	        const addedNodes = [];
	        // Handle old children' data structure & ref
	        while (this.firstChild) {
	            this.removeChild(this.firstChild, { doUpdate: false });
	        }
	        if (text === '') {
	            this.updateChildNodes(true);
	        }
	        else {
	            const newText = env$1.document.createTextNode(text);
	            addedNodes.push(newText);
	            this.appendChild(newText);
	            this.updateChildNodes();
	        }
	        // @Todo: appendChild 会多触发一次
	        MutationObserver$1$1.record({
	            type: "childList" /* MutationRecordType.CHILD_LIST */,
	            target: this,
	            removedNodes,
	            addedNodes
	        });
	    }
	    /**
	     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
	     * @scenario
	     * [A,B,C]
	     *   1. insert D before C, D has no parent
	     *   2. insert D before C, D has the same parent of C
	     *   3. insert D before C, D has the different parent of C
	     */
	    insertBefore(newChild, refChild, isReplace) {
	        if (newChild.nodeName === DOCUMENT_FRAGMENT$1) {
	            newChild.childNodes.reduceRight((previousValue, currentValue) => {
	                this.insertBefore(currentValue, previousValue);
	                return currentValue;
	            }, refChild);
	            return newChild;
	        }
	        // Parent release newChild
	        //   - cleanRef: false (No need to clean eventSource, because newChild is about to be inserted)
	        //   - update: true (Need to update parent.childNodes, because parent.childNodes is reordered)
	        newChild.remove({ cleanRef: false });
	        let index = 0;
	        // Data structure
	        newChild.parentNode = this;
	        if (refChild) {
	            // insertBefore & replaceChild
	            index = this.findIndex(refChild);
	            this.childNodes.splice(index, 0, newChild);
	        }
	        else {
	            // appendChild
	            this.childNodes.push(newChild);
	        }
	        const childNodesLength = this.childNodes.length;
	        // Serialization
	        if (this._root) {
	            if (!refChild) {
	                // appendChild
	                const isOnlyChild = childNodesLength === 1;
	                if (isOnlyChild) {
	                    this.updateChildNodes();
	                }
	                else {
	                    this.enqueueUpdate({
	                        path: newChild._path,
	                        value: this.hydrate(newChild)
	                    });
	                }
	            }
	            else if (isReplace) {
	                // replaceChild
	                this.enqueueUpdate({
	                    path: newChild._path,
	                    value: this.hydrate(newChild)
	                });
	            }
	            else {
	                // insertBefore 有两种更新模式
	                // 比方说有 A B C 三个节点，现在要在 C 前插入 D
	                // 1. 插入 D，然后更新整个父节点的 childNodes 数组
	                // setData({ cn: [A, B, D, C] })
	                // 2. 插入 D，然后更新 D 以及 D 之后每个节点的数据
	                // setData ({
	                //   cn.[2]: D,
	                //   cn.[3]: C,
	                // })
	                // 由于微信解析 ’cn.[2]‘ 这些路径的时候也需要消耗时间，
	                // 所以根据 insertBefore 插入的位置来做不同的处理
	                const mark = childNodesLength * 2 / 3;
	                if (mark > index) {
	                    // 如果 insertBefore 的位置在 childNodes 的 2/3 前，则为了避免解析路径消耗过多的时间，采用第一种方式
	                    this.updateChildNodes();
	                }
	                else {
	                    // 如果 insertBefore 的位置在 childNodes 的 2/3 之后，则采用第二种方式，避免 childNodes 的全量更新
	                    this.updateSingleChild(index);
	                }
	            }
	        }
	        MutationObserver$1$1.record({
	            type: "childList" /* MutationRecordType.CHILD_LIST */,
	            target: this,
	            addedNodes: [newChild],
	            removedNodes: isReplace
	                ? [refChild] /** replaceChild */
	                : [],
	            nextSibling: isReplace
	                ? refChild.nextSibling /** replaceChild */
	                : (refChild || null),
	            previousSibling: newChild.previousSibling
	        });
	        return newChild;
	    }
	    /**
	     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
	     * @scenario
	     * [A,B,C]
	     *   1. append C, C has no parent
	     *   2. append C, C has the same parent of B
	     *   3. append C, C has the different parent of B
	     */
	    appendChild(newChild) {
	        return this.insertBefore(newChild);
	    }
	    /**
	     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
	     * @scenario
	     * [A,B,C]
	     *   1. replace B with C, C has no parent
	     *   2. replace B with C, C has no parent, C has the same parent of B
	     *   3. replace B with C, C has no parent, C has the different parent of B
	     */
	    replaceChild(newChild, oldChild) {
	        if (oldChild.parentNode !== this)
	            return;
	        // Insert the newChild
	        this.insertBefore(newChild, oldChild, true);
	        // Destroy the oldChild
	        //   - cleanRef: true (Need to clean eventSource, because the oldChild was detached from the DOM tree)
	        //   - update: false (No need to update parent.childNodes, because replace will not cause the parent.childNodes being reordered)
	        oldChild.remove({ doUpdate: false });
	        return oldChild;
	    }
	    /**
	     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
	     * @scenario
	     * [A,B,C]
	     *   1. remove A or B
	     *   2. remove C
	     */
	    removeChild(child, options = {}) {
	        const { cleanRef, doUpdate } = options;
	        if (cleanRef !== false && doUpdate !== false) {
	            // appendChild/replaceChild/insertBefore 不应该触发
	            // @Todo: 但其实如果 newChild 的父节点是另一颗子树的节点，应该是要触发的
	            MutationObserver$1$1.record({
	                type: "childList" /* MutationRecordType.CHILD_LIST */,
	                target: this,
	                removedNodes: [child],
	                nextSibling: child.nextSibling,
	                previousSibling: child.previousSibling
	            });
	        }
	        // Data Structure
	        const index = this.findIndex(child);
	        this.childNodes.splice(index, 1);
	        child.parentNode = null;
	        // Set eventSource
	        if (cleanRef !== false) {
	            eventSource$1.removeNodeTree(child);
	        }
	        // Serialization
	        if (this._root && doUpdate !== false) {
	            this.updateChildNodes();
	        }
	        return child;
	    }
	    remove(options) {
	        var _a;
	        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, options);
	    }
	    hasChildNodes() {
	        return this.childNodes.length > 0;
	    }
	    enqueueUpdate(payload) {
	        var _a;
	        (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
	    }
	    get ownerDocument() {
	        return env$1.document;
	    }
	    static extend(methodName, options) {
	        extend$1(TaroNode$1, methodName, options);
	    }
	}

	/*
	 *
	 * https://www.w3.org/Style/CSS/all-properties.en.html
	 */
	const WEBKIT$1 = 'webkit';
	const styleProperties$1 = [
	    'all',
	    'appearance',
	    'blockOverflow',
	    'blockSize',
	    'bottom',
	    'clear',
	    'contain',
	    'content',
	    'continue',
	    'cursor',
	    'direction',
	    'display',
	    'filter',
	    'float',
	    'gap',
	    'height',
	    'inset',
	    'isolation',
	    'left',
	    'letterSpacing',
	    'lightingColor',
	    'markerSide',
	    'mixBlendMode',
	    'opacity',
	    'order',
	    'position',
	    'quotes',
	    'resize',
	    'right',
	    'rowGap',
	    'tabSize',
	    'tableLayout',
	    'top',
	    'userSelect',
	    'verticalAlign',
	    'visibility',
	    'voiceFamily',
	    'volume',
	    'whiteSpace',
	    'widows',
	    'width',
	    'zIndex',
	    'pointerEvents',
	    'aspectRatio'
	    /** 非常用 style */
	    // 'azimuth',
	    // 'backfaceVisibility',
	    // 'baselineShift',
	    // 'captionSide',
	    // 'chains',
	    // 'dominantBaseline',
	    // 'elevation',
	    // 'emptyCells',
	    // 'forcedColorAdjust',
	    // 'glyphOrientationVertical',
	    // 'hangingPunctuation',
	    // 'hyphenateCharacter',
	    // 'hyphens',
	    // 'imageOrientation',
	    // 'imageResolution',
	    // 'orphans',
	    // 'playDuring',
	    // 'pointerEvents',
	    // 'regionFragment',
	    // 'richness',
	    // 'running',
	    // 'scrollBehavior',
	    // 'speechRate',
	    // 'stress',
	    // 'stringSet',
	    // 'unicodeBidi',
	    // 'willChange',
	    // 'writingMode',
	];
	// 减少文件体积
	function combine$1(prefix, list, excludeSelf) {
	    !excludeSelf && styleProperties$1.push(prefix);
	    list.forEach(item => {
	        styleProperties$1.push(prefix + item);
	        if (prefix === WEBKIT$1) {
	            styleProperties$1.push('Webkit' + item);
	        }
	    });
	}
	const color$1 = 'Color';
	const style$1 = 'Style';
	const width$1 = 'Width';
	const image$1 = 'Image';
	const size$1 = 'Size';
	const color_style_width$1 = [color$1, style$1, width$1];
	const fitlength_fitwidth_image$1 = ['FitLength', 'FitWidth', image$1];
	const fitlength_fitwidth_image_radius$1 = [...fitlength_fitwidth_image$1, 'Radius'];
	const color_style_width_fitlength_fitwidth_image$1 = [...color_style_width$1, ...fitlength_fitwidth_image$1];
	const endRadius_startRadius$1 = ['EndRadius', 'StartRadius'];
	const bottom_left_right_top$1 = ['Bottom', 'Left', 'Right', 'Top'];
	const end_start$1 = ['End', 'Start'];
	const content_items_self$1 = ['Content', 'Items', 'Self'];
	const blockSize_height_inlineSize_width$1 = ['BlockSize', 'Height', 'InlineSize', width$1];
	const after_before$1 = ['After', 'Before'];
	combine$1('borderBlock', color_style_width$1);
	combine$1('borderBlockEnd', color_style_width$1);
	combine$1('borderBlockStart', color_style_width$1);
	combine$1('outline', [...color_style_width$1, 'Offset']);
	combine$1('border', [...color_style_width$1, 'Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']);
	combine$1('borderFit', ['Length', width$1]);
	combine$1('borderInline', color_style_width$1);
	combine$1('borderInlineEnd', color_style_width$1);
	combine$1('borderInlineStart', color_style_width$1);
	combine$1('borderLeft', color_style_width_fitlength_fitwidth_image$1);
	combine$1('borderRight', color_style_width_fitlength_fitwidth_image$1);
	combine$1('borderTop', color_style_width_fitlength_fitwidth_image$1);
	combine$1('borderBottom', color_style_width_fitlength_fitwidth_image$1);
	combine$1('textDecoration', [color$1, style$1, 'Line']);
	combine$1('textEmphasis', [color$1, style$1, 'Position']);
	combine$1('scrollMargin', bottom_left_right_top$1);
	combine$1('scrollPadding', bottom_left_right_top$1);
	combine$1('padding', bottom_left_right_top$1);
	combine$1('margin', [...bottom_left_right_top$1, 'Trim']);
	combine$1('scrollMarginBlock', end_start$1);
	combine$1('scrollMarginInline', end_start$1);
	combine$1('scrollPaddingBlock', end_start$1);
	combine$1('scrollPaddingInline', end_start$1);
	combine$1('gridColumn', end_start$1);
	combine$1('gridRow', end_start$1);
	combine$1('insetBlock', end_start$1);
	combine$1('insetInline', end_start$1);
	combine$1('marginBlock', end_start$1);
	combine$1('marginInline', end_start$1);
	combine$1('paddingBlock', end_start$1);
	combine$1('paddingInline', end_start$1);
	combine$1('pause', after_before$1);
	combine$1('cue', after_before$1);
	combine$1('mask', ['Clip', 'Composite', image$1, 'Mode', 'Origin', 'Position', 'Repeat', size$1, 'Type']);
	combine$1('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width$1]);
	combine$1('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width$1]);
	combine$1('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size$1, 'SizeAdjust', 'Stretch', style$1, 'Weight', 'VariationSettings']);
	combine$1('transform', ['Box', 'Origin', style$1]);
	combine$1('background', [color$1, image$1, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size$1]);
	combine$1('listStyle', [image$1, 'Position', 'Type']);
	combine$1('scrollSnap', ['Align', 'Stop', 'Type']);
	combine$1('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
	combine$1('gridTemplate', ['Areas', 'Columns', 'Rows']);
	combine$1('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
	combine$1('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
	combine$1('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
	combine$1('textAlign', ['All', 'Last']);
	combine$1('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
	combine$1('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
	combine$1('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
	combine$1('offset', [...after_before$1, ...end_start$1, 'Anchor', 'Distance', 'Path', 'Position', 'Rotate']);
	combine$1('perspective', ['Origin']);
	combine$1('clip', ['Path', 'Rule']);
	combine$1('flow', ['From', 'Into']);
	combine$1('align', ['Content', 'Items', 'Self'], true);
	combine$1('alignment', ['Adjust', 'Baseline'], true);
	combine$1('borderStart', endRadius_startRadius$1, true);
	combine$1('borderEnd', endRadius_startRadius$1, true);
	combine$1('borderCorner', ['Fit', image$1, 'ImageTransform'], true);
	combine$1('borderTopLeft', fitlength_fitwidth_image_radius$1, true);
	combine$1('borderTopRight', fitlength_fitwidth_image_radius$1, true);
	combine$1('borderBottomLeft', fitlength_fitwidth_image_radius$1, true);
	combine$1('borderBottomRight', fitlength_fitwidth_image_radius$1, true);
	combine$1('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width$1], true);
	combine$1('break', [...after_before$1, 'Inside'], true);
	combine$1('wrap', [...after_before$1, 'Flow', 'Inside', 'Through'], true);
	combine$1('justify', content_items_self$1, true);
	combine$1('place', content_items_self$1, true);
	combine$1('max', [...blockSize_height_inlineSize_width$1, 'Lines'], true);
	combine$1('min', blockSize_height_inlineSize_width$1, true);
	combine$1('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
	combine$1('inline', ['BoxAlign', size$1, 'Sizing'], true);
	combine$1('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
	combine$1('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
	combine$1('word', ['Break', 'Spacing', 'Wrap'], true);
	combine$1('object', ['Fit', 'Position'], true);
	combine$1('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);
	combine$1(WEBKIT$1, ['LineClamp', 'BoxOrient', 'TextFillColor', 'TextStroke', 'TextStrokeColor', 'TextStrokeWidth'], true);

	function recordCss$1(obj) {
	    MutationObserver$1$1.record({
	        type: "attributes" /* MutationRecordType.ATTRIBUTES */,
	        target: obj._element,
	        attributeName: 'style',
	        oldValue: obj.cssText
	    });
	}
	function enqueueUpdate$1(obj) {
	    const element = obj._element;
	    if (element._root) {
	        element.enqueueUpdate({
	            path: `${element._path}.${"st" /* Shortcuts.Style */}`,
	            value: obj.cssText
	        });
	    }
	}
	function setStyle$1(newVal, styleKey) {
	    process.env.NODE_ENV !== 'production' && warn$1(isString$1(newVal) && newVal.length > PROPERTY_THRESHOLD$1, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
	    const old = this[styleKey];
	    if (old === newVal)
	        return;
	    !this._pending && recordCss$1(this);
	    if (isNull$1(newVal) || isUndefined$1(newVal) || newVal === '') {
	        this._usedStyleProp.delete(styleKey);
	        delete this._value[styleKey];
	    }
	    else {
	        this._usedStyleProp.add(styleKey);
	        this._value[styleKey] = newVal;
	    }
	    !this._pending && enqueueUpdate$1(this);
	}
	function initStyle$1(ctor, styleProperties) {
	    const properties = {};
	    for (let i = 0; i < styleProperties.length; i++) {
	        const styleKey = styleProperties[i];
	        if (ctor[styleKey])
	            return;
	        properties[styleKey] = {
	            get() {
	                const val = this._value[styleKey];
	                return isNull$1(val) || isUndefined$1(val) ? '' : val;
	            },
	            set(newVal) {
	                setStyle$1.call(this, newVal, styleKey);
	            }
	        };
	    }
	    Object.defineProperties(ctor.prototype, properties);
	}
	function isCssVariable$1(propertyName) {
	    return /^--/.test(propertyName);
	}
	class Style$1 {
	    constructor(element) {
	        this._element = element;
	        this._usedStyleProp = new Set();
	        this._value = {};
	    }
	    setCssVariables(styleKey) {
	        this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
	            enumerable: true,
	            configurable: true,
	            get: () => {
	                return this._value[styleKey] || '';
	            },
	            set: (newVal) => {
	                setStyle$1.call(this, newVal, styleKey);
	            }
	        });
	    }
	    get cssText() {
	        if (!this._usedStyleProp.size)
	            return '';
	        const texts = [];
	        this._usedStyleProp.forEach(key => {
	            const val = this[key];
	            if (isNull$1(val) || isUndefined$1(val))
	                return;
	            let styleName = isCssVariable$1(key) ? key : toDashed$1(key);
	            if (styleName.indexOf('webkit') === 0 || styleName.indexOf('Webkit') === 0) {
	                styleName = `-${styleName}`;
	            }
	            texts.push(`${styleName}: ${val};`);
	        });
	        return texts.join(' ');
	    }
	    set cssText(str) {
	        this._pending = true;
	        recordCss$1(this);
	        this._usedStyleProp.forEach(prop => {
	            this.removeProperty(prop);
	        });
	        if (str === '' || isUndefined$1(str) || isNull$1(str)) {
	            this._pending = false;
	            enqueueUpdate$1(this);
	            return;
	        }
	        const rules = str.split(';');
	        for (let i = 0; i < rules.length; i++) {
	            const rule = rules[i].trim();
	            if (rule === '') {
	                continue;
	            }
	            // 可能存在 'background: url(http:x/y/z)' 的情况
	            const [propName, ...valList] = rule.split(':');
	            const val = valList.join(':');
	            if (isUndefined$1(val)) {
	                continue;
	            }
	            this.setProperty(propName.trim(), val.trim());
	        }
	        this._pending = false;
	        enqueueUpdate$1(this);
	    }
	    setProperty(propertyName, value) {
	        if (propertyName[0] === '-') {
	            // 支持 webkit 属性或 css 变量
	            this.setCssVariables(propertyName);
	        }
	        else {
	            propertyName = toCamelCase$1(propertyName);
	        }
	        if (isNull$1(value) || isUndefined$1(value)) {
	            this.removeProperty(propertyName);
	        }
	        else {
	            this[propertyName] = value;
	        }
	    }
	    removeProperty(propertyName) {
	        propertyName = toCamelCase$1(propertyName);
	        if (!this._usedStyleProp.has(propertyName)) {
	            return '';
	        }
	        const value = this[propertyName];
	        this[propertyName] = undefined;
	        return value;
	    }
	    getPropertyValue(propertyName) {
	        propertyName = toCamelCase$1(propertyName);
	        const value = this[propertyName];
	        if (!value) {
	            return '';
	        }
	        return value;
	    }
	}
	initStyle$1(Style$1, styleProperties$1);
	hooks$1.tap('injectNewStyleProperties', (newStyleProperties) => {
	    if (isArray$1(newStyleProperties)) {
	        initStyle$1(Style$1, newStyleProperties);
	    }
	    else {
	        if (typeof newStyleProperties !== 'string')
	            return;
	        initStyle$1(Style$1, [newStyleProperties]);
	    }
	});

	function returnTrue$1() {
	    return true;
	}
	function treeToArray$1(root, predict) {
	    const array = [];
	    const filter = predict !== null && predict !== void 0 ? predict : returnTrue$1;
	    let object = root;
	    while (object) {
	        if (object.nodeType === 1 /* NodeType.ELEMENT_NODE */ && filter(object)) {
	            array.push(object);
	        }
	        object = following$1(object, root);
	    }
	    return array;
	}
	function following$1(el, root) {
	    const firstChild = el.firstChild;
	    const isElmentTypeValid = el.nodeType === 1 /* NodeType.ELEMENT_NODE */ || el.nodeType === 9 /* NodeType.DOCUMENT_NODE */;
	    // 如果当前 el 不是 element 或 document 元素，则可以直接不递归他的子元素了
	    if (firstChild && isElmentTypeValid) {
	        return firstChild;
	    }
	    let current = el;
	    do {
	        if (current === root) {
	            return null;
	        }
	        const nextSibling = current.nextSibling;
	        if (nextSibling) {
	            return nextSibling;
	        }
	        current = current.parentElement;
	    } while (current);
	    return null;
	}

	class TaroElement$1 extends TaroNode$1 {
	    constructor() {
	        super();
	        this.props = {};
	        this.dataset = EMPTY_OBJ$1;
	        this.nodeType = 1 /* NodeType.ELEMENT_NODE */;
	        this.style = new Style$1(this);
	        hooks$1.call('patchElement', this);
	    }
	    _stopPropagation(event) {
	        // eslint-disable-next-line @typescript-eslint/no-this-alias
	        let target = this;
	        // eslint-disable-next-line no-cond-assign
	        while ((target = target.parentNode)) {
	            const listeners = target.__handlers[event.type];
	            if (!isArray$1(listeners)) {
	                continue;
	            }
	            for (let i = listeners.length; i--;) {
	                const l = listeners[i];
	                l._stop = true;
	            }
	        }
	    }
	    get id() {
	        return this.getAttribute(ID$1);
	    }
	    set id(val) {
	        this.setAttribute(ID$1, val);
	    }
	    get className() {
	        return this.getAttribute(CLASS$1) || '';
	    }
	    set className(val) {
	        this.setAttribute(CLASS$1, val);
	    }
	    get cssText() {
	        return this.getAttribute(STYLE$1) || '';
	    }
	    get classList() {
	        return new ClassList$1(this.className, this);
	    }
	    get children() {
	        return this.childNodes.filter(isElement$1);
	    }
	    get attributes() {
	        const props = this.props;
	        const propKeys = Object.keys(props);
	        const style = this.style.cssText;
	        const attrs = propKeys.map(key => ({ name: key, value: props[key] }));
	        return attrs.concat(style ? { name: STYLE$1, value: style } : []);
	    }
	    get textContent() {
	        let text = '';
	        const childNodes = this.childNodes;
	        for (let i = 0; i < childNodes.length; i++) {
	            text += childNodes[i].textContent;
	        }
	        return text;
	    }
	    set textContent(text) {
	        super.textContent = text;
	    }
	    hasAttribute(qualifiedName) {
	        return !isUndefined$1(this.props[qualifiedName]);
	    }
	    hasAttributes() {
	        return this.attributes.length > 0;
	    }
	    get focus() {
	        return function () {
	            this.setAttribute(FOCUS$1, true);
	        };
	    }
	    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
	    set focus(value) {
	        this.setAttribute(FOCUS$1, value);
	    }
	    blur() {
	        this.setAttribute(FOCUS$1, false);
	    }
	    setAttribute(qualifiedName, value) {
	        process.env.NODE_ENV !== 'production' && warn$1(isString$1(value) && value.length > PROPERTY_THRESHOLD$1, `元素 ${this.nodeName} 的 ${qualifiedName} 属性值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`);
	        const isPureView = this.nodeName === VIEW$1 && !isHasExtractProp$1(this) && !this.isAnyEventBinded();
	        if (qualifiedName !== STYLE$1) {
	            MutationObserver$1$1.record({
	                target: this,
	                type: "attributes" /* MutationRecordType.ATTRIBUTES */,
	                attributeName: qualifiedName,
	                oldValue: this.getAttribute(qualifiedName)
	            });
	        }
	        switch (qualifiedName) {
	            case STYLE$1:
	                this.style.cssText = value;
	                break;
	            case ID$1:
	                if (this.uid !== this.sid) {
	                    // eventSource[sid] 永远保留，直到组件卸载
	                    // eventSource[uid] 可变
	                    eventSource$1.delete(this.uid);
	                }
	                value = String(value);
	                this.props[qualifiedName] = this.uid = value;
	                eventSource$1.set(value, this);
	                break;
	            default:
	                this.props[qualifiedName] = value;
	                if (qualifiedName.startsWith('data-')) {
	                    if (this.dataset === EMPTY_OBJ$1) {
	                        this.dataset = Object.create(null);
	                    }
	                    this.dataset[toCamelCase$1(qualifiedName.replace(/^data-/, ''))] = value;
	                }
	                break;
	        }
	        // Serialization
	        if (!this._root)
	            return;
	        const componentsAlias = getComponentsAlias$2();
	        const _alias = componentsAlias[this.nodeName];
	        const viewAlias = componentsAlias[VIEW$1]._num;
	        const staticViewAlias = componentsAlias[STATIC_VIEW$1]._num;
	        const catchViewAlias = componentsAlias[CATCH_VIEW$1]._num;
	        const _path = this._path;
	        qualifiedName = shortcutAttr$1(qualifiedName);
	        const qualifiedNameInCamelCase = toCamelCase$1(qualifiedName);
	        const payload = {
	            path: `${_path}.${qualifiedNameInCamelCase}`,
	            value: isFunction$1(value) ? () => value : value
	        };
	        hooks$1.call('modifySetAttrPayload', this, qualifiedName, payload, componentsAlias);
	        if (_alias) {
	            const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
	            payload.path = `${_path}.${toCamelCase$1(qualifiedNameAlias)}`;
	        }
	        this.enqueueUpdate(payload);
	        if (this.nodeName === VIEW$1) {
	            if (qualifiedNameInCamelCase === CATCHMOVE$1) {
	                // catchMove = true: catch-view
	                // catchMove = false: view or static-view
	                this.enqueueUpdate({
	                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
	                    value: value ? catchViewAlias : (this.isAnyEventBinded() ? viewAlias : staticViewAlias)
	                });
	            }
	            else if (isPureView && isHasExtractProp$1(this)) {
	                // pure-view => static-view
	                this.enqueueUpdate({
	                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
	                    value: staticViewAlias
	                });
	            }
	        }
	    }
	    removeAttribute(qualifiedName) {
	        const isStaticView = this.nodeName === VIEW$1 && isHasExtractProp$1(this) && !this.isAnyEventBinded();
	        MutationObserver$1$1.record({
	            target: this,
	            type: "attributes" /* MutationRecordType.ATTRIBUTES */,
	            attributeName: qualifiedName,
	            oldValue: this.getAttribute(qualifiedName)
	        });
	        if (qualifiedName === STYLE$1) {
	            this.style.cssText = '';
	        }
	        else {
	            const isInterrupt = hooks$1.call('onRemoveAttribute', this, qualifiedName);
	            if (isInterrupt) {
	                return;
	            }
	            if (!this.props.hasOwnProperty(qualifiedName)) {
	                return;
	            }
	            delete this.props[qualifiedName];
	        }
	        // Serialization
	        if (!this._root)
	            return;
	        const componentsAlias = getComponentsAlias$2();
	        const _alias = componentsAlias[this.nodeName];
	        const viewAlias = componentsAlias[VIEW$1]._num;
	        const staticViewAlias = componentsAlias[STATIC_VIEW$1]._num;
	        const pureViewAlias = componentsAlias[PURE_VIEW$1]._num;
	        const _path = this._path;
	        qualifiedName = shortcutAttr$1(qualifiedName);
	        const qualifiedNameInCamelCase = toCamelCase$1(qualifiedName);
	        const payload = {
	            path: `${_path}.${qualifiedNameInCamelCase}`,
	            value: ''
	        };
	        hooks$1.call('modifyRmAttrPayload', this, qualifiedName, payload, componentsAlias);
	        if (_alias) {
	            const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
	            payload.path = `${_path}.${toCamelCase$1(qualifiedNameAlias)}`;
	        }
	        this.enqueueUpdate(payload);
	        if (this.nodeName === VIEW$1) {
	            if (qualifiedNameInCamelCase === CATCHMOVE$1) {
	                // catch-view => view or static-view or pure-view
	                this.enqueueUpdate({
	                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
	                    value: this.isAnyEventBinded() ? viewAlias : (isHasExtractProp$1(this) ? staticViewAlias : pureViewAlias)
	                });
	            }
	            else if (isStaticView && !isHasExtractProp$1(this)) {
	                // static-view => pure-view
	                this.enqueueUpdate({
	                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
	                    value: pureViewAlias
	                });
	            }
	        }
	    }
	    getAttribute(qualifiedName) {
	        const attr = qualifiedName === STYLE$1 ? this.style.cssText : this.props[qualifiedName];
	        return attr !== null && attr !== void 0 ? attr : '';
	    }
	    getElementsByTagName(tagName) {
	        return treeToArray$1(this, (el) => {
	            return el.nodeName === tagName || (tagName === '*' && this !== el);
	        });
	    }
	    getElementsByClassName(className) {
	        const classNames = className.trim().split(/\s+/);
	        return treeToArray$1(this, (el) => {
	            const classList = el.classList;
	            return classNames.every(c => classList.contains(c));
	        });
	    }
	    dispatchEvent(event) {
	        const cancelable = event.cancelable;
	        const listeners = this.__handlers[event.type];
	        if (!isArray$1(listeners)) {
	            return false;
	        }
	        for (let i = listeners.length; i--;) {
	            const listener = listeners[i];
	            let result;
	            if (listener._stop) {
	                listener._stop = false;
	            }
	            else {
	                hooks$1.call('modifyDispatchEvent', event, this);
	                result = listener.call(this, event);
	            }
	            if ((result === false || event._end) && cancelable) {
	                event.defaultPrevented = true;
	            }
	            if (!isUndefined$1(result) && event.mpEvent) {
	                const res = hooks$1.call('modifyTaroEventReturn', this, event, result);
	                if (res) {
	                    event.mpEvent[EVENT_CALLBACK_RESULT$1] = result;
	                }
	            }
	            if (event._end && event._stop) {
	                break;
	            }
	        }
	        if (event._stop) {
	            this._stopPropagation(event);
	        }
	        else {
	            event._stop = true;
	        }
	        return listeners != null;
	    }
	    addEventListener(type, handler, options) {
	        const name = this.nodeName;
	        const SPECIAL_NODES = hooks$1.call('getSpecialNodes');
	        let sideEffect = true;
	        if (isObject$1(options) && options.sideEffect === false) {
	            sideEffect = false;
	            delete options.sideEffect;
	        }
	        hooks$1.call('modifyAddEventListener', this, sideEffect, getComponentsAlias$2);
	        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
	            const componentsAlias = getComponentsAlias$2();
	            const alias = componentsAlias[name]._num;
	            this.enqueueUpdate({
	                path: `${this._path}.${"nn" /* Shortcuts.NodeName */}`,
	                value: alias
	            });
	        }
	        super.addEventListener(type, handler, options);
	    }
	    removeEventListener(type, handler, sideEffect = true) {
	        super.removeEventListener(type, handler);
	        const name = this.nodeName;
	        const SPECIAL_NODES = hooks$1.call('getSpecialNodes');
	        hooks$1.call('modifyRemoveEventListener', this, sideEffect, getComponentsAlias$2);
	        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
	            const componentsAlias = getComponentsAlias$2();
	            const value = isHasExtractProp$1(this) ? `static-${name}` : `pure-${name}`;
	            const valueAlias = componentsAlias[value]._num;
	            this.enqueueUpdate({
	                path: `${this._path}.${"nn" /* Shortcuts.NodeName */}`,
	                value: valueAlias
	            });
	        }
	    }
	    static extend(methodName, options) {
	        extend$1(TaroElement$1, methodName, options);
	    }
	}

	const options$1 = {
	    prerender: true,
	    debug: false
	};

	function initPosition$1() {
	    return {
	        index: 0,
	        column: 0,
	        line: 0
	    };
	}
	function feedPosition$1(position, str, len) {
	    const start = position.index;
	    const end = position.index = start + len;
	    for (let i = start; i < end; i++) {
	        const char = str.charAt(i);
	        if (char === '\n') {
	            position.line++;
	            position.column = 0;
	        }
	        else {
	            position.column++;
	        }
	    }
	}
	function jumpPosition$1(position, str, end) {
	    const len = end - position.index;
	    return feedPosition$1(position, str, len);
	}
	function copyPosition$1(position) {
	    return {
	        index: position.index,
	        line: position.line,
	        column: position.column
	    };
	}
	const whitespace$1 = /\s/;
	function isWhitespaceChar$1(char) {
	    return whitespace$1.test(char);
	}
	const equalSign$1 = /=/;
	function isEqualSignChar$1(char) {
	    return equalSign$1.test(char);
	}
	function shouldBeIgnore$1(tagName) {
	    const name = tagName.toLowerCase();
	    if (options$1.html.skipElements.has(name)) {
	        return true;
	    }
	    return false;
	}
	const alphanumeric$1 = /[A-Za-z0-9]/;
	function findTextEnd$1(str, index) {
	    while (true) {
	        const textEnd = str.indexOf('<', index);
	        if (textEnd === -1) {
	            return textEnd;
	        }
	        const char = str.charAt(textEnd + 1);
	        if (char === '/' || char === '!' || alphanumeric$1.test(char)) {
	            return textEnd;
	        }
	        index = textEnd + 1;
	    }
	}
	function isWordEnd$1(cursor, wordBegin, html) {
	    if (!isWhitespaceChar$1(html.charAt(cursor)))
	        return false;
	    const len = html.length;
	    // backwrad
	    for (let i = cursor - 1; i > wordBegin; i--) {
	        const char = html.charAt(i);
	        if (!isWhitespaceChar$1(char)) {
	            if (isEqualSignChar$1(char))
	                return false;
	            break;
	        }
	    }
	    // forward
	    for (let i = cursor + 1; i < len; i++) {
	        const char = html.charAt(i);
	        if (!isWhitespaceChar$1(char)) {
	            if (isEqualSignChar$1(char))
	                return false;
	            return true;
	        }
	    }
	}
	class Scaner$1 {
	    constructor(html) {
	        this.tokens = [];
	        this.position = initPosition$1();
	        this.html = html;
	    }
	    scan() {
	        const { html, position } = this;
	        const len = html.length;
	        while (position.index < len) {
	            const start = position.index;
	            this.scanText();
	            if (position.index === start) {
	                const isComment = html.startsWith('!--', start + 1);
	                if (isComment) {
	                    this.scanComment();
	                }
	                else {
	                    const tagName = this.scanTag();
	                    if (shouldBeIgnore$1(tagName)) {
	                        this.scanSkipTag(tagName);
	                    }
	                }
	            }
	        }
	        return this.tokens;
	    }
	    scanText() {
	        const type = 'text';
	        const { html, position } = this;
	        let textEnd = findTextEnd$1(html, position.index);
	        if (textEnd === position.index) {
	            return;
	        }
	        if (textEnd === -1) {
	            textEnd = html.length;
	        }
	        const start = copyPosition$1(position);
	        const content = html.slice(position.index, textEnd);
	        jumpPosition$1(position, html, textEnd);
	        const end = copyPosition$1(position);
	        this.tokens.push({ type, content, position: { start, end } });
	    }
	    scanComment() {
	        const type = 'comment';
	        const { html, position } = this;
	        const start = copyPosition$1(position);
	        feedPosition$1(position, html, 4); // "<!--".length
	        let contentEnd = html.indexOf('-->', position.index);
	        let commentEnd = contentEnd + 3; // "-->".length
	        if (contentEnd === -1) {
	            contentEnd = commentEnd = html.length;
	        }
	        const content = html.slice(position.index, contentEnd);
	        jumpPosition$1(position, html, commentEnd);
	        this.tokens.push({
	            type,
	            content,
	            position: {
	                start,
	                end: copyPosition$1(position)
	            }
	        });
	    }
	    scanTag() {
	        this.scanTagStart();
	        const tagName = this.scanTagName();
	        this.scanAttrs();
	        this.scanTagEnd();
	        return tagName;
	    }
	    scanTagStart() {
	        const type = 'tag-start';
	        const { html, position } = this;
	        const secondChar = html.charAt(position.index + 1);
	        const close = secondChar === '/';
	        const start = copyPosition$1(position);
	        feedPosition$1(position, html, close ? 2 : 1);
	        this.tokens.push({ type, close, position: { start } });
	    }
	    scanTagEnd() {
	        const type = 'tag-end';
	        const { html, position } = this;
	        const firstChar = html.charAt(position.index);
	        const close = firstChar === '/';
	        feedPosition$1(position, html, close ? 2 : 1);
	        const end = copyPosition$1(position);
	        this.tokens.push({ type, close, position: { end } });
	    }
	    scanTagName() {
	        const type = 'tag';
	        const { html, position } = this;
	        const len = html.length;
	        let start = position.index;
	        while (start < len) {
	            const char = html.charAt(start);
	            const isTagChar = !(isWhitespaceChar$1(char) || char === '/' || char === '>');
	            if (isTagChar)
	                break;
	            start++;
	        }
	        let end = start + 1;
	        while (end < len) {
	            const char = html.charAt(end);
	            const isTagChar = !(isWhitespaceChar$1(char) || char === '/' || char === '>');
	            if (!isTagChar)
	                break;
	            end++;
	        }
	        jumpPosition$1(position, html, end);
	        const tagName = html.slice(start, end);
	        this.tokens.push({
	            type,
	            content: tagName
	        });
	        return tagName;
	    }
	    scanAttrs() {
	        const { html, position, tokens } = this;
	        let cursor = position.index;
	        let quote = null; // null, single-, or double-quote
	        let wordBegin = cursor; // index of word start
	        const words = []; // "key", "key=value", "key='value'", etc
	        const len = html.length;
	        while (cursor < len) {
	            const char = html.charAt(cursor);
	            if (quote) {
	                const isQuoteEnd = char === quote;
	                if (isQuoteEnd) {
	                    quote = null;
	                }
	                cursor++;
	                continue;
	            }
	            const isTagEnd = char === '/' || char === '>';
	            if (isTagEnd) {
	                if (cursor !== wordBegin) {
	                    words.push(html.slice(wordBegin, cursor));
	                }
	                break;
	            }
	            if (isWordEnd$1(cursor, wordBegin, html)) {
	                if (cursor !== wordBegin) {
	                    words.push(html.slice(wordBegin, cursor));
	                }
	                wordBegin = cursor + 1;
	                cursor++;
	                continue;
	            }
	            const isQuoteStart = char === '\'' || char === '"';
	            if (isQuoteStart) {
	                quote = char;
	                cursor++;
	                continue;
	            }
	            cursor++;
	        }
	        jumpPosition$1(position, html, cursor);
	        const wLen = words.length;
	        const type = 'attribute';
	        for (let i = 0; i < wLen; i++) {
	            const word = words[i];
	            const isNotPair = word.includes('=');
	            if (isNotPair) {
	                const secondWord = words[i + 1];
	                if (secondWord && secondWord.startsWith('=')) {
	                    if (secondWord.length > 1) {
	                        const newWord = word + secondWord;
	                        tokens.push({ type, content: newWord });
	                        i += 1;
	                        continue;
	                    }
	                    const thirdWord = words[i + 2];
	                    i += 1;
	                    if (thirdWord) {
	                        const newWord = word + '=' + thirdWord;
	                        tokens.push({ type, content: newWord });
	                        i += 1;
	                        continue;
	                    }
	                }
	            }
	            if (word.endsWith('=')) {
	                const secondWord = words[i + 1];
	                if (secondWord && !secondWord.includes('=')) {
	                    const newWord = word + secondWord;
	                    tokens.push({ type, content: newWord });
	                    i += 1;
	                    continue;
	                }
	                const newWord = word.slice(0, -1);
	                tokens.push({ type, content: newWord });
	                continue;
	            }
	            tokens.push({ type, content: word });
	        }
	    }
	    scanSkipTag(tagName) {
	        const { html, position } = this;
	        const safeTagName = tagName.toLowerCase();
	        const len = html.length;
	        while (position.index < len) {
	            const nextTag = html.indexOf('</', position.index);
	            if (nextTag === -1) {
	                this.scanText();
	                break;
	            }
	            jumpPosition$1(position, html, nextTag);
	            const name = this.scanTag();
	            if (safeTagName === name.toLowerCase()) {
	                break;
	            }
	        }
	    }
	}

	function unquote$1(str) {
	    const car = str.charAt(0);
	    const end = str.length - 1;
	    const isQuoteStart = car === '"' || car === "'";
	    if (isQuoteStart && car === str.charAt(end)) {
	        return str.slice(1, end);
	    }
	    return str;
	}

	const LEFT_BRACKET$1 = '{';
	const RIGHT_BRACKET$1 = '}';
	const CLASS_SELECTOR$1 = '.';
	const ID_SELECTOR$1 = '#';
	const CHILD_COMBINATOR$1 = '>';
	const GENERAL_SIBLING_COMBINATOR$1 = '~';
	const ADJACENT_SIBLING_COMBINATOR$1 = '+';
	class StyleTagParser$1 {
	    constructor() {
	        this.styles = [];
	    }
	    extractStyle(src) {
	        const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
	        let html = src;
	        // let html = src.replace(/\n/g, '')
	        html = html.replace(REG_STYLE, (_, $1) => {
	            const style = $1.trim();
	            this.stringToSelector(style);
	            return '';
	        });
	        return html.trim();
	    }
	    stringToSelector(style) {
	        let lb = style.indexOf(LEFT_BRACKET$1);
	        while (lb > -1) {
	            const rb = style.indexOf(RIGHT_BRACKET$1);
	            const selectors = style.slice(0, lb).trim();
	            let content = style.slice(lb + 1, rb);
	            content = content.replace(/:(.*);/g, function (_, $1) {
	                const t = $1.trim().replace(/ +/g, '+++');
	                return `:${t};`;
	            });
	            content = content.replace(/ /g, '');
	            content = content.replace(/\+\+\+/g, ' ');
	            if (!(/;$/.test(content))) {
	                content += ';';
	            }
	            selectors.split(',').forEach(src => {
	                const selectorList = this.parseSelector(src);
	                this.styles.push({
	                    content,
	                    selectorList
	                });
	            });
	            style = style.slice(rb + 1);
	            lb = style.indexOf(LEFT_BRACKET$1);
	        }
	        // console.log('res this.styles: ', this.styles)
	    }
	    parseSelector(src) {
	        const list = src
	            .trim()
	            .replace(/ *([>~+]) */g, ' $1')
	            .replace(/ +/g, ' ')
	            .replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, '[$1=$2]')
	            .split(' ');
	        const selectors = list.map(item => {
	            const firstChar = item.charAt(0);
	            const selector = {
	                isChild: firstChar === CHILD_COMBINATOR$1,
	                isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR$1,
	                isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR$1,
	                tag: null,
	                id: null,
	                class: [],
	                attrs: []
	            };
	            item = item.replace(/^[>~+]/, '');
	            // 属性选择器
	            item = item.replace(/\[(.+?)\]/g, function (_, $1) {
	                const [key, value] = $1.split('=');
	                const all = $1.indexOf('=') === -1;
	                const attr = {
	                    all,
	                    key,
	                    value: all ? null : value
	                };
	                selector.attrs.push(attr);
	                return '';
	            });
	            item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
	                if ($1[0] === ID_SELECTOR$1) {
	                    // id 选择器
	                    selector.id = $1.substr(1);
	                }
	                else if ($1[0] === CLASS_SELECTOR$1) {
	                    // class 选择器
	                    selector.class.push($1.substr(1));
	                }
	                return '';
	            });
	            // 标签选择器
	            if (item !== '') {
	                selector.tag = item;
	            }
	            return selector;
	        });
	        return selectors;
	    }
	    matchStyle(tagName, el, list) {
	        const res = sortStyles$1(this.styles).reduce((str, { content, selectorList }, i) => {
	            let idx = list[i];
	            let selector = selectorList[idx];
	            const nextSelector = selectorList[idx + 1];
	            if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
	                selector = nextSelector;
	                idx += 1;
	                list[i] += 1;
	            }
	            let isMatch = this.matchCurrent(tagName, el, selector);
	            if (isMatch && selector.isGeneralSibling) {
	                let prev = getPreviousElement$1(el);
	                while (prev) {
	                    if (prev.h5tagName && this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
	                        isMatch = true;
	                        break;
	                    }
	                    prev = getPreviousElement$1(prev);
	                    isMatch = false;
	                }
	            }
	            if (isMatch && selector.isAdjacentSibling) {
	                const prev = getPreviousElement$1(el);
	                if (!prev || !prev.h5tagName) {
	                    isMatch = false;
	                }
	                else {
	                    const isSiblingMatch = this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1]);
	                    if (!isSiblingMatch) {
	                        isMatch = false;
	                    }
	                }
	            }
	            if (isMatch) {
	                if (idx === selectorList.length - 1) {
	                    return str + content;
	                }
	                else if (idx < selectorList.length - 1) {
	                    list[i] += 1;
	                }
	            }
	            else {
	                // 直接子代组合器: >
	                if (selector.isChild && idx > 0) {
	                    list[i] -= 1;
	                    if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
	                        list[i] += 1;
	                    }
	                }
	            }
	            return str;
	        }, '');
	        return res;
	    }
	    matchCurrent(tagName, el, selector) {
	        // 标签选择器
	        if (selector.tag && selector.tag !== tagName)
	            return false;
	        // id 选择器
	        if (selector.id && selector.id !== el.id)
	            return false;
	        // class 选择器
	        if (selector.class.length) {
	            const classList = el.className.split(' ');
	            for (let i = 0; i < selector.class.length; i++) {
	                const cls = selector.class[i];
	                if (classList.indexOf(cls) === -1) {
	                    return false;
	                }
	            }
	        }
	        // 属性选择器
	        if (selector.attrs.length) {
	            for (let i = 0; i < selector.attrs.length; i++) {
	                const { all, key, value } = selector.attrs[i];
	                if (all && !el.hasAttribute(key)) {
	                    return false;
	                }
	                else {
	                    const attr = el.getAttribute(key);
	                    if (attr !== unquote$1(value || '')) {
	                        return false;
	                    }
	                }
	            }
	        }
	        return true;
	    }
	}
	function getPreviousElement$1(el) {
	    const parent = el.parentElement;
	    if (!parent)
	        return null;
	    const prev = el.previousSibling;
	    if (!prev)
	        return null;
	    if (prev.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
	        return prev;
	    }
	    else {
	        return getPreviousElement$1(prev);
	    }
	}
	// 根据 css selector 权重排序: 权重大的靠后
	// @WARN 不考虑伪类
	// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
	function sortStyles$1(styles) {
	    return styles.sort((s1, s2) => {
	        const hundreds1 = getHundredsWeight$1(s1.selectorList);
	        const hundreds2 = getHundredsWeight$1(s2.selectorList);
	        if (hundreds1 !== hundreds2)
	            return hundreds1 - hundreds2;
	        const tens1 = getTensWeight$1(s1.selectorList);
	        const tens2 = getTensWeight$1(s2.selectorList);
	        if (tens1 !== tens2)
	            return tens1 - tens2;
	        const ones1 = getOnesWeight$1(s1.selectorList);
	        const ones2 = getOnesWeight$1(s2.selectorList);
	        return ones1 - ones2;
	    });
	}
	function getHundredsWeight$1(selectors) {
	    return selectors.reduce((pre, cur) => pre + (cur.id ? 1 : 0), 0);
	}
	function getTensWeight$1(selectors) {
	    return selectors.reduce((pre, cur) => pre + cur.class.length + cur.attrs.length, 0);
	}
	function getOnesWeight$1(selectors) {
	    return selectors.reduce((pre, cur) => pre + (cur.tag ? 1 : 0), 0);
	}

	function makeMap$1(str, expectsLowerCase) {
	    const map = Object.create(null);
	    const list = str.split(',');
	    for (let i = 0; i < list.length; i++) {
	        map[list[i]] = true;
	    }
	    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
	}
	const specialMiniElements$1 = {
	    img: 'image',
	    iframe: 'web-view'
	};
	const internalCompsList$1 = Object.keys(internalComponents$1)
	    .map(i => i.toLowerCase())
	    .join(',');
	// https://developers.weixin.qq.com/miniprogram/dev/component
	const isMiniElements$1 = makeMap$1(internalCompsList$1, true);
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
	const isInlineElements$1 = makeMap$1('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true);
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
	const isBlockElements$1 = makeMap$1('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

	const closingTagAncestorBreakers$1 = {
	    li: ['ul', 'ol', 'menu'],
	    dt: ['dl'],
	    dd: ['dl'],
	    tbody: ['table'],
	    thead: ['table'],
	    tfoot: ['table'],
	    tr: ['table'],
	    td: ['table']
	};
	function hasTerminalParent$1(tagName, stack) {
	    const tagParents = closingTagAncestorBreakers$1[tagName];
	    if (tagParents) {
	        let currentIndex = stack.length - 1;
	        while (currentIndex >= 0) {
	            const parentTagName = stack[currentIndex].tagName;
	            if (parentTagName === tagName) {
	                break;
	            }
	            if (tagParents && tagParents.includes(parentTagName)) {
	                return true;
	            }
	            currentIndex--;
	        }
	    }
	    return false;
	}
	function getTagName$1(tag) {
	    if (options$1.html.renderHTMLTag) {
	        return tag;
	    }
	    if (specialMiniElements$1[tag]) {
	        return specialMiniElements$1[tag];
	    }
	    else if (isMiniElements$1(tag)) {
	        return tag;
	    }
	    else if (isBlockElements$1(tag)) {
	        return 'view';
	    }
	    else if (isInlineElements$1(tag)) {
	        return 'text';
	    }
	    return 'view';
	}
	function splitEqual$1(str) {
	    const sep = '=';
	    const idx = str.indexOf(sep);
	    if (idx === -1)
	        return [str];
	    const key = str.slice(0, idx).trim();
	    const value = str.slice(idx + sep.length).trim();
	    return [key, value];
	}
	function format$1(children, document, styleOptions, parent) {
	    return children
	        .filter(child => {
	        // 过滤注释和空文本节点
	        if (child.type === 'comment') {
	            return false;
	        }
	        else if (child.type === 'text') {
	            return child.content !== '';
	        }
	        return true;
	    })
	        .map((child) => {
	        // 文本节点
	        if (child.type === 'text') {
	            let text = document.createTextNode(child.content);
	            if (isFunction$1(options$1.html.transformText)) {
	                text = options$1.html.transformText(text, child);
	            }
	            parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
	            return text;
	        }
	        const el = document.createElement(getTagName$1(child.tagName));
	        el.h5tagName = child.tagName;
	        parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
	        if (!options$1.html.renderHTMLTag) {
	            el.className = `h5-${child.tagName}`;
	        }
	        for (let i = 0; i < child.attributes.length; i++) {
	            const attr = child.attributes[i];
	            const [key, value] = splitEqual$1(attr);
	            if (key === 'class') {
	                el.className += ' ' + unquote$1(value);
	            }
	            else if (key[0] === 'o' && key[1] === 'n') {
	                continue;
	            }
	            else {
	                el.setAttribute(key, value == null ? true : unquote$1(value));
	            }
	        }
	        const { styleTagParser, descendantList } = styleOptions;
	        const list = descendantList.slice();
	        const style = styleTagParser.matchStyle(child.tagName, el, list);
	        el.setAttribute('style', style + el.style.cssText);
	        // console.log('style, ', style)
	        format$1(child.children, document, {
	            styleTagParser,
	            descendantList: list
	        }, el);
	        if (isFunction$1(options$1.html.transformElement)) {
	            return options$1.html.transformElement(el, child);
	        }
	        return el;
	    });
	}
	function parser$1(html, document) {
	    const styleTagParser = new StyleTagParser$1();
	    html = styleTagParser.extractStyle(html);
	    const tokens = new Scaner$1(html).scan();
	    const root = { tagName: '', children: [], type: 'element', attributes: [] };
	    const state = { tokens, options: options$1, cursor: 0, stack: [root] };
	    parse$1(state);
	    return format$1(root.children, document, {
	        styleTagParser,
	        descendantList: Array(styleTagParser.styles.length).fill(0)
	    });
	}
	function parse$1(state) {
	    const { tokens, stack } = state;
	    let { cursor } = state;
	    const len = tokens.length;
	    let nodes = stack[stack.length - 1].children;
	    while (cursor < len) {
	        const token = tokens[cursor];
	        if (token.type !== 'tag-start') {
	            // comment or text
	            nodes.push(token);
	            cursor++;
	            continue;
	        }
	        const tagToken = tokens[++cursor];
	        cursor++;
	        const tagName = tagToken.content.toLowerCase();
	        if (token.close) {
	            let index = stack.length;
	            let shouldRewind = false;
	            while (--index > -1) {
	                if (stack[index].tagName === tagName) {
	                    shouldRewind = true;
	                    break;
	                }
	            }
	            while (cursor < len) {
	                const endToken = tokens[cursor];
	                if (endToken.type !== 'tag-end')
	                    break;
	                cursor++;
	            }
	            if (shouldRewind) {
	                stack.splice(index);
	                break;
	            }
	            else {
	                continue;
	            }
	        }
	        const isClosingTag = options$1.html.closingElements.has(tagName);
	        let shouldRewindToAutoClose = isClosingTag;
	        if (shouldRewindToAutoClose) {
	            shouldRewindToAutoClose = !hasTerminalParent$1(tagName, stack);
	        }
	        if (shouldRewindToAutoClose) {
	            let currentIndex = stack.length - 1;
	            while (currentIndex > 0) {
	                if (tagName === stack[currentIndex].tagName) {
	                    stack.splice(currentIndex);
	                    const previousIndex = currentIndex - 1;
	                    nodes = stack[previousIndex].children;
	                    break;
	                }
	                currentIndex = currentIndex - 1;
	            }
	        }
	        const attributes = [];
	        let attrToken;
	        while (cursor < len) {
	            attrToken = tokens[cursor];
	            if (attrToken.type === 'tag-end')
	                break;
	            attributes.push(attrToken.content);
	            cursor++;
	        }
	        cursor++;
	        const children = [];
	        const element = {
	            type: 'element',
	            tagName: tagToken.content,
	            attributes,
	            children
	        };
	        nodes.push(element);
	        const hasChildren = !(attrToken.close || options$1.html.voidElements.has(tagName));
	        if (hasChildren) {
	            stack.push({ tagName, children });
	            const innerState = { tokens, cursor, stack };
	            parse$1(innerState);
	            cursor = innerState.cursor;
	        }
	    }
	    state.cursor = cursor;
	}

	options$1.html = {
	    skipElements: new Set(['style', 'script']),
	    voidElements: new Set([
	        '!doctype', 'area', 'base', 'br', 'col', 'command',
	        'embed', 'hr', 'img', 'input', 'keygen', 'link',
	        'meta', 'param', 'source', 'track', 'wbr'
	    ]),
	    closingElements: new Set([
	        'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
	        'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
	    ]),
	    renderHTMLTag: false
	};
	function setInnerHTML$1(element, html) {
	    while (element.firstChild) {
	        element.removeChild(element.firstChild);
	    }
	    const children = parser$1(html, element.ownerDocument);
	    for (let i = 0; i < children.length; i++) {
	        element.appendChild(children[i]);
	    }
	}

	function getBoundingClientRectImpl$1() {
	    if (!options$1.miniGlobal)
	        return Promise.resolve(null);
	    return new Promise(resolve => {
	        const query = options$1.miniGlobal.createSelectorQuery();
	        query.select(`#${this.uid}`).boundingClientRect(res => {
	            resolve(res);
	        }).exec();
	    });
	}
	function getTemplateContent$1(ctx) {
	    if (ctx.nodeName === 'template') {
	        const document = ctx.ownerDocument;
	        const content = document.createElement(DOCUMENT_FRAGMENT$1);
	        content.childNodes = ctx.childNodes;
	        ctx.childNodes = [content];
	        content.parentNode = ctx;
	        content.childNodes.forEach(nodes => {
	            nodes.parentNode = content;
	        });
	        return content;
	    }
	}

	/**
	 * An implementation of `Element.insertAdjacentHTML()`
	 * to support Vue 3 with a version of or greater than `vue@3.1.2`
	 */
	function insertAdjacentHTML$1(position, html) {
	    var _a, _b;
	    const parsedNodes = parser$1(html, this.ownerDocument);
	    for (let i = 0; i < parsedNodes.length; i++) {
	        const n = parsedNodes[i];
	        switch (position) {
	            case 'beforebegin':
	                (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
	                break;
	            case 'afterbegin':
	                if (this.hasChildNodes()) {
	                    this.insertBefore(n, this.childNodes[0]);
	                }
	                else {
	                    this.appendChild(n);
	                }
	                break;
	            case 'beforeend':
	                this.appendChild(n);
	                break;
	            case 'afterend':
	                (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
	                break;
	        }
	    }
	}
	function cloneNode$1(isDeep = false) {
	    const document = this.ownerDocument;
	    let newNode;
	    if (this.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
	        newNode = document.createElement(this.nodeName);
	    }
	    else if (this.nodeType === 3 /* NodeType.TEXT_NODE */) {
	        newNode = document.createTextNode('');
	    }
	    for (const key in this) {
	        const value = this[key];
	        // eslint-disable-next-line valid-typeof
	        if ([PROPS$1, DATASET$1].includes(key) && typeof value === OBJECT$1) {
	            newNode[key] = Object.assign({}, value);
	        }
	        else if (key === '_value') {
	            newNode[key] = value;
	        }
	        else if (key === STYLE$1) {
	            newNode.style._value = Object.assign({}, value._value);
	            newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
	        }
	    }
	    if (isDeep) {
	        newNode.childNodes = this.childNodes.map(node => node.cloneNode(true));
	    }
	    return newNode;
	}
	function contains$1(node) {
	    let isContains = false;
	    this.childNodes.some(childNode => {
	        const { uid } = childNode;
	        if (uid === node.uid || uid === node.id || childNode.contains(node)) {
	            isContains = true;
	            return true;
	        }
	    });
	    return isContains;
	}

	if (process.env.TARO_PLATFORM !== 'web') {
	    if (ENABLE_INNER_HTML) {
	        TaroNode$1.extend('innerHTML', {
	            set(html) {
	                setInnerHTML$1.call(this, this, html);
	            },
	            get() {
	                return '';
	            }
	        });
	        if (ENABLE_ADJACENT_HTML) {
	            TaroNode$1.extend('insertAdjacentHTML', insertAdjacentHTML$1);
	        }
	    }
	    if (ENABLE_CLONE_NODE) {
	        TaroNode$1.extend('cloneNode', cloneNode$1);
	    }
	    if (ENABLE_CONTAINS) {
	        TaroNode$1.extend('contains', contains$1);
	    }
	    if (ENABLE_SIZE_APIS) {
	        TaroElement$1.extend('getBoundingClientRect', getBoundingClientRectImpl$1);
	    }
	    if (ENABLE_TEMPLATE_CONTENT) {
	        TaroElement$1.extend('content', {
	            get() {
	                return getTemplateContent$1(this);
	            }
	        });
	    }
	}

	// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
	class TaroEvent$1 {
	    constructor(type, opts, event) {
	        this._stop = false;
	        this._end = false;
	        this.defaultPrevented = false;
	        // Mouse Event botton property, it's used in 3rd lib, like react-router. default 0 in general
	        this.button = 0;
	        // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
	        // here use hi-res timestamp
	        this.timeStamp = Date.now();
	        this.type = type.toLowerCase();
	        this.mpEvent = event;
	        this.bubbles = Boolean(opts && opts.bubbles);
	        this.cancelable = Boolean(opts && opts.cancelable);
	    }
	    stopPropagation() {
	        this._stop = true;
	    }
	    stopImmediatePropagation() {
	        this._end = this._stop = true;
	    }
	    preventDefault() {
	        this.defaultPrevented = true;
	    }
	    get target() {
	        var _a, _b, _c, _d, _e;
	        const cacheTarget = this.cacheTarget;
	        if (!cacheTarget) {
	            const target = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target) || null);
	            const currentEle = env$1.document.getElementById(((_b = target.dataset) === null || _b === void 0 ? void 0 : _b.sid) || target.id || null);
	            // Note：优先判断冒泡场景alipay的targetDataset的sid, 不然冒泡场景target属性吐出不对，其余拿取当前绑定id
	            const element = env$1.document.getElementById(((_c = target.targetDataset) === null || _c === void 0 ? void 0 : _c.sid) || ((_d = target.dataset) === null || _d === void 0 ? void 0 : _d.sid) || target.id || null);
	            target.dataset = Object.assign(Object.assign({}, (currentEle !== null ? currentEle.dataset : EMPTY_OBJ$1)), (element !== null ? element.dataset : EMPTY_OBJ$1));
	            for (const key in (_e = this.mpEvent) === null || _e === void 0 ? void 0 : _e.detail) {
	                target[key] = this.mpEvent.detail[key];
	            }
	            this.cacheTarget = target;
	            return target;
	        }
	        else {
	            return cacheTarget;
	        }
	    }
	    get currentTarget() {
	        var _a, _b, _c, _d, _e, _f, _g, _h;
	        const cacheCurrentTarget = this.cacheCurrentTarget;
	        if (!cacheCurrentTarget) {
	            const doc = env$1.document;
	            const currentTarget = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget) || null);
	            const element = doc.getElementById(((_b = currentTarget.dataset) === null || _b === void 0 ? void 0 : _b.sid) || currentTarget.id || null);
	            const targetElement = doc.getElementById(((_e = (_d = (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.dataset) === null || _e === void 0 ? void 0 : _e.sid) || ((_g = (_f = this.mpEvent) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.id) || null);
	            if (element === null || (element && element === targetElement)) {
	                this.cacheCurrentTarget = this.target;
	                return this.target;
	            }
	            currentTarget.dataset = element.dataset;
	            for (const key in (_h = this.mpEvent) === null || _h === void 0 ? void 0 : _h.detail) {
	                currentTarget[key] = this.mpEvent.detail[key];
	            }
	            this.cacheCurrentTarget = currentTarget;
	            return currentTarget;
	        }
	        else {
	            return cacheCurrentTarget;
	        }
	    }
	}
	function createEvent$1(event, node) {
	    if (typeof event === 'string') {
	        // For Vue3 using document.createEvent
	        return new TaroEvent$1(event, { bubbles: true, cancelable: true });
	    }
	    const domEv = new TaroEvent$1(event.type, { bubbles: true, cancelable: true }, event);
	    for (const key in event) {
	        if (key === CURRENT_TARGET$1 || key === TARGET$1 || key === TYPE$1 || key === TIME_STAMP$1) {
	            continue;
	        }
	        else {
	            domEv[key] = event[key];
	        }
	    }
	    if (domEv.type === CONFIRM$1 && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT$1) {
	        // eslint-disable-next-line dot-notation
	        domEv[KEY_CODE$1] = 13;
	    }
	    return domEv;
	}
	const eventsBatch = {};
	function getEventCBResult(event) {
	    const result = event[EVENT_CALLBACK_RESULT$1];
	    if (!isUndefined$1(result)) {
	        delete event[EVENT_CALLBACK_RESULT$1];
	    }
	    return result;
	}
	// 小程序的事件代理回调函数
	function eventHandler(event) {
	    var _a, _b;
	    // Note: ohos 上事件没有设置 type、detail 类型 setter 方法，且部分事件（例如 load 等）缺失 target 导致事件错误
	    event.type === undefined && Object.defineProperty(event, 'type', {
	        value: event._type // ohos only
	    });
	    event.detail === undefined && Object.defineProperty(event, 'detail', {
	        value: event._detail || Object.assign({}, event) // ohos only
	    });
	    event.currentTarget = event.currentTarget || event.target || Object.assign({}, event);
	    hooks$1.call('modifyMpEventImpl', event);
	    const currentTarget = event.currentTarget;
	    const id = ((_a = currentTarget.dataset) === null || _a === void 0 ? void 0 : _a.sid /** sid */) || currentTarget.id /** uid */ || ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.id) || '';
	    const node = env$1.document.getElementById(id);
	    if (node) {
	        const dispatch = () => {
	            const e = createEvent$1(event, node);
	            hooks$1.call('modifyTaroEvent', e, node);
	            hooks$1.call('dispatchTaroEvent', e, node);
	            hooks$1.call('dispatchTaroEventFinish', e, node);
	        };
	        if (hooks$1.isExist('batchedEventUpdates')) {
	            const type = event.type;
	            if (!hooks$1.call('isBubbleEvents', type) ||
	                !isParentBinded(node, type) ||
	                (type === TOUCHMOVE && !!node.props.catchMove)) {
	                // 最上层组件统一 batchUpdate
	                hooks$1.call('batchedEventUpdates', () => {
	                    if (eventsBatch[type]) {
	                        eventsBatch[type].forEach(fn => fn());
	                        delete eventsBatch[type];
	                    }
	                    dispatch();
	                });
	                return getEventCBResult(event);
	            }
	            else {
	                // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
	                (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
	            }
	        }
	        else {
	            dispatch();
	            return getEventCBResult(event);
	        }
	    }
	}

	class FormElement$1 extends TaroElement$1 {
	    get type() {
	        var _a;
	        return (_a = this.props[TYPE$1]) !== null && _a !== void 0 ? _a : '';
	    }
	    set type(val) {
	        this.setAttribute(TYPE$1, val);
	    }
	    get value() {
	        // eslint-disable-next-line dot-notation
	        const val = this.props[VALUE$1];
	        return val == null ? '' : val;
	    }
	    set value(val) {
	        this.setAttribute(VALUE$1, val);
	    }
	    dispatchEvent(event) {
	        if (event.mpEvent) {
	            const val = event.mpEvent.detail.value;
	            if (event.type === CHANGE$1) {
	                this.props.value = val;
	            }
	            else if (event.type === INPUT$1) {
	                // Web 规范中表单组件的 value 应该跟着输入改变
	                // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
	                // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
	                this.value = val;
	            }
	        }
	        return super.dispatchEvent(event);
	    }
	}

	class Performance$1 {
	    constructor() {
	        this.recorder = new Map();
	    }
	    start(id) {
	        if (!options$1.debug) {
	            return;
	        }
	        this.recorder.set(id, Date.now());
	    }
	    stop(id) {
	        if (!options$1.debug) {
	            return;
	        }
	        const now = Date.now();
	        const prev = this.recorder.get(id);
	        this.recorder.delete(id);
	        const time = now - prev;
	        // eslint-disable-next-line no-console
	        console.log(`${id} 时长： ${time}ms`);
	    }
	}
	const perf$1 = new Performance$1();

	function findCustomWrapper$1(root, dataPathArr) {
	    // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
	    const list = dataPathArr.slice(1);
	    let currentData = root;
	    let customWrapper;
	    let splitedPath = '';
	    list.some((item, i) => {
	        const key = item
	            // '[0]' => '0'
	            .replace(/^\[(.+)\]$/, '$1')
	            // 'cn' => 'childNodes'
	            .replace(/\bcn\b/g, 'childNodes');
	        currentData = currentData[key];
	        if (isArray$1(currentData)) {
	            currentData = currentData.filter(el => !isComment$1(el));
	        }
	        if (isUndefined$1(currentData))
	            return true;
	        if (currentData.nodeName === CUSTOM_WRAPPER$1) {
	            const res = customWrapperCache$1.get(currentData.sid);
	            if (res) {
	                customWrapper = res;
	                splitedPath = dataPathArr.slice(i + 2).join('.');
	            }
	        }
	    });
	    if (customWrapper) {
	        return {
	            customWrapper,
	            splitedPath
	        };
	    }
	}
	class TaroRootElement$1 extends TaroElement$1 {
	    constructor() {
	        super();
	        this.updatePayloads = [];
	        this.updateCallbacks = [];
	        this.pendingUpdate = false;
	        this.ctx = null;
	        this.nodeName = ROOT_STR$1;
	        this.tagName = ROOT_STR$1.toUpperCase();
	    }
	    get _path() {
	        return ROOT_STR$1;
	    }
	    get _root() {
	        return this;
	    }
	    enqueueUpdate(payload) {
	        this.updatePayloads.push(payload);
	        if (!this.pendingUpdate && this.ctx) {
	            this.performUpdate();
	        }
	    }
	    performUpdate(initRender = false, prerender) {
	        this.pendingUpdate = true;
	        const ctx = hooks$1.call('proxyToRaw', this.ctx);
	        setTimeout(() => {
	            const setDataMark = `${SET_DATA$1} 开始时间戳 ${Date.now()}`;
	            perf$1.start(setDataMark);
	            const data = Object.create(null);
	            const resetPaths = new Set(initRender
	                ? ['root.cn.[0]', 'root.cn[0]']
	                : []);
	            while (this.updatePayloads.length > 0) {
	                const { path, value } = this.updatePayloads.shift();
	                if (path.endsWith("cn" /* Shortcuts.Childnodes */)) {
	                    resetPaths.add(path);
	                }
	                data[path] = value;
	            }
	            for (const path in data) {
	                resetPaths.forEach(p => {
	                    // 已经重置了数组，就不需要分别再设置了
	                    if (path.includes(p) && path !== p) {
	                        delete data[path];
	                    }
	                });
	                const value = data[path];
	                if (isFunction$1(value)) {
	                    data[path] = value();
	                }
	            }
	            // 预渲染
	            if (isFunction$1(prerender))
	                return prerender(data);
	            // 正常渲染
	            this.pendingUpdate = false;
	            let normalUpdate = {};
	            const customWrapperMap = new Map();
	            if (initRender) {
	                // 初次渲染，使用页面级别的 setData
	                normalUpdate = data;
	            }
	            else {
	                // 更新渲染，区分 CustomWrapper 与页面级别的 setData
	                for (const p in data) {
	                    const dataPathArr = p.split('.');
	                    const found = findCustomWrapper$1(this, dataPathArr);
	                    if (found) {
	                        // 此项数据使用 CustomWrapper 去更新
	                        const { customWrapper, splitedPath } = found;
	                        // 合并同一个 customWrapper 的相关更新到一次 setData 中
	                        customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, (customWrapperMap.get(customWrapper) || {})), { [`i.${splitedPath}`]: data[p] }));
	                    }
	                    else {
	                        // 此项数据使用页面去更新
	                        normalUpdate[p] = data[p];
	                    }
	                }
	            }
	            const customWrapperCount = customWrapperMap.size;
	            const isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
	            const updateArrLen = customWrapperCount + (isNeedNormalUpdate ? 1 : 0);
	            let executeTime = 0;
	            const cb = () => {
	                if (++executeTime === updateArrLen) {
	                    perf$1.stop(setDataMark);
	                    this.flushUpdateCallback();
	                    initRender && perf$1.stop(PAGE_INIT$1);
	                }
	            };
	            // custom-wrapper setData
	            if (customWrapperCount) {
	                customWrapperMap.forEach((data, ctx) => {
	                    if (process.env.NODE_ENV !== 'production' && options$1.debug) {
	                        // eslint-disable-next-line no-console
	                        console.log('custom wrapper setData: ', data);
	                    }
	                    ctx.setData(data, cb);
	                });
	            }
	            // page setData
	            if (isNeedNormalUpdate) {
	                if (process.env.NODE_ENV !== 'production' && options$1.debug) {
	                    // eslint-disable-next-line no-console
	                    console.log('page setData:', normalUpdate);
	                }
	                ctx.setData(normalUpdate, cb);
	            }
	        }, 0);
	    }
	    enqueueUpdateCallback(cb, ctx) {
	        this.updateCallbacks.push(() => {
	            ctx ? cb.call(ctx) : cb();
	        });
	    }
	    flushUpdateCallback() {
	        const updateCallbacks = this.updateCallbacks;
	        if (!updateCallbacks.length)
	            return;
	        const copies = updateCallbacks.slice(0);
	        this.updateCallbacks.length = 0;
	        for (let i = 0; i < copies.length; i++) {
	            copies[i]();
	        }
	    }
	}

	class TaroText$1 extends TaroNode$1 {
	    constructor(value) {
	        super();
	        this.nodeType = 3 /* NodeType.TEXT_NODE */;
	        this.nodeName = '#text';
	        this._value = value;
	    }
	    set textContent(text) {
	        MutationObserver$1$1.record({
	            target: this,
	            type: "characterData" /* MutationRecordType.CHARACTER_DATA */,
	            oldValue: this._value
	        });
	        this._value = text;
	        this.enqueueUpdate({
	            path: `${this._path}.${"v" /* Shortcuts.Text */}`,
	            value: text
	        });
	    }
	    get textContent() {
	        return this._value;
	    }
	    set nodeValue(text) {
	        this.textContent = text;
	    }
	    get nodeValue() {
	        return this._value;
	    }
	    set data(text) {
	        this.textContent = text;
	    }
	    get data() {
	        return this._value;
	    }
	}

	var _dict$1, _a$1;
	const findReg$1 = /[!'()~]|%20|%00/g;
	const plusReg$1 = /\+/g;
	const replaceCharMap$1 = {
	    '!': '%21',
	    "'": '%27',
	    '(': '%28',
	    ')': '%29',
	    '~': '%7E',
	    '%20': '+',
	    '%00': '\x00',
	};
	function replacer$1(match) {
	    return replaceCharMap$1[match];
	}
	function appendTo$1(dict, name, value) {
	    const res = isArray$1(value) ? value.join(',') : value;
	    if (name in dict)
	        dict[name].push(res);
	    else
	        dict[name] = [res];
	}
	function addEach$1(value, key) {
	    appendTo$1(this, key, value);
	}
	function decode$1(str) {
	    return decodeURIComponent(str.replace(plusReg$1, ' '));
	}
	function encode$1(str) {
	    return encodeURIComponent(str).replace(findReg$1, replacer$1);
	}
	const URLSearchParams$1 = process.env.TARO_PLATFORM === 'web' ? env$1.window.URLSearchParams : (_a$1 = class {
	        constructor(query) {
	            _dict$1.set(this, Object.create(null));
	            query !== null && query !== void 0 ? query : (query = '');
	            const dict = __classPrivateFieldGet(this, _dict$1, "f");
	            if (typeof query === 'string') {
	                if (query.charAt(0) === '?') {
	                    query = query.slice(1);
	                }
	                for (let pairs = query.split('&'), i = 0, length = pairs.length; i < length; i++) {
	                    const value = pairs[i];
	                    const index = value.indexOf('=');
	                    // 针对不规范的 url 参数做容错处理，如：word=你%好
	                    try {
	                        if (index > -1) {
	                            appendTo$1(dict, decode$1(value.slice(0, index)), decode$1(value.slice(index + 1)));
	                        }
	                        else if (value.length) {
	                            appendTo$1(dict, decode$1(value), '');
	                        }
	                    }
	                    catch (err) {
	                        if (process.env.NODE_ENV !== 'production') {
	                            console.warn(`[Taro warn] URL 参数 ${value} decode 异常`);
	                        }
	                    }
	                }
	            }
	            else {
	                if (isArray$1(query)) {
	                    for (let i = 0, length = query.length; i < length; i++) {
	                        const value = query[i];
	                        appendTo$1(dict, value[0], value[1]);
	                    }
	                }
	                else if (query.forEach) {
	                    query.forEach(addEach$1, dict);
	                }
	                else {
	                    for (const key in query) {
	                        appendTo$1(dict, key, query[key]);
	                    }
	                }
	            }
	        }
	        append(name, value) {
	            appendTo$1(__classPrivateFieldGet(this, _dict$1, "f"), name, value);
	        }
	        delete(name) {
	            delete __classPrivateFieldGet(this, _dict$1, "f")[name];
	        }
	        get(name) {
	            const dict = __classPrivateFieldGet(this, _dict$1, "f");
	            return name in dict ? dict[name][0] : null;
	        }
	        getAll(name) {
	            const dict = __classPrivateFieldGet(this, _dict$1, "f");
	            return name in dict ? dict[name].slice(0) : [];
	        }
	        has(name) {
	            return name in __classPrivateFieldGet(this, _dict$1, "f");
	        }
	        keys() {
	            return Object.keys(__classPrivateFieldGet(this, _dict$1, "f"));
	        }
	        set(name, value) {
	            __classPrivateFieldGet(this, _dict$1, "f")[name] = ['' + value];
	        }
	        forEach(callback, thisArg) {
	            const dict = __classPrivateFieldGet(this, _dict$1, "f");
	            Object.getOwnPropertyNames(dict).forEach(function (name) {
	                dict[name].forEach(function (value) {
	                    callback.call(thisArg, value, name, this);
	                }, this);
	            }, this);
	        }
	        toJSON() {
	            return {};
	        }
	        toString() {
	            const dict = __classPrivateFieldGet(this, _dict$1, "f");
	            const query = [];
	            for (const key in dict) {
	                const name = encode$1(key);
	                for (let i = 0, value = dict[key]; i < value.length; i++) {
	                    query.push(name + '=' + encode$1(value[i]));
	                }
	            }
	            return query.join('&');
	        }
	    },
	    _dict$1 = new WeakMap(),
	    _a$1);

	var _TaroURL_hash$1, _TaroURL_hostname$1, _TaroURL_pathname$1, _TaroURL_port$1, _TaroURL_protocol$1, _TaroURL_search$1;
	class TaroURL$1 {
	    static createObjectURL() {
	        throw new Error('Oops, not support URL.createObjectURL() in miniprogram.');
	    }
	    static revokeObjectURL() {
	        throw new Error('Oops, not support URL.revokeObjectURL() in miniprogram.');
	    }
	    constructor(url, base) {
	        /* private property */
	        _TaroURL_hash$1.set(this, '');
	        _TaroURL_hostname$1.set(this, '');
	        _TaroURL_pathname$1.set(this, '');
	        _TaroURL_port$1.set(this, '');
	        _TaroURL_protocol$1.set(this, '');
	        _TaroURL_search$1.set(this, void 0);
	        if (!isString$1(url))
	            url = String(url);
	        const parseResult = parseUrlBase$1(url, base);
	        const { hash, hostname, pathname, port, protocol, search } = parseResult;
	        __classPrivateFieldSet(this, _TaroURL_hash$1, hash, "f");
	        __classPrivateFieldSet(this, _TaroURL_hostname$1, hostname, "f");
	        __classPrivateFieldSet(this, _TaroURL_pathname$1, pathname || '/', "f");
	        __classPrivateFieldSet(this, _TaroURL_port$1, port, "f");
	        __classPrivateFieldSet(this, _TaroURL_protocol$1, protocol, "f");
	        __classPrivateFieldSet(this, _TaroURL_search$1, new URLSearchParams$1(search), "f");
	    }
	    /* public property */
	    get protocol() {
	        return __classPrivateFieldGet(this, _TaroURL_protocol$1, "f");
	    }
	    set protocol(val) {
	        isString$1(val) && (__classPrivateFieldSet(this, _TaroURL_protocol$1, val.trim(), "f"));
	    }
	    get host() {
	        return this.hostname + (this.port ? ':' + this.port : '');
	    }
	    set host(val) {
	        if (val && isString$1(val)) {
	            val = val.trim();
	            const { hostname, port } = parseUrl$1(`//${val}`);
	            this.hostname = hostname;
	            this.port = port;
	        }
	    }
	    get hostname() {
	        return __classPrivateFieldGet(this, _TaroURL_hostname$1, "f");
	    }
	    set hostname(val) {
	        val && isString$1(val) && (__classPrivateFieldSet(this, _TaroURL_hostname$1, val.trim(), "f"));
	    }
	    get port() {
	        return __classPrivateFieldGet(this, _TaroURL_port$1, "f");
	    }
	    set port(val) {
	        isString$1(val) && (__classPrivateFieldSet(this, _TaroURL_port$1, val.trim(), "f"));
	    }
	    get pathname() {
	        return __classPrivateFieldGet(this, _TaroURL_pathname$1, "f");
	    }
	    set pathname(val) {
	        if (isString$1(val)) {
	            val = val.trim();
	            const HEAD_REG = /^(\/|\.\/|\.\.\/)/;
	            let temp = val;
	            while (HEAD_REG.test(temp)) {
	                temp = temp.replace(HEAD_REG, '');
	            }
	            if (temp)
	                __classPrivateFieldSet(this, _TaroURL_pathname$1, '/' + temp, "f");
	            else
	                __classPrivateFieldSet(this, _TaroURL_pathname$1, '/', "f");
	        }
	    }
	    get search() {
	        const val = __classPrivateFieldGet(this, _TaroURL_search$1, "f").toString();
	        return (val.length === 0 || val.startsWith('?')) ? val : `?${val}`;
	    }
	    set search(val) {
	        if (isString$1(val)) {
	            val = val.trim();
	            __classPrivateFieldSet(this, _TaroURL_search$1, new URLSearchParams$1(val), "f");
	        }
	    }
	    get hash() {
	        return __classPrivateFieldGet(this, _TaroURL_hash$1, "f");
	    }
	    set hash(val) {
	        if (isString$1(val)) {
	            val = val.trim();
	            if (val)
	                __classPrivateFieldSet(this, _TaroURL_hash$1, val.startsWith('#') ? val : `#${val}`, "f");
	            else
	                __classPrivateFieldSet(this, _TaroURL_hash$1, '', "f");
	        }
	    }
	    get href() {
	        return `${this.protocol}//${this.host}${this.pathname}${this.search}${this.hash}`;
	    }
	    set href(val) {
	        if (val && isString$1(val)) {
	            val = val.trim();
	            const { protocol, hostname, port, hash, search, pathname } = parseUrl$1(val);
	            this.protocol = protocol;
	            this.hostname = hostname;
	            this.pathname = pathname;
	            this.port = port;
	            this.hash = hash;
	            this.search = search;
	        }
	    }
	    get origin() {
	        return `${this.protocol}//${this.host}`;
	    }
	    set origin(val) {
	        if (val && isString$1(val)) {
	            val = val.trim();
	            const { protocol, hostname, port } = parseUrl$1(val);
	            this.protocol = protocol;
	            this.hostname = hostname;
	            this.port = port;
	        }
	    }
	    get searchParams() {
	        return __classPrivateFieldGet(this, _TaroURL_search$1, "f");
	    }
	    // public method
	    toString() {
	        return this.href;
	    }
	    toJSON() {
	        return this.toString();
	    }
	    // convenient for deconstructor
	    _toRaw() {
	        return {
	            protocol: this.protocol,
	            port: this.port,
	            host: this.host,
	            hostname: this.hostname,
	            pathname: this.pathname,
	            hash: this.hash,
	            search: this.search,
	            origin: this.origin,
	            href: this.href,
	        };
	    }
	}
	_TaroURL_hash$1 = new WeakMap(), _TaroURL_hostname$1 = new WeakMap(), _TaroURL_pathname$1 = new WeakMap(), _TaroURL_port$1 = new WeakMap(), _TaroURL_protocol$1 = new WeakMap(), _TaroURL_search$1 = new WeakMap();
	const URL$1 = process.env.TARO_PLATFORM === 'web' ? env$1.window.URL : TaroURL$1;
	function parseUrl$1(url = '') {
	    const result = {
	        href: '',
	        origin: '',
	        protocol: '',
	        hostname: '',
	        host: '',
	        port: '',
	        pathname: '',
	        search: '',
	        hash: ''
	    };
	    if (!url || !isString$1(url))
	        return result;
	    url = url.trim();
	    const PATTERN = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\?([^#]*))?(#(.*))?/;
	    const matches = url.match(PATTERN);
	    if (!matches)
	        return result;
	    // TODO: username & password ?
	    result.protocol = matches[1] || 'https:';
	    result.hostname = matches[6] || 'taro.com';
	    result.port = matches[8] || '';
	    result.pathname = matches[9] || '/';
	    result.search = matches[10] || '';
	    result.hash = matches[12] || '';
	    result.href = url;
	    result.origin = result.protocol + '//' + result.hostname;
	    result.host = result.hostname + (result.port ? `:${result.port}` : '');
	    return result;
	}
	function parseUrlBase$1(url, base) {
	    const VALID_URL = /^(https?:)\/\//i;
	    let fullUrl = '';
	    let parsedBase = null;
	    if (!isUndefined$1(base)) {
	        base = String(base).trim();
	        if (!VALID_URL.test(base))
	            throw new TypeError(`Failed to construct 'URL': Invalid base URL`);
	        parsedBase = parseUrl$1(base);
	    }
	    url = String(url).trim();
	    if (VALID_URL.test(url)) {
	        fullUrl = url;
	    }
	    else if (parsedBase) {
	        if (url) {
	            if (url.startsWith('//')) {
	                fullUrl = parsedBase.protocol + url;
	            }
	            else {
	                fullUrl = parsedBase.origin + (url.startsWith('/') ? url : `/${url}`);
	            }
	        }
	        else {
	            fullUrl = parsedBase.href;
	        }
	    }
	    else {
	        throw new TypeError(`Failed to construct 'URL': Invalid URL`);
	    }
	    return parseUrl$1(fullUrl);
	}

	class AnchorElement$1 extends TaroElement$1 {
	    get href() {
	        var _a;
	        return (_a = this.props["href" /* AnchorElementAttrs.HREF */]) !== null && _a !== void 0 ? _a : '';
	    }
	    set href(val) {
	        this.setAttribute("href" /* AnchorElementAttrs.HREF */, val);
	    }
	    get protocol() {
	        var _a;
	        return (_a = this.props["protocol" /* AnchorElementAttrs.PROTOCOL */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get host() {
	        var _a;
	        return (_a = this.props["host" /* AnchorElementAttrs.HOST */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get search() {
	        var _a;
	        return (_a = this.props["search" /* AnchorElementAttrs.SEARCH */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get hash() {
	        var _a;
	        return (_a = this.props["hash" /* AnchorElementAttrs.HASH */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get hostname() {
	        var _a;
	        return (_a = this.props["hostname" /* AnchorElementAttrs.HOSTNAME */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get port() {
	        var _a;
	        return (_a = this.props["port" /* AnchorElementAttrs.PORT */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get pathname() {
	        var _a;
	        return (_a = this.props["pathname" /* AnchorElementAttrs.PATHNAME */]) !== null && _a !== void 0 ? _a : '';
	    }
	    setAttribute(qualifiedName, value) {
	        if (qualifiedName === "href" /* AnchorElementAttrs.HREF */) {
	            const willSetAttr = parseUrl$1(value);
	            for (const k in willSetAttr) {
	                super.setAttribute(k, willSetAttr[k]);
	            }
	        }
	        else {
	            super.setAttribute(qualifiedName, value);
	        }
	    }
	}

	class TransferElement$1 extends TaroElement$1 {
	    constructor(dataName) {
	        super();
	        this.dataName = dataName;
	        this.isTransferElement = true;
	    }
	    get _path() {
	        return this.dataName;
	    }
	}

	class TaroDocument$1 extends TaroElement$1 {
	    constructor() {
	        super();
	        this.createEvent = createEvent$1;
	        this.nodeType = 9 /* NodeType.DOCUMENT_NODE */;
	        this.nodeName = DOCUMENT_ELEMENT_NAME$1;
	    }
	    createElement(type) {
	        const nodeName = type.toLowerCase();
	        let element;
	        switch (true) {
	            case nodeName === ROOT_STR$1:
	                element = new TaroRootElement$1();
	                return element;
	            case controlledComponent$1.has(nodeName):
	                element = new FormElement$1();
	                break;
	            case nodeName === A$2:
	                element = new AnchorElement$1();
	                break;
	            case nodeName === 'page-meta':
	            case nodeName === 'navigation-bar':
	                element = new TransferElement$1(toCamelCase$1(nodeName));
	                break;
	            default:
	                element = new TaroElement$1();
	                break;
	        }
	        element.nodeName = nodeName;
	        element.tagName = type.toUpperCase();
	        return element;
	    }
	    // an ugly fake createElementNS to deal with @vue/runtime-dom's
	    // support mounting app to svg container since vue@3.0.8
	    createElementNS(_svgNS, type) {
	        return this.createElement(type);
	    }
	    createTextNode(text) {
	        return new TaroText$1(text);
	    }
	    getElementById(id) {
	        const el = eventSource$1.get(id);
	        return isUndefined$1(el) ? null : el;
	    }
	    querySelector(query) {
	        // 为了 Vue3 的乞丐版实现
	        if (/^#/.test(query)) {
	            return this.getElementById(query.slice(1));
	        }
	        return null;
	    }
	    querySelectorAll() {
	        // fake hack
	        return [];
	    }
	    // @TODO: @PERF: 在 hydrate 移除掉空的 node
	    createComment() {
	        const textnode = new TaroText$1('');
	        textnode.nodeName = COMMENT$1;
	        return textnode;
	    }
	    get defaultView() {
	        return env$1.window;
	    }
	}

	function createDocument$1() {
	    /**
	       * <document>
	       *   <html>
	       *     <head></head>
	       *     <body>
	       *       <container>
	       *         <app id="app" />
	       *       </container>
	       *     </body>
	       *   </html>
	       * </document>
	       */
	    const doc = new TaroDocument$1();
	    const documentCreateElement = doc.createElement.bind(doc);
	    const html = documentCreateElement(HTML$1);
	    const head = documentCreateElement(HEAD$1);
	    const body = documentCreateElement(BODY$1);
	    const app = documentCreateElement(APP$1);
	    app.id = APP$1;
	    const container = documentCreateElement(CONTAINER$1); // 多包一层主要为了兼容 vue
	    doc.appendChild(html);
	    html.appendChild(head);
	    html.appendChild(body);
	    body.appendChild(container);
	    container.appendChild(app);
	    doc.documentElement = html;
	    doc.head = head;
	    doc.body = body;
	    return doc;
	}
	const document$1 = process.env.TARO_PLATFORM === 'web' ? env$1.document : (env$1.document = createDocument$1());

	const getComputedStyle$1 = process.env.TARO_PLATFORM === 'web' ? env$1.window.getComputedStyle : function (element) {
	    return element.style;
	};

	const eventCenter$1 = hooks$1.call('getEventCenter', Events$1);

	/**
	 * 一个小型缓存池，用于在切换页面时，存储一些上下文信息
	 */
	class RuntimeCache$1 {
	    constructor(name) {
	        this.cache = new Map();
	        this.name = name;
	    }
	    has(identifier) {
	        return this.cache.has(identifier);
	    }
	    set(identifier, ctx) {
	        if (identifier && ctx) {
	            this.cache.set(identifier, ctx);
	        }
	    }
	    get(identifier) {
	        if (this.has(identifier))
	            return this.cache.get(identifier);
	    }
	    delete(identifier) {
	        this.cache.delete(identifier);
	    }
	}

	var _TaroHistory_instances$1, _TaroHistory_location$1, _TaroHistory_stack$1, _TaroHistory_cur$1, _TaroHistory_window$1, _TaroHistory_reset$1;
	const cache$1$1 = new RuntimeCache$1('history');
	class TaroHistory$1 extends Events$1 {
	    constructor(location, options) {
	        super();
	        _TaroHistory_instances$1.add(this);
	        /* private property */
	        _TaroHistory_location$1.set(this, void 0);
	        _TaroHistory_stack$1.set(this, []);
	        _TaroHistory_cur$1.set(this, 0);
	        _TaroHistory_window$1.set(this, void 0);
	        __classPrivateFieldSet(this, _TaroHistory_window$1, options.window, "f");
	        __classPrivateFieldSet(this, _TaroHistory_location$1, location, "f");
	        __classPrivateFieldGet(this, _TaroHistory_location$1, "f").on('__record_history__', (href) => {
	            var _a;
	            __classPrivateFieldSet(this, _TaroHistory_cur$1, (_a = __classPrivateFieldGet(this, _TaroHistory_cur$1, "f"), _a++, _a), "f");
	            __classPrivateFieldSet(this, _TaroHistory_stack$1, __classPrivateFieldGet(this, _TaroHistory_stack$1, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur$1, "f")), "f");
	            __classPrivateFieldGet(this, _TaroHistory_stack$1, "f").push({
	                state: null,
	                title: '',
	                url: href
	            });
	        }, null);
	        __classPrivateFieldGet(this, _TaroHistory_location$1, "f").on('__reset_history__', (href) => {
	            __classPrivateFieldGet(this, _TaroHistory_instances$1, "m", _TaroHistory_reset$1).call(this, href);
	        }, null);
	        // 切换上下文行为
	        this.on(CONTEXT_ACTIONS$1.INIT, () => {
	            __classPrivateFieldGet(this, _TaroHistory_instances$1, "m", _TaroHistory_reset$1).call(this);
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.RESTORE, (pageId) => {
	            cache$1$1.set(pageId, {
	                location: __classPrivateFieldGet(this, _TaroHistory_location$1, "f"),
	                stack: __classPrivateFieldGet(this, _TaroHistory_stack$1, "f").slice(),
	                cur: __classPrivateFieldGet(this, _TaroHistory_cur$1, "f")
	            });
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.RECOVER, (pageId) => {
	            if (cache$1$1.has(pageId)) {
	                const ctx = cache$1$1.get(pageId);
	                __classPrivateFieldSet(this, _TaroHistory_location$1, ctx.location, "f");
	                __classPrivateFieldSet(this, _TaroHistory_stack$1, ctx.stack, "f");
	                __classPrivateFieldSet(this, _TaroHistory_cur$1, ctx.cur, "f");
	            }
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.DESTORY, (pageId) => {
	            cache$1$1.delete(pageId);
	        }, null);
	        __classPrivateFieldGet(this, _TaroHistory_instances$1, "m", _TaroHistory_reset$1).call(this);
	    }
	    /* public property */
	    get length() {
	        return __classPrivateFieldGet(this, _TaroHistory_stack$1, "f").length;
	    }
	    get state() {
	        return __classPrivateFieldGet(this, _TaroHistory_stack$1, "f")[__classPrivateFieldGet(this, _TaroHistory_cur$1, "f")].state;
	    }
	    /* public method */
	    go(delta) {
	        if (!isNumber$1(delta) || isNaN(delta))
	            return;
	        let targetIdx = __classPrivateFieldGet(this, _TaroHistory_cur$1, "f") + delta;
	        targetIdx = Math.min(Math.max(targetIdx, 0), this.length - 1);
	        __classPrivateFieldSet(this, _TaroHistory_cur$1, targetIdx, "f");
	        __classPrivateFieldGet(this, _TaroHistory_location$1, "f").trigger('__set_href_without_history__', __classPrivateFieldGet(this, _TaroHistory_stack$1, "f")[__classPrivateFieldGet(this, _TaroHistory_cur$1, "f")].url);
	        __classPrivateFieldGet(this, _TaroHistory_window$1, "f").trigger('popstate', __classPrivateFieldGet(this, _TaroHistory_stack$1, "f")[__classPrivateFieldGet(this, _TaroHistory_cur$1, "f")]);
	    }
	    back() {
	        this.go(-1);
	    }
	    forward() {
	        this.go(1);
	    }
	    pushState(state, title, url) {
	        if (!url || !isString$1(url))
	            return;
	        __classPrivateFieldSet(this, _TaroHistory_stack$1, __classPrivateFieldGet(this, _TaroHistory_stack$1, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur$1, "f") + 1), "f");
	        __classPrivateFieldGet(this, _TaroHistory_stack$1, "f").push({
	            state,
	            title,
	            url
	        });
	        __classPrivateFieldSet(this, _TaroHistory_cur$1, this.length - 1, "f");
	        __classPrivateFieldGet(this, _TaroHistory_location$1, "f").trigger('__set_href_without_history__', url);
	    }
	    replaceState(state, title, url) {
	        if (!url || !isString$1(url))
	            return;
	        __classPrivateFieldGet(this, _TaroHistory_stack$1, "f")[__classPrivateFieldGet(this, _TaroHistory_cur$1, "f")] = {
	            state,
	            title,
	            url
	        };
	        __classPrivateFieldGet(this, _TaroHistory_location$1, "f").trigger('__set_href_without_history__', url);
	    }
	    // For debug
	    get cache() {
	        return cache$1$1;
	    }
	}
	_TaroHistory_location$1 = new WeakMap(), _TaroHistory_stack$1 = new WeakMap(), _TaroHistory_cur$1 = new WeakMap(), _TaroHistory_window$1 = new WeakMap(), _TaroHistory_instances$1 = new WeakSet(), _TaroHistory_reset$1 = function _TaroHistory_reset(href = '') {
	    __classPrivateFieldSet(this, _TaroHistory_stack$1, [
	        {
	            state: null,
	            title: '',
	            url: href || __classPrivateFieldGet(this, _TaroHistory_location$1, "f").href
	        }
	    ], "f");
	    __classPrivateFieldSet(this, _TaroHistory_cur$1, 0, "f");
	};
	const History$1 = process.env.TARO_PLATFORM === 'web' ? env$1.window.History : TaroHistory$1;

	const Current$1 = {
	    app: null,
	    router: null,
	    page: null
	};
	const getCurrentInstance$1 = () => Current$1;

	var _TaroLocation_instances$1, _TaroLocation_url$1, _TaroLocation_noCheckUrl$1, _TaroLocation_window$1, _TaroLocation_reset$1, _TaroLocation_getPreValue$1, _TaroLocation_rollBack$1, _TaroLocation_recordHistory$1, _TaroLocation_checkUrlChange$1;
	const INIT_URL$1 = 'https://taro.com';
	const cache$2 = new RuntimeCache$1('location');
	class TaroLocation$1 extends Events$1 {
	    constructor(options) {
	        super();
	        _TaroLocation_instances$1.add(this);
	        /* private property */
	        _TaroLocation_url$1.set(this, new URL$1(INIT_URL$1));
	        _TaroLocation_noCheckUrl$1.set(this, false);
	        _TaroLocation_window$1.set(this, void 0);
	        __classPrivateFieldSet(this, _TaroLocation_window$1, options.window, "f");
	        __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_reset$1).call(this);
	        this.on('__set_href_without_history__', (href) => {
	            __classPrivateFieldSet(this, _TaroLocation_noCheckUrl$1, true, "f");
	            const lastHash = __classPrivateFieldGet(this, _TaroLocation_url$1, "f").hash;
	            __classPrivateFieldGet(this, _TaroLocation_url$1, "f").href = generateFullUrl$1(href);
	            if (lastHash !== __classPrivateFieldGet(this, _TaroLocation_url$1, "f").hash) {
	                __classPrivateFieldGet(this, _TaroLocation_window$1, "f").trigger('hashchange');
	            }
	            __classPrivateFieldSet(this, _TaroLocation_noCheckUrl$1, false, "f");
	        }, null);
	        // 切换上下文行为
	        this.on(CONTEXT_ACTIONS$1.INIT, () => {
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_reset$1).call(this);
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.RESTORE, (pageId) => {
	            cache$2.set(pageId, {
	                lastHref: this.href,
	            });
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.RECOVER, (pageId) => {
	            // 数据恢复时，不需要执行跳转
	            if (cache$2.has(pageId)) {
	                const ctx = cache$2.get(pageId);
	                __classPrivateFieldSet(this, _TaroLocation_noCheckUrl$1, true, "f");
	                __classPrivateFieldGet(this, _TaroLocation_url$1, "f").href = ctx.lastHref;
	                __classPrivateFieldSet(this, _TaroLocation_noCheckUrl$1, false, "f");
	            }
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.DESTORY, (pageId) => {
	            cache$2.delete(pageId);
	        }, null);
	    }
	    /* public property */
	    get protocol() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").protocol;
	    }
	    set protocol(val) {
	        const REG = /^(http|https):$/i;
	        if (!val || !isString$1(val) || !REG.test(val.trim()))
	            return;
	        val = val.trim();
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").protocol = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    get host() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").host;
	    }
	    set host(val) {
	        if (!val || !isString$1(val))
	            return;
	        val = val.trim();
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").host = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    get hostname() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").hostname;
	    }
	    set hostname(val) {
	        if (!val || !isString$1(val))
	            return;
	        val = val.trim();
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").hostname = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    get port() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").port;
	    }
	    set port(val) {
	        const xVal = Number((val = val.trim()));
	        if (!isNumber$1(xVal) || xVal <= 0)
	            return;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").port = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    get pathname() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").pathname;
	    }
	    set pathname(val) {
	        if (!val || !isString$1(val))
	            return;
	        val = val.trim();
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").pathname = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    get search() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").search;
	    }
	    set search(val) {
	        if (!val || !isString$1(val))
	            return;
	        val = val.trim();
	        val = val.startsWith('?') ? val : `?${val}`;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").search = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    get hash() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").hash;
	    }
	    // 小程序的navigateTo存在截断hash字符串的问题
	    set hash(val) {
	        if (!val || !isString$1(val))
	            return;
	        val = val.trim();
	        val = val.startsWith('#') ? val : `#${val}`;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").hash = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    get href() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").href;
	    }
	    set href(val) {
	        const REG = /^(http:|https:)?\/\/.+/;
	        if (!val || !isString$1(val) || !REG.test((val = val.trim())))
	            return;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").href = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    get origin() {
	        return __classPrivateFieldGet(this, _TaroLocation_url$1, "f").origin;
	    }
	    set origin(val) {
	        const REG = /^(http:|https:)?\/\/.+/;
	        if (!val || !isString$1(val) || !REG.test((val = val.trim())))
	            return;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_getPreValue$1).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url$1, "f").origin = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_checkUrlChange$1).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_recordHistory$1).call(this);
	    }
	    /* public method */
	    assign() {
	        warn$1(true, '小程序环境中调用location.assign()无效.');
	    }
	    reload() {
	        warn$1(true, '小程序环境中调用location.reload()无效.');
	    }
	    replace(url) {
	        this.trigger('__set_href_without_history__', url);
	    }
	    toString() {
	        return this.href;
	    }
	    // For debug
	    get cache() {
	        return cache$2;
	    }
	}
	_TaroLocation_url$1 = new WeakMap(), _TaroLocation_noCheckUrl$1 = new WeakMap(), _TaroLocation_window$1 = new WeakMap(), _TaroLocation_instances$1 = new WeakSet(), _TaroLocation_reset$1 = function _TaroLocation_reset() {
	    const Current = getCurrentInstance$1();
	    const router = Current.router;
	    if (router) {
	        const { path, params } = router;
	        const searchArr = Object.keys(params).map((key) => {
	            return `${key}=${params[key]}`;
	        });
	        const searchStr = searchArr.length > 0 ? '?' + searchArr.join('&') : '';
	        const url = `${INIT_URL$1}${path.startsWith('/') ? path : '/' + path}${searchStr}`;
	        __classPrivateFieldSet(this, _TaroLocation_url$1, new URL$1(url), "f");
	        this.trigger('__reset_history__', this.href);
	    }
	}, _TaroLocation_getPreValue$1 = function _TaroLocation_getPreValue() {
	    return __classPrivateFieldGet(this, _TaroLocation_url$1, "f")._toRaw();
	}, _TaroLocation_rollBack$1 = function _TaroLocation_rollBack(href) {
	    __classPrivateFieldGet(this, _TaroLocation_url$1, "f").href = href;
	}, _TaroLocation_recordHistory$1 = function _TaroLocation_recordHistory() {
	    this.trigger('__record_history__', this.href);
	}, _TaroLocation_checkUrlChange$1 = function _TaroLocation_checkUrlChange(preValue) {
	    if (__classPrivateFieldGet(this, _TaroLocation_noCheckUrl$1, "f")) {
	        return false;
	    }
	    const { protocol, hostname, port, pathname, search, hash } = __classPrivateFieldGet(this, _TaroLocation_url$1, "f")._toRaw();
	    // 跨域三要素不允许修改
	    if (protocol !== preValue.protocol || hostname !== preValue.hostname || port !== preValue.port) {
	        __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_rollBack$1).call(this, preValue.href);
	        return false;
	    }
	    // pathname
	    if (pathname !== preValue.pathname) {
	        return true;
	    }
	    // search
	    if (search !== preValue.search) {
	        return true;
	    }
	    // hashchange
	    if (hash !== preValue.hash) {
	        __classPrivateFieldGet(this, _TaroLocation_window$1, "f").trigger('hashchange');
	        return true;
	    }
	    __classPrivateFieldGet(this, _TaroLocation_instances$1, "m", _TaroLocation_rollBack$1).call(this, preValue.href);
	    return false;
	};
	const Location$1 = process.env.TARO_PLATFORM === 'web' ? env$1.window.Location : TaroLocation$1;
	function generateFullUrl$1(val = '') {
	    const origin = INIT_URL$1;
	    if (/^[/?#]/.test(val)) {
	        return origin + val;
	    }
	    return val;
	}

	const machine$1 = 'Macintosh';
	const arch$1 = 'Intel Mac OS X 10_14_5';
	const engine$1 = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
	const msg$1 = '(' + machine$1 + '; ' + arch$1 + ') ' + engine$1;
	const nav$1 = process.env.TARO_PLATFORM === 'web' ? env$1.window.navigator : {
	    appCodeName: 'Mozilla',
	    appName: 'Netscape',
	    appVersion: '5.0 ' + msg$1,
	    cookieEnabled: true,
	    mimeTypes: [],
	    onLine: true,
	    platform: 'MacIntel',
	    plugins: [],
	    product: 'Taro',
	    productSub: '20030107',
	    userAgent: 'Mozilla/5.0 ' + msg$1,
	    vendor: 'Joyent',
	    vendorSub: ''
	};

	// https://github.com/myrne/performance-now
	let now$1;
	(function () {
	    let loadTime;
	    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
	        now$1 = () => performance.now();
	    }
	    else if (Date.now) {
	        loadTime = Date.now();
	        now$1 = () => Date.now() - loadTime;
	    }
	    else {
	        loadTime = new Date().getTime();
	        now$1 = () => new Date().getTime() - loadTime;
	    }
	})();
	let lastTime$1 = 0;
	// https://gist.github.com/paulirish/1579671
	// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
	const _raf$1 = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
	    const _now = now$1();
	    const nextTime = Math.max(lastTime$1 + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
	    return setTimeout(function () { callback(lastTime$1 = nextTime); }, nextTime - _now);
	};
	const _caf$1 = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null
	    ? cancelAnimationFrame
	    : function (seed) {
	        // fix https://github.com/NervJS/taro/issues/7749
	        clearTimeout(seed);
	    };

	class TaroWindow$1 extends Events$1 {
	    constructor() {
	        super();
	        this.navigator = nav$1;
	        this.requestAnimationFrame = _raf$1;
	        this.cancelAnimationFrame = _caf$1;
	        this.getComputedStyle = getComputedStyle$1;
	        const globalProperties = [
	            ...Object.getOwnPropertyNames(global || {}),
	            ...Object.getOwnPropertySymbols(global || {})
	        ];
	        globalProperties.forEach(property => {
	            if (property === 'atob' || property === 'document')
	                return;
	            if (!Object.prototype.hasOwnProperty.call(this, property)) {
	                // 防止小程序环境下，window 上的某些 get 属性在赋值时报错
	                try {
	                    this[property] = global[property];
	                }
	                catch (e) {
	                    if (process.env.NODE_ENV !== 'production') {
	                        console.warn(`[Taro warn] window.${String(property)} 在赋值到 window 时报错`);
	                    }
	                }
	            }
	        });
	        this.Date || (this.Date = Date);
	        // 应用启动时，提供给需要读取历史信息的库使用
	        this.location = new Location$1({ window: this });
	        // @ts-ignore
	        this.history = new History$1(this.location, { window: this });
	        this.initEvent();
	    }
	    initEvent() {
	        const _location = this.location;
	        const _history = this.history;
	        this.on(CONTEXT_ACTIONS$1.INIT, (pageId) => {
	            // 页面onload，为该页面建立新的上下文信息
	            _location.trigger(CONTEXT_ACTIONS$1.INIT, pageId);
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.RECOVER, (pageId) => {
	            // 页面onshow，恢复当前页面的上下文信息
	            _location.trigger(CONTEXT_ACTIONS$1.RECOVER, pageId);
	            _history.trigger(CONTEXT_ACTIONS$1.RECOVER, pageId);
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.RESTORE, (pageId) => {
	            // 页面onhide，缓存当前页面的上下文信息
	            _location.trigger(CONTEXT_ACTIONS$1.RESTORE, pageId);
	            _history.trigger(CONTEXT_ACTIONS$1.RESTORE, pageId);
	        }, null);
	        this.on(CONTEXT_ACTIONS$1.DESTORY, (pageId) => {
	            // 页面onunload，清除当前页面的上下文信息
	            _location.trigger(CONTEXT_ACTIONS$1.DESTORY, pageId);
	            _history.trigger(CONTEXT_ACTIONS$1.DESTORY, pageId);
	        }, null);
	    }
	    get document() {
	        return env$1.document;
	    }
	    addEventListener(event, callback) {
	        if (!isString$1(event))
	            return;
	        this.on(event, callback, null);
	    }
	    removeEventListener(event, callback) {
	        if (!isString$1(event))
	            return;
	        this.off(event, callback, null);
	    }
	    setTimeout(...args) {
	        return setTimeout(...args);
	    }
	    clearTimeout(...args) {
	        return clearTimeout(...args);
	    }
	}
	const window$1$1 = process.env.TARO_PLATFORM === 'web' ? env$1.window : (env$1.window = new TaroWindow$1());
	const location = window$1$1.location;
	const history = window$1$1.history;

	// for Vue3
	class SVGElement extends TaroElement$1 {
	}

	// export const removeLeadingSlash = (str = '') => str.replace(/^\.?\//, '')
	// export const removeTrailingSearch = (str = '') => str.replace(/\?[\s\S]*$/, '')
	const addLeadingSlash = (url = '') => (url.charAt(0) === '/' ? url : '/' + url);
	const hasBasename = (path = '', prefix = '') => new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path) || path === prefix;
	const stripBasename = (path = '', prefix = '') => hasBasename(path, prefix) ? path.substring(prefix.length) : path;
	const stripTrailing = (str = '') => str.replace(/[?#][\s\S]*$/, '');
	const stripSuffix = (path = '', suffix = '') => path.includes(suffix) ? path.substring(0, path.length - suffix.length) : path;
	const getHomePage = (path = '', basename = '', customRoutes = {}, entryPagePath = '') => {
	    var _a;
	    const routePath = addLeadingSlash(stripBasename(path, basename));
	    const alias = ((_a = Object.entries(customRoutes).find(([key]) => key === routePath)) === null || _a === void 0 ? void 0 : _a[1]) || routePath;
	    return entryPagePath || (typeof alias === 'string' ? alias : alias[0]) || basename;
	};
	const getCurrentPage = (routerMode = 'hash', basename = '/') => {
	    const pagePath = routerMode === 'hash'
	        ? location.hash.slice(1).split('?')[0]
	        : location.pathname;
	    return addLeadingSlash(stripBasename(pagePath, basename));
	};

	/* eslint-disable dot-notation */
	const instances = new Map();
	const pageId = incrementId$1();
	function injectPageInstance(inst, id) {
	    hooks$1.call('mergePageInstance', instances.get(id), inst);
	    instances.set(id, inst);
	}
	function getPageInstance(id) {
	    return instances.get(id);
	}
	function removePageInstance(id) {
	    instances.delete(id);
	}
	function safeExecute(path, lifecycle, ...args) {
	    const instance = instances.get(path);
	    if (instance == null) {
	        return;
	    }
	    const func = hooks$1.call('getLifecycle', instance, lifecycle);
	    if (isArray$1(func)) {
	        const res = func.map(fn => fn.apply(instance, args));
	        return res[0];
	    }
	    if (!isFunction$1(func)) {
	        return;
	    }
	    return func.apply(instance, args);
	}
	function stringify(obj) {
	    if (obj == null) {
	        return '';
	    }
	    const path = Object.keys(obj).map((key) => {
	        return key + '=' + obj[key];
	    }).join('&');
	    return path === '' ? path : '?' + path;
	}
	function getPath$1(id, options) {
	    const idx = id.indexOf('?');
	    if (process.env.TARO_PLATFORM === 'web') {
	        return `${idx > -1 ? id.substring(0, idx) : id}${stringify((options === null || options === void 0 ? void 0 : options.stamp) ? { stamp: options.stamp } : {})}`;
	    }
	    else {
	        return `${idx > -1 ? id.substring(0, idx) : id}${stringify(options)}`;
	    }
	}
	function getOnReadyEventKey(path) {
	    return path + '.' + ON_READY;
	}
	function getOnShowEventKey(path) {
	    return path + '.' + ON_SHOW;
	}
	function getOnHideEventKey(path) {
	    return path + '.' + ON_HIDE;
	}
	function createPageConfig(component, pageName, data, pageConfig) {
	    // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
	    const id = pageName !== null && pageName !== void 0 ? pageName : `taro_page_${pageId()}`;
	    const [ONLOAD, ONUNLOAD, ONREADY, ONSHOW, ONHIDE, LIFECYCLES, SIDE_EFFECT_LIFECYCLES,] = hooks$1.call('getMiniLifecycleImpl').page;
	    let pageElement = null;
	    let unmounting = false;
	    let prepareMountList = [];
	    function setCurrentRouter(page) {
	        const router = process.env.TARO_PLATFORM === 'web' ? page.$taroPath : page.route || page.__route__ || page.$taroPath;
	        Current$1.router = {
	            params: page.$taroParams,
	            path: addLeadingSlash(router),
	            $taroPath: page.$taroPath,
	            onReady: getOnReadyEventKey(id),
	            onShow: getOnShowEventKey(id),
	            onHide: getOnHideEventKey(id)
	        };
	        if (!isUndefined$1(page.exitState)) {
	            Current$1.router.exitState = page.exitState;
	        }
	    }
	    let loadResolver;
	    let hasLoaded;
	    const config = {
	        [ONLOAD](options = {}, cb) {
	            hasLoaded = new Promise(resolve => { loadResolver = resolve; });
	            perf$1.start(PAGE_INIT$1);
	            Current$1.page = this;
	            this.config = pageConfig || {};
	            // this.$taroPath 是页面唯一标识
	            const uniqueOptions = Object.assign({}, options, { $taroTimestamp: Date.now() });
	            const $taroPath = this.$taroPath = getPath$1(id, uniqueOptions);
	            if (process.env.TARO_PLATFORM === 'web') {
	                config.path = $taroPath;
	            }
	            // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
	            if (this.$taroParams == null) {
	                this.$taroParams = uniqueOptions;
	            }
	            setCurrentRouter(this);
	            // 初始化当前页面的上下文信息
	            if (process.env.TARO_PLATFORM !== 'web') {
	                window$1$1.trigger(CONTEXT_ACTIONS$1.INIT, $taroPath);
	            }
	            const mount = () => {
	                Current$1.app.mount(component, $taroPath, () => {
	                    pageElement = env$1.document.getElementById($taroPath);
	                    ensure$1(pageElement !== null, '没有找到页面实例。');
	                    safeExecute($taroPath, ON_LOAD, this.$taroParams);
	                    loadResolver();
	                    if (process.env.TARO_PLATFORM !== 'web') {
	                        pageElement.ctx = this;
	                        pageElement.performUpdate(true, cb);
	                    }
	                    else {
	                        isFunction$1(cb) && cb();
	                    }
	                });
	            };
	            if (unmounting) {
	                prepareMountList.push(mount);
	            }
	            else {
	                mount();
	            }
	        },
	        [ONUNLOAD]() {
	            const $taroPath = this.$taroPath;
	            // 销毁当前页面的上下文信息
	            if (process.env.TARO_PLATFORM !== 'web') {
	                window$1$1.trigger(CONTEXT_ACTIONS$1.DESTORY, $taroPath);
	            }
	            // 触发onUnload生命周期
	            safeExecute($taroPath, ONUNLOAD);
	            unmounting = true;
	            Current$1.app.unmount($taroPath, () => {
	                unmounting = false;
	                instances.delete($taroPath);
	                if (pageElement) {
	                    pageElement.ctx = null;
	                    pageElement = null;
	                }
	                if (prepareMountList.length) {
	                    prepareMountList.forEach(fn => fn());
	                    prepareMountList = [];
	                }
	            });
	        },
	        [ONREADY]() {
	            hasLoaded.then(() => {
	                // 触发生命周期
	                safeExecute(this.$taroPath, ON_READY);
	                // 通过事件触发子组件的生命周期
	                _raf$1(() => eventCenter$1.trigger(getOnReadyEventKey(id)));
	                this.onReady.called = true;
	            });
	        },
	        [ONSHOW](options = {}) {
	            hasLoaded.then(() => {
	                // 设置 Current 的 page 和 router
	                Current$1.page = this;
	                setCurrentRouter(this);
	                // 恢复上下文信息
	                if (process.env.TARO_PLATFORM !== 'web') {
	                    window$1$1.trigger(CONTEXT_ACTIONS$1.RECOVER, this.$taroPath);
	                }
	                // 触发生命周期
	                safeExecute(this.$taroPath, ON_SHOW, options);
	                // 通过事件触发子组件的生命周期
	                _raf$1(() => eventCenter$1.trigger(getOnShowEventKey(id)));
	            });
	        },
	        [ONHIDE]() {
	            // 缓存当前页面上下文信息
	            if (process.env.TARO_PLATFORM !== 'web') {
	                window$1$1.trigger(CONTEXT_ACTIONS$1.RESTORE, this.$taroPath);
	            }
	            // 设置 Current 的 page 和 router
	            if (Current$1.page === this) {
	                Current$1.page = null;
	                Current$1.router = null;
	            }
	            // 触发生命周期
	            safeExecute(this.$taroPath, ON_HIDE);
	            // 通过事件触发子组件的生命周期
	            eventCenter$1.trigger(getOnHideEventKey(id));
	        }
	    };
	    if (process.env.TARO_PLATFORM === 'web') {
	        config.getOpenerEventChannel = () => {
	            return EventChannel.pageChannel;
	        };
	    }
	    LIFECYCLES.forEach((lifecycle) => {
	        let isDefer = false;
	        lifecycle = lifecycle.replace(/^defer:/, () => {
	            isDefer = true;
	            return '';
	        });
	        config[lifecycle] = function () {
	            const exec = () => safeExecute(this.$taroPath, lifecycle, ...arguments);
	            if (isDefer) {
	                hasLoaded.then(exec);
	            }
	            else {
	                return exec();
	            }
	        };
	    });
	    // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
	    SIDE_EFFECT_LIFECYCLES.forEach(lifecycle => {
	        var _a;
	        if (component[lifecycle] ||
	            ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a[lifecycle]) ||
	            component[lifecycle.replace(/^on/, 'enable')] ||
	            (pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig[lifecycle.replace(/^on/, 'enable')])) {
	            config[lifecycle] = function (...args) {
	                var _a;
	                const target = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target;
	                if (target === null || target === void 0 ? void 0 : target.id) {
	                    const id = target.id;
	                    const element = env$1.document.getElementById(id);
	                    if (element) {
	                        target.dataset = element.dataset;
	                    }
	                }
	                return safeExecute(this.$taroPath, lifecycle, ...args);
	            };
	        }
	    });
	    config.eh = eventHandler;
	    if (!isUndefined$1(data)) {
	        config.data = data;
	    }
	    hooks$1.call('modifyPageObject', config);
	    return config;
	}
	function createComponentConfig(component, componentName, data) {
	    const id = componentName !== null && componentName !== void 0 ? componentName : `taro_component_${pageId()}`;
	    let componentElement = null;
	    const [ATTACHED, DETACHED] = hooks$1.call('getMiniLifecycleImpl').component;
	    const config = {
	        [ATTACHED]() {
	            var _a;
	            perf$1.start(PAGE_INIT$1);
	            this.pageIdCache = ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId();
	            const path = getPath$1(id, { id: this.pageIdCache });
	            Current$1.app.mount(component, path, () => {
	                componentElement = env$1.document.getElementById(path);
	                ensure$1(componentElement !== null, '没有找到组件实例。');
	                this.$taroInstances = instances.get(path);
	                safeExecute(path, ON_LOAD);
	                if (process.env.TARO_PLATFORM !== 'web') {
	                    componentElement.ctx = this;
	                    componentElement.performUpdate(true);
	                }
	            });
	        },
	        [DETACHED]() {
	            const path = getPath$1(id, { id: this.pageIdCache });
	            Current$1.app.unmount(path, () => {
	                instances.delete(path);
	                if (componentElement) {
	                    componentElement.ctx = null;
	                }
	            });
	        },
	        methods: {
	            eh: eventHandler
	        }
	    };
	    if (!isUndefined$1(data)) {
	        config.data = data;
	    }
	    [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach(key => {
	        var _a;
	        config[key] = (_a = component[key]) !== null && _a !== void 0 ? _a : EMPTY_OBJ$1;
	    });
	    return config;
	}
	function createRecursiveComponentConfig(componentName) {
	    const isCustomWrapper = componentName === CUSTOM_WRAPPER$1;
	    const [ATTACHED, DETACHED] = hooks$1.call('getMiniLifecycleImpl').component;
	    const lifeCycles = isCustomWrapper
	        ? {
	            [ATTACHED]() {
	                var _a, _b;
	                const componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
	                if (isString$1(componentId)) {
	                    customWrapperCache$1.set(componentId, this);
	                    const el = env$1.document.getElementById(componentId);
	                    if (el) {
	                        el.ctx = this;
	                    }
	                }
	            },
	            [DETACHED]() {
	                var _a, _b;
	                const componentId = ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
	                if (isString$1(componentId)) {
	                    customWrapperCache$1.delete(componentId);
	                    const el = env$1.document.getElementById(componentId);
	                    if (el) {
	                        el.ctx = null;
	                    }
	                }
	            }
	        }
	        : EMPTY_OBJ$1;
	    return hooks$1.call('modifyRecursiveComponentConfig', Object.assign({ properties: {
	            i: {
	                type: Object,
	                value: {
	                    ["nn" /* Shortcuts.NodeName */]: getComponentsAlias$3(internalComponents$1)[VIEW$1]._num
	                }
	            },
	            l: {
	                type: String,
	                value: ''
	            }
	        }, options: {
	            addGlobalClass: true,
	            virtualHost: !isCustomWrapper
	        }, methods: {
	            eh: eventHandler
	        } }, lifeCycles), { isCustomWrapper });
	}

	const TIMEOUT$1 = 100;
	const nextTick$1 = (cb, ctx) => {
	    const beginTime = Date.now();
	    const router = Current$1.router;
	    const timerFunc = () => {
	        setTimeout(function () {
	            ctx ? cb.call(ctx) : cb();
	        }, 1);
	    };
	    if (router === null)
	        return timerFunc();
	    const path = router.$taroPath;
	    /**
	     * 三种情况
	     *   1. 调用 nextTick 时，pendingUpdate 已经从 true 变为 false（即已更新完成），那么需要光等 100ms
	     *   2. 调用 nextTick 时，pendingUpdate 为 true，那么刚好可以搭上便车
	     *   3. 调用 nextTick 时，pendingUpdate 还是 false，框架仍未启动更新逻辑，这时最多轮询 100ms，等待 pendingUpdate 变为 true。
	     */
	    function next() {
	        var _a, _b, _c;
	        const pageElement = env$1.document.getElementById(path);
	        if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
	            if (process.env.TARO_PLATFORM === 'web') {
	                // eslint-disable-next-line dot-notation
	                (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(() => {
	                    timerFunc();
	                })) !== null && _c !== void 0 ? _c : timerFunc();
	            }
	            else {
	                pageElement.enqueueUpdateCallback(cb, ctx);
	            }
	        }
	        else if (Date.now() - beginTime > TIMEOUT$1) {
	            timerFunc();
	        }
	        else {
	            setTimeout(() => next(), 20);
	        }
	    }
	    next();
	};

	function handleArrayFindPolyfill$1() {
	    if (!isFunction$1(Array.prototype.find)) {
	        Object.defineProperty(Array.prototype, 'find', {
	            value(predicate) {
	                if (this == null) {
	                    throw new TypeError('"this" is null or not defined');
	                }
	                const o = Object(this);
	                const len = o.length >>> 0;
	                if (!isFunction$1(predicate)) {
	                    throw new TypeError('predicate must be a function');
	                }
	                const thisArg = arguments[1];
	                let k = 0;
	                while (k < len) {
	                    const kValue = o[k];
	                    if (predicate.call(thisArg, kValue, k, o)) {
	                        return kValue;
	                    }
	                    k++;
	                }
	                return undefined;
	            }
	        });
	    }
	}
	function handleArrayIncludesPolyfill$1() {
	    if (!isFunction$1(Array.prototype.includes)) {
	        Object.defineProperty(Array.prototype, 'includes', {
	            value(searchElement, fromIndex) {
	                if (this == null) {
	                    throw new TypeError('"this" is null or not defined');
	                }
	                const o = Object(this);
	                const len = o.length >>> 0;
	                if (len === 0) {
	                    return false;
	                }
	                const n = fromIndex | 0;
	                let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	                while (k < len) {
	                    if (o[k] === searchElement) {
	                        return true;
	                    }
	                    k++;
	                }
	                return false;
	            }
	        });
	    }
	}

	/* eslint-disable eqeqeq */
	function handleIntersectionObserverPolyfill$1() {
	    // Exit early if all IntersectionObserver and IntersectionObserverEntry
	    // features are natively supported.
	    if ('IntersectionObserver' in window &&
	        'IntersectionObserverEntry' in window &&
	        'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
	        if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
	            // Minimal polyfill for Edge 15's lack of `isIntersecting`
	            // See: https://github.com/w3c/IntersectionObserver/issues/211
	            Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
	                get: function () {
	                    return this.intersectionRatio > 0;
	                }
	            });
	        }
	    }
	    else {
	        handleIntersectionObserverObjectPolyfill$1();
	    }
	}
	function handleIntersectionObserverObjectPolyfill$1() {
	    const document = window.document;
	    /**
	     * Creates the global IntersectionObserverEntry constructor.
	     * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
	     * @param {Object} entry A dictionary of instance properties.
	     * @constructor
	     */
	    function IntersectionObserverEntry(entry) {
	        this.time = entry.time;
	        this.target = entry.target;
	        this.rootBounds = entry.rootBounds;
	        this.boundingClientRect = entry.boundingClientRect;
	        this.intersectionRect = entry.intersectionRect || getEmptyRect();
	        this.isIntersecting = !!entry.intersectionRect;
	        // Calculates the intersection ratio.
	        const targetRect = this.boundingClientRect;
	        const targetArea = targetRect.width * targetRect.height;
	        const intersectionRect = this.intersectionRect;
	        const intersectionArea = intersectionRect.width * intersectionRect.height;
	        // Sets intersection ratio.
	        if (targetArea) {
	            // Round the intersection ratio to avoid floating point math issues:
	            // https://github.com/w3c/IntersectionObserver/issues/324
	            this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
	        }
	        else {
	            // If area is zero and is intersecting, sets to 1, otherwise to 0
	            this.intersectionRatio = this.isIntersecting ? 1 : 0;
	        }
	    }
	    /**
	     * Creates the global IntersectionObserver constructor.
	     * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
	     * @param {Function} callback The function to be invoked after intersection
	     *     changes have queued. The function is not invoked if the queue has
	     *     been emptied by calling the `takeRecords` method.
	     * @param {Object=} opt_options Optional configuration options.
	     * @constructor
	     */
	    function IntersectionObserver(callback, options = {}) {
	        if (!isFunction$1(callback)) {
	            throw new Error('callback must be a function');
	        }
	        if (options.root && options.root.nodeType != 1) {
	            throw new Error('root must be an Element');
	        }
	        // Binds and throttles `this._checkForIntersections`.
	        this._checkForIntersections = throttle$1(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
	        // Private properties.
	        this._callback = callback;
	        this._observationTargets = [];
	        this._queuedEntries = [];
	        this._rootMarginValues = this._parseRootMargin(options.rootMargin);
	        // Public properties.
	        this.thresholds = this._initThresholds(options.threshold);
	        this.root = options.root || null;
	        this.rootMargin = this._rootMarginValues.map(function (margin) {
	            return margin.value + margin.unit;
	        }).join(' ');
	    }
	    /**
	     * The minimum interval within which the document will be checked for
	     * intersection changes.
	     */
	    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
	    /**
	     * The frequency in which the polyfill polls for intersection changes.
	     * this can be updated on a per instance basis and must be set prior to
	     * calling `observe` on the first target.
	     */
	    IntersectionObserver.prototype.POLL_INTERVAL = null;
	    /**
	     * Use a mutation observer on the root element
	     * to detect intersection changes.
	     */
	    IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
	    /**
	     * Starts observing a target element for intersection changes based on
	     * the thresholds values.
	     * @param {Element} target The DOM element to observe.
	     */
	    IntersectionObserver.prototype.observe = function (target) {
	        const isTargetAlreadyObserved = this._observationTargets.some(function (item) {
	            return item.element == target;
	        });
	        if (isTargetAlreadyObserved)
	            return;
	        if (!(target && target.nodeType == 1)) {
	            throw new Error('target must be an Element');
	        }
	        this._registerInstance();
	        this._observationTargets.push({ element: target, entry: null });
	        this._monitorIntersections();
	        this._checkForIntersections();
	    };
	    /**
	     * Stops observing a target element for intersection changes.
	     * @param {Element} target The DOM element to observe.
	     */
	    IntersectionObserver.prototype.unobserve = function (target) {
	        this._observationTargets =
	            this._observationTargets.filter(function (item) {
	                return item.element != target;
	            });
	        if (!this._observationTargets.length) {
	            this._unmonitorIntersections();
	            this._unregisterInstance();
	        }
	    };
	    /**
	     * Stops observing all target elements for intersection changes.
	     */
	    IntersectionObserver.prototype.disconnect = function () {
	        this._observationTargets = [];
	        this._unmonitorIntersections();
	        this._unregisterInstance();
	    };
	    /**
	     * Returns any queue entries that have not yet been reported to the
	     * callback and clears the queue. This can be used in conjunction with the
	     * callback to obtain the absolute most up-to-date intersection information.
	     * @return {Array} The currently queued entries.
	     */
	    IntersectionObserver.prototype.takeRecords = function () {
	        const records = this._queuedEntries.slice();
	        this._queuedEntries = [];
	        return records;
	    };
	    /**
	     * Accepts the threshold value from the user configuration object and
	     * returns a sorted array of unique threshold values. If a value is not
	     * between 0 and 1 and error is thrown.
	     * @private
	     * @param {Array|number=} opt_threshold An optional threshold value or
	     *     a list of threshold values, defaulting to [0].
	     * @return {Array} A sorted list of unique and valid threshold values.
	     */
	    IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
	        let threshold = opt_threshold || [0];
	        if (!Array.isArray(threshold))
	            threshold = [threshold];
	        return threshold.sort().filter(function (t, i, a) {
	            if (!isNumber$1(t) || isNaN(t) || t < 0 || t > 1) {
	                throw new Error('threshold must be a number between 0 and 1 inclusively');
	            }
	            return t !== a[i - 1];
	        });
	    };
	    /**
	     * Accepts the rootMargin value from the user configuration object
	     * and returns an array of the four margin values as an object containing
	     * the value and unit properties. If any of the values are not properly
	     * formatted or use a unit other than px or %, and error is thrown.
	     * @private
	     * @param {string=} opt_rootMargin An optional rootMargin value,
	     *     defaulting to '0px'.
	     * @return {Array<Object>} An array of margin objects with the keys
	     *     value and unit.
	     */
	    IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
	        const marginString = opt_rootMargin || '0px';
	        const margins = marginString.split(/\s+/).map(function (margin) {
	            const parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
	            if (!parts) {
	                throw new Error('rootMargin must be specified in pixels or percent');
	            }
	            return { value: parseFloat(parts[1]), unit: parts[2] };
	        });
	        // Handles shorthand.
	        margins[1] = margins[1] || margins[0];
	        margins[2] = margins[2] || margins[0];
	        margins[3] = margins[3] || margins[1];
	        return margins;
	    };
	    /**
	     * Starts polling for intersection changes if the polling is not already
	     * happening, and if the page's visibility state is visible.
	     * @private
	     */
	    IntersectionObserver.prototype._monitorIntersections = function () {
	        if (!this._monitoringIntersections) {
	            this._monitoringIntersections = true;
	            // If a poll interval is set, use polling instead of listening to
	            // resize and scroll events or DOM mutations.
	            if (this.POLL_INTERVAL) {
	                this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
	            }
	            else {
	                addEvent(window, 'resize', this._checkForIntersections, true);
	                addEvent(document, 'scroll', this._checkForIntersections, true);
	                if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
	                    this._domObserver = new MutationObserver(this._checkForIntersections);
	                    this._domObserver.observe(document, {
	                        attributes: true,
	                        childList: true,
	                        characterData: true,
	                        subtree: true
	                    });
	                }
	            }
	        }
	    };
	    /**
	     * Stops polling for intersection changes.
	     * @private
	     */
	    IntersectionObserver.prototype._unmonitorIntersections = function () {
	        if (this._monitoringIntersections) {
	            this._monitoringIntersections = false;
	            clearInterval(this._monitoringInterval);
	            this._monitoringInterval = null;
	            removeEvent(window, 'resize', this._checkForIntersections, true);
	            removeEvent(document, 'scroll', this._checkForIntersections, true);
	            if (this._domObserver) {
	                this._domObserver.disconnect();
	                this._domObserver = null;
	            }
	        }
	    };
	    /**
	     * Scans each observation target for intersection changes and adds them
	     * to the internal entries queue. If new entries are found, it
	     * schedules the callback to be invoked.
	     * @private
	     */
	    IntersectionObserver.prototype._checkForIntersections = function () {
	        const rootIsInDom = this._rootIsInDom();
	        const rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
	        this._observationTargets.forEach(function (item) {
	            const target = item.element;
	            const targetRect = getBoundingClientRect(target);
	            const rootContainsTarget = this._rootContainsTarget(target);
	            const oldEntry = item.entry;
	            const intersectionRect = rootIsInDom && rootContainsTarget &&
	                this._computeTargetAndRootIntersection(target, rootRect);
	            const newEntry = item.entry = new IntersectionObserverEntry({
	                time: now(),
	                target: target,
	                boundingClientRect: targetRect,
	                rootBounds: rootRect,
	                intersectionRect: intersectionRect,
	                intersectionRatio: -1,
	                isIntersecting: false,
	            });
	            if (!oldEntry) {
	                this._queuedEntries.push(newEntry);
	            }
	            else if (rootIsInDom && rootContainsTarget) {
	                // If the new entry intersection ratio has crossed any of the
	                // thresholds, add a new entry.
	                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
	                    this._queuedEntries.push(newEntry);
	                }
	            }
	            else {
	                // If the root is not in the DOM or target is not contained within
	                // root but the previous entry for this target had an intersection,
	                // add a new record indicating removal.
	                if (oldEntry && oldEntry.isIntersecting) {
	                    this._queuedEntries.push(newEntry);
	                }
	            }
	        }, this);
	        if (this._queuedEntries.length) {
	            this._callback(this.takeRecords(), this);
	        }
	    };
	    /**
	     * Accepts a target and root rect computes the intersection between then
	     * following the algorithm in the spec.
	     * TODO(philipwalton): at this time clip-path is not considered.
	     * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
	     * @param {Element} target The target DOM element
	     * @param {Object} rootRect The bounding rect of the root after being
	     *     expanded by the rootMargin value.
	     * @return {?Object} The final intersection rect object or undefined if no
	     *     intersection is found.
	     * @private
	     */
	    IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
	        // If the element isn't displayed, an intersection can't happen.
	        if (window.getComputedStyle(target).display === 'none')
	            return;
	        const targetRect = getBoundingClientRect(target);
	        let intersectionRect = targetRect;
	        let parent = getParentNode(target);
	        let atRoot = false;
	        while (!atRoot) {
	            let parentRect = null;
	            const parentComputedStyle = parent.nodeType == 1 ?
	                window.getComputedStyle(parent) : {};
	            // If the parent isn't displayed, an intersection can't happen.
	            if (parentComputedStyle.display === 'none')
	                return;
	            if (parent == this.root || parent == document) {
	                atRoot = true;
	                parentRect = rootRect;
	            }
	            else {
	                // If the element has a non-visible overflow, and it's not the <body>
	                // or <html> element, update the intersection rect.
	                // Note: <body> and <html> cannot be clipped to a rect that's not also
	                // the document rect, so no need to compute a new intersection.
	                if (parent != document.body &&
	                    parent != document.documentElement &&
	                    parentComputedStyle.overflow != 'visible') {
	                    parentRect = getBoundingClientRect(parent);
	                }
	            }
	            // If either of the above conditionals set a new parentRect,
	            // calculate new intersection data.
	            if (parentRect) {
	                intersectionRect = computeRectIntersection(parentRect, intersectionRect);
	                if (!intersectionRect)
	                    break;
	            }
	            parent = getParentNode(parent);
	        }
	        return intersectionRect;
	    };
	    /**
	   * Returns the root rect after being expanded by the rootMargin value.
	   * @return {Object} The expanded root rect.
	   * @private
	   */
	    IntersectionObserver.prototype._getRootRect = function () {
	        let rootRect;
	        if (this.root) {
	            rootRect = getBoundingClientRect(this.root);
	        }
	        else {
	            // Use <html>/<body> instead of window since scroll bars affect size.
	            const html = document.documentElement;
	            const body = document.body;
	            rootRect = {
	                top: 0,
	                left: 0,
	                right: html.clientWidth || body.clientWidth,
	                width: html.clientWidth || body.clientWidth,
	                bottom: html.clientHeight || body.clientHeight,
	                height: html.clientHeight || body.clientHeight
	            };
	        }
	        return this._expandRectByRootMargin(rootRect);
	    };
	    /**
	     * Accepts a rect and expands it by the rootMargin value.
	     * @param {Object} rect The rect object to expand.
	     * @return {Object} The expanded rect.
	     * @private
	     */
	    IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
	        const margins = this._rootMarginValues.map(function (margin, i) {
	            return margin.unit === 'px' ? margin.value :
	                margin.value * (i % 2 ? rect.width : rect.height) / 100;
	        });
	        const newRect = {
	            top: rect.top - margins[0],
	            right: rect.right + margins[1],
	            bottom: rect.bottom + margins[2],
	            left: rect.left - margins[3]
	        };
	        newRect.width = newRect.right - newRect.left;
	        newRect.height = newRect.bottom - newRect.top;
	        return newRect;
	    };
	    /**
	     * Accepts an old and new entry and returns true if at least one of the
	     * threshold values has been crossed.
	     * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
	     *    particular target element or null if no previous entry exists.
	     * @param {IntersectionObserverEntry} newEntry The current entry for a
	     *    particular target element.
	     * @return {boolean} Returns true if a any threshold has been crossed.
	     * @private
	     */
	    IntersectionObserver.prototype._hasCrossedThreshold =
	        function (oldEntry, newEntry) {
	            // To make comparing easier, an entry that has a ratio of 0
	            // but does not actually intersect is given a value of -1
	            const oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
	            const newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
	            // Ignore unchanged ratios
	            if (oldRatio === newRatio)
	                return;
	            for (let i = 0; i < this.thresholds.length; i++) {
	                const threshold = this.thresholds[i];
	                // Return true if an entry matches a threshold or if the new ratio
	                // and the old ratio are on the opposite sides of a threshold.
	                if (threshold == oldRatio || threshold == newRatio ||
	                    threshold < oldRatio !== threshold < newRatio) {
	                    return true;
	                }
	            }
	        };
	    /**
	     * Returns whether or not the root element is an element and is in the DOM.
	     * @return {boolean} True if the root element is an element and is in the DOM.
	     * @private
	     */
	    IntersectionObserver.prototype._rootIsInDom = function () {
	        return !this.root || containsDeep(document, this.root);
	    };
	    /**
	     * Returns whether or not the target element is a child of root.
	     * @param {Element} target The target element to check.
	     * @return {boolean} True if the target element is a child of root.
	     * @private
	     */
	    IntersectionObserver.prototype._rootContainsTarget = function (target) {
	        return containsDeep(this.root || document, target);
	    };
	    /**
	     * Adds the instance to the global IntersectionObserver registry if it isn't
	     * already present.
	     * @private
	     */
	    IntersectionObserver.prototype._registerInstance = function () {
	    };
	    /**
	   * Removes the instance from the global IntersectionObserver registry.
	   * @private
	   */
	    IntersectionObserver.prototype._unregisterInstance = function () {
	    };
	    /**
	     * Returns the result of the performance.now() method or null in browsers
	     * that don't support the API.
	     * @return {number} The elapsed time since the page was requested.
	     */
	    function now() {
	        return window.performance && performance.now && performance.now();
	    }
	    /**
	     * Adds an event handler to a DOM node ensuring cross-browser compatibility.
	     * @param {Node} node The DOM node to add the event handler to.
	     * @param {string} event The event name.
	     * @param {Function} fn The event handler to add.
	     * @param {boolean} opt_useCapture Optionally adds the even to the capture
	     *     phase. Note: this only works in modern browsers.
	     */
	    function addEvent(node, event, fn, opt_useCapture) {
	        if (isFunction$1(node.addEventListener)) {
	            node.addEventListener(event, fn, opt_useCapture || false);
	        }
	        else if (isFunction$1(node.attachEvent)) {
	            node.attachEvent('on' + event, fn);
	        }
	    }
	    /**
	     * Removes a previously added event handler from a DOM node.
	     * @param {Node} node The DOM node to remove the event handler from.
	     * @param {string} event The event name.
	     * @param {Function} fn The event handler to remove.
	     * @param {boolean} opt_useCapture If the event handler was added with this
	     *     flag set to true, it should be set to true here in order to remove it.
	     */
	    function removeEvent(node, event, fn, opt_useCapture) {
	        if (isFunction$1(node.removeEventListener)) {
	            node.removeEventListener(event, fn, opt_useCapture || false);
	        }
	        else if (isFunction$1(node.detatchEvent)) {
	            node.detatchEvent('on' + event, fn);
	        }
	    }
	    /**
	     * Returns the intersection between two rect objects.
	     * @param {Object} rect1 The first rect.
	     * @param {Object} rect2 The second rect.
	     * @return {?Object} The intersection rect or undefined if no intersection
	     *     is found.
	     */
	    function computeRectIntersection(rect1, rect2) {
	        const top = Math.max(rect1.top, rect2.top);
	        const bottom = Math.min(rect1.bottom, rect2.bottom);
	        const left = Math.max(rect1.left, rect2.left);
	        const right = Math.min(rect1.right, rect2.right);
	        const width = right - left;
	        const height = bottom - top;
	        return (width >= 0 && height >= 0) && {
	            top: top,
	            bottom: bottom,
	            left: left,
	            right: right,
	            width: width,
	            height: height
	        };
	    }
	    /**
	     * Shims the native getBoundingClientRect for compatibility with older IE.
	     * @param {Element} el The element whose bounding rect to get.
	     * @return {Object} The (possibly shimmed) rect of the element.
	     */
	    function getBoundingClientRect(el) {
	        let rect;
	        try {
	            rect = el.getBoundingClientRect();
	        }
	        catch (err) {
	            // Ignore Windows 7 IE11 "Unspecified error"
	            // https://github.com/w3c/IntersectionObserver/pull/205
	        }
	        if (!rect)
	            return getEmptyRect();
	        // Older IE
	        if (!(rect.width && rect.height)) {
	            rect = {
	                top: rect.top,
	                right: rect.right,
	                bottom: rect.bottom,
	                left: rect.left,
	                width: rect.right - rect.left,
	                height: rect.bottom - rect.top
	            };
	        }
	        return rect;
	    }
	    /**
	     * Returns an empty rect object. An empty rect is returned when an element
	     * is not in the DOM.
	     * @return {Object} The empty rect.
	     */
	    function getEmptyRect() {
	        return {
	            top: 0,
	            bottom: 0,
	            left: 0,
	            right: 0,
	            width: 0,
	            height: 0
	        };
	    }
	    /**
	     * Checks to see if a parent element contains a child element (including inside
	     * shadow DOM).
	     * @param {Node} parent The parent element.
	     * @param {Node} child The child element.
	     * @return {boolean} True if the parent node contains the child node.
	     */
	    function containsDeep(parent, child) {
	        let node = child;
	        while (node) {
	            if (node == parent)
	                return true;
	            node = getParentNode(node);
	        }
	        return false;
	    }
	    /**
	     * Gets the parent node of an element or its host element if the parent node
	     * is a shadow root.
	     * @param {Node} node The node whose parent to get.
	     * @return {Node|null} The parent node or null if no parent exists.
	     */
	    function getParentNode(node) {
	        const parent = node.parentNode;
	        if (parent && parent.nodeType == 11 && parent.host) {
	            // If the parent is a shadow root, return the host element.
	            return parent.host;
	        }
	        if (parent && parent.assignedSlot) {
	            // If the parent is distributed in a <slot>, return the parent of a slot.
	            return parent.assignedSlot.parentNode;
	        }
	        return parent;
	    }
	    // Exposes the constructors globally.
	    window.IntersectionObserver = IntersectionObserver;
	    window.IntersectionObserverEntry = IntersectionObserverEntry;
	}

	function handleObjectAssignPolyfill$1() {
	    if (!isFunction$1(Object.assign)) {
	        // Must be writable: true, enumerable: false, configurable: true
	        Object.assign = function (target) {
	            if (target == null) { // TypeError if undefined or null
	                throw new TypeError('Cannot convert undefined or null to object');
	            }
	            const to = Object(target);
	            for (let index = 1; index < arguments.length; index++) {
	                const nextSource = arguments[index];
	                if (nextSource != null) { // Skip over if undefined or null
	                    for (const nextKey in nextSource) {
	                        // Avoid bugs when hasOwnProperty is shadowed
	                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
	                            to[nextKey] = nextSource[nextKey];
	                        }
	                    }
	                }
	            }
	            return to;
	        };
	    }
	}
	function handleObjectEntriesPolyfill$1() {
	    if (!isFunction$1(Object.entries)) {
	        // Must be writable: true, enumerable: false, configurable: true
	        Object.entries = function (obj) {
	            if (obj == null) { // TypeError if undefined or null
	                throw new TypeError('Cannot convert undefined or null to object');
	            }
	            const to = [];
	            if (obj != null) { // Skip over if undefined or null
	                for (const key in obj) {
	                    // Avoid bugs when hasOwnProperty is shadowed
	                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	                        to.push([key, obj[key]]);
	                    }
	                }
	            }
	            return to;
	        };
	    }
	}
	function handleObjectDefinePropertyPolyfill$1() {
	    if (!isFunction$1(Object.defineProperties)) {
	        Object.defineProperties = function (obj, properties) {
	            function convertToDescriptor(desc) {
	                function hasProperty(obj, prop) {
	                    return Object.prototype.hasOwnProperty.call(obj, prop);
	                }
	                if (!isObject$1(desc)) {
	                    throw new TypeError('bad desc');
	                }
	                const d = {};
	                if (hasProperty(desc, 'enumerable'))
	                    d.enumerable = !!desc.enumerable;
	                if (hasProperty(desc, 'configurable')) {
	                    d.configurable = !!desc.configurable;
	                }
	                if (hasProperty(desc, 'value'))
	                    d.value = desc.value;
	                if (hasProperty(desc, 'writable'))
	                    d.writable = !!desc.writable;
	                if (hasProperty(desc, 'get')) {
	                    const g = desc.get;
	                    if (!isFunction$1(g) && !isUndefined$1(g)) {
	                        throw new TypeError('bad get');
	                    }
	                    d.get = g;
	                }
	                if (hasProperty(desc, 'set')) {
	                    const s = desc.set;
	                    if (!isFunction$1(s) && !isUndefined$1(s)) {
	                        throw new TypeError('bad set');
	                    }
	                    d.set = s;
	                }
	                if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
	                    throw new TypeError('identity-confused descriptor');
	                }
	                return d;
	            }
	            if (!isObject$1(obj))
	                throw new TypeError('bad obj');
	            properties = Object(properties);
	            const keys = Object.keys(properties);
	            const descs = [];
	            for (let i = 0; i < keys.length; i++) {
	                descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
	            }
	            for (let i = 0; i < descs.length; i++) {
	                Object.defineProperty(obj, descs[i][0], descs[i][1]);
	            }
	            return obj;
	        };
	    }
	}

	function handlePolyfill$1() {
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Object' || process.env.SUPPORT_TARO_POLYFILL === 'Object.assign') {
	        handleObjectAssignPolyfill$1();
	    }
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Object' || process.env.SUPPORT_TARO_POLYFILL === 'Object.entries') {
	        handleObjectEntriesPolyfill$1();
	    }
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Object' || process.env.SUPPORT_TARO_POLYFILL === 'Object.defineProperty') {
	        handleObjectDefinePropertyPolyfill$1();
	    }
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Array' || process.env.SUPPORT_TARO_POLYFILL === 'Array.find') {
	        handleArrayFindPolyfill$1();
	    }
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Array' || process.env.SUPPORT_TARO_POLYFILL === 'Array.includes') {
	        handleArrayIncludesPolyfill$1();
	    }
	    // Exit early if we're not running in a browser.
	    if (process.env.TARO_PLATFORM === 'web' && isObject$1(window)) {
	        if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'IntersectionObserver') {
	            handleIntersectionObserverPolyfill$1();
	        }
	    }
	}
	if (process.env.SUPPORT_TARO_POLYFILL !== 'disabled' && process.env.TARO_PLATFORM !== 'web') {
	    handlePolyfill$1();
	}

	var runtime_esm = /*#__PURE__*/Object.freeze({
		__proto__: null,
		A: A$2,
		APP: APP$1,
		BEHAVIORS: BEHAVIORS,
		BODY: BODY$1,
		CATCHMOVE: CATCHMOVE$1,
		CATCH_VIEW: CATCH_VIEW$1,
		CHANGE: CHANGE$1,
		CLASS: CLASS$1,
		COMMENT: COMMENT$1,
		COMPILE_MODE: COMPILE_MODE$1,
		CONFIRM: CONFIRM$1,
		CONTAINER: CONTAINER$1,
		get CONTEXT_ACTIONS () { return CONTEXT_ACTIONS$1; },
		CURRENT_TARGET: CURRENT_TARGET$1,
		CUSTOM_WRAPPER: CUSTOM_WRAPPER$1,
		Current: Current$1,
		DATASET: DATASET$1,
		DATE: DATE,
		DOCUMENT_ELEMENT_NAME: DOCUMENT_ELEMENT_NAME$1,
		DOCUMENT_FRAGMENT: DOCUMENT_FRAGMENT$1,
		EVENT_CALLBACK_RESULT: EVENT_CALLBACK_RESULT$1,
		EXTERNAL_CLASSES: EXTERNAL_CLASSES,
		FOCUS: FOCUS$1,
		FormElement: FormElement$1,
		HEAD: HEAD$1,
		HOOKS_APP_ID: HOOKS_APP_ID,
		HTML: HTML$1,
		History: History$1,
		ID: ID$1,
		INPUT: INPUT$1,
		KEY_CODE: KEY_CODE$1,
		Location: Location$1,
		MutationObserver: MutationObserver$1$1,
		OBJECT: OBJECT$1,
		ON_HIDE: ON_HIDE,
		ON_LOAD: ON_LOAD,
		ON_READY: ON_READY,
		ON_SHOW: ON_SHOW,
		OPTIONS: OPTIONS,
		PAGE_INIT: PAGE_INIT$1,
		PROPERTY_THRESHOLD: PROPERTY_THRESHOLD$1,
		PROPS: PROPS$1,
		PURE_VIEW: PURE_VIEW$1,
		ROOT_STR: ROOT_STR$1,
		SET_DATA: SET_DATA$1,
		SET_TIMEOUT: SET_TIMEOUT,
		STATIC_VIEW: STATIC_VIEW$1,
		STYLE: STYLE$1,
		SVGElement: SVGElement,
		Style: Style$1,
		TARGET: TARGET$1,
		TARO_RUNTIME: TARO_RUNTIME,
		TIME_STAMP: TIME_STAMP$1,
		TOUCHMOVE: TOUCHMOVE,
		TYPE: TYPE$1,
		TaroElement: TaroElement$1,
		TaroEvent: TaroEvent$1,
		TaroNode: TaroNode$1,
		TaroRootElement: TaroRootElement$1,
		TaroText: TaroText$1,
		UID: UID$1,
		URL: URL$1,
		URLSearchParams: URLSearchParams$1,
		VALUE: VALUE$1,
		VIEW: VIEW$1,
		addLeadingSlash: addLeadingSlash,
		cancelAnimationFrame: _caf$1,
		createComponentConfig: createComponentConfig,
		createEvent: createEvent$1,
		createPageConfig: createPageConfig,
		createRecursiveComponentConfig: createRecursiveComponentConfig,
		document: document$1,
		env: env$1,
		eventCenter: eventCenter$1,
		eventHandler: eventHandler,
		eventSource: eventSource$1,
		getComputedStyle: getComputedStyle$1,
		getCurrentInstance: getCurrentInstance$1,
		getCurrentPage: getCurrentPage,
		getHomePage: getHomePage,
		getOnHideEventKey: getOnHideEventKey,
		getOnReadyEventKey: getOnReadyEventKey,
		getOnShowEventKey: getOnShowEventKey,
		getPageInstance: getPageInstance,
		getPath: getPath$1,
		handlePolyfill: handlePolyfill$1,
		hasBasename: hasBasename,
		history: history,
		hydrate: hydrate$1,
		incrementId: incrementId$1,
		injectPageInstance: injectPageInstance,
		isHasExtractProp: isHasExtractProp$1,
		location: location,
		navigator: nav$1,
		nextTick: nextTick$1,
		get now () { return now$1; },
		options: options$1,
		parseUrl: parseUrl$1,
		removePageInstance: removePageInstance,
		requestAnimationFrame: _raf$1,
		safeExecute: safeExecute,
		stringify: stringify,
		stripBasename: stripBasename,
		stripSuffix: stripSuffix,
		stripTrailing: stripTrailing,
		window: window$1$1,
		Events: Events$1,
		hooks: hooks$1
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(runtime_esm);

	const DEFAULT_EMPTY_ARRAY = '[]';
	const NO_DEFAULT_VALUE = '';
	const DEFAULT_TRUE = '!0';
	const DEFAULT_FALSE = '!1';
	const touchEvents = {
	    bindTouchStart: NO_DEFAULT_VALUE,
	    bindTouchMove: NO_DEFAULT_VALUE,
	    bindTouchEnd: NO_DEFAULT_VALUE,
	    bindTouchCancel: NO_DEFAULT_VALUE,
	    bindLongTap: NO_DEFAULT_VALUE
	};
	const animation = {
	    animation: NO_DEFAULT_VALUE,
	    bindAnimationStart: NO_DEFAULT_VALUE,
	    bindAnimationIteration: NO_DEFAULT_VALUE,
	    bindAnimationEnd: NO_DEFAULT_VALUE,
	    bindTransitionEnd: NO_DEFAULT_VALUE
	};
	function singleQuote(s) {
	    return `'${s}'`;
	}
	const View = Object.assign(Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': DEFAULT_FALSE, 'hover-start-time': '50', 'hover-stay-time': '400' }, touchEvents), animation);
	const Icon = {
	    type: NO_DEFAULT_VALUE,
	    size: '23',
	    color: NO_DEFAULT_VALUE
	};
	const MapComp = Object.assign({ longitude: NO_DEFAULT_VALUE, latitude: NO_DEFAULT_VALUE, scale: '16', markers: DEFAULT_EMPTY_ARRAY, covers: NO_DEFAULT_VALUE, polyline: DEFAULT_EMPTY_ARRAY, circles: DEFAULT_EMPTY_ARRAY, controls: DEFAULT_EMPTY_ARRAY, 'include-points': DEFAULT_EMPTY_ARRAY, 'show-location': NO_DEFAULT_VALUE, 'layer-style': '1', bindMarkerTap: NO_DEFAULT_VALUE, bindControlTap: NO_DEFAULT_VALUE, bindCalloutTap: NO_DEFAULT_VALUE, bindUpdated: NO_DEFAULT_VALUE }, touchEvents);
	const Progress = {
	    percent: NO_DEFAULT_VALUE,
	    'stroke-width': '6',
	    color: singleQuote('#09BB07'),
	    activeColor: singleQuote('#09BB07'),
	    backgroundColor: singleQuote('#EBEBEB'),
	    active: DEFAULT_FALSE,
	    'active-mode': singleQuote('backwards'),
	    'show-info': DEFAULT_FALSE
	};
	const RichText = {
	    nodes: DEFAULT_EMPTY_ARRAY
	};
	const Text = Object.assign({ selectable: DEFAULT_FALSE, space: NO_DEFAULT_VALUE, decode: DEFAULT_FALSE }, touchEvents);
	const Button = Object.assign({ size: singleQuote('default'), type: NO_DEFAULT_VALUE, plain: DEFAULT_FALSE, disabled: NO_DEFAULT_VALUE, loading: DEFAULT_FALSE, 'form-type': NO_DEFAULT_VALUE, 'open-type': NO_DEFAULT_VALUE, 'hover-class': singleQuote('button-hover'), 'hover-stop-propagation': DEFAULT_FALSE, 'hover-start-time': '20', 'hover-stay-time': '70', name: NO_DEFAULT_VALUE, bindagreeprivacyauthorization: NO_DEFAULT_VALUE }, touchEvents);
	const Checkbox = {
	    value: NO_DEFAULT_VALUE,
	    disabled: NO_DEFAULT_VALUE,
	    checked: DEFAULT_FALSE,
	    color: singleQuote('#09BB07'),
	    name: NO_DEFAULT_VALUE
	};
	const CheckboxGroup = {
	    bindChange: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE
	};
	const Form = {
	    'report-submit': DEFAULT_FALSE,
	    bindSubmit: NO_DEFAULT_VALUE,
	    bindReset: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE
	};
	const Input = {
	    value: NO_DEFAULT_VALUE,
	    type: singleQuote(NO_DEFAULT_VALUE),
	    password: DEFAULT_FALSE,
	    placeholder: NO_DEFAULT_VALUE,
	    'placeholder-style': NO_DEFAULT_VALUE,
	    'placeholder-class': singleQuote('input-placeholder'),
	    disabled: NO_DEFAULT_VALUE,
	    maxlength: '140',
	    'cursor-spacing': '0',
	    focus: DEFAULT_FALSE,
	    'confirm-type': singleQuote('done'),
	    'confirm-hold': DEFAULT_FALSE,
	    cursor: '-1',
	    'selection-start': '-1',
	    'selection-end': '-1',
	    bindInput: NO_DEFAULT_VALUE,
	    bindFocus: NO_DEFAULT_VALUE,
	    bindBlur: NO_DEFAULT_VALUE,
	    bindConfirm: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE
	};
	const Label = Object.assign({ for: NO_DEFAULT_VALUE, name: NO_DEFAULT_VALUE }, touchEvents);
	const Picker = {
	    mode: singleQuote('selector'),
	    disabled: NO_DEFAULT_VALUE,
	    range: NO_DEFAULT_VALUE,
	    'range-key': NO_DEFAULT_VALUE,
	    value: NO_DEFAULT_VALUE,
	    start: NO_DEFAULT_VALUE,
	    end: NO_DEFAULT_VALUE,
	    fields: singleQuote('day'),
	    'custom-item': NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE,
	    bindCancel: NO_DEFAULT_VALUE,
	    bindChange: NO_DEFAULT_VALUE,
	    bindColumnChange: NO_DEFAULT_VALUE
	};
	const PickerView = {
	    value: NO_DEFAULT_VALUE,
	    'indicator-style': NO_DEFAULT_VALUE,
	    'indicator-class': NO_DEFAULT_VALUE,
	    'mask-style': NO_DEFAULT_VALUE,
	    'mask-class': NO_DEFAULT_VALUE,
	    bindChange: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE
	};
	const PickerViewColumn = {
	    name: NO_DEFAULT_VALUE
	};
	const Radio = {
	    value: NO_DEFAULT_VALUE,
	    checked: DEFAULT_FALSE,
	    disabled: NO_DEFAULT_VALUE,
	    color: singleQuote('#09BB07'),
	    name: NO_DEFAULT_VALUE
	};
	const RadioGroup = {
	    bindChange: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE
	};
	const Slider = {
	    min: '0',
	    max: '100',
	    step: '1',
	    disabled: NO_DEFAULT_VALUE,
	    value: '0',
	    activeColor: singleQuote('#1aad19'),
	    backgroundColor: singleQuote('#e9e9e9'),
	    'block-size': '28',
	    'block-color': singleQuote('#ffffff'),
	    'show-value': DEFAULT_FALSE,
	    bindChange: NO_DEFAULT_VALUE,
	    bindChanging: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE
	};
	const Switch = {
	    checked: DEFAULT_FALSE,
	    disabled: NO_DEFAULT_VALUE,
	    type: singleQuote('switch'),
	    color: singleQuote('#04BE02'),
	    bindChange: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE
	};
	const Textarea = {
	    value: NO_DEFAULT_VALUE,
	    placeholder: NO_DEFAULT_VALUE,
	    'placeholder-style': NO_DEFAULT_VALUE,
	    'placeholder-class': singleQuote('textarea-placeholder'),
	    disabled: NO_DEFAULT_VALUE,
	    maxlength: '140',
	    'auto-focus': DEFAULT_FALSE,
	    focus: DEFAULT_FALSE,
	    'auto-height': DEFAULT_FALSE,
	    fixed: DEFAULT_FALSE,
	    'cursor-spacing': '0',
	    cursor: '-1',
	    'selection-start': '-1',
	    'selection-end': '-1',
	    bindFocus: NO_DEFAULT_VALUE,
	    bindBlur: NO_DEFAULT_VALUE,
	    bindLineChange: NO_DEFAULT_VALUE,
	    bindInput: NO_DEFAULT_VALUE,
	    bindConfirm: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE
	};
	const CoverImage = {
	    src: NO_DEFAULT_VALUE,
	    bindLoad: 'eh',
	    bindError: 'eh'
	};
	const CoverView = Object.assign({ 'scroll-top': DEFAULT_FALSE }, touchEvents);
	const MovableArea = {
	    'scale-area': DEFAULT_FALSE
	};
	const MovableView = Object.assign(Object.assign({ direction: 'none', inertia: DEFAULT_FALSE, 'out-of-bounds': DEFAULT_FALSE, x: NO_DEFAULT_VALUE, y: NO_DEFAULT_VALUE, damping: '20', friction: '2', disabled: NO_DEFAULT_VALUE, scale: DEFAULT_FALSE, 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', bindChange: NO_DEFAULT_VALUE, bindScale: NO_DEFAULT_VALUE, bindHTouchMove: NO_DEFAULT_VALUE, bindVTouchMove: NO_DEFAULT_VALUE, width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents), animation);
	const ScrollView = Object.assign(Object.assign({ 'scroll-x': DEFAULT_FALSE, 'scroll-y': DEFAULT_FALSE, 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': NO_DEFAULT_VALUE, 'scroll-left': NO_DEFAULT_VALUE, 'scroll-into-view': NO_DEFAULT_VALUE, 'scroll-with-animation': DEFAULT_FALSE, 'enable-back-to-top': DEFAULT_FALSE, bindScrollToUpper: NO_DEFAULT_VALUE, bindScrollToLower: NO_DEFAULT_VALUE, bindScroll: NO_DEFAULT_VALUE }, touchEvents), animation);
	const Swiper = Object.assign({ 'indicator-dots': DEFAULT_FALSE, 'indicator-color': singleQuote('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote('#000000'), autoplay: DEFAULT_FALSE, current: '0', interval: '5000', duration: '500', circular: DEFAULT_FALSE, vertical: DEFAULT_FALSE, 'previous-margin': singleQuote('0px'), 'next-margin': singleQuote('0px'), 'display-multiple-items': '1', bindChange: NO_DEFAULT_VALUE, bindTransition: NO_DEFAULT_VALUE, bindAnimationFinish: NO_DEFAULT_VALUE }, touchEvents);
	const SwiperItem = {
	    'item-id': NO_DEFAULT_VALUE
	};
	const Navigator = {
	    url: NO_DEFAULT_VALUE,
	    'open-type': singleQuote('navigate'),
	    delta: '1',
	    'hover-class': singleQuote('navigator-hover'),
	    'hover-stop-propagation': DEFAULT_FALSE,
	    'hover-start-time': '50',
	    'hover-stay-time': '600',
	    bindSuccess: NO_DEFAULT_VALUE,
	    bindFail: NO_DEFAULT_VALUE,
	    bindComplete: NO_DEFAULT_VALUE
	};
	const Audio = {
	    id: NO_DEFAULT_VALUE,
	    src: NO_DEFAULT_VALUE,
	    loop: DEFAULT_FALSE,
	    controls: DEFAULT_FALSE,
	    poster: NO_DEFAULT_VALUE,
	    name: NO_DEFAULT_VALUE,
	    author: NO_DEFAULT_VALUE,
	    bindError: NO_DEFAULT_VALUE,
	    bindPlay: NO_DEFAULT_VALUE,
	    bindPause: NO_DEFAULT_VALUE,
	    bindTimeUpdate: NO_DEFAULT_VALUE,
	    bindEnded: NO_DEFAULT_VALUE
	};
	const Camera = {
	    'device-position': singleQuote('back'),
	    flash: singleQuote('auto'),
	    bindStop: NO_DEFAULT_VALUE,
	    bindError: NO_DEFAULT_VALUE
	};
	const Image = Object.assign({ src: NO_DEFAULT_VALUE, mode: singleQuote('scaleToFill'), 'lazy-load': DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE, bindLoad: NO_DEFAULT_VALUE }, touchEvents);
	const LivePlayer = Object.assign({ src: NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, muted: DEFAULT_FALSE, orientation: singleQuote('vertical'), 'object-fit': singleQuote('contain'), 'background-mute': DEFAULT_FALSE, 'min-cache': '1', 'max-cache': '3', bindStateChange: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindNetStatus: NO_DEFAULT_VALUE }, animation);
	const Video = Object.assign({ src: NO_DEFAULT_VALUE, duration: NO_DEFAULT_VALUE, controls: DEFAULT_TRUE, 'danmu-list': NO_DEFAULT_VALUE, 'danmu-btn': NO_DEFAULT_VALUE, 'enable-danmu': NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, loop: DEFAULT_FALSE, muted: DEFAULT_FALSE, 'initial-time': '0', 'page-gesture': DEFAULT_FALSE, direction: NO_DEFAULT_VALUE, 'show-progress': DEFAULT_TRUE, 'show-fullscreen-btn': DEFAULT_TRUE, 'show-play-btn': DEFAULT_TRUE, 'show-center-play-btn': DEFAULT_TRUE, 'enable-progress-gesture': DEFAULT_TRUE, 'object-fit': singleQuote('contain'), poster: NO_DEFAULT_VALUE, 'show-mute-btn': DEFAULT_FALSE, bindPlay: NO_DEFAULT_VALUE, bindPause: NO_DEFAULT_VALUE, bindEnded: NO_DEFAULT_VALUE, bindTimeUpdate: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindWaiting: NO_DEFAULT_VALUE, bindError: NO_DEFAULT_VALUE }, animation);
	const Canvas = Object.assign({ 'canvas-id': NO_DEFAULT_VALUE, 'disable-scroll': DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE }, touchEvents);
	const Ad = {
	    'unit-id': NO_DEFAULT_VALUE,
	    'ad-intervals': NO_DEFAULT_VALUE,
	    bindLoad: NO_DEFAULT_VALUE,
	    bindError: NO_DEFAULT_VALUE,
	    bindClose: NO_DEFAULT_VALUE
	};
	const WebView = {
	    src: NO_DEFAULT_VALUE,
	    bindMessage: NO_DEFAULT_VALUE,
	    bindLoad: NO_DEFAULT_VALUE,
	    bindError: NO_DEFAULT_VALUE
	};
	const Block = {};
	// For Vue，因为 slot 标签被 vue 占用了
	const SlotView = {
	    name: NO_DEFAULT_VALUE
	};
	// For React
	// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
	// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
	// 不给 View 直接加 slot 属性的原因是性能损耗
	const Slot = {
	    name: NO_DEFAULT_VALUE
	};
	const NativeSlot = {
	    name: NO_DEFAULT_VALUE
	};
	const Script = {};
	const internalComponents = {
	    View,
	    Icon,
	    Progress,
	    RichText,
	    Text,
	    Button,
	    Checkbox,
	    CheckboxGroup,
	    Form,
	    Input,
	    Label,
	    Picker,
	    PickerView,
	    PickerViewColumn,
	    Radio,
	    RadioGroup,
	    Slider,
	    Switch,
	    CoverImage,
	    Textarea,
	    CoverView,
	    MovableArea,
	    MovableView,
	    ScrollView,
	    Swiper,
	    SwiperItem,
	    Navigator,
	    Audio,
	    Camera,
	    Image,
	    LivePlayer,
	    Video,
	    Canvas,
	    Ad,
	    WebView,
	    Block,
	    Map: MapComp,
	    Slot,
	    SlotView,
	    NativeSlot,
	    Script,
	};
	const controlledComponent = new Set([
	    'input',
	    'checkbox',
	    'picker',
	    'picker-view',
	    'radio',
	    'slider',
	    'switch',
	    'textarea'
	]);

	var PLATFORM_TYPE;
	(function (PLATFORM_TYPE) {
	    PLATFORM_TYPE["MINI"] = "mini";
	    PLATFORM_TYPE["WEB"] = "web";
	    PLATFORM_TYPE["RN"] = "rn";
	    PLATFORM_TYPE["HARMONY"] = "harmony";
	    PLATFORM_TYPE["QUICK"] = "quickapp";
	})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
	({
	    h5: {
	        type: PLATFORM_TYPE.WEB
	    },
	    harmony: {
	        type: PLATFORM_TYPE.HARMONY
	    },
	    mini: {
	        type: PLATFORM_TYPE.MINI
	    },
	    rn: {
	        type: PLATFORM_TYPE.RN
	    },
	    quickapp: {
	        type: PLATFORM_TYPE.QUICK
	    },
	});

	class Events {
	    constructor(opts) {
	        var _a;
	        this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
	    }
	    on(eventName, callback, context) {
	        let event, tail, _eventName;
	        if (!callback) {
	            return this;
	        }
	        if (typeof eventName === 'symbol') {
	            _eventName = [eventName];
	        }
	        else {
	            _eventName = eventName.split(Events.eventSplitter);
	        }
	        this.callbacks || (this.callbacks = {});
	        const calls = this.callbacks;
	        while ((event = _eventName.shift())) {
	            const list = calls[event];
	            const node = list ? list.tail : {};
	            node.next = tail = {};
	            node.context = context;
	            node.callback = callback;
	            calls[event] = {
	                tail,
	                next: list ? list.next : node
	            };
	        }
	        return this;
	    }
	    once(events, callback, context) {
	        const wrapper = (...args) => {
	            callback.apply(this, args);
	            this.off(events, wrapper, context);
	        };
	        this.on(events, wrapper, context);
	        return this;
	    }
	    off(events, callback, context) {
	        let event, calls, _events;
	        if (!(calls = this.callbacks)) {
	            return this;
	        }
	        if (!(events || callback || context)) {
	            delete this.callbacks;
	            return this;
	        }
	        if (typeof events === 'symbol') {
	            _events = [events];
	        }
	        else {
	            _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
	        }
	        while ((event = _events.shift())) {
	            let node = calls[event];
	            delete calls[event];
	            if (!node || !(callback || context)) {
	                continue;
	            }
	            const tail = node.tail;
	            while ((node = node.next) !== tail) {
	                const cb = node.callback;
	                const ctx = node.context;
	                if ((callback && cb !== callback) || (context && ctx !== context)) {
	                    this.on(event, cb, ctx);
	                }
	            }
	        }
	        return this;
	    }
	    trigger(events, ...args) {
	        let event, node, calls, _events;
	        if (!(calls = this.callbacks)) {
	            return this;
	        }
	        if (typeof events === 'symbol') {
	            _events = [events];
	        }
	        else {
	            _events = events.split(Events.eventSplitter);
	        }
	        while ((event = _events.shift())) {
	            if ((node = calls[event])) {
	                const tail = node.tail;
	                while ((node = node.next) !== tail) {
	                    node.callback.apply(node.context || this, args);
	                }
	            }
	        }
	        return this;
	    }
	}
	Events.eventSplitter = ','; // Note: Harmony ACE API 8 开发板不支持使用正则 split 字符串 /\s+/

	class PageEvts extends Events {
	    constructor() {
	        super(...arguments);
	        this.exeList = [];
	    }
	    on(eventName, callback) {
	        super.on(eventName, callback, this);
	        this.exeList = this.exeList.reduce((prev, item) => {
	            if (item.eventName === eventName) {
	                super.trigger(item.eventName, item.data);
	            }
	            else {
	                prev.push(item);
	            }
	            return prev;
	        }, []);
	        return this;
	    }
	    emit(events, data) {
	        // eslint-disable-next-line
	        routeChannel.trigger(events, data);
	    }
	}
	const pageChannel = new PageEvts();
	class RouteEvts extends Events {
	    emit(events, data) {
	        pageChannel.off(events);
	        pageChannel.exeList.push({
	            eventName: events,
	            data
	        });
	    }
	    addEvents(events) {
	        if (!events || typeof events !== 'object')
	            return;
	        Object.keys(events).forEach(key => {
	            this.off(key);
	            this.on(key, events[key], this);
	        });
	    }
	}
	const routeChannel = new RouteEvts();

	function isString(o) {
	    return typeof o === 'string';
	}
	function isUndefined(o) {
	    return typeof o === 'undefined';
	}
	function isNull(o) {
	    return o === null;
	}
	function isObject(o) {
	    return o !== null && typeof o === 'object';
	}
	function isFunction(o) {
	    return typeof o === 'function';
	}
	function isNumber(o) {
	    return typeof o === 'number';
	}
	const isArray = Array.isArray;

	var HOOK_TYPE;
	(function (HOOK_TYPE) {
	    HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
	    HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
	    HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
	})(HOOK_TYPE || (HOOK_TYPE = {}));
	const defaultMiniLifecycle = {
	    app: [
	        'onLaunch',
	        'onShow',
	        'onHide'
	    ],
	    page: [
	        'onLoad',
	        'onUnload',
	        'onReady',
	        'onShow',
	        'onHide',
	        [
	            'onPullDownRefresh',
	            'onReachBottom',
	            'onPageScroll',
	            'onResize',
	            'defer:onTabItemTap',
	            'onTitleClick',
	            'onOptionMenuClick',
	            'onPopMenuClick',
	            'onPullIntercept',
	            'onAddToFavorites'
	        ],
	        [
	            'onShareAppMessage',
	            'onShareTimeline'
	        ]
	    ],
	    component: [
	        'attached',
	        'detached'
	    ]
	};
	function TaroHook(type, initial) {
	    return {
	        type,
	        initial: initial || null
	    };
	}
	class TaroHooks extends Events {
	    constructor(hooks, opts) {
	        super(opts);
	        this.hooks = hooks;
	        for (const hookName in hooks) {
	            const { initial } = hooks[hookName];
	            if (isFunction(initial)) {
	                this.on(hookName, initial);
	            }
	        }
	    }
	    tapOneOrMany(hookName, callback) {
	        const list = isFunction(callback) ? [callback] : callback;
	        list.forEach(cb => this.on(hookName, cb));
	    }
	    tap(hookName, callback) {
	        const hooks = this.hooks;
	        const { type, initial } = hooks[hookName];
	        if (type === HOOK_TYPE.SINGLE) {
	            this.off(hookName);
	            this.on(hookName, isFunction(callback) ? callback : callback[callback.length - 1]);
	        }
	        else {
	            initial && this.off(hookName, initial);
	            this.tapOneOrMany(hookName, callback);
	        }
	    }
	    call(hookName, ...rest) {
	        var _a;
	        const hook = this.hooks[hookName];
	        if (!hook)
	            return;
	        const { type } = hook;
	        const calls = this.callbacks;
	        if (!calls)
	            return;
	        const list = calls[hookName];
	        if (list) {
	            const tail = list.tail;
	            let node = list.next;
	            let args = rest;
	            let res;
	            while (node !== tail) {
	                res = (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
	                if (type === HOOK_TYPE.WATERFALL) {
	                    const params = [res];
	                    args = params;
	                }
	                node = node.next;
	            }
	            return res;
	        }
	    }
	    isExist(hookName) {
	        var _a;
	        return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
	    }
	}
	const hooks = new TaroHooks({
	    getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, defaultConfig => defaultConfig),
	    getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function () {
	        return this.call('getMiniLifecycle', defaultMiniLifecycle);
	    }),
	    getLifecycle: TaroHook(HOOK_TYPE.SINGLE, (instance, lifecycle) => instance[lifecycle]),
	    modifyRecursiveComponentConfig: TaroHook(HOOK_TYPE.SINGLE, (defaultConfig) => defaultConfig),
	    getPathIndex: TaroHook(HOOK_TYPE.SINGLE, indexOfNode => `[${indexOfNode}]`),
	    getEventCenter: TaroHook(HOOK_TYPE.SINGLE, Events => new Events()),
	    isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, eventName => {
	        /**
	         * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
	         * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
	         */
	        const BUBBLE_EVENTS = new Set([
	            'touchstart',
	            'touchmove',
	            'touchcancel',
	            'touchend',
	            'touchforcechange',
	            'tap',
	            'longpress',
	            'longtap',
	            'transitionend',
	            'animationstart',
	            'animationiteration',
	            'animationend'
	        ]);
	        return BUBBLE_EVENTS.has(eventName);
	    }),
	    getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, () => ['view', 'text', 'image']),
	    onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
	    batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
	    mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
	    modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
	    createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
	    getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
	    modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
	    transferHydrateData: TaroHook(HOOK_TYPE.SINGLE),
	    modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
	    modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
	    onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
	    proxyToRaw: TaroHook(HOOK_TYPE.SINGLE, function (proxyObj) {
	        return proxyObj;
	    }),
	    modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
	    modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function (e) {
	        try {
	            // 有些小程序的事件对象的某些属性只读
	            this.call('modifyMpEvent', e);
	        }
	        catch (error) {
	            console.warn('[Taro modifyMpEvent hook Error]: ' + (error === null || error === void 0 ? void 0 : error.message));
	        }
	    }),
	    injectNewStyleProperties: TaroHook(HOOK_TYPE.SINGLE),
	    modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
	    dispatchTaroEvent: TaroHook(HOOK_TYPE.SINGLE, (e, node) => {
	        node.dispatchEvent(e);
	    }),
	    dispatchTaroEventFinish: TaroHook(HOOK_TYPE.MULTI),
	    modifyTaroEventReturn: TaroHook(HOOK_TYPE.SINGLE, () => undefined),
	    modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
	    initNativeApi: TaroHook(HOOK_TYPE.MULTI),
	    patchElement: TaroHook(HOOK_TYPE.MULTI),
	    modifyAddEventListener: TaroHook(HOOK_TYPE.SINGLE),
	    modifyRemoveEventListener: TaroHook(HOOK_TYPE.SINGLE),
	});

	const EMPTY_OBJ = {};
	const noop = (..._) => { };
	function toDashed(s) {
	    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
	}
	function toCamelCase(s) {
	    let camel = '';
	    let nextCap = false;
	    for (let i = 0; i < s.length; i++) {
	        if (s[i] !== '-') {
	            camel += nextCap ? s[i].toUpperCase() : s[i];
	            nextCap = false;
	        }
	        else {
	            nextCap = true;
	        }
	    }
	    return camel;
	}
	/**
	 * ensure takes a condition and throw a error if the condition fails,
	 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
	 * @param condition condition.
	 * @param msg error message.
	 */
	function ensure(condition, msg) {
	    if (!condition) {
	        if (process.env.NODE_ENV !== 'production') {
	            const reportIssue = '\n如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
	            throw new Error(msg + reportIssue);
	        }
	        else {
	            throw new Error(msg);
	        }
	    }
	}
	function warn(condition, msg) {
	    if (process.env.NODE_ENV !== 'production') {
	        if (condition) {
	            console.warn(`[taro warn] ${msg}`);
	        }
	    }
	}
	(new Date()).getTime().toString();
	function getComponentsAlias$1(origin) {
	    const mapping = {};
	    const viewAttrs = origin.View;
	    const extraList = {
	        '#text': {},
	        StaticView: viewAttrs,
	        StaticImage: origin.Image,
	        StaticText: origin.Text,
	        PureView: viewAttrs,
	        CatchView: viewAttrs
	    };
	    origin = Object.assign(Object.assign({}, origin), extraList);
	    Object.keys(origin)
	        .sort((a, b) => {
	        const reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
	        const isACommonly = reg.test(a);
	        const isBCommonly = reg.test(b);
	        if (isACommonly && isBCommonly) {
	            return a > b ? 1 : -1;
	        }
	        else if (isACommonly) {
	            return -1;
	        }
	        else if (isBCommonly) {
	            return 1;
	        }
	        else {
	            return a >= b ? 1 : -1;
	        }
	    })
	        .forEach((key, num) => {
	        const obj = {
	            _num: String(num)
	        };
	        Object.keys(origin[key])
	            .filter(attr => !(/^bind/.test(attr)) && !['focus', 'blur'].includes(attr))
	            .sort()
	            .forEach((attr, index) => {
	            obj[toCamelCase(attr)] = 'p' + index;
	        });
	        mapping[toDashed(key)] = obj;
	    });
	    return mapping;
	}

	// 字符串简写
	var Shortcuts;
	(function (Shortcuts) {
	    Shortcuts["Container"] = "container";
	    Shortcuts["Childnodes"] = "cn";
	    Shortcuts["Text"] = "v";
	    Shortcuts["NodeType"] = "nt";
	    Shortcuts["NodeName"] = "nn";
	    // Attrtibutes
	    Shortcuts["Style"] = "st";
	    Shortcuts["Class"] = "cl";
	    Shortcuts["Src"] = "src";
	})(Shortcuts || (Shortcuts = {}));

	const PROPERTY_THRESHOLD = 2046;
	const SET_DATA = '小程序 setData';
	const PAGE_INIT = '页面初始化';
	const ROOT_STR = 'root';
	const HTML = 'html';
	const HEAD = 'head';
	const BODY = 'body';
	const APP = 'app';
	const CONTAINER = 'container';
	const DOCUMENT_ELEMENT_NAME = '#document';
	const DOCUMENT_FRAGMENT = 'document-fragment';
	const ID = 'id';
	const UID = 'uid';
	const CLASS = 'class';
	const STYLE = 'style';
	const FOCUS = 'focus';
	const VIEW = 'view';
	const STATIC_VIEW = 'static-view';
	const PURE_VIEW = 'pure-view';
	const PROPS = 'props';
	const DATASET = 'dataset';
	const OBJECT = 'object';
	const VALUE = 'value';
	const INPUT = 'input';
	const CHANGE = 'change';
	const CUSTOM_WRAPPER = 'custom-wrapper';
	const TARGET = 'target';
	const CURRENT_TARGET = 'currentTarget';
	const TYPE = 'type';
	const CONFIRM = 'confirm';
	const TIME_STAMP = 'timeStamp';
	const KEY_CODE = 'keyCode';
	const COMPILE_MODE = 'compileMode';
	const CATCHMOVE = 'catchMove';
	const CATCH_VIEW = 'catch-view';
	const COMMENT = 'comment';
	const EVENT_CALLBACK_RESULT = 'e_result';
	const A$1 = 'a';
	/**
	 * 页面上下文切换时的行为
	 */
	var CONTEXT_ACTIONS;
	(function (CONTEXT_ACTIONS) {
	    CONTEXT_ACTIONS["INIT"] = "0";
	    CONTEXT_ACTIONS["RESTORE"] = "1";
	    CONTEXT_ACTIONS["RECOVER"] = "2";
	    CONTEXT_ACTIONS["DESTORY"] = "3";
	})(CONTEXT_ACTIONS || (CONTEXT_ACTIONS = {}));

	const observers = [];
	/**
	 * The MutationObserver provides the ability
	 * to watch for changes being made to the DOM tree.
	 * It will invoke a specified callback function
	 * when DOM changes occur.
	 * @see https://dom.spec.whatwg.org/#mutationobserver
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
	 */
	class MutationObserverImpl {
	    constructor(callback) {
	        this.records = [];
	        this.callback = callback;
	    }
	    /**
	     * Configures the MutationObserver
	     * to begin receiving notifications
	     * through its callback function
	     * when DOM changes matching the given options occur.
	     *
	     * Options matching is to be implemented.
	     */
	    observe(target, options) {
	        this.disconnect();
	        this.target = target;
	        this.options = options || {};
	        observers.push(this);
	    }
	    /**
	     * Stop the MutationObserver instance
	     * from receiving further notifications
	     * until and unless observe() is called again.
	     */
	    disconnect() {
	        this.target = null;
	        const index = observers.indexOf(this);
	        if (index >= 0) {
	            observers.splice(index, 1);
	        }
	    }
	    /**
	     * Removes all pending notifications
	     * from the MutationObserver's notification queue
	     * and returns them in a new Array of MutationRecord objects.
	     */
	    takeRecords() {
	        return this.records.splice(0, this.records.length);
	    }
	}
	/** Match two TaroNodes by sid. */
	const sidMatches = (observerTarget, target) => {
	    return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
	};
	const isConcerned = (record, options) => {
	    const { characterData, characterDataOldValue, attributes, attributeOldValue, childList } = options;
	    switch (record.type) {
	        case "characterData" /* MutationRecordType.CHARACTER_DATA */:
	            if (characterData) {
	                if (!characterDataOldValue)
	                    record.oldValue = null;
	                return true;
	            }
	            return false;
	        case "attributes" /* MutationRecordType.ATTRIBUTES */:
	            if (attributes) {
	                if (!attributeOldValue)
	                    record.oldValue = null;
	                return true;
	            }
	            return false;
	        case "childList" /* MutationRecordType.CHILD_LIST */:
	            if (childList) {
	                return true;
	            }
	            return false;
	    }
	};
	let pendingMuatations = false;
	function logMutation(observer, record) {
	    observer.records.push(record);
	    if (!pendingMuatations) {
	        pendingMuatations = true;
	        Promise
	            .resolve()
	            .then(() => {
	            pendingMuatations = false;
	            observers.forEach(observer => {
	                return observer.callback(observer.takeRecords());
	            });
	        });
	    }
	}
	function recordMutation(record) {
	    observers.forEach(observer => {
	        const { options } = observer;
	        for (let t = record.target; t; t = t.parentNode) {
	            if (sidMatches(observer.target, t) && isConcerned(record, options)) {
	                logMutation(observer, record);
	                break;
	            }
	            if (!options.subtree)
	                break;
	        }
	    });
	}

	let MutationObserver$1 = class MutationObserver {
	    constructor(callback) {
	        if (ENABLE_MUTATION_OBSERVER) {
	            this.core = new MutationObserverImpl(callback);
	        }
	        else {
	            if (process.env.NODE_ENV !== 'production') {
	                console.warn('[Taro Warning] 若要使用 MutationObserver，请在 Taro 编译配置中设置 \'mini.runtime.enableMutationObserver: true\'');
	            }
	            this.core = {
	                observe: noop,
	                disconnect: noop,
	                takeRecords: noop
	            };
	        }
	    }
	    observe(...args) {
	        this.core.observe(...args);
	    }
	    disconnect() {
	        this.core.disconnect();
	    }
	    takeRecords() {
	        return this.core.takeRecords();
	    }
	    static record(record) {
	        recordMutation(record);
	    }
	};

	function throttle(fn, threshold = 250, scope) {
	    let lastTime = 0;
	    let deferTimer;
	    return function (...args) {
	        const context = scope || this;
	        const now = Date.now();
	        if (now - lastTime > threshold) {
	            fn.apply(this, args);
	            lastTime = now;
	        }
	        else {
	            clearTimeout(deferTimer);
	            deferTimer = setTimeout(() => {
	                lastTime = now;
	                fn.apply(context, args);
	            }, threshold);
	        }
	    };
	}

	const incrementId = () => {
	    const chatCodes = [];
	    // A-Z
	    for (let i = 65; i <= 90; i++) {
	        chatCodes.push(i);
	    }
	    // a-z
	    for (let i = 97; i <= 122; i++) {
	        chatCodes.push(i);
	    }
	    const chatCodesLen = chatCodes.length - 1;
	    const list = [0, 0];
	    return () => {
	        const target = list.map(item => chatCodes[item]);
	        const res = String.fromCharCode(...target);
	        let tailIdx = list.length - 1;
	        list[tailIdx]++;
	        while (list[tailIdx] > chatCodesLen) {
	            list[tailIdx] = 0;
	            tailIdx = tailIdx - 1;
	            if (tailIdx < 0) {
	                list.push(0);
	                break;
	            }
	            list[tailIdx]++;
	        }
	        return res;
	    };
	};
	function isElement(node) {
	    return node.nodeType === 1 /* NodeType.ELEMENT_NODE */;
	}
	function isText(node) {
	    return node.nodeType === 3 /* NodeType.TEXT_NODE */;
	}
	function isComment(node) {
	    return node.nodeName === COMMENT;
	}
	function isHasExtractProp(el) {
	    const res = Object.keys(el.props).find(prop => {
	        return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
	    });
	    return Boolean(res);
	}
	function shortcutAttr(key) {
	    switch (key) {
	        case STYLE:
	            return "st" /* Shortcuts.Style */;
	        case ID:
	            return UID;
	        case CLASS:
	            return "cl" /* Shortcuts.Class */;
	        default:
	            return key;
	    }
	}
	const customWrapperCache = new Map();
	function extend(ctor, methodName, options) {
	    if (isFunction(options)) {
	        options = {
	            value: options
	        };
	    }
	    Object.defineProperty(ctor.prototype, methodName, Object.assign({ configurable: true, enumerable: true }, options));
	}
	let componentsAlias$1;
	function getComponentsAlias() {
	    if (!componentsAlias$1) {
	        componentsAlias$1 = getComponentsAlias$1(internalComponents);
	    }
	    return componentsAlias$1;
	}

	class ClassList {
	    constructor(className, el) {
	        this.tokenList = [];
	        this.el = el;
	        className.trim().split(/\s+/).forEach(token => this.tokenList.push(token));
	    }
	    get value() {
	        return this.toString();
	    }
	    get length() {
	        return this.tokenList.length;
	    }
	    add() {
	        let index = 0;
	        let updated = false;
	        const tokens = arguments;
	        const length = tokens.length;
	        const tokenList = this.tokenList;
	        do {
	            const token = tokens[index];
	            if (this.checkTokenIsValid(token) && !~tokenList.indexOf(token)) {
	                tokenList.push(token);
	                updated = true;
	            }
	        } while (++index < length);
	        if (updated) {
	            this._update();
	        }
	    }
	    remove() {
	        let i = 0;
	        let updated = false;
	        const tokens = arguments;
	        const length = tokens.length;
	        const tokenList = this.tokenList;
	        do {
	            const token = tokens[i] + '';
	            if (!this.checkTokenIsValid(token))
	                continue;
	            const index = tokenList.indexOf(token);
	            if (~tokenList.indexOf(token)) {
	                tokenList.splice(index, 1);
	                updated = true;
	            }
	        } while (++i < length);
	        if (updated) {
	            this._update();
	        }
	    }
	    contains(token) {
	        if (!this.checkTokenIsValid(token))
	            return false;
	        return !!~this.tokenList.indexOf(token);
	    }
	    toggle(token, force) {
	        const result = this.contains(token);
	        const method = result ? force !== true && 'remove' : force !== false && 'add';
	        if (method) {
	            // @ts-ignore
	            this[method](token);
	        }
	        if (force === true || force === false) {
	            return force;
	        }
	        else {
	            return !result;
	        }
	    }
	    replace(token, replacement_token) {
	        if (!this.checkTokenIsValid(token) || !this.checkTokenIsValid(replacement_token))
	            return;
	        const index = this.tokenList.indexOf(token);
	        if (~index) {
	            this.tokenList.splice(index, 1, replacement_token);
	            this._update();
	        }
	    }
	    toString() {
	        return this.tokenList.filter(v => v !== '').join(' ');
	    }
	    checkTokenIsValid(token) {
	        if (token === '' || /\s/.test(token))
	            return false;
	        return true;
	    }
	    _update() {
	        this.el.className = this.value;
	    }
	}

	class EventSource extends Map {
	    removeNode(child) {
	        const { sid, uid } = child;
	        this.delete(sid);
	        if (uid !== sid && uid)
	            this.delete(uid);
	    }
	    removeNodeTree(child) {
	        this.removeNode(child);
	        const { childNodes } = child;
	        childNodes.forEach(node => this.removeNodeTree(node));
	    }
	}
	const eventSource = new EventSource();

	const env = {
	    window: process.env.TARO_PLATFORM === 'web' ? window : EMPTY_OBJ,
	    document: process.env.TARO_PLATFORM === 'web' ? document : EMPTY_OBJ
	};

	let SPECIAL_NODES;
	let componentsAlias;
	/**
	 * React also has a fancy function's name for this: `hydrate()`.
	 * You may have been heard `hydrate` as a SSR-related function,
	 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
	 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
	 */
	function hydrate(node) {
	    var _a;
	    // 初始化 componentsAlias
	    componentsAlias || (componentsAlias = getComponentsAlias());
	    // 初始化 SPECIAL_NODES
	    SPECIAL_NODES || (SPECIAL_NODES = hooks.call('getSpecialNodes'));
	    const nodeName = node.nodeName;
	    let compileModeName = null;
	    if (isText(node)) {
	        return {
	            sid: node.sid,
	            ["v" /* Shortcuts.Text */]: node.nodeValue,
	            ["nn" /* Shortcuts.NodeName */]: ((_a = componentsAlias[nodeName]) === null || _a === void 0 ? void 0 : _a._num) || '8'
	        };
	    }
	    const data = {
	        ["nn" /* Shortcuts.NodeName */]: nodeName,
	        sid: node.sid
	    };
	    if (node.uid !== node.sid) {
	        data.uid = node.uid;
	    }
	    if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
	        data["nn" /* Shortcuts.NodeName */] = `static-${nodeName}`;
	        if (nodeName === VIEW && !isHasExtractProp(node)) {
	            data["nn" /* Shortcuts.NodeName */] = PURE_VIEW;
	        }
	    }
	    const { props } = node;
	    for (const prop in props) {
	        const propInCamelCase = toCamelCase(prop);
	        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
	            prop !== CLASS &&
	            prop !== STYLE &&
	            prop !== ID &&
	            propInCamelCase !== CATCHMOVE &&
	            propInCamelCase !== COMPILE_MODE) {
	            data[propInCamelCase] = props[prop];
	        }
	        if (process.env.TARO_ENV !== 'swan' &&
	            nodeName === VIEW &&
	            propInCamelCase === CATCHMOVE &&
	            props[prop] !== false) {
	            data["nn" /* Shortcuts.NodeName */] = CATCH_VIEW;
	        }
	        if (propInCamelCase === COMPILE_MODE) {
	            compileModeName = props[prop];
	        }
	    }
	    // Children
	    data["cn" /* Shortcuts.Childnodes */] = node.childNodes.filter(node => !isComment(node)).map(hydrate);
	    if (node.className !== '') {
	        data["cl" /* Shortcuts.Class */] = node.className;
	    }
	    const cssText = node.cssText;
	    if (cssText !== '' && nodeName !== 'swiper-item') {
	        data["st" /* Shortcuts.Style */] = cssText;
	    }
	    hooks.call('modifyHydrateData', data, node);
	    const nn = data["nn" /* Shortcuts.NodeName */];
	    const componentAlias = componentsAlias[nn];
	    if (componentAlias) {
	        data["nn" /* Shortcuts.NodeName */] = componentAlias._num;
	        for (const prop in data) {
	            if (prop in componentAlias) {
	                data[componentAlias[prop]] = data[prop];
	                delete data[prop];
	            }
	        }
	    }
	    if (compileModeName !== null) {
	        data["nn" /* Shortcuts.NodeName */] = compileModeName;
	    }
	    const resData = hooks.call('transferHydrateData', data, node, componentAlias);
	    return resData || data;
	}

	class TaroEventTarget {
	    constructor() {
	        this.__handlers = {};
	    }
	    addEventListener(type, handler, options) {
	        type = type.toLowerCase();
	        hooks.call('onAddEvent', type, handler, options, this);
	        if (type === 'regionchange') {
	            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
	            this.addEventListener('begin', handler, options);
	            this.addEventListener('end', handler, options);
	            return;
	        }
	        let isCapture = Boolean(options);
	        let isOnce = false;
	        if (isObject(options)) {
	            isCapture = Boolean(options.capture);
	            isOnce = Boolean(options.once);
	        }
	        if (isOnce) {
	            const wrapper = function () {
	                handler.apply(this, arguments); // this 指向 Element
	                this.removeEventListener(type, wrapper);
	            };
	            this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), { once: false }));
	            return;
	        }
	        process.env.NODE_ENV !== 'production' && warn(isCapture, 'Taro 暂未实现 event 的 capture 特性。');
	        // 某些框架，如 PReact 有委托的机制，handler 始终是同一个函数
	        // 这会导致多层停止冒泡失败：view -> view(handler.stop = false) -> view(handler.stop = true)
	        // 这样解决：view -> view(handlerA.stop = false) -> view(handlerB.stop = false)
	        // 因此每次绑定事件都新建一个函数，如果带来了性能问题，可以把这段逻辑抽取到 PReact 插件中。
	        const oldHandler = handler;
	        handler = function () {
	            return oldHandler.apply(this, arguments); // this 指向 Element
	        };
	        handler.oldHandler = oldHandler;
	        const handlers = this.__handlers[type];
	        if (isArray(handlers)) {
	            handlers.push(handler);
	        }
	        else {
	            this.__handlers[type] = [handler];
	        }
	    }
	    removeEventListener(type, handler) {
	        type = type.toLowerCase();
	        if (type === 'regionchange') {
	            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
	            this.removeEventListener('begin', handler);
	            this.removeEventListener('end', handler);
	            return;
	        }
	        if (!handler) {
	            return;
	        }
	        const handlers = this.__handlers[type];
	        if (!isArray(handlers)) {
	            return;
	        }
	        const index = handlers.findIndex(item => {
	            if (item === handler || item.oldHandler === handler)
	                return true;
	        });
	        process.env.NODE_ENV !== 'production' && warn(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
	        handlers.splice(index, 1);
	    }
	    isAnyEventBinded() {
	        const handlers = this.__handlers;
	        const isAnyEventBinded = Object.keys(handlers).find(key => handlers[key].length);
	        return Boolean(isAnyEventBinded);
	    }
	}

	const CHILDNODES = "cn" /* Shortcuts.Childnodes */;
	const nodeId = incrementId();
	class TaroNode extends TaroEventTarget {
	    constructor() {
	        super();
	        this.parentNode = null;
	        this.childNodes = [];
	        this.hydrate = (node) => () => hydrate(node);
	        this.uid = '_' + nodeId(); // dom 节点 id，开发者可修改
	        this.sid = this.uid; // dom 节点全局唯一 id，不可被修改
	        eventSource.set(this.sid, this);
	    }
	    updateChildNodes(isClean) {
	        const cleanChildNodes = () => [];
	        const rerenderChildNodes = () => {
	            const childNodes = this.childNodes.filter(node => !isComment(node));
	            return childNodes.map(hydrate);
	        };
	        this.enqueueUpdate({
	            path: `${this._path}.${CHILDNODES}`,
	            value: isClean ? cleanChildNodes : rerenderChildNodes
	        });
	    }
	    updateSingleChild(index) {
	        this.childNodes.forEach((child, childIndex) => {
	            if (isComment(child))
	                return;
	            if (index && childIndex < index)
	                return;
	            this.enqueueUpdate({
	                path: child._path,
	                value: this.hydrate(child)
	            });
	        });
	    }
	    get _root() {
	        var _a;
	        return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
	    }
	    findIndex(refChild) {
	        const index = this.childNodes.indexOf(refChild);
	        ensure(index !== -1, 'The node to be replaced is not a child of this node.');
	        return index;
	    }
	    get _path() {
	        const parentNode = this.parentNode;
	        if (parentNode) {
	            // 计算路径时，先过滤掉 comment 节点
	            const list = parentNode.childNodes.filter(node => !isComment(node));
	            const indexOfNode = list.indexOf(this);
	            const index = hooks.call('getPathIndex', indexOfNode);
	            return `${parentNode._path}.${CHILDNODES}.${index}`;
	        }
	        return '';
	    }
	    get nextSibling() {
	        const parentNode = this.parentNode;
	        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
	    }
	    get previousSibling() {
	        const parentNode = this.parentNode;
	        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
	    }
	    get parentElement() {
	        const parentNode = this.parentNode;
	        if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1 /* NodeType.ELEMENT_NODE */) {
	            return parentNode;
	        }
	        return null;
	    }
	    get firstChild() {
	        return this.childNodes[0] || null;
	    }
	    get lastChild() {
	        const childNodes = this.childNodes;
	        return childNodes[childNodes.length - 1] || null;
	    }
	    /**
	     * @textContent 目前只能置空子元素
	     * @TODO 等待完整 innerHTML 实现
	     */
	    // eslint-disable-next-line accessor-pairs
	    set textContent(text) {
	        const removedNodes = this.childNodes.slice();
	        const addedNodes = [];
	        // Handle old children' data structure & ref
	        while (this.firstChild) {
	            this.removeChild(this.firstChild, { doUpdate: false });
	        }
	        if (text === '') {
	            this.updateChildNodes(true);
	        }
	        else {
	            const newText = env.document.createTextNode(text);
	            addedNodes.push(newText);
	            this.appendChild(newText);
	            this.updateChildNodes();
	        }
	        // @Todo: appendChild 会多触发一次
	        MutationObserver$1.record({
	            type: "childList" /* MutationRecordType.CHILD_LIST */,
	            target: this,
	            removedNodes,
	            addedNodes
	        });
	    }
	    /**
	     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
	     * @scenario
	     * [A,B,C]
	     *   1. insert D before C, D has no parent
	     *   2. insert D before C, D has the same parent of C
	     *   3. insert D before C, D has the different parent of C
	     */
	    insertBefore(newChild, refChild, isReplace) {
	        if (newChild.nodeName === DOCUMENT_FRAGMENT) {
	            newChild.childNodes.reduceRight((previousValue, currentValue) => {
	                this.insertBefore(currentValue, previousValue);
	                return currentValue;
	            }, refChild);
	            return newChild;
	        }
	        // Parent release newChild
	        //   - cleanRef: false (No need to clean eventSource, because newChild is about to be inserted)
	        //   - update: true (Need to update parent.childNodes, because parent.childNodes is reordered)
	        newChild.remove({ cleanRef: false });
	        let index = 0;
	        // Data structure
	        newChild.parentNode = this;
	        if (refChild) {
	            // insertBefore & replaceChild
	            index = this.findIndex(refChild);
	            this.childNodes.splice(index, 0, newChild);
	        }
	        else {
	            // appendChild
	            this.childNodes.push(newChild);
	        }
	        const childNodesLength = this.childNodes.length;
	        // Serialization
	        if (this._root) {
	            if (!refChild) {
	                // appendChild
	                const isOnlyChild = childNodesLength === 1;
	                if (isOnlyChild) {
	                    this.updateChildNodes();
	                }
	                else {
	                    this.enqueueUpdate({
	                        path: newChild._path,
	                        value: this.hydrate(newChild)
	                    });
	                }
	            }
	            else if (isReplace) {
	                // replaceChild
	                this.enqueueUpdate({
	                    path: newChild._path,
	                    value: this.hydrate(newChild)
	                });
	            }
	            else {
	                // insertBefore 有两种更新模式
	                // 比方说有 A B C 三个节点，现在要在 C 前插入 D
	                // 1. 插入 D，然后更新整个父节点的 childNodes 数组
	                // setData({ cn: [A, B, D, C] })
	                // 2. 插入 D，然后更新 D 以及 D 之后每个节点的数据
	                // setData ({
	                //   cn.[2]: D,
	                //   cn.[3]: C,
	                // })
	                // 由于微信解析 ’cn.[2]‘ 这些路径的时候也需要消耗时间，
	                // 所以根据 insertBefore 插入的位置来做不同的处理
	                const mark = childNodesLength * 2 / 3;
	                if (mark > index) {
	                    // 如果 insertBefore 的位置在 childNodes 的 2/3 前，则为了避免解析路径消耗过多的时间，采用第一种方式
	                    this.updateChildNodes();
	                }
	                else {
	                    // 如果 insertBefore 的位置在 childNodes 的 2/3 之后，则采用第二种方式，避免 childNodes 的全量更新
	                    this.updateSingleChild(index);
	                }
	            }
	        }
	        MutationObserver$1.record({
	            type: "childList" /* MutationRecordType.CHILD_LIST */,
	            target: this,
	            addedNodes: [newChild],
	            removedNodes: isReplace
	                ? [refChild] /** replaceChild */
	                : [],
	            nextSibling: isReplace
	                ? refChild.nextSibling /** replaceChild */
	                : (refChild || null),
	            previousSibling: newChild.previousSibling
	        });
	        return newChild;
	    }
	    /**
	     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
	     * @scenario
	     * [A,B,C]
	     *   1. append C, C has no parent
	     *   2. append C, C has the same parent of B
	     *   3. append C, C has the different parent of B
	     */
	    appendChild(newChild) {
	        return this.insertBefore(newChild);
	    }
	    /**
	     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
	     * @scenario
	     * [A,B,C]
	     *   1. replace B with C, C has no parent
	     *   2. replace B with C, C has no parent, C has the same parent of B
	     *   3. replace B with C, C has no parent, C has the different parent of B
	     */
	    replaceChild(newChild, oldChild) {
	        if (oldChild.parentNode !== this)
	            return;
	        // Insert the newChild
	        this.insertBefore(newChild, oldChild, true);
	        // Destroy the oldChild
	        //   - cleanRef: true (Need to clean eventSource, because the oldChild was detached from the DOM tree)
	        //   - update: false (No need to update parent.childNodes, because replace will not cause the parent.childNodes being reordered)
	        oldChild.remove({ doUpdate: false });
	        return oldChild;
	    }
	    /**
	     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
	     * @scenario
	     * [A,B,C]
	     *   1. remove A or B
	     *   2. remove C
	     */
	    removeChild(child, options = {}) {
	        const { cleanRef, doUpdate } = options;
	        if (cleanRef !== false && doUpdate !== false) {
	            // appendChild/replaceChild/insertBefore 不应该触发
	            // @Todo: 但其实如果 newChild 的父节点是另一颗子树的节点，应该是要触发的
	            MutationObserver$1.record({
	                type: "childList" /* MutationRecordType.CHILD_LIST */,
	                target: this,
	                removedNodes: [child],
	                nextSibling: child.nextSibling,
	                previousSibling: child.previousSibling
	            });
	        }
	        // Data Structure
	        const index = this.findIndex(child);
	        this.childNodes.splice(index, 1);
	        child.parentNode = null;
	        // Set eventSource
	        if (cleanRef !== false) {
	            eventSource.removeNodeTree(child);
	        }
	        // Serialization
	        if (this._root && doUpdate !== false) {
	            this.updateChildNodes();
	        }
	        return child;
	    }
	    remove(options) {
	        var _a;
	        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, options);
	    }
	    hasChildNodes() {
	        return this.childNodes.length > 0;
	    }
	    enqueueUpdate(payload) {
	        var _a;
	        (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
	    }
	    get ownerDocument() {
	        return env.document;
	    }
	    static extend(methodName, options) {
	        extend(TaroNode, methodName, options);
	    }
	}

	/*
	 *
	 * https://www.w3.org/Style/CSS/all-properties.en.html
	 */
	const WEBKIT = 'webkit';
	const styleProperties = [
	    'all',
	    'appearance',
	    'blockOverflow',
	    'blockSize',
	    'bottom',
	    'clear',
	    'contain',
	    'content',
	    'continue',
	    'cursor',
	    'direction',
	    'display',
	    'filter',
	    'float',
	    'gap',
	    'height',
	    'inset',
	    'isolation',
	    'left',
	    'letterSpacing',
	    'lightingColor',
	    'markerSide',
	    'mixBlendMode',
	    'opacity',
	    'order',
	    'position',
	    'quotes',
	    'resize',
	    'right',
	    'rowGap',
	    'tabSize',
	    'tableLayout',
	    'top',
	    'userSelect',
	    'verticalAlign',
	    'visibility',
	    'voiceFamily',
	    'volume',
	    'whiteSpace',
	    'widows',
	    'width',
	    'zIndex',
	    'pointerEvents',
	    'aspectRatio'
	    /** 非常用 style */
	    // 'azimuth',
	    // 'backfaceVisibility',
	    // 'baselineShift',
	    // 'captionSide',
	    // 'chains',
	    // 'dominantBaseline',
	    // 'elevation',
	    // 'emptyCells',
	    // 'forcedColorAdjust',
	    // 'glyphOrientationVertical',
	    // 'hangingPunctuation',
	    // 'hyphenateCharacter',
	    // 'hyphens',
	    // 'imageOrientation',
	    // 'imageResolution',
	    // 'orphans',
	    // 'playDuring',
	    // 'pointerEvents',
	    // 'regionFragment',
	    // 'richness',
	    // 'running',
	    // 'scrollBehavior',
	    // 'speechRate',
	    // 'stress',
	    // 'stringSet',
	    // 'unicodeBidi',
	    // 'willChange',
	    // 'writingMode',
	];
	// 减少文件体积
	function combine(prefix, list, excludeSelf) {
	    !excludeSelf && styleProperties.push(prefix);
	    list.forEach(item => {
	        styleProperties.push(prefix + item);
	        if (prefix === WEBKIT) {
	            styleProperties.push('Webkit' + item);
	        }
	    });
	}
	const color = 'Color';
	const style = 'Style';
	const width = 'Width';
	const image = 'Image';
	const size = 'Size';
	const color_style_width = [color, style, width];
	const fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
	const fitlength_fitwidth_image_radius = [...fitlength_fitwidth_image, 'Radius'];
	const color_style_width_fitlength_fitwidth_image = [...color_style_width, ...fitlength_fitwidth_image];
	const endRadius_startRadius = ['EndRadius', 'StartRadius'];
	const bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
	const end_start = ['End', 'Start'];
	const content_items_self = ['Content', 'Items', 'Self'];
	const blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
	const after_before = ['After', 'Before'];
	combine('borderBlock', color_style_width);
	combine('borderBlockEnd', color_style_width);
	combine('borderBlockStart', color_style_width);
	combine('outline', [...color_style_width, 'Offset']);
	combine('border', [...color_style_width, 'Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']);
	combine('borderFit', ['Length', width]);
	combine('borderInline', color_style_width);
	combine('borderInlineEnd', color_style_width);
	combine('borderInlineStart', color_style_width);
	combine('borderLeft', color_style_width_fitlength_fitwidth_image);
	combine('borderRight', color_style_width_fitlength_fitwidth_image);
	combine('borderTop', color_style_width_fitlength_fitwidth_image);
	combine('borderBottom', color_style_width_fitlength_fitwidth_image);
	combine('textDecoration', [color, style, 'Line']);
	combine('textEmphasis', [color, style, 'Position']);
	combine('scrollMargin', bottom_left_right_top);
	combine('scrollPadding', bottom_left_right_top);
	combine('padding', bottom_left_right_top);
	combine('margin', [...bottom_left_right_top, 'Trim']);
	combine('scrollMarginBlock', end_start);
	combine('scrollMarginInline', end_start);
	combine('scrollPaddingBlock', end_start);
	combine('scrollPaddingInline', end_start);
	combine('gridColumn', end_start);
	combine('gridRow', end_start);
	combine('insetBlock', end_start);
	combine('insetInline', end_start);
	combine('marginBlock', end_start);
	combine('marginInline', end_start);
	combine('paddingBlock', end_start);
	combine('paddingInline', end_start);
	combine('pause', after_before);
	combine('cue', after_before);
	combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
	combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
	combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
	combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
	combine('transform', ['Box', 'Origin', style]);
	combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
	combine('listStyle', [image, 'Position', 'Type']);
	combine('scrollSnap', ['Align', 'Stop', 'Type']);
	combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
	combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
	combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
	combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
	combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
	combine('textAlign', ['All', 'Last']);
	combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
	combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
	combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
	combine('offset', [...after_before, ...end_start, 'Anchor', 'Distance', 'Path', 'Position', 'Rotate']);
	combine('perspective', ['Origin']);
	combine('clip', ['Path', 'Rule']);
	combine('flow', ['From', 'Into']);
	combine('align', ['Content', 'Items', 'Self'], true);
	combine('alignment', ['Adjust', 'Baseline'], true);
	combine('borderStart', endRadius_startRadius, true);
	combine('borderEnd', endRadius_startRadius, true);
	combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
	combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
	combine('borderTopRight', fitlength_fitwidth_image_radius, true);
	combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
	combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
	combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
	combine('break', [...after_before, 'Inside'], true);
	combine('wrap', [...after_before, 'Flow', 'Inside', 'Through'], true);
	combine('justify', content_items_self, true);
	combine('place', content_items_self, true);
	combine('max', [...blockSize_height_inlineSize_width, 'Lines'], true);
	combine('min', blockSize_height_inlineSize_width, true);
	combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
	combine('inline', ['BoxAlign', size, 'Sizing'], true);
	combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
	combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
	combine('word', ['Break', 'Spacing', 'Wrap'], true);
	combine('object', ['Fit', 'Position'], true);
	combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);
	combine(WEBKIT, ['LineClamp', 'BoxOrient', 'TextFillColor', 'TextStroke', 'TextStrokeColor', 'TextStrokeWidth'], true);

	function recordCss(obj) {
	    MutationObserver$1.record({
	        type: "attributes" /* MutationRecordType.ATTRIBUTES */,
	        target: obj._element,
	        attributeName: 'style',
	        oldValue: obj.cssText
	    });
	}
	function enqueueUpdate(obj) {
	    const element = obj._element;
	    if (element._root) {
	        element.enqueueUpdate({
	            path: `${element._path}.${"st" /* Shortcuts.Style */}`,
	            value: obj.cssText
	        });
	    }
	}
	function setStyle(newVal, styleKey) {
	    process.env.NODE_ENV !== 'production' && warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
	    const old = this[styleKey];
	    if (old === newVal)
	        return;
	    !this._pending && recordCss(this);
	    if (isNull(newVal) || isUndefined(newVal) || newVal === '') {
	        this._usedStyleProp.delete(styleKey);
	        delete this._value[styleKey];
	    }
	    else {
	        this._usedStyleProp.add(styleKey);
	        this._value[styleKey] = newVal;
	    }
	    !this._pending && enqueueUpdate(this);
	}
	function initStyle(ctor, styleProperties) {
	    const properties = {};
	    for (let i = 0; i < styleProperties.length; i++) {
	        const styleKey = styleProperties[i];
	        if (ctor[styleKey])
	            return;
	        properties[styleKey] = {
	            get() {
	                const val = this._value[styleKey];
	                return isNull(val) || isUndefined(val) ? '' : val;
	            },
	            set(newVal) {
	                setStyle.call(this, newVal, styleKey);
	            }
	        };
	    }
	    Object.defineProperties(ctor.prototype, properties);
	}
	function isCssVariable(propertyName) {
	    return /^--/.test(propertyName);
	}
	class Style {
	    constructor(element) {
	        this._element = element;
	        this._usedStyleProp = new Set();
	        this._value = {};
	    }
	    setCssVariables(styleKey) {
	        this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
	            enumerable: true,
	            configurable: true,
	            get: () => {
	                return this._value[styleKey] || '';
	            },
	            set: (newVal) => {
	                setStyle.call(this, newVal, styleKey);
	            }
	        });
	    }
	    get cssText() {
	        if (!this._usedStyleProp.size)
	            return '';
	        const texts = [];
	        this._usedStyleProp.forEach(key => {
	            const val = this[key];
	            if (isNull(val) || isUndefined(val))
	                return;
	            let styleName = isCssVariable(key) ? key : toDashed(key);
	            if (styleName.indexOf('webkit') === 0 || styleName.indexOf('Webkit') === 0) {
	                styleName = `-${styleName}`;
	            }
	            texts.push(`${styleName}: ${val};`);
	        });
	        return texts.join(' ');
	    }
	    set cssText(str) {
	        this._pending = true;
	        recordCss(this);
	        this._usedStyleProp.forEach(prop => {
	            this.removeProperty(prop);
	        });
	        if (str === '' || isUndefined(str) || isNull(str)) {
	            this._pending = false;
	            enqueueUpdate(this);
	            return;
	        }
	        const rules = str.split(';');
	        for (let i = 0; i < rules.length; i++) {
	            const rule = rules[i].trim();
	            if (rule === '') {
	                continue;
	            }
	            // 可能存在 'background: url(http:x/y/z)' 的情况
	            const [propName, ...valList] = rule.split(':');
	            const val = valList.join(':');
	            if (isUndefined(val)) {
	                continue;
	            }
	            this.setProperty(propName.trim(), val.trim());
	        }
	        this._pending = false;
	        enqueueUpdate(this);
	    }
	    setProperty(propertyName, value) {
	        if (propertyName[0] === '-') {
	            // 支持 webkit 属性或 css 变量
	            this.setCssVariables(propertyName);
	        }
	        else {
	            propertyName = toCamelCase(propertyName);
	        }
	        if (isNull(value) || isUndefined(value)) {
	            this.removeProperty(propertyName);
	        }
	        else {
	            this[propertyName] = value;
	        }
	    }
	    removeProperty(propertyName) {
	        propertyName = toCamelCase(propertyName);
	        if (!this._usedStyleProp.has(propertyName)) {
	            return '';
	        }
	        const value = this[propertyName];
	        this[propertyName] = undefined;
	        return value;
	    }
	    getPropertyValue(propertyName) {
	        propertyName = toCamelCase(propertyName);
	        const value = this[propertyName];
	        if (!value) {
	            return '';
	        }
	        return value;
	    }
	}
	initStyle(Style, styleProperties);
	hooks.tap('injectNewStyleProperties', (newStyleProperties) => {
	    if (isArray(newStyleProperties)) {
	        initStyle(Style, newStyleProperties);
	    }
	    else {
	        if (typeof newStyleProperties !== 'string')
	            return;
	        initStyle(Style, [newStyleProperties]);
	    }
	});

	function returnTrue() {
	    return true;
	}
	function treeToArray(root, predict) {
	    const array = [];
	    const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
	    let object = root;
	    while (object) {
	        if (object.nodeType === 1 /* NodeType.ELEMENT_NODE */ && filter(object)) {
	            array.push(object);
	        }
	        object = following(object, root);
	    }
	    return array;
	}
	function following(el, root) {
	    const firstChild = el.firstChild;
	    const isElmentTypeValid = el.nodeType === 1 /* NodeType.ELEMENT_NODE */ || el.nodeType === 9 /* NodeType.DOCUMENT_NODE */;
	    // 如果当前 el 不是 element 或 document 元素，则可以直接不递归他的子元素了
	    if (firstChild && isElmentTypeValid) {
	        return firstChild;
	    }
	    let current = el;
	    do {
	        if (current === root) {
	            return null;
	        }
	        const nextSibling = current.nextSibling;
	        if (nextSibling) {
	            return nextSibling;
	        }
	        current = current.parentElement;
	    } while (current);
	    return null;
	}

	class TaroElement extends TaroNode {
	    constructor() {
	        super();
	        this.props = {};
	        this.dataset = EMPTY_OBJ;
	        this.nodeType = 1 /* NodeType.ELEMENT_NODE */;
	        this.style = new Style(this);
	        hooks.call('patchElement', this);
	    }
	    _stopPropagation(event) {
	        // eslint-disable-next-line @typescript-eslint/no-this-alias
	        let target = this;
	        // eslint-disable-next-line no-cond-assign
	        while ((target = target.parentNode)) {
	            const listeners = target.__handlers[event.type];
	            if (!isArray(listeners)) {
	                continue;
	            }
	            for (let i = listeners.length; i--;) {
	                const l = listeners[i];
	                l._stop = true;
	            }
	        }
	    }
	    get id() {
	        return this.getAttribute(ID);
	    }
	    set id(val) {
	        this.setAttribute(ID, val);
	    }
	    get className() {
	        return this.getAttribute(CLASS) || '';
	    }
	    set className(val) {
	        this.setAttribute(CLASS, val);
	    }
	    get cssText() {
	        return this.getAttribute(STYLE) || '';
	    }
	    get classList() {
	        return new ClassList(this.className, this);
	    }
	    get children() {
	        return this.childNodes.filter(isElement);
	    }
	    get attributes() {
	        const props = this.props;
	        const propKeys = Object.keys(props);
	        const style = this.style.cssText;
	        const attrs = propKeys.map(key => ({ name: key, value: props[key] }));
	        return attrs.concat(style ? { name: STYLE, value: style } : []);
	    }
	    get textContent() {
	        let text = '';
	        const childNodes = this.childNodes;
	        for (let i = 0; i < childNodes.length; i++) {
	            text += childNodes[i].textContent;
	        }
	        return text;
	    }
	    set textContent(text) {
	        super.textContent = text;
	    }
	    hasAttribute(qualifiedName) {
	        return !isUndefined(this.props[qualifiedName]);
	    }
	    hasAttributes() {
	        return this.attributes.length > 0;
	    }
	    get focus() {
	        return function () {
	            this.setAttribute(FOCUS, true);
	        };
	    }
	    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
	    set focus(value) {
	        this.setAttribute(FOCUS, value);
	    }
	    blur() {
	        this.setAttribute(FOCUS, false);
	    }
	    setAttribute(qualifiedName, value) {
	        process.env.NODE_ENV !== 'production' && warn(isString(value) && value.length > PROPERTY_THRESHOLD, `元素 ${this.nodeName} 的 ${qualifiedName} 属性值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`);
	        const isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
	        if (qualifiedName !== STYLE) {
	            MutationObserver$1.record({
	                target: this,
	                type: "attributes" /* MutationRecordType.ATTRIBUTES */,
	                attributeName: qualifiedName,
	                oldValue: this.getAttribute(qualifiedName)
	            });
	        }
	        switch (qualifiedName) {
	            case STYLE:
	                this.style.cssText = value;
	                break;
	            case ID:
	                if (this.uid !== this.sid) {
	                    // eventSource[sid] 永远保留，直到组件卸载
	                    // eventSource[uid] 可变
	                    eventSource.delete(this.uid);
	                }
	                value = String(value);
	                this.props[qualifiedName] = this.uid = value;
	                eventSource.set(value, this);
	                break;
	            default:
	                this.props[qualifiedName] = value;
	                if (qualifiedName.startsWith('data-')) {
	                    if (this.dataset === EMPTY_OBJ) {
	                        this.dataset = Object.create(null);
	                    }
	                    this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] = value;
	                }
	                break;
	        }
	        // Serialization
	        if (!this._root)
	            return;
	        const componentsAlias = getComponentsAlias();
	        const _alias = componentsAlias[this.nodeName];
	        const viewAlias = componentsAlias[VIEW]._num;
	        const staticViewAlias = componentsAlias[STATIC_VIEW]._num;
	        const catchViewAlias = componentsAlias[CATCH_VIEW]._num;
	        const _path = this._path;
	        qualifiedName = shortcutAttr(qualifiedName);
	        const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
	        const payload = {
	            path: `${_path}.${qualifiedNameInCamelCase}`,
	            value: isFunction(value) ? () => value : value
	        };
	        hooks.call('modifySetAttrPayload', this, qualifiedName, payload, componentsAlias);
	        if (_alias) {
	            const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
	            payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
	        }
	        this.enqueueUpdate(payload);
	        if (this.nodeName === VIEW) {
	            if (qualifiedNameInCamelCase === CATCHMOVE) {
	                // catchMove = true: catch-view
	                // catchMove = false: view or static-view
	                this.enqueueUpdate({
	                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
	                    value: value ? catchViewAlias : (this.isAnyEventBinded() ? viewAlias : staticViewAlias)
	                });
	            }
	            else if (isPureView && isHasExtractProp(this)) {
	                // pure-view => static-view
	                this.enqueueUpdate({
	                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
	                    value: staticViewAlias
	                });
	            }
	        }
	    }
	    removeAttribute(qualifiedName) {
	        const isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
	        MutationObserver$1.record({
	            target: this,
	            type: "attributes" /* MutationRecordType.ATTRIBUTES */,
	            attributeName: qualifiedName,
	            oldValue: this.getAttribute(qualifiedName)
	        });
	        if (qualifiedName === STYLE) {
	            this.style.cssText = '';
	        }
	        else {
	            const isInterrupt = hooks.call('onRemoveAttribute', this, qualifiedName);
	            if (isInterrupt) {
	                return;
	            }
	            if (!this.props.hasOwnProperty(qualifiedName)) {
	                return;
	            }
	            delete this.props[qualifiedName];
	        }
	        // Serialization
	        if (!this._root)
	            return;
	        const componentsAlias = getComponentsAlias();
	        const _alias = componentsAlias[this.nodeName];
	        const viewAlias = componentsAlias[VIEW]._num;
	        const staticViewAlias = componentsAlias[STATIC_VIEW]._num;
	        const pureViewAlias = componentsAlias[PURE_VIEW]._num;
	        const _path = this._path;
	        qualifiedName = shortcutAttr(qualifiedName);
	        const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
	        const payload = {
	            path: `${_path}.${qualifiedNameInCamelCase}`,
	            value: ''
	        };
	        hooks.call('modifyRmAttrPayload', this, qualifiedName, payload, componentsAlias);
	        if (_alias) {
	            const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
	            payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
	        }
	        this.enqueueUpdate(payload);
	        if (this.nodeName === VIEW) {
	            if (qualifiedNameInCamelCase === CATCHMOVE) {
	                // catch-view => view or static-view or pure-view
	                this.enqueueUpdate({
	                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
	                    value: this.isAnyEventBinded() ? viewAlias : (isHasExtractProp(this) ? staticViewAlias : pureViewAlias)
	                });
	            }
	            else if (isStaticView && !isHasExtractProp(this)) {
	                // static-view => pure-view
	                this.enqueueUpdate({
	                    path: `${_path}.${"nn" /* Shortcuts.NodeName */}`,
	                    value: pureViewAlias
	                });
	            }
	        }
	    }
	    getAttribute(qualifiedName) {
	        const attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
	        return attr !== null && attr !== void 0 ? attr : '';
	    }
	    getElementsByTagName(tagName) {
	        return treeToArray(this, (el) => {
	            return el.nodeName === tagName || (tagName === '*' && this !== el);
	        });
	    }
	    getElementsByClassName(className) {
	        const classNames = className.trim().split(/\s+/);
	        return treeToArray(this, (el) => {
	            const classList = el.classList;
	            return classNames.every(c => classList.contains(c));
	        });
	    }
	    dispatchEvent(event) {
	        const cancelable = event.cancelable;
	        const listeners = this.__handlers[event.type];
	        if (!isArray(listeners)) {
	            return false;
	        }
	        for (let i = listeners.length; i--;) {
	            const listener = listeners[i];
	            let result;
	            if (listener._stop) {
	                listener._stop = false;
	            }
	            else {
	                hooks.call('modifyDispatchEvent', event, this);
	                result = listener.call(this, event);
	            }
	            if ((result === false || event._end) && cancelable) {
	                event.defaultPrevented = true;
	            }
	            if (!isUndefined(result) && event.mpEvent) {
	                const res = hooks.call('modifyTaroEventReturn', this, event, result);
	                if (res) {
	                    event.mpEvent[EVENT_CALLBACK_RESULT] = result;
	                }
	            }
	            if (event._end && event._stop) {
	                break;
	            }
	        }
	        if (event._stop) {
	            this._stopPropagation(event);
	        }
	        else {
	            event._stop = true;
	        }
	        return listeners != null;
	    }
	    addEventListener(type, handler, options) {
	        const name = this.nodeName;
	        const SPECIAL_NODES = hooks.call('getSpecialNodes');
	        let sideEffect = true;
	        if (isObject(options) && options.sideEffect === false) {
	            sideEffect = false;
	            delete options.sideEffect;
	        }
	        hooks.call('modifyAddEventListener', this, sideEffect, getComponentsAlias);
	        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
	            const componentsAlias = getComponentsAlias();
	            const alias = componentsAlias[name]._num;
	            this.enqueueUpdate({
	                path: `${this._path}.${"nn" /* Shortcuts.NodeName */}`,
	                value: alias
	            });
	        }
	        super.addEventListener(type, handler, options);
	    }
	    removeEventListener(type, handler, sideEffect = true) {
	        super.removeEventListener(type, handler);
	        const name = this.nodeName;
	        const SPECIAL_NODES = hooks.call('getSpecialNodes');
	        hooks.call('modifyRemoveEventListener', this, sideEffect, getComponentsAlias);
	        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
	            const componentsAlias = getComponentsAlias();
	            const value = isHasExtractProp(this) ? `static-${name}` : `pure-${name}`;
	            const valueAlias = componentsAlias[value]._num;
	            this.enqueueUpdate({
	                path: `${this._path}.${"nn" /* Shortcuts.NodeName */}`,
	                value: valueAlias
	            });
	        }
	    }
	    static extend(methodName, options) {
	        extend(TaroElement, methodName, options);
	    }
	}

	const options = {
	    prerender: true,
	    debug: false
	};

	function initPosition() {
	    return {
	        index: 0,
	        column: 0,
	        line: 0
	    };
	}
	function feedPosition(position, str, len) {
	    const start = position.index;
	    const end = position.index = start + len;
	    for (let i = start; i < end; i++) {
	        const char = str.charAt(i);
	        if (char === '\n') {
	            position.line++;
	            position.column = 0;
	        }
	        else {
	            position.column++;
	        }
	    }
	}
	function jumpPosition(position, str, end) {
	    const len = end - position.index;
	    return feedPosition(position, str, len);
	}
	function copyPosition(position) {
	    return {
	        index: position.index,
	        line: position.line,
	        column: position.column
	    };
	}
	const whitespace = /\s/;
	function isWhitespaceChar(char) {
	    return whitespace.test(char);
	}
	const equalSign = /=/;
	function isEqualSignChar(char) {
	    return equalSign.test(char);
	}
	function shouldBeIgnore(tagName) {
	    const name = tagName.toLowerCase();
	    if (options.html.skipElements.has(name)) {
	        return true;
	    }
	    return false;
	}
	const alphanumeric = /[A-Za-z0-9]/;
	function findTextEnd(str, index) {
	    while (true) {
	        const textEnd = str.indexOf('<', index);
	        if (textEnd === -1) {
	            return textEnd;
	        }
	        const char = str.charAt(textEnd + 1);
	        if (char === '/' || char === '!' || alphanumeric.test(char)) {
	            return textEnd;
	        }
	        index = textEnd + 1;
	    }
	}
	function isWordEnd(cursor, wordBegin, html) {
	    if (!isWhitespaceChar(html.charAt(cursor)))
	        return false;
	    const len = html.length;
	    // backwrad
	    for (let i = cursor - 1; i > wordBegin; i--) {
	        const char = html.charAt(i);
	        if (!isWhitespaceChar(char)) {
	            if (isEqualSignChar(char))
	                return false;
	            break;
	        }
	    }
	    // forward
	    for (let i = cursor + 1; i < len; i++) {
	        const char = html.charAt(i);
	        if (!isWhitespaceChar(char)) {
	            if (isEqualSignChar(char))
	                return false;
	            return true;
	        }
	    }
	}
	class Scaner {
	    constructor(html) {
	        this.tokens = [];
	        this.position = initPosition();
	        this.html = html;
	    }
	    scan() {
	        const { html, position } = this;
	        const len = html.length;
	        while (position.index < len) {
	            const start = position.index;
	            this.scanText();
	            if (position.index === start) {
	                const isComment = html.startsWith('!--', start + 1);
	                if (isComment) {
	                    this.scanComment();
	                }
	                else {
	                    const tagName = this.scanTag();
	                    if (shouldBeIgnore(tagName)) {
	                        this.scanSkipTag(tagName);
	                    }
	                }
	            }
	        }
	        return this.tokens;
	    }
	    scanText() {
	        const type = 'text';
	        const { html, position } = this;
	        let textEnd = findTextEnd(html, position.index);
	        if (textEnd === position.index) {
	            return;
	        }
	        if (textEnd === -1) {
	            textEnd = html.length;
	        }
	        const start = copyPosition(position);
	        const content = html.slice(position.index, textEnd);
	        jumpPosition(position, html, textEnd);
	        const end = copyPosition(position);
	        this.tokens.push({ type, content, position: { start, end } });
	    }
	    scanComment() {
	        const type = 'comment';
	        const { html, position } = this;
	        const start = copyPosition(position);
	        feedPosition(position, html, 4); // "<!--".length
	        let contentEnd = html.indexOf('-->', position.index);
	        let commentEnd = contentEnd + 3; // "-->".length
	        if (contentEnd === -1) {
	            contentEnd = commentEnd = html.length;
	        }
	        const content = html.slice(position.index, contentEnd);
	        jumpPosition(position, html, commentEnd);
	        this.tokens.push({
	            type,
	            content,
	            position: {
	                start,
	                end: copyPosition(position)
	            }
	        });
	    }
	    scanTag() {
	        this.scanTagStart();
	        const tagName = this.scanTagName();
	        this.scanAttrs();
	        this.scanTagEnd();
	        return tagName;
	    }
	    scanTagStart() {
	        const type = 'tag-start';
	        const { html, position } = this;
	        const secondChar = html.charAt(position.index + 1);
	        const close = secondChar === '/';
	        const start = copyPosition(position);
	        feedPosition(position, html, close ? 2 : 1);
	        this.tokens.push({ type, close, position: { start } });
	    }
	    scanTagEnd() {
	        const type = 'tag-end';
	        const { html, position } = this;
	        const firstChar = html.charAt(position.index);
	        const close = firstChar === '/';
	        feedPosition(position, html, close ? 2 : 1);
	        const end = copyPosition(position);
	        this.tokens.push({ type, close, position: { end } });
	    }
	    scanTagName() {
	        const type = 'tag';
	        const { html, position } = this;
	        const len = html.length;
	        let start = position.index;
	        while (start < len) {
	            const char = html.charAt(start);
	            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
	            if (isTagChar)
	                break;
	            start++;
	        }
	        let end = start + 1;
	        while (end < len) {
	            const char = html.charAt(end);
	            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
	            if (!isTagChar)
	                break;
	            end++;
	        }
	        jumpPosition(position, html, end);
	        const tagName = html.slice(start, end);
	        this.tokens.push({
	            type,
	            content: tagName
	        });
	        return tagName;
	    }
	    scanAttrs() {
	        const { html, position, tokens } = this;
	        let cursor = position.index;
	        let quote = null; // null, single-, or double-quote
	        let wordBegin = cursor; // index of word start
	        const words = []; // "key", "key=value", "key='value'", etc
	        const len = html.length;
	        while (cursor < len) {
	            const char = html.charAt(cursor);
	            if (quote) {
	                const isQuoteEnd = char === quote;
	                if (isQuoteEnd) {
	                    quote = null;
	                }
	                cursor++;
	                continue;
	            }
	            const isTagEnd = char === '/' || char === '>';
	            if (isTagEnd) {
	                if (cursor !== wordBegin) {
	                    words.push(html.slice(wordBegin, cursor));
	                }
	                break;
	            }
	            if (isWordEnd(cursor, wordBegin, html)) {
	                if (cursor !== wordBegin) {
	                    words.push(html.slice(wordBegin, cursor));
	                }
	                wordBegin = cursor + 1;
	                cursor++;
	                continue;
	            }
	            const isQuoteStart = char === '\'' || char === '"';
	            if (isQuoteStart) {
	                quote = char;
	                cursor++;
	                continue;
	            }
	            cursor++;
	        }
	        jumpPosition(position, html, cursor);
	        const wLen = words.length;
	        const type = 'attribute';
	        for (let i = 0; i < wLen; i++) {
	            const word = words[i];
	            const isNotPair = word.includes('=');
	            if (isNotPair) {
	                const secondWord = words[i + 1];
	                if (secondWord && secondWord.startsWith('=')) {
	                    if (secondWord.length > 1) {
	                        const newWord = word + secondWord;
	                        tokens.push({ type, content: newWord });
	                        i += 1;
	                        continue;
	                    }
	                    const thirdWord = words[i + 2];
	                    i += 1;
	                    if (thirdWord) {
	                        const newWord = word + '=' + thirdWord;
	                        tokens.push({ type, content: newWord });
	                        i += 1;
	                        continue;
	                    }
	                }
	            }
	            if (word.endsWith('=')) {
	                const secondWord = words[i + 1];
	                if (secondWord && !secondWord.includes('=')) {
	                    const newWord = word + secondWord;
	                    tokens.push({ type, content: newWord });
	                    i += 1;
	                    continue;
	                }
	                const newWord = word.slice(0, -1);
	                tokens.push({ type, content: newWord });
	                continue;
	            }
	            tokens.push({ type, content: word });
	        }
	    }
	    scanSkipTag(tagName) {
	        const { html, position } = this;
	        const safeTagName = tagName.toLowerCase();
	        const len = html.length;
	        while (position.index < len) {
	            const nextTag = html.indexOf('</', position.index);
	            if (nextTag === -1) {
	                this.scanText();
	                break;
	            }
	            jumpPosition(position, html, nextTag);
	            const name = this.scanTag();
	            if (safeTagName === name.toLowerCase()) {
	                break;
	            }
	        }
	    }
	}

	function unquote(str) {
	    const car = str.charAt(0);
	    const end = str.length - 1;
	    const isQuoteStart = car === '"' || car === "'";
	    if (isQuoteStart && car === str.charAt(end)) {
	        return str.slice(1, end);
	    }
	    return str;
	}

	const LEFT_BRACKET = '{';
	const RIGHT_BRACKET = '}';
	const CLASS_SELECTOR = '.';
	const ID_SELECTOR = '#';
	const CHILD_COMBINATOR = '>';
	const GENERAL_SIBLING_COMBINATOR = '~';
	const ADJACENT_SIBLING_COMBINATOR = '+';
	class StyleTagParser {
	    constructor() {
	        this.styles = [];
	    }
	    extractStyle(src) {
	        const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
	        let html = src;
	        // let html = src.replace(/\n/g, '')
	        html = html.replace(REG_STYLE, (_, $1) => {
	            const style = $1.trim();
	            this.stringToSelector(style);
	            return '';
	        });
	        return html.trim();
	    }
	    stringToSelector(style) {
	        let lb = style.indexOf(LEFT_BRACKET);
	        while (lb > -1) {
	            const rb = style.indexOf(RIGHT_BRACKET);
	            const selectors = style.slice(0, lb).trim();
	            let content = style.slice(lb + 1, rb);
	            content = content.replace(/:(.*);/g, function (_, $1) {
	                const t = $1.trim().replace(/ +/g, '+++');
	                return `:${t};`;
	            });
	            content = content.replace(/ /g, '');
	            content = content.replace(/\+\+\+/g, ' ');
	            if (!(/;$/.test(content))) {
	                content += ';';
	            }
	            selectors.split(',').forEach(src => {
	                const selectorList = this.parseSelector(src);
	                this.styles.push({
	                    content,
	                    selectorList
	                });
	            });
	            style = style.slice(rb + 1);
	            lb = style.indexOf(LEFT_BRACKET);
	        }
	        // console.log('res this.styles: ', this.styles)
	    }
	    parseSelector(src) {
	        const list = src
	            .trim()
	            .replace(/ *([>~+]) */g, ' $1')
	            .replace(/ +/g, ' ')
	            .replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, '[$1=$2]')
	            .split(' ');
	        const selectors = list.map(item => {
	            const firstChar = item.charAt(0);
	            const selector = {
	                isChild: firstChar === CHILD_COMBINATOR,
	                isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
	                isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
	                tag: null,
	                id: null,
	                class: [],
	                attrs: []
	            };
	            item = item.replace(/^[>~+]/, '');
	            // 属性选择器
	            item = item.replace(/\[(.+?)\]/g, function (_, $1) {
	                const [key, value] = $1.split('=');
	                const all = $1.indexOf('=') === -1;
	                const attr = {
	                    all,
	                    key,
	                    value: all ? null : value
	                };
	                selector.attrs.push(attr);
	                return '';
	            });
	            item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
	                if ($1[0] === ID_SELECTOR) {
	                    // id 选择器
	                    selector.id = $1.substr(1);
	                }
	                else if ($1[0] === CLASS_SELECTOR) {
	                    // class 选择器
	                    selector.class.push($1.substr(1));
	                }
	                return '';
	            });
	            // 标签选择器
	            if (item !== '') {
	                selector.tag = item;
	            }
	            return selector;
	        });
	        return selectors;
	    }
	    matchStyle(tagName, el, list) {
	        const res = sortStyles(this.styles).reduce((str, { content, selectorList }, i) => {
	            let idx = list[i];
	            let selector = selectorList[idx];
	            const nextSelector = selectorList[idx + 1];
	            if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
	                selector = nextSelector;
	                idx += 1;
	                list[i] += 1;
	            }
	            let isMatch = this.matchCurrent(tagName, el, selector);
	            if (isMatch && selector.isGeneralSibling) {
	                let prev = getPreviousElement(el);
	                while (prev) {
	                    if (prev.h5tagName && this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
	                        isMatch = true;
	                        break;
	                    }
	                    prev = getPreviousElement(prev);
	                    isMatch = false;
	                }
	            }
	            if (isMatch && selector.isAdjacentSibling) {
	                const prev = getPreviousElement(el);
	                if (!prev || !prev.h5tagName) {
	                    isMatch = false;
	                }
	                else {
	                    const isSiblingMatch = this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1]);
	                    if (!isSiblingMatch) {
	                        isMatch = false;
	                    }
	                }
	            }
	            if (isMatch) {
	                if (idx === selectorList.length - 1) {
	                    return str + content;
	                }
	                else if (idx < selectorList.length - 1) {
	                    list[i] += 1;
	                }
	            }
	            else {
	                // 直接子代组合器: >
	                if (selector.isChild && idx > 0) {
	                    list[i] -= 1;
	                    if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
	                        list[i] += 1;
	                    }
	                }
	            }
	            return str;
	        }, '');
	        return res;
	    }
	    matchCurrent(tagName, el, selector) {
	        // 标签选择器
	        if (selector.tag && selector.tag !== tagName)
	            return false;
	        // id 选择器
	        if (selector.id && selector.id !== el.id)
	            return false;
	        // class 选择器
	        if (selector.class.length) {
	            const classList = el.className.split(' ');
	            for (let i = 0; i < selector.class.length; i++) {
	                const cls = selector.class[i];
	                if (classList.indexOf(cls) === -1) {
	                    return false;
	                }
	            }
	        }
	        // 属性选择器
	        if (selector.attrs.length) {
	            for (let i = 0; i < selector.attrs.length; i++) {
	                const { all, key, value } = selector.attrs[i];
	                if (all && !el.hasAttribute(key)) {
	                    return false;
	                }
	                else {
	                    const attr = el.getAttribute(key);
	                    if (attr !== unquote(value || '')) {
	                        return false;
	                    }
	                }
	            }
	        }
	        return true;
	    }
	}
	function getPreviousElement(el) {
	    const parent = el.parentElement;
	    if (!parent)
	        return null;
	    const prev = el.previousSibling;
	    if (!prev)
	        return null;
	    if (prev.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
	        return prev;
	    }
	    else {
	        return getPreviousElement(prev);
	    }
	}
	// 根据 css selector 权重排序: 权重大的靠后
	// @WARN 不考虑伪类
	// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
	function sortStyles(styles) {
	    return styles.sort((s1, s2) => {
	        const hundreds1 = getHundredsWeight(s1.selectorList);
	        const hundreds2 = getHundredsWeight(s2.selectorList);
	        if (hundreds1 !== hundreds2)
	            return hundreds1 - hundreds2;
	        const tens1 = getTensWeight(s1.selectorList);
	        const tens2 = getTensWeight(s2.selectorList);
	        if (tens1 !== tens2)
	            return tens1 - tens2;
	        const ones1 = getOnesWeight(s1.selectorList);
	        const ones2 = getOnesWeight(s2.selectorList);
	        return ones1 - ones2;
	    });
	}
	function getHundredsWeight(selectors) {
	    return selectors.reduce((pre, cur) => pre + (cur.id ? 1 : 0), 0);
	}
	function getTensWeight(selectors) {
	    return selectors.reduce((pre, cur) => pre + cur.class.length + cur.attrs.length, 0);
	}
	function getOnesWeight(selectors) {
	    return selectors.reduce((pre, cur) => pre + (cur.tag ? 1 : 0), 0);
	}

	function makeMap(str, expectsLowerCase) {
	    const map = Object.create(null);
	    const list = str.split(',');
	    for (let i = 0; i < list.length; i++) {
	        map[list[i]] = true;
	    }
	    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
	}
	const specialMiniElements = {
	    img: 'image',
	    iframe: 'web-view'
	};
	const internalCompsList = Object.keys(internalComponents)
	    .map(i => i.toLowerCase())
	    .join(',');
	// https://developers.weixin.qq.com/miniprogram/dev/component
	const isMiniElements = makeMap(internalCompsList, true);
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
	const isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true);
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
	const isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

	const closingTagAncestorBreakers = {
	    li: ['ul', 'ol', 'menu'],
	    dt: ['dl'],
	    dd: ['dl'],
	    tbody: ['table'],
	    thead: ['table'],
	    tfoot: ['table'],
	    tr: ['table'],
	    td: ['table']
	};
	function hasTerminalParent(tagName, stack) {
	    const tagParents = closingTagAncestorBreakers[tagName];
	    if (tagParents) {
	        let currentIndex = stack.length - 1;
	        while (currentIndex >= 0) {
	            const parentTagName = stack[currentIndex].tagName;
	            if (parentTagName === tagName) {
	                break;
	            }
	            if (tagParents && tagParents.includes(parentTagName)) {
	                return true;
	            }
	            currentIndex--;
	        }
	    }
	    return false;
	}
	function getTagName(tag) {
	    if (options.html.renderHTMLTag) {
	        return tag;
	    }
	    if (specialMiniElements[tag]) {
	        return specialMiniElements[tag];
	    }
	    else if (isMiniElements(tag)) {
	        return tag;
	    }
	    else if (isBlockElements(tag)) {
	        return 'view';
	    }
	    else if (isInlineElements(tag)) {
	        return 'text';
	    }
	    return 'view';
	}
	function splitEqual(str) {
	    const sep = '=';
	    const idx = str.indexOf(sep);
	    if (idx === -1)
	        return [str];
	    const key = str.slice(0, idx).trim();
	    const value = str.slice(idx + sep.length).trim();
	    return [key, value];
	}
	function format(children, document, styleOptions, parent) {
	    return children
	        .filter(child => {
	        // 过滤注释和空文本节点
	        if (child.type === 'comment') {
	            return false;
	        }
	        else if (child.type === 'text') {
	            return child.content !== '';
	        }
	        return true;
	    })
	        .map((child) => {
	        // 文本节点
	        if (child.type === 'text') {
	            let text = document.createTextNode(child.content);
	            if (isFunction(options.html.transformText)) {
	                text = options.html.transformText(text, child);
	            }
	            parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
	            return text;
	        }
	        const el = document.createElement(getTagName(child.tagName));
	        el.h5tagName = child.tagName;
	        parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
	        if (!options.html.renderHTMLTag) {
	            el.className = `h5-${child.tagName}`;
	        }
	        for (let i = 0; i < child.attributes.length; i++) {
	            const attr = child.attributes[i];
	            const [key, value] = splitEqual(attr);
	            if (key === 'class') {
	                el.className += ' ' + unquote(value);
	            }
	            else if (key[0] === 'o' && key[1] === 'n') {
	                continue;
	            }
	            else {
	                el.setAttribute(key, value == null ? true : unquote(value));
	            }
	        }
	        const { styleTagParser, descendantList } = styleOptions;
	        const list = descendantList.slice();
	        const style = styleTagParser.matchStyle(child.tagName, el, list);
	        el.setAttribute('style', style + el.style.cssText);
	        // console.log('style, ', style)
	        format(child.children, document, {
	            styleTagParser,
	            descendantList: list
	        }, el);
	        if (isFunction(options.html.transformElement)) {
	            return options.html.transformElement(el, child);
	        }
	        return el;
	    });
	}
	function parser(html, document) {
	    const styleTagParser = new StyleTagParser();
	    html = styleTagParser.extractStyle(html);
	    const tokens = new Scaner(html).scan();
	    const root = { tagName: '', children: [], type: 'element', attributes: [] };
	    const state = { tokens, options, cursor: 0, stack: [root] };
	    parse(state);
	    return format(root.children, document, {
	        styleTagParser,
	        descendantList: Array(styleTagParser.styles.length).fill(0)
	    });
	}
	function parse(state) {
	    const { tokens, stack } = state;
	    let { cursor } = state;
	    const len = tokens.length;
	    let nodes = stack[stack.length - 1].children;
	    while (cursor < len) {
	        const token = tokens[cursor];
	        if (token.type !== 'tag-start') {
	            // comment or text
	            nodes.push(token);
	            cursor++;
	            continue;
	        }
	        const tagToken = tokens[++cursor];
	        cursor++;
	        const tagName = tagToken.content.toLowerCase();
	        if (token.close) {
	            let index = stack.length;
	            let shouldRewind = false;
	            while (--index > -1) {
	                if (stack[index].tagName === tagName) {
	                    shouldRewind = true;
	                    break;
	                }
	            }
	            while (cursor < len) {
	                const endToken = tokens[cursor];
	                if (endToken.type !== 'tag-end')
	                    break;
	                cursor++;
	            }
	            if (shouldRewind) {
	                stack.splice(index);
	                break;
	            }
	            else {
	                continue;
	            }
	        }
	        const isClosingTag = options.html.closingElements.has(tagName);
	        let shouldRewindToAutoClose = isClosingTag;
	        if (shouldRewindToAutoClose) {
	            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
	        }
	        if (shouldRewindToAutoClose) {
	            let currentIndex = stack.length - 1;
	            while (currentIndex > 0) {
	                if (tagName === stack[currentIndex].tagName) {
	                    stack.splice(currentIndex);
	                    const previousIndex = currentIndex - 1;
	                    nodes = stack[previousIndex].children;
	                    break;
	                }
	                currentIndex = currentIndex - 1;
	            }
	        }
	        const attributes = [];
	        let attrToken;
	        while (cursor < len) {
	            attrToken = tokens[cursor];
	            if (attrToken.type === 'tag-end')
	                break;
	            attributes.push(attrToken.content);
	            cursor++;
	        }
	        cursor++;
	        const children = [];
	        const element = {
	            type: 'element',
	            tagName: tagToken.content,
	            attributes,
	            children
	        };
	        nodes.push(element);
	        const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
	        if (hasChildren) {
	            stack.push({ tagName, children });
	            const innerState = { tokens, cursor, stack };
	            parse(innerState);
	            cursor = innerState.cursor;
	        }
	    }
	    state.cursor = cursor;
	}

	options.html = {
	    skipElements: new Set(['style', 'script']),
	    voidElements: new Set([
	        '!doctype', 'area', 'base', 'br', 'col', 'command',
	        'embed', 'hr', 'img', 'input', 'keygen', 'link',
	        'meta', 'param', 'source', 'track', 'wbr'
	    ]),
	    closingElements: new Set([
	        'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
	        'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
	    ]),
	    renderHTMLTag: false
	};
	function setInnerHTML(element, html) {
	    while (element.firstChild) {
	        element.removeChild(element.firstChild);
	    }
	    const children = parser(html, element.ownerDocument);
	    for (let i = 0; i < children.length; i++) {
	        element.appendChild(children[i]);
	    }
	}

	function getBoundingClientRectImpl() {
	    if (!options.miniGlobal)
	        return Promise.resolve(null);
	    return new Promise(resolve => {
	        const query = options.miniGlobal.createSelectorQuery();
	        query.select(`#${this.uid}`).boundingClientRect(res => {
	            resolve(res);
	        }).exec();
	    });
	}
	function getTemplateContent(ctx) {
	    if (ctx.nodeName === 'template') {
	        const document = ctx.ownerDocument;
	        const content = document.createElement(DOCUMENT_FRAGMENT);
	        content.childNodes = ctx.childNodes;
	        ctx.childNodes = [content];
	        content.parentNode = ctx;
	        content.childNodes.forEach(nodes => {
	            nodes.parentNode = content;
	        });
	        return content;
	    }
	}

	/**
	 * An implementation of `Element.insertAdjacentHTML()`
	 * to support Vue 3 with a version of or greater than `vue@3.1.2`
	 */
	function insertAdjacentHTML(position, html) {
	    var _a, _b;
	    const parsedNodes = parser(html, this.ownerDocument);
	    for (let i = 0; i < parsedNodes.length; i++) {
	        const n = parsedNodes[i];
	        switch (position) {
	            case 'beforebegin':
	                (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
	                break;
	            case 'afterbegin':
	                if (this.hasChildNodes()) {
	                    this.insertBefore(n, this.childNodes[0]);
	                }
	                else {
	                    this.appendChild(n);
	                }
	                break;
	            case 'beforeend':
	                this.appendChild(n);
	                break;
	            case 'afterend':
	                (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
	                break;
	        }
	    }
	}
	function cloneNode(isDeep = false) {
	    const document = this.ownerDocument;
	    let newNode;
	    if (this.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
	        newNode = document.createElement(this.nodeName);
	    }
	    else if (this.nodeType === 3 /* NodeType.TEXT_NODE */) {
	        newNode = document.createTextNode('');
	    }
	    for (const key in this) {
	        const value = this[key];
	        // eslint-disable-next-line valid-typeof
	        if ([PROPS, DATASET].includes(key) && typeof value === OBJECT) {
	            newNode[key] = Object.assign({}, value);
	        }
	        else if (key === '_value') {
	            newNode[key] = value;
	        }
	        else if (key === STYLE) {
	            newNode.style._value = Object.assign({}, value._value);
	            newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
	        }
	    }
	    if (isDeep) {
	        newNode.childNodes = this.childNodes.map(node => node.cloneNode(true));
	    }
	    return newNode;
	}
	function contains(node) {
	    let isContains = false;
	    this.childNodes.some(childNode => {
	        const { uid } = childNode;
	        if (uid === node.uid || uid === node.id || childNode.contains(node)) {
	            isContains = true;
	            return true;
	        }
	    });
	    return isContains;
	}

	if (process.env.TARO_PLATFORM !== 'web') {
	    if (ENABLE_INNER_HTML) {
	        TaroNode.extend('innerHTML', {
	            set(html) {
	                setInnerHTML.call(this, this, html);
	            },
	            get() {
	                return '';
	            }
	        });
	        if (ENABLE_ADJACENT_HTML) {
	            TaroNode.extend('insertAdjacentHTML', insertAdjacentHTML);
	        }
	    }
	    if (ENABLE_CLONE_NODE) {
	        TaroNode.extend('cloneNode', cloneNode);
	    }
	    if (ENABLE_CONTAINS) {
	        TaroNode.extend('contains', contains);
	    }
	    if (ENABLE_SIZE_APIS) {
	        TaroElement.extend('getBoundingClientRect', getBoundingClientRectImpl);
	    }
	    if (ENABLE_TEMPLATE_CONTENT) {
	        TaroElement.extend('content', {
	            get() {
	                return getTemplateContent(this);
	            }
	        });
	    }
	}

	// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
	class TaroEvent {
	    constructor(type, opts, event) {
	        this._stop = false;
	        this._end = false;
	        this.defaultPrevented = false;
	        // Mouse Event botton property, it's used in 3rd lib, like react-router. default 0 in general
	        this.button = 0;
	        // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
	        // here use hi-res timestamp
	        this.timeStamp = Date.now();
	        this.type = type.toLowerCase();
	        this.mpEvent = event;
	        this.bubbles = Boolean(opts && opts.bubbles);
	        this.cancelable = Boolean(opts && opts.cancelable);
	    }
	    stopPropagation() {
	        this._stop = true;
	    }
	    stopImmediatePropagation() {
	        this._end = this._stop = true;
	    }
	    preventDefault() {
	        this.defaultPrevented = true;
	    }
	    get target() {
	        var _a, _b, _c, _d;
	        const cacheTarget = this.cacheTarget;
	        if (!cacheTarget) {
	            const target = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target) || null);
	            // Note：优先判断冒泡场景alipay的targetDataset的sid, 不然冒泡场景target属性吐出不对，其余拿取当前绑定id
	            const element = env.document.getElementById(((_b = target.targetDataset) === null || _b === void 0 ? void 0 : _b.sid) || ((_c = target.dataset) === null || _c === void 0 ? void 0 : _c.sid) || target.id || null);
	            target.dataset = element !== null ? element.dataset : EMPTY_OBJ;
	            for (const key in (_d = this.mpEvent) === null || _d === void 0 ? void 0 : _d.detail) {
	                target[key] = this.mpEvent.detail[key];
	            }
	            this.cacheTarget = target;
	            return target;
	        }
	        else {
	            return cacheTarget;
	        }
	    }
	    get currentTarget() {
	        var _a, _b, _c, _d, _e, _f, _g, _h;
	        const cacheCurrentTarget = this.cacheCurrentTarget;
	        if (!cacheCurrentTarget) {
	            const doc = env.document;
	            const currentTarget = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget) || null);
	            const element = doc.getElementById(((_b = currentTarget.dataset) === null || _b === void 0 ? void 0 : _b.sid) || currentTarget.id || null);
	            const targetElement = doc.getElementById(((_e = (_d = (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.dataset) === null || _e === void 0 ? void 0 : _e.sid) || ((_g = (_f = this.mpEvent) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.id) || null);
	            if (element === null || (element && element === targetElement)) {
	                this.cacheCurrentTarget = this.target;
	                return this.target;
	            }
	            currentTarget.dataset = element.dataset;
	            for (const key in (_h = this.mpEvent) === null || _h === void 0 ? void 0 : _h.detail) {
	                currentTarget[key] = this.mpEvent.detail[key];
	            }
	            this.cacheCurrentTarget = currentTarget;
	            return currentTarget;
	        }
	        else {
	            return cacheCurrentTarget;
	        }
	    }
	}
	function createEvent(event, node) {
	    if (typeof event === 'string') {
	        // For Vue3 using document.createEvent
	        return new TaroEvent(event, { bubbles: true, cancelable: true });
	    }
	    const domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
	    for (const key in event) {
	        if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
	            continue;
	        }
	        else {
	            domEv[key] = event[key];
	        }
	    }
	    if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
	        // eslint-disable-next-line dot-notation
	        domEv[KEY_CODE] = 13;
	    }
	    return domEv;
	}

	class FormElement extends TaroElement {
	    get type() {
	        var _a;
	        return (_a = this.props[TYPE]) !== null && _a !== void 0 ? _a : '';
	    }
	    set type(val) {
	        this.setAttribute(TYPE, val);
	    }
	    get value() {
	        // eslint-disable-next-line dot-notation
	        const val = this.props[VALUE];
	        return val == null ? '' : val;
	    }
	    set value(val) {
	        this.setAttribute(VALUE, val);
	    }
	    dispatchEvent(event) {
	        if (event.mpEvent) {
	            const val = event.mpEvent.detail.value;
	            if (event.type === CHANGE) {
	                this.props.value = val;
	            }
	            else if (event.type === INPUT) {
	                // Web 规范中表单组件的 value 应该跟着输入改变
	                // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
	                // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
	                this.value = val;
	            }
	        }
	        return super.dispatchEvent(event);
	    }
	}

	class Performance {
	    constructor() {
	        this.recorder = new Map();
	    }
	    start(id) {
	        if (!options.debug) {
	            return;
	        }
	        this.recorder.set(id, Date.now());
	    }
	    stop(id) {
	        if (!options.debug) {
	            return;
	        }
	        const now = Date.now();
	        const prev = this.recorder.get(id);
	        this.recorder.delete(id);
	        const time = now - prev;
	        // eslint-disable-next-line no-console
	        console.log(`${id} 时长： ${time}ms`);
	    }
	}
	const perf = new Performance();

	function findCustomWrapper(root, dataPathArr) {
	    // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
	    const list = dataPathArr.slice(1);
	    let currentData = root;
	    let customWrapper;
	    let splitedPath = '';
	    list.some((item, i) => {
	        const key = item
	            // '[0]' => '0'
	            .replace(/^\[(.+)\]$/, '$1')
	            // 'cn' => 'childNodes'
	            .replace(/\bcn\b/g, 'childNodes');
	        currentData = currentData[key];
	        if (isArray(currentData)) {
	            currentData = currentData.filter(el => !isComment(el));
	        }
	        if (isUndefined(currentData))
	            return true;
	        if (currentData.nodeName === CUSTOM_WRAPPER) {
	            const res = customWrapperCache.get(currentData.sid);
	            if (res) {
	                customWrapper = res;
	                splitedPath = dataPathArr.slice(i + 2).join('.');
	            }
	        }
	    });
	    if (customWrapper) {
	        return {
	            customWrapper,
	            splitedPath
	        };
	    }
	}
	class TaroRootElement extends TaroElement {
	    constructor() {
	        super();
	        this.updatePayloads = [];
	        this.updateCallbacks = [];
	        this.pendingUpdate = false;
	        this.ctx = null;
	        this.nodeName = ROOT_STR;
	        this.tagName = ROOT_STR.toUpperCase();
	    }
	    get _path() {
	        return ROOT_STR;
	    }
	    get _root() {
	        return this;
	    }
	    enqueueUpdate(payload) {
	        this.updatePayloads.push(payload);
	        if (!this.pendingUpdate && this.ctx) {
	            this.performUpdate();
	        }
	    }
	    performUpdate(initRender = false, prerender) {
	        this.pendingUpdate = true;
	        const ctx = hooks.call('proxyToRaw', this.ctx);
	        setTimeout(() => {
	            const setDataMark = `${SET_DATA} 开始时间戳 ${Date.now()}`;
	            perf.start(setDataMark);
	            const data = Object.create(null);
	            const resetPaths = new Set(initRender
	                ? ['root.cn.[0]', 'root.cn[0]']
	                : []);
	            while (this.updatePayloads.length > 0) {
	                const { path, value } = this.updatePayloads.shift();
	                if (path.endsWith("cn" /* Shortcuts.Childnodes */)) {
	                    resetPaths.add(path);
	                }
	                data[path] = value;
	            }
	            for (const path in data) {
	                resetPaths.forEach(p => {
	                    // 已经重置了数组，就不需要分别再设置了
	                    if (path.includes(p) && path !== p) {
	                        delete data[path];
	                    }
	                });
	                const value = data[path];
	                if (isFunction(value)) {
	                    data[path] = value();
	                }
	            }
	            // 预渲染
	            if (isFunction(prerender))
	                return prerender(data);
	            // 正常渲染
	            this.pendingUpdate = false;
	            let normalUpdate = {};
	            const customWrapperMap = new Map();
	            if (initRender) {
	                // 初次渲染，使用页面级别的 setData
	                normalUpdate = data;
	            }
	            else {
	                // 更新渲染，区分 CustomWrapper 与页面级别的 setData
	                for (const p in data) {
	                    const dataPathArr = p.split('.');
	                    const found = findCustomWrapper(this, dataPathArr);
	                    if (found) {
	                        // 此项数据使用 CustomWrapper 去更新
	                        const { customWrapper, splitedPath } = found;
	                        // 合并同一个 customWrapper 的相关更新到一次 setData 中
	                        customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, (customWrapperMap.get(customWrapper) || {})), { [`i.${splitedPath}`]: data[p] }));
	                    }
	                    else {
	                        // 此项数据使用页面去更新
	                        normalUpdate[p] = data[p];
	                    }
	                }
	            }
	            const customWrapperCount = customWrapperMap.size;
	            const isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
	            const updateArrLen = customWrapperCount + (isNeedNormalUpdate ? 1 : 0);
	            let executeTime = 0;
	            const cb = () => {
	                if (++executeTime === updateArrLen) {
	                    perf.stop(setDataMark);
	                    this.flushUpdateCallback();
	                    initRender && perf.stop(PAGE_INIT);
	                }
	            };
	            // custom-wrapper setData
	            if (customWrapperCount) {
	                customWrapperMap.forEach((data, ctx) => {
	                    if (process.env.NODE_ENV !== 'production' && options.debug) {
	                        // eslint-disable-next-line no-console
	                        console.log('custom wrapper setData: ', data);
	                    }
	                    ctx.setData(data, cb);
	                });
	            }
	            // page setData
	            if (isNeedNormalUpdate) {
	                if (process.env.NODE_ENV !== 'production' && options.debug) {
	                    // eslint-disable-next-line no-console
	                    console.log('page setData:', normalUpdate);
	                }
	                ctx.setData(normalUpdate, cb);
	            }
	        }, 0);
	    }
	    enqueueUpdateCallback(cb, ctx) {
	        this.updateCallbacks.push(() => {
	            ctx ? cb.call(ctx) : cb();
	        });
	    }
	    flushUpdateCallback() {
	        const updateCallbacks = this.updateCallbacks;
	        if (!updateCallbacks.length)
	            return;
	        const copies = updateCallbacks.slice(0);
	        this.updateCallbacks.length = 0;
	        for (let i = 0; i < copies.length; i++) {
	            copies[i]();
	        }
	    }
	}

	class TaroText extends TaroNode {
	    constructor(value) {
	        super();
	        this.nodeType = 3 /* NodeType.TEXT_NODE */;
	        this.nodeName = '#text';
	        this._value = value;
	    }
	    set textContent(text) {
	        MutationObserver$1.record({
	            target: this,
	            type: "characterData" /* MutationRecordType.CHARACTER_DATA */,
	            oldValue: this._value
	        });
	        this._value = text;
	        this.enqueueUpdate({
	            path: `${this._path}.${"v" /* Shortcuts.Text */}`,
	            value: text
	        });
	    }
	    get textContent() {
	        return this._value;
	    }
	    set nodeValue(text) {
	        this.textContent = text;
	    }
	    get nodeValue() {
	        return this._value;
	    }
	    set data(text) {
	        this.textContent = text;
	    }
	    get data() {
	        return this._value;
	    }
	}

	var _dict, _a;
	const findReg = /[!'()~]|%20|%00/g;
	const plusReg = /\+/g;
	const replaceCharMap = {
	    '!': '%21',
	    "'": '%27',
	    '(': '%28',
	    ')': '%29',
	    '~': '%7E',
	    '%20': '+',
	    '%00': '\x00',
	};
	function replacer(match) {
	    return replaceCharMap[match];
	}
	function appendTo(dict, name, value) {
	    const res = isArray(value) ? value.join(',') : value;
	    if (name in dict)
	        dict[name].push(res);
	    else
	        dict[name] = [res];
	}
	function addEach(value, key) {
	    appendTo(this, key, value);
	}
	function decode(str) {
	    return decodeURIComponent(str.replace(plusReg, ' '));
	}
	function encode(str) {
	    return encodeURIComponent(str).replace(findReg, replacer);
	}
	const URLSearchParams = process.env.TARO_PLATFORM === 'web' ? env.window.URLSearchParams : (_a = class {
	        constructor(query) {
	            _dict.set(this, Object.create(null));
	            query !== null && query !== void 0 ? query : (query = '');
	            const dict = __classPrivateFieldGet(this, _dict, "f");
	            if (typeof query === 'string') {
	                if (query.charAt(0) === '?') {
	                    query = query.slice(1);
	                }
	                for (let pairs = query.split('&'), i = 0, length = pairs.length; i < length; i++) {
	                    const value = pairs[i];
	                    const index = value.indexOf('=');
	                    if (index > -1) {
	                        appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
	                    }
	                    else if (value.length) {
	                        appendTo(dict, decode(value), '');
	                    }
	                }
	            }
	            else {
	                if (isArray(query)) {
	                    for (let i = 0, length = query.length; i < length; i++) {
	                        const value = query[i];
	                        appendTo(dict, value[0], value[1]);
	                    }
	                }
	                else if (query.forEach) {
	                    query.forEach(addEach, dict);
	                }
	                else {
	                    for (const key in query) {
	                        appendTo(dict, key, query[key]);
	                    }
	                }
	            }
	        }
	        append(name, value) {
	            appendTo(__classPrivateFieldGet(this, _dict, "f"), name, value);
	        }
	        delete(name) {
	            delete __classPrivateFieldGet(this, _dict, "f")[name];
	        }
	        get(name) {
	            const dict = __classPrivateFieldGet(this, _dict, "f");
	            return name in dict ? dict[name][0] : null;
	        }
	        getAll(name) {
	            const dict = __classPrivateFieldGet(this, _dict, "f");
	            return name in dict ? dict[name].slice(0) : [];
	        }
	        has(name) {
	            return name in __classPrivateFieldGet(this, _dict, "f");
	        }
	        keys() {
	            return Object.keys(__classPrivateFieldGet(this, _dict, "f"));
	        }
	        set(name, value) {
	            __classPrivateFieldGet(this, _dict, "f")[name] = ['' + value];
	        }
	        forEach(callback, thisArg) {
	            const dict = __classPrivateFieldGet(this, _dict, "f");
	            Object.getOwnPropertyNames(dict).forEach(function (name) {
	                dict[name].forEach(function (value) {
	                    callback.call(thisArg, value, name, this);
	                }, this);
	            }, this);
	        }
	        toJSON() {
	            return {};
	        }
	        toString() {
	            const dict = __classPrivateFieldGet(this, _dict, "f");
	            const query = [];
	            for (const key in dict) {
	                const name = encode(key);
	                for (let i = 0, value = dict[key]; i < value.length; i++) {
	                    query.push(name + '=' + encode(value[i]));
	                }
	            }
	            return query.join('&');
	        }
	    },
	    _dict = new WeakMap(),
	    _a);

	var _TaroURL_hash, _TaroURL_hostname, _TaroURL_pathname, _TaroURL_port, _TaroURL_protocol, _TaroURL_search;
	class TaroURL {
	    static createObjectURL() {
	        throw new Error('Oops, not support URL.createObjectURL() in miniprogram.');
	    }
	    static revokeObjectURL() {
	        throw new Error('Oops, not support URL.revokeObjectURL() in miniprogram.');
	    }
	    constructor(url, base) {
	        /* private property */
	        _TaroURL_hash.set(this, '');
	        _TaroURL_hostname.set(this, '');
	        _TaroURL_pathname.set(this, '');
	        _TaroURL_port.set(this, '');
	        _TaroURL_protocol.set(this, '');
	        _TaroURL_search.set(this, void 0);
	        if (!isString(url))
	            url = String(url);
	        const parseResult = parseUrlBase(url, base);
	        const { hash, hostname, pathname, port, protocol, search } = parseResult;
	        __classPrivateFieldSet(this, _TaroURL_hash, hash, "f");
	        __classPrivateFieldSet(this, _TaroURL_hostname, hostname, "f");
	        __classPrivateFieldSet(this, _TaroURL_pathname, pathname || '/', "f");
	        __classPrivateFieldSet(this, _TaroURL_port, port, "f");
	        __classPrivateFieldSet(this, _TaroURL_protocol, protocol, "f");
	        __classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(search), "f");
	    }
	    /* public property */
	    get protocol() {
	        return __classPrivateFieldGet(this, _TaroURL_protocol, "f");
	    }
	    set protocol(val) {
	        isString(val) && (__classPrivateFieldSet(this, _TaroURL_protocol, val.trim(), "f"));
	    }
	    get host() {
	        return this.hostname + (this.port ? ':' + this.port : '');
	    }
	    set host(val) {
	        if (val && isString(val)) {
	            val = val.trim();
	            const { hostname, port } = parseUrl(`//${val}`);
	            this.hostname = hostname;
	            this.port = port;
	        }
	    }
	    get hostname() {
	        return __classPrivateFieldGet(this, _TaroURL_hostname, "f");
	    }
	    set hostname(val) {
	        val && isString(val) && (__classPrivateFieldSet(this, _TaroURL_hostname, val.trim(), "f"));
	    }
	    get port() {
	        return __classPrivateFieldGet(this, _TaroURL_port, "f");
	    }
	    set port(val) {
	        isString(val) && (__classPrivateFieldSet(this, _TaroURL_port, val.trim(), "f"));
	    }
	    get pathname() {
	        return __classPrivateFieldGet(this, _TaroURL_pathname, "f");
	    }
	    set pathname(val) {
	        if (isString(val)) {
	            val = val.trim();
	            const HEAD_REG = /^(\/|\.\/|\.\.\/)/;
	            let temp = val;
	            while (HEAD_REG.test(temp)) {
	                temp = temp.replace(HEAD_REG, '');
	            }
	            if (temp)
	                __classPrivateFieldSet(this, _TaroURL_pathname, '/' + temp, "f");
	            else
	                __classPrivateFieldSet(this, _TaroURL_pathname, '/', "f");
	        }
	    }
	    get search() {
	        const val = __classPrivateFieldGet(this, _TaroURL_search, "f").toString();
	        return (val.length === 0 || val.startsWith('?')) ? val : `?${val}`;
	    }
	    set search(val) {
	        if (isString(val)) {
	            val = val.trim();
	            __classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(val), "f");
	        }
	    }
	    get hash() {
	        return __classPrivateFieldGet(this, _TaroURL_hash, "f");
	    }
	    set hash(val) {
	        if (isString(val)) {
	            val = val.trim();
	            if (val)
	                __classPrivateFieldSet(this, _TaroURL_hash, val.startsWith('#') ? val : `#${val}`, "f");
	            else
	                __classPrivateFieldSet(this, _TaroURL_hash, '', "f");
	        }
	    }
	    get href() {
	        return `${this.protocol}//${this.host}${this.pathname}${this.search}${this.hash}`;
	    }
	    set href(val) {
	        if (val && isString(val)) {
	            val = val.trim();
	            const { protocol, hostname, port, hash, search, pathname } = parseUrl(val);
	            this.protocol = protocol;
	            this.hostname = hostname;
	            this.pathname = pathname;
	            this.port = port;
	            this.hash = hash;
	            this.search = search;
	        }
	    }
	    get origin() {
	        return `${this.protocol}//${this.host}`;
	    }
	    set origin(val) {
	        if (val && isString(val)) {
	            val = val.trim();
	            const { protocol, hostname, port } = parseUrl(val);
	            this.protocol = protocol;
	            this.hostname = hostname;
	            this.port = port;
	        }
	    }
	    get searchParams() {
	        return __classPrivateFieldGet(this, _TaroURL_search, "f");
	    }
	    // public method
	    toString() {
	        return this.href;
	    }
	    toJSON() {
	        return this.toString();
	    }
	    // convenient for deconstructor
	    _toRaw() {
	        return {
	            protocol: this.protocol,
	            port: this.port,
	            host: this.host,
	            hostname: this.hostname,
	            pathname: this.pathname,
	            hash: this.hash,
	            search: this.search,
	            origin: this.origin,
	            href: this.href,
	        };
	    }
	}
	_TaroURL_hash = new WeakMap(), _TaroURL_hostname = new WeakMap(), _TaroURL_pathname = new WeakMap(), _TaroURL_port = new WeakMap(), _TaroURL_protocol = new WeakMap(), _TaroURL_search = new WeakMap();
	const URL = process.env.TARO_PLATFORM === 'web' ? env.window.URL : TaroURL;
	function parseUrl(url = '') {
	    const result = {
	        href: '',
	        origin: '',
	        protocol: '',
	        hostname: '',
	        host: '',
	        port: '',
	        pathname: '',
	        search: '',
	        hash: ''
	    };
	    if (!url || !isString(url))
	        return result;
	    url = url.trim();
	    const PATTERN = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\?([^#]*))?(#(.*))?/;
	    const matches = url.match(PATTERN);
	    if (!matches)
	        return result;
	    // TODO: username & password ?
	    result.protocol = matches[1] || 'https:';
	    result.hostname = matches[6] || 'taro.com';
	    result.port = matches[8] || '';
	    result.pathname = matches[9] || '/';
	    result.search = matches[10] || '';
	    result.hash = matches[12] || '';
	    result.href = url;
	    result.origin = result.protocol + '//' + result.hostname;
	    result.host = result.hostname + (result.port ? `:${result.port}` : '');
	    return result;
	}
	function parseUrlBase(url, base) {
	    const VALID_URL = /^(https?:)\/\//i;
	    let fullUrl = '';
	    let parsedBase = null;
	    if (!isUndefined(base)) {
	        base = String(base).trim();
	        if (!VALID_URL.test(base))
	            throw new TypeError(`Failed to construct 'URL': Invalid base URL`);
	        parsedBase = parseUrl(base);
	    }
	    url = String(url).trim();
	    if (VALID_URL.test(url)) {
	        fullUrl = url;
	    }
	    else if (parsedBase) {
	        if (url) {
	            if (url.startsWith('//')) {
	                fullUrl = parsedBase.protocol + url;
	            }
	            else {
	                fullUrl = parsedBase.origin + (url.startsWith('/') ? url : `/${url}`);
	            }
	        }
	        else {
	            fullUrl = parsedBase.href;
	        }
	    }
	    else {
	        throw new TypeError(`Failed to construct 'URL': Invalid URL`);
	    }
	    return parseUrl(fullUrl);
	}

	class AnchorElement extends TaroElement {
	    get href() {
	        var _a;
	        return (_a = this.props["href" /* AnchorElementAttrs.HREF */]) !== null && _a !== void 0 ? _a : '';
	    }
	    set href(val) {
	        this.setAttribute("href" /* AnchorElementAttrs.HREF */, val);
	    }
	    get protocol() {
	        var _a;
	        return (_a = this.props["protocol" /* AnchorElementAttrs.PROTOCOL */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get host() {
	        var _a;
	        return (_a = this.props["host" /* AnchorElementAttrs.HOST */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get search() {
	        var _a;
	        return (_a = this.props["search" /* AnchorElementAttrs.SEARCH */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get hash() {
	        var _a;
	        return (_a = this.props["hash" /* AnchorElementAttrs.HASH */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get hostname() {
	        var _a;
	        return (_a = this.props["hostname" /* AnchorElementAttrs.HOSTNAME */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get port() {
	        var _a;
	        return (_a = this.props["port" /* AnchorElementAttrs.PORT */]) !== null && _a !== void 0 ? _a : '';
	    }
	    get pathname() {
	        var _a;
	        return (_a = this.props["pathname" /* AnchorElementAttrs.PATHNAME */]) !== null && _a !== void 0 ? _a : '';
	    }
	    setAttribute(qualifiedName, value) {
	        if (qualifiedName === "href" /* AnchorElementAttrs.HREF */) {
	            const willSetAttr = parseUrl(value);
	            for (const k in willSetAttr) {
	                super.setAttribute(k, willSetAttr[k]);
	            }
	        }
	        else {
	            super.setAttribute(qualifiedName, value);
	        }
	    }
	}

	class TransferElement extends TaroElement {
	    constructor(dataName) {
	        super();
	        this.dataName = dataName;
	        this.isTransferElement = true;
	    }
	    get _path() {
	        return this.dataName;
	    }
	}

	class TaroDocument extends TaroElement {
	    constructor() {
	        super();
	        this.createEvent = createEvent;
	        this.nodeType = 9 /* NodeType.DOCUMENT_NODE */;
	        this.nodeName = DOCUMENT_ELEMENT_NAME;
	    }
	    createElement(type) {
	        const nodeName = type.toLowerCase();
	        let element;
	        switch (true) {
	            case nodeName === ROOT_STR:
	                element = new TaroRootElement();
	                return element;
	            case controlledComponent.has(nodeName):
	                element = new FormElement();
	                break;
	            case nodeName === A$1:
	                element = new AnchorElement();
	                break;
	            case nodeName === 'page-meta':
	            case nodeName === 'navigation-bar':
	                element = new TransferElement(toCamelCase(nodeName));
	                break;
	            default:
	                element = new TaroElement();
	                break;
	        }
	        element.nodeName = nodeName;
	        element.tagName = type.toUpperCase();
	        return element;
	    }
	    // an ugly fake createElementNS to deal with @vue/runtime-dom's
	    // support mounting app to svg container since vue@3.0.8
	    createElementNS(_svgNS, type) {
	        return this.createElement(type);
	    }
	    createTextNode(text) {
	        return new TaroText(text);
	    }
	    getElementById(id) {
	        const el = eventSource.get(id);
	        return isUndefined(el) ? null : el;
	    }
	    querySelector(query) {
	        // 为了 Vue3 的乞丐版实现
	        if (/^#/.test(query)) {
	            return this.getElementById(query.slice(1));
	        }
	        return null;
	    }
	    querySelectorAll() {
	        // fake hack
	        return [];
	    }
	    // @TODO: @PERF: 在 hydrate 移除掉空的 node
	    createComment() {
	        const textnode = new TaroText('');
	        textnode.nodeName = COMMENT;
	        return textnode;
	    }
	    get defaultView() {
	        return env.window;
	    }
	}

	function createDocument() {
	    /**
	       * <document>
	       *   <html>
	       *     <head></head>
	       *     <body>
	       *       <container>
	       *         <app id="app" />
	       *       </container>
	       *     </body>
	       *   </html>
	       * </document>
	       */
	    const doc = new TaroDocument();
	    const documentCreateElement = doc.createElement.bind(doc);
	    const html = documentCreateElement(HTML);
	    const head = documentCreateElement(HEAD);
	    const body = documentCreateElement(BODY);
	    const app = documentCreateElement(APP);
	    app.id = APP;
	    const container = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue
	    doc.appendChild(html);
	    html.appendChild(head);
	    html.appendChild(body);
	    body.appendChild(container);
	    container.appendChild(app);
	    doc.documentElement = html;
	    doc.head = head;
	    doc.body = body;
	    return doc;
	}
	process.env.TARO_PLATFORM === 'web' ? env.document : (env.document = createDocument());

	const getComputedStyle = process.env.TARO_PLATFORM === 'web' ? env.window.getComputedStyle : function (element) {
	    return element.style;
	};

	const eventCenter = hooks.call('getEventCenter', Events);

	/**
	 * 一个小型缓存池，用于在切换页面时，存储一些上下文信息
	 */
	class RuntimeCache {
	    constructor(name) {
	        this.cache = new Map();
	        this.name = name;
	    }
	    has(identifier) {
	        return this.cache.has(identifier);
	    }
	    set(identifier, ctx) {
	        if (identifier && ctx) {
	            this.cache.set(identifier, ctx);
	        }
	    }
	    get(identifier) {
	        if (this.has(identifier))
	            return this.cache.get(identifier);
	    }
	    delete(identifier) {
	        this.cache.delete(identifier);
	    }
	}

	var _TaroHistory_instances, _TaroHistory_location, _TaroHistory_stack, _TaroHistory_cur, _TaroHistory_window, _TaroHistory_reset;
	const cache$1 = new RuntimeCache('history');
	class TaroHistory extends Events {
	    constructor(location, options) {
	        super();
	        _TaroHistory_instances.add(this);
	        /* private property */
	        _TaroHistory_location.set(this, void 0);
	        _TaroHistory_stack.set(this, []);
	        _TaroHistory_cur.set(this, 0);
	        _TaroHistory_window.set(this, void 0);
	        __classPrivateFieldSet(this, _TaroHistory_window, options.window, "f");
	        __classPrivateFieldSet(this, _TaroHistory_location, location, "f");
	        __classPrivateFieldGet(this, _TaroHistory_location, "f").on('__record_history__', (href) => {
	            var _a;
	            __classPrivateFieldSet(this, _TaroHistory_cur, (_a = __classPrivateFieldGet(this, _TaroHistory_cur, "f"), _a++, _a), "f");
	            __classPrivateFieldSet(this, _TaroHistory_stack, __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur, "f")), "f");
	            __classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
	                state: null,
	                title: '',
	                url: href
	            });
	        }, null);
	        __classPrivateFieldGet(this, _TaroHistory_location, "f").on('__reset_history__', (href) => {
	            __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this, href);
	        }, null);
	        // 切换上下文行为
	        this.on(CONTEXT_ACTIONS.INIT, () => {
	            __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
	        }, null);
	        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
	            cache$1.set(pageId, {
	                location: __classPrivateFieldGet(this, _TaroHistory_location, "f"),
	                stack: __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(),
	                cur: __classPrivateFieldGet(this, _TaroHistory_cur, "f")
	            });
	        }, null);
	        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
	            if (cache$1.has(pageId)) {
	                const ctx = cache$1.get(pageId);
	                __classPrivateFieldSet(this, _TaroHistory_location, ctx.location, "f");
	                __classPrivateFieldSet(this, _TaroHistory_stack, ctx.stack, "f");
	                __classPrivateFieldSet(this, _TaroHistory_cur, ctx.cur, "f");
	            }
	        }, null);
	        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
	            cache$1.delete(pageId);
	        }, null);
	        __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
	    }
	    /* public property */
	    get length() {
	        return __classPrivateFieldGet(this, _TaroHistory_stack, "f").length;
	    }
	    get state() {
	        return __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")].state;
	    }
	    /* public method */
	    go(delta) {
	        if (!isNumber(delta) || isNaN(delta))
	            return;
	        let targetIdx = __classPrivateFieldGet(this, _TaroHistory_cur, "f") + delta;
	        targetIdx = Math.min(Math.max(targetIdx, 0), this.length - 1);
	        __classPrivateFieldSet(this, _TaroHistory_cur, targetIdx, "f");
	        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")].url);
	        __classPrivateFieldGet(this, _TaroHistory_window, "f").trigger('popstate', __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")]);
	    }
	    back() {
	        this.go(-1);
	    }
	    forward() {
	        this.go(1);
	    }
	    pushState(state, title, url) {
	        if (!url || !isString(url))
	            return;
	        __classPrivateFieldSet(this, _TaroHistory_stack, __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur, "f") + 1), "f");
	        __classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
	            state,
	            title,
	            url
	        });
	        __classPrivateFieldSet(this, _TaroHistory_cur, this.length - 1, "f");
	        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', url);
	    }
	    replaceState(state, title, url) {
	        if (!url || !isString(url))
	            return;
	        __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")] = {
	            state,
	            title,
	            url
	        };
	        __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger('__set_href_without_history__', url);
	    }
	    // For debug
	    get cache() {
	        return cache$1;
	    }
	}
	_TaroHistory_location = new WeakMap(), _TaroHistory_stack = new WeakMap(), _TaroHistory_cur = new WeakMap(), _TaroHistory_window = new WeakMap(), _TaroHistory_instances = new WeakSet(), _TaroHistory_reset = function _TaroHistory_reset(href = '') {
	    __classPrivateFieldSet(this, _TaroHistory_stack, [
	        {
	            state: null,
	            title: '',
	            url: href || __classPrivateFieldGet(this, _TaroHistory_location, "f").href
	        }
	    ], "f");
	    __classPrivateFieldSet(this, _TaroHistory_cur, 0, "f");
	};
	const History = process.env.TARO_PLATFORM === 'web' ? env.window.History : TaroHistory;

	const Current = {
	    app: null,
	    router: null,
	    page: null
	};
	const getCurrentInstance = () => Current;

	var _TaroLocation_instances, _TaroLocation_url, _TaroLocation_noCheckUrl, _TaroLocation_window, _TaroLocation_reset, _TaroLocation_getPreValue, _TaroLocation_rollBack, _TaroLocation_recordHistory, _TaroLocation_checkUrlChange;
	const INIT_URL = 'https://taro.com';
	const cache = new RuntimeCache('location');
	class TaroLocation extends Events {
	    constructor(options) {
	        super();
	        _TaroLocation_instances.add(this);
	        /* private property */
	        _TaroLocation_url.set(this, new URL(INIT_URL));
	        _TaroLocation_noCheckUrl.set(this, false);
	        _TaroLocation_window.set(this, void 0);
	        __classPrivateFieldSet(this, _TaroLocation_window, options.window, "f");
	        __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
	        this.on('__set_href_without_history__', (href) => {
	            __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
	            const lastHash = __classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
	            __classPrivateFieldGet(this, _TaroLocation_url, "f").href = generateFullUrl(href);
	            if (lastHash !== __classPrivateFieldGet(this, _TaroLocation_url, "f").hash) {
	                __classPrivateFieldGet(this, _TaroLocation_window, "f").trigger('hashchange');
	            }
	            __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
	        }, null);
	        // 切换上下文行为
	        this.on(CONTEXT_ACTIONS.INIT, () => {
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
	        }, null);
	        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
	            cache.set(pageId, {
	                lastHref: this.href,
	            });
	        }, null);
	        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
	            // 数据恢复时，不需要执行跳转
	            if (cache.has(pageId)) {
	                const ctx = cache.get(pageId);
	                __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
	                __classPrivateFieldGet(this, _TaroLocation_url, "f").href = ctx.lastHref;
	                __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
	            }
	        }, null);
	        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
	            cache.delete(pageId);
	        }, null);
	    }
	    /* public property */
	    get protocol() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").protocol;
	    }
	    set protocol(val) {
	        const REG = /^(http|https):$/i;
	        if (!val || !isString(val) || !REG.test(val.trim()))
	            return;
	        val = val.trim();
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").protocol = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    get host() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").host;
	    }
	    set host(val) {
	        if (!val || !isString(val))
	            return;
	        val = val.trim();
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").host = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    get hostname() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").hostname;
	    }
	    set hostname(val) {
	        if (!val || !isString(val))
	            return;
	        val = val.trim();
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").hostname = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    get port() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").port;
	    }
	    set port(val) {
	        const xVal = Number((val = val.trim()));
	        if (!isNumber(xVal) || xVal <= 0)
	            return;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").port = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    get pathname() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").pathname;
	    }
	    set pathname(val) {
	        if (!val || !isString(val))
	            return;
	        val = val.trim();
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").pathname = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    get search() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").search;
	    }
	    set search(val) {
	        if (!val || !isString(val))
	            return;
	        val = val.trim();
	        val = val.startsWith('?') ? val : `?${val}`;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").search = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    get hash() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
	    }
	    // 小程序的navigateTo存在截断hash字符串的问题
	    set hash(val) {
	        if (!val || !isString(val))
	            return;
	        val = val.trim();
	        val = val.startsWith('#') ? val : `#${val}`;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").hash = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    get href() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").href;
	    }
	    set href(val) {
	        const REG = /^(http:|https:)?\/\/.+/;
	        if (!val || !isString(val) || !REG.test((val = val.trim())))
	            return;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").href = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    get origin() {
	        return __classPrivateFieldGet(this, _TaroLocation_url, "f").origin;
	    }
	    set origin(val) {
	        const REG = /^(http:|https:)?\/\/.+/;
	        if (!val || !isString(val) || !REG.test((val = val.trim())))
	            return;
	        const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
	        __classPrivateFieldGet(this, _TaroLocation_url, "f").origin = val;
	        if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
	            __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
	    }
	    /* public method */
	    assign() {
	        warn(true, '小程序环境中调用location.assign()无效.');
	    }
	    reload() {
	        warn(true, '小程序环境中调用location.reload()无效.');
	    }
	    replace(url) {
	        this.trigger('__set_href_without_history__', url);
	    }
	    toString() {
	        return this.href;
	    }
	    // For debug
	    get cache() {
	        return cache;
	    }
	}
	_TaroLocation_url = new WeakMap(), _TaroLocation_noCheckUrl = new WeakMap(), _TaroLocation_window = new WeakMap(), _TaroLocation_instances = new WeakSet(), _TaroLocation_reset = function _TaroLocation_reset() {
	    const Current = getCurrentInstance();
	    const router = Current.router;
	    if (router) {
	        const { path, params } = router;
	        const searchArr = Object.keys(params).map((key) => {
	            return `${key}=${params[key]}`;
	        });
	        const searchStr = searchArr.length > 0 ? '?' + searchArr.join('&') : '';
	        const url = `${INIT_URL}${path.startsWith('/') ? path : '/' + path}${searchStr}`;
	        __classPrivateFieldSet(this, _TaroLocation_url, new URL(url), "f");
	        this.trigger('__reset_history__', this.href);
	    }
	}, _TaroLocation_getPreValue = function _TaroLocation_getPreValue() {
	    return __classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
	}, _TaroLocation_rollBack = function _TaroLocation_rollBack(href) {
	    __classPrivateFieldGet(this, _TaroLocation_url, "f").href = href;
	}, _TaroLocation_recordHistory = function _TaroLocation_recordHistory() {
	    this.trigger('__record_history__', this.href);
	}, _TaroLocation_checkUrlChange = function _TaroLocation_checkUrlChange(preValue) {
	    if (__classPrivateFieldGet(this, _TaroLocation_noCheckUrl, "f")) {
	        return false;
	    }
	    const { protocol, hostname, port, pathname, search, hash } = __classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
	    // 跨域三要素不允许修改
	    if (protocol !== preValue.protocol || hostname !== preValue.hostname || port !== preValue.port) {
	        __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
	        return false;
	    }
	    // pathname
	    if (pathname !== preValue.pathname) {
	        return true;
	    }
	    // search
	    if (search !== preValue.search) {
	        return true;
	    }
	    // hashchange
	    if (hash !== preValue.hash) {
	        __classPrivateFieldGet(this, _TaroLocation_window, "f").trigger('hashchange');
	        return true;
	    }
	    __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
	    return false;
	};
	const Location = process.env.TARO_PLATFORM === 'web' ? env.window.Location : TaroLocation;
	function generateFullUrl(val = '') {
	    const origin = INIT_URL;
	    if (/^[/?#]/.test(val)) {
	        return origin + val;
	    }
	    return val;
	}

	const machine = 'Macintosh';
	const arch = 'Intel Mac OS X 10_14_5';
	const engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
	const msg = '(' + machine + '; ' + arch + ') ' + engine;
	const nav = process.env.TARO_PLATFORM === 'web' ? env.window.navigator : {
	    appCodeName: 'Mozilla',
	    appName: 'Netscape',
	    appVersion: '5.0 ' + msg,
	    cookieEnabled: true,
	    mimeTypes: [],
	    onLine: true,
	    platform: 'MacIntel',
	    plugins: [],
	    product: 'Taro',
	    productSub: '20030107',
	    userAgent: 'Mozilla/5.0 ' + msg,
	    vendor: 'Joyent',
	    vendorSub: ''
	};

	// https://github.com/myrne/performance-now
	let now;
	(function () {
	    let loadTime;
	    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
	        now = () => performance.now();
	    }
	    else if (Date.now) {
	        loadTime = Date.now();
	        now = () => Date.now() - loadTime;
	    }
	    else {
	        loadTime = new Date().getTime();
	        now = () => new Date().getTime() - loadTime;
	    }
	})();
	let lastTime = 0;
	// https://gist.github.com/paulirish/1579671
	// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
	const _raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
	    const _now = now();
	    const nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
	    return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - _now);
	};
	const _caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null
	    ? cancelAnimationFrame
	    : function (seed) {
	        // fix https://github.com/NervJS/taro/issues/7749
	        clearTimeout(seed);
	    };

	class TaroWindow extends Events {
	    constructor() {
	        super();
	        this.navigator = nav;
	        this.requestAnimationFrame = _raf;
	        this.cancelAnimationFrame = _caf;
	        this.getComputedStyle = getComputedStyle;
	        const globalProperties = [
	            ...Object.getOwnPropertyNames(global || {}),
	            ...Object.getOwnPropertySymbols(global || {})
	        ];
	        globalProperties.forEach(property => {
	            if (property === 'atob' || property === 'document')
	                return;
	            if (!Object.prototype.hasOwnProperty.call(this, property)) {
	                // 防止小程序环境下，window 上的某些 get 属性在赋值时报错
	                try {
	                    this[property] = global[property];
	                }
	                catch (e) {
	                    if (process.env.NODE_ENV !== 'production') {
	                        console.warn(`[Taro warn] window.${String(property)} 在赋值到 window 时报错`);
	                    }
	                }
	            }
	        });
	        this.Date || (this.Date = Date);
	        // 应用启动时，提供给需要读取历史信息的库使用
	        this.location = new Location({ window: this });
	        // @ts-ignore
	        this.history = new History(this.location, { window: this });
	        this.initEvent();
	    }
	    initEvent() {
	        const _location = this.location;
	        const _history = this.history;
	        this.on(CONTEXT_ACTIONS.INIT, (pageId) => {
	            // 页面onload，为该页面建立新的上下文信息
	            _location.trigger(CONTEXT_ACTIONS.INIT, pageId);
	        }, null);
	        this.on(CONTEXT_ACTIONS.RECOVER, (pageId) => {
	            // 页面onshow，恢复当前页面的上下文信息
	            _location.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
	            _history.trigger(CONTEXT_ACTIONS.RECOVER, pageId);
	        }, null);
	        this.on(CONTEXT_ACTIONS.RESTORE, (pageId) => {
	            // 页面onhide，缓存当前页面的上下文信息
	            _location.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
	            _history.trigger(CONTEXT_ACTIONS.RESTORE, pageId);
	        }, null);
	        this.on(CONTEXT_ACTIONS.DESTORY, (pageId) => {
	            // 页面onunload，清除当前页面的上下文信息
	            _location.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
	            _history.trigger(CONTEXT_ACTIONS.DESTORY, pageId);
	        }, null);
	    }
	    get document() {
	        return env.document;
	    }
	    addEventListener(event, callback) {
	        if (!isString(event))
	            return;
	        this.on(event, callback, null);
	    }
	    removeEventListener(event, callback) {
	        if (!isString(event))
	            return;
	        this.off(event, callback, null);
	    }
	    setTimeout(...args) {
	        return setTimeout(...args);
	    }
	    clearTimeout(...args) {
	        return clearTimeout(...args);
	    }
	}
	const window$1 = process.env.TARO_PLATFORM === 'web' ? env.window : (env.window = new TaroWindow());
	window$1.location;
	window$1.history;
	incrementId();

	const TIMEOUT = 100;
	const nextTick = (cb, ctx) => {
	    const beginTime = Date.now();
	    const router = Current.router;
	    const timerFunc = () => {
	        setTimeout(function () {
	            ctx ? cb.call(ctx) : cb();
	        }, 1);
	    };
	    if (router === null)
	        return timerFunc();
	    const path = router.$taroPath;
	    /**
	     * 三种情况
	     *   1. 调用 nextTick 时，pendingUpdate 已经从 true 变为 false（即已更新完成），那么需要光等 100ms
	     *   2. 调用 nextTick 时，pendingUpdate 为 true，那么刚好可以搭上便车
	     *   3. 调用 nextTick 时，pendingUpdate 还是 false，框架仍未启动更新逻辑，这时最多轮询 100ms，等待 pendingUpdate 变为 true。
	     */
	    function next() {
	        var _a, _b, _c;
	        const pageElement = env.document.getElementById(path);
	        if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
	            if (process.env.TARO_PLATFORM === 'web') {
	                // eslint-disable-next-line dot-notation
	                (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(() => {
	                    timerFunc();
	                })) !== null && _c !== void 0 ? _c : timerFunc();
	            }
	            else {
	                pageElement.enqueueUpdateCallback(cb, ctx);
	            }
	        }
	        else if (Date.now() - beginTime > TIMEOUT) {
	            timerFunc();
	        }
	        else {
	            setTimeout(() => next(), 20);
	        }
	    }
	    next();
	};

	function handleArrayFindPolyfill() {
	    if (!isFunction(Array.prototype.find)) {
	        Object.defineProperty(Array.prototype, 'find', {
	            value(predicate) {
	                if (this == null) {
	                    throw new TypeError('"this" is null or not defined');
	                }
	                const o = Object(this);
	                const len = o.length >>> 0;
	                if (!isFunction(predicate)) {
	                    throw new TypeError('predicate must be a function');
	                }
	                const thisArg = arguments[1];
	                let k = 0;
	                while (k < len) {
	                    const kValue = o[k];
	                    if (predicate.call(thisArg, kValue, k, o)) {
	                        return kValue;
	                    }
	                    k++;
	                }
	                return undefined;
	            }
	        });
	    }
	}
	function handleArrayIncludesPolyfill() {
	    if (!isFunction(Array.prototype.includes)) {
	        Object.defineProperty(Array.prototype, 'includes', {
	            value(searchElement, fromIndex) {
	                if (this == null) {
	                    throw new TypeError('"this" is null or not defined');
	                }
	                const o = Object(this);
	                const len = o.length >>> 0;
	                if (len === 0) {
	                    return false;
	                }
	                const n = fromIndex | 0;
	                let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	                while (k < len) {
	                    if (o[k] === searchElement) {
	                        return true;
	                    }
	                    k++;
	                }
	                return false;
	            }
	        });
	    }
	}

	/* eslint-disable eqeqeq */
	function handleIntersectionObserverPolyfill() {
	    // Exit early if all IntersectionObserver and IntersectionObserverEntry
	    // features are natively supported.
	    if ('IntersectionObserver' in window &&
	        'IntersectionObserverEntry' in window &&
	        'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
	        if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
	            // Minimal polyfill for Edge 15's lack of `isIntersecting`
	            // See: https://github.com/w3c/IntersectionObserver/issues/211
	            Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
	                get: function () {
	                    return this.intersectionRatio > 0;
	                }
	            });
	        }
	    }
	    else {
	        handleIntersectionObserverObjectPolyfill();
	    }
	}
	function handleIntersectionObserverObjectPolyfill() {
	    const document = window.document;
	    /**
	     * Creates the global IntersectionObserverEntry constructor.
	     * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
	     * @param {Object} entry A dictionary of instance properties.
	     * @constructor
	     */
	    function IntersectionObserverEntry(entry) {
	        this.time = entry.time;
	        this.target = entry.target;
	        this.rootBounds = entry.rootBounds;
	        this.boundingClientRect = entry.boundingClientRect;
	        this.intersectionRect = entry.intersectionRect || getEmptyRect();
	        this.isIntersecting = !!entry.intersectionRect;
	        // Calculates the intersection ratio.
	        const targetRect = this.boundingClientRect;
	        const targetArea = targetRect.width * targetRect.height;
	        const intersectionRect = this.intersectionRect;
	        const intersectionArea = intersectionRect.width * intersectionRect.height;
	        // Sets intersection ratio.
	        if (targetArea) {
	            // Round the intersection ratio to avoid floating point math issues:
	            // https://github.com/w3c/IntersectionObserver/issues/324
	            this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
	        }
	        else {
	            // If area is zero and is intersecting, sets to 1, otherwise to 0
	            this.intersectionRatio = this.isIntersecting ? 1 : 0;
	        }
	    }
	    /**
	     * Creates the global IntersectionObserver constructor.
	     * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
	     * @param {Function} callback The function to be invoked after intersection
	     *     changes have queued. The function is not invoked if the queue has
	     *     been emptied by calling the `takeRecords` method.
	     * @param {Object=} opt_options Optional configuration options.
	     * @constructor
	     */
	    function IntersectionObserver(callback, options = {}) {
	        if (!isFunction(callback)) {
	            throw new Error('callback must be a function');
	        }
	        if (options.root && options.root.nodeType != 1) {
	            throw new Error('root must be an Element');
	        }
	        // Binds and throttles `this._checkForIntersections`.
	        this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
	        // Private properties.
	        this._callback = callback;
	        this._observationTargets = [];
	        this._queuedEntries = [];
	        this._rootMarginValues = this._parseRootMargin(options.rootMargin);
	        // Public properties.
	        this.thresholds = this._initThresholds(options.threshold);
	        this.root = options.root || null;
	        this.rootMargin = this._rootMarginValues.map(function (margin) {
	            return margin.value + margin.unit;
	        }).join(' ');
	    }
	    /**
	     * The minimum interval within which the document will be checked for
	     * intersection changes.
	     */
	    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
	    /**
	     * The frequency in which the polyfill polls for intersection changes.
	     * this can be updated on a per instance basis and must be set prior to
	     * calling `observe` on the first target.
	     */
	    IntersectionObserver.prototype.POLL_INTERVAL = null;
	    /**
	     * Use a mutation observer on the root element
	     * to detect intersection changes.
	     */
	    IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
	    /**
	     * Starts observing a target element for intersection changes based on
	     * the thresholds values.
	     * @param {Element} target The DOM element to observe.
	     */
	    IntersectionObserver.prototype.observe = function (target) {
	        const isTargetAlreadyObserved = this._observationTargets.some(function (item) {
	            return item.element == target;
	        });
	        if (isTargetAlreadyObserved)
	            return;
	        if (!(target && target.nodeType == 1)) {
	            throw new Error('target must be an Element');
	        }
	        this._registerInstance();
	        this._observationTargets.push({ element: target, entry: null });
	        this._monitorIntersections();
	        this._checkForIntersections();
	    };
	    /**
	     * Stops observing a target element for intersection changes.
	     * @param {Element} target The DOM element to observe.
	     */
	    IntersectionObserver.prototype.unobserve = function (target) {
	        this._observationTargets =
	            this._observationTargets.filter(function (item) {
	                return item.element != target;
	            });
	        if (!this._observationTargets.length) {
	            this._unmonitorIntersections();
	            this._unregisterInstance();
	        }
	    };
	    /**
	     * Stops observing all target elements for intersection changes.
	     */
	    IntersectionObserver.prototype.disconnect = function () {
	        this._observationTargets = [];
	        this._unmonitorIntersections();
	        this._unregisterInstance();
	    };
	    /**
	     * Returns any queue entries that have not yet been reported to the
	     * callback and clears the queue. This can be used in conjunction with the
	     * callback to obtain the absolute most up-to-date intersection information.
	     * @return {Array} The currently queued entries.
	     */
	    IntersectionObserver.prototype.takeRecords = function () {
	        const records = this._queuedEntries.slice();
	        this._queuedEntries = [];
	        return records;
	    };
	    /**
	     * Accepts the threshold value from the user configuration object and
	     * returns a sorted array of unique threshold values. If a value is not
	     * between 0 and 1 and error is thrown.
	     * @private
	     * @param {Array|number=} opt_threshold An optional threshold value or
	     *     a list of threshold values, defaulting to [0].
	     * @return {Array} A sorted list of unique and valid threshold values.
	     */
	    IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
	        let threshold = opt_threshold || [0];
	        if (!Array.isArray(threshold))
	            threshold = [threshold];
	        return threshold.sort().filter(function (t, i, a) {
	            if (!isNumber(t) || isNaN(t) || t < 0 || t > 1) {
	                throw new Error('threshold must be a number between 0 and 1 inclusively');
	            }
	            return t !== a[i - 1];
	        });
	    };
	    /**
	     * Accepts the rootMargin value from the user configuration object
	     * and returns an array of the four margin values as an object containing
	     * the value and unit properties. If any of the values are not properly
	     * formatted or use a unit other than px or %, and error is thrown.
	     * @private
	     * @param {string=} opt_rootMargin An optional rootMargin value,
	     *     defaulting to '0px'.
	     * @return {Array<Object>} An array of margin objects with the keys
	     *     value and unit.
	     */
	    IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
	        const marginString = opt_rootMargin || '0px';
	        const margins = marginString.split(/\s+/).map(function (margin) {
	            const parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
	            if (!parts) {
	                throw new Error('rootMargin must be specified in pixels or percent');
	            }
	            return { value: parseFloat(parts[1]), unit: parts[2] };
	        });
	        // Handles shorthand.
	        margins[1] = margins[1] || margins[0];
	        margins[2] = margins[2] || margins[0];
	        margins[3] = margins[3] || margins[1];
	        return margins;
	    };
	    /**
	     * Starts polling for intersection changes if the polling is not already
	     * happening, and if the page's visibility state is visible.
	     * @private
	     */
	    IntersectionObserver.prototype._monitorIntersections = function () {
	        if (!this._monitoringIntersections) {
	            this._monitoringIntersections = true;
	            // If a poll interval is set, use polling instead of listening to
	            // resize and scroll events or DOM mutations.
	            if (this.POLL_INTERVAL) {
	                this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
	            }
	            else {
	                addEvent(window, 'resize', this._checkForIntersections, true);
	                addEvent(document, 'scroll', this._checkForIntersections, true);
	                if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
	                    this._domObserver = new MutationObserver(this._checkForIntersections);
	                    this._domObserver.observe(document, {
	                        attributes: true,
	                        childList: true,
	                        characterData: true,
	                        subtree: true
	                    });
	                }
	            }
	        }
	    };
	    /**
	     * Stops polling for intersection changes.
	     * @private
	     */
	    IntersectionObserver.prototype._unmonitorIntersections = function () {
	        if (this._monitoringIntersections) {
	            this._monitoringIntersections = false;
	            clearInterval(this._monitoringInterval);
	            this._monitoringInterval = null;
	            removeEvent(window, 'resize', this._checkForIntersections, true);
	            removeEvent(document, 'scroll', this._checkForIntersections, true);
	            if (this._domObserver) {
	                this._domObserver.disconnect();
	                this._domObserver = null;
	            }
	        }
	    };
	    /**
	     * Scans each observation target for intersection changes and adds them
	     * to the internal entries queue. If new entries are found, it
	     * schedules the callback to be invoked.
	     * @private
	     */
	    IntersectionObserver.prototype._checkForIntersections = function () {
	        const rootIsInDom = this._rootIsInDom();
	        const rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
	        this._observationTargets.forEach(function (item) {
	            const target = item.element;
	            const targetRect = getBoundingClientRect(target);
	            const rootContainsTarget = this._rootContainsTarget(target);
	            const oldEntry = item.entry;
	            const intersectionRect = rootIsInDom && rootContainsTarget &&
	                this._computeTargetAndRootIntersection(target, rootRect);
	            const newEntry = item.entry = new IntersectionObserverEntry({
	                time: now(),
	                target: target,
	                boundingClientRect: targetRect,
	                rootBounds: rootRect,
	                intersectionRect: intersectionRect,
	                intersectionRatio: -1,
	                isIntersecting: false,
	            });
	            if (!oldEntry) {
	                this._queuedEntries.push(newEntry);
	            }
	            else if (rootIsInDom && rootContainsTarget) {
	                // If the new entry intersection ratio has crossed any of the
	                // thresholds, add a new entry.
	                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
	                    this._queuedEntries.push(newEntry);
	                }
	            }
	            else {
	                // If the root is not in the DOM or target is not contained within
	                // root but the previous entry for this target had an intersection,
	                // add a new record indicating removal.
	                if (oldEntry && oldEntry.isIntersecting) {
	                    this._queuedEntries.push(newEntry);
	                }
	            }
	        }, this);
	        if (this._queuedEntries.length) {
	            this._callback(this.takeRecords(), this);
	        }
	    };
	    /**
	     * Accepts a target and root rect computes the intersection between then
	     * following the algorithm in the spec.
	     * TODO(philipwalton): at this time clip-path is not considered.
	     * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
	     * @param {Element} target The target DOM element
	     * @param {Object} rootRect The bounding rect of the root after being
	     *     expanded by the rootMargin value.
	     * @return {?Object} The final intersection rect object or undefined if no
	     *     intersection is found.
	     * @private
	     */
	    IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
	        // If the element isn't displayed, an intersection can't happen.
	        if (window.getComputedStyle(target).display === 'none')
	            return;
	        const targetRect = getBoundingClientRect(target);
	        let intersectionRect = targetRect;
	        let parent = getParentNode(target);
	        let atRoot = false;
	        while (!atRoot) {
	            let parentRect = null;
	            const parentComputedStyle = parent.nodeType == 1 ?
	                window.getComputedStyle(parent) : {};
	            // If the parent isn't displayed, an intersection can't happen.
	            if (parentComputedStyle.display === 'none')
	                return;
	            if (parent == this.root || parent == document) {
	                atRoot = true;
	                parentRect = rootRect;
	            }
	            else {
	                // If the element has a non-visible overflow, and it's not the <body>
	                // or <html> element, update the intersection rect.
	                // Note: <body> and <html> cannot be clipped to a rect that's not also
	                // the document rect, so no need to compute a new intersection.
	                if (parent != document.body &&
	                    parent != document.documentElement &&
	                    parentComputedStyle.overflow != 'visible') {
	                    parentRect = getBoundingClientRect(parent);
	                }
	            }
	            // If either of the above conditionals set a new parentRect,
	            // calculate new intersection data.
	            if (parentRect) {
	                intersectionRect = computeRectIntersection(parentRect, intersectionRect);
	                if (!intersectionRect)
	                    break;
	            }
	            parent = getParentNode(parent);
	        }
	        return intersectionRect;
	    };
	    /**
	   * Returns the root rect after being expanded by the rootMargin value.
	   * @return {Object} The expanded root rect.
	   * @private
	   */
	    IntersectionObserver.prototype._getRootRect = function () {
	        let rootRect;
	        if (this.root) {
	            rootRect = getBoundingClientRect(this.root);
	        }
	        else {
	            // Use <html>/<body> instead of window since scroll bars affect size.
	            const html = document.documentElement;
	            const body = document.body;
	            rootRect = {
	                top: 0,
	                left: 0,
	                right: html.clientWidth || body.clientWidth,
	                width: html.clientWidth || body.clientWidth,
	                bottom: html.clientHeight || body.clientHeight,
	                height: html.clientHeight || body.clientHeight
	            };
	        }
	        return this._expandRectByRootMargin(rootRect);
	    };
	    /**
	     * Accepts a rect and expands it by the rootMargin value.
	     * @param {Object} rect The rect object to expand.
	     * @return {Object} The expanded rect.
	     * @private
	     */
	    IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
	        const margins = this._rootMarginValues.map(function (margin, i) {
	            return margin.unit === 'px' ? margin.value :
	                margin.value * (i % 2 ? rect.width : rect.height) / 100;
	        });
	        const newRect = {
	            top: rect.top - margins[0],
	            right: rect.right + margins[1],
	            bottom: rect.bottom + margins[2],
	            left: rect.left - margins[3]
	        };
	        newRect.width = newRect.right - newRect.left;
	        newRect.height = newRect.bottom - newRect.top;
	        return newRect;
	    };
	    /**
	     * Accepts an old and new entry and returns true if at least one of the
	     * threshold values has been crossed.
	     * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
	     *    particular target element or null if no previous entry exists.
	     * @param {IntersectionObserverEntry} newEntry The current entry for a
	     *    particular target element.
	     * @return {boolean} Returns true if a any threshold has been crossed.
	     * @private
	     */
	    IntersectionObserver.prototype._hasCrossedThreshold =
	        function (oldEntry, newEntry) {
	            // To make comparing easier, an entry that has a ratio of 0
	            // but does not actually intersect is given a value of -1
	            const oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
	            const newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
	            // Ignore unchanged ratios
	            if (oldRatio === newRatio)
	                return;
	            for (let i = 0; i < this.thresholds.length; i++) {
	                const threshold = this.thresholds[i];
	                // Return true if an entry matches a threshold or if the new ratio
	                // and the old ratio are on the opposite sides of a threshold.
	                if (threshold == oldRatio || threshold == newRatio ||
	                    threshold < oldRatio !== threshold < newRatio) {
	                    return true;
	                }
	            }
	        };
	    /**
	     * Returns whether or not the root element is an element and is in the DOM.
	     * @return {boolean} True if the root element is an element and is in the DOM.
	     * @private
	     */
	    IntersectionObserver.prototype._rootIsInDom = function () {
	        return !this.root || containsDeep(document, this.root);
	    };
	    /**
	     * Returns whether or not the target element is a child of root.
	     * @param {Element} target The target element to check.
	     * @return {boolean} True if the target element is a child of root.
	     * @private
	     */
	    IntersectionObserver.prototype._rootContainsTarget = function (target) {
	        return containsDeep(this.root || document, target);
	    };
	    /**
	     * Adds the instance to the global IntersectionObserver registry if it isn't
	     * already present.
	     * @private
	     */
	    IntersectionObserver.prototype._registerInstance = function () {
	    };
	    /**
	   * Removes the instance from the global IntersectionObserver registry.
	   * @private
	   */
	    IntersectionObserver.prototype._unregisterInstance = function () {
	    };
	    /**
	     * Returns the result of the performance.now() method or null in browsers
	     * that don't support the API.
	     * @return {number} The elapsed time since the page was requested.
	     */
	    function now() {
	        return window.performance && performance.now && performance.now();
	    }
	    /**
	     * Adds an event handler to a DOM node ensuring cross-browser compatibility.
	     * @param {Node} node The DOM node to add the event handler to.
	     * @param {string} event The event name.
	     * @param {Function} fn The event handler to add.
	     * @param {boolean} opt_useCapture Optionally adds the even to the capture
	     *     phase. Note: this only works in modern browsers.
	     */
	    function addEvent(node, event, fn, opt_useCapture) {
	        if (isFunction(node.addEventListener)) {
	            node.addEventListener(event, fn, opt_useCapture || false);
	        }
	        else if (isFunction(node.attachEvent)) {
	            node.attachEvent('on' + event, fn);
	        }
	    }
	    /**
	     * Removes a previously added event handler from a DOM node.
	     * @param {Node} node The DOM node to remove the event handler from.
	     * @param {string} event The event name.
	     * @param {Function} fn The event handler to remove.
	     * @param {boolean} opt_useCapture If the event handler was added with this
	     *     flag set to true, it should be set to true here in order to remove it.
	     */
	    function removeEvent(node, event, fn, opt_useCapture) {
	        if (isFunction(node.removeEventListener)) {
	            node.removeEventListener(event, fn, opt_useCapture || false);
	        }
	        else if (isFunction(node.detatchEvent)) {
	            node.detatchEvent('on' + event, fn);
	        }
	    }
	    /**
	     * Returns the intersection between two rect objects.
	     * @param {Object} rect1 The first rect.
	     * @param {Object} rect2 The second rect.
	     * @return {?Object} The intersection rect or undefined if no intersection
	     *     is found.
	     */
	    function computeRectIntersection(rect1, rect2) {
	        const top = Math.max(rect1.top, rect2.top);
	        const bottom = Math.min(rect1.bottom, rect2.bottom);
	        const left = Math.max(rect1.left, rect2.left);
	        const right = Math.min(rect1.right, rect2.right);
	        const width = right - left;
	        const height = bottom - top;
	        return (width >= 0 && height >= 0) && {
	            top: top,
	            bottom: bottom,
	            left: left,
	            right: right,
	            width: width,
	            height: height
	        };
	    }
	    /**
	     * Shims the native getBoundingClientRect for compatibility with older IE.
	     * @param {Element} el The element whose bounding rect to get.
	     * @return {Object} The (possibly shimmed) rect of the element.
	     */
	    function getBoundingClientRect(el) {
	        let rect;
	        try {
	            rect = el.getBoundingClientRect();
	        }
	        catch (err) {
	            // Ignore Windows 7 IE11 "Unspecified error"
	            // https://github.com/w3c/IntersectionObserver/pull/205
	        }
	        if (!rect)
	            return getEmptyRect();
	        // Older IE
	        if (!(rect.width && rect.height)) {
	            rect = {
	                top: rect.top,
	                right: rect.right,
	                bottom: rect.bottom,
	                left: rect.left,
	                width: rect.right - rect.left,
	                height: rect.bottom - rect.top
	            };
	        }
	        return rect;
	    }
	    /**
	     * Returns an empty rect object. An empty rect is returned when an element
	     * is not in the DOM.
	     * @return {Object} The empty rect.
	     */
	    function getEmptyRect() {
	        return {
	            top: 0,
	            bottom: 0,
	            left: 0,
	            right: 0,
	            width: 0,
	            height: 0
	        };
	    }
	    /**
	     * Checks to see if a parent element contains a child element (including inside
	     * shadow DOM).
	     * @param {Node} parent The parent element.
	     * @param {Node} child The child element.
	     * @return {boolean} True if the parent node contains the child node.
	     */
	    function containsDeep(parent, child) {
	        let node = child;
	        while (node) {
	            if (node == parent)
	                return true;
	            node = getParentNode(node);
	        }
	        return false;
	    }
	    /**
	     * Gets the parent node of an element or its host element if the parent node
	     * is a shadow root.
	     * @param {Node} node The node whose parent to get.
	     * @return {Node|null} The parent node or null if no parent exists.
	     */
	    function getParentNode(node) {
	        const parent = node.parentNode;
	        if (parent && parent.nodeType == 11 && parent.host) {
	            // If the parent is a shadow root, return the host element.
	            return parent.host;
	        }
	        if (parent && parent.assignedSlot) {
	            // If the parent is distributed in a <slot>, return the parent of a slot.
	            return parent.assignedSlot.parentNode;
	        }
	        return parent;
	    }
	    // Exposes the constructors globally.
	    window.IntersectionObserver = IntersectionObserver;
	    window.IntersectionObserverEntry = IntersectionObserverEntry;
	}

	function handleObjectAssignPolyfill() {
	    if (!isFunction(Object.assign)) {
	        // Must be writable: true, enumerable: false, configurable: true
	        Object.assign = function (target) {
	            if (target == null) { // TypeError if undefined or null
	                throw new TypeError('Cannot convert undefined or null to object');
	            }
	            const to = Object(target);
	            for (let index = 1; index < arguments.length; index++) {
	                const nextSource = arguments[index];
	                if (nextSource != null) { // Skip over if undefined or null
	                    for (const nextKey in nextSource) {
	                        // Avoid bugs when hasOwnProperty is shadowed
	                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
	                            to[nextKey] = nextSource[nextKey];
	                        }
	                    }
	                }
	            }
	            return to;
	        };
	    }
	}
	function handleObjectEntriesPolyfill() {
	    if (!isFunction(Object.entries)) {
	        // Must be writable: true, enumerable: false, configurable: true
	        Object.entries = function (obj) {
	            if (obj == null) { // TypeError if undefined or null
	                throw new TypeError('Cannot convert undefined or null to object');
	            }
	            const to = [];
	            if (obj != null) { // Skip over if undefined or null
	                for (const key in obj) {
	                    // Avoid bugs when hasOwnProperty is shadowed
	                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	                        to.push([key, obj[key]]);
	                    }
	                }
	            }
	            return to;
	        };
	    }
	}
	function handleObjectDefinePropertyPolyfill() {
	    if (!isFunction(Object.defineProperties)) {
	        Object.defineProperties = function (obj, properties) {
	            function convertToDescriptor(desc) {
	                function hasProperty(obj, prop) {
	                    return Object.prototype.hasOwnProperty.call(obj, prop);
	                }
	                if (!isObject(desc)) {
	                    throw new TypeError('bad desc');
	                }
	                const d = {};
	                if (hasProperty(desc, 'enumerable'))
	                    d.enumerable = !!desc.enumerable;
	                if (hasProperty(desc, 'configurable')) {
	                    d.configurable = !!desc.configurable;
	                }
	                if (hasProperty(desc, 'value'))
	                    d.value = desc.value;
	                if (hasProperty(desc, 'writable'))
	                    d.writable = !!desc.writable;
	                if (hasProperty(desc, 'get')) {
	                    const g = desc.get;
	                    if (!isFunction(g) && !isUndefined(g)) {
	                        throw new TypeError('bad get');
	                    }
	                    d.get = g;
	                }
	                if (hasProperty(desc, 'set')) {
	                    const s = desc.set;
	                    if (!isFunction(s) && !isUndefined(s)) {
	                        throw new TypeError('bad set');
	                    }
	                    d.set = s;
	                }
	                if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
	                    throw new TypeError('identity-confused descriptor');
	                }
	                return d;
	            }
	            if (!isObject(obj))
	                throw new TypeError('bad obj');
	            properties = Object(properties);
	            const keys = Object.keys(properties);
	            const descs = [];
	            for (let i = 0; i < keys.length; i++) {
	                descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
	            }
	            for (let i = 0; i < descs.length; i++) {
	                Object.defineProperty(obj, descs[i][0], descs[i][1]);
	            }
	            return obj;
	        };
	    }
	}

	function handlePolyfill() {
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Object' || process.env.SUPPORT_TARO_POLYFILL === 'Object.assign') {
	        handleObjectAssignPolyfill();
	    }
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Object' || process.env.SUPPORT_TARO_POLYFILL === 'Object.entries') {
	        handleObjectEntriesPolyfill();
	    }
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Object' || process.env.SUPPORT_TARO_POLYFILL === 'Object.defineProperty') {
	        handleObjectDefinePropertyPolyfill();
	    }
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Array' || process.env.SUPPORT_TARO_POLYFILL === 'Array.find') {
	        handleArrayFindPolyfill();
	    }
	    if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'Array' || process.env.SUPPORT_TARO_POLYFILL === 'Array.includes') {
	        handleArrayIncludesPolyfill();
	    }
	    // Exit early if we're not running in a browser.
	    if (process.env.TARO_PLATFORM === 'web' && isObject(window)) {
	        if (process.env.SUPPORT_TARO_POLYFILL === 'enabled' || process.env.SUPPORT_TARO_POLYFILL === 'IntersectionObserver') {
	            handleIntersectionObserverPolyfill();
	        }
	    }
	}
	if (process.env.SUPPORT_TARO_POLYFILL !== 'disabled' && process.env.TARO_PLATFORM !== 'web') {
	    handlePolyfill();
	}

	const ENV_TYPE = {
	    WEAPP: 'WEAPP',
	    SWAN: 'SWAN',
	    ALIPAY: 'ALIPAY',
	    TT: 'TT',
	    QQ: 'QQ',
	    JD: 'JD',
	    WEB: 'WEB',
	    RN: 'RN',
	    HARMONY: 'HARMONY',
	    QUICKAPP: 'QUICKAPP',
	    HARMONYHYBRID: 'HARMONYHYBRID',
	};
	function getEnv() {
	    if (process.env.TARO_ENV === 'weapp') {
	        return ENV_TYPE.WEAPP;
	    }
	    else if (process.env.TARO_ENV === 'alipay') {
	        return ENV_TYPE.ALIPAY;
	    }
	    else if (process.env.TARO_ENV === 'swan') {
	        return ENV_TYPE.SWAN;
	    }
	    else if (process.env.TARO_ENV === 'tt') {
	        return ENV_TYPE.TT;
	    }
	    else if (process.env.TARO_ENV === 'jd') {
	        return ENV_TYPE.JD;
	    }
	    else if (process.env.TARO_ENV === 'qq') {
	        return ENV_TYPE.QQ;
	    }
	    else if (process.env.TARO_ENV === 'harmony-hybrid') {
	        return ENV_TYPE.HARMONYHYBRID;
	    }
	    else if (process.env.TARO_ENV === 'h5' || process.env.TARO_PLATFORM === 'web') {
	        return ENV_TYPE.WEB;
	    }
	    else if (process.env.TARO_ENV === 'rn') {
	        return ENV_TYPE.RN;
	    }
	    else if (process.env.TARO_ENV === 'harmony' || process.env.TARO_PLATFORM === 'harmony') {
	        return ENV_TYPE.HARMONY;
	    }
	    else if (process.env.TARO_ENV === 'quickapp') {
	        return ENV_TYPE.QUICKAPP;
	    }
	    else {
	        return process.env.TARO_ENV || 'Unknown';
	    }
	}

	class Chain {
	    constructor(requestParams, interceptors, index) {
	        this.index = index || 0;
	        this.requestParams = requestParams || {};
	        this.interceptors = interceptors || [];
	    }
	    proceed(requestParams = {}) {
	        this.requestParams = requestParams;
	        if (this.index >= this.interceptors.length) {
	            throw new Error('chain 参数错误, 请勿直接修改 request.chain');
	        }
	        const nextInterceptor = this._getNextInterceptor();
	        const nextChain = this._getNextChain();
	        const p = nextInterceptor(nextChain);
	        const res = p.catch(err => Promise.reject(err));
	        Object.keys(p).forEach(k => isFunction(p[k]) && (res[k] = p[k]));
	        return res;
	    }
	    _getNextInterceptor() {
	        return this.interceptors[this.index];
	    }
	    _getNextChain() {
	        return new Chain(this.requestParams, this.interceptors, this.index + 1);
	    }
	}

	class Link {
	    constructor(interceptor) {
	        this.taroInterceptor = interceptor;
	        this.chain = new Chain();
	    }
	    request(requestParams) {
	        const chain = this.chain;
	        const taroInterceptor = this.taroInterceptor;
	        chain.interceptors = chain.interceptors
	            .filter(interceptor => interceptor !== taroInterceptor)
	            .concat(taroInterceptor);
	        return chain.proceed(Object.assign({}, requestParams));
	    }
	    addInterceptor(interceptor) {
	        this.chain.interceptors.push(interceptor);
	    }
	    cleanInterceptors() {
	        this.chain = new Chain();
	    }
	}
	function interceptorify(promiseifyApi) {
	    return new Link(function (chain) {
	        return promiseifyApi(chain.requestParams);
	    });
	}

	function timeoutInterceptor(chain) {
	    const requestParams = chain.requestParams;
	    let p;
	    const res = new Promise((resolve, reject) => {
	        const timeout = setTimeout(() => {
	            clearTimeout(timeout);
	            reject(new Error('网络链接超时,请稍后再试！'));
	        }, (requestParams && requestParams.timeout) || 60000);
	        p = chain.proceed(requestParams);
	        p
	            .then(res => {
	            if (!timeout)
	                return;
	            clearTimeout(timeout);
	            resolve(res);
	        })
	            .catch(err => {
	            timeout && clearTimeout(timeout);
	            reject(err);
	        });
	    });
	    // @ts-ignore
	    if (!isUndefined(p) && isFunction(p.abort))
	        res.abort = p.abort;
	    return res;
	}
	function logInterceptor(chain) {
	    const requestParams = chain.requestParams;
	    const { method, data, url } = requestParams;
	    // eslint-disable-next-line no-console
	    console.log(`http ${method || 'GET'} --> ${url} data: `, data);
	    const p = chain.proceed(requestParams);
	    const res = p
	        .then(res => {
	        // eslint-disable-next-line no-console
	        console.log(`http <-- ${url} result:`, res);
	        return res;
	    });
	    // @ts-ignore
	    if (isFunction(p.abort))
	        res.abort = p.abort;
	    return res;
	}

	var interceptors = /*#__PURE__*/Object.freeze({
	  __proto__: null,
	  logInterceptor: logInterceptor,
	  timeoutInterceptor: timeoutInterceptor
	});

	function Behavior(options) {
	    return options;
	}
	function getPreload(current) {
	    return function (key, val) {
	        current.preloadData = isObject(key)
	            ? key
	            : {
	                [key]: val
	            };
	    };
	}
	const defaultDesignWidth = 750;
	const defaultDesignRatio = {
	    640: 2.34 / 2,
	    750: 1,
	    828: 1.81 / 2
	};
	const defaultBaseFontSize = 20;
	const defaultUnitPrecision = 5;
	const defaultTargetUnit = 'rpx';
	function getInitPxTransform(taro) {
	    return function (config) {
	        const { designWidth = defaultDesignWidth, deviceRatio = defaultDesignRatio, baseFontSize = defaultBaseFontSize, targetUnit = defaultTargetUnit, unitPrecision = defaultUnitPrecision, } = config;
	        taro.config = taro.config || {};
	        taro.config.designWidth = designWidth;
	        taro.config.deviceRatio = deviceRatio;
	        taro.config.baseFontSize = baseFontSize;
	        taro.config.targetUnit = targetUnit;
	        taro.config.unitPrecision = unitPrecision;
	    };
	}
	function getPxTransform(taro) {
	    return function (size) {
	        const config = taro.config || {};
	        const baseFontSize = config.baseFontSize;
	        const deviceRatio = config.deviceRatio || defaultDesignRatio;
	        const designWidth = (((input = 0) => isFunction(config.designWidth)
	            ? config.designWidth(input)
	            : config.designWidth || defaultDesignWidth))(size);
	        if (!(designWidth in deviceRatio)) {
	            throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`);
	        }
	        const targetUnit = config.targetUnit || defaultTargetUnit;
	        const unitPrecision = config.unitPrecision || defaultUnitPrecision;
	        const formatSize = ~~size;
	        let rootValue = 1 / deviceRatio[designWidth];
	        switch (targetUnit) {
	            case 'rem':
	                rootValue *= baseFontSize * 2;
	                break;
	            case 'px':
	                rootValue *= 2;
	                break;
	        }
	        let val = formatSize / rootValue;
	        if (unitPrecision >= 0 && unitPrecision <= 100) {
	            val = Number(val.toFixed(unitPrecision));
	        }
	        return val + targetUnit;
	    };
	}

	/* eslint-disable camelcase */
	const Taro$1 = {
	    Behavior,
	    getEnv,
	    ENV_TYPE,
	    Link,
	    interceptors,
	    Current,
	    getCurrentInstance,
	    options,
	    nextTick,
	    eventCenter,
	    Events,
	    getInitPxTransform,
	    interceptorify
	};
	Taro$1.initPxTransform = getInitPxTransform(Taro$1);
	Taro$1.preload = getPreload(Current);
	Taro$1.pxTransform = getPxTransform(Taro$1);

	var index_esm = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': Taro$1
	});

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(index_esm);

	(function (module) {
	const { hooks } = require$$0;
	const taro = require$$1.default;

	if (hooks.isExist('initNativeApi')) {
	  hooks.call('initNativeApi', taro);
	}

	module.exports = taro;
	module.exports.default = module.exports;
	}(taro));

	var Taro = taro.exports;

	var cryptoJs = {exports: {}};

	var core = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory();
		}
	}(commonjsGlobal, function () {

		/*globals window, global, require*/

		/**
		 * CryptoJS core components.
		 */
		var CryptoJS = CryptoJS || (function (Math, undefined$1) {

		    var crypto;

		    // Native crypto from window (Browser)
		    if (typeof window !== 'undefined' && window.crypto) {
		        crypto = window.crypto;
		    }

		    // Native crypto in web worker (Browser)
		    if (typeof self !== 'undefined' && self.crypto) {
		        crypto = self.crypto;
		    }

		    // Native crypto from worker
		    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
		        crypto = globalThis.crypto;
		    }

		    // Native (experimental IE 11) crypto from window (Browser)
		    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
		        crypto = window.msCrypto;
		    }

		    // Native crypto from global (NodeJS)
		    if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
		        crypto = commonjsGlobal.crypto;
		    }

		    // Native crypto import via require (NodeJS)
		    if (!crypto && typeof commonjsRequire === 'function') {
		        try {
		            crypto = require('crypto');
		        } catch (err) {}
		    }

		    /*
		     * Cryptographically secure pseudorandom number generator
		     *
		     * As Math.random() is cryptographically not safe to use
		     */
		    var cryptoSecureRandomInt = function () {
		        if (crypto) {
		            // Use getRandomValues method (Browser)
		            if (typeof crypto.getRandomValues === 'function') {
		                try {
		                    return crypto.getRandomValues(new Uint32Array(1))[0];
		                } catch (err) {}
		            }

		            // Use randomBytes method (NodeJS)
		            if (typeof crypto.randomBytes === 'function') {
		                try {
		                    return crypto.randomBytes(4).readInt32LE();
		                } catch (err) {}
		            }
		        }

		        throw new Error('Native crypto module could not be used to get secure random number.');
		    };

		    /*
		     * Local polyfill of Object.create

		     */
		    var create = Object.create || (function () {
		        function F() {}

		        return function (obj) {
		            var subtype;

		            F.prototype = obj;

		            subtype = new F();

		            F.prototype = null;

		            return subtype;
		        };
		    }());

		    /**
		     * CryptoJS namespace.
		     */
		    var C = {};

		    /**
		     * Library namespace.
		     */
		    var C_lib = C.lib = {};

		    /**
		     * Base object for prototypal inheritance.
		     */
		    var Base = C_lib.Base = (function () {


		        return {
		            /**
		             * Creates a new object that inherits from this object.
		             *
		             * @param {Object} overrides Properties to copy into the new object.
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         field: 'value',
		             *
		             *         method: function () {
		             *         }
		             *     });
		             */
		            extend: function (overrides) {
		                // Spawn
		                var subtype = create(this);

		                // Augment
		                if (overrides) {
		                    subtype.mixIn(overrides);
		                }

		                // Create default initializer
		                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
		                    subtype.init = function () {
		                        subtype.$super.init.apply(this, arguments);
		                    };
		                }

		                // Initializer's prototype is the subtype object
		                subtype.init.prototype = subtype;

		                // Reference supertype
		                subtype.$super = this;

		                return subtype;
		            },

		            /**
		             * Extends this object and runs the init method.
		             * Arguments to create() will be passed to init().
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var instance = MyType.create();
		             */
		            create: function () {
		                var instance = this.extend();
		                instance.init.apply(instance, arguments);

		                return instance;
		            },

		            /**
		             * Initializes a newly created object.
		             * Override this method to add some logic when your objects are created.
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         init: function () {
		             *             // ...
		             *         }
		             *     });
		             */
		            init: function () {
		            },

		            /**
		             * Copies properties into this object.
		             *
		             * @param {Object} properties The properties to mix in.
		             *
		             * @example
		             *
		             *     MyType.mixIn({
		             *         field: 'value'
		             *     });
		             */
		            mixIn: function (properties) {
		                for (var propertyName in properties) {
		                    if (properties.hasOwnProperty(propertyName)) {
		                        this[propertyName] = properties[propertyName];
		                    }
		                }

		                // IE won't copy toString using the loop above
		                if (properties.hasOwnProperty('toString')) {
		                    this.toString = properties.toString;
		                }
		            },

		            /**
		             * Creates a copy of this object.
		             *
		             * @return {Object} The clone.
		             *
		             * @example
		             *
		             *     var clone = instance.clone();
		             */
		            clone: function () {
		                return this.init.prototype.extend(this);
		            }
		        };
		    }());

		    /**
		     * An array of 32-bit words.
		     *
		     * @property {Array} words The array of 32-bit words.
		     * @property {number} sigBytes The number of significant bytes in this word array.
		     */
		    var WordArray = C_lib.WordArray = Base.extend({
		        /**
		         * Initializes a newly created word array.
		         *
		         * @param {Array} words (Optional) An array of 32-bit words.
		         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.create();
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
		         */
		        init: function (words, sigBytes) {
		            words = this.words = words || [];

		            if (sigBytes != undefined$1) {
		                this.sigBytes = sigBytes;
		            } else {
		                this.sigBytes = words.length * 4;
		            }
		        },

		        /**
		         * Converts this word array to a string.
		         *
		         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
		         *
		         * @return {string} The stringified word array.
		         *
		         * @example
		         *
		         *     var string = wordArray + '';
		         *     var string = wordArray.toString();
		         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
		         */
		        toString: function (encoder) {
		            return (encoder || Hex).stringify(this);
		        },

		        /**
		         * Concatenates a word array to this word array.
		         *
		         * @param {WordArray} wordArray The word array to append.
		         *
		         * @return {WordArray} This word array.
		         *
		         * @example
		         *
		         *     wordArray1.concat(wordArray2);
		         */
		        concat: function (wordArray) {
		            // Shortcuts
		            var thisWords = this.words;
		            var thatWords = wordArray.words;
		            var thisSigBytes = this.sigBytes;
		            var thatSigBytes = wordArray.sigBytes;

		            // Clamp excess bits
		            this.clamp();

		            // Concat
		            if (thisSigBytes % 4) {
		                // Copy one byte at a time
		                for (var i = 0; i < thatSigBytes; i++) {
		                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
		                }
		            } else {
		                // Copy one word at a time
		                for (var j = 0; j < thatSigBytes; j += 4) {
		                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
		                }
		            }
		            this.sigBytes += thatSigBytes;

		            // Chainable
		            return this;
		        },

		        /**
		         * Removes insignificant bits.
		         *
		         * @example
		         *
		         *     wordArray.clamp();
		         */
		        clamp: function () {
		            // Shortcuts
		            var words = this.words;
		            var sigBytes = this.sigBytes;

		            // Clamp
		            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
		            words.length = Math.ceil(sigBytes / 4);
		        },

		        /**
		         * Creates a copy of this word array.
		         *
		         * @return {WordArray} The clone.
		         *
		         * @example
		         *
		         *     var clone = wordArray.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone.words = this.words.slice(0);

		            return clone;
		        },

		        /**
		         * Creates a word array filled with random bytes.
		         *
		         * @param {number} nBytes The number of random bytes to generate.
		         *
		         * @return {WordArray} The random word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.random(16);
		         */
		        random: function (nBytes) {
		            var words = [];

		            for (var i = 0; i < nBytes; i += 4) {
		                words.push(cryptoSecureRandomInt());
		            }

		            return new WordArray.init(words, nBytes);
		        }
		    });

		    /**
		     * Encoder namespace.
		     */
		    var C_enc = C.enc = {};

		    /**
		     * Hex encoding strategy.
		     */
		    var Hex = C_enc.Hex = {
		        /**
		         * Converts a word array to a hex string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The hex string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var hexChars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                hexChars.push((bite >>> 4).toString(16));
		                hexChars.push((bite & 0x0f).toString(16));
		            }

		            return hexChars.join('');
		        },

		        /**
		         * Converts a hex string to a word array.
		         *
		         * @param {string} hexStr The hex string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
		         */
		        parse: function (hexStr) {
		            // Shortcut
		            var hexStrLength = hexStr.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < hexStrLength; i += 2) {
		                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
		            }

		            return new WordArray.init(words, hexStrLength / 2);
		        }
		    };

		    /**
		     * Latin1 encoding strategy.
		     */
		    var Latin1 = C_enc.Latin1 = {
		        /**
		         * Converts a word array to a Latin1 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The Latin1 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var latin1Chars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                latin1Chars.push(String.fromCharCode(bite));
		            }

		            return latin1Chars.join('');
		        },

		        /**
		         * Converts a Latin1 string to a word array.
		         *
		         * @param {string} latin1Str The Latin1 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
		         */
		        parse: function (latin1Str) {
		            // Shortcut
		            var latin1StrLength = latin1Str.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < latin1StrLength; i++) {
		                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
		            }

		            return new WordArray.init(words, latin1StrLength);
		        }
		    };

		    /**
		     * UTF-8 encoding strategy.
		     */
		    var Utf8 = C_enc.Utf8 = {
		        /**
		         * Converts a word array to a UTF-8 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-8 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            try {
		                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
		            } catch (e) {
		                throw new Error('Malformed UTF-8 data');
		            }
		        },

		        /**
		         * Converts a UTF-8 string to a word array.
		         *
		         * @param {string} utf8Str The UTF-8 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
		         */
		        parse: function (utf8Str) {
		            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
		        }
		    };

		    /**
		     * Abstract buffered block algorithm template.
		     *
		     * The property blockSize must be implemented in a concrete subtype.
		     *
		     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
		     */
		    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
		        /**
		         * Resets this block algorithm's data buffer to its initial state.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm.reset();
		         */
		        reset: function () {
		            // Initial values
		            this._data = new WordArray.init();
		            this._nDataBytes = 0;
		        },

		        /**
		         * Adds new data to this block algorithm's buffer.
		         *
		         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm._append('data');
		         *     bufferedBlockAlgorithm._append(wordArray);
		         */
		        _append: function (data) {
		            // Convert string to WordArray, else assume WordArray already
		            if (typeof data == 'string') {
		                data = Utf8.parse(data);
		            }

		            // Append
		            this._data.concat(data);
		            this._nDataBytes += data.sigBytes;
		        },

		        /**
		         * Processes available data blocks.
		         *
		         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
		         *
		         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
		         *
		         * @return {WordArray} The processed data.
		         *
		         * @example
		         *
		         *     var processedData = bufferedBlockAlgorithm._process();
		         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
		         */
		        _process: function (doFlush) {
		            var processedWords;

		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;
		            var dataSigBytes = data.sigBytes;
		            var blockSize = this.blockSize;
		            var blockSizeBytes = blockSize * 4;

		            // Count blocks ready
		            var nBlocksReady = dataSigBytes / blockSizeBytes;
		            if (doFlush) {
		                // Round up to include partial blocks
		                nBlocksReady = Math.ceil(nBlocksReady);
		            } else {
		                // Round down to include only full blocks,
		                // less the number of blocks that must remain in the buffer
		                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
		            }

		            // Count words ready
		            var nWordsReady = nBlocksReady * blockSize;

		            // Count bytes ready
		            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

		            // Process blocks
		            if (nWordsReady) {
		                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
		                    // Perform concrete-algorithm logic
		                    this._doProcessBlock(dataWords, offset);
		                }

		                // Remove processed words
		                processedWords = dataWords.splice(0, nWordsReady);
		                data.sigBytes -= nBytesReady;
		            }

		            // Return processed words
		            return new WordArray.init(processedWords, nBytesReady);
		        },

		        /**
		         * Creates a copy of this object.
		         *
		         * @return {Object} The clone.
		         *
		         * @example
		         *
		         *     var clone = bufferedBlockAlgorithm.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone._data = this._data.clone();

		            return clone;
		        },

		        _minBufferSize: 0
		    });

		    /**
		     * Abstract hasher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
		     */
		    C_lib.Hasher = BufferedBlockAlgorithm.extend({
		        /**
		         * Configuration options.
		         */
		        cfg: Base.extend(),

		        /**
		         * Initializes a newly created hasher.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
		         *
		         * @example
		         *
		         *     var hasher = CryptoJS.algo.SHA256.create();
		         */
		        init: function (cfg) {
		            // Apply config defaults
		            this.cfg = this.cfg.extend(cfg);

		            // Set initial values
		            this.reset();
		        },

		        /**
		         * Resets this hasher to its initial state.
		         *
		         * @example
		         *
		         *     hasher.reset();
		         */
		        reset: function () {
		            // Reset data buffer
		            BufferedBlockAlgorithm.reset.call(this);

		            // Perform concrete-hasher logic
		            this._doReset();
		        },

		        /**
		         * Updates this hasher with a message.
		         *
		         * @param {WordArray|string} messageUpdate The message to append.
		         *
		         * @return {Hasher} This hasher.
		         *
		         * @example
		         *
		         *     hasher.update('message');
		         *     hasher.update(wordArray);
		         */
		        update: function (messageUpdate) {
		            // Append
		            this._append(messageUpdate);

		            // Update the hash
		            this._process();

		            // Chainable
		            return this;
		        },

		        /**
		         * Finalizes the hash computation.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} messageUpdate (Optional) A final message update.
		         *
		         * @return {WordArray} The hash.
		         *
		         * @example
		         *
		         *     var hash = hasher.finalize();
		         *     var hash = hasher.finalize('message');
		         *     var hash = hasher.finalize(wordArray);
		         */
		        finalize: function (messageUpdate) {
		            // Final message update
		            if (messageUpdate) {
		                this._append(messageUpdate);
		            }

		            // Perform concrete-hasher logic
		            var hash = this._doFinalize();

		            return hash;
		        },

		        blockSize: 512/32,

		        /**
		         * Creates a shortcut function to a hasher's object interface.
		         *
		         * @param {Hasher} hasher The hasher to create a helper for.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
		         */
		        _createHelper: function (hasher) {
		            return function (message, cfg) {
		                return new hasher.init(cfg).finalize(message);
		            };
		        },

		        /**
		         * Creates a shortcut function to the HMAC's object interface.
		         *
		         * @param {Hasher} hasher The hasher to use in this HMAC helper.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
		         */
		        _createHmacHelper: function (hasher) {
		            return function (message, key) {
		                return new C_algo.HMAC.init(hasher, key).finalize(message);
		            };
		        }
		    });

		    /**
		     * Algorithm namespace.
		     */
		    var C_algo = C.algo = {};

		    return C;
		}(Math));


		return CryptoJS;

	}));
	}(core));

	var x64Core = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (undefined$1) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var X32WordArray = C_lib.WordArray;

		    /**
		     * x64 namespace.
		     */
		    var C_x64 = C.x64 = {};

		    /**
		     * A 64-bit word.
		     */
		    C_x64.Word = Base.extend({
		        /**
		         * Initializes a newly created 64-bit word.
		         *
		         * @param {number} high The high 32 bits.
		         * @param {number} low The low 32 bits.
		         *
		         * @example
		         *
		         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
		         */
		        init: function (high, low) {
		            this.high = high;
		            this.low = low;
		        }

		        /**
		         * Bitwise NOTs this word.
		         *
		         * @return {X64Word} A new x64-Word object after negating.
		         *
		         * @example
		         *
		         *     var negated = x64Word.not();
		         */
		        // not: function () {
		            // var high = ~this.high;
		            // var low = ~this.low;

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Bitwise ANDs this word with the passed word.
		         *
		         * @param {X64Word} word The x64-Word to AND with this word.
		         *
		         * @return {X64Word} A new x64-Word object after ANDing.
		         *
		         * @example
		         *
		         *     var anded = x64Word.and(anotherX64Word);
		         */
		        // and: function (word) {
		            // var high = this.high & word.high;
		            // var low = this.low & word.low;

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Bitwise ORs this word with the passed word.
		         *
		         * @param {X64Word} word The x64-Word to OR with this word.
		         *
		         * @return {X64Word} A new x64-Word object after ORing.
		         *
		         * @example
		         *
		         *     var ored = x64Word.or(anotherX64Word);
		         */
		        // or: function (word) {
		            // var high = this.high | word.high;
		            // var low = this.low | word.low;

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Bitwise XORs this word with the passed word.
		         *
		         * @param {X64Word} word The x64-Word to XOR with this word.
		         *
		         * @return {X64Word} A new x64-Word object after XORing.
		         *
		         * @example
		         *
		         *     var xored = x64Word.xor(anotherX64Word);
		         */
		        // xor: function (word) {
		            // var high = this.high ^ word.high;
		            // var low = this.low ^ word.low;

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Shifts this word n bits to the left.
		         *
		         * @param {number} n The number of bits to shift.
		         *
		         * @return {X64Word} A new x64-Word object after shifting.
		         *
		         * @example
		         *
		         *     var shifted = x64Word.shiftL(25);
		         */
		        // shiftL: function (n) {
		            // if (n < 32) {
		                // var high = (this.high << n) | (this.low >>> (32 - n));
		                // var low = this.low << n;
		            // } else {
		                // var high = this.low << (n - 32);
		                // var low = 0;
		            // }

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Shifts this word n bits to the right.
		         *
		         * @param {number} n The number of bits to shift.
		         *
		         * @return {X64Word} A new x64-Word object after shifting.
		         *
		         * @example
		         *
		         *     var shifted = x64Word.shiftR(7);
		         */
		        // shiftR: function (n) {
		            // if (n < 32) {
		                // var low = (this.low >>> n) | (this.high << (32 - n));
		                // var high = this.high >>> n;
		            // } else {
		                // var low = this.high >>> (n - 32);
		                // var high = 0;
		            // }

		            // return X64Word.create(high, low);
		        // },

		        /**
		         * Rotates this word n bits to the left.
		         *
		         * @param {number} n The number of bits to rotate.
		         *
		         * @return {X64Word} A new x64-Word object after rotating.
		         *
		         * @example
		         *
		         *     var rotated = x64Word.rotL(25);
		         */
		        // rotL: function (n) {
		            // return this.shiftL(n).or(this.shiftR(64 - n));
		        // },

		        /**
		         * Rotates this word n bits to the right.
		         *
		         * @param {number} n The number of bits to rotate.
		         *
		         * @return {X64Word} A new x64-Word object after rotating.
		         *
		         * @example
		         *
		         *     var rotated = x64Word.rotR(7);
		         */
		        // rotR: function (n) {
		            // return this.shiftR(n).or(this.shiftL(64 - n));
		        // },

		        /**
		         * Adds this word with the passed word.
		         *
		         * @param {X64Word} word The x64-Word to add with this word.
		         *
		         * @return {X64Word} A new x64-Word object after adding.
		         *
		         * @example
		         *
		         *     var added = x64Word.add(anotherX64Word);
		         */
		        // add: function (word) {
		            // var low = (this.low + word.low) | 0;
		            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
		            // var high = (this.high + word.high + carry) | 0;

		            // return X64Word.create(high, low);
		        // }
		    });

		    /**
		     * An array of 64-bit words.
		     *
		     * @property {Array} words The array of CryptoJS.x64.Word objects.
		     * @property {number} sigBytes The number of significant bytes in this word array.
		     */
		    C_x64.WordArray = Base.extend({
		        /**
		         * Initializes a newly created word array.
		         *
		         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
		         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.x64.WordArray.create();
		         *
		         *     var wordArray = CryptoJS.x64.WordArray.create([
		         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
		         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
		         *     ]);
		         *
		         *     var wordArray = CryptoJS.x64.WordArray.create([
		         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
		         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
		         *     ], 10);
		         */
		        init: function (words, sigBytes) {
		            words = this.words = words || [];

		            if (sigBytes != undefined$1) {
		                this.sigBytes = sigBytes;
		            } else {
		                this.sigBytes = words.length * 8;
		            }
		        },

		        /**
		         * Converts this 64-bit word array to a 32-bit word array.
		         *
		         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
		         *
		         * @example
		         *
		         *     var x32WordArray = x64WordArray.toX32();
		         */
		        toX32: function () {
		            // Shortcuts
		            var x64Words = this.words;
		            var x64WordsLength = x64Words.length;

		            // Convert
		            var x32Words = [];
		            for (var i = 0; i < x64WordsLength; i++) {
		                var x64Word = x64Words[i];
		                x32Words.push(x64Word.high);
		                x32Words.push(x64Word.low);
		            }

		            return X32WordArray.create(x32Words, this.sigBytes);
		        },

		        /**
		         * Creates a copy of this word array.
		         *
		         * @return {X64WordArray} The clone.
		         *
		         * @example
		         *
		         *     var clone = x64WordArray.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);

		            // Clone "words" array
		            var words = clone.words = this.words.slice(0);

		            // Clone each X64Word object
		            var wordsLength = words.length;
		            for (var i = 0; i < wordsLength; i++) {
		                words[i] = words[i].clone();
		            }

		            return clone;
		        }
		    });
		}());


		return CryptoJS;

	}));
	}(x64Core));

	var libTypedarrays = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Check if typed arrays are supported
		    if (typeof ArrayBuffer != 'function') {
		        return;
		    }

		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;

		    // Reference original init
		    var superInit = WordArray.init;

		    // Augment WordArray.init to handle typed arrays
		    var subInit = WordArray.init = function (typedArray) {
		        // Convert buffers to uint8
		        if (typedArray instanceof ArrayBuffer) {
		            typedArray = new Uint8Array(typedArray);
		        }

		        // Convert other array views to uint8
		        if (
		            typedArray instanceof Int8Array ||
		            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
		            typedArray instanceof Int16Array ||
		            typedArray instanceof Uint16Array ||
		            typedArray instanceof Int32Array ||
		            typedArray instanceof Uint32Array ||
		            typedArray instanceof Float32Array ||
		            typedArray instanceof Float64Array
		        ) {
		            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
		        }

		        // Handle Uint8Array
		        if (typedArray instanceof Uint8Array) {
		            // Shortcut
		            var typedArrayByteLength = typedArray.byteLength;

		            // Extract bytes
		            var words = [];
		            for (var i = 0; i < typedArrayByteLength; i++) {
		                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
		            }

		            // Initialize this word array
		            superInit.call(this, words, typedArrayByteLength);
		        } else {
		            // Else call normal init
		            superInit.apply(this, arguments);
		        }
		    };

		    subInit.prototype = WordArray;
		}());


		return CryptoJS.lib.WordArray;

	}));
	}(libTypedarrays));

	var encUtf16 = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var C_enc = C.enc;

		    /**
		     * UTF-16 BE encoding strategy.
		     */
		    C_enc.Utf16 = C_enc.Utf16BE = {
		        /**
		         * Converts a word array to a UTF-16 BE string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-16 BE string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var utf16Chars = [];
		            for (var i = 0; i < sigBytes; i += 2) {
		                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
		                utf16Chars.push(String.fromCharCode(codePoint));
		            }

		            return utf16Chars.join('');
		        },

		        /**
		         * Converts a UTF-16 BE string to a word array.
		         *
		         * @param {string} utf16Str The UTF-16 BE string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
		         */
		        parse: function (utf16Str) {
		            // Shortcut
		            var utf16StrLength = utf16Str.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < utf16StrLength; i++) {
		                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
		            }

		            return WordArray.create(words, utf16StrLength * 2);
		        }
		    };

		    /**
		     * UTF-16 LE encoding strategy.
		     */
		    C_enc.Utf16LE = {
		        /**
		         * Converts a word array to a UTF-16 LE string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-16 LE string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var utf16Chars = [];
		            for (var i = 0; i < sigBytes; i += 2) {
		                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
		                utf16Chars.push(String.fromCharCode(codePoint));
		            }

		            return utf16Chars.join('');
		        },

		        /**
		         * Converts a UTF-16 LE string to a word array.
		         *
		         * @param {string} utf16Str The UTF-16 LE string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
		         */
		        parse: function (utf16Str) {
		            // Shortcut
		            var utf16StrLength = utf16Str.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < utf16StrLength; i++) {
		                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
		            }

		            return WordArray.create(words, utf16StrLength * 2);
		        }
		    };

		    function swapEndian(word) {
		        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
		    }
		}());


		return CryptoJS.enc.Utf16;

	}));
	}(encUtf16));

	var encBase64 = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var C_enc = C.enc;

		    /**
		     * Base64 encoding strategy.
		     */
		    C_enc.Base64 = {
		        /**
		         * Converts a word array to a Base64 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The Base64 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;
		            var map = this._map;

		            // Clamp excess bits
		            wordArray.clamp();

		            // Convert
		            var base64Chars = [];
		            for (var i = 0; i < sigBytes; i += 3) {
		                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
		                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
		                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

		                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

		                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
		                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
		                }
		            }

		            // Add padding
		            var paddingChar = map.charAt(64);
		            if (paddingChar) {
		                while (base64Chars.length % 4) {
		                    base64Chars.push(paddingChar);
		                }
		            }

		            return base64Chars.join('');
		        },

		        /**
		         * Converts a Base64 string to a word array.
		         *
		         * @param {string} base64Str The Base64 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
		         */
		        parse: function (base64Str) {
		            // Shortcuts
		            var base64StrLength = base64Str.length;
		            var map = this._map;
		            var reverseMap = this._reverseMap;

		            if (!reverseMap) {
		                    reverseMap = this._reverseMap = [];
		                    for (var j = 0; j < map.length; j++) {
		                        reverseMap[map.charCodeAt(j)] = j;
		                    }
		            }

		            // Ignore padding
		            var paddingChar = map.charAt(64);
		            if (paddingChar) {
		                var paddingIndex = base64Str.indexOf(paddingChar);
		                if (paddingIndex !== -1) {
		                    base64StrLength = paddingIndex;
		                }
		            }

		            // Convert
		            return parseLoop(base64Str, base64StrLength, reverseMap);

		        },

		        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
		    };

		    function parseLoop(base64Str, base64StrLength, reverseMap) {
		      var words = [];
		      var nBytes = 0;
		      for (var i = 0; i < base64StrLength; i++) {
		          if (i % 4) {
		              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
		              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
		              var bitsCombined = bits1 | bits2;
		              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
		              nBytes++;
		          }
		      }
		      return WordArray.create(words, nBytes);
		    }
		}());


		return CryptoJS.enc.Base64;

	}));
	}(encBase64));

	var encBase64url = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var C_enc = C.enc;

		    /**
		     * Base64url encoding strategy.
		     */
		    C_enc.Base64url = {
		        /**
		         * Converts a word array to a Base64url string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @param {boolean} urlSafe Whether to use url safe
		         *
		         * @return {string} The Base64url string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
		         */
		        stringify: function (wordArray, urlSafe) {
		            if (urlSafe === undefined) {
		                urlSafe = true;
		            }
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;
		            var map = urlSafe ? this._safe_map : this._map;

		            // Clamp excess bits
		            wordArray.clamp();

		            // Convert
		            var base64Chars = [];
		            for (var i = 0; i < sigBytes; i += 3) {
		                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
		                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
		                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

		                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

		                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
		                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
		                }
		            }

		            // Add padding
		            var paddingChar = map.charAt(64);
		            if (paddingChar) {
		                while (base64Chars.length % 4) {
		                    base64Chars.push(paddingChar);
		                }
		            }

		            return base64Chars.join('');
		        },

		        /**
		         * Converts a Base64url string to a word array.
		         *
		         * @param {string} base64Str The Base64url string.
		         *
		         * @param {boolean} urlSafe Whether to use url safe
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
		         */
		        parse: function (base64Str, urlSafe) {
		            if (urlSafe === undefined) {
		                urlSafe = true;
		            }

		            // Shortcuts
		            var base64StrLength = base64Str.length;
		            var map = urlSafe ? this._safe_map : this._map;
		            var reverseMap = this._reverseMap;

		            if (!reverseMap) {
		                reverseMap = this._reverseMap = [];
		                for (var j = 0; j < map.length; j++) {
		                    reverseMap[map.charCodeAt(j)] = j;
		                }
		            }

		            // Ignore padding
		            var paddingChar = map.charAt(64);
		            if (paddingChar) {
		                var paddingIndex = base64Str.indexOf(paddingChar);
		                if (paddingIndex !== -1) {
		                    base64StrLength = paddingIndex;
		                }
		            }

		            // Convert
		            return parseLoop(base64Str, base64StrLength, reverseMap);

		        },

		        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
		        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
		    };

		    function parseLoop(base64Str, base64StrLength, reverseMap) {
		        var words = [];
		        var nBytes = 0;
		        for (var i = 0; i < base64StrLength; i++) {
		            if (i % 4) {
		                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
		                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
		                var bitsCombined = bits1 | bits2;
		                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
		                nBytes++;
		            }
		        }
		        return WordArray.create(words, nBytes);
		    }
		}());


		return CryptoJS.enc.Base64url;

	}));
	}(encBase64url));

	var md5 = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Constants table
		    var T = [];

		    // Compute constants
		    (function () {
		        for (var i = 0; i < 64; i++) {
		            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
		        }
		    }());

		    /**
		     * MD5 hash algorithm.
		     */
		    var MD5 = C_algo.MD5 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init([
		                0x67452301, 0xefcdab89,
		                0x98badcfe, 0x10325476
		            ]);
		        },

		        _doProcessBlock: function (M, offset) {
		            // Swap endian
		            for (var i = 0; i < 16; i++) {
		                // Shortcuts
		                var offset_i = offset + i;
		                var M_offset_i = M[offset_i];

		                M[offset_i] = (
		                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
		                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
		                );
		            }

		            // Shortcuts
		            var H = this._hash.words;

		            var M_offset_0  = M[offset + 0];
		            var M_offset_1  = M[offset + 1];
		            var M_offset_2  = M[offset + 2];
		            var M_offset_3  = M[offset + 3];
		            var M_offset_4  = M[offset + 4];
		            var M_offset_5  = M[offset + 5];
		            var M_offset_6  = M[offset + 6];
		            var M_offset_7  = M[offset + 7];
		            var M_offset_8  = M[offset + 8];
		            var M_offset_9  = M[offset + 9];
		            var M_offset_10 = M[offset + 10];
		            var M_offset_11 = M[offset + 11];
		            var M_offset_12 = M[offset + 12];
		            var M_offset_13 = M[offset + 13];
		            var M_offset_14 = M[offset + 14];
		            var M_offset_15 = M[offset + 15];

		            // Working variables
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];

		            // Computation
		            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
		            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
		            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
		            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
		            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
		            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
		            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
		            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
		            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
		            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
		            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
		            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
		            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
		            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
		            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
		            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

		            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
		            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
		            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
		            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
		            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
		            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
		            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
		            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
		            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
		            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
		            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
		            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
		            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
		            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
		            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
		            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

		            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
		            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
		            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
		            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
		            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
		            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
		            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
		            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
		            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
		            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
		            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
		            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
		            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
		            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
		            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
		            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

		            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
		            d = II(d, a, b, c, M_offset_7,  10, T[49]);
		            c = II(c, d, a, b, M_offset_14, 15, T[50]);
		            b = II(b, c, d, a, M_offset_5,  21, T[51]);
		            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
		            d = II(d, a, b, c, M_offset_3,  10, T[53]);
		            c = II(c, d, a, b, M_offset_10, 15, T[54]);
		            b = II(b, c, d, a, M_offset_1,  21, T[55]);
		            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
		            d = II(d, a, b, c, M_offset_15, 10, T[57]);
		            c = II(c, d, a, b, M_offset_6,  15, T[58]);
		            b = II(b, c, d, a, M_offset_13, 21, T[59]);
		            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
		            d = II(d, a, b, c, M_offset_11, 10, T[61]);
		            c = II(c, d, a, b, M_offset_2,  15, T[62]);
		            b = II(b, c, d, a, M_offset_9,  21, T[63]);

		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

		            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
		            var nBitsTotalL = nBitsTotal;
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
		                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
		                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
		            );
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
		                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
		                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
		            );

		            data.sigBytes = (dataWords.length + 1) * 4;

		            // Hash final blocks
		            this._process();

		            // Shortcuts
		            var hash = this._hash;
		            var H = hash.words;

		            // Swap endian
		            for (var i = 0; i < 4; i++) {
		                // Shortcut
		                var H_i = H[i];

		                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
		                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
		            }

		            // Return final computed hash
		            return hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });

		    function FF(a, b, c, d, x, s, t) {
		        var n = a + ((b & c) | (~b & d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }

		    function GG(a, b, c, d, x, s, t) {
		        var n = a + ((b & d) | (c & ~d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }

		    function HH(a, b, c, d, x, s, t) {
		        var n = a + (b ^ c ^ d) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }

		    function II(a, b, c, d, x, s, t) {
		        var n = a + (c ^ (b | ~d)) + x + t;
		        return ((n << s) | (n >>> (32 - s))) + b;
		    }

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.MD5('message');
		     *     var hash = CryptoJS.MD5(wordArray);
		     */
		    C.MD5 = Hasher._createHelper(MD5);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacMD5(message, key);
		     */
		    C.HmacMD5 = Hasher._createHmacHelper(MD5);
		}(Math));


		return CryptoJS.MD5;

	}));
	}(md5));

	var sha1 = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Reusable object
		    var W = [];

		    /**
		     * SHA-1 hash algorithm.
		     */
		    var SHA1 = C_algo.SHA1 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init([
		                0x67452301, 0xefcdab89,
		                0x98badcfe, 0x10325476,
		                0xc3d2e1f0
		            ]);
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var H = this._hash.words;

		            // Working variables
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];
		            var e = H[4];

		            // Computation
		            for (var i = 0; i < 80; i++) {
		                if (i < 16) {
		                    W[i] = M[offset + i] | 0;
		                } else {
		                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
		                    W[i] = (n << 1) | (n >>> 31);
		                }

		                var t = ((a << 5) | (a >>> 27)) + e + W[i];
		                if (i < 20) {
		                    t += ((b & c) | (~b & d)) + 0x5a827999;
		                } else if (i < 40) {
		                    t += (b ^ c ^ d) + 0x6ed9eba1;
		                } else if (i < 60) {
		                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
		                } else /* if (i < 80) */ {
		                    t += (b ^ c ^ d) - 0x359d3e2a;
		                }

		                e = d;
		                d = c;
		                c = (b << 30) | (b >>> 2);
		                b = a;
		                a = t;
		            }

		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		            H[4] = (H[4] + e) | 0;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Return final computed hash
		            return this._hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA1('message');
		     *     var hash = CryptoJS.SHA1(wordArray);
		     */
		    C.SHA1 = Hasher._createHelper(SHA1);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA1(message, key);
		     */
		    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
		}());


		return CryptoJS.SHA1;

	}));
	}(sha1));

	var sha256 = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Initialization and round constants tables
		    var H = [];
		    var K = [];

		    // Compute constants
		    (function () {
		        function isPrime(n) {
		            var sqrtN = Math.sqrt(n);
		            for (var factor = 2; factor <= sqrtN; factor++) {
		                if (!(n % factor)) {
		                    return false;
		                }
		            }

		            return true;
		        }

		        function getFractionalBits(n) {
		            return ((n - (n | 0)) * 0x100000000) | 0;
		        }

		        var n = 2;
		        var nPrime = 0;
		        while (nPrime < 64) {
		            if (isPrime(n)) {
		                if (nPrime < 8) {
		                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
		                }
		                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

		                nPrime++;
		            }

		            n++;
		        }
		    }());

		    // Reusable object
		    var W = [];

		    /**
		     * SHA-256 hash algorithm.
		     */
		    var SHA256 = C_algo.SHA256 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init(H.slice(0));
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var H = this._hash.words;

		            // Working variables
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];
		            var e = H[4];
		            var f = H[5];
		            var g = H[6];
		            var h = H[7];

		            // Computation
		            for (var i = 0; i < 64; i++) {
		                if (i < 16) {
		                    W[i] = M[offset + i] | 0;
		                } else {
		                    var gamma0x = W[i - 15];
		                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
		                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
		                                   (gamma0x >>> 3);

		                    var gamma1x = W[i - 2];
		                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
		                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
		                                   (gamma1x >>> 10);

		                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
		                }

		                var ch  = (e & f) ^ (~e & g);
		                var maj = (a & b) ^ (a & c) ^ (b & c);

		                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
		                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

		                var t1 = h + sigma1 + ch + K[i] + W[i];
		                var t2 = sigma0 + maj;

		                h = g;
		                g = f;
		                f = e;
		                e = (d + t1) | 0;
		                d = c;
		                c = b;
		                b = a;
		                a = (t1 + t2) | 0;
		            }

		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		            H[4] = (H[4] + e) | 0;
		            H[5] = (H[5] + f) | 0;
		            H[6] = (H[6] + g) | 0;
		            H[7] = (H[7] + h) | 0;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Return final computed hash
		            return this._hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA256('message');
		     *     var hash = CryptoJS.SHA256(wordArray);
		     */
		    C.SHA256 = Hasher._createHelper(SHA256);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA256(message, key);
		     */
		    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
		}(Math));


		return CryptoJS.SHA256;

	}));
	}(sha256));

	var sha224 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, sha256.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var C_algo = C.algo;
		    var SHA256 = C_algo.SHA256;

		    /**
		     * SHA-224 hash algorithm.
		     */
		    var SHA224 = C_algo.SHA224 = SHA256.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init([
		                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
		                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
		            ]);
		        },

		        _doFinalize: function () {
		            var hash = SHA256._doFinalize.call(this);

		            hash.sigBytes -= 4;

		            return hash;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA224('message');
		     *     var hash = CryptoJS.SHA224(wordArray);
		     */
		    C.SHA224 = SHA256._createHelper(SHA224);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA224(message, key);
		     */
		    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
		}());


		return CryptoJS.SHA224;

	}));
	}(sha224));

	var sha512 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, x64Core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Hasher = C_lib.Hasher;
		    var C_x64 = C.x64;
		    var X64Word = C_x64.Word;
		    var X64WordArray = C_x64.WordArray;
		    var C_algo = C.algo;

		    function X64Word_create() {
		        return X64Word.create.apply(X64Word, arguments);
		    }

		    // Constants
		    var K = [
		        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
		        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
		        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
		        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
		        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
		        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
		        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
		        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
		        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
		        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
		        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
		        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
		        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
		        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
		        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
		        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
		        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
		        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
		        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
		        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
		        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
		        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
		        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
		        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
		        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
		        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
		        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
		        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
		        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
		        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
		        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
		        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
		        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
		        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
		        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
		        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
		        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
		        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
		        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
		        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
		    ];

		    // Reusable objects
		    var W = [];
		    (function () {
		        for (var i = 0; i < 80; i++) {
		            W[i] = X64Word_create();
		        }
		    }());

		    /**
		     * SHA-512 hash algorithm.
		     */
		    var SHA512 = C_algo.SHA512 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new X64WordArray.init([
		                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
		                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
		                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
		                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
		            ]);
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcuts
		            var H = this._hash.words;

		            var H0 = H[0];
		            var H1 = H[1];
		            var H2 = H[2];
		            var H3 = H[3];
		            var H4 = H[4];
		            var H5 = H[5];
		            var H6 = H[6];
		            var H7 = H[7];

		            var H0h = H0.high;
		            var H0l = H0.low;
		            var H1h = H1.high;
		            var H1l = H1.low;
		            var H2h = H2.high;
		            var H2l = H2.low;
		            var H3h = H3.high;
		            var H3l = H3.low;
		            var H4h = H4.high;
		            var H4l = H4.low;
		            var H5h = H5.high;
		            var H5l = H5.low;
		            var H6h = H6.high;
		            var H6l = H6.low;
		            var H7h = H7.high;
		            var H7l = H7.low;

		            // Working variables
		            var ah = H0h;
		            var al = H0l;
		            var bh = H1h;
		            var bl = H1l;
		            var ch = H2h;
		            var cl = H2l;
		            var dh = H3h;
		            var dl = H3l;
		            var eh = H4h;
		            var el = H4l;
		            var fh = H5h;
		            var fl = H5l;
		            var gh = H6h;
		            var gl = H6l;
		            var hh = H7h;
		            var hl = H7l;

		            // Rounds
		            for (var i = 0; i < 80; i++) {
		                var Wil;
		                var Wih;

		                // Shortcut
		                var Wi = W[i];

		                // Extend message
		                if (i < 16) {
		                    Wih = Wi.high = M[offset + i * 2]     | 0;
		                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
		                } else {
		                    // Gamma0
		                    var gamma0x  = W[i - 15];
		                    var gamma0xh = gamma0x.high;
		                    var gamma0xl = gamma0x.low;
		                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
		                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

		                    // Gamma1
		                    var gamma1x  = W[i - 2];
		                    var gamma1xh = gamma1x.high;
		                    var gamma1xl = gamma1x.low;
		                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
		                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

		                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
		                    var Wi7  = W[i - 7];
		                    var Wi7h = Wi7.high;
		                    var Wi7l = Wi7.low;

		                    var Wi16  = W[i - 16];
		                    var Wi16h = Wi16.high;
		                    var Wi16l = Wi16.low;

		                    Wil = gamma0l + Wi7l;
		                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
		                    Wil = Wil + gamma1l;
		                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
		                    Wil = Wil + Wi16l;
		                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

		                    Wi.high = Wih;
		                    Wi.low  = Wil;
		                }

		                var chh  = (eh & fh) ^ (~eh & gh);
		                var chl  = (el & fl) ^ (~el & gl);
		                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
		                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

		                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
		                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
		                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
		                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

		                // t1 = h + sigma1 + ch + K[i] + W[i]
		                var Ki  = K[i];
		                var Kih = Ki.high;
		                var Kil = Ki.low;

		                var t1l = hl + sigma1l;
		                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
		                var t1l = t1l + chl;
		                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
		                var t1l = t1l + Kil;
		                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
		                var t1l = t1l + Wil;
		                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

		                // t2 = sigma0 + maj
		                var t2l = sigma0l + majl;
		                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

		                // Update working variables
		                hh = gh;
		                hl = gl;
		                gh = fh;
		                gl = fl;
		                fh = eh;
		                fl = el;
		                el = (dl + t1l) | 0;
		                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
		                dh = ch;
		                dl = cl;
		                ch = bh;
		                cl = bl;
		                bh = ah;
		                bl = al;
		                al = (t1l + t2l) | 0;
		                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
		            }

		            // Intermediate hash value
		            H0l = H0.low  = (H0l + al);
		            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
		            H1l = H1.low  = (H1l + bl);
		            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
		            H2l = H2.low  = (H2l + cl);
		            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
		            H3l = H3.low  = (H3l + dl);
		            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
		            H4l = H4.low  = (H4l + el);
		            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
		            H5l = H5.low  = (H5l + fl);
		            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
		            H6l = H6.low  = (H6l + gl);
		            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
		            H7l = H7.low  = (H7l + hl);
		            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
		            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Convert hash to 32-bit word array before returning
		            var hash = this._hash.toX32();

		            // Return final computed hash
		            return hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        },

		        blockSize: 1024/32
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA512('message');
		     *     var hash = CryptoJS.SHA512(wordArray);
		     */
		    C.SHA512 = Hasher._createHelper(SHA512);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA512(message, key);
		     */
		    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
		}());


		return CryptoJS.SHA512;

	}));
	}(sha512));

	var sha384 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, x64Core.exports, sha512.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_x64 = C.x64;
		    var X64Word = C_x64.Word;
		    var X64WordArray = C_x64.WordArray;
		    var C_algo = C.algo;
		    var SHA512 = C_algo.SHA512;

		    /**
		     * SHA-384 hash algorithm.
		     */
		    var SHA384 = C_algo.SHA384 = SHA512.extend({
		        _doReset: function () {
		            this._hash = new X64WordArray.init([
		                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
		                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
		                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
		                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
		            ]);
		        },

		        _doFinalize: function () {
		            var hash = SHA512._doFinalize.call(this);

		            hash.sigBytes -= 16;

		            return hash;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA384('message');
		     *     var hash = CryptoJS.SHA384(wordArray);
		     */
		    C.SHA384 = SHA512._createHelper(SHA384);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA384(message, key);
		     */
		    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
		}());


		return CryptoJS.SHA384;

	}));
	}(sha384));

	var sha3 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, x64Core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_x64 = C.x64;
		    var X64Word = C_x64.Word;
		    var C_algo = C.algo;

		    // Constants tables
		    var RHO_OFFSETS = [];
		    var PI_INDEXES  = [];
		    var ROUND_CONSTANTS = [];

		    // Compute Constants
		    (function () {
		        // Compute rho offset constants
		        var x = 1, y = 0;
		        for (var t = 0; t < 24; t++) {
		            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

		            var newX = y % 5;
		            var newY = (2 * x + 3 * y) % 5;
		            x = newX;
		            y = newY;
		        }

		        // Compute pi index constants
		        for (var x = 0; x < 5; x++) {
		            for (var y = 0; y < 5; y++) {
		                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
		            }
		        }

		        // Compute round constants
		        var LFSR = 0x01;
		        for (var i = 0; i < 24; i++) {
		            var roundConstantMsw = 0;
		            var roundConstantLsw = 0;

		            for (var j = 0; j < 7; j++) {
		                if (LFSR & 0x01) {
		                    var bitPosition = (1 << j) - 1;
		                    if (bitPosition < 32) {
		                        roundConstantLsw ^= 1 << bitPosition;
		                    } else /* if (bitPosition >= 32) */ {
		                        roundConstantMsw ^= 1 << (bitPosition - 32);
		                    }
		                }

		                // Compute next LFSR
		                if (LFSR & 0x80) {
		                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
		                    LFSR = (LFSR << 1) ^ 0x71;
		                } else {
		                    LFSR <<= 1;
		                }
		            }

		            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
		        }
		    }());

		    // Reusable objects for temporary values
		    var T = [];
		    (function () {
		        for (var i = 0; i < 25; i++) {
		            T[i] = X64Word.create();
		        }
		    }());

		    /**
		     * SHA-3 hash algorithm.
		     */
		    var SHA3 = C_algo.SHA3 = Hasher.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {number} outputLength
		         *   The desired number of bits in the output hash.
		         *   Only values permitted are: 224, 256, 384, 512.
		         *   Default: 512
		         */
		        cfg: Hasher.cfg.extend({
		            outputLength: 512
		        }),

		        _doReset: function () {
		            var state = this._state = [];
		            for (var i = 0; i < 25; i++) {
		                state[i] = new X64Word.init();
		            }

		            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcuts
		            var state = this._state;
		            var nBlockSizeLanes = this.blockSize / 2;

		            // Absorb
		            for (var i = 0; i < nBlockSizeLanes; i++) {
		                // Shortcuts
		                var M2i  = M[offset + 2 * i];
		                var M2i1 = M[offset + 2 * i + 1];

		                // Swap endian
		                M2i = (
		                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
		                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
		                );
		                M2i1 = (
		                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
		                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
		                );

		                // Absorb message into state
		                var lane = state[i];
		                lane.high ^= M2i1;
		                lane.low  ^= M2i;
		            }

		            // Rounds
		            for (var round = 0; round < 24; round++) {
		                // Theta
		                for (var x = 0; x < 5; x++) {
		                    // Mix column lanes
		                    var tMsw = 0, tLsw = 0;
		                    for (var y = 0; y < 5; y++) {
		                        var lane = state[x + 5 * y];
		                        tMsw ^= lane.high;
		                        tLsw ^= lane.low;
		                    }

		                    // Temporary values
		                    var Tx = T[x];
		                    Tx.high = tMsw;
		                    Tx.low  = tLsw;
		                }
		                for (var x = 0; x < 5; x++) {
		                    // Shortcuts
		                    var Tx4 = T[(x + 4) % 5];
		                    var Tx1 = T[(x + 1) % 5];
		                    var Tx1Msw = Tx1.high;
		                    var Tx1Lsw = Tx1.low;

		                    // Mix surrounding columns
		                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
		                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
		                    for (var y = 0; y < 5; y++) {
		                        var lane = state[x + 5 * y];
		                        lane.high ^= tMsw;
		                        lane.low  ^= tLsw;
		                    }
		                }

		                // Rho Pi
		                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
		                    var tMsw;
		                    var tLsw;

		                    // Shortcuts
		                    var lane = state[laneIndex];
		                    var laneMsw = lane.high;
		                    var laneLsw = lane.low;
		                    var rhoOffset = RHO_OFFSETS[laneIndex];

		                    // Rotate lanes
		                    if (rhoOffset < 32) {
		                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
		                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
		                    } else /* if (rhoOffset >= 32) */ {
		                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
		                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
		                    }

		                    // Transpose lanes
		                    var TPiLane = T[PI_INDEXES[laneIndex]];
		                    TPiLane.high = tMsw;
		                    TPiLane.low  = tLsw;
		                }

		                // Rho pi at x = y = 0
		                var T0 = T[0];
		                var state0 = state[0];
		                T0.high = state0.high;
		                T0.low  = state0.low;

		                // Chi
		                for (var x = 0; x < 5; x++) {
		                    for (var y = 0; y < 5; y++) {
		                        // Shortcuts
		                        var laneIndex = x + 5 * y;
		                        var lane = state[laneIndex];
		                        var TLane = T[laneIndex];
		                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
		                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

		                        // Mix rows
		                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
		                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
		                    }
		                }

		                // Iota
		                var lane = state[0];
		                var roundConstant = ROUND_CONSTANTS[round];
		                lane.high ^= roundConstant.high;
		                lane.low  ^= roundConstant.low;
		            }
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;
		            this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;
		            var blockSizeBits = this.blockSize * 32;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
		            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Shortcuts
		            var state = this._state;
		            var outputLengthBytes = this.cfg.outputLength / 8;
		            var outputLengthLanes = outputLengthBytes / 8;

		            // Squeeze
		            var hashWords = [];
		            for (var i = 0; i < outputLengthLanes; i++) {
		                // Shortcuts
		                var lane = state[i];
		                var laneMsw = lane.high;
		                var laneLsw = lane.low;

		                // Swap endian
		                laneMsw = (
		                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
		                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
		                );
		                laneLsw = (
		                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
		                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
		                );

		                // Squeeze state to retrieve hash
		                hashWords.push(laneLsw);
		                hashWords.push(laneMsw);
		            }

		            // Return final computed hash
		            return new WordArray.init(hashWords, outputLengthBytes);
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);

		            var state = clone._state = this._state.slice(0);
		            for (var i = 0; i < 25; i++) {
		                state[i] = state[i].clone();
		            }

		            return clone;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA3('message');
		     *     var hash = CryptoJS.SHA3(wordArray);
		     */
		    C.SHA3 = Hasher._createHelper(SHA3);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA3(message, key);
		     */
		    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
		}(Math));


		return CryptoJS.SHA3;

	}));
	}(sha3));

	var ripemd160 = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/** @preserve
		(c) 2012 by Cédric Mesnil. All rights reserved.

		Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

		    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
		    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

		THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Constants table
		    var _zl = WordArray.create([
		        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
		        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
		        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
		        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
		        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
		    var _zr = WordArray.create([
		        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
		        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
		        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
		        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
		        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
		    var _sl = WordArray.create([
		         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
		        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
		        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
		          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
		        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
		    var _sr = WordArray.create([
		        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
		        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
		        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
		        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
		        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

		    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
		    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

		    /**
		     * RIPEMD160 hash algorithm.
		     */
		    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
		        _doReset: function () {
		            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
		        },

		        _doProcessBlock: function (M, offset) {

		            // Swap endian
		            for (var i = 0; i < 16; i++) {
		                // Shortcuts
		                var offset_i = offset + i;
		                var M_offset_i = M[offset_i];

		                // Swap
		                M[offset_i] = (
		                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
		                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
		                );
		            }
		            // Shortcut
		            var H  = this._hash.words;
		            var hl = _hl.words;
		            var hr = _hr.words;
		            var zl = _zl.words;
		            var zr = _zr.words;
		            var sl = _sl.words;
		            var sr = _sr.words;

		            // Working variables
		            var al, bl, cl, dl, el;
		            var ar, br, cr, dr, er;

		            ar = al = H[0];
		            br = bl = H[1];
		            cr = cl = H[2];
		            dr = dl = H[3];
		            er = el = H[4];
		            // Computation
		            var t;
		            for (var i = 0; i < 80; i += 1) {
		                t = (al +  M[offset+zl[i]])|0;
		                if (i<16){
			            t +=  f1(bl,cl,dl) + hl[0];
		                } else if (i<32) {
			            t +=  f2(bl,cl,dl) + hl[1];
		                } else if (i<48) {
			            t +=  f3(bl,cl,dl) + hl[2];
		                } else if (i<64) {
			            t +=  f4(bl,cl,dl) + hl[3];
		                } else {// if (i<80) {
			            t +=  f5(bl,cl,dl) + hl[4];
		                }
		                t = t|0;
		                t =  rotl(t,sl[i]);
		                t = (t+el)|0;
		                al = el;
		                el = dl;
		                dl = rotl(cl, 10);
		                cl = bl;
		                bl = t;

		                t = (ar + M[offset+zr[i]])|0;
		                if (i<16){
			            t +=  f5(br,cr,dr) + hr[0];
		                } else if (i<32) {
			            t +=  f4(br,cr,dr) + hr[1];
		                } else if (i<48) {
			            t +=  f3(br,cr,dr) + hr[2];
		                } else if (i<64) {
			            t +=  f2(br,cr,dr) + hr[3];
		                } else {// if (i<80) {
			            t +=  f1(br,cr,dr) + hr[4];
		                }
		                t = t|0;
		                t =  rotl(t,sr[i]) ;
		                t = (t+er)|0;
		                ar = er;
		                er = dr;
		                dr = rotl(cr, 10);
		                cr = br;
		                br = t;
		            }
		            // Intermediate hash value
		            t    = (H[1] + cl + dr)|0;
		            H[1] = (H[2] + dl + er)|0;
		            H[2] = (H[3] + el + ar)|0;
		            H[3] = (H[4] + al + br)|0;
		            H[4] = (H[0] + bl + cr)|0;
		            H[0] =  t;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
		                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
		                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
		            );
		            data.sigBytes = (dataWords.length + 1) * 4;

		            // Hash final blocks
		            this._process();

		            // Shortcuts
		            var hash = this._hash;
		            var H = hash.words;

		            // Swap endian
		            for (var i = 0; i < 5; i++) {
		                // Shortcut
		                var H_i = H[i];

		                // Swap
		                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
		                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
		            }

		            // Return final computed hash
		            return hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });


		    function f1(x, y, z) {
		        return ((x) ^ (y) ^ (z));

		    }

		    function f2(x, y, z) {
		        return (((x)&(y)) | ((~x)&(z)));
		    }

		    function f3(x, y, z) {
		        return (((x) | (~(y))) ^ (z));
		    }

		    function f4(x, y, z) {
		        return (((x) & (z)) | ((y)&(~(z))));
		    }

		    function f5(x, y, z) {
		        return ((x) ^ ((y) |(~(z))));

		    }

		    function rotl(x,n) {
		        return (x<<n) | (x>>>(32-n));
		    }


		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.RIPEMD160('message');
		     *     var hash = CryptoJS.RIPEMD160(wordArray);
		     */
		    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
		     */
		    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
		}());


		return CryptoJS.RIPEMD160;

	}));
	}(ripemd160));

	var hmac = {exports: {}};

	(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var C_enc = C.enc;
		    var Utf8 = C_enc.Utf8;
		    var C_algo = C.algo;

		    /**
		     * HMAC algorithm.
		     */
		    C_algo.HMAC = Base.extend({
		        /**
		         * Initializes a newly created HMAC.
		         *
		         * @param {Hasher} hasher The hash algorithm to use.
		         * @param {WordArray|string} key The secret key.
		         *
		         * @example
		         *
		         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
		         */
		        init: function (hasher, key) {
		            // Init hasher
		            hasher = this._hasher = new hasher.init();

		            // Convert string to WordArray, else assume WordArray already
		            if (typeof key == 'string') {
		                key = Utf8.parse(key);
		            }

		            // Shortcuts
		            var hasherBlockSize = hasher.blockSize;
		            var hasherBlockSizeBytes = hasherBlockSize * 4;

		            // Allow arbitrary length keys
		            if (key.sigBytes > hasherBlockSizeBytes) {
		                key = hasher.finalize(key);
		            }

		            // Clamp excess bits
		            key.clamp();

		            // Clone key for inner and outer pads
		            var oKey = this._oKey = key.clone();
		            var iKey = this._iKey = key.clone();

		            // Shortcuts
		            var oKeyWords = oKey.words;
		            var iKeyWords = iKey.words;

		            // XOR keys with pad constants
		            for (var i = 0; i < hasherBlockSize; i++) {
		                oKeyWords[i] ^= 0x5c5c5c5c;
		                iKeyWords[i] ^= 0x36363636;
		            }
		            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

		            // Set initial values
		            this.reset();
		        },

		        /**
		         * Resets this HMAC to its initial state.
		         *
		         * @example
		         *
		         *     hmacHasher.reset();
		         */
		        reset: function () {
		            // Shortcut
		            var hasher = this._hasher;

		            // Reset
		            hasher.reset();
		            hasher.update(this._iKey);
		        },

		        /**
		         * Updates this HMAC with a message.
		         *
		         * @param {WordArray|string} messageUpdate The message to append.
		         *
		         * @return {HMAC} This HMAC instance.
		         *
		         * @example
		         *
		         *     hmacHasher.update('message');
		         *     hmacHasher.update(wordArray);
		         */
		        update: function (messageUpdate) {
		            this._hasher.update(messageUpdate);

		            // Chainable
		            return this;
		        },

		        /**
		         * Finalizes the HMAC computation.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} messageUpdate (Optional) A final message update.
		         *
		         * @return {WordArray} The HMAC.
		         *
		         * @example
		         *
		         *     var hmac = hmacHasher.finalize();
		         *     var hmac = hmacHasher.finalize('message');
		         *     var hmac = hmacHasher.finalize(wordArray);
		         */
		        finalize: function (messageUpdate) {
		            // Shortcut
		            var hasher = this._hasher;

		            // Compute HMAC
		            var innerHash = hasher.finalize(messageUpdate);
		            hasher.reset();
		            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

		            return hmac;
		        }
		    });
		}());


	}));
	}(hmac));

	var pbkdf2 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, sha256.exports, hmac.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var WordArray = C_lib.WordArray;
		    var C_algo = C.algo;
		    var SHA256 = C_algo.SHA256;
		    var HMAC = C_algo.HMAC;

		    /**
		     * Password-Based Key Derivation Function 2 algorithm.
		     */
		    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
		         * @property {Hasher} hasher The hasher to use. Default: SHA256
		         * @property {number} iterations The number of iterations to perform. Default: 250000
		         */
		        cfg: Base.extend({
		            keySize: 128/32,
		            hasher: SHA256,
		            iterations: 250000
		        }),

		        /**
		         * Initializes a newly created key derivation function.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
		         *
		         * @example
		         *
		         *     var kdf = CryptoJS.algo.PBKDF2.create();
		         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
		         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
		         */
		        init: function (cfg) {
		            this.cfg = this.cfg.extend(cfg);
		        },

		        /**
		         * Computes the Password-Based Key Derivation Function 2.
		         *
		         * @param {WordArray|string} password The password.
		         * @param {WordArray|string} salt A salt.
		         *
		         * @return {WordArray} The derived key.
		         *
		         * @example
		         *
		         *     var key = kdf.compute(password, salt);
		         */
		        compute: function (password, salt) {
		            // Shortcut
		            var cfg = this.cfg;

		            // Init HMAC
		            var hmac = HMAC.create(cfg.hasher, password);

		            // Initial values
		            var derivedKey = WordArray.create();
		            var blockIndex = WordArray.create([0x00000001]);

		            // Shortcuts
		            var derivedKeyWords = derivedKey.words;
		            var blockIndexWords = blockIndex.words;
		            var keySize = cfg.keySize;
		            var iterations = cfg.iterations;

		            // Generate key
		            while (derivedKeyWords.length < keySize) {
		                var block = hmac.update(salt).finalize(blockIndex);
		                hmac.reset();

		                // Shortcuts
		                var blockWords = block.words;
		                var blockWordsLength = blockWords.length;

		                // Iterations
		                var intermediate = block;
		                for (var i = 1; i < iterations; i++) {
		                    intermediate = hmac.finalize(intermediate);
		                    hmac.reset();

		                    // Shortcut
		                    var intermediateWords = intermediate.words;

		                    // XOR intermediate with block
		                    for (var j = 0; j < blockWordsLength; j++) {
		                        blockWords[j] ^= intermediateWords[j];
		                    }
		                }

		                derivedKey.concat(block);
		                blockIndexWords[0]++;
		            }
		            derivedKey.sigBytes = keySize * 4;

		            return derivedKey;
		        }
		    });

		    /**
		     * Computes the Password-Based Key Derivation Function 2.
		     *
		     * @param {WordArray|string} password The password.
		     * @param {WordArray|string} salt A salt.
		     * @param {Object} cfg (Optional) The configuration options to use for this computation.
		     *
		     * @return {WordArray} The derived key.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var key = CryptoJS.PBKDF2(password, salt);
		     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
		     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
		     */
		    C.PBKDF2 = function (password, salt, cfg) {
		        return PBKDF2.create(cfg).compute(password, salt);
		    };
		}());


		return CryptoJS.PBKDF2;

	}));
	}(pbkdf2));

	var evpkdf = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, sha1.exports, hmac.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var WordArray = C_lib.WordArray;
		    var C_algo = C.algo;
		    var MD5 = C_algo.MD5;

		    /**
		     * This key derivation function is meant to conform with EVP_BytesToKey.
		     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
		     */
		    var EvpKDF = C_algo.EvpKDF = Base.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
		         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
		         * @property {number} iterations The number of iterations to perform. Default: 1
		         */
		        cfg: Base.extend({
		            keySize: 128/32,
		            hasher: MD5,
		            iterations: 1
		        }),

		        /**
		         * Initializes a newly created key derivation function.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
		         *
		         * @example
		         *
		         *     var kdf = CryptoJS.algo.EvpKDF.create();
		         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
		         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
		         */
		        init: function (cfg) {
		            this.cfg = this.cfg.extend(cfg);
		        },

		        /**
		         * Derives a key from a password.
		         *
		         * @param {WordArray|string} password The password.
		         * @param {WordArray|string} salt A salt.
		         *
		         * @return {WordArray} The derived key.
		         *
		         * @example
		         *
		         *     var key = kdf.compute(password, salt);
		         */
		        compute: function (password, salt) {
		            var block;

		            // Shortcut
		            var cfg = this.cfg;

		            // Init hasher
		            var hasher = cfg.hasher.create();

		            // Initial values
		            var derivedKey = WordArray.create();

		            // Shortcuts
		            var derivedKeyWords = derivedKey.words;
		            var keySize = cfg.keySize;
		            var iterations = cfg.iterations;

		            // Generate key
		            while (derivedKeyWords.length < keySize) {
		                if (block) {
		                    hasher.update(block);
		                }
		                block = hasher.update(password).finalize(salt);
		                hasher.reset();

		                // Iterations
		                for (var i = 1; i < iterations; i++) {
		                    block = hasher.finalize(block);
		                    hasher.reset();
		                }

		                derivedKey.concat(block);
		            }
		            derivedKey.sigBytes = keySize * 4;

		            return derivedKey;
		        }
		    });

		    /**
		     * Derives a key from a password.
		     *
		     * @param {WordArray|string} password The password.
		     * @param {WordArray|string} salt A salt.
		     * @param {Object} cfg (Optional) The configuration options to use for this computation.
		     *
		     * @return {WordArray} The derived key.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var key = CryptoJS.EvpKDF(password, salt);
		     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
		     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
		     */
		    C.EvpKDF = function (password, salt, cfg) {
		        return EvpKDF.create(cfg).compute(password, salt);
		    };
		}());


		return CryptoJS.EvpKDF;

	}));
	}(evpkdf));

	var cipherCore = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, evpkdf.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Cipher core components.
		 */
		CryptoJS.lib.Cipher || (function (undefined$1) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var Base = C_lib.Base;
		    var WordArray = C_lib.WordArray;
		    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
		    var C_enc = C.enc;
		    C_enc.Utf8;
		    var Base64 = C_enc.Base64;
		    var C_algo = C.algo;
		    var EvpKDF = C_algo.EvpKDF;

		    /**
		     * Abstract base cipher template.
		     *
		     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
		     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
		     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
		     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
		     */
		    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {WordArray} iv The IV to use for this operation.
		         */
		        cfg: Base.extend(),

		        /**
		         * Creates this cipher in encryption mode.
		         *
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {Cipher} A cipher instance.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
		         */
		        createEncryptor: function (key, cfg) {
		            return this.create(this._ENC_XFORM_MODE, key, cfg);
		        },

		        /**
		         * Creates this cipher in decryption mode.
		         *
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {Cipher} A cipher instance.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
		         */
		        createDecryptor: function (key, cfg) {
		            return this.create(this._DEC_XFORM_MODE, key, cfg);
		        },

		        /**
		         * Initializes a newly created cipher.
		         *
		         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @example
		         *
		         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
		         */
		        init: function (xformMode, key, cfg) {
		            // Apply config defaults
		            this.cfg = this.cfg.extend(cfg);

		            // Store transform mode and key
		            this._xformMode = xformMode;
		            this._key = key;

		            // Set initial values
		            this.reset();
		        },

		        /**
		         * Resets this cipher to its initial state.
		         *
		         * @example
		         *
		         *     cipher.reset();
		         */
		        reset: function () {
		            // Reset data buffer
		            BufferedBlockAlgorithm.reset.call(this);

		            // Perform concrete-cipher logic
		            this._doReset();
		        },

		        /**
		         * Adds data to be encrypted or decrypted.
		         *
		         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
		         *
		         * @return {WordArray} The data after processing.
		         *
		         * @example
		         *
		         *     var encrypted = cipher.process('data');
		         *     var encrypted = cipher.process(wordArray);
		         */
		        process: function (dataUpdate) {
		            // Append
		            this._append(dataUpdate);

		            // Process available blocks
		            return this._process();
		        },

		        /**
		         * Finalizes the encryption or decryption process.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
		         *
		         * @return {WordArray} The data after final processing.
		         *
		         * @example
		         *
		         *     var encrypted = cipher.finalize();
		         *     var encrypted = cipher.finalize('data');
		         *     var encrypted = cipher.finalize(wordArray);
		         */
		        finalize: function (dataUpdate) {
		            // Final data update
		            if (dataUpdate) {
		                this._append(dataUpdate);
		            }

		            // Perform concrete-cipher logic
		            var finalProcessedData = this._doFinalize();

		            return finalProcessedData;
		        },

		        keySize: 128/32,

		        ivSize: 128/32,

		        _ENC_XFORM_MODE: 1,

		        _DEC_XFORM_MODE: 2,

		        /**
		         * Creates shortcut functions to a cipher's object interface.
		         *
		         * @param {Cipher} cipher The cipher to create a helper for.
		         *
		         * @return {Object} An object with encrypt and decrypt shortcut functions.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
		         */
		        _createHelper: (function () {
		            function selectCipherStrategy(key) {
		                if (typeof key == 'string') {
		                    return PasswordBasedCipher;
		                } else {
		                    return SerializableCipher;
		                }
		            }

		            return function (cipher) {
		                return {
		                    encrypt: function (message, key, cfg) {
		                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
		                    },

		                    decrypt: function (ciphertext, key, cfg) {
		                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
		                    }
		                };
		            };
		        }())
		    });

		    /**
		     * Abstract base stream cipher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
		     */
		    C_lib.StreamCipher = Cipher.extend({
		        _doFinalize: function () {
		            // Process partial blocks
		            var finalProcessedBlocks = this._process(!!'flush');

		            return finalProcessedBlocks;
		        },

		        blockSize: 1
		    });

		    /**
		     * Mode namespace.
		     */
		    var C_mode = C.mode = {};

		    /**
		     * Abstract base block cipher mode template.
		     */
		    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
		        /**
		         * Creates this mode for encryption.
		         *
		         * @param {Cipher} cipher A block cipher instance.
		         * @param {Array} iv The IV words.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
		         */
		        createEncryptor: function (cipher, iv) {
		            return this.Encryptor.create(cipher, iv);
		        },

		        /**
		         * Creates this mode for decryption.
		         *
		         * @param {Cipher} cipher A block cipher instance.
		         * @param {Array} iv The IV words.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
		         */
		        createDecryptor: function (cipher, iv) {
		            return this.Decryptor.create(cipher, iv);
		        },

		        /**
		         * Initializes a newly created mode.
		         *
		         * @param {Cipher} cipher A block cipher instance.
		         * @param {Array} iv The IV words.
		         *
		         * @example
		         *
		         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
		         */
		        init: function (cipher, iv) {
		            this._cipher = cipher;
		            this._iv = iv;
		        }
		    });

		    /**
		     * Cipher Block Chaining mode.
		     */
		    var CBC = C_mode.CBC = (function () {
		        /**
		         * Abstract base CBC mode.
		         */
		        var CBC = BlockCipherMode.extend();

		        /**
		         * CBC encryptor.
		         */
		        CBC.Encryptor = CBC.extend({
		            /**
		             * Processes the data block at offset.
		             *
		             * @param {Array} words The data words to operate on.
		             * @param {number} offset The offset where the block starts.
		             *
		             * @example
		             *
		             *     mode.processBlock(data.words, offset);
		             */
		            processBlock: function (words, offset) {
		                // Shortcuts
		                var cipher = this._cipher;
		                var blockSize = cipher.blockSize;

		                // XOR and encrypt
		                xorBlock.call(this, words, offset, blockSize);
		                cipher.encryptBlock(words, offset);

		                // Remember this block to use with next block
		                this._prevBlock = words.slice(offset, offset + blockSize);
		            }
		        });

		        /**
		         * CBC decryptor.
		         */
		        CBC.Decryptor = CBC.extend({
		            /**
		             * Processes the data block at offset.
		             *
		             * @param {Array} words The data words to operate on.
		             * @param {number} offset The offset where the block starts.
		             *
		             * @example
		             *
		             *     mode.processBlock(data.words, offset);
		             */
		            processBlock: function (words, offset) {
		                // Shortcuts
		                var cipher = this._cipher;
		                var blockSize = cipher.blockSize;

		                // Remember this block to use with next block
		                var thisBlock = words.slice(offset, offset + blockSize);

		                // Decrypt and XOR
		                cipher.decryptBlock(words, offset);
		                xorBlock.call(this, words, offset, blockSize);

		                // This block becomes the previous block
		                this._prevBlock = thisBlock;
		            }
		        });

		        function xorBlock(words, offset, blockSize) {
		            var block;

		            // Shortcut
		            var iv = this._iv;

		            // Choose mixing block
		            if (iv) {
		                block = iv;

		                // Remove IV for subsequent blocks
		                this._iv = undefined$1;
		            } else {
		                block = this._prevBlock;
		            }

		            // XOR blocks
		            for (var i = 0; i < blockSize; i++) {
		                words[offset + i] ^= block[i];
		            }
		        }

		        return CBC;
		    }());

		    /**
		     * Padding namespace.
		     */
		    var C_pad = C.pad = {};

		    /**
		     * PKCS #5/7 padding strategy.
		     */
		    var Pkcs7 = C_pad.Pkcs7 = {
		        /**
		         * Pads data using the algorithm defined in PKCS #5/7.
		         *
		         * @param {WordArray} data The data to pad.
		         * @param {number} blockSize The multiple that the data should be padded to.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
		         */
		        pad: function (data, blockSize) {
		            // Shortcut
		            var blockSizeBytes = blockSize * 4;

		            // Count padding bytes
		            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

		            // Create padding word
		            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

		            // Create padding
		            var paddingWords = [];
		            for (var i = 0; i < nPaddingBytes; i += 4) {
		                paddingWords.push(paddingWord);
		            }
		            var padding = WordArray.create(paddingWords, nPaddingBytes);

		            // Add padding
		            data.concat(padding);
		        },

		        /**
		         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
		         *
		         * @param {WordArray} data The data to unpad.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
		         */
		        unpad: function (data) {
		            // Get number of padding bytes from last byte
		            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

		            // Remove padding
		            data.sigBytes -= nPaddingBytes;
		        }
		    };

		    /**
		     * Abstract base block cipher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
		     */
		    C_lib.BlockCipher = Cipher.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {Mode} mode The block mode to use. Default: CBC
		         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
		         */
		        cfg: Cipher.cfg.extend({
		            mode: CBC,
		            padding: Pkcs7
		        }),

		        reset: function () {
		            var modeCreator;

		            // Reset cipher
		            Cipher.reset.call(this);

		            // Shortcuts
		            var cfg = this.cfg;
		            var iv = cfg.iv;
		            var mode = cfg.mode;

		            // Reset block mode
		            if (this._xformMode == this._ENC_XFORM_MODE) {
		                modeCreator = mode.createEncryptor;
		            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
		                modeCreator = mode.createDecryptor;
		                // Keep at least one block in the buffer for unpadding
		                this._minBufferSize = 1;
		            }

		            if (this._mode && this._mode.__creator == modeCreator) {
		                this._mode.init(this, iv && iv.words);
		            } else {
		                this._mode = modeCreator.call(mode, this, iv && iv.words);
		                this._mode.__creator = modeCreator;
		            }
		        },

		        _doProcessBlock: function (words, offset) {
		            this._mode.processBlock(words, offset);
		        },

		        _doFinalize: function () {
		            var finalProcessedBlocks;

		            // Shortcut
		            var padding = this.cfg.padding;

		            // Finalize
		            if (this._xformMode == this._ENC_XFORM_MODE) {
		                // Pad data
		                padding.pad(this._data, this.blockSize);

		                // Process final blocks
		                finalProcessedBlocks = this._process(!!'flush');
		            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
		                // Process final blocks
		                finalProcessedBlocks = this._process(!!'flush');

		                // Unpad data
		                padding.unpad(finalProcessedBlocks);
		            }

		            return finalProcessedBlocks;
		        },

		        blockSize: 128/32
		    });

		    /**
		     * A collection of cipher parameters.
		     *
		     * @property {WordArray} ciphertext The raw ciphertext.
		     * @property {WordArray} key The key to this ciphertext.
		     * @property {WordArray} iv The IV used in the ciphering operation.
		     * @property {WordArray} salt The salt used with a key derivation function.
		     * @property {Cipher} algorithm The cipher algorithm.
		     * @property {Mode} mode The block mode used in the ciphering operation.
		     * @property {Padding} padding The padding scheme used in the ciphering operation.
		     * @property {number} blockSize The block size of the cipher.
		     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
		     */
		    var CipherParams = C_lib.CipherParams = Base.extend({
		        /**
		         * Initializes a newly created cipher params object.
		         *
		         * @param {Object} cipherParams An object with any of the possible cipher parameters.
		         *
		         * @example
		         *
		         *     var cipherParams = CryptoJS.lib.CipherParams.create({
		         *         ciphertext: ciphertextWordArray,
		         *         key: keyWordArray,
		         *         iv: ivWordArray,
		         *         salt: saltWordArray,
		         *         algorithm: CryptoJS.algo.AES,
		         *         mode: CryptoJS.mode.CBC,
		         *         padding: CryptoJS.pad.PKCS7,
		         *         blockSize: 4,
		         *         formatter: CryptoJS.format.OpenSSL
		         *     });
		         */
		        init: function (cipherParams) {
		            this.mixIn(cipherParams);
		        },

		        /**
		         * Converts this cipher params object to a string.
		         *
		         * @param {Format} formatter (Optional) The formatting strategy to use.
		         *
		         * @return {string} The stringified cipher params.
		         *
		         * @throws Error If neither the formatter nor the default formatter is set.
		         *
		         * @example
		         *
		         *     var string = cipherParams + '';
		         *     var string = cipherParams.toString();
		         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
		         */
		        toString: function (formatter) {
		            return (formatter || this.formatter).stringify(this);
		        }
		    });

		    /**
		     * Format namespace.
		     */
		    var C_format = C.format = {};

		    /**
		     * OpenSSL formatting strategy.
		     */
		    var OpenSSLFormatter = C_format.OpenSSL = {
		        /**
		         * Converts a cipher params object to an OpenSSL-compatible string.
		         *
		         * @param {CipherParams} cipherParams The cipher params object.
		         *
		         * @return {string} The OpenSSL-compatible string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
		         */
		        stringify: function (cipherParams) {
		            var wordArray;

		            // Shortcuts
		            var ciphertext = cipherParams.ciphertext;
		            var salt = cipherParams.salt;

		            // Format
		            if (salt) {
		                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
		            } else {
		                wordArray = ciphertext;
		            }

		            return wordArray.toString(Base64);
		        },

		        /**
		         * Converts an OpenSSL-compatible string to a cipher params object.
		         *
		         * @param {string} openSSLStr The OpenSSL-compatible string.
		         *
		         * @return {CipherParams} The cipher params object.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
		         */
		        parse: function (openSSLStr) {
		            var salt;

		            // Parse base64
		            var ciphertext = Base64.parse(openSSLStr);

		            // Shortcut
		            var ciphertextWords = ciphertext.words;

		            // Test for salt
		            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
		                // Extract salt
		                salt = WordArray.create(ciphertextWords.slice(2, 4));

		                // Remove salt from ciphertext
		                ciphertextWords.splice(0, 4);
		                ciphertext.sigBytes -= 16;
		            }

		            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
		        }
		    };

		    /**
		     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
		     */
		    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
		         */
		        cfg: Base.extend({
		            format: OpenSSLFormatter
		        }),

		        /**
		         * Encrypts a message.
		         *
		         * @param {Cipher} cipher The cipher algorithm to use.
		         * @param {WordArray|string} message The message to encrypt.
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {CipherParams} A cipher params object.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
		         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
		         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
		         */
		        encrypt: function (cipher, message, key, cfg) {
		            // Apply config defaults
		            cfg = this.cfg.extend(cfg);

		            // Encrypt
		            var encryptor = cipher.createEncryptor(key, cfg);
		            var ciphertext = encryptor.finalize(message);

		            // Shortcut
		            var cipherCfg = encryptor.cfg;

		            // Create and return serializable cipher params
		            return CipherParams.create({
		                ciphertext: ciphertext,
		                key: key,
		                iv: cipherCfg.iv,
		                algorithm: cipher,
		                mode: cipherCfg.mode,
		                padding: cipherCfg.padding,
		                blockSize: cipher.blockSize,
		                formatter: cfg.format
		            });
		        },

		        /**
		         * Decrypts serialized ciphertext.
		         *
		         * @param {Cipher} cipher The cipher algorithm to use.
		         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
		         * @param {WordArray} key The key.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {WordArray} The plaintext.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
		         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
		         */
		        decrypt: function (cipher, ciphertext, key, cfg) {
		            // Apply config defaults
		            cfg = this.cfg.extend(cfg);

		            // Convert string to CipherParams
		            ciphertext = this._parse(ciphertext, cfg.format);

		            // Decrypt
		            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

		            return plaintext;
		        },

		        /**
		         * Converts serialized ciphertext to CipherParams,
		         * else assumed CipherParams already and returns ciphertext unchanged.
		         *
		         * @param {CipherParams|string} ciphertext The ciphertext.
		         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
		         *
		         * @return {CipherParams} The unserialized ciphertext.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
		         */
		        _parse: function (ciphertext, format) {
		            if (typeof ciphertext == 'string') {
		                return format.parse(ciphertext, this);
		            } else {
		                return ciphertext;
		            }
		        }
		    });

		    /**
		     * Key derivation function namespace.
		     */
		    var C_kdf = C.kdf = {};

		    /**
		     * OpenSSL key derivation function.
		     */
		    var OpenSSLKdf = C_kdf.OpenSSL = {
		        /**
		         * Derives a key and IV from a password.
		         *
		         * @param {string} password The password to derive from.
		         * @param {number} keySize The size in words of the key to generate.
		         * @param {number} ivSize The size in words of the IV to generate.
		         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
		         *
		         * @return {CipherParams} A cipher params object with the key, IV, and salt.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
		         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
		         */
		        execute: function (password, keySize, ivSize, salt, hasher) {
		            // Generate random salt
		            if (!salt) {
		                salt = WordArray.random(64/8);
		            }

		            // Derive key and IV
		            if (!hasher) {
		                var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
		            } else {
		                var key = EvpKDF.create({ keySize: keySize + ivSize, hasher: hasher }).compute(password, salt);
		            }


		            // Separate key and IV
		            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
		            key.sigBytes = keySize * 4;

		            // Return params
		            return CipherParams.create({ key: key, iv: iv, salt: salt });
		        }
		    };

		    /**
		     * A serializable cipher wrapper that derives the key from a password,
		     * and returns ciphertext as a serializable cipher params object.
		     */
		    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
		         */
		        cfg: SerializableCipher.cfg.extend({
		            kdf: OpenSSLKdf
		        }),

		        /**
		         * Encrypts a message using a password.
		         *
		         * @param {Cipher} cipher The cipher algorithm to use.
		         * @param {WordArray|string} message The message to encrypt.
		         * @param {string} password The password.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {CipherParams} A cipher params object.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
		         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
		         */
		        encrypt: function (cipher, message, password, cfg) {
		            // Apply config defaults
		            cfg = this.cfg.extend(cfg);

		            // Derive key and other params
		            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);

		            // Add IV to config
		            cfg.iv = derivedParams.iv;

		            // Encrypt
		            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

		            // Mix in derived params
		            ciphertext.mixIn(derivedParams);

		            return ciphertext;
		        },

		        /**
		         * Decrypts serialized ciphertext using a password.
		         *
		         * @param {Cipher} cipher The cipher algorithm to use.
		         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
		         * @param {string} password The password.
		         * @param {Object} cfg (Optional) The configuration options to use for this operation.
		         *
		         * @return {WordArray} The plaintext.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
		         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
		         */
		        decrypt: function (cipher, ciphertext, password, cfg) {
		            // Apply config defaults
		            cfg = this.cfg.extend(cfg);

		            // Convert string to CipherParams
		            ciphertext = this._parse(ciphertext, cfg.format);

		            // Derive key and other params
		            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);

		            // Add IV to config
		            cfg.iv = derivedParams.iv;

		            // Decrypt
		            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

		            return plaintext;
		        }
		    });
		}());


	}));
	}(cipherCore));

	var modeCfb = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Cipher Feedback block mode.
		 */
		CryptoJS.mode.CFB = (function () {
		    var CFB = CryptoJS.lib.BlockCipherMode.extend();

		    CFB.Encryptor = CFB.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;

		            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

		            // Remember this block to use with next block
		            this._prevBlock = words.slice(offset, offset + blockSize);
		        }
		    });

		    CFB.Decryptor = CFB.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;

		            // Remember this block to use with next block
		            var thisBlock = words.slice(offset, offset + blockSize);

		            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

		            // This block becomes the previous block
		            this._prevBlock = thisBlock;
		        }
		    });

		    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
		        var keystream;

		        // Shortcut
		        var iv = this._iv;

		        // Generate keystream
		        if (iv) {
		            keystream = iv.slice(0);

		            // Remove IV for subsequent blocks
		            this._iv = undefined;
		        } else {
		            keystream = this._prevBlock;
		        }
		        cipher.encryptBlock(keystream, 0);

		        // Encrypt
		        for (var i = 0; i < blockSize; i++) {
		            words[offset + i] ^= keystream[i];
		        }
		    }

		    return CFB;
		}());


		return CryptoJS.mode.CFB;

	}));
	}(modeCfb));

	var modeCtr = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Counter block mode.
		 */
		CryptoJS.mode.CTR = (function () {
		    var CTR = CryptoJS.lib.BlockCipherMode.extend();

		    var Encryptor = CTR.Encryptor = CTR.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;
		            var iv = this._iv;
		            var counter = this._counter;

		            // Generate keystream
		            if (iv) {
		                counter = this._counter = iv.slice(0);

		                // Remove IV for subsequent blocks
		                this._iv = undefined;
		            }
		            var keystream = counter.slice(0);
		            cipher.encryptBlock(keystream, 0);

		            // Increment counter
		            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

		            // Encrypt
		            for (var i = 0; i < blockSize; i++) {
		                words[offset + i] ^= keystream[i];
		            }
		        }
		    });

		    CTR.Decryptor = Encryptor;

		    return CTR;
		}());


		return CryptoJS.mode.CTR;

	}));
	}(modeCtr));

	var modeCtrGladman = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/** @preserve
		 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
		 * derived from CryptoJS.mode.CTR
		 * Jan Hruby jhruby.web@gmail.com
		 */
		CryptoJS.mode.CTRGladman = (function () {
		    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

			function incWord(word)
			{
				if (((word >> 24) & 0xff) === 0xff) { //overflow
				var b1 = (word >> 16)&0xff;
				var b2 = (word >> 8)&0xff;
				var b3 = word & 0xff;

				if (b1 === 0xff) // overflow b1
				{
				b1 = 0;
				if (b2 === 0xff)
				{
					b2 = 0;
					if (b3 === 0xff)
					{
						b3 = 0;
					}
					else
					{
						++b3;
					}
				}
				else
				{
					++b2;
				}
				}
				else
				{
				++b1;
				}

				word = 0;
				word += (b1 << 16);
				word += (b2 << 8);
				word += b3;
				}
				else
				{
				word += (0x01 << 24);
				}
				return word;
			}

			function incCounter(counter)
			{
				if ((counter[0] = incWord(counter[0])) === 0)
				{
					// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
					counter[1] = incWord(counter[1]);
				}
				return counter;
			}

		    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;
		            var iv = this._iv;
		            var counter = this._counter;

		            // Generate keystream
		            if (iv) {
		                counter = this._counter = iv.slice(0);

		                // Remove IV for subsequent blocks
		                this._iv = undefined;
		            }

					incCounter(counter);

					var keystream = counter.slice(0);
		            cipher.encryptBlock(keystream, 0);

		            // Encrypt
		            for (var i = 0; i < blockSize; i++) {
		                words[offset + i] ^= keystream[i];
		            }
		        }
		    });

		    CTRGladman.Decryptor = Encryptor;

		    return CTRGladman;
		}());




		return CryptoJS.mode.CTRGladman;

	}));
	}(modeCtrGladman));

	var modeOfb = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Output Feedback block mode.
		 */
		CryptoJS.mode.OFB = (function () {
		    var OFB = CryptoJS.lib.BlockCipherMode.extend();

		    var Encryptor = OFB.Encryptor = OFB.extend({
		        processBlock: function (words, offset) {
		            // Shortcuts
		            var cipher = this._cipher;
		            var blockSize = cipher.blockSize;
		            var iv = this._iv;
		            var keystream = this._keystream;

		            // Generate keystream
		            if (iv) {
		                keystream = this._keystream = iv.slice(0);

		                // Remove IV for subsequent blocks
		                this._iv = undefined;
		            }
		            cipher.encryptBlock(keystream, 0);

		            // Encrypt
		            for (var i = 0; i < blockSize; i++) {
		                words[offset + i] ^= keystream[i];
		            }
		        }
		    });

		    OFB.Decryptor = Encryptor;

		    return OFB;
		}());


		return CryptoJS.mode.OFB;

	}));
	}(modeOfb));

	var modeEcb = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Electronic Codebook block mode.
		 */
		CryptoJS.mode.ECB = (function () {
		    var ECB = CryptoJS.lib.BlockCipherMode.extend();

		    ECB.Encryptor = ECB.extend({
		        processBlock: function (words, offset) {
		            this._cipher.encryptBlock(words, offset);
		        }
		    });

		    ECB.Decryptor = ECB.extend({
		        processBlock: function (words, offset) {
		            this._cipher.decryptBlock(words, offset);
		        }
		    });

		    return ECB;
		}());


		return CryptoJS.mode.ECB;

	}));
	}(modeEcb));

	var padAnsix923 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * ANSI X.923 padding strategy.
		 */
		CryptoJS.pad.AnsiX923 = {
		    pad: function (data, blockSize) {
		        // Shortcuts
		        var dataSigBytes = data.sigBytes;
		        var blockSizeBytes = blockSize * 4;

		        // Count padding bytes
		        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

		        // Compute last byte position
		        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

		        // Pad
		        data.clamp();
		        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
		        data.sigBytes += nPaddingBytes;
		    },

		    unpad: function (data) {
		        // Get number of padding bytes from last byte
		        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

		        // Remove padding
		        data.sigBytes -= nPaddingBytes;
		    }
		};


		return CryptoJS.pad.Ansix923;

	}));
	}(padAnsix923));

	var padIso10126 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * ISO 10126 padding strategy.
		 */
		CryptoJS.pad.Iso10126 = {
		    pad: function (data, blockSize) {
		        // Shortcut
		        var blockSizeBytes = blockSize * 4;

		        // Count padding bytes
		        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

		        // Pad
		        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
		             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
		    },

		    unpad: function (data) {
		        // Get number of padding bytes from last byte
		        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

		        // Remove padding
		        data.sigBytes -= nPaddingBytes;
		    }
		};


		return CryptoJS.pad.Iso10126;

	}));
	}(padIso10126));

	var padIso97971 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * ISO/IEC 9797-1 Padding Method 2.
		 */
		CryptoJS.pad.Iso97971 = {
		    pad: function (data, blockSize) {
		        // Add 0x80 byte
		        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

		        // Zero pad the rest
		        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
		    },

		    unpad: function (data) {
		        // Remove zero padding
		        CryptoJS.pad.ZeroPadding.unpad(data);

		        // Remove one more byte -- the 0x80 byte
		        data.sigBytes--;
		    }
		};


		return CryptoJS.pad.Iso97971;

	}));
	}(padIso97971));

	var padZeropadding = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * Zero padding strategy.
		 */
		CryptoJS.pad.ZeroPadding = {
		    pad: function (data, blockSize) {
		        // Shortcut
		        var blockSizeBytes = blockSize * 4;

		        // Pad
		        data.clamp();
		        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
		    },

		    unpad: function (data) {
		        // Shortcut
		        var dataWords = data.words;

		        // Unpad
		        var i = data.sigBytes - 1;
		        for (var i = data.sigBytes - 1; i >= 0; i--) {
		            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
		                data.sigBytes = i + 1;
		                break;
		            }
		        }
		    }
		};


		return CryptoJS.pad.ZeroPadding;

	}));
	}(padZeropadding));

	var padNopadding = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		/**
		 * A noop padding strategy.
		 */
		CryptoJS.pad.NoPadding = {
		    pad: function () {
		    },

		    unpad: function () {
		    }
		};


		return CryptoJS.pad.NoPadding;

	}));
	}(padNopadding));

	var formatHex = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (undefined$1) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var CipherParams = C_lib.CipherParams;
		    var C_enc = C.enc;
		    var Hex = C_enc.Hex;
		    var C_format = C.format;

		    C_format.Hex = {
		        /**
		         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
		         *
		         * @param {CipherParams} cipherParams The cipher params object.
		         *
		         * @return {string} The hexadecimally encoded string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
		         */
		        stringify: function (cipherParams) {
		            return cipherParams.ciphertext.toString(Hex);
		        },

		        /**
		         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
		         *
		         * @param {string} input The hexadecimally encoded string.
		         *
		         * @return {CipherParams} The cipher params object.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
		         */
		        parse: function (input) {
		            var ciphertext = Hex.parse(input);
		            return CipherParams.create({ ciphertext: ciphertext });
		        }
		    };
		}());


		return CryptoJS.format.Hex;

	}));
	}(formatHex));

	var aes = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var BlockCipher = C_lib.BlockCipher;
		    var C_algo = C.algo;

		    // Lookup tables
		    var SBOX = [];
		    var INV_SBOX = [];
		    var SUB_MIX_0 = [];
		    var SUB_MIX_1 = [];
		    var SUB_MIX_2 = [];
		    var SUB_MIX_3 = [];
		    var INV_SUB_MIX_0 = [];
		    var INV_SUB_MIX_1 = [];
		    var INV_SUB_MIX_2 = [];
		    var INV_SUB_MIX_3 = [];

		    // Compute lookup tables
		    (function () {
		        // Compute double table
		        var d = [];
		        for (var i = 0; i < 256; i++) {
		            if (i < 128) {
		                d[i] = i << 1;
		            } else {
		                d[i] = (i << 1) ^ 0x11b;
		            }
		        }

		        // Walk GF(2^8)
		        var x = 0;
		        var xi = 0;
		        for (var i = 0; i < 256; i++) {
		            // Compute sbox
		            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
		            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
		            SBOX[x] = sx;
		            INV_SBOX[sx] = x;

		            // Compute multiplication
		            var x2 = d[x];
		            var x4 = d[x2];
		            var x8 = d[x4];

		            // Compute sub bytes, mix columns tables
		            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
		            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
		            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
		            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
		            SUB_MIX_3[x] = t;

		            // Compute inv sub bytes, inv mix columns tables
		            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
		            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
		            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
		            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
		            INV_SUB_MIX_3[sx] = t;

		            // Compute next counter
		            if (!x) {
		                x = xi = 1;
		            } else {
		                x = x2 ^ d[d[d[x8 ^ x2]]];
		                xi ^= d[d[xi]];
		            }
		        }
		    }());

		    // Precomputed Rcon lookup
		    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

		    /**
		     * AES block cipher algorithm.
		     */
		    var AES = C_algo.AES = BlockCipher.extend({
		        _doReset: function () {
		            var t;

		            // Skip reset of nRounds has been set before and key did not change
		            if (this._nRounds && this._keyPriorReset === this._key) {
		                return;
		            }

		            // Shortcuts
		            var key = this._keyPriorReset = this._key;
		            var keyWords = key.words;
		            var keySize = key.sigBytes / 4;

		            // Compute number of rounds
		            var nRounds = this._nRounds = keySize + 6;

		            // Compute number of key schedule rows
		            var ksRows = (nRounds + 1) * 4;

		            // Compute key schedule
		            var keySchedule = this._keySchedule = [];
		            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
		                if (ksRow < keySize) {
		                    keySchedule[ksRow] = keyWords[ksRow];
		                } else {
		                    t = keySchedule[ksRow - 1];

		                    if (!(ksRow % keySize)) {
		                        // Rot word
		                        t = (t << 8) | (t >>> 24);

		                        // Sub word
		                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

		                        // Mix Rcon
		                        t ^= RCON[(ksRow / keySize) | 0] << 24;
		                    } else if (keySize > 6 && ksRow % keySize == 4) {
		                        // Sub word
		                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
		                    }

		                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
		                }
		            }

		            // Compute inv key schedule
		            var invKeySchedule = this._invKeySchedule = [];
		            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
		                var ksRow = ksRows - invKsRow;

		                if (invKsRow % 4) {
		                    var t = keySchedule[ksRow];
		                } else {
		                    var t = keySchedule[ksRow - 4];
		                }

		                if (invKsRow < 4 || ksRow <= 4) {
		                    invKeySchedule[invKsRow] = t;
		                } else {
		                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
		                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
		                }
		            }
		        },

		        encryptBlock: function (M, offset) {
		            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
		        },

		        decryptBlock: function (M, offset) {
		            // Swap 2nd and 4th rows
		            var t = M[offset + 1];
		            M[offset + 1] = M[offset + 3];
		            M[offset + 3] = t;

		            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

		            // Inv swap 2nd and 4th rows
		            var t = M[offset + 1];
		            M[offset + 1] = M[offset + 3];
		            M[offset + 3] = t;
		        },

		        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
		            // Shortcut
		            var nRounds = this._nRounds;

		            // Get input, add round key
		            var s0 = M[offset]     ^ keySchedule[0];
		            var s1 = M[offset + 1] ^ keySchedule[1];
		            var s2 = M[offset + 2] ^ keySchedule[2];
		            var s3 = M[offset + 3] ^ keySchedule[3];

		            // Key schedule row counter
		            var ksRow = 4;

		            // Rounds
		            for (var round = 1; round < nRounds; round++) {
		                // Shift rows, sub bytes, mix columns, add round key
		                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
		                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
		                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
		                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

		                // Update state
		                s0 = t0;
		                s1 = t1;
		                s2 = t2;
		                s3 = t3;
		            }

		            // Shift rows, sub bytes, add round key
		            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
		            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
		            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
		            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

		            // Set output
		            M[offset]     = t0;
		            M[offset + 1] = t1;
		            M[offset + 2] = t2;
		            M[offset + 3] = t3;
		        },

		        keySize: 256/32
		    });

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
		     */
		    C.AES = BlockCipher._createHelper(AES);
		}());


		return CryptoJS.AES;

	}));
	}(aes));

	var tripledes = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var BlockCipher = C_lib.BlockCipher;
		    var C_algo = C.algo;

		    // Permuted Choice 1 constants
		    var PC1 = [
		        57, 49, 41, 33, 25, 17, 9,  1,
		        58, 50, 42, 34, 26, 18, 10, 2,
		        59, 51, 43, 35, 27, 19, 11, 3,
		        60, 52, 44, 36, 63, 55, 47, 39,
		        31, 23, 15, 7,  62, 54, 46, 38,
		        30, 22, 14, 6,  61, 53, 45, 37,
		        29, 21, 13, 5,  28, 20, 12, 4
		    ];

		    // Permuted Choice 2 constants
		    var PC2 = [
		        14, 17, 11, 24, 1,  5,
		        3,  28, 15, 6,  21, 10,
		        23, 19, 12, 4,  26, 8,
		        16, 7,  27, 20, 13, 2,
		        41, 52, 31, 37, 47, 55,
		        30, 40, 51, 45, 33, 48,
		        44, 49, 39, 56, 34, 53,
		        46, 42, 50, 36, 29, 32
		    ];

		    // Cumulative bit shift constants
		    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

		    // SBOXes and round permutation constants
		    var SBOX_P = [
		        {
		            0x0: 0x808200,
		            0x10000000: 0x8000,
		            0x20000000: 0x808002,
		            0x30000000: 0x2,
		            0x40000000: 0x200,
		            0x50000000: 0x808202,
		            0x60000000: 0x800202,
		            0x70000000: 0x800000,
		            0x80000000: 0x202,
		            0x90000000: 0x800200,
		            0xa0000000: 0x8200,
		            0xb0000000: 0x808000,
		            0xc0000000: 0x8002,
		            0xd0000000: 0x800002,
		            0xe0000000: 0x0,
		            0xf0000000: 0x8202,
		            0x8000000: 0x0,
		            0x18000000: 0x808202,
		            0x28000000: 0x8202,
		            0x38000000: 0x8000,
		            0x48000000: 0x808200,
		            0x58000000: 0x200,
		            0x68000000: 0x808002,
		            0x78000000: 0x2,
		            0x88000000: 0x800200,
		            0x98000000: 0x8200,
		            0xa8000000: 0x808000,
		            0xb8000000: 0x800202,
		            0xc8000000: 0x800002,
		            0xd8000000: 0x8002,
		            0xe8000000: 0x202,
		            0xf8000000: 0x800000,
		            0x1: 0x8000,
		            0x10000001: 0x2,
		            0x20000001: 0x808200,
		            0x30000001: 0x800000,
		            0x40000001: 0x808002,
		            0x50000001: 0x8200,
		            0x60000001: 0x200,
		            0x70000001: 0x800202,
		            0x80000001: 0x808202,
		            0x90000001: 0x808000,
		            0xa0000001: 0x800002,
		            0xb0000001: 0x8202,
		            0xc0000001: 0x202,
		            0xd0000001: 0x800200,
		            0xe0000001: 0x8002,
		            0xf0000001: 0x0,
		            0x8000001: 0x808202,
		            0x18000001: 0x808000,
		            0x28000001: 0x800000,
		            0x38000001: 0x200,
		            0x48000001: 0x8000,
		            0x58000001: 0x800002,
		            0x68000001: 0x2,
		            0x78000001: 0x8202,
		            0x88000001: 0x8002,
		            0x98000001: 0x800202,
		            0xa8000001: 0x202,
		            0xb8000001: 0x808200,
		            0xc8000001: 0x800200,
		            0xd8000001: 0x0,
		            0xe8000001: 0x8200,
		            0xf8000001: 0x808002
		        },
		        {
		            0x0: 0x40084010,
		            0x1000000: 0x4000,
		            0x2000000: 0x80000,
		            0x3000000: 0x40080010,
		            0x4000000: 0x40000010,
		            0x5000000: 0x40084000,
		            0x6000000: 0x40004000,
		            0x7000000: 0x10,
		            0x8000000: 0x84000,
		            0x9000000: 0x40004010,
		            0xa000000: 0x40000000,
		            0xb000000: 0x84010,
		            0xc000000: 0x80010,
		            0xd000000: 0x0,
		            0xe000000: 0x4010,
		            0xf000000: 0x40080000,
		            0x800000: 0x40004000,
		            0x1800000: 0x84010,
		            0x2800000: 0x10,
		            0x3800000: 0x40004010,
		            0x4800000: 0x40084010,
		            0x5800000: 0x40000000,
		            0x6800000: 0x80000,
		            0x7800000: 0x40080010,
		            0x8800000: 0x80010,
		            0x9800000: 0x0,
		            0xa800000: 0x4000,
		            0xb800000: 0x40080000,
		            0xc800000: 0x40000010,
		            0xd800000: 0x84000,
		            0xe800000: 0x40084000,
		            0xf800000: 0x4010,
		            0x10000000: 0x0,
		            0x11000000: 0x40080010,
		            0x12000000: 0x40004010,
		            0x13000000: 0x40084000,
		            0x14000000: 0x40080000,
		            0x15000000: 0x10,
		            0x16000000: 0x84010,
		            0x17000000: 0x4000,
		            0x18000000: 0x4010,
		            0x19000000: 0x80000,
		            0x1a000000: 0x80010,
		            0x1b000000: 0x40000010,
		            0x1c000000: 0x84000,
		            0x1d000000: 0x40004000,
		            0x1e000000: 0x40000000,
		            0x1f000000: 0x40084010,
		            0x10800000: 0x84010,
		            0x11800000: 0x80000,
		            0x12800000: 0x40080000,
		            0x13800000: 0x4000,
		            0x14800000: 0x40004000,
		            0x15800000: 0x40084010,
		            0x16800000: 0x10,
		            0x17800000: 0x40000000,
		            0x18800000: 0x40084000,
		            0x19800000: 0x40000010,
		            0x1a800000: 0x40004010,
		            0x1b800000: 0x80010,
		            0x1c800000: 0x0,
		            0x1d800000: 0x4010,
		            0x1e800000: 0x40080010,
		            0x1f800000: 0x84000
		        },
		        {
		            0x0: 0x104,
		            0x100000: 0x0,
		            0x200000: 0x4000100,
		            0x300000: 0x10104,
		            0x400000: 0x10004,
		            0x500000: 0x4000004,
		            0x600000: 0x4010104,
		            0x700000: 0x4010000,
		            0x800000: 0x4000000,
		            0x900000: 0x4010100,
		            0xa00000: 0x10100,
		            0xb00000: 0x4010004,
		            0xc00000: 0x4000104,
		            0xd00000: 0x10000,
		            0xe00000: 0x4,
		            0xf00000: 0x100,
		            0x80000: 0x4010100,
		            0x180000: 0x4010004,
		            0x280000: 0x0,
		            0x380000: 0x4000100,
		            0x480000: 0x4000004,
		            0x580000: 0x10000,
		            0x680000: 0x10004,
		            0x780000: 0x104,
		            0x880000: 0x4,
		            0x980000: 0x100,
		            0xa80000: 0x4010000,
		            0xb80000: 0x10104,
		            0xc80000: 0x10100,
		            0xd80000: 0x4000104,
		            0xe80000: 0x4010104,
		            0xf80000: 0x4000000,
		            0x1000000: 0x4010100,
		            0x1100000: 0x10004,
		            0x1200000: 0x10000,
		            0x1300000: 0x4000100,
		            0x1400000: 0x100,
		            0x1500000: 0x4010104,
		            0x1600000: 0x4000004,
		            0x1700000: 0x0,
		            0x1800000: 0x4000104,
		            0x1900000: 0x4000000,
		            0x1a00000: 0x4,
		            0x1b00000: 0x10100,
		            0x1c00000: 0x4010000,
		            0x1d00000: 0x104,
		            0x1e00000: 0x10104,
		            0x1f00000: 0x4010004,
		            0x1080000: 0x4000000,
		            0x1180000: 0x104,
		            0x1280000: 0x4010100,
		            0x1380000: 0x0,
		            0x1480000: 0x10004,
		            0x1580000: 0x4000100,
		            0x1680000: 0x100,
		            0x1780000: 0x4010004,
		            0x1880000: 0x10000,
		            0x1980000: 0x4010104,
		            0x1a80000: 0x10104,
		            0x1b80000: 0x4000004,
		            0x1c80000: 0x4000104,
		            0x1d80000: 0x4010000,
		            0x1e80000: 0x4,
		            0x1f80000: 0x10100
		        },
		        {
		            0x0: 0x80401000,
		            0x10000: 0x80001040,
		            0x20000: 0x401040,
		            0x30000: 0x80400000,
		            0x40000: 0x0,
		            0x50000: 0x401000,
		            0x60000: 0x80000040,
		            0x70000: 0x400040,
		            0x80000: 0x80000000,
		            0x90000: 0x400000,
		            0xa0000: 0x40,
		            0xb0000: 0x80001000,
		            0xc0000: 0x80400040,
		            0xd0000: 0x1040,
		            0xe0000: 0x1000,
		            0xf0000: 0x80401040,
		            0x8000: 0x80001040,
		            0x18000: 0x40,
		            0x28000: 0x80400040,
		            0x38000: 0x80001000,
		            0x48000: 0x401000,
		            0x58000: 0x80401040,
		            0x68000: 0x0,
		            0x78000: 0x80400000,
		            0x88000: 0x1000,
		            0x98000: 0x80401000,
		            0xa8000: 0x400000,
		            0xb8000: 0x1040,
		            0xc8000: 0x80000000,
		            0xd8000: 0x400040,
		            0xe8000: 0x401040,
		            0xf8000: 0x80000040,
		            0x100000: 0x400040,
		            0x110000: 0x401000,
		            0x120000: 0x80000040,
		            0x130000: 0x0,
		            0x140000: 0x1040,
		            0x150000: 0x80400040,
		            0x160000: 0x80401000,
		            0x170000: 0x80001040,
		            0x180000: 0x80401040,
		            0x190000: 0x80000000,
		            0x1a0000: 0x80400000,
		            0x1b0000: 0x401040,
		            0x1c0000: 0x80001000,
		            0x1d0000: 0x400000,
		            0x1e0000: 0x40,
		            0x1f0000: 0x1000,
		            0x108000: 0x80400000,
		            0x118000: 0x80401040,
		            0x128000: 0x0,
		            0x138000: 0x401000,
		            0x148000: 0x400040,
		            0x158000: 0x80000000,
		            0x168000: 0x80001040,
		            0x178000: 0x40,
		            0x188000: 0x80000040,
		            0x198000: 0x1000,
		            0x1a8000: 0x80001000,
		            0x1b8000: 0x80400040,
		            0x1c8000: 0x1040,
		            0x1d8000: 0x80401000,
		            0x1e8000: 0x400000,
		            0x1f8000: 0x401040
		        },
		        {
		            0x0: 0x80,
		            0x1000: 0x1040000,
		            0x2000: 0x40000,
		            0x3000: 0x20000000,
		            0x4000: 0x20040080,
		            0x5000: 0x1000080,
		            0x6000: 0x21000080,
		            0x7000: 0x40080,
		            0x8000: 0x1000000,
		            0x9000: 0x20040000,
		            0xa000: 0x20000080,
		            0xb000: 0x21040080,
		            0xc000: 0x21040000,
		            0xd000: 0x0,
		            0xe000: 0x1040080,
		            0xf000: 0x21000000,
		            0x800: 0x1040080,
		            0x1800: 0x21000080,
		            0x2800: 0x80,
		            0x3800: 0x1040000,
		            0x4800: 0x40000,
		            0x5800: 0x20040080,
		            0x6800: 0x21040000,
		            0x7800: 0x20000000,
		            0x8800: 0x20040000,
		            0x9800: 0x0,
		            0xa800: 0x21040080,
		            0xb800: 0x1000080,
		            0xc800: 0x20000080,
		            0xd800: 0x21000000,
		            0xe800: 0x1000000,
		            0xf800: 0x40080,
		            0x10000: 0x40000,
		            0x11000: 0x80,
		            0x12000: 0x20000000,
		            0x13000: 0x21000080,
		            0x14000: 0x1000080,
		            0x15000: 0x21040000,
		            0x16000: 0x20040080,
		            0x17000: 0x1000000,
		            0x18000: 0x21040080,
		            0x19000: 0x21000000,
		            0x1a000: 0x1040000,
		            0x1b000: 0x20040000,
		            0x1c000: 0x40080,
		            0x1d000: 0x20000080,
		            0x1e000: 0x0,
		            0x1f000: 0x1040080,
		            0x10800: 0x21000080,
		            0x11800: 0x1000000,
		            0x12800: 0x1040000,
		            0x13800: 0x20040080,
		            0x14800: 0x20000000,
		            0x15800: 0x1040080,
		            0x16800: 0x80,
		            0x17800: 0x21040000,
		            0x18800: 0x40080,
		            0x19800: 0x21040080,
		            0x1a800: 0x0,
		            0x1b800: 0x21000000,
		            0x1c800: 0x1000080,
		            0x1d800: 0x40000,
		            0x1e800: 0x20040000,
		            0x1f800: 0x20000080
		        },
		        {
		            0x0: 0x10000008,
		            0x100: 0x2000,
		            0x200: 0x10200000,
		            0x300: 0x10202008,
		            0x400: 0x10002000,
		            0x500: 0x200000,
		            0x600: 0x200008,
		            0x700: 0x10000000,
		            0x800: 0x0,
		            0x900: 0x10002008,
		            0xa00: 0x202000,
		            0xb00: 0x8,
		            0xc00: 0x10200008,
		            0xd00: 0x202008,
		            0xe00: 0x2008,
		            0xf00: 0x10202000,
		            0x80: 0x10200000,
		            0x180: 0x10202008,
		            0x280: 0x8,
		            0x380: 0x200000,
		            0x480: 0x202008,
		            0x580: 0x10000008,
		            0x680: 0x10002000,
		            0x780: 0x2008,
		            0x880: 0x200008,
		            0x980: 0x2000,
		            0xa80: 0x10002008,
		            0xb80: 0x10200008,
		            0xc80: 0x0,
		            0xd80: 0x10202000,
		            0xe80: 0x202000,
		            0xf80: 0x10000000,
		            0x1000: 0x10002000,
		            0x1100: 0x10200008,
		            0x1200: 0x10202008,
		            0x1300: 0x2008,
		            0x1400: 0x200000,
		            0x1500: 0x10000000,
		            0x1600: 0x10000008,
		            0x1700: 0x202000,
		            0x1800: 0x202008,
		            0x1900: 0x0,
		            0x1a00: 0x8,
		            0x1b00: 0x10200000,
		            0x1c00: 0x2000,
		            0x1d00: 0x10002008,
		            0x1e00: 0x10202000,
		            0x1f00: 0x200008,
		            0x1080: 0x8,
		            0x1180: 0x202000,
		            0x1280: 0x200000,
		            0x1380: 0x10000008,
		            0x1480: 0x10002000,
		            0x1580: 0x2008,
		            0x1680: 0x10202008,
		            0x1780: 0x10200000,
		            0x1880: 0x10202000,
		            0x1980: 0x10200008,
		            0x1a80: 0x2000,
		            0x1b80: 0x202008,
		            0x1c80: 0x200008,
		            0x1d80: 0x0,
		            0x1e80: 0x10000000,
		            0x1f80: 0x10002008
		        },
		        {
		            0x0: 0x100000,
		            0x10: 0x2000401,
		            0x20: 0x400,
		            0x30: 0x100401,
		            0x40: 0x2100401,
		            0x50: 0x0,
		            0x60: 0x1,
		            0x70: 0x2100001,
		            0x80: 0x2000400,
		            0x90: 0x100001,
		            0xa0: 0x2000001,
		            0xb0: 0x2100400,
		            0xc0: 0x2100000,
		            0xd0: 0x401,
		            0xe0: 0x100400,
		            0xf0: 0x2000000,
		            0x8: 0x2100001,
		            0x18: 0x0,
		            0x28: 0x2000401,
		            0x38: 0x2100400,
		            0x48: 0x100000,
		            0x58: 0x2000001,
		            0x68: 0x2000000,
		            0x78: 0x401,
		            0x88: 0x100401,
		            0x98: 0x2000400,
		            0xa8: 0x2100000,
		            0xb8: 0x100001,
		            0xc8: 0x400,
		            0xd8: 0x2100401,
		            0xe8: 0x1,
		            0xf8: 0x100400,
		            0x100: 0x2000000,
		            0x110: 0x100000,
		            0x120: 0x2000401,
		            0x130: 0x2100001,
		            0x140: 0x100001,
		            0x150: 0x2000400,
		            0x160: 0x2100400,
		            0x170: 0x100401,
		            0x180: 0x401,
		            0x190: 0x2100401,
		            0x1a0: 0x100400,
		            0x1b0: 0x1,
		            0x1c0: 0x0,
		            0x1d0: 0x2100000,
		            0x1e0: 0x2000001,
		            0x1f0: 0x400,
		            0x108: 0x100400,
		            0x118: 0x2000401,
		            0x128: 0x2100001,
		            0x138: 0x1,
		            0x148: 0x2000000,
		            0x158: 0x100000,
		            0x168: 0x401,
		            0x178: 0x2100400,
		            0x188: 0x2000001,
		            0x198: 0x2100000,
		            0x1a8: 0x0,
		            0x1b8: 0x2100401,
		            0x1c8: 0x100401,
		            0x1d8: 0x400,
		            0x1e8: 0x2000400,
		            0x1f8: 0x100001
		        },
		        {
		            0x0: 0x8000820,
		            0x1: 0x20000,
		            0x2: 0x8000000,
		            0x3: 0x20,
		            0x4: 0x20020,
		            0x5: 0x8020820,
		            0x6: 0x8020800,
		            0x7: 0x800,
		            0x8: 0x8020000,
		            0x9: 0x8000800,
		            0xa: 0x20800,
		            0xb: 0x8020020,
		            0xc: 0x820,
		            0xd: 0x0,
		            0xe: 0x8000020,
		            0xf: 0x20820,
		            0x80000000: 0x800,
		            0x80000001: 0x8020820,
		            0x80000002: 0x8000820,
		            0x80000003: 0x8000000,
		            0x80000004: 0x8020000,
		            0x80000005: 0x20800,
		            0x80000006: 0x20820,
		            0x80000007: 0x20,
		            0x80000008: 0x8000020,
		            0x80000009: 0x820,
		            0x8000000a: 0x20020,
		            0x8000000b: 0x8020800,
		            0x8000000c: 0x0,
		            0x8000000d: 0x8020020,
		            0x8000000e: 0x8000800,
		            0x8000000f: 0x20000,
		            0x10: 0x20820,
		            0x11: 0x8020800,
		            0x12: 0x20,
		            0x13: 0x800,
		            0x14: 0x8000800,
		            0x15: 0x8000020,
		            0x16: 0x8020020,
		            0x17: 0x20000,
		            0x18: 0x0,
		            0x19: 0x20020,
		            0x1a: 0x8020000,
		            0x1b: 0x8000820,
		            0x1c: 0x8020820,
		            0x1d: 0x20800,
		            0x1e: 0x820,
		            0x1f: 0x8000000,
		            0x80000010: 0x20000,
		            0x80000011: 0x800,
		            0x80000012: 0x8020020,
		            0x80000013: 0x20820,
		            0x80000014: 0x20,
		            0x80000015: 0x8020000,
		            0x80000016: 0x8000000,
		            0x80000017: 0x8000820,
		            0x80000018: 0x8020820,
		            0x80000019: 0x8000020,
		            0x8000001a: 0x8000800,
		            0x8000001b: 0x0,
		            0x8000001c: 0x20800,
		            0x8000001d: 0x820,
		            0x8000001e: 0x20020,
		            0x8000001f: 0x8020800
		        }
		    ];

		    // Masks that select the SBOX input
		    var SBOX_MASK = [
		        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
		        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
		    ];

		    /**
		     * DES block cipher algorithm.
		     */
		    var DES = C_algo.DES = BlockCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var key = this._key;
		            var keyWords = key.words;

		            // Select 56 bits according to PC1
		            var keyBits = [];
		            for (var i = 0; i < 56; i++) {
		                var keyBitPos = PC1[i] - 1;
		                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
		            }

		            // Assemble 16 subkeys
		            var subKeys = this._subKeys = [];
		            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
		                // Create subkey
		                var subKey = subKeys[nSubKey] = [];

		                // Shortcut
		                var bitShift = BIT_SHIFTS[nSubKey];

		                // Select 48 bits according to PC2
		                for (var i = 0; i < 24; i++) {
		                    // Select from the left 28 key bits
		                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

		                    // Select from the right 28 key bits
		                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
		                }

		                // Since each subkey is applied to an expanded 32-bit input,
		                // the subkey can be broken into 8 values scaled to 32-bits,
		                // which allows the key to be used without expansion
		                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
		                for (var i = 1; i < 7; i++) {
		                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
		                }
		                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
		            }

		            // Compute inverse subkeys
		            var invSubKeys = this._invSubKeys = [];
		            for (var i = 0; i < 16; i++) {
		                invSubKeys[i] = subKeys[15 - i];
		            }
		        },

		        encryptBlock: function (M, offset) {
		            this._doCryptBlock(M, offset, this._subKeys);
		        },

		        decryptBlock: function (M, offset) {
		            this._doCryptBlock(M, offset, this._invSubKeys);
		        },

		        _doCryptBlock: function (M, offset, subKeys) {
		            // Get input
		            this._lBlock = M[offset];
		            this._rBlock = M[offset + 1];

		            // Initial permutation
		            exchangeLR.call(this, 4,  0x0f0f0f0f);
		            exchangeLR.call(this, 16, 0x0000ffff);
		            exchangeRL.call(this, 2,  0x33333333);
		            exchangeRL.call(this, 8,  0x00ff00ff);
		            exchangeLR.call(this, 1,  0x55555555);

		            // Rounds
		            for (var round = 0; round < 16; round++) {
		                // Shortcuts
		                var subKey = subKeys[round];
		                var lBlock = this._lBlock;
		                var rBlock = this._rBlock;

		                // Feistel function
		                var f = 0;
		                for (var i = 0; i < 8; i++) {
		                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
		                }
		                this._lBlock = rBlock;
		                this._rBlock = lBlock ^ f;
		            }

		            // Undo swap from last round
		            var t = this._lBlock;
		            this._lBlock = this._rBlock;
		            this._rBlock = t;

		            // Final permutation
		            exchangeLR.call(this, 1,  0x55555555);
		            exchangeRL.call(this, 8,  0x00ff00ff);
		            exchangeRL.call(this, 2,  0x33333333);
		            exchangeLR.call(this, 16, 0x0000ffff);
		            exchangeLR.call(this, 4,  0x0f0f0f0f);

		            // Set output
		            M[offset] = this._lBlock;
		            M[offset + 1] = this._rBlock;
		        },

		        keySize: 64/32,

		        ivSize: 64/32,

		        blockSize: 64/32
		    });

		    // Swap bits across the left and right words
		    function exchangeLR(offset, mask) {
		        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
		        this._rBlock ^= t;
		        this._lBlock ^= t << offset;
		    }

		    function exchangeRL(offset, mask) {
		        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
		        this._lBlock ^= t;
		        this._rBlock ^= t << offset;
		    }

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
		     */
		    C.DES = BlockCipher._createHelper(DES);

		    /**
		     * Triple-DES block cipher algorithm.
		     */
		    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var key = this._key;
		            var keyWords = key.words;
		            // Make sure the key length is valid (64, 128 or >= 192 bit)
		            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
		                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
		            }

		            // Extend the key according to the keying options defined in 3DES standard
		            var key1 = keyWords.slice(0, 2);
		            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
		            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

		            // Create DES instances
		            this._des1 = DES.createEncryptor(WordArray.create(key1));
		            this._des2 = DES.createEncryptor(WordArray.create(key2));
		            this._des3 = DES.createEncryptor(WordArray.create(key3));
		        },

		        encryptBlock: function (M, offset) {
		            this._des1.encryptBlock(M, offset);
		            this._des2.decryptBlock(M, offset);
		            this._des3.encryptBlock(M, offset);
		        },

		        decryptBlock: function (M, offset) {
		            this._des3.decryptBlock(M, offset);
		            this._des2.encryptBlock(M, offset);
		            this._des1.decryptBlock(M, offset);
		        },

		        keySize: 192/32,

		        ivSize: 64/32,

		        blockSize: 64/32
		    });

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
		     */
		    C.TripleDES = BlockCipher._createHelper(TripleDES);
		}());


		return CryptoJS.TripleDES;

	}));
	}(tripledes));

	var rc4 = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var StreamCipher = C_lib.StreamCipher;
		    var C_algo = C.algo;

		    /**
		     * RC4 stream cipher algorithm.
		     */
		    var RC4 = C_algo.RC4 = StreamCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var key = this._key;
		            var keyWords = key.words;
		            var keySigBytes = key.sigBytes;

		            // Init sbox
		            var S = this._S = [];
		            for (var i = 0; i < 256; i++) {
		                S[i] = i;
		            }

		            // Key setup
		            for (var i = 0, j = 0; i < 256; i++) {
		                var keyByteIndex = i % keySigBytes;
		                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

		                j = (j + S[i] + keyByte) % 256;

		                // Swap
		                var t = S[i];
		                S[i] = S[j];
		                S[j] = t;
		            }

		            // Counters
		            this._i = this._j = 0;
		        },

		        _doProcessBlock: function (M, offset) {
		            M[offset] ^= generateKeystreamWord.call(this);
		        },

		        keySize: 256/32,

		        ivSize: 0
		    });

		    function generateKeystreamWord() {
		        // Shortcuts
		        var S = this._S;
		        var i = this._i;
		        var j = this._j;

		        // Generate keystream word
		        var keystreamWord = 0;
		        for (var n = 0; n < 4; n++) {
		            i = (i + 1) % 256;
		            j = (j + S[i]) % 256;

		            // Swap
		            var t = S[i];
		            S[i] = S[j];
		            S[j] = t;

		            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
		        }

		        // Update counters
		        this._i = i;
		        this._j = j;

		        return keystreamWord;
		    }

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
		     */
		    C.RC4 = StreamCipher._createHelper(RC4);

		    /**
		     * Modified RC4 stream cipher algorithm.
		     */
		    var RC4Drop = C_algo.RC4Drop = RC4.extend({
		        /**
		         * Configuration options.
		         *
		         * @property {number} drop The number of keystream words to drop. Default 192
		         */
		        cfg: RC4.cfg.extend({
		            drop: 192
		        }),

		        _doReset: function () {
		            RC4._doReset.call(this);

		            // Drop
		            for (var i = this.cfg.drop; i > 0; i--) {
		                generateKeystreamWord.call(this);
		            }
		        }
		    });

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
		     */
		    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
		}());


		return CryptoJS.RC4;

	}));
	}(rc4));

	var rabbit = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var StreamCipher = C_lib.StreamCipher;
		    var C_algo = C.algo;

		    // Reusable objects
		    var S  = [];
		    var C_ = [];
		    var G  = [];

		    /**
		     * Rabbit stream cipher algorithm
		     */
		    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var K = this._key.words;
		            var iv = this.cfg.iv;

		            // Swap endian
		            for (var i = 0; i < 4; i++) {
		                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
		                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
		            }

		            // Generate initial state values
		            var X = this._X = [
		                K[0], (K[3] << 16) | (K[2] >>> 16),
		                K[1], (K[0] << 16) | (K[3] >>> 16),
		                K[2], (K[1] << 16) | (K[0] >>> 16),
		                K[3], (K[2] << 16) | (K[1] >>> 16)
		            ];

		            // Generate initial counter values
		            var C = this._C = [
		                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
		                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
		                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
		                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
		            ];

		            // Carry bit
		            this._b = 0;

		            // Iterate the system four times
		            for (var i = 0; i < 4; i++) {
		                nextState.call(this);
		            }

		            // Modify the counters
		            for (var i = 0; i < 8; i++) {
		                C[i] ^= X[(i + 4) & 7];
		            }

		            // IV setup
		            if (iv) {
		                // Shortcuts
		                var IV = iv.words;
		                var IV_0 = IV[0];
		                var IV_1 = IV[1];

		                // Generate four subvectors
		                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
		                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
		                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
		                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

		                // Modify counter values
		                C[0] ^= i0;
		                C[1] ^= i1;
		                C[2] ^= i2;
		                C[3] ^= i3;
		                C[4] ^= i0;
		                C[5] ^= i1;
		                C[6] ^= i2;
		                C[7] ^= i3;

		                // Iterate the system four times
		                for (var i = 0; i < 4; i++) {
		                    nextState.call(this);
		                }
		            }
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var X = this._X;

		            // Iterate the system
		            nextState.call(this);

		            // Generate four keystream words
		            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
		            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
		            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
		            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

		            for (var i = 0; i < 4; i++) {
		                // Swap endian
		                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
		                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

		                // Encrypt
		                M[offset + i] ^= S[i];
		            }
		        },

		        blockSize: 128/32,

		        ivSize: 64/32
		    });

		    function nextState() {
		        // Shortcuts
		        var X = this._X;
		        var C = this._C;

		        // Save old counter values
		        for (var i = 0; i < 8; i++) {
		            C_[i] = C[i];
		        }

		        // Calculate new counter values
		        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
		        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
		        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
		        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
		        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
		        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
		        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
		        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
		        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

		        // Calculate the g-values
		        for (var i = 0; i < 8; i++) {
		            var gx = X[i] + C[i];

		            // Construct high and low argument for squaring
		            var ga = gx & 0xffff;
		            var gb = gx >>> 16;

		            // Calculate high and low result of squaring
		            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
		            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

		            // High XOR low
		            G[i] = gh ^ gl;
		        }

		        // Calculate new state values
		        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
		        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
		        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
		        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
		        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
		        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
		        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
		        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
		    }

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
		     */
		    C.Rabbit = StreamCipher._createHelper(Rabbit);
		}());


		return CryptoJS.Rabbit;

	}));
	}(rabbit));

	var rabbitLegacy = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var StreamCipher = C_lib.StreamCipher;
		    var C_algo = C.algo;

		    // Reusable objects
		    var S  = [];
		    var C_ = [];
		    var G  = [];

		    /**
		     * Rabbit stream cipher algorithm.
		     *
		     * This is a legacy version that neglected to convert the key to little-endian.
		     * This error doesn't affect the cipher's security,
		     * but it does affect its compatibility with other implementations.
		     */
		    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
		        _doReset: function () {
		            // Shortcuts
		            var K = this._key.words;
		            var iv = this.cfg.iv;

		            // Generate initial state values
		            var X = this._X = [
		                K[0], (K[3] << 16) | (K[2] >>> 16),
		                K[1], (K[0] << 16) | (K[3] >>> 16),
		                K[2], (K[1] << 16) | (K[0] >>> 16),
		                K[3], (K[2] << 16) | (K[1] >>> 16)
		            ];

		            // Generate initial counter values
		            var C = this._C = [
		                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
		                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
		                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
		                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
		            ];

		            // Carry bit
		            this._b = 0;

		            // Iterate the system four times
		            for (var i = 0; i < 4; i++) {
		                nextState.call(this);
		            }

		            // Modify the counters
		            for (var i = 0; i < 8; i++) {
		                C[i] ^= X[(i + 4) & 7];
		            }

		            // IV setup
		            if (iv) {
		                // Shortcuts
		                var IV = iv.words;
		                var IV_0 = IV[0];
		                var IV_1 = IV[1];

		                // Generate four subvectors
		                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
		                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
		                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
		                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

		                // Modify counter values
		                C[0] ^= i0;
		                C[1] ^= i1;
		                C[2] ^= i2;
		                C[3] ^= i3;
		                C[4] ^= i0;
		                C[5] ^= i1;
		                C[6] ^= i2;
		                C[7] ^= i3;

		                // Iterate the system four times
		                for (var i = 0; i < 4; i++) {
		                    nextState.call(this);
		                }
		            }
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var X = this._X;

		            // Iterate the system
		            nextState.call(this);

		            // Generate four keystream words
		            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
		            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
		            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
		            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

		            for (var i = 0; i < 4; i++) {
		                // Swap endian
		                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
		                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

		                // Encrypt
		                M[offset + i] ^= S[i];
		            }
		        },

		        blockSize: 128/32,

		        ivSize: 64/32
		    });

		    function nextState() {
		        // Shortcuts
		        var X = this._X;
		        var C = this._C;

		        // Save old counter values
		        for (var i = 0; i < 8; i++) {
		            C_[i] = C[i];
		        }

		        // Calculate new counter values
		        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
		        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
		        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
		        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
		        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
		        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
		        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
		        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
		        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

		        // Calculate the g-values
		        for (var i = 0; i < 8; i++) {
		            var gx = X[i] + C[i];

		            // Construct high and low argument for squaring
		            var ga = gx & 0xffff;
		            var gb = gx >>> 16;

		            // Calculate high and low result of squaring
		            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
		            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

		            // High XOR low
		            G[i] = gh ^ gl;
		        }

		        // Calculate new state values
		        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
		        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
		        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
		        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
		        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
		        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
		        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
		        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
		    }

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
		     */
		    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
		}());


		return CryptoJS.RabbitLegacy;

	}));
	}(rabbitLegacy));

	var blowfish = {exports: {}};

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var BlockCipher = C_lib.BlockCipher;
		    var C_algo = C.algo;

		    const N = 16;

		    //Origin pbox and sbox, derived from PI
		    const ORIG_P = [
		        0x243F6A88, 0x85A308D3, 0x13198A2E, 0x03707344,
		        0xA4093822, 0x299F31D0, 0x082EFA98, 0xEC4E6C89,
		        0x452821E6, 0x38D01377, 0xBE5466CF, 0x34E90C6C,
		        0xC0AC29B7, 0xC97C50DD, 0x3F84D5B5, 0xB5470917,
		        0x9216D5D9, 0x8979FB1B
		    ];

		    const ORIG_S = [
		        [   0xD1310BA6, 0x98DFB5AC, 0x2FFD72DB, 0xD01ADFB7,
		            0xB8E1AFED, 0x6A267E96, 0xBA7C9045, 0xF12C7F99,
		            0x24A19947, 0xB3916CF7, 0x0801F2E2, 0x858EFC16,
		            0x636920D8, 0x71574E69, 0xA458FEA3, 0xF4933D7E,
		            0x0D95748F, 0x728EB658, 0x718BCD58, 0x82154AEE,
		            0x7B54A41D, 0xC25A59B5, 0x9C30D539, 0x2AF26013,
		            0xC5D1B023, 0x286085F0, 0xCA417918, 0xB8DB38EF,
		            0x8E79DCB0, 0x603A180E, 0x6C9E0E8B, 0xB01E8A3E,
		            0xD71577C1, 0xBD314B27, 0x78AF2FDA, 0x55605C60,
		            0xE65525F3, 0xAA55AB94, 0x57489862, 0x63E81440,
		            0x55CA396A, 0x2AAB10B6, 0xB4CC5C34, 0x1141E8CE,
		            0xA15486AF, 0x7C72E993, 0xB3EE1411, 0x636FBC2A,
		            0x2BA9C55D, 0x741831F6, 0xCE5C3E16, 0x9B87931E,
		            0xAFD6BA33, 0x6C24CF5C, 0x7A325381, 0x28958677,
		            0x3B8F4898, 0x6B4BB9AF, 0xC4BFE81B, 0x66282193,
		            0x61D809CC, 0xFB21A991, 0x487CAC60, 0x5DEC8032,
		            0xEF845D5D, 0xE98575B1, 0xDC262302, 0xEB651B88,
		            0x23893E81, 0xD396ACC5, 0x0F6D6FF3, 0x83F44239,
		            0x2E0B4482, 0xA4842004, 0x69C8F04A, 0x9E1F9B5E,
		            0x21C66842, 0xF6E96C9A, 0x670C9C61, 0xABD388F0,
		            0x6A51A0D2, 0xD8542F68, 0x960FA728, 0xAB5133A3,
		            0x6EEF0B6C, 0x137A3BE4, 0xBA3BF050, 0x7EFB2A98,
		            0xA1F1651D, 0x39AF0176, 0x66CA593E, 0x82430E88,
		            0x8CEE8619, 0x456F9FB4, 0x7D84A5C3, 0x3B8B5EBE,
		            0xE06F75D8, 0x85C12073, 0x401A449F, 0x56C16AA6,
		            0x4ED3AA62, 0x363F7706, 0x1BFEDF72, 0x429B023D,
		            0x37D0D724, 0xD00A1248, 0xDB0FEAD3, 0x49F1C09B,
		            0x075372C9, 0x80991B7B, 0x25D479D8, 0xF6E8DEF7,
		            0xE3FE501A, 0xB6794C3B, 0x976CE0BD, 0x04C006BA,
		            0xC1A94FB6, 0x409F60C4, 0x5E5C9EC2, 0x196A2463,
		            0x68FB6FAF, 0x3E6C53B5, 0x1339B2EB, 0x3B52EC6F,
		            0x6DFC511F, 0x9B30952C, 0xCC814544, 0xAF5EBD09,
		            0xBEE3D004, 0xDE334AFD, 0x660F2807, 0x192E4BB3,
		            0xC0CBA857, 0x45C8740F, 0xD20B5F39, 0xB9D3FBDB,
		            0x5579C0BD, 0x1A60320A, 0xD6A100C6, 0x402C7279,
		            0x679F25FE, 0xFB1FA3CC, 0x8EA5E9F8, 0xDB3222F8,
		            0x3C7516DF, 0xFD616B15, 0x2F501EC8, 0xAD0552AB,
		            0x323DB5FA, 0xFD238760, 0x53317B48, 0x3E00DF82,
		            0x9E5C57BB, 0xCA6F8CA0, 0x1A87562E, 0xDF1769DB,
		            0xD542A8F6, 0x287EFFC3, 0xAC6732C6, 0x8C4F5573,
		            0x695B27B0, 0xBBCA58C8, 0xE1FFA35D, 0xB8F011A0,
		            0x10FA3D98, 0xFD2183B8, 0x4AFCB56C, 0x2DD1D35B,
		            0x9A53E479, 0xB6F84565, 0xD28E49BC, 0x4BFB9790,
		            0xE1DDF2DA, 0xA4CB7E33, 0x62FB1341, 0xCEE4C6E8,
		            0xEF20CADA, 0x36774C01, 0xD07E9EFE, 0x2BF11FB4,
		            0x95DBDA4D, 0xAE909198, 0xEAAD8E71, 0x6B93D5A0,
		            0xD08ED1D0, 0xAFC725E0, 0x8E3C5B2F, 0x8E7594B7,
		            0x8FF6E2FB, 0xF2122B64, 0x8888B812, 0x900DF01C,
		            0x4FAD5EA0, 0x688FC31C, 0xD1CFF191, 0xB3A8C1AD,
		            0x2F2F2218, 0xBE0E1777, 0xEA752DFE, 0x8B021FA1,
		            0xE5A0CC0F, 0xB56F74E8, 0x18ACF3D6, 0xCE89E299,
		            0xB4A84FE0, 0xFD13E0B7, 0x7CC43B81, 0xD2ADA8D9,
		            0x165FA266, 0x80957705, 0x93CC7314, 0x211A1477,
		            0xE6AD2065, 0x77B5FA86, 0xC75442F5, 0xFB9D35CF,
		            0xEBCDAF0C, 0x7B3E89A0, 0xD6411BD3, 0xAE1E7E49,
		            0x00250E2D, 0x2071B35E, 0x226800BB, 0x57B8E0AF,
		            0x2464369B, 0xF009B91E, 0x5563911D, 0x59DFA6AA,
		            0x78C14389, 0xD95A537F, 0x207D5BA2, 0x02E5B9C5,
		            0x83260376, 0x6295CFA9, 0x11C81968, 0x4E734A41,
		            0xB3472DCA, 0x7B14A94A, 0x1B510052, 0x9A532915,
		            0xD60F573F, 0xBC9BC6E4, 0x2B60A476, 0x81E67400,
		            0x08BA6FB5, 0x571BE91F, 0xF296EC6B, 0x2A0DD915,
		            0xB6636521, 0xE7B9F9B6, 0xFF34052E, 0xC5855664,
		            0x53B02D5D, 0xA99F8FA1, 0x08BA4799, 0x6E85076A   ],
		        [   0x4B7A70E9, 0xB5B32944, 0xDB75092E, 0xC4192623,
		            0xAD6EA6B0, 0x49A7DF7D, 0x9CEE60B8, 0x8FEDB266,
		            0xECAA8C71, 0x699A17FF, 0x5664526C, 0xC2B19EE1,
		            0x193602A5, 0x75094C29, 0xA0591340, 0xE4183A3E,
		            0x3F54989A, 0x5B429D65, 0x6B8FE4D6, 0x99F73FD6,
		            0xA1D29C07, 0xEFE830F5, 0x4D2D38E6, 0xF0255DC1,
		            0x4CDD2086, 0x8470EB26, 0x6382E9C6, 0x021ECC5E,
		            0x09686B3F, 0x3EBAEFC9, 0x3C971814, 0x6B6A70A1,
		            0x687F3584, 0x52A0E286, 0xB79C5305, 0xAA500737,
		            0x3E07841C, 0x7FDEAE5C, 0x8E7D44EC, 0x5716F2B8,
		            0xB03ADA37, 0xF0500C0D, 0xF01C1F04, 0x0200B3FF,
		            0xAE0CF51A, 0x3CB574B2, 0x25837A58, 0xDC0921BD,
		            0xD19113F9, 0x7CA92FF6, 0x94324773, 0x22F54701,
		            0x3AE5E581, 0x37C2DADC, 0xC8B57634, 0x9AF3DDA7,
		            0xA9446146, 0x0FD0030E, 0xECC8C73E, 0xA4751E41,
		            0xE238CD99, 0x3BEA0E2F, 0x3280BBA1, 0x183EB331,
		            0x4E548B38, 0x4F6DB908, 0x6F420D03, 0xF60A04BF,
		            0x2CB81290, 0x24977C79, 0x5679B072, 0xBCAF89AF,
		            0xDE9A771F, 0xD9930810, 0xB38BAE12, 0xDCCF3F2E,
		            0x5512721F, 0x2E6B7124, 0x501ADDE6, 0x9F84CD87,
		            0x7A584718, 0x7408DA17, 0xBC9F9ABC, 0xE94B7D8C,
		            0xEC7AEC3A, 0xDB851DFA, 0x63094366, 0xC464C3D2,
		            0xEF1C1847, 0x3215D908, 0xDD433B37, 0x24C2BA16,
		            0x12A14D43, 0x2A65C451, 0x50940002, 0x133AE4DD,
		            0x71DFF89E, 0x10314E55, 0x81AC77D6, 0x5F11199B,
		            0x043556F1, 0xD7A3C76B, 0x3C11183B, 0x5924A509,
		            0xF28FE6ED, 0x97F1FBFA, 0x9EBABF2C, 0x1E153C6E,
		            0x86E34570, 0xEAE96FB1, 0x860E5E0A, 0x5A3E2AB3,
		            0x771FE71C, 0x4E3D06FA, 0x2965DCB9, 0x99E71D0F,
		            0x803E89D6, 0x5266C825, 0x2E4CC978, 0x9C10B36A,
		            0xC6150EBA, 0x94E2EA78, 0xA5FC3C53, 0x1E0A2DF4,
		            0xF2F74EA7, 0x361D2B3D, 0x1939260F, 0x19C27960,
		            0x5223A708, 0xF71312B6, 0xEBADFE6E, 0xEAC31F66,
		            0xE3BC4595, 0xA67BC883, 0xB17F37D1, 0x018CFF28,
		            0xC332DDEF, 0xBE6C5AA5, 0x65582185, 0x68AB9802,
		            0xEECEA50F, 0xDB2F953B, 0x2AEF7DAD, 0x5B6E2F84,
		            0x1521B628, 0x29076170, 0xECDD4775, 0x619F1510,
		            0x13CCA830, 0xEB61BD96, 0x0334FE1E, 0xAA0363CF,
		            0xB5735C90, 0x4C70A239, 0xD59E9E0B, 0xCBAADE14,
		            0xEECC86BC, 0x60622CA7, 0x9CAB5CAB, 0xB2F3846E,
		            0x648B1EAF, 0x19BDF0CA, 0xA02369B9, 0x655ABB50,
		            0x40685A32, 0x3C2AB4B3, 0x319EE9D5, 0xC021B8F7,
		            0x9B540B19, 0x875FA099, 0x95F7997E, 0x623D7DA8,
		            0xF837889A, 0x97E32D77, 0x11ED935F, 0x16681281,
		            0x0E358829, 0xC7E61FD6, 0x96DEDFA1, 0x7858BA99,
		            0x57F584A5, 0x1B227263, 0x9B83C3FF, 0x1AC24696,
		            0xCDB30AEB, 0x532E3054, 0x8FD948E4, 0x6DBC3128,
		            0x58EBF2EF, 0x34C6FFEA, 0xFE28ED61, 0xEE7C3C73,
		            0x5D4A14D9, 0xE864B7E3, 0x42105D14, 0x203E13E0,
		            0x45EEE2B6, 0xA3AAABEA, 0xDB6C4F15, 0xFACB4FD0,
		            0xC742F442, 0xEF6ABBB5, 0x654F3B1D, 0x41CD2105,
		            0xD81E799E, 0x86854DC7, 0xE44B476A, 0x3D816250,
		            0xCF62A1F2, 0x5B8D2646, 0xFC8883A0, 0xC1C7B6A3,
		            0x7F1524C3, 0x69CB7492, 0x47848A0B, 0x5692B285,
		            0x095BBF00, 0xAD19489D, 0x1462B174, 0x23820E00,
		            0x58428D2A, 0x0C55F5EA, 0x1DADF43E, 0x233F7061,
		            0x3372F092, 0x8D937E41, 0xD65FECF1, 0x6C223BDB,
		            0x7CDE3759, 0xCBEE7460, 0x4085F2A7, 0xCE77326E,
		            0xA6078084, 0x19F8509E, 0xE8EFD855, 0x61D99735,
		            0xA969A7AA, 0xC50C06C2, 0x5A04ABFC, 0x800BCADC,
		            0x9E447A2E, 0xC3453484, 0xFDD56705, 0x0E1E9EC9,
		            0xDB73DBD3, 0x105588CD, 0x675FDA79, 0xE3674340,
		            0xC5C43465, 0x713E38D8, 0x3D28F89E, 0xF16DFF20,
		            0x153E21E7, 0x8FB03D4A, 0xE6E39F2B, 0xDB83ADF7   ],
		        [   0xE93D5A68, 0x948140F7, 0xF64C261C, 0x94692934,
		            0x411520F7, 0x7602D4F7, 0xBCF46B2E, 0xD4A20068,
		            0xD4082471, 0x3320F46A, 0x43B7D4B7, 0x500061AF,
		            0x1E39F62E, 0x97244546, 0x14214F74, 0xBF8B8840,
		            0x4D95FC1D, 0x96B591AF, 0x70F4DDD3, 0x66A02F45,
		            0xBFBC09EC, 0x03BD9785, 0x7FAC6DD0, 0x31CB8504,
		            0x96EB27B3, 0x55FD3941, 0xDA2547E6, 0xABCA0A9A,
		            0x28507825, 0x530429F4, 0x0A2C86DA, 0xE9B66DFB,
		            0x68DC1462, 0xD7486900, 0x680EC0A4, 0x27A18DEE,
		            0x4F3FFEA2, 0xE887AD8C, 0xB58CE006, 0x7AF4D6B6,
		            0xAACE1E7C, 0xD3375FEC, 0xCE78A399, 0x406B2A42,
		            0x20FE9E35, 0xD9F385B9, 0xEE39D7AB, 0x3B124E8B,
		            0x1DC9FAF7, 0x4B6D1856, 0x26A36631, 0xEAE397B2,
		            0x3A6EFA74, 0xDD5B4332, 0x6841E7F7, 0xCA7820FB,
		            0xFB0AF54E, 0xD8FEB397, 0x454056AC, 0xBA489527,
		            0x55533A3A, 0x20838D87, 0xFE6BA9B7, 0xD096954B,
		            0x55A867BC, 0xA1159A58, 0xCCA92963, 0x99E1DB33,
		            0xA62A4A56, 0x3F3125F9, 0x5EF47E1C, 0x9029317C,
		            0xFDF8E802, 0x04272F70, 0x80BB155C, 0x05282CE3,
		            0x95C11548, 0xE4C66D22, 0x48C1133F, 0xC70F86DC,
		            0x07F9C9EE, 0x41041F0F, 0x404779A4, 0x5D886E17,
		            0x325F51EB, 0xD59BC0D1, 0xF2BCC18F, 0x41113564,
		            0x257B7834, 0x602A9C60, 0xDFF8E8A3, 0x1F636C1B,
		            0x0E12B4C2, 0x02E1329E, 0xAF664FD1, 0xCAD18115,
		            0x6B2395E0, 0x333E92E1, 0x3B240B62, 0xEEBEB922,
		            0x85B2A20E, 0xE6BA0D99, 0xDE720C8C, 0x2DA2F728,
		            0xD0127845, 0x95B794FD, 0x647D0862, 0xE7CCF5F0,
		            0x5449A36F, 0x877D48FA, 0xC39DFD27, 0xF33E8D1E,
		            0x0A476341, 0x992EFF74, 0x3A6F6EAB, 0xF4F8FD37,
		            0xA812DC60, 0xA1EBDDF8, 0x991BE14C, 0xDB6E6B0D,
		            0xC67B5510, 0x6D672C37, 0x2765D43B, 0xDCD0E804,
		            0xF1290DC7, 0xCC00FFA3, 0xB5390F92, 0x690FED0B,
		            0x667B9FFB, 0xCEDB7D9C, 0xA091CF0B, 0xD9155EA3,
		            0xBB132F88, 0x515BAD24, 0x7B9479BF, 0x763BD6EB,
		            0x37392EB3, 0xCC115979, 0x8026E297, 0xF42E312D,
		            0x6842ADA7, 0xC66A2B3B, 0x12754CCC, 0x782EF11C,
		            0x6A124237, 0xB79251E7, 0x06A1BBE6, 0x4BFB6350,
		            0x1A6B1018, 0x11CAEDFA, 0x3D25BDD8, 0xE2E1C3C9,
		            0x44421659, 0x0A121386, 0xD90CEC6E, 0xD5ABEA2A,
		            0x64AF674E, 0xDA86A85F, 0xBEBFE988, 0x64E4C3FE,
		            0x9DBC8057, 0xF0F7C086, 0x60787BF8, 0x6003604D,
		            0xD1FD8346, 0xF6381FB0, 0x7745AE04, 0xD736FCCC,
		            0x83426B33, 0xF01EAB71, 0xB0804187, 0x3C005E5F,
		            0x77A057BE, 0xBDE8AE24, 0x55464299, 0xBF582E61,
		            0x4E58F48F, 0xF2DDFDA2, 0xF474EF38, 0x8789BDC2,
		            0x5366F9C3, 0xC8B38E74, 0xB475F255, 0x46FCD9B9,
		            0x7AEB2661, 0x8B1DDF84, 0x846A0E79, 0x915F95E2,
		            0x466E598E, 0x20B45770, 0x8CD55591, 0xC902DE4C,
		            0xB90BACE1, 0xBB8205D0, 0x11A86248, 0x7574A99E,
		            0xB77F19B6, 0xE0A9DC09, 0x662D09A1, 0xC4324633,
		            0xE85A1F02, 0x09F0BE8C, 0x4A99A025, 0x1D6EFE10,
		            0x1AB93D1D, 0x0BA5A4DF, 0xA186F20F, 0x2868F169,
		            0xDCB7DA83, 0x573906FE, 0xA1E2CE9B, 0x4FCD7F52,
		            0x50115E01, 0xA70683FA, 0xA002B5C4, 0x0DE6D027,
		            0x9AF88C27, 0x773F8641, 0xC3604C06, 0x61A806B5,
		            0xF0177A28, 0xC0F586E0, 0x006058AA, 0x30DC7D62,
		            0x11E69ED7, 0x2338EA63, 0x53C2DD94, 0xC2C21634,
		            0xBBCBEE56, 0x90BCB6DE, 0xEBFC7DA1, 0xCE591D76,
		            0x6F05E409, 0x4B7C0188, 0x39720A3D, 0x7C927C24,
		            0x86E3725F, 0x724D9DB9, 0x1AC15BB4, 0xD39EB8FC,
		            0xED545578, 0x08FCA5B5, 0xD83D7CD3, 0x4DAD0FC4,
		            0x1E50EF5E, 0xB161E6F8, 0xA28514D9, 0x6C51133C,
		            0x6FD5C7E7, 0x56E14EC4, 0x362ABFCE, 0xDDC6C837,
		            0xD79A3234, 0x92638212, 0x670EFA8E, 0x406000E0  ],
		        [   0x3A39CE37, 0xD3FAF5CF, 0xABC27737, 0x5AC52D1B,
		            0x5CB0679E, 0x4FA33742, 0xD3822740, 0x99BC9BBE,
		            0xD5118E9D, 0xBF0F7315, 0xD62D1C7E, 0xC700C47B,
		            0xB78C1B6B, 0x21A19045, 0xB26EB1BE, 0x6A366EB4,
		            0x5748AB2F, 0xBC946E79, 0xC6A376D2, 0x6549C2C8,
		            0x530FF8EE, 0x468DDE7D, 0xD5730A1D, 0x4CD04DC6,
		            0x2939BBDB, 0xA9BA4650, 0xAC9526E8, 0xBE5EE304,
		            0xA1FAD5F0, 0x6A2D519A, 0x63EF8CE2, 0x9A86EE22,
		            0xC089C2B8, 0x43242EF6, 0xA51E03AA, 0x9CF2D0A4,
		            0x83C061BA, 0x9BE96A4D, 0x8FE51550, 0xBA645BD6,
		            0x2826A2F9, 0xA73A3AE1, 0x4BA99586, 0xEF5562E9,
		            0xC72FEFD3, 0xF752F7DA, 0x3F046F69, 0x77FA0A59,
		            0x80E4A915, 0x87B08601, 0x9B09E6AD, 0x3B3EE593,
		            0xE990FD5A, 0x9E34D797, 0x2CF0B7D9, 0x022B8B51,
		            0x96D5AC3A, 0x017DA67D, 0xD1CF3ED6, 0x7C7D2D28,
		            0x1F9F25CF, 0xADF2B89B, 0x5AD6B472, 0x5A88F54C,
		            0xE029AC71, 0xE019A5E6, 0x47B0ACFD, 0xED93FA9B,
		            0xE8D3C48D, 0x283B57CC, 0xF8D56629, 0x79132E28,
		            0x785F0191, 0xED756055, 0xF7960E44, 0xE3D35E8C,
		            0x15056DD4, 0x88F46DBA, 0x03A16125, 0x0564F0BD,
		            0xC3EB9E15, 0x3C9057A2, 0x97271AEC, 0xA93A072A,
		            0x1B3F6D9B, 0x1E6321F5, 0xF59C66FB, 0x26DCF319,
		            0x7533D928, 0xB155FDF5, 0x03563482, 0x8ABA3CBB,
		            0x28517711, 0xC20AD9F8, 0xABCC5167, 0xCCAD925F,
		            0x4DE81751, 0x3830DC8E, 0x379D5862, 0x9320F991,
		            0xEA7A90C2, 0xFB3E7BCE, 0x5121CE64, 0x774FBE32,
		            0xA8B6E37E, 0xC3293D46, 0x48DE5369, 0x6413E680,
		            0xA2AE0810, 0xDD6DB224, 0x69852DFD, 0x09072166,
		            0xB39A460A, 0x6445C0DD, 0x586CDECF, 0x1C20C8AE,
		            0x5BBEF7DD, 0x1B588D40, 0xCCD2017F, 0x6BB4E3BB,
		            0xDDA26A7E, 0x3A59FF45, 0x3E350A44, 0xBCB4CDD5,
		            0x72EACEA8, 0xFA6484BB, 0x8D6612AE, 0xBF3C6F47,
		            0xD29BE463, 0x542F5D9E, 0xAEC2771B, 0xF64E6370,
		            0x740E0D8D, 0xE75B1357, 0xF8721671, 0xAF537D5D,
		            0x4040CB08, 0x4EB4E2CC, 0x34D2466A, 0x0115AF84,
		            0xE1B00428, 0x95983A1D, 0x06B89FB4, 0xCE6EA048,
		            0x6F3F3B82, 0x3520AB82, 0x011A1D4B, 0x277227F8,
		            0x611560B1, 0xE7933FDC, 0xBB3A792B, 0x344525BD,
		            0xA08839E1, 0x51CE794B, 0x2F32C9B7, 0xA01FBAC9,
		            0xE01CC87E, 0xBCC7D1F6, 0xCF0111C3, 0xA1E8AAC7,
		            0x1A908749, 0xD44FBD9A, 0xD0DADECB, 0xD50ADA38,
		            0x0339C32A, 0xC6913667, 0x8DF9317C, 0xE0B12B4F,
		            0xF79E59B7, 0x43F5BB3A, 0xF2D519FF, 0x27D9459C,
		            0xBF97222C, 0x15E6FC2A, 0x0F91FC71, 0x9B941525,
		            0xFAE59361, 0xCEB69CEB, 0xC2A86459, 0x12BAA8D1,
		            0xB6C1075E, 0xE3056A0C, 0x10D25065, 0xCB03A442,
		            0xE0EC6E0E, 0x1698DB3B, 0x4C98A0BE, 0x3278E964,
		            0x9F1F9532, 0xE0D392DF, 0xD3A0342B, 0x8971F21E,
		            0x1B0A7441, 0x4BA3348C, 0xC5BE7120, 0xC37632D8,
		            0xDF359F8D, 0x9B992F2E, 0xE60B6F47, 0x0FE3F11D,
		            0xE54CDA54, 0x1EDAD891, 0xCE6279CF, 0xCD3E7E6F,
		            0x1618B166, 0xFD2C1D05, 0x848FD2C5, 0xF6FB2299,
		            0xF523F357, 0xA6327623, 0x93A83531, 0x56CCCD02,
		            0xACF08162, 0x5A75EBB5, 0x6E163697, 0x88D273CC,
		            0xDE966292, 0x81B949D0, 0x4C50901B, 0x71C65614,
		            0xE6C6C7BD, 0x327A140A, 0x45E1D006, 0xC3F27B9A,
		            0xC9AA53FD, 0x62A80F00, 0xBB25BFE2, 0x35BDD2F6,
		            0x71126905, 0xB2040222, 0xB6CBCF7C, 0xCD769C2B,
		            0x53113EC0, 0x1640E3D3, 0x38ABBD60, 0x2547ADF0,
		            0xBA38209C, 0xF746CE76, 0x77AFA1C5, 0x20756060,
		            0x85CBFE4E, 0x8AE88DD8, 0x7AAAF9B0, 0x4CF9AA7E,
		            0x1948C25C, 0x02FB8A8C, 0x01C36AE4, 0xD6EBE1F9,
		            0x90D4F869, 0xA65CDEA0, 0x3F09252D, 0xC208E69F,
		            0xB74E6132, 0xCE77E25B, 0x578FDFE3, 0x3AC372E6  ]
		    ];

		    var BLOWFISH_CTX = {
		        pbox: [],
		        sbox: []
		    };

		    function F(ctx, x){
		        let a = (x >> 24) & 0xFF;
		        let b = (x >> 16) & 0xFF;
		        let c = (x >> 8) & 0xFF;
		        let d = x & 0xFF;

		        let y = ctx.sbox[0][a] + ctx.sbox[1][b];
		        y = y ^ ctx.sbox[2][c];
		        y = y + ctx.sbox[3][d];

		        return y;
		    }

		    function BlowFish_Encrypt(ctx, left, right){
		        let Xl = left;
		        let Xr = right;
		        let temp;

		        for(let i = 0; i < N; ++i){
		            Xl = Xl ^ ctx.pbox[i];
		            Xr = F(ctx, Xl) ^ Xr;

		            temp = Xl;
		            Xl = Xr;
		            Xr = temp;
		        }

		        temp = Xl;
		        Xl = Xr;
		        Xr = temp;

		        Xr = Xr ^ ctx.pbox[N];
		        Xl = Xl ^ ctx.pbox[N + 1];

		        return {left: Xl, right: Xr};
		    }

		    function BlowFish_Decrypt(ctx, left, right){
		        let Xl = left;
		        let Xr = right;
		        let temp;

		        for(let i = N + 1; i > 1; --i){
		            Xl = Xl ^ ctx.pbox[i];
		            Xr = F(ctx, Xl) ^ Xr;

		            temp = Xl;
		            Xl = Xr;
		            Xr = temp;
		        }

		        temp = Xl;
		        Xl = Xr;
		        Xr = temp;

		        Xr = Xr ^ ctx.pbox[1];
		        Xl = Xl ^ ctx.pbox[0];

		        return {left: Xl, right: Xr};
		    }

		    /**
		     * Initialization ctx's pbox and sbox.
		     *
		     * @param {Object} ctx The object has pbox and sbox.
		     * @param {Array} key An array of 32-bit words.
		     * @param {int} keysize The length of the key.
		     *
		     * @example
		     *
		     *     BlowFishInit(BLOWFISH_CTX, key, 128/32);
		     */
		    function BlowFishInit(ctx, key, keysize)
		    {
		        for(let Row = 0; Row < 4; Row++)
		        {
		            ctx.sbox[Row] = [];
		            for(let Col = 0; Col < 256; Col++)
		            {
		                ctx.sbox[Row][Col] = ORIG_S[Row][Col];
		            }
		        }

		        let keyIndex = 0;
		        for(let index = 0; index < N + 2; index++)
		        {
		            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
		            keyIndex++;
		            if(keyIndex >= keysize)
		            {
		                keyIndex = 0;
		            }
		        }

		        let Data1 = 0;
		        let Data2 = 0;
		        let res = 0;
		        for(let i = 0; i < N + 2; i += 2)
		        {
		            res = BlowFish_Encrypt(ctx, Data1, Data2);
		            Data1 = res.left;
		            Data2 = res.right;
		            ctx.pbox[i] = Data1;
		            ctx.pbox[i + 1] = Data2;
		        }

		        for(let i = 0; i < 4; i++)
		        {
		            for(let j = 0; j < 256; j += 2)
		            {
		                res = BlowFish_Encrypt(ctx, Data1, Data2);
		                Data1 = res.left;
		                Data2 = res.right;
		                ctx.sbox[i][j] = Data1;
		                ctx.sbox[i][j + 1] = Data2;
		            }
		        }

		        return true;
		    }

		    /**
		     * Blowfish block cipher algorithm.
		     */
		    var Blowfish = C_algo.Blowfish = BlockCipher.extend({
		        _doReset: function () {
		            // Skip reset of nRounds has been set before and key did not change
		            if (this._keyPriorReset === this._key) {
		                return;
		            }

		            // Shortcuts
		            var key = this._keyPriorReset = this._key;
		            var keyWords = key.words;
		            var keySize = key.sigBytes / 4;

		            //Initialization pbox and sbox
		            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
		        },

		        encryptBlock: function (M, offset) {
		            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
		            M[offset] = res.left;
		            M[offset + 1] = res.right;
		        },

		        decryptBlock: function (M, offset) {
		            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
		            M[offset] = res.left;
		            M[offset + 1] = res.right;
		        },

		        blockSize: 64/32,

		        keySize: 128/32,

		        ivSize: 64/32
		    });

		    /**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
		     */
		    C.Blowfish = BlockCipher._createHelper(Blowfish);
		}());


		return CryptoJS.Blowfish;

	}));
	}(blowfish));

	(function (module, exports) {
	(function (root, factory, undef) {
		{
			// CommonJS
			module.exports = factory(core.exports, x64Core.exports, libTypedarrays.exports, encUtf16.exports, encBase64.exports, encBase64url.exports, md5.exports, sha1.exports, sha256.exports, sha224.exports, sha512.exports, sha384.exports, sha3.exports, ripemd160.exports, hmac.exports, pbkdf2.exports, evpkdf.exports, cipherCore.exports, modeCfb.exports, modeCtr.exports, modeCtrGladman.exports, modeOfb.exports, modeEcb.exports, padAnsix923.exports, padIso10126.exports, padIso97971.exports, padZeropadding.exports, padNopadding.exports, formatHex.exports, aes.exports, tripledes.exports, rc4.exports, rabbit.exports, rabbitLegacy.exports, blowfish.exports);
		}
	}(commonjsGlobal, function (CryptoJS) {

		return CryptoJS;

	}));
	}(cryptoJs));

	var CryptoJS = cryptoJs.exports;

	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof(o);
	}

	function doRequest(url, data) {
	  console.log('doRequest', data);
	  return new Promise(function (resolve, reject) {
	    taro.exports.request({
	      header: {
	        'content-type': 'application/json'
	      },
	      method: 'POST',
	      url: 'http://127.0.0.1:5200/api/v0.1.0/' + url,
	      data: _typeof(data) == 'object' ? JSON.stringify(data) : ''
	    }).then(function (response) {
	      resolve(response.data);
	    })["catch"](function (err) {
	      reject(err);
	    });
	  });
	}

	var getPath = function getPath() {
	  var path = Taro.getCurrentInstance().router.path || '';
	  return path.match(/^\/*/) ? path.replace(/^\/*/, '') : path;
	};
	function sendPv(args, options) {
	  console.log('埋点：args', args, options);
	  // 发送埋点数据
	  doRequest("msg/upload", {
	    msg: args
	  }).then(function (res) {
	    console.log('发送成功');
	  })["catch"](function (err) {
	    console.log('发送失败', err);
	  });
	}
	var getSysInfo = function getSysInfo(options) {
	  var sysInfo = Taro.getSystemInfoSync();
	  // 使用uuid作为用户唯一标识
	  var h = {
	    platform: sysInfo.app,
	    os: sysInfo.platform,
	    lang: sysInfo.language,
	    ov: sysInfo.system,
	    vr: sysInfo.version
	  };
	  var device_info;
	  var _device_info = Taro.getStorageSync('device_info');
	  if (device_info) {
	    device_info = _device_info;
	  } else {
	    device_info = CryptoJS.SHA256(JSON.stringify(h), 'secretKey').toString();
	    Taro.setStorageSync('device_info', device_info);
	  }
	  return JSON.stringify({
	    dt: sysInfo.brand,
	    start_time: new Date().getTime(),
	    h: __assign(__assign({}, h), {
	      device_info: device_info
	    }),
	    options: options
	  });
	};

	var usePv = function usePv(_a) {
	  var getExtra = _a.getExtra;
	  taro.exports.useDidShow(function () {
	    var currentPath = getPath();
	    var sysInfo = getSysInfo({
	      path: currentPath
	    });
	    var extra = getExtra === null || getExtra === void 0 ? void 0 : getExtra();
	    extra ? sendPv(sysInfo, extra) : sendPv(sysInfo, "");
	  });
	};

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape$1(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape$1(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
	react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
	react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
	react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";

	var react_development = {exports: {}};

	/**
	 * @license React
	 * react.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module, exports) {

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var ReactVersion = '18.3.1';

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	/**
	 * Keeps track of the current dispatcher.
	 */
	var ReactCurrentDispatcher = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	/**
	 * Keeps track of the current batch's configuration such as how long an update
	 * should suspend for if it needs to.
	 */
	var ReactCurrentBatchConfig = {
	  transition: null
	};

	var ReactCurrentActQueue = {
	  current: null,
	  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
	  isBatchingLegacy: false,
	  didScheduleLegacyUpdate: false
	};

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	var ReactDebugCurrentFrame = {};
	var currentExtraStackFrame = null;
	function setExtraStackFrame(stack) {
	  {
	    currentExtraStackFrame = stack;
	  }
	}

	{
	  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
	    {
	      currentExtraStackFrame = stack;
	    }
	  }; // Stack implementation injected by the current renderer.


	  ReactDebugCurrentFrame.getCurrentStack = null;

	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var stack = ''; // Add an extra top frame while an element is being validated

	    if (currentExtraStackFrame) {
	      stack += currentExtraStackFrame;
	    } // Delegate to the injected renderer-specific implementation


	    var impl = ReactDebugCurrentFrame.getCurrentStack;

	    if (impl) {
	      stack += impl() || '';
	    }

	    return stack;
	  };
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var ReactSharedInternals = {
	  ReactCurrentDispatcher: ReactCurrentDispatcher,
	  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
	  ReactCurrentOwner: ReactCurrentOwner
	};

	{
	  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
	  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
	}

	// by calls to these methods by a Babel plugin.
	//
	// In PROD (or in packages without access to React internals),
	// they are left as they are instead.

	function warn(format) {
	  {
	    {
	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      printWarning('warn', format, args);
	    }
	  }
	}
	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	var didWarnStateUpdateForUnmountedComponent = {};

	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	    var warningKey = componentName + "." + callerName;

	    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	      return;
	    }

	    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

	    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	  }
	}
	/**
	 * This is the abstract API for an update queue.
	 */


	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	var assign = Object.assign;

	var emptyObject = {};

	{
	  Object.freeze(emptyObject);
	}
	/**
	 * Base class helpers for the updating state of a component.
	 */


	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context; // If a component has string refs, we will assign a different object later.

	  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
	  // renderer.

	  this.updater = updater || ReactNoopUpdateQueue;
	}

	Component.prototype.isReactComponent = {};
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */

	Component.prototype.setState = function (partialState, callback) {
	  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
	    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
	  }

	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */


	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */


	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };

	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(Component.prototype, methodName, {
	      get: function () {
	        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

	        return undefined;
	      }
	    });
	  };

	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	function ComponentDummy() {}

	ComponentDummy.prototype = Component.prototype;
	/**
	 * Convenience component with default shallow equality check for sCU.
	 */

	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context; // If a component has string refs, we will assign a different object later.

	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;

	// an immutable object with a single mutable value
	function createRef() {
	  var refObject = {
	    current: null
	  };

	  {
	    Object.seal(refObject);
	  }

	  return refObject;
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    }
	  };

	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    }
	  };

	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	function warnIfStringRefCannotBeAutoConverted(config) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://reactjs.org/docs/react-api.html#createelement
	 */

	function createElement(type, config, children) {
	  var propName; // Reserved names are extracted

	  var props = {};
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;

	      {
	        warnIfStringRefCannotBeAutoConverted(config);
	      }
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  } // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.


	  var childrenLength = arguments.length - 2;

	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);

	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }

	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }

	    props.children = childArray;
	  } // Resolve default props


	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;

	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  {
	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }
	  }

	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	  return newElement;
	}
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://reactjs.org/docs/react-api.html#cloneelement
	 */

	function cloneElement(element, config, children) {
	  if (element === null || element === undefined) {
	    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
	  }

	  var propName; // Original props are copied

	  var props = assign({}, element.props); // Reserved names are extracted

	  var key = element.key;
	  var ref = element.ref; // Self is preserved since the owner is preserved.

	  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.

	  var source = element._source; // Owner will be preserved, unless ref is overridden

	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    } // Remaining properties override existing props


	    var defaultProps;

	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }

	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  } // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.


	  var childrenLength = arguments.length - 2;

	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);

	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }

	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */

	function isValidElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = key.replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	  return '$' + escapedString;
	}
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */


	var didWarnAboutMaps = false;
	var userProvidedKeyEscapeRegex = /\/+/g;

	function escapeUserProvidedKey(text) {
	  return text.replace(userProvidedKeyEscapeRegex, '$&/');
	}
	/**
	 * Generate a key string that identifies a element within a set.
	 *
	 * @param {*} element A element that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */


	function getElementKey(element, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof element === 'object' && element !== null && element.key != null) {
	    // Explicit key
	    {
	      checkKeyStringCoercion(element.key);
	    }

	    return escape('' + element.key);
	  } // Implicit key determined by the index in the set


	  return index.toString(36);
	}

	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  var invokeCallback = false;

	  if (children === null) {
	    invokeCallback = true;
	  } else {
	    switch (type) {
	      case 'string':
	      case 'number':
	        invokeCallback = true;
	        break;

	      case 'object':
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	        }

	    }
	  }

	  if (invokeCallback) {
	    var _child = children;
	    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows:

	    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

	    if (isArray(mappedChild)) {
	      var escapedChildKey = '';

	      if (childKey != null) {
	        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
	      }

	      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
	        return c;
	      });
	    } else if (mappedChild != null) {
	      if (isValidElement(mappedChild)) {
	        {
	          // The `if` statement here prevents auto-disabling of the safe
	          // coercion ESLint rule, so we must manually disable it below.
	          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
	          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
	            checkKeyStringCoercion(mappedChild.key);
	          }
	        }

	        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
	        // traverseAllChildren used to do for objects as children
	        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
	        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
	        // eslint-disable-next-line react-internal/safe-string-coercion
	        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
	      }

	      array.push(mappedChild);
	    }

	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.

	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getElementKey(child, i);
	      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);

	    if (typeof iteratorFn === 'function') {
	      var iterableChildren = children;

	      {
	        // Warn about using Maps as children
	        if (iteratorFn === iterableChildren.entries) {
	          if (!didWarnAboutMaps) {
	            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
	          }

	          didWarnAboutMaps = true;
	        }
	      }

	      var iterator = iteratorFn.call(iterableChildren);
	      var step;
	      var ii = 0;

	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getElementKey(child, ii++);
	        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
	      }
	    } else if (type === 'object') {
	      // eslint-disable-next-line react-internal/safe-string-coercion
	      var childrenString = String(children);
	      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
	 *
	 * The provided mapFunction(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }

	  var result = [];
	  var count = 0;
	  mapIntoArray(children, result, '', '', function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrencount
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */


	function countChildren(children) {
	  var n = 0;
	  mapChildren(children, function () {
	    n++; // Don't return anything
	  });
	  return n;
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  mapChildren(children, function () {
	    forEachFunc.apply(this, arguments); // Don't return anything.
	  }, forEachContext);
	}
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
	 */


	function toArray(children) {
	  return mapChildren(children, function (child) {
	    return child;
	  }) || [];
	}
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */


	function onlyChild(children) {
	  if (!isValidElement(children)) {
	    throw new Error('React.Children.only expected to receive a single React element child.');
	  }

	  return children;
	}

	function createContext(defaultValue) {
	  // TODO: Second argument used to be an optional `calculateChangedBits`
	  // function. Warn to reserve for future use?
	  var context = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    // As a workaround to support multiple concurrent renderers, we categorize
	    // some renderers as primary and others as secondary. We only expect
	    // there to be two concurrent renderers at most: React Native (primary) and
	    // Fabric (secondary); React DOM (primary) and React ART (secondary).
	    // Secondary renderers store their context values on separate fields.
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    // Used to track how many concurrent renderers this context currently
	    // supports within in a single renderer. Such as parallel server rendering.
	    _threadCount: 0,
	    // These are circular
	    Provider: null,
	    Consumer: null,
	    // Add these to use same hidden class in VM as ServerContext
	    _defaultValue: null,
	    _globalName: null
	  };
	  context.Provider = {
	    $$typeof: REACT_PROVIDER_TYPE,
	    _context: context
	  };
	  var hasWarnedAboutUsingNestedContextConsumers = false;
	  var hasWarnedAboutUsingConsumerProvider = false;
	  var hasWarnedAboutDisplayNameOnConsumer = false;

	  {
	    // A separate object, but proxies back to the original context object for
	    // backwards compatibility. It has a different $$typeof, so we can properly
	    // warn for the incorrect usage of Context as a Consumer.
	    var Consumer = {
	      $$typeof: REACT_CONTEXT_TYPE,
	      _context: context
	    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

	    Object.defineProperties(Consumer, {
	      Provider: {
	        get: function () {
	          if (!hasWarnedAboutUsingConsumerProvider) {
	            hasWarnedAboutUsingConsumerProvider = true;

	            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
	          }

	          return context.Provider;
	        },
	        set: function (_Provider) {
	          context.Provider = _Provider;
	        }
	      },
	      _currentValue: {
	        get: function () {
	          return context._currentValue;
	        },
	        set: function (_currentValue) {
	          context._currentValue = _currentValue;
	        }
	      },
	      _currentValue2: {
	        get: function () {
	          return context._currentValue2;
	        },
	        set: function (_currentValue2) {
	          context._currentValue2 = _currentValue2;
	        }
	      },
	      _threadCount: {
	        get: function () {
	          return context._threadCount;
	        },
	        set: function (_threadCount) {
	          context._threadCount = _threadCount;
	        }
	      },
	      Consumer: {
	        get: function () {
	          if (!hasWarnedAboutUsingNestedContextConsumers) {
	            hasWarnedAboutUsingNestedContextConsumers = true;

	            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	          }

	          return context.Consumer;
	        }
	      },
	      displayName: {
	        get: function () {
	          return context.displayName;
	        },
	        set: function (displayName) {
	          if (!hasWarnedAboutDisplayNameOnConsumer) {
	            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

	            hasWarnedAboutDisplayNameOnConsumer = true;
	          }
	        }
	      }
	    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

	    context.Consumer = Consumer;
	  }

	  {
	    context._currentRenderer = null;
	    context._currentRenderer2 = null;
	  }

	  return context;
	}

	var Uninitialized = -1;
	var Pending = 0;
	var Resolved = 1;
	var Rejected = 2;

	function lazyInitializer(payload) {
	  if (payload._status === Uninitialized) {
	    var ctor = payload._result;
	    var thenable = ctor(); // Transition to the next state.
	    // This might throw either because it's missing or throws. If so, we treat it
	    // as still uninitialized and try again next time. Which is the same as what
	    // happens if the ctor or any wrappers processing the ctor throws. This might
	    // end up fixing it if the resolution was a concurrency bug.

	    thenable.then(function (moduleObject) {
	      if (payload._status === Pending || payload._status === Uninitialized) {
	        // Transition to the next state.
	        var resolved = payload;
	        resolved._status = Resolved;
	        resolved._result = moduleObject;
	      }
	    }, function (error) {
	      if (payload._status === Pending || payload._status === Uninitialized) {
	        // Transition to the next state.
	        var rejected = payload;
	        rejected._status = Rejected;
	        rejected._result = error;
	      }
	    });

	    if (payload._status === Uninitialized) {
	      // In case, we're still uninitialized, then we're waiting for the thenable
	      // to resolve. Set it as pending in the meantime.
	      var pending = payload;
	      pending._status = Pending;
	      pending._result = thenable;
	    }
	  }

	  if (payload._status === Resolved) {
	    var moduleObject = payload._result;

	    {
	      if (moduleObject === undefined) {
	        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
	        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
	      }
	    }

	    {
	      if (!('default' in moduleObject)) {
	        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
	        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
	      }
	    }

	    return moduleObject.default;
	  } else {
	    throw payload._result;
	  }
	}

	function lazy(ctor) {
	  var payload = {
	    // We use these fields to store the result.
	    _status: Uninitialized,
	    _result: ctor
	  };
	  var lazyType = {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: payload,
	    _init: lazyInitializer
	  };

	  {
	    // In production, this would just set it on the object.
	    var defaultProps;
	    var propTypes; // $FlowFixMe

	    Object.defineProperties(lazyType, {
	      defaultProps: {
	        configurable: true,
	        get: function () {
	          return defaultProps;
	        },
	        set: function (newDefaultProps) {
	          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

	          defaultProps = newDefaultProps; // Match production behavior more closely:
	          // $FlowFixMe

	          Object.defineProperty(lazyType, 'defaultProps', {
	            enumerable: true
	          });
	        }
	      },
	      propTypes: {
	        configurable: true,
	        get: function () {
	          return propTypes;
	        },
	        set: function (newPropTypes) {
	          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

	          propTypes = newPropTypes; // Match production behavior more closely:
	          // $FlowFixMe

	          Object.defineProperty(lazyType, 'propTypes', {
	            enumerable: true
	          });
	        }
	      }
	    });
	  }

	  return lazyType;
	}

	function forwardRef(render) {
	  {
	    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
	      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
	    } else if (typeof render !== 'function') {
	      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
	    } else {
	      if (render.length !== 0 && render.length !== 2) {
	        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
	      }
	    }

	    if (render != null) {
	      if (render.defaultProps != null || render.propTypes != null) {
	        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
	      }
	    }
	  }

	  var elementType = {
	    $$typeof: REACT_FORWARD_REF_TYPE,
	    render: render
	  };

	  {
	    var ownName;
	    Object.defineProperty(elementType, 'displayName', {
	      enumerable: false,
	      configurable: true,
	      get: function () {
	        return ownName;
	      },
	      set: function (name) {
	        ownName = name; // The inner component shouldn't inherit this display name in most cases,
	        // because the component may be used elsewhere.
	        // But it's nice for anonymous functions to inherit the name,
	        // so that our component-stack generation logic will display their frames.
	        // An anonymous function generally suggests a pattern like:
	        //   React.forwardRef((props, ref) => {...});
	        // This kind of inner function is not used elsewhere so the side effect is okay.

	        if (!render.name && !render.displayName) {
	          render.displayName = name;
	        }
	      }
	    });
	  }

	  return elementType;
	}

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function memo(type, compare) {
	  {
	    if (!isValidElementType(type)) {
	      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
	    }
	  }

	  var elementType = {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: compare === undefined ? null : compare
	  };

	  {
	    var ownName;
	    Object.defineProperty(elementType, 'displayName', {
	      enumerable: false,
	      configurable: true,
	      get: function () {
	        return ownName;
	      },
	      set: function (name) {
	        ownName = name; // The inner component shouldn't inherit this display name in most cases,
	        // because the component may be used elsewhere.
	        // But it's nice for anonymous functions to inherit the name,
	        // so that our component-stack generation logic will display their frames.
	        // An anonymous function generally suggests a pattern like:
	        //   React.memo((props) => {...});
	        // This kind of inner function is not used elsewhere so the side effect is okay.

	        if (!type.name && !type.displayName) {
	          type.displayName = name;
	        }
	      }
	    });
	  }

	  return elementType;
	}

	function resolveDispatcher() {
	  var dispatcher = ReactCurrentDispatcher.current;

	  {
	    if (dispatcher === null) {
	      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
	    }
	  } // Will result in a null access error if accessed outside render phase. We
	  // intentionally don't throw our own error because this is in a hot path.
	  // Also helps ensure this is inlined.


	  return dispatcher;
	}
	function useContext(Context) {
	  var dispatcher = resolveDispatcher();

	  {
	    // TODO: add a more generic warning for invalid values.
	    if (Context._context !== undefined) {
	      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
	      // and nobody should be using this in existing code.

	      if (realContext.Consumer === Context) {
	        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
	      } else if (realContext.Provider === Context) {
	        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
	      }
	    }
	  }

	  return dispatcher.useContext(Context);
	}
	function useState(initialState) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useState(initialState);
	}
	function useReducer(reducer, initialArg, init) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useReducer(reducer, initialArg, init);
	}
	function useRef(initialValue) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useRef(initialValue);
	}
	function useEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useEffect(create, deps);
	}
	function useInsertionEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useInsertionEffect(create, deps);
	}
	function useLayoutEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useLayoutEffect(create, deps);
	}
	function useCallback(callback, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useCallback(callback, deps);
	}
	function useMemo(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useMemo(create, deps);
	}
	function useImperativeHandle(ref, create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useImperativeHandle(ref, create, deps);
	}
	function useDebugValue(value, formatterFn) {
	  {
	    var dispatcher = resolveDispatcher();
	    return dispatcher.useDebugValue(value, formatterFn);
	  }
	}
	function useTransition() {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useTransition();
	}
	function useDeferredValue(value) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useDeferredValue(value);
	}
	function useId() {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useId();
	}
	function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	}

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher$1.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher$1.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      setExtraStackFrame(stack);
	    } else {
	      setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }

	  return '';
	}

	function getSourceInfoErrorAddendum(source) {
	  if (source !== undefined) {
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }

	  return '';
	}

	function getSourceInfoErrorAddendumForProps(elementProps) {
	  if (elementProps !== null && elementProps !== undefined) {
	    return getSourceInfoErrorAddendum(elementProps.__source);
	  }

	  return '';
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	    if (parentName) {
	      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	    }
	  }

	  return info;
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }

	  element._store.validated = true;
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }

	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.

	  var childOwner = '';

	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	  }

	  {
	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }

	  if (isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];

	      if (isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);

	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;

	        while (!(step = iterator.next()).done) {
	          if (isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}
	function createElementWithValidation(type, props, children) {
	  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.

	  if (!validType) {
	    var info = '';

	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }

	    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }

	    var typeString;

	    if (type === null) {
	      typeString = 'null';
	    } else if (isArray(type)) {
	      typeString = 'array';
	    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	      info = ' Did you accidentally export a JSX literal instead of a component?';
	    } else {
	      typeString = typeof type;
	    }

	    {
	      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }
	  }

	  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.

	  if (element == null) {
	    return element;
	  } // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)


	  if (validType) {
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	  }

	  if (type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }

	  return element;
	}
	var didWarnAboutDeprecatedCreateFactory = false;
	function createFactoryWithValidation(type) {
	  var validatedFactory = createElementWithValidation.bind(null, type);
	  validatedFactory.type = type;

	  {
	    if (!didWarnAboutDeprecatedCreateFactory) {
	      didWarnAboutDeprecatedCreateFactory = true;

	      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
	    } // Legacy hook: remove it


	    Object.defineProperty(validatedFactory, 'type', {
	      enumerable: false,
	      get: function () {
	        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

	        Object.defineProperty(this, 'type', {
	          value: type
	        });
	        return type;
	      }
	    });
	  }

	  return validatedFactory;
	}
	function cloneElementWithValidation(element, props, children) {
	  var newElement = cloneElement.apply(this, arguments);

	  for (var i = 2; i < arguments.length; i++) {
	    validateChildKeys(arguments[i], newElement.type);
	  }

	  validatePropTypes(newElement);
	  return newElement;
	}

	function startTransition(scope, options) {
	  var prevTransition = ReactCurrentBatchConfig.transition;
	  ReactCurrentBatchConfig.transition = {};
	  var currentTransition = ReactCurrentBatchConfig.transition;

	  {
	    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
	  }

	  try {
	    scope();
	  } finally {
	    ReactCurrentBatchConfig.transition = prevTransition;

	    {
	      if (prevTransition === null && currentTransition._updatedFibers) {
	        var updatedFibersCount = currentTransition._updatedFibers.size;

	        if (updatedFibersCount > 10) {
	          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
	        }

	        currentTransition._updatedFibers.clear();
	      }
	    }
	  }
	}

	var didWarnAboutMessageChannel = false;
	var enqueueTaskImpl = null;
	function enqueueTask(task) {
	  if (enqueueTaskImpl === null) {
	    try {
	      // read require off the module object to get around the bundlers.
	      // we don't want them to detect a require and bundle a Node polyfill.
	      var requireString = ('require' + Math.random()).slice(0, 7);
	      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
	      // version of setImmediate, bypassing fake timers if any.

	      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
	    } catch (_err) {
	      // we're in a browser
	      // we can't use regular timers because they may still be faked
	      // so we try MessageChannel+postMessage instead
	      enqueueTaskImpl = function (callback) {
	        {
	          if (didWarnAboutMessageChannel === false) {
	            didWarnAboutMessageChannel = true;

	            if (typeof MessageChannel === 'undefined') {
	              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
	            }
	          }
	        }

	        var channel = new MessageChannel();
	        channel.port1.onmessage = callback;
	        channel.port2.postMessage(undefined);
	      };
	    }
	  }

	  return enqueueTaskImpl(task);
	}

	var actScopeDepth = 0;
	var didWarnNoAwaitAct = false;
	function act(callback) {
	  {
	    // `act` calls can be nested, so we track the depth. This represents the
	    // number of `act` scopes on the stack.
	    var prevActScopeDepth = actScopeDepth;
	    actScopeDepth++;

	    if (ReactCurrentActQueue.current === null) {
	      // This is the outermost `act` scope. Initialize the queue. The reconciler
	      // will detect the queue and use it instead of Scheduler.
	      ReactCurrentActQueue.current = [];
	    }

	    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
	    var result;

	    try {
	      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
	      // set to `true` while the given callback is executed, not for updates
	      // triggered during an async event, because this is how the legacy
	      // implementation of `act` behaved.
	      ReactCurrentActQueue.isBatchingLegacy = true;
	      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
	      // which flushed updates immediately after the scope function exits, even
	      // if it's an async function.

	      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
	        var queue = ReactCurrentActQueue.current;

	        if (queue !== null) {
	          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
	          flushActQueue(queue);
	        }
	      }
	    } catch (error) {
	      popActScope(prevActScopeDepth);
	      throw error;
	    } finally {
	      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
	    }

	    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
	      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
	      // for it to resolve before exiting the current scope.

	      var wasAwaited = false;
	      var thenable = {
	        then: function (resolve, reject) {
	          wasAwaited = true;
	          thenableResult.then(function (returnValue) {
	            popActScope(prevActScopeDepth);

	            if (actScopeDepth === 0) {
	              // We've exited the outermost act scope. Recursively flush the
	              // queue until there's no remaining work.
	              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	            } else {
	              resolve(returnValue);
	            }
	          }, function (error) {
	            // The callback threw an error.
	            popActScope(prevActScopeDepth);
	            reject(error);
	          });
	        }
	      };

	      {
	        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
	          // eslint-disable-next-line no-undef
	          Promise.resolve().then(function () {}).then(function () {
	            if (!wasAwaited) {
	              didWarnNoAwaitAct = true;

	              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
	            }
	          });
	        }
	      }

	      return thenable;
	    } else {
	      var returnValue = result; // The callback is not an async function. Exit the current scope
	      // immediately, without awaiting.

	      popActScope(prevActScopeDepth);

	      if (actScopeDepth === 0) {
	        // Exiting the outermost act scope. Flush the queue.
	        var _queue = ReactCurrentActQueue.current;

	        if (_queue !== null) {
	          flushActQueue(_queue);
	          ReactCurrentActQueue.current = null;
	        } // Return a thenable. If the user awaits it, we'll flush again in
	        // case additional work was scheduled by a microtask.


	        var _thenable = {
	          then: function (resolve, reject) {
	            // Confirm we haven't re-entered another `act` scope, in case
	            // the user does something weird like await the thenable
	            // multiple times.
	            if (ReactCurrentActQueue.current === null) {
	              // Recursively flush the queue until there's no remaining work.
	              ReactCurrentActQueue.current = [];
	              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	            } else {
	              resolve(returnValue);
	            }
	          }
	        };
	        return _thenable;
	      } else {
	        // Since we're inside a nested `act` scope, the returned thenable
	        // immediately resolves. The outer scope will flush the queue.
	        var _thenable2 = {
	          then: function (resolve, reject) {
	            resolve(returnValue);
	          }
	        };
	        return _thenable2;
	      }
	    }
	  }
	}

	function popActScope(prevActScopeDepth) {
	  {
	    if (prevActScopeDepth !== actScopeDepth - 1) {
	      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
	    }

	    actScopeDepth = prevActScopeDepth;
	  }
	}

	function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
	  {
	    var queue = ReactCurrentActQueue.current;

	    if (queue !== null) {
	      try {
	        flushActQueue(queue);
	        enqueueTask(function () {
	          if (queue.length === 0) {
	            // No additional work was scheduled. Finish.
	            ReactCurrentActQueue.current = null;
	            resolve(returnValue);
	          } else {
	            // Keep flushing work until there's none left.
	            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	          }
	        });
	      } catch (error) {
	        reject(error);
	      }
	    } else {
	      resolve(returnValue);
	    }
	  }
	}

	var isFlushing = false;

	function flushActQueue(queue) {
	  {
	    if (!isFlushing) {
	      // Prevent re-entrance.
	      isFlushing = true;
	      var i = 0;

	      try {
	        for (; i < queue.length; i++) {
	          var callback = queue[i];

	          do {
	            callback = callback(true);
	          } while (callback !== null);
	        }

	        queue.length = 0;
	      } catch (error) {
	        // If something throws, leave the remaining callbacks on the queue.
	        queue = queue.slice(i + 1);
	        throw error;
	      } finally {
	        isFlushing = false;
	      }
	    }
	  }
	}

	var createElement$1 =  createElementWithValidation ;
	var cloneElement$1 =  cloneElementWithValidation ;
	var createFactory =  createFactoryWithValidation ;
	var Children = {
	  map: mapChildren,
	  forEach: forEachChildren,
	  count: countChildren,
	  toArray: toArray,
	  only: onlyChild
	};

	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
	exports.act = act;
	exports.cloneElement = cloneElement$1;
	exports.createContext = createContext;
	exports.createElement = createElement$1;
	exports.createFactory = createFactory;
	exports.createRef = createRef;
	exports.forwardRef = forwardRef;
	exports.isValidElement = isValidElement;
	exports.lazy = lazy;
	exports.memo = memo;
	exports.startTransition = startTransition;
	exports.unstable_act = act;
	exports.useCallback = useCallback;
	exports.useContext = useContext;
	exports.useDebugValue = useDebugValue;
	exports.useDeferredValue = useDeferredValue;
	exports.useEffect = useEffect;
	exports.useId = useId;
	exports.useImperativeHandle = useImperativeHandle;
	exports.useInsertionEffect = useInsertionEffect;
	exports.useLayoutEffect = useLayoutEffect;
	exports.useMemo = useMemo;
	exports.useReducer = useReducer;
	exports.useRef = useRef;
	exports.useState = useState;
	exports.useSyncExternalStore = useSyncExternalStore;
	exports.useTransition = useTransition;
	exports.version = ReactVersion;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	}(react_development, react_development.exports));

	if (process.env.NODE_ENV === 'production') {
	  react.exports = react_production_min;
	} else {
	  react.exports = react_development.exports;
	}

	var LogContext = react.exports.createContext({});
	var useLog = function useLog() {
	  var message = react.exports.useContext(LogContext);
	  var listenDOM = react.exports.useRef(null);
	  // 分清依赖关系
	  var reportMessage = react.exports.useCallback(function (data, type) {
	    if (type == 'pv') {
	      console.log('组件 pv 上报', message);
	    } else if (type == 'click') {
	      console.log('组件 click 上报', message, data);
	    }
	  }, [message]);
	  react.exports.useEffect(function () {
	    var handleClick = function handleClick(e) {
	      reportMessage(e.target, 'click');
	    };
	    if (listenDOM.current) {
	      listenDOM.current.addEventListener('click', handleClick);
	    }
	    return function () {
	      listenDOM.current && listenDOM.current.removeEventListener('click', handleClick);
	    };
	  }, [reportMessage]);
	  return [listenDOM, reportMessage];
	};

	exports.LogContext = LogContext;
	exports.useLog = useLog;
	exports.usePv = usePv;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
