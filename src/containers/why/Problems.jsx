import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import colors from '../../styles/colors';

class Problems extends Component {

  render() {
    return (
      <div className="problems">
        {/* 2.1 */}
        <Heading 
          align='center' 
 	 	 	 	 	margin='large'
          tag='h1'
          style={{color: colors.logoBlue}}
        >
          Problems
        </Heading>
        <p className='paragraph-gray'>
          The hotel booking industry is fragmented with no fewer than five different
          groups working for commission between travelers and hotels. Problems include:
        </p>
        {this.props.children}
      </div>
    );
  }

}

export default Problems;
