var sbiajaxurl = "http://sunnysideaccessory.localhost/wp-admin/admin-ajax.php";
var sb_instagram_js_options = {"font_method":"svg","resized_url":"http:\/\/sunnysideaccessory.localhost\/wp-content\/uploads\/sb-instagram-feed-images\/","placeholder":"http:\/\/sunnysideaccessory.localhost\/wp-content\/plugins\/instagram-feed\/img\/placeholder.png"};

var sbi_js_exists = void 0 !== sbi_js_exists;
sbi_js_exists || (! function (i) {
  function e() {
    var i, e, s, t = t || {
      VER: "0.9.944"
    };
    t.bgs_Available = !1, t.bgs_CheckRunned = !1,
      function (i) {
        i.fn.extend({
          sbi_imgLiquid: function (e) {
            this.defaults = {
                fill: !0,
                verticalAlign: "center",
                horizontalAlign: "center",
                useBackgroundSize: !0,
                useDataHtmlAttr: !0,
                responsive: !0,
                delay: 0,
                fadeInTime: 0,
                removeBoxBackground: !0,
                hardPixels: !0,
                responsiveCheckTime: 500,
                timecheckvisibility: 500,
                onStart: null,
                onFinish: null,
                onItemStart: null,
                onItemFinish: null,
                onItemError: null
              },
              function () {
                if (!t.bgs_CheckRunned) {
                  t.bgs_CheckRunned = !0;
                  var e = i('<span style="background-size:cover" />');
                  i("body").append(e),
                    function () {
                      var i = e[0];
                      if (i && window.getComputedStyle) {
                        var s = window.getComputedStyle(i, null);
                        s && s.backgroundSize && (t.bgs_Available = "cover" === s.backgroundSize)
                      }
                    }(), e.remove()
                }
              }();
            var s = this;
            return this.options = e, this.settings = i.extend({}, this.defaults, this.options), this.settings.onStart && this.settings.onStart(), this.each(function (e) {
              function n() {
                (r.responsive || h.data("sbi_imgLiquid_oldProcessed")) && h.data("sbi_imgLiquid_settings") && (r = h.data("sbi_imgLiquid_settings"), l.actualSize = l.get(0).offsetWidth + l.get(0).offsetHeight / 1e4, l.sizeOld && l.actualSize !== l.sizeOld && o(), l.sizeOld = l.actualSize, setTimeout(n, r.responsiveCheckTime))
              }

              function a() {
                h.data("sbi_imgLiquid_error", !0), l.addClass("sbi_imgLiquid_error"), r.onItemError && r.onItemError(e, l, h), d()
              }

              function o() {
                var i, s, t, n, a, o, g, c, f = 0,
                  u = 0,
                  b = l.width(),
                  _ = l.height();
                void 0 === h.data("owidth") && h.data("owidth", h[0].width), void 0 === h.data("oheight") && h.data("oheight", h[0].height), r.fill === b / _ >= h.data("owidth") / h.data("oheight") ? (i = "100%", s = "auto", t = Math.floor(b), n = Math.floor(b * (h.data("oheight") / h.data("owidth")))) : (i = "auto", s = "100%", t = Math.floor(_ * (h.data("owidth") / h.data("oheight"))), n = Math.floor(_)), g = b - t, "left" === (a = r.horizontalAlign.toLowerCase()) && (u = 0), "center" === a && (u = .5 * g), "right" === a && (u = g), -1 !== a.indexOf("%") && ((a = parseInt(a.replace("%", ""), 10)) > 0 && (u = g * a * .01)), c = _ - n, "left" === (o = r.verticalAlign.toLowerCase()) && (f = 0), "center" === o && (f = .5 * c), "bottom" === o && (f = c), -1 !== o.indexOf("%") && ((o = parseInt(o.replace("%", ""), 10)) > 0 && (f = c * o * .01)), r.hardPixels && (i = t, s = n), h.css({
                  width: i,
                  height: s,
                  "margin-left": Math.floor(u),
                  "margin-top": Math.floor(f)
                }), h.data("sbi_imgLiquid_oldProcessed") || (h.fadeTo(r.fadeInTime, 1), h.data("sbi_imgLiquid_oldProcessed", !0), r.removeBoxBackground && l.css("background-image", "none"), l.addClass("sbi_imgLiquid_nobgSize"), l.addClass("sbi_imgLiquid_ready")), r.onItemFinish && r.onItemFinish(e, l, h), d()
              }

              function d() {
                e === s.length - 1 && s.settings.onFinish && s.settings.onFinish()
              }
              var r = s.settings,
                l = i(this),
                h = i("img:first", l);
              return h.length ? (h.data("sbi_imgLiquid_settings") ? (l.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"), r = i.extend({}, h.data("sbi_imgLiquid_settings"), s.options)) : r = i.extend({}, s.settings, function () {
                var i = {};
                if (s.settings.useDataHtmlAttr) {
                  var e = l.attr("data-sbi_imgLiquid-fill"),
                    n = l.attr("data-sbi_imgLiquid-horizontalAlign"),
                    a = l.attr("data-sbi_imgLiquid-verticalAlign");
                  ("true" === e || "false" === e) && (i.fill = Boolean("true" === e)), void 0 === n || "left" !== n && "center" !== n && "right" !== n && -1 === n.indexOf("%") || (i.horizontalAlign = n), void 0 === a || "top" !== a && "bottom" !== a && "center" !== a && -1 === a.indexOf("%") || (i.verticalAlign = a)
                }
                return t.isIE && s.settings.ieFadeInDisabled && (i.fadeInTime = 0), i
              }()), h.data("sbi_imgLiquid_settings", r), r.onItemStart && r.onItemStart(e, l, h), void(t.bgs_Available && r.useBackgroundSize ? (-1 === l.css("background-image").indexOf(encodeURI(h.attr("src"))) && l.css({
                "background-image": 'url("' + encodeURI(h.attr("src")) + '")'
              }), l.css({
                "background-size": r.fill ? "cover" : "contain",
                "background-position": (r.horizontalAlign + " " + r.verticalAlign).toLowerCase(),
                "background-repeat": "no-repeat"
              }), i("a:first", l).css({
                display: "block",
                width: "100%",
                height: "100%"
              }), i("img", l).css({
                display: "none"
              }), r.onItemFinish && r.onItemFinish(e, l, h), l.addClass("sbi_imgLiquid_bgSize"), l.addClass("sbi_imgLiquid_ready"), d()) : function s() {
                if (h.data("oldSrc") && h.data("oldSrc") !== h.attr("src")) {
                  var t = h.clone().removeAttr("style");
                  return t.data("sbi_imgLiquid_settings", h.data("sbi_imgLiquid_settings")), h.parent().prepend(t), h.remove(), (h = t)[0].width = 0, void setTimeout(s, 10)
                }
                return h.data("sbi_imgLiquid_oldProcessed") ? void o() : (h.data("sbi_imgLiquid_oldProcessed", !1), h.data("oldSrc", h.attr("src")), i("img:not(:first)", l).css("display", "none"), l.css({
                  overflow: "hidden"
                }), h.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({
                  visibility: "visible",
                  "max-width": "none",
                  "max-height": "none",
                  width: "auto",
                  height: "auto",
                  display: "block"
                }), h.on("error", a), h[0].onerror = a, function i() {
                  h.data("sbi_imgLiquid_error") || h.data("sbi_imgLiquid_loaded") || h.data("sbi_imgLiquid_oldProcessed") || (l.is(":visible") && h[0].complete && h[0].width > 0 && h[0].height > 0 ? (h.data("sbi_imgLiquid_loaded", !0), setTimeout(o, e * r.delay)) : setTimeout(i, r.timecheckvisibility))
                }(), void n())
              }())) : void a()
            })
          }
        })
      }(jQuery), i = t.injectCss, e = document.getElementsByTagName("head")[0], (s = document.createElement("style")).type = "text/css", s.styleSheet ? s.styleSheet.cssText = i : s.appendChild(document.createTextNode(i)), e.appendChild(s)
  }

  function s() {
    this.feeds = {}, this.options = sb_instagram_js_options
  }

  function t(i, e, s) {
    this.el = i, this.index = e, this.settings = s, this.minImageWidth = 0, this.imageResolution = 150, this.resizedImages = {}, this.needsResizing = [], this.outOfPages = !1, this.isInitialized = !1
  }

  function n(e, s) {
    i.ajax({
      url: sbiajaxurl,
      type: "post",
      data: e,
      success: s
    })
  }
  s.prototype = {
    createPage: function (e, s) {
      void 0 !== window.sbiajaxurl && -1 !== window.sbiajaxurl.indexOf(window.location.hostname) || (window.sbiajaxurl = location.protocol + "//" + window.location.hostname + "/wp-admin/admin-ajax.php"), i(".sbi_no_js_error_message").remove(), i(".sbi_no_js").removeClass("sbi_no_js"), e(s)
    },
    createFeeds: function (e) {
      e.whenFeedsCreated(i(".sbi").each(function (e) {
        i(this).attr("data-sbi-index", e + 1);
        var s = i(this),
          a = void 0 !== s.attr("data-sbi-flags") ? s.attr("data-sbi-flags").split(",") : [],
          o = void 0 !== s.attr("data-options") ? JSON.parse(s.attr("data-options")) : {};
        if (a.indexOf("testAjax") > -1) {
          window.sbi.triggeredTest = !0;
          n({
            action: "sbi_on_ajax_test_trigger"
          }, function (i) {
            console.log("did test")
          })
        }
        var d = {
          cols: s.attr("data-cols"),
          colsmobile: void 0 !== s.attr("data-colsmobile") && "same" !== s.attr("data-colsmobile") ? s.attr("data-colsmobile") : s.attr("data-cols"),
          num: s.attr("data-num"),
          imgRes: s.attr("data-res"),
          feedID: s.attr("data-feedid"),
          shortCodeAtts: s.attr("data-shortcode-atts"),
          resizingEnabled: -1 === a.indexOf("resizeDisable"),
          imageLoadEnabled: -1 === a.indexOf("imageLoadDisable"),
          debugEnabled: a.indexOf("debug") > -1,
          favorLocal: a.indexOf("favorLocal") > -1,
          ajaxPostLoad: a.indexOf("ajaxPostLoad") > -1,
          gdpr: a.indexOf("gdpr") > -1,
          overrideBlockCDN: a.indexOf("overrideBlockCDN") > -1,
          consentGiven: !1,
          autoMinRes: 1,
          general: o
        };
        window.sbi.feeds[e] = function (i, e, s) {
          return new t(i, e, s)
        }(this, e, d), window.sbi.feeds[e].setResizedImages(), window.sbi.feeds[e].init();
        var r = jQuery.Event("sbiafterfeedcreate");
        r.feed = window.sbi.feeds[e], jQuery(window).trigger(r)
      }))
    },
    afterFeedsCreated: function () {
      i(".sb_instagram_header").each(function () {
        var e = i(this);
        e.find(".sbi_header_link").hover(function () {
          e.find(".sbi_header_img_hover").addClass("sbi_fade_in")
        }, function () {
          e.find(".sbi_header_img_hover").removeClass("sbi_fade_in")
        })
      })
    },
    encodeHTML: function (i) {
      return void 0 === i ? "" : i.replace(/(>)/g, "&gt;").replace(/(<)/g, "&lt;").replace(/(&lt;br\/&gt;)/g, "<br>").replace(/(&lt;br&gt;)/g, "<br>")
    },
    urlDetect: function (i) {
      return i.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g)
    }
  }, t.prototype = {
    init: function () {
      var e = this;
      e.settings.consentGiven = e.checkConsent(), i(this.el).find(".sbi_photo").parent("p").length && i(this.el).addClass("sbi_no_autop"), i(this.el).find("#sbi_mod_error").length && i(this.el).prepend(i(this.el).find("#sbi_mod_error")), this.settings.ajaxPostLoad ? this.getNewPostSet() : this.afterInitialImagesLoaded();
      var s, t = (s = 0, function (i, e) {
        clearTimeout(s), s = setTimeout(i, e)
      });
      jQuery(window).resize(function () {
        /*
        t(function () {
          e.afterResize()
        }, 500)
        */
      }), i(this.el).find(".sbi_item").each(function () {
        e.lazyLoadCheck(i(this))
      })
    },
    initLayout: function () {},
    afterInitialImagesLoaded: function () {
      this.initLayout(), this.loadMoreButtonInit(), this.hideExtraImagesForWidth(), this.beforeNewImagesRevealed(), this.revealNewImages(), this.afterNewImagesRevealed()
    },
    afterResize: function () {
      this.setImageHeight(), this.setImageResolution(), this.maybeRaiseImageResolution(), this.setImageSizeClass()
    },
    afterLoadMoreClicked: function (i) {
      i.find(".sbi_loader").removeClass("sbi_hidden"), i.find(".sbi_btn_text").addClass("sbi_hidden"), i.closest(".sbi").find(".sbi_num_diff_hide").addClass("sbi_transition").removeClass("sbi_num_diff_hide")
    },
    afterNewImagesLoaded: function () {
      var e = i(this.el),
        s = this;
      this.beforeNewImagesRevealed(), this.revealNewImages(), this.afterNewImagesRevealed(), setTimeout(function () {
        e.find(".sbi_loader").addClass("sbi_hidden"), e.find(".sbi_btn_text").removeClass("sbi_hidden"), s.maybeRaiseImageResolution()
      }, 500)
    },
    beforeNewImagesRevealed: function () {
      this.setImageHeight(), this.maybeRaiseImageResolution(!0), this.setImageSizeClass()
    },
    revealNewImages: function () {
      var e = i(this.el);
      e.find(".sbi-screenreader").each(function () {
        i(this).find("img").remove()
      }), "function" == typeof sbi_custom_js && setTimeout(function () {
        sbi_custom_js()
      }, 100), this.applyImageLiquid(), e.find(".sbi_item").each(function (i) {
        jQuery(this).find(".sbi_photo").hover(function () {
          jQuery(this).fadeTo(200, .85)
        }, function () {
          jQuery(this).stop().fadeTo(500, 1)
        })
      }), setTimeout(function () {
        jQuery("#sbi_images .sbi_item.sbi_new").removeClass("sbi_new");
        var i = 10;
        e.find(".sbi_transition").each(function () {
          var e = jQuery(this);
          setTimeout(function () {
            e.removeClass("sbi_transition")
          }, i), i += 10
        })
      }, 500)
    },
    lazyLoadCheck: function (e) {
      if (e.find(".sbi_photo").length && !e.closest(".sbi").hasClass("sbi-no-ll-check")) {
        var s = this.getImageUrls(e),
          t = void 0 !== s[640] ? s[640] : e.find(".sbi_photo").attr("data-full-res");
        if (!this.settings.consentGiven && t.indexOf("scontent") > -1) return;
        e.find(".sbi_photo img").each(function () {
          t && void 0 !== i(this).attr("data-src") && i(this).attr("data-src", t), t && void 0 !== i(this).attr("data-orig-src") && i(this).attr("data-orig-src", t), i(this).on("load", function () {
            !i(this).hasClass("sbi-replaced") && i(this).attr("src").indexOf("placeholder") > -1 && (i(this).addClass("sbi-replaced"), t && (i(this).attr("src", t), i(this).closest(".sbi_imgLiquid_bgSize").length && i(this).closest(".sbi_imgLiquid_bgSize").css("background-image", "url(" + t + ")")))
          })
        })
      }
    },
    afterNewImagesRevealed: function () {
      this.listenForVisibilityChange(), this.sendNeedsResizingToServer(), this.settings.imageLoadEnabled || i(".sbi_no_resraise").removeClass("sbi_no_resraise");
      var e = i.Event("sbiafterimagesloaded");
      e.el = i(this.el), i(window).trigger(e)
    },
    setResizedImages: function () {
      i(this.el).find(".sbi_resized_image_data").length && void 0 !== i(this.el).find(".sbi_resized_image_data").attr("data-resized") && 0 === i(this.el).find(".sbi_resized_image_data").attr("data-resized").indexOf('{"') && (this.resizedImages = JSON.parse(i(this.el).find(".sbi_resized_image_data").attr("data-resized")), i(this.el).find(".sbi_resized_image_data").remove())
    },
    sendNeedsResizingToServer: function () {
      var e = this;
      if (e.needsResizing.length > 0 && e.settings.resizingEnabled) {
        var s = i(this.el).find(".sbi_item").length,
          t = void 0 !== e.settings.general.cache_all && e.settings.general.cache_all;
        n({
          action: "sbi_resized_images_submit",
          needs_resizing: e.needsResizing,
          offset: s,
          feed_id: e.settings.feedID,
          atts: e.settings.shortCodeAtts,
          cache_all: t
        }, function (i) {
          if (0 === i.trim().indexOf("{")) {
            var s = JSON.parse(i);
            for (var t in e.settings.debugEnabled && console.log(s), s) s.hasOwnProperty(t) && (e.resizedImages[t] = s[t]);
            e.maybeRaiseImageResolution(), setTimeout(function () {
              e.afterResize()
            }, 500)
          }
        })
      }
    },
    loadMoreButtonInit: function () {
      var e = i(this.el),
        s = this;
      e.find("#sbi_load .sbi_load_btn").off().on("click", function () {
        s.afterLoadMoreClicked(jQuery(this)), s.getNewPostSet()
      })
    },
    getNewPostSet: function () {
      var e = i(this.el),
        s = this;
      n({
        action: "sbi_load_more_clicked",
        offset: e.find(".sbi_item").length,
        feed_id: s.settings.feedID,
        atts: s.settings.shortCodeAtts,
        current_resolution: s.imageResolution
      }, function (t) {
        if (0 === t.trim().indexOf("{")) {
          var n = JSON.parse(t);
          s.settings.debugEnabled && console.log(n), s.appendNewPosts(n.html), s.addResizedImages(n.resizedImages), s.settings.ajaxPostLoad ? (s.settings.ajaxPostLoad = !1, s.afterInitialImagesLoaded()) : s.afterNewImagesLoaded(), n.feedStatus.shouldPaginate ? s.outOfPages = !1 : (s.outOfPages = !0, e.find(".sbi_load_btn").hide()), i(".sbi_no_js").removeClass("sbi_no_js")
        }
      })
    },
    appendNewPosts: function (e) {
      var s = i(this.el);
      s.find("#sbi_images .sbi_item").length ? s.find("#sbi_images .sbi_item").last().after(e) : s.find("#sbi_images").append(e)
    },
    addResizedImages: function (i) {
      for (var e in i) this.resizedImages[e] = i[e]
    },
    setImageHeight: function () {
      var e = i(this.el),
        s = e.find(".sbi_photo").eq(0).innerWidth(),
        t = this.getColumnCount(),
        n = e.find("#sbi_images").innerWidth() - e.find("#sbi_images").width(),
        a = n / 2;
      sbi_photo_width_manual = e.find("#sbi_images").width() / t - n, e.find(".sbi_photo").css("height", 0), e.find(".sbi-owl-nav").length && setTimeout(function () {
        var i = 2;
        e.find(".sbi_owl2row-item").length && (i = 1);
        var s = e.find(".sbi_photo").eq(0).innerWidth() / i;
        s += parseInt(a) * (2 - i + 2), e.find(".sbi-owl-nav div").css("top", s)
      }, 100)
    },
    maybeRaiseSingleImageResolution: function (e, s, t) {
      var n = this,
        a = n.getImageUrls(e),
        o = e.find(".sbi_photo img").attr("src"),
        d = 150,
        r = e.find("img").get(0),
        l = o === window.sbi.options.placeholder ? 1 : r.naturalWidth / r.naturalHeight;
      t = void 0 !== t && t;
      if (!(e.hasClass("sbi_no_resraise") || e.hasClass("sbi_had_error") || e.find(".sbi_link_area").length && e.find(".sbi_link_area").hasClass("sbi_had_error")))
        if (a.length < 1) e.find(".sbi_link_area").length && e.find(".sbi_link_area").attr("href", window.sbi.options.placeholder.replace("placeholder.png", "thumb-placeholder.png"));
        else {
          (e.find(".sbi_link_area").length && e.find(".sbi_link_area").attr("href") === window.sbi.options.placeholder.replace("placeholder.png", "thumb-placeholder.png") || !n.settings.consentGiven) && e.find(".sbi_link_area").attr("href", a[a.length - 1]), void 0 !== a[640] && e.find(".sbi_photo").attr("data-full-res", a[640]), i.each(a, function (i, e) {
            e === o && (d = parseInt(i), t = !1)
          });
          var h = 640;
          switch (n.settings.imgRes) {
          case "thumb":
            h = 150;
            break;
          case "medium":
            h = 320;
            break;
          case "full":
            h = 640;
            break;
          default:
            var g = Math.max(n.settings.autoMinRes, e.find(".sbi_photo").innerWidth()),
              c = n.getBestResolutionForAuto(g, l, e);
            switch (c) {
            case 320:
              h = 320;
              break;
            case 150:
              h = 150
            }
          }
          if (h > d || o === window.sbi.options.placeholder || t) {
            if (n.settings.debugEnabled) {
              var f = o === window.sbi.options.placeholder ? "was placeholder" : "too small";
              console.log("rais res for " + o, f)
            }
            var u = a[h].split("?ig_cache_key")[0];
            if (o !== u && (e.find(".sbi_photo img").attr("src", u), e.find(".sbi_photo").css("background-image", 'url("' + u + '")')), d = h, "auto" === n.settings.imgRes) {
              var b = !1;
              e.find(".sbi_photo img").on("load", function () {
                var s = i(this),
                  t = s.get(0).naturalWidth / s.get(0).naturalHeight;
                if (1e3 !== s.get(0).naturalWidth && t > l && !b) {
                  switch (n.settings.debugEnabled && console.log("rais res again for aspect ratio change " + o), b = !0, g = e.find(".sbi_photo").innerWidth(), c = n.getBestResolutionForAuto(g, t, e), h = 640, c) {
                  case 320:
                    h = 320;
                    break;
                  case 150:
                    h = 150
                  }
                  h > d && (u = a[h].split("?ig_cache_key")[0], s.attr("src", u), s.closest(".sbi_photo").css("background-image", 'url("' + u + '")')), "masonry" !== n.layout && "highlight" !== n.layout || (i(n.el).find("#sbi_images").smashotope(n.isotopeArgs), setTimeout(function () {
                    i(n.el).find("#sbi_images").smashotope(n.isotopeArgs)
                  }, 500))
                } else if (n.settings.debugEnabled) {
                  var r = b ? "already checked" : "no aspect ratio change";
                  console.log("not raising res for replacement  " + o, r)
                }
              })
            }
          }
          e.find("img").on("error", function () {
            if (i(this).hasClass("sbi_img_error")) console.log("unfixed error " + i(this).attr("src"));
            else {
              var e;
              if (i(this).addClass("sbi_img_error"), !(i(this).attr("src").indexOf("media/?size=") > -1 || i(this).attr("src").indexOf("cdninstagram") > -1 || i(this).attr("src").indexOf("fbcdn") > -1) && n.settings.consentGiven) {
                if ("undefined" !== i(this).closest(".sbi_photo").attr("data-img-src-set")) void 0 !== (e = JSON.parse(i(this).closest(".sbi_photo").attr("data-img-src-set").replace(/\\\//g, "/"))).d && (i(this).attr("src", e.d), i(this).closest(".sbi_photo").css("background-image", "url(" + e.d + ")"), i(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href", e[640]).addClass("sbi_had_error"))
              } else n.settings.favorLocal = !0, void 0 !== (e = n.getImageUrls(i(this).closest(".sbi_item")))[640] && (i(this).attr("src", e[640]), i(this).closest(".sbi_photo").css("background-image", "url(" + e[640] + ")"), i(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href", e[640]).addClass("sbi_had_error"));
              setTimeout(function () {
                n.afterResize()
              }, 1500)
            }
          })
        }
    },
    maybeRaiseImageResolution: function (e) {
      var s = this,
        t = void 0 !== e && !0 === e ? ".sbi_item.sbi_new" : ".sbi_item",
        n = !s.isInitialized;
      i(s.el).find(t).each(function (e) {
        !i(this).hasClass("sbi_num_diff_hide") && i(this).find(".sbi_photo").length && void 0 !== i(this).find(".sbi_photo").attr("data-img-src-set") && s.maybeRaiseSingleImageResolution(i(this), e, n)
      }), s.isInitialized = !0
    },
    getBestResolutionForAuto: function (e, s, t) {
      (isNaN(s) || s < 1) && (s = 1);
      var n = e * s,
        a = 10 * Math.ceil(n / 10),
        o = [150, 320, 640];
      if (t.hasClass("sbi_highlighted") && (a *= 2), -1 === o.indexOf(parseInt(a))) {
        var d = !1;
        i.each(o, function (i, e) {
          e > parseInt(a) && !d && (a = e, d = !0)
        })
      }
      return a
    },
    hideExtraImagesForWidth: function () {
      if ("carousel" !== this.layout) {
        var e = i(this.el),
          s = void 0 !== e.attr("data-num") && "" !== e.attr("data-num") ? parseInt(e.attr("data-num")) : 1,
          t = void 0 !== e.attr("data-nummobile") && "" !== e.attr("data-nummobile") ? parseInt(e.attr("data-nummobile")) : s;
        i(window).width() < 480 ? t < e.find(".sbi_item").length && e.find(".sbi_item").slice(t - e.find(".sbi_item").length).addClass("sbi_num_diff_hide") : s < e.find(".sbi_item").length && e.find(".sbi_item").slice(s - e.find(".sbi_item").length).addClass("sbi_num_diff_hide")
      }
    },
    setImageSizeClass: function () {
      var e = i(this.el);
      e.removeClass("sbi_small sbi_medium");
      var s = e.innerWidth(),
        t = parseInt(e.find("#sbi_images").outerWidth() - e.find("#sbi_images").width()) / 2,
        n = this.getColumnCount(),
        a = (s - t * (n + 2)) / n;
      a > 120 && a < 240 ? e.addClass("sbi_medium") : a <= 120 && e.addClass("sbi_small")
    },
    setMinImageWidth: function () {
      i(this.el).find(".sbi_item .sbi_photo").first().length ? this.minImageWidth = i(this.el).find(".sbi_item .sbi_photo").first().innerWidth() : this.minImageWidth = 150
    },
    setImageResolution: function () {
      if ("auto" === this.settings.imgRes) this.imageResolution = "auto";
      else switch (this.settings.imgRes) {
      case "thumb":
        this.imageResolution = 150;
        break;
      case "medium":
        this.imageResolution = 320;
        break;
      default:
        this.imageResolution = 640
      }
    },
    getImageUrls: function (i) {
      var e = JSON.parse(i.find(".sbi_photo").attr("data-img-src-set").replace(/\\\//g, "/")),
        s = i.attr("id").replace("sbi_", "");
      if (this.settings.consentGiven || this.settings.overrideBlockCDN || (e = []), void 0 !== this.resizedImages[s] && "video" !== this.resizedImages[s] && "pending" !== this.resizedImages[s] && "error" !== this.resizedImages[s].id && "video" !== this.resizedImages[s].id && "pending" !== this.resizedImages[s].id) {
        if (void 0 !== this.resizedImages[s].sizes) {
          var t = [];
          void 0 !== this.resizedImages[s].sizes.full && (e[640] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "full.jpg", t.push(640)), void 0 !== this.resizedImages[s].sizes.low && (e[320] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "low.jpg", t.push(320)), void 0 !== this.resizedImages[s].sizes.thumb && (t.push(150), e[150] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "thumb.jpg"), this.settings.favorLocal && (-1 === t.indexOf(640) && t.indexOf(320) > -1 && (e[640] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "low.jpg"), -1 === t.indexOf(320) && (t.indexOf(640) > -1 ? e[320] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "full.jpg" : t.indexOf(150) > -1 && (e[320] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "thumb.jpg")), -1 === t.indexOf(150) && (t.indexOf(320) > -1 ? e[150] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "low.jpg" : t.indexOf(640) > -1 && (e[150] = sb_instagram_js_options.resized_url + this.resizedImages[s].id + "full.jpg")))
        }
      } else(void 0 === this.resizedImages[s] || void 0 !== this.resizedImages[s].id && "pending" !== this.resizedImages[s].id && "error" !== this.resizedImages[s].id) && this.addToNeedsResizing(s);
      return e
    },
    getAvatarUrl: function (i, e) {
      if ("" === i) return "";
      var s = this.settings.general.avatars;
      return "local" === (e = void 0 !== e ? e : "local") ? void 0 !== s["LCL" + i] && 1 === parseInt(s["LCL" + i]) ? sb_instagram_js_options.resized_url + i + ".jpg" : void 0 !== s[i] ? s[i] : "" : void 0 !== s[i] ? s[i] : void 0 !== s["LCL" + i] && 1 === parseInt(s["LCL" + i]) ? sb_instagram_js_options.resized_url + i + ".jpg" : ""
    },
    addToNeedsResizing: function (i) {
      -1 === this.needsResizing.indexOf(i) && this.needsResizing.push(i)
    },
    applyImageLiquid: function () {
      var s = i(this.el);
      e(), "function" == typeof s.find(".sbi_photo").sbi_imgLiquid && s.find(".sbi_photo").sbi_imgLiquid({
        fill: !0
      })
    },
    listenForVisibilityChange: function () {
      var e, s, t, n = this;
      e = jQuery, s = {
        callback: function () {},
        runOnLoad: !0,
        frequency: 100,
        sbiPreviousVisibility: null
      }, t = {
        sbiCheckVisibility: function (i, e) {
          if (jQuery.contains(document, i[0])) {
            var s = e.sbiPreviousVisibility,
              n = i.is(":visible");
            e.sbiPreviousVisibility = n, null == s ? e.runOnLoad && e.callback(i, n) : s !== n && e.callback(i, n), setTimeout(function () {
              t.sbiCheckVisibility(i, e)
            }, e.frequency)
          }
        }
      }, e.fn.sbiVisibilityChanged = function (i) {
        var n = e.extend({}, s, i);
        return this.each(function () {
          t.sbiCheckVisibility(e(this), n)
        })
      }, "function" == typeof i(this.el).filter(":hidden").sbiVisibilityChanged && i(this.el).filter(":hidden").sbiVisibilityChanged({
        callback: function (i, e) {
          n.afterResize()
        },
        runOnLoad: !1
      })
    },
    getColumnCount: function () {
      var e = i(this.el),
        s = this.settings.cols,
        t = this.settings.colsmobile,
        n = s;
      return sbiWindowWidth = window.innerWidth, e.hasClass("sbi_mob_col_auto") ? (sbiWindowWidth < 640 && parseInt(s) > 2 && parseInt(s) < 7 && (n = 2), sbiWindowWidth < 640 && parseInt(s) > 6 && parseInt(s) < 11 && (n = 4), sbiWindowWidth <= 480 && parseInt(s) > 2 && (n = 1)) : sbiWindowWidth <= 480 && (n = t), parseInt(n)
    },
    checkConsent: function () {
      if (this.settings.consentGiven || !this.settings.gdpr) return !0;
      if ("undefined" != typeof CLI_Cookie) null !== CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) && (this.settings.consentGiven = "yes" === CLI_Cookie.read("cookielawinfo-checkbox-non-necessary"));
      else if (void 0 !== window.cnArgs) {
        var i = ("; " + document.cookie).split("; cookie_notice_accepted=");
        if (2 === i.length) {
          var e = i.pop().split(";").shift();
          this.settings.consentGiven = "true" === e
        }
      } else void 0 !== window.cookieconsent ? this.settings.consentGiven = "allow" === function (i) {
        for (var e = i + "=", s = window.document.cookie.split(";"), t = 0; t < s.length; t++) {
          var n = s[t].trim();
          if (0 == n.indexOf(e)) return n.substring(e.length, n.length)
        }
        return ""
      }("complianz_consent_status") : void 0 !== window.Cookiebot ? this.settings.consentGiven = Cookiebot.consented : void 0 !== window.BorlabsCookie && (this.settings.consentGiven = window.BorlabsCookie.checkCookieConsent("instagram"));
      var s = jQuery.Event("sbicheckconsent");
      return s.feed = this, jQuery(window).trigger(s), this.settings.consentGiven
    },
    afterConsentToggled: function () {
      if (this.checkConsent()) {
        var i = this;
        i.maybeRaiseImageResolution(), setTimeout(function () {
          i.afterResize()
        }, 500)
      }
    }
  }, window.sbi_init = function () {
    window.sbi = new s, window.sbi.createPage(window.sbi.createFeeds, {
      whenFeedsCreated: window.sbi.afterFeedsCreated
    })
  }
}(jQuery), jQuery(document).ready(function (i) {
  void 0 === window.sb_instagram_js_options && (window.sb_instagram_js_options = {
    font_method: "svg",
    resized_url: location.protocol + "//" + window.location.hostname + "/wp-content/uploads/sb-instagram-feed-images/",
    placeholder: location.protocol + "//" + window.location.hostname + "/wp-content/plugins/instagram-feed/img/placeholder.png"
  }), void 0 !== window.sb_instagram_js_options.resized_url && -1 === window.sb_instagram_js_options.resized_url.indexOf(location.protocol) && ("http:" === location.protocol ? window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace("https:", "http:") : window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace("http:", "https:")), sbi_init(), i("#cookie-notice a").click(function () {
    setTimeout(function () {
      i.each(window.sbi.feeds, function (i) {
        window.sbi.feeds[i].afterConsentToggled()
      })
    }, 1e3)
  }), i("#cookie-law-info-bar a").click(function () {
    setTimeout(function () {
      i.each(window.sbi.feeds, function (i) {
        window.sbi.feeds[i].afterConsentToggled()
      })
    }, 1e3)
  }), i(".cli-user-preference-checkbox").click(function () {
    setTimeout(function () {
      i.each(window.sbi.feeds, function (i) {
        window.sbi.feeds[i].settings.consentGiven = !1, window.sbi.feeds[i].afterConsentToggled()
      })
    }, 1e3)
  }), i(window).on("CookiebotOnAccept", function (e) {
    i.each(window.sbi.feeds, function (i) {
      window.sbi.feeds[i].settings.consentGiven = !0, window.sbi.feeds[i].afterConsentToggled()
    })
  }), i(document).on("cmplzAcceptAll", function (e) {
    i.each(window.sbi.feeds, function (i) {
      window.sbi.feeds[i].settings.consentGiven = !0, window.sbi.feeds[i].afterConsentToggled()
    })
  }), i(document).on("cmplzRevoke", function (e) {
    i.each(window.sbi.feeds, function (i) {
      window.sbi.feeds[i].settings.consentGiven = !1, window.sbi.feeds[i].afterConsentToggled()
    })
  }), i(document).on("borlabs-cookie-consent-saved", function (e) {
    i.each(window.sbi.feeds, function (i) {
      window.sbi.feeds[i].settings.consentGiven = !1, window.sbi.feeds[i].afterConsentToggled()
    })
  })
}));