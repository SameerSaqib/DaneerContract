import React from "react";
import "./Section1.css";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image
const Section1 = () => {
  const contractNumber = "xxxxx"; // Replace with the actual contract number
  const investorName = "xxxx"; // Replace with the actual investor name1
  const currentDate = "*****"; // Replace with the actual current date

  return (
    <div className="section1">
      <div className="center-content">
        <img src={Section1Image} alt="dnaneer" className="image-style" />

        <p className="header">اتفاقية وكالة بالإستثمار</p>
        <p className="p2">
          :بين كل من <br />
          شركة دنانير للتمويل <br />
          و <br />
          <strong> {investorName}</strong> : المستثمر
          <br />
        </p>
        <div className="p3">
          <span className="highlight">
            {" "}
            : <strong>{currentDate}</strong>
          </span>{" "}
          لتاريخ <br />
        </div>
        <p className="contract-number">{contractNumber} : رقم الاتفاقية</p>
        <div className="additional-text">
          <p>
            شركة دنانير للتمويل سجل تجاري رقم1010621840والرقم املوحد7016651718،
            وهي شركة مرخصة من قبل البنك املركزي السعودي برأس مال خمسة ماليين
            ريال (5,000,000)، وعنونها ،الوطني الرياض
          </p>
          <p className="additional-text p">Riyadh,Saudi Arabia,</p>
          <p className="additional-text p">www.dnaneer.com</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
