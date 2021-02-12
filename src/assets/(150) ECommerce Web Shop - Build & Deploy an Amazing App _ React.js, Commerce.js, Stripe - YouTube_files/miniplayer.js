(function(g){var window=this;var g4=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",R:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},N:[{D:"g",R:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},N:[{D:"g",R:{transform:"translate(-1.000000, -3.000000)"},N:[{D:"polygon",R:{points:"0 0 24 0 24 24 0 24"}},{D:"path",R:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.P().W("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",R:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},N:[{D:"g",R:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},N:[{D:"g",R:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},N:[{D:"path",R:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.U.call(this,{D:"button",ga:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],R:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},N:[d]});this.F=a;this.va("click",this.onClick,this);this.wa("title",g.PO(a,e,"i"));g.ag(this,g.mP(b.Lb(),this.element))},h4=function(a){g.U.call(this,{D:"div",
J:"ytp-miniplayer-ui"});this.Zh=!1;this.player=a;this.L(a,"minimized",this.zh);this.L(a,"onStateChange",this.CQ)},i4=function(a){g.sO.call(this,a);
this.i=new h4(this.player);this.i.hide();g.gO(this.player,this.i.element,4);a.le()&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(g4,g.U);g4.prototype.onClick=function(){this.F.ra("onExpandMiniplayer")};g.u(h4,g.U);g.k=h4.prototype;
g.k.show=function(){this.Zd=new g.hn(this.Gr,null,this);this.Zd.start();if(!this.Zh){this.tooltip=new g.nS(this.player,this);g.C(this,this.tooltip);g.gO(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Mb=new g.hP(this.player);g.C(this,this.Mb);this.Fj=new g.U({D:"div",J:"ytp-miniplayer-scrim"});g.C(this,this.Fj);this.Fj.ca(this.element);this.L(this.Fj.element,"click",this.HF);var a=new g.U({D:"button",ga:["ytp-miniplayer-close-button","ytp-button"],R:{"aria-label":"Close"},N:[g.iM()]});
g.C(this,a);a.ca(this.Fj.element);this.L(a.element,"click",this.uj);a=new g4(this.player,this);g.C(this,a);a.ca(this.Fj.element);g.P(this.player.P().experiments,"web_inline_player_after_video_preview")&&(a=new g.$R(this.player,this),g.C(this,a),a.ca(this.Fj.element),a=new g.eR(this.player,this),g.C(this,a),a.ca(this.Fj.element));this.Om=new g.U({D:"div",J:"ytp-miniplayer-controls"});g.C(this,this.Om);this.Om.ca(this.Fj.element);this.L(this.Om.element,"click",this.HF);var b=new g.U({D:"div",J:"ytp-miniplayer-button-container"});
g.C(this,b);b.ca(this.Om.element);a=new g.U({D:"div",J:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ca(this.Om.element);var c=new g.U({D:"div",J:"ytp-miniplayer-button-container"});g.C(this,c);c.ca(this.Om.element);this.cG=new g.jR(this.player,this,!1);g.C(this,this.cG);this.cG.ca(b.element);b=new g.gR(this.player,this);g.C(this,b);b.ca(a.element);this.nextButton=new g.jR(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.ca(c.element);this.Ai=new g.aS(this.player,this);g.C(this,
this.Ai);this.Ai.ca(this.Fj.element);this.Uc=new g.oR(this.player,this);g.C(this,this.Uc);g.gO(this.player,this.Uc.element,4);this.zu=new g.U({D:"div",J:"ytp-miniplayer-buttons"});g.C(this,this.zu);g.gO(this.player,this.zu.element,4);a=new g.U({D:"button",ga:["ytp-miniplayer-close-button","ytp-button"],R:{"aria-label":"Close"},N:[g.iM()]});g.C(this,a);a.ca(this.zu.element);this.L(a.element,"click",this.uj);a=new g.U({D:"button",ga:["ytp-miniplayer-replay-button","ytp-button"],R:{"aria-label":"Close"},
N:[g.nM()]});g.C(this,a);a.ca(this.zu.element);this.L(a.element,"click",this.JO);this.L(this.player,"presentingplayerstatechange",this.Ub);this.L(this.player,"appresize",this.Pa);this.L(this.player,"fullscreentoggled",this.Pa);this.Pa();this.Zh=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Uc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Zd&&(this.Zd.dispose(),this.Zd=void 0);g.U.prototype.hide.call(this);this.player.le()||(this.Zh&&this.Uc.hide(),this.player.loadModule("annotations_module"))};
g.k.aa=function(){this.Zd&&(this.Zd.dispose(),this.Zd=void 0);g.U.prototype.aa.call(this)};
g.k.uj=function(){this.player.stopVideo();this.player.ra("onCloseMiniplayer")};
g.k.JO=function(){this.player.playVideo()};
g.k.HF=function(a){if(a.target===this.Fj.element||a.target===this.Om.element)g.P(this.player.P().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.mL(this.player.Sa())?this.player.pauseVideo():this.player.playVideo():this.player.ra("onExpandMiniplayer")};
g.k.zh=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.le())};
g.k.pe=function(){this.Uc.xb();this.Ai.xb()};
g.k.Gr=function(){this.pe();this.Zd&&this.Zd.start()};
g.k.Ub=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Pa=function(){g.zR(this.Uc,0,this.player.Ga().getPlayerSize().width,!1);g.qR(this.Uc)};
g.k.CQ=function(a){this.player.le()&&(0===a?this.hide():this.show())};
g.k.Lb=function(){return this.tooltip};
g.k.te=function(){return!1};
g.k.Je=function(){return!1};
g.k.bi=function(){return!1};
g.k.Pz=function(){};
g.k.Rm=function(){};
g.k.Gq=function(){};
g.k.Zm=function(){return null};
g.k.fj=function(){return new g.eg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.np=function(a,b,c,d,e){var f=0,h=d=0,l=g.Mg(a);if(b){c=g.rn(b,"ytp-prev-button")||g.rn(b,"ytp-next-button");var m=g.rn(b,"ytp-play-button"),n=g.rn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Kg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.rn(b,"ytp-miniplayer-button-top-left"),f=g.Kg(b,this.element),b=g.Mg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Ga().getPlayerSize().width;e=f+(e||0);l=g.$d(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Ck=function(){};
g.k.Zj=function(){return!1};g.u(i4,g.sO);i4.prototype.create=function(){};
i4.prototype.wi=function(){return!1};
i4.prototype.load=function(){this.player.hideControls();this.i.show()};
i4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.yO.miniplayer=i4;})(_yt_player);
