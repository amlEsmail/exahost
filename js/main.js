

function updateProtocol() {
    winH < baseSize + pGap ? (vDif = winH - pGap, newSCY = vDif / baseSize) : newSCY = 1, pW = (winW - 2 * sideM) / 2, pW < baseSize ? newSCX = pW / baseSize : newSCX = 1, newSC = newSCY, newSCX < newSCY && (newSC = newSCX), newSC < 1 && winW > 768 ? $("#protocol-detail").find(".item").css({
        transform: "scale(" + newSC + ")"
    }) : $("#protocol-detail").find(".item").css("transform", ""), $(".protocol-slide").css({
        height: winH
    })
}

function setProtocolDetail() {
    pslideTop = $("#protocol-detail").offset().top, 
    sT >= pslideTop && !$("#protocol-detail").hasClass("active") && ($("#protocol-detail").addClass("active"), pslidesOn = !0),
    sT < pslideTop && $("#protocol-detail").hasClass("active") && ($("#protocol-detail").removeClass("active"), pslidesOn = !1),
     sT >= pslideBot && $("#protocol-detail").hasClass("active") && (pslidesOn = !1), $(".protocol-slide.filler").each(function(e) {
        tmpNum = $(this).attr("data-num"), e > 0 && (isScrolledIntoView($(this), 0) ? (tmpDif = -(sT - $(this).offset().top), tmpDif > 0 ? $('.protocol-slide.main[data-num="' + tmpNum + '"]').css({
            transform: "translateY(" + tmpDif + "px)"
        }) : $('.protocol-slide.main[data-num="' + tmpNum + '"]').css({
            transform: "",
            height: ""
        })) : $(this).offset().top > sT + winH && $('.protocol-slide.main[data-num="' + tmpNum + '"]').css({
            transform: "translateY(" + winH + "px)"
        }))
    });

}



function updateSlides() {
    ssRow = 3, winW <= rowBreak1 && winW > rowBreak2 && (ssRow = 2), winW <= rowBreak2 && (ssRow = 1), ssBoxW = 375, winW <= timelineBreak ? (boxGap = 30, winW <= rowBreak2 && (boxGap = 60), winW <= 450 && (boxGap = 20), winW <= timelineBreak - 100 ? (gapTotal = boxGap * (ssRow + 1), (ssBoxW = (winW - gapTotal) / ssRow) > 375 && (ssBoxW = 375)) : ssBoxW = 375) : boxGap = 60, $(".slides").each(function() {
        ssBoxes = $(this).find(".slide").length, $(this).find(".slide").css({
            width: ssBoxW + "px"
        }), ssW = ssBoxW * ssBoxes + boxGap * (ssBoxes - 1), ssW > 3855 && (ssW = 3855), $(this).css({
            width: ssW + "px"
        }), tmpCur = Number($(this).attr("data-current")), newPos = -(tmpCur * ssBoxW + tmpCur * boxGap), TweenMax.set($(this), {
            transform: "translateX(" + newPos + "px)"
        })
    })
}




function isScrolledIntoView(e, t) {
    if (viewDif = Number(t), sT = Number($(document).scrollTop()), vT = Number($(e).offset().top) + viewDif, vB = sT + winH, vH = vT + $(e).outerHeight() + winH, vT <= vB && vT >= sT || vT <= vB && vB <= vH) return !0
}


var mobile = !1,
    mobileBreak = 768,
    stickyBreak = 850,
    sideM = 50;
$(window).width() <= mobileBreak && (mobile = !0);
var is_firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
    path, winW, winH;
$(window).resize(function() {
    winW = $(window).width(), winH = window.innerHeight, winW <= mobileBreak && !mobile ? mobile = !0 : winW > mobileBreak && mobile && (mobile = !1, menuOpen && (unfreezePage(), $("#globalHeader, .menu-icon, #mobile-menu").removeClass("open"), $("#mobile-menu").removeClass("show"), menuOpen = !1)), winW < stickyBreak && stickyOpen && ($(".sticky").attr("style", ""), stickyOpen = !1), updateSlides(), updateProtocol(), menuOpen && updateMenuBG()
}), $(window).resize();
var formSent = !1,
    formURL = $(".email-form").attr("action");
