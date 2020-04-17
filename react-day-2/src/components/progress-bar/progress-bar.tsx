import React, { Component } from 'react';
import './styles.css';
interface ProgressBarProps {
  backgroundColor?: string;
  progressColor?: string;
  width?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = function (props) {
  return React.createElement(
    'div',
    {
      className: 'progress-bar-container',
      style: {
        backgroundColor: props.backgroundColor,
      },
    },
    React.createElement('div', {
      className: 'progress',
      style: {
        backgroundColor: props.progressColor,
        width: props.width + '%',
      },
    })
  );
};

const defaultProps: ProgressBarProps = {
  backgroundColor: '#d9d9d9',
  progressColor: '#4caf50',
  width: 0,
};

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;

export class ProgressBarComponent extends Component<ProgressBarProps> {
  static defaultProps: ProgressBarProps = {
    backgroundColor: '#d9d9d9',
    progressColor: '#4caf50',
    width: 50,
  };
  render() {
    const { backgroundColor, progressColor, width } = this.props;
    return (
      <div
        className='progress-bar-container'
        style={{
          backgroundColor,
        }}
      >
        <div
          className='progress'
          style={{
            backgroundColor: progressColor,
            width: width + '%',
          }}
        ></div>
      </div>
    );
  }
}
