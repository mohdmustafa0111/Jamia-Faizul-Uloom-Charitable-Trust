const Donate = () => {
  return (
    <div className="bg-[#012b28] text-[#ebb42c]  w-full h-[580px]">
      <div className="text-5xl text-center py-9">"Donate to the Cause"</div>
      {/* Financial Details */}
      <div className="flex mt-4">
        <div className="w-1/2 pl-12">
          <h1 className="text-4xl">Financial Details</h1>
          <div className="font-sans mt-7">
            <table className="w-[620px] border border-[#ebb42c]">
              <tbody>
                <tr>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    Trust Regd. No.
                  </td>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    4455
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    Account No.
                  </td>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    50200068803612
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    IFSC Code
                  </td>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    HDFC0005478
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    PAN No.
                  </td>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    AAETJ1724A
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    80-G No.
                  </td>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    AAETJ1724AF20231
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    CSR No.
                  </td>
                  <td className="border border-[#ebb42c] px-4 py-3 w-1/2 text-lg">
                    CSR00060245
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Donor's Testimonial */}

        <div className="w-1/2">
          <h1 className="text-4xl">Donor's Testimonial</h1>
          <div className="font-sans text-xl w-[680px] h-[320px] mt-7 tracking-wider leading-relaxed border border-[#ebb42c] rounded-3xl">
            <p className="pt-6 px-7">
              I am so happy to see my donation going for a useful purpose,
              thanks to Jamia Faizul Uloom, who makes it happen. It is a best
              way to stay connected with the noble cause and have the feeling of
              doing something for society. And the best part is, you don't need
              huge money to contribute for such noble causes, even a small
              amount can make a massive difference. I am very happy to be part
              of initiatives like girl education.
            </p>
            <p className="pl-7 pt-3">Mr. Nizamuddin Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donate;
