import styles from './Carousel.module.css';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1500">
            {/* ส่วนนี้ถูกลบ img ออก */}
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            {/* ส่วนนี้ถูกลบ img ออก */}
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            {/* ส่วนนี้ถูกลบ img ออก */}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ปรับขนาด Google Form ให้เต็มหน้าจอ */}
      <div className={styles.formContainer}>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSdw0Jcf6omQzZvrdjaC436vftQyahBK0E_taiy80su0eSlZjA/viewform?usp=pp_url&entry.1296439976=%E0%B8%A1%E0%B8%B2&entry.1981547533=%E0%B8%A1%E0%B8%B2&entry.591897961=%E0%B8%A1%E0%B8%B2&entry.1933137147=%E0%B8%A1%E0%B8%B2&entry.1280408687=%E0%B8%A1%E0%B8%B2&entry.1702403862=%E0%B8%A1%E0%B8%B2&entry.322729572=%E0%B8%A1%E0%B8%B2&entry.104334802=%E0%B8%A1%E0%B8%B2&entry.1038043155=%E0%B8%A1%E0%B8%B2&entry.969810214=%E0%B8%A1%E0%B8%B2&entry.1851015997=%E0%B8%A1%E0%B8%B2&entry.342092915=%E0%B8%A1%E0%B8%B2&entry.877686298=%E0%B8%A1%E0%B8%B2&entry.1045882734=%E0%B8%A1%E0%B8%B2&entry.2054628533=%E0%B8%A1%E0%B8%B2&entry.524851284=%E0%B8%A1%E0%B8%B2&entry.269429454=%E0%B8%A1%E0%B8%B2&entry.284697989=%E0%B8%A1%E0%B8%B2&entry.1514761575=%E0%B8%A1%E0%B8%B2&entry.621485721=%E0%B8%A1%E0%B8%B2&entry.725799731=%E0%B8%A1%E0%B8%B2&entry.634258676=%E0%B8%A1%E0%B8%B2&entry.1333638917=%E0%B8%A1%E0%B8%B2&entry.415955754=%E0%B8%A1%E0%B8%B2&entry.1078368694=%E0%B8%A1%E0%B8%B2&entry.558475903=%E0%B8%A1%E0%B8%B2&entry.1093220034=%E0%B8%A1%E0%B8%B2&entry.2056466153=%E0%B8%A1%E0%B8%B2&entry.848055166=%E0%B8%A1%E0%B8%B2&entry.921612829=%E0%B8%A1%E0%B8%B2"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          style={{ minHeight: '100vh' }} 
          marginHeight="0" 
          marginWidth="0">
          กำลังโหลด…
        </iframe>
      </div>
    </div>
  );
}
