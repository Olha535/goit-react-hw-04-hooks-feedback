import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';

function Section({ title, children }) {
  return (
    <div>
      <Container>
        <h1>{title}</h1>
        {children}
      </Container>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
