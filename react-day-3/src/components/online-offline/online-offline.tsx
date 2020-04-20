import React from 'react';

type OnlineOfflineState = {
  status: 'online' | 'offline';
};

type OnlineOfflineProps = {
  status: 'online' | 'offline';
};
class OnlineOfflineComponent extends React.Component<OnlineOfflineProps> {
  render() {
    return <div>Your network status: {this.props.status}</div>;
  }
}

export function withNetworkStatus(Component: any) {
  return class OnlineOffline extends React.Component<{}, OnlineOfflineState> {
    state = {
      status: 'online' as 'online',
    };

    componentDidMount() {
      this.setState({
        status: navigator.onLine ? 'online' : 'offline',
      });

      window.addEventListener('online', this.updateOnlineStatus);
      window.addEventListener('offline', this.updateOnlineStatus);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.updateOnlineStatus);
      window.removeEventListener('offline', this.updateOnlineStatus);
    }

    updateOnlineStatus = (e: Event) => {
      console.log(e.type);
      this.setState({
        status: e.type === 'online' ? 'online' : 'offline',
      });
    };

    render() {
      return <Component status={this.state.status}></Component>;
    }
  };
}

export const OnlineOffline = withNetworkStatus(OnlineOfflineComponent);

// const ins = new Comp();
// ins.render()

// var listener = ins.updateOnlineStatus.bind(ins);

// listener()
