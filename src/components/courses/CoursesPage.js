import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  }; // be specific. pass only data your componenent to prevent unnecessary rerenders
}

// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse,
// };

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch), // bind each action with dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // connect pass automatically a dispatch in if mapDispatchToProps is omitted
