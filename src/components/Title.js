import React, { PureComponent } from 'react'
import './Title.css'

class Title extends PureComponent {
  render() {
    const { content, style, className } = this.props

    return (
      <h1 className={['Title', className].join(' ')} style={{ ...style || {} }}>{ content }</h1>
    )
  }
}

export default Title
