window.onload = async () => {
  // const socket = io.connect()
submitEntryDate()
  console.log("load after")
  await loadhomeregist()
  loaddailyEng()
  

}


function submitEntryDate() {
  const form = document.getElementById('entry-form')
  form.addEventListener('submit', async function (e) {
      e.preventDefault()
      //const form = document.getElementById('entry-form')
      const formData = new FormData()
      formData.append('entryDate', form.entryDate.value)

      const data = {}

      data["entryDate"] = form.entryDate.value

      console.log(data["entryDate"])


      // method: POST, Path: "/memo", Request Body
      const resp = await fetch('/after', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)//formData),
      })
      if (resp.status === 200) {
          console.log('OK')
     loadhomeregist()
      }
  })
 
}




////------------------Revise after-Home Page REgister bar
async function loadhomeregist() {
  // fetch -> HTTP Request (Method: GET + Path: /memos)
  const resp = await fetch('/after')
  const member = (await resp.json())
  console.log("front end")
  console.log(member)
  document.querySelector("#afterHomeName").innerHTML = member[0].username;
  document.querySelector("#afterHomeID").innerHTML = member[0].id + "008";
  const entryOfDate = member[0].entry_date;
  console.log(entryOfDate)
  updateProcessBar(entryOfDate);
  document.querySelector("#homepagePic").innerHTML = `<img src="images/${member[0].profile_pic}" width="400" height="300">`
}


function getNumberOfDays(start) {
  const date1 = new Date(start);
  const date2 = new Date();
  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;
  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();
  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}
function updateProcessBar(entryDate) {
    // mm/dd/yyyy
//   const entryDate = "9/15/2021"

  const entry_rperiod = getNumberOfDays(entryDate)
  const fix_days=183;
console.log(entry_rperiod)
procress_result = (entry_rperiod/fix_days)*100;
 ///if entry_rperiod>=fix_days ,100% ; if <now(), 0%
if(entry_rperiod<0){
  const processBar = document.querySelector(".pracessBar")
  processBar.style.width ="0%";
} else if(entry_rperiod >= fix_days || entry_rperiod ==0){
  const processBar = document.querySelector(".pracessBar")
  processBar.style.width ="100%";
} else {const processBar = document.querySelector(".pracessBar")
processBar.style.width =  procress_result + "%";}

const pracessBarResult=document.querySelector(".pracessBarResult")
if (0 >= entry_rperiod) {
  pracessBarResult.innerHTML="weeee~"
} else if (100 < entry_rperiod && entry_rperiod < 183){
  console.log(entry_rperiod)
  console.log(typeof entry_rperiod)
  pracessBarResult.innerHTML="喂呀～～仲有： " + (183 - entry_rperiod) + "日，唔好周圍走喇"
} else if (0< entry_rperiod && entry_rperiod <= 100){
  pracessBarResult.innerHTML="嘩～～大喇喇喺度住左： " + entry_rperiod + "日喇"
} else if (183 <=entry_rperiod){pracessBarResult.innerHTML="weeee~"} else {
  pracessBarResult.innerHTML="weeee~ 加油呀"
}
}
updateProcessBar()


$(".meter > span").each(function () {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate(
      {
        width: $(this).data("origWidth")
      },
      1200
    );
});


async function loaddailyEng() {
  // fetch -> HTTP Request (Method: GET + Path: /memos)
  const resp = await fetch('/dilyEng')
  const dailyEng = (await resp.json())
  console.log("dailyengsh")
  console.log(dailyEng)
  document.querySelector("#dailyEngH1").value= dailyEng[0].header;
  document.querySelector("#dailyEng2").value = dailyEng[0].content;
  document.querySelector("#dailyEng3").value = dailyEng[0].sample;
  document.querySelector("#dailyEng4").value = dailyEng[0].translate;


}











