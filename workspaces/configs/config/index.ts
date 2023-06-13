import development from './development'
import production from './production'

const configs = { development, production }

const CONFIG = configs[process.env.NODE_ENV === 'production' ? 'production' : 'development']

export default CONFIG
