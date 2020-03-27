import React, { Component } from "react";
import './styles.css';
interface RatingBarProps {
  max: number;
  ratingValue: number;
}

interface IRatingUnit {
  value: number;
  active: boolean;
}

interface RatingBarState {
  ratingUnits: IRatingUnit[];
  curRatingValue: number;
}

export class RatingBar extends Component<RatingBarProps, RatingBarState> {

  constructor(props: RatingBarProps) {
    super(props);
    const ratingUnits = this.calculate(props.max, props.ratingValue);
    this.state = {
      ratingUnits,
      curRatingValue: props.ratingValue
    };
  }
  reset = () => {
    const ratingUnits = this.calculate(this.props.max, this.state.curRatingValue);
    this.setState({
      ratingUnits
    });
  }

  select(index: number) {
    const ratingValue = index + 1;
    const ratingUnits = this.state.ratingUnits.map((item, idx) => {
      return {
        ...item,
        active: item.active = idx <= index
      };
    });
    this.setState({
      ratingUnits,
      curRatingValue: ratingValue
    });
  }
  enter(index: number) {
    const ratingUnits = this.state.ratingUnits.map((item, idx) => {
      return {
        ...item,
        active: item.active = idx <= index
      };
    });
    this.setState({
      ratingUnits
    });
  }
  render() {
    return (
      <>
        <h2>Rating Bar</h2>
        <div className="rating-bar" onMouseLeave={this.reset}>
          {
            this.state.ratingUnits.map((item, index) => (
              <div key={item.value} className={`rating-unit ${item.active ? 'active' : ''}`}
                onClick={() => this.select(index)} onMouseEnter={() => this.enter(index)}>
                { item.value }
              </div>
            ))
          }
        </div>
      </>
    );
  }
  calculate(max: number, ratingValue: number) {
    return Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }
}
