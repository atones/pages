import type { ReactNode } from "react";
import { convertNewlineToJSX } from "@/utils/convertNewlineToJSX";

export const Legend = ({
  icon,
  content,
  description,
  title = false,
}: {
  icon?: ReactNode;
  content: string;
  description?: string;
  title?: boolean;
}) => (
  <div className="mb-12 flex flex-col gap-8">
    {icon}
    <div className="flex flex-col gap-2.5">
      <h1
        className={`${title ? "text-3xl" : "text-2xl"} font-semibold tracking-tight`}
      >
        {convertNewlineToJSX(content)}
      </h1>
      {description && (
        <p className="leading-tight text-gray-500">
          {convertNewlineToJSX(description)}
        </p>
      )}
    </div>
  </div>
);

export const Info = ({
  icon,
  description,
}: {
  icon: ReactNode;
  description: string;
}) => (
  <div className="flex items-center gap-6 text-lg">
    <span className="font-toss-face text-xl">{icon}</span>
    <p className="font-semibold">{description}</p>
  </div>
);
