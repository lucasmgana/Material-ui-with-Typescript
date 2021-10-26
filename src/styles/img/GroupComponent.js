/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const GroupComponent = ({ svgRef, ...props }) => (
  <svg {...props} width={300} height={102} viewBox="0 0 300 102" ref={svgRef}>
    <defs>
      <style>{".a{fill:#fff;}.b{fill:url(#a);}"}</style>
      <pattern
        id="a"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 424 143"
      >
        <image width={424} height={143} xlinkHref="ComponentTMP_0-image.png" />
      </pattern>
    </defs>
    <g transform="translate(-1335.086 0.202)">
      <rect
        className="a"
        width={300}
        height={102}
        rx={9}
        transform="translate(1335.086 -0.202)"
      />
      <rect
        className="b"
        width={178}
        height={60}
        rx={13}
        transform="translate(1395.086 15.798)"
      />
    </g>
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <GroupComponent svgRef={ref} {...props} />
));
export default ForwardRef;
