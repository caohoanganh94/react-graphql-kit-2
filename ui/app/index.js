import './styles/app.scss';
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'wouter';
import PageLayout from './layouts/PageLayout';
import Loading from './component/Loading';

const Home = React.lazy(() => import('./page/Home'));

const App = () => (
  <Suspense fallback={<Loading/>}>
    <Switch>
      <PageLayout>
        <Route exact path="/" component={Home} />
        <Route path="/redirect"><Redirect to="/" replace /></Route>
      </PageLayout>
    </Switch>
  </Suspense>
);

export default App;
