import React, {useState} from 'react';
import "./App.css"


interface boardInterface {
    id: number,
    title: string,
    items: itemInterface[]
}

interface itemInterface {
    id: number,
    title: string,
}


export const App = () => {
    const [boards, setBoards] = useState<boardInterface[]>([
        {
            id: 1,
            title: "toDo",
            items: [{
                id: 1, title: "Go to shop"
            }, {
                id: 2, title: "Take student's ticket"
            }, {
                id: 3, title: "Take notebook from Elza"
            }],
        },
        {
            id: 2,
            title: "toDo2",
            items: [{
                id: 4, title: "Go to shop2"
            }, {
                id: 5, title: "Take student's ticket2"
            }, {
                id: 6, title: "Take notebook from Elza2"
            }],
        },
        {
            id: 3,
            title: "Finished",
            items: [{
                id: 7, title: "Go to shop3"
            }, {
                id: 8, title: "Take student's ticket3"
            }, {
                id: 9, title: "Take notebook from Elza3"
            }],
        }
    ])

    function dragStartHandler(
        e: any,
        board: boardInterface,
        boardsItem: itemInterface,
    ) {
        console.log(e)
    }

    function dragEndHandler(
        e: any,
    ) {
        e.target.style.boxShadow = "none"
    }

    function dragOverHandler(
        e: any,
        board: boardInterface,
        boardsItem: itemInterface,
    ) {
        e.preventDefault()
        if (e.target.className === "card") {
            e.target.style.boxShadow = "0px 4px 3px blue"
        }
    }

    function dropHandler(
        e: any,
        board: boardInterface,
        boardsItem: itemInterface,
    ) {
        e.preventDefault()
        e.target.style.boxShadow = "none"
    }

    function dragLeaveHandler(e: any) {
        e.target.style.boxShadow = "none"
    }

    return (
        <div className={"main-block"}>
            <div className={"title"}>
                My Jira App
            </div>
            <div className={"tables"}>
                {boards.map(board => {
                    return (
                        <div
                            key={board.id}
                            className={"board"}
                        >
                            <div className={"title"}>
                                {board.title}
                            </div>
                            {board.items.map(boardsItem => {
                                return (
                                    <div
                                        key={boardsItem.id}
                                        className={"card"}
                                        draggable={"true"}
                                        onDragStart={(e) => dragStartHandler(e, board, boardsItem)}
                                        onDragLeave={(e) => dragLeaveHandler(e)}
                                        onDragEnd={(e) => dragEndHandler(e)}
                                        onDragOver={(e) => dragOverHandler(e, board, boardsItem)}
                                        onDrop={(e) => dropHandler(e, board, boardsItem)}
                                    >
                                        {boardsItem.title}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
