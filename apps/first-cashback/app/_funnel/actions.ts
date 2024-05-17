"use server";
import type { FunnelState } from "@/app/_funnel/index";
import { sql } from "@vercel/postgres";
import ky, { HTTPError as _ } from "ky";
import { formatPhoneNumber } from "@toss/utils";

const __ = ky.create({
  prefixUrl: "https://api.example.com",
});

export const submit = async (
  state: FunnelState,
): Promise<{ message: string } | undefined> => {
  console.log("Submitting", state);

  await sql`DO $$ DECLARE existing_status smallint; BEGIN
    SELECT status INTO existing_status FROM first_checkout WHERE name = ${state.identity.name} AND phone = ${formatPhoneNumber(state.identity.phone)};
    IF FOUND THEN
      IF existing_status != 0 THEN
        RAISE EXCEPTION 'ALREADY_SUBMITTED';
        END IF;
    ELSE
      INSERT INTO first_checkout (name, phone, account_no, account_bank)
      VALUES (${state.identity.name}, ${formatPhoneNumber(state.identity.phone)}, ${state.account?.no}, ${state.account?.bank});
    END IF;
  END $$`.catch((e) => {
    console.log(e);
  });

  // await api
  //   .post("비대면결제", {})
  //   .catch((error: HTTPError) => error.response.json());

  return;
};
