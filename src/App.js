import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import indexRouter from './routes';
import PrivateRoute from './utilies/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {indexRouter.map((item, index) => {
          return <PrivateRoute
            path={item.path}
            component={item.component}
            key={index}
          />
        })}
      </div>
    </BrowserRouter>
  );
};

export default App;
