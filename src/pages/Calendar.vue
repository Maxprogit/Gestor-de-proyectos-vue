<template>
  <div>
<!-- Three HTML5 draggable events. -->
<div class="external-event"
     v-for="(item, i) in draggables"
     :key="i"
     draggable="true"
     @dragstart="onEventDragStart($event, item)">
     <strong>{{ item.title }}</strong>
     ({{ item.duration ? `${item.duration} min` : 'no duration' }})
  <div>{{ item.content }}</div>
</div>

<vue-cal small
         hide-view-selector
         hide-weekends
         :disable-views="['years', 'year', 'month', 'day']"
         :time-from="9 * 60"
         :time-to="16 * 60"
         editable-events
         @event-drop="onEventDrop">
</vue-cal>
</div>

</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
  components: {
    VueCal
  },
  data() {
    return {
      draggables: [
      {
        // The id (or however you name it), will help you find which event to delete
        // from the callback triggered on drop into Vue Cal.
        id: 1,
        title: 'Ext. Event 1',
        content: 'content 1',
        duration: 60
      },
      {
        id: 2,
        title: 'Ext. Event 2',
        content: 'content 2',
        duration: 30
      },
      {
        id: 3,
        title: 'Ext. Event 3',
        content: 'content 3'
        // No defined duration here: will default to 2 hours.
      }
    ]
  };
},
methods: {
  onEventDragStart (e, draggable) {
      // Passing the event's data to Vue Cal through the DataTransfer object.
      e.dataTransfer.setData('event', JSON.stringify(draggable))
      e.dataTransfer.setData('cursor-grab-at', e.offsetY)
    },
    // The 3 parameters are destructured from the passed $event in @event-drop="onEventDrop".
    // `event` is the final event as Vue Cal understands it.
    // `originalEvent` is the event that was dragged into Vue Cal, it can come from the same
    //  Vue Cal instance, another one, or an external source.
    // `external` is a boolean that lets you know if the event is not coming from any Vue Cal.
    onEventDrop ({ event, originalEvent, external }) {
      // If the event is external, delete it from the data source on drop into Vue Cal.
      // If the event comes from another Vue Cal instance, it will be deleted automatically in there.
      if (external) {
        const extEventToDeletePos = this.draggables.findIndex(item => item.id === originalEvent.id)
        if (extEventToDeletePos > -1) this.draggables.splice(extEventToDeletePos, 1)
      }
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
