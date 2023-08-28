// Section3.js
import React from "react";
import "./Section3.css";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image
const Section3 = () => {
  const contractNumber = "xxxx"; // Replace with the actual contract number
  return (
    <div className="section1">
      <div className="center-content">
        <img src={Section1Image} alt="dnaneer" className="image-style" />

        <p className="contract-number">{contractNumber}: رقم الاتفاقية</p>
        <div className="center-align">
          <p className="centered-text"> : المادة الثانية: التعريفات</p>
          <p className="additional-text1">
            يقصد بالعبارات التالية أينما وردت في هذه الاتفاقية:
          </p>
          <p className="additional-text11">
            "اتفاقية الوكالة بالاستثمار: تعد اتفاقية الوكالة بالاستثمار اتفاقية
            تعاقدية بين شخصين أو أكثر، يتم بموجبها تحديد مهمة الوكيل في القيام
            بإجراءات الاستثمار نيابةً عن المستثمر، وذلك بموجب تفويض صريح من
            المستثمر. وتشمل مهام الوكالة بالاستثمار عادةً إجراءات شراء وبيع
            الأوراق المالية والأصول الأخرى المرتبطة بالاستثمار.
          </p>
          <p className="additional-text11">
            منصة التمويل الجماعي بالدين (منصة دنانير): المنصة الإلكترونية التي
            يقدم من خلالها نشاط التمويل لشركة دنانير للتمويل.
          </p>
          <p className="additional-text11">
            "مبلغ الاستثمار :"يشير إلى القيمة المالية التي يرغب الطرف الثاني في
            استثمارها في فرصة استثمارية متاحة على منصة الطرف الأول. يمكن أن يكون
            هذا المبلغ مختلفًا تبعًا لنوع الفرصة الاستثمارية وشروطها.
          </p>
          <p className="additional-text11">
            "مجموع مبلغ الاستثمار :"مجموع مبلغ الاستثمار يشير إلى إجمالي المبالغ
            التي تم جمعها من المستثمرين عبر منصة التمويل الجماعي والتي يتم
            استثمارها في فرصة استثمارية محددة. يتضمن هذا المبلغ جميع المساهمات
            التي تم جمعها من المستثمرين بما في ذلك الأموال المستثمرة بالفعل
            والمبالغ التي تم تعهد بالاستثمار بها.
          </p>
          <p className="additional-text11">
            " َّمعدل العائد الاستثماري المتوقع: على أنه معدل العائد الذي يتوقع
            المستثمر الحصول عليه بمجرد انتهاء الفرصة الاستثمارية، والذي يتم
            الإعلان عنه من قبل الوكيل على منصة التمويل الجماعي.
          </p>
          <p className="additional-text11">
            "صافي العائد الاستثماري الفعلي" :صافي العائد الاستثماري الفعلي يشير
            إلى الربح الفعلي الذي تحقق من فرصة الاستثمار. ويتم حسابه عن طريق طرح
            كلفة الاستثمار من إجمالي العائدات المحققة.
          </p>

          <div
            className="additional-text"
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

export default Section3;
