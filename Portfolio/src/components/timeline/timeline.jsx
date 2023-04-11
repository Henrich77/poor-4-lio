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
          {/* <h4 className="vertical-timeline-element-subtitle" style={{fontSize:"1.3rem"}}>
          </h4> */}
          <p style={{ fontSize: "1.3rem" }}>
            {" "}
            Hi there, my name is Henrich Tanis and as you can see I am a
            software developer. I was raised in Miami, Florida so I was spoiled
            with great weather ever since I opened my eyes. I am the oldest of
            10 children that my mother and father have together so don't be
            alarmed if I refer to myself as a father of 9.{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E79AA2", color: "black" }}
          date=""
          iconStyle={{ background: "black", color: "#fff" }}
        >
          {/* <h3 className="vertical-timeline-element-title"> my info </h3> */}
          {/* <h4 className="vertical-timeline-element-subtitle"> Growing up , whenver there was a techical problem in the household I was the one everyone called upon to fix the issue so that is were my tech story begins. I remember when the first touch screen cell phone was introduced to society and my father brought one and did not know how to use it so I begin to learn and teach him </h4> */}
          <p style={{ fontSize: "1.3rem" }}>
            Growing up , whenever there was a technical problem in the household I
            was the one everyone called upon to fix the issue so that is were my
            tech story began and I embraced it. It felt rewarding fixing a
            probelm that everyone was struggling with, even if the fix was as
            simple as resetting the WIFI router. I always enjoyed the the
            challanges of learning something new and that makes the
            accomplishments and progress I have made much sweeter.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E79AA2", color: "black" }}
          date=""
          iconStyle={{ background: "black", color: "#fff" }}
        >
          {/* <h3 className="vertical-timeline-element-title"> my info</h3> */}
          {/* <h4 style={{fontSize:"1.3rem"}} className="vertical-timeline-element-subtitle">   </h4> */}
          <p style={{ fontSize: "1.3rem" }}>
            I graduted highschool in 2018 from Miami Norland Senior High. After
            highschool I was not sure what path I wanted to take in life, I
            attended Broward Community College without a clear and set plan in
            mind. Several months later in the same year, I began to intern as an
            Accountant and learned Business, Taxes, and Real Estate. Now having
            acquired that knowledge I wanted to embark on the journey of
            learning software development and that is when I decided to take the
            challenge of going through the UCF Coding Bootcamp which focused on
            MERN stack. I graduated from the Bootcamp in march 2023.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E79AA2", color: "black" }}
          date=""
          iconStyle={{ background: "black", color: "#E79AA2" }}
        >
          {/* <h3 className="vertical-timeline-element-title"> my info</h3> */}
          {/* <h4 className="vertical-timeline-element-subtitle" style={{fontSize:"1.3rem"}}>
            
           
          </h4> */}
          <p style={{ fontSize: "1.3rem" }}>
            When I am not working you can catch me at the local gym exercising
            and playing basketball, I still believe that one of these days the
            Miami Heat will contact me to join their basketball team. I also
            love to eat so if you are a company running low on funds feel free
            to pay me in burgers.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#E79AA2", color: "black" }}
          date=""
          iconStyle={{ background: "black", color: "#fff" }}
        >
          {/* <h3 className="vertical-timeline-element-title"> my info</h3> */}
          {/* <h4 style={{fontSize:"1.3rem"}} className="vertical-timeline-element-subtitle"> Thank you for taking the time to get to know a little more about me, I am excited to connect with you.  </h4> */}
          <p style={{ fontSize: "1.3rem" }}>
            Thank you for taking the time to get to know a little more about me,
            I am excited to connect with you.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
