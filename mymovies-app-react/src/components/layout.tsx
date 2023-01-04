import React, { Children, Component } from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}
export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className="w-full h-screen bg-gray-200 flex flex-col overflow-auto ">
        <Navbar />
        <div className="h-full overflow-auto ">{this.props.children}</div>
      </div>
    );
  }
}
