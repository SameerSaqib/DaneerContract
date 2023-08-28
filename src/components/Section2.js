import React from "react";
import "./Section2.css";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image

const Section2 = () => {
  const contractNumber = "xxxx"; // Replace with the actual contract number

  return (
    <div className="section1">
      <div className="center-content">
        <img src={Section1Image} alt="dnaneer" className="image-style" />

        <p className="contract-number">{contractNumber}: رقم الاتفاقية</p>
        <p className="additional-text1 ">
          الحمد ﷲ، والصالة والسلام على رسول ﷲ، وبعد :
        </p>
        <div className="center-align">
          <p className="additional-text1">
            إنه في يوم<span className="highlight">- ـهـ الموافق -م،</span>{" "}
            أُبرمت هذه االتفاقية بين كل من :
          </p>
          <p className="centered-text">:أطراف الاتفاقية </p>
          <p className="additional-text1">
            أولاً: تم إنشاء شركة دنانير للتمويل وفقًا لقوانين المملكة العربية
            السعودية وهي مرخصة من قبل البنك المركزي السعودي. يقع مقر الشركة
            الرئيسي في المملكة العربية السعودية، مدينة الرياض، ص. ب .14258. ويتم
            الإشارة ."إليها في هذه الاتفاقية باسم "الطرف الأول" أو "الشركة" أو
            ."الوكيل"
          </p>
          <p className="additional-text1">
            ثانياً: xxxxxxx هويـة رقـم xxxxxxxxxx وتـاريخ ميلاد xx-xx-xxxx،
            وعنوانه الرئيسي:{" "}
            <span className="highlight">
              المملكة العربية السعودية، مدينة xxxx، حي:
            </span>{" "}
            ويُشار إليه في هذه الاتفاقية بأسم "الطرف الثاني" أو "المستثمر" أو
            "المستخدم" ويُشار إلى الطرف الأول والطرف الثاني مجتمعين فيما بعد
            بـــــــ(الطرفان/الطرفين)
          </p>
          <p className="additional-text1 centered-text">التمهيد:</p>
          <p className="additional-text1">
            لما كان الطرف الثاني قد تقدم برغبته في استثمار أمواله من خلال منصة
            التمويل الجماعي بالدين والتي يديرها الطرف الأول، حيث أن الطرف الأول
            شركة مرخصة من قبل البنك المركزي السعودي وتخضع لرقابته ومتوافقة مع
            الأنظمة المعمول بها في المملكة العربية السعودية. وهي متخصصة .بتقديم
            منصة رقمية للخدمات المالية عن طريق التمويل الجماعي بالدين
          </p>
          <p className="additional-text1">
            تم الاتفاق بين الطرفين اللذين يتمتعان بالأهلية الكاملة شرعًا ونظامًا
            على الانضمام إلى هذه الاتفاقية التي تحدد شروط وأحكام اتفاقية الوكالة
            بالاستثمار، وتفاصيل الاتفاق كما يلي:
          </p>
          <p className="additional-text1 centered-text">
            المادة الأولى: المقدمة والتمهيد والملاحق:
          </p>
          <p className="additional-text1">
            تمثل المقدمة والتمهيد أعاله جزءًا ال يتجزأ من هذه االتفاقية ومتممة
            لها.
          </p>
          <div
            className="additional-text "
            style={{ marginTop: "1cm" }} // Add inline style for margin-top
          >
            <p>
              شركة دنانير للتمويل سجل تجاري رقم1010621840والرقم
              املوحد7016651718، وهي شركة مرخصة من قبل البنك املركزي السعودي برأس
              مال خمسة ماليين ريال (5,000,000)، وعنونها ،الوطني الرياض
            </p>

            <p className="additional-text p">Riyadh, Saudi Arabia,</p>
            <p className="additional-text p">www.dnaneer.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
