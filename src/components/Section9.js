// Section9.js
import React from "react";
import Section1Image from "./images/Section1Image.png"; // Update the path to the image
import "./Section9.css";
const Section9 = () => {
  const contractNumber = "xxxx"; // Replace with the actual contract number
  return (
    <div className="section1">
      <div className="center-content">
        <img src={Section1Image} alt="dnaneer" className="image-style" />
        <p className="contract-number">{contractNumber}: رقم الاتفاقية</p>
        <div className="center-align">
          <p className="centered-text">
            {" "}
            : المادة الحادية عشر: الإخطارات والمراسلات
          </p>
        </div>
        <p className="additional-text1">
          {" "}
          تعد العناوين المذكورة في هذه الاتفاقية عنوان كل طرف من الأطراف بشكل
          قانوني، وجميع المراسلات بخصوص طلبات أو إشعارات أو إقرارات أو موافقات
          أو أية مستندات أخرى يتم إرسالها من خلال تلت العناوين أو عن طريق البريد
          الإلكتروني المسجل لدى الطرف الأول .
        </p>
        <div className="center-align">
          <p className="centered-text">: المادة الثانية عشر: سرية المعلومات</p>
        </div>
        <div class="additional-text-container">
          <p class="additional-text13">
            يتعين على الطرف الثاني وموظفيه الملتزمين بهذا العقد أن يحافظوا على
            سرية جميع الأعمال التابعة لهذا الاتفاق والتي تمم استلامها أو إجراؤها
            بسبب هذا الاتفاق.
          </p>
          <p className="additional-text13">
            يتوجب على الطرف الثاني توقيع اتفاقية سرية المعلومات، وذلك باستخدام
            نموذج معتمقد من قل الطرف الأول.
          </p>
          <p className="additional-text13">
            يمنع على الطرف الثاني، بدون الحصول على موافقة خطية مسبقة من الطرف
            الأول، أن يعلن أو يكشف في وسائل الإعلام أو على شبكة الإنترنت حول هذا
            الاتفاق أو حول الخدمات التي تم تزويدها للشركة.
          </p>
        </div>
        <div className="center-align">
          <p className="centered-text">
            (BCP) المادة الثالثة عشر: خطة استمرارية الأعمال والتعافي من الكوارث
          </p>
        </div>
        <div class="additional-text-container1">
          <p class="additional-text14">
            الشركة لديها خطة استمرارية الأعمال والتعافي من الكوارث (BCP) هي خطة
            تهدف إلى حماية الأعمال وضمان استمرارها في حالة وقوع حادث أوكارثة.
          </p>
          <p className="additional-text14"> تتضمن الخطة:</p>
          <div class="additional-text-container1">
            <p className="additional-text15">
              كيفية الحفاظ على تدفق السيولة في حالة حدوث كارثة.
            </p>
            <p className="additional-text15">
              كيفية استعادة البيانات في حالة فقدانها أو تلفها.
            </p>
            <p className="additional-text15">
              كيفية التواصل مع المستثمرين في حالة وقوع كارثة.
            </p>
            <p className="additional-text15">
              كيفية إعادة تشغيل النظام الأساسي في حالة تعطله٠
            </p>
          </div>
          <div
            className="additional-text"
            style={{ marginTop: "6cm" }} // Add inline style for margin-top
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

export default Section9;
