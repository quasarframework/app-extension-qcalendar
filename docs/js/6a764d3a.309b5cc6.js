(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6a764d3a"],{"5acd":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e=Math.floor(e),e<10?"0"+e:e+""}},"6a84":function(e,t,a){},"7f83":function(e,t,a){"use strict";var n=a("6a84"),r=a.n(n);r.a},"9b5a":function(e,t){var a;(function(e){"use strict";var t=function(){function e(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(e.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(e){this._dropEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(e){this._effectAllowed=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),e.prototype.clearData=function(e){null!=e?delete this._data[e]:this._data=null},e.prototype.getData=function(e){return this._data[e]||""},e.prototype.setData=function(e,t){this._data[e]=t},e.prototype.setDragImage=function(e,t,n){var r=a._instance;r._imgCustom=e,r._imgOffset={x:t,y:n}},e}();e.DataTransfer=t;var a=function(){function e(){if(this._lastClick=0,e._instance)throw"DragDropTouch instance already created.";var t=!1;if(document.addEventListener("test",(function(){}),{get passive(){return t=!0,!0}}),"ontouchstart"in document){var a=document,n=this._touchstart.bind(this),r=this._touchmove.bind(this),i=this._touchend.bind(this),o=!!t&&{passive:!1,capture:!1};a.addEventListener("touchstart",n,o),a.addEventListener("touchmove",r,o),a.addEventListener("touchend",i),a.addEventListener("touchcancel",i)}}return e.getInstance=function(){return e._instance},e.prototype._touchstart=function(t){var a=this;if(this._shouldHandle(t)){if(Date.now()-this._lastClick<e._DBLCLICK&&this._dispatchEvent(t,"dblclick",t.target))return t.preventDefault(),void this._reset();this._reset();var n=this._closestDraggable(t.target);n&&(this._dispatchEvent(t,"mousemove",t.target)||this._dispatchEvent(t,"mousedown",t.target)||(this._dragSource=n,this._ptDown=this._getPoint(t),this._lastTouch=t,t.preventDefault(),setTimeout((function(){a._dragSource==n&&null==a._img&&a._dispatchEvent(t,"contextmenu",n)&&a._reset()}),e._CTXMENU)))}},e.prototype._touchmove=function(t){if(this._shouldHandle(t)){var a=this._getTarget(t);if(this._dispatchEvent(t,"mousemove",a))return this._lastTouch=t,void t.preventDefault();if(this._dragSource&&!this._img){var n=this._getDelta(t);n>e._THRESHOLD&&(this._dispatchEvent(t,"dragstart",this._dragSource),this._createImage(t),this._dispatchEvent(t,"dragenter",a))}this._img&&(this._lastTouch=t,t.preventDefault(),a!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(t,"dragenter",a),this._lastTarget=a),this._moveImage(t),this._dispatchEvent(t,"dragover",a))}},e.prototype._touchend=function(e){if(this._shouldHandle(e)){if(this._dispatchEvent(this._lastTouch,"mouseup",e.target))return void e.preventDefault();this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",e.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(e.type.indexOf("cancel")<0&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},e.prototype._shouldHandle=function(e){return e&&!e.defaultPrevented&&e.touches&&e.touches.length<2},e.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._dataTransfer=new t},e.prototype._getPoint=function(e,t){return e&&e.touches&&(e=e.touches[0]),{x:t?e.pageX:e.clientX,y:t?e.pageY:e.clientY}},e.prototype._getDelta=function(e){var t=this._getPoint(e);return Math.abs(t.x-this._ptDown.x)+Math.abs(t.y-this._ptDown.y)},e.prototype._getTarget=function(e){var t=this._getPoint(e),a=document.elementFromPoint(t.x,t.y);while(a&&"none"==getComputedStyle(a).pointerEvents)a=a.parentElement;return a},e.prototype._createImage=function(t){this._img&&this._destroyImage();var a=this._imgCustom||this._dragSource;if(this._img=a.cloneNode(!0),this._copyStyle(a,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var n=a.getBoundingClientRect(),r=this._getPoint(t);this._imgOffset={x:r.x-n.left,y:r.y-n.top},this._img.style.opacity=e._OPACITY.toString()}this._moveImage(t),document.body.appendChild(this._img)},e.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},e.prototype._moveImage=function(e){var t=this;requestAnimationFrame((function(){if(t._img){var a=t._getPoint(e,!0),n=t._img.style;n.position="absolute",n.pointerEvents="none",n.zIndex="999999",n.left=Math.round(a.x-t._imgOffset.x)+"px",n.top=Math.round(a.y-t._imgOffset.y)+"px"}}))},e.prototype._copyProps=function(e,t,a){for(var n=0;n<a.length;n++){var r=a[n];e[r]=t[r]}},e.prototype._copyStyle=function(t,a){if(e._rmvAtts.forEach((function(e){a.removeAttribute(e)})),t instanceof HTMLCanvasElement){var n=t,r=a;r.width=n.width,r.height=n.height,r.getContext("2d").drawImage(n,0,0)}for(var i=getComputedStyle(t),o=0;o<i.length;o++){var s=i[o];s.indexOf("transition")<0&&(a.style[s]=i[s])}a.style.pointerEvents="none";for(o=0;o<t.children.length;o++)this._copyStyle(t.children[o],a.children[o])},e.prototype._dispatchEvent=function(t,a,n){if(t&&n){var r=document.createEvent("Event"),i=t.touches?t.touches[0]:t;return r.initEvent(a,!0,!0),r.button=0,r.which=r.buttons=1,this._copyProps(r,t,e._kbdProps),this._copyProps(r,i,e._ptProps),r.dataTransfer=this._dataTransfer,n.dispatchEvent(r),r.defaultPrevented}return!1},e.prototype._closestDraggable=function(e){for(;e;e=e.parentElement)if(e.hasAttribute("draggable")&&e.draggable)return e;return null},e}();a._instance=new a,a._THRESHOLD=5,a._OPACITY=.5,a._DBLCLICK=500,a._CTXMENU=900,a._rmvAtts="id,class,style,draggable".split(","),a._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),a._ptProps="pageX,pageY,clientX,clientY,screenX,screenY".split(","),e.DragDropTouch=a})(a||(a={}))},a2d6:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"column"},[a("q-dialog",{model:{value:e.displayEvent,callback:function(t){e.displayEvent=t},expression:"displayEvent"}},[e.event?a("q-card",[a("q-toolbar",{class:e.displayClasses(e.event),staticStyle:{"min-width":"400px"},style:e.displayStyles(e.event)},[a("q-toolbar-title",[e._v("\n            "+e._s(e.event.title)+"\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"delete"},on:{click:function(t){return e.deleteEvent(e.event)}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"edit"},on:{click:function(t){return e.editEvent(e.event)}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"cancel"}})],1),a("q-card-section",{staticClass:"inset-shadow"},[e.event.allDay?a("div",{staticClass:"text-caption"},[e._v(e._s(e.getEventDate(e.event)))]):e._e(),e._v("\n          "+e._s(e.event.details)+"\n          "),e.event.time?a("div",{staticClass:"text-caption"},[a("pre",[e._v("Start Time: "+e._s(e.event.time)+"\nEnd Time:   "+e._s(e.getEndTime(e.event))+"\nDuration:   "+e._s(e.convertDurationTime(e.event.duration))+"\n            ")])]):e._e()]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1):e._e()],1),a("q-dialog",{attrs:{"no-backdrop-dismiss":""},model:{value:e.addEvent,callback:function(t){e.addEvent=t},expression:"addEvent"}},[e.addEvent?a("q-card",{staticStyle:{width:"400px"}},[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-toolbar-title",[e._v("\n            "+e._s(e.addOrUpdateEvent)+" Event\n          ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",color:"white",icon:"close"}})],1),a("q-card-section",{staticClass:"inset-shadow"},[e.contextDay?a("q-form",{ref:"event",staticClass:"q-gutter-md"},[a("q-input",{attrs:{autofocus:"",label:"Title",rules:[function(e){return e&&e.length>0||"Field cannot be empty"}]},model:{value:e.eventForm.title,callback:function(t){e.$set(e.eventForm,"title",t)},expression:"eventForm.title"}}),a("q-input",{attrs:{label:"Details"},model:{value:e.eventForm.details,callback:function(t){e.$set(e.eventForm,"details",t)},expression:"eventForm.details"}}),a("q-checkbox",{attrs:{label:"All-Day event?"},model:{value:e.eventForm.allDay,callback:function(t){e.$set(e.eventForm,"allDay",t)},expression:"eventForm.allDay"}}),e.eventForm.allDay?a("q-input",{attrs:{color:"blue-6",filled:"",label:"Enter date",mask:"####-##-##"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateScrollerAllDay,callback:function(t){e.showDateScrollerAllDay=t},expression:"showDateScrollerAllDay"}},[a("q-date-scroller",{style:e.scrollerPopupStyle160,attrs:{locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3",color:"white","background-color":"primary","inner-color":"primary","inner-background-color":"white"},on:{close:function(){e.showDateScrollerAllDay=!1}},model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}})],1)],1)]},proxy:!0}],null,!1,1865901796),model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}}):a("div",{staticClass:"q-gutter-sm"},[a("q-input",{attrs:{color:"blue-6",outlined:"",label:"Event start date and time",mask:"####-##-## ##:##"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateTimeScrollerStart,callback:function(t){e.showDateTimeScrollerStart=t},expression:"showDateTimeScrollerStart"}},[a("q-date-time-scroller",{style:e.scrollerPopupStyle280,attrs:{locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3",color:"white","background-color":"primary","inner-color":"primary","inner-background-color":"white"},on:{close:function(){e.showDateTimeScrollerStart=!1}},model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}})],1)],1)]},proxy:!0}],null,!1,964581969),model:{value:e.eventForm.dateTimeStart,callback:function(t){e.$set(e.eventForm,"dateTimeStart",t)},expression:"eventForm.dateTimeStart"}}),a("q-input",{attrs:{color:"blue-6",outlined:"",label:"Event end date and time",mask:"####-##-## ##:##"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{model:{value:e.showDateTimeScrollerEnd,callback:function(t){e.showDateTimeScrollerEnd=t},expression:"showDateTimeScrollerEnd"}},[a("q-date-time-scroller",{style:e.scrollerPopupStyle280,attrs:{locale:e.locale,"hour24-format":!0,"rounded-borders":!0,"border-color":"#2196f3","bar-color":"#2196f3",color:"white","background-color":"primary","inner-color":"primary","inner-background-color":"white"},on:{close:function(){e.showDateTimeScrollerEnd=!1}},model:{value:e.eventForm.dateTimeEnd,callback:function(t){e.$set(e.eventForm,"dateTimeEnd",t)},expression:"eventForm.dateTimeEnd"}})],1)],1)]},proxy:!0}],null,!1,1844234238),model:{value:e.eventForm.dateTimeEnd,callback:function(t){e.$set(e.eventForm,"dateTimeEnd",t)},expression:"eventForm.dateTimeEnd"}})],1),a("q-input",{attrs:{filled:"",label:"Icon",clearable:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"extension"}},[a("q-popup-proxy",{model:{value:e.showIconPicker,callback:function(t){e.showIconPicker=t},expression:"showIconPicker"}},[a("q-icon-picker",{staticStyle:{height:"300px",width:"300px","background-color":"white"},attrs:{filter:e.eventForm.icon,"icon-set":"fontawesome-v5",tooltips:"",pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},model:{value:e.eventForm.icon,callback:function(t){e.$set(e.eventForm,"icon",t)},expression:"eventForm.icon"}})],1)],1)]},proxy:!0}],null,!1,839296791),model:{value:e.eventForm.icon,callback:function(t){e.$set(e.eventForm,"icon",t)},expression:"eventForm.icon"}}),a("q-input",{attrs:{filled:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[a("q-popup-proxy",[a("q-color",{model:{value:e.eventForm.bgcolor,callback:function(t){e.$set(e.eventForm,"bgcolor",t)},expression:"eventForm.bgcolor"}})],1)],1)]},proxy:!0}],null,!1,2928914025),model:{value:e.eventForm.bgcolor,callback:function(t){e.$set(e.eventForm,"bgcolor",t)},expression:"eventForm.bgcolor"}})],1):e._e()],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",label:"OK",color:"primary"},on:{click:e.saveEvent}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}})],1)],1):e._e()],1),a("div",{staticClass:"calendar-container",style:e.containerStyle},[a("q-calendar",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.mouse.left.right",value:e.handleSwipe,expression:"handleSwipe",modifiers:{mouse:!0,left:!0,right:!0}}],key:e.keyValue,ref:"calendar",staticClass:"calendar",attrs:{locale:e.locale,"max-days":e.maxDays,"interval-style":e.modifiedStyle,"day-style":e.modifiedStyle,"resource-style":e.modifiedStyle,animated:"","transition-prev":"slide-right","transition-next":"slide-left","drag-over-func":e.onDragOver,"drop-func":e.onDrop,theme:e.theme,view:e.calendarView,weekdays:e.weekdays,"interval-minutes":60*e.intervalRangeStep,"interval-start":e.intervalStart,"interval-count":e.intervalCount,"hour24-format":e.hour24Format,"short-month-label":e.shortMonthLabel,"show-day-of-year-label":e.showDayOfYearLabel,"hide-header":e.hideHeader,"no-scroll":e.noScroll,"short-weekday-label":e.shortWeekdayLabel,"short-interval-label":e.shortIntervalLabel,"interval-height":e.intervalHeight,"resource-height":e.resourceHeight,"resource-width":e.resourceWidth,"day-height":e.dayHeight,"show-month-label":e.showMonthLabel,"show-work-weeks":e.showWorkWeeks,"no-default-header-btn":e.noDefaultHeaderBtn,"no-default-header-text":e.noDefaultHeaderText,"enable-theme":!0===e.enableTheme,resources:e.resources,dayPadding:"35px 2px"},on:{change:e.onChanged,moved:e.onMoved,"click:date":e.onDateChanged,"click:interval":e.addEventMenu,"click:time":e.addEventMenu,"click:day":e.addEventMenu,"click:week":e.addEventMenu,"click:resource":e.resourceClicked,"click:resource:day":e.resourceDayClicked},scopedSlots:e._u([{key:"day",fn:function(t){var n=t.date;return[e._l(e.getEvents(n),(function(t,n){return[a("q-badge",{key:n,staticClass:"ellipsis",class:e.badgeClasses(t,"day"),staticStyle:{width:"100%",cursor:"pointer",height:"14px","max-height":"14px"},style:e.badgeStyles(t,"day"),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1)]}))]}},{key:"day-header",fn:function(t){var n=t.date;return[a("div",{staticClass:"row justify-center"},[e._l(e.eventsMap[n],(function(t,n){return[t.time?a("q-badge",{key:n,staticClass:"q-ma-xs self-end",class:e.badgeClasses(t,"header"),staticStyle:{width:"10px","max-width":"10px",height:"10px","max-height":"10px"},style:e.badgeStyles(t,"header")}):a("q-badge",{key:n,staticClass:"ellipsis",class:e.badgeClasses(t,"header"),staticStyle:{width:"100%",cursor:"pointer",height:"14px","max-height":"14px"},style:e.badgeStyles(t,"header"),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1)]}))],2)]}},{key:"day-body",fn:function(t){var n=t.date,r=t.timeStartPos,i=t.timeDurationHeight;return[e._l(e.getEvents(n),(function(t,n){return[t.time?a("q-badge",{key:n,staticClass:"my-event justify-center ellipsis",class:e.badgeClasses(t,"body"),style:e.badgeStyles(t,"body",r,i),attrs:{draggable:!0},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showEvent(t)}},nativeOn:{dragstart:function(a){return function(a){return e.onDragStart(a,t)}(a)},dragend:function(a){return function(a){return e.onDragEnd(a,t)}(a)},dragenter:function(a){return function(a){return e.onDragEnter(a,t)}(a)},touchmove:function(e){}}},[t.icon?a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.icon}}):e._e(),a("span",{staticClass:"ellipsis"},[e._v(e._s(t.title))])],1):e._e()]}))]}},{key:"intervals-header",fn:function(t){return[a("div",{staticClass:"fit flex justify-center items-end"},[a("span",{staticClass:"q-calendar-daily__interval-text"},[e._v(e._s(e.showOffset(t)))])])]}}]),model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)},r=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("118e")),o=a.n(i),s=(a("a481"),a("28a5"),a("c47a")),l=a.n(s),c=a("2f62"),d=(a("4917"),function(e){return!!e&&!!e.match(/^(#|(rgb|hsl)a?\()/)}),u=[{title:"April Fools Day",details:"Everything is funny as long as it is happening to someone else",date:"2019-04-01",bgcolor:"orange"},{title:"Sisters Birthday",details:"Buy a nice present",date:"2019-04-04",bgcolor:"green",icon:"fas fa-birthday-cake"},{title:"Meeting",details:"Time to pitch my idea to the company",date:"2019-04-08",time:"10:00",duration:120,bgcolor:"red",icon:"fas fa-handshake"},{title:"Lunch",details:"Company is paying!",date:"2019-04-08",time:"11:30",duration:90,bgcolor:"teal",icon:"fas fa-hamburger"},{title:"Visit mom",details:"Always a nice chat with mom",date:"2019-04-20",time:"17:00",duration:90,bgcolor:"blue-grey",icon:"fas fa-car"},{title:"Conference",details:"Teaching Javascript 101",date:"2019-04-22",time:"08:00",duration:540,bgcolor:"blue",icon:"fas fa-chalkboard-teacher"},{title:"Girlfriend",details:"Meet GF for dinner at Swanky Restaurant",date:"2019-04-22",time:"19:00",duration:180,bgcolor:"teal",icon:"fas fa-utensils"},{title:"Fishing",details:"Time for some weekend R&R",date:"2019-04-27",bgcolor:"purple",icon:"fas fa-fish",days:2},{title:"Vacation",details:"Trails and hikes, going camping! Don't forget to bring bear spray!",date:"2019-04-29",bgcolor:"purple",icon:"fas fa-plane",days:5}],h=a("5acd"),m=a("bd4c"),v=a("bc78"),p=a("0967"),f=a("d882");a("9b5a");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={title:"",details:"",allDay:!1,dateTimeStart:"",dateTimeEnd:"",icon:"",bgcolor:"#0000FF"},_={name:"PageIndex",data:function(){return{keyValue:0,direction:"forward",weekdays:[0,1,2,3,4,5,6],disabledDays:["2019-04-02","2019-04-03","2019-04-04","2019-04-05"],addEvent:!1,contextDay:null,eventForm:y({},b),displayEvent:!1,event:null,events:[],gmt:"",dragging:!1,draggedEvent:null,ignoreNextSwipe:!1,showDateScrollerAllDay:!1,showDateTimeScrollerStart:!1,showDateTimeScrollerEnd:!1,resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}],showIconPicker:!1,pagination:{itemsPerPage:35,page:0}}},mounted:function(){this.$root.$on("calendar:next",this.calendarNext),this.$root.$on("calendar:prev",this.calendarPrev),this.$root.$on("calendar:today",this.calendarToday),this.events=u,this.updateFormatters()},beforeDestroy:function(){this.$root.$off("calendar:next",this.calendarNext),this.$root.$off("calendar:prev",this.calendarPrev),this.$root.$off("calendar:today",this.calendarToday)},computed:y({},Object(c["b"])({locale:"calendar/locale",titlebarHeight:"common/titlebarHeight",maxDays:"calendar/maxDays",fiveDayWorkWeek:"calendar/fiveDayWorkWeek",firstDayMonday:"calendar/firstDayMonday",shortMonthLabel:"calendar/shortMonthLabel",showDayOfYearLabel:"calendar/showDayOfYearLabel",shortWeekdayLabel:"calendar/shortWeekdayLabel",shortIntervalLabel:"calendar/shortIntervalLabel",hour24Format:"calendar/hour24Format",hideHeader:"calendar/hideHeader",noScroll:"calendar/noScroll",showMonthLabel:"calendar/showMonthLabel",showWorkWeeks:"calendar/showWorkWeeks",noDefaultHeaderBtn:"calendar/noDefaultHeaderBtn",noDefaultHeaderText:"calendar/noDefaultHeaderText",intervalRange:"calendar/intervalRange",intervalRangeStep:"calendar/intervalRangeStep",intervalHeight:"calendar/intervalHeight",resourceHeight:"calendar/resourceHeight",resourceWidth:"calendar/resourceWidth",dayHeight:"calendar/dayHeight",enableTheme:"calendar/enableTheme",theme:"calendar/theme"}),{intervalStart:function(){return this.intervalRange.min*(1/this.intervalRangeStep)},intervalCount:function(){return(this.intervalRange.max-this.intervalRange.min)*(1/this.intervalRangeStep)},selectedDate:{get:function(){return this.$store.state.calendar.selectedDate},set:function(e){this.$store.commit("calendar/selectedDate",e)}},calendarView:{get:function(){return this.$store.state.calendar.calendarView},set:function(e){this.$store.commit("calendar/calendarView",e)}},containerStyle:function(){var e={};return("month"!==this.calendarView||"month"===this.calendarView&&0===this.dayHeight)&&(e.height="calc(100vh - ".concat(this.titlebarHeight,"px)")),e},eventsMap:function(){var e={};return this.events.forEach((function(t){return(e[t.date]=e[t.date]||[]).push(t)})),e},addOrUpdateEvent:function(){return this.contextDay&&this.contextDay.bgcolor?"Update":"Add"},scrollerPopupStyle160:function(){return this.$q.screen.lt.sm?{width:"100vw",height:"100vh"}:{maxHeight:"400px",height:"400px",width:"160px"}},scrollerPopupStyle280:function(){return this.$q.screen.lt.sm?{width:"100vw",height:"100vh"}:{maxHeight:"400px",height:"400px",width:"280px"}}}),watch:{fiveDayWorkWeek:function(){this.fiveDayWorkWeek?(this.weekdays=[1,2,3,4,5],this.view="5day"):("5day"===this.view&&(this.view="month"),this.firstDayMonday?this.weekdays=[1,2,3,4,5,6,0]:this.weekdays=[0,1,2,3,4,5,6])},firstDayMonday:function(){this.fiveDayWorkWeek?(this.weekdays=[1,2,3,4,5],this.view="5day"):("5day"===this.view&&(this.view="month"),this.firstDayMonday?this.weekdays=[1,2,3,4,5,6,0]:this.weekdays=[0,1,2,3,4,5,6])},locale:function(){this.updateFormatters()}},methods:{calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()},calendarToday:function(e){this.selectedDate=e},modifiedStyle:function(e){var t=e;return"resource"in e&&(t=e.day),!0===t.disabled?{backgroundColor:"#efefef!important"}:{}},onChanged:function(e){},onMoved:function(e){},getEvents:function(e){for(var t=[],a=0;a<this.events.length;++a){var n=!1;if(this.events[a].date===e){if(this.events[a].time&&t.length>0)for(var r=new Date(this.events[a].date+" "+this.events[a].time).getTime(),i=m["b"].addToDate(r,{minutes:this.events[a].duration}).getTime(),o=0;o<t.length;++o){var s=new Date(t[o].date+" "+t[o].time).getTime(),l=m["b"].addToDate(s,{minutes:t[o].duration}).getTime();if(r>=s&&r<l||s>=r&&s<i){t[o].side="left",this.events[a].side="right",t.push(this.events[a]),n=!0;break}}n||(this.events[a].side=void 0,t.push(this.events[a]))}else if(this.events[a].days){var c=new Date(this.events[a].date),d=m["b"].addToDate(c,{days:this.events[a].days});m["b"].isBetweenDates(e,c,d)&&(t.push(this.events[a]),n=!0)}}return t},resetForm:function(){this.$set(this,"eventForm",y({},b))},showEvent:function(e){this.event=e,this.displayEvent=!0},getEndTime:function(e){var t=new Date(e.date+" "+e.time+":00");return t=m["b"].addToDate(t,{minutes:e.duration}),t=m["b"].formatDate(t,"HH:mm"),t},getEventDate:function(e){var t=e.date.split("-"),a=new Date(t[0],t[1]-1,t[2]);return this.dateFormatter.format(a)},badgeClasses:function(e,t){var a,n=d(e.bgcolor),r="header"===t;return a={},l()(a,"text-white bg-".concat(e.bgcolor),!n),l()(a,"full-width",!r&&(!e.side||"full"===e.side)),l()(a,"left-side",!r&&"left"===e.side),l()(a,"right-side",!r&&"right"===e.side),a},badgeStyles:function(e,t,a,n){var r={};return d(e.bgcolor)&&(r["background-color"]=e.bgcolor,r["color"]=v["a"].luminosity(e.bgcolor)>.5?"black":"white"),a&&(r["top"]=a(e.time)+"px"),n&&(r["height"]=n(e.duration)+"px"),r["align-items"]="flex-start",r},displayClasses:function(e){var t;return t={},l()(t,"bg-".concat(e.bgcolor),!d(e.bgcolor)),l()(t,"text-white",!d(e.bgcolor)),t},displayStyles:function(e){var t={};return d(e.bgcolor)&&(t["background-color"]=e.bgcolor,t["color"]=v["a"].luminosity(e.bgcolor)>.5?"black":"white"),t},onDateChanged:function(e){"scheduler"!==this.calendarView&&"week-scheduler"!==this.calendarView&&"month-scheduler"!==this.calendarView&&(this.calendarView="day")},resourceClicked:function(e){},resourceDayClicked:function(e){},addEventMenu:function(e,t){if(!0!==e.disabled&&"scheduler"!==this.calendarView&&"week-scheduler"!==this.calendarView&&"month-scheduler"!==this.calendarView){var a;if(this.resetForm(),this.contextDay=y({},e),!0===this.contextDay.hasTime){a=this.getTimestamp(this.adjustTimestamp(this.contextDay));var n=new Date(a),r=m["b"].addToDate(n,{hours:1});this.eventForm.dateTimeEnd=this.formatDate(r)+" "+this.formatTime(r)}else a=this.contextDay.date+" 00:00";this.eventForm.dateTimeStart=a,this.eventForm.allDay=!1===this.contextDay.hasTime,this.eventForm.bgcolor="#0000FF",this.addEvent=!0}},editEvent:function(e){var t;if(this.resetForm(),this.contextDay=y({},e),e.time){t=e.date+" "+e.time;var a=new Date(t),n=m["b"].addToDate(a,{minutes:e.duration});this.eventForm.dateTimeStart=this.formatDate(a)+" "+this.formatTime(a),this.eventForm.dateTimeEnd=this.formatDate(n)+" "+this.formatTime(n)}else t=e.date,this.eventForm.dateTimeStart=t;this.eventForm.allDay=!e.time,this.eventForm.bgcolor=e.bgcolor,this.eventForm.icon=e.icon,this.eventForm.title=e.title,this.eventForm.details=e.details,this.addEvent=!0},deleteEvent:function(e){var t=this.findEventIndex(e);t>=0&&this.events.splice(t,1)},findEventIndex:function(e){for(var t=0;t<this.events.length;++t)if(e.title===this.events[t].title&&e.details===this.events[t].details&&e.date===this.events[t].date)return t},formatDate:function(e){var t=void 0!==e?new Date(e):new Date,a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return[r,Object(h["a"])(a),Object(h["a"])(n)].join("-")},formatTime:function(e){var t=void 0!==e?new Date(e):new Date,a=""+t.getHours(),n=""+t.getMinutes();return[Object(h["a"])(a),Object(h["a"])(n)].join(":")},getDuration:function(e,t,a){var n=new Date(e),r=new Date(t),i=m["b"].getDateDiff(r,n,a);return i},convertDurationTime:function(e){var t=e,a=Math.floor(t/60/24),n=t/60,r=Math.floor(n),i=Math.floor(n-24*a),o=60*(n-r),s=Math.round(o);return(a>0?a+" days and ":"")+(i>0?i+" hour(s) and ":"")+s+" minute(s)."},saveEvent:function(){var e=this;this.$refs.event.validate().then((function(t){if(t){e.addEvent=!1;var a=y({},e.eventForm),n=!1;e.contextDay.bgcolor&&(n=!0);var r={title:a.title,details:a.details,icon:a.icon,bgcolor:a.bgcolor,date:String(a.dateTimeStart).slice(0,10).replace(/\//g,"-")};if(!1===a.allDay&&(r.time=String(a.dateTimeStart).slice(11,16),r.duration=e.getDuration(a.dateTimeStart,a.dateTimeEnd,"minutes")),!0===n){var i=e.findEventIndex(e.contextDay);i>=0&&e.events.splice(i,1,y({},r))}else e.events.push(r);e.contextDay=null}}))},showOffset:function(e){if(0!==e.length){var t=Object(h["a"])(new Date(this.getTimestamp(e[0])).getTimezoneOffset()/60);return isNaN(t)?"":"GMT-"+t}},adjustTimestamp:function(e){return e.minute=e.minute<15||e.minute>=45?0:30,e},getTimestamp:function(e){return e.date+" "+Object(h["a"])(e.hour)+":"+Object(h["a"])(e.minute)+":00.000"},updateFormatters:function(){try{this.dateFormatter=new Intl.DateTimeFormat(this.locale||void 0,{weekday:this.shortWeekdayLabel?"short":"long",month:this.shortMonthLabel?"short":"long",day:"numeric",year:"numeric",timeZone:"UTC"})}catch(e){this.dateFormatter=void 0}},handleSwipe:function(e){var t=e.evt,a=o()(e,["evt"]);!1===this.dragging&&(a.duration>=30&&!1===this.ignoreNextSwipe?"right"===a.direction?this.calendarPrev():"left"===a.direction&&this.calendarNext():this.ignoreNextSwipe=!1),Object(f["j"])(t)},onDragEnter:function(e,t){Object(f["g"])(e)},onDragStart:function(e,t){this.dragging=!0,this.draggedEvent=t,Object(f["i"])(e)},onDragEnd:function(e,t){Object(f["j"])(e),this.resetDrag()},onDragOver:function(e,t,a){return"day"===a?(Object(f["j"])(e),this.draggedEvent.date!==t.date):"interval"===a?(Object(f["j"])(e),this.draggedEvent.date!==t.date&&this.draggedEvent.time!==t.time):void 0},onDrop:function(e,t,a){e.preventDefault(),e.stopPropagation(),"day"===a?(this.draggedEvent.date=t.date,this.draggedEvent.side=void 0):"interval"===a&&(this.draggedEvent.date=t.date,this.draggedEvent.time=t.time,this.draggedEvent.side=void 0)},resetDrag:function(){this.draggedEvent=void 0,this.dragging=!1,p["a"].is.desktop&&(this.ignoreNextSwipe=!0)}}},w=_,D=(a("7f83"),a("2877")),k=Object(D["a"])(w,n,r,!1,null,null,null);t["default"]=k.exports}}]);