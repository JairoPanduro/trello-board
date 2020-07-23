import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


const HomePage = ({ user }) => {
  if (user.token) {
    return (
      <Redirect to="/board" />
    )
  }

  return (<Redirect to="/login" />);
};


const mapStateToProps = (state) => ({
  user: state.user
});

export default compose(connect(mapStateToProps))(HomePage);
