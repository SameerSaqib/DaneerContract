import React from "react";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image
import "./Section10.css";
const Section10 = () => {
  const contractNumber = "xxxx"; // Replace with the actual contract number
  const professorName = "xxxxx";

  return (
    <div className="section1">
      <div className="center-content">
        <img src={Section1Image} alt="dnaneer" className="image-style" />
        <p className="contract-number">{contractNumber}: رقم الاتفاقية</p>
        <p className="additional-text1" style={{ marginTop: "6cm" }}>
          {" "}
          حررت هذه الاتفاقية من نسخ الكترونية :
        </p>
        <p className="additional-text1">
          {" "}
          نسخة للشركة (الطرف الأول(، نسخة للموكل )الطرف الثاني).
        </p>
        <div className="combined-spaced-text">
          <p className="combined-spaced-text11">
            {/* Additional spaced text block */}
            الطرف الثاني{" "}
          </p>
          <p className="combined-spaced-text11">
            {/* Another additional spaced text block */}
            الطرف الأول{" "}
          </p>
        </div>
        <div className="combined-spaced-text">
          <p className="combined-spaced-text11">
            {/* Additional spaced text block */}
            الموكل/المستثمر{" "}
          </p>
          <p className="combined-spaced-text11">
            {/* Another additional spaced text block */}
            شركة دنانير للتمويل{" "}
          </p>
        </div>
        <div className="combined-spaced-text">
          <p className="combined-spaced-text11">
            {/* Additional spaced text block */}
            <span style={{ backgroundColor: "yellow" }}>
              {" "}
              الأستاذ / <strong> {professorName} </strong>
            </span>{" "}
          </p>
          <p className="combined-spaced-text11">
            {/* Another additional spaced text block */}
            ويمثلها <span style={{ backgroundColor: "yellow" }}>الأشتاة</span> /
            بدر بن محمد الجهني{" "}
          </p>
        </div>
        <div className="combined-spaced-text">
          <p className="combined-spaced-text11">
            {/* Additional spaced text block */}
            المفوض بالتوقيع{" "}
          </p>
          <p className="combined-spaced-text11">
            {/* Another additional spaced text block */}
            الرئيس التنفيذي للعمليات{" "}
          </p>
        </div>
        <div className="combined-spaced-text1">
          <p>
            {/* Additional spaced text block */}
            التوقيع :
          </p>
          <p>
            {/* Another additional spaced text block */}
            التوقيع :
          </p>
        </div>
        <div className="combined-spaced-text2">
          <p>
            {/* Additional spaced text block */}
            التاريخ:{" "}
          </p>
          <p>
            {/* Another additional spaced text block */}
            التاريخ:{" "}
          </p>
        </div>
        <div
          className="additional-text"
          style={{ marginTop: "7cm" }} // Add inline style for margin-top
        >
          <p>
            شركة دنانير للتمويل سجل تجاري رقم1010621840والرقم املوحد7016651718،
            وهي شركة مرخصة من قبل البنك املركزي السعودي برأس مال خمسة ماليين
            ريال (5,000,000)، وعنونها ،الوطني الرياض
          </p>
          <p className="additional-text p">Riyadh, Saudi Arabia,</p>
          <p className="additional-text p">www.dnaneer.com</p>
        </div>
      </div>
    </div>
  );
};

export default Section10;
