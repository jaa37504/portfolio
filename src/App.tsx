import { useLayoutEffect, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { DesignFrame } from './DesignFrame';
import DesignIndex from './DesignIndex';
import Design16955 from './designs/Design16955';
import Design17537 from './designs/Design17537';
import Design18841 from './designs/Design18841';
import Design19366 from './designs/Design19366';
import Design19815 from './designs/Design19815';
import Design20272 from './designs/Design20272';
import Design20659 from './designs/Design20659';
import Design21153 from './designs/Design21153';
import Design21154 from './designs/Design21154';
import Design18405 from './designs/Design18405';

/**
 * Scroll to top on real navigations (e.g. card → case study). Skip when only `/home` query
 * changes so filter chips (All, Product Design, …) don’t jump the page.
 */
function ScrollToTopOnRouteChange() {
  const { pathname, search } = useLocation();
  const prevPathRef = useRef<string | null>(null);
  const prevSearchRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    const prevPath = prevPathRef.current;
    const prevSearch = prevSearchRef.current;

    const onlyHomeFilterChanged =
      pathname === '/home' && prevPath === '/home' && prevSearch !== search;

    prevPathRef.current = pathname;
    prevSearchRef.current = search;

    if (onlyHomeFilterChanged) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route
          path="/"
          element={
            <DesignFrame>
              <DesignIndex />
            </DesignFrame>
          }
        />
        <Route
          path="/home"
          element={
            <DesignFrame>
              <Design16955 />
            </DesignFrame>
          }
        />
        <Route path="/design/16955" element={<Navigate to="/home" replace />} />
        <Route path="/design/17137" element={<Navigate to="/home?filter=product-design" replace />} />
        <Route path="/design/17301" element={<Navigate to="/home" replace />} />
        <Route path="/design/18096" element={<Navigate to="/home?filter=data-science" replace />} />
        <Route path="/design/18255" element={<Navigate to="/home?filter=development" replace />} />
        <Route
          path="/work"
          element={
            <DesignFrame>
              <Design17537 />
            </DesignFrame>
          }
        />
        <Route path="/work/detail" element={<Navigate to="/work" replace />} />
        <Route
          path="/case-studies/cmsx"
          element={
            <DesignFrame flushFooter>
              <Design18841 />
            </DesignFrame>
          }
        />
        <Route
          path="/case-studies/rethink-food"
          element={
            <DesignFrame flushFooter>
              <Design19815 />
            </DesignFrame>
          }
        />
        <Route
          path="/case-studies/capital-one"
          element={
            <DesignFrame flushFooter>
              <Design18405 />
            </DesignFrame>
          }
        />
        <Route
          path="/case-studies/act"
          element={
            <DesignFrame flushFooter>
              <Design20659 />
            </DesignFrame>
          }
        />
        <Route
          path="/case-studies/kenvue"
          element={
            <DesignFrame flushFooter>
              <Design20272 />
            </DesignFrame>
          }
        />
        <Route
          path="/case-studies/info-2300"
          element={
            <DesignFrame flushFooter>
              <Design19366 />
            </DesignFrame>
          }
        />
        <Route
          path="/design/21153"
          element={
            <DesignFrame>
              <Design21153 />
            </DesignFrame>
          }
        />
        <Route
          path="/design/21154"
          element={
            <DesignFrame>
              <Design21154 />
            </DesignFrame>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
