import { QRCodeCanvas } from "qrcode.react";

const Donate = () => {
  const QRUrl =
    "upi://pay?pa=Vyapar.170076790072@hdfcbank&pn=Default&mc=8999&tr=STQU170076790072&cu=INR";

  return (
    <div id="donate">
      <div className="bg-[#012b28] text-[#ebb42c] w-full h-[980px] md:h-[580px]">
        <div className="text-center py-9">
          <h1 className="text-4xl md:text-5xl inline-block border-b-2 border-[#ebb42c]">
            Donate to the Cause
          </h1>
        </div>

        <div className="flex md:mt-4 flex-col md:flex-row justify-center items-center text-center md:text-left">
          {/* Financial Details */}
          <div className="md:w-1/2 md:pl-12">
            <h1 className="text-3xl md:text-4xl">Financial Details</h1>
            <div className="font-sans mt-7">
              <table className="w-[350px] md:w-[620px] border border-[#ebb42c]">
                <tbody>
                  <tr>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      Trust Regd. No.
                    </td>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      4455
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      Account No.
                    </td>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      50200068803612
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      IFSC Code
                    </td>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      HDFC0005478
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      PAN No.
                    </td>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      AAETJ1724A
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      80-G No.
                    </td>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      AAETJ1724AF20231
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      CSR No.
                    </td>
                    <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-base md:text-lg">
                      CSR00060245
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Donor's Testimonial */}

          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl px-2 text-center">
              Scan to donate with any UPI app
            </h1>
            <div className="mt-10 flex justify-center">
              <QRCodeCanvas
                value={QRUrl}
                size={300}
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
