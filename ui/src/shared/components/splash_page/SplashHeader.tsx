import React, {SFC} from 'react'

interface Props {
  title: string
}

const SplashHeader: SFC<Props> = ({title}) => (
  <h3 className="splash-page--heading">{title}</h3>
)

export default SplashHeader
