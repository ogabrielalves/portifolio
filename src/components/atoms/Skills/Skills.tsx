import style from "./Skills.module.scss";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface ChipData {
  key: number;
  label: string;
}

export default function Skills() {
  const [chipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Java" },
    { key: 1, label: "Javascript" },
    { key: 1, label: "Typescript" },
    { key: 2, label: "C#" },
    { key: 3, label: "React" },
    { key: 4, label: "Springboot" },
    { key: 5, label: "MySQL" },
    { key: 6, label: "Azure" },
    { key: 7, label: "AWS" },
  ]);

  return (
    <>
      <Stack spacing={1} alignItems="center">
        <Stack className={style.container}>
          {chipData.map((data) => {
            return <Chip className={style.chip} label={data.label} />;
          })}
        </Stack>
      </Stack>
    </>
  );
}
