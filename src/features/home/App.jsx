import React from 'react';
import Title from './Title';
import Nav from './Nav';
import Section from './Section';
import { navItems, getSectionContent } from './SectionContents';
import DomDelayedUpdate from '../../common/components/DomDelayedUpdate';

const showSectionClass = 'showSectionClass';

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
      <div>
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