$(".email-form").submit(function() {
    return validateForm($(this)) && sendForm($(this)), !1
}), $('[data-type="req"]').focus(function() {
    $(".email-form").hasClass("error") && TweenMax.to(".msg", .5, {
        opacity: 0,
        display: "none",
        onComplete: function() {
            $(".email-form").removeClass("error")
        }
    })
}), $(".email-form").find("input").focus(function() {
    formSent && (TweenMax.to(".msg", .5, {
        opacity: 0,
        display: "none",
        onComplete: function() {
            $(".email-form").removeClass("sent")
        }
    }), formSent = !1)
});
var menuOpen = !1;
$(".menu-tab").click(function() {
    menuOpen ? closeMenu() : (freezePage(), $("#globalMenu").addClass("open"), winW > stickyBreak ? (tmSc = winW > winH ? winW : winH, startPos = -tmSc / 2, menuT = -Math.round(tmSc / 4), $(".menu-fill").css({
        width: tmSc + "px",
        height: tmSc + "px",
        right: "",
        top: startPos + "px"
    }), TweenMax.to(".menu-fill", .75, {
        scaleX: 1.75,
        scaleY: 1.75,
        ease: Expo.easeInOut
    })) : (tmSc = winW > winH ? winW : winH, mSc = 3 * tmSc, startPos = -mSc / 2, $(".menu-fill").css({
        width: mSc + "px",
        height: mSc + "px",
        right: startPos + "px",
        top: startPos + "px"
    }), TweenMax.to(".menu-fill", .75, {
        scaleX: 1,
        scaleY: 1,
        ease: Power3.easeInOut
    })), TweenMax.to(".menu-contents", 1, {
        delay: .4,
        opacity: 1,
        display: "block"
    }), menuOpen = !0)
});


var stickyOpen = !1,
    stickyH = 70,
    lastSt = 0,
    topDif = 50,
    socialExpand = !1,
    autoOff = !1;
 $(window).on("load", function() {
    $(window).resize();
    })

var bMaxW = 600,
    bMaxH = 800,
    vGap = 140,
    hGap = 20,
    bBreak = 650,
    bDel = .2,
    lNum = 0,
    sNum = 0,
    newDel, addDel = 0,
    hasLines = [0, 2, 6, 7, 8, 9],
    hasStairs = [0, 3, 4, 9],
    pDel = .3,
    lfDel = .1,
    hNum = 0,
    hasHills = [0, 1, 4, 7],
    smDel = .2,
    fillerDel = 4e3,
    bgplantDel = 6,
    bgpD = .2,
    baseSize = 600,
    pGap = 100,
    pslidesOn = !1,
    totalSlides = $(".protocol-slides").find(".protocol-slide").length,
    pslideTop = $("#protocol").offset().top,
    pslideBot = $('.protocol-slide[data-num="' + totalSlides + '"]').offset().top,
    pSlide = 1;
$(".protocol-slides").find(".protocol-slide").each(function(e) {
    e + 1 > 1 && TweenMax.set($(this), {
        y: winH
    })
});
var tokenDif = 0,
    tspeed = 1.5,
    bltPlayed = !1,
    tokenStart = -520,
    lfDel2 = .3;  

var ssBoxW = 375,
    boxGap = 30,
    ssRow = 3,
    rowBreak1 = 1e3,
    rowBreak2 = 650,
    timelineBreak = 1345;
$(".slides").each(function() {
    $(this).attr("data-total", $(this).find(".slide").length), $(this).find(".slide").each(function(e) {
        e < 3 && $(this).clone().appendTo($(this).parents(".slides"))
    })
});
var bDelFW = 1.5,
    smDelFW = .5,
    pDelFW = .8,
    lfDelFW = .3,
    bPlantDelay = 2,
    hillDelay = 1.5,
    stairDelay = 1.5,
    lineDelay = -.5,
    sPlantDelay = .3,
    startDelay = [0, 1, 1.25, .5, .75],
    sT;
$(window).scroll(function() {
    sT = $(this).scrollTop(), setProtocolDetail(), winW > 1200 
});
