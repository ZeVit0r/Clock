import { render } from 'preact'
import { App } from './app'

import "./styles.scss"

render(<App />, document.getElementById('app') as HTMLElement)
