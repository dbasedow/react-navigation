import React from 'react';

export default class SwitchView extends React.Component {
  render() {
    const { state } = this.props.navigation;
    const activeKey = state.routes[state.index].key;
    const descriptor = this.props.descriptors[activeKey];
    const ChildComponent = descriptor.getComponent();

    return (
      <ChildComponent
        navigation={descriptor.navigation}
        screenProps={this.props.screenProps}
      />
    );
  }
}
