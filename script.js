function _0x3984() {
    const _0x4ba2f1 = [
        "forEach",
        "header",
        "scrollTop",
        "3050181croWKr",
        "add",
        "location",
        "click",
        "342JsQuNS",
        "addEventListener",
        ".navigation\x20a",
        "init",
        "10468PTeofo",
        "remove",
        "scroll",
        "undefined",
        "toggle",
        "30002QnCWqi",
        "515115htgynk",
        "832744jtHbWy",
        "129xTKbfQ",
        "active",
        "scrollIntoView",
        "50ZUGsEt",
        "hidden",
        "querySelector",
        "246412qdPgWL",
        "getAttribute",
        "10blOgmf",
        "preventDefault",
        "16441117PElsYp",
        "pageYOffset",
        "querySelectorAll",
        "documentElement",
        "classList",
    ];
    _0x3984 = function () {
        return _0x4ba2f1;
    };
    return _0x3984();
}
function _0x408d(_0x2a4dea, _0x15bd03) {
    const _0x398454 = _0x3984();
    return (
        (_0x408d = function (_0x408d25, _0x33f858) {
            _0x408d25 = _0x408d25 - 0x17d;
            let _0x39edac = _0x398454[_0x408d25];
            return _0x39edac;
        }),
        _0x408d(_0x2a4dea, _0x15bd03)
    );
}
(function (_0x19f44f, _0x440d0d) {
    const _0x113454 = _0x408d,
        _0x4d39fc = _0x19f44f();
    while (!![]) {
        try {
            const _0x251e06 =
                -parseInt(_0x113454(0x196)) / 0x1 +
                (-parseInt(_0x113454(0x190)) / 0x2) * (parseInt(_0x113454(0x198)) / 0x3) +
                (-parseInt(_0x113454(0x19e)) / 0x4) * (parseInt(_0x113454(0x19b)) / 0x5) +
                (-parseInt(_0x113454(0x18c)) / 0x6) * (parseInt(_0x113454(0x195)) / 0x7) +
                parseInt(_0x113454(0x197)) / 0x8 +
                (parseInt(_0x113454(0x188)) / 0x9) * (parseInt(_0x113454(0x17e)) / 0xa) +
                parseInt(_0x113454(0x180)) / 0xb;
            if (_0x251e06 === _0x440d0d) break;
            else _0x4d39fc["push"](_0x4d39fc["shift"]());
        } catch (_0x6d2ba2) {
            _0x4d39fc["push"](_0x4d39fc["shift"]());
        }
    }
})(_0x3984, 0x524f4),
    document["addEventListener"]("DOMContentLoaded", () => {
        const _0x4517e8 = _0x408d,
            _0x27c740 = document[_0x4517e8(0x19d)](".menu-btn"),
            _0x5cac38 = document["querySelector"](".navigation"),
            _0x229792 = document[_0x4517e8(0x182)](_0x4517e8(0x18e)),
            _0x306869 = document[_0x4517e8(0x19d)](_0x4517e8(0x186)),
            _0x1e3f4b = document[_0x4517e8(0x19d)](".theme-toggle"),
            _0x4b2c1d = _0x1e3f4b ? _0x1e3f4b[_0x4517e8(0x19d)](".fa-moon") : null,
            _0x2f7a9c = _0x1e3f4b ? _0x1e3f4b[_0x4517e8(0x19d)](".fa-sun") : null;

        _0x27c740 &&
            _0x5cac38 &&
            (_0x27c740[_0x4517e8(0x18d)](_0x4517e8(0x18b), () => {
                const _0x191cf8 = _0x4517e8;
                _0x27c740[_0x191cf8(0x184)][_0x191cf8(0x194)](_0x191cf8(0x199)), _0x5cac38["classList"][_0x191cf8(0x194)](_0x191cf8(0x199));
            }),
            _0x229792[_0x4517e8(0x185)]((_0x444156) => {
                const _0xabba23 = _0x4517e8;
                _0x444156[_0xabba23(0x18d)](_0xabba23(0x18b), (_0x38ff2b) => {
                    const _0x249c75 = _0xabba23;
                    _0x38ff2b[_0x249c75(0x17f)]();
                    const _0x5b0f6b = _0x444156[_0x249c75(0x17d)]("href");
                    if (_0x5b0f6b["startsWith"]("#")) {
                        const _0x511ba8 = document[_0x249c75(0x19d)](_0x5b0f6b);
                        _0x511ba8 && _0x511ba8[_0x249c75(0x19a)]({ behavior: "smooth" });
                    } else window[_0x249c75(0x18a)]["href"] = _0x5b0f6b;
                    _0x27c740["classList"]["remove"]("active"), _0x5cac38[_0x249c75(0x184)][_0x249c75(0x191)]("active");
                });
            }));

        if (_0x306869) {
            let _0x2b058e = 0x0;
            window[_0x4517e8(0x18d)](_0x4517e8(0x192), () => {
                const _0x182b02 = _0x4517e8;
                let _0xe98bee = window[_0x182b02(0x181)] || document[_0x182b02(0x183)][_0x182b02(0x187)];
                _0x306869[_0x182b02(0x184)][_0x182b02(0x194)]("sticky", _0xe98bee > 0x0),
                    _0xe98bee > _0x2b058e && _0xe98bee > 0x64 ? _0x306869[_0x182b02(0x184)][_0x182b02(0x189)](_0x182b02(0x19c)) : _0x306869[_0x182b02(0x184)]["remove"](_0x182b02(0x19c)),
                    (_0x2b058e = _0xe98bee <= 0x0 ? 0x0 : _0xe98bee);
            });
        }

        if (_0x1e3f4b && _0x4b2c1d && _0x2f7a9c) {
            _0x1e3f4b[_0x4517e8(0x18d)](_0x4517e8(0x18b), () => {
                document.body[_0x4517e8(0x184)][_0x4517e8(0x194)]("light-mode");
                if (document.body[_0x4517e8(0x184)].contains("light-mode")) {
                    _0x4b2c1d.style.display = "none";
                    _0x2f7a9c.style.display = "inline";
                    localStorage.setItem("theme", "light");
                } else {
                    _0x4b2c1d.style.display = "inline";
                    _0x2f7a9c.style.display = "none";
                    localStorage.setItem("theme", "dark");
                }
            });

            const _0x5e2d3a = localStorage.getItem("theme");
            if (_0x5e2d3a === "light") {
                document.body[_0x4517e8(0x184)][_0x4517e8(0x189)]("light-mode");
                _0x4b2c1d.style.display = "none";
                _0x2f7a9c.style.display = "inline";
            }
        }

        typeof AOS !== _0x4517e8(0x193) && AOS[_0x4517e8(0x18f)]({ offset: 0x32, duration: 0x258, once: !![] });
    });