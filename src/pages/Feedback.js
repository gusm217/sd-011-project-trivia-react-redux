import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.handleAssertions = this.handleAssertions.bind(this);
  }

  handleAssertions(assertions) {
    const THREE = 3;
    if (assertions < THREE) {
      return 'Podia ser melhor...';
    }
    if (assertions >= THREE) {
      return 'Mandou bem!';
    }
  }

  render() {
    const notRedux = JSON.parse(localStorage.getItem('state'));
    const { score, assertions } = notRedux.player;
    localStorage.setItem('state', JSON.stringify(notRedux));
    return (
      <div>
        <Header />
        <div>
          <h2 data-testid="feedback-text">{ this.handleAssertions(assertions) }</h2>
          <h3 data-testid="feedback-total-score">{ score }</h3>
          <h3 data-testid="feedback-total-question">
            { assertions }
          </h3>
        </div>
        <Link to="/">
          <button
            data-testid="btn-play-again"
            type="button"
          >
            Jogar Novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button
            data-testid="btn-ranking"
            type="button"
          >
            Ver Ranking
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.triviaReducer.trivia.results,
});

Feedback.propTypes = {
  results: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Feedback);
