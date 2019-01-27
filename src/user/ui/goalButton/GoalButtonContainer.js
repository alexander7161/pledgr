import { connect } from "react-redux";
import GoalButton from "./GoalButton";
import { createGoal } from "./GoalButtonActions";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginUserClick: event => {
      event.preventDefault();

      dispatch(createGoal());
    }
  };
};

const GoalButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoalButton);

export default GoalButtonContainer;
