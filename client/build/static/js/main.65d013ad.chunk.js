(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={timeline:"Scrobber_timeline__3L5xh",center:"Scrobber_center__1x6s3",btn:"Scrobber_btn__4ZN4O",pill:"Scrobber_pill__1Tt_u",cover:"Scrobber_cover__2xYjK",live:"Scrobber_live__3pa3P",circle:"Scrobber_circle__2v6Fb",scrobber:"Scrobber_scrobber__2SMqh",slider:"Scrobber_slider__1CLNR",day:"Scrobber_day__2Hioa",position:"Scrobber_position__2rj4i",bubble:"Scrobber_bubble__39Rsn",button:"Scrobber_button__JRLJi",hidden:"Scrobber_hidden__2XP4A"}},20:function(e,t,n){e.exports={camera:"Camera_camera__1_9vQ",log:"Camera_log__TLUoQ"}},28:function(e,t,n){},30:function(e,t,n){e.exports=n(45)},35:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),i=(n(35),n(13)),l=n(9),s=n(7),u=Object(a.createContext)({streams:[]}),m=n(8),f=n.n(m),h=window.location.hostname,d="http://".concat(h,":").concat(80),b=("ws://".concat(h,":").concat(80),["#EB5757","#F2994A","#F2C94C","#219653","#6FCF97","#2F80ED","#2D9CDB","#56CCF2","#9B51E0"]),v=n(29),p=function(e){var t=e.src,n=Object(v.a)(e,["src"]),o=Object(a.useState)(Date.now()),c=Object(i.a)(o,2),l=c[0],s=c[1],u=Object(a.useRef)();return Object(a.useEffect)(function(){return u.current=window.setInterval(function(){s(Date.now())},15e3),function(){window.clearInterval(u.current)}},[]),r.a.createElement("img",Object.assign({src:"".concat(t,"?q=").concat(l)},n))},_=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:f.a.list},r.a.createElement(u.Consumer,null,function(e){return e.streams.map(function(e,t){var n=e.key,a=e.name;return r.a.createElement(l.b,{to:"/camera/".concat(n)},r.a.createElement("article",{className:f.a.item,key:n},r.a.createElement("section",{className:f.a.header},r.a.createElement("h2",{className:f.a.name},a),r.a.createElement("span",{className:f.a.color,style:{backgroundColor:b[t%b.length]}})),r.a.createElement("div",{className:f.a.video},r.a.createElement(p,{src:"".concat(d,"/frame/").concat(n),alt:a}))))})})))},w=n(10),g=n(11),E=n(14),y=n(12),S=n(15),j=n(20),C=n.n(j),L=n(17),O=n.n(L),D=n(28),H=n.n(D),M=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).hls=null,n.timer=null,n.ref=null,n.videoRef=function(e){n.ref=e,n.handlePlayback()},n.autoplay=function(){n.ref&&n.ref.play()},n.handlePlayback=function(){var e=n.props.source;console.log(e),e&&n.ref&&(null!==n.timer&&clearTimeout(n.timer),O.a.isSupported()?(n.hls&&(n.ref.pause(),n.hls.destroy()),n.hls=new O.a,n.hls.loadSource(e),n.hls.attachMedia(n.ref),n.hls.on(O.a.Events.MANIFEST_PARSED,function(){n.timer=setTimeout(n.autoplay,300)})):(n.ref.src=e,n.timer=setTimeout(n.autoplay,300)))},n}return Object(S.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.handlePlayback()}},{key:"componentDidUpdate",value:function(e){e.source!==this.props.source&&this.handlePlayback()}},{key:"componentWillUnmount",value:function(){null!==this.timer&&clearTimeout(this.timer),this.ref&&this.ref.pause(),this.hls&&this.hls.destroy()}},{key:"render",value:function(){return r.a.createElement("video",{className:H.a.video,ref:this.videoRef,autoPlay:!0,muted:!0,playsInline:!0})}}]),t}(a.Component),k=function(e){var t=e.delayLog,n=Object(a.useRef)(null);return Object(a.useLayoutEffect)(function(){var e=new MediaSource,a=[],r=!1,o=null,c=null,i=null,l=null,s=function(){try{n.current&&n.current.play()}catch(e){console.error(e)}};return e.sourceBuffers.addEventListener("addsourcebuffer",function(n){var i=e.sourceBuffers[0];i.mode="sequence",i.onupdateend=function(){return console.log("onupdateend",i.buffered.length)},i.onupdate=function(){if(c){if(a.length>0&&!c.updating){var e=a.shift();0==a.length&&null!==l&&(t(performance.now()-l),l=null),e&&c.appendBuffer(e)}s()}},c=i,function e(t){var n=!1;(o=new WebSocket(t)).binaryType="arraybuffer",o.onmessage=function(e){var t=e.data;try{if(!c)return;c.updating||a.length>0?(0==a.length&&(l=performance.now()),a.push(t)):c.appendBuffer(t),!1===n&&null!=o&&(n=!0,o.send("ack"))}catch(r){console.error(r)}},o.onerror=function(){return o&&o.close()},o.onclose=function(){r||(window.clearTimeout(void 0),window.setTimeout(function(){return e(t)},1e3))}}("ws://localhost:8080")}),e.addEventListener("sourceopen",function(){s(),e.addSourceBuffer('video/mp4; codecs="avc1.42001f"')}),e.addEventListener("sourceended",function(e){console.log(e)}),null!=n.current&&(i=window.URL.createObjectURL(e),n.current.src=i),function(){r=!0,o&&o.close(),window.clearTimeout(void 0),i&&window.URL.revokeObjectURL(i)}},[]),r.a.createElement("video",{ref:n})},T=n(6),x=n.n(T),N=function(e){return function(){try{navigator.vibrate(200)}catch(t){}return e.apply(void 0,arguments)}},Y=n(1),V=n.n(Y),R=6048e5,B=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).debounce=null,n.interval=null,n.timeout=null,n.sceneTimer=null,n.timer=null,n.ref=null,n.state={shift:0,current:Date.now(),visible:!0,scenes:[]},n.onShift=function(e){var t=Math.max(0,Math.min(R,e));n.setState({shift:t}),n.props.onShift(Math.ceil(t/1e3))},n.performTick=function(){n.interval||(n.interval=0);var e=Date.now();n.setState({current:e}),null!==n.timer&&clearTimeout(n.timer);var t=n.performTick;n.timer=setTimeout(t,Math.max(1e3-new Date(e).getMilliseconds(),0))},n.extendOpacity=function(){n.setState({visible:!0}),n.timeout&&clearTimeout(n.timeout);n.timeout=setTimeout(function(){return n.setState({visible:!1})},8e3)},n.handleLive=N(function(){return n.onShift(0)}),n.handleShiftRight=N(function(){return n.onShift(n.state.shift+3e4)}),n.handleShiftLeft=N(function(){return n.onShift(n.state.shift-3e4)}),n.handleTimeChange=function(e){var t=e.split(":").map(function(e){return Number.parseInt(e,10)}),a=Object(i.a)(t,2),r=a[0],o=a[1],c=x()(),l=c.clone().subtract(n.state.shift,"milliseconds").hours(r).minutes(o);n.onShift(c.diff(l))},n.handleDateChange=function(e){if(e){var t=x()(),a=x()().subtract(n.state.shift,"milliseconds"),r=x()(e).hours(a.hours()).minutes(a.minutes()).seconds(a.seconds()).milliseconds(a.milliseconds());n.onShift(t.diff(r))}},n}return Object(S.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.extendOpacity(),document.addEventListener("touchstart",this.extendOpacity),document.addEventListener("mousedown",this.extendOpacity),document.addEventListener("mousemove",this.extendOpacity),this.performTick()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.extendOpacity),this.timer&&clearTimeout(this.timer),this.debounce&&clearTimeout(this.debounce),this.timeout&&clearTimeout(this.timeout),this.sceneTimer&&clearTimeout(this.sceneTimer)}},{key:"render",value:function(){var e=this,t=this.state,n=t.current,a=t.shift,o=t.visible,c=x()(new Date(n-a)),i=n-R;i-=i%6e4;var s=n;s+=6e4-s%6e4;var u=x()(new Date(i)),m=x()(new Date(s));return r.a.createElement("div",{className:V.a.timeline,style:{opacity:o?1:0}},r.a.createElement(l.b,{to:"/"},r.a.createElement("a",{className:[V.a.btn,V.a.circle,V.a.back].join(" ")},r.a.createElement("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M21 9.17424V11.8258H5.09091L12.3826 19.1174L10.5 21L0 10.5L10.5 0L12.3826 1.88258L5.09091 9.17424H21Z",fill:"currentColor"})))),r.a.createElement("div",{className:V.a.center},r.a.createElement("button",{className:[V.a.btn,V.a.circle,V.a.shift].join(" "),onClick:this.handleShiftLeft},r.a.createElement("svg",{width:"21",height:"14",viewBox:"0 0 21 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M16 0H13V14H16V0ZM11 0L0 7L11 14V0ZM21 0H18V14H21V0Z",fill:"currentColor"}))),r.a.createElement("div",{className:[V.a.time,V.a.btn,V.a.pill].join(" ")},r.a.createElement("input",{className:V.a.cover,onChange:function(t){return e.handleTimeChange(t.target.value)},value:c.format("HH:mm"),min:u.format("HH:mm"),max:m.format("HH:mm"),type:"time"}),c.format("HH:mm:ss")),r.a.createElement("div",{className:[V.a.calendar,V.a.btn,V.a.pill].join(" ")},r.a.createElement("input",{className:V.a.cover,onChange:function(t){return e.handleDateChange(t.target.valueAsDate)},value:c.format("YYYY-MM-DD"),min:u.format("YYYY-MM-DD"),max:m.format("YYYY-MM-DD"),type:"date"}),c.format("DD. MMMM YYYY")),r.a.createElement("button",{className:[V.a.btn,V.a.circle,V.a.shift].join(" "),onClick:this.handleShiftRight},r.a.createElement("svg",{width:"21",height:"14",viewBox:"0 0 21 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5 0H8V14H5V0ZM10 0L21 7L10 14V0ZM0 0H3V14H0V0Z",fill:"currentColor"})))),r.a.createElement("button",{className:[V.a.btn,V.a.pill,V.a.live].join(" "),onClick:this.handleLive},r.a.createElement("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M25.4983 10.3367H15.8933L19.7749 6.34167C15.9074 2.51667 9.64578 2.375 5.77828 6.2C1.91078 10.0392 1.91078 16.23 5.77828 20.0833C9.64578 23.9083 15.9074 23.9083 19.7749 20.0833C21.7016 18.1708 22.6649 15.9467 22.6649 13.1417H25.4983C25.4983 15.9467 24.2516 19.5875 21.7583 22.0525C16.7858 26.9825 8.71078 26.9825 3.73828 22.0525C-1.22006 17.1367 -1.26256 9.14667 3.70994 4.23083C8.68244 -0.685 16.6583 -0.685 21.6308 4.23083L25.4983 0.25V10.3367ZM13.4566 7.33333V13.3542L18.4149 16.3008L17.3949 18.015L11.3316 14.4167V7.33333H13.4566Z",fill:"currentColor"})),r.a.createElement("span",null,"\u017div\xfd p\u0159enos")))}}]),t}(a.Component),U=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={from:0,to:0,shift:0,debugDelay:0,showTools:!1},n.generateUrl=function(e){var t=e.name,n=e.from,a=e.to,r=e.shift,o="".concat(d,"/data/").concat(t,"/"),c="stream.m3u8",i=[];return n>0?(c="slice.m3u8",i.push("from=".concat(n)),a>0&&n<a&&i.push("to=".concat(a))):r>0&&i.push("shift=".concat(r)),o+=c,i.length>0&&(o+="?"+i.join("&")),o},n.handlePause=function(){console.log("handling pause")},n.handleShiftChange=function(e){console.log(e),n.setState({shift:e})},n}return Object(S.a)(t,e),Object(g.a)(t,[{key:"componentWillUpdate",value:function(e){this.props.name!==e.name&&this.setState({from:0,to:0,shift:0})}},{key:"render",value:function(){var e=this,t=this.props.name,n=this.state,a=n.from,o=n.to,c=n.shift,i=n.debugDelay,l=this.generateUrl({name:t,from:a,to:o,shift:c});return r.a.createElement("div",{className:C.a.camera},i&&r.a.createElement("div",{className:C.a.log},i," ms"),l&&r.a.createElement(M,{source:l}),!l&&r.a.createElement(k,{delayLog:function(t){e.setState({debugDelay:e.state.debugDelay+t})}}),r.a.createElement(B,{onShift:this.handleShiftChange,onStop:this.handlePause,name:t}))}}]),t}(a.Component),P=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)(function(){fetch("".concat(d,"/streams")).then(function(e){return e.json()}).then(function(e){var t=e.data;return o(t)})},[]),r.a.createElement(l.a,null,r.a.createElement(u.Provider,{value:{streams:n}},r.a.createElement("div",{id:"app"},r.a.createElement(s.a,{exact:!0,path:"/",component:_}),r.a.createElement(s.a,{path:"/camera/:name",render:function(e){var t=e.match;return r.a.createElement(U,{name:t.params.name,streams:n})}}))))};c.a.render(r.a.createElement(P,null),document.getElementById("root"))},8:function(e,t,n){e.exports={item:"Home_item__2ZH6b",header:"Home_header__1C8Uc",color:"Home_color__fYjfc",name:"Home_name__1FDy3",video:"Home_video__32sq0",list:"Home_list__2TVHk"}}},[[30,1,2]]]);
//# sourceMappingURL=main.65d013ad.chunk.js.map