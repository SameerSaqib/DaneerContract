// Section6.js
import React from "react";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image
import "./Section6.css";

const Section6 = () => {
  const contractNumber = "xxxx"; // Replace with the actual contract number

  return (
    <div className="section1">
      <div className="center-content">
        <img src={Section1Image} alt="dnaneer" className="image-style" />
        <p className="contract-number">{contractNumber}: رقم الاتفاقية</p>
        <p
          className="additional-text11"
          style={{ marginTop: "4cm" }} // Add inline style for margin-top
        >
          اتفق الطرفان برأن "للوكيل" أو "للشكة" كامل الحق بالتواصل مع طالب
          التمويل أو المقيض و ن " أو "المستثمر" بمطالبة المقيضيي ن الفرص
          االستثمارية، وال يحق "الطرف الثاني ن المستثمرين ف او
          المشاركين(المستثمرين) بأي اجراءات.
        </p>
        <div className="center-align">
          <p className="centered-text"> : المادة الثالثة: الاتفاقية </p>
        </div>
        <p
          className="additional-text11"
          style={{ marginTop: "1cm" }} // Add inline style for margin-top
        >
          {" "}
          عند توقيع هذه الاتفاقية فأن الطرف الثاني وافق على ان للوكيل أو للشركة
          دمج مبلغ الاستثمار مع أي من الأصول والأموال الأخرى التي يتسلَّمها
          الوكيل من المستثمرين، وذلــِــك في فترات زمنية مُحددة.
        </p>
        <p className="additional-text11">
          {" "}
          يتعيَّن على الطرف الثاني إيداع رأس ماله في الحساب الاستثماري الخاص به
          في منصة دنانير، والذي يُطلق عليه "حساب التجميعي للمستثمر". ويربط هذا
          الحساب بصفحة الطرف الثاني على المنصة الإلكترونية لدى الشركة
        </p>
        <div className="center-align">
          <p className="centered-text"> : المادة السادسة: مدة الاستثمار</p>
        </div>
        <p className="additional-text11">
          تسري هذه الاتفاقية من تاريخ توقيعها، وتنتهي بصورةٍ تلقائية في حال ألغى
          "الطرف الثاني" أو "المستثمر" حسابه على منصة الشركة الإلكتروني، أو إذا
          قامت الشركة باستحداث تعديلات على شروط وأحكام هذه الاتفاقية.
        </p>
        <p className="additional-text11">
          ينبع أن لا يؤثر انتهاء هذه االتفاقية على حقوق والتزامات أي ٍ من
          الطرفين المتعقة بأية فرصة استثمارية قائمة وسارية المفعول قبل انتهاء
          هذه االتفاقية. إضافة إىل ذلك، تظل شروط وأحكام هذه االتفاقية سارِيَة
          المفعول حت مُعالَجَة تسوية الفرصة االستثمارية التي لا زالت سارِيْة
          المفعول.
        </p>
        <div
          className="additional-text"
          style={{ marginTop: "2cm" }} // Add inline style for margin-top
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

export default Section6;
