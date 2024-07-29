//1.로딩페이지
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  // 상태변수를 설정
  const[isLoading,setisLoading] = useState(true);
  const[loadCounter,setLoadcounter]= useState(0);
  

  useEffect(
    ()=>{

      function IncreseCounter(){
        let _counter = loadCounter;
        _counter = _counter+1;
        // couter값이 10 이상이면 loading종료 ,  타이머 종료
        if(_counter > 10){
          setisLoading(false);
          clearInterval(loadTimer);
        }
        setLoadcounter(
    
        );
      }


      // 타이머로 loadcounter 값을 1씩 증가
      const loadTimer = setInterval(
        IncreseCounter,1000
      );
      
  return()=>{ clearInterval(loadTimer);}
    },[loadCounter]
    // loadCounter가 변할 때 마다
  );

  return (
    <div>
      {isLoading? `loading ...${loadCounter}`:'Loaded'}
    </div>
  );
}

export default App;
