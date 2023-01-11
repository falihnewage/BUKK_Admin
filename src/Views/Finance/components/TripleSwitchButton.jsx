import React from 'react'

const TripleSwitchButton = () => {
  return (
    <Switch>
      {this.props.values.map((val) => {
        return (
          <span>
            <ConcealedRadio value={val} selected={selected} />
            <ClickableLabel title={val} onChange={this.handleChange} />
          </span>
        )
      })}
      <SwitchSelection style={this.selectionStyle()} />
    </Switch>
  )
}

export default TripleSwitchButton
