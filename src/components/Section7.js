// Section7.js
import React from "react";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image
import "./Section7.css";

const Section7 = () => {
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
          مدة كل فرصة استثمارية تختلف من فرصة اىل أخرى يتم تحديدها ف منصة
          المستثمرين ويمكن للمستثمر االطالع عىل مدة كل فرصة قبل الخضوع في لا
          ستثمار عبر المنصة.
        </p>
        <div className="center-align">
          <p className="centered-text"> :المادة السابعة: نطاق المسؤولية</p>
          <p className="additional-text1">
            {" "}
            تُعنى هذه البنود بالمسؤولية القانونية والمالية لشركة دنانير للتمويل
            فيما يتعلق بـ منصتها الالكترونية وعمليات التمويل المتعلقة به. وتشير
            البنود إلى ما يلي:
          </p>
          <p
            className="additional-text11"
            style={{ marginTop: "2cm" }} // Add inline style for margin-top
          >
            {" "}
            لا تتحمل دنانير مسؤولية أي خسارة تنجم عن استخدام الموقع أو المحتوى
            الموجود فيه، بما في ذلك الخسائر المباشرة أو غير المباشرة أو الخاصة
            أو المترابطة .كما أنها ليست مسؤولة عن أي خسارة تتعلق بالأعمال
            التجارية أو الدخل أو الأرباح أو التوفير أو فوات العقود أو العلاقات
            التجارية أو السمعة أو الشهرة أو البيانات.
          </p>
          <p className="additional-text11">
            {" "}
            تتحمل دنانير مسؤولية إرجاع المبالغ التي تم جمعها من المشاركين في
            حالة عدم اكتمال المبلغ التموباا المطلوت خلال مذة الطح: ولت لها أى
            مسة دالنة تحاه المشااك، د:هذم الحالة .
          </p>
          <p className="additional-text11">
            تتحمل دنانير مسؤولية إشعار العملاء في حالة وجود أي خلل في عملية
            التمويل ومعالجة الخطأ.
          </p>
          <p className="additional-text11">
            يقر" الموكل "أو" المستخدم الشركة "يضمن حفظ مبلغ الاستثمار وإدارته،
            إلا في حالة ارتكاب أي خطأ أو تجاوزات أو مخالفات لشروط هذه الاتفاقية
            .وعلى هذا الأساس، فإن حدود المسؤولية للوكيل على جميع الخسائر،
            التكاليف، والضرر المادي - بما في ذلك التكاليف القانونية - ستحضر
            دائمتا( بغض النظر عن شثب )في مجمل مبلغ الاستثمار .كافة التعويضات
            سحصى من خلال قضاء الحكم السعودي .
          </p>
          <p className="additional-text11">
            يقر" الموكل "أو" المستخدم "بآنه يدرك مخاطر الاستثمار وعمليات التمويل
            عبر منصات التمويل الجماعي، وبأن هناك احتمالية لفقدان المبالغ
            المستثمرة كاملا أو جزئتا.
          </p>
          <p className="additional-text11">
            إذا حدثت خسارة - لا قدر الله - في الفرصة الاستثمارية، سيتم توزيع هذه
            الخسائر على يع المستثمرين في هذه الفرصة بحسب حصتهم من إجمالي مبلغ
            الاستثمار .ولا يحق للوكيا طالبة بأية تعويضات عن جهده وعمله في ظل هذه
            الظروف من" الموكل "أو" المستخدم.".
          </p>
          <p className="additional-text11">
            إذا تخلفت المنشأة المستفيدة عن سداد قرضها، فسيتم اتخاذ الخطوات
            التالية:
          </p>
          <p className="additional-text11">
            سيتم إرسال خطاب إلى المنشأة المستفيدة يطلب منها السداد.
          </p>
          <p className="additional-text11">
            إذا لم تقم المنشأة المستفيدة بالسداد، فسيتم إرسال خطاب ثان يطلب منها
            السداد وإلا سيتم اتخاذ إجراءات قانونية.
          </p>
          <p className="additional-text11">
            إذا لم تقم المنشأة المستفيدة بالسداد، فسيتم رفع دعوى قضائية ضدها.
          </p>
          <div
            className="additional-text"
            style={{ marginTop: "2cm" }} // Add inline style for margin-top
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

export default Section7;
