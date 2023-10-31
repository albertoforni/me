import React, { PropTypes } from 'react';

class DomDelayedUpdate extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.componentDom.classList.add(this.props.mountClass);
    }, this.props.mountDelay);
  }

  componentDidUpdate() {
    const {
      shouldUpdate,
      updateClass,
      updateDelay,
      shouldUpdateWithMountClass,
      mountClass,
    } = this.props;

    setTimeout(() => {
      if (shouldUpdate) {
        this.componentDom.classList.add(updateClass);
      } else if (shouldUpdateWithMountClass) {
        this.componentDom.className = mountClass;
      } else {
        this.componentDom.classList.remove(updateClass);
      }
    }, updateDelay);
  }

  reset(resetToEmptyClass) {
    this.componentDom.className = resetToEmptyClass ? '' : this.props.mountClass;
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={(component) => { this.componentDom = component; }}>
        {children}
      </div>
    );
  }
}

DomDelayedUpdate.propTypes = {
  mountClass: PropTypes.string,
  mountDelay: PropTypes.number,
  shouldUpdate: PropTypes.bool,
  shouldUpdateWithMountClass: PropTypes.bool,
  updateClass: PropTypes.string,
  updateDelay: PropTypes.number,
  children: PropTypes.node,
};

DomDelayedUpdate.defaultProps = {
  mountClass: 'default',
  mountDelay: 0,
  shouldUpdate: false,
  updateClass: 'default',
  updateDelay: 200,
};

export default DomDelayedUpdate;
