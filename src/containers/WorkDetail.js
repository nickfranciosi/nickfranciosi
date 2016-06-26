import React, { PropTypes } from 'react';

const WorkDetail = ({params}) => {
  return (
    <div>
      Show work for {params.title}
    </div>
  );
};

WorkDetail.propTypes = {
  params: PropTypes.object.isRequired
};

export default WorkDetail;
