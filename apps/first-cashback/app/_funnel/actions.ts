"use server";
import type { FunnelState } from "@/app/_funnel/index";
import { sql } from "@vercel/postgres";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { cookies } from "next/headers";

export const submit = async (state: FunnelState) => {
  const sid = cookies().get("sid");

  if (!sid) throw new Error("Session ID not found");

  // 3s delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // await sql`
  //   INSERT INTO contacts (sid, name, phone, sajangnim)
  //   VALUES (${sid.value}, ${state.name}, ${formatPhoneNumber(state.phone)}, ${state.sajangnim})
  //   ON CONFLICT (sid)
  //   DO UPDATE SET name = ${state.name}, phone = ${formatPhoneNumber(state.phone)}, sajangnim = ${state.sajangnim}
  // `;
};
