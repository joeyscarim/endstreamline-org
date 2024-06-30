import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div
        className=" text-center py-24 bg-gray-100 bg-cover"
        style={{ backgroundImage: "url('/images/footer-texture.png')" }}
      >
        <h2>Join Us</h2>
        <h3>
          End Streamline meets regularly and welcomes visitors and new
          participants.
        </h3>
        <h3>
          Contact us at{" "}
          <a className="link" href="mailto:endstreamline@gmail.com">
            endstreamline@gmail.com
          </a>{" "}
          for meeting dates and location.
        </h3>
      </div>

      <div className="bg-gray-900 text-white ">
        <div className="container mx-auto px-4 py-4 text-slate-300 text-sm">
          End Streamline Coalition. 2024.
        </div>
      </div>
    </footer>
  );
};
