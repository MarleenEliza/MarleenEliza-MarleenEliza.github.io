import React from "react";
import IconContainer, {
  ICON_LIST,
  IconSize,
} from "@/app/components/atoms/IconContainer";

type IconLinkProps = {
  href: string;
  children: React.ReactNode;
  icon: (typeof ICON_LIST)[number];
};

export default function IconLink({ href, children, icon }: IconLinkProps) {
  return (
    <a
      href={href}
      className="underline text-accent-light flex gap-2 text-sm md:text-md"
    >
      <IconContainer
        icon={icon}
        size={IconSize.small}
        className="text-accent-default"
      />
      {children}
    </a>
  );
}