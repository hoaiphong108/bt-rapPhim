import { Fragment } from "react";
import { Route } from "react-router";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Header from "./Layout/Header/Header";
export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location.props,history.props.match
        return (
          <Fragment>
            <Header {...propsRoute} />
            {/* propsRoute có tác dụng để dúng các thuộc tính history , match.params,... */}
            <HomeCarousel {...propsRoute}></HomeCarousel>
            <Component {...propsRoute} />

            <footer className="bg-black h-10 text-white">
              Đây là footer homepage
            </footer>
          </Fragment>
        );
      }}
    />
  );
};
