import React from 'react';
import { style } from 'glamor';
import Title from './Title';
import Nav from './Nav';
import Section from './Section';
import { navItems, getSectionContent } from './SectionContents';
import DomDelayedUpdate from '../../common/components/DomDelayedUpdate';

const showSectionClass = 'showSectionClass';
const styles = {
  root: style({
    fontFamily: '"Open Sans", sans-serif',
  }),
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: -1,
    };
  }

  changeSection(newSection) {
    if (newSection !== -1) {
      this.resetSection.reset(true);
    }

    this.setState({
      activeSection: newSection,
    });
  }

  render() {
    const { activeSection } = this.state;

    return (
      <div className={styles.root}>
        <Title />
        <Nav
          navItems={navItems}
          onNavItemClick={newSection => this.changeSection(newSection)}
          selectedItem={activeSection}
        />
        <DomDelayedUpdate
          mountClass={showSectionClass}
          shouldUpdateWithMountClass
          ref={(component) => { this.resetSection = component; }}
        >
          <Section
            parentClass={showSectionClass}
            content={getSectionContent(activeSection)}
          />
        </DomDelayedUpdate>
      </div>
    );
  }
}

export default App;
