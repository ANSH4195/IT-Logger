import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTechs } from '../../actions/techActions';

import Techitem from './Techitem';

const Techlistmodal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      id='tech-list-modal'
      className='modal black white-text'
      style={{ border: 'white 1px solid' }}
    >
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <Techitem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

Techlistmodal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(Techlistmodal);
