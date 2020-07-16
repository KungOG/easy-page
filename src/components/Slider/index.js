import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledSlider from "./style";
import { ProjectCard } from "../ProjectCard";

const Slider = ({ children, bullets }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <>
      <StyledSlider currentSlide={activeSlide - 1}>
        {children.map((item, key) => {
          return (
            <ProjectCard
              key={item.id}
              projectImage={item.projectImage}
              projectName={item.projectName}
              projectContent={item.projectContent}
              projectLink={item.projectLink}
              projectTag={item.projectTag}
              active={activeSlide - 1 === key}
            />
          );
        })}
      </StyledSlider>
      {bullets && (
        <StyledSlider.Bullets>
          {children.map((child, key) => {
            return (
              <StyledSlider.Bullet
                key={key}
                currentSlide={activeSlide - 1 === key}
                onClick={() => setActiveSlide(key + 1)}
              />
            );
          })}
        </StyledSlider.Bullets>
      )}
    </>
  );
};

Slider.propTypes = {
  bullets: PropTypes.bool,
  children: PropTypes.array,
};

export { Slider };
