import React from "react";

function Error() {
  return (
    <div className="error__area pt-200 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="error__item text-center">
              <div
                className="error__text wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <h4>404</h4>
                <span>Sorry This Page Not found.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
