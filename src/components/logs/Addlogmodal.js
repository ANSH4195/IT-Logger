import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import Techselect from '../techs/Techselect';

import { addLog } from '../../actions/logActions';

const Addlogmodal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Please fill all fields',
        classes: 'rounded red',
      });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({
        html: `<strong>Log added by ${tech}</strong>`,
        classes: 'rounded purple accent-4',
      });

      // Clear
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal black white-text' style={style}>
      <div className='modal-content'>
        <h4 className='center'>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              className='white-text'
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active white-text'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default black white-text'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <Techselect />
            </select>
          </div>
        </div>

        <div className='row center'>
          <div className='col s6'>
            <div className='input-field'>
              <p>
                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    checked={attention}
                    value={attention}
                    onChange={(e) => setAttention(!attention)}
                  />
                  <span>Needs Attention</span>
                </label>
              </p>
            </div>
          </div>
          <div className='col s6'>
            <a
              href='#!'
              onClick={onSubmit}
              className='modal-close btn-flat purple accent-4 white-text'
            >
              Enter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Addlogmodal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const style = {
  width: '75%',
  height: '75%',
  border: 'white 1px solid',
};

export default connect(null, { addLog })(Addlogmodal);
