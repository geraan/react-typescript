import * as React from 'react'

export class Demo extends React.Component {

  componentDidMount() {
    console.log($http)
  }

  render(){
    return <div>
      <p>hello, world! <br/> this is demo page.</p>
    </div>
  }
}