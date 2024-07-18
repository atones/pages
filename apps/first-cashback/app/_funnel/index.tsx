'use client'
import { InstallationStep } from './InstallationStep'
import { IdentityStep } from './IdentityStep'
import { AccountStep } from './AccountStep'
import { PaymentStep } from './PaymentStep'
import { EndStep } from './EndStep'
import useFunnel from 'next-use-funnel'
import { submit } from './actions'
// import equal from "fast-deep-equal";

export type FunnelState = {
  installed: boolean;
  identity: {
    name: string;
    phone: string;
  };
  account: null | {
    no: string;
    bank: string;
  };
};

const steps = [
  'installation',
  'identity',
  'account',
  'installation-retry',
  'already-exists',
  'payment',
  'end',
] as const

export default function ExampleFunnel () {
  const [Funnel, state, setState] = useFunnel(steps, {
    initialStep: 'installation',
  }).withState<FunnelState>({
    installed: false,
    identity: { name: '', phone: '' },
    account: { no: '', bank: '' },
  })

  return (
    <Funnel>
      <Funnel.Step name="installation">
        <InstallationStep
          defaultValue={Boolean(state.installed)}
          next={(installed) =>
            setState((prev) => ({ ...prev, installed, step: 'identity' }))
          }
        />
      </Funnel.Step>
      <Funnel.Step name="identity">
        <IdentityStep
          defaultValues={state.identity}
          next={(identity) =>
            setState((prev) => ({ ...prev, identity, step: 'account' }))
          }
        />
      </Funnel.Step>
      <Funnel.Step name="account">
        <AccountStep
          defaultValues={state.account ?? {}}
          next={async (account) => {
            const s = { ...state, account } as FunnelState
            const message = (await submit(s))?.message

            switch (message) {
              case '미가입':
                return setState({ ...s, step: 'installation-retry' })
              case '기신청':
                return setState({ ...s, step: 'already-exists' })
              case 'debug':
                return alert(message)
              case undefined:
                return setState({ ...s, step: 'payment' })
            }
          }}
        />
      </Funnel.Step>
      <Funnel.Step name="payment">
        <PaymentStep
          next={() => setState((prev) => ({ ...prev, step: 'end' }))}
        />
      </Funnel.Step>
      <Funnel.Step name="end">
        <EndStep/>
      </Funnel.Step>
    </Funnel>
  )
}
