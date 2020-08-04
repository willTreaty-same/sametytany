
fetch('https://api.clashofclans.com/v1/clans/%23UVJPJGRV',{

    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM3ZWY2NjRiLWQxNTctNDJhZS1iMzRmLWM2OGYxY2Y4ZGViNyIsImlhdCI6MTU5NjU2MjAwMywic3ViIjoiZGV2ZWxvcGVyLzNlMTNmYWQwLWI2ODItOTRiZC1iMmZlLTMyODU1MmNjZDY3MCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwOS4xNzMuMTc0LjE3NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.83aAXPrBfpMy7dvcnon7XJYsMxXoxFRWEQf8V_FeDYjzn-eCSgAu3zBYY9AWz7mjZF9gfPh7eX18KZ6V2LGliQ'
    },
   
})
.then(result => {
    console.log(result);
    return result.json();
})
.then(datas => {
    console.log(datas);
    document.querySelector('.about-us__content').textContent = datas.description + `Mamy ${datas}`;
})
.catch(error =>{
    console.log('error');
})