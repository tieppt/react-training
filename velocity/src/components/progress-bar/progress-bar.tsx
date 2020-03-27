import React from 'react';
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
      class: 'progress-bar-container',
      style: {
        backgroundColor: props.backgroundColor
      }
    },
    React.createElement('div', {
      class: 'progress',
      style: {
        backgroundColor: props.progressColor,
        width: props.width + '%'
      }
    })
  );
}

const defaultProps: ProgressBarProps = {
  backgroundColor: '#d9d9d9',
  progressColor: '#4caf50',
  width: 50,
}

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
