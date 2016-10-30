import React from 'react';
import Title from './Title';
import Nav from './Nav';
import Section from './Section';
import { navItems, getSectionContent } from './SectionContents';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: -1,
    };
  }

  changeSection(newSection) {
    this.setState({
      activeSection: newSection,
    });
  }

  render() {
    const { activeSection } = this.state;
    const displaySection = activeSection !== -1;

    return (
      <div>
        <Title />
        <Nav
          navItems={navItems}
          onNavItemClick={newSection => this.changeSection(newSection)}
          selectedItem={activeSection}
        />
        {
          displaySection ?
            <Section content={getSectionContent(activeSection)} /> :
            null
        }
      </div>
    );
  }
}

export default App;
