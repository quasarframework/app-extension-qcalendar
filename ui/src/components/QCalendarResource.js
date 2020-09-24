// Mixins
import CalendarIntervals from '../mixins/calendar-intervals.js'

// Util
import props from '../utils/props'
import { convertToUnit } from '../utils/helpers.js'

/* @vue/component */
export default {
  name: 'QCalendarResource',

  mixins: [
    CalendarIntervals
  ],

  props: {
    ...props.intervals,
    ...props.resource,
    direction: {
      type: String,
      default: 'next'
    }
  },

  data () {
    return {
      minWidth: '100px',
      scrollWidth: '0'
    }
  },

  computed: {
    parsedResourceHeight () {
      const height = parseFloat(this.resourceHeight)
      if (height === 0) {
        return 'auto'
      }
      return height
    },

    parsedResourceWidth () {
      return parseFloat(this.resourceWidth)
    },

    parsedIntervalHeight () {
      const height = parseFloat(this.intervalHeight)
      if (height === 0) {
        return 'auto'
      }
      return height
    }
  },

  methods: {
    __getParentWidth () {
      if (this.$parent && this.$parent.$el) {
        return this.$parent.$el.getBoundingClientRect().width + 15
      }
    },

    __renderHeadIntervals (h) {
      return h('div', {
        staticClass: 'q-calendar-resource__head-intervals'
      }, [
        this.intervals.map(intervals => intervals.map((interval, index) => this.__renderHeadInterval(h, interval, index)))
      ])
    },

    __renderHeadInterval (h, interval, index) {
      let colors = new Map(), color, backgroundColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'colorIntervalBody'
        backgroundColor = 'backgroundIntervalBody'
        colors = this.getThemeColors([color, backgroundColor])
        updateColors = this.setBothColors
      }

      const width = convertToUnit(this.parsedIntervalWidth)
      const height = convertToUnit(this.parsedIntervalHeight)
      const slot = this.$scopedSlots['interval-label']
      const short = this.shortIntervalLabel
      const label = this.intervalFormatter(interval, short)
      const scope = {
        interval,
        index,
        label
      }
      return slot ? slot(scope) : h('div', updateColors(colors.get(color), colors.get(backgroundColor), {
        staticClass: 'q-calendar-resource__head-label',
        style: {
          maxWidth: width,
          minWidth: width,
          height
        }
      }), label)
    },

    __renderBody (h) {
      return h('div', {
        staticClass: 'q-calendar-resource__body'
      }, [
        this.__renderScrollArea(h)
      ])
    },

    __renderScrollArea (h) {
      return h('div', {
        ref: 'scrollArea',
        staticClass: 'q-calendar-resource__scroll-area'
      }, [
        this.__renderDayContainer(h)
      ])
    },

    __renderHead (h) {
      return h('div', {
        staticClass: 'q-calendar-resource__head' + (this.sticky === true ? ' q-calendar__sticky' : '')
      }, [
        this.__renderHeadResource(h),
        this.__renderHeadIntervals(h)
      ])
    },

    __renderHeadResource (h) {
      const slot = this.$scopedSlots['resource-header']
      const width = convertToUnit(this.parsedResourceWidth)
      const height = convertToUnit(this.parsedIntervalHeight)

      let colors = new Map(), color, backgroundColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'colorResourceText'
        backgroundColor = 'backgroundResourceText'
        colors = this.getThemeColors([color, backgroundColor])
        updateColors = this.setBothColors
      }

      const intervals = this.intervals

      return h('div', updateColors(colors.get(color), colors.get(backgroundColor), {
        staticClass: 'q-calendar-resource__head-resource' + (this.sticky === true ? ' q-calendar__sticky' : ''),
        style: {
          maxWidth: width,
          minWidth: width,
          height
        }
      }), [
        slot && slot({ date: this.value, intervals })
      ])
    },

    __renderDayContainer (h) {
      const component = h('div', {
        staticClass: 'q-calendar-resource__day-container'
      }, [
        this.__renderHead(h),
        this.resources === void 0 && this.__renderResourcesError(h),
        this.resources !== void 0 && this.__renderBodyResources(h)
      ])

      if (this.animated === true) {
        const transition = 'q-transition--' + (this.direction === 'prev' ? this.transitionPrev : this.transitionNext)
        return h('transition', {
          props: {
            name: transition,
            appear: true
          }
        }, [
          component
        ])
      }
      return component
    },

    __renderBodyResources (h) {
      let colors = new Map(), color, backgroundColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'colorResourceBody'
        backgroundColor = 'backgroundResourceBody'
        colors = this.getThemeColors([color, backgroundColor])
        updateColors = this.setBothColors
      }

      const data = {
        staticClass: 'q-calendar-resource__resources-body'
      }

      return h('div', updateColors(colors.get(color), colors.get(backgroundColor), data), this.__renderResourceLabels(h))
    },

    __renderResourceLabels (h) {
      return this.resources.map((resource, idx) => this.__renderResouceRow(h, resource, idx))
    },

    __renderResouceRow (h, resource, idx) {
      const slot = this.$scopedSlots['resource-row']
      return h('div', {
        staticClass: 'q-calendar-resource__resource-row'
      }, [
        this.__renderResourceLabel(h, resource, idx),
        this.__renderResourceIntervals(h, resource),
        slot && slot({ resource, index: idx })
      ])
    },

    __renderResourceLabel (h, resource, idx) {
      const slot = this.$scopedSlots['resource-label']
      const scope = {
        resource: resource,
        index: idx
      }
      const width = convertToUnit(this.parsedResourceWidth)
      const height = convertToUnit(this.parsedResourceHeight)

      let colors = new Map(), color, backgroundColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'colorResourceText'
        backgroundColor = 'backgroundResourceText'
        colors = this.getThemeColors([color, backgroundColor])
        updateColors = this.setBothColors
      }

      return h('div', updateColors(colors.get(color), colors.get(backgroundColor), {
        key: resource.label,
        staticClass: 'q-calendar-resource__resource' + (this.sticky === true ? ' q-calendar__sticky' : ''),
        style: {
          maxWidth: width,
          minWidth: width,
          height
        },
        on: this.getDefaultMouseEventHandlers(':resource', event => {
          return { scope, event }
        })
      }), [
        slot ? slot(scope) : this.__renderResourceText(h, resource)
      ])
    },

    __renderResourceText (h, resource) {
      const label = resource.label

      return h('div', {
        staticClass: 'q-calendar-resource__resource-text'
      }, label)
    },

    __renderResourceIntervals (h, resource) {
      const slot = this.$scopedSlots['resource-intervals']
      const timeStartPosX = this.timeStartPosX,
        timeDurationWidth = this.timeDurationWidth,
        intervals = this.intervals,
        mouseEventsHolders = this.getDefaultMouseEventHandlers(':resource:intervals', event => {
          const scope = {
            resource: resource
          }
          return { scope, event }
        })
      return h('div', {
        staticClass: 'q-calendar-resource__resource-intervals',
        on: mouseEventsHolders
      }, [
        this.intervals.map(intervals => intervals.map(interval => this.__renderResourceInterval(h, resource, interval))),
        slot && slot({ resource, intervals, timeStartPosX, timeDurationWidth })
      ])
    },

    // interval related to resource
    __renderResourceInterval (h, resource, interval) {
      // called for each interval
      const slot = this.$scopedSlots['resource-interval']
      const width = convertToUnit(this.parsedIntervalWidth)
      const height = convertToUnit(this.parsedResourceHeight)
      let dragOver
      return h('div', {
        key: resource[this.resourceKey] + '-' + interval.time,
        staticClass: 'q-calendar-resource__resource-interval',
        class: {
          'q-calendar-scheduler__resource_interval--droppable': dragOver
        },
        style: {
          maxWidth: width,
          minWidth: width,
          height
        },
        domProps: {
          ondragover: (_event) => {
            if (this.dragOverFunc !== void 0) {
              dragOver = this.dragOverFunc(_event, resource, 'resource', interval)
            }
          },
          ondrop: (_event) => {
            if (this.dropFunc !== void 0) {
              this.dropFunc(_event, resource, 'resource', interval)
            }
          }
        },
        on: this.getDefaultMouseEventHandlers(':resource:interval', event => {
          const scope = {
            interval: interval,
            resource: resource
          }
          return { scope, event }
        })
      }, [
        slot && slot({ resource, interval })
      ])
    },

    __renderResourcesError (h) {
      return h('div', {}, 'No resources have been defined')
    }
  },

  render (h) {
    const maxWidth = convertToUnit(this.__getParentWidth())
    return h('div', {
      staticClass: 'q-calendar-resource',
      style: {
        maxWidth: maxWidth
      }
    }, [
      this.__renderBody(h)
    ])
  }
}
