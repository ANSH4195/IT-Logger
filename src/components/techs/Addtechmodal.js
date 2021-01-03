import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { addTech } from '../../actions/techActions';

const Addtechmodal = ({ addTech }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({
        html: 'Please fill all fields',
        classes: 'rounded red',
      });
    } else {
      addTech({
        firstname,
        lastname,
      });

      M.toast({
        html: `${firstname} ${lastname} was added as a Tech!`,
        classes: 'rounded purple accent-4',
      });

      // Clear
      setFirstname('');
      setLastname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal black white-text' style={style}>
      <div className='modal-content'>
        <h4 className='center'>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstname'
              value={firstname}
              className='white-text'
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor='firstname' className='active white-text'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastname'
              value={lastname}
              className='white-text'
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor='lastname' className='active white-text'>
              Last Name
            </label>
          </div>
        </div>

        <div className='modal-footer black'>
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
  );
};

Addtechmodal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

const style = {
  border: 'white 1px solid',
};

export default connect(null, { addTech })(Addtechmodal);
