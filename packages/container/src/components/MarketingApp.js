import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function () {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    // passing 2nd arg for making sync browser router & memory router
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextMarketingPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextMarketingPathname)
          history.push(nextMarketingPathname);
      },
    });

    // browser history for container (parent) application
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}
