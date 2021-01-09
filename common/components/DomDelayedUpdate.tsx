import React from "react";

type Props = {
  mountClass: string;
  mountDelay: number;
  shouldUpdate: boolean;
  shouldUpdateWithMountClass: boolean;
  updateClass: string;
  updateDelay: number;
  children: React.ReactNode;
};

class DomDelayedUpdate extends React.Component<Props> {
  static defaultProps = {
    mountClass: "default",
    mountDelay: 0,
    shouldUpdate: false,
    updateClass: "default",
    updateDelay: 200,
  };

  componentDom!: HTMLDivElement;

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
    this.componentDom.className = resetToEmptyClass
      ? ""
      : this.props.mountClass;
  }

  render() {
    const { children } = this.props;

    return (
      <div
        ref={(component) => {
          this.componentDom = component;
        }}
      >
        {children}
      </div>
    );
  }
}

export default DomDelayedUpdate;
