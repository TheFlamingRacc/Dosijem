import { Typography, Stack, Box } from "@mui/material";
import Span from "./Span";
import SpanLink from "./SpanLink";
import Text from "./Text";
import SectionHeader from "./SectionHeader";
import UlText from "./UlText";

type Segment =
  | string
  | { b?: string; a?: string; href?: string; blank?: boolean; img?: string };

type Block = {
  type: string;
  content: string | Segment[];
};

type PolicyData = {
  title: string;
  blocks: Block[];
};

function renderSegment(seg: Segment, key: number) {
  if (typeof seg === "string") return seg;
  if (seg.img) {
    return (
      <Box
        key={key}
        component="img"
        alt="DOSIJEM"
        src={seg.img}
        height="1.25rem"
        width="auto"
      />
    );
  }
  if (seg.a !== undefined) {
    return (
      <SpanLink key={key} url={seg.href ?? ""} newTab={seg.blank}>
        {seg.a}
      </SpanLink>
    );
  }
  if (seg.b !== undefined) {
    return <Span key={key}>{seg.b}</Span>;
  }
  return null;
}

export default function PolicyContent({ data }: { data: PolicyData }) {
  return (
    <Stack
      spacing={{ xs: 2, md: 3, lg: 4 }}
      mt={{ xs: 8, md: 0 }}
      sx={{ opacity: 0, animation: "FadeIn 1s ease forwards" }}
    >
      <Stack pb={{ xs: 4, md: 0 }} spacing={{ md: 2, lg: 0 }}>
        <Typography
          component="h1"
          fontFamily="e-UkraineHead"
          fontSize={{ xs: "2rem", md: "2.5rem", lg: "3.125rem" }}
          fontWeight={700}
        >
          {data.title}
        </Typography>
        <Box
          width="100%"
          height="5px"
          borderRadius="5px"
          sx={{ backgroundColor: "primary.main" }}
        />
      </Stack>

      {data.blocks.map((block, i) => {
        if (block.type === "header") {
          return <SectionHeader key={i}>{block.content as string}</SectionHeader>;
        }

        const children = (block.content as Segment[]).map((seg, j) =>
          renderSegment(seg, j),
        );

        if (block.type === "list") {
          return <UlText key={i}>{children}</UlText>;
        }

        return <Text key={i}>{children}</Text>;
      })}
    </Stack>
  );
}
