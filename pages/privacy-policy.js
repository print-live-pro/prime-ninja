import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto my-10">
        <div>
          <h3 className="text-3xl font-bold">PRIVACY POLICY</h3>
          <p className="text-2xl text-gray-500 mt-5">
            We care about data privacy and security. Please review our Privacy
            Policy: https://printlivepro.com/privacy-policy. By using the Site,
            you agree to be bound by our Privacy Policy, which is incorporated
            into these Terms of Use. Please be advised the Site is hosted in
            ___. If you access the Site from any other region of the world with
            laws or other requirements governing personal data collection, use,
            or disclosure that differ from applicable laws in ____, then through
            your continued use of the Site, you are transferring your data to
            ____, and you agree to have your data transferred to and processed
            in _____.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
