var Applet = new (function () {
    var o = "\/i",
        p = {

            event_data: {
                data: { qt: { MP12010GoogleSSODesktop: "Treatment", MP11992U2UHPv1Desktop: "Treatment" }, segments: [], categorySlug: "developers", page_url: "\/cat\/developers\/", channel: "other" },
                referrer: "desktop",
                location: "cat",
            },
            XOdeskReferrer: "desktop",
            signup_url_params: [],
            NotificationASIntegration: !0,
            ClientSideStatsDMetrics: !0,
            disputesASIntegration: !0,
            pageSpeedMetrics: !1,
            smfAjax: !1,
            wcFooter: !1,
            CI7646GraphqlSmf: !1,
            clientStatsDMetrics: !0,
            csrfTokenCookieName: "XSRF-TOKEN",
            csrfTokenHeaderName: "X-Odesk-Csrf-Token",
            runtime_id: "5953d8227830c29a-FRA",
            ccstCookieName: "oauth2_global_js_token",
            quarkCookiePrefix: "",
            pageId: "categoryStorefrontPage",
        };
    var u = [],
        e = "65ab4ee",
        s = "https:\/\/assets.static-upwork.com\/assets\/Adquiro",
        c = "prod",
        n = function (e) {
            var t = /^@([^\/]*)Bundle\/(.*)$/,
                r = t.exec(e);
            if (r != null) {
                return "/bundles/" + r[1].toLowerCase() + "/" + r[2];
            }
            return e;
        };
    this.getBasePath = function () {
        return o;
    };
    this.buildInternalAssetPath = function (r) {
        if (s) {
            return s + "/" + e + n(r);
        }
        var t = o + n(r);
        if (e) {
            if (t.indexOf("?") < 0) {
                return t + "?" + e;
            } else {
                return t + "&" + e;
            }
        }
        return t;
    };
    var t = null;
    t = "146.120.195.221.1583404953454800";
    this.getVisitorId = function () {
        return t;
    };
    var r = null;
    r = "5f79c1874670e88e717fbf716a81fee7";
    this.getVisitorApiKey = function () {
        return r;
    };
    var a = null;
    this.getUser = function () {
        return a;
    };
    var i = null;
    this.getOrganization = function () {
        return i;
    };
    this.getVar = function (e) {
        return p[e];
    };

})();