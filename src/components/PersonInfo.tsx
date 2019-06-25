// Libraries
import * as React from 'react'
import { Divider } from 'semantic-ui-react'
import * as moment from 'moment'


interface PersonInfoProps {
  birth: Date,
  relative: boolean,
  name: string
}

const PersonInfo = (props: PersonInfoProps) => {
  return (
    <div>
      {props.name} Age {moment().diff(props.birth, 'years')}
      <Divider />
      {props.relative ? 'relative' : 'friend'}
    </div>
  )
}

export default PersonInfo