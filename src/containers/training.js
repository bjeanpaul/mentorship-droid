import { connect } from 'react-redux';

import { TrainingList } from '../components/training';

const mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.training.isLoading,
    modules: state.training.modules,
  };
};

export const TrainingListContainer = connect(
  mapStateToProps
  //mapDispatchToProps // TODO: Add loading
)(TrainingList);
