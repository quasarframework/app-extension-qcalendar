(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d2107f8"],{b7c0:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"template",label:"Template"}}),a("q-tab",{attrs:{name:"script",label:"Script"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"template"}},[a("q-markdown",{attrs:{src:e.template}})],1),a("q-tab-panel",{attrs:{name:"script"}},[a("q-markdown",{attrs:{src:e.script}})],1)],1)],1)],1),a("q-separator"),a("q-calendar",{staticStyle:{height:"400px"},attrs:{"column-header-after":!0,"column-count":3,view:"day",locale:"en-us"},scopedSlots:e._u([{key:"columnHeaderAfter",fn:function(t){return[a("div",{staticClass:"q-ma-xs"},[0===t.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar1.jpg"}})])],1),a("q-item-section",[a("q-item-label",[e._v("Mary")]),a("q-item-label",{attrs:{caption:""}},[e._v("Content Writer")])],1)],1):e._e(),1===t.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar2.jpg"}})])],1),a("q-item-section",[a("q-item-label",[e._v("Jessica")]),a("q-item-label",{attrs:{caption:""}},[e._v("Designer")])],1)],1):e._e(),2===t.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar4.jpg"}})])],1),a("q-item-section",[a("q-item-label",[e._v("Scott")]),a("q-item-label",{attrs:{caption:""}},[e._v("Software Developer")])],1)],1):e._e()],1)]}}]),model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)},n=[],r='```\n<template>\n  <q-calendar\n    v-model="selectedDate"\n    :column-header-after="true"\n    :column-count="3"\n    view="day"\n    locale="en-us"\n    style="height: 400px;"\n  >\n    <template #columnHeaderAfter="day">\n      <div class="q-ma-xs">\n        <q-item v-if="day.index === 0" clickable v-ripple>\n          <q-item-section side>\n            <q-avatar round size="42px">\n              <img src="https://cdn.quasar-framework.org/img/avatar1.jpg" />\n            </q-avatar>\n          </q-item-section>\n          <q-item-section>\n            <q-item-label>Mary</q-item-label>\n            <q-item-label caption>Content Writer</q-item-label>\n          </q-item-section>\n        </q-item>\n        <q-item v-if="day.index === 1" clickable v-ripple>\n          <q-item-section side>\n            <q-avatar round size="42px">\n              <img src="https://cdn.quasar-framework.org/img/avatar2.jpg" />\n            </q-avatar>\n          </q-item-section>\n          <q-item-section>\n            <q-item-label>Jessica</q-item-label>\n            <q-item-label caption>Designer</q-item-label>\n          </q-item-section>\n        </q-item>\n        <q-item v-if="day.index === 2" clickable v-ripple>\n          <q-item-section side>\n            <q-avatar round size="42px">\n              <img src="https://cdn.quasar-framework.org/img/avatar4.jpg" />\n            </q-avatar>\n          </q-item-section>\n          <q-item-section>\n            <q-item-label>Scott</q-item-label>\n            <q-item-label caption>Software Developer</q-item-label>\n          </q-item-section>\n        </q-item>\n      </div>\n    </template>\n  </q-calendar>\n</template>\n```',s="```\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '2019-04-01'\n    }\n  }\n}\n<\/script>\n```",l={data:function(){return{tab:"template",selectedDate:"2019-04-01",template:r,script:s}}},c=l,m=a("2877"),o=Object(m["a"])(c,i,n,!1,null,null,null);t["default"]=o.exports}}]);