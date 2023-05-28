import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonLoader = (props: any):JSX.Element => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="120" rx="0" ry="0" width="1" height="0" /> 
    <rect x="26" y="156" rx="0" ry="0" width="9" height="0" /> 
    <circle cx="124" cy="124" r="124" /> 
    <rect x="0" y="280" rx="13" ry="13" width="255" height="32" /> 
    <rect x="0" y="341" rx="23" ry="23" width="251" height="57" /> 
    <rect x="0" y="429" rx="13" ry="13" width="125" height="31" /> 
    <rect x="153" y="429" rx="19" ry="19" width="97" height="32" />
  </ContentLoader>
)

