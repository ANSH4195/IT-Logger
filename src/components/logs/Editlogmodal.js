import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import Techselect from '../techs/Techselect';

import { updateLog } from '../../actions/logActions';

const Editlogmodal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({
        html: 'Please fill all fields',
        classes: 'rounded purple accent-4',
      });
    } else {
      const updated = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };

      updateLog(updated);
      M.toast({
        html: `Log Updated by ${tech}`,
        classes: 'rounded purple accent-4',
      });

      // Clear
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal black white-text' style={style}>
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

const style = {
  width: '75%',
  height: '75%',
  border: 'white 1px solid',
};

Editlogmodal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(Editlogmodal);
