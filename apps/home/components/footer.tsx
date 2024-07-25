import Link from 'next/link'


const CandyFooter = () => (
  <footer className="flex w-full flex-col items-center bg-gray-700 py-12 text-sm text-gray-400">
    <div className="w-full max-w-screen-desktop px-4">
      <address className="not-italic">
        <strong className="mb-4 block font-bold text-gray-100">앳원스 주식회사</strong>
        사업자 등록번호: 780-87-01727 | 대표이사: 홍성완<br />
        통신판매업: 제2022-서울마포-3118호
        <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=7808701727">사업자정보확인</a>
        <br />
        주소: (04107) 서울특별시 마포구 백범로 35, 떼이야르관 411호<br />
        고객센터: 070-8098-9387 | Email: help@atones.co.kr<br />
      </address>
      <nav className="flex gap-4 py-6 text-gray-200">
        <Link href="/terms/privacy">개인정보처리방침</Link>
        <Link href="/terms/service">서비스 이용약관</Link>
        <Link href="mailto:help@atones.co.kr">Contact Us</Link>
      </nav>
    </div>
  </footer>
)

export default CandyFooter