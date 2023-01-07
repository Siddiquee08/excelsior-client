import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className=" container d-block my-2">
      <Card className="d-flex m-1" border="light">
        <Card.Body>
          <Card.Title>What is CORS?</Card.Title>
          <Card.Text>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. An example of a cross-origin request: the front-end
            JavaScript code served from https://domain-a.com uses XMLHttpRequest
            to make a request for https://domain-b.com/data.json. For security
            reasons, browsers restrict cross-origin HTTP requests initiated from
            scripts. For example, XMLHttpRequest and the Fetch API follow the
            same-origin policy. This means that a web application using those
            APIs can only request resources from the same origin the application
            was loaded from unless the response from other origins includes the
            right CORS headers.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-flex m-1" border="light">
        <Card.Body>
          <Card.Title>
            {" "}
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Title>
          <Card.Text>
            Firebase Authentication aims to make building secure authentication
            systems easy, while improving the sign-in and onboarding experience
            for end users. It provides an end-to-end identity solution,
            supporting email and password accounts, phone auth, and Google,
            Twitter, Facebook, and GitHub login, and more. Other ways of
            authentications are Parse, Supabase, OKTA etc.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-flex m-1" border="light">
        <Card.Body>
          <Card.Title>How does private route works?</Card.Title>
          <Card.Text>
            The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-flex m-1" border="light">
        <Card.Body>
          <Card.Title>What is Node and How does it work?</Card.Title>
          <Card.Text>
            Node.js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node.js wastes no time or
            resources on waiting for I/O requests to return. It runs a
            single-threaded event loop registered with the system to handle
            connections, and each new connection causes a JavaScript callback
            function to fire. The callback function can handle requests with
            non-blocking I/O calls, and if necessary can spawn threads from a
            pool to execute blocking or CPU-intensive operations and to
            load-balance across CPU cores. Node’s approach to scaling with
            callback functions requires less memory to handle more connections
            than most competitive architectures that scale with threads,
            including Apache HTTP Server, the various Java application servers,
            IIS and ASP.NET, and Ruby on Rails.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
