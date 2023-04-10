import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";

function Timeline() {
  return (
    <div>
      <VerticalTimeline animate={true} lineColor={"black"}>
        <VerticalTimelineElement
          style={{ boxShadow: "none" }}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E79AA2", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date=""
          iconStyle={{
            background: "black",
            color: "#fff",
            boxShadow: "#E79AA2",
          }}
        >
          {/* <h3 className="vertical-timeline-element-title"> my info </h3> */}
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            Hi there, my name is Henrich Tanis and as you can see I am a
            software developer. I was raised in Miami, Florida so I was spoiled
            with great weather ever since I opened my eyes. I am the oldest of
            10 children that my mother and father have together so don't be
            alarmed if I refer to myself as a father of 9.{" "}
          </h4>
          {/* <p>
   my info about life
    </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E79AA2", color: "black" }}
          date=""
          iconStyle={{ background: "black", color: "#fff" }}
        >
          {/* <h3 className="vertical-timeline-element-title"> my info </h3> */}
          {/* <h4 className="vertical-timeline-element-subtitle"> Growing up , whenver there was a techical problem in the household I was the one everyone called upon to fix the issue so that is were my tech story begins. I remember when the first touch screen cell phone was introduced to society and my father brought one and did not know how to use it so I begin to learn and teach him </h4> */}
          <p>
            Growing up , whenver there was a techical problem in the household I
            was the one everyone called upon to fix the issue so that is were my
            tech story began and I embraced it. it felt rewarding fixing a
            probelm that everyone was struggling with, even if the fix was as
            simple as resetting the WIFI router. I began exploring on my own and
            fell in love with technology and in middle school I taught myself
            how to use torrents for my own fufillment. What I enjoyed the most
            was the challanges and realizing that learning a new skill is hard
            but that what makes it fun seeing the accomplishments and progress I
            have made.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E79AA2", color: "black" }}
          date=""
          iconStyle={{ background: "black", color: "#fff" }}
        >
          {/* <h3 className="vertical-timeline-element-title"> my info</h3> */}
          <h4 className="vertical-timeline-element-subtitle"> my info</h4>
          {/* <p>
    my info about life
    </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E79AA2", color: "black" }}
          date=""
          iconStyle={{ background: "black", color: "#E79AA2" }}
        >
          {/* <h3 className="vertical-timeline-element-title"> my info</h3> */}
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            Thank you for taking the time to read about me. I'm excited to
            connect with you and learn more about your projects and ideas.
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
