import { Component } from 'react'

import './app.styles.scss'

class App extends Component {
  render() {
    return (
      <div className='bg-gray-50 flex items-center justify-center h-screen'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20'>
          Webpack 5 boilerplate with Electron, React 17, Tailwind 2, using
          babel, sass, with a hot dev server and an optimized production build.
          <div className='mt-3 p-3'>
            <strong className='text-red-500'> &lt;3 </strong> Typescript
          </div>
        </div>
      </div>
    )
  }
}

export default App
