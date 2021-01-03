import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteTech } from '../../actions/techActions';

const Techitem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({
      html: 'Tech deleted',
      classes: 'rounded red',
    });
  };

  return (
    <li className='collection-item black'>
      <div>
        {tech.firstname} {tech.lastname}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

Techitem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(Techitem);
