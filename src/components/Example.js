import React from "react";

const Example = () => (
  <div className="row container-small pad-20-t pad-20-b is-grey pad-10-l">
    <div className="col-xs-12">
      <h1 className="is-hero-sub-menu margin-0">Example</h1>
    </div>
    <div className="col-xs-12">
      <h4>
        Find this component in{" "}
        <code className="is-pink">src/components/SocketExample.js</code>
      </h4>
      <h4>This is our dispatch action:</h4>
      <code className="pad-3 is-grey-bg is-white border-radius">
        {`sayHello: () => dispatch({ type: "server/hello", data: "Hello!" })`}
      </code>
      <h4>
        Because it is of type "server/*", it emits to the server via the socket.
        Trigger it by hitting the button below.
      </h4>
    </div>
  </div>
);

export default Example;
