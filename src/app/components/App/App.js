import DocumentMeta from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import HeadNavigation from 'app/components/HeadNavigation/HeadNavigation'
import HomepageHero from 'app/components/HomepageHero/HomepageHero'
import FlashMessages from 'app/components/@FlashMessages/FlashMessages'

import CodeSplit from 'app/components/CodeSplit'
import style from './App.module.scss'

const log = debug('App.js')

export default class App extends React.Component {
  render() {
    log('render')
    return (
      <div className={style.app}>
        <DocumentMeta
          defaultTitle='Dreamcatch'
          titleTemplate='%s | Dreamcatch'>
          <html lang='en' />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1.0' />
          <meta name='description' content='Dreamcatch, a minimal boilerplate for building universal react applications' />
          <meta name='keywords' content='react,redux,react-router,koa,universal,babel,es7,hmr,webpack' />
        </DocumentMeta>
        <HeadNavigation />
        <HomepageHero />
        <FlashMessages />
        <main className={style.content}>
          <Switch>
            <CodeSplitRoute
              exact
              path='/'
              load={() => import('app/routes/HomeRoute/HomeRoute')}
            />
            <CodeSplitRoute
              path='/oops'
              load={() => import('app/routes/OopsRoute/OopsRoute')}
            />
            <CodeSplitRoute
              path='/private'
              load={() => import('app/routes/PrivateRoute/PrivateRoute')}
            />
            <CodeSplitRoute
              load={() => import('app/routes/NotFoundRoute/NotFoundRoute')}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

const CodeSplitRoute = ({ load, ...props }) => (
  <Route {...props}
    render={() => (
      <CodeSplit load={load}>
        {(Comp) => Comp && <Comp />}
      </CodeSplit>
    )}
  />
)
