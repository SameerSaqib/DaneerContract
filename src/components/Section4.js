// Section4.js
import React from "react";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image
import "./Section4.css";
const Section4 = () => {
  const contractNumber = "xxxx"; // Replace with the actual contract number

  return (
    <div className="section1">
      <div className="center-content">
        <img src={Section1Image} alt="dnaneer" className="image-style" />
        <p className="contract-number">{contractNumber}: رقم الاتفاقية</p>
        <p
          className="additional-text11"
          style={{ marginTop: "5cm" }} // Add inline style for margin-top
        >
          "العائد المستحق :"هو المبلغ الذي يحق للموكل الحصول عليه وفقًا لحصته في
          مجموع مبلغ الاستثمار، بعد خصم رسوم الوكالة وأي مصاريف أخرى.
        </p>
        <p className="additional-text11">
          "تاريخ الاستحقاق" :تاريخ الاستحقاق يشير إلى تاريخ استحقاق العوائد
          المستحقة على فرصة الاستثمار في حسابات دنانير، ويتم ذلك وفقًا للإعلان
          الموجود في تفاصيل الفرصة الاستثمارية على منصة دنانير..
        </p>
        <p className="additional-text11">
          "تاريخ الايداع : هي (5) خمسة أيام عمل من التاريخ الذي يلي إيداع
          المبالغ في حسابات دنانير من العميل أو المقترض. يرجى ملاحظة أن هذه
          الفترة تعتمد على أيام العمل في الأسبوع ولا تشمل عطلات نهاية الأسبوع
          والعطلات الرسمية.
        </p>
        <p className="additional-text11">
          "السداد المبكر :"هي عملية سداد المبالغ المستحقة قبل موعدها المحدد
        </p>
        <p className="additional-text11">
          {" "}
          "التاريخ الفعلي للسداد :"هو التاريخ الذي يتم فيه سداد المبلغ المستحق
          المعلن عنه في الفرصة الاستثمارية.
        </p>
        <p className="additional-text11">
          المستثمرون / المستثمرين :هم الأطراف الراغبين بالاستثمار في منصة دنانير
          للتمويل.
        </p>
        <p className="additional-text11">
          "رسـوم الوكالـة :"أجـرة محـدودة للوكيـل بنسـبة مئويـة مـن صـافي الربـح
          الفعلـي للفرصة الاستثمارية، وذلك مقابل قيام الوكيل بإدارة الفرصة
          الاستثمارية.
        </p>
        <p className="additional-text11">
          {" "}
          "الفرصـة" : هي فرصة استثمارية تعلن عنها منصة دنانير تكون من خلال عملية
          التورق المتوافقة مع الأحكام الإسلامية. ،
        </p>
        <p className="additional-text11">
          {" "}
          <span className="underlined-text">"تفاصيل الفرصة الاستثمارية :"</span>
          هي مجموعة من المعلومات والتفاصيل المهمة حول كل فرصة استثمارية مُعَلن
          عنها عبر منصة دنانير.
        </p>
        <p className="additional-text11">
          " الحساب التجميعي للمستثمر" هو حساب مالي إلكتروني يُقَدِّم عبر منصات
          التمويل الجماعية، والذي يتضمن شروطًا تفصيلية للاستخدام. يقر المستثمرون
          بأن حسابهم الافتراضي لا يشكل حسابًا مصرفيًّا، كما أنه لا يُقَدِّم
          خدْمات مصرفية سوى المذكورة في اتفافية فتح الحساب على منصة دنانير.
        </p>
        <div
          className="additional-text"
          style={{ marginTop: "1cm" }} // Add inline style for margin-top
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
export default Section4;
