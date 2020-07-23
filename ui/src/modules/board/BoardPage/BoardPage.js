import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Board from "react-trello";

import { updateBoard, getData } from "../actions";

const data = {
  lanes: [
    {
      id: "lane1",
      title: "Planned Tasks",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
          draggable: false,
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
        },
      ],
    },
    {
      id: "lane1",
      title: "Work in Progress",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
          draggable: false,
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
        },
      ],
    },
    {
      id: "lane2",
      title: "Completed",
      label: "0/0",
      cards: [],
    },
  ],
};

const Card = (props) => {
  return (
    <article
      data-id="Card2"
      class="react-trello-card"
    >
      <header class="sc-AxheI sc-fznZeY kTYiy">
        <span draggable="true" class="sc-fzpans sc-fzokOt kQwQSu">
         {props.title}
        </span>
        <span class="sc-fzplWN sc-fzqBZW jDKmpp">{props.label}</span>
        <div class="sc-fzqNqU cBKPeI">
          <button class="sc-fzoNJl eDsTPj">✖</button>
        </div>
      </header>
      <div class="sc-fzqNJr fPbuXO">{props.description}</div>
    </article>
  );
};

const BoardPage = (props) => {
  useEffect(() => {
    async function fetchData() {
      const { user } = props;
      await props.getData(user.token);
    }
    return fetchData();
  }, []);

  console.log(props.board);

  const onLaneAdd = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Board
        data={data}
        editable
        canAddLanes
        draggable
        editLaneTitle
        onLaneAdd={onLaneAdd}
        // components={{ Card }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  board: state.board,
});

const mapDispatchToProps = {
  getData,
  updateBoard,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(BoardPage);
