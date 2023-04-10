import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'

function Timeline() {
  return (
    <div>
        <VerticalTimeline animate={ true } lineColor={ 'black' } >
  <VerticalTimelineElement style={{boxShadow:'none'}}
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#E79AA2', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date=""
    iconStyle={{ background: 'black', color: '#fff', boxShadow:"#E79AA2"}}
 
  >
    <h3 className="vertical-timeline-element-title"> my info </h3>
    <h4 className="vertical-timeline-element-subtitle"> my info </h4>
    <p>
   my info about life
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#E79AA2', color: 'black' }}
    date=""
    iconStyle={{ background: 'black', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title"> my info </h3>
    <h4 className="vertical-timeline-element-subtitle"> my info </h4>
    <p>
    my info about life
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#E79AA2', color: 'black' }}
    date=""
    iconStyle={{ background: 'black', color: '#fff' }}
 
  >
    <h3 className="vertical-timeline-element-title"> my info</h3>
    <h4 className="vertical-timeline-element-subtitle"> my info</h4>
    <p>
    my info about life
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#E79AA2', color: 'black' }}
    date=""
    iconStyle={{ background: 'black', color: '#E79AA2' }}
 
  >
    <h3 className="vertical-timeline-element-title"> my info</h3>
    <h4 className="vertical-timeline-element-subtitle"> my info</h4>
    <p>
    my info about life
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
      
    </div>
  )
}

export default Timeline
