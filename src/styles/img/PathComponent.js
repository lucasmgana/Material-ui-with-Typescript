/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const PathComponent = ({ svgRef, ...props }) => (
  <svg
    {...props}
    width={43.542}
    height={39.313}
    viewBox="0 0 43.542 39.313"
    ref={svgRef}
  >
    <defs>
      <style>{".a{fill:#6c63ff;}"}</style>
    </defs>
    <path
      className="a"
      d="M580.882,450.727H549.289a5.981,5.981,0,0,1-5.975-5.974V417.389a5.981,5.981,0,0,1,5.975-5.974h31.593a5.981,5.981,0,0,1,5.975,5.974v27.363a5.981,5.981,0,0,1-5.975,5.975Z"
      transform="translate(-543.314 -411.414)"
    />
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <PathComponent svgRef={ref} {...props} />
));
export default ForwardRef;
