(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22ccb0"],{f56a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"template",label:"Template"}}),a("q-tab",{attrs:{name:"script",label:"Script"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"template"}},[a("q-markdown",{attrs:{src:t.template}})],1),a("q-tab-panel",{attrs:{name:"script"}},[a("q-markdown",{attrs:{src:t.script}})],1)],1)],1)],1),a("q-separator"),a("q-toolbar",[a("q-btn",{attrs:{stretch:"",flat:"",label:"Prev"},on:{click:t.prev}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{stretch:"",flat:"",label:"Next"},on:{click:t.next}}),a("q-space")],1),a("q-separator"),a("q-calendar",{staticStyle:{height:"400px"},attrs:{"column-header-after":!0,"column-count":t.columnCount,"column-index-start":t.columnIndexStart,view:"day",locale:"en-us"},scopedSlots:t._u([{key:"columnHeaderAfter",fn:function(e){return[a("div",{staticClass:"q-ma-xs"},[0===e.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar1.jpg"}})])],1),a("q-item-section",[a("q-item-label",[t._v("Mary")]),a("q-item-label",{attrs:{caption:""}},[t._v("Content Writer")])],1)],1):t._e(),1===e.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar2.jpg"}})])],1),a("q-item-section",[a("q-item-label",[t._v("Jessica")]),a("q-item-label",{attrs:{caption:""}},[t._v("Designer")])],1)],1):t._e(),2===e.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar4.jpg"}})])],1),a("q-item-section",[a("q-item-label",[t._v("Scott")]),a("q-item-label",{attrs:{caption:""}},[t._v("Software Developer")])],1)],1):t._e(),3===e.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar3.jpg"}})])],1),a("q-item-section",[a("q-item-label",[t._v("Elaine")]),a("q-item-label",{attrs:{caption:""}},[t._v("Support Engineer")])],1)],1):t._e(),4===e.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar5.jpg"}})])],1),a("q-item-section",[a("q-item-label",[t._v("Carol")]),a("q-item-label",{attrs:{caption:""}},[t._v("Content Analyst")])],1)],1):t._e(),5===e.index?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{round:"",size:"42px"}},[a("img",{attrs:{src:"https://cdn.quasar-framework.org/img/avatar6.jpg"}})])],1),a("q-item-section",[a("q-item-label",[t._v("Heather")]),a("q-item-label",{attrs:{caption:""}},[t._v("Team Lead")])],1)],1):t._e()],1)]}}]),model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}})],1)},i=[],r='```\n<template>\n  <div>\n    <q-toolbar>\n      <q-btn stretch flat label="Prev" @click="prev" />\n      <q-separator vertical />\n      <q-btn stretch flat label="Next" @click="next" />\n      <q-space />\n    </q-toolbar>\n    <q-separator />\n    <q-calendar\n      v-model="selectedDate"\n      :column-header-after="true"\n      :column-count="columnCount"\n      :column-index-start="columnIndexStart"\n      view="day"\n      locale="en-us"\n      style="height: 400px;"\n    >\n      <template #columnHeaderAfter="day">\n        <div class="q-ma-xs">\n          <q-item v-if="day.index === 0" clickable v-ripple>\n            <q-item-section side>\n              <q-avatar round size="42px">\n                <img src="https://cdn.quasar-framework.org/img/avatar1.jpg" />\n              </q-avatar>\n            </q-item-section>\n            <q-item-section>\n              <q-item-label>Mary</q-item-label>\n              <q-item-label caption>Content Writer</q-item-label>\n            </q-item-section>\n          </q-item>\n          <q-item v-if="day.index === 1" clickable v-ripple>\n            <q-item-section side>\n              <q-avatar round size="42px">\n                <img src="https://cdn.quasar-framework.org/img/avatar2.jpg" />\n              </q-avatar>\n            </q-item-section>\n            <q-item-section>\n              <q-item-label>Jessica</q-item-label>\n              <q-item-label caption>Designer</q-item-label>\n            </q-item-section>\n          </q-item>\n          <q-item v-if="day.index === 2" clickable v-ripple>\n            <q-item-section side>\n              <q-avatar round size="42px">\n                <img src="https://cdn.quasar-framework.org/img/avatar4.jpg" />\n              </q-avatar>\n            </q-item-section>\n            <q-item-section>\n              <q-item-label>Scott</q-item-label>\n              <q-item-label caption>Software Developer</q-item-label>\n            </q-item-section>\n          </q-item>\n\n          <q-item v-if="day.index === 3" clickable v-ripple>\n            <q-item-section side>\n              <q-avatar round size="42px">\n                <img src="https://cdn.quasar-framework.org/img/avatar3.jpg" />\n              </q-avatar>\n            </q-item-section>\n            <q-item-section>\n              <q-item-label>Elaine</q-item-label>\n              <q-item-label caption>Support Engineer</q-item-label>\n            </q-item-section>\n          </q-item>\n          <q-item v-if="day.index === 4" clickable v-ripple>\n            <q-item-section side>\n              <q-avatar round size="42px">\n                <img src="https://cdn.quasar-framework.org/img/avatar5.jpg" />\n              </q-avatar>\n            </q-item-section>\n            <q-item-section>\n              <q-item-label>Carol</q-item-label>\n              <q-item-label caption>Content Analyst</q-item-label>\n            </q-item-section>\n          </q-item>\n          <q-item v-if="day.index === 5" clickable v-ripple>\n            <q-item-section side>\n              <q-avatar round size="42px">\n                <img src="https://cdn.quasar-framework.org/img/avatar6.jpg" />\n              </q-avatar>\n            </q-item-section>\n            <q-item-section>\n              <q-item-label>Heather</q-item-label>\n              <q-item-label caption>Team Lead</q-item-label>\n            </q-item-section>\n          </q-item>\n        </div>\n      </template>\n    </q-calendar>\n  </div>\n</template>\n```',s="```\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '2019-04-01',\n      columnCount: 3,\n      totalPages: 2,\n      currentPage: 0\n    }\n  },\n  computed: {\n    columnIndexStart () {\n      return this.currentPage * this.columnCount\n    }\n  },\n  methods: {\n    next () {\n      if (this.currentPage + 1 === this.totalPages) return\n      ++this.currentPage\n    },\n    prev () {\n      if (this.currentPage === 0) return\n      --this.currentPage\n    }\n  }\n}\n<\/script>\n```",l={data:function(){return{tab:"template",page:1,template:r,script:s,selectedDate:"2019-04-01",columnCount:3,totalPages:2,currentPage:0}},computed:{columnIndexStart:function(){return this.currentPage*this.columnCount}},methods:{next:function(){this.currentPage+1!==this.totalPages&&++this.currentPage},prev:function(){0!==this.currentPage&&--this.currentPage}}},c=l,m=a("2877"),o=Object(m["a"])(c,n,i,!1,null,null,null);e["default"]=o.exports}}]);