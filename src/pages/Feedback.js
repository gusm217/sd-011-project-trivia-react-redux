import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  render() {
    const { userName, scoreUser, gravatarImage } = this.props;
    return (
      <header>
        <img
          src={ gravatarImage }
          alt="player_image"
          data-testid="header-profile-picture"
        />
        <div data-testid="feedback-text">Feedback</div>
        <div data-testid="header-player-name">{ userName }</div>
        <div data-testid="header-score">{ scoreUser }</div>
        <Link to="/">
          <button
            type="button"
            data-testid="btn-play-again"
          >
            Jogar Novamente
          </button>
        </Link>
        <Link to="/Ranking">
          <button
            type="button"
            data-testid="btn-ranking"
          >
            Ver Ranking
          </button>
        </Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.userReducer.name,
  scoreUser: state.questions.score,
  gravatarImage: state.userReducer.img,
});

Feedback.propTypes = ({
  userName: PropTypes.func,
  scoreUser: PropTypes.func,
  gravatarImage: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, null)(Feedback);
