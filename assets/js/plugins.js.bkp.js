// Avoid `console` errors in browsers that lack a console.
if(!(window.console&&console.log)){(function(){var noop=function(){};var methods=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','markTimeline','table','time','timeEnd','timeStamp','trace','warn'];var length=methods.length;var console=window.console={};while(length--){console[methods[length]]=noop}}())}

/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 * ////////////////////////////////////////////////////////////////////////////
 */
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0},i="object"===typeof t?e.extend(i,t):e.isFunction(n)?e.extend(i,{over:t,out:n,selector:r}):e.extend(i,{over:t,out:t,selector:n}),s,o,u,a,f=function(e){s=e.pageX;o=e.pageY},l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity)return e(n).off("mousemove.hoverIntent",f),n.hoverIntent_s=1,i.over.apply(n,[t]);u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)};t=function(t){var n=jQuery.extend({},t),r=this;r.hoverIntent_t&&(r.hoverIntent_t=clearTimeout(r.hoverIntent_t));"mouseenter"==t.type?(u=n.pageX,a=n.pageY,e(r).on("mousemove.hoverIntent",f),1!=r.hoverIntent_s&&(r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval))):(e(r).off("mousemove.hoverIntent",f),1==r.hoverIntent_s&&(r.hoverIntent_t=setTimeout(function(){r.hoverIntent_t=clearTimeout(r.hoverIntent_t);r.hoverIntent_s=0;i.out.apply(r,[n])},i.timeout)))};return this.on({"mouseenter.hoverIntent":t,"mouseleave.hoverIntent":t},i.selector)}})(jQuery);

/*!
 * jQuery Popup Overlay
 *
 * @version 1.7.3
 * @requires jQuery v1.7.1+
 * @link http://vast-engineering.github.com/jquery-popup-overlay/
 * ////////////////////////////////////////////////////////////////////////////
 */
