import { Component } from 'react';
import './simpleLink.css';

class SimpleLink extends Component {
  render() {
    const { className, href, linkText, target } = this.props;
    return (
      <a className={className} href={href} target={target}>
        {linkText}
      </a>
    );
  }
}

export default SimpleLink;
