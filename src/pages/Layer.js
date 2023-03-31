import React from "react";

function Layer() {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="swiper-container"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <div
          className="bg"
          style={{
            animation: "slide 6s ease-in-out infinite alternate",
            backgroundImage:
              "linear-gradient(-60deg, #daf6ff 50%, #FFFFFF 50%)",
            bottom: "0",
            left: "-50%",
            opacity: "0.5",
            position: "fixed",
            right: "-50%",
            top: "0",
            zIndex: "-1",
          }}
        ></div>
        <div
          className="bg bg2"
          style={{
            animationDirection: "alternate-reverse",
            animationDuration: "4s",
            bottom: "0",
            left: "-50%",
            opacity: "0.5",
            position: "fixed",
            right: "-50%",
            top: "0",
            zIndex: "-1",
          }}
        ></div>
        <div
          className="bg bg3"
          style={{
            animationDuration: "5s",
            bottom: "0",
            left: "-50%",
            opacity: "0.5",
            position: "fixed",
            right: "-50%",
            top: "0",
            zIndex: "-1",
          }}
        ></div>
        <div
          className="swiper-pagination"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>

      <style>{`
        .bg {
          animation: slide 3s ease-in-out infinite alternate;
          background-image: linear-gradient(-160deg, #ffeafd 50%, #FFFFFF 50%);
          bottom: 0;
          left: -50%;
          opacity: 0.5;
          position: fixed;
          right: -50%;
          top: 0;
          z-index: -1;
        }

        .bg2 {
          animation-direction: alternate-reverse;
          animation-duration: 4s;
        }

        .bg3 {
          animation-duration: 5s;
        }

        @keyframes slide {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(25%);
          }
        }
      `}</style>
    </div>
  );
}

export default Layer;
