import { TodayBest } from '../coinholderFolder/TodayCoins';

let newArray = [];
const funcForpage = (pager)=>{
  let idholder = 0;
  for(let i =0; i<pager.length; i += 8){
    let newsobj = pager.slice(i,i+8);
    newArray.push(newsobj)
  }
return newArray;
}

const datapager = funcForpage(TodayBest);
export default datapager;