import React, { useState } from "react";

const Example = () => {
  const [response, setResponse] = useState();

  const sayHello = () => {
    fetch("http://localhost:3000/hello")
      .then(response => response.json())
      .then(data => {
        setResponse(data);
      })
      .catch(err => setResponse(err));
  };

  return (
    <div className="row container-small pad-20-t pad-20-b is-grey pad-10-l">
      <div className="col-xs-12">
        <h1 className="is-hero-sub-menu margin-0">Example</h1>
      </div>
      <div className="col-xs-12">
        <h4>
          Find this component in{" "}
          <code className="is-green">src/components/Example.js</code>
        </h4>
        <h4>This is a GET request from our UI to the server:</h4>
        <code className="pad-3 is-grey-bg is-white border-radius">
          {`
            fetch("http://localhost:3000/hello");
          `}
        </code>
        <h4>Trigger it by hitting the button below.</h4>
        <button className="btn" onClick={() => sayHello()}>
          Send Request
        </button>
        {response && (
          <>
            <h4>
              {" "}
              <span role="img" aria-label="celebrate">
                🎉
              </span>{" "}
              We got a response from the server!
            </h4>
            <code className="pad-3 is-grey-bg is-white border-radius">
              {JSON.stringify(response)}
            </code>
          </>
        )}
      </div>
    </div>
  );
};

export default Example;
