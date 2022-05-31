import { React, useState, useEffect } from "react";
import Problem from "components/problem/Problem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ALL = 0;
const BAEKJOON = 1;
const LEETCODE = 2;
const PROGRAMMERS = 3;

export default function Problems({ platform }) {
  const [problems, setProblems] = useState();
  const dumpData = {
    problems: [
      {
        platform: 1,
        title: "백준 문제 title1",
        pnum: 1234,
        solved_rank: "B1",
      },
      {
        platform: 1,
        title: "백준 문제 title2",
        pnum: 1235,
        solved_rank: "G1",
      },
      {
        platform: 1,
        title: "백준 문제 title3",
        pnum: 1236,
        solved_rank: "G2",
      },
      {
        platform: 2,
        title: "릿코드 title",
        pnum: 1234,
        solved_rank: "Medium",
      },
      {
        platform: 2,
        title: "릿코드 title2",
        pnum: 1234,
        solved_rank: "Hard",
      },
      {
        platform: 3,
        title: "Programmers title1",
        pnum: 1234,
        solved_rank: "LV1",
      },
      {
        platform: 3,
        title: "Programmers title1",
        pnum: 1234,
        solved_rank: "LV2",
      },
    ],
  };

  const handleProblem = () => {
    switch (platform) {
      case ALL:
        setProblems(dumpData.problems);
        break;
      case BAEKJOON:
        setProblems(dumpData.problems.filter(x => x.platform === BAEKJOON));
        break;
      case LEETCODE:
        setProblems(dumpData.problems.filter(x => x.platform === LEETCODE));
        break;
      case PROGRAMMERS:
        setProblems(dumpData.problems.filter(x => x.platform === PROGRAMMERS));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleProblem(platform);
  }, [platform]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} key="add">
          <Problem />
        </Grid>
        {problems &&
          problems.map(info => (
            <Grid item xs={2} sm={4} md={4} key={String(info.pnum) + info.solved_rank}>
              <Problem info={info} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
