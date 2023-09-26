import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




function Footer() {

    const [selectedFaq, setSelectedFaq] = useState(null);

    const faqData = [
      {
        question: "Yazılım Kulübü Nedir ve Ne Tür Faaliyetlerde Bulunuyorsunuz?",
        answer: "Yazılım Kulübü, öğrencilere yazılım geliştirme konularında eğitim veren ve yazılıma ilgi duyan öğrencilerin bir araya geldiği bir kulüptür.Faaliyetlerimiz arasında çeşitli programlama dilleri üzerine dersler, hackathon etkinlikleri ve yazılım projeleri geliştirme fırsatları bulunmaktadır."
      },
      {
        question: "Hangi Programlama Dilleri veya Teknolojileri Öğretiyorsunuz?",
        answer: "Yazılım Kulübü olarak, temel programlama dilleri olan Java, Python, ve JavaScript gibi dilleri öğretiyoruz. Ayrıca web geliştirme, mobil uygulama geliştirme ve veritabanı yönetimi gibi çeşitli teknolojileri öğrenme fırsatı sunuyoruz. Öğrencilerin ilgi ve talepleri doğrultusunda yeni diller ve teknolojileri de ekleyebiliriz."
      },
      {
        question: "Kulübe Nasıl Katılabilirim ve Hangi Seviyede Bilgi Gerekiyor?",
        answer: "Kulübümüze katılmak için sadece yazılıma olan ilginiz yeterli! Her seviyeden öğrencilere açığız. Başlangıç seviyesinden ileri seviyeye kadar olan derslerimiz mevcuttur."
      }
    ];
  
    const handleFaqClick = (index) => {
      if (selectedFaq === index) {
        setSelectedFaq(null); 
      } else {
        setSelectedFaq(index); 
      }
    };

  return (
    
    <div className='footer'>
         <div className="logo-socials">
            <img src={require('../../src/assets/UÜlogo.png')} alt="logo" className="logo"/>
            
            <div className="socials">
            <a href="/" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} className="social" />
                    <p>validemail@email.com</p>
                </a>
              <a href="https://www.instagram.com/ytu.yazilimtoplulugu/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="social" />
                <p>validemail@email.com</p>
              </a>
             <a href="https://www.youtube.com/channel/UC9Q6bZQ5X0Z6YX9XZ2Z3Y7w" target="_blank">
                <FontAwesomeIcon icon={faYoutube} className="social" />
                    <p>validemail@email.com</p>
                </a>
                <a href="https://www.linkedin.com/company/yazilimtoplulugu/" target="_blank">
                  <FontAwesomeIcon  icon={faLinkedin}  className="social" />
                    <p>validemail@email.com</p>
                </a>
                </div>
               </div>
            
               <div className="question">
        <h1>S.S.S</h1>
        <ul>
          {faqData.map((faq, index) => (
            <li key={index}>
              <a href="#"  onClick={(e) => { e.preventDefault(); handleFaqClick(index); }}>
                {faq.question}
              </a>
              {selectedFaq === index && (
                <p className='answer'>{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      <p className='right'>© 2023 Copyright Uludag University</p>
    </div>
  );
}

export default Footer;
