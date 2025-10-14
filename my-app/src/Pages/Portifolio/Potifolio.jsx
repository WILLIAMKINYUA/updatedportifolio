import React from 'react';
import pdf1 from'../../pic/Resume.pdf'
import pdf2 from'../../pic/William_Muhuni_Leaving_Certificate.pdf'
const Potifolio = () => {
  return (
    <div className='container py-5'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 text-center">
          <h1 className="phase1head mb-4">Professional Summary</h1>
          <p className="phase1para">
          I am a passionate and detail-oriented Software Developer with a strong foundation in modern web technologies and a commitment to building efficient, scalable, and user-friendly applications. With hands-on experience in front-end and back-end development, I specialize in crafting clean, maintainable code using technologies like HTML,CSS,JavaScript, React,Angular, Node.js, and modern frameworks. I thrive in collaborative environments and enjoy solving complex problems that drive innovation and user satisfaction.
          </p>
          
        </div>
   <div className="card mb-4" style={{ height: '80vh' }}>
  <h1 className="card-subtitle">Resume Overview</h1>
  <object
    data={pdf1}
    type="application/pdf"
    width="100%"
    height="100%"
    style={{ minHeight: '60vh' }}
  >
    <p>Your browser does not support PDFs. <a href={pdf1}>Download PDF</a>.</p>
  </object>
</div>

<div className="card mb-4" style={{ height: '60vh' }}>
  <h1 className="card-subtitle">Certification</h1>
  <p className="card-subtitle">This is my Diploma Leaving Certificate</p>
  <object
    data={pdf2}
    type="application/pdf"
    width="100%"
    height="100%"
    style={{ minHeight: '50vh' }}
  >
    <p>Your browser does not support PDFs. <a href={pdf2}>Download PDF</a>.</p>
  </object>
</div>

      </div>
    </div>
  );
}

export default Potifolio;
