import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { username } = router.query;

  return <></>;
}
