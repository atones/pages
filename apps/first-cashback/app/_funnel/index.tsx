"use client";
import { InstallationStep } from "./InstallationStep";
import { IdentityStep } from "./IdentityStep";
import { AccountStep } from "./AccountStep";
import { PaymentStep } from "./PaymentStep";
import { EndStep } from "./EndStep";
import useFunnel from "next-use-funnel";
import { submit } from "./actions";
// import equal from "fast-deep-equal";

export type FunnelState = {
  installed: boolean;
  identity: {
    name: string;
    phone: string;
  };
  account: {
    no: string;
    bank: string;
  };
};

export default function ExampleFunnel() {
  const [Funnel, state, setState] = useFunnel(
    ["installation", "identity", "account", "payment", "end"] as const,
    {
      initialStep: "installation",
    },
  ).withState<FunnelState>({
    installed: false,
    identity: { name: "", phone: "" },
    account: { no: "", bank: "" },
  });

  return (
    <Funnel>
      <Funnel.Step name="installation">
        <InstallationStep
          defaultValue={Boolean(state.installed)}
          next={(installed) =>
            setState((prev) => ({ ...prev, installed, step: "identity" }))
          }
        />
      </Funnel.Step>
      <Funnel.Step name="identity">
        <IdentityStep
          defaultValues={state.identity}
          next={(identity) =>
            setState((prev) => ({ ...prev, identity, step: "account" }))
          }
        />
      </Funnel.Step>
      <Funnel.Step name="account">
        <AccountStep
          defaultValues={state.account}
          next={async (account) => {
            await submit(state as FunnelState);
            setState((prev) => ({ ...prev, account, step: "payment" }));
          }}
        />
      </Funnel.Step>
      <Funnel.Step name="payment">
        <PaymentStep
          next={() => setState((prev) => ({ ...prev, step: "end" }))}
        />
      </Funnel.Step>
      <Funnel.Step name="end">
        <EndStep />
      </Funnel.Step>
    </Funnel>
  );
}
