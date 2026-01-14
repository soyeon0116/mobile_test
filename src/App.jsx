
import './App.css'

function App() {

  return (
    <>
      <div className='section'>
        <header>Standard Bank</header>
        <div>
          <h1>My 시험 리스트</h1>
          <div className='contents'>
            <div className='flex between'>
              <ul >
                <li>
                  <h2>SB26-G0030-SF0005</h2>
                  <h3>Cellanome, inc.</h3>
                  <div className='modelSection'>
                    <div className='flex'>
                      <h4>제품명</h4>
                      <h5>YCKA Till Wireless Charger</h5>
                    </div>
                    <div className='flex'>
                      <h4>모델명</h4>
                      <h5>more Champagne</h5>
                    </div>
                    <div className='flex'>
                      <h4>시험규격</h4>
                      <h5>KS X 3124, KS X 3125</h5>
                    </div>
                  </div>
                </li>
              </ul>
              <div>
                <h5>업무 담당자 : 김형규</h5>
                <button>시험중 <br/>5일차 </button>
              </div>
            </div>
            <div className='flex'>
              <h5>신청 접수일 : 26-01-01</h5>
              <h5>시험 배정일 : 26-01-01</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
