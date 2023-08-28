// Section8.js
import React from "react";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image
import "./Section8.css";

const Section8 = () => {
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
          إذا حكمت المحكمة لصالح المقرض، فسيتم إصدار أمر بدفع المنشأة المستفيدة
          للقرض.
        </p>
        <p className="additional-text11">
          إذا لم تقم المنشأة المستفيدة بدفع القرض، فسيتم تنفيذ الأمر بواسطة
          دائرة التنفيذ،
        </p>
        <div className="center-align">
          <p className="centered-text"> : المادة الثامنة: عوائد الاستثمار</p>
        </div>
        <p className="additional-text11">
          في حال تحققت الأرباح الفعلية، يتعهد "الوكيل" أو "الشركة" بتحويل مبلغ
          الاستثمار المستثمر به ونصيب المكلف من الأرباح إلى حساب المكلقف، وذليك
          في التاريخ المذكور في تفاصيل الفرصة الإستثمارية على أن يتم خضم أية
          مصروفات ذات صلة بالفرصة الاستثمارية كالرسوم التحصيل والإجور
          للاستشاربين والمحامين.
        </p>
        <p className="additional-text11">
          في حال السداد المبكر للفرصة الاستثمارية فيتم إعادة احتساب العائد
          المستحق للمستثمر بناء على التاريخ الفعلي للسداد .
        </p>
        <p className="additional-text11">
          تودع المبالغ في حسابات المستثمرين خلال (5) خمسة أيام من تاريخ السداد
          أو الاستحقاق.
        </p>
        <div className="center-align">
          <p className="centered-text">: المادة التاسعة: الرسوم أجرة الوكيل</p>
        </div>
        <p className="additional-text1">
          اتفق الطرفان على أن "الوكيل" أو "الطرف الأول" يحق له استلام رسوم
          ممعينة مقابل خدمات وكالته لصالح الطرف الثاني، وذليك بنسبة مئوبة من
          صافي العائد الاستثماري الفعلي، حسبما أحدد ذلك في نشرة فرصة الاستثمار
          المخصصة لهذا المشروع.اتفق الطرفان على أن "الطرف الاول" أو "الوكيل"
          يستحق رسوما مقابل عمله وكيلا عن الطرف الثاني تقدر بنسبة مئوية من صافي
          الريح الفعلي، يحددها الطرف الأول في النشرة الخاصة بكل فرصة استثمارية.
        </p>
        <div className="center-align">
          <p className="centered-text">: المادة العاشرة: تسوية المنازعات</p>
        </div>
        <p className="additional-text1">
          ييخضع هذا الاتفاق للأنظمة المعتمدة في المملكة العربية السعودية، ويتم
          تفسيره وتنفيذه بالشكل المطابق لهذه الأنظمة. في حال نشوء أي خلاف يتصل
          بتطبيق هذا الاتفاق، فإن كلا من الطرفين يجوز له التوصل إلى تسوية بهدف
          حل هذا الخلاف. وإذا عجركلا منهما عن ذلك، يحال هذا الخلاف إلى ديوان
          المظالم لإصدار قرار نهاني بشأنه.
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

export default Section8;
