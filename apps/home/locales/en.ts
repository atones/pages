const navbar = {
  faq: 'FAQ',
  merchant: 'Inquiry'
} as const

const home = {
  title: 'Time to wake up\nthe sleeping cards',
  subtitle: 'The beginning of smart payment with CandyPay',
  download: 'Download App',

  appeal: {
    'legacy-pay': {
      title: 'Why do we charge cash at ○○ Pay?',
      content: 'To make interest income. If you use a credit card, They can\'t make money because you has the money.'
    },
    'credit-card': {
      title: 'It\'s profitable to use a credit card',
      content: 'Card companies compete with each other to secure consumers. Fees are charged to the seller.'
    },
    'candypay': {
      title: 'Pay easily with your credit cards',
      content: 'Pay only the desired.\nYou can pay with a card while Dutch pay and QR pay.'
    }
  },

  func: {
    customer: {
      split: {
        title: 'Pay only the desired performance with a card',
        desc: 'Say goodbye to the stress of previous monthly spends. You can pay as you want with a single touch, and enjoy the benefits of the card.'
      },
      dutch: {
        title: 'Easily Dutch pay with friends',
        desc: 'Everyone who participates in the payment together can receive the benefits of the card. Just one button is all you need.'
      },
      remote: {
        title: 'Remote payment of academy fees at home',
        desc: 'Are you worried about handing over your card to your child? Pay academy fees at home with real-time remote payment. Card split payment is a bonus.'
      }
    },
    merchant: {
      split: {
        title: 'Split payment in 1 second without waiting',
        desc: 'Easily handle complex split payment requests. Cancellation or amount changes are really simple.'
      },
      remote: {
        title: 'No-show problem with remote payment',
        desc: 'You can directly request payment from the customer at the desired amount. Get a deposit remotely and get rid of the no-show problem.'
      },
      kiosk: {
        title: 'Menu payment without a kiosk',
        desc: 'Are you burdened to install 400,000 won per unit? Receive menu payment for free for life with Candy without a kiosk'
      }
    },
    pos: {
      title: 'My credit card reader for everyone',
      desc: 'Support card payment with CandyPay for freelancers and business owners. You can pay with corporate cards and personal cards. Create new customer opportunities with card split payment.'
    }
  }
}

export default {
  'hello': 'Hello',
  'hello.world': 'Hello world!',
  'welcome': 'Welcome {name}!',

  'w.customer': 'Customer',
  'w.merchant': 'Merchant',

  navbar,
  home
} as const