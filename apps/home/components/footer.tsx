import {
  Footer,
  FooterLinkGroup,
  FooterLink, CustomFlowbiteTheme
} from 'flowbite-react'

const { root, groupLink }: CustomFlowbiteTheme['footer'] = {
  root: {
    base: 'rounded-none w-full flex flex-col items-center py-12 text-sm',
    bgDark: 'bg-gray-700 text-gray-400'
  },
  groupLink: {
    base: 'flex gap-4',
    link: {
      base: 'text-gray-200'
    }
  }
}

const CandyFooter = () => (
  <Footer
    bgDark
    theme={{ root }}
  >
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
      <FooterLinkGroup theme={groupLink} className="py-6">
        <FooterLink theme={groupLink.link} href="/terms/privacy">개인정보처리방침</FooterLink>
        <FooterLink theme={groupLink.link} href="/terms/service">서비스 이용약관</FooterLink>
        <FooterLink theme={groupLink.link} href="mailto:help@atones.co.kr">Contact Us</FooterLink>
      </FooterLinkGroup>
    </div>
  </Footer>
)

export default CandyFooter