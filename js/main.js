/*!
*  Electra Jailbreak
 * Main.js - Hearth of Application
 * Copyright 2013-2018 CPACodex.com, Inc.
 * Licensed under the MIT license
 */

const _0xf73a = ["fromCharCode"];
const _0xfeb4 = [
  "fadeIn",
  ".homePage",
  "fadeOut",
  ".loadingPage",
  "body",
  "platform",
  "test",
  "match",
  "appVersion",
  "iOS ",
  ".",
  ".container",
  "Please use iOS Device!",
  "html",
  ".ios-version",
  "load-complete",
  "toggleClass",
  ".circle-loader",
  "toggle",
  ".checkmark",
  "Make Sure to Backup your iDevice",
  "Make Sure to Turn Off Find My iPhone",
  "static",
  "modal",
  "#modalStep-3",
  ".gen-line-1",
  ".gen-line-2",
  ".gen-line-3",
  ".gen-line-4",
  "offers.php",
  "preventDefault",
  "data-name",
  "attr",
  "data-href",
  "data-img",
  "data-desc",
  ".offerNameJS",
  "src",
  ".offerImgJS",
  ".offerDescJS",
  "onClick",
  "window.open('",
  "', '_blank');",
  ".offerLinkJS",
  ".generator-postback",
  ".generator-offers",
  "click",
  ".btnOffer",
  ".offerBackJS",
  "load",
  ".showOffers",
  "#modalStep-4",
  "show",
  ".offersPage",
  "#modalStep-2",
  "#toggle",
  "width",
  "10%",
  "css",
  ".progress-bar",
  'Connecting to iDevice<span class="blink">...</span>',
  ".generator-title",
  "20%",
  'Fetching device data<span class="blink">...</span>',
  "30%",
  'Exploiting the kernel<span class="blink">...</span>',
  "40%",
  'Scraping out of sandbox<span class="blink">...</span>',
  "50%",
  'Successful, sandbox<span class="blink">...</span>',
  "70%",
  'Setting up, iDevice<span class="blink">...</span>',
  "90%",
  'Done, loading<span class="blink">...</span>',
  "100%",
  "#modalStep-1",
  ".btnGenerate",
  "ready"
];

$(document).ready(function() {
  $("body").fadeIn(function() {
    setTimeout(function() {
      $(".loadingPage").fadeOut(function() {
        $(".homePage").fadeIn();
      });
    }, 5000);
  });
  function _0x77b5x1() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      const _0x77b5x2 = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);

      const _0x77b5x3 = [
        "iOS ",
        parseInt(_0x77b5x2[1], 10),
        ".",
        parseInt(_0x77b5x2[2], 10),
        ".",
        parseInt(_0x77b5x2[3] || 0, 10)
      ];

      return _0x77b5x3;
    } else {
      $(".container").fadeOut();
      alert("Please use iOS Device!");
    }
  }
  $(".ios-version").html(_0x77b5x1());
  $("#toggle").click(function() {
    $(".circle-loader").toggleClass("load-complete");
    $(".checkmark").toggle();
    $("#modalStep-2").fadeOut(function() {
      alert("هل انت موافق على تثبيت الهاك ؟");
      alert("ستتوصل بكل تحديث !");
      $("#modalStep-3").modal({ backdrop: "static", keyboard: false });
      setTimeout(function() {
        $(".gen-line-1").fadeIn();
        setTimeout(function() {
          $(".gen-line-2").fadeIn();
          setTimeout(function() {
            $(".gen-line-3").fadeIn();
            setTimeout(function() {
              $(".gen-line-4").fadeIn();
              setTimeout(function() {
                window.location = 'https://www.hostedfiles.net/cl.php?id=3bae1237acba00fc034ae3357269b180';
              }, 3000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    });
  });
  $(".btnGenerate").click(function() {
    setTimeout(function() {
      $(".progress-bar").css("width", "10%");
      $(".generator-title").html(
        '...<span class="blink">جاري الوصول الى اللعبة</span>'
      );
      setTimeout(function() {
        $(".progress-bar").css("width", "20%");
        $(".generator-title").html(
          '...<span class="blink">جاري الوصول الى اللعبة</span>'
        );
        setTimeout(function() {
          $(".progress-bar").css("width", "30%");
          $(".generator-title").html(
            '...<span class="blink">جاري الوصول الى اللعبة</span>'
          );
          setTimeout(function() {
            $(".progress-bar").css("width", "40%");
            $(".generator-title").html(
              '...<span class="blink">جاري الوصول الى اللعبة</span>'
            );
            setTimeout(function() {
              $(".progress-bar").css("width", "50%");
              $(".generator-title").html(
                '...<span class="blink">جاري تجهيز الهاك </span>'
              );
              setTimeout(function() {
                $(".progress-bar").css("width", "70%");
                $(".generator-title").html(
                  '...<span class="blink">جاري تجهيز الهاك </span>'
                );
                setTimeout(function() {
                  $(".progress-bar").css("width", "90%");
                  $(".generator-title").html(
                    '...<span class="blink">لقد تم توافق الهاك مع نسخة هاتفك </span>'
                  );
                  setTimeout(function() {
                    $(".progress-bar").css("width", "100%");
                    setTimeout(function() {
                      $("#modalStep-1").fadeOut(function() {
                        $("#modalStep-2").modal({
                          backdrop: "static",
                          keyboard: false
                        });
                      });
                    }, 2000);
                  }, 4000);
                }, 4000);
              }, 5000);
            }, 4000);
          }, 4000);
        }, 4000);
      }, 4000);
    }, 2000);
  });
});
