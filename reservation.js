const NumberOfTables = 3;
var BookedTable = 0;
const tableDetails = [];
var index = 0;
var flag = false;

var i = document.getElementById("mybtn");

const reser = () => {
  const userDate = document.getElementById("date").value;
  const UserTime = document.getElementById("time").value;

  console.log(tableDetails);

  if (BookedTable < NumberOfTables) {
    tableDetails[index++] = [
      {
        time: UserTime,
        date: userDate,
      },
    ];

    BookedTable++;
    flag = true;
    console.log("if wala" + index, BookedTable);
  } else {
    for (let { time, date } of tableDetails) {
      console.log("else wala" + index, BookedTable);
      if (time !== UserTime || date !== userDate) {
        tableDetails[index++] = [
          {
            time: UserTime,
            date: userDate,
          },
        ];
        break;
      }
    }
    console.log("else wala" + index, BookedTable);
  }
  console.log(tableDetails);

  if (flag) {
    alert("resrvation done");
  } else {
    alert("not avaliable");
  }
};

i.addEventListener("click", reser);
