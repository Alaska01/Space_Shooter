const id="cDBVAVTstGDE19RprsSq ",getBoard=async()=>{try{const t=`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,s=await fetch(t);return await s.json()}catch(t){throw new Error(t)}},postScore=async(t,s)=>{try{const e=await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,{method:"POST",headers:{"Content-Type":"Application/json"},body:JSON.stringify({user:t,score:s})});return await e.json()}catch(t){throw new Error(t)}};export{getBoard,postScore};