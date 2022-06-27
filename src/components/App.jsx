import { Route, Routes  } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer} from 'react-toastify';

import Container from "components/Container";

const Navigation = lazy(() => import("./Navigation"));
const Home = lazy(() => import("pages/Home"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const Cast = lazy(() => import("pages/Cast"));
const Reviews = lazy(() => import("pages/Reviews"));
const Movies = lazy(() => import("pages/Movies"));


function App () {
  return (
    <Container>
      <Suspense fallback=''>
      <Navigation />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route  path='/movies/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
            </Route>
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </Suspense>
         <ToastContainer autoClose={3000} />

    </Container>
  );
};

export default App;

