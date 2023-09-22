"use client";

import { useTranslations } from "next-intl";
import React from "react";

export const AboutPage = () => {
  const t = useTranslations();
  return <div>{t("hello")}</div>;
};

export default AboutPage;
