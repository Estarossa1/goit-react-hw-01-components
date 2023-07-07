import css from './Footer.module.css';
import PropTypes from 'prop-types';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <p>
        © 2023 Components. All rights reserved. <br />
        Created by Estar0ssa1
      </p>
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};
