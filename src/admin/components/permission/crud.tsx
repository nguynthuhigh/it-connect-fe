import React from "react";
import { Switch } from "antd";
const Crud: React.FC = () => {
  return (
    <div className="flex space-x-6 font-semibold text-center">
      <div>
        <h1>Create</h1>
        <Switch></Switch>
      </div>
      <div>
        <h1>Read</h1>
        <Switch></Switch>
      </div>
      <div>
        <h1>Update</h1>
        <Switch></Switch>
      </div>
      <div>
        <h1>Delete</h1>
        <Switch></Switch>
      </div>
    </div>
  );
};

export default Crud;
