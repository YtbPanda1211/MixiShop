! function(t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 63)
}({
    1: function(t, e) {
        t.exports = window.jQuery
    },
    63: function(t, e, i) {
        t.exports = i(64)
    },
    64: function(t, e, i) {
        "use strict";
        i.r(e);
        i(65), i(66), i(67), i(68), i(69);
        var r = !1,
            o = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
        o || (r = jQuery(".has-image-zoom .slide").easyZoom({
            loadingNotice: "",
            preventClicks: !1
        })), jQuery("table.my_account_orders").wrap('<div class="touch-scroll-table"/>'), jQuery("a.woocommerce-review-link").on("click", (function(t) {
            jQuery.scrollTo(".reviews_tab", {
                duration: 300,
                offset: -150
            })
        })), jQuery(".single_add_to_cart_button").on("click", (function() {
            var t = jQuery(this),
                e = t.closest("form.cart");
            e ? e.on("submit", (function() {
                t.addClass("loading")
            })) : t.hasClass("disabled") || t.addClass("loading"), jQuery(window).on("pageshow", (function() {
                t.removeClass("loading")
            }))
        }));
        var a = jQuery(".product-thumbnails .first img").attr("data-src") ? jQuery(".product-thumbnails .first img").attr("data-src") : jQuery(".product-thumbnails .first img").attr("src"),
            s = jQuery("form.variations_form"),
            n = function() {
                r && r.length && r.filter(".has-image-zoom .slide.first").data("easyZoom").swap(jQuery(".has-image-zoom .slide.first img").attr("src"), jQuery(".has-image-zoom .slide.first img").attr("data-large_image"))
            },
            c = function() {
                var t = jQuery(".product-gallery-slider");
                t.data("flickity") && t.flickity("select", 0)
            },
            u = function() {
                var t = jQuery(".product-gallery-slider");
                t.data("flickity") && t.imagesLoaded((function() {
                    t.flickity("resize")
                }))
            };

        function l(t) {
            if (jQuery(".cart-item .nav-dropdown").length) jQuery(".cart-item").addClass("current-dropdown cart-active"), jQuery(".shop-container").on("click", (function() {
                jQuery(".cart-item").removeClass("current-dropdown cart-active")
            })), jQuery(".cart-item").hover((function() {
                jQuery(".cart-active").removeClass("cart-active")
            })), setTimeout((function() {
                jQuery(".cart-active").removeClass("current-dropdown")
            }), t);
            else {
                var e = jQuery.magnificPopup.open ? 0 : 300;
                e && jQuery.magnificPopup.close(), setTimeout((function() {
                    jQuery(".cart-item .off-canvas-toggle").trigger("click")
                }), e)
            }
        }
        s.on("show_variation", (function(t, e) {
            e.hasOwnProperty("image") && e.image.thumb_src ? (jQuery(".product-gallery-slider-old .slide.first img, .sticky-add-to-cart-img, .product-thumbnails .first img, .product-gallery-slider .slide.first .zoomImg").attr("src", e.image.thumb_src).attr("srcset", ""), c(), n(), u()) : (jQuery(".product-thumbnails .first img").attr("src", a), u())
        })), s.on("hide_variation", (function(t, e) {
            jQuery(".product-thumbnails .first img, .sticky-add-to-cart-img").attr("src", a), u()
        })), s.on("click", ".reset_variations", (function() {
            jQuery(".product-thumbnails .first img, .sticky-add-to-cart-img").attr("src", a), c(), n(), u()
        })), jQuery(document).ready((function() {
            jQuery(".has-lightbox .product-gallery-slider").each((function() {
                jQuery(this).magnificPopup({
                    delegate: "a",
                    type: "image",
                    tLoading: '<div class="loading-spin centered dark"></div>',
                    closeMarkup: flatsomeVars.lightbox.close_markup,
                    closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                    gallery: {
                        enabled: !0,
                        navigateByImgClick: !0,
                        preload: [0, 1],
                        arrowMarkup: '<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>'
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        verticalFit: !1
                    }
                })
            }))
        })), jQuery(".zoom-button").on("click", (function(t) {
            jQuery(".product-gallery-slider").find(".is-selected a").trigger("click"), t.preventDefault()
        })), o && jQuery(window).on("load", (function() {
            u()
        })), jQuery("body").on("added_to_cart", (function() {
            l("5000");
            var t = jQuery("#header"),
                e = t.hasClass("has-sticky"),
                i = jQuery(".header-wrapper", t);
            e && jQuery(".cart-item.has-dropdown").length && t.hasClass("sticky-hide-on-scroll--active") && (i.addClass("stuck"), t.removeClass("sticky-hide-on-scroll--active"))
        })), jQuery(document.body).on("updated_cart_totals", (function() {
            jQuery(document).trigger("yith_wcwl_reload_fragments");
            var t = jQuery(".cart-wrapper");
            Flatsome.attach("lazy-load-images", t), Flatsome.attach("quick-view", t), Flatsome.attach("wishlist", t), Flatsome.attach("cart-refresh", t), Flatsome.attach("equalize-box", t)
        })), jQuery(document).ajaxComplete((function() {
            Flatsome.attach(jQuery(".quantity").parent()), Flatsome.attach("lightboxes-link", jQuery(".woocommerce-checkout .woocommerce-terms-and-conditions-wrapper"))
        })), jQuery(document).on("yith_infs_adding_elem", (function(t) {
            Flatsome.attach(jQuery(".shop-container"))
        })), jQuery(document).ready((function() {
            jQuery("span.added-to-cart").length && l("5000")
        })), jQuery(".disable-lightbox a").on("click", (function(t) {
            t.preventDefault()
        })), jQuery(document).ready((function() {
            if (jQuery(".custom-product-page").length) {
                var t = jQuery("#respond p.stars");
                if (t.length > 1) {
                    var e = t[0].outerHTML;
                    t.remove(), jQuery('select[id="rating"]').hide().before(e)
                }
            }
        })), jQuery(".sticky-add-to-cart-wrapper").waypoint((function(t) {
            var e = jQuery(this.element),
                i = jQuery(this.element).find(".sticky-add-to-cart");
            jQuery(".wc-variation-selection-needed").on("click", (function() {
                jQuery.scrollTo(".sticky-add-to-cart-wrapper", {
                    duration: 0,
                    offset: -200
                })
            })), "down" === t && (e.css({
                height: e.outerHeight()
            }), i.addClass("sticky-add-to-cart--active"), jQuery("body").addClass("has-sticky-product-cart")), "up" === t && (i.removeClass("sticky-add-to-cart--active"), e.css({
                height: "auto"
            }), jQuery("body").removeClass("has-sticky-product-cart"))
        })), setTimeout((function() {
            jQuery(document.body).on("country_to_state_changed", (function() {
                "undefined" != typeof floatlabels && floatlabels.rebuild()
            }))
        }), 500)
    },
    65: function(t, e, i) {
        var r, o;
        /*!
         * @name        easyzoom
         * @author       <>
         * @modified    Friday, May 15th, 2020
         * @version     2.5.2
         */
        ! function(a, s) {
            "use strict";
            r = [i(1)], void 0 === (o = function(t) {
                ! function(t) {
                    var e, i, r, o, a, s, n = {
                        loadingNotice: "Loading image",
                        errorNotice: "The image could not be loaded",
                        errorDuration: 2500,
                        linkAttribute: "href",
                        preventClicks: !0,
                        beforeShow: t.noop,
                        beforeHide: t.noop,
                        onShow: t.noop,
                        onHide: t.noop,
                        onMove: t.noop
                    };

                    function c(e, i) {
                        this.$target = t(e), this.opts = t.extend({}, n, i, this.$target.data()), void 0 === this.isOpen && this._init()
                    }
                    c.prototype._init = function() {
                        this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = t('<div class="easyzoom-flyout" />'), this.$notice = t('<div class="easyzoom-notice" />'), this.$target.on({
                            "mousemove.easyzoom touchmove.easyzoom": t.proxy(this._onMove, this),
                            "mouseleave.easyzoom touchend.easyzoom": t.proxy(this._onLeave, this),
                            "mouseenter.easyzoom touchstart.easyzoom": t.proxy(this._onEnter, this)
                        }), this.opts.preventClicks && this.$target.on("click.easyzoom", (function(t) {
                            t.preventDefault()
                        }))
                    }, c.prototype.show = function(t, a) {
                        var s = this;
                        if (!1 !== this.opts.beforeShow.call(this)) {
                            if (!this.isReady) return this._loadImage(this.$link.attr(this.opts.linkAttribute), (function() {
                                !s.isMouseOver && a || s.show(t)
                            }));
                            this.$target.append(this.$flyout);
                            var n = this.$target.outerWidth(),
                                c = this.$target.outerHeight(),
                                u = this.$flyout.width(),
                                l = this.$flyout.height(),
                                d = this.$zoom.width(),
                                h = this.$zoom.height();
                            e = Math.ceil(d - u), i = Math.ceil(h - l), e < 0 && (e = 0), i < 0 && (i = 0), r = e / n, o = i / c, this.isOpen = !0, this.opts.onShow.call(this), t && this._move(t)
                        }
                    }, c.prototype._onEnter = function(t) {
                        var e = t.originalEvent.touches;
                        this.isMouseOver = !0, e && 1 != e.length || (t.preventDefault(), this.show(t, !0))
                    }, c.prototype._onMove = function(t) {
                        this.isOpen && (t.preventDefault(), this._move(t))
                    }, c.prototype._onLeave = function() {
                        this.isMouseOver = !1, this.isOpen && this.hide()
                    }, c.prototype._onLoad = function(t) {
                        t.currentTarget.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), t.data.call && t.data())
                    }, c.prototype._onError = function() {
                        var t = this;
                        this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), this.detachNotice = setTimeout((function() {
                            t.$notice.detach(), t.detachNotice = null
                        }), this.opts.errorDuration)
                    }, c.prototype._loadImage = function(e, i) {
                        var r = new Image;
                        this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), this.$zoom = t(r).on("error", t.proxy(this._onError, this)).on("load", i, t.proxy(this._onLoad, this)), r.style.position = "absolute", r.src = e
                    }, c.prototype._move = function(t) {
                        if (0 === t.type.indexOf("touch")) {
                            var n = t.touches || t.originalEvent.touches;
                            a = n[0].pageX, s = n[0].pageY
                        } else a = t.pageX || a, s = t.pageY || s;
                        var c = this.$target.offset(),
                            u = a - c.left,
                            l = s - c.top,
                            d = Math.ceil(u * r),
                            h = Math.ceil(l * o);
                        if (d < 0 || h < 0 || e < d || i < h) this.hide();
                        else {
                            var m = -1 * h,
                                y = -1 * d;
                            this.$zoom.css({
                                top: m,
                                left: y
                            }), this.opts.onMove.call(this, m, y)
                        }
                    }, c.prototype.hide = function() {
                        this.isOpen && !1 !== this.opts.beforeHide.call(this) && (this.$flyout.detach(), this.isOpen = !1, this.opts.onHide.call(this))
                    }, c.prototype.swap = function(e, i, r) {
                        this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), this.$image.attr({
                            src: e,
                            srcset: t.isArray(r) ? r.join() : r
                        }), this.$link.attr(this.opts.linkAttribute, i)
                    }, c.prototype.teardown = function() {
                        this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, delete this.isReady
                    }, t.fn.easyZoom = function(e) {
                        return this.each((function() {
                            var i = t.data(this, "easyZoom");
                            i ? void 0 === i.isOpen && i._init() : t.data(this, "easyZoom", new c(this, e))
                        }))
                    }
                }(t)
            }.apply(e, r)) || (t.exports = o)
        }()
    },
    66: function(t, e) {
        Flatsome.plugin("addQty", (function(t, e) {
            jQuery(t).on("click", ".plus, .minus", (function() {
                var t = jQuery(this),
                    e = t.closest(".quantity").find(".qty"),
                    i = parseFloat(e.val()),
                    r = parseFloat(e.attr("max")),
                    o = parseFloat(e.attr("min")),
                    a = e.attr("step");
                i && "" !== i && "NaN" !== i || (i = 0), "" !== r && "NaN" !== r || (r = ""), "" !== o && "NaN" !== o || (o = 0), "any" !== a && "" !== a && void 0 !== a && "NaN" !== parseFloat(a) || (a = 1), t.is(".plus") ? r && (r === i || i > r) ? e.val(r) : e.val((i + parseFloat(a)).toFixed(a.uxGetDecimals())) : o && (o === i || i < o) ? e.val(o) : i > 0 && e.val((i - parseFloat(a)).toFixed(a.uxGetDecimals())), e.trigger("change")
            })), String.prototype.uxGetDecimals || (String.prototype.uxGetDecimals = function() {
                var t = ("" + this).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
            })
        }))
    },
    67: function(t, e) {
        Flatsome.behavior("add-qty", {
            attach: function(t) {
                jQuery(".quantity", t).addQty()
            }
        })
    },
    68: function(t, e) {
        Flatsome.behavior("equalize-box", {
            attach: function(t) {
                var e = {
                    ScreenSize: {
                        LARGE: 1,
                        MEDIUM: 2,
                        SMALL: 3
                    },
                    equalizeItems: function(t) {
                        var e = this;
                        e.maxHeight = 0, e.rowEnd = e.disablePerRow ? e.boxCount : e.colPerRow, e.$items = [], e.rating = {
                            present: !1,
                            height: 0,
                            dummy: '<div class="js-star-rating star-rating" style="opacity: 0; visibility: hidden"></div>'
                        }, jQuery(t, e.currentElement).each((function(t) {
                            var i = jQuery(this);
                            e.$items.push(i), i.height(""), i.height() > e.maxHeight && (e.maxHeight = i.height()), i.children(".js-star-rating").remove();
                            var r = i.children(".star-rating");
                            r.length && (e.rating.present = !0, e.rating.height = r.height()), t !== e.rowEnd - 1 && t !== e.boxCount - 1 || (e.$items.forEach((function(t) {
                                t.height(e.maxHeight), e.maybeAddDummyRating(t)
                            })), e.rowEnd += e.colPerRow, e.maxHeight = 0, e.$items = [], e.rating.present = !1)
                        }))
                    },
                    getColsPerRow: function() {
                        var t, e = jQuery(this.currentElement).attr("class");
                        switch (this.getScreenSize()) {
                            case this.ScreenSize.LARGE:
                                return (t = /large-columns-(\d+)/g.exec(e)) ? parseInt(t[1]) : 3;
                            case this.ScreenSize.MEDIUM:
                                return (t = /medium-columns-(\d+)/g.exec(e)) ? parseInt(t[1]) : 3;
                            case this.ScreenSize.SMALL:
                                return (t = /small-columns-(\d+)/g.exec(e)) ? parseInt(t[1]) : 2
                        }
                    },
                    maybeAddDummyRating: function(t) {
                        var e = t;
                        this.rating.present && e.hasClass("price-wrapper") && (e.children(".star-rating").length || (e.prepend(this.rating.dummy), e.children(".js-star-rating").height(this.rating.height)))
                    },
                    getScreenSize: function() {
                        return window.matchMedia("(min-width: 850px)").matches ? this.ScreenSize.LARGE : window.matchMedia("(min-width: 550px) and (max-width: 849px)").matches ? this.ScreenSize.MEDIUM : window.matchMedia("(max-width: 549px)").matches ? this.ScreenSize.SMALL : void 0
                    },
                    init: function() {
                        var e = this,
                            i = [".product-title", ".price-wrapper", ".box-excerpt", ".add-to-cart-button"];
                        jQuery(".equalize-box", t).each((function(t, r) {
                            e.currentElement = r, e.colPerRow = e.getColsPerRow(), 1 !== e.colPerRow && (e.disablePerRow = jQuery(r).hasClass("row-slider") || jQuery(r).hasClass("row-grid"), e.boxCount = jQuery(".box-text", e.currentElement).length, i.forEach((function(t) {
                                e.equalizeItems(".box-text " + t)
                            })))
                        }))
                    }
                };
                e.init(), jQuery(window).on("resize", (function() {
                    e.init()
                }))
            }
        })
    },
    69: function(t, e) {
        Flatsome.behavior("quick-view", {
            attach: function(t) {
                jQuery(".quick-view", t).each((function(t, e) {
                    jQuery(e).hasClass("quick-view-added") || (jQuery(e).on("click", (function(t) {
                        if ("" != jQuery(this).attr("data-prod")) {
                            jQuery(this).parent().parent().addClass("processing");
                            var e = {
                                action: "flatsome_quickview",
                                product: jQuery(this).attr("data-prod")
                            };
                            jQuery.post(flatsomeVars.ajaxurl, e, (function(t) {
                                jQuery(".processing").removeClass("processing"), jQuery.magnificPopup.open({
                                    removalDelay: 300,
                                    autoFocusLast: !1,
                                    closeMarkup: flatsomeVars.lightbox.close_markup,
                                    closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                                    items: {
                                        src: '<div class="product-lightbox lightbox-content">' + t + "</div>",
                                        type: "inline"
                                    }
                                });
                                var e = jQuery(".product-gallery-slider img", t).length > 1;
                                setTimeout((function() {
                                    jQuery(".product-lightbox").imagesLoaded((function() {
                                        jQuery(".product-lightbox .slider").flickity({
                                            cellAlign: "left",
                                            wrapAround: !0,
                                            autoPlay: !1,
                                            prevNextButtons: !0,
                                            adaptiveHeight: !0,
                                            imagesLoaded: !0,
                                            dragThreshold: 15,
                                            pageDots: e,
                                            rightToLeft: flatsomeVars.rtl
                                        })
                                    }))
                                }), 300);
                                var i = jQuery(".product-lightbox form.variations_form");
                                jQuery(".product-lightbox form").hasClass("variations_form") && i.wc_variation_form();
                                var r = jQuery(".product-lightbox .product-gallery-slider"),
                                    o = jQuery(".product-lightbox .product-gallery-slider .slide.first img"),
                                    a = jQuery(".product-lightbox .product-gallery-slider .slide.first a"),
                                    s = o.attr("data-src") ? o.attr("data-src") : o.attr("src"),
                                    n = function() {
                                        r.data("flickity") && r.flickity("select", 0)
                                    },
                                    c = function() {
                                        r.data("flickity") && r.imagesLoaded((function() {
                                            r.flickity("resize")
                                        }))
                                    };
                                i.on("show_variation", (function(t, e) {
                                    e.image.src ? (o.attr("src", e.image.src).attr("srcset", ""), a.attr("href", e.image_link), n(), c()) : e.image_src && (o.attr("src", e.image_src).attr("srcset", ""), a.attr("href", e.image_link), n(), c())
                                })), i.on("hide_variation", (function(t, e) {
                                    o.attr("src", s).attr("srcset", ""), c()
                                })), i.on("click", ".reset_variations", (function() {
                                    o.attr("src", s).attr("srcset", ""), n(), c()
                                })), jQuery(".product-lightbox .quantity").addQty()
                            })), t.preventDefault()
                        }
                    })), jQuery(e).addClass("quick-view-added"))
                }))
            }
        })
    }
});