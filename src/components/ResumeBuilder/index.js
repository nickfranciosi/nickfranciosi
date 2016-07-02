import React from 'react';

const ResumeBuilder = () => {
  return (
    <div className="resume">
      <div className="header">
        <h2>Nick Franciosi</h2>
        <div className="personal-info">
          <a href="http://nickfranciosi.com">nickfranciosi.com</a>
          <a href="tel:2488541400">(248-854-1400)</a>
          <a href="mailto:nickfranciosi@gmail.com">nickfranciosi@gmail.com</a>
        </div>
      </div>
      <div className="mission-statement">
        <h3>Mission</h3>
        <p>Deliver elegant digital solutions to users of the web. The tech involved doesn't matter as long as I am challenged and solving problems.</p>
      </div>
      <div classNaem="skills">
        <h3>Skills</h3>
        <ul>
          <li>Javascript</li>
          <li>PHP</li>
          <li>CSS/SASS</li>
          <li>Git</li>
          <li>Node</li>
          <li>Laravel</li>
          <li>React</li>
          <li>Angular</li>
          <li>Wordpress</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Webpack</li>
          <li>Gulp</li>
        </ul>
      </div>
      <div className="experiences">
        <h3>Experience</h3>
        <div className="experience">
          <h4>August 2013 - Present</h4>
          <h4>GS&F - Full Service Agency</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi vitae totam incidunt nesciunt id expedita, illum accusamus itaque, commodi quos fugit in veritatis necessitatibus. Quae culpa ipsam cumque illo dolorum!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi consectetur, nihil provident quaerat modi praesentium laboriosam. Facilis quam deleniti consectetur unde odio, ipsam tenetur blanditiis beatae commodi eos ratione.</li>
          </ul>
        </div>
      </div>
      <div className="education">
        <h3>Education</h3>
        <div>
          <h4>BA in Entertainment Industry Studies</h4>
          <h4>Belmont Univerity</h4>
        </div>
      </div>
    </div>

  );
};

export default ResumeBuilder;
