import {React, useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Problem({info}) {
  console.log(info);
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.pnum}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {info.solved_rank}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const ALL = 0;
const BAEKJOON = 1;
const LEETCODE = 2;
const PROGRAMMERS = 3;

export default function Problems({platform}) {
  const [problems, setProblems] = useState();
  const dump_data = {
    problems : [
      {
        platform : 1,
        title : "백준 문제 title1",
        pnum : 1234,
        solved_rank : "B1",
      },
      {
        platform : 1,
        title : "백준 문제 title2",
        pnum : 1235,
        solved_rank : "G1",
      },
      {
        platform : 1,
        title : "백준 문제 title3",
        pnum : 1236,
        solved_rank : "G2",
      },
      {
        platform : 2,
        title : "릿코드 title",
        pnum : 1234,
        solved_rank : "Medium",
      },
      {
        platform : 2,
        title : "릿코드 title2",
        pnum : 1234,
        solved_rank : "Hard",
      },
      {
        platform : 3,
        title : "Programmers title1",
        pnum : 1234,
        solved_rank : "LV1",
      },
      {
        platform : 3,
        title : "Programmers title1",
        pnum : 1234,
        solved_rank : "LV2",
      },
    ]    
  }

  const handleProblem = (platform) => {
    switch (platform) {
      case ALL:
        setProblems(dump_data.problems);
        break;
      case BAEKJOON:
        setProblems(dump_data.problems.filter(x => x.platform === BAEKJOON));
        break;
      case LEETCODE:
        setProblems(dump_data.problems.filter(x => x.platform === LEETCODE));
        break;
      case PROGRAMMERS:
        setProblems(dump_data.problems.filter(x => x.platform === PROGRAMMERS));
        break;
    };
  };

  useEffect(() => {
    handleProblem(platform);
  }, [platform]);
  console.log(platform);
  console.log(problems);
  return (
    <>
      {!problems ? (
        <p>등록된 문제가 없습니다!</p>
      ) :
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {problems.map((info, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Problem info={info}></Problem>
            </Grid>
          ))}
        </Grid>
      </Box>
      }
    </>
  )
}