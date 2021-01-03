import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteLog, setCurrent } from '../../actions/logActions';

const Logitem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({
      html: 'Log Deleted',
      classes: 'rounded purple accent-4',
    });
  };

  return (
    <li className='collection-item black'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text text-lighten-2'
          }`}
          onClick={()=>setCurrent(log)}
        >
          <strong>{log.message}</strong>
        </a>
        <br />
        <span className='grey-text'>
          <span className='white-text'>ID #{log.id}</span> last updated by{' '}
          <span className='white-text'>
            <strong>{log.tech}</strong>
          </span>{' '}
          on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

Logitem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(Logitem);
