import styles from './page.module.css';  // นำเข้าไฟล์ CSS

export default function About() {
  return (
    <div className="container-fluid">
      <div className={styles.embedResponsive}>  {/* ใช้คลาสที่นำเข้ามาจากไฟล์ CSS */}
        <iframe
          src="https://docs.google.com/spreadsheets/d/1fABUtinv6xpEDeUuoiWadryWxnGltARwtSVGlflIu4s/edit?usp=sharing"
          frameBorder="0"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="Google Sheet"
        />
      </div>
    </div>
  );
}
