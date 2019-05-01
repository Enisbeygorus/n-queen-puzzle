import React, { Component } from "react";
import Chessboard8Queen from "../../components/Assets/images/Chessboard8Queen.png";
import nBoard from "../../components/Assets/images/nBoard.png";
import MathModel from "../../components/Assets/images/MathModel.png";
import HistoryChess from "../../components/Assets/images/HistoryChess.jpg";
import QueensAnimation from "../../components/Assets/images/Queens-Animation.gif";

import classes from "./MainMenu.css";

class MainMenu extends Component {
  render() {
    return (
      <div className={classes.MainMenuDiv}>
        <header>
          <div className={classes.MainMenuDivDiv}>
            <h1 className={classes.MainMenuDivDivSpan1}>
              <span className={classes.MainMenuDivDivSpan1}>Welcome</span>
              <span className={classes.MainMenuDivDivSpan2}>
                N queen puzzle briefing
              </span>
            </h1>
          </div>
        </header>
        <main className={classes.MainMenuMain}>
          <section className={classes.MainMenuMainSection1}>
            <div className={classes.MainMenuMainSection1Div1}>
              <h2>Introduction</h2>
            </div>
            <div className={classes.MainMenuMainSection1Div2}>
              <div className={classes.MainMenuMainSection1Div2Div1}>
                <h3>What is 8 queen puzzle ? </h3>
                <p>
                  The eight queens puzzle is the problem of placing eight chess
                  queens on an 8×8 chessboard so that no two queens threaten
                  each other; thus, a solution requires that no two queens share
                  the same row, column, or diagonal. The eight queens puzzle is
                  an example of the more general n queens problem of placing n
                  non-attacking queens on an n×n chessboard, for which solutions
                  exist for all natural numbers n with the exception of n = 2
                  and n = 3
                </p>
              </div>
              <div style={{ position: "relative" }}>
                <img src={Chessboard8Queen} alt="" />
              </div>
              <div className={classes.MainMenuMainSection1Div2}>
                <div
                  className={classes.MainMenuMainSection1Div2Div1}
                  style={{ padding: "50px 0px" }}
                >
                  <img src={HistoryChess} alt="" />
                </div>
                <div>
                  <h3>History</h3>
                  <p>
                    Chess composer Max Bezzel published the eight queens puzzle
                    in 1848. Franz Nauck published the first solutions in 1850.
                    Nauck also extended the puzzle to the n queens problem, with
                    n queens on a chessboard of n×n squares. Since then, many
                    mathematicians, including Carl Friedrich Gauss, have worked
                    on both the eight queens puzzle and its generalized n-queens
                    version. In 1874, S. Gunther proposed a method using
                    determinants to find solutions. J.W.L. Glaisher refined
                    Gunther's approach. In 1972, Edsger Dijkstra used this
                    problem to illustrate the power of what he called structured
                    programming. He published a highly detailed description of a
                    depth-first backtracking algorithm.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={classes.MainMenuMainSection1}>
            <div className={classes.MainMenuMainSection1Div1}>
              <h2>Algorithm</h2>
            </div>
            <div className={classes.MainMenuMainSection1Div2}>
              <div className={classes.MainMenuMainSection2BruteForce}>
                <h3>Brute &nbsp;Force &nbsp;Approach</h3>
                <p>
                  The problem of finding all solutions to the 8-queens problem
                  can be quite computationally expensive, as there are
                  4,426,165,368 possible arrangements of eight queens on an 8×8
                  board, but only 92 solutions. It is possible to use shortcuts
                  that reduce computational requirements or rules of thumb that
                  avoids brute-force computational techniques. For example, by
                  applying a simple rule that constrains each queen to a single
                  column (or row), though still considered brute force, it is
                  possible to reduce the number of possibilities to 16,777,216
                  (that is, 88) possible combinations. Generating permutations
                  further reduces the possibilities to just 40,320 (that is,
                  8!), which are then checked for diagonal attacks.
                </p>
              </div>
              <div className={classes.MainMenuMainSection1Div2}>
                <div className={classes.MainMenuMainSection1Div2Div1}>
                  <h3>More&nbsp; efficient &nbsp;Algorithm </h3>
                  <p>
                    A more efficient algorithm (which can be implemented
                    recursively or not) is to start in the first column in the
                    top left, then it then places a queen in the second column
                    and moves it until it finds a place where it cannot be hit
                    by the queen in the first column. It then places a queen in
                    the third column and moves it until it cannot be hit by
                    either of the first two queens. Then it continues this
                    process with the remaining columns. If there is no place for
                    a queen in the current column the program goes back to the
                    preceding column and moves the queen in that column. If the
                    queen there is at the end of the column it removes that
                    queen as well and goes to the preceding column. If the
                    current column is the last column and a safe place has been
                    found for the last queen, then a solution of the puzzle has
                    been found. If the current column is the first column and
                    its queen is being moved off the board then all possible
                    configurations have been examined, all solutions have been
                    found, and the algorithm terminates.
                  </p>
                </div>
                <div
                  style={{ position: "relative", padding: "80px 0px 0px 0px" }}
                >
                  <img src={QueensAnimation} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className={classes.MainMenuMainSection1}>
            <div className={classes.MainMenuMainSection1Div1}>
              <h2>Solutions</h2>
            </div>
            <div className={classes.MainMenuMainSection1Div2}>
              <div className={classes.MainMenuMainSection1Div2Div1}>
                <h3>N Size Board</h3>
                <p style={{ width: "600px" }}>
                  It's very easy to expand (and contract) this puzzle to other
                  sized chess boards. To the right is a table of the number of
                  solutions for different sized n x n boards. For each size
                  board I've shown the number of total solutions, and also the
                  number of distinct types of solutions (unique before rotations
                  and reflections). Trivially, there is only one solution for a
                  1 x 1 board, and it's not hard to see that there are no
                  possible solutions for a 2 x 2 or 3 x 3 sized board. It's
                  interesting that, whilst there are 10 solutions to a 5 x 5
                  board, the number of solutions drops to just 4 solutions on a
                  6 x 6 board. There is (currently) no known formula for
                  determining the number possible solutions for an n x n board,
                  and an internet search reveals that the highest calculated
                  board size to-date is 26 x 26.
                </p>
              </div>
              <div style={{ position: "relative" }}>
                <img src={nBoard} alt="" />
              </div>
            </div>
            <div className={classes.MainMenuMainSection1Div1}>
             <h2 style={{margin: '60px'}}>MATHEMATICAL MODEL</h2>
             <img src={MathModel} alt="" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default MainMenu;
