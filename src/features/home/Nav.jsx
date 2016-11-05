import React, { PropTypes } from 'react';
import { style, merge } from 'glamor';
import { List } from '../../common/style';
import NavItem from './NavItem';
import HamburgerMenu from './HamburgerMenu';
import Button from '../../common/components/Button';
import DomDelayedUpdate from '../../common/components/DomDelayedUpdate';

const prevButtonStyle = style({
  position: 'fixed',
  bottom: 10,
  left: 10,
  height: 40,
  width: 40,
  borderRadius: '50%',
  border: '1px solid black',
  background: 'white',
  outline: 0,
});

const styles = {
  menu: List.noStyle,
  prevButton: prevButtonStyle,
  nextButton: merge(prevButtonStyle, {
    left: 'auto',
    right: 10,
  }),
};

const animationClasses = {
  parentStartAnimation: 'parentStartAnimation',
  hideRoot: 'hideRoot',
  parentStopAnimation: 'parentStopAnimation',
};

const nextIndex = (items, currentIndex, onNavItemClick) => {
  const length = items.length;
  const nextItemIndex = currentIndex + 1;
  onNavItemClick(nextItemIndex >= length ? 0 : nextItemIndex);
};

const prevIndex = (items, currentIndex, onNavItemClick) => {
  const prevItemIndex = currentIndex - 1;

  onNavItemClick(prevItemIndex < 0 ? items.length - 1 : prevItemIndex);
};

class Nav extends React.Component {
  resetMenu() {
    this.DomDelayedUpdate.reset();
    this.props.onNavItemClick(-1);
  }

  render() {
    const { navItems, onNavItemClick, selectedItem } = this.props;
    return (
      <nav>
        <div>
          <Button
            onClick={() => prevIndex(navItems, selectedItem, onNavItemClick)}
            className={styles.prevButton.toString()}
          >{'<'}</Button>
          <Button
            onClick={() => nextIndex(navItems, selectedItem, onNavItemClick)}
            className={styles.nextButton.toString()}
          >{'>'}</Button>
        </div>
        <HamburgerMenu
          onClick={() => this.resetMenu()}
          show={selectedItem !== -1}
        />
        <DomDelayedUpdate
          mountClass={animationClasses.parentStartAnimation}
          mountDelay={150}
          shouldUpdate={this.props.selectedItem !== -1}
          updateClass={animationClasses.parentStopAnimation}
          ref={(component) => { this.DomDelayedUpdate = component; }}
        >
          <ul className={styles.menu} role="menubar">
            {
              navItems.map((navItem, index) =>
                <NavItem
                  {...navItem}
                  animationClasses={{
                    ...animationClasses,
                    hideRoot: selectedItem !== -1 && selectedItem !== index ? animationClasses.hideRoot : '',
                  }}
                  navIndex={index}
                  onNavItemClick={() => onNavItemClick(index)}
                  key={index}
                  disabled={selectedItem !== -1}
                />
              )
            }
          </ul>
        </DomDelayedUpdate>
      </nav>
    );
  }
}

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
  onNavItemClick: PropTypes.func,
  selectedItem: PropTypes.number,
};

export default Nav;