(function(e){var t=e(window),n={},r=[],i=[],s,o=null,u=[],a=null,f,l=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),c={_init:function(t){var n=e(t),s=n.data("popupoptions");i[t.id]=!1;r[t.id]=0;n.data("popup-initialized")||(n.attr("data-popup-initialized","true"),c._initonce(t));s.autoopen&&setTimeout(function(){c.show(t,0)},0)},_initonce:function(t){var n=e(t),r=e("body"),i,u=n.data("popupoptions");o=parseInt(r.css("margin-right"),10);a=void 0!==document.body.style.webkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition||void 0!==document.body.style.OTransition||void 0!==document.body.style.transition;"tooltip"==u.type&&(u.background=!1,u.scrolllock=!1);u.backgroundactive&&(u.background=!1,u.blur=!1,u.scrolllock=!1);if(u.scrolllock){var f;"undefined"===typeof s&&(i=e('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),f=i.children(),s=f.innerWidth()-f.height(99).innerWidth(),i.remove())}n.attr("id")||n.attr("id","j-popup-"+parseInt(1e8*Math.random(),10));n.addClass("popup_content");r.prepend(t);n.wrap('<div id="'+t.id+'_wrapper" class="popup_wrapper" />');i=e("#"+t.id+"_wrapper");i.css({opacity:0,visibility:"hidden",position:"absolute"});l&&i.css("cursor","pointer");"overlay"==u.type&&i.css("overflow","auto");n.css({opacity:0,visibility:"hidden",display:"inline-block"});u.setzindex&&!u.autozindex&&i.css("z-index","100001");u.outline||n.css("outline","none");u.transition&&(n.css("transition",u.transition),i.css("transition",u.transition));n.attr("aria-hidden",!0);u.background&&!e("#"+t.id+"_background").length&&(r.prepend('<div id="'+t.id+'_background" class="popup_background"></div>'),r=e("#"+t.id+"_background"),r.css({opacity:0,visibility:"hidden",backgroundColor:u.color,position:"fixed",top:0,right:0,bottom:0,left:0}),u.setzindex&&!u.autozindex&&r.css("z-index","100000"),u.transition&&r.css("transition",u.transition));"overlay"==u.type&&(n.css({textAlign:"left",position:"relative",verticalAlign:"middle"}),r={position:"fixed",width:"100%",height:"100%",top:0,left:0,textAlign:"center"},u.backgroundactive&&(r.position="relative",r.height="0",r.overflow="visible"),i.css(r),i.append('<div class="popup_align" />'),e(".popup_align").css({display:"inline-block",verticalAlign:"middle",height:"100%"}));n.attr("role","dialog");r=u.openelement?u.openelement:"."+t.id+"_open";e(r).each(function(t,n){e(n).attr("data-popup-ordinal",t);n.id||e(n).attr("id","open_"+parseInt(1e8*Math.random(),10))});n.attr("aria-labelledby")||n.attr("aria-label")||n.attr("aria-labelledby",e(r).attr("id"));f=u.closeelement?u.closeelement:"."+t.id+"_close";e(document).on("click",f,function(e){c.hide(t);e.preventDefault()});if("hover"==u.action)u.keepfocus=!1,e(r).on("mouseenter",function(n){c.show(t,e(this).data("popup-ordinal"))}),e(r).on("mouseleave",function(e){c.hide(t)});else e(document).on("click",r,function(n){n.preventDefault();var r=e(this).data("popup-ordinal");setTimeout(function(){c.show(t,r)},0)});u.detach?n.hide().detach():i.hide()},show:function(n,l){var y=e(n);if(!y.data("popup-visible")){y.data("popup-initialized")||c._init(n);y.attr("data-popup-initialized","true");var b=e("body"),w=y.data("popupoptions"),E=e("#"+n.id+"_wrapper"),S=e("#"+n.id+"_background");h(n,l,w.beforeopen);i[n.id]=l;setTimeout(function(){u.push(n.id)},0);if(w.autozindex){for(var x=document.getElementsByTagName("*"),T=x.length,N=0,C=0;C<T;C++){var L=e(x[C]).css("z-index");"auto"!==L&&(L=parseInt(L,10),N<L&&(N=L))}r[n.id]=N;w.background&&0<r[n.id]&&e("#"+n.id+"_background").css({zIndex:r[n.id]+1});0<r[n.id]&&E.css({zIndex:r[n.id]+2})}w.detach?(E.prepend(n),y.show()):E.show();f=setTimeout(function(){E.css({visibility:"visible",opacity:1});e("html").addClass("popup_visible").addClass("popup_visible_"+n.id);y.addClass("popup_content_visible")},20);w.scrolllock&&(b.css("overflow","hidden"),b.height()>t.height()&&b.css("margin-right",o+s));w.backgroundactive&&y.css({top:(t.height()-(y.get(0).offsetHeight+parseInt(y.css("margin-top"),10)+parseInt(y.css("margin-bottom"),10)))/2+"px"});y.css({visibility:"visible",opacity:1});w.background&&(S.css({visibility:"visible",opacity:w.opacity}),setTimeout(function(){S.css({opacity:w.opacity})},0));y.data("popup-visible",!0);c.reposition(n,l);y.data("focusedelementbeforepopup",document.activeElement);w.keepfocus&&(y.attr("tabindex",-1),setTimeout(function(){"closebutton"===w.focuselement?e("#"+n.id+" ."+n.id+"_close:first").focus():w.focuselement?e(w.focuselement).focus():y.focus()},w.focusdelay));e(w.pagecontainer).attr("aria-hidden",!0);y.attr("aria-hidden",!1);h(n,l,w.onopen);if(a)E.one("transitionend",function(){h(n,l,w.opentransitionend)});else h(n,l,w.opentransitionend)}},hide:function(t){f&&clearTimeout(f);var n=e("body"),r=e(t),s=r.data("popupoptions"),l=e("#"+t.id+"_wrapper"),c=e("#"+t.id+"_background");r.data("popup-visible",!1);1===u.length?e("html").removeClass("popup_visible").removeClass("popup_visible_"+t.id):e("html").hasClass("popup_visible_"+t.id)&&e("html").removeClass("popup_visible_"+t.id);u.pop();e("html").hasClass("popup_content_visible")&&r.removeClass("popup_content_visible");s.keepfocus&&setTimeout(function(){e(r.data("focusedelementbeforepopup")).is(":visible")&&r.data("focusedelementbeforepopup").focus()},0);l.css({visibility:"hidden",opacity:0});r.css({visibility:"hidden",opacity:0});s.background&&c.css({visibility:"hidden",opacity:0});e(s.pagecontainer).attr("aria-hidden",!1);r.attr("aria-hidden",!0);h(t,i[t.id],s.onclose);if(a&&"0s"!==r.css("transition-duration"))r.one("transitionend",function(e){r.data("popup-visible")||(s.detach?r.hide().detach():l.hide());s.scrolllock&&setTimeout(function(){n.css({overflow:"visible","margin-right":o})},10);h(t,i[t.id],s.closetransitionend)});else s.detach?r.hide().detach():l.hide(),s.scrolllock&&setTimeout(function(){n.css({overflow:"visible","margin-right":o})},10),h(t,i[t.id],s.closetransitionend)},toggle:function(t,n){e(t).data("popup-visible")?c.hide(t):setTimeout(function(){c.show(t,n)},0)},reposition:function(n,r){var i=e(n),s=i.data("popupoptions"),o=e("#"+n.id+"_wrapper");e("#"+n.id+"_background");r=r||0;if("tooltip"==s.type){o.css({position:"absolute"});var u;u=s.tooltipanchor?e(s.tooltipanchor):s.openelement?e(s.openelement).filter('[data-popup-ordinal="'+r+'"]'):e("."+n.id+'_open[data-popup-ordinal="'+r+'"]');var a=u.offset();"right"==s.horizontal?o.css("left",a.left+u.outerWidth()+s.offsetleft):"leftedge"==s.horizontal?o.css("left",a.left+u.outerWidth()-u.outerWidth()+s.offsetleft):"left"==s.horizontal?o.css("right",t.width()-a.left-s.offsetleft):"rightedge"==s.horizontal?o.css("right",t.width()-a.left-u.outerWidth()-s.offsetleft):o.css("left",a.left+u.outerWidth()/2-i.outerWidth()/2-parseFloat(i.css("marginLeft"))+s.offsetleft);"bottom"==s.vertical?o.css("top",a.top+u.outerHeight()+s.offsettop):"bottomedge"==s.vertical?o.css("top",a.top+u.outerHeight()-i.outerHeight()+s.offsettop):"top"==s.vertical?o.css("bottom",t.height()-a.top-s.offsettop):"topedge"==s.vertical?o.css("bottom",t.height()-a.top-i.outerHeight()-s.offsettop):o.css("top",a.top+u.outerHeight()/2-i.outerHeight()/2-parseFloat(i.css("marginTop"))+s.offsettop)}else"overlay"==s.type&&(s.horizontal?o.css("text-align",s.horizontal):o.css("text-align","center"),s.vertical?i.css("vertical-align",s.vertical):i.css("vertical-align","middle"))}},h=function(t,r,i){r=e((n.openelement?n.openelement:"."+t.id+"_open")+'[data-popup-ordinal="'+r+'"]');"function"==typeof i&&i.call(e(t),t,r)};e(document).on("keydown",function(t){if(u.length){var n=document.getElementById(u[u.length-1]);e(n).data("popupoptions").escape&&27==t.keyCode&&e(n).data("popup-visible")&&c.hide(n)}});e(document).on("click",function(t){if(u.length){var n=u[u.length-1],r=document.getElementById(n);e(r).data("popupoptions").blur&&!e(t.target).parents().andSelf().is("#"+n)&&e(r).data("popup-visible")&&2!==t.which&&(c.hide(r),"overlay"===e(r).data("popupoptions").type&&t.preventDefault())}});e(document).on("focusin",function(t){if(u.length){var n=document.getElementById(u[u.length-1]);e(n).data("popupoptions").keepfocus&&!n.contains(t.target)&&(t.stopPropagation(),n.focus())}});e.fn.popup=function(t){return this.each(function(){$el=e(this);if("object"===typeof t){var r=e.extend({},e.fn.popup.defaults,t);$el.data("popupoptions",r);n=$el.data("popupoptions");c._init(this)}else"string"===typeof t?($el.data("popupoptions")||($el.data("popupoptions",e.fn.popup.defaults),n=$el.data("popupoptions")),c[t].call(this,this)):($el.data("popupoptions")||($el.data("popupoptions",e.fn.popup.defaults),n=$el.data("popupoptions")),c._init(this))})};e.fn.popup.defaults={type:"overlay",autoopen:!1,background:!0,backgroundactive:!1,color:"black",opacity:"0.5",horizontal:"center",vertical:"middle",offsettop:0,offsetleft:0,escape:!0,blur:!0,setzindex:!0,autozindex:!1,scrolllock:!1,keepfocus:!0,focuselement:null,focusdelay:50,outline:!1,pagecontainer:null,detach:!1,openelement:null,closeelement:null,transition:null,tooltipanchor:null,beforeopen:null,onclose:null,onopen:null,opentransitionend:null,closetransitionend:null}})(jQuery);

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 * ////////////////////////////////////////////////////////////////////////////
 */
(function(e){var t=function(){var t=function(){var t=/iPhone|iPad|iPod/i.test(navigator.userAgent);t&&e(window).load(function(){e("body").children().on("click",e.noop)});return t}(),n=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),r=function(e,t){var n="sf-js-enabled";t.cssArrows&&(n+=" sf-arrows");e.toggleClass(n)},i=function(t,n){return t.find("li."+n.pathClass).slice(0,n.pathLevels).addClass(n.hoverClass+" sf-breadcrumb").filter(function(){return e(this).children(n.popUpSelector).hide().show().length}).removeClass(n.pathClass)},s=function(e){var t=e.css("ms-touch-action");e.css("ms-touch-action","pan-y"===t?"auto":"pan-y")},o=function(t){var n=e(this),r=n.siblings(t.data.popUpSelector);0<r.length&&r.is(":hidden")&&(n.one("click.superfish",!1),"MSPointerDown"===t.type?n.trigger("focus"):e.proxy(u,n.parent("li"))())},u=function(){var t=e(this),n=l(t);clearTimeout(n.sfTimer);t.siblings().superfish("hide").end().superfish("show")},a=function(){var n=e(this),r=l(n);t?e.proxy(f,n,r)():(clearTimeout(r.sfTimer),r.sfTimer=setTimeout(e.proxy(f,n,r),r.delay))},f=function(t){t.retainPath=-1<e.inArray(this[0],t.$path);this.superfish("hide");this.parents("."+t.hoverClass).length||(t.onIdle.call(this.closest(".sf-js-enabled")),t.$path.length&&e.proxy(u,t.$path)())},l=function(e){return e.closest(".sf-js-enabled").data("sf-options")};return{hide:function(t){if(this.length){var n=l(this);if(!n)return this;var r=!0===n.retainPath?n.$path:"",r=this.find("li."+n.hoverClass).add(this).not(r).removeClass(n.hoverClass).children(n.popUpSelector),i=n.speedOut;t&&(r.show(),i=0);n.retainPath=!1;n.onBeforeHide.call(r);r.stop(!0,!0).animate(n.animationOut,i,function(){var t=e(this);n.onHide.call(t)})}return this},show:function(){var e=l(this);if(!e)return this;var t=this.addClass(e.hoverClass).children(e.popUpSelector);e.onBeforeShow.call(t);t.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(t)});return this},destroy:function(){return this.each(function(){var t=e(this),n=t.data("sf-options"),i;if(!n)return!1;i=t.find(n.popUpSelector).parent("li");clearTimeout(n.sfTimer);r(t,n);i.children("a").toggleClass("sf-with-ul");s(t);t.off(".superfish").off(".hoverIntent");i.children(n.popUpSelector).attr("style",function(e,t){return t.replace(/display[^;]+;?/g,"")});n.$path.removeClass(n.hoverClass+" sf-breadcrumb").addClass(n.pathClass);t.find("."+n.hoverClass).removeClass(n.hoverClass);n.onDestroy.call(t);t.removeData("sf-options")})},init:function(f){return this.each(function(){var l=e(this);if(l.data("sf-options"))return!1;var p=e.extend({},e.fn.superfish.defaults,f),d=l.find(p.popUpSelector).parent("li");p.$path=i(l,p);l.data("sf-options",p);r(l,p);d.children("a").toggleClass("sf-with-ul");s(l);var v="li:has("+p.popUpSelector+")";if(e.fn.hoverIntent&&!p.disableHI)l.hoverIntent(u,a,v);else l.on("mouseenter.superfish",v,u).on("mouseleave.superfish",v,a);v="MSPointerDown.superfish";t||(v+=" touchend.superfish");n&&(v+=" mousedown.superfish");l.on("focusin.superfish","li",u).on("focusout.superfish","li",a).on(v,"a",p,o);d.not(".sf-breadcrumb").superfish("hide",!0);p.onInit.call(this)})}}}();e.fn.superfish=function(n,r){return t[n]?t[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==typeof n&&n?e.error("Method "+n+" does not exist on jQuery.fn.superfish"):t.init.apply(this,arguments)};e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop};e.fn.extend({hideSuperfishUl:t.hide,showSuperfishUl:t.show})})(jQuery);

/*FitVids 1.0 | Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com | Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/ | Released under the WTFPL license - http://sam.zoy.org/wtfpl/ */
(function(e){e.fn.fitVids=function(t){var n={customSelector:null};var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];r.className="fit-vids-style";r.innerHTML="&shy;<style>          			.fluid-width-video-wrapper {       			width: 100%;                       			position: relative;                			padding: 0;                        			}                                  			.fluid-width-video-wrapper iframe, 			.fluid-width-video-wrapper object, 			.fluid-width-video-wrapper embed { 			position: absolute;                			top: 0;                            			left: 0;                           			width: 100%;                       			height: 100%;                      			}                                  			</style>";i.parentNode.insertBefore(r,i);if(t){e.extend(n,t)}return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.facebook.com']","object","embed"];if(n.customSelector){t.push(n.customSelector)}var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(this.tagName.toLowerCase()=="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}var n=this.tagName.toLowerCase()=="object"||t.attr("height")?t.attr("height"):t.height(),r=t.attr("width")?t.attr("width"):t.width(),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(jQuery);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 * ////////////////////////////////////////////////////////////////////////////
 */
(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):"object"===typeof exports?e(require("jquery")):e(jQuery)})(function(e){function t(e){e=i.json?JSON.stringify(e):String(e);return i.raw?e:encodeURIComponent(e)}function n(t,n){var s;if(i.raw)s=t;else e:{var o=t;0===o.indexOf('"')&&(o=o.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{o=decodeURIComponent(o.replace(r," "));s=i.json?JSON.parse(o):o;break e}catch(u){}s=void 0}return e.isFunction(n)?n(s):s}var r=/\+/g,i=e.cookie=function(r,s,o){if(1<arguments.length&&!e.isFunction(s)){o=e.extend({},i.defaults,o);if("number"===typeof o.expires){var u=o.expires,a=o.expires=new Date;a.setTime(+a+864e5*u)}return document.cookie=[i.raw?r:encodeURIComponent(r),"=",t(s),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}for(var u=r?void 0:{},a=document.cookie?document.cookie.split("; "):[],f=0,l=a.length;f<l;f++){var h=a[f].split("="),d;d=h.shift();d=i.raw?d:decodeURIComponent(d);h=h.join("=");if(r&&r===d){u=n(h,s);break}r||void 0===(h=n(h))||(u[d]=h)}return u};i.defaults={};e.removeCookie=function(t,n){if(void 0===e.cookie(t))return!1;e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});

/*
	jQuery Pageleave plugin
	See http://www.rexmedicus.com/jquerypageleave or https://github.com/jquerypageleave for further details
* ////////////////////////////////////////////////////////////////////////////
*/
!function(a){function c(){a(b.container).on("mousemove.pageleave",function(a){var c=(new Date).getTime()-start;a.clientY<=b.limitY&&a.clientX<=b.limitX&&c>=b.timeTillActive&&(times>0&&times--,"function"==typeof b.callback?b.callback.call(this):d())})}function d(){a(b.container).trigger("pageleave"),0==times&&a(b.container).off("mousemove.pageleave")}var b=times=start=null;a.fn.pageleave=function(d){b=a.extend({},a.fn.pageleave.defaultOptions,d),times=b.times,start=(new Date).getTime(),c()}}(jQuery),$.fn.pageleave.defaultOptions={container:document,limitX:screen.width,limitY:15,timeTillActive:5e3,times:3,callback:null};

/*!
* jQuery tap 1.1.4
* ////////////////////////////////////////////////////////////////////////////
*/

!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);

/**
* infinite-scroll
* ////////////////////////////////////////////////////////////////////////////
*/
(function(e,t,n){"use strict";t.infinitescroll=function(n,r,i){this.element=t(i);if(!this._create(n,r)){this.failed=true}};t.infinitescroll.defaults={loading:{finished:n,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"data:image/gif;base64,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",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:n},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,isBeyondMaxPage:false,currPage:1},debug:false,behavior:n,binder:t(e),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:n,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:n,path:n,prefill:false,maxPage:n};t.infinitescroll.prototype={_binding:function(t){var r=this,i=r.options;i.v="2.0b2.120520";if(!!i.behavior&&this["_binding_"+i.behavior]!==n){this["_binding_"+i.behavior].call(this);return}if(t!=="bind"&&t!=="unbind"){this._debug("Binding value  "+t+" not valid");return false}if(t==="unbind"){this.options.binder.unbind("smartscroll.infscr."+r.options.infid)}else{this.options.binder[t]("smartscroll.infscr."+r.options.infid,function(){r.scroll()})}this._debug("Binding",t)},_create:function(i,s){var o=t.extend(true,{},t.infinitescroll.defaults,i);this.options=o;var u=t(e);var a=this;if(!a._validate(i)){return false}var f=t(o.nextSelector).attr("href");if(!f){this._debug("Navigation selector not found");return false}o.path=o.path||this._determinepath(f);o.contentSelector=o.contentSelector||this.element;o.loading.selector=o.loading.selector||o.contentSelector;o.loading.msg=o.loading.msg||t('<div id="infscr-loading"><img alt="Loading..." src="'+o.loading.img+'" /><div>'+o.loading.msgText+"</div></div>");(new Image).src=o.loading.img;if(o.pixelsFromNavToBottom===n){o.pixelsFromNavToBottom=t(document).height()-t(o.navSelector).offset().top;this._debug("pixelsFromNavToBottom: "+o.pixelsFromNavToBottom)}var l=this;o.loading.start=o.loading.start||function(){t(o.navSelector).hide();o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed,t.proxy(function(){this.beginAjax(o)},l))};o.loading.finished=o.loading.finished||function(){if(!o.state.isBeyondMaxPage)o.loading.msg.fadeOut(o.loading.speed)};o.callback=function(e,r,i){if(!!o.behavior&&e["_callback_"+o.behavior]!==n){e["_callback_"+o.behavior].call(t(o.contentSelector)[0],r,i)}if(s){s.call(t(o.contentSelector)[0],r,o,i)}if(o.prefill){u.bind("resize.infinite-scroll",e._prefill)}};if(i.debug){if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}}this._setup();if(o.prefill){this._prefill()}return true},_prefill:function(){function s(){return r.options.contentSelector.height()<=i.height()}var r=this;var i=t(e);this._prefill=function(){if(s()){r.scroll()}i.bind("resize.infinite-scroll",function(){if(s()){i.unbind("resize.infinite-scroll");r.scroll()}})};this._prefill()},_debug:function(){if(true!==this.options.debug){return}if(typeof console!=="undefined"&&typeof console.log==="function"){if(Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log(Array.prototype.slice.call(arguments).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}},_determinepath:function(t){var r=this.options;if(!!r.behavior&&this["_determinepath_"+r.behavior]!==n){return this["_determinepath_"+r.behavior].call(this,t)}if(!!r.pathParse){this._debug("pathParse manual");return r.pathParse(t,this.options.state.currPage+1)}else if(t.match(/^(.*?)\b2\b(.*?$)/)){t=t.match(/^(.*?)\b2\b(.*?$)/).slice(1)}else if(t.match(/^(.*?)2(.*?$)/)){if(t.match(/^(.*?page=)2(\/.*|$)/)){t=t.match(/^(.*?page=)2(\/.*|$)/).slice(1);return t}t=t.match(/^(.*?)2(.*?$)/).slice(1)}else{if(t.match(/^(.*?page=)1(\/.*|$)/)){t=t.match(/^(.*?page=)1(\/.*|$)/).slice(1);return t}else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");r.state.isInvalidPage=true}}this._debug("determinePath",t);return t},_error:function(t){var r=this.options;if(!!r.behavior&&this["_error_"+r.behavior]!==n){this["_error_"+r.behavior].call(this,t);return}if(t!=="destroy"&&t!=="end"){t="unknown"}this._debug("Error",t);if(t==="end"||r.state.isBeyondMaxPage){this._showdonemsg()}r.state.isDone=true;r.state.currPage=1;r.state.isPaused=false;r.state.isBeyondMaxPage=false;this._binding("unbind")},_loadcallback:function(i,s,o){var u=this.options,a=this.options.callback,f=u.state.isDone?"done":!u.appendCallback?"no-append":"append",l;if(!!u.behavior&&this["_loadcallback_"+u.behavior]!==n){this["_loadcallback_"+u.behavior].call(this,i,s);return}switch(f){case"done":this._showdonemsg();return false;case"no-append":if(u.dataType==="html"){s="<div>"+s+"</div>";s=t(s).find(u.itemSelector)}break;case"append":var c=i.children();if(c.length===0){return this._error("end")}l=document.createDocumentFragment();while(i[0].firstChild){l.appendChild(i[0].firstChild)}this._debug("contentSelector",t(u.contentSelector)[0]);t(u.contentSelector)[0].appendChild(l);s=c.get();break}u.loading.finished.call(t(u.contentSelector)[0],u);if(u.animate){var h=t(e).scrollTop()+t(u.loading.msg).height()+u.extraScrollPx+"px";t("html,body").animate({scrollTop:h},800,function(){u.state.isDuringAjax=false})}if(!u.animate){u.state.isDuringAjax=false}a(this,s,o);if(u.prefill){this._prefill()}},_nearbottom:function(){var i=this.options,s=0+t(document).height()-i.binder.scrollTop()-t(e).height();if(!!i.behavior&&this["_nearbottom_"+i.behavior]!==n){return this["_nearbottom_"+i.behavior].call(this)}this._debug("math:",s,i.pixelsFromNavToBottom);return s-i.bufferPx<i.pixelsFromNavToBottom},_pausing:function(t){var r=this.options;if(!!r.behavior&&this["_pausing_"+r.behavior]!==n){this["_pausing_"+r.behavior].call(this,t);return}if(t!=="pause"&&t!=="resume"&&t!==null){this._debug("Invalid argument. Toggling pause value instead")}t=t&&(t==="pause"||t==="resume")?t:"toggle";switch(t){case"pause":r.state.isPaused=true;break;case"resume":r.state.isPaused=false;break;case"toggle":r.state.isPaused=!r.state.isPaused;break}this._debug("Paused",r.state.isPaused);return false},_setup:function(){var t=this.options;if(!!t.behavior&&this["_setup_"+t.behavior]!==n){this["_setup_"+t.behavior].call(this);return}this._binding("bind");return false},_showdonemsg:function(){var r=this.options;if(!!r.behavior&&this["_showdonemsg_"+r.behavior]!==n){this["_showdonemsg_"+r.behavior].call(this);return}r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity:1},2e3,function(){t(this).parent().fadeOut(r.loading.speed)});r.errorCallback.call(t(r.contentSelector)[0],"done")},_validate:function(n){for(var r in n){if(r.indexOf&&r.indexOf("Selector")>-1&&t(n[r]).length===0){this._debug("Your "+r+" found no elements.");return false}}return true},bind:function(){this._binding("bind")},destroy:function(){this.options.state.isDestroyed=true;this.options.loading.finished();return this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},beginAjax:function(r){var i=this,s=r.path,o,u,a,f;r.state.currPage++;if(r.maxPage!=n&&r.state.currPage>r.maxPage){r.state.isBeyondMaxPage=true;this.destroy();return}o=t(r.contentSelector).is("table, tbody")?t("<tbody/>"):t("<div/>");u=typeof s==="function"?s(r.state.currPage):s.join(r.state.currPage);i._debug("heading into ajax",u);a=r.dataType==="html"||r.dataType==="json"?r.dataType:"html+callback";if(r.appendCallback&&r.dataType==="html"){a+="+callback"}switch(a){case"html+callback":i._debug("Using HTML via .load() method");o.load(u+" "+r.itemSelector,n,function(t){i._loadcallback(o,t,u)});break;case"html":i._debug("Using "+a.toUpperCase()+" via $.ajax() method");t.ajax({url:u,dataType:r.dataType,complete:function(t,n){f=typeof t.isResolved!=="undefined"?t.isResolved():n==="success"||n==="notmodified";if(f){i._loadcallback(o,t.responseText,u)}else{i._error("end")}}});break;case"json":i._debug("Using "+a.toUpperCase()+" via $.ajax() method");t.ajax({dataType:"json",type:"GET",url:u,success:function(e,t,s){f=typeof s.isResolved!=="undefined"?s.isResolved():t==="success"||t==="notmodified";if(r.appendCallback){if(r.template!==n){var a=r.template(e);o.append(a);if(f){i._loadcallback(o,a)}else{i._error("end")}}else{i._debug("template must be defined.");i._error("end")}}else{if(f){i._loadcallback(o,e,u)}else{i._error("end")}}},error:function(){i._debug("JSON ajax request failed.");i._error("end")}});break}},retrieve:function(r){r=r||null;var i=this,s=i.options;if(!!s.behavior&&this["retrieve_"+s.behavior]!==n){this["retrieve_"+s.behavior].call(this,r);return}if(s.state.isDestroyed){this._debug("Instance is destroyed");return false}s.state.isDuringAjax=true;s.loading.start.call(t(s.contentSelector)[0],s)},scroll:function(){var t=this.options,r=t.state;if(!!t.behavior&&this["scroll_"+t.behavior]!==n){this["scroll_"+t.behavior].call(this);return}if(r.isDuringAjax||r.isInvalidPage||r.isDone||r.isDestroyed||r.isPaused){return}if(!this._nearbottom()){return}this.retrieve()},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(n){if(t.isPlainObject(n)){this.options=t.extend(true,this.options,n)}}};t.fn.infinitescroll=function(n,r){var i=typeof n;switch(i){case"string":var s=Array.prototype.slice.call(arguments,1);this.each(function(){var e=t.data(this,"infinitescroll");if(!e){return false}if(!t.isFunction(e[n])||n.charAt(0)==="_"){return false}e[n].apply(e,s)});break;case"object":this.each(function(){var e=t.data(this,"infinitescroll");if(e){e.update(n)}else{e=new t.infinitescroll(n,r,this);if(!e.failed){t.data(this,"infinitescroll",e)}}});break}return this};var r=t.event,i;r.special.smartscroll={setup:function(){t(this).bind("scroll",r.special.smartscroll.handler)},teardown:function(){t(this).unbind("scroll",r.special.smartscroll.handler)},handler:function(e,n){var r=this,s=arguments;e.type="smartscroll";if(i){clearTimeout(i)}i=setTimeout(function(){t(r).trigger("smartscroll",s)},n==="execAsap"?0:100)}};t.fn.smartscroll=function(e){return e?this.bind("smartscroll",e):this.trigger("smartscroll",["execAsap"])}})(window,jQuery);

/*
 jQuery animateNumber plugin v0.0.10
 (c) 2013, Alexandr Borisov.
 * ////////////////////////////////////////////////////////////////////////////
 https://github.com/aishek/jquery-animateNumber
*/
(function(d){var p=function(b){return b.split("").reverse().join("")},l={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},h=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=l.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:h}:d.fx.step.number=h;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var k=Math.floor(a);d(e.elem).prop("number",a).text(k+b)}},separator:function(b,a){b=b||" ";a=
a||3;return function(e,k){var c=Math.floor(e).toString(),s=d(k.elem);if(c.length>a){for(var f=c,g=a,l=f.split("").reverse(),c=[],m,q,n,r=0,h=Math.ceil(f.length/g);r<h;r++){m="";for(n=0;n<g;n++){q=r*g+n;if(q===f.length)break;m+=l[q]}c.push(m)}f=c.length-1;g=p(c[f]);c[f]=p(parseInt(g,10).toString());c=c.join(b);c=p(c)}s.prop("number",e).text(c)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},l,b),e=d(this),k=[a],c=1,h=arguments.length;c<h;c++)k.push(arguments[c]);if(b.numberStep){var f=
this.each(function(){this._animateNumberSetter=b.numberStep}),g=a.complete;a.complete=function(){f.each(function(){delete this._animateNumberSetter});g&&g.apply(this,arguments)}}return e.animate.apply(e,k)}})(jQuery);

/**
 * sidebarEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 * ////////////////////////////////////////////////////////////////////////////
 */
//var SidebarMenuEffects=function(){function e(t,n){return t===document?!1:classie.has(t,n)?!0:t.parentNode&&e(t.parentNode,n)}function t(){var e=!1,t=navigator.userAgent||navigator.vendor||window.opera;if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=!0;return e}(function(){var n=document.getElementById("st-container"),r=Array.prototype.slice.call(document.querySelectorAll("#st-trigger-effects > div")),i=t()?"touchstart":"click",s=function(t){e(t.target,"st-menu")||(classie.remove(n,"st-menu-open"),document.removeEventListener(i,s))};r.forEach(function(e,t){var r=e.getAttribute("data-effect");e.addEventListener(i,function(e){e.stopPropagation();e.preventDefault();n.className="st-container";classie.add(n,r);setTimeout(function(){classie.add(n,"st-menu-open")},25);document.addEventListener(i,s)})})})()}();


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 * ////////////////////////////////////////////////////////////////////////////
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(e){function t(e,t){(n(e,t)?i:r)(e,t)}var n,r,i;"classList"in document.documentElement?(n=function(e,t){return e.classList.contains(t)},r=function(e,t){e.classList.add(t)},i=function(e,t){e.classList.remove(t)}):(n=function(e,t){return(new RegExp("(^|\\s+)"+t+"(\\s+|$)")).test(e.className)},r=function(e,t){n(e,t)||(e.className=e.className+" "+t)},i=function(e,t){e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ")});var s={hasClass:n,addClass:r,removeClass:i,toggleClass:t,has:n,add:r,remove:i,toggle:t};"function"===typeof define&&define.amd?define(s):e.classie=s})(window);

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);

///////////////////////////////////////////////////////////////////////////////
/// ACTIONS
///////////////////////////////////////////////////////////////////////////////

if(jQuery.browser.mobile && ($("#next-alerts").length === 0)) //if is mobile or has touch enabled
{
	jQuery('<div class="center"><button id="next-alerts" class="btn btn-2 btn-2a">Load More</button></div>').appendTo('#contentcontainer');
}

// DOCUMENT READY
jQuery( document ).ready(function($) {

		if ($.cookie('popup') == 'once' ){
			$.cookie('popup', '0');
		}
    // INFINITE SCROLL
    // ---------------------

    $('.single #content').infinitescroll({
    navSelector  : "#page-pagination",
    nextSelector : "#page-pagination .next",
    itemSelector : ".multi",
    loading: {
      msgText : "<div class='spinbox-wrap'><div class='spinbox'><div class='spin'></div></div></div></div>",
      finishedMsg: "<div class='textmsg'>That's all. Don't forget to SHARE!</div>"
	  },
	    extraScrollPx : 120,
	    bufferPx: 1530,
	    animate : false,
	    debug: false,
	  });

	  $('#thegrid').infinitescroll({
    navSelector  : "#nav-below",
    nextSelector : "#nav-below .nextpostslink",
    itemSelector : "article",
    loading: {
      msgText : "<div class='spinbox-wrap'><div class='spinbox'><div class='spin'></div></div></div></div>",
      finishedMsg: "<div class='textmsg'>That's all. Don't forget to SHARE!</div>"
	  },
	    extraScrollPx : 120,
	    bufferPx: 1500,
	    animate : false,
	    debug: true,
	  });

	  if ($("#next-alerts").length > 0){
		  jQuery(window).unbind('.infscr');
	    jQuery('#next-alerts').on('tap', function () {
	        jQuery(this).parent().hide();
	        jQuery('#thegrid').infinitescroll('retrieve');
	        jQuery('.single #content').infinitescroll('retrieve');
	        return false;
	    });
		}

    // MODAL WINDOWS
    // ---------------------

    $('#feedback').popup({
      opacity: 0.8,
      transition: 'all 0.3s',
      escape: false,
      blur: false,
      autozindex: true,
      closeelement: '.popup-modal-dismiss',
      closetransitionend: function() {
        $('.state2').hide();
            $('.state1').show();
      },
    });

    $(".nevermind").on('tap', function () {
        $('.state1').hide();
        $('.state2').show();
        FB.XFBML.parse();
    });

    $(".share").on('tap', function () {
        $('.state1').hide();
        $('.state2').show();
        $.cookie('popup', 'shown', { expires: 7 });
    });

    $(".sclose").on('tap', function () {
        $('.subscribe-container').toggle();
    });
    $(".btnsubscribe").on('tap', function () {
        $('.subscribe-container').toggle();
    });


		// AJAX SIGNUP
    // ---------------------

    $('a.tap').on('tap', function(event) {
    	event.preventDefault();
    	$target = event.target;
    	window.location = $target.href;
    });


    // AJAX SIGNUP
    // ---------------------

    $(".signup-form").submit(function(e){
        e.preventDefault();

        var $form = $(this),
        name = $form.find('input[name="name"]').val(),
        email = $form.find('input[name="email"]').val(),
        url = $form.attr('action');

        $.post(url, {name:name, email:email},
          function(data) {
              if(data)
              {
                if(data=="Some fields are missing.")
                {
                    $(".status").text("Please fill in your email.");
                    $(".status").css("color", "red");
                }
                else if(data=="Invalid email address.")
                {
                    $(".status").text("Your email address is invalid.");
                    $(".status").css("color", "red");
                }
                else if(data=="Invalid list ID.")
                {
                    $(".status").text("Your list ID is invalid.");
                    $(".status").css("color", "red");
                }
                else if(data=="Already subscribed.")
                {
                    $(".status").text("You're already subscribed!");
                    $(".status").css("color", "red");
                    $.cookie('subscribed', '1', { expires: 365, path: '/' });
                    setTimeout(function(){
							        $('#floating-email-subscription').fadeOut();
							      }, 2000);
                }
                else
                {
                    $(".subscribe-email").hide();
                    $(".status").text("You're subscribed!");
                    $(".status").css("color", "green");
                    $.cookie('subscribed', '1', { expires: 365, path: '/' });
                    setTimeout(function(){
							        $('#floating-email-subscription').fadeOut();
							      }, 2000);
                }
              }
              else
              {
                alert("Sorry, unable to subscribe. Please try again later!");
              }
          }
        );
    });

    $("#signup-form").keypress(function(e) {
            if(e.keyCode == 13) {
                e.preventDefault(); 
                $(this).submit();
            }
        });

    $("#submit-btn").on('tap',function (e){
        e.preventDefault(); 
        $("#signup-form").submit();
    });

    //Ajax LIKE JS
		//////////////////////////////////////////////////////////

		$(".likepost").on('tap', function () {
			//console.log ( 'it worked' );
			if ($.cookie('vote') !== 'voted' ){
				like = $(this).attr("like");
				dislike = $(this).attr("dislike");
				pid = $(this).attr("pid");
				//console.log ( 'next starts ajax function' + like + dislike + pid);
				$.ajax({
					url: "/wp-admin/admin-ajax.php",
					data: {
						'action':'likedislikes',
						'like': like,
						'pid': pid,
						'dislike': dislike
					},
					success:function(data) {
							// This outputs the result of the ajax request
							var json = JSON.parse(data);
							//console.log ( 'ajax done' );
							//console.log ( json );
							var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
							var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
							var decimal_places = 1;
							var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 100;
							var likepercent = (json["likes"]*100)/(json["votes"]);
							var dislikepercent = (json["dislikes"]*100)/(json["votes"]);
							// $('#lines1').animateNumber({
							// 	number: likepercent * decimal_factor,
							// 	numberStep: function(now, tween) {
							// 	var floored_number = Math.floor(now) / decimal_factor,
							// 	    target = $(tween.elem);
							// 	if (decimal_places > 0) {
							// 	  floored_number = floored_number.toFixed(decimal_places);
							// 	  floored_number = floored_number.toString().replace('.', ',');
							// 	}
							// 		target.text(floored_number + ' %');
							// 	}
					  	// });

				   		// $('#lines2').animateNumber({
							// number: dislikepercent * decimal_factor,
							// numberStep: function(now, tween) {
							// var floored_number = Math.floor(now) / decimal_factor,
							//     target = $(tween.elem);
							// if (decimal_places > 0) {
							//   floored_number = floored_number.toFixed(decimal_places);
							//   floored_number = floored_number.toString().replace('.', ',');
							// }
							// 	target.text(floored_number + ' %');
							// }
					    // });

							$('#lines1').animateNumber({ number: json["likes"], numberStep: comma_separator_number_step });
							$('#lines2').animateNumber({ number: json["dislikes"], numberStep: comma_separator_number_step });
							$('#lines3').animateNumber({ number: json["votes"], numberStep: comma_separator_number_step });
							$('#votes_btn').removeClass('diplaynone');
							$.cookie('vote', 'voted', { expires: 7 });
							setTimeout(function() {
								openPopup();
							}, 2000);
					},
					error: function(errorThrown){
							console.log ( 'ajax error' );
					}
				});
			} else {
				setTimeout(function() {
					openPopup();
				}, 2000);
			}
		});

    // SHARE LIKE ON HOVER IMAGES
    // ---------------------

    if(!jQuery.browser.mobile) {
    	//$( ".size-full" ).wrap( "<div class='content_image_extracted'></div>" );
	    $( ".entry-content img" ).wrap( "<div class='content_image_extracted'></div>" );
	    $('.content_image_extracted').append("<div class='share-panel overlay'><ul class='share-btns'><li class='btn fb fblikeovl'></li><li class='btn twitter twtovl'></li><li class='btn pinterest last pintovl'></li></ul></div>");
	    fbklike  = $('.btnfacebook').attr("href");
	    twttwitt  = $('.btntwitter').attr("href");
	    pinterestbtn  = $('.btnpinterest').attr("href");
	    $('.fblikeovl').attr("onclick", fbklike);
	    $('.twtovl').attr("onclick", twttwitt);
	    $('.pintovl').attr("onclick", pinterestbtn);
    }

    // FLOATING EMAIL SUBSCRIPTION
    // ---------------------

    if( (!jQuery.browser.mobile) && ($.cookie('SM_CK') == '1' ) && ($.cookie('subscribed') !== '1' ) && ($.cookie('subscribed') !== 'closed' ) ){
    	setTimeout(function(){
        $('#floating-email-subscription').fadeIn();
      }, 3000);
      $(".badge-subscription-close").on('tap', function () {
      	$('#floating-email-subscription').fadeOut();
      	$.cookie('subscribed', 'closed', { expires: 30, path: '/'  });
      });
    }

    // COOKIE ACCEPTANCE
    // ---------------------

    if( ($.cookie('SM_CK') !== '1' ) ){
    	setTimeout(function(){
        $('#tto-cookieMessage').fadeIn();
      }, 3000);
      $("#acceptCookies").on('tap', function () {
      	$('#tto-cookieMessage').fadeOut();
      	$('#feedbackbtn').removeClass('hide-tl');
      	$.cookie('SM_CK', '1', { expires: 365, path: '/'  });
      });
    }

    // MENU
    // ---------------------

    $( "#st-trigger-effects" ).on('tap', function () {
		  $( "#st-container" ).toggleClass('st-menu-open');
		  $( "body" ).toggleClass('st-navigation-open');
		});

    $( "#closer" ).on('tap', function () {
		  $( "#st-container" ).removeClass('st-menu-open');
		  $( "#navigation" ).removeClass('st-nav-open');
		  $( "body" ).removeClass('st-navigation-open');
		});

		// KKEP IN TOUCH
    // ---------------------

    var kitShowed = 0;

    $("#kit-trigger").on('tap', function(){
		  $( "#keep-in-touch" ).toggleClass('expanded');
		  $( "#kit-close" ).toggle();
		  kitShowed = 1;
    });

    $("#kit-button").on('tap', function(){
    	$( "#keep-in-touch" ).toggleClass('expanded');
		  $( "#kit-close" ).toggle();
		  $( "#keep-in-touch" ).addClass('contacted')
		  $.cookie('KIT_CL', '1', { expires: 365, path: '/'  });
		  kitShowed = 1;
    });

    $('.video-wrapper').waypoint(function() {
  		if (kitShowed===0){
		  	$( "#keep-in-touch" ).toggleClass('expanded');
		  	$( "#kit-close" ).toggle();
			}
		}, {
		  offset: function() {
		    return -$(this).height();
		  }
		});

    // NETWORK LOGO
    // ---------------------

    $('#primary-logo').on('tap', function(e){
    	e.preventDefault();
    		$('#primary-logo').on('tap', function(e){
      		document.location.href="/";
    		});
    });

}); //end document ready


function adjust_sidesocial_pos(){
	var offset = $( '#content' ).offset();
	var offsetobj = $( '#top-social-actions' ).offset().top - $(window).scrollTop();
  if ((parseInt(offsetobj) * -1) >= 0) {
  	$( '#sliding-socials' ).css('position', 'fixed');
  	$( '#sliding-socials' ).css('left', ''+ (parseInt(offset.left) - 59 ) +'px');
  	$( '#sliding-socials' ).css('top', '69px');
  }else{
  	$( '#sliding-socials' ).css('position', 'absolute');
  	$( '#sliding-socials' ).css('left', '-50px');
  	$( '#sliding-socials' ).css('top', '78px');
  }
}

$(document).scroll(function() {
  $('#iconmenu').toggleClass('scrolled', $(document).scrollTop() >= 50);
});

if ( $('#sliding-socials').length ) {
	$( window ).resize(function() {
		adjust_sidesocial_pos();
	});
	$(document).scroll(function() {
	  adjust_sidesocial_pos();
	});
}


$(document).keydown(function(e) {
  switch(e.which) {
    case 39: // right
    	$('#st-container').toggleClass('st-menu-open');
    	$( "body" ).toggleClass('st-navigation-open');
    break;

    case 37: // left
    	$('#st-container').removeClass('st-menu-open');
    	$( ".st-pusher" ).removeClass('closemenu');
    	$( "body" ).removeClass('st-navigation-open');

    break;

    case 27: // esc
    	$('#st-container').toggleClass('st-menu-open');
    	$( ".st-pusher" ).toggleClass('closemenu');
    	$( "body" ).toggleClass('st-navigation-open');
    break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

var showed = 0;
var dlshowed = 0;

function dontLeave() {
    if (($.cookie('SM_DontLeave') !== 'closed' ) && (dlshowed == 0)){
    jQuery('#dont-leave').popup({
          opacity: 0.8,
          transition: 'all 0.3s',
          escape: false,
          offsettop: 200,
          blur: false,
          autozindex: true,
          closeelement: '.popup-modal-dismiss',
          closetransitionend: function() {
            //$('.state1').show();
						$.cookie('SM_DontLeave', 'closed', { expires: 7, path: '/'  });
          },
          onopen: function() {
						$.cookie('SM_DontLeave', 'showed');
						dlshowed++;
				  },
          autoopen: true
        });
    }
}

function openPopup() {
    if (($.cookie('popup') !== 'shown' ) && (showed == 0)){
    jQuery('#sharepp').popup({
          opacity: 0.8,
          transition: 'all 0.3s',
          escape: false,
          offsettop: 200,
          blur: false,
          autozindex: true,
          closeelement: '.popup-modal-dismiss',
          closetransitionend: function() {
            $('.state2').hide();
            $('.state1').show();
						$.cookie('popup', 'once');
          },
          onopen: function() {
						$.cookie('popup', 'once');
						showed++;
				  },
          autoopen: true
        });
    }
}

function openPopupOnscroll(){
    $(window).load(function() {
        $(window).one('mousemove', function() { }).one('scroll', function(){
            setTimeout(function(){
                openPopup();
            }, 10000);
        });
    });
}

function fbShare(url, title, descr, image, winWidth, winHeight) {
  var winTop = (screen.height / 2) - (winHeight / 2);
  var winLeft = (screen.width / 2) - (winWidth / 2);
  window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function twtShare(url, text, winWidth, winHeight) {
  var winTop = (screen.height / 2) - (winHeight / 2);
  var winLeft = (screen.width / 2) - (winWidth / 2);
  window.open('https://twitter.com/share?text=' + text + '&url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function pinShare(url, descr, media, winWidth, winHeight) {
  var winTop = (screen.height / 2) - (winHeight / 2);
  var winLeft = (screen.width / 2) - (winWidth / 2);
  window.open('http://pinterest.com/pin/create/button/?url=' + url + '&description=' + descr + '&media=' + media, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

function googleShare(url, winWidth, winHeight) {
  var winTop = (screen.height / 2) - (winHeight / 2);
  var winLeft = (screen.width / 2) - (winWidth / 2);
  window.open('https://plus.google.com/share?url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}

jQuery(document).ajaxComplete(function($) {
		jQuery('#next-alerts').parent().show();
});

jQuery(document).on('pageleave', function() {
	if ($(window).width()>1044 && $.cookie('SM_DontLeave') !== 'closed'){
			dontLeave();
	}
});

jQuery.fn.pageleave({limitY: 3, timeTillActive: 5000});


function ajaxPageviews(){
  // AJAX NUMBER OF VIEWS
  var pid = $('article').attr("pid");
  $.ajax({
		url: "/wp-admin/admin-ajax.php",
		data: {
			'action':'setpostviews',
			'pid': pid,
		},
		success:function(data) {
				// This outputs the result of the ajax request
				// var json = JSON.parse(data);
				//console.log ( 'ajax done' );
				//console.log ( json );
		},
		error: function(errorThrown){
				console.log ( 'ajax error' );
		}
	});
}
